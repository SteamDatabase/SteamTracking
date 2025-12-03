/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7403],
  {
    37403: (e, t, r) => {
      r.d(t, {
        $Y: () => K,
        BE: () => w,
        QU: () => H,
        Tc: () => g,
        _z: () => F,
        bg: () => o,
        kZ: () => we,
        wS: () => Me,
        zQ: () => h,
      });
      var i,
        n,
        a,
        s,
        o,
        m,
        l,
        u,
        c,
        d,
        _,
        B,
        g,
        y,
        b,
        p,
        M,
        w,
        f = r(80613),
        z = r.n(f),
        R = r(89068),
        S = r(56545),
        C = r(36003);
      !(function (e) {
        (e[(e.k_ECommentDeleteReason_Invalid = 0)] =
          "k_ECommentDeleteReason_Invalid"),
          (e[(e.k_ECommentDeleteReason_User = 1)] =
            "k_ECommentDeleteReason_User"),
          (e[(e.k_ECommentDeleteReason_ThreadOwner = 2)] =
            "k_ECommentDeleteReason_ThreadOwner"),
          (e[(e.k_ECommentDeleteReason_Moderator = 3)] =
            "k_ECommentDeleteReason_Moderator"),
          (e[(e.k_ECommentDeleteReason_Support = 4)] =
            "k_ECommentDeleteReason_Support"),
          (e[(e.k_ECommentDeleteReason_Spam = 5)] =
            "k_ECommentDeleteReason_Spam"),
          (e[(e.k_ECommentDeleteReason_AccountDeletion = 6)] =
            "k_ECommentDeleteReason_AccountDeletion");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_ECommunityWordFilterTypeInvalid = 0)] =
            "k_ECommunityWordFilterTypeInvalid"),
            (e[(e.k_ECommunityWordFilterTypeBadWords = 1)] =
              "k_ECommunityWordFilterTypeBadWords"),
            (e[(e.k_ECommunityWordFilterTypeBlacklistedURLs = 2)] =
              "k_ECommunityWordFilterTypeBlacklistedURLs"),
            (e[(e.k_ECommunityWordFilterTypeWhitelistedGreenlightURLs = 3)] =
              "k_ECommunityWordFilterTypeWhitelistedGreenlightURLs"),
            (e[(e.k_ECommunityWordFilterTypeBlacklistOverrideDomains = 4)] =
              "k_ECommunityWordFilterTypeBlacklistOverrideDomains"),
            (e[(e.k_ECommunityWordFilterTypeBadWordsInChina = 5)] =
              "k_ECommunityWordFilterTypeBadWordsInChina"),
            (e[(e.k_ECommunityWordFilterTypeCleanWords = 6)] =
              "k_ECommunityWordFilterTypeCleanWords"),
            (e[(e.k_ECommunityWordFilterTypeCleanWordsComplete = 7)] =
              "k_ECommunityWordFilterTypeCleanWordsComplete"),
            (e[(e.k_ECommunityWordFilterTypeBadNames = 8)] =
              "k_ECommunityWordFilterTypeBadNames"),
            (e[(e.k_ECommunityWordFilterTypeGoodNames = 9)] =
              "k_ECommunityWordFilterTypeGoodNames");
        })(n || (n = {})),
        (function (e) {
          (e[(e.k_ECommunityWordFilterReason_Invalid = 0)] =
            "k_ECommunityWordFilterReason_Invalid"),
            (e[(e.k_ECommunityWordFilterReason_Phishing = 1)] =
              "k_ECommunityWordFilterReason_Phishing"),
            (e[(e.k_ECommunityWordFilterReason_Spam = 2)] =
              "k_ECommunityWordFilterReason_Spam"),
            (e[(e.k_ECommunityWordFilterReason_AdultContent = 3)] =
              "k_ECommunityWordFilterReason_AdultContent"),
            (e[(e.k_ECommunityWordFilterReason_Cheat = 4)] =
              "k_ECommunityWordFilterReason_Cheat"),
            (e[(e.k_ECommunityWordFilterReason_Referral = 5)] =
              "k_ECommunityWordFilterReason_Referral"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageStrongProfanity = 6)
            ] =
              "k_ECommunityWordFilterReason_InappropriateLanguageStrongProfanity"),
            (e[(e.k_ECommunityWordFilterReason_Piracy = 7)] =
              "k_ECommunityWordFilterReason_Piracy"),
            (e[(e.k_ECommunityWordFilterReason_Scam = 8)] =
              "k_ECommunityWordFilterReason_Scam"),
            (e[(e.k_ECommunityWordFilterReason_Malware = 9)] =
              "k_ECommunityWordFilterReason_Malware"),
            (e[(e.k_ECommunityWordFilterReason_FreeTLD = 10)] =
              "k_ECommunityWordFilterReason_FreeTLD"),
            (e[(e.k_ECommunityWordFilterReason_Harassment = 11)] =
              "k_ECommunityWordFilterReason_Harassment"),
            (e[(e.k_ECommunityWordFilterReason_URLShortener = 12)] =
              "k_ECommunityWordFilterReason_URLShortener"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageSlur = 13)
            ] = "k_ECommunityWordFilterReason_InappropriateLanguageSlur"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageOther = 14)
            ] = "k_ECommunityWordFilterReason_InappropriateLanguageOther"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageMildProfanity = 15)
            ] =
              "k_ECommunityWordFilterReason_InappropriateLanguageMildProfanity"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageHateSpeech = 16)
            ] = "k_ECommunityWordFilterReason_InappropriateLanguageHateSpeech"),
            (e[(e.k_ECommunityWordFilterReason_Max = 17)] =
              "k_ECommunityWordFilterReason_Max");
        })(a || (a = {})),
        (function (e) {
          (e[(e.k_EPushUpdatesToCrowdIn_Invalid = 0)] =
            "k_EPushUpdatesToCrowdIn_Invalid"),
            (e[(e.k_EPushUpdatesToCrowdIn_Never = 1)] =
              "k_EPushUpdatesToCrowdIn_Never"),
            (e[(e.k_EPushUpdatesToCrowdIn_OnEnglishChanged = 2)] =
              "k_EPushUpdatesToCrowdIn_OnEnglishChanged"),
            (e[(e.k_EPushUpdatesToCrowdIn_Always = 3)] =
              "k_EPushUpdatesToCrowdIn_Always");
        })(s || (s = {})),
        (function (e) {
          (e[(e.k_EClanImageFileType_Unknown = 0)] =
            "k_EClanImageFileType_Unknown"),
            (e[(e.k_EClanImageFileType_JPEG = 1)] =
              "k_EClanImageFileType_JPEG"),
            (e[(e.k_EClanImageFileType_GIF = 2)] = "k_EClanImageFileType_GIF"),
            (e[(e.k_EClanImageFileType_PNG = 3)] = "k_EClanImageFileType_PNG"),
            (e[(e.k_EClanImageFileType_MP4 = 4)] = "k_EClanImageFileType_MP4"),
            (e[(e.k_EClanImageFileType_WEBM = 5)] =
              "k_EClanImageFileType_WEBM"),
            (e[(e.k_EClanImageFileType_VTT = 6)] = "k_EClanImageFileType_VTT"),
            (e[(e.k_EClanImageFileType_SRT = 7)] = "k_EClanImageFileType_SRT"),
            (e[(e.k_EClanImageFileType_SVG = 8)] = "k_EClanImageFileType_SVG"),
            (e[(e.k_EClanImageFileType_XML = 9)] = "k_EClanImageFileType_XML"),
            (e[(e.k_EClanImageFileType_WEBP = 10)] =
              "k_EClanImageFileType_WEBP");
        })(o || (o = {})),
        (function (e) {
          (e[(e.k_EClanImageGroup_None = 0)] = "k_EClanImageGroup_None"),
            (e[(e.k_EClanImageGroup_Announcement = 1)] =
              "k_EClanImageGroup_Announcement"),
            (e[(e.k_EClanImageGroup_Curator = 2)] =
              "k_EClanImageGroup_Curator");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EProfileCooldown_Unknown = 0)] =
            "k_EProfileCooldown_Unknown"),
            (e[(e.k_EProfileCooldown_PersonaName = 1)] =
              "k_EProfileCooldown_PersonaName"),
            (e[(e.k_EProfileCooldown_ProfileSummary = 2)] =
              "k_EProfileCooldown_ProfileSummary");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EAvatarState_Unknown = 0)] = "k_EAvatarState_Unknown"),
            (e[(e.k_EAvatarState_Approved = 1)] = "k_EAvatarState_Approved"),
            (e[(e.k_EAvatarState_Denied = 2)] = "k_EAvatarState_Denied");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EAbuseNotificationType_Invalid = 0)] =
            "k_EAbuseNotificationType_Invalid"),
            (e[(e.k_EAbuseNotificationType_TradeBan = 1)] =
              "k_EAbuseNotificationType_TradeBan"),
            (e[(e.k_EAbuseNotificationType_Profile = 2)] =
              "k_EAbuseNotificationType_Profile"),
            (e[(e.k_EAbuseNotificationType_Group = 3)] =
              "k_EAbuseNotificationType_Group"),
            (e[(e.k_EAbuseNotificationType_Comment = 4)] =
              "k_EAbuseNotificationType_Comment"),
            (e[(e.k_EAbuseNotificationType_Forum = 5)] =
              "k_EAbuseNotificationType_Forum");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EModeratorAction_Resolve = 0)] =
            "k_EModeratorAction_Resolve"),
            (e[(e.k_EModeratorAction_Ban = 1)] = "k_EModeratorAction_Ban"),
            (e[(e.k_EModeratorAction_Unban = 2)] = "k_EModeratorAction_Unban"),
            (e[(e.k_EModeratorAction_Hide = 3)] = "k_EModeratorAction_Hide"),
            (e[(e.k_EModeratorAction_Unhide = 4)] =
              "k_EModeratorAction_Unhide"),
            (e[(e.k_EModeratorAction_Lock = 5)] = "k_EModeratorAction_Lock"),
            (e[(e.k_EModeratorAction_Delete = 6)] =
              "k_EModeratorAction_Delete"),
            (e[(e.k_EModeratorAction_Undelete = 7)] =
              "k_EModeratorAction_Undelete"),
            (e[(e.k_EModeratorAction_MassReset = 8)] =
              "k_EModeratorAction_MassReset"),
            (e[(e.k_EModeratorAction_Unlock = 9)] =
              "k_EModeratorAction_Unlock"),
            (e[(e.k_EModeratorAction_Warn = 10)] = "k_EModeratorAction_Warn"),
            (e[(e.k_EModeratorAction_Move = 11)] = "k_EModeratorAction_Move"),
            (e[(e.k_EModeratorAction_Classify = 12)] =
              "k_EModeratorAction_Classify"),
            (e[(e.k_EModeratorAction_Blur = 13)] = "k_EModeratorAction_Blur"),
            (e[(e.k_EModeratorAction_Unblur = 14)] =
              "k_EModeratorAction_Unblur");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EActorAffiliation_Unknown = 0)] =
            "k_EActorAffiliation_Unknown"),
            (e[(e.k_EActorAffiliation_Valve = 1)] =
              "k_EActorAffiliation_Valve"),
            (e[(e.k_EActorAffiliation_Keywords = 2)] =
              "k_EActorAffiliation_Keywords"),
            (e[(e.k_EActorAffiliation_TaskUs = 3)] =
              "k_EActorAffiliation_TaskUs"),
            (e[(e.k_EActorAffiliation_Volunteer = 4)] =
              "k_EActorAffiliation_Volunteer");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_EAnswerActorRank_None = 0)] = "k_EAnswerActorRank_None"),
            (e[(e.k_EAnswerActorRank_Valve = 1)] = "k_EAnswerActorRank_Valve"),
            (e[(e.k_EAnswerActorRank_GlobalMod = 2)] =
              "k_EAnswerActorRank_GlobalMod"),
            (e[(e.k_EAnswerActorRank_Developer = 3)] =
              "k_EAnswerActorRank_Developer"),
            (e[(e.k_EAnswerActorRank_Moderator = 4)] =
              "k_EAnswerActorRank_Moderator"),
            (e[(e.k_EAnswerActorRank_OP = 5)] = "k_EAnswerActorRank_OP");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_EPartnerEventDisplayLocation_Invalid = 0)] =
            "k_EPartnerEventDisplayLocation_Invalid"),
            (e[(e.k_EPartnerEventDisplayLocation_AppDetailsSpotlight = 1)] =
              "k_EPartnerEventDisplayLocation_AppDetailsSpotlight"),
            (e[(e.k_EPartnerEventDisplayLocation_LibraryOverview = 2)] =
              "k_EPartnerEventDisplayLocation_LibraryOverview"),
            (e[(e.k_EPartnerEventDisplayLocation_StoreAppPage = 3)] =
              "k_EPartnerEventDisplayLocation_StoreAppPage"),
            (e[(e.k_EPartnerEventDisplayLocation_EventScroller = 4)] =
              "k_EPartnerEventDisplayLocation_EventScroller"),
            (e[(e.k_EPartnerEventDisplayLocation_AppDetailsActivity = 5)] =
              "k_EPartnerEventDisplayLocation_AppDetailsActivity"),
            (e[(e.k_EPartnerEventDisplayLocation_CommunityHub = 6)] =
              "k_EPartnerEventDisplayLocation_CommunityHub"),
            (e[(e.k_EPartnerEventDisplayLocation_StoreFrontPage = 7)] =
              "k_EPartnerEventDisplayLocation_StoreFrontPage"),
            (e[(e.k_EPartnerEventDisplayLocation_NewsHub = 8)] =
              "k_EPartnerEventDisplayLocation_NewsHub"),
            (e[(e.k_EPartnerEventDisplayLocation_GamepadHome = 9)] =
              "k_EPartnerEventDisplayLocation_GamepadHome"),
            (e[(e.k_EPartnerEventDisplayLocation_StoreHub = 10)] =
              "k_EPartnerEventDisplayLocation_StoreHub");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EProfileModerationState_Unassigned = 0)] =
            "k_EProfileModerationState_Unassigned"),
            (e[(e.k_EProfileModerationState_Assigned = 1)] =
              "k_EProfileModerationState_Assigned"),
            (e[(e.k_EProfileModerationState_Escalated = 2)] =
              "k_EProfileModerationState_Escalated"),
            (e[(e.k_EProfileModerationState_Resolved = 3)] =
              "k_EProfileModerationState_Resolved");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_ECommentReportAction_Invalid = 0)] =
            "k_ECommentReportAction_Invalid"),
            (e[(e.k_ECommentReportAction_NoAction = 1)] =
              "k_ECommentReportAction_NoAction"),
            (e[(e.k_ECommentReportAction_Deleted = 2)] =
              "k_ECommentReportAction_Deleted"),
            (e[(e.k_ECommentReportAction_Hidden = 3)] =
              "k_ECommentReportAction_Hidden"),
            (e[(e.k_ECommentReportAction_ExternalDelete = 4)] =
              "k_ECommentReportAction_ExternalDelete"),
            (e[(e.k_ECommentReportAction_ThreadDeleted = 5)] =
              "k_ECommentReportAction_ThreadDeleted");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_EBannedVanityURLAction_Invalid = 0)] =
            "k_EBannedVanityURLAction_Invalid"),
            (e[(e.k_EBannedVanityURLAction_Add = 1)] =
              "k_EBannedVanityURLAction_Add"),
            (e[(e.k_EBannedVanityURLAction_Remove = 2)] =
              "k_EBannedVanityURLAction_Remove");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_EBannedVanityURLSource_Unknown = 0)] =
            "k_EBannedVanityURLSource_Unknown"),
            (e[(e.k_EBannedVanityURLSource_ResetContent = 1)] =
              "k_EBannedVanityURLSource_ResetContent"),
            (e[(e.k_EBannedVanityURLSource_Manual = 2)] =
              "k_EBannedVanityURLSource_Manual");
        })(M || (M = {}));
      class F extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appids || R.Sg(F.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: R.qM.readInt32,
                    pbr: R.qM.readPackedInt32,
                    bw: R.gp.writeRepeatedInt32,
                  },
                  language: { n: 2, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = R.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Request";
        }
      }
      class W extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.apps || R.Sg(W.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { apps: { n: 1, c: C.WV, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = R.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Response";
        }
      }
      class h extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.appid || R.Sg(h.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  appid: { n: 1, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  language: { n: 2, br: R.qM.readString, bw: R.gp.writeString },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = R.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Request";
        }
      }
      class v extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.appid || R.Sg(v.M()),
            f.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  token_lists: { n: 2, c: E, r: !0, q: !0 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = R.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response";
        }
      }
      class T extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.name || R.Sg(T.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  name: { n: 1, br: R.qM.readString, bw: R.gp.writeString },
                  value: { n: 2, br: R.qM.readString, bw: R.gp.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = R.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
        }
      }
      class E extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.language || R.Sg(E.M()),
            f.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  language: { n: 1, br: R.qM.readString, bw: R.gp.writeString },
                  tokens: { n: 2, c: T, r: !0, q: !0 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = R.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
        }
      }
      class j extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || R.Sg(j.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: R.qM.readEnum,
                    bw: R.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 5,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  start: { n: 6, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  count: { n: 7, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  upvoters: { n: 8, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  include_deleted: {
                    n: 9,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  gidcomment: {
                    n: 10,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  time_oldest: {
                    n: 11,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  oldest_first: {
                    n: 12,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = R.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Request";
        }
      }
      class k extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.gidcomment || R.Sg(k.M()),
            f.Message.initialize(this, e, 0, -1, [12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  text: { n: 4, br: R.qM.readString, bw: R.gp.writeString },
                  upvotes: { n: 5, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  hidden: { n: 6, br: R.qM.readBool, bw: R.gp.writeBool },
                  hidden_by_user: {
                    n: 7,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  deleted: { n: 8, br: R.qM.readBool, bw: R.gp.writeBool },
                  ipaddress: { n: 9, c: C.kK },
                  total_hidden: {
                    n: 10,
                    br: R.qM.readInt32,
                    bw: R.gp.writeInt32,
                  },
                  upvoted_by_user: {
                    n: 11,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  reactions: { n: 12, c: q, r: !0, q: !0 },
                  gidparentcomment: {
                    n: 13,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  delete_reason: {
                    n: 14,
                    br: R.qM.readEnum,
                    bw: R.gp.writeEnum,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = R.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment";
        }
      }
      class q extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.reactionid || R.Sg(q.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  reactionid: {
                    n: 1,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  count: { n: 2, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = R.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment_Reaction";
        }
      }
      class I extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.comments || R.Sg(I.M()),
            f.Message.initialize(this, e, 0, -1, [1, 2, 9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  comments: { n: 1, c: k, r: !0, q: !0 },
                  deleted_comments: { n: 2, c: k, r: !0, q: !0 },
                  steamid: {
                    n: 3,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 4,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  start: { n: 5, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  count: { n: 6, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  total_count: {
                    n: 7,
                    br: R.qM.readInt32,
                    bw: R.gp.writeInt32,
                  },
                  upvotes: { n: 8, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  upvoters: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: R.qM.readUint32,
                    pbr: R.qM.readPackedUint32,
                    bw: R.gp.writeRepeatedUint32,
                  },
                  user_subscribed: {
                    n: 10,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  user_upvoted: {
                    n: 11,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  answer_commentid: {
                    n: 12,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  answer_actor: {
                    n: 13,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  answer_actor_rank: {
                    n: 14,
                    br: R.qM.readInt32,
                    bw: R.gp.writeInt32,
                  },
                  can_post: { n: 15, br: R.qM.readBool, bw: R.gp.writeBool },
                  comment_thread_type: {
                    n: 16,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  gidfeature: {
                    n: 17,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 18,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = R.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Response";
        }
      }
      class U extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.steamid || R.Sg(U.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  steamid: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: R.qM.readEnum,
                    bw: R.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  text: { n: 6, br: R.qM.readString, bw: R.gp.writeString },
                  gidparentcomment: {
                    n: 7,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  suppress_notifications: {
                    n: 8,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  is_report: { n: 9, br: R.qM.readBool, bw: R.gp.writeBool },
                  start_hidden: {
                    n: 10,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = R.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Request";
        }
      }
      class O extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.gidcomment || R.Sg(O.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  count: { n: 3, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                  upvotes: { n: 4, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = R.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Response";
        }
      }
      class A extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.steamid || R.Sg(A.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  steamid: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: R.qM.readEnum,
                    bw: R.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  undelete: { n: 6, br: R.qM.readBool, bw: R.gp.writeBool },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = R.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Request";
        }
      }
      class P extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Response";
        }
      }
      class x extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.commentthreadtype || R.Sg(x.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  rate_up: { n: 6, br: R.qM.readBool, bw: R.gp.writeBool },
                  suppress_notifications: {
                    n: 7,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = R.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Request";
        }
      }
      class N extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.gidcomment || R.Sg(N.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  count: { n: 3, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  upvotes: { n: 4, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  has_upvoted: { n: 5, br: R.qM.readBool, bw: R.gp.writeBool },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = R.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Response";
        }
      }
      class G extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.commentthreadtype || R.Sg(G.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  max_results: {
                    n: 6,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = R.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Request";
        }
      }
      class L extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.commentthreadid || R.Sg(L.M()),
            f.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  commentthreadid: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  upvotes: { n: 3, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  has_upvoted: { n: 4, br: R.qM.readBool, bw: R.gp.writeBool },
                  upvoter_accountids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: R.qM.readUint32,
                    pbr: R.qM.readPackedUint32,
                    bw: R.gp.writeRepeatedUint32,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = R.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Response";
        }
      }
      class D extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.steamid || R.Sg(D.M()),
            f.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  steamid: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  steamids_verifymembership: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: R.qM.readUint64String,
                    pbr: R.qM.readPackedUint64String,
                    bw: R.gp.writeRepeatedUint64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = R.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_VerifyClanMembership_Request";
        }
      }
      class V extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamids_nonmembers || R.Sg(V.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamids_nonmembers: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: R.qM.readUint64String,
                    pbr: R.qM.readPackedUint64String,
                    bw: R.gp.writeRepeatedUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = R.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_VerifyClanMembership_Response";
        }
      }
      class H extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.announcementid || R.Sg(H.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  announcementid: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  vote_up: { n: 2, br: R.qM.readBool, bw: R.gp.writeBool },
                  clan_accountid: {
                    n: 3,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = R.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Request";
        }
      }
      class $ extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Response";
        }
      }
      class K extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.announcementid || R.Sg(K.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  announcementid: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = R.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Request";
        }
      }
      class J extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.voted_up || R.Sg(J.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  voted_up: { n: 1, br: R.qM.readBool, bw: R.gp.writeBool },
                  voted_down: { n: 2, br: R.qM.readBool, bw: R.gp.writeBool },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = R.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Response";
        }
      }
      class Q extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.loc_group_id || R.Sg(Q.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  loc_group_id: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  image_hash: {
                    n: 2,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  thumbnail_hash: {
                    n: 3,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  file_type: { n: 4, br: R.qM.readEnum, bw: R.gp.writeEnum },
                  group: { n: 5, br: R.qM.readEnum, bw: R.gp.writeEnum },
                  width: { n: 6, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  height: { n: 7, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  extensions: {
                    n: 8,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = R.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClanLocGroupImage";
        }
      }
      class X extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.steamid || R.Sg(X.M()),
            f.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  steamid: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  group: { n: 2, br: R.qM.readEnum, bw: R.gp.writeEnum },
                  language: { n: 3, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  loc_group_ids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: R.qM.readUint64String,
                    pbr: R.qM.readPackedUint64String,
                    bw: R.gp.writeRepeatedUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = R.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanLocGroupImages_Request";
        }
      }
      class Y extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.images || R.Sg(Y.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { images: { n: 1, c: Q, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = R.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanLocGroupImages_Response";
        }
      }
      class Z extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.steamid || R.Sg(Z.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  steamid: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  filter_user_uploaded_only: {
                    n: 2,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = R.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Request";
        }
      }
      class ee extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.avatars || R.Sg(ee.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { avatars: { n: 1, c: te, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = R.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response";
        }
      }
      class te extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.avatar_sha1 || R.Sg(te.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  avatar_sha1: {
                    n: 1,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  user_uploaded: {
                    n: 2,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  timestamp: {
                    n: 3,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = R.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response_AvatarData";
        }
      }
      class re extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.priority || R.Sg(re.M()),
            f.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  priority: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  appid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: R.qM.readUint32,
                    pbr: R.qM.readPackedUint32,
                    bw: R.gp.writeRepeatedUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = R.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppPriority";
        }
      }
      class ie extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.count || R.Sg(ie.M()),
            f.Message.initialize(this, e, 0, -1, [5, 6, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  count: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  offset: { n: 2, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  rtime32_start_time: {
                    n: 3,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 4,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  language_preference: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: R.qM.readUint32,
                    pbr: R.qM.readPackedUint32,
                    bw: R.gp.writeRepeatedUint32,
                  },
                  filter_event_type: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: R.qM.readEnum,
                    pbr: R.qM.readPackedEnum,
                    bw: R.gp.writeRepeatedEnum,
                  },
                  filter_to_appid: {
                    n: 7,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  app_list: { n: 8, c: re, r: !0, q: !0 },
                  count_after: {
                    n: 9,
                    d: 0,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  count_before: {
                    n: 10,
                    d: 0,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = R.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Request";
        }
      }
      class ne extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.results || R.Sg(ne.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: { results: { n: 1, c: C.h2, r: !0, q: !0 } },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = R.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Response";
        }
      }
      class ae extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.include_steam_blog || R.Sg(ae.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  include_steam_blog: {
                    n: 1,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  filter_to_played_within_days: {
                    n: 2,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  include_only_game_updates: {
                    n: 3,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = R.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Request";
        }
      }
      class se extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.clanid || R.Sg(se.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  clanid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  appid: { n: 4, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  possible_takeover: {
                    n: 5,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                  rtime32_last_modified: {
                    n: 6,
                    d: 0,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  user_app_priority: {
                    n: 7,
                    br: R.qM.readInt32,
                    bw: R.gp.writeInt32,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = R.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventResult";
        }
      }
      class oe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.results || R.Sg(oe.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: { results: { n: 1, c: se, r: !0, q: !0 } },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = R.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Response";
        }
      }
      class me extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
        }
      }
      class le extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
        }
      }
      class ue extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.appid || R.Sg(ue.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  appid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  user_app_priority: {
                    n: 2,
                    br: R.qM.readInt32,
                    bw: R.gp.writeInt32,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = R.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsAppPriority";
        }
      }
      class ce extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ce();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
        }
      }
      class de extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.priorities || R.Sg(de.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { priorities: { n: 1, c: ue, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = R.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
        }
      }
      class _e extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.appid || R.Sg(_e.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  appid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = R.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
        }
      }
      class Be extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
        }
      }
      class ge extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.appid || R.Sg(ge.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  appid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = R.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Request";
        }
      }
      class ye extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ye();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Response";
        }
      }
      class be extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.appid || R.Sg(be.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  appid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = R.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Request";
        }
      }
      class pe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new pe();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Response";
        }
      }
      class Me extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.markings || R.Sg(Me.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: { markings: { n: 1, c: we, r: !0, q: !0 } },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = R.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request";
        }
      }
      class we extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.clanid || R.Sg(we.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  clanid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  display_location: {
                    n: 3,
                    br: R.qM.readEnum,
                    bw: R.gp.writeEnum,
                  },
                  mark_shown: { n: 4, br: R.qM.readBool, bw: R.gp.writeBool },
                  mark_read: { n: 5, br: R.qM.readBool, bw: R.gp.writeBool },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = R.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
        }
      }
      class fe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new fe();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Response";
        }
      }
      class ze extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.event_gids || R.Sg(ze.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  event_gids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: R.qM.readFixed64String,
                    pbr: R.qM.readPackedFixed64String,
                    bw: R.gp.writeRepeatedFixed64String,
                  },
                  include_read_events_only: {
                    n: 2,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = R.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Request";
        }
      }
      class Re extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.events || R.Sg(Re.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: { events: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = R.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response";
        }
      }
      class Se extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.event_gid || R.Sg(Se.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  event_gid: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  last_shown_time: {
                    n: 2,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  last_read_time: {
                    n: 3,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                  clan_account_id: {
                    n: 4,
                    br: R.qM.readUint32,
                    bw: R.gp.writeUint32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = R.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
        }
      }
      class Ce extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.gidfeature || R.Sg(Ce.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  gidfeature: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 3,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  steamid: {
                    n: 4,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  commentthreadtype: {
                    n: 5,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  hide: { n: 6, br: R.qM.readBool, bw: R.gp.writeBool },
                  report_reason: {
                    n: 7,
                    br: R.qM.readEnum,
                    bw: R.gp.writeEnum,
                  },
                  report_text: {
                    n: 8,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = R.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_HideAndReportComment_Request";
        }
      }
      class Fe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Fe();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_HideAndReportComment_Response";
        }
      }
      class We extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.steamid || R.Sg(We.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  steamid: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  itemid: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = R.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanEventCrowdInMetadata_Request";
        }
      }
      class he extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.crowdin_project_id || R.Sg(he.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  crowdin_project_id: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  crowdin_file_id: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = R.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanEventCrowdInMetadata_Response";
        }
      }
      class ve extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.steamid || R.Sg(ve.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  steamid: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = R.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanCrowdInMetadata_Request";
        }
      }
      class Te extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.crowdin_project_id || R.Sg(Te.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  crowdin_project_id: {
                    n: 1,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  crowdin_directory_id: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  push_by_default: {
                    n: 3,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = R.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanCrowdInMetadata_Response";
        }
      }
      class Ee extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.steamid || R.Sg(Ee.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  steamid: {
                    n: 1,
                    br: R.qM.readFixed64String,
                    bw: R.gp.writeFixed64String,
                  },
                  itemid: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  language: { n: 3, br: R.qM.readInt32, bw: R.gp.writeInt32 },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = R.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_FetchTranslationFromCrowdIn_Request";
        }
      }
      class je extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new je();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_FetchTranslationFromCrowdIn_Response";
        }
      }
      class ke extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.review_labels || R.Sg(ke.M()),
            f.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: { review_labels: { n: 1, c: qe, r: !0, q: !0 } },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = R.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_SetRecommendationBotReviewStatus_Request";
        }
      }
      class qe extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.appid || R.Sg(qe.M()),
            f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  appid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  recommendationid: {
                    n: 2,
                    br: R.qM.readUint64String,
                    bw: R.gp.writeUint64String,
                  },
                  is_bot_review: {
                    n: 3,
                    br: R.qM.readBool,
                    bw: R.gp.writeBool,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = R.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel";
        }
      }
      class Ie extends f.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), f.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ie();
        }
        static deserializeBinary(e) {
          let t = new (z().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (z().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (z().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_SetRecommendationBotReviewStatus_Response";
        }
      }
      !(function (e) {
        (e.GetApps = function (e, t) {
          return e.SendMsg("Community.GetApps#1", (0, S.I8)(F, t), W, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetAppRichPresenceLocalization = function (e, t) {
            return e.SendMsg(
              "Community.GetAppRichPresenceLocalization#1",
              (0, S.I8)(h, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.GetCommentThread = function (e, t) {
            return e.SendMsg(
              "Community.GetCommentThread#1",
              (0, S.I8)(j, t),
              I,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.PostCommentToThread = function (e, t) {
            return e.SendMsg(
              "Community.PostCommentToThread#1",
              (0, S.I8)(U, t),
              O,
              { ePrivilege: 3 },
            );
          }),
          (e.DeleteCommentFromThread = function (e, t) {
            return e.SendMsg(
              "Community.DeleteCommentFromThread#1",
              (0, S.I8)(A, t),
              P,
              { ePrivilege: 1 },
            );
          }),
          (e.RateCommentThread = function (e, t) {
            return e.SendMsg(
              "Community.RateCommentThread#1",
              (0, S.I8)(x, t),
              N,
              { ePrivilege: 3 },
            );
          }),
          (e.GetCommentThreadRatings = function (e, t) {
            return e.SendMsg(
              "Community.GetCommentThreadRatings#1",
              (0, S.I8)(G, t),
              L,
              { ePrivilege: 2 },
            );
          }),
          (e.VerifyClanMembership = function (e, t) {
            return e.SendMsg(
              "Community.VerifyClanMembership#1",
              (0, S.I8)(D, t),
              V,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.RateClanAnnouncement = function (e, t) {
            return e.SendMsg(
              "Community.RateClanAnnouncement#1",
              (0, S.I8)(H, t),
              $,
              { ePrivilege: 3 },
            );
          }),
          (e.GetClanAnnouncementVoteForUser = function (e, t) {
            return e.SendMsg(
              "Community.GetClanAnnouncementVoteForUser#1",
              (0, S.I8)(K, t),
              J,
              { ePrivilege: 1 },
            );
          }),
          (e.GetClanLocGroupImages = function (e, t) {
            return e.SendMsg(
              "Community.GetClanLocGroupImages#1",
              (0, S.I8)(X, t),
              Y,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }),
          (e.GetAvatarHistory = function (e, t) {
            return e.SendMsg(
              "Community.GetAvatarHistory#1",
              (0, S.I8)(Z, t),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.GetClanEventCrowdInMetadata = function (e, t) {
            return e.SendMsg(
              "Community.GetClanEventCrowdInMetadata#1",
              (0, S.I8)(We, t),
              he,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClanCrowdInMetadata = function (e, t) {
            return e.SendMsg(
              "Community.GetClanCrowdInMetadata#1",
              (0, S.I8)(ve, t),
              Te,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.FetchTranslationFromCrowdIn = function (e, t) {
            return e.SendMsg(
              "Community.FetchTranslationFromCrowdIn#1",
              (0, S.I8)(Ee, t),
              je,
              { ePrivilege: 1 },
            );
          }),
          (e.HideAndReportComment = function (e, t) {
            return e.SendMsg(
              "Community.HideAndReportComment#1",
              (0, S.I8)(Ce, t),
              Fe,
              { ePrivilege: 3 },
            );
          }),
          (e.GetUserPartnerEventNews = function (e, t) {
            return e.SendMsg(
              "Community.GetUserPartnerEventNews#1",
              (0, S.I8)(ie, t),
              ne,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBestEventsForUser = function (e, t) {
            return e.SendMsg(
              "Community.GetBestEventsForUser#1",
              (0, S.I8)(ae, t),
              oe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.MarkPartnerEventsForUser = function (e, t) {
            return e.SendMsg(
              "Community.MarkPartnerEventsForUser#1",
              (0, S.I8)(Me, t),
              fe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventViewStatus = function (e, t) {
            return e.SendMsg(
              "Community.GetUserPartnerEventViewStatus#1",
              (0, S.I8)(ze, t),
              Re,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowMoreForApp = function (e, t) {
            return e.SendMsg(
              "Community.PartnerEventsShowMoreForApp#1",
              (0, S.I8)(ge, t),
              ye,
              { ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowLessForApp = function (e, t) {
            return e.SendMsg(
              "Community.PartnerEventsShowLessForApp#1",
              (0, S.I8)(be, t),
              pe,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearUserPartnerEventsAppPriorities = function (e, t) {
            return e.SendMsg(
              "Community.ClearUserPartnerEventsAppPriorities#1",
              (0, S.I8)(me, t),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventsAppPriorities = function (e, t) {
            return e.SendMsg(
              "Community.GetUserPartnerEventsAppPriorities#1",
              (0, S.I8)(ce, t),
              de,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearSinglePartnerEventsAppPriority = function (e, t) {
            return e.SendMsg(
              "Community.ClearSinglePartnerEventsAppPriority#1",
              (0, S.I8)(_e, t),
              Be,
              { ePrivilege: 1 },
            );
          }),
          (e.SetRecommendationBotReviewStatus = function (e, t) {
            return e.SendMsg(
              "Community.SetRecommendationBotReviewStatus#1",
              (0, S.I8)(ke, t),
              Ie,
              { ePrivilege: 1 },
            );
          });
      })(w || (w = {}));
    },
  },
]);

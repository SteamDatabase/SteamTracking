/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "/u7D": function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return n;
        });
      var i = r("q1tI"),
        a = r("tPo2");
      r("OU48");
      function n(e) {
        return i.createElement("div", null, i.createElement(a.a, null));
      }
    },
    ARGL: function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        GrantAwardModal: "awardmodal_GrantAwardModal_2ilpH",
        Header: "awardmodal_Header_2_vbZ",
        Title: "awardmodal_Title_2yJ4j",
        Description: "awardmodal_Description_16dRE",
        ButtonContainer: "awardmodal_ButtonContainer_JYQgs",
        Button: "awardmodal_Button_3M92h",
        Selected: "awardmodal_Selected_Efo_8",
        Disabled: "awardmodal_Disabled_3k_Tn",
        LabelCtn: "awardmodal_LabelCtn_3jka4",
        IconCtn: "awardmodal_IconCtn_1fdGE",
        Label: "awardmodal_Label_2iEkq",
        Points: "awardmodal_Points_3k_jx",
        IconCheckMark: "awardmodal_IconCheckMark_38WUB",
        Footer: "awardmodal_Footer_164mm",
        Left: "awardmodal_Left_1v0jL",
        BalanceIcon: "awardmodal_BalanceIcon_3VvvB",
        BalanceDetails: "awardmodal_BalanceDetails_209Gy",
        BalanceLabel: "awardmodal_BalanceLabel_2u9RZ",
        BalanceAmount: "awardmodal_BalanceAmount_1O3FS",
        Right: "awardmodal_Right_1hgRC",
        Actions: "awardmodal_Actions_1-AT2",
        Action: "awardmodal_Action_1Beae",
        FooterLink: "awardmodal_FooterLink_KId8d",
        Divider: "awardmodal_Divider_105py",
        ConfirmContainer: "awardmodal_ConfirmContainer_3rAoe",
        ConfirmAwardImage: "awardmodal_ConfirmAwardImage_1ARgx",
        ConfirmTextCtn: "awardmodal_ConfirmTextCtn_j0Jt4",
        ConfirmText: "awardmodal_ConfirmText_1uA9Q",
        AwardName: "awardmodal_AwardName_25N0x",
        TimePeriod: "awardmodal_TimePeriod_6mEUO",
        Visible: "awardmodal_Visible_2QQTW",
        LoadingContainer: "awardmodal_LoadingContainer_1hKG3",
        SuccessContainer: "awardmodal_SuccessContainer_Uz_0u",
        SuccessText: "awardmodal_SuccessText_1kQzN",
        InitialLoading: "awardmodal_InitialLoading_1ZKr7",
        ErrorContainer: "awardmodal_ErrorContainer_1SebP",
        ErrorText: "awardmodal_ErrorText_ok8mo",
        PointsAmount: "awardmodal_PointsAmount_1WCEA",
        PointsAmountIcon: "awardmodal_PointsAmountIcon_3-jpV",
        NotEnoughPoints: "awardmodal_NotEnoughPoints_2VkAe",
      };
    },
    Dsqm: function (e, t, r) {
      e.exports = { UnstyledButton: "unstyledbutton_UnstyledButton_1hcJa" };
    },
    OU48: function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return s;
      }),
        r.d(t, "a", function () {
          return y;
        }),
        r.d(t, "c", function () {
          return w;
        }),
        r.d(t, "b", function () {
          return f;
        }),
        r.d(t, "e", function () {
          return I;
        });
      var i = r("hRO2"),
        a = r("OS8t");
      r("li7h");
      const n = i.Message;
      class s extends n {
        constructor(e = null) {
          super(),
            s.prototype.steamid || a.a(s.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.d.readFixed64String,
                    bw: a.h.writeFixed64String,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = a.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(s.M(), e, t);
        }
        static fromObject(e) {
          return a.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Request";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.summary || a.a(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  summary: { n: 1, c: l },
                  timestamp_updated: {
                    n: 2,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  auditid_highwater: {
                    n: 3,
                    br: a.d.readUint64String,
                    bw: a.h.writeUint64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(o.M(), e, t);
        }
        static fromObject(e) {
          return a.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response";
        }
      }
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.points || a.a(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  points: {
                    n: 1,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                  points_earned: {
                    n: 2,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                  points_spent: {
                    n: 3,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(l.M(), e, t);
        }
        static fromObject(e) {
          return a.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetSummary_Response_Summary";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.points || a.a(c.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  points: {
                    n: 1,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(c.M(), e, t);
        }
        static fromObject(e) {
          return a.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetPointsForSpend_Response";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(),
            d.prototype.communityitemid || a.a(d.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.d.readUint64String,
                    bw: a.h.writeUint64String,
                  },
                  bundle_community_item_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.d.readUint64String,
                    bw: a.h.writeRepeatedUint64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(d.M(), e, t);
        }
        static fromObject(e) {
          return a.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPoints_Response";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.purchaseid || a.a(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.d.readUint64String,
                    bw: a.h.writeUint64String,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(m.M(), e, t);
        }
        static fromObject(e) {
          return a.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new u();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
        }
      }
      class b extends n {
        constructor(e = null) {
          super(),
            b.prototype.granted_profile_modifier || a.a(b.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  granted_profile_modifier: {
                    n: 1,
                    br: a.d.readBool,
                    bw: a.h.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(b.M(), e, t);
        }
        static fromObject(e) {
          return a.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
        }
      }
      class y extends n {
        constructor(e = null) {
          super(),
            y.prototype.target_type || a.a(y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  target_type: { n: 1, br: a.d.readEnum, bw: a.h.writeEnum },
                  targetid: {
                    n: 2,
                    br: a.d.readUint64String,
                    bw: a.h.writeUint64String,
                  },
                  reactionid: { n: 3, br: a.d.readUint32, bw: a.h.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(y.M(), e, t);
        }
        static fromObject(e) {
          return a.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_AddReaction_Request";
        }
      }
      class g extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          return "CLoyaltyRewards_AddReaction_Response";
        }
      }
      class w extends n {
        constructor(e = null) {
          super(),
            w.prototype.target_type || a.a(w.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  target_type: { n: 1, br: a.d.readEnum, bw: a.h.writeEnum },
                  targetid: {
                    n: 2,
                    br: a.d.readUint64String,
                    bw: a.h.writeUint64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(w.M(), e, t);
        }
        static fromObject(e) {
          return a.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Request";
        }
      }
      class B extends n {
        constructor(e = null) {
          super(),
            B.prototype.reactionids || a.a(B.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  reactionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.d.readUint32,
                    bw: a.h.writeRepeatedUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(B.M(), e, t);
        }
        static fromObject(e) {
          return a.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactions_Response";
        }
      }
      class h extends n {
        constructor(e = null) {
          super(),
            h.prototype.total || a.a(h.M()),
            n.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  total: { n: 1, c: _, r: !0, q: !0 },
                  user_reviews: { n: 2, c: _, r: !0, q: !0 },
                  ugc: { n: 3, c: _, r: !0, q: !0 },
                  profile: { n: 4, c: _, r: !0, q: !0 },
                  forum_topics: { n: 5, c: _, r: !0, q: !0 },
                  comments: { n: 6, c: _, r: !0, q: !0 },
                  total_given: {
                    n: 7,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  total_received: {
                    n: 8,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  total_points_given: {
                    n: 9,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                  total_points_received: {
                    n: 10,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(h.M(), e, t);
        }
        static fromObject(e) {
          return a.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
        }
      }
      class _ extends n {
        constructor(e = null) {
          super(),
            _.prototype.reactionid || a.a(_.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  reactionid: { n: 1, br: a.d.readEnum, bw: a.h.writeEnum },
                  given: { n: 2, br: a.d.readUint32, bw: a.h.writeUint32 },
                  received: { n: 3, br: a.d.readUint32, bw: a.h.writeUint32 },
                  points_given: {
                    n: 4,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                  points_received: {
                    n: 5,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(_.M(), e, t);
        }
        static fromObject(e) {
          return a.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
        }
      }
      class f extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Request";
        }
      }
      class p extends n {
        constructor(e = null) {
          super(),
            p.prototype.reactions || a.a(p.M()),
            n.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { reactions: { n: 3, c: R, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(p.M(), e, t);
        }
        static fromObject(e) {
          return a.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response";
        }
      }
      class R extends n {
        constructor(e = null) {
          super(),
            R.prototype.reactionid || a.a(R.M()),
            n.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  reactionid: { n: 1, br: a.d.readEnum, bw: a.h.writeEnum },
                  points_cost: {
                    n: 2,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  points_transferred: {
                    n: 3,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  valid_target_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.d.readEnum,
                    bw: a.h.writeRepeatedEnum,
                  },
                  valid_ugc_types: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.d.readUint32,
                    bw: a.h.writeRepeatedUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(R.M(), e, t);
        }
        static fromObject(e) {
          return a.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
        }
      }
      class M extends n {
        constructor(e = null) {
          super(),
            M.prototype.points_cost || a.a(M.M()),
            n.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  points_cost: {
                    n: 1,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  upgrade_points_cost: {
                    n: 2,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  purchasable_customization_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.d.readEnum,
                    bw: a.h.writeRepeatedEnum,
                  },
                  upgradable_customization_types: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.d.readEnum,
                    bw: a.h.writeRepeatedEnum,
                  },
                  max_slots_per_type: {
                    n: 5,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  max_upgradable_level: {
                    n: 6,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(M.M(), e, t);
        }
        static fromObject(e) {
          return a.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
        }
      }
      class C extends n {
        constructor(e = null) {
          super(),
            C.prototype.apps || a.a(C.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { apps: { n: 1, c: v, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(C.M(), e, t);
        }
        static fromObject(e) {
          return a.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response";
        }
      }
      class v extends n {
        constructor(e = null) {
          super(),
            v.prototype.appid || a.a(v.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: a.d.readUint32, bw: a.h.writeUint32 },
                  has_items_anyone_can_purchase: {
                    n: 2,
                    br: a.d.readBool,
                    bw: a.h.writeBool,
                  },
                  event_app: { n: 3, br: a.d.readBool, bw: a.h.writeBool },
                  hero_carousel_image: {
                    n: 4,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(v.M(), e, t);
        }
        static fromObject(e) {
          return a.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
        }
      }
      class z extends n {
        constructor(e = null) {
          super(),
            z.prototype.appid || a.a(z.M()),
            n.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  appid: { n: 1, br: a.d.readUint32, bw: a.h.writeUint32 },
                  defid: { n: 2, br: a.d.readUint32, bw: a.h.writeUint32 },
                  type: { n: 3, br: a.d.readEnum, bw: a.h.writeEnum },
                  community_item_class: {
                    n: 4,
                    br: a.d.readInt32,
                    bw: a.h.writeInt32,
                  },
                  community_item_type: {
                    n: 5,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  point_cost: {
                    n: 6,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                  timestamp_created: {
                    n: 7,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  timestamp_available: {
                    n: 9,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  timestamp_available_end: {
                    n: 14,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  quantity: {
                    n: 10,
                    br: a.d.readInt64String,
                    bw: a.h.writeInt64String,
                  },
                  internal_description: {
                    n: 11,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                  active: { n: 12, br: a.d.readBool, bw: a.h.writeBool },
                  community_item_data: { n: 13, c: S },
                  bundle_defids: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: a.d.readUint32,
                    bw: a.h.writeRepeatedUint32,
                  },
                  usable_duration: {
                    n: 16,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  bundle_discount: {
                    n: 17,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(z.M(), e, t);
        }
        static fromObject(e) {
          return a.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition";
        }
      }
      class S extends n {
        constructor(e = null) {
          super(),
            S.prototype.item_name || a.a(S.M()),
            n.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  item_name: { n: 1, br: a.d.readString, bw: a.h.writeString },
                  item_title: { n: 2, br: a.d.readString, bw: a.h.writeString },
                  item_description: {
                    n: 3,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                  item_image_small: {
                    n: 4,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                  item_image_large: {
                    n: 5,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                  item_movie_webm: {
                    n: 6,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                  item_movie_mp4: {
                    n: 7,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                  item_movie_webm_small: {
                    n: 10,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 11,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                  animated: { n: 8, br: a.d.readBool, bw: a.h.writeBool },
                  badge_data: { n: 9, c: O, r: !0, q: !0 },
                  profile_theme_id: {
                    n: 12,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(S.M(), e, t);
        }
        static fromObject(e) {
          return a.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_CommunityItemData";
        }
      }
      class O extends n {
        constructor(e = null) {
          super(),
            O.prototype.level || a.a(O.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  level: { n: 1, br: a.d.readInt32, bw: a.h.writeInt32 },
                  image: { n: 2, br: a.d.readString, bw: a.h.writeString },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(O.M(), e, t);
        }
        static fromObject(e) {
          return a.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardDefinition_BadgeData";
        }
      }
      class E extends n {
        constructor(e = null) {
          super(),
            E.prototype.bonusid || a.a(E.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  bonusid: {
                    n: 1,
                    br: a.d.readUint64String,
                    bw: a.h.writeUint64String,
                  },
                  appid: { n: 2, br: a.d.readUint32, bw: a.h.writeUint32 },
                  active: { n: 3, br: a.d.readBool, bw: a.h.writeBool },
                  points: { n: 4, br: a.d.readInt32, bw: a.h.writeInt32 },
                  timestamp_start: {
                    n: 5,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  timestamp_end: {
                    n: 6,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  internal_description: {
                    n: 7,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(E.M(), e, t);
        }
        static fromObject(e) {
          return a.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "LoyaltyRewardPurchaseBonus";
        }
      }
      class j extends n {
        constructor(e = null) {
          super(),
            j.prototype.bonuses || a.a(j.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { bonuses: { n: 1, c: E, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(j.M(), e, t);
        }
        static fromObject(e) {
          return a.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
        }
      }
      class L extends n {
        constructor(e = null) {
          super(),
            L.prototype.definitions || a.a(L.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  definitions: { n: 1, c: z, r: !0, q: !0 },
                  total_count: { n: 2, br: a.d.readInt32, bw: a.h.writeInt32 },
                  count: { n: 3, br: a.d.readInt32, bw: a.h.writeInt32 },
                  next_cursor: {
                    n: 4,
                    br: a.d.readString,
                    bw: a.h.writeString,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(L.M(), e, t);
        }
        static fromObject(e) {
          return a.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_QueryRewardItems_Response";
        }
      }
      class T extends n {
        constructor(e = null) {
          super(),
            T.prototype.responses || a.a(T.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { responses: { n: 1, c: F, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(T.M(), e, t);
        }
        static fromObject(e) {
          return a.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
        }
      }
      class F extends n {
        constructor(e = null) {
          super(),
            F.prototype.eresult || a.a(F.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  eresult: { n: 1, br: a.d.readInt32, bw: a.h.writeInt32 },
                  response: { n: 2, c: L },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.e(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(F.M(), e, t);
        }
        static fromObject(e) {
          return a.c(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
        }
      }
      class W extends n {
        constructor(e = null) {
          super(),
            W.prototype.communityitemid || a.a(W.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.d.readUint64String,
                    bw: a.h.writeUint64String,
                  },
                  next_claim_time: {
                    n: 2,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  reward_item: { n: 3, c: z },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(W.M(), e, t);
        }
        static fromObject(e) {
          return a.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_ClaimItem_Response";
        }
      }
      class A extends n {
        constructor(e = null) {
          super(),
            A.prototype.can_claim || a.a(A.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  can_claim: { n: 1, br: a.d.readBool, bw: a.h.writeBool },
                  next_claim_time: {
                    n: 2,
                    br: a.d.readUint32,
                    bw: a.h.writeUint32,
                  },
                  reward_item: { n: 3, c: z },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.e(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return a.g(A.M(), e, t);
        }
        static fromObject(e) {
          return a.c(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.b(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.f(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Response";
        }
      }
      var I, N;
      !(function (e) {
        (e.GetPointsForSpend = function (e, t) {
          return e.SendMsg("LoyaltyRewards.GetPointsForSpend#1", t, c, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetSummary = function (e, t) {
            return e.SendMsg("LoyaltyRewards.GetSummary#1", t, o, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.RedeemPoints = function (e, t) {
            return e.SendMsg("LoyaltyRewards.RedeemPoints#1", t, d, {
              ePrivilege: 1,
            });
          }),
          (e.RedeemPointsForBadgeLevel = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              t,
              d,
              { ePrivilege: 1 }
            );
          }),
          (e.RedeemPointsToUpgradeItem = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              t,
              d,
              { ePrivilege: 1 }
            );
          }),
          (e.RedeemPointsForProfileCustomization = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              t,
              m,
              { ePrivilege: 1 }
            );
          }),
          (e.RedeemPointsForProfileCustomizationUpgrade = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              t,
              u,
              { ePrivilege: 1 }
            );
          }),
          (e.RegisterForSteamDeckRewards = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              t,
              b,
              { ePrivilege: 1 }
            );
          }),
          (e.AddReaction = function (e, t) {
            return e.SendMsg("LoyaltyRewards.AddReaction#1", t, g, {
              ePrivilege: 1,
            });
          }),
          (e.GetReactions = function (e, t) {
            return e.SendMsg("LoyaltyRewards.GetReactions#1", t, B, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetReactionsSummaryForUser = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              t,
              h,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetReactionConfig = function (e, t) {
            return e.SendMsg("LoyaltyRewards.GetReactionConfig#1", t, p, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetProfileCustomizationsConfig = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              t,
              M,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetEligibleApps = function (e, t) {
            return e.SendMsg("LoyaltyRewards.GetEligibleApps#1", t, C, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetActivePurchaseBonuses = function (e, t) {
            return e.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              t,
              j,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.QueryRewardItems = function (e, t) {
            return e.SendMsg("LoyaltyRewards.QueryRewardItems#1", t, L, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.BatchedQueryRewardItems = function (e, t) {
            return e.SendMsg("LoyaltyRewards.BatchedQueryRewardItems#1", t, T, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(I || (I = {})),
        (function (e) {
          (e.ClaimItem = function (e, t) {
            return e.SendMsg("SaleItemRewards.ClaimItem#1", t, W, {
              ePrivilege: 1,
            });
          }),
            (e.CanClaimItem = function (e, t) {
              return e.SendMsg("SaleItemRewards.CanClaimItem#1", t, A, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            });
        })(N || (N = {}));
    },
    tPo2: function (e, t, r) {
      "use strict";
      var i = r("mrSG"),
        a = r("vDqi"),
        n = r.n(a),
        s = r("TyAF"),
        o = r("q1tI"),
        l = r.n(o),
        c = (r("mgoM"), r("bxBv")),
        d = r("qDk6"),
        m = r("WBba"),
        u = (r("TX96"), r("OU48")),
        b = r("2lpH"),
        y = r.n(b),
        g = r("2vnA"),
        w = r("lkRc");
      r("kyHq");
      class B {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return w.h.logged_in;
        }
        SetTarget(e, t) {
          (this.m_targetID = e),
            (this.m_eTargetType = t),
            this.LoadExistingReactions();
        }
        AddReaction(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return { eResult: 21, strMessage: "Not logged on" };
            let t = c.b.Init(u.a);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let r = yield u.e.AddReaction(this.m_transport, t);
            return (
              1 != r.GetEResult()
                ? console.error(
                    `Error when calling LoyaltyRewardsService.AddReaction: EResult=${r.GetEResult()}`
                  )
                : (this.m_bPointsBalanceLoadedOrInFlight = !1),
              { eResult: r.GetEResult(), strMessage: "" }
            );
          });
        }
        GetUserPointBalance() {
          return this.BIsLoggedIn()
            ? (this.m_bPointsBalanceLoadedOrInFlight ||
                this.LoadUserPointBalance(),
              this.m_lPointsAvailable)
            : null;
        }
        LoadUserPointBalance() {
          return Object(i.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return Promise.resolve(null);
            this.m_bPointsBalanceLoadedOrInFlight = !0;
            const e = c.b.Init(u.d);
            e.SetBodyFields({ steamid: w.h.steamid });
            let t = yield u.e.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = y.a.fromString(
                  t.Body().summary().points()
                ))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`
                );
          });
        }
        GetAwardConfigurations() {
          return (
            this.m_bReactionConfigurationLoadedOrInFlight ||
              this.LoadAwardsConfiguration(),
            this.m_mapReactionConfiguration
          );
        }
        LoadAwardsConfiguration() {
          return Object(i.a)(this, void 0, void 0, function* () {
            this.m_bReactionConfigurationLoadedOrInFlight = !0;
            const e = c.b.Init(u.b);
            let t = yield u.e.GetReactionConfig(this.m_transport, e);
            if (1 == t.GetEResult()) {
              let e = t.Body().toObject().reactions;
              for (const t of e)
                this.m_mapReactionConfiguration.set(t.reactionid, t);
            } else console.error(`Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`);
          });
        }
        GetExistingReactions() {
          return this.m_mapExistingReactions;
        }
        LoadExistingReactions() {
          return Object(i.a)(this, void 0, void 0, function* () {
            this.m_mapExistingReactions.clear();
            const e = c.b.Init(u.c);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield u.e.GetReactions(this.m_transport, e);
            1 == t.GetEResult()
              ? t
                  .Body()
                  .reactionids()
                  .map((e) => this.m_mapExistingReactions.set(e, !0))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetReactions: EResult=${t.GetEResult()}`
                );
          });
        }
      }
      Object(i.b)([g.C.ref], B.prototype, "m_lPointsAvailable", void 0),
        Object(i.b)(
          [g.C.deep],
          B.prototype,
          "m_mapReactionConfiguration",
          void 0
        ),
        Object(i.b)([g.C.deep], B.prototype, "m_mapExistingReactions", void 0);
      var h = r("Mgs7"),
        _ = r("Jqb/"),
        f = (r("idvb"), r("6Y59")),
        p = r("0OaU"),
        R = r("exH9"),
        M = r("TLQK"),
        C = r("opsS"),
        v = r("ZO3Q"),
        z = r("YyVH");
      var S;
      function O(e) {
        switch (e) {
          case S.Gold:
          case S.LNY2020:
            return `hsl(${51 + -16 * Math.random()}, 93%, 54%)`;
          default:
            return `hsl(${360 * Math.random()}, 100%, 40%)`;
        }
      }
      function E(e) {
        return e == S.LNY2020
          ? `hue-rotate(${360 + Object(z.b)(-30, 10)}deg)`
          : "";
      }
      !(function (e) {
        (e[(e.Default = 0)] = "Default"),
          (e[(e.Gold = 1)] = "Gold"),
          (e[(e.LNY2020 = 2)] = "LNY2020");
      })(S || (S = {}));
      const j = (e, t) => {
          const { anim: r } = Object(v.useSpring)({
            anim: 1,
            from: { anim: 0 },
            config: { duration: 8e3 },
          });
          return Object(o.useMemo)(() => {
            let i = (function (e, t) {
              const r = [];
              if (!e) return r;
              const { width: i, height: a } = e;
              for (let e = 0; e < 200; e++) {
                const e = Math.random(),
                  n = Math.random() * e,
                  s = Math.random() * n,
                  o = 4 * (Math.random() - 0.5) * Math.PI * 20,
                  l = Math.random() + 0.5,
                  c = [
                    Math.random() * a - a - 20,
                    a + 20 + Math.random() * a * l,
                  ],
                  d = l * (i <= 1e3 ? 1 : i / 1e3) * (t == S.Gold ? 2 : 1),
                  m = (Math.random() - 0.5) * i,
                  u = (Math.random() - 0.5) * i,
                  b = [u, m + u],
                  y = O(t),
                  g = E(t);
                r.push({
                  rotationCoefficient: o,
                  rotationRatioY: n,
                  rotationRatioX: e,
                  rotationRatioZ: s,
                  yRange: c,
                  xRange: b,
                  scale: d,
                  colorHue: y,
                  filter: g,
                });
              }
              return r;
            })(e, t);
            return {
              rgParticleStyles: i.map((e) =>
                (function (e, t, r) {
                  S.Default;
                  const {
                    rotationCoefficient: i,
                    rotationRatioY: a,
                    rotationRatioX: n,
                    rotationRatioZ: s,
                    yRange: o,
                    xRange: l,
                    scale: c,
                    colorHue: d,
                    filter: m,
                  } = e;
                  return {
                    backgroundColor: d,
                    fill: d,
                    filter: m,
                    flRandom: 0,
                    transform: t.interpolate((e) => {
                      const t = e * i * a,
                        r = e * i * n,
                        d = e * i * s,
                        m = e * (o[1] - o[0]) + o[0];
                      return `translate(${
                        e * (l[1] - l[0]) + l[0]
                      }px, ${m}px) rotateY(${t}rad) rotateX(${r}rad) rotateZ(${d}rad) scale(${c})`;
                    }),
                  };
                })(e, r)
              ),
              rgStreamerStyles: i
                .map((e) =>
                  (function (e, t, r) {
                    if (Math.random() > 0.1) return null;
                    const {
                      rotationCoefficient: i,
                      rotationRatioZ: a,
                      yRange: n,
                      xRange: s,
                      scale: o,
                      colorHue: l,
                      filter: c,
                    } = e;
                    return {
                      backgroundColor: void 0,
                      fill: l,
                      filter: c,
                      flRandom: Math.random(),
                      transform: t.interpolate((e) => {
                        const t = ((e * i) / 4) * a,
                          r = e * (n[1] - n[0]) + n[0];
                        return `translate(${
                          e * (s[1] - s[0]) + s[0]
                        }px, ${r}px) rotateZ(${t}rad) scale(${o})`;
                      }),
                    };
                  })(e, r)
                )
                .filter((e) => !!e),
            };
          }, [e, t, r]);
        },
        L = { position: "absolute", left: "50%", top: 0 },
        T = Object.assign(Object.assign({}, L), {
          width: 10,
          height: 5,
          borderWidth: 1,
          borderColor: "black",
        }),
        F = ({ eType: e }) => {
          S.Gold, S.LNY2020;
          const [t, r] = (function () {
            const [e, t] = Object(o.useState)(null),
              r = Object(o.useCallback)((e) => {
                e &&
                  "function" == typeof e.getBoundingClientRect &&
                  t(e.getBoundingClientRect());
              }, []);
            return [e, r];
          })();
          let i,
            { rgParticleStyles: a, rgStreamerStyles: n } = j(t, e);
          switch (e) {
            case S.Gold:
              i = a.map((e, t) => l.a.createElement(A, { key: t, style: e }));
              break;
            case S.LNY2020:
              i = a.map((e, t) =>
                t % 2
                  ? l.a.createElement(W, { key: t, style: e })
                  : l.a.createElement(I, { key: t, style: e })
              );
              break;
            case S.Default:
              i = a.map((e, t) => l.a.createElement(W, { key: t, style: e }));
          }
          return l.a.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              },
              ref: r,
            },
            i,
            n.map((e, t) =>
              e.flRandom > 0.5
                ? l.a.createElement(G, { key: t, style: e })
                : l.a.createElement(N, { key: t, style: e })
            )
          );
        },
        W = ({ style: e }) =>
          l.a.createElement(v.animated.div, {
            style: Object.assign(Object.assign({}, T), e),
          }),
        A = ({ style: e }) => {
          const [t] = Object(o.useState)(Math.floor(Math.random() * x.length)),
            r = x[t];
          return l.a.createElement(r, {
            style: Object.assign(Object.assign(Object.assign({}, L), e), {
              backgroundColor: void 0,
            }),
          });
        },
        I = ({ style: e }) => {
          const [t] = Object(o.useState)(Math.floor(Math.random() * P.length)),
            r = P[t];
          return l.a.createElement(r, {
            style: Object.assign(Object.assign(Object.assign({}, L), e), {
              backgroundColor: void 0,
            }),
          });
        },
        N = ({ style: e }) =>
          l.a.createElement(
            v.animated.svg,
            {
              viewBox: "0 0 80 620",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: Object.assign({ width: 10, height: 70 }, e),
            },
            l.a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z",
              fill: e.fill,
            })
          ),
        G = ({ style: e }) =>
          l.a.createElement(
            v.animated.svg,
            {
              viewBox: "0 0 203 295",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: Object.assign({ width: 10, height: 20 }, e),
            },
            l.a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z",
              fill: e.fill,
            })
          ),
        x = [
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                viewBox: "0 0 48 102",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 5, height: 10 }, e),
              },
              l.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z",
                fill: "#F7D51E",
              })
            ),
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                viewBox: "0 0 50 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 7 }, e),
              },
              l.a.createElement("path", {
                d:
                  "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: "#C4C4C4",
              }),
              l.a.createElement("path", {
                d:
                  "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                viewBox: "0 0 68 69",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 10 }, e),
              },
              l.a.createElement("rect", {
                y: "34.6389",
                width: "48",
                height: "48",
                transform: "rotate(-45 0 34.6389)",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 10 }, e),
              },
              l.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d:
                  "M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              l.a.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              l.a.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              l.a.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                viewBox: "0 0 48 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              l.a.createElement("path", {
                d:
                  "M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                width: "48",
                height: "35",
                viewBox: "0 0 48 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 7 }, e),
              },
              l.a.createElement("path", {
                d: "M48 0H0L24 35L48 0Z",
                fill: e.fill,
              })
            ),
        ],
        P = [
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 54 47.18",
                style: Object.assign({ width: 28, height: 28 }, e),
              },
              l.a.createElement("polygon", {
                fill: "#60000e",
                points: "10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06",
              }),
              l.a.createElement("path", {
                fill: "#f93838",
                d:
                  "M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z",
              }),
              l.a.createElement("path", {
                fill: "#f93838",
                d:
                  "M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z",
              })
            ),
          ({ style: e }) =>
            l.a.createElement(
              v.animated.svg,
              {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 14.5 22",
                style: Object.assign({ width: 28, height: 28 }, e),
              },
              l.a.createElement("path", {
                fill: "#fc1010",
                d:
                  "M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z",
              }),
              l.a.createElement("path", {
                fill: "#fc1010",
                d:
                  "M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z",
              }),
              l.a.createElement("path", {
                fill: "#fc1010",
                d:
                  "M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z",
              }),
              l.a.createElement("path", {
                fill: "#fc1010",
                d:
                  "M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z",
              })
            ),
        ];
      var U = r("ARGL");
      function k(e) {
        return Object(M.f)(`#RewardsReaction_${e}`);
      }
      var D = r("Dsqm"),
        q = r("av+R");
      const Z = (e) => {
        const { className: t } = e,
          r = Object(i.c)(e, ["className"]);
        return l.a.createElement(
          q.d,
          Object.assign({ className: Object(R.a)(t, D.UnstyledButton) }, r)
        );
      };
      var H,
        $,
        K,
        Q = r("Jz9t");
      r("NxAk");
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(K || (K = {}));
      const V = (e) =>
        o.createElement(
          "svg",
          Object.assign(
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          o.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          })
        );
      class Y extends o.PureComponent {
        constructor(e) {
          super(e), (this.state = { bHovered: !1 });
        }
        handleMouseOver(e) {
          this.setState({ bHovered: !0 });
        }
        handleMouseOut() {
          this.setState({ bHovered: !1 });
        }
        render() {
          const e =
            ((t = this.props.reactionType),
            (r =
              !this.props.bDisableAnimation &&
              (this.state.bHovered || this.props.bForceAnimated)),
            `${w.c.STORE_CDN_URL}public/images/loyalty/reactions/${
              r ? "animated" : "still"
            }/${t}.png`);
          var t, r;
          return o.createElement("img", {
            className: this.props.className,
            src: e,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      Object(i.b)([C.b], Y.prototype, "handleMouseOver", null),
        Object(i.b)([C.b], Y.prototype, "handleMouseOut", null);
      let J = (H = class extends o.Component {
        constructor(e) {
          super(e),
            (window.fnLoyalty_ShowAwardModal = (t, r, i, a, n) => {
              n || (n = 0),
                this.Init(e.serviceTransport),
                this.setState({
                  bShowModal: !0,
                  fnSuccessFunc: i,
                  targetid: t,
                  ugcType: a,
                  initialSelectedReaction: n,
                  targetType: r,
                });
            }),
            (this.state = { bLoading: !0 });
        }
        Init(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            if (H.s_LoyaltyAwardModalStore) return;
            if (e) return void (H.s_LoyaltyAwardModalStore = new B(e));
            const t = Object(w.f)("loyaltystore", "application_config"),
              r = yield (function () {
                return Object(i.a)(this, void 0, void 0, function* () {
                  try {
                    const e = yield n.a.get(
                      `${Object(w.d)()}pointssummary/ajaxgetasyncconfig`,
                      { withCredentials: !0 }
                    );
                    return 1 === e.data.success
                      ? e.data.data
                      : (console.error(
                          `Failed to load async config: ${e.data.success}`
                        ),
                        {});
                  } catch (e) {
                    return (
                      console.error(
                        `Unexpected failure while loading async config: ${e}`
                      ),
                      {}
                    );
                  }
                });
              })(),
              a = Object.assign(Object.assign({}, t), r),
              s = new m.a(w.c.WEBAPI_BASE_URL, a.webapi_token);
            (H.s_LoyaltyAwardModalStore = new B(s.GetServiceTransport())),
              this.setState({ bLoading: !1 });
          });
        }
        render() {
          const {
              bLoading: e,
              bShowModal: t,
              targetType: r,
              fnSuccessFunc: i,
              targetid: a,
              ugcType: n,
              initialSelectedReaction: s,
            } = this.state,
            l = H.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return o.createElement(
              _.b,
              {
                className: U.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              o.createElement(te, null),
              o.createElement(ie, null),
              o.createElement(
                "div",
                { className: U.InitialLoading },
                o.createElement(
                  "div",
                  { className: Object(R.a)(U.LoadingContainer, U.Visible) },
                  o.createElement(ne, null)
                )
              )
            );
          l.GetAwardConfigurations();
          return o.createElement(ee, {
            key: a,
            targetid: a,
            active: t,
            targetType: r,
            ugcType: n,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: i,
            store: H.s_LoyaltyAwardModalStore,
            initialSelectedReaction: s,
          });
        }
      });
      (J.defaultProps = { targetType: 1 }), (J = H = Object(i.b)([s.a], J));
      t.a = J;
      let X = ($ = class extends o.Component {
        constructor(e) {
          super(e);
        }
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new B(e.GetServiceTransport()));
        }
        render() {
          const {
              targetType: e,
              targetid: t,
              bShowModal: r,
              ugcType: i,
              initialSelectedReaction: a,
              onDismiss: n,
            } = this.props,
            s = $.s_LoyaltyAwardModalStore;
          if (null === s)
            return console.log("Store not initialized yet."), null;
          s.GetAwardConfigurations();
          return o.createElement(ee, {
            key: t,
            targetid: t,
            active: r,
            targetType: e,
            ugcType: i,
            onDismiss: n,
            onSuccess: n,
            store: $.s_LoyaltyAwardModalStore,
            initialSelectedReaction: a,
          });
        }
      });
      (X.s_LoyaltyAwardModalStore = null), (X = $ = Object(i.b)([s.a], X));
      let ee = class extends o.Component {
        constructor(e) {
          super(e),
            e.store.SetTarget(e.targetid, e.targetType),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: K.SELECTING,
            });
        }
        render() {
          const {
              active: e,
              targetType: t,
              ugcType: r,
              store: i,
              onDismiss: a,
            } = this.props,
            { selectedReaction: n, ePhase: s, celebrate: l } = this.state;
          if (!e) return null;
          const c = i.GetExistingReactions(),
            d = i.GetAwardConfigurations(),
            m = i.GetUserPointBalance(),
            u = (function (e, t, r) {
              let i = [];
              return (
                e.forEach(function (e) {
                  if (e.valid_target_types.includes(t))
                    switch (t) {
                      case 1:
                        i.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(r) && i.push(e.reactionid);
                        break;
                      case 3:
                      case 4:
                      case 5:
                        i.push(e.reactionid);
                    }
                }),
                i
              );
            })(d, t, r),
            b = 0 === n ? null : d.get(n),
            y = b ? b.points_cost : 0,
            g = b ? b.points_transferred : 0;
          let B,
            f = "";
          switch (t) {
            case 1:
              f = Object(M.f)("#GrantAwardDescription_Review");
              break;
            case 2:
              f = Object(M.f)("#GrantAwardDescription_UGC");
              break;
            case 3:
              f = Object(M.f)("#GrantAwardDescription_Profile");
              break;
            case 4:
              f = Object(M.f)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              f = Object(M.f)("#GrantAwardDescription_Comment");
          }
          switch (s) {
            case K.SELECTING:
              {
                const e = 0 === n || c.get(n),
                  t = !m || m.greaterThanOrEqual(y),
                  r = o.createElement(
                    h.G,
                    {
                      onClick: () => this.setState({ ePhase: K.CONFIRM }),
                      disabled: e,
                      focusable: !e,
                      title: Object(M.f)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip"
                      ),
                    },
                    Object(M.f)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                    )
                  );
                B = o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(te, { description: f }),
                  o.createElement(ie, null),
                  0 === u.length &&
                    o.createElement(
                      "div",
                      { className: U.InitialLoading },
                      o.createElement(
                        "div",
                        {
                          className: Object(R.a)(U.LoadingContainer, U.Visible),
                        },
                        o.createElement(ne, null)
                      )
                    ),
                  o.createElement(
                    Q.a,
                    {
                      className: U.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    u.map((e, t) =>
                      o.createElement(ae, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === n && !c.get(e),
                        cost: d.get(e).points_cost,
                        alreadyAwarded: c.get(e),
                        onClick: () => {
                          c.get(e) ||
                            this.setState({
                              selectedReaction: e === n ? 0 : e,
                            });
                        },
                      })
                    )
                  ),
                  o.createElement(ie, null),
                  o.createElement(
                    re,
                    { store: i },
                    e || t
                      ? r
                      : [
                          o.createElement(
                            "div",
                            { key: "msg", className: U.NotEnoughPoints },
                            Object(M.f)(
                              "#GrantAward_CantAfford",
                              m.negate().add(y).toNumber().toLocaleString()
                            )
                          ),
                          o.createElement(
                            q.c,
                            {
                              key: "button",
                              href: `${w.c.STORE_BASE_URL}points/howitworks`,
                            },
                            o.createElement(
                              h.j,
                              { key: "button" },
                              Object(M.f)("#GrantAward_HowToGetPoints")
                            )
                          ),
                        ]
                  )
                );
              }
              break;
            case K.CONFIRM:
            case K.SUBMITTING:
            case K.DONE:
              B = o.createElement(
                o.Fragment,
                null,
                o.createElement(te, { description: f }),
                o.createElement(ie, null),
                o.createElement(
                  "div",
                  { style: { position: "relative" } },
                  o.createElement(
                    "div",
                    {
                      className: Object(R.a)(
                        U.ConfirmContainer,
                        s === K.CONFIRM && U.Visible
                      ),
                    },
                    o.createElement(Y, {
                      className: U.ConfirmAwardImage,
                      reactionType: n,
                    }),
                    o.createElement(
                      "div",
                      { className: U.ConfirmTextCtn },
                      o.createElement(
                        "div",
                        { className: U.ConfirmText },
                        Object(M.m)(
                          "#GrantAward_Confirm",
                          o.createElement(se, null, y.toLocaleString()),
                          o.createElement(
                            "span",
                            { className: U.AwardName },
                            k(n)
                          )
                        )
                      ),
                      o.createElement(
                        "div",
                        { className: U.ConfirmText },
                        Object(M.m)(
                          "#GrantAward_Confirm_Details",
                          o.createElement(se, null, g.toLocaleString()),
                          o.createElement(
                            "span",
                            { className: U.TimePeriod },
                            Object(M.f)("#GrantAward_Confirm_DetailsTimePeriod")
                          )
                        )
                      )
                    )
                  ),
                  o.createElement(
                    "div",
                    {
                      className: Object(R.a)(
                        U.LoadingContainer,
                        s === K.SUBMITTING && U.Visible
                      ),
                    },
                    o.createElement(ne, null)
                  ),
                  o.createElement(
                    "div",
                    {
                      className: Object(R.a)(
                        U.SuccessContainer,
                        s === K.DONE && U.Visible
                      ),
                    },
                    o.createElement(Y, {
                      className: U.ConfirmAwardImage,
                      reactionType: n,
                    }),
                    o.createElement(
                      "div",
                      { className: U.SuccessText },
                      Object(M.f)("#GrantAward_Success")
                    )
                  )
                ),
                o.createElement(ie, null),
                o.createElement(
                  re,
                  { store: i },
                  o.createElement(
                    h.j,
                    {
                      onClick: () => this.setState({ ePhase: K.SELECTING }),
                      disabled: s !== K.CONFIRM,
                    },
                    Object(M.f)("#GrantAward_Back")
                  ),
                  o.createElement(
                    h.G,
                    {
                      onClick: this.GrantAward,
                      title: Object(M.f)("#GrantAward_SubmitTooltip"),
                      disabled: s !== K.CONFIRM,
                    },
                    Object(M.f)("#GrantAwardNowButton")
                  )
                )
              );
              break;
            case K.ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case 10:
                  e = Object(M.f)("#GrantAwardError_Busy");
                  break;
                case 32:
                  e = Object(M.f)("#GrantAwardError_PersistFailed");
                  break;
                case 8:
                  e = Object(M.f)("#GrantAwardError_InvalidParam");
                  break;
                case 42:
                  e = Object(M.f)("#GrantAwardError_NoMatch");
                  break;
                case 107:
                  e = Object(M.f)("#GrantAwardError_InsufficientFunds");
                  break;
                case 15:
                  e = Object(M.f)("#GrantAwardError_AccessDenied");
                  break;
                case 21:
                  e = Object(M.f)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = Object(M.f)("#GrantAwardError_Fail");
              }
              B = o.createElement(
                o.Fragment,
                null,
                o.createElement(te, { description: f }),
                o.createElement(ie, null),
                o.createElement(
                  "div",
                  { style: { position: "relative" } },
                  o.createElement(
                    "div",
                    { className: U.ErrorContainer },
                    o.createElement("div", { className: U.ErrorText }, e)
                  )
                ),
                o.createElement(ie, null),
                o.createElement(
                  re,
                  { store: i },
                  o.createElement(
                    h.j,
                    { onClick: () => this.setState({ ePhase: K.SELECTING }) },
                    Object(M.f)("#GrantAward_Back")
                  )
                )
              );
            }
          }
          return o.createElement(
            _.b,
            { className: U.GrantAwardModal, active: e, onDismiss: a },
            o.createElement(
              _.d,
              { navID: "GrantAward", closeModal: a },
              l && o.createElement(F, { eType: S.Default }),
              B
            )
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: r } = this.props,
            { selectedReaction: i } = this.state;
          null !== i &&
            0 != i &&
            (this.setState({ ePhase: K.SUBMITTING }),
            t.AddReaction(i).then(({ eResult: t, strMessage: a }) => {
              1 == t
                ? this.setState({ ePhase: K.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      r && r(e, i);
                    }, 2e3)
                  )
                : this.setState({ ePhase: K.ERROR, eResult: t });
            }));
        }
      };
      Object(i.b)([C.b], ee.prototype, "GrantAward", null),
        (ee = Object(i.b)([s.a], ee));
      const te = ({ description: e }) =>
          o.createElement(
            "div",
            { className: U.Header },
            o.createElement(
              "div",
              { className: U.Title },
              Object(M.f)("#GrantAwardTitle")
            ),
            o.createElement("div", { className: U.Description }, e)
          ),
        re = Object(s.a)(({ store: e, children: t }) => {
          const r = e.GetUserPointBalance(),
            i = r && r.toNumber().toLocaleString();
          return o.createElement(
            "div",
            { className: U.Footer },
            o.createElement(
              "div",
              { className: U.Left },
              o.createElement(f.K, { className: U.BalanceIcon }),
              o.createElement(
                "div",
                { className: U.BalanceDetails },
                o.createElement(
                  "div",
                  { className: U.BalanceLabel },
                  Object(M.f)("#YourBalance")
                ),
                o.createElement("div", { className: U.BalanceAmount }, i)
              )
            ),
            o.createElement(
              "div",
              { className: U.Right },
              o.createElement(
                d.a,
                { className: U.Actions, "flow-children": "row" },
                o.Children.map(t, (e) =>
                  o.createElement("div", { className: U.Action }, e)
                )
              ),
              o.createElement(
                "a",
                {
                  className: U.FooterLink,
                  href: `${w.c.STORE_BASE_URL}points/howitworks`,
                },
                Object(M.f)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        ie = () => o.createElement("div", { className: U.Divider });
      class ae extends o.PureComponent {
        constructor(e) {
          super(e), (this.state = { bHovered: !1 });
        }
        handleMouseOver(e) {
          this.setState({ bHovered: !0 });
        }
        handleMouseOut() {
          this.setState({ bHovered: !1 });
        }
        render() {
          const e = this.props,
            {
              reaction: t,
              selected: r,
              alreadyAwarded: a,
              cost: n,
              autoFocus: s,
            } = e,
            l = Object(i.c)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
              "autoFocus",
            ]);
          return o.createElement(
            Z,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: Object(R.a)(
                  U.Button,
                  r && U.Selected,
                  a && U.Disabled
                ),
                autoFocus: s,
              },
              l
            ),
            o.createElement(
              "div",
              { className: U.IconCtn },
              o.createElement(Y, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: a,
              })
            ),
            o.createElement(
              "div",
              { className: U.LabelCtn },
              o.createElement("div", { className: U.Label }, k(t)),
              o.createElement(se, { className: U.Points }, n.toLocaleString())
            ),
            a && o.createElement(V, { className: U.IconCheckMark })
          );
        }
      }
      Object(i.b)([C.b], ae.prototype, "handleMouseOver", null),
        Object(i.b)([C.b], ae.prototype, "handleMouseOut", null);
      const ne = () =>
          o.createElement(p.a, { size: "large", className: U.Loading }),
        se = (e) => {
          const { children: t, className: r } = e,
            a = Object(i.c)(e, ["children", "className"]);
          return o.createElement(
            "span",
            Object.assign({}, a, { className: Object(R.a)(r, U.PointsAmount) }),
            o.createElement(f.K, { className: U.PointsAmountIcon }),
            t
          );
        };
    },
  },
]);

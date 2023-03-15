/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1909],
  {
    45850: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        StandardTemplate: "standardtemplates_StandardTemplate_3e_DB",
        PinnedTemplate: "standardtemplates_PinnedTemplate_2eBei",
        "ItemFocusAnim-darkerGrey":
          "standardtemplates_ItemFocusAnim-darkerGrey_3uRWs",
        StandardLogoDimensions:
          "standardtemplates_StandardLogoDimensions_28AhG",
        Content: "standardtemplates_Content_1MZiz",
        Header: "standardtemplates_Header_39ZAW",
        Icon: "standardtemplates_Icon_19g_L",
        Title: "standardtemplates_Title_1WlRE",
        Body: "standardtemplates_Body_2cgMq",
        StandardNotificationDescription:
          "standardtemplates_StandardNotificationDescription_1Ldq1",
        StandardNotificationSubText:
          "standardtemplates_StandardNotificationSubText_2XcN2",
        Multiline: "standardtemplates_Multiline_2v77K",
        Count: "standardtemplates_Count_FyFTb",
        Timestamp: "standardtemplates_Timestamp_2vSvC",
        PinnedBody: "standardtemplates_PinnedBody_1Ljgv",
        StandardTemplateDesktop:
          "standardtemplates_StandardTemplateDesktop_1tsEf",
        PinnedTemplateDesktop: "standardtemplates_PinnedTemplateDesktop_2caCr",
        AppLogo: "standardtemplates_AppLogo_1anRk",
        AppLogoBackgroundImage:
          "standardtemplates_AppLogoBackgroundImage_3ajRP",
        WishlistBlurImage: "standardtemplates_WishlistBlurImage_5wyKr",
        Unread: "standardtemplates_Unread_2GC8q",
        AvatarStatus: "standardtemplates_AvatarStatus_2yhOC",
        IncomingCallToast: "standardtemplates_IncomingCallToast_3K2ah",
        "ItemFocusAnim-darkerGrey-nocolor":
          "standardtemplates_ItemFocusAnim-darkerGrey-nocolor_MYSYJ",
        "ItemFocusAnim-darkGrey":
          "standardtemplates_ItemFocusAnim-darkGrey_3Sx7_",
        "ItemFocusAnim-grey": "standardtemplates_ItemFocusAnim-grey_2V60l",
        "ItemFocusAnimBorder-darkGrey":
          "standardtemplates_ItemFocusAnimBorder-darkGrey_kdNi7",
        "ItemFocusAnim-green": "standardtemplates_ItemFocusAnim-green_1ySc5",
        focusAnimation: "standardtemplates_focusAnimation_9uT5n",
        hoverAnimation: "standardtemplates_hoverAnimation_3QUW0",
      };
    },
    15901: (e) => {
      e.exports = {
        NotificationPageCtn: "notifications_NotificationPageCtn_2DCeN",
        NotificationsBody: "notifications_NotificationsBody_35hlM",
        NotificationsHeader: "notifications_NotificationsHeader_1bLYa",
        NotificationsHeaderTitle:
          "notifications_NotificationsHeaderTitle_39iFF",
        NotificationsHeaderUnread:
          "notifications_NotificationsHeaderUnread_3iXuG",
        NotificationListCtn: "notifications_NotificationListCtn_1cj-7",
        NotificationsList: "notifications_NotificationsList_KG3qM",
        NotificationFiltersCtn: "notifications_NotificationFiltersCtn_1uSw_",
        SettingsButtons: "notifications_SettingsButtons_3B7mJ",
        MarkAllReadButton: "notifications_MarkAllReadButton_37Ujw",
        SettingsButton: "notifications_SettingsButton_T8q00",
        SettingsImg: "notifications_SettingsImg_1XXJX",
        SettingsFiltersTitle: "notifications_SettingsFiltersTitle_4T-jW",
        SettingsFilters: "notifications_SettingsFilters_1YDIA",
        FilterCheckbox: "notifications_FilterCheckbox_2C4dM",
        ResetButton: "notifications_ResetButton_3Z8ot",
        CommentIcon: "notifications_CommentIcon_o_I3v",
      };
    },
    77515: (e, t, i) => {
      "use strict";
      i.d(t, { U: () => a, W: () => n });
      var r = i(70983);
      const n = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, t) {
        let i = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = n),
          44 == e.length && ((i = e.substr(-4)), (e = e.substr(0, 40)));
        let a = r.De.AVATAR_BASE_URL;
        return (
          a ||
            ((a = r.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += e.substr(0, 2) + "/")),
          (a += e),
          t && "small" != t && (a += "_" + t),
          (a += i),
          a
        );
      }
    },
    15540: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => mt });
      var r = i(89526),
        n = i(5874),
        a = i(45878),
        s = i(19320);
      const o = a.Message;
      class l extends o {
        constructor(e = null) {
          super(),
            l.prototype.notification_id || s.aR(l.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  notification_id: {
                    n: 1,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  notification_targets: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  notification_type: {
                    n: 3,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  body_data: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  read: { n: 7, br: s.FE.readBool, bw: s.Xc.writeBool },
                  timestamp: {
                    n: 8,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  hidden: { n: 9, br: s.FE.readBool, bw: s.Xc.writeBool },
                  expiry: { n: 10, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new l();
          return l.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationData";
        }
      }
      class c extends o {
        constructor(e = null) {
          super(),
            c.prototype.notifications || s.aR(c.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  notifications: { n: 1, c: l, r: !0, q: !0 },
                  confirmation_count: {
                    n: 2,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  pending_gift_count: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  unread_count: {
                    n: 4,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new c();
          return c.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Response";
        }
      }
      class u extends o {
        constructor(e = null) {
          super(),
            u.prototype.timestamp || s.aR(u.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  timestamp: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  notification_type: {
                    n: 2,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  notification_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint64String,
                    pbr: s.FE.readPackedUint64String,
                    bw: s.Xc.writeRepeatedUint64String,
                  },
                  mark_all_read: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new u();
          return u.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_MarkNotificationsRead_Notification";
        }
      }
      class d extends o {
        constructor(e = null) {
          super(),
            d.prototype.notification_type || s.aR(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  notification_type: {
                    n: 1,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  notification_targets: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new d();
          return d.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationPreference";
        }
      }
      class m extends o {
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
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
          let t = new a.BinaryReader(e),
            i = new m();
          return m.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Response";
        }
      }
      class f extends o {
        constructor(e = null) {
          super(),
            f.prototype.preferences || s.aR(f.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { preferences: { n: 1, c: d, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new f();
          return f.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Response";
        }
      }
      class _ extends o {
        constructor(e = null) {
          super(),
            _.prototype.notification_ids || s.aR(_.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  notification_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint64String,
                    pbr: s.FE.readPackedUint64String,
                    bw: s.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new _();
          return _.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_HideNotification_Notification";
        }
      }
      class p extends o {
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new p();
          return p.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_NotificationsReceived_Notification";
        }
      }
      var g, y;
      !(function (e) {
        (e.GetSteamNotifications = function (e, t) {
          return e.SendMsg("SteamNotification.GetSteamNotifications#1", t, c, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.MarkNotificationsRead = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.HideNotification = function (e, t) {
            return e.SendNotification(
              "SteamNotification.HideNotification#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.SetPreferences = function (e, t) {
            return e.SendMsg("SteamNotification.SetPreferences#1", t, m, {
              ePrivilege: 1,
            });
          }),
          (e.GetPreferences = function (e, t) {
            return e.SendMsg("SteamNotification.GetPreferences#1", t, f, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(g || (g = {})),
        (function (e) {
          e.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: p,
          };
        })(y || (y = {}));
      var b = i(33940),
        v = i(17922);
      i(6960);
      const B = a.Message;
      class h extends B {
        constructor(e = null) {
          super(),
            h.prototype.type || s.aR(h.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  type: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  value: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  color: { n: 3, br: s.FE.readString, bw: s.Xc.writeString },
                  label: { n: 4, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new h();
          return h.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_DescriptionLine";
        }
      }
      class w extends B {
        constructor(e = null) {
          super(),
            w.prototype.link || s.aR(w.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  link: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  name: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new w();
          return w.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Action";
        }
      }
      class S extends B {
        constructor(e = null) {
          super(),
            S.prototype.appid || s.aR(S.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  category: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  internal_name: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  localized_category_name: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  localized_tag_name: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  color: { n: 6, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new S();
          return S.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Tag";
        }
      }
      class N extends B {
        constructor(e = null) {
          super(),
            N.prototype.appid || s.aR(N.M()),
            B.initialize(this, e, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  appid: { n: 1, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  classid: {
                    n: 2,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  instanceid: {
                    n: 3,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  currency: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                  background_color: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  icon_url: { n: 6, br: s.FE.readString, bw: s.Xc.writeString },
                  icon_url_large: {
                    n: 7,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  descriptions: { n: 8, c: h, r: !0, q: !0 },
                  tradable: { n: 9, br: s.FE.readBool, bw: s.Xc.writeBool },
                  actions: { n: 10, c: w, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: h, r: !0, q: !0 },
                  owner_actions: { n: 12, c: w, r: !0, q: !0 },
                  fraudwarnings: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: s.FE.readString,
                    bw: s.Xc.writeRepeatedString,
                  },
                  name: { n: 14, br: s.FE.readString, bw: s.Xc.writeString },
                  name_color: {
                    n: 15,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  type: { n: 16, br: s.FE.readString, bw: s.Xc.writeString },
                  market_name: {
                    n: 17,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  market_hash_name: {
                    n: 18,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  market_fee: {
                    n: 19,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  market_fee_app: {
                    n: 28,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  contained_item: { n: 20, c: N },
                  market_actions: { n: 21, c: w, r: !0, q: !0 },
                  commodity: { n: 22, br: s.FE.readBool, bw: s.Xc.writeBool },
                  market_tradable_restriction: {
                    n: 23,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  market_marketable_restriction: {
                    n: 24,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  marketable: { n: 25, br: s.FE.readBool, bw: s.Xc.writeBool },
                  tags: { n: 26, c: S, r: !0, q: !0 },
                  item_expiration: {
                    n: 27,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  market_buy_country_restriction: {
                    n: 30,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  market_sell_country_restriction: {
                    n: 31,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = s.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new N();
          return N.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Description";
        }
      }
      class E extends B {
        constructor(e = null) {
          super(),
            E.prototype.appid || s.aR(E.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  contextid: {
                    n: 2,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  classid: {
                    n: 4,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  instanceid: {
                    n: 5,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  currencyid: {
                    n: 6,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  amount: {
                    n: 7,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  missing: { n: 8, br: s.FE.readBool, bw: s.Xc.writeBool },
                  est_usd: {
                    n: 9,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = s.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new E();
          return E.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_Asset";
        }
      }
      class F extends B {
        constructor(e = null) {
          super(),
            F.prototype.steamid || s.aR(F.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  contextid: {
                    n: 3,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  get_descriptions: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  language: { n: 5, br: s.FE.readString, bw: s.Xc.writeString },
                  filters: { n: 6, c: R },
                  start_assetid: {
                    n: 8,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  count: { n: 9, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = s.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new F();
          return F.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class R extends B {
        constructor(e = null) {
          super(),
            R.prototype.assetids || s.aR(R.M()),
            B.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  assetids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint64String,
                    pbr: s.FE.readPackedUint64String,
                    bw: s.Xc.writeRepeatedUint64String,
                  },
                  currencyids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  tradable_only: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  marketable_only: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = s.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new R();
          return R.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class M extends B {
        constructor(e = null) {
          super(),
            M.prototype.assets || s.aR(M.M()),
            B.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  assets: { n: 1, c: E, r: !0, q: !0 },
                  descriptions: { n: 2, c: N, r: !0, q: !0 },
                  missing_assets: { n: 3, c: E, r: !0, q: !0 },
                  more_items: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                  last_assetid: {
                    n: 5,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                  total_inventory_count: {
                    n: 6,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new M();
          return M.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class z extends B {
        constructor(e = null) {
          super(),
            z.prototype.trade_offer_access_token || s.aR(z.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  trade_offer_access_token: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = s.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new z();
          return z.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class T extends B {
        constructor(e = null) {
          super(),
            T.prototype.url || s.aR(T.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  url: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = s.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new T();
          return T.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class I extends B {
        constructor(e = null) {
          super(),
            I.prototype.descriptions || s.aR(I.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { descriptions: { n: 1, c: N, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            i = new I();
          return I.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      var k;
      !(function (e) {
        (e.GetInventoryItemsWithDescriptions = function (e, t) {
          return e.SendMsg("Econ.GetInventoryItemsWithDescriptions#1", t, M, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetTradeOfferAccessToken = function (e, t) {
            return e.SendMsg("Econ.GetTradeOfferAccessToken#1", t, z, {
              ePrivilege: 1,
            });
          }),
          (e.ClientGetItemShopOverlayAuthURL = function (e, t) {
            return e.SendMsg("Econ.ClientGetItemShopOverlayAuthURL#1", t, T, {
              ePrivilege: 1,
            });
          }),
          (e.GetAssetClassInfo = function (e, t) {
            return e.SendMsg("Econ.GetAssetClassInfo#1", t, I, {
              ePrivilege: 1,
            });
          });
      })(k || (k = {}));
      var O,
        A = i(5615),
        X = i(50265),
        U = i(82569),
        x = i(63154),
        W = (i(38800), i(70983)),
        C = i(31587);
      i(15781);
      !(function (e) {
        (e[(e.New = 0)] = "New"),
          (e[(e.Update = 1)] = "Update"),
          (e[(e.Remove = 2)] = "Remove");
      })(O || (O = {}));
      class j {
        constructor() {
          (this.m_rgNotificationRollups = []),
            (this.m_summary = {
              comments: 0,
              inventory_items: 0,
              invites: 0,
              gifts: 0,
              offline_messages: 0,
              trade_offers: 0,
              async_game_updates: 0,
              moderator_messages: 0,
              help_request_replies: 0,
              general: 0,
              wishlist: 0,
              pending_gifts: 0,
              pending_invites: 0,
            }),
            (this.m_bLoaded = !1),
            (this.m_rgNotifyServerRead = []),
            (this.m_rgNotifyServerHidden = []),
            (this.m_keyNotifyServerRead = ""),
            (this.m_keyNotifyServerHidden = ""),
            (this.m_rgUnreadNotificationIDs = []),
            (this.m_rgNewRollupIDs = new Map()),
            (this.m_rgDevLatestServerNotificationData = {}),
            (this.m_rgTestNotifications = []);
        }
        setTransport(e) {
          this.m_transport = e;
        }
        NotifyServerNotificationsRead(e) {
          this.m_rgNotifyServerRead.push(...e), this.UpdateServer();
        }
        NotifyServerNotificationsHidden(e) {
          this.m_rgNotifyServerHidden.push(...e), this.UpdateServer();
        }
        BNewNotification(e) {
          return (
            !e.read &&
            !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
          );
        }
        Dev_AddTestNotification(e, t = null) {}
        Dev_UpdateTestNotificationReadState(e, t) {
          const i = this.m_rgTestNotifications.findIndex(
            (t) => t.notification_id == e
          );
          return (
            -1 !== i &&
            this.m_rgTestNotifications[i].read != t &&
            ((this.m_rgTestNotifications[i].read = t), !0)
          );
        }
        UpdateServer() {
          if (this.m_rgNotifyServerRead.length > 0) {
            const e = v.gA.Init(u);
            e.Body().set_notification_ids(this.m_rgNotifyServerRead),
              g.MarkNotificationsRead(this.m_transport, e) &&
                (this.m_rgNotifyServerRead = []);
          }
          if (this.m_rgNotifyServerHidden.length > 0) {
            const e = v.gA.Init(_);
            e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
              g.HideNotification(this.m_transport, e) &&
                (this.m_rgNotifyServerHidden = []);
          }
        }
        MarkItemRead(e) {
          var t;
          let i = this.m_rgNotificationRollups.findIndex(
            (t) => t.item.notification_id == e
          );
          if (-1 === i)
            return void console.error(
              "Attempted to mark notification read that is not in the notification store"
            );
          let r = this.m_rgNotificationRollups[i];
          if (r.item.read)
            console.error(
              "Attempted to mark notification read that is already read"
            );
          else if (
            ((r.item.read = !0),
            (null === (t = r.rgunread) || void 0 === t ? void 0 : t.length) > 0)
          ) {
            this.ReduceNewTotals(r.type, r.rgunread.length);
            let e = [];
            r.rgunread.forEach((t) => {
              e.push(t);
            }),
              (r.rgunread = []),
              this.NotifyServerNotificationsRead(e);
          }
        }
        MarkItemHidden(e) {
          var t, i;
          let r = this.m_rgNotificationRollups.findIndex(
            (t) => t.item.notification_id == e
          );
          if (-1 === r)
            return void console.error(
              "Attempted to mark notification hidden that is not in the notification store"
            );
          let n = this.m_rgNotificationRollups[r];
          (n.item.hidden = !0),
            (null === (t = n.rgunread) || void 0 === t ? void 0 : t.length) >
              0 &&
              this.ReduceNewTotals(
                n.type,
                null === (i = n.rgunread) || void 0 === i ? void 0 : i.length
              ),
            this.NotifyServerNotificationsHidden([...n.rgunread, ...n.rgread]);
        }
        ReduceNewTotals(e, t) {
          V(this.m_summary, e, -t);
        }
        MarkAllItemsRead() {
          let e = [],
            t = [];
          return (
            this.m_rgNotificationRollups.forEach((i, r) => {
              i.rgunread.length > 0 &&
                (i.rgunread.forEach((t) => {
                  e.push(t);
                }),
                t.push(r));
            }),
            e.length > 0 &&
              ((this.m_summary = {
                comments: 0,
                inventory_items: 0,
                invites: 0,
                gifts: 0,
                offline_messages: 0,
                trade_offers: 0,
                async_game_updates: 0,
                moderator_messages: 0,
                help_request_replies: 0,
                general: 0,
                wishlist: 0,
                pending_gifts: 0,
                pending_invites: 0,
              }),
              t.forEach((e) => {
                let t = this.m_rgNotificationRollups[e];
                (t.item.read = !0), (t.rgunread = []);
              }),
              this.NotifyServerNotificationsRead(e)),
            e.length + 0
          );
        }
        ProcessNewNotificationPayload(e, t = null) {
          var i, r;
          let n = [],
            a = {
              comments: 0,
              inventory_items: 0,
              invites: 0,
              gifts: 0,
              offline_messages: 0,
              trade_offers: 0,
              async_game_updates: 0,
              moderator_messages: 0,
              help_request_replies: 0,
              general: 0,
              wishlist: 0,
              pending_gifts: 0,
              pending_invites: 0,
            };
          null === (i = e.notifications) ||
            void 0 === i ||
            i.forEach((e) => {
              if (this.m_rgNotifyServerHidden.length > 0) {
                -1 !==
                  this.m_rgNotifyServerHidden.findIndex(
                    (t) => t == e.notification_id
                  ) && (e.hidden = !0);
              }
              if (
                (function (e) {
                  if (e.hidden) return !1;
                  const t = Q[e.notification_type].fnGet;
                  return !!t && null != t(e.body_data);
                })(e)
              ) {
                if (this.m_rgNotifyServerRead.length > 0) {
                  -1 !==
                    this.m_rgNotifyServerRead.findIndex(
                      (t) => t == e.notification_id
                    ) && (e.read = !0);
                }
                e.read || V(a, e.notification_type, 1),
                  this.AddNotificationToRollups(n, e);
              }
            }),
            n.sort((e, t) => e.timestamp - t.timestamp),
            t &&
              (n.forEach((e) => {
                e.bIncludesNew
                  ? (this.m_rgNewRollupIDs.set(e.key, { rollup: e, read: !1 }),
                    t(e, O.New))
                  : this.m_rgNewRollupIDs.has(e.key) &&
                    this.m_rgNewRollupIDs.get(e.key).read != e.item.read &&
                    (this.m_rgNewRollupIDs.set(e.key, {
                      rollup: e,
                      read: e.item.read,
                    }),
                    t(e, O.Update));
              }),
              this.m_rgNewRollupIDs.forEach((e, i) => {
                -1 == n.findIndex((e) => e.key == i) &&
                  (t(e.rollup, O.Remove), this.m_rgNewRollupIDs.delete(i));
              })),
            n.reverse(),
            (a.pending_gifts =
              null !== (r = e.pending_gift_count) && void 0 !== r ? r : 0),
            (a.pending_invites = 0),
            (this.m_rgNotificationRollups = n.slice()),
            (this.m_summary = a),
            (this.m_bLoaded = !0);
        }
        AddNotificationToRollups(e, t) {
          var i;
          const r = this.BNewNotification(t);
          r && this.m_rgUnreadNotificationIDs.push(t.notification_id);
          let n = t.notification_type;
          switch (n) {
            case 3:
              {
                const a = P(t.body_data);
                if (!a) return;
                const s =
                  (null === (i = a.owner_steam_id) || void 0 === i
                    ? void 0
                    : i.GetAccountID()) +
                  "_" +
                  a.topic_id;
                let o = e.findIndex((e) => e.key == s);
                if (-1 == o)
                  e.push({
                    type: n,
                    key: s,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bIncludesNew: r,
                  });
                else {
                  let i = e[o];
                  (i.timestamp < t.timestamp || (!t.read && i.item.read)) &&
                    ((i.item = t), (i.timestamp = t.timestamp)),
                    (i.rollup_count = i.rollup_count + 1),
                    (i.bIncludesNew = i.bIncludesNew || r),
                    t.read
                      ? i.rgread.push(t.notification_id)
                      : i.rgunread.push(t.notification_id);
                }
              }
              break;
            case 4:
              {
                const i = L(t.body_data);
                if (!i) return;
                let a = e.findIndex((e) => e.key == i.appid);
                if (-1 == a)
                  e.push({
                    type: n,
                    key: i.appid,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bIncludesNew: r,
                  });
                else {
                  let i = e[a];
                  (i.timestamp < t.timestamp || (!t.read && i.item.read)) &&
                    ((i.item = t), (i.timestamp = t.timestamp)),
                    (i.rollup_count = i.rollup_count + 1),
                    (i.bIncludesNew = i.bIncludesNew || r),
                    t.read
                      ? i.rgread.push(t.notification_id)
                      : i.rgunread.push(t.notification_id);
                }
                x.Z.Get().QueueAppRequest(parseInt(i.appid), {});
              }
              break;
            case 12:
              const a = $(t.body_data).appid.toString();
              if (a) {
                let i = e.findIndex((e) => e.key == a);
                if (-1 == i)
                  e.push({
                    type: n,
                    key: a,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bIncludesNew: r,
                  });
                else {
                  let n = e[i];
                  (n.timestamp < t.timestamp || (!t.read && n.item.read)) &&
                    ((n.item = t), (n.timestamp = t.timestamp)),
                    (n.rollup_count = n.rollup_count + 1),
                    (n.bIncludesNew = n.bIncludesNew || r),
                    t.read
                      ? n.rgread.push(t.notification_id)
                      : n.rgunread.push(t.notification_id);
                }
                x.Z.Get().QueueAppRequest(parseInt(a), { include_assets: !0 });
              }
              break;
            case 8:
              const s = Z(t.body_data).appid;
              s && x.Z.Get().QueueAppRequest(s, { include_assets: !0 });
            default:
              e.push({
                type: n,
                item: t,
                key: t.notification_id,
                timestamp: t.timestamp,
                rgunread: t.read ? [] : [t.notification_id],
                rgread: t.read ? [t.notification_id] : [],
                bIncludesNew: r,
              });
          }
        }
      }
      (0, b.gn)([X.LO], j.prototype, "m_rgNotificationRollups", void 0),
        (0, b.gn)([X.LO], j.prototype, "m_summary", void 0),
        (0, b.gn)([X.LO], j.prototype, "m_bLoaded", void 0);
      const D = "ItemMetadata";
      function G(e, t, i) {
        let r = L(e.body_data);
        r.steamid = t;
        let n = (0, A.useQuery)(
          (function (e) {
            return `${D}_${null == e ? void 0 : e.steamid}_${
              null == e ? void 0 : e.appid
            }_${null == e ? void 0 : e.contextid}_${
              null == e ? void 0 : e.assetid
            }`;
          })(r),
          () =>
            (0, b.mG)(this, void 0, void 0, function* () {
              return (function (e, t) {
                return (0, b.mG)(this, void 0, void 0, function* () {
                  if (!(e && e.steamid && e.contextid && e.appid && e.assetid))
                    return (
                      console.error(
                        "Item notification missing required attributes"
                      ),
                      null
                    );
                  const i = v.gA.Init(F);
                  i.Body().set_steamid(e.steamid),
                    i.Body().set_contextid(e.contextid),
                    i.Body().set_appid(parseInt(e.appid)),
                    i.Body().set_get_descriptions(!0);
                  let r = new R();
                  r.add_assetids(e.assetid), i.Body().set_filters(r);
                  const n = yield k.GetInventoryItemsWithDescriptions(t, i);
                  if (1 !== n.GetEResult())
                    return (
                      console.error(
                        "Request for steam item metadata did not succeed",
                        n.GetEResult()
                      ),
                      null
                    );
                  let a = "";
                  const s = yield x.Z.Get().QueueAppRequest(
                    parseInt(e.appid),
                    {}
                  );
                  if (1 == s) {
                    const t = x.Z.Get().GetApp(parseInt(e.appid));
                    a = null == t ? void 0 : t.GetName();
                  } else console.log("Failed getting app info", s);
                  return {
                    app_name: a,
                    item_data: n.Body().toObject().descriptions[0],
                  };
                });
              })(r, i);
            }),
          { staleTime: 1 / 0 }
        );
        return n.isSuccess ? n.data : null;
      }
      function L(e) {
        let t = "",
          i = "",
          r = "";
        try {
          let n = JSON.parse(e);
          (t = n.app_id), (i = n.asset_id), (r = n.context_id);
        } catch (e) {
          return console.error("Item notification in invalid format"), null;
        }
        return { appid: t, assetid: i, contextid: r };
      }
      function P(e) {
        if (!e) return null;
        try {
          let t = JSON.parse(e),
            i = {
              owner_steam_id: t.owner_steam_id
                ? new U.K(t.owner_steam_id)
                : null,
              bclan_account: K(t.bclan_account),
              title: t.title,
              comment: t.text,
              time: t.last_post,
              comment_type: t.type,
              topic_id: t.topic_id,
              forum_id: t.forum_id,
              account_id: t.account_id ? new U.K(t.account_id) : null,
              bhas_friend: K(t.bhas_friend),
              bis_forum: K(t.bis_forum),
              last_post: t.last_post,
            };
          return t.json_data && (i.json_data = t.json_data), i;
        } catch (e) {
          q("Comment notification in invalid format");
        }
        return null;
      }
      function q(...e) {
        0;
      }
      var H;
      function $(e) {
        try {
          let t = JSON.parse(e);
          return !t.appid ||
            !t.state ||
            (t.state != H.k_EAsyncGameSessionUserStateReadyForAction &&
              t.state != H.k_EAsyncGameSessionUserStateDone)
            ? (q(), null)
            : { appid: parseInt(t.appid), state: parseInt(t.state) };
        } catch (e) {
          q();
        }
        return null;
      }
      function Z(e) {
        var t;
        try {
          let i = JSON.parse(e);
          return {
            appid: parseInt(i.appid),
            count: null !== (t = i.count) && void 0 !== t ? t : 1,
          };
        } catch (e) {
          q();
        }
        return null;
      }
      function Y(e) {
        try {
          let t = JSON.parse(e);
          return {
            requestorID: t.requestor_id,
            state: t.state ? parseInt(t.state) : 0,
          };
        } catch (e) {
          q();
        }
        return null;
      }
      function J(e) {
        try {
          return JSON.parse(e).sender;
        } catch (e) {
          q();
        }
        return null;
      }
      !(function (e) {
        (e[(e.k_EAsyncGameSessionUserStateWaitingForOthers = 0)] =
          "k_EAsyncGameSessionUserStateWaitingForOthers"),
          (e[(e.k_EAsyncGameSessionUserStateReadyForAction = 1)] =
            "k_EAsyncGameSessionUserStateReadyForAction"),
          (e[(e.k_EAsyncGameSessionUserStateDone = 2)] =
            "k_EAsyncGameSessionUserStateDone");
      })(H || (H = {}));
      const Q = {
        3: { fnGet: P, bBasic: !1 },
        5: { fnGet: Y, bBasic: !1 },
        2: {
          fnGet: function (e) {
            try {
              return JSON.parse(e).gifter_account.toString();
            } catch (e) {
              q();
            }
            return null;
          },
          bBasic: !1,
        },
        4: { fnGet: L, bBasic: !1 },
        8: { fnGet: Z, bBasic: !1 },
        9: { fnGet: J, bBasic: !1 },
        10: {
          fnGet: function (e) {
            try {
              let t = JSON.parse(e);
              return t.title || t.body ? t : (q(), null);
            } catch (e) {
              q();
            }
            return null;
          },
          bBasic: !0,
        },
        11: {
          fnGet: function (e) {
            try {
              let t = JSON.parse(e);
              return t.ticket
                ? {
                    title: (0, C.Xx)("#SteamNotification_HelpRequest_Title"),
                    body: (0, C.Xx)(
                      "#SteamNotification_HelpRequest_Body",
                      t.ticket
                    ),
                    link: W.De.HELP_BASE_URL + "wizard/HelpRequest/" + t.ticket,
                  }
                : (q(), null);
            } catch (e) {
              q();
            }
            return null;
          },
          bBasic: !0,
        },
        12: { fnGet: $, bBasic: !1 },
      };
      function K(e) {
        var t;
        if (void 0 === e) return !1;
        if ("number" == typeof e) return e > 0;
        if ("string" == typeof e)
          switch (
            null === (t = e.toLowerCase()) || void 0 === t ? void 0 : t.trim()
          ) {
            case "true":
            case "1":
              return !0;
            default:
              return !1;
          }
        return q(), !1;
      }
      function V(e, t, i) {
        switch (t) {
          case 12:
            e.async_game_updates = Math.max(0, e.async_game_updates + i);
            break;
          case 3:
            e.comments = Math.max(0, e.comments + i);
            break;
          case 5:
            e.invites = Math.max(0, e.invites + i);
            break;
          case 10:
            e.general = Math.max(0, e.general + i);
            break;
          case 2:
            e.gifts = Math.max(0, e.gifts + i);
            break;
          case 11:
            e.help_request_replies = Math.max(0, e.help_request_replies + i);
            break;
          case 4:
            e.inventory_items = Math.max(0, e.inventory_items + i);
            break;
          case 9:
            e.trade_offers = Math.max(0, e.trade_offers + i);
            break;
          case 8:
            e.wishlist = Math.max(0, e.wishlist + i);
        }
      }
      var ee,
        te = i(23708),
        ie = i(5545),
        re = i(86701),
        ne = i(23907),
        ae = (i(55449), i(13806)),
        se = i(5055),
        oe = i(93958),
        le = i(45850),
        ce = i.n(le);
      function ue(e) {
        let { onActivate: t, icon: i, body: n, eUIMode: a, classNames: s } = e,
          o = t;
        const l = 7 == a ? ce().PinnedTemplateDesktop : ce().PinnedTemplate;
        return r.createElement(
          ne.s,
          { className: (0, ae.Z)(l, s), onActivate: o },
          r.createElement(
            "div",
            { className: ce().Content },
            r.createElement(
              "div",
              { className: ce().PinnedBody },
              r.createElement("span", { className: ce().Icon }, i),
              n
            )
          )
        );
      }
      function de(e) {
        const {
          count: t,
          icon: i,
          onActivate: n,
          strLocToken: a,
          bAlwaysShow: s,
          eUIMode: o,
          classNames: l,
        } = e;
        if (!t && !s) return null;
        const c = (0, C.kb)(a, t);
        return r.createElement(ue, {
          icon: i,
          body: c,
          onActivate: n,
          eUIMode: o,
          classNames: l,
        });
      }
      function me(e) {
        let {
            rollup: t,
            timestamp: i,
            fnRenderTimestamp: n,
            location: a,
            eUIMode: s,
          } = e,
          o = e.onActivate;
        o || (o = () => console.log("Missing activate function")),
          !i && t && (i = t.timestamp);
        const l = 7 == s ? ce().StandardTemplateDesktop : ce().StandardTemplate,
          c = !!i && a == ee.Tray,
          u = null != n ? n : pe;
        let d = null;
        return (
          (null == t ? void 0 : t.item) &&
            (d = t.item.read ? null : ce().Unread),
          r.createElement(
            ne.s,
            {
              className: (0, ae.Z)(l, d),
              onActivate: o,
              onOptionsButton: e.onOptionsButton,
              onOptionsActionDescription: e.onOptionsButtonDesc,
            },
            r.createElement(
              "div",
              { className: ce().StandardLogoDimensions },
              e.logo
            ),
            e.personaStatus &&
              r.createElement("div", {
                className: (0, ae.Z)("AvatarStatus", e.personaStatus),
              }),
            r.createElement(
              "div",
              { className: ce().Content },
              r.createElement(
                "div",
                { className: ce().Header },
                r.createElement("div", { className: ce().Icon }, e.icon),
                r.createElement("div", { className: ce().Title }, e.title),
                c && u({ timestamp: i })
              ),
              r.createElement("div", { className: ce().Body }, e.children)
            )
          )
        );
      }
      function fe(e) {
        let t = (0, ae.Z)(
          ce().StandardNotificationDescription,
          e.multiline && ce().Multiline
        );
        return r.createElement("div", { className: t }, e.children);
      }
      function _e(e) {
        let t = (0, ae.Z)(
          ce().StandardNotificationSubText,
          e.multiline && ce().Multiline
        );
        return r.createElement("div", { className: t }, e.children);
      }
      function pe(e) {
        let t = new Date(),
          i = new Date(1e3 * e.timestamp),
          n = (0, oe.yK)(t, i)
            ? (0, se.Sc)(e.timestamp)
            : (0, se.m9)(e.timestamp, !1, !1, !1);
        return r.createElement("div", { className: ce().Timestamp }, n);
      }
      function ge(e) {
        var t, i, n;
        const { rollup: a, fallbackLogo: s, app: o } = e,
          l =
            null === (t = Q[a.item.notification_type]) || void 0 === t
              ? void 0
              : t.fnGet(a.item.body_data),
          c = "number" == typeof (null == l ? void 0 : l.image),
          u = null !== (i = l.display_name) && void 0 !== i ? i : "",
          d = null !== (n = l.title) && void 0 !== n ? n : l.body,
          m = l.title ? l.body : null;
        let f = null;
        return (
          (f = c
            ? Ne(o, s)
            : l.image
            ? r.createElement("img", {
                className: ce().StandardLogoDimensions,
                src: l.image,
              })
            : s),
          r.createElement(
            me,
            Object.assign({ logo: f, title: u }, e),
            r.createElement(fe, null, d),
            r.createElement(_e, null, m)
          )
        );
      }
      function ye(e) {
        const { displayName: t } = e,
          i = (0, C.Xx)("#SteamNotifications_TradeOffer_Title"),
          n = (0, C.Xx)("#SteamNotifications_TradeOffer_Body"),
          a = (0, C.Xx)("#SteamNotifications_TradeOffer_Description", t);
        return r.createElement(
          me,
          Object.assign({ title: i }, e),
          r.createElement(fe, null, n),
          r.createElement(_e, null, a)
        );
      }
      function be(e) {
        const { senderName: t } = e,
          i = (0, C.Xx)("#Notification_GiftReceived_Body"),
          n = t ? (0, C.Xx)("#Notification_GiftReceived_Description", t) : null,
          a = (0, C.Xx)("#Notification_GiftReceived_Title");
        return r.createElement(
          me,
          Object.assign({ title: a }, e),
          r.createElement(fe, { multiline: !n }, i),
          !!n && r.createElement(_e, null, n)
        );
      }
      function ve(e) {
        var t;
        const { requestorName: i, rollup: n } = e,
          a = (0, r.useMemo)(() => {
            var e;
            return Y(
              null === (e = n.item) || void 0 === e ? void 0 : e.body_data
            );
          }, [null === (t = n.item) || void 0 === t ? void 0 : t.body_data]);
        let s = "";
        return (
          i && 2 == a.state
            ? (s = (0, C.Xx)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse"
              ))
            : i && 3 == a.state
            ? (s = (0, C.Xx)(
                "#SteamNotifications_FriendInvite_Description_Friends"
              ))
            : i &&
              (s = (0, C.Xx)("#SteamNotifications_FriendInvite_Description")),
          r.createElement(
            me,
            Object.assign(
              { title: (0, C.Xx)("#Notification_FriendInvite_Title") },
              e
            ),
            r.createElement(
              fe,
              { multiline: !s },
              i || (0, C.Xx)("#SteamNotifications_FriendInvite_Body_Generic")
            ),
            !!s && r.createElement(_e, null, s)
          )
        );
      }
      function Be(e) {
        var t, i, n;
        const { rollup: a, itemState: s, fallbackLogo: o } = e,
          l = L(null === (t = a.item) || void 0 === t ? void 0 : t.body_data),
          [c, u] = r.useState(!1),
          d = () => u(!0);
        let m = o;
        if (
          (null === (i = null == s ? void 0 : s.item_data) || void 0 === i
            ? void 0
            : i.icon_url) &&
          !c
        ) {
          let e = `${W.De.COMMUNITY_CDN_URL}economy/image/${s.item_data.icon_url}`,
            t = s.item_data.background_color
              ? "#" + s.item_data.background_color
              : null;
          m = r.createElement(
            ne.s,
            { style: { position: "relative" } },
            r.createElement("img", {
              className: ce().StandardLogoDimensions,
              style: { backgroundColor: t, justifyContent: "center" },
              src: e,
              onError: d,
            })
          );
        }
        const f = 753 == parseInt(l.appid);
        let _ = null;
        if (a.rgunread.length > 1) {
          const e = a.rgunread.length - 1;
          _ = f
            ? (0, C.Xx)("#Notification_Item_RollupMore_Steam", e)
            : (null == s ? void 0 : s.app_name)
            ? (0, C.Xx)("#Notification_Item_RollupMore_GameName", e, s.app_name)
            : (0, C.Xx)("#Notification_Item_RollupMore", e);
        } else
          (null == s ? void 0 : s.app_name) &&
            (_ = f
              ? s.app_name
              : (0, C.Xx)("#Notification_Item_Single_GameName", s.app_name));
        const p = (
          null === (n = null == s ? void 0 : s.item_data) || void 0 === n
            ? void 0
            : n.name
        )
          ? (0, C.Xx)("#Notification_Item_Body", s.item_data.name)
          : (0, C.Xx)("#Notification_Item_Body_Generic");
        return r.createElement(
          me,
          Object.assign(
            {
              title: (0, C.Xx)("#Notification_ItemAnnouncement_Title"),
              logo: m,
            },
            e
          ),
          r.createElement(fe, { multiline: !_ }, p),
          !!_ && r.createElement(_e, null, _)
        );
      }
      function he(e) {
        const { rollup: t, app: i, fallbackLogo: n } = e,
          a = (0, r.useMemo)(() => $(t.item.body_data), [t.item.body_data]),
          s = Ne(i, n);
        let o = "";
        return (
          a.state == H.k_EAsyncGameSessionUserStateReadyForAction
            ? (o = (0, C.Xx)("#SteamNotification_AsyncGame_Action"))
            : a.state == H.k_EAsyncGameSessionUserStateDone &&
              (o = (0, C.Xx)("#SteamNotification_AsyncGame_Done")),
          r.createElement(
            me,
            Object.assign(
              {
                logo: s,
                title: (0, C.Xx)("#SteamNotification_AsyncGame_Title"),
              },
              e
            ),
            r.createElement(fe, null, o),
            r.createElement(_e, null, null == i ? void 0 : i.GetName())
          )
        );
      }
      function we(e) {
        var t, i, n;
        const { currentUserSteamID: a, displayName: s, rollup: o } = e,
          l = null === (t = o.item) || void 0 === t ? void 0 : t.body_data,
          c = (0, r.useMemo)(() => P(l), [l]);
        let u = c.title;
        10 == c.comment_type
          ? (u =
              (null === (i = c.owner_steam_id) || void 0 === i
                ? void 0
                : i.ConvertTo64BitString()) == a
                ? (0, C.Xx)("#SteamNotifications_Comment_Your_Profile")
                : s
                ? (0, C.Xx)("#SteamNotifications_Comment_Player_Profile", s)
                : (0, C.Xx)("#SteamNotifications_Comment_Profile"))
          : !u &&
            (null === (n = c.json_data) || void 0 === n ? void 0 : n.title) &&
            (u = c.json_data.title);
        let d = c.comment;
        7 == c.comment_type &&
          c.bis_forum &&
          c.comment &&
          (d = (0, C.Xx)(
            "#SteamNotifications_Comment_NewDiscussion",
            c.comment
          ));
        let m = (0, C.Xx)("#SteamNotifications_Comment");
        return (
          o.rgunread.length > 1 && (m = m + " +" + (o.rgunread.length - 1)),
          r.createElement(
            me,
            Object.assign({ title: m }, e),
            r.createElement(fe, null, u),
            r.createElement(_e, null, d)
          )
        );
      }
      function Se(e) {
        var t;
        const { fallbackLogo: i, app: n, rollup: a } = e,
          s = null === (t = a.item) || void 0 === t ? void 0 : t.body_data,
          o = (0, r.useMemo)(() => Z(s), [s]),
          l = Ne(n, i);
        let c = "",
          u = null;
        return (
          n
            ? ((c = n.GetName()),
              (u =
                1 == o.count
                  ? (0, C.kQ)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      r.createElement(
                        "span",
                        { style: { color: "#FFFFFF" } },
                        n.GetBestPurchasePriceFormatted()
                      )
                    )
                  : 2 == o.count
                  ? (0, C.Xx)("#SteamNotifications_Wishlist_OnSale_PlusOne")
                  : (0, C.Xx)(
                      "#SteamNotifications_Wishlist_OnSale_PlusMany",
                      o.count - 1
                    )))
            : (c = (0, C.Xx)("#SteamNotifications_Wishlist_Generic")),
          r.createElement(
            me,
            Object.assign(
              { logo: l, title: (0, C.Xx)("#SteamNotifications_Wishlist") },
              e
            ),
            r.createElement(fe, { multiline: !u }, c),
            !!u && r.createElement(_e, null, u)
          )
        );
      }
      function Ne(e, t) {
        return e
          ? r.createElement(
              ne.s,
              { style: { position: "relative" } },
              r.createElement("img", {
                className: (0, ae.Z)(ce().WishlistBlurImage),
                src: null == e ? void 0 : e.GetAssets().GetCommunityIconURL(),
              }),
              r.createElement("img", {
                src: null == e ? void 0 : e.GetAssets().GetCommunityIconURL(),
                style: {
                  position: "absolute",
                  left: 7,
                  top: 7,
                  height: 32,
                  width: 32,
                },
              })
            )
          : r.createElement(ne.s, { style: { position: "relative" } }, t);
      }
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.GamepadToast = 1)] = "GamepadToast"),
          (e[(e.DesktopToast = 2)] = "DesktopToast"),
          (e[(e.Tray = 3)] = "Tray"),
          (e[(e.AllNotificationsTray = 4)] = "AllNotificationsTray");
      })(ee || (ee = {}));
      var Ee = i(60209),
        Fe = i(57255);
      function Re() {
        return (
          (Re =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }),
          Re.apply(this, arguments)
        );
      }
      var Me,
        ze = ["bottom", "height", "left", "right", "top", "width"],
        Te = new Map(),
        Ie = function e() {
          var t = [];
          Te.forEach(function (e, i) {
            var r,
              n,
              a = i.getBoundingClientRect();
            (r = a),
              (n = e.rect),
              void 0 === r && (r = {}),
              void 0 === n && (n = {}),
              ze.some(function (e) {
                return r[e] !== n[e];
              }) && ((e.rect = a), t.push(e));
          }),
            t.forEach(function (e) {
              e.callbacks.forEach(function (t) {
                return t(e.rect);
              });
            }),
            (Me = window.requestAnimationFrame(e));
        };
      var ke = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;
      function Oe(e, t) {
        void 0 === t && (t = { width: 0, height: 0 });
        var i = r.useState(e.current),
          n = i[0],
          a = i[1],
          s = r.useReducer(Ae, t),
          o = s[0],
          l = s[1],
          c = r.useRef(!1);
        return (
          ke(function () {
            e.current !== n && a(e.current);
          }),
          ke(
            function () {
              if (n && !c.current) {
                c.current = !0;
                var e = n.getBoundingClientRect();
                l({ rect: e });
              }
            },
            [n]
          ),
          r.useEffect(
            function () {
              if (n) {
                var e,
                  t,
                  i =
                    ((e = n),
                    (t = function (e) {
                      l({ rect: e });
                    }),
                    {
                      observe: function () {
                        var i = 0 === Te.size;
                        Te.has(e)
                          ? Te.get(e).callbacks.push(t)
                          : Te.set(e, {
                              rect: void 0,
                              hasRectChanged: !1,
                              callbacks: [t],
                            }),
                          i && Ie();
                      },
                      unobserve: function () {
                        var i = Te.get(e);
                        if (i) {
                          var r = i.callbacks.indexOf(t);
                          r >= 0 && i.callbacks.splice(r, 1),
                            i.callbacks.length || Te.delete(e),
                            Te.size || cancelAnimationFrame(Me);
                        }
                      },
                    });
                return (
                  i.observe(),
                  function () {
                    i.unobserve();
                  }
                );
              }
            },
            [n]
          ),
          o
        );
      }
      function Ae(e, t) {
        var i = t.rect;
        return e.height !== i.height || e.width !== i.width ? i : e;
      }
      var Xe = function () {
          return 50;
        },
        Ue = function (e) {
          return e;
        },
        xe = function (e, t) {
          return e[t ? "offsetWidth" : "offsetHeight"];
        },
        We = function (e) {
          for (
            var t = Math.max(e.start - e.overscan, 0),
              i = Math.min(e.end + e.overscan, e.size - 1),
              r = [],
              n = t;
            n <= i;
            n++
          )
            r.push(n);
          return r;
        },
        Ce = function (e, t) {
          void 0 === t && (t = { width: 0, height: 0 });
          var i = r.useState(t),
            n = i[0],
            a = i[1],
            s = r.useState(e.current),
            o = s[0],
            l = s[1];
          return (
            ke(function () {
              l(e.current);
            }),
            ke(
              function () {
                if (o)
                  return (
                    e(),
                    o.addEventListener("resize", e),
                    function () {
                      o.removeEventListener("resize", e);
                    }
                  );
                function e() {
                  var e = { width: o.innerWidth, height: o.innerHeight };
                  a(function (t) {
                    return t.height !== e.height || t.width !== e.width ? e : t;
                  });
                }
              },
              [o]
            ),
            n
          );
        },
        je = function (e) {
          var t = e.parentRef,
            i = e.windowRef,
            n = void 0 !== i,
            a = r.useRef(null),
            s = (function (e) {
              var t = e.parentRef,
                i = e.horizontal,
                n = e.useObserver,
                a = e.initialRect,
                s = i ? "scrollLeft" : "scrollTop",
                o = r.useState(0),
                l = o[0],
                c = o[1],
                u = r.useState(t.current),
                d = u[0],
                m = u[1];
              ke(function () {
                m(t.current);
              }),
                ke(
                  function () {
                    if (d) {
                      var e = function () {
                        c(d[s]);
                      };
                      return (
                        e(),
                        d.addEventListener("scroll", e, {
                          capture: !1,
                          passive: !0,
                        }),
                        function () {
                          d.removeEventListener("scroll", e);
                        }
                      );
                    }
                    c(0);
                  },
                  [d, s]
                );
              var f = r.useCallback(
                  function (e) {
                    t.current && (t.current[s] = e);
                  },
                  [t, s]
                ),
                _ = i ? "width" : "height";
              return {
                outerSize: (n || Oe)(t, a)[_],
                scrollOffset: l,
                scrollToFn: f,
              };
            })(Re(Re({}, e), {}, { parentRef: n ? a : t })),
            o = (function (e) {
              var t = e.windowRef,
                i = e.parentRef,
                n = e.horizontal,
                a = e.useWindowObserver,
                s = e.initialRect,
                o = r.useState(0),
                l = o[0],
                c = o[1],
                u = r.useState(t.current),
                d = u[0],
                m = u[1],
                f = r.useRef(0),
                _ = n ? "left" : "top",
                p = n ? "scrollX" : "scrollY";
              ke(function () {
                m(t.current);
              }),
                ke(
                  function () {
                    if (!d) return (f.current = 0), void c(0);
                    i.current &&
                      (f.current = d[p] + i.current.getBoundingClientRect()[_]);
                    var e = function () {
                      var e = d[p] - f.current;
                      c(e);
                    };
                    return (
                      e(),
                      d.addEventListener("scroll", e, {
                        capture: !1,
                        passive: !0,
                      }),
                      function () {
                        d.removeEventListener("scroll", e);
                      }
                    );
                  },
                  [d, p, _, i]
                );
              var g = r.useCallback(
                  function (e, i) {
                    if (t.current) {
                      var r,
                        n = ["ToIndex", "SizeChanged"].includes(i)
                          ? f.current
                          : 0;
                      t.current.scrollTo((((r = {})[_] = e + n), r));
                    }
                  },
                  [t, _]
                ),
                y = n ? "width" : "height";
              return {
                outerSize: (a || Ce)(t, s)[y],
                scrollOffset: l,
                scrollToFn: g,
              };
            })(Re(Re({}, e), {}, { windowRef: n ? i : a }));
          return n ? o : s;
        };
      function De(e) {
        var t,
          i = e.size,
          n = void 0 === i ? 0 : i,
          a = e.estimateSize,
          s = void 0 === a ? Xe : a,
          o = e.overscan,
          l = void 0 === o ? 1 : o,
          c = e.paddingStart,
          u = void 0 === c ? 0 : c,
          d = e.paddingEnd,
          m = void 0 === d ? 0 : d,
          f = e.parentRef,
          _ = e.windowRef,
          p = e.horizontal,
          g = e.scrollToFn,
          y = e.useObserver,
          b = e.useWindowObserver,
          v = e.initialRect,
          B = e.keyExtractor,
          h = void 0 === B ? Ue : B,
          w = e.measureSize,
          S = void 0 === w ? xe : w,
          N = e.rangeExtractor,
          E = void 0 === N ? We : N,
          F = e.useScroll,
          R = void 0 === F ? je : F,
          M = r.useRef({ scrollOffset: 0, measurements: [] }),
          z = R({
            windowRef: _,
            parentRef: f,
            horizontal: p,
            useObserver: y,
            useWindowObserver: b,
            initialRect: v,
          }),
          T = z.outerSize,
          I = z.scrollOffset,
          k = z.scrollToFn,
          O = r.useRef(I);
        M.current.scrollOffset !== I && (O.current = I),
          (M.current.outerSize = T),
          (M.current.scrollOffset = I);
        var A = r.useCallback(
            function (e, t) {
              var i =
                g ||
                function (e) {
                  return k(e, t);
                };
              i(e, k);
            },
            [g, k]
          ),
          X = r.useState({}),
          U = X[0],
          x = X[1],
          W = r.useCallback(function () {
            return x({});
          }, []),
          C = r.useRef([]),
          j = r.useMemo(
            function () {
              var e =
                C.current.length > 0 ? Math.min.apply(Math, C.current) : 0;
              C.current = [];
              for (
                var t = M.current.measurements.slice(0, e), i = e;
                i < n;
                i++
              ) {
                var r = h(i),
                  a = U[r],
                  o = t[i - 1] ? t[i - 1].end : u,
                  l = "number" == typeof a ? a : s(i),
                  c = o + l;
                t[i] = { index: i, start: o, size: l, end: c, key: r };
              }
              return t;
            },
            [s, U, u, n, h]
          ),
          D = ((null == (t = j[n - 1]) ? void 0 : t.end) || 0) + m;
        (M.current.measurements = j), (M.current.totalSize = D);
        var G = (function (e) {
            var t = e.measurements,
              i = e.outerSize,
              r = e.scrollOffset,
              n = t.length - 1,
              a = function (e) {
                return t[e].start;
              },
              s = Ge(0, n, a, r),
              o = s;
            for (; o < n && t[o].end < r + i; ) o++;
            return { start: s, end: o };
          })(M.current),
          L = G.start,
          P = G.end,
          q = r.useMemo(
            function () {
              return E({ start: L, end: P, overscan: l, size: j.length });
            },
            [L, P, l, j.length, E]
          ),
          H = r.useRef(S);
        H.current = S;
        var $ = r.useMemo(
            function () {
              for (
                var e = [],
                  t = function (t, i) {
                    var r = q[t],
                      n = Re(
                        Re({}, j[r]),
                        {},
                        {
                          measureRef: function (e) {
                            if (e) {
                              var t = H.current(e, p);
                              if (t !== n.size) {
                                var i = M.current.scrollOffset;
                                if (n.start < i) {
                                  var a = t - n.size;
                                  (O.current += a), k(O.current, "SizeChanged");
                                }
                                C.current.push(r),
                                  x(function (e) {
                                    var i;
                                    return Re(
                                      Re({}, e),
                                      {},
                                      (((i = {})[n.key] = t), i)
                                    );
                                  });
                              }
                            }
                          },
                        }
                      );
                    e.push(n);
                  },
                  i = 0,
                  r = q.length;
                i < r;
                i++
              )
                t(i);
              return e;
            },
            [q, k, p, j]
          ),
          Z = r.useRef(!1);
        ke(
          function () {
            Z.current && x({}), (Z.current = !0);
          },
          [s]
        );
        var Y = r.useCallback(
            function (e, t, i) {
              var r = (void 0 === t ? {} : t).align,
                n = void 0 === r ? "start" : r;
              void 0 === i && (i = "ToOffset");
              var a = M.current,
                s = a.scrollOffset,
                o = a.outerSize;
              "auto" === n &&
                (n = e <= s ? "start" : e >= s + o ? "end" : "start"),
                "start" === n
                  ? A(e, i)
                  : "end" === n
                  ? A(e - o, i)
                  : "center" === n && A(e - o / 2, i);
            },
            [A]
          ),
          J = r.useCallback(
            function (e, t) {
              var i = void 0 === t ? {} : t,
                r = i.align,
                a = void 0 === r ? "auto" : r,
                s = (function (e, t) {
                  if (null == e) return {};
                  var i,
                    r,
                    n = {},
                    a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
                  return n;
                })(i, ["align"]),
                o = M.current,
                l = o.measurements,
                c = o.scrollOffset,
                u = o.outerSize,
                d = l[Math.max(0, Math.min(e, n - 1))];
              if (d) {
                if ("auto" === a)
                  if (d.end >= c + u) a = "end";
                  else {
                    if (!(d.start <= c)) return;
                    a = "start";
                  }
                var m =
                  "center" === a
                    ? d.start + d.size / 2
                    : "end" === a
                    ? d.end
                    : d.start;
                Y(m, Re({ align: a }, s), "ToIndex");
              }
            },
            [Y, n]
          ),
          Q = r.useCallback(
            function () {
              for (
                var e = arguments.length, t = new Array(e), i = 0;
                i < e;
                i++
              )
                t[i] = arguments[i];
              J.apply(void 0, t),
                requestAnimationFrame(function () {
                  J.apply(void 0, t);
                });
            },
            [J]
          );
        return {
          virtualItems: $,
          totalSize: D,
          scrollToOffset: Y,
          scrollToIndex: Q,
          measure: W,
        };
      }
      var Ge = function (e, t, i, r) {
        for (; e <= t; ) {
          var n = ((e + t) / 2) | 0,
            a = i(n);
          if (a < r) e = n + 1;
          else {
            if (!(a > r)) return n;
            t = n - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      };
      var Le = i(15901),
        Pe = i.n(Le),
        qe = i(25125);
      class He {
        constructor() {
          (this.rgFilterState = new Map()),
            (this.k_rgFilterCheckboxes = [
              {
                type: 3,
                display: (0, C.Xx)("#NotificationsFilters_Comments"),
                hash: "comments",
              },
              { type: 8, display: (0, C.Xx)("#NotificationsFilters_Wishlist") },
              {
                type: 5,
                display: (0, C.Xx)("#NotificationsFilters_FriendRequest"),
                hash: "invites",
              },
              {
                type: 2,
                display: (0, C.Xx)("#NotificationsFilters_Gifts"),
                hash: "gifts",
              },
              {
                type: 4,
                display: (0, C.Xx)("#NotificationsFilters_Inventory"),
                hash: "inventory",
              },
              {
                type: 12,
                display: (0, C.Xx)("#NotificationsFilters_AsyncGame"),
              },
              {
                type: 11,
                display: (0, C.Xx)("#NotificationsFilters_HelpRequest"),
              },
              {
                type: 9,
                display: (0, C.Xx)("#NotificationsFilters_TradeOffer"),
              },
              { type: 10, display: (0, C.Xx)("#NotificationsFilters_General") },
            ]);
        }
        SetHash(e) {
          const t = this.k_rgFilterCheckboxes.findIndex((t) => t.hash == e);
          -1 !== t && this.SetFilter(this.k_rgFilterCheckboxes[t].type, !0, !0);
        }
        SetFilter(e, t, i) {
          i && this.rgFilterState.clear(), this.rgFilterState.set(e, t);
        }
      }
      function $e() {
        (0, qe.SZ)(() => [...Je.rgFilterState]);
        let e = 0;
        return (
          Je.rgFilterState.forEach((t) => {
            e += t ? 1 : 0;
          }),
          { numActive: e, filters: Je.rgFilterState }
        );
      }
      function Ze() {
        return (0, qe.SZ)(() => {
          return (
            (e = Qe.m_summary).invites +
            e.inventory_items +
            e.comments +
            e.offline_messages +
            e.gifts +
            e.trade_offers +
            e.async_game_updates +
            e.moderator_messages +
            e.general +
            e.wishlist +
            e.help_request_replies
          );
          var e;
        });
      }
      function Ye() {
        return Qe.m_summary;
      }
      (0, b.gn)([X.LO], He.prototype, "rgFilterState", void 0);
      const Je = new He(),
        Qe = new j();
      function Ke(e) {
        const { hash: t } = e;
        (0, r.useEffect)(() => {
          Je.SetHash(t);
        }, [t]);
        const i = (0, Ee.bY)();
        (0, r.useEffect)(() => {
          Qe.setTransport(i);
        }, [i]);
        const n = (0, W.kQ)("notifications", "application_config");
        return (
          Qe.ProcessNewNotificationPayload(n),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "div",
              { className: Pe().NotificationPageCtn },
              r.createElement(
                "div",
                { className: Pe().NotificationsHeader },
                r.createElement(
                  "span",
                  { className: Pe().NotificationsHeaderTitle },
                  (0, C.Xx)("#NotificationsList_Header")
                ),
                r.createElement(Ve, null)
              ),
              r.createElement(
                "div",
                { className: Pe().NotificationsBody },
                r.createElement(
                  "div",
                  { className: Pe().NotificationListCtn },
                  r.createElement(ot, null),
                  r.createElement(et, null)
                ),
                r.createElement(
                  "div",
                  { className: Pe().NotificationFiltersCtn },
                  r.createElement(tt, null)
                )
              )
            )
          )
        );
      }
      function Ve() {
        const e = Ze(),
          t = e > 0 ? (0, C.Xx)("#NotificationsList_Unread", e) : "";
        return e
          ? r.createElement(
              "span",
              { className: Pe().NotificationsHeaderUnread },
              t
            )
          : null;
      }
      function et() {
        const e = r.useRef(),
          t = (function () {
            const { numActive: e, filters: t } = $e();
            return (
              Ze(),
              e
                ? Qe.m_rgNotificationRollups.filter((e) => 1 == t.get(e.type))
                : Qe.m_rgNotificationRollups
            );
          })(),
          i = De({
            size: t.length,
            parentRef: e,
            estimateSize: r.useCallback(() => 70, [70]),
            overscan: 1,
          });
        return r.createElement(
          ne.s,
          {
            ref: e,
            className: Pe().NotificationsList,
            style: { height: i.totalSize },
          },
          i.virtualItems.map((e, i) => {
            const n = t[i];
            return r.createElement(rt, { key: n.key, rollup: n });
          })
        );
      }
      function tt() {
        const { filters: e } = $e();
        return r.createElement(
          "div",
          { className: Pe().NotificationsFilterCtn },
          r.createElement(
            "div",
            { className: Pe().SettingsButtons },
            r.createElement(
              Fe.zx,
              {
                className: Pe().MarkAllReadButton,
                onClick: () => Qe.MarkAllItemsRead(),
              },
              (0, C.Xx)("#NotificationsList_MarkAllRead")
            ),
            r.createElement(
              Fe.zx,
              { className: Pe().SettingsButton },
              r.createElement(re.Zrf, { className: Pe().SettingsImg }),
              (0, C.Xx)("#NotificationsList_Settings")
            )
          ),
          r.createElement(
            "div",
            { className: Pe().SettingsFiltersTitle },
            (0, C.Xx)("#NotificationsList_FilterTo")
          ),
          r.createElement(
            "div",
            { className: Pe().SettingsFilters },
            Je.k_rgFilterCheckboxes.map((t) =>
              r.createElement(Fe.ji, {
                className: Pe().FilterCheckbox,
                key: t.type,
                label: t.display,
                checked: e.get(t.type),
                onChange: (e) => Je.SetFilter(t.type, e),
              })
            )
          ),
          r.createElement(
            Fe.zx,
            {
              className: Pe().ResetButton,
              onClick: () => Je.SetFilter(10, !1, !0),
            },
            (0, C.Xx)("#NotificationsList_Reset")
          )
        );
      }
      function it(e, t) {
        t.read || Qe.MarkItemRead(t.notification_id), e();
      }
      function rt(e) {
        const { rollup: t } = e,
          i = Q[t.type].bBasic ? st : nt[t.type];
        return i ? r.createElement(i, { rollup: t }) : null;
      }
      const nt = {
        3: function (e) {
          var t;
          const { rollup: i } = e,
            a = (0, r.useMemo)(() => {
              var e;
              return P(
                null === (e = i.item) || void 0 === e ? void 0 : e.body_data
              );
            }, [null === (t = i.item) || void 0 === t ? void 0 : t.body_data]),
            s = (0, n.M)(),
            o =
              (ie.De.IN_CLIENT ? "steam://openurl_external/" : "") +
              ie.De.COMMUNITY_BASE_URL +
              (function (e) {
                let t = `comment/${
                  e.comment_type
                }/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${
                  e.forum_id
                }/?feature2=${e.topic_id}`;
                return (
                  e.last_post > 0 && (t += "&tscn=" + (e.last_post - 1)), t
                );
              })(a);
          return r.createElement(we, {
            logo: r.createElement(re.ui7, null),
            icon: r.createElement(re.xg, null),
            onActivate: () => it(() => window.location.assign(o), i.item),
            location: ee.Tray,
            currentUserSteamID: s,
            rollup: i,
            eUIMode: 7,
            displayName: "",
          });
        },
        8: function (e) {
          var t;
          const { rollup: i } = e,
            a = null === (t = i.item) || void 0 === t ? void 0 : t.body_data,
            s = (0, r.useMemo)(() => Z(a), [a]),
            [o, l] = (0, te.vs)(s.appid, { include_assets: !0 }),
            [c, u] = (0, r.useState)(""),
            d = (0, n.M)();
          (0, r.useEffect)(() => {
            if (!s.appid || !o || s.count > 1) {
              const e = s.appid ? `?appid=${s.appid}` : "";
              u(
                (ie.De.IN_CLIENT ? "steam://openurl_external/" : "") +
                  ie.De.STORE_BASE_URL +
                  `wishlist/profiles/${d}/${e}#sort=discount`
              );
            } else u(o.GetStorePageURL());
          }, [s, o, d]);
          return r.createElement(Se, {
            fallbackLogo: r.createElement(re.ui7, null),
            icon: r.createElement(re.sqQ, null),
            onActivate: () => it(() => window.location.assign(c), i.item),
            app: o,
            location: ee.Tray,
            eUIMode: 7,
            rollup: i,
          });
        },
        5: function (e) {
          const { rollup: t } = e,
            i = (0, n.M)(),
            a = `${ie.De.COMMUNITY_BASE_URL}profiles/${i}/friends/pending`;
          return r.createElement(ve, {
            logo: r.createElement(re.pUF, null),
            icon: r.createElement(re.Fsn, { bPending: !0 }),
            onActivate: () => it(() => window.location.assign(a), t.item),
            location: ee.Tray,
            rollup: t,
            eUIMode: 7,
            requestorName: "",
          });
        },
        4: function (e) {
          const { rollup: t } = e,
            i = (0, n.M)(),
            a = (0, Ee.bY)(),
            s = G(t.item, i, a),
            o = `${ie.De.COMMUNITY_BASE_URL}profiles/${i}/inventory`;
          return r.createElement(Be, {
            icon: r.createElement(re.M3$, null),
            fallbackLogo: r.createElement(re.ui7, null),
            onActivate: () => it(() => window.location.assign(o), t.item),
            location: ee.Tray,
            eUIMode: 7,
            rollup: t,
            itemState: s,
          });
        },
        2: function (e) {
          const { rollup: t } = e,
            i = (0, n.M)(),
            a = `${ie.De.COMMUNITY_BASE_URL}profiles/${i}/inventory/#pending_gifts`;
          return r.createElement(be, {
            icon: r.createElement(re.M3$, null),
            onActivate: () => it(() => window.location.assign(a), t.item),
            location: ee.Tray,
            eUIMode: 7,
            rollup: t,
            senderName: "",
          });
        },
        9: function (e) {
          var t;
          const { rollup: i } = e,
            a = (0, n.M)(),
            s =
              (J(null === (t = i.item) || void 0 === t ? void 0 : t.body_data),
              `${ie.De.COMMUNITY_BASE_URL}profiles/${a}/tradeoffers`);
          return r.createElement(ye, {
            logo: r.createElement(re.ui7, null),
            icon: r.createElement(re.hoX, null),
            onActivate: () => it(() => window.location.assign(s), i.item),
            location: ee.Tray,
            eUIMode: 7,
            rollup: i,
            displayName: "",
          });
        },
        12: function (e) {
          const { rollup: t } = e,
            i = `${ie.De.COMMUNITY_BASE_URL}my/gamenotifications/`,
            n = (0, r.useMemo)(() => $(t.item.body_data), [t.item.body_data]),
            [a, s] = (0, te.vs)(n.appid, { include_assets: !0 });
          return r.createElement(he, {
            icon: r.createElement(re.hLd, null),
            fallbackLogo: r.createElement(re.M3$, null),
            onActivate: () => it(() => window.location.assign(i), t.item),
            location: ee.Tray,
            rollup: t,
            eUIMode: 7,
            app: a,
          });
        },
      };
      function at(e) {
        switch (e) {
          case 10:
            return r.createElement(re.ui7, null);
          case 11:
            return r.createElement(re.WWB, null);
          default:
            return r.createElement(re.kIV, null);
        }
      }
      function st(e) {
        var t;
        const { rollup: i } = e,
          n =
            null === (t = Q[i.item.notification_type]) || void 0 === t
              ? void 0
              : t.fnGet(i.item.body_data),
          a = "number" == typeof (null == n ? void 0 : n.image),
          [s, o] = (0, te.vs)(a ? n.image : 0, { include_assets: !0 });
        return r.createElement(ge, {
          icon: at(i.item.notification_type),
          title: "",
          onActivate: () => it(() => window.location.assign(n.link), i.item),
          fallbackLogo: r.createElement(re.ui7, null),
          location: ee.Tray,
          rollup: i,
          eUIMode: 7,
          app: s,
        });
      }
      function ot() {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(lt, null),
          r.createElement(ct, null),
          r.createElement(ut, null),
          r.createElement(dt, null)
        );
      }
      function lt() {
        const e = Ye();
        return r.createElement(de, {
          count: null == e ? void 0 : e.comments,
          icon: r.createElement(re.xg, { className: Pe().CommentIcon }),
          eUIMode: 7,
          onActivate: () => Je.SetFilter(3, !0, !0),
          strLocToken: "#Notification_NewCommentPinned_Body",
          bAlwaysShow: !0,
        });
      }
      function ct() {
        const e = Ye();
        return r.createElement(de, {
          count: null == e ? void 0 : e.gifts,
          icon: r.createElement(re.M3$, null),
          eUIMode: 7,
          onActivate: () => Je.SetFilter(2, !0, !0),
          strLocToken: "#Notification_NewGiftsPinned_Body",
          bAlwaysShow: !0,
        });
      }
      function ut() {
        const e = Ye();
        return r.createElement(de, {
          count: null == e ? void 0 : e.inventory_items,
          icon: r.createElement(re.daM, null),
          eUIMode: 7,
          onActivate: () => Je.SetFilter(4, !0, !0),
          strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
          bAlwaysShow: !0,
        });
      }
      function dt() {
        const e = Ye();
        return r.createElement(de, {
          count: null == e ? void 0 : e.inventory_items,
          icon: r.createElement(re.yBp, null),
          eUIMode: 7,
          onActivate: () => Je.SetFilter(5, !0, !0),
          strLocToken: "#Notification_FriendInvitePinned_Body",
          bAlwaysShow: !0,
        });
      }
      function mt(e) {
        let t = e.location.hash;
        return (
          t && t.startsWith("#") && (t = t.slice(1)),
          r.createElement(Ke, { hash: t })
        );
      }
    },
  },
]);

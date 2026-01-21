/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1726],
  {
    81315: (e) => {
      e.exports = {
        LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
        EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
        LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
        LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
        TopLeft: "Clgi---P85XXv25yLZwB0",
        Top: "_2Z9VyBAzofV3JvK__dECbX",
        TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
        Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
        Middle: "_1HecozzoSZfUZSci9dLkxN",
        LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
        LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
        Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
        BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
        Bottom: "sIHlK9sN2255-irERXD_V",
        BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
        topleft: "_3W096h6Ka6U7sOZVa9lXQo",
        top: "_1iRW1Msfh60zHqD-xe4EAk",
        topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
        left: "_2iBrmAEyXuaKAeZ-g-4CPF",
        right: "_15t6A4l27DY4KRL1aAUTTS",
        bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
        bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
        bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
        middle: "_1CS75ZrrDXna6xatw5ZvPR",
        LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
        DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
        LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
        LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
      };
    },
    50666: (e) => {
      e.exports = {
        CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
        CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
        CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
      };
    },
    79821: (e, t, a) => {
      "use strict";
      a.d(t, { Kl: () => n, Yj: () => l, iH: () => i, zV: () => c });
      const n = [
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "emoticon",
          "dynamiclink",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "*",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
          "video",
          "vod",
          "youtubeorvideo",
          "giveawayeligible",
          "claimitem",
          "packagepurchaseable",
          "actiondialog",
          "uploadfilebutton",
          "docimg",
          "meetsteamsessiongroup",
          "meetsteamscheduleview",
          "center",
          "c",
          "expand",
          "remindme",
          "calendarevent",
          "color",
          "bgcolor",
          "userpolls",
        ],
        i = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        s = [
          "img",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ];
      n.filter((e) => !s.includes(e));
      let r;
      function o(e) {
        return e
          ? e.map((e) => ("*" == e ? "\\*" : e)).join("|")
          : (r || (r = o(n)), r);
      }
      function l(e, t = null, a = " ") {
        const n = new RegExp(
          "\\[(" + o(t) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
          "gi",
        );
        return e.replace(n, a);
      }
      function c(e, t = null, a = "") {
        const n = "\\[\\/?(?:" + o(t) + "){1,}.*?]";
        return e.replace(new RegExp(n, "gi"), a);
      }
    },
    3577: (e, t, a) => {
      "use strict";
      function n() {
        let e, t;
        return {
          promise: new Promise((a, n) => {
            (e = a), (t = n);
          }),
          resolve: e,
          reject: t,
        };
      }
      a.d(t, { x0: () => n });
    },
    12611: (e, t, a) => {
      "use strict";
      a.d(t, { eg: () => i, lw: () => n, qR: () => s });
      const n = "{STEAM_CLAN_IMAGE}",
        i = "{STEAM_CLAN_LOC_IMAGE}",
        s = "{STEAM_APP_IMAGE}";
    },
    73744: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ek: () => d,
        Fj: () => c,
        Ho: () => l,
        Kf: () => s,
        N_: () => _,
        XY: () => h,
        dM: () => i,
        qj: () => n,
        s4: () => u,
        vz: () => p,
        yu: () => m,
      });
      function n(e) {
        return Array.isArray(e) ? e[0] : e;
      }
      function i(e) {
        const t = Array.isArray(e) ? e : [e];
        return Math.min(...t);
      }
      function s(e, t) {
        return void 0 === t ? n(e) : Array.isArray(e) ? e[t] : e;
      }
      const r = [1, 3, 2],
        o = [1, 3],
        l = [5, 4],
        c = {
          capsule: { width: 800, height: 450, rgAcceptableTypes: o },
          marketingmessage_art_2_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: o,
          },
          marketingmessage_art_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: o,
          },
          spotlight: { width: 2108, height: 460, rgAcceptableTypes: o },
          localized_store_app_spotlight: {
            width: 1200,
            height: 260,
            rgAcceptableTypes: o,
          },
          localized_store_app_spotlight_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: o,
          },
          localized_title_image: {
            width: 1920,
            height: 622,
            rgAcceptableTypes: o,
          },
          background: { width: 1920, height: 622, rgAcceptableTypes: o },
          hero: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: o,
          },
          email_full: { width: 800, height: 300, rgAcceptableTypes: o },
          email_centered: { width: 644, height: 300, rgAcceptableTypes: o },
          broadcast_left: {
            width: [199, 155],
            height: [433, 337],
            rgAcceptableTypes: o,
          },
          broadcast_right: {
            width: [199, 155],
            height: [433, 337],
            rgAcceptableTypes: o,
          },
          sale_header: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: r,
          },
          sale_overlay: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: r,
          },
          localized_image_group: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: o,
          },
          localized_background_art: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: o,
          },
          sale_section_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: r,
          },
          sale_section_title: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: r,
          },
          link_capsule: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: o,
          },
          product_banner: {
            width: [1200, 1100],
            height: [175, 160],
            rgAcceptableTypes: o,
          },
          product_mobile_banner: {
            width: 500,
            height: 160,
            rgAcceptableTypes: o,
          },
          product_banner_override: {
            width: [1200, 1100],
            height: [175, 160],
            rgAcceptableTypes: o,
          },
          product_mobile_banner_override: {
            width: 500,
            height: 160,
            rgAcceptableTypes: o,
          },
          schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: o },
          tab_bar_background: {
            width: 1500,
            height: 100,
            rgAcceptableTypes: o,
          },
          sale_logo: {
            width: [1200, 940],
            height: [460, 460],
            rgAcceptableTypes: o,
          },
          bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: r },
          bestofyear_banner_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: r,
          },
          localized_marketing_message: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [1, 3, 2, 10],
          },
          localized_optin_banner: {
            width: 1e3,
            height: 150,
            rgAcceptableTypes: o,
          },
          localized_marketingmessage_webm: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [5],
          },
          localized_marketingmessage_mp4: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [4],
          },
          localized_partnerevent_webm: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [5],
          },
          localized_partnerevent_mp4: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [4],
          },
          localized_subtitles: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [6, 7],
          },
          localized_marketingmessage_poster: {
            width: 528,
            height: 297,
            rgAcceptableTypes: [1, 3],
          },
          localized_marketingmessage_background: {
            width: 570,
            height: 600,
            rgAcceptableTypes: o,
          },
          localized_email_image: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: o,
          },
          template_asset: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [1, 3, 2, 10, 5, 4],
          },
          user_poll_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: o,
          },
          spotlight_art: {
            width: [306, 374],
            height: [260, 448],
            rgAcceptableTypes: r,
          },
          old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: r },
          marketingmessage_art: {
            width: 570,
            height: 600,
            rgAcceptableTypes: r,
          },
          marketingmessage_art_2: {
            width: 570,
            height: 600,
            rgAcceptableTypes: r,
          },
          takeover_art: { width: 1850, height: 450, rgAcceptableTypes: r },
          takeover_webm_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [4],
          },
          takeover_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: r,
          },
          takeover_webm_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [5],
          },
          takeover_mp4_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [4],
          },
          takeunder_art: { width: 940, height: 150, rgAcceptableTypes: r },
          takeunder_mobile_art: {
            width: 500,
            height: 160,
            rgAcceptableTypes: r,
          },
          app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: o },
          app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: o },
        };
      function d(e, t, a, n) {
        let i = null;
        if (Array.isArray(a)) {
          if (
            ((i = a
              .map((t, a) => (e === t ? a : void 0))
              .filter((e) => void 0 !== e)),
            i.length <= 0)
          )
            return !1;
        } else if (e !== a) return !1;
        if (Array.isArray(n)) {
          const e = n
            .map((e, a) => (t === e ? a : void 0))
            .filter((e) => void 0 !== e);
          if (e.length <= 0) return !1;
          if (i?.length && !e.some((e) => i.includes(e))) return !1;
        } else if (t !== n) return !1;
        return !0;
      }
      function m(e, t, a, n) {
        const i = c[a];
        return (
          !!i &&
          (i.bDisableEnforceDimensions ? !!n : d(e, t, i.width, i.height))
        );
      }
      function u(e, t, a) {
        const n = c[a];
        if (!n) return !1;
        if (n.bDisableEnforceDimensions) return !0;
        if (Array.isArray(n.width)) {
          if (n.width.filter((t) => e < t).length == n.width.length) return !1;
        } else if (e < n.width) return !1;
        if (Array.isArray(n.height)) {
          if (n.height.filter((e) => t < e).length == n.height.length)
            return !1;
        } else if (t < n.height) return !1;
        return !0;
      }
      function h(e) {
        const t = c[e];
        return (
          t.rgAcceptableTypes.includes(6) || t.rgAcceptableTypes.includes(7)
        );
      }
      function p(e, t) {
        return t.filter((t) => _(e, t));
      }
      function _(e, t) {
        return c[t].rgAcceptableTypes.includes(e);
      }
    },
    89128: (e, t, a) => {
      "use strict";
      a.d(t, {
        FZ: () => _e,
        A4: () => D,
        iy: () => G,
        ZA: () => H,
        Dn: () => M,
        CU: () => se,
        Ay: () => ie,
        ye: () => ne,
        Fo: () => oe,
        G$: () => le,
        Xx: () => z,
        DJ: () => ue,
        G6: () => ce,
        zv: () => N,
        IS: () => Q,
        GE: () => q,
        yX: () => Y,
        w: () => de,
        EE: () => $,
        Zf: () => X,
        jR: () => K,
        Ac: () => ge,
        lh: () => fe,
        Hc: () => me,
        mz: () => te,
        qQ: () => J,
        MW: () => ee,
        W2: () => Z,
        Pm: () => re,
        qR: () => ae,
        _B: () => V,
        j3: () => Ie,
        Yw: () => W,
        zK: () => k,
        DU: () => L,
        yT: () => O,
        mW: () => U,
        wv: () => F,
        Ro: () => R,
        GU: () => P,
        bv: () => B,
        Kd: () => j,
        cB: () => he,
      });
      var n = a(34629),
        i = a(79821),
        s = a(2160),
        r = a(14947);
      const o = {
        bBroadcastEnabled: !1,
        broadcastChatSetting: "hide",
        default_broadcast_title: "#Broadcast_default_title_dev",
        localized_broadcast_title: new Array(31),
        localized_broadcast_left_image: new Array(31),
        localized_broadcast_right_image: new Array(31),
        broadcast_whitelist: [],
      };
      var l = a(17720),
        c = a(27666),
        d = a(86355),
        m = a(68359),
        u = a(4796),
        h = a(8092),
        p = a(44165),
        _ = a(16021),
        g = a(81393),
        v = a(61859),
        y = a(25489),
        f = a(27543),
        I = (a(41735), a(90626), a(68797), a(78327));
      var E = a(41338),
        b = a(14771),
        w = a(6419);
      (0, n.Cg)(
        [w.o],
        class {
          m_eventModel;
          m_entry;
          constructor(e, t) {
            (this.m_eventModel = e), (this.m_entry = t);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }.prototype,
        "GetEventStartTime",
        null,
      );
      var S = a(61336);
      const A = 99999;
      const T = [13, 14, 17, 18, 19, 22, 23, 24, 35, 25, 26, 28, 15, 32, 10];
      function G(e) {
        return (
          T.some((t) => t == e.GetEventType()) &&
          !e.BHasTag("steam_award_nomination_request") &&
          !e.BHasTag("curator")
        );
      }
      const C = [20, 31, 34];
      function D(e) {
        return !C.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      new Set([9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35]);
      const L = 593110,
        k = [L, 766, 221410],
        P = 39049601,
        B = 41316928,
        R = 4397053,
        j = 4,
        U = 20,
        F = 45559995,
        O = 45902273,
        x = [12, 34];
      function H(e) {
        return !x.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      function M(e) {
        const t = 60 * b.Kp.PerDay;
        return (
          e.BIsVisibleEvent() &&
          e.BIsOGGEvent() &&
          (e.rtime32_last_modified ?? 0) > p.HD.GetTimeNowWithOverride() - t &&
          !z(e)
        );
      }
      function z(e) {
        return e.BHasTag("mod_reviewed") && !e.BHasTag("mod_require_rereview");
      }
      var N;
      function V(e) {
        switch (e) {
          case "links":
          case "itemdef":
            return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
          case "contenthubspecials":
            return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
          default:
            return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
        }
      }
      !(function (e) {
        (e[(e.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (e[(e.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (e[(e.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (e[(e.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted");
      })(N || (N = {}));
      const W = "bordered";
      var $, q, Y, Q, X, K;
      function Z(e) {
        return e && !!e.show_as_carousel && !e.enable_faceted_browsing;
      }
      function J(e) {
        return e.carousel_rows || 1;
      }
      function ee(e) {
        return e.cap_item_count || 0;
      }
      function te(e) {
        return e.cap_section_row_count && e.cap_section_row_count > 0
          ? e.cap_section_row_count
          : "trailercarousel" == e.section_type
            ? 1
            : e.cap_section_content
              ? 4
              : 0;
      }
      function ae(e) {
        return Boolean(e?.store_filter)
          ? JSON.stringify(e.store_filter)
          : void 0;
      }
      function ne(e) {
        switch (e) {
          case "items":
          case "trailercarousel":
          case "crosspromotesalepage":
          case "creator_list":
          case "calendar":
            return !0;
        }
        return !1;
      }
      function ie(e) {
        switch (e) {
          case "items":
          case "crosspromotesalepage":
          case "creator_list":
            return !0;
        }
        return !1;
      }
      function se(e, t = !1) {
        return (
          !(
            !e ||
            !(function (e) {
              switch (e) {
                case "items":
                case "trailercarousel":
                case "crosspromotesalepage":
                case "creator_list":
                case "calendar":
                case "events":
                case "sale_events":
                case "contenthubspecials":
                  return !0;
              }
              return !1;
            })(e.section_type)
          ) &&
          (t
            ? !!e.sale_tag_filter?.clauses?.length || !!e.smart_section
            : !!e.smart_section && null != e.smart_section_type)
        );
      }
      function re(e) {
        return se(e) ? e?.smart_section_type : void 0;
      }
      function oe(e, t) {
        if (!e.BIsNextFest() || ne(t.section_type) || se(t)) return !1;
        return (
          ((e.jsondata.sale_ml_recommender_delay_hours &&
            (e.startTime ?? 0) +
              e.jsondata.sale_ml_recommender_delay_hours * b.Kp.PerHour -
              new Date().getTime() / 1e3) ??
            0) > 0
        );
      }
      function le(e, t) {
        return !!t.use_random_order || !!oe(e, t);
      }
      !(function (e) {
        (e[(e.k_EStoreFilterClauseTypeOr = 0)] = "k_EStoreFilterClauseTypeOr"),
          (e[(e.k_EStoreFilterClauseTypeAnd = 1)] =
            "k_EStoreFilterClauseTypeAnd"),
          (e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
            "k_EStoreFilterClauseTypeStoreTag"),
          (e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
            "k_EStoreFilterClauseTypeFeatureTag"),
          (e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
            "k_EStoreFilterClauseTypeLanguage"),
          (e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
            "k_EStoreFilterClauseTypeContentDescriptor"),
          (e[(e.k_EStoreFilterClauseTypePrice = 6)] =
            "k_EStoreFilterClauseTypePrice"),
          (e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
            "k_EStoreFilterClauseTypeAppType");
      })($ || ($ = {})),
        (function (e) {
          (e[(e.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (e[(e.k_ELanguage = 1)] = "k_ELanguage"),
            (e[(e.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (e[(e.k_EUserPreference = 3)] = "k_EUserPreference"),
            (e[(e.k_EPrice = 4)] = "k_EPrice"),
            (e[(e.k_EAppType = 5)] = "k_EAppType");
        })(q || (q = {})),
        (function (e) {
          (e[(e.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (e[(e.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (e[(e.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems");
        })(Y || (Y = {})),
        (function (e) {
          (e[(e.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (e[(e.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (e[(e.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually");
        })(Q || (Q = {})),
        (function (e) {
          (e.Steam = "Steam"),
            (e.Facebook = "Facebook"),
            (e.Twitter = "Twitter"),
            (e.Reddit = "Reddit");
        })(X || (X = {})),
        (function (e) {
          (e.Summary = "summary"),
            (e.SummaryLargeImage = "summary_large_image");
        })(K || (K = {}));
      const ce = {
        capsules: [],
        events: [],
        links: [],
        localized_label: new Array(31),
        localized_label_image: new Array(31),
        default_label: "#Sale_default_label",
        section_type: "unselected_empty",
      };
      var de;
      function me(e) {
        return {
          arrowFill: e?.sale_carousel_arrow_color,
          arrowStyle: e?.sale_carousel_arrow_style,
          breadcrumbActiveColor: e?.sale_carousel_active_breadcrumb_color,
          breadcrumbColor: e?.sale_carousel_breadcrumb_color,
          breadcrumbStyle: e?.sale_carousel_breadcrumb_style,
        };
      }
      !(function (e) {
        (e[(e.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (e[(e.k_EContentHub = 1)] = "k_EContentHub");
      })(de || (de = {}));
      const ue = {
          localized_subtitle: new Array(31),
          localized_summary: new Array(31),
          localized_title_image: new Array(31),
          localized_capsule_image: new Array(31),
          bSaleEnabled: !1,
          sale_show_creator: !1,
          sale_sections: [],
          sale_browsemore_text: "",
          sale_browsemore_url: "",
          sale_browsemore_color: "",
          sale_browsemore_bgcolor: "",
          localized_sale_header: new Array(31),
          localized_sale_overlay: new Array(31),
          localized_sale_product_banner: new Array(31),
          localized_sale_product_mobile_banner: new Array(31),
          localized_sale_logo: new Array(31),
          sale_font: "",
          sale_background_color: "",
          sale_header_offset: 530,
          referenced_appids: [],
          ...o,
          bScheduleEnabled: !1,
          scheduleEntries: [],
        },
        he = "old_announce_",
        pe = [
          "workshop",
          "patchnotes",
          "contenthub",
          "skip_megaphone",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
          "enable_steam_china",
          "disable_steam_global",
          "adult_only_content",
          "stablechannel",
          "betachannel",
          "previewchannel",
        ],
        _e = [
          "steam_blog_featured",
          "workshop",
          "steam_blog",
          "blog",
          "audience_followers",
          "steamvr",
          "patchnotes",
          "steam_library_beta",
          "hide_library_overview",
          "mod_hide_library_overview",
          "hide_library_detail",
          "mod_hide_library_detail",
          "hide_store",
          "mod_hide_store",
          "halloween2019candidate",
          "halloween2019",
          "halloween2019reviewed",
          "horror",
          "cute",
          "halloween",
          "mod_reviewed",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "curator",
          "curator_group_members",
          "curator_public",
          "mod_require_rereview",
          "auto_rssfeed",
          "auto_migrated",
          "enable_steam_china",
          "disable_steam_global",
          "skip_megaphone",
          "seasonal_sale_featuring",
          "show_library_demo_detail",
          "clear_library_demo_detail",
          "repost_source_possible",
          "autocreate_promotools",
          "vo_marketing_message",
        ],
        ge = [
          "patchnotes",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "mod_hide_library_overview",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "halloween",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
        ],
        ve = [20, 31, 34],
        ye = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35];
      class fe {
        constructor() {
          (0, r.Gn)(this);
        }
        GID = void 0;
        AnnouncementGID = void 0;
        clanSteamID = new l.b();
        forumTopicGID = void 0;
        type = 1;
        appid = 0;
        name = new Map();
        description = new Map();
        timestamp_loc_updated = new Map();
        startTime = void 0;
        endTime = void 0;
        visibilityStartTime = void 0;
        visibilityEndTime = void 0;
        m_nBuildID = void 0;
        m_strBuildBranch = void 0;
        postTime = void 0;
        visibility_state = N.k_EEventStateUnpublished;
        broadcaster = void 0;
        jsondata = ue;
        nCommentCount = 0;
        nVotesUp = 0;
        nVotesDown = 0;
        comment_type;
        gidfeature;
        gidfeature2;
        featured_app_tagid;
        bOldAnnouncement = !1;
        announcementClanSteamID = void 0;
        loadedAllLanguages = !1;
        bLoaded = !1;
        deleteInProgress = !1;
        vecTags = new Array();
        creator_steamid;
        last_update_steamid = void 0;
        rtime32_last_modified = void 0;
        rtime32_last_solr_search_col_updated = void 0;
        rtime32_last_local_modification = void 0;
        rtime32_moderator_reviewed = void 0;
        video_preview_type = void 0;
        video_preview_id = void 0;
        has_live_stream;
        live_stream_viewer_count;
        m_overrideCurrentDay = void 0;
        BIsPartnerEvent() {
          return !this.bOldAnnouncement && Boolean(this.GID);
        }
        static FromJSON(e) {
          let t = new fe(),
            a = JSON.parse(e);
          return (
            Object.assign(t, a),
            (t.name = new Map(a.name)),
            (t.description = new Map(a.description)),
            (t.vecTags = new Array(a.vecTags)),
            (t.clanSteamID = new l.b(a.clanSteamID)),
            (0, g.wT)(
              t.clanSteamID && t.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " + t.clanSteamID.ConvertTo64BitString(),
            ),
            a.broadcaster &&
              ((t.broadcaster = new l.b(a.broadcaster)),
              (0, g.wT)(
                t.broadcaster && t.broadcaster.BIsValid(),
                "Invalid Broadcast SteamID: " +
                  t.broadcaster.ConvertTo64BitString(),
              )),
            t
          );
        }
        toJSON(e) {
          let t = new Object();
          return (
            Object.assign(t, this),
            (t.name = Array.from(this.name)),
            (t.description = Array.from(this.description)),
            (t.tags = Array.from(this.vecTags)),
            (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
            this.broadcaster &&
              (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
            t
          );
        }
        clone(e = !1) {
          let t = new fe();
          if (
            ((t.GID = this.GID),
            (t.AnnouncementGID = this.AnnouncementGID),
            (t.clanSteamID = this.clanSteamID),
            (t.bOldAnnouncement = this.bOldAnnouncement),
            (t.nCommentCount = this.nCommentCount),
            (t.nVotesUp = this.nVotesUp),
            (t.nVotesDown = this.nVotesDown),
            (t.forumTopicGID = this.forumTopicGID),
            (t.comment_type = this.comment_type),
            (t.gidfeature = this.gidfeature),
            (t.gidfeature2 = this.gidfeature2),
            (t.featured_app_tagid = this.featured_app_tagid),
            (t.creator_steamid = this.creator_steamid),
            (t.last_update_steamid = this.last_update_steamid),
            (t.rtime32_last_modified = this.rtime32_last_modified),
            (t.rtime32_last_solr_search_col_updated =
              this.rtime32_last_solr_search_col_updated),
            (t.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
            (t.type = this.type),
            (t.appid = this.appid),
            (t.name = new Map()),
            this.name.forEach((e, a) => {
              t.name.set(a, e);
            }),
            (t.description = new Map()),
            this.description.forEach((e, a) => {
              t.description.set(a, e);
            }),
            (t.timestamp_loc_updated = new Map()),
            this.timestamp_loc_updated.forEach((e, a) => {
              t.timestamp_loc_updated.set(a, e);
            }),
            (t.startTime = this.startTime),
            (t.endTime = this.endTime),
            (t.visibilityStartTime = this.visibilityStartTime),
            (t.visibilityEndTime = this.visibilityEndTime),
            (t.postTime = this.postTime),
            (t.visibility_state = this.visibility_state),
            (t.loadedAllLanguages = this.loadedAllLanguages),
            (t.bLoaded = this.bLoaded),
            (t.broadcaster = this.broadcaster
              ? new l.b(this.broadcaster.ConvertTo64BitString())
              : void 0),
            (t.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
            (t.vecTags = new Array()),
            e
              ? ((t.m_nBuildID = this.m_nBuildID),
                (t.m_strBuildBranch = this.m_strBuildBranch),
                this.vecTags.forEach((e) => t.vecTags.push(e)))
              : this.vecTags.forEach((e) => {
                  pe.includes(e) && t.vecTags.push(e);
                }),
            t.jsondata.email_setting)
          ) {
            let e = 100;
            for (let a of t.jsondata.email_setting.sections)
              a.unique_id || ((a.unique_id = `email_section_${e}`), e++);
          }
          return t;
        }
        GetLastReferencedSaleDayFromCapsules(e, t) {
          let a = t;
          return (
            e?.forEach((e) => {
              void 0 !== e.visibility_index &&
                (a =
                  void 0 === a
                    ? e.visibility_index
                    : Math.max(a, e.visibility_index));
            }),
            a
          );
        }
        GetLastReferencedSaleDay() {
          let e;
          for (const t of this.GetSaleSections())
            if ("tabs" === t.section_type) {
              if ((t.tabs?.length ?? 0) > 0)
                for (const a of t.tabs ?? [])
                  e = this.GetLastReferencedSaleDayFromCapsules(a.capsules, e);
            } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
          return (
            (this.jsondata.sale_num_headers ?? 0) > 1 &&
              (null == e || e < (this.jsondata.sale_num_headers ?? 0)) &&
              (e = this.jsondata.sale_num_headers),
            e
          );
        }
        GetDayIndexFromEventStart() {
          let e = 0;
          const t = p.HD.GetTimeNowWithOverride();
          void 0 !== this.startTime &&
            t >= this.startTime &&
            (e = Math.floor((t - this.startTime) / 86400)),
            void 0 !== this.m_overrideCurrentDay &&
              this.m_overrideCurrentDay >= 0 &&
              (e = this.m_overrideCurrentDay);
          const a = this.GetLastReferencedSaleDay() || 0;
          return Math.min(e, a);
        }
        GetNameWithFallback(e) {
          const t = v.A0.GetELanguageFallback(e);
          return this.name.get(e) || this.name.get(t);
        }
        GetGameTitle(e) {
          return _.A.Get().GetApp(this.appid)?.GetName();
        }
        BInRealmGlobal() {
          return !this.BHasTag("disable_steam_global");
        }
        BInRealmChina() {
          return this.BHasTag("enable_steam_china");
        }
        BIsLanguageValidForRealms(e) {
          return (
            !(
              !this.BInRealmGlobal() ||
              !v.A0.IsELanguageValidInRealm(e, s.TU.k_ESteamRealmGlobal)
            ) ||
            !(
              !this.BInRealmChina() ||
              !v.A0.IsELanguageValidInRealm(e, s.TU.k_ESteamRealmChina)
            )
          );
        }
        GetImgArray(e) {
          let t = [];
          if (
            (("background" !== e && "localized_title_image" != e) ||
              (t = this.jsondata.localized_title_image),
            "capsule" === e)
          )
            t = this.jsondata.localized_capsule_image;
          else if ("spotlight" === e)
            t = this.jsondata.localized_spotlight_image;
          else if ("email_full" === e || "email_centered" === e)
            t = this.jsondata.email_setting
              ? this.jsondata.email_setting.sections[0].localized_image
              : [];
          else if ("broadcast_left" === e)
            t = this.jsondata.localized_broadcast_left_image;
          else if ("broadcast_right" === e)
            t = this.jsondata.localized_broadcast_right_image;
          else if ("sale_header" === e)
            if ((this.jsondata.sale_num_headers ?? 0) > 1) {
              const e = Math.min(
                (this.jsondata.sale_num_headers ?? 0) - 1,
                this.GetDayIndexFromEventStart(),
              );
              t = this.jsondata.localized_per_day_sales_header?.[e];
            } else t = this.jsondata.localized_sale_header;
          else
            "sale_logo" === e
              ? (t = this.jsondata.localized_sale_logo)
              : "sale_overlay" === e
                ? (t = this.jsondata.localized_sale_overlay)
                : d.pb.includes(e)
                  ? (t = m.R.GetAllLocalizedGroupImageHashAndExts())
                  : "product_banner" === e
                    ? (t = this.jsondata.localized_sale_product_banner)
                    : "product_mobile_banner" === e
                      ? (t = this.jsondata.localized_sale_product_mobile_banner)
                      : "bestofyear_banner" === e
                        ? (t = this.jsondata.localized_bestofyear_banner)
                        : "bestofyear_banner_mobile" === e
                          ? (t =
                              this.jsondata.localized_bestofyear_banner_mobile)
                          : "localized_store_app_spotlight" === e
                            ? (t = this.jsondata.localized_store_app_spotlight)
                            : "localized_store_app_spotlight_mobile" === e &&
                              (t =
                                this.jsondata
                                  .localized_store_app_spotlight_mobile);
          return t;
        }
        GetImageURL(e, t = 0, a = d.wI.full) {
          const n = this.GetImgArray(e),
            i = n && n.length > t && null != n[t];
          return i && n[t]?.startsWith("http")
            ? n[t]
            : i
              ? c.z.GenerateURLFromHashAndExt(this.clanSteamID, n[t] ?? "", a)
              : void 0;
        }
        GetImageHash(e, t = 0) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t]
            ? a[t].substr(0, a[t].length - 4)
            : null;
        }
        GetImageHashAndExt(e, t = 0) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t] ? a[t] : null;
        }
        BHasSomeImage(e) {
          let t = this.GetImgArray(e);
          return !!t && t.some((e) => null != e && e.length > 0);
        }
        BHasImage(e, t) {
          let a = this.GetImgArray(e);
          return !!a && a.length > t && null != a[t];
        }
        BHasAnnouncementGID() {
          return (
            null !== this.AnnouncementGID &&
            void 0 !== this.AnnouncementGID &&
            this.AnnouncementGID.length > 1
          );
        }
        GetAnnouncementGID() {
          return this.AnnouncementGID;
        }
        BHasForumTopicGID() {
          return (
            null !== this.forumTopicGID &&
            void 0 !== this.forumTopicGID &&
            this.forumTopicGID.length > 1
          );
        }
        GetForumTopicURL() {
          if (!this.BHasForumTopicGID()) return "";
          if (this.appid)
            return (
              I.TS.COMMUNITY_BASE_URL +
              "app/" +
              this.appid +
              "/eventcomments/" +
              this.forumTopicGID
            );
          {
            const e = u.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && e.vanity_url)
              return (
                I.TS.COMMUNITY_BASE_URL +
                "groups/" +
                e.vanity_url +
                "/eventcomments/" +
                this.forumTopicGID
              );
          }
          return (
            I.TS.COMMUNITY_BASE_URL +
            "gid/" +
            this.clanSteamID.ConvertTo64BitString() +
            "/eventcomments/" +
            this.forumTopicGID
          );
        }
        BIsEventInFuture() {
          return p.HD.GetTimeNowWithOverride() < (this.startTime ?? 0);
        }
        BHasEventEnded() {
          return (this.endTime ?? 0) < p.HD.GetTimeNowWithOverride();
        }
        UpdateVoteCount(e, t) {
          "up" == e
            ? (this.nVotesUp = (0, y.OQ)(
                this.nVotesUp + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ))
            : "down" == e &&
              (this.nVotesDown = (0, y.OQ)(
                this.nVotesDown + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ));
        }
        GetImageFromBeginningOfDescription(e, t) {
          let a = this.GetDescriptionWithFallback(e);
          if (a) {
            let e = a.indexOf("[img]");
            if (-1 !== e && e < t) {
              e += 5;
              let t = a.indexOf("[/img]", e);
              if (-1 != t) {
                let n = a.substring(e, t).trim();
                if (0 != n.length) return c.z.ReplacementTokenToClanImageURL(n);
              }
            }
          }
          return null;
        }
        GetAppIDOrReferenceAppID() {
          return this.appid
            ? this.appid
            : this.jsondata?.referenced_appids?.[0];
        }
        GetImageURLWithFallback(e, t, a = d.wI.full, n = !0) {
          const i = this.GetImageURL(e, t, a);
          if (i && i.trim().length > 0) return i;
          const s = v.A0.GetELanguageFallback(t);
          if (t != s) {
            const t = this.GetImageURL(e, s, a);
            if (t && t.trim().length > 0) return t;
          }
          const r = u.ac.GetClanInfoByClanAccountID(
            this.clanSteamID.GetAccountID(),
          );
          if ("capsule" == e) {
            let e = this.GetImageFromBeginningOfDescription(
              t,
              Number.MAX_VALUE,
            );
            if (e && (n || (0, S.ZF)(e))) return e;
            let a = this.appid;
            if (!a && r && ((r.is_creator_home && !r.is_ogg) || r.is_curator)) {
              if (!this.jsondata?.referenced_appids?.length)
                return r.avatar_full_url;
              a = this.jsondata.referenced_appids[0];
            }
            const i = _.A.Get().GetApp(a);
            return i && i.GetAssets()
              ? i.GetAssets()?.GetMainCapsuleURL()
              : r?.avatar_full_url
                ? r.avatar_full_url
                : I.TS.STORE_ICON_BASE_URL + a + "/header.jpg";
          }
          return "background" == e &&
            r &&
            ((r.is_creator_home && !r.is_ogg) || r.is_curator)
            ? r.creator_page_bg_url
            : this.GetFallbackArtworkScreenshot();
        }
        GetFallbackArtworkScreenshot() {
          if (this.appid) {
            _.A.Get().QueueAppRequest(this.appid, { include_screenshots: !0 });
            const e = _.A.Get().GetApp(this.appid);
            let t = Number(
                this.bOldAnnouncement
                  ? this.AnnouncementGID
                  : null == this.GID
                    ? 0
                    : this.GID,
              ),
              a = e?.GetScreenshots(e.BHasAgeSafeScreenshots());
            return a && a.length > 1 ? ((t %= a.length), a[t]) : "";
          }
          if (this.clanSteamID && 36 != this.GetEventType()) {
            const e = u.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && ((e.is_creator_home && !e.is_ogg) || e.is_curator))
              return e.avatar_full_url;
          }
          return "";
        }
        BImageNeedScreenshotFallback(e, t) {
          let a = this.GetImageURL(e, t);
          if (!a || 0 == a.length) {
            const n = v.A0.GetELanguageFallback(t);
            t != n && (a = this.GetImageURL(e, n));
          }
          return !a || 0 == a.length;
        }
        GetImageForSizeAsArrayWithFallback(e, t, a, n) {
          let i = new Array();
          if (!this.BImageNeedScreenshotFallback(e, t)) {
            const n = this.GetImageURLWithFallback(e, t, a);
            if ((n && i.push(n), a != d.wI.full)) {
              const a = this.GetImageURLWithFallback(e, t, d.wI.full);
              a && i.push(a);
            }
          }
          const s = this.GetFallbackArtworkScreenshot();
          return s && !n && i.push(s), i;
        }
        GetDescriptionWithFallback(e) {
          const t = v.A0.GetELanguageFallback(e);
          return this.description.get(e) || this.description.get(t);
        }
        BIsImageSafeForAllAges(e, t) {
          const a = u.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            ),
            n = v.A0.GetELanguageFallback(t);
          return (
            null != this.GetImageURL(e, t) ||
            (t != n && null != this.GetImageURL(e, n)) ||
            (this.appid &&
              _.A.Get().GetApp(this.appid)?.BHasAgeSafeScreenshots()) ||
            (!this.appid &&
              a &&
              ((a.is_creator_home && !a.is_ogg) || a.is_curator))
          );
        }
        BIsVisibleEvent() {
          let e = Math.floor(p.HD.GetTimeNowWithOverride());
          return (
            this.visibility_state == N.k_EEventStateUnlisted ||
            (this.visibility_state == N.k_EEventStateVisible &&
              e > (this.visibilityStartTime ?? 0) &&
              ((this.visibilityEndTime ?? 0) < 10 ||
                e < (this.visibilityEndTime ?? 0)))
          );
        }
        BIsStagedEvent() {
          return this.visibility_state == N.k_EEventStateStaged;
        }
        BIsUnlistedEvent() {
          return this.visibility_state == N.k_EEventStateUnlisted;
        }
        GetStartTimeAndDateUnixSeconds() {
          return this.startTime ?? 0;
        }
        GetEndTimeAndDateUnixSeconds() {
          return this.endTime ?? 0;
        }
        GetPostTimeAndDateUnixSeconds() {
          return this.postTime ?? 0;
        }
        GetVisibilityStartTimeAndDateUnixSeconds() {
          return this.visibilityStartTime ?? 0;
        }
        BIsEventActionEnabled() {
          return (
            !!this.jsondata.action_end_time &&
            (this.jsondata.action_end_time > p.HD.GetTimeNowWithOverride() ||
              (1575396e3 == this.jsondata.action_end_time &&
                1606845600 > p.HD.GetTimeNowWithOverride()))
          );
        }
        BHasSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return !1;
          let t = this.jsondata.localized_subtitle[e];
          return null != t && "" != t;
        }
        GetSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return "";
          let t = this.jsondata.localized_subtitle[e];
          return t || "";
        }
        GetSubTitleWithLanguageFallback(e) {
          return this.jsondata
            ? v.NT.GetWithFallback(this.jsondata.localized_subtitle, e)
            : "";
        }
        GetSubTitleWithSummaryFallback(e) {
          return (
            v.NT.GetWithFallback(this.jsondata?.localized_subtitle, e) ||
            fe.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
          );
        }
        GetSummaryWithFallback(e, t) {
          return (
            v.NT.GetWithFallback(this.jsondata?.localized_summary, e) ||
            fe.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
          );
        }
        GetSummary(e) {
          return v.NT.Get(this.jsondata?.localized_summary ?? [], e);
        }
        BHasSummary(e) {
          return Boolean(this.GetSummary(e));
        }
        static GenerateSummaryFromText(e, t) {
          return e && 0 != e.trim().length
            ? ((e = (0, i.Yj)(e, [
                "img",
                "h1",
                "h2",
                "h3",
                "spoiler",
                "table",
                "previewyoutube",
                "looping_media",
                "roomeffect",
                "sticker",
              ])),
              (e = (0, i.zV)(e, ["p"], " ")),
              (e = (0, i.zV)(e)),
              (e = (0, E.aX)(e)),
              (0, E.bC)(e, t || 180))
            : "";
        }
        BHasTag(e) {
          return -1 != this.vecTags.indexOf(e);
        }
        BHasTagStartingWith(e) {
          return this.vecTags.some((t) => t?.startsWith(e));
        }
        BIsOGGEvent() {
          return Boolean(this.appid) && this.appid > 0;
        }
        BShowLibrarySpotlight(e) {
          if (!e) return Boolean(this.jsondata.library_spotlight);
          if (!this.jsondata.library_spotlight) return !1;
          if (ve.includes(this.type)) return !1;
          const t = new Date().getTime() / 1e3;
          return (
            !(ye.includes(this.type) && this.endTime && t > this.endTime) &&
            !(this.startTime && t > this.startTime + 60 * b.Kp.PerDay)
          );
        }
        BShowLibrarySpotlightText() {
          return Boolean(this.jsondata.library_spotlight_text);
        }
        BHasBroadcastEnabled() {
          return !!this.jsondata.bBroadcastEnabled;
        }
        BEventCanShowBroadcastWidget(e) {
          if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
          const t = p.HD.GetTimeNowWithOverride(),
            a = this.endTime ? this.endTime : t + 3600;
          return (
            this.BHasBroadcastEnabled() &&
            !!this.jsondata.broadcast_whitelist &&
            this.jsondata.broadcast_whitelist.length > 0 &&
            (e || ((this.startTime ?? 0) - 600 <= t && t < a))
          );
        }
        BHasBroadcastForceBanner() {
          return !!this.jsondata.broadcast_force_banner;
        }
        BSaleShowBroadcastAtTopOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "broadcast" == e.section_type,
            )
          );
        }
        BSaleShowCuratorRecommendationAtBottomOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "curator_recommendation" == e.section_type,
            )
          );
        }
        GetBroadcastChatVisibility() {
          return this.jsondata.broadcastChatSetting || "hide";
        }
        GetBroadcastTitle(e) {
          return (
            v.NT.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
            (0, v.we)(
              this.jsondata.default_broadcast_title ??
                "#Broadcast_default_title_dev",
            )
          );
        }
        GetBroadcastWhitelist() {
          return this.jsondata.broadcast_whitelist ?? [];
        }
        GetBroadcastWhitelistAsSteamIDs() {
          return (
            this.jsondata.broadcast_whitelist?.map((e) =>
              l.b.InitFromAccountID(e).ConvertTo64BitString(),
            ) ?? []
          );
        }
        BIsBroadcastAccountIDWhiteListed(e) {
          return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
        }
        BHasSaleEnabled() {
          return !!this.jsondata.bSaleEnabled;
        }
        BHasSaleVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_vanity_id)
          );
        }
        GetSaleVanity() {
          return this.jsondata.sale_vanity_id ?? "";
        }
        BHasSaleUpdateLandingPageVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_update_landing_page_vanity_id)
          );
        }
        GetSaleUpdateLandingPageVanity() {
          return this.jsondata.sale_update_landing_page_vanity_id ?? "";
        }
        GetSaleURL() {
          if (!this.jsondata.bSaleEnabled) return null;
          if (this.jsondata.sale_update_landing_page_vanity_id)
            return (
              I.TS.STORE_BASE_URL +
              `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
            );
          if (!Boolean(this.jsondata.sale_vanity_id))
            return (
              I.TS.STORE_BASE_URL +
              "newshub/" +
              (this.appid
                ? "app/" + this.appid
                : "group/" + this.clanSteamID.GetAccountID()) +
              "/view/" +
              this.GID
            );
          if (this.BUsesContentHubForItemSource()) {
            const e = this.jsondata.source_content_hub;
            return e
              ? "string" == typeof e
                ? I.TS.STORE_BASE_URL + "category/" + e
                : "category" == e.type
                  ? I.TS.STORE_BASE_URL + "category/" + e.category
                  : "tags" == e.type
                    ? I.TS.STORE_BASE_URL +
                      "tags/" +
                      ((0, v.l4)() || "en") +
                      "/" +
                      e.tagid
                    : "freetoplay" == e.type
                      ? I.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                      : "earlyaccess" == e.type
                        ? I.TS.STORE_BASE_URL + "genre/Early%20Access/"
                        : I.TS.STORE_BASE_URL + e.type
              : I.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
          }
          if (!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath) {
            if (h.pF.BHasCreatorHomeLoaded(this.clanSteamID)) {
              const e = h.pF.GetCreatorHome(this.clanSteamID);
              return (
                e?.GetCreatorHomeURL("developer") +
                "sale/" +
                this.jsondata.sale_vanity_id
              );
            }
            return (
              I.TS.STORE_BASE_URL +
              "curator/" +
              this.clanSteamID.GetAccountID() +
              "/sale/" +
              this.jsondata.sale_vanity_id
            );
          }
          return I.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
        }
        BHasEmailEnabled() {
          return (
            !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
          );
        }
        GetSaleSections() {
          return this.jsondata.sale_sections ?? [];
        }
        GenerateDynamicSaleSections(e, t, a, n) {
          const i = [],
            s = {
              section_type: "unselected_empty",
              capsules: [],
              events: [],
              links: [],
              localized_label: [],
              default_label: "",
            };
          let r = 100009;
          return (
            e &&
              i.push({
                ...s,
                section_type: "footer_self_creator_home",
                unique_id: r++,
                curator_clan_id: this.clanSteamID.GetAccountID(),
              }),
            t &&
              i.push({
                ...s,
                section_type: "footer_browse_more",
                unique_id: r++,
              }),
            n &&
              i.push(this.GenerateDynamicCreatorHomeItemBrowserSection(r++, s)),
            a &&
              i.push({
                ...s,
                section_type: "footer_default_social_share",
                unique_id: r++,
              }),
            i
          );
        }
        GetSaleSectionIncludingFooterSections() {
          const e = this.jsondata?.sale_show_creator,
            t = this.jsondata.sale_browse_more_button,
            a =
              0 == this.GetSaleSectionsByType("social_share").length &&
              !this.jsondata.sale_default_social_media_disabled,
            n = 36 == this.GetEventType();
          return e || t || a || n
            ? [
                ...this.GetSaleSections(),
                ...this.GenerateDynamicSaleSections(!!e, !!t, a, n),
              ]
            : this.GetSaleSections();
        }
        GetSaleSectionByID(e) {
          if (e > A) {
            return this.GenerateDynamicSaleSections(!0, !0, !0, !0).find(
              (t) => t.unique_id == e,
            );
          }
          return this.jsondata.sale_sections?.find((t) => t.unique_id == e);
        }
        GetSaleSectionCount() {
          return this.jsondata.sale_sections?.length ?? 0;
        }
        GetSaleSectionsByType(e) {
          return (
            this.jsondata.sale_sections?.filter((t) => t.section_type == e) ??
            []
          );
        }
        GetLastUpdateTime() {
          return this.rtime32_last_modified ?? 0;
        }
        GetLastUpdaterSteamIDStr() {
          return this.last_update_steamid ?? "";
        }
        GetSaleSectionFirstMatchByType(e) {
          const t = this.jsondata.sale_sections?.length ?? 0;
          if (0 != t)
            for (let a = 0; a < t; ++a)
              if (this.jsondata.sale_sections[a].section_type === e)
                return this.jsondata.sale_sections[a];
        }
        static AccumulateCapsuleListIDs(e, t, a, n) {
          e &&
            e.forEach((e) => {
              if (e) {
                e.type && t.has(e.type) && ((n && !n(e.id)) || a.add(e.id));
              }
            });
        }
        GetSaleItemOfType(e, t) {
          if (!this.jsondata.sale_sections) return new Set();
          const a = new Set(e),
            n = new Set();
          if (
            ((0, g.wT)(
              !this.jsondata.bOptimizedForSize,
              "Cannot find all items in optimized json",
            ),
            this.jsondata.bOptimizedForSize && "dev" == I.TS.WEB_UNIVERSE)
          )
            throw new Error(
              "GetSaleOfItemType called on a truncated jsondata.",
            );
          return (
            this.jsondata.tagged_items?.forEach((e) => {
              fe.AccumulateCapsuleListIDs([e.capsule], a, n, t);
            }),
            this.jsondata.sale_sections.forEach((e) => {
              if (ne(e.section_type))
                fe.AccumulateCapsuleListIDs(e.capsules, a, n, t);
              else if ("tabs" === e.section_type && e.tabs)
                for (const i of e.tabs)
                  fe.AccumulateCapsuleListIDs(i.capsules, a, n, t);
            }),
            n
          );
        }
        GetSaleItemCountOfType(e, t) {
          return this.GetSaleItemOfType(e, t).size;
        }
        GetSaleFeaturedAppsCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemosCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundlesCount(e) {
          return this.GetSaleItemCountOfType(["bundle"], e);
        }
        GetSaleFeaturedPackagesCount(e) {
          return this.GetSaleItemCountOfType(["sub"], e);
        }
        GetSaleFeaturedApps(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemos(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundles(e) {
          return this.GetSaleItemOfType(["bundle"], e);
        }
        GetSaleFeaturedPackages(e) {
          return this.GetSaleItemOfType(["sub"], e);
        }
        GetTaggedItems() {
          return this.jsondata.tagged_items || [];
        }
        BHasScheduleEnabled() {
          return this.jsondata.bScheduleEnabled;
        }
        GetEventType() {
          return this.type;
        }
        GetEventTypeAsString() {
          return (0, f.rG)(this.type);
        }
        GetCategoryAsString(e) {
          return this.BHasTag("steam_award_nomination_request")
            ? (0, v.we)("#PartnerEvent_SteamAwardNominations")
            : this.BHasTag("steam_award_vote_request")
              ? (0, v.we)("#PartnerEvent_SteamAwardVoteRequest")
              : this.BHasTag("steam_game_festival_artist_statement")
                ? (0, v.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                : this.BHasTag("steam_game_festival_office_hour")
                  ? (0, v.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                  : this.BHasTag("steam_game_festival_broadcast") ||
                      (this.BHasTagStartingWith("sale_nextfest_") &&
                        11 == this.type)
                    ? (0, v.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                    : this.BHasTag("vo_marketing_message") && e
                      ? (0, v.we)("#PartnerEvent_MM_MajorUpdate")
                      : this.GetEventTypeAsString();
        }
        GetAllTags() {
          return this.vecTags;
        }
        BMatchesAllTags(e) {
          let t = !0;
          return (
            e?.forEach((e) => {
              this.vecTags.includes(e) || (t = !1);
            }),
            t
          );
        }
        BAllowedSteamStoreSpotlight() {
          return Boolean(this.jsondata.store_spotlight);
        }
        BHasLibaryHomeSpotlight() {
          return Boolean(this.jsondata.library_home_spotlight);
        }
        BHasSaleProductBanners() {
          return (
            !!this.jsondata.bSaleEnabled &&
            (this.BHasSomeImage("product_banner") ||
              this.BHasSomeImage("product_banner_override"))
          );
        }
        GetSteamAwardCategory() {
          return this.jsondata.steam_award_category_suggestion ?? 0;
        }
        GetSteamAwardNomineeCategories() {
          return this.jsondata.steam_award_category_voteids ?? [];
        }
        BIsLockedToGameOwners() {
          return Boolean(
            this.jsondata.ownership_requirement_info?.bLockedToAppOwners,
          );
        }
        GetRequiredAppIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
            : [];
        }
        GetRequiredPackageIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
            : [];
        }
        BUseSubscriptionLayout() {
          return !!this.jsondata.sale_use_subscription_layout;
        }
        BIsLockedToPartnerAppRights() {
          return Boolean(
            this.jsondata.app_right_requirement_info?.bLockedToPartnerAppRights,
          );
        }
        GetRequiredPartnerAppRights() {
          return this.jsondata.app_right_requirement_info;
        }
        GetValveAccessLog() {
          return Array.isArray(this.jsondata.valve_access_log)
            ? this.jsondata.valve_access_log
            : [];
        }
        BUsesContentHubForItemSource() {
          return (
            this.jsondata.item_source_type === de.k_EContentHub &&
            Boolean(this.jsondata.source_content_hub)
          );
        }
        GetContentHubType() {
          return this.BUsesContentHubForItemSource()
            ? null == this.jsondata.source_content_hub
              ? "games"
              : "string" == typeof this.jsondata.source_content_hub
                ? "category"
                : this.jsondata.source_content_hub.type
            : void 0;
        }
        GetContentHubCategory() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? this.jsondata.source_content_hub
              : this.jsondata.source_content_hub.category;
        }
        GetContentHubTag() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? 0
              : this.jsondata.source_content_hub.tagid;
        }
        GetContentHub() {
          return "string" == typeof this.jsondata.source_content_hub
            ? { type: "category", category: this.jsondata.source_content_hub }
            : this.jsondata.source_content_hub;
        }
        BContentHubDiscountedOnly() {
          return !!this.jsondata.content_hub_discounted_only;
        }
        BIsBackgroundImageGroupingEnabled() {
          return !!this.jsondata.sale_background_img_groups?.enabled;
        }
        GetSalePageGroupDefinition() {
          return this.jsondata.sale_background_img_groups;
        }
        GetSalePageBackgroundImageGroupCount() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
            : 0;
        }
        GetAllSalePageGroups() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups
            : [];
        }
        GetSalePageBackgroundGroup(e) {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups?.[e]
            : void 0;
        }
        GetIncludedRealmList() {
          const e = new Array();
          return (
            this.BInRealmGlobal() && e.push(s.TU.k_ESteamRealmGlobal),
            this.BInRealmChina() && e.push(s.TU.k_ESteamRealmChina),
            (0, g.wT)(
              e.length > 0,
              `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
            ),
            e
          );
        }
        BIsValidForRealm(e) {
          return this.GetIncludedRealmList().includes(e);
        }
        BIsNextFest() {
          const e = this.jsondata.sale_vanity_id;
          return (
            new l.b(this.clanSteamID).GetAccountID() == P &&
            e &&
            e.toLowerCase().startsWith("nextfest")
          );
        }
        GenerateDynamicCreatorHomeItemBrowserSection(e, t) {
          return {
            ...t,
            section_type: "sale_item_browser",
            unique_id: e,
            item_browse_section_data: {
              enable_search: !0,
              tabs: [
                "all_released",
                "popularpurchased",
                "all_upcoming",
                "discounted",
              ],
              prefer_assets_without_overrides: !1,
            },
            prefer_assets_without_overrides: !1,
            enable_faceted_browsing:
              (h.pF.GetCreatorHome(this.clanSteamID)?.GetAppIDList().length ??
                0) >= 7,
            min_capsule_matches_for_facet_values: 5,
            max_facet_values_for_facet: 5,
            background_gradient_top: "#0000006b",
            background_gradient_bottom: "#0000006b",
            facet_sort_order: 1,
            facet_auto_generate_options: {
              only_facets: [
                { loc_token: "#App_Taxonomy_Survey_QSuperGenreTitle" },
                {
                  loc_token: "#AppTypeLabelTitle",
                  only_values: [
                    "#AppTypeLabel_game",
                    "#AppTypeLabel_dlc",
                    "#AppTypeLabel_demo",
                    "#AppTypeLabel_music",
                  ],
                  initially_selected_values: ["#AppTypeLabel_game"],
                },
              ],
              initially_expanded_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
              prioritized_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
            },
          };
        }
      }
      (0, n.Cg)([r.sH], fe.prototype, "GID", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "AnnouncementGID", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "forumTopicGID", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "type", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "appid", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "name", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "description", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "timestamp_loc_updated", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "startTime", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "endTime", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "visibilityStartTime", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "visibilityEndTime", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "m_nBuildID", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "m_strBuildBranch", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "postTime", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "visibility_state", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "broadcaster", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "jsondata", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "nCommentCount", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "nVotesUp", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "nVotesDown", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "bOldAnnouncement", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "announcementClanSteamID", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "loadedAllLanguages", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "bLoaded", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "deleteInProgress", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "vecTags", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "last_update_steamid", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "rtime32_last_modified", void 0),
        (0, n.Cg)(
          [r.sH],
          fe.prototype,
          "rtime32_last_solr_search_col_updated",
          void 0,
        ),
        (0, n.Cg)(
          [r.sH],
          fe.prototype,
          "rtime32_last_local_modification",
          void 0,
        ),
        (0, n.Cg)([r.sH], fe.prototype, "rtime32_moderator_reviewed", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "video_preview_type", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "video_preview_id", void 0),
        (0, n.Cg)([r.sH], fe.prototype, "m_overrideCurrentDay", void 0);
      function Ie(e) {
        return e?.replace(/[()]/g, "\\$&");
      }
    },
    38390: (e, t, a) => {
      "use strict";
      a.d(t, { B9: () => c, RR: () => l, hE: () => d });
      var n = a(90626),
        i = a(6379),
        s = a(4434),
        r = a(17720),
        o = (a(78327), a(17690), a(61859));
      a(41735), a(68797);
      function l(e) {
        const [t, a] = (0, n.useState)(() => i.O3.GetClanEventModel(e)),
          r = (0, s.m)("usePartnerEventByEventGID");
        return (
          (0, n.useEffect)(() => {
            e &&
              t?.GID != e &&
              (i.O3.Init(),
              i.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                [e],
                [],
                r,
              ).then((t) => {
                1 != t?.length || t[0].GID != e || r.token.reason || a(t[0]);
              }));
          }, [e, t, r]),
          t
        );
      }
      function c(e, t, a) {
        const [o, l] = (0, n.useState)(t ? i.O3.GetClanEventModel(t) : void 0),
          [c, d] = (0, n.useState)(!!e && !!t),
          [m, u] = (0, n.useState)(),
          [h, p] = (0, n.useState)(1),
          _ = (0, s.m)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, n.useEffect)(() => {
            (async () => {
              try {
                if (o?.GID != t && t && e) {
                  i.O3.Init();
                  const n = r.b.InitFromClanID(e);
                  let s;
                  try {
                    s =
                      await i.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                        n,
                        t,
                        0,
                        a,
                      );
                  } catch (e) {
                    u(e?.response?.data?.err_msg),
                      p(e?.response?.data?.success || 2);
                  }
                  _.token.reason || l(s);
                }
              } finally {
                d(!1);
              }
            })();
          }, [e, t, o, a, _]),
          { eventModel: o, bLoading: c, sErrorMessage: m, eResult: h }
        );
      }
      function d(e) {
        let t = "" + e;
        const a = o.A0.GetELanguageFallback(e);
        return e != a && (t += "_" + a), t;
      }
    },
    78511: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => r, q: () => o });
      var n = a(34629),
        i = a(14947),
        s = a(82705);
      function r(e) {
        return "waiting" == e || "uploading" == e || "processing" == e;
      }
      class o {
        m_originalSize = { width: 0, height: 0 };
        m_originalDataUrl = "";
        dataUrl = void 0;
        width = 0;
        height = 0;
        status = "pending";
        message = "";
        language = void 0;
        file;
        filename;
        uploadTime;
        fileType;
        constructor(e, t, a, n, r) {
          (0, i.Gn)(this),
            (this.file = e),
            (this.filename = t),
            (this.fileType = (0, s.yh)(t) ?? 0),
            (this.language = a),
            (this.uploadTime = Date.now()),
            (this.status = "pending"),
            (this.m_originalSize = r),
            (this.height = r.height),
            (this.width = r.width),
            (this.m_originalDataUrl = n),
            (this.dataUrl = n);
        }
        ResetImage() {
          (this.height = this.m_originalSize.height),
            (this.width = this.m_originalSize.width),
            (this.dataUrl = this.m_originalDataUrl);
        }
        GetImageOptionLabel() {}
      }
      (0, n.Cg)([i.sH], o.prototype, "dataUrl", void 0),
        (0, n.Cg)([i.sH], o.prototype, "width", void 0),
        (0, n.Cg)([i.sH], o.prototype, "height", void 0),
        (0, n.Cg)([i.sH], o.prototype, "status", void 0),
        (0, n.Cg)([i.sH.ref], o.prototype, "message", void 0),
        (0, n.Cg)([i.sH], o.prototype, "language", void 0);
    },
    28954: (e, t, a) => {
      "use strict";
      a.d(t, { VE: () => w, bT: () => S, zO: () => A });
      var n = a(34629),
        i = a(81393),
        s = a(64753),
        r = a(41735),
        o = a.n(r),
        l = a(14947),
        c = a(90626),
        d = a(73744),
        m = a(68797),
        u = a(6419),
        h = a(56011),
        p = a(61859),
        _ = a(78327),
        g = a(86355),
        v = a(82817),
        y = a(27666),
        f = a(64953),
        I = a(69343);
      function E(e, t, a) {
        const n = (0, d.Kf)(t.width, a),
          i = (0, d.Kf)(t.height, a);
        return {
          sKey: `${e}_${n}x${i}`,
          width: n,
          height: i,
          bEnforceDimensions: !t.bDisableEnforceDimensions,
          artworkType: e,
          bHiddenFromDropdown: "hero" === e,
          bDeprecated: (a ?? 0) >= 1,
          fnGetLabelText() {
            return "spotlight" == this.artworkType
              ? (0, p.we)("#EventEditor_ArtworkType_store_spotlight")
              : (0, p.we)("#EventEditor_ArtworkType_" + this.artworkType);
          },
        };
      }
      class b extends I.Vr {
        m_filesToUpload = l.sH.array();
        m_filesCompleted = l.sH.array();
        m_clanImagesV2;
        m_clanSteamID;
        m_rgImageOptions;
        m_localizedImageGroupPrimaryImage;
        m_lastError = void 0;
        constructor(e, t, a, n) {
          var s;
          super(),
            (0, l.Gn)(this),
            (this.m_clanSteamID = e),
            (this.m_rgImageOptions =
              ((s = t),
              s?.flatMap((e) => {
                const t = d.Fj[e];
                if (
                  ((0, i.wT)(Boolean(t), `Artwork Type not in Map ${e}`),
                  "number" == typeof t.width && "number" == typeof t.height)
                )
                  return [E(e, t)];
                {
                  let a = Math.max(
                    Array.isArray(t.width) ? t.width.length : 1,
                    Array.isArray(t.height) ? t.height.length : 1,
                  );
                  return Array.from({ length: a }, (a, n) => E(e, t, n));
                }
              }))),
            (this.m_localizedImageGroupPrimaryImage = a),
            (this.m_clanImagesV2 = n ?? !1);
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        async AddImage(e, t = 0) {
          const { language: a } = (0, I.jj)(e.name, t);
          return this.AddImageForLanguage(e, a);
        }
        async AddImageForLanguage(e, t) {
          if (!((0, v.aL)(e.type) || (_.iA.is_support && (0, v.Uz)(e.type))))
            return !1;
          const a = await (0, v.zB)(e, (0, v.Uz)(e.type));
          if (!a) return !1;
          const n = new f.M7(
            e,
            e.name,
            t,
            this.m_rgImageOptions,
            a.src,
            (0, v.II)(a),
            a,
            this.m_localizedImageGroupPrimaryImage,
          );
          return (this.m_filesToUpload = [...this.m_filesToUpload, n]), !0;
        }
        async AddExistingClanImage(e, t = 0) {
          const a = y.z.GetHashAndExt(e);
          if (!a) return !1;
          const n = y.z.GenerateEditableURLFromHashAndExt(
              this.m_clanSteamID,
              a,
            ),
            i = await o()({ url: n, method: "GET", responseType: "blob" }),
            s = (0, h.pE)(i.data, e.file_name);
          return await this.AddImage(s, t);
        }
        DeleteUploadImageByIndex(e) {
          this.m_filesToUpload.splice(e, 1),
            (this.m_filesToUpload = [...this.m_filesToUpload]);
        }
        DeleteUploadImage(e) {
          let t = this.m_filesToUpload.findIndex(
            (t) => e.file == t.file && e.uploadTime == t.uploadTime,
          );
          t >= 0 && this.DeleteUploadImageByIndex(t);
        }
        ClearImages() {
          this.m_filesToUpload = l.sH.array();
        }
        GetFilesUploaded() {
          return this.m_filesCompleted;
        }
        GetLastErrorFile() {
          return this.m_lastError;
        }
        GetCompletedFiles() {
          return this.m_filesCompleted.length;
        }
        GetTotalFiles() {
          return this.m_filesToUpload.length;
        }
        GetFilesToUpload() {
          return this.m_filesToUpload.map((e) => e.file);
        }
        GetUploadImages() {
          return this.m_filesToUpload;
        }
        BHasError() {
          return null != this.m_lastError;
        }
        BAllDone() {
          return (
            this.m_filesCompleted.length > 0 &&
            this.m_filesCompleted.length == this.m_filesToUpload.length
          );
        }
        BIsFileCompleted(e) {
          return -1 != this.m_filesCompleted.indexOf(e);
        }
        RetryAllFailedUploads() {
          this.CancelAllUploads(), this.UploadAllImages();
        }
        async handleUploadRefresh(e) {
          await g.pU.LoadClanImages(this.m_clanSteamID, !0, e);
        }
        BGetUploadsAreInSerial() {
          return !1;
        }
        async UploadSingleImage(e, t, a, n) {
          const i = e.file,
            s = e.GetCurrentImageOption(),
            r = e.GetResizeDimension(),
            l = new FormData();
          l.append("clanimage", i, t),
            l.append("sessionid", _.TS.SESSIONID),
            this.m_clanImagesV2 && l.append("clan_images_v2", "1"),
            s?.artworkType && l.append("arttype", s.artworkType),
            r &&
              r.length > 0 &&
              l.append(
                "resize",
                r.map((e) => e.width + "x" + e.height).join(","),
              );
          let c = "/uploadimage/";
          const d = this.m_localizedImageGroupPrimaryImage;
          d &&
            ((c = "/ajaxuploadlocalizedimage/"),
            l.append("origimagehash", d.image_hash),
            d.thumbnail_hash && l.append("thumbhash", d.thumbnail_hash),
            l.append("extension", "" + d.file_type),
            l.append("language", "" + a));
          const u = t.split(".").pop()?.toLocaleLowerCase();
          ("webm" != u && "mp4" != u) ||
            (l.append("video_width", "" + e.width),
            l.append("video_height", "" + e.height));
          let h,
            p =
              _.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              this.m_clanSteamID.ConvertTo64BitString() +
              c,
            g = {
              cancelToken: n,
              withCredentials: !0,
              headers: { "Content-Type": "multipart/form-data" },
            },
            v = !0;
          try {
            (h = await o().post(p, l, g)), this.m_filesCompleted.push(i);
          } catch (e) {
            (v = !1),
              (this.m_lastError = {
                file: i,
                status: e.response ? e.response.status : 500,
                message: (0, m.H)(e).strErrorMsg,
              }),
              (h = e.response);
          }
          return (
            d || (await this.handleUploadRefresh(n)),
            { bSuccess: v, result: h.data }
          );
        }
      }
      (0, n.Cg)([l.sH], b.prototype, "m_filesToUpload", void 0),
        (0, n.Cg)([l.sH], b.prototype, "m_filesCompleted", void 0),
        (0, n.Cg)([l.sH], b.prototype, "m_lastError", void 0),
        (0, n.Cg)([u.o], b.prototype, "AddImage", null),
        (0, n.Cg)([u.o], b.prototype, "AddExistingClanImage", null),
        (0, n.Cg)([u.o], b.prototype, "DeleteUploadImageByIndex", null),
        (0, n.Cg)([u.o], b.prototype, "DeleteUploadImage", null),
        (0, n.Cg)([u.o], b.prototype, "ClearImages", null);
      class w extends b {
        constructor(e, t, a) {
          super(e, t, a, !1);
        }
      }
      async function S(e, t, a, n, i) {
        let s =
            _.TS.COMMUNITY_BASE_URL +
            "/gid/" +
            t.ConvertTo64BitString() +
            "/resizeimage/",
          r = new FormData();
        return (
          r.append("imagehash", a),
          r.append("extension", n),
          r.append("resize", i.map((e) => e.width + "x" + e.height).join(",")),
          r.append("sessionid", _.TS.SESSIONID),
          (await o().post(s, r, { cancelToken: e })).data.count
        );
      }
      function A(e, t, a) {
        const n = (0, s.wm)(t instanceof Array ? t : [t]),
          i = e.ConvertTo64BitString();
        return c.useMemo(() => new w(e, n, a), [i, n]);
      }
    },
    27666: (e, t, a) => {
      "use strict";
      a.d(t, { z: () => _ });
      var n = a(12611),
        i = a(30470),
        s = a(22837),
        r = a(17720),
        o = a(28954),
        l = a(81393),
        c = a(68797),
        d = a(14771),
        m = a(82817),
        u = a(86355),
        h = a(64953),
        p = a(3577);
      const _ = {
        GetBaseURL: () => `${i.TS.CLAN_CDN_ASSET_URL}images/`,
        GetBaseURLV2: () => `${i.TS.CLAN_CDN_ASSET_URL}locimages/`,
        ReplacementTokenToClanImageURL(e) {
          return (e = e.replace(n.lw, this.GetBaseURL())).replace(
            "http://",
            "https://",
          );
        },
        ExtractHashFromBBCodeURL(e) {
          const t =
            /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^\.]*)$/.exec(
              e,
            );
          return t?.groups
            ? [t.groups.filename, parseInt(t.groups.clanid)]
            : [void 0, void 0];
        },
        GetExtensionString: (e) =>
          (null != e.file_type ? (0, m.EG)(e.file_type) : null) ?? ".jpg",
        GetHashAndExt(e) {
          return e ? e.image_hash + this.GetExtensionString(e) : null;
        },
        GetThumbHashAndExt(e) {
          return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
        },
        GetHashFromHashAndExt(e) {
          let t = e.substring(e.lastIndexOf("."));
          return e.substring(0, e.length - t.length);
        },
        GetExtStringFromHashAndExt: (e) => e.substring(e.lastIndexOf(".")),
        GenerateURLFromHashAndExt(e, t, a = u.wI.full) {
          return this.GenerateURLFromHashAndExtAndLang(e, t, a, -1, void 0);
        },
        GenerateURLFromHashAndExtAndLang(e, t, a = u.wI.full, n, i) {
          e instanceof r.b && (e = e.GetAccountID());
          let o = this.GetBaseURL();
          const l = null != n && -1 != n;
          if (a != u.wI.full || l) {
            let r = t.substring(t.lastIndexOf(".")),
              c = t.substring(0, t.length - r.length);
            return l && 0 != n && "localized_image_group" == i
              ? o + e + "/" + c + "/" + (0, s.x6)((0, s.Lg)(n)) + r
              : o + e + "/" + c + a + r;
          }
          return o + e + "/" + t;
        },
        GetHashAndExtFromURL(e) {
          let t = this.GetBaseURL();
          return e?.startsWith(t)
            ? -1 == (e = e.substring(t.length)).indexOf("/")
              ? null
              : (e = e.substring(e.indexOf("/") + 1))
            : null;
        },
        GenerateEditableURLFromHashAndExt(e, t, a) {
          let n =
            i.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/showclanimage/?image_hash_and_ext=" +
            t;
          return a && (n += "&lang=" + a), n;
        },
        GetMimeType: (e) => (0, m.ab)(e),
        async AsyncGetImageResolution(e, t, a, n, i) {
          const s = t + this.GetExtensionString({ file_type: a }),
            r = this.GenerateEditableURLFromHashAndExt(e, s);
          return await this.AsyncGetImageResolutionInternal(r, n, i);
        },
        async AsyncGetImageResolutionInternal(e, t, a) {
          const n = (0, p.x0)();
          let i = new Image();
          (i.crossOrigin = "anonymous"),
            (i.onerror = (t) => {
              const i = { success: 2 };
              a ||
                ((i.err_msg =
                  "Load fail on url " +
                  e +
                  " with error: " +
                  (0, c.H)(t).strErrorMsg),
                console.error(i.err_msg)),
                (i.success = 2),
                n.resolve(i);
            }),
            (i.onload = () => {
              const t = { success: 2 };
              (t.width = i.width),
                (t.height = i.height),
                (0, l.wT)(
                  t.width > 0 && t.height > 0,
                  "unexpected image resolution discovered for strURL: " + e,
                ),
                (t.success = 1),
                n.resolve(t);
            }),
            (i.src = e),
            t.token.promise.catch(() => {
              const e = { success: 2 };
              return (i.onload = () => {}), (e.success = 52), e;
            });
          const s = new Promise((e, t) => setTimeout(() => t(), 1e4));
          let r;
          try {
            r = await Promise.race([s, n.promise]);
          } catch {
            r = { success: 16, err_msg: "We timed out processing images" };
          }
          return r;
        },
        async OverlayClanImage(e, t, a, n, i, s) {
          let r,
            l = null,
            m = new Image();
          (m.crossOrigin = "anonymous"),
            (m.onerror = (e) => {
              (r =
                "Load fail on url " +
                a +
                " with error: " +
                (0, c.H)(e).strErrorMsg),
                console.error(r);
            }),
            (m.onload = () => {
              let e = new Image();
              (e.crossOrigin = "anonymous"),
                (e.onerror = (e) => {
                  (r =
                    "Load fail on url " +
                    t +
                    " with error: " +
                    (0, c.H)(e).strErrorMsg),
                    console.error(r);
                }),
                (e.onload = () => {
                  try {
                    let t = document.createElement("canvas"),
                      a = t.getContext("2d");
                    (t.width = i), (t.height = s), a?.drawImage(e, 0, 0, i, s);
                    let n = (i - m.width) / 2,
                      r = (s - m.height) / 2;
                    a?.drawImage(m, n, r),
                      t.toBlob((e) => (l = e), "image/jpeg");
                  } catch (e) {
                    r =
                      "Failed during image processing for " + n + " with " + e;
                  }
                }),
                (e.src = t);
            }),
            (m.src = a);
          let u = 0;
          for (; void 0 === l && u < 100; ) await (0, d.IP)(100), (u += 1);
          if (
            (u >= 100 &&
              void 0 === l &&
              (r = "AsyncOverlay - We timed out processing images"),
            r)
          )
            throw (console.log(r), { success: 2, err_msg: r });
          const p = new o.VE(e, void 0),
            _ = new h.M7(
              l,
              n,
              -1,
              void 0,
              "",
              { width: i, height: s },
              void 0,
              void 0,
            ),
            g = await p.UploadSingleImage(_, n, -1, void 0);
          return g.bSuccess && g.result
            ? g.result.image_hash +
                this.GetExtensionString({ file_type: _.fileType })
            : void 0;
        },
        BIsClanImageVideo: (e) => 4 == e.file_type || 5 == e.file_type,
      };
    },
    64953: (e, t, a) => {
      "use strict";
      a.d(t, { K_: () => g, M7: () => _ });
      var n = a(34629),
        i = a(14947),
        s = a(73744),
        r = a(61859),
        o = a(78511),
        l = a(66331),
        c = a(82817);
      const d = 960,
        m = 311,
        u = 480,
        h = 156;
      class p extends o.q {
        m_rgImageOptions;
        m_currentImageOption = void 0;
        m_currentImageOptionKey = void 0;
        constructor(e, t, a, n, s, r) {
          super(e, t, a, s, r), (0, i.Gn)(this), (this.m_rgImageOptions = n);
        }
        IsValidAssetType(e, t) {
          let a = 0,
            n = 0,
            i = !1,
            o =
              !this.m_rgImageOptions ||
              0 === this.m_rgImageOptions.length ||
              this.m_rgImageOptions.some(
                (e) => e.sKey == this.GetCurrentImageOption()?.sKey,
              );
          if (e) (a = e.width), (n = e.height), (i = !0);
          else if (this.GetCurrentImageOption()) {
            const e = s.Fj[this.GetCurrentImageOption().artworkType];
            e &&
              ((a = e.width),
              (n = e.height),
              (i = !e.bDisableEnforceDimensions));
          }
          const d = this.width >= (0, s.dM)(a) && this.height >= (0, s.dM)(n),
            m = i ? (0, s.Ek)(this.width, this.height, a, n) : d,
            u = t && t != this.fileType,
            h =
              !!(this.m_rgImageOptions && this.m_rgImageOptions.length > 0) &&
              0 ==
                (0, s.vz)(
                  this.fileType,
                  this.m_rgImageOptions?.map((e) => e.artworkType) || [],
                ).length,
            p = Boolean((0, l.t)(this.fileType));
          let _,
            g = "",
            v = !1;
          return (
            o
              ? h
                ? (g = (0, r.we)("#ImageUpload_InvalidFileType"))
                : u
                  ? (g = (0, r.we)(
                      "#ImageUpload_InvalidFormat",
                      (0, c.EG)(t) ?? "",
                    ))
                  : m || p
                    ? d
                      ? !m && p
                        ? ((g = (0, r.we)(
                            "#ImageUpload_InvalidDimensions",
                            (0, s.qj)(a),
                            (0, s.qj)(n),
                          )),
                          (v = !0))
                        : ((Array.isArray(a) && this.width != (0, s.qj)(a)) ||
                            (Array.isArray(n) &&
                              this.height != (0, s.qj)(n))) &&
                          ((_ = _ ?? []),
                          _.push(
                            (0, r.we)(
                              "#ImageUpload_PreferredDimension",
                              (0, s.qj)(a),
                              (0, s.qj)(n),
                            ),
                          ))
                      : (g = (0, r.we)(
                          "#ImageUpload_TooSmall",
                          (0, s.qj)(a),
                          (0, s.qj)(n),
                        ))
                    : (g = (0, r.we)(
                        "#ImageUpload_InvalidResolution",
                        (0, s.qj)(a),
                        (0, s.qj)(n),
                      ))
              : (g = (0, r.we)("#ImageUpload_InvalidFormatSelected")),
            {
              error: g,
              warnings: _,
              needsCrop: v,
              match: this.GetCurrentImageOption(),
            }
          );
        }
        BSupportsLanguages() {
          return !0;
        }
        ComputeDefaultImageOption() {
          if (!this.m_rgImageOptions || 0 == this.m_rgImageOptions.length)
            return;
          const e = (0, s.vz)(
            this.fileType,
            this.m_rgImageOptions?.map((e) => e.artworkType),
          );
          let t = v(this.width, this.height, e, !1);
          if ((void 0 === t && (t = v(this.width, this.height, e, !0)), t)) {
            const e = this.m_rgImageOptions.find(
              (e) =>
                e.artworkType == t &&
                (!e.bEnforceDimensions ||
                  (e.width == this.width && e.height == this.height)),
            );
            if (e) return e;
          }
          return this.m_rgImageOptions[0];
        }
        get ImageOptions() {
          return this.m_rgImageOptions;
        }
        GetCurrentImageOptionKey() {
          return this.m_currentImageOptionKey;
        }
        GetCurrentImageOption() {
          return this.m_currentImageOption ?? this.ComputeDefaultImageOption();
        }
        SetCurrentImageOption(e) {
          (this.m_currentImageOption = e),
            (this.m_currentImageOptionKey = e?.sKey);
        }
      }
      (0, n.Cg)([i.sH], p.prototype, "m_currentImageOption", void 0),
        (0, n.Cg)([i.sH], p.prototype, "m_currentImageOptionKey", void 0);
      class _ extends p {
        bCropped = !1;
        localizedImageGroupPrimaryImage;
        media;
        constructor(e, t, a, n, s, r, o, l) {
          super(e, t, a, n, s, r),
            (0, i.Gn)(this),
            (this.media = o),
            (this.localizedImageGroupPrimaryImage = l);
        }
        IsValidAssetType(e, t) {
          return (
            (t = t ?? this.localizedImageGroupPrimaryImage?.file_type),
            super.IsValidAssetType(e, t)
          );
        }
        GetCanvasImageSource() {
          return this.media;
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, s.s4)(
            this.media?.width ?? 0,
            this.media?.height ?? 0,
            e.artworkType,
          );
        }
        FileTypeMatchesImageTypes(e) {
          return (0, s.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return s.Ho.includes(this.fileType);
        }
        GetResizeDimension() {
          return g(this.GetCurrentImageOption()?.artworkType);
        }
      }
      function g(e) {
        return "background" === e
          ? [
              { width: d, height: m },
              { width: u, height: h },
            ]
          : "capsule" === e || "spotlight" === e
            ? [
                {
                  width: (0, s.qj)(s.Fj[e].width) / 2,
                  height: (0, s.qj)(s.Fj[e].height) / 2,
                },
              ]
            : void 0;
      }
      function v(e, t, a, n = !1) {
        if (a)
          for (let i of a) {
            if (n ? (0, s.s4)(e, t, i) : (0, s.yu)(e, t, i)) return i;
          }
      }
      (0, n.Cg)([i.sH], _.prototype, "bCropped", void 0);
    },
    69343: (e, t, a) => {
      "use strict";
      a.d(t, { PD: () => u, Vr: () => m, jj: () => h });
      var n = a(2160),
        i = a(22837),
        s = a(61859),
        r = a(41735),
        o = a.n(r);
      class l {}
      function c(e, t, a) {
        const n = e.filter((e) => {
          const n = e.IsValidAssetType(t, a);
          return "pending" === e.status && !n.error && !n.needsCrop;
        });
        return (
          n.forEach((e) => {
            (e.status = "waiting"), (e.message = "");
          }),
          n
        );
      }
      async function d(e, t, a, n, i, s) {
        const r = c(e, n, i),
          o = [];
        let l = 0;
        const d = Array.from({ length: Math.floor(t) }, () =>
          (async () => {
            for (; l < r.length; ) {
              const e = l++,
                t = r[e];
              t.status = "uploading";
              const n = await a(t, t.filename, t.language ?? -1, s);
              (t.status = n.bSuccess ? "success" : "failed"),
                (t.message =
                  !n.bSuccess && n.elErrorMessage ? n.elErrorMessage : ""),
                (o[e] = { image: t, uploadResult: n });
            }
          })(),
        );
        return (
          await Promise.all(d),
          o.map((e) => ({
            bSuccess: e.uploadResult.bSuccess,
            image: e.image,
            uploadResult: e.uploadResult.result,
          }))
        );
      }
      class m extends l {
        m_cancel = void 0;
        async UploadAllImages(e, t) {
          this.m_cancel = o().CancelToken.source();
          const a = this.BGetUploadsAreInSerial() ? 1 : 4;
          let n;
          const i = this.UploadSingleImage.bind(this);
          return (
            (n =
              a > 1
                ? await d(
                    this.GetUploadImages(),
                    a,
                    i,
                    e,
                    t,
                    this.m_cancel.token,
                  )
                : await (async function (e, t, a, n, i) {
                    const s = c(e, a, n),
                      r = [];
                    for (const e of s) {
                      e.status = "uploading";
                      const a = await t(e, e.filename, e.language ?? -1, i);
                      (e.status = a.bSuccess ? "success" : "failed"),
                        (e.message =
                          !a.bSuccess && a.elErrorMessage
                            ? a.elErrorMessage
                            : ""),
                        r.push({
                          bSuccess: a.bSuccess,
                          image: e,
                          uploadResult: a.result,
                        });
                    }
                    return r;
                  })(this.GetUploadImages(), i, e, t, this.m_cancel.token)),
            n
          );
        }
        CancelAllUploads() {
          this.m_cancel?.cancel((0, s.we)("#ImageUpload_CancelRequest"));
        }
      }
      function u(e, t, a) {
        if (((null != e && null != e) || (e = t), !a || 0 === a.length))
          return e;
        for (const t of a) if (s.A0.IsELanguageValidInRealm(e, t)) return e;
        for (const e of a) if (s.A0.IsELanguageValidInRealm(t, e)) return t;
        return a.includes(n.TU.k_ESteamRealmGlobal) ? 0 : 29;
      }
      function h(e, t = 0) {
        let a = e.lastIndexOf(".");
        -1 != a && (e = e.slice(0, a).toLowerCase());
        let n = null,
          s = 0;
        e.endsWith("korean") && ((n = 4), (s = 6));
        for (let t = 0; t < 31; ++t) {
          const a = (0, i.ww)(t);
          if (a.length <= s) continue;
          if (e.endsWith(a) && e.length > a.length + 2) {
            const i = e[e.length - a.length - 1];
            /\p{Alphabetic}|\p{Number}/u.test(i) || ((n = t), (s = a.length));
          }
          const r = (0, i.Lg)(t);
          r.length <= s || (e.endsWith(r) && ((n = t), (s = r.length)));
        }
        return {
          language: n ?? t,
          baseFilename:
            s > 0
              ? ((r = e.substring(0, e.length - s)), r.replace(/[\s_-]+$/g, ""))
              : e,
        };
        var r;
      }
    },
    68359: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => h });
      var n = a(34629),
        i = a(41735),
        s = a.n(i),
        r = a(14947),
        o = a(17720),
        l = a(62490),
        c = a(78327),
        d = a(86355),
        m = a(27666);
      class u {
        m_curLocImageGroup = null;
        m_curLocImageGroupType = null;
        constructor() {
          (0, r.Gn)(this),
            "dev" == c.TS.WEB_UNIVERSE && (window.g_ClanImageStore = this);
        }
        static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, a, n) {
          let i =
              c.TS.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/hasclanimagefile",
            r = { image_hash_and_ext: a, lang: "" + n };
          return (
            1 ==
            (await s().get(i, { params: r, cancelToken: e && e.token })).data
              .success
          );
        }
        SetPrimaryImageForImageGroup(e, t) {
          (this.m_curLocImageGroup &&
            this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
            t == this.m_curLocImageGroupType) ||
            ((this.m_curLocImageGroup = {
              primaryImage: e,
              localized_images: [],
            }),
            (this.m_curLocImageGroupType = t),
            (this.m_curLocImageGroup.localized_images = (0, l.$Y)(
              this.m_curLocImageGroup.localized_images,
              31,
              null,
            )));
        }
        GetPrimaryImageForImageGroup() {
          return this.m_curLocImageGroup?.primaryImage;
        }
        ClearImageGroup() {
          (this.m_curLocImageGroup = null),
            (this.m_curLocImageGroupType = null);
        }
        GetLocalizedImageGroupForEdit() {
          return this.m_curLocImageGroup;
        }
        GetLocalizedImageGroupForEditAsURL(e, t) {
          if (this.m_curLocImageGroup) {
            let a = this.m_curLocImageGroup.primaryImage;
            return this.m_curLocImageGroup.localized_images[t]
              ? this.m_curLocImageGroup.localized_images[t]
              : m.z.GenerateURLFromHashAndExt(e, m.z.GetHashAndExt(a) ?? "");
          }
          return null;
        }
        async DetermineAvailableLocalizationForGroup(e) {
          if (!this.m_curLocImageGroup) return;
          const t = this.m_curLocImageGroup.primaryImage,
            a = o.b.InitFromClanID(t.clanAccountID),
            n = m.z.GetHashAndExt(t) ?? "",
            i = [];
          for (let t = 0; t < 31; ++t)
            i.push(u.BDoesClanImageFileExistsOnCDNOrOrigin(e, a, n, t));
          const s = await Promise.all(i);
          (0, r.h5)(() => {
            for (let e = 0; e < 31; ++e)
              s[e] &&
                (this.m_curLocImageGroup.localized_images[e] =
                  m.z.GenerateURLFromHashAndExtAndLang(
                    a,
                    n,
                    d.wI.full,
                    e,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
          });
        }
        SetLocalizedImageGroupAtLang(e, t, a) {
          this.m_curLocImageGroup &&
            (this.m_curLocImageGroup.localized_images[e] = a
              ? m.z.GenerateURLFromHashAndExtAndLang(
                  t,
                  a,
                  d.wI.full,
                  e,
                  this.m_curLocImageGroupType ?? void 0,
                )
              : null);
        }
        AddLocalizeImageUploaded(e, t) {
          if (!this.m_curLocImageGroup) return;
          let a = this.m_curLocImageGroup.primaryImage;
          if (a?.image_hash == e) {
            const e = o.b.InitFromClanID(a.clanAccountID),
              n = m.z.GetHashAndExt(a);
            n &&
              (this.m_curLocImageGroup.localized_images[t] =
                m.z.GenerateURLFromHashAndExtAndLang(
                  e,
                  n,
                  d.wI.full,
                  t,
                  this.m_curLocImageGroupType ?? void 0,
                ));
          }
        }
        GetAllLocalizedGroupImages() {
          return (
            (this.m_curLocImageGroup &&
              this.m_curLocImageGroup.localized_images) ||
            []
          );
        }
        GetAllLocalizedGroupImageHashAndExts() {
          return this.GetAllLocalizedGroupImages()
            .filter(Boolean)
            .map((e) => m.z.GetHashAndExtFromURL(e));
        }
      }
      (0, n.Cg)([r.sH], u.prototype, "m_curLocImageGroup", void 0);
      const h = new u();
    },
    86355: (e, t, a) => {
      "use strict";
      a.d(t, {
        mr: () => f,
        n9: () => y,
        pU: () => v,
        pb: () => _,
        wI: () => n,
      });
      var n,
        i = a(34629),
        s = a(41735),
        r = a.n(s),
        o = a(14947),
        l = a(90626),
        c = a(17720),
        d = a(4434),
        m = a(81393),
        u = a(6144),
        h = a(84933),
        p = a(78327);
      !(function (e) {
        (e.full = ""),
          (e.background_main = "_960x311"),
          (e.background_mini = "_480x156"),
          (e.capsule_main = "_400x225"),
          (e.spotlight_main = "_1054x230");
      })(n || (n = {}));
      const _ = [
        "localized_image_group",
        "link_capsule",
        "product_mobile_banner_override",
        "product_banner_override",
        "sale_section_title",
        "schedule_track_art",
        "localized_background_art",
      ];
      class g {
        constructor() {
          (0, o.Gn)(this),
            "dev" == p.TS.WEB_UNIVERSE && (window.g_ClanImageStore = this);
        }
        m_mapClanToImages = new Map();
        m_mapClanImageLoadPromises = new Map();
        m_imageListChangeCallback = new Map();
        m_mapClanImageLoadState = new Map();
        m_mapImageIDToResolution = new Map();
        BHasImageResolution(e) {
          return this.m_mapImageIDToResolution.has(e.imageid);
        }
        GetImageResolution(e) {
          return this.m_mapImageIDToResolution.get(e.imageid);
        }
        SetImageResolution(e, t) {
          this.m_mapImageIDToResolution.set(e.imageid, t);
        }
        GetImageListCallbackForClanAccountIDInternal(e) {
          return (
            this.m_imageListChangeCallback.has(e) ||
              this.m_imageListChangeCallback.set(e, new u.lu()),
            this.m_imageListChangeCallback.get(e)
          );
        }
        GetImageListCallbackForClanAccountID(e) {
          return this.GetImageListCallbackForClanAccountIDInternal(e);
        }
        m_vecClanImageDragListener = new Array();
        AddClanImageDragListener(e) {
          -1 == this.m_vecClanImageDragListener.indexOf(e) &&
            this.m_vecClanImageDragListener.push(e);
        }
        RemoveClanImageDragListener(e) {
          let t = this.m_vecClanImageDragListener.indexOf(e);
          -1 != t && this.m_vecClanImageDragListener.splice(t, 1);
        }
        GetClanImageDragListener() {
          return this.m_vecClanImageDragListener;
        }
        BHasLoadedClanImages(e) {
          return this.m_mapClanToImages.has(e.GetAccountID());
        }
        async LoadClanImages(e, t, a) {
          const n = e.GetAccountID();
          if (t || !this.m_mapClanImageLoadPromises.has(n)) {
            const i = this.InternalLoadClanImages(e, t, a);
            this.m_mapClanImageLoadPromises.set(n, i);
          }
          return this.m_mapClanImageLoadPromises.get(n);
        }
        async InternalLoadClanImages(e, t, a) {
          let n = e.GetAccountID();
          if (
            ((0, m.wT)(e && 0 != n, "ClanSteamID missing:" + e),
            e && (!this.m_mapClanToImages.has(n) || t))
          ) {
            let t,
              i = {};
            const s =
              p.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/getimages/";
            if (
              ((t = await r().get(s, {
                params: i,
                withCredentials: !0,
                cancelToken: a,
              })),
              t)
            ) {
              for (let e of t.data.images) e.clanAccountID = n;
              (0, o.h5)(() => {
                this.m_mapClanImageLoadState.set(n, { loaded: !0 }),
                  this.m_mapClanToImages.set(n, t.data.images),
                  this.GetImageListCallbackForClanAccountIDInternal(n).Dispatch(
                    t.data.images,
                  );
              });
            }
          }
          return this.m_mapClanToImages.get(n);
        }
        GetLoadState(e) {
          return this.m_mapClanImageLoadState.get(e.GetAccountID());
        }
        GetClanImages(e) {
          return this.GetClanImagesByAccount(e.GetAccountID());
        }
        GetClanImagesByAccount(e) {
          let t = this.m_mapClanToImages.get(e);
          return t || new Array();
        }
        GetFilteredClanImages(e, t) {
          let a = v.GetClanImages(e);
          return this.GetFilteredClanImagesList(a, t);
        }
        GetFilteredClanImagesList(e, t) {
          if (t && t.trim().length > 0) {
            t = t.trim().toLowerCase();
            let a = new Array();
            for (let n of e)
              n.file_name &&
                n.file_name.toLowerCase().indexOf(t) >= 0 &&
                a.push(n);
            return a;
          }
          return e;
        }
        GetClanImageByID(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.imageid == t) : void 0;
        }
        GetClanImageByURL(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.thumb_url == t || e.url == t) : void 0;
        }
        GetClanImageByFile(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.file_name == t.name) : void 0;
        }
        GetClanImageByImageHash(e, t) {
          let a = e.GetAccountID(),
            n = this.m_mapClanToImages.get(a);
          return n ? n.find((e) => e.image_hash == t) : void 0;
        }
        async DeleteClanImageByID(e, t) {
          let a = { sessionid: p.TS.SESSIONID, imageid: t },
            n = e.GetAccountID(),
            i = await r().get(
              p.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                e.ConvertTo64BitString() +
                "/deleteimage/",
              { params: a },
            );
          if (!i || 200 != i.status || 1 != i.data.success) return i.data;
          let s = this.m_mapClanToImages.get(n);
          if (s) {
            let e = s.findIndex((e, a, n) => e.imageid == t);
            e >= 0 &&
              (s.splice(e, 1),
              this.GetImageListCallbackForClanAccountIDInternal(n).Dispatch([
                ...s,
              ]));
          }
          return i.data;
        }
        async DeleteClanImage(e, t) {
          return this.DeleteClanImageByID(e, t.imageid);
        }
      }
      (0, i.Cg)([o.sH], g.prototype, "m_mapClanToImages", void 0),
        (0, i.Cg)([o.sH], g.prototype, "m_mapClanImageLoadState", void 0);
      const v = new g();
      function y(e) {
        const [t, a] = (0, l.useState)(v.GetClanImagesByAccount(e));
        return (0, h.hL)(v.GetImageListCallbackForClanAccountID(e), a), t;
      }
      function f(e) {
        const t = c.b.InitFromClanID(e),
          a = (0, d.m)("useLoadClanImages"),
          [n, i] = (0, l.useState)(() => v.BHasLoadedClanImages(t));
        return (
          (0, l.useEffect)(() => {
            const t = c.b.InitFromClanID(e);
            return (
              v.BHasLoadedClanImages(t) ||
                v.LoadClanImages(t, !1, a.token).then(() => i(!0)),
              () => a.cancel()
            );
          }, [e, a]),
          n
        );
      }
    },
    82705: (e, t, a) => {
      "use strict";
      a.d(t, { yh: () => n });
      a(90626);
      function n(e) {
        return (
          e.indexOf("?") > 0 && (e = e.split("?")[0]),
          e.endsWith(".jpg") || e.endsWith(".jpeg")
            ? 1
            : e.endsWith(".png")
              ? 3
              : e.endsWith(".gif")
                ? 2
                : e.endsWith(".mp4")
                  ? 4
                  : e.endsWith(".webm")
                    ? 5
                    : e.endsWith(".vtt")
                      ? 6
                      : e.endsWith(".srt")
                        ? 7
                        : e.endsWith(".webp")
                          ? 10
                          : void 0
        );
      }
    },
    6379: (e, t, a) => {
      "use strict";
      a.d(t, { ZQ: () => S, O3: () => A, MX: () => T, dB: () => G });
      var n = a(34629),
        i = a(41735),
        s = a.n(i),
        r = a(14947),
        o = a(31561),
        l = a(22837),
        c = a(89128),
        d = a(17720),
        m = a(55563),
        u = a(62490),
        h = a(81393),
        p = a(68797),
        _ = a(6144),
        g = a(41338),
        v = a(78327),
        y = a(90626),
        f = a(84933),
        I = a(38390);
      function E(e) {
        return (
          (null == e.gid || null == e.gid || "0" == e.gid) &&
          !!e.announcement_body &&
          "0" != e.announcement_body.gid
        );
      }
      function b(e) {
        return E(e) ? c.cB + e.announcement_body?.gid : e.gid;
      }
      class w {
        appid;
        date;
        can_play;
        playtime;
        announcementid;
        constructor(e) {
          (0, h.wT)(
            "number" == typeof e.appid,
            "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
          ),
            (this.appid = e.appid),
            (this.date = e.date),
            (this.can_play = e.can_play),
            (this.playtime = e.playtime),
            (this.announcementid = e.announcementid);
        }
      }
      class S {
        constructor(e = !1) {
          (0, r.Gn)(this), (this.m_bOnlySummary = e);
        }
        m_bOnlySummary = !1;
        m_mapExistingEvents = new Map();
        m_mapEventUpdateCallback = new Map();
        m_mapAnnouncementBodyToEvent = new Map();
        m_mapClanToGIDs = new Map();
        m_mapAppIDToGIDs = new Map();
        m_mapAdjacentAnnouncementGIDs = new Map();
        m_mapUpdatedApps = new Map();
        m_tsUpdatedAppsQueryTime = 0;
        m_rgQueuedEventsClanIDs = new Array();
        m_rgQueuedEventsUniqueIDs = new Array();
        m_rgQueuedEventsForEditFlags = new Array();
        m_QueuedEventTimeout = new _.LU();
        m_PendingInfoPromise;
        m_PendingInfoResolve;
        m_bLoadedFromConfig = !1;
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, m.v)("PartnerEventStore");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                if (e) {
                  let t = new d.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    this.m_mapExistingEvents.set(
                      c.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let t = (0, v.Fd)("partnereventstore", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((e) => {
                if (e) {
                  let t = new d.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    !this.m_mapExistingEvents.has(
                      c.cB + e.announcement_body.gid,
                    ) &&
                    this.m_mapExistingEvents.set(
                      c.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let a = (0, v.Fd)("partnereventadjacents", "application_config");
            this.ValidateAdjacentEvent(a) &&
              (("dev" != v.TS.WEB_UNIVERSE && "beta" != v.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: CPartnerEventStore loading adjacents gids payload: " +
                    a.length,
                ),
              a.forEach((e) => {
                e &&
                  this.m_mapAdjacentAnnouncementGIDs.set(
                    e.announcementGID,
                    e.adjacents,
                  );
              })),
              "dev" == v.TS.WEB_UNIVERSE &&
                console.log(
                  "PartnerEventStore Loaded events: " +
                    this.m_mapExistingEvents.size +
                    " with adjacent info: " +
                    this.m_mapExistingEvents.size,
                ),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              t[0] &&
              "object" == typeof t[0]
            ) &&
            ("string" == typeof t[0].gid ||
              ("object" == typeof t[0].announcement_body &&
                "string" == typeof t[0].announcement_body.gid))
          );
        }
        ValidateAdjacentEvent(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].announcementGID &&
              Array.isArray(t[0].adjacents) &&
            (0 == t[0].adjacents.length || "string" == typeof t[0].adjacents[0])
          );
        }
        GetPartnerEventChangeCallback(e) {
          let t = this.m_mapEventUpdateCallback.get(e);
          return (
            t ||
              (this.m_mapEventUpdateCallback.set(e, new _.lu()),
              (t = this.m_mapEventUpdateCallback.get(e))),
            t
          );
        }
        GetClanEventGIDs(e) {
          let t = this.m_mapClanToGIDs.get(e.GetAccountID());
          return t || [];
        }
        GetClanEventGIDsForApp(e) {
          let t = this.m_mapAppIDToGIDs.get(e);
          return t || [];
        }
        GetClanEventModel(e) {
          return this.m_mapExistingEvents.get(e);
        }
        BHasClanEventModel(e) {
          return this.m_mapExistingEvents.has(e);
        }
        BHasClanAnnouncementGID(e) {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            const t = this.m_mapAnnouncementBodyToEvent.get(e);
            return !!t && this.BHasClanEventModel(t);
          }
          return !1;
        }
        GetClanEventGIDFromAnnouncementGID(e) {
          return this.m_mapAnnouncementBodyToEvent.get(e);
        }
        GetClanEventFromAnnouncementGID(e) {
          const t = this.m_mapAnnouncementBodyToEvent.get(e);
          return t ? this.m_mapExistingEvents.get(t) : void 0;
        }
        DefaultEventSortFunction(e, t) {
          return e.startTime == t.startTime
            ? (0, g.kd)(e.GID ?? "", t.GID ?? "")
            : (t.startTime ?? 0) - (e.startTime ?? 0);
        }
        RegisterClanEvents(e) {
          if (e)
            for (const t of e) {
              const e = b(t);
              if (!this.m_mapExistingEvents.has(e)) {
                const e = new d.b(t.clan_steamid);
                this.InsertEventModelFromClanEventData(e, t);
              }
            }
        }
        GetRankedClanEvents(e, t) {
          let a = [],
            n = e
              ? this.GetClanEventGIDs(e)
              : t
                ? this.GetClanEventGIDsForApp(t)
                : void 0;
          if (!n || 0 == n.length) return a;
          for (let e of n) {
            let t = this.GetClanEventModel(e);
            t && a.push(t);
          }
          return a.sort(this.DefaultEventSortFunction), a;
        }
        InsertEventModelFromClanEventData(e, t) {
          const a = (function (e, t) {
            let a = new c.lh();
            if (
              ((a.clanSteamID = e),
              (0, h.wT)(
                a.clanSteamID && a.clanSteamID.BIsValid(),
                "Invalid Clan SteamID: " +
                  a.clanSteamID.ConvertTo64BitString() +
                  " " +
                  v.TS.EUNIVERSE,
              ),
              (a.GID = b(t)),
              (a.bOldAnnouncement = E(t)),
              (a.appid = t.appid ?? 0),
              (a.startTime = t.rtime32_start_time),
              (a.endTime = t.rtime32_end_time),
              (a.visibilityStartTime = t.rtime32_visibility_start),
              (a.visibilityEndTime = t.rtime32_visibility_end),
              (a.loadedAllLanguages = !1),
              (a.type = t.event_type ?? 1),
              (a.nVotesUp = t.votes_up ?? 0),
              (a.nVotesDown = t.votes_down ?? 0),
              (a.comment_type = t.comment_type),
              (a.gidfeature = t.gidfeature),
              (a.gidfeature2 = t.gidfeature2),
              (a.featured_app_tagid = t.featured_app_tagid),
              (a.vecTags = new Array()),
              (a.creator_steamid = t.creator_steamid),
              (a.last_update_steamid = t.last_update_steamid),
              (a.rtime32_last_modified = t.rtime32_last_modified),
              (a.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
              (a.video_preview_type = t.video_preview_type),
              (a.video_preview_id = t.video_preview_id),
              (a.has_live_stream = t.has_live_stream),
              (a.live_stream_viewer_count = t.live_stream_viewer_count),
              (a.m_nBuildID = t.build_id),
              (a.m_strBuildBranch = t.build_branch),
              t.announcement_body)
            ) {
              let e = t.announcement_body;
              (a.AnnouncementGID = e.gid),
                a.name.set(e.language, e.headline),
                a.description.set(e.language, e.body),
                a.timestamp_loc_updated.clear(),
                (a.forumTopicGID = e.forum_topic_id),
                (a.nCommentCount = e.commentcount),
                (a.postTime = e.posttime),
                a.bOldAnnouncement && !e.hidden && (a.startTime = e.posttime),
                (a.announcementClanSteamID = new d.b(e.clanid)),
                e.tags &&
                  e.tags.length > 0 &&
                  e.tags.forEach((e) => a.vecTags.push(e)),
                !a.rtime32_last_solr_search_col_updated &&
                  a.rtime32_last_modified &&
                  ((a.rtime32_last_solr_search_col_updated =
                    a.rtime32_last_modified),
                  (a.rtime32_last_modified = e.updatetime));
            } else
              (a.AnnouncementGID = "0"),
                (a.forumTopicGID = t.forum_topic_id),
                a.name.clear(),
                a.description.clear(),
                a.timestamp_loc_updated.clear(),
                (a.postTime = t.rtime32_start_time),
                (a.nCommentCount = t.comment_count ?? 0),
                a.name.set(0, t.event_name ?? ""),
                a.description.set(0, t.event_notes ?? "");
            t.broadcaster_accountid &&
              (a.broadcaster = new d.b(t.broadcaster_accountid));
            const n = c.DJ;
            try {
              a.jsondata = {
                ...n,
                ...(t.jsondata ? JSON.parse(t.jsondata) : void 0),
              };
            } catch (e) {
              const t = (0, p.H)(e);
              throw (
                (console.error(
                  "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                    t.strErrorMsg,
                  t,
                ),
                e)
              );
            }
            if (
              ((a.jsondata.localized_capsule_image = (0, u.$Y)(
                a.jsondata.localized_capsule_image || [],
                31,
                null,
              )),
              (a.jsondata.localized_title_image = (0, u.$Y)(
                a.jsondata.localized_title_image || [],
                31,
                null,
              )),
              (a.jsondata.localized_subtitle = (0, u.$Y)(
                a.jsondata.localized_subtitle || [],
                31,
                null,
              )),
              (a.jsondata.localized_summary = (0, u.$Y)(
                a.jsondata.localized_summary || [],
                31,
                null,
              )),
              (a.jsondata.localized_broadcast_title = (0, u.$Y)(
                a.jsondata.localized_broadcast_title || [],
                31,
                null,
              )),
              (a.jsondata.localized_broadcast_left_image = (0, u.$Y)(
                a.jsondata.localized_broadcast_left_image || [],
                31,
                null,
              )),
              (a.jsondata.localized_broadcast_right_image = (0, u.$Y)(
                a.jsondata.localized_broadcast_right_image || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_header = (0, u.$Y)(
                a.jsondata.localized_sale_header || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_overlay = (0, u.$Y)(
                a.jsondata.localized_sale_overlay || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_product_banner = (0, u.$Y)(
                a.jsondata.localized_sale_product_banner || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_product_mobile_banner = (0, u.$Y)(
                a.jsondata.localized_sale_product_mobile_banner || [],
                31,
                null,
              )),
              (a.jsondata.localized_sale_logo = (0, u.$Y)(
                a.jsondata.localized_sale_logo || [],
                31,
                null,
              )),
              void 0 !== a.jsondata.sale_num_headers &&
                a.jsondata.localized_per_day_sales_header)
            )
              for (let e = 0; e < a.jsondata.sale_num_headers; ++e)
                a.jsondata.localized_per_day_sales_header[e] = (0, u.$Y)(
                  a.jsondata.localized_per_day_sales_header[e],
                  31,
                  null,
                );
            return (
              a.jsondata.sale_sections &&
                a.jsondata.sale_sections.forEach((e, t) => {
                  e.localized_label &&
                    (e.localized_label = (0, u.$Y)(
                      e.localized_label,
                      31,
                      null,
                    )),
                    "trailercarousel" === e.section_type &&
                      (e.show_as_carousel = !1),
                    (a.jsondata.sale_sections[t] = { ...c.G6, ...e });
                }),
              a.jsondata.email_setting &&
                a.jsondata.email_setting.sections &&
                a.jsondata.email_setting.sections.forEach((e) => {
                  void 0 !== e.localized_headline &&
                    null !== e.localized_headline &&
                    (e.localized_headline = (0, u.$Y)(
                      e.localized_headline,
                      31,
                      null,
                    )),
                    void 0 !== e.localized_body &&
                      null !== e.localized_body &&
                      (e.localized_body = (0, u.$Y)(
                        e.localized_body,
                        31,
                        null,
                      )),
                    void 0 !== e.localized_image &&
                      null !== e.localized_image &&
                      (e.localized_image = (0, u.$Y)(
                        e.localized_image,
                        31,
                        null,
                      ));
                }),
              a.jsondata.localized_title_image.forEach((e, t) => {
                if (null != e && "http" == e.substr(0, 4)) {
                  let n = e.lastIndexOf("/"),
                    i = e.substr(n + 1);
                  a.jsondata.localized_title_image[t] = i;
                }
              }),
              t.published
                ? t.unlisted
                  ? (a.visibility_state = c.zv.k_EEventStateUnlisted)
                  : t.hidden
                    ? (a.visibility_state = c.zv.k_EEventStateStaged)
                    : (a.visibility_state = c.zv.k_EEventStateVisible)
                : (a.visibility_state = c.zv.k_EEventStateUnpublished),
              a
            );
          })(e, t);
          return (
            this.InsertUniqueEventGID(e.GetAccountID(), a.appid, a.GID),
            this.m_mapExistingEvents.set(a.GID, a),
            a.AnnouncementGID &&
              a.AnnouncementGID.length > 1 &&
              this.m_mapAnnouncementBodyToEvent.set(a.AnnouncementGID, a.GID),
            (a.bLoaded = !0),
            a
          );
        }
        HelperInitializeNumSalesHeaderArray(e) {
          if ((e.jsondata.sale_num_headers ?? 0) > 1) {
            e.jsondata.localized_per_day_sales_header = [];
            for (let t = 0; t < (e.jsondata.sale_num_headers ?? 0); ++t)
              e.jsondata.localized_per_day_sales_header.push(
                (0, u.$Y)([], 31, null),
              );
            e.m_overrideCurrentDay = 0;
          } else e.m_overrideCurrentDay = void 0;
        }
        GetAllClanEvents(e) {
          let t = new Array();
          return (
            this.m_mapClanToGIDs.has(e.GetAccountID()) &&
              this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
                let a = this.m_mapExistingEvents.get(e);
                a && t.push(a);
              }),
            t
          );
        }
        async QueueLoadPartnerEvent(e, t, a) {
          if (this.m_mapExistingEvents.has(t)) return;
          this.m_rgQueuedEventsClanIDs.push(e),
            this.m_rgQueuedEventsUniqueIDs.push(t),
            this.m_rgQueuedEventsForEditFlags.push(Boolean(a)),
            this.m_PendingInfoPromise ||
              (this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              ));
          const n = this.m_PendingInfoPromise,
            i = () => {
              const e = this.m_PendingInfoResolve,
                t = this.m_rgQueuedEventsClanIDs,
                a = this.m_rgQueuedEventsUniqueIDs,
                n = this.m_rgQueuedEventsForEditFlags;
              (this.m_PendingInfoPromise = void 0),
                (this.m_rgQueuedEventsClanIDs = new Array()),
                (this.m_rgQueuedEventsUniqueIDs = new Array()),
                (this.m_rgQueuedEventsForEditFlags = new Array()),
                this.InternalLoadPartnerEventList(t, a, n).then(() => e?.());
            };
          if (this.m_rgQueuedEventsClanIDs.length >= 30)
            this.m_QueuedEventTimeout.Cancel(), i();
          else if (!this.m_QueuedEventTimeout.IsScheduled()) {
            const e = 50;
            this.m_QueuedEventTimeout.Schedule(e, i);
          }
          return n;
        }
        async InternalLoadPartnerEventList(e, t, a) {
          let n = a.some((e) => e);
          const i =
              v.TS.STORE_BASE_URL +
              (n
                ? "events/ajaxgeteventdetailsforedit/"
                : "events/ajaxgeteventdetails/"),
            r = (0, I.hE)((0, l.sf)(v.TS.LANGUAGE)),
            o = {
              clanid_list: e.join(","),
              uniqueid_list: t.join(","),
              lang_list: r,
              origin: self.origin,
            };
          try {
            const e = await s().get(i, { params: o, withCredentials: n });
            this.RegisterClanEvents(e.data.events);
          } catch (e) {
            let t = (0, p.H)(e);
            console.error("GetEventDetails hit error " + t.strErrorMsg, t);
          }
        }
        async LoadAdjacentPartnerEvents(e, t, a, n, i, s, r) {
          return this.InternalLoadAdjacentPartnerEvents(
            e,
            void 0,
            t,
            a,
            n,
            i,
            s,
            r,
          );
        }
        async LoadAdjacentPartnerEventsByAnnouncement(e, t, a, n, i, s, r) {
          return this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e,
            t,
            a,
            n,
            i,
            s,
            r,
          );
        }
        async LoadAdjacentPartnerEventsByEvent(e, t, a, n, i, s, r) {
          const o = t || e.clanSteamID;
          return e.bOldAnnouncement
            ? this.InternalLoadAdjacentPartnerEvents(
                void 0,
                e.AnnouncementGID,
                o,
                a,
                n,
                i,
                s,
                r,
              )
            : this.InternalLoadAdjacentPartnerEvents(
                e.GID,
                e.AnnouncementGID,
                o,
                a,
                n,
                i,
                s,
                r,
              );
        }
        async InternalLoadAdjacentPartnerEvents(e, t, a, n, i, o, c, m) {
          let u = new Array();
          if (t && this.m_mapAdjacentAnnouncementGIDs.has(t)) {
            let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
              a = new Array();
            if (
              (e?.forEach((e) => {
                if (this.m_mapAnnouncementBodyToEvent.has(e)) {
                  let t = this.m_mapAnnouncementBodyToEvent.get(e);
                  t &&
                    this.m_mapExistingEvents.get(t) &&
                    u.push(this.m_mapExistingEvents.get(t));
                } else a.push(e);
              }),
              a.length > 0)
            ) {
              (
                await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  void 0,
                  a,
                  m,
                )
              ).forEach((e) => u.push(e));
            }
          } else {
            let _ =
              v.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
            const g = (0, I.hE)((0, l.sf)(v.TS.LANGUAGE));
            c?.only_summaries &&
              !this.m_bOnlySummary &&
              ((0, h.wT)(
                this.m_bOnlySummary,
                "Only Summary: Incorrect parameter passed in, unsetting",
              ),
              (c.only_summaries = void 0));
            let y = {
              clan_accountid: a ? a.GetAccountID() : void 0,
              appid: n,
              count_before: i,
              count_after: o,
              gidevent: e,
              gidannouncement: t,
              lang_list: g,
              rtime_oldestevent: c ? c.rtime_oldestevent : void 0,
              require_tags:
                c && c.require_tags ? c.require_tags.join(",") : void 0,
              exclude_tags:
                c && c.exclude_tags ? c.exclude_tags.join(",") : void 0,
              require_no_tags: c ? c.require_no_tags : void 0,
              event_type_filter:
                c && c.event_type_filter
                  ? c.event_type_filter.join(",")
                  : void 0,
              exclude_event_types:
                c && c.exclude_event_types
                  ? c.exclude_event_types.join(",")
                  : void 0,
              only_summaries: c && !!c.only_summaries,
              origin: self.origin,
            };
            try {
              let i = await s().get(_, { params: y, cancelToken: m?.token });
              if (1 == i?.data?.success)
                (0, r.h5)(() => {
                  for (let e of i.data.events) {
                    let t = b(e);
                    if (!this.m_mapExistingEvents.has(t)) {
                      let t = new d.b(e.clan_steamid);
                      this.InsertEventModelFromClanEventData(a || t, e);
                    }
                    u.push(this.m_mapExistingEvents.get(t));
                  }
                  if (0 == u.length)
                    if (e && this.BHasClanEventModel(e))
                      this.m_mapExistingEvents.get(e) &&
                        u.push(this.m_mapExistingEvents.get(e));
                    else if (t && this.BHasClanAnnouncementGID(t)) {
                      const e = this.GetClanEventFromAnnouncementGID(t);
                      e && u.push(e);
                    }
                });
              else {
                let e = (0, p.H)(i?.data);
                console.error(
                  "LoadAdjacentPartnerEvents Success but empty response:" +
                    n +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    e.strErrorMsg,
                  e,
                );
              }
            } catch (e) {
              let t = (0, p.H)(e);
              52 != t.errorCode &&
                console.error(
                  "LoadAdjacentPartnerEvents hit error on appid:" +
                    n +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    t.strErrorMsg,
                  t,
                );
            }
          }
          return u;
        }
        async LoadPartnerEventsPageable(e, t, a = 0, n = 0, i) {
          let o = new Array(),
            l = v.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
            c = {
              clan_accountid: e ? e.GetAccountID() : void 0,
              appid: t,
              offset: a,
              count: n,
              l: v.TS.LANGUAGE,
              origin: self.origin,
              exclude_tags: i && i.length > 0 ? i?.join(",") : void 0,
            };
          try {
            let e = await s().get(l, { params: c });
            (0, r.h5)(() => {
              for (let t of e.data.events) {
                let e = b(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new d.b(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                o.push(this.m_mapExistingEvents.get(e));
              }
            });
          } catch (e) {
            console.error(
              "LoadClanEventInDateRange hit error " + (0, p.H)(e).strErrorMsg,
            );
          }
          return o;
        }
        async GetBestEventsForCurrentUser(e, t, a) {
          let n = new Array(),
            i = {
              l: v.TS.LANGUAGE,
              include_steam_blog: !0,
              filter_to_played_within_days: e,
              include_only_game_updates: t,
            },
            o = v.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
            l = await s().get(o, {
              params: i,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
          if (!l.data?.events) {
            let e = l.data?.err_msg || "";
            throw new Error(
              `GetBestEventsForCurrentUser request failed (${e})`,
            );
          }
          return (
            (0, r.h5)(() => {
              for (let e of l.data.events) {
                let t = b(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new d.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                let a = {
                  nAppPriority: e.nAppPriority,
                  bPossibleTakeOver: e.bPossibleTakeOver,
                  event: this.m_mapExistingEvents.get(t),
                };
                n.push(a);
              }
            }),
            n
          );
        }
        async LoadImportantEventsAroundToday(e, t, a, n, i, o) {
          let l = new Array(),
            c = new Array();
          c.push({ priority: 0, appids: t }),
            a && c.push({ priority: 1, appids: a }),
            n && c.push({ priority: 2, appids: n });
          let m = {
              count: e,
              strAppIDPriority: JSON.stringify({ prioritized_apps: c }),
              filterToEventTypes: o ? o.toString() : "",
              l: v.TS.LANGUAGE,
            },
            u = v.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
            h = await s().get(u, {
              params: m,
              withCredentials: !0,
              cancelToken: i.token,
            });
          return (
            (0, r.h5)(() => {
              for (let e of h.data.events) {
                let t = b(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new d.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                l.push(this.m_mapExistingEvents.get(t));
              }
            }),
            l
          );
        }
        InsertUniqueEventGID(e, t, a) {
          let n = this.m_mapClanToGIDs.get(e);
          n ||
            (this.m_mapClanToGIDs.set(e, new Array()),
            (n = this.m_mapClanToGIDs.get(e)));
          let i = this.m_mapAppIDToGIDs.get(t);
          i ||
            (this.m_mapAppIDToGIDs.set(t, new Array()),
            (i = this.m_mapAppIDToGIDs.get(t))),
            -1 == n.indexOf(a) && (n.push(a), i.push(a));
        }
        ResetModel() {}
        async DeleteClanEvent(e, t) {
          this.m_mapExistingEvents.has(t) &&
            (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
          let a = new URLSearchParams();
          a.append("sessionid", v.TS.SESSIONID),
            a.append("bDelete", "1"),
            a.append("gid", t);
          const n = await s().post(
            v.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/ajaxcreateupdatedeletepartnerevents/",
            a,
          );
          return this.RemoveGIDFromList(e, t), n.data;
        }
        RemoveGIDFromList(e, t) {
          if (
            (this.m_mapExistingEvents.delete(t),
            this.m_mapClanToGIDs.has(e.GetAccountID()))
          ) {
            let a = this.m_mapClanToGIDs.get(e.GetAccountID()),
              n = a.indexOf(t);
            n >= 0 && a.splice(n, 1);
          }
        }
        FlushEventFromCache(e, t) {
          if (e && this.m_mapExistingEvents.has(e)) {
            if (!t) {
              t = this.m_mapExistingEvents.get(e).AnnouncementGID;
            }
            this.m_mapExistingEvents.delete(e);
          }
          if (
            t &&
            (this.m_mapExistingEvents.has(c.cB + t) &&
              this.m_mapExistingEvents.delete(c.cB + t),
            this.m_mapAnnouncementBodyToEvent.has(t))
          ) {
            const e = this.m_mapAnnouncementBodyToEvent.get(t);
            e &&
              this.m_mapExistingEvents.has(e) &&
              this.m_mapExistingEvents.delete(e),
              this.m_mapAnnouncementBodyToEvent.delete(t);
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
          e,
          t,
          a,
          n,
          i,
          r = !1,
        ) {
          let o = (0, I.hE)(r ? 0 : (0, l.sf)(v.TS.LANGUAGE)),
            c = {
              appid: t,
              clan_accountid: e ? e.GetAccountID() : void 0,
              announcement_gid: n,
              event_gid: a,
              lang_list: o,
              last_modified_time: i || 0,
              origin: self.origin,
              for_edit: r,
              only_summary: this.m_bOnlySummary,
            },
            m = null,
            u = null;
          if (r) {
            const a = (0, v.yK)();
            "community" === a
              ? ((u = v.TS.COMMUNITY_BASE_URL),
                (u += e ? "gid/" + e.ConvertTo64BitString() : "ogg/" + t),
                (u += "/"))
              : (u =
                  "partnerweb" === a
                    ? v.TS.PARTNER_BASE_URL + "sales/"
                    : v.TS.STORE_BASE_URL + "events/"),
              (u += "ajaxgetpartnereventforedit"),
              (m = { params: c, withCredentials: !0 });
          } else
            (u = v.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
              (m = { params: c, withCredentials: !1 });
          let p = (await s().get(u, m)).data.event,
            _ = b(p);
          if (
            !this.m_mapExistingEvents.has(_) ||
            (this.m_mapExistingEvents.get(_).rtime32_last_modified ?? 0) <
              (p.rtime32_last_modified ?? 0) ||
            (this.m_mapExistingEvents.get(_).rtime32_moderator_reviewed ?? 0) <
              (p.rtime_mod_reviewed ?? 0)
          ) {
            (0, h.wT)(
              p.clan_steamid,
              "ClanSteamID is missing from data we received",
            );
            let e = new d.b(p.clan_steamid);
            this.InsertEventModelFromClanEventData(e, p);
          }
          return this.m_mapExistingEvents.get(_);
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
          e,
          t,
          a,
          n,
          i,
          s,
        ) {
          if (a && this.m_mapExistingEvents.has(a))
            return this.m_mapExistingEvents.get(a);
          if (n) {
            if (this.m_mapExistingEvents.has(c.cB + n))
              return this.m_mapExistingEvents.get(c.cB + n);
            if (this.m_mapAnnouncementBodyToEvent.has(n)) {
              const e = this.m_mapAnnouncementBodyToEvent.get(n);
              if (e && this.m_mapExistingEvents.has(e))
                return this.m_mapExistingEvents.get(e);
            }
          }
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            t,
            a,
            n,
            i,
            s,
          );
        }
        async LoadPartnerEventFromAnnoucementGID(e, t, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            void 0,
            t,
            a,
          );
        }
        async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, a, n) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            void 0,
            t,
            a,
            n,
          );
        }
        async LoadPartnerEventFromClanEventGID(e, t, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            t,
            void 0,
            a,
          );
        }
        async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, a, n) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            t,
            void 0,
            a,
            n,
          );
        }
        async LoadPartnerEventGeneric(e, t, a, n, i) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            t,
            a,
            n,
            i,
          );
        }
        async LoadHiddenPartnerEvent(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            t,
            void 0,
            0,
            !0,
          );
        }
        async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            void 0,
            t,
            0,
            !0,
          );
        }
        async HintLoadImportantUpdates() {
          const e = (0, o.tB)(36e5);
          if (e != this.m_tsUpdatedAppsQueryTime) {
            this.m_tsUpdatedAppsQueryTime = e;
            const t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
              a = v.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
              n = await s().get(a, { params: t, withCredentials: !0 });
            n.data.apps &&
              n.data.apps.length > 0 &&
              (0, r.h5)(() => {
                const e = new Map(n.data.apps?.map((e) => [e.appid, new w(e)]));
                this.m_mapUpdatedApps = e;
              });
          }
          return this.m_mapUpdatedApps;
        }
        GetAppImportantUpdate(e) {
          return (
            this.HintLoadImportantUpdates().catch((e) => {
              console.log("UpdatedApps failed to load: ", e.response.data);
            }),
            this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
          );
        }
        async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
          let a =
            v.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/announcements/ajaxgetlocalization/" +
            t;
          return (await s().get(a)).data.localization;
        }
        async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, a) {
          const n = new Array(),
            i = v.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
            o = (0, I.hE)((0, l.sf)(v.TS.LANGUAGE));
          let c = null,
            m = null;
          if (e) {
            let t = new Array();
            e.forEach((e) => {
              this.m_mapExistingEvents.has(e)
                ? n.push(this.m_mapExistingEvents.get(e))
                : t.push(e);
            }),
              t.sort(),
              (c = t);
          }
          if (t) {
            let e = new Array();
            t.forEach((t) => {
              if (
                this.m_mapAnnouncementBodyToEvent.has(t) &&
                this.m_mapAnnouncementBodyToEvent.get(t) &&
                this.m_mapExistingEvents.has(
                  this.m_mapAnnouncementBodyToEvent.get(t),
                )
              ) {
                let e = this.m_mapAnnouncementBodyToEvent.get(t);
                if (e) {
                  const t = this.m_mapExistingEvents.get(e);
                  t && n.push(t);
                }
              } else e.push(t);
            }),
              e.sort(),
              (m = e);
          }
          if (!c && !m) return n;
          const u = new Array();
          for (; (c?.length ?? 0) > 0 || (m?.length ?? 0) > 0; ) {
            let e = {
              event_gids:
                (c?.length ?? 0) > 0 ? c?.splice(0, 100).join(",") : void 0,
              announcement_gids:
                (m?.length ?? 0) > 0 ? m?.splice(0, 100).join(",") : void 0,
              lang_list: o,
              origin: self.origin,
            };
            u.push(
              s().get(i, { params: e, cancelToken: a ? a.token : void 0 }),
            );
          }
          try {
            const e = await Promise.all([...u]);
            let t = 0;
            (0, r.h5)(() =>
              e.forEach((e) => {
                if (e && e.data && e.data.events)
                  for (let t of e.data.events) {
                    let e = b(t);
                    if (!this.m_mapExistingEvents.has(e)) {
                      let e = new d.b(t.clan_steamid);
                      this.InsertEventModelFromClanEventData(e, t);
                    }
                    n.push(this.m_mapExistingEvents.get(e));
                  }
                else {
                  const t = (0, p.H)(e);
                  console.error(
                    "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                      t.strErrorMsg,
                    t,
                  );
                }
                t += 1;
              }),
            );
          } catch (e) {
            const t = (0, p.H)(e);
            console.error(
              "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                t.strErrorMsg,
              t,
            );
          }
          return n;
        }
        async SavePartnerEventSaleAssets(e, t, a, n) {
          let i = null;
          if (!this.m_mapExistingEvents.has(t)) return !1;
          try {
            const r = `${v.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
              o = new FormData();
            o.append("sessionid", v.TS.SESSIONID),
              o.append("gidclanevent", t),
              o.append("json", JSON.stringify(a)),
              o.append("pageStyles", JSON.stringify(n));
            const l = await s().post(r, o, { withCredentials: !0 });
            if (1 == l?.data?.success) {
              const e = this.m_mapExistingEvents.get(t);
              if (e && e.jsondata)
                for (const t in a)
                  if (a.hasOwnProperty(t) && a[t]) {
                    const n = t,
                      i = a[n];
                    void 0 !== i && void 0 !== n && (e.jsondata[n] = i);
                  }
              return this.GetPartnerEventChangeCallback(t).Dispatch(e), !0;
            }
            i = (0, p.H)(l);
          } catch (e) {
            i = (0, p.H)(e);
          }
          return (
            console.error(
              "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                i?.strErrorMsg,
              i,
            ),
            !1
          );
        }
        BIsSummaryOnlyStore() {
          return this.m_bOnlySummary;
        }
      }
      (0, n.Cg)([r.sH], S.prototype, "m_mapExistingEvents", void 0),
        (0, n.Cg)([r.sH], S.prototype, "m_mapAnnouncementBodyToEvent", void 0),
        (0, n.Cg)([r.sH], S.prototype, "m_mapClanToGIDs", void 0),
        (0, n.Cg)([r.sH], S.prototype, "m_mapAppIDToGIDs", void 0),
        (0, n.Cg)([r.sH], S.prototype, "m_mapUpdatedApps", void 0),
        (0, n.Cg)([r.XI], S.prototype, "Init", null),
        (0, n.Cg)([f.oI], S.prototype, "GetPartnerEventChangeCallback", null),
        (0, n.Cg)([r.XI], S.prototype, "RegisterClanEvents", null),
        (0, n.Cg)(
          [r.XI],
          S.prototype,
          "InsertEventModelFromClanEventData",
          null,
        ),
        (0, n.Cg)([r.XI], S.prototype, "DeleteClanEvent", null),
        (0, n.Cg)([r.XI], S.prototype, "RemoveGIDFromList", null),
        (0, n.Cg)([r.XI], S.prototype, "FlushEventFromCache", null),
        (0, n.Cg)([f.oI], S.prototype, "SavePartnerEventSaleAssets", null);
      const A = new S();
      window.g_PartnerEventStore = A;
      const T = new S(!0);
      function G(e, t, a = !1) {
        const [n, i] = (0, y.useState)(() => A.GetClanEventModel(t)),
          s = (0, y.useMemo)(() => d.b.InitFromClanID(e), [e]);
        return (
          (0, y.useEffect)(() => {
            !n &&
              e > 0 &&
              (A.Init(),
              A.LoadPartnerEventFromClanEventGIDAndClanSteamID(s, t, 0, a).then(
                i,
              ));
          }, [s, t, n, e, a]),
          (0, f.hL)(a ? A.GetPartnerEventChangeCallback(t) : void 0, i),
          n
        );
      }
      window.g_PartnerEventSummaryStore = T;
    },
    55563: (e, t, a) => {
      "use strict";
      function n(e) {
        return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
      }
      a.d(t, { v: () => n });
    },
    82817: (e, t, a) => {
      "use strict";
      a.d(t, {
        EG: () => s,
        II: () => m,
        Uz: () => c,
        aL: () => l,
        ab: () => i,
        zB: () => d,
      });
      var n = a(3577);
      function i(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg") || t.endsWith(".jpeg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function s(e) {
        switch (e) {
          case 1:
            return ".jpg";
          case 2:
            return ".gif";
          case 3:
            return ".png";
          case 5:
            return ".webm";
          case 4:
            return ".mp4";
          case 7:
            return ".srt";
          case 6:
            return ".vtt";
          case 10:
            return ".webp";
        }
      }
      function r(e) {
        const t = (0, n.x0)(),
          a = new Image();
        return (
          (a.onload = () => t.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              t.resolve(void 0);
          }),
          (a.src = e),
          t.promise
        );
      }
      function o(e) {
        const t = (0, n.x0)(),
          a = document.createElement("video");
        return (
          (a.preload = "metadata"),
          a.addEventListener("loadedmetadata", () => t.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              t.resolve(void 0);
          }),
          (a.src = e),
          t.promise
        );
      }
      function l(e) {
        return e.startsWith("image/");
      }
      function c(e) {
        return e.startsWith("video/");
      }
      async function d(e, t) {
        if (t) return o(URL.createObjectURL(e));
        {
          const t = (0, n.x0)(),
            a = new FileReader();
          (a.onload = () => t.resolve(a.result ?? void 0)),
            (a.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                a.error,
              ),
                t.resolve(void 0);
            }),
            a.readAsDataURL(e);
          const i = await t.promise;
          if (!i) return;
          return r(i.toString());
        }
      }
      function m(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
    },
    75113: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bw: () => A,
        EX: () => f,
        Hx: () => C,
        JP: () => y,
        LJ: () => b,
        OG: () => G,
        PH: () => n,
        T7: () => I,
        qT: () => T,
        tj: () => D,
        yh: () => S,
      });
      var n,
        i = a(90626),
        s = a(92757),
        r = a(89128),
        o = a(45699),
        l = a(81393),
        c = a(78327),
        d = a(16180),
        m = a(55963),
        u = a(61336),
        h = a(60014),
        p = a(26161),
        _ = a(55263);
      !(function (e) {
        (e.k_eView = "view"),
          (e.k_eViewWebSiteHub = "websitehub"),
          (e.k_eCommunityView = "communityview"),
          (e.k_eCommunityEdit = "edit"),
          (e.k_eCommunityEditBroadcast = "editBroadcast"),
          (e.k_eCommunityAdminPage = "admin"),
          (e.k_eCommunityPublish = "publish"),
          (e.k_eCommunityMigrate = "migrate"),
          (e.k_eCommunityPreview = "preview"),
          (e.k_eCommunityPreviewSale = "previewsale"),
          (e.k_eCommunityAnnouncementHub = "community_announcehub"),
          (e.k_eStoreView = "storeview"),
          (e.k_eStoreNewsHub = "newshub"),
          (e.k_eStoreOwnerPage = "store"),
          (e.k_eStoreSalePage = "sale"),
          (e.k_eStoreUsersNewsHub = "usernewshub");
      })(n || (n = {}));
      const g =
        /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
      function v(e, t) {
        if (!t) return !1;
        const a = "store" === (0, c.yK)(),
          i = (function (e) {
            const t = e.match(g);
            return t?.[1];
          })(window.location.href),
          s = a && "news" == i,
          r = 36 == t.GetEventType(),
          o = "community" === (0, c.yK)(),
          d = t.appid ? "games" : "groups",
          m =
            o &&
            d == i &&
            ((t.appid && t.appid === c.UF.APPID) ||
              (!t.appid &&
                t.clanSteamID.GetAccountID() === c.UF.CLANACCOUNTID));
        switch (e) {
          case n.k_eView:
            return m || s;
          case n.k_eCommunityView:
          case n.k_eCommunityEdit:
          case n.k_eCommunityEditBroadcast:
          case n.k_eCommunityPublish:
          case n.k_eCommunityMigrate:
          case n.k_eCommunityPreview:
          case n.k_eCommunityPreviewSale:
          case n.k_eCommunityAnnouncementHub:
            return m;
          case n.k_eCommunityAdminPage:
            return !r && m;
          case n.k_eViewWebSiteHub:
            return m || s;
          case n.k_eStoreView:
          case n.k_eStoreNewsHub:
          case n.k_eStoreOwnerPage:
          case n.k_eStoreUsersNewsHub:
            return s;
          case n.k_eStoreSalePage:
            return !1;
          default:
            return (0, l.wT)(!1, "Unknown route specified for link: " + e), !1;
        }
      }
      function y(e) {
        const t =
          c.TS.COMMUNITY_BASE_URL +
          "gid/" +
          e.clanSteamID.ConvertTo64BitString() +
          "/announcements/share/" +
          e.AnnouncementGID;
        return {
          strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
          strTwitterUrl: t + "?site=twitter",
          strRedditUrl: t + "?site=reddit",
        };
      }
      function f(e) {
        return w(e, n.k_eStoreSalePage, "absolute");
      }
      function I(e) {
        return w(e, n.k_eStoreView, "absolute");
      }
      function E(e, t, a) {
        if (a)
          return (
            (e ? "/games/" + c.UF.VANITY_ID : "/groups/" + c.UF.VANITY_ID) + "/"
          );
        const n = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return c.TS.COMMUNITY_BASE_URL + n + "/";
      }
      function b() {
        return "news";
      }
      function w(e, t, a) {
        const [n] = (0, _.t7)(e?.appid, { include_basic_info: !0 });
        if (e) return S(e, n, t, a);
      }
      function S(e, t, a, i) {
        const s = "relative" === i,
          o = "community" === (0, c.yK)(),
          d = s ? "/" : c.TS.STORE_BASE_URL,
          m = E(e.appid, e.clanSteamID, s);
        a === n.k_eView
          ? (a = o ? n.k_eCommunityView : n.k_eStoreView)
          : a === n.k_eViewWebSiteHub &&
            (a = o ? n.k_eCommunityAnnouncementHub : n.k_eStoreNewsHub);
        const u = e.GID ? e.GID : "",
          h = e.AnnouncementGID ? e.AnnouncementGID : "",
          _ =
            e.BIsOGGEvent() &&
            e.appid &&
            t &&
            e.BHasSaleUpdateLandingPageVanity(),
          g = 36 == e.GetEventType();
        switch (a) {
          case n.k_eCommunityPublish:
            return (
              m +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + h
                : "partnerevents/publish/" + u + "?tab=publishing")
            );
          case n.k_eCommunityEdit:
            return (
              m +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + h
                : "partnerevents/edit/" + u)
            );
          case n.k_eCommunityEditBroadcast:
            return (
              m +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + h
                : "partnerevents/edit/" + u) +
              "?tab=broadcast"
            );
          case n.k_eCommunityMigrate:
            return m + "partnerevents/migrate_announcement/" + h;
          case n.k_eCommunityPreview:
            return g
              ? m + "partnerevents/previewsale/" + u
              : m +
                  (e.bOldAnnouncement
                    ? "partnerevents/preview_old_announcement/" + h
                    : "partnerevents/preview/" + u);
          case n.k_eCommunityPreviewSale:
            return m + "partnerevents/previewsale/" + u;
          case n.k_eCommunityAdminPage:
            return g
              ? `${d}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
              : m + "partnerevents";
          case n.k_eCommunityAnnouncementHub:
            return m + "announcements";
          case n.k_eStoreNewsHub:
            return (
              d +
              `news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}`
            );
          case n.k_eStoreOwnerPage:
            return (
              d +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case n.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? e.clanSteamID.GetAccountID() == r.wv
                ? `${d}charts/topnewreleases/${e.jsondata.sale_vanity_id}`
                : e.clanSteamID.GetAccountID() == r.yT
                  ? `${d}charts/bestofyear/${e.jsondata.sale_vanity_id}`
                  : _
                    ? `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`
                    : g
                      ? `${d}curator/${e.clanSteamID.GetAccountID()}`
                      : d +
                        (e.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath
                          ? "sale/"
                          : "curator/" +
                            e.clanSteamID.GetAccountID() +
                            "/sale/") +
                        e.jsondata.sale_vanity_id
              : d;
          case n.k_eCommunityView:
            return m + "announcements/detail/" + h;
          case n.k_eStoreView:
            if (e.clanSteamID.GetAccountID() == (0, p.H)())
              return `${c.TS.STORE_BASE_URL}meetsteam/${u}`;
            if (_)
              return `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`;
            if (g) return `${d}curator/${e.clanSteamID.GetAccountID()}`;
            return `${d}news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}/${e.bOldAnnouncement ? `old_view/${h}` : `view/${u}`}`;
          case n.k_eStoreUsersNewsHub:
            return `${d}news/`;
          default:
            return (0, l.wT)(!1, "Unknown route specified for link"), "";
        }
      }
      function A(e, t, a) {
        return w(
          e,
          t,
          "forceAbsolute" === a || !v(t, e) ? "absolute" : "relative",
        );
      }
      function T(e, t, a, n) {
        return S(
          e,
          t,
          a,
          "forceAbsolute" === n || !v(a, e) ? "absolute" : "relative",
        );
      }
      function G(e) {
        const { eventModel: t, route: a, bPopup: n = !0 } = e,
          r = v(a, t),
          o = w(t, a, r ? "relative" : "absolute");
        return (
          i.useEffect(() => {
            n ? window.open(o) : window.location.assign(o);
          }, [n, o]),
          r ? i.createElement(s.rd, { push: !0, to: o }) : null
        );
      }
      function C(e, t, a) {
        const n = E(e, t, !1);
        return "admin" === a ? n + "partnerevents" : "";
      }
      function D(e) {
        const { eventModel: t, preferredFocus: a } = e,
          { bCanUseLink: n } = i.useContext(d.I),
          r = (0, h.n9)(),
          l = (0, s.W6)(),
          c = n && v(e.route, t),
          p = w(t, e.route, c ? "relative" : "absolute"),
          _ = !c && p ? (0, u.NT)(p) : p,
          g = c || !_ ? _ : (0, m.wJ)(_, r);
        return t
          ? c
            ? i.createElement(
                o.Ii,
                {
                  style: e.style,
                  className: e.className,
                  href: l.createHref({ pathname: g }),
                  onClick: (t) => {
                    e.onClick?.(t), l.push(g), t.preventDefault();
                  },
                  preferredFocus: a,
                },
                e.children,
              )
            : i.createElement(
                o.Ii,
                {
                  href: g,
                  style: e.style,
                  className: e.className,
                  onClick: e.onClick,
                  preferredFocus: a,
                },
                e.children,
              )
          : null;
      }
    },
    81416: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => _ });
      var n,
        i = a(34629),
        s = a(90626),
        r = a(84933),
        o = a(75844),
        l = a(6144),
        c = a(61859),
        d = a(53835),
        m = a(12155),
        u = a(81315),
        h = a.n(u),
        p = a(25489);
      !(function (e) {
        (e.topleft = "topleft"),
          (e.top = "top"),
          (e.topright = "topright"),
          (e.left = "left"),
          (e.middle = "middle"),
          (e.right = "right"),
          (e.bottomleft = "bottomleft"),
          (e.bottom = "bottom"),
          (e.bottomright = "bottomright");
      })(n || (n = {}));
      let _ = class extends s.Component {
        m_rectLinkRegion;
        m_elLinkRegionBox;
        m_nLocalOffsetXPct;
        m_nLocalOffsetYPct;
        m_fnMouseUp = null;
        m_fnMouseMove = null;
        m_listeners = new l.Ji();
        m_strDescription = "";
        m_aspectRatio = 1;
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
        constructor(e) {
          super(e),
            (this.state = {
              curLeftPosPct: this.props.xPosPct,
              curTopPosPct: this.props.yPosPct,
              curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
              curBottomPosPct:
                100 - (this.props.yPosPct + this.props.heightPct),
              curWidthPct: this.props.widthPct,
              curHeightPct: this.props.heightPct,
              EdgeDown: void 0,
              text_link_url: this.props.link_url,
              text_link_description: this.props.link_description,
              bEditingLink: !1,
              valid_link: this.validateUrl(this.props.link_url),
            }),
            (this.m_strDescription = this.props.link_description ?? ""),
            (this.m_aspectRatio =
              this.props.heightPct > 0 && this.props.widthPct > 0
                ? this.props.widthPct / this.props.heightPct
                : 1);
        }
        LinkRegionBoxRef(e) {
          this.m_elLinkRegionBox = e;
        }
        OnMouseDown(e, t) {
          this.m_elLinkRegionBox?.parentElement &&
            this.m_elLinkRegionBox.ownerDocument.defaultView &&
            ((this.m_fnMouseUp = (e) => {
              this.OnMouseUp(e, t);
            }),
            (this.m_fnMouseMove = (e) => {
              this.OnMouseMove(e, t);
            }),
            this.setState({ EdgeDown: t }),
            (this.m_rectLinkRegion =
              this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
            (this.m_nLocalOffsetXPct =
              ((e.clientX - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
              this.state.curLeftPosPct),
            (this.m_nLocalOffsetYPct =
              ((e.clientY - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
              this.state.curTopPosPct),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mousemove",
              this.m_fnMouseMove,
            ),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mouseup",
              this.m_fnMouseUp,
            )),
            e.preventDefault(),
            e.stopPropagation();
        }
        OnMouseMove(e, t) {
          if (void 0 !== this.state.EdgeDown) {
            switch ((e.shiftKey && this.m_fnMouseUp(), t)) {
              case n.left:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case n.right:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case n.top:
                this.UpdateState({ curTopPosPct: this.CalcTopEdge(e.clientY) });
                break;
              case n.bottom:
                this.UpdateState({
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case n.topleft:
                this.UpdateState({
                  curTopPosPct: this.CalcBottomEdge(e.clientY),
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case n.topright:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(e.clientY),
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case n.bottomleft:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case n.bottomright:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case n.middle: {
                const t = (0, p.OQ)(
                    this.CalcLeftEdge(e.clientX),
                    0,
                    100 - this.state.curWidthPct,
                  ),
                  a = 100 - (t + this.state.curWidthPct),
                  n = (0, p.OQ)(
                    this.CalcTopEdge(e.clientY),
                    0,
                    100 - this.state.curHeightPct,
                  ),
                  i = {
                    curLeftPosPct: t,
                    curRightPosPct: a,
                    curTopPosPct: n,
                    curBottomPosPct: 100 - (n + this.state.curHeightPct),
                  };
                this.setState(i);
                break;
              }
            }
            e.preventDefault(), e.stopPropagation();
          }
        }
        IsValidPct(e) {
          return e >= 0 && e <= 100;
        }
        UpdateState(e) {
          let t =
              void 0 !== e.curTopPosPct
                ? e.curTopPosPct
                : this.state.curTopPosPct,
            a =
              void 0 !== e.curBottomPosPct
                ? e.curBottomPosPct
                : this.state.curBottomPosPct,
            n =
              void 0 !== e.curLeftPosPct
                ? e.curLeftPosPct
                : this.state.curLeftPosPct,
            i =
              void 0 !== e.curRightPosPct
                ? e.curRightPosPct
                : this.state.curRightPosPct,
            s = (0, p.OQ)(
              100 - i - n,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100,
            ),
            r = (0, p.OQ)(
              100 - a - t,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100,
            );
          this.props.bLockAspectRatio &&
            (void 0 !== e.curLeftPosPct || void 0 !== e.curRightPosPct
              ? (r = s / this.m_aspectRatio)
              : (s = r * this.m_aspectRatio)),
            void 0 !== e.curLeftPosPct
              ? (n = 100 - i - s)
              : (i = 100 - (n + s)),
            void 0 !== e.curTopPosPct ? (t = 100 - a - r) : (a = 100 - (t + r));
          const o = 100 - i - n,
            l = 100 - a - t;
          this.IsValidPct(n) &&
            this.IsValidPct(i) &&
            this.IsValidPct(t) &&
            this.IsValidPct(a) &&
            this.IsValidPct(o) &&
            this.IsValidPct(l) &&
            this.setState({
              curLeftPosPct: n,
              curRightPosPct: i,
              curTopPosPct: t,
              curBottomPosPct: a,
            });
        }
        GetXPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
                (this.m_nLocalOffsetXPct ?? 0)
            : 0;
        }
        GetYPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
                (this.m_nLocalOffsetYPct ?? 0)
            : 0;
        }
        CalcLeftEdge(e) {
          return (0, p.OQ)(this.GetXPercent(e), 0, 100);
        }
        CalcRightEdge(e) {
          return (0, p.OQ)(
            100 - (this.GetXPercent(e) + this.state.curWidthPct),
            0,
            100,
          );
        }
        CalcTopEdge(e) {
          return (0, p.OQ)(this.GetYPercent(e), 0, 100);
        }
        CalcBottomEdge(e) {
          return (0, p.OQ)(
            100 - (this.GetYPercent(e) + this.state.curHeightPct),
            0,
            100,
          );
        }
        OnMouseUp(e, t) {
          this.setState({
            curWidthPct:
              100 - this.state.curRightPosPct - this.state.curLeftPosPct,
          }),
            this.setState({
              curHeightPct:
                100 - this.state.curBottomPosPct - this.state.curTopPosPct,
            }),
            this.setState({ EdgeDown: void 0 }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            }),
            this.m_listeners.Unregister();
        }
        async HandleDelete() {
          this.props.deleteFn && this.props.deleteFn(this.props.index);
        }
        OnSetLinkURLChange(e) {
          this.setState({
            text_link_url: e.target.value,
            valid_link: this.validateUrl(e.target.value),
          });
        }
        OnSetLinkDescriptionChange(e) {
          this.setState({ text_link_description: e.target.value });
        }
        validateUrl(e) {
          return (
            null != e &&
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
              e,
            )
          );
        }
        OnSaveLink() {
          (this.m_strDescription = this.state.text_link_description ?? ""),
            this.setState({ bEditingLink: !this.state.bEditingLink }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            });
        }
        OnEditLink() {
          this.setState({ bEditingLink: !this.state.bEditingLink });
        }
        render() {
          let e = {
              left: this.state.curLeftPosPct + "%",
              top: this.state.curTopPosPct + "%",
              right: this.state.curRightPosPct + "%",
              bottom: this.state.curBottomPosPct + "%",
            },
            t = h().LinkRegionDragBox;
          return (
            null != this.state.EdgeDown &&
              (t += ` ${h().EdgeDown} ` + h()[this.state.EdgeDown]),
            s.createElement(
              "div",
              {
                className: t,
                style: e,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
              },
              s.createElement(
                "div",
                { className: h().LinkRegionGridBox },
                s.createElement("div", {
                  className: `${h().LinkRegionEdge} ${h().TopLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, n.topleft);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${h().LinkRegionEdge} ${h().Top}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, n.top);
                  },
                }),
                s.createElement("div", {
                  className: `${h().LinkRegionEdge} ${h().TopRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, n.topright);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${h().LinkRegionEdge} ${h().Left}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, n.left);
                  },
                  draggable: !1,
                }),
                s.createElement(
                  "div",
                  {
                    className: `${h().LinkRegionEdge} ${h().Middle}`,
                    onMouseDown: (e) => {
                      this.OnMouseDown(e, n.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    s.createElement(
                      "div",
                      {
                        className: h().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      s.createElement(m.sED, null),
                    ),
                  !this.props.bDisableLink &&
                    s.createElement(
                      "div",
                      {
                        className: h().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      s.createElement(m.xv8, null),
                    ),
                  s.createElement(
                    "div",
                    { className: h().LinkText },
                    " ",
                    this.m_strDescription,
                    " ",
                  ),
                ),
                s.createElement("div", {
                  className: `${h().LinkRegionEdge} ${h().Right}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, n.right);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${h().LinkRegionEdge} ${h().BottomLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, n.bottomleft);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${h().LinkRegionEdge} ${h().Bottom}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, n.bottom);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${h().LinkRegionEdge} ${h().BottomRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, n.bottomright);
                  },
                  draggable: !1,
                }),
              ),
              this.state.bEditingLink &&
                s.createElement(
                  "div",
                  { className: h().LinkRegionInfo },
                  s.createElement(d.pd, {
                    className: h().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, c.we)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  s.createElement(d.pd, {
                    className: h().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, c.we)("#SteamTV_LinkDescription"),
                    placeholder: (0, c.we)(
                      "#SteamTV_LinkDescription_Placeholder",
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  s.createElement(
                    "div",
                    { className: h().LinkRegionButtonContainer },
                    s.createElement(
                      d.$n,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, c.we)("#Button_OK"),
                      " ",
                    ),
                    s.createElement(
                      d.$n,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, c.we)("#Button_Cancel"),
                    ),
                  ),
                ),
            )
          );
        }
      };
      (0, i.Cg)([r.oI], _.prototype, "LinkRegionBoxRef", null),
        (0, i.Cg)([r.oI], _.prototype, "OnMouseDown", null),
        (0, i.Cg)([r.oI], _.prototype, "OnMouseMove", null),
        (0, i.Cg)([r.oI], _.prototype, "OnMouseUp", null),
        (0, i.Cg)([r.oI], _.prototype, "HandleDelete", null),
        (0, i.Cg)([r.oI], _.prototype, "OnSetLinkURLChange", null),
        (0, i.Cg)([r.oI], _.prototype, "OnSetLinkDescriptionChange", null),
        (0, i.Cg)([r.oI], _.prototype, "OnSaveLink", null),
        (0, i.Cg)([r.oI], _.prototype, "OnEditLink", null),
        (_ = (0, i.Cg)([o.PA], _));
    },
    66331: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => p, t: () => _ });
      var n = a(34629),
        i = a(90626),
        s = a(73744),
        r = a(53835),
        o = a(81416),
        l = a(51706),
        c = a(52038),
        d = a(61859),
        m = a(84933),
        u = a(50666),
        h = a(56011);
      class p extends i.Component {
        state = {
          region: {
            xPosPct: 0,
            yPosPct: 0,
            widthPct: (this.GetDestWidth() / this.props.uploadFile.width) * 100,
            heightPct:
              (this.GetDestHeight() / this.props.uploadFile.height) * 100,
          },
        };
        async OnCrop() {
          const e = this.props.uploadFile.GetCanvasImageSource();
          e &&
            (await (async function (e, t, a, n, i, s, r, o, l) {
              return new Promise((c, d) => {
                const m = _(l);
                if (!m) return void d("Invalid format provided");
                const u = document.createElement("canvas");
                (u.width = r), (u.height = o);
                const p = 0,
                  g = 0,
                  v = u.getContext("2d");
                v?.drawImage(t, a, n, i, s, p, g, r, o),
                  u.toBlob((t) => {
                    const a = u.toDataURL(m);
                    3 !== l && a.startsWith("data:image/png")
                      ? d("Unable to encode into the requested file format")
                      : t
                        ? ((e.file = (0, h.pE)(t, e.filename)),
                          (e.width = r),
                          (e.height = o),
                          (e.dataUrl = a),
                          (e.uploadTime = Date.now()),
                          (e.bCropped = !0),
                          c())
                        : d("Unable to apply crop into image");
                  });
              });
            })(
              this.props.uploadFile,
              e,
              (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
              (this.state.region.yPosPct / 100) * this.props.uploadFile.height,
              (this.state.region.widthPct / 100) * this.props.uploadFile.width,
              (this.state.region.heightPct / 100) *
                this.props.uploadFile.height,
              this.GetDestWidth(),
              this.GetDestHeight(),
              this.props.fileType,
            )),
            this.props.closeModal?.();
        }
        UpdateCrop(e, t) {
          this.setState({ region: t });
        }
        GetDestWidth() {
          const { uploadFile: e, forceResolution: t } = this.props;
          if (t) return t.width;
          const a = e.GetCurrentImageOption();
          if (!a) return 0;
          const n = s.Fj[a.artworkType].width;
          return a ? (0, s.qj)(n) : 0;
        }
        GetDestHeight() {
          const { uploadFile: e, forceResolution: t } = this.props;
          if (t) return t.width;
          const a = e.GetCurrentImageOption();
          if (!a) return 0;
          const n = s.Fj[a.artworkType].height;
          return a ? (0, s.qj)(n) : 0;
        }
        GetLargestBoxThatFits(e, t, a, n) {
          let i = a,
            s = (i * t) / Math.max(e, 1);
          return (
            s > n && ((s = n), (i = (s * e) / Math.max(t, 1))),
            { width: i, height: s }
          );
        }
        GetPreviewWindowStyle() {
          const { region: e } = this.state,
            t = this.GetLargestBoxThatFits(
              this.GetDestWidth(),
              this.GetDestHeight(),
              500,
              150,
            ),
            a = t.width,
            n = t.height,
            i = 1 / Math.max(e.widthPct / 100, 1e-4),
            s = 1 / Math.max(e.heightPct / 100, 1e-4),
            r = (this.props.uploadFile.width * e.xPosPct) / 100,
            o = (this.props.uploadFile.height * e.yPosPct) / 100;
          return {
            width: a,
            height: n,
            backgroundPosition: `${-r * ((a * i) / this.props.uploadFile.width)}px ${-o * ((n * s) / this.props.uploadFile.height)}px`,
            backgroundSize: `${100 * i}% ${100 * s}%`,
            backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
          };
        }
        render() {
          const e = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
            t = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            a = this.GetLargestBoxThatFits(
              this.props.uploadFile.width,
              this.props.uploadFile.height,
              800,
              500,
            );
          return i.createElement(
            l.x_,
            {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
            },
            i.createElement(
              "div",
              {
                className: (0, c.A)("DialogContent", "_DialogCenterVertically"),
              },
              i.createElement(
                r.iK,
                null,
                (0, d.we)(
                  "#ImageUpload_CropModalTitleDims",
                  this.GetDestWidth(),
                  this.GetDestHeight(),
                ),
              ),
              i.createElement(
                "div",
                { className: (0, c.A)("DialogBodyText") },
                (0, d.we)("#ImageUpload_CropModalDescription"),
              ),
              i.createElement(
                "div",
                {
                  className: u.CropImage,
                  style: { width: a.width, height: a.height },
                },
                i.createElement("img", {
                  style: {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                i.createElement(o.I, {
                  bLockAspectRatio: !0,
                  bDisableLink: !0,
                  index: 0,
                  updateFn: this.UpdateCrop,
                  xPosPct: 0,
                  yPosPct: 0,
                  widthMinPct: e,
                  heightMinPct: t,
                  widthPct: e,
                  heightPct: t,
                }),
              ),
              i.createElement(
                "div",
                { className: u.CropPreviewGroup },
                i.createElement(
                  "div",
                  { className: u.CropPreviewLabel },
                  (0, d.we)("#ImageUpload_CropPreview"),
                ),
                i.createElement("div", { style: this.GetPreviewWindowStyle() }),
              ),
              i.createElement(
                r.jn,
                { onClick: this.OnCrop },
                (0, d.we)("#ImageUpload_CropAndContinue"),
              ),
            ),
          );
        }
      }
      function _(e) {
        switch (e) {
          case 3:
            return "image/png";
          case 1:
            return "image/jpeg";
        }
      }
      (0, n.Cg)([m.oI], p.prototype, "OnCrop", null),
        (0, n.Cg)([m.oI], p.prototype, "UpdateCrop", null);
    },
    27543: (e, t, a) => {
      "use strict";
      a.d(t, { JS: () => i, rG: () => s });
      var n = a(61859);
      function i(e) {
        switch (e) {
          case 29:
          case 27:
          case 2:
          case 4:
          case 5:
          case 6:
          case 8:
          case 7:
          case 9:
          case 11:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
          case 35:
          case 25:
          case 26:
          case 31:
          case 32:
          case 1:
          case 34:
            return !0;
        }
        return !1;
      }
      function s(e) {
        let t = "#PartnerEvent_" + e,
          a = (0, n.we)(t);
        return a != t ? a : (0, n.we)("#PartnerEvent_Other");
      }
    },
  },
]);

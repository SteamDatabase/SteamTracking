/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4040],
  {
    24174: (e, t, s) => {
      s.d(t, {
        Z6: () => c,
        p8: () => v,
        NO: () => f,
        UC: () => I,
        A1: () => g,
        pA: () => p,
        yp: () => d,
        iP: () => m,
      });
      var r,
        i = s(89526),
        n = s(75457),
        a = s(32765),
        o = s(4116);
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.TEXT = 1)] = "TEXT"),
          (e[(e.OPENTAG = 2)] = "OPENTAG"),
          (e[(e.CLOSETAG = 3)] = "CLOSETAG");
      })(r || (r = {}));
      class l {
        constructor() {
          (this.type = r.UNKNOWN), (this.text = "");
        }
        ConvertMalformedNodeToText() {
          this.type == r.CLOSETAG
            ? (this.text = "[/" + this.text)
            : this.type == r.OPENTAG && (this.text = "[" + this.text),
            (this.type = r.TEXT);
        }
      }
      class u {
        constructor(e, t) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, s = !1) {
          const i = (function (e, t) {
            const s = [];
            let i = new l(),
              n = !1,
              a = !1,
              o = !1;
            for (let l = 0; l < e.length; l++) {
              let u = e[l];
              switch (i.type) {
                case r.UNKNOWN:
                  "[" == u
                    ? ((i.type = r.OPENTAG), (a = !0))
                    : ((i.type = r.TEXT),
                      "\\" == u && t ? (n = !n) : (i.text += u));
                  break;
                case r.OPENTAG:
                case r.CLOSETAG:
                  if ("/" == u && a)
                    (i.type = r.CLOSETAG), (i.text = ""), (a = !1);
                  else if ("[" != u || n)
                    if ("]" != u || n)
                      "\\" == u && t
                        ? ((i.text += u), (n = !n), (a = !1))
                        : ((i.text += u), (n = !1), (a = !1));
                    else {
                      const e =
                          i.type == r.OPENTAG &&
                          "noparse" == i.text.toLocaleLowerCase(),
                        t =
                          i.type == r.CLOSETAG &&
                          "noparse" == i.text.toLocaleLowerCase();
                      a || (o && !t)
                        ? (i.ConvertMalformedNodeToText(), (i.text += u))
                        : e
                        ? (o = !0)
                        : t && (o = !1),
                        (i = _(s, i)),
                        (a = !1);
                    }
                  else
                    i.ConvertMalformedNodeToText(),
                      (i = _(s, i, r.OPENTAG)),
                      (a = !0);
                  break;
                case r.TEXT:
                  "[" != u || n
                    ? "\\" == u && t
                      ? (n && (i.text += u), (n = !n))
                      : ((i.text += u), (n = !1))
                    : ((i = _(s, i, r.OPENTAG)), (a = !0));
              }
            }
            i.type != r.UNKNOWN &&
              ((i.type != r.OPENTAG && i.type != r.CLOSETAG) ||
                i.ConvertMalformedNodeToText(),
              s.push(i));
            return s;
          })(e, s);
          return this.Parse_BuildElements(i, t);
        }
        Parse_BuildElements(e, t) {
          let s = this.m_fnAccumulatorFactory(void 0),
            i = [],
            n = function () {
              return i.length < 1 ? void 0 : i[i.length - 1];
            },
            a = this.m_dictComponents,
            o = !1,
            l = !0,
            u = function (e, r, n) {
              if (e && e.node.tag === r.text && a.get(e.node.tag)) {
                const r = a.get(e.node.tag),
                  n = i.map((e) => e.node.tag),
                  u = { parentTags: n, tagname: e.node.tag, args: e.node.args },
                  _ = t(r.Constructor, u, ...s.GetElements());
                (s = e.accumulator),
                  s.AppendNode(_),
                  (o = r.skipFollowingNewline),
                  (l = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  s.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + r.text + "]", !1),
                  (s = t),
                  (l = e.bWrapTextForCopying);
              }
            };
          for (
            e.forEach((e, t) => {
              var _, c;
              if (e.type == r.TEXT) {
                const t = o ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                s.AppendText(t, l), (o = !1);
              } else if (e.type == r.OPENTAG) {
                const t = a.get(e.tag);
                if (t) {
                  const r = n();
                  if (void 0 !== r) {
                    const t = a.get(r.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === r.node.tag &&
                      u(i.pop(), r.node);
                  }
                  i.push({ accumulator: s, node: e, bWrapTextForCopying: l }),
                    (s = this.m_fnAccumulatorFactory(e)),
                    (o = t.skipInternalNewline),
                    (l =
                      null !== (_ = t.allowWrapTextForCopying) &&
                      void 0 !== _ &&
                      _);
                } else s.AppendText("[" + e.text + "]", 0 == i.length);
              } else if (e.type == r.CLOSETAG) {
                for (
                  ;
                  n() &&
                  n().node.tag !== e.text &&
                  a.get(n().node.tag) &&
                  a.get(n().node.tag).autocloses;

                ) {
                  const e = i.pop();
                  u(e, e.node);
                }
                if (
                  (null === (c = n()) || void 0 === c ? void 0 : c.node.tag) ==
                  e.text
                ) {
                  const t = i.pop();
                  u(t, e);
                } else s.AppendText("[/" + e.text + "]", 0 == i.length);
              }
            });
            i.length > 0;

          ) {
            let e = i.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              s.GetElements().forEach((e) => t.AppendNode(e)),
              (s = t);
          }
          return s.GetElements();
        }
      }
      function _(e, t, s = r.UNKNOWN) {
        if (t.type == r.OPENTAG) {
          let e = t.text.indexOf("="),
            s = t.text.indexOf(" ");
          if ((-1 != s && (-1 == e || s < e) && (e = s), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            let s = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              let t,
                s = {},
                r = "",
                i = "";
              !(function (e) {
                (e[(e.PRE_NAME = 0)] = "PRE_NAME"),
                  (e[(e.IN_NAME = 1)] = "IN_NAME"),
                  (e[(e.POST_NAME = 2)] = "POST_NAME"),
                  (e[(e.IN_VALUE = 3)] = "IN_VALUE"),
                  (e[(e.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
              })(t || (t = {}));
              let n = t.PRE_NAME,
                a = 0;
              "=" == e[0] && (n = t.POST_NAME);
              let o = !1;
              for (a++; a < e.length; a++) {
                let l = e[a],
                  u = !0,
                  _ = !1;
                switch (n) {
                  case t.PRE_NAME:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    n = t.IN_NAME;
                    break;
                  case t.IN_NAME:
                    ("=" != l && " " != l) ||
                      o ||
                      (" " == l
                        ? ((n = t.PRE_NAME), (_ = !0))
                        : (n = t.POST_NAME),
                      (u = !1));
                    break;
                  case t.POST_NAME:
                    " " == l
                      ? ((n = t.PRE_NAME), (u = !1), (_ = !0))
                      : '"' == l
                      ? ((n = t.IN_QUOTED_VALUE), (u = !1))
                      : (n = t.IN_VALUE);
                    break;
                  case t.IN_VALUE:
                  case t.IN_QUOTED_VALUE:
                    ((" " == l && n != t.IN_QUOTED_VALUE && !o) ||
                      ('"' == l && n == t.IN_QUOTED_VALUE && !o)) &&
                      ((n = t.PRE_NAME), (u = !1), (_ = !0));
                }
                if (u)
                  if ("\\" != l || o)
                    if (((o = !1), n == t.IN_NAME)) r += l;
                    else {
                      if (n != t.IN_VALUE && n != t.IN_QUOTED_VALUE)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + n,
                        );
                      i += l;
                    }
                  else o = !0;
                _ && ((s[r] = i), (r = ""), (i = ""));
              }
              n != t.PRE_NAME && (s[r] = i);
              return s;
            })(s);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let i = new l();
        return (i.type = s), i;
      }
      class c extends u {
        constructor(e, t, s) {
          super(e, null != t ? t : () => new o.LT()),
            (this.m_renderingLanguage = s || (0, n.jM)(a.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, n.jM)(a.De.LANGUAGE);
        }
        ParseBBCode(e, t, s = !1) {
          let r = 0;
          const n = this.Parse(
            e,
            (e, s, ...n) =>
              i.createElement(
                e,
                Object.assign(Object.assign({}, s), {
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + r++,
                }),
                ...n,
              ),
            s,
          );
          return n.length > 1
            ? i.createElement(i.Fragment, null, ...n)
            : 1 == n.length
            ? n[0]
            : null;
        }
      }
      const d = [
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
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
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
        ],
        m = [
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
        h = [
          "img",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ],
        p = d.filter((e) => -1 == h.indexOf(e)),
        g = "{STEAM_CLAN_IMAGE}",
        I = "{STEAM_CLAN_LOC_IMAGE}";
      function v(e, t = null, s = " ") {
        let r = null == t ? void 0 : t.join("|");
        r || (r = d.join("|") + "|\\*");
        let i = new RegExp("\\[(" + r + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(i, s);
      }
      function f(e, t = null, s = "") {
        let r = null == t ? void 0 : t.join("|");
        r || (r = d.join("|") + "|\\*");
        let i = "\\[\\/?(?:" + r + "){1,}.*?]";
        return e.replace(new RegExp(i, "gi"), s);
      }
    },
    4116: (e, t, s) => {
      s.d(t, { DX: () => a, LT: () => n, So: () => o });
      var r = s(89526),
        i = s(23801);
      class n {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  r.createElement(
                    "span",
                    {
                      "data-copytext": "",
                      "data-copystyle": "merge-adjacent",
                      "bbcode-text": e,
                    },
                    e,
                  ),
                )
              : this.reactNodes.push(e));
        }
        AppendNode(e) {
          this.reactNodes.push(e);
        }
        GetElements() {
          return this.reactNodes;
        }
      }
      class a {
        constructor(e) {
          (0, i.X)(e, "decorated accumulator cannot be null"),
            (this.m_decoratedAccumulator = e);
        }
        AppendText(e, t = !1) {
          this.m_decoratedAccumulator.AppendText(e, t);
        }
        AppendNode(e) {
          this.m_decoratedAccumulator.AppendNode(e);
        }
        GetElements() {
          return this.m_decoratedAccumulator.GetElements();
        }
      }
      class o extends a {
        constructor(e, t, s) {
          super(e),
            (this.m_nStartCursor = 1),
            (this.m_nStartCursor = void 0 !== t ? t : 1);
        }
        AppendText(e) {
          let t = e,
            s = [];
          for (
            let e = t.indexOf("\n", this.m_nStartCursor);
            -1 !== e;
            e = t.indexOf("\n")
          )
            s.push(t.substr(0, e)),
              s.push(r.createElement("br")),
              (t = t.substr(e + 1));
          t.length && s.push(t),
            s.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    11195: (e, t, s) => {
      s.d(t, { De: () => l, Fq: () => o, pA: () => a });
      var r = s(68562),
        i = s(32765),
        n = s(63903);
      s(66262);
      function a(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new r.WJ();
        return (
          e || t.set_country_code(i.De.COUNTRY),
          t.set_language(i.De.LANGUAGE),
          i.De.EREALM != n.IN.k_ESteamRealmUnknown &&
            t.set_steam_realm(i.De.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(r.Qn.fromObject(t));
      }
    },
    69485: (e, t, s) => {
      s.d(t, { Z: () => b });
      var r = s(33940),
        i = s(50265),
        n = s(42735),
        a = s(75457),
        o = s(67328),
        l = s(19094),
        u = s(5083),
        _ = s(68562),
        c = s(23801),
        d = s(23217),
        m = s(32765),
        h = s(11195),
        p = s(85886),
        g = s(14826),
        I = s(72120);
      function v(e) {
        return (function (e, t, s) {
          switch (e) {
            case "date_full":
              return (0, g.vX)(t);
            case "date_month":
              return (0, I.LO)(new Date(1e3 * t));
            case "date_quarter":
              return (0, I.Kb)(new Date(1e3 * t));
            case "date_year":
              return (0, I.Np)(new Date(1e3 * t));
            case "text_comingsoon":
              return s || (0, g.Xx)("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return s || (0, g.Xx)("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        })(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message,
        );
      }
      class f {
        constructor(e, t) {
          var s, r, i;
          (this.m_bVisible = !1),
            (this.m_rgStoreTags = []),
            (this.m_rgStoreTagIDs = []),
            (this.m_DataRequested = { include_tag_count: 0 }),
            (this.k_regexSalePage =
              /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//),
            (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = e.is_free()),
            (this.m_bIsEarlyAccess = e.is_early_access()),
            (this.m_RelatedItems =
              null === (s = e.related_items()) || void 0 === s
                ? void 0
                : s.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption =
              null === (r = e.best_purchase_option()) || void 0 === r
                ? void 0
                : r.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend =
              null === (i = e.free_weekend()) || void 0 === i
                ? void 0
                : i.toObject()),
            (this.m_strInternalName = e.internal_name()),
            this.MergeData(e, t);
        }
        MergeData(e, t) {
          t.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new k(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
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
              ((this.m_Screenshots = new E(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new R(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
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
              (this.m_DataRequested.include_supported_languages = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, t) {
          return Boolean(
            (!t.include_assets || e.include_assets) &&
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
              (!t.include_supported_languages || e.include_supported_languages),
          );
        }
        BContainDataRequest(e) {
          return f.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e,
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
            (0, c.X)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, p.qE)(this.m_eItemType)} @ ${
                this.m_unID
              }`,
              (0, i.ZN)(e),
              (0, i.ZN)(this.m_DataRequested),
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
        GetStorePageURL() {
          return m.De.STORE_BASE_URL + this.m_strStoreURLPath;
        }
        GetStorePageURLWithOverride() {
          var e;
          return (null === (e = this.m_strStoreURLPathOverride) || void 0 === e
            ? void 0
            : e.length) > 0
            ? this.GetStorePageURLOverride()
            : this.GetStorePageURL();
        }
        GetStorePageURLOverride() {
          return this.m_strStoreURLPathOverride;
        }
        GetCommunityPageURL() {
          return this.GetAppID()
            ? m.De.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? m.De.COMMUNITY_BASE_URL +
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
          return e && this.m_eAppType != _.Ac.k_EStoreAppType_Music
            ? e
            : this.GetAppID();
        }
        GetAppType() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return (
            this.GetAppType() == _.Ac.k_EStoreAppType_Software ||
            this.GetAppType() == _.Ac.k_EStoreAppType_Tool
          );
        }
        BIsSalePage() {
          return (
            this.GetStoreItemType() === _.vn.k_EStoreItemType_App &&
            this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
          );
        }
        GetSalePageVanityURL() {
          let e = this.GetStorePageURLWithOverride();
          return (
            this.GetStoreItemType() === _.vn.k_EStoreItemType_App &&
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
          return this.GetStoreItemType() == _.vn.k_EStoreItemType_App
            ? [this.GetID()]
            : this.GetIncludedAppIDs();
        }
        BIsFree() {
          return this.m_bIsFree;
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
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.end_time;
        }
        GetFreeWeekendPlayTextOverride() {
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.text;
        }
        BIsEarlyAccess() {
          return this.m_bIsEarlyAccess;
        }
        GetParentAppID() {
          var e;
          return null === (e = this.m_RelatedItems) || void 0 === e
            ? void 0
            : e.parent_appid;
        }
        GetContentDescriptorIDs() {
          return this.m_ContentDescriptorIDs;
        }
        HasContentDescriptorID(e) {
          var t;
          return null === (t = this.m_ContentDescriptorIDs) || void 0 === t
            ? void 0
            : t.includes(e);
        }
        GetStoreCategories_SupportedPlayers() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.supported_player_categoryids) || []
          );
        }
        GetStoreCategories_Features() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.feature_categoryids) || []
          );
        }
        GetStoreCategories_Controller() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.controller_categoryids) || []
          );
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
            this.m_ReviewInfo.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo.summary_unfiltered ||
              this.m_ReviewInfo.summary_filtered
          );
        }
        GetShortDescription() {
          var e, t;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (t =
                null === (e = this.m_BasicInfo) || void 0 === e
                  ? void 0
                  : e.short_description) && void 0 !== t
              ? t
              : ""
          );
        }
        GetDeveloperNames() {
          var e, t, s, r;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (r =
                null ===
                  (s =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.developers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === s
                  ? void 0
                  : s.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== r
              ? r
              : []
          );
        }
        GetFranchiseNames() {
          var e, t, s, r;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (r =
                null ===
                  (s =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.franchises) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === s
                  ? void 0
                  : s.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== r
              ? r
              : []
          );
        }
        GetPublisherNames() {
          var e, t, s, r;
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const i =
            null !==
              (r =
                null ===
                  (s =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.publishers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === s
                  ? void 0
                  : s.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== r
              ? r
              : [];
          return (null == i ? void 0 : i.length) > 0
            ? i
            : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? S([
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
            this.m_BasicInfo ? S(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? S(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? S(this.m_BasicInfo.franchises) : []
          );
        }
        GetCapsuleHeadline() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null === (e = this.m_BasicInfo) || void 0 === e
              ? void 0
              : e.capsule_headline
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
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            (null === (e = this.m_rgStoreTagIDs) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }
        GetAssets() {
          return (
            this.BCheckDataRequestIncluded({ include_assets: !0 }),
            this.m_Assets
          );
        }
        GetOriginalReleaseDateRTime() {
          var e;
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let t =
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.original_steam_release_date;
          return t || (t = this.GetReleaseDateRTime()), t;
        }
        GetReleaseDateRTime() {
          var e, t, s;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          )
            return 0;
          let r =
            null === (t = this.m_ReleaseInfo) || void 0 === t
              ? void 0
              : t.steam_release_date;
          return (
            r ||
              (r =
                null === (s = this.m_ReleaseInfo) || void 0 === s
                  ? void 0
                  : s.original_release_date),
            r
          );
        }
        GetFormattedSteamReleaseDate() {
          var e, t, s, r, i;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          ) {
            if (
              null === (t = this.m_ReleaseInfo) || void 0 === t
                ? void 0
                : t.coming_soon_display
            )
              return v(this.m_ReleaseInfo);
            if (
              null === (s = this.m_ReleaseInfo) || void 0 === s
                ? void 0
                : s.custom_release_date_message
            )
              return this.m_ReleaseInfo.custom_release_date_message;
            const e =
              null === (r = this.m_ReleaseInfo) || void 0 === r
                ? void 0
                : r.steam_release_date;
            return e
              ? (
                  null === (i = this.m_ReleaseInfo) || void 0 === i
                    ? void 0
                    : i.is_abridged_release_date
                )
                ? (0, I.LO)(new Date(1e3 * e))
                : (0, g.vX)(e)
              : "";
          }
          const n = this.GetReleaseDateRTime();
          return n ? (0, g.vX)(n) : "";
        }
        BIsComingSoon() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon
          );
        }
        BIsCustomComingSoonDisplay() {
          var e;
          return (
            !!this.BIsComingSoon() &&
            ((
              null === (e = this.m_ReleaseInfo) || void 0 === e
                ? void 0
                : e.coming_soon_display
            )
              ? ["text_tba", "text_comingsoon"].includes(
                  this.m_ReleaseInfo.coming_soon_display,
                )
              : !!this.m_ReleaseInfo.custom_release_date_message)
          );
        }
        BIsPrePurchase() {
          var e;
          return (
            this.BIsComingSoon() &&
            Boolean(
              null === (e = this.GetBestPurchaseOption()) || void 0 === e
                ? void 0
                : e.packageid,
            )
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
          var e;
          if (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.final_price_in_cents
          )
            return Number.parseInt(
              this.m_BestPurchaseOption.final_price_in_cents,
            );
        }
        GetBestPurchasePriceFormatted() {
          var e;
          return null === (e = this.m_BestPurchaseOption) || void 0 === e
            ? void 0
            : e.formatted_final_price;
        }
        GetBestPurchaseOriginalPriceInCents() {
          var e;
          return (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.original_price_in_cents
          )
            ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
            : this.GetBestPurchasePriceInCents();
        }
        GetBestPurchaseOriginalPriceFormatted() {
          var e, t, s;
          return null !==
            (t =
              null === (e = this.m_BestPurchaseOption) || void 0 === e
                ? void 0
                : e.formatted_original_price) && void 0 !== t
            ? t
            : null === (s = this.m_BestPurchaseOption) || void 0 === s
            ? void 0
            : s.formatted_final_price;
        }
        GetAllPurchaseOptions() {
          return (
            this.BCheckDataRequestIncluded({
              include_all_purchase_options: !0,
            }),
            this.m_rgPurchaseOptions
          );
        }
        BHasAgeSafeScreenshots() {
          return this.GetOnlyAllAgesSafeScreenshots().length > 0;
        }
        GetOnlyAllAgesSafeScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetOnlyAllAgesScreenshots()) || []
          );
        }
        GetBothAllAgesSafeAndMatureScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetAllAgesAndMatureScreenshots()) || []
          );
        }
        BHasTrailers() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            null === (e = this.m_Trailers) || void 0 === e
              ? void 0
              : e.BHasTrailers()
          );
        }
        BHasHighlightTrailers() {
          var e, t;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (null ===
              (t =
                null === (e = this.m_Trailers) || void 0 === e
                  ? void 0
                  : e.GetHighlightTrailers()) || void 0 === t
              ? void 0
              : t.length) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          var t;
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            (null === (t = this.m_rgSupportedLanguages) || void 0 === t
              ? void 0
              : t.some(
                  (t) =>
                    t.elanguage == e &&
                    (t.supported || t.subtitles || t.full_audio),
                )) || !1
          );
        }
        GetAllLanguagesWithSomeSupport() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            (null === (e = this.m_rgSupportedLanguages) || void 0 === e
              ? void 0
              : e
                  .filter((e) => e.supported || e.subtitles || e.full_audio)
                  .map((e) => e.elanguage)) || []
          );
        }
        GetDataRequest() {
          return this.m_DataRequested;
        }
        GetMicroTrailer() {
          this.BCheckDataRequestIncluded({ include_trailers: !0 });
          let e = null;
          return (
            this.m_Trailers &&
              (this.m_Trailers.GetHighlightTrailers().forEach((t) => {
                !e && t.GetMicroTrailer() && (e = t.GetMicroTrailer());
              }),
              e ||
                this.m_Trailers.GetOtherTrailers().forEach((t) => {
                  !e && t.GetMicroTrailer() && (e = t.GetMicroTrailer());
                })),
            e
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
        GetInternalName() {
          return this.m_strInternalName;
        }
      }
      function S(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class k {
        constructor(e, t) {
          const s = e.asset_url_format();
          s &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                s,
                e.main_capsule(),
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                s,
                e.small_capsule(),
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(s, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                s,
                e.package_header(),
              )),
            e.page_background() &&
              (this.m_strPageBackgroundURL = this.ConstructAssetURL(
                s,
                e.page_background(),
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                s,
                e.hero_capsule(),
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                s,
                e.hero_capsule_2x(),
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                s,
                e.library_capsule(),
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                s,
                e.library_capsule_2x(),
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                s,
                e.library_hero(),
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                s,
                e.library_hero_2x(),
              ))),
            e.community_icon() &&
              (this.m_strCommunityIcon = `${
                m.De.MEDIA_CDN_COMMUNITY_URL
              }images/apps/${t}/${e.community_icon()}.jpg`);
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
          return m.De.MEDIA_CDN_URL + e.replace("${FILENAME}", t);
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
      }
      class R {
        constructor(e) {
          (this.m_mapTrailer = new Map()),
            (this.m_higherTrailers = new Array()),
            (this.m_otherTrailers = new Array()),
            e.highlights() &&
              e.highlights().forEach((e) => {
                let t = new y(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_higherTrailers.push(t);
              }),
            e.other_trailers() &&
              e.other_trailers().forEach((e) => {
                let t = new y(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_otherTrailers.push(t);
              });
        }
        BHasTrailers() {
          return (
            this.m_higherTrailers.length > 0 || this.m_otherTrailers.length > 0
          );
        }
        GetHighlightTrailers() {
          return this.m_higherTrailers;
        }
        GetOtherTrailers() {
          return this.m_otherTrailers;
        }
        GetTrailerByID(e) {
          return this.m_mapTrailer.get(e);
        }
      }
      class y {
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id());
          const t = e.trailer_url_format();
          t &&
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
              (this.m_strScreenshotMedium = this.ConstructAssetURL(
                t,
                e.screenshot_medium(),
              )),
            e.screenshot_full() &&
              (this.m_strScreenshotFull = this.ConstructAssetURL(
                t,
                e.screenshot_full(),
              )));
        }
        GetName() {
          return this.m_strTrailerName;
        }
        GetTrailerID() {
          return this.m_nBaseID;
        }
        GetTrailer480p() {
          return this.m_Trailer480p;
        }
        GetTrailerMax() {
          return this.m_TrailerMax;
        }
        GetMicroTrailer() {
          return this.m_MicroTrailer;
        }
        GetScreenshot() {
          return this.m_strScreenshotFull
            ? this.m_strScreenshotFull
            : this.m_strScreenshotMedium;
        }
        ExtractTrailerFormats(e, t) {
          let s = {};
          return (
            t.forEach((t) => {
              "video/mp4" == t.type()
                ? (s.strMP4URL = this.ConstructAssetURL(e, t.filename()))
                : "video/webm" == t.type() &&
                  (s.strWebMURL = this.ConstructAssetURL(e, t.filename()));
            }),
            s
          );
        }
        ConstructAssetURL(e, t) {
          return m.De.MEDIA_CDN_URL + e.replace("${FILENAME}", t);
        }
      }
      class E {
        constructor(e) {
          (this.m_rgAllScreenshots = new Array()),
            (this.m_rgOnlyAllAgesScreenshots = new Array());
          let t = 0,
            s = 0;
          const r = e.all_ages_screenshots() || [],
            i = e.mature_content_screenshots() || [];
          for (; t < r.length || s < i.length; ) {
            let e = t < r.length;
            if (t < r.length && s < i.length) {
              e = r[t].ordinal() < i[s].ordinal();
            }
            if (e) {
              const e = m.De.MEDIA_CDN_URL + r[t].filename();
              this.m_rgAllScreenshots.push(e),
                this.m_rgOnlyAllAgesScreenshots.push(e),
                (t += 1);
            } else {
              const e = m.De.MEDIA_CDN_URL + i[s].filename();
              this.m_rgAllScreenshots.push(e), (s += 1);
            }
          }
        }
        GetAllAgesAndMatureScreenshots() {
          return this.m_rgAllScreenshots;
        }
        GetOnlyAllAgesScreenshots() {
          return this.m_rgOnlyAllAgesScreenshots;
        }
      }
      function T(e, t) {
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
        };
      }
      function C(e, t) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          const s = yield e,
            r = yield t;
          return s != n.s.k_EResultOK ? s : r;
        });
      }
      class A {
        constructor() {
          (this.k_QueueWaitUntilRequestMS = 5),
            (this.k_nMaxBatchSize = 250),
            (this.m_bReturnUnavailableItems = !1),
            (this.m_mapApps = new Map()),
            (this.m_mapPackages = new Map()),
            (this.m_mapBundles = new Map()),
            (this.m_mapTags = new Map()),
            (this.m_mapCreators = new Map()),
            (this.m_mapHubCategories = new Map()),
            (this.m_setUnavailableApps = new Set()),
            (this.m_setUnavailablePackages = new Set()),
            (this.m_setUnavailableBundles = new Set()),
            (this.m_setUnavailableTags = new Set()),
            (this.m_setUnavailableCreators = new Set()),
            (this.m_setUnavailableHubCategories = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionApps = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionPackages = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionBundles = new Set()),
            (this.m_mapAppsInFlight = new Map()),
            (this.m_mapPackageInFlight = new Map()),
            (this.m_mapBundleInFlight = new Map()),
            (this.m_mapTagsInFlight = new Map()),
            (this.m_mapCreatorsInFlight = new Map()),
            (this.m_mapHubCategoriesInFlight = new Map()),
            (this.m_SteamInterface = null),
            (this.m_bUsePartnerAPI = !1),
            (this.m_bInitialized = !1),
            (this.m_bActivelyResettingCache = !1),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_setPendingBundleInfo = new Set()),
            (this.m_setPendingPackageInfo = new Set()),
            (this.m_setPendingTagInfo = new Set()),
            (this.m_setPendingCreatorInfo = new Set()),
            (this.m_setPendingHubCategoryInfo = new Set()),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingInfoResolve = void 0),
            (this.m_PendingTimer = void 0),
            (this.k_AlreadyResolvedOK = Promise.resolve(n.s.k_EResultOK)),
            (this.k_AlreadyResolvedInvalid = Promise.resolve(
              n.s.k_EResultInvalidParam,
            )),
            (this.k_AlreadyResolvedBusy = Promise.resolve(n.s.k_EResultBusy));
        }
        static Get() {
          return (
            A.sm_instance ||
              ((A.sm_instance = new A()),
              (window.StoreItemCache = A.sm_instance)),
            A.sm_instance
          );
        }
        static Initialize(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            (0, c.X)(
              !A.Get().m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once.",
            ),
              (A.Get().m_SteamInterface = e),
              (A.Get().m_bUsePartnerAPI = !!t),
              (A.Get().m_bInitialized = !0);
          });
        }
        GetSteamInterface() {
          return this.m_SteamInterface;
        }
        SetSteamInterface(e) {
          this.m_SteamInterface = e;
        }
        SetReturnUnavailableItems(e) {
          this.m_bReturnUnavailableItems = e;
        }
        GetReturnUnavailableItems() {
          return this.m_bReturnUnavailableItems;
        }
        ResetCache() {
          return (0, r.mG)(this, void 0, void 0, function* () {
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
              yield Promise.all(e),
              this.m_mapApps.clear(),
              this.m_mapBundles.clear(),
              this.m_mapPackages.clear(),
              this.m_mapTagsInFlight.clear(),
              this.m_mapCreatorsInFlight.clear(),
              this.m_mapHubCategoriesInFlight.clear(),
              (this.m_bActivelyResettingCache = !1);
          });
        }
        static BIsInitialized() {
          return A.Get().m_bInitialized;
        }
        QueueAppRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, _.vn.k_EStoreItemType_App, t);
          });
        }
        QueuePackageRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(
              e,
              _.vn.k_EStoreItemType_Package,
              t,
            );
          });
        }
        QueueBundleRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(
              e,
              _.vn.k_EStoreItemType_Bundle,
              t,
            );
          });
        }
        QueueTagRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, _.vn.k_EStoreItemType_Tag, t);
          });
        }
        QueueCreatorRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(
              e,
              _.vn.k_EStoreItemType_Creator,
              t,
            );
          });
        }
        QueueHubCategoryRequest(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(
              e,
              _.vn.k_EStoreItemType_HubCategory,
              t,
            );
          });
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
          ];
          for (const e of t) if (!0 !== e && void 0 !== e) return !1;
          return !0;
        }
        QueueMultipleAppRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return n.s.k_EResultOK;
            const s = (yield Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, _.vn.k_EStoreItemType_App, t),
              ),
            )).filter((e) => e != n.s.k_EResultOK);
            return s.length > 0 ? s[0] : n.s.k_EResultOK;
          });
        }
        QueueMultiplePackageRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return n.s.k_EResultOK;
            const s = (yield Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, _.vn.k_EStoreItemType_Package, t),
              ),
            )).filter((e) => e != n.s.k_EResultOK);
            return s.length > 0 ? s[0] : n.s.k_EResultOK;
          });
        }
        QueueMultipleBundleRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return n.s.k_EResultOK;
            const s = (yield Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, _.vn.k_EStoreItemType_Bundle, t),
              ),
            )).filter((e) => e != n.s.k_EResultOK);
            return s.length > 0 ? s[0] : n.s.k_EResultOK;
          });
        }
        QueueMultipleTagRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return n.s.k_EResultOK;
            const s = (yield Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, _.vn.k_EStoreItemType_Tag, t),
              ),
            )).filter((e) => e != n.s.k_EResultOK);
            return s.length > 0 ? s[0] : n.s.k_EResultOK;
          });
        }
        QueueMultipleCreatorRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return n.s.k_EResultOK;
            const s = (yield Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, _.vn.k_EStoreItemType_Creator, t),
              ),
            )).filter((e) => e != n.s.k_EResultOK);
            return s.length > 0 ? s[0] : n.s.k_EResultOK;
          });
        }
        QueueMultipleHubCategoryRequests(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return n.s.k_EResultOK;
            const s = (yield Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(
                  e,
                  _.vn.k_EStoreItemType_HubCategory,
                  t,
                ),
              ),
            )).filter((e) => e != n.s.k_EResultOK);
            return s.length > 0 ? s[0] : n.s.k_EResultOK;
          });
        }
        QueueMultipleStoreItemRequests(e, t, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return n.s.k_EResultOK;
            const r = (yield Promise.all(
              e.map((e, r) => this.QueueStoreItemRequest(e, t[r], s)),
            )).filter((e) => e != n.s.k_EResultOK);
            return r.length > 0 ? r[0] : n.s.k_EResultOK;
          });
        }
        QueueStoreItemRequest(e, t, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (
              ((0, c.X)(
                A.ValidateDataRequest(s),
                "Invalid Data Request: " + JSON.stringify(s),
              ),
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
                (0, c.X)(
                  !e,
                  `unexpected id ${e} of zero or undefined for type ${t}`,
                ),
                this.k_AlreadyResolvedInvalid
              );
            const r = this.GetPreviousSupersetLoadPromise(e, t, s);
            if (r) return r;
            switch (
              (this.m_PendingInfoPromise ||
                ((this.m_PendingInfoPromise = new Promise(
                  (e) => (this.m_PendingInfoResolve = e),
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS,
                ))),
              (this.m_setPendingDataRequest = T(
                this.m_setPendingDataRequest,
                s,
              )),
              t)
            ) {
              case _.vn.k_EStoreItemType_App:
                this.m_setPendingAppInfo.add(e);
                break;
              case _.vn.k_EStoreItemType_Bundle:
                this.m_setPendingBundleInfo.add(e);
                break;
              case _.vn.k_EStoreItemType_Package:
                this.m_setPendingPackageInfo.add(e);
                break;
              case _.vn.k_EStoreItemType_Tag:
                this.m_setPendingTagInfo.add(e);
                break;
              case _.vn.k_EStoreItemType_Creator:
                this.m_setPendingCreatorInfo.add(e);
                break;
              case _.vn.k_EStoreItemType_HubCategory:
                this.m_setPendingHubCategoryInfo.add(e);
                break;
              default:
                (0, c.X)(!1, `Unexpected Type ${t}`);
            }
            const i = this.m_PendingInfoPromise;
            return (
              this.m_setPendingAppInfo.size +
                this.m_setPendingPackageInfo.size +
                this.m_setPendingBundleInfo.size >=
                this.k_nMaxBatchSize &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              i
            );
          });
        }
        FlushPendingInfo() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (void 0 === this.m_PendingInfoResolve) return;
            const e = this.m_PendingInfoResolve,
              t = Array.from(this.m_setPendingAppInfo),
              s = Array.from(this.m_setPendingPackageInfo),
              r = Array.from(this.m_setPendingBundleInfo),
              i = Array.from(this.m_setPendingTagInfo),
              n = Array.from(this.m_setPendingCreatorInfo),
              a = Array.from(this.m_setPendingHubCategoryInfo),
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
              this.HintLoadStoreItems(void 0, t, s, r, i, n, a, o).then((t) =>
                e(t),
              );
          });
        }
        HintLoadStoreApps(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              e,
              null,
              null,
              null,
              null,
              null,
              t,
            );
          });
        }
        HintLoadStorePackages(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              null,
              e,
              null,
              null,
              null,
              null,
              t,
            );
          });
        }
        HintLoadStoreBundles(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              null,
              null,
              e,
              null,
              null,
              null,
              t,
            );
          });
        }
        GetPreviousSupersetLoadPromise(e, t, s) {
          if (this.BHasStoreItem(e, t, s) || this.BIsStoreItemMissing(e, t))
            return this.k_AlreadyResolvedOK;
          let r = null;
          switch (t) {
            case _.vn.k_EStoreItemType_App:
              r = this.m_mapAppsInFlight.get(e);
              break;
            case _.vn.k_EStoreItemType_Package:
              r = this.m_mapPackageInFlight.get(e);
              break;
            case _.vn.k_EStoreItemType_Bundle:
              r = this.m_mapBundleInFlight.get(e);
              break;
            case _.vn.k_EStoreItemType_Tag:
              r = this.m_mapTagsInFlight.get(e);
              break;
            case _.vn.k_EStoreItemType_Creator:
              r = this.m_mapCreatorsInFlight.get(e);
              break;
            case _.vn.k_EStoreItemType_HubCategory:
              r = this.m_mapHubCategoriesInFlight.get(e);
          }
          return r && f.BDataRequestContainsOtherDataRequest(r.dataRequest, s)
            ? r.promise
            : null;
        }
        HintLoadStoreItems(e, t, s, i, a, o, l, u) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r = null;
            const c = new Promise((e) => (r = e));
            let d = [],
              m = [];
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(
                e,
                _.vn.k_EStoreItemType_App,
                u,
              );
              if (t) m.push(t);
              else {
                d.push(_.oY.fromObject({ appid: e }));
                let t = T(
                  this.GetStoreItemDataRequest(e, _.vn.k_EStoreItemType_App),
                  u,
                );
                const s = this.m_mapAppsInFlight.get(e);
                (t = T(null == s ? void 0 : s.dataRequest, t)),
                  s && m.push(s.promise),
                  this.m_mapAppsInFlight.set(e, {
                    promise: s ? C(s.promise, c) : c,
                    dataRequest: t,
                  });
              }
            }),
              (s || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(
                  e,
                  _.vn.k_EStoreItemType_Package,
                  u,
                );
                if (t) m.push(t);
                else {
                  d.push(_.oY.fromObject({ packageid: e }));
                  let t = T(
                    this.GetStoreItemDataRequest(
                      e,
                      _.vn.k_EStoreItemType_Package,
                    ),
                    u,
                  );
                  const s = this.m_mapPackageInFlight.get(e);
                  (t = T(null == s ? void 0 : s.dataRequest, t)),
                    s && m.push(s.promise),
                    this.m_mapPackageInFlight.set(e, {
                      promise: s ? C(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (i || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(
                  e,
                  _.vn.k_EStoreItemType_Bundle,
                  u,
                );
                if (t) m.push(t);
                else {
                  d.push(_.oY.fromObject({ bundleid: e }));
                  let t = T(
                    this.GetStoreItemDataRequest(
                      e,
                      _.vn.k_EStoreItemType_Bundle,
                    ),
                    u,
                  );
                  const s = this.m_mapBundleInFlight.get(e);
                  (t = T(null == s ? void 0 : s.dataRequest, t)),
                    s && m.push(s.promise),
                    this.m_mapBundleInFlight.set(e, {
                      promise: s ? C(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (a || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(
                  e,
                  _.vn.k_EStoreItemType_Tag,
                  u,
                );
                if (t) m.push(t);
                else {
                  d.push(_.oY.fromObject({ tagid: e }));
                  let t = T(
                    this.GetStoreItemDataRequest(e, _.vn.k_EStoreItemType_Tag),
                    u,
                  );
                  const s = this.m_mapTagsInFlight.get(e);
                  (t = T(null == s ? void 0 : s.dataRequest, t)),
                    s && m.push(s.promise),
                    this.m_mapTagsInFlight.set(e, {
                      promise: s ? C(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (o || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(
                  e,
                  _.vn.k_EStoreItemType_Creator,
                  u,
                );
                if (t) m.push(t);
                else {
                  d.push(_.oY.fromObject({ creatorid: e }));
                  let t = T(
                    this.GetStoreItemDataRequest(
                      e,
                      _.vn.k_EStoreItemType_Creator,
                    ),
                    u,
                  );
                  const s = this.m_mapCreatorsInFlight.get(e);
                  (t = T(null == s ? void 0 : s.dataRequest, t)),
                    s && m.push(s.promise),
                    this.m_mapCreatorsInFlight.set(e, {
                      promise: s ? C(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (l || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(
                  e,
                  _.vn.k_EStoreItemType_HubCategory,
                  u,
                );
                if (t) m.push(t);
                else {
                  d.push(_.oY.fromObject({ hubcategoryid: e }));
                  let t = T(
                    this.GetStoreItemDataRequest(
                      e,
                      _.vn.k_EStoreItemType_HubCategory,
                    ),
                    u,
                  );
                  const s = this.m_mapHubCategoriesInFlight.get(e);
                  (t = T(null == s ? void 0 : s.dataRequest, t)),
                    s && m.push(s.promise),
                    this.m_mapHubCategoriesInFlight.set(e, {
                      promise: s ? C(s.promise, c) : c,
                      dataRequest: t,
                    });
                }
              });
            let h = n.s.k_EResultOK;
            if (
              (d.length > 0 &&
                (h = yield this.InternalHandleLoadStoreItems(e, d, u)),
              r(h),
              m.length > 0)
            ) {
              const e = yield Promise.all(m);
              for (const t of e)
                t != n.s.k_EResultOK && h == n.s.k_EResultOK && (h = t);
            }
            return (
              (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
              (s || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
              (i || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
              (a || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
              (o || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
              (l || []).forEach((e) =>
                this.m_mapHubCategoriesInFlight.delete(e),
              ),
              h
            );
          });
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
                (this.m_setUnavailableHubCategories.add(e.hubcategoryid()),
                this.m_mapHubCategories.delete(e.hubcategoryid()));
          });
        }
        SortStoreItems(e) {
          let t = e.slice();
          return (
            t.sort((e, t) => {
              var s, r, i, n, a, o, l, u, _, c, d, m;
              let h = null !== (s = e.appid()) && void 0 !== s ? s : 0,
                p = null !== (r = t.appid()) && void 0 !== r ? r : 0;
              if (h != p) return h - p;
              let g = null !== (i = e.packageid()) && void 0 !== i ? i : 0,
                I = null !== (n = t.packageid()) && void 0 !== n ? n : 0;
              if (g != I) return g - I;
              let v = null !== (a = e.bundleid()) && void 0 !== a ? a : 0,
                f = null !== (o = t.bundleid()) && void 0 !== o ? o : 0;
              if (v != f) return v - f;
              let S = null !== (l = e.tagid()) && void 0 !== l ? l : 0,
                k = null !== (u = t.tagid()) && void 0 !== u ? u : 0;
              if (S != k) return S - k;
              let R = null !== (_ = e.creatorid()) && void 0 !== _ ? _ : 0,
                y = null !== (c = t.creatorid()) && void 0 !== c ? c : 0;
              if (R != y) return R - y;
              let E = null !== (d = e.hubcategoryid()) && void 0 !== d ? d : 0,
                T = null !== (m = t.hubcategoryid()) && void 0 !== m ? m : 0;
              return E != T ? E - T : 0;
            }),
            t
          );
        }
        InternalHandleLoadStoreItems(e, t, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r = n.s.k_EResultOK;
            e ||
              (this.GetSteamInterface() ||
                this.SetSteamInterface(new l.J(m.De.WEBAPI_BASE_URL)),
              (e = this.GetSteamInterface())),
              (t = this.SortStoreItems(t)),
              s.include_included_items &&
                (s = Object.assign(Object.assign({}, s), {
                  included_item_data_request: Object.assign(
                    Object.assign({}, s),
                    { include_included_items: !1 },
                  ),
                }));
            const c = new Array();
            try {
              const l = [];
              for (; t.length > 0; ) {
                const r = t.splice(0, this.k_nMaxBatchSize);
                if ((c.push(r), this.m_bUsePartnerAPI)) {
                  const t = o.gA.Init(u.z);
                  t.Body().set_include_unpublished(!1);
                  const i = t.Body().request(!0);
                  i.set_context((0, h.Fq)(this.m_bUsePartnerAPI)),
                    i.set_data_request(_.Qn.fromObject(s)),
                    i.set_ids(r),
                    l.push(u.n.GetItems(e.GetServiceTransport(), t));
                } else {
                  const t = o.gA.Init(_.eK);
                  (0, h.pA)(t, this.m_bUsePartnerAPI),
                    (0, h.De)(t, s),
                    t.Body().set_ids(r),
                    l.push(_.VJ.GetItems(e.GetAnonymousServiceTransport(), t));
                }
              }
              (yield Promise.all(l)).forEach((e, o) => {
                e.GetEResult() == n.s.k_EResultOK
                  ? e
                      .Body()
                      .store_items()
                      .forEach((r) => {
                        const a = r.id(),
                          o = r.item_type();
                        let l =
                            this.m_bReturnUnavailableItems &&
                            r.success() == n.s.k_EResultAccessDenied,
                          u =
                            r.success() == n.s.k_EResultOK &&
                            !this.BIsStoreItemMissing(a, o);
                        if (l || u) this.ReadItem(r, s);
                        else {
                          switch (
                            ("dev" == m.De.WEB_UNIVERSE &&
                              console.warn(
                                `Failed to load ${a} type ${o} with error ${r.success()}`,
                                r,
                              ),
                            o)
                          ) {
                            case _.vn.k_EStoreItemType_App:
                              this.m_setUnavailableApps.add(a),
                                this.m_mapApps.delete(a);
                              break;
                            case _.vn.k_EStoreItemType_Package:
                              this.m_setUnavailablePackages.add(a),
                                this.m_mapPackages.delete(a);
                              break;
                            case _.vn.k_EStoreItemType_Bundle:
                              this.m_setUnavailableBundles.add(a),
                                this.m_mapBundles.delete(a);
                              break;
                            case _.vn.k_EStoreItemType_Tag:
                              this.m_setUnavailableTags.add(a),
                                this.m_mapTags.delete(a);
                              break;
                            case _.vn.k_EStoreItemType_Creator:
                              this.m_setUnavailableCreators.add(a),
                                this.m_mapCreators.delete(a);
                              break;
                            case _.vn.k_EStoreItemType_HubCategory:
                              this.m_setUnavailableHubCategories.add(a),
                                this.m_mapHubCategories.delete(a);
                              break;
                            default:
                              console.error(
                                "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                  o +
                                  " " +
                                  a,
                              );
                          }
                          if (r.unvailable_for_country_restriction())
                            switch (o) {
                              case _.vn.k_EStoreItemType_App:
                                this.m_setUnavailableDueToCountryRestrictionApps.add(
                                  a,
                                );
                                break;
                              case _.vn.k_EStoreItemType_Package:
                                this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                  a,
                                );
                                break;
                              case _.vn.k_EStoreItemType_Bundle:
                                this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                  a,
                                );
                                break;
                              case _.vn.k_EStoreItemType_Tag:
                              case _.vn.k_EStoreItemType_Creator:
                              case _.vn.k_EStoreItemType_HubCategory:
                                console.error(
                                  "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                                    e.GetEResult() +
                                    " message: " +
                                    e.Hdr().error_message(),
                                  (0, i.ZN)(t),
                                );
                            }
                        }
                      })
                  : (console.warn(
                      "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                        e.GetEResult() +
                        " message: " +
                        e.Hdr().error_message(),
                      (0, i.ZN)(t),
                    ),
                    (e.Hdr().transport_error() == a.k$.k_ETransportOK ||
                      m.De.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(c[o]),
                    r == n.s.k_EResultOK && (r = e.GetEResult()));
              });
            } catch (e) {
              const t = (0, d.l)(e);
              return (
                console.error(
                  "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                    t.strErrorMsg,
                  t,
                ),
                c.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
                n.s.k_EResultUnexpectedError
              );
            }
            return r;
          });
        }
        GetMapForType(e) {
          let t;
          switch (e) {
            case _.vn.k_EStoreItemType_App:
              t = this.m_mapApps;
              break;
            case _.vn.k_EStoreItemType_Bundle:
              t = this.m_mapBundles;
              break;
            case _.vn.k_EStoreItemType_Package:
              t = this.m_mapPackages;
              break;
            case _.vn.k_EStoreItemType_Tag:
              t = this.m_mapTags;
              break;
            case _.vn.k_EStoreItemType_Creator:
              t = this.m_mapCreators;
              break;
            case _.vn.k_EStoreItemType_HubCategory:
              t = this.m_mapHubCategories;
              break;
            default:
              console.error("Invalid map type requested", e);
          }
          return t;
        }
        BHasStoreItem(e, t, s) {
          let r = this.GetMapForType(t);
          return Boolean(
            r && r.has(e) && (!s || r.get(e).BContainDataRequest(s)),
          );
        }
        GetStoreItem(e, t) {
          if (
            t == _.vn.k_EStoreItemType_Invalid ||
            t == _.vn.k_EStoreItemType_Mtx
          )
            return;
          const s = this.GetMapForType(t);
          return null == s ? void 0 : s.get(e);
        }
        GetStoreItemWithLegacyVisibilityCheck(e, t) {
          const s = this.GetStoreItem(e, t);
          return s && (this.m_bReturnUnavailableItems || s.BIsVisible())
            ? s
            : void 0;
        }
        GetStoreItemDataRequest(e, t) {
          var s, r;
          return (
            (null ===
              (r =
                null === (s = this.GetMapForType(t)) || void 0 === s
                  ? void 0
                  : s.get(e)) || void 0 === r
              ? void 0
              : r.GetDataRequest()) || null
          );
        }
        BHasApp(e, t) {
          return this.BHasStoreItem(e, _.vn.k_EStoreItemType_App, t);
        }
        GetApp(e) {
          return this.GetStoreItem(e, _.vn.k_EStoreItemType_App);
        }
        BHasPackage(e, t) {
          return this.BHasStoreItem(e, _.vn.k_EStoreItemType_Package, t);
        }
        GetPackage(e) {
          return this.GetStoreItem(e, _.vn.k_EStoreItemType_Package);
        }
        BHasBundle(e, t) {
          return this.BHasStoreItem(e, _.vn.k_EStoreItemType_Bundle, t);
        }
        GetBundle(e) {
          return this.GetStoreItem(e, _.vn.k_EStoreItemType_Bundle);
        }
        BHasTag(e, t) {
          return this.BHasStoreItem(e, _.vn.k_EStoreItemType_Tag, t);
        }
        GetTag(e) {
          return this.GetStoreItem(e, _.vn.k_EStoreItemType_Tag);
        }
        BHasCreator(e, t) {
          return this.BHasStoreItem(e, _.vn.k_EStoreItemType_Creator, t);
        }
        GetCreator(e) {
          return this.GetStoreItem(e, _.vn.k_EStoreItemType_Creator);
        }
        BHasHubCategory(e, t) {
          return this.BHasStoreItem(e, _.vn.k_EStoreItemType_HubCategory, t);
        }
        GetHubCategory(e) {
          return this.GetStoreItem(e, _.vn.k_EStoreItemType_HubCategory);
        }
        BIsStoreItemMissing(e, t) {
          switch (t) {
            case _.vn.k_EStoreItemType_App:
              return this.BIsAppMissing(e);
            case _.vn.k_EStoreItemType_Package:
              return this.BIsPackageMissing(e);
            case _.vn.k_EStoreItemType_Bundle:
              return this.BIsBundleMissing(e);
            case _.vn.k_EStoreItemType_Tag:
              return this.BIsTagMissing(e);
            case _.vn.k_EStoreItemType_Creator:
              return this.BIsCreatorMissing(e);
            case _.vn.k_EStoreItemType_HubCategory:
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
            case _.vn.k_EStoreItemType_App:
              return this.BIsAppUnavailableDueToCountryRestriction(e);
            case _.vn.k_EStoreItemType_Package:
              return this.BIsPackageUnavailableDueToCountryRestriction(e);
            case _.vn.k_EStoreItemType_Bundle:
              return this.BIsBundleUnavailableDueToCountryRestriction(e);
            case _.vn.k_EStoreItemType_Tag:
            case _.vn.k_EStoreItemType_Creator:
            case _.vn.k_EStoreItemType_HubCategory:
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
          let s = [];
          for (const r of e) s.push(this.ReadItem(r, t));
          return s;
        }
        ReadItem(e, t) {
          const s = e.item_type();
          let r = null;
          switch (s) {
            case _.vn.k_EStoreItemType_App:
              r = this.m_mapApps;
              break;
            case _.vn.k_EStoreItemType_Package:
              r = this.m_mapPackages;
              break;
            case _.vn.k_EStoreItemType_Bundle:
              r = this.m_mapBundles;
              break;
            case _.vn.k_EStoreItemType_Tag:
              r = this.m_mapTags;
              break;
            case _.vn.k_EStoreItemType_Creator:
              r = this.m_mapCreators;
              break;
            case _.vn.k_EStoreItemType_HubCategory:
              r = this.m_mapHubCategories;
              break;
            default:
              return console.error(`Invalid item type: ${s}`), null;
          }
          let i = r.get(e.id());
          if (
            (i ? i.MergeData(e, t) : ((i = new f(e, t)), r.set(e.id(), i)),
            t.include_included_items && e.included_items(!1))
          ) {
            for (const s of e.included_items().included_apps())
              this.ReadItem(s, t.included_item_data_request);
            for (const s of e.included_items().included_packages())
              this.ReadItem(s, t.included_item_data_request);
          }
          return i;
        }
      }
      (A.k_DataRequest_CommonOnly = {}),
        (A.k_DataRequest_BasicInfo = { include_basic_info: !0 }),
        (A.k_DataRequest_Assets = { include_assets: !0 }),
        (A.k_DataRequest_IncludeAll = {
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
        });
      const b = A;
    },
    85886: (e, t, s) => {
      s.d(t, {
        $k: () => r,
        Ds: () => l,
        GV: () => n,
        Hy: () => u,
        TM: () => o,
        qE: () => a,
      });
      s(44208);
      var r,
        i = s(68562);
      function n(e) {
        return "app" == e
          ? i.vn.k_EStoreItemType_App
          : "sub" == e
          ? i.vn.k_EStoreItemType_Package
          : i.vn.k_EStoreItemType_Bundle;
      }
      function a(e) {
        switch (e) {
          case i.vn.k_EStoreItemType_App:
            return "app";
          case i.vn.k_EStoreItemType_Bundle:
            return "bundle";
          case i.vn.k_EStoreItemType_Package:
            return "package";
          case i.vn.k_EStoreItemType_Mtx:
            return "mtx";
        }
        return "invalid";
      }
      function o(e) {
        switch (e) {
          case "sub":
            return i.vn.k_EStoreItemType_Package;
          case "bundle":
            return i.vn.k_EStoreItemType_Bundle;
          default:
            return i.vn.k_EStoreItemType_App;
        }
      }
      function l(e, t) {
        switch (e) {
          case i.vn.k_EStoreItemType_Bundle:
            return "bundle";
          case i.vn.k_EStoreItemType_Package:
            return "sub";
          default:
            switch (t) {
              case i.Ac.k_EStoreAppType_Game:
                return "game";
              case i.Ac.k_EStoreAppType_Beta:
                return "beta";
              case i.Ac.k_EStoreAppType_DLC:
                return "dlc";
              case i.Ac.k_EStoreAppType_Demo:
                return "demo";
              case i.Ac.k_EStoreAppType_Software:
                return "software";
              case i.Ac.k_EStoreAppType_Video:
              case i.Ac.k_EStoreAppType_Movie:
                return "video";
              case i.Ac.k_EStoreAppType_Hardware:
                return "hardware";
              case i.Ac.k_EStoreAppType_Music:
                return "music";
              case i.Ac.k_EStoreAppType_Tool:
                return "tool";
              case i.Ac.k_EStoreAppType_Mod:
                return "mod";
              case i.Ac.k_EStoreAppType_Episode:
                return "episode";
              case i.Ac.k_EStoreAppType_Series:
                return "series";
              default:
                return "game";
            }
        }
      }
      function u(e) {
        switch (e) {
          case i.vn.k_EStoreItemType_Bundle:
            return "bundle";
          case i.vn.k_EStoreItemType_Package:
            return "sub";
          default:
            return "app";
        }
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
          (e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed");
      })(r || (r = {}));
    },
    25871: (e, t, s) => {
      s.d(t, {
        Vm: () => h,
        Y0: () => r,
        ie: () => m,
        jk: () => c,
        vs: () => d,
        wZ: () => g,
      });
      var r,
        i = s(52868),
        n = s.n(i),
        a = s(89526),
        o = (s(24174), s(42735)),
        l = s(68562),
        u = s(4306),
        _ = s(69485);
      function c(e, t, s, i) {
        const l = (0, a.useRef)(),
          c = (0, a.useRef)(void 0),
          d = (0, u.NW)();
        l.current = e;
        const [m, h] = (0, a.useState)(void 0),
          {
            include_assets: p,
            include_release: g,
            include_platforms: I,
            include_all_purchase_options: v,
            include_screenshots: f,
            include_trailers: S,
            include_ratings: k,
            include_tag_count: R,
            include_reviews: y,
            include_basic_info: E,
            include_supported_languages: T,
            include_full_description: C,
            include_included_items: A,
          } = s;
        if (
          ((0, a.useEffect)(() => {
            const s = {
              include_assets: p,
              include_release: g,
              include_platforms: I,
              include_all_purchase_options: v,
              include_screenshots: f,
              include_trailers: S,
              include_ratings: k,
              include_tag_count: R,
              include_reviews: y,
              include_basic_info: E,
              include_supported_languages: T,
              include_full_description: C,
              include_included_items: A,
            };
            let r = null;
            return (
              !e ||
                _.Z.Get().BHasStoreItem(e, t, s) ||
                (void 0 !== m && i && i == c.current) ||
                (i !== c.current && (h(void 0), (c.current = i)),
                (r = n().CancelToken.source()),
                _.Z.Get()
                  .QueueStoreItemRequest(e, t, s)
                  .then((t) => {
                    r.token.reason ||
                      l.current !== e ||
                      h(t == o.s.k_EResultOK),
                      d();
                  })),
              () => r && r.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, m, p, g, I, v, f, S, k, R, y, E, T, C, A, d]),
          !e)
        )
          return [null, r.k_EStoreItemCacheState_Unavailable];
        if (!1 === m) return [void 0, r.k_EStoreItemCacheState_Unavailable];
        if (_.Z.Get().BIsStoreItemMissing(e, t))
          return [void 0, r.k_EStoreItemCacheState_Unavailable];
        if (!_.Z.Get().BHasStoreItem(e, t, s))
          return [void 0, r.k_EStoreItemCacheState_Loading];
        const b = _.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return b
          ? [b, r.k_EStoreItemCacheState_Found]
          : [null, r.k_EStoreItemCacheState_Unavailable];
      }
      function d(e, t, s) {
        return c(e, l.vn.k_EStoreItemType_App, t, s);
      }
      function m(e, t, s) {
        return c(e, l.vn.k_EStoreItemType_Package, t, s);
      }
      function h(e, t, s) {
        const [r, i] = c(e, t, s),
          [o, u] = (0, a.useState)(null),
          [_, m] = d(o, s);
        return (
          (0, a.useEffect)(() => {
            var e;
            const t = n().CancelToken.source();
            if (
              (null == r ? void 0 : r.GetStoreItemType()) ==
                l.vn.k_EStoreItemType_Package &&
              1 == (null == r ? void 0 : r.GetIncludedAppIDs().length)
            ) {
              const s = r.GetIncludedAppIDs()[0];
              o != s &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  u(s));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [o, r]),
          o ? [_, m] : [r, i]
        );
      }
      function p(e, t, s, i) {
        const o = (0, u.NW)(),
          {
            include_assets: l,
            include_release: c,
            include_platforms: d,
            include_all_purchase_options: m,
            include_screenshots: h,
            include_trailers: p,
            include_ratings: g,
            include_tag_count: I,
            include_reviews: v,
            include_basic_info: f,
            include_supported_languages: S,
            include_full_description: k,
            include_included_items: R,
          } = s;
        if (
          ((0, a.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const s = {
                include_assets: l,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: m,
                include_screenshots: h,
                include_trailers: p,
                include_ratings: g,
                include_tag_count: I,
                include_reviews: v,
                include_basic_info: f,
                include_supported_languages: S,
                include_full_description: k,
                include_included_items: R,
              },
              r = e.filter(
                (e) =>
                  !(
                    _.Z.Get().BHasStoreItem(e, t, s) ||
                    _.Z.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == r.length) return;
            const i = n().CancelToken.source(),
              a = r.map((e) => _.Z.Get().QueueStoreItemRequest(e, t, s));
            return (
              Promise.all(a).then(() => {
                i.token.reason || o();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, o, l, c, d, m, h, p, g, I, v, f, S, k, R]),
          !e)
        )
          return r.k_EStoreItemCacheState_Unavailable;
        if (
          !e.every(
            (e) =>
              _.Z.Get().BHasStoreItem(e, t, s) ||
              _.Z.Get().BIsStoreItemMissing(e, t),
          )
        )
          return r.k_EStoreItemCacheState_Loading;
        return e.every((e) =>
          _.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? r.k_EStoreItemCacheState_Found
          : r.k_EStoreItemCacheState_Unavailable;
      }
      function g(e, t, s) {
        return p(e, l.vn.k_EStoreItemType_App, t, s);
      }
      !(function (e) {
        (e[(e.k_EStoreItemCacheState_Loading = 1)] =
          "k_EStoreItemCacheState_Loading"),
          (e[(e.k_EStoreItemCacheState_Unavailable = 2)] =
            "k_EStoreItemCacheState_Unavailable"),
          (e[(e.k_EStoreItemCacheState_Found = 3)] =
            "k_EStoreItemCacheState_Found");
      })(r || (r = {}));
    },
    23217: (e, t, s) => {
      s.d(t, { l: () => o });
      var r = s(42735),
        i = s(52868),
        n = s.n(i),
        a = s(67328);
      function o(e) {
        if (n().isCancel(e))
          return {
            strErrorMsg: "Action Cancelled:" + e,
            errorCode: r.s.k_EResultCancelled,
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
            if ("object" == typeof e && e instanceof a.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: r.s.k_EResultFail,
            }
          : {
              strErrorMsg: "Unknown Error: " + e,
              errorCode: r.s.k_EResultFail,
            };
      }
    },
  },
]);

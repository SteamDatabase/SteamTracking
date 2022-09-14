/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9698],
  {
    49727: (e, t, s) => {
      s.d(t, {
        A1: () => d,
        NO: () => h,
        UC: () => c,
        Z6: () => _,
        iP: () => l,
        p8: () => m,
        yp: () => o,
      });
      var n = s(67294),
        i = s(26149),
        r = s(90666),
        a = s(99663);
      const o = [
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
        ],
        l = [
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
        u = [
          "img",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
        ],
        d = (o.filter((e) => -1 == u.indexOf(e)), "{STEAM_CLAN_IMAGE}"),
        c = "{STEAM_CLAN_LOC_IMAGE}";
      function m(e, t = null, s = " ") {
        let n = null == t ? void 0 : t.join("|");
        n || (n = o.join("|") + "|\\*");
        let i = new RegExp("\\[(" + n + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(i, s);
      }
      function h(e, t = null, s = "") {
        let n = null == t ? void 0 : t.join("|");
        n || (n = o.join("|") + "|\\*");
        let i = "\\[\\/?(?:" + n + "){1,}.*?]";
        return e.replace(new RegExp(i, "gi"), s);
      }
      function p(e, t, s = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("="),
            s = t.text.indexOf(" ");
          if ((-1 != s && (-1 == e || s < e) && (e = s), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            let s = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              let t = {},
                s = "",
                n = "",
                i = 0,
                r = 0;
              "=" == e[0] && (i = 2);
              let a = !1;
              for (r++; r < e.length; r++) {
                let o = e[r],
                  l = !0,
                  u = !1;
                switch (i) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    i = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      a ||
                      (" " == o ? ((i = 0), (u = !0)) : (i = 2), (l = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((i = 0), (l = !1), (u = !0))
                      : '"' == o
                      ? ((i = 4), (l = !1))
                      : (i = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != i && !a) ||
                      ('"' == o && 4 == i && !a)) &&
                      ((i = 0), (l = !1), (u = !0));
                }
                if (l)
                  if ("\\" != o || a)
                    if (((a = !1), 1 == i)) s += o;
                    else {
                      if (3 != i && 4 != i)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + i
                        );
                      n += o;
                    }
                  else a = !0;
                u && ((t[s] = n), (s = ""), (n = ""));
              }
              0 != i && (t[s] = n);
              return t;
            })(s);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let n = new g();
        return (n.type = s), n;
      }
      class _ {
        constructor(e, t = () => new a.LT(), s) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t),
            (this.m_renderingLanguage = s || (0, i.jM)(r.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, i.jM)(r.De.LANGUAGE);
        }
        ParseBBCode(e, t, s = !1) {
          const n = (function (e, t) {
            const s = [];
            let n = new g(),
              i = !1,
              r = !1,
              a = !1;
            for (let o = 0; o < e.length; o++) {
              let l = e[o];
              switch (n.type) {
                case 0:
                  "[" == l
                    ? ((n.type = 2), (r = !0))
                    : ((n.type = 1), "\\" == l && t ? (i = !i) : (n.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && r) (n.type = 3), (n.text = ""), (r = !1);
                  else if ("[" != l || i)
                    if ("]" != l || i)
                      "\\" == l && t
                        ? ((n.text += l), (i = !i), (r = !1))
                        : ((n.text += l), (i = !1), (r = !1));
                    else {
                      const e =
                          2 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase(),
                        t =
                          3 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase();
                      r || (a && !t)
                        ? (n.ConvertMalformedNodeToText(), (n.text += l))
                        : e
                        ? (a = !0)
                        : t && (a = !1),
                        (n = p(s, n)),
                        (r = !1);
                    }
                  else
                    n.ConvertMalformedNodeToText(), (n = p(s, n, 2)), (r = !0);
                  break;
                case 1:
                  "[" != l || i
                    ? "\\" == l && t
                      ? (i && (n.text += l), (i = !i))
                      : (i && ((n.text += "\\"), (i = !1)), (n.text += l))
                    : ((n = p(s, n, 2)), (r = !0));
              }
            }
            return (
              0 != n.type &&
                ((2 != n.type && 3 != n.type) || n.ConvertMalformedNodeToText(),
                s.push(n)),
              s
            );
          })(e, s);
          return this.Parse_BuildReactComponents(n, t);
        }
        Parse_BuildReactComponents(e, t) {
          let s = this.m_fnAccumulatorFactory(void 0),
            i = [],
            r = function () {
              return i.length < 1 ? void 0 : i[i.length - 1];
            },
            a = this.m_dictComponents,
            o = this.m_renderingLanguage,
            l = !1,
            u = !0,
            d = function (e, r, d) {
              if (e && e.node.tag === r.text && a.get(e.node.tag)) {
                const r = a.get(e.node.tag),
                  c = i.map((e) => e.node.tag),
                  m = {
                    context: t,
                    parentTags: c,
                    tagname: e.node.tag,
                    args: e.node.args,
                    language: o,
                    key: `${e.node.tag}_${d}`,
                  },
                  h = n.createElement(r.Constructor, m, ...s.GetElements());
                (s = e.accumulator),
                  s.AppendNode(h),
                  (l = r.skipFollowingNewline),
                  (u = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  s.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + r.text + "]", !1),
                  (s = t),
                  (u = e.bWrapTextForCopying);
              }
            };
          for (
            e.forEach((e, t) => {
              var n, o;
              if (1 == e.type) {
                const t = l ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                s.AppendText(t, u), (l = !1);
              } else if (2 == e.type) {
                const o = a.get(e.tag);
                if (o) {
                  const c = r();
                  if (void 0 !== c) {
                    const s = a.get(c.node.tag);
                    s &&
                      s.autocloses &&
                      e.tag === c.node.tag &&
                      d(i.pop(), c.node, t);
                  }
                  i.push({ accumulator: s, node: e, bWrapTextForCopying: u }),
                    (s = this.m_fnAccumulatorFactory(e)),
                    (l = o.skipInternalNewline),
                    (u =
                      null !== (n = o.allowWrapTextForCopying) &&
                      void 0 !== n &&
                      n);
                } else s.AppendText("[" + e.text + "]", 0 == i.length);
              } else if (3 == e.type) {
                for (
                  ;
                  r() &&
                  r().node.tag !== e.text &&
                  a.get(r().node.tag) &&
                  a.get(r().node.tag).autocloses;

                ) {
                  const e = i.pop();
                  d(e, e.node, t);
                }
                if (
                  (null === (o = r()) || void 0 === o ? void 0 : o.node.tag) ==
                  e.text
                ) {
                  const s = i.pop();
                  d(s, e, t);
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
          let c = s.GetElements();
          return c.length > 1
            ? n.createElement(n.Fragment, null, ...c)
            : 1 == c.length
            ? c[0]
            : null;
        }
      }
      class g {
        constructor() {
          (this.type = 0), (this.text = "");
        }
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
    },
    99663: (e, t, s) => {
      s.d(t, { DX: () => a, LT: () => r, So: () => o });
      var n = s(67294),
        i = s(77520);
      s(49727);
      class r {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  n.createElement(
                    "span",
                    {
                      "data-copytext": "",
                      "data-copystyle": "merge-adjacent",
                      "bbcode-text": e,
                    },
                    e
                  )
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
              s.push(n.createElement("br")),
              (t = t.substr(e + 1));
          t.length && s.push(t),
            s.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    159: (e, t, s) => {
      s.d(t, { Z: () => P });
      var n = s(70655),
        i = s(22188),
        r = (s(26149), s(54698), s(58114)),
        a = s(65902),
        o = s(33019),
        l = s(40110),
        u = s(990);
      const d = o.Message;
      class c extends d {
        constructor(e = null) {
          super(),
            c.prototype.request || l.aR(c.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  request: { n: 1, c: u.eK },
                  include_unpublished: {
                    n: 2,
                    br: l.FE.readBool,
                    bw: l.Xc.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = l.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return l.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return l.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            s = new c();
          return c.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetItems_Request";
        }
      }
      var m;
      !(function (e) {
        e.GetItems = function (e, t) {
          return e.SendMsg("PartnerStoreBrowse.GetItems#1", t, u.cR, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        };
      })(m || (m = {}));
      var h = s(77520),
        p = s(93976),
        _ = s(90666),
        g = s(32367),
        f = s(14146);
      function I(e, t) {
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
          include_tag_count: Math.max(
            e.include_tag_count || 0,
            t.include_tag_count || 0
          ),
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
        };
      }
      function v(e, t) {
        return (0, n.mG)(this, void 0, void 0, function* () {
          const s = yield e,
            n = yield t;
          return 1 != s ? s : n;
        });
      }
      class P {
        constructor() {
          (this.k_QueueWaitUntilRequestMS = 5),
            (this.k_nMaxBatchSize = 250),
            (this.m_mapApps = new Map()),
            (this.m_mapPackages = new Map()),
            (this.m_mapBundles = new Map()),
            (this.m_setUnavailableApps = new Set()),
            (this.m_setUnavailablePackages = new Set()),
            (this.m_setUnavailableBundles = new Set()),
            (this.m_mapAppsInFlight = new Map()),
            (this.m_mapPackageInFlight = new Map()),
            (this.m_mapBundleInFlight = new Map()),
            (this.m_SteamInterface = null),
            (this.m_bUsePartnerAPI = !1),
            (this.m_bInitialized = !1),
            (this.m_bActivelyResettingCache = !1),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_setPendingBundleInfo = new Set()),
            (this.m_setPendingPackageInfo = new Set()),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingInfoResolve = void 0),
            (this.m_PendingTimer = void 0),
            (this.k_AlreadyResolvedOK = Promise.resolve(1)),
            (this.k_AlreadyResolvedInvalid = Promise.resolve(8)),
            (this.k_AlreadyResolvedBusy = Promise.resolve(10));
        }
        static Get() {
          return (
            P.sm_instance ||
              ((P.sm_instance = new P()),
              (window.StoreItemCache = P.sm_instance)),
            P.sm_instance
          );
        }
        static Initialize(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            (0, h.X)(
              !P.Get().m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once."
            ),
              (P.Get().m_SteamInterface = e),
              (P.Get().m_bUsePartnerAPI = !!t),
              (P.Get().m_bInitialized = !0);
          });
        }
        GetSteamInterface() {
          return this.m_SteamInterface;
        }
        SetSteamInterface(e) {
          this.m_SteamInterface = e;
        }
        ResetCache() {
          return (0, n.mG)(this, void 0, void 0, function* () {
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
              yield Promise.all(e),
              this.m_mapApps.clear(),
              this.m_mapBundles.clear(),
              this.m_mapPackages.clear(),
              (this.m_bActivelyResettingCache = !1);
          });
        }
        static BIsInitialized() {
          return P.Get().m_bInitialized;
        }
        QueueAppRequest(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 0, t);
          });
        }
        QueuePackageRequest(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 1, t);
          });
        }
        QueueBundleRequest(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 2, t);
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 0, t))
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueMultiplePackageRequests(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 1, t))
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueMultipleBundleRequests(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 2, t))
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueMultipleStoreItemRequests(e, t, s) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const n = (yield Promise.all(
              e.map((e, n) => this.QueueStoreItemRequest(e, t[n], s))
            )).filter((e) => 1 != e);
            return n.length > 0 ? n[0] : 1;
          });
        }
        QueueStoreItemRequest(e, t, s) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              ((0, h.X)(
                P.ValidateDataRequest(s),
                "Invalid Data Request: " + JSON.stringify(s)
              ),
              this.m_bActivelyResettingCache)
            )
              return (
                console.log(
                  "Rejecting store item request due to currently clearing the cache"
                ),
                this.k_AlreadyResolvedBusy
              );
            if (!e)
              return (
                (0, h.X)(
                  !e,
                  `unexpected id ${e} of zero or undefined for type ${t}`
                ),
                this.k_AlreadyResolvedInvalid
              );
            const n = this.GetPreviousSupersetLoadPromise(e, t, s);
            if (n) return n;
            switch (
              (this.m_PendingInfoPromise ||
                ((this.m_PendingInfoPromise = new Promise(
                  (e) => (this.m_PendingInfoResolve = e)
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS
                ))),
              (this.m_setPendingDataRequest = I(
                this.m_setPendingDataRequest,
                s
              )),
              t)
            ) {
              case 0:
                this.m_setPendingAppInfo.add(e);
                break;
              case 2:
                this.m_setPendingBundleInfo.add(e);
                break;
              case 1:
                this.m_setPendingPackageInfo.add(e);
                break;
              default:
                (0, h.X)(!1, `Unexpected Type ${t}`);
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (void 0 === this.m_PendingInfoResolve) return;
            const e = this.m_PendingInfoResolve,
              t = Array.from(this.m_setPendingAppInfo),
              s = Array.from(this.m_setPendingPackageInfo),
              n = Array.from(this.m_setPendingBundleInfo),
              i = this.m_setPendingDataRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              this.m_setPendingBundleInfo.clear(),
              this.m_setPendingPackageInfo.clear(),
              (this.m_setPendingDataRequest = {}),
              (this.m_PendingTimer = void 0),
              this.HintLoadStoreItems(void 0, t, s, n, i).then((t) => e(t));
          });
        }
        HintLoadStoreApps(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, e, null, null, t);
          });
        }
        HintLoadStorePackages(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, null, e, null, t);
          });
        }
        HintLoadStoreBundles(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, null, null, e, t);
          });
        }
        GetPreviousSupersetLoadPromise(e, t, s) {
          if (this.BHasStoreItem(e, t, s) || this.BIsStoreItemMissing(e, t))
            return this.k_AlreadyResolvedOK;
          let n = null;
          switch (t) {
            case 0:
              n = this.m_mapAppsInFlight.get(e);
              break;
            case 1:
              n = this.m_mapPackageInFlight.get(e);
              break;
            case 2:
              n = this.m_mapBundleInFlight.get(e);
          }
          return n && f.Z.BDataRequestContainsOtherDataRequest(n.dataRequest, s)
            ? n.promise
            : null;
        }
        HintLoadStoreItems(e, t, s, i, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = null;
            const a = new Promise((e) => (n = e));
            let o = [],
              l = [];
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 0, r);
              if (t) l.push(t);
              else {
                o.push(u.oY.fromObject({ appid: e }));
                let t = I(this.GetStoreItemDataRequest(e, 0), r);
                const s = this.m_mapAppsInFlight.get(e);
                (t = I(null == s ? void 0 : s.dataRequest, t)),
                  s && l.push(s.promise),
                  this.m_mapAppsInFlight.set(e, {
                    promise: s ? v(s.promise, a) : a,
                    dataRequest: t,
                  });
              }
            }),
              (s || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 1, r);
                if (t) l.push(t);
                else {
                  o.push(u.oY.fromObject({ packageid: e }));
                  let t = I(this.GetStoreItemDataRequest(e, 1), r);
                  const s = this.m_mapPackageInFlight.get(e);
                  (t = I(null == s ? void 0 : s.dataRequest, t)),
                    s && l.push(s.promise),
                    this.m_mapPackageInFlight.set(e, {
                      promise: s ? v(s.promise, a) : a,
                      dataRequest: t,
                    });
                }
              }),
              (i || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 2, r);
                if (t) l.push(t);
                else {
                  o.push(u.oY.fromObject({ bundleid: e }));
                  let t = I(this.GetStoreItemDataRequest(e, 2), r);
                  const s = this.m_mapBundleInFlight.get(e);
                  (t = I(null == s ? void 0 : s.dataRequest, t)),
                    s && l.push(s.promise),
                    this.m_mapBundleInFlight.set(e, {
                      promise: s ? v(s.promise, a) : a,
                      dataRequest: t,
                    });
                }
              });
            let d = 1;
            if (
              (o.length > 0 &&
                (d = yield this.InternalHandleLoadStoreItems(e, o, r)),
              n(d),
              l.length > 0)
            ) {
              const e = yield Promise.all(l);
              for (const t of e) 1 != t && 1 == d && (d = t);
            }
            return (
              (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
              (s || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
              (i || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
              d
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
              : e.bundleid() &&
                (this.m_setUnavailableBundles.add(e.bundleid()),
                this.m_mapBundles.delete(e.bundleid()));
          });
        }
        SortStoreItems(e) {
          let t = e.slice();
          return (
            t.sort((e, t) => {
              var s, n, i, r, a, o;
              let l = null !== (s = e.appid()) && void 0 !== s ? s : 0,
                u = null !== (n = t.appid()) && void 0 !== n ? n : 0;
              if (l != u) return l - u;
              let d = null !== (i = e.packageid()) && void 0 !== i ? i : 0,
                c = null !== (r = t.packageid()) && void 0 !== r ? r : 0;
              if (d != c) return d - c;
              let m = null !== (a = e.bundleid()) && void 0 !== a ? a : 0,
                h = null !== (o = t.bundleid()) && void 0 !== o ? o : 0;
              return m != h ? m - h : 0;
            }),
            t
          );
        }
        InternalHandleLoadStoreItems(e, t, s) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = 1;
            e ||
              (this.GetSteamInterface() ||
                this.SetSteamInterface(new a.J(_.De.WEBAPI_BASE_URL)),
              (e = this.GetSteamInterface())),
              (t = this.SortStoreItems(t));
            const o = new Array();
            try {
              const a = [];
              for (; t.length > 0; ) {
                const n = t.splice(0, this.k_nMaxBatchSize);
                if ((o.push(n), this.m_bUsePartnerAPI)) {
                  const t = r.gA.Init(c);
                  t.Body().set_include_unpublished(!1);
                  const i = t.Body().request(!0);
                  i.set_context((0, g.Fq)(this.m_bUsePartnerAPI)),
                    i.set_data_request(u.Qn.fromObject(s)),
                    i.set_ids(n),
                    a.push(m.GetItems(e.GetServiceTransport(), t));
                } else {
                  const t = r.gA.Init(u.eK);
                  (0, g.pA)(t, this.m_bUsePartnerAPI),
                    (0, g.De)(t, s),
                    t.Body().set_ids(n),
                    a.push(u.VJ.GetItems(e.GetAnonymousServiceTransport(), t));
                }
              }
              (yield Promise.all(a)).forEach((e, r) => {
                1 == e.GetEResult()
                  ? e
                      .Body()
                      .store_items()
                      .forEach((e) => {
                        const t = e.id(),
                          n = e.item_type();
                        if (1 != e.success() || this.BIsStoreItemMissing(t, n))
                          switch (
                            ("dev" == _.De.WEB_UNIVERSE &&
                              console.warn(
                                `Failed to load ${t} type ${n} with error ${e.success()}`,
                                e
                              ),
                            n)
                          ) {
                            case 0:
                              this.m_setUnavailableApps.add(t),
                                this.m_mapApps.delete(t);
                              break;
                            case 1:
                              this.m_setUnavailablePackages.add(t),
                                this.m_mapPackages.delete(t);
                              break;
                            case 2:
                              this.m_setUnavailableBundles.add(t),
                                this.m_mapBundles.delete(t);
                              break;
                            default:
                              console.error(
                                "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                  n +
                                  " " +
                                  t
                              );
                          }
                        else this.ReadItem(e, s);
                      })
                  : (console.error(
                      "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                        e.GetEResult() +
                        " message: " +
                        e.Hdr().error_message(),
                      (0, i.ZN)(t)
                    ),
                    (1 == e.Hdr().transport_error() || _.De.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(o[r]),
                    1 == n && (n = e.GetEResult()));
              });
            } catch (e) {
              const t = (0, p.l)(e);
              return (
                console.error(
                  "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                    t.strErrorMsg,
                  t
                ),
                o.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
                79
              );
            }
            return n;
          });
        }
        GetMapForType(e) {
          let t;
          switch (e) {
            case 0:
              t = this.m_mapApps;
              break;
            case 2:
              t = this.m_mapBundles;
              break;
            case 1:
              t = this.m_mapPackages;
              break;
            default:
              console.error("Invalid map type requested", e);
          }
          return t;
        }
        BHasStoreItem(e, t, s) {
          let n = this.GetMapForType(t);
          return Boolean(
            n && n.has(e) && (!s || n.get(e).BContainDataRequest(s))
          );
        }
        GetStoreItem(e, t) {
          if (-1 == t || 3 == t) return;
          const s = this.GetMapForType(t);
          return null == s ? void 0 : s.get(e);
        }
        GetStoreItemDataRequest(e, t) {
          var s, n;
          return (
            (null ===
              (n =
                null === (s = this.GetMapForType(t)) || void 0 === s
                  ? void 0
                  : s.get(e)) || void 0 === n
              ? void 0
              : n.GetDataRequest()) || null
          );
        }
        BHasApp(e, t) {
          return this.BHasStoreItem(e, 0, t);
        }
        GetApp(e) {
          return this.GetStoreItem(e, 0);
        }
        BHasPackage(e, t) {
          return this.BHasStoreItem(e, 1, t);
        }
        GetPackage(e) {
          return this.GetStoreItem(e, 1);
        }
        BHasBundle(e, t) {
          return this.BHasStoreItem(e, 2, t);
        }
        GetBundle(e) {
          return this.GetStoreItem(e, 2);
        }
        BIsStoreItemMissing(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppMissing(e);
            case 1:
              return this.BIsPackageMissing(e);
            case 2:
              return this.BIsBundleMissing(e);
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
        ReadResults(e, t) {
          let s = [];
          for (const n of e) s.push(this.ReadItem(n, t));
          return s;
        }
        ReadItem(e, t) {
          const s = e.item_type();
          let n = null;
          switch (s) {
            case 0:
              n = this.m_mapApps;
              break;
            case 1:
              n = this.m_mapPackages;
              break;
            case 2:
              n = this.m_mapBundles;
              break;
            default:
              return console.error(`Invalid item type: ${s}`), null;
          }
          let i = n.get(e.id());
          return (
            i ? i.MergeData(e, t) : ((i = new f.Z(e, t)), n.set(e.id(), i)), i
          );
        }
      }
      (P.k_DataRequest_CommonOnly = {}),
        (P.k_DataRequest_BasicInfo = { include_basic_info: !0 }),
        (P.k_DataRequest_Assets = { include_assets: !0 }),
        (P.k_DataRequest_IncludeAll = {
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
    },
    52114: (e, t, s) => {
      s.d(t, {
        Vm: () => c,
        ie: () => d,
        jk: () => l,
        vs: () => u,
        wZ: () => h,
      });
      var n = s(9669),
        i = s.n(n),
        r = s(67294),
        a = (s(49727), s(54698), s(990), s(22975)),
        o = (s(14146), s(159));
      function l(e, t, s, n) {
        const a = (0, r.useRef)(),
          l = (0, r.useRef)(void 0);
        a.current = e;
        const [u, d] = (0, r.useState)(void 0),
          {
            include_assets: c,
            include_release: m,
            include_platforms: h,
            include_all_purchase_options: p,
            include_screenshots: _,
            include_trailers: g,
            include_ratings: f,
            include_tag_count: I,
            include_reviews: v,
            include_basic_info: P,
            include_supported_languages: S,
          } = s;
        if (
          ((0, r.useEffect)(() => {
            const s = {
              include_assets: c,
              include_release: m,
              include_platforms: h,
              include_all_purchase_options: p,
              include_screenshots: _,
              include_trailers: g,
              include_ratings: f,
              include_tag_count: I,
              include_reviews: v,
              include_basic_info: P,
              include_supported_languages: S,
            };
            if (
              !e ||
              o.Z.Get().BHasStoreItem(e, t, s) ||
              (void 0 !== u && n == l.current)
            )
              return;
            l.current = n;
            const r = i().CancelToken.source();
            return (
              o.Z.Get()
                .QueueStoreItemRequest(e, t, s)
                .then((t) => {
                  r.token.reason || a.current !== e || d(1 == t);
                }),
              () => r.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, n, u, c, m, h, p, _, g, f, I, v, P, S]),
          !e)
        )
          return [null, 2];
        if (!1 === u) return [void 0, 2];
        if (o.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.Z.Get().BHasStoreItem(e, t, s)) return [void 0, 1];
        const b = o.Z.Get().GetStoreItem(e, t);
        return (null == b ? void 0 : b.BIsVisible()) ? [b, 3] : [null, 2];
      }
      function u(e, t, s) {
        return l(e, 0, t, s);
      }
      function d(e, t, s) {
        return l(e, 1, t, s);
      }
      function c(e, t, s) {
        const [n, a] = l(e, t, s),
          [o, d] = (0, r.useState)(null),
          [c, m] = u(o, s);
        return (
          (0, r.useEffect)(() => {
            var e;
            const t = i().CancelToken.source();
            if (
              1 == (null == n ? void 0 : n.GetStoreItemType()) &&
              1 == (null == n ? void 0 : n.GetIncludedAppIDs().length)
            ) {
              const s = n.GetIncludedAppIDs()[0];
              o != s &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  d(s));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [o, n]),
          o ? [c, m] : [n, a]
        );
      }
      function m(e, t, s, n) {
        const l = (0, a.NW)(),
          {
            include_assets: u,
            include_release: d,
            include_platforms: c,
            include_all_purchase_options: m,
            include_screenshots: h,
            include_trailers: p,
            include_ratings: _,
            include_tag_count: g,
            include_reviews: f,
            include_basic_info: I,
            include_supported_languages: v,
          } = s;
        if (
          ((0, r.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const s = {
                include_assets: u,
                include_release: d,
                include_platforms: c,
                include_all_purchase_options: m,
                include_screenshots: h,
                include_trailers: p,
                include_ratings: _,
                include_tag_count: g,
                include_reviews: f,
                include_basic_info: I,
                include_supported_languages: v,
              },
              n = e.filter((e) => !o.Z.Get().BHasStoreItem(e, t));
            if (0 == n.length) return;
            const r = i().CancelToken.source(),
              a = n.map((e) => o.Z.Get().QueueStoreItemRequest(e, t, s));
            return (
              Promise.all(a).then(() => {
                r.token.reason || l();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, n, l, u, d, c, m, h, p, _, g, f, I, v]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              o.Z.Get().BHasStoreItem(e, t, s) ||
              o.Z.Get().BIsStoreItemMissing(e, t)
          )
        )
          return 1;
        return e.every((e) => {
          var s;
          return null === (s = o.Z.Get().GetStoreItem(e, t)) || void 0 === s
            ? void 0
            : s.BIsVisible();
        })
          ? 3
          : 2;
      }
      function h(e, t, s) {
        return m(e, 0, t, s);
      }
    },
  },
]);

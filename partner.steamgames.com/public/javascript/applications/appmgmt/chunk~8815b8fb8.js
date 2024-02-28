/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6513],
  {
    83682: (e, t, n) => {
      n.d(t, {
        Z6: () => a,
        p8: () => h,
        NO: () => m,
        UC: () => f,
        A1: () => g,
        yp: () => d,
        iP: () => p,
      });
      var r = n(47427),
        s = n(77936),
        o = n(37563),
        i = n(4481);
      class l {
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
      class u {
        constructor(e, t) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !1) {
          const r = (function (e, t) {
            const n = [];
            let r = new l(),
              s = !1,
              o = !1,
              i = !1;
            for (let l = 0; l < e.length; l++) {
              let u = e[l];
              switch (r.type) {
                case 0:
                  "[" == u
                    ? ((r.type = 2), (o = !0))
                    : ((r.type = 1), "\\" == u && t ? (s = !s) : (r.text += u));
                  break;
                case 2:
                case 3:
                  if ("/" == u && o) (r.type = 3), (r.text = ""), (o = !1);
                  else if ("[" != u || s)
                    if ("]" != u || s)
                      "\\" == u && t
                        ? ((r.text += u), (s = !s), (o = !1))
                        : ((r.text += u), (s = !1), (o = !1));
                    else {
                      const e =
                          2 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase(),
                        t =
                          3 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase();
                      o || (i && !t)
                        ? (r.ConvertMalformedNodeToText(), (r.text += u))
                        : e
                        ? (i = !0)
                        : t && (i = !1),
                        (r = c(n, r)),
                        (o = !1);
                    }
                  else
                    r.ConvertMalformedNodeToText(), (r = c(n, r, 2)), (o = !0);
                  break;
                case 1:
                  "[" != u || s
                    ? "\\" == u && t
                      ? (s && (r.text += u), (s = !s))
                      : ((r.text += u), (s = !1))
                    : ((r = c(n, r, 2)), (o = !0));
              }
            }
            0 != r.type &&
              ((2 != r.type && 3 != r.type) || r.ConvertMalformedNodeToText(),
              n.push(r));
            return n;
          })(e, n);
          return this.Parse_BuildElements(r, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0),
            r = [],
            s = function () {
              return r.length < 1 ? void 0 : r[r.length - 1];
            },
            o = this.m_dictComponents,
            i = !1,
            l = !0,
            u = function (e, s, u) {
              if (e && e.node.tag === s.text && o.get(e.node.tag)) {
                const s = o.get(e.node.tag),
                  u = r.map((e) => e.node.tag),
                  c = { parentTags: u, tagname: e.node.tag, args: e.node.args },
                  a = t(s.Constructor, c, ...n.GetElements());
                (n = e.accumulator),
                  n.AppendNode(a),
                  (i = s.skipFollowingNewline),
                  (l = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  n.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + s.text + "]", !1),
                  (n = t),
                  (l = e.bWrapTextForCopying);
              }
            };
          for (
            e.forEach((e, t) => {
              var c, a;
              if (1 == e.type) {
                const t = i ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, l), (i = !1);
              } else if (2 == e.type) {
                const t = o.get(e.tag);
                if (t) {
                  const a = s();
                  if (void 0 !== a) {
                    const t = o.get(a.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === a.node.tag &&
                      u(r.pop(), a.node);
                  }
                  r.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (i = t.skipInternalNewline),
                    (l =
                      null !== (c = t.allowWrapTextForCopying) &&
                      void 0 !== c &&
                      c);
                } else n.AppendText("[" + e.text + "]", 0 == r.length);
              } else if (3 == e.type) {
                for (
                  ;
                  s() &&
                  s().node.tag !== e.text &&
                  o.get(s().node.tag) &&
                  o.get(s().node.tag).autocloses;

                ) {
                  const e = r.pop();
                  u(e, e.node);
                }
                if (
                  (null === (a = s()) || void 0 === a ? void 0 : a.node.tag) ==
                  e.text
                ) {
                  const t = r.pop();
                  u(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == r.length);
              }
            });
            r.length > 0;

          ) {
            let e = r.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              n.GetElements().forEach((e) => t.AppendNode(e)),
              (n = t);
          }
          return n.GetElements();
        }
      }
      function c(e, t, n = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("="),
            n = t.text.indexOf(" ");
          if ((-1 != n && (-1 == e || n < e) && (e = n), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            let n = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              let t = {},
                n = "",
                r = "",
                s = 0,
                o = 0;
              "=" == e[0] && (s = 2);
              let i = !1;
              for (o++; o < e.length; o++) {
                let l = e[o],
                  u = !0,
                  c = !1;
                switch (s) {
                  case 0:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    s = 1;
                    break;
                  case 1:
                    ("=" != l && " " != l) ||
                      i ||
                      (" " == l ? ((s = 0), (c = !0)) : (s = 2), (u = !1));
                    break;
                  case 2:
                    " " == l
                      ? ((s = 0), (u = !1), (c = !0))
                      : '"' == l
                      ? ((s = 4), (u = !1))
                      : (s = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == l && 4 != s && !i) ||
                      ('"' == l && 4 == s && !i)) &&
                      ((s = 0), (u = !1), (c = !0));
                }
                if (u)
                  if ("\\" != l || i)
                    if (((i = !1), 1 == s)) n += l;
                    else {
                      if (3 != s && 4 != s)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + s,
                        );
                      r += l;
                    }
                  else i = !0;
                c && ((t[n] = r), (n = ""), (r = ""));
              }
              0 != s && (t[n] = r);
              return t;
            })(n);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let r = new l();
        return (r.type = n), r;
      }
      class a extends u {
        constructor(e, t, n) {
          super(e, null != t ? t : () => new i.LT()),
            (this.m_renderingLanguage = n || (0, s.jM)(o.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, s.jM)(o.De.LANGUAGE);
        }
        ParseBBCode(e, t, n = !1) {
          let s = 0;
          const o = this.Parse(
            e,
            (e, n, ...o) =>
              r.createElement(
                e,
                Object.assign(Object.assign({}, n), {
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + s++,
                }),
                ...o,
              ),
            n,
          );
          return o.length > 1
            ? r.createElement(r.Fragment, null, ...o)
            : 1 == o.length
            ? o[0]
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
        p = [
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
        _ = [
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
        g = (d.filter((e) => -1 == _.indexOf(e)), "{STEAM_CLAN_IMAGE}"),
        f = "{STEAM_CLAN_LOC_IMAGE}";
      function h(e, t = null, n = " ") {
        let r = null == t ? void 0 : t.join("|");
        r || (r = d.join("|") + "|\\*");
        let s = new RegExp("\\[(" + r + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(s, n);
      }
      function m(e, t = null, n = "") {
        let r = null == t ? void 0 : t.join("|");
        r || (r = d.join("|") + "|\\*");
        let s = "\\[\\/?(?:" + r + "){1,}.*?]";
        return e.replace(new RegExp(s, "gi"), n);
      }
    },
    4481: (e, t, n) => {
      n.d(t, { DX: () => i, LT: () => o, So: () => l });
      var r = n(47427),
        s = n(62210);
      class o {
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
      class i {
        constructor(e) {
          (0, s.X)(e, "decorated accumulator cannot be null"),
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
      class l extends i {
        constructor(e, t, n) {
          super(e),
            (this.m_nStartCursor = 1),
            (this.m_nStartCursor = void 0 !== t ? t : 1);
        }
        AppendText(e) {
          let t = e,
            n = [];
          for (
            let e = t.indexOf("\n", this.m_nStartCursor);
            -1 !== e;
            e = t.indexOf("\n")
          )
            n.push(t.substr(0, e)),
              n.push(r.createElement("br")),
              (t = t.substr(e + 1));
          t.length && n.push(t),
            n.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    19399: (e, t, n) => {
      n.d(t, { HZ: () => l, OL: () => o, pd: () => i });
      var r = n(83682),
        s = n(65255);
      function o() {
        return `${s.De.CLAN_CDN_ASSET_URL}images/`;
      }
      function i(e) {
        return (e = e.replace(r.A1, o())).replace("http://", "https://");
      }
      function l(e) {
        return e.replace(/{STEAM_CLAN_IMAGE}/g, o());
      }
    },
    80886: (e, t, n) => {
      n.d(t, {
        Vm: () => p,
        dY: () => f,
        ie: () => d,
        jk: () => u,
        vs: () => c,
        wZ: () => g,
        yo: () => a,
      });
      var r = n(80751),
        s = n.n(r),
        o = n(47427),
        i = (n(83682), n(20417)),
        l = n(15690);
      function u(e, t, n, r) {
        const u = (0, o.useRef)(),
          c = (0, o.useRef)(void 0),
          a = (0, i.NW)();
        u.current = e;
        const [d, p] = (0, o.useState)(void 0),
          {
            include_assets: _,
            include_release: g,
            include_platforms: f,
            include_all_purchase_options: h,
            include_screenshots: m,
            include_trailers: x,
            include_ratings: v,
            include_tag_count: y,
            include_reviews: A,
            include_basic_info: b,
            include_supported_languages: C,
            include_full_description: T,
            include_included_items: E,
            include_assets_without_overrides: w,
            apply_user_filters: G,
          } = n;
        if (
          ((0, o.useEffect)(() => {
            const n = {
              include_assets: _,
              include_release: g,
              include_platforms: f,
              include_all_purchase_options: h,
              include_screenshots: m,
              include_trailers: x,
              include_ratings: v,
              include_tag_count: y,
              include_reviews: A,
              include_basic_info: b,
              include_supported_languages: C,
              include_full_description: T,
              include_included_items: E,
              include_assets_without_overrides: w,
              apply_user_filters: G,
            };
            let o = null;
            return (
              !e ||
                l.Z.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && r && r == c.current) ||
                (r !== c.current && (p(void 0), (c.current = r)),
                (o = s().CancelToken.source()),
                l.Z.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    (null == o ? void 0 : o.token.reason) ||
                      u.current !== e ||
                      p(1 == t),
                      a();
                  })),
              () =>
                null == o ? void 0 : o.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, r, d, _, g, f, h, m, x, v, y, A, b, C, T, E, w, G, a]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (l.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!l.Z.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const k = l.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return k ? [k, 3] : [null, 2];
      }
      function c(e, t, n) {
        return u(e, 0, t, n);
      }
      function a(e, t, n) {
        return u(e, 2, t, n);
      }
      function d(e, t, n) {
        return u(e, 1, t, n);
      }
      function p(e, t, n) {
        const [r, i] = u(e, t, n),
          [l, a] = (0, o.useState)(null),
          [d, p] = c(l, n);
        return (
          (0, o.useEffect)(() => {
            var e;
            const t = s().CancelToken.source();
            if (
              1 == (null == r ? void 0 : r.GetStoreItemType()) &&
              1 == (null == r ? void 0 : r.GetIncludedAppIDs().length)
            ) {
              const n = r.GetIncludedAppIDs()[0];
              l != n &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  a(n));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [l, r]),
          l ? [d, p] : [r, i]
        );
      }
      function _(e, t, n, r) {
        const u = (0, i.NW)(),
          {
            include_assets: c,
            include_release: a,
            include_platforms: d,
            include_all_purchase_options: p,
            include_screenshots: _,
            include_trailers: g,
            include_ratings: f,
            include_tag_count: h,
            include_reviews: m,
            include_basic_info: x,
            include_supported_languages: v,
            include_full_description: y,
            include_included_items: A,
            include_assets_without_overrides: b,
            apply_user_filters: C,
          } = n;
        if (
          ((0, o.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: c,
                include_release: a,
                include_platforms: d,
                include_all_purchase_options: p,
                include_screenshots: _,
                include_trailers: g,
                include_ratings: f,
                include_tag_count: h,
                include_reviews: m,
                include_basic_info: x,
                include_supported_languages: v,
                include_full_description: y,
                include_included_items: A,
                include_assets_without_overrides: b,
                apply_user_filters: C,
              },
              r = e.filter(
                (e) =>
                  !(
                    l.Z.Get().BHasStoreItem(e, t, n) ||
                    l.Z.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == r.length) return;
            const o = s().CancelToken.source(),
              i = r.map((e) => l.Z.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(i).then(() => {
                o.token.reason || u();
              }),
              () => o.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, r, u, c, a, d, p, _, g, f, h, m, x, v, y, A, b, C]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              l.Z.Get().BHasStoreItem(e, t, n) ||
              l.Z.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          l.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function g(e, t, n) {
        return _(e, 0, t, n);
      }
      function f(e, t, n) {
        return _(e, 1, t, n);
      }
    },
  },
]);

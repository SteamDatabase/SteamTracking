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
        p8: () => m,
        NO: () => f,
        UC: () => h,
        A1: () => g,
        yp: () => d,
        iP: () => p,
      });
      var o = n(47427),
        r = n(77936),
        s = n(37563),
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
          const o = (function (e, t) {
            const n = [];
            let o = new l(),
              r = !1,
              s = !1,
              i = !1;
            for (let l = 0; l < e.length; l++) {
              let u = e[l];
              switch (o.type) {
                case 0:
                  "[" == u
                    ? ((o.type = 2), (s = !0))
                    : ((o.type = 1), "\\" == u && t ? (r = !r) : (o.text += u));
                  break;
                case 2:
                case 3:
                  if ("/" == u && s) (o.type = 3), (o.text = ""), (s = !1);
                  else if ("[" != u || r)
                    if ("]" != u || r)
                      "\\" == u && t
                        ? ((o.text += u), (r = !r), (s = !1))
                        : ((o.text += u), (r = !1), (s = !1));
                    else {
                      const e =
                          2 == o.type &&
                          "noparse" == o.text.toLocaleLowerCase(),
                        t =
                          3 == o.type &&
                          "noparse" == o.text.toLocaleLowerCase();
                      s || (i && !t)
                        ? (o.ConvertMalformedNodeToText(), (o.text += u))
                        : e
                        ? (i = !0)
                        : t && (i = !1),
                        (o = c(n, o)),
                        (s = !1);
                    }
                  else
                    o.ConvertMalformedNodeToText(), (o = c(n, o, 2)), (s = !0);
                  break;
                case 1:
                  "[" != u || r
                    ? "\\" == u && t
                      ? (r && (o.text += u), (r = !r))
                      : ((o.text += u), (r = !1))
                    : ((o = c(n, o, 2)), (s = !0));
              }
            }
            0 != o.type &&
              ((2 != o.type && 3 != o.type) || o.ConvertMalformedNodeToText(),
              n.push(o));
            return n;
          })(e, n);
          return this.Parse_BuildElements(o, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0),
            o = [],
            r = function () {
              return o.length < 1 ? void 0 : o[o.length - 1];
            },
            s = this.m_dictComponents,
            i = !1,
            l = !0,
            u = function (e, r, u) {
              if (e && e.node.tag === r.text && s.get(e.node.tag)) {
                const r = s.get(e.node.tag),
                  u = o.map((e) => e.node.tag),
                  c = { parentTags: u, tagname: e.node.tag, args: e.node.args },
                  a = t(r.Constructor, c, ...n.GetElements());
                (n = e.accumulator),
                  n.AppendNode(a),
                  (i = r.skipFollowingNewline),
                  (l = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  n.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + r.text + "]", !1),
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
                const t = s.get(e.tag);
                if (t) {
                  const a = r();
                  if (void 0 !== a) {
                    const t = s.get(a.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === a.node.tag &&
                      u(o.pop(), a.node);
                  }
                  o.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (i = t.skipInternalNewline),
                    (l =
                      null !== (c = t.allowWrapTextForCopying) &&
                      void 0 !== c &&
                      c);
                } else n.AppendText("[" + e.text + "]", 0 == o.length);
              } else if (3 == e.type) {
                for (
                  ;
                  r() &&
                  r().node.tag !== e.text &&
                  s.get(r().node.tag) &&
                  s.get(r().node.tag).autocloses;

                ) {
                  const e = o.pop();
                  u(e, e.node);
                }
                if (
                  (null === (a = r()) || void 0 === a ? void 0 : a.node.tag) ==
                  e.text
                ) {
                  const t = o.pop();
                  u(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == o.length);
              }
            });
            o.length > 0;

          ) {
            let e = o.pop(),
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
                o = "",
                r = 0,
                s = 0;
              "=" == e[0] && (r = 2);
              let i = !1;
              for (s++; s < e.length; s++) {
                let l = e[s],
                  u = !0,
                  c = !1;
                switch (r) {
                  case 0:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    r = 1;
                    break;
                  case 1:
                    ("=" != l && " " != l) ||
                      i ||
                      (" " == l ? ((r = 0), (c = !0)) : (r = 2), (u = !1));
                    break;
                  case 2:
                    " " == l
                      ? ((r = 0), (u = !1), (c = !0))
                      : '"' == l
                      ? ((r = 4), (u = !1))
                      : (r = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == l && 4 != r && !i) ||
                      ('"' == l && 4 == r && !i)) &&
                      ((r = 0), (u = !1), (c = !0));
                }
                if (u)
                  if ("\\" != l || i)
                    if (((i = !1), 1 == r)) n += l;
                    else {
                      if (3 != r && 4 != r)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + r,
                        );
                      o += l;
                    }
                  else i = !0;
                c && ((t[n] = o), (n = ""), (o = ""));
              }
              0 != r && (t[n] = o);
              return t;
            })(n);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let o = new l();
        return (o.type = n), o;
      }
      class a extends u {
        constructor(e, t, n) {
          super(e, null != t ? t : () => new i.LT()),
            (this.m_renderingLanguage = n || (0, r.jM)(s.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, r.jM)(s.De.LANGUAGE);
        }
        ParseBBCode(e, t, n = !1) {
          let r = 0;
          const s = this.Parse(
            e,
            (e, n, ...s) =>
              o.createElement(
                e,
                Object.assign(Object.assign({}, n), {
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + r++,
                }),
                ...s,
              ),
            n,
          );
          return s.length > 1
            ? o.createElement(o.Fragment, null, ...s)
            : 1 == s.length
            ? s[0]
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
        h = "{STEAM_CLAN_LOC_IMAGE}";
      function m(e, t = null, n = " ") {
        let o = null == t ? void 0 : t.join("|");
        o || (o = d.join("|") + "|\\*");
        let r = new RegExp("\\[(" + o + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(r, n);
      }
      function f(e, t = null, n = "") {
        let o = null == t ? void 0 : t.join("|");
        o || (o = d.join("|") + "|\\*");
        let r = "\\[\\/?(?:" + o + "){1,}.*?]";
        return e.replace(new RegExp(r, "gi"), n);
      }
    },
    4481: (e, t, n) => {
      n.d(t, { DX: () => i, LT: () => s, So: () => l });
      var o = n(47427),
        r = n(62210);
      class s {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  o.createElement(
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
          (0, r.X)(e, "decorated accumulator cannot be null"),
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
              n.push(o.createElement("br")),
              (t = t.substr(e + 1));
          t.length && n.push(t),
            n.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    19399: (e, t, n) => {
      n.d(t, { HZ: () => l, OL: () => s, pd: () => i });
      var o = n(83682),
        r = n(65255);
      function s() {
        return `${r.De.CLAN_CDN_ASSET_URL}images/`;
      }
      function i(e) {
        return (e = e.replace(o.A1, s())).replace("http://", "https://");
      }
      function l(e) {
        return e.replace(/{STEAM_CLAN_IMAGE}/g, s());
      }
    },
    80886: (e, t, n) => {
      n.d(t, {
        Vm: () => p,
        dY: () => h,
        ie: () => d,
        jk: () => u,
        vs: () => c,
        wZ: () => g,
        yo: () => a,
      });
      var o = n(80751),
        r = n.n(o),
        s = n(47427),
        i = (n(83682), n(20417)),
        l = n(15690);
      function u(e, t, n, o) {
        const u = (0, s.useRef)(),
          c = (0, s.useRef)(void 0),
          a = (0, i.NW)();
        u.current = e;
        const [d, p] = (0, s.useState)(void 0),
          {
            include_assets: _,
            include_release: g,
            include_platforms: h,
            include_all_purchase_options: m,
            include_screenshots: f,
            include_trailers: x,
            include_ratings: v,
            include_tag_count: A,
            include_reviews: y,
            include_basic_info: b,
            include_supported_languages: C,
            include_full_description: T,
            include_included_items: E,
            include_assets_without_overrides: w,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            const n = {
              include_assets: _,
              include_release: g,
              include_platforms: h,
              include_all_purchase_options: m,
              include_screenshots: f,
              include_trailers: x,
              include_ratings: v,
              include_tag_count: A,
              include_reviews: y,
              include_basic_info: b,
              include_supported_languages: C,
              include_full_description: T,
              include_included_items: E,
              include_assets_without_overrides: w,
            };
            let s = null;
            return (
              !e ||
                l.Z.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && o && o == c.current) ||
                (o !== c.current && (p(void 0), (c.current = o)),
                (s = r().CancelToken.source()),
                l.Z.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    s.token.reason || u.current !== e || p(1 == t), a();
                  })),
              () => s && s.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, o, d, _, g, h, m, f, x, v, A, y, b, C, T, E, w, a]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (l.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!l.Z.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const G = l.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return G ? [G, 3] : [null, 2];
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
        const [o, i] = u(e, t, n),
          [l, a] = (0, s.useState)(null),
          [d, p] = c(l, n);
        return (
          (0, s.useEffect)(() => {
            var e;
            const t = r().CancelToken.source();
            if (
              1 == (null == o ? void 0 : o.GetStoreItemType()) &&
              1 == (null == o ? void 0 : o.GetIncludedAppIDs().length)
            ) {
              const n = o.GetIncludedAppIDs()[0];
              l != n &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  a(n));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [l, o]),
          l ? [d, p] : [o, i]
        );
      }
      function _(e, t, n, o) {
        const u = (0, i.NW)(),
          {
            include_assets: c,
            include_release: a,
            include_platforms: d,
            include_all_purchase_options: p,
            include_screenshots: _,
            include_trailers: g,
            include_ratings: h,
            include_tag_count: m,
            include_reviews: f,
            include_basic_info: x,
            include_supported_languages: v,
            include_full_description: A,
            include_included_items: y,
            include_assets_without_overrides: b,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: c,
                include_release: a,
                include_platforms: d,
                include_all_purchase_options: p,
                include_screenshots: _,
                include_trailers: g,
                include_ratings: h,
                include_tag_count: m,
                include_reviews: f,
                include_basic_info: x,
                include_supported_languages: v,
                include_full_description: A,
                include_included_items: y,
                include_assets_without_overrides: b,
              },
              o = e.filter(
                (e) =>
                  !(
                    l.Z.Get().BHasStoreItem(e, t, n) ||
                    l.Z.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == o.length) return;
            const s = r().CancelToken.source(),
              i = o.map((e) => l.Z.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(i).then(() => {
                s.token.reason || u();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, o, u, c, a, d, p, _, g, h, m, f, x, v, A, y, b]),
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
      function h(e, t, n) {
        return _(e, 1, t, n);
      }
    },
  },
]);

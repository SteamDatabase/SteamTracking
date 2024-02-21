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
        NO: () => h,
        UC: () => f,
        A1: () => g,
        yp: () => d,
        iP: () => p,
      });
      var s = n(47427),
        o = n(77936),
        r = n(37563),
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
          const s = (function (e, t) {
            const n = [];
            let s = new l(),
              o = !1,
              r = !1,
              i = !1;
            for (let l = 0; l < e.length; l++) {
              let u = e[l];
              switch (s.type) {
                case 0:
                  "[" == u
                    ? ((s.type = 2), (r = !0))
                    : ((s.type = 1), "\\" == u && t ? (o = !o) : (s.text += u));
                  break;
                case 2:
                case 3:
                  if ("/" == u && r) (s.type = 3), (s.text = ""), (r = !1);
                  else if ("[" != u || o)
                    if ("]" != u || o)
                      "\\" == u && t
                        ? ((s.text += u), (o = !o), (r = !1))
                        : ((s.text += u), (o = !1), (r = !1));
                    else {
                      const e =
                          2 == s.type &&
                          "noparse" == s.text.toLocaleLowerCase(),
                        t =
                          3 == s.type &&
                          "noparse" == s.text.toLocaleLowerCase();
                      r || (i && !t)
                        ? (s.ConvertMalformedNodeToText(), (s.text += u))
                        : e
                        ? (i = !0)
                        : t && (i = !1),
                        (s = c(n, s)),
                        (r = !1);
                    }
                  else
                    s.ConvertMalformedNodeToText(), (s = c(n, s, 2)), (r = !0);
                  break;
                case 1:
                  "[" != u || o
                    ? "\\" == u && t
                      ? (o && (s.text += u), (o = !o))
                      : ((s.text += u), (o = !1))
                    : ((s = c(n, s, 2)), (r = !0));
              }
            }
            0 != s.type &&
              ((2 != s.type && 3 != s.type) || s.ConvertMalformedNodeToText(),
              n.push(s));
            return n;
          })(e, n);
          return this.Parse_BuildElements(s, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0),
            s = [],
            o = function () {
              return s.length < 1 ? void 0 : s[s.length - 1];
            },
            r = this.m_dictComponents,
            i = !1,
            l = !0,
            u = function (e, o, u) {
              if (e && e.node.tag === o.text && r.get(e.node.tag)) {
                const o = r.get(e.node.tag),
                  u = s.map((e) => e.node.tag),
                  c = { parentTags: u, tagname: e.node.tag, args: e.node.args },
                  a = t(o.Constructor, c, ...n.GetElements());
                (n = e.accumulator),
                  n.AppendNode(a),
                  (i = o.skipFollowingNewline),
                  (l = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  n.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + o.text + "]", !1),
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
                const t = r.get(e.tag);
                if (t) {
                  const a = o();
                  if (void 0 !== a) {
                    const t = r.get(a.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === a.node.tag &&
                      u(s.pop(), a.node);
                  }
                  s.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (i = t.skipInternalNewline),
                    (l =
                      null !== (c = t.allowWrapTextForCopying) &&
                      void 0 !== c &&
                      c);
                } else n.AppendText("[" + e.text + "]", 0 == s.length);
              } else if (3 == e.type) {
                for (
                  ;
                  o() &&
                  o().node.tag !== e.text &&
                  r.get(o().node.tag) &&
                  r.get(o().node.tag).autocloses;

                ) {
                  const e = s.pop();
                  u(e, e.node);
                }
                if (
                  (null === (a = o()) || void 0 === a ? void 0 : a.node.tag) ==
                  e.text
                ) {
                  const t = s.pop();
                  u(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == s.length);
              }
            });
            s.length > 0;

          ) {
            let e = s.pop(),
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
                s = "",
                o = 0,
                r = 0;
              "=" == e[0] && (o = 2);
              let i = !1;
              for (r++; r < e.length; r++) {
                let l = e[r],
                  u = !0,
                  c = !1;
                switch (o) {
                  case 0:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    o = 1;
                    break;
                  case 1:
                    ("=" != l && " " != l) ||
                      i ||
                      (" " == l ? ((o = 0), (c = !0)) : (o = 2), (u = !1));
                    break;
                  case 2:
                    " " == l
                      ? ((o = 0), (u = !1), (c = !0))
                      : '"' == l
                      ? ((o = 4), (u = !1))
                      : (o = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == l && 4 != o && !i) ||
                      ('"' == l && 4 == o && !i)) &&
                      ((o = 0), (u = !1), (c = !0));
                }
                if (u)
                  if ("\\" != l || i)
                    if (((i = !1), 1 == o)) n += l;
                    else {
                      if (3 != o && 4 != o)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + o,
                        );
                      s += l;
                    }
                  else i = !0;
                c && ((t[n] = s), (n = ""), (s = ""));
              }
              0 != o && (t[n] = s);
              return t;
            })(n);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let s = new l();
        return (s.type = n), s;
      }
      class a extends u {
        constructor(e, t, n) {
          super(e, null != t ? t : () => new i.LT()),
            (this.m_renderingLanguage = n || (0, o.jM)(r.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, o.jM)(r.De.LANGUAGE);
        }
        ParseBBCode(e, t, n = !1) {
          let o = 0;
          const r = this.Parse(
            e,
            (e, n, ...r) =>
              s.createElement(
                e,
                Object.assign(Object.assign({}, n), {
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + o++,
                }),
                ...r,
              ),
            n,
          );
          return r.length > 1
            ? s.createElement(s.Fragment, null, ...r)
            : 1 == r.length
            ? r[0]
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
      function m(e, t = null, n = " ") {
        let s = null == t ? void 0 : t.join("|");
        s || (s = d.join("|") + "|\\*");
        let o = new RegExp("\\[(" + s + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(o, n);
      }
      function h(e, t = null, n = "") {
        let s = null == t ? void 0 : t.join("|");
        s || (s = d.join("|") + "|\\*");
        let o = "\\[\\/?(?:" + s + "){1,}.*?]";
        return e.replace(new RegExp(o, "gi"), n);
      }
    },
    4481: (e, t, n) => {
      n.d(t, { DX: () => i, LT: () => r, So: () => l });
      var s = n(47427),
        o = n(62210);
      class r {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  s.createElement(
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
          (0, o.X)(e, "decorated accumulator cannot be null"),
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
              n.push(s.createElement("br")),
              (t = t.substr(e + 1));
          t.length && n.push(t),
            n.forEach((e) => {
              super.AppendNode(e);
            });
        }
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
      var s = n(80751),
        o = n.n(s),
        r = n(47427),
        i = (n(83682), n(20417)),
        l = n(15690);
      function u(e, t, n, s) {
        const u = (0, r.useRef)(),
          c = (0, r.useRef)(void 0),
          a = (0, i.NW)();
        u.current = e;
        const [d, p] = (0, r.useState)(void 0),
          {
            include_assets: _,
            include_release: g,
            include_platforms: f,
            include_all_purchase_options: m,
            include_screenshots: h,
            include_trailers: x,
            include_ratings: v,
            include_tag_count: y,
            include_reviews: b,
            include_basic_info: A,
            include_supported_languages: C,
            include_full_description: w,
            include_included_items: T,
            include_assets_without_overrides: k,
            apply_user_filters: E,
          } = n;
        if (
          ((0, r.useEffect)(() => {
            const n = {
              include_assets: _,
              include_release: g,
              include_platforms: f,
              include_all_purchase_options: m,
              include_screenshots: h,
              include_trailers: x,
              include_ratings: v,
              include_tag_count: y,
              include_reviews: b,
              include_basic_info: A,
              include_supported_languages: C,
              include_full_description: w,
              include_included_items: T,
              include_assets_without_overrides: k,
              apply_user_filters: E,
            };
            let r = null;
            return (
              !e ||
                l.Z.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && s && s == c.current) ||
                (s !== c.current && (p(void 0), (c.current = s)),
                (r = o().CancelToken.source()),
                l.Z.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    (null == r ? void 0 : r.token.reason) ||
                      u.current !== e ||
                      p(1 == t),
                      a();
                  })),
              () =>
                null == r ? void 0 : r.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, s, d, _, g, f, m, h, x, v, y, b, A, C, w, T, k, E, a]),
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
        const [s, i] = u(e, t, n),
          [l, a] = (0, r.useState)(null),
          [d, p] = c(l, n);
        return (
          (0, r.useEffect)(() => {
            var e;
            const t = o().CancelToken.source();
            if (
              1 == (null == s ? void 0 : s.GetStoreItemType()) &&
              1 == (null == s ? void 0 : s.GetIncludedAppIDs().length)
            ) {
              const n = s.GetIncludedAppIDs()[0];
              l != n &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  a(n));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [l, s]),
          l ? [d, p] : [s, i]
        );
      }
      function _(e, t, n, s) {
        const u = (0, i.NW)(),
          {
            include_assets: c,
            include_release: a,
            include_platforms: d,
            include_all_purchase_options: p,
            include_screenshots: _,
            include_trailers: g,
            include_ratings: f,
            include_tag_count: m,
            include_reviews: h,
            include_basic_info: x,
            include_supported_languages: v,
            include_full_description: y,
            include_included_items: b,
            include_assets_without_overrides: A,
            apply_user_filters: C,
          } = n;
        if (
          ((0, r.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: c,
                include_release: a,
                include_platforms: d,
                include_all_purchase_options: p,
                include_screenshots: _,
                include_trailers: g,
                include_ratings: f,
                include_tag_count: m,
                include_reviews: h,
                include_basic_info: x,
                include_supported_languages: v,
                include_full_description: y,
                include_included_items: b,
                include_assets_without_overrides: A,
                apply_user_filters: C,
              },
              s = e.filter(
                (e) =>
                  !(
                    l.Z.Get().BHasStoreItem(e, t, n) ||
                    l.Z.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == s.length) return;
            const r = o().CancelToken.source(),
              i = s.map((e) => l.Z.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(i).then(() => {
                r.token.reason || u();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, s, u, c, a, d, p, _, g, f, m, h, x, v, y, b, A, C]),
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

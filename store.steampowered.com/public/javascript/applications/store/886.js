/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [886],
  {
    83682: (e, t, n) => {
      n.d(t, {
        Z6: () => a,
        p8: () => g,
        NO: () => f,
        yp: () => d,
        iP: () => p,
      });
      var s = n(47427),
        o = n(77936),
        i = n(37563),
        r = n(4481);
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
              i = !1,
              r = !1;
            for (let l = 0; l < e.length; l++) {
              let u = e[l];
              switch (s.type) {
                case 0:
                  "[" == u
                    ? ((s.type = 2), (i = !0))
                    : ((s.type = 1), "\\" == u && t ? (o = !o) : (s.text += u));
                  break;
                case 2:
                case 3:
                  if ("/" == u && i) (s.type = 3), (s.text = ""), (i = !1);
                  else if ("[" != u || o)
                    if ("]" != u || o)
                      "\\" == u && t
                        ? ((s.text += u), (o = !o), (i = !1))
                        : ((s.text += u), (o = !1), (i = !1));
                    else {
                      const e =
                          2 == s.type &&
                          "noparse" == s.text.toLocaleLowerCase(),
                        t =
                          3 == s.type &&
                          "noparse" == s.text.toLocaleLowerCase();
                      i || (r && !t)
                        ? (s.ConvertMalformedNodeToText(), (s.text += u))
                        : e
                          ? (r = !0)
                          : t && (r = !1),
                        (s = c(n, s)),
                        (i = !1);
                    }
                  else
                    s.ConvertMalformedNodeToText(), (s = c(n, s, 2)), (i = !0);
                  break;
                case 1:
                  "[" != u || o
                    ? "\\" == u && t
                      ? (o && (s.text += u), (o = !o))
                      : ((s.text += u), (o = !1))
                    : ((s = c(n, s, 2)), (i = !0));
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
            i = this.m_dictComponents,
            r = !1,
            l = !0,
            u = function (e, o, u) {
              if (
                e &&
                e.node.tag === o.text &&
                (null == i ? void 0 : i.get(e.node.tag))
              ) {
                const o = i.get(e.node.tag),
                  u = s.map((e) => e.node.tag),
                  c = { parentTags: u, tagname: e.node.tag, args: e.node.args },
                  a = t(o.Constructor, c, ...n.GetElements());
                (n = e.accumulator),
                  n.AppendNode(a),
                  (r = !!o.skipFollowingNewline),
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
              var c, a, d;
              if (1 == e.type) {
                const t = r ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, l), (r = !1);
              } else if (2 == e.type) {
                const t = null == i ? void 0 : i.get(e.tag);
                if (t) {
                  const a = o();
                  if (void 0 !== a) {
                    const t = null == i ? void 0 : i.get(a.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === a.node.tag &&
                      u(s.pop(), a.node);
                  }
                  s.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (r = !!t.skipInternalNewline),
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
                  (null == i ? void 0 : i.get(o().node.tag)) &&
                  (null === (a = null == i ? void 0 : i.get(o().node.tag)) ||
                  void 0 === a
                    ? void 0
                    : a.autocloses);

                ) {
                  const e = s.pop();
                  u(e, e.node);
                }
                if (
                  (null === (d = o()) || void 0 === d ? void 0 : d.node.tag) ==
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
                i = 0;
              "=" == e[0] && (o = 2);
              let r = !1;
              for (i++; i < e.length; i++) {
                let l = e[i],
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
                      r ||
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
                    ((" " == l && 4 != o && !r) ||
                      ('"' == l && 4 == o && !r)) &&
                      ((o = 0), (u = !1), (c = !0));
                }
                if (u)
                  if ("\\" != l || r)
                    if (((r = !1), 1 == o)) n += l;
                    else {
                      if (3 != o && 4 != o)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + o,
                        );
                      s += l;
                    }
                  else r = !0;
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
          super(e, null != t ? t : () => new r.LT()),
            (this.m_renderingLanguage = n || (0, o.jM)(i.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, o.jM)(i.De.LANGUAGE);
        }
        ParseBBCode(e, t, n = !1) {
          let o = 0;
          const i = this.Parse(
            e,
            (e, n, ...i) =>
              s.createElement(
                e,
                Object.assign(Object.assign({}, n), {
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + o++,
                }),
                ...i,
              ),
            n,
          );
          return i.length > 1
            ? s.createElement(s.Fragment, null, ...i)
            : 1 == i.length
              ? i[0]
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
        ];
      d.filter((e) => -1 == _.indexOf(e));
      function g(e, t = null, n = " ") {
        let s = null == t ? void 0 : t.join("|");
        s || (s = d.join("|") + "|\\*");
        let o = new RegExp("\\[(" + s + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(o, n);
      }
      function f(e, t = null, n = "") {
        let s = null == t ? void 0 : t.join("|");
        s || (s = d.join("|") + "|\\*");
        let o = "\\[\\/?(?:" + s + "){1,}.*?]";
        return e.replace(new RegExp(o, "gi"), n);
      }
    },
    4481: (e, t, n) => {
      n.d(t, { DX: () => r, LT: () => i, So: () => l });
      var s = n(47427),
        o = n(62210);
      class i {
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
      class r {
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
      class l extends r {
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
        oA: () => h,
        vs: () => c,
        wZ: () => g,
        yo: () => a,
      });
      var s = n(80751),
        o = n.n(s),
        i = n(47427),
        r = (n(83682), n(20417)),
        l = n(15690);
      function u(e, t, n, s) {
        const u = (0, i.useRef)(),
          c = (0, i.useRef)(void 0),
          a = (0, r.NW)();
        u.current = e;
        const [d, p] = (0, i.useState)(void 0),
          {
            include_assets: _,
            include_release: g,
            include_platforms: f,
            include_all_purchase_options: h,
            include_screenshots: m,
            include_trailers: v,
            include_ratings: x,
            include_tag_count: y,
            include_reviews: b,
            include_basic_info: A,
            include_supported_languages: w,
            include_full_description: G,
            include_included_items: C,
            include_assets_without_overrides: T,
            apply_user_filters: k,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            const n = {
              include_assets: _,
              include_release: g,
              include_platforms: f,
              include_all_purchase_options: h,
              include_screenshots: m,
              include_trailers: v,
              include_ratings: x,
              include_tag_count: y,
              include_reviews: b,
              include_basic_info: A,
              include_supported_languages: w,
              include_full_description: G,
              include_included_items: C,
              include_assets_without_overrides: T,
              apply_user_filters: k,
            };
            let i = null;
            return (
              !e ||
                l.Z.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && s && s == c.current) ||
                (s !== c.current && (p(void 0), (c.current = s)),
                (i = o().CancelToken.source()),
                l.Z.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    (null == i ? void 0 : i.token.reason) ||
                      u.current !== e ||
                      p(1 == t),
                      a();
                  })),
              () =>
                null == i ? void 0 : i.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, s, d, _, g, f, h, m, v, x, y, b, A, w, G, C, T, k, a]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (l.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!l.Z.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const E = l.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return E ? [E, 3] : [null, 2];
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
        const [s, o] = u(e, t, n),
          [r, l] = (0, i.useState)(null),
          [a, d] = c(r, n);
        return (
          (0, i.useEffect)(() => {
            var e;
            if (
              1 == (null == s ? void 0 : s.GetStoreItemType()) &&
              !(null === (e = s.GetAssets()) || void 0 === e
                ? void 0
                : e.GetHeaderURL()) &&
              1 == (null == s ? void 0 : s.GetIncludedAppIDs().length)
            ) {
              const e = s.GetIncludedAppIDs()[0];
              l(e);
            }
          }, [s]),
          r && (null == a ? void 0 : a.BIsVisible()) ? [a, d] : [s, o]
        );
      }
      function _(e, t, n, s) {
        const u = (0, r.NW)(),
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
            include_basic_info: v,
            include_supported_languages: x,
            include_full_description: y,
            include_included_items: b,
            include_assets_without_overrides: A,
            apply_user_filters: w,
          } = n;
        if (
          ((0, i.useEffect)(() => {
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
                include_basic_info: v,
                include_supported_languages: x,
                include_full_description: y,
                include_included_items: b,
                include_assets_without_overrides: A,
                apply_user_filters: w,
              },
              s = e.filter(
                (e) =>
                  !(
                    l.Z.Get().BHasStoreItem(e, t, n) ||
                    l.Z.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == s.length) return;
            const i = o().CancelToken.source(),
              r = s.map((e) => l.Z.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(r).then(() => {
                i.token.reason || u();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, s, u, c, a, d, p, _, g, f, h, m, v, x, y, b, A, w]),
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
      function h() {
        i.useEffect(
          () => (
            l.Z.Get().SetReturnUnavailableItems(!0),
            () => l.Z.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
  },
]);

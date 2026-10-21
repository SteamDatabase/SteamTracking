/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [79118],
    {
      7487: (z, W, n) => {
        "use strict";
        n.d(W, { K0: () => o, OJ: () => C, R8: () => U });
        var t = n(71742),
          v = n(90626);
        class U {
          reactNodes = [];
          AppendText(s, r = !1) {
            s.length &&
              (r
                ? this.reactNodes.push(
                    v.createElement(
                      "span",
                      {
                        "data-copytext": "",
                        "data-copystyle": "merge-adjacent",
                        "bbcode-text": s,
                      },
                      s,
                    ),
                  )
                : this.reactNodes.push(s));
          }
          AppendNode(s) {
            this.reactNodes.push(s);
          }
          GetElements() {
            return this.reactNodes;
          }
        }
        class o {
          m_decoratedAccumulator;
          constructor(s) {
            (0, t.wT)(s, "decorated accumulator cannot be null"),
              (this.m_decoratedAccumulator = s);
          }
          AppendText(s, r = !1) {
            this.m_decoratedAccumulator.AppendText(s, r);
          }
          AppendNode(s) {
            this.m_decoratedAccumulator.AppendNode(s);
          }
          GetElements() {
            return this.m_decoratedAccumulator.GetElements();
          }
        }
        class C extends o {
          constructor(s) {
            super(s);
          }
          AppendText(s) {
            let r = s;
            const c = [];
            for (
              let I = r.indexOf(`
`);
              I !== -1;
              I = r.indexOf(`
`)
            )
              c.push(r.substr(0, I)),
                c.push(v.createElement("br")),
                (r = r.substr(I + 1));
            r.length && c.push(r),
              c.forEach((I) => {
                super.AppendNode(I);
              });
          }
        }
      },
      86722: (z, W, n) => {
        "use strict";
        n.d(W, { Pm: () => x, d$: () => b, tB: () => I });
        var t = n(7850),
          v = n(24660),
          U = n(72609),
          o = n(43434),
          C = n(83482),
          w = n(71421),
          s = n(53113);
        function r(B) {
          const m = B?.jsondata?.read_more_link;
          if (!m) return;
          const M = (0, s.wm)(m).toLocaleLowerCase();
          return M ? [M] : void 0;
        }
        function c(B, m) {
          return (0, o.p)(B, r(m));
        }
        function I(B, m) {
          if (!B) return "";
          if (!(0, o.p)(B)) return (0, s.NT)(B);
          const M = c(B, m) ? (0, o.E)(B) : B;
          return (U.TS.IN_CLIENT ? "steam://openurl_external/" : "") + M;
        }
        function x(B, m, M) {
          const _ = B.toLowerCase().startsWith("http") ? B : "http://" + B;
          return (0, t.jsx)(b, { url: _, event: m, children: M || B });
        }
        const b = (B) => {
          const { url: m, event: M, className: _, style: j } = B;
          let l = (0, C.OZ)(m);
          l = I(l, M);
          const f = (0, o.p)(l) ? "noopener nofollow" : void 0,
            g =
              typeof B.children == "string" &&
              B.children.length > 0 &&
              m &&
              !m.startsWith("steam://")
                ? (0, s.Qz)(m)
                : void 0;
          return (0, t.jsx)(w.Gq, {
            toolTipContent: g,
            direction: "top",
            children: (0, t.jsx)(v.Ii, {
              className: _,
              href: l,
              rel: f,
              id: B.id,
              style: j,
              children: B.children,
            }),
          });
        };
      },
      8145: (z, W, n) => {
        "use strict";
        n.d(W, { op: () => c, CS: () => w, vE: () => I, Al: () => C });
        const t = 0,
          v = 1,
          U = 2,
          o = 3;
        class C {
          m_fnAccumulatorFactory;
          m_dictComponents;
          constructor(_, j) {
            _ instanceof Map
              ? (this.m_dictComponents = _)
              : (this.m_dictComponents = new Map(Object.entries(_))),
              (this.m_fnAccumulatorFactory = j);
          }
          Parse(_, j, l = !0) {
            const f = B(_ || "", l);
            return this.Parse_BuildElements(f, j);
          }
          Parse_BuildElements(_, j) {
            let l = this.m_fnAccumulatorFactory(void 0);
            const f = [],
              g = () => (f.length < 1 ? void 0 : f[f.length - 1]),
              h = this.m_dictComponents,
              E = (k) => !!(k.tag && h.get(k.tag)?.autocloses);
            let d = !1,
              O = !0;
            const L = (k, p) => {
              let S = p.text.toLowerCase();
              if (k && k.node.tag === S && h.get(k.node.tag)) {
                const T = h.get(k.node.tag),
                  D = {
                    tagname: k.node.tag,
                    args: k.node.args,
                    rawargs: k.node.rawargs,
                  },
                  R = j(T.Constructor, D, ...l.GetElements());
                (l = k.accumulator),
                  Array.isArray(R)
                    ? R.forEach((V) => l.AppendNode(V))
                    : l.AppendNode(R),
                  (d = !!T.skipFollowingNewline),
                  (O = k.bWrapTextForCopying);
              } else if (k) {
                const T = k.accumulator;
                T.AppendText("[" + k.node.text + "]", !1),
                  l.GetElements().forEach((D) => T.AppendNode(D)),
                  T.AppendText("[/" + p.text + "]", !1),
                  (l = T),
                  (O = k.bWrapTextForCopying);
              }
            };
            for (
              _.forEach((k, p) => {
                if (k.type == v) {
                  const S = d ? k.text.replace(/^[\t\r ]*\n/g, "") : k.text;
                  l.AppendText(S, O), (d = !1);
                } else if (k.type == U) {
                  const S = h.get(k.tag);
                  if (!S) l.AppendText("[" + k.text + "]", f.length == 0);
                  else {
                    const T = g();
                    if (T !== void 0) {
                      const D = h.get(T.node.tag);
                      D &&
                        D.autocloses &&
                        k.tag === T.node.tag &&
                        L(f.pop(), T.node);
                    }
                    f.push({ accumulator: l, node: k, bWrapTextForCopying: O }),
                      (l = this.m_fnAccumulatorFactory(k)),
                      (d = !!S.skipInternalNewline),
                      (O = S.allowWrapTextForCopying ?? !1);
                  }
                } else if (k.type == o) {
                  let S = k.text.toLowerCase();
                  for (; g() && g().node.tag !== S && E(g().node); ) {
                    const T = f.pop();
                    L(T, T.node);
                  }
                  if (g()?.node.tag == S) {
                    const T = f.pop();
                    L(T, k);
                  } else l.AppendText("[/" + k.text + "]", f.length == 0);
                }
              });
              f.length > 0;
            ) {
              const k = f.pop();
              L(k, k.node);
            }
            return l.GetElements();
          }
        }
        function w(M, _, j = !1) {
          let l = "[" + M;
          _?.[""] && (l += `=${j ? "" + _[""] : s("" + _[""])}`);
          for (const f in _) f !== "" && (l += ` ${r(f)}=${s("" + _[f])}`);
          return (l += "]"), l;
        }
        function s(M) {
          return `"${M.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function r(M) {
          return M.replace(/(\\| |\])/g, "\\$1");
        }
        function c(M) {
          return `[/${M}]`;
        }
        function I(M) {
          return M.replace(/(\\|\[)/g, "\\$1");
        }
        function x(M, _, j = t) {
          const { type: l, text: f = "" } = _;
          if (l == U) {
            let g = f.indexOf("=");
            const h = f.indexOf(" ");
            h != -1 && (g == -1 || h < g) && (g = h);
            let E,
              d,
              O = "";
            g > 0
              ? ((E = f.substr(0, g).toLocaleLowerCase()),
                (O = f.substr(g)),
                (d = m(O)))
              : ((d = {}), (E = f.toLocaleLowerCase())),
              M.push({ type: l, text: f, tag: E, args: d, rawargs: O });
          } else l != t && M.push({ type: l, text: f });
          return { type: j, text: "" };
        }
        function b(M) {
          let _ = "";
          return (
            M.type == o ? (_ = "[/") : M.type == U && (_ = "["),
            { type: v, text: _ + (M.text ?? "") }
          );
        }
        function B(M, _) {
          const j = [];
          let l = { type: t, text: "" },
            f = !1,
            g = !1,
            h = !1;
          for (let E = 0; E < M.length; E++) {
            const d = M[E];
            switch (l.type) {
              case t:
                d == "["
                  ? ((l.type = U), (g = !0))
                  : ((l.type = v), d == "\\" && _ ? (f = !f) : (l.text += d));
                break;
              case U:
              case o:
                if (d == "/" && g) (l.type = o), (l.text = ""), (g = !1);
                else if (d == "[" && !f) (l = x(j, b(l), U)), (g = !0);
                else if (d == "]" && !f) {
                  const O =
                      l.type == U && l.text?.toLocaleLowerCase() == "noparse",
                    L = l.type == o && l.text?.toLocaleLowerCase() == "noparse";
                  g || (h && !L)
                    ? ((l = b(l)), (l.text += d))
                    : O
                      ? (h = !0)
                      : L && (h = !1),
                    (l = x(j, l)),
                    (g = !1);
                } else
                  d == "\\" && _
                    ? ((l.text += d), (f = !f), (g = !1))
                    : ((l.text += d), (f = !1), (g = !1));
                break;
              case v:
                d == "[" && !f
                  ? ((l = x(j, l, U)), (g = !0))
                  : d == "\\" && _
                    ? (f && (l.text += d), (f = !f))
                    : ((l.text += d), (f = !1));
                break;
            }
          }
          return (
            l.type != t &&
              (l.type == U || l.type == o
                ? j.push(b(l))
                : j.push({ type: l.type, text: l.text ?? "" })),
            j
          );
        }
        function m(M) {
          if (!M || M.length < 1) return {};
          const _ = {};
          let j = "",
            l = "",
            f;
          ((d) => {
            (d[(d.PRE_NAME = 0)] = "PRE_NAME"),
              (d[(d.IN_NAME = 1)] = "IN_NAME"),
              (d[(d.POST_NAME = 2)] = "POST_NAME"),
              (d[(d.IN_VALUE = 3)] = "IN_VALUE"),
              (d[(d.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(f || (f = {}));
          let g = 0,
            h = 0;
          M[0] == "=" && (g = 2);
          let E = !1;
          for (h++; h < M.length; h++) {
            const d = M[h];
            let O = !0,
              L = !1;
            switch (g) {
              case 0:
                if (d == "=") return {};
                if (d == " ") continue;
                g = 1;
                break;
              case 1:
                (d == "=" || d == " ") &&
                  !E &&
                  (d == " " ? ((g = 0), (L = !0)) : (g = 2), (O = !1));
                break;
              case 2:
                d == " "
                  ? ((g = 0), (O = !1), (L = !0))
                  : d == '"'
                    ? ((g = 4), (O = !1))
                    : (g = 3);
                break;
              case 3:
              case 4:
                ((d == " " && g != 4 && !E) || (d == '"' && g == 4 && !E)) &&
                  ((g = 0), (O = !1), (L = !0));
                break;
            }
            if (O)
              if (d == "\\" && !E) E = !0;
              else if (((E = !1), g == 1)) j += d;
              else if (g == 3 || g == 4) l += d;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + g,
                );
            L && ((_[j] = l), (j = ""), (l = ""));
          }
          return g != 0 && (_[j] = l), _;
        }
      },
      96232: (z, W, n) => {
        "use strict";
        n.d(W, { B: () => C });
        var t = n(99412),
          v = n(90626),
          U = n(7487),
          o = n(8145);
        class C extends o.Al {
          m_renderingLanguage;
          constructor(s, r, c) {
            super(s, r ?? (() => new U.R8())),
              (this.m_renderingLanguage =
                typeof c == "string" ? (0, t.sfN)(c) : c);
          }
          UpdateOverrideLanguage(s) {
            this.m_renderingLanguage = s;
          }
          ParseBBCode(s, r, c = !0) {
            let I = 0;
            const x = this.Parse(
              s,
              (b, B, ...m) =>
                v.createElement(
                  b,
                  {
                    ...B,
                    context: r,
                    language: this.m_renderingLanguage,
                    key: `bbnode_${I++}`,
                  },
                  ...m,
                ),
              c,
            );
            return x.length > 1
              ? v.createElement(v.Fragment, null, ...x)
              : x.length == 1
                ? x[0]
                : null;
          }
        }
      },
      29950: (z, W, n) => {
        "use strict";
        n.d(W, { J: () => t });
        function t(v) {
          if (!v) return v;
          const U = v.trim(),
            o = U.replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return o.startsWith("javascript:") ||
            o.startsWith("data:") ||
            o.startsWith("vbscript:")
            ? ""
            : U;
        }
      },
      72080: (z, W, n) => {
        "use strict";
        n.d(W, {
          AT: () => I,
          J7: () => w,
          KN: () => C,
          MG: () => x,
          Yd: () => b,
          bv: () => s,
          gg: () => o,
          mZ: () => c,
          s4: () => B,
          zN: () => r,
        });
        var t = n(7850),
          v = n(11748),
          U = n.n(v);
        const o = {
          Box: v.DynamicLinkBox,
          Preview: v.DynamicLink_Preview,
          Type: v.DynamicLink_Type,
        };
        function C(m) {
          return (0, t.jsx)("img", {
            className: v.DynamicLink_Preview,
            src: m.strURL || void 0,
            alt: m.strAlt ?? "",
          });
        }
        function w(m) {
          return (0, t.jsx)("div", {
            className: v.DynamicLink_Content,
            children: m.children,
          });
        }
        function s(m) {
          return (0, t.jsx)("div", {
            className: v.DynamicLink_Name,
            children: m.children,
          });
        }
        function r(m) {
          return (0, t.jsx)("div", {
            className: v.DynamicLink_Author,
            children: m.children,
          });
        }
        function c(m) {
          return (0, t.jsx)("span", {
            className: v.DynamicLink_AuthorName,
            children: m.children,
          });
        }
        function I(m) {
          return (0, t.jsx)("div", {
            className: v.DynamicLink_Description,
            children: m.children,
          });
        }
        function x(m) {
          return (0, t.jsx)("span", {
            className: v.DynamicLink_Date,
            children: m.children,
          });
        }
        function b(m) {
          return (0, t.jsx)("div", {
            className: v.DynamicLink_YoutubeViews,
            children: m.children,
          });
        }
        function B(m) {
          return (0, t.jsx)("div", {
            className: v.Dynamiclink_Content,
            children: m.children,
          });
        }
      },
      374: (z, W, n) => {
        "use strict";
        n.d(W, { oK: () => x, F8: () => r });
        function t(b) {
          return b
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&");
        }
        var v = n(72609),
          U = n(88942);
        const o = "events/ajaxgetdynamiceventmetadata";
        async function C(b) {
          const B =
              v.TS.STORE_BASE_URL + o + "?" + new URLSearchParams(b).toString(),
            m = await fetch(B, { credentials: "include" });
          if (!m.ok) throw new Error(`${B} answered ${m.status}`);
          return await m.json();
        }
        function w(b) {
          return ["DynamicEventMetadata", "youtube", b];
        }
        function s(b, B = !0) {
          return {
            queryKey: w(b),
            queryFn: async () => {
              const m = await C({ youtubevideoids: b }),
                M = m.youtube?.find((_) => _.videoid == b) ?? m.youtube?.[0];
              if (!M) throw new Error(`no metadata for youtube video ${b}`);
              return { ...M, title: t(M.title), description: t(M.description) };
            },
            enabled: B && !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function r(b, B = !0) {
          return (0, U.I)(s(b, B));
        }
        function c(b) {
          return ["DynamicEventMetadata", "sharedfile", b];
        }
        function I(b) {
          return {
            queryKey: c(b),
            queryFn: async () => {
              const B = await C({ sharedfileids: b }),
                m =
                  B.sharedfiles?.find((M) => M.sharedfileid == b) ??
                  B.sharedfiles?.[0];
              if (!m) throw new Error(`no metadata for shared file ${b}`);
              return {
                ...m,
                title: t(m.title),
                description: t(m.description),
                type: t(m.type),
              };
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function x(b) {
          return (0, U.I)(I(b));
        }
      },
      43597: (z, W, n) => {
        "use strict";
        n.d(W, { AX: () => l, V2: () => _, j6: () => f });
        var t = n(7850),
          v = n(72080),
          U = n(86722),
          o = n(32093),
          C = n(72609),
          w = n(90626),
          s = n(43458),
          r = n(85599),
          c = n(32608),
          I = n(36707),
          x = n(18210),
          b = n(19730),
          B = n(374),
          m = n(31587),
          M = n.n(m),
          _ = ((g) => (
            (g.left = "leftthumb"),
            (g.right = "rightthumb"),
            (g.full = "full"),
            (g.summary = "summary"),
            g
          ))(_ || {});
        function j(g) {
          return g == "full"
            ? M().sizeFull
            : (0, I.A)(
                M().sizeThumb,
                g == "leftthumb" ? M().floatLeft : M().floatRight,
              );
        }
        function l(g) {
          const {
              videoID: h,
              bShowVideoImmediately: E,
              bAutoPlay: d,
              nStartSeconds: O,
              align: L = "full",
            } = g,
            [k, p] = (0, w.useState)(!E),
            { data: S, isSuccess: T } = (0, B.F8)(h, k);
          if (k) {
            const D = S?.title ?? (0, x.we)("#Loading"),
              R = S?.views ?? "0",
              V = S?.description ?? "",
              H = () => p(!1),
              Z = ($) => {
                ($.key == "Enter" || $.key == " ") && ($.preventDefault(), H());
              };
            return (0, t.jsxs)("div", {
              className: v.gg.Box,
              role: "button",
              tabIndex: 0,
              onClick: H,
              onKeyDown: Z,
              children: [
                (0, t.jsx)(v.KN, {
                  strURL: "https://img.youtube.com/vi/" + h + "/0.jpg",
                }),
                (0, t.jsxs)(v.J7, {
                  children: [
                    (0, t.jsx)(v.bv, {
                      children: (0, x.we)("#EventEditor_YouTubeVideoTitle", D),
                    }),
                    (0, t.jsx)(v.Yd, {
                      children: (0, x.we)(
                        "#EventEditor_YouTubeVideoViews",
                        (0, b.Dq)(Number(R)),
                      ),
                    }),
                    (0, t.jsxs)(v.s4, {
                      children: [
                        T && V,
                        !T && (0, t.jsx)(r.t, { size: "medium" }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          } else
            return (0, t.jsx)(c.gZ, {
              video: h,
              children: (0, t.jsxs)("div", {
                className: (0, I.A)(M().PreviewYouTubeVideo, j(L)),
                id: h,
                children: [
                  (0, t.jsx)("img", {
                    className: M().PlaceholderImg,
                    alt: "",
                    src:
                      C.TS.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                  }),
                  (0, t.jsx)(c.fm, {
                    video: h,
                    autoplay: d ?? !1,
                    startSeconds: O,
                    controls: !0,
                    playsInline: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                  }),
                ],
              }),
            });
        }
        function f(g, h) {
          if (C.TS.EREALM === o.TU.k_ESteamRealmChina) return null;
          const E = (0, s.XU)(g);
          return E?.strVideoID !== void 0
            ? (0, t.jsx)(l, {
                videoID: E.strVideoID,
                nStartSeconds: E.nStartSeconds,
                bShowVideoImmediately: !1,
              })
            : (0, U.Pm)(g, h?.event);
        }
      },
      80876: (z, W, n) => {
        "use strict";
        n.d(W, {
          fp: () => q,
          $P: () => te,
          Du: () => C,
          nS: () => Q,
          oT: () => U,
          f$: () => o,
          LH: () => t,
          Fw: () => Pt,
          w3: () => v,
          uy: () => $e,
        });
        var t = {};
        n.r(t), n.d(t, { Xk: () => I, ko: () => Ve });
        var v = {};
        n.r(v), n.d(v, { QI: () => De });
        var U = {};
        n.r(U),
          n.d(U, {
            XR: () => lt,
            x7: () => ct,
            Bc: () => vt,
            xJ: () => ht,
            QB: () => St,
            Bk: () => gt,
            Ou: () => Bt,
            r: () => dt,
            PQ: () => pt,
            W: () => mt,
            LK: () => Mt,
            zE: () => ft,
            mj: () => ut,
            hK: () => Et,
          });
        var o = {};
        n.r(o), n.d(o, { rg: () => yt, kE: () => bt });
        var C = {};
        n.r(C), n.d(C, { hu: () => xt, yt: () => _t });
        var w = n(80613),
          s = n.n(w),
          r = n(75245),
          c = n(35038);
        const I = 0,
          x = 1,
          b = 2,
          B = 3,
          m = 4,
          M = 5,
          _ = 6,
          j = 7,
          l = 8,
          f = 9,
          g = 10,
          h = 11,
          E = 12,
          d = 13,
          O = 14,
          L = 15,
          k = 16,
          p = 17,
          S = 18,
          T = 19,
          D = 20,
          R = 21,
          V = 22,
          H = 23,
          Z = 24,
          $ = 25,
          he = 26,
          ve = 27,
          _e = 28,
          fe = 29,
          me = 30,
          Se = 31,
          Me = 32,
          pe = 33,
          ye = 34,
          Pe = 35,
          Ee = 36,
          ge = 37,
          be = 38,
          X = 39,
          Be = 40,
          Te = 41,
          Ce = 42,
          Fe = 43,
          Re = 44,
          Ge = 45,
          Ne = 46,
          Ke = 47,
          Oe = 48,
          He = 49,
          ze = 50,
          We = 51,
          a = 52,
          i = 53,
          y = 54,
          P = 55,
          A = 56,
          N = 57,
          F = 58,
          G = 59,
          J = 60,
          Je = 61,
          Xe = 62,
          qe = 63,
          Qe = 64,
          Ye = 65,
          Ue = 66,
          et = 67,
          tt = 68,
          rt = 69,
          nt = 70,
          at = 71,
          Ve = 72,
          ke = 0,
          De = 1,
          Ze = 2,
          xe = 3,
          st = 4,
          it = 5,
          Lt = 6,
          jt = 0,
          lt = 1,
          ct = 2,
          dt = 3,
          ut = 4,
          mt = 5,
          ft = 6,
          ht = 7,
          Et = 8,
          gt = 9,
          pt = 10,
          St = 11,
          Mt = 12,
          Bt = 13,
          vt = 14,
          It = 0,
          yt = 1,
          bt = 2,
          xt = 1,
          Ot = 2,
          _t = 3,
          Ut = 4;
        function Pt(Y) {
          return "unknown EVirtualItemRewardEvent ( " + Y + " )";
        }
        function Ct(Y) {
          return "unknown EVirtualItemRewardRarity ( " + Y + " )";
        }
        function Nt(Y) {
          return "unknown EGameCardDropMethod ( " + Y + " )";
        }
        function kt(Y) {
          return "unknown ECommunityItemSalienType ( " + Y + " )";
        }
        function Dt(Y) {
          return "unknown ECommunityItemDropRate ( " + Y + " )";
        }
        function Rt(Y) {
          return "unknown ECommunityItemAttribute ( " + Y + " )";
        }
        function Wt(Y) {
          return "unknown ECommunityItemApprovalState ( " + Y + " )";
        }
        function Ft(Y) {
          return "unknown ETradabilityPreference ( " + Y + " )";
        }
        function zt(Y) {
          return "unknown ESummerSale2017TaskType ( " + Y + " )";
        }
        function Vt(Y) {
          return "unknown EWinterSale2015ARGBadge ( " + Y + " )";
        }
        function Gt(Y) {
          return "unknown ESummerSale2021Genre ( " + Y + " )";
        }
        function Kt(Y) {
          return "unknown ESummerSale2021StoryChoice ( " + Y + " )";
        }
        class re extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.communityitemid || r.Sg(re.M()),
              w.Message.initialize(this, e, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    item_type: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    owner: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    attributes: { n: 5, c: ne, r: !0, q: !0 },
                    used: { n: 6, br: r.qM.readBool, bw: r.gp.writeBool },
                    owner_origin: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    amount: {
                      n: 8,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = r.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(re.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new re();
            return re.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(re.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(re.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem";
          }
        }
        class ne extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.attributeid || r.Sg(ne.M()),
              w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    attributeid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    value: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = r.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(ne.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new ne();
            return ne.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(ne.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(ne.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem_Attribute";
          }
        }
        class ae extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.filter_appids || r.Sg(ae.M()),
              w.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    filter_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = r.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(ae.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new ae();
            return ae.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(ae.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(ae.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Request";
          }
        }
        class se extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.items || r.Sg(se.M()),
              w.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: { items: { n: 1, c: re, r: !0, q: !0 } },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = r.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(se.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new se();
            return se.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(se.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(se.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Response";
          }
        }
        class ie extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.appid || r.Sg(ie.M()),
              w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    item_type: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    broadcast_channel_id: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    keyvalues_as_json: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = r.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(ie.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new ie();
            return ie.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(ie.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(ie.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Request";
          }
        }
        class oe extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.item_definitions || r.Sg(oe.M()),
              w.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: { item_definitions: { n: 1, c: le, r: !0, q: !0 } },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = r.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(oe.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new oe();
            return oe.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(oe.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(oe.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response";
          }
        }
        class le extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.item_type || r.Sg(le.M()),
              w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    item_type: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    item_name: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_title: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_description: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_image_small: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_image_large: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_key_values: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_series: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    item_class: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    editor_accountid: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    active: { n: 12, br: r.qM.readBool, bw: r.gp.writeBool },
                    item_image_composed: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_image_composed_foil: {
                      n: 14,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    deleted: { n: 15, br: r.qM.readBool, bw: r.gp.writeBool },
                    item_last_changed: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    broadcast_channel_id: {
                      n: 17,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    item_movie_webm: {
                      n: 18,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_mp4: {
                      n: 19,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_webm_small: {
                      n: 20,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_mp4_small: {
                      n: 21,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_internal_name: {
                      n: 22,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = r.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(le.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new le();
            return le.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(le.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(le.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
          }
        }
        class q extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.appid || r.Sg(q.M()),
              w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    communityitemid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    activate: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = r.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(q.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new q();
            return q.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(q.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(q.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Request";
          }
        }
        class je extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, u) {
            return e ? { $jspbMessageInstance: u } : {};
          }
          static fromObject(e) {
            return new je();
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new je();
            return je.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Response";
          }
        }
        class ce extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.timestamp_start || r.Sg(ce.M()),
              w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    timestamp_start: {
                      n: 1,
                      d: 0,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_end: {
                      n: 2,
                      d: 4294967295,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = r.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(ce.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new ce();
            return ce.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(ce.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(ce.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Request";
          }
        }
        class de extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.num_trading_cards || r.Sg(de.M()),
              w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    num_trading_cards: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = r.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(de.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new de();
            return de.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(de.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(de.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Response";
          }
        }
        class Q extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.eventid || r.Sg(Q.M()),
              w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    eventid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    include_inactive: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(Q.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new Q();
            return Q.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(Q.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(Q.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Request";
          }
        }
        class ee extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.eventid || r.Sg(ee.M()),
              w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    eventid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    item_bucket: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    active: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    rarity: { n: 5, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    package_to_grant: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    game_item_id: {
                      n: 7,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    community_item_class: {
                      n: 8,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    community_item_type: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    loyalty_point_type: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    amount: {
                      n: 11,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    rtime_time_active: {
                      n: 12,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    loyalty_reward_defid: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    user_badge_to_grant: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    user_badge_level: {
                      n: 15,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    virtual_item_def_id: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = r.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(ee.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new ee();
            return ee.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(ee.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(ee.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVirtualItemRewardDefinition";
          }
        }
        class ue extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.rewards || r.Sg(ue.M()),
              w.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: { rewards: { n: 1, c: ee, r: !0, q: !0 } },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = r.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(ue.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new ue();
            return ue.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(ue.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(ue.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Response";
          }
        }
        class te extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              te.prototype.eventid || r.Sg(te.M()),
              w.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    eventid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    itemsdefs: { n: 2, c: ee, r: !0, q: !0 },
                    action: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = r.w0(te.M())), te.sm_mbf;
          }
          toObject(e = !1) {
            return te.toObject(e, this);
          }
          static toObject(e, u) {
            return r.BT(te.M(), e, u);
          }
          static fromObject(e) {
            return r.Uq(te.M(), e);
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new te();
            return te.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return r.zj(te.MBF(), e, u);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {
            r.i0(te.M(), e, u);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Request";
          }
        }
        function Ht(Y) {
          return (
            "unknown CQuest_SetVirtualItemRewardDefinition_Request_EActionType ( " +
            Y +
            " )"
          );
        }
        class Ie extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), w.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, u) {
            return e ? { $jspbMessageInstance: u } : {};
          }
          static fromObject(e) {
            return new Ie();
          }
          static deserializeBinary(e) {
            let u = new (s().BinaryReader)(e),
              K = new Ie();
            return Ie.deserializeBinaryFromReader(K, u);
          }
          static deserializeBinaryFromReader(e, u) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, u) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Response";
          }
        }
        var $e;
        ((Y) => {
          function e(we, Ae, Le) {
            return we.SendMsg(
              "Quest.GetCommunityInventory#1",
              (0, c.I8)(ae, Ae, Le),
              se,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Y.GetCommunityInventory = e;
          function u(we, Ae, Le) {
            return we.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, c.I8)(ie, Ae, Le),
              oe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 4 },
            );
          }
          Y.GetCommunityItemDefinitions = u;
          function K(we, Ae, Le) {
            return we.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, c.I8)(q, Ae, Le),
              je,
              { ePrivilege: 1 },
            );
          }
          Y.ActivateProfileModifierItem = K;
          function Tt(we, Ae, Le) {
            return we.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, c.I8)(ce, Ae, Le),
              de,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Y.GetNumTradingCardsEarned = Tt;
          function wt(we, Ae, Le) {
            return we.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, c.I8)(Q, Ae, Le),
              ue,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          Y.GetVirtualItemRewardDefinition = wt;
          function At(we, Ae, Le) {
            return we.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, c.I8)(te, Ae, Le),
              Ie,
              { ePrivilege: 4 },
            );
          }
          Y.SetVirtualItemRewardDefinition = At;
        })($e || ($e = {}));
      },
      37589: (z, W, n) => {
        "use strict";
        n.d(W, { Y: () => C, j: () => w });
        var t = n(7850),
          v = n(90626),
          U = n(2259),
          o = n(18938);
        function C(s) {
          const r = (0, U.OO)(s, s.options);
          return (0, t.jsx)("span", { ref: r, style: { fontSize: 0 } });
        }
        const w = v.forwardRef(function (r, c) {
          const { onLeave: I, onEnter: x, options: b, ...B } = r,
            m = (0, U.OO)(r, r.options),
            M = (0, o.Ue)(m, c);
          return (0, t.jsx)("div", { ref: M, ...B });
        });
      },
      1123: (z, W, n) => {
        "use strict";
        n.d(W, { Ey: () => j, Rp: () => _ });
        var t = n(32093);
        const U = JSON.parse(
          `{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}`,
        ).h;
        var o = n(79024),
          C = n(90900),
          w = n(52438);
        function s(l, f) {
          switch (l.preference_state) {
            case o.CY.__:
            case o.CY.PK:
              return !0;
            case o.CY.rE:
              return !1;
            case o.CY.UI:
            default:
              switch (f) {
                case "youtube":
                  return l.third_party_content?.youtube;
                case "vimeo":
                  return l.third_party_content?.vimeo;
                case "sketchfab":
                  return l.third_party_content?.sketchfab;
                case "generic":
                  return !1;
              }
          }
        }
        function r(l) {
          switch (l.preference_state) {
            case o.CY.__:
            case o.CY.PK:
              return !1;
            default:
              return !0;
          }
        }
        function c(l, f, g, h) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => I(l, f, g, h),
          };
        }
        async function I(l, f, g, h) {
          if ((0, t.nA)(h))
            return { version: o.ie.mO, preference_state: o.CY.__ };
          if (f) {
            const d = (await o.T4.GetCookiePreferences(l, {}))
              .Body()
              .toObject().preferences;
            if (d && d.version !== void 0 && d.version != o.ie.CL) return d;
          }
          try {
            const E = (0, w.j_)(C.J_);
            if (E) {
              const d = JSON.parse(E);
              if (d && d.version !== void 0 && d.version != o.ie.CL) return d;
            }
          } catch {}
          return g in U.eucountries || g in U.eeacountries || g === "CH"
            ? { version: o.ie.mO, preference_state: o.CY._H }
            : { version: o.ie.mO, preference_state: o.CY.__ };
        }
        var x = n(88942),
          b = n(68312),
          B = n(72609);
        function m(l) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => I(l, B.iA.logged_in, B.TS.COUNTRY, B.TS.EREALM),
          };
        }
        function M() {
          const l = (0, b.KV)();
          return (0, x.I)(m(l));
        }
        function _(l) {
          const { data: f } = M();
          return f ? s(f, l) : void 0;
        }
        function j() {
          const { data: l } = M();
          return l ? !r(l) : void 0;
        }
      },
      72243: (z, W, n) => {
        "use strict";
        n.d(W, { L: () => I });
        var t = n(7850),
          v = n(90626),
          U = n(99412),
          o = n(32093),
          C = n(18210),
          w = n(53113),
          s = n(72609);
        function r(_) {
          return !(
            (!(0, w._1)(_.sPoster) && !(0, w.ZF)(_.sPoster)) ||
            (_.rgVideoSources &&
              _.rgVideoSources.some((j) => !(0, w.ZF)(j.sURL))) ||
            (_.rgVideoTracks && _.rgVideoTracks.some((j) => !(0, w.ZF)(j.sURL)))
          );
        }
        class c {
          m_bUserHasVolumePreference = !1;
          m_flVolumePreference = 0;
          BUserHasVolumePreference() {
            return this.m_bUserHasVolumePreference;
          }
          SetVolumePreference(j) {
            (this.m_flVolumePreference = j),
              (this.m_bUserHasVolumePreference = !0);
          }
          GetVolumePreference() {
            return this.m_flVolumePreference;
          }
          BVolumePreferenceMuted() {
            return this.m_flVolumePreference < 0.001;
          }
          static s_Singleton;
          static Get() {
            return c.s_Singleton || (c.s_Singleton = new c()), c.s_Singleton;
          }
        }
        const I = (0, v.forwardRef)(function (j, l) {
          const {
              video: f,
              bAutoPlay: g,
              bControls: h,
              bLoop: E,
              bMuted: d,
              className: O,
              mediaScale: L,
              flAspectRatio: k,
              onClick: p,
              altText: S,
            } = j,
            T = (0, v.useMemo)(
              () =>
                !!f.rgVideoTracks?.some(
                  (fe) => fe.sKind == "subtitles" || fe.sKind == "captions",
                ),
              [f.rgVideoTracks],
            ),
            [D, R] = v.useState(!1),
            V = x();
          if (!f.rgVideoSources || !f.rgVideoSources.length) return null;
          const H = r(f);
          let Z;
          (!H || (T && s.TS.EUNIVERSE == U.wLO)) && (Z = "anonymous");
          const $ = d || (g && c.Get().BVolumePreferenceMuted()),
            he = f.sPoster ? b(f.sPoster, V) : "",
            ve = (fe) => {
              const me = fe.target,
                Se = me.muted ? 0 : me.volume;
              D && c.Get().SetVolumePreference(Se);
            },
            _e = (fe) => {
              const me = fe.target,
                Se = me.currentTime == 0,
                Me = c.Get().BUserHasVolumePreference();
              if ((R(!0), !!Se))
                if (!Me && !g) {
                  const pe = me.muted ? 0 : me.volume;
                  c.Get().SetVolumePreference(pe);
                } else
                  Me &&
                    ((me.volume = c.Get().GetVolumePreference()),
                    (me.muted = c.Get().BVolumePreferenceMuted()));
            };
          return (0, t.jsxs)("video", {
            width: "100%",
            height: "auto",
            autoPlay: g,
            muted: $,
            playsInline: !0,
            controls: h,
            poster: he,
            loop: E,
            crossOrigin: Z,
            onVolumeChange: ve,
            onPlay: _e,
            ref: l,
            className: O,
            onClick: p,
            "aria-label": S,
            style: {
              width: L && L >= 1 && L < 100 ? `${L}%` : void 0,
              aspectRatio: k || void 0,
            },
            children: [
              (0, t.jsx)(B, {
                rgVideoSources: f.rgVideoSources,
                strCacheBreakOrigin: V,
              }),
              (0, t.jsx)(m, {
                rgVideoTracks: f.rgVideoTracks,
                strCacheBreakOrigin: V,
              }),
            ],
          });
        });
        function x() {
          const _ = window.location.href,
            l = [
              s.TS.STORE_BASE_URL,
              s.TS.COMMUNITY_BASE_URL,
              s.TS.PARTNER_BASE_URL,
              s.TS.HELP_BASE_URL,
              s.TS.STATS_BASE_URL,
              s.TS.STORE_CHECKOUT_BASE_URL,
            ].find((f) => f && _.startsWith(f));
          if (l) return l;
          try {
            return new URL(_).origin + "/";
          } catch {
            return "unknown";
          }
        }
        function b(_, j) {
          if (_) {
            if ((0, w._1)(_)) return _;
            try {
              const l = new URL(_);
              return (
                (l.search = (l.search ? l.search + "&" : "?") + "origin=" + j),
                l.toString()
              );
            } catch {
              return _;
            }
          }
        }
        function B(_) {
          const { rgVideoSources: j, strCacheBreakOrigin: l } = _;
          return j
            .filter((f) => !!f.sURL)
            .map((f) =>
              (0, t.jsx)(
                "source",
                { src: b(f.sURL, l), type: f.sFormat },
                f.sURL,
              ),
            );
        }
        function m(_) {
          const { rgVideoTracks: j, strCacheBreakOrigin: l } = _;
          return j
            ? j.map((f, g) =>
                (0, t.jsx)(
                  M,
                  { track: f, rgVideoTracks: j, strCacheBreakOrigin: l },
                  g,
                ),
              )
            : null;
        }
        function M(_) {
          const { track: j, rgVideoTracks: l, strCacheBreakOrigin: f } = _;
          let g = j.eLanguage;
          if (s.TS.EREALM == o.TU.k_ESteamRealmChina)
            if (C.A0.IsELanguageValidInRealm(g, o.TU.k_ESteamRealmChina))
              g = C.A0.GetELanguageFallback(g);
            else if (g === U.NFp) {
              if (l.find((h) => C.A0.GetELanguageFallback(h.eLanguage) === g))
                return null;
            } else return null;
          else if (!C.A0.IsELanguageValidInRealm(g, o.TU.k_ESteamRealmGlobal))
            return null;
          return (0, t.jsx)("track", {
            src: b(j.sURL, f),
            kind: j.sKind,
            default: j.bDefault,
            srcLang: (0, U.wwZ)(g),
            label: (0, C.uD)(g),
          });
        }
      },
      70187: (z, W, n) => {
        "use strict";
        n.d(W, {
          B8: () => X,
          It: () => S,
          N2: () => g,
          Pk: () => Pe,
          Sz: () => R,
          Tu: () => E,
          W4: () => f,
          ZS: () => V,
          Zb: () => D,
          _J: () => Be,
          ck: () => Te,
          d$: () => pe,
          j$: () => h,
        });
        var t = n(7850),
          v = n(29950),
          U = n(33645),
          o = n.n(U),
          C = n(24660),
          w = n(19298),
          s = n(71944),
          r = n(90626),
          c = n(43434),
          I = n(83482),
          x = n(1917),
          b = n(36118),
          B = n(71421),
          m = n(36707),
          M = n(18210),
          _ = n(53113),
          j = n(98609),
          l = n(68941);
        const f = new Map([
            ["b", { Constructor: d, autocloses: !1 }],
            ["i", { Constructor: O, autocloses: !1 }],
            [
              "h1",
              { Constructor: D, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h2",
              { Constructor: R, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h3",
              { Constructor: V, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h4",
              { Constructor: H, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h5",
              { Constructor: Z, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["center", { Constructor: $, autocloses: !1 }],
            [
              "smalltext",
              { Constructor: he, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["u", { Constructor: L, autocloses: !1 }],
            ["strike", { Constructor: k, autocloses: !1 }],
            ["spoiler", { Constructor: ve, autocloses: !1 }],
            ["hr", { Constructor: _e, autocloses: !1 }],
            ["noparse", { Constructor: Ce, autocloses: !1 }],
            ["url", { Constructor: Se, autocloses: !1 }],
            ["quote", { Constructor: Pe, autocloses: !1 }],
            ["pullquote", { Constructor: Ee, autocloses: !1 }],
            ["code", { Constructor: ge, autocloses: !1 }],
            ["c", { Constructor: be, autocloses: !1 }],
            [
              "list",
              { Constructor: X, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "olist",
              { Constructor: Be, autocloses: !1, skipInternalNewline: !0 },
            ],
            ["*", { Constructor: Te, autocloses: !0, skipInternalNewline: !0 }],
            [
              "table",
              { Constructor: Fe, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "tr",
              {
                Constructor: Ge,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "th",
              {
                Constructor: Ke,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "td",
              {
                Constructor: Oe,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "expand",
              {
                Constructor: ze,
                autocloses: !1,
                skipInternalNewline: !0,
                allowWrapTextForCopying: !0,
              },
            ],
            ["calendarevent", { Constructor: We, autocloses: !0 }],
            ["doclink", { Constructor: Me, autocloses: !1 }],
            ["color", { Constructor: fe, autocloses: !1 }],
            ["bgcolor", { Constructor: me, autocloses: !1 }],
            ["p", { Constructor: p, autocloses: !1, skipFollowingNewline: !0 }],
          ]),
          g = new Map([
            ["looping_media", { Constructor: l.$A, autocloses: !1 }],
            ["video", { Constructor: l.UT, autocloses: !1 }],
            ["youtubeorvideo", { Constructor: x.Eo, autocloses: !1 }],
            ["previewyoutube", { Constructor: x.gH, autocloses: !1 }],
          ]);
        function h(a, i) {
          return i === void 0 ? a[""] : a[i];
        }
        function E(a, i) {
          return (y) => a({ ...y, className: i });
        }
        function d(a) {
          return (0, t.jsx)("b", { className: o().Bold, children: a.children });
        }
        function O(a) {
          return (0, t.jsx)("i", {
            className: (0, m.A)(o().Italic, "BB_Italic"),
            children: a.children,
          });
        }
        function L(a) {
          return (0, t.jsx)("u", {
            className: o().Underline,
            children: a.children,
          });
        }
        function k(a) {
          return (0, t.jsx)("s", {
            className: o().Strike,
            children: a.children,
          });
        }
        function p(a) {
          return (0, t.jsxs)("p", {
            className: o().Paragraph,
            children: [a.children, (0, t.jsx)("wbr", {})],
          });
        }
        function S(a) {
          return (0, t.jsxs)("div", {
            className: o().Paragraph,
            role: "paragraph",
            children: [a.children, (0, t.jsx)("wbr", {})],
          });
        }
        function T(a, i, y) {
          let P = h(i.args, "id");
          return (
            P || (P = h(i.args)),
            P &&
              typeof P == "string" &&
              P.length > 0 &&
              P[0] === "#" &&
              (P = P.substring(1)),
            (0, t.jsx)(a, {
              id: P || void 0,
              className: (0, m.A)(y, i.className),
              children: i.children,
            })
          );
        }
        function D(a) {
          return T("h1", a, (0, m.A)(o().Header1, "BB_Header1"));
        }
        function R(a) {
          return T("h2", a, (0, m.A)(o().Header2, "BB_Header2"));
        }
        function V(a) {
          return T("h3", a, (0, m.A)(o().Header3, "BB_Header3"));
        }
        function H(a) {
          return T("h4", a, (0, m.A)(o().Header4, "BB_Header4"));
        }
        function Z(a) {
          return T("h5", a, (0, m.A)(o().Header5, "BB_Header5"));
        }
        function $(a) {
          let i = h(a.args, "id");
          return (
            i &&
              typeof i == "string" &&
              i.length > 0 &&
              i[0] === "#" &&
              (i = i.substring(1)),
            (0, t.jsx)("span", {
              id: i || void 0,
              className: (0, m.A)(o().CenterSpan, "BB_Center"),
              children: a.children,
            })
          );
        }
        function he(a) {
          return T("div", a, (0, m.A)(o().SmallText, "BB_SmallText"));
        }
        function ve(a) {
          let [i, y] = r.useState(!1),
            P = r.useCallback(() => {
              y(!i);
            }, [i]);
          return (0, t.jsx)(w.Z, {
            className: (0, m.A)(o().Spoiler, i && o().Revealed),
            focusable: !0,
            onActivate: P,
            onOKActionDescription: (0, M.we)(
              i ? "#Bbcode_Spoiler_Hide" : "#Bbcode_Spoiler_Show",
            ),
            children: (0, t.jsx)("span", {
              className: o().SpoilerText,
              children: a.children,
            }),
          });
        }
        function _e(a) {
          return (0, t.jsx)("hr", { className: o().HR });
        }
        function fe(a) {
          const i = h(a.args);
          return (0, t.jsx)("span", {
            style: { color: i },
            children: a.children,
          });
        }
        function me(a) {
          const i = h(a.args);
          return (0, t.jsx)("span", {
            style: { backgroundColor: i },
            children: a.children,
          });
        }
        function Se(a) {
          let i = (0, v.J)(h(a.args));
          if (!i) {
            const N = a.children;
            typeof N == "string" && (0, _.DZ)(N) && (i = (0, v.J)(N));
          }
          const y = h(a.args, "style") == "button" ? o().LinkButton : void 0,
            P = y && h(a.args, "buttoncolor");
          let A = h(a.args, "id");
          return (
            A &&
              typeof A == "string" &&
              A.length > 0 &&
              A[0] === "#" &&
              (A = A.substring(1)),
            i === void 0 && !A
              ? a.children || ""
              : i === void 0 ||
                  (typeof i == "string" && i.length > 0 && i[0] == "#")
                ? (0, t.jsx)("a", {
                    href: i ?? null,
                    id: A,
                    children: a.children,
                  })
                : (0, t.jsx)(pe, {
                    className: y,
                    href: i,
                    id: A,
                    style: { backgroundColor: P },
                    children: a.children,
                  })
          );
        }
        function Me(a) {
          const i = h(a.args),
            y = h(a.args, "style") == "button" ? o().LinkButton : void 0,
            P = y && h(a.args, "buttoncolor");
          return (0, t.jsx)(pe, {
            className: y,
            style: { backgroundColor: P },
            href: `${j.TS.PARTNER_BASE_URL}doc/${i}`,
            children: a.children,
          });
        }
        const pe = (a) => {
          const { href: i, ...y } = a;
          let P = (0, I.OZ)(i ?? ""),
            A;
          (0, c.p)(P)
            ? ((P =
                (j.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                (0, c.E)(P)),
              (A = "noopener nofollow"))
            : (P = (0, _.NT)(P));
          const N =
            typeof a.children == "string" &&
            a.children.length > 0 &&
            i &&
            !i.startsWith("steam://")
              ? (0, _.Qz)(i)
              : void 0;
          return (0, t.jsx)(B.Gq, {
            toolTipContent: N,
            direction: "top",
            children: (0, t.jsx)(C.Ii, {
              ...y,
              href: P,
              rel: A,
              children: a.children,
            }),
          });
        };
        function ye(a) {
          return jsx("a", {
            className: styles.DisabledMouseEvents,
            href: h(a.args),
            children: a.children,
          });
        }
        function Pe(a) {
          const i = h(a.args, "author");
          return (0, t.jsxs)("blockquote", {
            className: (0, m.A)(o().BlockQuote, a.className),
            children: [
              !!i &&
                (0, t.jsxs)("div", {
                  className: o().QuoteAuthor,
                  children: [
                    (0, M.we)("#Bbcode_Originally_Posted_By") + " ",
                    " ",
                    (0, t.jsx)("b", { children: i + ":" }),
                  ],
                }),
              a.children,
            ],
          });
        }
        function Ee(a) {
          return (0, t.jsx)("div", {
            className: o().PullQuote,
            children: a.children,
          });
        }
        function ge(a) {
          return (0, t.jsx)("code", {
            className: o().CodeBlock,
            children: a.children,
          });
        }
        function be(a) {
          return (0, t.jsx)("code", {
            className: o().Code,
            children: a.children,
          });
        }
        function X(a) {
          return (0, t.jsx)("ul", {
            className: (0, m.A)(o().List, "bullets"),
            children: a.children,
          });
        }
        function Be(a) {
          return (0, t.jsx)("ol", {
            className: o().OrderedList,
            children: a.children,
          });
        }
        function Te(a) {
          let i = h(a.args, "id");
          return (
            i &&
              typeof i == "string" &&
              i.length > 0 &&
              i[0] === "#" &&
              (i = i.substring(1)),
            (0, t.jsx)("li", {
              className: o().ListItem,
              id: i || void 0,
              children: a.children,
            })
          );
        }
        function Ce(a) {
          return a.children;
        }
        function Fe(a) {
          const i = h(a.args, "noborder"),
            y = h(a.args, "equalcells"),
            P = h(a.args, "colwidth");
          return (0, t.jsxs)("table", {
            className: (0, m.A)(
              o().Table,
              "BB_Table",
              i && o().NoBorder,
              y && o().EqualCells,
            ),
            children: [
              P &&
                (0, t.jsx)("colgroup", {
                  children: P.split(",").map((A, N) =>
                    (0, t.jsx)(Re, { width: A }, N),
                  ),
                }),
              (0, t.jsx)("tbody", { children: a.children }),
            ],
          });
        }
        function Re(a) {
          const { width: i } = a;
          let y;
          return (
            i && parseInt(i) > 0 && (y = { width: `${i}px` }),
            (0, t.jsx)("col", { style: y })
          );
        }
        function Ge(a) {
          return (0, t.jsx)("tr", {
            className: (0, m.A)(o().TableRow, "BB_TableRow"),
            children: a.children,
          });
        }
        function Ne(a, i) {
          const y = h(i.args, "width"),
            P = h(i.args, "colspan"),
            A = h(i.args, "rowspan"),
            N = {};
          return (
            P && parseInt(P) > 1 && (N.colSpan = parseInt(P)),
            A && parseInt(A) > 1 && (N.rowSpan = parseInt(A)),
            (0, t.jsx)(a, {
              className: (0, m.A)(o().TableCell, a == "td" && "BB_TableData"),
              ...N,
              style: y ? { width: y } : void 0,
              children: i.children,
            })
          );
        }
        function Ke(a) {
          return Ne("th", a);
        }
        function Oe(a) {
          return Ne("td", a);
        }
        function He(a, i, y, P) {
          switch (a) {
            case "details":
              return {
                collapsed: "#Bbcode_Expand_Details_Collapsed",
                expanded: "#Bbcode_Expand_Details_Expanded",
                style: o().ExpandSection_Details,
              };
            case "spoiler":
              return {
                collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
                expanded: "#Bbcode_Expand_Spoiler_Expanded",
                style: o().ExpandSection_Spoiler,
              };
            case "title":
              return {
                collapsed: i || y || "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: i || P || "#Bbcode_Expand_ShowMore_Expanded",
                style: o().ExpandSection_WithTitle,
              };
            default:
            case "showmore":
              return {
                collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: "#Bbcode_Expand_ShowMore_Expanded",
                style: o().ExpandSection_ShowMore,
              };
          }
        }
        function ze(a) {
          const i = !!h(a.args, "expanded"),
            [y, P] = r.useState(i),
            A = h(a.args, "title"),
            N = h(a.args, "collapsed_str"),
            F = h(a.args, "expanded_str"),
            G = He(h(a.args, "type"), A, N, F);
          return (0, t.jsxs)("div", {
            className: (0, m.A)({
              [o().ExpandSectionBlock]: !0,
              [G.style ?? ""]: G.style != null,
              [o().ExpandSectionExpanded]: y,
              [o().ExpandSectionCollapsed]: !y,
              BBCodeExpanded: y,
              BBCodeCollapsed: !y,
            }),
            children: [
              (0, t.jsxs)("div", {
                className: o().ExpandSectionHeader,
                onClick: () => P(!y),
                children: [
                  (0, M.we)(y ? G.expanded : G.collapsed),
                  (0, t.jsx)("div", {
                    className: o().EmbedArrow,
                    children: (0, t.jsx)(b.DK4, { angle: y ? 180 : 0 }),
                  }),
                ],
              }),
              y &&
                (0, t.jsx)("div", {
                  className: o().ExpandSectionBody,
                  children: a.children,
                }),
            ],
          });
        }
        function We(a) {
          const i = h(a.args, "title"),
            y = h(a.args, "start") ?? h(a.args, "datetime"),
            P = h(a.args, "end") ?? h(a.args, "datetime"),
            A = h(a.args, "body") ?? null,
            N = h(a.args, "location") ?? null,
            F = h(a.args, "id") ?? "",
            G = new Date(y),
            J = G.getUTCFullYear(),
            Je = ("0" + (G.getUTCMonth() + 1)).slice(-2),
            Xe = ("0" + G.getUTCDate()).slice(-2),
            qe = ("0" + G.getUTCHours()).slice(-2),
            Qe = ("0" + G.getUTCMinutes()).slice(-2),
            Ye = `${J}${Je}${Xe}T${qe}${Qe}00Z`,
            Ue = new Date(P),
            et = Ue.getUTCFullYear(),
            tt = ("0" + (Ue.getUTCMonth() + 1)).slice(-2),
            rt = ("0" + Ue.getUTCDate()).slice(-2),
            nt = ("0" + Ue.getUTCHours()).slice(-2),
            at = ("0" + Ue.getUTCMinutes()).slice(-2),
            Ve = `${et}${tt}${rt}T${nt}${at}00Z`;
          let ke;
          try {
            let xe = `BEGIN:VCALENDAR\r
`;
            (xe += `VERSION:2.0\r
`),
              (xe += `BEGIN:VEVENT\r
`),
              (xe += `DTSTART:${Ye}\r
`),
              (xe += `DTEND:${Ve}\r
`),
              (xe += `SUMMARY:${i.replace(
                `
`,
                "\\n",
              )}\r
`),
              A &&
                (xe += `DESCRIPTION:${A.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              N &&
                (xe += `LOCATION:${N.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              (xe += `END:VEVENT\r
`),
              (xe += `END:VCALENDAR\r
`),
              (ke = `data:text/calendar;charset=utf-8;base64,${s.fromByteArray(new TextEncoder().encode(xe))}`);
          } catch (xe) {
            console.error(xe);
          }
          let De =
            "https://calendar.google.com/calendar/render?action=TEMPLATE";
          (De += `&text=${encodeURI(i)}`),
            (De += `&details=${encodeURI(A)}`),
            (De += `&dates=${encodeURI(Ye + "/" + Ve)}`);
          const Ze = (xe) => {
            if ("ReactNativeWebView" in window) {
              const st = window.ReactNativeWebView,
                it = {
                  event_name: "addcalendarevent",
                  tsStart: G.getTime(),
                  tsEnd: Ue.getTime(),
                  strTitle: i,
                  strNotes: A,
                  strLocation: N,
                };
              st.postMessage(JSON.stringify(it)), xe.preventDefault();
            }
          };
          return (0, t.jsxs)("div", {
            className: (0, m.A)(
              "SaleSectionCalendarEventContainer",
              o().CalendarEventContainer,
            ),
            id: F,
            children: [
              ke &&
                (0, t.jsx)("a", {
                  className: (0, m.A)(
                    "SaleSectionCalendarEventLink",
                    o().CalendarEventLink,
                  ),
                  href: ke,
                  onClick: Ze,
                  download: "calendar.ics",
                  children: "Apple",
                }),
              (0, t.jsx)("a", {
                className: (0, m.A)(
                  "SaleSectionCalendarEventLink",
                  o().CalendarEventLink,
                ),
                href: De,
                children: "Google",
              }),
              ke &&
                (0, t.jsx)("a", {
                  className: (0, m.A)(
                    "SaleSectionCalendarEventLink",
                    o().CalendarEventLink,
                  ),
                  href: ke,
                  onClick: Ze,
                  download: "calendar.ics",
                  children: "Outlook",
                }),
            ],
          });
        }
      },
      68941: (z, W, n) => {
        "use strict";
        n.d(W, { $A: () => r, UT: () => c, g4: () => s });
        var t = n(7850),
          v = n(99412),
          U = n(72243),
          o = n(53113),
          C = n(98609),
          w = n(70187);
        function s(I) {
          let x = (0, w.j$)(I, "poster");
          x && (x = (0, o.L$)(x));
          const b = new Array();
          {
            const _ = (0, w.j$)(I, "mp4");
            _ && b.push({ sURL: (0, o.L$)(_), sFormat: "video/mp4" });
            const j = (0, w.j$)(I, "webm");
            j && b.push({ sURL: (0, o.L$)(j), sFormat: "video/webm" });
          }
          const B = (0, v.sfN)(C.TS.LANGUAGE),
            m = B != v.Bhc,
            M = new Array();
          for (let _ = v.Bhc; _ < v.bP9; _++) {
            const j = (0, w.j$)(I, "sub_" + (0, v.wwZ)(_));
            j &&
              M.push({
                sURL: (0, o.L$)(j),
                eLanguage: _,
                sKind: "subtitles",
                bDefault: m && _ == B,
              });
            const l = (0, w.j$)(I, "cap_" + (0, v.wwZ)(_));
            l &&
              M.push({
                sURL: (0, o.L$)(l),
                eLanguage: _,
                sKind: "captions",
                bDefault: m && _ == B,
              });
          }
          return { sPoster: x, rgVideoSources: b, rgVideoTracks: M };
        }
        function r(I) {
          const x = s(I.args);
          return (0, t.jsx)(U.L, {
            video: x,
            bAutoPlay: !0,
            bControls: !1,
            bLoop: !0,
          });
        }
        function c(I) {
          const x = s(I.args),
            b = I.children ? I.children.toString() : void 0;
          b &&
            b.startsWith("http") &&
            x.rgVideoSources.push({
              sURL: (0, o.L$)(b),
              sFormat: "video/webm",
            });
          const B = (0, w.j$)(I.args, "autoplay"),
            m = B !== "0" && B !== "off" && B !== "false",
            M = (0, w.j$)(I.args, "controls"),
            _ = M !== "0" && M !== "off" && M !== "false",
            j = (0, w.j$)(I.args, "loop"),
            l = M !== "0" && M !== "off" && M !== "false";
          return (0, t.jsx)(U.L, {
            video: x,
            bAutoPlay: m,
            bControls: _,
            bLoop: j ? l : m,
          });
        }
      },
      43458: (z, W, n) => {
        "use strict";
        n.d(W, { Lg: () => s, XU: () => x, jZ: () => r });
        const t = 20,
          v = /^.*youtube[^v]+v=(.{11}).*/,
          U = /^.*youtu\.be\/(.{11}).*/,
          o = /^.*youtube.*\/embed\/(.{11}).*/,
          C = /^.*[?&]t=([^&]+)(?:&|$)/,
          w = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
        function s(b) {
          return !!r(b);
        }
        function r(b) {
          return (
            b?.length < t ? void 0 : v.exec(b) || U.exec(b) || o.exec(b)
          )?.[1];
        }
        function c(b) {
          return C.exec(b)?.[1];
        }
        function I(b) {
          const B = w.exec(b);
          if (!(B?.[1] || B?.[2] || B?.[3] || B?.[4])) return;
          if (B?.[4]) return parseInt(B?.[4]);
          let m = 0;
          return (
            B?.[1] && (m += 3600 * parseInt(B[1])),
            B?.[2] && (m += 60 * parseInt(B[2])),
            B?.[3] && (m += parseInt(B[3])),
            m
          );
        }
        function x(b) {
          const B = r(b);
          if (!B) return;
          const m = c(b),
            M = m ? I(m) : void 0;
          return { strVideoID: B, nStartSeconds: M };
        }
      },
      84676: (z, W, n) => {
        "use strict";
        n.d(W, {
          G6: () => b,
          Gg: () => M,
          Sq: () => c,
          eR: () => I,
          ik: () => x,
          mZ: () => _,
          t7: () => B,
          zX: () => l,
        });
        var t = n(41735),
          v = n.n(t),
          U = n(90626),
          o = n(72604),
          C = n(3367),
          w = n(54963),
          s = n(10142);
        function r(E, d, O = !0) {
          const L = O
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            k = O || CStoreItemCache.Get().BHasStoreItem(E, d, L) ? E : null,
            [p, S] = b(k, d, L),
            [T, D] = useState(null),
            [R, V] = b(T, d, L);
          useEffect(() => {
            p?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              D(p.GetParentAppID());
          }, [p]);
          let H = p?.GetShortDescription()
            ? StripBBCodeTags(p.GetShortDescription())
            : "";
          (!H || H.length === 0) &&
            R &&
            (H = R?.GetShortDescription()
              ? StripBBCodeTags(R.GetShortDescription())
              : "");
          const Z = S == x && (!T || V == x);
          return [H, Z];
        }
        const c = 1,
          I = 2,
          x = 3;
        function b(E, d, O, L) {
          const k = (0, U.useRef)(void 0),
            p = (0, U.useRef)(void 0),
            S = (0, w.CH)();
          k.current = E;
          const [T, D] = (0, U.useState)(void 0),
            {
              include_assets: R,
              include_release: V,
              include_platforms: H,
              include_all_purchase_options: Z,
              include_screenshots: $,
              include_trailers: he,
              include_ratings: ve,
              include_tag_count: _e,
              include_reviews: fe,
              include_basic_info: me,
              include_supported_languages: Se,
              include_full_description: Me,
              include_included_items: pe,
              include_assets_without_overrides: ye,
              apply_user_filters: Pe,
              include_links: Ee,
              include_extra_details: ge,
              include_optin_registration_tags: be,
            } = O;
          if (
            ((0, U.useEffect)(() => {
              const Be = {
                include_assets: R,
                include_release: V,
                include_platforms: H,
                include_all_purchase_options: Z,
                include_screenshots: $,
                include_trailers: he,
                include_ratings: ve,
                include_tag_count: _e,
                include_reviews: fe,
                include_basic_info: me,
                include_supported_languages: Se,
                include_full_description: Me,
                include_included_items: pe,
                include_assets_without_overrides: ye,
                apply_user_filters: Pe,
                include_links: Ee,
                include_extra_details: ge,
                include_optin_registration_tags: be,
              };
              let Te = null;
              return (
                !E ||
                  E < 0 ||
                  s.A.Get().BHasStoreItem(E, d, Be) ||
                  (T !== void 0 && L && L == p.current) ||
                  (L !== p.current && (D(void 0), (p.current = L)),
                  (Te = v().CancelToken.source()),
                  s.A.Get()
                    .QueueStoreItemRequest(E, d, Be)
                    .then((Ce) => {
                      !Te?.token.reason && k.current === E && D(Ce == o.R), S();
                    })),
                () => Te?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              E,
              d,
              L,
              T,
              R,
              V,
              H,
              Z,
              $,
              he,
              ve,
              _e,
              fe,
              me,
              Se,
              Me,
              pe,
              ye,
              Pe,
              Ee,
              ge,
              be,
              S,
            ]),
            !E)
          )
            return [null, I];
          if (T === !1) return [void 0, I];
          if (s.A.Get().BIsStoreItemMissing(E, d)) return [void 0, I];
          if (!s.A.Get().BHasStoreItem(E, d, O)) return [void 0, c];
          const X = s.A.Get().GetStoreItemWithLegacyVisibilityCheck(E, d);
          return X ? [X, x] : [null, I];
        }
        function B(E, d, O) {
          return b(E, C.c6.qI, d, O);
        }
        function m(E, d, O) {
          return b(E, EStoreItemType.k_EStoreItemType_Bundle, d, O);
        }
        function M(E, d, O) {
          return b(E, C.c6.RD, d, O);
        }
        function _(E, d, O) {
          const [L, k] = b(E, d, O);
          let p;
          L?.GetStoreItemType() == C.c6.RD &&
            !L.GetAssets()?.GetHeaderURL() &&
            L?.GetIncludedAppIDs().length == 1 &&
            (p = L.GetIncludedAppIDs()[0]);
          const [S, T] = B(p, O);
          return p && S?.BIsVisible() ? [S, T] : [L, k];
        }
        function j(E, d, O, L) {
          const k = (0, w.CH)(),
            {
              include_assets: p,
              include_release: S,
              include_platforms: T,
              include_all_purchase_options: D,
              include_screenshots: R,
              include_trailers: V,
              include_ratings: H,
              include_tag_count: Z,
              include_reviews: $,
              include_basic_info: he,
              include_supported_languages: ve,
              include_full_description: _e,
              include_included_items: fe,
              include_assets_without_overrides: me,
              apply_user_filters: Se,
              include_links: Me,
              include_extra_details: pe,
              include_optin_registration_tags: ye,
            } = O;
          return (
            (0, U.useEffect)(() => {
              if (!E || E.length == 0) return;
              const Ee = {
                  include_assets: p,
                  include_release: S,
                  include_platforms: T,
                  include_all_purchase_options: D,
                  include_screenshots: R,
                  include_trailers: V,
                  include_ratings: H,
                  include_tag_count: Z,
                  include_reviews: $,
                  include_basic_info: he,
                  include_supported_languages: ve,
                  include_full_description: _e,
                  include_included_items: fe,
                  include_assets_without_overrides: me,
                  apply_user_filters: Se,
                  include_links: Me,
                  include_extra_details: pe,
                  include_optin_registration_tags: ye,
                },
                ge = E.filter(
                  (Be) =>
                    !(
                      s.A.Get().BHasStoreItem(Be, d, Ee) ||
                      s.A.Get().BIsStoreItemMissing(Be, d)
                    ),
                );
              if (ge.length == 0) return;
              const be = v().CancelToken.source(),
                X = ge.map((Be) => s.A.Get().QueueStoreItemRequest(Be, d, Ee));
              return (
                Promise.all(X).then(() => {
                  be.token.reason || k();
                }),
                () => be.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              E,
              d,
              L,
              k,
              p,
              S,
              T,
              D,
              R,
              V,
              H,
              Z,
              $,
              he,
              ve,
              _e,
              fe,
              me,
              Se,
              Me,
              pe,
              ye,
            ]),
            E
              ? E.every(
                  (Ee) =>
                    s.A.Get().BHasStoreItem(Ee, d, O) ||
                    s.A.Get().BIsStoreItemMissing(Ee, d),
                )
                ? E.every((Ee) =>
                    s.A.Get().GetStoreItemWithLegacyVisibilityCheck(Ee, d),
                  )
                  ? x
                  : I
                : c
              : I
          );
        }
        function l(E, d, O) {
          return j(E, C.c6.qI, d, O);
        }
        function f(E, d, O) {
          return j(E, EStoreItemType.k_EStoreItemType_Bundle, d, O);
        }
        function g(E, d, O) {
          return j(E, EStoreItemType.k_EStoreItemType_Package, d, O);
        }
        function h() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      43828: (z, W, n) => {
        "use strict";
        n.d(W, { h: () => c });
        var t = n(7850),
          v = n(96232),
          U = n(90626),
          o = n(70187),
          C = n(7487),
          w = n(72609);
        function s(I) {
          return new C.OJ(new C.R8());
        }
        function r() {
          return new Map([...Array.from(o.W4.entries())]);
        }
        function c(I) {
          const { text: x, languageOverride: b } = I,
            [B] = (0, U.useState)(new v.B(r(), s, b ?? w.TS.LANGUAGE));
          return (0, t.jsx)(t.Fragment, { children: B.ParseBBCode(x, {}) });
        }
      },
      1917: (z, W, n) => {
        "use strict";
        n.d(W, { Eo: () => I, V2: () => C.V2, gH: () => c });
        var t = n(7850),
          v = n(90626),
          U = n(70187),
          o = n(68941),
          C = n(43597),
          w = n(32093),
          s = n(72609);
        function r() {
          return s.TS.EREALM === w.TU.k_ESteamRealmChina;
        }
        function c(x) {
          if (r()) return null;
          let b = (0, U.j$)(x.args);
          if (b) {
            let B = b.split(";");
            if (B.length == 2) {
              let m = B[0],
                M = B[1].toLocaleLowerCase();
              return (0, t.jsx)(C.AX, {
                videoID: m,
                align: M,
                bShowVideoImmediately: !0,
              });
            }
          }
          return (0, t.jsx)(v.Fragment, {});
        }
        function I(x) {
          if (r() || s.TS.COUNTRY.toLocaleUpperCase() == "CN")
            return (0, o.UT)(x);
          const b = (0, U.j$)(x.args, "youtubeid"),
            B = (0, U.j$)(x.args, "size"),
            m = (0, U.j$)(x.args, "seconds");
          return (0, t.jsx)(C.AX, {
            videoID: b,
            nStartSeconds: m ? Number.parseInt(m) : void 0,
            align: B,
            bShowVideoImmediately: !0,
          });
        }
      },
      22714: (z, W, n) => {
        "use strict";
        n.d(W, { A: () => g });
        var t = n(7850),
          v = n(90626),
          U = n(75844),
          o = n(54963),
          C = n(24660),
          w = n(19298),
          s = n(16346),
          r = n(38655),
          c = n(18210),
          I = n(36707),
          x = n(90024),
          b = n.n(x),
          B = n(75975),
          m = n(71421),
          M = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          j = (h, E, d, O) => {
            for (
              var L = O > 1 ? void 0 : O ? _(E, d) : E, k = h.length - 1, p;
              k >= 0;
              k--
            )
              (p = h[k]) && (L = (O ? p(E, d, L) : p(L)) || L);
            return O && L && M(E, d, L), L;
          };
        const l = 1576780700;
        let f = class extends v.Component {
          OnEmoticonClick(h) {
            const {
                emoticonStore: E,
                strFlairGroupID: d,
                SetUIDisplayPref: O,
                contextOptions: L,
                bShowChatAddons: k,
              } = this.props,
              {
                roomEffectSettings: p,
                onRoomEffectSelected: S,
                onStickerSelected: T,
              } = this.props;
            let D = null;
            if (
              (k && p && S && T
                ? (D = (0, t.jsx)(r.Q4, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    onEmoticonSelected: (R) =>
                      this.props.OnEmoticonSelected(R, !1),
                    roomEffectSettings: p,
                    onRoomEffectSelected: S,
                    onStickerSelected: T,
                  }))
                : d && E.flair_list && E.GetFlairListByGroupID(d)?.length > 0
                  ? (D = (0, t.jsx)(r.CE, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    }))
                  : (D = (0, t.jsx)(r.iY, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })),
              (0, s.lX)(
                D,
                h,
                L || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0,
                },
              ),
              this.BHaveUnseenEmoticons() && O)
            ) {
              let R = this.GetNewestIndicatorTime();
              (!R || R < l) && (R = l), O("rtLastAckedNewEmoticons", R);
            }
          }
          GetNewestIndicatorTime() {
            let h = this.props.emoticonStore,
              E = Number.MIN_SAFE_INTEGER,
              d = h.GetTimeReceivedNewestEmoticon();
            d && (E = d);
            let O = h.GetTimeReceivedForStickerOrEffect();
            return (
              (E = Math.max(O, E)), E > Number.MIN_SAFE_INTEGER ? E : void 0
            );
          }
          BHaveUnseenEmoticons() {
            const { rtLastAckedNewEmoticons: h } = this.props;
            let E = this.GetNewestIndicatorTime();
            return !h || h < l ? !0 : E && (!h || h < E);
          }
          render() {
            const {
              disabled: h,
              className: E,
              ttip: d,
              useImg: O,
            } = this.props;
            let L = [E],
              k = !1;
            return (
              h ? L.push("disabled") : this.BHaveUnseenEmoticons() && (k = !0),
              d && L.push("ttip"),
              O
                ? (0, t.jsx)(w.Z, {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, c.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                    children: (0, t.jsx)(m.he, {
                      toolTipContent: d,
                      children: (0, t.jsx)("img", {
                        src: this.props.useImg,
                        className: (0, I.A)(...L),
                        title:
                          this.props.title ||
                          (0, c.we)("#ChatEntryButton_Emoticon"),
                      }),
                    }),
                  })
                : (L.push(b().chatSubmitButton, b().EmoticonPickerButton),
                  (0, t.jsx)(C.fu, {
                    className: (0, I.A)(...L),
                    onOKActionDescription: (0, c.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      (0, c.we)("#ChatEntryButton_Emoticon"),
                    disabled: h,
                    children: (0, t.jsxs)(m.he, {
                      toolTipContent: d,
                      children: [
                        this.props.buttonIcon || (0, t.jsx)(B.nl, {}),
                        k && (0, t.jsx)(r.iD, {}),
                      ],
                    }),
                  }))
            );
          }
        };
        j([o.oI], f.prototype, "OnEmoticonClick", 1), (f = j([U.PA], f));
        const g = f;
      },
      38655: (z, W, n) => {
        "use strict";
        n.d(W, { Q4: () => _e, iY: () => me, CE: () => Se, iD: () => Re });
        var t = n(7850),
          v = n(14947),
          U = n(75844),
          o = n(90626),
          C = n(76842),
          w = n(84676),
          s = n(34360),
          r = n(36707),
          c = n(18210);
        function I(a, i, y = !1) {
          return `${a}economy/sticker${y ? "static" : ""}/${encodeURIComponent(i)}`;
        }
        var x = n(3166),
          b = n(19316),
          B = n(19298),
          m = n(64415),
          M = n(19418);
        class _ extends o.Component {
          constructor(i) {
            super(i), (this.state = { activeIndex: i.initialActiveIndex || 0 });
          }
          render() {
            const { config: i } = this.props,
              { activeIndex: y } = this.state,
              P = i[y],
              A = P ? P.renderContent() : null,
              N = i.length > 1,
              F = N
                ? ({ detail: { button: G } }) => {
                    G === m.pR.BUMPER_LEFT
                      ? this.setState({
                          activeIndex: Math.max(0, this.state.activeIndex - 1),
                        })
                      : G === m.pR.BUMPER_RIGHT &&
                        this.setState({
                          activeIndex: Math.min(
                            i.length - 1,
                            this.state.activeIndex + 1,
                          ),
                        });
                  }
                : void 0;
            return (0, t.jsxs)(B.Z, {
              className: M.Picker,
              onButtonDown: F,
              children: [
                N && (0, t.jsx)(j, { children: this.RenderTabs() }),
                A,
              ],
            });
          }
          RenderTabs() {
            return this.props.config.map(({ renderTab: i }, y) => {
              const P = this.state.activeIndex === y;
              return (0, t.jsx)(
                f,
                {
                  active: P,
                  onClick: () => this.setState({ activeIndex: y }),
                  children: i(P),
                },
                y,
              );
            });
          }
        }
        function j(a) {
          return (0, t.jsx)(B.Z, {
            className: M.Tabs,
            "flow-children": "row",
            children: a.children,
          });
        }
        function l(a) {
          return (0, t.jsx)("div", {
            className: M.Content,
            children: a.children,
          });
        }
        function f(a) {
          const { active: i, children: y, onClick: P } = a;
          return (0, t.jsx)(B.Z, {
            className: (0, r.A)(M.Tab, i && M.Active),
            focusClassName: M.Focus,
            onActivate: P,
            children: (0, t.jsx)("div", {
              className: (0, r.A)(M.TabContent, i && M.Active),
              children: y,
            }),
          });
        }
        function g(a) {
          const {
            items: i,
            renderItem: y,
            onItemSelect: P,
            keyExtractor: A,
            renderEmpty: N,
          } = a;
          let F = i.map((G, J) =>
            (0, t.jsx)(
              B.Z,
              {
                className: M.Item,
                onActivate: () => P(i[J]),
                autoFocus: J === 0,
                focusClassName: M.Focus,
                children: y(i[J]),
              },
              A(G),
            ),
          );
          return (
            i.length === 0 && N && (F = N()),
            (0, t.jsx)(B.Z, {
              "flow-children": "grid",
              className: M.ItemList,
              children: F,
            })
          );
        }
        function h(a) {
          const {
            title: i,
            onFilterChange: y,
            filter: P,
            onSubmit: A,
            ...N
          } = a;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(l, {
                children: (0, t.jsx)(d, {
                  title: i,
                  children: (0, t.jsx)(g, { ...N }),
                }),
              }),
              (0, t.jsx)(O, { value: P, onChange: y, onSubmit: A }),
            ],
          });
        }
        function E(a) {
          const { onFilterChange: i, filter: y, sections: P, title: A } = a;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(l, {
                children: [
                  A &&
                    (0, t.jsx)("div", {
                      className: M.SectionedPageTitle,
                      children: A,
                    }),
                  P.map(({ title: N, ...F }) =>
                    (0, t.jsx)(
                      d,
                      { title: N, children: (0, t.jsx)(g, { ...F }) },
                      N,
                    ),
                  ),
                ],
              }),
              (0, t.jsx)(O, { value: y, onChange: i }),
            ],
          });
        }
        function d(a) {
          return (0, t.jsxs)("div", {
            className: M.Section,
            children: [
              (0, t.jsx)("div", {
                className: M.SectionTitle,
                children: a.title,
              }),
              (0, t.jsx)("div", {
                className: M.SectionContent,
                children: a.children,
              }),
            ],
          });
        }
        function O(a) {
          const { value: i, onChange: y, onSubmit: P } = a;
          return (0, t.jsx)("div", {
            className: M.FilterInputContainer,
            children: (0, t.jsx)(b.pd, {
              type: "text",
              placeholder: (0, c.we)("#AddonPicker_Search"),
              className: M.FilterInput,
              value: i,
              onChange: (A) => y(A.target.value),
              onSubmit: P,
            }),
          });
        }
        function L(a) {
          const { className: i, ...y } = a;
          return (0, t.jsx)("div", {
            className: (0, r.A)(i, M.AddonPickerMessage),
            ...y,
          });
        }
        var k = n(42060),
          p = n.n(k),
          S = n(53107),
          T = n(96197),
          D = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          V = (a, i, y, P) => {
            for (
              var A = P > 1 ? void 0 : P ? R(i, y) : i, N = a.length - 1, F;
              N >= 0;
              N--
            )
              (F = a[N]) && (A = (P ? F(i, y, A) : F(A)) || A);
            return P && A && D(i, y, A), A;
          };
        const H = 1e3;
        function Z(a) {
          return a.recent_emoticons;
        }
        function $(a) {
          return a.recent_stickers;
        }
        function he(a) {
          return Z(a).length + $(a).length > 0;
        }
        function ve(a) {
          const [i, y] = (0, o.useState)(a.is_initialized);
          return (
            (0, o.useEffect)(() => {
              if (!a.is_initialized) {
                a.UpdateEmoticonList();
                const P = (0, v.z7)(
                  () => a.is_initialized,
                  () => y(a.is_initialized),
                );
                return () => P();
              }
              return () => {};
            }, [a]),
            i
          );
        }
        const _e = (0, U.PA)((a) => {
          const {
            emoticonStore: i,
            roomEffectSettings: y,
            strFlairGroupID: P,
            onEmoticonSelected: A,
            onRoomEffectSelected: N,
            onStickerSelected: F,
          } = a;
          ve(i);
          const G = [];
          return (
            he(i) &&
              G.push({
                renderTab: (J) =>
                  (0, t.jsx)("span", {
                    title: (0, c.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, r.A)(
                      p().PickerTab,
                      p().Clock,
                      J && p().ActiveTab,
                    ),
                    children: (0, t.jsx)(We, {}),
                  }),
                renderContent: () =>
                  (0, t.jsx)(Me, {
                    store: i,
                    onEmoticonSelect: (J) => A(J.name),
                    onStickerSelect: (J) => F(J.name),
                    flairGroupID: P,
                  }),
              }),
            (0, t.jsx)(s.tz, {
              children: (0, t.jsx)(_, {
                config: [
                  ...G,
                  {
                    renderTab: (J) =>
                      (0, t.jsx)("span", {
                        title: (0, c.we)("#AddonPicker_Emoticons"),
                        className: (0, r.A)(p().PickerTab, J && p().ActiveTab),
                        children: (0, t.jsx)(Oe, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(pe, {
                        store: i,
                        onItemSelect: (J) => A(J.name),
                        flairGroupID: P,
                      }),
                  },
                  {
                    renderTab: (J) =>
                      (0, t.jsx)("span", {
                        title: (0, c.we)("#AddonPicker_Stickers"),
                        className: (0, r.A)(p().PickerTab, J && p().ActiveTab),
                        children: (0, t.jsx)(Ne, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(Pe, {
                        store: i,
                        onItemSelect: (J) => F(J.name),
                      }),
                  },
                  {
                    renderTab: (J) =>
                      (0, t.jsx)("span", {
                        title: (0, c.we)("#AddonPicker_RoomEffects"),
                        className: (0, r.A)(p().PickerTab, J && p().ActiveTab),
                        children: (0, t.jsx)(ze, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(Ee, {
                        store: i,
                        effectSettings: y,
                        onItemSelect: (J) => N(J.name),
                      }),
                  },
                ],
              }),
            })
          );
        });
        let fe = class extends o.Component {
          m_disposeEmoticonStore;
          constructor(a) {
            super(a), (this.state = { strSearchText: "" });
            let i = this.props.emoticonStore;
            i.is_initialized ||
              (i.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, v.z7)(
                () => i.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            const {
                emoticonStore: a,
                onEmoticonSelected: i,
                onStickerSelected: y,
                strFlairGroupID: P,
              } = this.props,
              A = [];
            return (
              he(a) &&
                A.push({
                  renderTab: (N) =>
                    (0, t.jsx)("span", {
                      title: (0, c.we)("#AddonPicker_RecentlyUsed"),
                      className: (0, r.A)(
                        p().PickerTab,
                        p().Clock,
                        N && p().ActiveTab,
                      ),
                      children: (0, t.jsx)(We, {}),
                    }),
                  renderContent: () =>
                    (0, t.jsx)(Me, {
                      store: a,
                      onEmoticonSelect: (N) => i(N.name),
                      onStickerSelect: (N) => y(N.name),
                      flairGroupID: P,
                    }),
                }),
              (0, t.jsx)(s.tz, {
                children: (0, t.jsx)(_, {
                  config: [
                    ...A,
                    {
                      renderTab: (N) =>
                        (0, t.jsx)("span", {
                          title: (0, c.we)("#AddonPicker_Emoticons"),
                          className: (0, r.A)(
                            p().PickerTab,
                            N && p().ActiveTab,
                          ),
                          children: (0, t.jsx)(Oe, {}),
                        }),
                      renderContent: () =>
                        (0, t.jsx)(pe, {
                          store: a,
                          onItemSelect: (N) => i(N.name),
                          flairGroupID: P,
                        }),
                    },
                    {
                      renderTab: (N) =>
                        (0, t.jsx)("span", {
                          title: (0, c.we)("#AddonPicker_Stickers"),
                          className: (0, r.A)(
                            p().PickerTab,
                            N && p().ActiveTab,
                          ),
                          children: (0, t.jsx)(Ne, {}),
                        }),
                      renderContent: () =>
                        (0, t.jsx)(Pe, {
                          store: a,
                          onItemSelect: (N) => y(N.name),
                        }),
                    },
                  ],
                }),
              })
            );
          }
        };
        fe = V([U.PA], fe);
        class me extends o.Component {
          m_disposeEmoticonStore;
          constructor(i) {
            super(i), (this.state = { strSearchText: "" });
            let y = this.props.emoticonStore;
            y.is_initialized ||
              (y.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, v.z7)(
                () => y.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, t.jsx)(s.tz, {
              children: (0, t.jsx)(_, {
                config: [
                  {
                    renderTab: () =>
                      (0, t.jsx)("span", {
                        title: (0, c.we)("#AddonPicker_Emoticons"),
                        className: p().PickerTab,
                        children: (0, t.jsx)(Oe, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(ge, {
                        store: this.props.emoticonStore,
                        onItemSelect: (i) => this.props.OnSelected(i.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class Se extends o.Component {
          m_disposeEmoticonStore;
          constructor(i) {
            super(i), (this.state = { strSearchText: "" });
            let y = this.props.emoticonStore;
            y.is_initialized ||
              (y.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, v.z7)(
                () => y.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, t.jsx)(s.tz, {
              children: (0, t.jsx)(_, {
                config: [
                  {
                    renderTab: () =>
                      (0, t.jsx)("span", {
                        title: (0, c.we)("#AddonPicker_Emoticons"),
                        className: p().PickerTab,
                        children: (0, t.jsx)(Oe, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(be, {
                        store: this.props.emoticonStore,
                        onItemSelect: (i) => this.props.OnSelected(i.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class Me extends o.Component {
          state = { filter: "" };
          render() {
            const {
                store: i,
                onEmoticonSelect: y,
                onStickerSelect: P,
              } = this.props,
              { filter: A } = this.state,
              N = [];
            return (
              Z(i) &&
                N.push({
                  title: (0, c.we)("#AddonPicker_RecentEmoticons"),
                  items: C.pN.FilterEmoticons(Z(i), A),
                  onItemSelect: y,
                  renderItem: (F) => (0, t.jsx)(X, { emoticon: F }),
                  keyExtractor: (F) => F.name,
                  renderEmpty: () =>
                    (0, t.jsx)(L, {
                      children: A
                        ? (0, c.we)("#AddonPicker_NoResults")
                        : (0, c.we)(
                            "#AddonPicker_NoRecent",
                            (0, c.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              $(i).length &&
                N.push({
                  title: (0, c.we)("#AddonPicker_RecentStickers"),
                  items: C.pN.FilterStickers($(i), A),
                  onItemSelect: P,
                  renderItem: (F) => (0, t.jsx)(Be, { sticker: F }),
                  keyExtractor: ({ name: F }) => F,
                  renderEmpty: () =>
                    (0, t.jsx)(L, {
                      children: A
                        ? (0, c.we)("#AddonPicker_NoResults")
                        : (0, c.we)(
                            "#AddonPicker_NoRecent",
                            (0, c.we)("#AddonPicker_Stickers"),
                          ),
                    }),
                }),
              (0, t.jsx)(E, {
                onFilterChange: (F) => this.setState({ filter: F }),
                filter: A,
                sections: N,
              })
            );
          }
        }
        class pe extends o.Component {
          state = { filter: "" };
          render() {
            const { store: i, onItemSelect: y, flairGroupID: P } = this.props,
              { filter: A } = this.state,
              N = !A && P ? i.GetFlairListByGroupID(P) : i.emoticon_list,
              F = C.pN.FilterEmoticons(N, A).slice(0, H);
            return (0, t.jsx)(h, {
              title: (0, c.we)("#AddonPicker_Emoticons"),
              items: F,
              onItemSelect: y,
              renderItem: (G) => (0, t.jsx)(X, { emoticon: G }),
              keyExtractor: (G) => G.name,
              onFilterChange: (G) => this.setState({ filter: G }),
              filter: A,
              onSubmit: () => y(F[0]),
              renderEmpty: () =>
                A
                  ? (0, t.jsx)(L, {
                      children: (0, c.we)("#AddonPicker_NoResults"),
                    })
                  : (0, t.jsx)(ye, {}),
            });
          }
        }
        function ye() {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(L, {
                children: (0, c.we)(
                  "#AddonPicker_NoneOwned",
                  (0, c.we)("#AddonPicker_Emoticons"),
                ),
              }),
              (0, t.jsx)(L, {
                children: (0, c.PP)(
                  "#AddonPicker_AcquireAtPointsShopOrMarket",
                  (0, t.jsx)(S.uU, {
                    href: `${x.TS.STORE_BASE_URL}points/shop/c/emoticons`,
                    children: (0, c.we)(
                      "#AddonPicker_AcquireAtPointsShop_Link",
                    ),
                  }),
                  (0, t.jsx)(S.uU, {
                    href: `${x.TS.COMMUNITY_BASE_URL}market`,
                    children: (0, c.we)(
                      "#AddonPicker_AcquireAtPointsShopOrMarket_Link",
                    ),
                  }),
                ),
              }),
            ],
          });
        }
        class Pe extends o.Component {
          state = { filter: "" };
          render() {
            const { store: i, onItemSelect: y } = this.props,
              { filter: P } = this.state,
              A = C.pN.FilterStickers(i.GetStickerList(), P),
              N = () =>
                P
                  ? (0, t.jsx)(L, {
                      children: (0, c.we)("#AddonPicker_NoResults"),
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(L, {
                          children: (0, c.we)(
                            "#AddonPicker_NoneOwned",
                            (0, c.we)("#AddonPicker_Stickers"),
                          ),
                        }),
                        (0, t.jsx)(L, {
                          children: (0, c.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, t.jsx)(S.uU, {
                              href: `${x.TS.STORE_BASE_URL}points/shop/c/stickers`,
                              children: (0, c.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, t.jsx)(h, {
              title: (0, c.we)("#EmoticonPicker_StickerHeading"),
              items: A,
              onItemSelect: y,
              renderItem: (F) => (0, t.jsx)(Be, { sticker: F }),
              keyExtractor: ({ name: F }) => F,
              onFilterChange: (F) => this.setState({ filter: F }),
              filter: P,
              onSubmit: () => y(A[0]),
              renderEmpty: N,
            });
          }
        }
        class Ee extends o.Component {
          state = { filter: "" };
          render() {
            const { store: i, effectSettings: y, onItemSelect: P } = this.props,
              { filter: A } = this.state,
              N = i.GetEffectList().filter(({ name: G }) => G.indexOf(A) > -1),
              F = () =>
                A
                  ? (0, t.jsx)(L, {
                      children: (0, c.we)("#AddonPicker_NoResults"),
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(L, {
                          children: (0, c.we)(
                            "#AddonPicker_NoneOwned",
                            (0, c.we)("#AddonPicker_RoomEffects"),
                          ),
                        }),
                        (0, t.jsx)(L, {
                          children: (0, c.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, t.jsx)(S.uU, {
                              href: `${x.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                              children: (0, c.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, t.jsx)(h, {
              title: (0, c.we)("#EmoticonPicker_EffectHeading"),
              items: N,
              onItemSelect: P,
              renderItem: (G) =>
                (0, t.jsx)(Ce, { effect: G, roomEffectSettings: y }),
              keyExtractor: ({ name: G }) => G,
              onFilterChange: (G) => this.setState({ filter: G }),
              filter: A,
              onSubmit: () => P(N[0]),
              renderEmpty: F,
            });
          }
        }
        let ge = class extends o.Component {
          state = { filter: "" };
          render() {
            const { store: a, onItemSelect: i, flairGroupID: y } = this.props,
              { filter: P } = this.state,
              A = [];
            return (
              Z(a).length &&
                A.push({
                  title: (0, c.we)("#AddonPicker_RecentEmoticons"),
                  items: C.pN.FilterEmoticons(Z(a), P),
                  onItemSelect: i,
                  renderItem: (N) => (0, t.jsx)(X, { emoticon: N }),
                  keyExtractor: (N) => N.name,
                  renderEmpty: () =>
                    (0, t.jsx)(L, {
                      children: P
                        ? (0, c.we)("#AddonPicker_NoResults")
                        : (0, c.we)(
                            "#AddonPicker_NoRecent",
                            (0, c.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              (0, t.jsx)(E, {
                onFilterChange: (N) => this.setState({ filter: N }),
                filter: P,
                sections: [
                  ...A,
                  {
                    title: (0, c.we)("#AddonPicker_AllEmoticons"),
                    items: C.pN.FilterStickers(a.emoticon_list, P).slice(0, H),
                    onItemSelect: i,
                    renderItem: (N) => (0, t.jsx)(X, { emoticon: N }),
                    keyExtractor: (N) => N.name,
                    renderEmpty: () =>
                      P
                        ? (0, t.jsx)(L, {
                            children: (0, c.we)("#AddonPicker_NoResults"),
                          })
                        : (0, t.jsx)(ye, {}),
                  },
                ],
              })
            );
          }
        };
        ge = V([U.PA], ge);
        let be = class extends o.Component {
          state = { filter: "" };
          render() {
            const { store: a, onItemSelect: i, flairGroupID: y } = this.props,
              { filter: P } = this.state;
            return (0, t.jsx)(E, {
              onFilterChange: (A) => this.setState({ filter: A }),
              filter: P,
              sections: [
                {
                  title: (0, c.we)("#ChatEntryButton_Flair"),
                  items: C.pN.FilterStickers(a.GetFlairListByGroupID(y), P),
                  onItemSelect: i,
                  renderItem: (A) => (0, t.jsx)(X, { emoticon: A }),
                  keyExtractor: (A) => A.name,
                  renderEmpty: () =>
                    P
                      ? (0, t.jsx)(L, {
                          children: (0, c.we)("#AddonPicker_NoResults"),
                        })
                      : (0, t.jsx)(ye, {}),
                },
              ],
            });
          }
        };
        be = V([U.PA], be);
        const X = (a) => {
          const { emoticon: i, large: y } = a,
            P = !i.last_used && i.time_received;
          return (0, t.jsxs)("div", {
            className: p().EmoticonItem,
            children: [
              (0, t.jsx)(T.n, { emoticon: i.name, large: y }),
              P && (0, t.jsx)(Re, {}),
            ],
          });
        };
        class Be extends o.Component {
          state = { showHover: !1 };
          m_ref = o.createRef();
          render() {
            const { sticker: i, className: y, ...P } = this.props,
              A = I(x.TS.COMMUNITY_CDN_URL, i.name);
            return (0, t.jsxs)("div", {
              ref: this.m_ref,
              className: (0, r.A)(y, p().StickerButton),
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              ...P,
              children: [
                (0, t.jsx)("img", { style: { width: "100%" }, src: A }),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, t.jsx)(Te, { target: this.m_ref.current, sticker: i }),
              ],
            });
          }
        }
        const Te = (0, U.PA)((a) => {
          const {
              target: i,
              sticker: { name: y, appid: P },
            } = a,
            [A] = (0, w.t7)(P, {});
          return (0, t.jsx)(T.c, {
            target: i,
            title: y,
            subtitle: A?.GetName(),
            children: (0, t.jsx)("img", {
              src: I(x.TS.COMMUNITY_CDN_URL, y),
              className: p().StickerHoverSticker,
            }),
          });
        });
        class Ce extends o.Component {
          state = { showHover: !1 };
          m_ref = o.createRef();
          render() {
            const {
                effect: i,
                roomEffectSettings: y,
                className: P,
                ...A
              } = this.props,
              N = y[i.name];
            return (0, t.jsxs)("div", {
              ref: this.m_ref,
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              className: (0, r.A)(P, p().EffectButton),
              ...A,
              children: [
                N.renderEffectIcon(),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, t.jsx)(Fe, {
                    target: this.m_ref.current,
                    effect: i,
                    roomEffectSettings: y,
                  }),
              ],
            });
          }
        }
        const Fe = (0, U.PA)((a) => {
          const {
              target: i,
              effect: { name: y, appid: P },
              roomEffectSettings: A,
            } = a,
            N = A[y],
            [F] = (0, w.t7)(P, {});
          return (0, t.jsx)(T.c, {
            target: i,
            title: y,
            subtitle: F?.GetName(),
            children: (0, t.jsx)("div", {
              className: p().EffectHoverEffect,
              children: N.renderEffectIcon(),
            }),
          });
        });
        function Re() {
          return (0, t.jsx)("div", {
            className: p().NewEmoticonIndicator,
            children: (0, t.jsx)("div", { className: p().NewEmoticonCircle }),
          });
        }
        function Ge(a) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...a,
                children: [
                  jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M21 29H22.1875V31H19L21 29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 22.1875V21L31 19V22.1875H29Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 59 59",
                width: "32",
                ...a,
                children: jsx("switch", {
                  children: jsx("g", {
                    children: jsx("path", {
                      d: "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      fill: "#fff",
                    }),
                  }),
                }),
              });
        }
        function Ne(a) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...a,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M21 29H22.1875V31H19L21 29Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M29 22.1875V21L31 19V22.1875H29Z",
              }),
            ],
          });
        }
        function Ke(a) {
          return useInGamepadUI()
            ? jsx("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...a,
                children: jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z",
                  fill: "currentColor",
                }),
              })
            : jsx("svg", {
                viewBox: "0 -8 60 60",
                width: "32",
                ...a,
                children: jsx("path", {
                  d: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function Oe(a) {
          return (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...a,
            children: (0, t.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
            }),
          });
        }
        function He(a) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...a,
                children: [
                  jsx("path", {
                    d: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 60 38",
                width: "32",
                ...a,
                children: jsx("path", {
                  d: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function ze(a) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...a,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
              }),
            ],
          });
        }
        function We(a) {
          const { className: i, ...y } = a;
          return (0, t.jsx)("svg", {
            className: (0, r.A)("SVGIcon_Button SVGIcon_Clock", i),
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...y,
            children: (0, t.jsx)("path", {
              d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
            }),
          });
        }
      },
      96197: (z, W, n) => {
        "use strict";
        n.d(W, { n: () => M, c: () => l });
        var t = n(7850),
          v = n(90626),
          U = n(561),
          o = n(21227);
        function C(f) {
          const { text: g = "", style: h, children: E } = f;
          if (g == null) return (0, t.jsx)(v.Fragment, { children: E });
          let d;
          if (
            (g instanceof Array
              ? (d = g
                  .map((O) => (O ? O.toString() : ""))
                  .filter((O) => O.length > 0)
                  .join(`
`))
              : (d = g.toString()),
            v.Children.count(E) == 1)
          ) {
            let O = v.Children.only(E);
            return v.cloneElement(O, {
              "data-copystyle": h,
              "data-copytext": d,
            });
          } else
            return (
              console.log(`Error: CopyableText must be the parent of exactly one child:
	copystyle=${h} copytext=${d}`),
              (0, t.jsx)(v.Fragment, { children: E })
            );
        }
        function w(f) {
          let g = f.cloneContents(),
            h = "",
            E = "",
            d = !1,
            L = (
              g.querySelector("[data-activechat=true]") || g
            ).querySelectorAll("[data-copytext]"),
            k = Array.from(L).map(
              (p) => p.getAttribute("data-copystyle") || "msg",
            );
          for (let p = 0; p < L.length; ++p) {
            let S = L[p],
              T = k[p];
            if (p + 1 < L.length && DOMUtils.BIsParent(S, L[p + 1])) continue;
            let D = S.tagName.toLowerCase(),
              R = T.includes("block"),
              V = T.includes("timestamp"),
              H = T.includes("server"),
              Z = T.includes("invite"),
              $ = T.includes("emote"),
              he = T.includes("no-prefix"),
              ve = T.includes("no-suffix"),
              _e = T.includes("allow-embedded-newlines"),
              fe = T.includes("block-continue"),
              me = T.includes("merge-adjacent"),
              Se = T.includes("force-display"),
              Me = T.includes("prepend-innertext"),
              pe = T.includes("append-innertext"),
              ye = T.includes("prepend-newline"),
              Pe = T.includes("append-newline"),
              Ee = T.includes("speaker");
            if (!Se) {
              let Be = D.match(/img|iframe/) != null,
                Te = S.querySelector("img,iframe") != null;
              if (!S.innerText && !Be && !Te) continue;
            }
            me &&
              (p > 0 && k[p - 1].includes("merge-adjacent") && (he = !0),
              p + 1 < k.length &&
                k[p + 1].includes("merge-adjacent") &&
                (ve = !0)),
              Ee && (d = !0);
            let ge = "",
              be = `
`;
            !V && !Ee && !H && !Z && !$
              ? (d && (ge += "	"),
                E.includes("msg") && R && (ye = !0),
                E.includes("block") && !fe && (ye = !0))
              : (h.length != 0 &&
                  (ge += `
`),
                (H || Z) && (ge += "		"));
            let X = S.getAttribute("data-copytext") ?? "";
            X.length == 0
              ? (X = S.innerText)
              : Me && S.innerText.length > 0
                ? (X = `${S.innerText}${
                    T.includes("-with-newline")
                      ? `
`
                      : " "
                  }${X}`)
                : pe &&
                  S.innerText.length > 0 &&
                  (X += `${
                    T.includes("-with-newline")
                      ? `
`
                      : " "
                  }${S.innerText}`),
              X.length != 0 &&
                (ye &&
                  (h += `
`),
                he || (h += ge),
                (h += _e ? X : X.replace(/\n/g, be + ge)),
                ve || (h += be),
                Pe &&
                  (h += `
`)),
              (E = T);
          }
          if (h.length != 0) return h;
        }
        function s(f) {
          const g = w(f);
          g != null && DOMUtils.CopyTextToClipboard(g);
        }
        function r(f) {
          const g = document.createRange();
          g.selectNode(f), s(g);
        }
        var c = n(36707),
          I = n(42060),
          x = n.n(I),
          b = n(86048),
          B = n(88942),
          m = n(72609);
        function M(f) {
          const { emoticon: g, large: h } = f,
            [E, d] = (0, b.OP)(),
            [O, L] = v.useState(null),
            k = `:${g}:`,
            p = (0, o.G)(g, h);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(C, {
                text: k,
                style: "merge-adjacent",
                children: (0, t.jsx)("img", {
                  ...d,
                  src: p,
                  className: (0, c.A)(x().emoticon, h ? x().large : void 0),
                  "data-emoticon": g,
                  alt: g,
                  ref: L,
                }),
              }),
              E && O && (0, t.jsx)(_, { target: O, emoticon: g }),
            ],
          });
        }
        function _(f) {
          const { target: g, emoticon: h } = f,
            { data: E } = j(h);
          return (0, t.jsx)(l, {
            target: g,
            title: `:${h}:`,
            subtitle: E && E.app_name ? E.app_name : void 0,
            children: (0, t.jsx)(M, { emoticon: h, large: !0 }),
          });
        }
        function j(f) {
          return (0, B.I)({
            queryKey: ["EmoticonHover", f],
            queryFn: async () => {
              const g = `${m.TS.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(f)}?l=${encodeURIComponent(m.TS.LANGUAGE)}&origin=${self.origin}`,
                h = await fetch(g);
              if (h.status != 200)
                throw `Error fetching emoticon: ${h.status} ${h.statusText}`;
              return await h.json();
            },
          });
        }
        const l = ({ target: f, title: g, subtitle: h, children: E }) =>
          (0, t.jsxs)(U.g, {
            target: f,
            style: { zIndex: 1700 },
            className: x().EmoticonHover,
            children: [
              E,
              (0, t.jsxs)("div", {
                className: x().Info,
                children: [
                  (0, t.jsx)("div", {
                    className: x().Name,
                    children: g || (0, t.jsx)("span", { children: "\xA0" }),
                  }),
                  (0, t.jsx)("div", {
                    className: x().AppName,
                    children: h || (0, t.jsx)("span", { children: "\xA0" }),
                  }),
                ],
              }),
            ],
          });
      },
      75975: (z, W, n) => {
        "use strict";
        n.d(W, { nl: () => T, rf: () => S });
        var t = n(7850),
          v = n(36118),
          U = n(56718),
          o = n(3166);
        function C() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function w(D) {
          const R = D.filled ?? !0;
          return useInGamepadUI()
            ? R
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function s(D) {
          const R = D.filled ?? !0;
          return useInGamepadUI()
            ? R
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function r() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function c(D) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Checkmark, { ...D })
            : jsx(SVG.Check, { ...D });
        }
        function I() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function x() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function b(D) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function B() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function m() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function M(D) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function _(D) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: D.className });
        }
        function j(D) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: D.className });
        }
        function l(D) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: D.className })
            : jsx(SVG.CommentThread, { className: D.className });
        }
        function f() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function g() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function h() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function E() {
          return jsx(GamepadSVG.Globe, {});
        }
        function d() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function O() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function L() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function k() {
          return jsx(GamepadSVG.Add, {});
        }
        function p() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function S() {
          return (0, t.jsx)(v.rfv, {});
        }
        function T() {
          return (0, o.Qn)() ? (0, t.jsx)(U.nl, {}) : (0, t.jsx)(v.jZW, {});
        }
      },
      13465: (z, W, n) => {
        "use strict";
        n.d(W, { c: () => U });
        var t = n(7850),
          v = n(90626);
        function U(o) {
          const {
              rgSources: C,
              onIncrementalError: w,
              onError: s,
              strAltText: r,
              ref: c,
              ...I
            } = o,
            [x, b] = v.useState(0),
            B = v.useMemo(() => JSON.stringify(C), [C]),
            [m, M] = v.useState(B);
          m != B && (M(B), b(0));
          const _ = v.useMemo(() => {
              let f = "";
              return (
                C && C.length > x && (f = C[x]),
                f ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    o,
                    x,
                  ),
                  (f =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                f
              );
            }, [C, x, o]),
            j = v.useCallback(
              (f) => {
                w?.(f, C[x], x);
                const g = x + 1;
                g >= C.length && s && s(f), g < C.length && b(g);
              },
              [x, s, w, C],
            ),
            l = v.useRef(null);
          return (
            v.useImperativeHandle(
              c,
              () => ({ imgRef: l, nSourceIndex: x, nSourceLength: C.length }),
              [l, x, C],
            ),
            v.useEffect(() => {
              const f = l.current;
              f?.complete && f.naturalWidth == 0 && (f.src = f.src);
            }, []),
            (0, t.jsx)("img", { ref: l, ...I, src: _, onError: j, alt: r }, m)
          );
        }
      },
      32608: (z, W, n) => {
        "use strict";
        n.d(W, { N1: () => d, VC: () => f, fm: () => k, gZ: () => O });
        var t = n(7850),
          v = n(90626),
          U = n(41635),
          o = n(54963),
          C = n(36707),
          w = n(85599),
          s = n(1123),
          r = n(18210),
          c = n(37589),
          I = n(18938),
          x = n(2259),
          b = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          m = (p, S, T, D) => {
            for (
              var R = D > 1 ? void 0 : D ? B(S, T) : S, V = p.length - 1, H;
              V >= 0;
              V--
            )
              (H = p[V]) && (R = (D ? H(S, T, R) : H(R)) || R);
            return D && R && b(S, T, R), R;
          },
          M = ((p) => (
            (p[(p.NotLoaded = 0)] = "NotLoaded"),
            (p[(p.Loading = 1)] = "Loading"),
            (p[(p.Loaded = 2)] = "Loaded"),
            p
          ))(M || {});
        let _ = 0,
          j = [];
        function l(p) {
          if (_ == 2) {
            p && p();
            return;
          }
          if (_ == 0) {
            let S = document.createElement("script");
            S.src = "https://www.youtube.com/iframe_api";
            let T = document.getElementsByTagName("script")[0];
            T.parentNode?.insertBefore(S, T),
              (window.onYouTubeIframeAPIReady = h);
          }
          p && (j.includes(p) || j.push(p));
        }
        function f(p = !0) {
          const S = (0, s.Rp)("youtube");
          (0, v.useEffect)(() => {
            S && p && l();
          }, [S, p]);
        }
        function g(p) {
          U.x9(j, p);
        }
        function h() {
          _ = 2;
          for (let p of j) p();
          j = [];
        }
        const E = class ot extends v.Component {
          m_strPlayerID = "";
          m_player = null;
          m_playerContainer = null;
          m_bPlayerReady = !1;
          static s_nPlayerIndex = 0;
          constructor(S) {
            super(S),
              (this.m_strPlayerID = "YoutubePlayer_" + ot.s_nPlayerIndex++),
              (this.state = { bYoutubeLoaded: !1 });
          }
          componentWillUnmount() {
            this.DestroyPlayer(), g(this.OnYoutubeScriptsReady);
          }
          shouldComponentUpdate(S, T) {
            if (!this.m_player) return !1;
            const D = this.props;
            return D.autoplay != S.autoplay ||
              D.controls != S.controls ||
              D.showInfo != S.showInfo ||
              D.video != S.video
              ? (this.CreatePlayer(S), !1)
              : ((D.width != S.width || D.height != S.height) &&
                  this.m_bPlayerReady &&
                  S.width &&
                  S.height &&
                  this.m_player.setSize(S.width, S.height),
                D.forcePause != S.forcePause);
          }
          componentDidUpdate(S) {
            S.forcePause != this.props.forcePause && this.ApplyForcePause();
          }
          ApplyForcePause() {
            !this.m_player ||
              !this.m_bPlayerReady ||
              (this.props.forcePause
                ? typeof this.m_player.pauseVideo == "function" &&
                  this.m_player.pauseVideo()
                : typeof this.m_player.playVideo == "function" &&
                  this.m_player.playVideo());
          }
          DestroyPlayer() {
            if (this.m_player)
              try {
                this.m_player.stopVideo && this.m_player.stopVideo(),
                  this.m_player.destroy && this.m_player.destroy();
              } catch {
              } finally {
                this.m_player = null;
              }
          }
          BindPlayerContainer(S) {
            !S ||
              this.m_playerContainer == S ||
              ((this.m_playerContainer = S),
              this.DestroyPlayer(),
              l(this.OnYoutubeScriptsReady));
          }
          OnYoutubeScriptsReady() {
            this.CreatePlayer(this.props);
          }
          CreatePlayer(S) {
            if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
            const T = S.autoplay === !1 ? 0 : 1,
              D = S.showInfo === !0 ? 1 : 0,
              R = S.controls === !0 ? 1 : 0,
              V = S.showFullscreenBtn === !0 ? 1 : 0,
              H = S.playsInline === !0 ? 1 : 0;
            let Z = {
                width: S.width !== void 0 ? String(S.width) : void 0,
                height: S.height !== void 0 ? String(S.height) : void 0,
                videoId: S.video,
                host: "https://www.youtube-nocookie.com",
                playerVars: {
                  autoplay: T,
                  showinfo: D,
                  autohide: 1,
                  fs: V,
                  modestbranding: 1,
                  rel: 0,
                  playsinline: H,
                  iv_load_policy: 3,
                  controls: R,
                  start: S.startSeconds,
                },
                events: {
                  onReady: this.OnPlayerReady,
                  onStateChange: this.OnPlayerStateChange,
                  onError: this.OnError,
                },
              },
              $ = this.m_playerContainer.firstElementChild;
            (this.m_bPlayerReady = !1), (this.m_player = new YT.Player($, Z));
          }
          OnPlayerReady(S) {
            if (
              ((this.m_bPlayerReady = !0),
              this.props.onVideoInfoChanged && this.m_player)
            ) {
              let T = this.m_player.getVideoData(),
                D = { strAuthor: "", strTitle: "", strVideoID: "" };
              T.author && (D.strAuthor = T.author),
                T.title && (D.strTitle = T.title),
                T.video_id && (D.strVideoID = T.video_id),
                this.props.onVideoInfoChanged(D);
            }
            this.props.width &&
              this.props.height &&
              this.m_player?.setSize(this.props.width, this.props.height),
              this.props.forcePause
                ? this.ApplyForcePause()
                : this.props.autoplay && this.m_player?.playVideo(),
              this.props.onPlayerReady && this.props.onPlayerReady();
          }
          OnPlayerStateChange(S) {
            switch (S.data) {
              case YT.PlayerState.UNSTARTED:
                break;
              case YT.PlayerState.BUFFERING:
                this.props.onBuffering && this.props.onBuffering();
                break;
              case YT.PlayerState.PLAYING:
                this.props.onPlaying && this.props.onPlaying();
                break;
              case YT.PlayerState.PAUSED:
                this.props.onPaused && this.props.onPaused();
                break;
              case YT.PlayerState.ENDED:
                this.props.onMovieEnd && this.props.onMovieEnd();
                break;
            }
          }
          OnError(S) {
            console.log("Youtube: Playback failed", S),
              this.props.onError && this.props.onError(S);
          }
          OnPlayerLeftView() {
            this.props.autopause &&
              this.m_player &&
              this.m_bPlayerReady &&
              this.m_player.pauseVideo();
          }
          PlayVideo(S) {
            this.m_player &&
              this.m_bPlayerReady &&
              (S && this.m_player.seekTo(0, !0), this.m_player.playVideo());
          }
          render() {
            return (0, t.jsx)(O, {
              video: this.props.video,
              children: (0, t.jsx)(
                c.j,
                {
                  onLeave: this.props.autopause
                    ? this.OnPlayerLeftView
                    : void 0,
                  ref: this.BindPlayerContainer,
                  className: (0, C.A)("YoutubePlayer", this.props.classnames),
                  children: (0, t.jsx)(w.t, {
                    className: "YoutubePlayerThrobber",
                  }),
                },
                this.m_strPlayerID,
              ),
            });
          }
        };
        m([o.oI], E.prototype, "BindPlayerContainer", 1),
          m([o.oI], E.prototype, "OnYoutubeScriptsReady", 1),
          m([o.oI], E.prototype, "CreatePlayer", 1),
          m([o.oI], E.prototype, "OnPlayerReady", 1),
          m([o.oI], E.prototype, "OnPlayerStateChange", 1),
          m([o.oI], E.prototype, "OnError", 1),
          m([o.oI], E.prototype, "OnPlayerLeftView", 1),
          m([o.oI], E.prototype, "PlayVideo", 1);
        let d = E;
        function O(p) {
          const { video: S, children: T } = p;
          return (0, s.Rp)("youtube")
            ? T
            : (0, t.jsx)("a", {
                href: `https://www.youtube.com/watch?v=${S}`,
                children: (0, r.we)("#EventCalendar_WatchYouTubeVideo"),
              });
        }
        function L(p) {
          const S = new URLSearchParams({
            autoplay: p.autoplay ? "1" : "0",
            controls: p.controls ? "1" : "0",
            fs: p.showFullscreenBtn ? "1" : "0",
            playsinline: p.playsInline ? "1" : "0",
            rel: "0",
            iv_load_policy: "3",
            modestbranding: "1",
            enablejsapi: "1",
          });
          return (
            p.startSeconds && S.set("start", String(p.startSeconds)),
            `https://www.youtube-nocookie.com/embed/${encodeURIComponent(p.video)}?${S.toString()}`
          );
        }
        function k(p) {
          const { video: S, autopause: T, className: D } = p,
            R = v.useRef(null),
            V = v.useRef(null),
            H = v.useCallback(() => R.current?.pauseVideo(), []),
            Z = (0, x.OO)({ onLeave: T ? H : void 0 }),
            $ = (0, I.Ue)(V, Z);
          return (
            v.useEffect(() => {
              const he = () => {
                V.current && (R.current = new YT.Player(V.current, {}));
              };
              return (
                T && l(he),
                () => {
                  g(he), (R.current = null);
                }
              );
            }, [T]),
            (0, t.jsx)("iframe", {
              ref: $,
              className: D,
              src: L(p),
              title: S,
              allow: "autoplay; encrypted-media; picture-in-picture; web-share",
              allowFullScreen: !0,
              frameBorder: 0,
            })
          );
        }
      },
      19730: (z, W, n) => {
        "use strict";
        n.d(W, { Dq: () => C, dm: () => o });
        var t = n(84346),
          v = n(39905);
        function U(s, r) {
          const c = r.bUseBinary1K ? 1024 : 1e3,
            I = c * c,
            x = I * c,
            b = x * c;
          return s > b
            ? { nNum: s / b, strPrefix: "Tera" }
            : s > x
              ? { nNum: s / x, strPrefix: "Giga" }
              : s > I
                ? { nNum: s / I, strPrefix: "Mega" }
                : s > c
                  ? { nNum: s / c, strPrefix: "Kilo" }
                  : { nNum: s, strPrefix: "" };
        }
        function o(s, r, c, I) {
          let x = r;
          typeof x == "number"
            ? (x = {
                nDigitsAfterDecimal: r,
                bUseBinary1K: c || c === void 0,
                bValueIsInBytes: !I,
                bValueIsRate: I,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (x = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...x,
              });
          const { nNum: b, strPrefix: B } = U(s, x),
            m = `#${B}${x.bValueIsInBytes ? "bytes" : "bits"}${x.bValueIsRate ? "_PerSecond" : ""}`;
          return v.Z.Localize(
            m,
            b.toLocaleString((0, t.J)(), {
              minimumFractionDigits: x.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: x.nDigitsAfterDecimal,
            }),
          );
        }
        function C(s, r = 0) {
          let c;
          return (
            r && (c = { maximumFractionDigits: r }),
            s ? s.toLocaleString((0, t.J)(), c) : "" + s
          );
        }
        function w(s) {
          return s > 1e9
            ? Math.trunc(s / 1e9).toString() + "B"
            : s > 1e6
              ? Math.trunc(s / 1e6).toString() + "M"
              : s > 1e3
                ? Math.trunc(s / 1e3).toString() + "K"
                : s.toString();
        }
      },
      33645: (z) => {
        z.exports = {
          Bold: "_3cln317VYhwhE1fSeMCG48",
          Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
          Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
          TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
          Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
          Answer: "syKgzmlrcUIJHIBfWsn4h",
          Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
          Header2: "_6-VR2WCBCDupCcUN5INQM",
          Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
          Header4: "_3VHY5vmO07MFpoOgTB9eOi",
          Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
          CenterSpan: "zCnp-VELUMybbfxOD-ze9",
          SmallText: "WBzrd438Bd8Z3J-j_iglW",
          Underline: "GrhFWtBdrSZP611s1UqqT",
          Strike: "_3pK7sh9FYdigMXxcUVI4DY",
          Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
          Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
          SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
          DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
          BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
          QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
          PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
          Code: "_2ODaX8lO7DKLKke76c2Wya",
          CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
          List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
          OrderedList: "DojPxwyYpx3hwuPIaJPCq",
          ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
          HR: "-xPK0REpludHjRG8xQfih",
          Table: "_2CAsiFd9UHbUOqzd0e7ioe",
          NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
          TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
          TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
          EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
          ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
          ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
          EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
          ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
          ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
          LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
          Image: "_3K0NuxYUYncdQ-cNK7udMn",
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      11748: (z) => {
        z.exports = {
          DynamicLinkBox: "_3OFDUxRty2ooEGGBg8vLNM",
          DynamicLink_Preview: "_4x92ciMecfHsd6LXEp3zX",
          DynamicLink_Author: "_2CrHQnyBFUGqFf-6TbIsUA",
          DynamicLink_Description: "_1iv64lWG6UxhSX400UsU1S",
          DynamicLink_YouTubeEmbed: "_3Jd9PKMuBGuSbDBCsV03Oo",
          DynamicLink_StoreWidget: "uvn7ESAm1Jwm-SOwZmBWO",
          DynamicLink_Content: "_29vvBvtM17Ec_19L9VJZdk",
          DynamicLink_Name: "_25KAQjQwrv2EL8tnlLeTB7",
          DynamicLink_YoutubeViews: "_3ZgvwxMMqbe_8wVfRiQ9kq",
          Dynamiclink_Content: "_3UUlLNsS9oZt2zNHM5T76z",
          DynamicLink_URL: "_9135FDWNKXjIolFAo7Gub",
          DynamicLink_AuthorName: "_6R7Q24Jlkhs_t0fYUHxQx",
          DynamicLink_Date: "_15wEuEj-SyCZ4J4hJqtmgD",
        };
      },
      31587: (z) => {
        z.exports = {
          PreviewYouTubeVideo: "uT9FPw-RIxscziWGUKvsY",
          sizeThumb: "_34JfgvTZH0JwSWKnwpT5tf",
          sizeFull: "_2i-wrmaduZQDwFtlSpRG5b",
          PlaceholderImg: "wJ2r7A6UK2WbDVoNBgd36",
          floatLeft: "_3uqwDPu50ujydI4AiMemeN",
          floatRight: "_29hzTH-jljX8p2qXboZbXW",
        };
      },
      19418: (z) => {
        z.exports = {
          "duration-app-launch": "800ms",
          Picker: "tid_OE5NJWCCVJQP1PfRc",
          Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
          Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
          Focus: "_1xH5si_KorJpS4ST2Geksh",
          TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
          Active: "_1ddEQAfz6GuVRSEqk-d0r",
          Content: "dUQIH8Qg80N6kjB8UQO0P",
          ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
          Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
          SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
          SectionTitle: "_3WuFl419BivPeLqeVIC939",
          FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
          FilterInput: "_2l4z-U60lABvd9XWArGjAf",
          AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
        };
      },
      90024: (z) => {
        z.exports = {
          narrowWidth: "500px",
          chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
          chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
          chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
          chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
          minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
          chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
          EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
          EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
          disabled: "jaQN2IyN4P8LZXJ6P11qy",
          Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
          AudioLines: "IWabakUFeIH_d5rhBZ6dG",
          Active: "_37tPtXtV-sv9XgDHjS2cnj",
        };
      },
      42060: (z) => {
        z.exports = {
          NewEmoticonIndicator: "_5BtHMjT9usALaSWHGugdV",
          NewEmoticonCircle: "u5Kx6dkUppvb-1qV4IIuy",
          EmoticonSelector: "_21dGPKyxoQJmk8T757A5tl",
          emoticon: "_1ZQW1wV5cNj3sDpibfbUqs",
          large: "_20l1z3ShpHQ9njRDYgy1I5",
          EmoticonSelector_Emoticons: "_1zMG_TAAO7uJ9DZvsPLfay",
          EmoticonSelector_Separator: "_2ETbIGwtl6SLfkb48DDgvG",
          EmoticonSelector_SeparatorBackground: "_3vIdbqkcpvxxyyRioKoQkz",
          EmoticonSelector_Controls: "_2ncH4xow85UXkBM0hcrY8l",
          EmoticonSelector_Item: "iSEjD9v1iZNJNbGHtDLZx",
          EmoticonSelector_Item_New: "_1C2S6Gne45ErVlr3yX0YuG",
          EffectHeading: "_1G4cTIWNmmp8hn-0UODGqo",
          StickerHeading: "_2o2L-YGgH5cNuwJW9nU9dm",
          GetFestive: "EOLiaNBZK-eUBTeiD-P4c",
          TopDivider: "xf7hAWPD4WwXxsyXYxFFo",
          BottomDivider: "_1gjpUnY8RyS8HpizGQvyFI",
          StickerButton: "_2fYj8pHe3bHHxWj4FucFvj",
          EffectButton: "_22MJpsSm-Ur5FU5WpYQKzn",
          EmoticonHover: "W_hPU2JmhTx3oUqDN9ADo",
          Info: "_29D_0UxbftoceIAKZktndo",
          Name: "_3zUR2KWg7TNWOQx2nDFyoh",
          AppName: "_2JWWOJGZuX70xQcA2QaBg",
          StickerHoverSticker: "_1HdRqbOgpBfEQzQ2py5nq5",
          EffectHoverEffect: "_1GZ-ESK0dV6oJBDhsU3RiH",
          PickerTab: "VrrpBsQE4GFseDy3cTw1Q",
          Clock: "_16xcLj__xBHmc9xDYmADhW",
          EmoticonItem: "P1aWuK_DhstDh-M08okCK",
        };
      },
    },
  ]);
})();

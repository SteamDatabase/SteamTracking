/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [79118],
    {
      7487: (Q, z, n) => {
        "use strict";
        n.d(z, { K0: () => l, OJ: () => r, R8: () => R });
        var t = n(71742),
          I = n(90626),
          j = Object.defineProperty,
          a = (h, S, y) =>
            S in h
              ? j(h, S, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: y,
                })
              : (h[S] = y),
          O = (h, S, y) => a(h, typeof S != "symbol" ? S + "" : S, y);
        class R {
          constructor() {
            O(this, "reactNodes", []);
          }
          AppendText(S, y = !1) {
            S.length &&
              (y
                ? this.reactNodes.push(
                    I.createElement(
                      "span",
                      {
                        "data-copytext": "",
                        "data-copystyle": "merge-adjacent",
                        "bbcode-text": S,
                      },
                      S,
                    ),
                  )
                : this.reactNodes.push(S));
          }
          AppendNode(S) {
            this.reactNodes.push(S);
          }
          GetElements() {
            return this.reactNodes;
          }
        }
        class l {
          constructor(S) {
            O(this, "m_decoratedAccumulator"),
              (0, t.wT)(S, "decorated accumulator cannot be null"),
              (this.m_decoratedAccumulator = S);
          }
          AppendText(S, y = !1) {
            this.m_decoratedAccumulator.AppendText(S, y);
          }
          AppendNode(S) {
            this.m_decoratedAccumulator.AppendNode(S);
          }
          GetElements() {
            return this.m_decoratedAccumulator.GetElements();
          }
        }
        class r extends l {
          constructor(S) {
            super(S);
          }
          AppendText(S) {
            let y = S;
            const v = [];
            for (
              let d = y.indexOf(`
`);
              d !== -1;
              d = y.indexOf(`
`)
            )
              v.push(y.substr(0, d)),
                v.push(I.createElement("br")),
                (y = y.substr(d + 1));
            y.length && v.push(y),
              v.forEach((d) => {
                super.AppendNode(d);
              });
          }
        }
      },
      86722: (Q, z, n) => {
        "use strict";
        n.d(z, { Pm: () => y, d$: () => v, tB: () => S });
        var t = n(7850),
          I = n(24660),
          j = n(72609),
          a = n(43434),
          O = n(83482),
          R = n(71421),
          l = n(53113);
        function r(d) {
          var g;
          const w =
            (g = d == null ? void 0 : d.jsondata) == null
              ? void 0
              : g.read_more_link;
          if (!w) return;
          const G = (0, l.wm)(w).toLocaleLowerCase();
          return G ? [G] : void 0;
        }
        function h(d, g) {
          return (0, a.p)(d, r(g));
        }
        function S(d, g) {
          if (!d) return "";
          if (!(0, a.p)(d)) return (0, l.NT)(d);
          const w = h(d, g) ? (0, a.E)(d) : d;
          return (j.TS.IN_CLIENT ? "steam://openurl_external/" : "") + w;
        }
        function y(d, g, w) {
          const G = d.toLowerCase().startsWith("http") ? d : "http://" + d;
          return (0, t.jsx)(v, { url: G, event: g, children: w || d });
        }
        const v = (d) => {
          const { url: g, event: w, className: G, style: K } = d;
          let M = (0, O.OZ)(g);
          M = S(M, w);
          const T = (0, a.p)(M) ? "noopener nofollow" : void 0,
            C =
              typeof d.children == "string" &&
              d.children.length > 0 &&
              g &&
              !g.startsWith("steam://")
                ? (0, l.Qz)(g)
                : void 0;
          return (0, t.jsx)(R.Gq, {
            toolTipContent: C,
            direction: "top",
            children: (0, t.jsx)(I.Ii, {
              className: G,
              href: M,
              rel: T,
              id: d.id,
              style: K,
              children: d.children,
            }),
          });
        };
      },
      8145: (Q, z, n) => {
        "use strict";
        n.d(z, { op: () => v, CS: () => h, vE: () => d, Al: () => r });
        const t = 0,
          I = 1,
          j = 2,
          a = 3;
        var O = Object.defineProperty,
          R = (M, T, C) =>
            T in M
              ? O(M, T, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: C,
                })
              : (M[T] = C),
          l = (M, T, C) => R(M, typeof T != "symbol" ? T + "" : T, C);
        class r {
          constructor(T, C) {
            l(this, "m_fnAccumulatorFactory"),
              l(this, "m_dictComponents"),
              T instanceof Map
                ? (this.m_dictComponents = T)
                : (this.m_dictComponents = new Map(Object.entries(T))),
              (this.m_fnAccumulatorFactory = C);
          }
          Parse(T, C, i = !0) {
            const s = G(T || "", i);
            return this.Parse_BuildElements(s, C);
          }
          Parse_BuildElements(T, C) {
            let i = this.m_fnAccumulatorFactory(void 0);
            const s = [],
              o = () => (s.length < 1 ? void 0 : s[s.length - 1]),
              m = this.m_dictComponents,
              B = (c) => {
                var _;
                return !!(c.tag && (_ = m.get(c.tag)) != null && _.autocloses);
              };
            let A = !1,
              x = !0;
            const F = (c, _) => {
              let P = _.text.toLowerCase();
              if (c && c.node.tag === P && m.get(c.node.tag)) {
                const U = m.get(c.node.tag),
                  W = {
                    tagname: c.node.tag,
                    args: c.node.args,
                    rawargs: c.node.rawargs,
                  },
                  V = C(U.Constructor, W, ...i.GetElements());
                (i = c.accumulator),
                  Array.isArray(V)
                    ? V.forEach(($) => i.AppendNode($))
                    : i.AppendNode(V),
                  (A = !!U.skipFollowingNewline),
                  (x = c.bWrapTextForCopying);
              } else if (c) {
                const U = c.accumulator;
                U.AppendText("[" + c.node.text + "]", !1),
                  i.GetElements().forEach((W) => U.AppendNode(W)),
                  U.AppendText("[/" + _.text + "]", !1),
                  (i = U),
                  (x = c.bWrapTextForCopying);
              }
            };
            for (
              T.forEach((c, _) => {
                var P, U;
                if (c.type == I) {
                  const W = A ? c.text.replace(/^[\t\r ]*\n/g, "") : c.text;
                  i.AppendText(W, x), (A = !1);
                } else if (c.type == j) {
                  const W = m.get(c.tag);
                  if (!W) i.AppendText("[" + c.text + "]", s.length == 0);
                  else {
                    const V = o();
                    if (V !== void 0) {
                      const $ = m.get(V.node.tag);
                      $ &&
                        $.autocloses &&
                        c.tag === V.node.tag &&
                        F(s.pop(), V.node);
                    }
                    s.push({ accumulator: i, node: c, bWrapTextForCopying: x }),
                      (i = this.m_fnAccumulatorFactory(c)),
                      (A = !!W.skipInternalNewline),
                      (x = (P = W.allowWrapTextForCopying) != null ? P : !1);
                  }
                } else if (c.type == a) {
                  let W = c.text.toLowerCase();
                  for (; o() && o().node.tag !== W && B(o().node); ) {
                    const V = s.pop();
                    F(V, V.node);
                  }
                  if (((U = o()) == null ? void 0 : U.node.tag) == W) {
                    const V = s.pop();
                    F(V, c);
                  } else i.AppendText("[/" + c.text + "]", s.length == 0);
                }
              });
              s.length > 0;
            ) {
              const c = s.pop();
              F(c, c.node);
            }
            return i.GetElements();
          }
        }
        function h(M, T, C = !1) {
          let i = "[" + M;
          T != null && T[""] && (i += `=${C ? "" + T[""] : S("" + T[""])}`);
          for (const s in T) s !== "" && (i += ` ${y(s)}=${S("" + T[s])}`);
          return (i += "]"), i;
        }
        function S(M) {
          return `"${M.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function y(M) {
          return M.replace(/(\\| |\])/g, "\\$1");
        }
        function v(M) {
          return `[/${M}]`;
        }
        function d(M) {
          return M.replace(/(\\|\[)/g, "\\$1");
        }
        function g(M, T, C = t) {
          const { type: i, text: s = "" } = T;
          if (i == j) {
            let o = s.indexOf("=");
            const m = s.indexOf(" ");
            m != -1 && (o == -1 || m < o) && (o = m);
            let B,
              A,
              x = "";
            o > 0
              ? ((B = s.substr(0, o).toLocaleLowerCase()),
                (x = s.substr(o)),
                (A = K(x)))
              : ((A = {}), (B = s.toLocaleLowerCase())),
              M.push({ type: i, text: s, tag: B, args: A, rawargs: x });
          } else i != t && M.push({ type: i, text: s });
          return { type: C, text: "" };
        }
        function w(M) {
          var T;
          let C = "";
          return (
            M.type == a ? (C = "[/") : M.type == j && (C = "["),
            { type: I, text: C + ((T = M.text) != null ? T : "") }
          );
        }
        function G(M, T) {
          var C, i, s;
          const o = [];
          let m = { type: t, text: "" },
            B = !1,
            A = !1,
            x = !1;
          for (let F = 0; F < M.length; F++) {
            const c = M[F];
            switch (m.type) {
              case t:
                c == "["
                  ? ((m.type = j), (A = !0))
                  : ((m.type = I), c == "\\" && T ? (B = !B) : (m.text += c));
                break;
              case j:
              case a:
                if (c == "/" && A) (m.type = a), (m.text = ""), (A = !1);
                else if (c == "[" && !B) (m = g(o, w(m), j)), (A = !0);
                else if (c == "]" && !B) {
                  const _ =
                      m.type == j &&
                      ((C = m.text) == null ? void 0 : C.toLocaleLowerCase()) ==
                        "noparse",
                    P =
                      m.type == a &&
                      ((i = m.text) == null ? void 0 : i.toLocaleLowerCase()) ==
                        "noparse";
                  A || (x && !P)
                    ? ((m = w(m)), (m.text += c))
                    : _
                      ? (x = !0)
                      : P && (x = !1),
                    (m = g(o, m)),
                    (A = !1);
                } else
                  c == "\\" && T
                    ? ((m.text += c), (B = !B), (A = !1))
                    : ((m.text += c), (B = !1), (A = !1));
                break;
              case I:
                c == "[" && !B
                  ? ((m = g(o, m, j)), (A = !0))
                  : c == "\\" && T
                    ? (B && (m.text += c), (B = !B))
                    : ((m.text += c), (B = !1));
                break;
            }
          }
          return (
            m.type != t &&
              (m.type == j || m.type == a
                ? o.push(w(m))
                : o.push({
                    type: m.type,
                    text: (s = m.text) != null ? s : "",
                  })),
            o
          );
        }
        function K(M) {
          if (!M || M.length < 1) return {};
          const T = {};
          let C = "",
            i = "",
            s;
          ((A) => {
            (A[(A.PRE_NAME = 0)] = "PRE_NAME"),
              (A[(A.IN_NAME = 1)] = "IN_NAME"),
              (A[(A.POST_NAME = 2)] = "POST_NAME"),
              (A[(A.IN_VALUE = 3)] = "IN_VALUE"),
              (A[(A.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(s || (s = {}));
          let o = 0,
            m = 0;
          M[0] == "=" && (o = 2);
          let B = !1;
          for (m++; m < M.length; m++) {
            const A = M[m];
            let x = !0,
              F = !1;
            switch (o) {
              case 0:
                if (A == "=") return {};
                if (A == " ") continue;
                o = 1;
                break;
              case 1:
                (A == "=" || A == " ") &&
                  !B &&
                  (A == " " ? ((o = 0), (F = !0)) : (o = 2), (x = !1));
                break;
              case 2:
                A == " "
                  ? ((o = 0), (x = !1), (F = !0))
                  : A == '"'
                    ? ((o = 4), (x = !1))
                    : (o = 3);
                break;
              case 3:
              case 4:
                ((A == " " && o != 4 && !B) || (A == '"' && o == 4 && !B)) &&
                  ((o = 0), (x = !1), (F = !0));
                break;
            }
            if (x)
              if (A == "\\" && !B) B = !0;
              else if (((B = !1), o == 1)) C += A;
              else if (o == 3 || o == 4) i += A;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + o,
                );
            F && ((T[C] = i), (C = ""), (i = ""));
          }
          return o != 0 && (T[C] = i), T;
        }
      },
      96232: (Q, z, n) => {
        "use strict";
        n.d(z, { B: () => r });
        var t = n(99412),
          I = n(90626),
          j = n(7487),
          a = n(8145),
          O = Object.defineProperty,
          R = (h, S, y) =>
            S in h
              ? O(h, S, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: y,
                })
              : (h[S] = y),
          l = (h, S, y) => R(h, typeof S != "symbol" ? S + "" : S, y);
        class r extends a.Al {
          constructor(S, y, v) {
            super(S, y != null ? y : () => new j.R8()),
              l(this, "m_renderingLanguage"),
              (this.m_renderingLanguage =
                typeof v == "string" ? (0, t.sfN)(v) : v);
          }
          UpdateOverrideLanguage(S) {
            this.m_renderingLanguage = S;
          }
          ParseBBCode(S, y, v = !0) {
            let d = 0;
            const g = this.Parse(
              S,
              (w, G, ...K) =>
                I.createElement(
                  w,
                  {
                    ...G,
                    context: y,
                    language: this.m_renderingLanguage,
                    key: `bbnode_${d++}`,
                  },
                  ...K,
                ),
              v,
            );
            return g.length > 1
              ? I.createElement(I.Fragment, null, ...g)
              : g.length == 1
                ? g[0]
                : null;
          }
        }
      },
      29950: (Q, z, n) => {
        "use strict";
        n.d(z, { J: () => t });
        function t(I) {
          if (!I) return I;
          const j = I.trim(),
            a = j
              .replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return a.startsWith("javascript:") ||
            a.startsWith("data:") ||
            a.startsWith("vbscript:")
            ? ""
            : j;
        }
      },
      72080: (Q, z, n) => {
        "use strict";
        n.d(z, {
          AT: () => S,
          J7: () => R,
          KN: () => O,
          MG: () => y,
          Yd: () => v,
          bv: () => l,
          gg: () => a,
          mZ: () => h,
          s4: () => d,
          zN: () => r,
        });
        var t = n(7850),
          I = n(11748),
          j = n.n(I);
        const a = {
          Box: I.DynamicLinkBox,
          Preview: I.DynamicLink_Preview,
          Type: I.DynamicLink_Type,
        };
        function O(g) {
          var w;
          return (0, t.jsx)("img", {
            className: I.DynamicLink_Preview,
            src: g.strURL || void 0,
            alt: (w = g.strAlt) != null ? w : "",
          });
        }
        function R(g) {
          return (0, t.jsx)("div", {
            className: I.DynamicLink_Content,
            children: g.children,
          });
        }
        function l(g) {
          return (0, t.jsx)("div", {
            className: I.DynamicLink_Name,
            children: g.children,
          });
        }
        function r(g) {
          return (0, t.jsx)("div", {
            className: I.DynamicLink_Author,
            children: g.children,
          });
        }
        function h(g) {
          return (0, t.jsx)("span", {
            className: I.DynamicLink_AuthorName,
            children: g.children,
          });
        }
        function S(g) {
          return (0, t.jsx)("div", {
            className: I.DynamicLink_Description,
            children: g.children,
          });
        }
        function y(g) {
          return (0, t.jsx)("span", {
            className: I.DynamicLink_Date,
            children: g.children,
          });
        }
        function v(g) {
          return (0, t.jsx)("div", {
            className: I.DynamicLink_YoutubeViews,
            children: g.children,
          });
        }
        function d(g) {
          return (0, t.jsx)("div", {
            className: I.Dynamiclink_Content,
            children: g.children,
          });
        }
      },
      374: (Q, z, n) => {
        "use strict";
        n.d(z, { oK: () => y, F8: () => r });
        function t(v) {
          return v
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&");
        }
        var I = n(72609),
          j = n(88942);
        const a = "events/ajaxgetdynamiceventmetadata";
        async function O(v) {
          const d =
              I.TS.STORE_BASE_URL + a + "?" + new URLSearchParams(v).toString(),
            g = await fetch(d, { credentials: "include" });
          if (!g.ok) throw new Error(`${d} answered ${g.status}`);
          return await g.json();
        }
        function R(v) {
          return ["DynamicEventMetadata", "youtube", v];
        }
        function l(v, d = !0) {
          return {
            queryKey: R(v),
            queryFn: async () => {
              var g, w, G;
              const K = await O({ youtubevideoids: v }),
                M =
                  (G =
                    (g = K.youtube) == null
                      ? void 0
                      : g.find((T) => T.videoid == v)) != null
                    ? G
                    : (w = K.youtube) == null
                      ? void 0
                      : w[0];
              if (!M) throw new Error(`no metadata for youtube video ${v}`);
              return { ...M, title: t(M.title), description: t(M.description) };
            },
            enabled: d && !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function r(v, d = !0) {
          return (0, j.I)(l(v, d));
        }
        function h(v) {
          return ["DynamicEventMetadata", "sharedfile", v];
        }
        function S(v) {
          return {
            queryKey: h(v),
            queryFn: async () => {
              var d, g, w;
              const G = await O({ sharedfileids: v }),
                K =
                  (w =
                    (d = G.sharedfiles) == null
                      ? void 0
                      : d.find((M) => M.sharedfileid == v)) != null
                    ? w
                    : (g = G.sharedfiles) == null
                      ? void 0
                      : g[0];
              if (!K) throw new Error(`no metadata for shared file ${v}`);
              return {
                ...K,
                title: t(K.title),
                description: t(K.description),
                type: t(K.type),
              };
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function y(v) {
          return (0, j.I)(S(v));
        }
      },
      43597: (Q, z, n) => {
        "use strict";
        n.d(z, { AX: () => M, V2: () => G, j6: () => T });
        var t = n(7850),
          I = n(72080),
          j = n(86722),
          a = n(32093),
          O = n(72609),
          R = n(90626),
          l = n(43458),
          r = n(85599),
          h = n(32608),
          S = n(36707),
          y = n(18210),
          v = n(19730),
          d = n(374),
          g = n(31587),
          w = n.n(g),
          G = ((C) => (
            (C.left = "leftthumb"),
            (C.right = "rightthumb"),
            (C.full = "full"),
            (C.summary = "summary"),
            C
          ))(G || {});
        function K(C) {
          return C == "full"
            ? w().sizeFull
            : (0, S.A)(
                w().sizeThumb,
                C == "leftthumb" ? w().floatLeft : w().floatRight,
              );
        }
        function M(C) {
          var i, s, o;
          const {
              videoID: m,
              bShowVideoImmediately: B,
              bAutoPlay: A,
              nStartSeconds: x,
              align: F = "full",
            } = C,
            [c, _] = (0, R.useState)(!B),
            { data: P, isSuccess: U } = (0, d.F8)(m, c);
          if (c) {
            const W =
                (i = P == null ? void 0 : P.title) != null
                  ? i
                  : (0, y.we)("#Loading"),
              V = (s = P == null ? void 0 : P.views) != null ? s : "0",
              $ = (o = P == null ? void 0 : P.description) != null ? o : "",
              J = () => _(!1),
              se = (q) => {
                (q.key == "Enter" || q.key == " ") && (q.preventDefault(), J());
              };
            return (0, t.jsxs)("div", {
              className: I.gg.Box,
              role: "button",
              tabIndex: 0,
              onClick: J,
              onKeyDown: se,
              children: [
                (0, t.jsx)(I.KN, {
                  strURL: "https://img.youtube.com/vi/" + m + "/0.jpg",
                }),
                (0, t.jsxs)(I.J7, {
                  children: [
                    (0, t.jsx)(I.bv, {
                      children: (0, y.we)("#EventEditor_YouTubeVideoTitle", W),
                    }),
                    (0, t.jsx)(I.Yd, {
                      children: (0, y.we)(
                        "#EventEditor_YouTubeVideoViews",
                        (0, v.Dq)(Number(V)),
                      ),
                    }),
                    (0, t.jsxs)(I.s4, {
                      children: [
                        U && $,
                        !U && (0, t.jsx)(r.t, { size: "medium" }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          } else
            return (0, t.jsx)(h.gZ, {
              video: m,
              children: (0, t.jsxs)("div", {
                className: (0, S.A)(w().PreviewYouTubeVideo, K(F)),
                id: m,
                children: [
                  (0, t.jsx)("img", {
                    className: w().PlaceholderImg,
                    alt: "",
                    src:
                      O.TS.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                  }),
                  (0, t.jsx)(h.fm, {
                    video: m,
                    autoplay: A != null ? A : !1,
                    startSeconds: x,
                    controls: !0,
                    playsInline: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                  }),
                ],
              }),
            });
        }
        function T(C, i) {
          if (O.TS.EREALM === a.TU.k_ESteamRealmChina) return null;
          const s = (0, l.XU)(C);
          return (s == null ? void 0 : s.strVideoID) !== void 0
            ? (0, t.jsx)(M, {
                videoID: s.strVideoID,
                nStartSeconds: s.nStartSeconds,
                bShowVideoImmediately: !1,
              })
            : (0, j.Pm)(C, i == null ? void 0 : i.event);
        }
      },
      80876: (Q, z, n) => {
        "use strict";
        n.d(z, {
          fp: () => Rt,
          $P: () => xt,
          Du: () => O,
          nS: () => Pt,
          oT: () => j,
          f$: () => a,
          LH: () => t,
          Fw: () => $t,
          w3: () => I,
          uy: () => gt,
        });
        var t = {};
        n.r(t), n.d(t, { Xk: () => S, ko: () => Xe });
        var I = {};
        n.r(I), n.d(I, { QI: () => qe });
        var j = {};
        n.r(j),
          n.d(j, {
            XR: () => Me,
            x7: () => rt,
            Bc: () => Ft,
            xJ: () => Ot,
            QB: () => kt,
            Bk: () => Ut,
            Ou: () => Wt,
            r: () => nt,
            PQ: () => Gt,
            W: () => Lt,
            LK: () => Vt,
            zE: () => jt,
            mj: () => Dt,
            hK: () => Nt,
          });
        var a = {};
        n.r(a), n.d(a, { rg: () => zt, kE: () => Kt });
        var O = {};
        n.r(O), n.d(O, { hu: () => Ht, yt: () => Yt });
        var R = n(80613),
          l = n.n(R),
          r = n(75245),
          h = n(35038);
        const S = 0,
          y = 1,
          v = 2,
          d = 3,
          g = 4,
          w = 5,
          G = 6,
          K = 7,
          M = 8,
          T = 9,
          C = 10,
          i = 11,
          s = 12,
          o = 13,
          m = 14,
          B = 15,
          A = 16,
          x = 17,
          F = 18,
          c = 19,
          _ = 20,
          P = 21,
          U = 22,
          W = 23,
          V = 24,
          $ = 25,
          J = 26,
          se = 27,
          q = 28,
          Be = 29,
          Re = 30,
          be = 31,
          Pe = 32,
          ae = 33,
          re = 34,
          Ie = 35,
          ne = 36,
          we = 37,
          Te = 38,
          ye = 39,
          ve = 40,
          ie = 41,
          Le = 42,
          ke = 43,
          He = 44,
          Ye = 45,
          Ve = 46,
          Qe = 47,
          Fe = 48,
          Ze = 49,
          Ne = 50,
          $e = 51,
          p = 52,
          D = 53,
          E = 54,
          u = 55,
          b = 56,
          L = 57,
          N = 58,
          k = 59,
          H = 60,
          ee = 61,
          te = 62,
          Ct = 63,
          Ue = 64,
          St = 65,
          yt = 66,
          vt = 67,
          It = 68,
          Mt = 69,
          Je = 70,
          Ge = 71,
          Xe = 72,
          Bt = 0,
          qe = 1,
          bt = 2,
          wt = 3,
          et = 4,
          We = 5,
          ze = 6,
          tt = 0,
          Me = 1,
          rt = 2,
          nt = 3,
          Dt = 4,
          Lt = 5,
          jt = 6,
          Ot = 7,
          Nt = 8,
          Ut = 9,
          Gt = 10,
          kt = 11,
          Vt = 12,
          Wt = 13,
          Ft = 14,
          ur = 0,
          zt = 1,
          Kt = 2,
          Ht = 1,
          dr = 2,
          Yt = 3,
          mr = 4;
        var Qt = Object.defineProperty,
          Zt = (Y, e, f) =>
            e in Y
              ? Qt(Y, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: f,
                })
              : (Y[e] = f),
          X = (Y, e, f) => Zt(Y, typeof e != "symbol" ? e + "" : e, f);
        function $t(Y) {
          return "unknown EVirtualItemRewardEvent ( " + Y + " )";
        }
        function fr(Y) {
          return "unknown EVirtualItemRewardRarity ( " + Y + " )";
        }
        function _r(Y) {
          return "unknown EGameCardDropMethod ( " + Y + " )";
        }
        function hr(Y) {
          return "unknown ECommunityItemSalienType ( " + Y + " )";
        }
        function pr(Y) {
          return "unknown ECommunityItemDropRate ( " + Y + " )";
        }
        function Er(Y) {
          return "unknown ECommunityItemAttribute ( " + Y + " )";
        }
        function gr(Y) {
          return "unknown ECommunityItemApprovalState ( " + Y + " )";
        }
        function Cr(Y) {
          return "unknown ETradabilityPreference ( " + Y + " )";
        }
        function Sr(Y) {
          return "unknown ESummerSale2017TaskType ( " + Y + " )";
        }
        function yr(Y) {
          return "unknown EWinterSale2015ARGBadge ( " + Y + " )";
        }
        function vr(Y) {
          return "unknown ESummerSale2021Genre ( " + Y + " )";
        }
        function Ir(Y) {
          return "unknown ESummerSale2021StoryChoice ( " + Y + " )";
        }
        const it = class oe extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.communityitemid || r.Sg(oe.M()),
              R.Message.initialize(this, e, 0, -1, [5], null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
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
                    attributes: { n: 5, c: Xt, r: !0, q: !0 },
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
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = r.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(oe.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new oe();
            return oe.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(oe.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(oe.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem";
          }
        };
        X(it, "sm_m"), X(it, "sm_mbf");
        let Jt = it;
        const st = class le extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.attributeid || r.Sg(le.M()),
              R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
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
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = r.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(le.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new le();
            return le.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(le.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(le.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem_Attribute";
          }
        };
        X(st, "sm_m"), X(st, "sm_mbf");
        let Xt = st;
        const at = class ce extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.filter_appids || r.Sg(ce.M()),
              R.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
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
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = r.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(ce.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new ce();
            return ce.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(ce.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(ce.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Request";
          }
        };
        X(at, "sm_m"), X(at, "sm_mbf");
        let qt = at;
        const ot = class ue extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.items || r.Sg(ue.M()),
              R.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: { items: { n: 1, c: Jt, r: !0, q: !0 } },
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
          static toObject(e, f) {
            return r.BT(ue.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new ue();
            return ue.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(ue.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(ue.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Response";
          }
        };
        X(ot, "sm_m"), X(ot, "sm_mbf");
        let er = ot;
        const lt = class de extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.appid || r.Sg(de.M()),
              R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
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
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = r.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(de.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new de();
            return de.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(de.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(de.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Request";
          }
        };
        X(lt, "sm_m"), X(lt, "sm_mbf");
        let tr = lt;
        const ct = class me extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.item_definitions || r.Sg(me.M()),
              R.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: { item_definitions: { n: 1, c: nr, r: !0, q: !0 } },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = r.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(me.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new me();
            return me.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(me.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(me.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response";
          }
        };
        X(ct, "sm_m"), X(ct, "sm_mbf");
        let rr = ct;
        const ut = class fe extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.item_type || r.Sg(fe.M()),
              R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
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
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = r.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(fe.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new fe();
            return fe.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(fe.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(fe.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
          }
        };
        X(ut, "sm_m"), X(ut, "sm_mbf");
        let nr = ut;
        const dt = class _e extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.appid || r.Sg(_e.M()),
              R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
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
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = r.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(_e.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new _e();
            return _e.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(_e.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(_e.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Request";
          }
        };
        X(dt, "sm_m"), X(dt, "sm_mbf");
        let Rt = dt;
        class je extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, f) {
            return e ? { $jspbMessageInstance: f } : {};
          }
          static fromObject(e) {
            return new je();
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new je();
            return je.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Response";
          }
        }
        const mt = class he extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.timestamp_start || r.Sg(he.M()),
              R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
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
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = r.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(he.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new he();
            return he.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(he.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(he.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Request";
          }
        };
        X(mt, "sm_m"), X(mt, "sm_mbf");
        let ir = mt;
        const ft = class pe extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.num_trading_cards || r.Sg(pe.M()),
              R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    num_trading_cards: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = r.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(pe.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new pe();
            return pe.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(pe.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(pe.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Response";
          }
        };
        X(ft, "sm_m"), X(ft, "sm_mbf");
        let sr = ft;
        const _t = class Ee extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.eventid || r.Sg(Ee.M()),
              R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    eventid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    include_inactive: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = r.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(Ee.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new Ee();
            return Ee.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(Ee.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(Ee.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Request";
          }
        };
        X(_t, "sm_m"), X(_t, "sm_mbf");
        let Pt = _t;
        const ht = class ge extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.eventid || r.Sg(ge.M()),
              R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
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
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = r.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(ge.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new ge();
            return ge.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(ge.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(ge.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVirtualItemRewardDefinition";
          }
        };
        X(ht, "sm_m"), X(ht, "sm_mbf");
        let Tt = ht;
        const pt = class Ce extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.rewards || r.Sg(Ce.M()),
              R.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: { rewards: { n: 1, c: Tt, r: !0, q: !0 } },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = r.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(Ce.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new Ce();
            return Ce.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(Ce.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(Ce.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Response";
          }
        };
        X(pt, "sm_m"), X(pt, "sm_mbf");
        let ar = pt;
        const Et = class Se extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.eventid || r.Sg(Se.M()),
              R.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    eventid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    itemsdefs: { n: 2, c: Tt, r: !0, q: !0 },
                    action: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = r.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, f) {
            return r.BT(Se.M(), e, f);
          }
          static fromObject(e) {
            return r.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new Se();
            return Se.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return r.zj(Se.MBF(), e, f);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {
            r.i0(Se.M(), e, f);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Request";
          }
        };
        X(Et, "sm_m"), X(Et, "sm_mbf");
        let xt = Et;
        function Mr(Y) {
          return (
            "unknown CQuest_SetVirtualItemRewardDefinition_Request_EActionType ( " +
            Y +
            " )"
          );
        }
        class Oe extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), R.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, f) {
            return e ? { $jspbMessageInstance: f } : {};
          }
          static fromObject(e) {
            return new Oe();
          }
          static deserializeBinary(e) {
            let f = new (l().BinaryReader)(e),
              Z = new Oe();
            return Oe.deserializeBinaryFromReader(Z, f);
          }
          static deserializeBinaryFromReader(e, f) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, f) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Response";
          }
        }
        var gt;
        ((Y) => {
          function e(xe, Ae, De) {
            return xe.SendMsg(
              "Quest.GetCommunityInventory#1",
              (0, h.I8)(qt, Ae, De),
              er,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Y.GetCommunityInventory = e;
          function f(xe, Ae, De) {
            return xe.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, h.I8)(tr, Ae, De),
              rr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 4 },
            );
          }
          Y.GetCommunityItemDefinitions = f;
          function Z(xe, Ae, De) {
            return xe.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, h.I8)(Rt, Ae, De),
              je,
              { ePrivilege: 1 },
            );
          }
          Y.ActivateProfileModifierItem = Z;
          function or(xe, Ae, De) {
            return xe.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, h.I8)(ir, Ae, De),
              sr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Y.GetNumTradingCardsEarned = or;
          function lr(xe, Ae, De) {
            return xe.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, h.I8)(Pt, Ae, De),
              ar,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          Y.GetVirtualItemRewardDefinition = lr;
          function cr(xe, Ae, De) {
            return xe.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, h.I8)(xt, Ae, De),
              Oe,
              { ePrivilege: 4 },
            );
          }
          Y.SetVirtualItemRewardDefinition = cr;
        })(gt || (gt = {}));
      },
      37589: (Q, z, n) => {
        "use strict";
        n.d(z, { Y: () => O, j: () => R });
        var t = n(7850),
          I = n(90626),
          j = n(2259),
          a = n(18938);
        function O(l) {
          const r = (0, j.OO)(l, l.options);
          return (0, t.jsx)("span", { ref: r, style: { fontSize: 0 } });
        }
        const R = I.forwardRef(function (r, h) {
          const { onLeave: S, onEnter: y, options: v, ...d } = r,
            g = (0, j.OO)(r, r.options),
            w = (0, a.Ue)(g, h);
          return (0, t.jsx)("div", { ref: w, ...d });
        });
      },
      1123: (Q, z, n) => {
        "use strict";
        n.d(z, { Ey: () => K, Rp: () => G });
        var t = n(32093);
        const j = JSON.parse(
          `{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}`,
        ).h;
        var a = n(79024),
          O = n(90900),
          R = n(52438);
        function l(M, T) {
          var C, i, s;
          switch (M.preference_state) {
            case a.CY.__:
            case a.CY.PK:
              return !0;
            case a.CY.rE:
              return !1;
            case a.CY.UI:
            default:
              switch (T) {
                case "youtube":
                  return (C = M.third_party_content) == null
                    ? void 0
                    : C.youtube;
                case "vimeo":
                  return (i = M.third_party_content) == null ? void 0 : i.vimeo;
                case "sketchfab":
                  return (s = M.third_party_content) == null
                    ? void 0
                    : s.sketchfab;
                case "generic":
                  return !1;
              }
          }
        }
        function r(M) {
          switch (M.preference_state) {
            case a.CY.__:
            case a.CY.PK:
              return !1;
            default:
              return !0;
          }
        }
        function h(M, T, C, i) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => S(M, T, C, i),
          };
        }
        async function S(M, T, C, i) {
          if ((0, t.nA)(i))
            return { version: a.ie.mO, preference_state: a.CY.__ };
          if (T) {
            const o = (await a.T4.GetCookiePreferences(M, {}))
              .Body()
              .toObject().preferences;
            if (o && o.version !== void 0 && o.version != a.ie.CL) return o;
          }
          try {
            const s = (0, R.j_)(O.J_);
            if (s) {
              const o = JSON.parse(s);
              if (o && o.version !== void 0 && o.version != a.ie.CL) return o;
            }
          } catch {}
          return C in j.eucountries || C in j.eeacountries || C === "CH"
            ? { version: a.ie.mO, preference_state: a.CY._H }
            : { version: a.ie.mO, preference_state: a.CY.__ };
        }
        var y = n(88942),
          v = n(68312),
          d = n(72609);
        function g(M) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => S(M, d.iA.logged_in, d.TS.COUNTRY, d.TS.EREALM),
          };
        }
        function w() {
          const M = (0, v.KV)();
          return (0, y.I)(g(M));
        }
        function G(M) {
          const { data: T } = w();
          return T ? l(T, M) : void 0;
        }
        function K() {
          const { data: M } = w();
          return M ? !r(M) : void 0;
        }
      },
      72243: (Q, z, n) => {
        "use strict";
        n.d(z, { L: () => g });
        var t = n(7850),
          I = n(90626),
          j = n(99412),
          a = n(32093),
          O = n(18210),
          R = n(53113),
          l = n(72609),
          r = Object.defineProperty,
          h = (C, i, s) =>
            i in C
              ? r(C, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (C[i] = s),
          S = (C, i, s) => h(C, typeof i != "symbol" ? i + "" : i, s);
        function y(C) {
          return !(
            (!(0, R._1)(C.sPoster) && !(0, R.ZF)(C.sPoster)) ||
            (C.rgVideoSources &&
              C.rgVideoSources.some((i) => !(0, R.ZF)(i.sURL))) ||
            (C.rgVideoTracks && C.rgVideoTracks.some((i) => !(0, R.ZF)(i.sURL)))
          );
        }
        const v = class Ke {
          constructor() {
            S(this, "m_bUserHasVolumePreference", !1),
              S(this, "m_flVolumePreference", 0);
          }
          BUserHasVolumePreference() {
            return this.m_bUserHasVolumePreference;
          }
          SetVolumePreference(i) {
            (this.m_flVolumePreference = i),
              (this.m_bUserHasVolumePreference = !0);
          }
          GetVolumePreference() {
            return this.m_flVolumePreference;
          }
          BVolumePreferenceMuted() {
            return this.m_flVolumePreference < 0.001;
          }
          static Get() {
            return (
              Ke.s_Singleton || (Ke.s_Singleton = new Ke()), Ke.s_Singleton
            );
          }
        };
        S(v, "s_Singleton");
        let d = v;
        const g = (0, I.forwardRef)(function (i, s) {
          const {
              video: o,
              bAutoPlay: m,
              bControls: B,
              bLoop: A,
              bMuted: x,
              className: F,
              mediaScale: c,
              flAspectRatio: _,
              onClick: P,
              altText: U,
            } = i,
            W = (0, I.useMemo)(() => {
              var ae;
              return !!(
                (ae = o.rgVideoTracks) != null &&
                ae.some(
                  (re) => re.sKind == "subtitles" || re.sKind == "captions",
                )
              );
            }, [o.rgVideoTracks]),
            [V, $] = I.useState(!1),
            J = w();
          if (!o.rgVideoSources || !o.rgVideoSources.length) return null;
          const se = y(o);
          let q;
          (!se || (W && l.TS.EUNIVERSE == j.wLO)) && (q = "anonymous");
          const Be = x || (m && d.Get().BVolumePreferenceMuted()),
            Re = o.sPoster ? G(o.sPoster, J) : "",
            be = (ae) => {
              const re = ae.target,
                Ie = re.muted ? 0 : re.volume;
              V && d.Get().SetVolumePreference(Ie);
            },
            Pe = (ae) => {
              const re = ae.target,
                Ie = re.currentTime == 0,
                ne = d.Get().BUserHasVolumePreference();
              if (($(!0), !!Ie))
                if (!ne && !m) {
                  const we = re.muted ? 0 : re.volume;
                  d.Get().SetVolumePreference(we);
                } else
                  ne &&
                    ((re.volume = d.Get().GetVolumePreference()),
                    (re.muted = d.Get().BVolumePreferenceMuted()));
            };
          return (0, t.jsxs)("video", {
            width: "100%",
            height: "auto",
            autoPlay: m,
            muted: Be,
            playsInline: !0,
            controls: B,
            poster: Re,
            loop: A,
            crossOrigin: q,
            onVolumeChange: be,
            onPlay: Pe,
            ref: s,
            className: F,
            onClick: P,
            "aria-label": U,
            style: {
              width: c && c >= 1 && c < 100 ? `${c}%` : void 0,
              aspectRatio: _ || void 0,
            },
            children: [
              (0, t.jsx)(K, {
                rgVideoSources: o.rgVideoSources,
                strCacheBreakOrigin: J,
              }),
              (0, t.jsx)(M, {
                rgVideoTracks: o.rgVideoTracks,
                strCacheBreakOrigin: J,
              }),
            ],
          });
        });
        function w() {
          const C = window.location.href,
            s = [
              l.TS.STORE_BASE_URL,
              l.TS.COMMUNITY_BASE_URL,
              l.TS.PARTNER_BASE_URL,
              l.TS.HELP_BASE_URL,
              l.TS.STATS_BASE_URL,
              l.TS.STORE_CHECKOUT_BASE_URL,
            ].find((o) => o && C.startsWith(o));
          if (s) return s;
          try {
            return new URL(C).origin + "/";
          } catch {
            return "unknown";
          }
        }
        function G(C, i) {
          if (C) {
            if ((0, R._1)(C)) return C;
            try {
              const s = new URL(C);
              return (
                (s.search = (s.search ? s.search + "&" : "?") + "origin=" + i),
                s.toString()
              );
            } catch {
              return C;
            }
          }
        }
        function K(C) {
          const { rgVideoSources: i, strCacheBreakOrigin: s } = C;
          return i
            .filter((o) => !!o.sURL)
            .map((o) =>
              (0, t.jsx)(
                "source",
                { src: G(o.sURL, s), type: o.sFormat },
                o.sURL,
              ),
            );
        }
        function M(C) {
          const { rgVideoTracks: i, strCacheBreakOrigin: s } = C;
          return i
            ? i.map((o, m) =>
                (0, t.jsx)(
                  T,
                  { track: o, rgVideoTracks: i, strCacheBreakOrigin: s },
                  m,
                ),
              )
            : null;
        }
        function T(C) {
          const { track: i, rgVideoTracks: s, strCacheBreakOrigin: o } = C;
          let m = i.eLanguage;
          if (l.TS.EREALM == a.TU.k_ESteamRealmChina)
            if (O.A0.IsELanguageValidInRealm(m, a.TU.k_ESteamRealmChina))
              m = O.A0.GetELanguageFallback(m);
            else if (m === j.NFp) {
              if (s.find((B) => O.A0.GetELanguageFallback(B.eLanguage) === m))
                return null;
            } else return null;
          else if (!O.A0.IsELanguageValidInRealm(m, a.TU.k_ESteamRealmGlobal))
            return null;
          return (0, t.jsx)("track", {
            src: G(i.sURL, o),
            kind: i.sKind,
            default: i.bDefault,
            srcLang: (0, j.wwZ)(m),
            label: (0, O.uD)(m),
          });
        }
      },
      70187: (Q, z, n) => {
        "use strict";
        n.d(z, {
          B8: () => ye,
          It: () => F,
          N2: () => C,
          Pk: () => Ie,
          Sz: () => P,
          Tu: () => s,
          W4: () => T,
          ZS: () => U,
          Zb: () => _,
          _J: () => ve,
          ck: () => ie,
          d$: () => ae,
          j$: () => i,
        });
        var t = n(7850),
          I = n(29950),
          j = n(33645),
          a = n.n(j),
          O = n(24660),
          R = n(19298),
          l = n(71944),
          r = n(90626),
          h = n(43434),
          S = n(83482),
          y = n(1917),
          v = n(36118),
          d = n(71421),
          g = n(36707),
          w = n(18210),
          G = n(53113),
          K = n(98609),
          M = n(68941);
        const T = new Map([
            ["b", { Constructor: o, autocloses: !1 }],
            ["i", { Constructor: m, autocloses: !1 }],
            [
              "h1",
              { Constructor: _, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h2",
              { Constructor: P, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h3",
              { Constructor: U, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h4",
              { Constructor: W, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h5",
              { Constructor: V, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["center", { Constructor: $, autocloses: !1 }],
            [
              "smalltext",
              { Constructor: J, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["u", { Constructor: B, autocloses: !1 }],
            ["strike", { Constructor: A, autocloses: !1 }],
            ["spoiler", { Constructor: se, autocloses: !1 }],
            ["hr", { Constructor: q, autocloses: !1 }],
            ["noparse", { Constructor: Le, autocloses: !1 }],
            ["url", { Constructor: be, autocloses: !1 }],
            ["quote", { Constructor: Ie, autocloses: !1 }],
            ["pullquote", { Constructor: ne, autocloses: !1 }],
            ["code", { Constructor: we, autocloses: !1 }],
            ["c", { Constructor: Te, autocloses: !1 }],
            [
              "list",
              { Constructor: ye, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "olist",
              { Constructor: ve, autocloses: !1, skipInternalNewline: !0 },
            ],
            ["*", { Constructor: ie, autocloses: !0, skipInternalNewline: !0 }],
            [
              "table",
              { Constructor: ke, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "tr",
              {
                Constructor: Ye,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "th",
              {
                Constructor: Qe,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "td",
              {
                Constructor: Fe,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "expand",
              {
                Constructor: Ne,
                autocloses: !1,
                skipInternalNewline: !0,
                allowWrapTextForCopying: !0,
              },
            ],
            ["calendarevent", { Constructor: $e, autocloses: !0 }],
            ["doclink", { Constructor: Pe, autocloses: !1 }],
            ["color", { Constructor: Be, autocloses: !1 }],
            ["bgcolor", { Constructor: Re, autocloses: !1 }],
            ["p", { Constructor: x, autocloses: !1, skipFollowingNewline: !0 }],
          ]),
          C = new Map([
            ["looping_media", { Constructor: M.$A, autocloses: !1 }],
            ["video", { Constructor: M.UT, autocloses: !1 }],
            ["youtubeorvideo", { Constructor: y.Eo, autocloses: !1 }],
            ["previewyoutube", { Constructor: y.gH, autocloses: !1 }],
          ]);
        function i(p, D) {
          return D === void 0 ? p[""] : p[D];
        }
        function s(p, D) {
          return (E) => p({ ...E, className: D });
        }
        function o(p) {
          return (0, t.jsx)("b", { className: a().Bold, children: p.children });
        }
        function m(p) {
          return (0, t.jsx)("i", {
            className: (0, g.A)(a().Italic, "BB_Italic"),
            children: p.children,
          });
        }
        function B(p) {
          return (0, t.jsx)("u", {
            className: a().Underline,
            children: p.children,
          });
        }
        function A(p) {
          return (0, t.jsx)("s", {
            className: a().Strike,
            children: p.children,
          });
        }
        function x(p) {
          return (0, t.jsxs)("p", {
            className: a().Paragraph,
            children: [p.children, (0, t.jsx)("wbr", {})],
          });
        }
        function F(p) {
          return (0, t.jsxs)("div", {
            className: a().Paragraph,
            role: "paragraph",
            children: [p.children, (0, t.jsx)("wbr", {})],
          });
        }
        function c(p, D, E) {
          let u = i(D.args, "id");
          return (
            u || (u = i(D.args)),
            u &&
              typeof u == "string" &&
              u.length > 0 &&
              u[0] === "#" &&
              (u = u.substring(1)),
            (0, t.jsx)(p, {
              id: u || void 0,
              className: (0, g.A)(E, D.className),
              children: D.children,
            })
          );
        }
        function _(p) {
          return c("h1", p, (0, g.A)(a().Header1, "BB_Header1"));
        }
        function P(p) {
          return c("h2", p, (0, g.A)(a().Header2, "BB_Header2"));
        }
        function U(p) {
          return c("h3", p, (0, g.A)(a().Header3, "BB_Header3"));
        }
        function W(p) {
          return c("h4", p, (0, g.A)(a().Header4, "BB_Header4"));
        }
        function V(p) {
          return c("h5", p, (0, g.A)(a().Header5, "BB_Header5"));
        }
        function $(p) {
          let D = i(p.args, "id");
          return (
            D &&
              typeof D == "string" &&
              D.length > 0 &&
              D[0] === "#" &&
              (D = D.substring(1)),
            (0, t.jsx)("span", {
              id: D || void 0,
              className: (0, g.A)(a().CenterSpan, "BB_Center"),
              children: p.children,
            })
          );
        }
        function J(p) {
          return c("div", p, (0, g.A)(a().SmallText, "BB_SmallText"));
        }
        function se(p) {
          let [D, E] = r.useState(!1),
            u = r.useCallback(() => {
              E(!D);
            }, [D]);
          return (0, t.jsx)(R.Z, {
            className: (0, g.A)(a().Spoiler, D && a().Revealed),
            focusable: !0,
            onActivate: u,
            onOKActionDescription: (0, w.we)(
              D ? "#Bbcode_Spoiler_Hide" : "#Bbcode_Spoiler_Show",
            ),
            children: (0, t.jsx)("span", {
              className: a().SpoilerText,
              children: p.children,
            }),
          });
        }
        function q(p) {
          return (0, t.jsx)("hr", { className: a().HR });
        }
        function Be(p) {
          const D = i(p.args);
          return (0, t.jsx)("span", {
            style: { color: D },
            children: p.children,
          });
        }
        function Re(p) {
          const D = i(p.args);
          return (0, t.jsx)("span", {
            style: { backgroundColor: D },
            children: p.children,
          });
        }
        function be(p) {
          let D = (0, I.J)(i(p.args));
          if (!D) {
            const L = p.children;
            typeof L == "string" && (0, G.DZ)(L) && (D = (0, I.J)(L));
          }
          const E = i(p.args, "style") == "button" ? a().LinkButton : void 0,
            u = E && i(p.args, "buttoncolor");
          let b = i(p.args, "id");
          return (
            b &&
              typeof b == "string" &&
              b.length > 0 &&
              b[0] === "#" &&
              (b = b.substring(1)),
            D === void 0 && !b
              ? p.children || ""
              : D === void 0 ||
                  (typeof D == "string" && D.length > 0 && D[0] == "#")
                ? (0, t.jsx)("a", {
                    href: D != null ? D : null,
                    id: b,
                    children: p.children,
                  })
                : (0, t.jsx)(ae, {
                    className: E,
                    href: D,
                    id: b,
                    style: { backgroundColor: u },
                    children: p.children,
                  })
          );
        }
        function Pe(p) {
          const D = i(p.args),
            E = i(p.args, "style") == "button" ? a().LinkButton : void 0,
            u = E && i(p.args, "buttoncolor");
          return (0, t.jsx)(ae, {
            className: E,
            style: { backgroundColor: u },
            href: `${K.TS.PARTNER_BASE_URL}doc/${D}`,
            children: p.children,
          });
        }
        const ae = (p) => {
          const { href: D, ...E } = p;
          let u = (0, S.OZ)(D != null ? D : ""),
            b;
          (0, h.p)(u)
            ? ((u =
                (K.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                (0, h.E)(u)),
              (b = "noopener nofollow"))
            : (u = (0, G.NT)(u));
          const L =
            typeof p.children == "string" &&
            p.children.length > 0 &&
            D &&
            !D.startsWith("steam://")
              ? (0, G.Qz)(D)
              : void 0;
          return (0, t.jsx)(d.Gq, {
            toolTipContent: L,
            direction: "top",
            children: (0, t.jsx)(O.Ii, {
              ...E,
              href: u,
              rel: b,
              children: p.children,
            }),
          });
        };
        function re(p) {
          return jsx("a", {
            className: styles.DisabledMouseEvents,
            href: i(p.args),
            children: p.children,
          });
        }
        function Ie(p) {
          const D = i(p.args, "author");
          return (0, t.jsxs)("blockquote", {
            className: (0, g.A)(a().BlockQuote, p.className),
            children: [
              !!D &&
                (0, t.jsxs)("div", {
                  className: a().QuoteAuthor,
                  children: [
                    (0, w.we)("#Bbcode_Originally_Posted_By") + " ",
                    " ",
                    (0, t.jsx)("b", { children: D + ":" }),
                  ],
                }),
              p.children,
            ],
          });
        }
        function ne(p) {
          return (0, t.jsx)("div", {
            className: a().PullQuote,
            children: p.children,
          });
        }
        function we(p) {
          return (0, t.jsx)("code", {
            className: a().CodeBlock,
            children: p.children,
          });
        }
        function Te(p) {
          return (0, t.jsx)("code", {
            className: a().Code,
            children: p.children,
          });
        }
        function ye(p) {
          return (0, t.jsx)("ul", {
            className: (0, g.A)(a().List, "bullets"),
            children: p.children,
          });
        }
        function ve(p) {
          return (0, t.jsx)("ol", {
            className: a().OrderedList,
            children: p.children,
          });
        }
        function ie(p) {
          let D = i(p.args, "id");
          return (
            D &&
              typeof D == "string" &&
              D.length > 0 &&
              D[0] === "#" &&
              (D = D.substring(1)),
            (0, t.jsx)("li", {
              className: a().ListItem,
              id: D || void 0,
              children: p.children,
            })
          );
        }
        function Le(p) {
          return p.children;
        }
        function ke(p) {
          const D = i(p.args, "noborder"),
            E = i(p.args, "equalcells"),
            u = i(p.args, "colwidth");
          return (0, t.jsxs)("table", {
            className: (0, g.A)(
              a().Table,
              "BB_Table",
              D && a().NoBorder,
              E && a().EqualCells,
            ),
            children: [
              u &&
                (0, t.jsx)("colgroup", {
                  children: u
                    .split(",")
                    .map((b, L) => (0, t.jsx)(He, { width: b }, L)),
                }),
              (0, t.jsx)("tbody", { children: p.children }),
            ],
          });
        }
        function He(p) {
          const { width: D } = p;
          let E;
          return (
            D && parseInt(D) > 0 && (E = { width: `${D}px` }),
            (0, t.jsx)("col", { style: E })
          );
        }
        function Ye(p) {
          return (0, t.jsx)("tr", {
            className: (0, g.A)(a().TableRow, "BB_TableRow"),
            children: p.children,
          });
        }
        function Ve(p, D) {
          const E = i(D.args, "width"),
            u = i(D.args, "colspan"),
            b = i(D.args, "rowspan"),
            L = {};
          return (
            u && parseInt(u) > 1 && (L.colSpan = parseInt(u)),
            b && parseInt(b) > 1 && (L.rowSpan = parseInt(b)),
            (0, t.jsx)(p, {
              className: (0, g.A)(a().TableCell, p == "td" && "BB_TableData"),
              ...L,
              style: E ? { width: E } : void 0,
              children: D.children,
            })
          );
        }
        function Qe(p) {
          return Ve("th", p);
        }
        function Fe(p) {
          return Ve("td", p);
        }
        function Ze(p, D, E, u) {
          switch (p) {
            case "details":
              return {
                collapsed: "#Bbcode_Expand_Details_Collapsed",
                expanded: "#Bbcode_Expand_Details_Expanded",
                style: a().ExpandSection_Details,
              };
            case "spoiler":
              return {
                collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
                expanded: "#Bbcode_Expand_Spoiler_Expanded",
                style: a().ExpandSection_Spoiler,
              };
            case "title":
              return {
                collapsed: D || E || "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: D || u || "#Bbcode_Expand_ShowMore_Expanded",
                style: a().ExpandSection_WithTitle,
              };
            default:
            case "showmore":
              return {
                collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: "#Bbcode_Expand_ShowMore_Expanded",
                style: a().ExpandSection_ShowMore,
              };
          }
        }
        function Ne(p) {
          var D;
          const E = !!i(p.args, "expanded"),
            [u, b] = r.useState(E),
            L = i(p.args, "title"),
            N = i(p.args, "collapsed_str"),
            k = i(p.args, "expanded_str"),
            H = Ze(i(p.args, "type"), L, N, k);
          return (0, t.jsxs)("div", {
            className: (0, g.A)({
              [a().ExpandSectionBlock]: !0,
              [(D = H.style) != null ? D : ""]: H.style != null,
              [a().ExpandSectionExpanded]: u,
              [a().ExpandSectionCollapsed]: !u,
              BBCodeExpanded: u,
              BBCodeCollapsed: !u,
            }),
            children: [
              (0, t.jsxs)("div", {
                className: a().ExpandSectionHeader,
                onClick: () => b(!u),
                children: [
                  (0, w.we)(u ? H.expanded : H.collapsed),
                  (0, t.jsx)("div", {
                    className: a().EmbedArrow,
                    children: (0, t.jsx)(v.DK4, { angle: u ? 180 : 0 }),
                  }),
                ],
              }),
              u &&
                (0, t.jsx)("div", {
                  className: a().ExpandSectionBody,
                  children: p.children,
                }),
            ],
          });
        }
        function $e(p) {
          var D, E, u, b, L;
          const N = i(p.args, "title"),
            k = (D = i(p.args, "start")) != null ? D : i(p.args, "datetime"),
            H = (E = i(p.args, "end")) != null ? E : i(p.args, "datetime"),
            ee = (u = i(p.args, "body")) != null ? u : null,
            te = (b = i(p.args, "location")) != null ? b : null,
            Ct = (L = i(p.args, "id")) != null ? L : "",
            Ue = new Date(k),
            St = Ue.getUTCFullYear(),
            yt = ("0" + (Ue.getUTCMonth() + 1)).slice(-2),
            vt = ("0" + Ue.getUTCDate()).slice(-2),
            It = ("0" + Ue.getUTCHours()).slice(-2),
            Mt = ("0" + Ue.getUTCMinutes()).slice(-2),
            Je = `${St}${yt}${vt}T${It}${Mt}00Z`,
            Ge = new Date(H),
            Xe = Ge.getUTCFullYear(),
            Bt = ("0" + (Ge.getUTCMonth() + 1)).slice(-2),
            qe = ("0" + Ge.getUTCDate()).slice(-2),
            bt = ("0" + Ge.getUTCHours()).slice(-2),
            wt = ("0" + Ge.getUTCMinutes()).slice(-2),
            et = `${Xe}${Bt}${qe}T${bt}${wt}00Z`;
          let We;
          try {
            let Me = `BEGIN:VCALENDAR\r
`;
            (Me += `VERSION:2.0\r
`),
              (Me += `BEGIN:VEVENT\r
`),
              (Me += `DTSTART:${Je}\r
`),
              (Me += `DTEND:${et}\r
`),
              (Me += `SUMMARY:${N.replace(
                `
`,
                "\\n",
              )}\r
`),
              ee &&
                (Me += `DESCRIPTION:${ee.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              te &&
                (Me += `LOCATION:${te.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              (Me += `END:VEVENT\r
`),
              (Me += `END:VCALENDAR\r
`),
              (We = `data:text/calendar;charset=utf-8;base64,${l.fromByteArray(new TextEncoder().encode(Me))}`);
          } catch (Me) {
            console.error(Me);
          }
          let ze =
            "https://calendar.google.com/calendar/render?action=TEMPLATE";
          (ze += `&text=${encodeURI(N)}`),
            (ze += `&details=${encodeURI(ee)}`),
            (ze += `&dates=${encodeURI(Je + "/" + et)}`);
          const tt = (Me) => {
            if ("ReactNativeWebView" in window) {
              const rt = window.ReactNativeWebView,
                nt = {
                  event_name: "addcalendarevent",
                  tsStart: Ue.getTime(),
                  tsEnd: Ge.getTime(),
                  strTitle: N,
                  strNotes: ee,
                  strLocation: te,
                };
              rt.postMessage(JSON.stringify(nt)), Me.preventDefault();
            }
          };
          return (0, t.jsxs)("div", {
            className: (0, g.A)(
              "SaleSectionCalendarEventContainer",
              a().CalendarEventContainer,
            ),
            id: Ct,
            children: [
              We &&
                (0, t.jsx)("a", {
                  className: (0, g.A)(
                    "SaleSectionCalendarEventLink",
                    a().CalendarEventLink,
                  ),
                  href: We,
                  onClick: tt,
                  download: "calendar.ics",
                  children: "Apple",
                }),
              (0, t.jsx)("a", {
                className: (0, g.A)(
                  "SaleSectionCalendarEventLink",
                  a().CalendarEventLink,
                ),
                href: ze,
                children: "Google",
              }),
              We &&
                (0, t.jsx)("a", {
                  className: (0, g.A)(
                    "SaleSectionCalendarEventLink",
                    a().CalendarEventLink,
                  ),
                  href: We,
                  onClick: tt,
                  download: "calendar.ics",
                  children: "Outlook",
                }),
            ],
          });
        }
      },
      68941: (Q, z, n) => {
        "use strict";
        n.d(z, { $A: () => r, UT: () => h, g4: () => l });
        var t = n(7850),
          I = n(99412),
          j = n(72243),
          a = n(53113),
          O = n(98609),
          R = n(70187);
        function l(S) {
          let y = (0, R.j$)(S, "poster");
          y && (y = (0, a.L$)(y));
          const v = new Array();
          {
            const G = (0, R.j$)(S, "mp4");
            G && v.push({ sURL: (0, a.L$)(G), sFormat: "video/mp4" });
            const K = (0, R.j$)(S, "webm");
            K && v.push({ sURL: (0, a.L$)(K), sFormat: "video/webm" });
          }
          const d = (0, I.sfN)(O.TS.LANGUAGE),
            g = d != I.Bhc,
            w = new Array();
          for (let G = I.Bhc; G < I.bP9; G++) {
            const K = (0, R.j$)(S, "sub_" + (0, I.wwZ)(G));
            K &&
              w.push({
                sURL: (0, a.L$)(K),
                eLanguage: G,
                sKind: "subtitles",
                bDefault: g && G == d,
              });
            const M = (0, R.j$)(S, "cap_" + (0, I.wwZ)(G));
            M &&
              w.push({
                sURL: (0, a.L$)(M),
                eLanguage: G,
                sKind: "captions",
                bDefault: g && G == d,
              });
          }
          return { sPoster: y, rgVideoSources: v, rgVideoTracks: w };
        }
        function r(S) {
          const y = l(S.args);
          return (0, t.jsx)(j.L, {
            video: y,
            bAutoPlay: !0,
            bControls: !1,
            bLoop: !0,
          });
        }
        function h(S) {
          const y = l(S.args),
            v = S.children ? S.children.toString() : void 0;
          v &&
            v.startsWith("http") &&
            y.rgVideoSources.push({
              sURL: (0, a.L$)(v),
              sFormat: "video/webm",
            });
          const d = (0, R.j$)(S.args, "autoplay"),
            g = d !== "0" && d !== "off" && d !== "false",
            w = (0, R.j$)(S.args, "controls"),
            G = w !== "0" && w !== "off" && w !== "false",
            K = (0, R.j$)(S.args, "loop"),
            M = w !== "0" && w !== "off" && w !== "false";
          return (0, t.jsx)(j.L, {
            video: y,
            bAutoPlay: g,
            bControls: G,
            bLoop: K ? M : g,
          });
        }
      },
      43458: (Q, z, n) => {
        "use strict";
        n.d(z, { Lg: () => l, XU: () => y, jZ: () => r });
        const t = 20,
          I = /^.*youtube[^v]+v=(.{11}).*/,
          j = /^.*youtu\.be\/(.{11}).*/,
          a = /^.*youtube.*\/embed\/(.{11}).*/,
          O = /^.*[?&]t=([^&]+)(?:&|$)/,
          R = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
        function l(v) {
          return !!r(v);
        }
        function r(v) {
          const d =
            (v == null ? void 0 : v.length) < t
              ? void 0
              : I.exec(v) || j.exec(v) || a.exec(v);
          return d == null ? void 0 : d[1];
        }
        function h(v) {
          const d = O.exec(v);
          return d == null ? void 0 : d[1];
        }
        function S(v) {
          const d = R.exec(v);
          if (
            !(
              (d != null && d[1]) ||
              (d != null && d[2]) ||
              (d != null && d[3]) ||
              (d != null && d[4])
            )
          )
            return;
          if (d != null && d[4]) return parseInt(d == null ? void 0 : d[4]);
          let g = 0;
          return (
            d != null && d[1] && (g += 3600 * parseInt(d[1])),
            d != null && d[2] && (g += 60 * parseInt(d[2])),
            d != null && d[3] && (g += parseInt(d[3])),
            g
          );
        }
        function y(v) {
          const d = r(v);
          if (!d) return;
          const g = h(v),
            w = g ? S(g) : void 0;
          return { strVideoID: d, nStartSeconds: w };
        }
      },
      84676: (Q, z, n) => {
        "use strict";
        n.d(z, {
          G6: () => v,
          Gg: () => w,
          Sq: () => h,
          eR: () => S,
          ik: () => y,
          mZ: () => G,
          t7: () => d,
          zX: () => M,
        });
        var t = n(41735),
          I = n.n(t),
          j = n(90626),
          a = n(72604),
          O = n(3367),
          R = n(54963),
          l = n(10142);
        function r(s, o, m = !0) {
          const B = m
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            A = m || CStoreItemCache.Get().BHasStoreItem(s, o, B) ? s : null,
            [x, F] = v(A, o, B),
            [c, _] = useState(null),
            [P, U] = v(c, o, B);
          useEffect(() => {
            (x == null ? void 0 : x.GetAppType()) ===
              EStoreAppType.k_EStoreAppType_Demo && _(x.GetParentAppID());
          }, [x]);
          let W =
            x != null && x.GetShortDescription()
              ? StripBBCodeTags(x.GetShortDescription())
              : "";
          (!W || W.length === 0) &&
            P &&
            (W =
              P != null && P.GetShortDescription()
                ? StripBBCodeTags(P.GetShortDescription())
                : "");
          const V = F == y && (!c || U == y);
          return [W, V];
        }
        const h = 1,
          S = 2,
          y = 3;
        function v(s, o, m, B) {
          const A = (0, j.useRef)(void 0),
            x = (0, j.useRef)(void 0),
            F = (0, R.CH)();
          A.current = s;
          const [c, _] = (0, j.useState)(void 0),
            {
              include_assets: P,
              include_release: U,
              include_platforms: W,
              include_all_purchase_options: V,
              include_screenshots: $,
              include_trailers: J,
              include_ratings: se,
              include_tag_count: q,
              include_reviews: Be,
              include_basic_info: Re,
              include_supported_languages: be,
              include_full_description: Pe,
              include_included_items: ae,
              include_assets_without_overrides: re,
              apply_user_filters: Ie,
              include_links: ne,
              include_extra_details: we,
              include_optin_registration_tags: Te,
            } = m;
          if (
            ((0, j.useEffect)(() => {
              const ve = {
                include_assets: P,
                include_release: U,
                include_platforms: W,
                include_all_purchase_options: V,
                include_screenshots: $,
                include_trailers: J,
                include_ratings: se,
                include_tag_count: q,
                include_reviews: Be,
                include_basic_info: Re,
                include_supported_languages: be,
                include_full_description: Pe,
                include_included_items: ae,
                include_assets_without_overrides: re,
                apply_user_filters: Ie,
                include_links: ne,
                include_extra_details: we,
                include_optin_registration_tags: Te,
              };
              let ie = null;
              return (
                !s ||
                  s < 0 ||
                  l.A.Get().BHasStoreItem(s, o, ve) ||
                  (c !== void 0 && B && B == x.current) ||
                  (B !== x.current && (_(void 0), (x.current = B)),
                  (ie = I().CancelToken.source()),
                  l.A.Get()
                    .QueueStoreItemRequest(s, o, ve)
                    .then((Le) => {
                      !(ie != null && ie.token.reason) &&
                        A.current === s &&
                        _(Le == a.R),
                        F();
                    })),
                () =>
                  ie == null
                    ? void 0
                    : ie.cancel("useStoreItemCache: unmounting")
              );
            }, [
              s,
              o,
              B,
              c,
              P,
              U,
              W,
              V,
              $,
              J,
              se,
              q,
              Be,
              Re,
              be,
              Pe,
              ae,
              re,
              Ie,
              ne,
              we,
              Te,
              F,
            ]),
            !s)
          )
            return [null, S];
          if (c === !1) return [void 0, S];
          if (l.A.Get().BIsStoreItemMissing(s, o)) return [void 0, S];
          if (!l.A.Get().BHasStoreItem(s, o, m)) return [void 0, h];
          const ye = l.A.Get().GetStoreItemWithLegacyVisibilityCheck(s, o);
          return ye ? [ye, y] : [null, S];
        }
        function d(s, o, m) {
          return v(s, O.c6.qI, o, m);
        }
        function g(s, o, m) {
          return v(s, EStoreItemType.k_EStoreItemType_Bundle, o, m);
        }
        function w(s, o, m) {
          return v(s, O.c6.RD, o, m);
        }
        function G(s, o, m) {
          var B;
          const [A, x] = v(s, o, m);
          let F;
          (A == null ? void 0 : A.GetStoreItemType()) == O.c6.RD &&
            !((B = A.GetAssets()) != null && B.GetHeaderURL()) &&
            (A == null ? void 0 : A.GetIncludedAppIDs().length) == 1 &&
            (F = A.GetIncludedAppIDs()[0]);
          const [c, _] = d(F, m);
          return F && c != null && c.BIsVisible() ? [c, _] : [A, x];
        }
        function K(s, o, m, B) {
          const A = (0, R.CH)(),
            {
              include_assets: x,
              include_release: F,
              include_platforms: c,
              include_all_purchase_options: _,
              include_screenshots: P,
              include_trailers: U,
              include_ratings: W,
              include_tag_count: V,
              include_reviews: $,
              include_basic_info: J,
              include_supported_languages: se,
              include_full_description: q,
              include_included_items: Be,
              include_assets_without_overrides: Re,
              apply_user_filters: be,
              include_links: Pe,
              include_extra_details: ae,
              include_optin_registration_tags: re,
            } = m;
          return (
            (0, j.useEffect)(() => {
              if (!s || s.length == 0) return;
              const ne = {
                  include_assets: x,
                  include_release: F,
                  include_platforms: c,
                  include_all_purchase_options: _,
                  include_screenshots: P,
                  include_trailers: U,
                  include_ratings: W,
                  include_tag_count: V,
                  include_reviews: $,
                  include_basic_info: J,
                  include_supported_languages: se,
                  include_full_description: q,
                  include_included_items: Be,
                  include_assets_without_overrides: Re,
                  apply_user_filters: be,
                  include_links: Pe,
                  include_extra_details: ae,
                  include_optin_registration_tags: re,
                },
                we = s.filter(
                  (ve) =>
                    !(
                      l.A.Get().BHasStoreItem(ve, o, ne) ||
                      l.A.Get().BIsStoreItemMissing(ve, o)
                    ),
                );
              if (we.length == 0) return;
              const Te = I().CancelToken.source(),
                ye = we.map((ve) => l.A.Get().QueueStoreItemRequest(ve, o, ne));
              return (
                Promise.all(ye).then(() => {
                  Te.token.reason || A();
                }),
                () => Te.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              s,
              o,
              B,
              A,
              x,
              F,
              c,
              _,
              P,
              U,
              W,
              V,
              $,
              J,
              se,
              q,
              Be,
              Re,
              be,
              Pe,
              ae,
              re,
            ]),
            s
              ? s.every(
                  (ne) =>
                    l.A.Get().BHasStoreItem(ne, o, m) ||
                    l.A.Get().BIsStoreItemMissing(ne, o),
                )
                ? s.every((ne) =>
                    l.A.Get().GetStoreItemWithLegacyVisibilityCheck(ne, o),
                  )
                  ? y
                  : S
                : h
              : S
          );
        }
        function M(s, o, m) {
          return K(s, O.c6.qI, o, m);
        }
        function T(s, o, m) {
          return K(s, EStoreItemType.k_EStoreItemType_Bundle, o, m);
        }
        function C(s, o, m) {
          return K(s, EStoreItemType.k_EStoreItemType_Package, o, m);
        }
        function i() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      43828: (Q, z, n) => {
        "use strict";
        n.d(z, { h: () => h });
        var t = n(7850),
          I = n(96232),
          j = n(90626),
          a = n(70187),
          O = n(7487),
          R = n(72609);
        function l(S) {
          return new O.OJ(new O.R8());
        }
        function r() {
          return new Map([...Array.from(a.W4.entries())]);
        }
        function h(S) {
          const { text: y, languageOverride: v } = S,
            [d] = (0, j.useState)(
              new I.B(r(), l, v != null ? v : R.TS.LANGUAGE),
            );
          return (0, t.jsx)(t.Fragment, { children: d.ParseBBCode(y, {}) });
        }
      },
      1917: (Q, z, n) => {
        "use strict";
        n.d(z, { Eo: () => S, V2: () => O.V2, gH: () => h });
        var t = n(7850),
          I = n(90626),
          j = n(70187),
          a = n(68941),
          O = n(43597),
          R = n(32093),
          l = n(72609);
        function r() {
          return l.TS.EREALM === R.TU.k_ESteamRealmChina;
        }
        function h(y) {
          if (r()) return null;
          let v = (0, j.j$)(y.args);
          if (v) {
            let d = v.split(";");
            if (d.length == 2) {
              let g = d[0],
                w = d[1].toLocaleLowerCase();
              return (0, t.jsx)(O.AX, {
                videoID: g,
                align: w,
                bShowVideoImmediately: !0,
              });
            }
          }
          return (0, t.jsx)(I.Fragment, {});
        }
        function S(y) {
          if (r() || l.TS.COUNTRY.toLocaleUpperCase() == "CN")
            return (0, a.UT)(y);
          const v = (0, j.j$)(y.args, "youtubeid"),
            d = (0, j.j$)(y.args, "size"),
            g = (0, j.j$)(y.args, "seconds");
          return (0, t.jsx)(O.AX, {
            videoID: v,
            nStartSeconds: g ? Number.parseInt(g) : void 0,
            align: d,
            bShowVideoImmediately: !0,
          });
        }
      },
      22714: (Q, z, n) => {
        "use strict";
        n.d(z, { A: () => C });
        var t = n(7850),
          I = n(90626),
          j = n(75844),
          a = n(54963),
          O = n(24660),
          R = n(19298),
          l = n(16346),
          r = n(38655),
          h = n(18210),
          S = n(36707),
          y = n(90024),
          v = n.n(y),
          d = n(75975),
          g = n(71421),
          w = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          K = (i, s, o, m) => {
            for (
              var B = m > 1 ? void 0 : m ? G(s, o) : s, A = i.length - 1, x;
              A >= 0;
              A--
            )
              (x = i[A]) && (B = (m ? x(s, o, B) : x(B)) || B);
            return m && B && w(s, o, B), B;
          };
        const M = 1576780700;
        let T = class extends I.Component {
          OnEmoticonClick(i) {
            var s;
            const {
                emoticonStore: o,
                strFlairGroupID: m,
                SetUIDisplayPref: B,
                contextOptions: A,
                bShowChatAddons: x,
              } = this.props,
              {
                roomEffectSettings: F,
                onRoomEffectSelected: c,
                onStickerSelected: _,
              } = this.props;
            let P = null;
            if (
              (x && F && c && _
                ? (P = (0, t.jsx)(r.Q4, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    onEmoticonSelected: (U) =>
                      this.props.OnEmoticonSelected(U, !1),
                    roomEffectSettings: F,
                    onRoomEffectSelected: c,
                    onStickerSelected: _,
                  }))
                : m &&
                    o.flair_list &&
                    ((s = o.GetFlairListByGroupID(m)) == null
                      ? void 0
                      : s.length) > 0
                  ? (P = (0, t.jsx)(r.CE, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    }))
                  : (P = (0, t.jsx)(r.iY, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })),
              (0, l.lX)(
                P,
                i,
                A || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0,
                },
              ),
              this.BHaveUnseenEmoticons() && B)
            ) {
              let U = this.GetNewestIndicatorTime();
              (!U || U < M) && (U = M), B("rtLastAckedNewEmoticons", U);
            }
          }
          GetNewestIndicatorTime() {
            let i = this.props.emoticonStore,
              s = Number.MIN_SAFE_INTEGER,
              o = i.GetTimeReceivedNewestEmoticon();
            o && (s = o);
            let m = i.GetTimeReceivedForStickerOrEffect();
            return (
              (s = Math.max(m, s)), s > Number.MIN_SAFE_INTEGER ? s : void 0
            );
          }
          BHaveUnseenEmoticons() {
            const { rtLastAckedNewEmoticons: i } = this.props;
            let s = this.GetNewestIndicatorTime();
            return !i || i < M ? !0 : s && (!i || i < s);
          }
          render() {
            const {
              disabled: i,
              className: s,
              ttip: o,
              useImg: m,
            } = this.props;
            let B = [s],
              A = !1;
            return (
              i ? B.push("disabled") : this.BHaveUnseenEmoticons() && (A = !0),
              o && B.push("ttip"),
              m
                ? (0, t.jsx)(R.Z, {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, h.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                    children: (0, t.jsx)(g.he, {
                      toolTipContent: o,
                      children: (0, t.jsx)("img", {
                        src: this.props.useImg,
                        className: (0, S.A)(...B),
                        title:
                          this.props.title ||
                          (0, h.we)("#ChatEntryButton_Emoticon"),
                      }),
                    }),
                  })
                : (B.push(v().chatSubmitButton, v().EmoticonPickerButton),
                  (0, t.jsx)(O.fu, {
                    className: (0, S.A)(...B),
                    onOKActionDescription: (0, h.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      (0, h.we)("#ChatEntryButton_Emoticon"),
                    disabled: i,
                    children: (0, t.jsxs)(g.he, {
                      toolTipContent: o,
                      children: [
                        this.props.buttonIcon || (0, t.jsx)(d.nl, {}),
                        A && (0, t.jsx)(r.iD, {}),
                      ],
                    }),
                  }))
            );
          }
        };
        K([a.oI], T.prototype, "OnEmoticonClick", 1), (T = K([j.PA], T));
        const C = T;
      },
      38655: (Q, z, n) => {
        "use strict";
        n.d(z, { Q4: () => Re, iY: () => Pe, CE: () => ae, iD: () => Ve });
        var t = n(7850),
          I = n(14947),
          j = n(75844),
          a = n(90626),
          O = n(76842),
          R = n(84676),
          l = n(34360),
          r = n(36707),
          h = n(18210);
        function S(E, u, b = !1) {
          return `${E}economy/sticker${b ? "static" : ""}/${encodeURIComponent(u)}`;
        }
        var y = n(3166),
          v = n(19316),
          d = n(19298),
          g = n(64415),
          w = n(19418);
        class G extends a.Component {
          constructor(u) {
            super(u), (this.state = { activeIndex: u.initialActiveIndex || 0 });
          }
          render() {
            const { config: u } = this.props,
              { activeIndex: b } = this.state,
              L = u[b],
              N = L ? L.renderContent() : null,
              k = u.length > 1,
              H = k
                ? ({ detail: { button: ee } }) => {
                    ee === g.pR.BUMPER_LEFT
                      ? this.setState({
                          activeIndex: Math.max(0, this.state.activeIndex - 1),
                        })
                      : ee === g.pR.BUMPER_RIGHT &&
                        this.setState({
                          activeIndex: Math.min(
                            u.length - 1,
                            this.state.activeIndex + 1,
                          ),
                        });
                  }
                : void 0;
            return (0, t.jsxs)(d.Z, {
              className: w.Picker,
              onButtonDown: H,
              children: [
                k && (0, t.jsx)(K, { children: this.RenderTabs() }),
                N,
              ],
            });
          }
          RenderTabs() {
            return this.props.config.map(({ renderTab: u }, b) => {
              const L = this.state.activeIndex === b;
              return (0, t.jsx)(
                T,
                {
                  active: L,
                  onClick: () => this.setState({ activeIndex: b }),
                  children: u(L),
                },
                b,
              );
            });
          }
        }
        function K(E) {
          return (0, t.jsx)(d.Z, {
            className: w.Tabs,
            "flow-children": "row",
            children: E.children,
          });
        }
        function M(E) {
          return (0, t.jsx)("div", {
            className: w.Content,
            children: E.children,
          });
        }
        function T(E) {
          const { active: u, children: b, onClick: L } = E;
          return (0, t.jsx)(d.Z, {
            className: (0, r.A)(w.Tab, u && w.Active),
            focusClassName: w.Focus,
            onActivate: L,
            children: (0, t.jsx)("div", {
              className: (0, r.A)(w.TabContent, u && w.Active),
              children: b,
            }),
          });
        }
        function C(E) {
          const {
            items: u,
            renderItem: b,
            onItemSelect: L,
            keyExtractor: N,
            renderEmpty: k,
          } = E;
          let H = u.map((ee, te) =>
            (0, t.jsx)(
              d.Z,
              {
                className: w.Item,
                onActivate: () => L(u[te]),
                autoFocus: te === 0,
                focusClassName: w.Focus,
                children: b(u[te]),
              },
              N(ee),
            ),
          );
          return (
            u.length === 0 && k && (H = k()),
            (0, t.jsx)(d.Z, {
              "flow-children": "grid",
              className: w.ItemList,
              children: H,
            })
          );
        }
        function i(E) {
          const {
            title: u,
            onFilterChange: b,
            filter: L,
            onSubmit: N,
            ...k
          } = E;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(M, {
                children: (0, t.jsx)(o, {
                  title: u,
                  children: (0, t.jsx)(C, { ...k }),
                }),
              }),
              (0, t.jsx)(m, { value: L, onChange: b, onSubmit: N }),
            ],
          });
        }
        function s(E) {
          const { onFilterChange: u, filter: b, sections: L, title: N } = E;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(M, {
                children: [
                  N &&
                    (0, t.jsx)("div", {
                      className: w.SectionedPageTitle,
                      children: N,
                    }),
                  L.map(({ title: k, ...H }) =>
                    (0, t.jsx)(
                      o,
                      { title: k, children: (0, t.jsx)(C, { ...H }) },
                      k,
                    ),
                  ),
                ],
              }),
              (0, t.jsx)(m, { value: b, onChange: u }),
            ],
          });
        }
        function o(E) {
          return (0, t.jsxs)("div", {
            className: w.Section,
            children: [
              (0, t.jsx)("div", {
                className: w.SectionTitle,
                children: E.title,
              }),
              (0, t.jsx)("div", {
                className: w.SectionContent,
                children: E.children,
              }),
            ],
          });
        }
        function m(E) {
          const { value: u, onChange: b, onSubmit: L } = E;
          return (0, t.jsx)("div", {
            className: w.FilterInputContainer,
            children: (0, t.jsx)(v.pd, {
              type: "text",
              placeholder: (0, h.we)("#AddonPicker_Search"),
              className: w.FilterInput,
              value: u,
              onChange: (N) => b(N.target.value),
              onSubmit: L,
            }),
          });
        }
        function B(E) {
          const { className: u, ...b } = E;
          return (0, t.jsx)("div", {
            className: (0, r.A)(u, w.AddonPickerMessage),
            ...b,
          });
        }
        var A = n(42060),
          x = n.n(A),
          F = n(53107),
          c = n(96197),
          _ = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          U = (E, u, b) =>
            u in E
              ? _(E, u, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: b,
                })
              : (E[u] = b),
          W = (E, u, b, L) => {
            for (
              var N = L > 1 ? void 0 : L ? P(u, b) : u, k = E.length - 1, H;
              k >= 0;
              k--
            )
              (H = E[k]) && (N = (L ? H(u, b, N) : H(N)) || N);
            return L && N && _(u, b, N), N;
          },
          V = (E, u, b) => U(E, typeof u != "symbol" ? u + "" : u, b);
        const $ = 1e3;
        function J(E) {
          return E.recent_emoticons;
        }
        function se(E) {
          return E.recent_stickers;
        }
        function q(E) {
          return J(E).length + se(E).length > 0;
        }
        function Be(E) {
          const [u, b] = (0, a.useState)(E.is_initialized);
          return (
            (0, a.useEffect)(() => {
              if (!E.is_initialized) {
                E.UpdateEmoticonList();
                const L = (0, I.z7)(
                  () => E.is_initialized,
                  () => b(E.is_initialized),
                );
                return () => L();
              }
              return () => {};
            }, [E]),
            u
          );
        }
        const Re = (0, j.PA)((E) => {
          const {
            emoticonStore: u,
            roomEffectSettings: b,
            strFlairGroupID: L,
            onEmoticonSelected: N,
            onRoomEffectSelected: k,
            onStickerSelected: H,
          } = E;
          Be(u);
          const ee = [];
          return (
            q(u) &&
              ee.push({
                renderTab: (te) =>
                  (0, t.jsx)("span", {
                    title: (0, h.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, r.A)(
                      x().PickerTab,
                      x().Clock,
                      te && x().ActiveTab,
                    ),
                    children: (0, t.jsx)(D, {}),
                  }),
                renderContent: () =>
                  (0, t.jsx)(re, {
                    store: u,
                    onEmoticonSelect: (te) => N(te.name),
                    onStickerSelect: (te) => H(te.name),
                    flairGroupID: L,
                  }),
              }),
            (0, t.jsx)(l.tz, {
              children: (0, t.jsx)(G, {
                config: [
                  ...ee,
                  {
                    renderTab: (te) =>
                      (0, t.jsx)("span", {
                        title: (0, h.we)("#AddonPicker_Emoticons"),
                        className: (0, r.A)(x().PickerTab, te && x().ActiveTab),
                        children: (0, t.jsx)(Ne, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(Ie, {
                        store: u,
                        onItemSelect: (te) => N(te.name),
                        flairGroupID: L,
                      }),
                  },
                  {
                    renderTab: (te) =>
                      (0, t.jsx)("span", {
                        title: (0, h.we)("#AddonPicker_Stickers"),
                        className: (0, r.A)(x().PickerTab, te && x().ActiveTab),
                        children: (0, t.jsx)(Fe, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(we, {
                        store: u,
                        onItemSelect: (te) => H(te.name),
                      }),
                  },
                  {
                    renderTab: (te) =>
                      (0, t.jsx)("span", {
                        title: (0, h.we)("#AddonPicker_RoomEffects"),
                        className: (0, r.A)(x().PickerTab, te && x().ActiveTab),
                        children: (0, t.jsx)(p, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(Te, {
                        store: u,
                        effectSettings: b,
                        onItemSelect: (te) => k(te.name),
                      }),
                  },
                ],
              }),
            })
          );
        });
        let be = class extends a.Component {
          constructor(E) {
            super(E),
              V(this, "m_disposeEmoticonStore"),
              (this.state = { strSearchText: "" });
            let u = this.props.emoticonStore;
            u.is_initialized ||
              (u.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, I.z7)(
                () => u.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            const {
                emoticonStore: E,
                onEmoticonSelected: u,
                onStickerSelected: b,
                strFlairGroupID: L,
              } = this.props,
              N = [];
            return (
              q(E) &&
                N.push({
                  renderTab: (k) =>
                    (0, t.jsx)("span", {
                      title: (0, h.we)("#AddonPicker_RecentlyUsed"),
                      className: (0, r.A)(
                        x().PickerTab,
                        x().Clock,
                        k && x().ActiveTab,
                      ),
                      children: (0, t.jsx)(D, {}),
                    }),
                  renderContent: () =>
                    (0, t.jsx)(re, {
                      store: E,
                      onEmoticonSelect: (k) => u(k.name),
                      onStickerSelect: (k) => b(k.name),
                      flairGroupID: L,
                    }),
                }),
              (0, t.jsx)(l.tz, {
                children: (0, t.jsx)(G, {
                  config: [
                    ...N,
                    {
                      renderTab: (k) =>
                        (0, t.jsx)("span", {
                          title: (0, h.we)("#AddonPicker_Emoticons"),
                          className: (0, r.A)(
                            x().PickerTab,
                            k && x().ActiveTab,
                          ),
                          children: (0, t.jsx)(Ne, {}),
                        }),
                      renderContent: () =>
                        (0, t.jsx)(Ie, {
                          store: E,
                          onItemSelect: (k) => u(k.name),
                          flairGroupID: L,
                        }),
                    },
                    {
                      renderTab: (k) =>
                        (0, t.jsx)("span", {
                          title: (0, h.we)("#AddonPicker_Stickers"),
                          className: (0, r.A)(
                            x().PickerTab,
                            k && x().ActiveTab,
                          ),
                          children: (0, t.jsx)(Fe, {}),
                        }),
                      renderContent: () =>
                        (0, t.jsx)(we, {
                          store: E,
                          onItemSelect: (k) => b(k.name),
                        }),
                    },
                  ],
                }),
              })
            );
          }
        };
        be = W([j.PA], be);
        class Pe extends a.Component {
          constructor(u) {
            super(u),
              V(this, "m_disposeEmoticonStore"),
              (this.state = { strSearchText: "" });
            let b = this.props.emoticonStore;
            b.is_initialized ||
              (b.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, I.z7)(
                () => b.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, t.jsx)(l.tz, {
              children: (0, t.jsx)(G, {
                config: [
                  {
                    renderTab: () =>
                      (0, t.jsx)("span", {
                        title: (0, h.we)("#AddonPicker_Emoticons"),
                        className: x().PickerTab,
                        children: (0, t.jsx)(Ne, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(ye, {
                        store: this.props.emoticonStore,
                        onItemSelect: (u) => this.props.OnSelected(u.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class ae extends a.Component {
          constructor(u) {
            super(u),
              V(this, "m_disposeEmoticonStore"),
              (this.state = { strSearchText: "" });
            let b = this.props.emoticonStore;
            b.is_initialized ||
              (b.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, I.z7)(
                () => b.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, t.jsx)(l.tz, {
              children: (0, t.jsx)(G, {
                config: [
                  {
                    renderTab: () =>
                      (0, t.jsx)("span", {
                        title: (0, h.we)("#AddonPicker_Emoticons"),
                        className: x().PickerTab,
                        children: (0, t.jsx)(Ne, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(ve, {
                        store: this.props.emoticonStore,
                        onItemSelect: (u) => this.props.OnSelected(u.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class re extends a.Component {
          constructor() {
            super(...arguments), V(this, "state", { filter: "" });
          }
          render() {
            const {
                store: u,
                onEmoticonSelect: b,
                onStickerSelect: L,
              } = this.props,
              { filter: N } = this.state,
              k = [];
            return (
              J(u) &&
                k.push({
                  title: (0, h.we)("#AddonPicker_RecentEmoticons"),
                  items: O.pN.FilterEmoticons(J(u), N),
                  onItemSelect: b,
                  renderItem: (H) => (0, t.jsx)(ie, { emoticon: H }),
                  keyExtractor: (H) => H.name,
                  renderEmpty: () =>
                    (0, t.jsx)(B, {
                      children: N
                        ? (0, h.we)("#AddonPicker_NoResults")
                        : (0, h.we)(
                            "#AddonPicker_NoRecent",
                            (0, h.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              se(u).length &&
                k.push({
                  title: (0, h.we)("#AddonPicker_RecentStickers"),
                  items: O.pN.FilterStickers(se(u), N),
                  onItemSelect: L,
                  renderItem: (H) => (0, t.jsx)(Le, { sticker: H }),
                  keyExtractor: ({ name: H }) => H,
                  renderEmpty: () =>
                    (0, t.jsx)(B, {
                      children: N
                        ? (0, h.we)("#AddonPicker_NoResults")
                        : (0, h.we)(
                            "#AddonPicker_NoRecent",
                            (0, h.we)("#AddonPicker_Stickers"),
                          ),
                    }),
                }),
              (0, t.jsx)(s, {
                onFilterChange: (H) => this.setState({ filter: H }),
                filter: N,
                sections: k,
              })
            );
          }
        }
        class Ie extends a.Component {
          constructor() {
            super(...arguments), V(this, "state", { filter: "" });
          }
          render() {
            const { store: u, onItemSelect: b, flairGroupID: L } = this.props,
              { filter: N } = this.state,
              k = !N && L ? u.GetFlairListByGroupID(L) : u.emoticon_list,
              H = O.pN.FilterEmoticons(k, N).slice(0, $);
            return (0, t.jsx)(i, {
              title: (0, h.we)("#AddonPicker_Emoticons"),
              items: H,
              onItemSelect: b,
              renderItem: (ee) => (0, t.jsx)(ie, { emoticon: ee }),
              keyExtractor: (ee) => ee.name,
              onFilterChange: (ee) => this.setState({ filter: ee }),
              filter: N,
              onSubmit: () => b(H[0]),
              renderEmpty: () =>
                N
                  ? (0, t.jsx)(B, {
                      children: (0, h.we)("#AddonPicker_NoResults"),
                    })
                  : (0, t.jsx)(ne, {}),
            });
          }
        }
        function ne() {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(B, {
                children: (0, h.we)(
                  "#AddonPicker_NoneOwned",
                  (0, h.we)("#AddonPicker_Emoticons"),
                ),
              }),
              (0, t.jsx)(B, {
                children: (0, h.PP)(
                  "#AddonPicker_AcquireAtPointsShopOrMarket",
                  (0, t.jsx)(F.uU, {
                    href: `${y.TS.STORE_BASE_URL}points/shop/c/emoticons`,
                    children: (0, h.we)(
                      "#AddonPicker_AcquireAtPointsShop_Link",
                    ),
                  }),
                  (0, t.jsx)(F.uU, {
                    href: `${y.TS.COMMUNITY_BASE_URL}market`,
                    children: (0, h.we)(
                      "#AddonPicker_AcquireAtPointsShopOrMarket_Link",
                    ),
                  }),
                ),
              }),
            ],
          });
        }
        class we extends a.Component {
          constructor() {
            super(...arguments), V(this, "state", { filter: "" });
          }
          render() {
            const { store: u, onItemSelect: b } = this.props,
              { filter: L } = this.state,
              N = O.pN.FilterStickers(u.GetStickerList(), L),
              k = () =>
                L
                  ? (0, t.jsx)(B, {
                      children: (0, h.we)("#AddonPicker_NoResults"),
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(B, {
                          children: (0, h.we)(
                            "#AddonPicker_NoneOwned",
                            (0, h.we)("#AddonPicker_Stickers"),
                          ),
                        }),
                        (0, t.jsx)(B, {
                          children: (0, h.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, t.jsx)(F.uU, {
                              href: `${y.TS.STORE_BASE_URL}points/shop/c/stickers`,
                              children: (0, h.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, t.jsx)(i, {
              title: (0, h.we)("#EmoticonPicker_StickerHeading"),
              items: N,
              onItemSelect: b,
              renderItem: (H) => (0, t.jsx)(Le, { sticker: H }),
              keyExtractor: ({ name: H }) => H,
              onFilterChange: (H) => this.setState({ filter: H }),
              filter: L,
              onSubmit: () => b(N[0]),
              renderEmpty: k,
            });
          }
        }
        class Te extends a.Component {
          constructor() {
            super(...arguments), V(this, "state", { filter: "" });
          }
          render() {
            const { store: u, effectSettings: b, onItemSelect: L } = this.props,
              { filter: N } = this.state,
              k = u
                .GetEffectList()
                .filter(({ name: ee }) => ee.indexOf(N) > -1),
              H = () =>
                N
                  ? (0, t.jsx)(B, {
                      children: (0, h.we)("#AddonPicker_NoResults"),
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(B, {
                          children: (0, h.we)(
                            "#AddonPicker_NoneOwned",
                            (0, h.we)("#AddonPicker_RoomEffects"),
                          ),
                        }),
                        (0, t.jsx)(B, {
                          children: (0, h.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, t.jsx)(F.uU, {
                              href: `${y.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                              children: (0, h.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, t.jsx)(i, {
              title: (0, h.we)("#EmoticonPicker_EffectHeading"),
              items: k,
              onItemSelect: L,
              renderItem: (ee) =>
                (0, t.jsx)(He, { effect: ee, roomEffectSettings: b }),
              keyExtractor: ({ name: ee }) => ee,
              onFilterChange: (ee) => this.setState({ filter: ee }),
              filter: N,
              onSubmit: () => L(k[0]),
              renderEmpty: H,
            });
          }
        }
        let ye = class extends a.Component {
          constructor() {
            super(...arguments), V(this, "state", { filter: "" });
          }
          render() {
            const { store: E, onItemSelect: u, flairGroupID: b } = this.props,
              { filter: L } = this.state,
              N = [];
            return (
              J(E).length &&
                N.push({
                  title: (0, h.we)("#AddonPicker_RecentEmoticons"),
                  items: O.pN.FilterEmoticons(J(E), L),
                  onItemSelect: u,
                  renderItem: (k) => (0, t.jsx)(ie, { emoticon: k }),
                  keyExtractor: (k) => k.name,
                  renderEmpty: () =>
                    (0, t.jsx)(B, {
                      children: L
                        ? (0, h.we)("#AddonPicker_NoResults")
                        : (0, h.we)(
                            "#AddonPicker_NoRecent",
                            (0, h.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              (0, t.jsx)(s, {
                onFilterChange: (k) => this.setState({ filter: k }),
                filter: L,
                sections: [
                  ...N,
                  {
                    title: (0, h.we)("#AddonPicker_AllEmoticons"),
                    items: O.pN.FilterStickers(E.emoticon_list, L).slice(0, $),
                    onItemSelect: u,
                    renderItem: (k) => (0, t.jsx)(ie, { emoticon: k }),
                    keyExtractor: (k) => k.name,
                    renderEmpty: () =>
                      L
                        ? (0, t.jsx)(B, {
                            children: (0, h.we)("#AddonPicker_NoResults"),
                          })
                        : (0, t.jsx)(ne, {}),
                  },
                ],
              })
            );
          }
        };
        ye = W([j.PA], ye);
        let ve = class extends a.Component {
          constructor() {
            super(...arguments), V(this, "state", { filter: "" });
          }
          render() {
            const { store: E, onItemSelect: u, flairGroupID: b } = this.props,
              { filter: L } = this.state;
            return (0, t.jsx)(s, {
              onFilterChange: (N) => this.setState({ filter: N }),
              filter: L,
              sections: [
                {
                  title: (0, h.we)("#ChatEntryButton_Flair"),
                  items: O.pN.FilterStickers(E.GetFlairListByGroupID(b), L),
                  onItemSelect: u,
                  renderItem: (N) => (0, t.jsx)(ie, { emoticon: N }),
                  keyExtractor: (N) => N.name,
                  renderEmpty: () =>
                    L
                      ? (0, t.jsx)(B, {
                          children: (0, h.we)("#AddonPicker_NoResults"),
                        })
                      : (0, t.jsx)(ne, {}),
                },
              ],
            });
          }
        };
        ve = W([j.PA], ve);
        const ie = (E) => {
          const { emoticon: u, large: b } = E,
            L = !u.last_used && u.time_received;
          return (0, t.jsxs)("div", {
            className: x().EmoticonItem,
            children: [
              (0, t.jsx)(c.n, { emoticon: u.name, large: b }),
              L && (0, t.jsx)(Ve, {}),
            ],
          });
        };
        class Le extends a.Component {
          constructor() {
            super(...arguments),
              V(this, "state", { showHover: !1 }),
              V(this, "m_ref", a.createRef());
          }
          render() {
            const { sticker: u, className: b, ...L } = this.props,
              N = S(y.TS.COMMUNITY_CDN_URL, u.name);
            return (0, t.jsxs)("div", {
              ref: this.m_ref,
              className: (0, r.A)(b, x().StickerButton),
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              ...L,
              children: [
                (0, t.jsx)("img", { style: { width: "100%" }, src: N }),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, t.jsx)(ke, { target: this.m_ref.current, sticker: u }),
              ],
            });
          }
        }
        const ke = (0, j.PA)((E) => {
          const {
              target: u,
              sticker: { name: b, appid: L },
            } = E,
            [N] = (0, R.t7)(L, {});
          return (0, t.jsx)(c.c, {
            target: u,
            title: b,
            subtitle: N == null ? void 0 : N.GetName(),
            children: (0, t.jsx)("img", {
              src: S(y.TS.COMMUNITY_CDN_URL, b),
              className: x().StickerHoverSticker,
            }),
          });
        });
        class He extends a.Component {
          constructor() {
            super(...arguments),
              V(this, "state", { showHover: !1 }),
              V(this, "m_ref", a.createRef());
          }
          render() {
            const {
                effect: u,
                roomEffectSettings: b,
                className: L,
                ...N
              } = this.props,
              k = b[u.name];
            return (0, t.jsxs)("div", {
              ref: this.m_ref,
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              className: (0, r.A)(L, x().EffectButton),
              ...N,
              children: [
                k.renderEffectIcon(),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, t.jsx)(Ye, {
                    target: this.m_ref.current,
                    effect: u,
                    roomEffectSettings: b,
                  }),
              ],
            });
          }
        }
        const Ye = (0, j.PA)((E) => {
          const {
              target: u,
              effect: { name: b, appid: L },
              roomEffectSettings: N,
            } = E,
            k = N[b],
            [H] = (0, R.t7)(L, {});
          return (0, t.jsx)(c.c, {
            target: u,
            title: b,
            subtitle: H == null ? void 0 : H.GetName(),
            children: (0, t.jsx)("div", {
              className: x().EffectHoverEffect,
              children: k.renderEffectIcon(),
            }),
          });
        });
        function Ve() {
          return (0, t.jsx)("div", {
            className: x().NewEmoticonIndicator,
            children: (0, t.jsx)("div", { className: x().NewEmoticonCircle }),
          });
        }
        function Qe(E) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...E,
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
                ...E,
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
        function Fe(E) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...E,
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
        function Ze(E) {
          return useInGamepadUI()
            ? jsx("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...E,
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
                ...E,
                children: jsx("path", {
                  d: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function Ne(E) {
          return (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...E,
            children: (0, t.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
            }),
          });
        }
        function $e(E) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...E,
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
                ...E,
                children: jsx("path", {
                  d: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function p(E) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...E,
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
        function D(E) {
          const { className: u, ...b } = E;
          return (0, t.jsx)("svg", {
            className: (0, r.A)("SVGIcon_Button SVGIcon_Clock", u),
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...b,
            children: (0, t.jsx)("path", {
              d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
            }),
          });
        }
      },
      96197: (Q, z, n) => {
        "use strict";
        n.d(z, { n: () => G, c: () => T });
        var t = n(7850),
          I = n(90626),
          j = n(561),
          a = n(21227),
          O = n(82734);
        function R(C) {
          const { text: i = "", style: s, children: o } = C;
          if (i == null) return (0, t.jsx)(I.Fragment, { children: o });
          let m;
          if (
            (i instanceof Array
              ? (m = i
                  .map((B) => (B ? B.toString() : ""))
                  .filter((B) => B.length > 0)
                  .join(`
`))
              : (m = i.toString()),
            I.Children.count(o) == 1)
          ) {
            let B = I.Children.only(o);
            return I.cloneElement(B, {
              "data-copystyle": s,
              "data-copytext": m,
            });
          } else
            return (
              console.log(`Error: CopyableText must be the parent of exactly one child:
	copystyle=${s} copytext=${m}`),
              (0, t.jsx)(I.Fragment, { children: o })
            );
        }
        function l(C) {
          var i;
          let s = C.cloneContents(),
            o = "",
            m = "",
            B = !1,
            x = (
              s.querySelector("[data-activechat=true]") || s
            ).querySelectorAll("[data-copytext]"),
            F = Array.from(x).map(
              (c) => c.getAttribute("data-copystyle") || "msg",
            );
          for (let c = 0; c < x.length; ++c) {
            let _ = x[c],
              P = F[c];
            if (c + 1 < x.length && DOMUtils.BIsParent(_, x[c + 1])) continue;
            let U = _.tagName.toLowerCase(),
              W = P.includes("block"),
              V = P.includes("timestamp"),
              $ = P.includes("server"),
              J = P.includes("invite"),
              se = P.includes("emote"),
              q = P.includes("no-prefix"),
              Be = P.includes("no-suffix"),
              Re = P.includes("allow-embedded-newlines"),
              be = P.includes("block-continue"),
              Pe = P.includes("merge-adjacent"),
              ae = P.includes("force-display"),
              re = P.includes("prepend-innertext"),
              Ie = P.includes("append-innertext"),
              ne = P.includes("prepend-newline"),
              we = P.includes("append-newline"),
              Te = P.includes("speaker");
            if (!ae) {
              let Le = U.match(/img|iframe/) != null,
                ke = _.querySelector("img,iframe") != null;
              if (!_.innerText && !Le && !ke) continue;
            }
            Pe &&
              (c > 0 && F[c - 1].includes("merge-adjacent") && (q = !0),
              c + 1 < F.length &&
                F[c + 1].includes("merge-adjacent") &&
                (Be = !0)),
              Te && (B = !0);
            let ye = "",
              ve = `
`;
            !V && !Te && !$ && !J && !se
              ? (B && (ye += "	"),
                m.includes("msg") && W && (ne = !0),
                m.includes("block") && !be && (ne = !0))
              : (o.length != 0 &&
                  (ye += `
`),
                ($ || J) && (ye += "		"));
            let ie = (i = _.getAttribute("data-copytext")) != null ? i : "";
            ie.length == 0
              ? (ie = _.innerText)
              : re && _.innerText.length > 0
                ? (ie = `${_.innerText}${
                    P.includes("-with-newline")
                      ? `
`
                      : " "
                  }${ie}`)
                : Ie &&
                  _.innerText.length > 0 &&
                  (ie += `${
                    P.includes("-with-newline")
                      ? `
`
                      : " "
                  }${_.innerText}`),
              ie.length != 0 &&
                (ne &&
                  (o += `
`),
                q || (o += ye),
                (o += Re ? ie : ie.replace(/\n/g, ve + ye)),
                Be || (o += ve),
                we &&
                  (o += `
`)),
              (m = P);
          }
          if (o.length != 0) return o;
        }
        function r(C) {
          const i = l(C);
          i != null && DOMUtils.CopyTextToClipboard(i);
        }
        function h(C) {
          const i = document.createRange();
          i.selectNode(C), r(i);
        }
        var S = n(36707),
          y = n(42060),
          v = n.n(y),
          d = n(86048),
          g = n(88942),
          w = n(72609);
        function G(C) {
          const { emoticon: i, large: s } = C,
            [o, m] = (0, d.OP)(),
            [B, A] = I.useState(null),
            x = `:${i}:`,
            F = (0, a.G)(i, s);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(R, {
                text: x,
                style: "merge-adjacent",
                children: (0, t.jsx)("img", {
                  ...m,
                  src: F,
                  className: (0, S.A)(v().emoticon, s ? v().large : void 0),
                  "data-emoticon": i,
                  alt: i,
                  ref: A,
                }),
              }),
              o && B && (0, t.jsx)(K, { target: B, emoticon: i }),
            ],
          });
        }
        function K(C) {
          const { target: i, emoticon: s } = C,
            { data: o } = M(s);
          return (0, t.jsx)(T, {
            target: i,
            title: `:${s}:`,
            subtitle: o && o.app_name ? o.app_name : void 0,
            children: (0, t.jsx)(G, { emoticon: s, large: !0 }),
          });
        }
        function M(C) {
          return (0, g.I)({
            queryKey: ["EmoticonHover", C],
            queryFn: async () => {
              const i = `${w.TS.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(C)}?l=${encodeURIComponent(w.TS.LANGUAGE)}&origin=${self.origin}`,
                s = await fetch(i);
              if (s.status != 200)
                throw `Error fetching emoticon: ${s.status} ${s.statusText}`;
              return await s.json();
            },
          });
        }
        const T = ({ target: C, title: i, subtitle: s, children: o }) =>
          (0, t.jsxs)(j.g, {
            target: C,
            style: { zIndex: 1700 },
            className: v().EmoticonHover,
            children: [
              o,
              (0, t.jsxs)("div", {
                className: v().Info,
                children: [
                  (0, t.jsx)("div", {
                    className: v().Name,
                    children: i || (0, t.jsx)("span", { children: "\xA0" }),
                  }),
                  (0, t.jsx)("div", {
                    className: v().AppName,
                    children: s || (0, t.jsx)("span", { children: "\xA0" }),
                  }),
                ],
              }),
            ],
          });
      },
      75975: (Q, z, n) => {
        "use strict";
        n.d(z, { nl: () => c, rf: () => F });
        var t = n(7850),
          I = n(36118),
          j = n(56718),
          a = n(3166);
        function O() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function R(_) {
          var P;
          const U = (P = _.filled) != null ? P : !0;
          return useInGamepadUI()
            ? U
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function l(_) {
          var P;
          const U = (P = _.filled) != null ? P : !0;
          return useInGamepadUI()
            ? U
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function r() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function h(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Checkmark, { ..._ })
            : jsx(SVG.Check, { ..._ });
        }
        function S() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function y() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function v(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function d() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function g() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function w(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function G(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: _.className });
        }
        function K(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: _.className });
        }
        function M(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: _.className })
            : jsx(SVG.CommentThread, { className: _.className });
        }
        function T() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function C() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function i() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function s() {
          return jsx(GamepadSVG.Globe, {});
        }
        function o() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function m() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function B() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function A() {
          return jsx(GamepadSVG.Add, {});
        }
        function x() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function F() {
          return (0, t.jsx)(I.rfv, {});
        }
        function c() {
          return (0, a.Qn)() ? (0, t.jsx)(j.nl, {}) : (0, t.jsx)(I.jZW, {});
        }
      },
      13465: (Q, z, n) => {
        "use strict";
        n.d(z, { c: () => j });
        var t = n(7850),
          I = n(90626);
        function j(a) {
          const {
              rgSources: O,
              onIncrementalError: R,
              onError: l,
              strAltText: r,
              ref: h,
              ...S
            } = a,
            [y, v] = I.useState(0),
            d = I.useMemo(() => JSON.stringify(O), [O]),
            [g, w] = I.useState(d);
          g != d && (w(d), v(0));
          const G = I.useMemo(() => {
              let T = "";
              return (
                O && O.length > y && (T = O[y]),
                T ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    a,
                    y,
                  ),
                  (T =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                T
              );
            }, [O, y, a]),
            K = I.useCallback(
              (T) => {
                R == null || R(T, O[y], y);
                const C = y + 1;
                C >= O.length && l && l(T), C < O.length && v(C);
              },
              [y, l, R, O],
            ),
            M = I.useRef(null);
          return (
            I.useImperativeHandle(
              h,
              () => ({ imgRef: M, nSourceIndex: y, nSourceLength: O.length }),
              [M, y, O],
            ),
            I.useEffect(() => {
              const T = M.current;
              T != null && T.complete && T.naturalWidth == 0 && (T.src = T.src);
            }, []),
            (0, t.jsx)("img", { ref: M, ...S, src: G, onError: K, alt: r }, g)
          );
        }
      },
      32608: (Q, z, n) => {
        "use strict";
        n.d(z, { N1: () => B, VC: () => i, fm: () => F, gZ: () => A });
        var t = n(7850),
          I = n(90626),
          j = n(41635),
          a = n(54963),
          O = n(36707),
          R = n(85599),
          l = n(1123),
          r = n(18210),
          h = n(37589),
          S = n(18938),
          y = n(2259),
          v = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          g = (c, _, P) =>
            _ in c
              ? v(c, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: P,
                })
              : (c[_] = P),
          w = (c, _, P, U) => {
            for (
              var W = U > 1 ? void 0 : U ? d(_, P) : _, V = c.length - 1, $;
              V >= 0;
              V--
            )
              ($ = c[V]) && (W = (U ? $(_, P, W) : $(W)) || W);
            return U && W && v(_, P, W), W;
          },
          G = (c, _, P) => g(c, typeof _ != "symbol" ? _ + "" : _, P),
          K = ((c) => (
            (c[(c.NotLoaded = 0)] = "NotLoaded"),
            (c[(c.Loading = 1)] = "Loading"),
            (c[(c.Loaded = 2)] = "Loaded"),
            c
          ))(K || {});
        let M = 0,
          T = [];
        function C(c) {
          var _;
          if (M == 2) {
            c && c();
            return;
          }
          if (M == 0) {
            let P = document.createElement("script");
            P.src = "https://www.youtube.com/iframe_api";
            let U = document.getElementsByTagName("script")[0];
            (_ = U.parentNode) == null || _.insertBefore(P, U),
              (window.onYouTubeIframeAPIReady = o);
          }
          c && (T.includes(c) || T.push(c));
        }
        function i(c = !0) {
          const _ = (0, l.Rp)("youtube");
          (0, I.useEffect)(() => {
            _ && c && C();
          }, [_, c]);
        }
        function s(c) {
          j.x9(T, c);
        }
        function o() {
          M = 2;
          for (let c of T) c();
          T = [];
        }
        const m = class At extends I.Component {
          constructor(_) {
            super(_),
              G(this, "m_strPlayerID", ""),
              G(this, "m_player", null),
              G(this, "m_playerContainer", null),
              G(this, "m_bPlayerReady", !1),
              (this.m_strPlayerID = "YoutubePlayer_" + At.s_nPlayerIndex++),
              (this.state = { bYoutubeLoaded: !1 });
          }
          componentWillUnmount() {
            this.DestroyPlayer(), s(this.OnYoutubeScriptsReady);
          }
          shouldComponentUpdate(_, P) {
            if (!this.m_player) return !1;
            const U = this.props;
            return U.autoplay != _.autoplay ||
              U.controls != _.controls ||
              U.showInfo != _.showInfo ||
              U.video != _.video
              ? (this.CreatePlayer(_), !1)
              : ((U.width != _.width || U.height != _.height) &&
                  this.m_bPlayerReady &&
                  _.width &&
                  _.height &&
                  this.m_player.setSize(_.width, _.height),
                U.forcePause != _.forcePause);
          }
          componentDidUpdate(_) {
            _.forcePause != this.props.forcePause && this.ApplyForcePause();
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
          BindPlayerContainer(_) {
            !_ ||
              this.m_playerContainer == _ ||
              ((this.m_playerContainer = _),
              this.DestroyPlayer(),
              C(this.OnYoutubeScriptsReady));
          }
          OnYoutubeScriptsReady() {
            this.CreatePlayer(this.props);
          }
          CreatePlayer(_) {
            if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
            const P = _.autoplay === !1 ? 0 : 1,
              U = _.showInfo === !0 ? 1 : 0,
              W = _.controls === !0 ? 1 : 0,
              V = _.showFullscreenBtn === !0 ? 1 : 0,
              $ = _.playsInline === !0 ? 1 : 0;
            let J = {
                width: _.width !== void 0 ? String(_.width) : void 0,
                height: _.height !== void 0 ? String(_.height) : void 0,
                videoId: _.video,
                host: "https://www.youtube-nocookie.com",
                playerVars: {
                  autoplay: P,
                  showinfo: U,
                  autohide: 1,
                  fs: V,
                  modestbranding: 1,
                  rel: 0,
                  playsinline: $,
                  iv_load_policy: 3,
                  controls: W,
                  start: _.startSeconds,
                },
                events: {
                  onReady: this.OnPlayerReady,
                  onStateChange: this.OnPlayerStateChange,
                  onError: this.OnError,
                },
              },
              se = this.m_playerContainer.firstElementChild;
            (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(se, J));
          }
          OnPlayerReady(_) {
            var P, U;
            if (
              ((this.m_bPlayerReady = !0),
              this.props.onVideoInfoChanged && this.m_player)
            ) {
              let W = this.m_player.getVideoData(),
                V = { strAuthor: "", strTitle: "", strVideoID: "" };
              W.author && (V.strAuthor = W.author),
                W.title && (V.strTitle = W.title),
                W.video_id && (V.strVideoID = W.video_id),
                this.props.onVideoInfoChanged(V);
            }
            this.props.width &&
              this.props.height &&
              ((P = this.m_player) == null ||
                P.setSize(this.props.width, this.props.height)),
              this.props.forcePause
                ? this.ApplyForcePause()
                : this.props.autoplay &&
                  ((U = this.m_player) == null || U.playVideo()),
              this.props.onPlayerReady && this.props.onPlayerReady();
          }
          OnPlayerStateChange(_) {
            switch (_.data) {
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
          OnError(_) {
            console.log("Youtube: Playback failed", _),
              this.props.onError && this.props.onError(_);
          }
          OnPlayerLeftView() {
            this.props.autopause &&
              this.m_player &&
              this.m_bPlayerReady &&
              this.m_player.pauseVideo();
          }
          PlayVideo(_) {
            this.m_player &&
              this.m_bPlayerReady &&
              (_ && this.m_player.seekTo(0, !0), this.m_player.playVideo());
          }
          render() {
            return (0, t.jsx)(A, {
              video: this.props.video,
              children: (0, t.jsx)(
                h.j,
                {
                  onLeave: this.props.autopause
                    ? this.OnPlayerLeftView
                    : void 0,
                  ref: this.BindPlayerContainer,
                  className: (0, O.A)("YoutubePlayer", this.props.classnames),
                  children: (0, t.jsx)(R.t, {
                    className: "YoutubePlayerThrobber",
                  }),
                },
                this.m_strPlayerID,
              ),
            });
          }
        };
        G(m, "s_nPlayerIndex", 0),
          w([a.oI], m.prototype, "BindPlayerContainer", 1),
          w([a.oI], m.prototype, "OnYoutubeScriptsReady", 1),
          w([a.oI], m.prototype, "CreatePlayer", 1),
          w([a.oI], m.prototype, "OnPlayerReady", 1),
          w([a.oI], m.prototype, "OnPlayerStateChange", 1),
          w([a.oI], m.prototype, "OnError", 1),
          w([a.oI], m.prototype, "OnPlayerLeftView", 1),
          w([a.oI], m.prototype, "PlayVideo", 1);
        let B = m;
        function A(c) {
          const { video: _, children: P } = c;
          return (0, l.Rp)("youtube")
            ? P
            : (0, t.jsx)("a", {
                href: `https://www.youtube.com/watch?v=${_}`,
                children: (0, r.we)("#EventCalendar_WatchYouTubeVideo"),
              });
        }
        function x(c) {
          const _ = new URLSearchParams({
            autoplay: c.autoplay ? "1" : "0",
            controls: c.controls ? "1" : "0",
            fs: c.showFullscreenBtn ? "1" : "0",
            playsinline: c.playsInline ? "1" : "0",
            rel: "0",
            iv_load_policy: "3",
            modestbranding: "1",
            enablejsapi: "1",
          });
          return (
            c.startSeconds && _.set("start", String(c.startSeconds)),
            `https://www.youtube-nocookie.com/embed/${encodeURIComponent(c.video)}?${_.toString()}`
          );
        }
        function F(c) {
          const { video: _, autopause: P, className: U } = c,
            W = I.useRef(null),
            V = I.useRef(null),
            $ = I.useCallback(() => {
              var q;
              return (q = W.current) == null ? void 0 : q.pauseVideo();
            }, []),
            J = (0, y.OO)({ onLeave: P ? $ : void 0 }),
            se = (0, S.Ue)(V, J);
          return (
            I.useEffect(() => {
              const q = () => {
                V.current && (W.current = new YT.Player(V.current, {}));
              };
              return (
                P && C(q),
                () => {
                  s(q), (W.current = null);
                }
              );
            }, [P]),
            (0, t.jsx)("iframe", {
              ref: se,
              className: U,
              src: x(c),
              title: _,
              allow: "autoplay; encrypted-media; picture-in-picture; web-share",
              allowFullScreen: !0,
              frameBorder: 0,
            })
          );
        }
      },
      19730: (Q, z, n) => {
        "use strict";
        n.d(z, { Dq: () => O, dm: () => a });
        var t = n(84346),
          I = n(39905);
        function j(l, r) {
          const h = r.bUseBinary1K ? 1024 : 1e3,
            S = h * h,
            y = S * h,
            v = y * h;
          return l > v
            ? { nNum: l / v, strPrefix: "Tera" }
            : l > y
              ? { nNum: l / y, strPrefix: "Giga" }
              : l > S
                ? { nNum: l / S, strPrefix: "Mega" }
                : l > h
                  ? { nNum: l / h, strPrefix: "Kilo" }
                  : { nNum: l, strPrefix: "" };
        }
        function a(l, r, h, S) {
          let y = r;
          typeof y == "number"
            ? (y = {
                nDigitsAfterDecimal: r,
                bUseBinary1K: h || h === void 0,
                bValueIsInBytes: !S,
                bValueIsRate: S,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (y = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...y,
              });
          const { nNum: v, strPrefix: d } = j(l, y),
            g = `#${d}${y.bValueIsInBytes ? "bytes" : "bits"}${y.bValueIsRate ? "_PerSecond" : ""}`;
          return I.Z.Localize(
            g,
            v.toLocaleString((0, t.J)(), {
              minimumFractionDigits: y.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: y.nDigitsAfterDecimal,
            }),
          );
        }
        function O(l, r = 0) {
          let h;
          return (
            r && (h = { maximumFractionDigits: r }),
            l ? l.toLocaleString((0, t.J)(), h) : "" + l
          );
        }
        function R(l) {
          return l > 1e9
            ? Math.trunc(l / 1e9).toString() + "B"
            : l > 1e6
              ? Math.trunc(l / 1e6).toString() + "M"
              : l > 1e3
                ? Math.trunc(l / 1e3).toString() + "K"
                : l.toString();
        }
      },
      33645: (Q) => {
        Q.exports = {
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
      11748: (Q) => {
        Q.exports = {
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
      31587: (Q) => {
        Q.exports = {
          PreviewYouTubeVideo: "uT9FPw-RIxscziWGUKvsY",
          sizeThumb: "_34JfgvTZH0JwSWKnwpT5tf",
          sizeFull: "_2i-wrmaduZQDwFtlSpRG5b",
          PlaceholderImg: "wJ2r7A6UK2WbDVoNBgd36",
          floatLeft: "_3uqwDPu50ujydI4AiMemeN",
          floatRight: "_29hzTH-jljX8p2qXboZbXW",
        };
      },
      19418: (Q) => {
        Q.exports = {
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
          BackgroundAnimation: "NB2T8xbO5KSdw1jQWC0aq",
          "ItemFocusAnim-darkerGrey-nocolor": "_1tzknOYTl338bweAg8VM66",
          "ItemFocusAnim-darkerGrey": "_321Bw1yIABWsLJup9W__Gb",
          "ItemFocusAnim-darkGreySettings": "BSoZ5uHW-lcSEjyeNZol4",
          "ItemFocusAnim-darkGrey": "_3Xhw1BWpHpkagZqxZOv8kb",
          "ItemFocusAnim-grey": "_2OnCF3hKjr89wU_tfFaWX2",
          "ItemFocusAnim-translucent-white-10": "_2uQtLVYFAkVIQ8Mzm6C5K3",
          "ItemFocusAnim-translucent-white-20": "_2vYgLWggR0AEuxE9DPEEk2",
          "ItemFocusAnimBorder-darkGrey": "PgPnyLUdsSEfTVdlxX2a9",
          "ItemFocusAnim-green": "_26b32AeDG8ENv_LcSS6SPE",
          focusAnimation: "NrCY5qgGbXyh_LeVWegvW",
          hoverAnimation: "ECWcgkTWpWeZLs6-rszlL",
        };
      },
      90024: (Q) => {
        Q.exports = {
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
      42060: (Q) => {
        Q.exports = {
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9139],
  {
    42060: (e) => {
      e.exports = {
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
    3246: (e) => {
      e.exports = {
        SpeakerOuter: "_3rRqPJdGrYx9YMtQMciIFY",
        Speaker: "_3F7-FkJu8-JstT7SouP8XJ",
        SpeakerPopup: "_3y7kVhhGmtbSgbZdte0EuV",
        SpeakerInfoOuter: "_1NC9nn23Pdd7FtZW6zM7he",
        SpeakerInfoInner: "_1bMpEcCbkVkKo1Oc02WFoJ",
        SpeakerTitle: "_2Vo0lUG19xIopljkxhtSod",
        SpeakerBio: "_2yP7s2N28D9PFHs9yUr3jD",
        SpeakerHover: "_16UyHpAXG98qQsfN8mBk3x",
      };
    },
    42780: (e, t, n) => {
      "use strict";
      n.d(t, { K0: () => s, OJ: () => i, R8: () => a });
      var r = n(81393),
        o = n(90626);
      class a {
        reactNodes = [];
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
      class s {
        m_decoratedAccumulator;
        constructor(e) {
          (0, r.wT)(e, "decorated accumulator cannot be null"),
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
      class i extends s {
        m_nStartCursor = 1;
        constructor(e, t, n) {
          super(e), (this.m_nStartCursor = void 0 !== t ? t : 1);
        }
        AppendText(e) {
          let t = e;
          const n = [];
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
    99376: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => m });
      var r,
        o = n(22837),
        a = n(90626),
        s = n(42780);
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.TEXT = 1)] = "TEXT"),
          (e[(e.OPENTAG = 2)] = "OPENTAG"),
          (e[(e.CLOSETAG = 3)] = "CLOSETAG");
      })(r || (r = {}));
      class i {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !0) {
          const o = (function (e, t) {
            const n = [];
            let o = { type: r.UNKNOWN, text: "" },
              a = !1,
              s = !1,
              i = !1;
            for (let m = 0; m < e.length; m++) {
              const p = e[m];
              switch (o.type) {
                case r.UNKNOWN:
                  "[" == p
                    ? ((o.type = r.OPENTAG), (s = !0))
                    : ((o.type = r.TEXT),
                      "\\" == p && t ? (a = !a) : (o.text += p));
                  break;
                case r.OPENTAG:
                case r.CLOSETAG:
                  if ("/" == p && s)
                    (o.type = r.CLOSETAG), (o.text = ""), (s = !1);
                  else if ("[" != p || a)
                    if ("]" != p || a)
                      "\\" == p && t
                        ? ((o.text += p), (a = !a), (s = !1))
                        : ((o.text += p), (a = !1), (s = !1));
                    else {
                      const e =
                          o.type == r.OPENTAG &&
                          "noparse" == o.text?.toLocaleLowerCase(),
                        t =
                          o.type == r.CLOSETAG &&
                          "noparse" == o.text?.toLocaleLowerCase();
                      s || (i && !t)
                        ? ((o = c(o)), (o.text += p))
                        : e
                          ? (i = !0)
                          : t && (i = !1),
                        (o = l(n, o)),
                        (s = !1);
                    }
                  else (o = l(n, c(o), r.OPENTAG)), (s = !0);
                  break;
                case r.TEXT:
                  "[" != p || a
                    ? "\\" == p && t
                      ? (a && (o.text += p), (a = !a))
                      : ((o.text += p), (a = !1))
                    : ((o = l(n, o, r.OPENTAG)), (s = !0));
              }
            }
            o.type != r.UNKNOWN &&
              (o.type == r.OPENTAG || o.type == r.CLOSETAG
                ? n.push(c(o))
                : n.push({ type: o.type, text: o.text ?? "" }));
            return n;
          })(e || "", n);
          return this.Parse_BuildElements(o, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const o = [],
            a = () => (o.length < 1 ? void 0 : o[o.length - 1]),
            s = this.m_dictComponents,
            i = (e) => !(!e.tag || !s.get(e.tag)?.autocloses);
          let l = !1,
            c = !0;
          const m = (e, r) => {
            if (e && e.node.tag === r.text && s.get(e.node.tag)) {
              const r = s.get(e.node.tag),
                o = {
                  tagname: e.node.tag,
                  args: e.node.args,
                  rawargs: e.node.rawargs,
                },
                a = t(r.Constructor, o, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(a)
                  ? a.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(a),
                (l = !!r.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + r.text + "]", !1),
                (n = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (e.type == r.TEXT) {
                const t = l ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, c), (l = !1);
              } else if (e.type == r.OPENTAG) {
                const t = s.get(e.tag);
                if (t) {
                  const r = a();
                  if (void 0 !== r) {
                    const t = s.get(r.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === r.node.tag &&
                      m(o.pop(), r.node);
                  }
                  o.push({ accumulator: n, node: e, bWrapTextForCopying: c }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (l = !!t.skipInternalNewline),
                    (c = t.allowWrapTextForCopying ?? !1);
                } else n.AppendText("[" + e.text + "]", 0 == o.length);
              } else if (e.type == r.CLOSETAG) {
                for (; a() && a().node.tag !== e.text && i(a().node); ) {
                  const e = o.pop();
                  m(e, e.node);
                }
                if (a()?.node.tag == e.text) {
                  const t = o.pop();
                  m(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == o.length);
              }
            });
            o.length > 0;
          ) {
            const e = o.pop();
            m(e, e.node);
          }
          return n.GetElements();
        }
      }
      function l(e, t, n = r.UNKNOWN) {
        const { type: o, text: a = "" } = t;
        if (o == r.OPENTAG) {
          let t = a.indexOf("=");
          const n = a.indexOf(" ");
          let r, s;
          -1 != n && (-1 == t || n < t) && (t = n);
          let i = "";
          t > 0
            ? ((r = a.substr(0, t).toLocaleLowerCase()),
              (i = a.substr(t)),
              (s = (function (e) {
                if (!e || e.length < 1) return {};
                const t = {};
                let n,
                  r = "",
                  o = "";
                !(function (e) {
                  (e[(e.PRE_NAME = 0)] = "PRE_NAME"),
                    (e[(e.IN_NAME = 1)] = "IN_NAME"),
                    (e[(e.POST_NAME = 2)] = "POST_NAME"),
                    (e[(e.IN_VALUE = 3)] = "IN_VALUE"),
                    (e[(e.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
                })(n || (n = {}));
                let a = n.PRE_NAME,
                  s = 0;
                "=" == e[0] && (a = n.POST_NAME);
                let i = !1;
                for (s++; s < e.length; s++) {
                  const l = e[s];
                  let c = !0,
                    m = !1;
                  switch (a) {
                    case n.PRE_NAME:
                      if ("=" == l) return {};
                      if (" " == l) continue;
                      a = n.IN_NAME;
                      break;
                    case n.IN_NAME:
                      ("=" != l && " " != l) ||
                        i ||
                        (" " == l
                          ? ((a = n.PRE_NAME), (m = !0))
                          : (a = n.POST_NAME),
                        (c = !1));
                      break;
                    case n.POST_NAME:
                      " " == l
                        ? ((a = n.PRE_NAME), (c = !1), (m = !0))
                        : '"' == l
                          ? ((a = n.IN_QUOTED_VALUE), (c = !1))
                          : (a = n.IN_VALUE);
                      break;
                    case n.IN_VALUE:
                    case n.IN_QUOTED_VALUE:
                      ((" " == l && a != n.IN_QUOTED_VALUE && !i) ||
                        ('"' == l && a == n.IN_QUOTED_VALUE && !i)) &&
                        ((a = n.PRE_NAME), (c = !1), (m = !0));
                  }
                  if (c)
                    if ("\\" != l || i)
                      if (((i = !1), a == n.IN_NAME)) r += l;
                      else {
                        if (a != n.IN_VALUE && a != n.IN_QUOTED_VALUE)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + a,
                          );
                        o += l;
                      }
                    else i = !0;
                  m && ((t[r] = o), (r = ""), (o = ""));
                }
                a != n.PRE_NAME && (t[r] = o);
                return t;
              })(i)))
            : ((s = {}), (r = a.toLocaleLowerCase())),
            e.push({ type: o, text: a, tag: r, args: s, rawargs: i });
        } else o != r.UNKNOWN && e.push({ type: o, text: a });
        return { type: n, text: "" };
      }
      function c(e) {
        let t = "";
        return (
          e.type == r.CLOSETAG ? (t = "[/") : e.type == r.OPENTAG && (t = "["),
          { type: r.TEXT, text: t + (e.text ?? "") }
        );
      }
      class m extends i {
        m_renderingLanguage;
        constructor(e, t, n) {
          super(e, t ?? (() => new s.R8())),
            (this.m_renderingLanguage =
              "string" == typeof n ? (0, o.sf)(n) : n);
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e;
        }
        ParseBBCode(e, t, n = !0) {
          let r = 0;
          const o = this.Parse(
            e,
            (e, n, ...o) =>
              a.createElement(
                e,
                {
                  ...n,
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + r++,
                },
                ...o,
              ),
            n,
          );
          return o.length > 1
            ? a.createElement(a.Fragment, null, ...o)
            : 1 == o.length
              ? o[0]
              : null;
        }
      }
    },
    73022: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => h, h: () => u });
      var r = n(34629),
        o = n(41735),
        a = n.n(o),
        s = n(90626),
        i = n(37085),
        l = n(68797),
        c = n(6144),
        m = n(84933),
        p = n(78327);
      class d {
        m_mapRegistrations = new Map();
        m_mapLoadPromises = new Map();
        m_mapCreatePromises = new Map();
        m_listChangeCallback = new Map();
        GetRegistration(e) {
          return this.m_mapRegistrations.get(e);
        }
        GetRegistrationChangeCallback(e) {
          return (
            this.m_listChangeCallback.has(e) ||
              this.m_listChangeCallback.set(e, new c.lu()),
            this.m_listChangeCallback.get(e)
          );
        }
        async LoadRegistration(e) {
          return (
            this.m_mapLoadPromises.has(e) ||
              this.m_mapLoadPromises.set(e, this.InternalLoadRegistration(e)),
            this.m_mapLoadPromises.get(e)
          );
        }
        async InternalLoadRegistration(e) {
          let t = null;
          try {
            const n =
                p.TS.STORE_BASE_URL +
                "saleaction/ajaxgetusergiveawayregistration",
              r = { giveaway_name: e, sessionid: p.TS.SESSIONID },
              o = await a().get(n, { params: r, withCredentials: !0 });
            if (
              200 == o?.status &&
              o?.data?.success == i.d.k_EResultOK &&
              o?.data?.registration
            )
              return (
                this.m_mapRegistrations.set(e, o?.data?.registration),
                this.GetRegistrationChangeCallback(e).Dispatch(
                  o?.data?.registration,
                ),
                o?.data?.registration
              );
            t = (0, l.H)(o);
          } catch (e) {
            t = (0, l.H)(e);
          }
          return (
            console.error(
              "CGiveawayRegistrationStore.InternalLoadRegistration failed: on giveawayName " +
                e +
                " error: " +
                t?.strErrorMsg,
              t,
            ),
            { registered: !1 }
          );
        }
        CreateRegistration(e) {
          return (
            this.m_mapCreatePromises.has(e) ||
              this.m_mapCreatePromises.set(
                e,
                this.InternalCreateRegistration(e),
              ),
            this.m_mapCreatePromises.get(e)
          );
        }
        async InternalCreateRegistration(e) {
          let t = null;
          try {
            const n =
                p.TS.STORE_BASE_URL +
                "saleaction/ajaxupdateusergiveawayregistration",
              r = { giveaway_name: e, sessionid: p.TS.SESSIONID },
              o = await a().get(n, { params: r, withCredentials: !0 });
            if (
              200 == o?.status &&
              o?.data?.success == i.d.k_EResultOK &&
              o?.data?.registration
            )
              return (
                this.m_mapRegistrations.set(e, o?.data?.registration),
                this.GetRegistrationChangeCallback(e).Dispatch(
                  o?.data?.registration,
                ),
                o?.data?.registration
              );
            t = (0, l.H)(o);
          } catch (e) {
            t = (0, l.H)(e);
          }
          return (
            console.error(
              "CGiveawayRegistrationStore.InternalCreateRegistration failed: on giveawayName " +
                e +
                " error: " +
                t?.strErrorMsg,
              t,
            ),
            { registered: !1 }
          );
        }
        static s_Singleton;
        static Get() {
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              d.s_Singleton.Init(),
              "dev" == p.TS.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        constructor() {}
        Init() {}
      }
      function u(e) {
        const [t, n] = (0, s.useState)(d.Get().GetRegistration(e));
        return (
          (0, s.useEffect)(() => {
            void 0 === t && d.Get().LoadRegistration(e).then(n);
          }, [e, t]),
          (0, m.hL)(d.Get().GetRegistrationChangeCallback(e), n),
          t
        );
      }
      function h() {
        return { fnCreateRegistration: d.Get().CreateRegistration };
      }
      (0, r.Cg)([m.oI], d.prototype, "CreateRegistration", null);
    },
    23649: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => l });
      var r = n(99376),
        o = n(90626),
        a = n(59952),
        s = n(42780);
      function i(e) {
        return new s.OJ(new s.R8(), 0);
      }
      function l(e) {
        const { text: t, languageOverride: n } = e,
          [s] = (0, o.useState)(
            new r.B(new Map([...Array.from(a.W4.entries())]), i, n),
          );
        return o.createElement(o.Fragment, null, s.ParseBBCode(t, {}));
      }
    },
    81962: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => u, c: () => g });
      var r = n(90626),
        o = n(6336),
        a = n(30193);
      function s(e) {
        const { text: t = "", style: n, children: o } = e;
        if (null == t) return r.createElement(r.Fragment, null, o);
        let a;
        if (
          ((a =
            t instanceof Array
              ? t
                  .map((e) => (e ? e.toString() : ""))
                  .filter((e) => e.length > 0)
                  .join("\n")
              : t.toString()),
          1 == r.Children.count(o))
        ) {
          let e = r.Children.only(o);
          return r.cloneElement(e, { "data-copystyle": n, "data-copytext": a });
        }
        return (
          console.log(
            `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${n} copytext=${a}`,
          ),
          r.createElement(r.Fragment, null, o)
        );
      }
      var i = n(52038),
        l = n(42060),
        c = n.n(l),
        m = n(86927),
        p = n(20194),
        d = n(30470);
      function u(e) {
        const { emoticon: t, large: n } = e,
          [o, l] = (0, m.OP)(),
          [p, d] = r.useState(),
          u = `:${t}:`,
          g = a.pN.GetEmoticonURL(t, n);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            s,
            { text: u, style: "merge-adjacent" },
            r.createElement("img", {
              ...l,
              src: g,
              className: (0, i.A)(c().emoticon, n ? c().large : void 0),
              "data-emoticon": t,
              alt: t,
              ref: d,
            }),
          ),
          o && r.createElement(h, { target: p, emoticon: t }),
        );
      }
      function h(e) {
        const { target: t, emoticon: n } = e,
          { data: o } = (function (e) {
            return (0, p.I)({
              queryKey: ["EmoticonHover", e],
              queryFn: async () => {
                const t = `${d.TS.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(d.TS.LANGUAGE)}&origin=${self.origin}`,
                  n = await fetch(t);
                if (200 != n.status)
                  throw `Error fetching emoticon: ${n.status} ${n.statusText}`;
                return await n.json();
              },
            });
          })(n);
        return r.createElement(
          g,
          {
            target: t,
            title: `:${n}:`,
            subtitle: o && o.app_name ? o.app_name : void 0,
          },
          r.createElement(u, { emoticon: n, large: !0 }),
        );
      }
      const g = ({ target: e, title: t, subtitle: n, children: a }) =>
        r.createElement(
          o.g,
          { target: e, style: { zIndex: 1700 }, className: c().EmoticonHover },
          a,
          r.createElement(
            "div",
            { className: c().Info },
            r.createElement(
              "div",
              { className: c().Name },
              t || r.createElement("span", null, " "),
            ),
            r.createElement(
              "div",
              { className: c().AppName },
              n || r.createElement("span", null, " "),
            ),
          ),
        );
    },
    48079: (e, t, n) => {
      "use strict";
      n.d(t, { $k: () => g, S8: () => _, fI: () => E });
      var r = n(34629),
        o = n(75844),
        a = n(90626),
        s = n(59952),
        i = n(22837),
        l = n(49771),
        c = n(6336),
        m = (n(32754), n(84933)),
        p = n(78327),
        d = n(23649),
        u = n(3246),
        h = n.n(u);
      const g = (0, o.PA)((e) => {
        const t = (0, s.z5)(e.photo, (0, i.sf)(p.TS.LANGUAGE)),
          n = t ? ("string" == typeof t ? t : t[1]) : null,
          r = Boolean(e.title),
          o = Boolean(e.company);
        return a.createElement(
          "div",
          { className: h().SpeakerPopup, onMouseLeave: e.fnClose },
          a.createElement(
            "div",
            { className: h().SpeakerInfoOuter },
            e.photo && a.createElement("img", { src: n }),
            a.createElement(
              "div",
              { className: h().SpeakerInfoInner },
              a.createElement("div", null, e.name),
              (r || o) &&
                a.createElement(
                  "div",
                  null,
                  r &&
                    a.createElement(
                      "span",
                      { className: h().SpeakerTitle },
                      e.title,
                    ),
                  r && o && a.createElement("span", null, ", "),
                  o && a.createElement("span", null, e.company),
                ),
            ),
          ),
          e.bio &&
            a.createElement(
              "div",
              { className: h().SpeakerBio },
              e.bio,
              e.bioString && a.createElement(d.h, { text: e.bioString }),
            ),
        );
      });
      class E extends a.Component {
        static sm_embeddedElements = new l.MX(
          "presenter-hover-source-elements",
        );
        m_refAnchor = a.createRef();
        m_fnHidePopup;
        m_nScrollPosAtHoverStart;
        ClosePopup() {
          this.m_fnHidePopup &&
            (this.m_fnHidePopup(),
            (this.m_fnHidePopup = null),
            window.removeEventListener("scroll", this.OnScroll));
        }
        componentWillUnmount() {
          this.ClosePopup();
        }
        OnScroll() {
          Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
            this.ClosePopup();
        }
        OnHover(e) {
          const t = this.m_refAnchor.current;
          if (!t) return;
          const n = {
              direction: "right",
              bEnablePointerEvents: !0,
              style: { maxWidth: 640, minHeight: t.clientHeight },
              target: t,
            },
            r = "presenter-hover-" + Math.floor(1e8 * Math.random());
          (this.m_fnHidePopup = () =>
            E.sm_embeddedElements.HideElement(t.ownerDocument, r)),
            window.addEventListener("scroll", this.OnScroll),
            (this.m_nScrollPosAtHoverStart = window.scrollY);
          E.sm_embeddedElements.ShowElementDelayed(
            t.ownerDocument,
            150,
            a.createElement(
              c.g,
              { ...n },
              a.createElement(g, { ...this.props, fnClose: this.OnLeave }),
            ),
            r,
          );
        }
        OnLeave(e) {
          this.ClosePopup();
        }
        render() {
          return a.createElement(
            "div",
            {
              className: h().SpeakerHover,
              ref: this.m_refAnchor,
              onMouseEnter: this.OnHover,
              onFocus: this.OnHover,
              onMouseLeave: this.OnLeave,
              onBlur: this.OnLeave,
            },
            this.props.children,
          );
        }
      }
      function _(e) {
        const {
            photo: t,
            name: n,
            title: r,
            company: o,
            hidePhotoInCompactView: l,
          } = e,
          c = (0, s.z5)(t, (0, i.sf)(p.TS.LANGUAGE)),
          m = c && !l ? ("string" == typeof c ? c : c[1]) : null,
          d = Boolean(r),
          u = Boolean(o);
        return a.createElement(
          "div",
          { className: h().SpeakerOuter },
          a.createElement(
            E,
            { ...e },
            a.createElement(
              "div",
              { className: h().Speaker },
              a.createElement(
                "div",
                { className: h().SpeakerInfoOuter },
                !!m && a.createElement("img", { src: m }),
                a.createElement(
                  "div",
                  { className: h().SpeakerInfoInner },
                  a.createElement("div", null, n),
                  (d || u) &&
                    a.createElement(
                      "div",
                      null,
                      d &&
                        a.createElement(
                          "span",
                          { className: h().SpeakerTitle },
                          r,
                        ),
                      d && u && a.createElement("span", null, ", "),
                      u && a.createElement("span", null, o),
                    ),
                ),
              ),
            ),
          ),
        );
      }
      (0, r.Cg)([m.oI], E.prototype, "ClosePopup", null),
        (0, r.Cg)([m.oI], E.prototype, "OnScroll", null),
        (0, r.Cg)([m.oI], E.prototype, "OnHover", null),
        (0, r.Cg)([m.oI], E.prototype, "OnLeave", null);
    },
    96236: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => l });
      var r = n(34629),
        o = n(90626),
        a = n(84933),
        s = n(60383),
        i = n(76217);
      class l extends o.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = o.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let n = 0,
            r = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((n = e.width), (r = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: n,
            nPrevRenderHeight: r,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: e,
              placeholderHeight: t,
              holdGampadFocus: n,
              onRender: r,
              style: a,
              mode: l,
              ...c
            } = this.props,
            m = this.state.bRenderChildren;
          let p = a;
          if (!m) {
            const n = this.state.nPrevRenderWidth || e,
              r = this.state.nPrevRenderHeight || t;
            (void 0 === r && void 0 === n) ||
              (p = { ...a, minHeight: r, minWidth: n });
          }
          const d = this.BLoadAndUnload() ? "repeated" : "once";
          let u = o.createElement(
            s.J,
            {
              ref: this.m_refContainer,
              style: p,
              ...c,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: d,
            },
            m && this.props.children,
          );
          return (
            n && (u = o.createElement(i.Z, { focusableIfEmpty: !0 }, u)), u
          );
        }
      }
      (0, r.Cg)([a.oI], l.prototype, "OnVisibilityChange", null);
    },
  },
]);

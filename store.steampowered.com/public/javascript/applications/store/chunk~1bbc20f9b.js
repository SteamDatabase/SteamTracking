/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9105],
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
      n.d(t, { B: () => c });
      var r = n(22837),
        o = n(90626),
        a = n(42780);
      class s {
        type = 0;
        text = "";
        tag;
        args;
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class i {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !1) {
          const r = (function (e, t) {
            const n = [];
            let r = new s(),
              o = !1,
              a = !1,
              i = !1;
            for (let s = 0; s < e.length; s++) {
              const c = e[s];
              switch (r.type) {
                case 0:
                  "[" == c
                    ? ((r.type = 2), (a = !0))
                    : ((r.type = 1), "\\" == c && t ? (o = !o) : (r.text += c));
                  break;
                case 2:
                case 3:
                  if ("/" == c && a) (r.type = 3), (r.text = ""), (a = !1);
                  else if ("[" != c || o)
                    if ("]" != c || o)
                      "\\" == c && t
                        ? ((r.text += c), (o = !o), (a = !1))
                        : ((r.text += c), (o = !1), (a = !1));
                    else {
                      const e =
                          2 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase(),
                        t =
                          3 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase();
                      a || (i && !t)
                        ? (r.ConvertMalformedNodeToText(), (r.text += c))
                        : e
                          ? (i = !0)
                          : t && (i = !1),
                        (r = l(n, r)),
                        (a = !1);
                    }
                  else
                    r.ConvertMalformedNodeToText(), (r = l(n, r, 2)), (a = !0);
                  break;
                case 1:
                  "[" != c || o
                    ? "\\" == c && t
                      ? (o && (r.text += c), (o = !o))
                      : ((r.text += c), (o = !1))
                    : ((r = l(n, r, 2)), (a = !0));
              }
            }
            0 != r.type &&
              ((2 != r.type && 3 != r.type) || r.ConvertMalformedNodeToText(),
              n.push(r));
            return n;
          })(e || "", n);
          return this.Parse_BuildElements(r, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const r = [],
            o = () => (r.length < 1 ? void 0 : r[r.length - 1]),
            a = this.m_dictComponents,
            s = (e) => !(!e.tag || !a.get(e.tag)?.autocloses);
          let i = !1,
            l = !0;
          const c = (e, o) => {
            if (e && e.node.tag === o.text && a.get(e.node.tag)) {
              const o = a.get(e.node.tag),
                s = r.map((e) => e.node.tag),
                c = { parentTags: s, tagname: e.node.tag, args: e.node.args },
                m = t(o.Constructor, c, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(m)
                  ? m.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(m),
                (i = !!o.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + o.text + "]", !1),
                (n = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = i ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, l), (i = !1);
              } else if (2 == e.type) {
                const t = a.get(e.tag);
                if (t) {
                  const s = o();
                  if (void 0 !== s) {
                    const t = a.get(s.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === s.node.tag &&
                      c(r.pop(), s.node);
                  }
                  r.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (i = !!t.skipInternalNewline),
                    (l = t.allowWrapTextForCopying ?? !1);
                } else n.AppendText("[" + e.text + "]", 0 == r.length);
              } else if (3 == e.type) {
                for (; o() && o().node.tag !== e.text && s(o().node); ) {
                  const e = r.pop();
                  c(e, e.node);
                }
                if (o()?.node.tag == e.text) {
                  const t = r.pop();
                  c(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == r.length);
              }
            });
            r.length > 0;
          ) {
            const e = r.pop();
            c(e, e.node);
          }
          return n.GetElements();
        }
      }
      function l(e, t, n = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("=");
          const n = t.text.indexOf(" ");
          if ((-1 != n && (-1 == e || n < e) && (e = n), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            const n = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let n = "",
                r = "",
                o = 0,
                a = 0;
              "=" == e[0] && (o = 2);
              let s = !1;
              for (a++; a < e.length; a++) {
                const i = e[a];
                let l = !0,
                  c = !1;
                switch (o) {
                  case 0:
                    if ("=" == i) return {};
                    if (" " == i) continue;
                    o = 1;
                    break;
                  case 1:
                    ("=" != i && " " != i) ||
                      s ||
                      (" " == i ? ((o = 0), (c = !0)) : (o = 2), (l = !1));
                    break;
                  case 2:
                    " " == i
                      ? ((o = 0), (l = !1), (c = !0))
                      : '"' == i
                        ? ((o = 4), (l = !1))
                        : (o = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == i && 4 != o && !s) ||
                      ('"' == i && 4 == o && !s)) &&
                      ((o = 0), (l = !1), (c = !0));
                }
                if (l)
                  if ("\\" != i || s)
                    if (((s = !1), 1 == o)) n += i;
                    else {
                      if (3 != o && 4 != o)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + o,
                        );
                      r += i;
                    }
                  else s = !0;
                c && ((t[n] = r), (n = ""), (r = ""));
              }
              0 != o && (t[n] = r);
              return t;
            })(n);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const r = new s();
        return (r.type = n), r;
      }
      class c extends i {
        m_renderingLanguage;
        constructor(e, t, n) {
          super(e, t ?? (() => new a.R8())),
            (this.m_renderingLanguage =
              "string" == typeof n ? (0, r.sf)(n) : n);
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e;
        }
        ParseBBCode(e, t, n = !1) {
          let r = 0;
          const a = this.Parse(
            e,
            (e, n, ...a) =>
              o.createElement(
                e,
                {
                  ...n,
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + r++,
                },
                ...a,
              ),
            n,
          );
          return a.length > 1
            ? o.createElement(o.Fragment, null, ...a)
            : 1 == a.length
              ? a[0]
              : null;
        }
      }
    },
    73022: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => u, h: () => p });
      var r = n(34629),
        o = n(41735),
        a = n.n(o),
        s = n(90626),
        i = n(68797),
        l = n(6144),
        c = n(84933),
        m = n(78327);
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
              this.m_listChangeCallback.set(e, new l.lu()),
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
                m.TS.STORE_BASE_URL +
                "saleaction/ajaxgetusergiveawayregistration",
              r = { giveaway_name: e, sessionid: m.TS.SESSIONID },
              o = await a().get(n, { params: r, withCredentials: !0 });
            if (
              200 == o?.status &&
              1 == o?.data?.success &&
              o?.data?.registration
            )
              return (
                this.m_mapRegistrations.set(e, o?.data?.registration),
                this.GetRegistrationChangeCallback(e).Dispatch(
                  o?.data?.registration,
                ),
                o?.data?.registration
              );
            t = (0, i.H)(o);
          } catch (e) {
            t = (0, i.H)(e);
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
                m.TS.STORE_BASE_URL +
                "saleaction/ajaxupdateusergiveawayregistration",
              r = { giveaway_name: e, sessionid: m.TS.SESSIONID },
              o = await a().get(n, { params: r, withCredentials: !0 });
            if (
              200 == o?.status &&
              1 == o?.data?.success &&
              o?.data?.registration
            )
              return (
                this.m_mapRegistrations.set(e, o?.data?.registration),
                this.GetRegistrationChangeCallback(e).Dispatch(
                  o?.data?.registration,
                ),
                o?.data?.registration
              );
            t = (0, i.H)(o);
          } catch (e) {
            t = (0, i.H)(e);
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
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        constructor() {}
        Init() {}
      }
      function p(e) {
        const [t, n] = (0, s.useState)(d.Get().GetRegistration(e));
        return (
          (0, s.useEffect)(() => {
            void 0 === t && d.Get().LoadRegistration(e).then(n);
          }, [e, t]),
          (0, c.hL)(d.Get().GetRegistrationChangeCallback(e), n),
          t
        );
      }
      function u() {
        return { fnCreateRegistration: d.Get().CreateRegistration };
      }
      (0, r.Cg)([c.oI], d.prototype, "CreateRegistration", null);
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
        m = n(64753),
        d = n(20194),
        p = n(30470);
      function u(e) {
        const { emoticon: t, large: n } = e,
          [o, l] = (0, m.OP)(),
          [d, p] = r.useState(),
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
              ref: p,
            }),
          ),
          o && r.createElement(h, { target: d, emoticon: t }),
        );
      }
      function h(e) {
        const { target: t, emoticon: n } = e,
          { data: o } = (function (e) {
            return (0, d.I)({
              queryKey: ["EmoticonHover", e],
              queryFn: async () => {
                const t = `${p.TS.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(p.TS.LANGUAGE)}&origin=${self.origin}`,
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
      n.d(t, { $k: () => g, S8: () => _, fI: () => f });
      var r = n(34629),
        o = n(75844),
        a = n(90626),
        s = n(59952),
        i = n(22837),
        l = n(49771),
        c = n(6336),
        m = (n(32754), n(84933)),
        d = n(78327),
        p = n(23649),
        u = n(3246),
        h = n.n(u);
      const g = (0, o.PA)((e) => {
        const t = (0, s.z5)(e.photo, (0, i.sf)(d.TS.LANGUAGE)),
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
              e.bioString && a.createElement(p.h, { text: e.bioString }),
            ),
        );
      });
      class f extends a.Component {
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
            f.sm_embeddedElements.HideElement(t.ownerDocument, r)),
            window.addEventListener("scroll", this.OnScroll),
            (this.m_nScrollPosAtHoverStart = window.scrollY);
          f.sm_embeddedElements.ShowElementDelayed(
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
          c = (0, s.z5)(t, (0, i.sf)(d.TS.LANGUAGE)),
          m = c && !l ? ("string" == typeof c ? c : c[1]) : null,
          p = Boolean(r),
          u = Boolean(o);
        return a.createElement(
          "div",
          { className: h().SpeakerOuter },
          a.createElement(
            f,
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
                  (p || u) &&
                    a.createElement(
                      "div",
                      null,
                      p &&
                        a.createElement(
                          "span",
                          { className: h().SpeakerTitle },
                          r,
                        ),
                      p && u && a.createElement("span", null, ", "),
                      u && a.createElement("span", null, o),
                    ),
                ),
              ),
            ),
          ),
        );
      }
      (0, r.Cg)([m.oI], f.prototype, "ClosePopup", null),
        (0, r.Cg)([m.oI], f.prototype, "OnScroll", null),
        (0, r.Cg)([m.oI], f.prototype, "OnHover", null),
        (0, r.Cg)([m.oI], f.prototype, "OnLeave", null);
    },
    96236: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => i });
      var r = n(34629),
        o = n(90626),
        a = n(84933),
        s = n(60383);
      class i extends o.Component {
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
              onRender: n,
              style: r,
              mode: a,
              ...i
            } = this.props,
            l = this.state.bRenderChildren;
          let c = r;
          if (!l) {
            const n = this.state.nPrevRenderWidth || e,
              o = this.state.nPrevRenderHeight || t;
            (void 0 === o && void 0 === n) ||
              (c = { ...r, minHeight: o, minWidth: n });
          }
          const m = this.BLoadAndUnload() ? "repeated" : "once";
          return o.createElement(
            s.J,
            {
              ref: this.m_refContainer,
              style: c,
              ...i,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: m,
            },
            l && this.props.children,
          );
        }
      }
      (0, r.Cg)([a.oI], i.prototype, "OnVisibilityChange", null);
    },
  },
]);

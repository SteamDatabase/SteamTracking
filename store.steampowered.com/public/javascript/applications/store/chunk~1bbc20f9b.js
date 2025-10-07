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
    93980: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => c });
      var r = n(22837),
        o = n(90626),
        a = n(42780);
      class s {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !1) {
          const r = (function (e, t) {
            const n = [];
            let r = { type: 0, text: "" },
              o = !1,
              a = !1,
              s = !1;
            for (let c = 0; c < e.length; c++) {
              const m = e[c];
              switch (r.type) {
                case 0:
                  "[" == m
                    ? ((r.type = 2), (a = !0))
                    : ((r.type = 1), "\\" == m && t ? (o = !o) : (r.text += m));
                  break;
                case 2:
                case 3:
                  if ("/" == m && a) (r.type = 3), (r.text = ""), (a = !1);
                  else if ("[" != m || o)
                    if ("]" != m || o)
                      "\\" == m && t
                        ? ((r.text += m), (o = !o), (a = !1))
                        : ((r.text += m), (o = !1), (a = !1));
                    else {
                      const e =
                          2 == r.type &&
                          "noparse" == r.text?.toLocaleLowerCase(),
                        t =
                          3 == r.type &&
                          "noparse" == r.text?.toLocaleLowerCase();
                      a || (s && !t)
                        ? ((r = l(r)), (r.text += m))
                        : e
                          ? (s = !0)
                          : t && (s = !1),
                        (r = i(n, r)),
                        (a = !1);
                    }
                  else (r = i(n, l(r), 2)), (a = !0);
                  break;
                case 1:
                  "[" != m || o
                    ? "\\" == m && t
                      ? (o && (r.text += m), (o = !o))
                      : ((r.text += m), (o = !1))
                    : ((r = i(n, r, 2)), (a = !0));
              }
            }
            0 != r.type &&
              (2 == r.type || 3 == r.type
                ? n.push(l(r))
                : n.push({ type: r.type, text: r.text ?? "" }));
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
          const c = (e, r) => {
            if (e && e.node.tag === r.text && a.get(e.node.tag)) {
              const r = a.get(e.node.tag),
                o = { tagname: e.node.tag, args: e.node.args },
                s = t(r.Constructor, o, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(s)
                  ? s.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(s),
                (i = !!r.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + r.text + "]", !1),
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
      function i(e, t, n = 0) {
        const { type: r, text: o = "" } = t;
        if (2 == r) {
          let t = o.indexOf("=");
          const n = o.indexOf(" ");
          let a, s;
          if ((-1 != n && (-1 == t || n < t) && (t = n), t > 0)) {
            a = o.substr(0, t).toLocaleLowerCase();
            s = (function (e) {
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
            })(o.substr(t));
          } else (s = {}), (a = o.toLocaleLowerCase());
          e.push({ type: r, text: o, tag: a, args: s });
        } else 0 != r && e.push({ type: r, text: o });
        return { type: n, text: "" };
      }
      function l(e) {
        let t = "";
        return (
          3 == e.type ? (t = "[/") : 2 == e.type && (t = "["),
          { type: 1, text: t + (e.text ?? "") }
        );
      }
      class c extends s {
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
      n.d(t, { Q: () => u, h: () => d });
      var r = n(34629),
        o = n(41735),
        a = n.n(o),
        s = n(90626),
        i = n(68797),
        l = n(6144),
        c = n(84933),
        m = n(78327);
      class p {
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
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              p.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        constructor() {}
        Init() {}
      }
      function d(e) {
        const [t, n] = (0, s.useState)(p.Get().GetRegistration(e));
        return (
          (0, s.useEffect)(() => {
            void 0 === t && p.Get().LoadRegistration(e).then(n);
          }, [e, t]),
          (0, c.hL)(p.Get().GetRegistrationChangeCallback(e), n),
          t
        );
      }
      function u() {
        return { fnCreateRegistration: p.Get().CreateRegistration };
      }
      (0, r.Cg)([c.oI], p.prototype, "CreateRegistration", null);
    },
    23649: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => l });
      var r = n(93980),
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
      n.d(t, { $k: () => g, S8: () => E, fI: () => f });
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
      function E(e) {
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
      (0, r.Cg)([m.oI], f.prototype, "ClosePopup", null),
        (0, r.Cg)([m.oI], f.prototype, "OnScroll", null),
        (0, r.Cg)([m.oI], f.prototype, "OnHover", null),
        (0, r.Cg)([m.oI], f.prototype, "OnLeave", null);
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

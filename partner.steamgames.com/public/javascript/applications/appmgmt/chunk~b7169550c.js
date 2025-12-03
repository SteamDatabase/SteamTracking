/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4440],
  {
    33645: (e) => {
      e.exports = {
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
        PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
        Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
        CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
        CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
      };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    98019: (e, t, n) => {
      "use strict";
      n.d(t, { YA: () => u, p: () => l, qh: () => c });
      var a = n(37085),
        r = n(20194),
        o = n(41735),
        s = n.n(o),
        i = n(78327);
      function c() {
        const e = (0, r.I)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const e = `${i.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              t = await s().get(e);
            return 200 == t?.status && t.data?.success == a.d.k_EResultOK
              ? t.data.admins
              : (console.error("ValveAccounts:", t?.status), []);
          },
        });
        return e.isLoading ? null : e.data;
      }
      function l(e) {
        const t = c();
        return t?.find((t) => t.id == e);
      }
      function u(e, t) {
        const n = e.getQueryData(["useValveAccounts"]);
        return n?.find((e) => e.id === t);
      }
    },
    32179: (e, t, n) => {
      "use strict";
      n.d(t, {
        MY: () => g,
        UA: () => m,
        Yd: () => f,
        qG: () => h,
        rN: () => E,
        vh: () => _,
      });
      var a = n(34629),
        r = n(41735),
        o = n.n(r),
        s = n(90626),
        i = n(22837),
        c = n(37085),
        l = n(68797),
        u = n(78327),
        p = n(6419);
      function g() {
        return u.TS.EUNIVERSE == i.Bn.k_EUniverseBeta ? 12 : 1;
      }
      class d {
        m_mapOptInToPartners = new Map();
        m_mapPromises = new Map();
        GetPartnerInfo(e) {
          return this.m_mapOptInToPartners.get(e);
        }
        BHasPartnerInfoLoad(e) {
          return this.m_mapOptInToPartners.has(e);
        }
        async FindPartnerByName(e) {
          return (
            this.m_mapPromises.has(e) ||
              this.m_mapPromises.set(e, this.InternalFindPartnerByName(e)),
            this.m_mapPromises.get(e)
          );
        }
        async InternalFindPartnerByName(e) {
          const t = new Array();
          try {
            const n = u.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              a = {
                sessionid: u.TS.SESSIONID,
                searchtext: e,
                origin: self.origin,
              },
              r = await o().get(n, { params: a });
            200 == r?.status && r?.data?.success == c.d.k_EResultOK
              ? r.data.publishers.forEach((e) => {
                  const n = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      u.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, n), t.push(n);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${r?.status} eresult ${r?.data?.success} and msg ${r?.data?.msg}`,
                );
          } catch (e) {
            const t = (0, l.H)(e);
            console.error(
              "CPartnerInfoStore.FindPartnerByName failed add: " +
                t.strErrorMsg,
              t,
            );
          }
          return t;
        }
        async LoadPartnerInfo(e) {
          if (this.m_mapOptInToPartners.has(e))
            return this.m_mapOptInToPartners.get(e);
          await this.FindPartnerByName("" + e);
          return (
            this.BHasPartnerInfoLoad(e) ||
              this.m_mapOptInToPartners.set(e, null),
            this.m_mapOptInToPartners.get(e)
          );
        }
        async LoadMultiplePartnerInfo(e) {
          if (!e || 0 == e.length) return [];
          const t = e.filter((e) => !this.m_mapOptInToPartners.has(e));
          return (
            t.length > 0 && (await this.FindPartnerByName("" + t.join(","))),
            e.map((e) => this.m_mapOptInToPartners.get(e)).filter(Boolean)
          );
        }
        static s_Singleton;
        static Get() {
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        constructor() {
          let e = JSON.parse(
            JSON.stringify((0, u.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(e) &&
            (e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e)),
            "dev" == u.TS.WEB_UNIVERSE &&
              console.log("DEV_DEUBG: CPartnerInfoStore::constructor", e));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].partnerid &&
            "string" == typeof t[0].name
          );
        }
      }
      function _(e) {
        const [t, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              d
                .Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => n(!0));
          }, [e, t]),
          t
        );
      }
      function m(e) {
        const [t, n] = s.useState(() => d.Get().GetPartnerInfo(e));
        return (
          s.useEffect(() => {
            !d.Get().BHasPartnerInfoLoad(e) && e > 0
              ? d
                  .Get()
                  .LoadPartnerInfo(e)
                  .then((e) => n(e))
              : d.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                n(d.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function E() {
        return { fnFindPartnerByName: d.Get().FindPartnerByName };
      }
      function f(e) {
        return d.Get().GetPartnerInfo(e);
      }
      function h(e) {
        return d.Get().LoadPartnerInfo(e);
      }
      (0, a.Cg)([p.o], d.prototype, "FindPartnerByName", null);
    },
    49693: (e, t, n) => {
      "use strict";
      var a;
      n.d(t, { op: () => i, CS: () => o, vE: () => c, Al: () => r }),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.TEXT = 1)] = "TEXT"),
            (e[(e.OPENTAG = 2)] = "OPENTAG"),
            (e[(e.CLOSETAG = 3)] = "CLOSETAG");
        })(a || (a = {}));
      class r {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !0) {
          const r = (function (e, t) {
            const n = [];
            let r = { type: a.UNKNOWN, text: "" },
              o = !1,
              s = !1,
              i = !1;
            for (let c = 0; c < e.length; c++) {
              const p = e[c];
              switch (r.type) {
                case a.UNKNOWN:
                  "[" == p
                    ? ((r.type = a.OPENTAG), (s = !0))
                    : ((r.type = a.TEXT),
                      "\\" == p && t ? (o = !o) : (r.text += p));
                  break;
                case a.OPENTAG:
                case a.CLOSETAG:
                  if ("/" == p && s)
                    (r.type = a.CLOSETAG), (r.text = ""), (s = !1);
                  else if ("[" != p || o)
                    if ("]" != p || o)
                      "\\" == p && t
                        ? ((r.text += p), (o = !o), (s = !1))
                        : ((r.text += p), (o = !1), (s = !1));
                    else {
                      const e =
                          r.type == a.OPENTAG &&
                          "noparse" == r.text?.toLocaleLowerCase(),
                        t =
                          r.type == a.CLOSETAG &&
                          "noparse" == r.text?.toLocaleLowerCase();
                      s || (i && !t)
                        ? ((r = u(r)), (r.text += p))
                        : e
                          ? (i = !0)
                          : t && (i = !1),
                        (r = l(n, r)),
                        (s = !1);
                    }
                  else (r = l(n, u(r), a.OPENTAG)), (s = !0);
                  break;
                case a.TEXT:
                  "[" != p || o
                    ? "\\" == p && t
                      ? (o && (r.text += p), (o = !o))
                      : ((r.text += p), (o = !1))
                    : ((r = l(n, r, a.OPENTAG)), (s = !0));
              }
            }
            r.type != a.UNKNOWN &&
              (r.type == a.OPENTAG || r.type == a.CLOSETAG
                ? n.push(u(r))
                : n.push({ type: r.type, text: r.text ?? "" }));
            return n;
          })(e || "", n);
          return this.Parse_BuildElements(r, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const r = [],
            o = () => (r.length < 1 ? void 0 : r[r.length - 1]),
            s = this.m_dictComponents,
            i = (e) => !(!e.tag || !s.get(e.tag)?.autocloses);
          let c = !1,
            l = !0;
          const u = (e, a) => {
            if (e && e.node.tag === a.text && s.get(e.node.tag)) {
              const a = s.get(e.node.tag),
                r = {
                  tagname: e.node.tag,
                  args: e.node.args,
                  rawargs: e.node.rawargs,
                },
                o = t(a.Constructor, r, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(o)
                  ? o.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(o),
                (c = !!a.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + a.text + "]", !1),
                (n = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (e.type == a.TEXT) {
                const t = c ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, l), (c = !1);
              } else if (e.type == a.OPENTAG) {
                const t = s.get(e.tag);
                if (t) {
                  const a = o();
                  if (void 0 !== a) {
                    const t = s.get(a.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === a.node.tag &&
                      u(r.pop(), a.node);
                  }
                  r.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (c = !!t.skipInternalNewline),
                    (l = t.allowWrapTextForCopying ?? !1);
                } else n.AppendText("[" + e.text + "]", 0 == r.length);
              } else if (e.type == a.CLOSETAG) {
                for (; o() && o().node.tag !== e.text && i(o().node); ) {
                  const e = r.pop();
                  u(e, e.node);
                }
                if (o()?.node.tag == e.text) {
                  const t = r.pop();
                  u(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == r.length);
              }
            });
            r.length > 0;
          ) {
            const e = r.pop();
            u(e, e.node);
          }
          return n.GetElements();
        }
      }
      function o(e, t) {
        let n = "[" + e;
        t?.[""] && (n += `=${s("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (n += ` ${((a = e), a.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`);
        var a;
        return (n += "]"), n;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function i(e) {
        return `[/${e}]`;
      }
      function c(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function l(e, t, n = a.UNKNOWN) {
        const { type: r, text: o = "" } = t;
        if (r == a.OPENTAG) {
          let t = o.indexOf("=");
          const n = o.indexOf(" ");
          let a, s;
          -1 != n && (-1 == t || n < t) && (t = n);
          let i = "";
          t > 0
            ? ((a = o.substr(0, t).toLocaleLowerCase()),
              (i = o.substr(t)),
              (s = (function (e) {
                if (!e || e.length < 1) return {};
                const t = {};
                let n,
                  a = "",
                  r = "";
                !(function (e) {
                  (e[(e.PRE_NAME = 0)] = "PRE_NAME"),
                    (e[(e.IN_NAME = 1)] = "IN_NAME"),
                    (e[(e.POST_NAME = 2)] = "POST_NAME"),
                    (e[(e.IN_VALUE = 3)] = "IN_VALUE"),
                    (e[(e.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
                })(n || (n = {}));
                let o = n.PRE_NAME,
                  s = 0;
                "=" == e[0] && (o = n.POST_NAME);
                let i = !1;
                for (s++; s < e.length; s++) {
                  const c = e[s];
                  let l = !0,
                    u = !1;
                  switch (o) {
                    case n.PRE_NAME:
                      if ("=" == c) return {};
                      if (" " == c) continue;
                      o = n.IN_NAME;
                      break;
                    case n.IN_NAME:
                      ("=" != c && " " != c) ||
                        i ||
                        (" " == c
                          ? ((o = n.PRE_NAME), (u = !0))
                          : (o = n.POST_NAME),
                        (l = !1));
                      break;
                    case n.POST_NAME:
                      " " == c
                        ? ((o = n.PRE_NAME), (l = !1), (u = !0))
                        : '"' == c
                          ? ((o = n.IN_QUOTED_VALUE), (l = !1))
                          : (o = n.IN_VALUE);
                      break;
                    case n.IN_VALUE:
                    case n.IN_QUOTED_VALUE:
                      ((" " == c && o != n.IN_QUOTED_VALUE && !i) ||
                        ('"' == c && o == n.IN_QUOTED_VALUE && !i)) &&
                        ((o = n.PRE_NAME), (l = !1), (u = !0));
                  }
                  if (l)
                    if ("\\" != c || i)
                      if (((i = !1), o == n.IN_NAME)) a += c;
                      else {
                        if (o != n.IN_VALUE && o != n.IN_QUOTED_VALUE)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + o,
                          );
                        r += c;
                      }
                    else i = !0;
                  u && ((t[a] = r), (a = ""), (r = ""));
                }
                o != n.PRE_NAME && (t[a] = r);
                return t;
              })(i)))
            : ((s = {}), (a = o.toLocaleLowerCase())),
            e.push({ type: r, text: o, tag: a, args: s, rawargs: i });
        } else r != a.UNKNOWN && e.push({ type: r, text: o });
        return { type: n, text: "" };
      }
      function u(e) {
        let t = "";
        return (
          e.type == a.CLOSETAG ? (t = "[/") : e.type == a.OPENTAG && (t = "["),
          { type: a.TEXT, text: t + (e.text ?? "") }
        );
      }
    },
    40236: (e, t, n) => {
      "use strict";
      n.d(t, { OO: () => c, wY: () => i });
      var a = n(90626),
        r = n(8871),
        o = n(81393);
      function s(e, t) {
        return (0, r.QS)(
          (n) => {
            if (!n) return;
            const a = t(n.ownerDocument.defaultView, (t) => {
              e(t[0]);
            });
            return a.observe(n), () => a.unobserve(n);
          },
          [e, t],
        );
      }
      function i(e) {
        return s(
          e,
          a.useCallback(
            (e, t) =>
              e.ResizeObserver
                ? new e.ResizeObserver(t)
                : ((0, o.wT)(!1, "ResizeObserver is not available"),
                  {
                    observe: () => {},
                    unobserve: () => {},
                    disconnect: () => {},
                  }),
            [],
          ),
        );
      }
      function c(e, t) {
        const n = a.useRef(void 0);
        return (function (e, t) {
          return s(
            e,
            a.useCallback((e, n) => new e.IntersectionObserver(n, t), [t]),
          );
        })((t) => {
          !n.current && t.isIntersecting && e.onEnter?.(t),
            n.current && !t.isIntersecting && e.onLeave?.(t),
            e.onIntersectionChange?.(t),
            (n.current = t.isIntersecting);
        }, t);
      }
    },
    63556: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => g, O: () => p });
      var a = n(34629),
        r = n(14947),
        o = n(65946),
        s = n(22837),
        i = n(62490),
        c = n(6419),
        l = n(78327),
        u = n(91986);
      class p {
        m_eCurLang = (0, s.sf)(l.TS.LANGUAGE);
        m_rgHasData = (0, i.$Y)([], s.gS.k_Lang_MAX, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new u.l();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(e) {
          return (
            this.m_eCurLang != e &&
            ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
          );
        }
        SetHasLanguage(e) {
          e.forEach((e, t) => {
            this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
          });
        }
        BHasLanguageData(e) {
          return this.m_rgHasData[e];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(e) {
          e != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = e);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            p.s_globalSingletonStore ||
              ((p.s_globalSingletonStore = new p()),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.DUS = p.s_globalSingletonStore)),
            p.s_globalSingletonStore
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
      }
      function g() {
        return (0, o.q3)(() => p.Get().GetCurEditLanguage());
      }
      (0, a.Cg)([r.sH], p.prototype, "m_eCurLang", void 0),
        (0, a.Cg)([r.sH], p.prototype, "m_rgHasData", void 0),
        (0, a.Cg)([r.sH], p.prototype, "m_bHasLocalizationContext", void 0),
        (0, a.Cg)([c.o], p.prototype, "GetCurEditLanguage", null),
        (0, a.Cg)([c.o], p.prototype, "SetCurEditLanguage", null),
        (0, a.Cg)([r.XI.bound], p.prototype, "SetHasLanguage", null),
        (0, a.Cg)([c.o], p.prototype, "BHasLanguageData", null);
    },
    96001: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => c, z: () => i });
      var a = n(81393),
        r = n(96059),
        o = n(30470),
        s = n(24484);
      class i {
        m_steamInterface;
        GetPromotionTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            i.s_Singleton || ((i.s_Singleton = new i()), i.s_Singleton.Init()),
            i.s_Singleton
          );
        }
        Init() {
          const e = (0, s.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, a.wT)(Boolean(e), "require promotion_operation_token"),
            (this.m_steamInterface = new r.D(o.TS.WEBAPI_BASE_URL, e));
        }
      }
      function c() {
        return i.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => A, CF: () => O, KM: () => L, KT: () => N });
      var a = n(41735),
        r = n.n(a),
        o = n(58632),
        s = n.n(o),
        i = n(90626),
        c = n(20194),
        l = n(75233),
        u = n(37085),
        p = n(17720),
        g = n(68797),
        d = n(78327),
        _ = n(56545),
        m = n(37735),
        E = n(23809),
        f = n(7860);
      const h = "nicknames";
      function L(e) {
        const t = (0, E.KV)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [h],
            queryFn: async () => {
              const e = new Map();
              if (d.iA.logged_in) {
                const n = _.w.Init(m.dN),
                  a = (await m.xt.GetNicknameList(t, n)).Body().toObject();
                a?.nicknames &&
                  a.nicknames.length > 0 &&
                  a.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const S = new (s())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, d.yK)()
                  ? d.TS.COMMUNITY_BASE_URL
                  : d.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  a.data?.success != u.d.k_EResultOK ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, g.H))(a).strErrorMsg}`;
                return [a.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  a.data?.success != u.d.k_EResultOK ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, g.H))(a).strErrorMsg}`;
                const o = new Map();
                return (
                  a.data.userinfos.forEach((e) =>
                    o.set(new p.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => o.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        T = "avatarandpersonas";
      function N(e) {
        const { data: t, isLoading: n } = (0, c.I)({
          queryKey: [T, e],
          queryFn: () => S.load(e),
        });
        return [t, n];
      }
      function A(e) {
        const t = (0, l.jE)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [T, e],
            queryFn: async () => {
              const n = await S.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [T, new p.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          r = (0, i.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return a ? null : r;
      }
      function O(e) {
        return f.L.getQueryData([T, e]);
      }
    },
    1909: (e, t, n) => {
      "use strict";
      n.d(t, { Ng: () => f, iN: () => h, yk: () => L });
      var a = n(34629),
        r = n(75844),
        o = n(65946),
        s = n(90626),
        i = n(22837),
        c = n(2160),
        l = n(63556),
        u = n(95695),
        p = n.n(u),
        g = n(52038),
        d = n(61859),
        _ = n(91675),
        m = n(73745),
        E = n(32754);
      let f = class extends s.Component {
        GenerateLanguageOptions() {
          let e = [];
          const {
            fnFilterLanguage: t,
            fnLangHasData: n,
            fnLastUpdateRTime: a,
            fnIsLangSupported: r,
          } = this.props;
          this.props.bAllowUnsetOption &&
            e.push(
              s.createElement(
                "option",
                { key: "langpicker_unset", value: i.gS.k_Lang_None },
                (0, d.we)("#language_selection_none"),
              ),
            );
          let o = new Array();
          const l = this.props.realms || [c.TU.k_ESteamRealmGlobal];
          for (const e of d.A0.GetLanguageListForRealms(l)) {
            if (t && !t(e)) continue;
            const n = (0, i.Lg)(e),
              a = (0, d.we)("#Language_" + n),
              s = Boolean(r) && r(e);
            o.push({ eLang: e, sLocName: a, bSupported: s });
          }
          o.sort((e, t) =>
            e.bSupported != t.bSupported
              ? e.bSupported
                ? -1
                : 1
              : e.sLocName.localeCompare(t.sLocName),
          );
          let u = !1;
          for (const t of o) {
            t.bSupported != u &&
              (e.push(
                s.createElement(
                  "option",
                  {
                    key: t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: p().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, d.we)(
                    t.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (u = t.bSupported));
            const r = n && n(t.eLang),
              o = a && a(t.eLang);
            let i = t.sLocName;
            o &&
              0 !== o &&
              ((i += " "),
              (i += (0, d.we)(
                "#Language_Last_Update",
                (0, d.$z)(o) + " @ " + (0, _.KC)(o, { bForce24HourClock: !1 }),
              ))),
              e.push(
                s.createElement(
                  "option",
                  {
                    key: "langpicker" + t.eLang + (r ? "_hasdata" : ""),
                    value: t.eLang,
                    className: (0, g.A)(
                      { [p().LanguageWithContent]: r },
                      t.bSupported
                        ? p().SupportedLanguage
                        : p().UnsupportedLanguage,
                    ),
                  },
                  i,
                ),
              );
          }
          return e;
        }
        OnLanguageChange(e) {
          const { fnOnLanguageChanged: t, selectedLang: n } = this.props;
          let a = Number.parseInt(e.currentTarget.value);
          a != n && t && t(a);
        }
        render() {
          const { selectedLang: e, bDisabled: t, strTooltip: n } = this.props;
          let a = this.GenerateLanguageOptions();
          return s.createElement(
            E.he,
            { toolTipContent: n },
            s.createElement(
              "select",
              { value: e, onChange: this.OnLanguageChange, disabled: t },
              a,
            ),
          );
        }
      };
      function h(e) {
        const [t, n] = (0, o.q3)(() => [
          l.O.Get().GetHasLocalizationContext(),
          l.O.Get().GetCurEditLanguage(),
        ]);
        return s.createElement(f, {
          selectedLang: n,
          fnLangHasData: l.O.Get().BHasLanguageData,
          fnOnLanguageChanged: l.O.Get().SetCurEditLanguage,
          bDisabled: !t,
          strTooltip: t ? void 0 : (0, d.we)("#Localization_EditorNotInFocus"),
        });
      }
      function L(e) {
        const { fnLangHasData: t } = e;
        s.useEffect(
          () => (
            l.O.Get().SetHasLocalizationContext(!0),
            () => l.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const n = (0, o.q3)(() => {
          const e = [];
          for (let n = i.gS.k_Lang_English; n < i.gS.k_Lang_MAX; ++n)
            e[n] = t && t(n);
          return e;
        });
        return (
          s.useEffect(() => l.O.Get().SetHasLanguage(n), [n]),
          s.createElement(s.Fragment, null)
        );
      }
      (0, a.Cg)([m.oI], f.prototype, "OnLanguageChange", null),
        (f = (0, a.Cg)([r.PA], f));
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => d, pn: () => m, qx: () => _ });
      var a = n(16676),
        r = n(61859),
        o = n(12155),
        s = n(90626),
        i = n(52038),
        c = n(95695),
        l = n(84811),
        u = n(64734),
        p = n(65946),
        g = n(26408);
      function d(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: a,
            toggleMinimized: r,
            className: o,
            children: d,
            elAdditionalButtons: _,
          } = e,
          E = (0, p.q3)(() => a());
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            {
              className: (0, i.A)(
                o,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            s.createElement(
              "div",
              {
                className: (0, i.A)(
                  c.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && s.createElement(g.o, { tooltip: n }),
            ),
            s.createElement(
              "div",
              { className: u.SectionTitleButtons },
              _,
              s.createElement(m, { bIsMinimized: E, fnToggleMinimize: r }),
            ),
          ),
          !E && s.createElement(l.tH, null, d),
        );
      }
      function _(e) {
        const [t, n] = s.useState(Boolean(e.bStartMinimized));
        return s.createElement(
          d,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function m(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          i = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return s.createElement(
          a.$n,
          { "data-tooltip-text": (0, r.we)(i), onClick: n },
          e.bIsMinimized
            ? s.createElement(o.hz4, null)
            : s.createElement(o.Xjb, null),
        );
      }
    },
  },
]);

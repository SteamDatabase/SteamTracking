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
      n.d(t, { YA: () => l, p: () => c, qh: () => i });
      var a = n(20194),
        r = n(41735),
        o = n.n(r),
        s = n(78327);
      function i() {
        const e = (0, a.I)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const e = `${s.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              t = await o().get(e);
            return 200 == t?.status && 1 == t.data?.success
              ? t.data.admins
              : (console.error("ValveAccounts:", t?.status), []);
          },
        });
        return e.isLoading ? null : e.data;
      }
      function c(e) {
        const t = i();
        return t?.find((t) => t.id == e);
      }
      function l(e, t) {
        const n = e.getQueryData(["useValveAccounts"]);
        return n?.find((e) => e.id === t);
      }
    },
    32179: (e, t, n) => {
      "use strict";
      n.d(t, {
        MY: () => u,
        UA: () => g,
        Yd: () => f,
        qG: () => _,
        rN: () => m,
        vh: () => d,
      });
      var a = n(34629),
        r = n(41735),
        o = n.n(r),
        s = n(90626),
        i = n(68797),
        c = n(78327),
        l = n(6419);
      function u() {
        return 2 == c.TS.EUNIVERSE ? 12 : 1;
      }
      class p {
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
            const n = c.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              a = {
                sessionid: c.TS.SESSIONID,
                searchtext: e,
                origin: self.origin,
              },
              r = await o().get(n, { params: a });
            200 == r?.status && 1 == r?.data?.success
              ? r.data.publishers.forEach((e) => {
                  const n = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      c.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, n), t.push(n);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${r?.status} eresult ${r?.data?.success} and msg ${r?.data?.msg}`,
                );
          } catch (e) {
            const t = (0, i.H)(e);
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
            p.s_Singleton ||
              ((p.s_Singleton = new p()),
              ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = p.s_Singleton)),
            p.s_Singleton
          );
        }
        constructor() {
          let e = JSON.parse(
            JSON.stringify((0, c.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(e) &&
            (e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e)),
            "dev" == c.TS.WEB_UNIVERSE &&
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
      function d(e) {
        const [t, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              p
                .Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => n(!0));
          }, [e, t]),
          t
        );
      }
      function g(e) {
        const [t, n] = s.useState(() => p.Get().GetPartnerInfo(e));
        return (
          s.useEffect(() => {
            !p.Get().BHasPartnerInfoLoad(e) && e > 0
              ? p
                  .Get()
                  .LoadPartnerInfo(e)
                  .then((e) => n(e))
              : p.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                n(p.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function m() {
        return { fnFindPartnerByName: p.Get().FindPartnerByName };
      }
      function f(e) {
        return p.Get().GetPartnerInfo(e);
      }
      function _(e) {
        return p.Get().LoadPartnerInfo(e);
      }
      (0, a.Cg)([l.o], p.prototype, "FindPartnerByName", null);
    },
    95742: (e, t, n) => {
      "use strict";
      n.d(t, { Al: () => a, CS: () => r, op: () => s, vE: () => i });
      class a {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !0) {
          const a = (function (e, t) {
            const n = [];
            let a = { type: 0, text: "" },
              r = !1,
              o = !1,
              s = !1;
            for (let i = 0; i < e.length; i++) {
              const u = e[i];
              switch (a.type) {
                case 0:
                  "[" == u
                    ? ((a.type = 2), (o = !0))
                    : ((a.type = 1), "\\" == u && t ? (r = !r) : (a.text += u));
                  break;
                case 2:
                case 3:
                  if ("/" == u && o) (a.type = 3), (a.text = ""), (o = !1);
                  else if ("[" != u || r)
                    if ("]" != u || r)
                      "\\" == u && t
                        ? ((a.text += u), (r = !r), (o = !1))
                        : ((a.text += u), (r = !1), (o = !1));
                    else {
                      const e =
                          2 == a.type &&
                          "noparse" == a.text?.toLocaleLowerCase(),
                        t =
                          3 == a.type &&
                          "noparse" == a.text?.toLocaleLowerCase();
                      o || (s && !t)
                        ? ((a = l(a)), (a.text += u))
                        : e
                          ? (s = !0)
                          : t && (s = !1),
                        (a = c(n, a)),
                        (o = !1);
                    }
                  else (a = c(n, l(a), 2)), (o = !0);
                  break;
                case 1:
                  "[" != u || r
                    ? "\\" == u && t
                      ? (r && (a.text += u), (r = !r))
                      : ((a.text += u), (r = !1))
                    : ((a = c(n, a, 2)), (o = !0));
              }
            }
            0 != a.type &&
              (2 == a.type || 3 == a.type
                ? n.push(l(a))
                : n.push({ type: a.type, text: a.text ?? "" }));
            return n;
          })(e || "", n);
          return this.Parse_BuildElements(a, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const a = [],
            r = () => (a.length < 1 ? void 0 : a[a.length - 1]),
            o = this.m_dictComponents,
            s = (e) => !(!e.tag || !o.get(e.tag)?.autocloses);
          let i = !1,
            c = !0;
          const l = (e, a) => {
            if (e && e.node.tag === a.text && o.get(e.node.tag)) {
              const a = o.get(e.node.tag),
                r = { tagname: e.node.tag, args: e.node.args },
                s = t(a.Constructor, r, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(s)
                  ? s.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(s),
                (i = !!a.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + a.text + "]", !1),
                (n = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = i ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, c), (i = !1);
              } else if (2 == e.type) {
                const t = o.get(e.tag);
                if (t) {
                  const s = r();
                  if (void 0 !== s) {
                    const t = o.get(s.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === s.node.tag &&
                      l(a.pop(), s.node);
                  }
                  a.push({ accumulator: n, node: e, bWrapTextForCopying: c }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (i = !!t.skipInternalNewline),
                    (c = t.allowWrapTextForCopying ?? !1);
                } else n.AppendText("[" + e.text + "]", 0 == a.length);
              } else if (3 == e.type) {
                for (; r() && r().node.tag !== e.text && s(r().node); ) {
                  const e = a.pop();
                  l(e, e.node);
                }
                if (r()?.node.tag == e.text) {
                  const t = a.pop();
                  l(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == a.length);
              }
            });
            a.length > 0;
          ) {
            const e = a.pop();
            l(e, e.node);
          }
          return n.GetElements();
        }
      }
      function r(e, t) {
        let n = "[" + e;
        t?.[""] && (n += `=${o("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (n += ` ${((a = e), a.replace(/(\\| |\])/g, "\\$1"))}=${o("" + t[e])}`);
        var a;
        return (n += "]"), n;
      }
      function o(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function s(e) {
        return `[/${e}]`;
      }
      function i(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function c(e, t, n = 0) {
        const { type: a, text: r = "" } = t;
        if (2 == a) {
          let t = r.indexOf("=");
          const n = r.indexOf(" ");
          let o, s;
          if ((-1 != n && (-1 == t || n < t) && (t = n), t > 0)) {
            o = r.substr(0, t).toLocaleLowerCase();
            s = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let n = "",
                a = "",
                r = 0,
                o = 0;
              "=" == e[0] && (r = 2);
              let s = !1;
              for (o++; o < e.length; o++) {
                const i = e[o];
                let c = !0,
                  l = !1;
                switch (r) {
                  case 0:
                    if ("=" == i) return {};
                    if (" " == i) continue;
                    r = 1;
                    break;
                  case 1:
                    ("=" != i && " " != i) ||
                      s ||
                      (" " == i ? ((r = 0), (l = !0)) : (r = 2), (c = !1));
                    break;
                  case 2:
                    " " == i
                      ? ((r = 0), (c = !1), (l = !0))
                      : '"' == i
                        ? ((r = 4), (c = !1))
                        : (r = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == i && 4 != r && !s) ||
                      ('"' == i && 4 == r && !s)) &&
                      ((r = 0), (c = !1), (l = !0));
                }
                if (c)
                  if ("\\" != i || s)
                    if (((s = !1), 1 == r)) n += i;
                    else {
                      if (3 != r && 4 != r)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + r,
                        );
                      a += i;
                    }
                  else s = !0;
                l && ((t[n] = a), (n = ""), (a = ""));
              }
              0 != r && (t[n] = a);
              return t;
            })(r.substr(t));
          } else (s = {}), (o = r.toLocaleLowerCase());
          e.push({ type: a, text: r, tag: o, args: s });
        } else 0 != a && e.push({ type: a, text: r });
        return { type: n, text: "" };
      }
      function l(e) {
        let t = "";
        return (
          3 == e.type ? (t = "[/") : 2 == e.type && (t = "["),
          { type: 1, text: t + (e.text ?? "") }
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
      n.d(t, { E: () => d, O: () => p });
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
        m_rgHasData = (0, i.$Y)([], 31, !1);
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
      function d() {
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
      n.d(t, { B3: () => C, CF: () => b, KM: () => L, KT: () => y });
      var a = n(41735),
        r = n.n(a),
        o = n(58632),
        s = n.n(o),
        i = n(90626),
        c = n(20194),
        l = n(75233),
        u = n(17720),
        p = n(68797),
        d = n(78327),
        g = n(56545),
        m = n(37735),
        f = n(23809),
        _ = n(7860);
      const h = "nicknames";
      function L(e) {
        const t = (0, f.KV)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [h],
            queryFn: async () => {
              const e = new Map();
              if (d.iA.logged_in) {
                const n = g.w.Init(m.dN),
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
                  1 != a.data?.success ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, p.H))(a).strErrorMsg}`;
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
                  1 != a.data?.success ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, p.H))(a).strErrorMsg}`;
                const o = new Map();
                return (
                  a.data.userinfos.forEach((e) =>
                    o.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => o.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        E = "avatarandpersonas";
      function y(e) {
        const { data: t, isLoading: n } = (0, c.I)({
          queryKey: [E, e],
          queryFn: () => S.load(e),
        });
        return [t, n];
      }
      function C(e) {
        const t = (0, l.jE)(),
          { data: n, isLoading: a } = (0, c.I)({
            queryKey: [E, e],
            queryFn: async () => {
              const n = await S.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [E, new u.b(e.steamid).GetAccountID()];
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
      function b(e) {
        return _.L.getQueryData([E, e]);
      }
    },
    1909: (e, t, n) => {
      "use strict";
      n.d(t, { Ng: () => h, iN: () => L, yk: () => S });
      var a = n(34629),
        r = n(75844),
        o = n(65946),
        s = n(90626),
        i = n(22837),
        c = n(2160),
        l = n(63556),
        u = n(95695),
        p = n.n(u),
        d = n(52038),
        g = n(61859),
        m = n(91675),
        f = n(73745),
        _ = n(32754);
      let h = class extends s.Component {
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
                { key: "langpicker_unset", value: -1 },
                (0, g.we)("#language_selection_none"),
              ),
            );
          let o = new Array();
          const l = this.props.realms || [c.TU.k_ESteamRealmGlobal];
          for (const e of g.A0.GetLanguageListForRealms(l)) {
            if (t && !t(e)) continue;
            const n = (0, i.Lg)(e),
              a = (0, g.we)("#Language_" + n),
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
                  (0, g.we)(
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
              (i += (0, g.we)(
                "#Language_Last_Update",
                (0, g.$z)(o) + " @ " + (0, m.KC)(o, { bForce24HourClock: !1 }),
              ))),
              e.push(
                s.createElement(
                  "option",
                  {
                    key: "langpicker" + t.eLang + (r ? "_hasdata" : ""),
                    value: t.eLang,
                    className: (0, d.A)(
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
            _.he,
            { toolTipContent: n },
            s.createElement(
              "select",
              { value: e, onChange: this.OnLanguageChange, disabled: t },
              a,
            ),
          );
        }
      };
      function L(e) {
        const [t, n] = (0, o.q3)(() => [
          l.O.Get().GetHasLocalizationContext(),
          l.O.Get().GetCurEditLanguage(),
        ]);
        return s.createElement(h, {
          selectedLang: n,
          fnLangHasData: l.O.Get().BHasLanguageData,
          fnOnLanguageChanged: l.O.Get().SetCurEditLanguage,
          bDisabled: !t,
          strTooltip: t ? void 0 : (0, g.we)("#Localization_EditorNotInFocus"),
        });
      }
      function S(e) {
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
          for (let n = 0; n < 31; ++n) e[n] = t && t(n);
          return e;
        });
        return (
          s.useEffect(() => l.O.Get().SetHasLanguage(n), [n]),
          s.createElement(s.Fragment, null)
        );
      }
      (0, a.Cg)([f.oI], h.prototype, "OnLanguageChange", null),
        (h = (0, a.Cg)([r.PA], h));
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => g, pn: () => f, qx: () => m });
      var a = n(16676),
        r = n(61859),
        o = n(12155),
        s = n(90626),
        i = n(52038),
        c = n(95695),
        l = n(84811),
        u = n(64734),
        p = n(65946),
        d = n(26408);
      function g(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: a,
            toggleMinimized: r,
            className: o,
            children: g,
            elAdditionalButtons: m,
          } = e,
          _ = (0, p.q3)(() => a());
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
              Boolean(n) && s.createElement(d.o, { tooltip: n }),
            ),
            s.createElement(
              "div",
              { className: u.SectionTitleButtons },
              m,
              s.createElement(f, { bIsMinimized: _, fnToggleMinimize: r }),
            ),
          ),
          !_ && s.createElement(l.tH, null, g),
        );
      }
      function m(e) {
        const [t, n] = s.useState(Boolean(e.bStartMinimized));
        return s.createElement(
          g,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function f(e) {
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

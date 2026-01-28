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
    83164: (e) => {
      e.exports = { CornerSash: "_1tKrXofY3mdVjHya13I1Ks" };
    },
    35050: (e) => {
      e.exports = { bordered_live_stream_icon: "_2R1rYdwKuMFLsEb4WvJYdD" };
    },
    39449: (e) => {
      e.exports = {
        PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
        PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
        PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
        ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
        ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
        Disabled: "_1a_f8VY56CtjgePDRTaC-W",
      };
    },
    58855: (e) => {
      e.exports = { CompatIcon: "_3cEK5JKL6FSqY5FgD_4hFA" };
    },
    67523: (e) => {
      e.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
    },
    21038: (e) => {
      e.exports = {
        PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
        SVG: "_3Mns5ZEBThi10kv9zwdCRr",
      };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    98019: (e, t, a) => {
      "use strict";
      a.d(t, { YA: () => l, p: () => c, qh: () => i });
      var n = a(20194),
        r = a(41735),
        s = a.n(r),
        o = a(78327);
      function i() {
        const e = (0, n.I)({
          queryKey: ["useValveAccounts"],
          queryFn: async () => {
            const e = `${o.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
              t = await s().get(e);
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
        const a = e.getQueryData(["useValveAccounts"]);
        return a?.find((e) => e.id === t);
      }
    },
    32179: (e, t, a) => {
      "use strict";
      a.d(t, {
        MY: () => u,
        UA: () => m,
        Yd: () => f,
        qG: () => _,
        rN: () => g,
        vh: () => p,
      });
      var n = a(34629),
        r = a(41735),
        s = a.n(r),
        o = a(90626),
        i = a(68797),
        c = a(78327),
        l = a(6419);
      function u() {
        return 2 == c.TS.EUNIVERSE ? 12 : 1;
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
            const a = c.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              n = {
                sessionid: c.TS.SESSIONID,
                searchtext: e,
                origin: self.origin,
              },
              r = await s().get(a, { params: n });
            200 == r?.status && 1 == r?.data?.success
              ? r.data.publishers.forEach((e) => {
                  const a = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      c.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, a), t.push(a);
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
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = d.s_Singleton)),
            d.s_Singleton
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
      function p(e) {
        const [t, a] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              d
                .Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => a(!0));
          }, [e, t]),
          t
        );
      }
      function m(e) {
        const [t, a] = o.useState(() => d.Get().GetPartnerInfo(e));
        return (
          o.useEffect(() => {
            !d.Get().BHasPartnerInfoLoad(e) && e > 0
              ? d
                  .Get()
                  .LoadPartnerInfo(e)
                  .then((e) => a(e))
              : d.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                a(d.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function g() {
        return { fnFindPartnerByName: d.Get().FindPartnerByName };
      }
      function f(e) {
        return d.Get().GetPartnerInfo(e);
      }
      function _(e) {
        return d.Get().LoadPartnerInfo(e);
      }
      (0, n.Cg)([l.o], d.prototype, "FindPartnerByName", null);
    },
    95742: (e, t, a) => {
      "use strict";
      a.d(t, { Al: () => n, CS: () => r, op: () => o, vE: () => i });
      class n {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, a = !0) {
          const n = (function (e, t) {
            const a = [];
            let n = { type: 0, text: "" },
              r = !1,
              s = !1,
              o = !1;
            for (let i = 0; i < e.length; i++) {
              const u = e[i];
              switch (n.type) {
                case 0:
                  "[" == u
                    ? ((n.type = 2), (s = !0))
                    : ((n.type = 1), "\\" == u && t ? (r = !r) : (n.text += u));
                  break;
                case 2:
                case 3:
                  if ("/" == u && s) (n.type = 3), (n.text = ""), (s = !1);
                  else if ("[" != u || r)
                    if ("]" != u || r)
                      "\\" == u && t
                        ? ((n.text += u), (r = !r), (s = !1))
                        : ((n.text += u), (r = !1), (s = !1));
                    else {
                      const e =
                          2 == n.type &&
                          "noparse" == n.text?.toLocaleLowerCase(),
                        t =
                          3 == n.type &&
                          "noparse" == n.text?.toLocaleLowerCase();
                      s || (o && !t)
                        ? ((n = l(n)), (n.text += u))
                        : e
                          ? (o = !0)
                          : t && (o = !1),
                        (n = c(a, n)),
                        (s = !1);
                    }
                  else (n = c(a, l(n), 2)), (s = !0);
                  break;
                case 1:
                  "[" != u || r
                    ? "\\" == u && t
                      ? (r && (n.text += u), (r = !r))
                      : ((n.text += u), (r = !1))
                    : ((n = c(a, n, 2)), (s = !0));
              }
            }
            0 != n.type &&
              (2 == n.type || 3 == n.type
                ? a.push(l(n))
                : a.push({ type: n.type, text: n.text ?? "" }));
            return a;
          })(e || "", a);
          return this.Parse_BuildElements(n, t);
        }
        Parse_BuildElements(e, t) {
          let a = this.m_fnAccumulatorFactory(void 0);
          const n = [],
            r = () => (n.length < 1 ? void 0 : n[n.length - 1]),
            s = this.m_dictComponents,
            o = (e) => !(!e.tag || !s.get(e.tag)?.autocloses);
          let i = !1,
            c = !0;
          const l = (e, n) => {
            if (e && e.node.tag === n.text && s.get(e.node.tag)) {
              const n = s.get(e.node.tag),
                r = {
                  tagname: e.node.tag,
                  args: e.node.args,
                  rawargs: e.node.rawargs,
                },
                o = t(n.Constructor, r, ...a.GetElements());
              (a = e.accumulator),
                Array.isArray(o)
                  ? o.forEach((e) => a.AppendNode(e))
                  : a.AppendNode(o),
                (i = !!n.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                a.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + n.text + "]", !1),
                (a = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = i ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                a.AppendText(t, c), (i = !1);
              } else if (2 == e.type) {
                const t = s.get(e.tag);
                if (t) {
                  const o = r();
                  if (void 0 !== o) {
                    const t = s.get(o.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === o.node.tag &&
                      l(n.pop(), o.node);
                  }
                  n.push({ accumulator: a, node: e, bWrapTextForCopying: c }),
                    (a = this.m_fnAccumulatorFactory(e)),
                    (i = !!t.skipInternalNewline),
                    (c = t.allowWrapTextForCopying ?? !1);
                } else a.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (; r() && r().node.tag !== e.text && o(r().node); ) {
                  const e = n.pop();
                  l(e, e.node);
                }
                if (r()?.node.tag == e.text) {
                  const t = n.pop();
                  l(t, e);
                } else a.AppendText("[/" + e.text + "]", 0 == n.length);
              }
            });
            n.length > 0;
          ) {
            const e = n.pop();
            l(e, e.node);
          }
          return a.GetElements();
        }
      }
      function r(e, t) {
        let a = "[" + e;
        t?.[""] && (a += `=${s("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (a += ` ${((n = e), n.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`);
        var n;
        return (a += "]"), a;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function o(e) {
        return `[/${e}]`;
      }
      function i(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function c(e, t, a = 0) {
        const { type: n, text: r = "" } = t;
        if (2 == n) {
          let t = r.indexOf("=");
          const a = r.indexOf(" ");
          let s, o;
          -1 != a && (-1 == t || a < t) && (t = a);
          let i = "";
          t > 0
            ? ((s = r.substr(0, t).toLocaleLowerCase()),
              (i = r.substr(t)),
              (o = (function (e) {
                if (!e || e.length < 1) return {};
                const t = {};
                let a = "",
                  n = "",
                  r = 0,
                  s = 0;
                "=" == e[0] && (r = 2);
                let o = !1;
                for (s++; s < e.length; s++) {
                  const i = e[s];
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
                        o ||
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
                      ((" " == i && 4 != r && !o) ||
                        ('"' == i && 4 == r && !o)) &&
                        ((r = 0), (c = !1), (l = !0));
                  }
                  if (c)
                    if ("\\" != i || o)
                      if (((o = !1), 1 == r)) a += i;
                      else {
                        if (3 != r && 4 != r)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + r,
                          );
                        n += i;
                      }
                    else o = !0;
                  l && ((t[a] = n), (a = ""), (n = ""));
                }
                0 != r && (t[a] = n);
                return t;
              })(i)))
            : ((o = {}), (s = r.toLocaleLowerCase())),
            e.push({ type: n, text: r, tag: s, args: o, rawargs: i });
        } else 0 != n && e.push({ type: n, text: r });
        return { type: a, text: "" };
      }
      function l(e) {
        let t = "";
        return (
          3 == e.type ? (t = "[/") : 2 == e.type && (t = "["),
          { type: 1, text: t + (e.text ?? "") }
        );
      }
    },
    40236: (e, t, a) => {
      "use strict";
      a.d(t, { OO: () => c, wY: () => i });
      var n = a(90626),
        r = a(8871),
        s = a(81393);
      function o(e, t) {
        return (0, r.QS)(
          (a) => {
            if (!a) return;
            const n = t(a.ownerDocument.defaultView, (t) => {
              e(t[0]);
            });
            return n.observe(a), () => n.unobserve(a);
          },
          [e, t],
        );
      }
      function i(e) {
        return o(
          e,
          n.useCallback(
            (e, t) =>
              e.ResizeObserver
                ? new e.ResizeObserver(t)
                : ((0, s.wT)(!1, "ResizeObserver is not available"),
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
        const a = n.useRef(void 0);
        return (function (e, t) {
          return o(
            e,
            n.useCallback((e, a) => new e.IntersectionObserver(a, t), [t]),
          );
        })((t) => {
          !a.current && t.isIntersecting && e.onEnter?.(t),
            a.current && !t.isIntersecting && e.onLeave?.(t),
            e.onIntersectionChange?.(t),
            (a.current = t.isIntersecting);
        }, t);
      }
    },
    78588: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => m });
      var n = a(74812),
        r = a(90626),
        s = a(8893),
        o = a(90717),
        i = a(26296),
        c = a(52038),
        l = a(61859),
        u = a(22797),
        d = a(18654),
        p = a.n(d);
      function m(e) {
        const { id: t, imageType: a, bPreferAssetWithoutOverride: d } = e,
          { storeItemAsset: m, storeItemDefaultInfo: g } = (0, n.q)(t, a, d);
        if (void 0 === m || !g)
          return r.createElement(u.t, {
            size: "small",
            position: "center",
            string: (0, l.we)("#Loading"),
          });
        if (null == m) return null;
        if ("library" === a || "vertical" == a)
          return r.createElement(s.G, {
            id: t,
            bPreferAssetWithoutOverride: d,
          });
        let f,
          _,
          h = (0, o.N)(m, "header" === a),
          E = "";
        if ("main" === a)
          (f = p().mainCapsuleImgWidth),
            (_ = p().mainCapsuleImgHeight),
            (E = p().MainCapsuleImageContainer);
        else
          (f = p().headerCapsuleImgWidth),
            (_ = p().headerCapsuleImgHeight),
            (E = p().HeaderCapsuleImageContainer);
        return r.createElement(
          "div",
          { className: (0, c.A)(E, "CapsuleImageCtn") },
          r.createElement(i.o, {
            lazyLoad: !0,
            srcs: h,
            className: (0, c.A)(p().CapsuleImage),
            width: f,
            height: _,
            alt: g.name,
          }),
        );
      }
    },
    90717: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => s, N: () => r });
      var n = a(42834);
      function r(e, t) {
        let a = [];
        return (
          e &&
            (function (e, t, a) {
              a
                ? e.push((0, n.b0)(t, "header"), (0, n.b0)(t, "main_capsule"))
                : e.push((0, n.b0)(t, "main_capsule"), (0, n.b0)(t, "header"));
            })(a, e, t),
          a.filter((e) => !!e)
        );
      }
      function s(e, t) {
        return {
          strStoreVerticalURL: (0, n.b0)(e, "hero_capsule"),
          strLibraryVerticalURL: (0, n.b0)(e, "library_capsule"),
        };
      }
    },
    8893: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => m });
      var n = a(74812),
        r = a(90626),
        s = a(18654),
        o = a.n(s),
        i = a(26296),
        c = a(52038),
        l = a(78327),
        u = a(90717),
        d = a(83164),
        p = a.n(d);
      function m(e) {
        const { id: t, bPreferLibrary: a, bPreferAssetWithoutOverride: s } = e,
          { storeItemDefaultInfo: d, storeItemAsset: m } = (0, n.q)(
            t,
            "vertical",
            s,
          ),
          [g, f] = r.useState(0);
        if (!d || !m)
          return r.createElement("div", {
            className: o().HeroCapsuleImageContainer,
          });
        const { strStoreVerticalURL: _, strLibraryVerticalURL: h } = (0, u.M)(
          m,
          d,
        );
        if (_ && (!a || !h))
          return r.createElement(
            "div",
            {
              className: (0, c.A)(
                o().HeroCapsuleImageContainer,
                "HeroCapsuleImageContainer",
              ),
            },
            r.createElement("img", {
              src: _,
              className: o().CapsuleImage,
              alt: d.name,
            }),
            Boolean(4 == d.type) &&
              r.createElement("img", {
                className: p().CornerSash,
                src: `${l.TS.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
                alt: "DLC",
              }),
          );
        if (h)
          return r.createElement(
            "div",
            {
              className: (0, c.A)(
                o().LibraryFallbackAssetImageContainer,
                o().VerticalCapsule,
                a ? o().ForceLibrarySizing : "",
              ),
            },
            r.createElement("div", {
              className: o().FallbackBackground,
              style: { backgroundImage: `url(${h})` },
            }),
            r.createElement("img", {
              src: h,
              className: o().CapsuleImage,
              alt: d.name,
            }),
          );
        const E = (0, u.N)(m, !0),
          b = E.length - 1,
          y = (e) => {
            const t = E.indexOf(e);
            t >= b && t < E.length - 1 && f(t + 1);
          };
        if (g < E.length) {
          const e = E[g];
          return r.createElement(
            "div",
            { className: o().LibraryFallbackAssetImageContainer },
            r.createElement("div", {
              className: o().FallbackBackground,
              style: { backgroundImage: `url(${e})` },
            }),
            r.createElement(i.o, {
              lazyLoad: !0,
              srcs: E,
              className: o().CapsuleImage,
              alt: d.name,
              onImageError: y,
            }),
          );
        }
        return r.createElement("div", {
          className: o().HeroCapsuleImageContainer,
        });
      }
    },
    20433: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => p, u: () => m });
      var n = a(90626),
        r = a(45699),
        s = a(55963),
        o = a(60014),
        i = a(49411),
        c = a(61336),
        l = a(52541),
        u = a(8527);
      a(78327);
      function d(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function p(e) {
        const {
            id: t,
            hoverClassName: a,
            fnGetIDOverride: r,
            fnHoverState: s,
            children: o,
          } = e,
          i = n.useRef(null),
          c = n.useCallback(
            (e) => {
              const a = d(t);
              a &&
                (s && s(!0),
                window.GameHover &&
                  window.GameHover(r ? r() : i.current, e, "global_hover", {
                    type: a,
                    id: (0, l.G$)(t).id,
                    v6: 1,
                  }));
            },
            [s, r, t],
          ),
          u = n.useCallback(
            (e) => {
              d(t) &&
                (s && e.relatedTarget && s(!1),
                window.HideGameHover &&
                  window.HideGameHover(r ? r() : i.current, e, "global_hover"));
            },
            [t, s, r],
          );
        return n.createElement(
          "div",
          {
            ref: i,
            className: a,
            onMouseEnter: c,
            onMouseLeave: u,
            onFocus: c,
            onBlur: u,
          },
          o,
        );
      }
      function m(e) {
        const {
            id: t,
            strExtraParams: a,
            fnOnClickOverride: m,
            strOverrideURL: g,
          } = e,
          f = (0, o.n9)(),
          _ = (0, i.w)(),
          h = (0, c.NT)(
            g ||
              (t && "creatorid" in t
                ? (0, s.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, l.G$))(t).id}${a ? `?${a}` : ""}`,
                    f,
                    _,
                  )
                : (0, s.It)(
                    `${u.TS.STORE_BASE_URL}${d(t)}/${((0, l.G$))(t).id}${a ? `?${a}` : ""}`,
                    f,
                    _,
                  )),
          );
        return n.createElement(
          p,
          { ...e },
          n.createElement(
            r.Ii,
            {
              className: e.className,
              href: m ? void 0 : h,
              target: u.TS.IN_CLIENT || m ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: m,
            },
            e.children,
          ),
        );
      }
    },
    74812: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => s });
      var n = a(81393),
        r = a(39777);
      function s(e, t, a = !1) {
        const { data: s } = (0, r.J$)(e),
          { data: o } = (0, r.lv)(e, a);
        let i;
        s &&
          1 == s.included_appids?.length &&
          !(function (e, t) {
            if (!e) return !1;
            switch (t) {
              case "header":
                return !!e.header;
              case "main":
                return !!e.main_capsule;
              case "vertical":
              case "library":
                return !!e.hero_capsule || !!e.library_capsule;
              default:
                return (0, n.z_)(t, `Unhandled imageType: ${t}`), !1;
            }
          })(o, t) &&
          s.item_type &&
          [1, 2].includes(s.item_type) &&
          (i = { appid: s.included_appids[0] });
        const { data: c } = (0, r.J$)(i),
          { data: l } = (0, r.lv)(i, a),
          u = c?.visible ? c : s;
        return { storeItemAsset: c?.visible ? l : o, storeItemDefaultInfo: u };
      }
    },
    75515: (e, t, a) => {
      "use strict";
      a.d(t, { PH: () => u, TT: () => s, h7: () => d, mY: () => l });
      var n = a(34629),
        r = a(14947);
      class s {
        constructor() {
          (0, r.Gn)(this);
        }
        accountid;
        steamid;
        appid;
        hub_popular;
        popular;
        relay_broadcast_id;
        rowversion;
        thumbnail_http_address;
        nAppIDVOD;
        title = void 0;
        viewer_count = void 0;
        whitelist_rank;
        gamedata_subtitle = void 0;
        store_title;
        left_panel;
        right_panel;
        snr;
        broadcast_chat_visibility;
        default_selection_priority = l.k_eGeneral;
        current_selection_priority = l.k_eGeneral;
      }
      (0, n.Cg)([r.sH], s.prototype, "title", void 0),
        (0, n.Cg)([r.sH], s.prototype, "viewer_count", void 0),
        (0, n.Cg)([r.sH], s.prototype, "gamedata_subtitle", void 0),
        (0, n.Cg)([r.sH], s.prototype, "current_selection_priority", void 0);
      const o = "primary",
        i = "featured",
        c = "default_featured";
      var l;
      function u(e) {
        switch (e) {
          case o:
            return l.k_ePrimary;
          case i:
            return l.k_eFeatured;
          case c:
            return l.k_eDefaultFeatured;
          default:
            return l.k_eGeneral;
        }
      }
      function d(e) {
        const t = e;
        return (
          !!(
            t &&
            "number" == typeof t.success &&
            t.filtered &&
            Array.isArray(t.filtered) &&
            t.broadcast_chat_visibility
          ) &&
          (0 == t.filtered.length || "string" == typeof t.filtered[0].accountid)
        );
      }
      !(function (e) {
        (e[(e.k_ePrimary = 3)] = "k_ePrimary"),
          (e[(e.k_eFeatured = 2)] = "k_eFeatured"),
          (e[(e.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured"),
          (e[(e.k_eGeneral = 0)] = "k_eGeneral");
      })(l || (l = {}));
    },
    42834: (e, t, a) => {
      "use strict";
      a.d(t, { b0: () => s, bu: () => o });
      var n = a(8527),
        r = a(81393);
      function s(e, t) {
        if (e[t]) {
          if ("community_icon" == t) {
            const a = e.asset_url_format
              .replace(/^steam\//, "images/")
              .replace("${FILENAME}", `${e[t]}.jpg`)
              .replace(/\?.*$/, "");
            return `${n.TS.MEDIA_CDN_COMMUNITY_URL}${a}`;
          }
          {
            const a = e.asset_url_format.replace("${FILENAME}", e[t]);
            return `${n.TS.STORE_ITEM_BASE_URL}${a}`;
          }
        }
      }
      function o(e, t = "full") {
        let a = "";
        switch (t) {
          case "thumb":
            a = ".116x65";
            break;
          case "600x338":
            a = ".600x338";
            break;
          case "1920x1080":
            a = ".1920x1080";
            break;
          case "full":
            a = "";
            break;
          default:
            (0, r.z_)(t, `Invalid size: ${t}`);
        }
        return (
          n.TS.STORE_ITEM_BASE_URL + e.filename.replace(/\.[^.*]$/, `${a}$&`)
        );
      }
    },
    29379: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => c });
      var n = a(60014),
        r = a(90626);
      const s = r.createContext({
        AddImpression: () => {
          console.log("Impression Tracking not enabled");
        },
        BIsValid: () => !1,
      });
      var o = a(30600),
        i = a(8871);
      function c(e) {
        const { appID: t, feature: a, depth: c, children: l } = e,
          u = (0, n.ru)(a, c),
          d = r.useContext(s),
          [p, m] = r.useState(void 0),
          g = r.useCallback(
            (e) => {
              e.isIntersecting &&
                m((e) =>
                  e?.appID == t && e?.snr == u ? e : { appID: t, snr: u },
                );
            },
            [t, u],
          );
        (0, r.useEffect)(() => {
          p && null != p.appID && d.AddImpression(p.appID, p.snr);
        }, [d, p]);
        const f = (0, o.BL)(g),
          _ = t && (!p || (p.appID != t && p.snr != u)),
          h = (0, i.Ue)(l.props.ref, _ ? f : void 0);
        return r.cloneElement(l, { ref: h });
      }
    },
    71420: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => s });
      var n = a(8527),
        r = a(62349);
      function s(e, t = !1) {
        if (e)
          return t && (0, r.J)(e)
            ? `${n.TS.STORE_BASE_URL}app/${((0, r.S))(e)[0]}`
            : `${n.TS.STORE_BASE_URL}${e.store_url_path}`;
      }
    },
    63556: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => p, O: () => d });
      var n = a(34629),
        r = a(14947),
        s = a(65946),
        o = a(22837),
        i = a(62490),
        c = a(6419),
        l = a(78327),
        u = a(91986);
      class d {
        m_eCurLang = (0, o.sf)(l.TS.LANGUAGE);
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
            d.s_globalSingletonStore ||
              ((d.s_globalSingletonStore = new d()),
              "dev" == l.TS.WEB_UNIVERSE &&
                (window.DUS = d.s_globalSingletonStore)),
            d.s_globalSingletonStore
          );
        }
        constructor() {
          (0, r.Gn)(this);
        }
      }
      function p() {
        return (0, s.q3)(() => d.Get().GetCurEditLanguage());
      }
      (0, n.Cg)([r.sH], d.prototype, "m_eCurLang", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_rgHasData", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bHasLocalizationContext", void 0),
        (0, n.Cg)([c.o], d.prototype, "GetCurEditLanguage", null),
        (0, n.Cg)([c.o], d.prototype, "SetCurEditLanguage", null),
        (0, n.Cg)([r.XI.bound], d.prototype, "SetHasLanguage", null),
        (0, n.Cg)([c.o], d.prototype, "BHasLanguageData", null);
    },
    96001: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => c, z: () => i });
      var n = a(81393),
        r = a(96059),
        s = a(30470),
        o = a(24484);
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
          const e = (0, o.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          (0, n.wT)(Boolean(e), "require promotion_operation_token"),
            (this.m_steamInterface = new r.D(s.TS.WEBAPI_BASE_URL, e));
        }
      }
      function c() {
        return i.Get().GetPromotionTransport().GetServiceTransport();
      }
    },
    27144: (e, t, a) => {
      "use strict";
      a.d(t, { B3: () => v, CF: () => I, KM: () => E, KT: () => S });
      var n = a(41735),
        r = a.n(n),
        s = a(58632),
        o = a.n(s),
        i = a(90626),
        c = a(20194),
        l = a(75233),
        u = a(17720),
        d = a(68797),
        p = a(78327),
        m = a(56545),
        g = a(37735),
        f = a(23809),
        _ = a(7860);
      const h = "nicknames";
      function E(e) {
        const t = (0, f.KV)(),
          { data: a, isLoading: n } = (0, c.I)({
            queryKey: [h],
            queryFn: async () => {
              const e = new Map();
              if (p.iA.logged_in) {
                const a = m.w.Init(g.dN),
                  n = (await g.xt.GetNicknameList(t, a)).Body().toObject();
                n?.nicknames &&
                  n.nicknames.length > 0 &&
                  n.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return a ? a.get(e) : null;
      }
      const b = new (o())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, p.yK)()
                  ? p.TS.COMMUNITY_BASE_URL
                  : p.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const a = { accountid: e[0], origin: self.origin },
                  n = await r().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: a,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  1 != n.data?.success ||
                  !n.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(n).strErrorMsg}`;
                return [n.data.userinfo];
              }
              {
                const a = { accountids: e.join(","), origin: self.origin },
                  n = await r().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: a,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  1 != n.data?.success ||
                  !n.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(n).strErrorMsg}`;
                const s = new Map();
                return (
                  n.data.userinfos.forEach((e) =>
                    s.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        y = "avatarandpersonas";
      function S(e) {
        const { data: t, isLoading: a } = (0, c.I)({
          queryKey: [y, e],
          queryFn: () => b.load(e),
        });
        return [t, a];
      }
      function v(e) {
        const t = (0, l.jE)(),
          { data: a, isLoading: n } = (0, c.I)({
            queryKey: [y, e],
            queryFn: async () => {
              const a = await b.loadMany(e);
              return (
                a.forEach((e) => {
                  const a = [y, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(a, e);
                }),
                a
              );
            },
            enabled: e?.length > 0,
          }),
          r = (0, i.useMemo)(() => {
            const e = new Array();
            return (
              a?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [a]);
        return n ? null : r;
      }
      function I(e) {
        return _.L.getQueryData([y, e]);
      }
    },
    1909: (e, t, a) => {
      "use strict";
      a.d(t, { Ng: () => h, iN: () => E, yk: () => b });
      var n = a(34629),
        r = a(75844),
        s = a(65946),
        o = a(90626),
        i = a(22837),
        c = a(2160),
        l = a(63556),
        u = a(95695),
        d = a.n(u),
        p = a(52038),
        m = a(61859),
        g = a(91675),
        f = a(73745),
        _ = a(32754);
      let h = class extends o.Component {
        GenerateLanguageOptions() {
          let e = [];
          const {
            fnFilterLanguage: t,
            fnLangHasData: a,
            fnLastUpdateRTime: n,
            fnIsLangSupported: r,
          } = this.props;
          this.props.bAllowUnsetOption &&
            e.push(
              o.createElement(
                "option",
                { key: "langpicker_unset", value: -1 },
                (0, m.we)("#language_selection_none"),
              ),
            );
          let s = new Array();
          const l = this.props.realms || [c.TU.k_ESteamRealmGlobal];
          for (const e of m.A0.GetLanguageListForRealms(l)) {
            if (t && !t(e)) continue;
            const a = (0, i.Lg)(e),
              n = (0, m.we)("#Language_" + a),
              o = Boolean(r) && r(e);
            s.push({ eLang: e, sLocName: n, bSupported: o });
          }
          s.sort((e, t) =>
            e.bSupported != t.bSupported
              ? e.bSupported
                ? -1
                : 1
              : e.sLocName.localeCompare(t.sLocName),
          );
          let u = !1;
          for (const t of s) {
            t.bSupported != u &&
              (e.push(
                o.createElement(
                  "option",
                  {
                    key: t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: d().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, m.we)(
                    t.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (u = t.bSupported));
            const r = a && a(t.eLang),
              s = n && n(t.eLang);
            let i = t.sLocName;
            s &&
              0 !== s &&
              ((i += " "),
              (i += (0, m.we)(
                "#Language_Last_Update",
                (0, m.$z)(s) + " @ " + (0, g.KC)(s, { bForce24HourClock: !1 }),
              ))),
              e.push(
                o.createElement(
                  "option",
                  {
                    key: "langpicker" + t.eLang + (r ? "_hasdata" : ""),
                    value: t.eLang,
                    className: (0, p.A)(
                      { [d().LanguageWithContent]: r },
                      t.bSupported
                        ? d().SupportedLanguage
                        : d().UnsupportedLanguage,
                    ),
                  },
                  i,
                ),
              );
          }
          return e;
        }
        OnLanguageChange(e) {
          const { fnOnLanguageChanged: t, selectedLang: a } = this.props;
          let n = Number.parseInt(e.currentTarget.value);
          n != a && t && t(n);
        }
        render() {
          const { selectedLang: e, bDisabled: t, strTooltip: a } = this.props;
          let n = this.GenerateLanguageOptions();
          return o.createElement(
            _.he,
            { toolTipContent: a },
            o.createElement(
              "select",
              { value: e, onChange: this.OnLanguageChange, disabled: t },
              n,
            ),
          );
        }
      };
      function E(e) {
        const [t, a] = (0, s.q3)(() => [
          l.O.Get().GetHasLocalizationContext(),
          l.O.Get().GetCurEditLanguage(),
        ]);
        return o.createElement(h, {
          selectedLang: a,
          fnLangHasData: l.O.Get().BHasLanguageData,
          fnOnLanguageChanged: l.O.Get().SetCurEditLanguage,
          bDisabled: !t,
          strTooltip: t ? void 0 : (0, m.we)("#Localization_EditorNotInFocus"),
        });
      }
      function b(e) {
        const { fnLangHasData: t } = e;
        o.useEffect(
          () => (
            l.O.Get().SetHasLocalizationContext(!0),
            () => l.O.Get().SetHasLocalizationContext(!1)
          ),
          [],
        );
        const a = (0, s.q3)(() => {
          const e = [];
          for (let a = 0; a < 31; ++a) e[a] = t && t(a);
          return e;
        });
        return (
          o.useEffect(() => l.O.Get().SetHasLanguage(a), [a]),
          o.createElement(o.Fragment, null)
        );
      }
      (0, n.Cg)([f.oI], h.prototype, "OnLanguageChange", null),
        (h = (0, n.Cg)([r.PA], h));
    },
    94011: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => o });
      var n = a(90626),
        r = a(61859),
        s = a(35050);
      function o() {
        return n.createElement(
          "div",
          { className: s.bordered_live_stream_icon },
          (0, r.we)("#home_page_live_broadcast"),
        );
      }
    },
    88961: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => S });
      var n = a(8527),
        r = a(20194),
        s = a(75233),
        o = a(24484),
        i = a(75515);
      var c = a(63664),
        l = a(39777),
        u = (a(35380), a(90626));
      function d() {
        return (0, r.I)({
          queryKey: ["BroadcastApps"],
          queryFn: async () => {
            const e = await (async function () {
              let e = (0, o.Tc)(
                "broadcast_available_for_page",
                "application_config",
              );
              if ((0, i.h7)(e)) {
                const t = new Set();
                return (
                  e.filtered.forEach((e) => {
                    e.appid && t.add(e.appid);
                  }),
                  Array.from(t)
                );
              }
              return [];
            })();
            return new Set(e);
          },
        });
      }
      var p = a(58918),
        m = a(17376);
      const g =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC";
      var f = a(18654),
        _ = a.n(f),
        h = a(12155),
        E = a(52038),
        b = a(61859),
        y = a(94011);
      function S(e) {
        const { appids: t, hide_status_banners: a, show_early_access: r } = e,
          { data: o } = (0, p.$Y)(),
          { data: i } = (0, m.F0)(),
          f = t.length > 0 && t.every((e) => o && o.has(e)),
          S = t.length > 0 && t.every((e) => i && i.has(e)),
          I = (function (e) {
            const { data: t } = d(),
              [a, n] = (0, u.useState)(!1),
              r = (0, s.jE)(),
              o = (0, c.eG)();
            return (
              (0, u.useEffect)(() => {
                if (!e || 0 == e.length || !t) return n(!1);
                (async () => {
                  const a = await Promise.all(
                    e.map((e) => r.fetchQuery((0, l.us)(o, { appid: e }))),
                  );
                  n(
                    a.some(
                      (e) =>
                        (e && e.appid && t.has(e.appid)) ||
                        (e?.related_items?.parent_appid &&
                          t.has(e.related_items.parent_appid)),
                    ),
                  );
                })();
              }, [e, o, r, t]),
              a
            );
          })(t),
          C = f && !a,
          L = S && !a,
          A = !a && r;
        return u.createElement(
          "div",
          { className: (0, E.A)(_().CapsuleDecorators, "CapsuleDecorators") },
          C &&
            u.createElement(
              "span",
              { className: (0, E.A)(_().Banner, _().Blue) },
              u.createElement("img", {
                src: (0, n.YJ)(g),
                className: _().LinesImg,
              }),
              (0, b.we)("#Sale_InLibrary"),
            ),
          L &&
            u.createElement(
              "span",
              { className: _().Banner },
              u.createElement(h.qnF, { className: _().LinesImg }),
              (0, b.we)("#Sale_OnWishlist"),
            ),
          A && !C && !L && u.createElement(v, { appids: t }),
          I && u.createElement(y.K, null),
        );
      }
      function v(e) {
        const { appids: t } = e,
          a = (function (e) {
            const [t, a] = (0, u.useState)(!1),
              n = (0, s.jE)(),
              r = (0, c.eG)();
            return (
              (0, u.useEffect)(() => {
                if (!e || 0 == e.length) return a(!1);
                (async () => {
                  const t = await Promise.all(
                    e.map((e) => n.fetchQuery((0, l.us)(r, { appid: e }))),
                  );
                  a(t.some((e) => e && e.is_early_access));
                })();
              }, [e, r, n]),
              t
            );
          })(t);
        return a
          ? u.createElement(
              "span",
              { className: (0, E.A)(_().Banner, _().EarlyAccessGradient) },
              (0, b.we)("#Sale_EarlyAccess"),
            )
          : null;
      }
    },
    72860: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => u });
      var n = a(71420),
        r = a(55963),
        s = a(70300),
        o = a(81393),
        i = a(56011),
        c = a(61859),
        l = a(61336);
      function u(e, t, a, u, d, p) {
        if (!a) return;
        if (!(0, s.nz)(e.item_type))
          return void (0, o.wT)(
            !1,
            "StoreItemWidgetSalePageAction: unexpected type: " + e.item_type,
          );
        const m = (0, r.wJ)(`${(0, n._)(e, u)}${d ? `?${d}` : ""}`, t);
        return {
          onClick: (e) => {
            let t = (0, i.uX)(e) || window;
            p
              ? p(e)
              : m.startsWith("steam://") || (t.location.href = (0, l.NT)(m));
          },
          onOKActionDescription: (0, c.we)("#Sale_Gamepad_Action_Select"),
        };
      }
    },
    70300: (e, t, a) => {
      "use strict";
      a.d(t, { nz: () => i, oj: () => c, qr: () => o });
      var n = a(90626),
        r = a(81886),
        s = a(29379);
      function o(e) {
        return "bundle" == e
          ? "bundle"
          : "sub" == e
            ? "sub"
            : ((0, r.fp)(e), "app");
      }
      function i(e) {
        return 2 == e ? "bundle" : 1 == e ? "sub" : "app";
      }
      const c = (e) => {
        const { appid: t } = e,
          a = n.createElement(
            "div",
            { className: "ImpressionTrackedElement" },
            e.children,
          );
        return t ? n.createElement(s.A, { appID: t }, a) : a;
      };
    },
    36814: (e, t, a) => {
      "use strict";
      a.d(t, { XC: () => d });
      var n = a(90626),
        r = a(12155),
        s = a(52038);
      a(13871);
      function o(e, t, a, r) {
        n.useEffect(() => {
          const n = (n) => {
            n.key === e &&
              (t(n), a && n.preventDefault(), r && n.stopPropagation());
          };
          return (
            document.addEventListener("keydown", n),
            () => document.removeEventListener("keydown", n)
          );
        }, [e, t, a, r]);
      }
      var i = a(9154),
        c = a(39449),
        l = a.n(c),
        u = a(61859);
      function d() {
        const [e, t] = n.useState(void 0),
          a = n.useCallback(() => t(void 0), []),
          r = n.createElement(
            i.EN,
            { active: void 0 !== e },
            n.createElement(p, { closeModal: a, rgImageURL: e }),
          );
        return [t, r];
      }
      function p(e) {
        const { closeModal: t, rgImageURL: a } = e,
          [r, s] = n.useState(0),
          o = a?.length ?? 0,
          c = n.useCallback(() => {
            s(0 == r ? o - 1 : r - 1);
          }, [r, o]),
          d = n.useCallback(() => {
            s(a && r + 1 >= o ? 0 : r + 1);
          }, [r, a, o]);
        return n.createElement(
          i.eV,
          {
            title: (0, u.we)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: t,
            bHideCloseIcon: !0,
            modalClassName: l().PopupScreenshotModal,
          },
          n.createElement(m, {
            index: r,
            numElements: a?.length || 0,
            fnForward: d,
            fnBackwards: c,
            fnClose: t,
            bCircular: !0,
          }),
          n.createElement(
            "div",
            { className: l().PopupScreenshotContainer },
            n.createElement("img", {
              className: l().PopupScreenshot,
              src: a?.[r],
            }),
          ),
        );
      }
      function m(e) {
        const {
          index: t,
          numElements: a,
          fnForward: i,
          fnBackwards: c,
          fnClose: u,
          bCircular: d,
        } = e;
        o("ArrowLeft", () => c?.(), !0, !0),
          o("Left", () => c?.(), !0, !0),
          o("ArrowRight", () => i?.(), !0, !0),
          o("Right", () => i?.(), !0, !0),
          o("Escape", () => u && u(), !0, !0),
          o("Esc", () => u && u(), !0, !0);
        let p = a > 1;
        return n.createElement(
          "div",
          { className: l().ButtonCtn },
          p &&
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "div",
                {
                  className: (0, s.A)(
                    l().ButtonIcon,
                    0 !== t || d ? null : l().Disabled,
                  ),
                  onClick: c,
                },
                n.createElement(r.V5W, { angle: 270 }),
              ),
              n.createElement(
                "div",
                {
                  className: (0, s.A)(
                    l().ButtonIcon,
                    t !== a - 1 || d ? null : l().Disabled,
                  ),
                  onClick: i,
                },
                n.createElement(r.V5W, { angle: 90 }),
              ),
            ),
          n.createElement(
            "div",
            { className: l().ButtonIcon, onClick: u },
            n.createElement(r.X, null),
          ),
        );
      }
    },
    54492: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => l });
      var n = a(39777),
        r = a(90626),
        s = a(91822),
        o = a(52038),
        i = a(78327),
        c = a(58855);
      function l(e) {
        const { bAllowOutsideOfDeck: t } = e;
        return (0, i.Qn)() || t ? r.createElement(u, { ...e }) : null;
      }
      function u(e) {
        const { className: t, id: a } = e,
          i = (0, n.qI)(a),
          [l, u] = (0, s.FD)();
        let d = "unknown";
        if (2 == u)
          switch (i.data?.steam_os_compat_category) {
            case 2:
              d = "steamoscompatible";
              break;
            case 1:
              d = "steamosunsupported";
              break;
            case 0:
              d = "steamosunknown";
          }
        else
          switch (i.data?.steam_deck_compat_category) {
            case 3:
              d = "verified";
              break;
            case 2:
              d = "playable";
              break;
            case 1:
              d = "unsupported";
          }
        return r.createElement("div", {
          className: (0, o.A)(c.CompatIcon, "ds_steam_deck_compat", d, t),
        });
      }
    },
    26296: (e, t, a) => {
      "use strict";
      a.d(t, { i: () => c, o: () => i });
      var n = a(90626),
        r = a(61859),
        s = a(67523),
        o = a(41951);
      function i(e) {
        const {
            className: t,
            srcs: a,
            lazyLoad: r,
            width: s,
            height: o,
            alt: i,
            crossOrigin: c,
          } = e,
          [l, u] = n.useState(a.length),
          [d, p] = n.useState(0);
        n.useEffect(() => {
          l != a.length && (u(a.length), p(0));
        }, [l, a.length]);
        const m = n.useCallback(() => {
          e.onImageError && e.onImageError(e.srcs[d]),
            d + 1 < e.srcs.length && p(d + 1);
        }, [d, e]);
        return 0 == a.length
          ? null
          : n.createElement("img", {
              className: t,
              src: a[d],
              crossOrigin: c,
              onError: m,
              loading: r ? "lazy" : void 0,
              width: s,
              height: o,
              alt: i,
            });
      }
      function c(e) {
        const [t, a] = n.useState(!1),
          {
            className: i,
            src: c,
            lazyLoad: l,
            width: u,
            height: d,
            alt: p,
            crossOrigin: m,
          } = e;
        return t
          ? n.createElement(
              "div",
              { className: s.ErrorDiv },
              n.createElement("p", null, (0, r.we)("#Image_ErrorTitle", c)),
              n.createElement(
                "ul",
                null,
                n.createElement("li", null, (0, r.we)("#Image_Error_msg1")),
              ),
              n.createElement("p", null, (0, r.we)("#Image_Error_suggestion")),
            )
          : n.createElement(o.o, {
              className: i,
              src: c,
              onError: () => a(!0),
              crossOrigin: m,
              loading: l ? "lazy" : void 0,
              width: u,
              height: d,
              alt: p,
            });
      }
    },
    41951: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => p });
      var n = a(90626),
        r = a(12155),
        s = a(52038),
        o = a(36814),
        i = a(10224),
        c = a(21038);
      const l = 1.3,
        u = 3,
        d = 256;
      function p(e) {
        const [t, a] = (0, n.useState)(!1),
          [p, m] = (0, n.useState)({
            naturalWidth: 0,
            naturalHeight: 0,
            displayWidth: 0,
            displayHeight: 0,
          }),
          g = (0, n.useRef)(null),
          [f, _] = (0, o.XC)();
        return (
          (0, n.useEffect)(() => {
            if (
              p.naturalWidth > p.displayWidth * l &&
              p.naturalHeight > p.displayHeight * l &&
              p.naturalWidth > d
            ) {
              p.naturalWidth / p.naturalHeight < u && a(!0);
            }
          }, [p]),
          t
            ? n.createElement(
                "span",
                { className: c.PreviewCtn },
                _,
                n.createElement(
                  "span",
                  { className: c.SVG },
                  n.createElement(r.YNO, null),
                ),
                n.createElement("img", {
                  ...e,
                  className: (0, s.A)({
                    ...(e.className && { [e.className]: !0 }),
                  }),
                  onClick: (t) => {
                    e.src && f([e.src]);
                  },
                }),
              )
            : n.createElement("img", {
                ...e,
                ref: g,
                onLoad: (e) => {
                  if (!e.currentTarget.closest("a") && !(0, i.c5)()) {
                    const {
                      naturalWidth: t,
                      naturalHeight: a,
                      width: n,
                      height: r,
                    } = e.currentTarget;
                    m({
                      naturalWidth: t,
                      naturalHeight: a,
                      displayWidth: n,
                      displayHeight: r,
                    });
                  }
                },
              })
        );
      }
    },
    48479: (e, t, a) => {
      "use strict";
      a.d(t, { AQ: () => m, pn: () => f, qx: () => g });
      var n = a(16676),
        r = a(61859),
        s = a(12155),
        o = a(90626),
        i = a(52038),
        c = a(95695),
        l = a(84811),
        u = a(64734),
        d = a(65946),
        p = a(26408);
      function m(e) {
        const {
            title: t,
            tooltip: a,
            getMinimized: n,
            toggleMinimized: r,
            className: s,
            children: m,
            elAdditionalButtons: g,
          } = e,
          _ = (0, d.q3)(() => n());
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            {
              className: (0, i.A)(
                s,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            o.createElement(
              "div",
              {
                className: (0, i.A)(
                  c.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(a) && o.createElement(p.o, { tooltip: a }),
            ),
            o.createElement(
              "div",
              { className: u.SectionTitleButtons },
              g,
              o.createElement(f, { bIsMinimized: _, fnToggleMinimize: r }),
            ),
          ),
          !_ && o.createElement(l.tH, null, m),
        );
      }
      function g(e) {
        const [t, a] = o.useState(Boolean(e.bStartMinimized));
        return o.createElement(
          m,
          { ...e, getMinimized: () => t, toggleMinimized: () => a(!t) },
          e.children,
        );
      }
      function f(e) {
        const { bIsMinimized: t, fnToggleMinimize: a } = e,
          i = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return o.createElement(
          n.$n,
          { "data-tooltip-text": (0, r.we)(i), onClick: a },
          e.bIsMinimized
            ? o.createElement(s.hz4, null)
            : o.createElement(s.Xjb, null),
        );
      }
    },
  },
]);

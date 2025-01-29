/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8758],
  {
    19976: (e) => {
      e.exports = {
        DashStatsContainerPlaceholder: "_2BvHwqhjDNBILY7HxYZ5fA",
        DashStatsContainer: "_2pZUWz9doUUVgJTIiA_5qb",
        Chart: "_2z00NeTIYdtaDdJPVZrLm2",
        Stats: "_2jxzC1AyBA_xxpsnV5l1uW",
        StatsTitle: "UzSNxw8oOZZcgW8SXBp54",
        StatSubtitle: "_24k9yBmCwJ4zrfjtg4_A3D",
        Concurrent: "_3W_8ES3hX7fVooWDlaL9Q-",
        Now: "_2QJ6AbiOJ3XddtA1cOYnCp",
        CurrentStats: "_4ImisFVqyptwO9u0G6-0g",
        TooltipPartnerSummary: "_2WuiD5rL3fQXyAI5CXaOiX",
        LineItemsCtn: "_2Vj424_xUjyMnNmBpDenLi",
        ToolTipTable: "_1CBlLckQLSqavhG2S5qNYb",
        ToolTipTableRow: "_1hcQcqAFKPCYQUGtHIcGn4",
        TotalRow: "_1esRSJn8rPckHux_JS4iQg",
        ToolTipTableCell: "iIyyn73ITYmBOzqghT5NY",
        ModuleCtn: "_2jVePp7nya3Nj-SFteMHaj",
        LeftAlign: "mgkgnb7LlDnVJwX6L29YM",
        ModuleTitle: "_1_qWSYHWj0MC9ivPG5LNEJ",
        ViewDetailLink: "_3LC92YRlgqBty5woF3CakT",
        HeaderCtn: "-BcZBPWZjsiRyi3CtgICp",
        StatGroup: "_2H61dmCW7zg12hj9OKWviV",
        Header: "gpt4bNGeQpWFC9R3TR6gU",
        Numerals: "_1aa9BSk_Qolo1ZpNuEGUqD",
      };
    },
    52249: (e) => {
      e.exports = {
        Results: "_3mK1PrFPrbrn2M-BbAWsmL",
        LoadingContainer: "K7yNfrxTJs0QuoFtUfy0z",
        ResultRow: "_1QyQulOsH0dGeFUVgSa9ki",
        GameName: "_353QhAGCSYbIguu7o4DJgs",
        Label: "_3MUfh3QKRNr6qY0vEz3p04",
        AvatarImageCtn: "_3h9l9X-3dBSAhMflfovg2K",
        AvatarImage: "PBBKP18ULuCWFwYcEIOdW",
        AppSearchInputContainer: "oxxmBMFO82IJEm1H341Wd",
        AppSearchDLCCheckbox: "_1aduni8VCqZVqqDxyXb-pY",
      };
    },
    41609: (e) => {
      e.exports = {
        WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
        WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
        WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
        Grabbable: "riuelIz655g_IBddWfLQ-",
        Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
        DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
        WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
        ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
        DragElementStart: "_1LQ1GCTblYDL8enZ2mBhTD",
        DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
        DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
      };
    },
    23910: (e, t, r) => {
      "use strict";
      r.d(t, {
        DU: () => l,
        I8: () => a,
        Rw: () => i,
        Sy: () => c,
        e5: () => u,
        k: () => s,
        nY: () => o,
        rz: () => d,
        s8: () => m,
        uu: () => n,
      });
      const n = [1, 2, 11, 3, 4, 10, 5, 6, 13, 14, 15, 16],
        a = [
          "#msg_action_details",
          "#msg_preload_now",
          "#msg_preload_now_for_free",
          "#msg_prepurchase_now",
          "#msg_play_now",
          "#msg_play_it_now",
          "#msg_weekend_play_free",
          "#msg_action_buy",
          "#msg_action_info",
          "#Library_Update_TryItNow2",
        ];
      function i(e) {
        switch (e) {
          case 1:
            return "Now Available";
          case 2:
            return "Weekend Deal";
          case 3:
            return "Pre-Purchase";
          case 4:
            return "Play Now";
          case 6:
            return "General";
          case 7:
            return "on Demo Quit";
          case 9:
            return "EJ's Korner";
          case 5:
            return "Pre-Load Now";
          case 8:
            return "Gifting Message";
          case 10:
            return "Major Update";
          case 11:
            return "Midweek Deal";
          case 12:
            return "Daily Deal";
          case 13:
            return "New DLC";
          case 14:
            return "Free Weekend";
          case 15:
            return "Sale Page";
          case 16:
            return "Play Test";
          default:
            return "--------------------";
        }
      }
      const s = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10];
      function o(e) {
        switch (e) {
          case 0:
            return "Invalid type";
          case 1:
            return "Owns apps";
          case 2:
            return "Does not own apps";
          case 3:
            return "Owns packages";
          case 4:
            return "Does not own packages";
          case 5:
            return "Wishlists apps";
          case 6:
            return "Follows apps";
          case 8:
            return "Launched apps";
          case 7:
            return "Played apps a lot";
          case 9:
            return "Recently played apps";
          case 10:
            return "Lapsed players for apps";
        }
        return "Unknown Type";
      }
      function l(e) {
        switch (e) {
          case 8:
            return "Just launched the app just once";
          case 7:
            return "Minimum of 4 hours of playtime";
          case 9:
            return "Played the app within the last year";
          case 10:
            return "Played the app within the last year but not in the last three months";
        }
      }
      function c(e) {
        switch (e) {
          case 3:
          case 4:
            return !0;
        }
        return !1;
      }
      var m;
      function u(e, t) {
        let r = !0;
        return (
          1 == e
            ? (r = t?.startsWith("https://store.steamchina.com/"))
            : 2 == e && (r = t?.startsWith("https://store.steampowered.com/")),
          r
        );
      }
      !(function (e) {
        (e[(e.k_EMarketingMessageFlagsNone = 0)] =
          "k_EMarketingMessageFlagsNone"),
          (e[(e.k_EMarketingMessageFlagsHighPriority = 1)] =
            "k_EMarketingMessageFlagsHighPriority"),
          (e[(e.k_EMarketingMessageFlagsPlatformWindows = 2)] =
            "k_EMarketingMessageFlagsPlatformWindows"),
          (e[(e.k_EMarketingMessageFlagsPlatformMac = 4)] =
            "k_EMarketingMessageFlagsPlatformMac"),
          (e[(e.k_EMarketingMessageFlagsPlatformLinux = 8)] =
            "k_EMarketingMessageFlagsPlatformLinux"),
          (e[(e.k_EMarketingMessageFlagsPlatformRestrictions = 14)] =
            "k_EMarketingMessageFlagsPlatformRestrictions");
      })(m || (m = {}));
      const d = {
        include_assets: !0,
        include_basic_info: !0,
        include_release: !0,
      };
    },
    82829: (e, t, r) => {
      "use strict";
      r.d(t, { y5: () => _, c2: () => f });
      var n = r(56545),
        a = r(59411),
        i = r(15161),
        s = r(58632),
        o = r.n(s),
        l = r(90626),
        c = r(20194),
        m = r(62792),
        u = r(72963),
        d = r(81393),
        p = r(96059),
        g = r(30470),
        h = r(24484);
      class b {
        m_steamInterface;
        GetPromotionTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            b.s_Singleton || ((b.s_Singleton = new b()), b.s_Singleton.Init()),
            b.s_Singleton
          );
        }
        Init() {
          const e = (0, h.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          (0, d.w)(Boolean(e), "require partnerbrowse_webapi_token"),
            (this.m_steamInterface = new p.D(g.TS.WEBAPI_BASE_URL, e));
        }
      }
      function f(e) {
        const t = b.Get().GetPromotionTransport().GetServiceTransport(),
          r = l.useContext(w);
        return (0, c.I)(y(r, t, e));
      }
      function _(e) {
        return u.L.getQueryData(["StoreItemCountryRestriction", (0, m.wD)(e)]);
      }
      const w = l.createContext({
        loadStoreItemCountryRestriction: async (e, t) =>
          await (function (e) {
            B ||
              (B = new (o())(
                async (t) => {
                  const r = n.w.Init(a.zo);
                  r.Body().set_ids(t.map((e) => i.O4.fromObject(e)));
                  const s = await a.BT.GetCountryRestrictions(e, r);
                  if (!s.BSuccess())
                    throw `Failed to call store Item Country Restriction with details: ${s.GetErrorMessage()}`;
                  const o = new Map();
                  return (
                    s
                      .Body()
                      .results()
                      .forEach((e) => {
                        const t = e.toObject();
                        o.set((0, m.wD)(t.id), t);
                      }),
                    t.map((e) => o.get((0, m.wD)(e)) ?? null)
                  );
                },
                { maxBatchSize: 100, cache: !1 },
              ));
            return B;
          })(t).load(e),
      });
      function y(e, t, r) {
        return {
          queryKey: ["StoreItemCountryRestriction", (0, m.wD)(r)],
          queryFn: () => e.loadStoreItemCountryRestriction(r, t),
          enabled: !!r,
        };
      }
      let B;
    },
    27429: (e, t, r) => {
      "use strict";
      function n(e, t) {
        const r = new Date(1e3 * e),
          n = t ? new Date(1e3 * t) : new Date(r);
        t || n.setDate(r.getDate() + 6);
        const a = r.toLocaleString("en-US", { month: "short" }),
          i = r.getDate(),
          s = n.toLocaleString("en-US", { month: "short" }),
          o = n.getDate();
        return a === s ? `${a} ${i} - ${o}` : `${a} ${i} - ${s} ${o}`;
      }
      function a(e) {
        let t = i(e);
        return t.endsWith("M") || t.endsWith("K")
          ? `$${t}`
          : new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(Number(t));
      }
      function i(e) {
        let t;
        return (
          (t =
            Math.abs(e) >= 1e6
              ? (e / 1e6).toFixed(1) + "M"
              : Math.abs(e) >= 1e3
                ? (e / 1e3).toFixed(1) + "K"
                : e.toFixed(2)),
          t
        );
      }
      r.d(t, { E8: () => n, Z2: () => a, ct: () => i });
    },
    73967: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => z, q: () => N });
      var n = r(23910),
        a = r(65946),
        i = r(90626),
        s = r(17720),
        o = r(4796),
        l = r(80613),
        c = r(89068),
        m = r(56545);
      const u = l.Message;
      class d extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.steamid || c.Sg(d.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  accept: { n: 2, br: c.qM.readBool, bw: c.gp.writeBool },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = c.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class p extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class g extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || c.Sg(g.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  rtime_oldest_date: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
        }
      }
      class h extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.snippets || c.Sg(h.M()),
            u.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { snippets: { n: 1, c: b, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = c.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
        }
      }
      class b extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.gid || c.Sg(b.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  gid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 2,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  hidden: { n: 3, br: c.qM.readBool, bw: c.gp.writeBool },
                  published: { n: 4, br: c.qM.readBool, bw: c.gp.writeBool },
                  rtime32_start_time: {
                    n: 5,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  event_name: {
                    n: 6,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  event_type: { n: 7, br: c.qM.readEnum, bw: c.gp.writeEnum },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = c.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
        }
      }
      class f extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.requests || c.Sg(f.M()),
            u.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  requests: { n: 1, c: _, r: !0, q: !0 },
                  cursor: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class _ extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || c.Sg(_.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  branch: { n: 4, br: c.qM.readString, bw: c.gp.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = c.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class w extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.matches || c.Sg(w.M()),
            u.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  matches: { n: 1, c: y, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = c.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class y extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.appid || c.Sg(y.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  build_id: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  branch: { n: 3, br: c.qM.readString, bw: c.gp.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = c.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      var B;
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, m.I8)(d, t), p, {
            ePrivilege: 1,
          });
        }),
          (e.GetDraftAndRecentPartnerEventSnippet = function (e, t) {
            return e.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, m.I8)(g, t),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, m.I8)(f, t),
              w,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(B || (B = {}));
      var C = r(96001),
        S = r(20194);
      var E = r(44165),
        v = r(62792),
        M = r(55263),
        R = r(52038),
        A = r(71541),
        D = r(56330),
        I = r(22797),
        x = r(61859),
        T = r(30470),
        F = r(26408);
      function z(e) {
        const { oEditableMessage: t } = e,
          [r] = (0, a.q3)(() => [t.GetStoreItemKey()]);
        return r && "app" == r.item_type
          ? i.createElement(k, { oEditableMessage: t, idKey: r })
          : i.createElement(
              "div",
              { className: D.ErrorStylesWithIcon },
              "Error: Major Update does not support anything but targeting app",
            );
      }
      function k(e) {
        const { oEditableMessage: t, idKey: r } = e,
          [o, l] = (0, a.q3)(() => [
            t.GetUpdateEventClanAccountID(),
            t.GetUpdateEventGID(),
          ]),
          [c] = (0, M.G6)(r?.id, (0, v.JK)(r?.item_type), n.rz),
          m = (0, i.useMemo)(() => s.b.InitFromClanID(o), [o]),
          u = 12 != c?.GetAppType() ? c?.GetParentAppID() : void 0;
        return i.createElement(
          "div",
          null,
          i.createElement(N, {
            appid: u || r.id,
            selectedEventGID: l,
            fnSetUpdateEvent: t.SetUpdateEvent,
            label: (0, x.we)("#EventDropDown_MM_FeaturedEvent"),
            tooltip: (0, x.we)("#EventDropDown_MM_FeaturedEvent_ttip"),
            strUrlLearnMore:
              "https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates",
          }),
          Boolean(o) &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "a",
                {
                  href: `${T.TS.COMMUNITY_BASE_URL}gid/${m.ConvertTo64BitString()}/partnerevents/edit/${l}`,
                  target: "_blank",
                },
                "open event for edit",
              ),
              i.createElement("br", null),
              i.createElement("br", null),
            ),
        );
      }
      function N(e) {
        const {
            appid: t,
            selectedEventGID: r,
            fnSetUpdateEvent: n,
            label: a,
            tooltip: l,
            strUrlLearnMore: c,
            bFilterOutDrafts: u,
          } = e,
          d = (0, E.f1)(),
          { clanInfo: p, bLoadingClanInfo: h } = (0, o.vF)(t),
          b = (function (e, t) {
            const r = (0, C.a)(),
              n = (0, i.useMemo)(() => s.b.InitFromClanID(e), [e]),
              a = (0, S.I)({
                queryKey: ["eventdraftrecent", e, t],
                queryFn: async () => {
                  const e = m.w.Init(g);
                  return (
                    e.Body().set_steamid(n.ConvertTo64BitString()),
                    t && e.Body().set_rtime_oldest_date(t),
                    (await B.GetDraftAndRecentPartnerEventSnippet(r, e))
                      .Body()
                      .toObject().snippets
                  );
                },
                enabled: Boolean(e),
              });
            return (0, i.useMemo)(
              () =>
                a.isLoading || !a.data
                  ? null
                  : a.data.sort((e, t) =>
                      e.hidden && t.hidden
                        ? e.published && !t.published
                          ? -1
                          : t.published && !e.published
                            ? 1
                            : (t.rtime32_start_time ?? 0) -
                              (e.rtime32_start_time ?? 0)
                        : e.hidden
                          ? -1
                          : t.hidden
                            ? 1
                            : t.rtime32_start_time - e.rtime32_start_time,
                    ),
              [a.data, a.isLoading],
            );
          })(p?.clanAccountID, d - 2592e3),
          f = (0, i.useMemo)(
            () => (u ? b?.filter((e) => !e.hidden) : b),
            [b, u],
          ),
          _ = (0, i.useMemo)(
            () =>
              f
                ? f.map((e) => {
                    const t = e.hidden
                      ? e.published
                        ? "#EventDropDown_HiddenPublish"
                        : "#EventDropDown_Hidden"
                      : "#EventDropDown_Visible";
                    return {
                      label: (0, x.we)(
                        t,
                        (0, x.TW)(e.rtime32_start_time),
                        e.event_name,
                      ),
                      data: e,
                    };
                  })
                : [],
            [f],
          ),
          w = f?.find((e) => e.gid === r);
        return (
          "dev" == T.TS.WEB_UNIVERSE &&
            console.log(
              `AssetRequestSelectPartnerEvent: selectedEventGID=${r} === selected?.gid=${w?.gid}`,
              r,
              w,
              w?.gid,
            ),
          f || (!h && !p?.appid)
            ? f && 0 != f.length
              ? i.createElement(
                  i.Fragment,
                  null,
                  Boolean(c) &&
                    i.createElement(
                      "a",
                      { href: c, target: "_blank", style: { float: "right" } },
                      (0, x.we)(
                        "#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink",
                      ),
                    ),
                  i.createElement(A.m, {
                    label: a,
                    tooltip: l,
                    selectedOption: w,
                    onChange: (e) => n(p.clanAccountID, e.data.gid),
                    rgOptions: _,
                  }),
                )
              : i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    A.JU,
                    null,
                    a,
                    " ",
                    i.createElement(F.o, { tooltip: l }),
                  ),
                  i.createElement(
                    "div",
                    { className: (0, R.A)(D.ErrorStylesWithIcon, "ErrorCtn") },
                    (0, x.oW)(
                      "#EventDropDown_NoEventFound",
                      i.createElement("a", {
                        href: `${T.TS.COMMUNITY_BASE_URL}ogg/${t}/partnerevents`,
                        target: "_blank",
                      }),
                    ),
                  ),
                )
            : i.createElement(I.t, {
                string: (0, x.we)("#Loading"),
                size: "small",
                position: "center",
              })
        );
      }
    },
    90710: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => g });
      var n = r(41735),
        a = r.n(n),
        i = r(90626),
        s = r(55263),
        o = r(71541),
        l = r(6144),
        c = r(52038),
        m = r(61859),
        u = r(78327),
        d = r(52249),
        p = r(39700);
      function g(e) {
        const {
            fnSetItemID: t,
            strLabel: r,
            itemType: n,
            fnFilterID: s,
            className: c,
            tooltip: g,
            autoFocus: b,
            bIncludeRetired: f,
            bShowDLCToggle: _,
            bOnlyDLC: w,
            bRunQueryOnLoad: y,
            rgParentAppIDs: B,
          } = e,
          [C, S] = i.useState(""),
          [E, v] = i.useState(!1),
          [M, R] = i.useState(!1),
          [A] = i.useState(new l.LU()),
          [D, I] = i.useState(new Array()),
          [x, T] = i.useState(new Array()),
          [F, z] = i.useState(new Array()),
          k = i.createRef(),
          N = i.createRef();
        const W = (0, i.useCallback)(
            async (e, t) => {
              R(!0);
              let r = { json: 1, term: e, bexcluderetired: !f },
                i = `${u.TS.PARTNER_BASE_URL}apps/suggestapps`;
              switch (n) {
                case 1:
                  i = `${u.TS.PARTNER_BASE_URL}admin/store/suggestpackage`;
                  break;
                case 2:
                  i = `${u.TS.PARTNER_BASE_URL}bundles/suggestbundle`;
                  break;
                default:
                  w ? (r.includedlc = !0) : !1 === t && (r.includedlc = !1),
                    B &&
                      ((r.bfilterappids = !0),
                      (r.rgParentAppIds = JSON.stringify(B)));
              }
              const o = await a().get(i, { params: r, withCredentials: !0 });
              200 == o?.status && 1 == o.data?.success
                ? s
                  ? (I(o.data.matches?.filter((e) => s(e.id)) || []),
                    T(
                      o.data.package_matches?.filter((e) => s(e.packageid)) ||
                        [],
                    ),
                    z(
                      o.data.bundle_matches?.filter((e) => s(e.bundleid)) || [],
                    ))
                  : (I(o.data.matches || []),
                    T(o.data.package_matches || []),
                    z(o.data.bundle_matches || []))
                : (I([]), T([]), z([])),
                R(!1);
            },
            [s, n, f, w, B],
          ),
          L = (0, i.useCallback)(
            (e) => {
              v(e), W(k.current?.value, e);
            },
            [W, k],
          ),
          G = (0, i.useCallback)(
            (e) => {
              const t = e?.target?.value?.toLocaleLowerCase() ?? "";
              S(t);
              const r = N.current?.checked;
              A.Schedule(1e3, () => W(t, r));
            },
            [W, A, N],
          );
        let U;
        switch (
          (i.useEffect(() => {
            y && W(C);
          }, []),
          n)
        ) {
          case 1:
            U = (0, m.we)("#StoreAdmin_Search_Placeholder_package");
            break;
          case 2:
            U = (0, m.we)("#StoreAdmin_Search_Placeholder_bundle");
            break;
          default:
            U = (0, m.we)("#StoreAdmin_Search_Placeholder");
        }
        const O = _ && !w && 0 == n;
        return i.createElement(
          "div",
          { className: c },
          i.createElement(
            "div",
            { className: d.AppSearchInputContainer },
            i.createElement(o.pd, {
              type: "text",
              ref: k,
              className: d.SearchInput,
              label: r,
              tooltip: g,
              placeholder: U,
              onChange: G,
              value: C,
              bAlwaysShowClearAction: C.length > 0,
              focusOnMount: b,
            }),
            O &&
              i.createElement(o.Yh, {
                ref: N,
                checked: E,
                onChange: L,
                className: d.AppSearchDLCCheckbox,
                label: (0, m.we)("#StoreAdmin_Search_IncludeDLC"),
              }),
          ),
          i.createElement(
            "div",
            { className: d.Results },
            M &&
              i.createElement(
                "div",
                { className: d.LoadingContainer },
                i.createElement(p.k, { size: "small" }),
              ),
            Boolean(D?.length > 0) &&
              D.map((e) =>
                i.createElement(h, {
                  key: e.id,
                  name: e.match,
                  id: e.id,
                  is_visible: !0,
                  type: 0,
                  fnSetItemID: () => {
                    I([]), t(e.id, e.itemid);
                  },
                }),
              ),
            Boolean(x?.length > 0) &&
              x.map((e) =>
                i.createElement(h, {
                  key: e.packageid,
                  name: e.name,
                  id: e.packageid,
                  type: 1,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    T([]), t(e.packageid);
                  },
                }),
              ),
            Boolean(F?.length > 0) &&
              F.map((e) =>
                i.createElement(h, {
                  key: e.bundleid,
                  name: e.name,
                  id: e.bundleid,
                  type: 2,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    z([]), t(e.bundleid);
                  },
                }),
              ),
          ),
        );
      }
      function h(e) {
        const { name: t, id: r, type: n, is_visible: a, fnSetItemID: o } = e,
          [l] = (0, s.G6)(r, n, { include_assets: !0 });
        let u = "#DailyDeals_HeaderArtMissing";
        switch (n) {
          case 1:
            u = "#DailyDeals_PackageHeaderArtMissing";
            break;
          case 2:
            u = "#DailyDeals_BundleHeaderArtMissing";
        }
        return i.createElement(
          "div",
          { className: d.ResultRow, onClick: () => o() },
          i.createElement(
            "div",
            { className: (0, c.A)(d.AvatarImageCtn, "AvatarImageCtn") },
            i.createElement("img", {
              src: l?.GetAssets()?.GetHeaderURL(),
              className: d.AvatarImage,
              alt: (0, m.we)(u),
            }),
          ),
          i.createElement(
            "div",
            { className: d.GameName },
            Boolean(!a) &&
              i.createElement(
                "span",
                null,
                (0, m.we)("#Sale_FeaturingHidden"),
                " ",
              ),
            t,
            1 == n ? ` (${r})` : "",
          ),
        );
      }
    },
    49693: (e, t, r) => {
      "use strict";
      r.d(t, { op: () => o, CS: () => i, vE: () => l, Al: () => a });
      class n {
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
      class a {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, r = !1) {
          const a = (function (e, t) {
            const r = [];
            let a = new n(),
              i = !1,
              s = !1,
              o = !1;
            for (let n = 0; n < e.length; n++) {
              const l = e[n];
              switch (a.type) {
                case 0:
                  "[" == l
                    ? ((a.type = 2), (s = !0))
                    : ((a.type = 1), "\\" == l && t ? (i = !i) : (a.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && s) (a.type = 3), (a.text = ""), (s = !1);
                  else if ("[" != l || i)
                    if ("]" != l || i)
                      "\\" == l && t
                        ? ((a.text += l), (i = !i), (s = !1))
                        : ((a.text += l), (i = !1), (s = !1));
                    else {
                      const e =
                          2 == a.type &&
                          "noparse" == a.text.toLocaleLowerCase(),
                        t =
                          3 == a.type &&
                          "noparse" == a.text.toLocaleLowerCase();
                      s || (o && !t)
                        ? (a.ConvertMalformedNodeToText(), (a.text += l))
                        : e
                          ? (o = !0)
                          : t && (o = !1),
                        (a = c(r, a)),
                        (s = !1);
                    }
                  else
                    a.ConvertMalformedNodeToText(), (a = c(r, a, 2)), (s = !0);
                  break;
                case 1:
                  "[" != l || i
                    ? "\\" == l && t
                      ? (i && (a.text += l), (i = !i))
                      : ((a.text += l), (i = !1))
                    : ((a = c(r, a, 2)), (s = !0));
              }
            }
            0 != a.type &&
              ((2 != a.type && 3 != a.type) || a.ConvertMalformedNodeToText(),
              r.push(a));
            return r;
          })(e || "", r);
          return this.Parse_BuildElements(a, t);
        }
        Parse_BuildElements(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0);
          const n = [],
            a = () => (n.length < 1 ? void 0 : n[n.length - 1]),
            i = this.m_dictComponents,
            s = (e) => !(!e.tag || !i.get(e.tag)?.autocloses);
          let o = !1,
            l = !0;
          const c = (e, a) => {
            if (e && e.node.tag === a.text && i.get(e.node.tag)) {
              const a = i.get(e.node.tag),
                s = n.map((e) => e.node.tag),
                c = { parentTags: s, tagname: e.node.tag, args: e.node.args },
                m = t(a.Constructor, c, ...r.GetElements());
              (r = e.accumulator),
                Array.isArray(m)
                  ? m.forEach((e) => r.AppendNode(e))
                  : r.AppendNode(m),
                (o = !!a.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                r.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + a.text + "]", !1),
                (r = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = o ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, l), (o = !1);
              } else if (2 == e.type) {
                const t = i.get(e.tag);
                if (t) {
                  const s = a();
                  if (void 0 !== s) {
                    const t = i.get(s.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === s.node.tag &&
                      c(n.pop(), s.node);
                  }
                  n.push({ accumulator: r, node: e, bWrapTextForCopying: l }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (o = !!t.skipInternalNewline),
                    (l = t.allowWrapTextForCopying ?? !1);
                } else r.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (; a() && a().node.tag !== e.text && s(a().node); ) {
                  const e = n.pop();
                  c(e, e.node);
                }
                if (a()?.node.tag == e.text) {
                  const t = n.pop();
                  c(t, e);
                } else r.AppendText("[/" + e.text + "]", 0 == n.length);
              }
            });
            n.length > 0;
          ) {
            const e = n.pop();
            c(e, e.node);
          }
          return r.GetElements();
        }
      }
      function i(e, t) {
        let r = "[" + e;
        t?.[""] && (r += `=${s("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (r += ` ${((n = e), n.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`);
        var n;
        return (r += "]"), r;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function o(e) {
        return `[/${e}]`;
      }
      function l(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function c(e, t, r = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("=");
          const r = t.text.indexOf(" ");
          if ((-1 != r && (-1 == e || r < e) && (e = r), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            const r = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let r = "",
                n = "",
                a = 0,
                i = 0;
              "=" == e[0] && (a = 2);
              let s = !1;
              for (i++; i < e.length; i++) {
                const o = e[i];
                let l = !0,
                  c = !1;
                switch (a) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    a = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      s ||
                      (" " == o ? ((a = 0), (c = !0)) : (a = 2), (l = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((a = 0), (l = !1), (c = !0))
                      : '"' == o
                        ? ((a = 4), (l = !1))
                        : (a = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != a && !s) ||
                      ('"' == o && 4 == a && !s)) &&
                      ((a = 0), (l = !1), (c = !0));
                }
                if (l)
                  if ("\\" != o || s)
                    if (((s = !1), 1 == a)) r += o;
                    else {
                      if (3 != a && 4 != a)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + a,
                        );
                      n += o;
                    }
                  else s = !0;
                c && ((t[r] = n), (r = ""), (n = ""));
              }
              0 != a && (t[r] = n);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const a = new n();
        return (a.type = r), a;
      }
    },
    4544: (e, t, r) => {
      "use strict";
      r.d(t, {
        Uh: () => o,
        VX: () => a,
        mn: () => l,
        nU: () => s,
        pV: () => i,
      });
      var n = r(22837);
      function a(e, t) {
        const r = (0, n.Lg)(t);
        return e ? e[r] : "";
      }
      function i(e, t, r) {
        const a = (0, n.Lg)(t);
        return e[a] != r && ((e[a] = r), !0);
      }
      function s(e, t) {
        const r = (0, n.Lg)(t);
        return Boolean(e?.[r]);
      }
      function o(e) {
        if (!e) return 0;
        let t = 0;
        for (let r = 0; r < 31; ++r) {
          e[(0, n.Lg)(r)] && (t += 1);
        }
        return t;
      }
      function l(e) {
        const t = new Array();
        for (let r = 0; r < 31; ++r) {
          const a = (0, n.Lg)(r);
          e[a] && t.push([a, e[a]]);
        }
        return t;
      }
    },
    64046: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => o });
      var n = r(34629),
        a = r(90626),
        i = r(43465),
        s = r(73745);
      class o extends a.Component {
        state = { color: this.props.color || "rgba(1.0,1.0,1.0,1.0)" };
        static GetColorString(e) {
          return `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`;
        }
        OnColorChange(e) {
          const t = o.GetColorString(e);
          this.setState({ color: t }), this.props.onChange(t);
        }
        render() {
          return a.createElement(i.xk, {
            onChange: this.OnColorChange,
            color: this.state.color,
          });
        }
      }
      (0, n.Cg)([s.oI], o.prototype, "OnColorChange", null);
    },
    24655: (e, t, r) => {
      "use strict";
      r.d(t, { hA: () => y });
      var n = r(90626),
        a = r(76217),
        i = r(67165),
        s = r(30894),
        o = (r(55263), r(45699)),
        l = r(78327);
      function c(e) {
        const { href: t, children: r, bAllowFocuseableAnchor: a, ...i } = e;
        return (0, l.Y2)()
          ? n.createElement("div", { ...i }, r)
          : a
            ? n.createElement(o.Ii, { href: t, ...i }, r)
            : n.createElement("a", { href: t, ...i }, r);
      }
      var m = r(52038),
        u = r(61859),
        d = r(82227),
        p = r(61336),
        g = r(84811),
        h = r(32630),
        b = r(22797),
        f = r(56524),
        _ = r(2193),
        w = r(95695);
      function y(e) {
        const {
            creatorID: t,
            bShowTagline: r,
            bHideCreatorType: o,
            bSmallFormat: y,
            bHideFollowButton: B,
            bAddLinkToMemberList: C,
          } = e,
          S = (0, i.FV)(t.clan_account_id),
          [E] = (0, s.L2)();
        if (E || !S)
          return n.createElement(
            "div",
            { className: f.DevSummaryWidgetCtn },
            n.createElement(b.t, {
              string: (0, u.we)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const v = t.type,
          M =
            "developer" == t.type
              ? (0, u.we)("#CreatorHome_DevelopedBy")
              : "publisher" == t.type
                ? (0, u.we)("#CreatorHome_PublishedBy")
                : (0, u.we)("#CreatorHome_InFranchise"),
          R = S.GetCreatorHomeURL(v),
          A = S.GetNumFollowers();
        return n.createElement(
          g.tH,
          null,
          n.createElement(
            h.A,
            { feature: "salecreatorhome" },
            n.createElement(
              a.Z,
              {
                className: (0, m.A)(
                  f.DevSummaryCtn,
                  y ? f.SmallFormat : f.LargeFormat,
                ),
                "flow-children": "row",
              },
              !o && n.createElement("span", { className: f.Title }, M),
              n.createElement(
                "div",
                { className: f.DevSummaryWidgetCtn },
                n.createElement("div", {
                  className: f.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${S.GetAvatarURLFullSize()} )`,
                  },
                }),
                n.createElement(
                  "div",
                  {
                    className: (0, m.A)(
                      f.DevSummaryContent,
                      w.FlexColumnContainer,
                      w.FlexContainSpaceBetween,
                    ),
                  },
                  n.createElement(
                    "div",
                    { className: w.FlexRowContainer },
                    n.createElement(
                      c,
                      {
                        href: (0, p.k2)(R),
                        className: f.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      n.createElement("img", {
                        className: (0, m.A)(f.Avatar, "Avatar_Trgt"),
                        src: S.GetAvatarURLFullSize(),
                      }),
                    ),
                    n.createElement(
                      "div",
                      {
                        className: (0, m.A)(
                          w.FlexColumnContainer,
                          f.CreatorDescCtn,
                        ),
                      },
                      n.createElement(
                        "div",
                        {
                          className: (0, m.A)(
                            f.CreatorTitleCtn,
                            w.FlexColumnContainer,
                          ),
                        },
                        n.createElement(
                          c,
                          { href: (0, p.k2)(R), className: f.CreatorNameName },
                          S.GetName(),
                        ),
                        Boolean(r) &&
                          n.createElement(
                            "div",
                            {
                              className: (0, m.A)(
                                w.FlexColumnContainer,
                                f.CreatorTagline,
                              ),
                            },
                            S.GetTagLine(),
                          ),
                      ),
                      n.createElement(
                        "div",
                        {
                          className: (0, m.A)(
                            y ? w.FlexColumnContainer : w.FlexRowContainer,
                            f.SocialFollowersCtn,
                          ),
                        },
                        n.createElement(
                          "div",
                          { className: f.FollowBtnCtn },
                          Boolean(!B) &&
                            n.createElement(_.of, {
                              clanAccountID: t.clan_account_id,
                              creatorID: t,
                            }),
                          n.createElement(
                            "div",
                            { className: f.Followers },
                            n.createElement("span", null, (0, d.Dq)(A)),
                            n.createElement("br", null),
                            (0, u.we)("#CreatorHome_JustFollowers"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(C) &&
                    n.createElement(
                      "a",
                      {
                        href:
                          l.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          S.GetClanSteamID().ConvertTo64BitString() +
                          "/members/",
                        target: "_blank",
                        className: f.MembersListLink,
                      },
                      (0, u.we)("#ClanMembershipList"),
                    ),
                ),
              ),
            ),
          ),
        );
      }
    },
    56654: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => _ });
      var n = r(34629),
        a = r(90626),
        i = r(75844),
        s = r(73745);
      var o = r(44894),
        l = r(62490),
        c = r(41609),
        m = r.n(c),
        u = r(64641),
        d = r.n(u),
        p = r(12155),
        g = r(41735),
        h = r.n(g),
        b = r(19719),
        f = r(52038);
      let _ = class extends a.Component {
        state = {
          bGrabbing: !1,
          startY: 0,
          index: -1,
          rowDelta: 0,
          actualRowHeight: 0,
          actualRowWidth: 0,
        };
        container = null;
        rgItemRefs = [];
        m_cancelSignal = h().CancelToken.source();
        constructor(e) {
          super(e), (this.container = a.createRef());
        }
        componentDidMount() {
          this.UpdateRowDimensionState();
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("ReorderableList unmounting");
        }
        UpdateRowDimensionState() {
          this.container.current?.firstElementChild &&
            this.setState({
              actualRowHeight:
                this.container.current.firstElementChild.getBoundingClientRect()
                  .height,
              actualRowWidth:
                this.container.current.firstElementChild.getBoundingClientRect()
                  .width,
            });
        }
        StartGrabElement(e, t) {
          const r = this.rgItemRefs[e]?.current;
          r
            ? (this.setState({ bGrabbing: !0, startY: t.clientY, index: e }),
              (r.style.position = "fixed"),
              (r.style.left = t.clientX + "px"),
              (r.style.top = t.clientY + "px"),
              (r.style.zIndex = "1"),
              window.addEventListener("mousemove", this.OnGrabItemMove),
              window.addEventListener("mouseup", this.OnGrabItemRelease))
            : console.error("start element grab missing element at index " + e);
        }
        UpdateGrabElementPosition(e) {
          const t = this.rgItemRefs[this.state.index]?.current;
          t
            ? ((t.style.left = e.clientX + "px"),
              (t.style.top = e.clientY + "px"))
            : console.error("update grab element missing element");
        }
        EndGrabElement() {
          window.removeEventListener("mousemove", this.OnGrabItemMove),
            window.removeEventListener("mouseup", this.OnGrabItemRelease);
          const e = this.rgItemRefs[this.state.index]?.current;
          e
            ? ((e.style.position = ""), (e.style.zIndex = ""))
            : console.error("end element drag missing element"),
            this.setState({ bGrabbing: !1, startY: 0, index: -1, rowDelta: 0 });
        }
        OnListItemGrab(e, t) {
          this.m_cancelSignal.token.reason ||
            (this.container.current.firstElementChild?.getBoundingClientRect()
              .height > 0 &&
              this.state.actualRowHeight !=
                this.container.current.firstElementChild.getBoundingClientRect()
                  .height &&
              this.UpdateRowDimensionState(),
            this.StartGrabElement(t, e));
        }
        OnGrabItemRelease(e) {
          if (this.m_cancelSignal.token.reason) return;
          this.EndGrabElement();
          const t = e.clientY - this.state.startY,
            r = Boolean(this.props.fixedRowHeight)
              ? this.props.fixedRowHeight
              : this.state.actualRowHeight,
            n = Math.min(
              Math.round(t / r),
              this.props.items.length - this.state.index - 1,
            ),
            a = b.OQ(this.state.index + n, 0, this.props.items.length - 1);
          this.props.onMove
            ? this.props.onMove(this.state.index, a)
            : (0, l.yY)(this.props.items, this.state.index, a),
            this.props.onReorder && this.props.onReorder(this.props.items);
        }
        OnGrabItemMove(e) {
          if (this.m_cancelSignal.token.reason) return;
          const t = e.clientY - this.state.startY,
            r = Boolean(this.props.fixedRowHeight)
              ? this.props.fixedRowHeight
              : this.state.actualRowHeight,
            n = Math.min(
              Math.round(t / r),
              this.props.items.length - this.state.index - 1,
            );
          n !== this.state.rowDelta && this.setState({ rowDelta: n }),
            this.UpdateGrabElementPosition(e);
        }
        render() {
          const { render: e } = this.props,
            t = Boolean(this.props.fixedRowHeight)
              ? this.props.fixedRowHeight
              : this.state.actualRowHeight;
          for (let e = this.rgItemRefs.length; e < this.props.items.length; e++)
            this.rgItemRefs.push(a.createRef());
          return a.createElement(
            "div",
            { className: m().WhitelistCtn, ref: this.container },
            this.props.items.map((r, n) =>
              a.createElement(
                "div",
                { key: n },
                this.state.rowDelta < 0 &&
                  n == this.state.index + this.state.rowDelta &&
                  a.createElement(w, { width: this.state.actualRowWidth }),
                a.createElement(
                  "div",
                  {
                    ref: this.rgItemRefs[n],
                    className: (0, f.A)(
                      `${m().WhitelistRow} ${this.props.rowClassName ?? ""}`,
                    ),
                    style: Boolean(this.props.fixedRowHeight)
                      ? { height: this.props.fixedRowHeight }
                      : {},
                  },
                  a.createElement("img", {
                    className: `${m().WhitelistAvatar} ${m().Grabbable} ${this.state.bGrabbing ? m().Grabbing : ""} ${this.props.bDisabled ? m().DisabledGrab : ""}`,
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC",
                    onMouseDown: Boolean(this.props.bDisabled)
                      ? void 0
                      : (e) => this.OnListItemGrab(e, n),
                  }),
                  Boolean(n != this.state.index) &&
                    a.createElement(
                      "div",
                      { className: m().WhitelistNumber },
                      n + 1,
                    ),
                  e(r, n),
                  Boolean(n != this.state.index) &&
                    Boolean(this.props.onEdit || this.props.onDelete) &&
                    a.createElement(
                      "div",
                      { className: m().ButtonCtn },
                      Boolean(this.props.onEdit) &&
                        a.createElement(
                          "div",
                          {
                            className: d().RemoveIcon,
                            onClick: (e) => this.props.onEdit(n, e),
                          },
                          a.createElement(p.ffu, null),
                        ),
                      Boolean(this.props.onDelete) &&
                        a.createElement("img", {
                          className: d().RemoveIcon,
                          src: o.A,
                          onClick: (e) => this.props.onDelete(n, e),
                        }),
                    ),
                ),
                n == this.state.index &&
                  a.createElement("div", {
                    className: m().DragElementStart,
                    style: { height: t },
                  }),
                this.state.rowDelta > 0 &&
                  n == this.state.index + this.state.rowDelta &&
                  a.createElement(w, { width: this.state.actualRowWidth }),
              ),
            ),
          );
        }
      };
      function w(e) {
        const { width: t } = e;
        return a.createElement(
          "div",
          { className: m().DragHighlightContainer },
          a.createElement("div", {
            className: m().DragHighlight,
            style: { width: t },
          }),
        );
      }
      (0, n.Cg)([s.oI], _.prototype, "OnListItemGrab", null),
        (0, n.Cg)([s.oI], _.prototype, "OnGrabItemRelease", null),
        (0, n.Cg)([s.oI], _.prototype, "OnGrabItemMove", null),
        (_ = (0, n.Cg)([i.PA], _));
    },
    32630: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var n = r(90626),
        a = r(55963),
        i = (r(78327), r(60014));
      function s(e) {
        const { children: t, ...r } = e,
          s = (0, i.n9)(),
          o = n.useMemo(
            () => ({ ...a.Ay.GetDefaultParams(), ...s, ...r }),
            [
              s,
              r.domain,
              r.controller,
              r.method,
              r.submethod,
              r.feature,
              r.depth,
            ],
          );
        return n.createElement(i.nn, { ...o }, t);
      }
    },
    27650: (e, t, r) => {
      "use strict";
      r.d(t, { Ss: () => s, hk: () => o });
      var n = r(90626),
        a = r(72739),
        i = r(56011);
      function s(e, t) {
        const r = n.useRef(),
          i = n.useCallback(
            (t) => {
              t.currentTarget.files.length > 0 && e(t.currentTarget.files);
            },
            [e],
          ),
          s = n.useCallback(() => r.current.click(), []);
        return [
          a.createPortal(
            n.createElement(
              "form",
              { onSubmit: l, style: { display: "none" } },
              n.createElement("input", {
                ...t,
                type: "file",
                ref: r,
                onChange: i,
              }),
            ),
            window.document.body,
          ),
          s,
        ];
      }
      function o(e) {
        const [t, r] = n.useState(!1);
        return [
          {
            onDragEnter: n.useCallback((e) => {
              ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
                (e.dataTransfer.types && "Files" == e.dataTransfer.types[0])) &&
                r(!0);
            }, []),
            onDragLeave: n.useCallback((e) => {
              i.NO(e) && r(!1);
            }, []),
            onDragEnd: n.useCallback(() => r(!1), []),
            onDragOver: t ? l : void 0,
            onDrop: n.useCallback(
              (t) => {
                t.dataTransfer.files?.length &&
                  (e(t.dataTransfer.files, t), t.preventDefault()),
                  r(!1);
              },
              [e],
            ),
          },
          t,
        ];
      }
      function l(e) {
        e.preventDefault();
      }
    },
  },
]);

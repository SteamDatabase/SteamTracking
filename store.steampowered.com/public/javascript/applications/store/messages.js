/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4158],
  {
    76197: (e) => {
      e.exports = {
        MessageContent: "image_MessageContent_1N2Wd",
        GameImage: "image_GameImage_2imw0",
        TextTop: "image_TextTop_76FjT",
        TextBottom: "image_TextBottom_otBhX",
        Legal: "image_Legal_7NnVB",
        ButtonContainer: "image_ButtonContainer_2sWLp",
        Btn: "image_Btn_2utr-",
        Price: "image_Price_3TzbJ",
        NoPrice: "image_NoPrice_1oXJH",
        PriceReal: "image_PriceReal_1IET-",
        PriceRealShort: "image_PriceRealShort_2fteu",
        PriceRegular: "image_PriceRegular_2Mki7",
        Strike: "image_Strike_2hlJo",
        ShareLinks: "image_ShareLinks_2_buK",
        All: "image_All_2A3DH",
      };
    },
    50732: (e) => {
      e.exports = {
        LoadingWrapper: "throbber_LoadingWrapper_3Z36h",
        Static: "throbber_Static_kwzRJ",
        none: "throbber_none_2iT5l",
        bottomCircle: "throbber_bottomCircle_3-sjx",
        noString: "throbber_noString_M4pF_",
        Throbber: "throbber_Throbber_7MdwT",
        throbber_small: "throbber_throbber_small_29-XT",
        throbber_medium: "throbber_throbber_medium_1yqSo",
        throbber_large: "throbber_throbber_large_1u2tL",
        throbber_center_wrapper: "throbber_throbber_center_wrapper_Yi4EM",
        ThrobberText: "throbber_ThrobberText_1Zlvf",
        blur: "throbber_blur_3ebLc",
        ThrobberRoundLoop: "throbber_ThrobberRoundLoop_3SEk8",
        roundOuterOutline: "throbber_roundOuterOutline_3M8Ar",
        roundOuter: "throbber_roundOuter_3H7At",
        roundFill: "throbber_roundFill_2FWWt",
        ThrobberFillLoop: "throbber_ThrobberFillLoop_1-rlb",
        topCircle: "throbber_topCircle_3znUF",
        circlePulse: "throbber_circlePulse_1oQUO",
        ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_3oqZE",
        ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_3veQr",
        roundThrobber15: "throbber_roundThrobber15_1gQte",
        roundThrobber14: "throbber_roundThrobber14_3DXeR",
        roundThrobber13: "throbber_roundThrobber13_5VEyI",
        roundThrobber12: "throbber_roundThrobber12_wOdFm",
        roundThrobber11: "throbber_roundThrobber11_3Jmyz",
        roundThrobber10: "throbber_roundThrobber10_3QwXn",
        roundThrobber09: "throbber_roundThrobber09_2Yhvq",
        roundThrobber08: "throbber_roundThrobber08_3HcIU",
        roundThrobber07: "throbber_roundThrobber07__2fn3",
        roundThrobber06: "throbber_roundThrobber06_2gCCI",
        roundThrobber05: "throbber_roundThrobber05_1SrtW",
        roundThrobber04: "throbber_roundThrobber04_2P5xs",
        roundThrobber03: "throbber_roundThrobber03_3zYDa",
        roundThrobber02: "throbber_roundThrobber02_2_KYJ",
        roundThrobber01: "throbber_roundThrobber01_3N41H",
        ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1wAwc",
        throbber_xlarge: "throbber_throbber_xlarge_2jzZM",
        throbber_xxlarge: "throbber_throbber_xxlarge_1DFOT",
      };
    },
    67833: (e, t, r) => {
      "use strict";
      r.d(t, {
        OL: () => c,
        Hf: () => i,
        mY: () => m,
        B1: () => l,
        ZP: () => u,
      });
      var s = r(77520),
        a = r(35092),
        n = r(90666);
      const o = JSON.parse(
        '{"store.steampowered.com":1,"steamtv":2200,"steamclient":5000,"library":5100,"friendsui":5200,"friendcontextmenu":5201,"topsellers":7000,"steamcharts":7001,"weeklytopsellers":7002,"topchartlist":7003,"overview":7004,"mostplayed":7005,"salecreatorhome":100700,"saleitembrowse":100701,"salefacetbrowse":100702,"salesection":100703,"saletabsection":100704,"salebroadcast":100705,"salecuratorrec":100706,"saleeventsched":100707,"salesubscription":100708,"saleitemsearch":100709,"salesmartwishlist":100710,"salesmartir":100711,"salesmartdlc":100712,"salesmarttagrec":100713,"salebrowsetopwishlisted":100714,"salebrowsetrendingwishlisted":100715,"salebrowsepopularcomingsoon":100716,"salebrowsemostplayeddemo":100717,"salebrowsedailyactiveuserdemo":100718,"salebrowseplayednowdemo":100719,"salebrowserecentlyreleased":100720,"salebrowsepopularpurchased":100721,"salebrowsepopularpurchaseddiscounted":100722,"salebrowsediscounted":100723,"salebrowseprice":100724,"salebrowsenewandtrending":100725,"salebrowsetopsellers":100726,"salebrowsetoprated":100727,"discoveryqueue2022":100728,"saleeventsection":100729,"salesectionlinks":100730,"salesectionrewards":100731,"salesectiontext":100732,"salesectioneventschedule":100733,"spotlight":40,"daily-deal":43,"promo-takeover":118,"live-broadcast":143,"large-cluster":201}'
      );
      function c(e, t = "", r = null) {
        return u.InstrumentLink(e, t, r);
      }
      function l(e, t, r = null) {
        const s = (0, a.FM)(e).toLowerCase(),
          o = (0, a.FM)(n.De.COMMUNITY_BASE_URL).toLowerCase(),
          c = (0, a.FM)(n.De.STORE_BASE_URL).toLowerCase();
        return s === o || s === c ? i(e, t, r) : e;
      }
      function i(e, t, r = null) {
        const s = m(t, r);
        return u.AddNavParamToURL(e, s);
      }
      function m(e, t = null) {
        return (null == e ? void 0 : e.domain)
          ? u.GetLinkParam(e, t)
          : n.De.SNR;
      }
      class u {
        static SetNavEventParams(e, t, r = null, s = null) {
          (u.sm_strDomain = e),
            (u.sm_strController = t),
            (u.sm_strMethod = r),
            (u.sm_strSubmethod = s),
            (u.sm_strComputedLinkPrefix = null);
        }
        static GetDefaultParams() {
          let e = { domain: u.sm_strDomain, controller: u.sm_strController };
          return (
            u.sm_strMethod && (e.method = u.sm_strMethod),
            u.sm_strSubmethod && (e.submethod = u.sm_strSubmethod),
            e
          );
        }
        static ParseSNR(e) {
          const t = e.split("_") || [];
          return {
            domain: t[0],
            controller: t[1],
            method: t[2],
            submethod: t[3],
            feature: t[4],
            depth: t[5] ? Number(t[5]) : void 0,
          };
        }
        static InstrumentLink(e, t, r = null) {
          const s = u.GetLinkParam(t, r);
          return u.AddNavParamToURL(e, s);
        }
        static GetLinkParam(e, t = null) {
          let r, s;
          if (
            ("string" == typeof e || e.domain || (e = e.feature),
            "string" != typeof e && e.domain)
          )
            (r = u.ComputeLinkPrefix(
              e.domain,
              e.controller,
              e.method,
              e.submethod
            )),
              (s = e.feature),
              (t = null != t ? t : e.depth);
          else {
            if (!u.sm_strComputedLinkPrefix && !u.ComputeStaticLinkPrefix())
              return null;
            (r = u.sm_strComputedLinkPrefix),
              (s = "string" == typeof e ? e : e.feature);
          }
          let a = u.EncodeEventComponent(s);
          return a && ((r += "_" + a), t && (r += "_" + t)), r;
        }
        static AddNavParamToURL(e, t) {
          try {
            const r = new URL((0, a.Pm)(e)),
              s = new URLSearchParams(r.search);
            return (
              s.set("snr", encodeURIComponent(t)),
              r.origin + r.pathname + "?" + s.toString() + r.hash
            );
          } catch (t) {
            return console.error(e, t), e;
          }
        }
        static ComputeStaticLinkPrefix() {
          return u.sm_strDomain
            ? ((u.sm_strComputedLinkPrefix = u.ComputeLinkPrefix(
                u.sm_strDomain,
                u.sm_strController,
                u.sm_strMethod,
                u.sm_strSubmethod
              )),
              !0)
            : ((0, s.X)(
                !1,
                "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!"
              ),
              !1);
        }
        static ComputeLinkPrefix(e, t, r, s) {
          let a = "";
          return (
            (a += u.EncodeEventComponent(e)),
            (a += "_"),
            (a += u.EncodeEventComponent(t)),
            (a += "_"),
            (a += u.EncodeEventComponent(r)),
            (a += "_"),
            (a += u.EncodeEventComponent(s)),
            a
          );
        }
        static EncodeEventComponent(e) {
          if (!e) return "";
          return e in o
            ? "" + o[e]
            : (e.match(/^[0-9]+$/) || (e = e.replace(/^[0-9]+/, "")),
              e.replace(/[^a-zA-Z0-9\- ]+/g, ""));
        }
      }
    },
    65924: (e, t, r) => {
      "use strict";
      r.d(t, { HC: () => i, ZP: () => l, bJ: () => m });
      var s = r(70655),
        a = r(67294),
        n = r(67833),
        o = r(90666);
      const c = a.createContext({});
      function l(e) {
        const { children: t } = e,
          r = (0, s._T)(e, ["children"]),
          o = m();
        return a.createElement(
          c.Provider,
          {
            value: Object.assign(
              Object.assign(Object.assign({}, n.ZP.GetDefaultParams()), o),
              r
            ),
          },
          t
        );
      }
      function i(e) {
        const { children: t } = e,
          r = e.snr || o.De.SNR,
          s = n.ZP.ParseSNR(r);
        return a.createElement(
          c.Provider,
          {
            value: Object.assign(Object.assign({}, n.ZP.GetDefaultParams()), s),
          },
          t
        );
      }
      function m() {
        return a.useContext(c);
      }
    },
    13596: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => o });
      var s = r(67294),
        a = r(50732),
        n = r.n(a);
      class o extends s.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(n().throbber_small)
            : "medium" == this.props.size
            ? e.push(n().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(n().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(n().throbber_xxlarge)
            : e.push(n().throbber_large);
        }
        render() {
          let e = [n().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(n().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(n().Static);
          let t = s.createElement(
            "div",
            { className: e.join(" ") },
            s.createElement(
              "div",
              { className: n().Throbber },
              s.createElement(c, { className: n().base }),
              s.createElement(c, { className: n().blur })
            )
          );
          return s.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? n().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              s.createElement(
                "div",
                { className: n().ThrobberText },
                this.props.string
              )
          );
        }
      }
      function c(e) {
        let t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          s.createElement(
            "svg",
            {
              version: "1.1",
              id: "base",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256",
            },
            s.createElement(
              "g",
              { className: n().partCircle },
              s.createElement("path", {
                className: n().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
              }),
              s.createElement("path", {
                className: n().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166",
              }),
              s.createElement("path", {
                className: n().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
              })
            ),
            s.createElement(
              "g",
              { className: n().mainOutline },
              s.createElement("path", {
                className: n().roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              s.createElement("path", {
                className: n().roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              })
            ),
            s.createElement(
              "g",
              { className: n().bottomCircle },
              s.createElement("path", {
                fill: "#ffffff",
                d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
              })
            ),
            s.createElement(
              "g",
              { className: n().topCircle },
              s.createElement("circle", {
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                cx: "161.731",
                cy: "101.274",
                r: "23.019",
              })
            )
          )
        );
      }
    },
    35092: (e, t, r) => {
      "use strict";
      r.d(t, {
        FM: () => a,
        OL: () => b,
        Pm: () => c,
        XW: () => n,
        dK: () => i,
        et: () => l,
        k6: () => _,
        md: () => d,
        xL: () => u,
      });
      var s = r(90666);
      r(54698), r(41311);
      function a(e) {
        let t = new RegExp(
            "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
            "im"
          ),
          r = e.match(t);
        return r && r.length > 5 ? r[6].toString() : e;
      }
      function n(e) {
        let t = a(e);
        return t.startsWith("www.") && (t = t.slice(4)), t;
      }
      const o = /^(steam|ftp|https?):\/\//;
      function c(e) {
        return o.test(e) ? e : "https://" + e;
      }
      function l(e) {
        return e
          ? 1 != s.De.EUNIVERSE
            ? e
            : ("http:" == e.substring(0, 5) && (e = "https:" + e.substring(5)),
              (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                (e = (e = e.replace(
                  /https:\/\/media.steampowered.com\//g,
                  s.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.akamai.steamstatic.com\//g,
                  s.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.cloudflare.steamstatic.com\//g,
                  s.De.MEDIA_CDN_URL
                )).replace(
                /https:\/\/cdn.edgecast.steamstatic.com\//g,
                s.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/cdn.dota2.com\//g,
                s.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
                s.De.MEDIA_CDN_URL + "steam/"
              )).replace(
                /https:\/\/cdn.steamcommunity.com\//g,
                s.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.akamai.steamstatic.com\//g,
                s.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.cloudflare.steamstatic.com\//g,
                s.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.edgecast.steamstatic.com\//g,
                s.De.COMMUNITY_CDN_URL
              )).replace(/{IMG_URL}/g, s.De.IMG_URL)).replace(
                /{MEDIA_CDN_URL}/g,
                s.De.MEDIA_CDN_URL
              )).replace(
                /{MEDIA_CDN_COMMUNITY_URL}/g,
                s.De.MEDIA_CDN_COMMUNITY_URL
              )).replace(
                /{COMMUNITY_CDN_URL}/g,
                s.De.COMMUNITY_CDN_URL
              )).replace(
                /{STEAM_CLAN_IMAGE}/g,
                s.De.MEDIA_CDN_COMMUNITY_URL + "images/clans/"
              )))
          : e;
      }
      function i(e) {
        if (!e) return !0;
        const t = a(e).toLocaleLowerCase();
        return (
          [
            a(s.De.COMMUNITY_CDN_URL).toLocaleLowerCase(),
            a(s.De.MEDIA_CDN_URL).toLocaleLowerCase(),
            a(s.De.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
            a(s.De.STORE_CDN_URL).toLocaleLowerCase(),
            "support.steampowered.com",
            "steamcdn-a.akamaihd.net",
            "cdn.cloudflare.steamstatic.com",
            "cdn.akamai.steamstatic.com",
          ].indexOf(t) >= 0
        );
      }
      function m(e, t) {
        return `${s.De.MEDIA_CDN_URL}steam/apps/${e}/${t}`;
      }
      function u(e) {
        return m(e, "page_bg_generated.jpg");
      }
      function _(e) {
        return m(e, "page_bg_generated_v6b.jpg");
      }
      function b(e) {
        return s.De.SNR &&
          s.De.SNR.length > 0 &&
          e &&
          -1 == e.toLocaleLowerCase().indexOf("snr=")
          ? e + (e.indexOf("?") >= 0 ? "&" : "?") + "snr=" + s.De.SNR
          : e;
      }
      function d(e, t) {
        try {
          const r = new URL(t),
            s = new URL(e);
          return r.href.replace(/\/$/, "") + s.pathname + s.search + s.hash;
        } catch (e) {
          return "";
        }
      }
    },
    70695: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => a });
      var s = r(90666);
      function a() {
        return (0, s.kQ)("store_user_config", "application_config");
      }
    },
    53546: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { MarketingMessageRoutes: () => Z, default: () => X });
      var s = r(67294),
        a = r(9355),
        n = r(78587),
        o = r(65924),
        c = r(70655),
        l = r(88767),
        i = r(26149),
        m = r(58114),
        u = (r(46321), r(39722)),
        _ = r(90666),
        b = r(32367),
        d = r(14146),
        h = (r(990), r(77520));
      class p {
        constructor(e) {
          (this.m_setMessagesSeen = new Set()), (this.m_SteamInterface = e);
        }
        static Init(e) {
          p.sm_Instance = new p(e);
        }
        static Get() {
          return (
            (0, h.X)(p.sm_Instance, "MarketingMessages store not initialized"),
            p.sm_Instance
          );
        }
        GetMessageList(e, t = !1) {
          return (0, c.mG)(this, void 0, void 0, function* () {
            const r = m.gA.Init(u.Pe);
            r.Body().set_country_code(_.De.COUNTRY),
              r.Body().set_elanguage((0, i.jM)(_.De.LANGUAGE)),
              r.Body().set_client_package_version(e.nClientPackageVersion),
              r.Body().set_operating_system(e.eOSType),
              t && r.Body().set_include_seen_messages(!0),
              (0, b.pA)(r),
              (0, b.De)(r, p.sm_DefaultDataRequest);
            const s = yield u.Bn.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              r
            );
            if (t)
              for (const e of s.Body().messages())
                e.already_seen() &&
                  this.m_setMessagesSeen.add(e.message().gid());
            return s.Body().messages();
          });
        }
        MarkMessageSeen(e) {
          if (this.m_setMessagesSeen.has(e)) return;
          const t = m.gA.Init(u.UD);
          t.Body().set_gid(e),
            u.Bn.MarkMessageSeen(
              this.m_SteamInterface.GetServiceTransport(),
              t
            ),
            this.m_setMessagesSeen.add(e);
        }
        BIsMessageSeen(e) {
          return this.m_setMessagesSeen.has(e);
        }
      }
      p.sm_DefaultDataRequest = {};
      class f {
        constructor(e) {
          (this.m_message = e),
            e.associated_item() &&
              (this.m_item = new d.Z(
                e.associated_item(),
                p.sm_DefaultDataRequest
              ));
          try {
            const t = JSON.parse(e.template_vars_json());
            t.use_additional_fields &&
              (t.use_additional_fields = "true" === t.use_additional_fields),
              t.use_custom_legal_text &&
                (t.use_custom_legal_text = "true" === t.use_custom_legal_text),
              t.last_asset_mtime &&
                (t.last_asset_mtime = parseInt(t.last_asset_mtime)),
              (t.ll_image = t.ll_image || {}),
              (this.m_templateVars = t);
          } catch (e) {}
        }
        get id() {
          return this.m_message.gid();
        }
        GetTemplateType() {
          return this.m_message.template_type();
        }
        GetTemplateVars() {
          return this.m_templateVars;
        }
        GetTemplateImage() {
          let e = this.m_templateVars.ll_image[_.De.LANGUAGE];
          return (
            e || (e = this.m_templateVars.ll_image.english),
            null == e ? void 0 : e.path
          );
        }
        get associated_item() {
          return this.m_item;
        }
      }
      function g(e, t, r) {
        const { bIncludeSeenMessages: a } = t,
          n = (0, c._T)(t, ["bIncludeSeenMessages"]),
          {
            data: o,
            isLoading: i,
            isError: m,
          } = (0, l.useQuery)(
            ["MarketingMessages", "List", n, { bIncludeSeenMessages: !!a }],
            () => e.GetMessageList(n, a),
            r
          ),
          u = s.useMemo(
            () => (null == o ? void 0 : o.map((e) => new f(e.message()))),
            [o]
          );
        return { rgMessages: i ? null : u, isError: m };
      }
      var E = r(48341),
        k = r(13596),
        M = r(41311),
        L = r(76197),
        T = r(72258),
        N = r(67833),
        S = r(54698),
        C = r(32548);
      function D(e) {
        var t;
        const { path: r, message: a } = e,
          n = (0, c._T)(e, ["path", "message"]);
        return s.createElement(
          "img",
          Object.assign({}, n, {
            src: `${_.De.MEDIA_CDN_URL}steam/marketing/${a.id}/${r}?t=${
              null === (t = a.GetTemplateVars()) || void 0 === t
                ? void 0
                : t.last_asset_mtime
            }`,
          })
        );
      }
      var v = r(35921);
      const w = s.createContext(null);
      function R() {
        return s.useContext(w);
      }
      function I(e) {
        const { message: t } = e;
        return s.createElement(
          w.Provider,
          { value: t },
          s.createElement(
            "div",
            { className: L.All },
            s.createElement(
              "div",
              { className: L.MessageContent },
              s.createElement(P, null),
              s.createElement(U, null),
              s.createElement("div", { style: { clear: "both" } }),
              s.createElement(G, null)
            )
          )
        );
      }
      function x(e) {
        const t = (0, o.bJ)(),
          r = e.GetTemplateVars();
        return s.useCallback(
          (e) => (0, T.b8)(e, (0, N.OL)(r.linkurl, t)),
          [r.linkurl, t]
        );
      }
      function P(e) {
        const t = R(),
          r = x(t),
          a = t.GetTemplateImage();
        return s.createElement(
          "div",
          { className: L.GameImage, onClick: r },
          a && s.createElement(D, { message: t, path: a })
        );
      }
      function U(e) {
        const t = R(),
          r = x(t),
          a =
            t.GetTemplateVars().button_text_custom ||
            t.GetTemplateVars().button_text;
        return s.createElement(
          "div",
          { className: L.ButtonContainer },
          s.createElement(C.S, null, s.createElement(O, null)),
          s.createElement(y, null),
          s.createElement(
            v.s,
            { className: L.Btn, style: { cursor: "pointer" }, onActivate: r },
            a
          )
        );
      }
      function O() {
        const e = R().associated_item;
        if (
          e &&
          e.GetBestPurchaseOption() &&
          e.GetBestPurchaseOption().formatted_final_price
        ) {
          const t = e.GetBestPurchaseOption();
          return s.createElement(
            "div",
            { className: L.Price },
            s.createElement(
              "div",
              {
                className:
                  t.formatted_final_price.length < 7
                    ? L.PriceReal
                    : L.PriceRealShort,
              },
              t.formatted_final_price
            ),
            t.discount_pct > 0 &&
              s.createElement(
                "div",
                { className: L.PriceRegular },
                t.formatted_original_price
              )
          );
        }
        return s.createElement("div", { className: L.NoPrice });
      }
      function y() {
        const e = R();
        return e.GetTemplateVars().disable_sharing ||
          !e.GetTemplateVars().shareurl ||
          _.De.EREALM == S.IN.k_ESteamRealmChina ||
          "XC" == _.De.COUNTRY ||
          _.De.IN_GAMEPADUI
          ? null
          : s.createElement(
              "div",
              { className: L.ShareLinks },
              "Share:",
              s.createElement("br", null),
              s.createElement(
                A,
                { sitename: "facebook" },
                s.createElement(W, { path: "marketing/image/facebook.gif" })
              ),
              s.createElement(
                A,
                { sitename: "twitter" },
                s.createElement(W, { path: "marketing/image/twitter.gif" })
              ),
              s.createElement(
                A,
                { sitename: "reddit" },
                s.createElement(W, { path: "marketing/image/reddit.gif" })
              )
            );
      }
      function A(e) {
        const t = R()
          .GetTemplateVars()
          .shareurl.replace(/%SITENAME%/, e.sitename);
        return s.createElement(T.ns, { href: t, children: e.children });
      }
      function G(e) {
        const t = R();
        let r = s.createElement(
          s.Fragment,
          null,
          `© ${new Date().getFullYear()} Valve Corporation and ${
            t.GetTemplateVars().partner
          }.`,
          s.createElement("br", null),
          "All trademarks are property of their respective owners in the US and other countries."
        );
        return (
          t.GetTemplateVars().use_custom_legal_text &&
            (r = s.createElement(
              s.Fragment,
              null,
              t.GetTemplateVars().custom_legal_text
            )),
          s.createElement("div", { className: L.Legal }, r)
        );
      }
      function W(e) {
        const { path: t } = e,
          r = (0, c._T)(e, ["path"]);
        return s.createElement(
          "img",
          Object.assign({}, r, { src: `${_.De.PUBLIC_SHARED_URL}images/${t}` })
        );
      }
      function B(e) {
        const { message: t } = e;
        return "image" === t.GetTemplateType()
          ? s.createElement(I, { message: t })
          : null;
      }
      function z(e) {
        const t = new URLSearchParams();
        return (
          e.bIncludeSeenMessages && t.append("include_seen", "1"),
          e.nClientPackageVersion &&
            t.append(
              "client_package_version",
              e.nClientPackageVersion.toString()
            ),
          e.eOSType && t.append("os_type", e.eOSType.toString()),
          t.toString()
        );
      }
      function V(e) {
        const { MarketingMessagesStore: t } = e,
          r = (function () {
            const e = (0, n.TH)();
            return s.useMemo(() => {
              const t = new URLSearchParams(e.search);
              return {
                bIncludeSeenMessages: !!t.get("include_seen"),
                nClientPackageVersion: parseInt(
                  t.get("client_package_version") || "0"
                ),
                eOSType: parseInt(t.get("os_type") || "0"),
              };
            }, [e.search]);
          })(),
          { rgMessages: a, isError: o } = g(t, r),
          [c, l] = s.useState(!1),
          [i, m] = s.useState(0),
          u = (0, n.k6)();
        if (
          (s.useEffect(() => {
            !a ||
              a.length ||
              o ||
              (r.bIncludeSeenMessages
                ? l(!0)
                : u.replace(
                    Object.assign(Object.assign({}, u.location), {
                      search: z(
                        Object.assign(Object.assign({}, r), {
                          bIncludeSeenMessages: !0,
                        })
                      ),
                    })
                  ));
          }, [a, r, u, o]),
          o)
        )
          return s.createElement(
            Y,
            null,
            (0, M.Xx)("#Error_ErrorCommunicatingWithNetwork")
          );
        if (c)
          return s.createElement(
            Y,
            null,
            (0, M.Xx)("#MarketingMessages_NoneAvailable")
          );
        if (null === a || !a.length) return s.createElement(k.V, null);
        const _ = a[i],
          b = i < a.length - 1 ? a[i + 1] : null;
        return s.createElement(
          "div",
          null,
          s.createElement($, {
            key: _.id,
            message: _,
            MarketingMessagesStore: t,
          }),
          b &&
            s.createElement($, {
              key: b.id,
              message: b,
              MarketingMessagesStore: t,
              preload: !0,
            }),
          s.createElement(
            E.Uq,
            null,
            i > 0
              ? s.createElement(
                  E.zx,
                  { onClick: () => m(i - 1) },
                  "<< Previous"
                )
              : s.createElement("div", null),
            i < a.length - 1
              ? s.createElement(E.zx, { onClick: () => m(i + 1) }, "Next >>")
              : s.createElement("div", null)
          )
        );
      }
      function Y(e) {
        return s.createElement(
          E.VY,
          { style: { maxWidth: "400px", margin: "0 auto" } },
          s.createElement(E.h4, null, (0, M.Xx)("#Error_Generic"), " "),
          s.createElement(E.uT, null, e.children)
        );
      }
      function $(e) {
        const { message: t, MarketingMessagesStore: r, preload: a } = e;
        return (
          (function (e, t) {
            s.useEffect(() => {
              t && e.MarkMessageSeen(t.id);
            }, [t, e]);
          })(r, a ? null : t),
          s.createElement(
            "div",
            { style: a ? { display: "none" } : {} },
            s.createElement(B, { message: t })
          )
        );
      }
      var j = r(70695),
        F = r(65902);
      const Z = {
        List: () => `${a.Z.MarketingMessages()}list/`,
        Message: (e) => `${a.Z.MarketingMessages()}${e}`,
      };
      function X(e) {
        const t = (function () {
          const [e, t] = s.useState(null);
          return (
            s.useEffect(() => {
              e ||
                t(
                  (function () {
                    if (!H) {
                      const e = (0, j.T)(),
                        t = new F.J(_.De.WEBAPI_BASE_URL, e.webapi_token);
                      H = new p(t);
                    }
                    return H;
                  })()
                );
            }, [e]),
            e
          );
        })();
        return t
          ? s.createElement(
              o.ZP,
              { domain: "store.steampowered.com", controller: "messages" },
              s.createElement(
                n.rs,
                null,
                s.createElement(
                  n.AW,
                  { path: `${Z.List()}` },
                  s.createElement(V, { MarketingMessagesStore: t })
                ),
                s.createElement(
                  n.AW,
                  { path: `${Z.Message(":messageid")}` },
                  s.createElement(J, null)
                ),
                s.createElement(
                  n.AW,
                  null,
                  s.createElement(n.l_, { to: `${Z.List()}` })
                )
              )
            )
          : null;
      }
      function J() {
        const e = (0, n.$B)();
        return s.createElement(
          "h1",
          null,
          "This is message ",
          e.params.messageid
        );
      }
      let H;
    },
  },
]);

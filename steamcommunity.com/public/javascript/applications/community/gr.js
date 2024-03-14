/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5710],
  {
    72297: (e) => {
      e.exports = {
        ErrorStyles: "_2TszC_-PWGNjvyEvg4pkXs",
        ErrorStylesWithIcon: "_1mcSATMDg6RMTkBMGQpRMH",
        ErrorIconLayout: "_15HwAwBDsrswtG8dV7Kght",
        ErrorStylesBackground: "_3Ht2evgC8Noz3Rb3mkvNWC",
        ErrorFloatBelow: "_1mTCTkOGLH-mcVoFCHB6xV",
        WarningStyles: "_1C_ImsUlzg82M_O5-Dg--x",
        WarningStylesWithIcon: "_3p5KOjA4ruC7BQyqMZNe1P",
        WarningIconLayout: "_3POKG03Bgn3Fofqrijx-tH",
        WarningStylesBackground: "_2MAqlRrFcSDNSdhq-MmyTo",
        Stuck: "_2JqXLwG70-H-cFwcoiLLio",
        WarningFloatBelow: "NcOahVPzIJEqCPIb8UE9e",
        InfoStyles: "_2Zq0UvVupNHRmv-AcOcE89",
        InfoStylesWithIcon: "_2TYAoWWtHLG3CtVbJF8al0",
        InfoIconLayout: "qgVd4PZiD-jTyQCioKYz4",
        InfoStylesBackground: "_3YqPicnANA2QCmuZdBuzHa",
        Padding: "_2oWai6yw7SRKZ3UtbQqcZt",
        NotTooWideModal: "_3P6SelqDLJPtYY0xlkOEfE",
      };
    },
    69622: (e) => {
      e.exports = {
        defaultColor: "#aaa",
        blueish: "#64badc",
        Dummy: "J-nthH7XkPeYzGyWmMie0",
        RecordingIconContainer: "_2cO3kFkGdQ18nyd13zq3N9",
        Outer: "_2NMjllZJNreOrU15alJFZd",
        Inner: "_2FGULl1_K4iPUGvrp55Hu-",
      };
    },
    48081: (e) => {
      e.exports = {
        ClipDetails: "_3OZdTvCTb6CpiavJuyAgSs",
        VideoContainer: "_10C-FSg2FYguFXDoPyD78V",
      };
    },
    37796: (e, t, r) => {
      "use strict";
      r.d(t, { N1: () => o });
      var n = r(8416),
        C = r(77936),
        i = r(22520),
        l = r(62210);
      class o {
        constructor(e, t, r) {
          if ("string" == typeof e) this.m_ulGameID = n.Z.fromString(e, !0);
          else {
            const C = r,
              i = ((255 & e) << 24) + (16777215 & t);
            this.m_ulGameID = n.Z.fromBits(i, C, !0);
          }
        }
        GetAppID() {
          return 16777215 & this.m_ulGameID.getLowBitsUnsigned();
        }
        GetType() {
          return (this.m_ulGameID.getLowBitsUnsigned() >> 24) & 255;
        }
        GetModID() {
          return this.m_ulGameID.getHighBitsUnsigned();
        }
        ConvertTo64BitString() {
          return this.m_ulGameID.toString();
        }
        BIsSteamApp() {
          return this.GetType() === C.b7.k_EGameIDTypeApp;
        }
        BIsShortcut() {
          return this.GetType() === C.b7.k_EGameIDTypeShortcut;
        }
        BIsMod() {
          return this.GetType() === C.b7.k_EGameIDTypeGameMod;
        }
        BIsP2PFile() {
          return this.GetType() === C.b7.k_EGameIDTypeP2P;
        }
        GetInternalAppID() {
          return this.BIsSteamApp ? this.GetAppID() : this.GetModID();
        }
        BIsValid() {
          switch (this.GetType()) {
            case C.b7.k_EGameIDTypeApp:
              return this.GetAppID() !== i.kI;
            case C.b7.k_EGameIDTypeGameMod:
              return this.GetAppID() !== i.kI && 2147483648 & this.GetModID();
            case C.b7.k_EGameIDTypeShortcut:
              return 0 != (2147483648 & this.GetModID());
            case C.b7.k_EGameIDTypeP2P:
              return this.GetAppID() === i.kI && 2147483648 & this.GetModID();
            default:
              return (0, l.X)(!1, `Unknown GameID type: ${this.GetType()}`), !1;
          }
        }
        static InitFromAppID(e) {
          return new o(C.b7.k_EGameIDTypeApp, e, 0);
        }
        static InitFromShortcutID(e) {
          return new o(C.b7.k_EGameIDTypeShortcut, 0, e);
        }
      }
    },
    50928: (e, t, r) => {
      "use strict";
      r.d(t, { JZ: () => u });
      var n = r(85556),
        C = r(47427),
        i = r(65255),
        l = r(10082),
        o = r(54842),
        a = r(30750);
      class s {
        constructor() {
          (this.m_mapAppMarkerLoadingPromises = new Map()),
            (this.m_mapAppMarkers = new Map()),
            (this.m_mapURLForApp = new Map()),
            (this.m_fnTimelineURLGenerator = void 0),
            (0, o.rC)(this);
        }
        BIsLoaded(e) {
          return this.m_mapAppMarkers.has(e);
        }
        GetSVGForID(e, t, r) {
          this.m_mapURLForApp.get(e) != r && this.LoadAppPublicMarkers(e, r);
          const n = this.m_mapAppMarkers.get(e);
          if (n) return n.get(t) || void 0;
        }
        GetAllUseableMarkerID(e, t) {
          this.m_mapURLForApp.get(e) != t && this.LoadAppPublicMarkers(e, t);
          const r = this.m_mapAppMarkers.get(e);
          return r ? Array.from(r.keys()) : [];
        }
        LoadAppPublicMarkers(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return (
              this.m_mapAppMarkerLoadingPromises.has(e) ||
                this.m_mapAppMarkerLoadingPromises.set(
                  e,
                  this.InternalAppPublicMarkers(e, t),
                ),
              this.m_mapAppMarkerLoadingPromises.get(e)
            );
          });
        }
        InternalAppPublicMarkers(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const r = new Map();
            try {
              const n = yield fetch(t);
              n.ok ||
                (i.De.IN_CLIENT &&
                  SteamClient.Apps.ReportLibraryAssetCacheMiss(e, 6));
              const C = yield n.text(),
                o = new DOMParser(),
                a = o
                  .parseFromString(C, "image/svg+xml")
                  .getElementsByTagName("defs")[0];
              Array.from(a.children).forEach((e) => {
                var t;
                const n = (0, l.iv)(
                    null ===
                      (t = e.attributes.getNamedItem("steam-timeline-color")) ||
                      void 0 === t
                      ? void 0
                      : t.value,
                  ),
                  C = e;
                r.set(e.id, { color: n, svg: C });
              });
            } catch (e) {}
            this.m_mapAppMarkerLoadingPromises.delete(e),
              this.m_mapAppMarkers.set(e, r),
              this.m_mapURLForApp.set(e, t);
          });
        }
        SetTimelineMarkerURLFunction(e) {
          this.m_fnTimelineURLGenerator = e;
        }
        GetTimelineMarkerURLFunction() {
          return this.m_fnTimelineURLGenerator;
        }
        static Get() {
          return (
            s.s_Singleton ||
              ((s.s_Singleton = new s()),
              "dev" == i.De.WEB_UNIVERSE &&
                (window.g_GameTimelineMarker = s.s_Singleton)),
            s.s_Singleton
          );
        }
      }
      function c(e) {
        return (0, a.SZ)(() => s.Get().BIsLoaded(e));
      }
      function u(e, t) {
        const r = s.Get(),
          n = c(e),
          i = d(e),
          [l, o] = (0, C.useState)(null);
        return (
          (0, C.useEffect)(() => {
            n ? o(r.GetSVGForID(e, t, i)) : r.LoadAppPublicMarkers(e, i);
          }, [l, e, t, r, n, i]),
          l
        );
      }
      function d(e) {
        const t = s.Get();
        return (0, a.SZ)(() => {
          const r = t.GetTimelineMarkerURLFunction();
          return r
            ? r(e)
            : (function (e) {
                return `${i.De.BASE_URL_SHARED_CDN}app_config/timeline/${e}_markers.svg`;
              })(e);
        });
      }
      (0, n.gn)([o.LO], s.prototype, "m_mapAppMarkerLoadingPromises", void 0),
        (0, n.gn)([o.LO], s.prototype, "m_mapAppMarkers", void 0),
        (0, n.gn)([o.LO], s.prototype, "m_mapURLForApp", void 0),
        (0, n.gn)([o.LO], s.prototype, "m_fnTimelineURLGenerator", void 0);
    },
    10082: (e, t, r) => {
      "use strict";
      r.d(t, {
        Mv: () => a,
        Q2: () => w,
        XT: () => L,
        cY: () => m,
        iv: () => s,
        jq: () => g,
        vt: () => h,
      });
      var n = r(65255),
        C = r(77556),
        i = r(37563);
      const l = "steam_";
      var o;
      function a(e) {
        switch (e) {
          default:
          case o.White:
            return "#DCDEDF";
          case o.Red:
            return "#FB7C7C";
          case o.Orange:
            return "#FBB17C";
          case o.Yellow:
            return "#FBDF7C";
          case o.Green:
            return "#9DFB7C";
          case o.Blue:
            return "#7CD5FB";
          case o.Purple:
            return "#A57CFB";
          case o.Brown:
            return "#C18C5B";
          case o.Gray:
            return "#B8BCBF";
        }
      }
      function s(e) {
        if (!e) return o.White;
        const t = e.toLowerCase(),
          r = c(o);
        for (const e of r) if (e.toLowerCase() == t) return o[e];
        return o.White;
      }
      function c(e) {
        return Object.keys(e).filter((e) => !Number.isNaN(e));
      }
      !(function (e) {
        (e[(e.White = 0)] = "White"),
          (e[(e.Red = 1)] = "Red"),
          (e[(e.Orange = 2)] = "Orange"),
          (e[(e.Yellow = 3)] = "Yellow"),
          (e[(e.Green = 4)] = "Green"),
          (e[(e.Blue = 5)] = "Blue"),
          (e[(e.Purple = 6)] = "Purple"),
          (e[(e.Brown = 7)] = "Brown"),
          (e[(e.Gray = 8)] = "Gray");
      })(o || (o = {}));
      const u = c(o).map((e) => o[e]);
      class d {
        constructor() {
          this.m_mapSteamTimelineMarkers = new Map();
        }
        GetMarkerByID(e) {
          const t = e.toLowerCase().startsWith(l)
            ? e.slice(l.length).toLowerCase()
            : e.toLowerCase();
          return this.m_mapSteamTimelineMarkers.has(t)
            ? this.m_mapSteamTimelineMarkers.get(t)
            : w();
        }
        GetAllUseableMarkerID() {
          return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
            (e) => l + e,
          );
        }
        static Get() {
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              d.s_Singleton.Init(),
              "dev" == n.De.WEB_UNIVERSE &&
                (window.g_SteamTimelineMarker = d.s_Singleton)),
            d.s_Singleton
          );
        }
        AddMarker(e, t, r) {
          const n = null != r ? r : o.White;
          this.m_mapSteamTimelineMarkers.set(e, { func: t, color: n });
          for (const r of u) {
            const n = `${e}_${o[r]}`.toLowerCase();
            this.m_mapSteamTimelineMarkers.set(n, { func: t, color: r });
          }
        }
        Init() {
          this.AddMarker("explosion", C.OQ, o.Gray),
            this.AddMarker("attack", C.W4, o.Gray),
            this.AddMarker("defend", C.Be, o.Gray),
            this.AddMarker("combat", C.jf, o.Gray),
            this.AddMarker("chest", C.bz, o.Gray),
            this.AddMarker("view", C.G7, o.Gray),
            (0, i.h4)()
              ? this.AddMarker("death", C.X, o.Gray)
              : this.AddMarker("death", C.hF, o.Gray),
            this.AddMarker("x", C.X, o.Gray),
            this.AddMarker("plus", C.v3, o.Gray),
            this.AddMarker("minus", C.WF, o.Gray),
            this.AddMarker("info", C.kI, o.Gray),
            this.AddMarker("bolt", C.rZ, o.Gray),
            this.AddMarker("caution", C.ge, o.Gray),
            this.AddMarker("completed", C.FG, o.Gray),
            this.AddMarker("checkmark", C.MC, o.Gray),
            this.AddMarker("effect", C.Qm, o.Gray),
            this.AddMarker("purchase", C.Bu, o.Gray),
            this.AddMarker("ribbon", C.Vy, o.Gray),
            this.AddMarker("scroll", C.Xs, o.Gray),
            this.AddMarker("crown", C._O, o.Gray),
            this.AddMarker("starburst", C.hy, o.Gray),
            this.AddMarker("flag", C.WN, o.Gray),
            this.AddMarker("cart", C.AP, o.Gray),
            this.AddMarker("timer", C.B7, o.Gray),
            this.AddMarker("chat", C.en, o.Gray),
            this.AddMarker("wrench", C.Io, o.Gray),
            this.AddMarker("transfer", C.FE, o.Gray),
            this.AddMarker("edit", C.I8, o.Gray),
            this.AddMarker("bookmark", C.rp, o.Gray),
            this.AddMarker("invalid", C.Q0, o.Gray),
            this.AddMarker("star", C.Ux, o.Gray),
            this.AddMarker("circle", C.Cd, o.Gray),
            this.AddMarker("square", C.bK, o.Gray),
            this.AddMarker("triangle", C.CJ, o.Gray),
            this.AddMarker("heart", C.Xd, o.Gray),
            this.AddMarker("diamond", C.u4, o.Gray),
            this.AddMarker("gem", C._n, o.Gray),
            this.AddMarker("group", C.ZA, o.Gray),
            this.AddMarker("pair", C.sO, o.Gray),
            this.AddMarker("single", C.n5, o.Gray),
            this.AddMarker("achievement", C.Gu, o.Gray),
            this.AddMarker("screenshot", C.w_, o.Gray);
        }
      }
      function L(e) {
        return d.Get().GetMarkerByID(e);
      }
      function h() {
        return { func: C.Jx, color: o.Blue };
      }
      function m() {
        return { func: C.Gu, color: o.White };
      }
      function w() {
        return { func: C.Jx, color: o.Gray };
      }
      function g(e) {
        return e.toLowerCase().startsWith(l);
      }
    },
    83743: (e, t, r) => {
      "use strict";
      r.d(t, { NT: () => c, T$: () => s, tx: () => a });
      var n = r(47427),
        C = r(50898),
        i = r(72297),
        l = r(31846),
        o = r(46882);
      function a() {
        const [e, t] = (0, n.useState)(!1),
          [r, C] = (0, n.useState)(!1),
          [i, l] = (0, n.useState)(!1),
          [o, a] = (0, n.useState)(null),
          [s, c] = (0, n.useState)(null),
          [u, d] = (0, n.useState)(null),
          [L, h] = (0, n.useState)(null),
          [m, w] = (0, n.useState)(null);
        return {
          bLoading: e,
          bError: r,
          bSuccess: i,
          strError: o,
          strSuccess: s,
          elSuccess: L,
          elError: u,
          strThrobber: m,
          fnSetLoading: t,
          fnSetError: C,
          fnSetSuccess: l,
          fnSetStrError: a,
          fnSetStrSuccess: c,
          fnSetElSuccess: h,
          fnSetElError: d,
          fnSetThrobber: w,
        };
      }
      function s(e, t) {
        1 != t ? e.fnSetError(!0) : e.fnSetSuccess(!0);
      }
      function c(e) {
        const {
            strDialogTitle: t,
            state: r,
            closeModal: a,
            strThrobber: s,
          } = e,
          {
            bLoading: c,
            bError: u,
            bSuccess: d,
            strError: L,
            strSuccess: h,
            elSuccess: m,
            elError: w,
            strThrobber: g,
          } = r;
        return u || L || w
          ? n.createElement(
              C.uH,
              { strTitle: t, bAlertDialog: !0, closeModal: a },
              Boolean(L) &&
                n.createElement(
                  "div",
                  { className: i.ErrorStylesWithIcon },
                  L || (0, l.Xx)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(w) && w,
            )
          : d || h || m
            ? n.createElement(
                C.uH,
                {
                  strTitle: t,
                  strDescription: h || (0, l.Xx)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: a,
                },
                n.createElement(n.Fragment, null, Boolean(m) && m),
              )
            : n.createElement(
                C.uH,
                { strTitle: t, closeModal: () => {} },
                n.createElement(o.V, {
                  string: s || g || (0, l.Xx)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              );
      }
    },
    77556: (e, t, r) => {
      "use strict";
      r.d(t, {
        AP: () => v,
        B7: () => M,
        Be: () => F,
        Bu: () => h,
        CJ: () => H,
        Cd: () => B,
        Eq: () => Q,
        FE: () => _,
        FG: () => u,
        G7: () => O,
        Gu: () => a,
        I8: () => y,
        Io: () => G,
        Jx: () => o,
        KT: () => J,
        MC: () => d,
        OQ: () => T,
        Q0: () => x,
        Qm: () => L,
        Ux: () => Z,
        Vy: () => m,
        W4: () => R,
        WF: () => X,
        WN: () => f,
        X: () => N,
        Xd: () => S,
        Xs: () => w,
        ZA: () => I,
        _O: () => g,
        _n: () => l,
        bK: () => A,
        bz: () => P,
        cW: () => Y,
        en: () => E,
        ge: () => i,
        hF: () => U,
        hy: () => p,
        jf: () => W,
        kI: () => s,
        n5: () => b,
        rZ: () => c,
        rp: () => k,
        sO: () => D,
        u4: () => V,
        v3: () => j,
        w_: () => q,
      });
      var n = r(85556),
        C = r(47427);
      r(69622);
      function i(e) {
        return C.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          C.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 4L3 30H33L18 4ZM21.025 12.9375L20.0167 21.0625H15.9833L14.975 12.9375H21.025ZM18 27.5625C17.5055 27.5625 17.0222 27.4195 16.6111 27.1517C16.2 26.8839 15.8795 26.5032 15.6903 26.0578C15.5011 25.6124 15.4516 25.1223 15.548 24.6495C15.6445 24.1766 15.8826 23.7423 16.2322 23.4014C16.5819 23.0605 17.0273 22.8284 17.5123 22.7343C17.9972 22.6403 18.4999 22.6886 18.9567 22.873C19.4135 23.0575 19.804 23.37 20.0787 23.7708C20.3534 24.1716 20.5 24.6429 20.5 25.125C20.5 25.7715 20.2366 26.3915 19.7678 26.8486C19.2989 27.3057 18.663 27.5625 18 27.5625Z",
          }),
        );
      }
      function l(e) {
        return C.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          C.createElement("path", {
            fill: "currentColor",
            d: "M14.8423 5.23802H8.25602C8.06408 5.23802 7.8781 5.334 7.76408 5.48998L3.89928 11H10.0685L14.8423 5.23802Z",
          }),
          C.createElement("path", {
            fill: "currentColor",
            d: "M3.66016 13.5L14.8423 28.8125L9.68747 13.5H3.66016Z",
          }),
          C.createElement("path", {
            fill: "currentColor",
            d: "M12.1675 13.5L17.4301 30.33C17.4339 30.3454 17.4403 30.3559 17.4475 30.3678L17.4527 30.3763L17.4574 30.3847L17.4601 30.39C17.4661 30.4139 17.478 30.4379 17.4961 30.4619C17.5201 30.504 17.5501 30.54 17.5801 30.57L17.6341 30.624C17.6882 30.666 17.7541 30.7019 17.8201 30.726C17.8623 30.7365 17.9044 30.7424 17.9424 30.7478L17.9582 30.75H17.9941L18.0001 30.756C18.0031 30.756 18.0046 30.7545 18.0061 30.753C18.0076 30.7515 18.0091 30.75 18.0121 30.75H18.0361C18.0841 30.75 18.1321 30.744 18.1801 30.726H18.1861C18.2521 30.702 18.318 30.666 18.3721 30.624C18.3811 30.615 18.3886 30.606 18.3961 30.597C18.4036 30.588 18.4111 30.579 18.4201 30.57C18.4561 30.54 18.4861 30.5039 18.5101 30.4619L18.5461 30.39C18.5491 30.378 18.5551 30.369 18.5611 30.36C18.5671 30.351 18.5731 30.342 18.5761 30.33L19.3385 27.889L19.3262 27.8851L21.4894 21.0028L23.8329 13.5L12.1675 13.5Z",
          }),
          C.createElement("path", {
            fill: "currentColor",
            d: "M20.875 28.8125L32.346 13.5H26.3313L20.875 28.8125Z",
          }),
          C.createElement("path", {
            fill: "currentColor",
            d: "M32.1009 11L28.236 5.48993C28.1221 5.33395 27.9421 5.23798 27.7441 5.23798H21.0513L25.8251 11H32.1009Z",
          }),
          C.createElement("path", {
            fill: "currentColor",
            d: "M23.076 11L18.4622 5.45398C18.4562 5.448 18.4487 5.44199 18.4412 5.43599C18.4338 5.42998 18.4262 5.42397 18.4203 5.418C18.4157 5.41341 18.412 5.40792 18.4081 5.40222C18.4019 5.39309 18.3954 5.38341 18.3843 5.37605C18.3753 5.37007 18.3663 5.36556 18.3573 5.36105C18.3483 5.35654 18.3393 5.35202 18.3303 5.34605C18.2949 5.32248 18.2596 5.30479 18.2243 5.28709L18.2222 5.28605L18.2195 5.28515C18.1843 5.27349 18.1492 5.26187 18.1142 5.25605C18.0782 5.25007 18.0421 5.24409 18.0002 5.24409C17.9641 5.24409 17.9281 5.25007 17.8921 5.25605C17.85 5.26202 17.8141 5.27398 17.7781 5.29202C17.7421 5.3041 17.7121 5.32202 17.6761 5.34605C17.6671 5.35202 17.6566 5.35654 17.6461 5.36105C17.6356 5.36556 17.6252 5.37007 17.6161 5.37605C17.6102 5.38202 17.6056 5.38952 17.6011 5.39702C17.5966 5.40452 17.5921 5.41203 17.5861 5.418C17.5811 5.42132 17.5761 5.42418 17.5712 5.42696C17.5585 5.4342 17.5467 5.44094 17.5381 5.45398L12.9293 11H23.076Z",
          }),
        );
      }
      function o(e) {
        return C.createElement(
          "svg",
          Object.assign({}, e, {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }),
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 33C18 33 29 20.5586 29 14.3115C29 8.06432 24.0751 3 18 3C11.9249 3 7 8.06432 7 14.3115C7 20.5586 18 33 18 33ZM18 20C21.3137 20 24 17.3137 24 14C24 10.6863 21.3137 8 18 8C14.6863 8 12 10.6863 12 14C12 17.3137 14.6863 20 18 20Z",
            fill: "currentColor",
          }),
        );
      }
      function a(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M30 30.05H26L24 34.05L20.11 27.57L22.9 24.87L26.9 24.81L30 30.05ZM13.1 24.87L9.1 24.81L6 30.05H10L12 34.05L15.89 27.57L13.1 24.87ZM22.5 13.05C22.5 12.16 22.2361 11.2899 21.7416 10.5499C21.2471 9.8099 20.5443 9.23312 19.7221 8.89253C18.8998 8.55194 17.995 8.46282 17.1221 8.63645C16.2492 8.81009 15.4474 9.23867 14.818 9.86801C14.1887 10.4973 13.7601 11.2992 13.5865 12.1721C13.4128 13.045 13.5019 13.9498 13.8425 14.7721C14.1831 15.5943 14.7599 16.2971 15.4999 16.7916C16.24 17.2861 17.11 17.55 18 17.55C18.5913 17.5513 19.1771 17.4358 19.7236 17.2101C20.2702 16.9845 20.7668 16.653 21.1849 16.2349C21.603 15.8168 21.9345 15.3202 22.1601 14.7736C22.3858 14.2271 22.5013 13.6413 22.5 13.05ZM29 13.05L25.85 16.3L25.78 20.83L21.25 20.9L18 24.05L14.75 20.9L10.22 20.83L10.15 16.3L7 13.05L10.15 9.79999L10.22 5.26999L14.75 5.19999L18 2.04999L21.25 5.19999L25.78 5.26999L25.85 9.79999L29 13.05Z",
            fill: "currentColor",
          }),
        );
      }
      function s(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V3ZM20.5 26H15.5V16H20.5V26ZM18 14C17.4067 14 16.8266 13.8241 16.3333 13.4944C15.8399 13.1648 15.4554 12.6962 15.2284 12.1481C15.0013 11.5999 14.9419 10.9967 15.0577 10.4147C15.1734 9.83279 15.4591 9.29824 15.8787 8.87868C16.2982 8.45912 16.8328 8.1734 17.4147 8.05764C17.9967 7.94189 18.5999 8.0013 19.1481 8.22836C19.6962 8.45542 20.1648 8.83994 20.4944 9.33329C20.8241 9.82664 21 10.4067 21 11C21 11.7956 20.6839 12.5587 20.1213 13.1213C19.5587 13.6839 18.7957 14 18 14V14Z",
            fill: "currentColor",
          }),
        );
      }
      function c(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M12.34 33.73L16 20H8L24 2L21 15H29L12.34 33.73Z",
            fill: "currentColor",
          }),
        );
      }
      function u(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM7 19.9L14.9188 28L29 13.57L25.5017 10L14.9188 20.845L10.4983 16.315L7 19.9Z",
            fill: "currentColor",
          }),
        );
      }
      function d(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M27.2344 6L13.8123 20.0948L7.76561 13.77L3 18.7086L13.8123 30L32 10.9386L27.2344 6Z",
            fill: "currentColor",
          }),
        );
      }
      function L(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
            fill: "currentColor",
          }),
          C.createElement("path", {
            d: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
            fill: "currentColor",
          }),
          C.createElement("path", {
            d: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
            fill: "currentColor",
          }),
          C.createElement("path", {
            d: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
            fill: "currentColor",
          }),
          C.createElement("path", {
            d: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
            fill: "currentColor",
          }),
        );
      }
      function h(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M33.78 19.22L19.22 33.78L4 18.56V4H18.56L33.78 19.22Z",
            fill: "currentColor",
          }),
        );
      }
      function m(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M26 24.5V36L18 33L10 36V24.5L12 24.56C12.4845 24.5765 12.9464 24.7684 13.3 25.1L16.59 28.2C16.9609 28.5488 17.4509 28.7429 17.96 28.7429C18.4691 28.7429 18.9591 28.5488 19.33 28.2L22.62 25.1C22.9736 24.7684 23.4355 24.5765 23.92 24.56L26 24.5ZM30 12L28.2 13.91C27.1867 14.9805 26.6029 16.3866 26.56 17.86L26.49 20.49L23.86 20.56C22.3866 20.6029 20.9805 21.1867 19.91 22.2L18 24L16.09 22.2C15.0195 21.1867 13.6134 20.6029 12.14 20.56L9.51 20.49L9.44 17.86C9.3971 16.3866 8.81331 14.9805 7.8 13.91L6 12L7.8 10.09C8.81331 9.01949 9.3971 7.61342 9.44 6.14L9.51 3.51L12.14 3.44C13.6134 3.3971 15.0195 2.81331 16.09 1.8L18 0L19.91 1.8C20.9805 2.81331 22.3866 3.3971 23.86 3.44L26.49 3.51L26.56 6.14C26.5906 7.6308 27.1753 9.05677 28.2 10.14L30 12ZM23 12C23 11.0111 22.7068 10.0444 22.1573 9.22215C21.6079 8.3999 20.827 7.75904 19.9134 7.3806C18.9998 7.00216 17.9945 6.90315 17.0245 7.09607C16.0546 7.289 15.1637 7.7652 14.4645 8.46447C13.7652 9.16373 13.289 10.0546 13.0961 11.0245C12.9031 11.9945 13.0022 12.9998 13.3806 13.9134C13.759 14.827 14.3999 15.6079 15.2221 16.1573C16.0444 16.7068 17.0111 17 18 17C18.6566 17 19.3068 16.8707 19.9134 16.6194C20.52 16.3681 21.0712 15.9998 21.5355 15.5355C21.9998 15.0712 22.3681 14.52 22.6194 13.9134C22.8707 13.3068 23 12.6566 23 12Z",
            fill: "currentColor",
          }),
        );
      }
      function w(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M8.22 33.93C9.00446 33.7747 9.71061 33.3517 10.2177 32.7334C10.7248 32.115 11.0013 31.3397 11 30.54V25H28V4H4V30.83C4.00192 31.3 4.11422 31.7629 4.32787 32.1815C4.54152 32.6002 4.85053 32.9627 5.23 33.24C5.65215 33.5582 6.13651 33.7841 6.65162 33.903C7.16674 34.0218 7.7011 34.0311 8.22 33.93Z",
            fill: "currentColor",
          }),
          C.createElement("path", {
            d: "M14 30.54C13.9892 31.7631 13.6434 32.9598 13 34H30.7C33.42 34 34 32 34 30.25V28H14V30.54Z",
            fill: "currentColor",
          }),
        );
      }
      function g(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M32 30L34 7L25.32 13.41L18 4L10.68 13.41L2 7L4 30H32Z",
            fill: "currentColor",
          }),
        );
      }
      function p(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M17.9997 6.16803L22.2873 2L23.9155 7.75347L29.7123 6.287L28.2465 12.0838L34 13.7127L29.8313 17.9997L34 22.2873L28.2465 23.9155L29.7123 29.7123L23.9155 28.2465L22.2873 34L17.9997 29.8313L13.7127 34L12.0838 28.2465L6.287 29.7123L7.75347 23.9155L2 22.2873L6.16803 17.9997L2 13.7127L7.75347 12.0838L6.287 6.287L12.0838 7.75347L13.7127 2L17.9997 6.16803Z",
            fill: "currentColor",
          }),
        );
      }
      function f(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M32 3.83C20 6.44 13.86 -1.37 6 3.83V32H10V17.8C16.19 16.66 22.11 21.6 32 19.45L28.27 11.64L32 3.83Z",
            fill: "currentColor",
          }),
        );
      }
      function v(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M33.63 8.04999L30.11 20.81C29.9416 21.453 29.5645 22.0218 29.0378 22.4273C28.5111 22.8327 27.8647 23.0517 27.2 23.05H14.75C14.1022 23.0506 13.4715 22.8415 12.9524 22.454C12.4333 22.0664 12.0536 21.5213 11.87 20.9L7.56 8.04999H2V4.04999H8.28C8.90845 4.05116 9.52067 4.24967 10.0302 4.61749C10.5398 4.98532 10.921 5.50388 11.12 6.09999L11.78 8.09999L33.63 8.04999ZM15 27.05C14.5055 27.05 14.0222 27.1966 13.6111 27.4713C13.2 27.746 12.8795 28.1365 12.6903 28.5933C12.5011 29.0501 12.4516 29.5528 12.548 30.0377C12.6445 30.5227 12.8826 30.9681 13.2322 31.3178C13.5819 31.6674 14.0273 31.9055 14.5123 32.002C14.9972 32.0984 15.4999 32.0489 15.9567 31.8597C16.4135 31.6705 16.804 31.35 17.0787 30.9389C17.3534 30.5278 17.5 30.0444 17.5 29.55C17.5 28.8869 17.2366 28.2511 16.7678 27.7822C16.2989 27.3134 15.663 27.05 15 27.05ZM27 27.05C26.5055 27.05 26.0222 27.1966 25.6111 27.4713C25.2 27.746 24.8795 28.1365 24.6903 28.5933C24.5011 29.0501 24.4516 29.5528 24.548 30.0377C24.6445 30.5227 24.8826 30.9681 25.2322 31.3178C25.5819 31.6674 26.0273 31.9055 26.5123 32.002C26.9972 32.0984 27.4999 32.0489 27.9567 31.8597C28.4135 31.6705 28.804 31.35 29.0787 30.9389C29.3534 30.5278 29.5 30.0444 29.5 29.55C29.5 28.8869 29.2366 28.2511 28.7678 27.7822C28.2989 27.3134 27.663 27.05 27 27.05Z",
            fill: "currentColor",
          }),
        );
      }
      function M(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M20 11.85V17L23.41 20.42L20.59 23.24L16 18.68V11.85H20ZM29 18.43C28.9612 19.5207 28.7589 20.5994 28.4 21.63L32.16 23C32.6583 21.5767 32.9414 20.0869 33 18.58L29 18.43ZM28.68 15.33L32.56 14.33C32.1998 12.8866 31.6268 11.5048 30.86 10.23L27.44 12.3C28.0013 13.2418 28.416 14.2635 28.67 15.33H28.68ZM28.09 6.90001C27.011 5.91173 25.7909 5.08941 24.47 4.46001L22.74 8.07C23.7087 8.53467 24.6047 9.13764 25.4 9.86L28.09 6.90001ZM26.93 24.42C25.8301 25.9503 24.3555 27.1724 22.6475 27.969C20.9396 28.7656 19.0557 29.11 17.1764 28.9693C15.297 28.8285 13.4854 28.2073 11.9152 27.1652C10.3449 26.1231 9.06879 24.6951 8.20908 23.018C7.34937 21.3409 6.93495 19.4711 7.00556 17.5879C7.07616 15.7046 7.62943 13.8711 8.61229 12.2631C9.59516 10.6552 10.9747 9.32667 12.6185 8.40506C14.2624 7.48345 16.1154 6.99963 18 7.00001C18.5659 6.99777 19.1311 7.04124 19.69 7.13001L20.3 3.18001C19.5393 3.05968 18.7702 2.99949 18 3.00001C15.527 2.99797 13.0918 3.60743 10.9112 4.77411C8.7307 5.9408 6.87245 7.62852 5.5019 9.68704C4.13134 11.7456 3.29102 14.111 3.05572 16.5728C2.82043 19.0347 3.19746 21.5165 4.15326 23.7973C5.10906 26.0782 6.61398 28.0874 8.53404 29.646C10.4541 31.2046 12.7297 32.2643 15.1584 32.7308C17.587 33.1972 20.0933 33.056 22.4542 32.3196C24.8151 31.5832 26.9572 30.2745 28.69 28.51V28.51L28.77 28.43L28.82 28.38C29.3109 27.8727 29.7654 27.3313 30.18 26.76L26.93 24.42Z",
            fill: "currentColor",
          }),
        );
      }
      function E(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6V27H12L18 34L24 27H34V6H2ZM9.5 19C9.00555 19 8.5222 18.8534 8.11107 18.5787C7.69995 18.304 7.37952 17.9135 7.1903 17.4567C7.00108 16.9999 6.95157 16.4972 7.04804 16.0123C7.1445 15.5273 7.3826 15.0819 7.73223 14.7322C8.08186 14.3826 8.52732 14.1445 9.01227 14.048C9.49723 13.9516 9.99989 14.0011 10.4567 14.1903C10.9135 14.3795 11.304 14.7 11.5787 15.1111C11.8534 15.5222 12 16.0055 12 16.5C12 16.8283 11.9353 17.1534 11.8097 17.4567C11.6841 17.76 11.4999 18.0356 11.2678 18.2678C11.0356 18.4999 10.76 18.6841 10.4567 18.8097C10.1534 18.9353 9.8283 19 9.5 19ZM18 19C17.5055 19 17.0222 18.8534 16.6111 18.5787C16.2 18.304 15.8795 17.9135 15.6903 17.4567C15.5011 16.9999 15.4516 16.4972 15.548 16.0123C15.6445 15.5273 15.8826 15.0819 16.2322 14.7322C16.5819 14.3826 17.0273 14.1445 17.5123 14.048C17.9972 13.9516 18.4999 14.0011 18.9567 14.1903C19.4135 14.3795 19.804 14.7 20.0787 15.1111C20.3534 15.5222 20.5 16.0055 20.5 16.5C20.5 16.8283 20.4353 17.1534 20.3097 17.4567C20.1841 17.76 19.9999 18.0356 19.7678 18.2678C19.5356 18.4999 19.26 18.6841 18.9567 18.8097C18.6534 18.9353 18.3283 19 18 19ZM26.5 19C26.0055 19 25.5222 18.8534 25.1111 18.5787C24.7 18.304 24.3795 17.9135 24.1903 17.4567C24.0011 16.9999 23.9516 16.4972 24.048 16.0123C24.1445 15.5273 24.3826 15.0819 24.7322 14.7322C25.0819 14.3826 25.5273 14.1445 26.0123 14.048C26.4972 13.9516 26.9999 14.0011 27.4567 14.1903C27.9135 14.3795 28.304 14.7 28.5787 15.1111C28.8534 15.5222 29 16.0055 29 16.5C29 17.163 28.7366 17.7989 28.2678 18.2678C27.7989 18.7366 27.163 19 26.5 19Z",
            fill: "currentColor",
          }),
        );
      }
      function G(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M3 27.6503L13.8393 16.7238C12.5466 13.3983 13.2648 9.49449 15.9937 6.74736C18.8662 3.85564 23.175 3.2773 26.6221 4.86774L19.7308 11.8003L24.0396 16.1379L31.0745 9.20532C32.798 12.6754 32.0799 17.013 29.2074 19.9047C26.4784 22.6518 22.6005 23.3747 19.2971 22.0735L8.45782 33L3 27.6503Z",
            fill: "currentColor",
          }),
        );
      }
      function _(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M9.99999 4H22V16H18.06V10.73L5.38999 23.39L2.60999 20.61L15.27 7.94H9.99999V4ZM26 28.06H20.73L33.39 15.39L30.61 12.61L17.94 25.27V20H14V32H26V28.06Z",
            fill: "currentColor",
          }),
        );
      }
      function y(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M28.1684 2.16431L23.5793 6.75343L29.2362 12.4103L33.8253 7.82116L28.1684 2.16431Z",
            fill: "currentColor",
          }),
          C.createElement("path", {
            d: "M20.76 9.58999L5.67 24.67L4 32L11.33 30.33L26.41 15.24L20.76 9.58999Z",
            fill: "currentColor",
          }),
        );
      }
      function k(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M30 35L18 28L6 35V2H30V35Z",
            fill: "currentColor",
          }),
        );
      }
      function x(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V3ZM7.00001 18C7.00169 15.7749 7.67812 13.6027 8.94001 11.77L24.23 27.06C22.5787 28.1948 20.6488 28.857 18.6486 28.9752C16.6484 29.0933 14.654 28.6629 12.8805 27.7304C11.1071 26.7978 9.62204 25.3986 8.58569 23.6838C7.54934 21.969 7.00105 20.0037 7.00001 18V18ZM27.06 24.23L11.77 8.94C13.8875 7.49109 16.4449 6.82796 18.9996 7.06536C21.5544 7.30275 23.9457 8.42573 25.76 10.24C27.5743 12.0543 28.6973 14.4457 28.9347 17.0004C29.172 19.5551 28.5089 22.1125 27.06 24.23V24.23Z",
            fill: "currentColor",
          }),
        );
      }
      function Z(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M18 0L22.888 11.2722L35.119 12.4377L25.909 20.5698L28.5801 32.5623L18 26.316L7.41987 32.5623L10.091 20.5698L0.880983 12.4377L13.112 11.2722L18 0Z",
            fill: "currentColor",
          }),
        );
      }
      function B(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3Z",
            fill: "currentColor",
          }),
        );
      }
      function A(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("rect", {
            x: "4",
            y: "4",
            width: "28",
            height: "28",
            fill: "currentColor",
          }),
        );
      }
      function H(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 1L1 31.2222H35L18 1Z",
            fill: "currentColor",
          }),
        );
      }
      function S(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M31.4799 6.31003C30.7506 5.57832 29.884 4.99776 28.9299 4.60163C27.9758 4.2055 26.9529 4.00159 25.9199 4.00159C24.8868 4.00159 23.8639 4.2055 22.9098 4.60163C21.9557 4.99776 21.0891 5.57832 20.3599 6.31003L17.9999 8.51003L15.6399 6.31003C14.147 4.90006 12.1628 4.12852 10.1096 4.15966C8.05643 4.1908 6.0965 5.02218 4.64713 6.47677C3.19775 7.93136 2.37342 9.89425 2.34965 11.9475C2.32588 14.0008 3.10454 15.9823 4.51986 17.47L17.9999 31L31.4799 17.47C32.9552 15.9877 33.7835 13.9814 33.7835 11.89C33.7835 9.79863 32.9552 7.79235 31.4799 6.31003V6.31003Z",
            fill: "currentColor",
          }),
        );
      }
      function V(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M31.4359 18L18.2179 35L5 18L18.2179 1L31.4359 18Z",
            fill: "currentColor",
          }),
        );
      }
      function I(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M7.48 21.11C7.00858 22.3527 6.76797 23.6709 6.77 25V30H1V26.38C0.999999 25.6726 1.13949 24.9722 1.41048 24.3189C1.68148 23.6655 2.07866 23.0719 2.5793 22.5722C3.07994 22.0725 3.67421 21.6764 4.32809 21.4067C4.98198 21.1369 5.68265 20.9987 6.39 21C6.75605 21.001 7.12114 21.0378 7.48 21.11ZM6.27 11C5.57777 11 4.90108 11.2053 4.3255 11.5899C3.74993 11.9744 3.30133 12.5211 3.03642 13.1606C2.77151 13.8002 2.7022 14.5039 2.83725 15.1828C2.9723 15.8618 3.30564 16.4854 3.79513 16.9749C4.28461 17.4644 4.90825 17.7977 5.58718 17.9328C6.26612 18.0678 6.96985 17.9985 7.60939 17.7336C8.24893 17.4687 8.79556 17.0201 9.18014 16.4445C9.56473 15.8689 9.77 15.1922 9.77 14.5C9.77 13.5717 9.40125 12.6815 8.74487 12.0251C8.0885 11.3688 7.19826 11 6.27 11ZM13.27 10.5C13.27 9.60999 13.5339 8.73996 14.0284 7.99994C14.5229 7.25991 15.2257 6.68314 16.0479 6.34254C16.8702 6.00195 17.775 5.91283 18.6479 6.08647C19.5208 6.2601 20.3226 6.68868 20.952 7.31802C21.5813 7.94736 22.0099 8.74918 22.1835 9.6221C22.3572 10.495 22.2681 11.3998 21.9275 12.2221C21.5869 13.0443 21.0101 13.7471 20.2701 14.2416C19.53 14.7361 18.66 15 17.77 15C17.1787 15.0013 16.5929 14.8858 16.0464 14.6601C15.4998 14.4345 15.0032 14.103 14.5851 13.6849C14.167 13.2668 13.8355 12.7702 13.6099 12.2236C13.3842 11.6771 13.2687 11.0913 13.27 10.5ZM24.77 25V30H10.77V25C10.77 23.1435 11.5075 21.363 12.8203 20.0503C14.133 18.7375 15.9135 18 17.77 18C19.6265 18 21.407 18.7375 22.7197 20.0503C24.0325 21.363 24.77 23.1435 24.77 25ZM34.77 26.38V30H28.77V25C28.7738 23.6921 28.54 22.3944 28.08 21.17C28.5076 21.0576 28.9479 21.0004 29.39 21C30.8169 21 32.1853 21.5668 33.1942 22.5758C34.2032 23.5847 34.77 24.9531 34.77 26.38ZM29.27 18C28.5778 18 27.9011 17.7947 27.3255 17.4101C26.7499 17.0256 26.3013 16.4789 26.0364 15.8394C25.7715 15.1999 25.7022 14.4961 25.8373 13.8172C25.9723 13.1383 26.3056 12.5146 26.7951 12.0251C27.2846 11.5356 27.9083 11.2023 28.5872 11.0673C29.2661 10.9322 29.9699 11.0015 30.6094 11.2664C31.2489 11.5313 31.7956 11.9799 32.1801 12.5555C32.5647 13.1311 32.77 13.8078 32.77 14.5C32.77 15.4283 32.4013 16.3185 31.7449 16.9749C31.0885 17.6313 30.1983 18 29.27 18Z",
            fill: "currentColor",
          }),
        );
      }
      function D(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M18 26V31H2V26C2 23.8783 2.84285 21.8434 4.34315 20.3431C5.84344 18.8429 7.87827 18 10 18C12.1217 18 14.1566 18.8429 15.6569 20.3431C17.1571 21.8434 18 23.8783 18 26ZM10 15C10.89 15 11.76 14.7361 12.5001 14.2416C13.2401 13.7471 13.8169 13.0443 14.1575 12.2221C14.4981 11.3998 14.5872 10.495 14.4135 9.6221C14.2399 8.74918 13.8113 7.94736 13.182 7.31802C12.5526 6.68868 11.7508 6.2601 10.8779 6.08647C10.005 5.91283 9.10019 6.00195 8.27792 6.34254C7.45566 6.68314 6.75285 7.25991 6.25839 7.99994C5.76392 8.73996 5.5 9.60999 5.5 10.5C5.49868 11.0913 5.61418 11.6771 5.83986 12.2236C6.06554 12.7702 6.39695 13.2668 6.81508 13.6849C7.23321 14.103 7.72981 14.4345 8.27637 14.6601C8.82293 14.8858 9.40868 15.0013 10 15ZM31.66 18.34C30.8643 17.5434 29.9094 16.9238 28.8578 16.5216C27.8062 16.1194 26.6815 15.9437 25.5574 16.006C24.4332 16.0683 23.3348 16.3672 22.3341 16.8831C21.3334 17.399 20.4528 18.1204 19.75 19C21.2201 21.0373 22.0077 23.4877 22 26V29H34V24C34.0008 22.9491 33.7946 21.9084 33.3931 20.9372C32.9916 19.966 32.4027 19.0835 31.66 18.34ZM26 13C26.89 13 27.76 12.7361 28.5001 12.2416C29.2401 11.7471 29.8169 11.0443 30.1575 10.2221C30.4981 9.39981 30.5872 8.49501 30.4135 7.6221C30.2399 6.74918 29.8113 5.94736 29.182 5.31802C28.5526 4.68868 27.7508 4.2601 26.8779 4.08647C26.005 3.91283 25.1002 4.00195 24.2779 4.34254C23.4557 4.68314 22.7529 5.25991 22.2584 5.99994C21.7639 6.73996 21.5 7.60999 21.5 8.5C21.4987 9.09132 21.6142 9.67708 21.8399 10.2236C22.0655 10.7702 22.397 11.2668 22.8151 11.6849C23.2332 12.103 23.7298 12.4345 24.2764 12.6601C24.8229 12.8858 25.4087 13.0013 26 13Z",
            fill: "currentColor",
          }),
        );
      }
      function b(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M30 32H6V31C6 27.8174 7.26428 24.7652 9.51472 22.5147C11.7652 20.2643 14.8174 19 18 19C21.1826 19 24.2348 20.2643 26.4853 22.5147C28.7357 24.7652 30 27.8174 30 31V32ZM18 3C16.8133 3 15.6533 3.35189 14.6666 4.01118C13.6799 4.67047 12.9108 5.60754 12.4567 6.7039C12.0026 7.80026 11.8838 9.00666 12.1153 10.1705C12.3468 11.3344 12.9182 12.4035 13.7574 13.2426C14.5965 14.0818 15.6656 14.6532 16.8295 14.8847C17.9933 15.1162 19.1997 14.9974 20.2961 14.5433C21.3925 14.0892 22.3295 13.3201 22.9888 12.3334C23.6481 11.3467 24 10.1867 24 9C24 7.4087 23.3679 5.88258 22.2426 4.75736C21.1174 3.63214 19.5913 3 18 3Z",
            fill: "currentColor",
          }),
        );
      }
      function T(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M3.1154 27.6838L8.39576 20.3968C8.50481 20.251 8.55119 20.0677 8.52472 19.8875C8.49836 19.7073 8.40123 19.5451 8.25498 19.4367L4.25152 16.3806C4.10812 16.27 4.01405 16.1073 3.98977 15.9278C3.96548 15.7484 4.01295 15.5665 4.1219 15.4218C4.23074 15.2772 4.39241 15.1813 4.57159 15.1549L9.09981 14.4028C9.32514 14.3675 9.51799 14.2222 9.61435 14.0155C9.7106 13.8088 9.6977 13.5677 9.57978 13.3724L4.58729 5.03256C4.48403 4.85393 4.46631 4.63857 4.53905 4.4456C4.61168 4.25254 4.76711 4.10236 4.96247 4.0363C5.15783 3.97023 5.37244 3.99517 5.54735 4.10444L14.508 9.91936C14.6733 10.0263 14.8763 10.0575 15.066 10.0049C15.2557 9.95229 15.4137 9.82092 15.5001 9.64415L18.0604 4.38927C18.1473 4.22213 18.299 4.098 18.4801 4.0458C18.6611 3.99362 18.8556 4.01791 19.0182 4.11307C19.1808 4.20823 19.2973 4.36585 19.3405 4.54929L20.595 10.5241H20.5949C20.6381 10.7286 20.772 10.9025 20.9588 10.9965C21.1455 11.0905 21.365 11.0945 21.5551 11.0073L28.3075 7.86803L28.3074 7.86792C28.4907 7.78118 28.7031 7.78009 28.8873 7.86497C29.0715 7.94996 29.2086 8.11217 29.2615 8.30796C29.3146 8.50376 29.278 8.71301 29.1619 8.87926L24.9856 14.9949C24.8537 15.1863 24.8279 15.4317 24.9172 15.6464C25.0064 15.8611 25.1985 16.0159 25.4273 16.0574L32.3943 17.3375C32.6059 17.363 32.7939 17.4852 32.903 17.6684C33.0122 17.8515 33.0302 18.075 32.9519 18.2733C32.8737 18.4716 32.7079 18.6224 32.503 18.6816L25.4176 21.0338C25.237 21.0946 25.0898 21.2276 25.011 21.4011C24.9321 21.5746 24.9287 21.773 25.0017 21.9491L28.4131 30.2248C28.491 30.4095 28.4841 30.6189 28.3942 30.7981C28.3043 30.9773 28.1405 31.108 27.9459 31.156C27.7513 31.2039 27.5454 31.1642 27.3827 31.0473L19.558 25.5493C19.3872 25.4307 19.1719 25.3953 18.972 25.4531C18.7721 25.5108 18.6089 25.6554 18.5275 25.847L15.8106 32.3594C15.734 32.5434 15.5814 32.6852 15.3924 32.7481C15.2032 32.8108 14.9962 32.7886 14.8247 32.6871C14.6533 32.5855 14.5343 32.4147 14.4985 32.2187L13.3368 25.9047C13.2995 25.7027 13.1738 25.528 12.9942 25.4284C12.8147 25.3286 12.5999 25.3144 12.4088 25.3894L3.92498 28.7113C3.7422 28.7784 3.5395 28.7648 3.36723 28.674C3.19495 28.5832 3.06926 28.4237 3.02126 28.2351C2.97325 28.0464 3.00737 27.8461 3.11533 27.6841L3.1154 27.6838Z",
            fill: "currentColor",
          }),
        );
      }
      function R(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M32.1364 3.05916C32.3257 3.11958 32.4978 3.22426 32.6386 3.36452C32.7774 3.50482 32.8811 3.67603 32.941 3.86413C33.001 4.05222 33.0155 4.25184 32.9834 4.44663L31.7339 12.0377C31.6841 12.3356 31.5288 12.6056 31.2965 12.7987L19.2946 22.7251L17.1703 20.6009L27.2742 10.497L25.5074 8.7301L15.406 18.8365L13.2817 16.7123L23.2694 4.69904C23.4614 4.46893 23.7297 4.31549 24.0254 4.2667L31.5502 3.01714C31.7462 2.98434 31.9471 2.99875 32.1364 3.05916ZM9.26762 16.7603C9.59525 16.7574 9.91089 16.8834 10.1466 17.111L18.8934 25.8578C19.1211 26.0935 19.247 26.4092 19.2442 26.7368C19.2413 27.0644 19.1099 27.3778 18.8782 27.6095C18.6465 27.8412 18.3331 27.9726 18.0055 27.9754C17.6779 27.9783 17.3622 27.8523 17.1266 27.6247L14.6275 25.1256L10.1466 29.6065L11.3961 30.8561C11.5155 30.9713 11.6107 31.1092 11.6761 31.2617C11.7416 31.4141 11.7761 31.5781 11.7775 31.744C11.779 31.9099 11.7474 32.0745 11.6845 32.228C11.6217 32.3816 11.5289 32.5211 11.4116 32.6384C11.2943 32.7557 11.1548 32.8485 11.0012 32.9114C10.8476 32.9742 10.6831 33.0058 10.5172 33.0044C10.3513 33.0029 10.1873 32.9684 10.0348 32.903C9.88239 32.8375 9.74451 32.7423 9.62925 32.6229L3.38147 26.3752C3.26213 26.2599 3.16694 26.122 3.10145 25.9696C3.03596 25.8171 3.00149 25.6531 3.00005 25.4872C2.99861 25.3213 3.03022 25.1568 3.09305 25.0032C3.15588 24.8496 3.24866 24.7101 3.36599 24.5928C3.48331 24.4755 3.62283 24.3827 3.77639 24.3199C3.92996 24.257 4.0945 24.2254 4.26041 24.2269C4.42633 24.2283 4.59029 24.2628 4.74274 24.3283C4.89519 24.3938 5.03308 24.4889 5.14834 24.6083L6.3979 25.8578L10.8788 21.3769L8.37969 18.8778C8.15207 18.6422 8.02613 18.3265 8.02897 17.9989C8.03182 17.6713 8.16323 17.3579 8.39491 17.1262C8.62659 16.8945 8.93999 16.7631 9.26762 16.7603Z",
            fill: "currentColor",
          }),
        );
      }
      function F(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M17.6253 34.113C17.743 34.1717 17.8718 34.2012 18 34.2012C18.1282 34.2012 18.257 34.1717 18.3748 34.113C18.8953 33.8524 31.1275 27.6036 31.1275 16.0461L31.1274 8.2254C31.1274 7.76274 30.7522 7.38762 30.2892 7.38762C30.2258 7.38762 23.8719 7.32574 18.5922 2.04672C18.265 1.71954 17.7346 1.71954 17.4075 2.04672C12.1509 7.30272 5.77225 7.38762 5.71045 7.38762C5.24779 7.38762 4.87231 7.76274 4.87231 8.2254V16.0464C4.87278 27.6033 17.1048 33.8523 17.6253 34.113H17.6253Z",
            fill: "currentColor",
          }),
        );
      }
      function P(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.50571 11.2155C3.87965 9.34584 5.52131 8 7.42804 8H28.5578C30.4645 8 32.1061 9.34584 32.4801 11.2155L32.9759 13.6947C33.0378 14.0041 32.8011 14.2928 32.4856 14.2928H3.50017C3.18465 14.2928 2.948 14.0041 3.00988 13.6947L3.50571 11.2155ZM14.2172 16.8099H4.42812C4.27911 16.8099 4.16319 16.9394 4.17965 17.0875L5.20967 26.3577C5.32221 27.3706 6.17834 28.1368 7.19744 28.1368H28.7883C29.8074 28.1368 30.6635 27.3706 30.7761 26.3577L31.8061 17.0875C31.8226 16.9394 31.7066 16.8099 31.5576 16.8099H21.7686V19.8441C21.7686 20.9486 20.8731 21.8441 19.7686 21.8441H16.2172C15.1127 21.8441 14.2172 20.9486 14.2172 19.8441V16.8099ZM17.2343 16.8099C16.9582 16.8099 16.7343 17.0337 16.7343 17.3099V18.827C16.7343 19.1031 16.9582 19.327 17.2343 19.327H18.7514C19.0276 19.327 19.2514 19.1031 19.2514 18.827V17.3099C19.2514 17.0337 19.0276 16.8099 18.7514 16.8099H17.2343Z",
            fill: "currentColor",
          }),
        );
      }
      function W(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M31.9513 28.4678L31.6814 28.3401C31.4615 28.2254 31.2594 28.0795 31.0814 27.9068L26.6464 23.4718L27.1797 22.9385C27.3887 22.7296 27.5545 22.4816 27.6676 22.2086C27.7807 21.9356 27.8389 21.6431 27.8389 21.3476C27.8389 21.0521 27.7807 20.7595 27.6676 20.4865C27.5545 20.2136 27.3887 19.9656 27.1797 19.7567C27.1101 19.687 27.0274 19.6317 26.9364 19.594C26.8454 19.5563 26.7479 19.5369 26.6494 19.5369C26.5509 19.5369 26.4533 19.5563 26.3624 19.594C26.2714 19.6317 26.1887 19.687 26.1191 19.7567L25.1055 20.77L22.6057 18.1838L32.1273 9.16542L32.234 9.06543C32.3638 8.94364 32.4441 8.77816 32.4593 8.60079L32.9926 3.83112C32.9966 3.80307 32.9986 3.77478 32.9986 3.74646C32.9985 3.54799 32.921 3.35739 32.7826 3.21516C32.7023 3.13644 32.6054 3.07672 32.499 3.04038C32.3926 3.00404 32.2793 2.99201 32.1677 3.00518L27.398 3.53847C27.2201 3.55335 27.0539 3.63334 26.9314 3.76312L17.9986 13.1935L9.06592 3.76312C8.94377 3.63368 8.77827 3.55371 8.60095 3.53847L3.83094 3.00518C3.71926 2.99201 3.60605 3.00404 3.49963 3.04038C3.39321 3.07672 3.29629 3.13644 3.21598 3.21516C3.07757 3.35739 3.00009 3.54799 3 3.74646C3.00002 3.77478 3.00202 3.80307 3.006 3.83112L3.53929 8.60079C3.55452 8.77816 3.63477 8.94364 3.76461 9.06543L3.87128 9.16542L13.393 18.1838L10.8931 20.77L9.87953 19.7567C9.80992 19.687 9.72725 19.6317 9.63625 19.594C9.54526 19.5563 9.44773 19.5369 9.34923 19.5369C9.25073 19.5369 9.15321 19.5563 9.06221 19.594C8.97122 19.6317 8.88855 19.687 8.81894 19.7567C8.61002 19.9656 8.44429 20.2136 8.33123 20.4866C8.21816 20.7596 8.15996 21.0521 8.15996 21.3476C8.15996 21.643 8.21816 21.9356 8.33123 22.2086C8.44429 22.4815 8.61002 22.7296 8.81894 22.9385L9.35223 23.4718L4.9172 27.9068C4.7392 28.0795 4.53711 28.2254 4.31724 28.3401L4.04726 28.4678C3.77896 28.599 3.54621 28.7929 3.36868 29.0331C3.19116 29.2733 3.07407 29.5527 3.02733 29.8477C2.97954 30.1411 3.00219 30.4417 3.0934 30.7247C3.18462 31.0077 3.34179 31.2649 3.55196 31.4752L4.52723 32.4498C4.8798 32.8009 5.35723 32.9979 5.85481 32.9975C5.95521 32.9973 6.05547 32.9898 6.15479 32.9751C6.44819 32.9294 6.7262 32.8135 6.96513 32.6372C7.20407 32.4609 7.39684 32.2294 7.52702 31.9625L7.67701 31.6625C7.7898 31.4475 7.93392 31.2505 8.10465 31.0779L12.532 26.6505L13.062 27.1805C13.2709 27.3894 13.5189 27.5552 13.7919 27.6682C14.0649 27.7813 14.3574 27.8395 14.6529 27.8395C14.9483 27.8395 15.2409 27.7813 15.5139 27.6682C15.7868 27.5552 16.0348 27.3894 16.2438 27.1805C16.3844 27.0398 16.4634 26.849 16.4634 26.6501C16.4634 26.4511 16.3844 26.2603 16.2438 26.1196L15.2302 25.106L17.9933 22.4395L18.0016 22.4315L18.01 22.4395L20.7728 25.106L19.7592 26.1196C19.6186 26.2603 19.5396 26.4511 19.5396 26.6501C19.5396 26.849 19.6186 27.0398 19.7592 27.1805C19.9681 27.3894 20.2161 27.5552 20.4891 27.6682C20.7621 27.7813 21.0546 27.8395 21.3501 27.8395C21.6455 27.8395 21.9381 27.7813 22.2111 27.6682C22.484 27.5552 22.732 27.3894 22.941 27.1805L23.4709 26.6505L27.8983 31.0779C28.0692 31.2503 28.2134 31.4474 28.3259 31.6625L28.4759 31.9625C28.6061 32.2294 28.7989 32.4609 29.0378 32.6372C29.2767 32.8135 29.5548 32.9294 29.8482 32.9751C29.9475 32.9898 30.0477 32.9973 30.1481 32.9975C30.6457 32.9979 31.1231 32.8009 31.4757 32.4498L32.451 31.4752C32.6611 31.2649 32.8183 31.0077 32.9095 30.7247C33.0008 30.4417 33.0234 30.1411 32.9756 29.8477C32.9284 29.5522 32.8107 29.2726 32.6324 29.0323C32.4541 28.7921 32.2205 28.5985 31.9513 28.4678Z",
            fill: "currentColor",
          }),
        );
      }
      function O(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0967 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9.00003 23.94 7.94003C20.9843 6.77799 17.7541 6.50247 14.6444 7.14715C11.5346 7.79183 8.68012 9.32878 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
            fill: "currentColor",
          }),
        );
      }
      function U(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M32.991 20.3742C31.996 19.9541 30.8307 20.4415 30.3037 21.4683L27.0772 20.1006C27.0852 19.9739 27.089 19.8507 27.089 19.724V16.0418L30.3197 14.6703C30.8511 15.6771 32.0045 16.1567 32.9913 15.7405C34.0339 15.2966 34.4896 14.0161 34.0061 12.8824C33.784 12.3555 33.4034 11.9551 32.9517 11.7171C33.0943 11.2297 33.0705 10.6745 32.8487 10.1515C32.3691 9.01382 31.1322 8.45483 30.0896 8.89511C29.0945 9.31523 28.6348 10.4924 29.0075 11.5864L26.8273 12.5099C25.8561 8.53397 22.2688 5.58887 17.9998 5.58887C13.7269 5.58887 10.1434 8.53403 9.17233 12.5099L6.98818 11.5864C7.36084 10.4924 6.90111 9.31523 5.90995 8.89511C4.86733 8.45519 3.63076 9.01393 3.14725 10.1515C2.92518 10.6746 2.90537 11.2297 3.04424 11.7171C2.59634 11.9551 2.21198 12.3554 1.9898 12.8824C1.51028 14.0161 1.96601 15.2966 3.00863 15.7405C3.99182 16.1567 5.14919 15.6771 5.68016 14.6703L8.91086 16.0418L8.91121 19.7243C8.91121 19.851 8.9152 19.9742 8.92305 20.1009L5.69235 21.4686C5.16501 20.4419 3.99957 19.9544 3.00888 20.3745C1.96626 20.8184 1.51053 22.0986 1.99005 23.2326C2.21212 23.7557 2.59662 24.1599 3.04449 24.3979C2.90586 24.8853 2.92566 25.4405 3.1475 25.9635C3.63101 27.0972 4.86794 27.6602 5.9102 27.2199C6.89339 26.7998 7.35314 25.6385 7.00028 24.5562L9.80681 23.3671C9.9854 23.716 10.1913 24.0529 10.4253 24.3702L11.9593 26.4751V26.9902C11.9593 28.8809 13.4933 30.4108 15.3841 30.4108H20.6164C22.5071 30.4108 24.037 28.8808 24.037 26.9902V26.4751L25.575 24.3702C25.809 24.0531 26.0149 23.716 26.1935 23.3671L29 24.5562C28.6433 25.6383 29.103 26.7998 30.0901 27.2199C31.1327 27.6598 32.3693 27.0971 32.8492 25.9635C33.0712 25.4404 33.095 24.8853 32.9522 24.3979C33.404 24.1599 33.7844 23.7557 34.0066 23.2326C34.49 22.0986 34.0339 20.8184 32.9917 20.3742L32.991 20.3742ZM24.6825 18.0554C24.6825 18.3885 24.5993 18.7016 24.4485 18.987C24.0324 19.8035 23.0808 20.3706 21.9671 20.3706C21.111 20.3706 20.346 19.8194 19.8503 19.1102C19.4738 18.5792 19.2516 17.9607 19.2516 17.4135C19.2516 17.1953 19.2872 17.0014 19.3585 16.8306C19.6796 16.0102 20.7262 15.7446 21.9667 15.7446C23.0924 15.7446 24.0558 16.3235 24.464 17.1517C24.6073 17.429 24.6825 17.7343 24.6825 18.0554L24.6825 18.0554ZM11.3124 18.0554C11.3124 17.7343 11.3877 17.429 11.5306 17.1518C11.9428 16.3234 12.9062 15.7446 14.0279 15.7446C15.2685 15.7446 16.3149 16.0103 16.6361 16.8307C16.7074 17.0013 16.743 17.1954 16.743 17.4136C16.743 17.9604 16.5209 18.5749 16.1443 19.1064C15.6529 19.8199 14.8879 20.3707 14.0275 20.3707C12.9176 20.3707 11.9622 19.8038 11.5461 18.9872C11.3955 18.7016 11.3124 18.3885 11.3124 18.0554L11.3124 18.0554ZM19.0341 21.8843C19.0341 22.578 18.5704 23.1407 17.9995 23.1407C17.4286 23.1407 16.9649 22.5776 16.9649 21.8843C16.9649 21.3691 17.2227 20.481 17.5912 20.0649L17.9995 19.8942L18.4078 20.0649C18.7764 20.4813 19.0341 21.3692 19.0341 21.8843Z",
            fill: "currentColor",
          }),
        );
      }
      function N(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M32.895 7.34625L28.9237 3.375L18.135 14.1525L7.34625 3.375L3.375 7.34625L14.1525 18.135L3.375 28.9237L7.34625 32.895L18.135 22.1175L28.9237 32.895L32.895 28.9237L22.1175 18.135L32.895 7.34625Z",
            fill: "currentColor",
          }),
        );
      }
      function j(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M16 34V21H3V16H16V3H21V16H34V21H21V34H16Z",
            fill: "currentColor",
          }),
        );
      }
      function X(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M33 16H3V21H33V16Z",
            fill: "currentColor",
          }),
        );
      }
      function q(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M2 6.05005V30.05H34V6.05005H2ZM25 10.05C25.5933 10.05 26.1734 10.226 26.6667 10.5556C27.1601 10.8853 27.5446 11.3538 27.7716 11.902C27.9987 12.4502 28.0581 13.0534 27.9424 13.6353C27.8266 14.2173 27.5409 14.7518 27.1213 15.1714C26.7018 15.5909 26.1672 15.8766 25.5853 15.9924C25.0033 16.1082 24.4001 16.0488 23.8519 15.8217C23.3038 15.5946 22.8352 15.2101 22.5056 14.7168C22.1759 14.2234 22 13.6434 22 13.05C22 12.2544 22.3161 11.4913 22.8787 10.9287C23.4413 10.3661 24.2044 10.05 25 10.05V10.05ZM23 26.05H6L14.5 15.05L19.4 21.39L22 18.05L28.22 26.05H23Z",
            fill: "currentColor",
          }),
        );
      }
      function J(e) {
        return C.createElement(
          "svg",
          Object.assign({}, e, {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }),
          C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.0001 2C16.4019 2.02152 14.8236 2.36052 13.3555 2.99755C11.8873 3.63458 10.558 4.55714 9.44364 5.71257C8.32928 6.868 7.45165 8.2336 6.86098 9.73129C6.27031 11.229 5.97819 12.8294 6.00127 14.441C6.00127 21.316 18.0001 35 18.0001 35C18.0001 35 29.9989 21.316 29.9989 14.441C30.0426 11.187 28.8032 8.04868 26.5532 5.71579C24.3033 3.3829 21.2268 2.04636 18.0001 2ZM25.6357 15.53C25.6328 15.8694 25.4971 16.1939 25.2581 16.4329C25.019 16.6719 24.696 16.806 24.3594 16.806H20.5416V20.656C20.5416 20.9974 20.4072 21.3247 20.1678 21.5661C19.9285 21.8074 19.6039 21.943 19.2654 21.943H16.7238C16.3853 21.943 16.0607 21.8074 15.8214 21.5661C15.5821 21.3247 15.4476 20.9974 15.4476 20.656V16.806H11.6407C11.3051 16.806 10.9833 16.6716 10.746 16.4323C10.5087 16.193 10.3754 15.8684 10.3754 15.53V12.956C10.3754 12.6176 10.5087 12.293 10.746 12.0537C10.9833 11.8145 11.3051 11.68 11.6407 11.68H15.4585V7.82999C15.4585 7.48865 15.593 7.16135 15.8323 6.91999C16.0717 6.67863 16.3962 6.54301 16.7347 6.54301H19.2763C19.6148 6.54301 19.9394 6.67863 20.1787 6.91999C20.4181 7.16135 20.5525 7.48865 20.5525 7.82999V11.68H24.3703C24.7069 11.68 25.0299 11.8141 25.2689 12.0531C25.5079 12.2921 25.6437 12.6166 25.6466 12.956L25.6357 15.53Z",
            fill: "currentColor",
          }),
        );
      }
      function Q(e) {
        let { direction: t } = e,
          r =
            ((0, n._T)(e, ["direction"]),
            { transform: `scaleX( ${"right" == t ? "-1" : "1"} )` });
        return C.createElement(
          "svg",
          Object.assign(
            {
              style: r,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          C.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "2",
            width: "3",
            height: "4",
          }),
          C.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "9",
            width: "3",
            height: "4",
          }),
          C.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "16",
            width: "3",
            height: "4",
          }),
          C.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "23",
            width: "3",
            height: "4",
          }),
          C.createElement("rect", {
            fill: "currentColor",
            x: "3.82617",
            y: "30",
            width: "3",
            height: "4",
          }),
          C.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.0001 22.0989V17.8189L16.2074 15.869L16.2459 12.2486C16.2407 11.8588 16.0085 11.482 15.6333 11.3488C14.9327 11.0739 14.2894 10.6674 13.7463 10.0736C12.4484 8.65217 12.1894 6.49723 13.1336 4.75391C14.5932 1.99742 18.1636 1.18729 20.5946 2.88529C22.7995 4.4254 23.2317 7.43069 21.5622 9.61139C20.9843 10.3662 20.2727 10.8991 19.4342 11.2575C19.0506 11.4186 18.8005 11.8019 18.8058 12.1916L18.7749 15.6885L22.2544 14.6004C22.6449 14.4869 22.9514 14.1433 22.9958 13.7452C23.1147 12.6267 23.6444 11.538 24.5846 10.6499C26.1799 9.18956 28.571 8.84302 30.4666 9.82377C33.324 11.3048 33.8524 14.9779 31.6005 17.3526C30.0756 18.9478 27.5988 19.4062 25.6321 18.4616C25.0025 18.1506 24.4586 17.7277 24.0568 17.2325C23.8101 16.9314 23.3638 16.8342 22.9733 16.9477L19.373 18.0802L19.2532 29.7966C19.2494 32.0682 17.3331 33.9479 14.9505 34L15.093 20.4972L10.0001 22.0989ZM18.8394 5.17784C19.7723 5.82945 19.9292 7.09773 19.2443 7.99235C18.5379 8.91502 17.2182 9.10883 16.3136 8.47697C15.3807 7.82537 15.2238 6.55708 15.9087 5.66246C16.6151 4.73979 17.9349 4.54605 18.8394 5.17784ZM29.2418 12.4438C30.1747 13.0954 30.3316 14.3637 29.6467 15.2584C28.9403 16.181 27.6205 16.3748 26.716 15.743C25.7831 15.0914 25.6262 13.8231 26.3111 12.9285C27.0175 12.0058 28.3373 11.812 29.2418 12.4438ZM17.3194 17.5897C17.7434 17.8859 17.8326 18.5061 17.5116 18.9255C17.1691 19.3728 16.5447 19.4515 16.1207 19.1555C15.6967 18.8593 15.6074 18.2391 15.9285 17.8197C16.2496 17.4003 16.8954 17.2935 17.3194 17.5897Z",
          }),
        );
      }
      function Y(e) {
        return C.createElement(
          "svg",
          {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          C.createElement("path", {
            d: "M34 9.42197C32.4337 7.40864 29.497 6.99082 27.4217 8.47232L16.6537 16.2215L13.3254 13.8283C12.973 13.5625 12.7772 13.1065 12.8947 12.6887C13.0905 11.891 13.1296 11.0553 12.9339 10.1817C12.464 8.09242 10.6627 6.42103 8.47002 6.07916C5.02425 5.50936 2.00921 8.09249 2.00921 11.3592C2.00921 14.3222 4.47613 16.7153 7.53026 16.7153C8.58742 16.7153 9.52721 16.4494 10.3887 15.9556C10.7803 15.7277 11.2894 15.7656 11.6417 16.0315L14.8525 18.3486L11.6417 20.6657C11.2892 20.9316 10.7803 20.9697 10.3887 20.7417C9.2923 20.096 7.96112 19.83 6.55142 20.0579C4.20203 20.4757 2.36168 22.337 2.04843 24.6542C1.57862 28.1489 4.5936 31.0739 8.19599 30.694C10.6236 30.4281 12.6207 28.5668 13.0122 26.2116C13.1298 25.4519 13.0905 24.6922 12.8947 24.0084C12.7772 23.5905 12.973 23.1346 13.3254 22.8688L16.6537 20.4756L27.4217 28.2248C29.4971 29.7442 32.4337 29.3264 34 27.2751L21.5874 18.3483L34 9.42197ZM7.53026 13.6005C6.27732 13.6005 5.22 12.6128 5.22 11.3592C5.22 10.1437 6.23803 9.11802 7.53026 9.11802C8.7832 9.11802 9.84052 10.1056 9.84052 11.3592C9.84052 12.5749 8.82249 13.6005 7.53026 13.6005ZM7.53026 27.5794C6.27732 27.5794 5.22 26.5918 5.22 25.3382C5.22 24.1227 6.23803 23.0969 7.53026 23.0969C8.7832 23.0969 9.84052 24.0846 9.84052 25.3382C9.84052 26.5537 8.82249 27.5794 7.53026 27.5794ZM18.6115 19.4123C18.0242 19.4123 17.5151 18.9185 17.5151 18.3487C17.5151 17.7789 18.0242 17.285 18.6115 17.285C19.1989 17.285 19.708 17.7789 19.708 18.3487C19.7078 18.9185 19.238 19.4123 18.6115 19.4123Z",
            fill: "currentColor",
          }),
        );
      }
    },
    29480: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => l });
      var n = r(80751),
        C = r.n(n),
        i = r(47427);
      function l(e) {
        const t = i.useRef(C().CancelToken.source());
        return (
          i.useEffect(() => {
            const r = t.current;
            return () => r.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
    79842: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          GameRecordingClipContent: () => w,
          default: () => m,
          useTimelineLoaderForCommunityClip: () => p,
        });
      var n = r(85556),
        C = r(47427),
        i = r(40057),
        l = r(42718),
        o = r(79545),
        a = r(6279),
        s = r(91707),
        c = r(12015),
        u = r(86357),
        d = r(14592),
        L = r(88282),
        h = r(48081);
      function m(e) {
        const [t, r] = C.useState(!1);
        return (
          C.useEffect(() => {
            (0, s.Vj)(void 0).then(() => {
              r(!0);
            });
          }, []),
          C.createElement(
            C.Fragment,
            null,
            t && C.createElement(w, Object.assign({}, e)),
          )
        );
      }
      function w(e) {
        const { clipID: t } = e,
          r = (function (e) {
            const t = (0, i.bY)();
            return (0, l.useQuery)(["grclip", e], () =>
              (0, n.mG)(this, void 0, void 0, function* () {
                const r = o.gA.Init(a.qS);
                r.Body().set_clip_id(e);
                const n = yield a.xG.GetSingleSharedClip(t, r);
                if (1 != n.GetEResult())
                  return (
                    (0, c.F0)("GetSingleSharedClip failed"),
                    void n.DEBUG_LogToConsole()
                  );
                let C,
                  i = n.Body().toObject().clip,
                  l = [];
                if (0 == i.video_ids.length)
                  return (
                    (0, c.F0)("No video ids in clip", e),
                    void n.DEBUG_LogToConsole()
                  );
                for (let e of i.video_ids)
                  (C && C.timeline_id == e.server_timeline_id) ||
                    ((C = g(i, e)), l.push(C)),
                    C.recordings.push({
                      recording_id: e.video_manager_video_id,
                      start_offset_ms: e.start_offset_ms.toFixed(0),
                      duration_ms: e.duration_ms.toFixed(0),
                      recording_type: 4,
                      cdn_manifest_url: e.manifest_url,
                    });
                return { clip_id: i.clip_id, game_id: i.gameid, timelines: l };
              }),
            );
          })(t);
        return r.data
          ? C.createElement(f, { clip: r.data })
          : C.createElement("div", { style: { color: "white" } }, "Loading...");
      }
      function g(e, t) {
        return {
          timeline_id: t.server_timeline_id,
          game_id: e.clip_id,
          date_recorded: e.date_recorded,
          duration_ms: e.duration_ms.toFixed(0),
          recordings: [],
        };
      }
      function p(e) {
        const t = C.useMemo(() => (0, s.GL)(e), [e]),
          r = C.useCallback(
            (t) => {
              for (const r of e.timelines)
                for (const e of r.recordings)
                  if (e.recording_id == t) return e.cdn_manifest_url;
            },
            [e],
          );
        return (
          C.useEffect(() => () => t && t.release(), [t]),
          { loader: t.loader, fnGetManifest: r }
        );
      }
      function f(e) {
        const { clip: t } = e,
          { loader: r, fnGetManifest: n } = p(t);
        return C.createElement(
          C.Fragment,
          null,
          C.createElement(
            u.dF,
            { loader: r, fnGetManifest: n, mode: u.tP.CommunityClip },
            C.createElement(
              "div",
              { className: h.ClipDetails },
              C.createElement(
                "div",
                { className: h.VideoContainer },
                C.createElement(d.i, { positionAbsolute: !1, autoPlay: !0 }),
              ),
              C.createElement(L.k9, { loader: r }),
            ),
          ),
        );
      }
    },
  },
]);

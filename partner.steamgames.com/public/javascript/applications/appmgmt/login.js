/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4535],
  {
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
        ThrobberDelayAppear: "throbber_ThrobberDelayAppear_34XSs",
        Visible: "throbber_Visible_1ziaT",
      };
    },
    59650: (e, t, r) => {
      "use strict";
      r.d(t, { e1: () => s.e1, x1: () => u, BR: () => _, AM: () => f });
      var o = r(70655),
        i = r(67294),
        l = r(73935),
        n = r(53157),
        c = r(10847),
        s = r(39065),
        a = r(95598),
        b = r(64839);
      class h extends i.Component {
        constructor(e) {
          super(e), (this.state = { maximized: this.BIsMaximized() });
        }
        BIsMaximized() {
          let e =
              this.props.popup.screen.availWidth - this.props.popup.innerWidth,
            t =
              this.props.popup.screen.availHeight -
              this.props.popup.innerHeight;
          return 0 === e && 0 === t;
        }
        componentDidMount() {
          this.props.popup.addEventListener("resize", this.UpdateMaximizeState);
        }
        componentWillUnmount() {
          this.props.popup.removeEventListener(
            "resize",
            this.UpdateMaximizeState
          );
        }
        UpdateMaximizeState() {
          let e = this.BIsMaximized();
          e != this.state.maximized && this.setState({ maximized: e });
        }
        render() {
          let e = this.props.popup,
            t = "title-area-icon";
          this.state.maximized
            ? (t += " restoreButton")
            : (t += " maximizeButton");
          let r = "TitleBar title-area";
          return (
            this.props.className && (r = r + " " + this.props.className),
            i.createElement(
              "div",
              { className: r, style: this.props.style },
              i.createElement("div", { className: "title-area-highlight" }),
              i.createElement(
                "div",
                { className: "title-area-children" },
                this.props.children
              ),
              !this.props.hideActions &&
                i.createElement(
                  "div",
                  { className: "title-bar-actions" },
                  i.createElement(
                    "div",
                    {
                      className: "title-area-icon closeButton",
                      onClick: () => {
                        e && e.close();
                      },
                    },
                    i.createElement(a.pVO, null)
                  ),
                  !this.props.hideMinMax &&
                    i.createElement(
                      "div",
                      {
                        className: t,
                        onClick: () => {
                          e.SteamClient.Window.ToggleMaximize();
                        },
                      },
                      this.state.maximized && i.createElement(a.r6F, null),
                      !this.state.maximized && i.createElement(a.YqJ, null)
                    ),
                  !this.props.hideMinMax &&
                    i.createElement(
                      "div",
                      {
                        className: "title-area-icon minimizeButton",
                        onClick: () => {
                          e.SteamClient.Window.Minimize();
                        },
                      },
                      i.createElement(a.gR, null)
                    )
                )
            )
          );
        }
      }
      (0, o.gn)([b.ak], h.prototype, "UpdateMaximizeState", null);
      var d = r(77520),
        m = r(41311),
        p = r(90666);
      function u(e, t, r) {
        return (0, o.mG)(this, void 0, void 0, function* () {
          const i = !0 === (null == r ? void 0 : r.bNeverPopOut),
            n = !i && T(null, t),
            c =
              (null == r ? void 0 : r.bForcePopOut) &&
              (null == r ? void 0 : r.popupWidth) &&
              (null == r ? void 0 : r.popupHeight),
            s =
              n &&
              !c &&
              (yield (function (e, t, r) {
                return (0, o.mG)(this, void 0, void 0, function* () {
                  const o = t.document.createElement("div");
                  (o.style.position = "absolute"),
                    (o.style.visibility = "hidden"),
                    t.document.body.appendChild(o),
                    l.render(e, o),
                    yield r;
                  let i = document;
                  p.De.IN_STEAMUI && i.fonts && (yield i.fonts.ready);
                  const n = o.getBoundingClientRect(),
                    c = Math.ceil(n.height),
                    s = Math.ceil(n.width);
                  return (
                    l.unmountComponentAtNode(o),
                    t.document.body.removeChild(o),
                    { height: c, width: s }
                  );
                });
              })(e, t, null == r ? void 0 : r.promiseRenderComplete)),
            a =
              s &&
              s.height / t.innerHeight < 0.9 &&
              s.width / t.innerWidth < 0.8;
          if (i || (!(null == r ? void 0 : r.bForcePopOut) && a))
            return _(e, t);
          const b = {
              strTitle:
                (null == r ? void 0 : r.strTitle) ||
                (0, m.Xx)("#Dialog_DefaultWindowTitle"),
              fnOnClose: null == r ? void 0 : r.fnOnClose,
              popupWidth:
                (null == r ? void 0 : r.popupWidth) ||
                (null == s ? void 0 : s.width),
              popupHeight:
                (null == r ? void 0 : r.popupHeight) ||
                (null == s ? void 0 : s.height),
              bHideMainWindowForPopouts:
                null == r ? void 0 : r.bHideMainWindowForPopouts,
            },
            h = { bHideActions: null == r ? void 0 : r.bHideActionIcons };
          return _(
            e,
            t,
            b.strTitle,
            b,
            null == r ? void 0 : r.browserContext,
            h
          );
        });
      }
      function f(e, t, r) {
        return (0, o.mG)(this, void 0, void 0, function* () {
          return u(e, t, Object.assign({ bHideMainWindowForPopouts: !0 }, r));
        });
      }
      function _(e, t, r, o, l, n, c) {
        let a, b;
        const h = e.props.closeModal,
          d = () => {
            b && b.Close(),
              h && h(),
              (null == o ? void 0 : o.fnOnClose) && o.fnOnClose();
          },
          m = () => {
            a && a.Close(), d();
          },
          p = i.cloneElement(e, { closeModal: m });
        if (T((c = c || (0, s.BL)(t)), t) && o && r) {
          if (o.bHideMainWindowForPopouts) {
            const e = i.createElement(
              s.e1,
              {
                className: "Hidden",
                onEscKeypress: !p.props.bDisableBackgroundDismiss && m,
              },
              i.createElement("div", null)
            );
            b = c.ShowModal(e);
          }
          const e = Object.assign(Object.assign({}, o), { fnOnClose: d }),
            h = new k(t, r, e, p, l, n);
          h.Show(), (a = h);
        } else a = c.ShowModal(p);
        return a;
      }
      function T(e, t) {
        return (
          (e = e || (0, s.BL)(t || window)), p.De.USE_POPUPS && e.BUsePopups()
        );
      }
      class k extends n.K3 {
        constructor(e, t, r, o, i, l) {
          super(t, {
            title: r.strTitle,
            html_class: "client_chat_frame fullheight ModalDialogPopup",
            body_class: "fullheight ModalDialogBody",
            owner_window: void 0,
            replace_existing_popup: !0,
            target_browser: i,
            availscreenwidth: e.screen.availWidth,
            availscreenheight: e.screen.availHeight,
          }),
            (this.m_windowOpener = e),
            (this.m_modalProps = r),
            (this.m_modalElement = o),
            (this.m_options = l);
        }
        Update(e) {
          (0, d.X)(!1, "NYI");
        }
        UpdateParamsBeforeShow(e) {
          var t, r, o;
          let i,
            l,
            n,
            c = this.m_modalProps.popupWidth || 500,
            s = this.m_modalProps.popupHeight || 400;
          if (
            p.De.IN_CLIENT &&
            (null ===
              (o =
                null ===
                  (r =
                    null === (t = this.m_windowOpener) || void 0 === t
                      ? void 0
                      : t.SteamClient) || void 0 === r
                  ? void 0
                  : r.Window) || void 0 === o
              ? void 0
              : o.GetBrowserID)
          )
            n = this.m_windowOpener.SteamClient.Window.GetBrowserID();
          else {
            let e = this.m_windowOpener.screen;
            (i = (e.availWidth - c) / 2), (l = (e.availHeight - s) / 2);
            let t = e;
            void 0 !== t.availLeft &&
              void 0 !== t.availTop &&
              ((i += t.availLeft), (l += t.availTop));
          }
          return Object.assign(Object.assign({}, e), {
            dimensions: { width: c, height: s, left: i, top: l },
            window_opener_id: n,
          });
        }
        OnLoad() {}
        OnResize() {}
        OnClose() {
          this.m_modalProps.fnOnClose && this.m_modalProps.fnOnClose(),
            l.unmountComponentAtNode(this.m_element);
        }
        Render(e, t) {
          if (
            (t.setAttribute("class", "fullheight popup_chat_frame"),
            this.m_modalElement)
          ) {
            const r = this.m_options ? this.m_options.bHideActions : void 0,
              o =
                this.m_options &&
                "number" == typeof this.m_options.nDragAreaHeight
                  ? { height: this.m_options.nDragAreaHeight }
                  : void 0;
            l.render(
              i.createElement(
                "div",
                { className: "PopupFullWindow", onContextMenu: c.T },
                i.createElement(h, {
                  hideMinMax: !0,
                  popup: e,
                  hideActions: r,
                  style: o,
                }),
                i.createElement(s.t9, { ModalManager: (0, s.BL)(e) }),
                this.m_modalElement
              ),
              t
            );
          }
        }
      }
    },
    13596: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => c });
      var o = r(67294),
        i = r(7573),
        l = r(50732),
        n = r.n(l);
      const c = o.memo(function (e) {
        const {
          className: t,
          size: r,
          string: l,
          position: c,
          static: b,
          msDelayAppear: h,
        } = e;
        let d = [n().LoadingWrapper, "SteamLogoThrobber", s(r)];
        const [m, p] = o.useState(!h);
        return (
          (0, o.useEffect)(() => {
            if (m) return;
            const e = setTimeout(() => p(!0), h);
            return () => clearTimeout(e);
          }, [h, m]),
          void 0 === l && d.push(n().noString),
          t && d.push(t),
          b && d.push(n().Static),
          o.createElement(
            "div",
            {
              className: (0, i.Z)(
                "center" == c && n().throbber_center_wrapper,
                h && n().ThrobberDelayAppear,
                m && n().Visible
              ),
            },
            m &&
              o.createElement(
                "div",
                { className: d.join(" ") },
                o.createElement(
                  "div",
                  { className: n().Throbber },
                  o.createElement(a, { className: n().base }),
                  o.createElement(a, { className: n().blur })
                )
              ),
            Boolean(l) &&
              o.createElement("div", { className: n().ThrobberText }, l)
          )
        );
      });
      function s(e) {
        switch (e) {
          case "small":
            return n().throbber_small;
          case "medium":
            return n().throbber_medium;
          case "xlarge":
            return n().throbber_xlarge;
          case "xxlarge":
            return n().throbber_xxlarge;
          default:
            return n().throbber_large;
        }
      }
      function a(e) {
        let t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          o.createElement(
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
            o.createElement(
              "g",
              { className: n().partCircle },
              o.createElement("path", {
                className: n().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
              }),
              o.createElement("path", {
                className: n().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166",
              }),
              o.createElement("path", {
                className: n().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
              })
            ),
            o.createElement(
              "g",
              { className: n().mainOutline },
              o.createElement("path", {
                className: n().roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: n().roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              })
            ),
            o.createElement(
              "g",
              { className: n().bottomCircle },
              o.createElement("path", {
                fill: "#ffffff",
                d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
              })
            ),
            o.createElement(
              "g",
              { className: n().topCircle },
              o.createElement("circle", {
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
    49686: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => b });
      var o = r(67294),
        i = r(59650),
        l = r(39065),
        n = r(94486),
        c = (r(88514), r(65902)),
        s = r(90666),
        a = r(92742);
      function b() {
        return (
          (0, o.useEffect)(
            () => (
              (window.g_ShowLoginDialog = (e) =>
                (0, i.AM)(o.createElement(h, { redirectUrl: e }), window, {
                  popupWidth: 700,
                  popupHeight: 440,
                })),
              () => {
                delete window.g_ShowLoginDialog;
              }
            ),
            []
          ),
          null
        );
      }
      function h(e) {
        const {
            redirectUrl: t = s.De.PARTNER_BASE_URL,
            disableQR: r,
            closeModal: i,
          } = e,
          b = (0, o.useRef)(
            new c.J(s.De.WEBAPI_BASE_URL).GetServiceTransport()
          ).current,
          [h, d] = (0, o.useState)(!1);
        return o.createElement(
          l.e1,
          { onEscKeypress: i, hideTopBar: !0, bDisableBackgroundDismiss: !0 },
          h
            ? o.createElement(n.pT, null)
            : o.createElement(n.wK, {
                platform: 2,
                transport: b,
                onComplete: (e) => {
                  e == a.TG.k_PrimaryDomainFail
                    ? d(!0)
                    : window.location.assign(t);
                },
                autoFocus: !0,
                theme: "modal",
                redirectUrl: t,
                disableQR: r,
              })
        );
      }
    },
  },
]);

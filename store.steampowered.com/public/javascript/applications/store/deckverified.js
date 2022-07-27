/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1825],
  {
    59650: (e, t, i) => {
      i.d(t, { e1: () => r.e1, x1: () => v, BR: () => b, AM: () => g });
      var s = i(70655),
        o = i(67294),
        n = i(73935),
        l = i(53157),
        a = i(10847),
        r = i(84351),
        p = i(95598),
        d = i(30156);
      class h extends o.Component {
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
          let i = "TitleBar title-area";
          return (
            this.props.className && (i = i + " " + this.props.className),
            o.createElement(
              "div",
              { className: i, style: this.props.style },
              o.createElement("div", { className: "title-area-highlight" }),
              o.createElement(
                "div",
                { className: "title-area-children" },
                this.props.children
              ),
              !this.props.hideActions &&
                o.createElement(
                  "div",
                  { className: "title-bar-actions" },
                  o.createElement(
                    "div",
                    {
                      className: "title-area-icon closeButton",
                      onClick: () => {
                        e && e.close();
                      },
                    },
                    o.createElement(p.pVO, null)
                  ),
                  !this.props.hideMinMax &&
                    o.createElement(
                      "div",
                      {
                        className: t,
                        onClick: () => {
                          e.SteamClient.Window.ToggleMaximize();
                        },
                      },
                      this.state.maximized && o.createElement(p.r6F, null),
                      !this.state.maximized && o.createElement(p.YqJ, null)
                    ),
                  !this.props.hideMinMax &&
                    o.createElement(
                      "div",
                      {
                        className: "title-area-icon minimizeButton",
                        onClick: () => {
                          e.SteamClient.Window.Minimize();
                        },
                      },
                      o.createElement(p.gR, null)
                    )
                )
            )
          );
        }
      }
      (0, s.gn)([d.ak], h.prototype, "UpdateMaximizeState", null);
      var m = i(77520),
        c = i(41311),
        u = i(90666);
      function v(e, t, i) {
        return (0, s.mG)(this, void 0, void 0, function* () {
          const o = !0 === (null == i ? void 0 : i.bNeverPopOut),
            l = !o && w(null, t),
            a =
              (null == i ? void 0 : i.bForcePopOut) &&
              (null == i ? void 0 : i.popupWidth) &&
              (null == i ? void 0 : i.popupHeight),
            r =
              l &&
              !a &&
              (yield (function (e, t, i) {
                return (0, s.mG)(this, void 0, void 0, function* () {
                  const s = t.document.createElement("div");
                  (s.style.position = "absolute"),
                    (s.style.visibility = "hidden"),
                    t.document.body.appendChild(s),
                    n.render(e, s),
                    yield i;
                  let o = document;
                  u.De.IN_LIBRARY && o.fonts && (yield o.fonts.ready);
                  const l = s.getBoundingClientRect(),
                    a = Math.ceil(l.height),
                    r = Math.ceil(l.width);
                  return (
                    n.unmountComponentAtNode(s),
                    t.document.body.removeChild(s),
                    { height: a, width: r }
                  );
                });
              })(e, t, null == i ? void 0 : i.promiseRenderComplete)),
            p =
              r &&
              r.height / t.innerHeight < 0.9 &&
              r.width / t.innerWidth < 0.8;
          if (o || (!(null == i ? void 0 : i.bForcePopOut) && p))
            return b(e, t);
          const d = {
              strTitle:
                (null == i ? void 0 : i.strTitle) ||
                (0, c.Xx)("#Dialog_DefaultWindowTitle"),
              fnOnClose: null == i ? void 0 : i.fnOnClose,
              popupWidth:
                (null == i ? void 0 : i.popupWidth) ||
                (null == r ? void 0 : r.width),
              popupHeight:
                (null == i ? void 0 : i.popupHeight) ||
                (null == r ? void 0 : r.height),
              bHideMainWindowForPopouts:
                null == i ? void 0 : i.bHideMainWindowForPopouts,
            },
            h = { bHideActions: null == i ? void 0 : i.bHideActionIcons };
          return b(
            e,
            t,
            d.strTitle,
            d,
            null == i ? void 0 : i.browserContext,
            h
          );
        });
      }
      function g(e, t, i) {
        return (0, s.mG)(this, void 0, void 0, function* () {
          return v(e, t, Object.assign({ bHideMainWindowForPopouts: !0 }, i));
        });
      }
      function b(e, t, i, s, n, l, a) {
        let p, d;
        const h = e.props.closeModal,
          m = () => {
            d && d.Close(),
              h && h(),
              (null == s ? void 0 : s.fnOnClose) && s.fnOnClose();
          },
          c = () => {
            p && p.Close(), m();
          },
          v = o.cloneElement(e, { closeModal: c });
        if (
          (u.De.IN_GAMEPADUI && (t = window.parent),
          w((a = a || (0, r.BL)(t)), t) && s && i)
        ) {
          if (s.bHideMainWindowForPopouts) {
            const e = o.createElement(
              r.e1,
              {
                className: "Hidden",
                onEscKeypress: !v.props.bDisableBackgroundDismiss && c,
              },
              o.createElement("div", null)
            );
            d = a.ShowModal(e);
          }
          const e = Object.assign(Object.assign({}, s), { fnOnClose: m }),
            h = new _(t, i, e, v, n, l);
          h.Show(), (p = h);
        } else p = a.ShowModal(v);
        return p;
      }
      function w(e, t) {
        return (
          (e = e || (0, r.BL)(t || window)), u.De.USE_POPUPS && e.BUsePopups()
        );
      }
      class _ extends l.K3 {
        constructor(e, t, i, s, o, n) {
          super(t, {
            title: i.strTitle,
            html_class: "client_chat_frame fullheight ModalDialogPopup",
            body_class: "fullheight ModalDialogBody",
            owner_window: void 0,
            replace_existing_popup: !0,
            target_browser: o,
            availscreenwidth: e.screen.availWidth,
            availscreenheight: e.screen.availHeight,
          }),
            (this.m_windowOpener = e),
            (this.m_modalProps = i),
            (this.m_modalElement = s),
            (this.m_options = n);
        }
        Update(e) {
          (0, m.X)(!1, "NYI");
        }
        UpdateParamsBeforeShow(e) {
          var t, i, s;
          let o,
            n,
            l,
            a = this.m_modalProps.popupWidth || 500,
            r = this.m_modalProps.popupHeight || 400;
          if (
            u.De.IN_CLIENT &&
            (null ===
              (s =
                null ===
                  (i =
                    null === (t = this.m_windowOpener) || void 0 === t
                      ? void 0
                      : t.SteamClient) || void 0 === i
                  ? void 0
                  : i.Window) || void 0 === s
              ? void 0
              : s.GetBrowserID)
          )
            l = this.m_windowOpener.SteamClient.Window.GetBrowserID();
          else {
            let e = this.m_windowOpener.screen;
            (o = (e.availWidth - a) / 2), (n = (e.availHeight - r) / 2);
            let t = e;
            void 0 !== t.availLeft &&
              void 0 !== t.availTop &&
              ((o += t.availLeft), (n += t.availTop));
          }
          return Object.assign(Object.assign({}, e), {
            dimensions: { width: a, height: r, left: o, top: n },
            window_opener_id: l,
          });
        }
        OnLoad() {}
        OnResize() {}
        OnClose() {
          this.m_modalProps.fnOnClose && this.m_modalProps.fnOnClose();
        }
        Render(e, t) {
          if (
            (t.setAttribute("class", "fullheight popup_chat_frame"),
            this.m_modalElement)
          ) {
            const i = this.m_options ? this.m_options.bHideActions : void 0,
              s =
                this.m_options &&
                "number" == typeof this.m_options.nDragAreaHeight
                  ? { height: this.m_options.nDragAreaHeight }
                  : void 0;
            n.render(
              o.createElement(
                "div",
                { className: "PopupFullWindow", onContextMenu: a.T },
                o.createElement(h, {
                  hideMinMax: !0,
                  popup: e,
                  hideActions: i,
                  style: s,
                }),
                o.createElement(r.t9, { ModalManager: (0, r.BL)(e) }),
                this.m_modalElement
              ),
              t
            );
          }
        }
      }
    },
    13596: (e, t, i) => {
      i.d(t, { V: () => a });
      var s = i(67294),
        o = i(95598),
        n = i(50732),
        l = i.n(n);
      class a extends s.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(l().throbber_small)
            : "medium" == this.props.size
            ? e.push(l().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(l().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(l().throbber_xxlarge)
            : e.push(l().throbber_large);
        }
        render() {
          let e = [l().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(l().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(l().Static);
          let t = s.createElement(
            "div",
            { className: e.join(" ") },
            s.createElement(
              "div",
              { className: l().Throbber },
              s.createElement(o.wUs, { className: l().base }),
              s.createElement(o.wUs, { className: l().blur })
            )
          );
          return s.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? l().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              s.createElement(
                "div",
                { className: l().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    66668: (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      const s = i(97024).$g;
    },
  },
]);

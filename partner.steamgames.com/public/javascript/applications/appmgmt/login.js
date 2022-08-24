/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4535],
  {
    79742: (e, t) => {
      t.JQ = function (e) {
        for (
          var t, o = e.length, n = o % 3, s = [], r = 16383, l = 0, a = o - n;
          l < a;
          l += r
        )
          s.push(p(e, l, l + r > a ? a : l + r));
        1 === n
          ? ((t = e[o - 1]), s.push(i[t >> 2] + i[(t << 4) & 63] + "=="))
          : 2 === n &&
            ((t = (e[o - 2] << 8) + e[o - 1]),
            s.push(i[t >> 10] + i[(t >> 4) & 63] + i[(t << 2) & 63] + "="));
        return s.join("");
      };
      for (
        var i = [],
          o = [],
          n = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          s =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          r = 0,
          l = s.length;
        r < l;
        ++r
      )
        (i[r] = s[r]), (o[s.charCodeAt(r)] = r);
      function a(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var i = e.indexOf("=");
        return -1 === i && (i = t), [i, i === t ? 0 : 4 - (i % 4)];
      }
      function p(e, t, o) {
        for (var n, s, r = [], l = t; l < o; l += 3)
          (n =
            ((e[l] << 16) & 16711680) +
            ((e[l + 1] << 8) & 65280) +
            (255 & e[l + 2])),
            r.push(
              i[((s = n) >> 18) & 63] +
                i[(s >> 12) & 63] +
                i[(s >> 6) & 63] +
                i[63 & s]
            );
        return r.join("");
      }
      (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
    },
    59650: (e, t, i) => {
      i.d(t, { e1: () => a.e1, x1: () => v, BR: () => w, AM: () => g });
      var o = i(70655),
        n = i(67294),
        s = i(73935),
        r = i(53157),
        l = i(10847),
        a = i(27100),
        p = i(95598),
        d = i(22975);
      class h extends n.Component {
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
            n.createElement(
              "div",
              { className: i, style: this.props.style },
              n.createElement("div", { className: "title-area-highlight" }),
              n.createElement(
                "div",
                { className: "title-area-children" },
                this.props.children
              ),
              !this.props.hideActions &&
                n.createElement(
                  "div",
                  { className: "title-bar-actions" },
                  n.createElement(
                    "div",
                    {
                      className: "title-area-icon closeButton",
                      onClick: () => {
                        e && e.close();
                      },
                    },
                    n.createElement(p.pVO, null)
                  ),
                  !this.props.hideMinMax &&
                    n.createElement(
                      "div",
                      {
                        className: t,
                        onClick: () => {
                          e.SteamClient.Window.ToggleMaximize();
                        },
                      },
                      this.state.maximized && n.createElement(p.r6F, null),
                      !this.state.maximized && n.createElement(p.YqJ, null)
                    ),
                  !this.props.hideMinMax &&
                    n.createElement(
                      "div",
                      {
                        className: "title-area-icon minimizeButton",
                        onClick: () => {
                          e.SteamClient.Window.Minimize();
                        },
                      },
                      n.createElement(p.gR, null)
                    )
                )
            )
          );
        }
      }
      (0, o.gn)([d.ak], h.prototype, "UpdateMaximizeState", null);
      var m = i(77520),
        c = i(41311),
        u = i(90666);
      function v(e, t, i) {
        return (0, o.mG)(this, void 0, void 0, function* () {
          const n = !0 === (null == i ? void 0 : i.bNeverPopOut),
            r = !n && b(null, t),
            l =
              (null == i ? void 0 : i.bForcePopOut) &&
              (null == i ? void 0 : i.popupWidth) &&
              (null == i ? void 0 : i.popupHeight),
            a =
              r &&
              !l &&
              (yield (function (e, t, i) {
                return (0, o.mG)(this, void 0, void 0, function* () {
                  const o = t.document.createElement("div");
                  (o.style.position = "absolute"),
                    (o.style.visibility = "hidden"),
                    t.document.body.appendChild(o),
                    s.render(e, o),
                    yield i;
                  let n = document;
                  u.De.IN_LIBRARY && n.fonts && (yield n.fonts.ready);
                  const r = o.getBoundingClientRect(),
                    l = Math.ceil(r.height),
                    a = Math.ceil(r.width);
                  return (
                    s.unmountComponentAtNode(o),
                    t.document.body.removeChild(o),
                    { height: l, width: a }
                  );
                });
              })(e, t, null == i ? void 0 : i.promiseRenderComplete)),
            p =
              a &&
              a.height / t.innerHeight < 0.9 &&
              a.width / t.innerWidth < 0.8;
          if (n || (!(null == i ? void 0 : i.bForcePopOut) && p))
            return w(e, t);
          const d = {
              strTitle:
                (null == i ? void 0 : i.strTitle) ||
                (0, c.Xx)("#Dialog_DefaultWindowTitle"),
              fnOnClose: null == i ? void 0 : i.fnOnClose,
              popupWidth:
                (null == i ? void 0 : i.popupWidth) ||
                (null == a ? void 0 : a.width),
              popupHeight:
                (null == i ? void 0 : i.popupHeight) ||
                (null == a ? void 0 : a.height),
              bHideMainWindowForPopouts:
                null == i ? void 0 : i.bHideMainWindowForPopouts,
            },
            h = { bHideActions: null == i ? void 0 : i.bHideActionIcons };
          return w(
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
        return (0, o.mG)(this, void 0, void 0, function* () {
          return v(e, t, Object.assign({ bHideMainWindowForPopouts: !0 }, i));
        });
      }
      function w(e, t, i, o, s, r, l) {
        let p, d;
        const h = e.props.closeModal,
          m = () => {
            d && d.Close(),
              h && h(),
              (null == o ? void 0 : o.fnOnClose) && o.fnOnClose();
          },
          c = () => {
            p && p.Close(), m();
          },
          v = n.cloneElement(e, { closeModal: c });
        if (
          (u.De.IN_GAMEPADUI && (t = window.parent),
          b((l = l || (0, a.BL)(t)), t) && o && i)
        ) {
          if (o.bHideMainWindowForPopouts) {
            const e = n.createElement(
              a.e1,
              {
                className: "Hidden",
                onEscKeypress: !v.props.bDisableBackgroundDismiss && c,
              },
              n.createElement("div", null)
            );
            d = l.ShowModal(e);
          }
          const e = Object.assign(Object.assign({}, o), { fnOnClose: m }),
            h = new f(t, i, e, v, s, r);
          h.Show(), (p = h);
        } else p = l.ShowModal(v);
        return p;
      }
      function b(e, t) {
        return (
          (e = e || (0, a.BL)(t || window)), u.De.USE_POPUPS && e.BUsePopups()
        );
      }
      class f extends r.K3 {
        constructor(e, t, i, o, n, s) {
          super(t, {
            title: i.strTitle,
            html_class: "client_chat_frame fullheight ModalDialogPopup",
            body_class: "fullheight ModalDialogBody",
            owner_window: void 0,
            replace_existing_popup: !0,
            target_browser: n,
            availscreenwidth: e.screen.availWidth,
            availscreenheight: e.screen.availHeight,
          }),
            (this.m_windowOpener = e),
            (this.m_modalProps = i),
            (this.m_modalElement = o),
            (this.m_options = s);
        }
        Update(e) {
          (0, m.X)(!1, "NYI");
        }
        UpdateParamsBeforeShow(e) {
          var t, i, o;
          let n,
            s,
            r,
            l = this.m_modalProps.popupWidth || 500,
            a = this.m_modalProps.popupHeight || 400;
          if (
            u.De.IN_CLIENT &&
            (null ===
              (o =
                null ===
                  (i =
                    null === (t = this.m_windowOpener) || void 0 === t
                      ? void 0
                      : t.SteamClient) || void 0 === i
                  ? void 0
                  : i.Window) || void 0 === o
              ? void 0
              : o.GetBrowserID)
          )
            r = this.m_windowOpener.SteamClient.Window.GetBrowserID();
          else {
            let e = this.m_windowOpener.screen;
            (n = (e.availWidth - l) / 2), (s = (e.availHeight - a) / 2);
            let t = e;
            void 0 !== t.availLeft &&
              void 0 !== t.availTop &&
              ((n += t.availLeft), (s += t.availTop));
          }
          return Object.assign(Object.assign({}, e), {
            dimensions: { width: l, height: a, left: n, top: s },
            window_opener_id: r,
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
              o =
                this.m_options &&
                "number" == typeof this.m_options.nDragAreaHeight
                  ? { height: this.m_options.nDragAreaHeight }
                  : void 0;
            s.render(
              n.createElement(
                "div",
                { className: "PopupFullWindow", onContextMenu: l.T },
                n.createElement(h, {
                  hideMinMax: !0,
                  popup: e,
                  hideActions: i,
                  style: o,
                }),
                n.createElement(a.t9, { ModalManager: (0, a.BL)(e) }),
                this.m_modalElement
              ),
              t
            );
          }
        }
      }
    },
    13596: (e, t, i) => {
      i.d(t, { V: () => l });
      var o = i(67294),
        n = i(95598),
        s = i(50732),
        r = i.n(s);
      class l extends o.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(r().throbber_small)
            : "medium" == this.props.size
            ? e.push(r().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(r().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(r().throbber_xxlarge)
            : e.push(r().throbber_large);
        }
        render() {
          let e = [r().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(r().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(r().Static);
          let t = o.createElement(
            "div",
            { className: e.join(" ") },
            o.createElement(
              "div",
              { className: r().Throbber },
              o.createElement(n.wUs, { className: r().base }),
              o.createElement(n.wUs, { className: r().blur })
            )
          );
          return o.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? r().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              o.createElement(
                "div",
                { className: r().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    49686: (e, t, i) => {
      i.r(t), i.d(t, { default: () => d });
      var o = i(67294),
        n = i(59650),
        s = i(27100),
        r = i(28274),
        l = (i(88514), i(65902)),
        a = i(90666),
        p = i(92742);
      function d() {
        return (
          (0, o.useEffect)(
            () => (
              (window.g_ShowLoginDialog = (e) =>
                (0, n.AM)(o.createElement(h, { redirectUrl: e }), window, {
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
            redirectUrl: t = a.De.PARTNER_BASE_URL,
            disableQR: i,
            closeModal: n,
          } = e,
          d = (0, o.useRef)(
            new l.J(a.De.WEBAPI_BASE_URL).GetServiceTransport()
          ).current,
          [h, m] = (0, o.useState)(!1);
        return o.createElement(
          s.e1,
          { onEscKeypress: n, hideTopBar: !0, bDisableBackgroundDismiss: !0 },
          h
            ? o.createElement(r.pT, null)
            : o.createElement(r.wK, {
                platform: 2,
                transport: d,
                onComplete: (e) => {
                  e == p.TG.k_PrimaryDomainFail
                    ? m(!0)
                    : window.location.assign(t);
                },
                autoFocus: !0,
                theme: "modal",
                redirectUrl: t,
                disableQR: i,
              })
        );
      }
    },
  },
]);

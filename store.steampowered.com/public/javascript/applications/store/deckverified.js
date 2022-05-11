/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    TFpc: function (e, t, i) {
      "use strict";
      i.r(t);
      var o = i("IYm0");
      t.default = o.a;
    },
    jIgc: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return r.i;
      }),
        i.d(t, "b", function () {
          return v;
        }),
        i.d(t, "d", function () {
          return b;
        }),
        i.d(t, "c", function () {
          return g;
        });
      var o = i("mrSG"),
        s = i("q1tI"),
        n = i("i8i4"),
        a = i("kDGI"),
        l = i("SS8s"),
        r = i("thkD"),
        p = i("e356"),
        d = i("hCpY");
      class c extends s.Component {
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
            s.createElement(
              "div",
              { className: i, style: this.props.style },
              s.createElement("div", { className: "title-area-highlight" }),
              s.createElement(
                "div",
                { className: "title-area-children" },
                this.props.children
              ),
              !this.props.hideActions &&
                s.createElement(
                  "div",
                  { className: "title-bar-actions" },
                  s.createElement(
                    "div",
                    {
                      className: "title-area-icon closeButton",
                      onClick: () => {
                        e && e.close();
                      },
                    },
                    s.createElement(p.Eb, null)
                  ),
                  !this.props.hideMinMax &&
                    s.createElement(
                      "div",
                      {
                        className: t,
                        onClick: () => {
                          e.SteamClient.Window.ToggleMaximize();
                        },
                      },
                      this.state.maximized && s.createElement(p.bb, null),
                      !this.state.maximized && s.createElement(p.Q, null)
                    ),
                  !this.props.hideMinMax &&
                    s.createElement(
                      "div",
                      {
                        className: "title-area-icon minimizeButton",
                        onClick: () => {
                          e.SteamClient.Window.Minimize();
                        },
                      },
                      s.createElement(p.T, null)
                    )
                )
            )
          );
        }
      }
      Object(o.b)([d.b], c.prototype, "UpdateMaximizeState", null);
      var h = i("f5iL"),
        u = i("GXif"),
        m = i("/Q1a");
      function v(e, t, i) {
        return Object(o.a)(this, void 0, void 0, function* () {
          const s = !0 === (null == i ? void 0 : i.bNeverPopOut),
            a = !s && w(null, t),
            l =
              (null == i ? void 0 : i.bForcePopOut) &&
              (null == i ? void 0 : i.popupWidth) &&
              (null == i ? void 0 : i.popupHeight),
            r =
              a &&
              !l &&
              (yield (function (e, t, i) {
                return Object(o.a)(this, void 0, void 0, function* () {
                  const o = t.document.createElement("div");
                  (o.style.position = "absolute"),
                    (o.style.visibility = "hidden"),
                    t.document.body.appendChild(o),
                    n.render(e, o),
                    yield i;
                  let s = document;
                  m.d.IN_LIBRARY && s.fonts && (yield s.fonts.ready);
                  const a = o.getBoundingClientRect(),
                    l = Math.ceil(a.height),
                    r = Math.ceil(a.width);
                  return (
                    n.unmountComponentAtNode(o),
                    t.document.body.removeChild(o),
                    { height: l, width: r }
                  );
                });
              })(e, t, null == i ? void 0 : i.promiseRenderComplete)),
            p =
              r &&
              r.height / t.innerHeight < 0.9 &&
              r.width / t.innerWidth < 0.8;
          if (s || (!(null == i ? void 0 : i.bForcePopOut) && p))
            return g(e, t);
          const d = {
              strTitle:
                (null == i ? void 0 : i.strTitle) ||
                Object(u.f)("#Dialog_DefaultWindowTitle"),
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
            c = { bHideActions: null == i ? void 0 : i.bHideActionIcons };
          return g(
            e,
            t,
            d.strTitle,
            d,
            null == i ? void 0 : i.browserContext,
            c
          );
        });
      }
      function b(e, t, i) {
        return Object(o.a)(this, void 0, void 0, function* () {
          return v(
            e,
            t,
            Object.assign(Object.assign({}, i), {
              bHideMainWindowForPopouts: !0,
            })
          );
        });
      }
      function g(e, t, i, o, n, a, l) {
        let p, d;
        const c = e.props.closeModal,
          h = () => {
            d && d.Close(),
              c && c(),
              (null == o ? void 0 : o.fnOnClose) && o.fnOnClose();
          },
          u = () => {
            p && p.Close(), h();
          },
          m = s.cloneElement(e, { closeModal: u });
        if (w((l = l || Object(r.h)(t)), t) && o && i) {
          if (o.bHideMainWindowForPopouts) {
            const e = s.createElement(
              r.i,
              {
                className: "Hidden",
                onEscKeypress: !m.props.bDisableBackgroundDismiss && u,
              },
              s.createElement("div", null)
            );
            d = l.ShowModal(e);
          }
          const e = Object.assign(Object.assign({}, o), { fnOnClose: h }),
            c = new f(t, i, e, m, n, a);
          c.Show(), (p = c);
        } else p = l.ShowModal(m);
        return p;
      }
      function w(e, t) {
        return (
          (e = e || Object(r.h)(t || window)), m.d.USE_POPUPS && e.BUsePopups()
        );
      }
      class f extends a.a {
        constructor(e, t, i, o, s, n) {
          super(t, {
            title: i.strTitle,
            html_class: "client_chat_frame fullheight ModalDialogPopup",
            body_class: "fullheight ModalDialogBody",
            owner_window: void 0,
            replace_existing_popup: !0,
            target_browser: s,
            availscreenwidth: e.screen.availWidth,
            availscreenheight: e.screen.availHeight,
          }),
            (this.m_windowOpener = e),
            (this.m_modalProps = i),
            (this.m_modalElement = o),
            (this.m_options = n);
        }
        Update(e) {
          Object(h.a)(!1, "NYI");
        }
        UpdateParamsBeforeShow(e) {
          var t, i, o;
          let s,
            n,
            a,
            l = this.m_modalProps.popupWidth || 500,
            r = this.m_modalProps.popupHeight || 400;
          if (
            m.d.IN_CLIENT &&
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
            a = this.m_windowOpener.SteamClient.Window.GetBrowserID();
          else {
            let e = this.m_windowOpener.screen;
            (s = (e.availWidth - l) / 2), (n = (e.availHeight - r) / 2);
            let t = e;
            void 0 !== t.availLeft &&
              void 0 !== t.availTop &&
              ((s += t.availLeft), (n += t.availTop));
          }
          return Object.assign(Object.assign({}, e), {
            dimensions: { width: l, height: r, left: s, top: n },
            window_opener_id: a,
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
            n.render(
              s.createElement(
                "div",
                { className: "PopupFullWindow", onContextMenu: l.h },
                s.createElement(c, {
                  hideMinMax: !0,
                  popup: e,
                  hideActions: i,
                  style: o,
                }),
                s.createElement(r.c, { ModalManager: Object(r.h)(e) }),
                this.m_modalElement
              ),
              t
            );
          }
        }
      }
    },
    kWcV: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return r;
      });
      var o = i("q1tI"),
        s = i.n(o),
        n = i("e356"),
        a = i("8aua"),
        l = i.n(a);
      class r extends s.a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(l.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(l.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(l.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(l.a.throbber_xxlarge)
            : e.push(l.a.throbber_large);
        }
        render() {
          let e = [l.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(l.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(l.a.Static);
          let t = s.a.createElement(
            "div",
            { className: e.join(" ") },
            s.a.createElement(
              "div",
              { className: l.a.Throbber },
              s.a.createElement(n.qb, { className: l.a.base }),
              s.a.createElement(n.qb, { className: l.a.blur })
            )
          );
          return s.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? l.a.throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              s.a.createElement(
                "div",
                { className: l.a.ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
  },
]);

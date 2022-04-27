/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    "0OaU": function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return l;
      });
      var r = i("q1tI"),
        s = i.n(r),
        o = i("6Y59"),
        n = i("2i24"),
        a = i.n(n);
      class l extends s.a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(a.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(a.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(a.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(a.a.throbber_xxlarge)
            : e.push(a.a.throbber_large);
        }
        render() {
          let e = [a.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(a.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(a.a.Static);
          let t = s.a.createElement(
            "div",
            { className: e.join(" ") },
            s.a.createElement(
              "div",
              { className: a.a.Throbber },
              s.a.createElement(o.qb, { className: a.a.base }),
              s.a.createElement(o.qb, { className: a.a.blur })
            )
          );
          return s.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? a.a.throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              s.a.createElement(
                "div",
                { className: a.a.ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    AiWL: function (e, t, i) {
      "use strict";
      i("mgoM");
    },
    OS6B: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return n;
      });
      i("mgoM");
      var r = i("vDqi"),
        s = i.n(r),
        o = i("bxBv");
      function n(e) {
        if (s.a.isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof o.b)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    TFpc: function (e, t, i) {
      "use strict";
      i.r(t);
      var r = i("HKTa");
      t.default = r.a;
    },
    bS9Q: function (e, t, i) {
      "use strict";
      function r(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function s(e) {
        if (!e) return "";
        if (DOMParser) {
          return new DOMParser().parseFromString(e, "text/html").documentElement
            .textContent;
        }
        return e;
      }
      function o(e, t = "") {
        return e.replace(/\bhttps?:\/\/\S+/gi, t);
      }
      function n(e, t, i = !0) {
        let r = e.trim();
        if (((r = r.replace(i ? /\s+/g : /[ \t]+/g, " ")), r.length > t)) {
          r = r.substring(0, t);
          let e = r.replace(/^(.*([.!?])) .*$/, "$1"),
            s = e.length;
          (s < 0.6 * t || s == t) && (e = r.replace(/ [^ ]*$/, "...")),
            (r = i ? e.replace(/(\r\n|\n|\r)/gm, "") : e);
        }
        return r;
      }
      function a(e) {
        let t,
          i,
          r = 0;
        if (0 === e.length) return r;
        for (t = 0; t < e.length; t++)
          (i = e.charCodeAt(t)), (r = (r << 5) - r + i), (r |= 0);
        return r;
      }
      function l(e) {
        return e.length <= 1
          ? e.toUpperCase()
          : e.charAt(0).toUpperCase() + e.slice(1);
      }
      i.d(t, "f", function () {
        return r;
      }),
        i.d(t, "b", function () {
          return s;
        }),
        i.d(t, "c", function () {
          return o;
        }),
        i.d(t, "d", function () {
          return n;
        }),
        i.d(t, "a", function () {
          return a;
        }),
        i.d(t, "e", function () {
          return l;
        });
    },
    ka0M: function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return l.i;
      }),
        i.d(t, "b", function () {
          return g;
        }),
        i.d(t, "d", function () {
          return f;
        }),
        i.d(t, "c", function () {
          return v;
        });
      var r = i("mrSG"),
        s = i("q1tI"),
        o = i("i8i4"),
        n = i("JMS6"),
        a = i("y+6m"),
        l = i("Jqb/"),
        d = i("6Y59"),
        p = i("opsS");
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
                    s.createElement(d.Eb, null)
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
                      this.state.maximized && s.createElement(d.bb, null),
                      !this.state.maximized && s.createElement(d.Q, null)
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
                      s.createElement(d.T, null)
                    )
                )
            )
          );
        }
      }
      Object(r.b)([p.b], c.prototype, "UpdateMaximizeState", null);
      var u = i("r64O"),
        h = i("TLQK"),
        m = i("lkRc");
      function g(e, t, i) {
        return Object(r.a)(this, void 0, void 0, function* () {
          const s = !0 === (null == i ? void 0 : i.bNeverPopOut),
            n = !s && b(null, t),
            a =
              (null == i ? void 0 : i.bForcePopOut) &&
              (null == i ? void 0 : i.popupWidth) &&
              (null == i ? void 0 : i.popupHeight),
            l =
              n &&
              !a &&
              (yield (function (e, t, i) {
                return Object(r.a)(this, void 0, void 0, function* () {
                  const r = t.document.createElement("div");
                  (r.style.position = "absolute"),
                    (r.style.visibility = "hidden"),
                    t.document.body.appendChild(r),
                    o.render(e, r),
                    yield i;
                  let s = document;
                  m.d.IN_LIBRARY && s.fonts && (yield s.fonts.ready);
                  const n = r.getBoundingClientRect(),
                    a = Math.ceil(n.height),
                    l = Math.ceil(n.width);
                  return (
                    o.unmountComponentAtNode(r),
                    t.document.body.removeChild(r),
                    { height: a, width: l }
                  );
                });
              })(e, t, null == i ? void 0 : i.promiseRenderComplete)),
            d =
              l &&
              l.height / t.innerHeight < 0.9 &&
              l.width / t.innerWidth < 0.8;
          if (s || (!(null == i ? void 0 : i.bForcePopOut) && d))
            return v(e, t);
          const p = {
              strTitle:
                (null == i ? void 0 : i.strTitle) ||
                Object(h.f)("#Dialog_DefaultWindowTitle"),
              fnOnClose: null == i ? void 0 : i.fnOnClose,
              popupWidth:
                (null == i ? void 0 : i.popupWidth) ||
                (null == l ? void 0 : l.width),
              popupHeight:
                (null == i ? void 0 : i.popupHeight) ||
                (null == l ? void 0 : l.height),
              bHideMainWindowForPopouts:
                null == i ? void 0 : i.bHideMainWindowForPopouts,
            },
            c = { bHideActions: null == i ? void 0 : i.bHideActionIcons };
          return v(
            e,
            t,
            p.strTitle,
            p,
            null == i ? void 0 : i.browserContext,
            c
          );
        });
      }
      function f(e, t, i) {
        return Object(r.a)(this, void 0, void 0, function* () {
          return g(
            e,
            t,
            Object.assign(Object.assign({}, i), {
              bHideMainWindowForPopouts: !0,
            })
          );
        });
      }
      function v(e, t, i, r, o, n, a) {
        let d, p;
        const c = e.props.closeModal,
          u = () => {
            p && p.Close(),
              c && c(),
              (null == r ? void 0 : r.fnOnClose) && r.fnOnClose();
          },
          h = () => {
            d && d.Close(), u();
          },
          m = s.cloneElement(e, { closeModal: h });
        if (b((a = a || Object(l.h)(t)), t) && r && i) {
          if (r.bHideMainWindowForPopouts) {
            const e = s.createElement(
              l.i,
              {
                className: "Hidden",
                onEscKeypress: !m.props.bDisableBackgroundDismiss && h,
              },
              s.createElement("div", null)
            );
            p = a.ShowModal(e);
          }
          const e = Object.assign(Object.assign({}, r), { fnOnClose: u }),
            c = new E(t, i, e, m, o, n);
          c.Show(), (d = c);
        } else d = a.ShowModal(m);
        return d;
      }
      function b(e, t) {
        return (
          (e = e || Object(l.h)(t || window)), m.d.USE_POPUPS && e.BUsePopups()
        );
      }
      class E extends n.a {
        constructor(e, t, i, r, s, o) {
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
            (this.m_modalElement = r),
            (this.m_options = o);
        }
        Update(e) {
          Object(u.a)(!1, "NYI");
        }
        UpdateParamsBeforeShow(e) {
          var t, i, r;
          let s,
            o,
            n,
            a = this.m_modalProps.popupWidth || 500,
            l = this.m_modalProps.popupHeight || 400;
          if (
            m.d.IN_CLIENT &&
            (null ===
              (r =
                null ===
                  (i =
                    null === (t = this.m_windowOpener) || void 0 === t
                      ? void 0
                      : t.SteamClient) || void 0 === i
                  ? void 0
                  : i.Window) || void 0 === r
              ? void 0
              : r.GetBrowserID)
          )
            n = this.m_windowOpener.SteamClient.Window.GetBrowserID();
          else {
            let e = this.m_windowOpener.screen;
            (s = (e.availWidth - a) / 2), (o = (e.availHeight - l) / 2);
            let t = e;
            void 0 !== t.availLeft &&
              void 0 !== t.availTop &&
              ((s += t.availLeft), (o += t.availTop));
          }
          return Object.assign(Object.assign({}, e), {
            dimensions: { width: a, height: l, left: s, top: o },
            window_opener_id: n,
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
              r =
                this.m_options &&
                "number" == typeof this.m_options.nDragAreaHeight
                  ? { height: this.m_options.nDragAreaHeight }
                  : void 0;
            o.render(
              s.createElement(
                "div",
                { className: "PopupFullWindow", onContextMenu: a.h },
                s.createElement(c, {
                  hideMinMax: !0,
                  popup: e,
                  hideActions: i,
                  style: r,
                }),
                s.createElement(l.c, { ModalManager: Object(l.h)(e) }),
                this.m_modalElement
              ),
              t
            );
          }
        }
      }
    },
  },
]);

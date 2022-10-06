/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1825],
  {
    5194: (e, t, i) => {
      i.d(t, { AY: () => l, KQ: () => o, _v: () => a, q8: () => d });
      var r = i(33019),
        s = i(40110);
      const n = r.Message;
      class a extends n {
        constructor(e = null) {
          super(),
            a.prototype.sale_filter || s.aR(a.M()),
            n.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  sale_filter: { n: 1, c: o },
                  content_hub_filter: { n: 2, c: l },
                  store_filters: { n: 3, c: m, r: !0, q: !0 },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = s.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new a();
          return a.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.sale_tagid || s.aR(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  sale_tagid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new o();
          return o.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_SalePageFilter";
        }
      }
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.hub_type || s.aR(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  hub_type: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  hub_category: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hub_tagid: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  discount_filter: {
                    n: 4,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  optin: { n: 5, c: d },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new l();
          return l.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(),
            d.prototype.name || s.aR(d.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  name: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  optin_tagid: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  prune_tagid: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new d();
          return d.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter_OptInInfo";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.filter_json || s.aR(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  filter_json: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  cache_key: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            i = new m();
          return m.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_StoreFilter";
        }
      }
    },
    59650: (e, t, i) => {
      i.d(t, { e1: () => l.e1, x1: () => b, BR: () => B, AM: () => g });
      var r = i(70655),
        s = i(67294),
        n = i(73935),
        a = i(53157),
        o = i(10847),
        l = i(84351),
        d = i(95598),
        m = i(64839);
      class u extends s.Component {
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
                    s.createElement(d.pVO, null)
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
                      this.state.maximized && s.createElement(d.r6F, null),
                      !this.state.maximized && s.createElement(d.YqJ, null)
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
                      s.createElement(d.gR, null)
                    )
                )
            )
          );
        }
      }
      (0, r.gn)([m.ak], u.prototype, "UpdateMaximizeState", null);
      var c = i(77520),
        p = i(41311),
        h = i(90666);
      function b(e, t, i) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          const s = !0 === (null == i ? void 0 : i.bNeverPopOut),
            a = !s && _(null, t),
            o =
              (null == i ? void 0 : i.bForcePopOut) &&
              (null == i ? void 0 : i.popupWidth) &&
              (null == i ? void 0 : i.popupHeight),
            l =
              a &&
              !o &&
              (yield (function (e, t, i) {
                return (0, r.mG)(this, void 0, void 0, function* () {
                  const r = t.document.createElement("div");
                  (r.style.position = "absolute"),
                    (r.style.visibility = "hidden"),
                    t.document.body.appendChild(r),
                    n.render(e, r),
                    yield i;
                  let s = document;
                  h.De.IN_LIBRARY && s.fonts && (yield s.fonts.ready);
                  const a = r.getBoundingClientRect(),
                    o = Math.ceil(a.height),
                    l = Math.ceil(a.width);
                  return (
                    n.unmountComponentAtNode(r),
                    t.document.body.removeChild(r),
                    { height: o, width: l }
                  );
                });
              })(e, t, null == i ? void 0 : i.promiseRenderComplete)),
            d =
              l &&
              l.height / t.innerHeight < 0.9 &&
              l.width / t.innerWidth < 0.8;
          if (s || (!(null == i ? void 0 : i.bForcePopOut) && d))
            return B(e, t);
          const m = {
              strTitle:
                (null == i ? void 0 : i.strTitle) ||
                (0, p.Xx)("#Dialog_DefaultWindowTitle"),
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
            u = { bHideActions: null == i ? void 0 : i.bHideActionIcons };
          return B(
            e,
            t,
            m.strTitle,
            m,
            null == i ? void 0 : i.browserContext,
            u
          );
        });
      }
      function g(e, t, i) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          return b(e, t, Object.assign({ bHideMainWindowForPopouts: !0 }, i));
        });
      }
      function B(e, t, i, r, n, a, o) {
        let d, m;
        const u = e.props.closeModal,
          c = () => {
            m && m.Close(),
              u && u(),
              (null == r ? void 0 : r.fnOnClose) && r.fnOnClose();
          },
          p = () => {
            d && d.Close(), c();
          },
          h = s.cloneElement(e, { closeModal: p });
        if (_((o = o || (0, l.BL)(t)), t) && r && i) {
          if (r.bHideMainWindowForPopouts) {
            const e = s.createElement(
              l.e1,
              {
                className: "Hidden",
                onEscKeypress: !h.props.bDisableBackgroundDismiss && p,
              },
              s.createElement("div", null)
            );
            m = o.ShowModal(e);
          }
          const e = Object.assign(Object.assign({}, r), { fnOnClose: c }),
            u = new v(t, i, e, h, n, a);
          u.Show(), (d = u);
        } else d = o.ShowModal(h);
        return d;
      }
      function _(e, t) {
        return (
          (e = e || (0, l.BL)(t || window)), h.De.USE_POPUPS && e.BUsePopups()
        );
      }
      class v extends a.K3 {
        constructor(e, t, i, r, s, n) {
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
            (this.m_options = n);
        }
        Update(e) {
          (0, c.X)(!1, "NYI");
        }
        UpdateParamsBeforeShow(e) {
          var t, i, r;
          let s,
            n,
            a,
            o = this.m_modalProps.popupWidth || 500,
            l = this.m_modalProps.popupHeight || 400;
          if (
            h.De.IN_CLIENT &&
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
            a = this.m_windowOpener.SteamClient.Window.GetBrowserID();
          else {
            let e = this.m_windowOpener.screen;
            (s = (e.availWidth - o) / 2), (n = (e.availHeight - l) / 2);
            let t = e;
            void 0 !== t.availLeft &&
              void 0 !== t.availTop &&
              ((s += t.availLeft), (n += t.availTop));
          }
          return Object.assign(Object.assign({}, e), {
            dimensions: { width: o, height: l, left: s, top: n },
            window_opener_id: a,
          });
        }
        OnLoad() {}
        OnResize() {}
        OnClose() {
          this.m_modalProps.fnOnClose && this.m_modalProps.fnOnClose(),
            n.unmountComponentAtNode(this.m_element);
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
            n.render(
              s.createElement(
                "div",
                { className: "PopupFullWindow", onContextMenu: o.T },
                s.createElement(u, {
                  hideMinMax: !0,
                  popup: e,
                  hideActions: i,
                  style: r,
                }),
                s.createElement(l.t9, { ModalManager: (0, l.BL)(e) }),
                this.m_modalElement
              ),
              t
            );
          }
        }
      }
    },
    13596: (e, t, i) => {
      i.d(t, { V: () => o });
      var r = i(67294),
        s = i(95598),
        n = i(50732),
        a = i.n(n);
      class o extends r.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(a().throbber_small)
            : "medium" == this.props.size
            ? e.push(a().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(a().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(a().throbber_xxlarge)
            : e.push(a().throbber_large);
        }
        render() {
          let e = [a().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(a().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(a().Static);
          let t = r.createElement(
            "div",
            { className: e.join(" ") },
            r.createElement(
              "div",
              { className: a().Throbber },
              r.createElement(s.wUs, { className: a().base }),
              r.createElement(s.wUs, { className: a().blur })
            )
          );
          return r.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? a().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              r.createElement(
                "div",
                { className: a().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    66668: (e, t, i) => {
      i.r(t), i.d(t, { default: () => r });
      const r = i(97024).$g;
    },
  },
]);

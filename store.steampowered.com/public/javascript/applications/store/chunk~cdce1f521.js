/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9522],
  {
    81315: (t) => {
      t.exports = {
        LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
        EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
        LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
        LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
        TopLeft: "Clgi---P85XXv25yLZwB0",
        Top: "_2Z9VyBAzofV3JvK__dECbX",
        TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
        Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
        Middle: "_1HecozzoSZfUZSci9dLkxN",
        LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
        LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
        Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
        BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
        Bottom: "sIHlK9sN2255-irERXD_V",
        BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
        topleft: "_3W096h6Ka6U7sOZVa9lXQo",
        top: "_1iRW1Msfh60zHqD-xe4EAk",
        topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
        left: "_2iBrmAEyXuaKAeZ-g-4CPF",
        right: "_15t6A4l27DY4KRL1aAUTTS",
        bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
        bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
        bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
        middle: "_1CS75ZrrDXna6xatw5ZvPR",
        LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
        DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
        LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
        LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
      };
    },
    96236: (t, e, i) => {
      "use strict";
      i.d(e, { K: () => r });
      var s = i(34629),
        o = i(90626),
        n = i(73745),
        c = i(60383);
      class r extends o.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = o.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(t) {
          let e = this.state.bRenderChildren;
          if (e == t) return;
          if (e && !this.BLoadAndUnload()) return;
          let i = 0,
            s = 0;
          if (this.m_refContainer.current) {
            const t = this.m_refContainer.current.GetBoundingClientRect();
            t && ((i = t.width), (s = t.height));
          }
          this.setState({
            bRenderChildren: t,
            nPrevRenderWidth: i,
            nPrevRenderHeight: s,
          }),
            t && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: t,
              placeholderHeight: e,
              onRender: i,
              style: s,
              mode: n,
              ...r
            } = this.props,
            a = this.state.bRenderChildren;
          let h = s;
          if (!a) {
            const i = this.state.nPrevRenderWidth || t,
              o = this.state.nPrevRenderHeight || e;
            (void 0 === o && void 0 === i) ||
              (h = { ...s, minHeight: o, minWidth: i });
          }
          const l = this.BLoadAndUnload() ? "repeated" : "once";
          return o.createElement(
            c.J,
            {
              ref: this.m_refContainer,
              style: h,
              ...r,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: l,
            },
            a && this.props.children,
          );
        }
      }
      (0, s.Cg)([n.oI], r.prototype, "OnVisibilityChange", null);
    },
    81416: (t, e, i) => {
      "use strict";
      i.d(e, { I: () => u });
      var s,
        o = i(34629),
        n = i(90626),
        c = i(73745),
        r = i(75844),
        a = i(6144),
        h = i(61859),
        l = i(33737),
        d = i(12155),
        g = i(81315),
        p = i.n(g),
        P = i(61732);
      !(function (t) {
        (t.topleft = "topleft"),
          (t.top = "top"),
          (t.topright = "topright"),
          (t.left = "left"),
          (t.middle = "middle"),
          (t.right = "right"),
          (t.bottomleft = "bottomleft"),
          (t.bottom = "bottom"),
          (t.bottomright = "bottomright");
      })(s || (s = {}));
      let u = class extends n.Component {
        m_rectLinkRegion;
        m_elLinkRegionBox;
        m_nLocalOffsetXPct;
        m_nLocalOffsetYPct;
        m_fnMouseUp = null;
        m_fnMouseMove = null;
        m_listeners = new a.Ji();
        m_strDescription = "";
        m_aspectRatio = 1;
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
        constructor(t) {
          super(t),
            (this.state = {
              curLeftPosPct: this.props.xPosPct,
              curTopPosPct: this.props.yPosPct,
              curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
              curBottomPosPct:
                100 - (this.props.yPosPct + this.props.heightPct),
              curWidthPct: this.props.widthPct,
              curHeightPct: this.props.heightPct,
              EdgeDown: null,
              text_link_url: this.props.link_url,
              text_link_description: this.props.link_description,
              bEditingLink: !1,
              valid_link: this.validateUrl(this.props.link_url),
            }),
            (this.m_strDescription = this.props.link_description),
            (this.m_aspectRatio =
              this.props.heightPct > 0 && this.props.widthPct > 0
                ? this.props.widthPct / this.props.heightPct
                : 1);
        }
        LinkRegionBoxRef(t) {
          this.m_elLinkRegionBox = t;
        }
        OnMouseDown(t, e) {
          (this.m_fnMouseUp = (t) => {
            this.OnMouseUp(t, e);
          }),
            (this.m_fnMouseMove = (t) => {
              this.OnMouseMove(t, e);
            }),
            this.setState({ EdgeDown: e }),
            (this.m_rectLinkRegion =
              this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
            (this.m_nLocalOffsetXPct =
              ((t.clientX - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
              this.state.curLeftPosPct),
            (this.m_nLocalOffsetYPct =
              ((t.clientY - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
              this.state.curTopPosPct),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mousemove",
              this.m_fnMouseMove,
            ),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mouseup",
              this.m_fnMouseUp,
            ),
            t.preventDefault(),
            t.stopPropagation();
        }
        OnMouseMove(t, e) {
          if (void 0 !== this.state.EdgeDown) {
            switch ((t.shiftKey && this.m_fnMouseUp(), e)) {
              case s.left:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(t.clientX),
                });
                break;
              case s.right:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(t.clientX),
                });
                break;
              case s.top:
                this.UpdateState({ curTopPosPct: this.CalcTopEdge(t.clientY) });
                break;
              case s.bottom:
                this.UpdateState({
                  curBottomPosPct: this.CalcBottomEdge(t.clientY),
                });
                break;
              case s.topleft:
                this.UpdateState({
                  curTopPosPct: this.CalcBottomEdge(t.clientY),
                  curLeftPosPct: this.CalcLeftEdge(t.clientX),
                });
                break;
              case s.topright:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(t.clientY),
                  curRightPosPct: this.CalcRightEdge(t.clientX),
                });
                break;
              case s.bottomleft:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(t.clientX),
                  curBottomPosPct: this.CalcBottomEdge(t.clientY),
                });
                break;
              case s.bottomright:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(t.clientX),
                  curBottomPosPct: this.CalcBottomEdge(t.clientY),
                });
                break;
              case s.middle: {
                const e = (0, P.OQ)(
                    this.CalcLeftEdge(t.clientX),
                    0,
                    100 - this.state.curWidthPct,
                  ),
                  i = 100 - (e + this.state.curWidthPct),
                  s = (0, P.OQ)(
                    this.CalcTopEdge(t.clientY),
                    0,
                    100 - this.state.curHeightPct,
                  ),
                  o = {
                    curLeftPosPct: e,
                    curRightPosPct: i,
                    curTopPosPct: s,
                    curBottomPosPct: 100 - (s + this.state.curHeightPct),
                  };
                this.setState(o);
                break;
              }
            }
            t.preventDefault(), t.stopPropagation();
          }
        }
        IsValidPct(t) {
          return t >= 0 && t <= 100;
        }
        UpdateState(t) {
          let e =
              void 0 !== t.curTopPosPct
                ? t.curTopPosPct
                : this.state.curTopPosPct,
            i =
              void 0 !== t.curBottomPosPct
                ? t.curBottomPosPct
                : this.state.curBottomPosPct,
            s =
              void 0 !== t.curLeftPosPct
                ? t.curLeftPosPct
                : this.state.curLeftPosPct,
            o =
              void 0 !== t.curRightPosPct
                ? t.curRightPosPct
                : this.state.curRightPosPct,
            n = (0, P.OQ)(
              100 - o - s,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100,
            ),
            c = (0, P.OQ)(
              100 - i - e,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100,
            );
          this.props.bLockAspectRatio &&
            (void 0 !== t.curLeftPosPct || void 0 !== t.curRightPosPct
              ? (c = n / this.m_aspectRatio)
              : (n = c * this.m_aspectRatio)),
            void 0 !== t.curLeftPosPct
              ? (s = 100 - o - n)
              : (o = 100 - (s + n)),
            void 0 !== t.curTopPosPct ? (e = 100 - i - c) : (i = 100 - (e + c));
          const r = 100 - o - s,
            a = 100 - i - e;
          this.IsValidPct(s) &&
            this.IsValidPct(o) &&
            this.IsValidPct(e) &&
            this.IsValidPct(i) &&
            this.IsValidPct(r) &&
            this.IsValidPct(a) &&
            this.setState({
              curLeftPosPct: s,
              curRightPosPct: o,
              curTopPosPct: e,
              curBottomPosPct: i,
            });
        }
        GetXPercent(t) {
          return (
            ((t - this.m_rectLinkRegion.left) /
              (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
              100 -
            this.m_nLocalOffsetXPct
          );
        }
        GetYPercent(t) {
          return (
            ((t - this.m_rectLinkRegion.top) /
              (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
              100 -
            this.m_nLocalOffsetYPct
          );
        }
        CalcLeftEdge(t) {
          return (0, P.OQ)(this.GetXPercent(t), 0, 100);
        }
        CalcRightEdge(t) {
          return (0, P.OQ)(
            100 - (this.GetXPercent(t) + this.state.curWidthPct),
            0,
            100,
          );
        }
        CalcTopEdge(t) {
          return (0, P.OQ)(this.GetYPercent(t), 0, 100);
        }
        CalcBottomEdge(t) {
          return (0, P.OQ)(
            100 - (this.GetYPercent(t) + this.state.curHeightPct),
            0,
            100,
          );
        }
        OnMouseUp(t, e) {
          this.setState({
            curWidthPct:
              100 - this.state.curRightPosPct - this.state.curLeftPosPct,
          }),
            this.setState({
              curHeightPct:
                100 - this.state.curBottomPosPct - this.state.curTopPosPct,
            }),
            this.setState({ EdgeDown: void 0 }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            }),
            this.m_listeners.Unregister();
        }
        async HandleDelete() {
          this.props.deleteFn && this.props.deleteFn(this.props.index);
        }
        OnSetLinkURLChange(t) {
          this.setState({
            text_link_url: t.target.value,
            valid_link: this.validateUrl(t.target.value),
          });
        }
        OnSetLinkDescriptionChange(t) {
          this.setState({ text_link_description: t.target.value });
        }
        validateUrl(t) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
            t,
          );
        }
        OnSaveLink() {
          (this.m_strDescription = this.state.text_link_description),
            this.setState({ bEditingLink: !this.state.bEditingLink }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            });
        }
        OnEditLink() {
          this.setState({ bEditingLink: !this.state.bEditingLink });
        }
        render() {
          let t = {
              left: this.state.curLeftPosPct + "%",
              top: this.state.curTopPosPct + "%",
              right: this.state.curRightPosPct + "%",
              bottom: this.state.curBottomPosPct + "%",
            },
            e = p().LinkRegionDragBox;
          return (
            null !== this.state.EdgeDown &&
              (e += ` ${p().EdgeDown} ` + p()[this.state.EdgeDown]),
            n.createElement(
              "div",
              {
                className: e,
                style: t,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
              },
              n.createElement(
                "div",
                { className: p().LinkRegionGridBox },
                n.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().TopLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.topleft);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().Top}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.top);
                  },
                }),
                n.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().TopRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.topright);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().Left}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.left);
                  },
                  draggable: !1,
                }),
                n.createElement(
                  "div",
                  {
                    className: `${p().LinkRegionEdge} ${p().Middle}`,
                    onMouseDown: (t) => {
                      this.OnMouseDown(t, s.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    n.createElement(
                      "div",
                      {
                        className: p().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      n.createElement(d.sED, null),
                    ),
                  !this.props.bDisableLink &&
                    n.createElement(
                      "div",
                      {
                        className: p().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      n.createElement(d.xv8, null),
                    ),
                  n.createElement(
                    "div",
                    { className: p().LinkText },
                    " ",
                    this.m_strDescription,
                    " ",
                  ),
                ),
                n.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().Right}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.right);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().BottomLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.bottomleft);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().Bottom}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.bottom);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().BottomRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.bottomright);
                  },
                  draggable: !1,
                }),
              ),
              this.state.bEditingLink &&
                n.createElement(
                  "div",
                  { className: p().LinkRegionInfo },
                  n.createElement(l.pd, {
                    className: p().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, h.we)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  n.createElement(l.pd, {
                    className: p().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, h.we)("#SteamTV_LinkDescription"),
                    placeholder: (0, h.we)(
                      "#SteamTV_LinkDescription_Placeholder",
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  n.createElement(
                    "div",
                    { className: p().LinkRegionButtonContainer },
                    n.createElement(
                      l.$n,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, h.we)("#Button_OK"),
                      " ",
                    ),
                    n.createElement(
                      l.$n,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, h.we)("#Button_Cancel"),
                    ),
                  ),
                ),
            )
          );
        }
      };
      (0, o.Cg)([c.oI], u.prototype, "LinkRegionBoxRef", null),
        (0, o.Cg)([c.oI], u.prototype, "OnMouseDown", null),
        (0, o.Cg)([c.oI], u.prototype, "OnMouseMove", null),
        (0, o.Cg)([c.oI], u.prototype, "OnMouseUp", null),
        (0, o.Cg)([c.oI], u.prototype, "HandleDelete", null),
        (0, o.Cg)([c.oI], u.prototype, "OnSetLinkURLChange", null),
        (0, o.Cg)([c.oI], u.prototype, "OnSetLinkDescriptionChange", null),
        (0, o.Cg)([c.oI], u.prototype, "OnSaveLink", null),
        (0, o.Cg)([c.oI], u.prototype, "OnEditLink", null),
        (u = (0, o.Cg)([r.PA], u));
    },
  },
]);

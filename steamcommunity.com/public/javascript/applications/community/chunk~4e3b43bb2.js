/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3973],
  {
    35944: (t) => {
      t.exports = {
        LinkRegionDragBox: "linkregionbox_LinkRegionDragBox_3riG1",
        EdgeDown: "linkregionbox_EdgeDown_x0k8J",
        LinkRegionGridBox: "linkregionbox_LinkRegionGridBox_WNpt6",
        LinkRegionEdge: "linkregionbox_LinkRegionEdge_Cl8g8",
        TopLeft: "linkregionbox_TopLeft_3Or-w",
        Top: "linkregionbox_Top_3Flcs",
        TopRight: "linkregionbox_TopRight_3nljJ",
        Left: "linkregionbox_Left_2P2d4",
        Middle: "linkregionbox_Middle_2Hdpb",
        LinkRegionDelete: "linkregionbox_LinkRegionDelete_1MGOz",
        LinkRegionSettings: "linkregionbox_LinkRegionSettings_1Ko6I",
        Right: "linkregionbox_Right_1F5bN",
        BottomLeft: "linkregionbox_BottomLeft_lZCSb",
        Bottom: "linkregionbox_Bottom_1SsR1",
        BottomRight: "linkregionbox_BottomRight_234Xs",
        topleft: "linkregionbox_topleft_2M_mJ",
        top: "linkregionbox_top_3ILUb",
        topright: "linkregionbox_topright_e-0z6",
        left: "linkregionbox_left_2heDA",
        right: "linkregionbox_right_3zE2w",
        bottomleft: "linkregionbox_bottomleft_bKyXt",
        bottom: "linkregionbox_bottom__wmyV",
        bottomright: "linkregionbox_bottomright_2SGw-",
        middle: "linkregionbox_middle_AlgGp",
        LinkRegionButtonContainer:
          "linkregionbox_LinkRegionButtonContainer_3a5Ll",
        DialogButton: "linkregionbox_DialogButton_3c_7t",
        LinkRegionInfo: "linkregionbox_LinkRegionInfo_5q1Dz",
        LinkText: "linkregionbox_LinkText_27FTj",
      };
    },
    27991: (t, e, i) => {
      "use strict";
      i.d(e, { nf: () => c });
      var o = i(37694),
        n = (i(67294), i(65902)),
        s = (i(159), i(74163), i(90666));
      function c(t) {
        o.OT.BIsInitialized() ||
          o.OT.Initialize(new n.J(s.De.WEBAPI_BASE_URL, t));
      }
    },
    57148: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => u });
      var o,
        n = i(70655),
        s = i(67294),
        c = i(22975),
        r = i(29323),
        l = i(99533),
        a = i(41311),
        h = i(48341),
        g = i(95598),
        p = i(35944),
        d = i.n(p),
        P = i(48899);
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
      })(o || (o = {}));
      let u = class extends s.Component {
        constructor(t) {
          super(t),
            (this.m_fnMouseUp = null),
            (this.m_fnMouseMove = null),
            (this.m_listeners = new l.G_()),
            (this.m_strDescription = ""),
            (this.m_aspectRatio = 1),
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
        componentWillUnmount() {
          this.m_listeners.Unregister();
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
              this.m_fnMouseMove
            ),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mouseup",
              this.m_fnMouseUp
            ),
            t.preventDefault(),
            t.stopPropagation();
        }
        OnMouseMove(t, e) {
          if (void 0 !== this.state.EdgeDown) {
            switch ((t.shiftKey && this.m_fnMouseUp(), e)) {
              case o.left:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(t.clientX),
                });
                break;
              case o.right:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(t.clientX),
                });
                break;
              case o.top:
                this.UpdateState({ curTopPosPct: this.CalcTopEdge(t.clientY) });
                break;
              case o.bottom:
                this.UpdateState({
                  curBottomPosPct: this.CalcBottomEdge(t.clientY),
                });
                break;
              case o.topleft:
                this.UpdateState({
                  curTopPosPct: this.CalcBottomEdge(t.clientY),
                  curLeftPosPct: this.CalcLeftEdge(t.clientX),
                });
                break;
              case o.topright:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(t.clientY),
                  curRightPosPct: this.CalcRightEdge(t.clientX),
                });
                break;
              case o.bottomleft:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(t.clientX),
                  curBottomPosPct: this.CalcBottomEdge(t.clientY),
                });
                break;
              case o.bottomright:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(t.clientX),
                  curBottomPosPct: this.CalcBottomEdge(t.clientY),
                });
                break;
              case o.middle: {
                const e = (0, P.Lh)(
                    this.CalcLeftEdge(t.clientX),
                    0,
                    100 - this.state.curWidthPct
                  ),
                  i = 100 - (e + this.state.curWidthPct),
                  o = (0, P.Lh)(
                    this.CalcTopEdge(t.clientY),
                    0,
                    100 - this.state.curHeightPct
                  ),
                  n = {
                    curLeftPosPct: e,
                    curRightPosPct: i,
                    curTopPosPct: o,
                    curBottomPosPct: 100 - (o + this.state.curHeightPct),
                  };
                this.setState(n);
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
            o =
              void 0 !== t.curLeftPosPct
                ? t.curLeftPosPct
                : this.state.curLeftPosPct,
            n =
              void 0 !== t.curRightPosPct
                ? t.curRightPosPct
                : this.state.curRightPosPct,
            s = (0, P.Lh)(
              100 - n - o,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100
            ),
            c = (0, P.Lh)(
              100 - i - e,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100
            );
          this.props.bLockAspectRatio &&
            (void 0 !== t.curLeftPosPct || void 0 !== t.curRightPosPct
              ? (c = s / this.m_aspectRatio)
              : (s = c * this.m_aspectRatio)),
            void 0 !== t.curLeftPosPct
              ? (o = 100 - n - s)
              : (n = 100 - (o + s)),
            void 0 !== t.curTopPosPct ? (e = 100 - i - c) : (i = 100 - (e + c));
          const r = 100 - n - o,
            l = 100 - i - e;
          this.IsValidPct(o) &&
            this.IsValidPct(n) &&
            this.IsValidPct(e) &&
            this.IsValidPct(i) &&
            this.IsValidPct(r) &&
            this.IsValidPct(l) &&
            this.setState({
              curLeftPosPct: o,
              curRightPosPct: n,
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
          return (0, P.Lh)(this.GetXPercent(t), 0, 100);
        }
        CalcRightEdge(t) {
          return (0, P.Lh)(
            100 - (this.GetXPercent(t) + this.state.curWidthPct),
            0,
            100
          );
        }
        CalcTopEdge(t) {
          return (0, P.Lh)(this.GetYPercent(t), 0, 100);
        }
        CalcBottomEdge(t) {
          return (0, P.Lh)(
            100 - (this.GetYPercent(t) + this.state.curHeightPct),
            0,
            100
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
        HandleDelete() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          });
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
            t
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
            e = d().LinkRegionDragBox;
          return (
            null !== this.state.EdgeDown &&
              (e += ` ${d().EdgeDown} ` + d()[this.state.EdgeDown]),
            s.createElement(
              "div",
              {
                className: e,
                style: t,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
              },
              s.createElement(
                "div",
                { className: d().LinkRegionGridBox },
                s.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().TopLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.topleft);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Top}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.top);
                  },
                }),
                s.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().TopRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.topright);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Left}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.left);
                  },
                  draggable: !1,
                }),
                s.createElement(
                  "div",
                  {
                    className: `${d().LinkRegionEdge} ${d().Middle}`,
                    onMouseDown: (t) => {
                      this.OnMouseDown(t, o.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    s.createElement(
                      "div",
                      {
                        className: d().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      s.createElement(g.pVO, null)
                    ),
                  !this.props.bDisableLink &&
                    s.createElement(
                      "div",
                      {
                        className: d().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      s.createElement(g.pkz, null)
                    ),
                  s.createElement(
                    "div",
                    { className: d().LinkText },
                    " ",
                    this.m_strDescription,
                    " "
                  )
                ),
                s.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Right}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.right);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().BottomLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.bottomleft);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().Bottom}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.bottom);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${d().LinkRegionEdge} ${d().BottomRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.bottomright);
                  },
                  draggable: !1,
                })
              ),
              this.state.bEditingLink &&
                s.createElement(
                  "div",
                  { className: d().LinkRegionInfo },
                  s.createElement(h.II, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, a.Xx)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  s.createElement(h.II, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, a.Xx)("#SteamTV_LinkDescription"),
                    placeholder: (0, a.Xx)(
                      "#SteamTV_LinkDescription_Placeholder"
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  s.createElement(
                    "div",
                    { className: d().LinkRegionButtonContainer },
                    s.createElement(
                      h.zx,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, a.Xx)("#Button_OK"),
                      " "
                    ),
                    s.createElement(
                      h.zx,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, a.Xx)("#Button_Cancel")
                    )
                  )
                )
            )
          );
        }
      };
      (0, n.gn)([c.ak], u.prototype, "LinkRegionBoxRef", null),
        (0, n.gn)([c.ak], u.prototype, "OnMouseDown", null),
        (0, n.gn)([c.ak], u.prototype, "OnMouseMove", null),
        (0, n.gn)([c.ak], u.prototype, "OnMouseUp", null),
        (0, n.gn)([c.ak], u.prototype, "HandleDelete", null),
        (0, n.gn)([c.ak], u.prototype, "OnSetLinkURLChange", null),
        (0, n.gn)([c.ak], u.prototype, "OnSetLinkDescriptionChange", null),
        (0, n.gn)([c.ak], u.prototype, "OnSaveLink", null),
        (0, n.gn)([c.ak], u.prototype, "OnEditLink", null),
        (u = (0, n.gn)([r.Pi], u));
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3973],
  {
    77723: (t) => {
      t.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
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
      i.d(e, { nf: () => l });
      var o = i(37694),
        n = (i(67294), i(65902)),
        s = (i(159), i(74163), i(90666));
      function l(t) {
        o.OT.BIsInitialized() ||
          o.OT.Initialize(new n.J(s.De.WEBAPI_BASE_URL, t));
      }
    },
    93612: (t, e, i) => {
      "use strict";
      i.d(e, { i: () => g });
      var o = i(67294),
        n = i(26149),
        s = i(50153),
        l = i(7573),
        c = i(41311),
        r = i(35092),
        a = i(90666),
        h = i(77723);
      function g(t) {
        const { gidEvent: e } = t,
          i = (0, s.XC)(e),
          [g, d] = (0, o.useMemo)(() => {
            var t, e, o, s;
            if (
              (null ===
                (e =
                  null === (t = null == i ? void 0 : i.jsondata) || void 0 === t
                    ? void 0
                    : t.localized_sale_product_banner) || void 0 === e
                ? void 0
                : e.length) > 0 &&
              (null ===
                (s =
                  null === (o = null == i ? void 0 : i.jsondata) || void 0 === o
                    ? void 0
                    : o.localized_sale_product_mobile_banner) || void 0 === s
                ? void 0
                : s.length) > 0
            ) {
              const t = (0, n.jM)(a.De.LANGUAGE),
                e = c.LZ.GetWithFallback(
                  i.jsondata.localized_sale_product_banner,
                  t
                ),
                o = c.LZ.GetWithFallback(
                  i.jsondata.localized_sale_product_mobile_banner,
                  t
                );
              if (
                (null == e ? void 0 : e.length) > 0 &&
                (null == o ? void 0 : o.length) > 0
              ) {
                const t = i.clanSteamID.GetAccountID();
                return [
                  a.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${t}/${e}`,
                  a.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${t}/${o}`,
                ];
              }
            }
            return [null, null];
          }, [i]);
        return (null == g ? void 0 : g.length) > 0 &&
          (null == d ? void 0 : d.length) > 0
          ? o.createElement(
              "a",
              { href: (0, r.OL)(i.GetSaleURL()), className: h.Link },
              o.createElement("img", {
                src: g,
                className: (0, l.Z)(h.Banner, h.Big),
              }),
              o.createElement("img", {
                src: d,
                className: (0, l.Z)(h.Banner, h.Mobile),
              })
            )
          : null;
      }
    },
    57148: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => P });
      var o,
        n = i(70655),
        s = i(67294),
        l = i(22975),
        c = i(29323),
        r = i(99533),
        a = i(41311),
        h = i(48341),
        g = i(95598),
        d = i(35944),
        p = i.n(d),
        u = i(48899);
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
      let P = class extends s.Component {
        constructor(t) {
          super(t),
            (this.m_fnMouseUp = null),
            (this.m_fnMouseMove = null),
            (this.m_listeners = new r.G_()),
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
                const e = (0, u.Lh)(
                    this.CalcLeftEdge(t.clientX),
                    0,
                    100 - this.state.curWidthPct
                  ),
                  i = 100 - (e + this.state.curWidthPct),
                  o = (0, u.Lh)(
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
            s = (0, u.Lh)(
              100 - n - o,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100
            ),
            l = (0, u.Lh)(
              100 - i - e,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100
            );
          this.props.bLockAspectRatio &&
            (void 0 !== t.curLeftPosPct || void 0 !== t.curRightPosPct
              ? (l = s / this.m_aspectRatio)
              : (s = l * this.m_aspectRatio)),
            void 0 !== t.curLeftPosPct
              ? (o = 100 - n - s)
              : (n = 100 - (o + s)),
            void 0 !== t.curTopPosPct ? (e = 100 - i - l) : (i = 100 - (e + l));
          const c = 100 - n - o,
            r = 100 - i - e;
          this.IsValidPct(o) &&
            this.IsValidPct(n) &&
            this.IsValidPct(e) &&
            this.IsValidPct(i) &&
            this.IsValidPct(c) &&
            this.IsValidPct(r) &&
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
          return (0, u.Lh)(this.GetXPercent(t), 0, 100);
        }
        CalcRightEdge(t) {
          return (0, u.Lh)(
            100 - (this.GetXPercent(t) + this.state.curWidthPct),
            0,
            100
          );
        }
        CalcTopEdge(t) {
          return (0, u.Lh)(this.GetYPercent(t), 0, 100);
        }
        CalcBottomEdge(t) {
          return (0, u.Lh)(
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
            e = p().LinkRegionDragBox;
          return (
            null !== this.state.EdgeDown &&
              (e += ` ${p().EdgeDown} ` + p()[this.state.EdgeDown]),
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
                { className: p().LinkRegionGridBox },
                s.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().TopLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.topleft);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().Top}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.top);
                  },
                }),
                s.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().TopRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.topright);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().Left}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.left);
                  },
                  draggable: !1,
                }),
                s.createElement(
                  "div",
                  {
                    className: `${p().LinkRegionEdge} ${p().Middle}`,
                    onMouseDown: (t) => {
                      this.OnMouseDown(t, o.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    s.createElement(
                      "div",
                      {
                        className: p().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      s.createElement(g.pVO, null)
                    ),
                  !this.props.bDisableLink &&
                    s.createElement(
                      "div",
                      {
                        className: p().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      s.createElement(g.pkz, null)
                    ),
                  s.createElement(
                    "div",
                    { className: p().LinkText },
                    " ",
                    this.m_strDescription,
                    " "
                  )
                ),
                s.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().Right}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.right);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().BottomLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.bottomleft);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().Bottom}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.bottom);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p().LinkRegionEdge} ${p().BottomRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.bottomright);
                  },
                  draggable: !1,
                })
              ),
              this.state.bEditingLink &&
                s.createElement(
                  "div",
                  { className: p().LinkRegionInfo },
                  s.createElement(h.II, {
                    className: p().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, a.Xx)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  s.createElement(h.II, {
                    className: p().LinkRegionInput,
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
                    { className: p().LinkRegionButtonContainer },
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
      (0, n.gn)([l.ak], P.prototype, "LinkRegionBoxRef", null),
        (0, n.gn)([l.ak], P.prototype, "OnMouseDown", null),
        (0, n.gn)([l.ak], P.prototype, "OnMouseMove", null),
        (0, n.gn)([l.ak], P.prototype, "OnMouseUp", null),
        (0, n.gn)([l.ak], P.prototype, "HandleDelete", null),
        (0, n.gn)([l.ak], P.prototype, "OnSetLinkURLChange", null),
        (0, n.gn)([l.ak], P.prototype, "OnSetLinkDescriptionChange", null),
        (0, n.gn)([l.ak], P.prototype, "OnSaveLink", null),
        (0, n.gn)([l.ak], P.prototype, "OnEditLink", null),
        (P = (0, n.gn)([c.Pi], P));
    },
  },
]);

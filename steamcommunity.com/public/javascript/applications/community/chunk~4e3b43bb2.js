/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3973],
  {
    38695: (t) => {
      t.exports = {
        Container: "discussionwidget_Container_3BVe_",
        VoteContainer: "discussionwidget_VoteContainer_1uhQY",
        DiscussContainer: "discussionwidget_DiscussContainer_3tXYJ",
        ShareContainer: "discussionwidget_ShareContainer_cLK_F",
        InnerContainer: "discussionwidget_InnerContainer_3kQsD",
        DiscussionButton: "discussionwidget_DiscussionButton_wnKan",
        DiscussIcon: "discussionwidget_DiscussIcon_3-isH",
        linkField: "discussionwidget_linkField_1mRpV",
        ShareButtonContainer: "discussionwidget_ShareButtonContainer_3tMDZ",
        LinkInputLabel: "discussionwidget_LinkInputLabel_Gaizo",
        LinkButton: "discussionwidget_LinkButton_q5-pg",
        ShareSteamBtn: "discussionwidget_ShareSteamBtn_3Gc7y",
        ClipboardText: "discussionwidget_ClipboardText_3iQp-",
        LinkInput: "discussionwidget_LinkInput_2IeAw",
        ShareIcon: "discussionwidget_ShareIcon_1kFSv",
        ClipboardIcon: "discussionwidget_ClipboardIcon_sEXEi",
        SteamIcon: "discussionwidget_SteamIcon_3ZAOL",
        share_controls_ctn: "discussionwidget_share_controls_ctn_1PRQm",
        ShareLanguagePicker: "discussionwidget_ShareLanguagePicker_c-WS8",
        LanguageLabel: "discussionwidget_LanguageLabel_GHNBo",
        ShareBtn: "discussionwidget_ShareBtn_1qDAn",
        VoteCount: "discussionwidget_VoteCount_2dVe4",
        DiscussionCount: "discussionwidget_DiscussionCount_1GFRK",
        DiscussionButtonText: "discussionwidget_DiscussionButtonText_1qE1y",
        VoteDownIcon: "discussionwidget_VoteDownIcon_3QPkc",
        VoteDownSelectedIcon: "discussionwidget_VoteDownSelectedIcon_3SLkg",
        VoteUpIcon: "discussionwidget_VoteUpIcon_vRT1W",
        VoteUpSelectedIcon: "discussionwidget_VoteUpSelectedIcon_8WczG",
        VoteUpStaticIcon: "discussionwidget_VoteUpStaticIcon_1g-En",
        VoteButtonSelected: "discussionwidget_VoteButtonSelected_2c_5V",
      };
    },
    31265: (t) => {
      t.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    25640: (t) => {
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
    55330: (t, e, i) => {
      "use strict";
      i.d(e, { i: () => u });
      var o = i(89526),
        n = i(46132),
        s = i(68818),
        c = i(13345),
        a = i(19304),
        l = i(14826),
        r = i(207),
        g = i(32765),
        h = i(31265);
      function u(t) {
        const { gidEvent: e } = t,
          i = (0, s.XC)(e),
          [u, d] = (0, o.useMemo)(() => {
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
              const t = (0, n.jM)(g.De.LANGUAGE),
                e = l.LZ.GetWithFallback(
                  i.jsondata.localized_sale_product_banner,
                  t,
                ),
                o = l.LZ.GetWithFallback(
                  i.jsondata.localized_sale_product_mobile_banner,
                  t,
                );
              if (
                (null == e ? void 0 : e.length) > 0 &&
                (null == o ? void 0 : o.length) > 0
              ) {
                const t = i.clanSteamID.GetAccountID();
                return [`${(0, c.OL)()}${t}/${e}`, `${(0, c.OL)()}${t}/${o}`];
              }
            }
            return [null, null];
          }, [i]);
        return (null == u ? void 0 : u.length) > 0 &&
          (null == d ? void 0 : d.length) > 0
          ? o.createElement(
              "a",
              { href: (0, r.OL)(i.GetSaleURL()), className: h.Link },
              o.createElement("img", {
                src: u,
                className: (0, a.Z)(h.Banner, h.Big),
              }),
              o.createElement("img", {
                src: d,
                className: (0, a.Z)(h.Banner, h.Mobile),
              }),
            )
          : null;
      }
    },
    71937: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => p });
      var o,
        n = i(33940),
        s = i(89526),
        c = i(4306),
        a = i(88464),
        l = i(85246),
        r = i(14826),
        g = i(57605),
        h = i(701),
        u = i(25640),
        d = i.n(u),
        L = i(36041);
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
      let p = class extends s.Component {
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
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
                const e = (0, L.Lh)(
                    this.CalcLeftEdge(t.clientX),
                    0,
                    100 - this.state.curWidthPct,
                  ),
                  i = 100 - (e + this.state.curWidthPct),
                  o = (0, L.Lh)(
                    this.CalcTopEdge(t.clientY),
                    0,
                    100 - this.state.curHeightPct,
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
            s = (0, L.Lh)(
              100 - n - o,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100,
            ),
            c = (0, L.Lh)(
              100 - i - e,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100,
            );
          this.props.bLockAspectRatio &&
            (void 0 !== t.curLeftPosPct || void 0 !== t.curRightPosPct
              ? (c = s / this.m_aspectRatio)
              : (s = c * this.m_aspectRatio)),
            void 0 !== t.curLeftPosPct
              ? (o = 100 - n - s)
              : (n = 100 - (o + s)),
            void 0 !== t.curTopPosPct ? (e = 100 - i - c) : (i = 100 - (e + c));
          const a = 100 - n - o,
            l = 100 - i - e;
          this.IsValidPct(o) &&
            this.IsValidPct(n) &&
            this.IsValidPct(e) &&
            this.IsValidPct(i) &&
            this.IsValidPct(a) &&
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
          return (0, L.Lh)(this.GetXPercent(t), 0, 100);
        }
        CalcRightEdge(t) {
          return (0, L.Lh)(
            100 - (this.GetXPercent(t) + this.state.curWidthPct),
            0,
            100,
          );
        }
        CalcTopEdge(t) {
          return (0, L.Lh)(this.GetYPercent(t), 0, 100);
        }
        CalcBottomEdge(t) {
          return (0, L.Lh)(
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
                      s.createElement(h.pVO, null),
                    ),
                  !this.props.bDisableLink &&
                    s.createElement(
                      "div",
                      {
                        className: d().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      s.createElement(h.pkz, null),
                    ),
                  s.createElement(
                    "div",
                    { className: d().LinkText },
                    " ",
                    this.m_strDescription,
                    " ",
                  ),
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
                }),
              ),
              this.state.bEditingLink &&
                s.createElement(
                  "div",
                  { className: d().LinkRegionInfo },
                  s.createElement(g.II, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, r.Xx)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  s.createElement(g.II, {
                    className: d().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, r.Xx)("#SteamTV_LinkDescription"),
                    placeholder: (0, r.Xx)(
                      "#SteamTV_LinkDescription_Placeholder",
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  s.createElement(
                    "div",
                    { className: d().LinkRegionButtonContainer },
                    s.createElement(
                      g.zx,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, r.Xx)("#Button_OK"),
                      " ",
                    ),
                    s.createElement(
                      g.zx,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, r.Xx)("#Button_Cancel"),
                    ),
                  ),
                ),
            )
          );
        }
      };
      (0, n.gn)([c.ak], p.prototype, "LinkRegionBoxRef", null),
        (0, n.gn)([c.ak], p.prototype, "OnMouseDown", null),
        (0, n.gn)([c.ak], p.prototype, "OnMouseMove", null),
        (0, n.gn)([c.ak], p.prototype, "OnMouseUp", null),
        (0, n.gn)([c.ak], p.prototype, "HandleDelete", null),
        (0, n.gn)([c.ak], p.prototype, "OnSetLinkURLChange", null),
        (0, n.gn)([c.ak], p.prototype, "OnSetLinkDescriptionChange", null),
        (0, n.gn)([c.ak], p.prototype, "OnSaveLink", null),
        (0, n.gn)([c.ak], p.prototype, "OnEditLink", null),
        (p = (0, n.gn)([a.Pi], p));
    },
    76672: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => o });
      const o =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjE0MDlweCIgdmlld0JveD0iMCAxODAxLjUgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMTgwMS41IDE0MDAgMTQwOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBpZD0iaWNvbm1vbnN0ci1saW5rLTFfMV8iIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNjIuMzUzLDIzMTAuNTg4YzE0OC4yMzUtMTQ4LjIzNSwzODcuMDYtMTQ4LjIzNSw1MjcuMDYsMA0KCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NA0KCWMtNDEuMTc3LDguMjM1LTc0LjExOCwyNC43MDYtOTguODIzLDQ5LjQxMWwtMjQ3LjA1OSwyNDcuMDZjLTc0LjExOCw3NC4xMTctNzQuMTE4LDE5Ny42NDYsMCwyODANCgljNzQuMTE4LDc0LjExNywxOTcuNjQ3LDc0LjExNywyODAsMGwwLDBsNzQuMTE4LTc0LjExOGM3NC4xMTcsMjQuNzA2LDE0OC4yMzUsNDEuMTc3LDIyMi4zNTMsMzIuOTQxbC0xNzIuOTQsMTcyLjk0MQ0KCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4eg0KCSBNNzU3LjY0NiwxOTA3LjA1OUw1OTIuOTQxLDIwODBjNzQuMTE3LTguMjM1LDE0OC4yMzUsOC4yMzUsMjE0LjExNywzMi45NDFsNzQuMTE4LTc0LjExOGM3NC4xMTctNzQuMTE3LDE5Ny42NDYtNzQuMTE3LDI4MCwwDQoJYzgyLjM1Myw3NC4xMTgsNzQuMTE3LDE5Ny42NDcsMCwyODBsLTI1NS4yOTQsMjQ3LjA2Yy03NC4xMTgsNzQuMTE3LTE5Ny42NDcsNzQuMTE3LTI4MCwwDQoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0Nw0KCWMxNDguMjM1LDE0OC4yMzUsMzg3LjA1OSwxNDguMjM1LDUyNy4wNiwwbDAsMGwyNDcuMDU5LTI0Ny4wNmMxNDguMjM1LTE0OC4yMzUsMTQ4LjIzNS0zODcuMDU5LDAtNTI3LjA1OQ0KCVM5MDUuODgzLDE3NjcuMDU5LDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OUw3NTcuNjQ2LDE5MDcuMDU5eiIvPg0KPC9zdmc+DQo=";
    },
    6726: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => o });
      const o =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    7787: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => o });
      const o =
        i.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    16947: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => o });
      const o =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);

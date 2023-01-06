/* Third-party software licenses can be found at licenses.txt */
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [6177],
  {
    51990: (t) => {
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
    95116: (t) => {
      t.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    9268: (t) => {
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
    89866: (t) => {
      t.exports = {
        TheaterMode: "appdetailsbroadcastsection_TheaterMode_19yL9",
        Body: "appdetailsbroadcastsection_Body_CFp7F",
        BroadcastPlayer: "appdetailsbroadcastsection_BroadcastPlayer_2lAf2",
        BroadcastThumbnail:
          "appdetailsbroadcastsection_BroadcastThumbnail_2l1gE",
        PlayButtonWrapper: "appdetailsbroadcastsection_PlayButtonWrapper__-Sx3",
        BroadcastBox: "appdetailsbroadcastsection_BroadcastBox_9nwsC",
        ViewBroadcastOnWeb:
          "appdetailsbroadcastsection_ViewBroadcastOnWeb_1Z3B4",
      };
    },
    31951: (t, e, i) => {
      "use strict";
      i.d(e, { x: () => c });
      var s = i(70655),
        o = i(67294),
        n = i(31535),
        a = i(93725);
      class c extends o.Component {
        constructor() {
          super(...arguments),
            (this.m_schUpdate = new a.Ar()),
            (this.m_bSetupComplete = !1);
        }
        componentDidMount() {
          0 == this.props.updateRate && this.updateCanvas();
        }
        componentWillUnmount() {
          this.m_schUpdate.Cancel();
        }
        componentDidUpdate() {
          this.updateCanvas();
        }
        BindCanvasRef(t) {
          this.m_elCanvas = t;
        }
        updateCanvas() {
          if (
            null == this.props.elementRef ||
            null == this.m_elCanvas ||
            this.m_bSetupComplete
          )
            return;
          let t = this.props.scaleFactor || [1, 1],
            e = this.props.elementRef,
            i = this.props.updateRate;
          this.m_Context = this.m_elCanvas.getContext("2d");
          let s = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor
            ),
            o = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor
            );
          (this.m_elCanvas.width = s),
            (this.m_elCanvas.height = o),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let n = () => {
            this.m_Context.drawImage(e, 0, 0, s * t[0], o * t[1]),
              i > 0 && this.m_schUpdate.Schedule(i, n);
          };
          n(), (this.m_bSetupComplete = !0);
        }
        render() {
          return o.createElement("canvas", {
            id: this.props.id,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      (0, s.gn)([n.ak], c.prototype, "BindCanvasRef", null),
        (0, s.gn)([n.ak], c.prototype, "updateCanvas", null);
    },
    58657: (t, e, i) => {
      "use strict";
      i.d(e, { i: () => d });
      var s = i(67294),
        o = i(65030),
        n = i(15256),
        a = i(45520),
        c = i(27194),
        l = i(78290),
        r = i(78869),
        h = i(95116);
      function d(t) {
        const { gidEvent: e } = t,
          i = (0, n.XC)(e),
          [d, g] = (0, s.useMemo)(() => {
            var t, e, s, n;
            if (
              (null ===
                (e =
                  null === (t = null == i ? void 0 : i.jsondata) || void 0 === t
                    ? void 0
                    : t.localized_sale_product_banner) || void 0 === e
                ? void 0
                : e.length) > 0 &&
              (null ===
                (n =
                  null === (s = null == i ? void 0 : i.jsondata) || void 0 === s
                    ? void 0
                    : s.localized_sale_product_mobile_banner) || void 0 === n
                ? void 0
                : n.length) > 0
            ) {
              const t = (0, o.jM)(r.De.LANGUAGE),
                e = c.LZ.GetWithFallback(
                  i.jsondata.localized_sale_product_banner,
                  t
                ),
                s = c.LZ.GetWithFallback(
                  i.jsondata.localized_sale_product_mobile_banner,
                  t
                );
              if (
                (null == e ? void 0 : e.length) > 0 &&
                (null == s ? void 0 : s.length) > 0
              ) {
                const t = i.clanSteamID.GetAccountID();
                return [
                  r.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${t}/${e}`,
                  r.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${t}/${s}`,
                ];
              }
            }
            return [null, null];
          }, [i]);
        return (null == d ? void 0 : d.length) > 0 &&
          (null == g ? void 0 : g.length) > 0
          ? s.createElement(
              "a",
              { href: (0, l.OL)(i.GetSaleURL()), className: h.Link },
              s.createElement("img", {
                src: d,
                className: (0, a.Z)(h.Banner, h.Big),
              }),
              s.createElement("img", {
                src: g,
                className: (0, a.Z)(h.Banner, h.Mobile),
              })
            )
          : null;
      }
    },
    11120: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => m });
      var s,
        o = i(70655),
        n = i(67294),
        a = i(31535),
        c = i(29323),
        l = i(93725),
        r = i(27194),
        h = i(94115),
        d = i(7952),
        g = i(9268),
        u = i.n(g),
        p = i(38645);
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
      let m = class extends n.Component {
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
                const e = (0, p.Lh)(
                    this.CalcLeftEdge(t.clientX),
                    0,
                    100 - this.state.curWidthPct
                  ),
                  i = 100 - (e + this.state.curWidthPct),
                  s = (0, p.Lh)(
                    this.CalcTopEdge(t.clientY),
                    0,
                    100 - this.state.curHeightPct
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
            n = (0, p.Lh)(
              100 - o - s,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100
            ),
            a = (0, p.Lh)(
              100 - i - e,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100
            );
          this.props.bLockAspectRatio &&
            (void 0 !== t.curLeftPosPct || void 0 !== t.curRightPosPct
              ? (a = n / this.m_aspectRatio)
              : (n = a * this.m_aspectRatio)),
            void 0 !== t.curLeftPosPct
              ? (s = 100 - o - n)
              : (o = 100 - (s + n)),
            void 0 !== t.curTopPosPct ? (e = 100 - i - a) : (i = 100 - (e + a));
          const c = 100 - o - s,
            l = 100 - i - e;
          this.IsValidPct(s) &&
            this.IsValidPct(o) &&
            this.IsValidPct(e) &&
            this.IsValidPct(i) &&
            this.IsValidPct(c) &&
            this.IsValidPct(l) &&
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
          return (0, p.Lh)(this.GetXPercent(t), 0, 100);
        }
        CalcRightEdge(t) {
          return (0, p.Lh)(
            100 - (this.GetXPercent(t) + this.state.curWidthPct),
            0,
            100
          );
        }
        CalcTopEdge(t) {
          return (0, p.Lh)(this.GetYPercent(t), 0, 100);
        }
        CalcBottomEdge(t) {
          return (0, p.Lh)(
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
          return (0, o.mG)(this, void 0, void 0, function* () {
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
            e = u().LinkRegionDragBox;
          return (
            null !== this.state.EdgeDown &&
              (e += ` ${u().EdgeDown} ` + u()[this.state.EdgeDown]),
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
                { className: u().LinkRegionGridBox },
                n.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().TopLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.topleft);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().Top}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.top);
                  },
                }),
                n.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().TopRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.topright);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().Left}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.left);
                  },
                  draggable: !1,
                }),
                n.createElement(
                  "div",
                  {
                    className: `${u().LinkRegionEdge} ${u().Middle}`,
                    onMouseDown: (t) => {
                      this.OnMouseDown(t, s.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    n.createElement(
                      "div",
                      {
                        className: u().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      n.createElement(d.pVO, null)
                    ),
                  !this.props.bDisableLink &&
                    n.createElement(
                      "div",
                      {
                        className: u().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      n.createElement(d.pkz, null)
                    ),
                  n.createElement(
                    "div",
                    { className: u().LinkText },
                    " ",
                    this.m_strDescription,
                    " "
                  )
                ),
                n.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().Right}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.right);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().BottomLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.bottomleft);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().Bottom}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.bottom);
                  },
                  draggable: !1,
                }),
                n.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().BottomRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, s.bottomright);
                  },
                  draggable: !1,
                })
              ),
              this.state.bEditingLink &&
                n.createElement(
                  "div",
                  { className: u().LinkRegionInfo },
                  n.createElement(h.II, {
                    className: u().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, r.Xx)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  n.createElement(h.II, {
                    className: u().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, r.Xx)("#SteamTV_LinkDescription"),
                    placeholder: (0, r.Xx)(
                      "#SteamTV_LinkDescription_Placeholder"
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  n.createElement(
                    "div",
                    { className: u().LinkRegionButtonContainer },
                    n.createElement(
                      h.zx,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, r.Xx)("#Button_OK"),
                      " "
                    ),
                    n.createElement(
                      h.zx,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, r.Xx)("#Button_Cancel")
                    )
                  )
                )
            )
          );
        }
      };
      (0, o.gn)([a.ak], m.prototype, "LinkRegionBoxRef", null),
        (0, o.gn)([a.ak], m.prototype, "OnMouseDown", null),
        (0, o.gn)([a.ak], m.prototype, "OnMouseMove", null),
        (0, o.gn)([a.ak], m.prototype, "OnMouseUp", null),
        (0, o.gn)([a.ak], m.prototype, "HandleDelete", null),
        (0, o.gn)([a.ak], m.prototype, "OnSetLinkURLChange", null),
        (0, o.gn)([a.ak], m.prototype, "OnSetLinkDescriptionChange", null),
        (0, o.gn)([a.ak], m.prototype, "OnSaveLink", null),
        (0, o.gn)([a.ak], m.prototype, "OnEditLink", null),
        (m = (0, o.gn)([c.Pi], m));
    },
    41554: (t, e, i) => {
      "use strict";
      i.d(e, { m: () => r });
      var s = i(70655),
        o = i(22188),
        n = i(69144),
        a = i(27661),
        c = i(88357);
      class l {
        constructor() {
          (this.m_mapAppBroadcasts = new Map()),
            (this.m_setRequestsInFlight = new Set());
        }
        GetBroadcastList(t) {
          if (this.m_mapAppBroadcasts.has(t)) {
            const e = 60 * 1 * 1e3,
              i = this.m_mapAppBroadcasts.get(t);
            if (new Date().getTime() - i.timeStamp.getTime() < e)
              return (
                i.bHasData && i.broadcasts.length > 0 && (0, a.zO)(12e4), i
              );
          } else
            this.m_mapAppBroadcasts.set(t, {
              bHasData: !1,
              timeStamp: new Date(),
            });
          if (!this.m_setRequestsInFlight.has(t)) {
            this.m_setRequestsInFlight.add(t);
            let e = n.de.ResolveURL("LibraryFeaturedBroadcasts", t);
            c.Z.get(e, { retrycount: 1 })
              .then((e) => {
                if (e.success && Array.isArray(e.filtered)) {
                  const i = {
                    bHasData: !0,
                    timeStamp: new Date(),
                    broadcasts: [],
                  };
                  e.filtered.forEach((t) => {
                    const e = {
                      unAccountId: Number(t.accountid),
                      strThumbnailURL: t.thumbnail_http_address,
                      unViewerCount: t.viewer_count,
                      strTitle: t.title,
                      unDuration: t.duration,
                    };
                    i.broadcasts.push(e);
                  }),
                    this.m_mapAppBroadcasts.set(t, i);
                }
                this.m_setRequestsInFlight.delete(t);
              })
              .catch((e) => {
                this.m_setRequestsInFlight.delete(t);
              });
          }
          let e = this.m_mapAppBroadcasts.get(t);
          return (
            e.bHasData && e.broadcasts.length > 0 && (0, a.zO)(12e4),
            this.m_mapAppBroadcasts.get(t)
          );
        }
        InvalidateBroadcastList(t) {
          this.m_mapAppBroadcasts.delete(t);
        }
      }
      (0, s.gn)([o.LO.shallow], l.prototype, "m_mapAppBroadcasts", void 0);
      const r = new l();
      window.appBroadcastStore = r;
    },
    9495: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      const s =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjE0MDlweCIgdmlld0JveD0iMCAxODAxLjUgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMTgwMS41IDE0MDAgMTQwOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBpZD0iaWNvbm1vbnN0ci1saW5rLTFfMV8iIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNjIuMzUzLDIzMTAuNTg4YzE0OC4yMzUtMTQ4LjIzNSwzODcuMDYtMTQ4LjIzNSw1MjcuMDYsMA0KCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NA0KCWMtNDEuMTc3LDguMjM1LTc0LjExOCwyNC43MDYtOTguODIzLDQ5LjQxMWwtMjQ3LjA1OSwyNDcuMDZjLTc0LjExOCw3NC4xMTctNzQuMTE4LDE5Ny42NDYsMCwyODANCgljNzQuMTE4LDc0LjExNywxOTcuNjQ3LDc0LjExNywyODAsMGwwLDBsNzQuMTE4LTc0LjExOGM3NC4xMTcsMjQuNzA2LDE0OC4yMzUsNDEuMTc3LDIyMi4zNTMsMzIuOTQxbC0xNzIuOTQsMTcyLjk0MQ0KCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4eg0KCSBNNzU3LjY0NiwxOTA3LjA1OUw1OTIuOTQxLDIwODBjNzQuMTE3LTguMjM1LDE0OC4yMzUsOC4yMzUsMjE0LjExNywzMi45NDFsNzQuMTE4LTc0LjExOGM3NC4xMTctNzQuMTE3LDE5Ny42NDYtNzQuMTE3LDI4MCwwDQoJYzgyLjM1Myw3NC4xMTgsNzQuMTE3LDE5Ny42NDcsMCwyODBsLTI1NS4yOTQsMjQ3LjA2Yy03NC4xMTgsNzQuMTE3LTE5Ny42NDcsNzQuMTE3LTI4MCwwDQoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0Nw0KCWMxNDguMjM1LDE0OC4yMzUsMzg3LjA1OSwxNDguMjM1LDUyNy4wNiwwbDAsMGwyNDcuMDU5LTI0Ny4wNmMxNDguMjM1LTE0OC4yMzUsMTQ4LjIzNS0zODcuMDU5LDAtNTI3LjA1OQ0KCVM5MDUuODgzLDE3NjcuMDU5LDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OUw3NTcuNjQ2LDE5MDcuMDU5eiIvPg0KPC9zdmc+DQo=";
    },
    56175: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    47077: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1MjI5RjcyNjYyMjExRTlCQTM3QzA4REJGQTAwNUZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1MjI5RjczNjYyMjExRTlCQTM3QzA4REJGQTAwNUZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjUyMjlGNzA2NjIyMTFFOUJBMzdDMDhEQkZBMDA1RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjUyMjlGNzE2NjIyMTFFOUJBMzdDMDhEQkZBMDA1RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7oZ6UCAAAFiElEQVR42uybW2hcVRSGZ9JE22RotJa2wUrEW0xBlGIl0kijQZqWoPXSPjSt0oLgg4hvpY999SkQxYoPgmmgKkKVSiMqtrQpVeO9YCMOtTqmaVF6G5OYXqb/ov/AdHrOnrXP2efkwMyGj0Mm+7LWOvuy1t77pAuFQqqaU12qylPNANVugPryH9LptNMGMMfMxaMDdII20A6WggxoYrb/QB7kwK9gDBwCRyDPtGN5bvyhFEeNNIKNYB+YKgRPU6xD6mp0ZYDr9HVpAJRvAf3gQsF9usC6WxJnAJRrBgNgphB9mmFbzYkwAMr0gVOF+JO02TdrBkDeDNhVmP0kMmSCGiBdrrRmFUCZu/HYC+5PyGp2DPRC9qztKlAXoAs9hMdIgpRPUZYRymaVrHoAGzgA5ifUrzkPVkGHH533AHb74QQrn6Jsw5TVXQ/gJPNtwrp9pTlhBXTJu+oBOyNW/iDYAt4Co+BS2f8nwWtgGegBXyvmhJ3B1kXvdT7q9CK4pbicSfwAOsCrYAj0eLjaWUW9faH8AHp4cTg57WA7uAx+Ae+Al8ADYI7Pi9uhdJaawxhgIAblz4E6sMfn/9kQBpA0EMgADGzi8O2/YHsnDXnWBBwCxdihxc8ApklwG2iIYcb+BoLcgecSQ573kecVcB9Yjb+/Ancp62+gLvplkLH3KW5aRJ2eoZAfRNiGLIeLodukdhlcF5PyKS5pj0TcRoY6qfcEN8ekfA5v5SS3zKJOm1UG4B5eV1xvn8vc8hja6qJu5k1Rvo25EQpyFsjSdlomN7AQfCpjlBPb0ojaLW7O7q9kgE7HDZ8De8BnErKiy//pkWdDSQ9cgMejdHmfAy0OZeksN8AN6yIYdLS+i0f3Arg5xAbmHPAUOORR/+UAMg1WdITAqLIyEeB1CT0paBt4A/wDtoh353g/fx04Ad4shrt4LgLbwLRS5lGNASaUlW0yHIREklB3vc/vq8EVhcwTGgPkFRUdTNoGAGT6SCF3XuMKNynaG07gJsiXijxNWkeoUqpXvpWHwQ+0/nEZx4oyPeAog5jDFhudDUG7TpAhMKyodz4nxNJ0ESwzlGnziEAnNPv+yPOhqyGQV9hNJp1nK+R5HNzm0XOeVgRGpWkx6zIp/yR9Bk1QVHEI5JSdZ7dsWRn+P+Xz+/+GMhd9fp8xKL8Vj48lkNXEHpohYOMIjRgEuwmMleU/YzrdlX0B7hCVpt+kLkOZvWEcIa8eMOZiSobLK2+tGwyCn+kOP8boz6/MX+zu+xgv7AZPsC4XaUzTA7osLDqegPX/qIW8XRUPRxk1nbGICNvxho7NkvIynP5Wjn+ZkyTQmjZOgryTs99CjpdnsQNsVSov6YDnfSOvXWHeybG5x3OP4S3JIce7oNvizXZwwsoY8iwBZy3k3KjeFue2s809H9nZmWdwiHIMVmTpXOOlGNvsprEu0YlaaAiTP7e8X9Roey7Qbxlrf+IX+/NtDdITLCYJbb8H39FNLsb3VxjYtBqUt72Z0u/X431PhznBnLD0sQ+D9ahj3Ef4RXisBQ+Ce8GtHMOya/Q7+EkCLZTP+ZRfwGV1rYVM4ly1Fpdfq3uCAY/G/nW9IYK65EWtl2U3gDzBjsaYOczhqIstsXrwPDgS4iZZ8MNRFgh7PC6u7Xusp1Wh9O1U+m1wOmTbFY/HtTdEduHR56hHy3j/A4yXBDkN3P29k/OCizQEXTZ5GeA6fWtXZHSBjVTUm7p2YJr0JDL2eimvOhozGCHLw4rzCVZeZOvRXJgMtCfI+3erEtoTRCbjHcHQBigxwkqOsySN+ZW2ygfeFWYXWyEzbQKUH+KElw1UunZdvvbBRO2Tmag/mpoMofRk1B9NBfpgwrLBRH82l659O1zlqWaAajfAVQEGAEyk4t4HpStTAAAAAElFTkSuQmCC";
    },
    78853: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);

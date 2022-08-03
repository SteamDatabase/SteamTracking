/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4601],
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
    15396: (t, e, i) => {
      "use strict";
      i.d(e, { Y: () => c });
      var o = i(70655),
        n = i(67294),
        s = i(22975),
        r = i(54452);
      class c extends n.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bRenderChildren: !1,
              nPrevRenderWidth: 0,
              nPrevRenderHeight: 0,
            }),
            (this.m_refContainer = n.createRef());
        }
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(t) {
          let e = this.state.bRenderChildren;
          if (e == t) return;
          if (e && !this.BLoadAndUnload()) return;
          let i = 0,
            o = 0;
          if (this.m_refContainer.current) {
            const t = this.m_refContainer.current.GetBoundingClientRect();
            t && ((i = t.width), (o = t.height));
          }
          this.setState({
            bRenderChildren: t,
            nPrevRenderWidth: i,
            nPrevRenderHeight: o,
          }),
            t && this.props.onRender && this.props.onRender();
        }
        render() {
          const t = this.props,
            {
              placeholderWidth: e,
              placeholderHeight: i,
              onRender: s,
              style: c,
              mode: l,
            } = t,
            h = (0, o._T)(t, [
              "placeholderWidth",
              "placeholderHeight",
              "onRender",
              "style",
              "mode",
            ]),
            a = this.state.bRenderChildren;
          let g = c;
          if (!a) {
            const t = this.state.nPrevRenderWidth || e,
              o = this.state.nPrevRenderHeight || i;
            (void 0 === o && void 0 === t) ||
              (g = Object.assign(Object.assign({}, c), {
                minHeight: o,
                minWidth: t,
              }));
          }
          const d = this.BLoadAndUnload() ? "repeated" : "once";
          return n.createElement(
            r.U,
            Object.assign({ ref: this.m_refContainer, style: g }, h, {
              onVisibilityChange: this.OnVisibilityChange,
              trigger: d,
            }),
            a && this.props.children
          );
        }
      }
      (0, o.gn)([s.ak], c.prototype, "OnVisibilityChange", null);
    },
    57148: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => m });
      var o,
        n = i(70655),
        s = i(67294),
        r = i(22975),
        c = i(29323),
        l = i(99533),
        h = i(41311),
        a = i(48341),
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
      let m = class extends s.Component {
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
            r = (0, u.Lh)(
              100 - i - e,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100
            );
          this.props.bLockAspectRatio &&
            (void 0 !== t.curLeftPosPct || void 0 !== t.curRightPosPct
              ? (r = s / this.m_aspectRatio)
              : (s = r * this.m_aspectRatio)),
            void 0 !== t.curLeftPosPct
              ? (o = 100 - n - s)
              : (n = 100 - (o + s)),
            void 0 !== t.curTopPosPct ? (e = 100 - i - r) : (i = 100 - (e + r));
          const c = 100 - n - o,
            l = 100 - i - e;
          this.IsValidPct(o) &&
            this.IsValidPct(n) &&
            this.IsValidPct(e) &&
            this.IsValidPct(i) &&
            this.IsValidPct(c) &&
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
                  s.createElement(a.II, {
                    className: p().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, h.Xx)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  s.createElement(a.II, {
                    className: p().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, h.Xx)("#SteamTV_LinkDescription"),
                    placeholder: (0, h.Xx)(
                      "#SteamTV_LinkDescription_Placeholder"
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  s.createElement(
                    "div",
                    { className: p().LinkRegionButtonContainer },
                    s.createElement(
                      a.zx,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, h.Xx)("#Button_OK"),
                      " "
                    ),
                    s.createElement(
                      a.zx,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, h.Xx)("#Button_Cancel")
                    )
                  )
                )
            )
          );
        }
      };
      (0, n.gn)([r.ak], m.prototype, "LinkRegionBoxRef", null),
        (0, n.gn)([r.ak], m.prototype, "OnMouseDown", null),
        (0, n.gn)([r.ak], m.prototype, "OnMouseMove", null),
        (0, n.gn)([r.ak], m.prototype, "OnMouseUp", null),
        (0, n.gn)([r.ak], m.prototype, "HandleDelete", null),
        (0, n.gn)([r.ak], m.prototype, "OnSetLinkURLChange", null),
        (0, n.gn)([r.ak], m.prototype, "OnSetLinkDescriptionChange", null),
        (0, n.gn)([r.ak], m.prototype, "OnSaveLink", null),
        (0, n.gn)([r.ak], m.prototype, "OnEditLink", null),
        (m = (0, n.gn)([c.Pi], m));
    },
    54452: (t, e, i) => {
      "use strict";
      i.d(e, { U: () => c });
      var o = i(70655),
        n = i(67294),
        s = i(53622),
        r = i(22975);
      class c extends n.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = n.createRef()),
            (this.m_elTracked = null),
            (this.m_bPreviouslyIntersecting = !1);
        }
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
        }
        GetBoundingClientRect() {
          return this.m_refElement.current
            ? this.m_refElement.current.getBoundingClientRect()
            : null;
        }
        DestroyObserver() {
          this.m_observer &&
            (this.m_observer.disconnect(),
            (this.m_observer = null),
            (this.m_elTracked = null));
        }
        componentWillUnmount() {
          this.DestroyObserver();
        }
        componentDidMount() {
          this.UpdateObserver(null);
        }
        componentDidUpdate(t) {
          this.UpdateObserver(t);
        }
        UpdateObserver(t) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            t &&
            t.rootMargin != this.m_observer.rootMargin &&
            this.DestroyObserver();
          let e = this.m_refElement.current;
          if (
            (this.m_observer &&
              e != this.m_elTracked &&
              (this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && e)
          ) {
            let t = { root: this.FindScrollableAncestor(e) };
            this.props.rootMargin && (t.rootMargin = this.props.rootMargin),
              (this.m_observer = new IntersectionObserver(
                this.OnIntersection,
                t
              ));
          }
          this.m_observer &&
            e &&
            e != this.m_elTracked &&
            (this.m_observer.observe(e), (this.m_elTracked = e));
        }
        FindScrollableAncestor(t) {
          return s.Jk(t, (t) => {
            const e = this.props.bHorizontal
              ? window.getComputedStyle(t).overflowX
              : window.getComputedStyle(t).overflowY;
            return (
              "scroll" == e ||
              "auto" == e ||
              !!t.classList.contains(c.GetScrollableClassname())
            );
          });
        }
        OnIntersection(t, e) {
          let i = !1;
          for (const e of t)
            if (e.isIntersecting) {
              i = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != i &&
            ((this.m_bPreviouslyIntersecting = i),
            this.props.onVisibilityChange && this.props.onVisibilityChange(i),
            i && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let t = this.props,
            {
              onVisibilityChange: e,
              rootMargin: i,
              trigger: s,
              bHorizontal: r,
            } = t,
            c = (0, o._T)(t, [
              "onVisibilityChange",
              "rootMargin",
              "trigger",
              "bHorizontal",
            ]);
          return n.createElement(
            "div",
            Object.assign({ ref: this.m_refElement }, c),
            this.props.children
          );
        }
      }
      (0, o.gn)([r.ak], c.prototype, "OnIntersection", null);
    },
  },
]);

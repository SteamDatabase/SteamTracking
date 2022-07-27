/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    FdXL: function (t, e, i) {
      t.exports = {
        LinkRegionDragBox: "linkregionbox_LinkRegionDragBox_Rtlc-",
        EdgeDown: "linkregionbox_EdgeDown_i9zrH",
        LinkRegionGridBox: "linkregionbox_LinkRegionGridBox_1Ob4A",
        LinkRegionEdge: "linkregionbox_LinkRegionEdge_2stP4",
        TopLeft: "linkregionbox_TopLeft_Clgi-",
        Top: "linkregionbox_Top_2Z9Vy",
        TopRight: "linkregionbox_TopRight_2-8Db",
        Left: "linkregionbox_Left_3ZwUw",
        Middle: "linkregionbox_Middle_1Heco",
        LinkRegionDelete: "linkregionbox_LinkRegionDelete_3Hb3w",
        LinkRegionSettings: "linkregionbox_LinkRegionSettings_VazMl",
        Right: "linkregionbox_Right_3h5fK",
        BottomLeft: "linkregionbox_BottomLeft_2CQe0",
        Bottom: "linkregionbox_Bottom_sIHlK",
        BottomRight: "linkregionbox_BottomRight_3lnwj",
        topleft: "linkregionbox_topleft_3W096",
        top: "linkregionbox_top_1iRW1",
        topright: "linkregionbox_topright_1Yrl7",
        left: "linkregionbox_left_2iBrm",
        right: "linkregionbox_right_15t6A",
        bottomleft: "linkregionbox_bottomleft_3SdBc",
        bottom: "linkregionbox_bottom_2kzZ9",
        bottomright: "linkregionbox_bottomright_2AKXk",
        middle: "linkregionbox_middle_1CS75",
        LinkRegionButtonContainer:
          "linkregionbox_LinkRegionButtonContainer_1ZJ42",
        DialogButton: "linkregionbox_DialogButton_nN2Q1",
        LinkRegionInfo: "linkregionbox_LinkRegionInfo_3TiV7",
        LinkText: "linkregionbox_LinkText_2TAc2",
      };
    },
    MnIK: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return c;
      });
      var o = i("mrSG"),
        n = i("q1tI"),
        s = i("opsS"),
        r = i("lypr");
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
            a = Object(o.c)(t, [
              "placeholderWidth",
              "placeholderHeight",
              "onRender",
              "style",
              "mode",
            ]),
            h = this.state.bRenderChildren;
          let g = c;
          if (!h) {
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
            r.a,
            Object.assign({ ref: this.m_refContainer, style: g }, a, {
              onVisibilityChange: this.OnVisibilityChange,
              trigger: d,
            }),
            h && this.props.children
          );
        }
      }
      Object(o.b)([s.b], c.prototype, "OnVisibilityChange", null);
    },
    XOvi: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return m;
      });
      var o,
        n = i("mrSG"),
        s = i("q1tI"),
        r = i("opsS"),
        c = i("TyAF"),
        l = i("qiKp"),
        a = i("TLQK"),
        h = i("Mgs7"),
        g = i("6Y59"),
        d = i("FdXL"),
        p = i.n(d),
        u = i("YyVH");
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
            (this.m_listeners = new l.c()),
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
                const e = Object(u.a)(
                    this.CalcLeftEdge(t.clientX),
                    0,
                    100 - this.state.curWidthPct
                  ),
                  i = 100 - (e + this.state.curWidthPct),
                  o = Object(u.a)(
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
            s = Object(u.a)(
              100 - n - o,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100
            ),
            r = Object(u.a)(
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
          return Object(u.a)(this.GetXPercent(t), 0, 100);
        }
        CalcRightEdge(t) {
          return Object(u.a)(
            100 - (this.GetXPercent(t) + this.state.curWidthPct),
            0,
            100
          );
        }
        CalcTopEdge(t) {
          return Object(u.a)(this.GetYPercent(t), 0, 100);
        }
        CalcBottomEdge(t) {
          return Object(u.a)(
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
          return Object(n.a)(this, void 0, void 0, function* () {
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
            e = p.a.LinkRegionDragBox;
          return (
            null !== this.state.EdgeDown &&
              (e += ` ${p.a.EdgeDown} ` + p.a[this.state.EdgeDown]),
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
                { className: p.a.LinkRegionGridBox },
                s.createElement("div", {
                  className: `${p.a.LinkRegionEdge} ${p.a.TopLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.topleft);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p.a.LinkRegionEdge} ${p.a.Top}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.top);
                  },
                }),
                s.createElement("div", {
                  className: `${p.a.LinkRegionEdge} ${p.a.TopRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.topright);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p.a.LinkRegionEdge} ${p.a.Left}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.left);
                  },
                  draggable: !1,
                }),
                s.createElement(
                  "div",
                  {
                    className: `${p.a.LinkRegionEdge} ${p.a.Middle}`,
                    onMouseDown: (t) => {
                      this.OnMouseDown(t, o.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    s.createElement(
                      "div",
                      {
                        className: p.a.LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      s.createElement(g.Eb, null)
                    ),
                  !this.props.bDisableLink &&
                    s.createElement(
                      "div",
                      {
                        className: p.a.LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      s.createElement(g.U, null)
                    ),
                  s.createElement(
                    "div",
                    { className: p.a.LinkText },
                    " ",
                    this.m_strDescription,
                    " "
                  )
                ),
                s.createElement("div", {
                  className: `${p.a.LinkRegionEdge} ${p.a.Right}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.right);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p.a.LinkRegionEdge} ${p.a.BottomLeft}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.bottomleft);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p.a.LinkRegionEdge} ${p.a.Bottom}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.bottom);
                  },
                  draggable: !1,
                }),
                s.createElement("div", {
                  className: `${p.a.LinkRegionEdge} ${p.a.BottomRight}`,
                  onMouseDown: (t) => {
                    this.OnMouseDown(t, o.bottomright);
                  },
                  draggable: !1,
                })
              ),
              this.state.bEditingLink &&
                s.createElement(
                  "div",
                  { className: p.a.LinkRegionInfo },
                  s.createElement(h.A, {
                    className: p.a.LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: Object(a.f)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  s.createElement(h.A, {
                    className: p.a.LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: Object(a.f)("#SteamTV_LinkDescription"),
                    placeholder: Object(a.f)(
                      "#SteamTV_LinkDescription_Placeholder"
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  s.createElement(
                    "div",
                    { className: p.a.LinkRegionButtonContainer },
                    s.createElement(
                      h.e,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      Object(a.f)("#Button_OK"),
                      " "
                    ),
                    s.createElement(
                      h.e,
                      { onClick: this.OnEditLink },
                      " ",
                      Object(a.f)("#Button_Cancel")
                    )
                  )
                )
            )
          );
        }
      };
      Object(n.b)([r.b], m.prototype, "LinkRegionBoxRef", null),
        Object(n.b)([r.b], m.prototype, "OnMouseDown", null),
        Object(n.b)([r.b], m.prototype, "OnMouseMove", null),
        Object(n.b)([r.b], m.prototype, "OnMouseUp", null),
        Object(n.b)([r.b], m.prototype, "HandleDelete", null),
        Object(n.b)([r.b], m.prototype, "OnSetLinkURLChange", null),
        Object(n.b)([r.b], m.prototype, "OnSetLinkDescriptionChange", null),
        Object(n.b)([r.b], m.prototype, "OnSaveLink", null),
        Object(n.b)([r.b], m.prototype, "OnEditLink", null),
        (m = Object(n.b)([c.a], m));
    },
    lypr: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return c;
      });
      var o = i("mrSG"),
        n = i("q1tI"),
        s = i("X3Ds"),
        r = i("opsS");
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
          return s.l(t, (t) => {
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
            c = Object(o.c)(t, [
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
      Object(o.b)([r.b], c.prototype, "OnIntersection", null);
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    "/HXi": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var o = n("mrSG"),
        r = n("q1tI"),
        i = n("hCpY"),
        s = n("y0CV");
      class a extends r.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bRenderChildren: !1,
              nPrevRenderWidth: 0,
              nPrevRenderHeight: 0,
            }),
            (this.m_refContainer = r.createRef());
        }
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let n = 0,
            o = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((n = e.width), (o = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: n,
            nPrevRenderHeight: o,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const e = this.props,
            {
              placeholderWidth: t,
              placeholderHeight: n,
              onRender: i,
              style: a,
              mode: c,
            } = e,
            l = Object(o.c)(e, [
              "placeholderWidth",
              "placeholderHeight",
              "onRender",
              "style",
              "mode",
            ]),
            m = this.state.bRenderChildren;
          let d = a;
          if (!m) {
            const e = this.state.nPrevRenderWidth || t,
              o = this.state.nPrevRenderHeight || n;
            (void 0 === o && void 0 === e) ||
              (d = Object.assign(Object.assign({}, a), {
                minHeight: o,
                minWidth: e,
              }));
          }
          const p = this.BLoadAndUnload() ? "repeated" : "once";
          return r.createElement(
            s.a,
            Object.assign({ ref: this.m_refContainer, style: d }, l, {
              onVisibilityChange: this.OnVisibilityChange,
              trigger: p,
            }),
            m && this.props.children
          );
        }
      }
      Object(o.b)([i.b], a.prototype, "OnVisibilityChange", null);
    },
    "/IT7": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      });
      var o,
        r = n("mrSG"),
        i = n("q1tI"),
        s = n("hCpY"),
        a = n("TyAF"),
        c = n("3u1o"),
        l = n("GXif"),
        m = n("7ast"),
        d = n("e356"),
        p = n("Ck/Z"),
        h = n.n(p),
        u = n("7VqR");
      !(function (e) {
        (e.topleft = "topleft"),
          (e.top = "top"),
          (e.topright = "topright"),
          (e.left = "left"),
          (e.middle = "middle"),
          (e.right = "right"),
          (e.bottomleft = "bottomleft"),
          (e.bottom = "bottom"),
          (e.bottomright = "bottomright");
      })(o || (o = {}));
      let g = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_fnMouseUp = null),
            (this.m_fnMouseMove = null),
            (this.m_listeners = new c.c()),
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
        LinkRegionBoxRef(e) {
          this.m_elLinkRegionBox = e;
        }
        OnMouseDown(e, t) {
          (this.m_fnMouseUp = (e) => {
            this.OnMouseUp(e, t);
          }),
            (this.m_fnMouseMove = (e) => {
              this.OnMouseMove(e, t);
            }),
            this.setState({ EdgeDown: t }),
            (this.m_rectLinkRegion =
              this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
            (this.m_nLocalOffsetXPct =
              ((e.clientX - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
              this.state.curLeftPosPct),
            (this.m_nLocalOffsetYPct =
              ((e.clientY - this.m_rectLinkRegion.top) /
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
            e.preventDefault(),
            e.stopPropagation();
        }
        OnMouseMove(e, t) {
          if (void 0 !== this.state.EdgeDown) {
            switch ((e.shiftKey && this.m_fnMouseUp(), t)) {
              case o.left:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case o.right:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case o.top:
                this.UpdateState({ curTopPosPct: this.CalcTopEdge(e.clientY) });
                break;
              case o.bottom:
                this.UpdateState({
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case o.topleft:
                this.UpdateState({
                  curTopPosPct: this.CalcBottomEdge(e.clientY),
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case o.topright:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(e.clientY),
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case o.bottomleft:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case o.bottomright:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case o.middle: {
                const t = Object(u.a)(
                    this.CalcLeftEdge(e.clientX),
                    0,
                    100 - this.state.curWidthPct
                  ),
                  n = 100 - (t + this.state.curWidthPct),
                  o = Object(u.a)(
                    this.CalcTopEdge(e.clientY),
                    0,
                    100 - this.state.curHeightPct
                  ),
                  r = {
                    curLeftPosPct: t,
                    curRightPosPct: n,
                    curTopPosPct: o,
                    curBottomPosPct: 100 - (o + this.state.curHeightPct),
                  };
                this.setState(r);
                break;
              }
            }
            e.preventDefault(), e.stopPropagation();
          }
        }
        IsValidPct(e) {
          return e >= 0 && e <= 100;
        }
        UpdateState(e) {
          let t =
              void 0 !== e.curTopPosPct
                ? e.curTopPosPct
                : this.state.curTopPosPct,
            n =
              void 0 !== e.curBottomPosPct
                ? e.curBottomPosPct
                : this.state.curBottomPosPct,
            o =
              void 0 !== e.curLeftPosPct
                ? e.curLeftPosPct
                : this.state.curLeftPosPct,
            r =
              void 0 !== e.curRightPosPct
                ? e.curRightPosPct
                : this.state.curRightPosPct,
            i = Object(u.a)(
              100 - r - o,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100
            ),
            s = Object(u.a)(
              100 - n - t,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100
            );
          this.props.bLockAspectRatio &&
            (void 0 !== e.curLeftPosPct || void 0 !== e.curRightPosPct
              ? (s = i / this.m_aspectRatio)
              : (i = s * this.m_aspectRatio)),
            void 0 !== e.curLeftPosPct
              ? (o = 100 - r - i)
              : (r = 100 - (o + i)),
            void 0 !== e.curTopPosPct ? (t = 100 - n - s) : (n = 100 - (t + s));
          const a = 100 - r - o,
            c = 100 - n - t;
          this.IsValidPct(o) &&
            this.IsValidPct(r) &&
            this.IsValidPct(t) &&
            this.IsValidPct(n) &&
            this.IsValidPct(a) &&
            this.IsValidPct(c) &&
            this.setState({
              curLeftPosPct: o,
              curRightPosPct: r,
              curTopPosPct: t,
              curBottomPosPct: n,
            });
        }
        GetXPercent(e) {
          return (
            ((e - this.m_rectLinkRegion.left) /
              (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
              100 -
            this.m_nLocalOffsetXPct
          );
        }
        GetYPercent(e) {
          return (
            ((e - this.m_rectLinkRegion.top) /
              (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
              100 -
            this.m_nLocalOffsetYPct
          );
        }
        CalcLeftEdge(e) {
          return Object(u.a)(this.GetXPercent(e), 0, 100);
        }
        CalcRightEdge(e) {
          return Object(u.a)(
            100 - (this.GetXPercent(e) + this.state.curWidthPct),
            0,
            100
          );
        }
        CalcTopEdge(e) {
          return Object(u.a)(this.GetYPercent(e), 0, 100);
        }
        CalcBottomEdge(e) {
          return Object(u.a)(
            100 - (this.GetYPercent(e) + this.state.curHeightPct),
            0,
            100
          );
        }
        OnMouseUp(e, t) {
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
          return Object(r.a)(this, void 0, void 0, function* () {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          });
        }
        OnSetLinkURLChange(e) {
          this.setState({
            text_link_url: e.target.value,
            valid_link: this.validateUrl(e.target.value),
          });
        }
        OnSetLinkDescriptionChange(e) {
          this.setState({ text_link_description: e.target.value });
        }
        validateUrl(e) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
            e
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
          let e = {
              left: this.state.curLeftPosPct + "%",
              top: this.state.curTopPosPct + "%",
              right: this.state.curRightPosPct + "%",
              bottom: this.state.curBottomPosPct + "%",
            },
            t = h.a.LinkRegionDragBox;
          return (
            null !== this.state.EdgeDown &&
              (t += ` ${h.a.EdgeDown} ` + h.a[this.state.EdgeDown]),
            i.createElement(
              "div",
              {
                className: t,
                style: e,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
              },
              i.createElement(
                "div",
                { className: h.a.LinkRegionGridBox },
                i.createElement("div", {
                  className: `${h.a.LinkRegionEdge} ${h.a.TopLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, o.topleft);
                  },
                  draggable: !1,
                }),
                i.createElement("div", {
                  className: `${h.a.LinkRegionEdge} ${h.a.Top}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, o.top);
                  },
                }),
                i.createElement("div", {
                  className: `${h.a.LinkRegionEdge} ${h.a.TopRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, o.topright);
                  },
                  draggable: !1,
                }),
                i.createElement("div", {
                  className: `${h.a.LinkRegionEdge} ${h.a.Left}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, o.left);
                  },
                  draggable: !1,
                }),
                i.createElement(
                  "div",
                  {
                    className: `${h.a.LinkRegionEdge} ${h.a.Middle}`,
                    onMouseDown: (e) => {
                      this.OnMouseDown(e, o.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    i.createElement(
                      "div",
                      {
                        className: h.a.LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      i.createElement(d.Gb, null)
                    ),
                  !this.props.bDisableLink &&
                    i.createElement(
                      "div",
                      {
                        className: h.a.LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      i.createElement(d.W, null)
                    ),
                  i.createElement(
                    "div",
                    { className: h.a.LinkText },
                    " ",
                    this.m_strDescription,
                    " "
                  )
                ),
                i.createElement("div", {
                  className: `${h.a.LinkRegionEdge} ${h.a.Right}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, o.right);
                  },
                  draggable: !1,
                }),
                i.createElement("div", {
                  className: `${h.a.LinkRegionEdge} ${h.a.BottomLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, o.bottomleft);
                  },
                  draggable: !1,
                }),
                i.createElement("div", {
                  className: `${h.a.LinkRegionEdge} ${h.a.Bottom}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, o.bottom);
                  },
                  draggable: !1,
                }),
                i.createElement("div", {
                  className: `${h.a.LinkRegionEdge} ${h.a.BottomRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, o.bottomright);
                  },
                  draggable: !1,
                })
              ),
              this.state.bEditingLink &&
                i.createElement(
                  "div",
                  { className: h.a.LinkRegionInfo },
                  i.createElement(m.z, {
                    className: h.a.LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: Object(l.g)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  i.createElement(m.z, {
                    className: h.a.LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: Object(l.g)("#SteamTV_LinkDescription"),
                    placeholder: Object(l.g)(
                      "#SteamTV_LinkDescription_Placeholder"
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  i.createElement(
                    "div",
                    { className: h.a.LinkRegionButtonContainer },
                    i.createElement(
                      m.e,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      Object(l.g)("#Button_OK"),
                      " "
                    ),
                    i.createElement(
                      m.e,
                      { onClick: this.OnEditLink },
                      " ",
                      Object(l.g)("#Button_Cancel")
                    )
                  )
                )
            )
          );
        }
      };
      Object(r.b)([s.b], g.prototype, "LinkRegionBoxRef", null),
        Object(r.b)([s.b], g.prototype, "OnMouseDown", null),
        Object(r.b)([s.b], g.prototype, "OnMouseMove", null),
        Object(r.b)([s.b], g.prototype, "OnMouseUp", null),
        Object(r.b)([s.b], g.prototype, "HandleDelete", null),
        Object(r.b)([s.b], g.prototype, "OnSetLinkURLChange", null),
        Object(r.b)([s.b], g.prototype, "OnSetLinkDescriptionChange", null),
        Object(r.b)([s.b], g.prototype, "OnSaveLink", null),
        Object(r.b)([s.b], g.prototype, "OnEditLink", null),
        (g = Object(r.b)([a.a], g));
    },
    "55de": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return D;
      }),
        n.d(t, "a", function () {
          return U;
        }),
        n.d(t, "c", function () {
          return V;
        }),
        n.d(t, "d", function () {
          return W;
        }),
        n.d(t, "e", function () {
          return re;
        });
      var o = n("mrSG"),
        r = n("2vnA"),
        i = n("TyAF"),
        s = n("q1tI"),
        a = n.n(s),
        c = n("i8i4"),
        l = n("G7ky"),
        m = n("QwK/"),
        d = (n("Wjgn"), n("RrtU"));
      n("rSrx");
      class p extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          if (null == this.props.text)
            return s.createElement(s.Fragment, null, this.props.children);
          let e;
          if (
            ((e =
              this.props.text instanceof Array
                ? this.props.text
                    .map((e) => (e ? e.toString() : ""))
                    .filter((e) => e.length > 0)
                    .join("\n")
                : this.props.text.toString()),
            1 == s.Children.count(this.props.children))
          ) {
            let t = s.Children.only(this.props.children);
            return s.cloneElement(t, {
              "data-copystyle": this.props.style,
              "data-copytext": e,
            });
          }
          return (
            console.log(
              `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${this.props.style} copytext=${e}`
            ),
            s.createElement(s.Fragment, null, this.props.children)
          );
        }
      }
      p.defaultProps = { text: "" };
      var h = n("SS8s"),
        u = n("GbHM"),
        g = n("GXif"),
        E = n("hCpY");
      function _(e, t) {
        return e + "economy/sticker/" + t;
      }
      n("3y2B");
      var f = n("/Q1a"),
        b = n("7ast"),
        v = n("Lsvi"),
        S = n("tXBB"),
        k = n("lJR3");
      class P extends a.a.Component {
        constructor(e) {
          super(e), (this.state = { activeIndex: e.initialActiveIndex || 0 });
        }
        render() {
          const { config: e } = this.props,
            { activeIndex: t } = this.state,
            n = e[t] && e[t].renderContent ? e[t].renderContent() : null,
            o = e.length > 1,
            r = o
              ? ({ detail: { button: t } }) => {
                  t === S.a.BUMPER_LEFT
                    ? this.setState({
                        activeIndex: Math.max(0, this.state.activeIndex - 1),
                      })
                    : t === S.a.BUMPER_RIGHT &&
                      this.setState({
                        activeIndex: Math.min(
                          e.length - 1,
                          this.state.activeIndex + 1
                        ),
                      });
                }
              : void 0;
          return a.a.createElement(
            v.a,
            { className: k.Picker, onButtonDown: r },
            o && a.a.createElement(C, null, this.RenderTabs()),
            n
          );
        }
        RenderTabs() {
          return this.props.config.map(({ renderTab: e }, t) => {
            const n = this.state.activeIndex === t;
            return a.a.createElement(
              L,
              {
                key: t,
                active: n,
                onClick: () => this.setState({ activeIndex: t }),
              },
              e(n)
            );
          });
        }
      }
      function C(e) {
        return a.a.createElement(
          v.a,
          { className: k.Tabs, "flow-children": "row" },
          e.children
        );
      }
      function O(e) {
        return a.a.createElement("div", { className: k.Content }, e.children);
      }
      function L(e) {
        const { active: t, children: n, onClick: o } = e;
        return a.a.createElement(
          v.a,
          {
            className: Object(u.a)(k.Tab, t && k.Active),
            focusClassName: k.Focus,
            onActivate: o,
          },
          a.a.createElement(
            "div",
            { className: Object(u.a)(k.TabContent, t && k.Active) },
            n
          )
        );
      }
      function I(e) {
        const {
          items: t,
          renderItem: n,
          onItemSelect: o,
          keyExtractor: r,
          renderEmpty: i,
        } = e;
        let s = t.map((e, i) =>
          a.a.createElement(
            v.a,
            {
              key: r(e),
              className: k.Item,
              onActivate: () => o(t[i]),
              autoFocus: 0 === i,
              focusClassName: k.Focus,
            },
            n(t[i])
          )
        );
        return (
          0 === t.length && i && (s = i()),
          a.a.createElement(
            v.a,
            { "flow-children": "grid", className: k.ItemList },
            s
          )
        );
      }
      function R(e) {
        const { title: t, onFilterChange: n, filter: r, onSubmit: i } = e,
          s = Object(o.c)(e, ["title", "onFilterChange", "filter", "onSubmit"]);
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            O,
            null,
            a.a.createElement(
              j,
              { title: t },
              a.a.createElement(I, Object.assign({}, s))
            )
          ),
          a.a.createElement(w, { value: r, onChange: n, onSubmit: i })
        );
      }
      function x(e) {
        const { onFilterChange: t, filter: n, sections: r, title: i } = e;
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            O,
            null,
            i &&
              a.a.createElement("div", { className: k.SectionedPageTitle }, i),
            r.map((e) => {
              var { title: t } = e,
                n = Object(o.c)(e, ["title"]);
              return a.a.createElement(
                j,
                { title: t, key: t },
                a.a.createElement(I, Object.assign({}, n))
              );
            })
          ),
          a.a.createElement(w, { value: n, onChange: t })
        );
      }
      function j(e) {
        return a.a.createElement(
          "div",
          { className: k.Section },
          a.a.createElement("div", { className: k.SectionTitle }, e.title),
          a.a.createElement("div", { className: k.SectionContent }, e.children)
        );
      }
      function w(e) {
        const { value: t, onChange: n, onSubmit: o } = e;
        return a.a.createElement(
          "div",
          { className: k.FilterInputContainer },
          a.a.createElement(b.z, {
            type: "text",
            placeholder: "Search...",
            className: k.FilterInput,
            value: t,
            onChange: (e) => n(e.target.value),
            onSubmit: o,
          })
        );
      }
      function B(e) {
        const { className: t } = e,
          n = Object(o.c)(e, ["className"]);
        return a.a.createElement(
          "div",
          Object.assign({ className: Object(u.a)(t, k.AddonPickerMessage) }, n)
        );
      }
      var A = n("CfZL"),
        y = n.n(A),
        M = n("tQrp");
      class D extends a.a.PureComponent {
        constructor() {
          super(...arguments),
            (this.state = { showHover: !1 }),
            (this.m_ref = a.a.createRef());
        }
        OnMouseEnter(e) {
          this.setState({ showHover: !0 });
        }
        OnMouseLeave(e) {
          this.setState({ showHover: !1 });
        }
        render() {
          const { emoticon: e, large: t, emoticonHoverStore: n } = this.props,
            o = `:${e}:`,
            r = t && n.BLoaded(e) ? n.Get(e).url : m.a.GetEmoticonURL(e, t);
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              p,
              { text: o, style: "merge-adjacent" },
              a.a.createElement("img", {
                src: r,
                className: Object(u.a)(y.a.emoticon, t ? y.a.large : void 0),
                "data-emoticon": e,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                ref: this.m_ref,
              })
            ),
            this.state.showHover &&
              a.a.createElement(N, {
                target: this.m_ref.current,
                store: n,
                emoticon: e,
              })
          );
        }
      }
      Object(o.b)([E.b], D.prototype, "OnMouseEnter", null),
        Object(o.b)([E.b], D.prototype, "OnMouseLeave", null);
      const N = Object(i.a)((e) => {
          const { target: t, store: n, emoticon: o } = e,
            r = n.Get(o);
          return a.a.createElement(
            T,
            {
              target: t,
              title: `:${o}:`,
              subtitle: r && r.app_name ? r.app_name : void 0,
            },
            a.a.createElement(D, {
              emoticon: o,
              emoticonHoverStore: n,
              large: !0,
            })
          );
        }),
        T = ({ target: e, title: t, subtitle: n, children: o }) =>
          a.a.createElement(
            l.a,
            {
              target: e,
              style: { zIndex: 1700 },
              className: y.a.EmoticonHover,
            },
            o,
            a.a.createElement(
              "div",
              { className: y.a.Info },
              a.a.createElement(
                "div",
                { className: y.a.Name },
                t || a.a.createElement("span", null, " ")
              ),
              a.a.createElement(
                "div",
                { className: y.a.AppName },
                n || a.a.createElement("span", null, " ")
              )
            )
          );
      function H(e) {
        return e.recent_emoticons;
      }
      function G(e) {
        return e.recent_stickers;
      }
      function F(e) {
        return H(e).length + G(e).length > 0;
      }
      const U = Object(i.a)((e) => {
        const {
          emoticonStore: t,
          emoticonHoverStore: n,
          roomEffectSettings: o,
          strFlairGroupID: i,
          onEmoticonSelected: c,
          onRoomEffectSelected: l,
          onStickerSelected: m,
        } = e;
        !(function (e) {
          const [t, n] = Object(s.useState)(e.is_initialized);
          Object(s.useEffect)(() => {
            if (!e.is_initialized) {
              e.UpdateEmoticonList();
              const t = Object(r.M)(
                () => e.is_initialized,
                () => n(e.is_initialized)
              );
              return () => t();
            }
            return () => {};
          }, [e]);
        })(t);
        const d = [];
        return (
          F(t) &&
            d.push({
              renderTab: (e) =>
                a.a.createElement(
                  "span",
                  {
                    title: Object(g.g)("#AddonPicker_RecentlyUsed"),
                    className: Object(u.a)(
                      y.a.PickerTab,
                      y.a.Clock,
                      e && y.a.ActiveTab
                    ),
                  },
                  a.a.createElement(le, null)
                ),
              renderContent: () =>
                a.a.createElement(Y, {
                  store: t,
                  hoverStore: n,
                  onEmoticonSelect: (e) => c(e.name),
                  onStickerSelect: (e) => m(e.name),
                  flairGroupID: i,
                }),
            }),
          a.a.createElement(
            h.c,
            null,
            a.a.createElement(P, {
              config: [
                ...d,
                {
                  renderTab: (e) =>
                    a.a.createElement(
                      "span",
                      {
                        title: Object(g.g)("#AddonPicker_Emoticons"),
                        className: Object(u.a)(
                          y.a.PickerTab,
                          e && y.a.ActiveTab
                        ),
                      },
                      a.a.createElement(ae, null)
                    ),
                  renderContent: () =>
                    a.a.createElement(Z, {
                      store: t,
                      hoverStore: n,
                      onItemSelect: (e) => c(e.name),
                      flairGroupID: i,
                    }),
                },
                {
                  renderTab: (e) =>
                    a.a.createElement(
                      "span",
                      {
                        title: Object(g.g)("#AddonPicker_Stickers"),
                        className: Object(u.a)(
                          y.a.PickerTab,
                          e && y.a.ActiveTab
                        ),
                      },
                      a.a.createElement(se, null)
                    ),
                  renderContent: () =>
                    a.a.createElement(q, {
                      store: t,
                      onItemSelect: (e) => m(e.name),
                    }),
                },
                {
                  renderTab: (e) =>
                    a.a.createElement(
                      "span",
                      {
                        title: Object(g.g)("#AddonPicker_RoomEffects"),
                        className: Object(u.a)(
                          y.a.PickerTab,
                          e && y.a.ActiveTab
                        ),
                      },
                      a.a.createElement(ce, null)
                    ),
                  renderContent: () =>
                    a.a.createElement(X, {
                      store: t,
                      effectSettings: o,
                      onItemSelect: (e) => l(e.name),
                    }),
                },
              ],
            })
          )
        );
      });
      let z = class extends a.a.Component {
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = Object(r.M)(
              () => t.is_initialized,
              () => this.forceUpdate()
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          const {
              emoticonStore: e,
              emoticonHoverStore: t,
              onEmoticonSelected: n,
              onStickerSelected: o,
              strFlairGroupID: r,
            } = this.props,
            i = [];
          return (
            F(e) &&
              i.push({
                renderTab: (e) =>
                  a.a.createElement(
                    "span",
                    {
                      title: Object(g.g)("#AddonPicker_RecentlyUsed"),
                      className: Object(u.a)(
                        y.a.PickerTab,
                        y.a.Clock,
                        e && y.a.ActiveTab
                      ),
                    },
                    a.a.createElement(le, null)
                  ),
                renderContent: () =>
                  a.a.createElement(Y, {
                    store: e,
                    hoverStore: t,
                    onEmoticonSelect: (e) => n(e.name),
                    onStickerSelect: (e) => o(e.name),
                    flairGroupID: r,
                  }),
              }),
            a.a.createElement(
              h.c,
              null,
              a.a.createElement(P, {
                config: [
                  ...i,
                  {
                    renderTab: (e) =>
                      a.a.createElement(
                        "span",
                        {
                          title: Object(g.g)("#AddonPicker_Emoticons"),
                          className: Object(u.a)(
                            y.a.PickerTab,
                            e && y.a.ActiveTab
                          ),
                        },
                        a.a.createElement(ae, null)
                      ),
                    renderContent: () =>
                      a.a.createElement(Z, {
                        store: e,
                        hoverStore: t,
                        onItemSelect: (e) => n(e.name),
                        flairGroupID: r,
                      }),
                  },
                  {
                    renderTab: (e) =>
                      a.a.createElement(
                        "span",
                        {
                          title: Object(g.g)("#AddonPicker_Stickers"),
                          className: Object(u.a)(
                            y.a.PickerTab,
                            e && y.a.ActiveTab
                          ),
                        },
                        a.a.createElement(se, null)
                      ),
                    renderContent: () =>
                      a.a.createElement(q, {
                        store: e,
                        onItemSelect: (e) => o(e.name),
                      }),
                  },
                ],
              })
            )
          );
        }
      };
      z = Object(o.b)([i.a], z);
      class V extends a.a.Component {
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = Object(r.M)(
              () => t.is_initialized,
              () => this.forceUpdate()
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return a.a.createElement(
            h.c,
            null,
            a.a.createElement(P, {
              config: [
                {
                  renderTab: () =>
                    a.a.createElement(
                      "span",
                      {
                        title: Object(g.g)("#AddonPicker_Emoticons"),
                        className: y.a.PickerTab,
                      },
                      a.a.createElement(ae, null)
                    ),
                  renderContent: () =>
                    a.a.createElement(J, {
                      store: this.props.emoticonStore,
                      hoverStore: this.props.emoticonHoverStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            })
          );
        }
      }
      class W extends a.a.Component {
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = Object(r.M)(
              () => t.is_initialized,
              () => this.forceUpdate()
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return a.a.createElement(
            h.c,
            null,
            a.a.createElement(P, {
              config: [
                {
                  renderTab: () =>
                    a.a.createElement(
                      "span",
                      {
                        title: Object(g.g)("#AddonPicker_Emoticons"),
                        className: y.a.PickerTab,
                      },
                      a.a.createElement(ae, null)
                    ),
                  renderContent: () =>
                    a.a.createElement(K, {
                      store: this.props.emoticonStore,
                      hoverStore: this.props.emoticonHoverStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            })
          );
        }
      }
      class Y extends a.a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const {
              store: e,
              hoverStore: t,
              onEmoticonSelect: n,
              onStickerSelect: o,
            } = this.props,
            { filter: r } = this.state,
            i = [];
          return (
            H(e) &&
              i.push({
                title: Object(g.g)("#AddonPicker_RecentEmoticons"),
                items: m.a.FilterEmoticons(H(e), r),
                onItemSelect: n,
                renderItem: (e) =>
                  a.a.createElement(Q, { emoticon: e, emoticonHoverStore: t }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  a.a.createElement(
                    B,
                    null,
                    r
                      ? Object(g.g)("#AddonPicker_NoResults")
                      : Object(g.g)(
                          "#AddonPicker_NoRecent",
                          Object(g.g)("#AddonPicker_Emoticons")
                        )
                  ),
              }),
            G(e).length &&
              i.push({
                title: Object(g.g)("#AddonPicker_RecentStickers"),
                items: m.a.FilterStickers(G(e), r),
                onItemSelect: o,
                renderItem: (e) => a.a.createElement(ee, { sticker: e }),
                keyExtractor: ({ name: e }) => e,
                renderEmpty: () =>
                  a.a.createElement(
                    B,
                    null,
                    r
                      ? Object(g.g)("#AddonPicker_NoResults")
                      : Object(g.g)(
                          "#AddonPicker_NoRecent",
                          Object(g.g)("#AddonPicker_Stickers")
                        )
                  ),
              }),
            a.a.createElement(x, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: r,
              sections: i,
            })
          );
        }
      }
      class Z extends a.a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const {
              store: e,
              hoverStore: t,
              onItemSelect: n,
              flairGroupID: o,
            } = this.props,
            { filter: r } = this.state,
            i = !r && o ? e.GetFlairListByGroupID(o) : e.emoticon_list,
            s = m.a.FilterEmoticons(i, r).slice(0, 1e3);
          return a.a.createElement(R, {
            title: Object(g.g)("#AddonPicker_Emoticons"),
            items: s,
            onItemSelect: n,
            renderItem: (e) =>
              a.a.createElement(Q, { emoticon: e, emoticonHoverStore: t }),
            keyExtractor: (e) => e.name,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: r,
            onSubmit: () => n(s[0]),
            renderEmpty: () =>
              r
                ? a.a.createElement(
                    B,
                    null,
                    Object(g.g)("#AddonPicker_NoResults")
                  )
                : a.a.createElement($, null),
          });
        }
      }
      function $() {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            B,
            null,
            Object(g.g)(
              "#AddonPicker_NoneOwned",
              Object(g.g)("#AddonPicker_Emoticons")
            )
          ),
          a.a.createElement(
            B,
            null,
            Object(g.p)(
              "#AddonPicker_AcquireAtPointsShopOrMarket",
              a.a.createElement(
                M.b,
                { href: `${f.d.STORE_BASE_URL}points/shop/c/emoticons` },
                Object(g.g)("#AddonPicker_AcquireAtPointsShop_Link")
              ),
              a.a.createElement(
                M.b,
                { href: `${f.d.COMMUNITY_BASE_URL}market` },
                Object(g.g)("#AddonPicker_AcquireAtPointsShopOrMarket_Link")
              )
            )
          )
        );
      }
      class q extends a.a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const { store: e, onItemSelect: t } = this.props,
            { filter: n } = this.state,
            o = m.a.FilterStickers(e.GetStickerList(), n);
          return a.a.createElement(R, {
            title: Object(g.g)("#EmoticonPicker_StickerHeading"),
            items: o,
            onItemSelect: t,
            renderItem: (e) => a.a.createElement(ee, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: n,
            onSubmit: () => t(o[0]),
            renderEmpty: () =>
              n
                ? a.a.createElement(
                    B,
                    null,
                    Object(g.g)("#AddonPicker_NoResults")
                  )
                : a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      B,
                      null,
                      Object(g.g)(
                        "#AddonPicker_NoneOwned",
                        Object(g.g)("#AddonPicker_Stickers")
                      )
                    ),
                    a.a.createElement(
                      B,
                      null,
                      Object(g.p)(
                        "#AddonPicker_AcquireAtPointsShop",
                        a.a.createElement(
                          M.b,
                          {
                            href: `${f.d.STORE_BASE_URL}points/shop/c/stickers`,
                          },
                          Object(g.g)("#AddonPicker_AcquireAtPointsShop_Link")
                        )
                      )
                    )
                  ),
          });
        }
      }
      class X extends a.a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const { store: e, effectSettings: t, onItemSelect: n } = this.props,
            { filter: o } = this.state,
            r = e.GetEffectList().filter(({ name: e }) => e.indexOf(o) > -1);
          return a.a.createElement(R, {
            title: Object(g.g)("#EmoticonPicker_EffectHeading"),
            items: r,
            onItemSelect: n,
            renderItem: (e) =>
              a.a.createElement(ne, { effect: e, roomEffectSettings: t }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: o,
            onSubmit: () => n(r[0]),
            renderEmpty: () =>
              o
                ? a.a.createElement(
                    B,
                    null,
                    Object(g.g)("#AddonPicker_NoResults")
                  )
                : a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      B,
                      null,
                      Object(g.g)(
                        "#AddonPicker_NoneOwned",
                        Object(g.g)("#AddonPicker_RoomEffects")
                      )
                    ),
                    a.a.createElement(
                      B,
                      null,
                      Object(g.p)(
                        "#AddonPicker_AcquireAtPointsShop",
                        a.a.createElement(
                          M.b,
                          {
                            href: `${f.d.STORE_BASE_URL}points/shop/c/chateffects`,
                          },
                          Object(g.g)("#AddonPicker_AcquireAtPointsShop_Link")
                        )
                      )
                    )
                  ),
          });
        }
      }
      let J = class extends a.a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const {
              store: e,
              hoverStore: t,
              onItemSelect: n,
              flairGroupID: o,
            } = this.props,
            { filter: r } = this.state,
            i = [];
          return (
            H(e).length &&
              i.push({
                title: Object(g.g)("#AddonPicker_RecentEmoticons"),
                items: m.a.FilterEmoticons(H(e), r),
                onItemSelect: n,
                renderItem: (e) =>
                  a.a.createElement(Q, { emoticon: e, emoticonHoverStore: t }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  a.a.createElement(
                    B,
                    null,
                    r
                      ? Object(g.g)("#AddonPicker_NoResults")
                      : Object(g.g)(
                          "#AddonPicker_NoRecent",
                          Object(g.g)("#AddonPicker_Emoticons")
                        )
                  ),
              }),
            a.a.createElement(x, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: r,
              sections: [
                ...i,
                {
                  title: Object(g.g)("#AddonPicker_AllEmoticons"),
                  items: m.a.FilterStickers(e.emoticon_list, r).slice(0, 1e3),
                  onItemSelect: n,
                  renderItem: (e) =>
                    a.a.createElement(Q, {
                      emoticon: e,
                      emoticonHoverStore: t,
                    }),
                  keyExtractor: (e) => e.name,
                  renderEmpty: () =>
                    r
                      ? a.a.createElement(
                          B,
                          null,
                          Object(g.g)("#AddonPicker_NoResults")
                        )
                      : a.a.createElement($, null),
                },
              ],
            })
          );
        }
      };
      J = Object(o.b)([i.a], J);
      let K = class extends a.a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const {
              store: e,
              hoverStore: t,
              onItemSelect: n,
              flairGroupID: o,
            } = this.props,
            { filter: r } = this.state;
          return a.a.createElement(x, {
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: r,
            sections: [
              {
                title: Object(g.g)("#ChatEntryButton_Flair"),
                items: m.a.FilterStickers(e.GetFlairListByGroupID(o), r),
                onItemSelect: n,
                renderItem: (e) =>
                  a.a.createElement(Q, { emoticon: e, emoticonHoverStore: t }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  r
                    ? a.a.createElement(
                        B,
                        null,
                        Object(g.g)("#AddonPicker_NoResults")
                      )
                    : a.a.createElement($, null),
              },
            ],
          });
        }
      };
      K = Object(o.b)([i.a], K);
      const Q = (e) => {
        const { emoticon: t, emoticonHoverStore: n, large: o } = e,
          r = !t.last_used && t.time_received;
        return a.a.createElement(
          "div",
          { className: y.a.EmoticonItem },
          a.a.createElement(D, {
            emoticon: t.name,
            emoticonHoverStore: n,
            large: o,
          }),
          r && a.a.createElement(re, null)
        );
      };
      class ee extends a.a.Component {
        constructor() {
          super(...arguments),
            (this.state = { showHover: !1 }),
            (this.m_ref = a.a.createRef());
        }
        render() {
          const e = this.props,
            { sticker: t, className: n } = e,
            r = Object(o.c)(e, ["sticker", "className"]),
            i = _(f.d.COMMUNITY_CDN_URL, t.name);
          return a.a.createElement(
            "div",
            Object.assign(
              {
                ref: this.m_ref,
                className: Object(u.a)(n, y.a.StickerButton),
                onMouseOver: () => this.setState({ showHover: !0 }),
                onFocus: () => this.setState({ showHover: !0 }),
                onMouseLeave: () => this.setState({ showHover: !1 }),
                onBlur: () => this.setState({ showHover: !1 }),
              },
              r
            ),
            a.a.createElement("img", { style: { width: "100%" }, src: i }),
            this.state.showHover &&
              a.a.createElement(te, { target: this.m_ref.current, sticker: t })
          );
        }
      }
      const te = Object(i.a)((e) => {
        const {
            target: t,
            sticker: { name: n, appid: o },
          } = e,
          [r] = Object(d.b)(o, {});
        return a.a.createElement(
          T,
          { target: t, title: n, subtitle: null == r ? void 0 : r.GetName() },
          a.a.createElement("img", {
            src: _(f.d.COMMUNITY_CDN_URL, n),
            className: y.a.StickerHoverSticker,
          })
        );
      });
      class ne extends a.a.Component {
        constructor() {
          super(...arguments),
            (this.state = { showHover: !1 }),
            (this.m_ref = a.a.createRef());
        }
        render() {
          const e = this.props,
            { effect: t, roomEffectSettings: n, className: r } = e,
            i = Object(o.c)(e, ["effect", "roomEffectSettings", "className"]),
            s = n[t.name];
          return a.a.createElement(
            "div",
            Object.assign(
              {
                ref: this.m_ref,
                onMouseOver: () => this.setState({ showHover: !0 }),
                onFocus: () => this.setState({ showHover: !0 }),
                onMouseLeave: () => this.setState({ showHover: !1 }),
                onBlur: () => this.setState({ showHover: !1 }),
                className: Object(u.a)(r, y.a.EffectButton),
              },
              i
            ),
            s.renderEffectIcon(),
            this.state.showHover &&
              a.a.createElement(oe, {
                target: this.m_ref.current,
                effect: t,
                roomEffectSettings: n,
              })
          );
        }
      }
      const oe = Object(i.a)((e) => {
        const {
            target: t,
            effect: { name: n, appid: o },
            roomEffectSettings: r,
          } = e,
          i = r[n],
          [s] = Object(d.b)(o, {});
        return a.a.createElement(
          T,
          { target: t, title: n, subtitle: null == s ? void 0 : s.GetName() },
          a.a.createElement(
            "div",
            { className: y.a.EffectHoverEffect },
            i.renderEffectIcon()
          )
        );
      });
      function re() {
        return a.a.createElement(
          "div",
          { className: y.a.NewEmoticonIndicator },
          a.a.createElement("div", { className: y.a.NewEmoticonCircle })
        );
      }
      class ie extends a.a.Component {
        constructor(e) {
          super(e), (this.state = { visible: !1 });
        }
        SetVisible(e) {
          e && !this.state.visible && this.setState({ visible: !0 });
        }
        componentDidMount() {
          this.props.coordinator.RegisterChild(
            c.findDOMNode(this),
            this.SetVisible
          );
        }
        componentWillUnmount() {
          this.props.coordinator.UnregisterChild(c.findDOMNode(this));
        }
        render() {
          let e = this.props.emoticon,
            t = [y.a.EmoticonSelector_Item],
            n = !1;
          return (
            !e.last_used &&
              e.time_received &&
              (t.push(y.a.EmoticonSelector_Item_New), (n = !0)),
            a.a.createElement(
              "div",
              {
                className: Object(u.a)(...t),
                "data-emoticon": e.name,
                onClick: this.props.onClick,
              },
              this.state.visible &&
                a.a.createElement(D, {
                  emoticonHoverStore: this.props.emoticonHoverStore,
                  emoticon: e.name,
                  large: !0,
                }),
              n && a.a.createElement(re, null)
            )
          );
        }
      }
      function se(e) {
        return f.d.IN_GAMEPADUI
          ? a.a.createElement(
              "svg",
              Object.assign(
                {
                  viewBox: "0 0 36 36",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              a.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M21 29H22.1875V31H19L21 29Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M29 22.1875V21L31 19V22.1875H29Z",
                fill: "currentColor",
              })
            )
          : a.a.createElement(
              "svg",
              Object.assign({ viewBox: "0 0 59 59", width: "32" }, e),
              a.a.createElement(
                "switch",
                null,
                a.a.createElement(
                  "g",
                  null,
                  a.a.createElement("path", {
                    d: "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#fff",
                  })
                )
              )
            );
      }
      function ae(e) {
        return f.d.IN_GAMEPADUI
          ? a.a.createElement(
              "svg",
              Object.assign(
                {
                  width: "36",
                  height: "36",
                  viewBox: "0 0 36 36",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              a.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z",
                fill: "currentColor",
              })
            )
          : a.a.createElement(
              "svg",
              Object.assign({ viewBox: "0 -8 60 60", width: "32" }, e),
              a.a.createElement("path", {
                d: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#fff",
              })
            );
      }
      function ce(e) {
        return f.d.IN_GAMEPADUI
          ? a.a.createElement(
              "svg",
              Object.assign(
                {
                  viewBox: "0 0 36 36",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              a.a.createElement("path", {
                d: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
                fill: "currentColor",
              }),
              a.a.createElement("path", {
                d: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
                fill: "currentColor",
              })
            )
          : a.a.createElement(
              "svg",
              Object.assign({ viewBox: "0 0 60 38", width: "32" }, e),
              a.a.createElement("path", {
                d: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#fff",
              })
            );
      }
      function le(e) {
        const { className: t } = e,
          n = Object(o.c)(e, ["className"]);
        return a.a.createElement(
          "svg",
          Object.assign(
            {
              className: Object(u.a)("SVGIcon_Button SVGIcon_Clock", t),
              version: "1.1",
              x: "0px",
              y: "0px",
              width: "20px",
              height: "20px",
              viewBox: "0 0 24 24",
            },
            n
          ),
          a.a.createElement("path", {
            d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
          })
        );
      }
      Object(o.b)([E.b], ie.prototype, "SetVisible", null);
    },
    CfZL: function (e, t, n) {
      e.exports = {
        NewEmoticonIndicator: "emoticon_NewEmoticonIndicator_3B1SU",
        NewEmoticonCircle: "emoticon_NewEmoticonCircle_2ZOlu",
        EmoticonSelector: "emoticon_EmoticonSelector_3vBZ2",
        emoticon: "emoticon_emoticon_316r8",
        large: "emoticon_large_2mWtZ",
        EmoticonSelector_Emoticons: "emoticon_EmoticonSelector_Emoticons_36jkp",
        EmoticonSelector_Separator: "emoticon_EmoticonSelector_Separator_2rHxR",
        EmoticonSelector_SeparatorBackground:
          "emoticon_EmoticonSelector_SeparatorBackground_2VvGx",
        EmoticonSelector_Controls: "emoticon_EmoticonSelector_Controls_2YkoX",
        EmoticonSelector_Item: "emoticon_EmoticonSelector_Item_3y7iJ",
        EmoticonSelector_Item_New: "emoticon_EmoticonSelector_Item_New_gW-jg",
        EffectHeading: "emoticon_EffectHeading_1Lw2A",
        StickerHeading: "emoticon_StickerHeading_1wzP2",
        GetFestive: "emoticon_GetFestive_fSRfS",
        TopDivider: "emoticon_TopDivider_1p-3s",
        BottomDivider: "emoticon_BottomDivider_1dr6q",
        StickerButton: "emoticon_StickerButton_sJoLl",
        EffectButton: "emoticon_EffectButton_1RT9p",
        EmoticonHover: "emoticon_EmoticonHover_1GtsZ",
        Info: "emoticon_Info_1umzU",
        Name: "emoticon_Name_1rQ1e",
        AppName: "emoticon_AppName_1V_rH",
        StickerHoverSticker: "emoticon_StickerHoverSticker_3Cz-2",
        EffectHoverEffect: "emoticon_EffectHoverEffect_2s5VJ",
        PickerTab: "emoticon_PickerTab_Qpqjx",
        Clock: "emoticon_Clock_2a7aO",
        EmoticonItem: "emoticon_EmoticonItem_OfLMJ",
      };
    },
    "Ck/Z": function (e, t, n) {
      e.exports = {
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
    GfUI: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return E;
      }),
        n.d(t, "b", function () {
          return _;
        }),
        n.d(t, "c", function () {
          return f;
        });
      var o = n("mrSG"),
        r = n("TyAF"),
        i = n("q1tI"),
        s = n.n(i),
        a = n("uzoi"),
        c = n("msu0"),
        l = n("iRfV"),
        m = n("G7ky"),
        d = (n("xoHR"), n("hCpY")),
        p = n("/Q1a"),
        h = n("d1EJ"),
        u = n("PsAM"),
        g = n.n(u);
      const E = Object(r.a)((e) => {
        const t = e.photo
            ? Object(a.d)(e.photo, Object(c.g)(p.d.LANGUAGE))
            : null,
          n = e.photo ? ("string" == typeof t ? t : t[1]) : null,
          o = Boolean(e.title),
          r = Boolean(e.company);
        return s.a.createElement(
          "div",
          { className: g.a.SpeakerPopup, onMouseLeave: e.fnClose },
          s.a.createElement(
            "div",
            { className: g.a.SpeakerInfoOuter },
            e.photo && s.a.createElement("img", { src: n }),
            s.a.createElement(
              "div",
              { className: g.a.SpeakerInfoInner },
              s.a.createElement("div", null, e.name),
              (o || r) &&
                s.a.createElement(
                  "div",
                  null,
                  o &&
                    s.a.createElement(
                      "span",
                      { className: g.a.SpeakerTitle },
                      e.title
                    ),
                  o && r && s.a.createElement("span", null, ", "),
                  r && s.a.createElement("span", null, e.company)
                )
            )
          ),
          e.bio &&
            s.a.createElement(
              "div",
              { className: g.a.SpeakerBio },
              e.bio,
              e.bioString && s.a.createElement(h.a, { text: e.bioString })
            )
        );
      });
      class _ extends s.a.Component {
        constructor() {
          super(...arguments), (this.m_refAnchor = s.a.createRef());
        }
        ClosePopup() {
          this.m_fnHidePopup &&
            (this.m_fnHidePopup(),
            (this.m_fnHidePopup = null),
            window.removeEventListener("scroll", this.OnScroll));
        }
        componentWillUnmount() {
          this.ClosePopup();
        }
        OnScroll() {
          Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
            this.ClosePopup();
        }
        OnHover(e) {
          const t = this.m_refAnchor.current;
          if (!t) return;
          const n = {
              direction: "right",
              bEnablePointerEvents: !0,
              style: { maxWidth: 640, minHeight: t.clientHeight },
              target: t,
            },
            o = "presenter-hover-" + Math.floor(1e8 * Math.random());
          (this.m_fnHidePopup = () =>
            _.sm_embeddedElements.HideElement(t.ownerDocument, o)),
            window.addEventListener("scroll", this.OnScroll),
            (this.m_nScrollPosAtHoverStart = window.scrollY);
          _.sm_embeddedElements.ShowElementDelayed(
            t.ownerDocument,
            150,
            s.a.createElement(
              m.a,
              Object.assign({}, n),
              s.a.createElement(
                E,
                Object.assign({}, this.props, { fnClose: this.OnLeave })
              )
            ),
            o
          );
        }
        OnLeave(e) {
          this.ClosePopup();
        }
        render() {
          return s.a.createElement(
            "div",
            {
              className: g.a.SpeakerHover,
              ref: this.m_refAnchor,
              onMouseEnter: this.OnHover,
              onFocus: this.OnHover,
              onMouseLeave: this.OnLeave,
              onBlur: this.OnLeave,
            },
            this.props.children
          );
        }
      }
      (_.sm_embeddedElements = new l.a("presenter-hover-source-elements")),
        Object(o.b)([d.b], _.prototype, "ClosePopup", null),
        Object(o.b)([d.b], _.prototype, "OnScroll", null),
        Object(o.b)([d.b], _.prototype, "OnHover", null),
        Object(o.b)([d.b], _.prototype, "OnLeave", null);
      class f extends s.a.Component {
        render() {
          const e = this.props.photo
              ? Object(a.d)(this.props.photo, Object(c.g)(p.d.LANGUAGE))
              : null,
            t =
              this.props.photo && !this.props.hidePhotoInCompactView
                ? "string" == typeof e
                  ? e
                  : e[1]
                : null,
            n = Boolean(this.props.title),
            o = Boolean(this.props.company);
          return s.a.createElement(
            "div",
            { className: g.a.SpeakerOuter },
            s.a.createElement(
              _,
              Object.assign({}, this.props),
              s.a.createElement(
                "div",
                { className: g.a.Speaker },
                s.a.createElement(
                  "div",
                  { className: g.a.SpeakerInfoOuter },
                  !!t && s.a.createElement("img", { src: t }),
                  s.a.createElement(
                    "div",
                    { className: g.a.SpeakerInfoInner },
                    s.a.createElement("div", null, this.props.name),
                    (n || o) &&
                      s.a.createElement(
                        "div",
                        null,
                        n &&
                          s.a.createElement(
                            "span",
                            { className: g.a.SpeakerTitle },
                            this.props.title
                          ),
                        n && o && s.a.createElement("span", null, ", "),
                        o && s.a.createElement("span", null, this.props.company)
                      )
                  )
                )
              )
            )
          );
        }
      }
    },
    PsAM: function (e, t, n) {
      e.exports = {
        SpeakerOuter: "presenterpopup_SpeakerOuter_3KAg2",
        Speaker: "presenterpopup_Speaker_2B3rV",
        SpeakerPopup: "presenterpopup_SpeakerPopup_ntY3G",
        SpeakerInfoOuter: "presenterpopup_SpeakerInfoOuter_20Ye7",
        SpeakerInfoInner: "presenterpopup_SpeakerInfoInner_2ZeoL",
        SpeakerTitle: "presenterpopup_SpeakerTitle_29hmW",
        SpeakerBio: "presenterpopup_SpeakerBio_1YoXP",
        SpeakerHover: "presenterpopup_SpeakerHover_1ctFc",
      };
    },
    "USh/": function (e, t, n) {
      e.exports = {
        "duration-app-launch": "800ms",
        chatEntryControls: "chatentry_chatEntryControls_2gP0D",
        chatTextarea: "chatentry_chatTextarea_pewyB",
        chatEntryActionsGroup: "chatentry_chatEntryActionsGroup_3grea",
        chatEntryActionsContainer: "chatentry_chatEntryActionsContainer_1X1-n",
        minHeightZero: "chatentry_minHeightZero_1IsiN",
        chatSubmitButton: "chatentry_chatSubmitButton_1IEiK",
        EmbedButton: "chatentry_EmbedButton_24xNx",
        EmoticonPickerButton: "chatentry_EmoticonPickerButton_K-lPM",
        disabled: "chatentry_disabled_2GM2k",
        Inactive: "chatentry_Inactive_34suB",
        AudioLines: "chatentry_AudioLines_1Hw30",
        Active: "chatentry_Active_2gzj2",
      };
    },
    Wjgn: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var o = n("mrSG"),
        r = n("/Q1a"),
        i = n("2vnA"),
        s = n("vDqi"),
        a = n.n(s);
      const c = new (class {
        constructor() {
          (this.m_mapEmoticonHovers = i.C.map()),
            (this.m_inflightRequests = {});
        }
        Get(e) {
          return this.m_mapEmoticonHovers.has(e) || this.m_inflightRequests[e]
            ? this.m_mapEmoticonHovers.get(e)
            : (this.Load(e), null);
        }
        BLoaded(e) {
          return !!this.m_mapEmoticonHovers.get(e);
        }
        Load(e) {
          return Object(o.a)(this, void 0, void 0, function* () {
            const t = `${
              r.d.COMMUNITY_CDN_URL
            }economy/emoticonhoverjson/${encodeURIComponent(
              e
            )}?l=${encodeURIComponent(r.d.LANGUAGE)}&origin=${Object(r.f)()}`;
            this.m_inflightRequests[e] = !0;
            try {
              const { data: n } = yield a.a.get(t);
              !(function (e) {
                return (
                  e &&
                  "object" == typeof e &&
                  "number" == typeof e.appid &&
                  "string" == typeof e.app_name
                );
              })(n)
                ? this.m_mapEmoticonHovers.set(e, null)
                : this.m_mapEmoticonHovers.set(e, n);
            } catch (t) {
              this.m_mapEmoticonHovers.set(e, null);
            } finally {
              this.m_inflightRequests[e] = !1;
            }
          });
        }
      })();
    },
    Y6GK: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return l;
        });
      var o = n("mrSG"),
        r = n("2vnA"),
        i = (n("msu0"), n("XrGS"), n("Zdsb"), n("oleE")),
        s = (n("6ese"), n("ue1x")),
        a = n("KVor");
      class c {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map());
        }
        static GetBBCodeParam(e, t, n = "") {
          const o = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return o ? o[1] : n;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            n = new Array();
          for (;;) {
            const o = t.exec(e);
            if (null === o) break;
            const r = o[1],
              s = o[2],
              a = c.GetBBCodeParam(r, "steamid"),
              l = {
                steamID: a ? new i.a(a) : void 0,
                name: c.GetBBCodeParam(r, "name"),
                title: c.GetBBCodeParam(r, "title"),
                company: c.GetBBCodeParam(r, "company"),
                photo: c.GetBBCodeParam(r, "photo"),
                bio: s,
              };
            n.push(l);
          }
          return n;
        }
        static ParseEventModelPresenters(e, t) {
          const n = e.GetDescriptionWithFallback(t);
          return c.ParseCalendarEventPresentersFromText(n);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            n = new Set();
          for (;;) {
            const o = t.exec(e);
            if (null === o) break;
            const r = o[1];
            n.add(Number(r));
          }
          return n;
        }
        static ParseEventModelAppReferences(e, t) {
          var n;
          const o = e.GetDescriptionWithFallback(t),
            r = c.ParseEventAppReferencesFromText(o);
          if (
            null === (n = e.jsondata) || void 0 === n
              ? void 0
              : n.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) r.add(t);
          return r;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return Object(o.a)(this, void 0, void 0, function* () {
            const t = s.a.GetTimeNowWithOverride(),
              n = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of n.rgCalendarItems)
              a.b.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const o = n.rgCalendarItems.map((e) =>
                a.b.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  i.a.InitFromClanID(e.clanid),
                  e.unique_id,
                  0
                )
              ),
              r = yield Promise.all(o),
              c = new Map();
            for (const e of r)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  c.has(t) ? c.get(t).push(e) : c.set(t, [e]);
            return c;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const n = this.m_mapBroadcasterSteamIDToEvents.get(e),
            o = n ? n.length : 0;
          if ((t ? t.length : 0) != o) return !1;
          for (let e = 0; e < o; e++) if (n[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let n = new Map();
          for (const o of e) {
            if (!o) continue;
            const e = c.ParseEventModelPresenters(o, t);
            for (const t of e)
              t.steamID && n.set(t.steamID.ConvertTo64BitString(), t);
          }
          return n;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((n, o) => {
            e.has(o) || t.push(o);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const n = new Set();
          for (const o of e) {
            c.ParseEventModelAppReferences(o, t).forEach((e) => n.add(e));
          }
          return Array.from(n);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, n) => {
            if (this.IsBroadcasterAlreadyBound(n, e)) return;
            const o = {
              m_mapPresenters: c.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: c.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(n, o),
              this.m_mapBroadcasterSteamIDToEvents.set(
                n,
                e.map((e) => e.GID)
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return Object(o.a)(this, void 0, void 0, function* () {
            const n = yield this.BuildBroadcasterSteamIDToActiveEventMap(e);
            this.RemoveCachedDataIfNotInMap(n),
              this.UpdateCachedDataFromEvents(n, t);
          });
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_rgAppIDs;
        }
      }
      Object(o.b)([r.C], c.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const l = new c();
    },
    c8QL: function (e, t, n) {
      "use strict";
      var o = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        s = n("TyAF"),
        a = n("hCpY"),
        c = n("fsrB"),
        l = n("Lsvi"),
        m = n("pC2t"),
        d = n("55de"),
        p = (n("e356"), n("GXif")),
        h = (n("QwK/"), n("Wjgn"), n("GbHM")),
        u = n("USh/"),
        g = n.n(u),
        E = (n("SS8s"), n("3y2B"), n("AYtk"));
      const _ = 1576780700;
      let f = class extends i.a.Component {
        OnEmoticonClick(e) {
          var t;
          const {
            emoticonStore: n,
            strFlairGroupID: o,
            SetUIDisplayPref: r,
            contextOptions: s,
            bShowChatAddons: a,
          } = this.props;
          let c = null;
          if (
            ((c = a
              ? i.a.createElement(d.a, {
                  emoticonStore: this.props.emoticonStore,
                  emoticonHoverStore: this.props.emoticonHoverStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  onEmoticonSelected: (e) =>
                    this.props.OnEmoticonSelected(e, !1),
                  roomEffectSettings: this.props.roomEffectSettings,
                  onRoomEffectSelected: this.props.onRoomEffectSelected,
                  onStickerSelected: this.props.onStickerSelected,
                })
              : o &&
                n.flair_list &&
                (null === (t = n.GetFlairListByGroupID(o)) || void 0 === t
                  ? void 0
                  : t.length) > 0
              ? i.a.createElement(d.d, {
                  emoticonStore: this.props.emoticonStore,
                  emoticonHoverStore: this.props.emoticonHoverStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : i.a.createElement(d.c, {
                  emoticonStore: this.props.emoticonStore,
                  emoticonHoverStore: this.props.emoticonHoverStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
            Object(m.a)(
              c,
              e,
              s || {
                bOverlapHorizontal: !0,
                bPreferPopLeft: !0,
                bPreferPopTop: !0,
              }
            ),
            this.BHaveUnseenEmoticons() && r)
          ) {
            let e = this.GetNewestIndicatorTime();
            (!e || e < _) && (e = _), r("rtLastAckedNewEmoticons", e);
          }
        }
        GetNewestIndicatorTime() {
          let e = this.props.emoticonStore,
            t = Number.MIN_SAFE_INTEGER,
            n = e.GetTimeReceivedNewestEmoticon();
          n && (t = n);
          let o = e.GetTimeReceivedForStickerOrEffect();
          return (t = Math.max(o, t)), t > Number.MIN_SAFE_INTEGER ? t : void 0;
        }
        BHaveUnseenEmoticons() {
          const { rtLastAckedNewEmoticons: e } = this.props;
          let t = this.GetNewestIndicatorTime();
          return !e || e < _ || (t && (!e || e < t));
        }
        render() {
          const { disabled: e, className: t, ttip: n, useImg: o } = this.props;
          let r = [t],
            s = !1;
          return (
            e ? r.push("disabled") : this.BHaveUnseenEmoticons() && (s = !0),
            n && r.push("ttip"),
            o
              ? i.a.createElement(
                  l.a,
                  {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: Object(p.g)(
                      "#ChatEntryButton_Emoticon"
                    ),
                    focusable: !0,
                  },
                  i.a.createElement("img", {
                    src: this.props.useImg,
                    className: Object(h.a)(...r),
                    title:
                      this.props.title ||
                      Object(p.g)("#ChatEntryButton_Emoticon"),
                    "data-tooltip-text": n,
                  })
                )
              : (r.push(g.a.chatSubmitButton, g.a.EmoticonPickerButton),
                i.a.createElement(
                  c.d,
                  {
                    className: Object(h.a)(...r),
                    onOKActionDescription: Object(p.g)(
                      "#ChatEntryButton_Emoticon"
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      Object(p.g)("#ChatEntryButton_Emoticon"),
                    disabled: e,
                    "data-tooltip-text": n,
                  },
                  this.props.buttonIcon || i.a.createElement(E.a, null),
                  s && i.a.createElement(d.e, null)
                ))
          );
        }
      };
      Object(o.b)([a.b], f.prototype, "OnEmoticonClick", null),
        (f = Object(o.b)([s.a], f)),
        (t.a = f);
    },
    d1EJ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var o = n("pY4P"),
        r = n("q1tI"),
        i = n.n(r),
        s = n("uzoi"),
        a = (n("msu0"), n("t3nn"));
      function c(e) {
        return new a.c(new a.b(), 0);
      }
      function l(e) {
        const { text: t, languageOverride: n } = e,
          [a] = Object(r.useState)(
            new o.a(new Map([...Array.from(s.c.entries())]), c, n)
          );
        return i.a.createElement(i.a.Fragment, null, a.ParseBBCode(t, {}));
      }
    },
    lJR3: function (e, t, n) {
      e.exports = {
        "duration-app-launch": "800ms",
        Picker: "addonpicker_Picker_3acyH",
        Tabs: "addonpicker_Tabs_3DjoX",
        Tab: "addonpicker_Tab_1F8Bh",
        Focus: "addonpicker_Focus_3GiAc",
        TabContent: "addonpicker_TabContent_2MluN",
        Active: "addonpicker_Active_2bg1w",
        Content: "addonpicker_Content_1c-qe",
        ItemList: "addonpicker_ItemList_2tnPH",
        Item: "addonpicker_Item_3zgnd",
        SectionedPageTitle: "addonpicker_SectionedPageTitle_1rBPd",
        SectionTitle: "addonpicker_SectionTitle_3ff2f",
        FilterInputContainer: "addonpicker_FilterInputContainer_vzSOl",
        FilterInput: "addonpicker_FilterInput_18mhx",
        AddonPickerMessage: "addonpicker_AddonPickerMessage_LGYf8",
      };
    },
    y0CV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var o = n("mrSG"),
        r = n("q1tI"),
        i = n("rSrx"),
        s = n("hCpY");
      class a extends r.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = r.createRef()),
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
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            e.rootMargin != this.m_observer.rootMargin &&
            this.DestroyObserver();
          let t = this.m_refElement.current;
          if (
            (this.m_observer &&
              t != this.m_elTracked &&
              (this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              (this.m_observer = new IntersectionObserver(
                this.OnIntersection,
                e
              ));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return i.l(e, (e) => {
            const t = this.props.bHorizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(a.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, t) {
          let n = !1;
          for (const t of e)
            if (t.isIntersecting) {
              n = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != n &&
            ((this.m_bPreviouslyIntersecting = n),
            this.props.onVisibilityChange && this.props.onVisibilityChange(n),
            n && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let e = this.props,
            {
              onVisibilityChange: t,
              rootMargin: n,
              trigger: i,
              bHorizontal: s,
            } = e,
            a = Object(o.c)(e, [
              "onVisibilityChange",
              "rootMargin",
              "trigger",
              "bHorizontal",
            ]);
          return r.createElement(
            "div",
            Object.assign({ ref: this.m_refElement }, a),
            this.props.children
          );
        }
      }
      Object(o.b)([s.b], a.prototype, "OnIntersection", null);
    },
  },
]);

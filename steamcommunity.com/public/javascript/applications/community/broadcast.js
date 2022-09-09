/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4601],
  {
    15396: (e, t, r) => {
      r.d(t, { Y: () => l });
      var n = r(70655),
        i = r(67294),
        s = r(22975),
        o = r(54452);
      class l extends i.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bRenderChildren: !1,
              nPrevRenderWidth: 0,
              nPrevRenderHeight: 0,
            }),
            (this.m_refContainer = i.createRef());
        }
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(e) {
          let t = this.state.bRenderChildren;
          if (t == e) return;
          if (t && !this.BLoadAndUnload()) return;
          let r = 0,
            n = 0;
          if (this.m_refContainer.current) {
            const e = this.m_refContainer.current.GetBoundingClientRect();
            e && ((r = e.width), (n = e.height));
          }
          this.setState({
            bRenderChildren: e,
            nPrevRenderWidth: r,
            nPrevRenderHeight: n,
          }),
            e && this.props.onRender && this.props.onRender();
        }
        render() {
          const e = this.props,
            {
              placeholderWidth: t,
              placeholderHeight: r,
              onRender: s,
              style: l,
              mode: h,
            } = e,
            a = (0, n._T)(e, [
              "placeholderWidth",
              "placeholderHeight",
              "onRender",
              "style",
              "mode",
            ]),
            d = this.state.bRenderChildren;
          let c = l;
          if (!d) {
            const e = this.state.nPrevRenderWidth || t,
              n = this.state.nPrevRenderHeight || r;
            (void 0 === n && void 0 === e) ||
              (c = Object.assign(Object.assign({}, l), {
                minHeight: n,
                minWidth: e,
              }));
          }
          const m = this.BLoadAndUnload() ? "repeated" : "once";
          return i.createElement(
            o.U,
            Object.assign({ ref: this.m_refContainer, style: c }, a, {
              onVisibilityChange: this.OnVisibilityChange,
              trigger: m,
            }),
            d && this.props.children
          );
        }
      }
      (0, n.gn)([s.ak], l.prototype, "OnVisibilityChange", null);
    },
    54452: (e, t, r) => {
      r.d(t, { U: () => l });
      var n = r(70655),
        i = r(67294),
        s = r(53622),
        o = r(22975);
      class l extends i.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = i.createRef()),
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
          return s.Jk(e, (e) => {
            const t = this.props.bHorizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(l.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, t) {
          let r = !1;
          for (const t of e)
            if (t.isIntersecting) {
              r = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != r &&
            ((this.m_bPreviouslyIntersecting = r),
            this.props.onVisibilityChange && this.props.onVisibilityChange(r),
            r && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let e = this.props,
            {
              onVisibilityChange: t,
              rootMargin: r,
              trigger: s,
              bHorizontal: o,
            } = e,
            l = (0, n._T)(e, [
              "onVisibilityChange",
              "rootMargin",
              "trigger",
              "bHorizontal",
            ]);
          return i.createElement(
            "div",
            Object.assign({ ref: this.m_refElement }, l),
            this.props.children
          );
        }
      }
      (0, n.gn)([o.ak], l.prototype, "OnIntersection", null);
    },
  },
]);

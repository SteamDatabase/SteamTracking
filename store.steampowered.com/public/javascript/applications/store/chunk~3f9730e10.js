/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [453],
  {
    30120: (t) => {
      t.exports = {
        avatarHolder: "steamavatar_avatarHolder_1YGAH",
        avatarStatus: "steamavatar_avatarStatus_1yIzy",
        avatar: "steamavatar_avatar_1p_Qr",
        avatarFrame: "steamavatar_avatarFrame_3atbN",
        avatarFrameImg: "steamavatar_avatarFrameImg_338kJ",
      };
    },
    50355: (t, e, a) => {
      "use strict";
      a.d(e, { o: () => g, _1: () => B, DY: () => u, vV: () => h });
      var r = a(33940),
        s = a(89526),
        i = a(88464),
        n = a(11301),
        o = a(19304),
        A = a(32765),
        m = a(87178);
      const l =
        a.p +
        "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var c = a(30120),
        p = a.n(c);
      class g extends s.Component {
        render() {
          const t = this.props,
            {
              strAvatarURL: e,
              size: a,
              className: i,
              statusStyle: n,
              statusPosition: A,
              children: c,
            } = t,
            g = (0, r._T)(t, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            h = [];
          return (
            e && h.push(e),
            h.push(
              (function (t) {
                switch (t) {
                  case "X-Small":
                  case "Small":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                  case "Medium":
                  case "MediumLarge":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return l;
                }
              })(a),
            ),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, o.Z)(
                    p().avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    a || "Medium",
                    i,
                  ),
                },
                g,
              ),
              s.createElement("div", {
                className: (0, o.Z)(p().avatarStatus, "avatarStatus", A),
                style: n,
              }),
              s.createElement(m.j, {
                className: (0, o.Z)(p().avatar, "avatar"),
                rgSources: h,
                draggable: !1,
              }),
              c,
            )
          );
        }
      }
      let h = class extends s.Component {
        render() {
          const t = this.props,
            { persona: e, size: a, animatedAvatar: i, className: m } = t,
            l = (0, r._T)(t, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let c = "";
          return (
            i && i.image_small && 0 != i.image_small.length
              ? (c = A.De.MEDIA_CDN_COMMUNITY_URL + "images/" + i.image_small)
              : e &&
                ((c = e.avatar_url_medium),
                "Small" == a || "X-Small" == a
                  ? (c = e.avatar_url)
                  : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                    (c = e.avatar_url_full)),
            s.createElement(
              g,
              Object.assign(
                {
                  strAvatarURL: c,
                  size: a,
                  className: (0, o.Z)((0, n.sB)(e), m),
                },
                l,
              ),
            )
          );
        }
      };
      h = (0, r.gn)([i.Pi], h);
      const u = (0, i.Pi)((t) => {
        const { profileItem: e, className: a, bDisableAnimation: i } = t,
          n = (0, r._T)(t, ["profileItem", "className", "bDisableAnimation"]);
        if (!e || !e.image_small || 0 == e.image_small.length) return null;
        let m = i ? e.image_large : e.image_small;
        return (
          m || (m = e.image_small),
          m.startsWith("https://") ||
            (m = A.De.MEDIA_CDN_COMMUNITY_URL + "images/" + m),
          s.createElement(
            "div",
            Object.assign(
              { className: (0, o.Z)(p().avatarFrame, a, "avatarFrame") },
              n,
            ),
            s.createElement("img", { className: p().avatarFrameImg, src: m }),
          )
        );
      });
      let B = class extends s.Component {
        constructor(t) {
          super(t),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.props.bParentHovered || this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let t = 0;
          switch (this.props.loopDuration) {
            case "Short":
              t = 2500;
              break;
            case "Medium":
              t = 5e3;
              break;
            case "Long":
              t = 1e4;
          }
          0 != t &&
            (this.setState({ bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              t,
            )));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        onHover() {
          this.SetupAnimationTimer();
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(t) {
          this.props.loopDuration != t.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration
              ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
              : (this.setState({ bAnimate: !0 }), this.SetupAnimationTimer())),
            this.props.bParentHovered != t.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let t = this.props,
            {
              loopDuration: e,
              animatedAvatar: a,
              avatarFrame: i,
              children: n,
              style: o,
              bLimitProfileFrameAnimationTime: A,
              bParentHovered: m,
            } = t,
            l = (0, r._T)(t, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
              "bLimitProfileFrameAnimationTime",
              "bParentHovered",
            ]);
          return (
            l.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (a = null),
            s.createElement(
              "div",
              {
                onMouseEnter: () =>
                  this.setState({
                    bAnimate: "None" != this.props.loopDuration,
                  }),
                onMouseLeave: () => this.SetupAnimationTimer(),
              },
              s.createElement(
                h,
                Object.assign({ animatedAvatar: a }, l),
                n,
                s.createElement(u, {
                  profileItem: i,
                  bDisableAnimation: A && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      B = (0, r.gn)([i.Pi], B);
    },
    5029: (t, e, a) => {
      "use strict";
      a.d(e, {
        Ar: () => m,
        Wo: () => l,
        i9: () => o,
        ks: () => i,
        nQ: () => A,
        ni: () => c,
      });
      var r = a(89526),
        s = a(59934);
      function i(t, e) {
        let a;
        "string" == typeof t
          ? (a = t)
          : "location" in t
          ? (a = t.location.search)
          : "search" in t && (a = t.search);
        const r = new URLSearchParams(a.substring(1));
        if (r.has(e)) {
          const t = r.getAll(e);
          return t[t.length - 1];
        }
      }
      const n = (t) => null != t;
      function o(t, e, a, r = !1) {
        const s = new URLSearchParams(t.location.search.substring(1));
        s.delete(e),
          n(a) && s.append(e, a),
          r
            ? t.replace(`?${s.toString()}`, Object.assign({}, t.location.state))
            : t.push(`?${s.toString()}`);
      }
      function A(t, e, a) {
        o(t, e, a, !0);
      }
      function m(t, e) {
        const a = (0, s.k6)(),
          A = (0, s.TH)(),
          m = (0, r.useMemo)(() => {
            const a = i(A.search, t);
            return n(a)
              ? n(e)
                ? "boolean" == typeof e
                  ? e.constructor("false" !== a)
                  : e.constructor(a)
                : a
              : e;
          }, [A.search, t, e]),
          l = (0, r.useCallback)(
            (e) => {
              o(a, t, n(e) ? String(e) : null);
            },
            [a, t],
          );
        return [m, l];
      }
      function l(t, e, a = !1) {
        const r = new URLSearchParams(t.location.search.substring(1));
        for (const t in e)
          if (e.hasOwnProperty(t)) {
            const a = e[t];
            r.delete(t), n(a) && r.append(t, a);
          }
        a
          ? t.replace(`?${r.toString()}`, Object.assign({}, t.location.state))
          : t.push(`?${r.toString()}`);
      }
      function c(t, e) {
        l(t, e, !0);
      }
    },
    93908: (t, e, a) => {
      "use strict";
      a.d(e, { Mr: () => o, tk: () => A });
      var r = a(89526),
        s = a(701),
        i = a(16826),
        n = a(32765);
      function o() {
        return r.createElement(s.MrB, null);
      }
      function A() {
        return (0, n.id)()
          ? r.createElement(i.tkI, null)
          : r.createElement(s.j5H, null);
      }
    },
    87178: (t, e, a) => {
      "use strict";
      a.d(e, { j: () => n });
      var r = a(33940),
        s = a(89526),
        i = a(4306);
      class n extends s.Component {
        constructor(t) {
          super(t),
            (this.m_refImage = s.createRef()),
            (this.state = { nImage: 0 });
        }
        componentDidUpdate(t) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(t.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let t = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (t = this.props.rgSources[this.state.nImage]),
            t ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage,
              ),
              (t =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            t
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(t) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              t,
              this.props.rgSources[this.state.nImage],
              this.state.nImage,
            );
          let e = this.state.nImage + 1;
          e >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(t),
            e < this.props.rgSources.length && this.setState({ nImage: e });
        }
        render() {
          const t = this.props,
            { src: e, rgSources: a, onIncrementalError: i, onError: n } = t,
            o = (0, r._T)(t, [
              "src",
              "rgSources",
              "onIncrementalError",
              "onError",
            ]),
            A = this.src;
          return s.createElement(
            "img",
            Object.assign({ src: A, ref: this.m_refImage }, o, {
              onError: this.OnImageError,
            }),
          );
        }
      }
      (0, r.gn)([i.ak], n.prototype, "OnImageError", null);
    },
  },
]);

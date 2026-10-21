/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [22634],
    {
      15860: (b, U, r) => {
        "use strict";
        r.d(U, { L: () => L, c: () => f });
        var e = r(27386),
          u = r(76617),
          S = r(58632),
          y = r.n(S);
        function f(d, C) {
          return new (y())(
            async (x) => {
              const w = [...x],
                s = await e.xtC.GetPlayerLinkDetails(d, { steamids: w }),
                D = new Map();
              return (
                s
                  .Body()
                  .accounts()
                  .forEach((A) => {
                    const k = A.toObject();
                    D.set(k.public_data.steamid, k);
                  }),
                w.map((A) => D.get(A) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...C },
          );
        }
        function L(d) {
          return (0, u.V)("PlayerLinkDetails", () => f(d));
        }
      },
      59432: (b, U, r) => {
        "use strict";
        r.d(U, { Gw: () => f, Lk: () => L, ai: () => y, mm: () => S });
        var e = r(14947);
        const u = e.sH.box(void 0);
        function S() {
          return u.get();
        }
        function y(d) {
          (0, e.h5)(() => u.set(d));
        }
        function f() {
          const d = u.get();
          return d || Math.floor(Date.now() / 1e3);
        }
        function L() {
          const d = u.get();
          return d ? new Date(d * 1e3) : new Date();
        }
      },
      76617: (b, U, r) => {
        "use strict";
        r.d(U, { V: () => C });
        function e(x) {
          return Object.prototype.toString.call(x) === "[object Object]";
        }
        function u(x) {
          if (!e(x)) return !1;
          const w = x.constructor;
          if (typeof w > "u") return !0;
          const s = w.prototype;
          return !(
            !e(s) || !Object.prototype.hasOwnProperty.call(s, "isPrototypeOf")
          );
        }
        function S(...x) {
          return JSON.stringify(x, (w, s) => {
            if (u(s)) {
              const D = {};
              return (
                Object.keys(s)
                  .sort()
                  .forEach((A) => {
                    D[A] = s[A];
                  }),
                D
              );
            }
            return s;
          });
        }
        var y = r(90626),
          f = r(7850);
        const L = (0, y.createContext)({ instances: {}, factories: {} });
        function d(x) {
          const { name: w, fnFactory: s, children: D } = x,
            A = React.useContext(L),
            [k] = useState({}),
            R = useMemo(
              () => ({
                instances: k,
                factories: { ...A.factories, [w]: s },
                parent: A,
              }),
              [k, w, A],
            );
          return jsx(L.Provider, { value: R, children: D });
        }
        function C(x, w) {
          const s = (0, y.useContext)(L),
            D = typeof x == "string" ? x : S(...x);
          let A = s;
          for (; A; ) {
            if (D in A.instances) return A.instances[D];
            if (D in A.factories) break;
            A = A.parent;
          }
          const R = (A?.factories[D] ?? w)();
          return ((A ?? s).instances[D] = R), R;
        }
      },
      40426: (b, U, r) => {
        "use strict";
        r.d(U, { XC: () => w, _G: () => D });
        var e = r(7850),
          u = r(90626),
          S = r(36118),
          y = r(36707),
          f = r(41672),
          L = r(96538),
          d = r(75358),
          C = r.n(d),
          x = r(18210);
        function w() {
          const [A, k] = u.useState(void 0),
            R = u.useCallback(() => k(void 0), []),
            v = (0, e.jsx)(L.EN, {
              active: A !== void 0,
              children: (0, e.jsx)(s, { closeModal: R, rgImageURL: A }),
            });
          return [k, v];
        }
        function s(A) {
          const { closeModal: k, rgImageURL: R } = A,
            [v, m] = u.useState(0),
            o = R?.length ?? 0,
            p = u.useCallback(() => {
              v == 0 ? m(o - 1) : m(v - 1);
            }, [v, o]),
            I = u.useCallback(() => {
              R && v + 1 >= o ? m(0) : m(v + 1);
            }, [v, R, o]);
          return (0, e.jsxs)(L.eV, {
            title: (0, x.we)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: k,
            bHideCloseIcon: !0,
            modalClassName: C().PopupScreenshotModal,
            children: [
              (0, e.jsx)(D, {
                index: v,
                numElements: R?.length || 0,
                fnForward: I,
                fnBackwards: p,
                fnClose: k,
                bCircular: !0,
              }),
              (0, e.jsx)("div", {
                className: C().PopupScreenshotContainer,
                children: (0, e.jsx)("img", {
                  className: C().PopupScreenshot,
                  src: R?.[v],
                  alt: "",
                }),
              }),
            ],
          });
        }
        function D(A) {
          const {
            index: k,
            numElements: R,
            fnForward: v,
            fnBackwards: m,
            fnClose: o,
            bCircular: p,
          } = A;
          (0, f.E)("ArrowLeft", () => m?.(), !0, !0),
            (0, f.E)("Left", () => m?.(), !0, !0),
            (0, f.E)("ArrowRight", () => v?.(), !0, !0),
            (0, f.E)("Right", () => v?.(), !0, !0),
            (0, f.E)("Escape", () => o && o(), !0, !0),
            (0, f.E)("Esc", () => o && o(), !0, !0);
          let I = R > 1;
          return (0, e.jsxs)("div", {
            className: C().ButtonCtn,
            children: [
              I &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("button", {
                      type: "button",
                      className: (0, y.A)(
                        C().ButtonIcon,
                        k === 0 && !p ? C().Disabled : null,
                      ),
                      onClick: m,
                      "aria-label": (0, x.we)("#Carousel_Prev"),
                      children: (0, e.jsx)(S.V5W, { angle: 270 }),
                    }),
                    (0, e.jsx)("button", {
                      type: "button",
                      className: (0, y.A)(
                        C().ButtonIcon,
                        k === R - 1 && !p ? C().Disabled : null,
                      ),
                      onClick: v,
                      "aria-label": (0, x.we)("#Carousel_Next"),
                      children: (0, e.jsx)(S.V5W, { angle: 90 }),
                    }),
                  ],
                }),
              (0, e.jsx)("button", {
                type: "button",
                className: C().ButtonIcon,
                onClick: o,
                "aria-label": (0, x.we)("#Button_Close"),
                children: (0, e.jsx)(S.X, {}),
              }),
            ],
          });
        }
      },
      46943: (b, U, r) => {
        "use strict";
        r.d(U, { Ul: () => o, xz: () => _, $Y: () => g, i8: () => I });
        var e = r(7850),
          u = r(90626),
          S = r(75844),
          y = r(5858),
          f = r(36707),
          L = r(3166),
          d = r(13465);
        const C =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          x =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          w =
            r.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var s = r(43047),
          D = r.n(s),
          A = r(71742),
          k = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          v = (l, h, P, G) => {
            for (
              var N = G > 1 ? void 0 : G ? R(h, P) : h, M = l.length - 1, O;
              M >= 0;
              M--
            )
              (O = l[M]) && (N = (G ? O(h, P, N) : O(N)) || N);
            return G && N && k(h, P, N), N;
          };
        function m(l) {
          switch (l) {
            case "X-Small":
            case "Small":
              return C;
            case "Medium":
            case "MediumLarge":
              return x;
            case "Large":
            case "X-Large":
            case "FillArea":
              return w;
            default:
              return (0, A.z_)(l, `Unhandled size ${l}`), x;
          }
        }
        const o = u.memo(function (h) {
            const {
                strAvatarURL: P,
                size: G = "Medium",
                className: N,
                statusStyle: M,
                statusPosition: O,
                children: W,
                ...K
              } = h,
              Y = u.useMemo(() => {
                const Q = [];
                return P && Q.push(P), Q.push(m(G)), Q;
              }, [P, G]);
            return (0, e.jsxs)("div", {
              className: (0, f.A)(
                D().avatarHolder,
                "avatarHolder",
                "no-drag",
                G,
                N,
              ),
              ...K,
              children: [
                (0, e.jsx)("div", {
                  className: (0, f.A)(D().avatarStatus, "avatarStatus", O),
                  style: M,
                }),
                (0, e.jsx)(d.c, {
                  className: (0, f.A)(D().avatar, "avatar"),
                  rgSources: Y,
                  draggable: !1,
                }),
                W,
              ],
            });
          }),
          p = u.memo(function (h) {
            const {
              strAvatarURL: P,
              size: G = "Medium",
              className: N,
              statusStyle: M,
              statusPosition: O,
              children: W,
              ...K
            } = h;
            return (0, e.jsxs)("div", {
              className: (0, f.A)(
                D().avatarHolder,
                "avatarHolder",
                "no-drag",
                G,
                N,
              ),
              ...K,
              children: [
                (0, e.jsx)("div", {
                  className: (0, f.A)(D().avatarStatus, "avatarStatus", O),
                  style: M,
                }),
                (0, e.jsx)("img", {
                  className: (0, f.A)(D().avatar, "avatar"),
                  src: P,
                  draggable: !1,
                }),
                W,
              ],
            });
          });
        let I = class extends u.Component {
          render() {
            const {
              persona: l,
              size: h = "Medium",
              animatedAvatar: P,
              className: G,
              strBackupAvatarURL: N,
              ...M
            } = this.props;
            let O = "";
            return (
              P && P.image_small && P.image_small.length != 0
                ? (O = L.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + P.image_small)
                : l
                  ? ((O = l.avatar_url_medium),
                    h == "Small" || h == "X-Small"
                      ? (O = l.avatar_url)
                      : (h == "Large" || h == "X-Large" || h == "FillArea") &&
                        (O = l.avatar_url_full))
                  : N && (O = N),
              (0, e.jsx)(o, {
                strAvatarURL: O,
                size: h,
                className: (0, f.A)((0, y.rO)(l), G),
                ...M,
              })
            );
          }
        };
        I = v([S.PA], I);
        const g = (0, S.PA)((l) => {
          const {
            profileItem: h,
            className: P,
            bDisableAnimation: G,
            ...N
          } = l;
          if (!h || !h.image_small || h.image_small.length == 0) return null;
          let M = G ? h.image_large : h.image_small;
          return (
            M || (M = h.image_small),
            M.startsWith("https://") ||
              (M = L.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + M),
            (0, e.jsx)("div", {
              className: (0, f.A)(D().avatarFrame, P, "avatarFrame"),
              ...N,
              children: (0, e.jsx)("img", {
                className: D().avatarFrameImg,
                src: M,
              }),
            })
          );
        });
        let _ = class extends u.Component {
          m_timer;
          constructor(l) {
            super(l),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let l = 0;
            switch (this.props.loopDuration) {
              case "Short":
                l = 2500;
                break;
              case "Medium":
                l = 5e3;
                break;
              case "Long":
                l = 1e4;
                break;
            }
            l != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                l,
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
          componentDidUpdate(l) {
            this.props.loopDuration != l.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != l.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: l,
              animatedAvatar: h,
              avatarFrame: P,
              children: G,
              style: N,
              bLimitProfileFrameAnimationTime: M,
              bParentHovered: O,
              ...W
            } = this.props;
            W.onClick && (N = { ...N, cursor: "pointer" });
            const K = this.state.bAnimate ? (h ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(I, {
                animatedAvatar: K,
                ...W,
                children: [
                  G,
                  (0, e.jsx)(g, {
                    profileItem: P ?? null,
                    bDisableAnimation: M && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        _ = v([S.PA], _);
      },
      7582: (b, U, r) => {
        "use strict";
        r.d(U, { HD: () => C, f1: () => k, s4: () => R, sB: () => A });
        var e = r(19367),
          u = r.n(e),
          S = r(90626),
          y = r(59432),
          f = r(47689),
          L = r(77291);
        class d {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, y.mm)();
          }
          set nOverrideDateNow(m) {
            (0, y.ai)(m);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, y.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, y.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, y.mm)();
          }
          ParseDevOverrides(m) {
            if (!m || m.length == 0) return;
            new URLSearchParams(m[0] == "?" ? m.substring(1) : m).has("t");
          }
        }
        const C = new d();
        (0, L.V)("g_EventCalendarDevFeatures", C);
        function x(v = 1) {
          const [m, o] = React.useState(() => D()),
            p = useCancelTokenSource("useTimeNowWithOverride"),
            I = React.useCallback(() => {
              p.token.reason || o(D());
            }, []);
          return (
            React.useEffect(() => {
              const g = 1e3 * v,
                _ = Date.now() % g,
                l = g - _,
                h = window.setTimeout(I, l);
              return () => {
                window.clearTimeout(h);
              };
            }, [m, v, I]),
            m
          );
        }
        const s = Math.floor(new Date().getTime() / 1e3);
        function D() {
          const v = Math.floor(Date.now() / 1e3);
          return C.nOverrideDateNow ? C.nOverrideDateNow + (v - s) : v;
        }
        function A() {
          return C.nOverrideDateNow ?? s;
        }
        function k() {
          return S.useMemo(() => A(), []);
        }
        function R() {
          return S.useMemo(() => C.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      35098: (b, U, r) => {
        "use strict";
        r.d(U, { DW: () => D, js: () => w, mK: () => m, tb: () => v });
        var e = r(90626),
          u = r(80902),
          S = r(54806),
          y = r(99412),
          f = r(68312),
          L = r(15369),
          d = r(5858),
          C = r(76559),
          x = r(15860);
        function w(g) {
          const _ = (0, f.KV)(),
            l = e.useContext(R);
          return (0, u.I)(m(l, _, g));
        }
        function s(g) {
          const _ = React.useRef(void 0),
            l = w(g);
          return l.data
            ? l
            : (_.current ||
                (_.current = new CPersonaStateImpl(
                  typeof g == "string"
                    ? new CSteamID(g)
                    : CSteamID.InitFromAccountID(g),
                )),
              { ...l, data: _.current });
        }
        function D(g) {
          const _ = (0, f.KV)(),
            l = e.useContext(R);
          return (0, S.E)({ queries: g.map((h) => m(l, _, h)) });
        }
        function A(g) {
          return ReactQueryClient.getQueryData(["PlayerSummary", g]);
        }
        function k(g) {
          const { loadPersonaState: _, children: l } = g,
            h = React.useMemo(() => ({ loadPersonaState: _ }), [_]);
          return React.createElement(R.Provider, { value: h }, l);
        }
        const R = e.createContext({
          loadPersonaState: async (g, _) => {
            if (g == null) return null;
            const l = await p(_).load(
              C.b.InitFromAccountID(g).ConvertTo64BitString(),
            );
            return I(C.b.InitFromAccountID(g), l);
          },
        });
        function v() {
          return e.useContext(R);
        }
        function m(g, _, l) {
          const h = typeof l == "string" ? new C.b(l).GetAccountID() : l;
          return {
            queryKey: ["PlayerSummary", h],
            queryFn: () => g.loadPersonaState(h, _),
            enabled: !!h,
          };
        }
        let o;
        function p(g) {
          return (o ??= (0, x.c)(g));
        }
        function I(g, _) {
          let l = new d.Z(g);
          const h = _?.public_data,
            P = _?.private_data;
          return (
            (l.m_bInitialized = !!_),
            (l.m_ePersonaState = P?.persona_state ?? y.cU3),
            (l.m_strAvatarHash = h?.sha_digest_avatar
              ? (0, L.Kx)(h.sha_digest_avatar)
              : d.dV),
            (l.m_strPlayerName = h?.persona_name ?? g.ConvertTo64BitString()),
            (l.m_strAccountName = P?.account_name),
            P?.persona_state_flags &&
              (l.m_unPersonaStateFlags = P?.persona_state_flags),
            P?.game_id && (l.m_gameid = P?.game_id),
            P?.game_server_ip_address &&
              (l.m_unGameServerIP = P?.game_server_ip_address),
            P?.lobby_steam_id && (l.m_game_lobby_id = P?.lobby_steam_id),
            P?.game_extra_info && (l.m_strGameExtraInfo = P?.game_extra_info),
            h?.profile_url && (l.m_strProfileURL = h.profile_url),
            l
          );
        }
      },
      63547: (b, U, r) => {
        "use strict";
        r.d(U, { QW: () => R, VZ: () => k, g: () => D, kF: () => s });
        var e = r(72604),
          u = r(35038),
          S = r(55051),
          y = r(72609),
          f = r(80902),
          L = r(75233),
          d = r(51614),
          C = r(90626),
          x = r(68312);
        const w = "PlaytestInvites";
        function s() {
          const v = (0, x.KV)();
          return (0, f.I)({
            queryKey: [w],
            queryFn: async () => {
              const m = u.w.Init(S.rX),
                o = await S.BX.GetInvites(v, m);
              if (o.GetEResult() != e.R)
                throw new Error(
                  `Error from usePlaytestInvite: ${o.GetEResult()} ${o.GetErrorMessage()}`,
                );
              return o.Body()?.toObject().invites ?? [];
            },
          });
        }
        function D(v) {
          const m = (0, x.KV)(),
            o = (0, L.jE)();
          return (0, d.n)({
            mutationFn: async (p) => {
              const I = u.w.Init(S.q);
              I.Body().add_invite_ids(v),
                I.Body().set_status(p.bAccept ? S.b1.T5 : S.b1.eh);
              const g = await S.BX.UpdateInvites(m, I);
              if (g.GetEResult() != e.R)
                throw {
                  result: g.GetEResult(),
                  message: `Error from UpdatePlaytestInvite: ${g.GetErrorMessage()} ( ${g.GetEResult()} )`,
                };
            },
            onSuccess: (p, I) => {
              o.setQueryData([w], (g) =>
                g.map((_) =>
                  _.invite_id === v
                    ? { ..._, status: I.bAccept ? S.b1.T5 : S.b1.eh }
                    : _,
                ),
              );
            },
            onError: () => {
              o.invalidateQueries({ queryKey: [w] });
            },
          });
        }
        function A(v) {
          return ["PlaytestUserStatus", v];
        }
        function k(v) {
          const m = (0, x.KV)();
          return (0, f.I)({
            queryKey: A(v),
            queryFn: async () => {
              if (y.iA.logged_in) {
                const o = u.w.Init(S.eW);
                v && o.Body().set_appid(v);
                const p = await S.BX.GetUserStatus(m, o);
                if (p.GetEResult() != e.R)
                  throw new Error(
                    `Error from usePlaytestUserStatus: ${p.GetEResult()} ${p.GetErrorMessage()}`,
                  );
                return p.Body()?.toObject().results ?? [];
              } else return [];
            },
            staleTime: 600 * 1e3,
          });
        }
        function R() {
          const v = (0, L.jE)();
          return C.useCallback(
            (m, o) => {
              v.setQueryData(A(m), o);
            },
            [v],
          );
        }
      },
      84676: (b, U, r) => {
        "use strict";
        r.d(U, {
          G6: () => D,
          Gg: () => R,
          Ow: () => k,
          Sq: () => x,
          YM: () => g,
          eR: () => w,
          ik: () => s,
          mZ: () => v,
          t7: () => A,
          zX: () => o,
        });
        var e = r(41735),
          u = r.n(e),
          S = r(90626),
          y = r(72604),
          f = r(48156),
          L = r(30096),
          d = r(10142);
        function C(_, l, h = !0) {
          const P = h
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            G = h || CStoreItemCache.Get().BHasStoreItem(_, l, P) ? _ : null,
            [N, M] = D(G, l, P),
            [O, W] = useState(null),
            [K, Y] = D(O, l, P);
          useEffect(() => {
            N?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              W(N.GetParentAppID());
          }, [N]);
          let Q = N?.GetShortDescription()
            ? StripBBCodeTags(N.GetShortDescription())
            : "";
          (!Q || Q.length === 0) &&
            K &&
            (Q = K?.GetShortDescription()
              ? StripBBCodeTags(K.GetShortDescription())
              : "");
          const z = M == s && (!O || Y == s);
          return [Q, z];
        }
        const x = 1,
          w = 2,
          s = 3;
        function D(_, l, h, P) {
          const G = (0, S.useRef)(void 0),
            N = (0, S.useRef)(void 0),
            M = (0, L.CH)();
          G.current = _;
          const [O, W] = (0, S.useState)(void 0),
            {
              include_assets: K,
              include_release: Y,
              include_platforms: Q,
              include_all_purchase_options: z,
              include_screenshots: oe,
              include_trailers: ce,
              include_ratings: le,
              include_tag_count: re,
              include_reviews: te,
              include_basic_info: de,
              include_supported_languages: ne,
              include_full_description: ie,
              include_included_items: q,
              include_assets_without_overrides: ee,
              apply_user_filters: pe,
              include_links: J,
              include_extra_details: ue,
              include_optin_registration_tags: me,
            } = h;
          if (
            ((0, S.useEffect)(() => {
              const Z = {
                include_assets: K,
                include_release: Y,
                include_platforms: Q,
                include_all_purchase_options: z,
                include_screenshots: oe,
                include_trailers: ce,
                include_ratings: le,
                include_tag_count: re,
                include_reviews: te,
                include_basic_info: de,
                include_supported_languages: ne,
                include_full_description: ie,
                include_included_items: q,
                include_assets_without_overrides: ee,
                apply_user_filters: pe,
                include_links: J,
                include_extra_details: ue,
                include_optin_registration_tags: me,
              };
              let _e = null;
              return (
                !_ ||
                  _ < 0 ||
                  d.A.Get().BHasStoreItem(_, l, Z) ||
                  (O !== void 0 && P && P == N.current) ||
                  (P !== N.current && (W(void 0), (N.current = P)),
                  (_e = u().CancelToken.source()),
                  d.A.Get()
                    .QueueStoreItemRequest(_, l, Z)
                    .then((we) => {
                      !_e?.token.reason && G.current === _ && W(we == y.R), M();
                    })),
                () => _e?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              _,
              l,
              P,
              O,
              K,
              Y,
              Q,
              z,
              oe,
              ce,
              le,
              re,
              te,
              de,
              ne,
              ie,
              q,
              ee,
              pe,
              J,
              ue,
              me,
              M,
            ]),
            !_)
          )
            return [null, w];
          if (O === !1) return [void 0, w];
          if (d.A.Get().BIsStoreItemMissing(_, l)) return [void 0, w];
          if (!d.A.Get().BHasStoreItem(_, l, h)) return [void 0, x];
          const ge = d.A.Get().GetStoreItemWithLegacyVisibilityCheck(_, l);
          return ge ? [ge, s] : [null, w];
        }
        function A(_, l, h) {
          return D(_, f.c6.qI, l, h);
        }
        function k(_, l, h) {
          return D(_, f.c6.xO, l, h);
        }
        function R(_, l, h) {
          return D(_, f.c6.RD, l, h);
        }
        function v(_, l, h) {
          const [P, G] = D(_, l, h);
          let N;
          P?.GetStoreItemType() == f.c6.RD &&
            !P.GetAssets()?.GetHeaderURL() &&
            P?.GetIncludedAppIDs().length == 1 &&
            (N = P.GetIncludedAppIDs()[0]);
          const [M, O] = A(N, h);
          return N && M?.BIsVisible() ? [M, O] : [P, G];
        }
        function m(_, l, h, P) {
          const G = (0, L.CH)(),
            {
              include_assets: N,
              include_release: M,
              include_platforms: O,
              include_all_purchase_options: W,
              include_screenshots: K,
              include_trailers: Y,
              include_ratings: Q,
              include_tag_count: z,
              include_reviews: oe,
              include_basic_info: ce,
              include_supported_languages: le,
              include_full_description: re,
              include_included_items: te,
              include_assets_without_overrides: de,
              apply_user_filters: ne,
              include_links: ie,
              include_extra_details: q,
              include_optin_registration_tags: ee,
            } = h;
          return (
            (0, S.useEffect)(() => {
              if (!_ || _.length == 0) return;
              const J = {
                  include_assets: N,
                  include_release: M,
                  include_platforms: O,
                  include_all_purchase_options: W,
                  include_screenshots: K,
                  include_trailers: Y,
                  include_ratings: Q,
                  include_tag_count: z,
                  include_reviews: oe,
                  include_basic_info: ce,
                  include_supported_languages: le,
                  include_full_description: re,
                  include_included_items: te,
                  include_assets_without_overrides: de,
                  apply_user_filters: ne,
                  include_links: ie,
                  include_extra_details: q,
                  include_optin_registration_tags: ee,
                },
                ue = _.filter(
                  (Z) =>
                    !(
                      d.A.Get().BHasStoreItem(Z, l, J) ||
                      d.A.Get().BIsStoreItemMissing(Z, l)
                    ),
                );
              if (ue.length == 0) return;
              const me = u().CancelToken.source(),
                ge = ue.map((Z) => d.A.Get().QueueStoreItemRequest(Z, l, J));
              return (
                Promise.all(ge).then(() => {
                  me.token.reason || G();
                }),
                () => me.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              _,
              l,
              P,
              G,
              N,
              M,
              O,
              W,
              K,
              Y,
              Q,
              z,
              oe,
              ce,
              le,
              re,
              te,
              de,
              ne,
              ie,
              q,
              ee,
            ]),
            _
              ? _.every(
                  (J) =>
                    d.A.Get().BHasStoreItem(J, l, h) ||
                    d.A.Get().BIsStoreItemMissing(J, l),
                )
                ? _.every((J) =>
                    d.A.Get().GetStoreItemWithLegacyVisibilityCheck(J, l),
                  )
                  ? s
                  : w
                : x
              : w
          );
        }
        function o(_, l, h) {
          return m(_, f.c6.qI, l, h);
        }
        function p(_, l, h) {
          return m(_, EStoreItemType.k_EStoreItemType_Bundle, l, h);
        }
        function I(_, l, h) {
          return m(_, EStoreItemType.k_EStoreItemType_Package, l, h);
        }
        function g() {
          S.useEffect(
            () => (
              d.A.Get().SetReturnUnavailableItems(!0),
              () => d.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      39239: (b, U, r) => {
        "use strict";
        r.d(U, { i: () => C, o: () => d });
        var e = r(7850),
          u = r(90626),
          S = r(18210),
          y = r(67523),
          f = r.n(y),
          L = r(80150);
        function d(x) {
          const {
              className: w,
              srcs: s,
              lazyLoad: D,
              width: A,
              height: k,
              alt: R,
              crossOrigin: v,
            } = x,
            [m, o] = u.useState(s.length),
            [p, I] = u.useState(0);
          u.useEffect(() => {
            m != s.length && (o(s.length), I(0));
          }, [m, s.length]);
          const g = u.useCallback(() => {
            x.onImageError && x.onImageError(x.srcs[p]),
              p + 1 < x.srcs.length && I(p + 1);
          }, [p, x]);
          return s.length == 0
            ? null
            : (0, e.jsx)("img", {
                className: w,
                src: s[p],
                crossOrigin: v,
                onError: g,
                loading: D ? "lazy" : void 0,
                width: A,
                height: k,
                alt: R,
              });
        }
        function C(x) {
          const [w, s] = u.useState(!1),
            {
              className: D,
              src: A,
              lazyLoad: k,
              width: R,
              height: v,
              alt: m,
              crossOrigin: o,
            } = x;
          return w
            ? (0, e.jsxs)("div", {
                className: y.ErrorDiv,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, S.we)("#Image_ErrorTitle", A),
                  }),
                  (0, e.jsx)("ul", {
                    children: (0, e.jsx)("li", {
                      children: (0, S.we)("#Image_Error_msg1"),
                    }),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, S.we)("#Image_Error_suggestion"),
                  }),
                ],
              })
            : (0, e.jsx)(L.o, {
                className: D,
                src: A,
                onError: () => s(!0),
                crossOrigin: o,
                loading: k ? "lazy" : void 0,
                width: R,
                height: v,
                alt: m,
              });
        }
      },
      80150: (b, U, r) => {
        "use strict";
        r.d(U, { o: () => D });
        var e = r(7850),
          u = r(90626),
          S = r(36118),
          y = r(36707),
          f = r(40426),
          L = r(21659),
          d = r(21038),
          C = r.n(d);
        const x = 1.3,
          w = 3,
          s = 256;
        function D(A) {
          const [k, R] = (0, u.useState)(!1),
            [v, m] = (0, u.useState)({
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: 0,
              displayHeight: 0,
            }),
            o = (0, u.useRef)(null),
            [p, I] = (0, f.XC)();
          return (
            (0, u.useEffect)(() => {
              v.naturalWidth > v.displayWidth * x &&
                v.naturalHeight > v.displayHeight * x &&
                v.naturalWidth > s &&
                v.naturalWidth / v.naturalHeight < w &&
                R(!0);
            }, [v]),
            k
              ? (0, e.jsxs)("span", {
                  className: d.PreviewCtn,
                  children: [
                    I,
                    (0, e.jsx)("span", {
                      className: d.SVG,
                      children: (0, e.jsx)(S.YNO, {}),
                    }),
                    (0, e.jsx)("img", {
                      ...A,
                      className: (0, y.A)({
                        ...(A.className && { [A.className]: !0 }),
                      }),
                      onClick: (g) => {
                        A.src && p([A.src]);
                      },
                    }),
                  ],
                })
              : (0, e.jsx)("img", {
                  ...A,
                  ref: o,
                  onLoad: (g) => {
                    if (!g.currentTarget.closest("a") && !(0, L.c5)()) {
                      const {
                        naturalWidth: _,
                        naturalHeight: l,
                        width: h,
                        height: P,
                      } = g.currentTarget;
                      m({
                        naturalWidth: _,
                        naturalHeight: l,
                        displayWidth: h,
                        displayHeight: P,
                      });
                    }
                  },
                })
          );
        }
      },
      13465: (b, U, r) => {
        "use strict";
        r.d(U, { c: () => S });
        var e = r(7850),
          u = r(90626);
        function S(y) {
          const {
              rgSources: f,
              onIncrementalError: L,
              onError: d,
              strAltText: C,
              ref: x,
              ...w
            } = y,
            [s, D] = u.useState(0),
            A = u.useMemo(() => JSON.stringify(f), [f]),
            [k, R] = u.useState(A);
          k != A && (R(A), D(0));
          const v = u.useMemo(() => {
              let p = "";
              return (
                f && f.length > s && (p = f[s]),
                p ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    y,
                    s,
                  ),
                  (p =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                p
              );
            }, [f, s, y]),
            m = u.useCallback(
              (p) => {
                L?.(p, f[s], s);
                const I = s + 1;
                I >= f.length && d && d(p), I < f.length && D(I);
              },
              [s, d, L, f],
            ),
            o = u.useRef(null);
          return (
            u.useImperativeHandle(
              x,
              () => ({ imgRef: o, nSourceIndex: s, nSourceLength: f.length }),
              [o, s, f],
            ),
            u.useEffect(() => {
              const p = o.current;
              p?.complete && p.naturalWidth == 0 && (p.src = p.src);
            }, []),
            (0, e.jsx)("img", { ref: o, ...w, src: v, onError: m, alt: C }, k)
          );
        }
      },
      69: (b, U, r) => {
        "use strict";
        r.r(U),
          r.d(U, { AccountPreferencesRoutes: () => Ve, default: () => Xt });
        var e = r(7850),
          u = r(90626),
          S = r(92757),
          y = r(14947),
          f = r(72604),
          L = r(34592),
          d = r(3166),
          C = r(79024),
          x = r(41735),
          w = r.n(x),
          s = r(18210),
          D = Object.defineProperty,
          A = Object.getOwnPropertyDescriptor,
          k = (a, t, n, i) => {
            for (
              var c = i > 1 ? void 0 : i ? A(t, n) : t, j = a.length - 1, T;
              j >= 0;
              j--
            )
              (T = a[j]) && (c = (i ? T(t, n, c) : T(c)) || c);
            return i && c && D(t, n, c), c;
          };
        class R {
          m_Preferences = void 0;
          constructor(t) {
            (0, y.Gn)(this),
              (this.m_Preferences = t),
              (!this.m_Preferences.content_customization ||
                Array.isArray(this.m_Preferences.content_customization)) &&
                (this.m_Preferences.content_customization = {}),
              (!this.m_Preferences.third_party_analytics ||
                Array.isArray(this.m_Preferences.third_party_analytics)) &&
                (this.m_Preferences.third_party_analytics = {}),
              (!this.m_Preferences.third_party_content ||
                Array.isArray(this.m_Preferences.third_party_content)) &&
                (this.m_Preferences.third_party_content = {}),
              (!this.m_Preferences.valve_analytics ||
                Array.isArray(this.m_Preferences.valve_analytics)) &&
                (this.m_Preferences.valve_analytics = {}),
              (this.m_Preferences.utm_enabled === void 0 ||
                this.m_Preferences.utm_enabled === null) &&
                (this.m_Preferences.utm_enabled = !0),
              (this.m_Preferences.preference_state == C.CY.__ ||
                this.m_Preferences.preference_state == C.CY.PK) &&
                ((this.m_Preferences.valve_analytics.product_impressions_tracking =
                  !0),
                (this.m_Preferences.content_customization.recentapps = !0),
                (this.m_Preferences.third_party_analytics.google_analytics =
                  !0),
                (this.m_Preferences.third_party_content.sketchfab = !0),
                (this.m_Preferences.third_party_content.twitter = !0),
                (this.m_Preferences.third_party_content.vimeo = !0),
                (this.m_Preferences.third_party_content.youtube = !0)),
              this.m_Preferences.version == C.ie.CL &&
                (this.m_Preferences.version = C.ie.mO);
          }
          GetVersion() {
            return this.m_Preferences.version;
          }
          GetPreferenceState() {
            return this.m_Preferences.preference_state;
          }
          BIsAllowAll() {
            return (
              this.m_Preferences.preference_state == C.CY.PK ||
              this.m_Preferences.preference_state == C.CY.__
            );
          }
          BIsRejectAll() {
            return this.m_Preferences.preference_state == C.CY.rE;
          }
          SetPreferenceState(t) {
            if (this.m_Preferences.preference_state != t) {
              if (
                ((this.m_Preferences.preference_state = t),
                t == C.CY.PK || t == C.CY.rE)
              ) {
                let n = t == C.CY.PK;
                (this.m_Preferences.content_customization.recentapps = n),
                  (this.m_Preferences.third_party_analytics.google_analytics =
                    n),
                  (this.m_Preferences.third_party_content.sketchfab = n),
                  (this.m_Preferences.third_party_content.twitter = n),
                  (this.m_Preferences.third_party_content.vimeo = n),
                  (this.m_Preferences.third_party_content.youtube = n),
                  (this.m_Preferences.valve_analytics.product_impressions_tracking =
                    n);
              }
              this.PostCookieSettings();
            }
          }
          GetRecentApps() {
            return this.m_Preferences.content_customization.recentapps;
          }
          ToggleRecentApps() {
            (this.m_Preferences.content_customization.recentapps =
              !this.m_Preferences.content_customization.recentapps),
              this.ProcessToggle();
          }
          GetImpressions() {
            return this.m_Preferences.valve_analytics
              .product_impressions_tracking;
          }
          ToggleImpressions() {
            (this.m_Preferences.valve_analytics.product_impressions_tracking =
              !this.m_Preferences.valve_analytics.product_impressions_tracking),
              this.ProcessToggle();
          }
          GetSketchfab() {
            return this.m_Preferences.third_party_content.sketchfab;
          }
          ToggleSketchfab() {
            (this.m_Preferences.third_party_content.sketchfab =
              !this.m_Preferences.third_party_content.sketchfab),
              this.ProcessToggle();
          }
          GetVimeo() {
            return this.m_Preferences.third_party_content.vimeo;
          }
          ToggleVimeo() {
            (this.m_Preferences.third_party_content.vimeo =
              !this.m_Preferences.third_party_content.vimeo),
              this.ProcessToggle();
          }
          GetYouTube() {
            return this.m_Preferences.third_party_content.youtube;
          }
          ToggleYouTube() {
            (this.m_Preferences.third_party_content.youtube =
              !this.m_Preferences.third_party_content.youtube),
              this.ProcessToggle();
          }
          GetUTMEnabled() {
            return this.m_Preferences.utm_enabled;
          }
          ToggleUTMEnabled() {
            (this.m_Preferences.utm_enabled = !this.m_Preferences.utm_enabled),
              this.PostCookieSettings();
          }
          ProcessToggle() {
            (this.m_Preferences.preference_state = C.CY.UI),
              this.PostCookieSettings();
          }
          async PostCookieSettings() {
            const t = d.TS.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              n = new FormData();
            n.set("sessionid", (0, d.KC)()),
              n.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let i = await w().post(t, n, { withCredentials: !0 });
              if (i.status != 200 || i?.data?.success != f.R)
                window.ShowAlertDialog(
                  (0, s.we)("#CookiePref_Error"),
                  (0, s.we)("#CookiePref_ErrorNotSaved"),
                );
              else if (i?.data?.success == f.R) {
                const { transfer_urls: c, transfer_params: j } = i.data;
                c && j && this.TransferCookiePreferencesToSites(c, j);
              }
            } catch {
              window.ShowAlertDialog(
                (0, s.we)("#CookiePref_Error"),
                (0, s.we)("#CookiePref_ErrorNotSaved"),
              );
            }
          }
          TransferCookiePreferencesToSites(t, n) {
            const i = new FormData();
            i.set("transfer_params", n);
            for (const c of t) w().post(c, i);
          }
        }
        k([y.sH], R.prototype, "m_Preferences", 2);
        var v = r(75844),
          m = r(16412),
          o = r(72518),
          p = r(36707),
          I = r(19298),
          g = r(24660);
        const _ = 0,
          l = 1,
          h = 2,
          P = 0,
          G = 1,
          N = 2,
          M = 3;
        var O = Object.defineProperty,
          W = Object.getOwnPropertyDescriptor,
          K = (a, t, n, i) => {
            for (
              var c = i > 1 ? void 0 : i ? W(t, n) : t, j = a.length - 1, T;
              j >= 0;
              j--
            )
              (T = a[j]) && (c = (i ? T(t, n, c) : T(c)) || c);
            return i && c && O(t, n, c), c;
          };
        class Y {
          m_Preferences = void 0;
          constructor(t) {
            (0, y.Gn)(this), (this.m_Preferences = t);
          }
          SetDeckFeedback(t) {
            (this.m_Preferences.provide_deck_feedback = t),
              this.PostStorePreferences();
          }
          SetGameFrameRateReporting(t) {
            (this.m_Preferences.game_frame_rate_reporting = t),
              this.PostStorePreferences();
          }
          GetProvideDeckFeedbackEnabled() {
            return this.m_Preferences.provide_deck_feedback == l;
          }
          GetGameFrameRateReportingEnabled() {
            return this.m_Preferences.game_frame_rate_reporting == N;
          }
          ToggleProvideDeckFeeback() {
            (this.m_Preferences.provide_deck_feedback =
              this.m_Preferences.provide_deck_feedback == l ? h : l),
              this.PostStorePreferences();
          }
          ToggleGameFrameRateReporting() {
            (this.m_Preferences.game_frame_rate_reporting =
              this.m_Preferences.game_frame_rate_reporting == N ? G : N),
              this.PostStorePreferences();
          }
          async PostStorePreferences() {
            const t = d.TS.STORE_BASE_URL + "account/savepreferences",
              n = new FormData();
            n.set("sessionid", (0, d.KC)()),
              n.set(
                "provide_deck_feedback",
                this.m_Preferences.provide_deck_feedback.toString(),
              ),
              n.set(
                "game_frame_rate_reporting",
                this.m_Preferences.game_frame_rate_reporting.toString(),
              );
            try {
              let i = await w().post(t, n, { withCredentials: !0 });
              i.status != 200 || i?.data?.success != f.R
                ? window.ShowAlertDialog(
                    (0, s.we)("#DataCollectionPref_Error"),
                    (0, s.we)("#DataCollectionPref_ErrorNotSaved"),
                  )
                : i?.data?.success == f.R;
            } catch {
              window.ShowAlertDialog(
                (0, s.we)("#DataCollectionPref_Error"),
                (0, s.we)("#DataCollectionPref_ErrorNotSaved"),
              );
            }
          }
        }
        K([y.sH], Y.prototype, "m_Preferences", 2);
        var Q = r(42993),
          z = r(99412),
          oe = Object.defineProperty,
          ce = Object.getOwnPropertyDescriptor,
          le = (a, t, n, i) => {
            for (
              var c = i > 1 ? void 0 : i ? ce(t, n) : t, j = a.length - 1, T;
              j >= 0;
              j--
            )
              (T = a[j]) && (c = (i ? T(t, n, c) : T(c)) || c);
            return i && c && oe(t, n, c), c;
          };
        const re = class De {
          m_rgSavedHardware = [];
          static s_AccountSavedHardwareStore;
          constructor() {
            (0, y.Gn)(this);
          }
          static Get() {
            return (
              De.s_AccountSavedHardwareStore ||
                ((De.s_AccountSavedHardwareStore = new De()),
                De.s_AccountSavedHardwareStore.Init()),
              De.s_AccountSavedHardwareStore
            );
          }
          Init() {
            this.m_rgSavedHardware = (0, d.Tc)(
              "saved_hardware",
              "application_config",
            );
          }
          GetSavedHardware() {
            return this.m_rgSavedHardware;
          }
          async PostRequest(t, n) {
            try {
              let i = await w().post(t, n, { withCredentials: !0 });
              return i.status != 200 || i?.data?.success != f.R
                ? (window.ShowAlertDialog(
                    (0, s.we)("#SavedHardware_Error_Title"),
                    (0, s.we)("#SavedHardware_Error_Desc"),
                  ),
                  !1)
                : !0;
            } catch {
              return (
                window.ShowAlertDialog(
                  (0, s.we)("#SavedHardware_Error_Title"),
                  (0, s.we)("#SavedHardware_Error_Desc"),
                ),
                !1
              );
            }
          }
          async RenameHardware(t, n) {
            const i = d.TS.STORE_BASE_URL + "account/ajaxhardwarerename",
              c = new FormData();
            if (
              (c.set("sessionid", (0, d.KC)()),
              c.set("savedHardwareID", t),
              c.set("strFriendlyName", n),
              await this.PostRequest(i, c))
            )
              for (let T = 0; T < this.m_rgSavedHardware.length; ++T)
                this.m_rgSavedHardware[T].hardware_id == t &&
                  (this.m_rgSavedHardware[T].friendly_name = n);
          }
          async DeleteHardware(t) {
            const n = d.TS.STORE_BASE_URL + "account/ajaxhardwaredelete",
              i = new FormData();
            if (
              (i.set("sessionid", (0, d.KC)()),
              i.set("savedHardwareID", t),
              await this.PostRequest(n, i))
            ) {
              for (let j = 0; j < this.m_rgSavedHardware.length; ++j)
                if (this.m_rgSavedHardware[j].hardware_id == t) {
                  this.m_rgSavedHardware.splice(j, 1);
                  return;
                }
            }
          }
        };
        le([y.sH], re.prototype, "m_rgSavedHardware", 2);
        let te = re;
        function de() {
          return te.Get().GetSavedHardware();
        }
        var ne = r(19730),
          ie = r(65946),
          q = r(88003),
          ee = r(82734),
          pe = r(1880);
        function J(a) {
          const { hw: t, closeModal: n } = a,
            i = u.useCallback(() => {
              te.Get().DeleteHardware(t.hardware_id), n();
            }, [n, t.hardware_id]);
          return (0, e.jsx)(pe.o0, {
            bDisableBackgroundDismiss: !0,
            strTitle: (0, s.we)("#SavedHardware_Delete_Confirm_Title"),
            onCancel: n,
            onOK: i,
            strOKButtonText: (0, s.we)("#SavedHardware_Delete"),
            children: (0, s.we)(
              "#SavedHardware_Delete_Confirm_Desc",
              t.friendly_name,
            ),
          });
        }
        function ue(a) {
          const { hw: t, closeModal: n } = a,
            [i, c] = u.useState(t.friendly_name),
            j = u.useCallback(() => {
              te.Get().RenameHardware(t.hardware_id, i.trim()), n();
            }, [i, n, t.hardware_id]);
          return (0, e.jsx)(pe.o0, {
            bDisableBackgroundDismiss: !0,
            strTitle: (0, s.we)("#SavedHardware_Rename_Confirm_Title"),
            onCancel: n,
            onOK: j,
            bOKDisabled: i.trim().length == 0,
            strOKButtonText: (0, s.we)("#SavedHardware_Rename"),
            children: (0, e.jsx)(m.FO, {
              label: (0, s.we)("#SavedHardware_Rename_Confirm_Label"),
              value: i,
              onChange: (T) => {
                c(T.target.value);
              },
              maxLength: 100,
            }),
          });
        }
        const me = (0, ie.PA)((a) => {
            const { hw: t } = a;
            let n;
            switch (t.system_info.gaming_device_type) {
              case z.LS$:
                n = (0, s.we)("#HardwareVariant_SteamDeck");
                break;
              case z.ppM:
                n = (0, s.we)("#HardwareVariant_LegionGoS");
                break;
              case z.bOm:
                n = (0, s.we)("#HardwareVariant_SteamMachine");
                break;
            }
            return (0, e.jsxs)("div", {
              className: o.SavedHardware,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsxs)("div", {
                      className: o.FriendlyName,
                      children: [t.friendly_name, " "],
                    }),
                    (0, e.jsxs)("div", {
                      className: o.Details,
                      children: [
                        n && (0, e.jsx)("div", { children: n }),
                        (0, e.jsx)("div", { children: t.system_info.os }),
                        (0, e.jsxs)("div", {
                          children: [
                            t.system_info.cpu_name,
                            " - ",
                            (0, ne.dm)(
                              parseInt(t.system_info.system_ram) * 1024 * 1024,
                              0,
                            ),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            t.system_info.adapter_description,
                            " - ",
                            (0, ne.dm)(
                              t.system_info.vram_size * 1024 * 1024,
                              0,
                            ),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: o.Timestamp,
                      children: (0, s.we)(
                        "#SavedHardware_Timestamp",
                        (0, s.$z)(t.timestamp_created),
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: o.SavedHardwareControls,
                  children: [
                    (0, e.jsx)(m.$n, {
                      className: o.RenameButton,
                      onClick: (i) =>
                        (0, q.pg)((0, e.jsx)(ue, { hw: t }), (0, ee.uX)(i)),
                      children: (0, s.we)("#SavedHardware_Rename"),
                    }),
                    (0, e.jsx)(m.$n, {
                      className: o.DeleteButton,
                      onClick: (i) =>
                        (0, q.pg)((0, e.jsx)(J, { hw: t }), (0, ee.uX)(i)),
                      children: (0, s.we)("#SavedHardware_Delete"),
                    }),
                  ],
                }),
              ],
            });
          }),
          ge = (0, ie.PA)(() => {
            const a = de(),
              t = typeof SteamClient < "u",
              n = u.useCallback(() => {
                window.location.reload();
              }, []),
              i = u.useCallback(() => {
                window.SteamClient.BrowserView.RegisterForMessageFromParent(n),
                  SteamClient.BrowserView.PostMessageToParent(
                    "ShowSavedHardwareDialog",
                    "",
                  );
              }, [n]);
            return (0, e.jsxs)("div", {
              className: o.CookieGroup,
              children: [
                (0, e.jsxs)("div", {
                  className: o.CookieSection,
                  children: [
                    (0, e.jsx)("h2", {
                      children: (0, s.we)("#SavedHardware_Title"),
                    }),
                    (0, e.jsx)("p", {
                      className: o.SectionDescription,
                      children: (0, s.we)("#SavedHardware_Desc"),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: o.SavedHardwareList,
                  children: a.map((c) =>
                    (0, e.jsx)(me, { hw: c }, c.hardware_id),
                  ),
                }),
                (0, e.jsx)("div", {
                  className: o.SavedHardwareControls,
                  children:
                    t &&
                    (0, e.jsxs)(m.$n, {
                      className: o.SavedHardwareAddPCButton,
                      onClick: i,
                      children: [(0, s.we)("#SavedHardware_AddNew"), " "],
                    }),
                }),
              ],
            });
          });
        let Z = null,
          _e = null;
        function we() {
          if (!Z) {
            let a = (0, d.Tc)("cookiepreferences", "application_config");
            Z = new R(a);
          }
          if (!_e) {
            let a = (0, d.Tc)("storedatapreferences", "application_config");
            _e = new Y(a);
          }
          return [Z, _e];
        }
        const Ye = (0, v.PA)(() => {
            const [a, t] = we(),
              n = (0, u.useCallback)(() => {
                a.SetPreferenceState(C.CY.PK);
              }, [a]),
              i = (0, u.useCallback)(() => {
                a.SetPreferenceState(C.CY.rE);
              }, [a]),
              c = (0, Q.LH)();
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: (0, p.A)(
                    o.CookieSettingsHeader,
                    "account_header_line noicon",
                  ),
                  children: (0, e.jsx)("div", {
                    children: (0, s.we)("#CookiePref_OptionalCookies_Title"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: "account_settings_container",
                  children: [
                    (0, e.jsxs)(I.Z, {
                      "flow-children": "row",
                      className: o.ButtonGroup,
                      children: [
                        (0, e.jsx)(g.ml, {
                          className: (0, p.A)(
                            o.AllButton,
                            a.BIsRejectAll() ? o.ButtonHighlight : "",
                          ),
                          onClick: i,
                          children: (0, s.we)("#CookiePref_RejectAll"),
                        }),
                        (0, e.jsx)(g.ml, {
                          className: (0, p.A)(
                            o.AllButton,
                            a.BIsAllowAll() ? o.ButtonHighlight : "",
                          ),
                          onClick: n,
                          children: (0, s.we)("#CookiePref_AcceptAll"),
                        }),
                      ],
                    }),
                    (0, e.jsx)(Je, { settings: a }),
                    (0, e.jsx)(Xe, { settings: a }),
                    (0, e.jsx)(Ze, { settings: a }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: (0, p.A)(
                    o.CookieSettingsHeader,
                    "account_header_line noicon",
                  ),
                  children: (0, e.jsx)("div", {
                    children: (0, s.we)(
                      "#CookiePref_TechnicallyNeccesary_Title",
                    ),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: "account_settings_container",
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#CookiePref_TechnicallyNeccesary_Desc",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: o.CookieGroup,
                      children: [
                        (0, e.jsxs)("div", {
                          className: o.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: o.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_SessionID_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: o.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_SessionID_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: o.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: o.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_ShoppingCart_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: o.NecessaryDesc,
                              children: (0, s.we)(
                                "#CookiePref_ShoppingCart_Desc",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: o.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: o.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_SteamCountry_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: o.NecessaryDesc,
                              children: (0, s.we)(
                                "#CookiePref_SteamCountry_Desc",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: o.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: o.NecessaryTitle,
                              children: (0, s.we)("#CookiePref_Timezone_Title"),
                            }),
                            (0, e.jsx)("span", {
                              className: o.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_Timezone_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: o.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: o.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_BirthTime_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: o.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_BirthTime_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: o.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: o.NecessaryTitle,
                              children: (0, s.we)("#CookiePref_Login_Title"),
                            }),
                            (0, e.jsx)("span", {
                              className: o.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_Login_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: o.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: o.NecessaryTitle,
                              children: (0, s.we)("#CookiePref_Language_Title"),
                            }),
                            (0, e.jsx)("span", {
                              className: o.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_Language_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: o.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: o.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_CookieSettings_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: o.NecessaryDesc,
                              children: (0, s.we)(
                                "#CookiePref_CookieSettings_Desc",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: (0, p.A)(
                    o.CookieSettingsHeader,
                    "account_header_line noicon",
                  ),
                  children: (0, e.jsx)("div", {
                    children: (0, s.we)("#PrivacySettings_Marketing_Header"),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "account_settings_container",
                  children: (0, e.jsx)($e, { settings: a }),
                }),
                !!c &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, p.A)(
                          o.DataCollectionSettingsHeader,
                          "account_header_line noicon",
                        ),
                        children: (0, e.jsx)("div", {
                          children: (0, s.we)("#DataPreferences_Header"),
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: "account_settings_container",
                        children: (0, e.jsx)(qe, { settings: t }),
                      }),
                    ],
                  }),
                null,
              ],
            });
          }),
          Je = (0, v.PA)((a) => {
            const { settings: t } = a,
              n = (0, u.useCallback)(() => {
                t.ToggleRecentApps();
              }, [t]);
            return (0, e.jsx)("div", {
              className: o.CookieGroup,
              children: (0, e.jsxs)("div", {
                className: o.CookieSection,
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#CookiePref_Content_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: o.SectionDescription,
                    children: (0, s.we)("#CookiePref_Content_Desc"),
                  }),
                  (0, e.jsx)(m.RF, {
                    onChange: n,
                    label: (0, s.we)("#CookiePref_Content_ToggleTitle"),
                    checked: t.GetRecentApps(),
                    description: (0, s.we)("#CookiePref_Content_ToggleDesc"),
                  }),
                ],
              }),
            });
          }),
          Xe = (0, v.PA)((a) => {
            const { settings: t } = a,
              n = (0, u.useCallback)(() => {
                t.ToggleImpressions();
              }, [t]);
            return (0, e.jsx)("div", {
              className: o.CookieGroup,
              children: (0, e.jsxs)("div", {
                className: o.CookieSection,
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#CookiePref_ValveAnalytics_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: o.SectionDescription,
                    children: (0, s.we)("#CookiePref_ValveAnalytics_Desc"),
                  }),
                  (0, e.jsx)(m.RF, {
                    onChange: n,
                    label: (0, s.we)("#CookiePref_ValveAnalytics_ToggleTitle"),
                    checked: t.GetImpressions(),
                    description: (0, s.we)(
                      "#CookiePref_ValveAnalytics_ToggleDesc",
                    ),
                  }),
                ],
              }),
            });
          }),
          Ze = (0, v.PA)((a) => {
            const { settings: t } = a,
              n = (0, u.useCallback)(() => {
                t.ToggleYouTube();
              }, [t]),
              i = (0, u.useCallback)(() => {
                t.ToggleVimeo();
              }, [t]),
              c = (0, u.useCallback)(() => {
                t.ToggleSketchfab();
              }, [t]);
            return (0, e.jsx)("div", {
              className: o.CookieGroup,
              children: (0, e.jsxs)("div", {
                className: o.CookieSection,
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#CookiePref_ThirdParty_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: o.SectionDescription,
                    children: (0, s.we)("#CookiePref_ThirdParty_Desc"),
                  }),
                  (0, e.jsx)(m.RF, {
                    onChange: n,
                    label: (0, s.we)("#CookiePref_YouTube_Title"),
                    checked: t.GetYouTube(),
                    description: (0, s.PP)(
                      "#CookiePref_YouTube_Desc",
                      (0, e.jsx)("a", {
                        href: "https://policies.google.com/privacy",
                        target: "_blank",
                        children: (0, s.we)(
                          "#CookiePref_YouTube_TogglePolicyName",
                        ),
                      }),
                    ),
                  }),
                  (0, e.jsx)(m.RF, {
                    onChange: i,
                    label: (0, s.we)("#CookiePref_Vimeo_Title"),
                    checked: t.GetVimeo(),
                    description: (0, s.PP)(
                      "#CookiePref_Vimeo_Desc",
                      (0, e.jsx)("a", {
                        href: "https://vimeo.com/privacy",
                        target: "_blank",
                        children: (0, s.we)(
                          "#CookiePref_Vimeo_TogglePolicyName",
                        ),
                      }),
                    ),
                  }),
                  (0, e.jsx)(m.RF, {
                    onChange: c,
                    label: (0, s.we)("#CookiePref_Sketchfab_Title"),
                    checked: t.GetSketchfab(),
                    description: (0, s.PP)(
                      "#CookiePref_Sketchfab_Desc",
                      (0, e.jsx)("a", {
                        href: "https://sketchfab.com/privacy",
                        target: "_blank",
                        children: (0, s.we)(
                          "#CookiePref_Sketchfab_TogglePolicyName",
                        ),
                      }),
                    ),
                  }),
                ],
              }),
            });
          }),
          $e = (0, v.PA)((a) => {
            const { settings: t } = a,
              n = (0, u.useCallback)(() => {
                t.ToggleUTMEnabled();
              }, [t]);
            return (0, e.jsx)("div", {
              className: o.CookieGroup,
              children: (0, e.jsxs)("div", {
                className: o.CookieSection,
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#PrivacySettings_Marketing_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: o.SectionDescription,
                    children: (0, s.we)("#PrivacySettings_Marketing_Desc"),
                  }),
                  (0, e.jsx)(m.RF, {
                    onChange: n,
                    label: (0, s.we)("#PrivacySettings_UTM_ToggleLabel"),
                    checked: t.GetUTMEnabled(),
                    description: (0, s.we)("#PrivacySettings_UTM_ToggleDesc"),
                  }),
                ],
              }),
            });
          }),
          qe = (0, v.PA)((a) => {
            const { settings: t } = a,
              n = (0, u.useCallback)(() => {
                t.ToggleProvideDeckFeeback();
              }, [t]),
              i = (0, u.useCallback)(() => {
                t.ToggleGameFrameRateReporting();
              }, [t]);
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: o.CookieGroup,
                  children: (0, e.jsxs)("div", {
                    className: o.CookieSection,
                    children: [
                      (0, e.jsx)("h2", {
                        children: (0, s.we)(
                          "#DataPreferences_Provide_SteamOS_Feedback_Title",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        className: o.SectionDescription,
                        children: (0, s.we)(
                          "#DataPreferences_Provide_SteamOS_Feedback_Desc",
                        ),
                      }),
                      (0, e.jsx)(m.RF, {
                        onChange: n,
                        checked: t.GetProvideDeckFeedbackEnabled(),
                        description: (0, s.we)(
                          "#DataPreferences_Provide_SteamOS_Feedback_Label",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)("div", {
                  className: o.CookieGroup,
                  children: (0, e.jsxs)("div", {
                    className: o.CookieSection,
                    children: [
                      (0, e.jsx)("h2", {
                        id: "FrameRateReporting",
                        children: (0, s.we)(
                          "#DataPreferences_FrameRateReporting_Title",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        className: o.SectionDescription,
                        children: (0, s.we)(
                          "#DataPreferences_FrameRateReporting_Description",
                        ),
                      }),
                      (0, e.jsx)(m.RF, {
                        onChange: i,
                        checked: t.GetGameFrameRateReportingEnabled(),
                        description: (0, s.we)(
                          "#DataPreferences_FrameRateReporting_Label",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)(ge, {}),
              ],
            });
          });
        var xe = r(20076),
          et = r(86227),
          H = r.n(et),
          Be = r(63547),
          tt = r(46943),
          st = r(35098),
          at = r(76559),
          be = r(84676),
          Ce = r(55051),
          rt = r(7582),
          nt = r(53107),
          it = r(25792),
          ot = r(85599),
          ct = r(20169),
          lt = r(61855);
        const dt = 1422450;
        function Le(a) {
          const { bShowPlaytestOverview: t } = a,
            n = (0, Be.kF)();
          let i = [];
          return (
            n.isSuccess &&
              (i = n.data
                .filter((c) => c.status === Ce.b1.fm || c.status === Ce.b1.T5)
                .map((c) => {
                  switch (c.status) {
                    case Ce.b1.T5:
                      return (0, e.jsx)(ut, { invite: c }, c.invite_id);
                    case Ce.b1.fm:
                    default:
                      return (0, e.jsx)(mt, { invite: c }, c.invite_id);
                  }
                })),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: "account_header_line noicon",
                  children: (0, s.we)("#PlaytestInvites_Title"),
                }),
                (0, e.jsx)("div", {
                  className: (0, p.A)(
                    H().PlaytestInvites,
                    "account_settings_container",
                  ),
                  children:
                    n.isLoading || i.length > 0
                      ? i
                      : (0, s.we)("#PlaytestInvites_NoInvites"),
                }),
                t &&
                  (0, e.jsxs)("div", {
                    className: "account_settings_container",
                    children: [
                      (0, e.jsx)("h2", {
                        children: (0, s.we)("#PlaytestInvites_Desc_Title"),
                      }),
                      (0, e.jsx)("p", {
                        className: H().Description,
                        children: (0, s.we)("#PlaytestInvites_Desc1"),
                      }),
                      (0, e.jsx)("p", {
                        className: H().Description,
                        children: (0, s.we)("#PlaytestInvites_Desc2"),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function ut(a) {
          const { invite: t } = a,
            n = t.appid;
          let c = Oe(t.appid)?.GetName() ?? t.app_name;
          const j = u.useCallback(
            (T) => {
              (0, nt.EP)((0, ee.uX)(T), `steam://open/games/details/${n}`);
            },
            [n],
          );
          return (0, e.jsxs)("div", {
            className: H().PlaytestInvite,
            children: [
              (0, e.jsx)("div", {
                className: H().InviteInfo,
                children: (0, e.jsx)("span", {
                  children: (0, s.we)("#PlaytestInvites_Welcome", c),
                }),
              }),
              !d.TS.IN_MOBILE_WEBVIEW &&
                (0, e.jsx)("div", {
                  className: H().StatusCtn,
                  children: (0, e.jsx)(I.Z, {
                    className: H().Buttons,
                    children: (0, e.jsx)(m.jn, {
                      className: H().WideButton,
                      noFocusRing: !1,
                      onClick: j,
                      children: (0, s.we)("#PlaytestInvites_ViewLibrary"),
                    }),
                  }),
                }),
            ],
          });
        }
        function mt(a) {
          const { invite: t } = a,
            n = (0, rt.f1)(),
            i = Oe(t.appid);
          let c = i?.GetName() ?? t.app_name;
          const j = (0, Be.g)(t.invite_id),
            T = u.useCallback(
              ($) => {
                j.mutate({ bAccept: $ });
              },
              [j],
            ),
            X = new at.b(t.steamid_inviter);
          return (0, e.jsx)(it.tH, {
            children: (0, e.jsxs)(I.Z, {
              className: H().PlaytestInvite,
              navEntryPreferPosition: ct.iU.MAINTAIN_X,
              children: [
                (0, e.jsxs)("div", {
                  className: H().InviteInfo,
                  children: [
                    (0, e.jsx)(ht, { steamIDInviter: X }),
                    (0, e.jsx)(_t, {
                      appStoreItem: i,
                      strAppName: c,
                      nAppID: t.appid,
                    }),
                    (0, e.jsx)("div", {
                      className: H().TimeInvited,
                      children: (0, s.Nm)(t.time_created ?? n),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: H().StatusCtn,
                  children: j.isPending
                    ? (0, e.jsx)(ot.t, {
                        size: "medium",
                        position: "center",
                        msDelayAppear: 250,
                      })
                    : (0, e.jsxs)("div", {
                        className: H().Buttons,
                        children: [
                          (0, e.jsx)(m.jn, {
                            noFocusRing: !1,
                            onClick: () => T(!0),
                            children: (0, s.we)("#PlaytestInvites_Accept"),
                          }),
                          (0, e.jsx)(m.$n, {
                            noFocusRing: !1,
                            onClick: () => T(!1),
                            children: (0, s.we)("#PlaytestInvites_Reject"),
                          }),
                        ],
                      }),
                }),
              ],
            }),
          });
        }
        function _t(a) {
          const { appStoreItem: t, strAppName: n, nAppID: i } = a;
          let c = t?.GetDeveloperNames()?.length
              ? t.GetDeveloperNames()[0]
              : null,
            j = t?.GetStorePageURL(),
            T = (0, e.jsx)("img", {
              className: H().SmallCap,
              src: t?.GetAssets().GetSmallCapsuleURL() ?? lt.A,
            });
          return (
            i == dt && (c = "Valve"),
            (0, e.jsxs)("div", {
              className: H().AppInfoCtn,
              children: [
                j ? (0, e.jsxs)(g.Ii, { href: j, children: [" ", T, " "] }) : T,
                (0, e.jsxs)("div", {
                  className: H().AppDescription,
                  children: [
                    (0, e.jsx)("div", { className: H().AppName, children: n }),
                    c &&
                      (0, e.jsx)("div", {
                        className: H().AppDetail,
                        children: (0, s.we)("#PlaytestInvites_AppDeveloper", c),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function ht(a) {
          const { steamIDInviter: t } = a;
          return t.BIsValid()
            ? (0, e.jsx)(vt, { steamIDInviter: t })
            : (0, e.jsx)(Me, {});
        }
        function vt(a) {
          const { steamIDInviter: t } = a,
            n = (0, st.js)(t.ConvertTo64BitString()),
            i = n?.data;
          return n.isSuccess
            ? (0, e.jsxs)("div", {
                className: (0, p.A)(
                  H().AvatarAndPersona,
                  H().InviteDescription,
                ),
                children: [
                  (0, e.jsx)(tt.i8, {
                    persona: i,
                    size: "Small",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.PP)(
                      "#PlaytestInvites_InviteDescription_FromUser2",
                      (0, e.jsx)(g.Ii, {
                        href: i.GetCommunityProfileURL(),
                        children: i?.m_strPlayerName,
                      }),
                    ),
                  }),
                ],
              })
            : (0, e.jsx)(Me, {});
        }
        function Me(a) {
          return (0, e.jsx)("div", {
            className: H().InviteDescription,
            children: (0, s.we)("#PlaytestInvites_InviteDescription_FromApp2"),
          });
        }
        function Oe(a) {
          const [t, n] = (0, be.t7)(a, {
            include_basic_info: !0,
            include_assets: !0,
          });
          return t && n == be.ik ? t : null;
        }
        var ft = r(31896),
          Te = r.n(ft);
        function pt(a) {
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(Le, { bShowPlaytestOverview: !1 }),
              (0, e.jsx)("div", {
                className: "account_header_line noicon",
                children: (0, s.we)("#PlaytestStatus_Title"),
              }),
              (0, e.jsx)("div", {
                className: (0, p.A)(
                  Te().PlaytestStatusCtn,
                  "account_settings_container",
                ),
                children: (0, s.we)("#PlaytestStatus_None"),
              }),
              (0, e.jsxs)("div", {
                className: "account_settings_container",
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#PlaytestInvites_Desc_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: Te().Description,
                    children: (0, s.we)("#PlaytestInvites_Desc1"),
                  }),
                  (0, e.jsx)("p", {
                    className: Te().Description,
                    children: (0, s.we)("#PlaytestInvites_Desc2"),
                  }),
                ],
              }),
            ],
          });
        }
        var gt = Object.defineProperty,
          At = Object.getOwnPropertyDescriptor,
          Ge = (a, t, n, i) => {
            for (
              var c = i > 1 ? void 0 : i ? At(t, n) : t, j = a.length - 1, T;
              j >= 0;
              j--
            )
              (T = a[j]) && (c = (i ? T(t, n, c) : T(c)) || c);
            return i && c && gt(t, n, c), c;
          };
        const Ne = class ye {
          m_rgActiveDevices = [];
          m_rgRevokedDevices = [];
          m_strAccountName;
          m_strPhoneHint;
          m_strEmail;
          m_msgTwoFactorStatus;
          m_strLatestAndroidAppVersion;
          static s_AuthorizedDevicesStore;
          constructor() {
            (0, y.Gn)(this);
          }
          static Get() {
            return (
              ye.s_AuthorizedDevicesStore ||
                ((ye.s_AuthorizedDevicesStore = new ye()),
                ye.s_AuthorizedDevicesStore.Init()),
              ye.s_AuthorizedDevicesStore
            );
          }
          Init() {
            (this.m_rgActiveDevices = (0, d.Tc)(
              "active_devices",
              "application_config",
            )),
              (this.m_rgRevokedDevices = (0, d.Tc)(
                "revoked_devices",
                "application_config",
              )),
              (this.m_strAccountName = (0, d.Tc)(
                "accountName",
                "application_config",
              )),
              (this.m_strPhoneHint = (0, d.Tc)(
                "phone_hint",
                "application_config",
              )),
              (this.m_strEmail = (0, d.Tc)("email", "application_config")),
              (this.m_msgTwoFactorStatus = (0, d.Tc)(
                "two_factor_status",
                "application_config",
              )),
              (this.m_strLatestAndroidAppVersion = (0, d.Tc)(
                "latest_android_app_version",
                "application_config",
              ));
          }
          GetActiveDevices() {
            return this.m_rgActiveDevices;
          }
          GetRevokedDevices() {
            return this.m_rgRevokedDevices;
          }
          GetAccountName() {
            return this.m_strAccountName;
          }
          GetPhoneHint() {
            return this.m_strPhoneHint;
          }
          GetEmailAddress() {
            return this.m_strEmail;
          }
          GetTwoFactorStatus() {
            return this.m_msgTwoFactorStatus;
          }
          GetLatestAndroidAppVersion() {
            return this.m_strLatestAndroidAppVersion;
          }
        };
        Ge([y.sH], Ne.prototype, "m_rgActiveDevices", 2),
          Ge([y.sH], Ne.prototype, "m_rgRevokedDevices", 2);
        let he = Ne;
        var se = r(56718),
          Ue = r(39239);
        const St =
            r.p +
            "images/applications/store/sg_shield_off.png?v=valveisgoodatcaching",
          He =
            r.p +
            "images/applications/store/sg_shield_on.png?v=valveisgoodatcaching",
          jt =
            r.p +
            "images/applications/store/steam_mobile_qr_code.png?v=valveisgoodatcaching";
        var Pt = r(32093),
          F = r(6740),
          Fe = r(44787),
          ae = r(33405),
          Re = r(36118),
          Dt = r(71421),
          Ee = r(92264),
          yt = r(36174),
          xt = r(11838),
          E = r(61359),
          Ct = ((a) => (
            (a[(a.k_ETwoFactorTokenSteamguardScheme_None = 0)] =
              "k_ETwoFactorTokenSteamguardScheme_None"),
            (a[(a.k_ETwoFactorTokenSteamguardScheme_Email = 1)] =
              "k_ETwoFactorTokenSteamguardScheme_Email"),
            (a[(a.k_ETwoFactorTokenSteamguardScheme_TwoFactor = 2)] =
              "k_ETwoFactorTokenSteamguardScheme_TwoFactor"),
            a
          ))(Ct || {}),
          Et = ((a) => (
            (a[(a.k_EMobileConfirmationAction_None = 0)] =
              "k_EMobileConfirmationAction_None"),
            (a[(a.k_EMobileConfirmationAction_Allow = 1)] =
              "k_EMobileConfirmationAction_Allow"),
            (a[(a.k_EMobileConfirmationAction_Cancel = 2)] =
              "k_EMobileConfirmationAction_Cancel"),
            a
          ))(Et || {}),
          wt = ((a) => (
            (a[(a.k_EMobileConfirmationType_Invalid = 0)] =
              "k_EMobileConfirmationType_Invalid"),
            (a[(a.k_EMobileConfirmationType_Test = 1)] =
              "k_EMobileConfirmationType_Test"),
            (a[(a.k_EMobileConfirmationType_Trade = 2)] =
              "k_EMobileConfirmationType_Trade"),
            (a[(a.k_EMobileConfirmationType_MarketListing = 3)] =
              "k_EMobileConfirmationType_MarketListing"),
            (a[(a.k_EMobileConfirmationType_FeatureOptOut = 4)] =
              "k_EMobileConfirmationType_FeatureOptOut"),
            (a[(a.k_EMobileConfirmationType_PhoneNumberChange = 5)] =
              "k_EMobileConfirmationType_PhoneNumberChange"),
            (a[(a.k_EMobileConfirmationType_AccountRecovery = 6)] =
              "k_EMobileConfirmationType_AccountRecovery"),
            (a[(a.k_EMobileConfirmationType_BuildChangeRequest = 7)] =
              "k_EMobileConfirmationType_BuildChangeRequest"),
            (a[(a.k_EMobileConfirmationType_AddUser = 8)] =
              "k_EMobileConfirmationType_AddUser"),
            (a[(a.k_EMobileConfirmationType_RegisterApiKey = 9)] =
              "k_EMobileConfirmationType_RegisterApiKey"),
            (a[(a.k_EMobileConfirmationType_InviteToFamilyGroup = 10)] =
              "k_EMobileConfirmationType_InviteToFamilyGroup"),
            (a[(a.k_EMobileConfirmationType_JoinFamilyGroup = 11)] =
              "k_EMobileConfirmationType_JoinFamilyGroup"),
            (a[(a.k_EMobileConfirmationType_MarketPurchase = 12)] =
              "k_EMobileConfirmationType_MarketPurchase"),
            (a[(a.k_EMobileConfirmationType_RequestRefund = 13)] =
              "k_EMobileConfirmationType_RequestRefund"),
            a
          ))(wt || {});
        const Tt = (0, v.PA)(() => {
          let a = he.Get();
          const t = ze(),
            n = (V) => {
              (0, q.pg)((0, e.jsx)(Gt, {}), (0, ee.uX)(V));
            },
            i = Date.now() / 1e3,
            c = Ke(a),
            j = a.GetTwoFactorStatus();
          let T = null;
          switch (j.steamguard_scheme) {
            default:
            case 0:
              T = "#accountpreferences_revoked_devices_revoked_description";
              break;
            case 1:
              T =
                "#accountpreferences_revoked_devices_revoked_description_email";
              break;
            case 2:
              T =
                "#accountpreferences_revoked_devices_revoked_description_auth";
              break;
          }
          let X = [],
            $ = [];
          for (const V of a.GetActiveDevices()) {
            const fe = V.logged_in && V.last_seen?.time > i - 900,
              je =
                V.effective_token_state == F.wv.BH ? E.RememberedDevice : null,
              Pe = (0, e.jsx)(
                Ie,
                {
                  className: je,
                  device: V,
                  bActiveNow: fe,
                  bCurrentDevice: t == V.token_id,
                  strActiveCountry: c,
                  msgTwoFactorStatus: j,
                },
                V.token_id,
              );
            fe ? X.push(Pe) : $.push(Pe);
          }
          const Se = a
            .GetRevokedDevices()
            .map((V) =>
              (0, e.jsx)(
                Ie,
                {
                  className: E.RevokedDevice,
                  device: V,
                  strActiveCountry: c,
                  msgTwoFactorStatus: j,
                },
                V.token_id,
              ),
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, p.A)(
                  E.AuthorizedDeviceHeader,
                  "account_header_line noicon",
                ),
                children: (0, e.jsx)("div", {
                  children: (0, s.we)(
                    "#accountpreferences_authorized_devices_header",
                  ),
                }),
              }),
              (0, e.jsxs)("div", {
                className: "account_settings_container",
                children: [
                  (0, e.jsx)("div", {
                    className: E.SectionDescription,
                    children: (0, s.PP)(
                      "#accountpreferences_authorized_devices_description",
                      (0, e.jsx)("p", {}),
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    className: E.AuthorizedDeviceGroup,
                    children: [
                      (0, e.jsx)(ke, {
                        elHeader: (0, e.jsxs)("div", {
                          className: E.ActiveNow,
                          children: [
                            (0, e.jsx)(Re.jlt, { className: E.ActiveNowDot }),
                            (0, s.we)(
                              "#accountpreferences_authorized_device_active_now",
                            ),
                          ],
                        }),
                        rgDevices: X,
                      }),
                      (0, e.jsx)(ke, {
                        elHeader: (0, s.we)(
                          "#accountpreferences_authorized_devices_recentseen_heading",
                        ),
                        rgDevices: $,
                      }),
                      (0, e.jsx)("div", {
                        className: E.DeviceGroup,
                        children: (0, e.jsx)("div", {
                          className: E.RemoveDevicesRow,
                          children: (0, e.jsx)(m.wl, {
                            className: E.RemoveDevicesButton,
                            onClick: n,
                            children: (0, s.we)(
                              "#accountpreferences_authorized_devices_remove_button",
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Se?.length > 0 &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, p.A)(
                        E.AuthorizedDeviceHeader,
                        "account_header_line noicon",
                      ),
                      children: (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#accountpreferences_revoked_devices_revoked_header",
                        ),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: "account_settings_container",
                      children: [
                        (0, e.jsx)("div", {
                          className: E.SectionDescription,
                          children: (0, s.PP)(T, (0, e.jsx)("p", {})),
                        }),
                        (0, e.jsx)("div", {
                          className: E.AuthorizedDeviceGroup,
                          children: (0, e.jsx)(ke, { rgDevices: Se }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        });
        function ke(a) {
          const { rgDevices: t, elHeader: n } = a;
          return t.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: E.DeviceGroup,
                children: [n && n, t],
              });
        }
        function Ke(a) {
          const t = Date.now() / 1e3;
          return We(
            a
              .GetActiveDevices()
              .find((n) => n.logged_in && n.last_seen?.time > t - 900) ??
              a.GetActiveDevices()[0],
          ).country;
        }
        function ze() {
          const [a] = u.useState(() =>
            (0, d.Tc)("requesting_token_id", "application_config"),
          );
          return a;
        }
        function Nt(a, t) {
          return (
            t?.state > 0 &&
            a.token_id &&
            a.token_id == t?.last_seen_auth_token_id
          );
        }
        function Ie(a) {
          const {
              device: t,
              bActiveNow: n,
              bCurrentDevice: i,
              strActiveCountry: c,
              className: j,
              msgTwoFactorStatus: T,
              bShowAuthenticatorActivity: X,
            } = a,
            [$, Se] = (0, u.useState)(!1),
            V = u.useRef(void 0);
          u.useEffect(() => {
            V.current?.BHasFocus() && V.current?.Node().ForceMeasureFocusRing();
          }, [$]);
          let fe = Mt(t);
          fe.length &&
            (fe = ` ${(0, s.we)("#accountpreferences_authorized_devices_name_separator")} "${fe}"`);
          const je = We(t);
          let Pe = null;
          !je.country || !c || c == je.country
            ? (Pe = (0, e.jsx)("div", {
                className: E.LocationNotSuspicious,
                children: je.location,
              }))
            : (Pe = (0, e.jsx)(Dt.he, {
                className: E.Tooltip,
                toolTipContent: (0, s.we)(
                  "#accountpreferences_authorized_devices_suspicous_tooltip",
                ),
                direction: "top",
                children: (0, e.jsxs)("div", {
                  className: E.LocationSuspicious,
                  children: [je.location, (0, e.jsx)(se.$$j, {})],
                }),
              }));
          const Zt = Nt(t, T);
          return (0, e.jsxs)(
            I.Z,
            {
              className: (0, p.A)(E.DeviceContainer, n && E.ActiveDevice, j),
              navRef: V,
              onActivate: () => Se(!$),
              children: [
                (0, e.jsx)(Lt, { device: t, bHasAuthenticator: Zt }),
                (0, e.jsxs)("div", {
                  className: E.DeviceContent,
                  children: [
                    (0, e.jsxs)("div", {
                      className: E.DeviceHeaderRow,
                      children: [
                        (0, e.jsxs)("div", {
                          className: E.DeviceNameContainer,
                          children: [
                            (0, e.jsxs)("div", {
                              className: E.DeviceName,
                              children: [(0, e.jsx)(Ot, { device: t }), fe],
                            }),
                            i &&
                              (0, e.jsx)("div", {
                                className: E.ThisDevice,
                                children: (0, s.we)(
                                  "#accountpreferences_authorized_devices_this_device",
                                ),
                              }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: E.DetailsToggleContainer,
                          children: [
                            Pe,
                            (0, e.jsx)("div", {
                              className: E.DetailsToggle,
                              children: (0, e.jsx)(m.wl, {
                                className: (0, p.A)({
                                  [E.DetailsToggle]: !0,
                                  [E.Selected]: $,
                                }),
                                children: (0, e.jsx)(se.b8_, {
                                  direction: "down",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)(Rt, {
                      device: t,
                      bActiveNow: n,
                      msgTwoFactorStatus: X && T,
                    }),
                    $ && (0, e.jsx)(Bt, { device: t }),
                  ],
                }),
              ],
            },
            "id_" + t.token_id,
          );
        }
        function Rt(a) {
          const { device: t, bActiveNow: n, msgTwoFactorStatus: i } = a;
          return i?.state > 0
            ? (0, e.jsx)(kt, {
                msgTwoFactorUsage: i.usages?.length > 0 ? i.usages[0] : null,
              })
            : n
              ? null
              : (0, e.jsx)(It, { device: t });
        }
        function kt(a) {
          const { msgTwoFactorUsage: t } = a;
          if (!t || !t.time) return null;
          const n = (0, Ee.Nm)(t.time);
          let i = null;
          if (t.usage_type == Fe.oN.U3)
            i = (0, s.we)("#authorized_devices_lasttwofactor_login", n);
          else if (t.usage_type == Fe.oN.Ej) {
            const c = t.confirmation_action == 1 ? "_allow" : "_cancel";
            switch (t.confirmation_type) {
              case 2:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_trade${c}`,
                  n,
                );
                break;
              case 3:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_marketlisting${c}`,
                  n,
                );
                break;
              case 5:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_phonechange${c}`,
                  n,
                );
                break;
              case 6:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_accountrecovery${c}`,
                  n,
                );
                break;
              case 7:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_buildchange${c}`,
                  n,
                );
                break;
              case 8:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_adduser${c}`,
                  n,
                );
                break;
              case 9:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_registerapikey${c}`,
                  n,
                );
                break;
              case 10:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_familygroupinvite${c}`,
                  n,
                );
                break;
              case 11:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_joinfamilygroup${c}`,
                  n,
                );
                break;
              case 12:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_marketpurchase${c}`,
                  n,
                );
                break;
              case 13:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_refund${c}`,
                  n,
                );
                break;
              default:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_unknown${c}`,
                  n,
                );
            }
          }
          return i
            ? (0, e.jsx)("div", {
                className: E.LastSeenRow,
                children: (0, e.jsx)("div", { children: i }),
              })
            : null;
        }
        function It(a) {
          const { device: t } = a,
            n =
              t.first_seen?.time &&
              t.first_seen.time + yt.Kp.PerWeek * 2 > Date.now() / 1e3,
            i = t.effective_token_state == F.wv.BH;
          let c = (0, s.we)(
            "#accountpreferences_authorized_devices_last_seen_max",
          );
          return (
            t.last_seen?.time
              ? (c = (0, Ee.Nm)(t.last_seen.time))
              : t.time_updated &&
                t.time_updated >
                  Math.floor(Date.now() / 1e3 - 2160 * 60 * 60) &&
                (c = (0, Ee.Nm)(t.time_updated)),
            (0, e.jsxs)("div", {
              className: E.LastSeenRow,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("span", {
                      className: E.LastActive,
                      children: (0, s.we)(
                        "#accountpreferences_authorized_devices_last_seen_title",
                      ),
                    }),
                    c,
                    i &&
                      (0, e.jsxs)("span", {
                        className: E.LastActive,
                        children: [
                          " - ",
                          (0, s.we)(
                            "#accountpreferences_authorized_devices_state_signedout",
                          ),
                        ],
                      }),
                  ],
                }),
                n &&
                  (0, e.jsx)("div", {
                    className: E.NewDevice,
                    children: (0, s.oW)(
                      "#accountpreferences_authorized_devices_new_device",
                      (0, e.jsx)("a", {
                        href:
                          d.TS.HELP_BASE_URL + "wizard/HelpWithAccountStolen",
                        onClick: (j) => {
                          j.stopPropagation();
                        },
                      }),
                    ),
                  }),
              ],
            })
          );
        }
        function Bt(a) {
          const { device: t } = a;
          return (0, e.jsx)("div", {
            className: E.AuthorizedDeviceDetails,
            children: (0, s.we)(
              bt(t),
              (0, s.TW)(t.first_seen.time) +
                " @ " +
                (0, Ee.KC)(t.first_seen.time),
            ),
          });
        }
        function bt(a) {
          const t = a.authentication_type,
            n = a.auth_type;
          if (t == F.O6.w$) return "#authorized_devices_default_qr";
          if (a.effective_token_state == F.wv.BH)
            return "#authorized_devices_remembered_machine";
          switch (n) {
            case F.TY.Xs:
              return "#authorized_devices_emailcode_password";
            case F.TY.bH:
              return "#authorized_devices_devicecode_password";
            case F.TY.x0:
            case F.TY.$Y:
              return "#authorized_devices_mobileconf_password";
            case F.TY.ig:
              return "#authorized_devices_machinetoken_password";
            case F.TY.sF:
            case F.TY.oP:
            case F.TY.WM:
            default:
              return "#authorized_devices_default_password";
          }
        }
        function Lt(a) {
          const { device: t, bHasAuthenticator: n } = a,
            i = t.effective_token_state == F.wv.BH;
          let c = null;
          if (t.platform_type == F.SS.tS)
            c = i
              ? (0, e.jsx)(se.SQF, {
                  className: (0, p.A)(E.DeviceLogo, E.RememberedDevice),
                })
              : (0, e.jsx)(se.FH7, { className: E.DeviceLogo });
          else if (
            t.platform_type == F.SS.w0 &&
            (t.gaming_device_type === z.LS$ ||
              t.gaming_device_type == z.ppM ||
              t.gaming_device_type == z.Ner)
          )
            c = i
              ? (0, e.jsx)(se.VRo, {
                  className: (0, p.A)(E.DeviceLogo, E.RememberedDevice),
                })
              : (0, e.jsx)(se.oEi, { className: E.DeviceLogo });
          else
            switch (t.os_platform) {
              case ae.tz.k_EPlatformTypeWin32:
              case ae.tz.k_EPlatformTypeWin64:
              case ae.tz.k_EPlatformTypeOSX:
                c = i
                  ? (0, e.jsx)(se.ulH, {
                      className: (0, p.A)(E.DeviceLogo, E.RememberedDevice),
                    })
                  : (0, e.jsx)(se.nl8, { className: E.DeviceLogo });
                break;
              case ae.tz.k_EPlatformTypeAndroid32:
              case ae.tz.k_EPlatformTypeAndroid64:
              case ae.tz.k_EPlatformTypeLinux32:
              case ae.tz.k_EPlatformTypeLinux64:
                c = (0, e.jsx)(Re.rfv, { className: E.DeviceLogo });
                break;
              case ae.tz.k_EPlatformTypeIOS32:
              case ae.tz.k_EPlatformTypeIOS64:
                c = (0, e.jsx)(Re.rfv, { className: E.DeviceLogo });
                break;
            }
          return n
            ? (0, e.jsxs)("div", {
                className: E.DeviceLogoBoundingBox,
                children: [
                  c,
                  (0, e.jsx)("img", {
                    src: He,
                    className: E.DeviceSteamGuardLogo,
                  }),
                ],
              })
            : c;
        }
        function Mt(a) {
          if (a.platform_type == F.SS.tS) {
            let t = new xt.UAParser(a.token_description).getResult();
            return t.browser.name && t.os.name
              ? t.browser.name == "WebKit"
                ? t.os.name
                : (0, s.we)(
                    "#accountpreferences_authorized_devices_browser_on_os",
                    t.browser.name,
                    t.os.name,
                  )
              : (0, s.we)(
                  "#accountpreferences_authorized_devices_browser_unmatched",
                );
          } else return a.token_description;
        }
        function We(a) {
          const t = a.last_seen ?? a.first_seen;
          if (t)
            if ((0, Pt.nA)(d.TS.EREALM)) {
              if (t.city) return { location: t.city, country: t.country };
            } else
              return {
                location: `${t.city ? t.city + ", " : ""}${t.country}`,
                country: t.country,
              };
          return {
            location: (0, s.we)(
              "#accountpreferences_authorized_devices_loc_unknown",
            ),
            country: "",
          };
        }
        function Ot(a) {
          const { device: t } = a;
          switch (t.platform_type) {
            case F.SS.Ql:
              return (0, s.we)(
                "#accountpreferences_authorized_devices_type_mobile",
              );
            case F.SS.w0:
              return t.gaming_device_type === z.LS$
                ? (0, s.we)(
                    "#accountpreferences_authorized_devices_type_steamdeck",
                  )
                : t.gaming_device_type == z.ppM
                  ? (0, s.we)(
                      "#accountpreferences_authorized_devices_type_legiongos",
                    )
                  : t.gaming_device_type == z.Ner
                    ? (0, s.we)(
                        "#accountpreferences_authorized_devices_type_steamos",
                      )
                    : (0, s.we)(
                        "#accountpreferences_authorized_devices_type_desktop",
                      );
            case F.SS.tS:
              return (0, s.we)(
                "#accountpreferences_authorized_devices_type_browser",
              );
            case F.SS.FB:
            default:
              return (0, s.we)(
                "#accountpreferences_authorized_devices_type_unknown",
              );
          }
        }
        function Gt(a) {
          const { closeModal: t } = a,
            n = async () => {
              const i = new FormData();
              i.set("action", "deauthorize"),
                i.set("sessionid", (0, d.KC)()),
                await w().post(
                  d.TS.STORE_BASE_URL + "twofactor/manage_action",
                  i,
                );
              const c = document.createElement("form");
              (c.method = "POST"), (c.action = d.TS.STORE_BASE_URL + "logout");
              const j = document.createElement("input");
              (j.type = "hidden"),
                (j.name = "sessionid"),
                (j.value = (0, d.KC)()),
                c.appendChild(j),
                document.body.appendChild(c),
                c.submit();
            };
          return (0, e.jsx)(q.x_, {
            onEscKeypress: t,
            children: (0, e.jsxs)(m.UC, {
              children: [
                (0, e.jsx)(m.Y9, {
                  children: (0, s.we)("#authorized_devices_deauthorize_title"),
                }),
                (0, e.jsxs)(m.nB, {
                  children: [
                    (0, e.jsx)(m.a3, {
                      children: (0, s.we)(
                        "#authorized_devices_deauthorize_msg",
                      ),
                    }),
                    (0, e.jsx)(m.wi, {
                      children: (0, e.jsx)(m.CB, {
                        strOKText: (0, s.we)(
                          "#authorized_devices_deauthorize_proceed",
                        ),
                        onOK: n,
                        onCancel: t,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var B = r(86342),
          Ut = ((a) => (
            (a[(a.k_ETwoFactorTokenSteamguardScheme_None = 0)] =
              "k_ETwoFactorTokenSteamguardScheme_None"),
            (a[(a.k_ETwoFactorTokenSteamguardScheme_Email = 1)] =
              "k_ETwoFactorTokenSteamguardScheme_Email"),
            (a[(a.k_ETwoFactorTokenSteamguardScheme_TwoFactor = 2)] =
              "k_ETwoFactorTokenSteamguardScheme_TwoFactor"),
            a
          ))(Ut || {});
        function Ht(a) {
          return (0, e.jsxs)("div", {
            children: [(0, e.jsx)(Ft, {}), (0, e.jsx)(Tt, {})],
          });
        }
        function Ft(a) {
          const t = d.TS.HELP_BASE_URL + "faqs/view/7EFD-3CAE-64D3-1C31",
            n = he.Get(),
            i = n.GetTwoFactorStatus()?.steamguard_scheme == 2;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: "account_header_line",
                children: (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(se.iSZ, { className: B.HeaderIcon }),
                    (0, s.we)("#youraccount_account_security"),
                  ],
                }),
              }),
              (0, e.jsxs)("div", {
                className: (0, p.A)(
                  B.AccountSecurityCtn,
                  "account_settings_container",
                ),
                children: [
                  (0, e.jsx)("div", {
                    children: (0, s.oW)(
                      "#accountpreferences_account_security_description",
                      (0, e.jsx)(g.Ii, { target: "_blank", href: t }),
                    ),
                  }),
                  i
                    ? (0, e.jsx)(Kt, {
                        msgTwoFactorStatus: n.GetTwoFactorStatus(),
                        strFaqUrl: t,
                      })
                    : (0, e.jsx)(zt, { strFaqUrl: t }),
                  (0, e.jsxs)("div", {
                    className: B.AccountDetailsCtn,
                    children: [
                      (0, e.jsx)(Wt, {}),
                      (0, e.jsx)("div", { className: B.Divider }),
                      (0, e.jsx)(Vt, {}),
                      (0, e.jsx)(Qt, {
                        msgTwoFactorStatus: n.GetTwoFactorStatus(),
                      }),
                      i && (0, e.jsx)(Yt, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Kt(a) {
          const { msgTwoFactorStatus: t, strFaqUrl: n } = a,
            i = he.Get(),
            c = Ke(i),
            j = ze(),
            T = [
              ...(i.GetActiveDevices() ?? []),
              ...(i.GetActiveDevices() ?? []),
            ];
          let X = null,
            $ = !1;
          return (
            t?.last_seen_auth_token_id &&
              ((X = T.find((Se) => Se.token_id === t.last_seen_auth_token_id)),
              ($ = j?.length > 0 && j == X?.token_id)),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsxs)("div", {
                  className: B.SteamGuardStatusHeader,
                  children: [
                    (0, e.jsx)("img", { className: B.SteamGuardLogo, src: He }),
                    (0, e.jsx)("div", {
                      className: B.HeaderText,
                      children: (0, s.we)(
                        "#accountpreferences_account_security_steamguard",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: B.RemoveText,
                      children: (0, e.jsx)(g.Ii, {
                        href:
                          d.TS.STORE_BASE_URL +
                          "twofactor/remove?step=promptdevice",
                        children: (0, s.we)(
                          "#accountpreferences_account_security_steamguard_remove",
                        ),
                      }),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: B.SteamGuardStatusBody,
                  children: [
                    !!X &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(Ie, {
                            className: B.AuthorizedDevice,
                            device: X,
                            strActiveCountry: c,
                            msgTwoFactorStatus: t,
                            bShowAuthenticatorActivity: !0,
                          }),
                          (0, e.jsx)("div", { className: B.Divider }),
                        ],
                      }),
                    (0, e.jsxs)("div", {
                      className: B.SteamGuardActionsCtn,
                      children: [
                        (0, e.jsx)(ve, {
                          strLabel: (0, s.we)(
                            "#accountpreferences_account_security_move",
                          ),
                          href:
                            d.TS.HELP_BASE_URL +
                            "faqs/view/29A9-9EEE-09F0-75F9",
                        }),
                        (0, e.jsx)(ve, {
                          strLabel: (0, s.we)(
                            "#accountpreferences_account_security_help_lost",
                          ),
                          href:
                            d.TS.STORE_BASE_URL +
                            "twofactor/remove?step=promptdevice",
                        }),
                        (0, e.jsx)("div", {
                          className: B.RightAligned,
                          children: (0, e.jsx)(g.Ii, {
                            href: n,
                            target: "_blank",
                            children: (0, s.we)(
                              "#accountpreferences_account_security_view_faq",
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function zt(a) {
          const { strFaqUrl: t } = a,
            n = he.Get().GetLatestAndroidAppVersion();
          return (0, e.jsxs)("div", {
            className: B.NoSteamGuardCtn,
            children: [
              (0, e.jsxs)("div", {
                className: B.SteamGuardStatusHeader,
                children: [
                  (0, e.jsx)("img", { className: B.SteamGuardLogo, src: St }),
                  (0, e.jsx)("div", {
                    className: B.HeaderText,
                    children: (0, s.we)(
                      "#accountpreferences_account_security_no_steamguard",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", { className: B.Divider }),
              (0, e.jsxs)("div", {
                className: B.NoSteamGuardBody,
                children: [
                  (0, e.jsxs)("div", {
                    className: B.QROuterCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: B.GetMobileAppCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: B.GetMobileAppText,
                            children: (0, s.oW)(
                              "#accountpreferences_account_security_get_app",
                              (0, e.jsx)(g.Ii, {
                                href:
                                  d.TS.STORE_BASE_URL + "mobile#mobile_section",
                              }),
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#accountpreferences_account_security_scan_qr",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("img", { src: jt, className: B.QRCode }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: B.MobileAppLinksCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#accountpreferences_account_security_mobile_os_reqs",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: B.MobileAppDownloadImages,
                        children: [
                          (0, e.jsx)(g.Ii, {
                            href: "https://itunes.apple.com/us/app/steam-mobile/id495369748",
                            rel: "noopener",
                            target: "_blank",
                            children: (0, e.jsx)(Ue.o, {
                              srcs: Qe(
                                d.TS.IMG_URL +
                                  "mobile/localizedimages/appleappstore/apple_store_",
                                ".png",
                              ),
                              className: B.AppleAppStoreImg,
                            }),
                          }),
                          (0, e.jsx)(g.Ii, {
                            href: "https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community",
                            rel: "noopener",
                            target: "_blank",
                            children: (0, e.jsx)(Ue.o, {
                              srcs: Qe(
                                d.TS.IMG_URL +
                                  "mobile/localizedimages/googleplaystore/google_play_store_",
                                ".png",
                              ),
                              className: B.GooglePlayStoreImg,
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        children: (0, s.oW)(
                          "#accountpreferences_account_security_apk_download",
                          (0, e.jsx)("a", {
                            href: `https://media.steampowered.com/apps/steam-android/steam-${n}.apk`,
                          }),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("a", {
                          href: t,
                          target: "_blank",
                          children: (0, s.we)(
                            "#accountpreferences_account_security_mobile_faq",
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Qe(a, t) {
          const n = s.A0.GetLanguageFallback(d.TS.LANGUAGE);
          let i = [a + d.TS.LANGUAGE + t];
          return d.TS.LANGUAGE != n && i.push(a + n + t), i;
        }
        function Wt(a) {
          const t = he.Get(),
            n = d.TS.IN_MOBILE_WEBVIEW;
          return (0, e.jsxs)("div", {
            className: B.AccountDetailsSubBlock,
            children: [
              (0, e.jsx)(Ae, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_account_name",
                ),
                strText: t.GetAccountName(),
              }),
              (0, e.jsx)(ve, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_change_pass",
                ),
                href:
                  d.TS.HELP_BASE_URL +
                  "wizard/HelpChangePassword?redir=store/account/",
                target: n ? "_blank" : void 0,
              }),
            ],
          });
        }
        function Qt(a) {
          const { msgTwoFactorStatus: t } = a,
            n = he.Get(),
            i = t.email_validated,
            c = t.steamguard_scheme == 1,
            j = d.TS.IN_MOBILE_WEBVIEW;
          return (0, e.jsxs)("div", {
            className: B.AccountDetailsSubBlock,
            children: [
              (0, e.jsx)(Ae, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_email",
                ),
                strText: n.GetEmailAddress(),
              }),
              (0, e.jsx)(Ae, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_email_status",
                ),
                strText: i
                  ? (0, s.we)("#youraccount_email_verified")
                  : (0, s.we)("#youraccount_email_unverified"),
              }),
              c &&
                (0, e.jsx)(Ae, {
                  strLabel: (0, s.we)(
                    "#accountpreferences_account_security_verification",
                  ),
                  strText: (0, s.we)(
                    "#accountpreferences_account_security_via_email",
                  ),
                }),
              (0, e.jsxs)("div", {
                className: B.EmailActions,
                children: [
                  (0, e.jsx)(ve, {
                    strLabel: (0, s.we)(
                      "#accountpreferences_account_security_change_email",
                    ),
                    href:
                      d.TS.HELP_BASE_URL +
                      "wizard/HelpChangeEmail?redir=store/account/",
                    target: j ? "_blank" : void 0,
                  }),
                  c &&
                    (0, e.jsx)(ve, {
                      strLabel: (0, s.we)(
                        "#accountpreferences_account_security_remove_email_guard",
                      ),
                      href: d.TS.STORE_BASE_URL + "twofactor/manage",
                    }),
                ],
              }),
            ],
          });
        }
        function Vt(a) {
          const t = he.Get();
          let n = (0, s.we)("#accountpreferences_account_security_phone_none");
          return (
            t.GetPhoneHint() &&
              (n = (0, s.we)(
                "#accountpreferences_account_security_phone_hint",
                t.GetPhoneHint(),
              )),
            (0, e.jsxs)("div", {
              className: B.AccountDetailsSubBlock,
              children: [
                (0, e.jsx)(Ae, {
                  strLabel: (0, s.we)(
                    "#accountpreferences_account_security_phone",
                  ),
                  strText: n,
                }),
                (0, e.jsx)(ve, {
                  strLabel: (0, s.we)(
                    "#accountpreferences_account_security_manage_phone",
                  ),
                  href: d.TS.STORE_BASE_URL + "phone/manage",
                }),
              ],
            })
          );
        }
        function Yt(a) {
          return (0, e.jsxs)("div", {
            className: B.AccountDetailsSubBlock,
            children: [
              (0, e.jsx)(Ae, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_backup_codes",
                ),
              }),
              (0, e.jsx)(ve, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_get_backup_codes",
                ),
                href: d.TS.STORE_BASE_URL + "twofactor/emergency_codes",
              }),
            ],
          });
        }
        function Ae(a) {
          const { strLabel: t, strText: n } = a;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("span", {
                className: B.AccountDetailLabel,
                children: t,
              }),
              !!n && (0, e.jsx)("span", { children: n }),
            ],
          });
        }
        function ve(a) {
          const { strLabel: t, href: n, target: i } = a;
          return (0, e.jsx)("div", {
            children: (0, e.jsx)(g.Ii, {
              className: B.AccountActionButton,
              href: n,
              target: i,
              children: t,
            }),
          });
        }
        const Jt = u.lazy(() =>
            Promise.all([
              r.e(92298),
              r.e(70576),
              r.e(33512),
              r.e(18307),
              r.e(8892),
              r.e(80702),
              r.e(58612),
              r.e(2289),
              r.e(4874),
              r.e(56925),
              r.e(67072),
            ]).then(r.bind(r, 80718)),
          ),
          Ve = {
            CookieSettings: () => "/cookiepreferences",
            FamilyManagement: () => "/familymanagement",
            SecurityDevices: () => "/authorizeddevices",
            PlaytestInvites: () => "/playtestinvites",
            Playtests: () => "/playtests",
          },
          Xt = (a) => {
            const t = a.match.url,
              n = Ve;
            return (0, e.jsxs)(S.dO, {
              children: [
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.CookieSettings()}`,
                  render: () =>
                    (0, e.jsx)(xe.X, {
                      config: {
                        "cookie-preferences": () => (0, e.jsx)(Ye, {}),
                      },
                    }),
                }),
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.FamilyManagement()}`,
                  render: () =>
                    (0, e.jsx)(xe.X, {
                      config: { "family-management": () => (0, e.jsx)(Jt, {}) },
                    }),
                }),
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.SecurityDevices()}`,
                  render: () =>
                    (0, e.jsx)(xe.X, {
                      config: { "security-devices": () => (0, e.jsx)(Ht, {}) },
                    }),
                }),
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.PlaytestInvites()}`,
                  render: () =>
                    (0, e.jsx)(xe.X, {
                      config: {
                        "playtest-invites": () =>
                          (0, e.jsx)(Le, { bShowPlaytestOverview: !0 }),
                      },
                    }),
                }),
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.Playtests()}`,
                  render: () =>
                    (0, e.jsx)(xe.X, {
                      config: { playtests: (i) => (0, e.jsx)(pt, { ...i }) },
                    }),
                }),
              ],
            });
          };
      },
      75358: (b) => {
        b.exports = {
          PopupScreenshotModal: "_39-iZ5ATgVu0Ji6MD3vGTs",
          PopupScreenshotContainer: "_1yPgn1HBK5eQLrfrG38h1X",
          PopupScreenshot: "_173h7V5UqdDhN-J2O-AKVt",
          ButtonCtn: "_3-4JG-Z1QyDXZaEByxvMvS",
          ButtonIcon: "_15gRxd1hdAQxSunAfg1PZ8",
          Disabled: "_3Mh6I7hT8HViCO91Q5Iech",
        };
      },
      43047: (b) => {
        b.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      67523: (b) => {
        b.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
      },
      21038: (b) => {
        b.exports = {
          PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
          SVG: "_3Mns5ZEBThi10kv9zwdCRr",
        };
      },
      61359: (b) => {
        b.exports = {
          AuthorizedDeviceHeader: "_2OcGChel9mKKDiT5UYgL8I",
          SectionDescription: "_2INQL8oKYSG91_gqx2zvnV",
          AuthorizedDeviceGroup: "_20iEFcT5JyJPhTjbaJ0ajE",
          DeviceGroup: "_2mir-ym1kKS06jV0W7mtUx",
          AuthorizedDevicesRecentHeader: "_35lIIoiD4gnKLmNL3H9zAo",
          RememberedDevice: "_2gQ1ywJDhv3qFFjvjtt39w",
          DeviceLogo: "_3u6D3tBNr6Pd8scEAu0WHh",
          RevokedDevice: "_22EU1rJVczbjFuV39qprXh",
          DeviceContainer: "_173r5KvavKBUk01FwZftvC",
          ActiveDevice: "_2eItHkwsCAtMw7E-EF_YG_",
          ThisDevice: "_3o3paJd8GOTYKXh7Rd3Br8",
          DeviceContent: "_3fcDKsMFeSrukc_lptL5k6",
          DeviceHeaderRow: "_366kraIS4n5agiJpxnOSL2",
          DeviceNameContainer: "_2thyM-IiBuBfn44nW5anSY",
          DeviceName: "e-cYNmgoRYobtL32PBDvh",
          LocationSuspicious: "_2wFj-skWKPalSQ4MHk27Wr",
          LastSeenRow: "_2Q1XRSo_YDuNplXJSPKtsq",
          LastActive: "CKNbt1mIaNAep7MwHG6eX",
          NewDevice: "_10WUgZtyhPN8XWybruXSY9",
          AuthorizedDeviceDetails: "Zq-YGng4xfhI7CCwSN6UF",
          DetailsToggleContainer: "_2h6gzZPnXmr8pFVxduqp_k",
          DetailsToggle: "_2-E69gxiszxb3lmuoV7yYi",
          Selected: "JQwtQncjBu_1UajTl86pS",
          ActiveNow: "aR0IvXuy6BAh7MauaSs5j",
          ActiveNowDot: "_2sNYH7uxn-CGdZCk4lGMAg",
          DeviceLogoBoundingBox: "_25S2w41EbEIy3v97Dc0nl8",
          DeviceSteamGuardLogo: "_3BA92JhNM9ztpJY4hnWagy",
          RemoveDevicesRow: "_3EYcq6Ow2WM7bGuzWyQRMN",
          RemoveDevicesButton: "_37dMp7l0gWnMweQxR4Qj7Z",
        };
      },
      72518: (b) => {
        b.exports = {
          AllButton: "_24Y_0sMrz5EywcAsFUstI1",
          ButtonHighlight: "_3OVHZhM_IefZqAOIsPxatj",
          CookieSettingsHeader: "_3R3iiUuAhP-0M-rdtCANeY",
          DataCollectionSettingsHeader: "-N7TxEZXL1e7VIKEfBOds",
          ButtonGroup: "YPn6VOod44mu0w34xdzDC",
          CookieGroup: "_25H3qBQ1Lfsfq8nwc3M0Fk",
          CookieSection: "_3IKt4dLdwzyZtMqAwvawdG",
          SectionDescription: "GA-wFr-pPreiaNq3wRump",
          NecessaryGroup: "_24o8cEsvGK0bE4hHyUGhfh",
          NecessaryTitle: "_3if8ZNUUN7eSTxlCJbdgav",
          NecessaryDesc: "_9NmWi9VzZyFLjcu_GW_70",
          SavedHardwareList: "_3cKa2WCkwVF9l83qdejZnW",
          SavedHardware: "rH2OfMey8m_-tFha6mSo3",
          FriendlyName: "_33i2P3K0jts8t9ZvEucxHX",
          Details: "_1rRiE6QmvGsMc-qivc5Xp1",
          SavedHardwareControls: "_24azLL9qdi04Bq8Q6NT3pc",
          DeleteButton: "kwiQ_gtacj8i38Yf6HMLh",
          RenameButton: "_1uhme8b0f9MEqNEEMZTVIt",
          SavedHardwareAddPCButton: "_1h6y7HfPp9ZETEt3vGYcIa",
        };
      },
      86227: (b) => {
        b.exports = {
          narrowWidth: "500px",
          PlaytestInvites: "_3XPWJM0EKr-dJ0B0NJtmjq",
          PlaytestInvite: "_22d1cAhcNjyVeCgm3buXvn",
          InviteInfo: "_9XX6R8HJVzwJ9jnfbIL-I",
          InviteDescription: "_3o2bwehhb6IiaAgm2UqSWZ",
          TimeInvited: "_1QDTpUha3gVN27iIGSQYu3",
          StatusCtn: "_1ItLCAR90cxfIMjbiraDqU",
          Buttons: "_1Fh12RGmObsvcXIRY7vQYf",
          WideButton: "wA5p2wik9ul235sZq1VJO",
          AppInfoCtn: "_2ToVcjoGTH4m6cNznWft6s",
          AppName: "_3rcHvM3XilLmqUey9RCWcR",
          AppDetail: "_1y2mfNER5Q5t4vb_ImMa3M",
          AppDescription: "_3O4Y1ujrXP2H7shfwIyVyr",
          SmallCap: "_1dsys_7Sn0ty3ZFNvF8VtC",
          AvatarAndPersona: "_3uUPNFsdEI9Fba-fyvnslj",
          Description: "_2fAxlp5l2ZkuTUe5oYvdRB",
        };
      },
      31896: (b) => {
        b.exports = { PlaytestStatusCtn: "_2eYiuTSkBQNywb-x-gquMD" };
      },
      86342: (b) => {
        b.exports = {
          narrowWidth: "500px",
          HeaderIcon: "_1DTV9TockJu_p7oiuZdWi6",
          AccountSecurityCtn: "_20DWPovgBZty81RwR7w9KW",
          AccountDetailsCtn: "FPQ9JppMamYmV0bS3zfDK",
          Divider: "_2DEfsEp7B2EWcj-wsoNnhc",
          AccountDetailsSubBlock: "aSLHKQsd5_tpAOdPgV5W1",
          EmailActions: "_2beoIY1coKEr8VYWkMFz1e",
          AccountDetailLabel: "W8esOSj_nvqyHTDxmGb2D",
          AccountActionButton: "_9fMwjaiixbDViVPurFAa4",
          SteamGuardStatusHeader: "BblQleWhhGVHu1TTaGdBI",
          HeaderText: "f3AwNeCF2PApiJ1yy2SII",
          SteamGuardLogo: "_373XxWi-VMyuhak5AkKWJR",
          RemoveText: "_2kFtGHlyLy724EB-HfKU6P",
          SteamGuardStatusBody: "-haW8HUYitKrzvsXQj_y6",
          AuthorizedDevice: "_1AvzOfTQ0sRKrk6NjJCe1M",
          SteamGuardActionsCtn: "_2JiIyKqLJrcGM5ABcQJ12s",
          RightAligned: "_3tH8spjqRz_Z6mmB4uWK-m",
          NoSteamGuardCtn: "o7VeKaSFD1CCBeZaAx-fb",
          NoSteamGuardBody: "_1UZaReJ5vqaDDNrR92LUfB",
          GetMobileAppCtn: "_3l4-i07loydWsCfabu0uv4",
          GetMobileAppText: "_34Ckpic2BxcwJoDsL0LQ7O",
          QROuterCtn: "XuL3KGluGJQa0C1sMnVC1",
          QRPointingArrow: "_1h-ifgHMnM357x2V6pKErV",
          QRCode: "owjpvFLO7gx4wTw_RofLx",
          MobileAppLinksCtn: "_2_7_jSeZidSftWskkhJV84",
          MobileAppDownloadImages: "_1aj-IQUPvF3Cq-lE1msSiJ",
          AppleAppStoreImg: "_3h50gHmzosl6KqYJtKto9O",
          GooglePlayStoreImg: "_273YCymOUtX4V13BJ6p2uZ",
        };
      },
      61738: (b, U, r) => {
        var e = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function u(y) {
          var f = S(y);
          return r(f);
        }
        function S(y) {
          if (!r.o(e, y)) {
            var f = new Error("Cannot find module '" + y + "'");
            throw ((f.code = "MODULE_NOT_FOUND"), f);
          }
          return e[y];
        }
        (u.keys = function () {
          return Object.keys(e);
        }),
          (u.resolve = S),
          (b.exports = u),
          (u.id = 61738);
      },
    },
  ]);
})();

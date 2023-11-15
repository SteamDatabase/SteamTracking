/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7280],
  {
    30120: (e) => {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_1YGAH",
        avatarStatus: "steamavatar_avatarStatus_1yIzy",
        avatar: "steamavatar_avatar_1p_Qr",
        avatarFrame: "steamavatar_avatarFrame_3atbN",
        avatarFrameImg: "steamavatar_avatarFrameImg_338kJ",
      };
    },
    46909: (e) => {
      e.exports = {
        RoleIcon: "familysharedcomponents_RoleIcon_3bonx",
        ProfileLink: "familysharedcomponents_ProfileLink_2EK4M",
        PlayerName: "familysharedcomponents_PlayerName_2aMDA",
        ProfileRoleIcon: "familysharedcomponents_ProfileRoleIcon_NW8Zt",
        RoleName: "familysharedcomponents_RoleName_2KKmg",
        FamilyErrorDisplay: "familysharedcomponents_FamilyErrorDisplay_2q8rI",
      };
    },
    57473: (e) => {
      e.exports = {
        RequestPurchasePage: "requestpurchasepage_RequestPurchasePage_3F6rI",
        Header: "requestpurchasepage_Header_1JteR",
        ThrobberContainer: "requestpurchasepage_ThrobberContainer_1mHKl",
        ButtonContainer: "requestpurchasepage_ButtonContainer_2H4GY",
        RequestButton: "requestpurchasepage_RequestButton_3thyo",
        RequestPurchaseButton:
          "requestpurchasepage_RequestPurchaseButton_18U0s",
      };
    },
    50355: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => p, _1: () => B, DY: () => h, vV: () => g });
      var r = a(33940),
        s = a(89526),
        n = a(88464),
        o = a(11301),
        i = a(19304),
        l = a(32765),
        A = a(87178);
      const m =
        a.p +
        "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var c = a(30120),
        u = a.n(c);
      class p extends s.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: t,
              size: a,
              className: n,
              statusStyle: o,
              statusPosition: l,
              children: c,
            } = e,
            p = (0, r._T)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            g = [];
          return (
            t && g.push(t),
            g.push(
              (function (e) {
                switch (e) {
                  case "X-Small":
                  case "Small":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                  case "Medium":
                  case "MediumLarge":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return m;
                }
              })(a),
            ),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, i.Z)(
                    u().avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    a || "Medium",
                    n,
                  ),
                },
                p,
              ),
              s.createElement("div", {
                className: (0, i.Z)(u().avatarStatus, "avatarStatus", l),
                style: o,
              }),
              s.createElement(A.j, {
                className: (0, i.Z)(u().avatar, "avatar"),
                rgSources: g,
                draggable: !1,
              }),
              c,
            )
          );
        }
      }
      let g = class extends s.Component {
        render() {
          const e = this.props,
            { persona: t, size: a, animatedAvatar: n, className: A } = e,
            m = (0, r._T)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let c = "";
          return (
            n && n.image_small && 0 != n.image_small.length
              ? (c = l.De.MEDIA_CDN_COMMUNITY_URL + "images/" + n.image_small)
              : t &&
                ((c = t.avatar_url_medium),
                "Small" == a || "X-Small" == a
                  ? (c = t.avatar_url)
                  : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                    (c = t.avatar_url_full)),
            s.createElement(
              p,
              Object.assign(
                {
                  strAvatarURL: c,
                  size: a,
                  className: (0, i.Z)((0, o.sB)(t), A),
                },
                m,
              ),
            )
          );
        }
      };
      g = (0, r.gn)([n.Pi], g);
      const h = (0, n.Pi)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: n } = e,
          o = (0, r._T)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let A = n ? t.image_large : t.image_small;
        return (
          A || (A = t.image_small),
          A.startsWith("https://") ||
            (A = l.De.MEDIA_CDN_COMMUNITY_URL + "images/" + A),
          s.createElement(
            "div",
            Object.assign(
              { className: (0, i.Z)(u().avatarFrame, a, "avatarFrame") },
              o,
            ),
            s.createElement("img", { className: u().avatarFrameImg, src: A }),
          )
        );
      });
      let B = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.props.bParentHovered || this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let e = 0;
          switch (this.props.loopDuration) {
            case "Short":
              e = 2500;
              break;
            case "Medium":
              e = 5e3;
              break;
            case "Long":
              e = 1e4;
          }
          0 != e &&
            (this.setState({ bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e,
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
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration
              ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
              : (this.setState({ bAnimate: !0 }), this.SetupAnimationTimer())),
            this.props.bParentHovered != e.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let e = this.props,
            {
              loopDuration: t,
              animatedAvatar: a,
              avatarFrame: n,
              children: o,
              style: i,
              bLimitProfileFrameAnimationTime: l,
              bParentHovered: A,
            } = e,
            m = (0, r._T)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
              "bLimitProfileFrameAnimationTime",
              "bParentHovered",
            ]);
          return (
            m.onClick &&
              (i = Object.assign(Object.assign({}, i), { cursor: "pointer" })),
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
                g,
                Object.assign({ animatedAvatar: a }, m),
                o,
                s.createElement(h, {
                  profileItem: n,
                  bDisableAnimation: l && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      B = (0, r.gn)([n.Pi], B);
    },
    87178: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => o });
      var r = a(33940),
        s = a(89526),
        n = a(4306);
      class o extends s.Component {
        constructor(e) {
          super(e),
            (this.m_refImage = s.createRef()),
            (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage,
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage,
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const e = this.props,
            { src: t, rgSources: a, onIncrementalError: n, onError: o } = e,
            i = (0, r._T)(e, [
              "src",
              "rgSources",
              "onIncrementalError",
              "onError",
            ]),
            l = this.src;
          return s.createElement(
            "img",
            Object.assign({ src: l, ref: this.m_refImage }, i, {
              onError: this.OnImageError,
            }),
          );
        }
      }
      (0, r.gn)([n.ak], o.prototype, "OnImageError", null);
    },
    36519: (e, t, a) => {
      "use strict";
      a.d(t, { L4: () => B, Mm: () => g, Uc: () => h });
      var r = a(89526),
        s = a(46909),
        n = a(701),
        o = a(14826),
        i = a(19304),
        l = a(24448),
        A = a(50355),
        m = a(47165),
        c = a(23384);
      function u(e) {
        return r.createElement(n.LpF, null);
      }
      function p(e) {
        return r.createElement(n.soM, null);
      }
      function g(e) {
        return r.createElement(
          "div",
          { className: (0, i.Z)(s.RoleIcon, e.className) },
          2 == e.role ? r.createElement(p, null) : r.createElement(u, null),
        );
      }
      function h(e) {
        const { steamID: t, role: a, persona: n } = e;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "a",
            {
              className: s.ProfileLink,
              href: l.y$.GetProfileURLBySteamID(new m.K(t)),
            },
            r.createElement(A.vV, {
              className: s.Avatar,
              persona: n,
              size: "Large",
              statusPosition: "right",
            }),
            r.createElement(
              "div",
              { className: s.PlayerName },
              null == n ? void 0 : n.m_strPlayerName,
            ),
          ),
          r.createElement(g, { className: s.ProfileRoleIcon, role: a }),
          r.createElement(
            "div",
            { className: s.RoleName },
            (0, o.Xx)(`#FamilyManagement_Role_${a}`),
          ),
        );
      }
      function B(e) {
        const t = (0, r.useContext)(c.Xe);
        return t.errorMessage
          ? r.createElement(
              "div",
              { className: s.FamilyErrorDisplay },
              t.errorMessage,
            )
          : null;
      }
    },
    40151: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => p });
      var r = a(89526),
        s = a(57473),
        n = a.n(s),
        o = a(14826),
        i = a(23384),
        l = a(69338),
        A = a(36519),
        m = a(44973),
        c = a(57605),
        u = a(19304);
      function p(e) {
        const { shoppingCartGID: t } = e,
          a = (0, i.Rs)(),
          [s, m] = r.useState(null),
          c = r.useMemo(() => (0, o.Xx)("#RequestPurchase_PageTitle"), []);
        return a.isLoading
          ? r.createElement(
              "div",
              { className: n().RequestPurchasePage },
              r.createElement(
                "div",
                { className: n().ThrobberContainer },
                r.createElement(l.V, null),
              ),
              ";",
            )
          : a.isError
          ? null
          : r.createElement(
              "div",
              { className: n().RequestPurchasePage },
              r.createElement(
                i.Xe.Provider,
                { value: { errorMessage: s, setErrorMessage: m } },
                r.createElement("div", { className: n().Header }, c),
                r.createElement(A.L4, null),
                r.createElement(g, {
                  familyGroupID: a.data.family_groupid(),
                  shoppingCartGID: t,
                }),
              ),
            );
      }
      function g(e) {
        const { familyGroupID: t, shoppingCartGID: a } = e,
          s = (0, i.BU)(t, a, m.L7.country_code),
          { setErrorMessage: A } = (0, i.sT)(
            s,
            "#RequestPurchase_GenericError",
          ),
          p = `${m.De.STORE_BASE_URL}cart`;
        return s.isLoading
          ? r.createElement(
              "div",
              { className: n().ThrobberContainer },
              r.createElement(l.V, null),
            )
          : s.isError
          ? null
          : r.createElement(
              "div",
              null,
              r.createElement(
                "div",
                null,
                (0, o.Xx)(
                  s.isSuccess
                    ? "#RequestPurchase_PurchaseRequested"
                    : "#RequestPurchase_WillNotifyAllAdults",
                ),
              ),
              !s.isSuccess &&
                r.createElement(
                  "div",
                  { className: n().ButtonContainer },
                  r.createElement(
                    c.zx,
                    {
                      className: (0, u.Z)(
                        n().RequestPurchaseButton,
                        n().RequestButton,
                      ),
                      onClick: () => {
                        A(null), s.mutate();
                      },
                    },
                    (0, o.Xx)("#RequestPurchase_RequestPurchase"),
                  ),
                  r.createElement(
                    "a",
                    { href: p },
                    r.createElement(
                      c.zx,
                      {
                        className: (0, u.Z)(
                          n().BackToCartButton,
                          n().RequestButton,
                        ),
                      },
                      (0, o.Xx)("#RequestPurchase_BackToCart"),
                    ),
                  ),
                ),
            );
      }
    },
  },
]);

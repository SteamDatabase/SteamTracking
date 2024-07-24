/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2634],
  {
    43047: (e) => {
      e.exports = {
        avatarHolder: "nibodjvvrm86uCfnnAn4g",
        avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
        avatar: "_3h-QRJGxnVOIExtHD1R0f2",
        avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
        avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
      };
    },
    61359: (e) => {
      e.exports = {
        AuthorizedDeviceHeader: "_2OcGChel9mKKDiT5UYgL8I",
        SectionDescription: "_2INQL8oKYSG91_gqx2zvnV",
        AuthorizedDeviceGroup: "_20iEFcT5JyJPhTjbaJ0ajE",
        DeviceGroup: "_2mir-ym1kKS06jV0W7mtUx",
        AuthorizedDevicesRecentHeader: "_35lIIoiD4gnKLmNL3H9zAo",
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
        DeviceLogo: "_3u6D3tBNr6Pd8scEAu0WHh",
        RemoveDevicesRow: "_3EYcq6Ow2WM7bGuzWyQRMN",
      };
    },
    72518: (e) => {
      e.exports = {
        AllButton: "_24Y_0sMrz5EywcAsFUstI1",
        ButtonHighlight: "_3OVHZhM_IefZqAOIsPxatj",
        CookieSettingsHeader: "_3R3iiUuAhP-0M-rdtCANeY",
        ButtonGroup: "YPn6VOod44mu0w34xdzDC",
        CookieGroup: "_25H3qBQ1Lfsfq8nwc3M0Fk",
        CookieSection: "_3IKt4dLdwzyZtMqAwvawdG",
        SectionDescription: "GA-wFr-pPreiaNq3wRump",
        NecessaryGroup: "_24o8cEsvGK0bE4hHyUGhfh",
        NecessaryTitle: "_3if8ZNUUN7eSTxlCJbdgav",
        NecessaryDesc: "_9NmWi9VzZyFLjcu_GW_70",
      };
    },
    6695: (e) => {
      e.exports = {
        NotificationSettingsHeader: "_2XOzkA8bF8HiEtnoYSLHGC",
        SectionDescription: "_3K5HBHn_mMUrazI_oUH12q",
        NotificationGroup: "_1_kCY5Jc71QX_9j4Q7brk",
        NotificationSection: "_3Sbby9pYJeX9b2Dcjx1Gbc",
        NotificationFeedToggle: "_30Nc3G1cpcJeZAQulOQYHB",
        NotificationSendWhen: "_3YstFVBT36qZA8FvdzEAF",
        NotificationDescription: "_3FSzSTDALgYgSmsyvkISnG",
        NotificationPrefDetails: "_152HTE3xZ88Xk7LEEPFE68",
        PrefDetailsToggle: "_3XAMDDm5D1pSZpakvjyRPk",
        Selected: "_3yrEIJRje6XiWe9BiIGY7P",
      };
    },
    86227: (e) => {
      e.exports = {
        PlaytestInvites: "_3XPWJM0EKr-dJ0B0NJtmjq",
        PlaytestInvite: "_22d1cAhcNjyVeCgm3buXvn",
        InviteInfo: "_9XX6R8HJVzwJ9jnfbIL-I",
        TimeInvited: "_1QDTpUha3gVN27iIGSQYu3",
        StatusCtn: "_1ItLCAR90cxfIMjbiraDqU",
        Buttons: "_1Fh12RGmObsvcXIRY7vQYf",
        WideButton: "wA5p2wik9ul235sZq1VJO",
        AvatarAndPersona: "_3uUPNFsdEI9Fba-fyvnslj",
      };
    },
    55909: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => l });
      var n = a(90626),
        r = a(71513),
        i = a(93007),
        s = a(56093),
        c = a(78327),
        o = a(61712);
      function l(e) {
        const { children: t, navTreeRef: a, ...l } = e,
          m = n.useRef(),
          _ = (0, s.Ue)(m, a),
          u = (0, c.Qn)(),
          p = window.__virtual_keyboard_client;
        if (u) {
          const e = window.__nav_tree_root;
          return n.createElement(
            r.B2,
            { ...l, navTreeRef: _, secondary: !0, parentEmbeddedNavTree: e },
            n.createElement(
              o.F6,
              { factory: p },
              n.createElement(i.q, null, t),
            ),
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => f, xz: () => g, $Y: () => h, i8: () => A });
      var n = a(34629),
        r = a(90626),
        i = a(75844),
        s = a(10622),
        c = a(52038),
        o = a(78327),
        l = a(3088);
      const m =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        _ =
          a.p +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var u = a(43047),
        p = a.n(u),
        d = a(81393);
      const f = r.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: n,
            statusStyle: i,
            statusPosition: s,
            children: o,
            ...u
          } = e,
          f = r.useMemo(() => {
            const e = [];
            return (
              t && e.push(t),
              e.push(
                (function (e) {
                  switch (e) {
                    case "X-Small":
                    case "Small":
                      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                    case "Medium":
                    case "MediumLarge":
                      return m;
                    case "Large":
                    case "X-Large":
                    case "FillArea":
                      return _;
                    default:
                      return (0, d.z)(e, `Unhandled size ${e}`), m;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return r.createElement(
          "div",
          {
            className: (0, c.A)(
              p().avatarHolder,
              "avatarHolder",
              "no-drag",
              a,
              n,
            ),
            ...u,
          },
          r.createElement("div", {
            className: (0, c.A)(p().avatarStatus, "avatarStatus", s),
            style: i,
          }),
          r.createElement(l.c, {
            className: (0, c.A)(p().avatar, "avatar"),
            rgSources: f,
            draggable: !1,
          }),
          o,
        );
      });
      let A = class extends r.Component {
        render() {
          const {
            persona: e,
            size: t = "Medium",
            animatedAvatar: a,
            className: n,
            ...i
          } = this.props;
          let l = "";
          return (
            a && a.image_small && 0 != a.image_small.length
              ? (l = o.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
              : e &&
                ((l = e.avatar_url_medium),
                "Small" == t || "X-Small" == t
                  ? (l = e.avatar_url)
                  : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                    (l = e.avatar_url_full)),
            r.createElement(f, {
              strAvatarURL: l,
              size: t,
              className: (0, c.A)((0, s.rO)(e), n),
              ...i,
            })
          );
        }
      };
      A = (0, n.Cg)([i.PA], A);
      const h = (0, i.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: n, ...i } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let s = n ? t.image_large : t.image_small;
        return (
          s || (s = t.image_small),
          s.startsWith("https://") ||
            (s = o.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + s),
          r.createElement(
            "div",
            { className: (0, c.A)(p().avatarFrame, a, "avatarFrame"), ...i },
            r.createElement("img", { className: p().avatarFrameImg, src: s }),
          )
        );
      });
      let g = class extends r.Component {
        m_timer;
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
                : (this.setState({ bAnimate: !0 }),
                  this.SetupAnimationTimer())),
            this.props.bParentHovered != e.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let {
            loopDuration: e,
            animatedAvatar: t,
            avatarFrame: a,
            children: n,
            style: i,
            bLimitProfileFrameAnimationTime: s,
            bParentHovered: c,
            ...o
          } = this.props;
          return (
            o.onClick && (i = { ...i, cursor: "pointer" }),
            this.state.bAnimate || (t = null),
            r.createElement(
              "div",
              {
                onMouseEnter: () =>
                  this.setState({
                    bAnimate: "None" != this.props.loopDuration,
                  }),
                onMouseLeave: () => this.SetupAnimationTimer(),
              },
              r.createElement(
                A,
                { animatedAvatar: t, ...o },
                n,
                r.createElement(h, {
                  profileItem: a,
                  bDisableAnimation: s && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      g = (0, n.Cg)([i.PA], g);
    },
    3088: (e, t, a) => {
      "use strict";
      a.d(t, { c: () => s });
      var n = a(34629),
        r = a(90626),
        i = a(56093);
      class s extends r.Component {
        m_refImage = r.createRef();
        constructor(e) {
          super(e), (this.state = { nImage: 0 });
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
          const {
              rgSources: e,
              onIncrementalError: t,
              onError: a,
              ...n
            } = this.props,
            i = this.src;
          return r.createElement("img", {
            ref: this.m_refImage,
            ...n,
            src: i,
            onError: this.OnImageError,
          });
        }
      }
      (0, n.Cg)([i.oI], s.prototype, "OnImageError", null);
    },
    95306: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { AccountPreferencesRoutes: () => Ne, default: () => Se });
      var n = a(90626),
        r = a(92757),
        i = a(34629),
        s = a(14947),
        c = (a(68797), a(78327)),
        o = a(41735),
        l = a.n(o),
        m = a(61859);
      class _ {
        m_Preferences = void 0;
        constructor(e) {
          (0, s.Gn)(this),
            (this.m_Preferences = e),
            (this.m_Preferences.content_customization &&
              !Array.isArray(this.m_Preferences.content_customization)) ||
              (this.m_Preferences.content_customization = {}),
            (this.m_Preferences.third_party_analytics &&
              !Array.isArray(this.m_Preferences.third_party_analytics)) ||
              (this.m_Preferences.third_party_analytics = {}),
            (this.m_Preferences.third_party_content &&
              !Array.isArray(this.m_Preferences.third_party_content)) ||
              (this.m_Preferences.third_party_content = {}),
            (this.m_Preferences.valve_analytics &&
              !Array.isArray(this.m_Preferences.valve_analytics)) ||
              (this.m_Preferences.valve_analytics = {}),
            (void 0 !== this.m_Preferences.utm_enabled &&
              null !== this.m_Preferences.utm_enabled) ||
              (this.m_Preferences.utm_enabled = !0),
            (0 != this.m_Preferences.preference_state &&
              1 != this.m_Preferences.preference_state) ||
              ((this.m_Preferences.valve_analytics.product_impressions_tracking =
                !0),
              (this.m_Preferences.content_customization.recentapps = !0),
              (this.m_Preferences.third_party_analytics.google_analytics = !0),
              (this.m_Preferences.third_party_content.sketchfab = !0),
              (this.m_Preferences.third_party_content.twitter = !0),
              (this.m_Preferences.third_party_content.vimeo = !0),
              (this.m_Preferences.third_party_content.youtube = !0)),
            0 == this.m_Preferences.version && (this.m_Preferences.version = 1);
        }
        GetVersion() {
          return this.m_Preferences.version;
        }
        GetPreferenceState() {
          return this.m_Preferences.preference_state;
        }
        BIsAllowAll() {
          return (
            1 == this.m_Preferences.preference_state ||
            0 == this.m_Preferences.preference_state
          );
        }
        BIsRejectAll() {
          return 2 == this.m_Preferences.preference_state;
        }
        SetPreferenceState(e) {
          if (this.m_Preferences.preference_state != e) {
            if (((this.m_Preferences.preference_state = e), 1 == e || 2 == e)) {
              let t = 1 == e;
              (this.m_Preferences.content_customization.recentapps = t),
                (this.m_Preferences.third_party_analytics.google_analytics = t),
                (this.m_Preferences.third_party_content.sketchfab = t),
                (this.m_Preferences.third_party_content.twitter = t),
                (this.m_Preferences.third_party_content.vimeo = t),
                (this.m_Preferences.third_party_content.youtube = t),
                (this.m_Preferences.valve_analytics.product_impressions_tracking =
                  t);
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
          (this.m_Preferences.preference_state = 3), this.PostCookieSettings();
        }
        async PostCookieSettings() {
          const e = c.TS.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
            t = new FormData();
          t.set("sessionid", c.TS.SESSIONID),
            t.append("cookiepreferences", JSON.stringify(this.m_Preferences));
          try {
            let a = await l().post(e, t, { withCredentials: !0 });
            if (200 != a.status || 1 != a?.data?.success)
              window.ShowAlertDialog(
                (0, m.we)("#CookiePref_Error"),
                (0, m.we)("#CookiePref_ErrorNotSaved"),
              );
            else if (1 == a?.data?.success) {
              0;
              const { transfer_urls: e, transfer_params: t } = a.data;
              e && t && this.TransferCookiePreferencesToSites(e, t);
            }
          } catch (e) {
            0,
              window.ShowAlertDialog(
                (0, m.we)("#CookiePref_Error"),
                (0, m.we)("#CookiePref_ErrorNotSaved"),
              );
          }
        }
        TransferCookiePreferencesToSites(e, t) {
          const a = new FormData();
          a.set("transfer_params", t);
          for (const t of e) l().post(t, a);
        }
      }
      (0, i.Cg)([s.sH], _.prototype, "m_Preferences", void 0);
      var u = a(75844),
        p = a(7068),
        d = a(72518),
        f = a(52038),
        A = a(32381),
        h = a(25855),
        g = a(55909),
        v = a(71513);
      let E;
      const P = (0, u.PA)(() => {
          let e = (function () {
            if (!E) {
              let e = (0, c.Tc)("cookiepreferences", "application_config");
              E = new _(e);
            }
            return E;
          })();
          const t = (0, h.A)(),
            a = (0, n.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            r = (0, n.useCallback)(() => {
              e.SetPreferenceState(2);
            }, [e]);
          return n.createElement(
            g.u,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            n.createElement(
              "div",
              {
                className: (0, f.A)(
                  d.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              n.createElement(
                "div",
                null,
                (0, m.we)("#CookiePref_OptionalCookies_Title"),
              ),
            ),
            n.createElement(
              "div",
              { className: "account_settings_container" },
              n.createElement(
                A.Z,
                { "flow-children": "row", className: d.ButtonGroup },
                n.createElement(
                  v.ml,
                  {
                    className: (0, f.A)(
                      d.AllButton,
                      e.BIsRejectAll() ? d.ButtonHighlight : "",
                    ),
                    onClick: r,
                  },
                  (0, m.we)("#CookiePref_RejectAll"),
                ),
                n.createElement(
                  v.ml,
                  {
                    className: (0, f.A)(
                      d.AllButton,
                      e.BIsAllowAll() ? d.ButtonHighlight : "",
                    ),
                    onClick: a,
                  },
                  (0, m.we)("#CookiePref_AcceptAll"),
                ),
              ),
              n.createElement(y, { settings: e }),
              n.createElement(N, { settings: e }),
              n.createElement(S, { settings: e }),
            ),
            n.createElement(
              "div",
              {
                className: (0, f.A)(
                  d.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              n.createElement(
                "div",
                null,
                (0, m.we)("#CookiePref_TechnicallyNeccesary_Title"),
              ),
            ),
            n.createElement(
              "div",
              { className: "account_settings_container" },
              n.createElement(
                "p",
                null,
                (0, m.we)("#CookiePref_TechnicallyNeccesary_Desc"),
              ),
              n.createElement(
                "div",
                { className: d.CookieGroup },
                n.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, m.we)("#CookiePref_SessionID_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, m.we)("#CookiePref_SessionID_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, m.we)("#CookiePref_ShoppingCart_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, m.we)("#CookiePref_ShoppingCart_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, m.we)("#CookiePref_SteamCountry_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, m.we)("#CookiePref_SteamCountry_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, m.we)("#CookiePref_Timezone_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, m.we)("#CookiePref_Timezone_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, m.we)("#CookiePref_BirthTime_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, m.we)("#CookiePref_BirthTime_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, m.we)("#CookiePref_Login_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, m.we)("#CookiePref_Login_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, m.we)("#CookiePref_Language_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, m.we)("#CookiePref_Language_Desc"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: d.NecessaryGroup },
                  n.createElement(
                    "span",
                    { className: d.NecessaryTitle },
                    (0, m.we)("#CookiePref_CookieSettings_Title"),
                  ),
                  n.createElement(
                    "span",
                    { className: d.NecessaryDesc },
                    (0, m.we)("#CookiePref_CookieSettings_Desc"),
                  ),
                ),
              ),
            ),
            n.createElement(
              "div",
              {
                className: (0, f.A)(
                  d.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              n.createElement(
                "div",
                null,
                (0, m.we)("#PrivacySettings_Marketing_Header"),
              ),
            ),
            n.createElement(
              "div",
              { className: "account_settings_container" },
              n.createElement(k, { settings: e }),
            ),
            null,
          );
        }),
        y = (0, u.PA)((e) => {
          const { settings: t } = e,
            a = (0, n.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return n.createElement(
            "div",
            { className: d.CookieGroup },
            n.createElement(
              "div",
              { className: d.CookieSection },
              n.createElement(
                "h2",
                null,
                (0, m.we)("#CookiePref_Content_Title"),
              ),
              n.createElement(
                "p",
                { className: d.SectionDescription },
                (0, m.we)("#CookiePref_Content_Desc"),
              ),
              n.createElement(p.RF, {
                onChange: a,
                label: (0, m.we)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: (0, m.we)("#CookiePref_Content_ToggleDesc"),
              }),
            ),
          );
        }),
        N = (0, u.PA)((e) => {
          const { settings: t } = e,
            a = (0, n.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return n.createElement(
            "div",
            { className: d.CookieGroup },
            n.createElement(
              "div",
              { className: d.CookieSection },
              n.createElement(
                "h2",
                null,
                (0, m.we)("#CookiePref_ValveAnalytics_Title"),
              ),
              n.createElement(
                "p",
                { className: d.SectionDescription },
                (0, m.we)("#CookiePref_ValveAnalytics_Desc"),
              ),
              n.createElement(p.RF, {
                onChange: a,
                label: (0, m.we)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: (0, m.we)("#CookiePref_ValveAnalytics_ToggleDesc"),
              }),
            ),
          );
        }),
        S = (0, u.PA)((e) => {
          const { settings: t } = e,
            a = (0, n.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            r = (0, n.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            i = (0, n.useCallback)(() => {
              t.ToggleSketchfab();
            }, [t]);
          return n.createElement(
            "div",
            { className: d.CookieGroup },
            n.createElement(
              "div",
              { className: d.CookieSection },
              n.createElement(
                "h2",
                null,
                (0, m.we)("#CookiePref_ThirdParty_Title"),
              ),
              n.createElement(
                "p",
                { className: d.SectionDescription },
                (0, m.we)("#CookiePref_ThirdParty_Desc"),
              ),
              n.createElement(p.RF, {
                onChange: a,
                label: (0, m.we)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: (0, m.PP)(
                  "#CookiePref_YouTube_Desc",
                  n.createElement(
                    "a",
                    {
                      href: "https://policies.google.com/privacy",
                      target: "_blank",
                    },
                    (0, m.we)("#CookiePref_YouTube_TogglePolicyName"),
                  ),
                ),
              }),
              n.createElement(p.RF, {
                onChange: r,
                label: (0, m.we)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: (0, m.PP)(
                  "#CookiePref_Vimeo_Desc",
                  n.createElement(
                    "a",
                    { href: "https://vimeo.com/privacy", target: "_blank" },
                    (0, m.we)("#CookiePref_Vimeo_TogglePolicyName"),
                  ),
                ),
              }),
              n.createElement(p.RF, {
                onChange: i,
                label: (0, m.we)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: (0, m.PP)(
                  "#CookiePref_Sketchfab_Desc",
                  n.createElement(
                    "a",
                    { href: "https://sketchfab.com/privacy", target: "_blank" },
                    (0, m.we)("#CookiePref_Sketchfab_TogglePolicyName"),
                  ),
                ),
              }),
            ),
          );
        }),
        k = (0, u.PA)((e) => {
          const { settings: t } = e,
            a = (0, n.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return n.createElement(
            "div",
            { className: d.CookieGroup },
            n.createElement(
              "div",
              { className: d.CookieSection },
              n.createElement(
                "h2",
                null,
                (0, m.we)("#PrivacySettings_Marketing_Title"),
              ),
              n.createElement(
                "p",
                { className: d.SectionDescription },
                (0, m.we)("#PrivacySettings_Marketing_Desc"),
              ),
              n.createElement(p.RF, {
                onChange: a,
                label: (0, m.we)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: (0, m.we)("#PrivacySettings_UTM_ToggleDesc"),
              }),
            ),
          );
        });
      class T {
        m_Preferences = void 0;
        m_bUpdating = !1;
        constructor(e) {
          (0, s.Gn)(this), (this.m_Preferences = e);
        }
        GetPreferences() {
          return this.m_Preferences;
        }
        BUpdatingPreferences() {
          return this.m_bUpdating;
        }
        ToggleTargetPreference(e, t) {
          this.m_bUpdating = !0;
          let a = !1;
          for (let n of this.m_Preferences)
            if (t.notification_type == n.notification_type) {
              (n.notification_targets ^= e),
                1 != (1 & n.notification_targets) &&
                  (n.notification_targets = 0),
                (a = !0);
              break;
            }
          a && this.PostNotificationSettings(), (this.m_bUpdating = !1);
        }
        async PostNotificationSettings() {
          const e = c.TS.STORE_BASE_URL + "account/ajaxsetnotificationsettings",
            t = new FormData();
          t.set("sessionid", c.TS.SESSIONID),
            t.append(
              "notificationpreferences",
              JSON.stringify(this.m_Preferences),
            );
          try {
            let a = await l().post(e, t, { withCredentials: !0 });
            (200 == a.status && 1 == a?.data?.success) ||
              window.ShowAlertDialog(
                (0, m.we)("#NotificationPref_Error"),
                (0, m.we)("#NotificationPref_ErrorNotSaved"),
              );
          } catch (e) {
            0,
              window.ShowAlertDialog(
                (0, m.we)("#NotificationPref_Error"),
                (0, m.we)("#NotificationPref_ErrorNotSaved"),
              );
          }
        }
      }
      (0, i.Cg)([s.sH], T.prototype, "m_Preferences", void 0),
        (0, i.Cg)([s.sH], T.prototype, "m_bUpdating", void 0);
      var w = a(6695),
        C = a(4869);
      let D;
      function B() {
        if (!D) {
          let e = (0, c.Tc)("notificationpreferences", "application_config");
          D = new T(e);
        }
        return D;
      }
      const I = (0, u.PA)(() => {
          let e = B();
          const t = (0, h.A)();
          let a = [];
          for (const t of e.GetPreferences())
            a.push(n.createElement(b, { preferenceSetting: t }));
          return n.createElement(
            g.u,
            { navID: "StoreNotificationSettings", NavigationManager: t },
            n.createElement(
              "div",
              {
                className: (0, f.A)(
                  w.NotificationSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              n.createElement(
                "div",
                null,
                (0, m.we)("#NotificationSettings_Title"),
              ),
            ),
            n.createElement(
              "div",
              { className: "account_settings_container" },
              n.createElement(
                "p",
                { className: w.SectionDescription },
                (0, m.we)("#NotificationSettings_Desc1"),
              ),
              n.createElement(
                "p",
                { className: w.SectionDescription },
                (0, m.we)("#NotificationSettings_Desc2"),
              ),
              n.createElement(
                "div",
                { className: "notification_settings_container" },
                n.createElement(
                  "div",
                  { className: w.NotificationSendWhen },
                  (0, m.we)("#NotificationSettings_SendMeWhen"),
                ),
                a,
              ),
            ),
          );
        }),
        b = (0, u.PA)((e) => {
          const { preferenceSetting: t } = e;
          let a = B();
          const r = (0, n.useCallback)(() => {
              a.ToggleTargetPreference(1, t);
            }, [t, a]),
            i = (0, n.useCallback)(() => {
              a.ToggleTargetPreference(8, t);
            }, [t, a]),
            s = (0, n.useCallback)(() => {
              a.ToggleTargetPreference(2, t);
            }, [t, a]),
            [c, o] = (0, n.useState)(!1),
            l = a.BUpdatingPreferences(),
            _ = 1 == (1 & t.notification_targets),
            u = 2 == (2 & t.notification_targets),
            d = 8 == (8 & t.notification_targets),
            A =
              ((h = t.notification_type),
              (0, m.c9)("#SteamNotificationTypeDesc_" + h)
                ? (0, m.we)("#SteamNotificationTypeDesc_" + h)
                : null);
          var h;
          return A
            ? n.createElement(
                "div",
                { className: w.NotificationGroup },
                n.createElement(
                  "div",
                  { className: w.NotificationSection },
                  n.createElement(p.y4, {
                    className: w.NotificationFeedToggle,
                    padding: "compact",
                    onChange: r,
                    disabled: l,
                    bottomSeparator: "none",
                    checked: _,
                  }),
                  n.createElement(
                    "p",
                    { className: w.NotificationDescription },
                    A,
                  ),
                  n.createElement(
                    p.wl,
                    {
                      className: (0, f.A)({
                        [w.PrefDetailsToggle]: !0,
                        [w.Selected]: c,
                      }),
                      onClick: () => o(!c),
                    },
                    n.createElement(C.b8_, { direction: "down" }),
                  ),
                ),
                c &&
                  n.createElement(
                    "div",
                    { className: w.NotificationPrefDetails },
                    n.createElement(p.Yh, {
                      label: (0, m.we)("#NotificationSettings_SendToast"),
                      disabled: l || !_,
                      checked: d,
                      onChange: i,
                    }),
                    n.createElement(p.Yh, {
                      label: (0, m.we)(
                        "#NotificationSettings_PushNotification",
                      ),
                      disabled: l || !_,
                      checked: u,
                      onChange: s,
                    }),
                  ),
              )
            : null;
        });
      var R = a(6813),
        Q = a(61359);
      class G {
        m_rgDevices = [];
        m_rgRecentDevices = [];
        m_strKBArticleURL;
        static s_AuthorizedDevicesStore;
        constructor() {
          (0, s.Gn)(this);
        }
        static Get() {
          return (
            G.s_AuthorizedDevicesStore ||
              ((G.s_AuthorizedDevicesStore = new G()),
              G.s_AuthorizedDevicesStore.Init()),
            G.s_AuthorizedDevicesStore
          );
        }
        Init() {
          (this.m_rgDevices = (0, c.Tc)("devices", "application_config")),
            (this.m_rgRecentDevices = (0, c.Tc)(
              "recent_devices",
              "application_config",
            )),
            (this.m_strKBArticleURL = (0, c.Tc)(
              "kb_article",
              "application_config",
            ));
        }
        GetDevices() {
          return this.m_rgDevices;
        }
        GetRecentDevices() {
          return this.m_rgRecentDevices;
        }
        GetKBArticleURL() {
          return this.m_strKBArticleURL;
        }
      }
      (0, i.Cg)([s.sH], G.prototype, "m_rgDevices", void 0),
        (0, i.Cg)([s.sH], G.prototype, "m_rgRecentDevices", void 0);
      var U,
        z = a(12155);
      !(function (e) {
        (e[(e.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown"),
          (e[(e.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32"),
          (e[(e.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64"),
          (e[(e.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64"),
          (e[(e.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX"),
          (e[(e.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3"),
          (e[(e.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32"),
          (e[(e.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32"),
          (e[(e.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64"),
          (e[(e.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32"),
          (e[(e.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64"),
          (e[(e.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS"),
          (e[(e.k_EPlatformTypeEmbeddedClient = 12)] =
            "k_EPlatformTypeEmbeddedClient"),
          (e[(e.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser"),
          (e[(e.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax");
      })(U || (U = {}));
      var H = a(91675),
        F = a(22837),
        M = a(738),
        L = a(56011),
        K = a(14771),
        W = a(32754),
        J = a(11838);
      const X = (0, u.PA)(() => {
        let e = G.Get();
        const t = (0, h.A)(),
          a = (function () {
            const [e] = n.useState(() =>
              (0, c.Tc)("requesting_token_id", "application_config"),
            );
            return e;
          })(),
          r = Date.now() / 1e3,
          i = x(
            e
              .GetRecentDevices()
              .find((e) => e.logged_in && e.last_seen?.time > r - 900) ??
              e.GetRecentDevices()[0],
          ).country;
        let s = [],
          o = [];
        for (const t of e.GetRecentDevices()) {
          const e = t.logged_in && t.last_seen?.time > r - 900,
            c = n.createElement(j, {
              device: t,
              key: t.token_id,
              bActiveNow: e,
              bCurrentDevice: a == t.token_id,
              strActiveCountry: i,
            });
          e ? s.push(c) : o.push(c);
        }
        let l = [];
        for (const t of e.GetDevices())
          l.push(
            n.createElement(j, {
              device: t,
              key: t.token_id,
              strActiveCountry: i,
            }),
          );
        return n.createElement(
          g.u,
          { navID: "StoreAuthorizedDevices", NavigationManager: t },
          n.createElement(
            "div",
            {
              className: (0, f.A)(
                Q.AuthorizedDeviceHeader,
                "account_header_line noicon",
              ),
            },
            n.createElement(
              "div",
              null,
              (0, m.we)("#accountpreferences_authorized_devices_header"),
            ),
          ),
          n.createElement(
            "div",
            { className: "account_settings_container" },
            n.createElement(
              "div",
              { className: Q.SectionDescription },
              (0, m.PP)(
                "#accountpreferences_authorized_devices_description",
                n.createElement("p", null),
              ),
            ),
            n.createElement(
              "div",
              { className: Q.AuthorizedDeviceGroup },
              n.createElement(
                "div",
                { className: Q.DeviceGroup },
                n.createElement(
                  "div",
                  { className: Q.ActiveNow },
                  n.createElement(z.jlt, { className: Q.ActiveNowDot }),
                  (0, m.we)("#accountpreferences_authorized_device_active_now"),
                ),
                s,
              ),
              Boolean(o.length) &&
                n.createElement(
                  "div",
                  { className: Q.DeviceGroup },
                  n.createElement(
                    "div",
                    { className: Q.AuthorizedDevicesRecentHeader },
                    (0, m.we)(
                      "#accountpreferences_authorized_devices_recent_heading",
                    ),
                  ),
                  o,
                ),
              Boolean(l.length) &&
                n.createElement(
                  "div",
                  { className: Q.DeviceGroup },
                  n.createElement(
                    "div",
                    { className: Q.AuthorizedDevicesRecentHeader },
                    (0, m.we)(
                      "#accountpreferences_authorized_devices_other_heading",
                    ),
                  ),
                  l,
                ),
              n.createElement(
                "div",
                { className: Q.DeviceGroup },
                n.createElement(
                  "div",
                  { className: Q.AuthorizedDevicesRecentHeader },
                  (0, m.we)(
                    "#accountpreferences_authorized_devices_remove_header",
                  ),
                ),
                n.createElement(
                  "div",
                  { className: Q.RemoveDevicesRow },
                  n.createElement(
                    "div",
                    null,
                    (0, m.we)(
                      "#accountpreferences_authorized_devices_remove_desc",
                    ),
                  ),
                  n.createElement(
                    p.wl,
                    {
                      onClick: (e) => {
                        (0, M.pg)(n.createElement(q, null), (0, L.uX)(e));
                      },
                    },
                    (0, m.we)(
                      "#accountpreferences_authorized_devices_remove_button",
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      });
      function j(e) {
        const {
            device: t,
            bActiveNow: a,
            bCurrentDevice: r,
            strActiveCountry: i,
          } = e,
          [s, c] = (0, n.useState)(!1);
        let o = (function (e) {
          if (2 == e.platform_type) {
            let t = new J.UAParser(e.token_description).getResult();
            return t.browser.name && t.os.name
              ? "WebKit" == t.browser.name
                ? t.os.name
                : (0, m.we)(
                    "#accountpreferences_authorized_devices_browser_on_os",
                    t.browser.name,
                    t.os.name,
                  )
              : (0, m.we)(
                  "#accountpreferences_authorized_devices_browser_unmatched",
                );
          }
          return e.token_description;
        })(t);
        o.length && (o = ' - "' + o + '"');
        const l = x(t);
        let _ = null;
        return (
          (_ =
            l.country && i && i != l.country
              ? n.createElement(
                  W.he,
                  {
                    className: Q.Tooltip,
                    toolTipContent: (0, m.we)(
                      "#accountpreferences_authorized_devices_suspicous_tooltip",
                    ),
                    direction: "top",
                  },
                  n.createElement(
                    "div",
                    { className: Q.LocationSuspicious },
                    l.location,
                    n.createElement(C.$$j, null),
                  ),
                )
              : n.createElement(
                  "div",
                  { className: Q.LocationNotSuspicious },
                  l.location,
                )),
          n.createElement(
            "div",
            {
              className: (0, f.A)(Q.DeviceContainer, a && Q.ActiveDevice),
              key: "id_" + t.token_id,
              onClick: () => c(!s),
            },
            n.createElement(Y, { device: t }),
            n.createElement(
              "div",
              { className: Q.DeviceContent },
              n.createElement(
                "div",
                { className: Q.DeviceHeaderRow },
                n.createElement(
                  "div",
                  { className: Q.DeviceNameContainer },
                  n.createElement(
                    "div",
                    { className: Q.DeviceName },
                    n.createElement(Z, { device: t }),
                    o,
                  ),
                  r &&
                    n.createElement(
                      "div",
                      { className: Q.ThisDevice },
                      (0, m.we)(
                        "#accountpreferences_authorized_devices_this_device",
                      ),
                    ),
                ),
                n.createElement(
                  "div",
                  { className: Q.DetailsToggleContainer },
                  _,
                  n.createElement(
                    "div",
                    { className: Q.DetailsToggle },
                    n.createElement(
                      p.wl,
                      {
                        className: (0, f.A)({
                          [Q.DetailsToggle]: !0,
                          [Q.Selected]: s,
                        }),
                      },
                      n.createElement(C.b8_, { direction: "down" }),
                    ),
                  ),
                ),
              ),
              !a && n.createElement(V, { device: t }),
              s && n.createElement(O, { device: t }),
            ),
          )
        );
      }
      function V(e) {
        const { device: t } = e,
          a =
            t.first_seen?.time &&
            t.first_seen.time + 2 * K.Kp.PerWeek > Date.now() / 1e3;
        return n.createElement(
          "div",
          { className: Q.LastSeenRow },
          !!t.last_seen?.time &&
            n.createElement(
              "div",
              null,
              n.createElement(
                "span",
                { className: Q.LastActive },
                (0, m.we)(
                  "#accountpreferences_authorized_devices_last_seen_title",
                ),
              ),
              (0, H.Nm)(t.last_seen.time),
            ),
          a &&
            n.createElement(
              "div",
              { className: Q.NewDevice },
              (0, m.we)("#accountpreferences_authorized_devices_new_device"),
            ),
        );
      }
      function O(e) {
        const { device: t } = e;
        return n.createElement(
          "div",
          { className: Q.AuthorizedDeviceDetails },
          (0, m.we)(
            (function (e, t) {
              if (2 == e) return "#authorized_devices_default_qr";
              switch (t) {
                case 2:
                  return "#authorized_devices_emailcode_password";
                case 3:
                  return "#authorized_devices_devicecode_password";
                case 4:
                case 5:
                  return "#authorized_devices_mobileconf_password";
                case 6:
                  return "#authorized_devices_machinetoken_password";
                default:
                  return "#authorized_devices_default_password";
              }
            })(t.authentication_type, t.auth_type),
            (0, m.TW)(t.first_seen.time) + " @ " + (0, H.KC)(t.first_seen.time),
          ),
        );
      }
      function Y(e) {
        const { device: t } = e;
        if (2 == t.platform_type)
          return n.createElement(C.FH7, { className: Q.DeviceLogo });
        if (
          1 == t.platform_type &&
          t.gaming_device_type === F.zm.k_EGamingDeviceType_SteamDeck
        )
          return n.createElement(C.oEi, { className: Q.DeviceLogo });
        switch (t.os_platform) {
          case U.k_EPlatformTypeWin32:
          case U.k_EPlatformTypeWin64:
            return n.createElement(C.TV, { className: Q.DeviceLogo });
          case U.k_EPlatformTypeAndroid32:
          case U.k_EPlatformTypeAndroid64:
          case U.k_EPlatformTypeLinux32:
          case U.k_EPlatformTypeLinux64:
          case U.k_EPlatformTypeIOS32:
          case U.k_EPlatformTypeIOS64:
          case U.k_EPlatformTypeOSX:
            return n.createElement(z.rfv, { className: Q.DeviceLogo });
          default:
            return null;
        }
      }
      function x(e) {
        const t = e.last_seen ?? e.first_seen;
        return t && t.city && t.country
          ? { location: t.city + ", " + t.country, country: t.country }
          : {
              location: (0, m.we)(
                "#accountpreferences_authorized_devices_loc_unknown",
              ),
              country: "",
            };
      }
      function Z(e) {
        const { device: t } = e;
        switch (t.platform_type) {
          case 3:
            return (0, m.we)(
              "#accountpreferences_authorized_devices_type_mobile",
            );
          case 1:
            return t.gaming_device_type === F.zm.k_EGamingDeviceType_SteamDeck
              ? (0, m.we)(
                  "#accountpreferences_authorized_devices_type_steamdeck",
                )
              : (0, m.we)(
                  "#accountpreferences_authorized_devices_type_desktop",
                );
          case 2:
            return (0, m.we)(
              "#accountpreferences_authorized_devices_type_browser",
            );
          default:
            return (0, m.we)(
              "#accountpreferences_authorized_devices_type_unknown",
            );
        }
      }
      function q(e) {
        const { closeModal: t } = e;
        return n.createElement(
          M.x_,
          { onEscKeypress: t },
          n.createElement(
            p.UC,
            null,
            n.createElement(
              p.Y9,
              null,
              (0, m.we)("#authorized_devices_deauthorize_title"),
            ),
            n.createElement(
              p.nB,
              null,
              n.createElement(
                p.a3,
                null,
                (0, m.we)("#authorized_devices_deauthorize_msg"),
              ),
              n.createElement(
                p.wi,
                null,
                n.createElement(p.CB, {
                  strOKText: (0, m.we)(
                    "#authorized_devices_deauthorize_proceed",
                  ),
                  onOK: async () => {
                    const e = new FormData();
                    e.set("action", "deauthorize"),
                      e.set("sessionid", c.TS.SESSIONID),
                      await l().post(
                        c.TS.STORE_BASE_URL + "twofactor/manage_action",
                        e,
                      );
                    const t = document.createElement("form");
                    (t.method = "POST"),
                      (t.action = c.TS.STORE_BASE_URL + "logout");
                    const a = document.createElement("input");
                    (a.type = "hidden"),
                      (a.name = "sessionid"),
                      (a.value = c.TS.SESSIONID),
                      t.appendChild(a),
                      document.body.appendChild(t),
                      t.submit();
                  },
                  onCancel: t,
                }),
              ),
            ),
          ),
        );
      }
      var $ = a(86227),
        ee = a.n($),
        te = a(56545),
        ae = a(75487),
        ne = a(31380),
        re = a(23809);
      const ie = "PlaytestInvites";
      var se = a(1035),
        ce = a(41471),
        oe = a(17720),
        le = a(55263),
        me = a(44165),
        _e = a(51272),
        ue = a(84811),
        pe = a(22797),
        de = a(40094);
      function fe(e) {
        const t = (0, h.A)(),
          a = (function () {
            const e = (0, re.KV)();
            return (0, ne.useQuery)([ie], async () => {
              const t = te.w.Init(ae.rX),
                a = await ae.BX.GetInvites(e, t);
              if (1 != a.GetEResult())
                throw new Error(
                  `Error from usePlaytestInvite: ${a.GetEResult()} ${a.GetErrorMessage()}`,
                );
              return a.Body()?.toObject().invites ?? [];
            });
          })();
        let r = [];
        return (
          a.isSuccess &&
            (r = a.data
              .filter((e) => 1 === e.status || 3 === e.status)
              .map((e) =>
                3 === e.status
                  ? n.createElement(Ae, { invite: e, key: e.invite_id })
                  : n.createElement(he, { invite: e, key: e.invite_id }),
              )),
          n.createElement(
            g.u,
            { navID: "StorePlaytestInvites", NavigationManager: t },
            n.createElement(
              "div",
              { className: ee().PreferencesHeader },
              n.createElement(
                "div",
                {
                  className: (0, f.A)(
                    ee().AccountHeader,
                    "account_header_line noicon",
                  ),
                },
                (0, m.we)("#PlaytestInvites_Title"),
              ),
            ),
            n.createElement(
              "div",
              { className: ee().PlaytestInvites },
              a.isLoading || r.length > 0
                ? r
                : (0, m.we)("#PlaytestInvites_NoInvites"),
            ),
          )
        );
      }
      function Ae(e) {
        const { invite: t } = e,
          a = Pe(t.appid, t.app_name),
          r = t.appid,
          i = n.useCallback(
            (e) => {
              (0, _e.EP)((0, L.uX)(e), `steam://open/games/details/${r}`);
            },
            [r],
          );
        return n.createElement(
          "div",
          { className: ee().PlaytestInvite },
          n.createElement(
            "div",
            { className: ee().InviteInfo },
            n.createElement(
              "span",
              null,
              (0, m.we)("#PlaytestInvites_Welcome", a),
            ),
          ),
          !c.TS.IN_MOBILE_WEBVIEW &&
            n.createElement(
              "div",
              { className: ee().StatusCtn },
              n.createElement(
                A.Z,
                { className: ee().Buttons },
                n.createElement(
                  p.jn,
                  { className: ee().WideButton, noFocusRing: !1, onClick: i },
                  (0, m.we)("#PlaytestInvites_ViewLibrary"),
                ),
              ),
            ),
        );
      }
      function he(e) {
        const { invite: t } = e,
          a = (0, me.f1)(),
          r = (function (e) {
            const t = (0, re.KV)(),
              a = (0, ne.useQueryClient)();
            return (0, ne.useMutation)({
              mutationFn: async (a) => {
                const n = te.w.Init(ae.q);
                n.Body().add_invite_ids(e),
                  n.Body().set_status(a.bAccept ? 3 : 2);
                const r = await ae.BX.UpdateInvites(t, n);
                if (1 != r.GetEResult())
                  throw {
                    result: r.GetEResult(),
                    message: `Error from UpdatePlaytestInvite: ${r.GetErrorMessage()} ( ${r.GetEResult()} )`,
                  };
              },
              onSuccess: (t, n) => {
                a.setQueryData([ie], (t) =>
                  t.map(
                    (t) => (
                      t.invite_id === e && (t.status = n.bAccept ? 3 : 2), t
                    ),
                  ),
                );
              },
              onError: () => {
                a.invalidateQueries(ie);
              },
            });
          })(t.invite_id),
          i = n.useCallback(
            (e) => {
              r.mutate({ bAccept: e });
            },
            [r],
          ),
          s = new oe.b(t.steamid_inviter);
        return n.createElement(
          ue.tH,
          null,
          n.createElement(
            A.Z,
            {
              className: ee().PlaytestInvite,
              navEntryPreferPosition: de.iU.MAINTAIN_X,
            },
            n.createElement(
              "div",
              { className: ee().InviteInfo },
              n.createElement(ge, {
                steamIDInviter: s,
                nAppID: t.appid,
                strAppNameBackup: t.app_name,
              }),
              n.createElement(
                "div",
                { className: ee().TimeInvited },
                (0, m.Nm)(t.time_created ?? a),
              ),
            ),
            n.createElement(
              "div",
              { className: ee().StatusCtn },
              r.isLoading
                ? n.createElement(pe.t, {
                    size: "medium",
                    position: "center",
                    msDelayAppear: 250,
                  })
                : n.createElement(
                    "div",
                    { className: ee().Buttons },
                    n.createElement(
                      p.jn,
                      { noFocusRing: !1, onClick: () => i(!0) },
                      (0, m.we)("#PlaytestInvites_Accept"),
                    ),
                    n.createElement(
                      p.$n,
                      { noFocusRing: !1, onClick: () => i(!1) },
                      (0, m.we)("#PlaytestInvites_Reject"),
                    ),
                  ),
            ),
          ),
        );
      }
      function ge(e) {
        const { steamIDInviter: t, nAppID: a, strAppNameBackup: r } = e,
          i = Pe(a, r);
        return t.BIsValid()
          ? n.createElement(ve, { steamIDInviter: t, strAppName: i })
          : n.createElement(Ee, { strAppName: i });
      }
      function ve(e) {
        const { steamIDInviter: t, strAppName: a } = e,
          r = (0, ce.js)(t.ConvertTo64BitString()),
          i = r?.data;
        return r.isSuccess
          ? n.createElement(
              "div",
              { className: ee().AvatarAndPersona },
              n.createElement(se.i8, {
                persona: i,
                size: "Small",
                statusPosition: "right",
              }),
              n.createElement(
                "div",
                null,
                (0, m.PP)(
                  "#PlaytestInvites_InviteDescription_FromUser",
                  n.createElement(
                    v.Ii,
                    { href: i.GetCommunityProfileURL() },
                    i?.m_strPlayerName,
                  ),
                  a,
                ),
              ),
            )
          : n.createElement(Ee, { strAppName: a });
      }
      function Ee(e) {
        const { strAppName: t } = e;
        return n.createElement(
          "div",
          null,
          (0, m.we)("#PlaytestInvites_InviteDescription_FromApp", t),
        );
      }
      function Pe(e, t) {
        const [a, n] = (0, le.t7)(e, { include_basic_info: !0 });
        return a && 3 == n ? a.GetName() : t;
      }
      const ye = n.lazy(() =>
          Promise.all([
            a.e(8970),
            a.e(2298),
            a.e(576),
            a.e(4717),
            a.e(7436),
            a.e(582),
            a.e(4796),
            a.e(6049),
            a.e(7576),
            a.e(7368),
            a.e(8567),
            a.e(7072),
          ]).then(a.bind(a, 42048)),
        ),
        Ne = {
          CookieSettings: () => "/cookiepreferences",
          NotificationSettings: () => "/notificationsettings",
          ...{ FamilyManagement: () => "/familymanagement" },
          AuthorizedDevices: () => "/authorizeddevices",
          PlaytestInvites: () => "/playtestinvites",
        },
        Se = (e) => {
          const t = e.match.url,
            a = Ne;
          return n.createElement(
            r.dO,
            null,
            n.createElement(r.qh, {
              path: `${t}${a.CookieSettings()}`,
              render: () =>
                n.createElement(R.X, {
                  config: {
                    "cookie-preferences": () => n.createElement(P, null),
                  },
                }),
            }),
            n.createElement(r.qh, {
              path: `${t}${a.NotificationSettings()}`,
              render: () =>
                n.createElement(R.X, {
                  config: {
                    "notification-settings": () => n.createElement(I, null),
                  },
                }),
            }),
            n.createElement(r.qh, {
              path: `${t}${a.FamilyManagement()}`,
              render: () =>
                n.createElement(R.X, {
                  config: {
                    "family-management": () => n.createElement(ye, null),
                  },
                }),
            }),
            n.createElement(r.qh, {
              path: `${t}${a.AuthorizedDevices()}`,
              render: () =>
                n.createElement(R.X, {
                  config: {
                    "authorized-devices": () => n.createElement(X, null),
                  },
                }),
            }),
            n.createElement(r.qh, {
              path: `${t}${a.PlaytestInvites()}`,
              render: () =>
                n.createElement(R.X, {
                  config: {
                    "playtest-invites": () => n.createElement(fe, null),
                  },
                }),
            }),
          );
        };
    },
  },
]);

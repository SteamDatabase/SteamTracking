/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [36814],
    {
      59432: (W, E, s) => {
        "use strict";
        s.d(E, { Gw: () => L, Lk: () => h, ai: () => S, mm: () => u });
        var e = s(14947);
        const m = e.sH.box(void 0);
        function u() {
          return m.get();
        }
        function S(F) {
          (0, e.h5)(() => m.set(F));
        }
        function L() {
          const F = m.get();
          return F || Math.floor(Date.now() / 1e3);
        }
        function h() {
          const F = m.get();
          return F ? new Date(F * 1e3) : new Date();
        }
      },
      24525: (W, E, s) => {
        "use strict";
        s.d(E, { $e: () => m, B7: () => S, Pe: () => De, Pv: () => u });
        const e = 0,
          m = 1,
          u = 2,
          S = 4,
          L = 8,
          h = 16,
          F = 32,
          _ = 64,
          a = 128,
          w = 256,
          c = 512,
          f = 1024,
          j = 2048,
          x = 4096,
          M = 8192,
          n = 16384,
          le = 32768,
          Ne = 65536,
          De = 1073741824,
          Se = null;
      },
      67529: (W, E, s) => {
        "use strict";
        s.d(E, { IU: () => a, by: () => w, sc: () => L });
        var e = s(3166),
          m = s(35413),
          u = s(71742),
          S = s(24525);
        const L = 0,
          h = "061818254b2c99ac49e6626adb128ed1282a392f",
          F = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          a = 120;
        class w {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(j) {
            this.m_unAppID = j;
          }
          get appid() {
            return this.m_unAppID;
          }
          get is_initialized() {
            return this.m_bInitialized;
          }
          get is_valid() {
            return this.m_bInitialized && !!this.m_strName;
          }
          get name() {
            return this.m_strName;
          }
          get icon_url_no_default() {
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, h);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, h);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == S.B7 || this.apptype == S.Pv;
          }
          BuildAppURL(j, x) {
            return j
              ? e.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  j +
                  ".jpg"
              : (0, m.t)(x);
          }
          DeserializeFromMessage(j) {
            (this.m_bInitialized = !0),
              (this.m_strName = j.name()),
              (this.m_strIconURL = j.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = j.app_type());
          }
          DeserializeFromAppOverview(j) {
            j.icon_hash() && j.app_type() != S.Pe
              ? ((this.m_bInitialized = !0),
                (this.m_strName = j.display_name()),
                (this.m_strIconURL = j.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = j.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(j) {
            try {
              (this.m_strName = j.strName),
                (this.m_strIconURL = j.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(j.strUpdatedFromServer)),
                (this.m_eAppType = j.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, u.wT)(
                this.m_bInitialized,
                "Attempting to serialize an uninitialized AppInfo object for caching!",
              ),
              this.m_bInitialized
                ? {
                    strName: this.m_strName,
                    strIconURL: this.m_strIconURL,
                    strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                    eAppType: this.m_eAppType,
                  }
                : null
            );
          }
        }
        class c {}
      },
      35413: (W, E, s) => {
        "use strict";
        s.d(E, { d: () => m, t: () => u });
        var e = s(3166);
        const m = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function u(S, L) {
          let h = ".jpg";
          (!S || S === "0000000000000000000000000000000000000000") && (S = m),
            S.length == 44 && ((h = S.substr(-4)), (S = S.substr(0, 40)));
          let F = e.TS.AVATAR_BASE_URL;
          return (
            F ||
              ((F = e.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (F += S.substr(0, 2) + "/")),
            (F += S),
            L && L != "small" && (F += "_" + L),
            (F += h),
            F
          );
        }
      },
      46943: (W, E, s) => {
        "use strict";
        s.d(E, { Ul: () => Ne, xz: () => ee, $Y: () => ue, i8: () => Se });
        var e = s(7850),
          m = s(90626),
          u = s(75844),
          S = s(5858),
          L = s(36707),
          h = s(3166),
          F = s(13465);
        const _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          a =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          w =
            s.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var c = s(43047),
          f = s.n(c),
          j = s(71742),
          x = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          n = (R, I, B, v) => {
            for (
              var P = v > 1 ? void 0 : v ? M(I, B) : I, O = R.length - 1, U;
              O >= 0;
              O--
            )
              (U = R[O]) && (P = (v ? U(I, B, P) : U(P)) || P);
            return v && P && x(I, B, P), P;
          };
        function le(R) {
          switch (R) {
            case "X-Small":
            case "Small":
              return _;
            case "Medium":
            case "MediumLarge":
              return a;
            case "Large":
            case "X-Large":
            case "FillArea":
              return w;
            default:
              return (0, j.z_)(R, `Unhandled size ${R}`), a;
          }
        }
        const Ne = m.memo(function (I) {
            const {
                strAvatarURL: B,
                size: v = "Medium",
                className: P,
                statusStyle: O,
                statusPosition: U,
                children: Y,
                ...Z
              } = I,
              ae = m.useMemo(() => {
                const V = [];
                return B && V.push(B), V.push(le(v)), V;
              }, [B, v]);
            return (0, e.jsxs)("div", {
              className: (0, L.A)(
                f().avatarHolder,
                "avatarHolder",
                "no-drag",
                v,
                P,
              ),
              ...Z,
              children: [
                (0, e.jsx)("div", {
                  className: (0, L.A)(f().avatarStatus, "avatarStatus", U),
                  style: O,
                }),
                (0, e.jsx)(F.c, {
                  className: (0, L.A)(f().avatar, "avatar"),
                  rgSources: ae,
                  draggable: !1,
                }),
                Y,
              ],
            });
          }),
          De = m.memo(function (I) {
            const {
              strAvatarURL: B,
              size: v = "Medium",
              className: P,
              statusStyle: O,
              statusPosition: U,
              children: Y,
              ...Z
            } = I;
            return (0, e.jsxs)("div", {
              className: (0, L.A)(
                f().avatarHolder,
                "avatarHolder",
                "no-drag",
                v,
                P,
              ),
              ...Z,
              children: [
                (0, e.jsx)("div", {
                  className: (0, L.A)(f().avatarStatus, "avatarStatus", U),
                  style: O,
                }),
                (0, e.jsx)("img", {
                  className: (0, L.A)(f().avatar, "avatar"),
                  src: B,
                  draggable: !1,
                }),
                Y,
              ],
            });
          });
        let Se = class extends m.Component {
          render() {
            const {
              persona: R,
              size: I = "Medium",
              animatedAvatar: B,
              className: v,
              strBackupAvatarURL: P,
              ...O
            } = this.props;
            let U = "";
            return (
              B && B.image_small && B.image_small.length != 0
                ? (U = h.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + B.image_small)
                : R
                  ? ((U = R.avatar_url_medium),
                    I == "Small" || I == "X-Small"
                      ? (U = R.avatar_url)
                      : (I == "Large" || I == "X-Large" || I == "FillArea") &&
                        (U = R.avatar_url_full))
                  : P && (U = P),
              (0, e.jsx)(Ne, {
                strAvatarURL: U,
                size: I,
                className: (0, L.A)((0, S.rO)(R), v),
                ...O,
              })
            );
          }
        };
        Se = n([u.PA], Se);
        const ue = (0, u.PA)((R) => {
          const {
            profileItem: I,
            className: B,
            bDisableAnimation: v,
            ...P
          } = R;
          if (!I || !I.image_small || I.image_small.length == 0) return null;
          let O = v ? I.image_large : I.image_small;
          return (
            O || (O = I.image_small),
            O.startsWith("https://") ||
              (O = h.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + O),
            (0, e.jsx)("div", {
              className: (0, L.A)(f().avatarFrame, B, "avatarFrame"),
              ...P,
              children: (0, e.jsx)("img", {
                className: f().avatarFrameImg,
                src: O,
              }),
            })
          );
        });
        let ee = class extends m.Component {
          m_timer;
          constructor(R) {
            super(R),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let R = 0;
            switch (this.props.loopDuration) {
              case "Short":
                R = 2500;
                break;
              case "Medium":
                R = 5e3;
                break;
              case "Long":
                R = 1e4;
                break;
            }
            R != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                R,
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
          componentDidUpdate(R) {
            this.props.loopDuration != R.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != R.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: R,
              animatedAvatar: I,
              avatarFrame: B,
              children: v,
              style: P,
              bLimitProfileFrameAnimationTime: O,
              bParentHovered: U,
              ...Y
            } = this.props;
            Y.onClick && (P = { ...P, cursor: "pointer" });
            const Z = this.state.bAnimate ? (I ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(Se, {
                animatedAvatar: Z,
                ...Y,
                children: [
                  v,
                  (0, e.jsx)(ue, {
                    profileItem: B ?? null,
                    bDisableAnimation: O && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        ee = n([u.PA], ee);
      },
      25509: (W, E, s) => {
        "use strict";
        s.d(E, { k: () => F });
        var e = s(14947),
          m = s(98609),
          u = Object.defineProperty,
          S = Object.getOwnPropertyDescriptor,
          L = (_, a, w, c) => {
            for (
              var f = c > 1 ? void 0 : c ? S(a, w) : a, j = _.length - 1, x;
              j >= 0;
              j--
            )
              (x = _[j]) && (f = (c ? x(a, w, f) : x(f)) || f);
            return c && f && u(a, w, f), f;
          };
        class h {
          m_ItemDefinition = null;
          m_ItemKV = null;
          constructor(a, w) {
            (0, e.Gn)(this), this.LoadItemDefinition(a, w);
          }
          LoadItemDefinition(a, w) {
            a
              ? (this.m_ItemDefinition = {
                  item_type: a.item_type,
                  item_class: a.item_class,
                  item_description: a.item_description,
                  editor_accountid: a.editor_accountid,
                  deleted: a.deleted,
                  active: a.active,
                  appid: a.appid,
                  item_image_composed: a.item_image_composed,
                  item_image_large: a.item_image_large,
                  item_image_small: a.item_image_small,
                  item_key_values: a.item_key_values,
                  item_movie_mp4: a.item_movie_mp4,
                  item_movie_mp4_small: a.item_movie_mp4_small,
                  item_internal_name: a.item_name,
                  item_series: a.item_series,
                  item_movie_webm: a.item_movie_webm,
                  item_movie_webm_small: a.item_movie_webm_small,
                  item_image_composed_foil: a.item_image_composed_foil,
                  item_last_changed: a.item_last_changed,
                  broadcast_channel_id: a.broadcast_channel_id,
                })
              : (this.m_ItemDefinition = w),
              (this.m_ItemKV = JSON.parse(
                this.m_ItemDefinition.item_key_values,
              ));
          }
          get AppID() {
            return this.m_ItemDefinition.appid;
          }
          get BIsActive() {
            return this.m_ItemDefinition.active;
          }
          get ItemID() {
            return this.m_ItemDefinition.item_type;
          }
          get BIsDeleted() {
            return this.m_ItemDefinition.deleted;
          }
          get ItemClass() {
            return this.m_ItemDefinition.item_class;
          }
          get CommunityItemDef() {
            return this.m_ItemDefinition;
          }
        }
        L([e.sH], h.prototype, "m_ItemDefinition", 2),
          L([e.sH], h.prototype, "m_ItemKV", 2);
        function F(_, a) {
          return `${m.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${_}/${a}`;
        }
      },
      7582: (W, E, s) => {
        "use strict";
        s.d(E, { HD: () => _, f1: () => x, s4: () => M, sB: () => j });
        var e = s(19367),
          m = s.n(e),
          u = s(90626),
          S = s(59432),
          L = s(47689),
          h = s(77291);
        class F {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, S.mm)();
          }
          set nOverrideDateNow(le) {
            (0, S.ai)(le);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, S.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, S.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, S.mm)();
          }
          ParseDevOverrides(le) {
            if (!le || le.length == 0) return;
            new URLSearchParams(le[0] == "?" ? le.substring(1) : le).has("t");
          }
        }
        const _ = new F();
        (0, h.V)("g_EventCalendarDevFeatures", _);
        function a(n = 1) {
          const [le, Ne] = React.useState(() => f()),
            De = useCancelTokenSource("useTimeNowWithOverride"),
            Se = React.useCallback(() => {
              De.token.reason || Ne(f());
            }, []);
          return (
            React.useEffect(() => {
              const ue = 1e3 * n,
                ee = Date.now() % ue,
                R = ue - ee,
                I = window.setTimeout(Se, R);
              return () => {
                window.clearTimeout(I);
              };
            }, [le, n, Se]),
            le
          );
        }
        const c = Math.floor(new Date().getTime() / 1e3);
        function f() {
          const n = Math.floor(Date.now() / 1e3);
          return _.nOverrideDateNow ? _.nOverrideDateNow + (n - c) : n;
        }
        function j() {
          return _.nOverrideDateNow ?? c;
        }
        function x() {
          return u.useMemo(() => j(), []);
        }
        function M() {
          return u.useMemo(() => _.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      76867: (W, E, s) => {
        "use strict";
        s.d(E, { M: () => S });
        var e = s(7850),
          m = s(90626),
          u = s(90740);
        function S(L) {
          const { children: h, ...F } = L,
            _ = m.useRef(null);
          return (0, e.jsx)(u.A, { nodeRef: _, ...F, children: L.children(_) });
        }
      },
      179: (W, E, s) => {
        "use strict";
        s.d(E, {
          Bm: () => S,
          QD: () => h,
          f3: () => u,
          iV: () => _,
          ip: () => F,
          le: () => L,
        });
        var e = s(90626),
          m = s(92757);
        function u(a, w) {
          let c;
          if (typeof a == "string") c = a;
          else if ("location" in a) c = a.location.search;
          else if ("search" in a) c = a.search;
          else return;
          const f = new URLSearchParams(c.substring(1));
          if (f.has(w)) {
            const j = f.getAll(w);
            return j[j.length - 1];
          }
        }
        function S(a, w, c, f = !1) {
          const j = new URLSearchParams(a.location.search.substring(1));
          if (c != null && c != null) {
            if (j.get(w) == c) return;
            j.set(w, c);
          } else {
            if (!j.has(w)) return;
            j.delete(w);
          }
          f
            ? a.replace(`?${j.toString()}`, { ...a.location.state })
            : a.push(`?${j.toString()}`);
        }
        function L(a, w, c) {
          S(a, w, c, !0);
        }
        function h(a, w) {
          const c = (0, m.W6)(),
            f = (0, m.zy)(),
            j = (0, e.useMemo)(() => {
              const M = u(f.search, a);
              return M != null && M != null
                ? w != null && w != null
                  ? typeof w == "boolean"
                    ? w.constructor(M !== "false")
                    : w.constructor(M)
                  : M
                : w;
            }, [f.search, a, w]),
            x = (0, e.useCallback)(
              (M, n = !1) => {
                S(c, a, M != null && M != null ? String(M) : null, n);
              },
              [c, a],
            );
          return [j, x];
        }
        function F(a, w, c = !1) {
          const f = new URLSearchParams(a.location.search.substring(1));
          for (const j in w)
            if (w.hasOwnProperty(j)) {
              const x = w[j];
              f.delete(j), x != null && x != null && f.append(j, x);
            }
          c
            ? a.replace(`?${f.toString()}`, { ...a.location.state })
            : a.push(`?${f.toString()}`);
        }
        function _(a, w) {
          F(a, w, !0);
        }
      },
      86390: (W, E, s) => {
        "use strict";
        s.d(E, { Cg: () => j, pZ: () => M, vg: () => x });
        var e = s(7850),
          m = s(90626),
          u = s(88003),
          S = s(18210),
          L = s(3166),
          h = s(87242),
          F = s(74974),
          _ = s(6740),
          a = s(62179),
          w = s(3685),
          c = s(96538);
        function f(le) {
          return (0, e.jsx)(u.x_, {
            onEscKeypress: le.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(n, {
              redirectURL: le.redirectURL,
              guestOption: le.guestOption,
            }),
          });
        }
        function j(le) {
          const { redirectURL: Ne = window.location.href } = le;
          return (0, e.jsx)(c.EN, {
            active: !0,
            children: (0, e.jsx)(f, { redirectURL: Ne }),
          });
        }
        function x() {
          (0, u.pg)(
            (0, e.jsx)(f, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, S.we)("#Login_SignInTitle") },
          );
        }
        function M(le, Ne) {
          (0, u.pg)(
            (0, e.jsx)(f, {
              ownerWin: window,
              redirectURL: le,
              guestOption: Ne,
            }),
            window,
            { strTitle: (0, S.we)("#Login_SignInTitle") },
          );
        }
        function n(le) {
          const { redirectURL: Ne, guestOption: De } = le,
            [Se] = (0, m.useState)(
              new a.x(
                new w.D(L.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [ue, ee] = (0, m.useState)(!1),
            R = (I) => {
              I == h.wI.k_PrimaryDomainFail
                ? ee(!0)
                : window.location.assign(Ne);
            };
          return (0, e.jsx)("div", {
            children: ue
              ? (0, e.jsx)(F.Fn, {})
              : (0, e.jsx)(F.YN, {
                  autoFocus: !0,
                  transport: Se,
                  platform: _.SS.tS,
                  onComplete: R,
                  redirectUrl: Ne,
                  theme: "modal",
                  children: De && (0, e.jsx)(F.Mk, { redirectURL: Ne }),
                }),
          });
        }
      },
      4370: (W, E, s) => {
        "use strict";
        s.d(E, { A: () => h, X: () => F });
        var e = s(7850),
          m = s(17083),
          u = s(24660);
        function S(_) {
          return !!(_.metaKey || _.altKey || _.ctrlKey || _.shiftKey);
        }
        function L(_) {
          const { navigate: a, onClick: w, ...c } = _,
            { target: f } = c,
            j = (x) => {
              try {
                w && w(x);
              } catch (M) {
                throw (x.preventDefault(), M);
              }
              !x.defaultPrevented &&
                x.button === 0 &&
                (!f || f === "_self") &&
                !S(x) &&
                (x.preventDefault(), a());
            };
          return (0, e.jsx)(u.Ii, { ...c, onClick: j });
        }
        function h(_) {
          return (0, e.jsx)(m.k2, { component: L, ..._ });
        }
        function F(_) {
          return (0, e.jsx)(m.N_, { component: L, ..._ });
        }
      },
      85705: (W, E, s) => {
        "use strict";
        s.d(E, { k: () => L });
        var e = s(7850),
          m = s(36707),
          u = s(37999),
          S = s.n(u);
        function L(h) {
          const { size: F, color: _, trackColor: a } = h,
            w = { borderColor: a, borderLeftColor: _ };
          if (typeof F == "number") {
            const c = `${F}px`;
            (w.width = c),
              (w.height = c),
              (w.minHeight = c),
              (w.minWidth = c),
              (w.borderWidth = `${F / 10}px`);
          }
          return (0, e.jsx)("div", {
            className: (0, m.A)(
              u.Loading,
              F == "small" && u.Small,
              (F == "medium" || !F) && u.Medium,
              F == "large" && u.Large,
            ),
            style: w,
          });
        }
      },
      51619: (W, E, s) => {
        "use strict";
        s.d(E, { N: () => h });
        var e = s(7850),
          m = s(36707),
          u = s(56425),
          S = s.n(u),
          L = s(24660);
        const h = (F) => {
          const { className: _, ...a } = F;
          return (0, e.jsx)(L.fu, {
            className: (0, m.A)(_, u.UnstyledButton),
            ...a,
          });
        };
      },
      96538: (W, E, s) => {
        "use strict";
        s.d(E, {
          mt: () => _,
          o0: () => M.o0,
          eV: () => n.eV,
          KG: () => M.KG,
          Ee: () => M.Ee,
          x_: () => L.x_,
          of: () => c,
          pY: () => M.pY,
          EN: () => S.E,
        });
        var e = s(7850),
          m = s(90626),
          u = s(16412),
          S = s(69168),
          L = s(50731),
          h = s(15568);
        function F(Ne) {
          const { labelledBy: De } = Ne || {},
            [Se, ue] = m.useState(void 0),
            ee = m.useMemo(() => ({ setHeaderId: ue }), []);
          return { headerId: De || Se, context: ee };
        }
        function _(Ne) {
          const {
              active: De,
              onDismiss: Se,
              className: ue,
              modalClassName: ee,
              bGamepadUIScrollWithin: R,
              children: I,
              ...B
            } = Ne,
            { headerId: v, context: P } = F({
              labelledBy: Ne["aria-labelledby"],
            });
          return (0, e.jsx)(u.t6.Provider, {
            value: P,
            children: (0, e.jsx)(S.E, {
              active: De,
              children: (0, e.jsx)(L.x_, {
                onEscKeypress: Se,
                className: ee,
                bGamepadUIScrollWithin: R,
                children: (0, e.jsx)(u.UC, {
                  role: "dialog",
                  "aria-labelledby": v,
                  className: ue,
                  ...B,
                  children: I,
                }),
              }),
            }),
          });
        }
        function a(Ne) {
          const {
              onDismiss: De,
              className: Se,
              modalClassName: ue,
              bGamepadUIScrollWithin: ee,
              children: R,
              ...I
            } = Ne,
            { headerId: B, context: v } = F();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: v,
            children: jsx(PopupWindow, {
              ...I,
              onDismiss: De,
              children: jsx(ModalPosition, {
                onEscKeypress: De,
                className: ue,
                bGamepadUIScrollWithin: ee,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": B,
                  "aria-label": I.strTitle,
                  className: Se,
                  children: R,
                }),
              }),
            }),
          });
        }
        const w = (Ne) => a({ modal: !0, ...Ne });
        function c(Ne) {
          const { className: De, children: Se } = Ne;
          return (0, e.jsx)(S.E, {
            active: !0,
            children: (0, e.jsx)("div", { className: De, children: Se }),
          });
        }
        var f = s(30343);
        function j(Ne) {
          const De = React.useMemo(() => x(), []);
          return jsx(DialogOverlay, { ...Ne, DialogWrapper: De });
        }
        function x() {
          return function (De) {
            const { className: Se, active: ue, children: ee, modalKey: R } = De,
              I = React.useRef(void 0);
            return (
              useActivateNavTree(I, ue, !0),
              jsx(FocusNavigationRoot, {
                className: Se,
                navTreeRef: I,
                modal: !0,
                enabled: ue,
                navID: `ModalDialogOverlay_${R}`,
                children: ee,
              })
            );
          };
        }
        var M = s(1880),
          n = s(90506),
          le = s(47515);
      },
      15568: (W, E, s) => {
        "use strict";
        s.d(E, { wA: () => Ne });
        var e = s(7850),
          m = s(1418),
          u = s(2259),
          S = s(90626),
          L = s(72739),
          h = s(71568),
          F = s(9705),
          _ = s(34360),
          a = s(31032),
          w = s(69168),
          c = s(83203),
          f = s(44930),
          j = s(36707),
          x = s(25091);
        function M(R) {
          const { popup: I, className: B, ...v } = R,
            P = (0, x.GD)(I),
            O = S.useRef(null);
          return (
            S.useEffect(() => {
              const U = O.current;
              if (U && (0, f.Fj)(I, "Window.SetResizeGrip")) {
                let Y = 0,
                  Z = 0;
                const ae = U.getBoundingClientRect(),
                  V = U.ownerDocument.defaultView;
                ae &&
                  V &&
                  !P &&
                  ((Y = Math.ceil(V.innerWidth - ae.left)),
                  (Z = Math.ceil(V.innerHeight - ae.top))),
                  I.SteamClient.Window.SetResizeGrip(Y, Z);
              }
              return () => {
                (0, f.Fj)(I, "Window.SetResizeGrip") &&
                  I.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [I, P]),
            P
              ? null
              : (0, e.jsx)("div", {
                  className: (0, j.A)("window_resize_grip", B),
                  ref: O,
                  ...v,
                })
          );
        }
        var n = s(30096),
          le = s(3166);
        const Ne = (R) => De({ modal: !0, ...R });
        function De(R) {
          const I = (0, h.R7)().ownerWindow,
            B = (0, le.Qn)(),
            [v, P] = S.useState(() =>
              B ||
              (R.onlyPopoutIfNeeded === !0 &&
                R.popupHeight < I.innerHeight * 0.9 &&
                R.popupWidth < I.innerWidth * 0.9 &&
                I.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return v === "inline"
            ? (0, e.jsx)(w.E, { active: !0, children: R.children })
            : v === "popout"
              ? (0, e.jsx)(ue, { ...R })
              : null;
        }
        function Se(R) {
          const {
              popup: I,
              children: B,
              bFitToContent: v,
              className: P,
              ...O
            } = R,
            U = S.useCallback(
              (Z) => {
                const ae = Math.ceil(Z.borderBoxSize[0].inlineSize),
                  V = Math.ceil(Z.borderBoxSize[0].blockSize);
                I?.SteamClient.Window.ResizeTo(ae, V, !0);
              },
              [I],
            ),
            Y = (0, u.wY)(U);
          return (0, e.jsx)("div", {
            className: (0, j.A)("PopupFullWindow", v && "FitToContent", P),
            ref: v ? Y : void 0,
            ...O,
            children: B,
          });
        }
        function ue(R) {
          const {
              strName: I,
              strTitle: B,
              popupWidth: v,
              popupHeight: P,
              browserType: O,
              onDismiss: U,
              bFitToContent: Y,
              refPopup: Z,
              children: ae,
              titleBarClassName: V,
              saveDimensionsKey: oe,
            } = R,
            y = (0, h.R7)()?.ownerWindow,
            A = (0, a.yk)(),
            de = { ...(0, F.h3)(oe), onClose: U };
          let Be = 0;
          R.resizable && (Be |= h.Wf.Resizable),
            (R.minWidth || R.minHeight) &&
              (Be |= h.Wf.ApplyBrowserScaleToDimensions),
            R.fullscreen && (Be |= h.Wf.FullScreen);
          const Q = "PopupWindow_" + (I ? `${I}_` : "") + S.useId(),
            { popup: re, element: ye } = (0, F.OJ)(
              Q,
              {
                title: B,
                dimensions: { width: v, height: P },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: O,
                minWidth: R.minWidth,
                minHeight: R.minHeight,
                replace_existing_popup: !0,
                center_on_window: A?.BCenterPopupsOnWindow() ? y : void 0,
                eCreationFlags: Be,
                target_browser: A?.GetBrowserInfo(),
              },
              de,
            );
          if (
            (S.useEffect(
              () => ((0, n.cZ)(Z, re), () => (0, n.cZ)(Z, void 0)),
              [Z, re],
            ),
            S.useEffect(() => {
              re && (re.document.title = B ?? I);
            }, [re, B, I]),
            !ye)
          )
            return null;
          const he = R.modal ?? R.onlyPopoutIfNeeded,
            D = !R.resizable;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              he && (0, e.jsx)(ee, { popup: re }),
              L.createPortal(
                (0, e.jsx)(h.kc, {
                  ownerWindow: re,
                  children: (0, e.jsxs)(m.Y, {
                    children: [
                      (0, e.jsxs)(Se, {
                        popup: re,
                        bFitToContent: Y,
                        onContextMenu: _.aE,
                        children: [
                          (0, e.jsx)(c.c, {
                            className: V,
                            hideMin: D,
                            hideMax: D,
                            popup: re,
                            hideActions: !U,
                          }),
                          (0, e.jsx)(a.EO, {
                            bCenterPopupsOnWindow: A?.BCenterPopupsOnWindow(),
                            browserInfo: A?.GetBrowserInfo(),
                            children: ae,
                          }),
                        ],
                      }),
                      R.resizable && !Y && (0, e.jsx)(M, { popup: re }),
                    ],
                  }),
                }),
                ye,
              ),
            ],
          });
        }
        function ee(R) {
          const { popup: I } = R,
            B = S.useCallback(() => {
              I?.SteamClient.Window.BringToFront();
            }, [I]);
          return (
            S.useEffect(B, [B]),
            (0, e.jsx)(w.E, {
              active: !0,
              children: (0, e.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: B,
              }),
            })
          );
        }
      },
      29998: (W, E, s) => {
        "use strict";
        s.d(E, { S1: () => w, VJ: () => L, hL: () => S });
        var e = s(7850),
          m = s(90626);
        const u = (0, m.createContext)(null);
        function S(c) {
          const { spacing: f, children: j } = c;
          return (0, e.jsx)(u.Provider, { value: _(f), children: j });
        }
        function L(c) {
          const f = h();
          return (0, e.jsx)("div", {
            style: a(f),
            children: (0, e.jsx)(u.Provider, {
              value: null,
              children: c.children,
            }),
          });
        }
        function h() {
          return (0, m.useContext)(u);
        }
        function F(c) {
          return typeof c == "number" ? `${c}px` : c;
        }
        function _(c) {
          return {
            top: F(c.vertical || c.top || "0"),
            bottom: F(c.vertical || c.bottom || "0"),
            left: F(c.horizontal || c.left || "0"),
            right: F(c.horizontal || c.right || "0"),
          };
        }
        function a(c) {
          if (!c) return;
          const { top: f, bottom: j, left: x, right: M } = c,
            n = {};
          return (
            f && (n.marginTop = `-${f}`),
            j && (n.marginBottom = `-${j}`),
            x && (n.marginLeft = `-${x}`),
            M && (n.marginRight = `-${M}`),
            n
          );
        }
        function w() {
          const c = h();
          if (!c) return;
          const f = `${F(c.top)} ${F(c.right)} ${F(c.bottom)} ${F(c.left)}`;
          return { padding: f, scrollPadding: f };
        }
      },
      47689: (W, E, s) => {
        "use strict";
        s.d(E, { m: () => S });
        var e = s(41735),
          m = s.n(e),
          u = s(90626);
        function S(L) {
          const h = u.useRef(m().CancelToken.source());
          return (
            u.useEffect(() => {
              const F = h.current;
              return () => F.cancel(L ? `${L}: unmounting` : "unmounting");
            }, [L]),
            h.current
          );
        }
      },
      27126: (W, E, s) => {
        "use strict";
        s.d(E, { h: () => u });
        var e = s(90626);
        const m = {};
        function u(S) {
          const [L, h] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              let F = !0;
              m[S]
                ? m[S].refCount++
                : (m[S] = { list: window.matchMedia(S), refCount: 1 });
              const _ = m[S].list,
                a = () => {
                  F && h(_.matches);
                };
              return (
                a(),
                _.addEventListener("change", a),
                () => {
                  (F = !1),
                    _.removeEventListener("change", a),
                    m[S].refCount--,
                    m[S].refCount === 0 && delete m[S];
                }
              );
            }, [S]),
            L
          );
        }
      },
      80458: (W, E, s) => {
        "use strict";
        s.d(E, { NW: () => n, O4: () => F, nT: () => L });
        var e = s(7850),
          m = s(90626),
          u = s(65414),
          S = s(13854);
        const L = 8e3,
          h = 200;
        var F = ((y) => (
          (y[(y.Default = 0)] = "Default"),
          (y[(y.Gold = 1)] = "Gold"),
          (y[(y.LNY2020 = 2)] = "LNY2020"),
          y
        ))(F || {});
        function _(y) {
          switch (y) {
            case 1:
              return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
            case 2:
              return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
            default:
              return `hsl(${Math.random() * 360}, 100%, 40%)`;
          }
        }
        function a(y) {
          return y == 2 ? `hue-rotate(${360 + ((0, S.Tg))(-30, 10)}deg)` : "";
        }
        function w(y, A) {
          const me = [];
          if (!y) return me;
          const { width: de, height: Be } = y;
          for (let Q = 0; Q < h; Q++) {
            const re = Math.random(),
              ye = Math.random() * re,
              he = Math.random() * ye,
              D = (Math.random() - 0.5) * 4 * Math.PI * 20,
              Ce = Math.random() + 0.5,
              qe = [
                Math.random() * Be - Be - 20,
                Be + 20 + Math.random() * Be * Ce,
              ],
              ze = de <= 1e3 ? 1 : de / 1e3,
              Fe = Ce * ze * (A == 1 ? 2 : 1),
              He = (Math.random() - 0.5) * de,
              Ze = (Math.random() - 0.5) * de,
              T = [Ze, He + Ze],
              Le = _(A),
              We = a(A);
            me.push({
              rotationCoefficient: D,
              rotationRatioY: ye,
              rotationRatioX: re,
              rotationRatioZ: he,
              yRange: qe,
              xRange: T,
              scale: Fe,
              colorHue: Le,
              filter: We,
            });
          }
          return me;
        }
        function c(y, A, me) {
          const de = me == 0,
            {
              rotationCoefficient: Be,
              rotationRatioY: Q,
              rotationRatioX: re,
              rotationRatioZ: ye,
              yRange: he,
              xRange: D,
              scale: Ce,
              colorHue: qe,
              filter: ze,
            } = y;
          return {
            backgroundColor: qe,
            fill: qe,
            filter: ze,
            flRandom: 0,
            transform: A.interpolate((Fe) => {
              const He = Fe * Be * Q,
                Ze = Fe * Be * re,
                T = Fe * Be * ye,
                Le = Fe * (he[1] - he[0]) + he[0];
              return `translate(${Fe * (D[1] - D[0]) + D[0]}px, ${Le}px) rotateY(${He}rad) rotateX(${Ze}rad) rotateZ(${T}rad) scale(${Ce})`;
            }),
          };
        }
        function f(y, A, me) {
          if (Math.random() > 0.1) return null;
          const {
            rotationCoefficient: de,
            rotationRatioZ: Be,
            yRange: Q,
            xRange: re,
            scale: ye,
            colorHue: he,
            filter: D,
          } = y;
          return {
            backgroundColor: void 0,
            fill: he,
            filter: D,
            flRandom: Math.random(),
            transform: A.interpolate((Ce) => {
              const qe = ((Ce * de) / 4) * Be,
                ze = Ce * (Q[1] - Q[0]) + Q[0];
              return `translate(${Ce * (re[1] - re[0]) + re[0]}px, ${ze}px) rotateZ(${qe}rad) scale(${ye})`;
            }),
          };
        }
        const j = (y, A) => {
            const { anim: me } = (0, u.zh)({
              anim: 1,
              from: { anim: 0 },
              config: { duration: L },
            });
            return (0, m.useMemo)(() => {
              let Be = w(y, A),
                Q = Be.map((ye) => c(ye, me, A)),
                re = Be.map((ye) => f(ye, me, A)).filter((ye) => !!ye);
              return { rgParticleStyles: Q, rgStreamerStyles: re };
            }, [y, A, me]);
          },
          x = { position: "absolute", left: "50%", top: 0 },
          M = {
            ...x,
            width: 10,
            height: 5,
            borderWidth: 1,
            borderColor: "black",
          },
          n = ({ eType: y }) => {
            const A = y == 1,
              me = y == 2,
              [de, Be] = G();
            let { rgParticleStyles: Q, rgStreamerStyles: re } = j(de, y),
              ye;
            switch (y) {
              case 1:
                ye = Q.map((he, D) => (0, e.jsx)(Ne, { style: he }, D));
                break;
              case 2:
                ye = Q.map((he, D) =>
                  D % 2
                    ? (0, e.jsx)(le, { style: he }, D)
                    : (0, e.jsx)(De, { style: he }, D),
                );
                break;
              case 0:
                ye = Q.map((he, D) => (0, e.jsx)(le, { style: he }, D));
                break;
            }
            return (0, e.jsxs)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              },
              ref: Be,
              children: [
                ye,
                re.map((he, D) =>
                  he.flRandom > 0.5
                    ? (0, e.jsx)(O, { style: he }, D)
                    : (0, e.jsx)(P, { style: he }, D),
                ),
              ],
            });
          },
          le = ({ style: y }) =>
            (0, e.jsx)(u.CS.div, { style: { ...M, ...y } }),
          Ne = ({ style: y }) => {
            const [A] = (0, m.useState)(Math.floor(Math.random() * Z.length)),
              me = Z[A];
            return (0, e.jsx)(me, {
              style: { ...x, ...y, backgroundColor: void 0 },
            });
          },
          De = ({ style: y }) => {
            const [A] = (0, m.useState)(Math.floor(Math.random() * oe.length)),
              me = oe[A];
            return (0, e.jsx)(me, {
              style: { ...x, ...y, backgroundColor: void 0 },
            });
          },
          Se = ({ style: y }) =>
            (0, e.jsx)(u.CS.svg, {
              viewBox: "0 0 48 102",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 5, height: 10, ...y },
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z",
                fill: "#F7D51E",
              }),
            }),
          ue = ({ style: y }) =>
            (0, e.jsxs)(u.CS.svg, {
              viewBox: "0 0 50 39",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 7, ...y },
              children: [
                (0, e.jsx)("path", {
                  d: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                  fill: "#C4C4C4",
                }),
                (0, e.jsx)("path", {
                  d: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                  fill: y.fill,
                }),
              ],
            }),
          ee = ({ style: y }) =>
            (0, e.jsx)(u.CS.svg, {
              viewBox: "0 0 68 69",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 10, ...y },
              children: (0, e.jsx)("rect", {
                y: "34.6389",
                width: "48",
                height: "48",
                transform: "rotate(-45 0 34.6389)",
                fill: y.fill,
              }),
            }),
          R = ({ style: y }) =>
            (0, e.jsx)(u.CS.svg, {
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 10, ...y },
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z",
                fill: y.fill,
              }),
            }),
          I = ({ style: y }) =>
            (0, e.jsx)(u.CS.svg, {
              viewBox: "0 0 48 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 8, ...y },
              children: (0, e.jsx)("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: y.fill,
              }),
            }),
          B = ({ style: y }) =>
            (0, e.jsx)(u.CS.svg, {
              viewBox: "0 0 48 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 8, ...y },
              children: (0, e.jsx)("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: y.fill,
              }),
            }),
          v = ({ style: y }) =>
            (0, e.jsx)(u.CS.svg, {
              viewBox: "0 0 48 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 8, ...y },
              children: (0, e.jsx)("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: y.fill,
              }),
            }),
          P = ({ style: y }) =>
            (0, e.jsx)(u.CS.svg, {
              viewBox: "0 0 80 620",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 70, ...y },
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z",
                fill: y.fill,
              }),
            }),
          O = ({ style: y }) =>
            (0, e.jsx)(u.CS.svg, {
              viewBox: "0 0 203 295",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: 10, height: 20, ...y },
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z",
                fill: y.fill,
              }),
            }),
          Z = [
            Se,
            ue,
            ee,
            R,
            I,
            B,
            v,
            ({ style: y }) =>
              (0, e.jsx)(u.CS.svg, {
                viewBox: "0 0 48 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: { width: 10, height: 8, ...y },
                children: (0, e.jsx)("path", {
                  d: "M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z",
                  fill: y.fill,
                }),
              }),
            ({ style: y }) =>
              (0, e.jsx)(u.CS.svg, {
                width: "48",
                height: "35",
                viewBox: "0 0 48 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: { width: 10, height: 7, ...y },
                children: (0, e.jsx)("path", {
                  d: "M48 0H0L24 35L48 0Z",
                  fill: y.fill,
                }),
              }),
          ],
          oe = [
            ({ style: y }) =>
              (0, e.jsxs)(u.CS.svg, {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 54 47.18",
                style: { width: 28, height: 28, ...y },
                children: [
                  (0, e.jsx)("polygon", {
                    fill: "#60000e",
                    points: "10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06",
                  }),
                  (0, e.jsx)("path", {
                    fill: "#f93838",
                    d: "M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "#f93838",
                    d: "M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z",
                  }),
                ],
              }),
            ({ style: y }) =>
              (0, e.jsxs)(u.CS.svg, {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 14.5 22",
                style: { width: 28, height: 28, ...y },
                children: [
                  (0, e.jsx)("path", {
                    fill: "#fc1010",
                    d: "M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "#fc1010",
                    d: "M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "#fc1010",
                    d: "M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "#fc1010",
                    d: "M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z",
                  }),
                ],
              }),
          ];
        function G() {
          const [y, A] = (0, m.useState)(null),
            me = (0, m.useCallback)((de) => {
              de &&
                typeof de.getBoundingClientRect == "function" &&
                A(de.getBoundingClientRect());
            }, []);
          return [y, me];
        }
      },
      37939: (W, E, s) => {
        "use strict";
        s.d(E, {
          _O: () => zt,
          DZ: () => Je,
          tP: () => Kt,
          uv: () => Oe,
          bp: () => pt,
          pp: () => lt,
          Tb: () => Re,
          hr: () => ct,
          T0: () => Dt,
          Bh: () => $e,
        });
        var e = s(38506),
          m = s(14947),
          u = s(18210),
          S = s(41735),
          L = s.n(S),
          h = s(3166),
          F = s(34592),
          _ = s(30096),
          a = s(35038),
          w = s(49288),
          c = s(7112),
          f = s(31224),
          j = s(27386),
          x = s(80613),
          M = s.n(x),
          n = s(75245);
        function le(ne) {
          return "unknown EUserLastReadFeedType ( " + ne + " )";
        }
        function Ne(ne) {
          return "unknown EAccountCountryChangeSource ( " + ne + " )";
        }
        function De(ne) {
          return "unknown ESetUserCountryError ( " + ne + " )";
        }
        function Se(ne) {
          return "unknown EUserAccountHistoryCategory ( " + ne + " )";
        }
        class ue extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ue.prototype.country_code || n.Sg(ue.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    country_code: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = n.w0(ue.M())), ue.sm_mbf;
          }
          toObject(t = !1) {
            return ue.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(ue.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(ue.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new ue();
            return ue.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(ue.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(ue.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
          }
        }
        class ee extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ee.prototype.promotions || n.Sg(ee.M()),
              x.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: { promotions: { n: 1, c: R, r: !0, q: !0 } },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = n.w0(ee.M())), ee.sm_mbf;
          }
          toObject(t = !1) {
            return ee.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(ee.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(ee.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new ee();
            return ee.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(ee.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(ee.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
          }
        }
        class R extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              R.prototype.promotionid || n.Sg(R.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    promotionid: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    promotion_description: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    minimum_cart_amount: {
                      n: 3,
                      br: n.qM.readInt64String,
                      bw: n.gp.writeInt64String,
                    },
                    minimum_cart_amount_for_display: {
                      n: 4,
                      br: n.qM.readInt64String,
                      bw: n.gp.writeInt64String,
                    },
                    discount_amount: {
                      n: 5,
                      br: n.qM.readInt64String,
                      bw: n.gp.writeInt64String,
                    },
                    currency_code: {
                      n: 6,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    available_use_count: {
                      n: 7,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    promotional_discount_type: {
                      n: 8,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    loyalty_reward_id: {
                      n: 9,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    localized_name_token: {
                      n: 10,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    max_use_count: {
                      n: 11,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = n.w0(R.M())), R.sm_mbf;
          }
          toObject(t = !1) {
            return R.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(R.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(R.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new R();
            return R.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(R.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return R.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(R.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
          }
        }
        class I extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              I.prototype.appid || n.Sg(I.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    opt_out_in_library_events: {
                      n: 2,
                      d: !1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = n.w0(I.M())), I.sm_mbf;
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(I.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(I.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new I();
            return I.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(I.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(I.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPerAppEmailOptions";
          }
        }
        class B extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              B.prototype.clanid || n.Sg(B.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    clanid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    opt_out_in_library_events: {
                      n: 2,
                      d: !1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
          }
          toObject(t = !1) {
            return B.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(B.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(B.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new B();
            return B.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(B.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return B.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(B.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPerClanEmailOptions";
          }
        }
        class v extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              v.prototype.opt_out_token || n.Sg(v.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    opt_out_token: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = n.w0(v.M())), v.sm_mbf;
          }
          toObject(t = !1) {
            return v.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(v.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(v.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new v();
            return v.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(v.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return v.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(v.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetOptOutEmailOptions_Request";
          }
        }
        class P extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              P.prototype.email || n.Sg(P.M()),
              x.Message.initialize(this, t, 0, -1, [10, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    email: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                    opt_out_all: {
                      n: 2,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_wishlist_sales: {
                      n: 3,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_seasonal_promo: {
                      n: 4,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_wishlist_releases: {
                      n: 5,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_greenlight_releases: {
                      n: 6,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_curator_connect: {
                      n: 7,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_creator_home_releases: {
                      n: 8,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_in_library_events: {
                      n: 9,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    per_app_opt_outs: { n: 10, c: I, r: !0, q: !0 },
                    per_clan_opt_outs: { n: 11, c: B, r: !0, q: !0 },
                    opt_out_loyalty_awards_received: {
                      n: 12,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_partner_messages: {
                      n: 13,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_year_in_review: {
                      n: 14,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_wishlist_demo_releases: {
                      n: 15,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_creator_home_demo_releases: {
                      n: 16,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_next_fest_starts: {
                      n: 17,
                      d: !0,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_theme_sale_starts: {
                      n: 18,
                      d: !0,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_season_pass_ship: {
                      n: 19,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_roadmap_ship: {
                      n: 20,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    is_self: { n: 21, br: n.qM.readBool, bw: n.gp.writeBool },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = n.w0(P.M())), P.sm_mbf;
          }
          toObject(t = !1) {
            return P.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(P.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(P.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new P();
            return P.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(P.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return P.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(P.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetOptOutEmailOptions_Response";
          }
        }
        class O extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              O.prototype.opt_out_token || n.Sg(O.M()),
              x.Message.initialize(this, t, 0, -1, [10, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    opt_out_token: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    opt_out_all: {
                      n: 2,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_wishlist_sales: {
                      n: 3,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_seasonal_promo: {
                      n: 4,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_wishlist_releases: {
                      n: 5,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_greenlight_releases: {
                      n: 6,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_curator_connect: {
                      n: 7,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_creator_home_releases: {
                      n: 8,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_in_library_events: {
                      n: 9,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    per_app_opt_outs: { n: 10, c: I, r: !0, q: !0 },
                    per_clan_opt_outs: { n: 11, c: B, r: !0, q: !0 },
                    opt_out_loyalty_awards_received: {
                      n: 12,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_partner_messages: {
                      n: 13,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_year_in_review: {
                      n: 14,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_wishlist_demo_releases: {
                      n: 15,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_creator_home_demo_releases: {
                      n: 16,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_next_fest_starts: {
                      n: 17,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_theme_sale_starts: {
                      n: 18,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_season_pass_ship: {
                      n: 19,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    opt_out_roadmap_ship: {
                      n: 20,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
          }
          toObject(t = !1) {
            return O.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(O.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(O.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new O();
            return O.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(O.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(O.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_SetOptOutEmailOptions_Request";
          }
        }
        class U extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new U();
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new U();
            return U.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_SetOptOutEmailOptions_Response";
          }
        }
        class Y extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.has_wallet || n.Sg(Y.M()),
              x.Message.initialize(this, t, 0, -1, [13], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    has_wallet: { n: 1, br: n.qM.readBool, bw: n.gp.writeBool },
                    user_country_code: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    wallet_country_code: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    wallet_state: {
                      n: 4,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    balance: {
                      n: 5,
                      br: n.qM.readInt64String,
                      bw: n.gp.writeInt64String,
                    },
                    delayed_balance: {
                      n: 6,
                      br: n.qM.readInt64String,
                      bw: n.gp.writeInt64String,
                    },
                    currency_code: {
                      n: 7,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    time_most_recent_txn: {
                      n: 8,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    most_recent_txnid: {
                      n: 9,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    balance_in_usd: {
                      n: 10,
                      br: n.qM.readInt64String,
                      bw: n.gp.writeInt64String,
                    },
                    delayed_balance_in_usd: {
                      n: 11,
                      br: n.qM.readInt64String,
                      bw: n.gp.writeInt64String,
                    },
                    has_wallet_in_other_regions: {
                      n: 12,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    other_regions: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: n.qM.readInt32,
                      pbr: n.qM.readPackedInt32,
                      bw: n.gp.writeRepeatedInt32,
                    },
                    formatted_balance: {
                      n: 14,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    formatted_delayed_balance: {
                      n: 15,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    delayed_balance_available_min_time: {
                      n: 16,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    delayed_balance_available_max_time: {
                      n: 17,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    delayed_balance_newest_source: {
                      n: 18,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = n.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(Y.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new Y();
            return Y.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(Y.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(Y.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetWalletDetails_Response";
          }
        }
        class Z extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.include_balance_in_usd || n.Sg(Z.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    include_balance_in_usd: {
                      n: 1,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    wallet_region: {
                      n: 2,
                      d: 1,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    include_formatted_balance: {
                      n: 3,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = n.w0(Z.M())), Z.sm_mbf;
          }
          toObject(t = !1) {
            return Z.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(Z.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(Z.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new Z();
            return Z.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(Z.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(Z.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetClientWalletDetails_Request";
          }
        }
        class ae extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ae.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new ae();
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new ae();
            return ae.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetAccountLinkStatus_Request";
          }
        }
        class V extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.pwid || n.Sg(V.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    pwid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    identity_verification: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    performed_age_verification: {
                      n: 3,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = n.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(V.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new V();
            return V.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(V.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(V.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetAccountLinkStatus_Response";
          }
        }
        class oe extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              oe.prototype.appid || n.Sg(oe.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = n.w0(oe.M())), oe.sm_mbf;
          }
          toObject(t = !1) {
            return oe.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(oe.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(oe.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new oe();
            return oe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(oe.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(oe.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_CancelLicenseForApp_Request";
          }
        }
        class G extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new G();
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new G();
            return G.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_CancelLicenseForApp_Response";
          }
        }
        class y extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              y.prototype.steamid || n.Sg(y.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
          }
          toObject(t = !1) {
            return y.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(y.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(y.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new y();
            return y.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(y.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(y.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetUserCountry_Request";
          }
        }
        class A extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              A.prototype.country || n.Sg(A.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    country: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = n.w0(A.M())), A.sm_mbf;
          }
          toObject(t = !1) {
            return A.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(A.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(A.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new A();
            return A.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(A.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return A.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(A.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetUserCountry_Response";
          }
        }
        class me extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              me.prototype.invite_limit || n.Sg(me.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    invite_limit: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    invite_duration: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    invite_note: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = n.w0(me.M())), me.sm_mbf;
          }
          toObject(t = !1) {
            return me.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(me.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(me.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new me();
            return me.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(me.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(me.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_CreateFriendInviteToken_Request";
          }
        }
        class de extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              de.prototype.invite_token || n.Sg(de.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    invite_token: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    invite_limit: {
                      n: 2,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    invite_duration: {
                      n: 3,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    time_created: {
                      n: 4,
                      br: n.qM.readFixed32,
                      bw: n.gp.writeFixed32,
                    },
                    valid: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = n.w0(de.M())), de.sm_mbf;
          }
          toObject(t = !1) {
            return de.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(de.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(de.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new de();
            return de.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(de.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return de.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(de.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_CreateFriendInviteToken_Response";
          }
        }
        class Be extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Be.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new Be();
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new Be();
            return Be.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetFriendInviteTokens_Request";
          }
        }
        class Q extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.tokens || n.Sg(Q.M()),
              x.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: { tokens: { n: 1, c: de, r: !0, q: !0 } },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = n.w0(Q.M())), Q.sm_mbf;
          }
          toObject(t = !1) {
            return Q.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(Q.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(Q.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new Q();
            return Q.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(Q.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(Q.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_GetFriendInviteTokens_Response";
          }
        }
        class re extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              re.prototype.steamid || n.Sg(re.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    invite_token: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = n.w0(re.M())), re.sm_mbf;
          }
          toObject(t = !1) {
            return re.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(re.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(re.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new re();
            return re.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(re.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(re.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_ViewFriendInviteToken_Request";
          }
        }
        class ye extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ye.prototype.valid || n.Sg(ye.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    valid: { n: 1, br: n.qM.readBool, bw: n.gp.writeBool },
                    steamid: {
                      n: 2,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    invite_duration: {
                      n: 3,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = n.w0(ye.M())), ye.sm_mbf;
          }
          toObject(t = !1) {
            return ye.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(ye.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(ye.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new ye();
            return ye.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(ye.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(ye.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_ViewFriendInviteToken_Response";
          }
        }
        class he extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              he.prototype.steamid || n.Sg(he.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    invite_token: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = n.w0(he.M())), he.sm_mbf;
          }
          toObject(t = !1) {
            return he.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(he.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(he.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new he();
            return he.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(he.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(he.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_RedeemFriendInviteToken_Request";
          }
        }
        class D extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return D.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new D();
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new D();
            return D.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return D.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_RedeemFriendInviteToken_Response";
          }
        }
        class Ce extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ce.prototype.invite_token || n.Sg(Ce.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    invite_token: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = n.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(t = !1) {
            return Ce.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(Ce.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(Ce.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new Ce();
            return Ce.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(Ce.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(Ce.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_RevokeFriendInviteToken_Request";
          }
        }
        class qe extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return qe.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new qe();
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new qe();
            return qe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_RevokeFriendInviteToken_Response";
          }
        }
        class ze extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ze.prototype.compat_tool || n.Sg(ze.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    compat_tool: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = n.w0(ze.M())), ze.sm_mbf;
          }
          toObject(t = !1) {
            return ze.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(ze.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(ze.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new ze();
            return ze.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(ze.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(ze.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_RegisterCompatTool_Request";
          }
        }
        class Fe extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Fe.toObject(t, this);
          }
          static toObject(t, r) {
            return t ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(t) {
            return new Fe();
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new Fe();
            return Fe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return t;
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {}
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserAccount_RegisterCompatTool_Response";
          }
        }
        class He extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              He.prototype.steamid || n.Sg(He.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    client_token: {
                      n: 2,
                      br: n.qM.readBytes,
                      bw: n.gp.writeBytes,
                    },
                    expiry: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    deviceid: {
                      n: 4,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = n.w0(He.M())), He.sm_mbf;
          }
          toObject(t = !1) {
            return He.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(He.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(He.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new He();
            return He.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(He.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return He.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(He.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CEmbeddedClient_Token";
          }
        }
        class Ze extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ze.prototype.result || n.Sg(Ze.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    result: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    token: { n: 2, c: He },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = n.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(t = !1) {
            return Ze.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(Ze.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(Ze.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new Ze();
            return Ze.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(Ze.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(Ze.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CEmbeddedClient_AuthorizeDevice_Response";
          }
        }
        class T extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.steamid || n.Sg(T.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    device_info: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    deviceid: {
                      n: 4,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = n.w0(T.M())), T.sm_mbf;
          }
          toObject(t = !1) {
            return T.toObject(t, this);
          }
          static toObject(t, r) {
            return n.BT(T.M(), t, r);
          }
          static fromObject(t) {
            return n.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (M().BinaryReader)(t),
              o = new T();
            return T.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return n.zj(T.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (M().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            n.i0(T.M(), t, r);
          }
          serializeBase64String() {
            var t = new (M().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
          }
        }
        var Le;
        ((ne) => {
          function t(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.GetAvailableValveDiscountPromotions#1",
              (0, a.I8)(ue, fe, Ve),
              ee,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          ne.GetAvailableValveDiscountPromotions = t;
          function r(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.GetOptOutEmailOptions#1",
              (0, a.I8)(v, fe, Ve),
              P,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          ne.GetOptOutEmailOptions = r;
          function o(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.SetOptOutEmailOptions#1",
              (0, a.I8)(O, fe, Ve),
              U,
              { ePrivilege: 2 },
            );
          }
          ne.SetOptOutEmailOptions = o;
          function i(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.GetClientWalletDetails#1",
              (0, a.I8)(Z, fe, Ve),
              Y,
              { ePrivilege: 1 },
            );
          }
          ne.GetClientWalletDetails = i;
          function g(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.GetAccountLinkStatus#1",
              (0, a.I8)(ae, fe, Ve),
              V,
              { ePrivilege: 1 },
            );
          }
          ne.GetAccountLinkStatus = g;
          function H(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.CancelLicenseForApp#1",
              (0, a.I8)(oe, fe, Ve),
              G,
              { ePrivilege: 1 },
            );
          }
          ne.CancelLicenseForApp = H;
          function q(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.GetUserCountry#1",
              (0, a.I8)(y, fe, Ve),
              A,
              { ePrivilege: 1 },
            );
          }
          ne.GetUserCountry = q;
          function _e(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.CreateFriendInviteToken#1",
              (0, a.I8)(me, fe, Ve),
              de,
              { ePrivilege: 3 },
            );
          }
          ne.CreateFriendInviteToken = _e;
          function tt(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.GetFriendInviteTokens#1",
              (0, a.I8)(Be, fe, Ve),
              Q,
              { ePrivilege: 1 },
            );
          }
          ne.GetFriendInviteTokens = tt;
          function vt(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.ViewFriendInviteToken#1",
              (0, a.I8)(re, fe, Ve),
              ye,
              { ePrivilege: 1 },
            );
          }
          ne.ViewFriendInviteToken = vt;
          function st(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.RedeemFriendInviteToken#1",
              (0, a.I8)(he, fe, Ve),
              D,
              { ePrivilege: 1 },
            );
          }
          ne.RedeemFriendInviteToken = st;
          function It(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.RevokeFriendInviteToken#1",
              (0, a.I8)(Ce, fe, Ve),
              qe,
              { ePrivilege: 1 },
            );
          }
          ne.RevokeFriendInviteToken = It;
          function jt(ot, fe, Ve) {
            return ot.SendMsg(
              "UserAccount.RegisterCompatTool#1",
              (0, a.I8)(ze, fe, Ve),
              Fe,
              { ePrivilege: 1 },
            );
          }
          ne.RegisterCompatTool = jt;
        })(Le || (Le = {}));
        var We;
        ((ne) => {
          function t(r, o, i) {
            return r.SendMsg(
              "EmbeddedClient.AuthorizeCurrentDevice#1",
              (0, a.I8)(T, o, i),
              Ze,
              { ePrivilege: 1 },
            );
          }
          ne.AuthorizeCurrentDevice = t;
        })(We || (We = {}));
        var ke = s(99412),
          k = s(72604),
          te = s(86390),
          C = s(23386),
          Me = s(5858),
          je = s(76559);
        const Ie =
          s.p +
          "images/applications/store/RewardsSeason1Hero.png?v=valveisgoodatcaching";
        var Ee = s(58732),
          ce = s(71742),
          Ae = s(85528),
          Ye = s(6469),
          at = s(36174),
          rt = Object.defineProperty,
          Xe = Object.getOwnPropertyDescriptor,
          ge = (ne, t, r, o) => {
            for (
              var i = o > 1 ? void 0 : o ? Xe(t, r) : t, g = ne.length - 1, H;
              g >= 0;
              g--
            )
              (H = ne[g]) && (i = (o ? H(t, r, i) : H(i)) || i);
            return o && i && rt(t, r, i), i;
          };
        const Ge = 1263950,
          it = 1465660,
          ut = 1492660,
          $ = 1526200,
          ie = 1615900,
          pe = 1659580,
          Te = 1846860,
          K = 1880140,
          X = 2055870,
          we = 2243810,
          se = 2460510,
          xe = 2750340,
          Pe = 2818550,
          Ue = 2855140,
          yt = 2861690,
          Ct = 3027110,
          nt = 3412320,
          Qe = 3812610,
          be = 4228010,
          b = 4844660,
          Bt = h.TS.EUNIVERSE === ke.Rv ? 404860 : 1675200;
        function Oe(ne, t = !1) {
          const r = (o) => (0, u.we)(t ? `${o}_Plural` : o);
          switch (ne) {
            case C.J4:
              return r("#CommunityItemClass_Emoticon");
            case C.Ed:
              return r("#CommunityItemClass_Sticker");
            case C.zs:
              return r("#CommunityItemClass_MiniProfileBackground");
            case C.sU:
              return r("#CommunityItemClass_Background");
            case C.wK:
              return r("#CommunityItemClass_ChatEffect");
            case C.xi:
              return r("#CommunityItemClass_AvatarFrame");
            case C.xw:
              return r("#CommunityItemClass_AnimatedAvatar");
            case C.u8:
              return r("#CommunityItemClass_Badge");
            case C.jE:
              return r("#CommunityItemClass_ProfileModifier");
            case C.yZ:
              return r("#CommunityItemClass_SteamDeckKeyboardSkin");
            case C.Tl:
              return r("#CommunityItemClass_SteamDeckStartupMovie");
          }
          return "Unknown ECommunityItemClass";
        }
        const lt = "home";
        class Mt {
          original_point_cost;
          point_cost;
          discount;
          items = [];
          mapItemOwnership = new Map();
        }
        const et = class qt {
          constructor() {
            (0, m.Gn)(this);
          }
          m_transport;
          m_anonymousTransport;
          m_config;
          m_lPointsAvailable = new e.A(0, 0);
          m_bLoadedCouponPromosForUser = !1;
          m_mapCouponPromos = new Map();
          m_nAppIDFiltersInUseCount = 0;
          m_mapAppIDFilters = new Map();
          m_strAppFilterText = "";
          m_strSearchTerm = "";
          m_strSearchPlaceholder = "";
          m_bLoadedCouponDefinitions = !1;
          m_mapCouponDefinitons = new Map();
          m_mapLoyaltyRewardDefs = new Map();
          m_inflightRewardItemRequestsByID = {};
          m_bLoadedFullInventory = !1;
          m_mapOwnedCommunityItems = new Map();
          m_inflightInventoryRequests = {};
          m_bLoadedActiveBonuses = !1;
          m_rgActiveBonuses = m.sH.array([], { deep: !1 });
          m_mapAppRewards = new Map();
          m_inflightRewardItemRequests = {};
          m_seasonalBadgeDefinition = void 0;
          m_goldenProfileDefinition = void 0;
          m_goldenProfileConfigs = [];
          m_bLoadedRecentlyPlayed = !1;
          m_rgRecentlyPlayed = [];
          m_bSortedGamesWithRewards = !1;
          m_rgSortedAppsWithRewards = m.sH.array([], { deep: !1 });
          m_rgEventAppsWithRewards = m.sH.array([], { deep: !1 });
          m_bLoadedEligibleApps = !1;
          m_rgEligibleApps = [];
          m_mapEligibleApps = new Map();
          m_rgProfileCustomizationsConfig = void 0;
          m_persona = void 0;
          m_equippedItems = {};
          m_rgPurchasedCustomizations = void 0;
          m_rgUpgradedCustomizations = void 0;
          m_bLoadedAwardCost = !1;
          m_unAwardPointsTransferred = 0;
          m_bIsSaleActive = !1;
          m_strFreeItemHeader;
          m_HeroImageFallbackLoader = new ts(
            (t) =>
              fetch(`${h.TS.STORE_BASE_URL}points/heroimage?appid=${t}`)
                .then((r) => r.json())
                .then((r) => r.img_url),
            (t) => t.toString(),
          );
          m_batchedRewardItemLoader = new es(
            (t) => w.a9.BatchedQueryRewardItems(this.m_anonymousTransport, t),
            (t) => {
              const r = a.w.Init(w.Dj);
              return r.Body().set_requests(t), r;
            },
            (t) =>
              t.GetEResult() == k.R
                ? t
                    .Body()
                    .responses()
                    .map((r) => r.toObject())
                : (console.error(
                    `Error when calling LoyaltyRewardsService.BatchedQueryRewardItems: EResult=${t.GetEResult()}`,
                  ),
                  []),
          );
          m_batchedCommunityInventoryLoader = new es(
            (t) => f.uy.GetCommunityInventory(this.m_transport, t),
            (t) => {
              const r = a.w.Init(f.cU);
              return r.Body().set_filter_appids(t), r;
            },
            (t, r) => {
              if (t.GetEResult() == k.R) {
                const { items: o } = t.Body().toObject(),
                  i = {};
                return (
                  o.forEach((g) => {
                    i[g.appid] || (i[g.appid] = []), i[g.appid].push(g);
                  }),
                  r.map((g) => i[g] || [])
                );
              } else
                return (
                  console.error(
                    `Error when calling QuestService.GetCommunityInventory: EResult=${t.GetEResult()}`,
                  ),
                  r.map(() => [])
                );
            },
          );
          Init(t, r) {
            if (
              ((this.m_transport = t.GetServiceTransport()),
              (this.m_anonymousTransport = t.GetAnonymousServiceTransport()),
              (this.m_config = r),
              this.BIsLoggedIn())
            ) {
              const o = new je.b(h.iA.steamid);
              (this.m_persona = new Me.Z(o)), this.RetrievePersonaState();
            }
            r.eligible_apps
              ? ((this.m_bLoadedEligibleApps = !0),
                (this.m_rgEligibleApps = r.eligible_apps.apps),
                (this.m_mapEligibleApps = new Map(
                  this.m_rgEligibleApps.map((o) => [o.appid, o]),
                )))
              : this.LoadEligibleApps(),
              r.profile_customizations_config &&
                (this.m_rgProfileCustomizationsConfig =
                  r.profile_customizations_config),
              r.last_played &&
                ((this.m_bLoadedRecentlyPlayed = !0),
                (this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
                  r.last_played.games,
                ))),
              r.profile_items_equipped
                ? (this.m_equippedItems = r.profile_items_equipped)
                : this.RefreshEquippedProfileItems(),
              r.profile_customizations_purchased &&
                ((this.m_rgPurchasedCustomizations =
                  r.profile_customizations_purchased.purchased_customizations ||
                  []),
                (this.m_rgUpgradedCustomizations =
                  r.profile_customizations_purchased.upgraded_customizations ||
                  [])),
              r.summary
                ? (this.m_lPointsAvailable = e.A.fromString(
                    r.summary.summary.points,
                  ))
                : this.GetLoyaltyRewardsSummary(),
              r.golden_profiles &&
                (this.m_goldenProfileConfigs = r.golden_profiles || []),
              r.can_claim_sale_reward &&
                Kt.Get().InitFreeItemReward(r.can_claim_sale_reward),
              r.is_sale_active && (this.m_bIsSaleActive = r.is_sale_active),
              r.free_item_header &&
                (this.m_strFreeItemHeader = r.free_item_header),
              this.HydrateCustomPages();
          }
          static s_RewardsStore;
          static Get() {
            return (
              this.s_RewardsStore || (this.s_RewardsStore = new qt()),
              this.s_RewardsStore
            );
          }
          GetFreeItemHeaderSource() {
            return this.m_strFreeItemHeader;
          }
          GetServiceTransport() {
            return this.m_transport;
          }
          GetConfig() {
            return this.m_config;
          }
          GetCurrentSeasonalAppID() {
            return b;
          }
          async GetLoyaltyRewardsSummary() {
            if (!this.BIsLoggedIn()) return;
            const t = a.w.Init(w.pt);
            t.SetBodyFields({ steamid: h.iA.steamid });
            let r = await w.a9.GetSummary(this.m_transport, t);
            r.GetEResult() == k.R
              ? (this.m_lPointsAvailable = e.A.fromString(
                  r.Body().summary().points(),
                ))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetSummary: EResult=${r.GetEResult()}`,
                );
          }
          GetCommunityAwardPointsTransferred() {
            return (
              this.m_bLoadedAwardCost || this.LoadAwardCost(),
              this.m_unAwardPointsTransferred
            );
          }
          async LoadAwardCost() {
            this.m_bLoadedAwardCost = !0;
            const t = a.w.Init(w.Sm);
            let r = await w.a9.GetReactionConfig(this.m_transport, t);
            r.GetEResult() == k.R
              ? ((this.m_unAwardPointsTransferred = 0),
                r
                  .Body()
                  .reactions()
                  .forEach((o) => {
                    this.m_unAwardPointsTransferred == 0
                      ? (this.m_unAwardPointsTransferred =
                          o.points_transferred())
                      : (this.m_unAwardPointsTransferred = Math.min(
                          this.m_unAwardPointsTransferred,
                          o.points_transferred(),
                        ));
                  }))
              : (console.error(
                  `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${r.GetEResult()}`,
                ),
                (this.m_bLoadedAwardCost = !1));
          }
          ShowLoginDialog(t) {
            let r = window.location.href;
            if (t !== void 0) {
              const o = r.indexOf("/reward/");
              o !== -1
                ? (r = r.slice(0, o))
                : r.endsWith("/") && (r = r.slice(0, r.length - 1)),
                (r += "/reward/" + t);
            }
            (0, te.pZ)(r);
          }
          BHasAutumnSaleStarted() {
            return Date.now() / 1e3 > 1606327200;
          }
          BHasAutumnSaleEnded() {
            return Date.now() / 1e3 > 1606845600;
          }
          BIsSaleActive() {
            return this.m_bIsSaleActive;
          }
          BIsLoggedIn() {
            return h.iA.logged_in;
          }
          GetPointsAvailable() {
            return this.m_lPointsAvailable;
          }
          GetIsUsingAppIDFilters() {
            return this.m_nAppIDFiltersInUseCount != 0;
          }
          SetIsUsingAppIDFilters(t) {
            this.m_nAppIDFiltersInUseCount += t ? 1 : -1;
          }
          GetAppIDFilters() {
            return this.m_mapAppIDFilters;
          }
          AddAppIDFilter(t) {
            this.m_mapAppIDFilters.set(t, !0);
          }
          RemoveAppIDFilter(t) {
            this.m_mapAppIDFilters.delete(t);
          }
          GetCurrentAppFilterText() {
            return this.m_strAppFilterText;
          }
          SetCurrentAppFilterText(t) {
            this.m_strAppFilterText = t;
          }
          GetCurrentSearchTerm() {
            return this.m_strSearchTerm;
          }
          SetCurrentSearchTerm(t) {
            this.m_strSearchTerm = t && t.slice(0, 200);
          }
          GetCurrentSearchPlaceholder() {
            return this.m_strSearchPlaceholder;
          }
          SetCurrentSearchPlaceholder(t) {
            this.m_strSearchPlaceholder = t;
          }
          getLoyaltyRewardDefMap() {
            return this.m_mapLoyaltyRewardDefs;
          }
          async ReloadRewardDefinition(t) {
            const r = await this.LoadRewardDefinitions(t);
            return r.length == 1
              ? (this.m_mapLoyaltyRewardDefs.set(t, r[0]), r[0])
              : null;
          }
          GetRewardDefinitions(...t) {
            const r = t.filter(
              (o) =>
                !this.m_mapLoyaltyRewardDefs.has(o) &&
                !this.m_inflightRewardItemRequestsByID[o],
            );
            if (r.length > 0) {
              r.forEach((i) => (this.m_inflightRewardItemRequestsByID[i] = !0));
              const o = [];
              for (let i = 0; i < Math.ceil(r.length / 100); i++) {
                const g = r.slice(i * 100, i * 100 + 100);
                o.push(this.LoadRewardDefinitions(...g));
              }
              Promise.all(o).then(
                (0, m.XI)((i) => {
                  i.forEach((g) => {
                    g.forEach((H) => {
                      delete this.m_inflightRewardItemRequestsByID[H.defid],
                        this.m_mapLoyaltyRewardDefs.set(H.defid, H);
                    });
                  });
                }),
              );
            }
            return t
              .map((o) => this.m_mapLoyaltyRewardDefs.get(o))
              .filter(Boolean);
          }
          async LoadRewardDefinitions(...t) {
            const r = new w.GB();
            r.set_language(h.TS.LANGUAGE),
              r.set_include_direct_purchase_disabled(!0),
              t.forEach((i) => r.add_definitionids(i));
            const o = await this.m_batchedRewardItemLoader.Load(r);
            return o.eresult == k.R
              ? (o.response.count !== o.response.total_count &&
                  console.error(
                    "LoadRewardDefinitions did not receive all expected definitions (likely to due server-side limiting). The calling code should be paging/batching the request into multiple.",
                  ),
                o.response.definitions)
              : (console.error(
                  `Error loading reward definitions by ID: EResult=${o.eresult}`,
                ),
                []);
          }
          QueryRewardDefinitions(t, r, o) {
            const i = t.rewardtype ?? [w.kT.b2],
              g = Ye.Fm.Get().ExcludedContentDescriptor,
              H = Ye.Fm.Get().GetExcludedTagsSortedByID();
            let q = this.QueryLoyaltyRewardDefinitions(
              { ...t, excludedContentDescriptors: g, excludedTagIDs: H },
              r,
              o,
              i,
            );
            if (g.length) {
              const _e = {
                  ...t,
                  excludedContentDescriptors: [],
                  excludedTagIDs: [],
                  maxToReturn: 1,
                },
                tt = this.QueryLoyaltyRewardDefinitions(_e, 0, 1, i);
              tt.cTotalMatching !== void 0 &&
                (q.cTotalMatchingUnfiltered = tt.cTotalMatching);
            } else q.cTotalMatchingUnfiltered = q.cTotalMatching;
            return q;
          }
          EResultToErrorMessage(t) {
            switch (t) {
              case k.sW:
                return (0, u.we)("#Redeem_Error_AccessDenied");
              case k.hX:
                return (0, u.we)("#Redeem_Error_InsufficientPrivileges");
              case k.O4:
                return (0, u.we)("#Redeem_Error_InsufficientFunds");
              case k.Ze:
                return (0, u.we)("#Redeem_Error_DuplicateRequest");
              case k.fY:
                return (0, u.we)("#Redeem_Error_Revoked");
              case k.$U:
                return (0, u.we)("#Redeem_Error_PriceChange");
            }
            return "";
          }
          QueryLoyaltyRewardDefinitions(t, r, o, i) {
            let g = { rewards: [], cTotalMatching: 0, cMaxToReturn: 0 };
            if (
              (t.appid && !t.appid.length) ||
              (t.itemclass && !t.itemclass.length)
            )
              return g;
            const H = {
                appid: t.appid || [],
                itemclass: t.itemclass || [],
                grouping: t.grouping,
                maxToReturn: t.maxToReturn,
                rewardtype: t.rewardtype,
                queryFilter: t.queryFilter || [],
                categoryTag: t.categoryTag || [],
                excludedContentDescriptors: t.excludedContentDescriptors || [],
                excludedTagIDs: t.excludedTagIDs || [],
                excludedAppIDs: t.excludedAppIDs || [],
                searchLanguage: t.searchLanguage,
                searchTerm: t.searchTerm,
              },
              q = wt(H);
            H.maxToReturn &&
              r + o > H.maxToReturn &&
              (o = Math.max(0, H.maxToReturn - r));
            let _e = o,
              tt;
            if (this.m_mapAppRewards.has(q)) {
              const st = this.m_mapAppRewards.get(q);
              r > st.rgRewardIds.length - 1
                ? (_e = o + r - st.rgRewardIds.length)
                : (_e = Math.max(o - (st.rgRewardIds.length - r), 0)),
                st.bFullyLoaded && (_e = 0),
                (tt = st.strCursor);
            }
            if (
              (this.m_mapAppRewards.has(q) ||
                this.m_mapAppRewards.set(q, { rgRewardIds: [] }),
              _e && !this.m_inflightRewardItemRequests[q])
            ) {
              this.m_inflightRewardItemRequests[q] = !0;
              let st = [];
              this.LoadLoyaltyRewardDefinitions(H, _e, tt, i).then((It) => {
                (0, m.h5)(() => {
                  const {
                      definitions: jt,
                      next_cursor: ot,
                      total_count: fe,
                    } = It,
                    Ve = jt.filter(
                      (Rt) => (!Xt(Rt) || Rt.type === w.kT.j1) && !Yt(Rt),
                    ),
                    Ot = this.m_mapAppRewards.get(q);
                  delete this.m_inflightRewardItemRequests[q],
                    (Ot.strCursor = ot),
                    (Ot.cTotal = fe),
                    Ve.forEach(({ defid: Rt }) => {
                      Ot.rgRewardIds.push(Rt);
                    }),
                    (Ot.bFullyLoaded =
                      jt.length === 0 || Ot.rgRewardIds.length === Ot.cTotal),
                    Ve.forEach((Rt) => {
                      this.m_mapLoyaltyRewardDefs.set(Rt.defid, Rt),
                        st.push(Rt.appid);
                    }),
                    Ae.Vw.EnsureAppInfoForAppIDs(st);
                });
              });
            }
            let vt = this.m_mapAppRewards.get(q);
            return (
              (g.rewards = vt.rgRewardIds
                .slice(r, r + o)
                .map((st) => this.m_mapLoyaltyRewardDefs.get(st))),
              (g.cTotalMatching = vt.cTotal || 0),
              (g.cMaxToReturn = H.maxToReturn || 0),
              (g.bLoadingMore = this.m_inflightRewardItemRequests[q]),
              g
            );
          }
          async LoadLoyaltyRewardDefinitions(t, r, o, i) {
            const {
                appid: g,
                grouping: H,
                itemclass: q,
                queryFilter: _e,
                categoryTag: tt,
                excludedContentDescriptors: vt,
                excludedTagIDs: st,
                excludedAppIDs: It,
                searchTerm: jt,
              } = t,
              ot = xt(H),
              fe = new w.GB();
            g.forEach((Ot) => fe.add_appids(Ot)),
              fe.set_language(h.TS.LANGUAGE),
              fe.set_count(r),
              fe.set_sort(ot.sort),
              fe.set_sort_descending(ot.sort_descending),
              fe.set_community_item_classes(q),
              fe.set_filters(_e),
              fe.set_filter_match_any_category_tags(tt),
              fe.set_excluded_content_descriptors(vt),
              fe.set_excluded_store_tagids(st),
              fe.set_excluded_appids(It),
              fe.set_search_term(jt),
              i && fe.set_reward_types(i),
              o && fe.set_cursor(o);
            const Ve = await this.m_batchedRewardItemLoader.Load(fe);
            return Ve.eresult == k.R
              ? Ve.response
              : (console.error(
                  `Error when loading reward definitions: EResult=${Ve.eresult}`,
                ),
                {
                  definitions: [],
                  total_count: 0,
                  next_cursor: void 0,
                  count: 0,
                });
          }
          GetCostToLevelSeasonalBadge(t) {
            const r = this.GetSeasonalBadgeDefinition();
            if (!r) return 0;
            const o = this.GetUserSeasonalBadgeLevel();
            return Math.max(parseInt(r.point_cost) * (t - o), 0);
          }
          GetUserSeasonalBadgeLevel() {
            const t = this.GetSeasonalBadgeDefinition();
            if (!t || !this.BRewardOwnedByUser(t)) return 0;
            const r = this.GetOwnedCommunityItem(t);
            if (!r)
              return (
                console.error("Could not find owned seasonal badge item"), 0
              );
            const o = r.attributes.find(({ attributeid: g }) => g === 2);
            if (!o)
              return (
                console.error("Could not find seasonal badge level attribute"),
                0
              );
            const i = parseInt(o.value);
            return isNaN(i)
              ? (console.error("Seasonal badge level attribute is NaN"), 0)
              : i;
          }
          GetGoldenProfileConfigForApp(t) {
            return (
              this.m_goldenProfileConfigs.find((o) => o.appid === t) || null
            );
          }
          GetSeasonalBadgeDefinition() {
            return (
              this.m_seasonalBadgeDefinition === void 0 &&
                this.LoadSeasonalBadgeDefinition().then(
                  (t) => (this.m_seasonalBadgeDefinition = t),
                ),
              this.m_seasonalBadgeDefinition
            );
          }
          async LoadSeasonalBadgeDefinition() {
            const t = new w.GB();
            t.set_appids([this.GetCurrentSeasonalAppID()]),
              t.set_community_item_classes([C.u8]),
              t.set_count(1),
              t.set_language(h.TS.LANGUAGE);
            let r = await this.m_batchedRewardItemLoader.Load(t);
            return r.eresult == k.R
              ? r.response.definitions[0] || null
              : (console.error(
                  `Error when loading badge definition: EResult=${r.eresult}`,
                ),
                null);
          }
          GetGoldenProfileDefinition() {
            return (
              this.m_goldenProfileDefinition === void 0 &&
                this.LoadGoldenProfileDefinition().then(
                  (t) => (this.m_goldenProfileDefinition = t),
                ),
              this.m_goldenProfileDefinition
            );
          }
          async LoadGoldenProfileDefinition() {
            const t = new w.GB();
            t.set_appids([this.GetCurrentSeasonalAppID()]),
              t.set_community_item_classes([C.jE]),
              t.set_count(1),
              t.set_language(h.TS.LANGUAGE);
            let r = await this.m_batchedRewardItemLoader.Load(t);
            return r.eresult == k.R
              ? r.response.count != 0
                ? r.response.definitions[0] || null
                : (console.error(
                    `Error when loading golden profile definition: Failed to find definition for appid ${this.GetCurrentSeasonalAppID()}`,
                  ),
                  null)
              : (console.error(
                  `Error when loading golden profile definition: EResult=${r.eresult}`,
                ),
                null);
          }
          GetCouponDefinition(t) {
            return (
              this.m_bLoadedCouponDefinitions ||
                ((this.m_bLoadedCouponDefinitions = !0),
                this.LoadCouponDefinitions().then((r) =>
                  r.forEach((o) => this.m_mapCouponDefinitons.set(o.defid, o)),
                )),
              this.m_mapCouponDefinitons.get(t)
            );
          }
          async LoadCouponDefinitions() {
            const t = new w.GB();
            t.set_appids([this.GetCurrentSeasonalAppID()]),
              t.set_reward_types([w.kT.j1]),
              t.set_count(10),
              t.set_language(h.TS.LANGUAGE);
            let r = await this.m_batchedRewardItemLoader.Load(t);
            return r.eresult == k.R
              ? r.response.definitions
              : (console.error(
                  `Error when loading coupon definitions: EResult=${r.eresult}`,
                ),
                null);
          }
          GetBundleOfferForUser(t) {
            let r = new Mt();
            if (
              ((r.original_point_cost = 0),
              (r.point_cost = 0),
              (r.discount = t.bundle_discount),
              (r.items = this.GetRewardDefinitions(...t.bundle_defids)),
              t.community_item_class == C.jE)
            ) {
              let o = this.GetRewardDefinitions(t.defid);
              r.items = r.items.concat(o);
            }
            return (
              r.items.sort((o, i) =>
                o.community_item_class == C.jE
                  ? -1
                  : i.community_item_class == C.jE
                    ? 1
                    : i.community_item_class - o.community_item_class,
              ),
              r.items.forEach((o) => {
                const i = parseInt(o.point_cost);
                r.original_point_cost += i;
                const g = this.BRewardOwnedByUser(o);
                r.mapItemOwnership.set(o.defid, g), g || (r.point_cost += i);
              }),
              (r.point_cost = Math.ceil(
                r.point_cost * (100 - r.discount) * 0.01,
              )),
              r
            );
          }
          GetOwnedItemCacheKey(t) {
            return `${t}`;
          }
          BRewardOwnedByUser(t) {
            const r = this.m_mapOwnedCommunityItems.get(
              this.GetOwnedItemCacheKey(
                this.m_bLoadedFullInventory ? void 0 : t.appid,
              ),
            );
            if ((r || this.GetCommunityItemInventory(t.appid), !r)) return !1;
            if (t.type == w.kT.Mj || t.type == w.kT.Wy) {
              for (const o of t.bundle_defids) {
                const i = this.m_mapLoyaltyRewardDefs.get(o);
                if (i && !this.BRewardOwnedByUser(i)) return !1;
              }
              return !0;
            }
            return r.has(t.community_item_type);
          }
          BRewardEquippedByUser(t) {
            if (!this.BRewardOwnedByUser(t)) return !1;
            switch (t.community_item_class) {
              case C.xw:
                return (
                  this.m_equippedItems.animated_avatar.appid == t.appid &&
                  this.m_equippedItems.animated_avatar.item_type ==
                    t.community_item_type
                );
              case C.xi:
                return (
                  this.m_equippedItems.avatar_frame.appid == t.appid &&
                  this.m_equippedItems.avatar_frame.item_type ==
                    t.community_item_type
                );
              case C.sU:
                return (
                  this.m_equippedItems.profile_background.appid == t.appid &&
                  this.m_equippedItems.profile_background.item_type ==
                    t.community_item_type
                );
              case C.zs:
                return (
                  this.m_equippedItems.mini_profile_background.appid ==
                    t.appid &&
                  this.m_equippedItems.mini_profile_background.item_type ==
                    t.community_item_type
                );
              case C.jE:
                return (
                  this.m_equippedItems.profile_modifier.appid == t.appid &&
                  this.m_equippedItems.profile_modifier.item_type ==
                    t.community_item_type
                );
              case C.yZ:
                return (
                  this.m_equippedItems.steam_deck_keyboard_skin.appid ==
                    t.appid &&
                  this.m_equippedItems.steam_deck_keyboard_skin.item_type ==
                    t.community_item_type
                );
            }
            return !1;
          }
          GetOwnedCommunityItem(t) {
            const r = this.m_mapOwnedCommunityItems.get(
              this.GetOwnedItemCacheKey(
                this.m_bLoadedFullInventory ? void 0 : t.appid,
              ),
            );
            return (
              r || this.GetCommunityItemInventory(t.appid),
              (0, ce.wT)(
                r.has(t.community_item_type),
                `Missing owned item ${t.community_item_type}`,
              ),
              r.get(t.community_item_type)
            );
          }
          GetOwnedCommunityItemID(t) {
            const r = this.GetOwnedCommunityItem(t);
            return r ? r.communityitemid : null;
          }
          async EnsureCommunityItemInventoryLoaded(t) {
            this.m_mapOwnedCommunityItems.has(this.GetOwnedItemCacheKey(t)) ||
              (await this.GetCommunityItemInventory(t));
          }
          async GetCommunityItemInventory(t) {
            if (!this.BIsLoggedIn()) return Promise.resolve();
            const r = this.GetOwnedItemCacheKey(t);
            if (this.m_inflightInventoryRequests[r])
              return this.m_inflightInventoryRequests[r];
            const o = this.m_batchedCommunityInventoryLoader.Load(t);
            this.m_inflightInventoryRequests[r] = o;
            const i = await o,
              g = new Map();
            return (
              i.forEach((H) => {
                g.set(H.item_type, H);
              }),
              this.m_mapOwnedCommunityItems.set(r, g),
              delete this.m_inflightInventoryRequests[r],
              o
            );
          }
          get active_bonuses() {
            return (
              this.m_bLoadedActiveBonuses || this.LoadActiveBonuses(),
              this.m_rgActiveBonuses
            );
          }
          async LoadActiveBonuses() {
            this.m_bLoadedActiveBonuses = !0;
            const t = a.w.Init(w.L),
              r = await w.a9.GetActivePurchaseBonuses(this.m_transport, t);
            r.GetEResult() == k.R
              ? this.m_rgActiveBonuses.push(
                  ...r
                    .Body()
                    .bonuses()
                    .map((o) => o.toObject()),
                )
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetActivePurchaseBonuses: EResult=${r.GetEResult()}`,
                );
          }
          async SetProfileBackground(t) {
            let r = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (r = { eResult: k.Dy, strMessage: "Not logged on" }), r;
            const o = a.w.Init(j.F55);
            o.Body().set_communityitemid(this.GetOwnedCommunityItemID(t));
            const i = await j.xtC.SetProfileBackground(this.m_transport, o);
            return (
              (r.eResult = i.GetEResult()),
              i.GetEResult() != k.R &&
                console.error(
                  `Error when calling PlayerService.SetProfileBackground: EResult=${i.GetEResult()}`,
                ),
              r
            );
          }
          async SetAvatarFrame(t) {
            let r = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (r = { eResult: k.Dy, strMessage: "Not logged on" }), r;
            const o = a.w.Init(j.C0y);
            o.Body().set_communityitemid(this.GetOwnedCommunityItemID(t));
            const i = await j.xtC.SetAvatarFrame(this.m_transport, o);
            return (
              (r.eResult = i.GetEResult()),
              i.GetEResult() != k.R
                ? console.error(
                    `Error when calling PlayerService.SetAvatarFrame: EResult=${i.GetEResult()}`,
                  )
                : this.RefreshEquippedProfileItems(),
              r
            );
          }
          async SetAnimatedAvatar(t) {
            let r = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (r = { eResult: k.Dy, strMessage: "Not logged on" }), r;
            const o = a.w.Init(j.UMm);
            o.Body().set_communityitemid(this.GetOwnedCommunityItemID(t));
            const i = await j.xtC.SetAnimatedAvatar(this.m_transport, o);
            return (
              (r.eResult = i.GetEResult()),
              i.GetEResult() != k.R
                ? console.error(
                    `Error when calling PlayerService.SetAnimatedAvatar: EResult=${i.GetEResult()}`,
                  )
                : this.RefreshEquippedProfileItems(),
              r
            );
          }
          async SetMiniProfileBackground(t) {
            let r = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (r = { eResult: k.Dy, strMessage: "Not logged on" }), r;
            const o = a.w.Init(j.A6_);
            o.Body().set_communityitemid(this.GetOwnedCommunityItemID(t));
            const i = await j.xtC.SetMiniProfileBackground(this.m_transport, o);
            return (
              (r.eResult = i.GetEResult()),
              i.GetEResult() != k.R
                ? console.error(
                    `Error when calling PlayerService.SetMiniProfileBackground: EResult=${i.GetEResult()}`,
                  )
                : this.RefreshEquippedProfileItems(),
              r
            );
          }
          async SetSteamDeckKeyboardSkin(t) {
            let r = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (r = { eResult: k.Dy, strMessage: "Not logged on" }), r;
            const o = a.w.Init(j.BTZ);
            o.Body().set_communityitemid(this.GetOwnedCommunityItemID(t));
            const i = await j.xtC.SetSteamDeckKeyboardSkin(this.m_transport, o);
            return (
              (r.eResult = i.GetEResult()),
              i.GetEResult() != k.R
                ? console.error(
                    `Error when calling PlayerService.SetSteamDeckKeyboardSkin: EResult=${i.GetEResult()}`,
                  )
                : this.RefreshEquippedProfileItems(),
              r
            );
          }
          async ActivateProfileModifier(t) {
            let r = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (r = { eResult: k.Dy, strMessage: "Not logged on" }), r;
            const o = a.w.Init(f.fp);
            o.Body().set_communityitemid(this.GetOwnedCommunityItemID(t)),
              o.Body().set_appid(t.appid),
              o.Body().set_activate(!0);
            const i = await f.uy.ActivateProfileModifierItem(
              this.m_transport,
              o,
            );
            return (
              (r.eResult = i.GetEResult()),
              i.GetEResult() != k.R
                ? console.error(
                    `Error when calling QuestService.ActivateProfileModifierItem: EResult=${i.GetEResult()}`,
                  )
                : this.RefreshEquippedProfileItems(),
              r
            );
          }
          async RedeemPointsForItem(t, r, o) {
            let i = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (
                (i = {
                  eResult: k.Dy,
                  strMessage: (0, u.we)("#Redeem_SignIn"),
                }),
                i
              );
            const g = a.w.Init(w.Cs);
            g.Body().set_defid(t),
              g.Body().set_expected_points_cost(o.toString());
            const H = await w.a9.RedeemPoints(this.m_transport, g);
            return (
              (i.eResult = H.GetEResult()),
              H.GetEResult() == k.R
                ? (this.GetCommunityItemInventory(r),
                  this.GetLoyaltyRewardsSummary())
                : ((i.strMessage = this.EResultToErrorMessage(H.GetEResult())),
                  console.error(
                    `Error when calling LoyaltyRewardsService.RedeemPoints: EResult=${H.GetEResult()}`,
                  )),
              i
            );
          }
          async RedeemPointsForBadge(t, r) {
            let o = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (
                (o = {
                  eResult: k.Dy,
                  strMessage: (0, u.we)("#Redeem_SignIn"),
                }),
                o
              );
            const i = a.w.Init(w.mo);
            i.Body().set_defid(t), i.Body().set_num_levels(r);
            const g = await w.a9.RedeemPointsForBadgeLevel(this.m_transport, i);
            return (
              (o.eResult = g.GetEResult()),
              g.GetEResult() == k.R
                ? (this.GetCommunityItemInventory(
                    this.GetCurrentSeasonalAppID(),
                  ),
                  this.GetLoyaltyRewardsSummary())
                : ((o.strMessage = this.EResultToErrorMessage(g.GetEResult())),
                  console.error(
                    `Error when calling LoyaltyRewardsService.RedeemPointsForBadgeLevel: EResult=${g.GetEResult()}`,
                  )),
              o
            );
          }
          async RedeemPointsForProfileShowcase(t) {
            let r = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (r = { eResult: k.Dy, strMessage: "Not logged on" }), r;
            const o = a.w.Init(w.P$);
            o.Body().set_customization_type(t);
            const i = await w.a9.RedeemPointsForProfileCustomization(
              this.m_transport,
              o,
            );
            return (
              (r.eResult = i.GetEResult()),
              i.GetEResult() == k.R
                ? this.RefreshPurchasedProfileCustomizations()
                : ((r.strMessage = this.EResultToErrorMessage(i.GetEResult())),
                  console.error(
                    `Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomization: EResult=${i.GetEResult()}`,
                  )),
              r
            );
          }
          async RedeemPointsForProfileShowcaseUpgrade(t, r) {
            let o = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (
                (o = {
                  eResult: k.Dy,
                  strMessage: (0, u.we)("#Redeem_SignIn"),
                }),
                o
              );
            const i = a.w.Init(w.jK);
            i.SetBodyFields({ customization_type: t, new_level: r });
            const g = await w.a9.RedeemPointsForProfileCustomizationUpgrade(
              this.m_transport,
              i,
            );
            return (
              (o.eResult = g.GetEResult()),
              g.GetEResult() == k.R
                ? this.RefreshPurchasedProfileCustomizations()
                : ((o.strMessage = this.EResultToErrorMessage(g.GetEResult())),
                  console.error(
                    `Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomizationUpgrade: EResult=${g.GetEResult()}`,
                  )),
              o
            );
          }
          async RedeemPointsForCoupon(t) {
            let r = { eResult: k.zi, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (
                (r = {
                  eResult: k.Dy,
                  strMessage: (0, u.we)("#Redeem_SignIn"),
                }),
                r
              );
            const o = new FormData();
            o.append("sessionid", (0, h.KC)()),
              o.append("itemid", t.toString());
            try {
              await L()
                .post(
                  `${h.TS.STORE_BASE_URL}cart/ajaxredeemtokensforcartdiscount`,
                  o,
                )
                .then((i) => {
                  const g = i.data;
                  (r.eResult = g.eresult),
                    g.eresult == k.R && g.redirect
                      ? (window.location.href = g.redirect)
                      : console.error(
                          `Error when calling ajaxredeemtokensforcartdiscount: ${g}`,
                        );
                });
            } catch (i) {
              let g = (0, F.H)(i);
              console.error(
                `Error when calling ajaxredeemtokensforcartdiscount: ${g.strErrorMsg}`,
                g,
              );
            }
            return r;
          }
          GetCouponPromosForUser() {
            return (
              this.m_bLoadedCouponPromosForUser ||
                ((this.m_bLoadedCouponPromosForUser = !0),
                this.LoadCouponPromosForUser().then((t) =>
                  t
                    .sort((r, o) =>
                      r.max_use_count < o.max_use_count
                        ? -1
                        : r.max_use_count == o.max_use_count
                          ? 0
                          : 1,
                    )
                    .forEach((r) =>
                      this.m_mapCouponPromos.set(r.loyalty_reward_id, r),
                    ),
                )),
              this.m_mapCouponPromos
            );
          }
          async LoadCouponPromosForUser() {
            const t = a.w.Init(ue);
            t.Body().set_country_code(h.iA.country_code);
            const r = await Le.GetAvailableValveDiscountPromotions(
              this.m_transport,
              t,
            );
            return r.GetEResult() == k.R
              ? r
                  .Body()
                  .promotions()
                  .map((o) => o.toObject())
              : (console.error(
                  `Error when calling UserAccountService.GetAvailableValveDiscountPromotions: EResult=${r.GetEResult()}`,
                ),
                []);
          }
          BCanRedeemPointsForItem(t) {
            switch (t.type) {
              case w.kT.b2:
                switch (t.community_item_class) {
                  case C.J4:
                  case C.sU: {
                    if (
                      (t.community_item_data.animated &&
                        t.community_item_class == C.sU) ||
                      this.GetSortedGamesWithRewards().includes(t.appid)
                    )
                      return !0;
                    let o = this.m_mapEligibleApps.get(t.appid);
                    return !!(o && o.event_app);
                  }
                }
                break;
              case w.kT.Mj:
              case w.kT.Wy: {
                if (this.GetSortedGamesWithRewards().includes(t.appid))
                  return !0;
                let o = this.m_mapEligibleApps.get(t.appid);
                return !!(o && o.event_app);
              }
            }
            return !0;
          }
          BCanRedeemPointsForProfileShowcaseUpgrade(t, r) {
            return (
              r < this.m_rgProfileCustomizationsConfig.max_upgradable_level
            );
          }
          BCanRedeemPointsForProfileShowcaseSlot(t, r) {
            return r < this.m_rgProfileCustomizationsConfig.max_slots_per_type;
          }
          GetSortedEventAppsWithRewards() {
            if (!this.m_rgEventAppsWithRewards.length) {
              let t = this.m_bLoadedEligibleApps
                ? this.m_rgEligibleApps
                : this.LoadEligibleApps();
              Promise.all([t]).then(([r]) => {
                let o = r.filter((i) => i.event_app);
                this.m_rgEventAppsWithRewards = o
                  .sort((i, g) => (i.appid < g.appid ? 1 : -1))
                  .map((i) => i.appid);
              });
            }
            return this.m_rgEventAppsWithRewards;
          }
          GetSortedMyGamesWithRewards() {
            return this.GetSortedGamesWithRewards().filter(
              (o) => this.m_mapEligibleApps.get(o).owned,
            );
          }
          GetSortedGamesWithRewards() {
            if (!this.m_bSortedGamesWithRewards) {
              this.m_bSortedGamesWithRewards = !0;
              let t = this.m_bLoadedEligibleApps
                  ? this.m_rgEligibleApps
                  : this.LoadEligibleApps(),
                r = this.m_bLoadedRecentlyPlayed
                  ? this.m_rgRecentlyPlayed
                  : this.LoadRecentlyPlayedApps();
              Promise.all([t, r]).then(([o, i]) => {
                (this.m_rgEligibleApps = o),
                  (this.m_mapEligibleApps = new Map(
                    this.m_rgEligibleApps.map((q) => [q.appid, q]),
                  ));
                const g = i.filter((q) => this.m_mapEligibleApps.has(q)),
                  H = o
                    .filter((q) => g.includes(q.appid) == !1)
                    .map((q) => q.appid);
                this.m_rgSortedAppsWithRewards = g.concat(H);
              });
            }
            return this.m_rgSortedAppsWithRewards;
          }
          GetMaxProfileShowcaseSlots() {
            return this.m_rgProfileCustomizationsConfig.max_slots_per_type;
          }
          GetPurchasableProfileShowcaseSlotCost() {
            return this.m_rgProfileCustomizationsConfig.points_cost;
          }
          GetPurchasableProfileShowcaseSlots() {
            return this.m_rgProfileCustomizationsConfig
              .purchasable_customization_types;
          }
          GetUpgradableProfileShowcaseCost() {
            return this.m_rgProfileCustomizationsConfig.upgrade_points_cost;
          }
          GetUpgradableProfileShowcases() {
            return this.m_rgProfileCustomizationsConfig
              .upgradable_customization_types;
          }
          GetMaxProfileShowcaseUpgradeLevel() {
            return this.m_rgProfileCustomizationsConfig.max_upgradable_level;
          }
          async LoadRecentlyPlayedApps() {
            if (((this.m_bLoadedRecentlyPlayed = !0), !this.BIsLoggedIn()))
              return [];
            const t = a.w.Init(j.t24),
              r = Math.floor(Date.now() / 1e3) - at.Kp.PerDay * 14;
            t.Body().set_min_last_played(r);
            const o = await j.xtC.ClientGetLastPlayedTimes(this.m_transport, t);
            return o.GetEResult() == k.R
              ? ((this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
                  o.Body().toObject().games,
                )),
                this.m_rgRecentlyPlayed)
              : (console.error(
                  `Error when calling PlayerService.ClientGetLastPlayedTimes: EResult=${o.GetEResult()}`,
                ),
                []);
          }
          ProcessRecentlyPlayedApps(t) {
            return (
              t.sort((r, o) =>
                o.last_playtime != r.last_playtime
                  ? o.last_playtime - r.last_playtime
                  : o.playtime_2weeks != r.playtime_2weeks
                    ? o.playtime_2weeks - r.playtime_2weeks
                    : o.playtime_forever - r.playtime_forever,
              ),
              t.map((r) => r.appid)
            );
          }
          async LoadEligibleApps() {
            if (((this.m_bLoadedEligibleApps = !0), !this.BIsLoggedIn()))
              return [];
            const t = a.w.Init(w.IL),
              r = await w.a9.GetEligibleApps(this.m_transport, t);
            return r.GetEResult() == k.R
              ? r.Body().toObject().apps
              : (console.error(
                  `Error when calling GetEligibleApps: EResult=${r.GetEResult()}`,
                ),
                []);
          }
          async RefreshEquippedProfileItems() {
            if (!this.BIsLoggedIn()) return;
            const t = a.w.Init(j.aKf);
            t.SetBodyFields({ steamid: h.iA.steamid });
            const r = await j.xtC.GetProfileItemsEquipped(this.m_transport, t);
            r.GetEResult() == k.R
              ? (this.m_equippedItems = r.Body().toObject())
              : console.error(
                  `Error when calling GetProfileItemsEquipped: EResult=${r.GetEResult()}`,
                );
          }
          async RefreshPurchasedProfileCustomizations() {
            if (!this.BIsLoggedIn()) return;
            const t = a.w.Init(j.llP);
            t.SetBodyFields({ steamid: h.iA.steamid });
            const r = await j.xtC.GetPurchasedAndUpgradedProfileCustomizations(
              this.m_transport,
              t,
            );
            if (r.GetEResult() == k.R) {
              let o = r.Body().toObject();
              (this.m_rgPurchasedCustomizations = o.purchased_customizations),
                (this.m_rgUpgradedCustomizations = o.upgraded_customizations);
            } else
              console.error(
                `Error when calling GetPurchasedAndUpgradedProfileCustomizations: EResult=${r.GetEResult()}`,
              );
          }
          async GetEquippedProfileItems(t) {
            let r = { eResult: k.zi };
            const o = a.w.Init(w.zq);
            o.Body().set_steamid(t), o.Body().set_language(h.TS.LANGUAGE);
            const i = await w.a9.GetEquippedProfileItems(this.m_transport, o);
            return (
              (r.eResult = i.GetEResult()),
              i.GetEResult() != k.R &&
                console.error(
                  `Error when calling LoyaltyRewardsService.GetEquippedProfileItems: EResult=${i.GetEResult()}`,
                ),
              { ...i.Body().toObject(), ...r }
            );
          }
          GetPersonaState() {
            return this.m_persona;
          }
          async RetrievePersonaState() {
            let t = {
              access_token: this.m_config.webapi_token,
              steamids: h.iA.steamid,
            };
            return L()
              .get(
                `${h.TS.WEBAPI_BASE_URL}ISteamUserOAuth/GetUserSummaries/v2/`,
                { params: t },
              )
              .then((r) => {
                if (
                  r &&
                  r.data &&
                  r.data.players &&
                  r.data.players.length != 0
                ) {
                  let o = r.data.players[0];
                  (this.m_persona.m_strPlayerName = o.personaname),
                    (this.m_persona.m_ePersonaState = o.personastate),
                    (this.m_persona.m_strAvatarHash = o.avatarhash);
                }
              });
          }
          GetEquippedItems() {
            return this.m_equippedItems;
          }
          GetPurchasedProfileCustomizations() {
            return this.m_rgPurchasedCustomizations;
          }
          GetUpgradedProfileCustomizations() {
            return this.m_rgUpgradedCustomizations;
          }
          GetRewardItem(t) {
            return (
              !this.m_mapLoyaltyRewardDefs.has(t) &&
                !this.m_inflightRewardItemRequests[t] &&
                ((this.m_inflightRewardItemRequests[t] = !0),
                this.LoadRewardItem(t).then((r) => {
                  r.defid === t && this.m_mapLoyaltyRewardDefs.set(t, r),
                    delete this.m_inflightRewardItemRequests[t];
                })),
              this.m_mapLoyaltyRewardDefs.get(t)
            );
          }
          GetAppHeroImage(t) {
            const r = this.m_mapEligibleApps.get(t);
            return r && r.hero_carousel_image
              ? {
                  img_url: `${h.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${r.hero_carousel_image}`,
                  is_custom: !0,
                }
              : {
                  img_url: this.m_HeroImageFallbackLoader.Get(t) || Ie,
                  is_custom: !1,
                };
          }
          async LoadRewardItem(t) {
            const r = new w.GB();
            r.set_language(h.TS.LANGUAGE),
              r.set_count(1),
              r.set_definitionids([t]);
            const o = await this.m_batchedRewardItemLoader.Load(r);
            return o.eresult == k.R
              ? o.response.count > 0
                ? o.response.definitions[0]
                : null
              : (console.error(
                  `Error when loading reward definitions: EResult=${o.eresult}`,
                ),
                null);
          }
          m_mapPages = m.sH.map({}, { deep: !1 });
          GetPageDescriptor(t) {
            return (
              this.m_mapPages.has(mt(t)) ||
                this.m_mapPages.set(mt(t), this.BuildPage(t)),
              this.m_mapPages.get(mt(t))
            );
          }
          BuildPage(t) {
            switch (t.type) {
              case "app":
                return new Vt(
                  t.appid,
                  t.appid === this.GetCurrentSeasonalAppID()
                    ? (0, u.we)("#HeroCluster_Premier_Collection_Subtitle")
                    : void 0,
                );
              case "event":
                return new kt(
                  t.eventname,
                  t.rgIncludedAppIDs,
                  t.rgPriorityAppIDs,
                  t.cAppClusters,
                );
              case "custom":
                return (
                  console.error("Cannot dynamically build page type"), null
                );
              default:
                return console.error("Unknown page type"), null;
            }
          }
          m_mapClusters = m.sH.map({}, { deep: !1 });
          GetClusterDescriptor(t) {
            return this.m_mapClusters.get(t);
          }
          HydrateCustomPages() {
            const t = (p, N, z) => {
                const J = new ft(p, N, { grouping: $e, maxToReturn: 0, ...z });
                return (
                  this.m_mapClusters.has(J.id) ||
                    this.m_mapClusters.set(J.id, J),
                  J.id
                );
              },
              r = (p, N, z) => {
                const J = new zt(p, N, St({ grouping: $e }, z));
                return (
                  this.m_mapClusters.has(J.id) ||
                    this.m_mapClusters.set(J.id, J),
                  J
                );
              },
              o = (p, N, z, J) => {
                const ve = r(p, z || "", J);
                return {
                  type: Dt,
                  cluster: ve.id,
                  get title() {
                    return (0, u.we)("#HeroCluster_AppTitle", ve.title);
                  },
                  get strImage() {
                    return N || qt.Get().GetAppHeroImage(p).img_url;
                  },
                  get bFullBleedImage() {
                    return !!N;
                  },
                  linkedPage: { type: "app", appid: p },
                  theme: {
                    colors: {
                      bodygradient:
                        "linear-gradient(147.3deg, rgba(211, 193, 144, 0) 42.88%, rgba(223, 200, 141, 0.32) 113.95%)",
                      background: "rgba(117, 98, 80, 0.25)",
                    },
                  },
                };
              },
              i = (p) => this.m_mapPages.set(mt(p.params), p),
              g = t(
                (0, u.we)(
                  "#RewardCluster_Popular_Title",
                  (0, u.we)("#RewardCluster_Popular_RewardItems"),
                ),
                (0, u.we)("#RewardCluster_Popular_Subtitle"),
              ),
              H = t(
                Oe(C.zs, !0),
                (0, u.we)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
                { itemclass: [C.zs] },
              ),
              q = t(
                (0, u.we)("#ShopPageTitle_Avatar"),
                (0, u.we)("#RewardCluster_AvatarItems_Subtitle"),
                { itemclass: [C.xw, C.xi] },
              ),
              _e = t(
                Oe(C.sU, !0),
                (0, u.we)("#RewardCluster_Backgrounds_Subtitle"),
                { itemclass: [C.sU] },
              ),
              tt = t(
                (0, u.we)(
                  "#RewardCluster_Popular_Title",
                  (0, u.we)("#ShopNav_ChatEffectsLink"),
                ),
                (0, u.we)("#RewardCluster_ChatEffect_Subtitle"),
                { itemclass: [C.wK] },
              ),
              vt = t(
                (0, u.we)(
                  "#RewardCluster_Popular_Title",
                  (0, u.we)("#ShopNav_StickersLink"),
                ),
                (0, u.we)("#RewardCluster_Popular_Subtitle"),
                { itemclass: [C.Ed] },
              ),
              st = t(
                (0, u.we)(
                  "#RewardCluster_Popular_Title",
                  (0, u.we)("#ShopNav_EmoticonsLink"),
                ),
                (0, u.we)("#RewardCluster_Popular_Subtitle"),
                { itemclass: [C.J4] },
              ),
              It = t(
                (0, u.we)("#RewardCluster_All_Title", Oe(C.xw, !0)),
                (0, u.we)("#RewardCluster_AnimatedAvatar_Subtitle"),
                { itemclass: [C.xw] },
              ),
              jt = t(
                (0, u.we)("#RewardCluster_All_Title", Oe(C.xi, !0)),
                (0, u.we)("#RewardCluster_AvatarFrames_Subtitle"),
                { itemclass: [C.xi] },
              ),
              ot = t(
                (0, u.we)("#RewardCluster_All_Title", Oe(C.yZ, !0)),
                (0, u.we)("#RewardCluster_SteamDeckKeyboardSkins_Subtitle"),
                { itemclass: [C.yZ] },
              ),
              fe = t(
                (0, u.we)("#RewardCluster_All_Title", Oe(C.Tl, !0)),
                (0, u.we)("#RewardCluster_SteamDeckStartupMovies_Subtitle"),
                { itemclass: [C.Tl] },
              ),
              Ve = t(
                (0, u.we)("#RewardCluster_FromGames", Oe(C.Tl, !0)),
                void 0,
                { itemclass: [C.Tl], excludedAppIDs: [Bt] },
              ),
              Ot = t(
                (0, u.we)(
                  "#RewardCluster_All_Title",
                  (0, u.we)("#RewardItemType_Bundle_plural"),
                ),
                "",
                { rewardtype: [w.kT.Mj, w.kT.Wy] },
              ),
              Rt = t(
                (0, u.we)(
                  "#RewardCluster_All_Title",
                  (0, u.we)("#RewardItemType_ProfileBundle_plural"),
                ),
                "",
                { itemclass: [C.jE], queryFilter: [w.vT.Oc], grouping: ht },
              ),
              is = t(
                (0, u.we)(
                  "#RewardCluster_Popular_Title",
                  (0, u.we)("#RewardItemType_ProfileBundle_plural"),
                ),
                "",
                { itemclass: [C.jE], queryFilter: [w.vT.Oc], grouping: $e },
              ),
              as = t(
                (0, u.we)(
                  "#RewardCluster_All_Title",
                  (0, u.we)("#RewardItemType_ArtistProfile_plural"),
                ),
                "",
                {
                  itemclass: [C.jE],
                  queryFilter: [w.vT.Oc],
                  categoryTag: ["artist_profile"],
                },
              ),
              ms = t(
                (0, u.we)("#RewardCluster_TabletopFest2021Profiles_Title"),
                void 0,
                {
                  itemclass: [C.jE],
                  queryFilter: [w.vT.Oc],
                  categoryTag: ["tabletop_fest_2021"],
                },
              ),
              ss = t(
                (0, u.we)("#RewardCluster_TiledProfileBackgrounds_Title"),
                (0, u.we)("#RewardCluster_BackgroundsTiled_Subtitle"),
                { itemclass: [C.sU], queryFilter: [w.vT.qY] },
              ),
              Jt = [
                { cluster: ss, type: Re },
                {
                  cluster: fe,
                  type: Re,
                  linkedPage: {
                    type: "custom",
                    pageid: "steamdeck",
                    clusterindex: 1,
                  },
                },
                {
                  cluster: Rt,
                  type: Dt,
                  strImage: Ie,
                  bFullBleedImage: !0,
                  linkedPage: { type: "custom", pageid: "profilebundles" },
                },
                {
                  cluster: g,
                  type: Re,
                  linkedPage: null,
                  bHideHiddenItemCount: !0,
                },
                {
                  cluster: vt,
                  type: Re,
                  linkedPage: { type: "custom", pageid: "stickers" },
                },
                { cluster: H, type: Re },
                { cluster: q, type: Re },
                {
                  cluster: _e,
                  type: Re,
                  linkedPage: { type: "custom", pageid: "backgrounds" },
                },
                { cluster: tt, type: Re },
                {
                  cluster: st,
                  type: Re,
                  linkedPage: { type: "custom", pageid: "emoticons" },
                },
              ],
              At = [];
            let Wt = !0;
            At.push(o(5308810)), At.push(o(4761370));
            let ns;
            const Ft = [],
              Ut = Wt ? [At, Jt] : [Jt, At];
            for (let p = 0; p < Math.max(Ut[0].length, Ut[1].length); p++)
              p == 0 && ns && Ft.push(ns),
                p < Ut[0].length &&
                  Ft.push({ type: "clusterview", view: Ut[0][p] }),
                p < Ut[1].length &&
                  Ft.push({ type: "clusterview", view: Ut[1][p] });
            i(new Qt(lt, Ft));
            const Pt = [{ cluster: vt, type: ct }];
            i(
              new Lt(
                "stickers",
                Pt,
                (0, u.we)("#ShopPageTitle_Stickers"),
                void 0,
                (0, u.we)("#SearchPlaceholder_Stickers"),
              ),
            );
            const Et = [{ cluster: st, type: ct }];
            i(
              new Lt(
                "emoticons",
                Et,
                (0, u.we)("#ShopPageTitle_Emoticons"),
                void 0,
                (0, u.we)("#SearchPlaceholder_Emoticons"),
              ),
            ),
              i(
                new Lt(
                  "chateffects",
                  [{ cluster: tt, type: ct }],
                  Oe(C.wK, !0),
                  void 0,
                  (0, u.we)("#SearchPlaceholder_ChatEffects"),
                ),
              );
            const rs = t(
                (0, u.we)("#RewardCluster_AnimatedProfileBackgrounds_Title"),
                (0, u.we)("#RewardCluster_Backgrounds_Subtitle"),
                { itemclass: [C.sU], queryFilter: [w.vT.FK] },
              ),
              $t = t(
                (0, u.we)(
                  "#RewardCluster_AnimatedMiniProfileBackgrounds_Title",
                ),
                (0, u.we)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
                { itemclass: [C.zs], queryFilter: [w.vT.FK] },
              ),
              bt = t(
                (0, u.we)("#RewardCluster_StillProfileBackgrounds_Title"),
                (0, u.we)("#RewardCluster_Backgrounds_Subtitle"),
                { itemclass: [C.sU], queryFilter: [w.vT.SO] },
              ),
              Tt = t(
                (0, u.we)("#RewardCluster_StillMiniProfileBackgrounds_Title"),
                (0, u.we)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
                { itemclass: [C.zs], queryFilter: [w.vT.SO] },
              ),
              os = [
                { cluster: ss, type: Re },
                { cluster: rs, type: Re },
                { cluster: $t, type: Re },
                { cluster: bt, type: Re },
                { cluster: Tt, type: Re },
              ];
            i(
              new Lt(
                "backgrounds",
                os,
                (0, u.we)("#ShopPageTitle_Backgrounds"),
                void 0,
                (0, u.we)("#SearchPlaceholder_Backgrounds"),
              ),
            ),
              i(
                new Lt(
                  "avatar",
                  [
                    { cluster: It, type: Re },
                    { cluster: jt, type: Re },
                  ],
                  (0, u.we)("#ShopPageTitle_Avatar"),
                  void 0,
                  (0, u.we)("#SearchPlaceholder_Avatar"),
                ),
              );
            const ls = [
              { cluster: ot, type: Re },
              { cluster: fe, type: Re },
            ];
            i(
              new Lt(
                "steamdeck",
                ls,
                (0, u.we)("#ShopPageTitle_SteamDeckItems"),
                void 0,
                (0, u.we)("#SearchPlaceholder_SteamDeckItems"),
              ),
            ),
              i(
                new Lt(
                  "keyboard",
                  [{ cluster: ot, type: ct }],
                  (0, u.we)("#ShopPageTitle_SteamDeckKeyboardSkin"),
                  void 0,
                  (0, u.we)("#SearchPlaceholder_SteamDeckKeyboardSkin"),
                ),
              ),
              i(
                new Lt(
                  "startupmovie",
                  [
                    { cluster: Ve, type: Re },
                    { cluster: fe, type: ct },
                  ],
                  (0, u.we)("#ShopPageTitle_SteamDeckStartupMovie"),
                  void 0,
                  (0, u.we)("#SearchPlaceholder_SteamDeckStartupMovie"),
                ),
              ),
              i(
                new Lt(
                  "itembundles",
                  [{ cluster: Ot, type: ct }],
                  (0, u.we)("#ShopPageTitle_ItemBundles"),
                  (0, u.we)("#ShopPageTitle_ItemBundles_Subtitle"),
                  (0, u.we)("#SearchPlaceholder_ItemBundles"),
                ),
              );
            const d = [
              { cluster: is, type: Re },
              { cluster: as, type: Re },
              { cluster: Rt, type: ct },
            ];
            i(
              new Lt(
                "profilebundles",
                d,
                (0, u.we)("#ShopPageTitle_ProfileBundles"),
                (0, u.we)("#ShopPageTitle_ProfileBundles_Subtitle"),
                (0, u.we)("#SearchPlaceholder_ProfileBundles"),
              ),
            );
            const l = [{ cluster: as, type: ct, bHomogeneous: !0 }];
            i(
              new Lt(
                "artistprofiles",
                l,
                (0, u.we)("#ShopPageTitle_ArtistProfiles"),
                (0, u.we)("#ShopPageTitle_ArtistProfiles_Subtitle"),
                (0, u.we)("#SearchPlaceholder_ArtistProfiles"),
              ),
            ),
              this.BIsLoggedIn() &&
                (0, m.z7)(
                  () => !!qt.Get().GetSortedMyGamesWithRewards().length,
                ).then(() => {
                  const p = new ft(
                    (0, u.we)("#HeroCluster_YourGamesTitle"),
                    void 0,
                    {
                      get appid() {
                        return qt
                          .Get()
                          .GetSortedMyGamesWithRewards()
                          .slice(0, 10);
                      },
                      grouping: $e,
                    },
                  );
                  this.m_mapClusters.set(p.id, p);
                  const N = {
                    type: Dt,
                    linkedPage: { type: "custom", pageid: "games" },
                    cluster: p.id,
                    strImage: Ie,
                    bFullBleedImage: !0,
                  };
                  Ft.push({ type: "clusterview", view: N });
                  const z = 3,
                    J = qt.Get().GetSortedGamesWithRewards(),
                    ve = (dt) => {
                      const Nt = this.m_mapClusters.get(dt);
                      return Nt && Nt instanceof zt ? Nt.appid : null;
                    };
                  let gt = 0;
                  for (const dt of J) {
                    if (
                      Ft.findIndex(
                        (Ht) =>
                          Ht.type === "clusterview" &&
                          ve(Ht.view.cluster) === dt,
                      ) != -1
                    )
                      continue;
                    const Nt = o(dt),
                      _t = At.length + 3;
                    if (
                      (Ft.splice(_t + gt * _t, 0, {
                        type: "clusterview",
                        view: Nt,
                      }),
                      (gt += 1),
                      gt >= z)
                    )
                      break;
                  }
                  this.m_mapPages.set(
                    mt({ type: "custom", pageid: lt }),
                    new Qt(lt, Ft),
                  );
                });
          }
        };
        ge([m.sH.ref], et.prototype, "m_lPointsAvailable", 2),
          ge([m.sH], et.prototype, "m_mapCouponPromos", 2),
          ge([m.sH], et.prototype, "m_nAppIDFiltersInUseCount", 2),
          ge([m.sH], et.prototype, "m_mapAppIDFilters", 2),
          ge([m.sH], et.prototype, "m_strAppFilterText", 2),
          ge([m.sH], et.prototype, "m_strSearchTerm", 2),
          ge([m.sH], et.prototype, "m_strSearchPlaceholder", 2),
          ge([m.sH], et.prototype, "m_mapCouponDefinitons", 2),
          ge([m.sH], et.prototype, "m_mapLoyaltyRewardDefs", 2),
          ge([m.sH], et.prototype, "m_mapOwnedCommunityItems", 2),
          ge([m.sH], et.prototype, "m_mapAppRewards", 2),
          ge([m.sH], et.prototype, "m_seasonalBadgeDefinition", 2),
          ge([m.sH], et.prototype, "m_goldenProfileDefinition", 2),
          ge([m.sH], et.prototype, "m_goldenProfileConfigs", 2),
          ge([m.sH], et.prototype, "m_rgSortedAppsWithRewards", 2),
          ge([m.sH], et.prototype, "m_rgEventAppsWithRewards", 2),
          ge([m.sH], et.prototype, "m_rgEligibleApps", 2),
          ge([m.sH], et.prototype, "m_mapEligibleApps", 2),
          ge([m.sH], et.prototype, "m_rgProfileCustomizationsConfig", 2),
          ge([m.sH], et.prototype, "m_persona", 2),
          ge([m.sH], et.prototype, "m_equippedItems", 2),
          ge([m.sH], et.prototype, "m_rgPurchasedCustomizations", 2),
          ge([m.sH], et.prototype, "m_rgUpgradedCustomizations", 2),
          ge([m.sH], et.prototype, "m_unAwardPointsTransferred", 2),
          ge([_.oI], et.prototype, "ShowLoginDialog", 1);
        let Je = et;
        function pt(ne) {
          const t = Ee.B.LoyaltyStore();
          switch (ne.type) {
            case "app":
              return `${t}/app/${ne.appid}${typeof ne.clusterindex == "number" ? `/cluster/${ne.clusterindex}` : ""}`;
            case "custom":
              return `${t}/c/${ne.pageid}${typeof ne.clusterindex == "number" ? `/cluster/${ne.clusterindex}` : ""}`;
            case "event":
              return `${t}/event/${ne.eventname}`;
            default:
              return console.error(`Unknown page type ${ne.type}`), t;
          }
        }
        function mt(ne) {
          return btoa(JSON.stringify(ne));
        }
        function Ke(ne, t) {
          return `${ne.join("_")}__${wt(t)}`;
        }
        function wt(ne) {
          if (!ne) return "";
          const {
              appid: t,
              itemclass: r,
              rewardtype: o,
              grouping: i,
              queryFilter: g,
              categoryTag: H,
              excludedAppIDs: q,
              excludedContentDescriptors: _e,
              searchLanguage: tt,
              searchTerm: vt,
            } = ne,
            st = xt(i);
          return [
            t ? [...t].sort().join("_") : "",
            r ? r.join("_") : "",
            o ? o.join("_") : "",
            st.sort,
            st.sort_descending ? "1" : "0",
            g ? g.join("_") : "",
            H ? H.join("_") : "",
            q ? q.join("_") : "",
            _e ? _e.join("_") : "",
            tt || "",
            vt ? encodeURI(vt.substring(0, 200)) : "",
          ].join("__");
        }
        function xt(ne) {
          const t = { sort: w._h.h, sort_descending: !0 };
          switch (ne) {
            case ht:
              (t.sort = w._h.h), (t.sort_descending = !0);
              break;
            case $e:
              (t.sort = w._h.A), (t.sort_descending = !1);
              break;
          }
          return t;
        }
        const ht = 1,
          $e = 2,
          ct = 0,
          Re = 1,
          Dt = 2;
        class ft {
          m_strId;
          m_filter;
          m_strTitle;
          m_strSubtitle;
          constructor(t, r, o = {}) {
            (this.m_filter = o),
              (this.m_strTitle = t),
              (this.m_strSubtitle = r),
              (this.m_strId = Ke([], o));
          }
          get id() {
            return this.m_strId;
          }
          get title() {
            return this.m_strTitle;
          }
          get subtitle() {
            return this.m_strSubtitle;
          }
          GetRewards(t, r, o) {
            const i = St(this.m_filter, o);
            return Je.Get().QueryRewardDefinitions(i, t, r);
          }
        }
        ge([_.oI], ft.prototype, "GetRewards", 1);
        class zt {
          m_strId;
          m_appid;
          m_strSubtitle;
          m_additionalFilter;
          constructor(t, r, o) {
            (this.m_appid = t),
              (this.m_strSubtitle = r || ""),
              (this.m_additionalFilter = o || {}),
              Ae.Vw.GetAppInfo(this.m_appid),
              (this.m_strId = Ke([this.m_appid], this.m_additionalFilter));
          }
          get id() {
            return this.m_strId;
          }
          get appid() {
            return this.m_appid;
          }
          get title() {
            return Ae.Vw.GetAppInfo(this.m_appid).name;
          }
          get subtitle() {
            return this.m_strSubtitle;
          }
          GetRewards(t, r, o) {
            const i = St({ appid: [this.m_appid] }, this.m_additionalFilter, o);
            return Je.Get().QueryRewardDefinitions(i, t, r);
          }
        }
        ge([_.oI], zt.prototype, "GetRewards", 1);
        class kt {
          m_strEventName;
          m_rgIncludedAppIDs;
          m_rgPriorityAppIDs;
          m_cAppClusters;
          constructor(t, r, o, i) {
            (this.m_strEventName = t),
              (this.m_rgIncludedAppIDs = r),
              (this.m_rgPriorityAppIDs = o),
              (this.m_cAppClusters = i);
          }
          get params() {
            return { type: "event", eventname: this.m_strEventName };
          }
          get title() {
            return this.m_strEventName;
          }
          get items() {
            const t = [C.jE, C.xw, C.xi, C.zs, C.sU, C.Ed, C.J4, C.yZ, C.Tl];
            let r = [];
            const o = {
              type: "clusterview",
              view: {
                type: Re,
                linkedPage: null,
                cluster: {
                  id: mt({ eventname: this.m_strEventName, type: "event" }),
                  title: (0, u.we)("#RewardCluster_FeaturedItems"),
                  subtitle: "",
                  GetRewards: (q, _e, tt) =>
                    Je.Get().QueryRewardDefinitions(
                      St(
                        { grouping: $e, categoryTag: [this.m_strEventName] },
                        tt,
                      ),
                      q,
                      _e,
                    ),
                },
              },
            };
            r.push(o);
            const i = this.m_rgPriorityAppIDs?.concat(this.m_rgIncludedAppIDs),
              g = t.map((q) => ({
                type: "clusterview",
                view: {
                  type: Re,
                  linkedPage: null,
                  cluster: {
                    id: mt({
                      eventname: this.m_strEventName,
                      type: "event",
                      itemclass: q,
                      rgIncludedAppIDs: this.m_rgIncludedAppIDs,
                      rgPriorityAppIDs: this.m_rgPriorityAppIDs,
                    }),
                    title: Oe(q, !0),
                    subtitle: "",
                    GetRewards: (_e, tt, vt) =>
                      Je.Get().QueryRewardDefinitions(
                        St({ grouping: $e, itemclass: [q], appid: i }, vt),
                        _e,
                        tt,
                      ),
                  },
                },
              })),
              H = i
                ?.slice(0, this.m_cAppClusters)
                .map((q) => ({
                  type: "clusterview",
                  view: {
                    type: Re,
                    linkedPage: { type: "app", appid: q },
                    cluster: new zt(q, ""),
                  },
                }));
            return r.concat(g, H);
          }
        }
        class Vt {
          m_appid;
          m_strSubtitle;
          constructor(t, r = "") {
            (this.m_appid = t),
              (this.m_strSubtitle = r),
              Ae.Vw.GetAppInfo(this.m_appid);
          }
          get params() {
            return { type: "app", appid: this.m_appid };
          }
          get title() {
            return Ae.Vw.GetAppInfo(this.m_appid).name;
          }
          get subtitle() {
            return this.m_strSubtitle;
          }
          get items() {
            const t = [C.jE, C.xw, C.xi, C.zs, C.sU, C.Ed, C.J4, C.yZ, C.Tl];
            let r = [];
            {
              let i = {
                type: "clusterview",
                view: {
                  type: Re,
                  cluster: {
                    id: Ke([this.m_appid], { rewardtype: [w.kT.Mj] }),
                    title: (0, u.we)("#RewardItemType_Bundle_plural"),
                    subtitle: "",
                    GetRewards: (g, H, q) =>
                      Je.Get().QueryRewardDefinitions(
                        St(
                          {
                            appid: [this.m_appid],
                            rewardtype: [w.kT.Mj, w.kT.Wy],
                          },
                          q,
                        ),
                        g,
                        H,
                      ),
                  },
                },
              };
              r.push(i);
            }
            let o = t.map((i) => ({
              type: "clusterview",
              view: {
                type: Re,
                cluster: {
                  id: Ke([this.m_appid], { itemclass: [i] }),
                  title: Oe(i, !0),
                  subtitle: "",
                  GetRewards: (g, H, q) =>
                    Je.Get().QueryRewardDefinitions(
                      St({ appid: [this.m_appid], itemclass: [i] }, q),
                      g,
                      H,
                    ),
                },
              },
            }));
            return (r = r.concat(o)), r;
          }
        }
        class Qt {
          m_strTitle;
          m_strSubtitle;
          m_strSearchPlaceholder;
          m_strHeaderImage;
          m_rgPageItems;
          m_filter;
          m_pageid;
          constructor(t, r, o, i, g, H) {
            (this.m_pageid = t),
              (this.m_strTitle = o),
              (this.m_strSubtitle = i),
              (this.m_strSearchPlaceholder = g),
              (this.m_strHeaderImage = H),
              (this.m_rgPageItems = r);
          }
          get params() {
            return { type: "custom", pageid: this.m_pageid };
          }
          get title() {
            return this.m_strTitle;
          }
          get subtitle() {
            return this.m_strSubtitle;
          }
          get searchPlaceholder() {
            return this.m_strSearchPlaceholder;
          }
          get headerImage() {
            return this.m_strHeaderImage;
          }
          get items() {
            return this.m_rgPageItems.map((t) => Zt(t));
          }
        }
        function Zt(ne) {
          switch (ne.type) {
            case "banner":
              return ne;
            case "clusterview":
              return {
                type: "clusterview",
                view: {
                  ...ne.view,
                  cluster: Je.Get().GetClusterDescriptor(ne.view.cluster),
                },
              };
          }
        }
        class Lt extends Qt {
          constructor(t, r, o, i, g, H) {
            super(
              t,
              r.map((q) => ({ type: "clusterview", view: q })),
              o,
              i,
              g,
              H,
            );
          }
        }
        class es {
          m_fnJoinRequests;
          m_fnSplitResponse;
          m_fnMakeRequest;
          m_rgRequestParts = [];
          m_rootPromise;
          constructor(t, r, o) {
            (this.m_fnMakeRequest = t),
              (this.m_fnJoinRequests = r),
              (this.m_fnSplitResponse = o);
          }
          Load(t) {
            this.m_rootPromise || this.QueueBatch();
            const r = this.m_rgRequestParts.push(t);
            return this.m_rootPromise.then((o) => o[r - 1]);
          }
          QueueBatch() {
            const t = this.m_rgRequestParts;
            this.m_rootPromise = Promise.resolve()
              .then(() => {
                const r = this.m_fnMakeRequest(this.m_fnJoinRequests(t));
                return this.Reset(), r;
              })
              .then((r) => this.m_fnSplitResponse(r, t));
          }
          Reset() {
            (this.m_rootPromise = void 0), (this.m_rgRequestParts = []);
          }
        }
        function St(ne, ...t) {
          return !t || !t.length
            ? ne
            : [ne, ...t].reduce((r, o) => {
                if (!o) return r;
                const i = { ...r };
                return (
                  o.appid &&
                    (!i.appid || !i.appid.length
                      ? (i.appid = o.appid)
                      : (i.appid = i.appid.filter((g) => o.appid.includes(g)))),
                  typeof o.grouping == "number" &&
                    typeof r.grouping != "number" &&
                    (i.grouping = o.grouping),
                  o.itemclass &&
                    (!i.itemclass || !i.itemclass.length
                      ? (i.itemclass = o.itemclass)
                      : (i.itemclass = i.itemclass.filter((g) =>
                          o.itemclass.includes(g),
                        ))),
                  o.queryFilter &&
                    (i.queryFilter
                      ? i.queryFilter.push(
                          ...o.queryFilter.filter((g) =>
                            i.queryFilter.includes(g),
                          ),
                        )
                      : (i.queryFilter = o.queryFilter)),
                  o.categoryTag &&
                    (i.categoryTag
                      ? i.categoryTag.push(
                          ...o.categoryTag.filter((g) =>
                            i.categoryTag.includes(g),
                          ),
                        )
                      : (i.categoryTag = o.categoryTag)),
                  o.excludedContentDescriptors &&
                    (i.excludedContentDescriptors
                      ? i.excludedContentDescriptors.push(
                          ...o.excludedContentDescriptors.filter((g) =>
                            i.excludedContentDescriptors.includes(g),
                          ),
                        )
                      : (i.excludedContentDescriptors =
                          o.excludedContentDescriptors)),
                  o.excludedTagIDs &&
                    (i.excludedTagIDs
                      ? i.excludedTagIDs.push(
                          ...o.excludedTagIDs.filter((g) =>
                            i.excludedTagIDs.includes(g),
                          ),
                        )
                      : (i.excludedTagIDs = o.excludedTagIDs)),
                  o.searchLanguage &&
                    (i.searchLanguage, (i.searchLanguage = o.searchLanguage)),
                  o.searchTerm &&
                    (i.searchTerm
                      ? (i.searchTerm = i.searchTerm + " " + o.searchTerm)
                      : (i.searchTerm = o.searchTerm)),
                  i
                );
              });
        }
        class ts {
          m_fnRequest;
          m_fnBuildRequestKey;
          m_mapCache;
          m_mapInflightRequests;
          constructor(t, r) {
            (this.m_fnRequest = t),
              (this.m_fnBuildRequestKey = r),
              this.Reset();
          }
          Reset() {
            (this.m_mapCache = m.sH.map({}, { deep: !1 })),
              (this.m_mapInflightRequests = m.sH.map());
          }
          Get(...t) {
            const r = this.m_fnBuildRequestKey(...t),
              o = this.m_mapCache,
              i = this.m_mapInflightRequests;
            if (o.has(r)) return o.get(r);
            i.get(r) ||
              (i.set(r, !0),
              this.m_fnRequest(...t).then((g) => {
                o.set(r, g), i.delete(r);
              }));
          }
          BLoading(...t) {
            const r = this.m_fnBuildRequestKey(...t);
            return !!this.m_mapInflightRequests.get(r);
          }
        }
        function Yt(ne) {
          return !1;
        }
        function Xt(ne) {
          if (ne.type === w.kT.Mj || ne.type === w.kT.Wy)
            return !ne.bundle_defids || ne.bundle_defids.length == 0
              ? (console.error(`Bundle contains no items for def ${ne.defid}`),
                !0)
              : ne.bundle_discount
                ? !1
                : (console.error(`Bundle has no discount for def ${ne.defid}`),
                  !0);
          const t = ne.community_item_data;
          if (!t) return !0;
          if (ne.type === w.kT.b2) {
            let r = !1;
            switch (ne.community_item_class) {
              case C.Ed:
              case C.xi:
              case C.xw:
                r = !t.item_image_small;
                break;
              case C.J4:
              case C.yZ:
                r = !t.item_image_large;
                break;
              case C.sU:
                t.animated
                  ? (r =
                      !t.item_image_large &&
                      !t.item_movie_mp4 &&
                      !t.item_movie_mp4_small &&
                      !t.item_movie_webm &&
                      !t.item_movie_webm_small)
                  : (r = !t.item_image_large);
                break;
              case C.zs:
                r =
                  !t.item_image_large &&
                  !t.item_movie_mp4 &&
                  !t.item_movie_mp4_small &&
                  !t.item_movie_webm &&
                  !t.item_movie_webm_small;
                break;
              case C.Tl:
                r =
                  !t.item_image_large &&
                  !t.item_movie_webm &&
                  !t.item_movie_webm_small;
                break;
            }
            if (r)
              return (
                console.error(`Missing expected assets for reward ${ne.defid}`),
                !0
              );
          }
          return !1;
        }
        const Gt = class us {
          constructor() {
            (0, m.Gn)(this);
          }
          m_bCanClaimFreeItem = !1;
          m_claimedFreeItemDef = void 0;
          m_rtNextClaimTime = void 0;
          m_claimTimer;
          static s_SaleItemRewardsStore;
          static Get() {
            return (
              this.s_SaleItemRewardsStore ||
                (this.s_SaleItemRewardsStore = new us()),
              this.s_SaleItemRewardsStore
            );
          }
          InitFreeItemReward(t) {
            (this.m_bCanClaimFreeItem = t.can_claim),
              (this.m_claimedFreeItemDef = t.reward_item),
              (this.m_rtNextClaimTime = t.next_claim_time),
              this.SetClaimTimer();
          }
          BCanClaimFreeSaleReward() {
            return Je.Get().BIsLoggedIn() ? this.m_bCanClaimFreeItem : !0;
          }
          GetCurrentSaleRewardAppID() {
            return K;
          }
          GetClaimedSaleRewardItemDef() {
            return this.m_claimedFreeItemDef;
          }
          async LoadCanClaimFreeSticker() {
            if (!Je.Get().BIsLoggedIn()) return;
            const t = a.w.Init(c.c3);
            let r = await c.Qm.CanClaimItem(Je.Get().GetServiceTransport(), t);
            r.GetEResult() == k.R
              ? this.InitFreeItemReward(r.Body().toObject())
              : console.error(
                  "Error when calling SaleItemRewardsService.CanClaimItem: EResult=${msgResponse.GetEResult()}",
                );
          }
          async ClaimFreeSaleItem() {
            let t = { eResult: k.zi, strMessage: "" };
            if (!Je.Get().BIsLoggedIn())
              return (
                (t = {
                  eResult: k.Dy,
                  strMessage: (0, u.we)("#Redeem_SignIn"),
                }),
                t
              );
            const r = a.w.Init(c.wt),
              o = await c.Qm.ClaimItem(Je.Get().GetServiceTransport(), r);
            return (
              (t.eResult = o.GetEResult()),
              o.GetEResult() == k.R
                ? ((this.m_claimedFreeItemDef = o
                    .Body()
                    .reward_item()
                    .toObject()),
                  Je.Get().GetCommunityItemInventory(
                    this.m_claimedFreeItemDef.appid,
                  ),
                  (this.m_bCanClaimFreeItem = !1),
                  (this.m_rtNextClaimTime = o.Body().next_claim_time()),
                  this.SetClaimTimer())
                : (o.GetEResult() == k.S7 &&
                    (t.strMessage = (0, u.we)("#SummerSale_Redeem_Busy")),
                  console.error(
                    `Error when calling SaleItemRewardsService.ClaimItem: EResult=${o.GetEResult()}`,
                  )),
              t
            );
          }
          GetNextClaimTime() {
            return this.m_rtNextClaimTime
              ? new Date(this.m_rtNextClaimTime * 1e3)
              : null;
          }
          SetClaimTimer() {
            if (this.m_claimTimer || !this.m_rtNextClaimTime) return;
            const t = Date.now();
            let r = new Date(this.m_rtNextClaimTime * 1e3);
            const o = Math.max(0, r.getTime() - t);
            this.m_claimTimer = window.setTimeout(
              () => {
                (this.m_claimTimer = void 0),
                  Date.now() > r.getTime()
                    ? (this.m_bCanClaimFreeItem = !0)
                    : this.SetClaimTimer();
              },
              o > 1e3 * 60 * 5 ? o / 2 : o,
            );
          }
        };
        ge([m.sH], Gt.prototype, "m_bCanClaimFreeItem", 2),
          ge([m.sH], Gt.prototype, "m_claimedFreeItemDef", 2),
          ge([m.sH], Gt.prototype, "m_rtNextClaimTime", 2);
        let Kt = Gt;
      },
      19386: (W, E, s) => {
        "use strict";
        s.d(E, { B: () => le, g: () => I });
        var e = s(7850),
          m = s(75844),
          u = s(65946),
          S = s(85528),
          L = s(37939),
          h = s(18210),
          F = s(23903),
          _ = s(49288),
          a = s(58083),
          w = s(4381),
          c = s(36707),
          f = s(65146);
        const j = ({ value: B, className: v, ...P }) =>
          (0, e.jsxs)("div", {
            className: (0, c.A)(f.Discount, v),
            ...P,
            children: ["-", B, "%"],
          });
        var x = s(54722),
          M = s(96986);
        function n({ definition: B, theme: v, ...P }) {
          const O = [],
            { icon_url: U, name: Y } = S.Vw.GetAppInfo(B.appid),
            Z = B.internal_description,
            ae = L.DZ.Get().GetBundleOfferForUser(B);
          return {
            cost: ae.point_cost,
            name: Z,
            desc: (0, h.we)("#RewardItemType_Bundle"),
            attributes: O,
            appIcon: U,
            appName: Y,
            bundle: ae,
            definition: B,
            ...P,
          };
        }
        const le = (0, m.PA)((B) => (0, e.jsx)(Ne, { ...n(B) })),
          Ne = (0, m.PA)((B) => {
            const {
                appName: v,
                appIcon: P,
                bundle: O,
                definition: U,
                cost: Y,
                name: Z,
                desc: ae,
                attributes: V,
                className: oe,
                style: G,
                onClick: y,
                ...A
              } = B,
              me = I(U),
              de = 524,
              Be = `${de}px`;
            return (0, e.jsxs)(F.Kt, {
              display: "flex",
              flexDirection: "column",
              className: (0, c.A)(w.BundleContainer, oe),
              style: { ...G, width: Be },
              onActivate: y,
              ...A,
              children: [
                P &&
                  (0, e.jsx)("img", { title: v, src: P, className: w.AppIcon }),
                (0, e.jsx)(F.az, {
                  flex: "1",
                  style: {
                    width: `${de - 40}px`,
                    height: "200px",
                    margin: "0 30px",
                    position: "relative",
                    alignSelf: "center",
                  },
                  children: (0, e.jsx)(ue, {
                    items: O.items,
                    visible: 5,
                    width: de - 60,
                    cardSize: 90,
                    offer: O,
                  }),
                }),
                (0, e.jsx)(De, {
                  label: me,
                  count: O.items.length,
                  cost: Y,
                  discount: O.discount,
                }),
              ],
            });
          }),
          De = ({ cost: B, discount: v, label: P, count: O }) => {
            const U = `${P} (${O})`;
            return (0, e.jsxs)(F.az, {
              padding: "small",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              className: w.BundleFooter,
              title: U,
              children: [
                (0, e.jsx)("div", { className: w.BundleName, children: U }),
                B === 0
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("span", {
                          className: w.AlreadyOwned,
                          children: (0, h.we)("#Redeem_BundleItemOwned"),
                        }),
                        (0, e.jsx)(M.wK, { className: w.CheckmarkCircle }),
                      ],
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(j, {
                          value: v,
                          className: w.BundleDiscount,
                        }),
                        (0, e.jsx)(x.Y, { amount: B }),
                      ],
                    }),
              ],
            });
          };
        function Se(B, v, P) {
          if (v.length <= P) return v;
          const O = v
            .filter((U) => !B.mapItemOwnership.get(U.defid))
            .slice(0, P);
          if (O.length < P) {
            const U = v
              .filter((Y) => B.mapItemOwnership.get(Y.defid))
              .slice(0, P - O.length);
            return O.concat(U);
          }
          return O;
        }
        const ue = (0, m.PA)((B) => {
          const { offer: v, items: P, visible: O, width: U, cardSize: Y } = B,
            Z = Se(v, P, O);
          return (0, e.jsx)("div", {
            style: { position: "relative" },
            className: w.ItemHand,
            children: Z.map((ae, V) =>
              (0, e.jsxs)(
                R,
                {
                  style: ee(V, Z.length, O, Y, U),
                  children: [
                    v.mapItemOwnership.get(ae.defid) &&
                      (0, e.jsx)(M.wK, {
                        className: (0, c.A)(w.CheckmarkCircle, w.OwnedItem),
                      }),
                    (0, e.jsx)("img", {
                      src: (0, a.u)(ae),
                      className: w.ItemCardImage,
                    }),
                  ],
                },
                `${ae.defid}_${V}`,
              ),
            ),
          });
        });
        function ee(B, v, P, O, U) {
          const V = O * (Math.sin(0.42) + Math.cos(0.42)) - O,
            oe = U - V,
            G = Math.min(O, oe / v),
            y = ((P - v) / 2) * O,
            A = B * G + y,
            me = (v - 1) / 2,
            de = (Math.pow(B - me, 2) * 30) / (me * me),
            Be = ((0.42 * 2) / (v - 1)) * B - 0.42;
          return {
            position: "absolute",
            transformOrigin: "center",
            transform: `translateX(${A}px) translateY(${de}px) rotate(${Be}rad)`,
            width: `${O}px`,
            height: `${O}px`,
          };
        }
        const R = (B) =>
          (0, e.jsx)(F.az, {
            padding: "small",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...B,
            className: w.ItemCard,
          });
        function I(B) {
          const v = (0, u.q3)(() => S.Vw.GetAppInfo(B.appid));
          switch (B.type) {
            case _.kT.Wy:
              return (0, h.we)("#RewardBundle_AutoGeneratedBundleName", v.name);
            case _.kT.Mj:
              return B.community_item_data?.item_title ?? "";
            default:
              return (
                console.error(
                  `Cannot derive bundle title for definition ${B.defid} with type ${B.type}`,
                ),
                ""
              );
          }
        }
      },
      9353: (W, E, s) => {
        "use strict";
        s.d(E, { d: () => ze, z: () => k });
        var e = s(7850),
          m = s(90626),
          u = s(75844),
          S = s(92757),
          L = s(17083),
          h = s(37939),
          F = s(58407),
          _ = s(36707),
          a = s(23903),
          w = s(47653),
          c = s(81944),
          f = s(19298),
          j = s(3166);
        const x = "none";
        function M(te, C, Me = {}) {
          const {
              cInitialItems: je,
              cOverscanCount: Ie,
              fnRenderItemSkeleton: Ee,
              ...ce
            } = Me,
            Ae = je || 10,
            Ye = Ie || 10,
            [at, rt] = (0, m.useState)(Ae + Ye);
          let Xe = te(0, at).map((it) => C(it));
          const ge = Xe.length === 0;
          if (ge) for (let it = 0; it < at; it++) Xe.push(Ee());
          const Ge = n(Xe, ce, ge);
          return {
            ...Ge,
            fnNext: () => {
              Ge.iPosition + Ge.rgVisibleItems.length > at - Ye &&
                rt(at + Ge.rgVisibleItems.length),
                Ge.fnNext();
            },
          };
        }
        function n(te, C = {}, Me = !1) {
          const je = te.length,
            [Ie, Ee] = (0, m.useState)(0),
            [ce, Ae] = De(),
            [Ye, at] = De(),
            rt = (0, a.Th)("padding-right", x),
            Xe = (0, a.mG)().spacing[x];
          let ge = 1;
          Ae.width &&
            at.width !== void 0 &&
            (ge = Math.floor((at.width + Xe) / Ae.width));
          const Ge = !Me && Ie + ge < je,
            it = () => Ge && Ee(Ie + ge),
            ut = Ie > 0,
            $ = () => ut && Ee(Math.max(0, Ie - ge)),
            ie = Ie,
            pe = Ie + ge,
            Te = te
              .slice(ie, pe)
              .map((K, X) =>
                (0, e.jsx)(
                  "div",
                  {
                    ref: X === 0 ? ce : void 0,
                    className: (0, _.A)(
                      X === 0 || X < ge - 1 ? rt : void 0,
                      C.itemClassName,
                    ),
                    children: K,
                  },
                  X + ie,
                ),
              );
          return {
            containerRef: Ye,
            rgVisibleItems: Te,
            bAllowNext: Ge,
            bAllowPrev: ut,
            fnNext: it,
            fnPrev: $,
            iPosition: Ie,
          };
        }
        const le = (te) => {
            const {
              className: C,
              containerRef: Me,
              rgVisibleItems: je,
              bAllowNext: Ie,
              bAllowPrev: Ee,
              fnNext: ce,
              fnPrev: Ae,
              iPosition: Ye,
              ...at
            } = te;
            return (0, e.jsx)(f.Z, {
              className: (0, _.A)(F.Container, C),
              ref: Me,
              "flow-children": "row",
              ...at,
              children: je,
            });
          },
          Ne = (te) => {
            const {
              bAllowNext: C,
              bAllowPrev: Me,
              fnNext: je,
              fnPrev: Ie,
            } = te;
            return (0, e.jsxs)(m.Fragment, {
              children: [
                (0, e.jsx)(R, {
                  className: (0, _.A)(F.LeftArrow, !Me && F.Disabled),
                  onClick: Ie,
                }),
                (0, e.jsx)(ee, {
                  className: (0, _.A)(F.RightArrow, !C && F.Disabled),
                  onClick: je,
                }),
              ],
            });
          },
          De = () => (window.ResizeObserver ? Se() : ue()),
          Se = () => {
            const [te, C] = (0, m.useState)({}),
              [Me, je] = (0, m.useState)(null),
              Ie = (0, m.useCallback)((Ee) => je(Ee), []);
            return (
              (0, m.useLayoutEffect)(() => {
                if (Me) {
                  const Ee = () =>
                      window.requestAnimationFrame(() =>
                        C(Me.getBoundingClientRect()),
                      ),
                    ce = new ResizeObserver(Ee);
                  return ce.observe(Me), () => ce.disconnect();
                }
                return () => {};
              }, [Me]),
              [Ie, te]
            );
          },
          ue = () => {
            const [te, C] = (0, m.useState)({}),
              [Me, je] = (0, m.useState)(null),
              Ie = (0, m.useCallback)((Ee) => je(Ee), []);
            return (
              (0, m.useLayoutEffect)(() => {
                if (Me) {
                  const Ee = () =>
                    window.requestAnimationFrame(() =>
                      C(Me.getBoundingClientRect()),
                    );
                  return (
                    Ee(),
                    window.addEventListener("resize", Ee),
                    window.addEventListener("scroll", Ee),
                    () => {
                      window.removeEventListener("resize", Ee),
                        window.removeEventListener("scroll", Ee);
                    }
                  );
                }
                return () => {};
              }, [Me]),
              [Ie, te]
            );
          },
          ee = (te) =>
            (0, e.jsx)("svg", {
              ...te,
              viewBox: "0 0 23 36",
              children: (0, e.jsx)("g", {
                children: (0, e.jsx)("path", {
                  d: "M6 1.5L21 18L6 34.5",
                  stroke: "#EAEAEA",
                  fill: "none",
                  strokeWidth: "4",
                }),
              }),
            }),
          R = (te) => {
            const { style: C, ...Me } = te,
              je = { transform: "scaleX(-1)", ...(C || {}) };
            return (0, e.jsx)(ee, { style: je, ...Me });
          };
        function I(te) {
          const {
              items: C,
              renderItem: Me,
              loadMore: je,
              bLoadingMore: Ie,
              style: Ee,
            } = te,
            ce = (0, j.Qn)();
          return (0, e.jsx)(f.Z, {
            className: F.MobileContainer,
            children: (0, e.jsxs)(f.Z, {
              "flow-children": "row",
              className: (0, _.A)(F.Container, F.Mobile),
              style: ce ? null : Ee,
              children: [
                C.map(Me),
                (0, e.jsx)(c.J, {
                  trigger: "repeated",
                  rootMargin: "0px 100% 0px 100%",
                  horizontal: !0,
                  onVisibilityChange: (Ae) => Ae && je(),
                }),
                Ie &&
                  (0, e.jsx)("div", {
                    className: F.Loading,
                    children: (0, e.jsx)(w.R, {}),
                  }),
              ],
            }),
          });
        }
        var B = s(30992),
          v = s(32819),
          P = s(49288),
          O = s(62389),
          U = s(63888),
          Y = s(17687);
        const Z = (te) => {
            const {
                title: C,
                description: Me,
                actions: je,
                children: Ie,
                className: Ee,
                itemClassName: ce,
                imgSrc: Ae,
                fullbleed: Ye,
                style: at,
                ...rt
              } = te,
              Xe = `url(${Ae})`,
              Ge = (0, a.xC)() === "mobile";
            return (0, e.jsxs)(a.az, {
              padding: ["small", "large"],
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              className: (0, _.A)(U.Container, Ee),
              style: Ye ? { backgroundImage: Xe, ...at } : at,
              ...rt,
              children: [
                !Ye && (0, e.jsx)(Y.T, { src: Ae }),
                (0, e.jsx)(a.az, {
                  marginBottom: "medium",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flexGrow: 1,
                  style: { zIndex: 1 },
                  children: (0, e.jsxs)(a.az, {
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    className: U.TitleContainer,
                    children: [
                      (0, e.jsxs)(a.az, {
                        display: "flex",
                        flexGrow: 1,
                        alignItems: "center",
                        children: [
                          (0, e.jsxs)("div", {
                            style: { transform: "translatey( -2px )" },
                            className: U.Title,
                            children: [C, " "],
                          }),
                          je,
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: U.Description,
                        children: Me,
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)(a.cV, {
                  spacing: ["xsmall", "small"],
                  style: { alignSelf: Ge ? "flex-start" : "flex-end" },
                  itemClassName: ce,
                  children: Ie,
                }),
              ],
            });
          },
          ae = (te) => {
            const { theme: C, style: Me, ...je } = te;
            return (0, e.jsx)(B.rA, { ...je, style: { ...Me } });
          };
        function V(te) {
          return jsx(Z, {
            title: jsx("div", { className: styles.TitleSkeleton }),
            imgSrc: null,
            children: te.children,
          });
        }
        var oe = s(78175),
          G = s(18210),
          y = s(30869),
          A = s(58732),
          me = s(91618),
          de = s(29998),
          Be = s(27126),
          Q = s(24642),
          re = Object.defineProperty,
          ye = Object.getOwnPropertyDescriptor,
          he = (te, C, Me, je) => {
            for (
              var Ie = je > 1 ? void 0 : je ? ye(C, Me) : C,
                Ee = te.length - 1,
                ce;
              Ee >= 0;
              Ee--
            )
              (ce = te[Ee]) && (Ie = (je ? ce(C, Me, Ie) : ce(Ie)) || Ie);
            return je && Ie && re(C, Me, Ie), Ie;
          };
        function D(te) {
          return Math.max(0, te.cTotalMatchingUnfiltered - te.cTotalMatching);
        }
        function Ce(te) {
          const C = D(te);
          return C === 0
            ? null
            : (0, G.we)("#HiddenWithCountButton", (0, Q.D)(C));
        }
        function qe(te) {
          const C = D(te);
          return C === 0
            ? null
            : (0, e.jsx)(
                B.wF,
                {
                  title: (0, G.Yp)("#HiddenItems_Explanation", C, (0, Q.D)(C)),
                  children: Ce(te),
                },
                "HiddenCallout",
              );
        }
        const ze = (te) => {
          switch (te.descriptor.type) {
            case h.Tb:
              const C = (0, e.jsx)(Fe, { ...te });
              return te.descriptor.bHomogeneous
                ? (0, e.jsx)(me.i, { children: C })
                : C;
            case h.hr:
              const Me = (0, e.jsx)(Le, { ...te });
              return te.descriptor.bHomogeneous
                ? (0, e.jsx)(me.i, { children: Me })
                : Me;
            case h.T0:
              return (0, e.jsx)(a.OM, {
                children: (je) =>
                  je !== "desktop"
                    ? (0, e.jsx)(ke, { ...te })
                    : (0, e.jsx)(We, { ...te }),
              });
            default:
              return (
                console.error(`Unknown cluster display: ${te.descriptor.type}`),
                null
              );
          }
        };
        let Fe = class extends m.Component {
          render() {
            if (this.props.descriptor.type != h.Tb) return null;
            const {
                descriptor: {
                  cluster: { id: te, title: C, subtitle: Me, GetRewards: je },
                  title: Ie,
                  subtitle: Ee,
                  bHideHiddenItemCount: ce,
                },
                linkedPage: Ae,
                additionalFilter: Ye,
              } = this.props,
              at = Ae ? (0, h.bp)(Ae) : void 0,
              rt = {
                getItems: (Xe, ge) => je(Xe, ge, Ye),
                title: Ie || C,
                subtitle: Ee || Me,
                route: at,
                bHideHiddenItemCount: !!ce,
              };
            return (0, e.jsx)(a.OM, {
              children: (Xe) =>
                Xe !== "desktop"
                  ? (0, e.jsx)(Ze, { ...rt })
                  : (0, e.jsx)(T, { ...rt }),
            });
          }
        };
        Fe = he([u.PA], Fe);
        const He = 10,
          Ze = (0, u.PA)((te) => {
            const {
                title: C,
                subtitle: Me,
                route: je,
                getItems: Ie,
                bHideHiddenItemCount: Ee,
              } = te,
              ce = (0, S.W6)(),
              [Ae, Ye] = m.useState(He),
              at = () => Ye(Ae + He),
              rt = Ie(0, Ae),
              { rewards: Xe, bLoadingMore: ge, cTotalMatching: Ge } = rt,
              it = (0, de.S1)();
            if (Ge === 0) return null;
            const ut = !Ee && !je && Ce(rt),
              $ = () => ce.push(je);
            return (0, e.jsx)(B.Gq, {
              title: C,
              subtitle: ut || void 0,
              rightActions: je
                ? (0, e.jsx)(L.N_, {
                    to: je,
                    children: (0, e.jsx)(B.rA, {
                      onClick: $,
                      children: (0, G.we)("#SeeAllButton"),
                    }),
                  })
                : void 0,
              children: (0, e.jsx)(de.VJ, {
                children: (0, e.jsx)(I, {
                  items: Xe,
                  loadMore: at,
                  bLoadingMore: ge,
                  renderItem: (ie) =>
                    (0, e.jsx)(k, { definition: ie }, ie.defid),
                  style: it,
                }),
              }),
            });
          }),
          T = (0, u.PA)((te) => {
            const {
              title: C,
              subtitle: Me,
              route: je,
              getItems: Ie,
              bHideHiddenItemCount: Ee,
            } = te;
            let ce = (ut, $) => Ie(ut, $).rewards,
              Ae = Ie(0, 0);
            const Ye = M(
                ce,
                (ut) => (0, e.jsx)(k, { definition: ut }, ut.defid),
                {
                  itemClassName: y.ItemHover,
                  fnRenderItemSkeleton: () => (0, e.jsx)(v.sc, {}),
                },
              ),
              at = Ye.bAllowNext || Ye.bAllowPrev;
            let rt = "";
            if (
              (Ae.cMaxToReturn > 0
                ? (rt = (0, G.we)("#SeeAllButton"))
                : Ae.cTotalMatching > 0
                  ? (rt = (0, G.we)(
                      "#SeeAllWithCountButton",
                      (0, Q.D)(Ae.cTotalMatching),
                    ))
                  : (rt = (0, G.we)("#SeeAllButton")),
              Ae.cTotalMatching === 0 && !Ae.bLoadingMore)
            )
              return null;
            const Xe = !at || !je,
              ge = !Ee && Xe && qe(Ae);
            let Ge = [],
              it = [];
            return (
              !Xe &&
                Ge.push(
                  (0, e.jsx)(
                    L.N_,
                    { to: je, children: (0, e.jsx)(B.rA, { children: rt }) },
                    "SeeAll",
                  ),
                ),
              at && it.push((0, e.jsx)(Ne, { ...Ye }, "CarouselControls")),
              ge &&
                (it.length == 0 ? it.push(ge) : Ge.length == 0 && Ge.push(ge)),
              (0, e.jsx)(B.Gq, {
                title: C,
                subtitle: Me,
                leftActions: Ge,
                rightActions: it,
                children: (0, e.jsx)(le, {
                  style: { width: "100%", flexWrap: "wrap" },
                  ...Ye,
                }),
              })
            );
          }),
          Le = (0, u.PA)((te) => {
            const {
              descriptor: {
                title: C,
                subtitle: Me,
                cluster: { id: je, title: Ie, subtitle: Ee, GetRewards: ce },
              },
              additionalFilter: Ae,
            } = te;
            let Ye = (Xe, ge) => ce(Xe, ge, Ae),
              at = Ye(0, 0);
            const rt = qe(at);
            return (0, e.jsx)(B.Gq, {
              title: C || Ie,
              subtitle: Me || Ee,
              rightActions: rt || void 0,
              children: (0, e.jsx)(
                O.n,
                {
                  style: { width: "100%" },
                  itemClassName: y.ItemHover,
                  getItems: Ye,
                  renderItem: (Xe) =>
                    (0, e.jsx)(k, { definition: Xe }, Xe.defid),
                  renderItemSkeleton: () => (0, e.jsx)(v.sc, {}),
                },
                `${je}||${JSON.stringify(Ae)}`,
              ),
            });
          }),
          We = (0, u.PA)((te) => {
            const { descriptor: C, additionalFilter: Me, linkedPage: je } = te,
              Ie = (0, Be.h)("(min-width: 1070px)");
            if (C.type !== h.T0)
              return (
                console.error(
                  `Attempt to render a hero cluster with a non-hero view. Cluster ${C.cluster.id}`,
                ),
                null
              );
            const {
                strImage: Ee,
                bFullBleedImage: ce,
                theme: Ae,
                title: Ye,
                subtitle: at,
                cluster: { title: rt, subtitle: Xe, GetRewards: ge },
              } = C,
              Ge = je ? (0, h.bp)(je) : void 0,
              ut = ge(0, Ie ? 4 : 3, Me),
              $ =
                ut.bLoadingMore && ut.rewards.length === 0
                  ? [
                      (0, e.jsx)(v.sc, {}, "0"),
                      (0, e.jsx)(v.sc, {}, "1"),
                      (0, e.jsx)(v.sc, {}, "2"),
                    ]
                  : ut.rewards.map((ie) =>
                      (0, e.jsx)(k, { definition: ie, theme: Ae }, ie.defid),
                    );
            return (0, e.jsx)(B.Gq, {
              children: (0, e.jsx)(Z, {
                title: Ye || rt,
                description: at || Xe,
                imgSrc: Ee,
                fullbleed: ce,
                style: { width: "100%" },
                itemClassName: y.ItemHover,
                actions: (0, e.jsx)(L.N_, {
                  to: Ge,
                  children: (0, e.jsx)(ae, {
                    theme: Ae,
                    children: (0, G.we)("#SeeAllButton"),
                  }),
                }),
                children: $,
              }),
            });
          }),
          ke = (0, u.PA)((te) => {
            const { descriptor: C, additionalFilter: Me, linkedPage: je } = te,
              Ie = (0, S.W6)();
            if (C.type !== h.T0)
              return (
                console.error(
                  `Attempt to render a hero cluster with a non-hero view. Cluster ${C.cluster.id}`,
                ),
                null
              );
            const {
                strImage: Ee,
                bFullBleedImage: ce,
                theme: Ae,
                title: Ye,
                subtitle: at,
                cluster: { title: rt, subtitle: Xe, GetRewards: ge },
              } = C,
              Ge = je ? (0, h.bp)(je) : void 0,
              it = () => Ie.push(Ge);
            return (0, e.jsx)(B.Gq, {
              children: (0, e.jsx)(Z, {
                title: Ye || rt,
                description: "",
                imgSrc: Ee,
                fullbleed: ce,
                style: { width: "100%" },
                itemClassName: y.ItemHover,
                actions: (0, e.jsx)(L.N_, {
                  to: Ge,
                  children: (0, e.jsx)(ae, {
                    onClick: it,
                    theme: Ae,
                    className: y.MobileHeroAction,
                    children: (0, G.we)("#SeeAllButton"),
                  }),
                }),
                children: (0, e.jsx)(I, {
                  items: ge(0, 6, Me).rewards,
                  loadMore: () => {},
                  renderItem: (ut) =>
                    (0, e.jsx)(k, { definition: ut, theme: Ae }, ut.defid),
                }),
              }),
            });
          }),
          k = (te) => {
            const { definition: C, theme: Me } = te,
              je = (0, S.W6)(),
              Ie = (Ee) => {
                C.type === P.kT.Mj || C.type === P.kT.Wy
                  ? je.push(A.B.LoyaltyItemBundle(C.defid))
                  : (0, oe.U$)(Ee, C);
              };
            return (0, e.jsx)(v.Fo, { definition: C, onClick: Ie, theme: Me });
          };
      },
      17687: (W, E, s) => {
        "use strict";
        s.d(E, { T: () => L, y: () => h });
        var e = s(7850),
          m = s(36707),
          u = s(97041),
          S = s.n(u);
        const L = ({ src: F }) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: u.BackgroundFadeImage,
                  style: { backgroundImage: `url(${F})` },
                }),
                (0, e.jsx)("div", {
                  className: u.BackgroundFadeImageBlurred,
                  style: { backgroundImage: `url(${F})` },
                }),
                (0, e.jsx)("div", { className: u.BackgroundFade }),
              ],
            }),
          h = ({ theme: F }) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, m.A)(u.BackgroundFadeTheme, F),
                }),
                (0, e.jsx)("div", {
                  className: (0, m.A)(u.BackgroundFadeThemeBlurred, F),
                }),
                (0, e.jsx)("div", { className: u.BackgroundFade }),
              ],
            });
      },
      95509: (W, E, s) => {
        "use strict";
        s.d(E, { B9: () => h, Bb: () => F, eM: () => _ });
        var e = s(7850),
          m = s(89955),
          u = s.n(m),
          S = s(36707),
          L = s(19298);
        const h = (a) => {
            const { className: w, children: c, onClick: f, ...j } = a;
            return (0, e.jsxs)(L.Z, {
              className: (0, S.A)(m.ItemBox, w),
              focusable: !0,
              onActivate: f,
              ...j,
              children: [
                (0, e.jsx)("div", {
                  className: (0, S.A)(m.NoBackdropSupportBackdrop),
                }),
                c,
              ],
            });
          },
          F = (a) => {
            const { className: w, ...c } = a;
            return (0, e.jsx)("div", { className: (0, S.A)(m.Body, w), ...c });
          },
          _ = (a) => {
            const { className: w, ...c } = a;
            return (0, e.jsx)("div", {
              className: (0, S.A)(m.Footer, w),
              ...c,
            });
          };
      },
      23903: (W, E, s) => {
        "use strict";
        s.d(E, {
          BJ: () => c,
          Kt: () => B,
          OM: () => I,
          Th: () => Se,
          WH: () => ue,
          Yp: () => n,
          az: () => a,
          cV: () => w,
          mG: () => M,
          tv: () => ee,
          xC: () => R,
        });
        var e = s(7850),
          m = s(90626),
          u = s(4399),
          S = s.n(u),
          L = s(36707),
          h = s(19298),
          F = s(27126),
          _ = s(3166);
        const a = (0, m.forwardRef)(function (P, O) {
            const {
                component: U,
                padding: Y,
                paddingX: Z,
                paddingY: ae,
                paddingRight: V,
                paddingLeft: oe,
                paddingTop: G,
                paddingBottom: y,
                margin: A,
                marginX: me,
                marginY: de,
                marginLeft: Be,
                marginTop: Q,
                marginRight: re,
                marginBottom: ye,
                display: he,
                flexDirection: D,
                flexWrap: Ce,
                justifyContent: qe,
                alignItems: ze,
                flexGrow: Fe,
                flexShrink: He,
                flexBasis: Ze,
                flex: T,
                className: Le,
                style: We,
                ...ke
              } = P,
              k = (0, L.A)(
                Se("padding-left", oe || Z || Y),
                Se("padding-top", G || ae || Y),
                Se("padding-right", V || Z || Y),
                Se("padding-bottom", y || ae || Y),
                Se("margin-left", Be || me || A),
                Se("margin-top", Q || de || A),
                Se("margin-right", re || me || A),
                Se("margin-bottom", ye || de || A),
                Le,
              ),
              te = {
                display: he,
                flexDirection: D,
                flexWrap: Ce,
                justifyContent: qe,
                alignItems: ze,
                flexGrow: Fe,
                flexShrink: He,
                flexBasis: Ze,
                flex: T,
                ...We,
              },
              C = { className: k, style: te, ref: O, ...ke };
            if (U) {
              const Me = U;
              return (0, e.jsx)(Me, { ...C });
            }
            return (0, e.jsx)(h.Z, { className: k, style: te, ref: O, ...ke });
          }),
          w = (0, m.forwardRef)(function (P, O) {
            const {
                children: U,
                style: Y,
                spacing: Z,
                horizontalSpacing: ae,
                verticalSpacing: V,
                itemClassName: oe,
                "flow-children": G = "row",
                ...y
              } = P,
              A = M(),
              me = A.spacing[ee(ae || Z || "none")],
              de = A.spacing[ee(V || Z || "none")];
            return (0, e.jsx)(h.Z, {
              "flow-children": G,
              ref: O,
              style: { ...(Y || {}), marginTop: f(-de) },
              ...y,
              children: (0, e.jsx)("div", {
                style: { marginLeft: f(-me) },
                className: u.InlineContainer,
                children: m.Children.map(U, (Be) =>
                  Be != null
                    ? (0, e.jsx)(a, {
                        paddingLeft: ae || Z,
                        paddingTop: V || Z,
                        className: oe,
                        children: Be,
                      })
                    : null,
                ),
              }),
            });
          }),
          c = (0, m.forwardRef)(function (P, O) {
            const {
                spacing: U,
                itemClassName: Y,
                children: Z,
                className: ae,
                ...V
              } = P,
              oe = m.Children.count(Z);
            return (0, e.jsx)(h.Z, {
              "flow-children": "column",
              ref: O,
              className: ae,
              ...V,
              children: m.Children.map(Z, (G, y) =>
                G != null
                  ? (0, e.jsx)(a, {
                      paddingBottom: y !== oe - 1 ? U : void 0,
                      className: (0, L.A)(Y, u.RemoveOnEmpty),
                      children: G,
                    })
                  : null,
              ),
            });
          }),
          f = (v) => `${v}px`,
          j = {
            spacing: {
              none: 0,
              xxsmall: 4,
              xsmall: 8,
              small: 12,
              medium: 20,
              large: 32,
              xlarge: 48,
              xxlarge: 96,
              xxxlarge: 192,
            },
            breakpoint: { mobile: 0, tablet: 740, desktop: 965 },
          },
          x = (0, m.createContext)(j),
          M = () => (0, m.useContext)(x),
          n = (v) => {
            const { config: P, children: O } = v,
              U = P || j,
              Y = (0, m.useMemo)(() => le(U), [U]),
              [Z, ae] = (0, m.useState)(0);
            return (
              (0, m.useLayoutEffect)(() => {
                ae((V) => V + 1);
              }, [Y]),
              (0, e.jsxs)(m.Fragment, {
                children: [(0, e.jsx)("style", { children: Y }), O],
              })
            );
          };
        function le(v) {
          return [
            "padding",
            "padding-top",
            "padding-bottom",
            "padding-right",
            "padding-left",
            "margin",
            "margin-left",
            "margin-top",
            "margin-right",
            "margin-bottom",
          ]
            .map((O) =>
              Object.keys(v.spacing)
                .map((U) => De(O, U, v.spacing[U]))
                .join(`
`),
            )
            .join(`
`);
        }
        const Ne = (v, P) => `${v}-${P}`,
          De = (v, P, O) => `.${Ne(v, P)} { ${v}: ${O}px; }`,
          Se = (v, P) => {
            const O = ee(P);
            return P ? Ne(v, O) : "";
          };
        function ue(v) {
          const P = M(),
            O = ee(v);
          return (v && P.spacing[O]) || 0;
        }
        function ee(v) {
          const P = R();
          return Array.isArray(v)
            ? v[
                Math.min(
                  P === "desktop" ? 2 : P === "tablet" ? 1 : 0,
                  v.length - 1,
                )
              ]
            : v;
        }
        function R() {
          const {
              breakpoint: { tablet: v, desktop: P },
            } = M(),
            O = (0, F.h)(`(min-width: ${v}px)`),
            U = (0, F.h)(`(min-width: ${P}px)`);
          return (0, _.Qn)()
            ? "mobile"
            : U
              ? "desktop"
              : O
                ? "tablet"
                : "mobile";
        }
        function I(v) {
          return v.children(R());
        }
        function B(v) {
          return (0, e.jsx)(a, { component: h.Z, ...v });
        }
      },
      47653: (W, E, s) => {
        "use strict";
        s.d(E, { R: () => u });
        var e = s(7850),
          m = s(85705);
        function u(S) {
          const { size: L } = S;
          return (0, e.jsx)(m.k, { size: L });
        }
      },
      54722: (W, E, s) => {
        "use strict";
        s.d(E, { Y: () => _ });
        var e = s(7850),
          m = s(36707),
          u = s(89266),
          S = s.n(u),
          L = s(18210),
          h = s(36118),
          F = s(19730);
        const _ = (a) => {
          const { amount: w, className: c, size: f, ...j } = a,
            x = w > 0 ? (0, F.Dq)(w) : (0, L.we)("#Rewards_Free");
          return (0, e.jsxs)("div", {
            className: (0, m.A)(u.Container, c),
            ...j,
            children: [
              (0, e.jsx)(h.vrn, { className: u.Icon }),
              (0, e.jsxs)("div", {
                className: u.Amount,
                style: f ? { fontSize: `${f}rem` } : void 0,
                children: [x, a.children],
              }),
            ],
          });
        };
      },
      57585: (W, E, s) => {
        "use strict";
        s.d(E, { L: () => c, X: () => w });
        var e = s(7850),
          m = s(19298),
          u = s(37939),
          S = s(90626),
          L = s(51079),
          h = s(36707),
          F = s(6708),
          _ = s.n(F),
          a = s(23903);
        function w(f) {
          const { children: j } = f,
            x = S.useRef(null);
          return (
            S.useEffect(() => {
              x.current && x.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(a.Yp, {
              children: (0, e.jsx)(m.Z, {
                className: (0, h.A)(F.Shell),
                navRef: x,
                children: (0, e.jsx)(L.Ay, {
                  domain: "store.steampowered.com",
                  feature: "pointsshop",
                  children: (0, e.jsx)(a.az, {
                    display: "flex",
                    flexDirection: "row",
                    className: F.ShellScrollParent,
                    children: (0, e.jsx)(a.az, {
                      flex: "1",
                      className: F.ShellScroll,
                      "flow-children": "column",
                      children: j,
                    }),
                  }),
                }),
              }),
            })
          );
        }
        function c(f) {
          (0, S.useEffect)(
            () => (
              u.DZ.Get().SetCurrentSearchPlaceholder(f),
              () => u.DZ.Get().SetCurrentSearchPlaceholder("")
            ),
            [f],
          );
        }
      },
      96986: (W, E, s) => {
        "use strict";
        s.d(E, {
          Aq: () => I,
          CF: () => j,
          Fq: () => _,
          GP: () => a,
          Ji: () => w,
          Js: () => x,
          Kd: () => L,
          Nu: () => Y,
          R2: () => v,
          RE: () => oe,
          VO: () => f,
          W_: () => Ne,
          Wr: () => R,
          X$: () => B,
          XR: () => F,
          Z1: () => P,
          eu: () => h,
          j2: () => S,
          jm: () => O,
          jw: () => De,
          kh: () => Se,
          qY: () => ae,
          sC: () => ee,
          wK: () => u,
          xh: () => M,
        });
        var e = s(7850),
          m = s(36707);
        const u = (G) =>
            (0, e.jsx)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...G,
              children: (0, e.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
              }),
            }),
          S = (G) =>
            (0, e.jsx)("svg", {
              width: 30,
              height: 30,
              viewBox: "0 0 30 30",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...G,
              children: (0, e.jsx)("path", {
                d: "M15.2305 28.1415L15.2305 15.621L15.2305 3.10029C8.31552 3.10029 2.70984 8.70596 2.70984 15.6209C2.70984 22.5359 8.31552 28.1415 15.2305 28.1415ZM30.2305 15.6209C30.2305 23.9052 23.5147 30.6209 15.2305 30.6209C6.9462 30.6209 0.230469 23.9052 0.230469 15.6209C0.230469 7.33664 6.9462 0.620911 15.2305 0.620911C23.5147 0.620911 30.2305 7.33664 30.2305 15.6209Z",
                fill: "#5B7E0F",
              }),
            });
        function L(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            width: "61px",
            height: "52px",
            viewBox: "0 0 61 52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M31.327 0.622074L31.0027 0.341797L30.6762 0.619372L7.67619 20.1694L0.676186 26.1194C0.465782 26.2982 0.440197 26.6138 0.61904 26.8242C0.797884 27.0346 1.11343 27.0602 1.32383 26.8813L7.50001 21.6316V49.0003C7.50001 50.3811 8.6193 51.5003 10 51.5003H51.5C52.8807 51.5003 54 50.3811 54 49.0003V21.5426L60.173 26.8786C60.3819 27.0592 60.6977 27.0362 60.8783 26.8273C61.0589 26.6184 61.0359 26.3027 60.827 26.1221L53.827 20.0712L31.327 0.622074ZM8.50001 49.0003V20.7816L30.9973 1.65889L53 20.6782V49.0003C53 49.8288 52.3284 50.5003 51.5 50.5003H38.5V32.0003C38.5 30.6196 37.3807 29.5003 36 29.5003H26C24.6193 29.5003 23.5 30.6196 23.5 32.0003V50.5003H10C9.17158 50.5003 8.50001 49.8288 8.50001 49.0003ZM24.5 50.5003H37.5V32.0003C37.5 31.1719 36.8284 30.5003 36 30.5003H26C25.1716 30.5003 24.5 31.1719 24.5 32.0003V50.5003Z",
              fill: "",
            }),
          });
        }
        function h(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            width: "47px",
            height: "51px",
            viewBox: "0 0 47 51",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M33.9999 10.5C33.9999 15.7034 29.5671 20 23.9999 20C18.4327 20 13.9999 15.7034 13.9999 10.5C13.9999 5.29663 18.4327 1 23.9999 1C29.5671 1 33.9999 5.29663 33.9999 10.5ZM34.9999 10.5C34.9999 16.299 30.075 21 23.9999 21C17.9247 21 12.9999 16.299 12.9999 10.5C12.9999 4.70101 17.9247 0 23.9999 0C30.075 0 34.9999 4.70101 34.9999 10.5ZM16.3702 23.5C10.6886 23.5 5.62398 26.8717 3.72868 32.2547C2.47599 35.8127 1.26935 39.3781 0.768536 40.866C0.549738 41.516 0.803538 42.2172 1.36831 42.5884L4.65592 44.7495C16.463 52.5107 31.809 52.2879 43.3858 44.1873L45.6833 42.5797C46.2215 42.2031 46.452 41.5201 46.2522 40.8944L43.9193 33.5891C42.0002 27.5792 36.4154 23.5 30.1065 23.5H24.2027H16.3702ZM4.67193 32.5868C6.41799 27.6277 11.0872 24.5 16.3702 24.5H24.2027H30.1065C35.9803 24.5 41.1799 28.2979 42.9667 33.8933L45.2996 41.1986C45.3662 41.4072 45.2893 41.6348 45.1099 41.7604L42.8125 43.368C31.5712 51.2338 16.67 51.4501 5.20521 43.9139L1.9176 41.7528C1.72419 41.6257 1.64564 41.3949 1.71629 41.185C2.21655 39.6988 3.42149 36.1384 4.67193 32.5868Z",
              fill: "",
            }),
          });
        }
        function F(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            width: "49px",
            height: "58px",
            viewBox: "0 0 49 58",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24.5 12C27.5376 12 30 9.53757 30 6.5C30 3.46243 27.5376 1 24.5 1C21.4624 1 19 3.46243 19 6.5C19 9.53757 21.4624 12 24.5 12ZM24.5 13C26.1149 13 27.5923 12.411 28.7291 11.4362L38.2929 21H11.2071L20.5469 11.6602C21.6422 12.5005 23.0128 13 24.5 13ZM9.79289 21L19.8014 10.9915C18.6855 9.8244 18 8.24225 18 6.5C18 2.91015 20.9101 0 24.5 0C28.0899 0 31 2.91015 31 6.5C31 8.11495 30.411 9.59234 29.4362 10.7291L39.7071 21H40H45C46.933 21 48.5 22.567 48.5 24.5V54C48.5 55.933 46.933 57.5 45 57.5H4C2.067 57.5 0.5 55.933 0.5 54V24.5C0.5 22.567 2.067 21 4 21H8H9.79289ZM8 22H4C2.61929 22 1.5 23.1193 1.5 24.5V54C1.5 55.3807 2.61929 56.5 4 56.5H45C46.3807 56.5 47.5 55.3807 47.5 54V24.5C47.5 23.1193 46.3807 22 45 22H40H39.5H39.2929H10.2071H10H8ZM10.5 29C9.11929 29 8 30.1193 8 31.5V48C8 49.3807 9.11929 50.5 10.5 50.5H37.5C38.8807 50.5 40 49.3807 40 48V31.5C40 30.1193 38.8807 29 37.5 29H10.5ZM9 31.5C9 30.6716 9.67157 30 10.5 30H37.5C38.3284 30 39 30.6716 39 31.5V48C39 48.8284 38.3284 49.5 37.5 49.5H10.5C9.67157 49.5 9 48.8284 9 48V31.5Z",
              fill: "",
            }),
          });
        }
        function _(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...A,
            children: (0, e.jsx)("path", {
              fill: "none",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2 9H34V27H2V9ZM5 13H7V15H5V13ZM7 21H5V23H7V21ZM5 17H9V19H5V17ZM11 13H9V15H11V13ZM9 21H27V23H9V21ZM15 13H13V15H15V13ZM11 17H13V19H11V17ZM19 13H17V15H19V13ZM15 17H17V19H15V17ZM21 17H19V19H21V17ZM21 13H23V15H21V13ZM25 17H23V19H25V17ZM25 13H27V15H25V13ZM31 13H29V15H31V13ZM29 21H31V23H29V21ZM31 17H27V19H31V17Z",
            }),
          });
        }
        function a(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            width: "64",
            height: "62",
            viewBox: "0 0 64 62",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.68889 0H58.3111C61.44 0 64 2.56 64 5.68889V18.8444H0V5.68889C0 2.56 2.56 0 5.68889 0ZM17.2302 12.7289C17.8183 12.7289 18.2969 12.2503 18.2969 11.6622V6.82667C18.2969 6.23858 17.8183 5.76 17.2302 5.76H7.98578C7.39769 5.76 6.91911 6.23858 6.91911 6.82667V11.6622C6.91911 12.2503 7.39769 12.7289 7.98578 12.7289H17.2302ZM36.6222 12.7289C37.2103 12.7289 37.6889 12.2503 37.6889 11.6622V6.82667C37.6889 6.23858 37.2103 5.76 36.6222 5.76H27.3778C26.7897 5.76 26.3111 6.23858 26.3111 6.82667V11.6622C26.3111 12.2503 26.7897 12.7289 27.3778 12.7289H36.6222ZM56.0142 12.7289C56.603 12.7289 57.0809 12.2503 57.0809 11.6622V6.82667C57.0809 6.23858 56.603 5.76 56.0142 5.76H46.7698C46.1824 5.76 45.7031 6.23858 45.7031 6.82667V11.6622C45.7031 12.2503 46.1824 12.7289 46.7698 12.7289H56.0142ZM5.68889 61.8667C2.56 61.8667 0 59.3067 0 56.1778V22.4H64V56.1778C64 59.3067 61.44 61.8667 58.3111 61.8667H5.68889ZM26.5202 29.9164C24.7673 28.9422 23.3323 29.7856 23.3323 31.7916V48.5639C23.3323 50.5714 24.7666 51.4133 26.5202 50.4391L41.1669 42.3033C43.2697 41.1342 43.2697 39.222 41.1669 38.053L26.5202 29.9164Z",
              fill: "",
            }),
          });
        }
        function w(G) {
          const { className: y, ...A } = G;
          return (0, e.jsxs)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            width: "51px",
            height: "56px",
            viewBox: "0 0 51 56",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M43.2109 6.95H7.21094C4.00769 6.95 1.41094 9.54675 1.41094 12.75V48.6496C1.41094 51.8528 4.00769 54.4496 7.21094 54.4496H43.2109C46.4142 54.4496 49.0109 51.8528 49.0109 48.6496V12.75C49.0109 9.54675 46.4142 6.95 43.2109 6.95ZM7.21094 5.75C3.34494 5.75 0.210938 8.88401 0.210938 12.75V48.6496C0.210938 52.5156 3.34494 55.6496 7.21094 55.6496H43.2109C47.0769 55.6496 50.2109 52.5156 50.2109 48.6496V12.75C50.2109 8.88401 47.0769 5.75 43.2109 5.75H7.21094Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M50.2109 17.875H0.210938V16.675H50.2109V17.875Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M27.3491 29.4463L25.9645 25.5785C25.7114 24.8714 24.7113 24.8714 24.4581 25.5785L23.0735 29.4463C22.6297 30.6861 21.4717 31.5275 20.1555 31.5664L16.0491 31.688C15.2983 31.7103 14.9893 32.6614 15.5836 33.1207L18.8342 35.6327C19.8762 36.4379 20.3185 37.7992 19.9488 39.0631L18.7956 43.0061C18.5847 43.727 19.3938 44.3148 20.0142 43.8915L23.4079 41.5762C24.4956 40.8341 25.927 40.8341 27.0148 41.5762L30.4084 43.8915C31.0288 44.3148 31.8379 43.727 31.6271 43.0061L30.4738 39.0631C30.1041 37.7992 30.5464 36.4379 31.5884 35.6327L34.839 33.1207C35.4334 32.6614 35.1243 31.7103 34.3735 31.688L30.2672 31.5664C28.9509 31.5275 27.7929 30.6861 27.3491 29.4463ZM27.0943 25.1741C26.4614 23.4062 23.9612 23.4062 23.3283 25.1741L21.9437 29.0419C21.6663 29.8168 20.9426 30.3426 20.1199 30.367L16.0136 30.4886C14.1366 30.5441 13.364 32.922 14.8498 34.0702L18.1005 36.5823C18.7517 37.0855 19.0281 37.9363 18.7971 38.7262L17.6438 42.6692C17.1167 44.4715 19.1394 45.9411 20.6905 44.8828L24.0841 42.5675C24.764 42.1037 25.6586 42.1037 26.3385 42.5675L29.7321 44.8828C31.2832 45.9411 33.306 44.4715 32.7788 42.6692L31.6255 38.7262C31.3945 37.9363 31.6709 37.0855 32.3221 36.5823L35.5728 34.0702C37.0586 32.922 36.286 30.5441 34.409 30.4886L30.3027 30.367C29.48 30.3426 28.7563 29.8168 28.4789 29.0419L27.0943 25.1741Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.4922 9.125V0.0268555L17.6922 0.0268555L17.6922 9.125H16.4922Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.0234 13.2063C17.8795 13.2063 18.5734 12.5123 18.5734 11.6562C18.5734 10.8002 17.8795 10.1062 17.0234 10.1062C16.1674 10.1062 15.4734 10.8002 15.4734 11.6562C15.4734 12.5123 16.1674 13.2063 17.0234 13.2063ZM17.0234 14.4062C18.5422 14.4062 19.7734 13.175 19.7734 11.6562C19.7734 10.1375 18.5422 8.90625 17.0234 8.90625C15.5047 8.90625 14.2734 10.1375 14.2734 11.6562C14.2734 13.175 15.5047 14.4062 17.0234 14.4062Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32.8672 9.125V0.0268555L34.0672 0.0268555V9.125H32.8672Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M33.3984 13.2063C34.2545 13.2063 34.9484 12.5123 34.9484 11.6562C34.9484 10.8002 34.2545 10.1062 33.3984 10.1062C32.5424 10.1062 31.8484 10.8002 31.8484 11.6562C31.8484 12.5123 32.5424 13.2063 33.3984 13.2063ZM33.3984 14.4062C34.9172 14.4062 36.1484 13.175 36.1484 11.6562C36.1484 10.1375 34.9172 8.90625 33.3984 8.90625C31.8797 8.90625 30.6484 10.1375 30.6484 11.6562C30.6484 13.175 31.8797 14.4062 33.3984 14.4062Z",
                fill: "",
              }),
            ],
          });
        }
        function c(G) {
          const { className: y, ...A } = G;
          return jsx("svg", {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 52 46.1",
            className: classnames(y, "SVGIcon_Button"),
            children: jsx("path", {
              d: `M49.3,41.6l-19.6-20l9.8-9.6c0.6,0.1,1.2,0.1,1.7-0.1c1.6-0.4,2.8-1.8,3.4-3.8c0.6-2.1,2-3.6,3.1-4.1
		c0.5-0.2,0.9-0.3,1.2-0.2c0.4,0.2,0.8,0,1-0.4c0.2-0.4,0-0.8-0.4-1c-2.1-1-3.9-1.5-5.7-1.5c-1.8,0-3.5,0.6-5.1,1.7
		c-2,1.5-3.1,3-3.2,4.6c0,0.3,0,0.5,0,0.8L26,17.9l-9.6-9.8c0-0.3,0.1-0.5,0-0.8c-0.1-1.6-1.2-3.1-3.2-4.6C11.7,1.5,10,0.9,8.2,0.9
		c-1.7,0-3.6,0.5-5.7,1.5C2.2,2.7,2,3.1,2.2,3.5c0.2,0.4,0.6,0.6,1,0.4c0.3-0.1,0.7,0,1.2,0.2c1.1,0.5,2.5,2,3.1,4.1
		c0.6,2,1.8,3.3,3.4,3.8c0.6,0.2,1.2,0.2,1.7,0.1l9.8,9.6l-19.6,20c-0.9,0.9-0.9,2.3,0,3.2c0.9,0.9,2.3,0.9,3.2,0l20-19.6
		c-0.1-0.1-0.3-0.3-0.4-0.4l20.5,20c0.9,0.9,2.3,0.9,3.2,0C50.1,43.9,50.1,42.5,49.3,41.6z M39.7,3.9c1.4-1.1,3.5-2.1,6.9-1
		c-1.6,1-2.9,2.8-3.5,4.8c-0.4,1.4-1.2,2.4-2.3,2.7c-0.4,0.1-0.9,0.1-1.3,0c0,0,0,0-0.1,0c-0.4-0.1-0.7-0.3-1.1-0.6
		c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0-0.1-0.1c-0.3-0.4-0.5-0.8-0.7-1.2c0,0,0,0,0,0
		c-0.1-0.2-0.1-0.5-0.1-0.7C37.2,6.3,38,5.1,39.7,3.9z M36.2,9.7C36.2,9.7,36.2,9.7,36.2,9.7c0.1,0.2,0.2,0.4,0.4,0.5
		c0,0,0.1,0.1,0.1,0.1c0.1,0.2,0.3,0.3,0.5,0.5c0,0,0,0,0,0c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1
		l-1.3,1.3L34.9,11L36.2,9.7z M33.9,12.1l1.7,1.7l-6.9,6.8L27.1,19L33.9,12.1z M13.8,9.7c-0.1,0.1-0.1,0.1-0.2,0.1
		c-0.3,0.3-0.7,0.5-1.1,0.6c0,0,0,0-0.1,0c-0.4,0.1-0.9,0.1-1.3,0c-1-0.3-1.9-1.3-2.3-2.7C8.4,5.7,7,3.9,5.5,2.9
		c3.4-1.1,5.5-0.1,6.9,1c1.6,1.2,2.5,2.4,2.6,3.5c0,0.2,0,0.5-0.1,0.7c0,0,0,0,0,0c-0.1,0.4-0.3,0.8-0.7,1.2c0,0,0,0-0.1,0.1
		C14,9.4,13.9,9.5,13.8,9.7C13.8,9.7,13.8,9.7,13.8,9.7z M14.1,11.4c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1
		c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.2-0.2,0.3-0.3,0.5-0.5c0,0,0.1-0.1,0.1-0.1c0.1-0.2,0.3-0.3,0.4-0.5c0,0,0,0,0,0l1.3,1.3
		l-1.7,1.7L14.1,11.4z M4.9,43.7c-0.3,0.3-0.7,0.3-1,0c-0.3-0.3-0.3-0.7,0-1l19.6-20l1.5,1.4L4.9,43.7z M48.2,43.7
		c-0.3,0.3-0.7,0.3-1,0l-30.6-30l1.7-1.7l30,30.6C48.4,43,48.4,43.5,48.2,43.7z`,
            }),
          });
        }
        function f(G) {
          const { className: y, ...A } = G;
          return (0, e.jsxs)("svg", {
            fill: "none",
            width: "68",
            height: "68",
            viewBox: "0 0 68 68",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, m.A)(y, "SVGIcon_Button"),
            ...A,
            children: [
              (0, e.jsx)("path", {
                d: "M57.2981 10.8369L56.9021 9.61803C56.3034 7.77541 53.6966 7.77541 53.0979 9.61803L52.7019 10.8369H51.4203C49.4828 10.8369 48.6773 13.3161 50.2447 14.4549L51.2815 15.2082L50.8855 16.4271C50.2868 18.2697 52.3958 19.8019 53.9632 18.6631L55 17.9098L56.0368 18.6631C57.6042 19.8019 59.7132 18.2697 59.1145 16.4271L58.7185 15.2082L59.7553 14.4549C61.3227 13.3161 60.5172 10.8369 58.5797 10.8369L57.2981 10.8369Z",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "2",
              }),
              (0, e.jsx)("rect", {
                x: "1",
                y: "1",
                width: "66",
                height: "66",
                rx: "9",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "2",
              }),
              (0, e.jsx)("rect", {
                x: "7",
                y: "7",
                width: "14",
                height: "14",
                rx: "3",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "2",
              }),
              (0, e.jsx)("rect", {
                x: "7",
                y: "26",
                width: "54",
                height: "14",
                rx: "3",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "2",
              }),
              (0, e.jsx)("rect", {
                x: "7",
                y: "46",
                width: "54",
                height: "14",
                rx: "3",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "2",
              }),
              (0, e.jsx)("line", {
                x1: "26",
                y1: "17",
                x2: "39",
                y2: "17",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
              (0, e.jsx)("line", {
                x1: "26",
                y1: "12",
                x2: "45",
                y2: "12",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          });
        }
        function j(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 52 46.1",
            children: (0, e.jsx)("path", {
              d: "M51.5,40.2l-6.8-11.7c2.4-2,3.9-5,3.9-8.4c0-6.1-4.9-11-11-11c-1.3,0-2.5,0.2-3.7,0.6L29.4,2c-0.7-1.2-2-2-3.4-2s-2.7,0.7-3.4,2l-4.1,7.1H6.6v20.6l-6,10.5c-0.7,1.2-0.7,2.7,0,4c0.7,1.2,2,2,3.4,2H48c1.4,0,2.7-0.7,3.4-2C52.2,42.9,52.2,41.4,51.5,40.2z M46.6,20.1c0,5-4,9-9,9s-9-4-9-9s4-9,9-9S46.6,15.1,46.6,20.1z M8.6,11.1h8.7L8.6,26.2V11.1zM49.7,43.1c-0.4,0.6-1,1-1.7,1H4c-0.7,0-1.3-0.4-1.7-1c-0.4-0.6-0.4-1.3,0-2L24.3,3c0.4-0.6,1-1,1.7-1s1.3,0.4,1.7,1l4.4,7.6c-3.3,1.9-5.5,5.5-5.5,9.5c0,6.1,4.9,11,11,11c2,0,3.9-0.5,5.5-1.5l6.7,11.5C50.1,41.8,50.1,42.5,49.7,43.1z",
            }),
          });
        }
        function x(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            width: "64px",
            height: "54px",
            viewBox: "0 0 64 54",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4 0C1.79086 0 0 1.79086 0 4V50C0 52.2091 1.79086 54 4 54H11H53H60C62.2091 54 64 52.2091 64 50V4C64 1.79086 62.2091 0 60 0H53H11H4ZM11 2V52H53V2H11ZM8 25H3V29.8H8V25ZM3 15H8V19.8H3V15ZM8 6H3V10.8H8V6ZM3 34.5996H8V39.3996H3V34.5996ZM8 44.2002H3V49.0002H8V44.2002ZM39.8603 17.535C39.8603 21.0291 36.8085 24.0701 32.7786 24.0701C28.7487 24.0701 25.6969 21.0291 25.6969 17.535C25.6969 14.041 28.7487 11 32.7786 11C36.8085 11 39.8603 14.041 39.8603 17.535ZM41.8603 17.535C41.8603 22.2488 37.7943 26.0701 32.7786 26.0701C27.7629 26.0701 23.6969 22.2488 23.6969 17.535C23.6969 12.8213 27.7629 9 32.7786 9C37.7943 9 41.8603 12.8213 41.8603 17.535ZM30.4484 27.5466C24.6389 27.5466 19.3689 30.9432 17.364 36.4652C16.8368 37.9173 16.3885 39.1885 16.1121 39.9794C15.773 40.9495 16.227 42.0134 17.1535 42.4456L17.9794 42.831C27.4793 47.2632 38.4824 47.1178 47.8618 42.4361C48.7479 41.9938 49.1714 40.9651 48.8535 40.0271L48.0754 37.7315C46.0118 31.6431 40.2979 27.5466 33.8692 27.5466H33.0013H30.4484ZM19.2439 37.1478C20.9397 32.4771 25.4141 29.5466 30.4484 29.5466H33.0013H33.8692C39.4407 29.5466 44.3928 33.0969 46.1812 38.3735L46.9541 40.6538C38.1237 45.056 27.7672 45.1905 18.825 41.0185L18.0018 40.6344C18.2765 39.8484 18.7212 38.5873 19.2439 37.1478ZM61 25H56V29.8H61V25ZM56 15H61V19.8H56V15ZM61 6H56V10.8H61V6ZM56 34.5996H61V39.3996H56V34.5996ZM61 44.2002H56V49.0002H61V44.2002Z",
              fill: "",
            }),
          });
        }
        function M(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            width: "61px",
            height: "66px",
            viewBox: "0 0 61 66",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M58 2H3C2.44772 2 2 2.44772 2 3V49.9671L14.44 40.7192L15.0898 40.2361L15.6975 40.7713L21.5338 45.911L40.422 28.2692L41.1163 27.6207L41.7995 28.2809L59 44.9038V3C59 2.44772 58.5523 2 58 2ZM2 63V52.4592L14.9834 42.8074L20.8927 48.0113L27.4097 53.7505L28.7315 52.2495L23.0419 47.2391L41.0928 30.3793L59 47.6851V63C59 63.5523 58.5523 64 58 64H3C2.44772 64 2 63.5523 2 63ZM3 0C1.34315 0 0 1.34315 0 3V63C0 64.6569 1.34315 66 3 66H58C59.6569 66 61 64.6569 61 63V3C61 1.34315 59.6569 0 58 0H3ZM22.7185 16.2664C22.7185 18.5968 20.8293 20.486 18.4989 20.486C16.1685 20.486 14.2793 18.5968 14.2793 16.2664C14.2793 13.936 16.1685 12.0468 18.4989 12.0468C20.8293 12.0468 22.7185 13.936 22.7185 16.2664ZM24.7185 16.2664C24.7185 19.7014 21.9339 22.486 18.4989 22.486C15.0639 22.486 12.2793 19.7014 12.2793 16.2664C12.2793 12.8314 15.0639 10.0468 18.4989 10.0468C21.9339 10.0468 24.7185 12.8314 24.7185 16.2664Z",
              fill: "",
            }),
          });
        }
        function n(G) {
          const { className: y, ...A } = G;
          return jsx("svg", {
            className: classnames(y, "SVGIcon_Button"),
            width: "90px",
            height: "90px",
            viewBox: "0 0 90 90",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M45.6688 0C21.9908 0 2.59068 18.2266 0.746948 41.3893L24.9079 51.3619C26.9551 49.9646 29.4282 49.1476 32.0897 49.1476C32.3267 49.1476 32.5644 49.1543 32.8002 49.1658L43.5454 33.6211C43.5454 33.5835 43.545 33.547 43.5445 33.5105L43.5445 33.51V33.5097C43.544 33.4734 43.5435 33.4373 43.5435 33.4004C43.5435 24.043 51.1692 16.4305 60.5426 16.4305C69.9169 16.4305 77.5433 24.043 77.5433 33.4004C77.5433 42.7591 69.9166 50.3736 60.5426 50.3736C60.4497 50.3736 60.3572 50.3714 60.2648 50.3692L60.1579 50.3668L44.8341 61.2824C44.8417 61.4813 44.8488 61.6834 44.8488 61.8849C44.8488 68.9097 39.1245 74.6241 32.0897 74.6241C25.9118 74.6241 20.7487 70.2219 19.5785 64.394L2.29919 57.2628C7.64972 76.1519 25.0335 90 45.6688 90C70.5652 90 90.7469 69.851 90.7469 45C90.7469 20.1471 70.5649 0 45.6688 0ZM28.9965 68.2797L23.4589 65.996C24.4403 68.0357 26.1383 69.7426 28.392 70.6807C33.264 72.708 38.883 70.399 40.9138 65.532C41.8965 63.176 41.9035 60.5783 40.9282 58.2175C39.9544 55.8564 38.1187 54.0152 35.7573 53.032C33.4136 52.0602 30.9052 52.0964 28.6979 52.9252L34.4191 55.2872C38.014 56.7837 39.7126 60.9022 38.2148 64.4905C36.7189 68.0782 32.5897 69.7755 28.9965 68.2797ZM60.5443 22.0924C66.7891 22.0924 71.8716 27.166 71.8716 33.4013C71.8716 39.6357 66.7888 44.708 60.5443 44.708C54.2978 44.708 49.2164 39.6357 49.2164 33.4013C49.2164 27.1657 54.2978 22.0924 60.5443 22.0924ZM60.5619 24.8868C55.8629 24.8868 52.0527 28.689 52.0527 33.3818C52.0527 38.0727 55.8629 41.8752 60.5619 41.8752C65.2616 41.8752 69.0717 38.0727 69.0717 33.3818C69.0717 28.6894 65.2619 24.8868 60.5619 24.8868Z",
              fill: "",
            }),
          });
        }
        function le(G) {
          const { className: y, ...A } = G;
          return jsx("svg", {
            className: classnames(y, "SVGIcon_Button"),
            width: "63",
            height: "59",
            viewBox: "0 0 63 59",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M61.9723 52.3891C62.4059 52.3891 62.7568 52.7403 62.7568 53.1736V57.2655C62.7568 57.6988 62.4059 58.05 61.9723 58.05H0.784459C0.350862 58.05 0 57.6988 0 57.2655V53.1736C0 52.7403 0.350862 52.3891 0.784459 52.3891H4.40033V0.784459C4.40033 0.351245 4.75119 0 5.18479 0H18.2823C18.7159 0 19.0668 0.351245 19.0668 0.784459V7.42747H27.0194V0.784459C27.0194 0.351245 27.3703 0 27.8039 0H37.3262C37.7598 0 38.1106 0.351245 38.1106 0.784459V5.63701L48.946 3.65953C49.1521 3.62391 49.3627 3.66758 49.5328 3.78594C49.7044 3.90429 49.8216 4.08585 49.8584 4.2904L58.3564 50.8577C58.4346 51.284 58.1519 51.6927 57.7259 51.7705L54.3366 52.3891H61.9723ZM45.0133 43.6546L46.575 52.211L56.6726 50.3678L55.1112 41.8116L45.0133 43.6546ZM44.7316 42.111L54.8294 40.2679L54.1208 36.3852L44.0228 38.2278L44.7316 42.111ZM53.8391 34.8415L48.4557 5.34375L38.3573 7.18692L43.741 36.6841L53.8391 34.8415ZM38.1106 52.3891H45.0126L38.1106 14.5716V52.3891ZM36.5417 1.56892H28.5883V8.21193V52.3891H36.5417V1.56892ZM27.0194 52.3891V8.99639H19.0668V52.3891H27.0194ZM17.4979 18.4091H5.96925V35.5493H17.4979V18.4091ZM5.96925 16.8402H17.4979V12.3039H5.96925V16.8402ZM17.4979 37.1182H5.96925V41.6541H17.4979V37.1182ZM17.4979 8.21193V1.56892H5.96925V10.735H17.4979V8.21193ZM17.4979 43.223H5.96925V52.3891H17.4979V43.223ZM1.56892 56.4811H61.1878V53.958H37.3262H27.8039H18.2823H5.18479H1.56892V56.4811ZM25.2046 42.5953H20.8817C20.4481 42.5953 20.0972 42.244 20.0972 41.8108C20.0972 41.3776 20.4481 41.0264 20.8817 41.0264H25.2046C25.6382 41.0264 25.9891 41.3776 25.9891 41.8108C25.9891 42.244 25.6382 42.5953 25.2046 42.5953ZM20.8817 37.1181H25.2046C25.6382 37.1181 25.9891 36.7669 25.9891 36.3337C25.9891 35.9005 25.6382 35.5492 25.2046 35.5492H20.8817C20.4481 35.5492 20.0972 35.9005 20.0972 36.3337C20.0972 36.7669 20.4481 37.1181 20.8817 37.1181ZM34.7269 42.5953H30.4031C29.9695 42.5953 29.6187 42.244 29.6187 41.8108C29.6187 41.3776 29.9695 41.0264 30.4031 41.0264H34.7269C35.1605 41.0264 35.5113 41.3776 35.5113 41.8108C35.5113 42.244 35.1605 42.5953 34.7269 42.5953ZM30.4031 37.1181H34.7269C35.1605 37.1181 35.5113 36.7669 35.5113 36.3337C35.5113 35.9005 35.1605 35.5492 34.7269 35.5492H30.4031C29.9695 35.5492 29.6187 35.9005 29.6187 36.3337C29.6187 36.7669 29.9695 37.1181 30.4031 37.1181ZM7.61761 26.9792C7.61761 23.5184 9.42554 20.8077 11.733 20.8077C14.0411 20.8077 15.8491 23.5184 15.8491 26.9792C15.8491 30.4395 14.0411 33.1503 11.733 33.1503C9.42554 33.1503 7.61761 30.4395 7.61761 26.9792ZM9.18653 26.9792C9.18653 29.4739 10.3525 31.5814 11.733 31.5814C13.1134 31.5814 14.2802 29.4739 14.2802 26.9792C14.2802 24.4845 13.1134 22.3766 11.733 22.3766C10.3525 22.3766 9.18653 24.4845 9.18653 26.9792Z",
              fill: "",
            }),
          });
        }
        function Ne(G) {
          const { className: y, ...A } = G;
          return (0, e.jsxs)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            width: "33",
            height: "32",
            viewBox: "0 0 33 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, e.jsx)("defs", {
                children: (0, e.jsxs)("filter", {
                  id: "SoftGlow",
                  height: "300%",
                  width: "300%",
                  x: "-75%",
                  y: "-75%",
                  children: [
                    (0, e.jsx)("feMorphology", {
                      operator: "dilate",
                      radius: "2",
                      in: "SourceAlpha",
                      result: "thicken",
                    }),
                    (0, e.jsx)("feGaussianBlur", {
                      in: "thicken",
                      stdDeviation: "5",
                      result: "blurred",
                    }),
                    (0, e.jsx)("feFlood", {
                      floodColor: "rgba(55, 75, 148, .7)",
                      result: "glowColor",
                    }),
                    (0, e.jsx)("feComposite", {
                      in: "glowColor",
                      in2: "blurred",
                      operator: "in",
                      result: "SoftGlow_colored",
                    }),
                    (0, e.jsxs)("feMerge", {
                      children: [
                        (0, e.jsx)("feMergeNode", { in: "SoftGlow_colored" }),
                        (0, e.jsx)("feMergeNode", { in: "SourceGraphic" }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, e.jsx)("path", {
                fill: "none",
                strokeWidth: ".6px",
                d: "M31.9861 26.8551C32.2029 26.8551 32.3783 27.0254 32.3783 27.2355V29.2195C32.3783 29.4295 32.2029 29.5998 31.9861 29.5998H1.39223C1.17543 29.5998 1 29.4295 1 29.2195V27.2355C1 27.0254 1.17543 26.8551 1.39223 26.8551H3.20016V1.83469C3.20016 1.62465 3.37559 1.45435 3.59239 1.45435H10.1412C10.358 1.45435 10.5334 1.62465 10.5334 1.83469V5.05554H14.5097V1.83469C14.5097 1.62465 14.6851 1.45435 14.9019 1.45435H19.6631C19.8798 1.45435 20.0553 1.62465 20.0553 1.83469V4.18744L25.4729 3.22867C25.576 3.21139 25.6813 3.23257 25.7663 3.28995C25.8521 3.34734 25.9108 3.43537 25.9291 3.53454L30.1782 26.1126C30.2172 26.3193 30.0759 26.5175 29.8629 26.5552L28.1683 26.8551H31.9861ZM23.5066 22.6202L24.2874 26.7688L29.3362 25.8751L28.5555 21.7266L23.5066 22.6202ZM23.3657 21.8718L28.4147 20.9782L28.0604 19.0957L23.0114 19.989L23.3657 21.8718ZM27.9195 18.3472L25.2278 4.04525L20.1786 4.93891L22.8705 19.2406L27.9195 18.3472ZM20.0553 26.8551H23.5062L20.0553 8.51936V26.8551ZM19.2708 2.21503H15.2941V5.43589V26.8551H19.2708V2.21503ZM14.5097 26.8551V5.81623H10.5334V26.8551H14.5097ZM9.74893 10.38H3.98462V18.6904H9.74893V10.38ZM3.98462 9.6193H9.74893V7.41988H3.98462V9.6193ZM9.74893 19.451H3.98462V21.6503H9.74893V19.451ZM9.74893 5.43589V2.21503H3.98462V6.65919H9.74893V5.43589ZM9.74893 22.411H3.98462V26.8551H9.74893V22.411ZM1.78446 28.8391H31.5939V27.6158H19.6631H14.9019H10.1412H3.59239H1.78446V28.8391ZM13.6023 22.1066H11.4409C11.2241 22.1066 11.0486 21.9363 11.0486 21.7263C11.0486 21.5162 11.2241 21.3459 11.4409 21.3459H13.6023C13.8191 21.3459 13.9946 21.5162 13.9946 21.7263C13.9946 21.9363 13.8191 22.1066 13.6023 22.1066ZM11.4409 19.4512H13.6023C13.8191 19.4512 13.9946 19.2809 13.9946 19.0709C13.9946 18.8608 13.8191 18.6905 13.6023 18.6905H11.4409C11.2241 18.6905 11.0486 18.8608 11.0486 19.0709C11.0486 19.2809 11.2241 19.4512 11.4409 19.4512ZM18.3634 22.1066H16.2016C15.9848 22.1066 15.8093 21.9363 15.8093 21.7263C15.8093 21.5162 15.9848 21.3459 16.2016 21.3459H18.3634C18.5802 21.3459 18.7556 21.5162 18.7556 21.7263C18.7556 21.9363 18.5802 22.1066 18.3634 22.1066ZM16.2016 19.4512H18.3634C18.5802 19.4512 18.7556 19.2809 18.7556 19.0709C18.7556 18.8608 18.5802 18.6905 18.3634 18.6905H16.2016C15.9848 18.6905 15.8093 18.8608 15.8093 19.0709C15.8093 19.2809 15.9848 19.4512 16.2016 19.4512ZM4.80876 14.5352C4.80876 12.8573 5.71273 11.543 6.86643 11.543C8.02052 11.543 8.92449 12.8573 8.92449 14.5352C8.92449 16.2129 8.02052 17.5273 6.86643 17.5273C5.71273 17.5273 4.80876 16.2129 4.80876 14.5352ZM5.59322 14.5352C5.59322 15.7448 6.1762 16.7666 6.86643 16.7666C7.55666 16.7666 8.14003 15.7448 8.14003 14.5352C8.14003 13.3256 7.55666 12.3037 6.86643 12.3037C6.1762 12.3037 5.59322 13.3256 5.59322 14.5352Z",
              }),
            ],
          });
        }
        function De(G) {
          const { className: y, ...A } = G;
          return (0, e.jsxs)("svg", {
            width: "23",
            height: "23",
            viewBox: "0 0 23 23",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21.6537 6.60785H6.45296V21.836H21.6537V6.60785ZM5.66537 5.82026V22.6236H22.4413V5.82026H5.66537Z",
                fill: "currentColor",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.8655 3.81134H19.0663V4.45177H19.8538V3.81134V3.02375H19.0663H3.8655H3.07791V3.81134V19.0395V19.8271H3.8655H4.50591V19.0395H3.8655V3.81134Z",
                fill: "currentColor",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.27802 1.01483H16.4788V1.65525H17.2664V1.01483V0.227242H16.4788H1.27802H0.490433V1.01483V16.243V17.0305H1.27802H1.91844V16.243H1.27802V1.01483Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function Se(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: (0, m.A)(y, "SVGIcon_Button"),
            width: "64",
            height: "62",
            viewBox: "0 0 64 62",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.68889 0H58.3111C61.44 0 64 2.56 64 5.68889V18.8444H0V5.68889C0 2.56 2.56 0 5.68889 0ZM17.2302 12.7289C17.8183 12.7289 18.2969 12.2503 18.2969 11.6622V6.82667C18.2969 6.23858 17.8183 5.76 17.2302 5.76H7.98578C7.39769 5.76 6.91911 6.23858 6.91911 6.82667V11.6622C6.91911 12.2503 7.39769 12.7289 7.98578 12.7289H17.2302ZM36.6222 12.7289C37.2103 12.7289 37.6889 12.2503 37.6889 11.6622V6.82667C37.6889 6.23858 37.2103 5.76 36.6222 5.76H27.3778C26.7897 5.76 26.3111 6.23858 26.3111 6.82667V11.6622C26.3111 12.2503 26.7897 12.7289 27.3778 12.7289H36.6222ZM56.0142 12.7289C56.603 12.7289 57.0809 12.2503 57.0809 11.6622V6.82667C57.0809 6.23858 56.603 5.76 56.0142 5.76H46.7698C46.1824 5.76 45.7031 6.23858 45.7031 6.82667V11.6622C45.7031 12.2503 46.1824 12.7289 46.7698 12.7289H56.0142ZM5.68889 61.8667C2.56 61.8667 0 59.3067 0 56.1778V22.4H64V56.1778C64 59.3067 61.44 61.8667 58.3111 61.8667H5.68889ZM26.5202 29.9164C24.7673 28.9422 23.3323 29.7856 23.3323 31.7916V48.5639C23.3323 50.5714 24.7666 51.4133 26.5202 50.4391L41.1669 42.3033C43.2697 41.1342 43.2697 39.222 41.1669 38.053L26.5202 29.9164Z",
              fill: "",
            }),
          });
        }
        function ue(G) {
          const { className: y, ...A } = G;
          return jsx("svg", {
            className: y,
            width: "2",
            height: "52",
            viewBox: "0 0 2 52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...A,
            children: jsx("path", { d: "M1 52V0.5", stroke: "#605A5A" }),
          });
        }
        function ee(G) {
          const { className: y, ...A } = G;
          return (0, e.jsxs)("svg", {
            className: y,
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...A,
            children: [
              (0, e.jsx)("path", { d: "M21 1L1 21", strokeWidth: "2" }),
              (0, e.jsx)("path", { d: "M0.999999 1L20 21", strokeWidth: "2" }),
            ],
          });
        }
        function R(G) {
          const { className: y, ...A } = G;
          return (0, e.jsxs)("svg", {
            className: y,
            width: "59",
            height: "59",
            viewBox: "0 0 59 59",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, e.jsx)("rect", {
                x: "1.5",
                y: "1.5",
                width: "56",
                height: "56",
                rx: "4",
                strokeWidth: "1",
                fillOpacity: "0.0",
              }),
              (0, e.jsx)("path", {
                d: "M29.14 15.868C30.748 15.868 32.128 16.144 33.28 16.696C34.456 17.224 35.356 17.968 35.98 18.928C36.604 19.864 36.916 20.932 36.916 22.132C36.916 22.948 36.772 23.68 36.484 24.328C36.196 24.952 35.848 25.492 35.44 25.948C35.032 26.38 34.468 26.932 33.748 27.604C32.956 28.3 32.308 28.924 31.804 29.476C31.3 30.028 30.868 30.724 30.508 31.564C30.172 32.38 30.004 33.34 30.004 34.444H27.088C27.088 33.004 27.268 31.78 27.628 30.772C28.012 29.764 28.468 28.96 28.996 28.36C29.548 27.736 30.232 27.076 31.048 26.38C31.888 25.636 32.5 24.988 32.884 24.436C33.292 23.884 33.496 23.212 33.496 22.42C33.496 21.268 33.064 20.356 32.2 19.684C31.336 19.012 30.16 18.676 28.672 18.676C26.608 18.676 24.736 19.336 23.056 20.656L21.76 18.244C22.696 17.524 23.8 16.948 25.072 16.516C26.368 16.084 27.724 15.868 29.14 15.868ZM28.564 37.288C29.26 37.288 29.812 37.504 30.22 37.936C30.628 38.344 30.832 38.908 30.832 39.628C30.832 40.348 30.628 40.912 30.22 41.32C29.812 41.728 29.26 41.932 28.564 41.932C27.892 41.932 27.352 41.728 26.944 41.32C26.536 40.912 26.332 40.348 26.332 39.628C26.332 38.908 26.536 38.344 26.944 37.936C27.352 37.504 27.892 37.288 28.564 37.288Z",
                fill: "",
              }),
            ],
          });
        }
        function I(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: y,
            width: "49",
            height: "53",
            viewBox: "0 0 49 53",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              d: "M48.3765 33.45C47.1427 38.7688 44.1478 43.5146 39.8778 46.9174C35.6078 50.3201 30.3132 52.1801 24.8531 52.1956C23.0011 52.1943 21.1552 51.9821 19.3511 51.5633C14.4369 50.4243 10.0013 47.7787 6.66379 43.9961C3.32632 40.2135 1.25375 35.4829 0.735641 30.4651C0.708708 30.2012 0.787709 29.9374 0.955263 29.7318C1.12282 29.5261 1.3652 29.3955 1.62909 29.3685C1.89298 29.3416 2.15676 29.4206 2.36241 29.5882C2.56805 29.7557 2.69871 29.9981 2.72564 30.262C3.1115 34.01 4.44505 37.5981 6.60068 40.6883C8.75631 43.7786 11.6631 46.2693 15.0472 47.9258C18.4313 49.5824 22.1814 50.3503 25.9443 50.1571C29.7071 49.964 33.3589 48.8163 36.5556 46.822C39.0282 45.2791 41.1726 43.2644 42.8665 40.8927C44.5604 38.5211 45.7706 35.8391 46.428 32.9997C47.0854 30.1604 47.1771 27.2194 46.6978 24.3447C46.2186 21.4699 45.1779 18.7177 43.635 16.2451C42.0921 13.7726 40.0774 11.6282 37.7057 9.93425C35.3341 8.24035 32.6521 7.03016 29.8127 6.37279C24.0785 5.04515 18.0517 6.04982 13.0581 9.16578L8.53564 11.9879L17.0203 12.8514C17.2749 12.8779 17.5096 13.0011 17.6761 13.1955C17.8426 13.3899 17.9282 13.6407 17.9153 13.8964C17.9024 14.152 17.792 14.3929 17.6068 14.5696C17.4216 14.7463 17.1757 14.8452 16.9197 14.846C16.8855 14.8461 16.8512 14.8443 16.8171 14.8406L5.42564 13.6814C5.40474 13.6793 5.38834 13.6669 5.36784 13.6635C5.32663 13.6572 5.28587 13.6482 5.24584 13.6366C5.22414 13.6302 5.20214 13.6328 5.18054 13.6248C5.15644 13.6159 5.14054 13.5965 5.11764 13.586C5.03876 13.5541 4.96583 13.5091 4.90194 13.4529C4.86699 13.4246 4.83401 13.394 4.80324 13.3612C4.77384 13.3299 4.74658 13.2967 4.72164 13.2618C4.70914 13.2442 4.69014 13.2346 4.67864 13.2161C4.66714 13.1976 4.66684 13.1761 4.65664 13.1575C4.63643 13.12 4.6187 13.0812 4.60354 13.0414C4.57364 12.9592 4.55279 12.8741 4.54134 12.7874C4.53787 12.7449 4.5372 12.7022 4.53934 12.6597C4.53994 12.6343 4.52934 12.6114 4.53214 12.5857C4.53434 12.5636 4.54714 12.5457 4.55074 12.5245C4.55755 12.4833 4.56704 12.4426 4.57914 12.4026C4.58524 12.382 4.58124 12.3611 4.58914 12.3406L8.55334 1.59938C8.64516 1.35049 8.83209 1.14827 9.07301 1.0372C9.1923 0.982204 9.32125 0.951243 9.45251 0.946084C9.58377 0.940926 9.71475 0.96167 9.83799 1.00713C9.96123 1.0526 10.0743 1.12189 10.1708 1.21105C10.2672 1.30022 10.3452 1.40751 10.4002 1.5268C10.4552 1.64609 10.4861 1.77505 10.4913 1.9063C10.4964 2.03756 10.4757 2.16854 10.4302 2.29178L7.47744 10.2918L11.9995 7.46998C16.0588 4.93676 20.7781 3.66416 25.5607 3.81312C30.3433 3.96208 34.9742 5.52591 38.868 8.30684C42.7618 11.0878 45.7434 14.9609 47.436 19.4364C49.1285 23.912 49.4558 28.7889 48.3765 33.4505V33.45ZM14.7565 39.346L25.4126 28.6897C25.6002 28.5022 25.7056 28.2479 25.7056 27.9827V17.0784C25.7056 16.8132 25.6003 16.5588 25.4127 16.3713C25.2252 16.1837 24.9709 16.0784 24.7056 16.0784C24.4404 16.0784 24.1861 16.1837 23.9985 16.3713C23.811 16.5588 23.7056 16.8132 23.7056 17.0784V27.5684L13.3423 37.9319C13.2475 38.0243 13.1721 38.1346 13.1202 38.2565C13.0684 38.3783 13.0413 38.5092 13.0404 38.6416C13.0396 38.7739 13.0651 38.9052 13.1153 39.0276C13.1656 39.1501 13.2397 39.2614 13.3333 39.355C13.4269 39.4486 13.5382 39.5227 13.6607 39.573C13.7831 39.6233 13.9144 39.6487 14.0468 39.6479C14.1792 39.647 14.3101 39.6199 14.4319 39.5681C14.5537 39.5163 14.664 39.4408 14.7564 39.346H14.7565Z",
              fill: "",
            }),
          });
        }
        function B(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: y,
            width: "47",
            height: "22",
            viewBox: "0 0 47 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              d: "M36.4525 0.983032C34.3364 0.983032 32.2684 1.65634 30.5371 2.90676C30.4409 2.95486 29.9599 3.3396 29.9599 3.38769L23.7078 8.48558L17.5038 3.43579C17.3595 3.3396 16.3976 2.57011 16.1091 2.42583C14.5701 1.51206 12.7426 1.03113 10.915 1.03113C5.33619 1.03113 0.767334 5.59999 0.767334 11.1788C0.767334 16.7576 5.33619 21.3265 10.915 21.3265C13.0311 21.3265 15.0991 20.6532 16.8305 19.4028C16.9267 19.3547 17.4076 18.9699 17.4557 18.9218L23.7078 13.8239L29.9119 18.8737C30.0561 18.9699 31.0661 19.7394 31.3066 19.8837C32.8455 20.7975 34.6731 21.2784 36.5006 21.2784C42.0795 21.2784 46.6483 16.7095 46.6483 11.1307C46.6483 5.55189 42.0795 0.983032 36.4525 0.983032ZM14.4739 15.94C13.4159 16.7095 12.2135 17.1424 10.915 17.1424C7.64467 17.1424 4.95145 14.4491 4.95145 11.1788C4.95145 7.90846 7.64467 5.21524 10.915 5.21524C11.9731 5.21524 13.0311 5.5038 13.9449 6.03282C14.1373 6.12901 14.7144 6.56185 14.8106 6.65804L20.3894 11.1788C20.3894 11.1788 14.522 15.8919 14.4739 15.94ZM36.4525 17.1424C35.3945 17.1424 34.3364 16.8538 33.4227 16.3248C33.2303 16.2286 32.6532 15.7958 32.557 15.6996L26.9782 11.1788L32.8455 6.41757C33.9036 5.64808 35.1059 5.21524 36.4044 5.21524C39.6748 5.21524 42.368 7.90846 42.368 11.1788C42.368 14.4491 39.771 17.1424 36.4525 17.1424Z",
              fill: "",
            }),
          });
        }
        function v(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: y,
            width: "29",
            height: "28",
            viewBox: "0 0 29 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              d: "M24.4232 4.36344C22.5002 2.44044 20.0502 1.13086 17.383 0.600287C14.7157 0.0697194 11.9511 0.342 9.43855 1.3827C6.92606 2.42339 4.77858 4.18576 3.2677 6.44695C1.75682 8.70813 0.950394 11.3666 0.950394 14.0861C0.950394 16.8056 1.75682 19.464 3.2677 21.7252C4.77858 23.9864 6.92606 25.7487 9.43855 26.7894C11.9511 27.8301 14.7157 28.1024 17.383 27.5718C20.0502 27.0413 22.5002 25.7317 24.4232 23.8087C25.7042 22.5343 26.7208 21.0193 27.4145 19.3507C28.1082 17.6822 28.4653 15.893 28.4653 14.0861C28.4653 12.2791 28.1082 10.4899 27.4145 8.82138C26.7208 7.15284 25.7042 5.63784 24.4232 4.36344ZM16.5334 21.3914H12.865V12.3164H16.5334V21.3914ZM14.6992 10.7874C14.3015 10.7874 13.9127 10.6695 13.5821 10.4485C13.2514 10.2274 12.9938 9.91333 12.8417 9.54584C12.6896 9.17835 12.65 8.77402 12.7278 8.38399C12.8056 7.99397 12.9973 7.63578 13.2787 7.35475C13.5601 7.07373 13.9186 6.88248 14.3087 6.80523C14.6988 6.72797 15.1031 6.76818 15.4704 6.92075C15.8377 7.07332 16.1514 7.33141 16.372 7.66235C16.5926 7.9933 16.71 8.38223 16.7094 8.77994C16.7094 9.0438 16.6574 9.30507 16.5564 9.54881C16.4553 9.79255 16.3072 10.014 16.1205 10.2004C15.9338 10.3869 15.7122 10.5347 15.4683 10.6354C15.2244 10.7361 14.9631 10.7878 14.6992 10.7874Z",
              fill: "",
            }),
          });
        }
        function P(G) {
          const { className: y, ...A } = G;
          return (0, e.jsx)("svg", {
            className: y,
            width: "41",
            height: "64",
            viewBox: "0 0 41 64",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M30.4126 5.84583C28.4532 5.77501 26.5883 4.98584 25.1733 3.62868C22.883 1.43206 19.2764 1.40456 16.9529 3.566C15.5173 4.90142 13.6406 5.66206 11.6804 5.70299C8.50765 5.76924 5.93799 8.30001 5.82337 11.4714C5.75255 13.4308 4.96338 15.2956 3.60622 16.7107C1.4096 19.001 1.3821 22.6075 3.54354 24.9311C4.87896 26.3667 5.6396 28.2433 5.68053 30.2036C5.74678 33.3763 8.27755 35.946 11.4489 36.0606C13.4083 36.1314 15.2732 36.9206 16.6882 38.2778C18.9785 40.4744 22.5851 40.5019 24.9086 38.3404C26.3442 37.005 28.2209 36.2444 30.1811 36.2035C33.3539 36.1372 35.9235 33.6064 36.0382 30.4351C36.109 28.4757 36.8981 26.6108 38.2553 25.1958C40.4519 22.9055 40.4794 19.2989 38.318 16.9754C36.9826 15.5398 36.2219 13.6631 36.181 11.7029C36.1147 8.53011 33.584 5.96045 30.4126 5.84583ZM37.1808 11.682C37.1035 7.9792 34.1499 4.98025 30.4487 4.84648C28.7347 4.78453 27.1033 4.09418 25.8655 2.90697C23.1926 0.343378 18.9835 0.311283 16.2718 2.83381C15.016 4.00202 13.3743 4.6674 11.6595 4.70321C7.95674 4.78052 4.95779 7.73408 4.82402 11.4352C4.76207 13.1493 4.07172 14.7806 2.88451 16.0185C0.320917 18.6914 0.288821 22.9005 2.81135 25.6122C3.97955 26.868 4.64494 28.5097 4.68075 30.2245C4.75807 33.9272 7.71162 36.9262 11.4128 37.06C13.1268 37.1219 14.7582 37.8123 15.996 38.9995C18.669 41.5631 22.878 41.5952 25.5897 39.0726C26.8455 37.9044 28.4872 37.239 30.202 37.2032C33.9048 37.1259 36.9037 34.1724 37.0375 30.4712C37.0995 28.7572 37.7898 27.1258 38.977 25.888C41.5406 23.215 41.5727 19.006 39.0502 16.2943C37.882 15.0384 37.2166 13.3968 37.1808 11.682ZM31.4863 41.2401C31.4867 41.2404 31.487 41.2407 31.1669 41.6248L31.487 41.2407L31.6669 41.3906V41.6248V62.5728V63.4683L30.9046 62.9985L20.9309 56.8517L10.9573 62.9985L10.1949 63.4683V62.5728V41.6248V41.3555L10.4198 41.2073L10.6949 41.6248C10.4198 41.2073 10.42 41.2071 10.4203 41.2069L10.4209 41.2065L10.4222 41.2057L10.425 41.2039L10.4321 41.1993L10.4518 41.1873C10.4674 41.1779 10.4879 41.1661 10.5133 41.1524C10.5641 41.125 10.6344 41.0902 10.7241 41.0527C10.9034 40.9778 11.1598 40.8927 11.4906 40.8367C12.1557 40.724 13.1039 40.7318 14.3111 41.1525C14.7935 41.3206 15.3635 41.6156 15.9507 41.9446C16.2911 42.1353 16.6562 42.3485 17.0236 42.563L17.024 42.5632L17.0248 42.5637C17.2873 42.717 17.551 42.871 17.8076 43.0179C18.4375 43.3784 19.0498 43.7114 19.6033 43.955C20.1687 44.2038 20.6187 44.3343 20.9375 44.3385C21.205 44.3421 21.6162 44.2205 22.1636 43.9649C22.6946 43.7169 23.2892 43.3749 23.9047 43.0052C24.1025 42.8864 24.3034 42.7642 24.5044 42.642L24.5055 42.6413L24.5067 42.6406L24.5067 42.6405L24.5069 42.6405C24.9206 42.3888 25.3344 42.137 25.7213 41.9151C26.2933 41.587 26.855 41.2951 27.3286 41.1477C28.7347 40.7101 29.7388 40.6983 30.4172 40.8191C30.7557 40.8794 31.0083 40.9719 31.1846 41.0565C31.2726 41.0987 31.3409 41.1387 31.3909 41.1712C31.4159 41.1874 31.4363 41.2018 31.4523 41.2136C31.4603 41.2195 31.4671 41.2248 31.4729 41.2293L31.4808 41.2356L31.4841 41.2383L31.4856 41.2395L31.4863 41.2401ZM11.1949 41.9422V61.6774L20.6686 55.8387L20.9309 55.6771L21.1932 55.8387L30.6669 61.6774V41.9208C30.5682 41.8813 30.4282 41.8368 30.242 41.8037C29.7472 41.7156 28.9065 41.704 27.6258 42.1025C27.2665 42.2144 26.7877 42.4563 26.2189 42.7825C25.8428 42.9982 25.4485 43.2381 25.0417 43.4856L25.0415 43.4858L25.0399 43.4867C24.836 43.6108 24.629 43.7367 24.4195 43.8625C23.8009 44.234 23.1684 44.5994 22.5866 44.871C22.0212 45.135 21.4338 45.3452 20.9243 45.3385C20.3958 45.3315 19.7928 45.1309 19.2005 44.8703C18.5965 44.6045 17.9466 44.2496 17.3108 43.8857C17.0355 43.7281 16.7669 43.5712 16.504 43.4176C16.1468 43.209 15.8002 43.0066 15.4619 42.817C14.8778 42.4897 14.3743 42.2334 13.9821 42.0968C12.9316 41.7307 12.1539 41.7385 11.6576 41.8226C11.4625 41.8557 11.308 41.901 11.1949 41.9422ZM23.7901 8.68637C24.8582 9.71081 26.2659 10.3065 27.7449 10.36C29.879 10.4371 31.582 12.1663 31.6266 14.3013C31.6575 15.781 32.2316 17.1975 33.2397 18.2812C34.6941 19.8447 34.6756 22.2717 33.1975 23.8129C32.173 24.881 31.5774 26.2887 31.5239 27.7677C31.4468 29.9018 29.7176 31.6048 27.5826 31.6494C26.1029 31.6803 24.6863 32.2544 23.6027 33.2625C22.0391 34.7169 19.6122 34.6984 18.071 33.2203C17.0028 32.1958 15.5952 31.6002 14.1162 31.5467C11.9821 31.4696 10.2791 29.7404 10.2345 27.6054C10.2036 26.1257 9.62942 24.7091 8.62139 23.6255C7.16691 22.0619 7.18542 19.635 8.66357 18.0938C9.68801 17.0256 10.2837 15.618 10.3372 14.1389C10.4143 12.0049 12.1435 10.3019 14.2785 10.2573C15.7582 10.2264 17.1747 9.65222 18.2584 8.64419C19.8219 7.18971 22.2489 7.20821 23.7901 8.68637ZM27.781 9.36061C30.4449 9.45689 32.5707 11.6154 32.6264 14.2804C32.6521 15.5146 33.131 16.6962 33.9719 17.6001C35.7874 19.5518 35.7643 22.5812 33.9192 24.5051C33.0647 25.396 32.5678 26.5702 32.5232 27.8038C32.427 30.4677 30.2685 32.5935 27.6034 32.6492C26.3692 32.6749 25.1876 33.1538 24.2838 33.9946C22.332 35.8102 19.3026 35.7871 17.3788 33.942C16.4879 33.0875 15.3137 32.5906 14.08 32.546C11.4161 32.4498 9.29034 30.2913 9.23469 27.6262C9.20892 26.392 8.73001 25.2104 7.88921 24.3066C6.07363 22.3548 6.09673 19.3254 7.94186 17.4016C8.79635 16.5107 9.29322 15.3365 9.33781 14.1028C9.43409 11.4389 11.5926 9.31314 14.2576 9.25749C15.4918 9.23172 16.6734 8.75281 17.5773 7.912C19.529 6.09643 22.5584 6.11953 24.4823 7.96466C25.3732 8.81915 26.5474 9.31602 27.781 9.36061Z",
              fill: "none",
            }),
          });
        }
        function O(G) {
          const { className: y, ...A } = G;
          return (0, e.jsxs)("svg", {
            className: y,
            width: "55",
            height: "63",
            viewBox: "0 0 55 63",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, e.jsx)("path", {
                d: "M47.7642 5.46737H43.3958V3.44632C43.3958 0.953685 42.3747 0 39.9495 0C37.4568 0 36.5032 1.02105 36.5032 3.44632V5.46737H17.5937V3.44632C17.5937 0.953685 16.5726 0 14.1474 0C11.6547 0 10.7011 1.02105 10.7011 3.44632V5.46737H6.33263C2.82947 5.46737 0 8.29684 0 11.8V56.6674C0 60.1705 2.82947 63 6.33263 63H47.7642C51.2674 63 54.0968 60.1705 54.0968 56.6674V11.8C54.0968 8.29684 51.2674 5.46737 47.7642 5.46737ZM1.62737 50.0758C2.62737 51.5 3.91789 52.2884 5.33263 52.2884H48.7642C50.1116 52.2884 51.1274 51.5 52.4021 50.1432V51.3453C52.4021 53.3663 50.7853 55.9832 48.7642 55.9832H5.33263C3.31158 55.9832 1.62737 53.3663 1.62737 51.3453V50.0758ZM52.4021 45.8884C52.4021 47.9095 50.7853 50.5263 48.7642 50.5263H5.33263C3.31158 50.5263 1.62737 47.9095 1.62737 45.8884V17.7958H52.4021V45.8884ZM38.1305 3.44632C38.1305 2.43579 38.9389 1.69474 39.8821 1.69474C40.8253 1.69474 41.6337 2.50316 41.6337 3.44632V6.62316C41.6337 7.63368 40.8253 8.37474 39.8821 8.37474C38.9389 8.37474 38.1305 7.56632 38.1305 6.62316V3.44632ZM12.3958 3.44632C12.3958 2.43579 13.2042 1.69474 14.1474 1.69474C15.0905 1.69474 15.8989 2.50316 15.8989 3.44632V6.62316C15.8989 7.63368 15.0905 8.37474 14.1474 8.37474C13.2042 8.37474 12.3958 7.56632 12.3958 6.62316V3.44632ZM5.33263 7.16211H10.7684C11.0379 9.38526 11.9242 10.1368 14.2147 10.1368C16.5053 10.1368 17.3916 9.38526 17.6611 7.16211H36.5705C36.84 9.38526 37.7263 10.1368 40.0168 10.1368C42.3074 10.1368 43.1937 9.38526 43.4632 7.16211H48.8989C50.92 7.16211 52.5368 9.77895 52.5368 11.8V16.1011H1.62737V11.8C1.62737 9.77895 3.24421 7.16211 5.33263 7.16211ZM48.7642 61.3053H6.33263C4.31158 61.3053 1.62737 58.6884 1.62737 56.6674V55.4653C2.62737 57.6779 4.91789 57.6779 6.33263 57.6779H48.7642C50.1116 57.6779 51.1274 57.5 52.4021 55.5326V56.7347C52.4021 58.6884 50.7853 61.3053 48.7642 61.3053Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M10.7159 34.7325H10.918C12.0632 34.7325 13.0064 33.7893 13.0064 32.644V32.4419C13.0064 31.2967 12.0632 30.3535 10.918 30.3535H10.7159C9.5706 30.3535 8.62744 31.2967 8.62744 32.4419V32.644C8.62744 33.8567 9.5706 34.7325 10.7159 34.7325Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M19.0694 34.7325H19.2715C20.4167 34.7325 21.3599 33.7893 21.3599 32.644V32.4419C21.3599 31.2967 20.4167 30.3535 19.2715 30.3535H19.0694C17.9241 30.3535 16.981 31.2967 16.981 32.4419V32.644C16.981 33.8567 17.9241 34.7325 19.0694 34.7325Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M27.4234 34.7325H27.6255C28.7708 34.7325 29.7139 33.7893 29.7139 32.644V32.4419C29.7139 31.2967 28.7708 30.3535 27.6255 30.3535H27.4234C26.2781 30.3535 25.335 31.2967 25.335 32.4419V32.644C25.335 33.8567 26.2781 34.7325 27.4234 34.7325Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M10.7159 26.3789H10.918C12.0632 26.3789 13.0064 25.4358 13.0064 24.2905V24.0884C13.0064 22.9432 12.0632 22 10.918 22H10.7159C9.5706 22 8.62744 22.9432 8.62744 24.0884V24.2905C8.62744 25.4358 9.5706 26.3789 10.7159 26.3789Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M19.0694 26.3789H19.2715C20.4167 26.3789 21.3599 25.4358 21.3599 24.2905V24.0884C21.3599 22.9432 20.4167 22 19.2715 22H19.0694C17.9241 22 16.981 22.9432 16.981 24.0884V24.2905C16.981 25.4358 17.9241 26.3789 19.0694 26.3789Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M27.4234 26.3789H27.6255C28.7708 26.3789 29.7139 25.4358 29.7139 24.2905V24.0884C29.7139 22.9432 28.7708 22 27.6255 22H27.4234C26.2781 22 25.335 22.9432 25.335 24.0884V24.2905C25.335 25.4358 26.2781 26.3789 27.4234 26.3789Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M35.7774 34.7325H35.9795C37.1248 34.7325 38.0679 33.7893 38.0679 32.644V32.4419C38.0679 31.2967 37.1248 30.3535 35.9795 30.3535H35.7774C34.6321 30.3535 33.689 31.2967 33.689 32.4419V32.644C33.689 33.8567 34.6321 34.7325 35.7774 34.7325Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M44.1309 34.7325H44.333C45.4783 34.7325 46.4214 33.7893 46.4214 32.644V32.4419C46.4214 31.2967 45.4783 30.3535 44.333 30.3535H44.1309C42.9856 30.3535 42.0425 31.2967 42.0425 32.4419V32.644C42.0425 33.8567 42.9856 34.7325 44.1309 34.7325Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M35.7774 26.3789H35.9795C37.1248 26.3789 38.0679 25.4358 38.0679 24.2905V24.0884C38.0679 22.9432 37.1248 22 35.9795 22H35.7774C34.6321 22 33.689 22.9432 33.689 24.0884V24.2905C33.689 25.4358 34.6321 26.3789 35.7774 26.3789Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M44.1309 26.3789H44.333C45.4783 26.3789 46.4214 25.4358 46.4214 24.2905V24.0884C46.4214 22.9432 45.4783 22 44.333 22H44.1309C42.9856 22 42.0425 22.9432 42.0425 24.0884V24.2905C42.0425 25.4358 42.9856 26.3789 44.1309 26.3789Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M10.7159 43.1534H10.918C12.0632 43.1534 13.0064 42.2102 13.0064 41.0649V40.8628C13.0064 39.7176 12.0632 38.7744 10.918 38.7744H10.7159C9.5706 38.7744 8.62744 39.7176 8.62744 40.8628V41.0649C8.62744 42.2102 9.5706 43.1534 10.7159 43.1534Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M19.0694 43.1534H19.2715C20.4167 43.1534 21.3599 42.2102 21.3599 41.0649V40.8628C21.3599 39.7176 20.4167 38.7744 19.2715 38.7744H19.0694C17.9241 38.7744 16.981 39.7176 16.981 40.8628V41.0649C16.981 42.2102 17.9241 43.1534 19.0694 43.1534Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M27.4234 43.1534H27.6255C28.7708 43.1534 29.7139 42.2102 29.7139 41.0649V40.8628C29.7139 39.7176 28.7708 38.7744 27.6255 38.7744H27.4234C26.2781 38.7744 25.335 39.7176 25.335 40.8628V41.0649C25.335 42.2102 26.2781 43.1534 27.4234 43.1534Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M35.7774 43.1534H35.9795C37.1248 43.1534 38.0679 42.2102 38.0679 41.0649V40.8628C38.0679 39.7176 37.1248 38.7744 35.9795 38.7744H35.7774C34.6321 38.7744 33.689 39.7176 33.689 40.8628V41.0649C33.689 42.2102 34.6321 43.1534 35.7774 43.1534Z",
                fill: "",
              }),
              (0, e.jsx)("path", {
                d: "M44.1309 43.1534H44.333C45.4783 43.1534 46.4214 42.2102 46.4214 41.0649V40.8628C46.4214 39.7176 45.4783 38.7744 44.333 38.7744H44.1309C42.9856 38.7744 42.0425 39.7176 42.0425 40.8628V41.0649C42.0425 42.2102 42.9856 43.1534 44.1309 43.1534Z",
                fill: "",
              }),
            ],
          });
        }
        function U(G) {
          const { className: y, ...A } = G;
          return jsx("svg", {
            className: y,
            width: "30",
            height: "28",
            viewBox: "0 0 30 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.53958 10.9311L6.05241 9.48895C5.70368 9.14803 5.508 8.68728 5.508 8.20709C5.508 7.72689 5.70368 7.26615 6.05241 6.92522L11.7191 1.41962C11.8923 1.25096 12.0984 1.11729 12.3253 1.02635C12.5522 0.935403 12.7955 0.888985 13.041 0.889781C13.2865 0.888985 13.5297 0.935403 13.7566 1.02635C13.9836 1.11729 14.1896 1.25096 14.3629 1.41962L15.8479 2.86171C16.1977 3.20209 16.3941 3.66304 16.3941 4.14358C16.3941 4.40263 16.337 4.65598 16.2296 4.88782C16.2406 4.91497 16.2486 4.94342 16.2534 4.9727C16.4747 6.28162 17.114 7.4902 18.0812 8.4281C19.0484 9.36601 20.2948 9.98596 21.6446 10.2006C21.684 10.2074 21.7218 10.2196 21.7571 10.2366C21.9943 10.1348 22.2529 10.0807 22.5173 10.0807C23.0125 10.0807 23.4876 10.2704 23.8392 10.6086L25.3263 12.0507C25.6751 12.3916 25.8708 12.8524 25.8708 13.3326C25.8708 13.8128 25.6751 14.2735 25.3263 14.6144L19.6641 20.1179C19.3131 20.4571 18.8377 20.6476 18.3422 20.6476C17.8466 20.6476 17.3713 20.4571 17.0203 20.1179H17.0159L15.5287 18.6779C15.18 18.337 14.9843 17.8763 14.9843 17.3961C14.9843 17.1134 15.0521 16.8374 15.1791 16.5886C15.0605 15.9368 14.8383 15.311 14.5238 14.7321L4.27233 25.172C4.11258 25.3404 3.91841 25.4747 3.70219 25.5663C3.48598 25.6579 3.25245 25.7048 3.0165 25.704C2.84695 25.7032 2.67817 25.6817 2.51417 25.6399C2.01927 25.4902 1.57032 25.2239 1.2074 24.8649C0.844483 24.5059 0.578894 24.0653 0.434348 23.5825C0.336247 23.2683 0.330246 22.9338 0.417016 22.6165C0.503786 22.2992 0.679904 22.0116 0.925663 21.7858L11.5633 11.9671C11.0188 11.7138 10.4377 11.5332 9.8354 11.4332C9.75062 11.4145 9.67447 11.3708 9.617 11.3088L9.59306 11.3188L9.57937 11.3243C9.35247 11.4153 9.10922 11.4617 8.8637 11.4609C8.61781 11.462 8.37415 11.4157 8.14684 11.3247C7.91954 11.2338 7.71313 11.1 7.53958 10.9311ZM12.2915 12.3631C12.2727 12.4088 12.2454 12.4512 12.2105 12.488L1.5029 22.3733C1.36465 22.4992 1.26663 22.661 1.22054 22.8394C1.17445 23.0178 1.18222 23.2053 1.24292 23.3796C1.34914 23.7223 1.53956 24.0349 1.79782 24.2906C2.05609 24.5462 2.37449 24.7373 2.72568 24.8473C2.89005 24.8986 3.06618 24.9029 3.23302 24.8597C3.39985 24.8165 3.55033 24.7277 3.66645 24.6037L13.9334 14.1587C13.97 14.1159 14.0152 14.0808 14.0664 14.0556C14.0744 14.0517 14.0825 14.048 14.0907 14.0446C13.8741 13.7452 13.6301 13.4631 13.3608 13.202C13.034 12.885 12.6753 12.6043 12.2915 12.3631ZM10.4044 10.7184L15.5675 5.69809C15.8917 6.94351 16.5574 8.08514 17.4989 8.99918C18.4443 9.91689 19.6265 10.5651 20.9165 10.8795L15.8484 15.8036C15.5111 14.6081 14.8584 13.5138 13.9493 12.6312C12.9729 11.6834 11.7441 11.022 10.4044 10.7184ZM13.0476 1.7059C12.7727 1.70539 12.5088 1.81065 12.3139 1.99859L6.64287 7.48711C6.4494 7.67636 6.34085 7.93206 6.34085 8.19854C6.34085 8.46503 6.4494 8.72073 6.64287 8.90998L8.13003 10.3521C8.226 10.4453 8.34005 10.5191 8.46559 10.5693C8.59113 10.6196 8.72569 10.6452 8.8615 10.6448C8.99768 10.6455 9.13265 10.62 9.25859 10.5697C9.38453 10.5195 9.49894 10.4455 9.59517 10.3521L15.2618 4.85715C15.4564 4.66845 15.5656 4.41254 15.5656 4.14572C15.5656 3.87889 15.4564 3.62298 15.2618 3.43428L13.7768 1.99218C13.5819 1.80424 13.3181 1.69898 13.0432 1.69949L13.0476 1.7059ZM16.1192 16.6782L21.7858 11.1876V11.1833C21.9804 10.9947 22.2443 10.8887 22.5195 10.8887C22.7946 10.8887 23.0585 10.9947 23.2531 11.1833L24.7403 12.6233C24.9338 12.8125 25.0423 13.0682 25.0423 13.3347C25.0423 13.6012 24.9338 13.8569 24.7403 14.0461L19.0737 19.5411C18.8785 19.7287 18.6148 19.8339 18.34 19.8339C18.0652 19.8339 17.8015 19.7287 17.6063 19.5411L16.1192 18.099C15.9258 17.9101 15.8173 17.6547 15.8173 17.3886C15.8173 17.1225 15.9258 16.8671 16.1192 16.6782ZM13.2327 24.6685H27.3332C27.4387 24.6611 27.5373 24.6152 27.6094 24.5401C27.6814 24.465 27.7214 24.3662 27.7214 24.2637C27.7214 24.1611 27.6814 24.0623 27.6094 23.9872C27.5373 23.9121 27.4387 23.8662 27.3332 23.8588H13.2327C13.1272 23.8662 13.0285 23.9121 12.9565 23.9872C12.8845 24.0623 12.8444 24.1611 12.8444 24.2637C12.8444 24.3662 12.8845 24.465 12.9565 24.5401C13.0285 24.6152 13.1272 24.6611 13.2327 24.6685ZM28.9638 27.4905H11.1752C11.1178 27.4946 11.0602 27.4871 11.0059 27.4686C10.9516 27.4501 10.9019 27.4209 10.8598 27.3829C10.8176 27.345 10.784 27.299 10.7611 27.2478C10.7381 27.1967 10.7262 27.1415 10.7262 27.0857C10.7262 27.0299 10.7381 26.9747 10.7611 26.9236C10.784 26.8724 10.8176 26.8264 10.8598 26.7884C10.9019 26.7504 10.9516 26.7213 11.0059 26.7028C11.0602 26.6843 11.1178 26.6768 11.1752 26.6808H28.9638C29.0693 26.6883 29.168 26.7342 29.24 26.8093C29.3121 26.8844 29.3521 26.9831 29.3521 27.0857C29.3521 27.1883 29.3121 27.287 29.24 27.3621C29.168 27.4372 29.0693 27.4831 28.9638 27.4905Z",
              fill: "#C5CBD8",
            }),
          });
        }
        function Y(G) {
          const { className: y, ...A } = G;
          return (0, e.jsxs)("svg", {
            className: y,
            height: 100,
            width: 100,
            fill: "#fff",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 69 69",
            children: [
              (0, e.jsx)("path", {
                d: "M57.189 51.828H11.813a1 1 0 00-1 1v4.77a1 1 0 001 1h45.376a1 1 0 001-1v-4.77a1 1 0 00-1-1zm-1 4.77H12.813v-2.77h43.376v2.77z",
              }),
              (0, e.jsx)("path", {
                d: "M63.189 4.402H5.813a1 1 0 00-1 1L4.81 62.598H2.46a1 1 0 100 2h64.08a1 1 0 100-2h-2.35l-.001-57.196a1 1 0 00-1-1zm-56.376 2h55.376v39.426H43.584v-5.854h-7.556l2.448-2.48a.999.999 0 00.288-.702V18.915h2.062a1 1 0 100-2h-3.508v-3.775h1.32a1 1 0 100-2h-3.584v-.917a1 1 0 10-2 0v.917H29.47a1 1 0 100 2h1.32v3.775h-3.508a1 1 0 100 2h2.061v17.875c0 .242.087.474.245.656l2.195 2.527h-6.365v5.854H6.813V6.402zm25.977 6.74h2.528v3.774H32.79v-3.775zm-1.447 5.774h1.711v14.642a1 1 0 102 0V18.916h1.71v17.465l-2.9 2.94-2.52-2.904v-17.5zm10.241 23.058v3.834H27.418v-3.834h14.166zM6.81 62.598v-14.77h55.38v14.77H6.81z",
              }),
            ],
          });
        }
        function Z(G) {
          const { className: y, ...A } = G;
          return jsxs("svg", {
            className: y,
            height: 100,
            width: 100,
            fill: "currentColor",
            stroke: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 69 69",
            children: [
              jsx("path", {
                d: "M47.9849 0.487061L62.9734 29.8571L95.5377 35.0362L72.2368 58.367L77.3741 90.9379L47.9849 75.9871L18.5956 90.9379L23.7329 58.367L0.432037 35.0362L32.9963 29.8571L47.9849 0.487061Z",
              }),
              "  ",
            ],
          });
        }
        function ae(G) {
          return (0, e.jsx)("svg", {
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "1400px",
            height: "1409px",
            viewBox: "0 1801.5 1400 1409",
            ...G,
            children: (0, e.jsx)("path", {
              fill: "#FFFFFF",
              d: `M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0
				c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294
				c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280
				c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941
				c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z
					M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0
				c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0
				c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647
				c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059
				S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z`,
            }),
          });
        }
        function V(G) {
          return jsxs("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...G,
            children: [
              jsx("rect", {
                x: "1.73633",
                y: "1.97144",
                width: "23",
                height: "23",
                rx: "2",
                "stroke-width": "2",
              }),
              jsx("line", {
                x1: "13.2646",
                y1: "7.81836",
                x2: "13.2646",
                y2: "19.1246",
                "stroke-width": "2.5",
              }),
              jsx("line", {
                x1: "18.8896",
                y1: "13.6355",
                x2: "7.58338",
                y2: "13.6355",
                "stroke-width": "2.5",
              }),
            ],
          });
        }
        function oe(G) {
          const { className: y, ...A } = G;
          return (0, e.jsxs)("svg", {
            className: y,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 39 30",
            fill: "none",
            ...G,
            children: [
              (0, e.jsx)("path", {
                fill: "#06BFFF",
                d: "M4 11.1947L8.70813 12.7135C9.35359 12.9033 9.84719 13.4349 10.075 14.0803L11.5937 18.7885L13.1125 14.0803C13.3023 13.4349 13.8339 12.9413 14.4794 12.7135L19.1875 11.1947L14.4794 9.67595C13.8339 9.48611 13.3403 8.95455 13.1125 8.30908L11.5937 3.60095L10.075 8.30908C9.88516 8.95455 9.35359 9.44814 8.70813 9.67595L4 11.1947Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M20 4.89423L22.439 5.67308C22.7799 5.77692 23.0422 6.03654 23.1471 6.37404L23.9339 8.78846L24.7206 6.37404C24.8255 6.03654 25.0878 5.77692 25.4287 5.67308L27.8677 4.89423L25.4287 4.11539C25.0878 4.01154 24.8255 3.75192 24.7206 3.41442L23.9339 1L23.1471 3.41442C23.0422 3.75192 22.7799 4.01154 22.439 4.11539L20 4.89423Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M26 27.9471L27.2326 28.3365C27.39 28.3885 27.5211 28.5183 27.5735 28.674L27.9669 29.8942L28.3603 28.674C28.4128 28.5183 28.5439 28.3885 28.7012 28.3365L29.9339 27.9471L28.7012 27.5577C28.5439 27.5058 28.4128 27.376 28.3603 27.2202L27.9669 26L27.5735 27.2202C27.5211 27.376 27.39 27.5058 27.2326 27.5577L26 27.9471Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M35 1.94711L36.2326 2.33654C36.39 2.38846 36.5211 2.51827 36.5735 2.67404L36.9669 3.89423L37.3603 2.67404C37.4128 2.51827 37.5439 2.38846 37.7012 2.33654L38.9339 1.94711L37.7012 1.55769C37.5439 1.50577 37.4128 1.37596 37.3603 1.22019L36.9669 8.59772e-08L36.5735 1.22019C36.5211 1.37596 36.39 1.50577 36.2326 1.55769L35 1.94711Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M13 21.9471L14.2326 22.3365C14.39 22.3885 14.5211 22.5183 14.5735 22.674L14.9669 23.8942L15.3603 22.674C15.4128 22.5183 15.5439 22.3885 15.7012 22.3365L16.9339 21.9471L15.7012 21.5577C15.5439 21.5058 15.4128 21.376 15.3603 21.2202L14.9669 20L14.5735 21.2202C14.5211 21.376 14.39 21.5058 14.2326 21.5577L13 21.9471Z",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "M-8.51111e-08 15.8413L1.23261 16.2308C1.38996 16.2827 1.52109 16.4125 1.57354 16.5683L1.96693 17.7885L2.36031 16.5683C2.41276 16.4125 2.54389 16.2827 2.70125 16.2308L3.93386 15.8413L2.70125 15.4519C2.54389 15.4 2.41276 15.2702 2.36031 15.1144L1.96693 13.8942L1.57354 15.1144C1.52109 15.2702 1.38996 15.4 1.23261 15.4519L-8.51111e-08 15.8413Z",
              }),
            ],
          });
        }
      },
      36636: (W, E, s) => {
        "use strict";
        s.d(E, {
          dR: () => ge,
          ZI: () => Ae,
          Qs: () => k,
          jy: () => Ee,
          Ch: () => ut,
        });
        var e = s(7850),
          m = s(90626),
          u = s(75844),
          S = s(1086),
          L = s(5108),
          h = s(23903),
          F = s(92757);
        class _ extends m.Component {
          componentDidUpdate(ie) {
            this.props.location.pathname !== ie.location.pathname &&
              this.UpdateScroll();
          }
          componentDidMount() {
            this.UpdateScroll();
          }
          UpdateScroll() {
            const {
                scrollElement: ie,
                location: { hash: pe },
              } = this.props,
              Te = () => ie && ie.scrollTo(0, 0);
            if (pe) {
              const K = pe.slice(1),
                X = document.getElementById(K);
              X ? X.scrollIntoView() : Te();
            } else Te();
          }
          render() {
            return null;
          }
        }
        const a = (0, F.y)(_);
        var w = s(36707),
          c = s(29998),
          f = s(4370);
        let j = "",
          x = null,
          M = null,
          n = null;
        function le() {
          (j = ""),
            x !== null && x.disconnect(),
            M !== null && (window.clearTimeout(M), (M = null));
        }
        function Ne() {
          const $ = document.getElementById(j);
          return $ !== null ? (n($), le(), !0) : !1;
        }
        function De() {
          window.setTimeout(() => {
            Ne() === !1 &&
              (x === null && (x = new MutationObserver(Ne)),
              x.observe(document, {
                attributes: !0,
                childList: !0,
                subtree: !0,
              }),
              (M = window.setTimeout(() => {
                le();
              }, 1e4)));
          }, 0);
        }
        function Se($) {
          return m.forwardRef((ie, pe) => {
            const Te = (se) => {
                le(),
                  ie.onClick && ie.onClick(se),
                  typeof ie.to == "string"
                    ? (j = ie.to.split("#").slice(1).join("#"))
                    : typeof ie.to == "object" &&
                      typeof ie.to.hash == "string" &&
                      (j = ie.to.hash.replace("#", "")),
                  j !== "" &&
                    ((n =
                      ie.scroll ||
                      ((xe) =>
                        ie.smooth
                          ? xe.scrollIntoView({ behavior: "smooth" })
                          : xe.scrollIntoView())),
                    De());
              },
              { scroll: K, smooth: X, ...we } = ie;
            return (0, e.jsx)($, {
              ...we,
              onClick: Te,
              ref: pe,
              children: ie.children,
            });
          });
        }
        const ue = Se(f.X),
          ee = Se(f.A);
        var R = s(58732),
          I = s(36118),
          B = s(96986),
          v = s(83950),
          P = s(18210),
          O = s(37939),
          U = s(3166),
          Y = s(32093),
          Z = s(5164),
          ae = s(19298);
        const V = m.createContext(() => {}),
          oe = ({ children: $, className: ie, ...pe }) => {
            const [Te, K] = m.useState(null),
              [X, we] = m.useState(0),
              [se, xe] = y(X),
              Pe = Te
                ? { width: `${Te.width}px`, transform: `translateX(${Te.x}px)` }
                : void 0,
              Ue = m.useCallback(
                (nt) => {
                  if (
                    (Te
                      ? nt.x !== Te.x && nt.width !== Te.width && K(nt)
                      : K(nt),
                    xe)
                  ) {
                    const Qe = Math.max(
                      0,
                      Math.min(
                        nt.x - xe.clientWidth / 2 + nt.width / 2,
                        xe.scrollWidth - xe.clientWidth,
                      ),
                    );
                    we(Qe);
                  }
                },
                [Te, xe],
              ),
              [yt, Ct] = m.useState(0);
            return (
              m.useEffect(() => {
                if (yt) {
                  const nt = setInterval(() => we((Qe) => Qe + yt), 50);
                  return () => clearInterval(nt);
                }
              }, [yt]),
              (0, e.jsx)(V.Provider, {
                value: Ue,
                children: (0, e.jsxs)(ae.Z, {
                  "flow-children": "row",
                  ...pe,
                  className: (0, w.A)(Z.ItemContainer, ie),
                  ref: se,
                  fnScrollIntoViewHandler: () => !0,
                  children: [
                    $,
                    (0, e.jsx)("div", { className: Z.Accent, style: Pe }),
                  ],
                }),
              })
            );
          },
          G = ({ children: $, active: ie, className: pe, ...Te }) => {
            const K = m.useContext(V),
              [X, we] = m.useState(null),
              se = m.useCallback((xe) => we(xe), []);
            return (
              m.useLayoutEffect(() => {
                ie && X && K({ x: X.offsetLeft, width: X.clientWidth });
              }, [ie, X, K]),
              (0, e.jsx)("div", {
                className: (0, w.A)(Z.Item, ie && Z.Active, pe),
                ref: se,
                ...Te,
                children: $,
              })
            );
          };
        function y($, ie = { msDuration: 200, msInterval: 10 }) {
          const [pe, Te] = m.useState(null),
            K = m.useCallback((se) => Te(se), []),
            { msDuration: X, msInterval: we } = ie;
          return (
            m.useLayoutEffect(() => {
              if (!pe) return;
              const xe =
                  (Math.abs($ - pe.scrollLeft) / (X / we)) *
                  ($ < pe.scrollLeft ? -1 : 1),
                Pe = window.setInterval(() => {
                  Math.abs(xe) < Math.abs(pe.scrollLeft - $)
                    ? ((pe.scrollLeft = $), clearInterval(Pe))
                    : (pe.scrollLeft += xe);
                }, we);
              return () => clearInterval(Pe);
            }, [$, pe, X, we]),
            [K, pe]
          );
        }
        var A = s(24660),
          me = s(56718),
          de = s(19730);
        const Be = "#CommunityAwards",
          Q = ($) => (ie, pe) => (ie ? (pe.hash === Be) === $ : !1),
          re = ($) => {
            const ie = [
                {
                  label: (0, P.we)("#FeaturedLabel"),
                  items: [
                    {
                      props: {
                        iconComponent: B.Kd,
                        children: (0, P.we)("#ShopNav_Featured"),
                        to: R.B.LoyaltyStore(),
                        exact: !0,
                      },
                    },
                    {
                      props: {
                        iconComponent: B.W_,
                        children: (0, P.we)("#ShopNav_ByGame"),
                        to: R.B.LoyaltyByGame(),
                      },
                    },
                    {
                      props: {
                        iconComponent: B.W_,
                        children: (0, P.we)("#ShopNav_ByEvent"),
                        to: R.B.LoyaltyByEvent(),
                      },
                    },
                    {
                      props: {
                        iconComponent: B.jw,
                        children: (0, P.we)("#ShopNav_ItemBundlesLink"),
                        to: { pathname: R.B.LoyaltyItemBundles() },
                      },
                    },
                  ],
                },
                {
                  label: (0, P.we)("#InterfaceLabel"),
                  items: [
                    {
                      props: {
                        iconComponent: me.oEi,
                        children: (0, P.we)("#ShopNav_Keyboards"),
                        to: { pathname: R.B.LoyaltyKeyboard() },
                      },
                    },
                    {
                      props: {
                        iconComponent: me.oEi,
                        children: (0, P.we)("#ShopNav_StartupMovies"),
                        to: { pathname: R.B.LoyaltyStartupMovie() },
                      },
                    },
                  ],
                },
                {
                  label: (0, P.we)("#ProfileItems"),
                  items: [
                    {
                      props: {
                        iconComponent: B.eu,
                        children: (0, P.we)("#ShopNav_AvatarLink"),
                        to: R.B.LoyaltyAvatar(),
                      },
                    },
                    {
                      props: {
                        iconComponent: I.yHA,
                        children: (0, P.we)("#ShopNav_BackgroundsLink"),
                        to: R.B.LoyaltyBackgrounds(),
                      },
                    },
                  ],
                },
                {
                  label: (0, P.we)("#ChatItems"),
                  items: [
                    {
                      props: {
                        iconComponent: I.EEf,
                        children: (0, P.we)("#ShopNav_StickersLink"),
                        to: R.B.LoyaltyStickers(),
                      },
                    },
                    {
                      props: {
                        iconComponent: I.oY9,
                        children: (0, P.we)("#ShopNav_ChatEffectsLink"),
                        to: R.B.LoyaltyChatEffects(),
                      },
                    },
                    {
                      props: {
                        iconComponent: I.ZTc,
                        children: (0, P.we)("#ShopNav_EmoticonsLink"),
                        to: R.B.LoyaltyEmoticons(),
                      },
                    },
                  ],
                },
                {
                  label: " ",
                  items: [
                    {
                      props: {
                        iconComponent: B.Wr,
                        children: (0, P.we)("#HowItWorksLink"),
                        to: {
                          pathname: R.B.LoyaltyHowItWorks(),
                          hash: "#Title",
                        },
                        isActive: Q(!1),
                      },
                    },
                  ],
                },
              ],
              pe = (0, Y.nA)(U.TS.EREALM);
            return (
              !pe &&
                !$ &&
                ie[2].items.push({
                  props: {
                    iconComponent: B.Z1,
                    children: (0, P.we)("#ShopNav_AwardsLink"),
                    to: { pathname: R.B.LoyaltyHowItWorks(), hash: `${Be}` },
                    isActive: Q(!0),
                  },
                }),
              pe ||
                (ie[2].items.push({
                  props: {
                    iconComponent: I.Exy,
                    children: (0, P.we)("#ShopNav_SeasonalBadgeLink"),
                    to: R.B.LoyaltySteamBadge(),
                  },
                }),
                ie[2].items.push({
                  props: {
                    iconComponent: B.CF,
                    children: (0, P.we)("#ShopNav_ProfileBundlesLink"),
                    to: R.B.LoyaltyProfileBundles(),
                  },
                })),
              pe ||
                ie[2].items.push({
                  props: {
                    iconComponent: B.Nu,
                    children: (0, P.we)("#ShopNav_ProfileShowcasesLink"),
                    to: { pathname: R.B.LoyaltyProfileCustomizations() },
                  },
                }),
              O.DZ.Get().BIsLoggedIn() &&
                (ie[4].items.push({
                  external: !0,
                  props: {
                    iconComponent: B.VO,
                    children: (0, P.we)("#MyAwardSummary"),
                    href: U.TS.COMMUNITY_BASE_URL + "my/awards",
                  },
                }),
                ie[4].items.push({
                  external: !0,
                  props: {
                    iconComponent: B.Aq,
                    children: (0, P.we)("#RewardsPointsHistoryLink"),
                    href: U.TS.STORE_BASE_URL + "pointssummary/",
                  },
                }),
                ie[4].items.push({
                  props: {
                    iconComponent: B.VO,
                    children: (0, P.we)("#MyEquippedProfileItems"),
                    to: { pathname: R.B.LoyaltyEquippedProfile(U.iA.steamid) },
                  },
                })),
              ie
            );
          },
          ye = (0, u.PA)(() => {
            const [$, ie] = (0, m.useState)(O.DZ.Get().GetCurrentSearchTerm()),
              [pe, Te] = (0, m.useState)(0),
              K = O.DZ.Get().GetCurrentSearchPlaceholder();
            let X = (se) => {
                let xe = se.target.value.toLowerCase();
                pe && clearTimeout(pe),
                  Te(
                    window.setTimeout(() => {
                      O.DZ.Get().SetCurrentSearchTerm(xe);
                    }, 300),
                  ),
                  ie(xe);
              },
              we = () => {
                ie(""), O.DZ.Get().SetCurrentSearchTerm("");
              };
            return (0, e.jsx)(ae.Z, {
              className: (0, w.A)(v.SearchSection, v.NavItemPadding),
              children: (0, e.jsxs)(ae.Z, {
                className: v.SearchTermContainer,
                children: [
                  (0, e.jsx)(A.BA, {
                    className: v.SearchTerm,
                    type: "text",
                    id: "point_search",
                    onChange: X,
                    value: $,
                    placeholder: K,
                  }),
                  (0, e.jsx)("div", {
                    className: v.SearchIconContainer,
                    children: (0, e.jsx)(I.eSy, {
                      className: (0, w.A)(v.SearchIcon),
                    }),
                  }),
                  $.length > 0 &&
                    (0, e.jsx)("div", {
                      className: v.SearchTermClearButton,
                      onClick: we,
                      children: (0, e.jsx)(B.sC, {
                        className: v.SearchTermClearIcon,
                      }),
                    }),
                ],
              }),
            });
          });
        function he() {
          return O.DZ.Get().BIsLoggedIn()
            ? (0, e.jsxs)(h.az, {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                className: (0, w.A)(v.PointsContainer, v.NavItemPadding),
                children: [
                  (0, e.jsx)(I.vrn, { className: v.Icon }),
                  (0, e.jsxs)(h.az, {
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    paddingLeft: "xsmall",
                    children: [
                      (0, e.jsx)("a", {
                        className: v.YourBalanceLabel,
                        href: U.TS.STORE_BASE_URL + "pointssummary/",
                        children: (0, P.we)("#YourBalance"),
                      }),
                      (0, e.jsx)("div", {
                        className: v.RewardsPointsCount,
                        children: (0, de.Dq)(
                          O.DZ.Get().GetPointsAvailable().getLowBits(),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        const D = () => {
            const $ = (0, U.Qn)(),
              ie = re($),
              pe =
                O.DZ.Get().BIsLoggedIn() && O.DZ.Get().GetIsUsingAppIDFilters();
            return (0, e.jsx)(h.az, {
              className: v.PrimaryNav,
              "flow-children": "column",
              children: (0, e.jsxs)(h.BJ, {
                spacing: "none",
                children: [
                  (0, e.jsx)(he, {}),
                  pe && (0, e.jsx)(ye, {}),
                  ie.map((Te, K) =>
                    (0, e.jsxs)(
                      m.Fragment,
                      {
                        children: [
                          Te.label &&
                            (0, e.jsx)("div", {
                              className: v.NavItem,
                              children: Te.label,
                            }),
                          Te.items.map((X) =>
                            X.external
                              ? (0, m.createElement)(qe, {
                                  ...X.props,
                                  key: X.props.href,
                                })
                              : (0, m.createElement)(Ce, {
                                  ...X.props,
                                  key: JSON.stringify(X.props.to),
                                }),
                          ),
                        ],
                      },
                      K,
                    ),
                  ),
                ],
              }),
            });
          },
          Ce = ($) => {
            const {
                iconComponent: ie,
                className: pe,
                children: Te,
                iconCallout: K,
                ...X
              } = $,
              we = ie,
              se = K,
              xe = typeof X.to == "object" && X.to.hash ? ee : f.A;
            return (0, e.jsxs)(xe, {
              className: (0, w.A)(v.SecondaryNavItem, pe),
              activeClassName: v.Selected,
              ...X,
              children: [
                (0, e.jsx)("div", { className: v.Label, children: Te }),
                se && (0, e.jsx)(se, { className: v.Callout }),
              ],
            });
          },
          qe = ($) => {
            const {
                iconComponent: ie,
                className: pe,
                children: Te,
                iconCallout: K,
                ...X
              } = $,
              we = ie,
              se = K;
            return (0, e.jsxs)("a", {
              className: (0, w.A)(v.SecondaryNavItem, pe),
              ...X,
              children: [
                (0, e.jsx)("div", { className: v.Label, children: Te }),
                se && (0, e.jsx)(se, { className: v.Callout }),
              ],
            });
          };
        function ze($) {
          const ie = (0, F.zy)(),
            pe = typeof $.to == "string" ? $.to : $.to.pathname,
            Te = (0, F.W5)(pe),
            K = !!Te && (!$.exact || Te.isExact),
            X = K && $.isActive ? $.isActive(Te, ie) : K;
          return (0, e.jsx)(G, {
            active: X,
            className: v.ScrollableTabItem,
            children: $.children,
          });
        }
        const Fe = () => {
          const $ = (0, U.Qn)(),
            ie = re($),
            pe = [];
          return (
            ie.forEach((Te) => {
              Te.items.forEach((K) => {
                if (K.external) {
                  const { iconComponent: X, iconCallout: we, ...se } = K.props;
                  pe.push(
                    (0, m.createElement)(
                      A.Ii,
                      {
                        ...se,
                        key: K.props.href,
                        focusClassName: v.Focused,
                        noFocusRing: !0,
                      },
                      (0, e.jsx)(G, {
                        className: v.ScrollableTabItem,
                        children: K.props.children,
                      }),
                    ),
                  );
                } else {
                  const X = K.props,
                    { iconComponent: we, iconCallout: se, ...xe } = X,
                    Pe = typeof X.to == "string" ? X.to : JSON.stringify(X.to);
                  pe.push(
                    (0, m.createElement)(
                      f.A,
                      {
                        ...xe,
                        key: Pe,
                        focusClassName: v.Focused,
                        noFocusRing: !0,
                      },
                      (0, e.jsx)(ze, { ...X, children: X.children }),
                    ),
                  );
                }
              });
            }),
            (0, e.jsx)(oe, { className: v.ScrollableTabs, children: pe })
          );
        };
        var He = s(27126);
        const Ze =
            s.p +
            "images/applications/store/diamonds_tile.png?v=valveisgoodatcaching",
          T =
            s.p +
            "images/applications/store/home_background.png?v=valveisgoodatcaching",
          Le =
            s.p +
            "images/applications/store/halloween_2020_pointspage_bg.png?v=valveisgoodatcaching";
        var We = s(84676),
          ke = s(491);
        const k = ({ className: $, ...ie }) => {
            const pe = m.useRef(void 0);
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  ref: pe,
                  className: (0, w.A)(S.StandardRoot, $),
                  ...ie,
                }),
                (0, e.jsx)(a, { scrollElement: pe.current }),
              ],
            });
          },
          te = ({ className: $, ...ie }) =>
            jsx("div", {
              className: classnames(styles.StandardBackground, $),
              ...ie,
            }),
          C = ({ children: $ }) =>
            (0, e.jsx)(k, {
              className: (0, w.A)(S.ParallaxRoot, L.ParallaxRoot),
              children: $,
            }),
          Me = ({ children: $, src: ie, className: pe }) =>
            (0, e.jsxs)(e.Fragment, {
              children: [
                $,
                (0, e.jsx)("div", {
                  className: (0, w.A)(
                    S.ParallaxBackground,
                    L.ParallaxBackground,
                    pe,
                  ),
                  style: { backgroundImage: `url(${ie})` },
                }),
              ],
            });
        function je() {
          const $ = (0, U.Qn)();
          return (0, He.h)("(max-width: 965px)") || $;
        }
        function Ie($) {
          const ie = (0, h.tv)(["xxsmall", "small", "xxlarge"]),
            pe = je(),
            Te = (0, h.WH)(ie);
          return (0, e.jsx)(c.hL, {
            spacing: { horizontal: Te },
            children: (0, e.jsxs)(h.az, {
              display: "flex",
              justifyContent: "center",
              paddingBottom: "xlarge",
              className: S.StandardLayout,
              children: [
                !pe && (0, e.jsx)(D, {}),
                (0, e.jsxs)(h.BJ, {
                  itemClassName: S.PageItem,
                  className: S.ItemContainer,
                  children: [pe && (0, e.jsx)(Fe, {}), $.children],
                }),
              ],
            }),
          });
        }
        const Ee = ({ background: $, children: ie }) => {
            let pe = Ze;
            return (
              $ && (pe = $),
              (0, e.jsx)(C, {
                children: (0, e.jsx)(Me, {
                  src: pe,
                  children: (0, e.jsx)(Ie, { children: ie }),
                }),
              })
            );
          },
          ce = ({ children: $ }) =>
            (0, e.jsx)(Me, {
              src: T,
              className: S.HomeBackground,
              children: $,
            }),
          Ae = ({ children: $ }) =>
            (0, e.jsx)(C, {
              children: (0, e.jsx)(ce, {
                children: (0, e.jsx)(Ie, { children: $ }),
              }),
            }),
          Ye = (0, u.PA)(({ children: $, appid: ie }) => {
            const [pe] = (0, We.t7)(ie, { include_assets: !0 });
            let Te = Ze;
            const K = O.DZ.Get().GetAppHeroImage(ie);
            return (
              K.is_custom
                ? (Te = K.img_url)
                : pe &&
                  (Te =
                    pe.GetAssets().GetRawPageBackgroundURL() ??
                    pe.GetAssets().GetPageBackgroundURL()),
              (0, e.jsx)(Me, {
                src: Te,
                className: S.ParallaxAppBackground,
                children: $,
              })
            );
          }),
          at = { 1461450: Le };
        function rt($) {
          return $ in at;
        }
        function Xe($) {
          return at[$];
        }
        function ge($) {
          return rt($.appid)
            ? (0, e.jsx)(Ge, { ...$ })
            : (0, e.jsx)(it, { ...$ });
        }
        function Ge($) {
          const { children: ie, appid: pe } = $,
            Te = Xe(pe);
          return (0, e.jsx)(k, {
            children: (0, e.jsx)("div", {
              style: { backgroundImage: `url("${Te}")` },
              className: S.CustomAppBackground,
              children: (0, e.jsx)(Ie, { children: ie }),
            }),
          });
        }
        function it($) {
          const { children: ie, appid: pe } = $;
          return (0, e.jsx)(C, {
            children: (0, e.jsx)(Ye, {
              appid: pe,
              children: (0, e.jsx)(Ie, { children: ie }),
            }),
          });
        }
        function ut($) {
          const { title: ie, subtitle: pe, headerImage: Te } = $,
            K = je();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: S.PagePointShopTitle,
                children: (0, e.jsx)(ke.F, {}),
              }),
              K && (0, e.jsx)(he, {}),
              Te &&
                (0, e.jsx)("img", { className: S.PageHeaderImage, src: Te }),
              ie &&
                (0, e.jsx)("div", {
                  className: (0, w.A)(S.PageTitle, L.PageTitle),
                  children: ie,
                }),
              pe &&
                (0, e.jsx)("div", { className: S.PageSubtitle, children: pe }),
            ],
          });
        }
      },
      91618: (W, E, s) => {
        "use strict";
        s.d(E, { i: () => R, y: () => I });
        var e = s(7850),
          m = s(90626),
          u = s(75844),
          S = s(85528),
          L = s(37939),
          h = s(3166),
          F = s(18210),
          _ = s(32819),
          a = s(23903),
          w = s(23386),
          c = s(58083),
          f = s(15962),
          j = s.n(f),
          x = s(54722),
          M = s(36707),
          n = s(96986),
          le = s(17687),
          Ne = s(19939),
          De = s.n(Ne);
        function Se({ definition: Z, theme: ae, ...V }) {
          const oe = [],
            { icon_url: G, name: y } = S.Vw.GetAppInfo(Z.appid),
            A = L.DZ.Get().BRewardOwnedByUser(Z),
            me = Z.community_item_data.item_title,
            de = L.DZ.Get().GetBundleOfferForUser(Z);
          return {
            cost: parseInt(Z.point_cost),
            name: me,
            desc: (0, F.we)("#RewardItemType_ProfileBundle"),
            attributes: oe,
            appIcon: G,
            appName: y,
            bundle: de,
            definition: Z,
            bOwned: A,
            ...V,
          };
        }
        const ue = m.createContext(!1);
        function ee() {
          return (0, m.useContext)(ue);
        }
        function R(Z) {
          return (0, e.jsx)(ue.Provider, { value: !0, children: Z.children });
        }
        const I = (0, u.PA)((Z) => {
            const ae = ee(),
              V = Se(Z);
            return ae ? (0, e.jsx)(v, { ...V }) : (0, e.jsx)(B, { ...V });
          }),
          B = (0, u.PA)((Z) => {
            const {
                appName: ae,
                appIcon: V,
                bundle: oe,
                definition: G,
                cost: y,
                bOwned: A,
                name: me,
                desc: de,
                attributes: Be,
                className: Q,
                style: re,
                ...ye
              } = Z,
              he = G.community_item_data.item_title;
            return (0, e.jsx)(_.kn, {
              name: he,
              cost: y,
              attributes: Be,
              appIcon: V,
              iconComponent: n.CF,
              desc: de,
              className: Q,
              appName: ae,
              ...ye,
              children: (0, e.jsx)("img", {
                src: (0, c.u)(G),
                style: { width: "100%", height: "100%" },
              }),
            });
          }),
          v = (0, u.PA)((Z) => {
            const {
                appName: ae,
                appIcon: V,
                bundle: oe,
                definition: G,
                cost: y,
                bOwned: A,
                name: me,
                desc: de,
                attributes: Be,
                className: Q,
                style: re,
                onClick: ye,
                ...he
              } = Z,
              D = G.community_item_data.item_title,
              Ce = G.community_item_data.profile_theme_id,
              qe = 524,
              ze = `${qe}px`;
            return (0, e.jsxs)(a.Kt, {
              display: "flex",
              flexDirection: "column",
              className: (0, M.A)(f.ProfileBundleContainer, Q),
              style: { ...re, width: ze },
              onActivate: ye,
              ...he,
              children: [
                V &&
                  (0, e.jsx)("img", {
                    title: ae,
                    src: V,
                    className: f.AppIcon,
                  }),
                (0, e.jsxs)(a.az, {
                  flex: "1",
                  style: {
                    width: `${qe}px`,
                    height: "200px",
                    position: "relative",
                    alignSelf: "center",
                  },
                  children: [
                    Ce && (0, e.jsx)(le.y, { theme: Ne[`${Ce}Theme`] }),
                    (0, e.jsx)(U, { items: oe.items, offer: oe }),
                  ],
                }),
                (0, e.jsx)(P, { label: D, cost: y, bOwned: A }),
              ],
            });
          }),
          P = ({ cost: Z, label: ae, bOwned: V }) =>
            (0, e.jsxs)(a.az, {
              padding: "small",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              className: f.ProfileBundleFooter,
              title: ae,
              children: [
                (0, e.jsx)("div", {
                  className: f.ProfileBundleName,
                  children: ae,
                }),
                V
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("span", {
                          className: f.AlreadyOwned,
                          children: (0, F.we)("#Redeem_BundleItemOwned"),
                        }),
                        (0, e.jsx)(n.wK, { className: f.CheckmarkCircle }),
                      ],
                    })
                  : (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsx)(x.Y, { amount: Z }),
                    }),
              ],
            });
        function O(Z, ae) {
          const V = Z.filter((oe) => oe.community_item_class == ae).slice(0, 1);
          return V.length == 1 ? V[0] : null;
        }
        const U = (0, u.PA)((Z) => {
            const { offer: ae, items: V } = Z,
              oe = O(V, w.xw),
              G = O(V, w.xi),
              y = O(V, w.zs),
              A = O(V, w.sU);
            return (0, e.jsxs)("div", {
              style: { position: "relative" },
              className: f.ItemHand,
              children: [
                oe &&
                  (0, e.jsx)(Y, { item: oe, offer: ae, className: f.Avatar }),
                G &&
                  (0, e.jsx)(Y, {
                    item: G,
                    offer: ae,
                    className: f.AvatarFrame,
                  }),
                y &&
                  (0, e.jsx)(Y, {
                    item: y,
                    offer: ae,
                    className: f.MiniProfileBackground,
                  }),
                A &&
                  (0, e.jsx)(Y, {
                    item: A,
                    offer: ae,
                    className: f.ProfileBackground,
                  }),
              ],
            });
          }),
          Y = (0, u.PA)((Z) => {
            const { offer: ae, item: V, className: oe, ...G } = Z,
              y = V.community_item_class == w.xi;
            return (0, m.createElement)(
              a.az,
              {
                padding: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...G,
                className: (0, M.A)(oe, f.ItemCard),
                key: V.defid,
              },
              y &&
                (0, e.jsx)("img", {
                  className: f.DefaultAvatarImage,
                  src:
                    h.TS.MEDIA_CDN_COMMUNITY_URL +
                    "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg",
                }),
              (0, e.jsx)("img", {
                src: (0, c.u)(V),
                className: f.ItemCardImage,
                style: y ? { zIndex: 1 } : void 0,
              }),
            );
          });
      },
      78175: (W, E, s) => {
        "use strict";
        s.d(E, {
          gs: () => ss,
          iZ: () => zt,
          rE: () => Dt,
          Xw: () => ft,
          U$: () => Re,
          d7: () => ct,
        });
        var e = s(7850),
          m = s(90626),
          u = s(19298),
          S = s(14947),
          L = s(65946),
          h = s(75844),
          F = s(30096),
          _ = s(17083),
          a = s(51819),
          w = s(96538),
          c = s(18210),
          f = s(37939),
          j = s(49288),
          x = s(23386),
          M = s(88003),
          n = s(82734),
          le = s(3166),
          Ne = s(42891),
          De = s(22838),
          Se = s(28679),
          ue,
          ee;
        function R(d, l) {
          return !(
            d === l ||
            (m.isValidElement(d) &&
              m.isValidElement(l) &&
              d.key != null &&
              d.key === l.key)
          );
        }
        var I = { out: "out-in", in: "in-out" },
          B = function (l, p, N) {
            return function () {
              var z;
              l.props[p] && (z = l.props)[p].apply(z, arguments), N();
            };
          },
          v =
            ((ue = {}),
            (ue[I.out] = function (d) {
              var l = d.current,
                p = d.changeState;
              return m.cloneElement(l, {
                in: !1,
                onExited: B(l, "onExited", function () {
                  p(De.ns, null);
                }),
              });
            }),
            (ue[I.in] = function (d) {
              var l = d.current,
                p = d.changeState,
                N = d.children;
              return [
                l,
                m.cloneElement(N, {
                  in: !0,
                  onEntered: B(N, "onEntered", function () {
                    p(De.ns);
                  }),
                }),
              ];
            }),
            ue),
          P =
            ((ee = {}),
            (ee[I.out] = function (d) {
              var l = d.children,
                p = d.changeState;
              return m.cloneElement(l, {
                in: !0,
                onEntered: B(l, "onEntered", function () {
                  p(De._K, m.cloneElement(l, { in: !0 }));
                }),
              });
            }),
            (ee[I.in] = function (d) {
              var l = d.current,
                p = d.children,
                N = d.changeState;
              return [
                m.cloneElement(l, {
                  in: !1,
                  onExited: B(l, "onExited", function () {
                    N(De._K, m.cloneElement(p, { in: !0 }));
                  }),
                }),
                m.cloneElement(p, { in: !0 }),
              ];
            }),
            ee),
          O = (function (d) {
            (0, Ne.A)(l, d);
            function l() {
              for (
                var N, z = arguments.length, J = new Array(z), ve = 0;
                ve < z;
                ve++
              )
                J[ve] = arguments[ve];
              return (
                (N = d.call.apply(d, [this].concat(J)) || this),
                (N.state = { status: De._K, current: null }),
                (N.appeared = !1),
                (N.changeState = function (gt, dt) {
                  dt === void 0 && (dt = N.state.current),
                    N.setState({ status: gt, current: dt });
                }),
                N
              );
            }
            var p = l.prototype;
            return (
              (p.componentDidMount = function () {
                this.appeared = !0;
              }),
              (l.getDerivedStateFromProps = function (z, J) {
                return z.children == null
                  ? { current: null }
                  : J.status === De.ns && z.mode === I.in
                    ? { status: De.ns }
                    : J.current && R(J.current, z.children)
                      ? { status: De.ze }
                      : { current: m.cloneElement(z.children, { in: !0 }) };
              }),
              (p.render = function () {
                var z = this.props,
                  J = z.children,
                  ve = z.mode,
                  gt = this.state,
                  dt = gt.status,
                  Nt = gt.current,
                  _t = {
                    children: J,
                    current: Nt,
                    changeState: this.changeState,
                    status: dt,
                  },
                  Ht;
                switch (dt) {
                  case De.ns:
                    Ht = P[ve](_t);
                    break;
                  case De.ze:
                    Ht = v[ve](_t);
                    break;
                  case De._K:
                    Ht = Nt;
                }
                return m.createElement(
                  Se.A.Provider,
                  { value: { isMounting: !this.appeared } },
                  Ht,
                );
              }),
              l
            );
          })(m.Component);
        (O.propTypes = {}), (O.defaultProps = { mode: I.out });
        const U = O;
        var Y = s(71742),
          Z = s(54722),
          ae = s(47283),
          V = s(58732),
          oe = s(72604),
          G = s(99412),
          y = s(36118),
          A = s(36707);
        const me =
          s.p +
          "images/applications/store/lunar2022_confirm.png?v=valveisgoodatcaching";
        var de = s(48473),
          Be = s(52821),
          Q = s.n(Be),
          re = s(13854);
        function ye(d, l, p) {
          return (
            le.TS.COMMUNITY_CDN_ASSET_URL + d + "/roomeffects/" + l + "/" + p
          );
        }
        class he extends m.Component {
          m_strSaleId;
          constructor(l) {
            super(l), (this.m_strSaleId = this.props.sale);
          }
          getAsset(l) {
            return ye(this.m_strSaleId, this.props.effect.name, l);
          }
        }
        function D(d) {
          const l = (0, m.useRef)({ bSet: !1 });
          return (
            l.current.bSet || (l.current = { bSet: !0, value: d() }),
            l.current.value
          );
        }
        function Ce(d, l) {
          D(() => setTimeout(d, l));
        }
        function qe(d) {
          const [l, p] = (0, m.useState)(!1);
          return Ce(() => p(!0), d), l;
        }
        const ze = ({ msDelay: d, children: l }) =>
            qe(d) ? (0, e.jsx)(m.Fragment, { children: l }) : null,
          Fe = 7e3;
        function He(d) {
          return (
            Config.COMMUNITY_CDN_ASSET_URL +
            `winter2019/roomeffects/fireworks/${d}`
          );
        }
        class Ze extends m.Component {
          m_refContainer = m.createRef();
          m_rgFireworks = [];
          m_nCurrentDelay = 0;
          constructor(l) {
            super(l), (this.state = { bReady: !1 });
          }
          CreateFireworks(l) {
            (this.m_nCurrentDelay = 0),
              this.AddCluster(l),
              (this.m_nCurrentDelay += 200),
              this.RenderLong(l),
              (this.m_nCurrentDelay += 200),
              this.AddCluster(l),
              (this.m_nCurrentDelay += 600),
              this.AddCluster(l),
              (this.m_nCurrentDelay += 200),
              this.RenderLong(l),
              (this.m_nCurrentDelay += 200),
              this.RenderLong(l),
              (this.m_nCurrentDelay += 200),
              this.RenderLong(l),
              this.AddCluster(l),
              this.RenderLong(l),
              (this.m_nCurrentDelay += 200),
              this.AddCluster(l);
          }
          TestRender(l) {
            let p = (0, re.Tg)(0, 70),
              N = (0, re.Tg)(0, 70);
            for (let z = 0; z < 1; z++)
              this.m_rgFireworks.push({
                x: "20%",
                y: "20%",
                nHueRotation: 0,
                nDelay: this.m_nCurrentDelay,
                flScale: l,
                burst: T,
              }),
                (this.m_nCurrentDelay += 500);
            this.m_rgFireworks.push({
              x: "0%",
              y: "0%",
              nHueRotation: 0,
              nDelay: this.m_nCurrentDelay,
              flScale: l,
              burst: Le,
            }),
              this.m_rgFireworks.push({
                x: "30%",
                y: "30%",
                nHueRotation: 0,
                nDelay: this.m_nCurrentDelay,
                flScale: l,
                burst: We,
              });
          }
          CalcHueRotation() {
            return this.props.sale == "lny2020"
              ? 360 + (0, re.Tg)(-30, 10)
              : (0, re.Tg)(0, 360);
          }
          AddCluster(l) {
            let p = (0, re.Tg)(-5, 50),
              N = (0, re.Tg)(-10, 50),
              z = this.CalcHueRotation();
            this.m_rgFireworks.push({
              x: `${p}%`,
              y: `${N}%`,
              nHueRotation: z,
              nDelay: this.m_nCurrentDelay,
              flScale: l,
              burst: Le,
            });
            let J = Math.random() * Math.PI * 2;
            const ve = 256 / 2,
              gt = 128 / 2,
              dt = Math.floor((ve - gt) * l),
              Nt = Math.floor(60 * l),
              _t = 2.09,
              Ht = Math.floor(10 * l);
            let ds = 0;
            for (let cs = 0; cs < 3; cs++) {
              let hs = Math.cos(J + ds) * Nt,
                fs = Math.sin(J + ds) * Nt + Ht,
                ys = `calc( ${p}% + ${dt + hs}px )`,
                Ms = `calc( ${N}% + ${dt + fs}px )`;
              cs < 2 && (this.m_nCurrentDelay += 200),
                (z = this.CalcHueRotation()),
                this.m_rgFireworks.push({
                  x: ys,
                  y: Ms,
                  nHueRotation: z,
                  nDelay: this.m_nCurrentDelay,
                  flScale: l,
                  burst: We,
                }),
                (ds += _t);
            }
          }
          RenderLong(l) {
            const p = (0, re.Tg)(20, 60),
              N = (0, re.Tg)(-5, 50),
              z = this.CalcHueRotation();
            this.m_rgFireworks.push({
              x: `${p}%`,
              y: `${N}%`,
              nHueRotation: z,
              nDelay: this.m_nCurrentDelay,
              flScale: l,
              burst: T,
            });
          }
          componentDidMount() {
            if (!this.m_refContainer.current || this.m_rgFireworks.length > 0)
              return;
            let l = this.m_refContainer.current,
              p = l.offsetWidth,
              N = l.offsetHeight,
              z = (0, re.Fu)(p, 400, 1080, 0.5, 2);
            (z = (0, re.OQ)(z, 0.5, 2)),
              console.log(p, N, z),
              this.CreateFireworks(z),
              this.setState({ bReady: !0 });
          }
          render() {
            let l = [];
            return (
              this.state.bReady &&
                this.m_rgFireworks.forEach((p, N) => {
                  let z = `${N}`,
                    J = {
                      top: p.y,
                      left: p.x,
                      filter: `hue-rotate(${p.nHueRotation}deg)`,
                    };
                  l.push(
                    (0, e.jsx)(
                      p.burst,
                      {
                        style: J,
                        msDelay: p.nDelay,
                        scale: p.flScale,
                        sale: this.props.sale,
                      },
                      z,
                    ),
                  );
                }),
              (0, e.jsx)("div", {
                ref: this.m_refContainer,
                className: Q().FireworkContainer,
                children: l,
              })
            );
          }
        }
        function T(d) {
          const l = ye(d.sale, "fireworks", "long_sheet.png");
          let p = d.style;
          return (
            (p.backgroundImage = `url(${l})`),
            (p.width = 256),
            (p.height = 256),
            (p.animation = `${Q().fireworkLongX} 0.2s steps(9) 10, ${Q().fireworkLongY} 2.0s steps(10) forwards`),
            (p.transformOrigin = "0 0"),
            (p.transform = `scale( ${d.scale} )`),
            (0, e.jsx)(ze, {
              msDelay: d.msDelay,
              children: (0, e.jsx)("div", {
                style: d.style,
                className: Q().FireworkPNG,
              }),
            })
          );
        }
        function Le(d) {
          const l = ye(d.sale, "fireworks", "big_sheet.png");
          let p = d.style;
          return (
            (p.backgroundImage = `url(${l})`),
            (p.width = 256),
            (p.height = 256),
            (p.animation = `${Q().fireworkBigX} 0.2s steps(9) 4, ${Q().fireworkBigY} 0.8s steps(4) forwards`),
            (p.transformOrigin = "0 0"),
            (p.transform = `scale( ${d.scale} )`),
            (0, e.jsx)(ze, {
              msDelay: d.msDelay,
              children: (0, e.jsx)("div", {
                style: d.style,
                className: Q().FireworkPNG,
              }),
            })
          );
        }
        function We(d) {
          const l = ye(d.sale, "fireworks", "small_sheet.png");
          let p = d.style;
          return (
            (p.backgroundImage = `url(${l})`),
            (p.width = 256),
            (p.height = 256),
            (p.animation = `${Q().fireworkSmallX} 0.15s steps(10) 6, ${Q().fireworkSmallY} 0.9s steps(6) forwards`),
            (p.transformOrigin = "0 0"),
            (p.transform = `scale( ${d.scale / 2} )`),
            (0, e.jsx)(ze, {
              msDelay: d.msDelay,
              children: (0, e.jsx)("div", {
                style: d.style,
                className: Q().FireworkPNG,
              }),
            })
          );
        }
        var ke = s(80458);
        class k extends he {
          m_x;
          m_y;
          m_nRotate;
          m_splatRots;
          m_nPathAnimation;
          m_nKeyID;
          static sm_nUnique = 0;
          constructor(l) {
            super(l),
              (this.m_x = re.Tg(0, 70) + "%"),
              (this.m_y = re.Tg(0, 70) + "%"),
              (this.m_nRotate = Math.floor(Math.random() * 90) - 45),
              (this.m_splatRots = [
                Math.random() * 360,
                Math.random() * 360,
                Math.random() * 360,
              ]),
              (this.m_nPathAnimation = re.Tg(1, 6)),
              (this.m_nKeyID = k.sm_nUnique++),
              (this.m_strSaleId = "winter2019");
          }
          fragment(l, ...p) {
            let N = p.map((z) => Q()[z]);
            return (
              N.push(Q().snowball_fragment),
              (0, e.jsx)("img", {
                src: this.getAsset(l),
                className: N.join(" "),
              })
            );
          }
          Snowball(l, p, ...N) {
            let z = l < 0 ? Q().SnowballImageCW : Q().SnowballImageCCW;
            l > -5 && l < 5 && (z = "");
            let J = N.map((ve) => Q()[ve]);
            return (
              J.push(Q().snowball_fragment),
              (0, e.jsx)("div", {
                style: { display: "inline-block" },
                className: J.join(" "),
                children: (0, e.jsx)("img", {
                  style: { transform: "rotation( 360deg )" },
                  className: `${Q().SnowballImage} ${z}`,
                  src: this.getAsset(p),
                }),
              })
            );
          }
          residue() {
            return (0, e.jsxs)(m.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  style: { transform: `rotate(${this.m_splatRots[0]}deg)` },
                  children: this.fragment("splat1.png", "snowball-residue"),
                }),
                (0, e.jsx)("div", {
                  style: { transform: `rotate(${this.m_splatRots[1]}deg)` },
                  children: this.fragment("splat2.png", "snowball-residue"),
                }),
                (0, e.jsx)("div", {
                  style: { transform: `rotate(${this.m_splatRots[2]}deg)` },
                  children: this.fragment("splat3.png", "snowball-residue"),
                }),
              ],
            });
          }
          render() {
            let l = `snowball-path-${this.m_nPathAnimation}`,
              p = { animationName: Q()[l] };
            return (0, e.jsx)(
              m.Fragment,
              {
                children: (0, e.jsx)("div", {
                  className: Q()["snowball-path"],
                  style: p,
                  children: (0, e.jsxs)("div", {
                    className: Q()["snowball-container"],
                    style: {
                      left: this.m_x,
                      top: this.m_y,
                      transform: `rotate( ${this.m_nRotate}deg )`,
                    },
                    children: [
                      this.Snowball(this.m_nRotate, "snowball.png", "snowball"),
                      this.fragment("slide-out-tl.png", "slide-out-tl"),
                      this.fragment("slide-out-tr.png", "slide-out-tr"),
                      this.fragment("slide-out-bottom.png", "slide-out-bottom"),
                      this.residue(),
                      this.fragment(
                        "snowball_1.png",
                        "snowball-chunk",
                        "snowball-chunk-1",
                      ),
                      this.fragment(
                        "snowball_2.png",
                        "snowball-chunk",
                        "snowball-chunk-2",
                      ),
                      this.fragment(
                        "snowball_3.png",
                        "snowball-chunk",
                        "snowball-chunk-3",
                      ),
                      this.fragment(
                        "snowball_4.png",
                        "snowball-chunk",
                        "snowball-chunk-4",
                      ),
                    ],
                  }),
                }),
              },
              `${this.m_nKeyID}`,
            );
          }
        }
        var te = s(41635);
        function C(d) {
          const l = d.data,
            p = ye(d.sale, d.effect.name, `${l.strImage}.png`);
          let N = null;
          if (l.SOverlay) {
            const J = l.SOverlay
                ? ye(d.sale, d.effect.name, `${l.SOverlay.strImage}.png`)
                : null,
              ve = { animationDuration: `${l.SOverlay.nDuration}s` };
            N = (0, e.jsx)("img", {
              src: J,
              className: Q()[l.SOverlay.strClass],
              style: ve,
            });
          }
          let z = {
            animationDuration: `${l.nDuration}s`,
            animationName: Q()[l.strAnimation],
            marginLeft: `${l.nOffset}%`,
          };
          return (0, e.jsxs)("div", {
            style: z,
            className: Q().balloons,
            children: [
              (0, e.jsx)("img", {
                src: p,
                style: { maxWidth: "100%", position: "absolute" },
              }),
              N,
            ],
          });
        }
        class Me extends he {
          m_rgBalloons = [];
          m_rgImages;
          m_nNextImage = 0;
          constructor(l) {
            super(l),
              l.sale === "lny2020"
                ? (this.m_rgImages = ["orange", "peach", "yellow"])
                : (this.m_rgImages = [
                    "balloon_blue",
                    "balloon_cyan",
                    "balloon_green",
                    "balloon_purple",
                    "balloon_red",
                    "balloon_yellow",
                  ]),
              te.fW(this.m_rgImages),
              this.GenerateBalloons();
          }
          GetNextImage() {
            let l = this.m_rgImages[this.m_nNextImage % this.m_rgImages.length];
            return this.m_nNextImage++, l;
          }
          GenerateDuration() {
            const l = parseFloat(Q().balloonsDurationS),
              p = parseFloat(Q().balloonsDurationJitterS);
            return l + p * Math.random();
          }
          GenerateBalloons() {
            let l = ["balloon_small_1", "balloon_small_2", "balloon_small_3"],
              p = ["balloon_big_1", "balloon_big_2"],
              N = ["balloon_move_left", "balloon_move_right"];
            this.m_rgBalloons = [];
            for (let dt of l) {
              let Nt = re.Tg(-10, 10);
              this.m_rgBalloons.push(this.GenerateSingleBalloon(dt, Nt));
            }
            let z = [70, 20];
            te.fW(z);
            let J = z[1] == 20;
            for (let dt of p) {
              let Nt = re.Tg(-10, 10) + z.pop();
              this.m_rgBalloons.push(this.GenerateSingleBalloon(dt, Nt));
            }
            let ve = N[re.Tg(0, 1)];
            J && (ve = "balloon_move_left");
            let gt = re.Tg(-10, 10);
            this.m_rgBalloons.push(this.GenerateSingleBalloon(ve, gt));
          }
          GenerateSingleBalloon(l, p) {
            const N = this.GetNextImage();
            let z = {
              strAnimation: l,
              strImage: N,
              nDuration: this.GenerateDuration(),
              nOffset: p,
            };
            return (
              this.props.sale == "lny2020" &&
                (z.SOverlay = {
                  strImage: N + "-glow",
                  strClass: "lantern_glow",
                  nDuration: 1 + Math.random() * 4,
                }),
              z
            );
          }
          render() {
            return (0, e.jsx)(m.Fragment, {
              children: this.m_rgBalloons.map((l, p) =>
                (0, e.jsx)(
                  C,
                  {
                    data: l,
                    effect: this.props.effect,
                    sale: this.m_strSaleId,
                  },
                  `${p}`,
                ),
              ),
            });
          }
        }
        class je {
          m_seed;
          constructor(l) {
            this.m_seed = l;
          }
          next() {
            const l = Math.sin(this.m_seed++) * 1e3;
            return l - Math.floor(l);
          }
        }
        const Ie = 1e4;
        function Ee(d) {
          const p = [],
            N = new je(d.timestamp);
          for (let z = 0; z < 150; z++) {
            const J = N.next(),
              ve = {
                left: `${N.next() * 100}%`,
                animationDuration: `${(1 - J) * 3 + 4}s`,
                animationDelay: `${J + N.next() * 4}s`,
              };
            p.push(
              (0, e.jsxs)(
                "div",
                {
                  style: ve,
                  className: (0, A.A)(
                    Q().Snowflake,
                    Q()[`Snowflake-${z % 20}`],
                  ),
                  children: [ce(J), ce(J + 1)],
                },
                d.timestamp + "_" + z,
              ),
            );
          }
          return (0, e.jsxs)(m.Fragment, { children: [" ", p, " "] });
        }
        function ce(d) {
          const l = new je(d);
          let p = l.next() * 0.8 + 0.5;
          const N = `${(l.next() + d) * 10 + 10}px`,
            z = {
              opacity: p,
              width: N,
              height: N,
              margin: `${l.next() * 30 + 15}px`,
              filter: `hue-rotate(${l.next() * 90 - 30}deg) saturate(100%)`,
            },
            J = 1 + Math.floor(l.next() * 5),
            ve =
              le.TS.COMMUNITY_CDN_ASSET_URL +
              `winter2019/roomeffects/96px/flake_${J}.png`;
          return (0, e.jsx)("img", { style: z, src: ve });
        }
        var Ae = Object.defineProperty,
          Ye = Object.getOwnPropertyDescriptor,
          at = (d, l, p, N) => {
            for (
              var z = N > 1 ? void 0 : N ? Ye(l, p) : l, J = d.length - 1, ve;
              J >= 0;
              J--
            )
              (ve = d[J]) && (z = (N ? ve(l, p, z) : ve(z)) || z);
            return N && z && Ae(l, p, z), z;
          };
        const rt = parseInt(Q().balloonsDurationMaxMs),
          Xe = parseInt(Q().snowballDurationMs);
        function ge(d, l) {
          return () => {
            const p =
              le.TS.COMMUNITY_CDN_ASSET_URL +
              l +
              "/roomeffects/96px/" +
              d +
              ".png";
            return (0, e.jsx)("img", { style: { width: "100%" }, src: p });
          };
        }
        function Ge(d, l, p, N) {
          return {
            timeout: p,
            renderButton: ge(d, l),
            renderEffectIcon: ge(d, l),
            buttonToken: "#ChatEntryButton_Send" + de.Xw(d),
            locToken: "#ChatRoom_RoomEffect" + de.Xw(d),
            render: N,
          };
        }
        function it(d, l, p) {
          return Ge(d, "winter2019", l, p);
        }
        const ut = {
          lny2020_lanterns: Ge("lny2020_lanterns", "lny2020", rt, (d) =>
            (0, e.jsx)(Me, { effect: d, sale: "lny2020" }),
          ),
          lny2020_firework: Ge("lny2020_firework", "lny2020", Fe, () =>
            (0, e.jsx)(Ze, { sale: "lny2020" }),
          ),
          lny2020_confetti: Ge("lny2020_confetti", "lny2020", ke.nT, () =>
            (0, e.jsx)(ke.NW, { eType: ke.O4.LNY2020 }),
          ),
          snowball: it("snowball", Xe, (d) =>
            (0, e.jsx)(k, { effect: d, sale: "winter2019" }),
          ),
          balloons: it("balloons", rt, (d) =>
            (0, e.jsx)(Me, { effect: d, sale: "winter2019" }),
          ),
          confetti: it("confetti", ke.nT, () =>
            (0, e.jsx)(ke.NW, { eType: ke.O4.Default }),
          ),
          goldfetti: it("goldfetti", ke.nT, () =>
            (0, e.jsx)(ke.NW, { eType: ke.O4.Gold }),
          ),
          firework: it("firework", Fe, () =>
            (0, e.jsx)(Ze, { sale: "winter2019" }),
          ),
          snow: it("snow", Ie, Ee),
        };
        let $ = class extends m.Component {
          render() {
            return (0, e.jsx)("div", {
              className: Q()["animation-container"],
              children: this.props.effectManager.m_rgRunningEffects.map((d) =>
                (0, e.jsx)(m.Fragment, { children: d.render() }, d.timestamp),
              ),
            });
          }
        };
        $ = at([h.PA], $);
        var ie = Object.defineProperty,
          pe = Object.getOwnPropertyDescriptor,
          Te = (d, l, p, N) => {
            for (
              var z = N > 1 ? void 0 : N ? pe(l, p) : l, J = d.length - 1, ve;
              J >= 0;
              J--
            )
              (ve = d[J]) && (z = (N ? ve(l, p, z) : ve(z)) || z);
            return N && z && ie(l, p, z), z;
          };
        class K {
          static k_QueueForEffect = {
            snowball: "snowball",
            snow: "confetti_snow",
            confetti: "confetti_snow",
            goldfetti: "confetti_snow",
            firework: "festive",
            balloons: "festive",
            lny2020_lanterns: "festive",
            lny2020_firework: "festive",
            lny2020_confetti: "confetti_snow",
          };
          name;
          timestamp;
          expires;
          settings;
          constructor(l, p) {
            if (!p.hasOwnProperty(l))
              throw new Error("Room effect " + l + " is not defined.");
            (this.name = l),
              (this.timestamp = Date.now()),
              (this.settings = p[l]),
              (this.expires = this.timestamp + this.settings.timeout);
          }
          static QueueFor(l) {
            return K.k_QueueForEffect[l];
          }
          Queue() {
            return K.k_QueueForEffect[this.name];
          }
          bIsExpired() {
            return Date.now() > this.expires;
          }
          bIsActive() {
            const l = Date.now();
            return this.timestamp <= l && this.expires > l;
          }
          iTimeToExpiry() {
            return this.expires - Date.now();
          }
          render() {
            return this.bIsActive() ? this.settings.render(this) : null;
          }
        }
        const X = class gs {
          static k_MaxRoomEffectRunning = {
            default: 1,
            snowball: 10,
            confetti_snow: 3,
            festive: 10,
          };
          m_mapRoomEffectQueue = {
            default: [],
            snowball: [],
            confetti_snow: [],
            festive: [],
          };
          m_effectSettings;
          m_rgRunningEffects = [];
          constructor(l) {
            (0, S.Gn)(this), (this.m_effectSettings = l);
          }
          AddRoomEffect(l) {
            this.QueueRoomEffect(l), this.UpdateRunningRoomEffects();
          }
          QueueRoomEffect(l) {
            this.m_mapRoomEffectQueue[K.QueueFor(l)].push(l);
          }
          ActivateRoomEffect(l) {
            try {
              const p = new K(l, this.m_effectSettings);
              this.m_rgRunningEffects.push(p),
                window.setTimeout(() => {
                  this.UpdateRunningRoomEffects();
                }, p.iTimeToExpiry() + 100);
            } catch (p) {
              console.log(p);
            }
          }
          BIsQueueFull(l) {
            return (
              this.m_rgRunningEffects.filter((N) => N.Queue() == l).length >=
              gs.k_MaxRoomEffectRunning[l]
            );
          }
          UpdateRunningRoomEffects() {
            this.m_rgRunningEffects = this.m_rgRunningEffects.filter(
              (l) => !l.bIsExpired(),
            );
            for (let l in this.m_mapRoomEffectQueue) {
              const p = l;
              for (
                ;
                this.m_mapRoomEffectQueue[p].length > 0 &&
                !this.BIsQueueFull(p);
              ) {
                const N = this.m_mapRoomEffectQueue[p].shift();
                if (!N) break;
                this.ActivateRoomEffect(N);
              }
            }
          }
        };
        Te([S.sH], X.prototype, "m_rgRunningEffects", 2);
        let we = X;
        var se = s(96986),
          xe = s(46943),
          Pe = s(85528),
          Ue = s(85599),
          yt = s(32819),
          Ct = s(64812);
        function nt(d) {
          const { link: l, className: p, ...N } = d,
            [z, J] = m.useState(!1),
            ve = () => {
              J(!0), navigator.clipboard.writeText(l);
            };
          return (0, e.jsx)("div", {
            title: (0, c.we)("#ToolTip_CopyLinkToClipboard"),
            className: (0, A.A)(Ct.Button, p),
            onClick: () => ve(),
            children: (0, e.jsx)(se.qY, {
              ...N,
              className: (0, A.A)(Ct.Icon),
              "data-flash": z ? 1 : 0,
              onAnimationEnd: () => J(!1),
            }),
          });
        }
        var Qe = s(51619),
          be = s(33198);
        function b(d) {
          return ({ className: l, ...p }) =>
            (0, e.jsx)(Qe.N, { className: (0, A.A)(d, l), ...p });
        }
        const Bt = b(be.GrayButton),
          Oe = b(be.BlueButton),
          lt = b(be.GreenButton);
        var Mt = s(58083),
          et = s(23903),
          Je = s(7967),
          pt = s(19730),
          mt = s(76867),
          Ke = s(25509),
          wt = s(94162),
          xt = Object.defineProperty,
          ht = Object.getOwnPropertyDescriptor,
          $e = (d, l, p, N) => {
            for (
              var z = N > 1 ? void 0 : N ? ht(l, p) : l, J = d.length - 1, ve;
              J >= 0;
              J--
            )
              (ve = d[J]) && (z = (N ? ve(l, p, z) : ve(z)) || z);
            return N && z && xt(l, p, z), z;
          };
        function ct(d, l) {
          (0, M.mK)(
            (0, e.jsx)(es, { definitionid: l }),
            d ? (0, n.uX)(d) : window,
          );
        }
        function Re(d, l, p, N) {
          const z = {
            type: 1,
            rewardDefinition: l,
            itemLevel: p,
            desiredItemLevel: p,
          };
          (0, M.mK)(
            (0, e.jsx)(St, { definition: z, saleitem: N }),
            d ? (0, n.uX)(d) : window,
          );
        }
        function Dt(d, l, p, N) {
          const z = {
            type: 3,
            profileCustomizationType: l,
            itemCount: p,
            itemLevel: N,
            desiredItemLevel: N,
          };
          (0, M.mK)(
            (0, e.jsx)(St, { definition: z }),
            d ? (0, n.uX)(d) : window,
          );
        }
        function ft(d, l, p, N) {
          const z = {
            type: 2,
            profileCustomizationType: l,
            itemLevel: p,
            desiredItemLevel: N,
          };
          (0, M.mK)(
            (0, e.jsx)(St, { definition: z }),
            d ? (0, n.uX)(d) : window,
          );
        }
        function zt(d, l) {
          const p = { type: 1, rewardDefinition: l };
          (0, M.mK)(
            (0, e.jsx)(ts, { definition: p }),
            d ? (0, n.uX)(d) : window,
          );
        }
        var kt = ((d) => (
          (d[(d.k_ERedeemPointsTypeInvalid = 0)] =
            "k_ERedeemPointsTypeInvalid"),
          (d[(d.k_ERedeemPointsTypeVirtualItem = 1)] =
            "k_ERedeemPointsTypeVirtualItem"),
          (d[(d.k_ERedeemPointsTypeProfileShowcaseUpgrade = 2)] =
            "k_ERedeemPointsTypeProfileShowcaseUpgrade"),
          (d[(d.k_ERedeemPointsTypeProfileShowcaseSlot = 3)] =
            "k_ERedeemPointsTypeProfileShowcaseSlot"),
          d
        ))(kt || {});
        function Vt(d) {
          switch (d.type) {
            case 1:
              return f.DZ.Get().BCanRedeemPointsForItem(d.rewardDefinition);
            case 2:
              return f.DZ.Get().BCanRedeemPointsForProfileShowcaseUpgrade(
                d.profileCustomizationType,
                d.itemLevel,
              );
            case 3:
              return f.DZ.Get().BCanRedeemPointsForProfileShowcaseSlot(
                d.profileCustomizationType,
                d.itemCount,
              );
          }
          return !1;
        }
        function Qt(d) {
          switch (d.type) {
            case 1:
              return f.DZ.Get().BRewardEquippedByUser(d.rewardDefinition);
            case 2:
              return !f.DZ.Get().BCanRedeemPointsForProfileShowcaseUpgrade(
                d.profileCustomizationType,
                d.itemLevel,
              );
            case 3:
              return !f.DZ.Get().BCanRedeemPointsForProfileShowcaseSlot(
                d.profileCustomizationType,
                d.itemCount,
              );
          }
          return !0;
        }
        function Zt(d) {
          switch (d.type) {
            case 1:
              return d.rewardDefinition.community_item_class == x.u8
                ? f.DZ.Get().GetCostToLevelSeasonalBadge(d.itemLevel || 0)
                : d.rewardDefinition.type == j.kT.Mj ||
                    d.rewardDefinition.type == j.kT.Wy
                  ? f.DZ.Get().GetBundleOfferForUser(d.rewardDefinition)
                      .point_cost
                  : parseInt(d.rewardDefinition.point_cost);
            case 2:
              return f.DZ.Get().GetUpgradableProfileShowcaseCost();
            case 3:
              return f.DZ.Get().GetPurchasableProfileShowcaseSlotCost();
          }
          return 0;
        }
        function Lt(d) {
          switch (d.type) {
            case 1: {
              if (
                d.rewardDefinition.type == j.kT.Mj ||
                d.rewardDefinition.type == j.kT.Wy
              ) {
                const { discount: l, original_point_cost: p } =
                  f.DZ.Get().GetBundleOfferForUser(d.rewardDefinition);
                return { discount: l, originalCost: p };
              }
              return {
                discount: 0,
                originalCost: parseInt(d.rewardDefinition.point_cost),
              };
            }
            case 2:
              return {
                discount: 0,
                originalCost: f.DZ.Get().GetUpgradableProfileShowcaseCost(),
              };
            case 3:
              return {
                discount: 0,
                originalCost:
                  f.DZ.Get().GetPurchasableProfileShowcaseSlotCost(),
              };
          }
          return {
            discount: 0,
            originalCost: parseInt(d.rewardDefinition.point_cost),
          };
        }
        function es(d) {
          const { definitionid: l, ...p } = d,
            N = (0, L.q3)(() => f.DZ.Get().GetRewardItem(l));
          if (!N) return null;
          const z = { type: 1, rewardDefinition: N };
          return (0, e.jsx)(St, { definition: z, ...p });
        }
        let St = class extends m.Component {
          m_bShowTransitions = !1;
          m_bIsMounted = !0;
          m_strError;
          m_mutableObjDefinition;
          constructor(d) {
            super(d),
              (this.state = {
                step: "loading",
                error: !1,
                requestInProgress: !1,
              }),
              (this.m_bShowTransitions = !0),
              (this.m_mutableObjDefinition = this.props.definition);
          }
          componentDidMount() {
            if (this.m_mutableObjDefinition.type == 1) {
              const d =
                this.m_mutableObjDefinition.rewardDefinition.bundle_defids;
              (0, S.z7)(
                () =>
                  !d ||
                  d.length == 0 ||
                  f.DZ.Get().GetRewardDefinitions(...d).length > 0,
              )
                .then(() => {
                  let l = [];
                  d?.length != 0
                    ? (l = f.DZ.Get()
                        .GetRewardDefinitions(...d)
                        .map((z) => z.appid))
                    : l.push(
                        this.m_mutableObjDefinition.rewardDefinition.appid,
                      );
                  let p = Array.from(new Set(l));
                  return Promise.all(
                    p.map((N) =>
                      f.DZ.Get().EnsureCommunityItemInventoryLoaded(N),
                    ),
                  );
                })
                .then(() => this.SetInitialState());
            } else this.SetInitialState();
          }
          componentWillUnmount() {
            this.m_bIsMounted = !1;
          }
          SetInitialState() {
            this.m_bIsMounted &&
              (this.setState({ error: !1, requestInProgress: !1 }),
              this.BAlreadyEquipped()
                ? (this.setState({ step: "equipped" }),
                  (this.m_bShowTransitions = !1))
                : this.BSkipToEquip()
                  ? (this.setState({ step: "equip" }),
                    (this.m_bShowTransitions = !1))
                  : f.DZ.Get().BIsLoggedIn() && !this.BCanRedeemPointsForItem()
                    ? (this.setState({ step: "cantredeemforapp" }),
                      this.ShowError(),
                      (this.m_bShowTransitions = !1))
                    : this.BSkipToCantAfford()
                      ? (this.setState({ step: "cantafford" }),
                        this.ShowError(),
                        (this.m_bShowTransitions = !1))
                      : this.BIsFreeSaleRewardItem()
                        ? this.setState({ step: "saleitem" })
                        : this.setState({ step: "redeem" }));
          }
          BIsFreeSaleRewardItem() {
            return this.props.saleitem && f.DZ.Get().BIsSaleActive();
          }
          BCanRedeemPointsForItem() {
            return Vt(this.props.definition);
          }
          BSkipToCantAfford() {
            if (
              this.props.definition.type == 2 ||
              this.props.definition.type == 3
            )
              return f.DZ.Get().BIsLoggedIn() && !this.BCanAffordItem();
            const d =
              f.DZ.Get().BRewardOwnedByUser(
                this.props.definition.rewardDefinition,
              ) && this.props.definition.rewardDefinition.type != j.kT.X6;
            return f.DZ.Get().BIsLoggedIn() && !d && !this.BCanAffordItem();
          }
          BAlreadyEquipped() {
            return Qt(this.props.definition);
          }
          BSkipToEquip() {
            return this.props.definition.type == 2 ||
              this.props.definition.type == 3
              ? !1
              : !!(
                  f.DZ.Get().BRewardOwnedByUser(
                    this.props.definition.rewardDefinition,
                  ) &&
                  ((this.props.definition.rewardDefinition.type == j.kT.X6 &&
                    f.DZ.Get().GetUserSeasonalBadgeLevel() >=
                      this.props.definition.itemLevel) ||
                    this.props.definition.rewardDefinition.type == j.kT.b2 ||
                    this.props.definition.rewardDefinition.type == j.kT.Mj ||
                    this.props.definition.rewardDefinition.type == j.kT.Wy)
                );
          }
          GetPointCost() {
            return Zt(this.props.definition);
          }
          BCanAffordItem() {
            return (
              f.DZ.Get().GetPointsAvailable().getLowBits() >=
              this.GetPointCost()
            );
          }
          ShowGenericError() {
            this.ShowError(
              (0, c.PP)(
                "#Redeem_Error_Generic",
                (0, e.jsx)("a", {
                  href: le.TS.HELP_BASE_URL,
                  children: (0, c.we)("#Redeem_Error_SteamSupport"),
                }),
              ),
            );
          }
          ShowError(d) {
            d && (this.m_strError = d),
              this.setState({ error: !0, requestInProgress: !1 });
          }
          RedeemPoints() {
            if (!this.state.requestInProgress) {
              if (!f.DZ.Get().BIsLoggedIn()) {
                this.CloseModal(),
                  f.DZ.Get().ShowLoginDialog(
                    this.props.definition.rewardDefinition
                      ? this.props.definition.rewardDefinition.defid
                      : void 0,
                  );
                return;
              }
              switch (
                (this.setState({ requestInProgress: !0, error: !1 }),
                this.props.definition.type)
              ) {
                case 1:
                  switch (this.props.definition.rewardDefinition.type) {
                    case j.kT.b2:
                    case j.kT.Mj:
                    case j.kT.Wy:
                      this.BIsFreeSaleRewardItem()
                        ? f.tP
                            .Get()
                            .ClaimFreeSaleItem()
                            .then((d) => {
                              d.eResult == oe.R
                                ? ((this.m_mutableObjDefinition.rewardDefinition =
                                    f.tP.Get().GetClaimedSaleRewardItemDef()),
                                  this.setState({
                                    step: "equip",
                                    requestInProgress: !1,
                                  }))
                                : d.strMessage?.length
                                  ? this.ShowError(d.strMessage)
                                  : this.ShowGenericError();
                            })
                            .catch(this.ShowGenericError)
                        : f.DZ.Get()
                            .RedeemPointsForItem(
                              this.props.definition.rewardDefinition.defid,
                              this.props.definition.rewardDefinition.appid,
                              Zt(this.m_mutableObjDefinition),
                            )
                            .then((d) => {
                              d.eResult == oe.R
                                ? this.setState({
                                    step: "equip",
                                    requestInProgress: !1,
                                  })
                                : d.strMessage.length
                                  ? this.ShowError(d.strMessage)
                                  : this.ShowGenericError(),
                                d.eResult == oe.$U &&
                                  this.setState({ step: "pricechange" });
                            })
                            .catch(this.ShowGenericError);
                      break;
                    case j.kT.j1:
                      f.DZ.Get()
                        .RedeemPointsForCoupon(
                          this.props.definition.rewardDefinition.defid,
                        )
                        .then((d) => {
                          d.eResult == oe.R
                            ? this.setState({
                                step: "equip",
                                requestInProgress: !1,
                              })
                            : this.ShowGenericError();
                        })
                        .catch(this.ShowGenericError);
                      break;
                    case j.kT.X6:
                      {
                        let d = Math.max(
                          this.props.definition.itemLevel -
                            f.DZ.Get().GetUserSeasonalBadgeLevel(),
                          1,
                        );
                        f.DZ.Get()
                          .RedeemPointsForBadge(
                            this.props.definition.rewardDefinition.defid,
                            d,
                          )
                          .then((l) => {
                            l.eResult == oe.R
                              ? this.setState({
                                  step: "equip",
                                  requestInProgress: !1,
                                })
                              : l.strMessage.length
                                ? this.ShowError(l.strMessage)
                                : this.ShowGenericError();
                          })
                          .catch(this.ShowGenericError);
                      }
                      break;
                  }
                  break;
                case 2:
                  f.DZ.Get()
                    .RedeemPointsForProfileShowcaseUpgrade(
                      this.props.definition.profileCustomizationType,
                      this.props.definition.desiredItemLevel,
                    )
                    .then((d) => {
                      d.eResult == oe.R
                        ? (this.setState({ requestInProgress: !1 }),
                          this.CloseModal())
                        : d.strMessage.length
                          ? this.ShowError(d.strMessage)
                          : this.ShowGenericError();
                    })
                    .catch(this.ShowGenericError);
                  break;
                case 3:
                  f.DZ.Get()
                    .RedeemPointsForProfileShowcase(
                      this.props.definition.profileCustomizationType,
                    )
                    .then((d) => {
                      d.eResult == oe.R
                        ? this.CloseModal()
                        : d.strMessage.length
                          ? this.ShowError(d.strMessage)
                          : this.ShowGenericError();
                    })
                    .catch(this.ShowGenericError);
                  break;
              }
            }
          }
          EquipItem() {
            if (this.state.requestInProgress) return;
            this.setState({ requestInProgress: !0, error: !1 });
            let d = null;
            switch (
              this.props.definition.rewardDefinition.community_item_class
            ) {
              case x.sU:
                d = f.DZ.Get().SetProfileBackground(
                  this.props.definition.rewardDefinition,
                );
                break;
              case x.xi:
                d = f.DZ.Get().SetAvatarFrame(
                  this.props.definition.rewardDefinition,
                );
                break;
              case x.xw:
                d = f.DZ.Get().SetAnimatedAvatar(
                  this.props.definition.rewardDefinition,
                );
                break;
              case x.zs:
                d = f.DZ.Get().SetMiniProfileBackground(
                  this.props.definition.rewardDefinition,
                );
                break;
              case x.jE:
                d = f.DZ.Get().ActivateProfileModifier(
                  this.props.definition.rewardDefinition,
                );
                break;
              case x.yZ:
                d = f.DZ.Get().SetSteamDeckKeyboardSkin(
                  this.props.definition.rewardDefinition,
                );
                break;
              case x.Tl:
                (window.location.href = "steam://open/settings/customization"),
                  this.CloseModal();
                return;
              default: {
                (0, Y.wT)(
                  !1,
                  `Missing equip handler for item class ${this.props.definition.rewardDefinition.community_item_class}`,
                );
                return;
              }
            }
            d.then((l) => {
              l.eResult == oe.R
                ? this.setState({ step: "equipped", requestInProgress: !1 })
                : this.ShowGenericError();
            }).catch(this.ShowGenericError);
          }
          ReloadItemDef() {
            f.DZ.Get()
              .ReloadRewardDefinition(
                this.props.definition.rewardDefinition.defid,
              )
              .then((d) => {
                d &&
                  ((this.m_mutableObjDefinition.rewardDefinition = d),
                  this.SetInitialState());
              });
          }
          CloseModal() {
            this.props.closeModal && this.props.closeModal();
          }
          render() {
            let d = {
              enter: a.RedeemModalEnter,
              enterActive: a.RedeemModalEnterActive,
              exit: a.RedeemModalExit,
              exitActive: a.RedeemModalExitActive,
            };
            if (this.state.step == "loading") return null;
            const l = Xt(this.props.definition),
              p = Kt(this.props.definition),
              N = this.props.definition.rewardDefinition
                ? Pe.Vw.GetAppInfo(this.props.definition.rewardDefinition.appid)
                : null;
            let z = "";
            return (
              [j.kT.b2, j.kT.Mj, j.kT.Wy].includes(
                this.props.definition.rewardDefinition?.type,
              ) &&
                (z = `${document.location.href.split("/reward/")[0]}/reward/${this.props.definition.rewardDefinition.defid}`),
              (0, e.jsx)(os, {
                onEscKeypress: this.CloseModal,
                destructive: this.state.error,
                children: (0, e.jsx)(Je.Qg, {
                  className: a.RedeemModalMobileScroll,
                  children: (0, e.jsxs)(ls, {
                    children: [
                      (0, e.jsx)(Yt, {
                        itemName: l,
                        itemClassName: p,
                        itemLink: z,
                        appInfo: N,
                        onRequestClose: this.CloseModal,
                      }),
                      this.m_strError &&
                        this.state.error &&
                        (0, e.jsx)("div", {
                          className: a.ErrorContainer,
                          children: this.m_strError,
                        }),
                      (0, e.jsx)(U, {
                        children: (0, e.jsx)(
                          mt.M,
                          {
                            enter: this.m_bShowTransitions,
                            exit: this.m_bShowTransitions,
                            classNames: d,
                            timeout: 500,
                            children: (ve) =>
                              (0, e.jsx)(is, {
                                definition: this.m_mutableObjDefinition,
                                closeModal: this.CloseModal,
                                redeemPoints: this.RedeemPoints,
                                equipItem: this.EquipItem,
                                step: this.state.step,
                                bRequestInProgress:
                                  this.state.requestInProgress,
                                fnReloadItemDef: this.ReloadItemDef,
                                containerRef: ve,
                              }),
                          },
                          this.state.step,
                        ),
                      }),
                    ],
                  }),
                }),
              })
            );
          }
        };
        $e([F.oI], St.prototype, "ShowGenericError", 1),
          $e([F.oI], St.prototype, "ShowError", 1),
          $e([F.oI], St.prototype, "RedeemPoints", 1),
          $e([F.oI], St.prototype, "EquipItem", 1),
          $e([F.oI], St.prototype, "ReloadItemDef", 1),
          $e([F.oI], St.prototype, "CloseModal", 1),
          (St = $e([h.PA], St));
        const ts = (d) => {
            const { definition: l, closeModal: p } = d,
              N = () => {},
              z = l.rewardDefinition
                ? Pe.Vw.GetAppInfo(l.rewardDefinition.appid)
                : null;
            return (0, e.jsx)(os, {
              onEscKeypress: p,
              children: (0, e.jsx)(Je.Qg, {
                children: (0, e.jsx)("div", {
                  children: (0, e.jsxs)(ls, {
                    children: [
                      (0, e.jsx)(Yt, {
                        itemName: Xt(l),
                        itemClassName: Kt(l),
                        appInfo: z,
                        onRequestClose: p,
                      }),
                      (0, e.jsx)(is, {
                        definition: l,
                        closeModal: p,
                        redeemPoints: N,
                        equipItem: N,
                        step: "preview",
                        bRequestInProgress: !1,
                        fnReloadItemDef: N,
                      }),
                    ],
                  }),
                }),
              }),
            });
          },
          Yt = (0, h.PA)(
            ({
              itemName: d,
              itemClassName: l,
              itemLink: p,
              appInfo: N,
              onRequestClose: z,
            }) => {
              const J = (0, le.Qn)();
              return (0, e.jsxs)(u.Z, {
                className: a.HeaderContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: a.Left,
                    children: [
                      (0, e.jsxs)(u.Z, {
                        className: a.Header,
                        children: [
                          d,
                          p &&
                            !J &&
                            (0, e.jsx)(nt, {
                              link: p,
                              style: { marginLeft: "8px" },
                            }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: a.SubHeader,
                        children: l,
                      }),
                      N &&
                        (0, e.jsx)(_.N_, {
                          to: `${V.B.LoyaltyStore()}/app/` + N.appid,
                          onClick: z,
                          children: (0, e.jsxs)("div", {
                            className: a.SubHeaderAppContainer,
                            children: [
                              (0, e.jsx)("img", {
                                className: a.AppIcon,
                                src: N.icon_url,
                              }),
                              (0, e.jsxs)("div", {
                                className: a.SubHeader,
                                children: [" ", N.name, " "],
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  f.DZ.Get().BIsLoggedIn() &&
                    (0, e.jsxs)("div", {
                      className: a.PointsContainer,
                      children: [
                        (0, e.jsx)(y.vrn, { className: a.Icon }),
                        (0, e.jsxs)("div", {
                          className: a.BalanceColumn,
                          children: [
                            (0, e.jsx)("div", {
                              className: a.Balance,
                              children: (0, c.we)("#YourBalance"),
                            }),
                            (0, e.jsx)("div", {
                              className: a.CurrentPoints,
                              children: (0, pt.Dq)(
                                f.DZ.Get().GetPointsAvailable().getLowBits(),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
            },
          ),
          Xt = (d) =>
            d.type == 2 || d.type == 3
              ? (0, c.we)(
                  "#ProfileShowcases_ShowcaseName",
                  (0, c.we)(
                    "#ProfileShowcases_Type_" + d.profileCustomizationType,
                  ),
                )
              : Gt(d.rewardDefinition),
          Gt = (d) => {
            if (d.type == j.kT.b2)
              return (
                (0, Y.wT)(
                  d.community_item_data,
                  `Missing community item data for virtual item ${d.defid}`,
                ),
                d.community_item_data.item_title
              );
            if (d.type == j.kT.X6)
              return (0, c.we)("#Redeem_Badge_PrestigeBadge");
            if (d.type == j.kT.Mj) return d.community_item_data.item_title;
            if (d.type == j.kT.Wy) {
              const l = Pe.Vw.GetAppInfo(d.appid).name || "";
              return (0, c.we)("#RewardBundle_AutoGeneratedBundleName", l);
            } else return "Unknown";
          },
          Kt = (d) => {
            const {
              type: l,
              itemLevel: p,
              desiredItemLevel: N,
              rewardDefinition: z,
            } = d;
            switch (l) {
              case 2:
                return Vt(d)
                  ? (0, c.we)("#ProfileShowcases_UpgradeLevel", p, N)
                  : (0, c.we)("#ProfileShowcases_UpgradeAtMaxLevel", p);
              case 3:
                return (0, c.we)("#ProfileShowcases_AdditionalSlot");
              case 1:
                if (z.type == j.kT.b2 || z.type == j.kT.X6)
                  return z.appid != f.DZ.Get().GetCurrentSeasonalAppID() &&
                    z.community_item_class == x.jE &&
                    z.bundle_defids?.length != 0
                    ? (0, c.we)("#RewardItemType_ProfileBundle")
                    : (0, f.uv)(z.community_item_class);
                if (z.type == j.kT.Mj || z.type == j.kT.Wy)
                  return (0, c.we)("#RewardItemType_Bundle");
                break;
            }
            return "";
          },
          ne = (0, h.PA)((d) => {
            const { animatedAvatar: l, persona: p, strClassName: N } = d,
              z = {
                size: "FillArea",
                statusPosition: "none",
                className: (0, A.A)(N, a.playerAvatar),
              };
            return (0, e.jsx)(xe.i8, { persona: p, animatedAvatar: l, ...z });
          }),
          t = (0, h.PA)((d) => {
            const {
                animatedAvatar: l,
                avatarFrame: p,
                persona: N,
                className: z,
                strAnimatedAvatarClassName: J,
              } = d,
              ve = {
                size: "FillArea",
                statusPosition: "none",
                className: (0, A.A)(J, a.playerAvatar),
              };
            return (0, e.jsx)("div", {
              className: z,
              children: (0, e.jsx)(xe.i8, {
                persona: N,
                animatedAvatar: l,
                ...ve,
                children: (0, e.jsx)(xe.$Y, { profileItem: p }),
              }),
            });
          });
        class r extends m.Component {
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_Chat")
              : this.props.step == "saleitem"
                ? (0, e.jsxs)("div", {
                    children: [
                      (0, c.we)("#LunarSale2022_Redeem_Desc1"),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, c.we)("#LunarSale2022_Redeem_Desc2"),
                    ],
                  })
                : (0, c.we)("#Redeem_UsePoints_Sticker");
          }
          GetModalPreview() {
            if (this.props.step == "saleitem")
              return (0, e.jsx)(Et, {
                className: a.PreviewSummerSaleCtn,
                step: this.props.step,
                children: (0, e.jsx)("img", {
                  className: a.SaleRewardImg,
                  alt: "Free Sale Item",
                  src: me,
                }),
              });
            {
              const l = this.props.definition.rewardDefinition;
              let p = {
                  backgroundImage:
                    "url(" +
                    (0, Ke.k)(l.appid, l.community_item_data.item_image_small) +
                    ")",
                },
                N = (0, Ke.k)(l.appid, l.community_item_data.item_image_large);
              return (0, e.jsxs)(Et, {
                className: a.PreviewChat,
                step: this.props.step,
                children: [
                  (0, e.jsx)("div", { className: a.LargePreview, style: p }),
                  (0, e.jsx)(rs, { icon: N }),
                ],
              });
            }
          }
          render() {
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: (0, A.A)(
                a.StickerPreviewContainer,
                a.ChatPreviewContainer,
              ),
              children: [
                this.GetModalPreview(),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: (0, e.jsx)(Jt, {
                    closeModal: this.props.closeModal,
                  }),
                }),
              ],
            });
          }
        }
        class o extends m.Component {
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_Profile")
              : this.props.step == "equipped"
                ? (0, e.jsx)("div", {
                    className: a.EquippedDesc,
                    children: (0, c.PP)(
                      "#Redeem_Equipped_Background",
                      (0, e.jsx)("span", {
                        children:
                          this.props.definition.rewardDefinition
                            .community_item_data.item_title,
                      }),
                    ),
                  })
                : (0, c.we)("#Redeem_UsePoints_Background");
          }
          GetPreview() {
            const l = this.props.definition.rewardDefinition;
            let p = {
                backgroundImage:
                  "url(" +
                  (0, Ke.k)(l.appid, l.community_item_data.item_image_large) +
                  ")",
              },
              N = (0, e.jsx)("div", {
                className: (0, A.A)(
                  a.LargePreview,
                  l.community_item_data.tiled && a.TiledBackground,
                ),
                style: p,
              });
            if (l.community_item_data.animated) {
              let z = l.community_item_data.item_movie_webm,
                J = l.community_item_data.item_movie_mp4;
              N = (0, e.jsxs)("video", {
                className: a.VideoPreview,
                playsInline: !0,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                controls: !1,
                children: [
                  (0, e.jsx)("source", {
                    src: (0, Ke.k)(l.appid, z),
                    type: "video/webm",
                  }),
                  (0, e.jsx)("source", {
                    src: (0, Ke.k)(l.appid, J),
                    type: "video/mp4",
                  }),
                ],
              });
            }
            return N;
          }
          GetButtons() {
            return this.props.step == "equip"
              ? (0, e.jsx)(At, {
                  closeModal: this.props.closeModal,
                  equipItem: this.props.equipItem,
                })
              : this.props.step == "equipped"
                ? (0, e.jsx)(Wt, { closeModal: this.props.closeModal })
                : null;
          }
          render() {
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: a.BackgroundPreviewContainer,
              children: [
                (0, e.jsxs)(Et, {
                  className: a.PreviewBackgroundContainer,
                  step: this.props.step,
                  children: [
                    (0, e.jsx)("div", { className: a.PreviewBackground }),
                    this.GetPreview(),
                  ],
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: this.GetButtons(),
                }),
              ],
            });
          }
        }
        class i extends m.Component {
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_Chat")
              : (0, c.we)("#Redeem_UsePoints_Emoticon");
          }
          render() {
            const l = this.props.definition.rewardDefinition;
            let p = (0, Ke.k)(l.appid, l.community_item_data.item_image_small),
              N = {
                backgroundImage:
                  "url(" +
                  (0, Ke.k)(l.appid, l.community_item_data.item_image_large) +
                  ")",
              };
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: (0, A.A)(
                a.EmoticonPreviewContainer,
                a.ChatPreviewContainer,
              ),
              children: [
                (0, e.jsxs)(Et, {
                  className: a.PreviewChat,
                  step: this.props.step,
                  children: [
                    (0, e.jsxs)("div", {
                      className: a.LargePreviewContainer,
                      children: [
                        (0, e.jsx)("div", {
                          className: a.LargePreview,
                          style: N,
                        }),
                        (0, e.jsx)("div", {
                          className: a.LargePreview,
                          style: N,
                        }),
                        (0, e.jsx)("div", {
                          className: a.LargePreview,
                          style: N,
                        }),
                      ],
                    }),
                    (0, e.jsx)(rs, { icon: p }),
                  ],
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: (0, e.jsx)(Jt, {
                    closeModal: this.props.closeModal,
                  }),
                }),
              ],
            });
          }
        }
        let g = class extends m.Component {
          m_manager = new we(ut);
          m_interval;
          GetEffectTypeForDefinition() {
            return this.props.definition.rewardDefinition.internal_description;
          }
          GetEffectConfig() {
            return ut[this.GetEffectTypeForDefinition()];
          }
          componentDidMount() {
            const d = this.GetEffectTypeForDefinition();
            this.m_manager.AddRoomEffect(d),
              (this.m_interval = window.setInterval(
                () => this.m_manager.AddRoomEffect(d),
                this.GetEffectConfig().timeout,
              ));
          }
          componentWillUnmount() {
            window.clearInterval(this.m_interval);
          }
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_Chat")
              : (0, c.we)("#Redeem_UsePoints_ChatEffect");
          }
          render() {
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: (0, A.A)(
                a.EmoticonPreviewContainer,
                a.ChatPreviewContainer,
              ),
              children: [
                (0, e.jsxs)(Et, {
                  className: a.PreviewChat,
                  step: this.props.step,
                  children: [
                    (0, e.jsx)("div", {
                      className: a.PreviewEffectContainer,
                      children: (0, e.jsx)($, {
                        effectManager: this.m_manager,
                      }),
                    }),
                    (0, e.jsx)(rs, {
                      children: this.GetEffectConfig().renderButton(),
                    }),
                  ],
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: (0, e.jsx)(Jt, {
                    closeModal: this.props.closeModal,
                  }),
                }),
              ],
            });
          }
        };
        g = $e([h.PA], g);
        class H extends m.Component {
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_Profile")
              : this.props.step == "equipped"
                ? (0, e.jsx)("div", {
                    className: a.EquippedDesc,
                    children: (0, c.PP)(
                      "#Redeem_Equipped_MiniProfile",
                      (0, e.jsx)("span", {
                        children:
                          this.props.definition.rewardDefinition
                            .community_item_data.item_title,
                      }),
                    ),
                  })
                : (0, c.we)("#Redeem_UsePoints_MiniProfile");
          }
          GetButtons() {
            return this.props.step == "equip"
              ? (0, e.jsx)(At, {
                  closeModal: this.props.closeModal,
                  equipItem: this.props.equipItem,
                })
              : this.props.step == "equipped"
                ? (0, e.jsx)(Bt, {
                    onClick: this.props.closeModal,
                    children: (0, c.we)("#Button_Close"),
                  })
                : null;
          }
          render() {
            const l = this.props.definition.rewardDefinition;
            let p = f.DZ.Get().GetEquippedItems(),
              N = f.DZ.Get().GetPersonaState(),
              z = (0, e.jsx)(t, {
                animatedAvatar: p.animated_avatar,
                persona: N,
                avatarFrame: p.avatar_frame,
                className: a.CurrentAvatar,
              });
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: a.MiniProfilePreviewContainer,
              children: [
                (0, e.jsx)(Et, {
                  className: a.PreviewBackgroundContainer,
                  step: this.props.step,
                  children: (0, e.jsxs)("div", {
                    className: a.ProfileContainer,
                    children: [
                      (0, e.jsxs)("video", {
                        width: "100%",
                        playsInline: !0,
                        loop: !0,
                        muted: !0,
                        autoPlay: !0,
                        controls: !1,
                        children: [
                          (0, e.jsx)("source", {
                            src: (0, Ke.k)(
                              l.appid,
                              l.community_item_data.item_movie_webm,
                            ),
                            type: "video/webm",
                          }),
                          (0, e.jsx)("source", {
                            src: (0, Ke.k)(
                              l.appid,
                              l.community_item_data.item_movie_mp4,
                            ),
                            type: "video/mp4",
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: a.ProfileImage,
                        children: f.DZ.Get().BIsLoggedIn() && z,
                      }),
                      (0, e.jsx)("div", {
                        className: (0, A.A)(
                          a.ImageBlur,
                          "miniprofile_backdropblur",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: this.GetButtons(),
                }),
              ],
            });
          }
        }
        class q extends m.Component {
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_Profile")
              : this.props.step == "equipped"
                ? (0, e.jsx)("div", {
                    className: a.EquippedDesc,
                    children: (0, c.PP)(
                      "#Redeem_Equipped_AvatarFrame",
                      (0, e.jsx)("span", {
                        children:
                          this.props.definition.rewardDefinition
                            .community_item_data.item_title,
                      }),
                    ),
                  })
                : (0, c.we)("#Redeem_UsePoints_AvatarFrame");
          }
          GetButtons() {
            return this.props.step == "equip"
              ? (0, e.jsx)(At, {
                  closeModal: this.props.closeModal,
                  equipItem: this.props.equipItem,
                })
              : this.props.step == "equipped"
                ? (0, e.jsx)(Wt, { closeModal: this.props.closeModal })
                : null;
          }
          render() {
            const l = this.props.definition.rewardDefinition;
            let p = f.DZ.Get().GetEquippedItems(),
              N = f.DZ.Get().GetPersonaState(),
              z = {
                appid: l.appid,
                image_small:
                  "items/" +
                  l.appid +
                  "/" +
                  l.community_item_data.item_image_small,
              },
              J = (0, e.jsx)(t, {
                animatedAvatar: p.animated_avatar,
                persona: N,
                avatarFrame: z,
                strAnimatedAvatarClassName: a.CurrentAvatar,
              }),
              ve = null;
            return (
              this.props.step != "equipped" &&
                f.DZ.Get().BIsLoggedIn() &&
                (ve = (0, e.jsxs)("div", {
                  className: a.CurrentlyEquippedAvatarAndFrame,
                  children: [
                    (0, e.jsx)(t, {
                      className: a.PreviewCurrentAvatar,
                      animatedAvatar: p.animated_avatar,
                      persona: N,
                      avatarFrame: p.avatar_frame,
                      strAnimatedAvatarClassName: a.CurrentAvatar,
                    }),
                    (0, e.jsx)("div", {
                      className: a.CurrentlyEquippedAvatarAndFrameDesc,
                      children: (0, c.we)(
                        "#Redeem_Equipped_CurrentAvatarFrame",
                      ),
                    }),
                  ],
                })),
              (0, e.jsxs)(Tt, {
                ref: this.props.containerRef,
                className: a.AvatarPreviewContainer,
                children: [
                  (0, e.jsxs)(Et, {
                    className: (0, A.A)(a.PreviewBackgroundContainer, a.Frame),
                    step: this.props.step,
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, A.A)(a.ItemPreview, a.TopAvatar),
                        children: J,
                      }),
                      (0, e.jsx)("div", {
                        className: (0, A.A)(a.ItemPreview, a.BottomAvatar),
                        children: J,
                      }),
                    ],
                  }),
                  ve,
                  (0, e.jsx)(bt, {
                    definition: this.props.definition,
                    step: this.props.step,
                    description: this.GetDescription(),
                  }),
                  (0, e.jsx)(Pt, {
                    fnReloadItemDef: this.props.fnReloadItemDef,
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                    children: this.GetButtons(),
                  }),
                ],
              })
            );
          }
        }
        class _e extends m.Component {
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_AnimatedAvatar")
              : this.props.step == "equipped"
                ? (0, e.jsx)("div", {
                    className: a.EquippedDesc,
                    children: (0, c.PP)(
                      "#Redeem_Equipped_AnimatedAvatar",
                      (0, e.jsx)("span", {
                        children:
                          this.props.definition.rewardDefinition
                            .community_item_data.item_title,
                      }),
                    ),
                  })
                : (0, c.we)("#Redeem_UsePoints_AnimatedAvatar");
          }
          GetButtons() {
            return this.props.step == "equip"
              ? (0, e.jsx)(At, {
                  closeModal: this.props.closeModal,
                  equipItem: this.props.equipItem,
                })
              : this.props.step == "equipped"
                ? (0, e.jsx)(Wt, { closeModal: this.props.closeModal })
                : null;
          }
          render() {
            const l = this.props.definition.rewardDefinition;
            let p = f.DZ.Get().GetEquippedItems(),
              N = f.DZ.Get().GetPersonaState(),
              z = {
                appid: l.appid,
                image_small:
                  "items/" +
                  l.appid +
                  "/" +
                  l.community_item_data.item_image_small,
              },
              J = (0, e.jsx)(t, {
                animatedAvatar: z,
                persona: N,
                avatarFrame: p.avatar_frame,
                strAnimatedAvatarClassName: a.CurrentAvatar,
              }),
              ve = null;
            return (
              this.props.step != "equipped" &&
                f.DZ.Get().BIsLoggedIn() &&
                (ve = (0, e.jsxs)("div", {
                  className: a.CurrentlyEquippedAvatarAndFrame,
                  children: [
                    (0, e.jsx)(t, {
                      className: a.PreviewCurrentAvatar,
                      animatedAvatar: p.animated_avatar,
                      persona: N,
                      avatarFrame: p.avatar_frame,
                      strAnimatedAvatarClassName: a.CurrentAvatar,
                    }),
                    (0, e.jsx)("div", {
                      className: a.CurrentlyEquippedAvatarAndFrameDesc,
                      children: (0, c.we)("#Redeem_Equipped_CurrentAvatar"),
                    }),
                  ],
                })),
              (0, e.jsxs)(Tt, {
                ref: this.props.containerRef,
                className: a.AvatarPreviewContainer,
                children: [
                  (0, e.jsxs)(Et, {
                    className: (0, A.A)(
                      a.PreviewBackgroundContainer,
                      a.Animated,
                    ),
                    step: this.props.step,
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, A.A)(a.ItemPreview, a.TopAvatar),
                        children: J,
                      }),
                      (0, e.jsx)("div", {
                        className: (0, A.A)(a.ItemPreview, a.BottomAvatar),
                        children: J,
                      }),
                    ],
                  }),
                  ve,
                  (0, e.jsx)(bt, {
                    definition: this.props.definition,
                    step: this.props.step,
                    description: this.GetDescription(),
                  }),
                  (0, e.jsx)(Pt, {
                    fnReloadItemDef: this.props.fnReloadItemDef,
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                    children: this.GetButtons(),
                  }),
                ],
              })
            );
          }
        }
        class tt extends m.Component {
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_SteamDeckKeyboardSkin")
              : (0, c.we)("#Redeem_UsePoints_SteamDeckKeyboardSkin");
          }
          GetButtons() {
            return this.props.step == "equip"
              ? (0, e.jsx)(At, {
                  closeModal: this.props.closeModal,
                  equipItem: this.props.equipItem,
                })
              : null;
          }
          render() {
            const l = this.props.definition.rewardDefinition;
            let p = (0, Ke.k)(l.appid, l.community_item_data.item_image_large);
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: (0, A.A)(a.KeyboardSkinPreviewContainer),
              children: [
                (0, e.jsx)(Et, {
                  className: a.LargePreview,
                  step: this.props.step,
                  children: (0, e.jsx)("img", {
                    className: a.KeyboardPreviewImg,
                    src: p,
                  }),
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: this.GetButtons(),
                }),
              ],
            });
          }
        }
        class vt extends m.Component {
          m_rtMinClientVersion = 1757452101;
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_SteamDeckStartupMovie")
              : (0, c.we)("#Redeem_UsePoints_SteamDeckStartupMovie");
          }
          GetButtons() {
            if (this.props.step == "equip")
              return (0, e.jsx)(At, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              });
          }
          BShowClientMinVersionWarning() {
            const l = (0, wt.MP)();
            return (
              (!l || l < this.m_rtMinClientVersion) &&
              this.props.step == "redeem" &&
              this.props.definition.rewardDefinition.timestamp_created >
                this.m_rtMinClientVersion
            );
          }
          render() {
            const l = this.props.definition.rewardDefinition;
            let p = (0, Ke.k)(l.appid, l.community_item_data.item_image_large);
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: (0, A.A)(a.StartupMoviePreviewContainer),
              children: [
                (0, e.jsx)(Et, {
                  className: a.LargePreview,
                  step: this.props.step,
                  children: (0, e.jsxs)("video", {
                    className: a.VideoPreview,
                    width: "100%",
                    playsInline: !0,
                    loop: !0,
                    muted: !1,
                    autoPlay: !0,
                    controls: !1,
                    children: [
                      (0, e.jsx)("source", {
                        src: (0, Ke.k)(
                          l.appid,
                          l.community_item_data.item_movie_webm,
                        ),
                        type: "video/webm",
                      }),
                      (0, e.jsx)("source", {
                        src: (0, Ke.k)(
                          l.appid,
                          l.community_item_data.item_movie_mp4,
                        ),
                        type: "video/mp4",
                      }),
                      (0, e.jsx)("img", { src: p }),
                    ],
                  }),
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                  children:
                    this.BShowClientMinVersionWarning() &&
                    (0, e.jsx)("div", {
                      className: (0, A.A)(a.Bold, a.NeedAppOwnership),
                      children: (0, c.we)(
                        "#Redeem_Warning_LatestClient",
                        (0, c.TW)(this.m_rtMinClientVersion, !1, !0),
                      ),
                    }),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: this.GetButtons(),
                }),
              ],
            });
          }
        }
        let st = class extends m.Component {
          GetDescription() {
            return (0, c.we)("#Redeem_UsePoints_Badge");
          }
          GetButtons() {
            return this.props.step == "equip"
              ? (0, e.jsx)(Wt, { closeModal: this.props.closeModal })
              : null;
          }
          GetPreviewForLevel() {
            let d = f.DZ.Get().GetUserSeasonalBadgeLevel();
            return this.props.step == "equip"
              ? (0, e.jsx)($t, {
                  definition: this.props.definition.rewardDefinition,
                  badgeLevel: d,
                  title: (0, c.we)("#Redeem_Badge_CurrentLevel"),
                })
              : d == 0
                ? (0, e.jsx)($t, {
                    definition: this.props.definition.rewardDefinition,
                    badgeLevel: this.props.definition.itemLevel,
                    title: (0, c.we)("#Redeem_Badge_AfterPoints"),
                  })
                : (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)($t, {
                        definition: this.props.definition.rewardDefinition,
                        badgeLevel: d,
                        title: (0, c.we)("#Redeem_Badge_CurrentLevel"),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, A.A)(a.BadgeColumn, a.ArrowColumn),
                        children: (0, e.jsx)("div", { className: a.BlueArrow }),
                      }),
                      (0, e.jsx)($t, {
                        definition: this.props.definition.rewardDefinition,
                        badgeLevel: this.props.definition.itemLevel,
                        title: (0, c.we)("#Redeem_Badge_AfterPoints"),
                      }),
                    ],
                  });
          }
          render() {
            return this.props.definition.rewardDefinition.community_item_data
              .badge_data[this.props.definition.itemLevel - 1]
              ? (0, e.jsxs)(Tt, {
                  ref: this.props.containerRef,
                  className: a.BadgeItemContainer,
                  children: [
                    (0, e.jsx)(Et, {
                      className: a.BadgePreviewContainer,
                      children: this.GetPreviewForLevel(),
                    }),
                    (0, e.jsx)(bt, {
                      definition: this.props.definition,
                      step: this.props.step,
                      description: this.GetDescription(),
                    }),
                    (0, e.jsx)(Pt, {
                      fnReloadItemDef: this.props.fnReloadItemDef,
                      bRequestInProgress: this.props.bRequestInProgress,
                      definition: this.props.definition,
                      step: this.props.step,
                      closeModal: this.props.closeModal,
                      redeemPoints: this.props.redeemPoints,
                      children: this.GetButtons(),
                    }),
                  ],
                })
              : (console.log(
                  `Missing badge level ${this.props.definition.itemLevel} image`,
                ),
                null);
          }
        };
        st = $e([h.PA], st);
        class It extends m.Component {
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_Coupon")
              : (0, c.we)("#Redeem_UsePoints_Coupon");
          }
          GetButtons() {
            return this.props.step == "equip"
              ? (0, e.jsx)(At, {
                  closeModal: this.props.closeModal,
                  equipItem: this.props.equipItem,
                })
              : this.props.step == "equipped"
                ? (0, e.jsx)(Wt, { closeModal: this.props.closeModal })
                : null;
          }
          render() {
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: a.CouponPreviewContainer,
              children: [
                (0, e.jsx)(Et, {
                  className: a.PreviewBackgroundContainer,
                  step: this.props.step,
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: this.GetButtons(),
                }),
              ],
            });
          }
        }
        class jt extends m.Component {
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_GoldenProfile")
              : this.props.step == "equipped"
                ? (0, c.we)("#Redeem_Equipped_GoldenProfile")
                : (0, c.we)("#Redeem_UsePoints_GoldenProfile");
          }
          GetButtons() {
            return this.props.step == "equip"
              ? (0, e.jsx)(At, {
                  closeModal: this.props.closeModal,
                  equipItem: this.props.equipItem,
                })
              : this.props.step == "equipped"
                ? (0, e.jsx)(Wt, { closeModal: this.props.closeModal })
                : null;
          }
          render() {
            const { definition: l } = this.props;
            let p = f.DZ.Get().GetPersonaState(),
              N = f.DZ.Get().GetEquippedItems(),
              z = f.DZ.Get().GetGoldenProfileConfigForApp(
                l.rewardDefinition.appid,
              );
            if (!z && l.rewardDefinition.bundle_defids?.length == 0)
              return null;
            if (!z) {
              z = { appid: l.rewardDefinition.appid, frame: "" };
              let gt = f.DZ.Get()
                .GetRewardDefinitions(...l.rewardDefinition.bundle_defids)
                .filter((dt) => dt.community_item_class == x.xi);
              gt?.length != 0 &&
                (z.frame =
                  "items/" +
                  l.rewardDefinition.appid +
                  "/" +
                  gt[0].community_item_data.item_image_small);
            }
            let J = { image_small: z.frame };
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: a.GoldenProfileContainer,
              children: [
                (0, e.jsx)(Et, {
                  className: a.GoldenProfilePreviewContainer,
                  step: this.props.step,
                  children: (0, e.jsx)("div", {
                    className: a.AvatarContainer,
                    children: (0, e.jsx)(xe.xz, {
                      size: "FillArea",
                      className: a.CurrentAvatar,
                      persona: p,
                      animatedAvatar: N.animated_avatar,
                      avatarFrame: J,
                    }),
                  }),
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                  children: (0, e.jsx)(as, {
                    children: (0, c.we)("#Redeem_GoldenProfile_Expiration"),
                  }),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: this.GetButtons(),
                }),
              ],
            });
          }
        }
        class ot extends m.Component {
          constructor(l) {
            super(l), (this.state = { bLoadedIFrame: !1, iframeHeight: 0 });
          }
          componentDidMount() {
            window.addEventListener("message", this.OnProfileFrameResized);
          }
          componentWillUnmount() {
            window.removeEventListener("message", this.OnProfileFrameResized);
          }
          OnProfileFrameResized = (l) => {
            l.data.message &&
              l.data.message == "iframe_dimensions" &&
              this.setState({ iframeHeight: l.data.height });
          };
          OnProfileFrameLoaded() {
            this.setState({ bLoadedIFrame: !0 });
          }
          GetDescription() {
            const l = (0, c.we)(
              "#ProfileShowcases_Type_" +
                this.props.definition.profileCustomizationType,
            );
            if (this.props.step == "equipped")
              return this.props.definition.type == 2
                ? (0, c.we)(
                    "#Redeem_Equipped_ProfileShowcaseUpgraded",
                    l,
                    this.props.definition.itemLevel,
                  )
                : (0, c.we)("#Redeem_Equipped_ProfileShowcaseSlotPurchased", l);
            if (this.props.definition.type == 2)
              return (0, c.we)(
                "#Redeem_UsePoints_ProfileShowcaseUpgrade",
                this.props.definition.desiredItemLevel,
              );
            const p = f.DZ.Get().GetMaxProfileShowcaseSlots();
            return (0, c.we)("#Redeem_UsePoints_ProfileShowcaseSlot", l, p + 1);
          }
          GetButtons() {
            return this.props.step == "equip"
              ? (0, e.jsx)(At, {
                  closeModal: this.props.closeModal,
                  equipItem: this.props.equipItem,
                })
              : this.props.step == "equipped"
                ? (0, e.jsx)(Wt, { closeModal: this.props.closeModal })
                : null;
          }
          GetProfileSteamID() {
            return f.DZ.Get().BIsLoggedIn()
              ? le.iA.steamid
              : le.TS.EUNIVERSE == G.Rv
                ? "148618792083695825"
                : "76561197960266962";
          }
          render() {
            const l = this.state.bLoadedIFrame;
            let p = (0, yt.uc)(this.props.definition.profileCustomizationType);
            const N = this.props.definition.profileCustomizationType,
              z = Math.min(
                this.props.definition.desiredItemLevel
                  ? this.props.definition.desiredItemLevel
                  : this.props.definition.itemLevel,
                f.DZ.Get().GetMaxProfileShowcaseUpgradeLevel(),
              ),
              J = this.state.iframeHeight * 0.5;
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: a.ProfileShowcaseContainer,
              children: [
                (0, e.jsxs)(Et, {
                  className: (0, A.A)(
                    a.ProfileShowcasePreviewContainer,
                    l ? a.LoadedPreview : a.LoadingPreview,
                  ),
                  step: this.props.step,
                  children: [
                    (0, e.jsx)("img", {
                      className: a.ProfileShowcaseIcon,
                      src: p,
                    }),
                    !l &&
                      (0, e.jsx)("div", {
                        className: a.ProfileThrobber,
                        children: (0, e.jsx)(Ue.t, {
                          position: "center",
                          size: "xlarge",
                          string: (0, c.we)(
                            "#ProfileShowcases_LoadingPreview",
                            (0, c.we)("#ProfileShowcases_Type_" + N),
                          ),
                        }),
                      }),
                    (0, e.jsx)(u.Z, {
                      childFocusDisabled: !0,
                      focusable: !1,
                      className: a.PreviewShowcasePreviewFrameContainer,
                      style: { height: J != 0 ? J + "px" : "1px" },
                      children: (0, e.jsx)("iframe", {
                        className: a.PreviewShowcasePreviewFrame,
                        src:
                          le.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          this.GetProfileSteamID() +
                          `/previewsingleshowcase/?customization_type=${N}&level=${z}`,
                        frameBorder: 0,
                        scrolling: "no",
                        onLoad: () => {
                          this.OnProfileFrameLoaded();
                        },
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: this.GetButtons(),
                }),
              ],
            });
          }
        }
        class fe extends m.Component {
          constructor(l) {
            super(l);
          }
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_Bundle")
              : (0, c.we)("#Redeem_UsePoints_Bundle");
          }
          GetButtons() {
            return this.props.step == "equip" || this.props.step == "equipped"
              ? (0, e.jsx)(Wt, { closeModal: this.props.closeModal })
              : null;
          }
          render() {
            const p = f.DZ.Get()
              .GetBundleOfferForUser(this.props.definition.rewardDefinition)
              .items.map((N) => {
                const z = N.community_item_data.item_image_large;
                let J = (0, Ke.k)(N.appid, z);
                N.community_item_class == x.sU &&
                  (J =
                    le.TS.COMMUNITY_CDN_URL +
                    "economy/profilebackground/items/" +
                    N.appid +
                    "/" +
                    N.community_item_data.item_image_large +
                    "?size=320x200");
                const ve = f.DZ.Get().BRewardOwnedByUser(N);
                return (0, e.jsxs)(
                  et.az,
                  {
                    padding: "xxsmall",
                    className: a.BundleItemPreview,
                    children: [
                      (0, e.jsx)("div", {
                        className: a.BundleItemPreviewImage,
                        children: (0, e.jsx)("img", { src: J }),
                      }),
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("div", {
                            className: a.BundleChildItemName,
                            children: N.community_item_data.item_title,
                          }),
                          (0, e.jsx)("div", {
                            className: a.BundleChildItemClass,
                            children: (0, f.uv)(N.community_item_class),
                          }),
                        ],
                      }),
                      ve &&
                        (0, e.jsxs)("div", {
                          className: a.BundleChildItemOwned,
                          children: [
                            (0, e.jsx)(se.wK, { className: a.OwnedCheckmark }),
                            this.props.step == "redeem" &&
                              (0, c.we)("#Redeem_BundleItemOwned"),
                          ],
                        }),
                    ],
                  },
                  N.defid,
                );
              });
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: a.BundleItemContainer,
              children: [
                (0, e.jsx)("div", {
                  className: a.BundleItemPreviewContainer,
                  children: p,
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: this.GetButtons(),
                }),
              ],
            });
          }
        }
        function Ve(d) {
          return (0, le.Qn)()
            ? null
            : (0, e.jsx)("div", {
                className: a.PreviewLinkContainer,
                children: (0, e.jsx)("a", {
                  href: d.strPreviewURL,
                  target: "_blank",
                  className: a.PreviewLink,
                  children: (0, c.we)("#ProfileModifier_PreviewLinkText"),
                }),
              });
        }
        class Ot extends m.Component {
          constructor(l) {
            super(l), (this.state = { bLoadedIFrame: !1 });
          }
          OnIFrameLoaded() {
            this.setState({ bLoadedIFrame: !0 });
          }
          GetProfileSteamID() {
            return f.DZ.Get().BIsLoggedIn()
              ? le.iA.steamid
              : le.TS.EUNIVERSE == G.Rv
                ? "148618792083695825"
                : "76561197960266962";
          }
          GetDescription() {
            return this.props.step == "equip"
              ? (0, c.we)("#Redeem_Equip_ProfileBundle")
              : (0, c.we)("#Redeem_UsePoints_ProfileBundle");
          }
          GetButtons() {
            return this.props.step == "equip" || this.props.step == "equipped"
              ? (0, e.jsx)(Wt, { closeModal: this.props.closeModal })
              : null;
          }
          render() {
            const { bLoadedIFrame: l } = this.state,
              p = f.DZ.Get().GetBundleOfferForUser(
                this.props.definition.rewardDefinition,
              ),
              N = this.props.definition.rewardDefinition.appid,
              z = this.props.definition.rewardDefinition.community_item_type,
              J = p.items.map((gt) => {
                let dt = (0, Mt.u)(gt);
                const Nt = f.DZ.Get().BRewardOwnedByUser(gt),
                  _t = gt.community_item_class == x.jE;
                return (0, e.jsxs)(
                  et.az,
                  {
                    padding: "xxsmall",
                    className: (0, A.A)(
                      a.BundleItemPreview,
                      _t && a.ProfileModifier,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: a.BundleItemPreviewImage,
                        children: (0, e.jsx)("img", { src: dt }),
                      }),
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("div", {
                            className: a.BundleChildItemName,
                            children: gt.community_item_data.item_title,
                          }),
                          (0, e.jsx)("div", {
                            className: a.BundleChildItemClass,
                            children: (0, f.uv)(gt.community_item_class),
                          }),
                        ],
                      }),
                      Nt &&
                        (0, e.jsxs)("div", {
                          className: a.BundleChildItemOwned,
                          children: [
                            (0, e.jsx)(se.wK, { className: a.OwnedCheckmark }),
                            this.props.step == "redeem" &&
                              (0, c.we)("#Redeem_ProfileBundleItemOwned"),
                          ],
                        }),
                    ],
                  },
                  gt.defid,
                );
              }),
              ve =
                le.TS.COMMUNITY_BASE_URL +
                "profiles/" +
                this.GetProfileSteamID() +
                "?previewprofile=1&appid=" +
                N +
                "&itemtype=" +
                z;
            return (0, e.jsxs)(Tt, {
              ref: this.props.containerRef,
              className: (0, A.A)(
                a.BundleItemContainer,
                l ? a.LoadedPreview : a.LoadingPreview,
              ),
              children: [
                !l &&
                  (0, e.jsx)("div", {
                    className: a.ProfileThrobber,
                    children: (0, e.jsx)(Ue.t, {
                      position: "center",
                      size: "xlarge",
                      string: (0, c.we)(
                        "#ProfileBundle_LoadingPreview",
                        Gt(this.props.definition.rewardDefinition),
                      ),
                    }),
                  }),
                (0, e.jsx)(u.Z, {
                  childFocusDisabled: !0,
                  focusable: !1,
                  className: a.PreviewProfileBundleFrameContainer,
                  children: (0, e.jsx)("iframe", {
                    className: a.PreviewProfileBundleFrame,
                    src: ve,
                    frameBorder: 0,
                    scrolling: "no",
                    onLoad: () => {
                      this.OnIFrameLoaded();
                    },
                  }),
                }),
                (0, e.jsx)(Ve, { strPreviewURL: ve }),
                (0, e.jsx)("div", {
                  className: a.BundleItemPreviewContainer,
                  children: J,
                }),
                (0, e.jsx)(bt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                (0, e.jsx)(Pt, {
                  fnReloadItemDef: this.props.fnReloadItemDef,
                  bRequestInProgress: this.props.bRequestInProgress,
                  definition: this.props.definition,
                  step: this.props.step,
                  closeModal: this.props.closeModal,
                  redeemPoints: this.props.redeemPoints,
                  children: this.GetButtons(),
                }),
              ],
            });
          }
        }
        const Rt = {
            [x.Ed]: r,
            [x.sU]: o,
            [x.J4]: i,
            [x.zs]: H,
            [x.xi]: q,
            [x.xw]: _e,
            [x.u8]: st,
            [x.wK]: g,
            [x.jE]: jt,
            [x.yZ]: tt,
            [x.Tl]: vt,
          },
          is = (0, h.PA)((d) => {
            let l = null;
            switch (d.definition.type) {
              case 3:
              case 2:
                l = ot;
                break;
              case 1:
                d.definition.rewardDefinition.type == j.kT.Mj ||
                d.definition.rewardDefinition.type == j.kT.Wy
                  ? (l = fe)
                  : d.definition.rewardDefinition.community_item_class ==
                        x.jE &&
                      d.definition.rewardDefinition.bundle_defids?.length != 0
                    ? (l = Ot)
                    : (l =
                        Rt[d.definition.rewardDefinition.community_item_class]);
            }
            return l
              ? (0, e.jsx)(l, { ...d })
              : d.definition.rewardDefinition.type == j.kT.j1
                ? (0, e.jsx)(It, { ...d })
                : null;
          }),
          as = (d) => {
            const { className: l, ...p } = d;
            return (0, e.jsxs)("div", {
              className: (0, A.A)(a.WarningTextContainer, d.className),
              ...p,
              children: [
                (0, e.jsx)(y.ENo, { className: a.TimeWarning }),
                d.children,
              ],
            });
          },
          ms = (d) => {
            const {
              cost: l,
              discount: p,
              originalCost: N,
              redeemPoints: z,
              closeModal: J,
            } = d;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(ss, {
                  cost: l,
                  discount: p,
                  originalCost: N,
                  onClick: z,
                }),
                (0, e.jsx)(Bt, {
                  onClick: J,
                  children: (0, c.we)("#Button_Cancel"),
                }),
              ],
            });
          },
          ss = (d) => {
            const {
              cost: l,
              discount: p,
              originalCost: N,
              onClick: z,
              className: J,
            } = d;
            if (p) {
              const gt = p ? (0, pt.Dq)(N) : "",
                dt = f.DZ.Get().BIsLoggedIn()
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsxs)("div", {
                          className: a.OriginalCost,
                          children: [
                            "\xA0",
                            gt,
                            " ",
                            (0, c.we)("#Rewards_Points"),
                            "\xA0",
                          ],
                        }),
                        (0, e.jsxs)(Z.Y, {
                          amount: l,
                          children: [
                            " ",
                            l > 0 && (0, c.we)("#Rewards_Points"),
                          ],
                        }),
                      ],
                    })
                  : (0, e.jsx)("span", {
                      children: (0, c.we)("#Button_Login"),
                    });
              return (0, e.jsxs)(u.Z, {
                focusable: !0,
                className: (0, A.A)(a.RedeemButton, J),
                onActivate: z,
                children: [
                  (0, e.jsxs)("div", {
                    className: a.DiscountContainer,
                    children: ["-", p, "%"],
                  }),
                  (0, e.jsx)("div", {
                    className: a.CostContainer,
                    children: dt,
                  }),
                ],
              });
            }
            const ve = f.DZ.Get().BIsLoggedIn()
              ? (0, e.jsxs)(Z.Y, {
                  size: 1.125,
                  amount: l,
                  children: [" ", l > 0 && (0, c.we)("#Rewards_Points")],
                })
              : (0, e.jsx)("span", { children: (0, c.we)("#Button_Login") });
            return (0, e.jsx)(u.Z, {
              focusable: !0,
              className: (0, A.A)(a.RedeemButton, J),
              onActivate: z,
              children: (0, e.jsx)("div", {
                className: a.CostContainer,
                children: ve,
              }),
            });
          },
          Jt = (d) => {
            const { closeModal: l } = d,
              p = () => {
                (window.location.href = "steam://open/friends"), l();
              },
              N = () => {
                window.open(
                  le.TS.CHAT_BASE_URL + "chat",
                  "height=790,width=1015,resize=yes,scrollbars=yes",
                ),
                  l();
              },
              z = async () => {
                p(), l();
              };
            return le.TS.IN_CLIENT
              ? (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(lt, {
                      onClick: p,
                      children: (0, c.we)("#Button_Goto_Chat"),
                    }),
                    (0, e.jsx)(Bt, {
                      onClick: l,
                      children: (0, c.we)("#Button_Later"),
                    }),
                  ],
                })
              : (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(lt, {
                      onClick: N,
                      children: (0, c.we)("#Button_Goto_WebChat"),
                    }),
                    (0, e.jsx)(Oe, {
                      onClick: z,
                      children: (0, c.we)("#Button_Goto_ClientChat"),
                    }),
                    (0, e.jsx)(Bt, {
                      onClick: l,
                      children: (0, c.we)("#Button_Later"),
                    }),
                  ],
                });
          },
          At = (d) => {
            const { equipItem: l, closeModal: p } = d;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(lt, {
                  onClick: l,
                  children: (0, c.we)("#Button_Equip"),
                }),
                (0, e.jsx)(Bt, {
                  onClick: p,
                  children: (0, c.we)("#Button_Later"),
                }),
              ],
            });
          },
          Wt = (d) => {
            const { closeModal: l } = d;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(Oe, {
                  onClick: () =>
                    (window.location.href = le.TS.COMMUNITY_BASE_URL + "my"),
                  children: (0, c.we)("#Button_Goto_Profile"),
                }),
                (0, e.jsx)(Bt, {
                  onClick: l,
                  children: (0, c.we)("#Button_Close"),
                }),
              ],
            });
          },
          ns = (d) => {
            const { closeModal: l } = d;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(Oe, {
                  onClick: l,
                  children: (0, e.jsx)(_.N_, {
                    to: V.B.LoyaltyHowItWorks(),
                    children: (0, c.we)("#Redeem_NeedToOwnApp"),
                  }),
                }),
                (0, e.jsx)(Bt, {
                  onClick: l,
                  children: (0, c.we)("#Button_Cancel"),
                }),
              ],
            });
          },
          Ft = (d) => {
            const { closeModal: l } = d;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(Oe, {
                  onClick: l,
                  children: (0, e.jsx)(_.N_, {
                    to: V.B.LoyaltyHowItWorks(),
                    children: (0, c.we)("#Redeem_HowToGetPoints"),
                  }),
                }),
                (0, e.jsx)(Bt, {
                  onClick: l,
                  children: (0, c.we)("#Button_Cancel"),
                }),
              ],
            });
          },
          Ut = (d) => {
            const { closeModal: l, fnReloadItemDef: p } = d;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(Oe, {
                  onClick: p,
                  children: (0, c.we)("#Redeem_PriceChange"),
                }),
                (0, e.jsx)(Bt, {
                  onClick: l,
                  children: (0, c.we)("#Button_Cancel"),
                }),
              ],
            });
          },
          Pt = (d) => {
            const {
              step: l,
              definition: p,
              closeModal: N,
              redeemPoints: z,
              bRequestInProgress: J,
              fnReloadItemDef: ve,
              ...gt
            } = d;
            let dt = d.children;
            if (J)
              dt = (0, e.jsx)(Ue.t, {
                className: a.RedeemThrobber,
                size: "medium",
              });
            else if (l == "preview")
              dt = (0, e.jsx)(Bt, {
                onClick: N,
                children: (0, c.we)("#Button_Close"),
              });
            else if (l == "redeem") {
              const Nt = Zt(p),
                { discount: _t, originalCost: Ht } = Lt(p);
              dt = (0, e.jsx)(ms, {
                cost: Nt,
                discount: _t,
                originalCost: Ht,
                redeemPoints: z,
                closeModal: N,
              });
            } else
              l == "cantredeemforapp"
                ? (dt = (0, e.jsx)(ns, { closeModal: N }))
                : l == "cantafford"
                  ? (dt = (0, e.jsx)(Ft, { closeModal: N }))
                  : l == "saleitem"
                    ? (dt = (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(Oe, {
                            onClick: z,
                            children: (0, c.we)("#SummerSale_Redeem_Btn"),
                          }),
                          (0, e.jsx)(Bt, {
                            onClick: N,
                            children: (0, c.we)("#Button_Cancel"),
                          }),
                        ],
                      }))
                    : l == "pricechange" &&
                      (dt = (0, e.jsx)(Ut, {
                        fnReloadItemDef: ve,
                        closeModal: N,
                      }));
            return (0, e.jsx)(u.Z, {
              "flow-children": "row",
              className: a.ItemButtonsContainer,
              ...gt,
              children: dt,
            });
          },
          Et = (d) => {
            const { step: l, className: p, ...N } = d;
            let z = null;
            return (
              d.step == "equip"
                ? (z = (0, e.jsx)("div", {
                    className: (0, A.A)(a.GreenCheck, a.PurchasedCheck),
                  }))
                : d.step == "equipped" &&
                  (z = (0, e.jsx)(se.wK, {
                    className: (0, A.A)(a.GreenCheck, a.EquippedCheck),
                  })),
              (0, e.jsxs)("div", {
                className: (0, A.A)(p, a.ItemPreviewContainer),
                ...N,
                children: [z, d.children],
              })
            );
          },
          rs = (d) => {
            const { icon: l, ...p } = d;
            return (0, e.jsx)("div", {
              className: a.ChatPickerContainer,
              ...p,
              children: (0, e.jsx)("div", {
                className: a.IconPreview,
                style: l && { backgroundImage: `url( ${l} )` },
                children: d.children,
              }),
            });
          },
          $t = (d) => {
            const { definition: l, badgeLevel: p, title: N } = d;
            if (!p) return null;
            let z = l.community_item_data.badge_data[p - 1]?.image,
              J = a.NextLevel;
            return (
              f.DZ.Get().GetUserSeasonalBadgeLevel() == p &&
                (J = a.CurrentLevel),
              (0, e.jsxs)("div", {
                className: a.BadgeColumn,
                children: [
                  (0, e.jsx)("div", { className: a.BadgeTitle, children: N }),
                  (0, e.jsxs)("div", {
                    className: a.BadgeDetailsContainer,
                    children: [
                      (0, e.jsx)("div", {
                        className: a.BadgeImgContainer,
                        children: (0, e.jsx)("div", {
                          className: a.BadgeImage,
                          style: {
                            backgroundImage: `url( ${(0, ae.Q)(l.appid, z)} )`,
                          },
                        }),
                      }),
                      (0, e.jsx)("div", { className: a.BadgeLine }),
                      (0, e.jsx)("div", {
                        className: (0, A.A)(a.BadgeLevelContainer, J),
                        children: (0, e.jsx)("div", {
                          className: a.BadgeLevelText,
                          children: p,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          bt = (d) => {
            const { definition: l, step: p, description: N, ...z } = d;
            let J,
              ve = null;
            if (
              (p == "equip" || p == "equipped") &&
              l.rewardDefinition &&
              l.rewardDefinition.type == j.kT.b2
            )
              J = (0, e.jsx)("div", {
                className: a.Bold,
                children: (0, c.we)(
                  "#Redeem_YoursToOwn",
                  Gt(l.rewardDefinition),
                ),
              });
            else if (p == "cantredeemforapp") {
              let gt = (0, e.jsx)("span", {
                className: a.NeedAppOwnership,
                children: Pe.Vw.GetAppInfo(l.rewardDefinition.appid).name || "",
              });
              ve = (0, e.jsx)("div", {
                className: (0, A.A)(a.Bold, a.Opacity),
                children: (0, c.PP)("#Redeem_CantRedeemItemForApp", gt),
              });
            } else if (p == "cantafford") {
              let dt = Zt(l) - f.DZ.Get().GetPointsAvailable().getLowBits();
              ve = (0, e.jsx)("div", {
                className: (0, A.A)(a.Bold, a.Opacity),
                children: (0, c.we)("#Redeem_CantAfford", (0, pt.Dq)(dt)),
              });
            }
            return (0, e.jsxs)("div", {
              className: a.ItemDescription,
              ...z,
              children: [
                J,
                (0, e.jsx)("div", { children: N }),
                d.children,
                ve,
                (0, e.jsx)("div", {
                  className: a.Small,
                  children: (0, c.we)("#Redeem_RefundWarning"),
                }),
              ],
            });
          },
          Tt = m.forwardRef((d, l) => {
            const { className: p, ...N } = d;
            return (0, e.jsx)(u.Z, {
              ref: l,
              className: (0, A.A)(a.ItemWrapper, p),
              ...N,
              children: d.children,
            });
          });
        function os(d) {
          const { children: l, destructive: p, onEscKeypress: N } = d;
          return (0, e.jsx)(w.x_, {
            onEscKeypress: N,
            bHideCloseIcon: !0,
            bDestructiveWarning: p,
            hideTopBar: !1,
            bGamepadUIScrollWithin: !0,
            children: l,
          });
        }
        function ls(d) {
          const l = (0, et.xC)() !== "desktop";
          return (0, e.jsx)(u.Z, {
            className: (0, A.A)(a.ModalContainer, l && a.Responsive),
            ...d,
          });
        }
      },
      32819: (W, E, s) => {
        "use strict";
        s.d(E, {
          kn: () => Q,
          uc: () => D,
          y2: () => Fe,
          y7: () => qe,
          Fo: () => he,
          sc: () => Ze,
        });
        var e = s(7850),
          m = s(90626),
          u = s(75844),
          S = s(54722),
          L = s(36118),
          h = s(74077),
          F = s(49288),
          _ = s(23386),
          a = s(36707),
          w = s(3166),
          c = s(18210),
          f = s(37939),
          j = s(95509),
          x = s(96986),
          M = s(25792),
          n = s(85528),
          le = s(81944),
          Ne = s(71866);
        function De(T) {
          const { className: Le, ...We } = T;
          return (0, e.jsx)("div", {
            className: (0, a.A)(Le, Ne.Pulse),
            ...We,
          });
        }
        var Se = s(19386),
          ue = s(91618),
          ee = s(25509);
        const R = {
          colors: {
            bodygradient: h.strDefaultBodyGradient,
            background: h.strDefaultBodyBackground,
          },
        };
        function I({ definition: T, ...Le }) {
          T.community_item_data || console.log(T);
          let ke = (0, ee.k)(T.appid, T.community_item_data.item_image_large);
          T.community_item_class == _.sU &&
            (ke =
              w.TS.COMMUNITY_CDN_URL +
              "economy/profilebackground/items/" +
              T.appid +
              "/" +
              T.community_item_data.item_image_large +
              "?size=320x200");
          const k = [];
          T.community_item_data.animated &&
            k.push((0, e.jsx)(x.kh, { className: h.IconAnimated }, "animated"));
          const { icon_url: te, name: C } = n.Vw.GetAppInfo(T.appid),
            Me = T.community_item_data.item_title
              ? T.community_item_data.item_title
              : T.community_item_data.item_name;
          return {
            cost: parseInt(T.point_cost),
            name: Me,
            children: (0, e.jsx)("div", {
              className: h.Image,
              style: { backgroundImage: `url(${ke})` },
            }),
            attributes: k,
            desc: (0, f.uv)(T.community_item_class),
            appIcon: te,
            appName: C,
            ...Le,
          };
        }
        const B = (0, u.PA)((T) => (0, e.jsx)(Q, { ...I(T) })),
          v = (0, u.PA)((T) =>
            (0, e.jsx)(Be, {
              ...I(T),
              iconComponent: L.EEf,
              children: (Le) => {
                const {
                    definition: {
                      appid: We,
                      community_item_data: {
                        item_image_large: ke,
                        item_image_small: k,
                      },
                    },
                  } = T,
                  te = Le ? k : ke,
                  C = (0, ee.k)(We, te);
                return (0, e.jsx)("img", { className: h.ImageMedium, src: C });
              },
            }),
          ),
          P = (0, u.PA)((T) =>
            (0, e.jsx)(Q, {
              ...I(T),
              iconComponent: L.ZTc,
              children: (0, e.jsx)("img", {
                className: h.ImageSmall,
                src: (0, ee.k)(
                  T.definition.appid,
                  T.definition.community_item_data.item_image_large,
                ),
              }),
            }),
          ),
          O = (0, u.PA)((T) =>
            (0, e.jsx)(Q, { ...I(T), iconComponent: L.oY9 }),
          ),
          U = (0, u.PA)((T) =>
            T.definition.community_item_data.animated
              ? (0, e.jsx)(Y, { ...T })
              : T.definition.community_item_data.tiled
                ? (0, e.jsx)(ae, { ...T })
                : (0, e.jsx)(Z, { ...T }),
          ),
          Y = (0, u.PA)((T) =>
            (0, e.jsx)(de, {
              className: h.HasAnimation,
              ...I(T),
              iconComponent: L.yHA,
              styleOverride: h.BackgroundOverride,
              videoProps: {
                className: h.ImageBackground,
                poster:
                  w.TS.COMMUNITY_CDN_URL +
                  "economy/profilebackground/items/" +
                  T.definition.appid +
                  "/" +
                  T.definition.community_item_data.item_image_large +
                  "?size=320x200",
              },
              children: (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("source", {
                    src: (0, ee.k)(
                      T.definition.appid,
                      T.definition.community_item_data.item_movie_webm_small
                        ? T.definition.community_item_data.item_movie_webm_small
                        : T.definition.community_item_data.item_movie_webm,
                    ),
                    type: "video/webm",
                  }),
                  (0, e.jsx)("source", {
                    src: (0, ee.k)(
                      T.definition.appid,
                      T.definition.community_item_data.item_movie_mp4_small
                        ? T.definition.community_item_data.item_movie_mp4_small
                        : T.definition.community_item_data.item_movie_mp4,
                    ),
                    type: "video/mp4",
                  }),
                ],
              }),
            }),
          ),
          Z = (0, u.PA)((T) =>
            (0, e.jsx)(Q, {
              ...I(T),
              iconComponent: L.yHA,
              styleOverride: h.BackgroundOverride,
              children: (0, e.jsx)("img", {
                className: h.ImageBackground,
                src:
                  w.TS.COMMUNITY_CDN_URL +
                  "economy/profilebackground/items/" +
                  T.definition.appid +
                  "/" +
                  T.definition.community_item_data.item_image_large +
                  "?size=320x200",
              }),
            }),
          ),
          ae = (0, u.PA)((T) =>
            (0, e.jsx)(Q, {
              ...I(T),
              iconComponent: L.yHA,
              children: (0, e.jsx)("img", {
                className: h.ImageMedium,
                src:
                  w.TS.COMMUNITY_CDN_URL +
                  "economy/profilebackground/items/" +
                  T.definition.appid +
                  "/" +
                  T.definition.community_item_data.item_image_large,
              }),
            }),
          ),
          V = (0, u.PA)((T) =>
            (0, e.jsx)(de, {
              ...I(T),
              iconComponent: x.xh,
              videoProps: {
                className: h.ImageMiniBackground,
                poster: (0, ee.k)(
                  T.definition.appid,
                  T.definition.community_item_data.item_image_large,
                ),
              },
              children: (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("source", {
                    src: (0, ee.k)(
                      T.definition.appid,
                      T.definition.community_item_data.item_movie_webm_small
                        ? T.definition.community_item_data.item_movie_webm_small
                        : T.definition.community_item_data.item_movie_webm,
                    ),
                    type: "video/webm",
                  }),
                  (0, e.jsx)("source", {
                    src: (0, ee.k)(
                      T.definition.appid,
                      T.definition.community_item_data.item_movie_mp4_small
                        ? T.definition.community_item_data.item_movie_mp4_small
                        : T.definition.community_item_data.item_movie_mp4,
                    ),
                    type: "video/mp4",
                  }),
                ],
              }),
            }),
          ),
          oe = (0, u.PA)((T) =>
            (0, e.jsx)(Be, {
              ...I(T),
              iconComponent: x.XR,
              children: (Le) => {
                const {
                    definition: {
                      appid: We,
                      community_item_data: {
                        item_image_large: ke,
                        item_image_small: k,
                      },
                    },
                  } = T,
                  te = Le ? k : ke,
                  C = (0, ee.k)(We, te);
                return (0, e.jsx)("img", { className: h.ImageFrames, src: C });
              },
            }),
          ),
          G = (0, u.PA)((T) =>
            (0, e.jsx)(Be, {
              ...I(T),
              iconComponent: x.Js,
              children: (Le) => {
                const {
                    definition: {
                      appid: We,
                      community_item_data: {
                        item_image_large: ke,
                        item_image_small: k,
                      },
                    },
                  } = T,
                  te = Le ? k : ke,
                  C = (0, ee.k)(We, te);
                return (0, e.jsx)("img", {
                  className: h.ImageAnimatedAvatar,
                  src: C,
                });
              },
            }),
          ),
          y = (0, u.PA)((T) =>
            (0, e.jsx)(Q, {
              ...I(T),
              iconComponent: x.Ji,
              desc: (0, f.uv)(_.jE),
            }),
          ),
          A = (0, u.PA)((T) =>
            (0, e.jsx)(Q, {
              ...I(T),
              iconComponent: x.Fq,
              children: (0, e.jsx)("img", {
                className: h.ImageKeyboard,
                src: (0, ee.k)(
                  T.definition.appid,
                  T.definition.community_item_data.item_image_small,
                ),
              }),
            }),
          ),
          me = (0, u.PA)((T) =>
            (0, e.jsx)(de, {
              ...I(T),
              iconComponent: x.GP,
              videoProps: {
                className: h.ImageFillHeight,
                poster: (0, ee.k)(
                  T.definition.appid,
                  T.definition.community_item_data.item_image_large,
                ),
              },
              children: (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("source", {
                    src: (0, ee.k)(
                      T.definition.appid,
                      T.definition.community_item_data.item_movie_webm_small
                        ? T.definition.community_item_data.item_movie_webm_small
                        : T.definition.community_item_data.item_movie_webm,
                    ),
                    type: "video/webm",
                  }),
                  (0, e.jsx)("source", {
                    src: (0, ee.k)(
                      T.definition.appid,
                      T.definition.community_item_data.item_movie_mp4_small
                        ? T.definition.community_item_data.item_movie_mp4_small
                        : T.definition.community_item_data.item_movie_mp4,
                    ),
                    type: "video/mp4",
                  }),
                ],
              }),
            }),
          );
        class de extends m.Component {
          m_ref = m.createRef();
          state = { bVisible: !1 };
          render() {
            const { children: Le, videoProps: We, ...ke } = this.props;
            return (0, e.jsxs)(Q, {
              ...ke,
              children: [
                (0, e.jsx)(le.J, {
                  trigger: "repeated",
                  onVisibilityChange: (k) => this.HandleVisibilityChange(k),
                  className: h.VisibilityTracker,
                }),
                (0, e.jsx)("video", {
                  playsInline: !0,
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                  ...We,
                  ref: this.m_ref,
                  children: this.state.bVisible && Le,
                }),
              ],
            });
          }
          m_playPromise = null;
          m_bShouldContinuePlaying = !0;
          HandleVisibilityChange(Le) {
            this.m_ref.current &&
              (this.m_playPromise
                ? (this.m_bShouldContinuePlaying = Le)
                : Le
                  ? ((this.m_playPromise = this.m_ref.current.play()),
                    this.m_playPromise &&
                      (this.m_playPromise.then(() => {
                        !this.m_bShouldContinuePlaying &&
                          this.m_ref.current &&
                          this.m_ref.current.pause(),
                          (this.m_playPromise = null);
                      }),
                      (this.m_bShouldContinuePlaying = !0)))
                  : this.m_ref.current.pause()),
              this.setState({ bVisible: Le });
          }
        }
        class Be extends m.Component {
          state = { bHover: !1 };
          render() {
            const { children: Le, ...We } = this.props;
            return (0, e.jsx)(Q, {
              ...We,
              onMouseEnter: () => this.setState({ bHover: !0 }),
              onMouseLeave: () => this.setState({ bHover: !1 }),
              children: Le(this.state.bHover || !0),
            });
          }
        }
        const Q = (T) => {
            const {
                appName: Le,
                appIcon: We,
                attributes: ke,
                children: k,
                cost: te,
                iconComponent: C,
                name: Me,
                desc: je,
                className: Ie,
                style: Ee,
                theme: ce,
                styleOverride: Ae,
                strPriceOverride: Ye,
                itemLevel: at,
                purchaseable: rt = !0,
                ...Xe
              } = T,
              ge = C,
              Ge = { background: (ce || R).colors.bodygradient },
              it = { background: (ce || R).colors.background },
              ut = { fill: "" };
            return (0, e.jsx)("div", {
              className: h.ItemContainer,
              children: (0, e.jsxs)(j.B9, {
                ...Xe,
                className: (0, a.A)(Ie, h.Item, Ae),
                style: it,
                children: [
                  (0, e.jsxs)(j.Bb, {
                    className: h.Body,
                    style: Ge,
                    children: [
                      (0, e.jsx)("div", {
                        className: h.Attributes,
                        children: ke,
                      }),
                      (0, e.jsx)(He, { src: We, title: Le }),
                      !rt &&
                        (0, e.jsxs)("div", {
                          className: h.BodyTopRight,
                          children: [
                            (0, e.jsx)(x.j2, {
                              className: h.IconPartialCheckMark,
                            }),
                            (0, e.jsx)(x.wK, { className: h.IconCheckMark }),
                          ],
                        }),
                      k,
                    ],
                  }),
                  (0, e.jsxs)(j.eM, {
                    className: h.Footer,
                    children: [
                      (0, e.jsx)("div", {
                        style: { flex: 1, paddingBottom: "10px" },
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              className: h.Name,
                              children: Me,
                            }),
                            (0, e.jsxs)("div", {
                              className: h.ItemTypeContainer,
                              children: [
                                ge &&
                                  (0, e.jsx)(ge, {
                                    className: h.Icon,
                                    style: ut,
                                  }),
                                (0, e.jsxs)("div", {
                                  className: h.Subtitle,
                                  children: [je, " "],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      rt &&
                        (0, e.jsxs)("div", {
                          className: h.CostRow,
                          children: [
                            (0, e.jsx)(x.j2, {
                              className: h.IconPartialCheckMark,
                            }),
                            (0, e.jsx)(x.wK, { className: h.IconCheckMark }),
                            (0, e.jsx)("div", {
                              className: h.Cost,
                              children: Ye ?? (0, e.jsx)(S.Y, { amount: te }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: h.ItemContainerShine }),
                ],
              }),
            });
          },
          re = (T) => {
            const {
                appName: Le,
                appIcon: We,
                attributes: ke,
                children: k,
                cost: te,
                iconComponent: C,
                name: Me,
                desc: je,
                className: Ie,
                style: Ee,
                theme: ce,
                styleOverride: Ae,
                strPriceOverride: Ye,
                itemLevel: at,
                ...rt
              } = T,
              Xe = C,
              ge = { background: (ce || R).colors.bodygradient },
              Ge = { background: (ce || R).colors.background },
              it = { fill: "" };
            return (0, e.jsx)("div", {
              className: h.ItemWideContainer,
              children: (0, e.jsxs)(j.B9, {
                ...rt,
                className: (0, a.A)(Ie, h.Item, Ae),
                style: Ge,
                children: [
                  (0, e.jsxs)(j.Bb, {
                    className: h.Body,
                    style: ge,
                    children: [
                      (0, e.jsx)("div", {
                        className: h.Attributes,
                        children: ke,
                      }),
                      (0, e.jsx)(He, { src: We, title: Le }),
                      k,
                    ],
                  }),
                  (0, e.jsxs)(j.eM, {
                    className: h.Footer,
                    children: [
                      (0, e.jsx)("div", {
                        style: { flex: 1 },
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              className: h.Name,
                              children: Me,
                            }),
                            (0, e.jsxs)("div", {
                              className: h.ItemTypeContainer,
                              children: [
                                Xe &&
                                  (0, e.jsx)(Xe, {
                                    className: h.Icon,
                                    style: it,
                                  }),
                                (0, e.jsxs)("div", {
                                  className: h.Subtitle,
                                  children: [je, " "],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: h.CostRow,
                        children: [
                          (0, e.jsx)(x.j2, {
                            className: h.IconPartialCheckMark,
                          }),
                          (0, e.jsx)(x.wK, { className: h.IconCheckMark }),
                          (0, e.jsx)("div", {
                            className: h.Cost,
                            children: Ye ?? (0, e.jsx)(S.Y, { amount: te }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: h.ItemContainerShine }),
                ],
              }),
            });
          },
          ye = {
            [_.Ed]: v,
            [_.J4]: P,
            [_.wK]: O,
            [_.sU]: U,
            [_.zs]: V,
            [_.jE]: y,
            [_.xi]: oe,
            [_.xw]: G,
            [_.yZ]: A,
            [_.Tl]: me,
          },
          he = (0, u.PA)((T) => {
            const { className: Le, ...We } = T,
              ke = f.DZ.Get().BRewardOwnedByUser(T.definition),
              k = (0, a.A)(Le, ke && h.OwnedItem);
            if (T.definition.type == F.kT.Mj || T.definition.type == F.kT.Wy)
              return (0, e.jsx)(M.tH, {
                fallback: null,
                children: (0, e.jsx)(Se.B, {
                  ...We,
                  className: k,
                  onClick: T.onClick,
                }),
              });
            if (
              T.definition.community_item_class == _.jE &&
              T.definition.bundle_defids?.length != 0
            )
              return (0, e.jsx)(M.tH, {
                fallback: null,
                children: (0, e.jsx)(ue.y, {
                  ...We,
                  className: k,
                  onClick: T.onClick,
                }),
              });
            const te = ye[T.definition.community_item_class];
            return te
              ? (0, e.jsx)(M.tH, {
                  fallback: null,
                  children: (0, e.jsx)(te, {
                    ...We,
                    className: k,
                    onClick: T.onClick,
                  }),
                })
              : (0, e.jsx)(M.tH, {
                  fallback: null,
                  children: (0, e.jsx)(B, {
                    ...We,
                    className: k,
                    onClick: T.onClick,
                  }),
                });
          });
        function D(T) {
          return s(88560)(`./icon_showcase_${T}.svg`)?.default;
        }
        function Ce({
          customization_type: T,
          current_level: Le,
          point_cost: We,
          ...ke
        }) {
          const k = D(T),
            te = (0, c.we)("#ProfileShowcases_Type_" + T),
            C = [],
            Me = Le >= f.DZ.Get().GetMaxProfileShowcaseUpgradeLevel(),
            je = Le > 1,
            Ie = (0, a.A)(Me && h.OwnedItem, !Me && je && h.OwnedItemProgress);
          return {
            cost: We,
            name: te,
            itemLevel: Le,
            children: (0, e.jsx)("img", {
              className: h.ImageProfileShowcase,
              src: k,
            }),
            desc: (0, c.we)("#ProfileShowcases_Upgrade"),
            attributes: C,
            className: Ie,
            iconComponent: x.Nu,
            ...ke,
          };
        }
        const qe = (T) => (0, e.jsx)(re, { ...Ce(T) });
        function ze({
          customization_type: T,
          point_cost: Le,
          purchased_count: We,
          current_level: ke,
          ...k
        }) {
          const te = D(T),
            C = (0, c.we)("#ProfileShowcases_Type_" + T),
            Me = [],
            je = We >= f.DZ.Get().GetMaxProfileShowcaseSlots(),
            Ie = (0, a.A)(je && h.OwnedItem);
          return {
            cost: Le,
            name: C,
            children: (0, e.jsx)("img", {
              className: h.ImageProfileShowcase,
              src: te,
            }),
            desc: (0, c.we)("#ProfileShowcases_AdditionalSlot"),
            attributes: Me,
            className: Ie,
            iconComponent: x.Nu,
            ...k,
          };
        }
        const Fe = (T) => (0, e.jsx)(re, { ...ze(T) });
        class He extends m.Component {
          state = { bLoadComplete: !1 };
          render() {
            const { src: Le, title: We } = this.props,
              { bLoadComplete: ke } = this.state;
            return Le
              ? (0, e.jsx)("div", {
                  className: h.AppIconContainer,
                  children: (0, e.jsx)("img", {
                    className: h.AppIcon,
                    src: Le,
                    onLoad: () => this.setState({ bLoadComplete: !0 }),
                    style: ke ? void 0 : { display: "none" },
                    title: We,
                    alt: We,
                  }),
                })
              : null;
          }
        }
        function Ze() {
          return (0, e.jsx)(De, {
            className: h.ItemContainer,
            children: (0, e.jsxs)(j.B9, {
              className: (0, a.A)(h.Item, h.ItemSkeleton),
              children: [
                (0, e.jsx)(j.Bb, { className: h.Body }),
                (0, e.jsx)(j.eM, {
                  className: h.Footer,
                  children: (0, e.jsx)("div", {
                    style: { flex: 1 },
                    children: (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", { className: h.SkeletonName }),
                        (0, e.jsx)("div", { className: h.SkeletonSubtitle }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        }
      },
      62389: (W, E, s) => {
        "use strict";
        s.d(E, { n: () => h });
        var e = s(7850),
          m = s(90626),
          u = s(75844),
          S = s(23903),
          L = s(81944);
        const h = (0, u.PA)(function (a) {
          const {
              getItems: w,
              renderItem: c,
              children: f,
              style: j,
              cItemsPerPage: x,
              renderItemSkeleton: M,
              ...n
            } = a,
            le = x || 20,
            [Ne, De] = (0, m.useState)(le),
            { rewards: Se, bLoadingMore: ue } = w(0, Ne),
            ee = Se.map(c);
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(S.cV, {
              verticalSpacing: "large",
              "flow-children": "grid",
              ...n,
              children: [
                ee,
                ue && M && F(M, le),
                (0, e.jsx)(L.J, {
                  trigger: "repeated",
                  onVisibilityChange: (R) => R && De(Ne + le),
                }),
              ],
            }),
          });
        });
        function F(_, a) {
          const w = [];
          for (let c = 0; c < a; c++)
            w.push((0, e.jsx)("div", { children: _() }, c));
          return w;
        }
      },
      30992: (W, E, s) => {
        "use strict";
        s.d(E, { Gq: () => h, rA: () => F, wF: () => _ });
        var e = s(7850),
          m = s(36707),
          u = s(51619),
          S = s(17552),
          L = s.n(S);
        const h = (a) => {
            const {
                title: w,
                subtitle: c,
                leftActions: f,
                rightActions: j,
                children: x,
              } = a,
              M = w || c || f || j;
            return (0, e.jsxs)("div", {
              className: S.Section,
              children: [
                M &&
                  (0, e.jsx)("div", {
                    className: S.Header,
                    children: (0, e.jsxs)("div", {
                      className: S.TitlesContainer,
                      children: [
                        (0, e.jsxs)("div", {
                          className: S.TopRow,
                          children: [
                            (0, e.jsx)("div", {
                              className: S.SectionTitle,
                              children: w,
                            }),
                            f &&
                              (0, e.jsx)("div", {
                                className: S.Actions,
                                children: f,
                              }),
                            (0, e.jsx)("div", { className: S.SectionLine }),
                            j &&
                              (0, e.jsx)("div", {
                                className: S.Actions,
                                children: j,
                              }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: S.SectionSubtitle,
                          children: c,
                        }),
                      ],
                    }),
                  }),
                (0, e.jsx)("div", { className: S.Body, children: x }),
              ],
            });
          },
          F = (a) => {
            const { className: w, ...c } = a;
            return (0, e.jsx)(u.N, {
              className: (0, m.A)(w, S.ActionButton),
              ...c,
            });
          },
          _ = (a) => {
            const { className: w, ...c } = a;
            return (0, e.jsx)("div", {
              className: (0, m.A)(w, S.SectionCallout),
              ...c,
            });
          };
      },
      76899: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => r });
        var e = s(7850),
          m = s(90626),
          u = s(92757),
          S = s(58732),
          L = s(3166),
          h = s(491),
          F = s(17083),
          _ = s(36636),
          a = s(23903),
          w = s(32093),
          c = s(18210);
        function f(o) {
          return typeof GStoreItemData > "u"
            ? (console.error("Unable to find GStoreItemData"), null)
            : GStoreItemData.fnFormatCurrency(o);
        }
        var j = s(96986),
          x = s(36118),
          M = s(36707);
        const n =
            s.p +
            "images/applications/store/game_tiles.png?v=valveisgoodatcaching",
          le =
            s.p +
            "images/applications/store/avatarframes_preview.png?v=valveisgoodatcaching",
          Ne =
            s.p +
            "images/applications/store/csgo_sas_bg.jpg?v=valveisgoodatcaching";
        var De = s(28910),
          Se = s(47190),
          ue = s(80736);
        const ee =
            s.p + "images/applications/store/float.png?v=valveisgoodatcaching",
          R =
            s.p +
            "images/applications/store/Entering_vr.gif?v=6f6a584a1c1c96e77356456f93404674",
          I =
            s.p +
            "images/applications/store/Sunglasses.gif?v=ec59d874a419f77f6aaefc9dc302b7c0";
        var B = s(11981);
        const v =
            s.p +
            "images/applications/store/csgoChat_128_defuse.png?v=valveisgoodatcaching",
          P =
            s.p +
            "images/applications/store/bonemetal_224px.png?v=valveisgoodatcaching",
          O =
            s.p +
            "images/applications/store/portal_effect_anim.png?v=valveisgoodatcaching",
          U =
            s.p +
            "images/applications/store/csgoChat_128_hostage.png?v=valveisgoodatcaching",
          Y =
            s.p +
            "images/applications/store/dota_happy_ursa.png?v=valveisgoodatcaching",
          Z =
            s.p +
            "images/applications/store/dota_shocked_crystal_maiden.png?v=valveisgoodatcaching",
          ae =
            s.p +
            "images/applications/store/header_image.png?v=valveisgoodatcaching",
          V =
            s.p +
            "images/applications/store/award_anim_225.png?v=valveisgoodatcaching",
          oe =
            s.p +
            "images/applications/store/beautiful_anim_225.png?v=valveisgoodatcaching",
          G =
            s.p +
            "images/applications/store/crown_anim_225.png?v=valveisgoodatcaching",
          y =
            s.p +
            "images/applications/store/fire_anim_225.png?v=valveisgoodatcaching",
          A =
            s.p +
            "images/applications/store/funny_anim_225.png?v=valveisgoodatcaching",
          me =
            s.p +
            "images/applications/store/hundo_anim_225.png?v=valveisgoodatcaching",
          de =
            s.p +
            "images/applications/store/life_anim_225.png?v=valveisgoodatcaching",
          Be =
            s.p +
            "images/applications/store/perfect_anim_225.png?v=valveisgoodatcaching",
          Q =
            s.p +
            "images/applications/store/plus_anim_225.png?v=valveisgoodatcaching",
          re =
            s.p +
            "images/applications/store/smart_anim_225.png?v=valveisgoodatcaching",
          ye =
            s.p +
            "images/applications/store/treasure_anim_225.png?v=valveisgoodatcaching",
          he =
            s.p +
            "images/applications/store/wholesome_anim_225.png?v=valveisgoodatcaching";
        var D = s(60187),
          Ce = s(37939),
          qe = s(75844),
          ze = s(24642);
        const Fe = (o) => {
            const { children: i, iconComponent: g, descCallout: H } = o,
              q = g,
              _e = H;
            return (0, e.jsxs)("div", {
              className: D.CalloutContainer,
              children: [
                (0, e.jsx)("div", {
                  className: D.CalloutIconContainer,
                  children: (0, e.jsx)(q, { className: D.CalloutIcon }),
                }),
                (0, e.jsxs)("div", {
                  className: D.CalloutText,
                  children: [" ", (0, c.we)(_e), " "],
                }),
              ],
            });
          },
          He = (o) =>
            (0, e.jsxs)(a.az, {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xlarge",
              className: D.PageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: D.HeaderText,
                  children: (0, c.we)("#HowItWorks_SteamPoints"),
                }),
                (0, e.jsx)("div", {
                  className: D.SubHeaderText,
                  children: (0, c.we)("#HowItWorks_SteamPoints_Desc1"),
                }),
                (0, e.jsx)("img", { src: ae, className: D.HeaderImage }),
                (0, e.jsx)("div", {
                  className: D.SubHeaderText,
                  children: (0, c.we)("#HowItWorks_SteamPoints_Desc2"),
                }),
              ],
            }),
          Ze = (o) => {
            let i = (0, c.PP)(
              "#HowItWorks_Conversion",
              (0, e.jsx)("span", { children: (0, ze.D)(o.numPoints) }),
              (0, e.jsx)("span", { children: f(o.dollarConversion) }),
            );
            return (0, e.jsx)(a.Kt, {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "medium",
              className: D.PageContainer,
              focusable: !0,
              noFocusRing: !0,
              children: (0, e.jsxs)("div", {
                className: (0, M.A)(D.ConvertionSectionTextContainer),
                children: [
                  (0, e.jsx)("div", {
                    className: D.PointsConvertion,
                    children: i,
                  }),
                  (0, e.jsx)("div", {
                    className: D.SectionSubtitle,
                    children: (0, c.we)("#HowItWorks_How_Desc"),
                  }),
                ],
              }),
            });
          },
          T = (o) => {
            let i = (0, c.PP)(
              "#ShopName",
              (0, e.jsx)("span", { children: (0, c.we)("#ShopNamePre") }),
              (0, c.we)("#ShopNamePost"),
            );
            return (0, e.jsxs)(a.az, {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
              children: [
                (0, e.jsxs)(a.Kt, {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  className: D.UsePointsIconContainer,
                  focusable: !0,
                  noFocusRing: !0,
                  children: [
                    (0, e.jsx)(j.eu, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim1),
                    }),
                    (0, e.jsx)(x.yHA, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim2),
                    }),
                    (0, e.jsx)(x.Exy, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim3),
                    }),
                    (0, e.jsx)(j.Ji, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim4),
                    }),
                    (0, e.jsx)(x.EEf, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim5),
                    }),
                    (0, e.jsx)(x.oY9, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim6),
                    }),
                    (0, e.jsx)(x.ZTc, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim7),
                    }),
                    (0, e.jsx)(j.W_, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim8),
                    }),
                    (0, e.jsx)(j.eu, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim1),
                    }),
                    (0, e.jsx)(x.yHA, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim2),
                    }),
                    (0, e.jsx)(x.Exy, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim3),
                    }),
                    (0, e.jsx)(j.Ji, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim4),
                    }),
                    (0, e.jsx)(x.EEf, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim5),
                    }),
                    (0, e.jsx)(x.oY9, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim6),
                    }),
                    (0, e.jsx)(x.ZTc, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim7),
                    }),
                    (0, e.jsx)(j.W_, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim8),
                    }),
                    (0, e.jsx)(j.eu, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim1),
                    }),
                    (0, e.jsx)(x.yHA, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim2),
                    }),
                    (0, e.jsx)(x.Exy, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim3),
                    }),
                    (0, e.jsx)(j.Ji, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim4),
                    }),
                    (0, e.jsx)(x.EEf, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim5),
                    }),
                    (0, e.jsx)(x.oY9, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim6),
                    }),
                    (0, e.jsx)(x.ZTc, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim7),
                    }),
                    (0, e.jsx)(j.W_, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim8),
                    }),
                    (0, e.jsx)(j.eu, {
                      className: (0, M.A)(D.UsePointsSvg, D.UsePointsAnim1),
                    }),
                  ],
                }),
                (0, e.jsxs)(a.az, {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: D.PageContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: D.ShellHeaderBrandName,
                      children: i,
                    }),
                    (0, e.jsx)("div", {
                      className: D.SectionSubtitle,
                      children: (0, c.we)("#HowItWorks_UsePoints_Desc1"),
                    }),
                    (0, e.jsxs)(a.Kt, {
                      display: "flex",
                      flexDirection: "column",
                      paddingTop: "large",
                      focusable: !0,
                      noFocusRing: !0,
                      children: [
                        (0, e.jsx)(Fe, {
                          iconComponent: j.X$,
                          descCallout: "#HowItWorks_DoNotExpire",
                        }),
                        (0, e.jsx)(Fe, {
                          iconComponent: j.jm,
                          descCallout: "#HowItWorks_Permanent",
                        }),
                        (0, e.jsx)(Fe, {
                          iconComponent: j.R2,
                          descCallout: "#HowItWorks_Marketable",
                        }),
                      ],
                    }),
                    (0, e.jsxs)(a.Kt, {
                      className: D.CollectionItemsContainer,
                      focusable: !0,
                      noFocusRing: !0,
                      children: [
                        (0, e.jsx)("img", { className: D.ItemLeft, src: ee }),
                        (0, e.jsx)("img", {
                          className: D.ItemLeftMid,
                          src: De.A,
                        }),
                        (0, e.jsxs)("div", {
                          className: D.ItemMiddle,
                          children: [
                            (0, e.jsx)("img", {
                              className: D.ItemFrame,
                              src: P,
                            }),
                            (0, e.jsx)("img", {
                              className: D.ItemAvatar,
                              src: R,
                            }),
                          ],
                        }),
                        (0, e.jsx)("img", {
                          className: D.ItemRightMid,
                          src: Se.A,
                        }),
                        (0, e.jsx)("img", {
                          className: D.ItemRight,
                          src: ue.A,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          Le = () =>
            jsxs(Box, {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "xxlarge",
              className: styles.PageContainer,
              children: [
                jsxs(Box, {
                  display: "flex",
                  flexDirection: "column",
                  children: [
                    jsxs(Box, {
                      display: "flex",
                      flexDirection: "row",
                      paddingTop: "none",
                      children: [
                        jsx(Avatar, { className: styles.SectionIcons }),
                        jsx(AvatarFrame, { className: styles.SectionIcons }),
                      ],
                    }),
                    jsxs("div", {
                      className: styles.ConvertionSectionTextContainer,
                      children: [
                        jsx("div", {
                          className: styles.CalloutText,
                          children: Localize("#HowItWorks_Avatars"),
                        }),
                        jsxs("div", {
                          className: styles.SectionSubtitle,
                          style: { margin: "12px 0px" },
                          children: [
                            " ",
                            Localize("#HowItWorks_Avatars_Desc1"),
                          ],
                        }),
                        jsx("div", {
                          className: styles.SectionSubtitle,
                          children: Localize("#HowItWorks_Avatars_Desc2"),
                        }),
                      ],
                    }),
                    jsx(Fe, {
                      iconComponent: Info,
                      descCallout: "#HowItWorks_Collection_Rotation",
                    }),
                  ],
                }),
                jsxs("div", {
                  className: styles.AvatarImg,
                  children: [
                    jsx("img", {
                      className: styles.AvatarImg,
                      src: AvatarFramesBg,
                    }),
                    jsxs("div", {
                      className: styles.AvatarProfile,
                      children: [
                        jsx("img", {
                          className: styles.FrameProfile,
                          src: Frame,
                        }),
                        jsx("img", {
                          className: styles.AvatarImgProfile,
                          src: AvatarAnimSunglasses,
                        }),
                      ],
                    }),
                    jsxs("div", {
                      className: styles.AvatarProfileMini,
                      children: [
                        jsx("img", {
                          className: styles.FrameProfile,
                          src: Frame,
                        }),
                        jsx("img", {
                          className: styles.AvatarImgProfile,
                          src: AvatarAnimSunglasses,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          We = () => {
            let o = S.B.LoyaltyByGame();
            return (0, e.jsx)("div", {
              className: D.SectionTileContainer,
              style: { backgroundImage: `url(${n})` },
              children: (0, e.jsxs)(a.az, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "xlarge",
                paddingLeft: "xlarge",
                paddingBottom: "xxlarge",
                children: [
                  (0, e.jsx)(j.W_, { className: D.SectionIcons }),
                  (0, e.jsx)(F.N_, {
                    to: o,
                    children: (0, e.jsx)("div", {
                      className: D.SectionTitle,
                      children: (0, c.we)("#HowItWorks_YourGames"),
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: D.SectionSubtitle,
                    children: (0, c.we)("#HowItWorks_YourGames_Desc1"),
                  }),
                  (0, e.jsx)(a.Kt, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "large",
                    focusable: !0,
                    noFocusRing: !0,
                    children: (0, e.jsx)(Fe, {
                      iconComponent: j.R2,
                      descCallout: "#HowItWorks_YourGames_TradingCards",
                    }),
                  }),
                ],
              }),
            });
          },
          ke = () =>
            jsxs("div", {
              className: styles.SectionTileContainer,
              style: { backgroundImage: `url(${ValveItemsBg})` },
              children: [
                jsxs(Box, {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingRight: "xlarge",
                  paddingLeft: "xlarge",
                  paddingBottom: "none",
                  children: [
                    jsx(RewardsByGame, { className: styles.SectionIcons }),
                    jsx("div", {
                      className: styles.SectionTitle,
                      children: Localize("#HowItWorks_ValveGames"),
                    }),
                    jsx("div", {
                      className: styles.SectionSubtitle,
                      children: Localize("#HowItWorks_ValveGames_Desc"),
                    }),
                  ],
                }),
                jsxs(Box, {
                  className: styles.CollectionItemsContainer,
                  children: [
                    jsx("img", {
                      className: styles.ItemLeft,
                      src: CrystalMaiden,
                    }),
                    jsx("img", { className: styles.ItemLeftMid, src: Defuse }),
                    jsxs("div", {
                      className: styles.ItemMiddle,
                      children: [
                        jsx("img", {
                          className: styles.ItemFrame,
                          src: PortalFrame,
                        }),
                        jsx("img", { className: styles.ItemAvatar, src: Ursa }),
                      ],
                    }),
                    jsx("img", {
                      className: styles.ItemRightMid,
                      src: Hostage,
                    }),
                    jsx("img", {
                      className: styles.ItemRight,
                      src: ChickenDance,
                    }),
                  ],
                }),
              ],
            }),
          k = (0, qe.PA)(() => {
            let o = Ce.DZ.Get().GetCommunityAwardPointsTransferred(),
              i = L.TS.STORE_BASE_URL + "labs/trendingreviews/",
              g = L.TS.COMMUNITY_BASE_URL + "?subsection=workshop";
            return (0, e.jsxs)(a.az, {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
              children: [
                (0, e.jsxs)(a.Kt, {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  className: D.UsePointsIconContainer,
                  focusable: !0,
                  noFocusRing: !0,
                  children: [
                    (0, e.jsx)("img", { src: V, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: oe, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: G, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: y, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: A, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: me, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: de, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: Be, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: Q, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: re, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: ye, className: D.ScrollIcon }),
                    (0, e.jsx)("img", { src: he, className: D.ScrollIcon }),
                  ],
                }),
                (0, e.jsxs)(a.Kt, {
                  id: "CommunityAwards",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: D.PageContainer,
                  focusable: !0,
                  noFocusRing: !0,
                  children: [
                    (0, e.jsx)("div", {
                      className: D.ShellHeaderBrandName,
                      children: (0, c.we)("#HowItWorks_ReviewAwards"),
                    }),
                    (0, e.jsx)("div", {
                      className: D.SectionSubtitle,
                      children: (0, c.we)(
                        "#HowItWorks_ReviewAwardsWinter_Desc",
                        o,
                      ),
                    }),
                    (0, e.jsx)("img", {
                      alt: (0, c.we)("#HowItWorks_ReviewAwards"),
                      src:
                        L.TS.BASE_URL_STORE_CDN_ASSETS +
                        `rewards/howtoawards/${L.TS.LANGUAGE}.png`,
                      className: D.AwardsUiImg,
                    }),
                  ],
                }),
                (0, e.jsxs)(a.Kt, {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: D.PageContainer,
                  focusable: !0,
                  noFocusRing: !0,
                  children: [
                    (0, e.jsxs)(a.az, {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      children: [
                        (0, e.jsx)("img", { src: y, className: D.AwardsApng }),
                        (0, e.jsxs)(a.az, {
                          display: "flex",
                          flexDirection: "column",
                          children: [
                            (0, e.jsx)("div", {
                              className: (0, M.A)(
                                D.SectionSubtitle,
                                D.SectionSubtitleLeftAlign,
                              ),
                              children: (0, c.we)(
                                "#HowItWorks_AwardsReviews",
                                o,
                              ),
                            }),
                            (0, e.jsx)("a", {
                              href: i,
                              children: (0, e.jsx)("div", {
                                className: D.AwardsLink,
                                children: (0, c.we)(
                                  "#HowItWorks_AwardsReviewsLink",
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)(a.az, {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "large",
                      children: [
                        (0, e.jsx)("img", { src: G, className: D.AwardsApng }),
                        (0, e.jsxs)(a.az, {
                          display: "flex",
                          flexDirection: "column",
                          children: [
                            (0, e.jsx)("div", {
                              className: (0, M.A)(
                                D.SectionSubtitle,
                                D.SectionSubtitleLeftAlign,
                              ),
                              children: (0, c.we)("#HowItWorks_AwardsUgc", o),
                            }),
                            (0, e.jsx)("a", {
                              href: g,
                              children: (0, e.jsx)("div", {
                                className: D.AwardsLink,
                                children: (0, c.we)(
                                  "#HowItWorks_AwardsUgcLink",
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)(a.az, {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "large",
                      children: [
                        (0, e.jsx)("img", { src: oe, className: D.AwardsApng }),
                        (0, e.jsx)(a.az, {
                          display: "flex",
                          flexDirection: "column",
                          children: (0, e.jsx)("div", {
                            className: (0, M.A)(
                              D.SectionSubtitle,
                              D.SectionSubtitleLeftAlign,
                            ),
                            children: (0, c.we)("#HowItWorks_AwardsProfile", o),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          });
        function te() {
          const o = (0, w.nA)(L.TS.EREALM);
          return [
            {
              question: "#Faq_GetPoints_Q",
              answer: ["#Faq_GetPoints_A", "#Faq_GetPoints_A1"],
            },
            { question: "#Faq_PointsExpire_Q", answer: "#Faq_PointsExpire_A" },
            { question: "#Faq_Limits_Q", answer: "#Faq_Limits_A" },
            { question: "#Faq_Trade_Q", answer: "#Faq_Trade_A" },
            { question: "#Faq_TradingCards_Q", answer: "#Faq_TradingCards_A" },
            { question: "#Faq_Refund_Q", answer: "#Faq_Refund_A" },
            !o && { question: "#Faq_Lunar_Q", answer: "#Faq_Lunar_A" },
            !o && {
              question: "#Faq_WhatElse_Q",
              answer: [
                "#Faq_WhatElse_A",
                "#Faq_WhatElse_A1",
                "#Faq_WhatElse_A2",
              ],
            },
            !o && { question: "#Faq_SortOrder_Q", answer: "#Faq_SortOrder_A" },
          ].filter(Boolean);
        }
        const C = () => {
            const o = te();
            return (0, e.jsx)(a.az, {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "xxlarge",
              className: D.FaqContainer,
              children: (0, e.jsxs)(a.az, {
                display: "flex",
                flexDirection: "column",
                children: [
                  (0, e.jsx)("div", {
                    className: D.FaqTitle,
                    children: (0, c.we)("#Faq_Title"),
                  }),
                  o.map((i) =>
                    (0, m.createElement)(Me, {
                      ...i,
                      key: Array.isArray(i.question)
                        ? i.question[0]
                        : i.question,
                    }),
                  ),
                ],
              }),
            });
          },
          Me = (o) => {
            const { question: i, answer: g } = o,
              H = Array.isArray(i) ? i : [i],
              q = Array.isArray(g) ? g : [g];
            return (0, e.jsxs)(a.Kt, {
              display: "flex",
              flexDirection: "column",
              paddingTop: "medium",
              paddingBottom: "medium",
              focusable: !0,
              children: [
                H.map((_e) => (0, e.jsx)(je, { children: (0, c.we)(_e) }, _e)),
                q.map((_e) => (0, e.jsx)(Ie, { children: (0, c.we)(_e) }, _e)),
              ],
            });
          },
          je = ({ children: o }) =>
            (0, e.jsx)("div", { className: D.FaqQuestion, children: o }),
          Ie = ({ children: o }) =>
            (0, e.jsx)("div", { className: D.FaqAnswer, children: o }),
          Ee = () => {
            let i = Ce.DZ.Get().GetConfig().points_conversion.unit_spend,
              g = Ce.DZ.Get().GetConfig().points_conversion.points;
            return (0, e.jsx)(_.Qs, {
              children: (0, e.jsx)(_.ZI, {
                children: (0, e.jsxs)(a.az, {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  style: { width: "100%" },
                  id: "Title",
                  className: D.PageFormatting,
                  children: [
                    (0, e.jsx)(He, {}),
                    (0, e.jsx)(Ze, { dollarConversion: i, numPoints: g }),
                    (0, e.jsx)(T, {}),
                    (0, e.jsx)(We, {}),
                    !(0, w.nA)(L.TS.EREALM) && (0, e.jsx)(k, {}),
                    (0, e.jsx)(C, {}),
                  ],
                }),
              }),
            });
          };
        var ce = s(1056),
          Ae = s(53107),
          Ye = Object.defineProperty,
          at = Object.getOwnPropertyDescriptor,
          rt = (o, i, g, H) => {
            for (
              var q = H > 1 ? void 0 : H ? at(i, g) : i, _e = o.length - 1, tt;
              _e >= 0;
              _e--
            )
              (tt = o[_e]) && (q = (H ? tt(i, g, q) : tt(q)) || q);
            return H && q && Ye(i, g, q), q;
          };
        let Xe = class extends m.Component {
          constructor(o) {
            super(o), Ce.DZ.Get().GetLoyaltyRewardsSummary();
          }
          render() {
            return (0, w.nA)(L.TS.EREALM)
              ? (0, e.jsx)(_.jy, {
                  children: (0, e.jsxs)(a.az, {
                    className: ce.PageContainer,
                    marginX: "xlarge",
                    display: "flex",
                    flexDirection: "column",
                    children: [
                      (0, e.jsxs)(a.az, {
                        marginY: "large",
                        display: "flex",
                        flexDirection: "column",
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.PageHeader,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_Header_China",
                            ),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_Intro_China",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)(a.az, {
                        marginY: "medium",
                        display: "flex",
                        flexDirection: "column",
                        className: ce.Section,
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "small",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionHeader,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_1_Title_China",
                            ),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_1_Desc_China",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)(a.az, {
                        marginY: "medium",
                        display: "flex",
                        flexDirection: "column",
                        className: ce.Section,
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "small",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionHeader,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_2_Title_China",
                            ),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_2_Desc_China",
                            ),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_2_Desc2_China",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)(a.az, {
                        marginY: "medium",
                        display: "flex",
                        flexDirection: "column",
                        className: ce.Section,
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "small",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionHeader,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_3_Title_China",
                            ),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_3_Desc_China",
                            ),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_3_Desc2_China",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)(a.az, {
                        marginY: "medium",
                        display: "flex",
                        flexDirection: "column",
                        className: ce.Section,
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "small",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionHeader,
                            children: (0, c.we)(
                              "#LunarSale2022_Rules_4_Title_China",
                            ),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            className: ce.SectionContent,
                            children: (0, c.PP)(
                              "#LunarSale2022_Rules_4_Desc_China",
                              (0, e.jsx)(Ae.uU, {
                                href: L.TS.STORE_BASE_URL + "privacy_agreement",
                                children: (0, c.we)(
                                  "#LunarSale2022_Rules_ClickHere",
                                ),
                              }),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, e.jsx)(_.jy, {
                  children: (0, e.jsxs)(a.az, {
                    className: ce.PageContainer,
                    marginX: "xlarge",
                    display: "flex",
                    flexDirection: "column",
                    children: [
                      (0, e.jsxs)(a.az, {
                        marginY: "large",
                        display: "flex",
                        flexDirection: "column",
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.PageHeader,
                            children: (0, c.we)("#LunarSale2022_Rules_Header"),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)("#LunarSale2022_Rules_Intro"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)(a.az, {
                        marginY: "medium",
                        display: "flex",
                        flexDirection: "column",
                        className: ce.Section,
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "small",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionHeader,
                            children: (0, c.we)("#LunarSale2022_Rules_1_Title"),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)("#LunarSale2022_Rules_1_Desc"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)(a.az, {
                        marginY: "medium",
                        display: "flex",
                        flexDirection: "column",
                        className: ce.Section,
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "small",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionHeader,
                            children: (0, c.we)("#LunarSale2022_Rules_2_Title"),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)("#LunarSale2022_Rules_2_Desc"),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)("#LunarSale2022_Rules_2_Desc2"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)(a.az, {
                        marginY: "medium",
                        display: "flex",
                        flexDirection: "column",
                        className: ce.Section,
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "small",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionHeader,
                            children: (0, c.we)("#LunarSale2022_Rules_3_Title"),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)("#LunarSale2022_Rules_3_Desc"),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionContent,
                            children: (0, c.we)("#LunarSale2022_Rules_3_Desc2"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)(a.az, {
                        marginY: "medium",
                        display: "flex",
                        flexDirection: "column",
                        className: ce.Section,
                        children: [
                          (0, e.jsx)(a.az, {
                            marginY: "small",
                            display: "flex",
                            flexDirection: "column",
                            className: ce.SectionHeader,
                            children: (0, c.we)("#LunarSale2022_Rules_4_Title"),
                          }),
                          (0, e.jsx)(a.az, {
                            marginY: "xsmall",
                            className: ce.SectionContent,
                            children: (0, c.PP)(
                              "#LunarSale2022_Rules_4_Desc",
                              (0, e.jsx)(Ae.uU, {
                                href: L.TS.STORE_BASE_URL + "privacy_agreement",
                                children: (0, c.we)(
                                  "#LunarSale2022_Rules_ClickHere",
                                ),
                              }),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                });
          }
        };
        Xe = rt([qe.PA], Xe);
        var ge = s(41735),
          Ge = s.n(ge),
          it = s(80902),
          ut = s(9353),
          $ = s(30992),
          ie = s(62389),
          pe = s(46943),
          Te = s(53113),
          K = s(88692),
          X = s(5108),
          we = s(6708),
          se = s(72604),
          xe = s(76559),
          Pe = s(32819),
          Ue = s(23386);
        function yt(o) {
          const { steamid: i } = o,
            g = new xe.b(i),
            H = (0, it.I)({
              queryKey: ["EquippedProfileItems", i],
              queryFn: () => Ce.DZ.Get().GetEquippedProfileItems(i),
              staleTime: 1 / 0,
            }),
            q = (0, it.I)({
              queryKey: ["MiniprofileData", i],
              queryFn: async () =>
                (
                  await Ge().get(
                    L.TS.COMMUNITY_BASE_URL +
                      "miniprofile/" +
                      g.GetAccountID() +
                      "/json/?origin=" +
                      L.TS.STORE_BASE_URL,
                  )
                ).data,
              staleTime: 1 / 0,
            }),
            _e = m.useMemo(
              () => H?.data?.active_definitions?.map((fe) => fe.appid),
              [H],
            ),
            tt = m.useMemo(() => {
              let fe = [];
              return (
                H?.data?.bundle_definitions?.length &&
                  (fe = [...H.data.bundle_definitions, ...fe]),
                H?.data?.active_definitions?.length &&
                  (fe = [...H.data.active_definitions, ...fe]),
                H?.data?.inactive_definitions?.length &&
                  (fe = [...H.data.inactive_definitions, ...fe]),
                fe?.find((Ve) => Ve.community_item_class == Ue.sU)
              );
            }, [H]);
          if (!H.data || !q.data) return null;
          let vt = null;
          H.data.eResult != se.R
            ? ((vt = (0, c.we)("#EquippedProfile_Error_Generic")),
              H.data.eResult == se.sW &&
                (vt = (0, c.we)("#EquippedProfile_Error_AccessDenied")))
            : !H.data.active_definitions?.length &&
              !H.data.inactive_definitions?.length &&
              (vt = (0, c.we)("#EquippedProfile_Error_NoItems"));
          const st = (fe, Ve) => ({
              rewards: H.data.active_definitions,
              bLoadingMore: !1,
              cTotalMatching: H.data.active_definitions.length,
              cMaxToReturn: H.data.active_definitions.length,
            }),
            It = (fe, Ve) => ({
              rewards: H.data.inactive_definitions,
              bLoadingMore: !1,
              cTotalMatching: H.data.inactive_definitions.length,
              cMaxToReturn: H.data.inactive_definitions.length,
            }),
            jt = {
              type: Ce.Tb,
              cluster: {
                id: "SimilarProfileItems",
                title: (0, c.we)("#EquippedProfile_RelatedAppsCarousel_Title"),
                subtitle: "",
                GetRewards: (fe, Ve, Ot) =>
                  Ce.DZ.Get().QueryRewardDefinitions(
                    { appid: _e, grouping: Ce.Bh },
                    fe,
                    Ve,
                  ),
              },
            },
            ot = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("a", {
                  className: K.Header,
                  href: (0, Te.k2)(L.TS.COMMUNITY_BASE_URL + "profiles/" + i),
                  children: [
                    (0, e.jsx)(pe.Ul, {
                      "data-miniprofile": "s" + i,
                      className: K.HeaderAvatar,
                      size: "Large",
                      statusPosition: "right",
                      strAvatarURL: q.data.avatar_url,
                    }),
                    q.data.persona_name,
                  ],
                }),
                (0, e.jsx)("div", {
                  children: (0, c.we)("#EquippedProfile_Header_Title"),
                }),
              ],
            });
          return (0, e.jsx)(_.jy, {
            background:
              tt &&
              `${L.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${tt.appid}/${tt.community_item_data?.item_image_large}`,
            children: (0, e.jsxs)(a.BJ, {
              className: X.PageItemsContainer,
              itemClassName: X.PageItemsContainerChildren,
              spacing: "xlarge",
              children: [
                (0, e.jsx)(_.Ch, {
                  title: ot,
                  subtitle: (0, c.we)("#EquippedProfile_Header_Desc"),
                }),
                vt &&
                  (0, e.jsx)("div", { className: K.ErrorCtn, children: vt }),
                H.data.active_definitions?.length > 0 &&
                  (0, e.jsx)($.Gq, {
                    title: (0, c.we)("#EquippedProfile_AvailableForPurchase"),
                    children: (0, e.jsx)(ie.n, {
                      style: { width: "100%" },
                      getItems: st,
                      itemClassName: we.ItemHoverZIndex,
                      renderItem: (fe) =>
                        (0, e.jsx)(ut.z, { definition: fe }, fe.defid),
                    }),
                  }),
                H.data.inactive_definitions?.length > 0 &&
                  (0, e.jsx)($.Gq, {
                    title: (0, c.we)("#EquippedProfile_NotAvailable"),
                    subtitle: (0, c.Yp)(
                      "#EquippedProfile_NotAvailable_Desc",
                      H.data.inactive_definitions.length,
                    ),
                    children: (0, e.jsx)(ie.n, {
                      style: { width: "100%" },
                      getItems: It,
                      itemClassName: we.ItemHoverZIndex,
                      renderItem: (fe) =>
                        (0, e.jsx)(
                          Pe.Fo,
                          { definition: fe, purchaseable: !1 },
                          fe.defid,
                        ),
                    }),
                  }),
                _e?.length > 0 && (0, e.jsx)(ut.d, { descriptor: jt }),
              ],
            }),
          });
        }
        var Ct = s(57585),
          nt = s(35038),
          Qe = s(80613),
          be = s.n(Qe),
          b = s(75245);
        function Bt(o) {
          return "unknown EAuctionBidState ( " + o + " )";
        }
        class Oe extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Oe.prototype.accountid || b.Sg(Oe.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    accountid: {
                      n: 1,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    auctiondescriptionid: {
                      n: 2,
                      br: b.qM.readUint64String,
                      bw: b.gp.writeUint64String,
                    },
                    state: { n: 3, br: b.qM.readEnum, bw: b.gp.writeEnum },
                    time_created: {
                      n: 4,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    time_updated: {
                      n: 5,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    amount_bid: {
                      n: 6,
                      br: b.qM.readInt64String,
                      bw: b.gp.writeInt64String,
                    },
                    amount_paid: {
                      n: 7,
                      br: b.qM.readInt64String,
                      bw: b.gp.writeInt64String,
                    },
                    auctionbidid: {
                      n: 8,
                      br: b.qM.readInt64String,
                      bw: b.gp.writeInt64String,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = b.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(i = !1) {
            return Oe.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(Oe.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(Oe.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new Oe();
            return Oe.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(Oe.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(Oe.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_Bid";
          }
        }
        class lt extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              lt.prototype.auctiondescriptionid || b.Sg(lt.M()),
              Qe.Message.initialize(this, i, 0, -1, [12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    auctiondescriptionid: {
                      n: 1,
                      br: b.qM.readUint64String,
                      bw: b.gp.writeUint64String,
                    },
                    time_start: {
                      n: 2,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    time_end: {
                      n: 3,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    amount_total: {
                      n: 5,
                      br: b.qM.readInt64String,
                      bw: b.gp.writeInt64String,
                    },
                    amount_remaining: {
                      n: 6,
                      br: b.qM.readInt64String,
                      bw: b.gp.writeInt64String,
                    },
                    highest_amount: {
                      n: 7,
                      br: b.qM.readInt64String,
                      bw: b.gp.writeInt64String,
                    },
                    highest_bidder_accountid: {
                      n: 8,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    community_item_appid: {
                      n: 9,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    community_item_type: {
                      n: 10,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    store_appid: {
                      n: 11,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    store_packageids: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: b.qM.readUint32,
                      pbr: b.qM.readPackedUint32,
                      bw: b.gp.writeRepeatedUint32,
                    },
                    reserve_price: {
                      n: 13,
                      br: b.qM.readInt64String,
                      bw: b.gp.writeInt64String,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = b.w0(lt.M())), lt.sm_mbf;
          }
          toObject(i = !1) {
            return lt.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(lt.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(lt.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new lt();
            return lt.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(lt.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(lt.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_Item";
          }
        }
        class Mt extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Mt.prototype.auctiondescriptionid || b.Sg(Mt.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    auctiondescriptionid: {
                      n: 1,
                      br: b.qM.readUint64String,
                      bw: b.gp.writeUint64String,
                    },
                    amount_bid: {
                      n: 2,
                      br: b.qM.readInt64String,
                      bw: b.gp.writeInt64String,
                    },
                    expected_amount_remaining: {
                      n: 3,
                      br: b.qM.readInt32,
                      bw: b.gp.writeInt32,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = b.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(i = !1) {
            return Mt.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(Mt.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(Mt.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new Mt();
            return Mt.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(Mt.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(Mt.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_PlaceBid_Request";
          }
        }
        class et extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return et.toObject(i, this);
          }
          static toObject(i, g) {
            return i ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(i) {
            return new et();
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new et();
            return et.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return i;
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return et.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {}
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_PlaceBid_Response";
          }
        }
        class Je extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Je.prototype.auctiondescriptionid || b.Sg(Je.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    auctiondescriptionid: {
                      n: 1,
                      br: b.qM.readUint64String,
                      bw: b.gp.writeUint64String,
                    },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = b.w0(Je.M())), Je.sm_mbf;
          }
          toObject(i = !1) {
            return Je.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(Je.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(Je.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new Je();
            return Je.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(Je.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(Je.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_CancelBid_Request";
          }
        }
        class pt extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              pt.prototype.amount_returned || b.Sg(pt.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    amount_returned: {
                      n: 1,
                      br: b.qM.readInt64String,
                      bw: b.gp.writeInt64String,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = b.w0(pt.M())), pt.sm_mbf;
          }
          toObject(i = !1) {
            return pt.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(pt.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(pt.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new pt();
            return pt.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(pt.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(pt.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_CancelBid_Response";
          }
        }
        class mt extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              mt.prototype.steamid || b.Sg(mt.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: b.qM.readFixed64String,
                      bw: b.gp.writeFixed64String,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = b.w0(mt.M())), mt.sm_mbf;
          }
          toObject(i = !1) {
            return mt.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(mt.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(mt.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new mt();
            return mt.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(mt.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(mt.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetBidsForUser_Request";
          }
        }
        class Ke extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ke.prototype.bids || b.Sg(Ke.M()),
              Qe.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: { bids: { n: 1, c: Oe, r: !0, q: !0 } },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = b.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(i = !1) {
            return Ke.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(Ke.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(Ke.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new Ke();
            return Ke.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(Ke.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(Ke.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetBidsForUser_Response";
          }
        }
        class wt extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              wt.prototype.auctiondescriptionid || b.Sg(wt.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    auctiondescriptionid: {
                      n: 1,
                      br: b.qM.readUint64String,
                      bw: b.gp.writeUint64String,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = b.w0(wt.M())), wt.sm_mbf;
          }
          toObject(i = !1) {
            return wt.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(wt.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(wt.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new wt();
            return wt.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(wt.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(wt.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetBidsForItem_Request";
          }
        }
        class xt extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              xt.prototype.item || b.Sg(xt.M()),
              Qe.Message.initialize(this, i, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    item: { n: 1, c: lt },
                    count_total: {
                      n: 2,
                      br: b.qM.readInt32,
                      bw: b.gp.writeInt32,
                    },
                    current_user_position: {
                      n: 3,
                      br: b.qM.readInt32,
                      bw: b.gp.writeInt32,
                    },
                    winning_bids: { n: 4, c: Oe, r: !0, q: !0 },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = b.w0(xt.M())), xt.sm_mbf;
          }
          toObject(i = !1) {
            return xt.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(xt.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(xt.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new xt();
            return xt.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(xt.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(xt.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetBidsForItem_Response";
          }
        }
        class ht extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ht.prototype.auctiondescriptionid || b.Sg(ht.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    auctiondescriptionid: {
                      n: 1,
                      br: b.qM.readUint64String,
                      bw: b.gp.writeUint64String,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = b.w0(ht.M())), ht.sm_mbf;
          }
          toObject(i = !1) {
            return ht.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(ht.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(ht.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new ht();
            return ht.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(ht.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(ht.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetUserBidForItem_Request";
          }
        }
        class $e extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              $e.prototype.bid || b.Sg($e.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = { proto: $e, fields: { bid: { n: 1, c: Oe } } }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = b.w0($e.M())), $e.sm_mbf;
          }
          toObject(i = !1) {
            return $e.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT($e.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq($e.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new $e();
            return $e.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj($e.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0($e.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetUserBidForItem_Response";
          }
        }
        class ct extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ct.prototype.auctiondescriptionid || b.Sg(ct.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    auctiondescriptionid: {
                      n: 1,
                      br: b.qM.readUint64String,
                      bw: b.gp.writeUint64String,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = b.w0(ct.M())), ct.sm_mbf;
          }
          toObject(i = !1) {
            return ct.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(ct.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(ct.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new ct();
            return ct.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(ct.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(ct.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetItemDetails_Request";
          }
        }
        class Re extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Re.prototype.item || b.Sg(Re.M()),
              Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = { proto: Re, fields: { item: { n: 1, c: lt } } }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = b.w0(Re.M())), Re.sm_mbf;
          }
          toObject(i = !1) {
            return Re.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(Re.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(Re.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new Re();
            return Re.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(Re.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(Re.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetItemDetails_Response";
          }
        }
        class Dt extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Qe.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Dt.toObject(i, this);
          }
          static toObject(i, g) {
            return i ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(i) {
            return new Dt();
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new Dt();
            return Dt.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return i;
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {}
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetAllItems_Request";
          }
        }
        class ft extends Qe.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ft.prototype.items || b.Sg(ft.M()),
              Qe.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: { items: { n: 1, c: lt, r: !0, q: !0 } },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = b.w0(ft.M())), ft.sm_mbf;
          }
          toObject(i = !1) {
            return ft.toObject(i, this);
          }
          static toObject(i, g) {
            return b.BT(ft.M(), i, g);
          }
          static fromObject(i) {
            return b.Uq(ft.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (be().BinaryReader)(i),
              H = new ft();
            return ft.deserializeBinaryFromReader(H, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return b.zj(ft.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (be().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            b.i0(ft.M(), i, g);
          }
          serializeBase64String() {
            var i = new (be().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuction_GetAllItems_Response";
          }
        }
        var zt;
        ((o) => {
          function i(st, It, jt) {
            return st.SendMsg(
              "Auction.PlaceBid#1",
              (0, nt.I8)(Mt, It, jt),
              et,
              { ePrivilege: 3 },
            );
          }
          o.PlaceBid = i;
          function g(st, It, jt) {
            return st.SendMsg(
              "Auction.CancelBid#1",
              (0, nt.I8)(Je, It, jt),
              pt,
              { ePrivilege: 1 },
            );
          }
          o.CancelBid = g;
          function H(st, It, jt) {
            return st.SendMsg(
              "Auction.GetBidsForUser#1",
              (0, nt.I8)(mt, It, jt),
              Ke,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          o.GetBidsForUser = H;
          function q(st, It, jt) {
            return st.SendMsg(
              "Auction.GetBidsForItem#1",
              (0, nt.I8)(wt, It, jt),
              xt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetBidsForItem = q;
          function _e(st, It, jt) {
            return st.SendMsg(
              "Auction.GetUserBidForItem#1",
              (0, nt.I8)(ht, It, jt),
              $e,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          o.GetUserBidForItem = _e;
          function tt(st, It, jt) {
            return st.SendMsg(
              "Auction.GetItemDetails#1",
              (0, nt.I8)(ct, It, jt),
              Re,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetItemDetails = tt;
          function vt(st, It, jt) {
            return st.SendMsg(
              "Auction.GetAllItems#1",
              (0, nt.I8)(Dt, It, jt),
              ft,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          o.GetAllItems = vt;
        })(zt || (zt = {}));
        var kt = s(14947),
          Vt = Object.defineProperty,
          Qt = Object.getOwnPropertyDescriptor,
          Zt = (o, i, g, H) => {
            for (
              var q = H > 1 ? void 0 : H ? Qt(i, g) : i, _e = o.length - 1, tt;
              _e >= 0;
              _e--
            )
              (tt = o[_e]) && (q = (H ? tt(i, g, q) : tt(q)) || q);
            return H && q && Vt(i, g, q), q;
          };
        const Lt = class ps {
          constructor() {
            (0, kt.Gn)(this);
          }
          m_transport;
          m_anonymousTransport;
          static s_Singleton;
          m_bLoadedCurrentUserBids = !1;
          m_rgCurrentUserBids = kt.sH.array([], { deep: !0 });
          m_bLoadedAllItems = !1;
          m_mapAuctionItems = new Map();
          static Get() {
            return (
              this.s_Singleton || (this.s_Singleton = new ps()),
              this.s_Singleton
            );
          }
          Init(i) {
            (this.m_transport = i.GetServiceTransport()),
              (this.m_anonymousTransport = i.GetAnonymousServiceTransport());
          }
          async LoadCurrentUserBids() {
            if (!Ce.DZ.Get().BIsLoggedIn()) return [];
            const i = nt.w.Init(mt);
            i.SetBodyFields({ steamid: L.iA.steamid });
            let g = await zt.GetBidsForUser(this.m_transport, i);
            return g.GetEResult() == se.R
              ? g.Body().toObject().bids
              : (console.error(
                  `Error when calling AuctionService.GetBidsForUser: EResult=${g.GetEResult()}`,
                ),
                []);
          }
          GetCurrentUserBids(i) {
            return (
              (!this.m_bLoadedCurrentUserBids || i) &&
                ((this.m_bLoadedCurrentUserBids = !0),
                (this.m_rgCurrentUserBids = []),
                this.LoadCurrentUserBids().then((g) =>
                  g.forEach((H) => this.m_rgCurrentUserBids.push(H)),
                )),
              this.m_rgCurrentUserBids
            );
          }
          async LoadAllItems() {
            const i = nt.w.Init(Dt);
            let g = await zt.GetAllItems(this.m_anonymousTransport, i);
            return g.GetEResult() == se.R
              ? g.Body().toObject().items
              : (console.error(
                  `Error when calling AuctionService.GetAllItems: EResult=${g.GetEResult()}`,
                ),
                []);
          }
          GetAllItems(i) {
            return (
              (!this.m_bLoadedAllItems || i) &&
                ((this.m_bLoadedCurrentUserBids = !0),
                this.m_mapAuctionItems.clear(),
                this.LoadAllItems().then((g) =>
                  g.forEach((H) =>
                    this.m_mapAuctionItems.set(H.store_appid, H),
                  ),
                )),
              this.m_mapAuctionItems
            );
          }
          GetAuctionItemByAppID(i) {
            return this.GetAllItems(!1).get(i);
          }
          async GetUserBidForItem(i) {
            const g = nt.w.Init(ht);
            let H = await zt.GetUserBidForItem(this.m_transport, g);
            return H.GetEResult() == se.R
              ? H.Body().toObject().bid
              : (console.error(
                  `Error when calling AuctionService.GetUserBidForItem: EResult=${H.GetEResult()}`,
                ),
                null);
          }
          async PlaceBid(i, g, H) {
            let q = { eResult: se.zi, strMessage: "" };
            if (!Ce.DZ.Get().BIsLoggedIn())
              return (q = { eResult: se.Dy, strMessage: "Not logged on" }), q;
            const _e = nt.w.Init(Mt);
            _e.SetBodyFields({
              auctiondescriptionid: i,
              amount_bid: g,
              expected_amount_remaining: H,
            });
            const tt = await zt.PlaceBid(this.m_transport, _e);
            return (
              (q.eResult = tt.GetEResult()),
              tt.GetEResult() == se.R
                ? this.GetCurrentUserBids(!0)
                : ((q.strMessage = tt.Hdr().error_message()),
                  console.error(
                    `Error when calling AuctionService.PlaceBid: EResult=${tt.GetEResult()}`,
                  )),
              q
            );
          }
          async CancelBid(i) {
            let g = { eResult: se.zi, strMessage: "" };
            if (!Ce.DZ.Get().BIsLoggedIn())
              return (g = { eResult: se.Dy, strMessage: "Not logged on" }), g;
            const H = nt.w.Init(Je);
            H.SetBodyFields({ auctiondescriptionid: i });
            const q = await zt.CancelBid(this.m_transport, H);
            return (
              (g.eResult = q.GetEResult()),
              q.GetEResult() == se.R
                ? this.GetCurrentUserBids(!0)
                : ((g.strMessage = q.Hdr().error_message()),
                  console.error(
                    `Error when calling AuctionService.CancelBid: EResult=${q.GetEResult()}`,
                  )),
              g
            );
          }
        };
        Zt([kt.sH], Lt.prototype, "m_rgCurrentUserBids", 2),
          Zt([kt.sH], Lt.prototype, "m_mapAuctionItems", 2);
        let es = null;
        var St = s(85528);
        async function ts() {
          const o = L.TS.LANGUAGE,
            i = c.A0.GetLanguageFallback(o),
            g = o === i,
            [H, q] = await Promise.all([
              s(94719)(`./loyalty_${o}.json`),
              g ? void 0 : s(94114)(`./loyalty_${i}.json`),
            ]);
          c.pf.AddTokens(H.default, q ? q.default : void 0);
        }
        var Yt = s(47653),
          Xt = s(6469),
          Gt = s(33828);
        class Kt extends m.Component {
          state = { bReady: !1 };
          componentDidMount() {
            t.then(() => this.setState({ bReady: !0 }));
          }
          render() {
            return this.state.bReady
              ? (0, e.jsx)(Ct.X, {
                  children: (0, e.jsxs)(u.dO, {
                    children: [
                      (0, e.jsx)(u.qh, {
                        path: S.B.LoyaltyHowItWorks(),
                        children: (0, e.jsx)(Ee, {}),
                      }),
                      (0, e.jsx)(u.qh, {
                        path: S.B.LoyaltyStore(),
                        children: (0, e.jsx)(h.m, {}),
                      }),
                      (0, e.jsx)(u.qh, {
                        path: S.B.LoyaltyGiveawayRules(),
                        children: (0, e.jsx)(Xe, {}),
                      }),
                      (0, e.jsx)(u.qh, {
                        path: S.B.LoyaltyEquippedProfile(":steamid"),
                        render: (i) =>
                          (0, e.jsx)(yt, { steamid: i.match.params.steamid }),
                      }),
                      (0, e.jsx)(u.qh, {
                        children: (0, e.jsx)(u.rd, { to: S.B.LoyaltyStore() }),
                      }),
                    ],
                  }),
                })
              : (0, e.jsx)(Yt.R, {});
          }
        }
        async function ne() {
          let o = (0, L.Tc)("loyaltystore", "application_config");
          const i = (0, Gt.P)();
          St.Vw.Init(i),
            await ts(),
            await Xt.Fm.Get().HintLoad(),
            Ce.DZ.Get().Init(i, o);
        }
        const t = ne(),
          r = Kt;
      },
      58083: (W, E, s) => {
        "use strict";
        s.d(E, { u: () => S });
        var e = s(3166),
          m = s(23386),
          u = s(25509);
        function S(L) {
          switch (L.community_item_class) {
            case m.xw:
            case m.xi:
            case m.Ed:
              return (0, u.k)(L.appid, L.community_item_data.item_image_small);
            case m.sU:
              return `${e.TS.COMMUNITY_BASE_URL}economy/profilebackground/items/${L.appid}/${L.community_item_data.item_image_large}?size=320x200`;
            default:
              return (0, u.k)(L.appid, L.community_item_data.item_image_large);
          }
        }
      },
      491: (W, E, s) => {
        "use strict";
        s.d(E, { F: () => Ae, m: () => Ee });
        var e = s(7850),
          m = s(90626),
          u = s(75844),
          S = s(65946),
          L = s(92757),
          h = s(17083),
          F = s(51619),
          _ = s(5108),
          a = s(37939),
          w = s(49288),
          c = s(58732),
          f = s(23903),
          j = s(18210),
          x = s(9353),
          M = s(47653),
          n = s(4370),
          le = s(81435),
          Ne = s(30992);
        function De(K) {
          const {
              title: X,
              description: we,
              image: se,
              iconComponent: xe,
              linked_page: Pe,
              link_text: Ue,
            } = K,
            yt = xe,
            Ct = typeof Pe == "string" ? Pe : (0, a.bp)(Pe);
          return (0, e.jsx)(Ne.Gq, {
            children: (0, e.jsxs)("div", {
              className: le.Banner,
              children: [
                se && (0, e.jsx)("img", { className: le.Image, src: se }),
                xe && (0, e.jsx)(yt, { className: le.Image }),
                (0, e.jsxs)("div", {
                  className: le.Content,
                  children: [
                    (0, e.jsx)("div", { className: le.Title, children: X }),
                    (0, e.jsx)("div", {
                      className: le.Description,
                      children: we,
                    }),
                  ],
                }),
                (0, e.jsx)(n.A, { className: le.Link, to: Ct, children: Ue }),
              ],
            }),
          });
        }
        var Se = s(85528),
          ue = s(47283),
          ee = s(57585);
        const R =
          s.p +
          "images/applications/store/coin_single.png?v=valveisgoodatcaching";
        var I = s(36636),
          B = s(81944),
          v = s(36707),
          P = s(78175),
          O = s(28910),
          U = s(47190),
          Y = s(80736),
          Z = s(11981);
        const ae =
            s.p +
            "images/applications/store/csgoChat_128_hugs.png?v=valveisgoodatcaching",
          V =
            s.p + "images/applications/store/dance.png?v=valveisgoodatcaching",
          oe =
            s.p +
            "images/applications/store/icons_floor.png?v=valveisgoodatcaching";
        var G = s(3166),
          y = s(82942);
        const A =
          s.p +
          "images/applications/store/MysterySticker.png?v=valveisgoodatcaching";
        var me = s(32819),
          de = s(23386),
          Be = s(96986),
          Q = s(74077),
          re = s(36118),
          ye = s(31561),
          he = s(36174);
        const D = (0, u.PA)((K) => {
            const X = {
                item_name: "Free Item",
                item_title: (0, j.we)("#SummerSale_ItemTitle"),
                animated: !0,
              },
              we = {
                defid: void 0,
                appid: a.tP.Get().GetCurrentSaleRewardAppID(),
                type: w.kT.b2,
                community_item_class: de.Ed,
                point_cost: "0",
                quantity: "1",
                active: !0,
                community_item_data: X,
              };
            let se = null,
              xe = null,
              Pe = (nt) => (0, P.U$)(nt, we, null, !0),
              Ue = A,
              yt = (0, j.we)("#SummerSale_ItemName");
            const Ct = a.tP.Get().BCanClaimFreeSaleReward();
            if (!Ct) {
              (xe = (0, e.jsx)("div", {
                className: Q.ClaimedText,
                children: (0, j.we)("#Rewards_Claimed"),
              })),
                (se = (0, v.A)(y.SaleRewardItemOwned, Q.OwnedItem)),
                (Pe = null);
              const nt = a.tP.Get().GetClaimedSaleRewardItemDef();
              nt &&
                ((yt = nt.community_item_data.item_title),
                (Ue = `${G.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${nt.appid}/${nt.community_item_data.item_image_small}`));
            }
            return (0, e.jsx)(f.az, {
              display: "flex",
              flexDirection: "column",
              className: y.SaleRewardContainer,
              children: (0, e.jsxs)(f.az, {
                className: y.SaleRewardContainerFlex,
                children: [
                  (0, e.jsxs)(f.az, {
                    display: "flex",
                    flexDirection: "column",
                    className: y.LeftColumn,
                    children: [
                      (0, e.jsx)("div", {
                        className: y.SaleRewardLogoContainerFlex,
                        children: (0, e.jsx)("img", {
                          className: y.SaleRewardLogo,
                          alt: "Sale",
                          src: a.DZ.Get().GetFreeItemHeaderSource(),
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: y.SaleRewardTextContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: y.SaleRewardSubHeader,
                            children: (0, j.we)("#SummerSale_FreeDesc_2"),
                          }),
                          !Ct &&
                            (0, e.jsx)("div", {
                              className: y.SummerNextStop,
                              children: (0, e.jsx)(Ce, {}),
                            }),
                          (0, e.jsx)(h.N_, {
                            className: y.RulesLink,
                            to: c.B.LoyaltyGiveawayRules(),
                            children: (0, j.we)("#SummerSale_Redeem_Rules"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", {
                    className: y.FreeItemContainer,
                    children: (0, e.jsx)(me.kn, {
                      name: yt,
                      cost: 0,
                      attributes: [
                        (0, e.jsx)(
                          Be.kh,
                          { className: Q.IconAnimated },
                          "animated",
                        ),
                      ],
                      iconComponent: re.EEf,
                      styleOverride: se,
                      desc: (0, j.we)("#CommunityItemClass_Sticker"),
                      strPriceOverride: xe,
                      onClick: Pe,
                      children: (0, e.jsx)("img", {
                        className: Q.ImageMedium,
                        src: Ue,
                      }),
                    }),
                  }),
                ],
              }),
            });
          }),
          Ce = (0, u.PA)(() => {
            const K = a.tP.Get().GetNextClaimTime();
            return K
              ? (0, e.jsxs)("span", {
                  className: y.NextStop,
                  children: [
                    (0, e.jsx)("span", {
                      className: y.Title,
                      children: (0, j.we)("#SummerSale_NextStop"),
                    }),
                    (0, e.jsx)(qe, { className: y.Timer, time: K.getTime() }),
                  ],
                })
              : null;
          }),
          qe = (0, u.PA)((K) => {
            const { time: X, ...we } = K,
              se = Math.floor(Math.max(0, X - ye.tB()) / 1e3),
              xe = Math.floor(se / he.Kp.PerHour),
              Pe = Math.floor((se - xe * he.Kp.PerHour) / he.Kp.PerMinute),
              Ue = Math.floor(se - (xe * he.Kp.PerHour + Pe * he.Kp.PerMinute));
            return (0, e.jsxs)("span", {
              style: { fontFamily: "monospace" },
              ...we,
              children: [ze(xe), ":", ze(Pe), ":", ze(Ue)],
            });
          }),
          ze = (K) => K.toString().padStart(2, "0");
        var Fe = s(80902),
          He = s(41735),
          Ze = s.n(He),
          T = s(72865),
          Le = s(83482),
          We = s(72604),
          ke = s(7582),
          k = Object.defineProperty,
          te = Object.getOwnPropertyDescriptor,
          C = (K, X, we, se) => {
            for (
              var xe = se > 1 ? void 0 : se ? te(X, we) : X,
                Pe = K.length - 1,
                Ue;
              Pe >= 0;
              Pe--
            )
              (Ue = K[Pe]) && (xe = (se ? Ue(X, we, xe) : Ue(xe)) || xe);
            return se && xe && k(X, we, xe), xe;
          };
        const Me = () => (0, e.jsx)("div", {}),
          je = m.lazy(() => s.e(45004).then(s.bind(s, 99449))),
          Ie = m.lazy(() => s.e(68685).then(s.bind(s, 92908)));
        let Ee = class extends m.Component {
          render() {
            return (0, e.jsxs)(e.Fragment, {
              children: [(0, e.jsx)(at, {}), (0, e.jsx)(ce, {})],
            });
          }
        };
        Ee = C([u.PA], Ee);
        const ce = (0, u.PA)(() => {
          const K = (0, L.W5)("*/reward/:definitionid"),
            X = K && K.params && K.params.definitionid,
            we = parseInt(X);
          return (
            m.useEffect(() => {
              we && !isNaN(we) && (0, P.d7)(null, we);
            }, [we]),
            null
          );
        });
        function Ae() {
          return (0, e.jsxs)("div", {
            className: _.PageHomeTopTitle,
            children: [
              (0, e.jsx)(Be.RE, { className: _.Sparkles }),
              (0, e.jsxs)("div", {
                className: _.PageHomeBranding,
                children: [" ", (0, j.we)("#ShopLink"), " "],
              }),
            ],
          });
        }
        let Ye = class extends m.Component {
          GetCoupon() {
            const K = a.DZ.Get().GetCouponPromosForUser();
            let X = a.DZ.Get().GetPointsAvailable(),
              we = 0,
              se = 0,
              xe = 0,
              Pe = 0;
            return (
              K.forEach((Ue) => {
                const yt = a.DZ.Get().GetCouponDefinition(Ue.loyalty_reward_id);
                if (yt) {
                  (Pe += Ue.max_use_count * parseInt(Ue.discount_amount)),
                    (se += Ue.available_use_count);
                  for (let Ct = 0; Ct < Ue.available_use_count; Ct++)
                    we + parseInt(yt.point_cost) <= X.getLowBits() &&
                      ((xe += parseInt(Ue.discount_amount)),
                      (we = we + parseInt(yt.point_cost))),
                      (xe = Math.max(xe, parseInt(Ue.discount_amount))),
                      we || (we = parseInt(yt.point_cost));
                }
              }),
              null
            );
          }
          render() {
            const K = [];
            a.DZ.Get()
              .getLoyaltyRewardDefMap()
              .forEach((se) => {
                K.length < 3 && se.type == w.kT.b2 && K.push(se);
              });
            const X = a.DZ.Get().GetPageDescriptor({
                type: "custom",
                pageid: a.pp,
              }),
              we = (0, e.jsxs)("div", {
                className: _.PageHomeTop,
                children: [
                  (0, e.jsxs)("div", {
                    className: _.PageHomeBanner,
                    children: [
                      (0, e.jsx)("img", {
                        className: _.HomeRewardsPointsIcon,
                        src: R,
                      }),
                      (0, e.jsx)("img", {
                        className: _.PageHomeBannerFloor,
                        src: oe,
                      }),
                      (0, e.jsxs)("div", {
                        className: _.PageHomeBannerIcons,
                        children: [
                          (0, e.jsx)("img", {
                            className: _.PageHomeBannerChicken,
                            src: Z.A,
                          }),
                          (0, e.jsx)("img", {
                            className: _.PageHomeBannerBored,
                            src: O.A,
                          }),
                          (0, e.jsx)("img", {
                            className: _.PageHomeBannerHugs,
                            src: ae,
                          }),
                          (0, e.jsx)("img", {
                            className: _.PageHomeBannerHappy,
                            src: U.A,
                          }),
                          (0, e.jsx)("img", {
                            className: _.PageHomeBannerBoombox,
                            src: Y.A,
                          }),
                          (0, e.jsx)("img", {
                            className: _.PageHomeBannerDance,
                            src: V,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: _.PageHomeTitleContainer,
                    children: [
                      (0, e.jsx)(Ae, {}),
                      (0, e.jsx)("div", {
                        className: _.PageHomeTopSubTitle,
                        children: (0, j.we)("#ShopHome_UseRewardPoints"),
                      }),
                      (0, e.jsx)("div", {
                        className: _.PageHomeTopSubTitle,
                        children: (0, j.we)(
                          "#ShopHome_UseRewardPoints_Subtitle",
                        ),
                      }),
                      (0, e.jsx)(h.N_, {
                        className: _.PageHomeTopLink,
                        to: c.B.LoyaltyHowItWorks(),
                        children: (0, e.jsxs)(F.N, {
                          className: _.PageHomeHowItWorks,
                          children: [" ", (0, j.we)("#ShopHome_HowLinkBtn")],
                        }),
                      }),
                    ],
                  }),
                ],
              });
            return (0, e.jsx)(I.ZI, {
              children:
                X &&
                (0, e.jsx)(Ge, {
                  header: we,
                  descriptor: X,
                  children:
                    a.DZ.Get().BIsSaleActive() &&
                    (0, e.jsx)(Ne.Gq, { children: (0, e.jsx)(D, {}) }),
                }),
            });
          }
        };
        Ye = C([u.PA], Ye);
        const at = () =>
            (0, e.jsxs)(L.dO, {
              children: [
                (0, e.jsx)(L.qh, {
                  path: c.B.LoyaltySteamBadge(),
                  children: (0, e.jsx)(rt, {}),
                }),
                (0, e.jsx)(L.qh, {
                  path: c.B.LoyaltyByGame(),
                  children: (0, e.jsx)(pe, {}),
                }),
                (0, e.jsx)(L.qh, {
                  path: c.B.LoyaltyByEvent(),
                  children: (0, e.jsx)(Te, {}),
                }),
                !1,
                (0, e.jsx)(L.qh, {
                  path: c.B.LoyaltyProfileCustomizations(),
                  children: (0, e.jsx)(je, {}),
                }),
                (0, e.jsx)(L.qh, {
                  path: c.B.LoyaltyItemBundle(":bundleid"),
                  render: (K) => (0, e.jsx)(Ie, { ...K }),
                }),
                (0, e.jsx)(L.qh, {
                  path: c.B.LoyaltyEvents(":eventname"),
                  render: (K) =>
                    (0, e.jsx)($, { eventname: K.match.params.eventname }),
                }),
                (0, e.jsx)(L.qh, {
                  path: `${c.B.LoyaltyStore()}/app/:appid/cluster/:clusterindex`,
                  render: (K) => (0, e.jsx)(it, { ...K }),
                }),
                (0, e.jsx)(L.qh, {
                  path: `${c.B.LoyaltyStore()}/app/:appid`,
                  render: (K) =>
                    (0, e.jsx)(ut, { appid: parseInt(K.match.params.appid) }),
                }),
                (0, e.jsx)(L.qh, {
                  path: `${c.B.LoyaltyStore()}/c/:pageid/cluster/:clusterindex`,
                  render: (K) => (0, e.jsx)(it, { ...K }),
                }),
                (0, e.jsx)(L.qh, {
                  path: `${c.B.LoyaltyStore()}/c/:pageid`,
                  render: (K) =>
                    (0, e.jsx)(ge, { pageid: K.match.params.pageid }),
                }),
                (0, e.jsx)(L.qh, { children: (0, e.jsx)(Xe, {}) }),
              ],
            }),
          rt = () => (0, e.jsx)(ue.f, {}),
          Xe = () => (0, e.jsx)(Ye, {});
        let ge = class extends m.Component {
          componentDidMount() {
            a.DZ.Get().SetIsUsingAppIDFilters(!0);
          }
          componentWillUnmount() {
            a.DZ.Get().SetIsUsingAppIDFilters(!1);
          }
          render() {
            const { pageid: K } = this.props,
              X = a.DZ.Get().GetAppIDFilters(),
              we = Array.from(X.keys()),
              se = a.DZ.Get().GetCurrentSearchTerm(),
              xe = {
                appid: we.length ? we : void 0,
                searchLanguage: se.length ? G.TS.LANGUAGE : void 0,
                searchTerm: se.length ? se : void 0,
              },
              Pe = a.DZ.Get().GetPageDescriptor({ type: "custom", pageid: K });
            return (0, e.jsx)(I.jy, {
              children: Pe
                ? (0, e.jsx)(Ge, { descriptor: Pe, additionalFilter: xe })
                : (0, e.jsx)(M.R, {}),
            });
          }
        };
        ge = C([u.PA], ge);
        const Ge = (0, u.PA)((K) => {
          const {
              descriptor: {
                items: X,
                title: we,
                subtitle: se,
                searchPlaceholder: xe,
                headerImage: Pe,
                params: Ue,
              },
              header: yt,
              additionalFilter: Ct,
            } = K,
            nt =
              yt ||
              (0, e.jsx)(I.Ch, { title: we, subtitle: se, headerImage: Pe });
          (0, ee.L)(xe);
          const be = (0, f.xC)() === "mobile";
          return (0, e.jsx)(f.az, {
            paddingX: "none",
            children: (0, e.jsxs)(f.BJ, {
              className: (0, v.A)(
                _.PageItemsContainer,
                _.PageBrandingTopPadding,
              ),
              itemClassName: _.PageItemsContainerChildren,
              spacing: be ? "medium" : "xlarge",
              children: [
                nt,
                K.children,
                X.filter(Boolean).map((b, Bt) => {
                  switch (b.type) {
                    case "banner":
                      const { type: Oe, ...lt } = b;
                      return (0, m.createElement)(De, {
                        ...lt,
                        key: `${b.title}_${Bt}`,
                      });
                    case "clusterview":
                      return (0, e.jsx)(
                        x.d,
                        {
                          descriptor: b.view,
                          additionalFilter: Ct,
                          linkedPage:
                            b.view.linkedPage === null
                              ? void 0
                              : b.view.linkedPage || {
                                  ...Ue,
                                  clusterindex: Bt,
                                },
                        },
                        `${b.view.cluster.id}_${Bt}`,
                      );
                  }
                }),
              ],
            }),
          });
        });
        let it = class extends m.Component {
          componentDidMount() {
            a.DZ.Get().SetIsUsingAppIDFilters(!0);
          }
          componentWillUnmount() {
            a.DZ.Get().SetIsUsingAppIDFilters(!1);
          }
          DeriveClusterView() {
            const {
                match: {
                  params: { pageid: K, appid: X, clusterindex: we },
                },
              } = this.props,
              se = parseInt(we);
            if (isNaN(se)) return null;
            let xe;
            if (K) xe = { type: "custom", pageid: K };
            else if (X) {
              const yt = parseInt(X);
              if (isNaN(yt)) return null;
              xe = { type: "app", appid: yt };
            } else
              return (
                console.error("Could not determine owning page for cluster"),
                null
              );
            const Pe = a.DZ.Get().GetPageDescriptor(xe);
            if (!Pe) return null;
            const Ue = Pe.items[se];
            return !Ue || Ue.type !== "clusterview"
              ? null
              : { ...Ue.view, type: a.hr };
          }
          render() {
            const K = this.DeriveClusterView();
            if (!K) return null;
            const X = a.DZ.Get().GetAppIDFilters(),
              we = Array.from(X.keys()),
              se = a.DZ.Get().GetCurrentSearchTerm(),
              xe = {
                appid: we.length ? we : void 0,
                searchLanguage: se.length ? G.TS.LANGUAGE : void 0,
                searchTerm: se.length ? se : void 0,
              };
            return (0, e.jsx)(I.jy, {
              children: (0, e.jsx)(f.az, {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: (0, e.jsx)(x.d, {
                  descriptor: K,
                  additionalFilter: xe,
                }),
              }),
            });
          }
        };
        it = C([u.PA], it);
        function ut(K) {
          const { appid: X } = K,
            we = (0, T.n9)(),
            se = (0, S.q3)(() =>
              a.DZ.Get().GetPageDescriptor({ type: "app", appid: X }),
            ),
            xe = (0, S.q3)(() => Se.Vw.GetAppInfo(X));
          return se
            ? (0, e.jsx)(I.dR, {
                appid: X,
                children: (0, e.jsx)(Ge, {
                  header: (0, e.jsx)(I.Ch, {
                    title: (0, e.jsx)("a", {
                      href: (0, Le.wJ)(
                        `${G.TS.STORE_BASE_URL}app/${xe.appid}`,
                        we,
                      ),
                      children: xe.name,
                    }),
                    subtitle: se.subtitle,
                  }),
                  descriptor: se,
                }),
              })
            : null;
        }
        function $(K) {
          const { eventname: X } = K,
            we = (0, ke.f1)(),
            [se, xe] = m.useState(5),
            Pe = (0, Fe.I)({
              queryKey: ["EventDetails", X],
              queryFn: async () =>
                (
                  await Ze().get(
                    G.TS.STORE_BASE_URL +
                      "points/ajaxgeteventdetails?event_name=" +
                      X,
                  )
                ).data,
              staleTime: 1 / 0,
            }),
            Ue = (0, S.q3)(() =>
              a.DZ.Get().GetPageDescriptor({
                type: "event",
                eventname: X,
                rgIncludedAppIDs: Pe.data?.details?.included_apps,
                rgPriorityAppIDs: Pe.data?.details?.priority_apps,
                cAppClusters: se,
              }),
            ),
            yt = Pe.data?.details?.radial_color_override,
            Ct = Pe.data?.details?.radial_edge_color_override,
            nt = Pe.data?.details?.rtime_event_end,
            Qe = (0, T.n9)();
          if (
            ((0, m.useEffect)(() => {
              const Oe = document.documentElement.style.getPropertyValue(
                "--standard-root-background",
              );
              return (
                (yt || Ct) &&
                  document.documentElement.style.setProperty(
                    "--standard-root-background",
                    `radial-gradient(63.94% 1024px at 50% 200px, ${yt || "#244372"} 0%, ${Ct || "#161A1F"} 100%)`,
                  ),
                () =>
                  document.documentElement.style.setProperty(
                    "--standard-root-background",
                    Oe,
                  )
              );
            }, [yt, Ct]),
            !Pe.data)
          )
            return null;
          if (!Ue || !Pe.isSuccess || Pe.data.success != We.R)
            return console.error(`Failed to get event page for ${X}`), null;
          const be = Pe.data?.details?.included_apps?.concat(
              Pe.data?.details?.priority_apps,
            ),
            b = (0, e.jsx)("span", {
              className: _.DescriptorDrivenEventPageTitle,
              children: Pe.data?.details?.title ?? X,
            });
          let Bt = (0, e.jsx)(I.Ch, {
            title: b,
            subtitle: we > nt ? (0, j.we)("#PointShop_Event_Over") : void 0,
          });
          return (
            Pe.data?.details?.strPageHeader &&
              (Bt = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("img", {
                    className: _.EventPageHeaderImg,
                    src: Pe.data.details.strPageHeader,
                  }),
                  we > nt &&
                    (0, e.jsx)("div", {
                      className: _.PageSubtitle,
                      children: (0, j.we)("#PointShop_Event_Over"),
                    }),
                ],
              })),
            (0, e.jsxs)(I.jy, {
              background: Pe.data?.details?.strPageBackground,
              children: [
                (0, e.jsx)(Ge, {
                  header: (0, e.jsx)("a", {
                    href: (0, Le.wJ)(
                      G.TS.STORE_BASE_URL + Pe.data?.details?.url,
                      Qe,
                    ),
                    children: Bt,
                  }),
                  descriptor: Ue,
                }),
                (0, e.jsx)(B.J, {
                  trigger: "repeated",
                  onVisibilityChange: (Oe) =>
                    Oe && se < be.length && xe(se + 10),
                  rootMargin: "0px 0px 100px 0px",
                }),
              ],
            })
          );
        }
        class ie extends m.Component {
          render() {
            return a.DZ.Get().BIsLoggedIn()
              ? this.props.children
              : (0, e.jsxs)(I.jy, {
                  children: [
                    (0, e.jsx)(Ge, { descriptor: this.props.descriptor }),
                    (0, e.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      },
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, j.we)("#RequiresLogin_Desc"),
                        }),
                        (0, e.jsx)("div", {
                          style: { paddingTop: "10px" },
                          children: (0, e.jsx)("span", {
                            className: (0, v.A)(
                              "btn_green_white_innerfade",
                              " btn_medium",
                            ),
                            onClick: () => a.DZ.Get().ShowLoginDialog(),
                            children: (0, e.jsx)("span", {
                              children: (0, j.we)("#RequiresLogin_Button"),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                });
          }
        }
        let pe = class extends m.Component {
          state = { cVisible: 5 };
          componentDidMount() {}
          componentWillUnmount() {}
          render() {
            const { cVisible: K } = this.state,
              X = a.DZ.Get().GetAppIDFilters();
            let we = a.DZ.Get().GetSortedMyGamesWithRewards();
            const se = a.DZ.Get().GetCurrentSearchTerm(),
              xe = {
                searchLanguage: se.length ? G.TS.LANGUAGE : void 0,
                searchTerm: se.length ? se : void 0,
              };
            X.size != 0 && (we = we.filter((Ue) => X.has(Ue)));
            const Pe = {
              title: (0, j.we)("#ShopPageTitle_ByGame"),
              subtitle: (0, j.we)("#ShopPageTitle_ByGame_Subtitle"),
              searchPlaceholder: (0, j.we)("#SearchPlaceholder_ByGame"),
              items: we
                .slice(0, K)
                .map((Ue) => ({
                  type: "clusterview",
                  view: {
                    type: a.Tb,
                    linkedPage: { type: "app", appid: Ue },
                    cluster: new a._O(Ue, "", xe),
                  },
                })),
              params: { type: "custom", pageid: "bygame" },
            };
            return (0, e.jsx)(ie, {
              descriptor: Pe,
              children: (0, e.jsxs)(I.jy, {
                children: [
                  (0, e.jsx)(Ge, { descriptor: Pe }),
                  (0, e.jsx)(B.J, {
                    trigger: "repeated",
                    onVisibilityChange: (Ue) =>
                      Ue &&
                      K < we.length &&
                      this.setState({ cVisible: K + 10 }),
                    rootMargin: "0px 0px 100px 0px",
                  }),
                ],
              }),
            });
          }
        };
        pe = C([u.PA], pe);
        let Te = class extends m.Component {
          state = { cVisible: 5 };
          render() {
            const { cVisible: K } = this.state,
              X = a.DZ.Get().GetSortedEventAppsWithRewards(),
              we = {
                title: (0, j.we)("#ShopPageTitle_ByEvent"),
                subtitle: (0, j.we)("#ShopPageTitle_ByEvent_Subtitle"),
                searchPlaceholder: (0, j.we)("#SearchPlaceholder_ByGame"),
                items: X.slice(0, K).map((se) => ({
                  type: "clusterview",
                  view: {
                    type: a.Tb,
                    linkedPage: { type: "app", appid: se },
                    cluster: new a._O(se, ""),
                  },
                })),
                params: { type: "custom", pageid: "byevent" },
              };
            return (0, e.jsx)(ie, {
              descriptor: we,
              children: (0, e.jsxs)(I.jy, {
                children: [
                  (0, e.jsx)(Ge, { descriptor: we }),
                  (0, e.jsx)(B.J, {
                    trigger: "repeated",
                    onVisibilityChange: (se) =>
                      se && K < X.length && this.setState({ cVisible: K + 10 }),
                    rootMargin: "0px 0px 100px 0px",
                  }),
                ],
              }),
            });
          }
        };
        Te = C([u.PA], Te);
      },
      47283: (W, E, s) => {
        "use strict";
        s.d(E, { Q: () => n, f: () => le });
        var e = s(7850),
          m = s(75844),
          u = s(18210),
          S = s(30992),
          L = s(95509),
          h = s(44301),
          F = s.n(h),
          _ = s(54722),
          a = s(36707),
          w = s(36636),
          c = s(96986),
          f = s(37939),
          j = s(3166),
          x = s(78175),
          M = s(23903);
        const n = (R, I) =>
            `${j.TS.MEDIA_CDN_COMMUNITY_URL}/images/items/${R}/${I}`,
          le = (0, m.PA)(() => {
            const R = f.DZ.Get().GetSeasonalBadgeDefinition(),
              I = f.DZ.Get().GetUserSeasonalBadgeLevel(),
              B = R
                ? R.community_item_data.badge_data.map(
                    ({ level: v, image: P }) => ({
                      level: v,
                      imgSrc: n(R.appid, P),
                      owned: I >= v,
                      cost: f.DZ.Get().GetCostToLevelSeasonalBadge(v),
                    }),
                  )
                : [];
            return (0, e.jsx)(w.jy, {
              children: (0, e.jsxs)(M.az, {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: [
                  (0, e.jsx)(w.Ch, {
                    title: (0, u.we)("#SeasonalBadge_Title"),
                    subtitle: (0, u.we)("#SeasonalBadge_Description"),
                  }),
                  (0, e.jsx)(S.Gq, {
                    children: (0, e.jsx)(Ne, {
                      children: B.map((v) =>
                        (0, e.jsx)(
                          De,
                          { ...v, onClick: (P) => (0, x.U$)(P, R, v.level) },
                          v.level,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            });
          }),
          Ne = ({ children: R }) =>
            (0, e.jsx)(M.cV, {
              className: h.BadgeGrid,
              verticalSpacing: "large",
              "flow-children": "grid",
              children: R,
            }),
          De = (R) => {
            const {
              level: I,
              owned: B,
              cost: v,
              imgSrc: P,
              className: O,
              ...U
            } = R;
            return (0, e.jsxs)(L.B9, {
              className: (0, a.A)(h.Badge, O),
              ...U,
              children: [
                (0, e.jsx)(L.Bb, {
                  children: (0, e.jsx)("img", {
                    src: P,
                    title: (0, u.we)("#BadgeLevel", I),
                    className: h.BadgeImage,
                  }),
                }),
                (0, e.jsxs)(L.eM, {
                  className: h.Footer,
                  children: [
                    (0, e.jsx)(ee, { owned: B, level: I }),
                    (0, e.jsx)("div", {
                      className: h.Hint,
                      children: B
                        ? (0, e.jsx)(Se, {})
                        : (0, e.jsx)(ue, { cost: v }),
                    }),
                  ],
                }),
              ],
            });
          },
          Se = () => (0, e.jsx)(c.wK, { className: h.OwnedSticker }),
          ue = ({ cost: R }) => (0, e.jsx)(_.Y, { amount: R, size: 0.75 }),
          ee = (R) => {
            const { level: I, owned: B } = R;
            return (0, e.jsx)("div", {
              className: (0, a.A)(h.LevelMarker, B && h.Owned),
              children: (0, e.jsx)("div", { className: h.Inner, children: I }),
            });
          };
      },
      43047: (W) => {
        W.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      37999: (W) => {
        W.exports = {
          Loading: "_24C5lxFpKz_kHyuT-8GJKK",
          LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
          Small: "_2FPxEVbkMdVDAw1TLfl_B5",
          Medium: "_2FfWbZHeiT3_nRXH-pI7av",
          Large: "_30IMocjbXd0leP4E5U2Yrx",
        };
      },
      19939: (W) => {
        W.exports = {
          DefaultTheme: "tedMfud89T5ZrUuQ8lAqa",
          CosmicTheme: "_17vHyc7XLi7gzu2oXAzl5a",
          SummerTheme: "_2skFv_DvfYIlpykYdWu7xV",
          MidnightTheme: "M8Pf4xHIhZLaD7sf8J3vu",
          DarkModeTheme: "_2p-_xCU5_sEJ9phLJw-z_3",
          SteelTheme: "xdD8LlOZDqnQ4lJDHdXGW",
          PinkTealTheme: "_3M7clERndkEKPNIhBohVMW",
          MutedRedTheme: "_3lp4RPxbavagP3nVyYOqZR",
          SteamGreenTheme: "_335yQcbM4tv-C34Oxp247l",
          BlueRedTheme: "_2wH82wp5kaa9YD2ljk9RES",
          GoldBurgundyTheme: "YGKfXNHlIS_8t5PbZ990c",
          VibrantBlueTheme: "_3DOwBWizAt9lgmPWTYUHGM",
          GoldenProfileDebutTheme: "_3BHT2anoumk7shbvRYLwFK",
          WinterProfile2020Theme: "_3jPiA59YTBrjF0Yke8xtNc",
          GoldenWeekProfile2021Theme: "_24NEVre-U6vI5Uy2EbOWXo",
          Summer2021Theme: "_2bB_m6htDqAvdWtyyUGztf",
          MutedBlueTheme: "_3-7Wke7qwH61HrZRnXuxmv",
          GoldTheme: "l3sX-a8OUjKBofHsEf91k",
          BurntOrangeTheme: "_37pNJIGOi3wXudkvWXoSml",
          FlatGreyTheme: "_2AFCapxkkQ1VOQHq5zlYQC",
          PurpleTheme: "KM8jQtPy2nL-Nk9L8yGP",
          GreenSlimeTheme: "FdC8cnFr-QlxSBx3MwbCE",
          GhostTheme: "_1JZpez3LJOrJQwH9KGB0RI",
          ColorNightmareTheme: "_2LNsd64hsGzgmRbQ8WSHSh",
          MurugiahTheme: "_22BXC8Rv2JkvXu3mmagICl",
          Winter2021Theme: "X0_g81BFvECaAe-ByasOs",
          Lunar2022Theme: "_1NSMHkt3eWfSDC6LEzKeJn",
          SteamDeckTheme: "_2aDQKbd2fBPJ0D_2CiGhRT",
        };
      },
      56425: (W) => {
        W.exports = { UnstyledButton: "_1hcJa9ylImmFKuHsfilos" };
      },
      52821: (W) => {
        W.exports = {
          confettiDurationMs: "7000s/s",
          goldfettiDurationMs: "7000s/s",
          goldfettiColorsNum: "3",
          goldfettiEmojiNum: "4",
          crackerDurationMs: "300s/s",
          balloonsDurationMs: "4000s/s",
          balloonsDurationS: "4s/s",
          balloonsDurationJitterS: "1s/s",
          balloonsDurationMaxMs: "5000s/s",
          snowballDurationMs: "3010s/s",
          snowballSpeed: "1s",
          "animation-container": "_3ZR8Qn150VYnSyo91AqpCS",
          Snowflake: "cZ5AuS6NooHgaUPmNEVQ_",
          "Snowflake-0": "_2-hBhoIz4c8uU-wQj0Yv0l",
          "snowflake-0": "U-YAVCr6mJr09DCWiLUlC",
          "Snowflake-1": "_2b67lo9H4PXYV-OwznGvIw",
          "snowflake-1": "_2Rb7wrtz0Xndyl8WfU2GsJ",
          "Snowflake-2": "_2_NWsZR23LrbbOQ72V4Beq",
          "snowflake-2": "_1Y4tSRCnGSyEaykL7YRf5h",
          "Snowflake-3": "cBxtQLsPVZiAxpmSZaMp-",
          "snowflake-3": "_3t5LtMJUlzi5VgPykQj4AG",
          "Snowflake-4": "_1JQNlip92NQQhLNMMMGTXw",
          "snowflake-4": "_1vyLwhlbK7ottelA1G8z9d",
          "Snowflake-5": "cUP1fD_CKiuoYkRUqlYbW",
          "snowflake-5": "_3louc7DLTPcqeHeG2Bv7WR",
          "Snowflake-6": "_2F8csrxW_4bSwopcxhfZt",
          "snowflake-6": "_3Hfej8u0l0I0PkSncj5jKu",
          "Snowflake-7": "zJ9BES15BKBmi9WXfG-UK",
          "snowflake-7": "nX1rZipS2D4d-XlqroRID",
          "Snowflake-8": "_3BAdGsio03SUAWtM7n3bwJ",
          "snowflake-8": "WFJbacKGE3a4P00FfVQul",
          "Snowflake-9": "_2DNE810yILxBMzGeS14g-X",
          "snowflake-9": "_1m6q0PtEUkk3rnfuTdGpdD",
          "Snowflake-10": "_19m8qDDFBCWb2fH8ormKz",
          "snowflake-10": "_3HhrWKZVbtmCcs4lgZslj9",
          "Snowflake-11": "ijWSFnIVbGPadEt4V_5z6",
          "snowflake-11": "vukhoEm56auSIvW0Xvo3",
          "Snowflake-12": "Ripsa1mbq623wAxOpIXrr",
          "snowflake-12": "_2KXNxf7O5SI9nGqCmFTVbG",
          "Snowflake-13": "_5IUEFUhJPRVwQ4lEfSwn",
          "snowflake-13": "_35I49E7OQ5GAAXnhk58tqf",
          "Snowflake-14": "pmIdkmP2PVFghBqouIIO4",
          "snowflake-14": "_1MH-Jd1zpopNZytjemH9T5",
          "Snowflake-15": "_2nQdHO6CzL7Oq_X8wxDY7Q",
          "snowflake-15": "ek7kuvJMCUjKE_BtxUX_Q",
          "Snowflake-16": "lJyG7T7cwfQ7rtepcwxh2",
          "snowflake-16": "_20hURLUL160GwrXIiOV1JM",
          "Snowflake-17": "_1L0AZbHz-YNlgpO4IsleMC",
          "snowflake-17": "_3CfBVNB3tboEg2kvjEpOtA",
          "Snowflake-18": "_1ozacoLCpDDFtrQIQgUJQ_",
          "snowflake-18": "HP-yemP3F8h1dFTd537a0",
          "Snowflake-19": "FOXzciZ90M-T536dC84Uc",
          "snowflake-19": "_1d9D94TdO7x-mwxxBlxetM",
          "Snowflake-20": "Qt7pRB2Kn3IgKCsapNa2h",
          "snowflake-20": "_2N-xefmDv-QJGZs0mhmVkm",
          confetti: "VelNhaLZOAOOyGxvP40Fw",
          "confetti-0": "tlO-i7lTxCAGWRDQ-xG-m",
          "drop-0": "_37zJH6CY27DYGzORYdNo",
          "confetti-1": "_3OuSsouHcd4cf1Rd47aBPr",
          "drop-1": "x-HP7RRJ0lk40rlOm5lmV",
          "confetti-2": "_1mdZ0D0nRLpVqkqSo1Ktzq",
          "drop-2": "_3XfWb4c7yqSZuUf-YuBEc0",
          "confetti-3": "_36OCsW2VxboNiv5UjrgiqJ",
          "drop-3": "OTZKZdW-Q7ygo9oaLpaRV",
          "confetti-4": "_3NbOc6hj555NOxe0lnwgjX",
          "drop-4": "_1CAilKAoEIm4-eqNfleqz-",
          "confetti-5": "VnTYGfcOOOGYu6A1GEZz0",
          "drop-5": "_1pPPCdqf6Rp-Gr4LG1V4ED",
          "confetti-6": "_3KEfmPqzhkUmJQzmj9WcSf",
          "drop-6": "_4Wj8sWB___zcXy0qOAslm",
          "confetti-7": "_1C-Ak5Pp3LK6Vz3SdGHjuW",
          "drop-7": "oHsjUhiVuwdUzxHyDN_fp",
          "confetti-8": "_4oJYNHmll2Tgb_hYzQmRb",
          "drop-8": "_2y189x21PROJ0Z3E_WIAkw",
          "confetti-9": "_1bEjRiv7ANmX2dGCoECahG",
          "drop-9": "_5c9w02ptE-W3UJgBWqX_A",
          "confetti-10": "_1oRBMJOVfG0GRNvm5Rkf64",
          "drop-10": "_1L13_RBdO_0TnG18rm1jEG",
          "confetti-11": "_3W9ZL5uDEiRq0FRL8iFir6",
          "drop-11": "vYvGBxfMAxUXBWANXI0bu",
          "confetti-12": "_2TwZ0rp_lIim2aJ_4Y2qeq",
          "drop-12": "_3b2Dc7Z8xvdrLra2f0tHkB",
          "confetti-13": "_1m8VrJL_l6ZEk8xdG1zp1J",
          "drop-13": "_2n4ZPrLHy-qSosbysJOMyw",
          "confetti-14": "_1YV6pHYnTFDgc277paTdcD",
          "drop-14": "xQzPbu1Ymhc1ljzKUjLB",
          "confetti-15": "_2D2LHpcCgCgazpSCdxcmgL",
          "drop-15": "oKVqMrEGLc41RPHK0jh6k",
          "confetti-16": "pvt2Jn2d-yk_hphYzXKE0",
          "drop-16": "T5UBdSDtDKKnU8slGbvgU",
          "confetti-17": "_2NCF0if8If6J4UGT9x9aCb",
          "drop-17": "_1d8DjM5hPirRWZZfTiEsUr",
          "confetti-18": "o_Hf7Zm6UTEylPTKbPGaz",
          "drop-18": "_1zoqmUsXWQGd4bgEueC57-",
          "confetti-19": "_28L_3OZHBZ-x-mIeAy91mV",
          "drop-19": "_1zkpzqZe9OdT6cU0MbDFz9",
          "confetti-20": "P-SKXJlZx9-Bcc1xb7iNi",
          "drop-20": "_2HmVc8c5Iswi_Zc_pfzwcp",
          "confetti-21": "_27GkOScWiMRZLR5ZNBd81H",
          "drop-21": "_1T4MtL9V1url_nsygpJbnc",
          "confetti-22": "_1sCDhg_lGy3WW300NuPSwP",
          "drop-22": "_2svz88Ry8mFha68gGUFiXd",
          "confetti-23": "_9SZ_ASrlrwYDws5hVh9qG",
          "drop-23": "_3vAxIUUQkJJcXGULkTyk68",
          "confetti-24": "_1Am3eWgOT_Wp6visBayZ4v",
          "drop-24": "RhAjbOlh1LSlSlPmkYtKQ",
          "confetti-25": "_1Ja7L7XQRWpZLO2rwp58R3",
          "drop-25": "_201NAYjjtFeM_N3JPVHExR",
          "confetti-26": "_2jMUO2nivzXlQo18wior_J",
          "drop-26": "_29n7qEFYCdeBp6mH2MNvdn",
          "confetti-27": "_2yQQdweZR09s8bM4R_vNZi",
          "drop-27": "_2m3A7draGdm-rsakinamuC",
          "confetti-28": "_1QlxxXrdxULAJAhltqjthz",
          "drop-28": "_18frjjimg_ddVKmcP6lDSd",
          "confetti-29": "_1b2l6QkxNd4Dtiydca58Cg",
          "drop-29": "_2Q2T3TrKFu98Z6zYpVwc0x",
          "confetti-30": "_1JH00PIC8fKL4smsw69ZuD",
          "drop-30": "_35aPE6CL51rzkvsXsmoLZt",
          "confetti-31": "OsdxngZ_SsqHuiHnPrHJc",
          "drop-31": "_3xx2U3dizkknoDeW2WvVIP",
          "confetti-32": "f1SYADw21Z7mgxietUJ2f",
          "drop-32": "_215c3DDihCBcRF2pFYdL1Z",
          "confetti-33": "g65eihTMvsmDF4JuxG1K1",
          "drop-33": "_2oegrE8I4QkA7OGP_2jTSd",
          "confetti-34": "_2yCKI9Z4qH--xfP0TEdWbt",
          "drop-34": "_3K9VAwA4O1OvthhqxOwSVb",
          "confetti-35": "_3JsiRpPdxEJTqkjxHodDOs",
          "drop-35": "_5jMloPl6enmBNNzc9xb3q",
          "confetti-36": "R14L0qTNs9mcCNwm-OnVY",
          "drop-36": "_13yR4zwTywoqM5wpvpCxxb",
          "confetti-37": "_24ZmDBEJTOz8Y8Xz5XWa2e",
          "drop-37": "_2uYeLy21yJ88X-U2pZTMAb",
          "confetti-38": "_25jbUMjYmVVKva8IjjEBMm",
          "drop-38": "_3BJYZWHByFucD4otuE1JPL",
          "confetti-39": "_8zwxiCLo5fJvc159E7s1u",
          "drop-39": "_2zKzQWCK1MNaeKW-mJ2laM",
          "confetti-40": "Du-WgsSUUGi3G591COthe",
          "drop-40": "_3DiQ2WNbrDduLK5U1uM8zX",
          "confetti-41": "_3LjK43p_ixKLLHpmJQRwWc",
          "drop-41": "_10ZGRausWqRjTfLJCuf68A",
          "confetti-42": "_3u0x8e-0HCwk5fEmSflovi",
          "drop-42": "_2GaWPt4RzAwf9f72zomzM-",
          "confetti-43": "_2Iip-F81fZLdNj--4pRcCc",
          "drop-43": "_3zDFZfcRg5lHUR-7XSj69t",
          "confetti-44": "_2qI_Q5Nx6qe3n4prWadVtS",
          "drop-44": "_3G_AJCLesul0vFBXDF8RhW",
          "confetti-45": "_3FUIwys45k0oooWBebfbdG",
          "drop-45": "_1BAsFWZROKIHVB5h6n8gQx",
          "confetti-46": "_2wAK3tUC-GHkY390X3o4IN",
          "drop-46": "_1LOgZvz-nDjlDhDOkutcCZ",
          "confetti-47": "_2dO3Bb-m0gQwfaz7GFZFEZ",
          "drop-47": "l_1GZ4sGiuEPmrzAI0YRF",
          "confetti-48": "_2ud75EBwVDSOx780tPA38u",
          "drop-48": "cnRU6TUIO9vHC5-hYWgMK",
          "confetti-49": "EX-puTNPHrXjykeUXlGjd",
          "drop-49": "_3ElNGH8j6ElB3d7GM8Eql6",
          "confetti-50": "_8qyUxT5d3VPDVQ1IQa0lZ",
          "drop-50": "IlkNslwMvQvVAiBb1NYNh",
          "confetti-51": "AtKXbqrWglFf4qVrq-Vi3",
          "drop-51": "_2msFBW_PFWyycXQGTpdN0G",
          "confetti-52": "_1my5ZyHh6nL7QS0kaaqSlh",
          "drop-52": "_1QnRemFT8kb8CHOULepWcz",
          "confetti-53": "_2Cb1iPR8ckzROEtCzPuPaK",
          "drop-53": "_1CQh7Kt9zbOdK5mvR7YKzE",
          "confetti-54": "_2VhA6SY1kFoCtYyCtlMZsl",
          "drop-54": "_3hZKtCFY9srOU1DudVS2Sf",
          "confetti-55": "yL87gGFqel7l82pzp5t16",
          "drop-55": "_3dM495p4IuZc5iet147BY-",
          "confetti-56": "_1xqggQCQi_hIGWI6JPDeLz",
          "drop-56": "_3SnEpab7Y5mA7BF0DqrCn1",
          "confetti-57": "f9kuGu_2EmZwdbbUfZJ86",
          "drop-57": "_3DCDax-T5toIh118c1oPm-",
          "confetti-58": "_1O4Ku3D0K9kkiQTIvl2wZc",
          "drop-58": "_3d1_1DziLyNHVfIhBgKx3N",
          "confetti-59": "XOFkRAyJnO49anHssev0Q",
          "drop-59": "_1ZKa_9gQNEzN-1YZR1Z_48",
          "confetti-60": "_2iIndrgx6keNJfXYZYoGak",
          "drop-60": "_3stXqbd4vi494eSTSqeO-9",
          "confetti-61": "_4hvgI8xThigKD_7KX0gM3",
          "drop-61": "ENSW2tRgiIckTFJi2qM74",
          "confetti-62": "_1vcmCos8IGZbLQc8xnrAyy",
          "drop-62": "_3gyQer175tAC0WdEDJ7lnt",
          "confetti-63": "_3dgPj9I016Qol3rMFbIeqc",
          "drop-63": "_2047MHBRsV_H4MTg0-mMJl",
          "confetti-64": "Cewk56boGLBEwCqoczeLJ",
          "drop-64": "_2YCRKx8M_OLPM5Z9OMfeAQ",
          "confetti-65": "ciQUmwM3WbPBavU9XuVsB",
          "drop-65": "_3kUQk2oftyvvKpCegAXnta",
          "confetti-66": "_3a3muYt-Q_tUCIHxyqCCgQ",
          "drop-66": "_3DoHwaUPgOOTXQrhzduvQe",
          "confetti-67": "_39YTyKnSD0wfFGLrchEFcd",
          "drop-67": "Qb0h2BUfooBhvnc5dKinc",
          "confetti-68": "_2zcwHVYj5FgPxzWckgATf",
          "drop-68": "zRaTb_Zfy362NP-CnUsms",
          "confetti-69": "_1O9QnUUtpA3uVte4J_CA-4",
          "drop-69": "oogafarJoikPveOP3A-ny",
          "confetti-70": "_3wL25wJSxBYxHK6F4VRW5t",
          "drop-70": "ouiMFAarS6zXPFDUZGvYx",
          "confetti-71": "_2FN6Ie1RpRX7NusHSgF7-I",
          "drop-71": "y2t-jjd3HiH5AcZT71nJo",
          "confetti-72": "_2tgnG2jeVMO7kp4OEsUuzc",
          "drop-72": "_3hLQtOmAy3jIMARoph6wfz",
          "confetti-73": "_-0y9hsggRzJs3ZzgMvJVr",
          "drop-73": "-Wx7WG1c4MpksLFxhnJQw",
          "confetti-74": "_1_vWAAIJsfsXsL7Z6CX8GU",
          "drop-74": "_2L0XL4jEbMofUIg2KesiFJ",
          "confetti-75": "qNiwF6cDrQHbct_N8DEqP",
          "drop-75": "_2iJw_aRrmKFYdId_db2mTf",
          "confetti-76": "_2Isn6IVkMTxlp2zI5XdN-5",
          "drop-76": "_3MdvITrjRkllBqVpR_ZkSl",
          "confetti-77": "_2bgtxiLTXIysBW7e1uq_aM",
          "drop-77": "_2ItPxMQNKstHnNe2wklBF2",
          "confetti-78": "veCdxRUIaRr9vo7pmQcvo",
          "drop-78": "_3D9KTVsTKMEpeMxkfjGmKq",
          "confetti-79": "_5cczssST6gXnTKJ4ANawP",
          "drop-79": "_1x9H7NpmYMkudsk-DSoJ5k",
          "confetti-80": "hz59y2HiwLw6yOa7Ka8ia",
          "drop-80": "_2ZjKFrXKXrebKjDGUtE-eE",
          "confetti-81": "_1rhSJQzBljJr5fL_QbH6zD",
          "drop-81": "tGBBf-eGuEfrihnZFT0Eg",
          "confetti-82": "_1jWl7-Y1-hfEEkMxBeskel",
          "drop-82": "_26FtmcmuEbRkN4q7U_XTs1",
          "confetti-83": "_1Veaf9evpt68XMwRQzVMl9",
          "drop-83": "_2VByPejV4ibh6np2rKBYdu",
          "confetti-84": "_3_bdrZxDcOswaB97bBlnXJ",
          "drop-84": "m6um-um4HMztp9SSWwhSp",
          "confetti-85": "_9ZttwimlvDxU0QtH46F8n",
          "drop-85": "_2xtS5FS3sXa3UO7zgDZR2M",
          "confetti-86": "_2EJMi-KKSFFjUrXAUpryjV",
          "drop-86": "_2dudW4-zwRl3iHF2MWDosD",
          "confetti-87": "uys-96P7vyg4sXZjb_4Wy",
          "drop-87": "_1PZvthxHQHpanBfriMF9Rp",
          "confetti-88": "_24exN6vdE75y0q32DrehuP",
          "drop-88": "_5ZbRzm7lnkciUBhw4gLjU",
          "confetti-89": "_2yKbSSLBzEIKQakepYrUJH",
          "drop-89": "_1s66w_BnwuR7nMcxU9dtho",
          "confetti-90": "_2tEzreMzu-p_TDkswn_ocA",
          "drop-90": "_1dLhaJhfyX37ft23O3asgn",
          "confetti-91": "_3T4UL3AIjlQUAQc9Cu2mxd",
          "drop-91": "P_MRRqnI0gh2091vQ91v9",
          "confetti-92": "_7p5vhhkqU9H6VhL23iczw",
          "drop-92": "_1MwkvdtsRwT39NsJJJp3ox",
          "confetti-93": "_2BaTWmDP6AmgPrMSU4Ijqj",
          "drop-93": "_3NCsFs627FKXtRxYcrBNv4",
          "confetti-94": "_3DVf7q1MUhCXw6iMNhXuEG",
          "drop-94": "fZgnWqMYNRt38ki2xEjHg",
          "confetti-95": "_23jtbNtAojbG5BMtg3Y-6T",
          "drop-95": "_1tw1tu98iRqz7wpeL8UUT3",
          "confetti-96": "_2CxeZNROLvYVDMSS1e_MXv",
          "drop-96": "_37GFJyY4iaNmW0995tlNVq",
          "confetti-97": "qoLltG5iKvZBx-3r13cHP",
          "drop-97": "v1bhdKH2NjTU1WBKAQhPE",
          "confetti-98": "_3Po3_lhbecVRug_5qesUGM",
          "drop-98": "_1TcCu4HZtZ2URETTH04XzK",
          "confetti-99": "_2-vdAwYTeTtWUU0L8MEeQ9",
          "drop-99": "_3lQGolNg2PSHio3nqiI-nb",
          cracker: "k_Aq7-xvlsUdnUYBjgNiw",
          "cracker-left": "IBSjh3HfqqKJiSSRp9T7",
          "cracker-right": "_3M0en7UN2KdV70Pqzkyioa",
          goldfetti: "_2oOnqslirXedCh9rTB92vK",
          "goldfetti-fragment": "oRJxWJCw3zL0bRKdqwf2W",
          "goldfetti-color-1": "_2zN8S1uJdQLdR2odjnSIkg",
          "goldfetti-color-2": "_1fchbwt5mqlR5h3iFK9IWT",
          "goldfetti-color-3": "_2pBYikHQKCzbabT8pWFAMx",
          "goldfetti-emoji-1": "_33y_BtE_CFdPg8jlwDANWQ",
          "goldfetti-emoji-2": "oOIEtZb0GqOYmtIKs9Wmy",
          "goldfetti-emoji-3": "_1oNfHJR6gatp9AdMwXJ4Ap",
          "goldfetti-emoji-4": "YFAWN3I-zQxxpyFWbGvqV",
          balloons: "_2_1pftG09crEciVDl6Q4NL",
          lantern_glow: "v2QAmxhdWFoo8GaAh0DN6",
          snowball_fragment: "VMzCIsUlZL0naBEy_Th_k",
          "snowball-container": "UvZyS8AG6io1crjd0jO1j",
          snowball: "_2buSfAHu46eAUEyl-S5-NI",
          SnowballImage: "_2_42ec8Z-funquwbPlERfl",
          SnowballImageCW: "_1Tf0O5ri-ZsB1YtQ7JyLGw",
          "snowball-rotate-cw": "_1x1_6DFRZg6l4P-oLLzOAp",
          SnowballImageCCW: "_3NMkRL1S5S0stZKcyRDCjt",
          "snowball-rotate-ccw": "_2U4NCJNkvSwfE5COBvswtB",
          "snowball-path": "_3gxEb3m8uSPiJkw41erdIF",
          "snowball-residue": "_1aw_2D5AgUvMH-QMlLwM9O",
          "snowball-chunk": "_379oUOp8gQtEi0VeGoXUpN",
          "snowball-chunk-1": "_7DFP92S3X6hgw6730Tj4W",
          "snowball-chunk-2": "_2TZ3iCqjwiF7eLEkkNacFU",
          "snowball-chunk-3": "_2dgXy9ZT-OR-00qi27wwd2",
          "snowball-chunk-4": "_9zq4Tw1ZiesL6qqymFHph",
          "slide-out-tl": "_2vxArI5qQB4vjsOebwySXY",
          "slide-out-tr": "_1UxlHbis35NEq9ii3_E_Xa",
          "slide-out-bottom": "_2bNZVfG34xJpsMsTo4U_sd",
          pyro: "_1uf8lvihAI5zfrWuorhqp-",
          before: "_35CE-COtNTcm7_9prNNKQo",
          after: "_1tbcrA4huyjmkLDv44ruge",
          bang: "_3GL2kqI5HwPu_68qw1PDt0",
          gravity: "S4aDcZW3Nsl-0vv3IeYb4",
          position: "_15NGbuk9ct53nD2uNUQuD7",
          pyroBodyShake: "_3E298bA-NGMn6KHhkFhHUY",
          "pyro-body-shake": "_38sc5JaUSy1q5i-Ruw0NHd",
          pyroBodyShake2: "_1Ti3zxhrglUQ_lXxmqw4c_",
          "pyro-body-shake2": "_3qwwMXNnr3E8GhSL9ceVCU",
          FireworkPath: "_1Bk7_BSUm4WYlvxpQ2thFt",
          "firework-path-animation": "Mm8cl33KE-4GBUZF08ad7",
          FireworkContainer: "_1aN3bBK6cNkSzrktbxJR_Y",
          FireworkPNG: "EHDSM1NjXUdh_UOEUyeKj",
          balloon_small_1: "h2Q7G_IsWBCUr-bXsRWyp",
          balloon_move_right: "_8PLpZMfX_iHZ02wJxhB88",
          balloon_move_left: "tgIbten_iPKbeN-JFxKUh",
          balloon_big_1: "_1TGq_PSAek-lVCEbgAqNIG",
          balloon_big_2: "_1dSX8loTe4tHvt5dGyyFdV",
          balloon_small_2: "_2SLtSZoCd84tKFQ2eMx-aa",
          balloon_small_3: "_3-4lClYnL7iQYWrJOTeFvv",
          "snowball-path-1": "_2XM4va3BGDflPdWEQsP_uL",
          "snowball-path-2": "_1rYsbOP4qI2C3XYJzMP1h9",
          "snowball-path-3": "_3EhG3nmnM7WN1D90KCwAK6",
          "snowball-path-4": "oIEK7w5G8mHHycg6HZf_W",
          "snowball-path-5": "_1nGpuGHJIFLtzszs0FbfyF",
          "snowball-path-6": "_2bquCrG8sgM-1ldoTfpmgX",
          fireworkBigX: "_3EASzoqksn5N5DnxiqAlPx",
          fireworkBigY: "_3HtJyUCdffXnLkzSkJ0TLP",
          fireworkSmallX: "xZrmemWmiZ-_Hlhqv_q_K",
          fireworkSmallY: "Vy4av1FSwpKIY6emwSqWM",
          fireworkLongX: "_1h91poDOjMi1ibeZ5pf_7n",
          fireworkLongY: "_3f3gs8W7Wo3bOfv4KzKwry",
        };
      },
      81435: (W) => {
        W.exports = {
          Banner: "ECzA2sEOvQNqHt73IbQsh",
          Image: "_28bFlSBcqQth9qfau92nvO",
          Content: "_3weUA-zUrNdJrhoWRTjSWB",
          Title: "xHxqv61GYPgRpSm9wK6qM",
          Subtitle: "YZMtYm205_15opBIxEm_H",
          Link: "_185F6stHate5KIZ1cfBI8T",
        };
      },
      4381: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_1axcMtI8AS5qyJtuEnlgVO",
          ShellHeaderFlex: "r0SidOgHx_GpPvZhV3oRG",
          RewardsPointsCount: "YYMbHfzBxwkJLY2ThEnZy",
          ShellHeaderBrandName: "_3f3HdDfdqTMhXNm0SLEMe4",
          Shell: "_2Z10hTe0c_pSB1dYTGh6Gj",
          ShellScrollParent: "_2jHWHZSCVN5I-kvjJMGCIH",
          SvgOverrideColor: "_1Ej_H-izS8STL-ECIU6wzF",
          ItemHoverZIndex: "_1kpJgqu9epNkjKID3AqXmX",
          ActionButton: "IcoSkI6oScO5bjf-e8NKQ",
          Icon: "qgoN9p45-d4RFhRS0wY9d",
          CheckmarkCircle: "_3SNm6LJrZA4O0KSRIdypP3",
          AlreadyOwned: "_1FA0VCocnQE0-RI5-QPKoF",
          ItemHand: "_2zFSrhSNpGhdb6qJ1B9v6B",
          ItemCard: "_1zIyrqWy3i510X6FfUJObB",
          OwnedItem: "_3PdrtnT-SPEysyPdsxFTlr",
          ItemCardImage: "_1nKg-OMLGtekareJTgpnVf",
          BundleContainer: "_2p-sr64TRMhny7CqiT1yS6",
          AppIcon: "_3zitwBwWvOTrKN_b03OGTK",
          BundleFooter: "zpf5CKyDLVd_Y7gpM2TcR",
          BundleName: "_2PEeMkB64SwxcEorhFOsf2",
          BundleDiscount: "wenYAzW_zDGzPFKYz4Ij9",
        };
      },
      33198: (W) => {
        W.exports = {
          GreenButton: "SRxqV4jytIuP55fxgfpD1",
          BlueButton: "_2Sjv2EMAwLKCNHeVMLqs2t",
          GrayButton: "_3Ju8vy_foEPg9ILmy2-htb",
        };
      },
      30869: (W) => {
        W.exports = {
          ItemHover: "_1hyVDUTu00_a_5XtwVOdU2",
          MobileHeroAction: "nHPO7u91fReuerG-rVvGp",
        };
      },
      64812: (W) => {
        W.exports = {
          Icon: "_1rXAQk_VLriluKhRRMwUEN",
          flash: "_3f3LgfsDRRG1LTU0ibZPFq",
          HiddenInput: "_3XSRLIfVyB_WfmeAHy2MyT",
        };
      },
      65146: (W) => {
        W.exports = { Discount: "_2dE0fIixo74TkEyDUMSwby" };
      },
      97041: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_2COASJIa2LKJBLulgp9vp9",
          ShellHeaderFlex: "_3bKks23jvLCjgcG6RCntvo",
          RewardsPointsCount: "_127j9usN_MV5nNXj-x9WiQ",
          ShellHeaderBrandName: "_1O_ww6LlGy5b6c81mVf4eO",
          Shell: "aVov95ofav6GEjmqHvGLv",
          ShellScrollParent: "_20ZyN6yrC25dIXvq_eU6xI",
          SvgOverrideColor: "_1c6vEVMR5JNnAD5fYgxWBL",
          ItemHoverZIndex: "_32_DHdCdHM_EA837HfSlEV",
          ActionButton: "_3tpEmJnP6oFsf9wjaDId_f",
          Icon: "_2Qc7hjvvg8wWQfNdDUOe_-",
          BackgroundFade: "_2MFEYjLdT-bfsz3n1hkGnf",
          BackgroundFadeImage: "_3YNnWUgHCZcVvmfX9qpOQ",
          BackgroundFadeImageBlurred: "_1TX8MTfNTg-C5c8w44F6aZ",
          BackgroundFadeTheme: "_2hAzwOWXPLxiZZAeFvZNWC",
          BackgroundFadeThemeBlurred: "n9hHYQ7UzwxxSc-W4ay2l",
        };
      },
      63888: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_1Ke_2MpDDUm9GWFwf-joXf",
          ShellHeaderFlex: "_24yvKF4IKaWBHM4SCZcNwd",
          RewardsPointsCount: "_23uvl57JoLcAV0rfGGLxkT",
          ShellHeaderBrandName: "_2w1GISS5RmliBowCpjM7d",
          Shell: "_1DBDcgNH2L-3TzUoK8DNc_",
          ShellScrollParent: "S-9dlryW5YPQXPYVGjbK0",
          SvgOverrideColor: "_3_3SlzLqo0jyLIqAggBG__",
          ItemHoverZIndex: "_3cRJ-aAGAsdmxZSijdUsCF",
          ActionButton: "_2SB-61nNPBj-a76Pz-p8nW",
          Icon: "_25aGTFYMHvZUPVShWtE94w",
          Container: "go6jLpmJlgzmvSwdeqLFv",
          TitleContainer: "_11iS8oUB4IrfVg7UEBjWEX",
          Title: "y7h7uY1EfA5wfjcywdtWU",
          Description: "_20hSz29Uoq1of7cRa2XKEr",
          TitleSkeleton: "_3yIAMsf2PHWGCe9Ud6qpPh",
        };
      },
      89955: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_1B30PmQiH9-AgO2RRb7ucK",
          ShellHeaderFlex: "_1_NDbBMn8SdEKsMR5mmNE_",
          RewardsPointsCount: "_3zRBb2YNN0UgOv5-WXtOAg",
          ShellHeaderBrandName: "_22xBc1p4ti6pdtPZdZffMq",
          Shell: "_3t2kC_UejF1zKSwH4DnOLo",
          ShellScrollParent: "_2Wz7wtTv1rPfz79sa-nBJq",
          SvgOverrideColor: "GPmfcLimFbXcTeQRcLfQP",
          ItemHoverZIndex: "_1W5w_rV0yz_j9838Tv8N1f",
          ActionButton: "_1CFwhrZS7slXJ6rtssRmKM",
          Icon: "_1FPqUmO4oHXxBzwOXgS42e",
          ItemBox: "_2EUBPpuLIR8PTTb_d40Gv9",
          Body: "_1mnC40Cowmo0o75_JM07jO",
          Footer: "beNH0vEoCPTCIbODMRb2A",
          NoBackdropSupportBackdrop: "_2Tay_NXhab44RW0UsKTk3P",
        };
      },
      4399: (W) => {
        W.exports = {
          InlineContainer: "_3nHerBg5ELmarLbN--Gmpp",
          RemoveOnEmpty: "_1Y8hK5A-ASv-Y5SGGb5Em5",
        };
      },
      89266: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_3JsJ9h2iMZYToSqbZdQ3Pz",
          ShellHeaderFlex: "_35y-E6qmgD4SqPk4b3i-Za",
          RewardsPointsCount: "_3O3RBIFdM3Uh0zVOdS4UEa",
          ShellHeaderBrandName: "iSMJpfWIyx2lk2t8DlXnr",
          Shell: "_1Vw70kaS6zlBf9eBUwgcuG",
          ShellScrollParent: "_3V1twQM3UkSuCDEq2hz6Qb",
          SvgOverrideColor: "_3cW4OiJKDLtlOm-ne6Zu93",
          ItemHoverZIndex: "_1Ae285HV_51PXhuLp0638d",
          ActionButton: "lz5Rm_m_iCV-yU26OK3uu",
          Icon: "KGxYEDdGupsk1y7BpcyWx",
          Container: "_3OgqCQJqe6pWH7tFo-VlHP",
          Amount: "BqFe2n5bs-NKOIO-N-o-P",
        };
      },
      83950: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_2VMecB5khhOudhwMAjuU8W",
          ShellHeaderFlex: "_3bUT9Izxar-wbcRwThieaW",
          RewardsPointsCount: "_1jPXBraslE2zYlFqNNrpgL",
          ShellHeaderBrandName: "_3KB6U7cdarhiXPM_sPvcH0",
          Shell: "_2xt7oKJKW-mEmDsyFWC5_v",
          ShellScrollParent: "_2PfVsc07-5aT9ib58geOue",
          SvgOverrideColor: "_19bvxTGTZyrufQrDmg4YlL",
          ItemHoverZIndex: "yK2Mj-BFGKPzt-Mggy87I",
          ActionButton: "_9ZGFyttsdCu3WeartPOzU",
          Icon: "_2x3yxvo2hC18aFNMn57Zlo",
          PrimaryNav: "_1B_k-wp3lqSLARvY8-5-EX",
          Line: "_3pwI9xYhcBqpCUT5Inhag4",
          NavItem: "BVtL0_ttO-7ESEyO67g3w",
          Selected: "_2h5NuRREggh8jjqbJUONEp",
          SecondaryNavItem: "_2mFH5j7jjyfKD6D14nhTB5",
          Label: "_2CstpDQdKu0LihYIhSlbsq",
          Callout: "YOdxteYdRNnriuWKb2xH5",
          ScrollableTabs: "pLIhF-mXFUwUKWoXhU44H",
          ScrollableTabItem: "_3jxyN-ONOSE1WwcNgvfxjY",
          Focused: "tLuQZ_E7xObnKtviYPVxt",
          NavItemPadding: "_170hjEwvBFSJiDh_A-J-_d",
          SearchSection: "_7USMmQFB_UFVJvabg_dwY",
          SearchTermContainer: "nNfIqrE3gYu9tzwyGZ4sR",
          AppFilterLabel: "_1T8oZmWb_sU-pVfsBvdAbh",
          SearchTerm: "_3Z1tDAQlBBsKIeUtUQxCFS",
          SearchIconContainer: "_12qnBXX0LTbS-mGMhv2IBi",
          SearchIcon: "_5Ffhq-Vro0Kf1AH5TeXVA",
          SearchTermClearButton: "_2Apt1SUd2GbxofU8HXUGan",
          SearchTermClearIcon: "_1-93xdxU8yzZHGQ1iLexXK",
          PointsContainer: "_3F5iu5eLMKJWPO589tdk9p",
          RewardsPointsIcon: "_1Sm-XRJI4bnKl_Lp4l8aV1",
          YourBalanceLabel: "_2ZMLACWCW1yy3-vWDavbX",
        };
      },
      1086: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_2zzZmoCqrkdnqY8X7SNX1",
          ShellHeaderFlex: "_3rPufCSpulZhDMp_BrTJAD",
          RewardsPointsCount: "_2DgvLWXT3qNVaNcQKBDDch",
          ShellHeaderBrandName: "_16asncIOysS_LXVBJy0w0y",
          Shell: "_2xIVisWCzrZowqmEUUfvbg",
          ShellScrollParent: "ek93B8_YbmAmks5nDovZk",
          SvgOverrideColor: "_16JKq8xkHVFT1Mk1dBnL5s",
          ItemHoverZIndex: "_3QRVAPnFnkzKYO1XWjt_9K",
          ActionButton: "_3mPNsSRYgffva8g9LgvIuG",
          Icon: "_26NJNYii0wm_OGFe1ygGaY",
          StandardBackground: "_150UmBWkyuf6OfOjeKA-tC",
          HomeBackground: "_1zw0IYqnKh-6iLonZf9P-G",
          rotateIdle: "_1Ybb2nd69vfT95qOVkX78A",
          StandardRoot: "_3uAuM7D5wUQg-5M21NGJc5",
          PageItem: "_2CTonoSYdvy-_HnTlaLzzy",
          ItemContainer: "_1Zwjfp7uC-ucOlcO5hWzSq",
          ParallaxRoot: "wy_GUo_KpX4WBNzed2u3m",
          ParallaxBackground: "_1vgF7y8x0h-yXyDW_zLgnG",
          ParallaxAppBackground: "_1mjHiftYmWrP2sQuDYEU2s",
          CustomAppBackground: "_2rtmsiWlYAPEt2wmUZBlkJ",
          StandardLayout: "_3RDAb3BHcPamYwkrsBsOiL",
          PageHeaderImage: "_1mTFVE0IjP7KAfmDpbz9XV",
          PageTitle: "_2g7YPY3A5uZVqbtFiYwK7J",
          PageSubtitle: "_1j9rPjdq4_IWNkY49opKvj",
          PagePointShopTitle: "SdoN2zN2sE_mZXWRcgWCp",
        };
      },
      15962: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_3Bsg9oslbtjjgZMJmCyojG",
          ShellHeaderFlex: "_1fd-frf_m69gjh4B84DBML",
          RewardsPointsCount: "_33f1lOOjcCr9Nm5zBhSKUA",
          ShellHeaderBrandName: "_2YwwT-cAEShx6Aib5QrN4l",
          Shell: "_2hbLIR_cRtWlFWxJY3qsCo",
          ShellScrollParent: "_2Vguk6DMjI4elIyCE3fJk9",
          SvgOverrideColor: "_1aaW9aBwiNNKUP_ba8peDl",
          ItemHoverZIndex: "_13s3UBcVesBfa5zjwd4W6S",
          ActionButton: "_2dADyRoE_jccEUEZfuDxb",
          Icon: "_2oFfAxNgdA_YFXYKjPsgcn",
          CheckmarkCircle: "_7u7WRw64bV9F-zusjjepp",
          AlreadyOwned: "_2D02BgSnl5sgVNE-XuniU7",
          ItemHand: "_3LKW5Uv6cfYq-Z_PDZqj_3",
          ItemCard: "_1MOjA0o96N4z50jqB9AUXd",
          OwnedItem: "yHKq7lXwc6hGaUD4sIv3l",
          Avatar: "_3yoLjNwfSU6ZAWqhsk4Pbq",
          AvatarFrame: "_1SfXcyvcbfEtEMWyG1-1d7",
          DefaultAvatarImage: "_2yzRRBmT_gGyek7DqDpBic",
          MiniProfileBackground: "_1ceo3HX-aeNH7PmqHXER97",
          ProfileBackground: "_2PbBK1tQJ-ORCsxg0TiMGc",
          ItemCardImage: "_1FUjBtfs-dgiHwkEKgqvVc",
          ProfileBundleContainer: "_1ydA_GCPvoKjOWMi81aaun",
          AppIcon: "nVFnhJbdqGNSqX9KveGIi",
          ProfileBundleFooter: "_2uRyMe5Hn0JlQhul02AVMA",
          ProfileBundleName: "_12OueZ1NitZc-cr4favXzq",
        };
      },
      71866: (W) => {
        W.exports = {
          Pulse: "V5GbvlIlu4PR1cJKFeHlD",
          pulse: "_1qxHEBeArIMG7xAkPv39QS",
        };
      },
      51819: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_2I8Eu-ZTZ185IPYWWxnCR0",
          ShellHeaderFlex: "_3FEKim_gKmFp1TDudqF1Qc",
          RewardsPointsCount: "_35Qs6-NchS4CXE1SOBjvRB",
          ShellHeaderBrandName: "_37D8VCXZiAGHU904hRYAnu",
          Shell: "_2RbaB6lB2gGpQnFEPOddiG",
          ShellScrollParent: "_1rhSZxCRBAnHhGeWKsTxHr",
          SvgOverrideColor: "_1AdMam3_3nvlGILS1FPSBi",
          ItemHoverZIndex: "_3f-OJEfdDi2BvQJkIFGHZc",
          ActionButton: "PquU_Z-ycq8wA0LqtRFzT",
          Icon: "_1Eo487PKToUKk-ruhk-Kp-",
          Discount: "lmMNoTCdgq1ydrHMy73BG",
          ModalContainer: "Y6hHMH1PrvTkz6wc6Rc-v",
          Responsive: "_2-NxqySOAFFzeprxASfXYc",
          ItemWrapper: "_2j7g0UlzdfXVgkOz4iydt1",
          HeaderContainer: "_1HzHvBguoy2sNlwLSQPmdU",
          ErrorContainer: "_2ArAmceinbSgNoxciu3i-2",
          RedeemModalEnter: "IMX1E9nHPWAZxIuh5cbwH",
          RedeemModalEnterActive: "_1cDZb11RWp_Ok4OATjTVhO",
          RedeemModalExit: "_3vWI-qBPrUt-XiHdzyPnWd",
          RedeemModalExitActive: "_3tayCSiRA7tCEyxbT1vzKt",
          Header: "_1btwTfkSqO_Fh0RwwUFkTI",
          SubHeader: "_2JbfaQk8IDP59Da39sF8eu",
          SubHeaderAppContainer: "_2MH_iOeDea5EVdpaXFL3lL",
          AppIcon: "NOcYg9hpsSQNfxAJg4rLf",
          PointsContainer: "_2XpLSXFc72yehg-j-eVDue",
          Balance: "_3v4FXxFrfsaZHli8OwS4GQ",
          CurrentPoints: "ML1Ck7yq53Puk6wrqUXNA",
          EquippedDesc: "e2luC3B0kZv3cHmpQ-yBu",
          ItemPreviewContainer: "_11o78pfTvJo6LDpR0YssuN",
          GreenCheck: "HzZjRVx1Zpdsg8xRarwOt",
          PurchasedCheck: "_1clLMlc-2eGdrZyjUwW5AM",
          ItemButtonsContainer: "drMXIirjzt7TsSQWlQ1b3",
          RedeemButton: "_19X6AbdPOUHqSxNz3mm18i",
          DiscountContainer: "_17jkgQfcBKCRHEV6V8tkgQ",
          CostContainer: "_2pwsWXANIuk8w8cZ8wvNz",
          OriginalCost: "_1-3a91T-SsaHNMWkZ2bnZ1",
          ItemDescription: "sglF_wppszlUadECIrOFO",
          Bold: "_3-Dc-_rrTzo-BT6EKqtLsi",
          Opacity: "_2eif5yrN2G7TWO5tjGLf3y",
          NeedAppOwnership: "_35ATUpZwR3l9dZXXmvFO9i",
          Small: "_9eRgYoDija_BrTLfvZRnb",
          CurrentlyEquippedAvatarAndFrame: "_1n654ygtpUKZH8RqqAMUTb",
          CurrentlyEquippedAvatarAndFrameDesc: "_34QPsA922uUT4tTvE5p1T4",
          ChatPreviewContainer: "_1Jkzxy0wQJoL5Nu_76PHLE",
          PreviewChat: "_2ZTyD84hWkNBfgeSu2dbiA",
          ChatPickerContainer: "PtQg39wSwpvfzCxQCyinq",
          IconPreview: "_22a9ye_qTBf4YiVSQ9NKj5",
          PreviewEffectContainer: "_1yPRh8htUTWLkUvhD3xjz",
          ChatEffectPreviewIcon: "_2d4WT5eHTglM7V57ca5UiO",
          StickerPreviewContainer: "_1NvFZEwJZ1gf4RNsBc0MaB",
          LargePreview: "_1SE6RzLd2uOIOmpEupLi6W",
          EmoticonPreviewContainer: "_2fq5IITfkmclrHm4bVTpM3",
          LargePreviewContainer: "saRQKjyD9y4Svyw1M9FHe",
          BackgroundPreviewContainer: "_2SDKfrqTPu-6Cyh1KcRqZI",
          PreviewBackgroundContainer: "YXQsbt1_RCyeLaIHG47aX",
          PreviewBackground: "YytmxxIT6PfZS0iMxOr0W",
          TiledBackground: "_28UOJQXe7pSCeY7yvqg4Kk",
          VideoPreview: "_3_O3dbYfW327CvfPFPbuqB",
          MiniProfilePreviewContainer: "_1DUfrz3Cz_cSue9Pm0f6uP",
          ProfileContainer: "_2pw-baRoPkMJtQDXtt815j",
          ProfileImage: "ej4e9-pJBCihPCvNmM2at",
          CurrentAvatar: "_38WZtGuT4vNKTIU8OGnxbd",
          ImageBlur: "_35cYPo5FBbiP33GVjN6Nmm",
          AvatarPreviewContainer: "_2UIGV_VsRbfrN3zk1jYfx",
          Animated: "_28cJOeT4MPeXfWxHhrz2sd",
          Frame: "_2SOYAVulCTB8DFgs7q4bl6",
          ItemPreview: "_36UqAFTdI8IMvcJtKQYiKr",
          TopAvatar: "_114d27cwRP_0bweFTjTGCm",
          BottomAvatar: "_3dVJjjg3YIXYZUbrrSN4rc",
          PreviewCurrentAvatar: "_2Jsv-L15k0QHBRB1DNVr2S",
          BadgeItemContainer: "_3DCmO2fo0_T6oLB94tCk58",
          BadgePreviewContainer: "_3fRyETfHFZdT31V6JqnecV",
          BadgeColumn: "_3QCcud4ZlODKbII0eAj56I",
          ArrowColumn: "_36dAwyP1o1H9S5XOukMHS1",
          BadgeTitle: "UOYTX0uo9AWi0sRsc58-X",
          BlueArrow: "_1bTkvtUEPm4jeUZNe5idsp",
          BadgeDetailsContainer: "_19zsaZ0uyaDE0zXkmnRatI",
          BadgeImgContainer: "_6w1yJvLFvg5Cj96xlP5sp",
          BadgeImage: "_118li3TLduK7UjziA9br5M",
          BadgeLine: "_3zwjK3TJRyV7vqUzJgb32c",
          CurrentLevel: "_14mHpvSqyya39cymn7JLYG",
          NextLevel: "O91m4LGkAO2UBP1kNFUk2",
          BadgeLevelContainer: "_35l-KXTS2lRXNDfx2NGdxx",
          BadgeLevelText: "_1rAQu8c9IhzzROSQ2fovmG",
          GoldenProfileContainer: "_3amqsEQn92AeuO9VPyKBg1",
          GoldenProfilePreviewContainer: "_17ShO6uhrDvxZDQdCXhtix",
          AvatarContainer: "_31OasjFHn9x8gre3Ek4f82",
          GoldenFrame: "_1_ANO4BPb1XAtWjBikduaS",
          ProfileShowcaseContainer: "_3REq72ba7G_txOxAXUpO2X",
          ProfileShowcasePreviewContainer: "_22jxuk0RsiFMsUOAM8ZdDX",
          ProfileShowcaseIcon: "KPkBeBx37h7IvGl_ozTb",
          LoadedPreview: "_2JkH5HFyLNTTiRD-K3hD1R",
          PreviewShowcasePreviewFrameContainer: "sOtdbMj6VnmP69xgCwF97",
          PreviewShowcasePreviewFrame: "_39qcSPVNrj-IANL-qqd0Ge",
          BundleItemContainer: "_2Lw2P_j70aBlKLSoJph8LO",
          BundleItemPreviewContainer: "_26yC-q8FSPMqOFzmSC-AQt",
          BundleItemPreview: "_3gaKBlYJZ7Lsf3K7w7PhFh",
          BundleItemPreviewImage: "_1XWQ17waR-szs5OoToHPIy",
          BundleChildItemName: "_1np8I3NbmSsx4wRFHNROXI",
          BundleChildItemClass: "_3qv_rOrVdMWCxHzM0dL73V",
          BundleChildItemOwned: "_14pUJQjxDNTWZsXK01rUJh",
          OwnedCheckmark: "RtMC58PlqOWiMXTLSDQ8o",
          ProfileModifier: "_9j-kM1aoC9wmorz3r_pO0",
          PreviewProfileBundleFrameContainer: "_21GwkpPFfjFgdaTTJUdbLC",
          PreviewProfileBundleFrame: "_1ms02uGfxb6RXCegEBX9w1",
          KeyboardSkinPreviewContainer: "RSqiS3Cp_TPCDexN6ZN6G",
          KeyboardPreviewImg: "_34pqPSUy22r3uqSlrAyUXS",
          StartupMoviePreviewContainer: "_15W6w5oJhzO_XsMxV1GA8P",
          WarningTextContainer: "_1AVIhHPW-J3bWXNbUbjzI-",
          TimeWarning: "_3TOACXdc5-24rjapt1psU6",
          SaleRewardImg: "Ur-AdlqVPCqKIlyfwMwEi",
          RedeemThrobber: "_3weKxYqeez2IfVBgFKHJYJ",
          PreviewLinkContainer: "_2uwx7xJTNFc_vVnv-dN1BM",
          PreviewLink: "_1F7sBdJ_NTOQVbfTSnCIBm",
          RedeemModalMobileScroll: "_37xDgImnOU-YaJs_WSEozb",
        };
      },
      74077: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          strdefaultbodygradient:
            "linear-gradient(144.37deg, rgba(130, 156, 219, 0) 68.22%, rgba(82, 125, 235, 0.32) 113.95%)",
          strdefaultbodybackground: "rgba(76,112,168,.25)",
          ShellHeader: "_3Pva473WMrEz8MMnzIcIMM",
          ShellHeaderFlex: "_1S-Q4pMNcHBPoiIxJcqvIE",
          RewardsPointsCount: "_3050zT7eiZmCmA2ogD9Qru",
          ShellHeaderBrandName: "_2AC6FW9RaXQp2kO_tYY3TE",
          Shell: "_2sew-eeo1OBlE7rAdCa0zO",
          ShellScrollParent: "_3pX0fpr3EedcQOYsdg0NmC",
          SvgOverrideColor: "_106IeTCV02Hcu8JT61EjNZ",
          ItemHoverZIndex: "_1aVCuzE143LzlegRZfED44",
          ActionButton: "_2Urhg9M2mgWU8lqdt-LSIW",
          Icon: "_3ahcH9bu909iRJQlP_7m2I",
          ItemBox: "_1KCAgeXUqpSN-4Xf12i7PQ",
          Body: "_2_RnvOULQZCa2zLP-wkKt0",
          Footer: "_1D-8s79QAmUBhHzL8NO5Xx",
          NoBackdropSupportBackdrop: "_1ctekD4m53ti5dp-hCMMNu",
          Container: "_3jSq_nhhEl_hLkoHoTxIvq",
          Amount: "_1bRsHlb5Lbwij_cDQzf6ix",
          IconCheckMark: "_2RGTq9bdS1l3hxmnhogr0V",
          OwnedItem: "_1ODxRfS8erutVT60fGfxQi",
          IconPartialCheckMark: "_8UdhQDnP_sEZdn1YnkDjH",
          OwnedItemProgress: "_1TdFb6hO8DMRW_6RzK-ksU",
          Cost: "_3r7GrmPRxEWUM8_G7c843S",
          BodyTopRight: "_9NRgiTtWLcywPzCJOJxEu",
          ItemAppIcon: "Rk56Z2wAf6x71r-2oq9hb",
          ItemContainer: "skI5tVFxF4zkY8z56LALc",
          Item: "CcuoOiSs23_Y___I-1Myh",
          IconAnimated: "prjcBImvl1khvzxvnn6Ux",
          Attributes: "_1UaihTOKT8JuFV_aBKzRrh",
          AppIconContainer: "_3OyyiqHIwtrEKKyPTWPTGK",
          AppIcon: "_3RN5Yt4DuIZQ7nREAU7pp3",
          Image: "_3n9kIFsi3EeJRbgfnXCqXx",
          ImageSmall: "_3EHMyZtSFWlSAjvshvXHyf",
          ImageMedium: "SwLcjD34BPxbhRhLFcZJy",
          ImageBackground: "U-rBCVfODx4G2p43_zb8V",
          ImageMiniBackground: "N5jkzEz-bwL_mKsRTH0EC",
          ImageAnimatedAvatar: "_2YbSwspXZ90_vgzS5O3X4F",
          ImageProfileShowcase: "_3iMI3i_W4p3Y7EjW6DwTMP",
          ImageFillHeight: "_2zcHodSErfcHhctfoUP-Xj",
          ImageFrames: "_2MPpwm3uMppV0DPtkN4Pp_",
          ImageKeyboard: "_3bhniLEll6ufM7Pm62Dd5i",
          ItemTypeContainer: "_3JcrbihBThxBhB9ge-fFDD",
          Subtitle: "_2FQCUXF5fJTFVBLk8XgRUd",
          CostRow: "_32ATapz539xlpEXdJdWPPE",
          ClaimedText: "_2nLc897Xb0bQ2WGQryef30",
          Name: "EccZY8FXMaK1CgBOE2ztA",
          ItemContainerShine: "jj6Kzgd4F6XUG1cLBvjDd",
          BackgroundOverride: "_3xgzPpOhEZZ4X79DUyurfa",
          ItemWideContainer: "_26i5MCASOy4tR-w-B4zwNH",
          ItemSkeleton: "trQnKaUm9ZgNzLaiFiTBS",
          SkeletonName: "_2dNdsI0fJOny4stZtgAfff",
          SkeletonSubtitle: "_1BU-YfkwDgGddw0CCzSA3k",
          VisibilityTracker: "_1O9RoBfb2qNsyFibTI5EEs",
        };
      },
      58407: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          Container: "pvOC3DAMIZRHRdTbeNyrQ",
          Loading: "QUQ-jDbjkSYYfa79_L4Qy",
          MobileContainer: "_33ggWssYdAVC0_vHkMNMAn",
          LeftArrow: "qQJ_rXzdmKr_3e9d5I-bl",
          RightArrow: "_3vKwrVjIyKAkovj545omby",
          Disabled: "_1yQ71J_0gBkKAycQ_oGvvm",
          Item: "_1J5UBa5UcC4aZ_7_RMAZNf",
        };
      },
      17552: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_1rWvB8CTWbvYFqxwrR3OMv",
          ShellHeaderFlex: "_2KmXa0P1JjRki__5wLhi3X",
          RewardsPointsCount: "FMNz07Zxxdva2Byhuh3uz",
          ShellHeaderBrandName: "_5pV-fLqEiGhjLx8O3yAPX",
          Shell: "_3pxDW5zyrXwZNHcVX5tfz8",
          ShellScrollParent: "KL8ER7IEHoUt2NKJc-CM",
          SvgOverrideColor: "_3Qlmf2_rwzyfbLrbkU6AsM",
          ItemHoverZIndex: "_2E7X9vNL_1bGNjXE1xKIsf",
          ActionButton: "_2c38-cNCRIFm4I1wCCJ2ac",
          Icon: "_3fFEWLncBCpNWinQhvBB",
          Section: "_1st6-XscoE6pAsGNvDoIje",
          Header: "_2tr2131zB5lH1tNv9bXTJ0",
          TitlesContainer: "ZRG9mTu664hov2pk9QCmU",
          TopRow: "_18BZr166Sq0tFRrTT85GP8",
          SectionLine: "_3Zbig1lRZ9ujlUxm6T4KXe",
          Actions: "o7uccPYHw9uLB_OhwJen5",
          Body: "_3LoKg78CNiXHr1KHmURkIE",
          SectionTitle: "_1U-QFj8ZqTxnWWbDXQjlm4",
          SectionSubtitle: "_1CqztIyPIck06bjwelo2vz",
          SectionCallout: "_2tQyoFl0ilITEK586SpZlQ",
        };
      },
      82942: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_3yEbXBLFqAIH5fG2NVlFxR",
          ShellHeaderFlex: "_2aQIlV0z8u3KQZ10b-02g8",
          RewardsPointsCount: "_289LsR9Ay5ms8rg4cLju99",
          ShellHeaderBrandName: "_30kf5aTMlAYoH2zYM-BGk",
          Shell: "_1GJKW8_OxquMIkFSQ1EeAO",
          ShellScrollParent: "_2yu0NjVR2h_oAeY7RJwssu",
          SvgOverrideColor: "_2Z0xCykARLXhoJ7LviRJvo",
          ItemHoverZIndex: "Jgu2H-a3U8U9rvMdLAj54",
          ActionButton: "xPimrRGseWugU1AVRYdyT",
          Icon: "SkxxZJl8JlDw9PDN3DfSt",
          SaleRewardContainer: "_379X4LnfDWgG7SAUybJ1BW",
          LeftColumn: "_3yZ-TFrYUi_TXq-9KjPQgN",
          SaleRewardLogo: "_1aazfSOZUDeSxvHoi4ZV6T",
          SaleRewardSubHeader: "_3Lw87Vu-zIk0s-4D3uH6MS",
          SaleRewardContainerFlex: "_2CxV-me7AjBaSNNf_7GHrA",
          SaleRewardTextContainer: "_1lAJJ02BX3PRn4HzLW1vn2",
          SaleRewardItemOwned: "_1K8oZrLYry_Dx3JyKNGaLb",
          RulesLink: "pwBt_hWRDdsbHVrgv0NWj",
          NextStop: "_1WxxpZ3OWbnqv7wXHJB1qS",
          Title: "_34PnVFOKUDgJj8Y2a5u-gW",
          Timer: "_3aFQPpgZw9MiyDlO4e6qM",
        };
      },
      5164: (W) => {
        W.exports = {
          ItemContainer: "_25fHecg508tfG-Uw7t5okH",
          Accent: "_1EEzvDB4ZBAUHdB8jtCCxI",
          Item: "_1cVR_mVxC8Iv4POv3ws-LD",
          Active: "O_UvE7SEu1j_TUQqWz0oG",
        };
      },
      6708: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_3M7bfuSoa6JGmxA1QmgvE-",
          ShellHeaderFlex: "_4eFAqSzIMV3tIKywzF5Wb",
          RewardsPointsCount: "_3U0OMqu4rjQDjuwd0A-h_5",
          ShellHeaderBrandName: "MS1bpqXxHn39LgX1xC7SW",
          Shell: "Q9io3qOYf-_BjOexVsBpx",
          ShellScrollParent: "_1TznBfOuD_2xPpXIWUDeW6",
          SvgOverrideColor: "_2sxsfE_-6E5BOkZYm6fxW2",
          ItemHoverZIndex: "_3OPQYp5rFwNRra1pJDXEA5",
          ActionButton: "FgTBsFJl4vO_zmVKkFKgI",
          Icon: "_3XqyIZxPIPIQaQL-gSBKkC",
        };
      },
      88692: (W) => {
        W.exports = {
          Header: "FGf6coPjBrco8eJcrynp5",
          ErrorCtn: "_1rqQV0hguBOEtZmWtYFPtu",
        };
      },
      1056: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "k366j1SeaNNI_qBCzJNwz",
          ShellHeaderFlex: "_2mQTxqyxJVLNgz9mUQmCYo",
          RewardsPointsCount: "_2WS1A7b3rPt4gc-G9zTfhC",
          ShellHeaderBrandName: "_39jeNS8jOq4Z4htKxyI693",
          Shell: "Ke6j3kZi-GOd1kdAlmMET",
          ShellScrollParent: "_6qJSXX_Mb21jD3XaJUtks",
          SvgOverrideColor: "_26o5CjPYm4bARQpdvmSgdq",
          ItemHoverZIndex: "_1BHNsIQiVr9n9GgGGKQe7O",
          ActionButton: "_3Gv1-jYZC1QsSmaite5BK2",
          Icon: "_2X_pzKFToS59vYA7psGmqS",
          PageContainer: "_3IDGlcFXUR5QT2sEN9yV0W",
          PageHeader: "_1qSTIvgnxkcB1Obl3XmtN4",
          SectionHeader: "_3C3OEl9gqRz-p2c-RUBLoq",
          SectionContent: "_24eAN88wEUVo9s9fs3DkX8",
        };
      },
      60187: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "_1iZtnTI1grVfcT_EwImQ7H",
          ShellHeaderFlex: "_1ZIXKlmQuHcbaji-0WEvgH",
          RewardsPointsCount: "_1mnC0dHuYt_HGtyYe7TE-E",
          ShellHeaderBrandName: "lU9dGqkDAV7GQ2abdpm5K",
          Shell: "_3-cdkSC8JeHTR5dlFTC9dp",
          ShellScrollParent: "_2FLKmhVzLujkvO6ThYHWpV",
          SvgOverrideColor: "_1FzprAsttTsXhThKZUfv5W",
          ItemHoverZIndex: "_2DkS3evJEYzV8v2jWuCcyf",
          ActionButton: "_2F_4QUeAklbDxE2Gel4nbi",
          Icon: "_2owVAQbqvTJ6G2IzKl41L4",
          TempImage: "_2rzeDDfNBHXTyU1baPKs4i",
          PageFormatting: "_2RUCDbVGqPGKaRt1JfDfvs",
          PageContainer: "a8CX9BjDuZ_sxVwla9dBv",
          HeaderImage: "_3NJf13jFRdCtio8kNxRKX2",
          HeaderText: "_1xjPBJLnZTq3cO4o1ElJjI",
          HeaderBannerContainer: "jHVzrnG0MAhnzlJOeHyxT",
          SubHeaderText: "_1RhQxjDdpsV33liksUwi9E",
          SectionTileContainer: "_3KJbT4Qxesn7kghmkVU-ar",
          SectionTitle: "jlOQ0t0IP8Y2ggueDOFju",
          SectionTitleSmall: "_1OaBeKTDZ5GfYredq0TIHT",
          SectionSubtitle: "_3OwkAmUOe4bx9QafP2wEl",
          ConvertionSectionTextContainer: "xaO4vzHwYk79YSHtz1EDc",
          PointsConvertion: "_5F9Azq8XQGpCR-Ap9d5KB",
          AvatarImg: "dheV8IhaX62kHrCuXCDBL",
          AvatarProfile: "_2hKS9qa-CDDixkSuAdxrkl",
          AvatarProfileMini: "D7gjlwGcWWp6LFeAz_ML-",
          FrameProfile: "_2JChrN4HF2whkNDGMy8amm",
          AvatarImgProfile: "_1vIToDdXoFVcI0mVuPDmft",
          UsePointsContainer: "_2sO6GCa04MtLhxal2Lz7Ve",
          UsePointsIconContainer: "_2CP5zm_J6YfFOFS651-U8E",
          scrollAnim: "_1nWkJ8SjSUKa-sa_6TJAtn",
          UsePointsSvg: "_2pF3ppw6RghaOpkdHjRlno",
          ScrollIcon: "_2Ux9o6dampkIuBI9PpQzPZ",
          AwardsUiImg: "_31OtFiSvGTkjRlrEmtfos8",
          AwardBadgeContainer: "_2SDnX-VXLTVb4X_sHKJen",
          AwardsApng: "agnGAlTuG_hI5vLj-c7DY",
          SectionSubtitleBadge: "_2sCkupQt-lwdtWtQJ5NAy0",
          SectionSubtitleLeftAlign: "_2NJT7pwZwwkNSv06ajSYOX",
          AwardsLink: "iKicbf3yxYMeWSP4TXUSb",
          UsePointsAnim1: "_3HjAaXFmxuLutcsbw_XrDU",
          flicker: "_2zByL_d5bng-rh2BrC2XsS",
          UsePointsAnim2: "_11wSWo7lsZJ82qzbJs_jtD",
          UsePointsAnim3: "_2glEr5CW7hkao3D2qDOvVV",
          UsePointsAnim4: "_1wIT9BruCqqYCvU4h3Kilw",
          UsePointsAnim5: "_3aFhdzahQ61KgBW43ZeMM9",
          UsePointsAnim6: "_3tSZIVylTehIS3syMFkQce",
          UsePointsAnim7: "zcRlc7r83lLMGA6rK2Fgl",
          UsePointsAnim8: "_3czumRwkGTLEshBPEGoakw",
          CollectionIcon: "GFe52Fhr5D2td0kznkJyM",
          SectionIcons: "_10ulSv2Q-y1OfDwpIF1vg8",
          CollectionItemsContainer: "_3kjcS3eA0ppsTtVnhYDUZO",
          ItemLeft: "_1pJRR4M5xnnpg2oQ4UkwuU",
          ItemLeftMid: "_1lzhOx4OksYDPvFI7Ov62k",
          ItemRightMid: "_2-R8qD8i7Zarqlx70u0X0K",
          ItemFrame: "DF7xwKRN-mSiAtxXKzhy0",
          ItemAvatar: "_3HCugrfnAOOfwhPqOoAEXh",
          ItemRight: "_3u3H2FkQPbY-sPoqkRCsaA",
          ItemValveRight: "_3zLzOqOouKnRmFOY4CRnv4",
          ItemRightMidValve: "TMfMfqdKqZxBN9FCEiaER",
          ItemFrameFriendsList: "_36qTLZhnKG8gbD-AsKJx5w",
          ItemFrameFriendsListContainer: "_32y5HS5WaXos0vE3F1ALfo",
          GoldenFriendsList: "_3wLdEZt-JTVWIurhD-4CtJ",
          GoldStar1: "_1YAI6JFnmIQ_AK2MB8QTFo",
          GoldStar2: "ys-Nu7k6PSijeAwSw14II",
          GoldStar3: "_2TLvu4oSQyFINX-Epg3A3-",
          GoldStar4: "_3udNEdoHK3l1zy2zJm9i2X",
          GoldStar5: "_12SxHeDB_8MjOT9quSA9rH",
          FullWidthBackgroundForSection: "_2vC_e0gxMJzrOw6voTJ1qD",
          FullWidthBackgroundForSectionFadeUp: "JYeiCzXKaRCJuLyio-G8l",
          CalloutContainer: "izuViwoIyjvG7xn9rWAKv",
          CalloutIconContainer: "_2eSc9dOs14Sh3eamD7sOCm",
          CalloutIcon: "_26pAItGgiPMDARLIuIi0W_",
          CalloutText: "_1kgWzWV_HdUXLFs9OAKRiM",
          FaqContainer: "_1UhgWaQHDL0-lkWEri0bL2",
          FaqTitle: "_16G14OyvG_lpaLOi4aTG7R",
          FaqQuestion: "g7OCNyUsukZzPVIuhZQR0",
          FaqAnswer: "_2zL7njD0d8xMmfhd9gqIsB",
        };
      },
      44301: (W) => {
        W.exports = {
          Badge: "_1-t5yTB7VKBDlkJM99iaMq",
          BadgeImage: "_2SfYJe2KNb7bPT0Dm2I8nW",
          Hint: "_2foBeDcYxyONgYSJT2wt02",
          OwnedSticker: "rHnlsUpyAnXRadVmi1XBD",
          Footer: "_1BYPcF6OKeqblNkqhbSWx6",
          LevelMarker: "TLAUTy0mm_Z22itLMC6DA",
          Owned: "y8Ybgn_Nhk2YNnWjqQEMp",
          Inner: "_1ToV4LAfgnsFwT1XJLfO-N",
          BadgeGrid: "_2RmTTjUyPE_6gwTFrs2kit",
        };
      },
      5108: (W) => {
        W.exports = {
          "duration-app-launch": "800ms",
          ShellHeader: "yV5UzPGa63ml8ZAPotCIG",
          ShellHeaderFlex: "kNGqa9t8eNBm53qFOBrLH",
          RewardsPointsCount: "FDOzDBFhONi9dX8pOCiQ8",
          ShellHeaderBrandName: "GrkDn5PnLObytzhVQ3I5x",
          Shell: "_3eCX1SnYbcN0Y9BIRVtJPj",
          ShellScrollParent: "_1oCLnPiFfFZx02l7q7zkmi",
          SvgOverrideColor: "mgi6kv7ib0cXGnG-o8GpO",
          ItemHoverZIndex: "_2UcoO8AmB-NZFALxoyTXvu",
          ActionButton: "_2ZQedDaGZUvFXk_JOZtTb2",
          Icon: "_1qMU66wZX82qGHgMSVxFzl",
          PageHomeTop: "nmZGbyIJS9Khyye40Xqec",
          PageHomeTitleContainer: "_1gjQLNTlec3cPDJhWPr52h",
          Sparkles: "KPIYngr2rf79w0bvpX86E",
          PageHomeBranding: "_2e0XTZxizBd-mziX3oL3ox",
          PageBrandingTopPadding: "_3AI7TnB4VgwVpolFz7ql6n",
          PageHomeTopTitle: "_3DDggsGtqw9MsoLcQRBUGH",
          PageHomeTopSubTitle: "rSOhtifNE28jCExajTVS4",
          PageHomeTopLink: "_1JlZbyLaXUjEM6_BR1pcN_",
          PageHomeBanner: "_2BSzmpNKqU7eIQ-4I5t3a1",
          PageHomeBannerIcons: "_3vfTyeYC_FM8Vasl_QTcGc",
          PageHomeBannerChicken: "_3WLxHG_lPKnrsTW2a81IdP",
          PageHomeBannerBored: "_15Y6gmmPa-s-ewacCYrZ8h",
          PageHomeBannerHugs: "_32Y-3fjGs3LaBQVGBqk4Rq",
          PageHomeBannerHappy: "_2oI2k0i3RgW4Y6Un9LUc9A",
          PageHomeBannerBoombox: "_2hiX2vT85ysTnh00hbGkve",
          PageHomeBannerDance: "_3o5OdH3wkF8K_KW7bCyt7D",
          PageHomeBannerFloor: "_37JZ_3hEHtfr4U47-CApJL",
          HomeRewardsPointsIcon: "_2MaAJhH_5TwtXxebAJZFU_",
          PageItemsContainer: "NiGcLDhQ5ltKEgevn6Ctk",
          PageItemsContainerChildren: "_1vtnSPuMGOHiNcy6sGp83L",
          PageHeaderContainer: "GY0kV8_kz1GntNwchm456",
          RewardItemContainer: "T0l91zAfi6hild95uTNO-",
          SecondaryNavigationContainer: "_1viLBoL1YH9HK3kSZXmJQW",
          SecondaryNavigation: "_3Q9UO0nDzHTfhrfTQmMGw3",
          RewardsPointsContainer: "_3bglimcfnZHXQ2qzlxiXmx",
          RewardsPointsIcon: "OeByMUCSt-fOJ6xxF-FfC",
          RewardsPointstext: "_1aK9NBaJBwU-4nw2FXZfmh",
          SecondaryBtnContainer: "_2HCytw_09I9MV4Xy7EW4Jb",
          SecondaryBtnIcon: "_3jGTO8-7r117sb31IMezoM",
          SecondaryBtnText: "_3_onz9nS-lMLFGmUE1t2We",
          Selected: "_15VJsTwk6ZJqoB8j7NYZXs",
          Logo: "b6EpWDqIx_YlUgQRpP66-",
          ShopHero: "_1gWcSPP5CotVdhGQY_8rjo",
          CouponsSection: "_2clpW9vmuOOuKJD0b9W0fW",
          CouponsContainer: "_1FgnEzJ-2OFaqJgU31JQkm",
          CouponsFooter: "_18cUzRyzS0cBO2TfPQQQLK",
          InfoText: "_2OCm66X-FC9oBTH5whAY6d",
          BlueButton: "_9H0RWXmFHlR5s_o6KZ5Aw",
          BlueButtonSmall: "_3U87jaSG2ZJjbCwPuO738p",
          PageHomeHowItWorks: "_2bWxopMGr7pattyTG9s1p5",
          EventPageHeaderImg: "_144Kf1whLyNHOOPRZLvepP",
          PageSubtitle: "FRVvERJu0cLA3TmUovTrJ",
          PageTitle: "_2slUuJn3UIDWrXWtQE5K3o",
          DescriptorDrivenEventPageTitle: "UIMULcMvZKXpAu7iWuxz",
          ParallaxRoot: "_399XJVziSRXteE0UwuS2Cj",
          ParallaxBackground: "_1Lf5512-BMNbp1bfLQXpQG",
        };
      },
      61738: (W, E, s) => {
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
        function m(S) {
          var L = u(S);
          return s(L);
        }
        function u(S) {
          if (!s.o(e, S)) {
            var L = new Error("Cannot find module '" + S + "'");
            throw ((L.code = "MODULE_NOT_FOUND"), L);
          }
          return e[S];
        }
        (m.keys = function () {
          return Object.keys(e);
        }),
          (m.resolve = u),
          (W.exports = m),
          (m.id = 61738);
      },
      17083: (W, E, s) => {
        "use strict";
        s.d(E, { N_: () => n, k2: () => ee });
        var e = s(92757),
          m = s(42891),
          u = s(90626),
          S = s(29248),
          L = s(58584),
          h = s(81115),
          F = s(68841),
          _ = (function (I) {
            (0, m.A)(B, I);
            function B() {
              for (
                var P, O = arguments.length, U = new Array(O), Y = 0;
                Y < O;
                Y++
              )
                U[Y] = arguments[Y];
              return (
                (P = I.call.apply(I, [this].concat(U)) || this),
                (P.history = (0, S.zR)(P.props)),
                P
              );
            }
            var v = B.prototype;
            return (
              (v.render = function () {
                return u.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              B
            );
          })(u.Component),
          a = (function (I) {
            (0, m.A)(B, I);
            function B() {
              for (
                var P, O = arguments.length, U = new Array(O), Y = 0;
                Y < O;
                Y++
              )
                U[Y] = arguments[Y];
              return (
                (P = I.call.apply(I, [this].concat(U)) || this),
                (P.history = (0, S.TM)(P.props)),
                P
              );
            }
            var v = B.prototype;
            return (
              (v.render = function () {
                return u.createElement(e.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              B
            );
          })(u.Component),
          w = function (B, v) {
            return typeof B == "function" ? B(v) : B;
          },
          c = function (B, v) {
            return typeof B == "string" ? (0, S.yJ)(B, null, null, v) : B;
          },
          f = function (B) {
            return B;
          },
          j = u.forwardRef;
        typeof j > "u" && (j = f);
        function x(I) {
          return !!(I.metaKey || I.altKey || I.ctrlKey || I.shiftKey);
        }
        var M = j(function (I, B) {
            var v = I.innerRef,
              P = I.navigate,
              O = I.onClick,
              U = (0, h.A)(I, ["innerRef", "navigate", "onClick"]),
              Y = U.target,
              Z = (0, L.A)({}, U, {
                onClick: function (V) {
                  try {
                    O && O(V);
                  } catch (oe) {
                    throw (V.preventDefault(), oe);
                  }
                  !V.defaultPrevented &&
                    V.button === 0 &&
                    (!Y || Y === "_self") &&
                    !x(V) &&
                    (V.preventDefault(), P());
                },
              });
            return (
              f !== j ? (Z.ref = B || v) : (Z.ref = v), u.createElement("a", Z)
            );
          }),
          n = j(function (I, B) {
            var v = I.component,
              P = v === void 0 ? M : v,
              O = I.replace,
              U = I.to,
              Y = I.innerRef,
              Z = (0, h.A)(I, ["component", "replace", "to", "innerRef"]);
            return u.createElement(e.XZ.Consumer, null, function (ae) {
              ae || (0, F.A)(!1);
              var V = ae.history,
                oe = c(w(U, ae.location), ae.location),
                G = oe ? V.createHref(oe) : "",
                y = (0, L.A)({}, Z, {
                  href: G,
                  navigate: function () {
                    var me = w(U, ae.location),
                      de = (0, S.AO)(ae.location) === (0, S.AO)(c(me)),
                      Be = O || de ? V.replace : V.push;
                    Be(me);
                  },
                });
              return (
                f !== j ? (y.ref = B || Y) : (y.innerRef = Y),
                u.createElement(P, y)
              );
            });
          });
        if (0) var le, Ne;
        var De = function (B) {
            return B;
          },
          Se = u.forwardRef;
        typeof Se > "u" && (Se = De);
        function ue() {
          for (var I = arguments.length, B = new Array(I), v = 0; v < I; v++)
            B[v] = arguments[v];
          return B.filter(function (P) {
            return P;
          }).join(" ");
        }
        var ee = Se(function (I, B) {
          var v = I["aria-current"],
            P = v === void 0 ? "page" : v,
            O = I.activeClassName,
            U = O === void 0 ? "active" : O,
            Y = I.activeStyle,
            Z = I.className,
            ae = I.exact,
            V = I.isActive,
            oe = I.location,
            G = I.sensitive,
            y = I.strict,
            A = I.style,
            me = I.to,
            de = I.innerRef,
            Be = (0, h.A)(I, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return u.createElement(e.XZ.Consumer, null, function (Q) {
            Q || (0, F.A)(!1);
            var re = oe || Q.location,
              ye = c(w(me, re), re),
              he = ye.pathname,
              D = he && he.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              Ce = D
                ? (0, e.B6)(re.pathname, {
                    path: D,
                    exact: ae,
                    sensitive: G,
                    strict: y,
                  })
                : null,
              qe = !!(V ? V(Ce, re) : Ce),
              ze = typeof Z == "function" ? Z(qe) : Z,
              Fe = typeof A == "function" ? A(qe) : A;
            qe && ((ze = ue(ze, U)), (Fe = (0, L.A)({}, Fe, Y)));
            var He = (0, L.A)(
              {
                "aria-current": (qe && P) || null,
                className: ze,
                style: Fe,
                to: ye,
              },
              Be,
            );
            return (
              De !== Se ? (He.ref = B || de) : (He.innerRef = de),
              u.createElement(n, He)
            );
          });
        });
        if (0) var R;
      },
      80736: (W, E, s) => {
        "use strict";
        s.d(E, { A: () => e });
        const e =
          s.p + "images/applications/store/boombox.png?v=valveisgoodatcaching";
      },
      28910: (W, E, s) => {
        "use strict";
        s.d(E, { A: () => e });
        const e =
          s.p + "images/applications/store/bored.png?v=valveisgoodatcaching";
      },
      11981: (W, E, s) => {
        "use strict";
        s.d(E, { A: () => e });
        const e =
          s.p +
          "images/applications/store/csgoChat_128_chickendance.png?v=valveisgoodatcaching";
      },
      47190: (W, E, s) => {
        "use strict";
        s.d(E, { A: () => e });
        const e =
          s.p + "images/applications/store/happy.png?v=valveisgoodatcaching";
      },
      5050: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_1.svg?v=valveisgoodatcaching";
      },
      41126: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDExOSAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02Mi40MDggMzQuMDgxN0M2Mi40MDggMjkuNzY4NSA1OC44OTM2IDI2LjI1NDEgNTQuNTgwNCAyNi4yNTQxSDMzLjMzNDFDMzEuNzM2NyAyNi4yNTQxIDMwLjQ1ODcgMjQuNjU2NiAzMC43NzgyIDIzLjA1OTJDMzAuNzc4MiAyMy4wNTkyIDM3LjMyNzggNy4wODQ1MiAzNy4zMjc4IDUuMDA3ODFDMzcuMzI3OCAyLjkzMTEgMzYuNTI5MSAxLjQ5MzM5IDM0LjkzMTYgMS4xNzM4OUMzMy4zMzQxIDAuODU0Mzk5IDI5LjgxOTcgMC4wNTU2NjY4IDI5LjgxOTcgMC4wNTU2NjY4QzI4LjIyMjMgLTAuMTA0MDggMjcuMTA0IDAuMDU1NjY2NyAyNi4zMDUzIDAuODU0NEwyLjUwMzA1IDI0LjY1NjZDMS4wNjUzNCAyNi4wOTQ0IDAuMjY2NjAyIDI4LjAxMTMgMC4yNjY2MDIgMzAuMDg4VjczLjg1ODZDMC4yNjY2MDIgNzUuNDU2MSAxLjcwNDMyIDc2Ljg5MzggMy4zMDE3OSA3Ni44OTM4SDQzLjA3ODdDNDYuMjczNiA3Ni44OTM4IDQ4LjUxMDEgNzQuNjU3MyA1MC4yNjczIDcyLjEwMTRMNjAuOTcwMyA1Ny44ODM5QzYxLjYwOTMgNTcuMDg1MiA2Mi41Njc4IDU1LjE2ODIgNjIuNTY3OCA1My41NzA4VjM0LjQwMTJMNjIuNDA4IDM0LjA4MTdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KPHBhdGggZD0iTTU2LjE3NzcgMTAxLjkxOEM1Ni4xNzc3IDEwNi4yMzEgNTkuNjkyMiAxMDkuNzQ2IDY0LjAwNTMgMTA5Ljc0Nkg4NS4yNTE2Qzg2Ljg0OTEgMTA5Ljc0NiA4OC4xMjcxIDExMS4zNDMgODcuODA3NiAxMTIuOTQxQzg3LjgwNzYgMTEyLjk0MSA4MS4yNTc5IDEyOC45MTUgODEuMjU3OSAxMzAuOTkyQzgxLjI1NzkgMTMzLjA2OSA4Mi4wNTY3IDEzNC41MDcgODMuNjU0MSAxMzQuODI2Qzg1LjI1MTYgMTM1LjE0NiA4OC43NjYgMTM1Ljk0NCA4OC43NjYgMTM1Ljk0NEM5MC4zNjM1IDEzNi4xMDQgOTEuNDgxNyAxMzUuOTQ0IDkyLjI4MDUgMTM1LjE0NkwxMTUuOTIzIDExMS4zNDNDMTE3LjM2MSAxMDkuOTA2IDExOC4xNTkgMTA3Ljk4OSAxMTguMTU5IDEwNS45MTJWNjIuMTQxNEMxMTguMTU5IDYwLjU0MzkgMTE2LjcyMiA1OS4xMDYyIDExNS4xMjQgNTkuMTA2Mkg3NS42NjY4QzcyLjQ3MTkgNTkuMTA2MiA3MC4yMzU0IDYxLjM0MjcgNjguNDc4MiA2My44OTg2TDU3Ljc3NTIgNzguMTE2QzU3LjEzNjIgNzguOTE0OCA1Ni4xNzc3IDgwLjgzMTcgNTYuMTc3NyA4Mi40MjkyVjEwMS40MzlWMTAxLjkxOFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMzEuNDE3MiIgeTE9IjAiIHgyPSIzMS40MTcyIiB5Mj0iNzYuODkzOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iODcuMTY4NiIgeTE9IjU5LjEwNjIiIHgyPSI4Ny4xNjg2IiB5Mj0iMTM2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC41OCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=";
      },
      55511: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjEyMiIgdmlld0JveD0iMCAwIDExOSAxMjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01OS41IDE5LjU0MzdDNTUuOTMgMTkuNTQzNyA1My41NSAxNy4xNzQ4IDUzLjU1IDEzLjYyMTRWNS45MjIzM0M1My41NSAyLjM2ODkzIDU1LjkzIDAgNTkuNSAwQzYzLjA3IDAgNjUuNDUgMi4zNjg5MyA2NS40NSA1LjkyMjMzVjEzLjYyMTRDNjUuNDUgMTYuNTgyNSA2My4wNyAxOS41NDM3IDU5LjUgMTkuNTQzN1pNNzMuNzggMTE2LjA3OEM3My43OCAxMTIuNTI0IDcxLjQgMTEwLjE1NSA2Ny44MyAxMTAuMTU1SDUxLjE3QzQ3LjYgMTEwLjE1NSA0NS4yMiAxMTIuNTI0IDQ1LjIyIDExNi4wNzhDNDUuMjIgMTE5LjYzMSA0Ny42IDEyMiA1MS4xNyAxMjJINjcuODNDNzEuNCAxMjIgNzMuNzggMTE5LjYzMSA3My43OCAxMTYuMDc4Wk0zMi43MjUgMjkuMDE5NEMzNS4xMDUgMjYuNjUwNSAzNS4xMDUgMjMuMDk3MSAzMi43MjUgMjAuNzI4MkwyNy4zNyAxNS4zOTgxQzI0Ljk5IDEzLjAyOTEgMjEuNDIgMTMuMDI5MSAxOS4wNCAxNS4zOTgxQzE2LjY2IDE3Ljc2NyAxNi42NiAyMS4zMjA0IDE5LjA0IDIzLjY4OTNMMjQuMzk1IDI5LjAxOTRDMjYuNzc1IDMxLjM4ODMgMzAuMzQ1IDMxLjM4ODMgMzIuNzI1IDI5LjAxOTRaTTk0LjYwNSAyOS4wMTk0TDk5Ljk2IDIzLjY4OTNDMTAyLjM0IDIxLjMyMDQgMTAyLjM0IDE3Ljc2NyA5OS45NiAxNS4zOTgxQzk3LjU4IDEzLjAyOTEgOTQuMDEgMTMuMDI5MSA5MS42MyAxNS4zOTgxTDg2LjI3NSAyMC43MjgyQzgzLjg5NSAyMy4wOTcxIDgzLjg5NSAyNi42NTA1IDg2LjI3NSAyOS4wMTk0Qzg4LjA2IDMxLjM4ODMgOTIuMjI1IDMxLjM4ODMgOTQuNjA1IDI5LjAxOTRaTTExOSA1NS4wNzc3QzExOSA1MS41MjQzIDExNi42MiA0OS4xNTUzIDExMy4wNSA0OS4xNTUzSDEwNS4zMTVDMTAxLjc0NSA0OS4xNTUzIDk5LjM2NSA1MS41MjQzIDk5LjM2NSA1NS4wNzc3Qzk5LjM2NSA1OC42MzExIDEwMS43NDUgNjEgMTA1LjMxNSA2MUgxMTMuMDVDMTE2LjYyIDYxIDExOSA1OC42MzExIDExOSA1NS4wNzc3Wk0xOS42MzUgNTUuMDc3N0MxOS42MzUgNTEuNTI0MyAxNy4yNTUgNDkuMTU1MyAxMy42ODUgNDkuMTU1M0g1Ljk1QzIuMzggNDkuMTU1MyAwIDUxLjUyNDMgMCA1NS4wNzc3QzAgNTguNjMxMSAyLjM4IDYxIDUuOTUgNjFIMTMuNjg1QzE3LjI1NSA2MSAxOS42MzUgNTguNjMxMSAxOS42MzUgNTUuMDc3N1pNNzkuNzMgMzQuOTQxN0M3My43OCAzMC4yMDM5IDY3LjIzNSAyNy44MzQ5IDU5LjUgMjcuODM0OUM1Ny4xMiAyNy44MzQ5IDU0LjE0NSAyOC40MjcyIDUxLjc2NSAyOS4wMTk0QzM0LjUxIDMzLjE2NSAyMy44IDUwLjMzOTggMjguNTYgNjguMTA2OEMzMC45NCA3Ni45OTAzIDM2LjI5NSA4NC4wOTcxIDQ0LjAzIDg4LjI0MjdWOTYuNTM0QzQ0LjAzIDEwMC4wODcgNDYuNDEgMTAyLjQ1NiA0OS45OCAxMDIuNDU2SDY5LjYxNUM3My4xODUgMTAyLjQ1NiA3NS41NjUgMTAwLjA4NyA3NS41NjUgOTYuNTM0Vjg4LjgzNDlDOTEuMDM1IDc5Ljk1MTUgOTYuOTg1IDYwLjQwNzggODguMDYgNDUuMDA5N0M4NS42OCA0MC44NjQxIDgzLjMgMzcuMzEwNyA3OS43MyAzNC45NDE3WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1OS41IiB5MT0iMCIgeDI9IjU5LjUiIHkyPSIxMjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";
      },
      12388: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_12.svg?v=valveisgoodatcaching";
      },
      63557: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_13.svg?v=valveisgoodatcaching";
      },
      2458: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_14.svg?v=valveisgoodatcaching";
      },
      17067: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTEiIGhlaWdodD0iMTE4IiB2aWV3Qm94PSIwIDAgOTEgMTE4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTAuNjM2IDBIMC45ODE0NDVWMTE4SDEwLjYzNlYwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+CjxwYXRoIGQ9Ik02NC45NzUgMjguNDgwNEw3MS43ODE4IDMzLjI1NDVWMEg1NC42MTgyVjMzLjI1NDVMNjEuNDI1IDI4LjQ4MDRDNjEuOTQ0MSAyOC4xMTYyIDYyLjU2NDMgMjcuOTIwNyA2My4yIDI3LjkyMDdDNjMuODM1NyAyNy45MjA3IDY0LjQ1NTggMjguMTE2MiA2NC45NzUgMjguNDgwNFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPgo8cGF0aCBkPSJNOTAuMDE4MiAwSDc3LjE5OTdWMzkuMjYyM0M3Ny4xOTkgMzkuODIzMSA3Ny4wNDQ0IDQwLjM3MjkgNzYuNzUyNSA0MC44NTE4Qzc2LjQ2MDcgNDEuMzMwNyA3Ni4wNDMgNDEuNzIwMSA3NS41NDQ5IDQxLjk3NzZDNzUuMDQ2OSA0Mi4yMzUyIDc0LjQ4NzcgNDIuMzUwOSA3My45Mjg0IDQyLjMxMjFDNzMuMzY5MSA0Mi4yNzMzIDcyLjgzMTEgNDIuMDgxNiA3Mi4zNzM0IDQxLjc1NzhMNjIuNTQxMiAzNC44MDc4TDUyLjcwOSA0MS43NTc4QzUyLjI1MTEgNDIuMDgxNCA1MS43MTMgNDIuMjczIDUxLjE1MzUgNDIuMzExNUM1MC41OTQxIDQyLjM1IDUwLjAzNDkgNDIuMjM0IDQ5LjUzNjkgNDEuOTc2MUM0OS4wMzg5IDQxLjcxODIgNDguNjIxNCA0MS4zMjg1IDQ4LjMyOTggNDAuODQ5M0M0OC4wMzgzIDQwLjM3MDIgNDcuODg0IDM5LjgyMDEgNDcuODgzNyAzOS4yNTkyVjBIMTguMTQ1NVYxMThIOTAuMDE4MlYwWiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1LjgwODcyIiB5MT0iMCIgeDI9IjUuODA4NzIiIHkyPSIxMTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjYzLjIiIHkxPSIwIiB4Mj0iNjMuMiIgeTI9IjMzLjI1NDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9IjU0LjA4MTkiIHkxPSIwIiB4Mj0iNTQuMDgxOSIgeTI9IjExOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K";
      },
      66328: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_16.svg?v=valveisgoodatcaching";
      },
      70569: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_17.svg?v=valveisgoodatcaching";
      },
      73161: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgzIiBoZWlnaHQ9IjEwNyIgdmlld0JveD0iMCAwIDE4MyAxMDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjQyLjE2NSIgeT0iNDEuODU3NCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSI2NSIgcng9IjUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS4zMzEgMjYuMTQyNkMxNjEuMzMxIDIzLjM4MTIgMTU5LjA5MiAyMS4xNDI2IDE1Ni4zMzEgMjEuMTQyNkgyNi4xNDI2QzIzLjM4MTIgMjEuMTQyNiAyMS4xNDI2IDIzLjM4MTIgMjEuMTQyNiAyNi4xNDI2VjgwLjcxNEMyMS4xNDI2IDgzLjQ3NTQgMjMuMzgxMiA4NS43MTQgMjYuMTQyNiA4NS43MTRIMjguODg2OUMzMS42NDg0IDg1LjcxNCAzMy44ODY5IDgzLjQ3NTQgMzMuODg2OSA4MC43MTRWMzguMDM3M0MzMy44ODY5IDM1LjI3NTkgMzYuMTI1NSAzMy4wMzczIDM4Ljg4NjkgMzMuMDM3M0gxNTYuMzMxQzE1OS4wOTIgMzMuMDM3MyAxNjEuMzMxIDMwLjc5ODcgMTYxLjMzMSAyOC4wMzczVjI2LjE0MjZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDAuMTg4IDVDMTQwLjE4OCAyLjIzODU4IDEzNy45NDkgMCAxMzUuMTg4IDBINUMyLjIzODU4IDAgMCAyLjIzODU3IDAgNVY1OS41NzE0QzAgNjIuMzMyOSAyLjIzODU4IDY0LjU3MTQgNSA2NC41NzE0SDcuNzQ0MzZDMTAuNTA1OCA2NC41NzE0IDEyLjc0NDQgNjIuMzMyOSAxMi43NDQ0IDU5LjU3MTRWMTYuODk0N0MxMi43NDQ0IDE0LjEzMzMgMTQuOTgyOSAxMS44OTQ3IDE3Ljc0NDQgMTEuODk0N0gxMzUuMTg4QzEzNy45NDkgMTEuODk0NyAxNDAuMTg4IDkuNjU2MTYgMTQwLjE4OCA2Ljg5NDc0VjVaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjExMi4xNjUiIHkxPSI0MS44NTc0IiB4Mj0iMTEyLjE2NSIgeTI9IjEwNi44NTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjkxLjIzNjYiIHkxPSIyMS4xNDI2IiB4Mj0iOTEuMjM2NiIgeTI9Ijg1LjcxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iNzAuMDk0IiB5MT0iMCIgeDI9IjcwLjA5NCIgeTI9IjY0LjU3MTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";
      },
      3786: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_21.svg?v=valveisgoodatcaching";
      },
      95161: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODMiIGhlaWdodD0iMTMwIiB2aWV3Qm94PSIwIDAgODMgMTMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNzguOTIyNSA3LjY2MzE0SDQ3LjM4MjZWNS40NzM2N0M0Ny4zODI2IDIuNDYzMTUgNDQuNzY2MyAwIDQxLjU2ODcgMEMzOC4zNzExIDAgMzUuNzU0OSAyLjQ2MzE1IDM1Ljc1NDkgNS40NzM2N1Y3LjY2MzE0SDQuMjE1MDFDMS44ODk0OSA3LjY2MzE0IDAgOS40NDIwOSAwIDExLjYzMTZWNzQuNzE1N0MwIDc2LjkwNTEgMS44ODk0OSA3OC42ODQxIDQuMjE1MDEgNzguNjg0MUgxOS43NjdMNC42NTEwNSAxMjIuNzQ3QzMuNjMzNjMgMTI1LjYyMSA1LjIzMjQzIDEyOC43NjggOC40MzAwMyAxMjkuNzI2QzExLjYyNzYgMTMwLjY4NCAxNC44MjUyIDEyOS4wNDIgMTUuODQyNiAxMjYuMTY4TDIyLjk2NDYgMTA1LjY0Mkg2MC40NjM2TDY3LjU4NTUgMTI2LjE2OEM2OC4zMTIzIDEyOC40OTUgNzAuNjM3OCAxMzAgNzMuMTA4NyAxMzBDNzMuNjkgMTMwIDc0LjI3MTQgMTI5Ljg2MyA3NC44NTI4IDEyOS43MjZDNzcuOTA1MSAxMjguNzY4IDc5LjY0OTIgMTI1LjYyMSA3OC42MzE4IDEyMi43NDdMNjMuMjI1MiA3OC44MjA5SDc4Ljc3NzFDODEuMTAyNiA3OC44MjA5IDgyLjk5MjEgNzcuMDQyIDgyLjk5MjEgNzQuODUyNVYxMS42MzE2QzgzLjEzNzUgOS40NDIwOSA4MS4yNDggNy42NjMxNCA3OC45MjI1IDcuNjYzMTRaTTQ5Ljg1MzQgMjIuNTc4OUM1My4xOTY0IDIyLjU3ODkgNTUuOTU3OSAyNS4xNzg5IDU1Ljk1NzkgMjguMzI2M0M1NS45NTc5IDMxLjQ3MzYgNTMuMTk2NCAzNC4wNzM2IDQ5Ljg1MzQgMzQuMDczNkM0Ni41MTA1IDM0LjA3MzYgNDMuNzQ4OSAzMS40NzM2IDQzLjc0ODkgMjguMzI2M0M0My43NDg5IDI1LjE3ODkgNDYuNTEwNSAyMi41Nzg5IDQ5Ljg1MzQgMjIuNTc4OVpNMjYuNTk4MiA5NC42OTQ2TDMyLjEyMTMgNzguNjg0MUg1MC44NzA4TDU2LjM5NCA5NC42OTQ2SDI2LjU5ODJaTTY1LjQwNTQgNjEuMTY4M0M2NC44MjQgNjEuOTg5NCA2My45NTE5IDYyLjUzNjcgNjIuOTM0NSA2Mi41MzY3SDIwLjM0ODNDMTkuMzMwOSA2Mi41MzY3IDE4LjMxMzUgNjEuOTg5NCAxNy44Nzc1IDYxLjE2ODNDMTcuMjk2MSA2MC4yMTA0IDE3LjQ0MTQgNTkuMjUyNSAxOC4wMjI4IDU4LjQzMTVMMzIuNTU3MyAzOC4zMTU3QzMzLjU3NDggMzYuODEwNSAzNi4xOTEgMzYuODEwNSAzNy4yMDg0IDM4LjMxNTdMNDUuMzQ3NyA0OS41MzY4TDQ5Ljg1MzQgNDMuNTE1N0M1MC44NzA4IDQyLjAxMDQgNTMuNDg3MSA0Mi4wMTA0IDU0LjUwNDUgNDMuNTE1N0w2NS4yNiA1OC40MzE1QzY1Ljg0MTQgNTkuMjUyNSA2NS44NDE0IDYwLjIxMDQgNjUuNDA1NCA2MS4xNjgzWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI0MS41IiB5MT0iMCIgeDI9IjQxLjUiIHkyPSIxMzAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";
      },
      13416: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_23.svg?v=valveisgoodatcaching";
      },
      2599: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_24.svg?v=valveisgoodatcaching";
      },
      68920: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5IiBoZWlnaHQ9IjEwNyIgdmlld0JveD0iMCAwIDE3OSAxMDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUzLjU5NSA1LjIyNDI4QzE1My4yNDQgMy45MTIzNyAxNTIuMDU2IDMgMTUwLjY5NyAzSDk3Qzk1LjM0MzEgMyA5NCA0LjM0MzE1IDk0IDZWMTJDOTQgMTMuNjU2OSA5NS4zNDMxIDE1IDk3IDE1SDEyNUMxMjYuNjU3IDE1IDEyOCAxNi4zNDMxIDEyOCAxOFY5OUMxMjggMTAwLjY1NyAxMjkuMzQzIDEwMiAxMzEgMTAySDE3NS41OTFDMTc3LjU2NCAxMDIgMTc4Ljk5OSAxMDAuMTI5IDE3OC40ODkgOTguMjI0M0wxNTMuNTk1IDUuMjI0MjhaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KPHBhdGggZD0iTTExNS40NTEgMjNINThDNTkuODEyNiA0Mi44Mjc5IDY2LjAyMDYgNDguMTk1IDcxLjEyOTUgNTIuNjAyM0M3NS4zNTM0IDU2LjI0NjQgODEuMTM5IDYxLjIzNTcgODEuMTM5IDcxLjA5NDhDODEuMTM5IDgyLjU0NyA3Ni44OTI2IDkzLjAxNDIgNjkuOTE0NCAxMDFIMTE1LjQ1MUMxMTcuNDExIDEwMSAxMTkgOTkuMzk4NSAxMTkgOTcuNDIyN1YyNi41NzczQzExOSAyNC42MDE0IDExNy40MTIgMjMgMTE1LjQ1MSAyM1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPgo8cGF0aCBkPSJNNDguMDQ2OCAxNC45MTQ5SDQ4LjUwMjhDNTAuNjkyOCAxNC45MTQ5IDUyLjQ2ODggMTMuMzEyNCA1Mi40Njg4IDExLjMzOFYzLjU3Njg1QzUyLjQ2ODggMS42MDEyIDUwLjY5MjggMCA0OC41MDI4IDBIMjMuNDk3MkMyMS4zMDcyIDAgMTkuNTMxMiAxLjYwMTIgMTkuNTMxMiAzLjU3Njg1VjExLjMzOEMxOS41MzEyIDEzLjMxMjQgMjEuMzA3MiAxNC45MTQ5IDIzLjQ5NzIgMTQuOTE0OUgyMy45NTMyQzIyLjgyNzYgNjMuNzc1OSAwIDU2LjE5NTQgMCA3MS4zMzg1QzAgOTEuMDMyIDE2LjExNzIgMTA3IDM2IDEwN0M1NS44ODI4IDEwNyA3MiA5MS4wMzIgNzIgNzEuMzM4NUM3MiA1Ni4xOTU0IDQ5LjE3MzYgNjMuNzc3MSA0OC4wNDY4IDE0LjkxNDlaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEzNi4yOTciIHkxPSIzIiB4Mj0iMTM2LjI5NyIgeTI9IjEwMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iODguNSIgeTE9IjIzIiB4Mj0iODguNSIgeTI9IjEwMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iMzYiIHkxPSIwIiB4Mj0iMzYiIHkyPSIxMDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";
      },
      58103: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_4.svg?v=valveisgoodatcaching";
      },
      43718: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_5.svg?v=valveisgoodatcaching";
      },
      66149: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA2IiBoZWlnaHQ9IjUyIiB2aWV3Qm94PSIwIDAgMjA2IDUyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTMyLjg4MSA4LjgxNEMxMzQuNDI3IDEzLjIxMDIgMTM0LjY4NCAxOS40MTY2IDEyOS43OSAyNC4zMjk5TDEwMyA1Mkw3Ni4yMSAyNC4zMjk5QzcxLjMxNTcgMTkuNDE2NiA3MS41NzMzIDEyLjk1MTYgNzMuMTE4OSA4LjgxNEM3NS4xNzk2IDMuNjQyMDMgNzkuODE2NCAwLjI4MDIzOCA4NS4yMjU5IDAuMDIxNjM5NEM4NS40ODM1IDAuMDIxNjM5NCA4NS43NDExIDAuMDIxNjM5NCA4Ni4yNTYzIDAuMDIxNjM5NEM5MS4xNTA2IDAuMDIxNjM5NCA5NS43ODczIDIuMDkwNDMgOTkuMzkzNiA1LjcxMDgyQzEwMS40NTQgNy43Nzk2MSAxMDQuODAzIDcuNzc5NjEgMTA2Ljg2NCA1LjcxMDgyQzExMC40NyAxLjgzMTgzIDExNS42MjIgMC4wMjE2Mzk0IDEyMC43NzQgMC4wMjE2Mzk0QzEyNi4xODQgMC4yODAyMzggMTMwLjgyIDMuNjQyMDMgMTMyLjg4MSA4LjgxNFpNNDguNjQ3MyAwLjAyMTYzOTRDNDMuNDk1MyAtMC4yMzY5NTkgMzguMzQzNCAxLjgzMTgzIDM0LjczNzEgNS43MTA4MkMzMi42NzYzIDcuNzc5NjEgMjkuMzI3NiA3Ljc3OTYxIDI3LjI2NjggNS43MTA4MkMyMy45MTggMi4wOTA0MyAxOS4yODEzIDAuMDIxNjM5NCAxNC4xMjk0IDAuMDIxNjM5NEMxMy44NzE4IDAuMDIxNjM5NCAxMy42MTQyIDAuMDIxNjM5NCAxMy4wOTkgMC4wMjE2Mzk0QzcuNDMxOSAwLjI4MDIzOCAzLjA1Mjc3IDMuNjQyMDMgMC45OTIwMDIgOC44MTRDLTAuNTUzNTc0IDEzLjIxMDIgLTAuODExMTY4IDE5LjQxNjYgNC4wODMxNiAyNC4zMjk5TDMwLjg3MzEgNTJMNTcuNjYzMSAyNC41ODg1QzYyLjU1NzQgMTkuNjc1MSA2Mi4yOTk4IDEzLjIxMDIgNjAuNzU0MyA5LjA3MjZDNTguNjkzNSAzLjY0MjAyIDU0LjA1NjggMC4yODAyMzggNDguNjQ3MyAwLjAyMTYzOTRaTTIwNS4wMDggOC44MTRDMjAyLjk0NyAzLjY0MjAzIDE5OC4zMTEgMC4yODAyMzggMTkyLjkwMSAwLjAyMTYzOTRDMTg3Ljc0OSAtMC4yMzY5NTkgMTgyLjU5NyAxLjgzMTgzIDE3OC45OTEgNS43MTA4MkMxNzYuOTMgNy43Nzk2MSAxNzMuNTgxIDcuNzc5NjEgMTcxLjUyMSA1LjcxMDgyQzE2OC4xNzIgMi4wOTA0MyAxNjMuNTM1IDAuMDIxNjM5NCAxNTguMzgzIDAuMDIxNjM5NEMxNTguMTI2IDAuMDIxNjM5NCAxNTcuODY4IDAuMDIxNjM5NCAxNTcuMzUzIDAuMDIxNjM5NEMxNTEuNjg2IDAuMjgwMjM4IDE0Ny4zMDcgMy42NDIwMyAxNDUuMjQ2IDguODE0QzE0My43IDEzLjIxMDIgMTQzLjQ0MyAxOS40MTY2IDE0OC4zMzcgMjQuMzI5OUwxNzUuMTI3IDUyTDIwMS45MTcgMjQuNTg4NUMyMDYuODExIDE5LjQxNjUgMjA2LjU1NCAxMy4yMTAyIDIwNS4wMDggOC44MTRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEwMyIgeTE9IjAiIHgyPSIxMDMiIHkyPSI1MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K";
      },
      14980: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_7.svg?v=valveisgoodatcaching";
      },
      26675: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAyIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMjAyIDc2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgMEMyLjIzODI4IDAgMCAyLjIzODUzIDAgNVY3MUMwIDczLjc2MTUgMi4yMzgyOCA3NiA1IDc2SDE5N0MxOTkuNzYyIDc2IDIwMiA3My43NjE1IDIwMiA3MVY1QzIwMiAyLjIzODUzIDE5OS43NjIgMCAxOTcgMEg1Wk0yNyAxOC4xNDE0SDE4VjEzSDQwLjQzNDZWMTguMTQxNEgzMlY1NS44NTg2SDQwLjQzNTVWNjFIMzJIMjdIMThWNTUuODU4NkgyN1YxOC4xNDE0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMDEiIHkxPSIwIiB4Mj0iMTAxIiB5Mj0iNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";
      },
      21506: (W, E, s) => {
        "use strict";
        s.r(E), s.d(E, { default: () => e });
        const e =
          s.p +
          "images/applications/store/icon_showcase_9.svg?v=valveisgoodatcaching";
      },
      88560: (W, E, s) => {
        var e = {
          "./icon_showcase_1.svg": 5050,
          "./icon_showcase_10.svg": 41126,
          "./icon_showcase_11.svg": 55511,
          "./icon_showcase_12.svg": 12388,
          "./icon_showcase_13.svg": 63557,
          "./icon_showcase_14.svg": 2458,
          "./icon_showcase_15.svg": 17067,
          "./icon_showcase_16.svg": 66328,
          "./icon_showcase_17.svg": 70569,
          "./icon_showcase_2.svg": 73161,
          "./icon_showcase_21.svg": 3786,
          "./icon_showcase_22.svg": 95161,
          "./icon_showcase_23.svg": 13416,
          "./icon_showcase_24.svg": 2599,
          "./icon_showcase_3.svg": 68920,
          "./icon_showcase_4.svg": 58103,
          "./icon_showcase_5.svg": 43718,
          "./icon_showcase_6.svg": 66149,
          "./icon_showcase_7.svg": 14980,
          "./icon_showcase_8.svg": 26675,
          "./icon_showcase_9.svg": 21506,
        };
        function m(S) {
          var L = u(S);
          return s(L);
        }
        function u(S) {
          if (!s.o(e, S)) {
            var L = new Error("Cannot find module '" + S + "'");
            throw ((L.code = "MODULE_NOT_FOUND"), L);
          }
          return e[S];
        }
        (m.keys = function () {
          return Object.keys(e);
        }),
          (m.resolve = u),
          (W.exports = m),
          (m.id = 88560);
      },
      94719: (W, E, s) => {
        var e = {
          "./loyalty_arabic.json": [20242, 49889],
          "./loyalty_brazilian.json": [24948, 34039],
          "./loyalty_bulgarian.json": [81635, 42960],
          "./loyalty_czech.json": [54545, 87138],
          "./loyalty_danish.json": [99219, 41216],
          "./loyalty_dutch.json": [69004, 18639],
          "./loyalty_english.json": [13706, 35961],
          "./loyalty_finnish.json": [30625, 43730],
          "./loyalty_french.json": [98154, 63449],
          "./loyalty_german.json": [38388, 75831],
          "./loyalty_greek.json": [34310, 33397],
          "./loyalty_hungarian.json": [53887, 44156],
          "./loyalty_indonesian.json": [55190, 65189],
          "./loyalty_italian.json": [17154, 46417],
          "./loyalty_japanese.json": [57277, 8718],
          "./loyalty_koreana.json": [1021, 86958],
          "./loyalty_latam.json": [20341, 47174],
          "./loyalty_malay.json": [44598, 10597],
          "./loyalty_norwegian.json": [65014, 55397],
          "./loyalty_polish.json": [68083, 34112],
          "./loyalty_portuguese.json": [14079, 7772],
          "./loyalty_romanian.json": [81453, 31998],
          "./loyalty_russian.json": [85444, 10516],
          "./loyalty_sc_schinese.json": [41693, 25134],
          "./loyalty_schinese.json": [61118, 91853],
          "./loyalty_spanish.json": [50178, 84113],
          "./loyalty_swedish.json": [30251, 96664],
          "./loyalty_tchinese.json": [45157, 24150],
          "./loyalty_thai.json": [22296, 60651],
          "./loyalty_turkish.json": [15642, 57929],
          "./loyalty_ukrainian.json": [57948, 72575],
          "./loyalty_vietnamese.json": [79037, 41838],
        };
        function m(u) {
          if (!s.o(e, u))
            return Promise.resolve().then(() => {
              var h = new Error("Cannot find module '" + u + "'");
              throw ((h.code = "MODULE_NOT_FOUND"), h);
            });
          var S = e[u],
            L = S[0];
          return s.e(S[1]).then(() => s.t(L, 19));
        }
        (m.keys = () => Object.keys(e)), (m.id = 94719), (W.exports = m);
      },
      94114: (W, E, s) => {
        var e = {
          "./loyalty_arabic.json": [20242, 49889],
          "./loyalty_brazilian.json": [24948, 34039],
          "./loyalty_bulgarian.json": [81635, 42960],
          "./loyalty_czech.json": [54545, 87138],
          "./loyalty_danish.json": [99219, 41216],
          "./loyalty_dutch.json": [69004, 18639],
          "./loyalty_english.json": [13706, 35961],
          "./loyalty_finnish.json": [30625, 43730],
          "./loyalty_french.json": [98154, 63449],
          "./loyalty_german.json": [38388, 75831],
          "./loyalty_greek.json": [34310, 33397],
          "./loyalty_hungarian.json": [53887, 44156],
          "./loyalty_indonesian.json": [55190, 65189],
          "./loyalty_italian.json": [17154, 46417],
          "./loyalty_japanese.json": [57277, 8718],
          "./loyalty_koreana.json": [1021, 86958],
          "./loyalty_latam.json": [20341, 47174],
          "./loyalty_malay.json": [44598, 10597],
          "./loyalty_norwegian.json": [65014, 55397],
          "./loyalty_polish.json": [68083, 34112],
          "./loyalty_portuguese.json": [14079, 7772],
          "./loyalty_romanian.json": [81453, 31998],
          "./loyalty_russian.json": [85444, 10516],
          "./loyalty_sc_schinese.json": [41693, 25134],
          "./loyalty_schinese.json": [61118, 91853],
          "./loyalty_spanish.json": [50178, 84113],
          "./loyalty_swedish.json": [30251, 96664],
          "./loyalty_tchinese.json": [45157, 24150],
          "./loyalty_thai.json": [22296, 60651],
          "./loyalty_turkish.json": [15642, 57929],
          "./loyalty_ukrainian.json": [57948, 72575],
          "./loyalty_vietnamese.json": [79037, 41838],
        };
        function m(u) {
          if (!s.o(e, u))
            return Promise.resolve().then(() => {
              var h = new Error("Cannot find module '" + u + "'");
              throw ((h.code = "MODULE_NOT_FOUND"), h);
            });
          var S = e[u],
            L = S[0];
          return s.e(S[1]).then(() => s.t(L, 19));
        }
        (m.keys = () => Object.keys(e)), (m.id = 94114), (W.exports = m);
      },
    },
  ]);
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "+KBl": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "CuratorReviewList", function () {
          return B;
        });
      var n = a("TyAF"),
        r = a("q1tI"),
        o = a.n(r),
        i = a("rcjX"),
        c = a("mgoM"),
        l = a("kyHq"),
        s = a("av+R"),
        u = a("ykc/"),
        m = a("qDk6"),
        d = a("+VX6"),
        p = (a("3+zv"), a("Xhj9"), a("5eAM")),
        _ = a("VQ2A"),
        v = a("UCyf"),
        E = a("hwrv"),
        R = a("gOcu"),
        C = a("ee7K"),
        I = a("Fmfl"),
        g = a("gyoR"),
        f = a("5L1o"),
        b = a("4pOC"),
        T = a("0OaU"),
        h = a("3Gzo"),
        S = a("j54C"),
        y = a("exH9"),
        O = a("TLQK"),
        w = a("IzPI"),
        L = a("lkRc"),
        D = a("pcg8"),
        N = a.n(D),
        G = (a("TQGK"), a("477j")),
        A = a("C4Er");
      function M(e) {
        var t = e.clanInfo,
          a = Object(L.h)("curator_header", "application_config"),
          n = a.curator_link,
          r = a.curator_medium_avatar;
        return o.a.createElement(
          m.a,
          {
            className: "page_content_ctn",
            "flow-children": "column",
            autoFocus: !0,
          },
          o.a.createElement(
            "div",
            { className: "page_content" },
            o.a.createElement(
              m.a,
              { className: "list_header_area", "flow-children": "row" },
              o.a.createElement(
                "div",
                { className: "curator_avatar_image" },
                o.a.createElement(
                  s.c,
                  { href: n },
                  o.a.createElement("img", {
                    className: "curator_avatar",
                    src: r,
                  })
                )
              ),
              o.a.createElement(
                "div",
                { className: "curator_details" },
                o.a.createElement(G.a, {
                  className: A.BreadContainer,
                  crumbs: Object(L.h)("breadcrumbs", "application_config"),
                }),
                o.a.createElement(
                  s.c,
                  { className: "pageheader curator_name", href: n },
                  Object(O.f)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      a("1v2s");
      t.default = function (e) {
        var t = Object(E.a)();
        return o.a.createElement(
          u.a,
          { navID: "StoreCuratorPageRoot", NavigationManager: t },
          o.a.createElement(B, { listid: e.listid })
        );
      };
      function B(e) {
        var t = parseInt(
            Object(L.h)("curator_account_id", "application_config")
          ),
          a = Object(v.f)(t),
          n = Object(v.g)(null == a ? void 0 : a.clanSteamID, e.listid),
          r = Object(v.e)(n),
          i = o.a.useState(null),
          c = i[0],
          l = i[1],
          u = o.a.useState(0),
          d = u[0],
          _ = u[1];
        if (
          (o.a.useEffect(
            function () {
              var e;
              if (n) {
                var t = Object(v.a)(n)
                  ? null === (e = n.apps) || void 0 === e
                    ? void 0
                    : e.filter(function (e) {
                        var t;
                        return null == r
                          ? void 0
                          : r.has(
                              null === (t = e.recommended_app) || void 0 === t
                                ? void 0
                                : t.appid
                            );
                      })
                  : n.apps;
                _((null == t ? void 0 : t.length) || 0),
                  C.a
                    .Get()
                    .HintLoad()
                    .then(function () {
                      p.a
                        .LoadAppLinkInfo(
                          t.map(function (e) {
                            return e.recommended_app.appid;
                          })
                        )
                        .then(function () {
                          l(
                            t.filter(function (e) {
                              return !Object(g.d)(
                                p.a.GetAppLinkInfo(e.recommended_app.appid)
                              );
                            })
                          );
                        })
                        .catch(function () {
                          return l([]);
                        });
                    });
              }
            },
            [n, r]
          ),
          !n)
        )
          return null;
        if (null == c)
          return o.a.createElement(T.a, {
            string: Object(O.f)("#Loading"),
            position: "center",
            size: "medium",
          });
        var E = 1 == n.list_type;
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(M, { clanInfo: a }),
          o.a.createElement(
            "div",
            { className: "page_content_ctn grayscale" },
            o.a.createElement(
              "div",
              { className: "page_content" },
              o.a.createElement(
                "div",
                { className: N.a.CuratorListCtn },
                o.a.createElement(F, { listDetails: n }),
                o.a.createElement(
                  m.a,
                  {
                    className: Object(y.a)(
                      N.a.CuratorList,
                      E && N.a.CuratorListGrid
                    ),
                    "flow-children": "grid",
                  },
                  c.map(function (e, t) {
                    return o.a.createElement(j, {
                      key: "rec_" + e.recommended_app.appid,
                      item: e,
                      listDetails: n,
                      bAutoFocus: 0 == t,
                    });
                  })
                ),
                Boolean(d > c.length) &&
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "span",
                      null,
                      Object(O.l)("#SteamCurator_Hidden", d - c.length),
                      " "
                    ),
                    o.a.createElement(
                      s.c,
                      { href: L.d.STORE_BASE_URL + "account/preferences/" },
                      Object(O.f)("#SteamCurator_Setting")
                    )
                  ),
                o.a.createElement(
                  "div",
                  { className: N.a.CuratorMoreCtn },
                  o.a.createElement(
                    "h2",
                    null,
                    Object(O.f)("#SteamCurator_ExploreMoreTitle")
                  ),
                  o.a.createElement(
                    s.c,
                    { href: a.vanity_url },
                    Object(O.m)("#SteamCurator_MoreReviews", a.group_name)
                  )
                )
              )
            )
          )
        );
      }
      function F(e) {
        var t = e.listDetails,
          a = Object(v.d)(t),
          n = Object(L.h)("showlisttitle", "application_config"),
          r = Object(L.h)("titleareaheight", "application_config"),
          i =
            t.list_jsondata.youtube_link &&
            Object(d.b)(t.list_jsondata.youtube_link),
          l = Object(c.g)(L.d.LANGUAGE),
          u = O.a.GetWithFallback(t.localized_flat_title, l),
          m = O.a.GetWithFallback(t.localized_flat_blurb, l),
          p = O.a.GetWithFallback(t.localized_flat_link, l),
          _ =
            a &&
            a.GetImageURL(
              Object(h.a)() ? "product_mobile_banner" : "product_banner",
              l
            );
        return o.a.createElement(
          "div",
          { className: N.a.TopReviewInfo },
          Boolean(_) &&
            o.a.createElement(
              s.c,
              { href: a.GetSaleURL() },
              o.a.createElement("img", { className: N.a.SaleBanner, src: _ })
            ),
          n && u && o.a.createElement("div", { className: N.a.Title }, u),
          n && m && o.a.createElement("div", { className: N.a.Blurb }, m),
          r > 0 && o.a.createElement("div", { style: { height: r } }),
          i &&
            o.a.createElement(
              "div",
              { className: N.a.VideoReviewCtn },
              o.a.createElement(S.b, {
                video: i.strVideoID,
                startSeconds: i.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: N.a.YouTubePreviewImage,
              })
            ),
          p && o.a.createElement(K, { url: p })
        );
      }
      var j = Object(n.a)(function (e) {
        var t,
          a,
          n = e.item,
          r = e.listDetails,
          i = e.bAutoFocus,
          c = parseInt(Object(L.h)("curator_account_id", "application_config")),
          s = Object(v.f)(c);
        if (
          !s ||
          !(null === (t = null == n ? void 0 : n.recommended_app) ||
          void 0 === t
            ? void 0
            : t.appid)
        )
          return null;
        var u = n.recommended_app,
          _ = u.appid,
          E = u.link_url,
          C = u.blurb,
          I = u.time_recommended,
          g = u.recommendation_state,
          f = p.a.GetAppLinkInfo(_);
        if (!f) return null;
        if (!Object(l.b)(f.type)) return null;
        var T = s.is_creator_home,
          h =
            null === (a = r.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[_],
          S = E && Object(d.b)(E),
          y = C != v.c && C,
          w = R.a.Get().BHasDemoAppID(_),
          D = null == h ? void 0 : h.img_url,
          G =
            "curator_clanid=" + s.clanAccountID + "&curator_listid=" + r.listid;
        return o.a.createElement(
          m.a,
          { className: N.a.CuratorReview, autoFocus: i },
          o.a.createElement(
            "div",
            { className: N.a.CapsuleCtn },
            S
              ? o.a.createElement(U, {
                  strVideoID: S.strVideoID,
                  nStartSeconds: S.nStartSeconds,
                  appInfo: f,
                  strImgOverrideUrl: D,
                  bShowDemoButton: w,
                  strExtraParams: G,
                })
              : o.a.createElement(b.b, {
                  imageType: "header",
                  bAutoFocus: i,
                  capsule: f,
                  bShowDemoButton: w,
                  strExtraParams: G,
                })
          ),
          o.a.createElement(
            "div",
            { className: N.a.ReviewTextSection },
            o.a.createElement(
              "div",
              { className: N.a.GameTitle },
              null == f ? void 0 : f.name
            ),
            o.a.createElement(
              "div",
              { className: N.a.RecommendationTypeAndDate },
              o.a.createElement(P, { type: g }),
              o.a.createElement(
                "div",
                { className: N.a.ReviewDate },
                T ? f.release : Object(O.n)(I)
              )
            ),
            Boolean(y) &&
              o.a.createElement(
                "div",
                { className: N.a.ReviewBlurb },
                Object(O.f)("#SteamCurator_ReviewTextQuoted", y)
              ),
            Boolean(E) && o.a.createElement(K, { url: E })
          )
        );
      });
      function U(e) {
        var t = e.strVideoID,
          a = e.nStartSeconds,
          n = e.appInfo,
          r = e.strImgOverrideUrl,
          i = e.bShowDemoButton,
          c = e.strExtraParams;
        return o.a.createElement(
          "div",
          { className: N.a.YouTubeCapsule },
          o.a.createElement(
            "div",
            { className: N.a.YouTubeCtn },
            o.a.createElement(S.b, {
              video: t,
              startSeconds: a,
              autoplay: !0,
              autopause: !0,
              showFullscreenBtn: !0,
              controls: !0,
              preloadYoutubeScripts: !0,
              playsInline: !0,
              imageClassnames: N.a.YouTubePreviewImage,
              altImg: r,
            })
          ),
          o.a.createElement(
            "div",
            { className: N.a.YouTubeCapsuleBottomBar },
            o.a.createElement(
              "div",
              { className: N.a.GameImageCtn },
              o.a.createElement(
                I.d,
                {
                  item: n,
                  bShowDemoButton: i,
                  nDelayShowMs: 300,
                  strExtraParams: c,
                  hoverProps: {
                    direction: "overlay-center",
                    style: { minWidth: "300px" },
                  },
                },
                o.a.createElement("img", {
                  className: N.a.GameImage,
                  src: null == n ? void 0 : n.library_asset,
                })
              )
            ),
            o.a.createElement(f.c, { info: n, strClassName: N.a.FullWidth })
          )
        );
      }
      function P(e) {
        switch (e.type) {
          case 0:
            return o.a.createElement(
              "div",
              { className: N.a.Recommended },
              Object(O.f)("#SteamCurator_Recommended")
            );
          case 1:
            return o.a.createElement(
              "div",
              { className: N.a.NotRecommended },
              Object(O.f)("#SteamCurator_NotRecommended")
            );
          case 2:
            return o.a.createElement(
              "div",
              { className: N.a.Informational },
              Object(O.f)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function K(e) {
        var t = Object(_.d)(e.url);
        Object(i.b)(t) &&
          (t =
            (L.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            L.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        var a = Object(w.f)(e.url),
          n = Object(d.a)(e.url);
        return o.a.createElement(
          "div",
          { className: N.a.FullReviewLink },
          o.a.createElement(
            s.c,
            {
              className: N.a.FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
              preferredFocus: !1,
              autoFocus: !1,
            },
            Object(O.f)(
              n
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          o.a.createElement(
            "div",
            { className: N.a.FullReviewDomain },
            Object(O.f)("#SteamCurator_ReviewLinkHostnameBracketed", a)
          )
        );
      }
    },
    "1v2s": function (e, t, a) {
      e.exports = {
        PillTabMenuCtn: "deckmenu_PillTabMenuCtn_VkRuR",
        PillTabMenuItem: "deckmenu_PillTabMenuItem_2YcDp",
        Active: "deckmenu_Active_1uLVq",
        CartPillTabMenuItem: "deckmenu_CartPillTabMenuItem_2tbNf",
      };
    },
    C4Er: function (e, t, a) {
      e.exports = { BreadContainer: "curatorminiheader_BreadContainer_GkVFI" };
    },
    hwrv: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return I;
      });
      var n,
        r = a("mrSG"),
        o = a("rHSA"),
        i = a("XxJJ"),
        c = [
          { index: 0, type: o.a.OK, category: "action" },
          { index: 1, type: o.a.CANCEL, category: "action" },
          { index: 2, type: o.a.SECONDARY, category: "action" },
          { index: 3, type: o.a.OPTIONS, category: "action" },
          { index: 4, type: o.a.BUMPER_LEFT, category: "action" },
          { index: 5, type: o.a.BUMPER_RIGHT, category: "action" },
          { index: 6, type: o.a.TRIGGER_LEFT, category: "action" },
          { index: 7, type: o.a.TRIGGER_RIGHT, category: "action" },
          { index: 8, type: o.a.SELECT, category: "action" },
          { index: 9, type: o.a.START, category: "action" },
          { index: 10, type: o.a.LSTICK_CLICK, category: "action" },
          { index: 11, type: o.a.RSTICK_CLICK, category: "action" },
          { index: 12, type: o.a.DIR_UP, category: "navigation" },
          { index: 13, type: o.a.DIR_DOWN, category: "navigation" },
          { index: 14, type: o.a.DIR_LEFT, category: "navigation" },
          { index: 15, type: o.a.DIR_RIGHT, category: "navigation" },
          { index: 16, type: o.a.STEAM_GUIDE, category: "action" },
          { index: 17, type: o.a.SELECT, category: "action" },
        ],
        l = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgGamepadStatus = []),
              t.SetSourceType(o.b.GAMEPAD),
              window.addEventListener("gamepadconnected", function (e) {
                t.m_bGamepadDetected ||
                  (t.OnGamepadDetected(), t.PollGamepads());
              }),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.PollGamepads = function () {
              for (
                var e = navigator.getGamepads(), t = !1, a = 0;
                a < e.length;
                a++
              ) {
                var n = e[a];
                if (n) {
                  this.m_rgGamepadStatus[a] ||
                    (this.m_rgGamepadStatus[a] = { buttons: [] });
                  for (
                    var r = this.m_rgGamepadStatus[a], o = 0;
                    o < c.length;
                    o++
                  ) {
                    var i = c[o],
                      l = i.index;
                    n.buttons[l] &&
                      (n.buttons[l].pressed
                        ? ((t = !0),
                          r.buttons[l] ||
                            ((r.buttons[l] = !0), this.OnButtonDown(i.type)))
                        : r.buttons[l] &&
                          (this.OnButtonUp(i.type), (r.buttons[l] = !1)));
                  }
                }
              }
              document.hasFocus() || t
                ? requestAnimationFrame(this.PollGamepads)
                : (console.log("Lost focus - suspending gamepad polling"),
                  window.addEventListener(
                    "focusin",
                    this.OnWindowRegainedFocus
                  ));
            }),
            (t.prototype.OnWindowRegainedFocus = function () {
              window.removeEventListener("focusin", this.OnWindowRegainedFocus),
                this.PollGamepads();
            }),
            Object(r.c)([i.a], t.prototype, "PollGamepads", null),
            Object(r.c)([i.a], t.prototype, "OnWindowRegainedFocus", null),
            t
          );
        })(o.c),
        s = a("kyHq"),
        u = {
          A: o.a.OK,
          B: o.a.CANCEL,
          X: o.a.SECONDARY,
          Y: o.a.OPTIONS,
          SELECT: o.a.SELECT,
          START: o.a.START,
          LSHOULDER: o.a.BUMPER_LEFT,
          RSHOULDER: o.a.BUMPER_RIGHT,
          LTRIGGER: o.a.TRIGGER_LEFT,
          RTRIGGER: o.a.TRIGGER_RIGHT,
          LEFTSTICK_UP: o.a.DIR_UP,
          LEFTSTICK_RIGHT: o.a.DIR_RIGHT,
          LEFTSTICK_DOWN: o.a.DIR_DOWN,
          LEFTSTICK_LEFT: o.a.DIR_LEFT,
          LEFTSTICK_CLICK: o.a.LSTICK_CLICK,
          RIGHTSTICK_CLICK: o.a.RSTICK_CLICK,
          LeftStick: o.a.LSTICK_TOUCH,
          RightStick: o.a.RSTICK_TOUCH,
          LeftTrackpad: o.a.LPAD_TOUCH,
          LeftTrackpadClick: o.a.LPAD_CLICK,
          RightTrackpad: o.a.RPAD_TOUCH,
          RightTrackpadClick: o.a.RPAD_CLICK,
          RearLeftUpper: o.a.REAR_LEFT_UPPER,
          RearLeftLower: o.a.REAR_LEFT_LOWER,
          RearRightUpper: o.a.REAR_RIGHT_UPPER,
          RearRightLower: o.a.REAR_RIGHT_LOWER,
        },
        m =
          (((n = {})[s.h.SystemKey0] = o.a.STEAM_GUIDE),
          (n[s.h.SystemKey1] = o.a.STEAM_QUICK_MENU),
          n),
        d = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.m_rgControllers = new Map()),
              "undefined" != typeof SteamClient &&
                ((t.m_hUnregisterControllerInput = SteamClient.Input.RegisterForControllerInputMessages(
                  t.HandleControllerInputMessages
                )),
                SteamClient.System.UI.RegisterForSystemKeyEvents(
                  t.HandleSystemKeyEvents
                )),
              t.SetSourceType(o.b.GAMEPAD),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.HandleSystemKeyEvents = function (e) {
              var t = m[e.eKey];
              t && this.OnSystemButtonPress(t, e.nControllerIndex);
            }),
            (t.prototype.OnSystemButtonPress = function (e, t) {
              this.OnButtonDown(e, t), this.OnButtonUp(e, t);
            }),
            (t.prototype.GetController = function (e) {
              var t = this.m_rgControllers.get(e);
              return (
                t ||
                  ((t = { activeButtons: {} }), this.m_rgControllers.set(e, t)),
                t
              );
            }),
            (t.prototype.HandleControllerInputMessages = function (e) {
              for (var t = 0, a = e; t < a.length; t++) {
                var n = a[t],
                  r = u[n.strActionName];
                if (null != r) {
                  var o = this.GetController(n.nController);
                  n.bState && !o.activeButtons[r]
                    ? ((o.activeButtons[r] = !0),
                      this.OnButtonDown(r, n.nController))
                    : !n.bState &&
                      o.activeButtons[r] &&
                      ((o.activeButtons[r] = !1),
                      this.OnButtonUp(r, n.nController));
                }
              }
            }),
            Object(r.c)([i.a], t.prototype, "HandleSystemKeyEvents", null),
            Object(r.c)(
              [i.a],
              t.prototype,
              "HandleControllerInputMessages",
              null
            ),
            t
          );
        })(o.c),
        p = a("X3Ds"),
        _ = (function (e) {
          function t(t) {
            var a = e.call(this) || this;
            return (
              (a.m_lastButtonDown = o.a.INVALID),
              a.SetSourceType(o.b.KEYBOARD),
              t.addEventListener("keydown", a.OnKeyDown),
              t.addEventListener("keyup", a.OnKeyUp),
              t.addEventListener("blur", a.Reset),
              a
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnKeyDown = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                t != this.m_lastButtonDown &&
                (this.Reset(),
                this.OnButtonDown(t),
                (this.m_lastButtonDown = t),
                e.preventDefault());
            }),
            (t.prototype.OnKeyUp = function (e) {
              var t = this.TranslateKey(e);
              t != o.a.INVALID &&
                (this.OnButtonUp(t),
                (this.m_lastButtonDown = o.a.INVALID),
                e.preventDefault());
            }),
            (t.prototype.Reset = function () {
              this.m_lastButtonDown != o.a.INVALID &&
                (this.OnButtonUp(this.m_lastButtonDown),
                (this.m_lastButtonDown = o.a.INVALID));
            }),
            (t.prototype.TranslateKey = function (e) {
              var t = e.code,
                a = e.ctrlKey,
                n =
                  p.q(e.target) &&
                  ("INPUT" === e.target.nodeName ||
                    "TEXTAREA" === e.target.nodeName);
              if (a)
                switch (t) {
                  case "Digit1":
                    return o.a.STEAM_GUIDE;
                  case "Digit2":
                    return o.a.STEAM_QUICK_MENU;
                  case "Digit3":
                    return o.a.SELECT;
                  case "Digit4":
                    return o.a.BUMPER_LEFT;
                  case "Digit5":
                    return o.a.BUMPER_RIGHT;
                  case "Digit6":
                    return o.a.LSTICK_CLICK;
                  case "Digit7":
                    return o.a.RSTICK_CLICK;
                  case "Digit8":
                    return o.a.OPTIONS;
                  case "Digit9":
                    return o.a.SELECT;
                  case "Digit0":
                    return o.a.START;
                }
              switch (t) {
                case "Escape":
                  return o.a.CANCEL;
                case "Enter":
                  return n ? o.a.INVALID : o.a.OK;
                case "Backspace":
                  return n ? o.a.INVALID : o.a.SECONDARY;
                case "ArrowUp":
                  return o.a.DIR_UP;
                case "ArrowDown":
                  return o.a.DIR_DOWN;
                case "ArrowLeft":
                  return o.a.DIR_LEFT;
                case "ArrowRight":
                  return o.a.DIR_RIGHT;
              }
              return o.a.INVALID;
            }),
            Object(r.c)([i.a], t.prototype, "OnKeyDown", null),
            Object(r.c)([i.a], t.prototype, "OnKeyUp", null),
            Object(r.c)([i.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        v = (function (e) {
          function t(t) {
            var a = e.call(this) || this;
            return (
              (a.m_nAccumulatedMouseMovement = 0),
              (a.m_bFirstMouseUpdate = !0),
              a.SetSourceType(o.b.MOUSE),
              t.addEventListener("mousedown", a.OnMouseDown),
              t.addEventListener("mousemove", a.OnMouseMove),
              t.addEventListener("blur", a.Reset),
              a
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnMouseDown = function (e) {
              e.defaultPrevented || this.OnNavigationTypeChanged(o.b.MOUSE);
            }),
            (t.prototype.OnMouseMove = function (e) {
              if (!e.defaultPrevented) {
                if (this.m_bFirstMouseUpdate)
                  return (
                    (this.m_nLastScreenX = e.screenX),
                    (this.m_nLastScreenY = e.screenY),
                    void (this.m_bFirstMouseUpdate = !1)
                  );
                (this.m_nAccumulatedMouseMovement +=
                  Math.abs(e.screenX - this.m_nLastScreenX) +
                  Math.abs(e.screenY - this.m_nLastScreenY)),
                  this.m_nAccumulatedMouseMovement > 500 &&
                    (this.Reset(), this.OnNavigationTypeChanged(o.b.MOUSE));
              }
            }),
            (t.prototype.Reset = function () {
              (this.m_nAccumulatedMouseMovement = 0),
                (this.m_bFirstMouseUpdate = !0);
            }),
            Object(r.c)([i.a], t.prototype, "OnMouseDown", null),
            Object(r.c)([i.a], t.prototype, "OnMouseMove", null),
            Object(r.c)([i.a], t.prototype, "Reset", null),
            t
          );
        })(o.c),
        E = a("NxAk"),
        R = a("lkRc"),
        C = (function () {
          function e() {
            (this.m_GamepadNavigationController = new E.c()),
              R.d.IN_GAMEPADUI &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new d()
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new l()
                )),
              "dev" == R.d.WEB_UNIVERSE &&
                (this.m_GamepadNavigationController.RegisterInputSource(
                  new _(window)
                ),
                this.m_GamepadNavigationController.RegisterInputSource(
                  new v(window)
                ));
          }
          return (
            (e.prototype.GetNavigationController = function () {
              return this.m_GamepadNavigationController;
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()),
                  "dev" == R.d.WEB_UNIVERSE &&
                    (window.g_StoreWebNavStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            e
          );
        })();
      function I() {
        var e = window.legacyWebFocusNavController;
        return e || C.Get().GetNavigationController();
      }
    },
    pcg8: function (e, t, a) {
      e.exports = {
        CuratorListCtn: "curatorlist_CuratorListCtn_2gWFd",
        CuratorMoreCtn: "curatorlist_CuratorMoreCtn_16t3P",
        TopReviewInfo: "curatorlist_TopReviewInfo_3SZBz",
        SaleBanner: "curatorlist_SaleBanner_1wbf-",
        Title: "curatorlist_Title_1MhFd",
        Blurb: "curatorlist_Blurb_rrcHS",
        VideoReviewCtn: "curatorlist_VideoReviewCtn_Rojwr",
        YouTubePreviewImage: "curatorlist_YouTubePreviewImage_eObSf",
        CuratorList: "curatorlist_CuratorList_1VI6G",
        CuratorListGrid: "curatorlist_CuratorListGrid_qJM6j",
        CuratorReview: "curatorlist_CuratorReview_31hoQ",
        CapsuleCtn: "curatorlist_CapsuleCtn_MY9Lk",
        YouTubeCapsule: "curatorlist_YouTubeCapsule_1siEs",
        YouTubeCtn: "curatorlist_YouTubeCtn_1uz1W",
        YouTubeCapsuleBottomBar: "curatorlist_YouTubeCapsuleBottomBar_1d9Mp",
        GameImageCtn: "curatorlist_GameImageCtn_220F7",
        GameImage: "curatorlist_GameImage_7gTF4",
        FullWidth: "curatorlist_FullWidth_3ditF",
        ReviewTextSection: "curatorlist_ReviewTextSection_1597W",
        GameTitle: "curatorlist_GameTitle_nl2T_",
        RecommendationTypeAndDate:
          "curatorlist_RecommendationTypeAndDate_2lz6u",
        Recommended: "curatorlist_Recommended_3v9Qi",
        NotRecommended: "curatorlist_NotRecommended_3iOGo",
        Informational: "curatorlist_Informational_261Fh",
        ReviewDate: "curatorlist_ReviewDate_HCiYl",
        ReviewBlurb: "curatorlist_ReviewBlurb_1y_bx",
        FullReviewLink: "curatorlist_FullReviewLink_3_8G-",
        FullReviewAnchor: "curatorlist_FullReviewAnchor_3pWCN",
        FullReviewDomain: "curatorlist_FullReviewDomain_2R37N",
      };
    },
    "ykc/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        o = a.n(r),
        i = a("av+R"),
        c = a("yLGM"),
        l = a("opsS"),
        s = a("lkRc");
      function u(e) {
        var t = e.children,
          a = e.navTreeRef,
          r = Object(n.f)(e, ["children", "navTreeRef"]),
          u = o.a.useRef(),
          m = Object(l.f)(u, a);
        if (s.d.IN_GAMEPADUI) {
          var d = window.__nav_tree_root;
          return o.a.createElement(
            i.b,
            Object(n.a)({}, r, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: d,
            }),
            o.a.createElement(c.a, null, t)
          );
        }
        return o.a.createElement(o.a.Fragment, null, t);
      }
    },
  },
]);

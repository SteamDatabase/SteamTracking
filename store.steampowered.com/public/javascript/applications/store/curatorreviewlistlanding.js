/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "+KBl": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "CuratorReviewList", function () {
          return k;
        });
      var n = a("FT/q"),
        r = a("q1tI"),
        o = a.n(r),
        i = a("av+R"),
        c = a("qDk6"),
        l = a("ee7K"),
        s = a("exH9"),
        u = a("TLQK"),
        m = a("lkRc"),
        d = a("1v2s");
      function _(e) {
        return m.d.IN_GAMEPADUI ? r.createElement(p, null) : null;
      }
      function p(e) {
        var t = e.strActiveTab,
          a = Object(l.d)();
        return r.createElement(
          c.a,
          { className: d.PillTabMenuCtn, "flow-children": "row" },
          r.createElement(E, {
            strURL: m.d.STORE_BASE_URL,
            name: Object(u.f)("#SteamDeck_Menu_Store"),
            bActive: "store" == t,
          }),
          r.createElement(E, {
            strURL: m.d.STORE_BASE_URL,
            name: Object(u.f)("#SteamDeck_Menu_Categories"),
            bActive: "category" == t,
          }),
          r.createElement(E, {
            strURL: m.d.STORE_BASE_URL + "search",
            name: Object(u.f)("#SteamDeck_Menu_Search"),
            bActive: "search" == t,
          }),
          r.createElement(E, {
            strURL: m.d.STORE_BASE_URL + "wishlist",
            name: a
              ? Object(u.f)("#SteamDeck_Menu_Wishlist", a)
              : Object(u.f)("#SteamDeck_Menu_Wishlist_Empty"),
            bActive: "wishlist" == t,
          }),
          r.createElement(E, {
            strURL: m.d.STORE_BASE_URL + "steamaccount/addfunds",
            name: Boolean(null)
              ? Object(u.f)("#SteamDeck_Menu_Wallet", null)
              : Object(u.f)("#SteamDeck_Menu_Wallet_Empty"),
            bActive: "wallet" == t,
          }),
          r.createElement(v, { bActive: "cart" == t })
        );
      }
      function E(e) {
        var t,
          a = e.strURL,
          n = e.name,
          o = e.bActive;
        return r.createElement(
          i.c,
          {
            className: Object(s.a)(
              ((t = {}), (t[d.PillTabMenuItem] = !0), (t[d.Active] = o), t)
            ),
            href: a,
            noFocusRing: !0,
          },
          n
        );
      }
      function v(e) {
        var t = Object(l.c)();
        return t
          ? r.createElement(E, {
              strURL: m.d.STORE_BASE_URL + "cart",
              bActive: e.bActive,
              name: Object(u.n)(
                "#SteamDeck_Menu_Cart",
                r.createElement(
                  "span",
                  { className: d.CartPillTabMenuItem },
                  r.createElement("b", null, t)
                )
              ),
            })
          : null;
      }
      var R = a("TyAF"),
        b = a("rcjX"),
        g = a("mgoM"),
        S = a("kyHq"),
        C = a("yLGM"),
        I = (a("NxAk"), a("+VX6")),
        f = (a("3+zv"), a("Xhj9"), a("5eAM")),
        T = a("VQ2A"),
        h = a("UCyf"),
        O = a("gOcu"),
        y = a("Fmfl"),
        L = a("gyoR"),
        w = a("5L1o"),
        D = a("4pOC"),
        N = a("0OaU"),
        A = a("3Gzo"),
        M = a("j54C"),
        G = a("IzPI"),
        B = a("pcg8"),
        U = a.n(B),
        j = (a("TQGK"), a("477j")),
        F = a("C4Er");
      function P(e) {
        var t = e.clanInfo,
          a = Object(m.h)("curator_header", "application_config"),
          n = a.curator_link,
          r = a.curator_medium_avatar;
        return o.a.createElement(
          c.a,
          { className: "page_content_ctn", "flow-children": "column" },
          o.a.createElement(
            "div",
            { className: "page_content" },
            o.a.createElement(
              c.a,
              { className: "list_header_area", "flow-children": "row" },
              o.a.createElement(
                "div",
                { className: "curator_avatar_image" },
                o.a.createElement(
                  i.c,
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
                o.a.createElement(j.a, {
                  className: F.BreadContainer,
                  crumbs: Object(m.h)("breadcrumbs", "application_config"),
                }),
                o.a.createElement(
                  i.c,
                  { className: "pageheader curator_name", href: n },
                  Object(u.f)("#SteamCurator_List_Header_List", t.group_name)
                )
              )
            )
          )
        );
      }
      t.default = function (e) {
        var t = Object(n.a)();
        return "dev" == m.d.WEB_UNIVERSE || "beta" == m.d.WEB_UNIVERSE
          ? o.a.createElement(
              i.b,
              { navID: "StoreCuratorPageRoot", NavigationManager: t },
              o.a.createElement(
                C.a,
                null,
                o.a.createElement(k, { listid: e.listid })
              )
            )
          : o.a.createElement(k, { listid: e.listid });
      };
      function k(e) {
        var t = parseInt(
            Object(m.h)("curator_account_id", "application_config")
          ),
          a = Object(h.f)(t),
          n = Object(h.g)(null == a ? void 0 : a.clanSteamID, e.listid),
          r = Object(h.e)(n),
          d = o.a.useState(null),
          p = d[0],
          E = d[1],
          v = o.a.useState(0),
          R = v[0],
          b = v[1];
        if (
          (o.a.useEffect(
            function () {
              var e;
              if (n) {
                var t = Object(h.a)(n)
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
                b((null == t ? void 0 : t.length) || 0),
                  l.a
                    .Get()
                    .HintLoad()
                    .then(function () {
                      f.a
                        .LoadAppLinkInfo(
                          t.map(function (e) {
                            return e.recommended_app.appid;
                          })
                        )
                        .then(function () {
                          E(
                            t.filter(function (e) {
                              return !Object(L.d)(
                                f.a.GetAppLinkInfo(e.recommended_app.appid)
                              );
                            })
                          );
                        })
                        .catch(function () {
                          return E([]);
                        });
                    });
              }
            },
            [n, r]
          ),
          !n)
        )
          return null;
        if (null == p)
          return o.a.createElement(N.a, {
            string: Object(u.f)("#Loading"),
            position: "center",
            size: "medium",
          });
        var g = 1 == n.list_type;
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(_, null),
          o.a.createElement(P, { clanInfo: a }),
          o.a.createElement(
            "div",
            { className: "page_content_ctn grayscale" },
            o.a.createElement(
              "div",
              { className: "page_content" },
              o.a.createElement(
                "div",
                { className: U.a.CuratorListCtn },
                o.a.createElement(K, { listDetails: n }),
                o.a.createElement(
                  c.a,
                  {
                    className: Object(s.a)(
                      U.a.CuratorList,
                      g && U.a.CuratorListGrid
                    ),
                    "flow-children": "grid",
                  },
                  p.map(function (e, t) {
                    return o.a.createElement(x, {
                      key: "rec_" + e.recommended_app.appid,
                      item: e,
                      listDetails: n,
                      bWantsFocus: 0 == t,
                    });
                  })
                ),
                Boolean(R > p.length) &&
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "span",
                      null,
                      Object(u.l)("#SteamCurator_Hidden", R - p.length),
                      " "
                    ),
                    o.a.createElement(
                      i.c,
                      { href: m.d.STORE_BASE_URL + "account/preferences/" },
                      Object(u.f)("#SteamCurator_Setting")
                    )
                  ),
                o.a.createElement(
                  "div",
                  { className: U.a.CuratorMoreCtn },
                  o.a.createElement(
                    "h2",
                    null,
                    Object(u.f)("#SteamCurator_ExploreMoreTitle")
                  ),
                  o.a.createElement(
                    i.c,
                    { href: a.vanity_url },
                    Object(u.n)("#SteamCurator_MoreReviews", a.group_name)
                  )
                )
              )
            )
          )
        );
      }
      function K(e) {
        var t = e.listDetails,
          a = Object(h.d)(t),
          n = Object(m.h)("showlisttitle", "application_config"),
          r = Object(m.h)("titleareaheight", "application_config"),
          c =
            t.list_jsondata.youtube_link &&
            Object(I.b)(t.list_jsondata.youtube_link),
          l = Object(g.g)(m.d.LANGUAGE),
          s = u.a.GetWithFallback(t.localized_flat_title, l),
          d = u.a.GetWithFallback(t.localized_flat_blurb, l),
          _ = u.a.GetWithFallback(t.localized_flat_link, l),
          p =
            a &&
            a.GetImageURL(
              Object(A.a)() ? "product_mobile_banner" : "product_banner",
              l
            );
        return o.a.createElement(
          "div",
          { className: U.a.TopReviewInfo },
          Boolean(p) &&
            o.a.createElement(
              i.c,
              { href: a.GetSaleURL() },
              o.a.createElement("img", { className: U.a.SaleBanner, src: p })
            ),
          n && s && o.a.createElement("div", { className: U.a.Title }, s),
          n && d && o.a.createElement("div", { className: U.a.Blurb }, d),
          r > 0 && o.a.createElement("div", { style: { height: r } }),
          c &&
            o.a.createElement(
              "div",
              { className: U.a.VideoReviewCtn },
              o.a.createElement(M.b, {
                video: c.strVideoID,
                startSeconds: c.nStartSeconds,
                autoplay: !0,
                autopause: !0,
                showFullscreenBtn: !0,
                controls: !0,
                preloadYoutubeScripts: !0,
                playsInline: !0,
                imageClassnames: U.a.YouTubePreviewImage,
              })
            ),
          _ && o.a.createElement(Y, { url: _ })
        );
      }
      var x = Object(R.a)(function (e) {
        var t,
          a,
          n = e.item,
          r = e.listDetails,
          i = e.bWantsFocus,
          l = parseInt(Object(m.h)("curator_account_id", "application_config")),
          s = Object(h.f)(l);
        if (
          !s ||
          !(null === (t = null == n ? void 0 : n.recommended_app) ||
          void 0 === t
            ? void 0
            : t.appid)
        )
          return null;
        var d = n.recommended_app,
          _ = d.appid,
          p = d.link_url,
          E = d.blurb,
          v = d.time_recommended,
          R = d.recommendation_state,
          b = f.a.GetAppLinkInfo(_);
        if (!b) return null;
        if (!Object(S.b)(b.type)) return null;
        var g = s.is_creator_home,
          C =
            null === (a = r.list_jsondata.app_data) || void 0 === a
              ? void 0
              : a[_],
          T = p && Object(I.b)(p),
          y = E != h.c && E,
          L = O.a.Get().BHasDemoAppID(_),
          w = null == C ? void 0 : C.img_url,
          N =
            "curator_clanid=" + s.clanAccountID + "&curator_listid=" + r.listid;
        return o.a.createElement(
          c.a,
          { className: U.a.CuratorReview, autoFocus: i },
          o.a.createElement(
            "div",
            { className: U.a.CapsuleCtn },
            T
              ? o.a.createElement(H, {
                  strVideoID: T.strVideoID,
                  nStartSeconds: T.nStartSeconds,
                  appInfo: b,
                  strImgOverrideUrl: w,
                  bShowDemoButton: L,
                  strExtraParams: N,
                })
              : o.a.createElement(D.a, {
                  imageType: "header",
                  capsule: b,
                  bShowDemoButton: L,
                  strExtraParams: N,
                })
          ),
          o.a.createElement(
            "div",
            { className: U.a.ReviewTextSection },
            o.a.createElement(
              "div",
              { className: U.a.GameTitle },
              null == b ? void 0 : b.name
            ),
            o.a.createElement(
              "div",
              { className: U.a.RecommendationTypeAndDate },
              o.a.createElement(W, { type: R }),
              o.a.createElement(
                "div",
                { className: U.a.ReviewDate },
                g ? b.release : Object(u.o)(v)
              )
            ),
            Boolean(y) &&
              o.a.createElement(
                "div",
                { className: U.a.ReviewBlurb },
                Object(u.f)("#SteamCurator_ReviewTextQuoted", y)
              ),
            Boolean(p) && o.a.createElement(Y, { url: p })
          )
        );
      });
      function H(e) {
        var t = e.strVideoID,
          a = e.nStartSeconds,
          n = e.appInfo,
          r = e.strImgOverrideUrl,
          i = e.bShowDemoButton,
          c = e.strExtraParams;
        return o.a.createElement(
          "div",
          { className: U.a.YouTubeCapsule },
          o.a.createElement(
            "div",
            { className: U.a.YouTubeCtn },
            o.a.createElement(M.b, {
              video: t,
              startSeconds: a,
              autoplay: !0,
              autopause: !0,
              showFullscreenBtn: !0,
              controls: !0,
              preloadYoutubeScripts: !0,
              playsInline: !0,
              imageClassnames: U.a.YouTubePreviewImage,
              altImg: r,
            })
          ),
          o.a.createElement(
            "div",
            { className: U.a.YouTubeCapsuleBottomBar },
            o.a.createElement(
              "div",
              { className: U.a.GameImageCtn },
              o.a.createElement(
                y.d,
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
                  className: U.a.GameImage,
                  src: null == n ? void 0 : n.library_asset,
                })
              )
            ),
            o.a.createElement(w.c, { info: n, strClassName: U.a.FullWidth })
          )
        );
      }
      function W(e) {
        switch (e.type) {
          case 0:
            return o.a.createElement(
              "div",
              { className: U.a.Recommended },
              Object(u.f)("#SteamCurator_Recommended")
            );
          case 1:
            return o.a.createElement(
              "div",
              { className: U.a.NotRecommended },
              Object(u.f)("#SteamCurator_NotRecommended")
            );
          case 2:
            return o.a.createElement(
              "div",
              { className: U.a.Informational },
              Object(u.f)("#SteamCurator_Informational")
            );
          default:
            return null;
        }
      }
      function Y(e) {
        var t = Object(T.d)(e.url);
        Object(b.b)(t) &&
          (t =
            (m.d.IN_CLIENT ? "steam://openurl_external/" : "") +
            m.d.COMMUNITY_BASE_URL +
            "linkfilter/?url=" +
            t);
        var a = Object(G.f)(e.url),
          n = Object(I.a)(e.url);
        return o.a.createElement(
          "div",
          { className: U.a.FullReviewLink },
          o.a.createElement(
            i.c,
            {
              className: U.a.FullReviewAnchor,
              href: t,
              rel: "noopener nofollow",
            },
            Object(u.f)(
              n
                ? "#SteamCurator_WatchFullReview"
                : "#SteamCurator_ReadFullReview"
            )
          ),
          o.a.createElement(
            "div",
            { className: U.a.FullReviewDomain },
            Object(u.f)("#SteamCurator_ReviewLinkHostnameBracketed", a)
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
    "FT/q": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return g;
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
        _ = a("X3Ds"),
        p = (function (e) {
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
                  _.p(e.target) &&
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
        E = (function (e) {
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
        v = a("NxAk"),
        R = a("lkRc"),
        b = (function () {
          function e() {
            (this.m_GamepadNavigationManager = new v.c()),
              R.d.IN_GAMEPADUI &&
                (this.m_GamepadNavigationManager.RegisterInputSource(new d()),
                this.m_GamepadNavigationManager.RegisterInputSource(new l())),
              "dev" == R.d.WEB_UNIVERSE &&
                (this.m_GamepadNavigationManager.RegisterInputSource(
                  new p(window)
                ),
                this.m_GamepadNavigationManager.RegisterInputSource(
                  new E(window)
                ));
          }
          return (
            (e.prototype.GetNavigationManager = function () {
              return this.m_GamepadNavigationManager;
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
      function g() {
        var e = window.legacyWebFocusNavController;
        return e || b.Get().GetNavigationManager();
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
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "3WEt": function (e, t, a) {
      "use strict";
      a.r(t);
      var o,
        i,
        u = a("mrSG"),
        r = a("lkRc"),
        n = a("TyAF"),
        s = a("2vnA"),
        c = a("q1tI"),
        P = a.n(c),
        U = a("Ophz"),
        w = a("6Y59"),
        M = a("exH9"),
        x = a("TLQK"),
        l = a("bxiW"),
        F = a("Asqs"),
        d = a("1h/R"),
        m = a.n(d),
        p = a("vDqi"),
        _ = a.n(p);
      ((i = o = o || {})[(i.Unrequested = 0)] = "Unrequested"),
        (i[(i.Pending = 1)] = "Pending"),
        (i[(i.Valid = 2)] = "Valid"),
        (i[(i.Failed = 3)] = "Failed"),
        (i[(i.Rerequest = 4)] = "Rerequest");
      var h,
        g,
        v = (function () {
          function e() {
            (this.eState = o.Unrequested), (this.nExpirationTime = 0);
          }
          return (
            (e.prototype.getData = function (t, a, i) {
              var n = this,
                r = Date.now() / 1e3,
                e = this.eState == o.Pending || this.eState == o.Rerequest;
              return (
                r >= this.nExpirationTime &&
                  !e &&
                  ((this.eState = o.Pending),
                  a().then(function (e) {
                    return n.eState == o.Rerequest
                      ? (n.expireData(), void n.getData(t, a, i))
                      : void (e
                          ? ((n.data = i ? i(e) : e),
                            (n.nExpirationTime = r + t),
                            (n.eState = o.Valid))
                          : (n.eState = o.Failed));
                  })),
                this.data
              );
            }),
            (e.prototype.clearData = function () {
              var e = Date.now() / 1e3;
              (this.eState = o.Unrequested),
                (this.data = null),
                (this.nExpirationTime = e);
            }),
            (e.prototype.expireData = function () {
              var e = Date.now() / 1e3;
              this.nExpirationTime = e;
            }),
            (e.prototype.isExpired = function () {
              var e = Date.now() / 1e3;
              return this.nExpirationTime < e;
            }),
            (e.prototype.delayNewData = function (e) {
              var t = Date.now() / 1e3;
              this.nExpirationTime = t + e;
            }),
            (e.prototype.rerequestDataIfPending = function () {
              this.eState == o.Pending && (this.eState = o.Rerequest);
            }),
            Object(u.c)([s.C], e.prototype, "data", void 0),
            Object(u.c)([s.C], e.prototype, "nExpirationTime", void 0),
            e
          );
        })(),
        k = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          BASE_URL: "",
          COMMUNITY_BASE_URL: "",
          STORE_BASE_URL: "",
          RELATIVE_URL: "",
          IMG_URL: "",
          IMG_URL_BASE: "",
          CDN_URL: "",
          RENDER_TIMESTAMP: 0,
          EXPLORE_URL: "",
          ACCOUNT_ID: 0,
          STEAM_ID: "",
          SESSION_ID: "",
          LOGIN_REDIRECT: "",
          AVATAR_URL: "",
          PERSONA_NAME: "",
          LINK_PARAM: "",
          NUM_POPULARITY_STEPS: 0,
          NUM_RECENCY_STEPS: 0,
          MAX_PLAYED_GAMES: 0,
          RESET_OPTIONS: !1,
          INCLUDE_PLAYED: !1,
          ALGORITHM: 0,
          REINFERENCE: !1,
          MODEL_VERSION: 0,
          PERSISTENT_IGNORE: !1,
          DEFAULT_RECENCY_SLIDER: 0,
          DEFAULT_POPULARITY_SLIDER: 0,
          DEFAULT_INCLUDED_TAGS: [],
          DEFAULT_EXCLUDED_TAGS: [],
          DEFAULT_IGNORED_PLAYED_APPS: [],
          EXCLUDE_WISHLIST: !1,
          USE_MICROTRAILERS: !1,
        };
      ((g = h = h || {})[(g.ClickThrough = 1)] = "ClickThrough"),
        (g[(g.AddToWishlist = 2)] = "AddToWishlist"),
        (g[(g.AddToCart = 3)] = "AddToCart");
      var V = new ((function () {
        function e() {
          var e = this;
          (this.m_rgFilterTags = []),
            (this.m_rgExcludeTags = []),
            (this.m_rgSavedFilterTags = []),
            (this.m_rgSavedExcludeTags = []),
            (this.m_mapAppDetailsCache = new Map()),
            (this.m_ResultDataCache = new v()),
            (this.m_InputAppsCache = new v()),
            (this.m_TagsCache = new v()),
            (this.m_TagNameMap = new Map()),
            (this.m_fPopularityValue = window.history.state
              ? window.history.state.popularity
              : 0.25),
            (this.m_fRecencyValue = window.history.state
              ? window.history.state.recency
              : 0),
            (this.m_bExcludeWishlisted =
              !!window.history.state && window.history.state.excludewishlisted),
            (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
            (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
            (this.m_bStateUpdated = !1),
            (this.m_bShouldMute = !0),
            (this.m_bIgnoredEdited = !1),
            (this.m_bUseMicrotrailers = !1),
            setInterval(function () {
              e.m_bStateUpdated &&
                (window.history.replaceState(
                  {
                    popularity: e.m_fPopularityValue,
                    recency: e.m_fRecencyValue,
                    excludewishlisted: e.m_bExcludeWishlisted,
                  },
                  ""
                ),
                (e.m_bStateUpdated = !1));
            }, 1e3),
            setInterval(function () {
              (e.m_fPopularityValue == e.m_fQueuedPopularityValue &&
                e.m_fQueuedRecencyValue == e.m_fRecencyValue) ||
                ((e.m_fPopularityValue = e.m_fQueuedPopularityValue),
                (e.m_fRecencyValue = e.m_fQueuedRecencyValue),
                (e.m_bStateUpdated = !0));
            }, 400);
        }
        return (
          (e.prototype.Init = function () {
            (this.m_fPopularityValue = k.DEFAULT_POPULARITY_SLIDER),
              (this.m_fRecencyValue = k.DEFAULT_RECENCY_SLIDER),
              (this.m_rgSavedExcludeTags = Object(u.g)(
                k.DEFAULT_EXCLUDED_TAGS
              )),
              (this.m_rgSavedFilterTags = Object(u.g)(k.DEFAULT_INCLUDED_TAGS)),
              (this.m_rgExcludeTags = Object(u.g)(this.m_rgSavedExcludeTags)),
              (this.m_rgFilterTags = Object(u.g)(this.m_rgSavedFilterTags)),
              (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
              (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
              (this.m_bExcludeWishlisted = !1),
              (this.m_bStateUpdated = !0),
              (this.m_bExcludeWishlisted = k.EXCLUDE_WISHLIST),
              (this.m_bUseMicrotrailers = k.USE_MICROTRAILERS);
          }),
          (e.prototype.getDetails = function (t) {
            var e = this;
            return (
              this.m_mapAppDetailsCache.has(t) ||
                this.m_mapAppDetailsCache.set(t, new v()),
              this.m_mapAppDetailsCache.get(t).getData(
                60,
                function () {
                  return Object(u.b)(e, void 0, void 0, function () {
                    return Object(u.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [
                            4,
                            _.a.get(
                              k.BASE_URL +
                                "recommender/" +
                                k.STEAM_ID +
                                "/details?appid=" +
                                t +
                                "&sessionid=" +
                                k.SESSION_ID
                            ),
                          ];
                        case 1:
                          return [2, e.sent()];
                      }
                    });
                  });
                },
                function (e) {
                  return e.data;
                }
              )
            );
          }),
          (e.prototype.getResults = function (e, t, a, i) {
            var n = this,
              r = e ? "1" : "0",
              o = t ? "" + t : "0",
              s = a ? "1" : "0",
              c = i ? "" + i : "0",
              l = "",
              d = this.getInputApps();
            if (d) {
              var m = [];
              return (
                Object.keys(d).map(function (e) {
                  (d[e].i || d[e].ip) && m.push(d[e].a);
                }),
                0 < m.length && (l = "&ignored=" + m.join()),
                this.m_ResultDataCache.getData(
                  9999999,
                  function () {
                    return Object(u.b)(n, void 0, void 0, function () {
                      return Object(u.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [
                              4,
                              _.a.get(
                                k.BASE_URL +
                                  "recommender/" +
                                  k.STEAM_ID +
                                  "/results?sessionid=" +
                                  k.SESSION_ID +
                                  "&steamid=" +
                                  k.STEAM_ID +
                                  "&include_played=" +
                                  r +
                                  "&algorithm=" +
                                  o +
                                  "&reinference=" +
                                  s +
                                  "&model_version=" +
                                  c +
                                  l
                              ),
                            ];
                          case 1:
                            return [2, e.sent()];
                        }
                      });
                    });
                  },
                  function (e) {
                    return e.data;
                  }
                )
              );
            }
          }),
          (e.prototype.areResultsExpired = function () {
            return this.m_ResultDataCache.isExpired();
          }),
          (e.prototype.getRecommendations = function () {
            var e = V.getResults(
              k.INCLUDE_PLAYED,
              k.ALGORITHM,
              k.REINFERENCE,
              k.MODEL_VERSION
            );
            return e ? e.recommendations : void 0;
          }),
          (e.prototype.getInputApps = function () {
            var e = this;
            return this.m_InputAppsCache.getData(
              9999999,
              function () {
                return Object(u.b)(e, void 0, void 0, function () {
                  return Object(u.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          _.a.get(
                            k.BASE_URL +
                              "recommender/" +
                              k.STEAM_ID +
                              "/inputs?sessionid=" +
                              k.SESSION_ID +
                              "&steamid=" +
                              k.STEAM_ID
                          ),
                        ];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              },
              function (e) {
                return e.data;
              }
            );
          }),
          (e.prototype.getAppInfo = function () {
            var e = V.getResults(
              k.INCLUDE_PLAYED,
              k.ALGORITHM,
              k.REINFERENCE,
              k.MODEL_VERSION
            );
            return e ? e.app_info : void 0;
          }),
          (e.prototype.getTags = function () {
            var n = this;
            return this.m_TagsCache.getData(
              9999999,
              function () {
                return Object(u.b)(n, void 0, void 0, function () {
                  return Object(u.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          _.a.get(
                            k.BASE_URL +
                              "recommender/" +
                              k.STEAM_ID +
                              "/tags?sessionid=" +
                              k.SESSION_ID
                          ),
                        ];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              },
              function (e) {
                n.m_TagNameMap.clear();
                for (var t = 0, a = e.data; t < a.length; t++) {
                  var i = a[t];
                  n.m_TagNameMap.set(i.tagid, i.name);
                }
                return e.data;
              }
            );
          }),
          (e.prototype.getTagName = function (e) {
            return this.getTags(), this.m_TagNameMap.get(e);
          }),
          (e.prototype.getTagHeight = function () {
            return Math.max(
              this.m_rgFilterTags.length,
              this.m_rgExcludeTags.length
            );
          }),
          (e.prototype.onPopularityChanged = function (e) {
            this.m_fQueuedPopularityValue = Number(e.target.value);
          }),
          (e.prototype.onRecencyChanged = function (e) {
            this.m_fQueuedRecencyValue = Number(e.target.value);
          }),
          (e.prototype.onTagFilterAdd = function (e) {
            this.m_rgFilterTags.push(e), (this.m_bStateUpdated = !0);
          }),
          (e.prototype.onTagFilterRemove = function (e) {
            for (var t = 0; t < this.m_rgFilterTags.length; t++)
              if (this.m_rgFilterTags[t] == e) {
                this.m_rgFilterTags.splice(t, 1);
                break;
              }
            this.m_bStateUpdated = !0;
          }),
          (e.prototype.onTagExcludeAdd = function (e) {
            this.m_rgExcludeTags.push(e), (this.m_bStateUpdated = !0);
          }),
          (e.prototype.onTagExcludeRemove = function (e) {
            for (var t = 0; t < this.m_rgExcludeTags.length; t++)
              if (this.m_rgExcludeTags[t] == e) {
                this.m_rgExcludeTags.splice(t, 1);
                break;
              }
            this.m_bStateUpdated = !0;
          }),
          (e.prototype.doTagsPassFilter = function (e) {
            for (var t = 0, a = this.m_rgFilterTags; t < a.length; t++) {
              var i = a[t];
              if (-1 == e.indexOf(i)) return !1;
            }
            return !0;
          }),
          (e.prototype.doTagsFailExclusion = function (e) {
            for (var t = 0, a = this.m_rgExcludeTags; t < a.length; t++) {
              var i = a[t];
              if (-1 != e.indexOf(i)) return !0;
            }
            return !1;
          }),
          (e.prototype.onExcludeWishlistedToggled = function (e) {
            (this.m_bExcludeWishlisted = !this.m_bExcludeWishlisted),
              (this.m_bStateUpdated = !0);
          }),
          (e.prototype.onSaveUserSettings = function (e) {
            return Object(u.b)(this, void 0, void 0, function () {
              var t, a, i, n, r, o;
              return Object(u.e)(this, function (e) {
                switch (e.label) {
                  case 0:
                    for (
                      t = [], a = this.getInputApps(), i = 0, n = a;
                      i < n.length;
                      i++
                    )
                      ((r = n[i]).i || r.ip) && t.push(r.a);
                    return this.m_fRecencyValue != k.DEFAULT_RECENCY_SLIDER ||
                      this.m_fPopularityValue != k.DEFAULT_POPULARITY_SLIDER ||
                      this.m_rgFilterTags.slice().sort().join(",") !==
                        this.m_rgSavedFilterTags.sort().join(",") ||
                      this.m_rgExcludeTags.slice().sort().join(",") !==
                        this.m_rgSavedExcludeTags.sort().join(",") ||
                      t.slice().sort().join(",") !==
                        k.DEFAULT_IGNORED_PLAYED_APPS.sort().join(",") ||
                      this.m_bExcludeWishlisted != k.EXCLUDE_WISHLIST
                      ? [3, 1]
                      : [3, 3];
                  case 1:
                    return (
                      (o = {
                        session_id: k.SESSION_ID,
                        recency_position: this.m_fRecencyValue,
                        popularity_position: this.m_fPopularityValue,
                        included_tags: this.m_rgFilterTags,
                        excluded_tags: this.m_rgExcludeTags,
                        ignored_played_apps: t,
                        exclude_wishlist: this.m_bExcludeWishlisted,
                      }),
                      (k.DEFAULT_RECENCY_SLIDER = this.m_fRecencyValue),
                      (k.DEFAULT_POPULARITY_SLIDER = this.m_fPopularityValue),
                      (k.DEFAULT_INCLUDED_TAGS = Object(u.g)(
                        this.m_rgFilterTags
                      )),
                      (k.DEFAULT_EXCLUDED_TAGS = Object(u.g)(
                        this.m_rgExcludeTags
                      )),
                      (this.m_rgSavedFilterTags = Object(u.g)(
                        this.m_rgFilterTags
                      )),
                      (this.m_rgSavedExcludeTags = Object(u.g)(
                        this.m_rgExcludeTags
                      )),
                      (k.DEFAULT_IGNORED_PLAYED_APPS = Object(u.g)(t)),
                      (k.EXCLUDE_WISHLIST = this.m_bExcludeWishlisted),
                      [
                        4,
                        _.a.post(
                          k.BASE_URL +
                            "recommender/" +
                            k.STEAM_ID +
                            "/savesettings",
                          o
                        ),
                      ]
                    );
                  case 2:
                    e.sent(), (e.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.onToggleIgnore = function (r) {
            return Object(u.b)(this, void 0, void 0, function () {
              var t, a, i, n;
              return Object(u.e)(this, function (e) {
                for (t = this.getInputApps(), a = 0, i = t; a < i.length; a++)
                  if ((n = i[a]).a == r) {
                    n.i || n.ip ? ((n.i = !1), (n.ip = !1)) : (n.ip = !0);
                    break;
                  }
                return (
                  this.m_ResultDataCache.expireData(),
                  (this.m_bIgnoredEdited = !0),
                  [2]
                );
              });
            });
          }),
          (e.prototype.onUpdateWithIgnored = function () {
            this.m_ResultDataCache.expireData(), (this.m_bIgnoredEdited = !1);
          }),
          (e.prototype.onAppClicked = function (a, i) {
            return Object(u.b)(this, void 0, void 0, function () {
              var t;
              return Object(u.e)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = {
                        account_id: k.ACCOUNT_ID,
                        session_id: k.SESSION_ID,
                        app_id: a,
                        app_rank: i,
                        action: h.ClickThrough,
                        algorithm: 1,
                        setting_1: 100 * this.m_fPopularityValue,
                        setting_2: 100 * this.m_fRecencyValue,
                      }),
                      [
                        4,
                        _.a.post(
                          k.BASE_URL + "recommender/" + k.STEAM_ID + "/stats",
                          t
                        ),
                      ]
                    );
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          }),
          (e.prototype.onAddToWishlist = function (n, r) {
            return Object(u.b)(this, void 0, void 0, function () {
              var t, a, i;
              return Object(u.e)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (V.getAppInfo()[n].w = !0),
                      (t = { sessionid: k.SESSION_ID, appid: n }),
                      [
                        4,
                        _.a.post(
                          k.BASE_URL +
                            "recommender/" +
                            k.STEAM_ID +
                            "/wishlist?snr=" +
                            k.LINK_PARAM,
                          t
                        ),
                      ]
                    );
                  case 1:
                    return (
                      (a = e.sent()),
                      (i = {
                        account_id: k.ACCOUNT_ID,
                        session_id: k.SESSION_ID,
                        app_id: n,
                        app_rank: r,
                        action: h.AddToWishlist,
                        algorithm: 1,
                        setting_1: 100 * this.m_fPopularityValue,
                        setting_2: 100 * this.m_fRecencyValue,
                      }),
                      [
                        4,
                        _.a.post(
                          k.BASE_URL + "recommender/" + k.STEAM_ID + "/stats",
                          i
                        ),
                      ]
                    );
                  case 2:
                    return e.sent(), [2, a];
                }
              });
            });
          }),
          (e.prototype.onGoToWishlist = function () {
            window.location.href =
              k.COMMUNITY_BASE_URL + "profiles/" + k.STEAM_ID + "/wishlist";
          }),
          (e.prototype.onAddToCart = function (i, n) {
            return Object(u.b)(this, void 0, void 0, function () {
              var t, a;
              return Object(u.e)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = { sessionid: k.SESSION_ID, appid: i }),
                      [
                        4,
                        _.a.post(
                          k.BASE_URL +
                            "recommender/" +
                            k.STEAM_ID +
                            "/cart?snr=" +
                            k.LINK_PARAM,
                          t
                        ),
                      ]
                    );
                  case 1:
                    return (
                      e.sent(),
                      (a = {
                        account_id: k.ACCOUNT_ID,
                        session_id: k.SESSION_ID,
                        app_id: i,
                        app_rank: n,
                        action: h.AddToCart,
                        algorithm: 1,
                        setting_1: 100 * this.m_fPopularityValue,
                        setting_2: 100 * this.m_fRecencyValue,
                      }),
                      [
                        4,
                        _.a.post(
                          k.BASE_URL + "recommender/" + k.STEAM_ID + "/stats",
                          a
                        ),
                      ]
                    );
                  case 2:
                    return (
                      e.sent(),
                      (window.location.href = r.c.STORE_BASE_URL + "cart"),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.onMuteClicked = function () {
            this.m_bShouldMute = !0;
          }),
          (e.prototype.onUnMuteClicked = function () {
            this.m_bShouldMute = !1;
          }),
          (e.prototype.shouldMute = function () {
            return this.m_bShouldMute;
          }),
          (e.prototype.shouldUseMicrotrailers = function () {
            return this.m_bUseMicrotrailers;
          }),
          Object(u.c)([s.C], e.prototype, "m_fPopularityValue", void 0),
          Object(u.c)([s.C], e.prototype, "m_fRecencyValue", void 0),
          Object(u.c)([s.C], e.prototype, "m_rgFilterTags", void 0),
          Object(u.c)([s.C], e.prototype, "m_rgExcludeTags", void 0),
          Object(u.c)([s.C], e.prototype, "m_fQueuedPopularityValue", void 0),
          Object(u.c)([s.C], e.prototype, "m_fQueuedRecencyValue", void 0),
          Object(u.c)([s.C], e.prototype, "m_bExcludeWishlisted", void 0),
          Object(u.c)([s.C], e.prototype, "m_bShouldMute", void 0),
          Object(u.c)([s.C], e.prototype, "m_bUseMicrotrailers", void 0),
          Object(u.c)([s.C], e.prototype, "m_bIgnoredEdited", void 0),
          Object(u.c)([l.a], e.prototype, "getTagHeight", null),
          Object(u.c)([l.a], e.prototype, "onPopularityChanged", null),
          Object(u.c)([l.a], e.prototype, "onRecencyChanged", null),
          Object(u.c)([l.a], e.prototype, "onTagFilterAdd", null),
          Object(u.c)([l.a], e.prototype, "onTagFilterRemove", null),
          Object(u.c)([l.a], e.prototype, "onTagExcludeAdd", null),
          Object(u.c)([l.a], e.prototype, "onTagExcludeRemove", null),
          Object(u.c)([l.a], e.prototype, "doTagsPassFilter", null),
          Object(u.c)([l.a], e.prototype, "doTagsFailExclusion", null),
          Object(u.c)([l.a], e.prototype, "onExcludeWishlistedToggled", null),
          Object(u.c)([l.a], e.prototype, "onSaveUserSettings", null),
          Object(u.c)([l.a], e.prototype, "onToggleIgnore", null),
          Object(u.c)([l.a], e.prototype, "onUpdateWithIgnored", null),
          Object(u.c)([l.a], e.prototype, "onAppClicked", null),
          Object(u.c)([l.a], e.prototype, "onAddToWishlist", null),
          Object(u.c)([l.a], e.prototype, "onGoToWishlist", null),
          Object(u.c)([l.a], e.prototype, "onAddToCart", null),
          Object(u.c)([l.a], e.prototype, "onMuteClicked", null),
          Object(u.c)([l.a], e.prototype, "onUnMuteClicked", null),
          Object(u.c)([l.a], e.prototype, "shouldMute", null),
          Object(u.c)([l.a], e.prototype, "shouldUseMicrotrailers", null),
          e
        );
      })())();
      window.g_InteractiveRecommender = V;
      var E,
        f = a("BFsE");
      (E = Object(r.f)("ir_config", "application_config")) &&
        (Object.assign(k, E), V.Init());
      function b(e) {
        e.accountID;
        var t = V.getInputApps(),
          a = Object.keys(t).length,
          i = 0;
        return (
          Object.keys(t).map(function (e) {
            i += t[e].p;
          }),
          P.a.createElement(
            "div",
            { className: F.IdentityBlock },
            P.a.createElement("img", {
              className: F.Avatar,
              src: k.AVATAR_URL,
            }),
            P.a.createElement(
              "div",
              { className: F.PersonalInfo },
              P.a.createElement(
                "div",
                { className: F.Persona },
                k.PERSONA_NAME
              ),
              P.a.createElement(
                "div",
                { className: F.GameCount },
                Object(x.f)("#PlaytimeList_RecentGames", a)
              ),
              P.a.createElement(
                "div",
                { className: F.TotalTime },
                Object(x.f)("#PlaytimeList_HoursTotal", i)
              )
            )
          )
        );
      }
      function S(e) {
        var t = e.appID,
          a = e.name,
          i = e.hours,
          n = e.lastPlayed,
          r = e.ignored,
          o = k.CDN_URL + "apps/" + t + "/header.jpg",
          s = Date.now() / 1e3 - n,
          c = "",
          l = "",
          l =
            n <= 86400
              ? Object(x.f)("#PlaytimeList_LastPlayedMax")
              : ((c = 31449600 < s ? Object(x.o)(n) : Object(x.q)(s)),
                Object(x.f)("#PlaytimeList_LastPlayed", c));
        return P.a.createElement(
          "div",
          { className: Object(M.a)(F.PlayedGame, r && F.Ignored) },
          P.a.createElement(
            "a",
            { href: k.BASE_URL + "app/" + t + "?snr=" + k.LINK_PARAM },
            P.a.createElement("img", { className: F.Logo, src: o })
          ),
          P.a.createElement(
            "div",
            { className: F.PlaytimeInfo },
            P.a.createElement(
              "div",
              { className: F.HoursPlayed },
              Object(x.f)("#PlaytimeList_Hours", i)
            ),
            P.a.createElement("div", { className: F.Title }, a),
            P.a.createElement("div", { className: F.LastPlayed }, l),
            P.a.createElement(
              "div",
              {
                className: F.IgnoreToggle,
                onClick: function () {
                  return V.onToggleIgnore(t);
                },
              },
              Object(x.f)(r ? "#PlaytimeList_UnIgnore" : "#PlaytimeList_Ignore")
            )
          )
        );
      }
      function y(e) {
        var t = e.titleLabel,
          a = e.minLabel,
          i = e.maxLabel,
          n = e.minValue,
          r = e.maxValue,
          o = e.value,
          s = e.onChange,
          c = e.sliderLabels,
          l = c ? Math.round((c.length - 1) * ((o - n) / (r - n))) : void 0,
          d = c ? c[l] : "";
        return P.a.createElement(
          "div",
          { className: F.OptionSlider },
          P.a.createElement("div", { className: F.Title }, t),
          P.a.createElement(
            "div",
            { className: F.Labels },
            P.a.createElement("div", { className: F.Min }, a),
            P.a.createElement("div", { className: F.Max }, i)
          ),
          P.a.createElement("input", {
            type: "range",
            min: n,
            max: r,
            step: (r - n) / 100,
            value: o,
            onChange: s,
          }),
          P.a.createElement("div", { className: F.OptionalLabel }, d)
        );
      }
      function T(e) {
        var t = e.className,
          a = e.titleLabel,
          i = e.checked,
          n = e.onChange;
        return P.a.createElement(
          "label",
          { className: Object(M.a)(F.OptionCheckbox, t && t) },
          P.a.createElement("input", {
            type: "checkbox",
            className: F.Checkbox,
            checked: i,
            onChange: n,
          }),
          a
        );
      }
      var O = (function (a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = {}), t;
          }
          return (
            Object(u.d)(e, a),
            (e.prototype.render = function () {
              var e = V.getInputApps(),
                a = [];
              if (!e)
                return P.a.createElement(
                  "div",
                  { className: F.PlaytimeList },
                  P.a.createElement(
                    "div",
                    { className: F.Header },
                    Object(x.f)("#PlaytimeList_Header")
                  ),
                  P.a.createElement("div", { className: F.Loading })
                );
              V.getAppInfo();
              var i = e.slice().sort(function (e, t) {
                return t.l - e.l;
              });
              return (
                Object.keys(i).map(function (e) {
                  var t = i[e];
                  a.push(
                    P.a.createElement(S, {
                      key: "PlayedGame_" + t.a,
                      appID: t.a,
                      name: t.t,
                      hours: t.p,
                      lastPlayed: t.l,
                      ignored: t.i || t.ip,
                    })
                  );
                }),
                P.a.createElement(
                  "div",
                  { className: F.PlaytimeList },
                  P.a.createElement(
                    "div",
                    { className: F.Header },
                    Object(x.f)("#PlaytimeList_Header")
                  ),
                  P.a.createElement(b, { accountID: this.props.accountID }),
                  P.a.createElement("div", { className: F.List }, a)
                )
              );
            }),
            (e = Object(u.c)([n.a], e))
          );
        })(P.a.Component),
        R = (function (a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.selectedtags = []),
              (t.rgTags = []),
              (t.selectedtags = Object(u.g)(e.selectedtags)),
              (t.state = { value: "", suggestions: [] }),
              t
            );
          }
          return (
            Object(u.d)(e, a),
            (e.prototype.componentDidMount = function () {
              var e = V.getTags();
              if (e)
                for (var t = 0, a = e; t < a.length; t++) {
                  var i = a[t];
                  this.rgTags.push({ id: parseInt(i.tagid), name: i.name });
                }
            }),
            (e.prototype.onFetchRequested = function (e) {
              var t = e.value.trim().toLowerCase(),
                a = t.length,
                i =
                  0 === a
                    ? this.props.tagoptions.slice(0, 10)
                    : this.props.tagoptions.filter(function (e) {
                        return e.name.toLowerCase().slice(0, a) === t;
                      });
              this.setState({ suggestions: i });
            }),
            (e.prototype.onClearRequested = function () {}),
            (e.prototype.onChange = function (e, t) {
              this.setState({ value: t.newValue });
            }),
            (e.prototype.onKeyDown = function (e) {
              if (13 == e.keyCode)
                for (var t = 0, a = this.props.tagoptions; t < a.length; t++) {
                  var i = a[t];
                  if (i.name.toLowerCase() == this.state.value.toLowerCase()) {
                    var n = {
                      suggestion: { id: i.id, name: i.name },
                      suggestionValue: i.name,
                      suggestionIndex: 0,
                      sectionIndex: 0,
                      method: "enter",
                    };
                    this.onSuggestionSelected(e, n);
                    break;
                  }
                }
            }),
            (e.prototype.shouldRenderSuggestions = function (e) {
              return !0;
            }),
            (e.prototype.onSuggestionSelected = function (e, t) {
              for (var a = 0, i = this.selectedtags; a < i.length; a++) {
                if (i[a] == t.suggestion.id) return;
              }
              this.selectedtags.push(t.suggestion.id),
                this.props.onAddTag(t.suggestion.id);
            }),
            (e.prototype.onRemoveSelectedTag = function (e) {
              for (var t = 0; t < this.selectedtags.length; t++)
                if (this.selectedtags[t] == e) {
                  this.props.onRemoveTag(this.selectedtags[t]),
                    this.selectedtags.splice(t, 1);
                  break;
                }
            }),
            (e.prototype.render = function () {
              for (
                var a = this,
                  e = {
                    placeholder: Object(x.f)("#TagSelect"),
                    value: this.state.value,
                    onChange: this.onChange,
                    onKeyDown: this.onKeyDown,
                  },
                  i = [],
                  t = 0,
                  n = this.selectedtags;
                t < n.length;
                t++
              ) {
                !(function (t) {
                  var e = V.m_TagNameMap.get(t);
                  i.push(
                    P.a.createElement(
                      "div",
                      {
                        key: t,
                        className: F.SelectedTag,
                        onClick: function (e) {
                          return a.onRemoveSelectedTag(t);
                        },
                      },
                      P.a.createElement("div", null, e),
                      P.a.createElement("div", { className: F.Close }, "X")
                    )
                  );
                })(n[t]);
              }
              return P.a.createElement(
                "div",
                { className: F.OptionTagList },
                P.a.createElement(
                  "div",
                  { className: F.Label },
                  this.props.title
                ),
                P.a.createElement(m.a, {
                  suggestions: this.state.suggestions,
                  onSuggestionsFetchRequested: this.onFetchRequested,
                  onSuggestionsClearRequested: this.onClearRequested,
                  onSuggestionSelected: this.onSuggestionSelected,
                  shouldRenderSuggestions: this.shouldRenderSuggestions,
                  getSuggestionValue: function (e) {
                    return e.name;
                  },
                  renderSuggestion: function (e) {
                    return P.a.createElement("div", null, e.name);
                  },
                  inputProps: e,
                  theme: {
                    input: F.SuggestionInput,
                    suggestion: F.OptionSuggestion,
                    suggestionsList: F.SuggestionsList,
                    suggestionsContainerOpen: F.SuggestionContainerOpen,
                  },
                }),
                i
              );
            }),
            Object(u.c)([s.C], e.prototype, "selectedtags", void 0),
            Object(u.c)([l.a], e.prototype, "onFetchRequested", null),
            Object(u.c)([l.a], e.prototype, "onClearRequested", null),
            Object(u.c)([l.a], e.prototype, "onChange", null),
            Object(u.c)([l.a], e.prototype, "onKeyDown", null),
            Object(u.c)([l.a], e.prototype, "shouldRenderSuggestions", null),
            Object(u.c)([l.a], e.prototype, "onSuggestionSelected", null),
            Object(u.c)([l.a], e.prototype, "onRemoveSelectedTag", null),
            (e = Object(u.c)([n.a], e))
          );
        })(P.a.Component),
        j = Object(n.a)(function () {
          var e = V.getTags(),
            t = [];
          if (e)
            for (var a = 0, i = e; a < i.length; a++) {
              var n = i[a];
              t.push({ id: parseInt(n.tagid), name: n.name });
            }
          var r = [
              Object(x.f)("#FilterAge_120"),
              Object(x.f)("#FilterAge_60"),
              Object(x.f)("#FilterAge_36"),
              Object(x.f)("#FilterAge_24"),
              Object(x.f)("#FilterAge_12"),
              Object(x.f)("#FilterAge_6"),
            ],
            o = V.m_rgSavedExcludeTags,
            s = V.m_rgSavedFilterTags;
          return P.a.createElement(
            "div",
            { className: F.RecommendationOptions },
            P.a.createElement(
              "div",
              { className: Object(M.a)(F.Row, F.FirstRow) },
              P.a.createElement(y, {
                minLabel: Object(x.f)("#Popularity_Popular"),
                titleLabel: Object(x.f)("#Popularity_Title"),
                maxLabel: Object(x.f)("#Popularity_Niche"),
                minValue: 0,
                maxValue: 1,
                value: V.m_fQueuedPopularityValue,
                onChange: V.onPopularityChanged,
              }),
              P.a.createElement(y, {
                minLabel: Object(x.f)("#Recency_Older"),
                titleLabel: Object(x.f)("#Recency_Title"),
                maxLabel: Object(x.f)("#Recency_Newer"),
                minValue: 0,
                maxValue: 1,
                value: V.m_fQueuedRecencyValue,
                onChange: V.onRecencyChanged,
                sliderLabels: r,
              })
            ),
            P.a.createElement(
              "div",
              { className: Object(M.a)(F.Row, F.SecondRow) },
              P.a.createElement(R, {
                title: Object(x.f)("#TagFilterMultiple_Title"),
                tagoptions: t,
                selectedtags: s,
                key: "Filter" + s.toString(),
                onAddTag: V.onTagFilterAdd,
                onRemoveTag: V.onTagFilterRemove,
              }),
              P.a.createElement(R, {
                title: Object(x.f)("#TagExcludeMultiple_Title"),
                tagoptions: t,
                selectedtags: o,
                key: "Exclude" + o.toString(),
                onAddTag: V.onTagExcludeAdd,
                onRemoveTag: V.onTagExcludeRemove,
              }),
              P.a.createElement(T, {
                className: F.WishlistCheckbox,
                titleLabel: Object(x.f)("#ExcludeWishlisted"),
                checked: V.m_bExcludeWishlisted,
                onChange: V.onExcludeWishlistedToggled,
              }),
              P.a.createElement(
                "button",
                {
                  className: F.SaveUserSettingsButton,
                  onClick: V.onSaveUserSettings,
                  title: Object(x.f)("#SaveUserSettingsTooltip"),
                },
                Object(x.f)("#SaveUserSettings")
              )
            )
          );
        }),
        D = (function (a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (
              (t.m_videoRef = P.a.createRef()),
              (t.state = {
                hovered: !1,
                wishlisted: V.getAppInfo()[e.appID].w,
              }),
              t
            );
          }
          return (
            Object(u.d)(e, a),
            (e.prototype.componentDidMount = function () {
              this.m_videoRef.current.defaultMuted = !0;
            }),
            (e.prototype.componentDidUpdate = function () {
              var e;
              this.state.hovered &&
                this.m_videoRef &&
                this.m_videoRef.current &&
                0 == this.m_videoRef.current.currentTime &&
                (e = this.m_videoRef.current.play()) &&
                e.then(
                  function () {},
                  function () {}
                );
            }),
            (e.prototype.OnHover = function () {
              this.setState({ hovered: !0 });
            }),
            (e.prototype.OnUnHover = function () {
              this.setState({ hovered: !1 }),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  ((this.m_videoRef.current.currentTime = 0),
                  this.m_videoRef.current.pause());
            }),
            (e.prototype.onMuteToggle = function (e) {
              V.shouldMute()
                ? (V.onUnMuteClicked(),
                  this.m_videoRef &&
                    this.m_videoRef.current &&
                    (this.m_videoRef.current.muted = !1))
                : (V.onMuteClicked(),
                  this.m_videoRef &&
                    this.m_videoRef.current &&
                    (this.m_videoRef.current.muted = !0)),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (e.prototype.onAddToWishlist = function (e) {
              V.onAddToWishlist(this.props.appID, this.props.rank),
                this.setState({ wishlisted: !0 }),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (e.prototype.onGoToWishlist = function (e) {
              V.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
            }),
            (e.prototype.onAddToCart = function (e) {
              V.onAddToCart(this.props.appID, this.props.rank),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.props,
                a = e.appID,
                i = e.score,
                n = e.rank,
                r = e.width,
                o =
                  "https://steamcdn-a.akamaihd.net/steam/apps/" +
                  a +
                  "/header.jpg",
                s = V.getAppInfo()[a];
              if (!s) return P.a.createElement("div", null);
              var c = s.n,
                l =
                  0 < s.r
                    ? Object(x.f)(
                        "#Recommendation_ReleasedOn",
                        Object(x.o)(s.r)
                      )
                    : "",
                d = [];
              if (s.t)
                for (var m = 0, u = 0, p = s.t; u < p.length; u++) {
                  var _ = p[u];
                  if (
                    (d.push(
                      P.a.createElement(
                        "div",
                        { key: a + "_" + _, className: F.Tag },
                        V.getTagName(_)
                      )
                    ),
                    5 == ++m)
                  )
                    break;
                }
              var h = parseInt(F.smallentrywidth),
                g = parseInt(F.optionswrapwidth),
                v = 112,
                E = !0;
              r < h ? (E = !(v = 66)) : r < g && (E = !(v = 87));
              var f,
                b = E && this.state.hovered,
                S = Math.min(Number(i) / 10, 1e3),
                y = (Math.max(1, i), !1),
                T = !1,
                O = !0,
                R = "",
                N = "",
                L = "",
                C = "",
                I = "",
                A = !1,
                j = !0;
              !b ||
                ((f = V.getDetails(this.props.appID)) &&
                  ((y = !0),
                  (T = 0 < f.discount_pct),
                  (O = "0" == f.discount_price),
                  "probably" ==
                  document
                    .createElement("video")
                    .canPlayType('video/webm; codecs="vp8, vorbis"')
                    ? V.shouldUseMicrotrailers() && f.microtrailer_webm
                      ? ((I = f.microtrailer_webm), (j = !(A = !0)))
                      : (I = f.video_webm)
                    : V.shouldUseMicrotrailers() && f.microtrailer_mp4
                    ? ((I = f.microtrailer_mp4), (j = !(A = !0)))
                    : (I = f.video_mp4),
                  (R = "-" + f.discount_pct + "%"),
                  (N = f.base_price),
                  (L = O ? Object(x.f)("#FreeToPlay") : f.discount_price),
                  (C = f.description)));
              var D = I && 0 < I.length;
              return P.a.createElement(
                U.a,
                { appID: a, snr: k.LINK_PARAM },
                P.a.createElement(
                  "a",
                  {
                    href: k.BASE_URL + "app/" + a + "?snr=" + k.LINK_PARAM,
                    onClick: function () {
                      return V.onAppClicked(a, n);
                    },
                    className: Object(M.a)(
                      F.RecommendationEntry,
                      "ds_flagged",
                      "ds_wishlist",
                      30 < n && F.Hidden,
                      b && F.Hovered
                    ),
                    style: { top: Math.min(31, n) * v },
                    onMouseEnter: this.OnHover,
                    onMouseLeave: this.OnUnHover,
                  },
                  P.a.createElement(
                    "div",
                    { className: F.TopEntrySection },
                    P.a.createElement(
                      "div",
                      { className: F.LeftSection },
                      P.a.createElement("img", {
                        className: Object(M.a)(
                          F.Logo,
                          (!D || !b) && F.Revealed
                        ),
                        src: o,
                      }),
                      P.a.createElement("video", {
                        ref: this.m_videoRef,
                        className: Object(M.a)(
                          "highlight_player_item",
                          "highlight_movie",
                          F.Video,
                          D && b && F.Revealed
                        ),
                        playsInline: !0,
                        autoPlay: !0,
                        muted: j && V.shouldMute(),
                        src: I,
                        loop: A,
                      }),
                      j &&
                        P.a.createElement(
                          "div",
                          {
                            className: Object(M.a)(F.UnMute, D && F.Revealed),
                            onClick: function (e) {
                              return t.onMuteToggle(e);
                            },
                          },
                          P.a.createElement(w.hb, { muted: V.shouldMute() })
                        ),
                      this.state.wishlisted &&
                        P.a.createElement(
                          "div",
                          {
                            className: Object(M.a)(
                              "ds_flag",
                              "ds_wishlist_flag",
                              F.WishlistFlag
                            ),
                          },
                          Object(x.f)("#Recommendation_OnWishlist") + "  "
                        )
                    ),
                    P.a.createElement(
                      "div",
                      { className: F.RightSection },
                      P.a.createElement("div", { className: F.Name }, c),
                      P.a.createElement(
                        "div",
                        { className: F.CenterSection },
                        P.a.createElement(
                          "div",
                          {
                            className: Object(M.a)(
                              F.CenterOption,
                              F.CenterDefault,
                              b && F.Hidden
                            ),
                          },
                          P.a.createElement(
                            "div",
                            { className: F.Released },
                            l
                          ),
                          P.a.createElement(
                            "div",
                            { className: F.BarContainer },
                            P.a.createElement("div", {
                              className: F.Bar,
                              style: { width: S + "%" },
                            })
                          ),
                          P.a.createElement("div", { className: F.Tags }, d)
                        ),
                        P.a.createElement(
                          "div",
                          {
                            className: Object(M.a)(
                              F.CenterOption,
                              F.CenterHovered,
                              !b && F.Hidden
                            ),
                          },
                          C
                        )
                      ),
                      y &&
                        P.a.createElement(
                          "div",
                          { className: F.BottomEntrySection },
                          P.a.createElement(
                            "div",
                            {
                              className: Object(M.a)(
                                "game_purchase_action",
                                F.PurchaseSection
                              ),
                            },
                            P.a.createElement(
                              "div",
                              {
                                className: Object(M.a)(
                                  "game_purchase_action_bg",
                                  F.PurchaseBG
                                ),
                              },
                              T &&
                                P.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "discount_block game_purchase_discount",
                                  },
                                  P.a.createElement(
                                    "div",
                                    { className: "discount_pct" },
                                    R
                                  ),
                                  P.a.createElement(
                                    "div",
                                    { className: "discount_prices" },
                                    P.a.createElement(
                                      "div",
                                      { className: "discount_original_price" },
                                      N
                                    ),
                                    P.a.createElement(
                                      "div",
                                      { className: "discount_final_price" },
                                      L
                                    )
                                  )
                                ),
                              !T &&
                                P.a.createElement(
                                  "div",
                                  {
                                    className: Object(M.a)(
                                      "game_purchase_price",
                                      "price",
                                      F.Price
                                    ),
                                  },
                                  L
                                ),
                              !O &&
                                P.a.createElement(
                                  "div",
                                  {
                                    className: "btn_addtocart",
                                    onClick: function (e) {
                                      return t.onAddToCart(e);
                                    },
                                  },
                                  P.a.createElement(
                                    "span",
                                    {
                                      className:
                                        "btnv6_green_white_innerfade btn_medium",
                                    },
                                    P.a.createElement(
                                      "span",
                                      null,
                                      Object(x.f)("#btn_add_to_cart")
                                    )
                                  )
                                )
                            )
                          ),
                          !this.state.wishlisted &&
                            !O &&
                            P.a.createElement(
                              "div",
                              {
                                id: "add_to_wishlist_area",
                                className: F.WishlistSection,
                                onClick: function (e) {
                                  return t.onAddToWishlist(e);
                                },
                              },
                              P.a.createElement(
                                "div",
                                {
                                  className: "btnv6_blue_hoverfade btn_medium",
                                },
                                P.a.createElement(
                                  "span",
                                  null,
                                  Object(x.f)("#wishlist_add_to_wishlist")
                                )
                              )
                            ),
                          this.state.wishlisted &&
                            !O &&
                            P.a.createElement(
                              "div",
                              {
                                className: Object(M.a)(
                                  "btnv6_blue_hoverfade btn_medium",
                                  "queue_btn_active",
                                  F.Wishlisted,
                                  F.WishlistSection
                                ),
                                "data-tooltip-text": Object(x.f)(
                                  "#OnWishlistTooltip"
                                ),
                                onClick: function (e) {
                                  return t.onGoToWishlist(e);
                                },
                              },
                              P.a.createElement(
                                "span",
                                null,
                                P.a.createElement("img", {
                                  src:
                                    k.IMG_URL_BASE + "/v6/ico/ico_selected.png",
                                }),
                                "  " + Object(x.f)("#OnWishlist")
                              )
                            )
                        )
                    )
                  )
                )
              );
            }),
            Object(u.c)([l.a], e.prototype, "OnHover", null),
            Object(u.c)([l.a], e.prototype, "OnUnHover", null),
            Object(u.c)([l.a], e.prototype, "onMuteToggle", null),
            Object(u.c)([l.a], e.prototype, "onAddToWishlist", null),
            Object(u.c)([l.a], e.prototype, "onGoToWishlist", null),
            Object(u.c)([l.a], e.prototype, "onAddToCart", null),
            (e = Object(u.c)([n.a], e))
          );
        })(P.a.Component),
        N = (function (a) {
          function e(e) {
            var t = a.call(this, e) || this;
            return (t.state = { sortedRecommendedApps: [] }), t;
          }
          return (
            Object(u.d)(e, a),
            (e.prototype.render = function () {
              var e = V.m_fRecencyValue * (k.NUM_RECENCY_STEPS - 1 - 0.001),
                t = Math.floor(e),
                a = t + 1,
                i = 1 - (e - t),
                n = 1 - i,
                r = V.m_fPopularityValue * (k.NUM_POPULARITY_STEPS - 1 - 0.001),
                o = Math.floor(r),
                s = o + 1,
                c = 1 - (r - o),
                l = 1 - c,
                d = [];
              d.push({ index: o * k.NUM_RECENCY_STEPS + t, weight: c * i }),
                d.push({ index: s * k.NUM_RECENCY_STEPS + t, weight: l * i }),
                d.push({ index: o * k.NUM_RECENCY_STEPS + a, weight: c * n }),
                d.push({ index: s * k.NUM_RECENCY_STEPS + a, weight: l * n });
              var m = new Map(),
                u = 0,
                p = V.getRecommendations(),
                _ = V.getAppInfo(),
                h = [];
              if (p) {
                for (var g = 0, v = d; g < v.length; g++) {
                  var E = v[g],
                    f = p[E.index],
                    u = Math.max(u, f.score_scale);
                  if (f)
                    for (var b = 0; b < f.app_ids.length; b++) {
                      var S,
                        y = f.app_ids[b];
                      !_[y] ||
                        _[y].o ||
                        _[y].i ||
                        _[y].ti ||
                        (_[y].w && V.m_bExcludeWishlisted) ||
                        ((S =
                          (m.get(y) || 0) +
                          f.scores[b] * E.weight * f.score_scale),
                        m.set(y, S));
                    }
                }
                m.forEach(function (e, t) {
                  return m.set(t, e / u);
                });
                var T = [];
                m.forEach(function (e, t) {
                  return T.push({ appid: t, score: e });
                });
                var O = (T = (T = (T = T.filter(function (e) {
                  return _[e.appid].t && V.doTagsPassFilter(_[e.appid].t);
                })).filter(function (e) {
                  return _[e.appid].t && !V.doTagsFailExclusion(_[e.appid].t);
                })).filter(function (e) {
                  return 0 < e.score;
                })).sort(function (e, t) {
                  return t.score - e.score;
                });
                if (0 < O.length) {
                  for (
                    var R = 0, N = 0, L = (O = O.slice(0, 30));
                    N < L.length;
                    N++
                  ) {
                    (L[N].rank = R), R++;
                  }
                  for (var C = 0, I = O; C < I.length; C++) {
                    var A = I[C];
                    h.push(
                      P.a.createElement(D, {
                        key: A.appid,
                        appID: A.appid,
                        score: A.score,
                        rank: A.rank,
                        width: this.props.width,
                      })
                    );
                  }
                } else
                  h.push(
                    P.a.createElement(
                      "div",
                      {
                        key: "no_recommedations_due_to_filter",
                        className: F.NoRecommendationsMessage,
                      },
                      Object(x.f)("#NoRecommendationsDueToFilter")
                    )
                  );
              } else
                h.push(
                  P.a.createElement("div", {
                    key: "recommendations_loading",
                    className: F.RecommendationsLoading,
                  })
                );
              return P.a.createElement(
                "div",
                { className: F.RecommendationList },
                P.a.createElement(
                  "div",
                  { className: F.Header },
                  Object(x.f)("#Recommendations_Header")
                ),
                P.a.createElement(j, null),
                P.a.createElement(
                  "div",
                  {
                    className: Object(M.a)(
                      F.List,
                      V.areResultsExpired() && F.Updating
                    ),
                  },
                  h
                )
              );
            }),
            (e = Object(u.c)([n.a], e))
          );
        })(P.a.Component),
        L = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { width: window.innerWidth }), e;
          }
          return (
            Object(u.d)(e, t),
            (e.prototype.updateDimensions = function () {
              this.setState({ width: window.innerWidth });
            }),
            (e.prototype.componentDidMount = function () {
              window.addEventListener("resize", this.updateDimensions);
            }),
            (e.prototype.ShowLoginDialog = function () {
              Object(f.a)();
            }),
            (e.prototype.render = function () {
              return r.i.logged_in
                ? P.a.createElement(
                    "div",
                    {
                      className: F.App,
                      style: { height: 3840 + 26 * V.getTagHeight() },
                    },
                    P.a.createElement(
                      "div",
                      { className: F.Container },
                      P.a.createElement(
                        "div",
                        { className: F.TopSection },
                        P.a.createElement(
                          "div",
                          { className: F.Header },
                          Object(x.f)("#HeaderTitle")
                        ),
                        P.a.createElement(
                          "div",
                          { className: F.Body },
                          Object(x.f)("#HeaderBody1")
                        )
                      ),
                      P.a.createElement(
                        "div",
                        { className: F.BottomSection },
                        P.a.createElement(O, { accountID: r.i.accountid }),
                        P.a.createElement("div", { className: F.VerticalBar }),
                        P.a.createElement(N, { width: this.state.width })
                      )
                    )
                  )
                : P.a.createElement(
                    "div",
                    { className: F.App },
                    P.a.createElement(
                      "div",
                      { className: F.Login },
                      P.a.createElement(
                        "div",
                        { className: F.Text },
                        Object(x.f)("#LoginText")
                      ),
                      P.a.createElement(
                        "div",
                        {
                          className: Object(M.a)(
                            "btn_green_white_innerfade",
                            " btn_medium"
                          ),
                          onClick: this.ShowLoginDialog,
                        },
                        P.a.createElement(
                          "span",
                          null,
                          Object(x.f)("#LoginButton")
                        )
                      )
                    )
                  );
            }),
            Object(u.c)([l.a], e.prototype, "updateDimensions", null),
            Object(u.c)([l.a], e.prototype, "ShowLoginDialog", null),
            (e = Object(u.c)([n.a], e))
          );
        })(P.a.Component);
      t.default = L;
    },
    Asqs: function (e, t, a) {
      e.exports = {
        smallentrywidth: "600px",
        optionswrapwidth: "777px",
        App: "interactiverecommender_App_u3SD8",
        Login: "interactiverecommender_Login_3wfCR",
        Text: "interactiverecommender_Text_1PXPv",
        Container: "interactiverecommender_Container_2g8SX",
        TopSection: "interactiverecommender_TopSection_fR3i6",
        Header: "interactiverecommender_Header_2CDNs",
        Body: "interactiverecommender_Body_174-d",
        Spacer: "interactiverecommender_Spacer_1f2cz",
        BottomSection: "interactiverecommender_BottomSection_3A60h",
        VerticalBar: "interactiverecommender_VerticalBar_2qL2p",
        PlaytimeList: "interactiverecommender_PlaytimeList_3qtYu",
        Loading: "interactiverecommender_Loading_3pjYy",
        IdentityBlock: "interactiverecommender_IdentityBlock_qLWcn",
        Avatar: "interactiverecommender_Avatar_VmdbP",
        PersonalInfo: "interactiverecommender_PersonalInfo_2oJXF",
        Persona: "interactiverecommender_Persona_2vp7F",
        GameCount: "interactiverecommender_GameCount_1AIEP",
        TotalTime: "interactiverecommender_TotalTime_1tOWe",
        PlayedGame: "interactiverecommender_PlayedGame_sNb81",
        Ignored: "interactiverecommender_Ignored_30mws",
        PlaytimeInfo: "interactiverecommender_PlaytimeInfo_1UkGo",
        IgnoreToggle: "interactiverecommender_IgnoreToggle_3hXvg",
        Logo: "interactiverecommender_Logo_26qua",
        HoursPlayed: "interactiverecommender_HoursPlayed_3Ye_W",
        Title: "interactiverecommender_Title_Eucai",
        LastPlayed: "interactiverecommender_LastPlayed_1DwCl",
        UpdateSaveBlock: "interactiverecommender_UpdateSaveBlock_iaGmJ",
        UpdateButton: "interactiverecommender_UpdateButton_wcFtI",
        Enabled: "interactiverecommender_Enabled_3QyVu",
        RecommendationList: "interactiverecommender_RecommendationList_1krh3",
        List: "interactiverecommender_List_C6mYR",
        Updating: "interactiverecommender_Updating_1m954",
        NoRecommendationsMessage:
          "interactiverecommender_NoRecommendationsMessage_1Ps6j",
        RecommendationOptions:
          "interactiverecommender_RecommendationOptions_2F61j",
        Row: "interactiverecommender_Row_1sYIz",
        SecondRow: "interactiverecommender_SecondRow_K-rzA",
        OptionCheckbox: "interactiverecommender_OptionCheckbox_2Cb6n",
        Checkbox: "interactiverecommender_Checkbox_29uP5",
        WishlistCheckbox: "interactiverecommender_WishlistCheckbox_1cnxU",
        SaveUserSettingsButton:
          "interactiverecommender_SaveUserSettingsButton_1VRgd",
        OptionSlider: "interactiverecommender_OptionSlider_26ek6",
        Labels: "interactiverecommender_Labels_22UxF",
        Min: "interactiverecommender_Min_1uiM2",
        Max: "interactiverecommender_Max_17wCM",
        OptionalLabel: "interactiverecommender_OptionalLabel_1JIe5",
        OptionDropdown: "interactiverecommender_OptionDropdown_1dKx5",
        Label: "interactiverecommender_Label_XPFnC",
        OptionTagList: "interactiverecommender_OptionTagList_uNxeG",
        SelectedTag: "interactiverecommender_SelectedTag_2uInW",
        Close: "interactiverecommender_Close_2bZrr",
        RecommendationEntry: "interactiverecommender_RecommendationEntry_3opuX",
        BottomEntrySection: "interactiverecommender_BottomEntrySection_2U08C",
        WishlistSection: "interactiverecommender_WishlistSection_dS7Rz",
        Hidden: "interactiverecommender_Hidden_2teee",
        TopEntrySection: "interactiverecommender_TopEntrySection_1IvHp",
        LeftSection: "interactiverecommender_LeftSection_1shxg",
        Video: "interactiverecommender_Video_3oNv9",
        Revealed: "interactiverecommender_Revealed_3aiFy",
        UnMute: "interactiverecommender_UnMute_21t3_",
        RightSection: "interactiverecommender_RightSection_27p3s",
        CenterSection: "interactiverecommender_CenterSection_M9CWJ",
        CenterOption: "interactiverecommender_CenterOption_3mXMY",
        Name: "interactiverecommender_Name_2FQXD",
        Released: "interactiverecommender_Released_3EvdK",
        BarContainer: "interactiverecommender_BarContainer_3qWin",
        Bar: "interactiverecommender_Bar_16q7Q",
        Score: "interactiverecommender_Score_17yr_",
        Tags: "interactiverecommender_Tags_3KlI0",
        Tag: "interactiverecommender_Tag_1rNtz",
        Hovered: "interactiverecommender_Hovered_3b9wG",
        Wishlisted: "interactiverecommender_Wishlisted_2uh0O",
        PurchaseSection: "interactiverecommender_PurchaseSection_mjTZM",
        PurchaseBG: "interactiverecommender_PurchaseBG_2UHKw",
        Price: "interactiverecommender_Price_18mm0",
        WishlistFlag: "interactiverecommender_WishlistFlag_2TuuQ",
        SelectionBox: "interactiverecommender_SelectionBox_2W7pR",
        SuggestionInput: "interactiverecommender_SuggestionInput_3OdNp",
        SuggestionContainerOpen:
          "interactiverecommender_SuggestionContainerOpen_2NTkL",
        SuggestionsList: "interactiverecommender_SuggestionsList_2zgal",
        OptionSuggestion: "interactiverecommender_OptionSuggestion_3VKY5",
      };
    },
  },
]);

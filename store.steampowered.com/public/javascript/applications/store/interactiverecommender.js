/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "3WEt": function (e, t, a) {
      "use strict";
      a.r(t);
      var i,
        n = a("mrSG"),
        r = a("lkRc"),
        o = a("TyAF"),
        s = a("2vnA"),
        c = a("q1tI"),
        l = a.n(c),
        d = a("Ophz"),
        m = a("6Y59"),
        u = a("exH9"),
        p = a("TLQK"),
        _ = a("opsS"),
        h = a("Asqs"),
        g = a("1h/R"),
        v = a.n(g),
        E = a("vDqi"),
        f = a.n(E);
      !(function (e) {
        (e[(e.Unrequested = 0)] = "Unrequested"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Valid = 2)] = "Valid"),
          (e[(e.Failed = 3)] = "Failed"),
          (e[(e.Rerequest = 4)] = "Rerequest");
      })(i || (i = {}));
      var b,
        S = (function () {
          function e() {
            (this.eState = i.Unrequested), (this.nExpirationTime = 0);
          }
          return (
            (e.prototype.getData = function (e, t, a) {
              var n = this,
                r = this.eState == i.Pending || this.eState == i.Rerequest;
              return (
                this.isExpired() &&
                  !r &&
                  ((this.eState = i.Pending),
                  t()
                    .then(function (r) {
                      if (n.eState == i.Rerequest)
                        return n.expireData(), void n.getData(e, t, a);
                      (n.data = a ? a(r) : r),
                        r
                          ? (n.delayNewData(e), (n.eState = i.Valid))
                          : (n.eState = i.Failed);
                    })
                    .catch(function (e) {
                      (n.data = a(void 0)), (n.eState = i.Failed);
                    })),
                this.data
              );
            }),
            (e.prototype.clearData = function () {
              (this.eState = i.Unrequested),
                (this.data = null),
                (this.nExpirationTime = 0);
            }),
            (e.prototype.setDataPending = function () {
              this.eState = i.Pending;
            }),
            (e.prototype.isDataPending = function () {
              return this.eState == i.Pending;
            }),
            (e.prototype.setData = function (e, t) {
              (this.data = t), this.delayNewData(e), (this.eState = i.Valid);
            }),
            (e.prototype.expireData = function () {
              this.nExpirationTime = 0;
            }),
            (e.prototype.isExpired = function () {
              var e = Date.now() / 1e3;
              return this.nExpirationTime < e;
            }),
            (e.prototype.delayNewData = function (e) {
              if (e <= 0) this.nExpirationTime = Number.MAX_SAFE_INTEGER;
              else {
                var t = Date.now() / 1e3;
                this.nExpirationTime = t + e;
              }
            }),
            (e.prototype.rerequestDataIfPending = function () {
              this.eState == i.Pending && (this.eState = i.Rerequest);
            }),
            (e.prototype.getCachedData = function () {
              return this.data;
            }),
            Object(n.c)([s.C], e.prototype, "data", void 0),
            Object(n.c)([s.C], e.prototype, "nExpirationTime", void 0),
            e
          );
        })(),
        y = {
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
      !(function (e) {
        (e[(e.ClickThrough = 1)] = "ClickThrough"),
          (e[(e.AddToWishlist = 2)] = "AddToWishlist"),
          (e[(e.AddToCart = 3)] = "AddToCart");
      })(b || (b = {}));
      var T = new ((function () {
        function e() {
          var e = this;
          (this.m_rgFilterTags = []),
            (this.m_rgExcludeTags = []),
            (this.m_rgSavedFilterTags = []),
            (this.m_rgSavedExcludeTags = []),
            (this.m_mapAppDetailsCache = new Map()),
            (this.m_ResultDataCache = new S()),
            (this.m_InputAppsCache = new S()),
            (this.m_TagsCache = new S()),
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
            (this.m_fPopularityValue = y.DEFAULT_POPULARITY_SLIDER),
              (this.m_fRecencyValue = y.DEFAULT_RECENCY_SLIDER),
              (this.m_rgSavedExcludeTags = Object(n.g)(
                y.DEFAULT_EXCLUDED_TAGS
              )),
              (this.m_rgSavedFilterTags = Object(n.g)(y.DEFAULT_INCLUDED_TAGS)),
              (this.m_rgExcludeTags = Object(n.g)(this.m_rgSavedExcludeTags)),
              (this.m_rgFilterTags = Object(n.g)(this.m_rgSavedFilterTags)),
              (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
              (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
              (this.m_bExcludeWishlisted = !1),
              (this.m_bStateUpdated = !0),
              (this.m_bExcludeWishlisted = y.EXCLUDE_WISHLIST),
              (this.m_bUseMicrotrailers = y.USE_MICROTRAILERS);
          }),
          (e.prototype.getDetails = function (e) {
            var t = this;
            return (
              this.m_mapAppDetailsCache.has(e) ||
                this.m_mapAppDetailsCache.set(e, new S()),
              this.m_mapAppDetailsCache.get(e).getData(
                60,
                function () {
                  return Object(n.b)(t, void 0, void 0, function () {
                    return Object(n.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            f.a.get(
                              y.BASE_URL +
                                "recommender/" +
                                y.STEAM_ID +
                                "/details?appid=" +
                                e +
                                "&sessionid=" +
                                y.SESSION_ID
                            ),
                          ];
                        case 1:
                          return [2, t.sent()];
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
            var r = this,
              o = e ? "1" : "0",
              s = t ? "" + t : "0",
              c = a ? "1" : "0",
              l = i ? "" + i : "0",
              d = "",
              m = this.getInputApps();
            if (m) {
              var u = [];
              return (
                Object.keys(m).map(function (e) {
                  (m[e].i || m[e].ip) && u.push(m[e].a);
                }),
                u.length > 0 && (d = "&ignored=" + u.join()),
                this.m_ResultDataCache.getData(
                  9999999,
                  function () {
                    return Object(n.b)(r, void 0, void 0, function () {
                      return Object(n.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [
                              4,
                              f.a.get(
                                y.BASE_URL +
                                  "recommender/" +
                                  y.STEAM_ID +
                                  "/results?sessionid=" +
                                  y.SESSION_ID +
                                  "&steamid=" +
                                  y.STEAM_ID +
                                  "&include_played=" +
                                  o +
                                  "&algorithm=" +
                                  s +
                                  "&reinference=" +
                                  c +
                                  "&model_version=" +
                                  l +
                                  d
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
            var e = T.getResults(
              y.INCLUDE_PLAYED,
              y.ALGORITHM,
              y.REINFERENCE,
              y.MODEL_VERSION
            );
            return e ? e.recommendations : void 0;
          }),
          (e.prototype.getInputApps = function () {
            var e = this;
            return this.m_InputAppsCache.getData(
              9999999,
              function () {
                return Object(n.b)(e, void 0, void 0, function () {
                  return Object(n.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          f.a.get(
                            y.BASE_URL +
                              "recommender/" +
                              y.STEAM_ID +
                              "/inputs?sessionid=" +
                              y.SESSION_ID +
                              "&steamid=" +
                              y.STEAM_ID
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
            var e = T.getResults(
              y.INCLUDE_PLAYED,
              y.ALGORITHM,
              y.REINFERENCE,
              y.MODEL_VERSION
            );
            return e ? e.app_info : void 0;
          }),
          (e.prototype.getTags = function () {
            var e = this;
            return this.m_TagsCache.getData(
              9999999,
              function () {
                return Object(n.b)(e, void 0, void 0, function () {
                  return Object(n.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          f.a.get(
                            y.BASE_URL +
                              "recommender/" +
                              y.STEAM_ID +
                              "/tags?sessionid=" +
                              y.SESSION_ID
                          ),
                        ];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              },
              function (t) {
                e.m_TagNameMap.clear();
                for (var a = 0, i = t.data; a < i.length; a++) {
                  var n = i[a];
                  e.m_TagNameMap.set(n.tagid, n.name);
                }
                return t.data;
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
            return Object(n.b)(this, void 0, void 0, function () {
              var e, t, a, i, r, o;
              return Object(n.e)(this, function (s) {
                switch (s.label) {
                  case 0:
                    for (
                      e = [], t = this.getInputApps(), a = 0, i = t;
                      a < i.length;
                      a++
                    )
                      ((r = i[a]).i || r.ip) && e.push(r.a);
                    return this.m_fRecencyValue != y.DEFAULT_RECENCY_SLIDER ||
                      this.m_fPopularityValue != y.DEFAULT_POPULARITY_SLIDER ||
                      this.m_rgFilterTags.slice().sort().join(",") !==
                        this.m_rgSavedFilterTags.sort().join(",") ||
                      this.m_rgExcludeTags.slice().sort().join(",") !==
                        this.m_rgSavedExcludeTags.sort().join(",") ||
                      e.slice().sort().join(",") !==
                        y.DEFAULT_IGNORED_PLAYED_APPS.sort().join(",") ||
                      this.m_bExcludeWishlisted != y.EXCLUDE_WISHLIST
                      ? [3, 1]
                      : [3, 3];
                  case 1:
                    return (
                      (o = {
                        session_id: y.SESSION_ID,
                        recency_position: this.m_fRecencyValue,
                        popularity_position: this.m_fPopularityValue,
                        included_tags: this.m_rgFilterTags,
                        excluded_tags: this.m_rgExcludeTags,
                        ignored_played_apps: e,
                        exclude_wishlist: this.m_bExcludeWishlisted,
                      }),
                      (y.DEFAULT_RECENCY_SLIDER = this.m_fRecencyValue),
                      (y.DEFAULT_POPULARITY_SLIDER = this.m_fPopularityValue),
                      (y.DEFAULT_INCLUDED_TAGS = Object(n.g)(
                        this.m_rgFilterTags
                      )),
                      (y.DEFAULT_EXCLUDED_TAGS = Object(n.g)(
                        this.m_rgExcludeTags
                      )),
                      (this.m_rgSavedFilterTags = Object(n.g)(
                        this.m_rgFilterTags
                      )),
                      (this.m_rgSavedExcludeTags = Object(n.g)(
                        this.m_rgExcludeTags
                      )),
                      (y.DEFAULT_IGNORED_PLAYED_APPS = Object(n.g)(e)),
                      (y.EXCLUDE_WISHLIST = this.m_bExcludeWishlisted),
                      [
                        4,
                        f.a.post(
                          y.BASE_URL +
                            "recommender/" +
                            y.STEAM_ID +
                            "/savesettings",
                          o
                        ),
                      ]
                    );
                  case 2:
                    s.sent(), (s.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.onToggleIgnore = function (e) {
            return Object(n.b)(this, void 0, void 0, function () {
              var t, a, i, r;
              return Object(n.e)(this, function (n) {
                for (t = this.getInputApps(), a = 0, i = t; a < i.length; a++)
                  if ((r = i[a]).a == e) {
                    r.i || r.ip ? ((r.i = !1), (r.ip = !1)) : (r.ip = !0);
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
          (e.prototype.onAppClicked = function (e, t) {
            return Object(n.b)(this, void 0, void 0, function () {
              var a;
              return Object(n.e)(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (a = {
                        account_id: y.ACCOUNT_ID,
                        session_id: y.SESSION_ID,
                        app_id: e,
                        app_rank: t,
                        action: b.ClickThrough,
                        algorithm: 1,
                        setting_1: 100 * this.m_fPopularityValue,
                        setting_2: 100 * this.m_fRecencyValue,
                      }),
                      [
                        4,
                        f.a.post(
                          y.BASE_URL + "recommender/" + y.STEAM_ID + "/stats",
                          a
                        ),
                      ]
                    );
                  case 1:
                    return i.sent(), [2];
                }
              });
            });
          }),
          (e.prototype.onAddToWishlist = function (e, t) {
            return Object(n.b)(this, void 0, void 0, function () {
              var a, i, r;
              return Object(n.e)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (T.getAppInfo()[e].w = !0),
                      (a = { sessionid: y.SESSION_ID, appid: e }),
                      [
                        4,
                        f.a.post(
                          y.BASE_URL +
                            "recommender/" +
                            y.STEAM_ID +
                            "/wishlist?snr=" +
                            y.LINK_PARAM,
                          a
                        ),
                      ]
                    );
                  case 1:
                    return (
                      (i = n.sent()),
                      (r = {
                        account_id: y.ACCOUNT_ID,
                        session_id: y.SESSION_ID,
                        app_id: e,
                        app_rank: t,
                        action: b.AddToWishlist,
                        algorithm: 1,
                        setting_1: 100 * this.m_fPopularityValue,
                        setting_2: 100 * this.m_fRecencyValue,
                      }),
                      [
                        4,
                        f.a.post(
                          y.BASE_URL + "recommender/" + y.STEAM_ID + "/stats",
                          r
                        ),
                      ]
                    );
                  case 2:
                    return n.sent(), [2, i];
                }
              });
            });
          }),
          (e.prototype.onGoToWishlist = function () {
            window.location.href =
              y.COMMUNITY_BASE_URL + "profiles/" + y.STEAM_ID + "/wishlist";
          }),
          (e.prototype.onAddToCart = function (e, t) {
            return Object(n.b)(this, void 0, void 0, function () {
              var a, i;
              return Object(n.e)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (a = { sessionid: y.SESSION_ID, appid: e }),
                      [
                        4,
                        f.a.post(
                          y.BASE_URL +
                            "recommender/" +
                            y.STEAM_ID +
                            "/cart?snr=" +
                            y.LINK_PARAM,
                          a
                        ),
                      ]
                    );
                  case 1:
                    return (
                      n.sent(),
                      (i = {
                        account_id: y.ACCOUNT_ID,
                        session_id: y.SESSION_ID,
                        app_id: e,
                        app_rank: t,
                        action: b.AddToCart,
                        algorithm: 1,
                        setting_1: 100 * this.m_fPopularityValue,
                        setting_2: 100 * this.m_fRecencyValue,
                      }),
                      [
                        4,
                        f.a.post(
                          y.BASE_URL + "recommender/" + y.STEAM_ID + "/stats",
                          i
                        ),
                      ]
                    );
                  case 2:
                    return (
                      n.sent(),
                      (window.location.href = r.d.STORE_BASE_URL + "cart"),
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
          Object(n.c)([s.C], e.prototype, "m_fPopularityValue", void 0),
          Object(n.c)([s.C], e.prototype, "m_fRecencyValue", void 0),
          Object(n.c)([s.C], e.prototype, "m_rgFilterTags", void 0),
          Object(n.c)([s.C], e.prototype, "m_rgExcludeTags", void 0),
          Object(n.c)([s.C], e.prototype, "m_fQueuedPopularityValue", void 0),
          Object(n.c)([s.C], e.prototype, "m_fQueuedRecencyValue", void 0),
          Object(n.c)([s.C], e.prototype, "m_bExcludeWishlisted", void 0),
          Object(n.c)([s.C], e.prototype, "m_bShouldMute", void 0),
          Object(n.c)([s.C], e.prototype, "m_bUseMicrotrailers", void 0),
          Object(n.c)([s.C], e.prototype, "m_bIgnoredEdited", void 0),
          Object(n.c)([_.a], e.prototype, "getTagHeight", null),
          Object(n.c)([_.a], e.prototype, "onPopularityChanged", null),
          Object(n.c)([_.a], e.prototype, "onRecencyChanged", null),
          Object(n.c)([_.a], e.prototype, "onTagFilterAdd", null),
          Object(n.c)([_.a], e.prototype, "onTagFilterRemove", null),
          Object(n.c)([_.a], e.prototype, "onTagExcludeAdd", null),
          Object(n.c)([_.a], e.prototype, "onTagExcludeRemove", null),
          Object(n.c)([_.a], e.prototype, "doTagsPassFilter", null),
          Object(n.c)([_.a], e.prototype, "doTagsFailExclusion", null),
          Object(n.c)([_.a], e.prototype, "onExcludeWishlistedToggled", null),
          Object(n.c)([_.a], e.prototype, "onSaveUserSettings", null),
          Object(n.c)([_.a], e.prototype, "onToggleIgnore", null),
          Object(n.c)([_.a], e.prototype, "onUpdateWithIgnored", null),
          Object(n.c)([_.a], e.prototype, "onAppClicked", null),
          Object(n.c)([_.a], e.prototype, "onAddToWishlist", null),
          Object(n.c)([_.a], e.prototype, "onGoToWishlist", null),
          Object(n.c)([_.a], e.prototype, "onAddToCart", null),
          Object(n.c)([_.a], e.prototype, "onMuteClicked", null),
          Object(n.c)([_.a], e.prototype, "onUnMuteClicked", null),
          Object(n.c)([_.a], e.prototype, "shouldMute", null),
          Object(n.c)([_.a], e.prototype, "shouldUseMicrotrailers", null),
          e
        );
      })())();
      window.g_InteractiveRecommender = T;
      var O,
        R = a("BFsE");
      (O = Object(r.h)("ir_config", "application_config")) &&
        (Object.assign(y, O), T.Init());
      var N = function (e) {
          e.accountID;
          var t = T.getInputApps(),
            a = Object.keys(t).length,
            i = 0;
          return (
            Object.keys(t).map(function (e) {
              i += t[e].p;
            }),
            l.a.createElement(
              "div",
              { className: h.IdentityBlock },
              l.a.createElement("img", {
                className: h.Avatar,
                src: y.AVATAR_URL,
              }),
              l.a.createElement(
                "div",
                { className: h.PersonalInfo },
                l.a.createElement(
                  "div",
                  { className: h.Persona },
                  y.PERSONA_NAME
                ),
                l.a.createElement(
                  "div",
                  { className: h.GameCount },
                  Object(p.f)("#PlaytimeList_RecentGames", a)
                ),
                l.a.createElement(
                  "div",
                  { className: h.TotalTime },
                  Object(p.f)("#PlaytimeList_HoursTotal", i)
                )
              )
            )
          );
        },
        L = function (e) {
          var t = e.appID,
            a = e.name,
            i = e.hours,
            n = e.lastPlayed,
            r = e.ignored,
            o = y.CDN_URL + "apps/" + t + "/header.jpg",
            s = Date.now() / 1e3 - n,
            c = "",
            d = "";
          return (
            n <= 86400
              ? (d = Object(p.f)("#PlaytimeList_LastPlayedMax"))
              : s > 31449600
              ? ((c = Object(p.n)(n)),
                (d = Object(p.f)("#PlaytimeList_LastPlayed", c)))
              : ((c = Object(p.p)(s)),
                (d = Object(p.f)("#PlaytimeList_LastPlayed", c))),
            l.a.createElement(
              "div",
              { className: Object(u.a)(h.PlayedGame, r && h.Ignored) },
              l.a.createElement(
                "a",
                { href: y.BASE_URL + "app/" + t + "?snr=" + y.LINK_PARAM },
                l.a.createElement("img", { className: h.Logo, src: o })
              ),
              l.a.createElement(
                "div",
                { className: h.PlaytimeInfo },
                l.a.createElement(
                  "div",
                  { className: h.HoursPlayed },
                  Object(p.f)("#PlaytimeList_Hours", i)
                ),
                l.a.createElement("div", { className: h.Title }, a),
                l.a.createElement("div", { className: h.LastPlayed }, d),
                l.a.createElement(
                  "div",
                  {
                    className: h.IgnoreToggle,
                    onClick: function () {
                      return T.onToggleIgnore(t);
                    },
                  },
                  Object(p.f)(
                    r ? "#PlaytimeList_UnIgnore" : "#PlaytimeList_Ignore"
                  )
                )
              )
            )
          );
        },
        C = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (a.state = {}), a;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = T.getInputApps(),
                t = [];
              if (!e)
                return l.a.createElement(
                  "div",
                  { className: h.PlaytimeList },
                  l.a.createElement(
                    "div",
                    { className: h.Header },
                    Object(p.f)("#PlaytimeList_Header")
                  ),
                  l.a.createElement("div", { className: h.Loading })
                );
              T.getAppInfo();
              var a = e.slice().sort(function (e, t) {
                return t.l - e.l;
              });
              return (
                Object.keys(a).map(function (e) {
                  var i = a[e];
                  t.push(
                    l.a.createElement(L, {
                      key: "PlayedGame_" + i.a,
                      appID: i.a,
                      name: i.t,
                      hours: i.p,
                      lastPlayed: i.l,
                      ignored: i.i || i.ip,
                    })
                  );
                }),
                l.a.createElement(
                  "div",
                  { className: h.PlaytimeList },
                  l.a.createElement(
                    "div",
                    { className: h.Header },
                    Object(p.f)("#PlaytimeList_Header")
                  ),
                  l.a.createElement(N, { accountID: this.props.accountID }),
                  l.a.createElement("div", { className: h.List }, t)
                )
              );
            }),
            (t = Object(n.c)([o.a], t))
          );
        })(l.a.Component),
        I = function (e) {
          var t = e.titleLabel,
            a = e.minLabel,
            i = e.maxLabel,
            n = e.minValue,
            r = e.maxValue,
            o = e.value,
            s = e.onChange,
            c = e.sliderLabels,
            d = c ? Math.round((c.length - 1) * ((o - n) / (r - n))) : void 0,
            m = c ? c[d] : "";
          return l.a.createElement(
            "div",
            { className: h.OptionSlider },
            l.a.createElement("div", { className: h.Title }, t),
            l.a.createElement(
              "div",
              { className: h.Labels },
              l.a.createElement("div", { className: h.Min }, a),
              l.a.createElement("div", { className: h.Max }, i)
            ),
            l.a.createElement("input", {
              type: "range",
              min: n,
              max: r,
              step: (r - n) / 100,
              value: o,
              onChange: s,
            }),
            l.a.createElement("div", { className: h.OptionalLabel }, m)
          );
        },
        A = function (e) {
          var t = e.className,
            a = e.titleLabel,
            i = e.checked,
            n = e.onChange;
          return l.a.createElement(
            "label",
            { className: Object(u.a)(h.OptionCheckbox, t && t) },
            l.a.createElement("input", {
              type: "checkbox",
              className: h.Checkbox,
              checked: i,
              onChange: n,
            }),
            a
          );
        },
        j = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.selectedtags = []),
              (a.rgTags = []),
              (a.selectedtags = Object(n.g)(t.selectedtags)),
              (a.state = { value: "", suggestions: [] }),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = T.getTags();
              if (e)
                for (var t = 0, a = e; t < a.length; t++) {
                  var i = a[t];
                  this.rgTags.push({ id: parseInt(i.tagid), name: i.name });
                }
            }),
            (t.prototype.onFetchRequested = function (e) {
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
            (t.prototype.onClearRequested = function () {}),
            (t.prototype.onChange = function (e, t) {
              this.setState({ value: t.newValue });
            }),
            (t.prototype.onKeyDown = function (e) {
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
            (t.prototype.shouldRenderSuggestions = function (e) {
              return !0;
            }),
            (t.prototype.onSuggestionSelected = function (e, t) {
              for (var a = 0, i = this.selectedtags; a < i.length; a++) {
                if (i[a] == t.suggestion.id) return;
              }
              this.selectedtags.push(t.suggestion.id),
                this.props.onAddTag(t.suggestion.id);
            }),
            (t.prototype.onRemoveSelectedTag = function (e) {
              for (var t = 0; t < this.selectedtags.length; t++)
                if (this.selectedtags[t] == e) {
                  this.props.onRemoveTag(this.selectedtags[t]),
                    this.selectedtags.splice(t, 1);
                  break;
                }
            }),
            (t.prototype.render = function () {
              for (
                var e = this,
                  t = {
                    placeholder: Object(p.f)("#TagSelect"),
                    value: this.state.value,
                    onChange: this.onChange,
                    onKeyDown: this.onKeyDown,
                  },
                  a = [],
                  i = function (t) {
                    var i = T.m_TagNameMap.get(t);
                    a.push(
                      l.a.createElement(
                        "div",
                        {
                          key: t,
                          className: h.SelectedTag,
                          onClick: function (a) {
                            return e.onRemoveSelectedTag(t);
                          },
                        },
                        l.a.createElement("div", null, i),
                        l.a.createElement("div", { className: h.Close }, "X")
                      )
                    );
                  },
                  n = 0,
                  r = this.selectedtags;
                n < r.length;
                n++
              ) {
                i(r[n]);
              }
              return l.a.createElement(
                "div",
                { className: h.OptionTagList },
                l.a.createElement(
                  "div",
                  { className: h.Label },
                  this.props.title
                ),
                l.a.createElement(v.a, {
                  suggestions: this.state.suggestions,
                  onSuggestionsFetchRequested: this.onFetchRequested,
                  onSuggestionsClearRequested: this.onClearRequested,
                  onSuggestionSelected: this.onSuggestionSelected,
                  shouldRenderSuggestions: this.shouldRenderSuggestions,
                  getSuggestionValue: function (e) {
                    return e.name;
                  },
                  renderSuggestion: function (e) {
                    return l.a.createElement("div", null, e.name);
                  },
                  inputProps: t,
                  theme: {
                    input: h.SuggestionInput,
                    suggestion: h.OptionSuggestion,
                    suggestionsList: h.SuggestionsList,
                    suggestionsContainerOpen: h.SuggestionContainerOpen,
                  },
                }),
                a
              );
            }),
            Object(n.c)([s.C], t.prototype, "selectedtags", void 0),
            Object(n.c)([_.a], t.prototype, "onFetchRequested", null),
            Object(n.c)([_.a], t.prototype, "onClearRequested", null),
            Object(n.c)([_.a], t.prototype, "onChange", null),
            Object(n.c)([_.a], t.prototype, "onKeyDown", null),
            Object(n.c)([_.a], t.prototype, "shouldRenderSuggestions", null),
            Object(n.c)([_.a], t.prototype, "onSuggestionSelected", null),
            Object(n.c)([_.a], t.prototype, "onRemoveSelectedTag", null),
            (t = Object(n.c)([o.a], t))
          );
        })(l.a.Component),
        D = Object(o.a)(function () {
          var e = T.getTags(),
            t = [];
          if (e)
            for (var a = 0, i = e; a < i.length; a++) {
              var n = i[a];
              t.push({ id: parseInt(n.tagid), name: n.name });
            }
          var r = [
              Object(p.f)("#FilterAge_120"),
              Object(p.f)("#FilterAge_60"),
              Object(p.f)("#FilterAge_36"),
              Object(p.f)("#FilterAge_24"),
              Object(p.f)("#FilterAge_12"),
              Object(p.f)("#FilterAge_6"),
            ],
            o = T.m_rgSavedExcludeTags,
            s = T.m_rgSavedFilterTags;
          return l.a.createElement(
            "div",
            { className: h.RecommendationOptions },
            l.a.createElement(
              "div",
              { className: Object(u.a)(h.Row, h.FirstRow) },
              l.a.createElement(I, {
                minLabel: Object(p.f)("#Popularity_Popular"),
                titleLabel: Object(p.f)("#Popularity_Title"),
                maxLabel: Object(p.f)("#Popularity_Niche"),
                minValue: 0,
                maxValue: 1,
                value: T.m_fQueuedPopularityValue,
                onChange: T.onPopularityChanged,
              }),
              l.a.createElement(I, {
                minLabel: Object(p.f)("#Recency_Older"),
                titleLabel: Object(p.f)("#Recency_Title"),
                maxLabel: Object(p.f)("#Recency_Newer"),
                minValue: 0,
                maxValue: 1,
                value: T.m_fQueuedRecencyValue,
                onChange: T.onRecencyChanged,
                sliderLabels: r,
              })
            ),
            l.a.createElement(
              "div",
              { className: Object(u.a)(h.Row, h.SecondRow) },
              l.a.createElement(j, {
                title: Object(p.f)("#TagFilterMultiple_Title"),
                tagoptions: t,
                selectedtags: s,
                key: "Filter" + s.toString(),
                onAddTag: T.onTagFilterAdd,
                onRemoveTag: T.onTagFilterRemove,
              }),
              l.a.createElement(j, {
                title: Object(p.f)("#TagExcludeMultiple_Title"),
                tagoptions: t,
                selectedtags: o,
                key: "Exclude" + o.toString(),
                onAddTag: T.onTagExcludeAdd,
                onRemoveTag: T.onTagExcludeRemove,
              }),
              l.a.createElement(A, {
                className: h.WishlistCheckbox,
                titleLabel: Object(p.f)("#ExcludeWishlisted"),
                checked: T.m_bExcludeWishlisted,
                onChange: T.onExcludeWishlistedToggled,
              }),
              l.a.createElement(
                "button",
                {
                  className: h.SaveUserSettingsButton,
                  onClick: T.onSaveUserSettings,
                  title: Object(p.f)("#SaveUserSettingsTooltip"),
                },
                Object(p.f)("#SaveUserSettings")
              )
            )
          );
        }),
        P = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.m_videoRef = l.a.createRef()),
              (a.state = {
                hovered: !1,
                wishlisted: T.getAppInfo()[t.appID].w,
              }),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.m_videoRef.current.defaultMuted = !0;
            }),
            (t.prototype.componentDidUpdate = function () {
              if (
                this.state.hovered &&
                this.m_videoRef &&
                this.m_videoRef.current &&
                0 == this.m_videoRef.current.currentTime
              ) {
                var e = this.m_videoRef.current.play();
                e &&
                  e.then(
                    function () {},
                    function () {}
                  );
              }
            }),
            (t.prototype.OnHover = function () {
              this.setState({ hovered: !0 });
            }),
            (t.prototype.OnUnHover = function () {
              this.setState({ hovered: !1 }),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  ((this.m_videoRef.current.currentTime = 0),
                  this.m_videoRef.current.pause());
            }),
            (t.prototype.onMuteToggle = function (e) {
              T.shouldMute()
                ? (T.onUnMuteClicked(),
                  this.m_videoRef &&
                    this.m_videoRef.current &&
                    (this.m_videoRef.current.muted = !1))
                : (T.onMuteClicked(),
                  this.m_videoRef &&
                    this.m_videoRef.current &&
                    (this.m_videoRef.current.muted = !0)),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (t.prototype.onAddToWishlist = function (e) {
              T.onAddToWishlist(this.props.appID, this.props.rank),
                this.setState({ wishlisted: !0 }),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (t.prototype.onGoToWishlist = function (e) {
              T.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
            }),
            (t.prototype.onAddToCart = function (e) {
              T.onAddToCart(this.props.appID, this.props.rank),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                a = t.appID,
                i = t.score,
                n = t.rank,
                r = t.width,
                o =
                  "https://steamcdn-a.akamaihd.net/steam/apps/" +
                  a +
                  "/header.jpg",
                s = T.getAppInfo()[a];
              if (!s) return l.a.createElement("div", null);
              var c = s.n,
                _ =
                  s.r > 0
                    ? Object(p.f)(
                        "#Recommendation_ReleasedOn",
                        Object(p.n)(s.r)
                      )
                    : "",
                g = [];
              if (s.t)
                for (var v = 0, E = 0, f = s.t; E < f.length; E++) {
                  var b = f[E];
                  if (
                    (g.push(
                      l.a.createElement(
                        "div",
                        { key: a + "_" + b, className: h.Tag },
                        T.getTagName(b)
                      )
                    ),
                    5 == ++v)
                  )
                    break;
                }
              var S = parseInt(h.smallentrywidth),
                O = parseInt(h.optionswrapwidth),
                R = 112,
                N = !0;
              r < S ? ((R = 66), (N = !1)) : r < O && ((R = 87), (N = !1));
              var L = N && this.state.hovered,
                C = Math.min(Number(i) / 10, 1e3),
                I = (Math.max(1, i), !1),
                A = !1,
                j = !0,
                D = "",
                P = "",
                U = "",
                w = "",
                M = "",
                x = !1,
                F = !0;
              if (L) {
                var k = T.getDetails(this.props.appID);
                k &&
                  ((I = !0),
                  (A = k.discount_pct > 0),
                  (j = "0" == k.discount_price),
                  "probably" ==
                  document
                    .createElement("video")
                    .canPlayType('video/webm; codecs="vp8, vorbis"')
                    ? T.shouldUseMicrotrailers() && k.microtrailer_webm
                      ? ((M = k.microtrailer_webm), (x = !0), (F = !1))
                      : (M = k.video_webm)
                    : T.shouldUseMicrotrailers() && k.microtrailer_mp4
                    ? ((M = k.microtrailer_mp4), (x = !0), (F = !1))
                    : (M = k.video_mp4),
                  (D = "-" + k.discount_pct + "%"),
                  (P = k.base_price),
                  (U = j ? Object(p.f)("#FreeToPlay") : k.discount_price),
                  (w = k.description));
              }
              var V = M && M.length > 0;
              return l.a.createElement(
                d.a,
                { appID: a, snr: y.LINK_PARAM },
                l.a.createElement(
                  "a",
                  {
                    href: y.BASE_URL + "app/" + a + "?snr=" + y.LINK_PARAM,
                    onClick: function () {
                      return T.onAppClicked(a, n);
                    },
                    className: Object(u.a)(
                      h.RecommendationEntry,
                      "ds_flagged",
                      "ds_wishlist",
                      n > 30 && h.Hidden,
                      L && h.Hovered
                    ),
                    style: { top: Math.min(31, n) * R },
                    onMouseEnter: this.OnHover,
                    onMouseLeave: this.OnUnHover,
                  },
                  l.a.createElement(
                    "div",
                    { className: h.TopEntrySection },
                    l.a.createElement(
                      "div",
                      { className: h.LeftSection },
                      l.a.createElement("img", {
                        className: Object(u.a)(
                          h.Logo,
                          (!V || !L) && h.Revealed
                        ),
                        src: o,
                      }),
                      l.a.createElement("video", {
                        ref: this.m_videoRef,
                        className: Object(u.a)(
                          "highlight_player_item",
                          "highlight_movie",
                          h.Video,
                          V && L && h.Revealed
                        ),
                        playsInline: !0,
                        autoPlay: !0,
                        muted: F && T.shouldMute(),
                        src: M,
                        loop: x,
                      }),
                      F &&
                        l.a.createElement(
                          "div",
                          {
                            className: Object(u.a)(h.UnMute, V && h.Revealed),
                            onClick: function (t) {
                              return e.onMuteToggle(t);
                            },
                          },
                          l.a.createElement(m.wb, { muted: T.shouldMute() })
                        ),
                      this.state.wishlisted &&
                        l.a.createElement(
                          "div",
                          {
                            className: Object(u.a)(
                              "ds_flag",
                              "ds_wishlist_flag",
                              h.WishlistFlag
                            ),
                          },
                          Object(p.f)("#Recommendation_OnWishlist") + "  "
                        )
                    ),
                    l.a.createElement(
                      "div",
                      { className: h.RightSection },
                      l.a.createElement("div", { className: h.Name }, c),
                      l.a.createElement(
                        "div",
                        { className: h.CenterSection },
                        l.a.createElement(
                          "div",
                          {
                            className: Object(u.a)(
                              h.CenterOption,
                              h.CenterDefault,
                              L && h.Hidden
                            ),
                          },
                          l.a.createElement(
                            "div",
                            { className: h.Released },
                            _
                          ),
                          l.a.createElement(
                            "div",
                            { className: h.BarContainer },
                            l.a.createElement("div", {
                              className: h.Bar,
                              style: { width: C + "%" },
                            })
                          ),
                          l.a.createElement("div", { className: h.Tags }, g)
                        ),
                        l.a.createElement(
                          "div",
                          {
                            className: Object(u.a)(
                              h.CenterOption,
                              h.CenterHovered,
                              !L && h.Hidden
                            ),
                          },
                          w
                        )
                      ),
                      I &&
                        l.a.createElement(
                          "div",
                          { className: h.BottomEntrySection },
                          l.a.createElement(
                            "div",
                            {
                              className: Object(u.a)(
                                "game_purchase_action",
                                h.PurchaseSection
                              ),
                            },
                            l.a.createElement(
                              "div",
                              {
                                className: Object(u.a)(
                                  "game_purchase_action_bg",
                                  h.PurchaseBG
                                ),
                              },
                              A &&
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "discount_block game_purchase_discount",
                                  },
                                  l.a.createElement(
                                    "div",
                                    { className: "discount_pct" },
                                    D
                                  ),
                                  l.a.createElement(
                                    "div",
                                    { className: "discount_prices" },
                                    l.a.createElement(
                                      "div",
                                      { className: "discount_original_price" },
                                      P
                                    ),
                                    l.a.createElement(
                                      "div",
                                      { className: "discount_final_price" },
                                      U
                                    )
                                  )
                                ),
                              !A &&
                                l.a.createElement(
                                  "div",
                                  {
                                    className: Object(u.a)(
                                      "game_purchase_price",
                                      "price",
                                      h.Price
                                    ),
                                  },
                                  U
                                ),
                              !j &&
                                l.a.createElement(
                                  "div",
                                  {
                                    className: "btn_addtocart",
                                    onClick: function (t) {
                                      return e.onAddToCart(t);
                                    },
                                  },
                                  l.a.createElement(
                                    "span",
                                    {
                                      className:
                                        "btnv6_green_white_innerfade btn_medium",
                                    },
                                    l.a.createElement(
                                      "span",
                                      null,
                                      Object(p.f)("#btn_add_to_cart")
                                    )
                                  )
                                )
                            )
                          ),
                          !this.state.wishlisted &&
                            !j &&
                            l.a.createElement(
                              "div",
                              {
                                id: "add_to_wishlist_area",
                                className: h.WishlistSection,
                                onClick: function (t) {
                                  return e.onAddToWishlist(t);
                                },
                              },
                              l.a.createElement(
                                "div",
                                {
                                  className: "btnv6_blue_hoverfade btn_medium",
                                },
                                l.a.createElement(
                                  "span",
                                  null,
                                  Object(p.f)("#wishlist_add_to_wishlist")
                                )
                              )
                            ),
                          this.state.wishlisted &&
                            !j &&
                            l.a.createElement(
                              "div",
                              {
                                className: Object(u.a)(
                                  "btnv6_blue_hoverfade btn_medium",
                                  "queue_btn_active",
                                  h.Wishlisted,
                                  h.WishlistSection
                                ),
                                "data-tooltip-text": Object(p.f)(
                                  "#OnWishlistTooltip"
                                ),
                                onClick: function (t) {
                                  return e.onGoToWishlist(t);
                                },
                              },
                              l.a.createElement(
                                "span",
                                null,
                                l.a.createElement("img", {
                                  src:
                                    y.IMG_URL_BASE + "/v6/ico/ico_selected.png",
                                }),
                                "  " + Object(p.f)("#OnWishlist")
                              )
                            )
                        )
                    )
                  )
                )
              );
            }),
            Object(n.c)([_.a], t.prototype, "OnHover", null),
            Object(n.c)([_.a], t.prototype, "OnUnHover", null),
            Object(n.c)([_.a], t.prototype, "onMuteToggle", null),
            Object(n.c)([_.a], t.prototype, "onAddToWishlist", null),
            Object(n.c)([_.a], t.prototype, "onGoToWishlist", null),
            Object(n.c)([_.a], t.prototype, "onAddToCart", null),
            (t = Object(n.c)([o.a], t))
          );
        })(l.a.Component),
        U = (function (e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (a.state = { sortedRecommendedApps: [] }), a;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = T.m_fRecencyValue * (y.NUM_RECENCY_STEPS - 1 - 0.001),
                t = Math.floor(e),
                a = t + 1,
                i = 1 - (e - t),
                n = 1 - i,
                r = T.m_fPopularityValue * (y.NUM_POPULARITY_STEPS - 1 - 0.001),
                o = Math.floor(r),
                s = o + 1,
                c = 1 - (r - o),
                d = 1 - c,
                m = [];
              m.push({ index: o * y.NUM_RECENCY_STEPS + t, weight: c * i }),
                m.push({ index: s * y.NUM_RECENCY_STEPS + t, weight: d * i }),
                m.push({ index: o * y.NUM_RECENCY_STEPS + a, weight: c * n }),
                m.push({ index: s * y.NUM_RECENCY_STEPS + a, weight: d * n });
              var _ = new Map(),
                g = 0,
                v = T.getRecommendations(),
                E = T.getAppInfo(),
                f = [];
              if (v) {
                for (var b = 0, S = m; b < S.length; b++) {
                  var O = S[b],
                    R = v[O.index];
                  if (((g = Math.max(g, R.score_scale)), R))
                    for (var N = 0; N < R.app_ids.length; N++) {
                      var L = R.app_ids[N];
                      if (
                        !(
                          !E[L] ||
                          E[L].o ||
                          E[L].i ||
                          E[L].ti ||
                          (E[L].w && T.m_bExcludeWishlisted)
                        )
                      ) {
                        var C =
                          (_.get(L) || 0) +
                          R.scores[N] * O.weight * R.score_scale;
                        _.set(L, C);
                      }
                    }
                }
                _.forEach(function (e, t) {
                  return _.set(t, e / g);
                });
                var I = [];
                _.forEach(function (e, t) {
                  return I.push({ appid: t, score: e });
                });
                var A = (I = (I = (I = I.filter(function (e) {
                  return E[e.appid].t && T.doTagsPassFilter(E[e.appid].t);
                })).filter(function (e) {
                  return E[e.appid].t && !T.doTagsFailExclusion(E[e.appid].t);
                })).filter(function (e) {
                  return e.score > 0;
                })).sort(function (e, t) {
                  return t.score - e.score;
                });
                if (A.length > 0) {
                  for (
                    var j = 0, U = 0, w = (A = A.slice(0, 30));
                    U < w.length;
                    U++
                  ) {
                    (w[U].rank = j), j++;
                  }
                  for (var M = 0, x = A; M < x.length; M++) {
                    var F = x[M];
                    f.push(
                      l.a.createElement(P, {
                        key: F.appid,
                        appID: F.appid,
                        score: F.score,
                        rank: F.rank,
                        width: this.props.width,
                      })
                    );
                  }
                } else
                  f.push(
                    l.a.createElement(
                      "div",
                      {
                        key: "no_recommedations_due_to_filter",
                        className: h.NoRecommendationsMessage,
                      },
                      Object(p.f)("#NoRecommendationsDueToFilter")
                    )
                  );
              } else
                f.push(
                  l.a.createElement("div", {
                    key: "recommendations_loading",
                    className: h.RecommendationsLoading,
                  })
                );
              return l.a.createElement(
                "div",
                { className: h.RecommendationList },
                l.a.createElement(
                  "div",
                  { className: h.Header },
                  Object(p.f)("#Recommendations_Header")
                ),
                l.a.createElement(D, null),
                l.a.createElement(
                  "div",
                  {
                    className: Object(u.a)(
                      h.List,
                      T.areResultsExpired() && h.Updating
                    ),
                  },
                  f
                )
              );
            }),
            (t = Object(n.c)([o.a], t))
          );
        })(l.a.Component),
        w = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { width: window.innerWidth }), t;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.updateDimensions = function () {
              this.setState({ width: window.innerWidth });
            }),
            (t.prototype.componentDidMount = function () {
              window.addEventListener("resize", this.updateDimensions);
            }),
            (t.prototype.ShowLoginDialog = function () {
              Object(R.a)();
            }),
            (t.prototype.render = function () {
              return r.k.logged_in
                ? l.a.createElement(
                    "div",
                    {
                      className: h.App,
                      style: { height: 3840 + 26 * T.getTagHeight() },
                    },
                    l.a.createElement(
                      "div",
                      { className: h.Container },
                      l.a.createElement(
                        "div",
                        { className: h.TopSection },
                        l.a.createElement(
                          "div",
                          { className: h.Header },
                          Object(p.f)("#HeaderTitle")
                        ),
                        l.a.createElement(
                          "div",
                          { className: h.Body },
                          Object(p.f)("#HeaderBody1")
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: h.BottomSection },
                        l.a.createElement(C, { accountID: r.k.accountid }),
                        l.a.createElement("div", { className: h.VerticalBar }),
                        l.a.createElement(U, { width: this.state.width })
                      )
                    )
                  )
                : l.a.createElement(
                    "div",
                    { className: h.App },
                    l.a.createElement(
                      "div",
                      { className: h.Login },
                      l.a.createElement(
                        "div",
                        { className: h.Text },
                        Object(p.f)("#LoginText")
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: Object(u.a)(
                            "btn_green_white_innerfade",
                            " btn_medium"
                          ),
                          onClick: this.ShowLoginDialog,
                        },
                        l.a.createElement(
                          "span",
                          null,
                          Object(p.f)("#LoginButton")
                        )
                      )
                    )
                  );
            }),
            Object(n.c)([_.a], t.prototype, "updateDimensions", null),
            Object(n.c)([_.a], t.prototype, "ShowLoginDialog", null),
            (t = Object(n.c)([o.a], t))
          );
        })(l.a.Component);
      t.default = w;
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

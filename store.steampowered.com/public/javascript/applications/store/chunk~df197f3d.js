/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    "2cJF": function (e, t, a) {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_1YGAH",
        avatarStatus: "steamavatar_avatarStatus_1yIzy",
        avatar: "steamavatar_avatar_1p_Qr",
        avatarFrame: "steamavatar_avatarFrame_3atbN",
        avatarFrameImg: "steamavatar_avatarFrameImg_338kJ",
      };
    },
    "A/m1": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
    },
    AYtk: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return r;
      }),
        a.d(t, "a", function () {
          return i;
        });
      var n = a("q1tI"),
        s = a("e356");
      a("R5YR"), a("/Q1a");
      function r() {
        return n.createElement(s.V, null);
      }
      function i() {
        return n.createElement(s.C, null);
      }
    },
    CG4B: function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
        statusAndName: "personanameandstatus_statusAndName_3n8q8",
        threeLines: "personanameandstatus_threeLines_3ms2P",
        blocked: "personanameandstatus_blocked_3_oRk",
        richPresenceLabel: "personanameandstatus_richPresenceLabel_1k82N",
        playerName: "personanameandstatus_playerName_r62qz",
        playerNickname: "personanameandstatus_playerNickname_3T-9P",
        playerNicknameBracket:
          "personanameandstatus_playerNicknameBracket_2aXev",
        richPresenceContainer:
          "personanameandstatus_richPresenceContainer_2nrSd",
        gameName: "personanameandstatus_gameName_2wpap",
        NoMask: "personanameandstatus_NoMask_2J0IS",
        twoLine: "personanameandstatus_twoLine_27M2G",
        DNDContainer: "personanameandstatus_DNDContainer_12iWK",
        partyBeaconJoin: "personanameandstatus_partyBeaconJoin_1K_OI",
        hidePersona: "personanameandstatus_hidePersona_3meBu",
        compactView: "personanameandstatus_compactView_34CCB",
        noContextMenu: "personanameandstatus_noContextMenu_2317W",
        gameIsPrivateIcon: "personanameandstatus_gameIsPrivateIcon_1FPaN",
        PendingPersona: "personanameandstatus_PendingPersona_ifetn",
      };
    },
    FA79: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return f;
      }),
        a.d(t, "b", function () {
          return I;
        }),
        a.d(t, "a", function () {
          return P;
        });
      var n = a("mrSG"),
        s = a("q1tI"),
        r = a("TyAF"),
        i = a("kMdN"),
        o = a("GbHM"),
        c = (a("ztGc"), a("/Q1a")),
        m = a("Gcny"),
        l = a("icLO"),
        p = a.n(l),
        u = a("y66k"),
        h = a.n(u),
        d = a("A/m1"),
        A = a.n(d),
        _ = a("2cJF"),
        g = a.n(_);
      class b extends s.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: t,
              size: a,
              className: r,
              statusStyle: i,
              statusPosition: c,
              children: l,
            } = e,
            u = Object(n.c)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            d = [];
          return (
            t && d.push(t),
            d.push(
              (function (e) {
                switch (e) {
                  case "X-Small":
                  case "Small":
                    return p.a;
                  case "Medium":
                  case "MediumLarge":
                    return h.a;
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return A.a;
                }
              })(a)
            ),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: Object(o.a)(
                    g.a.avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    a || "Medium",
                    r
                  ),
                },
                u
              ),
              s.createElement("div", {
                className: Object(o.a)(g.a.avatarStatus, "avatarStatus", c),
                style: i,
              }),
              s.createElement(m.a, {
                className: Object(o.a)(g.a.avatar, "avatar"),
                rgSources: d,
                draggable: !1,
              }),
              l
            )
          );
        }
      }
      let f = class extends s.Component {
        render() {
          const e = this.props,
            { persona: t, size: a, animatedAvatar: r, className: m } = e,
            l = Object(n.c)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let p = "";
          return (
            r && r.image_small && 0 != r.image_small.length
              ? (p = c.d.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small)
              : t &&
                ((p = t.avatar_url_medium),
                "Small" == a || "X-Small" == a
                  ? (p = t.avatar_url)
                  : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                    (p = t.avatar_url_full)),
            s.createElement(
              b,
              Object.assign(
                {
                  strAvatarURL: p,
                  size: a,
                  className: Object(o.a)(Object(i.b)(t), m),
                },
                l
              )
            )
          );
        }
      };
      f = Object(n.b)([r.a], f);
      const I = Object(r.a)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: r } = e,
          i = Object(n.c)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let m = r ? t.image_large : t.image_small;
        return (
          m || (m = t.image_small),
          m.startsWith("https://") ||
            (m = c.d.MEDIA_CDN_COMMUNITY_URL + "images/" + m),
          s.createElement(
            "div",
            Object.assign(
              { className: Object(o.a)(g.a.avatarFrame, a, "avatarFrame") },
              i
            ),
            s.createElement("img", { className: g.a.avatarFrameImg, src: m })
          )
        );
      });
      let P = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.SetupAnimationTimer();
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
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e
            ));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration &&
                (this.setState({ bAnimate: !0 }), this.StopAnimationTimer()));
        }
        render() {
          let e = this.props,
            {
              loopDuration: t,
              animatedAvatar: a,
              avatarFrame: r,
              children: i,
              style: o,
            } = e,
            c = Object(n.c)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
            ]);
          return (
            c.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (a = null),
            s.createElement(
              f,
              Object.assign({ animatedAvatar: a }, c),
              i,
              s.createElement(I, {
                profileItem: r,
                bDisableAnimation: "None" === this.props.loopDuration,
              })
            )
          );
        }
      };
      P = Object(n.b)([r.a], P);
    },
    FKEV: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return d;
      });
      var n = a("mrSG"),
        s = a("2vnA"),
        r = (a("aoTL"), a("msu0")),
        i = a("9XWO"),
        o = a("d4Nf"),
        c = a("6iBs"),
        m = (a("8G9o"), a("KjDl")),
        l = a("f5iL"),
        p = a("3u1o"),
        u = a("/Q1a");
      class h {
        constructor() {
          (this.m_mapAppInfo = s.C.map()),
            (this.m_mapRichPresenceLoc = s.C.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new p.a());
        }
        Init(e) {
          this.m_CMInterface = e;
        }
        BHavePendingAppInfoRequests() {
          return (
            this.m_setPendingAppInfo.size > 0 ||
            this.m_cAppInfoRequestsInFlight > 0
          );
        }
        get CMInterface() {
          return this.m_CMInterface;
        }
        RegisterCallbackOnLoad(e) {
          if (!this.BHavePendingAppInfoRequests())
            return (
              Object(l.a)(
                !1,
                "Registering for callback on appinfo load, but nothing queued"
              ),
              void e()
            );
          this.m_fnCallbackOnAppInfoLoaded.Register(e);
        }
        IsLoadingAppID(e) {
          return this.m_setPendingAppInfo.has(e);
        }
        GetAppInfo(e) {
          if (
            (Object(l.a)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init"
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new o.a(e);
            this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
          }
          return this.m_mapAppInfo.get(e);
        }
        QueueAppInfoRequest(e) {
          return e
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (e) => (this.m_PendingAppInfoResolve = e)
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(e),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        FlushPendingAppInfo() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = this.m_PendingAppInfoResolve,
              t = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              yield this.LoadAppInfoBatch(t),
              e();
          });
        }
        LoadAppInfoBatch(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let t = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (t.length) {
              console.log("Loading batch of App Info from Steam: ", t),
                yield this.m_CMInterface.WaitUntilLoggedOn();
              let e = i.b.Init(m.b);
              e.Body().set_language(Object(r.g)(u.d.LANGUAGE));
              const a = 50;
              for (; t.length > 0; ) {
                const n = Math.min(a, t.length),
                  s = t.slice(0, n);
                (t = t.slice(n)), e.Body().set_appids(s);
                const r = yield m.g.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e
                );
                1 == r.GetEResult()
                  ? this.OnGetAppsResponse(r)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${r.GetEResult()}, AppIDs:`,
                      s
                    );
              }
            }
            0 == --this.m_cAppInfoRequestsInFlight &&
              0 == this.m_setPendingAppInfo.size &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          });
        }
        OnGetAppsResponse(e) {
          let t = [];
          for (let a of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(a.appid());
            Object(l.a)(
              e,
              `Got AppInfo response for unrequested AppID: ${a.appid()}`
            ),
              e &&
                ((e = new o.a(a.appid())),
                e.DeserializeFromMessage(a),
                this.m_mapAppInfo.set(a.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new o.a(t.appid());
            e.DeserializeFromAppOverview(t),
              this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let a = this.m_mapAppInfo.get(e);
                a
                  ? a.is_valid || (t = !0)
                  : ((a = new o.a(e)),
                    this.m_mapAppInfo.set(e, a),
                    this.QueueAppInfoRequest(e),
                    (t = !0));
              }),
              t && void 0 !== this.m_PendingAppInfoPromise
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          });
        }
        SetCacheStorage(e) {
          this.m_CacheStorage = e;
        }
        GetCacheKeyForAppID(e) {
          return "APPINFO_" + e;
        }
        LoadAppInfoBatchFromLocalCache(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              a = (e) =>
                Object(n.a)(this, void 0, void 0, function* () {
                  const a = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e)
                  );
                  if (!a) return e;
                  let n = this.m_mapAppInfo.get(e);
                  return (
                    Object(l.a)(
                      n,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                    ),
                    n
                      ? ((n = new o.a(e)),
                        n.DeserializeFromCacheObject(a),
                        n.is_initialized
                          ? (this.m_mapAppInfo.set(e, n),
                            n.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              a
                            ),
                            e))
                      : e
                  );
                });
            let s = e.map((e) => a(e));
            return (yield Promise.all(s)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((e) => e.appid)
              );
              for (const t of e) {
                const e = t.SerializeToCacheObject();
                e &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(t.appid),
                    e
                  );
              }
            }
          });
        }
        Localize(e, t, a) {
          const n = this.GetRichPresenceLoc(e);
          return n
            ? n.Localize(t, a)
            : 1 != u.d.EUNIVERSE
            ? (console.log(
                `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`
              ),
              t)
            : "";
        }
        GetRichPresenceLoc(e) {
          if (this.m_mapRichPresenceLoc.has(e.toString())) {
            let t = this.m_mapRichPresenceLoc.get(e.toString());
            return (
              t.m_nLastUpdated + 6e4 * o.b < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new c.a(e);
          return (
            this.m_mapRichPresenceLoc.set(e.toString(), t),
            this.QueueRichPresenceLocRequest(t),
            t
          );
        }
        GetRichPresenceLocAsync(e) {
          let t = this.GetRichPresenceLoc(e);
          return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
        }
        OnRichPresenceLocUpdate(e, t) {
          e.m_nLastUpdated = Date.now();
          for (let a of t) {
            let t = a.language(),
              n = e.m_mapLanguages.get(t);
            n
              ? n.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (n = e.m_mapLanguages.get(t)));
            for (let e of a.tokens()) n.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = i.b.Init(m.a);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(u.d.LANGUAGE),
                    m.g.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    1 != t.GetEResult()
                      ? Promise.reject()
                      : (this.OnRichPresenceLocUpdate(
                          e,
                          t.Body().token_lists()
                        ),
                        Promise.resolve(e))
                  )
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      Object(n.b)([s.k], h.prototype, "OnGetAppsResponse", null),
        Object(n.b)([s.k], h.prototype, "OnRichPresenceLocUpdate", null);
      const d = new h();
    },
    Gcny: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var n = a("mrSG"),
        s = a("q1tI"),
        r = a("hCpY");
      a("f5iL");
      class i extends s.Component {
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
                this.state.nImage
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
              this.state.nImage
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const e = this.props,
            { src: t, rgSources: a, onIncrementalError: r, onError: i } = e,
            o = Object(n.c)(e, [
              "src",
              "rgSources",
              "onIncrementalError",
              "onError",
            ]),
            c = this.src;
          return s.createElement(
            "img",
            Object.assign({ src: c, ref: this.m_refImage }, o, {
              onError: this.OnImageError,
            })
          );
        }
      }
      Object(n.b)([r.b], i.prototype, "OnImageError", null);
    },
    Jxx8: function (e, t, a) {
      e.exports = {
        SnoozeContainer: "friendsnooze_SnoozeContainer_3EzTy",
        SnoozeZ: "friendsnooze_SnoozeZ_1DArl",
        none: "friendsnooze_none_2k961",
        Medium: "friendsnooze_Medium_3Gk3l",
        Large: "friendsnooze_Large_dTohL",
        Dim: "friendsnooze_Dim_2TzRZ",
        Z1: "friendsnooze_Z1_1OyrT",
        Z2: "friendsnooze_Z2_1mx4k",
        Z3: "friendsnooze_Z3_1ltvK",
        hoverParent: "friendsnooze_hoverParent_3ID9R",
        animating: "friendsnooze_animating_3CzX5",
        Snoring: "friendsnooze_Snoring_YuCwj",
      };
    },
    icLO: function (e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
    },
    iyod: function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "personastatusicons_PersonaStatusIcon_1YsWj",
        MobilePhoneIcon: "personastatusicons_MobilePhoneIcon_3pGV8",
      };
    },
    kMdN: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return l;
      }),
        a.d(t, "a", function () {
          return p;
        });
      var n = a("mrSG"),
        s = a("2vnA"),
        r = a("Gp1o"),
        i = a("FKEV"),
        o = a("GXif"),
        c = (a("Zdsb"), a("Nr4G"), a("/Q1a")),
        m = (a("oleE"), a("xH93"));
      function l(e) {
        let t = "offline";
        return (
          e &&
            (e.is_ingame
              ? (t = "ingame")
              : e.m_broadcastAccountId
              ? (t = "watchingbroadcast")
              : e.is_online && (t = "online"),
            e.is_awayOrSnooze && (t += " awayOrSnooze")),
          t
        );
      }
      class p {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = m.b),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_mapRichPresence = s.C.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            this.m_mapRichPresence.clear(),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        get is_online() {
          return 0 != this.m_ePersonaState && 7 != this.m_ePersonaState;
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          return 0 != (2 & this.m_unPersonaStateFlags);
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return 3 == this.m_ePersonaState || 4 == this.m_ePersonaState;
        }
        HasStateFlag(e) {
          return 0 != (this.m_unPersonaStateFlags & e);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          0 != this.m_ePersonaState && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(4);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
            ? i.a.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? i.a.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? i.a.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? i.a.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            i.a.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
        }
        HasCurrentGameRichPresence() {
          return this.m_mapRichPresence.has("steam_display");
        }
        GetCurrentGameRichPresence() {
          if (this.HasCurrentGameRichPresence()) {
            let e = i.a.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return Object(o.g)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const a = i.a.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return Object(o.g)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!c.d.IN_MOBILE || e <= 60) && Object(r.b)(e);
          let t = i.a.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? Object(o.g)("#PersonaStateLastSeen_JustNow")
            : Object(o.g)("#PersonaStateLastSeen", Object(o.s)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return Object(o.g)("#PersonaStateOnline");
            case 2:
              return Object(o.g)("#PersonaStateBusy");
            case 3:
              return Object(o.g)("#PersonaStateAway");
            case 4:
              return Object(o.g)("#PersonaStateSnooze");
            case 5:
              return Object(o.g)("#PersonaStateLookingToTrade");
            case 6:
              return Object(o.g)("#PersonaStateLookingToPlay");
            default:
              return "";
          }
        }
        get has_public_party_beacon() {
          return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
        }
        get player_group() {
          return this.m_mapRichPresence.has("steam_player_group")
            ? this.m_mapRichPresence.get("steam_player_group")
            : "";
        }
        get player_group_size() {
          return this.m_mapRichPresence.has("steam_player_group_size")
            ? Number.parseInt(
                this.m_mapRichPresence.get("steam_player_group_size")
              )
            : 0;
        }
        get online_state() {
          return this.is_online
            ? this.is_ingame
              ? "in-game"
              : this.m_broadcastAccountId
              ? "watchingbroadcast"
              : "online"
            : "offline";
        }
        BHasAvatarSet() {
          return this.m_strAvatarHash != m.b;
        }
        get avatar_url() {
          return Object(m.a)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return Object(m.a)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return Object(m.a)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, a) {
          if (t.has_public_party_beacon) {
            if (!a.has_public_party_beacon) return -1;
          } else {
            if (a.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!a.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!a.is_awayOrSnooze) return 1;
              } else if (a.is_awayOrSnooze) return -1;
            } else if (a.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!a.is_online) return -1;
          } else if (a.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!a.is_awayOrSnooze) return 1;
            } else if (a.is_awayOrSnooze) return -1;
          return 0;
        }
      }
      Object(n.b)([s.C], p.prototype, "m_bInitialized", void 0),
        Object(n.b)([s.C], p.prototype, "m_ePersonaState", void 0),
        Object(n.b)([s.C], p.prototype, "m_unGamePlayedAppID", void 0),
        Object(n.b)([s.C], p.prototype, "m_gameid", void 0),
        Object(n.b)([s.C], p.prototype, "m_unPersonaStateFlags", void 0),
        Object(n.b)([s.C], p.prototype, "m_strPlayerName", void 0),
        Object(n.b)([s.C], p.prototype, "m_strAvatarHash", void 0),
        Object(n.b)([s.C], p.prototype, "m_rtLastSeenOnline", void 0),
        Object(n.b)([s.C], p.prototype, "m_strGameExtraInfo", void 0),
        Object(n.b)([s.C], p.prototype, "m_unGameServerIP", void 0),
        Object(n.b)([s.C], p.prototype, "m_unGameServerPort", void 0),
        Object(n.b)([s.C], p.prototype, "m_game_lobby_id", void 0),
        Object(n.b)([s.C], p.prototype, "m_bPlayerNamePending", void 0),
        Object(n.b)([s.C], p.prototype, "m_bAvatarPending", void 0),
        Object(n.b)([s.C], p.prototype, "m_broadcastId", void 0),
        Object(n.b)([s.C], p.prototype, "m_broadcastAccountId", void 0),
        Object(n.b)([s.C], p.prototype, "m_broadcastAppId", void 0),
        Object(n.b)([s.C], p.prototype, "m_broadcastViewerCount", void 0),
        Object(n.b)([s.C], p.prototype, "m_strBroadcastTitle", void 0),
        Object(n.b)([s.C], p.prototype, "m_bCommunityBanned", void 0);
    },
    m2nf: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return P;
      });
      var n = a("mrSG"),
        s = a("q1tI"),
        r = a("TyAF"),
        i = a("GXif"),
        o = a("msu0"),
        c = a("kMdN"),
        m = a("GbHM"),
        l = a("Jxx8"),
        p = a.n(l);
      let u = class extends s.Component {
        static get hoverClass() {
          return p.a.hoverParent;
        }
        render() {
          const e = this.props,
            { persona: t, animating: a, className: r, size: i, dim: o } = e,
            c = Object(n.c)(e, [
              "persona",
              "animating",
              "className",
              "size",
              "dim",
            ]);
          let l = "";
          return (
            "medium" == i ? (l = p.a.Medium) : "large" == i && (l = p.a.Large),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: Object(m.a)(
                    p.a.SnoozeContainer,
                    t.online_state,
                    r,
                    a && p.a.animating,
                    l,
                    o && p.a.Dim
                  ),
                },
                c
              ),
              s.createElement(
                "div",
                {
                  "data-text": "Z",
                  className: Object(m.a)(p.a.SnoozeZ, p.a.Z1),
                },
                "Z"
              ),
              s.createElement(
                "div",
                {
                  "data-text": "Z",
                  className: Object(m.a)(p.a.SnoozeZ, p.a.Z2),
                },
                "Z"
              ),
              s.createElement(
                "div",
                {
                  "data-text": "Z",
                  className: Object(m.a)(p.a.SnoozeZ, p.a.Z3),
                },
                "Z"
              )
            )
          );
        }
      };
      u = Object(n.b)([r.a], u);
      a("Nr4G");
      var h = a("e356"),
        d = a("iyod"),
        A = a.n(d),
        _ = a("AYtk");
      const g = Object(r.a)((e) => {
        const { persona: t, className: a } = e,
          r = Object(n.c)(e, ["persona", "className"]);
        if (!t) return null;
        if (!t.is_online) return null;
        const o = t.HasStateFlag(512),
          l = t.HasStateFlag(2048),
          p = !l && t.HasStateFlag(1024);
        return s.createElement(
          s.Fragment,
          null,
          o &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: Object(m.a)(
                    a,
                    A.a.PersonaStatusIcon,
                    A.a.MobilePhoneIcon,
                    Object(c.b)(t)
                  ),
                  title: Object(i.g)("#Platform_Hint_Mobile"),
                },
                r
              ),
              s.createElement(_.b, null)
            ),
          l &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: Object(m.a)(
                    a,
                    A.a.PersonaStatusIcon,
                    A.a.VRIcon,
                    Object(c.b)(t)
                  ),
                  title: Object(i.g)("#Platform_Hint_VR"),
                },
                r
              ),
              s.createElement(h.zb, null)
            ),
          p &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: Object(m.a)(
                    a,
                    A.a.PersonaStatusIcon,
                    A.a.BigPictureIcon,
                    Object(c.b)(t)
                  ),
                  title: Object(i.g)("#Platform_Hint_BigPicture"),
                },
                r
              ),
              s.createElement(h.h, null)
            )
        );
      });
      var b = a("CG4B"),
        f = a.n(b);
      function I(e) {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "span",
            { className: f.a.partyBeaconJoin },
            Object(i.g)("#User_WantsToPlay")
          ),
          " – ",
          e.persona.GetCurrentGameName()
        );
      }
      let P = class extends s.Component {
        render() {
          const e = this.props,
            {
              className: t,
              onContextMenu: a,
              persona: r,
              eFriendRelationship: l,
              bIsSelf: p,
              bParenthesizeNicknames: d,
              strNickname: A,
              bCompactView: _,
              bHideGameName: b,
              bHideEnhancedRichPresenceLabel: P,
              bHideSnooze: S,
              bHideStatus: v,
              renderStatus: O,
              renderRichPresence: C,
              bHidePersona: y,
              bDNDSet: B,
              bHasPartyBeacon: j,
              bHasGamePrivacy: E,
              bNoMask: N,
            } = e,
            G = Object(n.c)(e, [
              "className",
              "onContextMenu",
              "persona",
              "eFriendRelationship",
              "bIsSelf",
              "bParenthesizeNicknames",
              "strNickname",
              "bCompactView",
              "bHideGameName",
              "bHideEnhancedRichPresenceLabel",
              "bHideSnooze",
              "bHideStatus",
              "renderStatus",
              "renderRichPresence",
              "bHidePersona",
              "bDNDSet",
              "bHasPartyBeacon",
              "bHasGamePrivacy",
              "bNoMask",
            ]);
          let R = null,
            L = null,
            D = null,
            Q = [
              t,
              f.a.personaNameAndStatusLabel,
              Object(c.b)(r),
              _ && f.a.compactView,
              N && f.a.NoMask,
            ];
          j || r.has_public_party_beacon
            ? (L = s.createElement(I, { persona: r }))
            : Object(o.a)(l)
            ? ((L = Object(i.g)("#PersonaStateBlocked")), Q.push(f.a.blocked))
            : r.is_ingame
            ? ((L =
                !r.is_in_nonsteam_game || p || Object(o.b)(l)
                  ? r.GetCurrentGameName()
                  : Object(i.g)("#PersonaStateInNonSteamGame")),
              p || y
                ? p &&
                  r.is_awayOrSnooze &&
                  (D = Object(i.g)("#PersonaStateAway"))
                : (D = r.GetCurrentGameRichPresence()))
            : r.m_broadcastAccountId &&
              (L = Object(i.g)("#PersonaStateWatchingBroadcast")),
            L || (L = r.GetLocalizedOnlineStatus()),
            O && (L = O());
          let w = !y && !S;
          !1 === S && (w = !0),
            r.is_awayOrSnooze && w && (R = s.createElement(u, { persona: r }));
          let k = null;
          a
            ? (k = s.createElement(
                "div",
                { className: "ContextMenuButton", onClick: a },
                s.createElement(h.y, null)
              ))
            : Q.push(f.a.noContextMenu),
            y && Q.push(f.a.hidePersona),
            C && (D = C()),
            (!b && D) || Q.push(f.a.twoLine);
          const z = !r.is_ingame && !v,
            F = !P && D,
            H = L && (!b || !F);
          let U = A && !d,
            M = U ? A : r.m_strPlayerName,
            T = !y && (H || z) && F;
          return s.createElement(
            "div",
            Object.assign({}, G, {
              className: Object(m.a)(...Q),
              onContextMenu: a,
            }),
            s.createElement(
              "div",
              {
                className: Object(m.a)(f.a.statusAndName, T && f.a.threeLines),
              },
              s.createElement(
                "div",
                { className: f.a.playerName },
                M || " ",
                d &&
                  A &&
                  s.createElement(
                    "span",
                    { className: f.a.playerNickname },
                    "(",
                    A,
                    ")"
                  )
              ),
              B &&
                s.createElement(
                  "div",
                  {
                    className: f.a.DNDContainer,
                    title: Object(i.g)("#User_ToggleDoNotDisturb"),
                  },
                  s.createElement(h.w, null)
                ),
              U &&
                s.createElement(
                  "span",
                  {
                    className: f.a.playerNicknameBracket,
                    title: Object(i.g)("#isNickname"),
                  },
                  " *"
                ),
              s.createElement(g, { persona: r }),
              R,
              (r.m_bPlayerNamePending || r.m_bAvatarPending) &&
                s.createElement(
                  "div",
                  {
                    className: f.a.PendingPersona,
                    title: Object(i.g)("#SteamChina_PendingPersonaName"),
                  },
                  s.createElement(h.r, null)
                ),
              k
            ),
            !y &&
              s.createElement(
                "div",
                { className: f.a.richPresenceContainer },
                (H || z) &&
                  s.createElement(
                    "div",
                    {
                      className: Object(m.a)(
                        f.a.gameName,
                        T && f.a.threeLines,
                        f.a.richPresenceLabel,
                        "no-drag"
                      ),
                    },
                    E &&
                      s.createElement(
                        "div",
                        {
                          className: f.a.gameIsPrivateIcon,
                          title: Object(i.g)("#User_GameInfoHidden"),
                        },
                        s.createElement(h.J, null)
                      ),
                    L
                  ),
                F &&
                  s.createElement(
                    "div",
                    {
                      className: Object(m.a)(f.a.richPresenceLabel, "no-drag"),
                    },
                    D,
                    " "
                  )
              )
          );
        }
      };
      P = Object(n.b)([r.a], P);
      Object(r.a)((e) => {
        const {
            persona: t,
            bParenthesizeNicknames: a,
            strNickname: r,
            className: i,
          } = e,
          o = Object(n.c)(e, [
            "persona",
            "bParenthesizeNicknames",
            "strNickname",
            "className",
          ]);
        let l = r && !a ? r : t.m_strPlayerName;
        return s.createElement(
          "span",
          Object.assign({}, o, { className: Object(m.a)(i, Object(c.b)(t)) }),
          s.createElement(
            "span",
            { className: f.a.playerName },
            l || " ",
            a &&
              r &&
              s.createElement(
                "span",
                { className: f.a.playerNickname },
                "(",
                r,
                ")"
              )
          )
        );
      });
    },
    y66k: function (e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
    },
  },
]);

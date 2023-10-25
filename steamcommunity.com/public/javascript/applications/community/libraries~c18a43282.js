/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [483],
  {
    74802: (e, r, t) => {
      t.d(r, { h: () => E });
      var i = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var a = void 0;
      function n() {
        return (
          void 0 === a &&
            (a = (function () {
              if (!i) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var r = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  }),
                  t = function () {};
                window.addEventListener("testPassiveEventSupport", t, r),
                  window.removeEventListener("testPassiveEventSupport", t, r);
              } catch (e) {}
              return e;
            })()),
          a
        );
      }
      function s(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function o(e) {
        (this.target = e), (this.events = {});
      }
      (o.prototype.getEventHandlers = function (e, r) {
        var t,
          i =
            String(e) +
            " " +
            String(
              (t = r)
                ? !0 === t
                  ? 100
                  : (t.capture << 0) + (t.passive << 1) + (t.once << 2)
                : 0,
            );
        return (
          this.events[i] ||
            ((this.events[i] = { handlers: [], handleEvent: void 0 }),
            (this.events[i].nextHandlers = this.events[i].handlers)),
          this.events[i]
        );
      }),
        (o.prototype.handleEvent = function (e, r, t) {
          var i = this.getEventHandlers(e, r);
          (i.handlers = i.nextHandlers),
            i.handlers.forEach(function (e) {
              e && e(t);
            });
        }),
        (o.prototype.add = function (e, r, t) {
          var i = this,
            a = this.getEventHandlers(e, t);
          s(a),
            0 === a.nextHandlers.length &&
              ((a.handleEvent = this.handleEvent.bind(this, e, t)),
              this.target.addEventListener(e, a.handleEvent, t)),
            a.nextHandlers.push(r);
          var n = !0;
          return function () {
            if (n) {
              (n = !1), s(a);
              var o = a.nextHandlers.indexOf(r);
              a.nextHandlers.splice(o, 1),
                0 === a.nextHandlers.length &&
                  (i.target &&
                    i.target.removeEventListener(e, a.handleEvent, t),
                  (a.handleEvent = void 0));
            }
          };
        });
      var l = "__consolidated_events_handlers__";
      function c(e, r, t, i) {
        e[l] || (e[l] = new o(e));
        var a = (function (e) {
          if (e) return n() ? e : !!e.capture;
        })(i);
        return e[l].add(r, t, a);
      }
      var u = t(89526),
        m = t(338);
      function d(e, r) {
        for (var t = 0; t < r.length; t++) {
          var i = r[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function B(e) {
        return (
          (B = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          B(e)
        );
      }
      function _(e, r) {
        return (
          (_ =
            Object.setPrototypeOf ||
            function (e, r) {
              return (e.__proto__ = r), e;
            }),
          _(e, r)
        );
      }
      function y(e, r) {
        return !r || ("object" != typeof r && "function" != typeof r)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : r;
      }
      function b(e) {
        var r = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            i = B(e);
          if (r) {
            var a = B(this).constructor;
            t = Reflect.construct(i, arguments, a);
          } else t = i.apply(this, arguments);
          return y(this, t);
        };
      }
      function p(e, r) {
        var t,
          i =
            ((t = e),
            !isNaN(parseFloat(t)) && isFinite(t)
              ? parseFloat(t)
              : "px" === t.slice(-2)
              ? parseFloat(t.slice(0, -2))
              : void 0);
        if ("number" == typeof i) return i;
        var a = (function (e) {
          if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
        })(e);
        return "number" == typeof a ? a * r : void 0;
      }
      var g = "above",
        w = "inside",
        f = "below",
        F = "invisible";
      function z(e) {
        return "string" == typeof e.type;
      }
      var S;
      var M = [];
      function R(e) {
        M.push(e),
          S ||
            (S = setTimeout(function () {
              var e;
              for (S = null; (e = M.shift()); ) e();
            }, 0));
        var r = !0;
        return function () {
          if (r) {
            r = !1;
            var t = M.indexOf(e);
            -1 !== t &&
              (M.splice(t, 1), !M.length && S && (clearTimeout(S), (S = null)));
          }
        };
      }
      var h = {
          debug: !1,
          scrollableAncestor: void 0,
          children: void 0,
          topOffset: "0px",
          bottomOffset: "0px",
          horizontal: !1,
          onEnter: function () {},
          onLeave: function () {},
          onPositionChange: function () {},
          fireOnRapidScroll: !0,
        },
        E = (function (e) {
          !(function (e, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(r && r.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              r && _(e, r);
          })(s, e);
          var r,
            i,
            a,
            n = b(s);
          function s(e) {
            var r;
            return (
              (function (e, r) {
                if (!(e instanceof r))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              ((r = n.call(this, e)).refElement = function (e) {
                r._ref = e;
              }),
              r
            );
          }
          return (
            (r = s),
            (i = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  s.getWindow() &&
                    (this.cancelOnNextTick = R(function () {
                      e.cancelOnNextTick = null;
                      var r = e.props,
                        t = r.children;
                      r.debug,
                        (function (e, r) {
                          if (e && !z(e) && !r)
                            throw new Error(
                              "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.",
                            );
                        })(t, e._ref),
                        (e._handleScroll = e._handleScroll.bind(e)),
                        (e.scrollableAncestor = e._findScrollableAncestor()),
                        (e.scrollEventListenerUnsubscribe = c(
                          e.scrollableAncestor,
                          "scroll",
                          e._handleScroll,
                          { passive: !0 },
                        )),
                        (e.resizeEventListenerUnsubscribe = c(
                          window,
                          "resize",
                          e._handleScroll,
                          { passive: !0 },
                        )),
                        e._handleScroll(null);
                    }));
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this;
                  s.getWindow() &&
                    this.scrollableAncestor &&
                    (this.cancelOnNextTick ||
                      (this.cancelOnNextTick = R(function () {
                        (e.cancelOnNextTick = null), e._handleScroll(null);
                      })));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  s.getWindow() &&
                    (this.scrollEventListenerUnsubscribe &&
                      this.scrollEventListenerUnsubscribe(),
                    this.resizeEventListenerUnsubscribe &&
                      this.resizeEventListenerUnsubscribe(),
                    this.cancelOnNextTick && this.cancelOnNextTick());
                },
              },
              {
                key: "_findScrollableAncestor",
                value: function () {
                  var e = this.props,
                    r = e.horizontal,
                    i = e.scrollableAncestor;
                  if (i)
                    return (function (e) {
                      return "window" === e ? t.g.window : e;
                    })(i);
                  for (var a = this._ref; a.parentNode; ) {
                    if ((a = a.parentNode) === document.body) return window;
                    var n = window.getComputedStyle(a),
                      s =
                        (r
                          ? n.getPropertyValue("overflow-x")
                          : n.getPropertyValue("overflow-y")) ||
                        n.getPropertyValue("overflow");
                    if ("auto" === s || "scroll" === s || "overlay" === s)
                      return a;
                  }
                  return window;
                },
              },
              {
                key: "_handleScroll",
                value: function (e) {
                  if (this._ref) {
                    var r = this._getBounds(),
                      t = (function (e) {
                        return e.viewportBottom - e.viewportTop == 0
                          ? F
                          : (e.viewportTop <= e.waypointTop &&
                              e.waypointTop <= e.viewportBottom) ||
                            (e.viewportTop <= e.waypointBottom &&
                              e.waypointBottom <= e.viewportBottom) ||
                            (e.waypointTop <= e.viewportTop &&
                              e.viewportBottom <= e.waypointBottom)
                          ? w
                          : e.viewportBottom < e.waypointTop
                          ? f
                          : e.waypointTop < e.viewportTop
                          ? g
                          : F;
                      })(r),
                      i = this._previousPosition,
                      a = this.props,
                      n = (a.debug, a.onPositionChange),
                      s = a.onEnter,
                      o = a.onLeave,
                      l = a.fireOnRapidScroll;
                    if (((this._previousPosition = t), i !== t)) {
                      var c = {
                        currentPosition: t,
                        previousPosition: i,
                        event: e,
                        waypointTop: r.waypointTop,
                        waypointBottom: r.waypointBottom,
                        viewportTop: r.viewportTop,
                        viewportBottom: r.viewportBottom,
                      };
                      n.call(this, c),
                        t === w ? s.call(this, c) : i === w && o.call(this, c),
                        l &&
                          ((i === f && t === g) || (i === g && t === f)) &&
                          (s.call(this, {
                            currentPosition: w,
                            previousPosition: i,
                            event: e,
                            waypointTop: r.waypointTop,
                            waypointBottom: r.waypointBottom,
                            viewportTop: r.viewportTop,
                            viewportBottom: r.viewportBottom,
                          }),
                          o.call(this, {
                            currentPosition: t,
                            previousPosition: w,
                            event: e,
                            waypointTop: r.waypointTop,
                            waypointBottom: r.waypointBottom,
                            viewportTop: r.viewportTop,
                            viewportBottom: r.viewportBottom,
                          }));
                    }
                  }
                },
              },
              {
                key: "_getBounds",
                value: function () {
                  var e,
                    r,
                    t = this.props,
                    i = t.horizontal,
                    a = (t.debug, this._ref.getBoundingClientRect()),
                    n = a.left,
                    s = a.top,
                    o = a.right,
                    l = a.bottom,
                    c = i ? n : s,
                    u = i ? o : l;
                  this.scrollableAncestor === window
                    ? ((e = i ? window.innerWidth : window.innerHeight),
                      (r = 0))
                    : ((e = i
                        ? this.scrollableAncestor.offsetWidth
                        : this.scrollableAncestor.offsetHeight),
                      (r = i
                        ? this.scrollableAncestor.getBoundingClientRect().left
                        : this.scrollableAncestor.getBoundingClientRect().top));
                  var m = this.props,
                    d = m.bottomOffset;
                  return {
                    waypointTop: c,
                    waypointBottom: u,
                    viewportTop: r + p(m.topOffset, e),
                    viewportBottom: r + e - p(d, e),
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    r = this.props.children;
                  return r
                    ? z(r) || (0, m.isForwardRef)(r)
                      ? u.cloneElement(r, {
                          ref: function (t) {
                            e.refElement(t),
                              r.ref &&
                                ("function" == typeof r.ref
                                  ? r.ref(t)
                                  : (r.ref.current = t));
                          },
                        })
                      : u.cloneElement(r, { innerRef: this.refElement })
                    : u.createElement("span", {
                        ref: this.refElement,
                        style: { fontSize: 0 },
                      });
                },
              },
            ]) && d(r.prototype, i),
            a && d(r, a),
            s
          );
        })(u.PureComponent);
      (E.above = g),
        (E.below = f),
        (E.inside = w),
        (E.invisible = F),
        (E.getWindow = function () {
          if ("undefined" != typeof window) return window;
        }),
        (E.defaultProps = h),
        (E.displayName = "Waypoint");
    },
    69851: (e, r, t) => {
      function i(e) {
        return (
          "game" === e ||
          "dlc" === e ||
          "software" === e ||
          "music" === e ||
          "application" === e ||
          "demo" === e ||
          "hardware" === e ||
          "mod" === e ||
          "video" == e ||
          "beta" === e ||
          "advertising" === e
        );
      }
      t.d(r, { m: () => i });
    },
    35089: (e, r, t) => {
      t.d(r, { mB: () => s });
      var i = t(45878);
      t(43898);
      i.Message;
      var a, n, s, o, l, c;
      !(function (e) {
        (e[(e.k_EDisplayStatusInvalid = 0)] = "k_EDisplayStatusInvalid"),
          (e[(e.k_EDisplayStatusLaunching = 1)] = "k_EDisplayStatusLaunching"),
          (e[(e.k_EDisplayStatusUninstalling = 2)] =
            "k_EDisplayStatusUninstalling"),
          (e[(e.k_EDisplayStatusInstalling = 3)] =
            "k_EDisplayStatusInstalling"),
          (e[(e.k_EDisplayStatusRunning = 4)] = "k_EDisplayStatusRunning"),
          (e[(e.k_EDisplayStatusValidating = 5)] =
            "k_EDisplayStatusValidating"),
          (e[(e.k_EDisplayStatusUpdating = 6)] = "k_EDisplayStatusUpdating"),
          (e[(e.k_EDisplayStatusDownloading = 7)] =
            "k_EDisplayStatusDownloading"),
          (e[(e.k_EDisplayStatusSynchronizing = 8)] =
            "k_EDisplayStatusSynchronizing"),
          (e[(e.k_EDisplayStatusReadyToInstall = 9)] =
            "k_EDisplayStatusReadyToInstall"),
          (e[(e.k_EDisplayStatusReadyToPreload = 10)] =
            "k_EDisplayStatusReadyToPreload"),
          (e[(e.k_EDisplayStatusReadyToLaunch = 11)] =
            "k_EDisplayStatusReadyToLaunch"),
          (e[(e.k_EDisplayStatusRegionRestricted = 12)] =
            "k_EDisplayStatusRegionRestricted"),
          (e[(e.k_EDisplayStatusPresaleOnly = 13)] =
            "k_EDisplayStatusPresaleOnly"),
          (e[(e.k_EDisplayStatusInvalidPlatform = 14)] =
            "k_EDisplayStatusInvalidPlatform"),
          (e[(e.k_EDisplayStatusPreloadComplete = 16)] =
            "k_EDisplayStatusPreloadComplete"),
          (e[(e.k_EDisplayStatusBorrowerLocked = 17)] =
            "k_EDisplayStatusBorrowerLocked"),
          (e[(e.k_EDisplayStatusUpdatePaused = 18)] =
            "k_EDisplayStatusUpdatePaused"),
          (e[(e.k_EDisplayStatusUpdateQueued = 19)] =
            "k_EDisplayStatusUpdateQueued"),
          (e[(e.k_EDisplayStatusUpdateRequired = 20)] =
            "k_EDisplayStatusUpdateRequired"),
          (e[(e.k_EDisplayStatusUpdateDisabled = 21)] =
            "k_EDisplayStatusUpdateDisabled"),
          (e[(e.k_EDisplayStatusDownloadPaused = 22)] =
            "k_EDisplayStatusDownloadPaused"),
          (e[(e.k_EDisplayStatusDownloadQueued = 23)] =
            "k_EDisplayStatusDownloadQueued"),
          (e[(e.k_EDisplayStatusDownloadRequired = 24)] =
            "k_EDisplayStatusDownloadRequired"),
          (e[(e.k_EDisplayStatusDownloadDisabled = 25)] =
            "k_EDisplayStatusDownloadDisabled"),
          (e[(e.k_EDisplayStatusLicensePending = 26)] =
            "k_EDisplayStatusLicensePending"),
          (e[(e.k_EDisplayStatusLicenseExpired = 27)] =
            "k_EDisplayStatusLicenseExpired"),
          (e[(e.k_EDisplayStatusAvailForFree = 28)] =
            "k_EDisplayStatusAvailForFree"),
          (e[(e.k_EDisplayStatusAvailToBorrow = 29)] =
            "k_EDisplayStatusAvailToBorrow"),
          (e[(e.k_EDisplayStatusAvailGuestPass = 30)] =
            "k_EDisplayStatusAvailGuestPass"),
          (e[(e.k_EDisplayStatusPurchase = 31)] = "k_EDisplayStatusPurchase"),
          (e[(e.k_EDisplayStatusUnavailable = 32)] =
            "k_EDisplayStatusUnavailable"),
          (e[(e.k_EDisplayStatusNotLaunchable = 33)] =
            "k_EDisplayStatusNotLaunchable"),
          (e[(e.k_EDisplayStatusCloudError = 34)] =
            "k_EDisplayStatusCloudError"),
          (e[(e.k_EDisplayStatusCloudOutOfDate = 35)] =
            "k_EDisplayStatusCloudOutOfDate"),
          (e[(e.k_EDisplayStatusTerminating = 36)] =
            "k_EDisplayStatusTerminating");
      })(a || (a = {})),
        (function (e) {
          (e[(e.k_EAppCloudStatusInvalid = 0)] = "k_EAppCloudStatusInvalid"),
            (e[(e.k_EAppCloudStatusDisabled = 1)] =
              "k_EAppCloudStatusDisabled"),
            (e[(e.k_EAppCloudStatusUnknown = 2)] = "k_EAppCloudStatusUnknown"),
            (e[(e.k_EAppCloudStatusSynchronized = 3)] =
              "k_EAppCloudStatusSynchronized"),
            (e[(e.k_EAppCloudStatusChecking = 4)] =
              "k_EAppCloudStatusChecking"),
            (e[(e.k_EAppCloudStatusOutOfSync = 5)] =
              "k_EAppCloudStatusOutOfSync"),
            (e[(e.k_EAppCloudStatusUploading = 6)] =
              "k_EAppCloudStatusUploading"),
            (e[(e.k_EAppCloudStatusDownloading = 7)] =
              "k_EAppCloudStatusDownloading"),
            (e[(e.k_EAppCloudStatusSyncFailed = 8)] =
              "k_EAppCloudStatusSyncFailed"),
            (e[(e.k_EAppCloudStatusConflict = 9)] =
              "k_EAppCloudStatusConflict"),
            (e[(e.k_EAppCloudStatusPendingElsewhere = 10)] =
              "k_EAppCloudStatusPendingElsewhere");
        })(n || (n = {})),
        (function (e) {
          (e[(e.k_EAppTypeInvalid = 0)] = "k_EAppTypeInvalid"),
            (e[(e.k_EAppTypeGame = 1)] = "k_EAppTypeGame"),
            (e[(e.k_EAppTypeApplication = 2)] = "k_EAppTypeApplication"),
            (e[(e.k_EAppTypeTool = 4)] = "k_EAppTypeTool"),
            (e[(e.k_EAppTypeDemo = 8)] = "k_EAppTypeDemo"),
            (e[(e.k_EAppTypeDeprected = 16)] = "k_EAppTypeDeprected"),
            (e[(e.k_EAppTypeDLC = 32)] = "k_EAppTypeDLC"),
            (e[(e.k_EAppTypeGuide = 64)] = "k_EAppTypeGuide"),
            (e[(e.k_EAppTypeDriver = 128)] = "k_EAppTypeDriver"),
            (e[(e.k_EAppTypeConfig = 256)] = "k_EAppTypeConfig"),
            (e[(e.k_EAppTypeHardware = 512)] = "k_EAppTypeHardware"),
            (e[(e.k_EAppTypeFranchise = 1024)] = "k_EAppTypeFranchise"),
            (e[(e.k_EAppTypeVideo = 2048)] = "k_EAppTypeVideo"),
            (e[(e.k_EAppTypePlugin = 4096)] = "k_EAppTypePlugin"),
            (e[(e.k_EAppTypeMusicAlbum = 8192)] = "k_EAppTypeMusicAlbum"),
            (e[(e.k_EAppTypeSeries = 16384)] = "k_EAppTypeSeries"),
            (e[(e.k_EAppTypeComic = 32768)] = "k_EAppTypeComic"),
            (e[(e.k_EAppTypeBeta = 65536)] = "k_EAppTypeBeta"),
            (e[(e.k_EAppTypeShortcut = 1073741824)] = "k_EAppTypeShortcut"),
            (e[(e.k_EAppTypeDepotOnly = -2147483648)] = "k_EAppTypeDepotOnly");
        })(s || (s = {})),
        (function (e) {
          (e[(e.k_EAppAssociationTypeInvalid = 0)] =
            "k_EAppAssociationTypeInvalid"),
            (e[(e.k_EAppAssociationTypePublisher = 1)] =
              "k_EAppAssociationTypePublisher"),
            (e[(e.k_EAppAssociationTypeDeveloper = 2)] =
              "k_EAppAssociationTypeDeveloper"),
            (e[(e.k_EAppAssociationTypeFranchise = 3)] =
              "k_EAppAssociationTypeFranchise");
        })(o || (o = {})),
        (function (e) {
          (e[(e.k_EAppControllerSupportLevelNone = 0)] =
            "k_EAppControllerSupportLevelNone"),
            (e[(e.k_EAppControllerSupportLevelPartial = 1)] =
              "k_EAppControllerSupportLevelPartial"),
            (e[(e.k_EAppControllerSupportLevelFull = 2)] =
              "k_EAppControllerSupportLevelFull");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EAppGamepadGyroTrackpadSupportLevelUnknown = -1)] =
            "k_EAppGamepadGyroTrackpadSupportLevelUnknown"),
            (e[(e.k_EAppGamepadGyroTrackpadSupportLevelNoGamepad = 0)] =
              "k_EAppGamepadGyroTrackpadSupportLevelNoGamepad"),
            (e[(e.k_EAppGamepadGyroTrackpadSupportLevelGamepad = 1)] =
              "k_EAppGamepadGyroTrackpadSupportLevelGamepad"),
            (e[(e.k_EAppGamepadGyroTrackpadSupportLevelSimultaneous = 2)] =
              "k_EAppGamepadGyroTrackpadSupportLevelSimultaneous");
        })(c || (c = {}));
    },
    90170: (e, r, t) => {
      t.d(r, {
        $m: () => K,
        Mr: () => B,
        Q3: () => V,
        kY: () => Q,
        mE: () => c,
        mn: () => J,
        q2: () => l,
      });
      var i = t(45878),
        a = t(43898),
        n = t(67328);
      const s = i.Message;
      var o, l, c, u, m, d, B, _;
      !(function (e) {
        (e[(e.k_EBroadcastChatPermissionPublic = 0)] =
          "k_EBroadcastChatPermissionPublic"),
          (e[(e.k_EBroadcastChatPermissionOwnsApp = 1)] =
            "k_EBroadcastChatPermissionOwnsApp");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_EBroadcastWatchLocation_Invalid = 0)] =
            "k_EBroadcastWatchLocation_Invalid"),
            (e[(e.k_EBroadcastWatchLocation_SteamTV_Tab = 1)] =
              "k_EBroadcastWatchLocation_SteamTV_Tab"),
            (e[(e.k_EBroadcastWatchLocation_SteamTV_WatchParty = 2)] =
              "k_EBroadcastWatchLocation_SteamTV_WatchParty"),
            (e[(e.k_EBroadcastWatchLocation_Chat_Tab = 3)] =
              "k_EBroadcastWatchLocation_Chat_Tab"),
            (e[(e.k_EBroadcastWatchLocation_Chat_WatchParty = 4)] =
              "k_EBroadcastWatchLocation_Chat_WatchParty"),
            (e[(e.k_EBroadcastWatchLocation_CommunityPage = 5)] =
              "k_EBroadcastWatchLocation_CommunityPage"),
            (e[(e.k_EBroadcastWatchLocation_StoreAppPage = 6)] =
              "k_EBroadcastWatchLocation_StoreAppPage"),
            (e[(e.k_EBroadcastWatchLocation_InGame = 7)] =
              "k_EBroadcastWatchLocation_InGame"),
            (e[(e.k_EBroadcastWatchLocation_BigPicture = 8)] =
              "k_EBroadcastWatchLocation_BigPicture"),
            (e[(e.k_EBroadcastWatchLocation_SalesPage = 9)] =
              "k_EBroadcastWatchLocation_SalesPage"),
            (e[(e.k_EBroadcastWatchLocation_CuratorPage = 10)] =
              "k_EBroadcastWatchLocation_CuratorPage"),
            (e[(e.k_EBroadcastWatchLocation_DeveloperPage = 11)] =
              "k_EBroadcastWatchLocation_DeveloperPage"),
            (e[(e.k_EBroadcastWatchLocation_Chat_Friends = 12)] =
              "k_EBroadcastWatchLocation_Chat_Friends"),
            (e[(e.k_EBroadcastWatchLocation_SteamTV_Web = 13)] =
              "k_EBroadcastWatchLocation_SteamTV_Web"),
            (e[(e.k_EBroadcastWatchLocation_DesktopUI_Overlay = 14)] =
              "k_EBroadcastWatchLocation_DesktopUI_Overlay");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EBroadcastChatBanClear = 0)] = "k_EBroadcastChatBanClear"),
            (e[(e.k_EBroadcastChatBanMute = 1)] = "k_EBroadcastChatBanMute"),
            (e[(e.k_EBroadcastChatBanShadow = 2)] =
              "k_EBroadcastChatBanShadow");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EBroadcastRestrictionNone = 0)] =
            "k_EBroadcastRestrictionNone"),
            (e[(e.k_EBroadcastRestrictionNotSearchable = 1)] =
              "k_EBroadcastRestrictionNotSearchable"),
            (e[(e.k_EBroadcastRestrictionCantBroadcast = 2)] =
              "k_EBroadcastRestrictionCantBroadcast"),
            (e[(e.k_EBroadcastRestrictionUnbannable = 3)] =
              "k_EBroadcastRestrictionUnbannable");
        })(u || (u = {}));
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.permission || a.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  permission: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  gameid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  client_instance_id: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  title: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  cellid: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  rtmp_token: {
                    n: 6,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  thumbnail_upload: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  client_beta: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  sysid: { n: 9, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  allow_webrtc: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BeginBroadcastSession_Request";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.broadcast_id || a.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  thumbnail_upload_address: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  thumbnail_upload_token: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  thumbnail_interval_seconds: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  heartbeat_interval_seconds: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BeginBroadcastSession_Response";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.broadcast_id || a.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_EndBroadcastSession_Request";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_EndBroadcastSession_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.broadcast_id || a.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  cellid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  as_rtmp: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  delay_seconds: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtmp_token: {
                    n: 5,
                    d: "0",
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  upload_ip_address: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  is_replay: { n: 7, br: a.FE.readBool, bw: a.Xc.writeBool },
                  sysid: { n: 8, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBroadcastUpload_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.upload_token || a.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  upload_token: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  upload_address: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  broadcast_upload_id: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  enable_replay: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  http_address: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBroadcastUpload_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.broadcast_id || a.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  upload_token: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  upload_address: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  http_address: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  broadcast_upload_id: {
                    n: 5,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  heartbeat_interval_seconds: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  is_rtmp: { n: 7, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastUploadStarted_Notification";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || a.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastStatus_Request";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.gameid || a.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  gameid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  title: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  num_viewers: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  permission: { n: 4, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  is_rtmp: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  seconds_delay: {
                    n: 6,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  is_publisher: { n: 7, br: a.FE.readBool, bw: a.Xc.writeBool },
                  thumbnail_url: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  update_interval: {
                    n: 9,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  is_uploading: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  duration: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  is_replay: { n: 12, br: a.FE.readBool, bw: a.Xc.writeBool },
                  is_capturing_vod: {
                    n: 13,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  is_store_whitelisted: {
                    n: 14,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastStatus_Response";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || a.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastThumbnail_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.thumbnail_url || a.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  thumbnail_url: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  update_interval: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  num_viewers: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  duration: { n: 4, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastThumbnail_Response";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.steamid || a.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  existing_broadcast_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  viewer_token: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  client_cell: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  watch_location: {
                    n: 6,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  is_webrtc: { n: 7, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WatchBroadcast_Request";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.response || a.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  response: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  mpd_url: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  broadcast_id: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  gameid: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  title: { n: 5, br: a.FE.readString, bw: a.Xc.writeString },
                  num_viewers: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  permission: { n: 7, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  is_rtmp: { n: 8, br: a.FE.readBool, bw: a.Xc.writeBool },
                  seconds_delay: {
                    n: 9,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  viewer_token: {
                    n: 10,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  hls_m3u8_master_url: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  heartbeat_interval: {
                    n: 12,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  thumbnail_url: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  is_webrtc: { n: 14, br: a.FE.readBool, bw: a.Xc.writeBool },
                  webrtc_session_id: {
                    n: 15,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  webrtc_offer_sdp: {
                    n: 16,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  webrtc_turn_server: {
                    n: 17,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  is_replay: { n: 18, br: a.FE.readBool, bw: a.Xc.writeBool },
                  duration: { n: 19, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  cdn_auth_url_parameters: {
                    n: 20,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WatchBroadcast_Response";
        }
      }
      !(function (e) {
        (e[(e.k_EWatchResponseReady = 1)] = "k_EWatchResponseReady"),
          (e[(e.k_EWatchResponseNotAvailable = 2)] =
            "k_EWatchResponseNotAvailable"),
          (e[(e.k_EWatchResponseWaitingForApproval = 3)] =
            "k_EWatchResponseWaitingForApproval"),
          (e[(e.k_EWatchResponseWaitingForStart = 4)] =
            "k_EWatchResponseWaitingForStart"),
          (e[(e.k_EWatchResponseInvalidSession = 5)] =
            "k_EWatchResponseInvalidSession"),
          (e[(e.k_EWatchResponseTooManyBroadcasts = 6)] =
            "k_EWatchResponseTooManyBroadcasts"),
          (e[(e.k_EWatchResponseWaitingForReconnect = 7)] =
            "k_EWatchResponseWaitingForReconnect"),
          (e[(e.k_EWatchResponseSystemNotSupported = 8)] =
            "k_EWatchResponseSystemNotSupported"),
          (e[(e.k_EWatchResponseUserRestricted = 9)] =
            "k_EWatchResponseUserRestricted"),
          (e[(e.k_EWatchResponseClientOutOfDate = 10)] =
            "k_EWatchResponseClientOutOfDate"),
          (e[(e.k_EWatchResponsePoorUploadQuality = 11)] =
            "k_EWatchResponsePoorUploadQuality"),
          (e[(e.k_EWatchResponseMissingSubscription = 12)] =
            "k_EWatchResponseMissingSubscription");
      })(m || (m = {}));
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || a.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  viewer_token: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  representation: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_HeartbeatBroadcast_Notification";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.steamid || a.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  viewer_token: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StopWatchingBroadcast_Notification";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.steamid || a.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  approval_response: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_InviteToBroadcast_Request";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.success || a.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  success: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_InviteToBroadcast_Response";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.permission || a.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  permission: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  gameid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  title: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  game_data_config: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendBroadcastStateToServer_Request";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendBroadcastStateToServer_Response";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || a.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  state: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastViewerState_Notification";
        }
      }
      !(function (e) {
        (e[(e.k_EViewerNeedsApproval = 1)] = "k_EViewerNeedsApproval"),
          (e[(e.k_EViewerWatching = 2)] = "k_EViewerWatching"),
          (e[(e.k_EViewerLeft = 3)] = "k_EViewerLeft");
      })(d || (d = {}));
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.broadcast_id || a.aR(I.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WaitingBroadcastViewer_Notification";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.broadcast_id || a.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  broadcast_relay_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  upload_result: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  too_many_poor_uploads: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StopBroadcastUpload_Notification";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.broadcast_id || a.aR(P.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(P.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SessionClosed_Notification";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.broadcast_id || a.aR(A.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  num_viewers: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastStatus_Notification";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.broadcast_channel_id || a.aR(X.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  broadcast_channel_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  broadcast_channel_avatar: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_BroadcastChannelLive_Notification";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.thumbnail_upload_token || a.aR(D.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  thumbnail_upload_token: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  thumbnail_broadcast_session_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  thumbnail_data: {
                    n: 3,
                    br: a.FE.readBytes,
                    bw: a.Xc.writeBytes,
                  },
                  thumbnail_width: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  thumbnail_height: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SendThumbnailToRelay_Notification";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.broadcast_upload_id || a.aR(x.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  broadcast_upload_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  upload_result: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_NotifyBroadcastUploadStop_Notification";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.broadcaster_steamid || a.aR(N.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(N.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_ViewerBroadcastInvite_Notification";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.broadcast_id || a.aR(G.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  broadcast_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.steamid || a.aR(q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  broadcast_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  client_ip: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  client_cell: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatInfo_Request";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.chat_id || a.aR(L.M()),
            s.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  chat_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  view_url_template: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  flair_group_ids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatInfo_Response";
        }
      }
      class V extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.chat_id || a.aR(V.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  chat_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  message: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  instance_id: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  language: {
                    n: 4,
                    d: 0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  country_code: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(V.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Request";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.persona_name || a.aR(H.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  persona_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  in_game: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  result: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  cooldown_time_seconds: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_PostChatMessage_Response";
        }
      }
      class Q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.chat_id || a.aR(Q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  chat_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  flair: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_UpdateChatMessageFlair_Request";
        }
      }
      class $ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.result || a.aR($.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  result: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  chat_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  flair: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_UpdateChatMessageFlair_Response";
        }
      }
      class K extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.chat_id || a.aR(K.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  chat_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  muted: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(K.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Request";
        }
      }
      class Y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_MuteBroadcastChatUser_Response";
        }
      }
      class J extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.chat_id || a.aR(J.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  chat_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Request";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_RemoveUserChatText_Response";
        }
      }
      class ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.chat_id || a.aR(ee.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  chat_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  user_steamid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readFixed64String,
                    pbr: a.FE.readPackedFixed64String,
                    bw: a.Xc.writeRepeatedFixed64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = a.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Request";
        }
      }
      class re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.persona_names || a.aR(re.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { persona_names: { n: 1, c: te, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Response";
        }
      }
      class te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.steam_id || a.aR(te.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  steam_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  persona: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
        }
      }
      class ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || a.aR(ie.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  broadcast_session_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  first_segment: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  num_segments: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  clip_description: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBuildClip_Request";
        }
      }
      class ae extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.broadcast_clip_id || a.aR(ae.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_StartBuildClip_Response";
        }
      }
      class ne extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.broadcast_clip_id || a.aR(ne.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBuildClipStatus_Request";
        }
      }
      class se extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBuildClipStatus_Response";
        }
      }
      class oe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.broadcast_clip_id || a.aR(oe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  start_time: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  end_time: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  video_description: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetClipDetails_Request";
        }
      }
      class le extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetClipDetails_Response";
        }
      }
      class ce extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.broadcast_clip_id || a.aR(ce.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetClipDetails_Request";
        }
      }
      class ue extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.broadcast_clip_id || a.aR(ue.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  video_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  channel_id: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  app_id: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  accountid_broadcaster: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  accountid_clipmaker: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  video_description: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  start_time: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  length_milliseconds: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  thumbnail_path: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = a.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetClipDetails_Response";
        }
      }
      class me extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.broadcast_permission || a.aR(me.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  broadcast_permission: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  update_token: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  broadcast_delay: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  app_id: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  required_app_id: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  broadcast_chat_permission: {
                    n: 6,
                    d: o.k_EBroadcastChatPermissionPublic,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  broadcast_buffer: {
                    n: 7,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  steamid: {
                    n: 8,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  chat_rate_limit: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  enable_replay: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  is_partner_chat_only: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  wordban_list: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetRTMPInfo_Request";
        }
      }
      class de extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new de();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_SetRTMPInfo_Response";
        }
      }
      class Be extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.ip || a.aR(Be.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  ip: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  steamid: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = a.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Be.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetRTMPInfo_Request";
        }
      }
      class _e extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.broadcast_permission || a.aR(_e.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  broadcast_permission: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  rtmp_host: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  rtmp_token: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  broadcast_delay: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  app_id: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  required_app_id: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  broadcast_chat_permission: {
                    n: 7,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  broadcast_buffer: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  steamid: {
                    n: 9,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  chat_rate_limit: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  enable_replay: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  is_partner_chat_only: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  wordban_list: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = a.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_e.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetRTMPInfo_Response";
        }
      }
      class ye extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.row_limit || a.aR(ye.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  row_limit: {
                    n: 1,
                    d: 100,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  start_time: {
                    n: 2,
                    d: 0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  upload_id: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  steamid: {
                    n: 4,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  session_id: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = a.Bh(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ye.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Request";
        }
      }
      class be extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.upload_stats || a.aR(be.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: { upload_stats: { n: 1, c: pe, r: !0, q: !0 } },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = a.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(be.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Response";
        }
      }
      class pe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.upload_result || a.aR(pe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  upload_result: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_stopped: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  seconds_uploaded: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  max_viewers: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  resolution_x: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  resolution_y: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  avg_bandwidth: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  total_bytes: {
                    n: 8,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  app_id: { n: 9, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  total_unique_viewers: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  total_seconds_watched: {
                    n: 11,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  time_started: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  upload_id: {
                    n: 13,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  local_address: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  remote_address: {
                    n: 15,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  frames_per_second: {
                    n: 16,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  num_representations: {
                    n: 17,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  app_name: {
                    n: 18,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  is_replay: { n: 19, br: a.FE.readBool, bw: a.Xc.writeBool },
                  session_id: {
                    n: 20,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = a.Bh(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(pe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
        }
      }
      class ge extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.upload_id || a.aR(ge.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  upload_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = a.Bh(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ge.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Request";
        }
      }
      class we extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.viewer_stats || a.aR(we.M()),
            s.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  viewer_stats: { n: 1, c: fe, r: !0, q: !0 },
                  country_stats: { n: 2, c: Fe, r: !0, q: !0 },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = a.Bh(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(we.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response";
        }
      }
      class fe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.time || a.aR(fe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  time: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  num_viewers: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = a.Bh(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(fe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
        }
      }
      class Fe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.country_code || a.aR(Fe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  country_code: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  num_viewers: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = a.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Fe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
        }
      }
      class ze extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.webrtc_session_id || a.aR(ze.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  webrtc_session_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  started: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  offer: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  resolution_x: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  resolution_y: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  fps: { n: 6, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = a.Bh(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ze.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStartResult_Request";
        }
      }
      class Se extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStartResult_Response";
        }
      }
      class Me extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.webrtc_session_id || a.aR(Me.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  webrtc_session_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = a.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStopped_Request";
        }
      }
      class Re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Re();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStopped_Response";
        }
      }
      class he extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.broadcaster_steamid || a.aR(he.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  answer: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = a.Bh(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(he.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Request";
        }
      }
      class Ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Ee();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Response";
        }
      }
      class Te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.sdp_mid || a.aR(Te.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  sdp_mid: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  sdp_mline_index: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  candidate: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = a.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTC_Candidate";
        }
      }
      class We extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.webrtc_session_id || a.aR(We.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  webrtc_session_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  candidate: { n: 2, c: Te },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = a.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(We.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddHostCandidate_Request";
        }
      }
      class ve extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ve();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddHostCandidate_Response";
        }
      }
      class Ce extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.broadcaster_steamid || a.aR(Ce.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  candidate: { n: 3, c: Te },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = a.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Request";
        }
      }
      class Oe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Oe();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Response";
        }
      }
      class ke extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.broadcaster_steamid || a.aR(ke.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  broadcaster_steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  candidate_generation: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = a.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ke.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCGetHostCandidates_Request";
        }
      }
      class je extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.candidate_generation || a.aR(je.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  candidate_generation: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  candidates: { n: 2, c: Te, r: !0, q: !0 },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = a.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(je.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCGetHostCandidates_Response";
        }
      }
      class Ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.broadcast_session_id || a.aR(Ie.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = a.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCNeedTURNServer_Notification";
        }
      }
      class Ue extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.cellid || a.aR(Ue.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  cellid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = a.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCLookupTURNServer_Request";
        }
      }
      class Pe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.turn_server || a.aR(Pe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  turn_server: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = a.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Pe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCLookupTURNServer_Response";
        }
      }
      class Ae extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.broadcast_session_id || a.aR(Ae.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  turn_server: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = a.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCHaveTURNServer_Notification";
        }
      }
      class Xe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.broadcast_session_id || a.aR(Xe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  viewer_steamid: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  viewer_token: {
                    n: 4,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = a.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCStart_Notification";
        }
      }
      class De extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.broadcast_session_id || a.aR(De.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  answer: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = a.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(De.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCSetAnswer_Notification";
        }
      }
      class xe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.broadcast_session_id || a.aR(xe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  broadcast_session_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  webrtc_session_id: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  candidate: { n: 3, c: Te },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = a.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CBroadcast_WebRTCAddViewerCandidate_Notification";
        }
      }
      !(function (e) {
        (e.BeginBroadcastSession = function (e, r) {
          return e.SendMsg(
            "Broadcast.BeginBroadcastSession#1",
            (0, n.MD)(y, r),
            b,
            { ePrivilege: 1 },
          );
        }),
          (e.EndBroadcastSession = function (e, r) {
            return e.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, n.MD)(p, r),
              g,
              { ePrivilege: 1 },
            );
          }),
          (e.StartBroadcastUpload = function (e, r) {
            return e.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, n.MD)(w, r),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.NotifyBroadcastUploadStop = function (e, r) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, n.MD)(x, r),
              { ePrivilege: 1 },
            );
          }),
          (e.WatchBroadcast = function (e, r) {
            return e.SendMsg("Broadcast.WatchBroadcast#1", (0, n.MD)(h, r), E, {
              ePrivilege: 2,
            });
          }),
          (e.HeartbeatBroadcast = function (e, r) {
            return e.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, n.MD)(T, r),
              { ePrivilege: 2 },
            );
          }),
          (e.StopWatchingBroadcast = function (e, r) {
            return e.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, n.MD)(W, r),
              { ePrivilege: 2 },
            );
          }),
          (e.GetBroadcastStatus = function (e, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, n.MD)(z, r),
              S,
              { ePrivilege: 2 },
            );
          }),
          (e.GetBroadcastThumbnail = function (e, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, n.MD)(M, r),
              R,
              { ePrivilege: 2 },
            );
          }),
          (e.InviteToBroadcast = function (e, r) {
            return e.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, n.MD)(v, r),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.SendBroadcastStateToServer = function (e, r) {
            return e.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, n.MD)(O, r),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.NotifyBroadcastSessionHeartbeat = function (e, r) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, n.MD)(G, r),
              { ePrivilege: 1 },
            );
          }),
          (e.GetBroadcastChatInfo = function (e, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, n.MD)(q, r),
              L,
              { ePrivilege: 2 },
            );
          }),
          (e.PostChatMessage = function (e, r) {
            return e.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, n.MD)(V, r),
              H,
              { ePrivilege: 3 },
            );
          }),
          (e.UpdateChatMessageFlair = function (e, r) {
            return e.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, n.MD)(Q, r),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.MuteBroadcastChatUser = function (e, r) {
            return e.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, n.MD)(K, r),
              Y,
              { ePrivilege: 3 },
            );
          }),
          (e.RemoveUserChatText = function (e, r) {
            return e.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, n.MD)(J, r),
              Z,
              { ePrivilege: 3 },
            );
          }),
          (e.GetBroadcastChatUserNames = function (e, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, n.MD)(ee, r),
              re,
              { ePrivilege: 1 },
            );
          }),
          (e.StartBuildClip = function (e, r) {
            return e.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, n.MD)(ie, r),
              ae,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBuildClipStatus = function (e, r) {
            return e.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, n.MD)(ne, r),
              se,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetClipDetails = function (e, r) {
            return e.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, n.MD)(oe, r),
              le,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetClipDetails = function (e, r) {
            return e.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, n.MD)(ce, r),
              ue,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetRTMPInfo = function (e, r) {
            return e.SendMsg("Broadcast.SetRTMPInfo#1", (0, n.MD)(me, r), de, {
              ePrivilege: 1,
            });
          }),
          (e.GetRTMPInfo = function (e, r) {
            return e.SendMsg("Broadcast.GetRTMPInfo#1", (0, n.MD)(Be, r), _e, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.NotifyWebRTCHaveTURNServer = function (e, r) {
            return e.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, n.MD)(Ae, r),
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCStartResult = function (e, r) {
            return e.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, n.MD)(ze, r),
              Se,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCStopped = function (e, r) {
            return e.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, n.MD)(Me, r),
              Re,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCSetAnswer = function (e, r) {
            return e.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, n.MD)(he, r),
              Ee,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCLookupTURNServer = function (e, r) {
            return e.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, n.MD)(Ue, r),
              Pe,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCAddHostCandidate = function (e, r) {
            return e.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, n.MD)(We, r),
              ve,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCAddViewerCandidate = function (e, r) {
            return e.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, n.MD)(Ce, r),
              Oe,
              { ePrivilege: 1 },
            );
          }),
          (e.WebRTCGetHostCandidates = function (e, r) {
            return e.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, n.MD)(ke, r),
              je,
              { ePrivilege: 1 },
            );
          }),
          (e.GetBroadcastUploadStats = function (e, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, n.MD)(ye, r),
              be,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBroadcastViewerStats = function (e, r) {
            return e.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, n.MD)(ge, r),
              we,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(B || (B = {})),
        (function (e) {
          (e.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: j,
          }),
            (e.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: I,
            }),
            (e.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: F,
            }),
            (e.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: U,
            }),
            (e.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: P,
            }),
            (e.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: N,
            }),
            (e.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: A,
            }),
            (e.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: X,
            }),
            (e.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: D,
            }),
            (e.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: Ie,
            }),
            (e.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: Xe,
            }),
            (e.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: De,
            }),
            (e.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: xe,
            });
        })(_ || (_ = {}));
    },
    12623: (e, r, t) => {
      t.d(r, {
        AE: () => z,
        DI: () => me,
        Er: () => L,
        Fi: () => S,
        Op: () => de,
        Sz: () => w,
        Y3: () => x,
        n6: () => G,
        tj: () => R,
        ur: () => m,
      });
      var i = t(45878),
        a = t(43898),
        n = t(67328),
        s = t(76322);
      const o = i.Message;
      var l, c, u, m, d, B, _, y, b, p, g, w, f, F, z;
      !(function (e) {
        (e[(e.k_ECommentDeleteReason_Invalid = 0)] =
          "k_ECommentDeleteReason_Invalid"),
          (e[(e.k_ECommentDeleteReason_User = 1)] =
            "k_ECommentDeleteReason_User"),
          (e[(e.k_ECommentDeleteReason_ThreadOwner = 2)] =
            "k_ECommentDeleteReason_ThreadOwner"),
          (e[(e.k_ECommentDeleteReason_Moderator = 3)] =
            "k_ECommentDeleteReason_Moderator"),
          (e[(e.k_ECommentDeleteReason_Support = 4)] =
            "k_ECommentDeleteReason_Support"),
          (e[(e.k_ECommentDeleteReason_Spam = 5)] =
            "k_ECommentDeleteReason_Spam"),
          (e[(e.k_ECommentDeleteReason_AccountDeletion = 6)] =
            "k_ECommentDeleteReason_AccountDeletion");
      })(l || (l = {})),
        (function (e) {
          (e[(e.k_ECommunityWordFilterTypeInvalid = 0)] =
            "k_ECommunityWordFilterTypeInvalid"),
            (e[(e.k_ECommunityWordFilterTypeBadWords = 1)] =
              "k_ECommunityWordFilterTypeBadWords"),
            (e[(e.k_ECommunityWordFilterTypeBlacklistedURLs = 2)] =
              "k_ECommunityWordFilterTypeBlacklistedURLs"),
            (e[(e.k_ECommunityWordFilterTypeWhitelistedGreenlightURLs = 3)] =
              "k_ECommunityWordFilterTypeWhitelistedGreenlightURLs"),
            (e[(e.k_ECommunityWordFilterTypeBlacklistOverrideDomains = 4)] =
              "k_ECommunityWordFilterTypeBlacklistOverrideDomains"),
            (e[(e.k_ECommunityWordFilterTypeBadWordsInChina = 5)] =
              "k_ECommunityWordFilterTypeBadWordsInChina"),
            (e[(e.k_ECommunityWordFilterTypeCleanWords = 6)] =
              "k_ECommunityWordFilterTypeCleanWords"),
            (e[(e.k_ECommunityWordFilterTypeCleanWordsComplete = 7)] =
              "k_ECommunityWordFilterTypeCleanWordsComplete"),
            (e[(e.k_ECommunityWordFilterTypeBadNames = 8)] =
              "k_ECommunityWordFilterTypeBadNames");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_ECommunityWordFilterReason_Invalid = 0)] =
            "k_ECommunityWordFilterReason_Invalid"),
            (e[(e.k_ECommunityWordFilterReason_Phishing = 1)] =
              "k_ECommunityWordFilterReason_Phishing"),
            (e[(e.k_ECommunityWordFilterReason_Spam = 2)] =
              "k_ECommunityWordFilterReason_Spam"),
            (e[(e.k_ECommunityWordFilterReason_AdultContent = 3)] =
              "k_ECommunityWordFilterReason_AdultContent"),
            (e[(e.k_ECommunityWordFilterReason_Cheat = 4)] =
              "k_ECommunityWordFilterReason_Cheat"),
            (e[(e.k_ECommunityWordFilterReason_Referral = 5)] =
              "k_ECommunityWordFilterReason_Referral"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageStrongProfanity = 6)
            ] =
              "k_ECommunityWordFilterReason_InappropriateLanguageStrongProfanity"),
            (e[(e.k_ECommunityWordFilterReason_Piracy = 7)] =
              "k_ECommunityWordFilterReason_Piracy"),
            (e[(e.k_ECommunityWordFilterReason_Scam = 8)] =
              "k_ECommunityWordFilterReason_Scam"),
            (e[(e.k_ECommunityWordFilterReason_Malware = 9)] =
              "k_ECommunityWordFilterReason_Malware"),
            (e[(e.k_ECommunityWordFilterReason_FreeTLD = 10)] =
              "k_ECommunityWordFilterReason_FreeTLD"),
            (e[(e.k_ECommunityWordFilterReason_Harassment = 11)] =
              "k_ECommunityWordFilterReason_Harassment"),
            (e[(e.k_ECommunityWordFilterReason_URLShortener = 12)] =
              "k_ECommunityWordFilterReason_URLShortener"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageSlur = 13)
            ] = "k_ECommunityWordFilterReason_InappropriateLanguageSlur"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageOther = 14)
            ] = "k_ECommunityWordFilterReason_InappropriateLanguageOther"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageMildProfanity = 15)
            ] =
              "k_ECommunityWordFilterReason_InappropriateLanguageMildProfanity"),
            (e[
              (e.k_ECommunityWordFilterReason_InappropriateLanguageHateSpeech = 16)
            ] = "k_ECommunityWordFilterReason_InappropriateLanguageHateSpeech"),
            (e[(e.k_ECommunityWordFilterReason_Max = 17)] =
              "k_ECommunityWordFilterReason_Max");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EClanImageFileType_Unknown = 0)] =
            "k_EClanImageFileType_Unknown"),
            (e[(e.k_EClanImageFileType_JPEG = 1)] =
              "k_EClanImageFileType_JPEG"),
            (e[(e.k_EClanImageFileType_GIF = 2)] = "k_EClanImageFileType_GIF"),
            (e[(e.k_EClanImageFileType_PNG = 3)] = "k_EClanImageFileType_PNG"),
            (e[(e.k_EClanImageFileType_MP4 = 4)] = "k_EClanImageFileType_MP4"),
            (e[(e.k_EClanImageFileType_WEBM = 5)] =
              "k_EClanImageFileType_WEBM"),
            (e[(e.k_EClanImageFileType_VTT = 6)] = "k_EClanImageFileType_VTT"),
            (e[(e.k_EClanImageFileType_SRT = 7)] = "k_EClanImageFileType_SRT"),
            (e[(e.k_EClanImageFileType_SVG = 8)] = "k_EClanImageFileType_SVG"),
            (e[(e.k_EClanImageFileType_XML = 9)] = "k_EClanImageFileType_XML");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EClanImageGroup_None = 0)] = "k_EClanImageGroup_None"),
            (e[(e.k_EClanImageGroup_Announcement = 1)] =
              "k_EClanImageGroup_Announcement"),
            (e[(e.k_EClanImageGroup_Curator = 2)] =
              "k_EClanImageGroup_Curator");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EProfileCooldown_Unknown = 0)] =
            "k_EProfileCooldown_Unknown"),
            (e[(e.k_EProfileCooldown_PersonaName = 1)] =
              "k_EProfileCooldown_PersonaName"),
            (e[(e.k_EProfileCooldown_ProfileSummary = 2)] =
              "k_EProfileCooldown_ProfileSummary");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_EAvatarState_Unknown = 0)] = "k_EAvatarState_Unknown"),
            (e[(e.k_EAvatarState_Approved = 1)] = "k_EAvatarState_Approved"),
            (e[(e.k_EAvatarState_Denied = 2)] = "k_EAvatarState_Denied");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_EAbuseNotificationType_Invalid = 0)] =
            "k_EAbuseNotificationType_Invalid"),
            (e[(e.k_EAbuseNotificationType_TradeBan = 1)] =
              "k_EAbuseNotificationType_TradeBan"),
            (e[(e.k_EAbuseNotificationType_Profile = 2)] =
              "k_EAbuseNotificationType_Profile"),
            (e[(e.k_EAbuseNotificationType_Group = 3)] =
              "k_EAbuseNotificationType_Group"),
            (e[(e.k_EAbuseNotificationType_Comment = 4)] =
              "k_EAbuseNotificationType_Comment"),
            (e[(e.k_EAbuseNotificationType_Forum = 5)] =
              "k_EAbuseNotificationType_Forum");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_EModeratorAction_Resolve = 0)] =
            "k_EModeratorAction_Resolve"),
            (e[(e.k_EModeratorAction_Ban = 1)] = "k_EModeratorAction_Ban"),
            (e[(e.k_EModeratorAction_Unban = 2)] = "k_EModeratorAction_Unban"),
            (e[(e.k_EModeratorAction_Hide = 3)] = "k_EModeratorAction_Hide"),
            (e[(e.k_EModeratorAction_Unhide = 4)] =
              "k_EModeratorAction_Unhide"),
            (e[(e.k_EModeratorAction_Lock = 5)] = "k_EModeratorAction_Lock"),
            (e[(e.k_EModeratorAction_Delete = 6)] =
              "k_EModeratorAction_Delete"),
            (e[(e.k_EModeratorAction_Undelete = 7)] =
              "k_EModeratorAction_Undelete"),
            (e[(e.k_EModeratorAction_MassReset = 8)] =
              "k_EModeratorAction_MassReset"),
            (e[(e.k_EModeratorAction_Unlock = 9)] =
              "k_EModeratorAction_Unlock"),
            (e[(e.k_EModeratorAction_Warn = 10)] = "k_EModeratorAction_Warn"),
            (e[(e.k_EModeratorAction_Move = 11)] = "k_EModeratorAction_Move"),
            (e[(e.k_EModeratorAction_Classify = 12)] =
              "k_EModeratorAction_Classify"),
            (e[(e.k_EModeratorAction_Blur = 13)] = "k_EModeratorAction_Blur"),
            (e[(e.k_EModeratorAction_Unblur = 14)] =
              "k_EModeratorAction_Unblur");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_EActorAffiliation_Unknown = 0)] =
            "k_EActorAffiliation_Unknown"),
            (e[(e.k_EActorAffiliation_Valve = 1)] =
              "k_EActorAffiliation_Valve"),
            (e[(e.k_EActorAffiliation_Keywords = 2)] =
              "k_EActorAffiliation_Keywords"),
            (e[(e.k_EActorAffiliation_TaskUs = 3)] =
              "k_EActorAffiliation_TaskUs"),
            (e[(e.k_EActorAffiliation_Volunteer = 4)] =
              "k_EActorAffiliation_Volunteer");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_EAnswerActorRank_None = 0)] = "k_EAnswerActorRank_None"),
            (e[(e.k_EAnswerActorRank_Valve = 1)] = "k_EAnswerActorRank_Valve"),
            (e[(e.k_EAnswerActorRank_GlobalMod = 2)] =
              "k_EAnswerActorRank_GlobalMod"),
            (e[(e.k_EAnswerActorRank_Developer = 3)] =
              "k_EAnswerActorRank_Developer"),
            (e[(e.k_EAnswerActorRank_Moderator = 4)] =
              "k_EAnswerActorRank_Moderator"),
            (e[(e.k_EAnswerActorRank_OP = 5)] = "k_EAnswerActorRank_OP");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EPartnerEventDisplayLocation_Invalid = 0)] =
            "k_EPartnerEventDisplayLocation_Invalid"),
            (e[(e.k_EPartnerEventDisplayLocation_AppDetailsSpotlight = 1)] =
              "k_EPartnerEventDisplayLocation_AppDetailsSpotlight"),
            (e[(e.k_EPartnerEventDisplayLocation_LibraryOverview = 2)] =
              "k_EPartnerEventDisplayLocation_LibraryOverview"),
            (e[(e.k_EPartnerEventDisplayLocation_StoreAppPage = 3)] =
              "k_EPartnerEventDisplayLocation_StoreAppPage"),
            (e[(e.k_EPartnerEventDisplayLocation_EventScroller = 4)] =
              "k_EPartnerEventDisplayLocation_EventScroller"),
            (e[(e.k_EPartnerEventDisplayLocation_AppDetailsActivity = 5)] =
              "k_EPartnerEventDisplayLocation_AppDetailsActivity"),
            (e[(e.k_EPartnerEventDisplayLocation_CommunityHub = 6)] =
              "k_EPartnerEventDisplayLocation_CommunityHub"),
            (e[(e.k_EPartnerEventDisplayLocation_StoreFrontPage = 7)] =
              "k_EPartnerEventDisplayLocation_StoreFrontPage"),
            (e[(e.k_EPartnerEventDisplayLocation_NewsHub = 8)] =
              "k_EPartnerEventDisplayLocation_NewsHub"),
            (e[(e.k_EPartnerEventDisplayLocation_GamepadHome = 9)] =
              "k_EPartnerEventDisplayLocation_GamepadHome");
        })(w || (w = {})),
        (function (e) {
          (e[(e.k_EProfileModerationState_Unassigned = 0)] =
            "k_EProfileModerationState_Unassigned"),
            (e[(e.k_EProfileModerationState_Assigned = 1)] =
              "k_EProfileModerationState_Assigned"),
            (e[(e.k_EProfileModerationState_Escalated = 2)] =
              "k_EProfileModerationState_Escalated"),
            (e[(e.k_EProfileModerationState_Resolved = 3)] =
              "k_EProfileModerationState_Resolved");
        })(f || (f = {})),
        (function (e) {
          (e[(e.k_ECommentReportAction_Invalid = 0)] =
            "k_ECommentReportAction_Invalid"),
            (e[(e.k_ECommentReportAction_NoAction = 1)] =
              "k_ECommentReportAction_NoAction"),
            (e[(e.k_ECommentReportAction_Deleted = 2)] =
              "k_ECommentReportAction_Deleted"),
            (e[(e.k_ECommentReportAction_Hidden = 3)] =
              "k_ECommentReportAction_Hidden"),
            (e[(e.k_ECommentReportAction_ExternalDelete = 4)] =
              "k_ECommentReportAction_ExternalDelete"),
            (e[(e.k_ECommentReportAction_ThreadDeleted = 5)] =
              "k_ECommentReportAction_ThreadDeleted");
        })(F || (F = {}));
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appids || a.aR(S.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  language: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Request";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.apps || a.aR(M.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { apps: { n: 1, c: s.VJ, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Response";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || a.aR(R.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Request";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.appid || a.aR(h.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  appid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  token_lists: { n: 2, c: T, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.name || a.aR(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  name: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  value: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.language || a.aR(T.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  tokens: { n: 2, c: E, r: !0, q: !0 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.steamid || a.aR(W.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 5,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  start: { n: 6, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  count: { n: 7, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  upvoters: { n: 8, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  include_deleted: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  gidcomment: {
                    n: 10,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  time_oldest: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  oldest_first: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Request";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.gidcomment || a.aR(v.M()),
            o.initialize(this, e, 0, -1, [12], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  text: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  upvotes: { n: 5, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  hidden: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  hidden_by_user: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  deleted: { n: 8, br: a.FE.readBool, bw: a.Xc.writeBool },
                  ipaddress: { n: 9, c: s.j7 },
                  total_hidden: {
                    n: 10,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  upvoted_by_user: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  reactions: { n: 12, c: C, r: !0, q: !0 },
                  gidparentcomment: {
                    n: 13,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.reactionid || a.aR(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  reactionid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  count: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment_Reaction";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.comments || a.aR(O.M()),
            o.initialize(this, e, 0, -1, [1, 2, 9], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  comments: { n: 1, c: v, r: !0, q: !0 },
                  deleted_comments: { n: 2, c: v, r: !0, q: !0 },
                  steamid: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 4,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  start: { n: 5, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  count: { n: 6, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  total_count: {
                    n: 7,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  upvotes: { n: 8, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  upvoters: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  user_subscribed: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  user_upvoted: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  answer_commentid: {
                    n: 12,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  answer_actor: {
                    n: 13,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  answer_actor_rank: {
                    n: 14,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  can_post: { n: 15, br: a.FE.readBool, bw: a.Xc.writeBool },
                  comment_thread_type: {
                    n: 16,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  gidfeature: {
                    n: 17,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 18,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Response";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.steamid || a.aR(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  text: { n: 6, br: a.FE.readString, bw: a.Xc.writeString },
                  gidparentcomment: {
                    n: 7,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  suppress_notifications: {
                    n: 8,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  is_report: { n: 9, br: a.FE.readBool, bw: a.Xc.writeBool },
                  start_hidden: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(k.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Request";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.gidcomment || a.aR(j.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  count: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  upvotes: { n: 4, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Response";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || a.aR(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  undelete: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Request";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Response";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.commentthreadtype || a.aR(P.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  rate_up: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  suppress_notifications: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(P.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Request";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.gidcomment || a.aR(A.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  count: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  upvotes: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  has_upvoted: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Response";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.commentthreadtype || a.aR(X.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  max_results: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Request";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.commentthreadid || a.aR(D.M()),
            o.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  commentthreadid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  gidcomment: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  upvotes: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  has_upvoted: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  upvoter_accountids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Response";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.announcementid || a.aR(x.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  announcementid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  vote_up: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  clan_accountid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Request";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Response";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.announcementid || a.aR(G.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  announcementid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Request";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.voted_up || a.aR(q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  voted_up: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  voted_down: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Response";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.steamid || a.aR(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  filter_user_uploaded_only: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Request";
        }
      }
      class V extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.avatars || a.aR(V.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { avatars: { n: 1, c: H, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(V.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.avatar_sha1 || a.aR(H.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  avatar_sha1: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  user_uploaded: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  timestamp: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response_AvatarData";
        }
      }
      class Q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.priority || a.aR(Q.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  priority: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  appid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppPriority";
        }
      }
      class $ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.count || a.aR($.M()),
            o.initialize(this, e, 0, -1, [5, 6, 8], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  count: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  offset: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  rtime32_start_time: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  language_preference: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  filter_event_type: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  filter_to_appid: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  app_list: { n: 8, c: Q, r: !0, q: !0 },
                  count_after: {
                    n: 9,
                    d: 0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  count_before: {
                    n: 10,
                    d: 0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Request";
        }
      }
      class K extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.results || a.aR(K.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: { results: { n: 1, c: s.uV, r: !0, q: !0 } },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(K.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Response";
        }
      }
      class Y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.include_steam_blog || a.aR(Y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  include_steam_blog: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  filter_to_played_within_days: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  include_only_game_updates: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Request";
        }
      }
      class J extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.clanid || a.aR(J.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  clanid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  appid: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  possible_takeover: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  rtime32_last_modified: {
                    n: 6,
                    d: 0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  user_app_priority: {
                    n: 7,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventResult";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.results || a.aR(Z.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { results: { n: 1, c: J, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = a.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Response";
        }
      }
      class ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
        }
      }
      class re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new re();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
        }
      }
      class te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.appid || a.aR(te.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  user_app_priority: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsAppPriority";
        }
      }
      class ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ie();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
        }
      }
      class ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.priorities || a.aR(ae.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: { priorities: { n: 1, c: te, r: !0, q: !0 } },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
        }
      }
      class ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || a.aR(ne.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
        }
      }
      class se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
        }
      }
      class oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.appid || a.aR(oe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Request";
        }
      }
      class le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Response";
        }
      }
      class ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.appid || a.aR(ce.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Request";
        }
      }
      class ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ue();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Response";
        }
      }
      class me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.markings || a.aR(me.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: { markings: { n: 1, c: de, r: !0, q: !0 } },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request";
        }
      }
      class de extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.clanid || a.aR(de.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  clanid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  display_location: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  mark_shown: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  mark_read: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = a.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(de.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
        }
      }
      class Be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Response";
        }
      }
      class _e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.event_gids || a.aR(_e.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  event_gids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readFixed64String,
                    pbr: a.FE.readPackedFixed64String,
                    bw: a.Xc.writeRepeatedFixed64String,
                  },
                  include_read_events_only: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = a.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_e.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Request";
        }
      }
      class ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.events || a.aR(ye.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: { events: { n: 1, c: be, r: !0, q: !0 } },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = a.Bh(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ye.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response";
        }
      }
      class be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.event_gid || a.aR(be.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  event_gid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  last_shown_time: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_read_time: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  clan_account_id: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = a.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(be.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
        }
      }
      !(function (e) {
        (e.GetApps = function (e, r) {
          return e.SendMsg("Community.GetApps#1", (0, n.MD)(S, r), M, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetAppRichPresenceLocalization = function (e, r) {
            return e.SendMsg(
              "Community.GetAppRichPresenceLocalization#1",
              (0, n.MD)(R, r),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.GetCommentThread = function (e, r) {
            return e.SendMsg(
              "Community.GetCommentThread#1",
              (0, n.MD)(W, r),
              O,
              { ePrivilege: 2 },
            );
          }),
          (e.PostCommentToThread = function (e, r) {
            return e.SendMsg(
              "Community.PostCommentToThread#1",
              (0, n.MD)(k, r),
              j,
              { ePrivilege: 3 },
            );
          }),
          (e.DeleteCommentFromThread = function (e, r) {
            return e.SendMsg(
              "Community.DeleteCommentFromThread#1",
              (0, n.MD)(I, r),
              U,
              { ePrivilege: 1 },
            );
          }),
          (e.RateCommentThread = function (e, r) {
            return e.SendMsg(
              "Community.RateCommentThread#1",
              (0, n.MD)(P, r),
              A,
              { ePrivilege: 3 },
            );
          }),
          (e.GetCommentThreadRatings = function (e, r) {
            return e.SendMsg(
              "Community.GetCommentThreadRatings#1",
              (0, n.MD)(X, r),
              D,
              { ePrivilege: 2 },
            );
          }),
          (e.RateClanAnnouncement = function (e, r) {
            return e.SendMsg(
              "Community.RateClanAnnouncement#1",
              (0, n.MD)(x, r),
              N,
              { ePrivilege: 3 },
            );
          }),
          (e.GetClanAnnouncementVoteForUser = function (e, r) {
            return e.SendMsg(
              "Community.GetClanAnnouncementVoteForUser#1",
              (0, n.MD)(G, r),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarHistory = function (e, r) {
            return e.SendMsg(
              "Community.GetAvatarHistory#1",
              (0, n.MD)(L, r),
              V,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventNews = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventNews#1",
              (0, n.MD)($, r),
              K,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBestEventsForUser = function (e, r) {
            return e.SendMsg(
              "Community.GetBestEventsForUser#1",
              (0, n.MD)(Y, r),
              Z,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.MarkPartnerEventsForUser = function (e, r) {
            return e.SendMsg(
              "Community.MarkPartnerEventsForUser#1",
              (0, n.MD)(me, r),
              Be,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventViewStatus = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventViewStatus#1",
              (0, n.MD)(_e, r),
              ye,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowMoreForApp = function (e, r) {
            return e.SendMsg(
              "Community.PartnerEventsShowMoreForApp#1",
              (0, n.MD)(oe, r),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowLessForApp = function (e, r) {
            return e.SendMsg(
              "Community.PartnerEventsShowLessForApp#1",
              (0, n.MD)(ce, r),
              ue,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.ClearUserPartnerEventsAppPriorities#1",
              (0, n.MD)(ee, r),
              re,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventsAppPriorities#1",
              (0, n.MD)(ie, r),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearSinglePartnerEventsAppPriority = function (e, r) {
            return e.SendMsg(
              "Community.ClearSinglePartnerEventsAppPriority#1",
              (0, n.MD)(ne, r),
              se,
              { ePrivilege: 1 },
            );
          });
      })(z || (z = {}));
    },
    28355: (e, r, t) => {
      t.d(r, { d2: () => o });
      var i = t(45878),
        a = t(43898),
        n = t(67328);
      const s = i.Message;
      var o, l, c, u, m, d, B;
      !(function (e) {
        (e[(e.k_EProductActionNoAction = 0)] = "k_EProductActionNoAction"),
          (e[(e.k_EProductActionWatchBroadcast = 1)] =
            "k_EProductActionWatchBroadcast"),
          (e[(e.k_EProductActionHideBroadcast = 2)] =
            "k_EProductActionHideBroadcast"),
          (e[(e.k_EProductActionShowBroadcast = 3)] =
            "k_EProductActionShowBroadcast"),
          (e[(e.k_EProductActionShowBroadcastChat = 4)] =
            "k_EProductActionShowBroadcastChat"),
          (e[(e.k_EProductActionHideBroadcastChat = 5)] =
            "k_EProductActionHideBroadcastChat"),
          (e[(e.k_EProductActionPopoutChat = 6)] =
            "k_EProductActionPopoutChat"),
          (e[(e.k_EProductActionCloseBroadcastSmallPopup = 7)] =
            "k_EProductActionCloseBroadcastSmallPopup"),
          (e[(e.k_EProductActionUnmuteBroadcast = 8)] =
            "k_EProductActionUnmuteBroadcast"),
          (e[(e.k_EProductActionOpenBroadcastWatchPage = 9)] =
            "k_EProductActionOpenBroadcastWatchPage"),
          (e[(e.k_EProductActionSendChat = 10)] = "k_EProductActionSendChat"),
          (e[(e.k_EProductActionAddsAnEmoticonToChat = 11)] =
            "k_EProductActionAddsAnEmoticonToChat"),
          (e[(e.k_EProductActionShowDailyDeals = 12)] =
            "k_EProductActionShowDailyDeals"),
          (e[(e.k_EProductActionShowInteractiveRecommendDeals = 13)] =
            "k_EProductActionShowInteractiveRecommendDeals"),
          (e[(e.k_EProductActionShowWishlistDeals = 14)] =
            "k_EProductActionShowWishlistDeals"),
          (e[(e.k_EProductActionShowDLCDeals = 15)] =
            "k_EProductActionShowDLCDeals"),
          (e[(e.k_EProductActionChangeNewsHubFilters = 16)] =
            "k_EProductActionChangeNewsHubFilters"),
          (e[(e.k_EProductActionNewsHubScrollPast = 17)] =
            "k_EProductActionNewsHubScrollPast"),
          (e[(e.k_EProductActionNewsHubScrollFuture = 18)] =
            "k_EProductActionNewsHubScrollFuture"),
          (e[(e.k_EProductActionNewsHubAppInteraction = 19)] =
            "k_EProductActionNewsHubAppInteraction");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_EProductViewActionVisit = 0)] = "k_EProductViewActionVisit"),
            (e[(e.k_EProductViewActionAddToWishlist = 1)] =
              "k_EProductViewActionAddToWishlist"),
            (e[(e.k_EProductViewActionIgnoreNotInterested = 2)] =
              "k_EProductViewActionIgnoreNotInterested"),
            (e[(e.k_EProductViewActionAddToCart = 3)] =
              "k_EProductViewActionAddToCart");
        })(l || (l = {})),
        (function (e) {
          (e[
            (e.k_EProductImpressionFromClientType_FriendInGameNotification = 1)
          ] = "k_EProductImpressionFromClientType_FriendInGameNotification"),
            (e[
              (e.k_EProductImpressionFromClientType_FriendInGameNotification_FirstTimeSession = 2)
            ] =
              "k_EProductImpressionFromClientType_FriendInGameNotification_FirstTimeSession");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_ETrackedEmail_WishlistEmail = 1)] =
            "k_ETrackedEmail_WishlistEmail"),
            (e[(e.k_ETrackedEmail_RecommendationEmailCampaign = 2)] =
              "k_ETrackedEmail_RecommendationEmailCampaign");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EUnifiedProductInteractionStoreItemType_Invalid = 0)] =
            "k_EUnifiedProductInteractionStoreItemType_Invalid"),
            (e[(e.k_EUnifiedProductInteractionStoreItemType_AppPage = 1)] =
              "k_EUnifiedProductInteractionStoreItemType_AppPage"),
            (e[(e.k_EUnifiedProductInteractionStoreItemType_PackagePage = 2)] =
              "k_EUnifiedProductInteractionStoreItemType_PackagePage"),
            (e[
              (e.k_EUnifiedProductInteractionStoreItemType_AnnouncementPage = 3)
            ] = "k_EUnifiedProductInteractionStoreItemType_AnnouncementPage"),
            (e[(e.k_EUnifiedProductInteractionStoreItemType_SalePage = 4)] =
              "k_EUnifiedProductInteractionStoreItemType_SalePage"),
            (e[(e.k_EUnifiedProductInteractionStoreItemType_FeaturePage = 5)] =
              "k_EUnifiedProductInteractionStoreItemType_FeaturePage");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EUnifedProductInteractionActions_Invalid = -1)] =
            "k_EUnifedProductInteractionActions_Invalid"),
            (e[(e.k_EUnifedProductInteractionActions_Visit = 0)] =
              "k_EUnifedProductInteractionActions_Visit"),
            (e[(e.k_EUnifedProductInteractionActions_Wishlist = 1)] =
              "k_EUnifedProductInteractionActions_Wishlist"),
            (e[(e.k_EUnifedProductInteractionActions_IgnoreNotInterested = 2)] =
              "k_EUnifedProductInteractionActions_IgnoreNotInterested"),
            (e[(e.k_EUnifedProductInteractionActions_AddToCart = 3)] =
              "k_EUnifedProductInteractionActions_AddToCart");
        })(d || (d = {}));
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.impressions || a.aR(_.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { impressions: { n: 1, c: y, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CProductImpressionsFromClient_Notification";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.type || a.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  num_impressions: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CProductImpressionsFromClient_Notification_Impression";
        }
      }
      !(function (e) {
        e.ReportProductImpressionsFromClient = function (e, r) {
          return e.SendNotification(
            "ExperimentService.ReportProductImpressionsFromClient#1",
            (0, n.MD)(_, r),
            { ePrivilege: 1 },
          );
        };
      })(B || (B = {}));
    },
    87416: (e, r, t) => {
      t.d(r, { I3: () => c, yl: () => o });
      var i = t(45878),
        a = t(43898),
        n = t(67328);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.packageid || a.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  packageid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.inventory_available || a.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  inventory_available: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  high_pending_orders: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
        }
      }
      var c;
      !(function (e) {
        e.CheckInventoryAvailableByPackage = function (e, r) {
          return e.SendMsg(
            "PhysicalGoods.CheckInventoryAvailableByPackage#1",
            (0, n.MD)(o, r),
            l,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        };
      })(c || (c = {}));
    },
    94738: (e, r, t) => {
      t.d(r, {
        $_: () => ar,
        AP: () => Er,
        DN: () => L,
        Dq: () => Z,
        Jj: () => l,
        M4: () => Te,
        N$: () => $,
        No: () => Cr,
        OZ: () => Me,
        Oz: () => Or,
        RR: () => ie,
        Sv: () => ge,
        XF: () => ce,
        XJ: () => m,
        bM: () => dr,
        cy: () => me,
        jZ: () => Be,
        kv: () => y,
        lk: () => p,
        n8: () => hr,
        nZ: () => Ue,
        oh: () => z,
        pp: () => v,
        tf: () => er,
      });
      var i = t(45878),
        a = t(43898),
        n = t(67328),
        s = t(76322);
      const o = i.Message;
      var l, c, u, m, d, B, _, y, b, p, g;
      !(function (e) {
        (e[(e.k_EUserBadgeInvalid = 0)] = "k_EUserBadgeInvalid"),
          (e[(e.k_EUserBadgeYearsOfService = 1)] =
            "k_EUserBadgeYearsOfService"),
          (e[(e.k_EUserBadgeCommunity = 2)] = "k_EUserBadgeCommunity"),
          (e[(e.k_EUserBadgePortal2PotatoARG = 3)] =
            "k_EUserBadgePortal2PotatoARG"),
          (e[(e.k_EUserBadgeTreasureHunt = 4)] = "k_EUserBadgeTreasureHunt"),
          (e[(e.k_EUserBadgeSummerSale2011 = 5)] =
            "k_EUserBadgeSummerSale2011"),
          (e[(e.k_EUserBadgeWinterSale2011 = 6)] =
            "k_EUserBadgeWinterSale2011"),
          (e[(e.k_EUserBadgeSummerSale2012 = 7)] =
            "k_EUserBadgeSummerSale2012"),
          (e[(e.k_EUserBadgeWinterSale2012 = 8)] =
            "k_EUserBadgeWinterSale2012"),
          (e[(e.k_EUserBadgeCommunityTranslator = 9)] =
            "k_EUserBadgeCommunityTranslator"),
          (e[(e.k_EUserBadgeCommunityModerator = 10)] =
            "k_EUserBadgeCommunityModerator"),
          (e[(e.k_EUserBadgeValveEmployee = 11)] = "k_EUserBadgeValveEmployee"),
          (e[(e.k_EUserBadgeGameDeveloper = 12)] = "k_EUserBadgeGameDeveloper"),
          (e[(e.k_EUserBadgeGameCollector = 13)] = "k_EUserBadgeGameCollector"),
          (e[(e.k_EUserBadgeTradingCardBetaParticipant = 14)] =
            "k_EUserBadgeTradingCardBetaParticipant"),
          (e[(e.k_EUserBadgeSteamBoxBeta = 15)] = "k_EUserBadgeSteamBoxBeta"),
          (e[(e.k_EUserBadgeSummer2014RedTeam = 16)] =
            "k_EUserBadgeSummer2014RedTeam"),
          (e[(e.k_EUserBadgeSummer2014BlueTeam = 17)] =
            "k_EUserBadgeSummer2014BlueTeam"),
          (e[(e.k_EUserBadgeSummer2014PinkTeam = 18)] =
            "k_EUserBadgeSummer2014PinkTeam"),
          (e[(e.k_EUserBadgeSummer2014GreenTeam = 19)] =
            "k_EUserBadgeSummer2014GreenTeam"),
          (e[(e.k_EUserBadgeSummer2014PurpleTeam = 20)] =
            "k_EUserBadgeSummer2014PurpleTeam"),
          (e[(e.k_EUserBadgeAuction2014 = 21)] = "k_EUserBadgeAuction2014"),
          (e[(e.k_EUserBadgeGoldenProfile2014 = 22)] =
            "k_EUserBadgeGoldenProfile2014"),
          (e[(e.k_EUserBadgeTowerAttackMiniGame = 23)] =
            "k_EUserBadgeTowerAttackMiniGame"),
          (e[(e.k_EUserBadgeWinter2015ARG_RedHerring = 24)] =
            "k_EUserBadgeWinter2015ARG_RedHerring"),
          (e[(e.k_EUserBadgeSteamAwards2016Nominations = 25)] =
            "k_EUserBadgeSteamAwards2016Nominations"),
          (e[(e.k_EUserBadgeStickerCompletionist2017 = 26)] =
            "k_EUserBadgeStickerCompletionist2017"),
          (e[(e.k_EUserBadgeSteamAwards2017Nominations = 27)] =
            "k_EUserBadgeSteamAwards2017Nominations"),
          (e[(e.k_EUserBadgeSpringCleaning2018 = 28)] =
            "k_EUserBadgeSpringCleaning2018"),
          (e[(e.k_EUserBadgeSalien = 29)] = "k_EUserBadgeSalien"),
          (e[(e.k_EUserBadgeRetiredModerator = 30)] =
            "k_EUserBadgeRetiredModerator"),
          (e[(e.k_EUserBadgeSteamAwards2018Nominations = 31)] =
            "k_EUserBadgeSteamAwards2018Nominations"),
          (e[(e.k_EUserBadgeValveModerator = 32)] =
            "k_EUserBadgeValveModerator"),
          (e[(e.k_EUserBadgeWinterSale2018 = 33)] =
            "k_EUserBadgeWinterSale2018"),
          (e[(e.k_EUserBadgeLunarNewYearSale2019 = 34)] =
            "k_EUserBadgeLunarNewYearSale2019"),
          (e[(e.k_EUserBadgeLunarNewYearSale2019GoldenProfile = 35)] =
            "k_EUserBadgeLunarNewYearSale2019GoldenProfile"),
          (e[(e.k_EUserBadgeSpringCleaning2019 = 36)] =
            "k_EUserBadgeSpringCleaning2019"),
          (e[(e.k_EUserBadgeSummerSale2019 = 37)] =
            "k_EUserBadgeSummerSale2019"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamHare = 38)] =
            "k_EUserBadgeSummerSale2019_TeamHare"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamTortoise = 39)] =
            "k_EUserBadgeSummerSale2019_TeamTortoise"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamCorgi = 40)] =
            "k_EUserBadgeSummerSale2019_TeamCorgi"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamCockatiel = 41)] =
            "k_EUserBadgeSummerSale2019_TeamCockatiel"),
          (e[(e.k_EUserBadgeSummerSale2019_TeamPig = 42)] =
            "k_EUserBadgeSummerSale2019_TeamPig"),
          (e[(e.k_EUserBadgeSteamAwards2019Nominations = 43)] =
            "k_EUserBadgeSteamAwards2019Nominations"),
          (e[(e.k_EUserBadgeWinterSaleEvent2019 = 44)] =
            "k_EUserBadgeWinterSaleEvent2019"),
          (e[(e.k_EUserBadgeWinterSale2019Steamville = 45)] =
            "k_EUserBadgeWinterSale2019Steamville"),
          (e[(e.k_EUserBadgeLunarNewYearSale2020 = 46)] =
            "k_EUserBadgeLunarNewYearSale2020"),
          (e[(e.k_EUserBadgeSpringCleaning2020 = 47)] =
            "k_EUserBadgeSpringCleaning2020"),
          (e[(e.k_EUserBadgeAwardsCommunityContributor = 48)] =
            "k_EUserBadgeAwardsCommunityContributor"),
          (e[(e.k_EUserBadgeAwardsCommunityPatron = 49)] =
            "k_EUserBadgeAwardsCommunityPatron"),
          (e[(e.k_EUserBadgeSteamAwards2020Nominations = 50)] =
            "k_EUserBadgeSteamAwards2020Nominations"),
          (e[(e.k_EUserBadgeSummerSale2021_MaskedAvenger = 51)] =
            "k_EUserBadgeSummerSale2021_MaskedAvenger"),
          (e[(e.k_EUserBadgeSummerSale2021_TrailblazingExplorer = 52)] =
            "k_EUserBadgeSummerSale2021_TrailblazingExplorer"),
          (e[(e.k_EUserBadgeSummerSale2021_GorillaScientist = 53)] =
            "k_EUserBadgeSummerSale2021_GorillaScientist"),
          (e[(e.k_EUserBadgeSummerSale2021_ParanormalProfessor = 54)] =
            "k_EUserBadgeSummerSale2021_ParanormalProfessor"),
          (e[(e.k_EUserBadgeSummerSale2021_GhostDetective = 55)] =
            "k_EUserBadgeSummerSale2021_GhostDetective"),
          (e[(e.k_EUserBadgeSteamAwards2021Nominations = 56)] =
            "k_EUserBadgeSteamAwards2021Nominations"),
          (e[(e.k_EUserBadgeSteamAwards2021NominationsClassic = 57)] =
            "k_EUserBadgeSteamAwards2021NominationsClassic"),
          (e[(e.k_EUserBadgeRetiredCommunityTranslator = 58)] =
            "k_EUserBadgeRetiredCommunityTranslator"),
          (e[(e.k_EUserBadgeRacingSale2022 = 59)] =
            "k_EUserBadgeRacingSale2022"),
          (e[(e.k_EUserBadgeNextFestSummer2022 = 60)] =
            "k_EUserBadgeNextFestSummer2022"),
          (e[(e.k_EUserBadgeSummerMiniGame2022 = 61)] =
            "k_EUserBadgeSummerMiniGame2022"),
          (e[(e.k_EUserBadgeNextFestAutumn2022 = 62)] =
            "k_EUserBadgeNextFestAutumn2022"),
          (e[(e.k_EUserBadgeSteamAwards2022Nominations = 63)] =
            "k_EUserBadgeSteamAwards2022Nominations"),
          (e[(e.k_EUserBadgeReplay2022 = 64)] = "k_EUserBadgeReplay2022"),
          (e[(e.k_EUserBadgeSteamAwards2023Nominations = 65)] =
            "k_EUserBadgeSteamAwards2023Nominations");
      })(l || (l = {})),
        (function (e) {
          (e[(e.k_EAuctionBadgeLevel_Invalid = 0)] =
            "k_EAuctionBadgeLevel_Invalid"),
            (e[(e.k_EAuctionBadgeLevel_MadeGoo = 1)] =
              "k_EAuctionBadgeLevel_MadeGoo"),
            (e[(e.k_EAuctionBadgeLevel_BidInAuction = 2)] =
              "k_EAuctionBadgeLevel_BidInAuction"),
            (e[(e.k_EAuctionBadgeLevel_WonInAuction = 3)] =
              "k_EAuctionBadgeLevel_WonInAuction");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EProfileCustomizationStyleDefault = 0)] =
            "k_EProfileCustomizationStyleDefault"),
            (e[(e.k_EProfileCustomizationStyleSelected = 1)] =
              "k_EProfileCustomizationStyleSelected"),
            (e[(e.k_EProfileCustomizationStyleRarest = 2)] =
              "k_EProfileCustomizationStyleRarest"),
            (e[(e.k_EProfileCustomizationStyleMostRecent = 3)] =
              "k_EProfileCustomizationStyleMostRecent"),
            (e[(e.k_EProfileCustomizationStyleRandom = 4)] =
              "k_EProfileCustomizationStyleRandom"),
            (e[(e.k_EProfileCustomizationStyleHighestRated = 5)] =
              "k_EProfileCustomizationStyleHighestRated");
        })(u || (u = {})),
        (function (e) {
          e[(e.k_EProfileItemEquippedFlag_FullScreen = 1)] =
            "k_EProfileItemEquippedFlag_FullScreen";
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EProfileColorStyle_Invalid = 0)] =
            "k_EProfileColorStyle_Invalid"),
            (e[(e.k_EProfileColorStyle_BackgroundGradient_Left = 1)] =
              "k_EProfileColorStyle_BackgroundGradient_Left"),
            (e[(e.k_EProfileColorStyle_BackgroundGradient_Right = 2)] =
              "k_EProfileColorStyle_BackgroundGradient_Right"),
            (e[(e.k_EProfileColorStyle_BackgroundGradient_Center = 3)] =
              "k_EProfileColorStyle_BackgroundGradient_Center"),
            (e[(e.k_EProfileColorStyle_ShowcaseGradient_Left = 4)] =
              "k_EProfileColorStyle_ShowcaseGradient_Left"),
            (e[(e.k_EProfileColorStyle_ShowcaseGradient_Right = 5)] =
              "k_EProfileColorStyle_ShowcaseGradient_Right");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EAgreementType_Invalid = -1)] = "k_EAgreementType_Invalid"),
            (e[(e.k_EAgreementType_GlobalSSA = 0)] =
              "k_EAgreementType_GlobalSSA"),
            (e[(e.k_EAgreementType_ChinaSSA = 1)] =
              "k_EAgreementType_ChinaSSA");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_ENotificationSettingNotifyUseDefault = 0)] =
            "k_ENotificationSettingNotifyUseDefault"),
            (e[(e.k_ENotificationSettingAlways = 1)] =
              "k_ENotificationSettingAlways"),
            (e[(e.k_ENotificationSettingNever = 2)] =
              "k_ENotificationSettingNever");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_ETextFilterSettingSteamLabOptedOut = 0)] =
            "k_ETextFilterSettingSteamLabOptedOut"),
            (e[(e.k_ETextFilterSettingEnabled = 1)] =
              "k_ETextFilterSettingEnabled"),
            (e[(e.k_ETextFilterSettingEnabledAllowProfanity = 2)] =
              "k_ETextFilterSettingEnabledAllowProfanity"),
            (e[(e.k_ETextFilterSettingDisabled = 3)] =
              "k_ETextFilterSettingDisabled");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_ETextFilterOperationAddWords = 0)] =
            "k_ETextFilterOperationAddWords"),
            (e[(e.k_ETextFilterOperationRemoveWords = 1)] =
              "k_ETextFilterOperationRemoveWords"),
            (e[(e.k_ETextFilterOperationReplaceWords = 2)] =
              "k_ETextFilterOperationReplaceWords");
        })(b || (b = {}));
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.min_last_played || a.aR(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.games || a.aR(f.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { games: { n: 1, c: F, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appid || a.aR(F.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  appid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  playtime_disconnected: {
                    n: 15,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamids || a.aR(z.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Request";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.accounts || a.aR(S.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { accounts: { n: 1, c: M, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.public_data || a.aR(M.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  public_data: { n: 1, c: R },
                  private_data: { n: 2, c: h },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.steamid || a.aR(R.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  steamid: {
                    n: 1,
                    q: !0,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  visibility_state: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  profile_state: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  ban_expires_time: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  account_flags: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  sha_digest_avatar: {
                    n: 9,
                    br: a.FE.readBytes,
                    bw: a.Xc.writeBytes,
                  },
                  persona_name: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  profile_url: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  content_country_restricted: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.persona_state || a.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  persona_state: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  persona_state_flags: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_created: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  game_id: {
                    n: 4,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  game_server_steam_id: {
                    n: 5,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  game_server_ip_address: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  game_server_port: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  game_extra_info: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  account_name: {
                    n: 9,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  lobby_steam_id: {
                    n: 10,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  rich_presence_kv: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  broadcast_session_id: {
                    n: 12,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  watching_broadcast_accountid: {
                    n: 13,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  watching_broadcast_appid: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  watching_broadcast_viewers: {
                    n: 15,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  watching_broadcast_title: {
                    n: 16,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  last_logoff_time: {
                    n: 17,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_seen_online: {
                    n: 18,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  game_os_type: {
                    n: 19,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  game_device_type: {
                    n: 20,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  game_device_name: {
                    n: 21,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || a.aR(T.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.incoming_invite_mutual_friends_lists || a.aR(W.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: T,
                    r: !0,
                    q: !0,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.steamid || a.aR(v.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  include_appinfo: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_played_free_games: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  appids_filter: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  include_free_sub: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  skip_unvetted_apps: {
                    n: 6,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  language: { n: 7, br: a.FE.readString, bw: a.Xc.writeString },
                  include_extended_appinfo: {
                    n: 8,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Request";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.game_count || a.aR(C.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  game_count: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  games: { n: 2, c: O, r: !0, q: !0 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.appid || a.aR(O.M()),
            o.initialize(this, e, 0, -1, [18], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  appid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  sort_as: { n: 13, br: a.FE.readString, bw: a.Xc.writeString },
                  has_workshop: {
                    n: 14,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  has_market: { n: 15, br: a.FE.readBool, bw: a.Xc.writeBool },
                  has_dlc: { n: 16, br: a.FE.readBool, bw: a.Xc.writeBool },
                  has_leaderboards: {
                    n: 17,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  content_descriptorids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  playtime_disconnected: {
                    n: 19,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.max_age_seconds || a.aR(k.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  max_age_seconds: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  ignore_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(k.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Request";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.last_update_time || a.aR(j.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.play_sessions || a.aR(I.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { play_sessions: { n: 3, c: U, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid || a.aR(U.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  session_time_start: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  seconds: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  offline: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  owner: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Response";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appid || a.aR(A.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Request";
        }
      }
      class X extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.player_level || a.aR(X.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  player_level: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  badges: { n: 2, c: D, r: !0, q: !0 },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.level || a.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  level: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  series: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  border_color: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.communityitemid || a.aR(x.M()),
            o.initialize(this, e, 0, -1, [15], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  name: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  item_title: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  appid: { n: 7, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  item_type: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  profile_colors: { n: 15, c: N, r: !0, q: !0 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.style_name || a.aR(N.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  style_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  color: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(N.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem_ProfileColor";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.steamid || a.aR(G.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Request";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.profile_background || a.aR(q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { profile_background: { n: 1, c: x } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.communityitemid || a.aR(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class V extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.steamid || a.aR(H.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Request";
        }
      }
      class Q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.profile_background || a.aR(Q.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { profile_background: { n: 1, c: x } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class $ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.communityitemid || a.aR($.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class K extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class Y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.steamid || a.aR(Y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Request";
        }
      }
      class J extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.avatar_frame || a.aR(J.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = { proto: J, fields: { avatar_frame: { n: 1, c: x } } }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.communityitemid || a.aR(Z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = a.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.steamid || a.aR(re.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Request";
        }
      }
      class te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.avatar || a.aR(te.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = { proto: te, fields: { avatar: { n: 1, c: x } } }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.communityitemid || a.aR(ie.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.steamid || a.aR(ne.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Request";
        }
      }
      class se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.steam_deck_keyboard_skin || a.aR(se.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { steam_deck_keyboard_skin: { n: 1, c: x } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = a.Bh(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(se.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.communityitemid || a.aR(oe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.language || a.aR(ce.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  filters: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Request";
        }
      }
      class ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.profile_backgrounds || a.aR(ue.M()),
            o.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  profile_backgrounds: { n: 1, c: x, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: x, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: x, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: x, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: x, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: x, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: x, r: !0, q: !0 },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = a.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.steamid || a.aR(me.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class de extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.profile_background || a.aR(de.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  profile_background: { n: 1, c: x },
                  mini_profile_background: { n: 2, c: x },
                  avatar_frame: { n: 3, c: x },
                  animated_avatar: { n: 4, c: x },
                  profile_modifier: { n: 5, c: x },
                  steam_deck_keyboard_skin: { n: 6, c: x },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = a.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(de.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class Be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.communityitemid || a.aR(Be.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  flags: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = a.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Be.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Request";
        }
      }
      class _e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new _e();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ye();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Request";
        }
      }
      class be extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.emoticons || a.aR(be.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: { emoticons: { n: 1, c: pe, r: !0, q: !0 } },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = a.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(be.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.name || a.aR(pe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  name: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  count: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 6, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = a.Bh(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(pe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.appid || a.aR(ge.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  status_text: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = a.Bh(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ge.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class we extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new we();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.steamid || a.aR(fe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  postid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = a.Bh(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(fe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Request";
        }
      }
      class Fe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.accountid || a.aR(Fe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  deleted: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  appid: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = a.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Fe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.postid || a.aR(ze.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  postid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = a.Bh(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ze.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Request";
        }
      }
      class Se extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class Me extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.steamid || a.aR(Me.M()),
            o.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  max_achievements: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = a.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Request";
        }
      }
      class Re extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.games || a.aR(Re.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: { games: { n: 1, c: Ee, r: !0, q: !0 } },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = a.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response";
        }
      }
      class he extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.statid || a.aR(he.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  statid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  bit: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  desc: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  icon: { n: 5, br: a.FE.readString, bw: a.Xc.writeString },
                  icon_gray: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  hidden: { n: 7, br: a.FE.readBool, bw: a.Xc.writeBool },
                  player_percent_unlocked: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = a.Bh(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(he.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
        }
      }
      class Ee extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.appid || a.aR(Ee.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  total_achievements: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  achievements: { n: 3, c: he, r: !0, q: !0 },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = a.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Game";
        }
      }
      class Te extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.steamid || a.aR(Te.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = a.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Request";
        }
      }
      class We extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.achievement_progress || a.aR(We.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { achievement_progress: { n: 1, c: ve, r: !0, q: !0 } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = a.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(We.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.appid || a.aR(ve.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  unlocked: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  total: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  percentage: { n: 4, br: a.FE.readFloat, bw: a.Xc.writeFloat },
                  all_unlocked: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  cache_time: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = a.Bh(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ve.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class Ce extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.appid || a.aR(Ce.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = a.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Request";
        }
      }
      class Oe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.achievements || a.aR(Oe.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: { achievements: { n: 1, c: ke, r: !0, q: !0 } },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = a.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.internal_name || a.aR(ke.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  internal_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  localized_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  localized_desc: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  icon: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  icon_gray: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  hidden: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  player_percent_unlocked: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = a.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ke.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.steamid || a.aR(je.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = a.Bh(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(je.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Request";
        }
      }
      class Ie extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.has_favorite_badge || a.aR(Ie.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  badgeid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 6, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  level: { n: 7, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = a.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class Ue extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.communityitemid || a.aR(Ue.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  badgeid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = a.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Request";
        }
      }
      class Pe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Pe();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class Ae extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.slot || a.aR(Ae.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  slot: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  notes: { n: 6, br: a.FE.readString, bw: a.Xc.writeString },
                  title: { n: 7, br: a.FE.readString, bw: a.Xc.writeString },
                  accountid: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  badgeid: { n: 9, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  border_color: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  replay_year: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = a.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class Xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.customization_type || a.aR(Xe.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  large: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  slots: { n: 3, c: Ae, r: !0, q: !0 },
                  active: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  customization_style: {
                    n: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  level: { n: 7, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = a.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class De extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.theme_id || a.aR(De.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  theme_id: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  title: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = a.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(De.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class xe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.hide_profile_awards || a.aR(xe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = a.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class Ne extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.steamid || a.aR(Ne.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  include_inactive_customizations: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_purchased_customizations: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = a.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Request";
        }
      }
      class Ge extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.customizations || a.aR(Ge.M()),
            o.initialize(this, e, 0, -1, [1, 4], null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  customizations: { n: 1, c: Xe, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  profile_theme: { n: 3, c: De },
                  purchased_customizations: { n: 4, c: qe, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: xe },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = a.Bh(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ge.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.purchaseid || a.aR(qe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  level: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = a.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(qe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class Le extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.steamid || a.aR(Le.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = a.Bh(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Le.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Le();
          return Le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Le.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Request";
        }
      }
      class Ve extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.purchased_customizations || a.aR(Ve.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  purchased_customizations: { n: 1, c: He, r: !0, q: !0 },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = a.Bh(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ve.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ve();
          return Ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class He extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.purchaseid || a.aR(He.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = a.Bh(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(He.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(He.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new He();
          return He.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(He.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(He.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class Qe extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.steamid || a.aR(Qe.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = a.Bh(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Qe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Qe();
          return Qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class $e extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.purchased_customizations || a.aR($e.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  purchased_customizations: { n: 1, c: Ke, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: Ye, r: !0, q: !0 },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = a.Bh($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($e.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $e();
          return $e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class Ke extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.customization_type || a.aR(Ke.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  count: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = a.Bh(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ke.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ke();
          return Ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class Ye extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.customization_type || a.aR(Ye.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  level: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = a.Bh(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ye.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ye();
          return Ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class Je extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Je();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Je();
          return Je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Request";
        }
      }
      class Ze extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.profile_themes || a.aR(Ze.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: { profile_themes: { n: 1, c: De, r: !0, q: !0 } },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = a.Bh(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ze.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ze();
          return Ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class er extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            er.prototype.theme_id || a.aR(er.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            er.sm_m ||
              (er.sm_m = {
                proto: er,
                fields: {
                  theme_id: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            er.sm_m
          );
        }
        static MBF() {
          return er.sm_mbf || (er.sm_mbf = a.Bh(er.M())), er.sm_mbf;
        }
        toObject(e = !1) {
          return er.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(er.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(er.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new er();
          return er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(er.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(er.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Request";
        }
      }
      class rr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return rr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new rr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new rr();
          return rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class tr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tr.prototype.profile_preferences || a.aR(tr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            tr.sm_m ||
              (tr.sm_m = {
                proto: tr,
                fields: { profile_preferences: { n: 1, c: xe } },
              }),
            tr.sm_m
          );
        }
        static MBF() {
          return tr.sm_mbf || (tr.sm_mbf = a.Bh(tr.M())), tr.sm_mbf;
        }
        toObject(e = !1) {
          return tr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(tr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new tr();
          return tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Request";
        }
      }
      class ir extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ir.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ir();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ir();
          return ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class ar extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ar.prototype.appid || a.aR(ar.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ar.sm_m ||
              (ar.sm_m = {
                proto: ar,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            ar.sm_m
          );
        }
        static MBF() {
          return ar.sm_mbf || (ar.sm_mbf = a.Bh(ar.M())), ar.sm_mbf;
        }
        toObject(e = !1) {
          return ar.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ar.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ar();
          return ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class nr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nr.prototype.your_info || a.aR(nr.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            nr.sm_m ||
              (nr.sm_m = {
                proto: nr,
                fields: {
                  your_info: { n: 1, c: or },
                  in_game: { n: 2, c: sr, r: !0, q: !0 },
                  played_recently: { n: 3, c: sr, r: !0, q: !0 },
                  played_ever: { n: 4, c: sr, r: !0, q: !0 },
                  owns: { n: 5, c: sr, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: sr, r: !0, q: !0 },
                },
              }),
            nr.sm_m
          );
        }
        static MBF() {
          return nr.sm_mbf || (nr.sm_mbf = a.Bh(nr.M())), nr.sm_mbf;
        }
        toObject(e = !1) {
          return nr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(nr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(nr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new nr();
          return nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(nr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(nr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class sr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            sr.prototype.steamid || a.aR(sr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            sr.sm_m ||
              (sr.sm_m = {
                proto: sr,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            sr.sm_m
          );
        }
        static MBF() {
          return sr.sm_mbf || (sr.sm_mbf = a.Bh(sr.M())), sr.sm_mbf;
        }
        toObject(e = !1) {
          return sr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(sr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(sr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new sr();
          return sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(sr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(sr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class or extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            or.prototype.steamid || a.aR(or.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            or.sm_m ||
              (or.sm_m = {
                proto: or,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  in_wishlist: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  owned: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            or.sm_m
          );
        }
        static MBF() {
          return or.sm_mbf || (or.sm_mbf = a.Bh(or.M())), or.sm_mbf;
        }
        toObject(e = !1) {
          return or.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(or.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new or();
          return or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(or.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class lr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return lr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new lr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new lr();
          return lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Request";
        }
      }
      class cr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            cr.prototype.time_ssa_accepted || a.aR(cr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            cr.sm_m ||
              (cr.sm_m = {
                proto: cr,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            cr.sm_m
          );
        }
        static MBF() {
          return cr.sm_mbf || (cr.sm_mbf = a.Bh(cr.M())), cr.sm_mbf;
        }
        toObject(e = !1) {
          return cr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(cr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(cr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new cr();
          return cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(cr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(cr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class ur extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ur.prototype.agreement_type || a.aR(ur.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ur.sm_m ||
              (ur.sm_m = {
                proto: ur,
                fields: {
                  agreement_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  time_signed_utc: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ur.sm_m
          );
        }
        static MBF() {
          return ur.sm_mbf || (ur.sm_mbf = a.Bh(ur.M())), ur.sm_mbf;
        }
        toObject(e = !1) {
          return ur.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ur.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ur();
          return ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Request";
        }
      }
      class mr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return mr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new mr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new mr();
          return mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class dr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return dr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new dr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new dr();
          return dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Request";
        }
      }
      class Br extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Br.prototype.nicknames || a.aR(Br.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Br.sm_m ||
              (Br.sm_m = {
                proto: Br,
                fields: { nicknames: { n: 1, c: _r, r: !0, q: !0 } },
              }),
            Br.sm_m
          );
        }
        static MBF() {
          return Br.sm_mbf || (Br.sm_mbf = a.Bh(Br.M())), Br.sm_mbf;
        }
        toObject(e = !1) {
          return Br.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Br.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Br.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Br();
          return Br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Br.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Br.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class _r extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _r.prototype.accountid || a.aR(_r.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _r.sm_m ||
              (_r.sm_m = {
                proto: _r,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            _r.sm_m
          );
        }
        static MBF() {
          return _r.sm_mbf || (_r.sm_mbf = a.Bh(_r.M())), _r.sm_mbf;
        }
        toObject(e = !1) {
          return _r.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_r.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_r.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _r();
          return _r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_r.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_r.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class yr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yr.prototype.accountid || a.aR(yr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            yr.sm_m ||
              (yr.sm_m = {
                proto: yr,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            yr.sm_m
          );
        }
        static MBF() {
          return yr.sm_mbf || (yr.sm_mbf = a.Bh(yr.M())), yr.sm_mbf;
        }
        toObject(e = !1) {
          return yr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(yr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(yr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new yr();
          return yr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(yr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(yr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class br extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return br.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new br();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new br();
          return br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Request";
        }
      }
      class pr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pr.prototype.preferences || a.aR(pr.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            pr.sm_m ||
              (pr.sm_m = {
                proto: pr,
                fields: { preferences: { n: 1, c: yr, r: !0, q: !0 } },
              }),
            pr.sm_m
          );
        }
        static MBF() {
          return pr.sm_mbf || (pr.sm_mbf = a.Bh(pr.M())), pr.sm_mbf;
        }
        toObject(e = !1) {
          return pr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(pr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(pr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new pr();
          return pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(pr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(pr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class gr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gr.prototype.preferences || a.aR(gr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            gr.sm_m ||
              (gr.sm_m = {
                proto: gr,
                fields: { preferences: { n: 1, c: yr } },
              }),
            gr.sm_m
          );
        }
        static MBF() {
          return gr.sm_mbf || (gr.sm_mbf = a.Bh(gr.M())), gr.sm_mbf;
        }
        toObject(e = !1) {
          return gr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(gr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(gr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new gr();
          return gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(gr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(gr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Request";
        }
      }
      class wr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return wr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new wr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new wr();
          return wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class fr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fr.prototype.steamid || a.aR(fr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fr.sm_m ||
              (fr.sm_m = {
                proto: fr,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            fr.sm_m
          );
        }
        static MBF() {
          return fr.sm_mbf || (fr.sm_mbf = a.Bh(fr.M())), fr.sm_mbf;
        }
        toObject(e = !1) {
          return fr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(fr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new fr();
          return fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Request";
        }
      }
      class Fr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fr.prototype.invite_sent || a.aR(Fr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Fr.sm_m ||
              (Fr.sm_m = {
                proto: Fr,
                fields: {
                  invite_sent: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  result: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            Fr.sm_m
          );
        }
        static MBF() {
          return Fr.sm_mbf || (Fr.sm_mbf = a.Bh(Fr.M())), Fr.sm_mbf;
        }
        toObject(e = !1) {
          return Fr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Fr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Fr();
          return Fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class zr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zr.prototype.steamid || a.aR(zr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            zr.sm_m ||
              (zr.sm_m = {
                proto: zr,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            zr.sm_m
          );
        }
        static MBF() {
          return zr.sm_mbf || (zr.sm_mbf = a.Bh(zr.M())), zr.sm_mbf;
        }
        toObject(e = !1) {
          return zr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(zr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(zr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new zr();
          return zr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(zr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(zr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Request";
        }
      }
      class Sr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Sr.prototype.friend_relationship || a.aR(Sr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Sr.sm_m ||
              (Sr.sm_m = {
                proto: Sr,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Sr.sm_m
          );
        }
        static MBF() {
          return Sr.sm_mbf || (Sr.sm_mbf = a.Bh(Sr.M())), Sr.sm_mbf;
        }
        toObject(e = !1) {
          return Sr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Sr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Sr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Sr();
          return Sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Sr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Sr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class Mr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mr.prototype.steamid || a.aR(Mr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Mr.sm_m ||
              (Mr.sm_m = {
                proto: Mr,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  unignore: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            Mr.sm_m
          );
        }
        static MBF() {
          return Mr.sm_mbf || (Mr.sm_mbf = a.Bh(Mr.M())), Mr.sm_mbf;
        }
        toObject(e = !1) {
          return Mr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Mr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Mr();
          return Mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Request";
        }
      }
      class Rr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rr.prototype.friend_relationship || a.aR(Rr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Rr.sm_m ||
              (Rr.sm_m = {
                proto: Rr,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Rr.sm_m
          );
        }
        static MBF() {
          return Rr.sm_mbf || (Rr.sm_mbf = a.Bh(Rr.M())), Rr.sm_mbf;
        }
        toObject(e = !1) {
          return Rr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Rr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Rr();
          return Rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class hr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            hr.prototype.parenthesize_nicknames || a.aR(hr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            hr.sm_m ||
              (hr.sm_m = {
                proto: hr,
                fields: {
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            hr.sm_m
          );
        }
        static MBF() {
          return hr.sm_mbf || (hr.sm_mbf = a.Bh(hr.M())), hr.sm_mbf;
        }
        toObject(e = !1) {
          return hr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(hr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(hr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new hr();
          return hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(hr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(hr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class Er extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Er.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Er();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Er();
          return Er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class Tr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tr.prototype.preferences || a.aR(Tr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Tr.sm_m ||
              (Tr.sm_m = {
                proto: Tr,
                fields: {
                  preferences: { n: 1, c: hr },
                  content_descriptor_preferences: { n: 2, c: s.cF },
                },
              }),
            Tr.sm_m
          );
        }
        static MBF() {
          return Tr.sm_mbf || (Tr.sm_mbf = a.Bh(Tr.M())), Tr.sm_mbf;
        }
        toObject(e = !1) {
          return Tr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Tr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Tr();
          return Tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class Wr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wr.prototype.preferences || a.aR(Wr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Wr.sm_m ||
              (Wr.sm_m = {
                proto: Wr,
                fields: { preferences: { n: 1, c: hr } },
              }),
            Wr.sm_m
          );
        }
        static MBF() {
          return Wr.sm_mbf || (Wr.sm_mbf = a.Bh(Wr.M())), Wr.sm_mbf;
        }
        toObject(e = !1) {
          return Wr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Wr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Wr();
          return Wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Request";
        }
      }
      class vr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return vr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new vr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new vr();
          return vr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class Cr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Cr.prototype.text_filter_custom_banned_words || a.aR(Cr.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            Cr.sm_m ||
              (Cr.sm_m = {
                proto: Cr,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Cr.sm_m
          );
        }
        static MBF() {
          return Cr.sm_mbf || (Cr.sm_mbf = a.Bh(Cr.M())), Cr.sm_mbf;
        }
        toObject(e = !1) {
          return Cr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Cr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Cr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Cr();
          return Cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Cr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Cr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class Or extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Or.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Or();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Or();
          return Or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class kr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kr.prototype.words || a.aR(kr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            kr.sm_m ||
              (kr.sm_m = { proto: kr, fields: { words: { n: 1, c: Cr } } }),
            kr.sm_m
          );
        }
        static MBF() {
          return kr.sm_mbf || (kr.sm_mbf = a.Bh(kr.M())), kr.sm_mbf;
        }
        toObject(e = !1) {
          return kr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(kr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new kr();
          return kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class jr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jr.prototype.language || a.aR(jr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            jr.sm_m ||
              (jr.sm_m = {
                proto: jr,
                fields: {
                  language: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            jr.sm_m
          );
        }
        static MBF() {
          return jr.sm_mbf || (jr.sm_mbf = a.Bh(jr.M())), jr.sm_mbf;
        }
        toObject(e = !1) {
          return jr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(jr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(jr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new jr();
          return jr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(jr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(jr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Request";
        }
      }
      class Ir extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ir.prototype.state || a.aR(Ir.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ir.sm_m ||
              (Ir.sm_m = {
                proto: Ir,
                fields: {
                  state: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            Ir.sm_m
          );
        }
        static MBF() {
          return Ir.sm_mbf || (Ir.sm_mbf = a.Bh(Ir.M())), Ir.sm_mbf;
        }
        toObject(e = !1) {
          return Ir.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ir.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ir.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ir();
          return Ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ir.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ir.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class Ur extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ur.prototype.announcement_gid || a.aR(Ur.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ur.sm_m ||
              (Ur.sm_m = {
                proto: Ur,
                fields: {
                  announcement_gid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  time_posted: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Ur.sm_m
          );
        }
        static MBF() {
          return Ur.sm_mbf || (Ur.sm_mbf = a.Bh(Ur.M())), Ur.sm_mbf;
        }
        toObject(e = !1) {
          return Ur.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ur.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ur();
          return Ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
        }
      }
      class Pr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Pr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Pr();
          return Pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class Ar extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ar.prototype.privacy_state || a.aR(Ar.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ar.sm_m ||
              (Ar.sm_m = {
                proto: Ar,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            Ar.sm_m
          );
        }
        static MBF() {
          return Ar.sm_mbf || (Ar.sm_mbf = a.Bh(Ar.M())), Ar.sm_mbf;
        }
        toObject(e = !1) {
          return Ar.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ar.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ar();
          return Ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class Xr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Xr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Xr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Xr();
          return Xr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Request";
        }
      }
      class Dr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dr.prototype.privacy_settings || a.aR(Dr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Dr.sm_m ||
              (Dr.sm_m = {
                proto: Dr,
                fields: { privacy_settings: { n: 1, c: Ar } },
              }),
            Dr.sm_m
          );
        }
        static MBF() {
          return Dr.sm_mbf || (Dr.sm_mbf = a.Bh(Dr.M())), Dr.sm_mbf;
        }
        toObject(e = !1) {
          return Dr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Dr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Dr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Dr();
          return Dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Dr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Dr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class xr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xr.prototype.appid || a.aR(xr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xr.sm_m ||
              (xr.sm_m = {
                proto: xr,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            xr.sm_m
          );
        }
        static MBF() {
          return xr.sm_mbf || (xr.sm_mbf = a.Bh(xr.M())), xr.sm_mbf;
        }
        toObject(e = !1) {
          return xr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(xr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(xr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new xr();
          return xr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(xr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(xr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Request";
        }
      }
      class Nr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nr.prototype.is_enabled || a.aR(Nr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Nr.sm_m ||
              (Nr.sm_m = {
                proto: Nr,
                fields: {
                  is_enabled: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  seconds: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  block_minors: { n: 8, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            Nr.sm_m
          );
        }
        static MBF() {
          return Nr.sm_mbf || (Nr.sm_mbf = a.Bh(Nr.M())), Nr.sm_mbf;
        }
        toObject(e = !1) {
          return Nr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Nr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Nr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Nr();
          return Nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Nr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Nr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class Gr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gr.prototype.games || a.aR(Gr.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Gr.sm_m ||
              (Gr.sm_m = {
                proto: Gr,
                fields: { games: { n: 1, c: F, r: !0, q: !0 } },
              }),
            Gr.sm_m
          );
        }
        static MBF() {
          return Gr.sm_mbf || (Gr.sm_mbf = a.Bh(Gr.M())), Gr.sm_mbf;
        }
        toObject(e = !1) {
          return Gr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Gr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Gr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Gr();
          return Gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Gr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Gr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class qr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qr.prototype.accountid || a.aR(qr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            qr.sm_m ||
              (qr.sm_m = {
                proto: qr,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            qr.sm_m
          );
        }
        static MBF() {
          return qr.sm_mbf || (qr.sm_mbf = a.Bh(qr.M())), qr.sm_mbf;
        }
        toObject(e = !1) {
          return qr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(qr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(qr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new qr();
          return qr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(qr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(qr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class Lr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lr.prototype.accountid || a.aR(Lr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Lr.sm_m ||
              (Lr.sm_m = {
                proto: Lr,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                },
              }),
            Lr.sm_m
          );
        }
        static MBF() {
          return Lr.sm_mbf || (Lr.sm_mbf = a.Bh(Lr.M())), Lr.sm_mbf;
        }
        toObject(e = !1) {
          return Lr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Lr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Lr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Lr();
          return Lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Lr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Lr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class Vr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Vr.prototype.state || a.aR(Vr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Vr.sm_m ||
              (Vr.sm_m = {
                proto: Vr,
                fields: {
                  state: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            Vr.sm_m
          );
        }
        static MBF() {
          return Vr.sm_mbf || (Vr.sm_mbf = a.Bh(Vr.M())), Vr.sm_mbf;
        }
        toObject(e = !1) {
          return Vr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Vr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Vr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Vr();
          return Vr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Vr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Vr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class Hr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Hr.prototype.preferences || a.aR(Hr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Hr.sm_m ||
              (Hr.sm_m = {
                proto: Hr,
                fields: {
                  preferences: { n: 1, c: hr },
                  content_descriptor_preferences: { n: 2, c: s.cF },
                },
              }),
            Hr.sm_m
          );
        }
        static MBF() {
          return Hr.sm_mbf || (Hr.sm_mbf = a.Bh(Hr.M())), Hr.sm_mbf;
        }
        toObject(e = !1) {
          return Hr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Hr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Hr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Hr();
          return Hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Hr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Hr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class Qr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qr.prototype.words || a.aR(Qr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Qr.sm_m ||
              (Qr.sm_m = { proto: Qr, fields: { words: { n: 1, c: Cr } } }),
            Qr.sm_m
          );
        }
        static MBF() {
          return Qr.sm_mbf || (Qr.sm_mbf = a.Bh(Qr.M())), Qr.sm_mbf;
        }
        toObject(e = !1) {
          return Qr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Qr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Qr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Qr();
          return Qr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Qr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Qr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class $r extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $r.prototype.accountid || a.aR($r.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $r.sm_m ||
              ($r.sm_m = {
                proto: $r,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  preferences: { n: 2, c: yr },
                },
              }),
            $r.sm_m
          );
        }
        static MBF() {
          return $r.sm_mbf || ($r.sm_mbf = a.Bh($r.M())), $r.sm_mbf;
        }
        toObject(e = !1) {
          return $r.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($r.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($r.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $r();
          return $r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($r.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($r.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class Kr extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kr.prototype.privacy_settings || a.aR(Kr.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Kr.sm_m ||
              (Kr.sm_m = {
                proto: Kr,
                fields: { privacy_settings: { n: 1, c: Ar } },
              }),
            Kr.sm_m
          );
        }
        static MBF() {
          return Kr.sm_mbf || (Kr.sm_mbf = a.Bh(Kr.M())), Kr.sm_mbf;
        }
        toObject(e = !1) {
          return Kr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Kr.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Kr();
          return Kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      !(function (e) {
        (e.GetPlayerLinkDetails = function (e, r) {
          return e.SendMsg(
            "Player.GetPlayerLinkDetails#1",
            (0, n.MD)(z, r),
            S,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetMutualFriendsForIncomingInvites = function (e, r) {
            return e.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, n.MD)(E, r),
              W,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOwnedGames = function (e, r) {
            return e.SendMsg("Player.GetOwnedGames#1", (0, n.MD)(v, r), C, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, r) {
            return e.SendMsg("Player.GetPlayNext#1", (0, n.MD)(k, r), j, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, r) {
            return e.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, n.MD)(ar, r),
              nr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetGameBadgeLevels = function (e, r) {
            return e.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, n.MD)(A, r),
              X,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileBackground#1",
              (0, n.MD)(G, r),
              q,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.SetProfileBackground#1",
              (0, n.MD)(L, r),
              V,
              { ePrivilege: 1 },
            );
          }),
          (e.GetMiniProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, n.MD)(H, r),
              Q,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetMiniProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, n.MD)($, r),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.GetAvatarFrame#1", (0, n.MD)(Y, r), J, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.SetAvatarFrame#1", (0, n.MD)(Z, r), ee, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, r) {
            return e.SendMsg(
              "Player.GetAnimatedAvatar#1",
              (0, n.MD)(re, r),
              te,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetAnimatedAvatar = function (e, r) {
            return e.SendMsg(
              "Player.SetAnimatedAvatar#1",
              (0, n.MD)(ie, r),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, n.MD)(ne, r),
              se,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, n.MD)(oe, r),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsOwned = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, n.MD)(ce, r),
              ue,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsEquipped = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, n.MD)(me, r),
              de,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetEquippedProfileItemFlags = function (e, r) {
            return e.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, n.MD)(Be, r),
              _e,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEmoticonList = function (e, r) {
            return e.SendMsg("Player.GetEmoticonList#1", (0, n.MD)(ye, r), be, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetTopAchievementsForGames = function (e, r) {
            return e.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, n.MD)(Me, r),
              Re,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAchievementsProgress = function (e, r) {
            return e.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, n.MD)(Te, r),
              We,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetGameAchievements = function (e, r) {
            return e.SendMsg(
              "Player.GetGameAchievements#1",
              (0, n.MD)(Ce, r),
              Oe,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetFavoriteBadge = function (e, r) {
            return e.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, n.MD)(je, r),
              Ie,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetFavoriteBadge = function (e, r) {
            return e.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, n.MD)(Ue, r),
              Pe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileCustomization = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, n.MD)(Ne, r),
              Ge,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, n.MD)(Le, r),
              Ve,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, n.MD)(Qe, r),
              $e,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileThemesAvailable = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, n.MD)(Je, r),
              Ze,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetProfileTheme = function (e, r) {
            return e.SendMsg("Player.SetProfileTheme#1", (0, n.MD)(er, r), rr, {
              ePrivilege: 1,
            });
          }),
          (e.SetProfilePreferences = function (e, r) {
            return e.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, n.MD)(tr, r),
              ir,
              { ePrivilege: 1 },
            );
          }),
          (e.PostStatusToFriends = function (e, r) {
            return e.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, n.MD)(ge, r),
              we,
              { ePrivilege: 3 },
            );
          }),
          (e.GetPostedStatus = function (e, r) {
            return e.SendMsg("Player.GetPostedStatus#1", (0, n.MD)(fe, r), Fe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.DeletePostedStatus = function (e, r) {
            return e.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, n.MD)(ze, r),
              Se,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetLastPlayedTimes = function (e, r) {
            return e.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, n.MD)(w, r),
              f,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTimeSSAAccepted = function (e, r) {
            return e.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, n.MD)(lr, r),
              cr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.AcceptSSA = function (e, r) {
            return e.SendMsg("Player.AcceptSSA#1", (0, n.MD)(ur, r), mr, {
              ePrivilege: 1,
            });
          }),
          (e.GetNicknameList = function (e, r) {
            return e.SendMsg("Player.GetNicknameList#1", (0, n.MD)(dr, r), Br, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetPerFriendPreferences = function (e, r) {
            return e.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, n.MD)(br, r),
              pr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPerFriendPreferences = function (e, r) {
            return e.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, n.MD)(gr, r),
              wr,
              { ePrivilege: 1 },
            );
          }),
          (e.AddFriend = function (e, r) {
            return e.SendMsg("Player.AddFriend#1", (0, n.MD)(fr, r), Fr, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveFriend = function (e, r) {
            return e.SendMsg("Player.RemoveFriend#1", (0, n.MD)(zr, r), Sr, {
              ePrivilege: 1,
            });
          }),
          (e.IgnoreFriend = function (e, r) {
            return e.SendMsg("Player.IgnoreFriend#1", (0, n.MD)(Mr, r), Rr, {
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityPreferences = function (e, r) {
            return e.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, n.MD)(Er, r),
              Tr,
              { ePrivilege: 1 },
            );
          }),
          (e.SetCommunityPreferences = function (e, r) {
            return e.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, n.MD)(Wr, r),
              vr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTextFilterWords = function (e, r) {
            return e.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, n.MD)(Or, r),
              kr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNewSteamAnnouncementState = function (e, r) {
            return e.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, n.MD)(jr, r),
              Ir,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, r) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, n.MD)(Ur, r),
              Pr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPrivacySettings = function (e, r) {
            return e.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, n.MD)(Xr, r),
              Dr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDurationControl = function (e, r) {
            return e.SendMsg(
              "Player.GetDurationControl#1",
              (0, n.MD)(xr, r),
              Nr,
              { ePrivilege: 1 },
            );
          }),
          (e.RecordDisconnectedPlaytime = function (e, r) {
            return e.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, n.MD)(I, r),
              P,
              { ePrivilege: 1 },
            );
          });
      })(p || (p = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: Gr,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: qr,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: Lr,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Vr,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: Hr,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: Qr,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: $r,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: Kr,
            });
        })(g || (g = {}));
    },
    74158: (e, r, t) => {
      t.d(r, {
        Ew: () => L,
        GJ: () => P,
        P8: () => b,
        VK: () => F,
        cJ: () => x,
        d6: () => R,
        iM: () => ce,
        lV: () => u,
      });
      var i = t(45878),
        a = t(43898),
        n = t(67328),
        s = t(93067),
        o = t(76322);
      const l = i.Message;
      var c, u, m, d, B, _, y, b, p, g, w, f, F, z, S, M, R, h;
      !(function (e) {
        (e[(e.k_EUserTagReportNone = 0)] = "k_EUserTagReportNone"),
          (e[(e.k_EUserTagReportOffensive = 1)] = "k_EUserTagReportOffensive"),
          (e[(e.k_EUserTagReportMisapplied = 2)] =
            "k_EUserTagReportMisapplied"),
          (e[(e.k_EUserTagReportNotHelpful = 3)] =
            "k_EUserTagReportNotHelpful"),
          (e[(e.k_EUserTagReportSpoiler = 4)] = "k_EUserTagReportSpoiler"),
          (e[(e.k_EUserTagReportMAX = 5)] = "k_EUserTagReportMAX");
      })(c || (c = {})),
        (function (e) {
          (e[(e.k_EStoreDiscoveryQueueTypeNew = 0)] =
            "k_EStoreDiscoveryQueueTypeNew"),
            (e[(e.k_EStoreDiscoveryQueueTypeComingSoon = 1)] =
              "k_EStoreDiscoveryQueueTypeComingSoon"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommended = 2)] =
              "k_EStoreDiscoveryQueueTypeRecommended"),
            (e[(e.k_EStoreDiscoveryQueueTypeEveryNewRelease = 3)] =
              "k_EStoreDiscoveryQueueTypeEveryNewRelease"),
            (e[(e.k_EStoreDiscoveryQueueTypeMLRecommender = 5)] =
              "k_EStoreDiscoveryQueueTypeMLRecommender"),
            (e[(e.k_EStoreDiscoveryQueueTypeWishlistOnSale = 6)] =
              "k_EStoreDiscoveryQueueTypeWishlistOnSale"),
            (e[(e.k_EStoreDiscoveryQueueTypeDLC = 7)] =
              "k_EStoreDiscoveryQueueTypeDLC"),
            (e[(e.k_EStoreDiscoveryQueueTypeDLCOnSale = 8)] =
              "k_EStoreDiscoveryQueueTypeDLCOnSale"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommendedComingSoon = 9)] =
              "k_EStoreDiscoveryQueueTypeRecommendedComingSoon"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommendedFree = 10)] =
              "k_EStoreDiscoveryQueueTypeRecommendedFree"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommendedOnSale = 11)] =
              "k_EStoreDiscoveryQueueTypeRecommendedOnSale"),
            (e[(e.k_EStoreDiscoveryQueueTypeRecommendedDemos = 12)] =
              "k_EStoreDiscoveryQueueTypeRecommendedDemos"),
            (e[(e.k_EStoreDiscoveryQueueTypeDLCNewReleases = 13)] =
              "k_EStoreDiscoveryQueueTypeDLCNewReleases"),
            (e[(e.k_EStoreDiscoveryQueueTypeDLCTopSellers = 14)] =
              "k_EStoreDiscoveryQueueTypeDLCTopSellers"),
            (e[(e.k_EStoreDiscoveryQueueTypeMAX = 15)] =
              "k_EStoreDiscoveryQueueTypeMAX");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_ENewReleaseNotificationState_Initial = 0)] =
            "k_ENewReleaseNotificationState_Initial"),
            (e[(e.k_ENewReleaseNotificationState_Approved = 1)] =
              "k_ENewReleaseNotificationState_Approved"),
            (e[(e.k_ENewReleaseNotificationState_InProgress = 2)] =
              "k_ENewReleaseNotificationState_InProgress"),
            (e[(e.k_ENewReleaseNotificationState_Completed = 3)] =
              "k_ENewReleaseNotificationState_Completed"),
            (e[(e.k_ENewReleaseNotificationState_Canceled = 4)] =
              "k_ENewReleaseNotificationState_Canceled");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_ENewReleaseNotificationType_Released = 0)] =
            "k_ENewReleaseNotificationType_Released"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedFromEarlyAccess = 1)] =
              "k_ENewReleaseNotificationType_ReleasedFromEarlyAccess"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedAsEarlyAccess = 2)] =
              "k_ENewReleaseNotificationType_ReleasedAsEarlyAccess"),
            (e[(e.k_ENewReleaseNotificationType_ReleasedPreSale = 3)] =
              "k_ENewReleaseNotificationType_ReleasedPreSale");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EForceFeatureTarget_Invalid = 0)] =
            "k_EForceFeatureTarget_Invalid"),
            (e[(e.k_EForceFeatureTarget_AppOwners = 1)] =
              "k_EForceFeatureTarget_AppOwners"),
            (e[(e.k_EForceFeatureTarget_MinPlayTime = 2)] =
              "k_EForceFeatureTarget_MinPlayTime"),
            (e[(e.k_EForceFeatureTarget_AppFollower = 4)] =
              "k_EForceFeatureTarget_AppFollower"),
            (e[(e.k_EForceFeatureTarget_CreatorFollower = 8)] =
              "k_EForceFeatureTarget_CreatorFollower"),
            (e[(e.k_EForceFeatureTarget_OwnSomeCreatorApp = 16)] =
              "k_EForceFeatureTarget_OwnSomeCreatorApp"),
            (e[(e.k_EForceFeatureTarget_EarlierLastPlayedApp = 32)] =
              "k_EForceFeatureTarget_EarlierLastPlayedApp"),
            (e[(e.k_EForceFeatureTarget_LaterLastPlayedApp = 64)] =
              "k_EForceFeatureTarget_LaterLastPlayedApp"),
            (e[(e.k_EForceFeatureTarget_FollowSomeCreatorApp = 128)] =
              "k_EForceFeatureTarget_FollowSomeCreatorApp"),
            (e[(e.k_EForceFeatureTarget_PlaySomeCreatorApp = 256)] =
              "k_EForceFeatureTarget_PlaySomeCreatorApp"),
            (e[(e.k_EForceFeatureTarget_ExcludeAppOwner = 512)] =
              "k_EForceFeatureTarget_ExcludeAppOwner"),
            (e[(e.k_EForceFeatureTarget_AppWishList = 1024)] =
              "k_EForceFeatureTarget_AppWishList"),
            (e[(e.k_EForceFeatureTarget_SteamworksPublishers = 2048)] =
              "k_EForceFeatureTarget_SteamworksPublishers"),
            (e[(e.k_EForceFeatureTarget_MaxPlayTime = 4096)] =
              "k_EForceFeatureTarget_MaxPlayTime");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_EForceFeatureFilter_None = 0)] =
            "k_EForceFeatureFilter_None"),
            (e[(e.k_EForceFeatureFilter_IR_TopN = 1)] =
              "k_EForceFeatureFilter_IR_TopN"),
            (e[(e.k_EForceFeatureFilter_WishList = 2)] =
              "k_EForceFeatureFilter_WishList");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_EDQCohort_None = 0)] = "k_EDQCohort_None"),
            (e[(e.k_EDQCohort_RecommendedForYouMay2019 = 1)] =
              "k_EDQCohort_RecommendedForYouMay2019"),
            (e[(e.k_EDQCohort_ExperimentalRecommenderMarch2019 = 2)] =
              "k_EDQCohort_ExperimentalRecommenderMarch2019"),
            (e[(e.k_EDQCohort_Sept2019Experiment = 3)] =
              "k_EDQCohort_Sept2019Experiment"),
            (e[(e.k_EDQCohort_Sept2019ComingSoon = 4)] =
              "k_EDQCohort_Sept2019ComingSoon"),
            (e[(e.k_EDQCohort_Sept2019Control = 5)] =
              "k_EDQCohort_Sept2019Control"),
            (e[(e.k_EDQCohort_Sept2019NoDLC = 6)] =
              "k_EDQCohort_Sept2019NoDLC"),
            (e[(e.k_EDQCohort_Sept2019NoComingSoon = 7)] =
              "k_EDQCohort_Sept2019NoComingSoon");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_EFeaturedAppTypeUpdateRound = 0)] =
            "k_EFeaturedAppTypeUpdateRound"),
            (e[(e.k_EFeaturedAppTypeLaunchRound = 1)] =
              "k_EFeaturedAppTypeLaunchRound"),
            (e[(e.k_EFeaturedAppTypeMAX = 2)] = "k_EFeaturedAppTypeMAX");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_EFeaturedAppBonusRoundGrantReason_ValveDiscretion = 0)] =
            "k_EFeaturedAppBonusRoundGrantReason_ValveDiscretion"),
            (e[(e.k_EFeaturedAppBonusRoundGrantReason_ReachedTopSellers = 1)] =
              "k_EFeaturedAppBonusRoundGrantReason_ReachedTopSellers");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_ETesterStatusNone = 0)] = "k_ETesterStatusNone"),
            (e[(e.k_ETesterStatusPending = 1)] = "k_ETesterStatusPending"),
            (e[(e.k_ETesterStatusInvited = 2)] = "k_ETesterStatusInvited"),
            (e[(e.k_ETesterStatusGranted = 3)] = "k_ETesterStatusGranted");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EAppReportType_Invalid = 0)] = "k_EAppReportType_Invalid"),
            (e[(e.k_EAppReportType_Scam = 1)] = "k_EAppReportType_Scam"),
            (e[(e.k_EAppReportType_Malware = 2)] = "k_EAppReportType_Malware"),
            (e[(e.k_EAppReportType_HateSpeech = 3)] =
              "k_EAppReportType_HateSpeech"),
            (e[(e.k_EAppReportType_Pornography = 4)] =
              "k_EAppReportType_Pornography"),
            (e[(e.k_EAppReportType_NonLabeledAdultContent = 5)] =
              "k_EAppReportType_NonLabeledAdultContent"),
            (e[(e.k_EAppReportType_Libelous = 6)] =
              "k_EAppReportType_Libelous"),
            (e[(e.k_EAppReportType_Offensive = 7)] =
              "k_EAppReportType_Offensive"),
            (e[(e.k_EAppReportType_ExploitsChildren = 8)] =
              "k_EAppReportType_ExploitsChildren"),
            (e[(e.k_EAppReportType_MtxWithNonSteamWalletPaymentMethods = 9)] =
              "k_EAppReportType_MtxWithNonSteamWalletPaymentMethods"),
            (e[(e.k_EAppReportType_CopyrightViolation = 10)] =
              "k_EAppReportType_CopyrightViolation"),
            (e[(e.k_EAppReportType_ViolatesLaws = 11)] =
              "k_EAppReportType_ViolatesLaws"),
            (e[(e.k_EAppReportType_Other = 12)] = "k_EAppReportType_Other"),
            (e[(e.k_EAppReportType_Broken = 13)] = "k_EAppReportType_Broken");
        })(w || (w = {})),
        (function (e) {
          (e[(e.k_EUserReviewScorePreference_Unset = 0)] =
            "k_EUserReviewScorePreference_Unset"),
            (e[(e.k_EUserReviewScorePreference_IncludeAll = 1)] =
              "k_EUserReviewScorePreference_IncludeAll"),
            (e[(e.k_EUserReviewScorePreference_ExcludeBombs = 2)] =
              "k_EUserReviewScorePreference_ExcludeBombs");
        })(f || (f = {})),
        (function (e) {
          (e[(e.k_EStoreUsabilityEvent_MainCapNav = 1)] =
            "k_EStoreUsabilityEvent_MainCapNav"),
            (e[(e.k_EStoreUsabilityEvent_SpecialOffersNav = 2)] =
              "k_EStoreUsabilityEvent_SpecialOffersNav"),
            (e[(e.k_EStoreUsabilityEvent_TrendingFriendsNav = 3)] =
              "k_EStoreUsabilityEvent_TrendingFriendsNav"),
            (e[(e.k_EStoreUsabilityEvent_RecentlyUpdatedNav = 4)] =
              "k_EStoreUsabilityEvent_RecentlyUpdatedNav"),
            (e[(e.k_EStoreUsabilityEvent_PopularNewReleaseTab = 5)] =
              "k_EStoreUsabilityEvent_PopularNewReleaseTab"),
            (e[(e.k_EStoreUsabilityEvent_TopSellersTab = 6)] =
              "k_EStoreUsabilityEvent_TopSellersTab"),
            (e[(e.k_EStoreUsabilityEvent_UpcomingTab = 7)] =
              "k_EStoreUsabilityEvent_UpcomingTab"),
            (e[(e.k_EStoreUsabilityEvent_SpecialsTab = 8)] =
              "k_EStoreUsabilityEvent_SpecialsTab"),
            (e[(e.k_EStoreUsabilityEvent_UnderTenNav = 9)] =
              "k_EStoreUsabilityEvent_UnderTenNav"),
            (e[(e.k_EStoreUsabilityEvent_IRNav = 10)] =
              "k_EStoreUsabilityEvent_IRNav"),
            (e[(e.k_EStoreUsabilityEvent_CommunityRecommendationsNav = 11)] =
              "k_EStoreUsabilityEvent_CommunityRecommendationsNav"),
            (e[(e.k_EStoreUsabilityEvent_DeepDiveNav = 12)] =
              "k_EStoreUsabilityEvent_DeepDiveNav"),
            (e[(e.k_EStoreUsabilityEvent_App_MoreLikeThisScroll = 1e3)] =
              "k_EStoreUsabilityEvent_App_MoreLikeThisScroll"),
            (e[(e.k_EStoreUsabilityEvent_App_ViewTags = 1001)] =
              "k_EStoreUsabilityEvent_App_ViewTags"),
            (e[(e.k_EStoreUsabilityEvent_App_AllLanguages = 1002)] =
              "k_EStoreUsabilityEvent_App_AllLanguages"),
            (e[(e.k_EStoreUsabilityEvent_App_DeckLearnMore = 1003)] =
              "k_EStoreUsabilityEvent_App_DeckLearnMore"),
            (e[(e.k_EStoreUsabilityEvent_App_BroadcastPlayed = 1004)] =
              "k_EStoreUsabilityEvent_App_BroadcastPlayed"),
            (e[(e.k_EStoreUsabilityEvent_App_BroadcastHidden = 1005)] =
              "k_EStoreUsabilityEvent_App_BroadcastHidden"),
            (e[(e.k_EStoreUsabilityEvent_App_BroadcastMiniClosed = 1006)] =
              "k_EStoreUsabilityEvent_App_BroadcastMiniClosed");
        })(F || (F = {})),
        (function (e) {
          (e[(e.k_EStoreUsabilityFrontPageScroll_Invalid = 0)] =
            "k_EStoreUsabilityFrontPageScroll_Invalid"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_TrendingFriends = 1)] =
              "k_EStoreUsabilityFrontPageScroll_TrendingFriends"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_DiscoveryQueue = 20)] =
              "k_EStoreUsabilityFrontPageScroll_DiscoveryQueue"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_Curators = 40)] =
              "k_EStoreUsabilityFrontPageScroll_Curators"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_RecentUpdated = 60)] =
              "k_EStoreUsabilityFrontPageScroll_RecentUpdated"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_TabGroup = 80)] =
              "k_EStoreUsabilityFrontPageScroll_TabGroup"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_UnderTen = 100)] =
              "k_EStoreUsabilityFrontPageScroll_UnderTen"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_KeepScrolling = 120)] =
              "k_EStoreUsabilityFrontPageScroll_KeepScrolling"),
            (e[(e.k_EStoreUsabilityFrontPageScroll_NoMoreContent = 1e3)] =
              "k_EStoreUsabilityFrontPageScroll_NoMoreContent");
        })(z || (z = {})),
        (function (e) {
          (e[(e.k_EPartnerLinkTrackingStoreLocation_Invalid = 0)] =
            "k_EPartnerLinkTrackingStoreLocation_Invalid"),
            (e[(e.k_EPartnerLinkTrackingStoreLocation_AppPage = 1)] =
              "k_EPartnerLinkTrackingStoreLocation_AppPage"),
            (e[(e.k_EPartnerLinkTrackingStoreLocation_PackagePage = 2)] =
              "k_EPartnerLinkTrackingStoreLocation_PackagePage"),
            (e[(e.k_EPartnerLinkTrackingStoreLocation_AnnouncementPage = 3)] =
              "k_EPartnerLinkTrackingStoreLocation_AnnouncementPage"),
            (e[(e.k_EPartnerLinkTrackingStoreLocation_SalePage = 4)] =
              "k_EPartnerLinkTrackingStoreLocation_SalePage");
        })(S || (S = {})),
        (function (e) {
          (e[(e.k_EPartnerLinkTrackingBackfillSource_None = 0)] =
            "k_EPartnerLinkTrackingBackfillSource_None"),
            (e[(e.k_EPartnerLinkTrackingBackfillSource_Web = 1)] =
              "k_EPartnerLinkTrackingBackfillSource_Web"),
            (e[(e.k_EPartnerLinkTrackingBackfillSource_Mobile = 2)] =
              "k_EPartnerLinkTrackingBackfillSource_Mobile"),
            (e[(e.k_EPartnerLinkTrackingBackfillSource_Desktop = 3)] =
              "k_EPartnerLinkTrackingBackfillSource_Desktop");
        })(M || (M = {}));
      class E extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.activation_code || a.aR(E.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  activation_code: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  purchase_platform: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  is_request_from_client: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Request";
        }
      }
      class T extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.transactionid || a.aR(T.M()),
            l.initialize(this, e, 0, -1, [18], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  transactionid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  packageid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  purchase_status: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  result_detail: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  transaction_time: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  payment_method: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  base_price: {
                    n: 7,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  total_discount: {
                    n: 8,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  tax: {
                    n: 9,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  shipping: {
                    n: 10,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  currency_code: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  country_code: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_headline: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_string: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_link_text: {
                    n: 15,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_link_url: {
                    n: 16,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  error_appid: {
                    n: 17,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  line_items: { n: 18, c: W, r: !0, q: !0 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo";
        }
      }
      class W extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.packageid || a.aR(W.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  packageid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  line_item_description: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo_LineItem";
        }
      }
      class v extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.purchase_result_details || a.aR(v.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  purchase_result_details: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: T },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Response";
        }
      }
      class C extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.language || a.aR(C.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Request";
        }
      }
      class O extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.tags || a.aR(O.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { tags: { n: 1, c: k, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class k extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.tagid || a.aR(k.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(k.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class j extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.language || a.aR(j.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  tagids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Request";
        }
      }
      class I extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.tags || a.aR(I.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { tags: { n: 1, c: U, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response";
        }
      }
      class U extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.tagid || a.aR(U.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  english_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  name: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  normalized_name: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class P extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.language || a.aR(P.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  have_version_hash: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(P.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Request";
        }
      }
      class A extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.version_hash || a.aR(A.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  version_hash: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  tags: { n: 2, c: X, r: !0, q: !0 },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response";
        }
      }
      class X extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.tagid || a.aR(X.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response_Tag";
        }
      }
      class D extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.os_win || a.aR(D.M()),
            l.initialize(this, e, 0, -1, [10, 16], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  os_win: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  os_mac: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  os_linux: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  full_controller_support: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  native_steam_controller: {
                    n: 8,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_coming_soon: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  excluded_tagids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  exclude_early_access: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_videos: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_software: {
                    n: 13,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_dlc: { n: 14, br: a.FE.readBool, bw: a.Xc.writeBool },
                  exclude_soundtracks: {
                    n: 15,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  featured_tagids: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreDiscoveryQueueSettings";
        }
      }
      class x extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.queue_type || a.aR(x.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  queue_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  rebuild_queue: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  settings_changed: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  settings: { n: 5, c: D },
                  rebuild_queue_if_stale: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  ignore_user_preferences: {
                    n: 8,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  no_experimental_results: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  experimental_cohort: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  debug_get_solr_query: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  store_page_filter: { n: 12, c: s._v },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Request";
        }
      }
      class N extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.appids || a.aR(N.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  settings: { n: 3, c: D },
                  skipped: { n: 4, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  exhausted: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  experimental_cohort: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  debug_solr_query: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(N.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Response";
        }
      }
      class G extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.queue_type || a.aR(G.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  queue_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  store_page_filter: { n: 2, c: s._v },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Request";
        }
      }
      class q extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.country_code || a.aR(q.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  country_code: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  settings: { n: 2, c: D },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Response";
        }
      }
      class L extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.queue_type || a.aR(L.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  queue_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  store_page_filter: { n: 3, c: s._v },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Request";
        }
      }
      class V extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Response";
        }
      }
      class H extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || a.aR(H.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  store_appid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  beta_appid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Request";
        }
      }
      class Q extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.owned || a.aR(Q.M()),
            l.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  owned: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  wishlist: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  ignored: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  following: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  in_queues: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  queues_with_skip: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  queue_items_remaining: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  queue_items_next_appid: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  temporarily_owned: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  queues: { n: 10, c: $, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  beta_status: { n: 12, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class $ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.type || a.aR($.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  skipped: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  items_remaining: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  next_appid: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  experimental_cohort: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class K extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.primary_language || a.aR(K.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  primary_language: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  secondary_languages: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  platform_windows: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  platform_mac: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  platform_linux: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  hide_store_broadcast: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  review_score_preference: {
                    n: 10,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  timestamp_content_descriptor_preferences_updated: {
                    n: 11,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  provide_deck_feedback: {
                    n: 12,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  additional_languages: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(K.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserPreferences";
        }
      }
      class Y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.tags_to_exclude || a.aR(Y.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { tags_to_exclude: { n: 1, c: J, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences";
        }
      }
      class J extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.tagid || a.aR(J.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  timestamp_added: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class Z extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Request";
        }
      }
      class ee extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.preferences || a.aR(ee.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  preferences: { n: 1, c: K },
                  tag_preferences: { n: 2, c: Y },
                  content_descriptor_preferences: { n: 3, c: o.cF },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = a.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class re extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.num_apps || a.aR(re.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  num_apps: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  num_top_friends: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Request";
        }
      }
      class te extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.trending_apps || a.aR(te.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { trending_apps: { n: 1, c: ie, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class ie extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.appid || a.aR(ie.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  steamids_top_friends: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
                  },
                  total_friends: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class ae extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.accountid || a.aR(ae.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  browserid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  backfill_source: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_MigratePartnerLinkTracking_Notification";
        }
      }
      class ne extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || a.aR(ne.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  feedback: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Request";
        }
      }
      class se extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class oe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.appid || a.aR(oe.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Request";
        }
      }
      class le extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.prompt || a.aR(le.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  prompt: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  feedback_eligible: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  existing_feedback: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = a.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(le.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class ce extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.steamid || a.aR(ce.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  queue_type: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  store_page_filter: { n: 3, c: s._v },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Request";
        }
      }
      class ue extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.appids || a.aR(ue.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = a.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Response";
        }
      }
      class me extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.preferences || a.aR(me.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  preferences: { n: 1, c: K },
                  tag_preferences: { n: 2, c: Y },
                  content_descriptor_preferences: { n: 3, c: o.cF },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_StorePreferencesChanged_Notification";
        }
      }
      !(function (e) {
        (e.RegisterCDKey = function (e, r) {
          return e.SendMsg("Store.RegisterCDKey#1", (0, n.MD)(E, r), v, {
            ePrivilege: 1,
          });
        }),
          (e.GetMostPopularTags = function (e, r) {
            return e.SendMsg("Store.GetMostPopularTags#1", (0, n.MD)(C, r), O, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetLocalizedNameForTags = function (e, r) {
            return e.SendMsg(
              "Store.GetLocalizedNameForTags#1",
              (0, n.MD)(j, r),
              I,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTagList = function (e, r) {
            return e.SendMsg("Store.GetTagList#1", (0, n.MD)(P, r), A, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDiscoveryQueue = function (e, r) {
            return e.SendMsg("Store.GetDiscoveryQueue#1", (0, n.MD)(x, r), N, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSettings = function (e, r) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSettings#1",
              (0, n.MD)(G, r),
              q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SkipDiscoveryQueueItem = function (e, r) {
            return e.SendMsg(
              "Store.SkipDiscoveryQueueItem#1",
              (0, n.MD)(L, r),
              V,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserGameInterestState = function (e, r) {
            return e.SendMsg(
              "Store.GetUserGameInterestState#1",
              (0, n.MD)(H, r),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDiscoveryQueueSkippedApps = function (e, r) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSkippedApps#1",
              (0, n.MD)(ce, r),
              ue,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetStorePreferences = function (e, r) {
            return e.SendMsg(
              "Store.GetStorePreferences#1",
              (0, n.MD)(Z, r),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTrendingAppsAmongFriends = function (e, r) {
            return e.SendMsg(
              "Store.GetTrendingAppsAmongFriends#1",
              (0, n.MD)(re, r),
              te,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigratePartnerLinkTracking = function (e, r) {
            return e.SendNotification(
              "Store.MigratePartnerLinkTracking#1",
              (0, n.MD)(ae, r),
              { ePrivilege: 1 },
            );
          }),
          (e.SetCompatibilityFeedback = function (e, r) {
            return e.SendMsg(
              "Store.SetCompatibilityFeedback#1",
              (0, n.MD)(ne, r),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, r) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              (0, n.MD)(oe, r),
              le,
              { ePrivilege: 1 },
            );
          });
      })(R || (R = {})),
        (function (e) {
          e.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: me,
          };
        })(h || (h = {}));
    },
    45735: (e, r, t) => {
      t.d(r, { A_: () => f, Q_: () => w, kI: () => m });
      var i = t(45878),
        a = t(43898),
        n = t(67328);
      const s = i.Message;
      var o, l, c, u, m, d, B;
      !(function (e) {
        (e[(e.k_ETrailerConvertState_Invalid = 0)] =
          "k_ETrailerConvertState_Invalid"),
          (e[(e.k_ETrailerConvertState_Waiting = 1)] =
            "k_ETrailerConvertState_Waiting"),
          (e[(e.k_ETrailerConvertState_Converting = 2)] =
            "k_ETrailerConvertState_Converting"),
          (e[(e.k_ETrailerConvertState_Complete = 3)] =
            "k_ETrailerConvertState_Complete"),
          (e[(e.k_ETrailerConvertState_Failed = 4)] =
            "k_ETrailerConvertState_Failed");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_ETrailerCategory_Invalid = 0)] =
            "k_ETrailerCategory_Invalid"),
            (e[(e.k_ETrailerCategory_Gameplay = 1)] =
              "k_ETrailerCategory_Gameplay"),
            (e[(e.k_ETrailerCategory_Teaser = 2)] =
              "k_ETrailerCategory_Teaser"),
            (e[(e.k_ETrailerCategory_Cinematic = 3)] =
              "k_ETrailerCategory_Cinematic"),
            (e[(e.k_ETrailerCategory_Update = 4)] =
              "k_ETrailerCategory_Update"),
            (e[(e.k_ETrailerCategory_Accolades = 5)] =
              "k_ETrailerCategory_Accolades"),
            (e[(e.k_ETrailerCategory_Interview = 6)] =
              "k_ETrailerCategory_Interview");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EAppTrailerTypeInvalid = 0)] = "k_EAppTrailerTypeInvalid"),
            (e[(e.k_EAppTrailerTypePublisherUploaded = 1)] =
              "k_EAppTrailerTypePublisherUploaded"),
            (e[(e.k_EAppTrailerTypeAutoShow = 2)] =
              "k_EAppTrailerTypeAutoShow"),
            (e[(e.k_EAppTrailerTypeMicrotrailer = 3)] =
              "k_EAppTrailerTypeMicrotrailer");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EAppTrailerStatusInvalid = 0)] =
            "k_EAppTrailerStatusInvalid"),
            (e[(e.k_EAppTrailerStatusHidden = 1)] =
              "k_EAppTrailerStatusHidden"),
            (e[(e.k_EAppTrailerStatusActive = 2)] =
              "k_EAppTrailerStatusActive"),
            (e[(e.k_EAppTrailerStatusDeleted = 3)] =
              "k_EAppTrailerStatusDeleted");
        })(u || (u = {}));
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.video_id || a.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  video_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  client_cellid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.video_id || a.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  video_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  video_url: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.encryption_key || a.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  encryption_key: {
                    n: 1,
                    br: a.FE.readBytes,
                    bw: a.Xc.writeBytes,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.app_id || a.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  app_id: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  client_cellid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.app_id || a.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  app_id: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  opf_settings: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.app_id || a.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  app_id: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  playback_position_in_seconds: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  video_track_id: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  audio_track_id: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  timedtext_track_id: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  last_modified: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  hide_from_watch_history: {
                    n: 7,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  hide_from_library: {
                    n: 8,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "VideoBookmark";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.bookmarks || a.aR(f.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { bookmarks: { n: 1, c: w, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appids || a.aR(F.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  updated_since: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.bookmarks || a.aR(z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { bookmarks: { n: 1, c: w, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      !(function (e) {
        (e.ClientGetVideoURL = function (e, r) {
          return e.SendMsg("Video.ClientGetVideoURL#1", (0, n.MD)(_, r), y, {
            ePrivilege: 1,
          });
        }),
          (e.SetVideoBookmark = function (e, r) {
            return e.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, n.MD)(f, r),
              { ePrivilege: 1 },
            );
          }),
          (e.GetVideoBookmarks = function (e, r) {
            return e.SendMsg("Video.GetVideoBookmarks#1", (0, n.MD)(F, r), z, {
              ePrivilege: 1,
            });
          });
      })(m || (m = {})),
        (function (e) {
          e.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: b,
          };
        })(d || (d = {})),
        (function (e) {
          e.ClientGetOPFSettings = function (e, r) {
            return e.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, n.MD)(p, r),
              g,
              { ePrivilege: 1 },
            );
          };
        })(B || (B = {}));
    },
  },
]);

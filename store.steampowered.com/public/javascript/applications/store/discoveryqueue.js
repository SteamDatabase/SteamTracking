/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    56420: (e) => {
      e.exports = {
        SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
        SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
        none: "T3Fb5KTXwIHM2B-ThTvEs",
        Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
        Large: "_3BESV4eFnr4EnaSaJSdk6T",
        Dim: "rpZ9bKyFXYvNQvgtKn5GV",
        Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
        Z2: "VmQTOrz5MPOWte5C9K7YS",
        Z3: "_29mtadjX8N6pRn5TX1nA0o",
        hoverParent: "_3-8cByP2koYzHwgZqjvFA",
        animating: "_2rXc7hLg6bohWZ-JpRcYEB",
        Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
      };
    },
    18828: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
        threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
        blocked: "VTxPkslK1CSpKNFMgKg7d",
        richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
        playerName: "nOdcT-MoOaXGePXLyPe0H",
        playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
        playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
        richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
        gameName: "_1cB0qtF0paHWWyj1XNcnbG",
        NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
        twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
        DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
        partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
        hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
        compactView: "_3bbRZyUiK-bfc5Qov6xukI",
        noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
        gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
        PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
      };
    },
    70342: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
        MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
      };
    },
    43047: (e) => {
      e.exports = {
        avatarHolder: "nibodjvvrm86uCfnnAn4g",
        avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
        avatar: "_3h-QRJGxnVOIExtHD1R0f2",
        avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
        avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
      };
    },
    71109: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        Y: "_1FD7rgQVEqkzjDjzYa-1BC",
      };
    },
    58632: (e) => {
      "use strict";
      var t,
        a = (function () {
          function e(e, t) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  ".",
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var t = !e || !1 !== e.batch;
                if (!t) return 1;
                var a = e && e.maxBatchSize;
                if (void 0 === a) return 1 / 0;
                if ("number" != typeof a || a < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + a,
                  );
                return a;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return n;
                if ("function" != typeof t)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + t,
                  );
                return t;
              })(t)),
              (this._cacheKeyFn = (function (e) {
                var t = e && e.cacheKeyFn;
                if (void 0 === t)
                  return function (e) {
                    return e;
                  };
                if ("function" != typeof t)
                  throw new TypeError("cacheKeyFn must be a function: " + t);
                return t;
              })(t)),
              (this._cacheMap = (function (e) {
                var t = !e || !1 !== e.cache;
                if (!t) return null;
                var a = e && e.cacheMap;
                if (void 0 === a) return new Map();
                if (null !== a) {
                  var n = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return a && "function" != typeof a[e];
                    },
                  );
                  if (0 !== n.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + n.join(", "),
                    );
                }
                return a;
              })(t)),
              (this._batch = null),
              (this.name = (function (e) {
                if (e && e.name) return e.name;
                return null;
              })(t));
          }
          var t = e.prototype;
          return (
            (t.load = function (e) {
              if (null == e)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(e) +
                    ".",
                );
              var t = (function (e) {
                  var t = e._batch;
                  if (
                    null !== t &&
                    !t.hasDispatched &&
                    t.keys.length < e._maxBatchSize
                  )
                    return t;
                  var a = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = a),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void i(t);
                        var a;
                        try {
                          a = e._batchLoadFn(t.keys);
                        } catch (a) {
                          return r(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(a) +
                                ".",
                            ),
                          );
                        }
                        if (!a || "function" != typeof a.then)
                          return r(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(a) +
                                ".",
                            ),
                          );
                        a.then(function (e) {
                          if (!s(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                ".",
                            );
                          if (e.length !== t.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(t.keys) +
                                "\n\nValues:\n" +
                                String(e),
                            );
                          i(t);
                          for (var a = 0; a < t.callbacks.length; a++) {
                            var n = e[a];
                            n instanceof Error
                              ? t.callbacks[a].reject(n)
                              : t.callbacks[a].resolve(n);
                          }
                        }).catch(function (a) {
                          r(e, t, a);
                        });
                      })(e, a);
                    }),
                    a
                  );
                })(this),
                a = this._cacheMap,
                n = this._cacheKeyFn(e);
              if (a) {
                var o = a.get(n);
                if (o) {
                  var c = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    c.push(function () {
                      e(o);
                    });
                  });
                }
              }
              t.keys.push(e);
              var l = new Promise(function (e, a) {
                t.callbacks.push({ resolve: e, reject: a });
              });
              return a && a.set(n, l), l;
            }),
            (t.loadMany = function (e) {
              if (!s(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    ".",
                );
              for (var t = [], a = 0; a < e.length; a++)
                t.push(
                  this.load(e[a]).catch(function (e) {
                    return e;
                  }),
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var a = this._cacheKeyFn(e);
                t.delete(a);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var a = this._cacheMap;
              if (a) {
                var n,
                  r = this._cacheKeyFn(e);
                if (void 0 === a.get(r))
                  t instanceof Error
                    ? (n = Promise.reject(t)).catch(function () {})
                    : (n = Promise.resolve(t)),
                    a.set(r, n);
              }
              return this;
            }),
            e
          );
        })(),
        n =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (e) {
                t || (t = Promise.resolve()),
                  t.then(function () {
                    process.nextTick(e);
                  });
              }
            : "function" == typeof setImmediate
              ? function (e) {
                  setImmediate(e);
                }
              : function (e) {
                  setTimeout(e);
                };
      function r(e, t, a) {
        i(t);
        for (var n = 0; n < t.keys.length; n++)
          e.clear(t.keys[n]), t.callbacks[n].reject(a);
      }
      function i(e) {
        if (e.cacheHits)
          for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
      }
      function s(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "number" == typeof e.length &&
          (0 === e.length ||
            (e.length > 0 &&
              Object.prototype.hasOwnProperty.call(e, e.length - 1)))
        );
      }
      e.exports = a;
    },
    55909: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => l });
      var n = a(90626),
        r = a(71513),
        i = a(93007),
        s = a(56093),
        o = a(78327),
        c = a(61712);
      function l(e) {
        const { children: t, navTreeRef: a, ...l } = e,
          m = n.useRef(),
          u = (0, s.Ue)(m, a),
          A = (0, o.Qn)(),
          h = window.__virtual_keyboard_client;
        if (A) {
          const e = window.__nav_tree_root;
          return n.createElement(
            r.B2,
            { ...l, navTreeRef: u, secondary: !0, parentEmbeddedNavTree: e },
            n.createElement(
              c.F6,
              { factory: h },
              n.createElement(i.q, null, t),
            ),
          );
        }
        return n.createElement(n.Fragment, null, t);
      }
    },
    34181: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => b, D: () => y });
      var n = a(34629),
        r = a(90626),
        i = a(75844),
        s = a(61859),
        o = a(22837),
        c = a(10622),
        l = a(52038),
        m = a(56420),
        u = a.n(m);
      let A = class extends r.Component {
        static get hoverClass() {
          return u().hoverParent;
        }
        render() {
          const {
            persona: e,
            animating: t,
            className: a,
            size: n,
            dim: i,
            ...s
          } = this.props;
          let o = "";
          return (
            "medium" == n ? (o = u().Medium) : "large" == n && (o = u().Large),
            r.createElement(
              "div",
              {
                className: (0, l.A)(
                  u().SnoozeContainer,
                  e.online_state,
                  a,
                  t && u().animating,
                  o,
                  i && u().Dim,
                ),
                ...s,
              },
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, l.A)(u().SnoozeZ, u().Z1) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, l.A)(u().SnoozeZ, u().Z2) },
                "Z",
              ),
              r.createElement(
                "div",
                { "data-text": "Z", className: (0, l.A)(u().SnoozeZ, u().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      A = (0, n.Cg)([i.PA], A);
      var h = a(12155),
        p = a(70342),
        g = a.n(p),
        d = a(97232);
      const f = (0, i.PA)((e) => {
        const { persona: t, className: a, ...n } = e;
        if (!t) return null;
        if (!t.is_online) return null;
        const i = t.HasStateFlag(512),
          o = t.HasStateFlag(2048),
          m = !o && t.HasStateFlag(1024);
        return r.createElement(
          r.Fragment,
          null,
          i &&
            r.createElement(
              "div",
              {
                className: (0, l.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().MobilePhoneIcon,
                  (0, c.rO)(t),
                ),
                title: (0, s.we)("#Platform_Hint_Mobile"),
                ...n,
              },
              r.createElement(d.rf, null),
            ),
          o &&
            r.createElement(
              "div",
              {
                className: (0, l.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().VRIcon,
                  (0, c.rO)(t),
                ),
                title: (0, s.we)("#Platform_Hint_VR"),
                ...n,
              },
              r.createElement(h.VR, null),
            ),
          m &&
            r.createElement(
              "div",
              {
                className: (0, l.A)(
                  a,
                  g().PersonaStatusIcon,
                  g().BigPictureIcon,
                  (0, c.rO)(t),
                ),
                title: (0, s.we)("#Platform_Hint_BigPicture"),
                ...n,
              },
              r.createElement(h.bPr, null),
            ),
        );
      });
      var E = a(18828),
        v = a.n(E),
        S = a(78327);
      function B(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "span",
            { className: v().partyBeaconJoin },
            (0, s.we)("#User_WantsToPlay"),
          ),
          " – ",
          e.persona.GetCurrentGameName(),
        );
      }
      let y = class extends r.Component {
        render() {
          const {
            className: e,
            onContextMenu: t,
            persona: a,
            eFriendRelationship: n,
            bIsSelf: i,
            bParenthesizeNicknames: m,
            strNickname: u,
            bCompactView: p,
            bHideGameName: g,
            bHideEnhancedRichPresenceLabel: d,
            bHideSnooze: E,
            bHideStatus: y,
            renderStatus: b,
            renderRichPresence: N,
            bHidePersona: Q,
            bDNDSet: D,
            bHasPartyBeacon: w,
            bHasGamePrivacy: C,
            bNoMask: P,
            ...I
          } = this.props;
          let T = null,
            k = null,
            M = null,
            _ = [
              e,
              v().personaNameAndStatusLabel,
              (0, c.rO)(a),
              p && v().compactView,
              P && v().NoMask,
            ];
          w || a.has_public_party_beacon
            ? (k = r.createElement(B, { persona: a }))
            : (0, o.aP)(n)
              ? ((k = (0, s.we)("#PersonaStateBlocked")), _.push(v().blocked))
              : a.is_ingame
                ? ((k =
                    !a.is_in_nonsteam_game || i || (0, o.S$)(n)
                      ? a.GetCurrentGameName()
                      : (0, s.we)("#PersonaStateInNonSteamGame")),
                  i || Q
                    ? i &&
                      a.is_awayOrSnooze &&
                      (M = (0, s.we)("#PersonaStateAway"))
                    : (M = a.GetCurrentGameRichPresence()))
                : a.m_broadcastAccountId &&
                  (k = (0, s.we)("#PersonaStateWatchingBroadcast")),
            k || (k = a.GetLocalizedOnlineStatus()),
            b && (k = b());
          let R = !Q && !E;
          !1 === E && (R = !0),
            a.is_awayOrSnooze && R && (T = r.createElement(A, { persona: a }));
          let F = null;
          t
            ? (F = r.createElement(
                "div",
                { className: "ContextMenuButton", onClick: t },
                r.createElement(h.GB9, null),
              ))
            : _.push(v().noContextMenu),
            Q && _.push(v().hidePersona),
            N && (M = N()),
            (!g && M) || _.push(v().twoLine);
          const L = !a.is_ingame && !y,
            U = !d && M,
            Z = k && (!g || !U),
            G = (0, o.ID)(S.TS.LAUNCHER_TYPE);
          let H = u && !m,
            W = H ? u : a.m_strPlayerName,
            j = !Q && (Z || L) && U;
          return r.createElement(
            "div",
            { ...I, className: (0, l.A)(..._), onContextMenu: t },
            r.createElement(
              "div",
              { className: (0, l.A)(v().statusAndName, j && v().threeLines) },
              r.createElement(
                "div",
                { className: v().playerName },
                W || " ",
                m &&
                  u &&
                  r.createElement(
                    "span",
                    { className: v().playerNickname },
                    "(",
                    u,
                    ")",
                  ),
              ),
              D &&
                r.createElement(
                  "div",
                  {
                    className: v().DNDContainer,
                    title: (0, s.we)("#User_ToggleDoNotDisturb"),
                  },
                  r.createElement(h.Aj0, null),
                ),
              H &&
                r.createElement(
                  "span",
                  {
                    className: v().playerNicknameBracket,
                    title: (0, s.we)("#isNickname"),
                  },
                  " *",
                ),
              r.createElement(f, { persona: a }),
              T,
              (a.m_bPlayerNamePending || a.m_bAvatarPending) &&
                G &&
                r.createElement(
                  "div",
                  {
                    className: v().PendingPersona,
                    title: (0, s.we)("#SteamChina_PendingPersonaName"),
                  },
                  r.createElement(h.zD7, null),
                ),
              F,
            ),
            !Q &&
              r.createElement(
                "div",
                { className: v().richPresenceContainer },
                (Z || L) &&
                  r.createElement(
                    "div",
                    {
                      className: (0, l.A)(
                        v().gameName,
                        j && v().threeLines,
                        v().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    C &&
                      r.createElement(
                        "div",
                        {
                          className: v().gameIsPrivateIcon,
                          title: (0, s.we)("#User_GameInfoHidden"),
                        },
                        r.createElement(h.jZl, null),
                      ),
                    k,
                  ),
                U &&
                  r.createElement(
                    "div",
                    { className: (0, l.A)(v().richPresenceLabel, "no-drag") },
                    M,
                    " ",
                  ),
              ),
          );
        }
      };
      y = (0, n.Cg)([i.PA], y);
      const b = (0, i.PA)((e) => {
        const {
          persona: t,
          bParenthesizeNicknames: a,
          strNickname: n,
          bIgnorePersonaStatus: i,
          className: s,
          ...o
        } = e;
        let m = n && !a ? n : t.m_strPlayerName;
        return r.createElement(
          "span",
          { ...o, className: (0, l.A)(s, !i && (0, c.rO)(t)) },
          r.createElement(
            "span",
            { className: v().playerName },
            m || " ",
            a &&
              n &&
              r.createElement(
                "span",
                { className: v().playerNickname },
                "(",
                n,
                ")",
              ),
          ),
        );
      });
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => g, xz: () => E, $Y: () => f, i8: () => d });
      var n = a(34629),
        r = a(90626),
        i = a(75844),
        s = a(10622),
        o = a(52038),
        c = a(78327),
        l = a(3088);
      const m =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        u =
          a.p +
          "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var A = a(43047),
        h = a.n(A),
        p = a(81393);
      const g = r.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: n,
            statusStyle: i,
            statusPosition: s,
            children: c,
            ...A
          } = e,
          g = r.useMemo(() => {
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
                      return u;
                    default:
                      return (0, p.z)(e, `Unhandled size ${e}`), m;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return r.createElement(
          "div",
          {
            className: (0, o.A)(
              h().avatarHolder,
              "avatarHolder",
              "no-drag",
              a,
              n,
            ),
            ...A,
          },
          r.createElement("div", {
            className: (0, o.A)(h().avatarStatus, "avatarStatus", s),
            style: i,
          }),
          r.createElement(l.c, {
            className: (0, o.A)(h().avatar, "avatar"),
            rgSources: g,
            draggable: !1,
          }),
          c,
        );
      });
      let d = class extends r.Component {
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
              ? (l = c.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
              : e &&
                ((l = e.avatar_url_medium),
                "Small" == t || "X-Small" == t
                  ? (l = e.avatar_url)
                  : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                    (l = e.avatar_url_full)),
            r.createElement(g, {
              strAvatarURL: l,
              size: t,
              className: (0, o.A)((0, s.rO)(e), n),
              ...i,
            })
          );
        }
      };
      d = (0, n.Cg)([i.PA], d);
      const f = (0, i.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: n, ...i } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let s = n ? t.image_large : t.image_small;
        return (
          s || (s = t.image_small),
          s.startsWith("https://") ||
            (s = c.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + s),
          r.createElement(
            "div",
            { className: (0, o.A)(h().avatarFrame, a, "avatarFrame"), ...i },
            r.createElement("img", { className: h().avatarFrameImg, src: s }),
          )
        );
      });
      let E = class extends r.Component {
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
            bParentHovered: o,
            ...c
          } = this.props;
          return (
            c.onClick && (i = { ...i, cursor: "pointer" }),
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
                d,
                { animatedAvatar: t, ...c },
                n,
                r.createElement(f, {
                  profileItem: a,
                  bDisableAnimation: s && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      E = (0, n.Cg)([i.PA], E);
    },
    95034: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bm: () => o,
        QD: () => l,
        f3: () => i,
        iV: () => u,
        ip: () => m,
        le: () => c,
      });
      var n = a(90626),
        r = a(92757);
      function i(e, t) {
        let a;
        "string" == typeof e
          ? (a = e)
          : "location" in e
            ? (a = e.location.search)
            : "search" in e && (a = e.search);
        const n = new URLSearchParams(a.substring(1));
        if (n.has(t)) {
          const e = n.getAll(t);
          return e[e.length - 1];
        }
      }
      const s = (e) => null != e;
      function o(e, t, a, n = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        r.delete(t),
          s(a) && r.append(t, a),
          n
            ? e.replace(`?${r.toString()}`, { ...e.location.state })
            : e.push(`?${r.toString()}`);
      }
      function c(e, t, a) {
        o(e, t, a, !0);
      }
      function l(e, t) {
        const a = (0, r.W6)(),
          c = (0, r.zy)(),
          l = (0, n.useMemo)(() => {
            const a = i(c.search, e);
            return s(a)
              ? s(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== a)
                  : t.constructor(a)
                : a
              : t;
          }, [c.search, e, t]),
          m = (0, n.useCallback)(
            (t) => {
              o(a, e, s(t) ? String(t) : null);
            },
            [a, e],
          );
        return [l, m];
      }
      function m(e, t, a = !1) {
        const n = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const a = t[e];
            n.delete(e), s(a) && n.append(e, a);
          }
        a
          ? e.replace(`?${n.toString()}`, { ...e.location.state })
          : e.push(`?${n.toString()}`);
      }
      function u(e, t) {
        m(e, t, !0);
      }
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
    47554: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => f });
      var n = a(90626),
        r = a(55909),
        i = a(32381),
        s = a(25855),
        o = a(39199),
        c = a(55263),
        l = a(95034),
        m = a(12155),
        u = a(39505),
        A = a(26749),
        h = a(61859),
        p = a(71109),
        g = a.n(p),
        d = a(78327);
      function f(e) {
        const { appID: t } = e,
          a = (0, A.G)(),
          [p] = (0, l.QD)("inqueue", "0"),
          [f, E] = (0, n.useState)(!1),
          [v, S] = (0, n.useState)(!1),
          [B] = (0, c.t7)(t, { include_assets: !0 }),
          y = (0, s.A)(),
          b = n.useRef();
        n.useEffect(() => b.current?.Activate(!0), []);
        const N = (0, d.Qn)(),
          { eStoreDiscoveryQueueType: Q, storePageFilter: D } =
            n.useMemo(() => {
              if (p?.length > 0) {
                const e = p.split("_"),
                  t = Number(e[0]);
                let a;
                return (
                  e.length > 1 && (a = (0, o.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: a }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [p]),
          w = n.useCallback(() => {
            S(!0);
          }, []),
          C = n.useCallback(() => {
            E(!0);
          }, []),
          P = (0, o.WX)(Q, D);
        return a && B
          ? v
            ? null
            : n.createElement(
                r.u,
                {
                  NavigationManager: y,
                  navTreeRef: b,
                  navID: "DiscoveryQueueAppWidget",
                },
                n.createElement(
                  i.Z,
                  {
                    focusable: !0,
                    className: g().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: w,
                    onOKButton: C,
                    onOKActionDescription: (0, h.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, h.we)("#Button_Close"),
                  },
                  n.createElement("img", {
                    className: g().WidgetCapsule,
                    src: B?.GetAssets().GetSmallCapsuleURL(),
                  }),
                  n.createElement(
                    "div",
                    { onClick: C, className: g().WidgetText },
                    (0, h.we)("#DiscoveryQueue_ResumeWizard"),
                    P?.length > 0 && ": " + P,
                  ),
                  !N &&
                    n.createElement(
                      "div",
                      { className: g().CloseButton, onClick: w },
                      n.createElement(m.X, null),
                    ),
                  f &&
                    n.createElement(u.jM, {
                      includeAppID: t,
                      bWizardVisible: f,
                      fnCloseModal: () => E(!1),
                      eStoreDiscoveryQueueType: Q,
                      storePageFilter: D,
                    }),
                ),
              )
          : null;
      }
    },
    25054: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => u });
      var n = a(90626),
        r = a(61859),
        i = a(39505),
        s = a(26749),
        o = a(32381),
        c = a(78327),
        l = a(44325),
        m = a(738);
      function u(e) {
        const t = (0, s.G)(),
          [a, u] = (0, n.useState)(!1),
          A = n.useCallback(() => {
            c.iA.logged_in
              ? u(!0)
              : (0, m.pg)(
                  n.createElement(l.KG, {
                    onOK: () => {
                      window.location.href = `${c.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, r.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, r.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, r.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? n.createElement(
              o.Z,
              null,
              n.createElement(
                "a",
                { onClick: A, className: "experiment-button" },
                (0, r.we)("#DiscoveryQueue_OpenWizard"),
              ),
              a &&
                n.createElement(i.jM, {
                  bWizardVisible: a,
                  fnCloseModal: () => u(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : n.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    30143: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);

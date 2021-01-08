/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "++az": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/Entering_vr.gif?v=valveisgoodatcaching";
    },
    "+9fn": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return l;
      }),
        n.d(t, "a", function () {
          return m;
        });
      var r = n("mrSG"),
        a = n("q1tI"),
        s = n.n(a),
        i = n("exH9"),
        o = n("qbgq"),
        c = n("qX6Y"),
        l = function (e) {
          var t = e.title,
            n = e.subtitle,
            r = e.leftActions,
            a = e.rightActions,
            i = e.children,
            o = t || n || r || a;
          return s.a.createElement(
            "div",
            { className: c.Section },
            o &&
              s.a.createElement(
                "div",
                { className: c.Header },
                s.a.createElement(
                  "div",
                  { className: c.TitlesContainer },
                  s.a.createElement(
                    "div",
                    { className: c.TopRow },
                    s.a.createElement("div", { className: c.SectionTitle }, t),
                    r && s.a.createElement("div", { className: c.Actions }, r),
                    s.a.createElement("div", { className: c.SectionLine }),
                    a && s.a.createElement("div", { className: c.Actions }, a)
                  ),
                  s.a.createElement("div", { className: c.SectionSubtitle }, n)
                )
              ),
            s.a.createElement("div", { className: c.Body }, i)
          );
        },
        m = function (e) {
          var t = e.className,
            n = Object(r.f)(e, ["className"]);
          return s.a.createElement(
            o.a,
            Object(r.a)({ className: Object(i.a)(t, c.ActionButton) }, n)
          );
        };
    },
    "+j4l": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return pe;
      }),
        n.d(t, "a", function () {
          return fe;
        }),
        n.d(t, "b", function () {
          return _e;
        });
      var l = n("mrSG"),
        m = n("q1tI"),
        s = n.n(m),
        r = n("TyAF"),
        a = n("bxiW"),
        o = n("55Ip"),
        u = n("oydz"),
        c = n("Jqb/"),
        d = n("TLQK"),
        p = n("prdU"),
        i = n("ka0M"),
        f = n("X3Ds"),
        _ = n("lkRc"),
        g = n("FwEH"),
        h = n("pQ8y"),
        b = n("r64O"),
        y = n("StxQ"),
        v = n("n4wG"),
        w = n("1fPh"),
        C = n("6Y59"),
        I = n("qbgq"),
        M = n("exH9"),
        j = { success: !0, result: 1 },
        N = (function () {
          function e() {
            (this.m_connection = new E()),
              (this.m_bAllowAccountMismatch = !1),
              (this.m_mapCacheSubscribedApp = new Map());
          }
          return (
            (e.prototype.FailureResult = function (e) {
              void 0 === e && (e = 2);
              var t = { success: !1, result: e };
              return (
                this.m_connection &&
                  !this.m_connection.browser_supported &&
                  (t.browser_unsupported = !0),
                this.m_connection &&
                  !this.m_connection.connected_to_client &&
                  (t.connect_failed = !0),
                7 == e && (t.call_unsupported = !0),
                t
              );
            }),
            (e.prototype.SetAllowAccountMismatch = function (e) {
              this.m_bAllowAccountMismatch = e;
            }),
            (e.prototype.BClientConnected = function () {
              var e = this;
              return this.m_connection.Connect().then(
                function () {
                  return j;
                },
                function () {
                  return e.FailureResult();
                }
              );
            }),
            (e.prototype.BClientSupportsMessage = function (e) {
              return (
                !(
                  !this.m_connection.connected_to_client ||
                  !this.m_connection.ready
                ) &&
                -1 !==
                  this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
              );
            }),
            (e.prototype.OpenFriendChatDialog = function (e) {
              var t = { message: "ShowFriendChatDialog", steamid: e };
              return this.GenericEResultCall(t);
            }),
            (e.prototype.OpenChatRoomGroupDialog = function (e, t) {
              var n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
              return t && (n.chat_room_id = t), this.GenericEResultCall(n);
            }),
            (e.prototype.ShowChatRoomGroupInvite = function (e) {
              var t = { message: "ShowChatRoomGroupInvite", invite_code: e };
              return this.GenericEResultCall(t);
            }),
            (e.prototype.OpenJoinGameDialog = function (e) {
              var t = { message: "ShowJoinGameDialog", friend_id: e };
              return this.GenericEResultCall(t);
            }),
            (e.prototype.BIsSubscribedApp = function (n) {
              var r = this;
              if (this.m_mapCacheSubscribedApp.has(n))
                return Promise.resolve(this.m_mapCacheSubscribedApp.get(n));
              var e = { message: "IsSubscribedApp", appid: n };
              return this.GenericEResultCall(e).then(function (e) {
                if (!e.connect_failed) {
                  var t = 1 == e.result;
                  return r.m_mapCacheSubscribedApp.set(n, t), t;
                }
              });
            }),
            (e.prototype.ViewGameInfoForSteamID = function (e) {
              var t = { message: "ViewGameInfoForSteamID", steamid: e };
              return this.GenericEResultCall(t);
            }),
            (e.prototype.OpenFriendsDialog = function () {
              return this.GenericEResultCall({ message: "OpenFriendsDialog" });
            }),
            (e.prototype.BClientAccountMatches = function () {
              return (
                !_.i.logged_in ||
                _.i.accountid == this.m_connection.ClientInfo.unAccountID
              );
            }),
            (e.prototype.GenericEResultCall = function (e) {
              var t = this;
              return this.m_connection
                .Connect()
                .then(function () {
                  return t.m_bAllowAccountMismatch || t.BClientAccountMatches()
                    ? t.m_connection
                        .SendMsgAndAwaitResponse(e)
                        .then(function (e) {
                          return 1 === e.success
                            ? j
                            : t.FailureResult(e.success);
                        })
                    : { success: !1, result: 19, account_mismatch: !0 };
                })
                .catch(function () {
                  return t.FailureResult();
                });
            }),
            e
          );
        })(),
        E = (function () {
          function e() {
            (this.m_mapWaitingCallbacks = new Map()),
              (this.m_iCallSeq = 1),
              (this.m_bReady = !1),
              (this.m_bClientConnectionFailed = !1),
              (this.m_bSecurityException = !1),
              (this.m_ClientInfo = {
                ulVersion: "",
                bFriendsUIEnabled: !1,
                unAccountID: 0,
                rgSupportedMessages: [],
              });
          }
          return (
            Object.defineProperty(e.prototype, "ClientInfo", {
              get: function () {
                return this.m_ClientInfo;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "ready", {
              get: function () {
                return this.m_bReady;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "browser_supported", {
              get: function () {
                return !this.m_bSecurityException;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "connected_to_client", {
              get: function () {
                return (
                  this.m_socket && this.m_socket.readyState == WebSocket.OPEN
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.SendMsgAndAwaitResponse = function (r) {
              var a = this;
              return new Promise(function (e, t) {
                var n = a.m_iCallSeq++;
                a.BSendMsg(r, n)
                  ? a.m_mapWaitingCallbacks.set(n, {
                      iSeq: n,
                      fnCallback: e,
                      fnError: t,
                    })
                  : t();
              });
            }),
            (e.prototype.BSendMsg = function (e, t) {
              if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
                return !1;
              var n = Object.assign({}, e, {
                universe: _.c.EUNIVERSE,
                accountid: _.i.accountid,
              });
              void 0 !== t && (n.sequenceid = t);
              try {
                return this.m_socket.send(JSON.stringify(n)), !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.OnSocketMessage = function (e) {
              try {
                var t = JSON.parse(e.data);
                if (t.sequenceid) {
                  var n = this.m_mapWaitingCallbacks.get(t.sequenceid);
                  if (n)
                    return (
                      this.m_mapWaitingCallbacks.delete(t.sequenceid),
                      void n.fnCallback(t)
                    );
                }
              } catch (e) {
                console.error("exception parsing response", e);
              }
            }),
            (e.prototype.Connect = function () {
              var r = this;
              if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
                return Promise.resolve();
              if (this.m_promiseConnect) return this.m_promiseConnect;
              var e = new Promise(function (t, n) {
                try {
                  r.m_socket = new WebSocket(
                    "ws://127.0.0.1:27060/clientsocket/"
                  );
                } catch (e) {
                  return (r.m_bSecurityException = !0), void n(e);
                }
                (r.m_socket.onerror = function (e) {
                  n();
                }),
                  (r.m_socket.onmessage = r.OnSocketMessage.bind(r)),
                  (r.m_socket.onopen = function () {
                    r.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                      .then(function (e) {
                        1 == e.success
                          ? ((r.m_ClientInfo.ulVersion = e.clientversion),
                            (r.m_ClientInfo.bFriendsUIEnabled = !!e.friendsui),
                            (r.m_ClientInfo.unAccountID = e.accountid),
                            e.supported_messages &&
                              (r.m_ClientInfo.rgSupportedMessages =
                                e.supported_messages),
                            t())
                          : n();
                      })
                      .catch(n);
                  });
              });
              return (
                (this.m_promiseConnect = e),
                this.m_promiseConnect
                  .then(function () {
                    (r.m_bReady = !0), (r.m_promiseConnect = void 0);
                  })
                  .catch(function () {
                    (r.m_bClientConnectionFailed = !0),
                      (r.m_promiseConnect = void 0);
                  }),
                this.m_promiseConnect
              );
            }),
            e
          );
        })(),
        S = new N();
      window.ClientConnectionAPI = S;
      var O = n("+jy6"),
        A = n("bS9Q"),
        D = n("POwH"),
        x = n.n(D),
        P = n("YyVH");
      function L(e, t, n) {
        return _.c.COMMUNITY_CDN_ASSET_URL + e + "/roomeffects/" + t + "/" + n;
      }
      var B = (function (n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.m_strSaleId = t.props.sale), t;
        }
        return (
          Object(l.d)(e, n),
          (e.prototype.getAsset = function (e) {
            return L(this.m_strSaleId, this.props.effect.name, e);
          }),
          e
        );
      })(m.Component);
      function R(e, t) {
        var n, r;
        (n = function () {
          return setTimeout(e, t);
        }),
          (r = Object(m.useRef)({ bSet: !1 })).current.bSet ||
            (r.current = { bSet: !0, value: n() }),
          r.current.value;
      }
      var T = function (e) {
        var t,
          n,
          r,
          a,
          i = e.msDelay,
          o = e.children;
        return (
          (t = i),
          (n = Object(m.useState)(!1)),
          (r = n[0]),
          (a = n[1]),
          R(function () {
            return a(!0);
          }, t),
          r ? s.a.createElement(s.a.Fragment, null, o) : null
        );
      };
      var z = (function (n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.m_refContainer = s.a.createRef()),
            (t.m_rgFireworks = []),
            (t.m_nCurrentDelay = 0),
            (t.state = { bReady: !1 }),
            t
          );
        }
        return (
          Object(l.d)(e, n),
          (e.prototype.CreateFireworks = function (e) {
            (this.m_nCurrentDelay = 0),
              this.AddCluster(e),
              (this.m_nCurrentDelay += 200),
              this.RenderLong(e),
              (this.m_nCurrentDelay += 200),
              this.AddCluster(e),
              (this.m_nCurrentDelay += 600),
              this.AddCluster(e),
              (this.m_nCurrentDelay += 200),
              this.RenderLong(e),
              (this.m_nCurrentDelay += 200),
              this.RenderLong(e),
              (this.m_nCurrentDelay += 200),
              this.RenderLong(e),
              this.AddCluster(e),
              this.RenderLong(e),
              (this.m_nCurrentDelay += 200),
              this.AddCluster(e);
          }),
          (e.prototype.TestRender = function (e) {
            Object(P.b)(0, 70), Object(P.b)(0, 70);
            for (var t = 0; t < 1; t++)
              this.m_rgFireworks.push({
                x: "20%",
                y: "20%",
                nHueRotation: 0,
                nDelay: this.m_nCurrentDelay,
                flScale: e,
                burst: k,
              }),
                (this.m_nCurrentDelay += 500);
            this.m_rgFireworks.push({
              x: "0%",
              y: "0%",
              nHueRotation: 0,
              nDelay: this.m_nCurrentDelay,
              flScale: e,
              burst: G,
            }),
              this.m_rgFireworks.push({
                x: "30%",
                y: "30%",
                nHueRotation: 0,
                nDelay: this.m_nCurrentDelay,
                flScale: e,
                burst: F,
              });
          }),
          (e.prototype.CalcHueRotation = function () {
            return "lny2020" == this.props.sale
              ? 360 + Object(P.b)(-30, 10)
              : Object(P.b)(0, 360);
          }),
          (e.prototype.AddCluster = function (e) {
            var t = Object(P.b)(-5, 50),
              n = Object(P.b)(-10, 50),
              r = this.CalcHueRotation();
            this.m_rgFireworks.push({
              x: t + "%",
              y: n + "%",
              nHueRotation: r,
              nDelay: this.m_nCurrentDelay,
              flScale: e,
              burst: G,
            });
            for (
              var a = Math.random() * Math.PI * 2,
                i = Math.floor(64 * e),
                o = Math.floor(60 * e),
                s = Math.floor(10 * e),
                c = 0,
                l = 0;
              l < 3;
              l++
            ) {
              var m =
                  "calc( " + t + "% + " + (i + Math.cos(a + c) * o) + "px )",
                u =
                  "calc( " +
                  n +
                  "% + " +
                  (i + (Math.sin(a + c) * o + s)) +
                  "px )";
              l < 2 && (this.m_nCurrentDelay += 200),
                (r = this.CalcHueRotation()),
                this.m_rgFireworks.push({
                  x: m,
                  y: u,
                  nHueRotation: r,
                  nDelay: this.m_nCurrentDelay,
                  flScale: e,
                  burst: F,
                }),
                (c += 2.09);
            }
          }),
          (e.prototype.RenderLong = function (e) {
            var t = Object(P.b)(20, 60),
              n = Object(P.b)(-5, 50),
              r = this.CalcHueRotation();
            this.m_rgFireworks.push({
              x: t + "%",
              y: n + "%",
              nHueRotation: r,
              nDelay: this.m_nCurrentDelay,
              flScale: e,
              burst: k,
            });
          }),
          (e.prototype.componentDidMount = function () {
            var e, t, n, r;
            !this.m_refContainer.current ||
              0 < this.m_rgFireworks.length ||
              ((t = (e = this.m_refContainer.current).offsetWidth),
              (n = e.offsetHeight),
              (r = Object(P.c)(t, 400, 1080, 0.5, 2)),
              (r = Object(P.a)(r, 0.5, 2)),
              console.log(t, n, r),
              this.CreateFireworks(r),
              this.setState({ bReady: !0 }));
          }),
          (e.prototype.render = function () {
            var a = this,
              i = [];
            return (
              this.state.bReady &&
                this.m_rgFireworks.map(function (e, t) {
                  var n = "" + t,
                    r = {
                      top: e.y,
                      left: e.x,
                      filter: "hue-rotate(" + e.nHueRotation + "deg)",
                    };
                  i.push(
                    s.a.createElement(e.burst, {
                      key: n,
                      style: r,
                      msDelay: e.nDelay,
                      scale: e.flScale,
                      sale: a.props.sale,
                    })
                  );
                }),
              s.a.createElement(
                "div",
                { ref: this.m_refContainer, className: x.a.FireworkContainer },
                i
              )
            );
          }),
          e
        );
      })(s.a.Component);
      function k(e) {
        var t = L(e.sale, "fireworks", "long_sheet.png"),
          n = e.style;
        return (
          (n.backgroundImage = "url(" + t + ")"),
          (n.width = 256),
          (n.height = 256),
          (n.animation =
            x.a.fireworkLongX +
            " 0.2s steps(9) 10, " +
            x.a.fireworkLongY +
            " 2.0s steps(10) forwards"),
          (n.transformOrigin = "0 0"),
          (n.transform = "scale( " + e.scale + " )"),
          s.a.createElement(
            T,
            { msDelay: e.msDelay },
            s.a.createElement("div", {
              style: e.style,
              className: x.a.FireworkPNG,
            })
          )
        );
      }
      function G(e) {
        var t = L(e.sale, "fireworks", "big_sheet.png"),
          n = e.style;
        return (
          (n.backgroundImage = "url(" + t + ")"),
          (n.width = 256),
          (n.height = 256),
          (n.animation =
            x.a.fireworkBigX +
            " 0.2s steps(9) 4, " +
            x.a.fireworkBigY +
            " 0.8s steps(4) forwards"),
          (n.transformOrigin = "0 0"),
          (n.transform = "scale( " + e.scale + " )"),
          s.a.createElement(
            T,
            { msDelay: e.msDelay },
            s.a.createElement("div", {
              style: e.style,
              className: x.a.FireworkPNG,
            })
          )
        );
      }
      function F(e) {
        var t = L(e.sale, "fireworks", "small_sheet.png"),
          n = e.style;
        return (
          (n.backgroundImage = "url(" + t + ")"),
          (n.width = 256),
          (n.height = 256),
          (n.animation =
            x.a.fireworkSmallX +
            " 0.15s steps(10) 6, " +
            x.a.fireworkSmallY +
            " 0.9s steps(6) forwards"),
          (n.transformOrigin = "0 0"),
          (n.transform = "scale( " + e.scale / 2 + " )"),
          s.a.createElement(
            T,
            { msDelay: e.msDelay },
            s.a.createElement("div", {
              style: e.style,
              className: x.a.FireworkPNG,
            })
          )
        );
      }
      var U = n("oet2"),
        H = (function (n) {
          function r(e) {
            var t = this;
            return (
              ((t = n.call(this, e) || this).m_x = P.b(0, 70) + "%"),
              (t.m_y = P.b(0, 70) + "%"),
              (t.m_nRotate = Math.floor(90 * Math.random()) - 45),
              (t.m_splatRots = [
                360 * Math.random(),
                360 * Math.random(),
                360 * Math.random(),
              ]),
              (t.m_nPathAnimation = P.b(1, 6)),
              (t.m_nKeyID = r.sm_nUnique++),
              (t.m_strSaleId = "winter2019"),
              t
            );
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.fragment = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = t.map(function (e) {
                return x.a[e];
              });
              return (
                r.push(x.a.snowball_fragment),
                m.createElement("img", {
                  src: this.getAsset(e),
                  className: r.join(" "),
                })
              );
            }),
            (r.prototype.Snowball = function (e, t) {
              for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
              var a = e < 0 ? x.a.SnowballImageCW : x.a.SnowballImageCCW;
              -5 < e && e < 5 && (a = "");
              var i = n.map(function (e) {
                return x.a[e];
              });
              return (
                i.push(x.a.snowball_fragment),
                m.createElement(
                  "div",
                  {
                    style: { display: "inline-block" },
                    className: i.join(" "),
                  },
                  m.createElement("img", {
                    style: { transform: "rotation( 360deg )" },
                    className: x.a.SnowballImage + " " + a,
                    src: this.getAsset(t),
                  })
                )
              );
            }),
            (r.prototype.residue = function () {
              return m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  {
                    style: {
                      transform: "rotate(" + this.m_splatRots[0] + "deg)",
                    },
                  },
                  this.fragment("splat1.png", "snowball-residue")
                ),
                m.createElement(
                  "div",
                  {
                    style: {
                      transform: "rotate(" + this.m_splatRots[1] + "deg)",
                    },
                  },
                  this.fragment("splat2.png", "snowball-residue")
                ),
                m.createElement(
                  "div",
                  {
                    style: {
                      transform: "rotate(" + this.m_splatRots[2] + "deg)",
                    },
                  },
                  this.fragment("splat3.png", "snowball-residue")
                )
              );
            }),
            (r.prototype.render = function () {
              var e = "snowball-path-" + this.m_nPathAnimation,
                t = { animationName: x.a[e] };
              return m.createElement(
                m.Fragment,
                { key: "" + this.m_nKeyID },
                m.createElement(
                  "div",
                  { className: x.a["snowball-path"], style: t },
                  m.createElement(
                    "div",
                    {
                      className: x.a["snowball-container"],
                      style: {
                        left: this.m_x,
                        top: this.m_y,
                        transform: "rotate( " + this.m_nRotate + "deg )",
                      },
                    },
                    this.Snowball(this.m_nRotate, "snowball.png", "snowball"),
                    this.fragment("slide-out-tl.png", "slide-out-tl"),
                    this.fragment("slide-out-tr.png", "slide-out-tr"),
                    this.fragment("slide-out-bottom.png", "slide-out-bottom"),
                    this.residue(),
                    this.fragment(
                      "snowball_1.png",
                      "snowball-chunk",
                      "snowball-chunk-1"
                    ),
                    this.fragment(
                      "snowball_2.png",
                      "snowball-chunk",
                      "snowball-chunk-2"
                    ),
                    this.fragment(
                      "snowball_3.png",
                      "snowball-chunk",
                      "snowball-chunk-3"
                    ),
                    this.fragment(
                      "snowball_4.png",
                      "snowball-chunk",
                      "snowball-chunk-4"
                    )
                  )
                )
              );
            }),
            (r.sm_nUnique = 0),
            r
          );
        })(B),
        W = n("Kw0F");
      function Z(e) {
        var t,
          n,
          r = e.data,
          a = L(e.sale, e.effect.name, r.strImage + ".png"),
          i = null;
        r.SOverlay &&
          ((t = r.SOverlay
            ? L(e.sale, e.effect.name, r.SOverlay.strImage + ".png")
            : null),
          (n = { animationDuration: r.SOverlay.nDuration + "s" }),
          (i = m.createElement("img", {
            src: t,
            className: x.a[r.SOverlay.strClass],
            style: n,
          })));
        var o = {
          animationDuration: r.nDuration + "s",
          animationName: x.a[r.strAnimation],
          marginLeft: r.nOffset + "%",
        };
        return m.createElement(
          "div",
          { style: o, className: x.a.balloons },
          m.createElement("img", {
            src: a,
            style: { maxWidth: "100%", position: "absolute" },
          }),
          i
        );
      }
      var Q = (function (n) {
          function e(e) {
            var t = n.call(this, e) || this;
            switch (((t.m_rgBalloons = []), (t.m_nNextImage = 0), e.sale)) {
              case "lny2020":
                t.m_rgImages = ["orange", "peach", "yellow"];
                break;
              default:
                t.m_rgImages = [
                  "balloon_blue",
                  "balloon_cyan",
                  "balloon_green",
                  "balloon_purple",
                  "balloon_red",
                  "balloon_yellow",
                ];
            }
            return W.g(t.m_rgImages), t.GenerateBalloons(), t;
          }
          return (
            Object(l.d)(e, n),
            (e.prototype.GetNextImage = function () {
              var e = this.m_rgImages[
                this.m_nNextImage % this.m_rgImages.length
              ];
              return this.m_nNextImage++, e;
            }),
            (e.prototype.GenerateDuration = function () {
              return (
                parseFloat(x.a.balloonsDurationS) +
                parseFloat(x.a.balloonsDurationJitterS) * Math.random()
              );
            }),
            (e.prototype.GenerateBalloons = function () {
              this.m_rgBalloons = [];
              for (
                var e = 0,
                  t = ["balloon_small_1", "balloon_small_2", "balloon_small_3"];
                e < t.length;
                e++
              ) {
                var n = t[e],
                  r = P.b(-10, 10);
                this.m_rgBalloons.push(this.GenerateSingleBalloon(n, r));
              }
              var a = [70, 20];
              W.g(a);
              for (
                var i = 20 == a[1],
                  o = 0,
                  s = ["balloon_big_1", "balloon_big_2"];
                o < s.length;
                o++
              ) {
                var n = s[o],
                  c = P.b(-10, 10) + a.pop();
                this.m_rgBalloons.push(this.GenerateSingleBalloon(n, c));
              }
              var l = ["balloon_move_left", "balloon_move_right"][P.b(0, 1)];
              i && (l = "balloon_move_left");
              var m = P.b(-10, 10);
              this.m_rgBalloons.push(this.GenerateSingleBalloon(l, m));
            }),
            (e.prototype.GenerateSingleBalloon = function (e, t) {
              var n = this.GetNextImage(),
                r = {
                  strAnimation: e,
                  strImage: n,
                  nDuration: this.GenerateDuration(),
                  nOffset: t,
                };
              return (
                "lny2020" == this.props.sale &&
                  (r.SOverlay = {
                    strImage: n + "-glow",
                    strClass: "lantern_glow",
                    nDuration: 1 + 4 * Math.random(),
                  }),
                r
              );
            }),
            (e.prototype.render = function () {
              var n = this;
              return m.createElement(
                m.Fragment,
                null,
                this.m_rgBalloons.map(function (e, t) {
                  return m.createElement(Z, {
                    key: "" + t,
                    data: e,
                    effect: n.props.effect,
                    sale: n.m_strSaleId,
                  });
                })
              );
            }),
            e
          );
        })(B),
        Y = (function () {
          function e(e) {
            this.m_seed = e;
          }
          return (
            (e.prototype.next = function () {
              var e = 1e3 * Math.sin(this.m_seed++);
              return e - Math.floor(e);
            }),
            e
          );
        })();
      function V(e) {
        var t = new Y(e),
          n = 0.8 * t.next() + 0.5,
          r = 10 * (t.next() + e) + 10 + "px",
          a = {
            opacity: n,
            width: r,
            height: r,
            margin: 30 * t.next() + 15 + "px",
            filter:
              "hue-rotate(" + (90 * t.next() - 30) + "deg) saturate(100%)",
          },
          i = 1 + Math.floor(5 * t.next()),
          o =
            _.c.COMMUNITY_CDN_ASSET_URL +
            "winter2019/roomeffects/96px/flake_" +
            i +
            ".png";
        return m.createElement("img", { style: a, src: o });
      }
      var q = parseInt(x.a.balloonsDurationMaxMs),
        J = parseInt(x.a.snowballDurationMs);
      function X(t, n) {
        return function () {
          var e =
            _.c.COMMUNITY_CDN_ASSET_URL + n + "/roomeffects/96px/" + t + ".png";
          return m.createElement("img", { style: { width: "100%" }, src: e });
        };
      }
      function K(e, t, n, r) {
        return {
          timeout: n,
          renderButton: X(e, t),
          renderEffectIcon: X(e, t),
          buttonToken: "#ChatEntryButton_Send" + A.e(e),
          locToken: "#ChatRoom_RoomEffect" + A.e(e),
          render: r,
        };
      }
      function $(e, t, n) {
        return K(e, "winter2019", t, n);
      }
      var ee,
        te = {
          lny2020_lanterns: K("lny2020_lanterns", "lny2020", q, function (e) {
            return m.createElement(Q, { effect: e, sale: "lny2020" });
          }),
          lny2020_firework: K("lny2020_firework", "lny2020", 7e3, function () {
            return m.createElement(z, { sale: "lny2020" });
          }),
          lny2020_confetti: K("lny2020_confetti", "lny2020", U.c, function () {
            return m.createElement(U.a, { eType: U.b.LNY2020 });
          }),
          snowball: $("snowball", J, function (e) {
            return m.createElement(H, { effect: e, sale: "winter2019" });
          }),
          balloons: $("balloons", q, function (e) {
            return m.createElement(Q, { effect: e, sale: "winter2019" });
          }),
          confetti: $("confetti", U.c, function () {
            return m.createElement(U.a, { eType: U.b.Default });
          }),
          goldfetti: $("goldfetti", U.c, function () {
            return m.createElement(U.a, { eType: U.b.Gold });
          }),
          firework: $("firework", 7e3, function () {
            return m.createElement(z, { sale: "winter2019" });
          }),
          snow: $("snow", 1e4, function (e) {
            for (var t = [], n = new Y(e.timestamp), r = 0; r < 150; r++) {
              var a = n.next(),
                i = {
                  left: 100 * n.next() + "%",
                  animationDuration: 3 * (1 - a) + 4 + "s",
                  animationDelay: a + 4 * n.next() + "s",
                };
              t.push(
                m.createElement(
                  "div",
                  {
                    key: e.timestamp + "_" + r,
                    style: i,
                    className: Object(M.a)(
                      x.a.Snowflake,
                      x.a["Snowflake-" + (r % 20)]
                    ),
                  },
                  V(a),
                  V(a + 1)
                )
              );
            }
            return m.createElement(m.Fragment, null, " ", t, " ");
          }),
        },
        ne = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.render = function () {
              return m.createElement(
                "div",
                { className: x.a["animation-container"] },
                this.props.effectManager.m_rgRunningEffects.map(function (e) {
                  return m.createElement(
                    m.Fragment,
                    { key: e.timestamp },
                    e.render()
                  );
                })
              );
            }),
            (t = Object(l.c)([r.a], t))
          );
        })(m.Component),
        re = n("2vnA"),
        ae = (function () {
          function t(e, t) {
            if (!t.hasOwnProperty(e))
              throw new Error("Room effect " + e + " is not defined.");
            (this.name = e),
              (this.timestamp = Date.now()),
              (this.settings = t[e]),
              (this.expires = this.timestamp + this.settings.timeout);
          }
          return (
            (t.QueueFor = function (e) {
              return t.k_QueueForEffect[e];
            }),
            (t.prototype.Queue = function () {
              return t.k_QueueForEffect[this.name];
            }),
            (t.prototype.bIsExpired = function () {
              return Date.now() > this.expires;
            }),
            (t.prototype.bIsActive = function () {
              var e = Date.now();
              return this.timestamp <= e && this.expires > e;
            }),
            (t.prototype.iTimeToExpiry = function () {
              return this.expires - Date.now();
            }),
            (t.prototype.render = function () {
              return this.bIsActive() ? this.settings.render(this) : null;
            }),
            (t.k_QueueForEffect = {
              snowball: "snowball",
              snow: "confetti_snow",
              confetti: "confetti_snow",
              goldfetti: "confetti_snow",
              firework: "festive",
              balloons: "festive",
              lny2020_lanterns: "festive",
              lny2020_firework: "festive",
              lny2020_confetti: "confetti_snow",
            }),
            t
          );
        })(),
        ie = (function () {
          function e(e) {
            (this.m_mapRoomEffectQueue = {
              default: [],
              snowball: [],
              confetti_snow: [],
              festive: [],
            }),
              (this.m_rgRunningEffects = []),
              (this.m_effectSettings = e);
          }
          return (
            (e.prototype.AddRoomEffect = function (e) {
              this.QueueRoomEffect(e), this.UpdateRunningRoomEffects();
            }),
            (e.prototype.QueueRoomEffect = function (e) {
              this.m_mapRoomEffectQueue[ae.QueueFor(e)].push(e);
            }),
            (e.prototype.ActivateRoomEffect = function (e) {
              var t = this;
              try {
                var n = new ae(e, this.m_effectSettings);
                this.m_rgRunningEffects.push(n),
                  window.setTimeout(function () {
                    t.UpdateRunningRoomEffects();
                  }, n.iTimeToExpiry() + 100);
              } catch (e) {
                console.log(e);
              }
            }),
            (e.prototype.BIsQueueFull = function (t) {
              return (
                this.m_rgRunningEffects.filter(function (e) {
                  return e.Queue() == t;
                }).length >= e.k_MaxRoomEffectRunning[t]
              );
            }),
            (e.prototype.UpdateRunningRoomEffects = function () {
              for (var e in ((this.m_rgRunningEffects = this.m_rgRunningEffects.filter(
                function (e) {
                  return !e.bIsExpired();
                }
              )),
              this.m_mapRoomEffectQueue))
                for (
                  var t = e;
                  0 < this.m_mapRoomEffectQueue[t].length &&
                  !this.BIsQueueFull(t);

                )
                  this.ActivateRoomEffect(this.m_mapRoomEffectQueue[t].shift());
            }),
            (e.k_MaxRoomEffectRunning = {
              default: 1,
              snowball: 10,
              confetti_snow: 3,
              festive: 10,
            }),
            Object(l.c)([re.C], e.prototype, "m_rgRunningEffects", void 0),
            e
          );
        })(),
        oe = n("cOvF"),
        se = n("Gpul"),
        ce = n("qD+2"),
        le = n("0OaU"),
        me = n("ehaW"),
        ue = n("9+KW");
      function de(e) {
        var t = e.link,
          n = e.className,
          r = Object(l.f)(e, ["link", "className"]),
          a = s.a.useState(!1),
          i = a[0],
          o = a[1];
        return s.a.createElement(
          "div",
          {
            title: Object(d.f)("#ToolTip_CopyLinkToClipboard"),
            className: Object(M.a)(ue.Button, n),
            onClick: function () {
              return (
                ((e = document.createElement("input")).value = t),
                (e.className = ue.HiddenInput),
                document.body.appendChild(e),
                e.select(),
                e.ownerDocument.execCommand("copy"),
                document.body.removeChild(e),
                void o(!0)
              );
              var e;
            },
          },
          s.a.createElement(
            oe.p,
            Object(l.a)({}, r, {
              className: Object(M.a)(ue.Icon),
              "data-flash": i ? 1 : 0,
              onAnimationEnd: function () {
                return o(!1);
              },
            })
          )
        );
      }
      function pe(e, t, n, r) {
        var a = {
          type: 1,
          rewardDefinition: t,
          itemLevel: n,
          desiredItemLevel: n,
        };
        Object(i.b)(
          m.createElement(we, { definition: a, saleitem: r }),
          e ? Object(f.m)(e) : window
        );
      }
      function fe(e, t, n, r) {
        var a = {
          type: 3,
          profileCustomizationType: t,
          itemCount: n,
          itemLevel: r,
          desiredItemLevel: r,
        };
        Object(i.b)(
          m.createElement(we, { definition: a }),
          e ? Object(f.m)(e) : window
        );
      }
      function _e(e, t, n, r) {
        var a = {
          type: 2,
          profileCustomizationType: t,
          itemLevel: n,
          desiredItemLevel: r,
        };
        Object(i.b)(
          m.createElement(we, { definition: a }),
          e ? Object(f.m)(e) : window
        );
      }
      function ge(e) {
        switch (e.type) {
          case 1:
            return 1 == e.rewardDefinition.community_item_class
              ? p.b.Get().GetCostToLevelSeasonalBadge(e.itemLevel || 0)
              : parseInt(e.rewardDefinition.point_cost);
          case 2:
            return p.b.Get().GetUpgradableProfileShowcaseCost();
          case 3:
            return p.b.Get().GetPurchasableProfileShowcaseSlotCost();
        }
        return 0;
      }
      function he(e) {
        return m.createElement(I.a, Object(l.a)({}, e), e.children);
      }
      function be(e) {
        var t = e.point_cost,
          n = e.redeemPoints,
          r = e.closeModal,
          a = m.createElement(
            y.a,
            { size: 1.125, className: u.Cost, amount: t },
            " ",
            0 < t && Object(d.f)("#Rewards_Points")
          );
        return (
          p.b.Get().BIsLoggedIn() ||
            (a = m.createElement("span", null, Object(d.f)("#Button_Login"))),
          m.createElement(
            m.Fragment,
            null,
            m.createElement(he, { className: u.BlueButton, onClick: n }, a),
            m.createElement(
              Fe,
              { closeModal: r },
              Object(d.f)("#Button_Cancel")
            )
          )
        );
      }
      function ye(e) {
        var t = e.closeModal;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            o.b,
            {
              to: w.b.LoyaltyHowItWorks(),
              className: u.BlueButton,
              onClick: t,
            },
            Object(d.f)("#Redeem_NeedToOwnApp")
          ),
          m.createElement(Fe, { closeModal: t }, Object(d.f)("#Button_Cancel"))
        );
      }
      function ve(e) {
        var t = e.closeModal;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            o.b,
            {
              to: w.b.LoyaltyHowItWorks(),
              className: u.BlueButton,
              onClick: t,
            },
            Object(d.f)("#Redeem_HowToGetPoints")
          ),
          m.createElement(Fe, { closeModal: t }, Object(d.f)("#Button_Cancel"))
        );
      }
      var we = (function (n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.m_bShowTransitions = !1),
              (t.m_bIsMounted = !0),
              (t.state = { step: "loading", error: !1, requestInProgress: !1 }),
              (t.m_bShowTransitions = !0),
              (t.m_mutableObjDefinition = t.props.definition),
              t
            );
          }
          return (
            Object(l.d)(e, n),
            (e.prototype.componentDidMount = function () {
              var e = this;
              1 == this.m_mutableObjDefinition.type
                ? p.b
                    .Get()
                    .EnsureCommunityItemInventoryLoaded(
                      this.m_mutableObjDefinition.rewardDefinition.appid
                    )
                    .then(function () {
                      e.SetInitialState();
                    })
                : this.SetInitialState();
            }),
            (e.prototype.componentWillUnmount = function () {
              this.m_bIsMounted = !1;
            }),
            (e.prototype.SetInitialState = function () {
              this.m_bIsMounted &&
                (this.BAlreadyEquipped()
                  ? (this.setState({ step: "equipped" }),
                    (this.m_bShowTransitions = !1))
                  : this.BSkipToEquip()
                  ? (this.setState({ step: "equip" }),
                    (this.m_bShowTransitions = !1))
                  : p.b.Get().BIsLoggedIn() && !this.BCanRedeemPointsForItem()
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
            }),
            (e.prototype.BIsFreeSaleRewardItem = function () {
              return this.props.saleitem && p.b.Get().BIsSaleActive();
            }),
            (e.prototype.BCanRedeemPointsForItem = function () {
              return (function (e) {
                switch (e.type) {
                  case 1:
                    return p.b
                      .Get()
                      .BCanRedeemPointsForItem(e.rewardDefinition);
                  case 2:
                    return p.b
                      .Get()
                      .BCanRedeemPointsForProfileShowcaseUpgrade(
                        e.profileCustomizationType,
                        e.itemLevel
                      );
                  case 3:
                    return p.b
                      .Get()
                      .BCanRedeemPointsForProfileShowcaseSlot(
                        e.profileCustomizationType,
                        e.itemCount
                      );
                }
                return !1;
              })(this.props.definition);
            }),
            (e.prototype.BSkipToCantAfford = function () {
              if (
                2 == this.props.definition.type ||
                3 == this.props.definition.type
              )
                return p.b.Get().BIsLoggedIn() && !this.BCanAffordItem();
              var e =
                p.b
                  .Get()
                  .BRewardOwnedByUser(this.props.definition.rewardDefinition) &&
                2 != this.props.definition.rewardDefinition.type;
              return p.b.Get().BIsLoggedIn() && !e && !this.BCanAffordItem();
            }),
            (e.prototype.BAlreadyEquipped = function () {
              return (function (e) {
                switch (e.type) {
                  case 1:
                    return p.b.Get().BRewardEquippedByUser(e.rewardDefinition);
                  case 2:
                    return !p.b
                      .Get()
                      .BCanRedeemPointsForProfileShowcaseUpgrade(
                        e.profileCustomizationType,
                        e.itemLevel
                      );
                  case 3:
                    return !p.b
                      .Get()
                      .BCanRedeemPointsForProfileShowcaseSlot(
                        e.profileCustomizationType,
                        e.itemCount
                      );
                }
                return !0;
              })(this.props.definition);
            }),
            (e.prototype.BSkipToEquip = function () {
              return (
                2 != this.props.definition.type &&
                3 != this.props.definition.type &&
                !(
                  !p.b
                    .Get()
                    .BRewardOwnedByUser(
                      this.props.definition.rewardDefinition
                    ) ||
                  !(
                    (2 == this.props.definition.rewardDefinition.type &&
                      p.b.Get().GetUserSeasonalBadgeLevel() >=
                        this.props.definition.itemLevel) ||
                    1 == this.props.definition.rewardDefinition.type
                  )
                )
              );
            }),
            (e.prototype.GetPointCost = function () {
              return ge(this.props.definition);
            }),
            (e.prototype.BCanAffordItem = function () {
              return (
                p.b.Get().GetPointsAvailable().getLowBits() >=
                this.GetPointCost()
              );
            }),
            (e.prototype.ShowGenericError = function () {
              this.ShowError(
                Object(d.n)(
                  "#Redeem_Error_Generic",
                  m.createElement(
                    "a",
                    { href: _.c.HELP_BASE_URL },
                    Object(d.f)("#Redeem_Error_SteamSupport")
                  )
                )
              );
            }),
            (e.prototype.ShowError = function (e) {
              e && (this.m_strError = e),
                this.setState({ error: !0, requestInProgress: !1 });
            }),
            (e.prototype.RedeemPoints = function () {
              var n = this;
              if (!this.state.requestInProgress) {
                if (!p.b.Get().BIsLoggedIn())
                  return (
                    this.CloseModal(),
                    void p.b
                      .Get()
                      .ShowLoginDialog(
                        this.props.definition.rewardDefinition
                          ? this.props.definition.rewardDefinition.defid
                          : void 0
                      )
                  );
                switch (
                  (this.setState({ requestInProgress: !0, error: !1 }),
                  this.props.definition.type)
                ) {
                  case 1:
                    switch (this.props.definition.rewardDefinition.type) {
                      case 1:
                        this.BIsFreeSaleRewardItem()
                          ? p.c
                              .Get()
                              .ClaimFreeSaleItem()
                              .then(function (e) {
                                var t;
                                1 == e.eResult
                                  ? ((n.m_mutableObjDefinition.rewardDefinition = p.c
                                      .Get()
                                      .GetClaimedSaleRewardItemDef()),
                                    n.setState({
                                      step: "equip",
                                      requestInProgress: !1,
                                    }))
                                  : null !== (t = e.strMessage) &&
                                    void 0 !== t &&
                                    t.length
                                  ? n.ShowError(e.strMessage)
                                  : n.ShowGenericError();
                              })
                              .catch(this.ShowGenericError)
                          : p.b
                              .Get()
                              .RedeemPointsForItem(
                                this.props.definition.rewardDefinition.defid,
                                this.props.definition.rewardDefinition.appid
                              )
                              .then(function (e) {
                                1 == e.eResult
                                  ? n.setState({
                                      step: "equip",
                                      requestInProgress: !1,
                                    })
                                  : e.strMessage.length
                                  ? n.ShowError(e.strMessage)
                                  : n.ShowGenericError();
                              })
                              .catch(this.ShowGenericError);
                        break;
                      case 4:
                        p.b
                          .Get()
                          .RedeemPointsForCoupon(
                            this.props.definition.rewardDefinition.defid
                          )
                          .then(function (e) {
                            1 == e.eResult
                              ? n.setState({
                                  step: "equip",
                                  requestInProgress: !1,
                                })
                              : n.ShowGenericError();
                          })
                          .catch(this.ShowGenericError);
                        break;
                      case 2:
                        var e = Math.max(
                          this.props.definition.itemLevel -
                            p.b.Get().GetUserSeasonalBadgeLevel(),
                          1
                        );
                        p.b
                          .Get()
                          .RedeemPointsForBadge(
                            this.props.definition.rewardDefinition.defid,
                            e
                          )
                          .then(function (e) {
                            1 == e.eResult
                              ? n.setState({
                                  step: "equip",
                                  requestInProgress: !1,
                                })
                              : e.strMessage.length
                              ? n.ShowError(e.strMessage)
                              : n.ShowGenericError();
                          })
                          .catch(this.ShowGenericError);
                    }
                    break;
                  case 2:
                    p.b
                      .Get()
                      .RedeemPointsForProfileShowcaseUpgrade(
                        this.props.definition.profileCustomizationType,
                        this.props.definition.desiredItemLevel
                      )
                      .then(function (e) {
                        1 == e.eResult
                          ? (n.setState({ requestInProgress: !1 }),
                            n.CloseModal())
                          : e.strMessage.length
                          ? n.ShowError(e.strMessage)
                          : n.ShowGenericError();
                      })
                      .catch(this.ShowGenericError);
                    break;
                  case 3:
                    p.b
                      .Get()
                      .RedeemPointsForProfileShowcase(
                        this.props.definition.profileCustomizationType
                      )
                      .then(function (e) {
                        1 == e.eResult
                          ? n.CloseModal()
                          : e.strMessage.length
                          ? n.ShowError(e.strMessage)
                          : n.ShowGenericError();
                      })
                      .catch(this.ShowGenericError);
                }
              }
            }),
            (e.prototype.EquipItem = function () {
              var t = this;
              if (!this.state.requestInProgress) {
                this.setState({ requestInProgress: !0, error: !1 });
                var e = null;
                switch (
                  this.props.definition.rewardDefinition.community_item_class
                ) {
                  case 3:
                    e = p.b
                      .Get()
                      .SetProfileBackground(
                        this.props.definition.rewardDefinition
                      );
                    break;
                  case 14:
                    e = p.b
                      .Get()
                      .SetAvatarFrame(this.props.definition.rewardDefinition);
                    break;
                  case 15:
                    e = p.b
                      .Get()
                      .SetAnimatedAvatar(
                        this.props.definition.rewardDefinition
                      );
                    break;
                  case 13:
                    e = p.b
                      .Get()
                      .SetMiniProfileBackground(
                        this.props.definition.rewardDefinition
                      );
                    break;
                  case 8:
                    e = p.b
                      .Get()
                      .ActivateProfileModifier(
                        this.props.definition.rewardDefinition
                      );
                    break;
                  default:
                    return void Object(b.a)(
                      !1,
                      "Missing equip handler for item class " +
                        this.props.definition.rewardDefinition
                          .community_item_class
                    );
                }
                e.then(function (e) {
                  1 == e.eResult
                    ? t.setState({ step: "equipped", requestInProgress: !1 })
                    : t.ShowGenericError();
                }).catch(this.ShowGenericError);
              }
            }),
            (e.prototype.CloseModal = function () {
              this.props.closeModal && this.props.closeModal();
            }),
            (e.prototype.GetDisplayName = function () {
              return 2 == this.props.definition.type ||
                3 == this.props.definition.type
                ? Object(d.f)(
                    "#ProfileShowcases_ShowcaseName",
                    Object(d.f)(
                      "#ProfileShowcases_Type_" +
                        this.props.definition.profileCustomizationType
                    )
                  )
                : Ce(this.m_mutableObjDefinition.rewardDefinition);
            }),
            (e.prototype.GetItemClassName = function () {
              switch (this.props.definition.type) {
                case 2:
                  return this.BCanRedeemPointsForItem()
                    ? Object(d.f)(
                        "#ProfileShowcases_UpgradeLevel",
                        this.props.definition.itemLevel,
                        this.props.definition.desiredItemLevel
                      )
                    : Object(d.f)(
                        "#ProfileShowcases_UpgradeAtMaxLevel",
                        this.props.definition.itemLevel
                      );
                case 3:
                  return Object(d.f)("#ProfileShowcases_AdditionalSlot");
                case 1:
                  if (
                    1 == this.props.definition.rewardDefinition.type ||
                    2 == this.props.definition.rewardDefinition.type
                  )
                    return Object(p.d)(
                      this.props.definition.rewardDefinition
                        .community_item_class
                    );
              }
              return "";
            }),
            (e.prototype.render = function () {
              var e,
                t = {
                  enter: u.RedeemModalEnter,
                  enterActive: u.RedeemModalEnterActive,
                  exit: u.RedeemModalExit,
                  exitActive: u.RedeemModalExitActive,
                };
              if ("loading" == this.state.step) return null;
              var n = this.GetDisplayName(),
                r = this.GetItemClassName(),
                a = this.props.definition.rewardDefinition
                  ? ce.a.GetAppInfo(
                      this.props.definition.rewardDefinition.appid
                    )
                  : null,
                i =
                  1 ===
                  (null === (e = this.props.definition.rewardDefinition) ||
                  void 0 === e
                    ? void 0
                    : e.type)
                    ? document.location +
                      "/reward/" +
                      this.props.definition.rewardDefinition.defid
                    : null;
              return m.createElement(
                c.g,
                {
                  onEscKeypress: this.CloseModal,
                  bHideCloseIcon: !0,
                  bDestructiveWarning: this.state.error,
                  hideTopBar: !1,
                },
                m.createElement(
                  "div",
                  null,
                  m.createElement(
                    "div",
                    { className: u.ModalContainer },
                    m.createElement(
                      "div",
                      { className: u.HeaderContainer },
                      m.createElement(
                        "div",
                        { className: u.Left },
                        m.createElement(
                          "div",
                          { className: u.Header },
                          n,
                          i &&
                            m.createElement(de, {
                              link: i,
                              style: { marginLeft: "8px" },
                            })
                        ),
                        m.createElement("div", { className: u.SubHeader }, r),
                        a &&
                          m.createElement(
                            o.b,
                            {
                              to: w.b.LoyaltyStore() + "/app/" + a.appid,
                              onClick: this.CloseModal,
                            },
                            m.createElement(
                              "div",
                              { className: u.SubHeaderAppContainer },
                              m.createElement("img", {
                                className: u.AppIcon,
                                src: a.icon_url,
                              }),
                              m.createElement(
                                "div",
                                { className: u.SubHeader },
                                " ",
                                a.name,
                                " "
                              )
                            )
                          )
                      ),
                      p.b.Get().BIsLoggedIn() &&
                        m.createElement(
                          "div",
                          { className: u.PointsContainer },
                          m.createElement(C.F, { className: u.Icon }),
                          m.createElement(
                            "div",
                            { className: u.BalanceColumn },
                            m.createElement(
                              "div",
                              { className: u.Balance },
                              Object(d.f)("#YourBalance")
                            ),
                            m.createElement(
                              "div",
                              { className: u.CurrentPoints },
                              p.b
                                .Get()
                                .GetPointsAvailable()
                                .getLowBits()
                                .toLocaleString(d.e.GetPreferredLocales())
                            )
                          )
                        )
                    ),
                    this.m_strError &&
                      m.createElement(
                        "div",
                        { className: u.ErrorContainer },
                        this.m_strError
                      ),
                    m.createElement(
                      g.a,
                      null,
                      m.createElement(
                        h.a,
                        {
                          key: this.state.step,
                          enter: this.m_bShowTransitions,
                          exit: this.m_bShowTransitions,
                          classNames: t,
                          timeout: 500,
                        },
                        m.createElement(Re, {
                          definition: this.m_mutableObjDefinition,
                          closeModal: this.CloseModal,
                          redeemPoints: this.RedeemPoints,
                          equipItem: this.EquipItem,
                          step: this.state.step,
                          bRequestInProgress: this.state.requestInProgress,
                        })
                      )
                    )
                  )
                )
              );
            }),
            Object(l.c)([a.a], e.prototype, "ShowGenericError", null),
            Object(l.c)([a.a], e.prototype, "ShowError", null),
            Object(l.c)([a.a], e.prototype, "RedeemPoints", null),
            Object(l.c)([a.a], e.prototype, "EquipItem", null),
            Object(l.c)([a.a], e.prototype, "CloseModal", null),
            (e = Object(l.c)([r.a], e))
          );
        })(m.Component),
        Ce = function (e) {
          return 1 == e.type
            ? (Object(b.a)(
                e.community_item_data,
                "Missing community item data for virtual item " + e.defid
              ),
              e.community_item_data.item_title)
            : 2 == e.type
            ? Object(d.f)("#Redeem_Badge_PrestigeBadge")
            : "Unknown";
        },
        Ie =
          (Object(r.a)(function (e) {
            var t = e.animatedAvatar,
              n = e.persona,
              r = e.strClassName,
              a = {
                size: "FillArea",
                statusPosition: "none",
                className: Object(M.a)(r, u.playerAvatar),
              };
            return m.createElement(
              se.c,
              Object(l.a)({ persona: n, animatedAvatar: t }, a)
            );
          }),
          Object(r.a)(function (e) {
            var t = e.animatedAvatar,
              n = e.avatarFrame,
              r = e.persona,
              a = e.className,
              i = e.strAnimatedAvatarClassName,
              o = {
                size: "FillArea",
                statusPosition: "none",
                className: Object(M.a)(i, u.playerAvatar),
              };
            return m.createElement(
              "div",
              { className: a },
              m.createElement(
                se.c,
                Object(l.a)({ persona: r, animatedAvatar: t }, o),
                m.createElement(se.b, { profileItem: n })
              )
            );
          })),
        Me = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(d.f)("#Redeem_Equip_Chat")
                : "saleitem" == this.props.step
                ? m.createElement(
                    "div",
                    null,
                    Object(d.f)("#WinterSale2020_Redeem_Desc1"),
                    m.createElement("br", null),
                    m.createElement("br", null),
                    Object(d.f)("#WinterSale2020_Redeem_Desc2")
                  )
                : Object(d.f)("#Redeem_UsePoints_Sticker");
            }),
            (t.prototype.GetModalPreview = function () {
              if ("saleitem" == this.props.step)
                return m.createElement(
                  He,
                  { className: u.PreviewSummerSaleCtn, step: this.props.step },
                  m.createElement("img", {
                    className: u.SaleRewardImg,
                    alt: "Free Sale Item",
                    src: O,
                  })
                );
              var e = this.props.definition.rewardDefinition,
                t = {
                  backgroundImage:
                    "url(" +
                    _.c.MEDIA_CDN_COMMUNITY_URL +
                    "images/items/" +
                    e.appid +
                    "/" +
                    e.community_item_data.item_image_small +
                    ")",
                },
                n =
                  _.c.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.appid +
                  "/" +
                  e.community_item_data.item_image_large;
              return m.createElement(
                He,
                { className: u.PreviewChat, step: this.props.step },
                m.createElement("div", { className: u.LargePreview, style: t }),
                m.createElement(We, { icon: n })
              );
            }),
            (t.prototype.render = function () {
              return m.createElement(
                Ye,
                {
                  className: Object(M.a)(
                    u.StickerPreviewContainer,
                    u.ChatPreviewContainer
                  ),
                },
                this.GetModalPreview(),
                m.createElement(Qe, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                m.createElement(
                  Ue,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  m.createElement(ze, { closeModal: this.props.closeModal })
                )
              );
            }),
            t
          );
        })(m.Component),
        je = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(d.f)("#Redeem_Equip_Profile")
                : "equipped" == this.props.step
                ? m.createElement(
                    "div",
                    { className: u.EquippedDesc },
                    Object(d.n)(
                      "#Redeem_Equipped_Background",
                      m.createElement(
                        "span",
                        null,
                        this.props.definition.rewardDefinition
                          .community_item_data.item_title
                      )
                    )
                  )
                : Object(d.f)("#Redeem_UsePoints_Background");
            }),
            (t.prototype.GetPreview = function () {
              var e,
                t,
                n = this.props.definition.rewardDefinition,
                r = {
                  backgroundImage:
                    "url(" +
                    _.c.MEDIA_CDN_COMMUNITY_URL +
                    "images/items/" +
                    n.appid +
                    "/" +
                    n.community_item_data.item_image_large +
                    ")",
                },
                a = m.createElement("div", {
                  className: u.LargePreview,
                  style: r,
                });
              return (
                n.community_item_data.animated &&
                  ((e = n.community_item_data.item_movie_webm),
                  (t = n.community_item_data.item_movie_mp4),
                  (a = m.createElement(
                    "video",
                    {
                      className: u.VideoPreview,
                      playsInline: !0,
                      loop: !0,
                      muted: !0,
                      autoPlay: !0,
                      controls: !1,
                    },
                    m.createElement("source", {
                      src:
                        _.c.MEDIA_CDN_COMMUNITY_URL +
                        "images/items/" +
                        n.appid +
                        "/" +
                        e,
                      type: "video/webm",
                    }),
                    m.createElement("source", {
                      src:
                        _.c.MEDIA_CDN_COMMUNITY_URL +
                        "images/items/" +
                        n.appid +
                        "/" +
                        t,
                      type: "video/mp4",
                    })
                  ))),
                a
              );
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? m.createElement(ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? m.createElement(Ge, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              return m.createElement(
                Ye,
                { className: u.BackgroundPreviewContainer },
                m.createElement(
                  He,
                  {
                    className: u.PreviewBackgroundContainer,
                    step: this.props.step,
                  },
                  m.createElement("div", { className: u.PreviewBackground }),
                  this.GetPreview()
                ),
                m.createElement(Qe, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                m.createElement(
                  Ue,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  this.GetButtons()
                )
              );
            }),
            t
          );
        })(m.Component),
        Ne = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(d.f)("#Redeem_Equip_Chat")
                : Object(d.f)("#Redeem_UsePoints_Emoticon");
            }),
            (t.prototype.render = function () {
              var e = this.props.definition.rewardDefinition,
                t =
                  _.c.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.appid +
                  "/" +
                  e.community_item_data.item_image_small,
                n = {
                  backgroundImage:
                    "url(" +
                    _.c.MEDIA_CDN_COMMUNITY_URL +
                    "images/items/" +
                    e.appid +
                    "/" +
                    e.community_item_data.item_image_large +
                    ")",
                };
              return m.createElement(
                Ye,
                {
                  className: Object(M.a)(
                    u.EmoticonPreviewContainer,
                    u.ChatPreviewContainer
                  ),
                },
                m.createElement(
                  He,
                  { className: u.PreviewChat, step: this.props.step },
                  m.createElement(
                    "div",
                    { className: u.LargePreviewContainer },
                    m.createElement("div", {
                      className: u.LargePreview,
                      style: n,
                    }),
                    m.createElement("div", {
                      className: u.LargePreview,
                      style: n,
                    }),
                    m.createElement("div", {
                      className: u.LargePreview,
                      style: n,
                    })
                  ),
                  m.createElement(We, { icon: t })
                ),
                m.createElement(Qe, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                m.createElement(
                  Ue,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  m.createElement(ze, { closeModal: this.props.closeModal })
                )
              );
            }),
            t
          );
        })(m.Component),
        Ee = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_manager = new ie(te)), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.GetEffectTypeForDefinition = function () {
              return this.props.definition.rewardDefinition
                .internal_description;
            }),
            (e.prototype.GetEffectConfig = function () {
              return te[this.GetEffectTypeForDefinition()];
            }),
            (e.prototype.componentDidMount = function () {
              var e = this,
                t = this.GetEffectTypeForDefinition();
              this.m_manager.AddRoomEffect(t),
                (this.m_interval = window.setInterval(function () {
                  return e.m_manager.AddRoomEffect(t);
                }, this.GetEffectConfig().timeout));
            }),
            (e.prototype.componentWillUnmount = function () {
              window.clearInterval(this.m_interval);
            }),
            (e.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(d.f)("#Redeem_Equip_Chat")
                : Object(d.f)("#Redeem_UsePoints_ChatEffect");
            }),
            (e.prototype.render = function () {
              return m.createElement(
                Ye,
                {
                  className: Object(M.a)(
                    u.EmoticonPreviewContainer,
                    u.ChatPreviewContainer
                  ),
                },
                m.createElement(
                  He,
                  { className: u.PreviewChat, step: this.props.step },
                  m.createElement(
                    "div",
                    { className: u.PreviewEffectContainer },
                    m.createElement(ne, { effectManager: this.m_manager })
                  ),
                  m.createElement(
                    We,
                    null,
                    this.GetEffectConfig().renderButton()
                  )
                ),
                m.createElement(Qe, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                m.createElement(
                  Ue,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  m.createElement(ze, { closeModal: this.props.closeModal })
                )
              );
            }),
            (e = Object(l.c)([r.a], e))
          );
        })(m.Component),
        Se = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(d.f)("#Redeem_Equip_Profile")
                : "equipped" == this.props.step
                ? m.createElement(
                    "div",
                    { className: u.EquippedDesc },
                    Object(d.n)(
                      "#Redeem_Equipped_MiniProfile",
                      m.createElement(
                        "span",
                        null,
                        this.props.definition.rewardDefinition
                          .community_item_data.item_title
                      )
                    )
                  )
                : Object(d.f)("#Redeem_UsePoints_MiniProfile");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? m.createElement(ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? m.createElement(
                    Fe,
                    { closeModal: this.props.closeModal },
                    Object(d.f)("#Button_Close")
                  )
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props.definition.rewardDefinition,
                t = p.b.Get().GetEquippedItems(),
                n = p.b.Get().GetPersonaState(),
                r = m.createElement(Ie, {
                  animatedAvatar: t.animated_avatar,
                  persona: n,
                  avatarFrame: t.avatar_frame,
                  className: u.CurrentAvatar,
                });
              return m.createElement(
                Ye,
                { className: u.MiniProfilePreviewContainer },
                m.createElement(
                  He,
                  {
                    className: u.PreviewBackgroundContainer,
                    step: this.props.step,
                  },
                  m.createElement(
                    "div",
                    { className: u.ProfileContainer },
                    m.createElement(
                      "video",
                      {
                        width: "100%",
                        playsInline: !0,
                        loop: !0,
                        muted: !0,
                        autoPlay: !0,
                        controls: !1,
                      },
                      m.createElement("source", {
                        src:
                          _.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/items/" +
                          e.appid +
                          "/" +
                          e.community_item_data.item_movie_webm,
                        type: "video/webm",
                      }),
                      m.createElement("source", {
                        src:
                          _.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/items/" +
                          e.appid +
                          "/" +
                          e.community_item_data.item_movie_mp4,
                        type: "video/mp4",
                      })
                    ),
                    m.createElement(
                      "div",
                      { className: u.ProfileImage },
                      p.b.Get().BIsLoggedIn() && r
                    ),
                    m.createElement("div", {
                      className: Object(M.a)(
                        u.ImageBlur,
                        "miniprofile_backdropblur"
                      ),
                    })
                  )
                ),
                m.createElement(Qe, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                m.createElement(
                  Ue,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  this.GetButtons()
                )
              );
            }),
            t
          );
        })(m.Component),
        Oe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(d.f)("#Redeem_Equip_Profile")
                : "equipped" == this.props.step
                ? m.createElement(
                    "div",
                    { className: u.EquippedDesc },
                    Object(d.n)(
                      "#Redeem_Equipped_AvatarFrame",
                      m.createElement(
                        "span",
                        null,
                        this.props.definition.rewardDefinition
                          .community_item_data.item_title
                      )
                    )
                  )
                : Object(d.f)("#Redeem_UsePoints_AvatarFrame");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? m.createElement(ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? m.createElement(Ge, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props.definition.rewardDefinition,
                t = p.b.Get().GetEquippedItems(),
                n = p.b.Get().GetPersonaState(),
                r = {
                  appid: e.appid,
                  image_small:
                    "items/" +
                    e.appid +
                    "/" +
                    e.community_item_data.item_image_small,
                },
                a = m.createElement(Ie, {
                  animatedAvatar: t.animated_avatar,
                  persona: n,
                  avatarFrame: r,
                  strAnimatedAvatarClassName: u.CurrentAvatar,
                }),
                i = null;
              return (
                "equipped" != this.props.step &&
                  p.b.Get().BIsLoggedIn() &&
                  (i = m.createElement(
                    "div",
                    { className: u.CurrentlyEquippedAvatarAndFrame },
                    m.createElement(Ie, {
                      className: u.PreviewCurrentAvatar,
                      animatedAvatar: t.animated_avatar,
                      persona: n,
                      avatarFrame: t.avatar_frame,
                      strAnimatedAvatarClassName: u.CurrentAvatar,
                    }),
                    m.createElement(
                      "div",
                      { className: u.CurrentlyEquippedAvatarAndFrameDesc },
                      Object(d.f)("#Redeem_Equipped_CurrentAvatarFrame")
                    )
                  )),
                m.createElement(
                  Ye,
                  { className: u.AvatarPreviewContainer },
                  m.createElement(
                    He,
                    {
                      className: Object(M.a)(
                        u.PreviewBackgroundContainer,
                        u.Frame
                      ),
                      step: this.props.step,
                    },
                    m.createElement(
                      "div",
                      { className: Object(M.a)(u.ItemPreview, u.TopAvatar) },
                      a
                    ),
                    m.createElement(
                      "div",
                      { className: Object(M.a)(u.ItemPreview, u.BottomAvatar) },
                      a
                    )
                  ),
                  i,
                  m.createElement(Qe, {
                    definition: this.props.definition,
                    step: this.props.step,
                    description: this.GetDescription(),
                  }),
                  m.createElement(
                    Ue,
                    {
                      bRequestInProgress: this.props.bRequestInProgress,
                      definition: this.props.definition,
                      step: this.props.step,
                      closeModal: this.props.closeModal,
                      redeemPoints: this.props.redeemPoints,
                    },
                    this.GetButtons()
                  )
                )
              );
            }),
            t
          );
        })(m.Component),
        Ae = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(d.f)("#Redeem_Equip_AnimatedAvatar")
                : "equipped" == this.props.step
                ? m.createElement(
                    "div",
                    { className: u.EquippedDesc },
                    Object(d.n)(
                      "#Redeem_Equipped_AnimatedAvatar",
                      m.createElement(
                        "span",
                        null,
                        this.props.definition.rewardDefinition
                          .community_item_data.item_title
                      )
                    )
                  )
                : Object(d.f)("#Redeem_UsePoints_AnimatedAvatar");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? m.createElement(ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? m.createElement(Ge, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props.definition.rewardDefinition,
                t = p.b.Get().GetEquippedItems(),
                n = p.b.Get().GetPersonaState(),
                r = {
                  appid: e.appid,
                  image_small:
                    "items/" +
                    e.appid +
                    "/" +
                    e.community_item_data.item_image_small,
                },
                a = m.createElement(Ie, {
                  animatedAvatar: r,
                  persona: n,
                  avatarFrame: t.avatar_frame,
                  strAnimatedAvatarClassName: u.CurrentAvatar,
                }),
                i = null;
              return (
                "equipped" != this.props.step &&
                  p.b.Get().BIsLoggedIn() &&
                  (i = m.createElement(
                    "div",
                    { className: u.CurrentlyEquippedAvatarAndFrame },
                    m.createElement(Ie, {
                      className: u.PreviewCurrentAvatar,
                      animatedAvatar: t.animated_avatar,
                      persona: n,
                      avatarFrame: t.avatar_frame,
                      strAnimatedAvatarClassName: u.CurrentAvatar,
                    }),
                    m.createElement(
                      "div",
                      { className: u.CurrentlyEquippedAvatarAndFrameDesc },
                      Object(d.f)("#Redeem_Equipped_CurrentAvatar")
                    )
                  )),
                m.createElement(
                  Ye,
                  { className: u.AvatarPreviewContainer },
                  m.createElement(
                    He,
                    {
                      className: Object(M.a)(
                        u.PreviewBackgroundContainer,
                        u.Animated
                      ),
                      step: this.props.step,
                    },
                    m.createElement(
                      "div",
                      { className: Object(M.a)(u.ItemPreview, u.TopAvatar) },
                      a
                    ),
                    m.createElement(
                      "div",
                      { className: Object(M.a)(u.ItemPreview, u.BottomAvatar) },
                      a
                    )
                  ),
                  i,
                  m.createElement(Qe, {
                    definition: this.props.definition,
                    step: this.props.step,
                    description: this.GetDescription(),
                  }),
                  m.createElement(
                    Ue,
                    {
                      bRequestInProgress: this.props.bRequestInProgress,
                      definition: this.props.definition,
                      step: this.props.step,
                      closeModal: this.props.closeModal,
                      redeemPoints: this.props.redeemPoints,
                    },
                    this.GetButtons()
                  )
                )
              );
            }),
            t
          );
        })(m.Component),
        De = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.GetDescription = function () {
              return Object(d.f)("#Redeem_UsePoints_Badge");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? m.createElement(Ge, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.GetPreviewForLevel = function () {
              var e = p.b.Get().GetUserSeasonalBadgeLevel();
              return "equip" == this.props.step
                ? m.createElement(Ze, {
                    definition: this.props.definition.rewardDefinition,
                    badgeLevel: e,
                    title: Object(d.f)("#Redeem_Badge_CurrentLevel"),
                  })
                : 0 == e
                ? m.createElement(Ze, {
                    definition: this.props.definition.rewardDefinition,
                    badgeLevel: this.props.definition.itemLevel,
                    title: Object(d.f)("#Redeem_Badge_AfterPoints"),
                  })
                : m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(Ze, {
                      definition: this.props.definition.rewardDefinition,
                      badgeLevel: e,
                      title: Object(d.f)("#Redeem_Badge_CurrentLevel"),
                    }),
                    m.createElement(
                      "div",
                      { className: Object(M.a)(u.BadgeColumn, u.ArrowColumn) },
                      m.createElement("div", { className: u.BlueArrow })
                    ),
                    m.createElement(Ze, {
                      definition: this.props.definition.rewardDefinition,
                      badgeLevel: this.props.definition.itemLevel,
                      title: Object(d.f)("#Redeem_Badge_AfterPoints"),
                    })
                  );
            }),
            (t.prototype.render = function () {
              return this.props.definition.rewardDefinition.community_item_data
                .badge_data[this.props.definition.itemLevel - 1]
                ? m.createElement(
                    Ye,
                    { className: u.BadgeItemContainer },
                    m.createElement(
                      He,
                      { className: u.BadgePreviewContainer },
                      this.GetPreviewForLevel()
                    ),
                    m.createElement(Qe, {
                      definition: this.props.definition,
                      step: this.props.step,
                      description: this.GetDescription(),
                    }),
                    m.createElement(
                      Ue,
                      {
                        bRequestInProgress: this.props.bRequestInProgress,
                        definition: this.props.definition,
                        step: this.props.step,
                        closeModal: this.props.closeModal,
                        redeemPoints: this.props.redeemPoints,
                      },
                      this.GetButtons()
                    )
                  )
                : (console.log(
                    "Missing badge level " +
                      this.props.definition.itemLevel +
                      " image"
                  ),
                  null);
            }),
            (t = Object(l.c)([r.a], t))
          );
        })(m.Component),
        xe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(d.f)("#Redeem_Equip_Coupon")
                : Object(d.f)("#Redeem_UsePoints_Coupon");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? m.createElement(ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? m.createElement(Ge, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              return m.createElement(
                Ye,
                { className: u.CouponPreviewContainer },
                m.createElement(He, {
                  className: u.PreviewBackgroundContainer,
                  step: this.props.step,
                }),
                m.createElement(Qe, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                m.createElement(
                  Ue,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  this.GetButtons()
                )
              );
            }),
            t
          );
        })(m.Component),
        Pe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(l.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(d.f)("#Redeem_Equip_GoldenProfile")
                : "equipped" == this.props.step
                ? Object(d.f)("#Redeem_Equipped_GoldenProfile")
                : Object(d.f)("#Redeem_UsePoints_GoldenProfile");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? m.createElement(ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? m.createElement(Ge, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              var e = p.b.Get().GetPersonaState(),
                t = p.b.Get().GetEquippedItems(),
                n = p.b
                  .Get()
                  .GetGoldenProfileConfigForApp(
                    this.props.definition.rewardDefinition.appid
                  );
              if (!n) return null;
              var r = { image_small: n.frame };
              return m.createElement(
                Ye,
                { className: u.GoldenProfileContainer },
                m.createElement(
                  He,
                  {
                    className: u.GoldenProfilePreviewContainer,
                    step: this.props.step,
                  },
                  m.createElement(
                    "div",
                    { className: u.AvatarContainer },
                    m.createElement(se.a, {
                      size: "FillArea",
                      className: u.CurrentAvatar,
                      persona: e,
                      animatedAvatar: t.animated_avatar,
                      avatarFrame: r,
                    })
                  )
                ),
                m.createElement(
                  Qe,
                  {
                    definition: this.props.definition,
                    step: this.props.step,
                    description: this.GetDescription(),
                  },
                  m.createElement(
                    Te,
                    null,
                    Object(d.f)("#Redeem_GoldenProfile_Expiration")
                  )
                ),
                m.createElement(
                  Ue,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  this.GetButtons()
                )
              );
            }),
            t
          );
        })(m.Component),
        Le = (function (n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.OnProfileFrameResized = function (e) {
                e.data.message &&
                  "iframe_dimensions" == e.data.message &&
                  t.setState({ iframeHeight: e.data.height });
              }),
              (t.state = { bLoadedIFrame: !1, iframeHeight: 0 }),
              t
            );
          }
          return (
            Object(l.d)(e, n),
            (e.prototype.componentDidMount = function () {
              window.addEventListener("message", this.OnProfileFrameResized);
            }),
            (e.prototype.componentWillUnmount = function () {
              window.removeEventListener("message", this.OnProfileFrameResized);
            }),
            (e.prototype.OnProfileFrameLoaded = function () {
              this.setState({ bLoadedIFrame: !0 });
            }),
            (e.prototype.GetDescription = function () {
              var e = Object(d.f)(
                "#ProfileShowcases_Type_" +
                  this.props.definition.profileCustomizationType
              );
              if ("equipped" == this.props.step)
                return 2 == this.props.definition.type
                  ? Object(d.f)(
                      "#Redeem_Equipped_ProfileShowcaseUpgraded",
                      e,
                      this.props.definition.itemLevel
                    )
                  : Object(d.f)(
                      "#Redeem_Equipped_ProfileShowcaseSlotPurchased",
                      e
                    );
              if (2 == this.props.definition.type)
                return Object(d.f)(
                  "#Redeem_UsePoints_ProfileShowcaseUpgrade",
                  this.props.definition.desiredItemLevel
                );
              var t = p.b.Get().GetMaxProfileShowcaseSlots();
              return Object(d.f)(
                "#Redeem_UsePoints_ProfileShowcaseSlot",
                e,
                t + 1
              );
            }),
            (e.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? m.createElement(ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? m.createElement(Ge, { closeModal: this.props.closeModal })
                : null;
            }),
            (e.prototype.GetProfileSteamID = function () {
              return p.b.Get().BIsLoggedIn()
                ? _.i.steamid
                : 2 == _.c.EUNIVERSE
                ? "148618792083695825"
                : "76561197960266962";
            }),
            (e.prototype.render = function () {
              var e = this,
                t = this.state.bLoadedIFrame,
                n = Object(me.b)(
                  this.props.definition.profileCustomizationType
                ),
                r = this.props.definition.profileCustomizationType,
                a = Math.min(
                  this.props.definition.desiredItemLevel
                    ? this.props.definition.desiredItemLevel
                    : this.props.definition.itemLevel,
                  p.b.Get().GetMaxProfileShowcaseUpgradeLevel()
                ),
                i = 0.5 * this.state.iframeHeight;
              return m.createElement(
                Ye,
                { className: u.ProfileShowcaseContainer },
                m.createElement(
                  He,
                  {
                    className: Object(M.a)(
                      u.ProfileShowcasePreviewContainer,
                      t ? u.LoadedPreview : u.LoadingPreview
                    ),
                    step: this.props.step,
                  },
                  m.createElement("img", {
                    className: u.ProfileShowcaseIcon,
                    src: n,
                  }),
                  !t &&
                    m.createElement(
                      "div",
                      { className: u.ProfileThrobber },
                      m.createElement(le.a, {
                        position: "center",
                        size: "xlarge",
                        string: Object(d.f)(
                          "#ProfileShowcases_LoadingPreview",
                          Object(d.f)("#ProfileShowcases_Type_" + r)
                        ),
                      })
                    ),
                  m.createElement(
                    "div",
                    {
                      className: u.PreviewShowcasePreviewFrameContainer,
                      style: { height: 0 != i ? i + "px" : "1px" },
                    },
                    m.createElement("iframe", {
                      className: u.PreviewShowcasePreviewFrame,
                      src:
                        _.c.COMMUNITY_BASE_URL +
                        "profiles/" +
                        this.GetProfileSteamID() +
                        "/previewsingleshowcase/?customization_type=" +
                        r +
                        "&level=" +
                        a,
                      frameBorder: 0,
                      scrolling: "no",
                      onLoad: function () {
                        e.OnProfileFrameLoaded();
                      },
                    })
                  )
                ),
                m.createElement(Qe, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                m.createElement(
                  Ue,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  this.GetButtons()
                )
              );
            }),
            e
          );
        })(m.Component),
        Be =
          (((ee = {})[11] = Me),
          (ee[3] = je),
          (ee[4] = Ne),
          (ee[13] = Se),
          (ee[14] = Oe),
          (ee[15] = Ae),
          (ee[1] = De),
          (ee[12] = Ee),
          (ee[8] = Pe),
          ee),
        Re = Object(r.a)(function (e) {
          var t = null;
          switch (e.definition.type) {
            case 3:
            case 2:
              t = Le;
              break;
            case 1:
              t = Be[e.definition.rewardDefinition.community_item_class];
          }
          return t
            ? m.createElement(t, Object(l.a)({}, e))
            : 4 == e.definition.rewardDefinition.type
            ? m.createElement(xe, Object(l.a)({}, e))
            : null;
        }),
        Te = function (e) {
          e.className;
          var t = Object(l.f)(e, ["className"]);
          return m.createElement(
            "div",
            Object(l.a)(
              { className: Object(M.a)(u.WarningTextContainer, e.className) },
              t
            ),
            m.createElement(C.bb, { className: u.TimeWarning }),
            e.children
          );
        },
        ze = function (e) {
          function t() {
            (window.location.href = "steam://open/friends"), n();
          }
          var n = e.closeModal;
          return _.c.IN_CLIENT
            ? m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  he,
                  { className: u.GreenButton, onClick: t },
                  Object(d.f)("#Button_Goto_Chat")
                ),
                m.createElement(
                  Fe,
                  { closeModal: n },
                  Object(d.f)("#Button_Later")
                )
              )
            : m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  he,
                  {
                    className: u.GreenButton,
                    onClick: function () {
                      window.open(
                        _.c.CHAT_BASE_URL + "chat",
                        "height=790,width=1015,resize=yes,scrollbars=yes"
                      ),
                        n();
                    },
                  },
                  Object(d.f)("#Button_Goto_WebChat")
                ),
                m.createElement(
                  he,
                  {
                    className: u.BlueButton,
                    onClick: function () {
                      S.BClientSupportsMessage("OpenFriendsDialog")
                        ? S.OpenFriendsDialog()
                            .then(function (e) {
                              e.success || t();
                            })
                            .catch(t)
                        : t();
                    },
                  },
                  Object(d.f)("#Button_Goto_ClientChat")
                ),
                m.createElement(
                  Fe,
                  { closeModal: n },
                  Object(d.f)("#Button_Later")
                )
              );
        },
        ke = function (e) {
          var t = e.equipItem,
            n = e.closeModal;
          return m.createElement(
            m.Fragment,
            null,
            m.createElement(
              he,
              { className: u.GreenButton, onClick: t },
              Object(d.f)("#Button_Equip")
            ),
            m.createElement(Fe, { closeModal: n }, Object(d.f)("#Button_Later"))
          );
        },
        Ge = function (e) {
          var t = e.closeModal;
          return m.createElement(
            m.Fragment,
            null,
            m.createElement(
              he,
              {
                className: u.BlueButton,
                onClick: function () {
                  return (window.location.href = _.c.COMMUNITY_BASE_URL + "my");
                },
              },
              Object(d.f)("#Button_Goto_Profile")
            ),
            m.createElement(Fe, { closeModal: t }, Object(d.f)("#Button_Close"))
          );
        },
        Fe = function (e) {
          var t = e.closeModal;
          return m.createElement(
            he,
            { className: u.GrayButton, onClick: t },
            e.children
          );
        },
        Ue = function (e) {
          var t,
            n = e.step,
            r = e.definition,
            a = e.closeModal,
            i = e.redeemPoints,
            o = e.bRequestInProgress,
            s = Object(l.f)(e, [
              "step",
              "definition",
              "closeModal",
              "redeemPoints",
              "bRequestInProgress",
            ]),
            c = e.children;
          return (
            o
              ? (c = m.createElement(le.a, {
                  className: u.RedeemThrobber,
                  size: "medium",
                }))
              : "redeem" == n
              ? ((t = ge(r)),
                (c = m.createElement(be, {
                  point_cost: t,
                  redeemPoints: i,
                  closeModal: a,
                })))
              : "cantredeemforapp" == n
              ? (c = m.createElement(ye, { closeModal: a }))
              : "cantafford" == n
              ? (c = m.createElement(ve, { closeModal: a }))
              : "saleitem" == n &&
                (c = m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(
                    he,
                    { className: u.BlueButton, onClick: i },
                    Object(d.f)("#SummerSale_Redeem_Btn")
                  ),
                  m.createElement(
                    Fe,
                    { closeModal: a },
                    Object(d.f)("#Button_Cancel")
                  )
                )),
            m.createElement(
              "div",
              Object(l.a)({ className: u.ItemButtonsContainer }, s),
              c
            )
          );
        },
        He = function (e) {
          e.step;
          var t = e.className,
            n = Object(l.f)(e, ["step", "className"]),
            r = null;
          return (
            "equip" == e.step
              ? (r = m.createElement("div", {
                  className: Object(M.a)(u.GreenCheck, u.PurchasedCheck),
                }))
              : "equipped" == e.step &&
                (r = m.createElement(oe.h, {
                  className: Object(M.a)(u.GreenCheck, u.EquippedCheck),
                })),
            m.createElement(
              "div",
              Object(l.a)(
                { className: Object(M.a)(t, u.ItemPreviewContainer) },
                n
              ),
              r,
              e.children
            )
          );
        },
        We = function (e) {
          var t = e.icon,
            n = Object(l.f)(e, ["icon"]);
          return m.createElement(
            "div",
            Object(l.a)({ className: u.ChatPickerContainer }, n),
            m.createElement(
              "div",
              {
                className: u.IconPreview,
                style: t && { backgroundImage: "url( " + t + " )" },
              },
              e.children
            )
          );
        },
        Ze = function (e) {
          var t = e.definition,
            n = e.badgeLevel,
            r = e.title,
            a = t.community_item_data.badge_data[n - 1].image || "",
            i = u.NextLevel;
          return (
            p.b.Get().GetUserSeasonalBadgeLevel() == n && (i = u.CurrentLevel),
            m.createElement(
              "div",
              { className: u.BadgeColumn },
              m.createElement("div", { className: u.BadgeTitle }, r),
              m.createElement(
                "div",
                { className: u.BadgeDetailsContainer },
                m.createElement(
                  "div",
                  { className: u.BadgeImgContainer },
                  m.createElement("div", {
                    className: u.BadgeImage,
                    style: {
                      backgroundImage: "url( " + Object(v.a)(t.appid, a) + " )",
                    },
                  })
                ),
                m.createElement("div", { className: u.BadgeLine }),
                m.createElement(
                  "div",
                  { className: Object(M.a)(u.BadgeLevelContainer, i) },
                  m.createElement("div", { className: u.BadgeLevelText }, n)
                )
              )
            )
          );
        },
        Qe = function (e) {
          var t,
            n,
            r,
            a = e.definition,
            i = e.step,
            o = e.description,
            s = Object(l.f)(e, ["definition", "step", "description"]),
            c = null;
          return (
            ("equip" != i && "equipped" != i) ||
            !a.rewardDefinition ||
            1 != a.rewardDefinition.type
              ? "cantredeemforapp" == i
                ? ((n = m.createElement(
                    "span",
                    { className: u.NeedAppOwnership },
                    ce.a.GetAppInfo(a.rewardDefinition.appid).name || ""
                  )),
                  (c = m.createElement(
                    "div",
                    { className: Object(M.a)(u.Bold, u.Opacity) },
                    Object(d.n)("#Redeem_CantRedeemItemForApp", n)
                  )))
                : "cantafford" == i &&
                  ((r = ge(a) - p.b.Get().GetPointsAvailable().getLowBits()),
                  (c = m.createElement(
                    "div",
                    { className: Object(M.a)(u.Bold, u.Opacity) },
                    Object(d.f)("#Redeem_CantAfford", r.toLocaleString())
                  )))
              : (t = m.createElement(
                  "div",
                  { className: u.Bold },
                  Object(d.f)("#Redeem_YoursToOwn", Ce(a.rewardDefinition))
                )),
            m.createElement(
              "div",
              Object(l.a)({ className: u.ItemDescription }, s),
              t,
              m.createElement("div", null, o),
              e.children,
              c,
              m.createElement(
                "div",
                { className: u.Small },
                Object(d.f)("#Redeem_RefundWarning")
              )
            )
          );
        },
        Ye = function (e) {
          var t = e.className,
            n = Object(l.f)(e, ["className"]);
          return m.createElement(
            "div",
            Object(l.a)({ className: Object(M.a)(u.ItemWrapper, t) }, n),
            e.children
          );
        };
    },
    "+jy6": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/winter2020_confirm.png?v=valveisgoodatcaching";
    },
    "+m6q": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/csgoChat_128_hugs.png?v=valveisgoodatcaching";
    },
    "/SGo": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/coin_single.png?v=valveisgoodatcaching";
    },
    "/maY": function (e, t, n) {
      e.exports = {
        Container: "rewarditemcarousel_Container_pvOC3",
        Mobile: "rewarditemcarousel_Mobile_rzty9",
        Loading: "rewarditemcarousel_Loading_QUQ-j",
        LeftArrow: "rewarditemcarousel_LeftArrow_qQJ_r",
        RightArrow: "rewarditemcarousel_RightArrow_3vKwr",
        Disabled: "rewarditemcarousel_Disabled_1yQ71",
        Item: "rewarditemcarousel_Item_1J5UB",
      };
    },
    "0FY4": function (e, t, n) {
      e.exports = {
        Header: "index_Header_3dg-U",
        Icon: "index_Icon_M9X6y",
        Title: "index_Title_3m-mu",
        Subtitle: "index_Subtitle_1cFVh",
        Opportunity: "index_Opportunity_1H0LN",
        Img: "index_Img_2KiFg",
      };
    },
    "1ErW": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/witcher_tile_background.png?v=valveisgoodatcaching";
    },
    "1Gs6": function (e, t, n) {
      e.exports = {
        Shell: "globals_Shell_Q9io3",
        ShellScrollParent: "globals_ShellScrollParent_1TznB",
        ShellHeader: "globals_ShellHeader_3M7bf",
        ShellHeaderBrandLink: "globals_ShellHeaderBrandLink_2i53f",
        PointsContainer: "globals_PointsContainer_3C7A8",
        AppFilterContainer: "globals_AppFilterContainer_3G7_B",
        HeaderVerticalDivider: "globals_HeaderVerticalDivider_3xw1C",
        AppFilterLabel: "globals_AppFilterLabel_IXSgc",
        AppFilterIconContainer: "globals_AppFilterIconContainer_1h_Ic",
        AppFilterIcon: "globals_AppFilterIcon_CFiLd",
        FilterInUse: "globals_FilterInUse_CWExc",
        RewardsPointsIcon: "globals_RewardsPointsIcon_1k2fj",
        YourBalanceLabel: "globals_YourBalanceLabel_1DA62",
        RewardsPointsCount: "globals_RewardsPointsCount_3U0OM",
        ShellHeaderBrandName: "globals_ShellHeaderBrandName_MS1bp",
        SvgOverrideColor: "globals_SvgOverrideColor_2sxsf",
        ItemHoverZIndex: "globals_ItemHoverZIndex_3OPQY",
        ActionButton: "globals_ActionButton_FgTBs",
        Icon: "globals_Icon_3XqyI",
      };
    },
    "1U4k": function (e, t, n) {
      e.exports = {
        Shell: "appfilterpopup_Shell_2Vdyc",
        ShellScrollParent: "appfilterpopup_ShellScrollParent_3W0UD",
        ShellHeader: "appfilterpopup_ShellHeader_2rgA4",
        ShellHeaderBrandLink: "appfilterpopup_ShellHeaderBrandLink_WU8Yi",
        PointsContainer: "appfilterpopup_PointsContainer_2FBUX",
        AppFilterContainer: "appfilterpopup_AppFilterContainer_13WnQ",
        HeaderVerticalDivider: "appfilterpopup_HeaderVerticalDivider_3Sv_F",
        AppFilterLabel: "appfilterpopup_AppFilterLabel__E-fV",
        AppFilterIconContainer: "appfilterpopup_AppFilterIconContainer_NeF-u",
        AppFilterIcon: "appfilterpopup_AppFilterIcon_1zRO6",
        FilterInUse: "appfilterpopup_FilterInUse_1hK6-",
        RewardsPointsIcon: "appfilterpopup_RewardsPointsIcon_Oh32n",
        YourBalanceLabel: "appfilterpopup_YourBalanceLabel_n0Znd",
        RewardsPointsCount: "appfilterpopup_RewardsPointsCount_1SWrn",
        ShellHeaderBrandName: "appfilterpopup_ShellHeaderBrandName_2J6Mt",
        SvgOverrideColor: "appfilterpopup_SvgOverrideColor_3ZLgC",
        ItemHoverZIndex: "appfilterpopup_ItemHoverZIndex_32yTZ",
        ActionButton: "appfilterpopup_ActionButton_2XFxd",
        Icon: "appfilterpopup_Icon_2DCZq",
        ManageAppFiltersPopupContextMenu:
          "appfilterpopup_ManageAppFiltersPopupContextMenu_3fMCN",
        ManageAppFiltersPopup: "appfilterpopup_ManageAppFiltersPopup_15xPy",
        HeaderContainer: "appfilterpopup_HeaderContainer_262u2",
        Header: "appfilterpopup_Header_Sj8je",
        AppFilterNoMatches: "appfilterpopup_AppFilterNoMatches_cu2HU",
        AppInputFilterContainer: "appfilterpopup_AppInputFilterContainer_36e7J",
        AppInputFilter: "appfilterpopup_AppInputFilter_LKqz9",
        AppFilterClearButton: "appfilterpopup_AppFilterClearButton_3N2nC",
        AppFilterClearIcon: "appfilterpopup_AppFilterClearIcon_2qZZr",
        AppCheckboxesContainer: "appfilterpopup_AppCheckboxesContainer_3vTjT",
        AppFilterCheckbox: "appfilterpopup_AppFilterCheckbox_1ViTI",
      };
    },
    "1VA/": function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgzIiBoZWlnaHQ9IjEwNyIgdmlld0JveD0iMCAwIDE4MyAxMDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cmVjdCB4PSI0Mi4xNjUiIHk9IjQxLjg1NzQiIHdpZHRoPSIxNDAiIGhlaWdodD0iNjUiIHJ4PSI1IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYxLjMzMSAyNi4xNDI2QzE2MS4zMzEgMjMuMzgxMiAxNTkuMDkyIDIxLjE0MjYgMTU2LjMzMSAyMS4xNDI2SDI2LjE0MjZDMjMuMzgxMiAyMS4xNDI2IDIxLjE0MjYgMjMuMzgxMiAyMS4xNDI2IDI2LjE0MjZWODAuNzE0QzIxLjE0MjYgODMuNDc1NCAyMy4zODEyIDg1LjcxNCAyNi4xNDI2IDg1LjcxNEgyOC44ODY5QzMxLjY0ODQgODUuNzE0IDMzLjg4NjkgODMuNDc1NCAzMy44ODY5IDgwLjcxNFYzOC4wMzczQzMzLjg4NjkgMzUuMjc1OSAzNi4xMjU1IDMzLjAzNzMgMzguODg2OSAzMy4wMzczSDE1Ni4zMzFDMTU5LjA5MiAzMy4wMzczIDE2MS4zMzEgMzAuNzk4NyAxNjEuMzMxIDI4LjAzNzNWMjYuMTQyNloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDAuMTg4IDVDMTQwLjE4OCAyLjIzODU4IDEzNy45NDkgMCAxMzUuMTg4IDBINUMyLjIzODU4IDAgMCAyLjIzODU3IDAgNVY1OS41NzE0QzAgNjIuMzMyOSAyLjIzODU4IDY0LjU3MTQgNSA2NC41NzE0SDcuNzQ0MzZDMTAuNTA1OCA2NC41NzE0IDEyLjc0NDQgNjIuMzMyOSAxMi43NDQ0IDU5LjU3MTRWMTYuODk0N0MxMi43NDQ0IDE0LjEzMzMgMTQuOTgyOSAxMS44OTQ3IDE3Ljc0NDQgMTEuODk0N0gxMzUuMTg4QzEzNy45NDkgMTEuODk0NyAxNDAuMTg4IDkuNjU2MTYgMTQwLjE4OCA2Ljg5NDc0VjVaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTEyLjE2NSIgeTE9IjQxLjg1NzQiIHgyPSIxMTIuMTY1IiB5Mj0iMTA2Ljg1NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC41OCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjkxLjIzNjYiIHkxPSIyMS4xNDI2IiB4Mj0iOTEuMjM2NiIgeTI9Ijg1LjcxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC41OCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9IjcwLjA5NCIgeTE9IjAiIHgyPSI3MC4wOTQiIHkyPSI2NC41NzE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPC9kZWZzPg0KPC9zdmc+DQo=";
    },
    "1aCw": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_23.svg?v=valveisgoodatcaching";
    },
    "1sV+": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_7.svg?v=valveisgoodatcaching";
    },
    "1xRl": function (e, t, n) {
      e.exports = {
        Shell: "loyaltyprimarynav_Shell_2xt7o",
        ShellScrollParent: "loyaltyprimarynav_ShellScrollParent_2PfVs",
        ShellHeader: "loyaltyprimarynav_ShellHeader_2VMec",
        ShellHeaderBrandLink: "loyaltyprimarynav_ShellHeaderBrandLink_2Lq63",
        PointsContainer: "loyaltyprimarynav_PointsContainer_3F5iu",
        AppFilterContainer: "loyaltyprimarynav_AppFilterContainer_5SId0",
        HeaderVerticalDivider: "loyaltyprimarynav_HeaderVerticalDivider_JRz64",
        AppFilterLabel: "loyaltyprimarynav_AppFilterLabel_1T8oZ",
        AppFilterIconContainer:
          "loyaltyprimarynav_AppFilterIconContainer_vqZCf",
        AppFilterIcon: "loyaltyprimarynav_AppFilterIcon_3c-oe",
        FilterInUse: "loyaltyprimarynav_FilterInUse_3HotG",
        RewardsPointsIcon: "loyaltyprimarynav_RewardsPointsIcon_1Sm-X",
        YourBalanceLabel: "loyaltyprimarynav_YourBalanceLabel_2ZMLA",
        RewardsPointsCount: "loyaltyprimarynav_RewardsPointsCount_1jPXB",
        ShellHeaderBrandName: "loyaltyprimarynav_ShellHeaderBrandName_3KB6U",
        SvgOverrideColor: "loyaltyprimarynav_SvgOverrideColor_19bvx",
        ItemHoverZIndex: "loyaltyprimarynav_ItemHoverZIndex_yK2Mj",
        ActionButton: "loyaltyprimarynav_ActionButton_9ZGFy",
        Icon: "loyaltyprimarynav_Icon_2x3yx",
        PrimaryNav: "loyaltyprimarynav_PrimaryNav_1B_k-",
        Line: "loyaltyprimarynav_Line_3pwI9",
        NavItem: "loyaltyprimarynav_NavItem_BVtL0",
        Selected: "loyaltyprimarynav_Selected_2h5Nu",
        SecondaryNavItem: "loyaltyprimarynav_SecondaryNavItem_2mFH5",
        Label: "loyaltyprimarynav_Label_2Cstp",
        Callout: "loyaltyprimarynav_Callout_YOdxt",
        ScrollableTabs: "loyaltyprimarynav_ScrollableTabs_pLIhF",
        ScrollableTabItem: "loyaltyprimarynav_ScrollableTabItem_3jxyN",
      };
    },
    "2y1i": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/dota_shocked_crystal_maiden.png?v=valveisgoodatcaching";
    },
    5351: function (e, t, n) {
      var r = {
        "./icon_showcase_1.svg": "J7z0",
        "./icon_showcase_10.svg": "hq+U",
        "./icon_showcase_11.svg": "zaw7",
        "./icon_showcase_12.svg": "Fw/J",
        "./icon_showcase_13.svg": "Vnj0",
        "./icon_showcase_14.svg": "RvZ5",
        "./icon_showcase_15.svg": "NTEj",
        "./icon_showcase_16.svg": "ywEf",
        "./icon_showcase_17.svg": "BMT+",
        "./icon_showcase_2.svg": "1VA/",
        "./icon_showcase_21.svg": "CeOW",
        "./icon_showcase_22.svg": "mts6",
        "./icon_showcase_23.svg": "1aCw",
        "./icon_showcase_3.svg": "Ayj8",
        "./icon_showcase_4.svg": "IoTS",
        "./icon_showcase_5.svg": "aLBk",
        "./icon_showcase_6.svg": "ICG5",
        "./icon_showcase_7.svg": "1sV+",
        "./icon_showcase_8.svg": "GFoz",
        "./icon_showcase_9.svg": "O9hZ",
      };
      function a(e) {
        var t = i(e);
        return n(t);
      }
      function i(e) {
        if (n.o(r, e)) return r[e];
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = i),
        ((e.exports = a).id = "5351");
    },
    "5pqL": function (e, t, n) {
      e.exports = {
        Shell: "page_Shell_2xIVi",
        ShellScrollParent: "page_ShellScrollParent_ek93B",
        ShellHeader: "page_ShellHeader_2zzZm",
        ShellHeaderBrandLink: "page_ShellHeaderBrandLink_2XSRq",
        PointsContainer: "page_PointsContainer_egZw6",
        AppFilterContainer: "page_AppFilterContainer_trIsu",
        HeaderVerticalDivider: "page_HeaderVerticalDivider_eRymC",
        AppFilterLabel: "page_AppFilterLabel_gANH1",
        AppFilterIconContainer: "page_AppFilterIconContainer_2whub",
        AppFilterIcon: "page_AppFilterIcon_3udHN",
        FilterInUse: "page_FilterInUse_12wdJ",
        RewardsPointsIcon: "page_RewardsPointsIcon_1mOzF",
        YourBalanceLabel: "page_YourBalanceLabel_1Mbxv",
        RewardsPointsCount: "page_RewardsPointsCount_2DgvL",
        ShellHeaderBrandName: "page_ShellHeaderBrandName_16asn",
        SvgOverrideColor: "page_SvgOverrideColor_16JKq",
        ItemHoverZIndex: "page_ItemHoverZIndex_3QRVA",
        ActionButton: "page_ActionButton_3mPNs",
        Icon: "page_Icon_26NJN",
        StandardBackground: "page_StandardBackground_150Um",
        HomeBackground: "page_HomeBackground_1zw0I",
        rotateIdle: "page_rotateIdle_1Ybb2",
        StandardRoot: "page_StandardRoot_3uAuM",
        PageItem: "page_PageItem_2CTon",
        ItemContainer: "page_ItemContainer_1Zwjf",
        ParallaxRoot: "page_ParallaxRoot_wy_GU",
        ParallaxBackground: "page_ParallaxBackground_1vgF7",
        ParallaxAppBackground: "page_ParallaxAppBackground_1mjHi",
        CustomAppBackground: "page_CustomAppBackground_2rtms",
        StandardLayout: "page_StandardLayout_3RDAb",
      };
    },
    "6bk4": function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/float.png?v=valveisgoodatcaching";
    },
    "7JP+": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/hilarious_anim000.png?v=valveisgoodatcaching";
    },
    "7R2k": function (e, t, n) {
      e.exports = {
        ItemHover: "cluster_ItemHover_1hyVD",
        MobileHeroAction: "cluster_MobileHeroAction_nHPO7",
      };
    },
    "8esw": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("q1tI"),
        a = n.n(r),
        i = n("exH9"),
        o = n("UpHR");
      function s(e) {
        var t = e.size;
        return a.a.createElement("div", {
          className: Object(i.a)(
            o.Loading,
            "small" == t && o.Small,
            ("medium" == t || !t) && o.Medium,
            "large" == t && o.Large
          ),
        });
      }
    },
    "8j16": function (e, t, n) {
      e.exports = {
        Shell: "index_Shell_Ke6j3",
        ShellScrollParent: "index_ShellScrollParent_6qJSX",
        ShellHeader: "index_ShellHeader_k366j",
        ShellHeaderBrandLink: "index_ShellHeaderBrandLink_15Zh1",
        PointsContainer: "index_PointsContainer_1rvnu",
        AppFilterContainer: "index_AppFilterContainer_1Dh9O",
        HeaderVerticalDivider: "index_HeaderVerticalDivider_24TsD",
        AppFilterLabel: "index_AppFilterLabel_2bm85",
        AppFilterIconContainer: "index_AppFilterIconContainer_XK5Bh",
        AppFilterIcon: "index_AppFilterIcon_1Mpes",
        FilterInUse: "index_FilterInUse_3Fbfr",
        RewardsPointsIcon: "index_RewardsPointsIcon_r6WHs",
        YourBalanceLabel: "index_YourBalanceLabel_3LSEd",
        RewardsPointsCount: "index_RewardsPointsCount_2WS1A",
        ShellHeaderBrandName: "index_ShellHeaderBrandName_39jeN",
        SvgOverrideColor: "index_SvgOverrideColor_26o5C",
        ItemHoverZIndex: "index_ItemHoverZIndex_1BHNs",
        ActionButton: "index_ActionButton_3Gv1-",
        Icon: "index_Icon_2X_pz",
        PageContainer: "index_PageContainer_3IDGl",
        PageHeader: "index_PageHeader_1qSTI",
        SectionHeader: "index_SectionHeader_3C3OE",
        SectionContent: "index_SectionContent_24eAN",
      };
    },
    "8j8b": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/avatarframes_preview.png?v=valveisgoodatcaching";
    },
    "9+KW": function (e, t, n) {
      e.exports = {
        Icon: "copylinkbutton_Icon_1rXAQ",
        flash: "copylinkbutton_flash_3f3Lg",
        HiddenInput: "copylinkbutton_HiddenInput_3XSRL",
      };
    },
    "9Dmu": function (e, t, n) {
      e.exports = {
        Shell: "loyaltypoints_Shell_1Vw70",
        ShellScrollParent: "loyaltypoints_ShellScrollParent_3V1tw",
        ShellHeader: "loyaltypoints_ShellHeader_3JsJ9",
        ShellHeaderBrandLink: "loyaltypoints_ShellHeaderBrandLink_2PoNl",
        PointsContainer: "loyaltypoints_PointsContainer_2tFNE",
        AppFilterContainer: "loyaltypoints_AppFilterContainer_3MeGW",
        HeaderVerticalDivider: "loyaltypoints_HeaderVerticalDivider_1LPPt",
        AppFilterLabel: "loyaltypoints_AppFilterLabel_wDj13",
        AppFilterIconContainer: "loyaltypoints_AppFilterIconContainer_3j5ck",
        AppFilterIcon: "loyaltypoints_AppFilterIcon_3HzcH",
        FilterInUse: "loyaltypoints_FilterInUse_1pl5d",
        RewardsPointsIcon: "loyaltypoints_RewardsPointsIcon_2AjCL",
        YourBalanceLabel: "loyaltypoints_YourBalanceLabel_2D5qh",
        RewardsPointsCount: "loyaltypoints_RewardsPointsCount_3O3RB",
        ShellHeaderBrandName: "loyaltypoints_ShellHeaderBrandName_iSMJp",
        SvgOverrideColor: "loyaltypoints_SvgOverrideColor_3cW4O",
        ItemHoverZIndex: "loyaltypoints_ItemHoverZIndex_1Ae28",
        ActionButton: "loyaltypoints_ActionButton_lz5Rm",
        Icon: "loyaltypoints_Icon_KGxYE",
        Container: "loyaltypoints_Container_3OgqC",
        Amount: "loyaltypoints_Amount_BqFe2",
      };
    },
    "9jkg": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/fancyPants_apng.png?v=valveisgoodatcaching";
    },
    Aqke: function (e, t, r) {
      var a = {
        "./loyalty_brazilian.json": ["jJTi", 72],
        "./loyalty_bulgarian.json": ["YXmX", 73],
        "./loyalty_czech.json": ["Yw6T", 74],
        "./loyalty_danish.json": ["LeJ7", 75],
        "./loyalty_dutch.json": ["3s9e", 76],
        "./loyalty_english.json": ["nz6u", 77],
        "./loyalty_finnish.json": ["cCRj", 78],
        "./loyalty_french.json": ["WjZg", 79],
        "./loyalty_german.json": ["2HFY", 80],
        "./loyalty_greek.json": ["puzw", 81],
        "./loyalty_hungarian.json": ["h+vV", 82],
        "./loyalty_italian.json": ["1xjJ", 83],
        "./loyalty_japanese.json": ["KhFN", 84],
        "./loyalty_koreana.json": ["0T2E", 85],
        "./loyalty_latam.json": ["SFVQ", 86],
        "./loyalty_norwegian.json": ["6qpk", 87],
        "./loyalty_polish.json": ["c9AW", 88],
        "./loyalty_portuguese.json": ["H3eu", 89],
        "./loyalty_romanian.json": ["gt0D", 90],
        "./loyalty_russian.json": ["4nQk", 91],
        "./loyalty_sc_schinese.json": ["0Z0/", 92],
        "./loyalty_schinese.json": ["svug", 93],
        "./loyalty_spanish.json": ["x/nm", 94],
        "./loyalty_swedish.json": ["d/hP", 95],
        "./loyalty_tchinese.json": ["EWje", 96],
        "./loyalty_thai.json": ["SnkP", 97],
        "./loyalty_turkish.json": ["cD82", 98],
        "./loyalty_ukrainian.json": ["jV8j", 99],
        "./loyalty_vietnamese.json": ["TxFk", 100],
      };
      function n(t) {
        if (!r.o(a, t))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = a[t],
          n = e[0];
        return r.e(e[1]).then(function () {
          return r.t(n, 3);
        });
      }
      (n.keys = function () {
        return Object.keys(a);
      }),
        (n.id = "Aqke"),
        (e.exports = n);
    },
    Ayj8: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5IiBoZWlnaHQ9IjEwNyIgdmlld0JveD0iMCAwIDE3OSAxMDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1My41OTUgNS4yMjQyOEMxNTMuMjQ0IDMuOTEyMzcgMTUyLjA1NiAzIDE1MC42OTcgM0g5N0M5NS4zNDMxIDMgOTQgNC4zNDMxNSA5NCA2VjEyQzk0IDEzLjY1NjkgOTUuMzQzMSAxNSA5NyAxNUgxMjVDMTI2LjY1NyAxNSAxMjggMTYuMzQzMSAxMjggMThWOTlDMTI4IDEwMC42NTcgMTI5LjM0MyAxMDIgMTMxIDEwMkgxNzUuNTkxQzE3Ny41NjQgMTAyIDE3OC45OTkgMTAwLjEyOSAxNzguNDg5IDk4LjIyNDNMMTUzLjU5NSA1LjIyNDI4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8cGF0aCBkPSJNMTE1LjQ1MSAyM0g1OEM1OS44MTI2IDQyLjgyNzkgNjYuMDIwNiA0OC4xOTUgNzEuMTI5NSA1Mi42MDIzQzc1LjM1MzQgNTYuMjQ2NCA4MS4xMzkgNjEuMjM1NyA4MS4xMzkgNzEuMDk0OEM4MS4xMzkgODIuNTQ3IDc2Ljg5MjYgOTMuMDE0MiA2OS45MTQ0IDEwMUgxMTUuNDUxQzExNy40MTEgMTAxIDExOSA5OS4zOTg1IDExOSA5Ny40MjI3VjI2LjU3NzNDMTE5IDI0LjYwMTQgMTE3LjQxMiAyMyAxMTUuNDUxIDIzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8cGF0aCBkPSJNNDguMDQ2OCAxNC45MTQ5SDQ4LjUwMjhDNTAuNjkyOCAxNC45MTQ5IDUyLjQ2ODggMTMuMzEyNCA1Mi40Njg4IDExLjMzOFYzLjU3Njg1QzUyLjQ2ODggMS42MDEyIDUwLjY5MjggMCA0OC41MDI4IDBIMjMuNDk3MkMyMS4zMDcyIDAgMTkuNTMxMiAxLjYwMTIgMTkuNTMxMiAzLjU3Njg1VjExLjMzOEMxOS41MzEyIDEzLjMxMjQgMjEuMzA3MiAxNC45MTQ5IDIzLjQ5NzIgMTQuOTE0OUgyMy45NTMyQzIyLjgyNzYgNjMuNzc1OSAwIDU2LjE5NTQgMCA3MS4zMzg1QzAgOTEuMDMyIDE2LjExNzIgMTA3IDM2IDEwN0M1NS44ODI4IDEwNyA3MiA5MS4wMzIgNzIgNzEuMzM4NUM3MiA1Ni4xOTU0IDQ5LjE3MzYgNjMuNzc3MSA0OC4wNDY4IDE0LjkxNDlaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTM2LjI5NyIgeTE9IjMiIHgyPSIxMzYuMjk3IiB5Mj0iMTAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iODguNSIgeTE9IjIzIiB4Mj0iODguNSIgeTI9IjEwMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC41OCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9IjM2IiB5MT0iMCIgeDI9IjM2IiB5Mj0iMTA3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPC9kZWZzPg0KPC9zdmc+DQo=";
    },
    BK9T: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/michelangelo_apng.png?v=valveisgoodatcaching";
    },
    "BMT+": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_17.svg?v=valveisgoodatcaching";
    },
    Bww3: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/heart_warming_anim0000.png?v=valveisgoodatcaching";
    },
    CGeh: function (e, t, s) {
      "use strict";
      s.r(t);
      var g = s("mrSG"),
        l = s("q1tI"),
        h = s.n(l),
        n = s("Ty5D"),
        r = s("1fPh"),
        c = s("lkRc"),
        a = s("WBba"),
        i = s("GKwK"),
        o = s("TyAF"),
        m = s("RV7a"),
        u = s("6Y59"),
        d = s("nXE5"),
        p = s("prdU"),
        f = s("0FY4"),
        _ = s("qD+2"),
        b = s("TLQK"),
        y = Object(o.a)(function () {
          return h.a.createElement(
            d.d,
            null,
            h.a.createElement(
              m.a,
              {
                marginX: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              h.a.createElement(
                m.a,
                {
                  marginY: "xlarge",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  className: f.Header,
                },
                h.a.createElement(u.S, { className: f.Icon }),
                h.a.createElement(
                  "div",
                  { className: f.Title },
                  Object(b.f)("#BonusPoints_Title")
                ),
                h.a.createElement(
                  "div",
                  { className: f.Subtitle },
                  Object(b.f)("#BonusPoints_Description")
                )
              ),
              h.a.createElement(
                m.e,
                { spacing: "small" },
                p.b.Get().active_bonuses.map(function (e) {
                  return h.a.createElement(v, { key: e.bonusid, bonus: e });
                })
              )
            )
          );
        }),
        v = Object(o.a)(function (e) {
          var t = e.bonus,
            n = t.appid,
            r = t.points,
            a = t.timestamp_end,
            i = t.internal_description,
            o = Object(g.f)(e, ["bonus"]),
            s = _.a.GetAppInfo(n),
            c = s.header_image_url,
            l = s.name;
          return h.a.createElement(
            w,
            Object(g.a)(
              {
                imgSrc: c,
                name: l,
                expiration: a,
                description: i,
                pointValue: r,
              },
              o
            )
          );
        }),
        w = function (e) {
          var t = e.imgSrc,
            n = e.name,
            r = e.expiration,
            a = e.description,
            i = e.pointValue,
            o = Object(b.q)(r - Date.now() / 1e3, !0);
          return h.a.createElement(
            m.a,
            {
              paddingX: "small",
              paddingY: "xsmall",
              display: "flex",
              flexDirection: "row",
              className: f.Opportunity,
            },
            h.a.createElement("img", { className: f.Img, src: t }),
            h.a.createElement(
              m.a,
              {
                paddingX: "xsmall",
                display: "flex",
                flexDirection: "column",
                flex: "1",
              },
              h.a.createElement("div", null, n),
              h.a.createElement("div", null, o),
              h.a.createElement("div", null, a)
            ),
            h.a.createElement(
              "div",
              null,
              h.a.createElement(u.S, { className: f.Icon }),
              h.a.createElement("div", null, "+", i)
            )
          );
        },
        C = s("55Ip"),
        I = s("kyHq");
      function M(e) {
        e.children;
        var t = e.iconComponent,
          n = e.descCallout;
        return h.a.createElement(
          "div",
          { className: $.CalloutContainer },
          h.a.createElement(
            "div",
            { className: $.CalloutIconContainer },
            h.a.createElement(t, { className: $.CalloutIcon })
          ),
          h.a.createElement(
            "div",
            { className: $.CalloutText },
            " ",
            Object(b.f)(n),
            " "
          )
        );
      }
      function j(e) {
        return h.a.createElement(
          m.a,
          {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "xlarge",
            className: $.PageContainer,
          },
          h.a.createElement(
            "div",
            { className: $.HeaderText },
            Object(b.f)("#HowItWorks_SteamPoints")
          ),
          h.a.createElement(
            "div",
            { className: $.SubHeaderText },
            Object(b.f)("#HowItWorks_SteamPoints_Desc1")
          ),
          h.a.createElement("img", { src: q, className: $.HeaderImage }),
          h.a.createElement(
            "div",
            { className: $.SubHeaderText },
            Object(b.f)("#HowItWorks_SteamPoints_Desc2")
          )
        );
      }
      function N(e) {
        var t,
          n = Object(b.n)(
            "#HowItWorks_Conversion",
            h.a.createElement("span", null, e.numPoints.toLocaleString()),
            h.a.createElement(
              "span",
              null,
              ((t = e.dollarConversion),
              void 0 === window.GStoreItemData
                ? (console.error("Unable to find GStoreItemData"), null)
                : window.GStoreItemData.fnFormatCurrency(t))
            )
          );
        return h.a.createElement(
          m.a,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: "medium",
            className: $.PageContainer,
          },
          h.a.createElement(
            "div",
            { className: Object(x.a)($.ConvertionSectionTextContainer) },
            h.a.createElement("div", { className: $.PointsConvertion }, n),
            h.a.createElement(
              "div",
              { className: $.SectionSubtitle },
              Object(b.f)("#HowItWorks_How_Desc")
            )
          )
        );
      }
      function E(e) {
        var t = Object(b.n)(
          "#ShopName",
          h.a.createElement("span", null, Object(b.f)("#ShopNamePre")),
          Object(b.f)("#ShopNamePost")
        );
        return h.a.createElement(
          m.a,
          {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "xxlarge",
          },
          h.a.createElement(
            m.a,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              className: $.UsePointsIconContainer,
            },
            h.a.createElement(D.e, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim1),
            }),
            h.a.createElement(u.b, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim2),
            }),
            h.a.createElement(u.c, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim3),
            }),
            h.a.createElement(D.k, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim4),
            }),
            h.a.createElement(u.m, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim5),
            }),
            h.a.createElement(u.k, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim6),
            }),
            h.a.createElement(u.l, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim7),
            }),
            h.a.createElement(D.v, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim8),
            }),
            h.a.createElement(D.e, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim1),
            }),
            h.a.createElement(u.b, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim2),
            }),
            h.a.createElement(u.c, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim3),
            }),
            h.a.createElement(D.k, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim4),
            }),
            h.a.createElement(u.m, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim5),
            }),
            h.a.createElement(u.k, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim6),
            }),
            h.a.createElement(u.l, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim7),
            }),
            h.a.createElement(D.v, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim8),
            }),
            h.a.createElement(D.e, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim1),
            }),
            h.a.createElement(u.b, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim2),
            }),
            h.a.createElement(u.c, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim3),
            }),
            h.a.createElement(D.k, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim4),
            }),
            h.a.createElement(u.m, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim5),
            }),
            h.a.createElement(u.k, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim6),
            }),
            h.a.createElement(u.l, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim7),
            }),
            h.a.createElement(D.v, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim8),
            }),
            h.a.createElement(D.e, {
              className: Object(x.a)($.UsePointsSvg, $.UsePointsAnim1),
            })
          ),
          h.a.createElement(
            m.a,
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
              className: $.PageContainer,
            },
            h.a.createElement("div", { className: $.ShellHeaderBrandName }, t),
            h.a.createElement(
              "div",
              { className: $.SectionSubtitle },
              Object(b.f)("#HowItWorks_UsePoints_Desc1")
            ),
            h.a.createElement(
              m.a,
              { display: "flex", flexDirection: "column", paddingTop: "large" },
              h.a.createElement(M, {
                iconComponent: D.n,
                descCallout: "#HowItWorks_DoNotExpire",
              }),
              h.a.createElement(M, {
                iconComponent: D.g,
                descCallout: "#HowItWorks_Permanent",
              }),
              h.a.createElement(M, {
                iconComponent: D.o,
                descCallout: "#HowItWorks_Marketable",
              })
            ),
            h.a.createElement(
              m.a,
              { className: $.CollectionItemsContainer },
              h.a.createElement("img", { className: $.ItemLeft, src: T }),
              h.a.createElement("img", { className: $.ItemLeftMid, src: L }),
              h.a.createElement(
                "div",
                { className: $.ItemMiddle },
                h.a.createElement("img", { className: $.ItemFrame, src: k }),
                h.a.createElement("img", { className: $.ItemAvatar, src: z })
              ),
              h.a.createElement("img", { className: $.ItemRightMid, src: B }),
              h.a.createElement("img", { className: $.ItemRight, src: R })
            )
          )
        );
      }
      function S(e) {
        var t = r.b.LoyaltyByGame();
        return h.a.createElement(
          "div",
          {
            className: $.SectionTileContainer,
            style: { backgroundImage: "url(" + P + ")" },
          },
          h.a.createElement(
            m.a,
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "xlarge",
              paddingLeft: "xlarge",
              paddingBottom: "xxlarge",
            },
            h.a.createElement(D.v, { className: $.SectionIcons }),
            h.a.createElement(
              C.b,
              { to: t },
              h.a.createElement(
                "div",
                { className: $.SectionTitle },
                Object(b.f)("#HowItWorks_YourGames")
              )
            ),
            h.a.createElement(
              "div",
              { className: $.SectionSubtitle },
              Object(b.f)("#HowItWorks_YourGames_Desc1")
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "large",
              },
              h.a.createElement(M, {
                iconComponent: D.o,
                descCallout: "#HowItWorks_YourGames_TradingCards",
              })
            )
          )
        );
      }
      function O(e) {
        return h.a.createElement(
          m.a,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: "xxxlarge",
            className: $.FaqContainer,
          },
          h.a.createElement(
            m.a,
            { display: "flex", flexDirection: "column" },
            h.a.createElement(
              "div",
              { className: $.FaqTitle },
              Object(b.f)("#Faq_Title")
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_GetPoints_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_GetPoints_A")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_GetPoints_A1")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_GetPoints_A2")
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_PointsExpire_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_PointsExpire_A")
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_Limits_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_Limits_A")
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_Trade_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_Trade_A")
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_TradingCards_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_TradingCards_A")
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_TradingCardsStay_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_TradingCardsStay_A")
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_Refund_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_Refund_A")
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_Lunar_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_Lunar_A")
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_Profile_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_Profile_A")
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                paddingTop: "medium",
                paddingBottom: "medium",
              },
              h.a.createElement(
                "div",
                { className: $.FaqQuestion },
                Object(b.f)("#Faq_WhatElse_Q")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_WhatElse_A")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_WhatElse_A1")
              ),
              h.a.createElement(
                "div",
                { className: $.FaqAnswer },
                " ",
                Object(b.f)("#Faq_WhatElse_A2")
              )
            )
          )
        );
      }
      function A() {
        var e = p.b.Get().GetConfig().points_conversion.unit_spend,
          t = p.b.Get().GetConfig().points_conversion.points;
        return h.a.createElement(
          d.c,
          null,
          h.a.createElement(
            d.b,
            null,
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                style: { width: "100%" },
                id: "Title",
              },
              h.a.createElement(j, null),
              h.a.createElement(N, { dollarConversion: e, numPoints: t }),
              h.a.createElement(E, null),
              h.a.createElement(S, null),
              !Object(I.a)(c.c.EREALM) && h.a.createElement(ee, null),
              h.a.createElement(O, null)
            )
          )
        );
      }
      var D = s("cOvF"),
        x = s("exH9"),
        P = s("gxgZ"),
        L = (s("8j8b"), s("Lvue"), s("eOCM")),
        B = s("HJR3"),
        R = s("DtjR"),
        T = s("6bk4"),
        z = s("++az"),
        k = (s("kJAG"), s("TBZS"), s("sf1Z"), s("Cw7J")),
        G = (s("FYLW"), s("TL5o"), s("J8Mo"), s("2y1i"), s("bnhs")),
        F = s("Bww3"),
        U = s("eeci"),
        H = s("9jkg"),
        W = s("M2Z0"),
        Z = s("7JP+"),
        Q = s("nu2M"),
        Y = s("FfFA"),
        V = s("bFVC"),
        q = s("Wl4Y"),
        J = s("BK9T"),
        X = s("mpVu"),
        K = s("px4M"),
        $ = s("uOv9"),
        ee = Object(o.a)(function () {
          var e = p.b.Get().GetCommunityAwardPointsTransferred(),
            t = c.c.STORE_BASE_URL + "labs/trendingreviews/",
            n = c.c.COMMUNITY_BASE_URL + "?subsection=workshop";
          return h.a.createElement(
            m.a,
            {
              id: "CommunityAwards",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
            },
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                className: $.UsePointsIconContainer,
              },
              h.a.createElement("img", { src: F, className: $.ScrollIcon }),
              h.a.createElement("img", { src: G, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Z, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Q, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Y, className: $.ScrollIcon }),
              h.a.createElement("img", { src: F, className: $.ScrollIcon }),
              h.a.createElement("img", { src: W, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Z, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Q, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Y, className: $.ScrollIcon }),
              h.a.createElement("img", { src: F, className: $.ScrollIcon }),
              h.a.createElement("img", { src: G, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Z, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Q, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Y, className: $.ScrollIcon }),
              h.a.createElement("img", { src: F, className: $.ScrollIcon }),
              h.a.createElement("img", { src: W, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Z, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Q, className: $.ScrollIcon }),
              h.a.createElement("img", { src: Y, className: $.ScrollIcon })
            ),
            !1,
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "xxlarge",
                className: $.PageContainer,
              },
              h.a.createElement(
                "div",
                { className: $.ShellHeaderBrandName },
                Object(b.f)("#HowItWorks_ReviewAwards")
              ),
              h.a.createElement(
                "div",
                { className: $.SectionSubtitle },
                Object(b.f)("#HowItWorks_ReviewAwardsWinter_Desc", e)
              ),
              h.a.createElement("img", { src: V, className: $.AwardsUiImg })
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "large",
                className: $.PageContainer,
              },
              h.a.createElement(
                m.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                },
                h.a.createElement("img", {
                  src: U,
                  className: $.AwardsHotTakeApng,
                }),
                h.a.createElement(
                  m.a,
                  { display: "flex", flexDirection: "column" },
                  h.a.createElement(
                    "div",
                    {
                      className: Object(x.a)(
                        $.SectionSubtitle,
                        $.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(b.f)("#HowItWorks_AwardsReviews", e)
                  ),
                  h.a.createElement(
                    "a",
                    { href: t },
                    h.a.createElement(
                      "div",
                      { className: $.AwardsLink },
                      Object(b.f)("#HowItWorks_AwardsReviewsLink")
                    )
                  )
                )
              ),
              h.a.createElement(
                m.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                },
                h.a.createElement("img", { src: J, className: $.AwardsApng }),
                h.a.createElement(
                  m.a,
                  { display: "flex", flexDirection: "column" },
                  h.a.createElement(
                    "div",
                    {
                      className: Object(x.a)(
                        $.SectionSubtitle,
                        $.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(b.f)("#HowItWorks_AwardsUgc", e)
                  ),
                  h.a.createElement(
                    "a",
                    { href: n },
                    h.a.createElement(
                      "div",
                      { className: $.AwardsLink },
                      Object(b.f)("#HowItWorks_AwardsUgcLink")
                    )
                  )
                )
              ),
              h.a.createElement(
                m.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                },
                h.a.createElement("img", {
                  src: H,
                  className: $.AwardsHotTakeApng,
                }),
                h.a.createElement(
                  m.a,
                  { display: "flex", flexDirection: "column" },
                  h.a.createElement(
                    "div",
                    {
                      className: Object(x.a)(
                        $.SectionSubtitle,
                        $.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(b.f)("#HowItWorks_AwardsProfile", e)
                  )
                )
              )
            ),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "xlarge",
                className: $.PageContainer,
              },
              h.a.createElement(
                m.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: $.AwardBadgeContainer,
                },
                h.a.createElement("img", { src: K }),
                h.a.createElement(
                  "div",
                  {
                    className: $.SectionTitleSmall,
                    style: { paddingTop: "32px" },
                  },
                  Object(b.f)("#HowItWorks_Patron_Badge"),
                  " "
                ),
                h.a.createElement(
                  "div",
                  { className: $.SectionSubtitleBadge },
                  Object(b.f)("#HowItWorks_Patron_Badge_Desc")
                )
              ),
              h.a.createElement(
                m.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: $.AwardBadgeContainer,
                },
                h.a.createElement("img", { src: X }),
                h.a.createElement(
                  "div",
                  {
                    className: $.SectionTitleSmall,
                    style: { paddingTop: "32px" },
                  },
                  Object(b.f)("#HowItWorks_Contributor_Badge"),
                  " "
                ),
                h.a.createElement(
                  "div",
                  { className: $.SectionSubtitleBadge },
                  Object(b.f)("#HowItWorks_Contributor_Badge_Desc")
                )
              )
            )
          );
        }),
        te = s("8j16"),
        ne = s("+d9t"),
        re = (function (n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return p.b.Get().GetLoyaltyRewardsSummary(), t;
          }
          return (
            Object(g.d)(e, n),
            (e.prototype.render = function () {
              return h.a.createElement(
                d.e,
                null,
                h.a.createElement(
                  m.a,
                  {
                    className: te.PageContainer,
                    marginX: "xlarge",
                    display: "flex",
                    flexDirection: "column",
                  },
                  h.a.createElement(
                    m.a,
                    {
                      marginY: "large",
                      display: "flex",
                      flexDirection: "column",
                    },
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: te.PageHeader,
                      },
                      Object(b.f)("#WinterSale2020_Rules_Header")
                    ),
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionContent,
                      },
                      Object(b.f)("#WinterSale2020_Rules_Intro")
                    )
                  ),
                  h.a.createElement(
                    m.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: te.Section,
                    },
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionHeader,
                      },
                      Object(b.f)("#WinterSale2020_Rules_1_Title")
                    ),
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionContent,
                      },
                      Object(b.f)("#WinterSale2020_Rules_1_Desc")
                    )
                  ),
                  h.a.createElement(
                    m.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: te.Section,
                    },
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionHeader,
                      },
                      Object(b.f)("#WinterSale2020_Rules_2_Title")
                    ),
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionContent,
                      },
                      Object(b.f)("#WinterSale2020_Rules_2_Desc")
                    ),
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionContent,
                      },
                      Object(b.f)("#WinterSale2020_Rules_2_Desc2")
                    )
                  ),
                  h.a.createElement(
                    m.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: te.Section,
                    },
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionHeader,
                      },
                      Object(b.f)("#WinterSale2020_Rules_3_Title")
                    ),
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionContent,
                      },
                      Object(b.f)("#WinterSale2020_Rules_3_Desc")
                    ),
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionContent,
                      },
                      Object(b.f)("#WinterSale2020_Rules_3_Desc2")
                    )
                  ),
                  h.a.createElement(
                    m.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: te.Section,
                    },
                    h.a.createElement(
                      m.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: te.SectionHeader,
                      },
                      Object(b.f)("#WinterSale2020_Rules_4_Title")
                    ),
                    h.a.createElement(
                      m.a,
                      { marginY: "xsmall", className: te.SectionContent },
                      Object(b.n)(
                        "#WinterSale2020_Rules_4_Desc",
                        h.a.createElement(
                          ne.a,
                          { href: c.c.STORE_BASE_URL + "privacy_agreement" },
                          Object(b.f)("#WinterSale2020_Rules_ClickHere")
                        )
                      )
                    )
                  )
                )
              );
            }),
            (e = Object(g.c)([o.a], e))
          );
        })(h.a.Component),
        ae = "",
        ie = null,
        oe = null,
        se = null;
      function ce() {
        (ae = ""),
          null !== ie && ie.disconnect(),
          null !== oe && (window.clearTimeout(oe), (oe = null));
      }
      function le() {
        var e = document.getElementById(ae);
        return null !== e && (se(e), ce(), !0);
      }
      function me(r) {
        return h.a.forwardRef(function (t, e) {
          t.scroll, t.smooth;
          var n = Object(g.f)(t, ["scroll", "smooth"]);
          return h.a.createElement(
            r,
            Object(g.a)({}, n, {
              onClick: function (e) {
                ce(),
                  t.onClick && t.onClick(e),
                  "string" == typeof t.to
                    ? (ae = t.to.split("#").slice(1).join("#"))
                    : "object" == typeof t.to &&
                      "string" == typeof t.to.hash &&
                      (ae = t.to.hash.replace("#", "")),
                  "" !== ae &&
                    ((se =
                      t.scroll ||
                      function (e) {
                        return t.smooth
                          ? e.scrollIntoView({ behavior: "smooth" })
                          : e.scrollIntoView();
                      }),
                    window.setTimeout(function () {
                      !1 === le() &&
                        (null === ie && (ie = new MutationObserver(le)),
                        ie.observe(document, {
                          attributes: !0,
                          childList: !0,
                          subtree: !0,
                        }),
                        (oe = window.setTimeout(function () {
                          ce();
                        }, 1e4)));
                    }, 0));
              },
              ref: e,
            }),
            t.children
          );
        });
      }
      me(C.b);
      function ue(e) {
        var t = e.children,
          n = e.className,
          r = Object(g.f)(e, ["children", "className"]),
          a = h.a.useState(null),
          i = a[0],
          o = a[1],
          s = h.a.useState(0),
          c = s[0],
          l = s[1],
          m = (function (n, e) {
            void 0 === e && (e = { msDuration: 200, msInterval: 10 });
            var t = h.a.useState(null),
              r = t[0],
              a = t[1],
              i = h.a.useCallback(function (e) {
                return a(e);
              }, []),
              o = e.msDuration,
              s = e.msInterval;
            return (
              h.a.useLayoutEffect(
                function () {
                  if (r) {
                    var e =
                        (Math.abs(n - r.scrollLeft) / (o / s)) *
                        (n < r.scrollLeft ? -1 : 1),
                      t = window.setInterval(function () {
                        Math.abs(e) < Math.abs(r.scrollLeft - n)
                          ? ((r.scrollLeft = n), clearInterval(t))
                          : (r.scrollLeft += e);
                      }, s);
                    return function () {
                      return clearInterval(t);
                    };
                  }
                },
                [n, r, o, s]
              ),
              [i, r]
            );
          })(c),
          u = m[0],
          d = m[1],
          p = i
            ? { width: i.width + "px", transform: "translateX(" + i.x + "px)" }
            : void 0,
          f = h.a.useState(0),
          _ = f[0];
        return (
          f[1],
          h.a.useLayoutEffect(
            function () {
              if (_) {
                var e = setInterval(function () {
                  return l(function (e) {
                    return e + _;
                  });
                }, 50);
                return function () {
                  return clearInterval(e);
                };
              }
            },
            [_]
          ),
          h.a.createElement(
            ge.Provider,
            {
              value: {
                updateActivePosition: function (e) {
                  var t;
                  (i && (e.x === i.x || e.width === i.width)) || o(e),
                    d &&
                      ((t = Math.max(
                        0,
                        Math.min(
                          e.x - d.clientWidth / 2 + e.width / 2,
                          d.scrollWidth - d.clientWidth
                        )
                      )),
                      l(t));
                },
              },
            },
            h.a.createElement(
              "div",
              Object(g.a)({}, r, {
                className: Object(x.a)(_e.ItemContainer, n),
                ref: u,
              }),
              t,
              h.a.createElement("div", { className: _e.Accent, style: p })
            )
          )
        );
      }
      function de(e) {
        var t = e.children,
          n = e.active,
          r = e.className,
          a = Object(g.f)(e, ["children", "active", "className"]),
          i = h.a.useContext(ge),
          o = h.a.useState(null),
          s = o[0],
          c = o[1],
          l = h.a.useCallback(function (e) {
            return c(e);
          }, []);
        return (
          h.a.useLayoutEffect(
            function () {
              n &&
                s &&
                i.updateActivePosition({
                  x: s.offsetLeft,
                  width: s.clientWidth,
                });
            },
            [n, s, i]
          ),
          h.a.createElement(
            "div",
            Object(g.a)(
              { className: Object(x.a)(_e.Item, n && _e.Active, r), ref: l },
              a
            ),
            t
          )
        );
      }
      var pe = me(C.c),
        fe = s("1xRl"),
        _e = s("rKGf"),
        ge = h.a.createContext({ updateActivePosition: function () {} });
      function he(n) {
        return function (e, t) {
          return !!e && (t.hash === we) === n;
        };
      }
      function be() {
        var e = [
          {
            items: [
              {
                props: {
                  iconComponent: D.m,
                  children: Object(b.f)("#HowItWorksLink"),
                  to: { pathname: r.b.LoyaltyHowItWorks(), hash: "#Title" },
                  isActive: he(!1),
                },
              },
              {
                props: {
                  iconComponent: D.q,
                  children: Object(b.f)("#ShopNav_Featured"),
                  to: r.b.LoyaltyStore(),
                  exact: !0,
                },
              },
              {
                props: {
                  iconComponent: D.v,
                  children: Object(b.f)("#ShopNav_ByGame"),
                  to: r.b.LoyaltyByGame(),
                },
              },
            ],
          },
          {
            label: Object(b.f)("#ProfileItems"),
            items: [
              {
                props: {
                  iconComponent: D.e,
                  children: Object(b.f)("#ShopNav_AvatarLink"),
                  to: r.b.LoyaltyAvatar(),
                },
              },
              {
                props: {
                  iconComponent: u.b,
                  children: Object(b.f)("#ShopNav_BackgroundsLink"),
                  to: r.b.LoyaltyBackgrounds(),
                },
              },
            ],
          },
          {
            label: Object(b.f)("#ChatItems"),
            items: [
              {
                props: {
                  iconComponent: u.m,
                  children: Object(b.f)("#ShopNav_StickersLink"),
                  to: r.b.LoyaltyStickers(),
                },
              },
              {
                props: {
                  iconComponent: u.k,
                  children: Object(b.f)("#ShopNav_ChatEffectsLink"),
                  to: r.b.LoyaltyChatEffects(),
                },
              },
              {
                props: {
                  iconComponent: u.l,
                  children: Object(b.f)("#ShopNav_EmoticonsLink"),
                  to: r.b.LoyaltyEmoticons(),
                },
              },
            ],
          },
        ];
        return (
          Object(I.a)(c.c.EREALM) ||
            e[0].items.push({
              props: {
                iconComponent: D.j,
                children: Object(b.f)("#ShopNav_AwardsLink"),
                to: { pathname: r.b.LoyaltyHowItWorks(), hash: we },
                isActive: he(!0),
              },
            }),
          e[1].items.push({
            props: {
              iconComponent: u.c,
              children: Object(b.f)("#ShopNav_SeasonalBadgeLink"),
              to: r.b.LoyaltySteamBadge(),
            },
          }),
          p.b.Get().BHasAutumnSaleStarted(),
          e[1].items.push({
            props: {
              iconComponent: D.k,
              children: Object(b.f)("#ShopNav_ProfileLink_Autumn2020"),
              to: r.b.LoyaltyProfile(),
            },
          }),
          e[1].items.push({
            props: {
              iconComponent: D.u,
              children: Object(b.f)("#ShopNav_ProfileShowcasesLink"),
              to: { pathname: r.b.LoyaltyProfileCustomizations() },
              iconCallout: D.s,
            },
          }),
          p.b.Get().BIsLoggedIn() &&
            e.push({
              items: [
                {
                  external: !0,
                  props: {
                    iconComponent: D.t,
                    children: Object(b.f)("#RewardsPointsHistoryLink"),
                    href: c.c.STORE_BASE_URL + "pointssummary/",
                  },
                },
              ],
            }),
          e
        );
      }
      function ye() {
        var n = be();
        return h.a.createElement(
          m.a,
          { padding: "none", className: fe.PrimaryNav },
          h.a.createElement(
            m.e,
            { spacing: "none" },
            n.map(function (e, t) {
              return h.a.createElement(
                h.a.Fragment,
                { key: t },
                e.label &&
                  h.a.createElement("div", { className: fe.NavItem }, e.label),
                e.items.map(function (e) {
                  return e.external
                    ? h.a.createElement(
                        Ie,
                        Object(g.a)({}, e.props, { key: e.props.href })
                      )
                    : h.a.createElement(
                        Ce,
                        Object(g.a)({}, e.props, {
                          key: JSON.stringify(e.props.to),
                        })
                      );
                }),
                t < n.length - 1 &&
                  h.a.createElement("div", { className: fe.Line })
              );
            })
          )
        );
      }
      function ve() {
        function a(e) {
          var t = Object(n.h)(e.to);
          return h.a.createElement(
            de,
            {
              active: !!t && (!e.exact || t.isExact),
              className: fe.ScrollableTabItem,
            },
            e.children
          );
        }
        var e = be(),
          i = [];
        return (
          e.forEach(function (e) {
            e.items.forEach(function (e) {
              var t, n, r;
              e.external
                ? ((t = e.props).iconComponent,
                  (r = Object(g.f)(t, ["iconComponent"])),
                  i.push(
                    h.a.createElement(
                      "a",
                      Object(g.a)({}, r, { key: e.props.href }),
                      h.a.createElement(
                        de,
                        { className: fe.ScrollableTabItem },
                        e.props.children
                      )
                    )
                  ))
                : ((n = e.props).iconComponent,
                  (r = Object(g.f)(n, ["iconComponent"])),
                  i.push(
                    h.a.createElement(
                      C.c,
                      Object(g.a)({}, r, { key: n.to }),
                      h.a.createElement(a, Object(g.a)({}, n), n.children)
                    )
                  ));
            });
          }),
          h.a.createElement(ue, { className: fe.ScrollableTabs }, i)
        );
      }
      var we = "#CommunityAwards",
        Ce = function (e) {
          var t = e.iconComponent,
            n = e.className,
            r = e.children,
            a = e.disableActiveStyle,
            i = e.iconCallout,
            o = Object(g.f)(e, [
              "iconComponent",
              "className",
              "children",
              "disableActiveStyle",
              "iconCallout",
            ]),
            s = t,
            c = i,
            l = "object" == typeof o.to && o.to.hash ? pe : C.c;
          return h.a.createElement(
            l,
            Object(g.a)(
              {
                className: Object(x.a)(fe.SecondaryNavItem, n),
                activeClassName: a ? void 0 : fe.Selected,
              },
              o
            ),
            h.a.createElement(s, { className: fe.Icon }),
            h.a.createElement("div", { className: fe.Label }, r),
            c && h.a.createElement(c, { className: fe.Callout })
          );
        },
        Ie = function (e) {
          var t = e.iconComponent,
            n = e.className,
            r = e.children,
            a = Object(g.f)(e, ["iconComponent", "className", "children"]),
            i = t;
          return h.a.createElement(
            "a",
            Object(g.a)({ className: Object(x.a)(fe.SecondaryNavItem, n) }, a),
            h.a.createElement(i, { className: fe.Icon }),
            h.a.createElement("div", { className: fe.Label }, r)
          );
        },
        Me = s("1Gs6"),
        je = s("bxiW"),
        Ne = s("y+6m"),
        Ee = s("TtDX"),
        Se = s("Mgs7"),
        Oe = s("1U4k");
      var Ae = (function (n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.state = {
              strFilterAppText: p.b.Get().GetCurrentAppFilterText(),
            }),
            t
          );
        }
        return (
          Object(g.d)(e, n),
          (e.prototype.componentDidMount = function () {
            var e = p.b.Get().GetSortedGamesWithRewards();
            _.a.EnsureAppInfoForAppIDs(e);
          }),
          (e.prototype.CloseModal = function () {
            this.props.closeModal && this.props.closeModal();
          }),
          (e.prototype.OnChangeAppFilterCheckbox = function (e, t) {
            e ? p.b.Get().AddAppIDFilter(t) : p.b.Get().RemoveAppIDFilter(t);
          }),
          (e.prototype.OnFilterByText = function (e) {
            var t = e.target.value.toLowerCase();
            this.timeout && clearTimeout(this.timeout),
              (this.timeout = window.setTimeout(function () {
                p.b.Get().SetCurrentAppFilterText(t);
              }, 300)),
              this.setState({ strFilterAppText: t });
          }),
          (e.prototype.ClearAppFilterString = function () {
            this.setState({ strFilterAppText: "" }),
              p.b.Get().SetCurrentAppFilterText("");
          }),
          (e.prototype.render = function () {
            for (
              var n = this,
                r = this.state.strFilterAppText,
                a = p.b.Get().GetAppIDFilters(),
                e = p.b.Get().GetSortedGamesWithRewards(),
                i = [],
                t = 0;
              t < e.length && t < this.props.maxGamesToDisplay;
              ++t
            ) {
              var o = e[t];
              i.push(o);
            }
            var s = e.filter(function (e) {
                if (i.includes(e)) return !1;
                if (a.has(e)) return !0;
                if (r.length < n.props.minCharactersForNameFilter) return !1;
                if (!_.a.GetAppInfo(e)) return !1;
                var t = _.a.GetAppInfo(e).name;
                return !!t && -1 != (t = t.toLowerCase()).indexOf(r);
              }),
              c = null;
            return (
              0 != r.length &&
                0 == s.length &&
                (c = l.createElement(
                  "div",
                  { className: Oe.AppFilterNoMatches },
                  Object(b.f)("#AppFilter_NoMatches")
                )),
              l.createElement(
                "div",
                { className: Oe.ManageAppFiltersPopup },
                l.createElement(
                  "div",
                  { className: Oe.HeaderContainer },
                  l.createElement(
                    "div",
                    { className: Oe.Header },
                    Object(b.f)("#AppFilter_Label")
                  )
                ),
                l.createElement(
                  "div",
                  { className: Oe.AppInputFilterContainer },
                  l.createElement("input", {
                    className: Oe.AppInputFilter,
                    type: "text",
                    onChange: this.OnFilterByText,
                    value: r,
                  }),
                  l.createElement(
                    "div",
                    {
                      className: Oe.AppFilterClearButton,
                      onClick: this.ClearAppFilterString,
                    },
                    l.createElement(D.c, { className: Oe.AppFilterClearIcon })
                  )
                ),
                c,
                l.createElement(
                  "div",
                  { className: Oe.AppCheckboxesContainer },
                  s.map(function (t) {
                    return _.a.GetAppInfo(t).is_valid
                      ? l.createElement(Se.e, {
                          key: t,
                          classname: Oe.AppFilterCheckbox,
                          label: _.a.GetAppInfo(t).name,
                          onChange: function (e) {
                            return n.OnChangeAppFilterCheckbox(e, t);
                          },
                          checked: a.has(t),
                        })
                      : null;
                  })
                ),
                l.createElement(
                  "div",
                  { className: Oe.HeaderContainer },
                  l.createElement(
                    "div",
                    { className: Oe.Header },
                    Object(b.f)("#AppFilter_FilterByRecentlyPlayed")
                  )
                ),
                l.createElement(
                  "div",
                  { className: Oe.AppCheckboxesContainer },
                  i.map(function (t) {
                    return _.a.GetAppInfo(t).is_valid
                      ? l.createElement(Se.e, {
                          key: t,
                          classname: Oe.AppFilterCheckbox,
                          label: _.a.GetAppInfo(t).name,
                          onChange: function (e) {
                            return n.OnChangeAppFilterCheckbox(e, t);
                          },
                          checked: a.has(t),
                        })
                      : null;
                  })
                )
              )
            );
          }),
          (e.defaultProps = {
            maxGamesToDisplay: 3,
            minCharactersForNameFilter: 3,
          }),
          Object(g.c)([je.a], e.prototype, "CloseModal", null),
          Object(g.c)([je.a], e.prototype, "OnChangeAppFilterCheckbox", null),
          Object(g.c)([je.a], e.prototype, "OnFilterByText", null),
          Object(g.c)([je.a], e.prototype, "ClearAppFilterString", null),
          (e = Object(g.c)([o.a], e))
        );
      })(l.Component);
      function De(e) {
        var t = e.children,
          n = Object(m.h)("(max-width: 965px)");
        return h.a.createElement(
          m.d,
          null,
          h.a.createElement(
            "div",
            { className: Object(x.a)(Me.Shell) },
            h.a.createElement(xe, null),
            n && h.a.createElement(ve, null),
            h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "row",
                className: Me.ShellScrollParent,
              },
              !n && h.a.createElement(ye, null),
              h.a.createElement(
                m.a,
                { flex: "1", className: Me.ShellScroll },
                t
              )
            )
          )
        );
      }
      var xe = Object(o.a)(function () {
          var e = null;
          p.b.Get().BIsLoggedIn() &&
            (e = h.a.createElement(
              m.a,
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                className: Me.PointsContainer,
              },
              h.a.createElement(u.F, { className: Me.Icon }),
              h.a.createElement(
                m.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                  paddingLeft: "xsmall",
                },
                h.a.createElement(
                  "a",
                  {
                    className: Me.YourBalanceLabel,
                    href: c.c.STORE_BASE_URL + "pointssummary/",
                  },
                  Object(b.f)("#YourBalance")
                ),
                h.a.createElement(
                  "div",
                  { className: Me.RewardsPointsCount },
                  p.b
                    .Get()
                    .GetPointsAvailable()
                    .getLowBits()
                    .toLocaleString(b.e.GetPreferredLocales())
                )
              )
            ));
          var t,
            n = null;
          return (
            p.b.Get().BIsLoggedIn() &&
              p.b.Get().GetIsUsingAppIDFilters() &&
              ((t = !!p.b.Get().GetAppIDFilters().size),
              (n = h.a.createElement(
                m.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  className: Me.AppFilterContainer,
                },
                h.a.createElement(D.l, { className: Me.HeaderVerticalDivider }),
                h.a.createElement(
                  "div",
                  { className: Me.AppFilterLabel },
                  Object(b.f)("#AppFilter_Label")
                ),
                h.a.createElement(
                  "div",
                  { className: Me.AppFilterIconContainer },
                  h.a.createElement(D.d, {
                    className: Object(x.a)(Me.AppFilterIcon),
                    onClick: function (e) {
                      return (
                        (t = e),
                        (n = {
                          bOverlapHorizontal: !0,
                          bUseWebStyles: !1,
                          strClassName: Oe.ManageAppFiltersPopupContextMenu,
                        }),
                        void Object(Ee.a)(
                          l.createElement(
                            Ne.c,
                            null,
                            l.createElement(Ae, { maxGamesToDisplay: 14 })
                          ),
                          t,
                          n
                        )
                      );
                      var t, n;
                    },
                  }),
                  t && h.a.createElement("div", { className: Me.FilterInUse })
                )
              ))),
            h.a.createElement(
              m.a,
              {
                paddingY: "small",
                paddingX: ["xsmall", "medium"],
                display: "flex",
                flexDirection: "row",
                className: Me.ShellHeader,
              },
              h.a.createElement(
                C.c,
                { to: r.b.LoyaltyStore(), className: Me.ShellHeaderBrandLink },
                h.a.createElement(
                  "div",
                  { className: Me.ShellHeaderBrandName },
                  " ",
                  Object(b.f)("#ShopLink"),
                  " "
                )
              ),
              h.a.createElement(m.b, null, function (e) {
                return "mobile" !== e && n;
              }),
              e
            )
          );
        }),
        Pe = (s("bxBv"), s("hRO2")),
        Le = s("OS8t"),
        Be = Pe.Message;
      var Re,
        Te,
        ze = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.accountid || Le.a(r.M()),
              Be.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      accountid: {
                        n: 1,
                        br: Le.d.readUint32,
                        bw: Le.h.writeUint32,
                      },
                      auctiondescriptionid: {
                        n: 2,
                        br: Le.d.readUint64String,
                        bw: Le.h.writeUint64String,
                      },
                      state: { n: 3, br: Le.d.readEnum, bw: Le.h.writeEnum },
                      time_created: {
                        n: 4,
                        br: Le.d.readUint32,
                        bw: Le.h.writeUint32,
                      },
                      time_updated: {
                        n: 5,
                        br: Le.d.readUint32,
                        bw: Le.h.writeUint32,
                      },
                      amount_bid: {
                        n: 6,
                        br: Le.d.readInt64String,
                        bw: Le.h.writeInt64String,
                      },
                      amount_paid: {
                        n: 7,
                        br: Le.d.readInt64String,
                        bw: Le.h.writeInt64String,
                      },
                      auctionbidid: {
                        n: 8,
                        br: Le.d.readInt64String,
                        bw: Le.h.writeInt64String,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = Le.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return Le.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return Le.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new Pe.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return Le.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new Pe.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              Le.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAuction_Bid";
            }),
            r
          );
        })(Be),
        ke = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.auctiondescriptionid || Le.a(r.M()),
              Be.initialize(t, e, 0, -1, [12], null),
              t
            );
          }
          return (
            Object(g.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      auctiondescriptionid: {
                        n: 1,
                        br: Le.d.readUint64String,
                        bw: Le.h.writeUint64String,
                      },
                      time_start: {
                        n: 2,
                        br: Le.d.readUint32,
                        bw: Le.h.writeUint32,
                      },
                      time_end: {
                        n: 3,
                        br: Le.d.readUint32,
                        bw: Le.h.writeUint32,
                      },
                      amount_total: {
                        n: 5,
                        br: Le.d.readInt64String,
                        bw: Le.h.writeInt64String,
                      },
                      amount_remaining: {
                        n: 6,
                        br: Le.d.readInt64String,
                        bw: Le.h.writeInt64String,
                      },
                      highest_amount: {
                        n: 7,
                        br: Le.d.readInt64String,
                        bw: Le.h.writeInt64String,
                      },
                      highest_bidder_accountid: {
                        n: 8,
                        br: Le.d.readUint32,
                        bw: Le.h.writeUint32,
                      },
                      community_item_appid: {
                        n: 9,
                        br: Le.d.readUint32,
                        bw: Le.h.writeUint32,
                      },
                      community_item_type: {
                        n: 10,
                        br: Le.d.readUint32,
                        bw: Le.h.writeUint32,
                      },
                      store_appid: {
                        n: 11,
                        br: Le.d.readUint32,
                        bw: Le.h.writeUint32,
                      },
                      store_packageids: {
                        n: 12,
                        r: !0,
                        q: !0,
                        br: Le.d.readUint32,
                        bw: Le.h.writeRepeatedUint32,
                      },
                      reserve_price: {
                        n: 13,
                        br: Le.d.readInt64String,
                        bw: Le.h.writeInt64String,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = Le.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return Le.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return Le.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new Pe.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return Le.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new Pe.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              Le.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAuction_Item";
            }),
            r
          );
        })(Be),
        Ge = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return Be.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(g.d)(r, n),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (r.fromObject = function (e) {
              return new r();
            }),
            (r.deserializeBinary = function (e) {
              var t = new Pe.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (r.prototype.serializeBinary = function () {
              var e = new Pe.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {}),
            (r.prototype.getClassName = function () {
              return "CAuction_PlaceBid_Response";
            }),
            r
          );
        })(Be),
        Fe = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.amount_returned || Le.a(r.M()),
              Be.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      amount_returned: {
                        n: 1,
                        br: Le.d.readInt64String,
                        bw: Le.h.writeInt64String,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = Le.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return Le.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return Le.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new Pe.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return Le.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new Pe.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              Le.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAuction_CancelBid_Response";
            }),
            r
          );
        })(Be),
        Ue = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.bids || Le.a(r.M()),
              Be.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(g.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { bids: { n: 1, c: ze, r: !0, q: !0 } },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = Le.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return Le.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return Le.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new Pe.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return Le.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new Pe.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              Le.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAuction_GetBidsForUser_Response";
            }),
            r
          );
        })(Be),
        He = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.item || Le.a(r.M()),
              Be.initialize(t, e, 0, -1, [4], null),
              t
            );
          }
          return (
            Object(g.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      item: { n: 1, c: ke },
                      count_total: {
                        n: 2,
                        br: Le.d.readInt32,
                        bw: Le.h.writeInt32,
                      },
                      current_user_position: {
                        n: 3,
                        br: Le.d.readInt32,
                        bw: Le.h.writeInt32,
                      },
                      winning_bids: { n: 4, c: ze, r: !0, q: !0 },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = Le.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return Le.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return Le.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new Pe.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return Le.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new Pe.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              Le.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAuction_GetBidsForItem_Response";
            }),
            r
          );
        })(Be),
        We = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.bid || Le.a(r.M()),
              Be.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = { proto: r, fields: { bid: { n: 1, c: ze } } }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = Le.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return Le.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return Le.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new Pe.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return Le.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new Pe.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              Le.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAuction_GetUserBidForItem_Response";
            }),
            r
          );
        })(Be),
        Ze = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.item || Le.a(r.M()),
              Be.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = { proto: r, fields: { item: { n: 1, c: ke } } }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = Le.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return Le.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return Le.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new Pe.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return Le.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new Pe.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              Le.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAuction_GetItemDetails_Response";
            }),
            r
          );
        })(Be),
        Qe = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.items || Le.a(r.M()),
              Be.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(g.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { items: { n: 1, c: ke, r: !0, q: !0 } },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = Le.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return Le.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return Le.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new Pe.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return Le.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new Pe.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              Le.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAuction_GetAllItems_Response";
            }),
            r
          );
        })(Be);
      ((Te = Re = Re || {}).PlaceBid = function (e, t) {
        return e.SendMsg("Auction.PlaceBid#1", t, Ge, { ePrivilege: 3 });
      }),
        (Te.CancelBid = function (e, t) {
          return e.SendMsg("Auction.CancelBid#1", t, Fe, { ePrivilege: 1 });
        }),
        (Te.GetBidsForUser = function (e, t) {
          return e.SendMsg("Auction.GetBidsForUser#1", t, Ue, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (Te.GetBidsForItem = function (e, t) {
          return e.SendMsg("Auction.GetBidsForItem#1", t, He, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (Te.GetUserBidForItem = function (e, t) {
          return e.SendMsg("Auction.GetUserBidForItem#1", t, We, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (Te.GetItemDetails = function (e, t) {
          return e.SendMsg("Auction.GetItemDetails#1", t, Ze, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (Te.GetAllItems = function (e, t) {
          return e.SendMsg("Auction.GetAllItems#1", t, Qe, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        });
      s("2vnA");
      var Ye = s("8esw"),
        Ve = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bReady: !1 }), e;
          }
          return (
            Object(g.d)(e, t),
            (e.prototype.componentDidMount = function () {
              var e = this;
              qe.then(function () {
                return e.setState({ bReady: !0 });
              });
            }),
            (e.prototype.render = function () {
              return this.state.bReady
                ? h.a.createElement(
                    De,
                    null,
                    h.a.createElement(
                      n.d,
                      null,
                      h.a.createElement(
                        n.b,
                        { path: r.b.LoyaltyGetPoints() },
                        h.a.createElement(y, null)
                      ),
                      h.a.createElement(
                        n.b,
                        { path: r.b.LoyaltyHowItWorks() },
                        h.a.createElement(A, null)
                      ),
                      h.a.createElement(
                        n.b,
                        { path: r.b.LoyaltyStore() },
                        h.a.createElement(i.b, null)
                      ),
                      h.a.createElement(
                        n.b,
                        { path: r.b.LoyaltyGiveawayRules() },
                        h.a.createElement(re, null)
                      ),
                      h.a.createElement(
                        n.b,
                        null,
                        h.a.createElement(n.a, { to: r.b.LoyaltyStore() })
                      )
                    )
                  )
                : h.a.createElement(Ye.a, null);
            }),
            e
          );
        })(h.a.Component);
      var qe = (function () {
        return Object(g.b)(this, void 0, void 0, function () {
          var t, n;
          return Object(g.e)(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = Object(c.f)("loyaltystore", "application_config")),
                  (n = new a.a(c.c.WEBAPI_BASE_URL, t.webapi_token)),
                  _.a.Init(n),
                  [
                    4,
                    (function () {
                      return Object(g.b)(this, void 0, void 0, function () {
                        var t, n, r, a, i, o;
                        return Object(g.e)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return (
                                (t = c.c.LANGUAGE),
                                (n = b.b.GetLanguageFallback(t)),
                                (r = t === n),
                                [
                                  4,
                                  Promise.all([
                                    s("Aqke")("./loyalty_" + t + ".json"),
                                    r
                                      ? void 0
                                      : s("Aqke")("./loyalty_" + n + ".json"),
                                  ]),
                                ]
                              );
                            case 1:
                              return (
                                (a = e.sent()),
                                (i = a[0]),
                                (o = a[1]),
                                b.e.AddTokens(
                                  i.default,
                                  o ? o.default : void 0
                                ),
                                [2]
                              );
                          }
                        });
                      });
                    })(),
                  ]
                );
              case 1:
                return e.sent(), p.b.Get().Init(n, t), [2];
            }
          });
        });
      })();
      t.default = Ve;
    },
    CeOW: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_21.svg?v=valveisgoodatcaching";
    },
    Cw7J: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/bonemetal_224px.png?v=valveisgoodatcaching";
    },
    DPOp: function (e, t, n) {
      e.exports = {
        Shell: "herogroup_Shell_1DBDc",
        ShellScrollParent: "herogroup_ShellScrollParent_S-9dl",
        ShellHeader: "herogroup_ShellHeader_1Ke_2",
        ShellHeaderBrandLink: "herogroup_ShellHeaderBrandLink_6uDU6",
        PointsContainer: "herogroup_PointsContainer_LUEoC",
        AppFilterContainer: "herogroup_AppFilterContainer_sVAn7",
        HeaderVerticalDivider: "herogroup_HeaderVerticalDivider_3H6QP",
        AppFilterLabel: "herogroup_AppFilterLabel_gERoL",
        AppFilterIconContainer: "herogroup_AppFilterIconContainer_1fqSL",
        AppFilterIcon: "herogroup_AppFilterIcon_BMm9o",
        FilterInUse: "herogroup_FilterInUse_b2rcj",
        RewardsPointsIcon: "herogroup_RewardsPointsIcon_3DwKy",
        YourBalanceLabel: "herogroup_YourBalanceLabel_l_2GD",
        RewardsPointsCount: "herogroup_RewardsPointsCount_23uvl",
        ShellHeaderBrandName: "herogroup_ShellHeaderBrandName_2w1GI",
        SvgOverrideColor: "herogroup_SvgOverrideColor_3_3Sl",
        ItemHoverZIndex: "herogroup_ItemHoverZIndex_3cRJ-",
        ActionButton: "herogroup_ActionButton_2SB-6",
        Icon: "herogroup_Icon_25aGT",
        Container: "herogroup_Container_go6jL",
        Title: "herogroup_Title_y7h7u",
        Description: "herogroup_Description_20hSz",
        BackgroundFade: "herogroup_BackgroundFade_1v37-",
        BackgroundFadeImage: "herogroup_BackgroundFadeImage_3fHL_",
        BackgroundFadeImageBlurred:
          "herogroup_BackgroundFadeImageBlurred_2-kxP",
        TitleSkeleton: "herogroup_TitleSkeleton_3yIAM",
      };
    },
    DtjR: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/boombox.png?v=valveisgoodatcaching";
    },
    FYLW: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/portal_effect_anim.png?v=valveisgoodatcaching";
    },
    FfFA: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/extra_helpful_anim000.png?v=valveisgoodatcaching";
    },
    "Fw/J": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_12.svg?v=valveisgoodatcaching";
    },
    GFoz: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAyIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMjAyIDc2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDBDMi4yMzgyOCAwIDAgMi4yMzg1MyAwIDVWNzFDMCA3My43NjE1IDIuMjM4MjggNzYgNSA3NkgxOTdDMTk5Ljc2MiA3NiAyMDIgNzMuNzYxNSAyMDIgNzFWNUMyMDIgMi4yMzg1MyAxOTkuNzYyIDAgMTk3IDBINVpNMjcgMTguMTQxNEgxOFYxM0g0MC40MzQ2VjE4LjE0MTRIMzJWNTUuODU4Nkg0MC40MzU1VjYxSDMySDI3SDE4VjU1Ljg1ODZIMjdWMTguMTQxNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMDEiIHkxPSIwIiB4Mj0iMTAxIiB5Mj0iNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
    GKwK: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return Te;
      }),
        n.d(t, "a", function () {
          return Ve;
        });
      var O = n("mrSG"),
        A = n("q1tI"),
        v = n.n(A),
        r = n("TyAF"),
        a = n("Ty5D"),
        g = n("55Ip"),
        i = n("qbgq"),
        l = n("li8c"),
        h = n("prdU"),
        m = n("1fPh"),
        w = n("RV7a"),
        D = n("TLQK"),
        o = n("/maY"),
        x = n("exH9"),
        s = n("8esw"),
        f = n("lypr"),
        C = "none";
      function u(e, t, n) {
        void 0 === n && (n = {});
        var r = n.cInitialItems,
          a = n.cOverscanCount,
          i = n.fnRenderItemSkeleton,
          o = Object(O.f)(n, [
            "cInitialItems",
            "cOverscanCount",
            "fnRenderItemSkeleton",
          ]),
          s = r || 10,
          c = a || 10,
          l = Object(A.useState)(s + c),
          m = l[0],
          u = l[1],
          d = e(0, m).map(function (e) {
            return t(e);
          });
        if (0 === d.length) for (var p = 0; p < m; p++) d.push(i());
        var f = (function (e, n) {
          void 0 === n && (n = {});
          var t = e.length,
            r = Object(A.useState)(0),
            a = r[0],
            i = r[1],
            o = I(),
            s = o[0],
            c = o[1],
            l = I(),
            m = l[0],
            u = l[1],
            d = Object(w.i)("padding-right", C),
            p = Object(w.g)().spacing[C],
            f = 1;
          c.width &&
            void 0 !== u.width &&
            (f = Math.floor((u.width + p) / c.width));
          var _ = a + f < t,
            g = 0 < a,
            h = a,
            b = a + f,
            y = e.slice(h, b).map(function (e, t) {
              return v.a.createElement(
                "div",
                {
                  key: t + h,
                  ref: 0 === t ? s : void 0,
                  className: Object(x.a)(
                    0 === t || t < f - 1 ? d : void 0,
                    n.itemClassName
                  ),
                },
                e
              );
            });
          return {
            containerRef: m,
            rgVisibleItems: y,
            bAllowNext: _,
            bAllowPrev: g,
            fnNext: function () {
              return _ && i(a + f);
            },
            fnPrev: function () {
              return g && i(Math.max(0, a - f));
            },
            iPosition: a,
          };
        })(d, o);
        return Object(O.a)(Object(O.a)({}, f), {
          fnNext: function () {
            f.iPosition + f.rgVisibleItems.length > m - c &&
              u(m + f.rgVisibleItems.length),
              f.fnNext();
          },
        });
      }
      function d(e) {
        var t = e.className,
          n = e.containerRef,
          r = e.rgVisibleItems,
          a =
            (e.bAllowNext,
            e.bAllowPrev,
            e.fnNext,
            e.fnPrev,
            e.iPosition,
            Object(O.f)(e, [
              "className",
              "containerRef",
              "rgVisibleItems",
              "bAllowNext",
              "bAllowPrev",
              "fnNext",
              "fnPrev",
              "iPosition",
            ]));
        return v.a.createElement(
          "div",
          Object(O.a)({ className: Object(x.a)(o.Container, t), ref: n }, a),
          r
        );
      }
      function p(e) {
        var t = e.bAllowNext,
          n = e.bAllowPrev,
          r = e.fnNext,
          a = e.fnPrev;
        return v.a.createElement(
          v.a.Fragment,
          null,
          v.a.createElement(y, {
            className: Object(x.a)(o.LeftArrow, !n && o.Disabled),
            onClick: a,
          }),
          v.a.createElement(b, {
            className: Object(x.a)(o.RightArrow, !t && o.Disabled),
            onClick: r,
          })
        );
      }
      var I = function () {
          return (window.ResizeObserver ? c : _)();
        },
        c = function () {
          var e = Object(A.useState)({}),
            t = e[0],
            n = e[1],
            r = Object(A.useState)(null),
            a = r[0],
            i = r[1],
            o = Object(A.useCallback)(function (e) {
              return i(e);
            }, []);
          return (
            Object(A.useLayoutEffect)(
              function () {
                if (a) {
                  var e = new ResizeObserver(function () {
                    return window.requestAnimationFrame(function () {
                      return n(a.getBoundingClientRect());
                    });
                  });
                  return (
                    e.observe(a),
                    function () {
                      return e.disconnect();
                    }
                  );
                }
                return function () {};
              },
              [a]
            ),
            [o, t]
          );
        },
        _ = function () {
          var e = Object(A.useState)({}),
            t = e[0],
            n = e[1],
            r = Object(A.useState)(null),
            a = r[0],
            i = r[1],
            o = Object(A.useCallback)(function (e) {
              return i(e);
            }, []);
          return (
            Object(A.useLayoutEffect)(
              function () {
                if (a) {
                  var e = function () {
                    return window.requestAnimationFrame(function () {
                      return n(a.getBoundingClientRect());
                    });
                  };
                  return (
                    e(),
                    window.addEventListener("resize", e),
                    window.addEventListener("scroll", e),
                    function () {
                      window.removeEventListener("resize", e),
                        window.removeEventListener("scroll", e);
                    }
                  );
                }
                return function () {};
              },
              [a]
            ),
            [o, t]
          );
        },
        b = function (e) {
          return v.a.createElement(
            "svg",
            Object(O.a)({}, e, { viewBox: "0 0 23 36" }),
            v.a.createElement(
              "g",
              null,
              v.a.createElement("path", {
                d: "M6 1.5L21 18L6 34.5",
                stroke: "#EAEAEA",
                fill: "none",
                strokeWidth: "4",
              })
            )
          );
        },
        y = function (e) {
          var t = e.style,
            n = Object(O.f)(e, ["style"]),
            r = Object(O.a)({ transform: "scaleX(-1)" }, t || {});
          return v.a.createElement(b, Object(O.a)({ style: r }, n));
        };
      function M(e) {
        var t = e.items,
          n = e.renderItem,
          r = e.loadMore,
          a = e.bLoadingMore;
        return v.a.createElement(
          "div",
          { className: Object(x.a)(o.Container, o.Mobile) },
          t.map(n),
          v.a.createElement(f.a, {
            trigger: "repeated",
            onVisibiltyChange: function (e) {
              return e && r();
            },
          }),
          a &&
            v.a.createElement(
              "div",
              { className: o.Loading },
              v.a.createElement(s.a, null)
            )
        );
      }
      var j = n("+9fn"),
        N = n("ehaW"),
        E = Object(r.a)(function (e) {
          var t = e.getItems,
            n = e.renderItem,
            r = (e.children, e.style, e.cItemsPerPage),
            a = e.renderItemSkeleton,
            i = Object(O.f)(e, [
              "getItems",
              "renderItem",
              "children",
              "style",
              "cItemsPerPage",
              "renderItemSkeleton",
            ]),
            o = r || 20,
            s = Object(A.useState)(o),
            c = s[0],
            l = s[1],
            m = t(0, c),
            u = m.rewards,
            d = m.bLoadingMore,
            p = u.map(n);
          return v.a.createElement(
            v.a.Fragment,
            null,
            v.a.createElement(
              w.c,
              Object(O.a)({ verticalSpacing: "large" }, i),
              p,
              d &&
                a &&
                (function (e, t) {
                  for (var n = [], r = 0; r < t; r++)
                    n.push(v.a.createElement("div", { key: r }, e()));
                  return n;
                })(a, o),
              v.a.createElement(f.a, {
                trigger: "repeated",
                onVisibiltyChange: function (e) {
                  return e && l(c + o);
                },
              })
            )
          );
        });
      function S(e) {
        e.theme;
        var t = e.style,
          n = Object(O.f)(e, ["theme", "style"]);
        return v.a.createElement(
          j.a,
          Object(O.a)({}, n, { style: Object(O.a)({}, t) })
        );
      }
      var P = n("DPOp"),
        L = function (e) {
          var t = e.title,
            n = e.description,
            r = e.actions,
            a = e.children,
            i = e.className,
            o = e.itemClassName,
            s = e.imgSrc,
            c = e.fullbleed,
            l = e.style,
            m = Object(O.f)(e, [
              "title",
              "description",
              "actions",
              "children",
              "className",
              "itemClassName",
              "imgSrc",
              "fullbleed",
              "style",
            ]),
            u = "url(" + s + ")",
            d = "mobile" === Object(w.f)();
          return v.a.createElement(
            w.a,
            Object(O.a)(
              {
                padding: ["small", "large"],
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                className: Object(x.a)(P.Container, i),
                style: c ? Object(O.a)({ backgroundImage: u }, l) : l,
              },
              m
            ),
            !c && v.a.createElement(B, { src: s }),
            v.a.createElement(
              w.a,
              {
                marginBottom: "medium",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexGrow: 1,
                style: { zIndex: 1 },
              },
              v.a.createElement(
                w.a,
                { display: "flex", flexDirection: "column", flexGrow: 1 },
                v.a.createElement(
                  w.a,
                  {
                    display: "flex",
                    flexDirection: d ? "column" : "row",
                    alignItems: d ? "flex-start" : "center",
                  },
                  v.a.createElement(
                    "div",
                    {
                      style: { transform: "translatey( -1px )" },
                      className: P.Title,
                    },
                    t,
                    " "
                  ),
                  r
                ),
                v.a.createElement("div", { className: P.Description }, n)
              )
            ),
            v.a.createElement(
              w.c,
              {
                spacing: ["xsmall", "small"],
                style: { alignSelf: d ? "flex-start" : "flex-end" },
                itemClassName: o,
              },
              a
            )
          );
        },
        B = function (e) {
          var t = e.src;
          return v.a.createElement(
            v.a.Fragment,
            null,
            v.a.createElement("div", {
              className: P.BackgroundFadeImage,
              style: { backgroundImage: "url(" + t + ")" },
            }),
            v.a.createElement("div", {
              className: P.BackgroundFadeImageBlurred,
              style: { backgroundImage: "url(" + t + ")" },
            }),
            v.a.createElement("div", { className: P.BackgroundFade })
          );
        };
      function R(t) {
        switch (t.descriptor.type) {
          case 1:
            return v.a.createElement(k, Object(O.a)({}, t));
          case 0:
            return v.a.createElement(U, Object(O.a)({}, t));
          case 2:
            return v.a.createElement(w.b, null, function (e) {
              return "mobile" === e
                ? v.a.createElement(W, Object(O.a)({}, t))
                : v.a.createElement(H, Object(O.a)({}, t));
            });
          default:
            return (
              console.error("Unknown cluster display: " + t.descriptor.type),
              null
            );
        }
      }
      var T = n("+j4l"),
        z = n("7R2k"),
        k = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.descriptor,
                n = t.cluster,
                r = (n.id, n.title),
                a = n.subtitle,
                i = n.GetRewards,
                o = t.title,
                s = t.subtitle,
                c = e.linkedPage,
                l = e.additionalFilter,
                m = {
                  getItems: function (e, t) {
                    return i(e, t, l);
                  },
                  title: o || r,
                  subtitle: s || a,
                  route: c ? Object(h.e)(c) : void 0,
                };
              return v.a.createElement(w.b, null, function (e) {
                return "mobile" === e
                  ? v.a.createElement(G, Object(O.a)({}, m))
                  : v.a.createElement(F, Object(O.a)({}, m));
              });
            }),
            (t = Object(O.c)([r.a], t))
          );
        })(v.a.Component),
        G = Object(r.a)(function (e) {
          var t = e.title,
            n = (e.subtitle, e.route),
            r = e.getItems,
            a = v.a.useState(10),
            i = a[0],
            o = a[1],
            s = r(0, i),
            c = s.rewards,
            l = s.bLoadingMore;
          return 0 === s.cTotalMatching
            ? null
            : v.a.createElement(
                j.b,
                {
                  title: t,
                  rightActions: n
                    ? v.a.createElement(
                        g.b,
                        { to: n },
                        v.a.createElement(
                          j.a,
                          null,
                          Object(D.f)("#SeeAllButton")
                        )
                      )
                    : void 0,
                },
                v.a.createElement(M, {
                  items: c,
                  loadMore: function () {
                    return o(i + 10);
                  },
                  bLoadingMore: l,
                  renderItem: function (e) {
                    return v.a.createElement(Z, {
                      definition: e,
                      key: e.defid,
                    });
                  },
                })
              );
        }),
        F = Object(r.a)(function (e) {
          var t = e.title,
            n = e.subtitle,
            r = e.route,
            a = e.getItems,
            i = a(0, 0),
            o = u(
              function (e, t) {
                return a(e, t).rewards;
              },
              function (e) {
                return v.a.createElement(Z, { definition: e, key: e.defid });
              },
              {
                itemClassName: z.ItemHover,
                fnRenderItemSkeleton: function () {
                  return v.a.createElement(N.f, null);
                },
              }
            ),
            s = o.bAllowNext || o.bAllowPrev,
            c = "",
            c =
              !(0 < i.cMaxToReturn) && 0 < i.cTotalMatching
                ? Object(D.f)(
                    "#SeeAllWithCountButton",
                    i.cTotalMatching.toLocaleString()
                  )
                : Object(D.f)("#SeeAllButton");
          if (0 === i.cTotalMatching && !i.bLoadingMore) return null;
          var l = !s;
          return v.a.createElement(
            j.b,
            {
              title: t,
              subtitle: n,
              leftActions:
                r && !l
                  ? v.a.createElement(
                      g.b,
                      { to: r },
                      v.a.createElement(j.a, null, c)
                    )
                  : void 0,
              rightActions: s && v.a.createElement(p, Object(O.a)({}, o)),
            },
            v.a.createElement(
              d,
              Object(O.a)({ style: { width: "100%", flexWrap: "wrap" } }, o)
            )
          );
        }),
        U = Object(r.a)(function (e) {
          var t = e.descriptor,
            n = t.title,
            r = t.subtitle,
            a = t.cluster,
            i = a.id,
            o = a.title,
            s = a.subtitle,
            c = a.GetRewards,
            l = e.additionalFilter;
          return v.a.createElement(
            j.b,
            { title: n || o, subtitle: r || s },
            v.a.createElement(E, {
              style: { width: "100%" },
              itemClassName: z.ItemHover,
              getItems: function (e, t) {
                return c(e, t, l);
              },
              renderItem: function (e) {
                return v.a.createElement(Z, { definition: e, key: e.defid });
              },
              renderItemSkeleton: function () {
                return v.a.createElement(N.f, null);
              },
              key: i + "||" + JSON.stringify(l),
            })
          );
        }),
        H = Object(r.a)(function (e) {
          var t = e.descriptor,
            n = e.additionalFilter,
            r = e.linkedPage;
          if (2 !== t.type)
            return (
              console.error(
                "Attempt to render a hero cluster with a non-hero view. Cluster " +
                  t.cluster.id
              ),
              null
            );
          var a = t.strImage,
            i = t.bFullBleedImage,
            o = t.theme,
            s = t.title,
            c = t.subtitle,
            l = t.cluster,
            m = l.title,
            u = l.subtitle,
            d = l.GetRewards,
            p = r ? Object(h.e)(r) : void 0,
            f = d(0, 3, n),
            _ =
              f.bLoadingMore && 0 === f.rewards.length
                ? [
                    v.a.createElement(N.f, { key: "0" }),
                    v.a.createElement(N.f, { key: "1" }),
                    v.a.createElement(N.f, { key: "2" }),
                  ]
                : f.rewards.map(function (e) {
                    return v.a.createElement(Z, {
                      definition: e,
                      key: e.defid,
                      theme: o,
                    });
                  });
          return v.a.createElement(
            j.b,
            null,
            v.a.createElement(
              L,
              {
                title: s || m,
                description: c || u,
                imgSrc: a,
                fullbleed: i,
                style: { width: "100%" },
                itemClassName: z.ItemHover,
                actions: v.a.createElement(
                  g.b,
                  { to: p },
                  v.a.createElement(
                    S,
                    { theme: o },
                    Object(D.f)("#SeeAllButton")
                  )
                ),
              },
              _
            )
          );
        }),
        W = Object(r.a)(function (e) {
          var t = e.descriptor,
            n = e.additionalFilter,
            r = e.linkedPage;
          if (2 !== t.type)
            return (
              console.error(
                "Attempt to render a hero cluster with a non-hero view. Cluster " +
                  t.cluster.id
              ),
              null
            );
          var a = t.strImage,
            i = t.bFullBleedImage,
            o = t.theme,
            s = t.title,
            c = (t.subtitle, t.cluster),
            l = c.title,
            m = (c.subtitle, c.GetRewards),
            u = r ? Object(h.e)(r) : void 0;
          return v.a.createElement(
            j.b,
            null,
            v.a.createElement(
              L,
              {
                title: s || l,
                description: "",
                imgSrc: a,
                fullbleed: i,
                style: { width: "100%" },
                itemClassName: z.ItemHover,
                actions: v.a.createElement(
                  g.b,
                  { to: u },
                  v.a.createElement(
                    S,
                    { theme: o, className: z.MobileHeroAction },
                    Object(D.f)("#SeeAllButton")
                  )
                ),
              },
              v.a.createElement(M, {
                items: m(0, 2, n).rewards,
                loadMore: function () {},
                renderItem: function (e) {
                  return v.a.createElement(Z, {
                    definition: e,
                    key: e.defid,
                    theme: o,
                  });
                },
              })
            )
          );
        }),
        Z = function (e) {
          var t = e.definition,
            n = e.theme;
          return v.a.createElement(N.e, {
            definition: t,
            onClick: function (e) {
              return Object(T.c)(e, t);
            },
            theme: n,
          });
        },
        Q = n("Qpv1");
      function Y(e) {
        var t = e.title,
          n = e.description,
          r = e.image,
          a = e.linked_page,
          i = e.link_text,
          o = "string" == typeof a ? a : Object(h.e)(a);
        return v.a.createElement(
          j.b,
          null,
          v.a.createElement(
            "div",
            { className: Q.Banner },
            v.a.createElement("img", { className: Q.Image, src: r }),
            v.a.createElement(
              "div",
              { className: Q.Content },
              v.a.createElement("div", { className: Q.Title }, t),
              v.a.createElement("div", { className: Q.Description }, n)
            ),
            v.a.createElement(g.c, { className: Q.Link, to: o }, i)
          )
        );
      }
      var V = n("qD+2"),
        q = n("n4wG"),
        J = n("Matr"),
        X = n("StxQ"),
        K = n("lkRc"),
        $ = n("nXE5"),
        ee = n("0OaU"),
        te = n("nFQ1"),
        ne = n("mgoM"),
        re = n("jUCX"),
        ae = n("WonJ"),
        ie = n.n(ae),
        oe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            Object.defineProperty(t, "hoverClass", {
              get: function () {
                return ie.a.hoverParent;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.persona,
                n = e.animating,
                r = e.className,
                a = e.size,
                i = e.dim,
                o = Object(O.f)(e, [
                  "persona",
                  "animating",
                  "className",
                  "size",
                  "dim",
                ]),
                s = "";
              return (
                "medium" == a
                  ? (s = ie.a.Medium)
                  : "large" == a && (s = ie.a.Large),
                A.createElement(
                  "div",
                  Object(O.a)(
                    {
                      className: Object(x.a)(
                        ie.a.SnoozeContainer,
                        t.online_state,
                        r,
                        n && ie.a.animating,
                        s,
                        i && ie.a.Dim
                      ),
                    },
                    o
                  ),
                  A.createElement(
                    "div",
                    {
                      "data-text": "Z",
                      className: Object(x.a)(ie.a.SnoozeZ, ie.a.Z1),
                    },
                    "Z"
                  ),
                  A.createElement(
                    "div",
                    {
                      "data-text": "Z",
                      className: Object(x.a)(ie.a.SnoozeZ, ie.a.Z2),
                    },
                    "Z"
                  ),
                  A.createElement(
                    "div",
                    {
                      "data-text": "Z",
                      className: Object(x.a)(ie.a.SnoozeZ, ie.a.Z3),
                    },
                    "Z"
                  )
                )
              );
            }),
            (t = Object(O.c)([r.a], t))
          );
        })(A.Component),
        se = n("6Y59"),
        ce = n("Xfd2"),
        le = n.n(ce),
        me = Object(r.a)(function (e) {
          var t = e.persona,
            n = e.className,
            r = Object(O.f)(e, ["persona", "className"]);
          if (!t) return null;
          if (!t.is_online) return null;
          var a = t.HasStateFlag(512),
            i = t.HasStateFlag(2048),
            o = !i && t.HasStateFlag(1024);
          return A.createElement(
            A.Fragment,
            null,
            a &&
              A.createElement(
                "div",
                Object(O.a)(
                  {
                    className: Object(x.a)(
                      n,
                      le.a.PersonaStatusIcon,
                      le.a.MobilePhoneIcon,
                      Object(re.b)(t)
                    ),
                    title: Object(D.f)("#Platform_Hint_Mobile"),
                  },
                  r
                ),
                A.createElement(se.L, null)
              ),
            i &&
              A.createElement(
                "div",
                Object(O.a)(
                  {
                    className: Object(x.a)(
                      n,
                      le.a.PersonaStatusIcon,
                      le.a.VRIcon,
                      Object(re.b)(t)
                    ),
                    title: Object(D.f)("#Platform_Hint_VR"),
                  },
                  r
                ),
                A.createElement(se.eb, null)
              ),
            o &&
              A.createElement(
                "div",
                Object(O.a)(
                  {
                    className: Object(x.a)(
                      n,
                      le.a.PersonaStatusIcon,
                      le.a.BigPictureIcon,
                      Object(re.b)(t)
                    ),
                    title: Object(D.f)("#Platform_Hint_BigPicture"),
                  },
                  r
                ),
                A.createElement(se.e, null)
              )
          );
        }),
        ue = n("ksWZ"),
        de = n.n(ue);
      function pe(e) {
        return A.createElement(
          A.Fragment,
          null,
          A.createElement(
            "span",
            { className: de.a.partyBeaconJoin },
            Object(D.f)("#User_WantsToPlay")
          ),
          " – ",
          e.persona.GetCurrentGameName()
        );
      }
      var fe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                n = e.onContextMenu,
                r = e.persona,
                a = e.eFriendRelationship,
                i = e.bIsSelf,
                o = e.bParenthesizeNicknames,
                s = e.strNickname,
                c = e.bCompactView,
                l = e.bHideGameName,
                m = e.bHideEnhancedRichPresenceLabel,
                u = e.bHideSnooze,
                d = e.renderStatus,
                p = e.renderRichPresence,
                f = e.bHidePersona,
                _ = e.bDNDSet,
                g = e.bHasPartyBeacon,
                h = e.bHasGamePrivacy,
                b = e.bNoMask,
                y = Object(O.f)(e, [
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
                  "renderStatus",
                  "renderRichPresence",
                  "bHidePersona",
                  "bDNDSet",
                  "bHasPartyBeacon",
                  "bHasGamePrivacy",
                  "bNoMask",
                ]),
                v = null,
                w = null,
                C = null,
                I = [
                  t,
                  de.a.personaNameAndStatusLabel,
                  Object(re.b)(r),
                  c && de.a.compactView,
                  b && de.a.NoMask,
                ];
              d
                ? (w = d())
                : g || r.has_public_party_beacon
                ? (w = A.createElement(pe, { persona: r }))
                : Object(ne.a)(a)
                ? ((w = Object(D.f)("#PersonaStateBlocked")),
                  I.push(de.a.blocked))
                : r.is_ingame
                ? ((w =
                    !r.is_in_nonsteam_game || i || Object(ne.b)(a)
                      ? r.GetCurrentGameName()
                      : Object(D.f)("#PersonaStateInNonSteamGame")),
                  i || f
                    ? i &&
                      r.is_awayOrSnooze &&
                      (C = Object(D.f)("#PersonaStateAway"))
                    : (C = r.GetCurrentGameRichPresence()))
                : r.m_broadcastAccountId &&
                  (w = Object(D.f)("#PersonaStateWatchingBroadcast")),
                (w = w || r.GetLocalizedOnlineStatus());
              var M = !1 === u ? !0 : !f && !u;
              r.is_awayOrSnooze &&
                M &&
                (v = A.createElement(oe, { persona: r }));
              var j = null;
              n
                ? (j = A.createElement(
                    "div",
                    { className: "ContextMenuButton", onClick: n },
                    A.createElement(se.v, null)
                  ))
                : I.push(de.a.noContextMenu),
                f && I.push(de.a.hidePersona),
                p && (C = p()),
                (!l && C) || I.push(de.a.twoLine);
              var N = s && !o,
                E = N ? s : r.m_strPlayerName,
                S = !f && (!l || !C) && !m && C;
              return A.createElement(
                "div",
                Object(O.a)({}, y, {
                  className: x.a.apply(void 0, I),
                  onContextMenu: n,
                }),
                A.createElement(
                  "div",
                  {
                    className: Object(x.a)(
                      de.a.statusAndName,
                      S && de.a.threeLines
                    ),
                  },
                  A.createElement(
                    "div",
                    { className: de.a.playerName },
                    E || " ",
                    o &&
                      s &&
                      A.createElement(
                        "span",
                        { className: de.a.playerNickname },
                        "(",
                        s,
                        ")"
                      )
                  ),
                  _ &&
                    A.createElement(
                      "div",
                      {
                        className: de.a.DNDContainer,
                        title: Object(D.f)("#User_ToggleDoNotDisturb"),
                      },
                      A.createElement(se.t, null)
                    ),
                  N &&
                    A.createElement(
                      "span",
                      {
                        className: de.a.playerNicknameBracket,
                        title: Object(D.f)("#isNickname"),
                      },
                      " *"
                    ),
                  A.createElement(me, { persona: r }),
                  v,
                  r.m_bPlayerNamePending &&
                    A.createElement(
                      "div",
                      {
                        className: de.a.PendingPersona,
                        title: Object(D.f)("#SteamChina_PendingPersonaName"),
                      },
                      A.createElement(se.o, null)
                    ),
                  j
                ),
                !f &&
                  A.createElement(
                    "div",
                    { className: de.a.richPresenceContainer },
                    (!l || !C) &&
                      A.createElement(
                        "div",
                        {
                          className: Object(x.a)(
                            de.a.gameName,
                            de.a.richPresenceLabel,
                            "no-drag"
                          ),
                        },
                        h &&
                          A.createElement(
                            "div",
                            {
                              className: de.a.gameIsPrivateIcon,
                              title: Object(D.f)("#User_GameInfoHidden"),
                            },
                            A.createElement(se.B, null)
                          ),
                        w
                      ),
                    !m &&
                      C &&
                      A.createElement(
                        "div",
                        {
                          className: Object(x.a)(
                            de.a.richPresenceLabel,
                            "no-drag"
                          ),
                        },
                        C,
                        " "
                      )
                  )
              );
            }),
            (t = Object(O.c)([r.a], t))
          );
        })(A.Component),
        _e =
          (Object(r.a)(function (e) {
            var t = e.persona,
              n = e.bParenthesizeNicknames,
              r = e.strNickname,
              a = e.className,
              i = Object(O.f)(e, [
                "persona",
                "bParenthesizeNicknames",
                "strNickname",
                "className",
              ]),
              o = r && !n ? r : t.m_strPlayerName;
            return A.createElement(
              "span",
              Object(O.a)({}, i, {
                className: Object(x.a)(a, Object(re.b)(t)),
              }),
              A.createElement(
                "span",
                { className: de.a.playerName },
                o || " ",
                n &&
                  r &&
                  A.createElement(
                    "span",
                    { className: de.a.playerNickname },
                    "(",
                    r,
                    ")"
                  )
              )
            );
          }),
          n("Gpul")),
        ge = Object(r.a)(function () {
          var e = Object(A.useRef)(null),
            t = Object(A.useRef)(null),
            n = h.b.Get().GetGoldenProfileDefinition();
          if (!n) return null;
          if (!h.b.Get().BHasAutumnSaleStarted()) return null;
          var r = h.b.Get().GetPersonaState(),
            a = h.b.Get().GetEquippedItems();
          return v.a.createElement(
            $.e,
            { background: te },
            v.a.createElement(
              w.a,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              v.a.createElement(
                w.a,
                {
                  className: J.GoldenProfileHeaderContainer,
                  paddingY: "large",
                  display: "flex",
                  flexDirection: "row",
                },
                v.a.createElement(
                  "div",
                  { className: J.PersonaPreviewContainer },
                  r
                    ? v.a.createElement(
                        w.a,
                        {
                          className: J.PersonaPreviewContainer,
                          paddingY: "none",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                        },
                        v.a.createElement(
                          "div",
                          { className: J.AvatarAndPersonaContainer },
                          v.a.createElement(
                            "div",
                            { className: J.AvatarHolder },
                            v.a.createElement(_e.c, {
                              size: "FillArea",
                              className: J.CurrentAvatar,
                              persona: r,
                              animatedAvatar: a.animated_avatar,
                            })
                          ),
                          v.a.createElement(fe, {
                            persona: r,
                            bIsSelf: !0,
                            eFriendRelationship: 0,
                            bParenthesizeNicknames: !1,
                            strNickname: null,
                            bCompactView: !1,
                          })
                        )
                      )
                    : null
                ),
                v.a.createElement(
                  w.a,
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 1",
                  },
                  v.a.createElement(
                    "div",
                    { className: J.GoldenProfileTitle },
                    Object(D.f)("#GoldenProfile_Title")
                  ),
                  v.a.createElement(
                    "div",
                    { className: J.GoldenProfileDesc },
                    Object(D.f)("#GoldenProfile_Desc")
                  ),
                  v.a.createElement(
                    "div",
                    { className: J.GoldenProfileDesc },
                    Object(D.f)("#GoldenProfile_Expiration")
                  ),
                  v.a.createElement(
                    i.a,
                    { className: J.BlueButton },
                    v.a.createElement(
                      X.a,
                      {
                        className: J.GoldenProfileCost,
                        onClick: function (e) {
                          return Object(T.c)(e, n);
                        },
                        size: 1.125,
                        amount: parseInt(n.point_cost),
                      },
                      " ",
                      Object(D.f)("#Rewards_Points")
                    )
                  )
                )
              ),
              v.a.createElement(
                "div",
                { className: J.ProfileContainer },
                v.a.createElement(
                  "div",
                  { ref: t, className: J.ProfileThrobber },
                  v.a.createElement(ee.a, {
                    position: "center",
                    size: "xlarge",
                    string: Object(D.f)("#GoldenProfile_Loading"),
                  })
                ),
                v.a.createElement("iframe", {
                  ref: e,
                  className: J.ProfileFrame,
                  src:
                    K.c.COMMUNITY_BASE_URL +
                    "profiles/" +
                    (h.b.Get().BIsLoggedIn()
                      ? K.i.steamid
                      : 2 == K.c.EUNIVERSE
                      ? "148618792083695825"
                      : "76561197960266962") +
                    "?previewprofile=1",
                  frameBorder: 0,
                  scrolling: "no",
                  onLoad: function () {
                    (e.current.style.opacity = 1),
                      (t.current.style.opacity = 0);
                  },
                })
              )
            )
          );
        }),
        he = n("/SGo"),
        be = n.n(he),
        ye = n("eOCM"),
        ve = n("HJR3"),
        we = n("DtjR"),
        Ce = n("TBZS"),
        Ie = n("+m6q"),
        Me = n("IfXo"),
        je = n("V+CE"),
        Ne = n("RImk"),
        Ee = n("e1m+"),
        Se = n("cOvF"),
        Oe = n("Vlb1"),
        Ae = n("Gp1o"),
        De = n("CdLH"),
        xe = Object(r.a)(function (e) {
          var t,
            n = {
              item_name: "Free Item",
              item_title: Object(D.f)("#SummerSale_ItemTitle"),
              animated: !0,
            },
            r = {
              defid: void 0,
              appid: h.b.Get().GetCurrentSeasonalAppID(),
              type: 1,
              community_item_class: 11,
              point_cost: "0",
              quantity: "1",
              active: !0,
              community_item_data: n,
            },
            a = null,
            i = null,
            o = function (e) {
              return Object(T.c)(e, r, null, !0);
            },
            s = Ee,
            c = Object(D.f)("#SummerSale_ItemName"),
            l = h.c.Get().BCanClaimFreeSaleReward();
          return (
            l ||
              ((i = v.a.createElement(
                "div",
                { className: Oe.ClaimedText },
                Object(D.f)("#Rewards_Claimed")
              )),
              (a = Object(x.a)(Ne.SaleRewardItemOwned, Oe.OwnedItem)),
              (o = null),
              (t = h.c.Get().GetClaimedSaleRewardItemDef()) &&
                ((c = t.community_item_data.item_title),
                (s =
                  K.c.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  t.appid +
                  "/" +
                  t.community_item_data.item_image_small))),
            v.a.createElement(
              w.a,
              {
                padding: "large",
                display: "flex",
                flexDirection: "column",
                className: Ne.SaleRewardContainer,
              },
              v.a.createElement(
                w.a,
                { className: Ne.SaleRewardContainerFlex },
                v.a.createElement(
                  w.a,
                  { display: "flex", flexDirection: "column" },
                  v.a.createElement(
                    "div",
                    { className: Ne.SaleRewardLogoContainerFlex },
                    v.a.createElement("img", {
                      className: Ne.SaleRewardLogo,
                      alt: "Sale",
                      src: h.b.Get().GetFreeItemHeaderSource(),
                    })
                  ),
                  v.a.createElement(
                    "div",
                    { className: Ne.SaleRewardTextContainer },
                    v.a.createElement(
                      "div",
                      { className: Ne.SaleRewardSubHeader },
                      Object(D.f)("#SummerSale_FreeDesc_2")
                    ),
                    !l &&
                      v.a.createElement(
                        "div",
                        { className: Ne.SummerNextStop },
                        v.a.createElement(Pe, null)
                      ),
                    v.a.createElement(
                      g.b,
                      {
                        className: Ne.RulesLink,
                        to: m.b.LoyaltyGiveawayRules(),
                      },
                      Object(D.f)("#SummerSale_Redeem_Rules")
                    )
                  )
                ),
                v.a.createElement(
                  "div",
                  { className: Ne.FreeItemContainer },
                  v.a.createElement(
                    N.a,
                    {
                      name: c,
                      cost: 0,
                      attributes: [
                        v.a.createElement(Se.a, {
                          className: Oe.IconAnimated,
                          key: "animated",
                        }),
                      ],
                      iconComponent: se.m,
                      styleOverride: a,
                      desc: Object(D.f)("#CommunityItemClass_Sticker"),
                      strPriceOverride: i,
                      onClick: o,
                    },
                    v.a.createElement("img", {
                      className: Oe.ImageMedium,
                      src: s,
                    })
                  )
                )
              )
            )
          );
        }),
        Pe = Object(r.a)(function () {
          var e = h.c.Get().GetNextClaimTime();
          return e
            ? v.a.createElement(
                "span",
                { className: Ne.NextStop },
                v.a.createElement(
                  "span",
                  { className: Ne.Title },
                  Object(D.f)("#SummerSale_NextStop")
                ),
                v.a.createElement(Le, {
                  className: Ne.Timer,
                  time: e.getTime(),
                })
              )
            : null;
        }),
        Le = Object(r.a)(function (e) {
          var t = e.time,
            n = Object(O.f)(e, ["time"]),
            r = Math.floor(Math.max(0, t - Ae.c()) / 1e3),
            a = Math.floor(r / De.e.PerHour),
            i = Math.floor((r - a * De.e.PerHour) / De.e.PerMinute),
            o = Math.floor(r - (a * De.e.PerHour + i * De.e.PerMinute));
          return v.a.createElement(
            "span",
            Object(O.a)({ style: { fontFamily: "monospace" } }, n),
            Be(a),
            ":",
            Be(i),
            ":",
            Be(o)
          );
        }),
        Be = function (e) {
          return e.toString().padStart(2, "0");
        },
        Re = v.a.lazy(function () {
          return n.e(40).then(n.bind(null, "yDev"));
        }),
        Te = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            (t.prototype.render = function () {
              return v.a.createElement(
                v.a.Fragment,
                null,
                v.a.createElement(Ge, null),
                v.a.createElement(ze, null)
              );
            }),
            (t = Object(O.c)([r.a], t))
          );
        })(v.a.Component),
        ze = Object(r.a)(function () {
          var e = Object(a.h)("*/reward/:definitionid"),
            t = e && e.params && e.params.definitionid,
            n = parseInt(t),
            r = isNaN(n) ? null : h.b.Get().GetRewardItem(n);
          return (
            v.a.useEffect(
              function () {
                r && Object(T.c)(null, r);
              },
              [r]
            ),
            null
          );
        }),
        ke = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            (t.prototype.GetCoupon = function () {
              var e = h.b.Get().GetCouponPromosForUser(),
                r = h.b.Get().GetPointsAvailable(),
                a = 0,
                i = 0;
              return (
                e.forEach(function (e) {
                  var t = h.b.Get().GetCouponDefinition(e.loyalty_reward_id);
                  if (t) {
                    e.max_use_count,
                      parseInt(e.discount_amount),
                      e.available_use_count;
                    for (var n = 0; n < e.available_use_count; n++) {
                      a + parseInt(t.point_cost) <= r.getLowBits() &&
                        ((i += parseInt(e.discount_amount)),
                        (a += parseInt(t.point_cost))),
                        (i = Math.max(i, parseInt(e.discount_amount))),
                        (a = a || parseInt(t.point_cost));
                    }
                  }
                }),
                null
              );
            }),
            (t.prototype.render = function () {
              var t = [];
              h.b
                .Get()
                .getLoyaltyRewardDefMap()
                .forEach(function (e) {
                  t.length < 3 && 1 == e.type && t.push(e);
                });
              var e = h.b
                  .Get()
                  .GetPageDescriptor({ type: "custom", pageid: h.f }),
                n = v.a.createElement(
                  "div",
                  { className: l.PageHomeTop },
                  v.a.createElement(
                    "div",
                    { className: l.PageHomeBanner },
                    v.a.createElement("img", {
                      className: l.HomeRewardsPointsIcon,
                      src: be.a,
                    }),
                    v.a.createElement("img", {
                      className: l.PageHomeBannerFloor,
                      src: je,
                    }),
                    v.a.createElement(
                      "div",
                      { className: l.PageHomeBannerIcons },
                      v.a.createElement("img", {
                        className: l.PageHomeBannerChicken,
                        src: Ce,
                      }),
                      v.a.createElement("img", {
                        className: l.PageHomeBannerBored,
                        src: ye,
                      }),
                      v.a.createElement("img", {
                        className: l.PageHomeBannerHugs,
                        src: Ie,
                      }),
                      v.a.createElement("img", {
                        className: l.PageHomeBannerHappy,
                        src: ve,
                      }),
                      v.a.createElement("img", {
                        className: l.PageHomeBannerBoombox,
                        src: we,
                      }),
                      v.a.createElement("img", {
                        className: l.PageHomeBannerDance,
                        src: Me,
                      })
                    )
                  ),
                  v.a.createElement(
                    "div",
                    { className: l.PageHomeTitleContainer },
                    v.a.createElement(
                      "div",
                      { className: l.PageHomeTopTitle },
                      Object(D.f)("#ShopHome_UseRewardPoints")
                    ),
                    v.a.createElement(
                      "div",
                      { className: l.PageHomeTopSubTitle },
                      Object(D.f)("#ShopHome_UseRewardPoints_Subtitle")
                    )
                  ),
                  v.a.createElement(
                    g.b,
                    { to: m.b.LoyaltyHowItWorks() },
                    v.a.createElement(
                      i.a,
                      { className: l.PageHomeHowItWorks },
                      " ",
                      Object(D.f)("#ShopHome_HowLinkBtn")
                    )
                  )
                );
              return v.a.createElement(
                $.b,
                null,
                e &&
                  v.a.createElement(
                    Ze,
                    { header: n, descriptor: e },
                    h.b.Get().BIsSaleActive() &&
                      v.a.createElement(j.b, null, v.a.createElement(xe, null))
                  )
              );
            }),
            (t = Object(O.c)([r.a], t))
          );
        })(v.a.Component),
        Ge = function () {
          return v.a.createElement(
            a.d,
            null,
            v.a.createElement(
              a.b,
              { path: m.b.LoyaltySteamBadge() },
              v.a.createElement(Ue, null)
            ),
            v.a.createElement(
              a.b,
              { path: m.b.LoyaltyProfile() },
              v.a.createElement(Fe, null)
            ),
            v.a.createElement(
              a.b,
              { path: m.b.LoyaltyByGame() },
              v.a.createElement(Je, null)
            ),
            !1,
            v.a.createElement(
              a.b,
              { path: m.b.LoyaltyProfileCustomizations() },
              v.a.createElement(Re, null)
            ),
            v.a.createElement(a.b, {
              path: m.b.LoyaltyStore() + "/app/:appid/cluster/:clusterindex",
              render: function (e) {
                return v.a.createElement(Qe, Object(O.a)({}, e));
              },
            }),
            v.a.createElement(a.b, {
              path: m.b.LoyaltyStore() + "/app/:appid",
              render: function (e) {
                return v.a.createElement(Ye, {
                  appid: parseInt(e.match.params.appid),
                });
              },
            }),
            v.a.createElement(a.b, {
              path: m.b.LoyaltyStore() + "/c/:pageid/cluster/:clusterindex",
              render: function (e) {
                return v.a.createElement(Qe, Object(O.a)({}, e));
              },
            }),
            v.a.createElement(a.b, {
              path: m.b.LoyaltyStore() + "/c/:pageid",
              render: function (e) {
                return v.a.createElement(We, { pageid: e.match.params.pageid });
              },
            }),
            v.a.createElement(a.b, null, v.a.createElement(He, null))
          );
        },
        Fe = function () {
          return v.a.createElement(ge, null);
        },
        Ue = function () {
          return v.a.createElement(q.b, null);
        },
        He = function () {
          return v.a.createElement(ke, null);
        },
        We = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            (t.prototype.componentDidMount = function () {
              h.b.Get().SetIsUsingAppIDFilters(!0);
            }),
            (t.prototype.componentWillUnmount = function () {
              h.b.Get().SetIsUsingAppIDFilters(!1);
            }),
            (t.prototype.render = function () {
              var e = this.props.pageid,
                t = h.b.Get().GetAppIDFilters(),
                n = Array.from(t.keys()),
                r = h.b.Get().GetPageDescriptor({ type: "custom", pageid: e });
              return v.a.createElement(
                $.e,
                null,
                r
                  ? v.a.createElement(Ze, {
                      descriptor: r,
                      additionalFilter: n.length ? { appid: n } : void 0,
                    })
                  : v.a.createElement(s.a, null)
              );
            }),
            (t = Object(O.c)([r.a], t))
          );
        })(v.a.Component),
        Ze = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.descriptor,
                n = t.items,
                r = t.title,
                a = t.subtitle,
                i = t.params,
                o = e.header,
                s = e.additionalFilter,
                c = o || v.a.createElement(Ve, { title: r, subtitle: a });
              return v.a.createElement(
                w.a,
                { paddingX: "none" },
                v.a.createElement(
                  w.e,
                  {
                    className: l.PageItemsContainer,
                    itemClassName: l.PageItemsContainerChildren,
                    spacing: "xlarge",
                  },
                  c,
                  this.props.children,
                  n.map(function (e, t) {
                    switch (e.type) {
                      case "banner":
                        e.type;
                        var n = Object(O.f)(e, ["type"]);
                        return v.a.createElement(
                          Y,
                          Object(O.a)({}, n, { key: e.title + "_" + t })
                        );
                      case "clusterview":
                        return v.a.createElement(R, {
                          key: e.view.cluster.id + "_" + t,
                          descriptor: e.view,
                          additionalFilter: s,
                          linkedPage:
                            null === e.view.linkedPage
                              ? void 0
                              : e.view.linkedPage ||
                                Object(O.a)(Object(O.a)({}, i), {
                                  clusterindex: t,
                                }),
                        });
                    }
                  })
                )
              );
            }),
            (t = Object(O.c)([r.a], t))
          );
        })(v.a.Component),
        Qe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            (t.prototype.componentDidMount = function () {
              h.b.Get().SetIsUsingAppIDFilters(!0);
            }),
            (t.prototype.componentWillUnmount = function () {
              h.b.Get().SetIsUsingAppIDFilters(!1);
            }),
            (t.prototype.DeriveClusterView = function () {
              var e,
                t = this.props.match.params,
                n = t.pageid,
                r = t.appid,
                a = t.clusterindex,
                i = parseInt(a);
              if (isNaN(i)) return null;
              if (n) e = { type: "custom", pageid: n };
              else {
                if (!r)
                  return (
                    console.error(
                      "Could not determine owning page for cluster"
                    ),
                    null
                  );
                var o = parseInt(r);
                if (isNaN(o)) return null;
                e = { type: "app", appid: o };
              }
              var s = h.b.Get().GetPageDescriptor(e);
              if (!s) return null;
              var c = s.items[i];
              return c && "clusterview" === c.type
                ? Object(O.a)(Object(O.a)({}, c.view), { type: 0 })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.DeriveClusterView();
              if (!e) return null;
              var t = h.b.Get().GetAppIDFilters(),
                n = Array.from(t.keys());
              return v.a.createElement(
                $.e,
                null,
                v.a.createElement(
                  w.a,
                  {
                    paddingY: "xlarge",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                  v.a.createElement(R, {
                    descriptor: e,
                    additionalFilter: n.length ? { appid: n } : void 0,
                  })
                )
              );
            }),
            (t = Object(O.c)([r.a], t))
          );
        })(v.a.Component),
        Ye = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props.appid,
                t = h.b.Get().GetPageDescriptor({ type: "app", appid: e }),
                n = V.a.GetAppInfo(e);
              return t
                ? v.a.createElement(
                    $.a,
                    { appid: e },
                    v.a.createElement(Ze, {
                      header: v.a.createElement(Ve, {
                        title: v.a.createElement(
                          "a",
                          { href: K.c.STORE_BASE_URL + "app/" + n.appid },
                          n.name
                        ),
                        subtitle: t.subtitle,
                      }),
                      descriptor: t,
                    })
                  )
                : null;
            }),
            (t = Object(O.c)([r.a], t))
          );
        })(v.a.Component),
        Ve = function (e) {
          var t = e.title,
            n = e.subtitle;
          return v.a.createElement(
            v.a.Fragment,
            null,
            v.a.createElement("div", { className: l.PageTitle }, t),
            n && v.a.createElement("div", { className: l.PageSubtitle }, n)
          );
        },
        qe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(O.d)(t, e),
            (t.prototype.render = function () {
              return h.b.Get().BIsLoggedIn()
                ? this.props.children
                : v.a.createElement(
                    $.e,
                    null,
                    v.a.createElement(Ze, {
                      descriptor: this.props.descriptor,
                    }),
                    v.a.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        },
                      },
                      v.a.createElement(
                        "div",
                        null,
                        Object(D.f)("#RequiresLogin_Desc")
                      ),
                      v.a.createElement(
                        "div",
                        { style: { paddingTop: "10px" } },
                        v.a.createElement(
                          "span",
                          {
                            className: Object(x.a)(
                              "btn_green_white_innerfade",
                              " btn_medium"
                            ),
                            onClick: function () {
                              return h.b.Get().ShowLoginDialog();
                            },
                          },
                          v.a.createElement(
                            "span",
                            null,
                            Object(D.f)("#RequiresLogin_Button")
                          )
                        )
                      )
                    )
                  );
            }),
            t
          );
        })(v.a.Component),
        Je = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { cVisible: 5 }), e;
          }
          return (
            Object(O.d)(e, t),
            (e.prototype.componentDidMount = function () {
              h.b.Get().SetIsUsingAppIDFilters(!0);
            }),
            (e.prototype.componentWillUnmount = function () {
              h.b.Get().SetIsUsingAppIDFilters(!1);
            }),
            (e.prototype.render = function () {
              var t = this,
                n = this.state.cVisible,
                r = h.b.Get().GetAppIDFilters(),
                a = h.b.Get().GetSortedGamesWithRewards();
              0 != r.size &&
                (a = a.filter(function (e) {
                  return r.has(e);
                }));
              var e = {
                title: Object(D.f)("#ShopPageTitle_ByGame"),
                subtitle: Object(D.f)("#ShopPageTitle_ByGame_Subtitle"),
                items: a.slice(0, n).map(function (e) {
                  return {
                    type: "clusterview",
                    view: {
                      type: 1,
                      linkedPage: { type: "app", appid: e },
                      cluster: new h.a(e),
                    },
                  };
                }),
                params: { type: "custom", pageid: "bygame" },
              };
              return v.a.createElement(
                qe,
                { descriptor: e },
                v.a.createElement(
                  $.e,
                  null,
                  v.a.createElement(Ze, { descriptor: e }),
                  v.a.createElement(f.a, {
                    trigger: "repeated",
                    onVisibiltyChange: function (e) {
                      return (
                        e && n < a.length && t.setState({ cVisible: n + 10 })
                      );
                    },
                    rootMargin: "0px 0px 100px 0px",
                  })
                )
              );
            }),
            (e = Object(O.c)([r.a], e))
          );
        })(v.a.Component);
    },
    Gpul: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return i;
        });
      var c = n("mrSG"),
        l = n("q1tI"),
        r = n("TyAF"),
        s = n("jUCX"),
        m = n("exH9"),
        a = n("WeG9"),
        u = n.n(a),
        d = n("lkRc"),
        p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(c.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.strAvatarURL,
                n = e.size,
                r = e.className,
                a = e.statusStyle,
                i = e.statusPosition,
                o = e.children,
                s = Object(c.f)(e, [
                  "strAvatarURL",
                  "size",
                  "className",
                  "statusStyle",
                  "statusPosition",
                  "children",
                ]);
              return l.createElement(
                "div",
                Object(c.a)(
                  {
                    className: Object(m.a)(
                      u.a.avatarHolder,
                      "avatarHolder",
                      "no-drag",
                      n || "Medium",
                      r
                    ),
                  },
                  s
                ),
                l.createElement("div", {
                  className: Object(m.a)(u.a.avatarStatus, "avatarStatus", i),
                  style: a,
                }),
                l.createElement("img", {
                  className: Object(m.a)(u.a.avatar, "avatar"),
                  src: t,
                  draggable: !1,
                }),
                o
              );
            }),
            t
          );
        })(l.Component),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(c.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.persona,
                n = e.size,
                r = e.animatedAvatar,
                a = e.className,
                i = Object(c.f)(e, [
                  "persona",
                  "size",
                  "animatedAvatar",
                  "className",
                ]),
                o = "";
              return (
                r && r.image_small && 0 != r.image_small.length
                  ? (o =
                      d.c.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small)
                  : t
                  ? ((o = t.avatar_url_medium),
                    "Small" == n || "X-Small" == n
                      ? (o = t.avatar_url)
                      : ("Large" != n && "X-Large" != n && "FillArea" != n) ||
                        (o = t.avatar_url_full))
                  : ((o =
                      d.c.MEDIA_CDN_COMMUNITY_URL +
                      "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"),
                    "Small" == n || "X-Small" == n
                      ? (o =
                          d.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg")
                      : ("Large" != n && "X-Large" != n && "FillArea" != n) ||
                        (o =
                          d.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg")),
                l.createElement(
                  p,
                  Object(c.a)(
                    {
                      strAvatarURL: o,
                      size: n,
                      className: Object(m.a)(Object(s.b)(t), a),
                    },
                    i
                  )
                )
              );
            }),
            (t = Object(c.c)([r.a], t))
          );
        })(l.Component),
        f = Object(r.a)(function (e) {
          var t = e.profileItem,
            n = e.className,
            r = e.bDisableAnimation,
            a = Object(c.f)(e, [
              "profileItem",
              "className",
              "bDisableAnimation",
            ]);
          if (!t || !t.image_small || 0 == t.image_small.length) return null;
          var i = r ? t.image_large : t.image_small;
          return (
            (i = i || t.image_small).startsWith("https://") ||
              (i = d.c.MEDIA_CDN_COMMUNITY_URL + "images/" + i),
            l.createElement(
              "div",
              Object(c.a)(
                { className: Object(m.a)(u.a.avatarFrame, n, "avatarFrame") },
                a
              ),
              l.createElement("img", { className: u.a.avatarFrameImg, src: i })
            )
          );
        }),
        i = (function (n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.state = { bAnimate: "None" != t.props.loopDuration }),
              (t.m_timer = 0),
              t
            );
          }
          return (
            Object(c.d)(e, n),
            (e.prototype.componentDidMount = function () {
              this.SetupAnimationTimer();
            }),
            (e.prototype.SetupAnimationTimer = function () {
              var e = this,
                t = 0;
              switch (this.props.loopDuration) {
                case "Short":
                  t = 2500;
                  break;
                case "Medium":
                  t = 5e3;
                  break;
                case "Long":
                  t = 1e4;
              }
              0 != t &&
                (this.m_timer = window.setTimeout(function () {
                  return e.setState({ bAnimate: !1 });
                }, t));
            }),
            (e.prototype.StopAnimationTimer = function () {
              this.m_timer &&
                (window.clearTimeout(this.m_timer), (this.m_timer = 0));
            }),
            (e.prototype.componentWillUnmount = function () {
              this.StopAnimationTimer();
            }),
            (e.prototype.componentDidUpdate = function (e) {
              this.props.loopDuration != e.loopDuration &&
                ("None" == this.props.loopDuration
                  ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                  : "Infinite" == this.props.loopDuration &&
                    (this.setState({ bAnimate: !0 }),
                    this.StopAnimationTimer()));
            }),
            (e.prototype.render = function () {
              var e = this.props,
                t = (e.loopDuration, e.animatedAvatar),
                n = e.avatarFrame,
                r = e.children,
                a = e.style,
                i = Object(c.f)(e, [
                  "loopDuration",
                  "animatedAvatar",
                  "avatarFrame",
                  "children",
                  "style",
                ]);
              return (
                i.onClick &&
                  (a = Object(c.a)(Object(c.a)({}, a), { cursor: "pointer" })),
                this.state.bAnimate || (t = null),
                l.createElement(
                  o,
                  Object(c.a)({ animatedAvatar: t }, i),
                  r,
                  l.createElement(f, {
                    profileItem: n,
                    bDisableAnimation: "None" === this.props.loopDuration,
                  })
                )
              );
            }),
            (e = Object(c.c)([r.a], e))
          );
        })(l.Component);
    },
    HJR3: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/happy.png?v=valveisgoodatcaching";
    },
    ICG5: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA2IiBoZWlnaHQ9IjUyIiB2aWV3Qm94PSIwIDAgMjA2IDUyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEzMi44ODEgOC44MTRDMTM0LjQyNyAxMy4yMTAyIDEzNC42ODQgMTkuNDE2NiAxMjkuNzkgMjQuMzI5OUwxMDMgNTJMNzYuMjEgMjQuMzI5OUM3MS4zMTU3IDE5LjQxNjYgNzEuNTczMyAxMi45NTE2IDczLjExODkgOC44MTRDNzUuMTc5NiAzLjY0MjAzIDc5LjgxNjQgMC4yODAyMzggODUuMjI1OSAwLjAyMTYzOTRDODUuNDgzNSAwLjAyMTYzOTQgODUuNzQxMSAwLjAyMTYzOTQgODYuMjU2MyAwLjAyMTYzOTRDOTEuMTUwNiAwLjAyMTYzOTQgOTUuNzg3MyAyLjA5MDQzIDk5LjM5MzYgNS43MTA4MkMxMDEuNDU0IDcuNzc5NjEgMTA0LjgwMyA3Ljc3OTYxIDEwNi44NjQgNS43MTA4MkMxMTAuNDcgMS44MzE4MyAxMTUuNjIyIDAuMDIxNjM5NCAxMjAuNzc0IDAuMDIxNjM5NEMxMjYuMTg0IDAuMjgwMjM4IDEzMC44MiAzLjY0MjAzIDEzMi44ODEgOC44MTRaTTQ4LjY0NzMgMC4wMjE2Mzk0QzQzLjQ5NTMgLTAuMjM2OTU5IDM4LjM0MzQgMS44MzE4MyAzNC43MzcxIDUuNzEwODJDMzIuNjc2MyA3Ljc3OTYxIDI5LjMyNzYgNy43Nzk2MSAyNy4yNjY4IDUuNzEwODJDMjMuOTE4IDIuMDkwNDMgMTkuMjgxMyAwLjAyMTYzOTQgMTQuMTI5NCAwLjAyMTYzOTRDMTMuODcxOCAwLjAyMTYzOTQgMTMuNjE0MiAwLjAyMTYzOTQgMTMuMDk5IDAuMDIxNjM5NEM3LjQzMTkgMC4yODAyMzggMy4wNTI3NyAzLjY0MjAzIDAuOTkyMDAyIDguODE0Qy0wLjU1MzU3NCAxMy4yMTAyIC0wLjgxMTE2OCAxOS40MTY2IDQuMDgzMTYgMjQuMzI5OUwzMC44NzMxIDUyTDU3LjY2MzEgMjQuNTg4NUM2Mi41NTc0IDE5LjY3NTEgNjIuMjk5OCAxMy4yMTAyIDYwLjc1NDMgOS4wNzI2QzU4LjY5MzUgMy42NDIwMiA1NC4wNTY4IDAuMjgwMjM4IDQ4LjY0NzMgMC4wMjE2Mzk0Wk0yMDUuMDA4IDguODE0QzIwMi45NDcgMy42NDIwMyAxOTguMzExIDAuMjgwMjM4IDE5Mi45MDEgMC4wMjE2Mzk0QzE4Ny43NDkgLTAuMjM2OTU5IDE4Mi41OTcgMS44MzE4MyAxNzguOTkxIDUuNzEwODJDMTc2LjkzIDcuNzc5NjEgMTczLjU4MSA3Ljc3OTYxIDE3MS41MjEgNS43MTA4MkMxNjguMTcyIDIuMDkwNDMgMTYzLjUzNSAwLjAyMTYzOTQgMTU4LjM4MyAwLjAyMTYzOTRDMTU4LjEyNiAwLjAyMTYzOTQgMTU3Ljg2OCAwLjAyMTYzOTQgMTU3LjM1MyAwLjAyMTYzOTRDMTUxLjY4NiAwLjI4MDIzOCAxNDcuMzA3IDMuNjQyMDMgMTQ1LjI0NiA4LjgxNEMxNDMuNyAxMy4yMTAyIDE0My40NDMgMTkuNDE2NiAxNDguMzM3IDI0LjMyOTlMMTc1LjEyNyA1MkwyMDEuOTE3IDI0LjU4ODVDMjA2LjgxMSAxOS40MTY1IDIwNi41NTQgMTMuMjEwMiAyMDUuMDA4IDguODE0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEwMyIgeTE9IjAiIHgyPSIxMDMiIHkyPSI1MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC41OCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K";
    },
    IfXo: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/dance.png?v=valveisgoodatcaching";
    },
    IoTS: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_4.svg?v=valveisgoodatcaching";
    },
    J7z0: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_1.svg?v=valveisgoodatcaching";
    },
    J8Mo: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/dota_happy_ursa.png?v=valveisgoodatcaching";
    },
    Lvue: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/csgo_sas_bg.jpg?v=valveisgoodatcaching";
    },
    M2Z0: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/deep_thoughts_anim0000.png?v=valveisgoodatcaching";
    },
    MLaC: function (e, t, n) {
      e.exports = { Pulse: "pulse_Pulse_V5Gbv", pulse: "pulse_pulse_1qxHE" };
    },
    Matr: function (e, t, n) {
      e.exports = {
        ProfileFrame: "goldenprofile_ProfileFrame_2SyjH",
        ProfileThrobber: "goldenprofile_ProfileThrobber_DEqbY",
        ProfileContainer: "goldenprofile_ProfileContainer_3XMzf",
        BlueButton: "goldenprofile_BlueButton_2fUe5",
        BlueButtonSmall: "goldenprofile_BlueButtonSmall_14c5j",
        GoldenProfileTitle: "goldenprofile_GoldenProfileTitle_NQHuf",
        GoldenProfileDesc: "goldenprofile_GoldenProfileDesc_3sA5L",
        PersonaPreviewContainer: "goldenprofile_PersonaPreviewContainer_2eBHX",
        GoldenProfileHeaderContainer:
          "goldenprofile_GoldenProfileHeaderContainer_2rQ4m",
        AvatarAndPersonaContainer:
          "goldenprofile_AvatarAndPersonaContainer_f6Cly",
        AvatarHolder: "goldenprofile_AvatarHolder_22fux",
        CurrentAvatar: "goldenprofile_CurrentAvatar_2k8zo",
        GoldenProfileCost: "goldenprofile_GoldenProfileCost_2td9S",
      };
    },
    NTEj: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTEiIGhlaWdodD0iMTE4IiB2aWV3Qm94PSIwIDAgOTEgMTE4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEwLjYzNiAwSDAuOTgxNDQ1VjExOEgxMC42MzZWMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPg0KPHBhdGggZD0iTTY0Ljk3NSAyOC40ODA0TDcxLjc4MTggMzMuMjU0NVYwSDU0LjYxODJWMzMuMjU0NUw2MS40MjUgMjguNDgwNEM2MS45NDQxIDI4LjExNjIgNjIuNTY0MyAyNy45MjA3IDYzLjIgMjcuOTIwN0M2My44MzU3IDI3LjkyMDcgNjQuNDU1OCAyOC4xMTYyIDY0Ljk3NSAyOC40ODA0WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8cGF0aCBkPSJNOTAuMDE4MiAwSDc3LjE5OTdWMzkuMjYyM0M3Ny4xOTkgMzkuODIzMSA3Ny4wNDQ0IDQwLjM3MjkgNzYuNzUyNSA0MC44NTE4Qzc2LjQ2MDcgNDEuMzMwNyA3Ni4wNDMgNDEuNzIwMSA3NS41NDQ5IDQxLjk3NzZDNzUuMDQ2OSA0Mi4yMzUyIDc0LjQ4NzcgNDIuMzUwOSA3My45Mjg0IDQyLjMxMjFDNzMuMzY5MSA0Mi4yNzMzIDcyLjgzMTEgNDIuMDgxNiA3Mi4zNzM0IDQxLjc1NzhMNjIuNTQxMiAzNC44MDc4TDUyLjcwOSA0MS43NTc4QzUyLjI1MTEgNDIuMDgxNCA1MS43MTMgNDIuMjczIDUxLjE1MzUgNDIuMzExNUM1MC41OTQxIDQyLjM1IDUwLjAzNDkgNDIuMjM0IDQ5LjUzNjkgNDEuOTc2MUM0OS4wMzg5IDQxLjcxODIgNDguNjIxNCA0MS4zMjg1IDQ4LjMyOTggNDAuODQ5M0M0OC4wMzgzIDQwLjM3MDIgNDcuODg0IDM5LjgyMDEgNDcuODgzNyAzOS4yNTkyVjBIMTguMTQ1NVYxMThIOTAuMDE4MlYwWiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUuODA4NzIiIHkxPSIwIiB4Mj0iNS44MDg3MiIgeTI9IjExOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC41OCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjYzLjIiIHkxPSIwIiB4Mj0iNjMuMiIgeTI9IjMzLjI1NDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSI1NC4wODE5IiB5MT0iMCIgeDI9IjU0LjA4MTkiIHkyPSIxMTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
    O9hZ: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_9.svg?v=valveisgoodatcaching";
    },
    POwH: function (e, t, n) {
      e.exports = {
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
        "animation-container": "chatroomeffects_animation-container_3ZR8Q",
        Snowflake: "chatroomeffects_Snowflake_cZ5Au",
        "Snowflake-0": "chatroomeffects_Snowflake-0_2-hBh",
        "snowflake-0": "chatroomeffects_snowflake-0_U-YAV",
        "Snowflake-1": "chatroomeffects_Snowflake-1_2b67l",
        "snowflake-1": "chatroomeffects_snowflake-1_2Rb7w",
        "Snowflake-2": "chatroomeffects_Snowflake-2_2_NWs",
        "snowflake-2": "chatroomeffects_snowflake-2_1Y4tS",
        "Snowflake-3": "chatroomeffects_Snowflake-3_cBxtQ",
        "snowflake-3": "chatroomeffects_snowflake-3_3t5Lt",
        "Snowflake-4": "chatroomeffects_Snowflake-4_1JQNl",
        "snowflake-4": "chatroomeffects_snowflake-4_1vyLw",
        "Snowflake-5": "chatroomeffects_Snowflake-5_cUP1f",
        "snowflake-5": "chatroomeffects_snowflake-5_3louc",
        "Snowflake-6": "chatroomeffects_Snowflake-6_2F8cs",
        "snowflake-6": "chatroomeffects_snowflake-6_3Hfej",
        "Snowflake-7": "chatroomeffects_Snowflake-7_zJ9BE",
        "snowflake-7": "chatroomeffects_snowflake-7_nX1rZ",
        "Snowflake-8": "chatroomeffects_Snowflake-8_3BAdG",
        "snowflake-8": "chatroomeffects_snowflake-8_WFJba",
        "Snowflake-9": "chatroomeffects_Snowflake-9_2DNE8",
        "snowflake-9": "chatroomeffects_snowflake-9_1m6q0",
        "Snowflake-10": "chatroomeffects_Snowflake-10_19m8q",
        "snowflake-10": "chatroomeffects_snowflake-10_3HhrW",
        "Snowflake-11": "chatroomeffects_Snowflake-11_ijWSF",
        "snowflake-11": "chatroomeffects_snowflake-11_vukho",
        "Snowflake-12": "chatroomeffects_Snowflake-12_Ripsa",
        "snowflake-12": "chatroomeffects_snowflake-12_2KXNx",
        "Snowflake-13": "chatroomeffects_Snowflake-13__5IUE",
        "snowflake-13": "chatroomeffects_snowflake-13_35I49",
        "Snowflake-14": "chatroomeffects_Snowflake-14_pmIdk",
        "snowflake-14": "chatroomeffects_snowflake-14_1MH-J",
        "Snowflake-15": "chatroomeffects_Snowflake-15_2nQdH",
        "snowflake-15": "chatroomeffects_snowflake-15_ek7ku",
        "Snowflake-16": "chatroomeffects_Snowflake-16_lJyG7",
        "snowflake-16": "chatroomeffects_snowflake-16_20hUR",
        "Snowflake-17": "chatroomeffects_Snowflake-17_1L0AZ",
        "snowflake-17": "chatroomeffects_snowflake-17_3CfBV",
        "Snowflake-18": "chatroomeffects_Snowflake-18_1ozac",
        "snowflake-18": "chatroomeffects_snowflake-18_HP-ye",
        "Snowflake-19": "chatroomeffects_Snowflake-19_FOXzc",
        "snowflake-19": "chatroomeffects_snowflake-19_1d9D9",
        "Snowflake-20": "chatroomeffects_Snowflake-20_Qt7pR",
        "snowflake-20": "chatroomeffects_snowflake-20_2N-xe",
        confetti: "chatroomeffects_confetti_VelNh",
        "confetti-0": "chatroomeffects_confetti-0_tlO-i",
        "drop-0": "chatroomeffects_drop-0__37zJ",
        "confetti-1": "chatroomeffects_confetti-1_3OuSs",
        "drop-1": "chatroomeffects_drop-1_x-HP7",
        "confetti-2": "chatroomeffects_confetti-2_1mdZ0",
        "drop-2": "chatroomeffects_drop-2_3XfWb",
        "confetti-3": "chatroomeffects_confetti-3_36OCs",
        "drop-3": "chatroomeffects_drop-3_OTZKZ",
        "confetti-4": "chatroomeffects_confetti-4_3NbOc",
        "drop-4": "chatroomeffects_drop-4_1CAil",
        "confetti-5": "chatroomeffects_confetti-5_VnTYG",
        "drop-5": "chatroomeffects_drop-5_1pPPC",
        "confetti-6": "chatroomeffects_confetti-6_3KEfm",
        "drop-6": "chatroomeffects_drop-6_4Wj8s",
        "confetti-7": "chatroomeffects_confetti-7_1C-Ak",
        "drop-7": "chatroomeffects_drop-7_oHsjU",
        "confetti-8": "chatroomeffects_confetti-8_4oJYN",
        "drop-8": "chatroomeffects_drop-8_2y189",
        "confetti-9": "chatroomeffects_confetti-9_1bEjR",
        "drop-9": "chatroomeffects_drop-9_5c9w0",
        "confetti-10": "chatroomeffects_confetti-10_1oRBM",
        "drop-10": "chatroomeffects_drop-10_1L13_",
        "confetti-11": "chatroomeffects_confetti-11_3W9ZL",
        "drop-11": "chatroomeffects_drop-11_vYvGB",
        "confetti-12": "chatroomeffects_confetti-12_2TwZ0",
        "drop-12": "chatroomeffects_drop-12_3b2Dc",
        "confetti-13": "chatroomeffects_confetti-13_1m8Vr",
        "drop-13": "chatroomeffects_drop-13_2n4ZP",
        "confetti-14": "chatroomeffects_confetti-14_1YV6p",
        "drop-14": "chatroomeffects_drop-14_xQzPb",
        "confetti-15": "chatroomeffects_confetti-15_2D2LH",
        "drop-15": "chatroomeffects_drop-15_oKVqM",
        "confetti-16": "chatroomeffects_confetti-16_pvt2J",
        "drop-16": "chatroomeffects_drop-16_T5UBd",
        "confetti-17": "chatroomeffects_confetti-17_2NCF0",
        "drop-17": "chatroomeffects_drop-17_1d8Dj",
        "confetti-18": "chatroomeffects_confetti-18_o_Hf7",
        "drop-18": "chatroomeffects_drop-18_1zoqm",
        "confetti-19": "chatroomeffects_confetti-19_28L_3",
        "drop-19": "chatroomeffects_drop-19_1zkpz",
        "confetti-20": "chatroomeffects_confetti-20_P-SKX",
        "drop-20": "chatroomeffects_drop-20_2HmVc",
        "confetti-21": "chatroomeffects_confetti-21_27GkO",
        "drop-21": "chatroomeffects_drop-21_1T4Mt",
        "confetti-22": "chatroomeffects_confetti-22_1sCDh",
        "drop-22": "chatroomeffects_drop-22_2svz8",
        "confetti-23": "chatroomeffects_confetti-23_9SZ_A",
        "drop-23": "chatroomeffects_drop-23_3vAxI",
        "confetti-24": "chatroomeffects_confetti-24_1Am3e",
        "drop-24": "chatroomeffects_drop-24_RhAjb",
        "confetti-25": "chatroomeffects_confetti-25_1Ja7L",
        "drop-25": "chatroomeffects_drop-25_201NA",
        "confetti-26": "chatroomeffects_confetti-26_2jMUO",
        "drop-26": "chatroomeffects_drop-26_29n7q",
        "confetti-27": "chatroomeffects_confetti-27_2yQQd",
        "drop-27": "chatroomeffects_drop-27_2m3A7",
        "confetti-28": "chatroomeffects_confetti-28_1Qlxx",
        "drop-28": "chatroomeffects_drop-28_18frj",
        "confetti-29": "chatroomeffects_confetti-29_1b2l6",
        "drop-29": "chatroomeffects_drop-29_2Q2T3",
        "confetti-30": "chatroomeffects_confetti-30_1JH00",
        "drop-30": "chatroomeffects_drop-30_35aPE",
        "confetti-31": "chatroomeffects_confetti-31_Osdxn",
        "drop-31": "chatroomeffects_drop-31_3xx2U",
        "confetti-32": "chatroomeffects_confetti-32_f1SYA",
        "drop-32": "chatroomeffects_drop-32_215c3",
        "confetti-33": "chatroomeffects_confetti-33_g65ei",
        "drop-33": "chatroomeffects_drop-33_2oegr",
        "confetti-34": "chatroomeffects_confetti-34_2yCKI",
        "drop-34": "chatroomeffects_drop-34_3K9VA",
        "confetti-35": "chatroomeffects_confetti-35_3JsiR",
        "drop-35": "chatroomeffects_drop-35_5jMlo",
        "confetti-36": "chatroomeffects_confetti-36_R14L0",
        "drop-36": "chatroomeffects_drop-36_13yR4",
        "confetti-37": "chatroomeffects_confetti-37_24ZmD",
        "drop-37": "chatroomeffects_drop-37_2uYeL",
        "confetti-38": "chatroomeffects_confetti-38_25jbU",
        "drop-38": "chatroomeffects_drop-38_3BJYZ",
        "confetti-39": "chatroomeffects_confetti-39_8zwxi",
        "drop-39": "chatroomeffects_drop-39_2zKzQ",
        "confetti-40": "chatroomeffects_confetti-40_Du-Wg",
        "drop-40": "chatroomeffects_drop-40_3DiQ2",
        "confetti-41": "chatroomeffects_confetti-41_3LjK4",
        "drop-41": "chatroomeffects_drop-41_10ZGR",
        "confetti-42": "chatroomeffects_confetti-42_3u0x8",
        "drop-42": "chatroomeffects_drop-42_2GaWP",
        "confetti-43": "chatroomeffects_confetti-43_2Iip-",
        "drop-43": "chatroomeffects_drop-43_3zDFZ",
        "confetti-44": "chatroomeffects_confetti-44_2qI_Q",
        "drop-44": "chatroomeffects_drop-44_3G_AJ",
        "confetti-45": "chatroomeffects_confetti-45_3FUIw",
        "drop-45": "chatroomeffects_drop-45_1BAsF",
        "confetti-46": "chatroomeffects_confetti-46_2wAK3",
        "drop-46": "chatroomeffects_drop-46_1LOgZ",
        "confetti-47": "chatroomeffects_confetti-47_2dO3B",
        "drop-47": "chatroomeffects_drop-47_l_1GZ",
        "confetti-48": "chatroomeffects_confetti-48_2ud75",
        "drop-48": "chatroomeffects_drop-48_cnRU6",
        "confetti-49": "chatroomeffects_confetti-49_EX-pu",
        "drop-49": "chatroomeffects_drop-49_3ElNG",
        "confetti-50": "chatroomeffects_confetti-50_8qyUx",
        "drop-50": "chatroomeffects_drop-50_IlkNs",
        "confetti-51": "chatroomeffects_confetti-51_AtKXb",
        "drop-51": "chatroomeffects_drop-51_2msFB",
        "confetti-52": "chatroomeffects_confetti-52_1my5Z",
        "drop-52": "chatroomeffects_drop-52_1QnRe",
        "confetti-53": "chatroomeffects_confetti-53_2Cb1i",
        "drop-53": "chatroomeffects_drop-53_1CQh7",
        "confetti-54": "chatroomeffects_confetti-54_2VhA6",
        "drop-54": "chatroomeffects_drop-54_3hZKt",
        "confetti-55": "chatroomeffects_confetti-55_yL87g",
        "drop-55": "chatroomeffects_drop-55_3dM49",
        "confetti-56": "chatroomeffects_confetti-56_1xqgg",
        "drop-56": "chatroomeffects_drop-56_3SnEp",
        "confetti-57": "chatroomeffects_confetti-57_f9kuG",
        "drop-57": "chatroomeffects_drop-57_3DCDa",
        "confetti-58": "chatroomeffects_confetti-58_1O4Ku",
        "drop-58": "chatroomeffects_drop-58_3d1_1",
        "confetti-59": "chatroomeffects_confetti-59_XOFkR",
        "drop-59": "chatroomeffects_drop-59_1ZKa_",
        "confetti-60": "chatroomeffects_confetti-60_2iInd",
        "drop-60": "chatroomeffects_drop-60_3stXq",
        "confetti-61": "chatroomeffects_confetti-61_4hvgI",
        "drop-61": "chatroomeffects_drop-61_ENSW2",
        "confetti-62": "chatroomeffects_confetti-62_1vcmC",
        "drop-62": "chatroomeffects_drop-62_3gyQe",
        "confetti-63": "chatroomeffects_confetti-63_3dgPj",
        "drop-63": "chatroomeffects_drop-63_2047M",
        "confetti-64": "chatroomeffects_confetti-64_Cewk5",
        "drop-64": "chatroomeffects_drop-64_2YCRK",
        "confetti-65": "chatroomeffects_confetti-65_ciQUm",
        "drop-65": "chatroomeffects_drop-65_3kUQk",
        "confetti-66": "chatroomeffects_confetti-66_3a3mu",
        "drop-66": "chatroomeffects_drop-66_3DoHw",
        "confetti-67": "chatroomeffects_confetti-67_39YTy",
        "drop-67": "chatroomeffects_drop-67_Qb0h2",
        "confetti-68": "chatroomeffects_confetti-68_2zcwH",
        "drop-68": "chatroomeffects_drop-68_zRaTb",
        "confetti-69": "chatroomeffects_confetti-69_1O9Qn",
        "drop-69": "chatroomeffects_drop-69_oogaf",
        "confetti-70": "chatroomeffects_confetti-70_3wL25",
        "drop-70": "chatroomeffects_drop-70_ouiMF",
        "confetti-71": "chatroomeffects_confetti-71_2FN6I",
        "drop-71": "chatroomeffects_drop-71_y2t-j",
        "confetti-72": "chatroomeffects_confetti-72_2tgnG",
        "drop-72": "chatroomeffects_drop-72_3hLQt",
        "confetti-73": "chatroomeffects_confetti-73_-0y9h",
        "drop-73": "chatroomeffects_drop-73_-Wx7W",
        "confetti-74": "chatroomeffects_confetti-74_1_vWA",
        "drop-74": "chatroomeffects_drop-74_2L0XL",
        "confetti-75": "chatroomeffects_confetti-75_qNiwF",
        "drop-75": "chatroomeffects_drop-75_2iJw_",
        "confetti-76": "chatroomeffects_confetti-76_2Isn6",
        "drop-76": "chatroomeffects_drop-76_3MdvI",
        "confetti-77": "chatroomeffects_confetti-77_2bgtx",
        "drop-77": "chatroomeffects_drop-77_2ItPx",
        "confetti-78": "chatroomeffects_confetti-78_veCdx",
        "drop-78": "chatroomeffects_drop-78_3D9KT",
        "confetti-79": "chatroomeffects_confetti-79_5cczs",
        "drop-79": "chatroomeffects_drop-79_1x9H7",
        "confetti-80": "chatroomeffects_confetti-80_hz59y",
        "drop-80": "chatroomeffects_drop-80_2ZjKF",
        "confetti-81": "chatroomeffects_confetti-81_1rhSJ",
        "drop-81": "chatroomeffects_drop-81_tGBBf",
        "confetti-82": "chatroomeffects_confetti-82_1jWl7",
        "drop-82": "chatroomeffects_drop-82_26Ftm",
        "confetti-83": "chatroomeffects_confetti-83_1Veaf",
        "drop-83": "chatroomeffects_drop-83_2VByP",
        "confetti-84": "chatroomeffects_confetti-84_3_bdr",
        "drop-84": "chatroomeffects_drop-84_m6um-",
        "confetti-85": "chatroomeffects_confetti-85_9Zttw",
        "drop-85": "chatroomeffects_drop-85_2xtS5",
        "confetti-86": "chatroomeffects_confetti-86_2EJMi",
        "drop-86": "chatroomeffects_drop-86_2dudW",
        "confetti-87": "chatroomeffects_confetti-87_uys-9",
        "drop-87": "chatroomeffects_drop-87_1PZvt",
        "confetti-88": "chatroomeffects_confetti-88_24exN",
        "drop-88": "chatroomeffects_drop-88_5ZbRz",
        "confetti-89": "chatroomeffects_confetti-89_2yKbS",
        "drop-89": "chatroomeffects_drop-89_1s66w",
        "confetti-90": "chatroomeffects_confetti-90_2tEzr",
        "drop-90": "chatroomeffects_drop-90_1dLha",
        "confetti-91": "chatroomeffects_confetti-91_3T4UL",
        "drop-91": "chatroomeffects_drop-91_P_MRR",
        "confetti-92": "chatroomeffects_confetti-92_7p5vh",
        "drop-92": "chatroomeffects_drop-92_1Mwkv",
        "confetti-93": "chatroomeffects_confetti-93_2BaTW",
        "drop-93": "chatroomeffects_drop-93_3NCsF",
        "confetti-94": "chatroomeffects_confetti-94_3DVf7",
        "drop-94": "chatroomeffects_drop-94_fZgnW",
        "confetti-95": "chatroomeffects_confetti-95_23jtb",
        "drop-95": "chatroomeffects_drop-95_1tw1t",
        "confetti-96": "chatroomeffects_confetti-96_2CxeZ",
        "drop-96": "chatroomeffects_drop-96_37GFJ",
        "confetti-97": "chatroomeffects_confetti-97_qoLlt",
        "drop-97": "chatroomeffects_drop-97_v1bhd",
        "confetti-98": "chatroomeffects_confetti-98_3Po3_",
        "drop-98": "chatroomeffects_drop-98_1TcCu",
        "confetti-99": "chatroomeffects_confetti-99_2-vdA",
        "drop-99": "chatroomeffects_drop-99_3lQGo",
        cracker: "chatroomeffects_cracker_k_Aq7",
        "cracker-left": "chatroomeffects_cracker-left_IBSjh",
        "cracker-right": "chatroomeffects_cracker-right_3M0en",
        goldfetti: "chatroomeffects_goldfetti_2oOnq",
        "goldfetti-fragment": "chatroomeffects_goldfetti-fragment_oRJxW",
        "goldfetti-color-1": "chatroomeffects_goldfetti-color-1_2zN8S",
        "goldfetti-color-2": "chatroomeffects_goldfetti-color-2_1fchb",
        "goldfetti-color-3": "chatroomeffects_goldfetti-color-3_2pBYi",
        "goldfetti-emoji-1": "chatroomeffects_goldfetti-emoji-1_33y_B",
        "goldfetti-emoji-2": "chatroomeffects_goldfetti-emoji-2_oOIEt",
        "goldfetti-emoji-3": "chatroomeffects_goldfetti-emoji-3_1oNfH",
        "goldfetti-emoji-4": "chatroomeffects_goldfetti-emoji-4_YFAWN",
        balloons: "chatroomeffects_balloons_2_1pf",
        lantern_glow: "chatroomeffects_lantern_glow_v2QAm",
        snowball_fragment: "chatroomeffects_snowball_fragment_VMzCI",
        "snowball-container": "chatroomeffects_snowball-container_UvZyS",
        snowball: "chatroomeffects_snowball_2buSf",
        SnowballImage: "chatroomeffects_SnowballImage_2_42e",
        SnowballImageCW: "chatroomeffects_SnowballImageCW_1Tf0O",
        "snowball-rotate-cw": "chatroomeffects_snowball-rotate-cw_1x1_6",
        SnowballImageCCW: "chatroomeffects_SnowballImageCCW_3NMkR",
        "snowball-rotate-ccw": "chatroomeffects_snowball-rotate-ccw_2U4NC",
        "snowball-path": "chatroomeffects_snowball-path_3gxEb",
        "snowball-residue": "chatroomeffects_snowball-residue_1aw_2",
        "snowball-chunk": "chatroomeffects_snowball-chunk_379oU",
        "snowball-chunk-1": "chatroomeffects_snowball-chunk-1_7DFP9",
        "snowball-chunk-2": "chatroomeffects_snowball-chunk-2_2TZ3i",
        "snowball-chunk-3": "chatroomeffects_snowball-chunk-3_2dgXy",
        "snowball-chunk-4": "chatroomeffects_snowball-chunk-4_9zq4T",
        "slide-out-tl": "chatroomeffects_slide-out-tl_2vxAr",
        "slide-out-tr": "chatroomeffects_slide-out-tr_1UxlH",
        "slide-out-bottom": "chatroomeffects_slide-out-bottom_2bNZV",
        pyro: "chatroomeffects_pyro_1uf8l",
        before: "chatroomeffects_before_35CE-",
        after: "chatroomeffects_after_1tbcr",
        bang: "chatroomeffects_bang_3GL2k",
        gravity: "chatroomeffects_gravity_S4aDc",
        position: "chatroomeffects_position_15NGb",
        pyroBodyShake: "chatroomeffects_pyroBodyShake_3E298",
        "pyro-body-shake": "chatroomeffects_pyro-body-shake_38sc5",
        pyroBodyShake2: "chatroomeffects_pyroBodyShake2_1Ti3z",
        "pyro-body-shake2": "chatroomeffects_pyro-body-shake2_3qwwM",
        FireworkPath: "chatroomeffects_FireworkPath_1Bk7_",
        "firework-path-animation":
          "chatroomeffects_firework-path-animation_Mm8cl",
        FireworkContainer: "chatroomeffects_FireworkContainer_1aN3b",
        FireworkPNG: "chatroomeffects_FireworkPNG_EHDSM",
        balloon_small_1: "chatroomeffects_balloon_small_1_h2Q7G",
        balloon_move_right: "chatroomeffects_balloon_move_right_8PLpZ",
        balloon_move_left: "chatroomeffects_balloon_move_left_tgIbt",
        balloon_big_1: "chatroomeffects_balloon_big_1_1TGq_",
        balloon_big_2: "chatroomeffects_balloon_big_2_1dSX8",
        balloon_small_2: "chatroomeffects_balloon_small_2_2SLtS",
        balloon_small_3: "chatroomeffects_balloon_small_3_3-4lC",
        "snowball-path-1": "chatroomeffects_snowball-path-1_2XM4v",
        "snowball-path-2": "chatroomeffects_snowball-path-2_1rYsb",
        "snowball-path-3": "chatroomeffects_snowball-path-3_3EhG3",
        "snowball-path-4": "chatroomeffects_snowball-path-4_oIEK7",
        "snowball-path-5": "chatroomeffects_snowball-path-5_1nGpu",
        "snowball-path-6": "chatroomeffects_snowball-path-6_2bquC",
        fireworkBigX: "chatroomeffects_fireworkBigX_3EASz",
        fireworkBigY: "chatroomeffects_fireworkBigY_3HtJy",
        fireworkSmallX: "chatroomeffects_fireworkSmallX_xZrme",
        fireworkSmallY: "chatroomeffects_fireworkSmallY_Vy4av",
        fireworkLongX: "chatroomeffects_fireworkLongX_1h91p",
        fireworkLongY: "chatroomeffects_fireworkLongY_3f3gs",
      };
    },
    Qpv1: function (e, t, n) {
      e.exports = {
        Banner: "banner_Banner_ECzA2",
        Image: "banner_Image_28bFl",
        Content: "banner_Content_3weUA",
        Title: "banner_Title_xHxqv",
        Subtitle: "banner_Subtitle_YZMtY",
        Link: "banner_Link_185F6",
      };
    },
    RImk: function (e, t, n) {
      e.exports = {
        Shell: "salerewarditemhero_Shell_1GJKW",
        ShellScrollParent: "salerewarditemhero_ShellScrollParent_2yu0N",
        ShellHeader: "salerewarditemhero_ShellHeader_3yEbX",
        ShellHeaderBrandLink: "salerewarditemhero_ShellHeaderBrandLink_3EPt-",
        PointsContainer: "salerewarditemhero_PointsContainer_1MYbv",
        AppFilterContainer: "salerewarditemhero_AppFilterContainer_31WPb",
        HeaderVerticalDivider: "salerewarditemhero_HeaderVerticalDivider_1sesQ",
        AppFilterLabel: "salerewarditemhero_AppFilterLabel_1tbK6",
        AppFilterIconContainer:
          "salerewarditemhero_AppFilterIconContainer_qN7SX",
        AppFilterIcon: "salerewarditemhero_AppFilterIcon_2LksH",
        FilterInUse: "salerewarditemhero_FilterInUse_2fd4k",
        RewardsPointsIcon: "salerewarditemhero_RewardsPointsIcon_GncW3",
        YourBalanceLabel: "salerewarditemhero_YourBalanceLabel_1tnic",
        RewardsPointsCount: "salerewarditemhero_RewardsPointsCount_289Ls",
        ShellHeaderBrandName: "salerewarditemhero_ShellHeaderBrandName_30kf5",
        SvgOverrideColor: "salerewarditemhero_SvgOverrideColor_2Z0xC",
        ItemHoverZIndex: "salerewarditemhero_ItemHoverZIndex_Jgu2H",
        ActionButton: "salerewarditemhero_ActionButton_xPimr",
        Icon: "salerewarditemhero_Icon_SkxxZ",
        SaleRewardContainer: "salerewarditemhero_SaleRewardContainer_379X4",
        SaleRewardSubHeader: "salerewarditemhero_SaleRewardSubHeader_3Lw87",
        SaleRewardContainerFlex:
          "salerewarditemhero_SaleRewardContainerFlex_2CxV-",
        SaleRewardTextContainer:
          "salerewarditemhero_SaleRewardTextContainer_1lAJJ",
        SaleRewardLogo: "salerewarditemhero_SaleRewardLogo_1aazf",
        SaleRewardItemOwned: "salerewarditemhero_SaleRewardItemOwned_1K8oZ",
        RulesLink: "salerewarditemhero_RulesLink_pwBt_",
        NextStop: "salerewarditemhero_NextStop_1Wxxp",
        Title: "salerewarditemhero_Title_34PnV",
        Timer: "salerewarditemhero_Timer_3aFQP",
      };
    },
    RV7a: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "e", function () {
          return a;
        }),
        n.d(t, "g", function () {
          return g;
        }),
        n.d(t, "d", function () {
          return o;
        }),
        n.d(t, "i", function () {
          return P;
        }),
        n.d(t, "f", function () {
          return m;
        }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "h", function () {
          return y;
        });
      var A = n("mrSG"),
        d = n("q1tI"),
        D = n.n(d),
        p = n("qY0t"),
        x = n("exH9"),
        f = Object(d.forwardRef)(function (e, t) {
          var n = e.padding,
            r = e.paddingX,
            a = e.paddingY,
            i = e.paddingRight,
            o = e.paddingLeft,
            s = e.paddingTop,
            c = e.paddingBottom,
            l = e.margin,
            m = e.marginX,
            u = e.marginY,
            d = e.marginLeft,
            p = e.marginTop,
            f = e.marginRight,
            _ = e.marginBottom,
            g = e.display,
            h = e.flexDirection,
            b = e.flexWrap,
            y = e.justifyContent,
            v = e.alignItems,
            w = e.flexGrow,
            C = e.flexShrink,
            I = e.flexBasis,
            M = e.flex,
            j = e.className,
            N = e.style,
            E = Object(A.f)(e, [
              "padding",
              "paddingX",
              "paddingY",
              "paddingRight",
              "paddingLeft",
              "paddingTop",
              "paddingBottom",
              "margin",
              "marginX",
              "marginY",
              "marginLeft",
              "marginTop",
              "marginRight",
              "marginBottom",
              "display",
              "flexDirection",
              "flexWrap",
              "justifyContent",
              "alignItems",
              "flexGrow",
              "flexShrink",
              "flexBasis",
              "flex",
              "className",
              "style",
            ]),
            S = Object(x.a)(
              P("padding-left", o || r || n),
              P("padding-top", s || a || n),
              P("padding-right", i || r || n),
              P("padding-bottom", c || a || n),
              P("margin-left", d || m || l),
              P("margin-top", p || u || l),
              P("margin-right", f || m || l),
              P("margin-bottom", _ || u || l),
              j
            ),
            O = Object(A.a)(
              {
                display: g,
                flexDirection: h,
                flexWrap: b,
                justifyContent: y,
                alignItems: v,
                flexGrow: w,
                flexShrink: C,
                flexBasis: I,
                flex: M,
              },
              N
            );
          return D.a.createElement(
            "div",
            Object(A.a)({ className: S, style: O, ref: t }, E)
          );
        }),
        r = Object(d.forwardRef)(function (e, t) {
          var n = e.children,
            r = e.style,
            a = e.spacing,
            i = e.horizontalSpacing,
            o = e.verticalSpacing,
            s = e.itemClassName,
            c = Object(A.f)(e, [
              "children",
              "style",
              "spacing",
              "horizontalSpacing",
              "verticalSpacing",
              "itemClassName",
            ]),
            l = g(),
            m = l.spacing[h(i || a || "none")],
            u = l.spacing[h(o || a || "none")];
          return D.a.createElement(
            "div",
            Object(A.a)(
              {
                ref: t,
                style: Object(A.a)(Object(A.a)({}, r || {}), {
                  marginTop: _(-u),
                }),
              },
              c
            ),
            D.a.createElement(
              "div",
              { style: { marginLeft: _(-m) }, className: p.InlineContainer },
              d.Children.map(n, function (e) {
                return null != e
                  ? D.a.createElement(
                      f,
                      { paddingLeft: i || a, paddingTop: o || a, className: s },
                      e
                    )
                  : null;
              })
            )
          );
        }),
        a = Object(d.forwardRef)(function (e, t) {
          var n = e.spacing,
            r = e.itemClassName,
            a = e.children,
            i = e.className,
            o = Object(A.f)(e, [
              "spacing",
              "itemClassName",
              "children",
              "className",
            ]),
            s = d.Children.count(a);
          return D.a.createElement(
            "div",
            Object(A.a)({ ref: t, className: i }, o),
            d.Children.map(a, function (e, t) {
              return null != e
                ? D.a.createElement(
                    f,
                    {
                      paddingBottom: t !== s - 1 ? n : void 0,
                      className: Object(x.a)(r, p.RemoveOnEmpty),
                    },
                    e
                  )
                : null;
            })
          );
        }),
        _ = function (e) {
          return e + "px";
        },
        s = {
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
          breakpoint: { mobile: 0, tablet: 740, desktop: 992 },
        },
        i = Object(d.createContext)(s),
        g = function () {
          return Object(d.useContext)(i);
        },
        o = function (e) {
          var t = e.config,
            n = e.children,
            r = t || s,
            a = Object(d.useMemo)(
              function () {
                return (
                  (n = r),
                  [
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
                    .map(function (t) {
                      return Object.keys(n.spacing)
                        .map(function (e) {
                          return l(t, e, n.spacing[e]);
                        })
                        .join("\n");
                    })
                    .join("\n")
                );
                var n;
              },
              [r]
            ),
            i = Object(d.useState)(0),
            o = (i[0], i[1]);
          return (
            Object(d.useLayoutEffect)(
              function () {
                o(function (e) {
                  return e + 1;
                });
              },
              [a]
            ),
            D.a.createElement(
              D.a.Fragment,
              null,
              D.a.createElement("style", null, a),
              n
            )
          );
        };
      function c(e, t) {
        return e + "-" + t;
      }
      var l = function (e, t, n) {
          return "." + c(e, t) + " { " + e + ": " + n + "px; }";
        },
        P = function (e, t) {
          var n = h(t);
          return t ? c(e, n) : "";
        };
      function h(e) {
        var t = m();
        if (!Array.isArray(e)) return e;
        var n = "desktop" === t ? 2 : "tablet" === t ? 1 : 0;
        return e[Math.min(n, e.length - 1)];
      }
      function m() {
        var e = g().breakpoint,
          t = e.tablet,
          n = e.desktop,
          r = y("(min-width: " + t + "px)");
        return y("(min-width: " + n + "px)")
          ? "desktop"
          : r
          ? "tablet"
          : "mobile";
      }
      function u(e) {
        return e.children(m());
      }
      var b = {};
      function y(r) {
        var e = D.a.useState(!1),
          t = e[0],
          a = e[1];
        return (
          D.a.useEffect(
            function () {
              var e = !0;
              b[r]
                ? b[r].refCount++
                : (b[r] = { list: window.matchMedia(r), refCount: 1 });
              function t() {
                e && a(n.matches);
              }
              var n = b[r].list;
              return (
                t(),
                n.addListener(t),
                function () {
                  (e = !1),
                    n.removeListener(t),
                    b[r].refCount--,
                    0 === b[r].refCount && delete b[r];
                }
              );
            },
            [r]
          ),
          t
        );
      }
    },
    RhBb: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/dota_tile_background.png?v=valveisgoodatcaching";
    },
    RvZ5: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_14.svg?v=valveisgoodatcaching";
    },
    StxQ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var o = n("mrSG"),
        r = n("q1tI"),
        s = n.n(r),
        c = n("exH9"),
        l = n("9Dmu"),
        m = n("TLQK"),
        u = n("6Y59"),
        a = function (e) {
          var t = e.amount,
            n = e.className,
            r = e.size,
            a = Object(o.f)(e, ["amount", "className", "size"]),
            i =
              0 < t
                ? t.toLocaleString(m.e.GetPreferredLocales())
                : Object(m.f)("#Rewards_Free");
          return s.a.createElement(
            "div",
            Object(o.a)({ className: Object(c.a)(l.Container, n) }, a),
            s.a.createElement(u.F, { className: l.Icon }),
            s.a.createElement(
              "div",
              {
                className: l.Amount,
                style: r ? { fontSize: r + "rem" } : void 0,
              },
              i,
              e.children
            )
          );
        };
    },
    TBZS: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/csgoChat_128_chickendance.png?v=valveisgoodatcaching";
    },
    TJrv: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/home_background.png?v=valveisgoodatcaching";
    },
    TL5o: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/csgoChat_128_hostage.png?v=valveisgoodatcaching";
    },
    UpHR: function (e, t, n) {
      e.exports = {
        Loading: "loading_Loading_1EZPm",
        LoadAmin: "loading_LoadAmin_2z54o",
        Small: "loading_Small_2tpvD",
        Medium: "loading_Medium_Ja-Qq",
        Large: "loading_Large_aKJra",
      };
    },
    "V+CE": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icons_floor.png?v=valveisgoodatcaching";
    },
    VFGZ: function (e, t, n) {
      e.exports = {
        Shell: "itembox_Shell_3t2kC",
        ShellScrollParent: "itembox_ShellScrollParent_2Wz7w",
        ShellHeader: "itembox_ShellHeader_1B30P",
        ShellHeaderBrandLink: "itembox_ShellHeaderBrandLink_3_mdT",
        PointsContainer: "itembox_PointsContainer_2NiRQ",
        AppFilterContainer: "itembox_AppFilterContainer_1DdJC",
        HeaderVerticalDivider: "itembox_HeaderVerticalDivider_3cP6H",
        AppFilterLabel: "itembox_AppFilterLabel_3UAcT",
        AppFilterIconContainer: "itembox_AppFilterIconContainer_7Da_o",
        AppFilterIcon: "itembox_AppFilterIcon_3-KRc",
        FilterInUse: "itembox_FilterInUse_3OtaX",
        RewardsPointsIcon: "itembox_RewardsPointsIcon_2j8wE",
        YourBalanceLabel: "itembox_YourBalanceLabel_1dThN",
        RewardsPointsCount: "itembox_RewardsPointsCount_3zRBb",
        ShellHeaderBrandName: "itembox_ShellHeaderBrandName_22xBc",
        SvgOverrideColor: "itembox_SvgOverrideColor_GPmfc",
        ItemHoverZIndex: "itembox_ItemHoverZIndex_1W5w_",
        ActionButton: "itembox_ActionButton_1CFwh",
        Icon: "itembox_Icon_1FPqU",
        ItemBox: "itembox_ItemBox_2EUBP",
        Body: "itembox_Body_1mnC4",
        Footer: "itembox_Footer_beNH0",
        NoBackdropSupportBackdrop: "itembox_NoBackdropSupportBackdrop_2Tay_",
      };
    },
    Vlb1: function (e, t, n) {
      e.exports = {
        strdefaultbodygradient:
          "linear-gradient(144.37deg, rgba(130, 156, 219, 0) 68.22%, rgba(82, 125, 235, 0.32) 113.95%)",
        strdefaultbodybackground: "rgba(76, 112, 168, 0.25)",
        Shell: "rewarditem_Shell_2sew-",
        ShellScrollParent: "rewarditem_ShellScrollParent_3pX0f",
        ShellHeader: "rewarditem_ShellHeader_3Pva4",
        ShellHeaderBrandLink: "rewarditem_ShellHeaderBrandLink_TkSn4",
        PointsContainer: "rewarditem_PointsContainer_1Pq0e",
        AppFilterContainer: "rewarditem_AppFilterContainer_3P7pL",
        HeaderVerticalDivider: "rewarditem_HeaderVerticalDivider_2XfnQ",
        AppFilterLabel: "rewarditem_AppFilterLabel_19hDQ",
        AppFilterIconContainer: "rewarditem_AppFilterIconContainer_2X4x8",
        AppFilterIcon: "rewarditem_AppFilterIcon_s_r3v",
        FilterInUse: "rewarditem_FilterInUse_3Xffm",
        RewardsPointsIcon: "rewarditem_RewardsPointsIcon_2n_58",
        YourBalanceLabel: "rewarditem_YourBalanceLabel_PCKp4",
        RewardsPointsCount: "rewarditem_RewardsPointsCount_3050z",
        ShellHeaderBrandName: "rewarditem_ShellHeaderBrandName_2AC6F",
        SvgOverrideColor: "rewarditem_SvgOverrideColor_106Ie",
        ItemHoverZIndex: "rewarditem_ItemHoverZIndex_1aVCu",
        ActionButton: "rewarditem_ActionButton_2Urhg",
        Icon: "rewarditem_Icon_3ahcH",
        ItemBox: "rewarditem_ItemBox_1KCAg",
        Body: "rewarditem_Body_2_Rnv",
        Footer: "rewarditem_Footer_1D-8s",
        NoBackdropSupportBackdrop: "rewarditem_NoBackdropSupportBackdrop_1ctek",
        Container: "rewarditem_Container_3jSq_",
        Amount: "rewarditem_Amount_1bRsH",
        IconCheckMark: "rewarditem_IconCheckMark_2RGTq",
        OwnedItem: "rewarditem_OwnedItem_1ODxR",
        IconPartialCheckMark: "rewarditem_IconPartialCheckMark_8UdhQ",
        OwnedItemProgress: "rewarditem_OwnedItemProgress_1TdFb",
        Cost: "rewarditem_Cost_3r7Gr",
        ItemAppIcon: "rewarditem_ItemAppIcon_Rk56Z",
        ItemContainer: "rewarditem_ItemContainer_skI5t",
        Item: "rewarditem_Item_CcuoO",
        IconAnimated: "rewarditem_IconAnimated_prjcB",
        Attributes: "rewarditem_Attributes_1Uaih",
        AppIconContainer: "rewarditem_AppIconContainer_3Oyyi",
        AppIcon: "rewarditem_AppIcon_3RN5Y",
        Image: "rewarditem_Image_3n9kI",
        ImageSmall: "rewarditem_ImageSmall_3EHMy",
        ImageMedium: "rewarditem_ImageMedium_SwLcj",
        ImageBackground: "rewarditem_ImageBackground_U-rBC",
        ImageMiniBackground: "rewarditem_ImageMiniBackground_N5jkz",
        ImageAnimatedAvatar: "rewarditem_ImageAnimatedAvatar_2YbSw",
        ImageProfileShowcase: "rewarditem_ImageProfileShowcase_3iMI3",
        ImageFillHeight: "rewarditem_ImageFillHeight_2zcHo",
        ImageFrames: "rewarditem_ImageFrames_2MPpw",
        ItemTypeContainer: "rewarditem_ItemTypeContainer_3Jcrb",
        Subtitle: "rewarditem_Subtitle_2FQCU",
        CostRow: "rewarditem_CostRow_32ATa",
        ClaimedText: "rewarditem_ClaimedText_2nLc8",
        Name: "rewarditem_Name_EccZY",
        ItemContainerShine: "rewarditem_ItemContainerShine_jj6Kz",
        BackgroundOverride: "rewarditem_BackgroundOverride_3xgzP",
        ItemWideContainer: "rewarditem_ItemWideContainer_26i5M",
        ItemSkeleton: "rewarditem_ItemSkeleton_trQnK",
        SkeletonName: "rewarditem_SkeletonName_2dNds",
        SkeletonSubtitle: "rewarditem_SkeletonSubtitle_1BU-Y",
        VisibilityTracker: "rewarditem_VisibilityTracker_1O9Ro",
      };
    },
    Vnj0: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_13.svg?v=valveisgoodatcaching";
    },
    WeG9: function (e, t, n) {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_nibod",
        avatarStatus: "steamavatar_avatarStatus_3xUpb",
        avatar: "steamavatar_avatar_3h-QR",
        avatarFrame: "steamavatar_avatarFrame_X_mJE",
        avatarFrameImg: "steamavatar_avatarFrameImg_3fM0F",
      };
    },
    Wilf: function (e, t, n) {
      e.exports = {
        Badge: "seasonalbadge_Badge_1-t5y",
        BadgeImage: "seasonalbadge_BadgeImage_2SfYJ",
        Hint: "seasonalbadge_Hint_2foBe",
        OwnedSticker: "seasonalbadge_OwnedSticker_rHnls",
        Footer: "seasonalbadge_Footer_1BYPc",
        LevelMarker: "seasonalbadge_LevelMarker_TLAUT",
        Owned: "seasonalbadge_Owned_y8Ybg",
        Inner: "seasonalbadge_Inner_1ToV4",
        BadgeGrid: "seasonalbadge_BadgeGrid_2RmTT",
      };
    },
    Wl4Y: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/header_image.png?v=valveisgoodatcaching";
    },
    WonJ: function (e, t, n) {
      e.exports = {
        SnoozeContainer: "friendsnooze_SnoozeContainer_1Dsum",
        SnoozeZ: "friendsnooze_SnoozeZ_2n0Ei",
        none: "friendsnooze_none_T3Fb5",
        Medium: "friendsnooze_Medium_1iYPl",
        Large: "friendsnooze_Large_3BESV",
        Dim: "friendsnooze_Dim_rpZ9b",
        Z1: "friendsnooze_Z1_2hnF3",
        Z2: "friendsnooze_Z2_VmQTO",
        Z3: "friendsnooze_Z3_29mta",
        animating: "friendsnooze_animating_2rXc7",
        hoverParent: "friendsnooze_hoverParent_3-8cB",
        Snoring: "friendsnooze_Snoring_38wIV",
      };
    },
    Xfd2: function (e, t, n) {
      e.exports = {
        PersonaStatusIcon: "personastatusicons_PersonaStatusIcon_KxAI_",
        MobilePhoneIcon: "personastatusicons_MobilePhoneIcon_1iRFj",
      };
    },
    aLBk: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_5.svg?v=valveisgoodatcaching";
    },
    bEwK: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/RewardsSeason1Hero.png?v=valveisgoodatcaching";
    },
    bFVC: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/awards_ui.png?v=valveisgoodatcaching";
    },
    bnhs: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/star.png?v=valveisgoodatcaching";
    },
    cCsu: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/diamonds_tile.png?v=valveisgoodatcaching";
    },
    cJ7F: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return m;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("VFGZ"),
        s = n("exH9"),
        c = function (e) {
          var t = e.className,
            n = e.children,
            r = Object(a.f)(e, ["className", "children"]);
          return i.a.createElement(
            "div",
            Object(a.a)({ className: Object(s.a)(o.ItemBox, t) }, r),
            i.a.createElement("div", {
              className: Object(s.a)(o.NoBackdropSupportBackdrop),
            }),
            n
          );
        },
        l = function (e) {
          var t = e.className,
            n = Object(a.f)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object(a.a)({ className: Object(s.a)(o.Body, t) }, n)
          );
        },
        m = function (e) {
          var t = e.className,
            n = Object(a.f)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object(a.a)({ className: Object(s.a)(o.Footer, t) }, n)
          );
        };
    },
    cOvF: function (e, t, n) {
      "use strict";
      n.d(t, "h", function () {
        return s;
      }),
        n.d(t, "i", function () {
          return c;
        }),
        n.d(t, "q", function () {
          return l;
        }),
        n.d(t, "e", function () {
          return m;
        }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "k", function () {
          return d;
        }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "r", function () {
          return f;
        }),
        n.d(t, "v", function () {
          return _;
        }),
        n.d(t, "a", function () {
          return g;
        }),
        n.d(t, "l", function () {
          return h;
        }),
        n.d(t, "d", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return y;
        }),
        n.d(t, "m", function () {
          return v;
        }),
        n.d(t, "t", function () {
          return w;
        }),
        n.d(t, "n", function () {
          return C;
        }),
        n.d(t, "o", function () {
          return I;
        }),
        n.d(t, "j", function () {
          return M;
        }),
        n.d(t, "g", function () {
          return j;
        }),
        n.d(t, "u", function () {
          return N;
        }),
        n.d(t, "s", function () {
          return E;
        }),
        n.d(t, "p", function () {
          return S;
        });
      var r = n("mrSG"),
        a = n("q1tI"),
        i = n.n(a),
        o = n("exH9"),
        s = function (e) {
          return i.a.createElement(
            "svg",
            Object(r.a)(
              {
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            i.a.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
            })
          );
        },
        c = function (e) {
          return i.a.createElement(
            "svg",
            Object(r.a)(
              {
                width: 30,
                height: 30,
                viewBox: "0 0 30 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            i.a.createElement("path", {
              d:
                "M15.2305 28.1415L15.2305 15.621L15.2305 3.10029C8.31552 3.10029 2.70984 8.70596 2.70984 15.6209C2.70984 22.5359 8.31552 28.1415 15.2305 28.1415ZM30.2305 15.6209C30.2305 23.9052 23.5147 30.6209 15.2305 30.6209C6.9462 30.6209 0.230469 23.9052 0.230469 15.6209C0.230469 7.33664 6.9462 0.620911 15.2305 0.620911C23.5147 0.620911 30.2305 7.33664 30.2305 15.6209Z",
              fill: "#5B7E0F",
            })
          );
        };
      function l(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "61px",
            height: "52px",
            viewBox: "0 0 61 52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M31.327 0.622074L31.0027 0.341797L30.6762 0.619372L7.67619 20.1694L0.676186 26.1194C0.465782 26.2982 0.440197 26.6138 0.61904 26.8242C0.797884 27.0346 1.11343 27.0602 1.32383 26.8813L7.50001 21.6316V49.0003C7.50001 50.3811 8.6193 51.5003 10 51.5003H51.5C52.8807 51.5003 54 50.3811 54 49.0003V21.5426L60.173 26.8786C60.3819 27.0592 60.6977 27.0362 60.8783 26.8273C61.0589 26.6184 61.0359 26.3027 60.827 26.1221L53.827 20.0712L31.327 0.622074ZM8.50001 49.0003V20.7816L30.9973 1.65889L53 20.6782V49.0003C53 49.8288 52.3284 50.5003 51.5 50.5003H38.5V32.0003C38.5 30.6196 37.3807 29.5003 36 29.5003H26C24.6193 29.5003 23.5 30.6196 23.5 32.0003V50.5003H10C9.17158 50.5003 8.50001 49.8288 8.50001 49.0003ZM24.5 50.5003H37.5V32.0003C37.5 31.1719 36.8284 30.5003 36 30.5003H26C25.1716 30.5003 24.5 31.1719 24.5 32.0003V50.5003Z",
            fill: "",
          })
        );
      }
      function m(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "47px",
            height: "51px",
            viewBox: "0 0 47 51",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M33.9999 10.5C33.9999 15.7034 29.5671 20 23.9999 20C18.4327 20 13.9999 15.7034 13.9999 10.5C13.9999 5.29663 18.4327 1 23.9999 1C29.5671 1 33.9999 5.29663 33.9999 10.5ZM34.9999 10.5C34.9999 16.299 30.075 21 23.9999 21C17.9247 21 12.9999 16.299 12.9999 10.5C12.9999 4.70101 17.9247 0 23.9999 0C30.075 0 34.9999 4.70101 34.9999 10.5ZM16.3702 23.5C10.6886 23.5 5.62398 26.8717 3.72868 32.2547C2.47599 35.8127 1.26935 39.3781 0.768536 40.866C0.549738 41.516 0.803538 42.2172 1.36831 42.5884L4.65592 44.7495C16.463 52.5107 31.809 52.2879 43.3858 44.1873L45.6833 42.5797C46.2215 42.2031 46.452 41.5201 46.2522 40.8944L43.9193 33.5891C42.0002 27.5792 36.4154 23.5 30.1065 23.5H24.2027H16.3702ZM4.67193 32.5868C6.41799 27.6277 11.0872 24.5 16.3702 24.5H24.2027H30.1065C35.9803 24.5 41.1799 28.2979 42.9667 33.8933L45.2996 41.1986C45.3662 41.4072 45.2893 41.6348 45.1099 41.7604L42.8125 43.368C31.5712 51.2338 16.67 51.4501 5.20521 43.9139L1.9176 41.7528C1.72419 41.6257 1.64564 41.3949 1.71629 41.185C2.21655 39.6988 3.42149 36.1384 4.67193 32.5868Z",
            fill: "",
          })
        );
      }
      function u(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "49px",
            height: "58px",
            viewBox: "0 0 49 58",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M24.5 12C27.5376 12 30 9.53757 30 6.5C30 3.46243 27.5376 1 24.5 1C21.4624 1 19 3.46243 19 6.5C19 9.53757 21.4624 12 24.5 12ZM24.5 13C26.1149 13 27.5923 12.411 28.7291 11.4362L38.2929 21H11.2071L20.5469 11.6602C21.6422 12.5005 23.0128 13 24.5 13ZM9.79289 21L19.8014 10.9915C18.6855 9.8244 18 8.24225 18 6.5C18 2.91015 20.9101 0 24.5 0C28.0899 0 31 2.91015 31 6.5C31 8.11495 30.411 9.59234 29.4362 10.7291L39.7071 21H40H45C46.933 21 48.5 22.567 48.5 24.5V54C48.5 55.933 46.933 57.5 45 57.5H4C2.067 57.5 0.5 55.933 0.5 54V24.5C0.5 22.567 2.067 21 4 21H8H9.79289ZM8 22H4C2.61929 22 1.5 23.1193 1.5 24.5V54C1.5 55.3807 2.61929 56.5 4 56.5H45C46.3807 56.5 47.5 55.3807 47.5 54V24.5C47.5 23.1193 46.3807 22 45 22H40H39.5H39.2929H10.2071H10H8ZM10.5 29C9.11929 29 8 30.1193 8 31.5V48C8 49.3807 9.11929 50.5 10.5 50.5H37.5C38.8807 50.5 40 49.3807 40 48V31.5C40 30.1193 38.8807 29 37.5 29H10.5ZM9 31.5C9 30.6716 9.67157 30 10.5 30H37.5C38.3284 30 39 30.6716 39 31.5V48C39 48.8284 38.3284 49.5 37.5 49.5H10.5C9.67157 49.5 9 48.8284 9 48V31.5Z",
            fill: "",
          })
        );
      }
      function d(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "51px",
            height: "56px",
            viewBox: "0 0 51 56",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M43.2109 6.95H7.21094C4.00769 6.95 1.41094 9.54675 1.41094 12.75V48.6496C1.41094 51.8528 4.00769 54.4496 7.21094 54.4496H43.2109C46.4142 54.4496 49.0109 51.8528 49.0109 48.6496V12.75C49.0109 9.54675 46.4142 6.95 43.2109 6.95ZM7.21094 5.75C3.34494 5.75 0.210938 8.88401 0.210938 12.75V48.6496C0.210938 52.5156 3.34494 55.6496 7.21094 55.6496H43.2109C47.0769 55.6496 50.2109 52.5156 50.2109 48.6496V12.75C50.2109 8.88401 47.0769 5.75 43.2109 5.75H7.21094Z",
            fill: "",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M50.2109 17.875H0.210938V16.675H50.2109V17.875Z",
            fill: "",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M27.3491 29.4463L25.9645 25.5785C25.7114 24.8714 24.7113 24.8714 24.4581 25.5785L23.0735 29.4463C22.6297 30.6861 21.4717 31.5275 20.1555 31.5664L16.0491 31.688C15.2983 31.7103 14.9893 32.6614 15.5836 33.1207L18.8342 35.6327C19.8762 36.4379 20.3185 37.7992 19.9488 39.0631L18.7956 43.0061C18.5847 43.727 19.3938 44.3148 20.0142 43.8915L23.4079 41.5762C24.4956 40.8341 25.927 40.8341 27.0148 41.5762L30.4084 43.8915C31.0288 44.3148 31.8379 43.727 31.6271 43.0061L30.4738 39.0631C30.1041 37.7992 30.5464 36.4379 31.5884 35.6327L34.839 33.1207C35.4334 32.6614 35.1243 31.7103 34.3735 31.688L30.2672 31.5664C28.9509 31.5275 27.7929 30.6861 27.3491 29.4463ZM27.0943 25.1741C26.4614 23.4062 23.9612 23.4062 23.3283 25.1741L21.9437 29.0419C21.6663 29.8168 20.9426 30.3426 20.1199 30.367L16.0136 30.4886C14.1366 30.5441 13.364 32.922 14.8498 34.0702L18.1005 36.5823C18.7517 37.0855 19.0281 37.9363 18.7971 38.7262L17.6438 42.6692C17.1167 44.4715 19.1394 45.9411 20.6905 44.8828L24.0841 42.5675C24.764 42.1037 25.6586 42.1037 26.3385 42.5675L29.7321 44.8828C31.2832 45.9411 33.306 44.4715 32.7788 42.6692L31.6255 38.7262C31.3945 37.9363 31.6709 37.0855 32.3221 36.5823L35.5728 34.0702C37.0586 32.922 36.286 30.5441 34.409 30.4886L30.3027 30.367C29.48 30.3426 28.7563 29.8168 28.4789 29.0419L27.0943 25.1741Z",
            fill: "",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M16.4922 9.125V0.0268555L17.6922 0.0268555L17.6922 9.125H16.4922Z",
            fill: "",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M17.0234 13.2063C17.8795 13.2063 18.5734 12.5123 18.5734 11.6562C18.5734 10.8002 17.8795 10.1062 17.0234 10.1062C16.1674 10.1062 15.4734 10.8002 15.4734 11.6562C15.4734 12.5123 16.1674 13.2063 17.0234 13.2063ZM17.0234 14.4062C18.5422 14.4062 19.7734 13.175 19.7734 11.6562C19.7734 10.1375 18.5422 8.90625 17.0234 8.90625C15.5047 8.90625 14.2734 10.1375 14.2734 11.6562C14.2734 13.175 15.5047 14.4062 17.0234 14.4062Z",
            fill: "",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M32.8672 9.125V0.0268555L34.0672 0.0268555V9.125H32.8672Z",
            fill: "",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M33.3984 13.2063C34.2545 13.2063 34.9484 12.5123 34.9484 11.6562C34.9484 10.8002 34.2545 10.1062 33.3984 10.1062C32.5424 10.1062 31.8484 10.8002 31.8484 11.6562C31.8484 12.5123 32.5424 13.2063 33.3984 13.2063ZM33.3984 14.4062C34.9172 14.4062 36.1484 13.175 36.1484 11.6562C36.1484 10.1375 34.9172 8.90625 33.3984 8.90625C31.8797 8.90625 30.6484 10.1375 30.6484 11.6562C30.6484 13.175 31.8797 14.4062 33.3984 14.4062Z",
            fill: "",
          })
        );
      }
      function p(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "64px",
            height: "54px",
            viewBox: "0 0 64 54",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M4 0C1.79086 0 0 1.79086 0 4V50C0 52.2091 1.79086 54 4 54H11H53H60C62.2091 54 64 52.2091 64 50V4C64 1.79086 62.2091 0 60 0H53H11H4ZM11 2V52H53V2H11ZM8 25H3V29.8H8V25ZM3 15H8V19.8H3V15ZM8 6H3V10.8H8V6ZM3 34.5996H8V39.3996H3V34.5996ZM8 44.2002H3V49.0002H8V44.2002ZM39.8603 17.535C39.8603 21.0291 36.8085 24.0701 32.7786 24.0701C28.7487 24.0701 25.6969 21.0291 25.6969 17.535C25.6969 14.041 28.7487 11 32.7786 11C36.8085 11 39.8603 14.041 39.8603 17.535ZM41.8603 17.535C41.8603 22.2488 37.7943 26.0701 32.7786 26.0701C27.7629 26.0701 23.6969 22.2488 23.6969 17.535C23.6969 12.8213 27.7629 9 32.7786 9C37.7943 9 41.8603 12.8213 41.8603 17.535ZM30.4484 27.5466C24.6389 27.5466 19.3689 30.9432 17.364 36.4652C16.8368 37.9173 16.3885 39.1885 16.1121 39.9794C15.773 40.9495 16.227 42.0134 17.1535 42.4456L17.9794 42.831C27.4793 47.2632 38.4824 47.1178 47.8618 42.4361C48.7479 41.9938 49.1714 40.9651 48.8535 40.0271L48.0754 37.7315C46.0118 31.6431 40.2979 27.5466 33.8692 27.5466H33.0013H30.4484ZM19.2439 37.1478C20.9397 32.4771 25.4141 29.5466 30.4484 29.5466H33.0013H33.8692C39.4407 29.5466 44.3928 33.0969 46.1812 38.3735L46.9541 40.6538C38.1237 45.056 27.7672 45.1905 18.825 41.0185L18.0018 40.6344C18.2765 39.8484 18.7212 38.5873 19.2439 37.1478ZM61 25H56V29.8H61V25ZM56 15H61V19.8H56V15ZM61 6H56V10.8H61V6ZM56 34.5996H61V39.3996H56V34.5996ZM61 44.2002H56V49.0002H61V44.2002Z",
            fill: "",
          })
        );
      }
      function f(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "61px",
            height: "66px",
            viewBox: "0 0 61 66",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M58 2H3C2.44772 2 2 2.44772 2 3V49.9671L14.44 40.7192L15.0898 40.2361L15.6975 40.7713L21.5338 45.911L40.422 28.2692L41.1163 27.6207L41.7995 28.2809L59 44.9038V3C59 2.44772 58.5523 2 58 2ZM2 63V52.4592L14.9834 42.8074L20.8927 48.0113L27.4097 53.7505L28.7315 52.2495L23.0419 47.2391L41.0928 30.3793L59 47.6851V63C59 63.5523 58.5523 64 58 64H3C2.44772 64 2 63.5523 2 63ZM3 0C1.34315 0 0 1.34315 0 3V63C0 64.6569 1.34315 66 3 66H58C59.6569 66 61 64.6569 61 63V3C61 1.34315 59.6569 0 58 0H3ZM22.7185 16.2664C22.7185 18.5968 20.8293 20.486 18.4989 20.486C16.1685 20.486 14.2793 18.5968 14.2793 16.2664C14.2793 13.936 16.1685 12.0468 18.4989 12.0468C20.8293 12.0468 22.7185 13.936 22.7185 16.2664ZM24.7185 16.2664C24.7185 19.7014 21.9339 22.486 18.4989 22.486C15.0639 22.486 12.2793 19.7014 12.2793 16.2664C12.2793 12.8314 15.0639 10.0468 18.4989 10.0468C21.9339 10.0468 24.7185 12.8314 24.7185 16.2664Z",
            fill: "",
          })
        );
      }
      function _(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "33",
            height: "32",
            viewBox: "0 0 33 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement(
            "defs",
            null,
            i.a.createElement(
              "filter",
              {
                id: "SoftGlow",
                height: "300%",
                width: "300%",
                x: "-75%",
                y: "-75%",
              },
              i.a.createElement("feMorphology", {
                operator: "dilate",
                radius: "2",
                in: "SourceAlpha",
                result: "thicken",
              }),
              i.a.createElement("feGaussianBlur", {
                in: "thicken",
                stdDeviation: "5",
                result: "blurred",
              }),
              i.a.createElement("feFlood", {
                floodColor: "rgba(55, 75, 148, .7)",
                result: "glowColor",
              }),
              i.a.createElement("feComposite", {
                in: "glowColor",
                in2: "blurred",
                operator: "in",
                result: "SoftGlow_colored",
              }),
              i.a.createElement(
                "feMerge",
                null,
                i.a.createElement("feMergeNode", { in: "SoftGlow_colored" }),
                i.a.createElement("feMergeNode", { in: "SourceGraphic" })
              )
            )
          ),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M31.9861 26.8551C32.2029 26.8551 32.3783 27.0254 32.3783 27.2355V29.2195C32.3783 29.4295 32.2029 29.5998 31.9861 29.5998H1.39223C1.17543 29.5998 1 29.4295 1 29.2195V27.2355C1 27.0254 1.17543 26.8551 1.39223 26.8551H3.20016V1.83469C3.20016 1.62465 3.37559 1.45435 3.59239 1.45435H10.1412C10.358 1.45435 10.5334 1.62465 10.5334 1.83469V5.05554H14.5097V1.83469C14.5097 1.62465 14.6851 1.45435 14.9019 1.45435H19.6631C19.8798 1.45435 20.0553 1.62465 20.0553 1.83469V4.18744L25.4729 3.22867C25.576 3.21139 25.6813 3.23257 25.7663 3.28995C25.8521 3.34734 25.9108 3.43537 25.9291 3.53454L30.1782 26.1126C30.2172 26.3193 30.0759 26.5175 29.8629 26.5552L28.1683 26.8551H31.9861ZM23.5066 22.6202L24.2874 26.7688L29.3362 25.8751L28.5555 21.7266L23.5066 22.6202ZM23.3657 21.8718L28.4147 20.9782L28.0604 19.0957L23.0114 19.989L23.3657 21.8718ZM27.9195 18.3472L25.2278 4.04525L20.1786 4.93891L22.8705 19.2406L27.9195 18.3472ZM20.0553 26.8551H23.5062L20.0553 8.51936V26.8551ZM19.2708 2.21503H15.2941V5.43589V26.8551H19.2708V2.21503ZM14.5097 26.8551V5.81623H10.5334V26.8551H14.5097ZM9.74893 10.38H3.98462V18.6904H9.74893V10.38ZM3.98462 9.6193H9.74893V7.41988H3.98462V9.6193ZM9.74893 19.451H3.98462V21.6503H9.74893V19.451ZM9.74893 5.43589V2.21503H3.98462V6.65919H9.74893V5.43589ZM9.74893 22.411H3.98462V26.8551H9.74893V22.411ZM1.78446 28.8391H31.5939V27.6158H19.6631H14.9019H10.1412H3.59239H1.78446V28.8391ZM13.6023 22.1066H11.4409C11.2241 22.1066 11.0486 21.9363 11.0486 21.7263C11.0486 21.5162 11.2241 21.3459 11.4409 21.3459H13.6023C13.8191 21.3459 13.9946 21.5162 13.9946 21.7263C13.9946 21.9363 13.8191 22.1066 13.6023 22.1066ZM11.4409 19.4512H13.6023C13.8191 19.4512 13.9946 19.2809 13.9946 19.0709C13.9946 18.8608 13.8191 18.6905 13.6023 18.6905H11.4409C11.2241 18.6905 11.0486 18.8608 11.0486 19.0709C11.0486 19.2809 11.2241 19.4512 11.4409 19.4512ZM18.3634 22.1066H16.2016C15.9848 22.1066 15.8093 21.9363 15.8093 21.7263C15.8093 21.5162 15.9848 21.3459 16.2016 21.3459H18.3634C18.5802 21.3459 18.7556 21.5162 18.7556 21.7263C18.7556 21.9363 18.5802 22.1066 18.3634 22.1066ZM16.2016 19.4512H18.3634C18.5802 19.4512 18.7556 19.2809 18.7556 19.0709C18.7556 18.8608 18.5802 18.6905 18.3634 18.6905H16.2016C15.9848 18.6905 15.8093 18.8608 15.8093 19.0709C15.8093 19.2809 15.9848 19.4512 16.2016 19.4512ZM4.80876 14.5352C4.80876 12.8573 5.71273 11.543 6.86643 11.543C8.02052 11.543 8.92449 12.8573 8.92449 14.5352C8.92449 16.2129 8.02052 17.5273 6.86643 17.5273C5.71273 17.5273 4.80876 16.2129 4.80876 14.5352ZM5.59322 14.5352C5.59322 15.7448 6.1762 16.7666 6.86643 16.7666C7.55666 16.7666 8.14003 15.7448 8.14003 14.5352C8.14003 13.3256 7.55666 12.3037 6.86643 12.3037C6.1762 12.3037 5.59322 13.3256 5.59322 14.5352Z",
            fill: "",
          })
        );
      }
      function g(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            width: "64",
            height: "62",
            viewBox: "0 0 64 62",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M5.68889 0H58.3111C61.44 0 64 2.56 64 5.68889V18.8444H0V5.68889C0 2.56 2.56 0 5.68889 0ZM17.2302 12.7289C17.8183 12.7289 18.2969 12.2503 18.2969 11.6622V6.82667C18.2969 6.23858 17.8183 5.76 17.2302 5.76H7.98578C7.39769 5.76 6.91911 6.23858 6.91911 6.82667V11.6622C6.91911 12.2503 7.39769 12.7289 7.98578 12.7289H17.2302ZM36.6222 12.7289C37.2103 12.7289 37.6889 12.2503 37.6889 11.6622V6.82667C37.6889 6.23858 37.2103 5.76 36.6222 5.76H27.3778C26.7897 5.76 26.3111 6.23858 26.3111 6.82667V11.6622C26.3111 12.2503 26.7897 12.7289 27.3778 12.7289H36.6222ZM56.0142 12.7289C56.603 12.7289 57.0809 12.2503 57.0809 11.6622V6.82667C57.0809 6.23858 56.603 5.76 56.0142 5.76H46.7698C46.1824 5.76 45.7031 6.23858 45.7031 6.82667V11.6622C45.7031 12.2503 46.1824 12.7289 46.7698 12.7289H56.0142ZM5.68889 61.8667C2.56 61.8667 0 59.3067 0 56.1778V22.4H64V56.1778C64 59.3067 61.44 61.8667 58.3111 61.8667H5.68889ZM26.5202 29.9164C24.7673 28.9422 23.3323 29.7856 23.3323 31.7916V48.5639C23.3323 50.5714 24.7666 51.4133 26.5202 50.4391L41.1669 42.3033C43.2697 41.1342 43.2697 39.222 41.1669 38.053L26.5202 29.9164Z",
            fill: "",
          })
        );
      }
      function h(e) {
        var t = e.className,
          n = Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object(r.a)(
            {
              className: t,
              width: "2",
              height: "52",
              viewBox: "0 0 2 52",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n
          ),
          i.a.createElement("path", { d: "M1 52V0.5", stroke: "#605A5A" })
        );
      }
      function b(e) {
        var t = e.className,
          n = Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object(r.a)(
            {
              className: t,
              width: "64",
              height: "64",
              viewBox: "0 0 64 64",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n
          ),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M8 1.5H56C59.5899 1.5 62.5 4.41015 62.5 8V56C62.5 59.5899 59.5899 62.5 56 62.5H8C4.41015 62.5 1.5 59.5899 1.5 56V8C1.5 4.41015 4.41015 1.5 8 1.5ZM0 8C0 3.58172 3.58172 0 8 0H56C60.4183 0 64 3.58172 64 8V56C64 60.4183 60.4183 64 56 64H8C3.58172 64 0 60.4183 0 56V8ZM49.6909 30.0352C45.9397 30.0352 42.8486 27.2093 42.4301 23.5703H7.5V21.8809H42.4302C42.8491 18.2423 45.94 15.417 49.6909 15.417C53.7277 15.417 57 18.6894 57 22.7261C57 26.7628 53.7277 30.0352 49.6909 30.0352ZM29.9517 40.75H57V42.4395H29.9518C29.5332 46.0785 26.4421 48.9043 22.6909 48.9043C18.9398 48.9043 15.8486 46.0785 15.4301 42.4395H8.31592V40.75H15.4302C15.8492 37.1115 18.9401 34.2861 22.6909 34.2861C26.4417 34.2861 29.5327 37.1115 29.9517 40.75ZM49.6909 28.0352C52.623 28.0352 55 25.6582 55 22.7261C55 19.7939 52.623 17.417 49.6909 17.417C46.7588 17.417 44.3818 19.7939 44.3818 22.7261C44.3818 25.6582 46.7588 28.0352 49.6909 28.0352ZM28 41.5952C28 44.5273 25.623 46.9043 22.6909 46.9043C19.7588 46.9043 17.3818 44.5273 17.3818 41.5952C17.3818 38.6631 19.7588 36.2861 22.6909 36.2861C25.623 36.2861 28 38.6631 28 41.5952Z",
            fill: "",
          })
        );
      }
      function y(e) {
        var t = e.className,
          n = Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object(r.a)(
            {
              className: t,
              width: "22",
              height: "22",
              viewBox: "0 0 22 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n
          ),
          i.a.createElement("path", { d: "M21 1L1 21", strokeWidth: "2" }),
          i.a.createElement("path", {
            d: "M0.999999 1L20 21",
            strokeWidth: "2",
          })
        );
      }
      function v(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: t,
            width: "59",
            height: "59",
            viewBox: "0 0 59 59",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("rect", {
            x: "1.5",
            y: "1.5",
            width: "56",
            height: "56",
            rx: "4",
            strokeWidth: "1",
            fillOpacity: "0.0",
          }),
          i.a.createElement("path", {
            d:
              "M29.14 15.868C30.748 15.868 32.128 16.144 33.28 16.696C34.456 17.224 35.356 17.968 35.98 18.928C36.604 19.864 36.916 20.932 36.916 22.132C36.916 22.948 36.772 23.68 36.484 24.328C36.196 24.952 35.848 25.492 35.44 25.948C35.032 26.38 34.468 26.932 33.748 27.604C32.956 28.3 32.308 28.924 31.804 29.476C31.3 30.028 30.868 30.724 30.508 31.564C30.172 32.38 30.004 33.34 30.004 34.444H27.088C27.088 33.004 27.268 31.78 27.628 30.772C28.012 29.764 28.468 28.96 28.996 28.36C29.548 27.736 30.232 27.076 31.048 26.38C31.888 25.636 32.5 24.988 32.884 24.436C33.292 23.884 33.496 23.212 33.496 22.42C33.496 21.268 33.064 20.356 32.2 19.684C31.336 19.012 30.16 18.676 28.672 18.676C26.608 18.676 24.736 19.336 23.056 20.656L21.76 18.244C22.696 17.524 23.8 16.948 25.072 16.516C26.368 16.084 27.724 15.868 29.14 15.868ZM28.564 37.288C29.26 37.288 29.812 37.504 30.22 37.936C30.628 38.344 30.832 38.908 30.832 39.628C30.832 40.348 30.628 40.912 30.22 41.32C29.812 41.728 29.26 41.932 28.564 41.932C27.892 41.932 27.352 41.728 26.944 41.32C26.536 40.912 26.332 40.348 26.332 39.628C26.332 38.908 26.536 38.344 26.944 37.936C27.352 37.504 27.892 37.288 28.564 37.288Z",
            fill: "",
          })
        );
      }
      function w(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: t,
            width: "49",
            height: "53",
            viewBox: "0 0 49 53",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            d:
              "M48.3765 33.45C47.1427 38.7688 44.1478 43.5146 39.8778 46.9174C35.6078 50.3201 30.3132 52.1801 24.8531 52.1956C23.0011 52.1943 21.1552 51.9821 19.3511 51.5633C14.4369 50.4243 10.0013 47.7787 6.66379 43.9961C3.32632 40.2135 1.25375 35.4829 0.735641 30.4651C0.708708 30.2012 0.787709 29.9374 0.955263 29.7318C1.12282 29.5261 1.3652 29.3955 1.62909 29.3685C1.89298 29.3416 2.15676 29.4206 2.36241 29.5882C2.56805 29.7557 2.69871 29.9981 2.72564 30.262C3.1115 34.01 4.44505 37.5981 6.60068 40.6883C8.75631 43.7786 11.6631 46.2693 15.0472 47.9258C18.4313 49.5824 22.1814 50.3503 25.9443 50.1571C29.7071 49.964 33.3589 48.8163 36.5556 46.822C39.0282 45.2791 41.1726 43.2644 42.8665 40.8927C44.5604 38.5211 45.7706 35.8391 46.428 32.9997C47.0854 30.1604 47.1771 27.2194 46.6978 24.3447C46.2186 21.4699 45.1779 18.7177 43.635 16.2451C42.0921 13.7726 40.0774 11.6282 37.7057 9.93425C35.3341 8.24035 32.6521 7.03016 29.8127 6.37279C24.0785 5.04515 18.0517 6.04982 13.0581 9.16578L8.53564 11.9879L17.0203 12.8514C17.2749 12.8779 17.5096 13.0011 17.6761 13.1955C17.8426 13.3899 17.9282 13.6407 17.9153 13.8964C17.9024 14.152 17.792 14.3929 17.6068 14.5696C17.4216 14.7463 17.1757 14.8452 16.9197 14.846C16.8855 14.8461 16.8512 14.8443 16.8171 14.8406L5.42564 13.6814C5.40474 13.6793 5.38834 13.6669 5.36784 13.6635C5.32663 13.6572 5.28587 13.6482 5.24584 13.6366C5.22414 13.6302 5.20214 13.6328 5.18054 13.6248C5.15644 13.6159 5.14054 13.5965 5.11764 13.586C5.03876 13.5541 4.96583 13.5091 4.90194 13.4529C4.86699 13.4246 4.83401 13.394 4.80324 13.3612C4.77384 13.3299 4.74658 13.2967 4.72164 13.2618C4.70914 13.2442 4.69014 13.2346 4.67864 13.2161C4.66714 13.1976 4.66684 13.1761 4.65664 13.1575C4.63643 13.12 4.6187 13.0812 4.60354 13.0414C4.57364 12.9592 4.55279 12.8741 4.54134 12.7874C4.53787 12.7449 4.5372 12.7022 4.53934 12.6597C4.53994 12.6343 4.52934 12.6114 4.53214 12.5857C4.53434 12.5636 4.54714 12.5457 4.55074 12.5245C4.55755 12.4833 4.56704 12.4426 4.57914 12.4026C4.58524 12.382 4.58124 12.3611 4.58914 12.3406L8.55334 1.59938C8.64516 1.35049 8.83209 1.14827 9.07301 1.0372C9.1923 0.982204 9.32125 0.951243 9.45251 0.946084C9.58377 0.940926 9.71475 0.96167 9.83799 1.00713C9.96123 1.0526 10.0743 1.12189 10.1708 1.21105C10.2672 1.30022 10.3452 1.40751 10.4002 1.5268C10.4552 1.64609 10.4861 1.77505 10.4913 1.9063C10.4964 2.03756 10.4757 2.16854 10.4302 2.29178L7.47744 10.2918L11.9995 7.46998C16.0588 4.93676 20.7781 3.66416 25.5607 3.81312C30.3433 3.96208 34.9742 5.52591 38.868 8.30684C42.7618 11.0878 45.7434 14.9609 47.436 19.4364C49.1285 23.912 49.4558 28.7889 48.3765 33.4505V33.45ZM14.7565 39.346L25.4126 28.6897C25.6002 28.5022 25.7056 28.2479 25.7056 27.9827V17.0784C25.7056 16.8132 25.6003 16.5588 25.4127 16.3713C25.2252 16.1837 24.9709 16.0784 24.7056 16.0784C24.4404 16.0784 24.1861 16.1837 23.9985 16.3713C23.811 16.5588 23.7056 16.8132 23.7056 17.0784V27.5684L13.3423 37.9319C13.2475 38.0243 13.1721 38.1346 13.1202 38.2565C13.0684 38.3783 13.0413 38.5092 13.0404 38.6416C13.0396 38.7739 13.0651 38.9052 13.1153 39.0276C13.1656 39.1501 13.2397 39.2614 13.3333 39.355C13.4269 39.4486 13.5382 39.5227 13.6607 39.573C13.7831 39.6233 13.9144 39.6487 14.0468 39.6479C14.1792 39.647 14.3101 39.6199 14.4319 39.5681C14.5537 39.5163 14.664 39.4408 14.7564 39.346H14.7565Z",
            fill: "",
          })
        );
      }
      function C(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: t,
            width: "47",
            height: "22",
            viewBox: "0 0 47 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            d:
              "M36.4525 0.983032C34.3364 0.983032 32.2684 1.65634 30.5371 2.90676C30.4409 2.95486 29.9599 3.3396 29.9599 3.38769L23.7078 8.48558L17.5038 3.43579C17.3595 3.3396 16.3976 2.57011 16.1091 2.42583C14.5701 1.51206 12.7426 1.03113 10.915 1.03113C5.33619 1.03113 0.767334 5.59999 0.767334 11.1788C0.767334 16.7576 5.33619 21.3265 10.915 21.3265C13.0311 21.3265 15.0991 20.6532 16.8305 19.4028C16.9267 19.3547 17.4076 18.9699 17.4557 18.9218L23.7078 13.8239L29.9119 18.8737C30.0561 18.9699 31.0661 19.7394 31.3066 19.8837C32.8455 20.7975 34.6731 21.2784 36.5006 21.2784C42.0795 21.2784 46.6483 16.7095 46.6483 11.1307C46.6483 5.55189 42.0795 0.983032 36.4525 0.983032ZM14.4739 15.94C13.4159 16.7095 12.2135 17.1424 10.915 17.1424C7.64467 17.1424 4.95145 14.4491 4.95145 11.1788C4.95145 7.90846 7.64467 5.21524 10.915 5.21524C11.9731 5.21524 13.0311 5.5038 13.9449 6.03282C14.1373 6.12901 14.7144 6.56185 14.8106 6.65804L20.3894 11.1788C20.3894 11.1788 14.522 15.8919 14.4739 15.94ZM36.4525 17.1424C35.3945 17.1424 34.3364 16.8538 33.4227 16.3248C33.2303 16.2286 32.6532 15.7958 32.557 15.6996L26.9782 11.1788L32.8455 6.41757C33.9036 5.64808 35.1059 5.21524 36.4044 5.21524C39.6748 5.21524 42.368 7.90846 42.368 11.1788C42.368 14.4491 39.771 17.1424 36.4525 17.1424Z",
            fill: "",
          })
        );
      }
      function I(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: t,
            width: "29",
            height: "28",
            viewBox: "0 0 29 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            d:
              "M24.4232 4.36344C22.5002 2.44044 20.0502 1.13086 17.383 0.600287C14.7157 0.0697194 11.9511 0.342 9.43855 1.3827C6.92606 2.42339 4.77858 4.18576 3.2677 6.44695C1.75682 8.70813 0.950394 11.3666 0.950394 14.0861C0.950394 16.8056 1.75682 19.464 3.2677 21.7252C4.77858 23.9864 6.92606 25.7487 9.43855 26.7894C11.9511 27.8301 14.7157 28.1024 17.383 27.5718C20.0502 27.0413 22.5002 25.7317 24.4232 23.8087C25.7042 22.5343 26.7208 21.0193 27.4145 19.3507C28.1082 17.6822 28.4653 15.893 28.4653 14.0861C28.4653 12.2791 28.1082 10.4899 27.4145 8.82138C26.7208 7.15284 25.7042 5.63784 24.4232 4.36344ZM16.5334 21.3914H12.865V12.3164H16.5334V21.3914ZM14.6992 10.7874C14.3015 10.7874 13.9127 10.6695 13.5821 10.4485C13.2514 10.2274 12.9938 9.91333 12.8417 9.54584C12.6896 9.17835 12.65 8.77402 12.7278 8.38399C12.8056 7.99397 12.9973 7.63578 13.2787 7.35475C13.5601 7.07373 13.9186 6.88248 14.3087 6.80523C14.6988 6.72797 15.1031 6.76818 15.4704 6.92075C15.8377 7.07332 16.1514 7.33141 16.372 7.66235C16.5926 7.9933 16.71 8.38223 16.7094 8.77994C16.7094 9.0438 16.6574 9.30507 16.5564 9.54881C16.4553 9.79255 16.3072 10.014 16.1205 10.2004C15.9338 10.3869 15.7122 10.5347 15.4683 10.6354C15.2244 10.7361 14.9631 10.7878 14.6992 10.7874Z",
            fill: "",
          })
        );
      }
      function M(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: t,
            width: "41",
            height: "64",
            viewBox: "0 0 41 64",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M30.4126 5.84583C28.4532 5.77501 26.5883 4.98584 25.1733 3.62868C22.883 1.43206 19.2764 1.40456 16.9529 3.566C15.5173 4.90142 13.6406 5.66206 11.6804 5.70299C8.50765 5.76924 5.93799 8.30001 5.82337 11.4714C5.75255 13.4308 4.96338 15.2956 3.60622 16.7107C1.4096 19.001 1.3821 22.6075 3.54354 24.9311C4.87896 26.3667 5.6396 28.2433 5.68053 30.2036C5.74678 33.3763 8.27755 35.946 11.4489 36.0606C13.4083 36.1314 15.2732 36.9206 16.6882 38.2778C18.9785 40.4744 22.5851 40.5019 24.9086 38.3404C26.3442 37.005 28.2209 36.2444 30.1811 36.2035C33.3539 36.1372 35.9235 33.6064 36.0382 30.4351C36.109 28.4757 36.8981 26.6108 38.2553 25.1958C40.4519 22.9055 40.4794 19.2989 38.318 16.9754C36.9826 15.5398 36.2219 13.6631 36.181 11.7029C36.1147 8.53011 33.584 5.96045 30.4126 5.84583ZM37.1808 11.682C37.1035 7.9792 34.1499 4.98025 30.4487 4.84648C28.7347 4.78453 27.1033 4.09418 25.8655 2.90697C23.1926 0.343378 18.9835 0.311283 16.2718 2.83381C15.016 4.00202 13.3743 4.6674 11.6595 4.70321C7.95674 4.78052 4.95779 7.73408 4.82402 11.4352C4.76207 13.1493 4.07172 14.7806 2.88451 16.0185C0.320917 18.6914 0.288821 22.9005 2.81135 25.6122C3.97955 26.868 4.64494 28.5097 4.68075 30.2245C4.75807 33.9272 7.71162 36.9262 11.4128 37.06C13.1268 37.1219 14.7582 37.8123 15.996 38.9995C18.669 41.5631 22.878 41.5952 25.5897 39.0726C26.8455 37.9044 28.4872 37.239 30.202 37.2032C33.9048 37.1259 36.9037 34.1724 37.0375 30.4712C37.0995 28.7572 37.7898 27.1258 38.977 25.888C41.5406 23.215 41.5727 19.006 39.0502 16.2943C37.882 15.0384 37.2166 13.3968 37.1808 11.682ZM31.4863 41.2401C31.4867 41.2404 31.487 41.2407 31.1669 41.6248L31.487 41.2407L31.6669 41.3906V41.6248V62.5728V63.4683L30.9046 62.9985L20.9309 56.8517L10.9573 62.9985L10.1949 63.4683V62.5728V41.6248V41.3555L10.4198 41.2073L10.6949 41.6248C10.4198 41.2073 10.42 41.2071 10.4203 41.2069L10.4209 41.2065L10.4222 41.2057L10.425 41.2039L10.4321 41.1993L10.4518 41.1873C10.4674 41.1779 10.4879 41.1661 10.5133 41.1524C10.5641 41.125 10.6344 41.0902 10.7241 41.0527C10.9034 40.9778 11.1598 40.8927 11.4906 40.8367C12.1557 40.724 13.1039 40.7318 14.3111 41.1525C14.7935 41.3206 15.3635 41.6156 15.9507 41.9446C16.2911 42.1353 16.6562 42.3485 17.0236 42.563L17.024 42.5632L17.0248 42.5637C17.2873 42.717 17.551 42.871 17.8076 43.0179C18.4375 43.3784 19.0498 43.7114 19.6033 43.955C20.1687 44.2038 20.6187 44.3343 20.9375 44.3385C21.205 44.3421 21.6162 44.2205 22.1636 43.9649C22.6946 43.7169 23.2892 43.3749 23.9047 43.0052C24.1025 42.8864 24.3034 42.7642 24.5044 42.642L24.5055 42.6413L24.5067 42.6406L24.5067 42.6405L24.5069 42.6405C24.9206 42.3888 25.3344 42.137 25.7213 41.9151C26.2933 41.587 26.855 41.2951 27.3286 41.1477C28.7347 40.7101 29.7388 40.6983 30.4172 40.8191C30.7557 40.8794 31.0083 40.9719 31.1846 41.0565C31.2726 41.0987 31.3409 41.1387 31.3909 41.1712C31.4159 41.1874 31.4363 41.2018 31.4523 41.2136C31.4603 41.2195 31.4671 41.2248 31.4729 41.2293L31.4808 41.2356L31.4841 41.2383L31.4856 41.2395L31.4863 41.2401ZM11.1949 41.9422V61.6774L20.6686 55.8387L20.9309 55.6771L21.1932 55.8387L30.6669 61.6774V41.9208C30.5682 41.8813 30.4282 41.8368 30.242 41.8037C29.7472 41.7156 28.9065 41.704 27.6258 42.1025C27.2665 42.2144 26.7877 42.4563 26.2189 42.7825C25.8428 42.9982 25.4485 43.2381 25.0417 43.4856L25.0415 43.4858L25.0399 43.4867C24.836 43.6108 24.629 43.7367 24.4195 43.8625C23.8009 44.234 23.1684 44.5994 22.5866 44.871C22.0212 45.135 21.4338 45.3452 20.9243 45.3385C20.3958 45.3315 19.7928 45.1309 19.2005 44.8703C18.5965 44.6045 17.9466 44.2496 17.3108 43.8857C17.0355 43.7281 16.7669 43.5712 16.504 43.4176C16.1468 43.209 15.8002 43.0066 15.4619 42.817C14.8778 42.4897 14.3743 42.2334 13.9821 42.0968C12.9316 41.7307 12.1539 41.7385 11.6576 41.8226C11.4625 41.8557 11.308 41.901 11.1949 41.9422ZM23.7901 8.68637C24.8582 9.71081 26.2659 10.3065 27.7449 10.36C29.879 10.4371 31.582 12.1663 31.6266 14.3013C31.6575 15.781 32.2316 17.1975 33.2397 18.2812C34.6941 19.8447 34.6756 22.2717 33.1975 23.8129C32.173 24.881 31.5774 26.2887 31.5239 27.7677C31.4468 29.9018 29.7176 31.6048 27.5826 31.6494C26.1029 31.6803 24.6863 32.2544 23.6027 33.2625C22.0391 34.7169 19.6122 34.6984 18.071 33.2203C17.0028 32.1958 15.5952 31.6002 14.1162 31.5467C11.9821 31.4696 10.2791 29.7404 10.2345 27.6054C10.2036 26.1257 9.62942 24.7091 8.62139 23.6255C7.16691 22.0619 7.18542 19.635 8.66357 18.0938C9.68801 17.0256 10.2837 15.618 10.3372 14.1389C10.4143 12.0049 12.1435 10.3019 14.2785 10.2573C15.7582 10.2264 17.1747 9.65222 18.2584 8.64419C19.8219 7.18971 22.2489 7.20821 23.7901 8.68637ZM27.781 9.36061C30.4449 9.45689 32.5707 11.6154 32.6264 14.2804C32.6521 15.5146 33.131 16.6962 33.9719 17.6001C35.7874 19.5518 35.7643 22.5812 33.9192 24.5051C33.0647 25.396 32.5678 26.5702 32.5232 27.8038C32.427 30.4677 30.2685 32.5935 27.6034 32.6492C26.3692 32.6749 25.1876 33.1538 24.2838 33.9946C22.332 35.8102 19.3026 35.7871 17.3788 33.942C16.4879 33.0875 15.3137 32.5906 14.08 32.546C11.4161 32.4498 9.29034 30.2913 9.23469 27.6262C9.20892 26.392 8.73001 25.2104 7.88921 24.3066C6.07363 22.3548 6.09673 19.3254 7.94186 17.4016C8.79635 16.5107 9.29322 15.3365 9.33781 14.1028C9.43409 11.4389 11.5926 9.31314 14.2576 9.25749C15.4918 9.23172 16.6734 8.75281 17.5773 7.912C19.529 6.09643 22.5584 6.11953 24.4823 7.96466C25.3732 8.81915 26.5474 9.31602 27.781 9.36061Z",
            fill: "none",
          })
        );
      }
      function j(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: t,
            width: "55",
            height: "63",
            viewBox: "0 0 55 63",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            d:
              "M47.7642 5.46737H43.3958V3.44632C43.3958 0.953685 42.3747 0 39.9495 0C37.4568 0 36.5032 1.02105 36.5032 3.44632V5.46737H17.5937V3.44632C17.5937 0.953685 16.5726 0 14.1474 0C11.6547 0 10.7011 1.02105 10.7011 3.44632V5.46737H6.33263C2.82947 5.46737 0 8.29684 0 11.8V56.6674C0 60.1705 2.82947 63 6.33263 63H47.7642C51.2674 63 54.0968 60.1705 54.0968 56.6674V11.8C54.0968 8.29684 51.2674 5.46737 47.7642 5.46737ZM1.62737 50.0758C2.62737 51.5 3.91789 52.2884 5.33263 52.2884H48.7642C50.1116 52.2884 51.1274 51.5 52.4021 50.1432V51.3453C52.4021 53.3663 50.7853 55.9832 48.7642 55.9832H5.33263C3.31158 55.9832 1.62737 53.3663 1.62737 51.3453V50.0758ZM52.4021 45.8884C52.4021 47.9095 50.7853 50.5263 48.7642 50.5263H5.33263C3.31158 50.5263 1.62737 47.9095 1.62737 45.8884V17.7958H52.4021V45.8884ZM38.1305 3.44632C38.1305 2.43579 38.9389 1.69474 39.8821 1.69474C40.8253 1.69474 41.6337 2.50316 41.6337 3.44632V6.62316C41.6337 7.63368 40.8253 8.37474 39.8821 8.37474C38.9389 8.37474 38.1305 7.56632 38.1305 6.62316V3.44632ZM12.3958 3.44632C12.3958 2.43579 13.2042 1.69474 14.1474 1.69474C15.0905 1.69474 15.8989 2.50316 15.8989 3.44632V6.62316C15.8989 7.63368 15.0905 8.37474 14.1474 8.37474C13.2042 8.37474 12.3958 7.56632 12.3958 6.62316V3.44632ZM5.33263 7.16211H10.7684C11.0379 9.38526 11.9242 10.1368 14.2147 10.1368C16.5053 10.1368 17.3916 9.38526 17.6611 7.16211H36.5705C36.84 9.38526 37.7263 10.1368 40.0168 10.1368C42.3074 10.1368 43.1937 9.38526 43.4632 7.16211H48.8989C50.92 7.16211 52.5368 9.77895 52.5368 11.8V16.1011H1.62737V11.8C1.62737 9.77895 3.24421 7.16211 5.33263 7.16211ZM48.7642 61.3053H6.33263C4.31158 61.3053 1.62737 58.6884 1.62737 56.6674V55.4653C2.62737 57.6779 4.91789 57.6779 6.33263 57.6779H48.7642C50.1116 57.6779 51.1274 57.5 52.4021 55.5326V56.7347C52.4021 58.6884 50.7853 61.3053 48.7642 61.3053Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M10.7159 34.7325H10.918C12.0632 34.7325 13.0064 33.7893 13.0064 32.644V32.4419C13.0064 31.2967 12.0632 30.3535 10.918 30.3535H10.7159C9.5706 30.3535 8.62744 31.2967 8.62744 32.4419V32.644C8.62744 33.8567 9.5706 34.7325 10.7159 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M19.0694 34.7325H19.2715C20.4167 34.7325 21.3599 33.7893 21.3599 32.644V32.4419C21.3599 31.2967 20.4167 30.3535 19.2715 30.3535H19.0694C17.9241 30.3535 16.981 31.2967 16.981 32.4419V32.644C16.981 33.8567 17.9241 34.7325 19.0694 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M27.4234 34.7325H27.6255C28.7708 34.7325 29.7139 33.7893 29.7139 32.644V32.4419C29.7139 31.2967 28.7708 30.3535 27.6255 30.3535H27.4234C26.2781 30.3535 25.335 31.2967 25.335 32.4419V32.644C25.335 33.8567 26.2781 34.7325 27.4234 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M10.7159 26.3789H10.918C12.0632 26.3789 13.0064 25.4358 13.0064 24.2905V24.0884C13.0064 22.9432 12.0632 22 10.918 22H10.7159C9.5706 22 8.62744 22.9432 8.62744 24.0884V24.2905C8.62744 25.4358 9.5706 26.3789 10.7159 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M19.0694 26.3789H19.2715C20.4167 26.3789 21.3599 25.4358 21.3599 24.2905V24.0884C21.3599 22.9432 20.4167 22 19.2715 22H19.0694C17.9241 22 16.981 22.9432 16.981 24.0884V24.2905C16.981 25.4358 17.9241 26.3789 19.0694 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M27.4234 26.3789H27.6255C28.7708 26.3789 29.7139 25.4358 29.7139 24.2905V24.0884C29.7139 22.9432 28.7708 22 27.6255 22H27.4234C26.2781 22 25.335 22.9432 25.335 24.0884V24.2905C25.335 25.4358 26.2781 26.3789 27.4234 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M35.7774 34.7325H35.9795C37.1248 34.7325 38.0679 33.7893 38.0679 32.644V32.4419C38.0679 31.2967 37.1248 30.3535 35.9795 30.3535H35.7774C34.6321 30.3535 33.689 31.2967 33.689 32.4419V32.644C33.689 33.8567 34.6321 34.7325 35.7774 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M44.1309 34.7325H44.333C45.4783 34.7325 46.4214 33.7893 46.4214 32.644V32.4419C46.4214 31.2967 45.4783 30.3535 44.333 30.3535H44.1309C42.9856 30.3535 42.0425 31.2967 42.0425 32.4419V32.644C42.0425 33.8567 42.9856 34.7325 44.1309 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M35.7774 26.3789H35.9795C37.1248 26.3789 38.0679 25.4358 38.0679 24.2905V24.0884C38.0679 22.9432 37.1248 22 35.9795 22H35.7774C34.6321 22 33.689 22.9432 33.689 24.0884V24.2905C33.689 25.4358 34.6321 26.3789 35.7774 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M44.1309 26.3789H44.333C45.4783 26.3789 46.4214 25.4358 46.4214 24.2905V24.0884C46.4214 22.9432 45.4783 22 44.333 22H44.1309C42.9856 22 42.0425 22.9432 42.0425 24.0884V24.2905C42.0425 25.4358 42.9856 26.3789 44.1309 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M10.7159 43.1534H10.918C12.0632 43.1534 13.0064 42.2102 13.0064 41.0649V40.8628C13.0064 39.7176 12.0632 38.7744 10.918 38.7744H10.7159C9.5706 38.7744 8.62744 39.7176 8.62744 40.8628V41.0649C8.62744 42.2102 9.5706 43.1534 10.7159 43.1534Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M19.0694 43.1534H19.2715C20.4167 43.1534 21.3599 42.2102 21.3599 41.0649V40.8628C21.3599 39.7176 20.4167 38.7744 19.2715 38.7744H19.0694C17.9241 38.7744 16.981 39.7176 16.981 40.8628V41.0649C16.981 42.2102 17.9241 43.1534 19.0694 43.1534Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M27.4234 43.1534H27.6255C28.7708 43.1534 29.7139 42.2102 29.7139 41.0649V40.8628C29.7139 39.7176 28.7708 38.7744 27.6255 38.7744H27.4234C26.2781 38.7744 25.335 39.7176 25.335 40.8628V41.0649C25.335 42.2102 26.2781 43.1534 27.4234 43.1534Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M35.7774 43.1534H35.9795C37.1248 43.1534 38.0679 42.2102 38.0679 41.0649V40.8628C38.0679 39.7176 37.1248 38.7744 35.9795 38.7744H35.7774C34.6321 38.7744 33.689 39.7176 33.689 40.8628V41.0649C33.689 42.2102 34.6321 43.1534 35.7774 43.1534Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d:
              "M44.1309 43.1534H44.333C45.4783 43.1534 46.4214 42.2102 46.4214 41.0649V40.8628C46.4214 39.7176 45.4783 38.7744 44.333 38.7744H44.1309C42.9856 38.7744 42.0425 39.7176 42.0425 40.8628V41.0649C42.0425 42.2102 42.9856 43.1534 44.1309 43.1534Z",
            fill: "",
          })
        );
      }
      function N(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: t,
            height: 100,
            width: 100,
            fill: "#fff",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 69 69",
          },
          i.a.createElement("path", {
            d:
              "M57.189 51.828H11.813a1 1 0 00-1 1v4.77a1 1 0 001 1h45.376a1 1 0 001-1v-4.77a1 1 0 00-1-1zm-1 4.77H12.813v-2.77h43.376v2.77z",
          }),
          i.a.createElement("path", {
            d:
              "M63.189 4.402H5.813a1 1 0 00-1 1L4.81 62.598H2.46a1 1 0 100 2h64.08a1 1 0 100-2h-2.35l-.001-57.196a1 1 0 00-1-1zm-56.376 2h55.376v39.426H43.584v-5.854h-7.556l2.448-2.48a.999.999 0 00.288-.702V18.915h2.062a1 1 0 100-2h-3.508v-3.775h1.32a1 1 0 100-2h-3.584v-.917a1 1 0 10-2 0v.917H29.47a1 1 0 100 2h1.32v3.775h-3.508a1 1 0 100 2h2.061v17.875c0 .242.087.474.245.656l2.195 2.527h-6.365v5.854H6.813V6.402zm25.977 6.74h2.528v3.774H32.79v-3.775zm-1.447 5.774h1.711v14.642a1 1 0 102 0V18.916h1.71v17.465l-2.9 2.94-2.52-2.904v-17.5zm10.241 23.058v3.834H27.418v-3.834h14.166zM6.81 62.598v-14.77h55.38v14.77H6.81z",
          })
        );
      }
      function E(e) {
        var t = e.className;
        Object(r.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: t,
            height: 100,
            width: 100,
            fill: "#fff",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 69 69",
          },
          i.a.createElement("path", {
            d:
              "M47.9849 0.487061L62.9734 29.8571L95.5377 35.0362L72.2368 58.367L77.3741 90.9379L47.9849 75.9871L18.5956 90.9379L23.7329 58.367L0.432037 35.0362L32.9963 29.8571L47.9849 0.487061Z",
            fill: "#AFB5C1",
          }),
          "  "
        );
      }
      function S(e) {
        return i.a.createElement(
          "svg",
          Object(r.a)(
            {
              version: "1.1",
              x: "0px",
              y: "0px",
              width: "1400px",
              height: "1409px",
              viewBox: "0 1801.5 1400 1409",
            },
            e
          ),
          i.a.createElement("path", {
            fill: "#FFFFFF",
            d:
              "M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0\r\n\t\t\t\tc16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294\r\n\t\t\t\tc-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280\r\n\t\t\t\tc74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941\r\n\t\t\t\tc-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z\r\n\t\t\t\t\tM757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0\r\n\t\t\t\tc82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0\r\n\t\t\t\tc-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647\r\n\t\t\t\tc148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059\r\n\t\t\t\tS905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z",
          })
        );
      }
    },
    "e1m+": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/mystery2020.png?v=valveisgoodatcaching";
    },
    eOCM: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/bored.png?v=valveisgoodatcaching";
    },
    eeci: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/hot_take_apng.png?v=valveisgoodatcaching";
    },
    ehaW: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return A;
      }),
        r.d(t, "e", function () {
          return x;
        }),
        r.d(t, "b", function () {
          return L;
        }),
        r.d(t, "d", function () {
          return B;
        }),
        r.d(t, "c", function () {
          return R;
        }),
        r.d(t, "f", function () {
          return z;
        });
      var n,
        h = r("mrSG"),
        a = r("q1tI"),
        b = r.n(a),
        i = r("TyAF"),
        y = r("StxQ"),
        o = r("6Y59"),
        v = r("Vlb1"),
        w = r("exH9"),
        l = r("lkRc"),
        u = r("TLQK"),
        d = r("prdU"),
        C = r("cJ7F"),
        I = r("cOvF"),
        s = r("IjL/"),
        m = r("qD+2"),
        c = r("lypr"),
        p = r("MLaC");
      function f(e) {
        var t = e.className,
          n = Object(h.f)(e, ["className"]);
        return b.a.createElement(
          "div",
          Object(h.a)({ className: Object(w.a)(t, p.Pulse) }, n)
        );
      }
      var M = {
        colors: {
          bodygradient: v.strDefaultBodyGradient,
          background: v.strDefaultBodyBackground,
        },
      };
      function _(e) {
        var t = e.definition,
          n = Object(h.f)(e, ["definition"]);
        t.community_item_data || console.log(t);
        var r =
          l.c.MEDIA_CDN_COMMUNITY_URL +
          "images/items/" +
          t.appid +
          "/" +
          t.community_item_data.item_image_large;
        3 == t.community_item_class &&
          (r =
            l.c.COMMUNITY_BASE_URL +
            "economy/profilebackground/items/" +
            t.appid +
            "/" +
            t.community_item_data.item_image_large +
            "?size=320x200");
        var a = [];
        t.community_item_data.animated &&
          a.push(
            b.a.createElement(I.a, {
              className: v.IconAnimated,
              key: "animated",
            })
          );
        var i = m.a.GetAppInfo(t.appid),
          o = i.icon_url,
          s = i.name,
          c = t.community_item_data.item_title
            ? t.community_item_data.item_title
            : t.community_item_data.item_name;
        return Object(h.a)(
          {
            cost: parseInt(t.point_cost),
            name: c,
            children: b.a.createElement("div", {
              className: v.Image,
              style: { backgroundImage: "url(" + r + ")" },
            }),
            attributes: a,
            desc: Object(d.d)(t.community_item_class),
            appIcon: o,
            appName: s,
          },
          n
        );
      }
      function g(e) {
        return b.a.createElement(A, Object(h.a)({}, _(e)));
      }
      function j(e) {
        var t = e.appName,
          n = e.appIcon,
          r = e.attributes,
          a = e.children,
          i = e.cost,
          o = e.iconComponent,
          s = e.name,
          c = e.desc,
          l = e.className,
          m = (e.style, e.theme),
          u = e.styleOverride,
          d = e.strPriceOverride,
          p =
            (e.itemLevel,
            Object(h.f)(e, [
              "appName",
              "appIcon",
              "attributes",
              "children",
              "cost",
              "iconComponent",
              "name",
              "desc",
              "className",
              "style",
              "theme",
              "styleOverride",
              "strPriceOverride",
              "itemLevel",
            ])),
          f = o,
          _ = { background: (m || M).colors.bodygradient },
          g = { background: (m || M).colors.background };
        return b.a.createElement(
          "div",
          { className: v.ItemWideContainer },
          b.a.createElement(
            C.a,
            Object(h.a)({}, p, {
              className: Object(w.a)(l, v.Item, u),
              style: g,
            }),
            b.a.createElement(
              C.b,
              { className: v.Body, style: _ },
              b.a.createElement("div", { className: v.Attributes }, r),
              b.a.createElement(T, { src: n, title: t }),
              a
            ),
            b.a.createElement(
              C.c,
              { className: v.Footer },
              b.a.createElement(
                "div",
                { style: { flex: 1 } },
                b.a.createElement(
                  "div",
                  null,
                  b.a.createElement("div", { className: v.Name }, s),
                  b.a.createElement(
                    "div",
                    { className: v.ItemTypeContainer },
                    f &&
                      b.a.createElement(f, {
                        className: v.Icon,
                        style: { fill: "" },
                      }),
                    b.a.createElement("div", { className: v.Subtitle }, c, " ")
                  )
                )
              ),
              b.a.createElement(
                "div",
                { className: v.CostRow },
                b.a.createElement(I.i, { className: v.IconPartialCheckMark }),
                b.a.createElement(I.h, { className: v.IconCheckMark }),
                b.a.createElement(
                  "div",
                  { className: v.Cost },
                  null != d ? d : b.a.createElement(y.a, { amount: i })
                )
              )
            ),
            b.a.createElement("div", { className: v.ItemContainerShine })
          )
        );
      }
      var N = function (e) {
          return b.a.createElement(
            S,
            Object(h.a)({ className: v.HasAnimation }, _(e), {
              iconComponent: o.b,
              styleOverride: v.BackgroundOverride,
              videoProps: {
                className: v.ImageBackground,
                poster:
                  l.c.COMMUNITY_BASE_URL +
                  "economy/profilebackground/items/" +
                  e.definition.appid +
                  "/" +
                  e.definition.community_item_data.item_image_large +
                  "?size=320x200",
              },
            }),
            b.a.createElement(
              b.a.Fragment,
              null,
              b.a.createElement("source", {
                src:
                  l.c.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.definition.appid +
                  "/" +
                  (e.definition.community_item_data.item_movie_webm_small
                    ? e.definition.community_item_data.item_movie_webm_small
                    : e.definition.community_item_data.item_movie_webm),
                type: "video/webm",
              }),
              b.a.createElement("source", {
                src:
                  l.c.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.definition.appid +
                  "/" +
                  (e.definition.community_item_data.item_movie_mp4_small
                    ? e.definition.community_item_data.item_movie_mp4_small
                    : e.definition.community_item_data.item_movie_mp4),
                type: "video/mp4",
              })
            )
          );
        },
        E = function (e) {
          return b.a.createElement(
            A,
            Object(h.a)({}, _(e), {
              iconComponent: o.b,
              styleOverride: v.BackgroundOverride,
            }),
            b.a.createElement("img", {
              className: v.ImageBackground,
              src:
                l.c.COMMUNITY_BASE_URL +
                "economy/profilebackground/items/" +
                e.definition.appid +
                "/" +
                e.definition.community_item_data.item_image_large +
                "?size=320x200",
            })
          );
        },
        S = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.m_ref = b.a.createRef()),
              (e.state = { bVisible: !1 }),
              (e.m_playPromise = null),
              (e.m_bShouldContinuePlaying = !0),
              e
            );
          }
          return (
            Object(h.d)(e, t),
            (e.prototype.render = function () {
              var t = this,
                e = this.props,
                n = e.children,
                r = e.videoProps,
                a = Object(h.f)(e, ["children", "videoProps"]);
              return b.a.createElement(
                A,
                Object(h.a)({}, a),
                b.a.createElement(c.a, {
                  trigger: "repeated",
                  onVisibiltyChange: function (e) {
                    return t.HandleVisibilityChange(e);
                  },
                  className: v.VisibilityTracker,
                }),
                b.a.createElement(
                  "video",
                  Object(h.a)(
                    {
                      playsInline: !0,
                      loop: !0,
                      muted: !0,
                      autoPlay: !0,
                      controls: !1,
                    },
                    r,
                    { ref: this.m_ref }
                  ),
                  this.state.bVisible && n
                )
              );
            }),
            (e.prototype.HandleVisibilityChange = function (e) {
              var t = this;
              this.m_ref.current &&
                (this.m_playPromise
                  ? (this.m_bShouldContinuePlaying = e)
                  : e
                  ? ((this.m_playPromise = this.m_ref.current.play()),
                    this.m_playPromise &&
                      (this.m_playPromise.then(function () {
                        !t.m_bShouldContinuePlaying &&
                          t.m_ref.current &&
                          t.m_ref.current.pause(),
                          (t.m_playPromise = null);
                      }),
                      (this.m_bShouldContinuePlaying = !0)))
                  : this.m_ref.current.pause()),
                this.setState({ bVisible: e });
            }),
            e
          );
        })(b.a.Component),
        O = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bHover: !1 }), e;
          }
          return (
            Object(h.d)(e, t),
            (e.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.children,
                r = Object(h.f)(t, ["children"]);
              return b.a.createElement(
                A,
                Object(h.a)({}, r, {
                  onMouseEnter: function () {
                    return e.setState({ bHover: !0 });
                  },
                  onMouseLeave: function () {
                    return e.setState({ bHover: !1 });
                  },
                }),
                n(this.state.bHover || !0)
              );
            }),
            e
          );
        })(b.a.Component),
        A = function (e) {
          var t = e.appName,
            n = e.appIcon,
            r = e.attributes,
            a = e.children,
            i = e.cost,
            o = e.iconComponent,
            s = e.name,
            c = e.desc,
            l = e.className,
            m = (e.style, e.theme),
            u = e.styleOverride,
            d = e.strPriceOverride,
            p =
              (e.itemLevel,
              Object(h.f)(e, [
                "appName",
                "appIcon",
                "attributes",
                "children",
                "cost",
                "iconComponent",
                "name",
                "desc",
                "className",
                "style",
                "theme",
                "styleOverride",
                "strPriceOverride",
                "itemLevel",
              ])),
            f = o,
            _ = { background: (m || M).colors.bodygradient },
            g = { background: (m || M).colors.background };
          return b.a.createElement(
            "div",
            { className: v.ItemContainer },
            b.a.createElement(
              C.a,
              Object(h.a)({}, p, {
                className: Object(w.a)(l, v.Item, u),
                style: g,
              }),
              b.a.createElement(
                C.b,
                { className: v.Body, style: _ },
                b.a.createElement("div", { className: v.Attributes }, r),
                b.a.createElement(T, { src: n, title: t }),
                a
              ),
              b.a.createElement(
                C.c,
                { className: v.Footer },
                b.a.createElement(
                  "div",
                  { style: { flex: 1 } },
                  b.a.createElement(
                    "div",
                    null,
                    b.a.createElement("div", { className: v.Name }, s),
                    b.a.createElement(
                      "div",
                      { className: v.ItemTypeContainer },
                      f &&
                        b.a.createElement(f, {
                          className: v.Icon,
                          style: { fill: "" },
                        }),
                      b.a.createElement(
                        "div",
                        { className: v.Subtitle },
                        c,
                        " "
                      )
                    )
                  )
                ),
                b.a.createElement(
                  "div",
                  { className: v.CostRow },
                  b.a.createElement(I.i, { className: v.IconPartialCheckMark }),
                  b.a.createElement(I.h, { className: v.IconCheckMark }),
                  b.a.createElement(
                    "div",
                    { className: v.Cost },
                    null != d ? d : b.a.createElement(y.a, { amount: i })
                  )
                )
              ),
              b.a.createElement("div", { className: v.ItemContainerShine })
            )
          );
        },
        D =
          (((n = {})[11] = function (c) {
            return b.a.createElement(
              O,
              Object(h.a)({}, _(c), { iconComponent: o.m }),
              function (e) {
                var t = c.definition,
                  n = t.appid,
                  r = t.community_item_data,
                  a = r.item_image_large,
                  i = r.item_image_small,
                  o = e ? i : a,
                  s =
                    l.c.MEDIA_CDN_COMMUNITY_URL + "images/items/" + n + "/" + o;
                return b.a.createElement("img", {
                  className: v.ImageMedium,
                  src: s,
                });
              }
            );
          }),
          (n[4] = function (e) {
            return b.a.createElement(
              A,
              Object(h.a)({}, _(e), { iconComponent: o.l }),
              b.a.createElement("img", {
                className: v.ImageSmall,
                src:
                  l.c.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.definition.appid +
                  "/" +
                  e.definition.community_item_data.item_image_large,
              })
            );
          }),
          (n[12] = function (e) {
            return b.a.createElement(
              A,
              Object(h.a)({}, _(e), { iconComponent: o.k })
            );
          }),
          (n[3] = function (e) {
            return e.definition.community_item_data.animated
              ? b.a.createElement(N, Object(h.a)({}, e))
              : b.a.createElement(E, Object(h.a)({}, e));
          }),
          (n[13] = function (e) {
            return b.a.createElement(
              S,
              Object(h.a)({}, _(e), {
                iconComponent: I.r,
                videoProps: {
                  className: v.ImageMiniBackground,
                  poster:
                    l.c.MEDIA_CDN_COMMUNITY_URL +
                    "images/items/" +
                    e.definition.appid +
                    "/" +
                    e.definition.community_item_data.item_image_large,
                },
              }),
              b.a.createElement(
                b.a.Fragment,
                null,
                b.a.createElement("source", {
                  src:
                    l.c.MEDIA_CDN_COMMUNITY_URL +
                    "images/items/" +
                    e.definition.appid +
                    "/" +
                    (e.definition.community_item_data.item_movie_webm_small
                      ? e.definition.community_item_data.item_movie_webm_small
                      : e.definition.community_item_data.item_movie_webm),
                  type: "video/webm",
                }),
                b.a.createElement("source", {
                  src:
                    l.c.MEDIA_CDN_COMMUNITY_URL +
                    "images/items/" +
                    e.definition.appid +
                    "/" +
                    (e.definition.community_item_data.item_movie_mp4_small
                      ? e.definition.community_item_data.item_movie_mp4_small
                      : e.definition.community_item_data.item_movie_mp4),
                  type: "video/mp4",
                })
              )
            );
          }),
          (n[8] = function (e) {
            return b.a.createElement(
              A,
              Object(h.a)({}, _(e), {
                iconComponent: I.k,
                desc: Object(d.d)(8),
              })
            );
          }),
          (n[14] = function (c) {
            return b.a.createElement(
              O,
              Object(h.a)({}, _(c), { iconComponent: I.f }),
              function (e) {
                var t = c.definition,
                  n = t.appid,
                  r = t.community_item_data,
                  a = r.item_image_large,
                  i = r.item_image_small,
                  o = e ? i : a,
                  s =
                    l.c.MEDIA_CDN_COMMUNITY_URL + "images/items/" + n + "/" + o;
                return b.a.createElement("img", {
                  className: v.ImageFrames,
                  src: s,
                });
              }
            );
          }),
          (n[15] = function (c) {
            return b.a.createElement(
              O,
              Object(h.a)({}, _(c), { iconComponent: I.b }),
              function (e) {
                var t = c.definition,
                  n = t.appid,
                  r = t.community_item_data,
                  a = r.item_image_large,
                  i = r.item_image_small,
                  o = e ? i : a,
                  s =
                    l.c.MEDIA_CDN_COMMUNITY_URL + "images/items/" + n + "/" + o;
                return b.a.createElement("img", {
                  className: v.ImageAnimatedAvatar,
                  src: s,
                });
              }
            );
          }),
          n),
        x = Object(i.a)(function (e) {
          var t = e.className,
            n = Object(h.f)(e, ["className"]),
            r = D[e.definition.community_item_class],
            a = d.b.Get().BRewardOwnedByUser(e.definition),
            i = Object(w.a)(t, a && v.OwnedItem);
          return r
            ? b.a.createElement(
                s.a,
                { fallback: null },
                b.a.createElement(
                  r,
                  Object(h.a)({}, n, { className: i, onClick: e.onClick })
                )
              )
            : b.a.createElement(
                s.a,
                { fallback: null },
                b.a.createElement(
                  g,
                  Object(h.a)({}, n, { className: i, onClick: e.onClick })
                )
              );
        }),
        P = {};
      function L(e) {
        var n;
        return (
          0 == Object.keys(P).length &&
            ((n = r("5351")),
            (P = n.keys().reduce(function (e, t) {
              return (e[t] = n(t)), e;
            }, {}))),
          P["./icon_showcase_" + e + ".svg"]
        );
      }
      var B = function (e) {
        return b.a.createElement(
          j,
          Object(h.a)(
            {},
            ((n = (t = e).customization_type),
            (r = t.current_level),
            (a = t.point_cost),
            (i = Object(h.f)(t, [
              "customization_type",
              "current_level",
              "point_cost",
            ])),
            (o = L(n)),
            (s = Object(u.f)("#ProfileShowcases_Type_" + n)),
            (c = r >= d.b.Get().GetMaxProfileShowcaseUpgradeLevel()),
            (l = 1 < r),
            (m = Object(w.a)(c && v.OwnedItem, !c && l && v.OwnedItemProgress)),
            Object(h.a)(
              {
                cost: a,
                name: s,
                itemLevel: r,
                children: b.a.createElement("img", {
                  className: v.ImageProfileShowcase,
                  src: o,
                }),
                desc: Object(u.f)("#ProfileShowcases_Upgrade"),
                attributes: [],
                className: m,
                iconComponent: I.u,
              },
              i
            ))
          )
        );
        var t, n, r, a, i, o, s, c, l, m;
      };
      var R = function (e) {
          return b.a.createElement(
            j,
            Object(h.a)(
              {},
              ((n = (t = e).customization_type),
              (r = t.point_cost),
              (a = t.purchased_count),
              t.current_level,
              (i = Object(h.f)(t, [
                "customization_type",
                "point_cost",
                "purchased_count",
                "current_level",
              ])),
              (o = L(n)),
              (s = Object(u.f)("#ProfileShowcases_Type_" + n)),
              (c = a >= d.b.Get().GetMaxProfileShowcaseSlots()),
              (l = Object(w.a)(c && v.OwnedItem)),
              Object(h.a)(
                {
                  cost: r,
                  name: s,
                  children: b.a.createElement("img", {
                    className: v.ImageProfileShowcase,
                    src: o,
                  }),
                  desc: Object(u.f)("#ProfileShowcases_AdditionalSlot"),
                  attributes: [],
                  className: l,
                  iconComponent: I.u,
                },
                i
              ))
            )
          );
          var t, n, r, a, i, o, s, c, l;
        },
        T = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bLoadComplete: !1 }), e;
          }
          return (
            Object(h.d)(e, t),
            (e.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.src,
                r = t.title,
                a = this.state.bLoadComplete;
              return n
                ? b.a.createElement(
                    "div",
                    { className: v.AppIconContainer },
                    b.a.createElement("img", {
                      className: v.AppIcon,
                      src: n,
                      onLoad: function () {
                        return e.setState({ bLoadComplete: !0 });
                      },
                      style: a ? void 0 : { display: "none" },
                      title: r,
                      alt: r,
                    })
                  )
                : null;
            }),
            e
          );
        })(b.a.Component);
      function z() {
        return b.a.createElement(
          f,
          { className: v.ItemContainer },
          b.a.createElement(
            C.a,
            { className: Object(w.a)(v.Item, v.ItemSkeleton) },
            b.a.createElement(C.b, { className: v.Body }),
            b.a.createElement(
              C.c,
              { className: v.Footer },
              b.a.createElement(
                "div",
                { style: { flex: 1 } },
                b.a.createElement(
                  "div",
                  null,
                  b.a.createElement("div", { className: v.SkeletonName }),
                  b.a.createElement("div", { className: v.SkeletonSubtitle })
                )
              )
            )
          )
        );
      }
    },
    "f+AQ": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/halloween_2020_pointspage_bg.png?v=valveisgoodatcaching";
    },
    gxgZ: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/game_tiles.png?v=valveisgoodatcaching";
    },
    "hq+U": function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDExOSAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNjIuNDA4IDM0LjA4MTdDNjIuNDA4IDI5Ljc2ODUgNTguODkzNiAyNi4yNTQxIDU0LjU4MDQgMjYuMjU0MUgzMy4zMzQxQzMxLjczNjcgMjYuMjU0MSAzMC40NTg3IDI0LjY1NjYgMzAuNzc4MiAyMy4wNTkyQzMwLjc3ODIgMjMuMDU5MiAzNy4zMjc4IDcuMDg0NTIgMzcuMzI3OCA1LjAwNzgxQzM3LjMyNzggMi45MzExIDM2LjUyOTEgMS40OTMzOSAzNC45MzE2IDEuMTczODlDMzMuMzM0MSAwLjg1NDM5OSAyOS44MTk3IDAuMDU1NjY2OCAyOS44MTk3IDAuMDU1NjY2OEMyOC4yMjIzIC0wLjEwNDA4IDI3LjEwNCAwLjA1NTY2NjcgMjYuMzA1MyAwLjg1NDRMMi41MDMwNSAyNC42NTY2QzEuMDY1MzQgMjYuMDk0NCAwLjI2NjYwMiAyOC4wMTEzIDAuMjY2NjAyIDMwLjA4OFY3My44NTg2QzAuMjY2NjAyIDc1LjQ1NjEgMS43MDQzMiA3Ni44OTM4IDMuMzAxNzkgNzYuODkzOEg0My4wNzg3QzQ2LjI3MzYgNzYuODkzOCA0OC41MTAxIDc0LjY1NzMgNTAuMjY3MyA3Mi4xMDE0TDYwLjk3MDMgNTcuODgzOUM2MS42MDkzIDU3LjA4NTIgNjIuNTY3OCA1NS4xNjgyIDYyLjU2NzggNTMuNTcwOFYzNC40MDEyTDYyLjQwOCAzNC4wODE3WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8cGF0aCBkPSJNNTYuMTc3NyAxMDEuOTE4QzU2LjE3NzcgMTA2LjIzMSA1OS42OTIyIDEwOS43NDYgNjQuMDA1MyAxMDkuNzQ2SDg1LjI1MTZDODYuODQ5MSAxMDkuNzQ2IDg4LjEyNzEgMTExLjM0MyA4Ny44MDc2IDExMi45NDFDODcuODA3NiAxMTIuOTQxIDgxLjI1NzkgMTI4LjkxNSA4MS4yNTc5IDEzMC45OTJDODEuMjU3OSAxMzMuMDY5IDgyLjA1NjcgMTM0LjUwNyA4My42NTQxIDEzNC44MjZDODUuMjUxNiAxMzUuMTQ2IDg4Ljc2NiAxMzUuOTQ0IDg4Ljc2NiAxMzUuOTQ0QzkwLjM2MzUgMTM2LjEwNCA5MS40ODE3IDEzNS45NDQgOTIuMjgwNSAxMzUuMTQ2TDExNS45MjMgMTExLjM0M0MxMTcuMzYxIDEwOS45MDYgMTE4LjE1OSAxMDcuOTg5IDExOC4xNTkgMTA1LjkxMlY2Mi4xNDE0QzExOC4xNTkgNjAuNTQzOSAxMTYuNzIyIDU5LjEwNjIgMTE1LjEyNCA1OS4xMDYySDc1LjY2NjhDNzIuNDcxOSA1OS4xMDYyIDcwLjIzNTQgNjEuMzQyNyA2OC40NzgyIDYzLjg5ODZMNTcuNzc1MiA3OC4xMTZDNTcuMTM2MiA3OC45MTQ4IDU2LjE3NzcgODAuODMxNyA1Ni4xNzc3IDgyLjQyOTJWMTAxLjQzOVYxMDEuOTE4WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMxLjQxNzIiIHkxPSIwIiB4Mj0iMzEuNDE3MiIgeTI9Ijc2Ljg5MzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI4Ny4xNjg2IiB5MT0iNTkuMTA2MiIgeDI9Ijg3LjE2ODYiIHkyPSIxMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
    iKXF: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzEwMHB4JyB3aWR0aD0nMTAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjkgNjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY5IDY5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTU3LjE4ODk2LDUxLjgyNzY0SDExLjgxMjk5Yy0wLjU1MjczLDAtMSwwLjQ0NzI3LTEsMXY0Ljc2OTUzYzAsMC41NTI3MywwLjQ0NzI3LDEsMSwxaDQ1LjM3NTk4YzAuNTUyNzMsMCwxLTAuNDQ3MjcsMS0xICAgdi00Ljc2OTUzQzU4LjE4ODk2LDUyLjI3NDksNTcuNzQxNyw1MS44Mjc2NCw1Ny4xODg5Niw1MS44Mjc2NHogTTU2LjE4ODk2LDU2LjU5NzE3SDEyLjgxMjk5di0yLjc2OTUzaDQzLjM3NTk4VjU2LjU5NzE3eiI+PC9wYXRoPjxwYXRoIGQ9Ik02My4xODg5Niw0LjQwMTg2SDUuODEyOTljLTAuNTUyNzMsMC0xLDAuNDQ3MjctMSwxQzQuODEyOTcsNS42ODUyNSw0LjgxMDM1LDU2Ljk2MTYyLDQuODEwMDYsNjIuNTk4MTRIMi40NTk0NyAgIGMtMC41NTI3MywwLTEsMC40NDcyNy0xLDFzMC40NDcyNywxLDEsMWMyNC4zNDMyNywwLDMzLjUzMzUyLDAsNjQuMDgxMDUsMGMwLjU1MjczLDAsMS0wLjQ0NzI3LDEtMXMtMC40NDcyNy0xLTEtMWgtMi4zNTA1OSAgIGMtMC4wMDAxLTUuODgyNDktMC4wMDA4OC01MS4zMTUwMi0wLjAwMDk4LTU3LjE5NjI5QzY0LjE4ODk2LDQuODQ5MTIsNjMuNzQxNyw0LjQwMTg2LDYzLjE4ODk2LDQuNDAxODZ6IE02LjgxMjk5LDYuNDAxODYgICBoNTUuMzc1OTh2MzkuNDI1NzhINDMuNTg0NDd2LTUuODUzNTJoLTcuNTU2MTVsMi40NDc3NS0yLjQ4MDQ3YzAuMTg0NTctMC4xODY1MiwwLjI4ODA5LTAuNDM5NDUsMC4yODgwOS0wLjcwMjE1di0xNy44NzVoMi4wNjE1MiAgIGMwLjU1MjczLDAsMS0wLjQ0NzI3LDEtMXMtMC40NDcyNy0xLTEtMWMtMC40NTYyNiwwLTMuNjg2MzYsMC0zLjUwNzgxLDB2LTMuNzc1MzloMS4zMTkzNGMwLjU1MjczLDAsMS0wLjQ0NzI3LDEtMXMtMC40NDcyNy0xLTEtMSAgIGMtMC4yMzI3OSwwLTMuNjg1NjksMC0zLjU4MzAyLDB2LTAuOTE2OTljMC0wLjU1MjczLTAuNDQ3MjYtMS0xLTFjLTAuNTUyNzMsMC0xLDAuNDQ3MjctMSwxdjAuOTE2OTkgICBjLTAuMTMyNjQsMC0zLjcwODEyLDAtMy41ODM5OCwwYy0wLjU1MjczLDAtMSwwLjQ0NzI3LTEsMXMwLjQ0NzI3LDEsMSwxaDEuMzE5MzR2My43NzUzOWMtMC4zNTA5OCwwLTMuNjEwNSwwLTMuNTA3ODEsMCAgIGMtMC41NTI3MywwLTEsMC40NDcyNy0xLDFzMC40NDcyNywxLDEsMWgyLjA2MTUydjE3Ljg3NWMwLDAuMjQxMjEsMC4wODY5MSwwLjQ3MzYzLDAuMjQ1MTIsMC42NTUyN2wyLjE5NDc2LDIuNTI3MzRoLTYuMzY0NjkgICB2NS44NTM1Mkg2LjgxMjk5VjYuNDAxODZ6IE0zMi43ODk1NSwxMy4xNDExMWgyLjUyODMydjMuNzc1MzloLTIuNTI4MzJWMTMuMTQxMTF6IE0zMS4zNDMyNiwxOC45MTY1ICAgYzAuMTE0MjIsMCwxLjgxMzYyLDAsMS43MTA5MywwdjE0LjY0MTZjMCwwLjU1MjczLDAuNDQ3MjcsMSwxLDFjMC41NTI3NCwwLDEtMC40NDcyNywxLTFWMTguOTE2NWMwLjEwNTc1LDAsMS44MTE2NSwwLDEuNzA5OTcsMCAgIHYxNy40NjQ4NGwtMi45MDAzOSwyLjkzOTQ1bC0yLjUyMDUxLTIuOTAzMzJWMTguOTE2NXogTTQxLjU4NDQ3LDQxLjk3NDEydjMuODMzOThIMjcuNDE4NDZ2LTMuODMzOThINDEuNTg0NDd6IE02LjgxMDA2LDYyLjU5ODE0ICAgVjQ3LjgyNzY0aDU1LjM3OTg4djE0Ljc3MDUxSDYuODEwMDZ6Ij48L3BhdGg+PC9nPjwvc3ZnPg==";
    },
    jUCX: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var r = n("mrSG"),
        a = n("2vnA"),
        i = n("Gp1o"),
        o = n("qD+2"),
        s = n("TLQK"),
        c = n("lkRc"),
        l = n("8H1D");
      function m(e) {
        var t = "offline";
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
      var u = (function () {
        function e(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = l.b),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_mapRichPresence = a.C.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_steamid = e);
        }
        return (
          (e.prototype.Reset = function () {
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
          }),
          (e.prototype.GetAccountID = function () {
            return this.m_steamid.GetAccountID();
          }),
          Object.defineProperty(e.prototype, "is_online", {
            get: function () {
              return 0 != this.m_ePersonaState && 7 != this.m_ePersonaState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_ingame", {
            get: function () {
              return (
                this.is_online &&
                (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_watchingbroadcast", {
            get: function () {
              return !!this.m_broadcastAccountId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_in_nonsteam_game", {
            get: function () {
              return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_in_joinable_game", {
            get: function () {
              return (
                this.has_joinable_game_flag ||
                this.is_in_valid_lobby ||
                this.has_server_ip
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "has_joinable_game_flag", {
            get: function () {
              return 0 != (2 & this.m_unPersonaStateFlags);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "connect_string", {
            get: function () {
              return this.m_mapRichPresence.get("connect");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_in_valid_lobby", {
            get: function () {
              return this.m_game_lobby_id && "0" != this.m_game_lobby_id;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "has_server_ip", {
            get: function () {
              return 0 != this.m_unGameServerIP;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_awayOrSnooze", {
            get: function () {
              return 3 == this.m_ePersonaState || 4 == this.m_ePersonaState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.HasStateFlag = function (e) {
            return 0 != (this.m_unPersonaStateFlags & e);
          }),
          Object.defineProperty(e.prototype, "last_seen_online", {
            get: function () {
              return this.m_rtLastSeenOnline;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.ClearStateOnDisconnect = function () {
            0 != this.m_ePersonaState && this.Reset();
          }),
          Object.defineProperty(e.prototype, "is_golden", {
            get: function () {
              return this.HasStateFlag(4);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.GetCurrentGameName = function () {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
              ? o.a.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
          }),
          (e.prototype.GetCurrentGameIconURL = function () {
            return this.m_unGamePlayedAppID
              ? o.a.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }),
          (e.prototype.GetCurrentGameLogoURL = function () {
            return this.m_unGamePlayedAppID
              ? o.a.GetAppInfo(this.m_unGamePlayedAppID).logo_url
              : "";
          }),
          (e.prototype.GetBroadcastGameLogoURL = function () {
            return this.m_broadcastAppId
              ? o.a.GetAppInfo(this.m_broadcastAppId).logo_url
              : "";
          }),
          (e.prototype.BIsAppInfoReady = function () {
            return (
              !this.m_unGamePlayedAppID ||
              o.a.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
            );
          }),
          (e.prototype.HasCurrentGameRichPresence = function () {
            return this.m_mapRichPresence.has("steam_display");
          }),
          (e.prototype.GetCurrentGameRichPresence = function () {
            if (this.HasCurrentGameRichPresence()) {
              var e = o.a.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (e) {
                var t = this.m_mapRichPresence.get("steam_display");
                return e.Localize(t, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(8))
              return Object(s.f)("#PersonaStateRemotePlayTogether");
            return "";
          }),
          (e.prototype.GetOfflineStatusUpdateRate = function () {
            if (0 == this.last_seen_online) return 3e4;
            var e = 1e3,
              t = o.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return (e *= 86400 < t ? 3600 : 7200 < t ? 60 : 15);
          }),
          (e.prototype.GetOfflineStatusTime = function () {
            if (0 == this.last_seen_online)
              return Object(s.f)("#PersonaStateOffline");
            var e = this.GetOfflineStatusUpdateRate();
            (!c.c.IN_MOBILE || e <= 60) && Object(i.c)(e);
            var t = o.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return t < 60
              ? Object(s.f)("#PersonaStateLastSeen_JustNow")
              : Object(s.f)("#PersonaStateLastSeen", Object(s.q)(t));
          }),
          (e.prototype.GetLocalizedOnlineStatus = function () {
            switch (this.m_ePersonaState) {
              case 0:
              case 7:
                return this.GetOfflineStatusTime();
              case 1:
                return Object(s.f)("#PersonaStateOnline");
              case 2:
                return Object(s.f)("#PersonaStateBusy");
              case 3:
                return Object(s.f)("#PersonaStateAway");
              case 4:
                return Object(s.f)("#PersonaStateSnooze");
              case 5:
                return Object(s.f)("#PersonaStateLookingToTrade");
              case 6:
                return Object(s.f)("#PersonaStateLookingToPlay");
              default:
                return "";
            }
          }),
          Object.defineProperty(e.prototype, "has_public_party_beacon", {
            get: function () {
              return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "player_group", {
            get: function () {
              return this.m_mapRichPresence.has("steam_player_group")
                ? this.m_mapRichPresence.get("steam_player_group")
                : "";
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "player_group_size", {
            get: function () {
              return this.m_mapRichPresence.has("steam_player_group_size")
                ? Number.parseInt(
                    this.m_mapRichPresence.get("steam_player_group_size")
                  )
                : 0;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "online_state", {
            get: function () {
              return this.is_online
                ? this.is_ingame
                  ? "in-game"
                  : this.m_broadcastAccountId
                  ? "watchingbroadcast"
                  : "online"
                : "offline";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.BHasAvatarSet = function () {
            return this.m_strAvatarHash != l.b;
          }),
          Object.defineProperty(e.prototype, "avatar_url", {
            get: function () {
              return Object(l.a)(this.m_strAvatarHash);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "avatar_url_medium", {
            get: function () {
              return Object(l.a)(this.m_strAvatarHash, "medium");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "avatar_url_full", {
            get: function () {
              return Object(l.a)(this.m_strAvatarHash, "full");
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.SortStatusComparator = function (e, t, n) {
            if (t.has_public_party_beacon) {
              if (!n.has_public_party_beacon) return -1;
            } else {
              if (n.has_public_party_beacon) return 1;
              if (t.is_ingame) {
                if (!n.is_ingame) return -1;
                if (!e) return 0;
                if (t.is_awayOrSnooze) {
                  if (!n.is_awayOrSnooze) return 1;
                } else if (n.is_awayOrSnooze) return -1;
              } else if (n.is_ingame) return 1;
            }
            if (t.is_online) {
              if (!n.is_online) return -1;
            } else if (n.is_online) return 1;
            if (e)
              if (t.is_awayOrSnooze) {
                if (!n.is_awayOrSnooze) return 1;
              } else if (n.is_awayOrSnooze) return -1;
            return 0;
          }),
          Object(r.c)([a.C], e.prototype, "m_bInitialized", void 0),
          Object(r.c)([a.C], e.prototype, "m_ePersonaState", void 0),
          Object(r.c)([a.C], e.prototype, "m_unGamePlayedAppID", void 0),
          Object(r.c)([a.C], e.prototype, "m_gameid", void 0),
          Object(r.c)([a.C], e.prototype, "m_unPersonaStateFlags", void 0),
          Object(r.c)([a.C], e.prototype, "m_strPlayerName", void 0),
          Object(r.c)([a.C], e.prototype, "m_strAvatarHash", void 0),
          Object(r.c)([a.C], e.prototype, "m_rtLastSeenOnline", void 0),
          Object(r.c)([a.C], e.prototype, "m_strGameExtraInfo", void 0),
          Object(r.c)([a.C], e.prototype, "m_unGameServerIP", void 0),
          Object(r.c)([a.C], e.prototype, "m_unGameServerPort", void 0),
          Object(r.c)([a.C], e.prototype, "m_game_lobby_id", void 0),
          Object(r.c)([a.C], e.prototype, "m_bPlayerNamePending", void 0),
          Object(r.c)([a.C], e.prototype, "m_broadcastId", void 0),
          Object(r.c)([a.C], e.prototype, "m_broadcastAccountId", void 0),
          Object(r.c)([a.C], e.prototype, "m_broadcastAppId", void 0),
          Object(r.c)([a.C], e.prototype, "m_broadcastViewerCount", void 0),
          Object(r.c)([a.C], e.prototype, "m_strBroadcastTitle", void 0),
          e
        );
      })();
    },
    kJAG: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/Sunglasses.gif?v=valveisgoodatcaching";
    },
    ksWZ: function (e, t, n) {
      e.exports = {
        statusAndName: "personanameandstatus_statusAndName_4ZTzG",
        threeLines: "personanameandstatus_threeLines_1oYSX",
        blocked: "personanameandstatus_blocked_VTxPk",
        richPresenceLabel: "personanameandstatus_richPresenceLabel_2Ri00",
        playerName: "personanameandstatus_playerName_nOdcT",
        playerNickname: "personanameandstatus_playerNickname_2saJT",
        playerNicknameBracket:
          "personanameandstatus_playerNicknameBracket_3XEmW",
        richPresenceContainer:
          "personanameandstatus_richPresenceContainer_3sxE7",
        NoMask: "personanameandstatus_NoMask_2dAj6",
        twoLine: "personanameandstatus_twoLine_1BbOe",
        DNDContainer: "personanameandstatus_DNDContainer_3IswZ",
        partyBeaconJoin: "personanameandstatus_partyBeaconJoin_3BnDs",
        gameName: "personanameandstatus_gameName_1cB0q",
        hidePersona: "personanameandstatus_hidePersona_3ZJkO",
        compactView: "personanameandstatus_compactView_3bbRZ",
        noContextMenu: "personanameandstatus_noContextMenu_1JE5G",
        gameIsPrivateIcon: "personanameandstatus_gameIsPrivateIcon_2gBKQ",
        PendingPersona: "personanameandstatus_PendingPersona_2sxXn",
      };
    },
    li8c: function (e, t, n) {
      e.exports = {
        Shell: "styles_Shell_3eCX1",
        ShellScrollParent: "styles_ShellScrollParent_1oCLn",
        ShellHeader: "styles_ShellHeader_yV5Uz",
        ShellHeaderBrandLink: "styles_ShellHeaderBrandLink_1-c2a",
        PointsContainer: "styles_PointsContainer_3BmcH",
        AppFilterContainer: "styles_AppFilterContainer_3FDv4",
        HeaderVerticalDivider: "styles_HeaderVerticalDivider_1TtYk",
        AppFilterLabel: "styles_AppFilterLabel_3EY-R",
        AppFilterIconContainer: "styles_AppFilterIconContainer_2SOq8",
        AppFilterIcon: "styles_AppFilterIcon_3McBd",
        FilterInUse: "styles_FilterInUse_yokUs",
        RewardsPointsIcon: "styles_RewardsPointsIcon_OeByM",
        YourBalanceLabel: "styles_YourBalanceLabel_1BWEY",
        RewardsPointsCount: "styles_RewardsPointsCount_FDOzD",
        ShellHeaderBrandName: "styles_ShellHeaderBrandName_GrkDn",
        SvgOverrideColor: "styles_SvgOverrideColor_mgi6k",
        ItemHoverZIndex: "styles_ItemHoverZIndex_2UcoO",
        ActionButton: "styles_ActionButton_2ZQed",
        Icon: "styles_Icon_1qMU6",
        PageHomeTop: "styles_PageHomeTop_nmZGb",
        PageHomeTitleContainer: "styles_PageHomeTitleContainer_1gjQL",
        PageHomeTopTitle: "styles_PageHomeTopTitle_3DDgg",
        PageHomeTopSubTitle: "styles_PageHomeTopSubTitle_rSOht",
        PageHomeBanner: "styles_PageHomeBanner_2BSzm",
        PageHomeBannerIcons: "styles_PageHomeBannerIcons_3vfTy",
        PageHomeBannerChicken: "styles_PageHomeBannerChicken_3WLxH",
        PageHomeBannerBored: "styles_PageHomeBannerBored_15Y6g",
        PageHomeBannerHugs: "styles_PageHomeBannerHugs_32Y-3",
        PageHomeBannerHappy: "styles_PageHomeBannerHappy_2oI2k",
        PageHomeBannerBoombox: "styles_PageHomeBannerBoombox_2hiX2",
        PageHomeBannerDance: "styles_PageHomeBannerDance_3o5Od",
        PageHomeBannerFloor: "styles_PageHomeBannerFloor_37JZ_",
        HomeRewardsPointsIcon: "styles_HomeRewardsPointsIcon_2MaAJ",
        PageItemsContainer: "styles_PageItemsContainer_NiGcL",
        PageItemsContainerChildren: "styles_PageItemsContainerChildren_1vtnS",
        RewardItemContainer: "styles_RewardItemContainer_T0l91",
        SecondaryNavigationContainer:
          "styles_SecondaryNavigationContainer_1viLB",
        SecondaryNavigation: "styles_SecondaryNavigation_3Q9UO",
        RewardsPointsContainer: "styles_RewardsPointsContainer_3bgli",
        RewardsPointstext: "styles_RewardsPointstext_1aK9N",
        SecondaryBtnContainer: "styles_SecondaryBtnContainer_2HCyt",
        SecondaryBtnIcon: "styles_SecondaryBtnIcon_3jGTO",
        SecondaryBtnText: "styles_SecondaryBtnText_3_onz",
        Selected: "styles_Selected_15VJs",
        Logo: "styles_Logo_b6EpW",
        ShopHero: "styles_ShopHero_1gWcS",
        PageTitle: "styles_PageTitle_2slUu",
        PageSubtitle: "styles_PageSubtitle_FRVvE",
        CouponsSection: "styles_CouponsSection_2clpW",
        CouponsContainer: "styles_CouponsContainer_1FgnE",
        CouponsFooter: "styles_CouponsFooter_18cUz",
        InfoText: "styles_InfoText_2OCm6",
        BlueButton: "styles_BlueButton_9H0RW",
        BlueButtonSmall: "styles_BlueButtonSmall_3U87j",
        PageHomeHowItWorks: "styles_PageHomeHowItWorks_2bWxo",
      };
    },
    mpVu: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/contributor_badge.png?v=valveisgoodatcaching";
    },
    mts6: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODMiIGhlaWdodD0iMTMwIiB2aWV3Qm94PSIwIDAgODMgMTMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTc4LjkyMjUgNy42NjMxNEg0Ny4zODI2VjUuNDczNjdDNDcuMzgyNiAyLjQ2MzE1IDQ0Ljc2NjMgMCA0MS41Njg3IDBDMzguMzcxMSAwIDM1Ljc1NDkgMi40NjMxNSAzNS43NTQ5IDUuNDczNjdWNy42NjMxNEg0LjIxNTAxQzEuODg5NDkgNy42NjMxNCAwIDkuNDQyMDkgMCAxMS42MzE2Vjc0LjcxNTdDMCA3Ni45MDUxIDEuODg5NDkgNzguNjg0MSA0LjIxNTAxIDc4LjY4NDFIMTkuNzY3TDQuNjUxMDUgMTIyLjc0N0MzLjYzMzYzIDEyNS42MjEgNS4yMzI0MyAxMjguNzY4IDguNDMwMDMgMTI5LjcyNkMxMS42Mjc2IDEzMC42ODQgMTQuODI1MiAxMjkuMDQyIDE1Ljg0MjYgMTI2LjE2OEwyMi45NjQ2IDEwNS42NDJINjAuNDYzNkw2Ny41ODU1IDEyNi4xNjhDNjguMzEyMyAxMjguNDk1IDcwLjYzNzggMTMwIDczLjEwODcgMTMwQzczLjY5IDEzMCA3NC4yNzE0IDEyOS44NjMgNzQuODUyOCAxMjkuNzI2Qzc3LjkwNTEgMTI4Ljc2OCA3OS42NDkyIDEyNS42MjEgNzguNjMxOCAxMjIuNzQ3TDYzLjIyNTIgNzguODIwOUg3OC43NzcxQzgxLjEwMjYgNzguODIwOSA4Mi45OTIxIDc3LjA0MiA4Mi45OTIxIDc0Ljg1MjVWMTEuNjMxNkM4My4xMzc1IDkuNDQyMDkgODEuMjQ4IDcuNjYzMTQgNzguOTIyNSA3LjY2MzE0Wk00OS44NTM0IDIyLjU3ODlDNTMuMTk2NCAyMi41Nzg5IDU1Ljk1NzkgMjUuMTc4OSA1NS45NTc5IDI4LjMyNjNDNTUuOTU3OSAzMS40NzM2IDUzLjE5NjQgMzQuMDczNiA0OS44NTM0IDM0LjA3MzZDNDYuNTEwNSAzNC4wNzM2IDQzLjc0ODkgMzEuNDczNiA0My43NDg5IDI4LjMyNjNDNDMuNzQ4OSAyNS4xNzg5IDQ2LjUxMDUgMjIuNTc4OSA0OS44NTM0IDIyLjU3ODlaTTI2LjU5ODIgOTQuNjk0NkwzMi4xMjEzIDc4LjY4NDFINTAuODcwOEw1Ni4zOTQgOTQuNjk0NkgyNi41OTgyWk02NS40MDU0IDYxLjE2ODNDNjQuODI0IDYxLjk4OTQgNjMuOTUxOSA2Mi41MzY3IDYyLjkzNDUgNjIuNTM2N0gyMC4zNDgzQzE5LjMzMDkgNjIuNTM2NyAxOC4zMTM1IDYxLjk4OTQgMTcuODc3NSA2MS4xNjgzQzE3LjI5NjEgNjAuMjEwNCAxNy40NDE0IDU5LjI1MjUgMTguMDIyOCA1OC40MzE1TDMyLjU1NzMgMzguMzE1N0MzMy41NzQ4IDM2LjgxMDUgMzYuMTkxIDM2LjgxMDUgMzcuMjA4NCAzOC4zMTU3TDQ1LjM0NzcgNDkuNTM2OEw0OS44NTM0IDQzLjUxNTdDNTAuODcwOCA0Mi4wMTA0IDUzLjQ4NzEgNDIuMDEwNCA1NC41MDQ1IDQzLjUxNTdMNjUuMjYgNTguNDMxNUM2NS44NDE0IDU5LjI1MjUgNjUuODQxNCA2MC4yMTA0IDY1LjQwNTQgNjEuMTY4M1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI0MS41IiB5MT0iMCIgeDI9IjQxLjUiIHkyPSIxMzAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
    n4wG: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "b", function () {
          return v;
        });
      var s = n("mrSG"),
        r = n("q1tI"),
        c = n.n(r),
        a = n("TyAF"),
        l = n("TLQK"),
        i = n("+9fn"),
        m = n("cJ7F"),
        u = n("Wilf"),
        o = n("StxQ"),
        d = n("exH9"),
        p = n("nXE5"),
        f = n("cOvF"),
        _ = n("prdU"),
        g = n("lkRc"),
        h = n("+j4l"),
        b = n("RV7a"),
        y = function (e, t) {
          return g.c.MEDIA_CDN_COMMUNITY_URL + "/images/items/" + e + "/" + t;
        },
        v = Object(a.a)(function () {
          var r = _.b.Get().GetSeasonalBadgeDefinition(),
            a = _.b.Get().GetUserSeasonalBadgeLevel(),
            e = r
              ? r.community_item_data.badge_data.map(function (e) {
                  var t = e.level,
                    n = e.image;
                  return {
                    level: t,
                    imgSrc: y(r.appid, n),
                    owned: t <= a,
                    cost: _.b.Get().GetCostToLevelSeasonalBadge(t),
                  };
                })
              : [];
          return c.a.createElement(
            p.e,
            null,
            c.a.createElement(
              b.a,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              c.a.createElement(
                i.b,
                {
                  title: Object(l.f)(
                    "#SeasonalBadge_Title",
                    Object(l.f)("#SeasonName_Summer")
                  ),
                  subtitle: Object(l.f)(
                    "#SeasonalBadge_Description",
                    Object(l.f)("#SeasonName_Summer")
                  ),
                },
                c.a.createElement(
                  w,
                  null,
                  e.map(function (t) {
                    return c.a.createElement(
                      C,
                      Object(s.a)({ key: t.level }, t, {
                        onClick: function (e) {
                          return Object(h.c)(e, r, t.level);
                        },
                      })
                    );
                  })
                )
              )
            )
          );
        }),
        w = function (e) {
          var t = e.children;
          return c.a.createElement(
            b.c,
            { className: u.BadgeGrid, verticalSpacing: "large" },
            t
          );
        },
        C = function (e) {
          var t = e.level,
            n = e.owned,
            r = e.cost,
            a = e.imgSrc,
            i = e.className,
            o = Object(s.f)(e, [
              "level",
              "owned",
              "cost",
              "imgSrc",
              "className",
            ]);
          return c.a.createElement(
            m.a,
            Object(s.a)({ className: Object(d.a)(u.Badge, i) }, o),
            c.a.createElement(
              m.b,
              null,
              c.a.createElement("img", {
                src: a,
                title: Object(l.f)("#BadgeLevel", t),
                className: u.BadgeImage,
              })
            ),
            c.a.createElement(
              m.c,
              { className: u.Footer },
              c.a.createElement(j, { owned: n, level: t }),
              c.a.createElement(
                "div",
                { className: u.Hint },
                n
                  ? c.a.createElement(I, null)
                  : c.a.createElement(M, { cost: r })
              )
            )
          );
        },
        I = function () {
          return c.a.createElement(f.h, { className: u.OwnedSticker });
        },
        M = function (e) {
          var t = e.cost;
          return c.a.createElement(o.a, { amount: t, size: 0.75 });
        },
        j = function (e) {
          var t = e.level,
            n = e.owned;
          return c.a.createElement(
            "div",
            { className: Object(d.a)(u.LevelMarker, n && u.Owned) },
            c.a.createElement("div", { className: u.Inner }, t)
          );
        };
    },
    nFQ1: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/winter_pagebg.png?v=valveisgoodatcaching";
    },
    nXE5: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return y;
      }),
        n.d(t, "d", function () {
          return v;
        }),
        n.d(t, "e", function () {
          return I;
        }),
        n.d(t, "b", function () {
          return M;
        }),
        n.d(t, "a", function () {
          return E;
        });
      function c(e) {
        var t = e.children,
          n = e.src,
          r = e.className;
        return l.a.createElement(
          l.a.Fragment,
          null,
          t,
          l.a.createElement("div", {
            className: Object(f.a)(m.ParallaxBackground, r),
            style: { backgroundImage: "url(" + n + ")" },
          })
        );
      }
      function r(e) {
        var t = e.children;
        return l.a.createElement(c, { src: g, className: m.HomeBackground }, t);
      }
      var a = n("mrSG"),
        i = n("q1tI"),
        l = n.n(i),
        o = n("TyAF"),
        m = n("5pqL"),
        s = n("RV7a"),
        u = n("Ty5D"),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidUpdate = function (e) {
              this.props.location.pathname !== e.location.pathname &&
                this.UpdateScroll();
            }),
            (t.prototype.componentDidMount = function () {
              this.UpdateScroll();
            }),
            (t.prototype.UpdateScroll = function () {
              function e() {
                return a && a.scrollTo(0, 0);
              }
              var t,
                n,
                r = this.props,
                a = r.scrollElement,
                i = r.location.hash;
              i
                ? ((t = i.slice(1)),
                  (n = document.getElementById(t)) ? n.scrollIntoView() : e())
                : e();
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(l.a.Component),
        p = Object(u.i)(d),
        f = n("exH9"),
        _ = n("cCsu"),
        g = n("TJrv"),
        h = n("f+AQ"),
        b = n("IzPI"),
        y = function (e) {
          var t = e.className,
            n = Object(a.f)(e, ["className"]),
            r = l.a.useRef();
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "div",
              Object(a.a)(
                { ref: r, className: Object(f.a)(m.StandardRoot, t) },
                n
              )
            ),
            l.a.createElement(p, { scrollElement: r.current })
          );
        },
        v = function (e) {
          var t = e.className,
            n = Object(a.f)(e, ["className"]);
          return l.a.createElement(
            "div",
            Object(a.a)({ className: Object(f.a)(m.StandardBackground, t) }, n)
          );
        },
        w = function (e) {
          var t = e.children;
          return l.a.createElement(y, { className: m.ParallaxRoot }, t);
        },
        C = function (e) {
          var t = e.children;
          return l.a.createElement(
            s.a,
            {
              paddingX: ["xxsmall", "small", "xxlarge"],
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "xlarge",
              className: m.StandardLayout,
            },
            l.a.createElement(
              s.e,
              { itemClassName: m.PageItem, className: m.ItemContainer },
              t
            )
          );
        },
        I = function (e) {
          var t = e.background,
            n = e.children,
            r = t ? t : _;
          return l.a.createElement(
            w,
            null,
            l.a.createElement(c, { src: r }, l.a.createElement(C, null, n))
          );
        },
        M = function (e) {
          var t = e.children;
          return l.a.createElement(
            w,
            null,
            l.a.createElement(r, null, l.a.createElement(C, null, t))
          );
        },
        j = Object(o.a)(function (e) {
          var r,
            t,
            n,
            a,
            i = e.children,
            o = e.appid,
            s =
              ((r = o),
              (t = l.a.useState("")),
              (n = t[0]),
              (a = t[1]),
              l.a.useEffect(
                function () {
                  var e = !0,
                    t = Object(b.b)(r);
                  a(t);
                  var n = new Image();
                  return (
                    (n.onerror = function () {
                      return e && a(Object(b.a)(r));
                    }),
                    (n.src = t),
                    function () {
                      return (e = !1);
                    }
                  );
                },
                [r]
              ),
              n);
          return l.a.createElement(
            c,
            { src: s, className: m.ParallaxAppBackground },
            i
          );
        }),
        N = { 1461450: h };
      function E(e) {
        return e.appid in N
          ? l.a.createElement(S, Object(a.a)({}, e))
          : l.a.createElement(O, Object(a.a)({}, e));
      }
      function S(e) {
        var t = e.children,
          n = e.appid,
          r = N[n];
        return l.a.createElement(
          y,
          null,
          l.a.createElement(
            "div",
            {
              style: { backgroundImage: 'url("' + r + '")' },
              className: m.CustomAppBackground,
            },
            l.a.createElement(C, null, t)
          )
        );
      }
      function O(e) {
        var t = e.children,
          n = e.appid;
        return l.a.createElement(
          w,
          null,
          l.a.createElement(j, { appid: n }, l.a.createElement(C, null, t))
        );
      }
    },
    nu2M: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/hot_take_anim000.png?v=valveisgoodatcaching";
    },
    oydz: function (e, t, n) {
      e.exports = {
        Shell: "redeempointsmodal_Shell_2RbaB",
        ShellScrollParent: "redeempointsmodal_ShellScrollParent_1rhSZ",
        ShellHeader: "redeempointsmodal_ShellHeader_2I8Eu",
        ShellHeaderBrandLink: "redeempointsmodal_ShellHeaderBrandLink_3ugLA",
        PointsContainer: "redeempointsmodal_PointsContainer_2XpLS",
        AppFilterContainer: "redeempointsmodal_AppFilterContainer_xEgIP",
        HeaderVerticalDivider: "redeempointsmodal_HeaderVerticalDivider_tFryt",
        AppFilterLabel: "redeempointsmodal_AppFilterLabel_2kgDw",
        AppFilterIconContainer:
          "redeempointsmodal_AppFilterIconContainer_20SKW",
        AppFilterIcon: "redeempointsmodal_AppFilterIcon_1ZU44",
        FilterInUse: "redeempointsmodal_FilterInUse_3qtJ8",
        RewardsPointsIcon: "redeempointsmodal_RewardsPointsIcon_33e-L",
        YourBalanceLabel: "redeempointsmodal_YourBalanceLabel_3f6ba",
        RewardsPointsCount: "redeempointsmodal_RewardsPointsCount_35Qs6",
        ShellHeaderBrandName: "redeempointsmodal_ShellHeaderBrandName_37D8V",
        SvgOverrideColor: "redeempointsmodal_SvgOverrideColor_1AdMa",
        ItemHoverZIndex: "redeempointsmodal_ItemHoverZIndex_3f-OJ",
        ActionButton: "redeempointsmodal_ActionButton_PquU_",
        Icon: "redeempointsmodal_Icon_1Eo48",
        ModalContainer: "redeempointsmodal_ModalContainer_Y6hHM",
        ErrorContainer: "redeempointsmodal_ErrorContainer_2ArAm",
        RedeemModalEnter: "redeempointsmodal_RedeemModalEnter_IMX1E",
        RedeemModalEnterActive:
          "redeempointsmodal_RedeemModalEnterActive_1cDZb",
        RedeemModalExit: "redeempointsmodal_RedeemModalExit_3vWI-",
        RedeemModalExitActive: "redeempointsmodal_RedeemModalExitActive_3tayC",
        Header: "redeempointsmodal_Header_1btwT",
        SubHeader: "redeempointsmodal_SubHeader_2Jbfa",
        SubHeaderAppContainer: "redeempointsmodal_SubHeaderAppContainer_2MH_i",
        AppIcon: "redeempointsmodal_AppIcon_NOcYg",
        Balance: "redeempointsmodal_Balance_3v4FX",
        CurrentPoints: "redeempointsmodal_CurrentPoints_ML1Ck",
        EquippedDesc: "redeempointsmodal_EquippedDesc_e2luC",
        HeaderContainer: "redeempointsmodal_HeaderContainer_1HzHv",
        ItemPreviewContainer: "redeempointsmodal_ItemPreviewContainer_11o78",
        GreenCheck: "redeempointsmodal_GreenCheck_HzZjR",
        PurchasedCheck: "redeempointsmodal_PurchasedCheck_1clLM",
        ItemButtonsContainer: "redeempointsmodal_ItemButtonsContainer_drMXI",
        GreenButton: "redeempointsmodal_GreenButton_3Hkg7",
        BlueButton: "redeempointsmodal_BlueButton_Whm84",
        GrayButton: "redeempointsmodal_GrayButton_whAxg",
        ItemDescription: "redeempointsmodal_ItemDescription_sglF_",
        Bold: "redeempointsmodal_Bold_3-Dc-",
        Opacity: "redeempointsmodal_Opacity_2eif5",
        NeedAppOwnership: "redeempointsmodal_NeedAppOwnership_35ATU",
        Small: "redeempointsmodal_Small_9eRgY",
        CurrentlyEquippedAvatarAndFrame:
          "redeempointsmodal_CurrentlyEquippedAvatarAndFrame_1n654",
        CurrentlyEquippedAvatarAndFrameDesc:
          "redeempointsmodal_CurrentlyEquippedAvatarAndFrameDesc_34QPs",
        ChatPreviewContainer: "redeempointsmodal_ChatPreviewContainer_1Jkzx",
        PreviewChat: "redeempointsmodal_PreviewChat_2ZTyD",
        ChatPickerContainer: "redeempointsmodal_ChatPickerContainer_PtQg3",
        IconPreview: "redeempointsmodal_IconPreview_22a9y",
        PreviewEffectContainer:
          "redeempointsmodal_PreviewEffectContainer_1yPRh",
        ChatEffectPreviewIcon: "redeempointsmodal_ChatEffectPreviewIcon_2d4WT",
        StickerPreviewContainer:
          "redeempointsmodal_StickerPreviewContainer_1NvFZ",
        LargePreview: "redeempointsmodal_LargePreview_1SE6R",
        EmoticonPreviewContainer:
          "redeempointsmodal_EmoticonPreviewContainer_2fq5I",
        LargePreviewContainer: "redeempointsmodal_LargePreviewContainer_saRQK",
        BackgroundPreviewContainer:
          "redeempointsmodal_BackgroundPreviewContainer_2SDKf",
        PreviewBackgroundContainer:
          "redeempointsmodal_PreviewBackgroundContainer_YXQsb",
        PreviewBackground: "redeempointsmodal_PreviewBackground_Yytmx",
        VideoPreview: "redeempointsmodal_VideoPreview_3_O3d",
        MiniProfilePreviewContainer:
          "redeempointsmodal_MiniProfilePreviewContainer_1DUfr",
        ProfileContainer: "redeempointsmodal_ProfileContainer_2pw-b",
        ProfileImage: "redeempointsmodal_ProfileImage_ej4e9",
        CurrentAvatar: "redeempointsmodal_CurrentAvatar_38WZt",
        ImageBlur: "redeempointsmodal_ImageBlur_35cYP",
        AvatarPreviewContainer:
          "redeempointsmodal_AvatarPreviewContainer_2UIGV",
        Animated: "redeempointsmodal_Animated_28cJO",
        Frame: "redeempointsmodal_Frame_2SOYA",
        ItemPreview: "redeempointsmodal_ItemPreview_36UqA",
        TopAvatar: "redeempointsmodal_TopAvatar_114d2",
        BottomAvatar: "redeempointsmodal_BottomAvatar_3dVJj",
        PreviewCurrentAvatar: "redeempointsmodal_PreviewCurrentAvatar_2Jsv-",
        BadgeItemContainer: "redeempointsmodal_BadgeItemContainer_3DCmO",
        BadgePreviewContainer: "redeempointsmodal_BadgePreviewContainer_3fRyE",
        BadgeColumn: "redeempointsmodal_BadgeColumn_3QCcu",
        ArrowColumn: "redeempointsmodal_ArrowColumn_36dAw",
        BadgeTitle: "redeempointsmodal_BadgeTitle_UOYTX",
        BlueArrow: "redeempointsmodal_BlueArrow_1bTkv",
        BadgeDetailsContainer: "redeempointsmodal_BadgeDetailsContainer_19zsa",
        BadgeImgContainer: "redeempointsmodal_BadgeImgContainer_6w1yJ",
        BadgeImage: "redeempointsmodal_BadgeImage_118li",
        BadgeLine: "redeempointsmodal_BadgeLine_3zwjK",
        CurrentLevel: "redeempointsmodal_CurrentLevel_14mHp",
        NextLevel: "redeempointsmodal_NextLevel_O91m4",
        BadgeLevelContainer: "redeempointsmodal_BadgeLevelContainer_35l-K",
        BadgeLevelText: "redeempointsmodal_BadgeLevelText_1rAQu",
        GoldenProfileContainer:
          "redeempointsmodal_GoldenProfileContainer_3amqs",
        GoldenProfilePreviewContainer:
          "redeempointsmodal_GoldenProfilePreviewContainer_17ShO",
        AvatarContainer: "redeempointsmodal_AvatarContainer_31Oas",
        GoldenFrame: "redeempointsmodal_GoldenFrame_1_ANO",
        ProfileShowcaseContainer:
          "redeempointsmodal_ProfileShowcaseContainer_3REq7",
        ProfileShowcasePreviewContainer:
          "redeempointsmodal_ProfileShowcasePreviewContainer_22jxu",
        ProfileShowcaseIcon: "redeempointsmodal_ProfileShowcaseIcon_KPkBe",
        LoadedPreview: "redeempointsmodal_LoadedPreview_2JkH5",
        PreviewShowcasePreviewFrameContainer:
          "redeempointsmodal_PreviewShowcasePreviewFrameContainer_sOtdb",
        PreviewShowcasePreviewFrame:
          "redeempointsmodal_PreviewShowcasePreviewFrame_39qcS",
        WarningTextContainer: "redeempointsmodal_WarningTextContainer_1AVIh",
        TimeWarning: "redeempointsmodal_TimeWarning_3TOAC",
        SaleRewardImg: "redeempointsmodal_SaleRewardImg_Ur-Ad",
        RedeemThrobber: "redeempointsmodal_RedeemThrobber_3weKx",
      };
    },
    prdU: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return me;
      }),
        n.d(t, "f", function () {
          return ue;
        }),
        n.d(t, "b", function () {
          return de;
        }),
        n.d(t, "e", function () {
          return pe;
        }),
        n.d(t, "a", function () {
          return be;
        }),
        n.d(t, "c", function () {
          return je;
        });
      var j = n("mrSG"),
        r = n("2lpH"),
        a = n.n(r),
        N = n("2vnA"),
        E = n("TLQK"),
        i = n("vDqi"),
        o = n.n(i),
        S = n("lkRc"),
        O = n("kyHq"),
        s = n("bDQf"),
        c = n("bxiW"),
        l = n("bxBv"),
        p = n("OU48"),
        m = n("hRO2"),
        u = n("OS8t"),
        d = m.Message;
      var f,
        _,
        g,
        h,
        b = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.communityitemid || u.a(r.M()),
              d.initialize(t, e, 0, -1, [5], null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      communityitemid: {
                        n: 1,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                      item_type: {
                        n: 2,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      appid: { n: 3, br: u.d.readUint32, bw: u.h.writeUint32 },
                      owner: { n: 4, br: u.d.readUint32, bw: u.h.writeUint32 },
                      attributes: { n: 5, c: y, r: !0, q: !0 },
                      used: { n: 6, br: u.d.readBool, bw: u.h.writeBool },
                      owner_origin: {
                        n: 7,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      amount: {
                        n: 8,
                        br: u.d.readInt64String,
                        bw: u.h.writeInt64String,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CQuest_CommunityItem";
            }),
            r
          );
        })(d),
        y = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.attributeid || u.a(r.M()),
              d.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      attributeid: {
                        n: 1,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      value: {
                        n: 2,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CQuest_CommunityItem_Attribute";
            }),
            r
          );
        })(d),
        v = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.filter_appids || u.a(r.M()),
              d.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      filter_appids: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: u.d.readUint32,
                        bw: u.h.writeRepeatedUint32,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CQuest_GetCommunityInventory_Request";
            }),
            r
          );
        })(d),
        w = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.items || u.a(r.M()),
              d.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { items: { n: 1, c: b, r: !0, q: !0 } },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CQuest_GetCommunityInventory_Response";
            }),
            r
          );
        })(d),
        C = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.item_definitions || u.a(r.M()),
              d.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { item_definitions: { n: 1, c: I, r: !0, q: !0 } },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CQuest_GetCommunityItemDefinitions_Response";
            }),
            r
          );
        })(d),
        I = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.item_type || u.a(r.M()),
              d.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      item_type: {
                        n: 1,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      appid: { n: 2, br: u.d.readUint32, bw: u.h.writeUint32 },
                      item_name: {
                        n: 3,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_title: {
                        n: 4,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_description: {
                        n: 5,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_image_small: {
                        n: 6,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_image_large: {
                        n: 7,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_key_values: {
                        n: 8,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_series: {
                        n: 9,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      item_class: {
                        n: 10,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      editor_accountid: {
                        n: 11,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      active: { n: 12, br: u.d.readBool, bw: u.h.writeBool },
                      item_image_composed: {
                        n: 13,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_image_composed_foil: {
                        n: 14,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      deleted: { n: 15, br: u.d.readBool, bw: u.h.writeBool },
                      item_last_changed: {
                        n: 16,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      broadcast_channel_id: {
                        n: 17,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                      item_movie_webm: {
                        n: 18,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_movie_mp4: {
                        n: 19,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_movie_webm_small: {
                        n: 20,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_movie_mp4_small: {
                        n: 21,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
            }),
            r
          );
        })(d),
        A = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.appid || u.a(r.M()),
              d.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      appid: { n: 1, br: u.d.readUint32, bw: u.h.writeUint32 },
                      communityitemid: {
                        n: 2,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                      activate: { n: 3, br: u.d.readBool, bw: u.h.writeBool },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CQuest_ActivateProfileModifierItem_Request";
            }),
            r
          );
        })(d),
        M = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return d.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(j.d)(r, n),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (r.fromObject = function (e) {
              return new r();
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {}),
            (r.prototype.getClassName = function () {
              return "CQuest_ActivateProfileModifierItem_Response";
            }),
            r
          );
        })(d),
        D = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.item_name || u.a(r.M()),
              d.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      item_name: {
                        n: 1,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_title: {
                        n: 2,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_description: {
                        n: 3,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_image_small: {
                        n: 4,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_image_large: {
                        n: 5,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      animated: { n: 6, br: u.d.readBool, bw: u.h.writeBool },
                      communityitemid: {
                        n: 7,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CSummerSale2020_ClaimItem_Response";
            }),
            r
          );
        })(d),
        x = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.can_claim || u.a(r.M()),
              d.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      can_claim: { n: 1, br: u.d.readBool, bw: u.h.writeBool },
                      item_name: {
                        n: 2,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_title: {
                        n: 3,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_description: {
                        n: 4,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_image_small: {
                        n: 5,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      item_image_large: {
                        n: 6,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      animated: { n: 7, br: u.d.readBool, bw: u.h.writeBool },
                      communityitemid: {
                        n: 8,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CSummerSale2020_CanClaimItem_Response";
            }),
            r
          );
        })(d);
      ((_ = f = f || {}).GetCommunityInventory = function (e, t) {
        return e.SendMsg("Quest.GetCommunityInventory#1", t, w, {
          bConstMethod: !0,
          ePrivilege: 1,
        });
      }),
        (_.GetCommunityItemDefinitions = function (e, t) {
          return e.SendMsg("Quest.GetCommunityItemDefinitions#1", t, C, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 4,
          });
        }),
        (_.ActivateProfileModifierItem = function (e, t) {
          return e.SendMsg("Quest.ActivateProfileModifierItem#1", t, M, {
            ePrivilege: 1,
          });
        }),
        ((h = g = g || {}).ClaimItem = function (e, t) {
          return e.SendMsg("SummerSale2020.ClaimItem#1", t, D, {
            ePrivilege: 1,
          });
        }),
        (h.CanClaimItem = function (e, t) {
          return e.SendMsg("SummerSale2020.CanClaimItem#1", t, x, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        });
      var P = n("oFam"),
        L = m.Message;
      var B,
        R,
        T,
        z,
        k = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.country_code || u.a(r.M()),
              L.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      country_code: {
                        n: 1,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
            }),
            r
          );
        })(L),
        G = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.promotions || u.a(r.M()),
              L.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { promotions: { n: 1, c: F, r: !0, q: !0 } },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
            }),
            r
          );
        })(L),
        F = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.promotionid || u.a(r.M()),
              L.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      promotionid: {
                        n: 1,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      promotion_description: {
                        n: 2,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      minimum_cart_amount: {
                        n: 3,
                        br: u.d.readInt64String,
                        bw: u.h.writeInt64String,
                      },
                      minimum_cart_amount_for_display: {
                        n: 4,
                        br: u.d.readInt64String,
                        bw: u.h.writeInt64String,
                      },
                      discount_amount: {
                        n: 5,
                        br: u.d.readInt64String,
                        bw: u.h.writeInt64String,
                      },
                      currency_code: {
                        n: 6,
                        br: u.d.readInt32,
                        bw: u.h.writeInt32,
                      },
                      available_use_count: {
                        n: 7,
                        br: u.d.readInt32,
                        bw: u.h.writeInt32,
                      },
                      promotional_discount_type: {
                        n: 8,
                        br: u.d.readInt32,
                        bw: u.h.writeInt32,
                      },
                      loyalty_reward_id: {
                        n: 9,
                        br: u.d.readInt32,
                        bw: u.h.writeInt32,
                      },
                      localized_name_token: {
                        n: 10,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      max_use_count: {
                        n: 11,
                        br: u.d.readInt32,
                        bw: u.h.writeInt32,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
            }),
            r
          );
        })(L),
        U = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.pwid || u.a(r.M()),
              L.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      pwid: { n: 1, br: u.d.readUint32, bw: u.h.writeUint32 },
                      identity_verification: {
                        n: 2,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      performed_age_verification: {
                        n: 3,
                        br: u.d.readBool,
                        bw: u.h.writeBool,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CUserAccount_GetAccountLinkStatus_Response";
            }),
            r
          );
        })(L),
        H = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return L.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(j.d)(r, n),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (r.fromObject = function (e) {
              return new r();
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {}),
            (r.prototype.getClassName = function () {
              return "CUserAccount_CancelLicenseForApp_Response";
            }),
            r
          );
        })(L),
        W = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.invite_token || u.a(r.M()),
              L.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      invite_token: {
                        n: 1,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      invite_limit: {
                        n: 2,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                      invite_duration: {
                        n: 3,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                      time_created: {
                        n: 4,
                        br: u.d.readFixed32,
                        bw: u.h.writeFixed32,
                      },
                      valid: { n: 5, br: u.d.readBool, bw: u.h.writeBool },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CUserAccount_CreateFriendInviteToken_Response";
            }),
            r
          );
        })(L),
        Z = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.tokens || u.a(r.M()),
              L.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { tokens: { n: 1, c: W, r: !0, q: !0 } },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CUserAccount_GetFriendInviteTokens_Response";
            }),
            r
          );
        })(L),
        Q = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.valid || u.a(r.M()),
              L.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      valid: { n: 1, br: u.d.readBool, bw: u.h.writeBool },
                      steamid: {
                        n: 2,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                      invite_duration: {
                        n: 3,
                        br: u.d.readUint64String,
                        bw: u.h.writeUint64String,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CUserAccount_ViewFriendInviteToken_Response";
            }),
            r
          );
        })(L),
        Y = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return L.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(j.d)(r, n),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (r.fromObject = function (e) {
              return new r();
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {}),
            (r.prototype.getClassName = function () {
              return "CUserAccount_RedeemFriendInviteToken_Response";
            }),
            r
          );
        })(L),
        V = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return L.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(j.d)(r, n),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (r.fromObject = function (e) {
              return new r();
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {}),
            (r.prototype.getClassName = function () {
              return "CUserAccount_RevokeFriendInviteToken_Response";
            }),
            r
          );
        })(L),
        q = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return L.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(j.d)(r, n),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (r.fromObject = function (e) {
              return new r();
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {}),
            (r.prototype.getClassName = function () {
              return "CUserAccount_RegisterCompatTool_Response";
            }),
            r
          );
        })(L),
        J = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.external_accounts || u.a(r.M()),
              L.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { external_accounts: { n: 1, c: X, r: !0, q: !0 } },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAccountLinking_GetLinkedAccountInfo_Response";
            }),
            r
          );
        })(L),
        X = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.external_type || u.a(r.M()),
              L.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      external_type: {
                        n: 1,
                        br: u.d.readEnum,
                        bw: u.h.writeEnum,
                      },
                      external_id: {
                        n: 2,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      external_user_name: {
                        n: 3,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      external_url: {
                        n: 4,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      access_token: {
                        n: 5,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      access_token_secret: {
                        n: 6,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      is_valid: { n: 7, br: u.d.readBool, bw: u.h.writeBool },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response";
            }),
            r
          );
        })(L),
        K = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.steamid || u.a(r.M()),
              L.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      steamid: {
                        n: 1,
                        br: u.d.readFixed64String,
                        bw: u.h.writeFixed64String,
                      },
                      client_token: {
                        n: 2,
                        br: u.d.readBytes,
                        bw: u.h.writeBytes,
                      },
                      expiry: { n: 3, br: u.d.readUint32, bw: u.h.writeUint32 },
                      deviceid: {
                        n: 4,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CEmbeddedClient_Token";
            }),
            r
          );
        })(L),
        $ = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.result || u.a(r.M()),
              L.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(j.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      result: { n: 1, br: u.d.readUint32, bw: u.h.writeUint32 },
                      token: { n: 2, c: K },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = u.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return u.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return u.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new m.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return u.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new m.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              u.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CEmbeddedClient_AuthorizeDevice_Response";
            }),
            r
          );
        })(L);
      ((R = B = B || {}).GetAvailableValveDiscountPromotions = function (e, t) {
        return e.SendMsg(
          "UserAccount.GetAvailableValveDiscountPromotions#1",
          t,
          G,
          { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
        );
      }),
        (R.GetAccountLinkStatus = function (e, t) {
          return e.SendMsg("UserAccount.GetAccountLinkStatus#1", t, U, {
            ePrivilege: 1,
          });
        }),
        (R.CancelLicenseForApp = function (e, t) {
          return e.SendMsg("UserAccount.CancelLicenseForApp#1", t, H, {
            ePrivilege: 1,
          });
        }),
        (R.CreateFriendInviteToken = function (e, t) {
          return e.SendMsg("UserAccount.CreateFriendInviteToken#1", t, W, {
            ePrivilege: 3,
          });
        }),
        (R.GetFriendInviteTokens = function (e, t) {
          return e.SendMsg("UserAccount.GetFriendInviteTokens#1", t, Z, {
            ePrivilege: 1,
          });
        }),
        (R.ViewFriendInviteToken = function (e, t) {
          return e.SendMsg("UserAccount.ViewFriendInviteToken#1", t, Q, {
            ePrivilege: 1,
          });
        }),
        (R.RedeemFriendInviteToken = function (e, t) {
          return e.SendMsg("UserAccount.RedeemFriendInviteToken#1", t, Y, {
            ePrivilege: 1,
          });
        }),
        (R.RevokeFriendInviteToken = function (e, t) {
          return e.SendMsg("UserAccount.RevokeFriendInviteToken#1", t, V, {
            ePrivilege: 1,
          });
        }),
        (R.RegisterCompatTool = function (e, t) {
          return e.SendMsg("UserAccount.RegisterCompatTool#1", t, q, {
            ePrivilege: 1,
          });
        }),
        ((T || (T = {})).GetLinkedAccountInfo = function (e, t) {
          return e.SendMsg("AccountLinking.GetLinkedAccountInfo#1", t, J, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
        ((z || (z = {})).AuthorizeCurrentDevice = function (e, t) {
          return e.SendMsg("EmbeddedClient.AuthorizeCurrentDevice#1", t, $, {
            ePrivilege: 1,
          });
        });
      var ee = n("BFsE"),
        te = n("jUCX"),
        ne = n("kLLr"),
        re = n("RhBb"),
        ae = n("1ErW"),
        ie = n("bEwK"),
        oe = n("iKXF"),
        se = n("1fPh"),
        ce = n("r64O"),
        le = n("qD+2");
      function me(e, t) {
        void 0 === t && (t = !1);
        function n(e) {
          return Object(E.f)(t ? e + "_Plural" : e);
        }
        switch (e) {
          case 4:
            return n("#CommunityItemClass_Emoticon");
          case 11:
            return n("#CommunityItemClass_Sticker");
          case 13:
            return n("#CommunityItemClass_MiniProfileBackground");
          case 3:
            return n("#CommunityItemClass_Background");
          case 12:
            return n("#CommunityItemClass_ChatEffect");
          case 14:
            return n("#CommunityItemClass_AvatarFrame");
          case 15:
            return n("#CommunityItemClass_AnimatedAvatar");
          case 1:
            return n("#CommunityItemClass_Badge");
          case 8:
            return n("#CommunityItemClass_ProfileModifier");
        }
        return "Unknown ECommunityItemClass";
      }
      var ue = "home",
        de = (function () {
          function M() {
            var t = this;
            (this.m_lPointsAvailable = new a.a(0, 0)),
              (this.m_bLoadedCouponPromosForUser = !1),
              (this.m_mapCouponPromos = new Map()),
              (this.m_nAppIDFiltersInUseCount = 0),
              (this.m_mapAppIDFilters = new Map()),
              (this.m_strAppFilterText = ""),
              (this.m_bLoadedCouponDefinitions = !1),
              (this.m_mapCouponDefinitons = new Map()),
              (this.m_mapLoyaltyRewardDefs = new Map()),
              (this.m_bLoadedFullInventory = !1),
              (this.m_mapOwnedCommunityItems = new Map()),
              (this.m_inflightInventoryRequests = {}),
              (this.m_bLoadedActiveBonuses = !1),
              (this.m_rgActiveBonuses = N.C.array([], { deep: !1 })),
              (this.m_mapAppRewards = new Map()),
              (this.m_inflightRewardItemRequests = {}),
              (this.m_goldenProfileConfigs = []),
              (this.m_bLoadedRecentlyPlayed = !1),
              (this.m_rgRecentlyPlayed = []),
              (this.m_bSortedGamesWithRewards = !1),
              (this.m_rgSortedAppsWithRewards = N.C.array([], { deep: !1 })),
              (this.m_bLoadedOwnedGames = !1),
              (this.m_rgOwnedGames = N.C.array([], { deep: !1 })),
              (this.m_bLoadedEligibleApps = !1),
              (this.m_rgEligibleApps = []),
              (this.m_mapEligibleApps = new Map()),
              (this.m_equippedItems = {}),
              (this.m_bLoadedAwardCost = !1),
              (this.m_unAwardPointsTransferred = 0),
              (this.m_bIsSaleActive = !1),
              (this.m_HeroImageFallbackLoader = new Me(
                function (e) {
                  return fetch(
                    S.c.STORE_BASE_URL + "points/heroimage?appid=" + e
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      return e.img_url;
                    });
                },
                function (e) {
                  return e.toString();
                }
              )),
              (this.m_batchedRewardItemLoader = new Ce(
                function (e) {
                  return p.o.BatchedQueryRewardItems(t.m_anonymousTransport, e);
                },
                function (e) {
                  var t = l.a.Init(p.b);
                  return t.Body().set_requests(e), t;
                },
                function (e) {
                  return 1 == e.GetEResult()
                    ? e
                        .Body()
                        .responses()
                        .map(function (e) {
                          return e.toObject();
                        })
                    : (console.error(
                        "Error when calling LoyaltyRewardsService.BatchedQueryRewardItems: EResult=" +
                          e.GetEResult()
                      ),
                      []);
                }
              )),
              (this.m_batchedCommunityInventoryLoader = new Ce(
                function (e) {
                  return f.GetCommunityInventory(t.m_transport, e);
                },
                function (e) {
                  var t = l.a.Init(v);
                  return t.Body().set_filter_appids(e), t;
                },
                function (e, t) {
                  if (1 != e.GetEResult())
                    return (
                      console.error(
                        "Error when calling QuestService.GetCommunityInventory: EResult=" +
                          e.GetEResult()
                      ),
                      t.map(function () {
                        return [];
                      })
                    );
                  var n = e.Body().toObject().items,
                    r = {};
                  return (
                    n.forEach(function (e) {
                      r[e.appid] || (r[e.appid] = []), r[e.appid].push(e);
                    }),
                    t.map(function (e) {
                      return r[e] || [];
                    })
                  );
                }
              )),
              (this.m_mapPages = N.C.map({}, { deep: !1 })),
              (this.m_mapClusters = N.C.map({}, { deep: !1 }));
          }
          return (
            (M.prototype.Init = function (e, t) {
              var n;
              (this.m_transport = e.GetServiceTransport()),
                (this.m_anonymousTransport = e.GetAnonymousServiceTransport()),
                (this.m_config = t),
                this.BIsLoggedIn() &&
                  ((n = new ne.a(S.i.steamid)),
                  (this.m_persona = new te.a(n)),
                  this.RetrievePersonaState()),
                t.eligible_apps
                  ? ((this.m_bLoadedEligibleApps = !0),
                    (this.m_rgEligibleApps = t.eligible_apps.apps))
                  : this.LoadEligibleApps(),
                t.profile_customizations_config &&
                  (this.m_rgProfileCustomizationsConfig =
                    t.profile_customizations_config),
                t.last_played &&
                  ((this.m_bLoadedRecentlyPlayed = !0),
                  (this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
                    t.last_played.games
                  ))),
                t.owned_games &&
                  ((this.m_bLoadedOwnedGames = !0),
                  (this.m_rgOwnedGames = t.owned_games.games.map(function (e) {
                    return e.appid;
                  }))),
                t.profile_items_equipped
                  ? (this.m_equippedItems = t.profile_items_equipped)
                  : this.RefreshEquippedProfileItems(),
                t.profile_customizations_purchased &&
                  ((this.m_rgPurchasedCustomizations =
                    t.profile_customizations_purchased
                      .purchased_customizations || []),
                  (this.m_rgUpgradedCustomizations =
                    t.profile_customizations_purchased
                      .upgraded_customizations || [])),
                t.summary
                  ? (this.m_lPointsAvailable = a.a.fromString(
                      t.summary.summary.points
                    ))
                  : this.GetLoyaltyRewardsSummary(),
                t.golden_profiles &&
                  (this.m_goldenProfileConfigs = t.golden_profiles || []),
                t.can_claim_sale_reward &&
                  je.Get().InitFreeItemReward(t.can_claim_sale_reward),
                t.is_sale_active && (this.m_bIsSaleActive = t.is_sale_active),
                t.free_item_header &&
                  (this.m_strFreeItemHeader = t.free_item_header),
                this.HydrateCustomPages();
            }),
            (M.Get = function () {
              return (
                this.s_RewardsStore || (this.s_RewardsStore = new M()),
                this.s_RewardsStore
              );
            }),
            (M.prototype.GetFreeItemHeaderSource = function () {
              return this.m_strFreeItemHeader;
            }),
            (M.prototype.GetServiceTransport = function () {
              return this.m_transport;
            }),
            (M.prototype.GetConfig = function () {
              return this.m_config;
            }),
            (M.prototype.GetCurrentSeasonalAppID = function () {
              return 1492660;
            }),
            (M.prototype.GetLoyaltyRewardsSummary = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = l.a.Init(p.g)).SetBodyFields({
                            steamid: S.i.steamid,
                          }),
                          [4, p.o.GetSummary(this.m_transport, t)])
                        : [2];
                    case 1:
                      return (
                        1 == (n = e.sent()).GetEResult()
                          ? (this.m_lPointsAvailable = a.a.fromString(
                              n.Body().summary().points()
                            ))
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetSummary: EResult=" +
                                n.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (M.prototype.GetCommunityAwardPointsTransferred = function () {
              return (
                this.m_bLoadedAwardCost || this.LoadAwardCost(),
                this.m_unAwardPointsTransferred
              );
            }),
            (M.prototype.LoadAwardCost = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t,
                  n,
                  r = this;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (this.m_bLoadedAwardCost = !0),
                        (t = l.a.Init(p.e)),
                        [4, p.o.GetReactionConfig(this.m_transport, t)]
                      );
                    case 1:
                      return (
                        1 == (n = e.sent()).GetEResult()
                          ? ((this.m_unAwardPointsTransferred = 0),
                            n
                              .Body()
                              .reactions()
                              .forEach(function (e) {
                                0 == r.m_unAwardPointsTransferred
                                  ? (r.m_unAwardPointsTransferred = e.points_transferred())
                                  : (r.m_unAwardPointsTransferred = Math.min(
                                      r.m_unAwardPointsTransferred,
                                      e.points_transferred()
                                    ));
                              }))
                          : (console.error(
                              "Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=" +
                                n.GetEResult()
                            ),
                            (this.m_bLoadedAwardCost = !1)),
                        [2]
                      );
                  }
                });
              });
            }),
            (M.prototype.ShowLoginDialog = function (e) {
              var t,
                n = window.location.href;
              void 0 !== e &&
                (-1 !== (t = n.indexOf("/reward/"))
                  ? (n = n.slice(0, t))
                  : n.endsWith("/") && (n = n.slice(0, n.length - 1)),
                (n += "/reward/" + e)),
                Object(ee.b)(n);
            }),
            (M.prototype.BHasAutumnSaleStarted = function () {
              var e = Date.now() / 1e3;
              return "dev" == S.c.WEB_UNIVERSE || 1606327200 < e;
            }),
            (M.prototype.BHasAutumnSaleEnded = function () {
              return 1606845600 < Date.now() / 1e3;
            }),
            (M.prototype.BIsSaleActive = function () {
              return this.m_bIsSaleActive;
            }),
            (M.prototype.BIsLoggedIn = function () {
              return S.i.logged_in;
            }),
            (M.prototype.GetPointsAvailable = function () {
              return this.m_lPointsAvailable;
            }),
            (M.prototype.GetIsUsingAppIDFilters = function () {
              return 0 != this.m_nAppIDFiltersInUseCount;
            }),
            (M.prototype.SetIsUsingAppIDFilters = function (e) {
              this.m_nAppIDFiltersInUseCount += e ? 1 : -1;
            }),
            (M.prototype.GetAppIDFilters = function () {
              return this.m_mapAppIDFilters;
            }),
            (M.prototype.AddAppIDFilter = function (e) {
              this.m_mapAppIDFilters.set(e, !0);
            }),
            (M.prototype.RemoveAppIDFilter = function (e) {
              this.m_mapAppIDFilters.delete(e);
            }),
            (M.prototype.GetCurrentAppFilterText = function () {
              return this.m_strAppFilterText;
            }),
            (M.prototype.SetCurrentAppFilterText = function (e) {
              this.m_strAppFilterText = e;
            }),
            (M.prototype.getLoyaltyRewardDefMap = function () {
              return this.m_mapLoyaltyRewardDefs;
            }),
            (M.prototype.GetVirtualItemRewardDefinitions = function (e, t, n) {
              return this.GetLoyaltyRewardDefinitions(e, t, n, [1]);
            }),
            (M.prototype.EResultToErrorMessage = function (e) {
              switch (e) {
                case 15:
                  return Object(E.f)("#Redeem_Error_AccessDenied");
                case 24:
                  return Object(E.f)("#Redeem_Error_InsufficientPrivileges");
                case 107:
                  return Object(E.f)("#Redeem_Error_InsufficientFunds");
                case 29:
                  return Object(E.f)("#Redeem_Error_DuplicateRequest");
                case 26:
                  return Object(E.f)("#Redeem_Error_Revoked");
              }
              return "";
            }),
            (M.prototype.GetLoyaltyRewardDefinitions = function (e, t, n, r) {
              var o = this,
                a = { rewards: [], cTotalMatching: 0, cMaxToReturn: 0 };
              if (
                (e.appid && !e.appid.length) ||
                (e.itemclass && !e.itemclass.length)
              )
                return a;
              var i = {
                  appid: e.appid || [],
                  itemclass: e.itemclass || [],
                  grouping: e.grouping,
                  maxToReturn: e.maxToReturn,
                  queryFilter: e.queryFilter || [],
                  categoryTag: e.categoryTag || [],
                },
                s = Object(j.g)(i.appid).sort(),
                c = ge(i.grouping),
                l =
                  c.sort +
                  "__" +
                  (c.sort_descending ? 1 : 0) +
                  "__" +
                  s.join("_") +
                  "__" +
                  i.itemclass.join("_") +
                  "__" +
                  (r || []).join("_") +
                  "__" +
                  (i.queryFilter || []).join("_") +
                  "__" +
                  (i.categoryTag || []).join("_");
              i.maxToReturn &&
                t + n > i.maxToReturn &&
                (n = Math.max(0, i.maxToReturn - t));
              var m,
                u,
                d = n,
                p = void 0;
              this.m_mapAppRewards.has(l) &&
                ((d =
                  t > (m = this.m_mapAppRewards.get(l)).rgRewardIds.length - 1
                    ? n + t - m.rgRewardIds.length
                    : Math.max(n - (m.rgRewardIds.length - t), 0)),
                m.bFullyLoaded && (d = 0),
                (p = m.strCursor)),
                this.m_mapAppRewards.has(l) ||
                  this.m_mapAppRewards.set(l, { rgRewardIds: [] }),
                d &&
                  !this.m_inflightRewardItemRequests[l] &&
                  ((this.m_inflightRewardItemRequests[l] = !0),
                  (u = []),
                  this.LoadLoyaltyRewardDefinitions(i, d, p, r).then(function (
                    i
                  ) {
                    Object(N.G)(function () {
                      var e = i.definitions,
                        t = i.next_cursor,
                        n = i.total_count,
                        r = e.filter(function (e) {
                          return (
                            !(function (e) {
                              var t = e.community_item_data;
                              if (!t) return !0;
                              if (1 === e.type) {
                                var n = !1;
                                switch (e.community_item_class) {
                                  case 11:
                                  case 14:
                                  case 15:
                                    n = !t.item_image_small;
                                    break;
                                  case 4:
                                    n = !t.item_image_large;
                                    break;
                                  case 3:
                                    n = t.animated
                                      ? !(
                                          t.item_image_large ||
                                          t.item_movie_mp4 ||
                                          t.item_movie_mp4_small ||
                                          t.item_movie_webm ||
                                          t.item_movie_webm_small
                                        )
                                      : !t.item_image_large;
                                    break;
                                  case 13:
                                    n = !(
                                      t.item_image_large ||
                                      t.item_movie_mp4 ||
                                      t.item_movie_mp4_small ||
                                      t.item_movie_webm ||
                                      t.item_movie_webm_small
                                    );
                                }
                                if (n)
                                  return (
                                    console.error(
                                      "Missing expected assets for reward " +
                                        e.defid
                                    ),
                                    !0
                                  );
                              }
                              return !1;
                            })(e) || 4 === e.type
                          );
                        }),
                        a = o.m_mapAppRewards.get(l);
                      delete o.m_inflightRewardItemRequests[l],
                        (a.strCursor = t),
                        (a.cTotal = n),
                        r.forEach(function (e) {
                          var t = e.defid;
                          a.rgRewardIds.push(t);
                        }),
                        (a.bFullyLoaded =
                          0 === e.length || a.rgRewardIds.length === a.cTotal),
                        r.forEach(function (e) {
                          o.m_mapLoyaltyRewardDefs.set(e.defid, e),
                            u.push(e.appid);
                        }),
                        le.a.EnsureAppInfoForAppIDs(u);
                    });
                  }));
              var f = this.m_mapAppRewards.get(l);
              return (
                (a.rewards = f.rgRewardIds.slice(t, t + n).map(function (e) {
                  return o.m_mapLoyaltyRewardDefs.get(e);
                })),
                (a.cTotalMatching = f.cTotal || 0),
                (a.cMaxToReturn = i.maxToReturn || 0),
                (a.bLoadingMore = this.m_inflightRewardItemRequests[l]),
                a
              );
            }),
            (M.prototype.LoadLoyaltyRewardDefinitions = function (l, m, u, d) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r, a, i, o, s, c;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = l.appid),
                        (n = l.grouping),
                        (r = l.itemclass),
                        (a = l.queryFilter),
                        (i = l.categoryTag),
                        (o = ge(n)),
                        (s = new p.h()),
                        t.forEach(function (e) {
                          return s.add_appids(e);
                        }),
                        s.set_language(S.c.LANGUAGE),
                        s.set_count(m),
                        s.set_sort(o.sort),
                        s.set_sort_descending(o.sort_descending),
                        s.set_community_item_classes(r),
                        s.set_filters(a),
                        s.set_filter_match_any_category_tags(i),
                        d && s.set_reward_types(d),
                        u && s.set_cursor(u),
                        [4, this.m_batchedRewardItemLoader.Load(s)]
                      );
                    case 1:
                      return 1 == (c = e.sent()).eresult
                        ? [2, c.response]
                        : (console.error(
                            "Error when loading reward definitions: EResult=" +
                              c.eresult
                          ),
                          [
                            2,
                            {
                              definitions: [],
                              total_count: 0,
                              next_cursor: void 0,
                              count: 0,
                            },
                          ]);
                  }
                });
              });
            }),
            (M.prototype.GetCostToLevelSeasonalBadge = function (e) {
              var t = this.GetSeasonalBadgeDefinition();
              if (!t) return 0;
              var n = this.GetUserSeasonalBadgeLevel();
              return Math.max(parseInt(t.point_cost) * (e - n), 0);
            }),
            (M.prototype.GetUserSeasonalBadgeLevel = function () {
              var e = this.GetSeasonalBadgeDefinition();
              if (!e) return 0;
              if (!this.BRewardOwnedByUser(e)) return 0;
              var t = this.GetOwnedCommunityItem(e);
              if (!t)
                return (
                  console.error("Could not find owned seasonal badge item"), 0
                );
              var n = t.attributes.find(function (e) {
                return 2 === e.attributeid;
              });
              if (!n)
                return (
                  console.error(
                    "Could not find seasonal badge level attribute"
                  ),
                  0
                );
              var r = parseInt(n.value);
              return isNaN(r)
                ? (console.error("Seasonal badge level attribute is NaN"), 0)
                : r;
            }),
            (M.prototype.GetGoldenProfileConfigForApp = function (t) {
              return (
                this.m_goldenProfileConfigs.find(function (e) {
                  return e.appid === t;
                }) || null
              );
            }),
            (M.prototype.GetSeasonalBadgeDefinition = function () {
              var t = this;
              return (
                void 0 === this.m_seasonalBadgeDefinition &&
                  this.LoadSeasonalBadgeDefinition().then(function (e) {
                    return (t.m_seasonalBadgeDefinition = e);
                  }),
                this.m_seasonalBadgeDefinition
              );
            }),
            (M.prototype.LoadSeasonalBadgeDefinition = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new p.h()).set_appids([
                          this.GetCurrentSeasonalAppID(),
                        ]),
                        t.set_community_item_classes([1]),
                        t.set_count(1),
                        t.set_language(S.c.LANGUAGE),
                        [4, this.m_batchedRewardItemLoader.Load(t)]
                      );
                    case 1:
                      return 1 == (n = e.sent()).eresult
                        ? [2, n.response.definitions[0] || null]
                        : (console.error(
                            "Error when loading badge definition: EResult=" +
                              n.eresult
                          ),
                          [2, null]);
                  }
                });
              });
            }),
            (M.prototype.GetGoldenProfileDefinition = function () {
              var t = this;
              return (
                void 0 === this.m_goldenProfileDefinition &&
                  this.LoadGoldenProfileDefinition().then(function (e) {
                    return (t.m_goldenProfileDefinition = e);
                  }),
                this.m_goldenProfileDefinition
              );
            }),
            (M.prototype.LoadGoldenProfileDefinition = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new p.h()).set_appids([
                          this.GetCurrentSeasonalAppID(),
                        ]),
                        t.set_community_item_classes([8]),
                        t.set_count(1),
                        t.set_language(S.c.LANGUAGE),
                        [4, this.m_batchedRewardItemLoader.Load(t)]
                      );
                    case 1:
                      return 1 == (n = e.sent()).eresult
                        ? [2, n.response.definitions[0] || null]
                        : (console.error(
                            "Error when loading golden profile definition: EResult=" +
                              n.eresult
                          ),
                          [2, null]);
                  }
                });
              });
            }),
            (M.prototype.GetCouponDefinition = function (e) {
              var t = this;
              return (
                this.m_bLoadedCouponDefinitions ||
                  ((this.m_bLoadedCouponDefinitions = !0),
                  this.LoadCouponDefinitions().then(function (e) {
                    return e.forEach(function (e) {
                      return t.m_mapCouponDefinitons.set(e.defid, e);
                    });
                  })),
                this.m_mapCouponDefinitons.get(e)
              );
            }),
            (M.prototype.LoadCouponDefinitions = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new p.h()).set_appids([
                          this.GetCurrentSeasonalAppID(),
                        ]),
                        t.set_reward_types([4]),
                        t.set_count(10),
                        t.set_language(S.c.LANGUAGE),
                        [4, this.m_batchedRewardItemLoader.Load(t)]
                      );
                    case 1:
                      return 1 == (n = e.sent()).eresult
                        ? [2, n.response.definitions]
                        : (console.error(
                            "Error when loading coupon definitions: EResult=" +
                              n.eresult
                          ),
                          [2, null]);
                  }
                });
              });
            }),
            (M.prototype.GetOwnedItemCacheKey = function (e) {
              return "" + e;
            }),
            (M.prototype.BRewardOwnedByUser = function (e) {
              var t = this.m_mapOwnedCommunityItems.get(
                this.GetOwnedItemCacheKey(
                  this.m_bLoadedFullInventory ? void 0 : e.appid
                )
              );
              return (
                t || this.GetCommunityItemInventory(e.appid),
                t && t.has(e.community_item_type)
              );
            }),
            (M.prototype.BRewardEquippedByUser = function (e) {
              if (!this.BRewardOwnedByUser(e)) return !1;
              switch (e.community_item_class) {
                case 15:
                  return (
                    this.m_equippedItems.animated_avatar.appid == e.appid &&
                    this.m_equippedItems.animated_avatar.item_type ==
                      e.community_item_type
                  );
                case 14:
                  return (
                    this.m_equippedItems.avatar_frame.appid == e.appid &&
                    this.m_equippedItems.avatar_frame.item_type ==
                      e.community_item_type
                  );
                case 3:
                  return (
                    this.m_equippedItems.profile_background.appid == e.appid &&
                    this.m_equippedItems.profile_background.item_type ==
                      e.community_item_type
                  );
                case 13:
                  return (
                    this.m_equippedItems.mini_profile_background.appid ==
                      e.appid &&
                    this.m_equippedItems.mini_profile_background.item_type ==
                      e.community_item_type
                  );
                case 8:
                  return (
                    this.m_equippedItems.profile_modifier.appid == e.appid &&
                    this.m_equippedItems.profile_modifier.item_type ==
                      e.community_item_type
                  );
              }
              return !1;
            }),
            (M.prototype.GetOwnedCommunityItem = function (e) {
              var t = this.m_mapOwnedCommunityItems.get(
                this.GetOwnedItemCacheKey(
                  this.m_bLoadedFullInventory ? void 0 : e.appid
                )
              );
              return (
                t || this.GetCommunityItemInventory(e.appid),
                Object(ce.a)(
                  t.has(e.community_item_type),
                  "Missing owned item " + e.community_item_type
                ),
                t.get(e.community_item_type)
              );
            }),
            (M.prototype.GetOwnedCommunityItemID = function (e) {
              var t = this.GetOwnedCommunityItem(e);
              return t ? t.communityitemid : null;
            }),
            (M.prototype.EnsureCommunityItemInventoryLoaded = function (t) {
              return Object(j.b)(this, void 0, void 0, function () {
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapOwnedCommunityItems.has(
                        this.GetOwnedItemCacheKey(t)
                      )
                        ? [3, 2]
                        : [4, this.GetCommunityItemInventory(t)];
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (M.prototype.GetCommunityItemInventory = function (i) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r, a;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = this.GetOwnedItemCacheKey(i)),
                          this.m_inflightInventoryRequests[t]
                            ? [2, this.m_inflightInventoryRequests[t]]
                            : ((n = this.m_batchedCommunityInventoryLoader.Load(
                                i
                              )),
                              [4, (this.m_inflightInventoryRequests[t] = n)]))
                        : [2];
                    case 1:
                      return (
                        (r = e.sent()),
                        (a = new Map()),
                        r.forEach(function (e) {
                          a.set(e.item_type, e);
                        }),
                        this.m_mapOwnedCommunityItems.set(t, a),
                        delete this.m_inflightInventoryRequests[t],
                        [2, n]
                      );
                  }
                });
              });
            }),
            Object.defineProperty(M.prototype, "active_bonuses", {
              get: function () {
                return (
                  this.m_bLoadedActiveBonuses || this.LoadActiveBonuses(),
                  this.m_rgActiveBonuses
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (M.prototype.LoadActiveBonuses = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (this.m_bLoadedActiveBonuses = !0),
                        (t = l.a.Init(p.c)),
                        [4, p.o.GetActivePurchaseBonuses(this.m_transport, t)]
                      );
                    case 1:
                      return (
                        1 == (n = e.sent()).GetEResult()
                          ? (r = this.m_rgActiveBonuses).push.apply(
                              r,
                              n
                                .Body()
                                .bonuses()
                                .map(function (e) {
                                  return e.toObject();
                                })
                            )
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetActivePurchaseBonuses: EResult=" +
                                n.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (M.prototype.SetProfileBackground = function (a) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = { eResult: 2, strMessage: "" }),
                      this.BIsLoggedIn())
                        ? ((n = l.a.Init(P.k))
                            .Body()
                            .set_communityitemid(
                              this.GetOwnedCommunityItemID(a)
                            ),
                          [4, P.m.SetProfileBackground(this.m_transport, n)])
                        : [
                            2,
                            (t = { eResult: 21, strMessage: "Not logged on" }),
                          ];
                    case 1:
                      return (
                        (r = e.sent()),
                        (t.eResult = r.GetEResult()),
                        1 != r.GetEResult() &&
                          console.error(
                            "Error when calling PlayerService.SetProfileBackground: EResult=" +
                              r.GetEResult()
                          ),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (M.prototype.SetAvatarFrame = function (a) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = { eResult: 2, strMessage: "" }),
                      this.BIsLoggedIn())
                        ? ((n = l.a.Init(P.i))
                            .Body()
                            .set_communityitemid(
                              this.GetOwnedCommunityItemID(a)
                            ),
                          [4, P.m.SetAvatarFrame(this.m_transport, n)])
                        : [
                            2,
                            (t = { eResult: 21, strMessage: "Not logged on" }),
                          ];
                    case 1:
                      return (
                        (r = e.sent()),
                        (t.eResult = r.GetEResult()),
                        1 != r.GetEResult()
                          ? console.error(
                              "Error when calling PlayerService.SetAvatarFrame: EResult=" +
                                r.GetEResult()
                            )
                          : this.RefreshEquippedProfileItems(),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (M.prototype.SetAnimatedAvatar = function (a) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = { eResult: 2, strMessage: "" }),
                      this.BIsLoggedIn())
                        ? ((n = l.a.Init(P.h))
                            .Body()
                            .set_communityitemid(
                              this.GetOwnedCommunityItemID(a)
                            ),
                          [4, P.m.SetAnimatedAvatar(this.m_transport, n)])
                        : [
                            2,
                            (t = { eResult: 21, strMessage: "Not logged on" }),
                          ];
                    case 1:
                      return (
                        (r = e.sent()),
                        (t.eResult = r.GetEResult()),
                        1 != r.GetEResult()
                          ? console.error(
                              "Error when calling PlayerService.SetAnimatedAvatar: EResult=" +
                                r.GetEResult()
                            )
                          : this.RefreshEquippedProfileItems(),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (M.prototype.SetMiniProfileBackground = function (a) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = { eResult: 2, strMessage: "" }),
                      this.BIsLoggedIn())
                        ? ((n = l.a.Init(P.j))
                            .Body()
                            .set_communityitemid(
                              this.GetOwnedCommunityItemID(a)
                            ),
                          [
                            4,
                            P.m.SetMiniProfileBackground(this.m_transport, n),
                          ])
                        : [
                            2,
                            (t = { eResult: 21, strMessage: "Not logged on" }),
                          ];
                    case 1:
                      return (
                        (r = e.sent()),
                        (t.eResult = r.GetEResult()),
                        1 != r.GetEResult()
                          ? console.error(
                              "Error when calling PlayerService.SetMiniProfileBackground: EResult=" +
                                r.GetEResult()
                            )
                          : this.RefreshEquippedProfileItems(),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (M.prototype.ActivateProfileModifier = function (a) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = { eResult: 2, strMessage: "" }),
                      this.BIsLoggedIn())
                        ? ((n = l.a.Init(A))
                            .Body()
                            .set_communityitemid(
                              this.GetOwnedCommunityItemID(a)
                            ),
                          n.Body().set_appid(a.appid),
                          n.Body().set_activate(!0),
                          [
                            4,
                            f.ActivateProfileModifierItem(this.m_transport, n),
                          ])
                        : [
                            2,
                            (t = { eResult: 21, strMessage: "Not logged on" }),
                          ];
                    case 1:
                      return (
                        (r = e.sent()),
                        (t.eResult = r.GetEResult()),
                        1 != r.GetEResult()
                          ? console.error(
                              "Error when calling QuestService.ActivateProfileModifierItem: EResult=" +
                                r.GetEResult()
                            )
                          : this.RefreshEquippedProfileItems(),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (M.prototype.RedeemPointsForItem = function (a, i) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = { eResult: 2, strMessage: "" }),
                      this.BIsLoggedIn())
                        ? ((n = l.a.Init(p.l)).Body().set_defid(a),
                          [4, p.o.RedeemPoints(this.m_transport, n)])
                        : [
                            2,
                            (t = {
                              eResult: 21,
                              strMessage: Object(E.f)("#Redeem_SignIn"),
                            }),
                          ];
                    case 1:
                      return (
                        (r = e.sent()),
                        (t.eResult = r.GetEResult()),
                        1 == r.GetEResult()
                          ? (this.GetCommunityItemInventory(i),
                            this.GetLoyaltyRewardsSummary())
                          : ((t.strMessage = this.EResultToErrorMessage(
                              r.GetEResult()
                            )),
                            console.error(
                              "Error when calling LoyaltyRewardsService.RedeemPoints: EResult=" +
                                r.GetEResult()
                            )),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (M.prototype.RedeemPointsForBadge = function (a, i) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = { eResult: 2, strMessage: "" }),
                      this.BIsLoggedIn())
                        ? ((n = l.a.Init(p.i)).Body().set_defid(a),
                          n.Body().set_num_levels(i),
                          [
                            4,
                            p.o.RedeemPointsForBadgeLevel(this.m_transport, n),
                          ])
                        : [
                            2,
                            (t = {
                              eResult: 21,
                              strMessage: Object(E.f)("#Redeem_SignIn"),
                            }),
                          ];
                    case 1:
                      return (
                        (r = e.sent()),
                        (t.eResult = r.GetEResult()),
                        1 == r.GetEResult()
                          ? (this.GetCommunityItemInventory(
                              this.GetCurrentSeasonalAppID()
                            ),
                            this.GetLoyaltyRewardsSummary())
                          : ((t.strMessage = this.EResultToErrorMessage(
                              r.GetEResult()
                            )),
                            console.error(
                              "Error when calling LoyaltyRewardsService.RedeemPointsForBadgeLevel: EResult=" +
                                r.GetEResult()
                            )),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (M.prototype.RedeemPointsForProfileShowcase = function (a) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = { eResult: 2, strMessage: "" }),
                      this.BIsLoggedIn())
                        ? ((n = l.a.Init(p.k)).Body().set_customization_type(a),
                          [
                            4,
                            p.o.RedeemPointsForProfileCustomization(
                              this.m_transport,
                              n
                            ),
                          ])
                        : [
                            2,
                            (t = { eResult: 21, strMessage: "Not logged on" }),
                          ];
                    case 1:
                      return (
                        (r = e.sent()),
                        (t.eResult = r.GetEResult()),
                        1 == r.GetEResult()
                          ? this.RefreshPurchasedProfileCustomizations()
                          : ((t.strMessage = this.EResultToErrorMessage(
                              r.GetEResult()
                            )),
                            console.error(
                              "Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomization: EResult=" +
                                r.GetEResult()
                            )),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (M.prototype.RedeemPointsForProfileShowcaseUpgrade = function (
              a,
              i
            ) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = { eResult: 2, strMessage: "" }),
                      this.BIsLoggedIn())
                        ? ((n = l.a.Init(p.j)).SetBodyFields({
                            customization_type: a,
                            new_level: i,
                          }),
                          [
                            4,
                            p.o.RedeemPointsForProfileCustomizationUpgrade(
                              this.m_transport,
                              n
                            ),
                          ])
                        : [
                            2,
                            (t = {
                              eResult: 21,
                              strMessage: Object(E.f)("#Redeem_SignIn"),
                            }),
                          ];
                    case 1:
                      return (
                        (r = e.sent()),
                        (t.eResult = r.GetEResult()),
                        1 == r.GetEResult()
                          ? this.RefreshPurchasedProfileCustomizations()
                          : ((t.strMessage = this.EResultToErrorMessage(
                              r.GetEResult()
                            )),
                            console.error(
                              "Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomizationUpgrade: EResult=" +
                                r.GetEResult()
                            )),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (M.prototype.RedeemPointsForCoupon = function (i) {
              return Object(j.b)(this, void 0, void 0, function () {
                var n, t, r, a;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (
                        ((n = { eResult: 2, strMessage: "" }),
                        !this.BIsLoggedIn())
                      )
                        return [
                          2,
                          (n = {
                            eResult: 21,
                            strMessage: Object(E.f)("#Redeem_SignIn"),
                          }),
                        ];
                      (t = new FormData()).append("sessionid", S.c.SESSIONID),
                        t.append("itemid", i.toString()),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          o.a
                            .post(
                              S.c.STORE_BASE_URL +
                                "cart/ajaxredeemtokensforcartdiscount",
                              t
                            )
                            .then(function (e) {
                              var t = e.data;
                              (n.eResult = t.eresult),
                                1 == t.eresult && t.redirect
                                  ? (window.location.href = t.redirect)
                                  : console.error(
                                      "Error when calling ajaxredeemtokensforcartdiscount: " +
                                        t
                                    );
                            }),
                        ]
                      );
                    case 2:
                      return e.sent(), [3, 4];
                    case 3:
                      return (
                        (r = e.sent()),
                        (a = Object(s.a)(r)),
                        console.error(
                          "Error when calling ajaxredeemtokensforcartdiscount: " +
                            a.strErrorMsg,
                          a
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, n];
                  }
                });
              });
            }),
            (M.prototype.GetCouponPromosForUser = function () {
              var t = this;
              return (
                this.m_bLoadedCouponPromosForUser ||
                  ((this.m_bLoadedCouponPromosForUser = !0),
                  this.LoadCouponPromosForUser().then(function (e) {
                    return e
                      .sort(function (e, t) {
                        return e.max_use_count < t.max_use_count
                          ? -1
                          : e.max_use_count == t.max_use_count
                          ? 0
                          : 1;
                      })
                      .forEach(function (e) {
                        return t.m_mapCouponPromos.set(e.loyalty_reward_id, e);
                      });
                  })),
                this.m_mapCouponPromos
              );
            }),
            (M.prototype.LoadCouponPromosForUser = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = l.a.Init(k))
                          .Body()
                          .set_country_code(S.i.country_code),
                        [
                          4,
                          B.GetAvailableValveDiscountPromotions(
                            this.m_transport,
                            t
                          ),
                        ]
                      );
                    case 1:
                      return 1 == (n = e.sent()).GetEResult()
                        ? [
                            2,
                            n
                              .Body()
                              .promotions()
                              .map(function (e) {
                                return e.toObject();
                              }),
                          ]
                        : (console.error(
                            "Error when calling UserAccountService.GetAvailableValveDiscountPromotions: EResult=" +
                              n.GetEResult()
                          ),
                          [2, []]);
                  }
                });
              });
            }),
            (M.prototype.BCanRedeemPointsForItem = function (e) {
              if (1 == e.type)
                switch (e.community_item_class) {
                  case 4:
                  case 3:
                    if (
                      e.community_item_data.animated &&
                      3 == e.community_item_class
                    )
                      return !0;
                    if (this.GetSortedGamesWithRewards().includes(e.appid))
                      return !0;
                    var t = this.m_mapEligibleApps.get(e.appid);
                    return t && t.event_app ? !0 : !1;
                }
              return !0;
            }),
            (M.prototype.BCanRedeemPointsForProfileShowcaseUpgrade = function (
              e,
              t
            ) {
              return (
                t < this.m_rgProfileCustomizationsConfig.max_upgradable_level
              );
            }),
            (M.prototype.BCanRedeemPointsForProfileShowcaseSlot = function (
              e,
              t
            ) {
              return (
                t < this.m_rgProfileCustomizationsConfig.max_slots_per_type
              );
            }),
            (M.prototype.GetSortedGamesWithRewards = function () {
              var s = this;
              return (
                this.m_bSortedGamesWithRewards ||
                  ((this.m_bSortedGamesWithRewards = !0),
                  Promise.all([
                    this.m_bLoadedEligibleApps
                      ? this.m_rgEligibleApps
                      : this.LoadEligibleApps(),
                    this.m_bLoadedRecentlyPlayed
                      ? this.m_rgRecentlyPlayed
                      : this.LoadRecentlyPlayedApps(),
                    this.m_bLoadedOwnedGames
                      ? this.m_rgOwnedGames
                      : this.LoadOwnedGames(),
                  ]).then(function (e) {
                    var t = e[0],
                      n = e[1],
                      r = e[2];
                    (s.m_rgEligibleApps = t),
                      (s.m_rgOwnedGames = r),
                      (s.m_mapEligibleApps = new Map(
                        s.m_rgEligibleApps.map(function (e) {
                          return [e.appid, e];
                        })
                      ));
                    var a = n.filter(function (e) {
                        return r.includes(e) && s.m_mapEligibleApps.has(e);
                      }),
                      i = r.filter(function (e) {
                        return 0 == a.includes(e) && s.m_mapEligibleApps.has(e);
                      }),
                      o = Array.from(s.m_mapEligibleApps.keys()).filter(
                        function (e) {
                          if (a.includes(e)) return !1;
                          if (i.includes(e)) return !1;
                          var t = s.m_mapEligibleApps.get(e);
                          return !(!t || !t.has_items_anyone_can_purchase);
                        }
                      );
                    (s.m_rgSortedAppsWithRewards = a.concat(o)),
                      (s.m_rgSortedAppsWithRewards = s.m_rgSortedAppsWithRewards.concat(
                        i
                      ));
                  })),
                this.m_rgSortedAppsWithRewards
              );
            }),
            (M.prototype.GetMaxProfileShowcaseSlots = function () {
              return this.m_rgProfileCustomizationsConfig.max_slots_per_type;
            }),
            (M.prototype.GetPurchasableProfileShowcaseSlotCost = function () {
              return this.m_rgProfileCustomizationsConfig.points_cost;
            }),
            (M.prototype.GetPurchasableProfileShowcaseSlots = function () {
              return this.m_rgProfileCustomizationsConfig
                .purchasable_customization_types;
            }),
            (M.prototype.GetUpgradableProfileShowcaseCost = function () {
              return this.m_rgProfileCustomizationsConfig.upgrade_points_cost;
            }),
            (M.prototype.GetUpgradableProfileShowcases = function () {
              return this.m_rgProfileCustomizationsConfig
                .upgradable_customization_types;
            }),
            (M.prototype.GetMaxProfileShowcaseUpgradeLevel = function () {
              return this.m_rgProfileCustomizationsConfig.max_upgradable_level;
            }),
            (M.prototype.LoadRecentlyPlayedApps = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((this.m_bLoadedRecentlyPlayed = !0),
                      this.BIsLoggedIn())
                        ? ((t = l.a.Init(P.c)).Body().set_min_last_played(0),
                          [
                            4,
                            P.m.ClientGetLastPlayedTimes(this.m_transport, t),
                          ])
                        : [2, []];
                    case 1:
                      return 1 == (n = e.sent()).GetEResult()
                        ? ((this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
                            n.Body().toObject().games
                          )),
                          [2, this.m_rgRecentlyPlayed])
                        : (console.error(
                            "Error when calling PlayerService.ClientGetLastPlayedTimes: EResult=" +
                              n.GetEResult()
                          ),
                          [2, []]);
                  }
                });
              });
            }),
            (M.prototype.ProcessRecentlyPlayedApps = function (e) {
              return (
                e.sort(function (e, t) {
                  return t.last_playtime != e.last_playtime
                    ? t.last_playtime - e.last_playtime
                    : t.playtime_2weeks != e.playtime_2weeks
                    ? t.playtime_2weeks - e.playtime_2weeks
                    : t.playtime_forever - e.playtime_forever;
                }),
                e.map(function (e) {
                  return e.appid;
                })
              );
            }),
            (M.prototype.LoadOwnedGames = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((this.m_bLoadedOwnedGames = !0),
                      this.BIsLoggedIn())
                        ? ((t = l.a.Init(P.d)).SetBodyFields({
                            steamid: S.i.steamid,
                            include_played_free_games: !0,
                            include_free_sub: !0,
                          }),
                          [4, P.m.GetOwnedGames(this.m_transport, t)])
                        : [2, []];
                    case 1:
                      return 1 == (n = e.sent()).GetEResult()
                        ? [
                            2,
                            n
                              .Body()
                              .games()
                              .map(function (e) {
                                return e.appid();
                              }),
                          ]
                        : (console.error(
                            "Error when calling PlayerService.GetOwnedGames: EResult=" +
                              n.GetEResult()
                          ),
                          [2, []]);
                  }
                });
              });
            }),
            (M.prototype.LoadEligibleApps = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((this.m_bLoadedEligibleApps = !0),
                      this.BIsLoggedIn())
                        ? ((t = l.a.Init(p.d))
                            .Body()
                            .set_include_event_apps(!0),
                          [4, p.o.GetEligibleApps(this.m_transport, t)])
                        : [2, []];
                    case 1:
                      return 1 == (n = e.sent()).GetEResult()
                        ? [2, n.Body().toObject().apps]
                        : (console.error(
                            "Error when calling GetEligibleApps: EResult=" +
                              n.GetEResult()
                          ),
                          [2, []]);
                  }
                });
              });
            }),
            (M.prototype.RefreshEquippedProfileItems = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = l.a.Init(P.e)).SetBodyFields({
                            steamid: S.i.steamid,
                          }),
                          [4, P.m.GetProfileItemsEquipped(this.m_transport, t)])
                        : [2];
                    case 1:
                      return (
                        1 == (n = e.sent()).GetEResult()
                          ? (this.m_equippedItems = n.Body().toObject())
                          : console.error(
                              "Error when calling GetProfileItemsEquipped: EResult=" +
                                n.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (M.prototype.RefreshPurchasedProfileCustomizations = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = l.a.Init(P.f)).SetBodyFields({
                            steamid: S.i.steamid,
                          }),
                          [
                            4,
                            P.m.GetPurchasedAndUpgradedProfileCustomizations(
                              this.m_transport,
                              t
                            ),
                          ])
                        : [2];
                    case 1:
                      return (
                        1 == (n = e.sent()).GetEResult()
                          ? ((r = n.Body().toObject()),
                            (this.m_rgPurchasedCustomizations =
                              r.purchased_customizations),
                            (this.m_rgUpgradedCustomizations =
                              r.upgraded_customizations))
                          : console.error(
                              "Error when calling GetPurchasedAndUpgradedProfileCustomizations: EResult=" +
                                n.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (M.prototype.GetPersonaState = function () {
              return this.m_persona;
            }),
            (M.prototype.RetrievePersonaState = function () {
              return Object(j.b)(this, void 0, void 0, function () {
                var t,
                  n = this;
                return Object(j.e)(this, function (e) {
                  return (
                    (t = {
                      access_token: this.m_config.webapi_token,
                      steamids: S.i.steamid,
                    }),
                    [
                      2,
                      o.a
                        .get(
                          S.c.WEBAPI_BASE_URL +
                            "ISteamUserOAuth/GetUserSummaries/v2/",
                          { params: t }
                        )
                        .then(function (e) {
                          var t;
                          e &&
                            e.data &&
                            e.data.players &&
                            0 != e.data.players.length &&
                            ((t = e.data.players[0]),
                            (n.m_persona.m_strPlayerName = t.personaname),
                            (n.m_persona.m_ePersonaState = t.personastate),
                            (n.m_persona.m_strAvatarHash = t.avatarhash));
                        }),
                    ]
                  );
                });
              });
            }),
            (M.prototype.GetEquippedItems = function () {
              return this.m_equippedItems;
            }),
            (M.prototype.GetPurchasedProfileCustomizations = function () {
              return this.m_rgPurchasedCustomizations;
            }),
            (M.prototype.GetUpgradedProfileCustomizations = function () {
              return this.m_rgUpgradedCustomizations;
            }),
            (M.prototype.GetRewardItem = function (t) {
              var n = this;
              return (
                this.m_mapLoyaltyRewardDefs.has(t) ||
                  this.m_inflightRewardItemRequests[t] ||
                  ((this.m_inflightRewardItemRequests[t] = !0),
                  this.LoadRewardItem(t).then(function (e) {
                    e.defid === t && n.m_mapLoyaltyRewardDefs.set(t, e),
                      delete n.m_inflightRewardItemRequests[t];
                  })),
                this.m_mapLoyaltyRewardDefs.get(t)
              );
            }),
            (M.prototype.GetAppHeroImage = function (e) {
              var t = this.m_mapEligibleApps.get(e);
              return t && t.hero_carousel_image
                ? {
                    img_url:
                      S.c.MEDIA_CDN_COMMUNITY_URL +
                      "images/items/" +
                      e +
                      "/" +
                      t.hero_carousel_image,
                    is_custom: !0,
                  }
                : {
                    img_url: this.m_HeroImageFallbackLoader.Get(e) || ie,
                    is_custom: !1,
                  };
            }),
            (M.prototype.LoadRewardItem = function (r) {
              return Object(j.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(j.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new p.h()).set_language(S.c.LANGUAGE),
                        t.set_count(1),
                        t.set_definitionids([r]),
                        [4, this.m_batchedRewardItemLoader.Load(t)]
                      );
                    case 1:
                      return 1 == (n = e.sent()).eresult
                        ? [
                            2,
                            0 < n.response.count
                              ? n.response.definitions[0]
                              : null,
                          ]
                        : (console.error(
                            "Error when loading reward definitions: EResult=" +
                              n.eresult
                          ),
                          [2, null]);
                  }
                });
              });
            }),
            (M.prototype.GetPageDescriptor = function (e) {
              return (
                this.m_mapPages.has(fe(e)) ||
                  this.m_mapPages.set(fe(e), this.BuildPage(e)),
                this.m_mapPages.get(fe(e))
              );
            }),
            (M.prototype.BuildPage = function (e) {
              switch (e.type) {
                case "app":
                  return new ye(
                    e.appid,
                    e.appid === this.GetCurrentSeasonalAppID()
                      ? Object(E.f)("#HeroCluster_Premier_Collection_Subtitle")
                      : void 0
                  );
                case "custom":
                  return (
                    console.error("Cannot dynamically build page type"), null
                  );
                default:
                  return console.error("Unknown page type " + e.type), null;
              }
            }),
            (M.prototype.GetClusterDescriptor = function (e) {
              return this.m_mapClusters.get(e);
            }),
            (M.prototype.HydrateCustomPages = function () {
              function e(e, t, n) {
                var r = new he(
                  e,
                  t,
                  Object(j.a)({ grouping: 2, maxToReturn: 0 }, n)
                );
                return (
                  c.m_mapClusters.has(r.id) || c.m_mapClusters.set(r.id, r),
                  r.id
                );
              }
              function s(e, t, n, r) {
                var a,
                  i =
                    ((a = new be(e, n || "", Ie({ grouping: 2 }, r))),
                    c.m_mapClusters.has(a.id) || c.m_mapClusters.set(a.id, a),
                    a);
                return {
                  type: 2,
                  cluster: i.id,
                  get title() {
                    return Object(E.f)("#HeroCluster_AppTitle", i.title);
                  },
                  get strImage() {
                    return t || M.Get().GetAppHeroImage(e).img_url;
                  },
                  get bFullBleedImage() {
                    return !(!t && !M.Get().GetAppHeroImage(e).is_custom);
                  },
                  linkedPage: { type: "app", appid: e },
                  theme: {
                    colors: {
                      bodygradient:
                        "linear-gradient(147.3deg, rgba(211, 193, 144, 0) 42.88%, rgba(223, 200, 141, 0.32) 113.95%)",
                      background: "rgba(117, 98, 80, 0.25)",
                    },
                  },
                };
              }
              function t(e) {
                return c.m_mapPages.set(fe(e.params), e);
              }
              var c = this,
                n = e(
                  Object(E.f)(
                    "#RewardCluster_Popular_Title",
                    Object(E.f)("#RewardCluster_Popular_RewardItems")
                  ),
                  Object(E.f)("#RewardCluster_Popular_Subtitle"),
                  { maxToReturn: 120 }
                ),
                r = e(
                  me(13, !0),
                  Object(E.f)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
                  { itemclass: [13] }
                ),
                a = e(
                  Object(E.f)("#ShopPageTitle_Avatar"),
                  Object(E.f)("#RewardCluster_AvatarItems_Subtitle"),
                  { itemclass: [15, 14] }
                ),
                i = e(
                  me(3, !0),
                  Object(E.f)("#RewardCluster_Backgrounds_Subtitle"),
                  { itemclass: [3] }
                ),
                o = e(
                  Object(E.f)(
                    "#RewardCluster_Popular_Title",
                    Object(E.f)("#ShopNav_ChatEffectsLink")
                  ),
                  Object(E.f)("#RewardCluster_ChatEffect_Subtitle"),
                  { itemclass: [12] }
                ),
                l = e(
                  Object(E.f)(
                    "#RewardCluster_Popular_Title",
                    Object(E.f)("#ShopNav_StickersLink")
                  ),
                  Object(E.f)("#RewardCluster_Popular_Subtitle"),
                  { itemclass: [11] }
                ),
                m = e(
                  Object(E.f)(
                    "#RewardCluster_Popular_Title",
                    Object(E.f)("#ShopNav_EmoticonsLink")
                  ),
                  Object(E.f)("#RewardCluster_Popular_Subtitle"),
                  { itemclass: [4] }
                ),
                u = e(
                  Object(E.f)("#RewardCluster_All_Title", me(15, !0)),
                  Object(E.f)("#RewardCluster_AnimatedAvatar_Subtitle"),
                  { itemclass: [15] }
                ),
                d = e(
                  Object(E.f)("#RewardCluster_All_Title", me(14, !0)),
                  Object(E.f)("#RewardCluster_AvatarFrames_Subtitle"),
                  { itemclass: [14] }
                ),
                p = [
                  { cluster: n, type: 1, linkedPage: null },
                  {
                    cluster: l,
                    type: 1,
                    linkedPage: { type: "custom", pageid: "stickers" },
                  },
                  { cluster: r, type: 1 },
                  { cluster: a, type: 1 },
                  {
                    cluster: i,
                    type: 1,
                    linkedPage: { type: "custom", pageid: "backgrounds" },
                  },
                  { cluster: o, type: 1 },
                  {
                    cluster: m,
                    type: 1,
                    linkedPage: { type: "custom", pageid: "emoticons" },
                  },
                ],
                f = e(
                  Object(E.f)(
                    "#RewardCluster_NewFeatured_Title",
                    Object(E.f)("#RewardCluster_Popular_RewardItems")
                  ),
                  void 0,
                  { categoryTag: ["winter_2020_sale"], grouping: 2 }
                );
              p.unshift({ cluster: f, type: 1 });
              var _,
                g = [];
              Object(O.a)(S.c.EREALM) ||
                g.push(
                  s(1492660),
                  s(1091500),
                  s(1314563),
                  s(870780),
                  s(1190460, void 0, void 0, { itemclass: [3] }),
                  s(570, re, Object(E.f)("#HeroCluster_dota_subtitile")),
                  s(292030, ae)
                ),
                (_ = {
                  type: "banner",
                  title: Object(E.f)("#FeaturedBanner_Headline"),
                  description: Object(E.f)("#FeaturedBanner_Subhead"),
                  link_text: Object(E.f)("#FeaturedBanner_CallToAction"),
                  linked_page: se.b.LoyaltyProfileCustomizations(),
                  image: oe,
                });
              for (
                var h = [], b = [p, g], y = 0;
                y < Math.max(b[0].length, b[1].length);
                y++
              )
                0 == y && _ && h.push(_),
                  y < b[0].length &&
                    h.push({ type: "clusterview", view: b[0][y] }),
                  y < b[1].length &&
                    h.push({ type: "clusterview", view: b[1][y] });
              t(new ve(ue, h)),
                t(
                  new we(
                    "stickers",
                    [{ cluster: l, type: 0 }],
                    Object(E.f)("#ShopPageTitle_Stickers")
                  )
                ),
                t(
                  new we(
                    "emoticons",
                    [{ cluster: m, type: 0 }],
                    Object(E.f)("#ShopPageTitle_Emoticons")
                  )
                ),
                t(new we("chateffects", [{ cluster: o, type: 0 }], me(12, !0)));
              var v = e(
                  Object(E.f)(
                    "#RewardCluster_AnimatedProfileBackgrounds_Title"
                  ),
                  Object(E.f)("#RewardCluster_Backgrounds_Subtitle"),
                  { itemclass: [3], maxToReturn: 120, queryFilter: [1] }
                ),
                w = e(
                  Object(E.f)(
                    "#RewardCluster_AnimatedMiniProfileBackgrounds_Title"
                  ),
                  Object(E.f)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
                  { itemclass: [13], maxToReturn: 120, queryFilter: [1] }
                ),
                C = e(
                  Object(E.f)("#RewardCluster_StillProfileBackgrounds_Title"),
                  Object(E.f)("#RewardCluster_Backgrounds_Subtitle"),
                  { itemclass: [3], maxToReturn: 120, queryFilter: [2] }
                ),
                I = e(
                  Object(E.f)(
                    "#RewardCluster_StillMiniProfileBackgrounds_Title"
                  ),
                  Object(E.f)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
                  { itemclass: [13], maxToReturn: 120, queryFilter: [2] }
                );
              t(
                new we(
                  "backgrounds",
                  [
                    { cluster: v, type: 1 },
                    { cluster: w, type: 1 },
                    { cluster: C, type: 1 },
                    { cluster: I, type: 1 },
                  ],
                  Object(E.f)("#ShopPageTitle_Backgrounds")
                )
              ),
                t(
                  new we(
                    "avatar",
                    [
                      { cluster: u, type: 1 },
                      { cluster: d, type: 1 },
                    ],
                    Object(E.f)("#ShopPageTitle_Avatar")
                  )
                ),
                this.BIsLoggedIn() &&
                  Object(N.L)(function () {
                    return !!M.Get().GetSortedGamesWithRewards().length;
                  }).then(function () {
                    var e = new he(
                      Object(E.f)("#HeroCluster_YourGamesTitle"),
                      void 0,
                      {
                        get appid() {
                          return M.Get().GetSortedGamesWithRewards();
                        },
                        grouping: 2,
                      }
                    );
                    c.m_mapClusters.set(e.id, e);
                    var t = {
                      type: 2,
                      linkedPage: { type: "custom", pageid: "games" },
                      cluster: e.id,
                      strImage: ie,
                      bFullBleedImage: !0,
                    };
                    h.push({ type: "clusterview", view: t });
                    for (
                      var n = M.Get().GetSortedGamesWithRewards(),
                        a = 0,
                        r = function (r) {
                          if (
                            -1 !=
                            h.findIndex(function (e) {
                              return (
                                "clusterview" === e.type &&
                                ((t = e.view.cluster),
                                ((n = c.m_mapClusters.get(t)) && n instanceof be
                                  ? n.appid
                                  : null) === r)
                              );
                              var t, n;
                            })
                          )
                            return "continue";
                          var e = s(r);
                          return (
                            h.splice(1 + 3 * a, 0, {
                              type: "clusterview",
                              view: e,
                            }),
                            3 <= (a += 1) ? "break" : void 0
                          );
                        },
                        i = 0,
                        o = n;
                      i < o.length;
                      i++
                    ) {
                      if ("break" === r(o[i])) break;
                    }
                    c.m_mapPages.set(
                      fe({ type: "custom", pageid: ue }),
                      new ve(ue, h)
                    );
                  });
            }),
            Object(j.c)([N.C.ref], M.prototype, "m_lPointsAvailable", void 0),
            Object(j.c)([N.C], M.prototype, "m_mapCouponPromos", void 0),
            Object(j.c)(
              [N.C],
              M.prototype,
              "m_nAppIDFiltersInUseCount",
              void 0
            ),
            Object(j.c)([N.C], M.prototype, "m_mapAppIDFilters", void 0),
            Object(j.c)([N.C], M.prototype, "m_strAppFilterText", void 0),
            Object(j.c)([N.C], M.prototype, "m_mapCouponDefinitons", void 0),
            Object(j.c)([N.C], M.prototype, "m_mapLoyaltyRewardDefs", void 0),
            Object(j.c)([N.C], M.prototype, "m_mapOwnedCommunityItems", void 0),
            Object(j.c)([N.C], M.prototype, "m_mapAppRewards", void 0),
            Object(j.c)(
              [N.C],
              M.prototype,
              "m_seasonalBadgeDefinition",
              void 0
            ),
            Object(j.c)(
              [N.C],
              M.prototype,
              "m_goldenProfileDefinition",
              void 0
            ),
            Object(j.c)([N.C], M.prototype, "m_goldenProfileConfigs", void 0),
            Object(j.c)(
              [N.C],
              M.prototype,
              "m_rgSortedAppsWithRewards",
              void 0
            ),
            Object(j.c)([N.C], M.prototype, "m_rgOwnedGames", void 0),
            Object(j.c)([N.C], M.prototype, "m_rgEligibleApps", void 0),
            Object(j.c)([N.C], M.prototype, "m_mapEligibleApps", void 0),
            Object(j.c)(
              [N.C],
              M.prototype,
              "m_rgProfileCustomizationsConfig",
              void 0
            ),
            Object(j.c)([N.C], M.prototype, "m_persona", void 0),
            Object(j.c)([N.C], M.prototype, "m_equippedItems", void 0),
            Object(j.c)(
              [N.C],
              M.prototype,
              "m_rgPurchasedCustomizations",
              void 0
            ),
            Object(j.c)(
              [N.C],
              M.prototype,
              "m_rgUpgradedCustomizations",
              void 0
            ),
            Object(j.c)(
              [N.C],
              M.prototype,
              "m_unAwardPointsTransferred",
              void 0
            ),
            Object(j.c)([c.a], M.prototype, "ShowLoginDialog", null),
            M
          );
        })();
      function pe(e) {
        var t = se.b.LoyaltyStore();
        switch (e.type) {
          case "app":
            return (
              t +
              "/app/" +
              e.appid +
              ("number" == typeof e.clusterindex
                ? "/cluster/" + e.clusterindex
                : "")
            );
          case "custom":
            return (
              t +
              "/c/" +
              e.pageid +
              ("number" == typeof e.clusterindex
                ? "/cluster/" + e.clusterindex
                : "")
            );
          default:
            return console.error("Unknown page type " + e.type), t;
        }
      }
      function fe(e) {
        return btoa(JSON.stringify(e));
      }
      function _e(e, t) {
        return (
          e.join("_") +
          "__" +
          (function (e) {
            if (!e) return "";
            var t = e.appid,
              n = e.itemclass,
              r = e.grouping,
              a = e.queryFilter,
              i = e.categoryTag;
            return [
              t ? Object(j.g)(t).sort().join("_") : "",
              n ? n.join("_") : "",
              r ? r.toString() : "",
              a ? a.join("_") : "",
              i ? i.join("_") : "",
            ].join("__");
          })(t)
        );
      }
      function ge(e) {
        var t = { sort: 1, sort_descending: !0 };
        switch (e) {
          case 1:
            (t.sort = 1), (t.sort_descending = !0);
            break;
          case 2:
            (t.sort = 2), (t.sort_descending = !1);
        }
        return t;
      }
      var he = (function () {
          function e(e, t, n) {
            void 0 === n && (n = {}),
              (this.m_filter = n),
              (this.m_strTitle = e),
              (this.m_strSubtitle = t),
              (this.m_strId = _e([], n));
          }
          return (
            Object.defineProperty(e.prototype, "id", {
              get: function () {
                return this.m_strId;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "title", {
              get: function () {
                return this.m_strTitle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "subtitle", {
              get: function () {
                return this.m_strSubtitle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.GetRewards = function (e, t, n) {
              var r = Ie(this.m_filter, n);
              return de.Get().GetVirtualItemRewardDefinitions(r, e, t);
            }),
            Object(j.c)([c.a], e.prototype, "GetRewards", null),
            e
          );
        })(),
        be = (function () {
          function e(e, t, n) {
            (this.m_appid = e),
              (this.m_strSubtitle = t || ""),
              (this.m_additionalFilter = n || {}),
              le.a.GetAppInfo(this.m_appid),
              (this.m_strId = _e([this.m_appid], this.m_additionalFilter));
          }
          return (
            Object.defineProperty(e.prototype, "id", {
              get: function () {
                return this.m_strId;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "appid", {
              get: function () {
                return this.m_appid;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "title", {
              get: function () {
                return le.a.GetAppInfo(this.m_appid).name;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "subtitle", {
              get: function () {
                return this.m_strSubtitle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.GetRewards = function (e, t, n) {
              var r = Ie({ appid: [this.m_appid] }, this.m_additionalFilter, n);
              return de.Get().GetVirtualItemRewardDefinitions(r, e, t);
            }),
            Object(j.c)([c.a], e.prototype, "GetRewards", null),
            e
          );
        })(),
        ye = (function () {
          function e(e, t) {
            void 0 === t && (t = ""),
              (this.m_appid = e),
              (this.m_strSubtitle = t),
              le.a.GetAppInfo(this.m_appid);
          }
          return (
            Object.defineProperty(e.prototype, "params", {
              get: function () {
                return { type: "app", appid: this.m_appid };
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "title", {
              get: function () {
                return le.a.GetAppInfo(this.m_appid).name;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "subtitle", {
              get: function () {
                return this.m_strSubtitle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "items", {
              get: function () {
                var a = this;
                return [15, 14, 13, 3, 11, 4].map(function (r) {
                  return {
                    type: "clusterview",
                    view: {
                      type: 1,
                      cluster: {
                        id: _e([a.m_appid], { itemclass: [r] }),
                        title: me(r, !0),
                        subtitle: "",
                        GetRewards: function (e, t, n) {
                          return de
                            .Get()
                            .GetVirtualItemRewardDefinitions(
                              Ie({ appid: [a.m_appid], itemclass: [r] }, n),
                              e,
                              t
                            );
                        },
                      },
                    },
                  };
                });
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        ve = (function () {
          function e(e, t, n) {
            (this.m_pageid = e),
              (this.m_strTitle = n),
              (this.m_rgPageItems = t);
          }
          return (
            Object.defineProperty(e.prototype, "params", {
              get: function () {
                return { type: "custom", pageid: this.m_pageid };
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "title", {
              get: function () {
                return this.m_strTitle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "items", {
              get: function () {
                return this.m_rgPageItems.map(function (e) {
                  switch (e.type) {
                    case "banner":
                      return e;
                    case "clusterview":
                      return {
                        type: "clusterview",
                        view: Object(j.a)(Object(j.a)({}, e.view), {
                          cluster: de
                            .Get()
                            .GetClusterDescriptor(e.view.cluster),
                        }),
                      };
                  }
                });
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })();
      var we = (function (r) {
          function e(e, t, n) {
            return (
              r.call(
                this,
                e,
                t.map(function (e) {
                  return { type: "clusterview", view: e };
                }),
                n
              ) || this
            );
          }
          return Object(j.d)(e, r), e;
        })(ve),
        Ce = (function () {
          function e(e, t, n) {
            (this.m_rgRequestParts = []),
              (this.m_fnMakeRequest = e),
              (this.m_fnJoinRequests = t),
              (this.m_fnSplitResponse = n);
          }
          return (
            (e.prototype.Load = function (e) {
              this.m_rootPromise || this.QueueBatch();
              var t = this.m_rgRequestParts.push(e);
              return this.m_rootPromise.then(function (e) {
                return e[t - 1];
              });
            }),
            (e.prototype.QueueBatch = function () {
              var t = this,
                n = this.m_rgRequestParts;
              this.m_rootPromise = Promise.resolve()
                .then(function () {
                  var e = t.m_fnMakeRequest(t.m_fnJoinRequests(n));
                  return t.Reset(), e;
                })
                .then(function (e) {
                  return t.m_fnSplitResponse(e, n);
                });
            }),
            (e.prototype.Reset = function () {
              (this.m_rootPromise = void 0), (this.m_rgRequestParts = []);
            }),
            e
          );
        })();
      function Ie(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t && t.length
          ? Object(j.g)([e], t).reduce(function (e, t) {
              var n, r;
              if (!t) return e;
              var a = Object(j.a)({}, e);
              return (
                t.appid &&
                  (a.appid && a.appid.length
                    ? (a.appid = a.appid.filter(function (e) {
                        return t.appid.includes(e);
                      }))
                    : (a.appid = t.appid)),
                "number" == typeof t.grouping &&
                  "number" != typeof e.grouping &&
                  (a.grouping = t.grouping),
                t.itemclass &&
                  (a.itemclass && a.itemclass.length
                    ? (a.itemclass = a.itemclass.filter(function (e) {
                        return t.itemclass.includes(e);
                      }))
                    : (a.itemclass = t.itemclass)),
                t.queryFilter &&
                  (a.queryFilter
                    ? (n = a.queryFilter).push.apply(
                        n,
                        t.queryFilter.filter(function (e) {
                          return a.queryFilter.includes(e);
                        })
                      )
                    : (a.queryFilter = t.queryFilter)),
                t.categoryTag &&
                  (a.categoryTag
                    ? (r = a.categoryTag).push.apply(
                        r,
                        t.categoryTag.filter(function (e) {
                          return a.categoryTag.includes(e);
                        })
                      )
                    : (a.categoryTag = t.categoryTag)),
                a
              );
            })
          : e;
      }
      var Me = (function () {
        function e(e, t) {
          (this.m_fnRequest = e), (this.m_fnBuildRequestKey = t), this.Reset();
        }
        return (
          (e.prototype.Reset = function () {
            (this.m_mapCache = N.C.map({}, { deep: !1 })),
              (this.m_mapInflightRequests = N.C.map());
          }),
          (e.prototype.Get = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this.m_fnBuildRequestKey.apply(this, e),
              r = this.m_mapCache,
              a = this.m_mapInflightRequests;
            if (r.has(n)) return r.get(n);
            a.get(n) ||
              (a.set(n, !0),
              this.m_fnRequest.apply(this, e).then(function (e) {
                r.set(n, e), a.delete(n);
              }));
          }),
          (e.prototype.BLoading = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this.m_fnBuildRequestKey.apply(this, e);
            return !!this.m_mapInflightRequests.get(n);
          }),
          e
        );
      })();
      var je = (function () {
        function e() {
          this.m_bCanClaimFreeItem = !1;
        }
        return (
          (e.Get = function () {
            return (
              this.s_SaleItemRewardsStore ||
                (this.s_SaleItemRewardsStore = new e()),
              this.s_SaleItemRewardsStore
            );
          }),
          (e.prototype.InitFreeItemReward = function (e) {
            (this.m_bCanClaimFreeItem = e.can_claim),
              (this.m_claimedFreeItemDef = e.reward_item),
              (this.m_rtNextClaimTime = e.next_claim_time),
              this.SetClaimTimer();
          }),
          (e.prototype.BCanClaimFreeSaleReward = function () {
            return !de.Get().BIsLoggedIn() || this.m_bCanClaimFreeItem;
          }),
          (e.prototype.GetClaimedSaleRewardItemDef = function () {
            return this.m_claimedFreeItemDef;
          }),
          (e.prototype.LoadCanClaimFreeSticker = function () {
            return Object(j.b)(this, void 0, void 0, function () {
              var t, n;
              return Object(j.e)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return de.Get().BIsLoggedIn()
                      ? ((t = l.a.Init(p.m)),
                        [
                          4,
                          p.p.CanClaimItem(de.Get().GetServiceTransport(), t),
                        ])
                      : [2];
                  case 1:
                    return (
                      1 == (n = e.sent()).GetEResult()
                        ? this.InitFreeItemReward(n.Body().toObject())
                        : console.error(
                            "Error when calling SaleItemRewardsService.CanClaimItem: EResult=${msgResponse.GetEResult()}"
                          ),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.ClaimFreeSaleItem = function () {
            return Object(j.b)(this, void 0, void 0, function () {
              var t, n, r;
              return Object(j.e)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return ((t = { eResult: 2, strMessage: "" }),
                    de.Get().BIsLoggedIn())
                      ? ((n = l.a.Init(p.n)),
                        [4, p.p.ClaimItem(de.Get().GetServiceTransport(), n)])
                      : [
                          2,
                          (t = {
                            eResult: 21,
                            strMessage: Object(E.f)("#Redeem_SignIn"),
                          }),
                        ];
                  case 1:
                    return (
                      (r = e.sent()),
                      (t.eResult = r.GetEResult()),
                      1 == r.GetEResult()
                        ? ((this.m_claimedFreeItemDef = r
                            .Body()
                            .reward_item()
                            .toObject()),
                          de
                            .Get()
                            .GetCommunityItemInventory(
                              this.m_claimedFreeItemDef.appid
                            ),
                          (this.m_bCanClaimFreeItem = !1),
                          (this.m_rtNextClaimTime = r.Body().next_claim_time()),
                          this.SetClaimTimer())
                        : (10 == r.GetEResult() &&
                            (t.strMessage = Object(E.f)(
                              "#SummerSale_Redeem_Busy"
                            )),
                          console.error(
                            "Error when calling SaleItemRewardsService.ClaimItem: EResult=" +
                              r.GetEResult()
                          )),
                      [2, t]
                    );
                }
              });
            });
          }),
          (e.prototype.GetNextClaimTime = function () {
            return this.m_rtNextClaimTime
              ? new Date(1e3 * this.m_rtNextClaimTime)
              : null;
          }),
          (e.prototype.SetClaimTimer = function () {
            var e,
              t,
              n,
              r = this;
            this.m_claimTimer ||
              (this.m_rtNextClaimTime &&
                ((e = Date.now()),
                (t = new Date(1e3 * this.m_rtNextClaimTime)),
                (n = Math.max(0, t.getTime() - e)),
                (this.m_claimTimer = window.setTimeout(
                  function () {
                    (r.m_claimTimer = void 0),
                      Date.now() > t.getTime()
                        ? (r.m_bCanClaimFreeItem = !0)
                        : r.SetClaimTimer();
                  },
                  3e5 < n ? n / 2 : n
                ))));
          }),
          Object(j.c)([N.C], e.prototype, "m_bCanClaimFreeItem", void 0),
          Object(j.c)([N.C], e.prototype, "m_claimedFreeItemDef", void 0),
          Object(j.c)([N.C], e.prototype, "m_rtNextClaimTime", void 0),
          e
        );
      })();
    },
    px4M: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/patron_badge.png?v=valveisgoodatcaching";
    },
    qX6Y: function (e, t, n) {
      e.exports = {
        Shell: "rewarditemsection_Shell_3pxDW",
        ShellScrollParent: "rewarditemsection_ShellScrollParent_KL8ER",
        ShellHeader: "rewarditemsection_ShellHeader_1rWvB",
        ShellHeaderBrandLink: "rewarditemsection_ShellHeaderBrandLink_2Mt9X",
        PointsContainer: "rewarditemsection_PointsContainer__Cbnb",
        AppFilterContainer: "rewarditemsection_AppFilterContainer_1pCqF",
        HeaderVerticalDivider: "rewarditemsection_HeaderVerticalDivider_1-daE",
        AppFilterLabel: "rewarditemsection_AppFilterLabel_xcyDr",
        AppFilterIconContainer:
          "rewarditemsection_AppFilterIconContainer_2RDJg",
        AppFilterIcon: "rewarditemsection_AppFilterIcon_ZDxAf",
        FilterInUse: "rewarditemsection_FilterInUse_2DH-W",
        RewardsPointsIcon: "rewarditemsection_RewardsPointsIcon_2Fnew",
        YourBalanceLabel: "rewarditemsection_YourBalanceLabel_1Ezga",
        RewardsPointsCount: "rewarditemsection_RewardsPointsCount_FMNz0",
        ShellHeaderBrandName: "rewarditemsection_ShellHeaderBrandName_5pV-f",
        SvgOverrideColor: "rewarditemsection_SvgOverrideColor_3Qlmf",
        ItemHoverZIndex: "rewarditemsection_ItemHoverZIndex_2E7X9",
        ActionButton: "rewarditemsection_ActionButton_2c38-",
        Icon: "rewarditemsection_Icon_3fFEW",
        Section: "rewarditemsection_Section_1st6-",
        Header: "rewarditemsection_Header_2tr21",
        TitlesContainer: "rewarditemsection_TitlesContainer_ZRG9m",
        TopRow: "rewarditemsection_TopRow_18BZr",
        SectionLine: "rewarditemsection_SectionLine_3Zbig",
        Actions: "rewarditemsection_Actions_o7ucc",
        Body: "rewarditemsection_Body_3LoKg",
        SectionTitle: "rewarditemsection_SectionTitle_1U-QF",
        SectionSubtitle: "rewarditemsection_SectionSubtitle_1Cqzt",
      };
    },
    qY0t: function (e, t, n) {
      e.exports = {
        InlineContainer: "layout_InlineContainer_3nHer",
        RemoveOnEmpty: "layout_RemoveOnEmpty_1Y8hK",
      };
    },
    rKGf: function (e, t, n) {
      e.exports = {
        ItemContainer: "scrollabletabs_ItemContainer_25fHe",
        Accent: "scrollabletabs_Accent_1EEzv",
        Item: "scrollabletabs_Item_1cVR_",
        Active: "scrollabletabs_Active_O_UvE",
      };
    },
    sf1Z: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/csgoChat_128_defuse.png?v=valveisgoodatcaching";
    },
    uOv9: function (e, t, n) {
      e.exports = {
        Shell: "index_Shell_3-cdk",
        ShellScrollParent: "index_ShellScrollParent_2FLKm",
        ShellHeader: "index_ShellHeader_1iZtn",
        ShellHeaderBrandLink: "index_ShellHeaderBrandLink_35pye",
        PointsContainer: "index_PointsContainer_3OuXv",
        AppFilterContainer: "index_AppFilterContainer_26hNv",
        HeaderVerticalDivider: "index_HeaderVerticalDivider_Igxd2",
        AppFilterLabel: "index_AppFilterLabel_3vYbC",
        AppFilterIconContainer: "index_AppFilterIconContainer_HT_HI",
        AppFilterIcon: "index_AppFilterIcon_3-SYz",
        FilterInUse: "index_FilterInUse_1uMhF",
        RewardsPointsIcon: "index_RewardsPointsIcon_o2WOQ",
        YourBalanceLabel: "index_YourBalanceLabel_2h1vw",
        RewardsPointsCount: "index_RewardsPointsCount_1mnC0",
        ShellHeaderBrandName: "index_ShellHeaderBrandName_lU9dG",
        SvgOverrideColor: "index_SvgOverrideColor_1Fzpr",
        ItemHoverZIndex: "index_ItemHoverZIndex_2DkS3",
        ActionButton: "index_ActionButton_2F_4Q",
        Icon: "index_Icon_2owVA",
        TempImage: "index_TempImage_2rzeD",
        PageContainer: "index_PageContainer_a8CX9",
        HeaderImage: "index_HeaderImage_3NJf1",
        HeaderText: "index_HeaderText_1xjPB",
        HeaderBannerContainer: "index_HeaderBannerContainer_jHVzr",
        SubHeaderText: "index_SubHeaderText_1RhQx",
        SectionTileContainer: "index_SectionTileContainer_3KJbT",
        SectionTitle: "index_SectionTitle_jlOQ0",
        SectionTitleSmall: "index_SectionTitleSmall_1OaBe",
        SectionSubtitle: "index_SectionSubtitle_3OwkA",
        ConvertionSectionTextContainer:
          "index_ConvertionSectionTextContainer_xaO4v",
        PointsConvertion: "index_PointsConvertion_5F9Az",
        AvatarImg: "index_AvatarImg_dheV8",
        AvatarProfile: "index_AvatarProfile_2hKS9",
        AvatarProfileMini: "index_AvatarProfileMini_D7gjl",
        FrameProfile: "index_FrameProfile_2JChr",
        AvatarImgProfile: "index_AvatarImgProfile_1vITo",
        UsePointsContainer: "index_UsePointsContainer_2sO6G",
        UsePointsIconContainer: "index_UsePointsIconContainer_2CP5z",
        scrollAnim: "index_scrollAnim_1nWkJ",
        UsePointsSvg: "index_UsePointsSvg_2pF3p",
        ScrollIcon: "index_ScrollIcon_2Ux9o",
        AwardsUiImg: "index_AwardsUiImg_31OtF",
        AwardBadgeContainer: "index_AwardBadgeContainer_2SDnX",
        AwardsApng: "index_AwardsApng_agnGA",
        AwardsHotTakeApng: "index_AwardsHotTakeApng_3Z7eg",
        SectionSubtitleBadge: "index_SectionSubtitleBadge_2sCku",
        SectionSubtitleLeftAlign: "index_SectionSubtitleLeftAlign_2NJT7",
        AwardsLink: "index_AwardsLink_iKicb",
        UsePointsAnim1: "index_UsePointsAnim1_3HjAa",
        flicker: "index_flicker_2zByL",
        UsePointsAnim2: "index_UsePointsAnim2_11wSW",
        UsePointsAnim3: "index_UsePointsAnim3_2glEr",
        UsePointsAnim4: "index_UsePointsAnim4_1wIT9",
        UsePointsAnim5: "index_UsePointsAnim5_3aFhd",
        UsePointsAnim6: "index_UsePointsAnim6_3tSZI",
        UsePointsAnim7: "index_UsePointsAnim7_zcRlc",
        UsePointsAnim8: "index_UsePointsAnim8_3czum",
        CollectionIcon: "index_CollectionIcon_GFe52",
        SectionIcons: "index_SectionIcons_10ulS",
        CollectionItemsContainer: "index_CollectionItemsContainer_3kjcS",
        ItemLeft: "index_ItemLeft_1pJRR",
        ItemLeftMid: "index_ItemLeftMid_1lzhO",
        ItemRightMid: "index_ItemRightMid_2-R8q",
        ItemFrame: "index_ItemFrame_DF7xw",
        ItemAvatar: "index_ItemAvatar_3HCug",
        ItemRight: "index_ItemRight_3u3H2",
        ItemValveRight: "index_ItemValveRight_3zLzO",
        ItemRightMidValve: "index_ItemRightMidValve_TMfMf",
        ItemFrameFriendsList: "index_ItemFrameFriendsList_36qTL",
        ItemFrameFriendsListContainer:
          "index_ItemFrameFriendsListContainer_32y5H",
        GoldenFriendsList: "index_GoldenFriendsList_3wLdE",
        GoldStar1: "index_GoldStar1_1YAI6",
        GoldStar2: "index_GoldStar2_ys-Nu",
        GoldStar3: "index_GoldStar3_2TLvu",
        GoldStar4: "index_GoldStar4_3udNE",
        GoldStar5: "index_GoldStar5_12SxH",
        FullWidthBackgroundForSection:
          "index_FullWidthBackgroundForSection_2vC_e",
        FullWidthBackgroundForSectionFadeUp:
          "index_FullWidthBackgroundForSectionFadeUp_JYeiC",
        CalloutContainer: "index_CalloutContainer_izuVi",
        CalloutIconContainer: "index_CalloutIconContainer_2eSc9",
        CalloutIcon: "index_CalloutIcon_26pAI",
        CalloutText: "index_CalloutText_1kgWz",
        FaqContainer: "index_FaqContainer_1UhgW",
        FaqTitle: "index_FaqTitle_16G14",
        FaqQuestion: "index_FaqQuestion_g7OCN",
        FaqAnswer: "index_FaqAnswer_2zL7n",
      };
    },
    ywEf: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/icon_showcase_16.svg?v=valveisgoodatcaching";
    },
    zaw7: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjEyMiIgdmlld0JveD0iMCAwIDExOSAxMjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNTkuNSAxOS41NDM3QzU1LjkzIDE5LjU0MzcgNTMuNTUgMTcuMTc0OCA1My41NSAxMy42MjE0VjUuOTIyMzNDNTMuNTUgMi4zNjg5MyA1NS45MyAwIDU5LjUgMEM2My4wNyAwIDY1LjQ1IDIuMzY4OTMgNjUuNDUgNS45MjIzM1YxMy42MjE0QzY1LjQ1IDE2LjU4MjUgNjMuMDcgMTkuNTQzNyA1OS41IDE5LjU0MzdaTTczLjc4IDExNi4wNzhDNzMuNzggMTEyLjUyNCA3MS40IDExMC4xNTUgNjcuODMgMTEwLjE1NUg1MS4xN0M0Ny42IDExMC4xNTUgNDUuMjIgMTEyLjUyNCA0NS4yMiAxMTYuMDc4QzQ1LjIyIDExOS42MzEgNDcuNiAxMjIgNTEuMTcgMTIySDY3LjgzQzcxLjQgMTIyIDczLjc4IDExOS42MzEgNzMuNzggMTE2LjA3OFpNMzIuNzI1IDI5LjAxOTRDMzUuMTA1IDI2LjY1MDUgMzUuMTA1IDIzLjA5NzEgMzIuNzI1IDIwLjcyODJMMjcuMzcgMTUuMzk4MUMyNC45OSAxMy4wMjkxIDIxLjQyIDEzLjAyOTEgMTkuMDQgMTUuMzk4MUMxNi42NiAxNy43NjcgMTYuNjYgMjEuMzIwNCAxOS4wNCAyMy42ODkzTDI0LjM5NSAyOS4wMTk0QzI2Ljc3NSAzMS4zODgzIDMwLjM0NSAzMS4zODgzIDMyLjcyNSAyOS4wMTk0Wk05NC42MDUgMjkuMDE5NEw5OS45NiAyMy42ODkzQzEwMi4zNCAyMS4zMjA0IDEwMi4zNCAxNy43NjcgOTkuOTYgMTUuMzk4MUM5Ny41OCAxMy4wMjkxIDk0LjAxIDEzLjAyOTEgOTEuNjMgMTUuMzk4MUw4Ni4yNzUgMjAuNzI4MkM4My44OTUgMjMuMDk3MSA4My44OTUgMjYuNjUwNSA4Ni4yNzUgMjkuMDE5NEM4OC4wNiAzMS4zODgzIDkyLjIyNSAzMS4zODgzIDk0LjYwNSAyOS4wMTk0Wk0xMTkgNTUuMDc3N0MxMTkgNTEuNTI0MyAxMTYuNjIgNDkuMTU1MyAxMTMuMDUgNDkuMTU1M0gxMDUuMzE1QzEwMS43NDUgNDkuMTU1MyA5OS4zNjUgNTEuNTI0MyA5OS4zNjUgNTUuMDc3N0M5OS4zNjUgNTguNjMxMSAxMDEuNzQ1IDYxIDEwNS4zMTUgNjFIMTEzLjA1QzExNi42MiA2MSAxMTkgNTguNjMxMSAxMTkgNTUuMDc3N1pNMTkuNjM1IDU1LjA3NzdDMTkuNjM1IDUxLjUyNDMgMTcuMjU1IDQ5LjE1NTMgMTMuNjg1IDQ5LjE1NTNINS45NUMyLjM4IDQ5LjE1NTMgMCA1MS41MjQzIDAgNTUuMDc3N0MwIDU4LjYzMTEgMi4zOCA2MSA1Ljk1IDYxSDEzLjY4NUMxNy4yNTUgNjEgMTkuNjM1IDU4LjYzMTEgMTkuNjM1IDU1LjA3NzdaTTc5LjczIDM0Ljk0MTdDNzMuNzggMzAuMjAzOSA2Ny4yMzUgMjcuODM0OSA1OS41IDI3LjgzNDlDNTcuMTIgMjcuODM0OSA1NC4xNDUgMjguNDI3MiA1MS43NjUgMjkuMDE5NEMzNC41MSAzMy4xNjUgMjMuOCA1MC4zMzk4IDI4LjU2IDY4LjEwNjhDMzAuOTQgNzYuOTkwMyAzNi4yOTUgODQuMDk3MSA0NC4wMyA4OC4yNDI3Vjk2LjUzNEM0NC4wMyAxMDAuMDg3IDQ2LjQxIDEwMi40NTYgNDkuOTggMTAyLjQ1Nkg2OS42MTVDNzMuMTg1IDEwMi40NTYgNzUuNTY1IDEwMC4wODcgNzUuNTY1IDk2LjUzNFY4OC44MzQ5QzkxLjAzNSA3OS45NTE1IDk2Ljk4NSA2MC40MDc4IDg4LjA2IDQ1LjAwOTdDODUuNjggNDAuODY0MSA4My4zIDM3LjMxMDcgNzkuNzMgMzQuOTQxN1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1OS41IiB5MT0iMCIgeDI9IjU5LjUiIHkyPSIxMjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
  },
]);

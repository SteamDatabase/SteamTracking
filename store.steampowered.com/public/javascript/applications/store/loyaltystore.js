/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    "++az": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/Entering_vr.gif?v=valveisgoodatcaching";
    },
    "+9fn": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return d;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("exH9"),
        s = n("qbgq"),
        l = n("qX6Y"),
        c = function (e) {
          var t = e.title,
            n = e.subtitle,
            a = e.leftActions,
            r = e.rightActions,
            o = e.children,
            s = t || n || a || r;
          return i.a.createElement(
            "div",
            { className: l.Section },
            s &&
              i.a.createElement(
                "div",
                { className: l.Header },
                i.a.createElement(
                  "div",
                  { className: l.TitlesContainer },
                  i.a.createElement(
                    "div",
                    { className: l.TopRow },
                    i.a.createElement("div", { className: l.SectionTitle }, t),
                    a && i.a.createElement("div", { className: l.Actions }, a),
                    i.a.createElement("div", { className: l.SectionLine }),
                    r && i.a.createElement("div", { className: l.Actions }, r)
                  ),
                  i.a.createElement("div", { className: l.SectionSubtitle }, n)
                )
              ),
            i.a.createElement("div", { className: l.Body }, o)
          );
        },
        m = function (e) {
          var t = e.className,
            n = Object(a.f)(e, ["className"]);
          return i.a.createElement(
            s.a,
            Object(a.a)({ className: Object(o.a)(t, l.ActionButton) }, n)
          );
        },
        d = function (e) {
          var t = e.className,
            n = Object(a.f)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object(a.a)({ className: Object(o.a)(t, l.SectionCallout) }, n)
          );
        };
    },
    "+j4l": function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return Ie;
      }),
        n.d(t, "c", function () {
          return Ce;
        }),
        n.d(t, "d", function () {
          return ve;
        }),
        n.d(t, "b", function () {
          return we;
        }),
        n.d(t, "a", function () {
          return Je;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("2vnA"),
        s = n("TyAF"),
        l = n("opsS"),
        c = n("55Ip"),
        m = n("oydz"),
        d = n("Jqb/"),
        u = n("TLQK"),
        p = n("prdU"),
        f = (n("li7h"), n("OU48"), n("0xSo"), n("ka0M")),
        _ = n("X3Ds"),
        h = n("lkRc"),
        g = n("FwEH"),
        b = n("pQ8y"),
        y = n("r64O"),
        I = n("StxQ"),
        C = n("n4wG"),
        v = n("1fPh"),
        w = (n("mgoM"), n("6Y59")),
        M = n("exH9"),
        N = { success: !0, result: 1 },
        j = (function () {
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
                  return N;
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
            (e.prototype.BIsSubscribedApp = function (e) {
              var t = this;
              if (this.m_mapCacheSubscribedApp.has(e))
                return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
              var n = { message: "IsSubscribedApp", appid: e };
              return this.GenericEResultCall(n).then(function (n) {
                if (!n.connect_failed) {
                  var a = 1 == n.result;
                  return t.m_mapCacheSubscribedApp.set(e, a), a;
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
                !h.k.logged_in ||
                h.k.accountid == this.m_connection.ClientInfo.unAccountID
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
                            ? N
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
            (e.prototype.SendMsgAndAwaitResponse = function (e) {
              var t = this;
              return new Promise(function (n, a) {
                var r = t.m_iCallSeq++;
                t.BSendMsg(e, r)
                  ? t.m_mapWaitingCallbacks.set(r, {
                      iSeq: r,
                      fnCallback: n,
                      fnError: a,
                    })
                  : a();
              });
            }),
            (e.prototype.BSendMsg = function (e, t) {
              if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
                return !1;
              var n = Object.assign({}, e, {
                universe: h.d.EUNIVERSE,
                accountid: h.k.accountid,
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
              var e = this;
              if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
                return Promise.resolve();
              if (this.m_promiseConnect) return this.m_promiseConnect;
              var t = new Promise(function (t, n) {
                try {
                  e.m_socket = new WebSocket(
                    "ws://127.0.0.1:27060/clientsocket/"
                  );
                } catch (t) {
                  return (e.m_bSecurityException = !0), void n(t);
                }
                (e.m_socket.onerror = function (e) {
                  n();
                }),
                  (e.m_socket.onmessage = e.OnSocketMessage.bind(e)),
                  (e.m_socket.onopen = function () {
                    e.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                      .then(function (a) {
                        1 == a.success
                          ? ((e.m_ClientInfo.ulVersion = a.clientversion),
                            (e.m_ClientInfo.bFriendsUIEnabled = !!a.friendsui),
                            (e.m_ClientInfo.unAccountID = a.accountid),
                            a.supported_messages &&
                              (e.m_ClientInfo.rgSupportedMessages =
                                a.supported_messages),
                            t())
                          : n();
                      })
                      .catch(n);
                  });
              });
              return (
                (this.m_promiseConnect = t),
                this.m_promiseConnect
                  .then(function () {
                    (e.m_bReady = !0), (e.m_promiseConnect = void 0);
                  })
                  .catch(function () {
                    (e.m_bClientConnectionFailed = !0),
                      (e.m_promiseConnect = void 0);
                  }),
                this.m_promiseConnect
              );
            }),
            e
          );
        })(),
        S = new j();
      window.ClientConnectionAPI = S;
      var O = n("Uy/A"),
        A = n.n(O),
        D = n("bS9Q"),
        P = n("YgaH"),
        x = n("POwH"),
        L = n.n(x),
        B = n("YyVH");
      function R(e, t, n) {
        return h.d.COMMUNITY_CDN_ASSET_URL + e + "/roomeffects/" + t + "/" + n;
      }
      var k = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n.m_strSaleId = n.props.sale), n;
        }
        return (
          Object(a.d)(t, e),
          (t.prototype.getAsset = function (e) {
            return R(this.m_strSaleId, this.props.effect.name, e);
          }),
          t
        );
      })(r.Component);
      function T(e, t) {
        var n, a;
        (n = function () {
          return setTimeout(e, t);
        }),
          (a = Object(r.useRef)({ bSet: !1 })).current.bSet ||
            (a.current = { bSet: !0, value: n() }),
          a.current.value;
      }
      var G = function (e) {
        var t = e.msDelay,
          n = e.children;
        return (function (e) {
          var t = Object(r.useState)(!1),
            n = t[0],
            a = t[1];
          return (
            T(function () {
              return a(!0);
            }, e),
            n
          );
        })(t)
          ? i.a.createElement(i.a.Fragment, null, n)
          : null;
      };
      var z = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (
            (n.m_refContainer = i.a.createRef()),
            (n.m_rgFireworks = []),
            (n.m_nCurrentDelay = 0),
            (n.state = { bReady: !1 }),
            n
          );
        }
        return (
          Object(a.d)(t, e),
          (t.prototype.CreateFireworks = function (e) {
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
          (t.prototype.TestRender = function (e) {
            Object(B.b)(0, 70), Object(B.b)(0, 70);
            for (var t = 0; t < 1; t++)
              this.m_rgFireworks.push({
                x: "20%",
                y: "20%",
                nHueRotation: 0,
                nDelay: this.m_nCurrentDelay,
                flScale: e,
                burst: F,
              }),
                (this.m_nCurrentDelay += 500);
            this.m_rgFireworks.push({
              x: "0%",
              y: "0%",
              nHueRotation: 0,
              nDelay: this.m_nCurrentDelay,
              flScale: e,
              burst: H,
            }),
              this.m_rgFireworks.push({
                x: "30%",
                y: "30%",
                nHueRotation: 0,
                nDelay: this.m_nCurrentDelay,
                flScale: e,
                burst: U,
              });
          }),
          (t.prototype.CalcHueRotation = function () {
            return "lny2020" == this.props.sale
              ? 360 + Object(B.b)(-30, 10)
              : Object(B.b)(0, 360);
          }),
          (t.prototype.AddCluster = function (e) {
            var t = Object(B.b)(-5, 50),
              n = Object(B.b)(-10, 50),
              a = this.CalcHueRotation();
            this.m_rgFireworks.push({
              x: t + "%",
              y: n + "%",
              nHueRotation: a,
              nDelay: this.m_nCurrentDelay,
              flScale: e,
              burst: H,
            });
            for (
              var r = Math.random() * Math.PI * 2,
                i = Math.floor(64 * e),
                o = Math.floor(60 * e),
                s = Math.floor(10 * e),
                l = 0,
                c = 0;
              c < 3;
              c++
            ) {
              var m =
                  "calc( " + t + "% + " + (i + Math.cos(r + l) * o) + "px )",
                d =
                  "calc( " +
                  n +
                  "% + " +
                  (i + (Math.sin(r + l) * o + s)) +
                  "px )";
              c < 2 && (this.m_nCurrentDelay += 200),
                (a = this.CalcHueRotation()),
                this.m_rgFireworks.push({
                  x: m,
                  y: d,
                  nHueRotation: a,
                  nDelay: this.m_nCurrentDelay,
                  flScale: e,
                  burst: U,
                }),
                (l += 2.09);
            }
          }),
          (t.prototype.RenderLong = function (e) {
            var t = Object(B.b)(20, 60),
              n = Object(B.b)(-5, 50),
              a = this.CalcHueRotation();
            this.m_rgFireworks.push({
              x: t + "%",
              y: n + "%",
              nHueRotation: a,
              nDelay: this.m_nCurrentDelay,
              flScale: e,
              burst: F,
            });
          }),
          (t.prototype.componentDidMount = function () {
            if (
              this.m_refContainer.current &&
              !(this.m_rgFireworks.length > 0)
            ) {
              var e = this.m_refContainer.current,
                t = e.offsetWidth,
                n = e.offsetHeight,
                a = Object(B.c)(t, 400, 1080, 0.5, 2);
              (a = Object(B.a)(a, 0.5, 2)),
                console.log(t, n, a),
                this.CreateFireworks(a),
                this.setState({ bReady: !0 });
            }
          }),
          (t.prototype.render = function () {
            var e = this,
              t = [];
            return (
              this.state.bReady &&
                this.m_rgFireworks.map(function (n, a) {
                  var r = "" + a,
                    o = {
                      top: n.y,
                      left: n.x,
                      filter: "hue-rotate(" + n.nHueRotation + "deg)",
                    };
                  t.push(
                    i.a.createElement(n.burst, {
                      key: r,
                      style: o,
                      msDelay: n.nDelay,
                      scale: n.flScale,
                      sale: e.props.sale,
                    })
                  );
                }),
              i.a.createElement(
                "div",
                { ref: this.m_refContainer, className: L.a.FireworkContainer },
                t
              )
            );
          }),
          t
        );
      })(i.a.Component);
      function F(e) {
        var t = R(e.sale, "fireworks", "long_sheet.png"),
          n = e.style;
        return (
          (n.backgroundImage = "url(" + t + ")"),
          (n.width = 256),
          (n.height = 256),
          (n.animation =
            L.a.fireworkLongX +
            " 0.2s steps(9) 10, " +
            L.a.fireworkLongY +
            " 2.0s steps(10) forwards"),
          (n.transformOrigin = "0 0"),
          (n.transform = "scale( " + e.scale + " )"),
          i.a.createElement(
            G,
            { msDelay: e.msDelay },
            i.a.createElement("div", {
              style: e.style,
              className: L.a.FireworkPNG,
            })
          )
        );
      }
      function H(e) {
        var t = R(e.sale, "fireworks", "big_sheet.png"),
          n = e.style;
        return (
          (n.backgroundImage = "url(" + t + ")"),
          (n.width = 256),
          (n.height = 256),
          (n.animation =
            L.a.fireworkBigX +
            " 0.2s steps(9) 4, " +
            L.a.fireworkBigY +
            " 0.8s steps(4) forwards"),
          (n.transformOrigin = "0 0"),
          (n.transform = "scale( " + e.scale + " )"),
          i.a.createElement(
            G,
            { msDelay: e.msDelay },
            i.a.createElement("div", {
              style: e.style,
              className: L.a.FireworkPNG,
            })
          )
        );
      }
      function U(e) {
        var t = R(e.sale, "fireworks", "small_sheet.png"),
          n = e.style;
        return (
          (n.backgroundImage = "url(" + t + ")"),
          (n.width = 256),
          (n.height = 256),
          (n.animation =
            L.a.fireworkSmallX +
            " 0.15s steps(10) 6, " +
            L.a.fireworkSmallY +
            " 0.9s steps(6) forwards"),
          (n.transformOrigin = "0 0"),
          (n.transform = "scale( " + e.scale / 2 + " )"),
          i.a.createElement(
            G,
            { msDelay: e.msDelay },
            i.a.createElement("div", {
              style: e.style,
              className: L.a.FireworkPNG,
            })
          )
        );
      }
      var Z = n("oet2"),
        V = (function (e) {
          function t(n) {
            var a = this;
            return (
              ((a = e.call(this, n) || this).m_x = B.b(0, 70) + "%"),
              (a.m_y = B.b(0, 70) + "%"),
              (a.m_nRotate = Math.floor(90 * Math.random()) - 45),
              (a.m_splatRots = [
                360 * Math.random(),
                360 * Math.random(),
                360 * Math.random(),
              ]),
              (a.m_nPathAnimation = B.b(1, 6)),
              (a.m_nKeyID = t.sm_nUnique++),
              (a.m_strSaleId = "winter2019"),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.fragment = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var a = t.map(function (e) {
                return L.a[e];
              });
              return (
                a.push(L.a.snowball_fragment),
                r.createElement("img", {
                  src: this.getAsset(e),
                  className: a.join(" "),
                })
              );
            }),
            (t.prototype.Snowball = function (e, t) {
              for (var n = [], a = 2; a < arguments.length; a++)
                n[a - 2] = arguments[a];
              var i = e < 0 ? L.a.SnowballImageCW : L.a.SnowballImageCCW;
              e > -5 && e < 5 && (i = "");
              var o = n.map(function (e) {
                return L.a[e];
              });
              return (
                o.push(L.a.snowball_fragment),
                r.createElement(
                  "div",
                  {
                    style: { display: "inline-block" },
                    className: o.join(" "),
                  },
                  r.createElement("img", {
                    style: { transform: "rotation( 360deg )" },
                    className: L.a.SnowballImage + " " + i,
                    src: this.getAsset(t),
                  })
                )
              );
            }),
            (t.prototype.residue = function () {
              return r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "div",
                  {
                    style: {
                      transform: "rotate(" + this.m_splatRots[0] + "deg)",
                    },
                  },
                  this.fragment("splat1.png", "snowball-residue")
                ),
                r.createElement(
                  "div",
                  {
                    style: {
                      transform: "rotate(" + this.m_splatRots[1] + "deg)",
                    },
                  },
                  this.fragment("splat2.png", "snowball-residue")
                ),
                r.createElement(
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
            (t.prototype.render = function () {
              var e = "snowball-path-" + this.m_nPathAnimation,
                t = { animationName: L.a[e] };
              return r.createElement(
                r.Fragment,
                { key: "" + this.m_nKeyID },
                r.createElement(
                  "div",
                  { className: L.a["snowball-path"], style: t },
                  r.createElement(
                    "div",
                    {
                      className: L.a["snowball-container"],
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
            (t.sm_nUnique = 0),
            t
          );
        })(k),
        W = n("Kw0F");
      function Y(e) {
        var t = e.data,
          n = R(e.sale, e.effect.name, t.strImage + ".png"),
          a = null;
        if (t.SOverlay) {
          var i = t.SOverlay
              ? R(e.sale, e.effect.name, t.SOverlay.strImage + ".png")
              : null,
            o = { animationDuration: t.SOverlay.nDuration + "s" };
          a = r.createElement("img", {
            src: i,
            className: L.a[t.SOverlay.strClass],
            style: o,
          });
        }
        var s = {
          animationDuration: t.nDuration + "s",
          animationName: L.a[t.strAnimation],
          marginLeft: t.nOffset + "%",
        };
        return r.createElement(
          "div",
          { style: s, className: L.a.balloons },
          r.createElement("img", {
            src: n,
            style: { maxWidth: "100%", position: "absolute" },
          }),
          a
        );
      }
      var Q = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            switch (((n.m_rgBalloons = []), (n.m_nNextImage = 0), t.sale)) {
              case "lny2020":
                n.m_rgImages = ["orange", "peach", "yellow"];
                break;
              default:
                n.m_rgImages = [
                  "balloon_blue",
                  "balloon_cyan",
                  "balloon_green",
                  "balloon_purple",
                  "balloon_red",
                  "balloon_yellow",
                ];
            }
            return W.f(n.m_rgImages), n.GenerateBalloons(), n;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetNextImage = function () {
              var e = this.m_rgImages[
                this.m_nNextImage % this.m_rgImages.length
              ];
              return this.m_nNextImage++, e;
            }),
            (t.prototype.GenerateDuration = function () {
              return (
                parseFloat(L.a.balloonsDurationS) +
                parseFloat(L.a.balloonsDurationJitterS) * Math.random()
              );
            }),
            (t.prototype.GenerateBalloons = function () {
              this.m_rgBalloons = [];
              for (
                var e = 0,
                  t = ["balloon_small_1", "balloon_small_2", "balloon_small_3"];
                e < t.length;
                e++
              ) {
                var n = t[e],
                  a = B.b(-10, 10);
                this.m_rgBalloons.push(this.GenerateSingleBalloon(n, a));
              }
              var r = [70, 20];
              W.f(r);
              for (
                var i = 20 == r[1],
                  o = 0,
                  s = ["balloon_big_1", "balloon_big_2"];
                o < s.length;
                o++
              ) {
                n = s[o];
                var l = B.b(-10, 10) + r.pop();
                this.m_rgBalloons.push(this.GenerateSingleBalloon(n, l));
              }
              var c = ["balloon_move_left", "balloon_move_right"][B.b(0, 1)];
              i && (c = "balloon_move_left");
              var m = B.b(-10, 10);
              this.m_rgBalloons.push(this.GenerateSingleBalloon(c, m));
            }),
            (t.prototype.GenerateSingleBalloon = function (e, t) {
              var n = this.GetNextImage(),
                a = {
                  strAnimation: e,
                  strImage: n,
                  nDuration: this.GenerateDuration(),
                  nOffset: t,
                };
              return (
                "lny2020" == this.props.sale &&
                  (a.SOverlay = {
                    strImage: n + "-glow",
                    strClass: "lantern_glow",
                    nDuration: 1 + 4 * Math.random(),
                  }),
                a
              );
            }),
            (t.prototype.render = function () {
              var e = this;
              return r.createElement(
                r.Fragment,
                null,
                this.m_rgBalloons.map(function (t, n) {
                  return r.createElement(Y, {
                    key: "" + n,
                    data: t,
                    effect: e.props.effect,
                    sale: e.m_strSaleId,
                  });
                })
              );
            }),
            t
          );
        })(k),
        q = (function () {
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
      function J(e) {
        var t = new q(e),
          n = 0.8 * t.next() + 0.5,
          a = 10 * (t.next() + e) + 10 + "px",
          i = {
            opacity: n,
            width: a,
            height: a,
            margin: 30 * t.next() + 15 + "px",
            filter:
              "hue-rotate(" + (90 * t.next() - 30) + "deg) saturate(100%)",
          },
          o = 1 + Math.floor(5 * t.next()),
          s =
            h.d.COMMUNITY_CDN_ASSET_URL +
            "winter2019/roomeffects/96px/flake_" +
            o +
            ".png";
        return r.createElement("img", { style: i, src: s });
      }
      var X = parseInt(L.a.balloonsDurationMaxMs),
        K = parseInt(L.a.snowballDurationMs);
      function $(e, t) {
        return function () {
          var n =
            h.d.COMMUNITY_CDN_ASSET_URL + t + "/roomeffects/96px/" + e + ".png";
          return r.createElement("img", { style: { width: "100%" }, src: n });
        };
      }
      function ee(e, t, n, a) {
        return {
          timeout: n,
          renderButton: $(e, t),
          renderEffectIcon: $(e, t),
          buttonToken: "#ChatEntryButton_Send" + D.e(e),
          locToken: "#ChatRoom_RoomEffect" + D.e(e),
          render: a,
        };
      }
      function te(e, t, n) {
        return ee(e, "winter2019", t, n);
      }
      var ne = {
          lny2020_lanterns: ee("lny2020_lanterns", "lny2020", X, function (e) {
            return r.createElement(Q, { effect: e, sale: "lny2020" });
          }),
          lny2020_firework: ee("lny2020_firework", "lny2020", 7e3, function () {
            return r.createElement(z, { sale: "lny2020" });
          }),
          lny2020_confetti: ee("lny2020_confetti", "lny2020", Z.c, function () {
            return r.createElement(Z.a, { eType: Z.b.LNY2020 });
          }),
          snowball: te("snowball", K, function (e) {
            return r.createElement(V, { effect: e, sale: "winter2019" });
          }),
          balloons: te("balloons", X, function (e) {
            return r.createElement(Q, { effect: e, sale: "winter2019" });
          }),
          confetti: te("confetti", Z.c, function () {
            return r.createElement(Z.a, { eType: Z.b.Default });
          }),
          goldfetti: te("goldfetti", Z.c, function () {
            return r.createElement(Z.a, { eType: Z.b.Gold });
          }),
          firework: te("firework", 7e3, function () {
            return r.createElement(z, { sale: "winter2019" });
          }),
          snow: te("snow", 1e4, function (e) {
            for (var t = [], n = new q(e.timestamp), a = 0; a < 150; a++) {
              var i = n.next(),
                o = {
                  left: 100 * n.next() + "%",
                  animationDuration: 3 * (1 - i) + 4 + "s",
                  animationDelay: i + 4 * n.next() + "s",
                };
              t.push(
                r.createElement(
                  "div",
                  {
                    key: e.timestamp + "_" + a,
                    style: o,
                    className: Object(M.a)(
                      L.a.Snowflake,
                      L.a["Snowflake-" + (a % 20)]
                    ),
                  },
                  J(i),
                  J(i + 1)
                )
              );
            }
            return r.createElement(r.Fragment, null, " ", t, " ");
          }),
        },
        ae = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                "div",
                { className: L.a["animation-container"] },
                this.props.effectManager.m_rgRunningEffects.map(function (e) {
                  return r.createElement(
                    r.Fragment,
                    { key: e.timestamp },
                    e.render()
                  );
                })
              );
            }),
            (t = Object(a.c)([s.a], t))
          );
        })(r.Component),
        re = n("cOvF"),
        ie = n("Gpul"),
        oe = (n("jUCX"), n("oFam"), n("qD+2")),
        se = n("0OaU"),
        le = n("ehaW"),
        ce = n("9+KW");
      function me(e) {
        var t = e.link,
          n = e.className,
          r = Object(a.f)(e, ["link", "className"]),
          o = i.a.useState(!1),
          s = o[0],
          l = o[1];
        return i.a.createElement(
          "div",
          {
            title: Object(u.f)("#ToolTip_CopyLinkToClipboard"),
            className: Object(M.a)(ce.Button, n),
            onClick: function () {
              return (
                ((e = document.createElement("input")).value = t),
                (e.className = ce.HiddenInput),
                document.body.appendChild(e),
                e.select(),
                e.ownerDocument.execCommand("copy"),
                document.body.removeChild(e),
                void l(!0)
              );
              var e;
            },
          },
          i.a.createElement(
            re.s,
            Object(a.a)({}, r, {
              className: Object(M.a)(ce.Icon),
              "data-flash": s ? 1 : 0,
              onAnimationEnd: function () {
                return l(!1);
              },
            })
          )
        );
      }
      var de = n("qbgq"),
        ue = n("26vX");
      function pe(e) {
        return function (t) {
          var n = t.className,
            r = Object(a.f)(t, ["className"]);
          return i.a.createElement(
            de.a,
            Object(a.a)({ className: Object(M.a)(e, n) }, r)
          );
        };
      }
      var fe,
        _e = pe(ue.GrayButton),
        he = pe(ue.BlueButton),
        ge = pe(ue.GreenButton),
        be = n("mw7S"),
        ye = n("RV7a");
      n("sOw0");
      function Ie(e, t, n, a) {
        var i = {
          type: 1,
          rewardDefinition: t,
          itemLevel: n,
          desiredItemLevel: n,
        };
        Object(f.b)(
          r.createElement(je, { definition: i, saleitem: a }),
          e ? Object(_.n)(e) : window
        );
      }
      function Ce(e, t, n, a) {
        var i = {
          type: 3,
          profileCustomizationType: t,
          itemCount: n,
          itemLevel: a,
          desiredItemLevel: a,
        };
        Object(f.b)(
          r.createElement(je, { definition: i }),
          e ? Object(_.n)(e) : window
        );
      }
      function ve(e, t, n, a) {
        var i = {
          type: 2,
          profileCustomizationType: t,
          itemLevel: n,
          desiredItemLevel: a,
        };
        Object(f.b)(
          r.createElement(je, { definition: i }),
          e ? Object(_.n)(e) : window
        );
      }
      function we(e, t) {
        var n = { type: 1, rewardDefinition: t };
        Object(f.b)(
          r.createElement(Ee, { definition: n }),
          e ? Object(_.n)(e) : window
        );
      }
      function Me(e) {
        switch (e.type) {
          case 1:
            return p.b.Get().BCanRedeemPointsForItem(e.rewardDefinition);
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
      }
      function Ne(e) {
        switch (e.type) {
          case 1:
            return 1 == e.rewardDefinition.community_item_class
              ? p.b.Get().GetCostToLevelSeasonalBadge(e.itemLevel || 0)
              : 5 == e.rewardDefinition.type || 6 == e.rewardDefinition.type
              ? p.b.Get().GetBundleOfferForUser(e.rewardDefinition).point_cost
              : parseInt(e.rewardDefinition.point_cost);
          case 2:
            return p.b.Get().GetUpgradableProfileShowcaseCost();
          case 3:
            return p.b.Get().GetPurchasableProfileShowcaseSlotCost();
        }
        return 0;
      }
      var je = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.m_bShowTransitions = !1),
              (n.m_bIsMounted = !0),
              (n.state = { step: "loading", error: !1, requestInProgress: !1 }),
              (n.m_bShowTransitions = !0),
              (n.m_mutableObjDefinition = n.props.definition),
              n
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this;
              if (1 == this.m_mutableObjDefinition.type) {
                var t = this.m_mutableObjDefinition.rewardDefinition
                  .bundle_defids;
                Object(o.L)(function () {
                  var e;
                  return (
                    !t ||
                    0 == t.length ||
                    (e = p.b.Get()).GetRewardDefinitions.apply(e, t).length > 0
                  );
                })
                  .then(function () {
                    var n,
                      a = [];
                    0 != (null == t ? void 0 : t.length)
                      ? (a = (n = p.b.Get()).GetRewardDefinitions.apply(
                          n,
                          t
                        ).map(function (e) {
                          return e.appid;
                        }))
                      : a.push(e.m_mutableObjDefinition.rewardDefinition.appid);
                    var r = Array.from(new Set(a));
                    return Promise.all(
                      r.map(function (e) {
                        return p.b.Get().EnsureCommunityItemInventoryLoaded(e);
                      })
                    );
                  })
                  .then(function () {
                    return e.SetInitialState();
                  });
              } else this.SetInitialState();
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_bIsMounted = !1;
            }),
            (t.prototype.SetInitialState = function () {
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
            (t.prototype.BIsFreeSaleRewardItem = function () {
              return this.props.saleitem && p.b.Get().BIsSaleActive();
            }),
            (t.prototype.BCanRedeemPointsForItem = function () {
              return Me(this.props.definition);
            }),
            (t.prototype.BSkipToCantAfford = function () {
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
            (t.prototype.BAlreadyEquipped = function () {
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
            (t.prototype.BSkipToEquip = function () {
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
                    1 == this.props.definition.rewardDefinition.type ||
                    5 == this.props.definition.rewardDefinition.type ||
                    6 == this.props.definition.rewardDefinition.type
                  )
                )
              );
            }),
            (t.prototype.GetPointCost = function () {
              return Ne(this.props.definition);
            }),
            (t.prototype.BCanAffordItem = function () {
              return (
                p.b.Get().GetPointsAvailable().getLowBits() >=
                this.GetPointCost()
              );
            }),
            (t.prototype.ShowGenericError = function () {
              this.ShowError(
                Object(u.n)(
                  "#Redeem_Error_Generic",
                  r.createElement(
                    "a",
                    { href: h.d.HELP_BASE_URL },
                    Object(u.f)("#Redeem_Error_SteamSupport")
                  )
                )
              );
            }),
            (t.prototype.ShowError = function (e) {
              e && (this.m_strError = e),
                this.setState({ error: !0, requestInProgress: !1 });
            }),
            (t.prototype.RedeemPoints = function () {
              var e = this;
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
                      case 5:
                      case 6:
                        this.BIsFreeSaleRewardItem()
                          ? p.c
                              .Get()
                              .ClaimFreeSaleItem()
                              .then(function (t) {
                                var n;
                                1 == t.eResult
                                  ? ((e.m_mutableObjDefinition.rewardDefinition = p.c
                                      .Get()
                                      .GetClaimedSaleRewardItemDef()),
                                    e.setState({
                                      step: "equip",
                                      requestInProgress: !1,
                                    }))
                                  : (
                                      null === (n = t.strMessage) ||
                                      void 0 === n
                                        ? void 0
                                        : n.length
                                    )
                                  ? e.ShowError(t.strMessage)
                                  : e.ShowGenericError();
                              })
                              .catch(this.ShowGenericError)
                          : p.b
                              .Get()
                              .RedeemPointsForItem(
                                this.props.definition.rewardDefinition.defid,
                                this.props.definition.rewardDefinition.appid
                              )
                              .then(function (t) {
                                1 == t.eResult
                                  ? e.setState({
                                      step: "equip",
                                      requestInProgress: !1,
                                    })
                                  : t.strMessage.length
                                  ? e.ShowError(t.strMessage)
                                  : e.ShowGenericError();
                              })
                              .catch(this.ShowGenericError);
                        break;
                      case 4:
                        p.b
                          .Get()
                          .RedeemPointsForCoupon(
                            this.props.definition.rewardDefinition.defid
                          )
                          .then(function (t) {
                            1 == t.eResult
                              ? e.setState({
                                  step: "equip",
                                  requestInProgress: !1,
                                })
                              : e.ShowGenericError();
                          })
                          .catch(this.ShowGenericError);
                        break;
                      case 2:
                        var t = Math.max(
                          this.props.definition.itemLevel -
                            p.b.Get().GetUserSeasonalBadgeLevel(),
                          1
                        );
                        p.b
                          .Get()
                          .RedeemPointsForBadge(
                            this.props.definition.rewardDefinition.defid,
                            t
                          )
                          .then(function (t) {
                            1 == t.eResult
                              ? e.setState({
                                  step: "equip",
                                  requestInProgress: !1,
                                })
                              : t.strMessage.length
                              ? e.ShowError(t.strMessage)
                              : e.ShowGenericError();
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
                      .then(function (t) {
                        1 == t.eResult
                          ? (e.setState({ requestInProgress: !1 }),
                            e.CloseModal())
                          : t.strMessage.length
                          ? e.ShowError(t.strMessage)
                          : e.ShowGenericError();
                      })
                      .catch(this.ShowGenericError);
                    break;
                  case 3:
                    p.b
                      .Get()
                      .RedeemPointsForProfileShowcase(
                        this.props.definition.profileCustomizationType
                      )
                      .then(function (t) {
                        1 == t.eResult
                          ? e.CloseModal()
                          : t.strMessage.length
                          ? e.ShowError(t.strMessage)
                          : e.ShowGenericError();
                      })
                      .catch(this.ShowGenericError);
                }
              }
            }),
            (t.prototype.EquipItem = function () {
              var e = this;
              if (!this.state.requestInProgress) {
                this.setState({ requestInProgress: !0, error: !1 });
                var t = null;
                switch (
                  this.props.definition.rewardDefinition.community_item_class
                ) {
                  case 3:
                    t = p.b
                      .Get()
                      .SetProfileBackground(
                        this.props.definition.rewardDefinition
                      );
                    break;
                  case 14:
                    t = p.b
                      .Get()
                      .SetAvatarFrame(this.props.definition.rewardDefinition);
                    break;
                  case 15:
                    t = p.b
                      .Get()
                      .SetAnimatedAvatar(
                        this.props.definition.rewardDefinition
                      );
                    break;
                  case 13:
                    t = p.b
                      .Get()
                      .SetMiniProfileBackground(
                        this.props.definition.rewardDefinition
                      );
                    break;
                  case 8:
                    t = p.b
                      .Get()
                      .ActivateProfileModifier(
                        this.props.definition.rewardDefinition
                      );
                    break;
                  default:
                    return void Object(y.a)(
                      !1,
                      "Missing equip handler for item class " +
                        this.props.definition.rewardDefinition
                          .community_item_class
                    );
                }
                t.then(function (t) {
                  1 == t.eResult
                    ? e.setState({ step: "equipped", requestInProgress: !1 })
                    : e.ShowGenericError();
                }).catch(this.ShowGenericError);
              }
            }),
            (t.prototype.CloseModal = function () {
              this.props.closeModal && this.props.closeModal();
            }),
            (t.prototype.render = function () {
              var e,
                t = {
                  enter: m.RedeemModalEnter,
                  enterActive: m.RedeemModalEnterActive,
                  exit: m.RedeemModalExit,
                  exitActive: m.RedeemModalExitActive,
                };
              if ("loading" == this.state.step) return null;
              var n = Oe(this.props.definition),
                a = De(this.props.definition),
                i = this.props.definition.rewardDefinition
                  ? oe.a.GetAppInfo(
                      this.props.definition.rewardDefinition.appid
                    )
                  : null,
                o = [1, 5, 6].includes(
                  null === (e = this.props.definition.rewardDefinition) ||
                    void 0 === e
                    ? void 0
                    : e.type
                )
                  ? document.location +
                    "/reward/" +
                    this.props.definition.rewardDefinition.defid
                  : null;
              return r.createElement(
                d.h,
                {
                  onEscKeypress: this.CloseModal,
                  bHideCloseIcon: !0,
                  bDestructiveWarning: this.state.error,
                  hideTopBar: !1,
                },
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "div",
                    { className: m.ModalContainer },
                    r.createElement(Se, {
                      itemName: n,
                      itemClassName: a,
                      itemLink: o,
                      appInfo: i,
                      onRequestClose: this.CloseModal,
                    }),
                    this.m_strError &&
                      r.createElement(
                        "div",
                        { className: m.ErrorContainer },
                        this.m_strError
                      ),
                    r.createElement(
                      g.a,
                      null,
                      r.createElement(
                        b.a,
                        {
                          key: this.state.step,
                          enter: this.m_bShowTransitions,
                          exit: this.m_bShowTransitions,
                          classNames: t,
                          timeout: 500,
                        },
                        r.createElement(Ye, {
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
            Object(a.c)([l.a], t.prototype, "ShowGenericError", null),
            Object(a.c)([l.a], t.prototype, "ShowError", null),
            Object(a.c)([l.a], t.prototype, "RedeemPoints", null),
            Object(a.c)([l.a], t.prototype, "EquipItem", null),
            Object(a.c)([l.a], t.prototype, "CloseModal", null),
            (t = Object(a.c)([s.a], t))
          );
        })(r.Component),
        Ee = function (e) {
          var t = e.definition,
            n = e.closeModal,
            a = function () {},
            i = t.rewardDefinition
              ? oe.a.GetAppInfo(t.rewardDefinition.appid)
              : null;
          return r.createElement(
            d.h,
            { onEscKeypress: n, bHideCloseIcon: !0, hideTopBar: !1 },
            r.createElement(
              "div",
              null,
              r.createElement(
                "div",
                { className: m.ModalContainer },
                r.createElement(Se, {
                  itemName: Oe(t),
                  itemClassName: De(t),
                  appInfo: i,
                  onRequestClose: n,
                }),
                r.createElement(Ye, {
                  definition: t,
                  closeModal: n,
                  redeemPoints: a,
                  equipItem: a,
                  step: "preview",
                  bRequestInProgress: !1,
                })
              )
            )
          );
        },
        Se = Object(s.a)(function (e) {
          var t = e.itemName,
            n = e.itemClassName,
            a = e.itemLink,
            i = e.appInfo,
            o = e.onRequestClose;
          return r.createElement(
            "div",
            { className: m.HeaderContainer },
            r.createElement(
              "div",
              { className: m.Left },
              r.createElement(
                "div",
                { className: m.Header },
                t,
                a &&
                  r.createElement(me, { link: a, style: { marginLeft: "8px" } })
              ),
              r.createElement("div", { className: m.SubHeader }, n),
              i &&
                r.createElement(
                  c.b,
                  { to: v.b.LoyaltyStore() + "/app/" + i.appid, onClick: o },
                  r.createElement(
                    "div",
                    { className: m.SubHeaderAppContainer },
                    r.createElement("img", {
                      className: m.AppIcon,
                      src: i.icon_url,
                    }),
                    r.createElement(
                      "div",
                      { className: m.SubHeader },
                      " ",
                      i.name,
                      " "
                    )
                  )
                )
            ),
            p.b.Get().BIsLoggedIn() &&
              r.createElement(
                "div",
                { className: m.PointsContainer },
                r.createElement(w.O, { className: m.Icon }),
                r.createElement(
                  "div",
                  { className: m.BalanceColumn },
                  r.createElement(
                    "div",
                    { className: m.Balance },
                    Object(u.f)("#YourBalance")
                  ),
                  r.createElement(
                    "div",
                    { className: m.CurrentPoints },
                    p.b
                      .Get()
                      .GetPointsAvailable()
                      .getLowBits()
                      .toLocaleString(u.e.GetPreferredLocales())
                  )
                )
              )
          );
        }),
        Oe = function (e) {
          return 2 == e.type || 3 == e.type
            ? Object(u.f)(
                "#ProfileShowcases_ShowcaseName",
                Object(u.f)(
                  "#ProfileShowcases_Type_" + e.profileCustomizationType
                )
              )
            : Ae(e.rewardDefinition);
        },
        Ae = function (e) {
          if (1 == e.type)
            return (
              Object(y.a)(
                e.community_item_data,
                "Missing community item data for virtual item " + e.defid
              ),
              e.community_item_data.item_title
            );
          if (2 == e.type) return Object(u.f)("#Redeem_Badge_PrestigeBadge");
          if (5 == e.type) return e.community_item_data.item_title;
          if (6 == e.type) {
            var t = oe.a.GetAppInfo(e.appid).name || "";
            return Object(u.f)("#RewardBundle_AutoGeneratedBundleName", t);
          }
          return "Unknown";
        },
        De = function (e) {
          var t,
            n = e.type,
            a = e.itemLevel,
            r = e.desiredItemLevel,
            i = e.rewardDefinition;
          switch (n) {
            case 2:
              return Me(e)
                ? Object(u.f)("#ProfileShowcases_UpgradeLevel", a, r)
                : Object(u.f)("#ProfileShowcases_UpgradeAtMaxLevel", a);
            case 3:
              return Object(u.f)("#ProfileShowcases_AdditionalSlot");
            case 1:
              if (1 == i.type || 2 == i.type)
                return i.appid != p.b.Get().GetCurrentSeasonalAppID() &&
                  8 == i.community_item_class &&
                  0 !=
                    (null === (t = i.bundle_defids) || void 0 === t
                      ? void 0
                      : t.length)
                  ? Object(u.f)("#RewardItemType_ProfileBundle")
                  : Object(p.d)(i.community_item_class);
              if (5 == i.type || 6 == i.type)
                return Object(u.f)("#RewardItemType_Bundle");
          }
          return "";
        },
        Pe =
          (Object(s.a)(function (e) {
            var t = e.animatedAvatar,
              n = e.persona,
              i = e.strClassName,
              o = {
                size: "FillArea",
                statusPosition: "none",
                className: Object(M.a)(i, m.playerAvatar),
              };
            return r.createElement(
              ie.c,
              Object(a.a)({ persona: n, animatedAvatar: t }, o)
            );
          }),
          Object(s.a)(function (e) {
            var t = e.animatedAvatar,
              n = e.avatarFrame,
              i = e.persona,
              o = e.className,
              s = e.strAnimatedAvatarClassName,
              l = {
                size: "FillArea",
                statusPosition: "none",
                className: Object(M.a)(s, m.playerAvatar),
              };
            return r.createElement(
              "div",
              { className: o },
              r.createElement(
                ie.c,
                Object(a.a)({ persona: i, animatedAvatar: t }, l),
                r.createElement(ie.b, { profileItem: n })
              )
            );
          })),
        xe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_Chat")
                : "saleitem" == this.props.step
                ? r.createElement(
                    "div",
                    null,
                    Object(u.f)("#LunarSale2022_Redeem_Desc1"),
                    r.createElement("br", null),
                    r.createElement("br", null),
                    Object(u.f)("#LunarSale2022_Redeem_Desc2")
                  )
                : Object(u.f)("#Redeem_UsePoints_Sticker");
            }),
            (t.prototype.GetModalPreview = function () {
              if ("saleitem" == this.props.step)
                return r.createElement(
                  at,
                  { className: m.PreviewSummerSaleCtn, step: this.props.step },
                  r.createElement("img", {
                    className: m.SaleRewardImg,
                    alt: "Free Sale Item",
                    src: A.a,
                  })
                );
              var e = this.props.definition.rewardDefinition,
                t = {
                  backgroundImage:
                    "url(" +
                    h.d.MEDIA_CDN_COMMUNITY_URL +
                    "images/items/" +
                    e.appid +
                    "/" +
                    e.community_item_data.item_image_small +
                    ")",
                },
                n =
                  h.d.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.appid +
                  "/" +
                  e.community_item_data.item_image_large;
              return r.createElement(
                at,
                { className: m.PreviewChat, step: this.props.step },
                r.createElement("div", { className: m.LargePreview, style: t }),
                r.createElement(rt, { icon: n })
              );
            }),
            (t.prototype.render = function () {
              return r.createElement(
                st,
                {
                  className: Object(M.a)(
                    m.StickerPreviewContainer,
                    m.ChatPreviewContainer
                  ),
                },
                this.GetModalPreview(),
                r.createElement(ot, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                r.createElement(
                  nt,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  r.createElement(Xe, { closeModal: this.props.closeModal })
                )
              );
            }),
            t
          );
        })(r.Component),
        Le = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_Profile")
                : "equipped" == this.props.step
                ? r.createElement(
                    "div",
                    { className: m.EquippedDesc },
                    Object(u.n)(
                      "#Redeem_Equipped_Background",
                      r.createElement(
                        "span",
                        null,
                        this.props.definition.rewardDefinition
                          .community_item_data.item_title
                      )
                    )
                  )
                : Object(u.f)("#Redeem_UsePoints_Background");
            }),
            (t.prototype.GetPreview = function () {
              var e = this.props.definition.rewardDefinition,
                t = {
                  backgroundImage:
                    "url(" +
                    h.d.MEDIA_CDN_COMMUNITY_URL +
                    "images/items/" +
                    e.appid +
                    "/" +
                    e.community_item_data.item_image_large +
                    ")",
                },
                n = r.createElement("div", {
                  className: m.LargePreview,
                  style: t,
                });
              if (e.community_item_data.animated) {
                var a = e.community_item_data.item_movie_webm,
                  i = e.community_item_data.item_movie_mp4;
                n = r.createElement(
                  "video",
                  {
                    className: m.VideoPreview,
                    playsInline: !0,
                    loop: !0,
                    muted: !0,
                    autoPlay: !0,
                    controls: !1,
                  },
                  r.createElement("source", {
                    src:
                      h.d.MEDIA_CDN_COMMUNITY_URL +
                      "images/items/" +
                      e.appid +
                      "/" +
                      a,
                    type: "video/webm",
                  }),
                  r.createElement("source", {
                    src:
                      h.d.MEDIA_CDN_COMMUNITY_URL +
                      "images/items/" +
                      e.appid +
                      "/" +
                      i,
                    type: "video/mp4",
                  })
                );
              }
              return n;
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? r.createElement(Ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? r.createElement($e, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              return r.createElement(
                st,
                { className: m.BackgroundPreviewContainer },
                r.createElement(
                  at,
                  {
                    className: m.PreviewBackgroundContainer,
                    step: this.props.step,
                  },
                  r.createElement("div", { className: m.PreviewBackground }),
                  this.GetPreview()
                ),
                r.createElement(ot, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                r.createElement(
                  nt,
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
        })(r.Component),
        Be = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_Chat")
                : Object(u.f)("#Redeem_UsePoints_Emoticon");
            }),
            (t.prototype.render = function () {
              var e = this.props.definition.rewardDefinition,
                t =
                  h.d.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.appid +
                  "/" +
                  e.community_item_data.item_image_small,
                n = {
                  backgroundImage:
                    "url(" +
                    h.d.MEDIA_CDN_COMMUNITY_URL +
                    "images/items/" +
                    e.appid +
                    "/" +
                    e.community_item_data.item_image_large +
                    ")",
                };
              return r.createElement(
                st,
                {
                  className: Object(M.a)(
                    m.EmoticonPreviewContainer,
                    m.ChatPreviewContainer
                  ),
                },
                r.createElement(
                  at,
                  { className: m.PreviewChat, step: this.props.step },
                  r.createElement(
                    "div",
                    { className: m.LargePreviewContainer },
                    r.createElement("div", {
                      className: m.LargePreview,
                      style: n,
                    }),
                    r.createElement("div", {
                      className: m.LargePreview,
                      style: n,
                    }),
                    r.createElement("div", {
                      className: m.LargePreview,
                      style: n,
                    })
                  ),
                  r.createElement(rt, { icon: t })
                ),
                r.createElement(ot, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                r.createElement(
                  nt,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  r.createElement(Xe, { closeModal: this.props.closeModal })
                )
              );
            }),
            t
          );
        })(r.Component),
        Re = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.m_manager = new P.a(ne)), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetEffectTypeForDefinition = function () {
              return this.props.definition.rewardDefinition
                .internal_description;
            }),
            (t.prototype.GetEffectConfig = function () {
              return ne[this.GetEffectTypeForDefinition()];
            }),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.GetEffectTypeForDefinition();
              this.m_manager.AddRoomEffect(t),
                (this.m_interval = window.setInterval(function () {
                  return e.m_manager.AddRoomEffect(t);
                }, this.GetEffectConfig().timeout));
            }),
            (t.prototype.componentWillUnmount = function () {
              window.clearInterval(this.m_interval);
            }),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_Chat")
                : Object(u.f)("#Redeem_UsePoints_ChatEffect");
            }),
            (t.prototype.render = function () {
              return r.createElement(
                st,
                {
                  className: Object(M.a)(
                    m.EmoticonPreviewContainer,
                    m.ChatPreviewContainer
                  ),
                },
                r.createElement(
                  at,
                  { className: m.PreviewChat, step: this.props.step },
                  r.createElement(
                    "div",
                    { className: m.PreviewEffectContainer },
                    r.createElement(ae, { effectManager: this.m_manager })
                  ),
                  r.createElement(
                    rt,
                    null,
                    this.GetEffectConfig().renderButton()
                  )
                ),
                r.createElement(ot, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                r.createElement(
                  nt,
                  {
                    bRequestInProgress: this.props.bRequestInProgress,
                    definition: this.props.definition,
                    step: this.props.step,
                    closeModal: this.props.closeModal,
                    redeemPoints: this.props.redeemPoints,
                  },
                  r.createElement(Xe, { closeModal: this.props.closeModal })
                )
              );
            }),
            (t = Object(a.c)([s.a], t))
          );
        })(r.Component),
        ke = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_Profile")
                : "equipped" == this.props.step
                ? r.createElement(
                    "div",
                    { className: m.EquippedDesc },
                    Object(u.n)(
                      "#Redeem_Equipped_MiniProfile",
                      r.createElement(
                        "span",
                        null,
                        this.props.definition.rewardDefinition
                          .community_item_data.item_title
                      )
                    )
                  )
                : Object(u.f)("#Redeem_UsePoints_MiniProfile");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? r.createElement(Ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? r.createElement(
                    _e,
                    { onClick: this.props.closeModal },
                    Object(u.f)("#Button_Close")
                  )
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props.definition.rewardDefinition,
                t = p.b.Get().GetEquippedItems(),
                n = p.b.Get().GetPersonaState(),
                a = r.createElement(Pe, {
                  animatedAvatar: t.animated_avatar,
                  persona: n,
                  avatarFrame: t.avatar_frame,
                  className: m.CurrentAvatar,
                });
              return r.createElement(
                st,
                { className: m.MiniProfilePreviewContainer },
                r.createElement(
                  at,
                  {
                    className: m.PreviewBackgroundContainer,
                    step: this.props.step,
                  },
                  r.createElement(
                    "div",
                    { className: m.ProfileContainer },
                    r.createElement(
                      "video",
                      {
                        width: "100%",
                        playsInline: !0,
                        loop: !0,
                        muted: !0,
                        autoPlay: !0,
                        controls: !1,
                      },
                      r.createElement("source", {
                        src:
                          h.d.MEDIA_CDN_COMMUNITY_URL +
                          "images/items/" +
                          e.appid +
                          "/" +
                          e.community_item_data.item_movie_webm,
                        type: "video/webm",
                      }),
                      r.createElement("source", {
                        src:
                          h.d.MEDIA_CDN_COMMUNITY_URL +
                          "images/items/" +
                          e.appid +
                          "/" +
                          e.community_item_data.item_movie_mp4,
                        type: "video/mp4",
                      })
                    ),
                    r.createElement(
                      "div",
                      { className: m.ProfileImage },
                      p.b.Get().BIsLoggedIn() && a
                    ),
                    r.createElement("div", {
                      className: Object(M.a)(
                        m.ImageBlur,
                        "miniprofile_backdropblur"
                      ),
                    })
                  )
                ),
                r.createElement(ot, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                r.createElement(
                  nt,
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
        })(r.Component),
        Te = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_Profile")
                : "equipped" == this.props.step
                ? r.createElement(
                    "div",
                    { className: m.EquippedDesc },
                    Object(u.n)(
                      "#Redeem_Equipped_AvatarFrame",
                      r.createElement(
                        "span",
                        null,
                        this.props.definition.rewardDefinition
                          .community_item_data.item_title
                      )
                    )
                  )
                : Object(u.f)("#Redeem_UsePoints_AvatarFrame");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? r.createElement(Ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? r.createElement($e, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props.definition.rewardDefinition,
                t = p.b.Get().GetEquippedItems(),
                n = p.b.Get().GetPersonaState(),
                a = {
                  appid: e.appid,
                  image_small:
                    "items/" +
                    e.appid +
                    "/" +
                    e.community_item_data.item_image_small,
                },
                i = r.createElement(Pe, {
                  animatedAvatar: t.animated_avatar,
                  persona: n,
                  avatarFrame: a,
                  strAnimatedAvatarClassName: m.CurrentAvatar,
                }),
                o = null;
              return (
                "equipped" != this.props.step &&
                  p.b.Get().BIsLoggedIn() &&
                  (o = r.createElement(
                    "div",
                    { className: m.CurrentlyEquippedAvatarAndFrame },
                    r.createElement(Pe, {
                      className: m.PreviewCurrentAvatar,
                      animatedAvatar: t.animated_avatar,
                      persona: n,
                      avatarFrame: t.avatar_frame,
                      strAnimatedAvatarClassName: m.CurrentAvatar,
                    }),
                    r.createElement(
                      "div",
                      { className: m.CurrentlyEquippedAvatarAndFrameDesc },
                      Object(u.f)("#Redeem_Equipped_CurrentAvatarFrame")
                    )
                  )),
                r.createElement(
                  st,
                  { className: m.AvatarPreviewContainer },
                  r.createElement(
                    at,
                    {
                      className: Object(M.a)(
                        m.PreviewBackgroundContainer,
                        m.Frame
                      ),
                      step: this.props.step,
                    },
                    r.createElement(
                      "div",
                      { className: Object(M.a)(m.ItemPreview, m.TopAvatar) },
                      i
                    ),
                    r.createElement(
                      "div",
                      { className: Object(M.a)(m.ItemPreview, m.BottomAvatar) },
                      i
                    )
                  ),
                  o,
                  r.createElement(ot, {
                    definition: this.props.definition,
                    step: this.props.step,
                    description: this.GetDescription(),
                  }),
                  r.createElement(
                    nt,
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
        })(r.Component),
        Ge = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_AnimatedAvatar")
                : "equipped" == this.props.step
                ? r.createElement(
                    "div",
                    { className: m.EquippedDesc },
                    Object(u.n)(
                      "#Redeem_Equipped_AnimatedAvatar",
                      r.createElement(
                        "span",
                        null,
                        this.props.definition.rewardDefinition
                          .community_item_data.item_title
                      )
                    )
                  )
                : Object(u.f)("#Redeem_UsePoints_AnimatedAvatar");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? r.createElement(Ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? r.createElement($e, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.props.definition.rewardDefinition,
                t = p.b.Get().GetEquippedItems(),
                n = p.b.Get().GetPersonaState(),
                a = {
                  appid: e.appid,
                  image_small:
                    "items/" +
                    e.appid +
                    "/" +
                    e.community_item_data.item_image_small,
                },
                i = r.createElement(Pe, {
                  animatedAvatar: a,
                  persona: n,
                  avatarFrame: t.avatar_frame,
                  strAnimatedAvatarClassName: m.CurrentAvatar,
                }),
                o = null;
              return (
                "equipped" != this.props.step &&
                  p.b.Get().BIsLoggedIn() &&
                  (o = r.createElement(
                    "div",
                    { className: m.CurrentlyEquippedAvatarAndFrame },
                    r.createElement(Pe, {
                      className: m.PreviewCurrentAvatar,
                      animatedAvatar: t.animated_avatar,
                      persona: n,
                      avatarFrame: t.avatar_frame,
                      strAnimatedAvatarClassName: m.CurrentAvatar,
                    }),
                    r.createElement(
                      "div",
                      { className: m.CurrentlyEquippedAvatarAndFrameDesc },
                      Object(u.f)("#Redeem_Equipped_CurrentAvatar")
                    )
                  )),
                r.createElement(
                  st,
                  { className: m.AvatarPreviewContainer },
                  r.createElement(
                    at,
                    {
                      className: Object(M.a)(
                        m.PreviewBackgroundContainer,
                        m.Animated
                      ),
                      step: this.props.step,
                    },
                    r.createElement(
                      "div",
                      { className: Object(M.a)(m.ItemPreview, m.TopAvatar) },
                      i
                    ),
                    r.createElement(
                      "div",
                      { className: Object(M.a)(m.ItemPreview, m.BottomAvatar) },
                      i
                    )
                  ),
                  o,
                  r.createElement(ot, {
                    definition: this.props.definition,
                    step: this.props.step,
                    description: this.GetDescription(),
                  }),
                  r.createElement(
                    nt,
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
        })(r.Component),
        ze = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return Object(u.f)("#Redeem_UsePoints_Badge");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? r.createElement($e, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.GetPreviewForLevel = function () {
              var e = p.b.Get().GetUserSeasonalBadgeLevel();
              return "equip" == this.props.step
                ? r.createElement(it, {
                    definition: this.props.definition.rewardDefinition,
                    badgeLevel: e,
                    title: Object(u.f)("#Redeem_Badge_CurrentLevel"),
                  })
                : 0 == e
                ? r.createElement(it, {
                    definition: this.props.definition.rewardDefinition,
                    badgeLevel: this.props.definition.itemLevel,
                    title: Object(u.f)("#Redeem_Badge_AfterPoints"),
                  })
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(it, {
                      definition: this.props.definition.rewardDefinition,
                      badgeLevel: e,
                      title: Object(u.f)("#Redeem_Badge_CurrentLevel"),
                    }),
                    r.createElement(
                      "div",
                      { className: Object(M.a)(m.BadgeColumn, m.ArrowColumn) },
                      r.createElement("div", { className: m.BlueArrow })
                    ),
                    r.createElement(it, {
                      definition: this.props.definition.rewardDefinition,
                      badgeLevel: this.props.definition.itemLevel,
                      title: Object(u.f)("#Redeem_Badge_AfterPoints"),
                    })
                  );
            }),
            (t.prototype.render = function () {
              return this.props.definition.rewardDefinition.community_item_data
                .badge_data[this.props.definition.itemLevel - 1]
                ? r.createElement(
                    st,
                    { className: m.BadgeItemContainer },
                    r.createElement(
                      at,
                      { className: m.BadgePreviewContainer },
                      this.GetPreviewForLevel()
                    ),
                    r.createElement(ot, {
                      definition: this.props.definition,
                      step: this.props.step,
                      description: this.GetDescription(),
                    }),
                    r.createElement(
                      nt,
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
            (t = Object(a.c)([s.a], t))
          );
        })(r.Component),
        Fe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_Coupon")
                : Object(u.f)("#Redeem_UsePoints_Coupon");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? r.createElement(Ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? r.createElement($e, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              return r.createElement(
                st,
                { className: m.CouponPreviewContainer },
                r.createElement(at, {
                  className: m.PreviewBackgroundContainer,
                  step: this.props.step,
                }),
                r.createElement(ot, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                r.createElement(
                  nt,
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
        })(r.Component),
        He = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_GoldenProfile")
                : "equipped" == this.props.step
                ? Object(u.f)("#Redeem_Equipped_GoldenProfile")
                : Object(u.f)("#Redeem_UsePoints_GoldenProfile");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? r.createElement(Ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? r.createElement($e, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              var e,
                t,
                n = this.props.definition,
                a = p.b.Get().GetPersonaState(),
                i = p.b.Get().GetEquippedItems(),
                o = p.b
                  .Get()
                  .GetGoldenProfileConfigForApp(n.rewardDefinition.appid);
              if (
                !o &&
                0 ==
                  (null === (t = n.rewardDefinition.bundle_defids) ||
                  void 0 === t
                    ? void 0
                    : t.length)
              )
                return null;
              if (!o) {
                o = { appid: n.rewardDefinition.appid, frame: "" };
                var s = (e = p.b.Get()).GetRewardDefinitions.apply(
                  e,
                  n.rewardDefinition.bundle_defids
                ).filter(function (e) {
                  return 14 == e.community_item_class;
                });
                0 != (null == s ? void 0 : s.length) &&
                  (o.frame =
                    "items/" +
                    n.rewardDefinition.appid +
                    "/" +
                    s[0].community_item_data.item_image_small);
              }
              var l = { image_small: o.frame };
              return r.createElement(
                st,
                { className: m.GoldenProfileContainer },
                r.createElement(
                  at,
                  {
                    className: m.GoldenProfilePreviewContainer,
                    step: this.props.step,
                  },
                  r.createElement(
                    "div",
                    { className: m.AvatarContainer },
                    r.createElement(ie.a, {
                      size: "FillArea",
                      className: m.CurrentAvatar,
                      persona: a,
                      animatedAvatar: i.animated_avatar,
                      avatarFrame: l,
                    })
                  )
                ),
                r.createElement(
                  ot,
                  {
                    definition: this.props.definition,
                    step: this.props.step,
                    description: this.GetDescription(),
                  },
                  r.createElement(
                    Qe,
                    null,
                    Object(u.f)("#Redeem_GoldenProfile_Expiration")
                  )
                ),
                r.createElement(
                  nt,
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
        })(r.Component),
        Ue = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.OnProfileFrameResized = function (e) {
                e.data.message &&
                  "iframe_dimensions" == e.data.message &&
                  n.setState({ iframeHeight: e.data.height });
              }),
              (n.state = { bLoadedIFrame: !1, iframeHeight: 0 }),
              n
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              window.addEventListener("message", this.OnProfileFrameResized);
            }),
            (t.prototype.componentWillUnmount = function () {
              window.removeEventListener("message", this.OnProfileFrameResized);
            }),
            (t.prototype.OnProfileFrameLoaded = function () {
              this.setState({ bLoadedIFrame: !0 });
            }),
            (t.prototype.GetDescription = function () {
              var e = Object(u.f)(
                "#ProfileShowcases_Type_" +
                  this.props.definition.profileCustomizationType
              );
              if ("equipped" == this.props.step)
                return 2 == this.props.definition.type
                  ? Object(u.f)(
                      "#Redeem_Equipped_ProfileShowcaseUpgraded",
                      e,
                      this.props.definition.itemLevel
                    )
                  : Object(u.f)(
                      "#Redeem_Equipped_ProfileShowcaseSlotPurchased",
                      e
                    );
              if (2 == this.props.definition.type)
                return Object(u.f)(
                  "#Redeem_UsePoints_ProfileShowcaseUpgrade",
                  this.props.definition.desiredItemLevel
                );
              var t = p.b.Get().GetMaxProfileShowcaseSlots();
              return Object(u.f)(
                "#Redeem_UsePoints_ProfileShowcaseSlot",
                e,
                t + 1
              );
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step
                ? r.createElement(Ke, {
                    closeModal: this.props.closeModal,
                    equipItem: this.props.equipItem,
                  })
                : "equipped" == this.props.step
                ? r.createElement($e, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.GetProfileSteamID = function () {
              return p.b.Get().BIsLoggedIn()
                ? h.k.steamid
                : 2 == h.d.EUNIVERSE
                ? "148618792083695825"
                : "76561197960266962";
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state.bLoadedIFrame,
                n = Object(le.b)(
                  this.props.definition.profileCustomizationType
                ),
                a = this.props.definition.profileCustomizationType,
                i = Math.min(
                  this.props.definition.desiredItemLevel
                    ? this.props.definition.desiredItemLevel
                    : this.props.definition.itemLevel,
                  p.b.Get().GetMaxProfileShowcaseUpgradeLevel()
                ),
                o = 0.5 * this.state.iframeHeight;
              return r.createElement(
                st,
                { className: m.ProfileShowcaseContainer },
                r.createElement(
                  at,
                  {
                    className: Object(M.a)(
                      m.ProfileShowcasePreviewContainer,
                      t ? m.LoadedPreview : m.LoadingPreview
                    ),
                    step: this.props.step,
                  },
                  r.createElement("img", {
                    className: m.ProfileShowcaseIcon,
                    src: n,
                  }),
                  !t &&
                    r.createElement(
                      "div",
                      { className: m.ProfileThrobber },
                      r.createElement(se.a, {
                        position: "center",
                        size: "xlarge",
                        string: Object(u.f)(
                          "#ProfileShowcases_LoadingPreview",
                          Object(u.f)("#ProfileShowcases_Type_" + a)
                        ),
                      })
                    ),
                  r.createElement(
                    "div",
                    {
                      className: m.PreviewShowcasePreviewFrameContainer,
                      style: { height: 0 != o ? o + "px" : "1px" },
                    },
                    r.createElement("iframe", {
                      className: m.PreviewShowcasePreviewFrame,
                      src:
                        h.d.COMMUNITY_BASE_URL +
                        "profiles/" +
                        this.GetProfileSteamID() +
                        "/previewsingleshowcase/?customization_type=" +
                        a +
                        "&level=" +
                        i,
                      frameBorder: 0,
                      scrolling: "no",
                      onLoad: function () {
                        e.OnProfileFrameLoaded();
                      },
                    })
                  )
                ),
                r.createElement(ot, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                r.createElement(
                  nt,
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
        })(r.Component),
        Ze = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_Bundle")
                : Object(u.f)("#Redeem_UsePoints_Bundle");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step || "equipped" == this.props.step
                ? r.createElement($e, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this,
                t = p.b
                  .Get()
                  .GetBundleOfferForUser(this.props.definition.rewardDefinition)
                  .items.map(function (t) {
                    var n = t.community_item_data.item_image_large,
                      a = Object(be.a)(t.appid, n);
                    3 == t.community_item_class &&
                      (a =
                        h.d.COMMUNITY_BASE_URL +
                        "economy/profilebackground/items/" +
                        t.appid +
                        "/" +
                        t.community_item_data.item_image_large +
                        "?size=320x200");
                    var i = p.b.Get().BRewardOwnedByUser(t);
                    return r.createElement(
                      ye.a,
                      {
                        key: t.defid,
                        padding: "xxsmall",
                        className: m.BundleItemPreview,
                      },
                      r.createElement(
                        "div",
                        { className: m.BundleItemPreviewImage },
                        r.createElement("img", { src: a })
                      ),
                      r.createElement(
                        "div",
                        null,
                        r.createElement(
                          "div",
                          { className: m.BundleChildItemName },
                          t.community_item_data.item_title
                        ),
                        r.createElement(
                          "div",
                          { className: m.BundleChildItemClass },
                          Object(p.d)(t.community_item_class)
                        )
                      ),
                      i &&
                        r.createElement(
                          "div",
                          { className: m.BundleChildItemOwned },
                          r.createElement(re.j, {
                            className: m.OwnedCheckmark,
                          }),
                          "redeem" == e.props.step &&
                            Object(u.f)("#Redeem_BundleItemOwned")
                        )
                    );
                  });
              return r.createElement(
                st,
                { className: m.BundleItemContainer },
                r.createElement(
                  "div",
                  { className: m.BundleItemPreviewContainer },
                  t
                ),
                r.createElement(ot, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                r.createElement(
                  nt,
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
        })(r.Component),
        Ve = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = { bLoadedIFrame: !1 }), n;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnIFrameLoaded = function () {
              this.setState({ bLoadedIFrame: !0 });
            }),
            (t.prototype.GetProfileSteamID = function () {
              return p.b.Get().BIsLoggedIn()
                ? h.k.steamid
                : 2 == h.d.EUNIVERSE
                ? "148618792083695825"
                : "76561197960266962";
            }),
            (t.prototype.GetDescription = function () {
              return "equip" == this.props.step
                ? Object(u.f)("#Redeem_Equip_ProfileBundle")
                : Object(u.f)("#Redeem_UsePoints_ProfileBundle");
            }),
            (t.prototype.GetButtons = function () {
              return "equip" == this.props.step || "equipped" == this.props.step
                ? r.createElement($e, { closeModal: this.props.closeModal })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state.bLoadedIFrame,
                n = p.b
                  .Get()
                  .GetBundleOfferForUser(
                    this.props.definition.rewardDefinition
                  ),
                a = this.props.definition.rewardDefinition.appid,
                i = this.props.definition.rewardDefinition.community_item_type,
                o = n.items.map(function (t) {
                  var n = Object(be.b)(t),
                    a = p.b.Get().BRewardOwnedByUser(t);
                  return r.createElement(
                    ye.a,
                    {
                      key: t.defid,
                      padding: "xxsmall",
                      className: m.BundleItemPreview,
                    },
                    r.createElement(
                      "div",
                      { className: m.BundleItemPreviewImage },
                      r.createElement("img", { src: n })
                    ),
                    r.createElement(
                      "div",
                      null,
                      r.createElement(
                        "div",
                        { className: m.BundleChildItemName },
                        t.community_item_data.item_title
                      ),
                      r.createElement(
                        "div",
                        { className: m.BundleChildItemClass },
                        Object(p.d)(t.community_item_class)
                      )
                    ),
                    a &&
                      r.createElement(
                        "div",
                        { className: m.BundleChildItemOwned },
                        r.createElement(re.j, { className: m.OwnedCheckmark }),
                        "redeem" == e.props.step &&
                          Object(u.f)("#Redeem_ProfileBundleItemOwned")
                      )
                  );
                }),
                s =
                  h.d.COMMUNITY_BASE_URL +
                  "profiles/" +
                  this.GetProfileSteamID() +
                  "?previewprofile=1&appid=" +
                  a +
                  "&itemtype=" +
                  i;
              return r.createElement(
                st,
                {
                  className: Object(M.a)(
                    m.BundleItemContainer,
                    t ? m.LoadedPreview : m.LoadingPreview
                  ),
                },
                !t &&
                  r.createElement(
                    "div",
                    { className: m.ProfileThrobber },
                    r.createElement(se.a, {
                      position: "center",
                      size: "xlarge",
                      string: Object(u.f)(
                        "#ProfileBundle_LoadingPreview",
                        Ae(this.props.definition.rewardDefinition)
                      ),
                    })
                  ),
                r.createElement(
                  "div",
                  { className: m.PreviewProfileBundleFrameContainer },
                  r.createElement("iframe", {
                    className: m.PreviewProfileBundleFrame,
                    src: s,
                    frameBorder: 0,
                    scrolling: "no",
                    onLoad: function () {
                      e.OnIFrameLoaded();
                    },
                  })
                ),
                r.createElement(
                  "div",
                  { className: m.PreviewLinkContainer },
                  r.createElement(
                    "a",
                    { href: s, target: "_blank", className: m.PreviewLink },
                    Object(u.f)("#ProfileModifier_PreviewLinkText")
                  )
                ),
                r.createElement(
                  "div",
                  { className: m.BundleItemPreviewContainer },
                  o
                ),
                r.createElement(ot, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                r.createElement(
                  nt,
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
        })(r.Component),
        We =
          (((fe = {})[11] = xe),
          (fe[3] = Le),
          (fe[4] = Be),
          (fe[13] = ke),
          (fe[14] = Te),
          (fe[15] = Ge),
          (fe[1] = ze),
          (fe[12] = Re),
          (fe[8] = He),
          fe),
        Ye = Object(s.a)(function (e) {
          var t,
            n = null;
          switch (e.definition.type) {
            case 3:
            case 2:
              n = Ue;
              break;
            case 1:
              n =
                5 == e.definition.rewardDefinition.type ||
                6 == e.definition.rewardDefinition.type
                  ? Ze
                  : 8 == e.definition.rewardDefinition.community_item_class &&
                    0 !=
                      (null ===
                        (t = e.definition.rewardDefinition.bundle_defids) ||
                      void 0 === t
                        ? void 0
                        : t.length)
                  ? Ve
                  : We[e.definition.rewardDefinition.community_item_class];
          }
          return n
            ? r.createElement(n, Object(a.a)({}, e))
            : 4 == e.definition.rewardDefinition.type
            ? r.createElement(Fe, Object(a.a)({}, e))
            : null;
        }),
        Qe = function (e) {
          e.className;
          var t = Object(a.f)(e, ["className"]);
          return r.createElement(
            "div",
            Object(a.a)(
              { className: Object(M.a)(m.WarningTextContainer, e.className) },
              t
            ),
            r.createElement(w.ob, { className: m.TimeWarning }),
            e.children
          );
        },
        qe = function (e) {
          var t = e.cost,
            n = e.discount,
            a = e.originalCost,
            i = e.redeemPoints,
            o = e.closeModal;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(Je, {
              cost: t,
              discount: n,
              originalCost: a,
              onClick: i,
            }),
            r.createElement(_e, { onClick: o }, Object(u.f)("#Button_Cancel"))
          );
        },
        Je = function (e) {
          var t = e.cost,
            n = e.discount,
            a = e.originalCost,
            i = e.onClick,
            o = e.className;
          if (n) {
            var s = n ? a.toLocaleString(u.e.GetPreferredLocales()) : "",
              l = p.b.Get().BIsLoggedIn()
                ? r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      "div",
                      { className: m.OriginalCost },
                      " ",
                      s,
                      " ",
                      Object(u.f)("#Rewards_Points"),
                      " "
                    ),
                    r.createElement(
                      I.a,
                      { amount: t },
                      " ",
                      t > 0 && Object(u.f)("#Rewards_Points")
                    )
                  )
                : r.createElement("span", null, Object(u.f)("#Button_Login"));
            return r.createElement(
              "div",
              { className: Object(M.a)(m.RedeemButton, o), onClick: i },
              r.createElement(
                "div",
                { className: m.DiscountContainer },
                "-",
                n,
                "%"
              ),
              r.createElement("div", { className: m.CostContainer }, l)
            );
          }
          var c = p.b.Get().BIsLoggedIn()
            ? r.createElement(
                I.a,
                { size: 1.125, amount: t },
                " ",
                t > 0 && Object(u.f)("#Rewards_Points")
              )
            : r.createElement("span", null, Object(u.f)("#Button_Login"));
          return r.createElement(
            "div",
            { className: Object(M.a)(m.RedeemButton, o), onClick: i },
            r.createElement("div", { className: m.CostContainer }, c)
          );
        },
        Xe = function (e) {
          var t = e.closeModal,
            n = function () {
              (window.location.href = "steam://open/friends"), t();
            };
          return h.d.IN_CLIENT
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  ge,
                  { onClick: n },
                  Object(u.f)("#Button_Goto_Chat")
                ),
                r.createElement(
                  _e,
                  { onClick: t },
                  Object(u.f)("#Button_Later")
                )
              )
            : r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  ge,
                  {
                    onClick: function () {
                      window.open(
                        h.d.CHAT_BASE_URL + "chat",
                        "height=790,width=1015,resize=yes,scrollbars=yes"
                      ),
                        t();
                    },
                  },
                  Object(u.f)("#Button_Goto_WebChat")
                ),
                r.createElement(
                  he,
                  {
                    onClick: function () {
                      S.BClientSupportsMessage("OpenFriendsDialog")
                        ? S.OpenFriendsDialog()
                            .then(function (e) {
                              e.success || n();
                            })
                            .catch(n)
                        : n();
                    },
                  },
                  Object(u.f)("#Button_Goto_ClientChat")
                ),
                r.createElement(
                  _e,
                  { onClick: t },
                  Object(u.f)("#Button_Later")
                )
              );
        },
        Ke = function (e) {
          var t = e.equipItem,
            n = e.closeModal;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(ge, { onClick: t }, Object(u.f)("#Button_Equip")),
            r.createElement(_e, { onClick: n }, Object(u.f)("#Button_Later"))
          );
        },
        $e = function (e) {
          var t = e.closeModal;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              he,
              {
                onClick: function () {
                  return (window.location.href = h.d.COMMUNITY_BASE_URL + "my");
                },
              },
              Object(u.f)("#Button_Goto_Profile")
            ),
            r.createElement(_e, { onClick: t }, Object(u.f)("#Button_Close"))
          );
        },
        et = function (e) {
          var t = e.closeModal;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              he,
              { onClick: t },
              r.createElement(
                c.b,
                { to: v.b.LoyaltyHowItWorks() },
                Object(u.f)("#Redeem_NeedToOwnApp")
              )
            ),
            r.createElement(_e, { onClick: t }, Object(u.f)("#Button_Cancel"))
          );
        },
        tt = function (e) {
          var t = e.closeModal;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              he,
              { onClick: t },
              r.createElement(
                c.b,
                { to: v.b.LoyaltyHowItWorks() },
                Object(u.f)("#Redeem_HowToGetPoints")
              )
            ),
            r.createElement(_e, { onClick: t }, Object(u.f)("#Button_Cancel"))
          );
        },
        nt = function (e) {
          var t = e.step,
            n = e.definition,
            i = e.closeModal,
            o = e.redeemPoints,
            s = e.bRequestInProgress,
            l = Object(a.f)(e, [
              "step",
              "definition",
              "closeModal",
              "redeemPoints",
              "bRequestInProgress",
            ]),
            c = e.children;
          if (s)
            c = r.createElement(se.a, {
              className: m.RedeemThrobber,
              size: "medium",
            });
          else if ("preview" == t)
            c = r.createElement(
              _e,
              { onClick: i },
              Object(u.f)("#Button_Close")
            );
          else if ("redeem" == t) {
            var d = Ne(n),
              f = (function (e) {
                switch (e.type) {
                  case 1:
                    if (
                      5 == e.rewardDefinition.type ||
                      6 == e.rewardDefinition.type
                    ) {
                      var t = p.b
                        .Get()
                        .GetBundleOfferForUser(e.rewardDefinition);
                      return {
                        discount: t.discount,
                        originalCost: t.original_point_cost,
                      };
                    }
                    return {
                      discount: 0,
                      originalCost: parseInt(e.rewardDefinition.point_cost),
                    };
                  case 2:
                    return {
                      discount: 0,
                      originalCost: p.b
                        .Get()
                        .GetUpgradableProfileShowcaseCost(),
                    };
                  case 3:
                    return {
                      discount: 0,
                      originalCost: p.b
                        .Get()
                        .GetPurchasableProfileShowcaseSlotCost(),
                    };
                }
                return {
                  discount: 0,
                  originalCost: parseInt(e.rewardDefinition.point_cost),
                };
              })(n),
              _ = f.discount,
              h = f.originalCost;
            c = r.createElement(qe, {
              cost: d,
              discount: _,
              originalCost: h,
              redeemPoints: o,
              closeModal: i,
            });
          } else
            "cantredeemforapp" == t
              ? (c = r.createElement(et, { closeModal: i }))
              : "cantafford" == t
              ? (c = r.createElement(tt, { closeModal: i }))
              : "saleitem" == t &&
                (c = r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(
                    he,
                    { onClick: o },
                    Object(u.f)("#SummerSale_Redeem_Btn")
                  ),
                  r.createElement(
                    _e,
                    { onClick: i },
                    Object(u.f)("#Button_Cancel")
                  )
                ));
          return r.createElement(
            "div",
            Object(a.a)({ className: m.ItemButtonsContainer }, l),
            c
          );
        },
        at = function (e) {
          e.step;
          var t = e.className,
            n = Object(a.f)(e, ["step", "className"]),
            i = null;
          return (
            "equip" == e.step
              ? (i = r.createElement("div", {
                  className: Object(M.a)(m.GreenCheck, m.PurchasedCheck),
                }))
              : "equipped" == e.step &&
                (i = r.createElement(re.j, {
                  className: Object(M.a)(m.GreenCheck, m.EquippedCheck),
                })),
            r.createElement(
              "div",
              Object(a.a)(
                { className: Object(M.a)(t, m.ItemPreviewContainer) },
                n
              ),
              i,
              e.children
            )
          );
        },
        rt = function (e) {
          var t = e.icon,
            n = Object(a.f)(e, ["icon"]);
          return r.createElement(
            "div",
            Object(a.a)({ className: m.ChatPickerContainer }, n),
            r.createElement(
              "div",
              {
                className: m.IconPreview,
                style: t && { backgroundImage: "url( " + t + " )" },
              },
              e.children
            )
          );
        },
        it = function (e) {
          var t = e.definition,
            n = e.badgeLevel,
            a = e.title,
            i = t.community_item_data.badge_data[n - 1].image || "",
            o = m.NextLevel;
          return (
            p.b.Get().GetUserSeasonalBadgeLevel() == n && (o = m.CurrentLevel),
            r.createElement(
              "div",
              { className: m.BadgeColumn },
              r.createElement("div", { className: m.BadgeTitle }, a),
              r.createElement(
                "div",
                { className: m.BadgeDetailsContainer },
                r.createElement(
                  "div",
                  { className: m.BadgeImgContainer },
                  r.createElement("div", {
                    className: m.BadgeImage,
                    style: {
                      backgroundImage: "url( " + Object(C.a)(t.appid, i) + " )",
                    },
                  })
                ),
                r.createElement("div", { className: m.BadgeLine }),
                r.createElement(
                  "div",
                  { className: Object(M.a)(m.BadgeLevelContainer, o) },
                  r.createElement("div", { className: m.BadgeLevelText }, n)
                )
              )
            )
          );
        },
        ot = function (e) {
          var t,
            n = e.definition,
            i = e.step,
            o = e.description,
            s = Object(a.f)(e, ["definition", "step", "description"]),
            l = null;
          if (
            ("equip" != i && "equipped" != i) ||
            !n.rewardDefinition ||
            1 != n.rewardDefinition.type
          ) {
            if ("cantredeemforapp" == i) {
              var c = r.createElement(
                "span",
                { className: m.NeedAppOwnership },
                oe.a.GetAppInfo(n.rewardDefinition.appid).name || ""
              );
              l = r.createElement(
                "div",
                { className: Object(M.a)(m.Bold, m.Opacity) },
                Object(u.n)("#Redeem_CantRedeemItemForApp", c)
              );
            } else if ("cantafford" == i) {
              var d = Ne(n) - p.b.Get().GetPointsAvailable().getLowBits();
              l = r.createElement(
                "div",
                { className: Object(M.a)(m.Bold, m.Opacity) },
                Object(u.f)("#Redeem_CantAfford", d.toLocaleString())
              );
            }
          } else
            t = r.createElement(
              "div",
              { className: m.Bold },
              Object(u.f)("#Redeem_YoursToOwn", Ae(n.rewardDefinition))
            );
          return r.createElement(
            "div",
            Object(a.a)({ className: m.ItemDescription }, s),
            t,
            r.createElement("div", null, o),
            e.children,
            l,
            r.createElement(
              "div",
              { className: m.Small },
              Object(u.f)("#Redeem_RefundWarning")
            )
          );
        },
        st = function (e) {
          var t = e.className,
            n = Object(a.f)(e, ["className"]);
          return r.createElement(
            "div",
            Object(a.a)({ className: Object(M.a)(m.ItemWrapper, t) }, n),
            e.children
          );
        };
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
        CurrentAppFiltersContainer:
          "appfilterpopup_CurrentAppFiltersContainer_1xvFg",
        CurrentAppFilter: "appfilterpopup_CurrentAppFilter_3nw-L",
        AppCheckboxesContainer: "appfilterpopup_AppCheckboxesContainer_3vTjT",
        SuggestedAppFilter: "appfilterpopup_SuggestedAppFilter_1ULrZ",
        SuggestedAppFilterName: "appfilterpopup_SuggestedAppFilterName_3GUKE",
        AddGameToFilterIcon: "appfilterpopup_AddGameToFilterIcon_1dj6I",
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
    "26vX": function (e, t, n) {
      e.exports = {
        GreenButton: "buttons_GreenButton_SRxqV",
        BlueButton: "buttons_BlueButton_2Sjv2",
        GrayButton: "buttons_GrayButton_3Ju8v",
      };
    },
    "2Ido": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "b", function () {
          return M;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("TyAF"),
        s = n("aoTL"),
        l = n("qD+2"),
        c = n("prdU"),
        m = n("TLQK"),
        d = n("RV7a"),
        u = (n("OU48"), n("mw7S")),
        p = n("o8B4"),
        f = n("exH9"),
        _ = n("YpyZ"),
        h = function (e) {
          var t = e.value,
            n = e.className,
            r = Object(a.f)(e, ["value", "className"]);
          return i.a.createElement(
            "div",
            Object(a.a)({ className: Object(f.a)(_.Discount, n) }, r),
            "-",
            t,
            "%"
          );
        },
        g = n("StxQ"),
        b = n("cOvF");
      var y = Object(o.a)(function (e) {
          return i.a.createElement(
            I,
            Object(a.a)(
              {},
              ((n = (t = e).definition),
              t.theme,
              (r = Object(a.f)(t, ["definition", "theme"])),
              (o = l.a.GetAppInfo(n.appid)),
              (s = o.icon_url),
              (d = o.name),
              (u = n.internal_description),
              (p = c.b.Get().GetBundleOfferForUser(n)),
              Object(a.a)(
                {
                  cost: p.point_cost,
                  name: u,
                  desc: Object(m.f)("#RewardItemType_Bundle"),
                  attributes: [],
                  appIcon: s,
                  appName: d,
                  bundle: p,
                  definition: n,
                },
                r
              ))
            )
          );
          var t, n, r, o, s, d, u, p;
        }),
        I = Object(o.a)(function (e) {
          e.appName;
          var t = e.appIcon,
            n = e.bundle,
            r = e.definition,
            o = e.cost,
            s = (e.name, e.desc, e.attributes, e.className),
            l = e.style,
            c = Object(a.f)(e, [
              "appName",
              "appIcon",
              "bundle",
              "definition",
              "cost",
              "name",
              "desc",
              "attributes",
              "className",
              "style",
            ]),
            m = M(r);
          return i.a.createElement(
            d.a,
            Object(a.a)(
              {
                display: "flex",
                flexDirection: "column",
                className: Object(f.a)(p.BundleContainer, s),
                style: Object(a.a)(Object(a.a)({}, l), { width: "524px" }),
              },
              c
            ),
            t && i.a.createElement("img", { src: t, className: p.AppIcon }),
            i.a.createElement(
              d.a,
              {
                flex: "1",
                style: {
                  width: "484px",
                  height: "200px",
                  margin: "0 30px",
                  position: "relative",
                  alignSelf: "center",
                },
              },
              i.a.createElement(v, {
                items: n.items,
                visible: 5,
                width: 464,
                cardSize: 90,
                offer: n,
              })
            ),
            i.a.createElement(C, {
              label: m,
              count: n.items.length,
              cost: o,
              discount: n.discount,
            })
          );
        }),
        C = function (e) {
          var t = e.cost,
            n = e.discount,
            a = e.label + " (" + e.count + ")";
          return i.a.createElement(
            d.a,
            {
              padding: "small",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              className: p.BundleFooter,
              title: a,
            },
            i.a.createElement("div", { className: p.BundleName }, a),
            0 === t
              ? i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    "span",
                    { className: p.AlreadyOwned },
                    Object(m.f)("#Redeem_BundleItemOwned")
                  ),
                  i.a.createElement(b.j, { className: p.CheckmarkCircle })
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(h, {
                    value: n,
                    className: p.BundleDiscount,
                  }),
                  i.a.createElement(g.a, { amount: t })
                )
          );
        };
      var v = Object(o.a)(function (e) {
        var t = e.offer,
          n = e.items,
          a = e.visible,
          r = e.width,
          o = e.cardSize,
          s = (function (e, t, n) {
            if (t.length <= n) return t;
            var a = t
              .filter(function (t) {
                return !e.mapItemOwnership.get(t.defid);
              })
              .slice(0, n);
            if (a.length < n) {
              var r = t
                .filter(function (t) {
                  return e.mapItemOwnership.get(t.defid);
                })
                .slice(0, n - a.length);
              return a.concat(r);
            }
            return a;
          })(t, n, a);
        return i.a.createElement(
          "div",
          { style: { position: "relative" }, className: p.ItemHand },
          s.map(function (e, n) {
            return i.a.createElement(
              w,
              {
                key: e.defid + "_" + n,
                style:
                  ((l = n),
                  (c = s.length),
                  (m = a),
                  (d = o),
                  (_ = r),
                  (h = 0.42),
                  30,
                  (g = d * (Math.sin(h) + Math.cos(h))),
                  (y = g - d),
                  (I = _ - y),
                  (C = Math.min(d, I / c)),
                  (v = ((m - c) / 2) * d),
                  (M = l * C + v),
                  (N = (c - 1) / 2),
                  (j = (30 * Math.pow(l - N, 2)) / (N * N)),
                  (E = (0.84 / (c - 1)) * l - h),
                  {
                    position: "absolute",
                    transformOrigin: "center",
                    transform:
                      "translateX(" +
                      M +
                      "px) translateY(" +
                      j +
                      "px) rotate(" +
                      E +
                      "rad)",
                    width: d + "px",
                    height: d + "px",
                  }),
              },
              t.mapItemOwnership.get(e.defid) &&
                i.a.createElement(b.j, {
                  className: Object(f.a)(p.CheckmarkCircle, p.OwnedItem),
                }),
              i.a.createElement("img", {
                src: Object(u.b)(e),
                className: p.ItemCardImage,
              })
            );
            var l, c, m, d, _, h, g, y, I, C, v, M, N, j, E;
          })
        );
      });
      var w = function (e) {
        return i.a.createElement(
          d.a,
          Object(a.a)(
            {
              padding: "small",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            e,
            { className: p.ItemCard }
          )
        );
      };
      function M(e) {
        var t,
          n,
          a = Object(s.d)(function () {
            return l.a.GetAppInfo(e.appid);
          });
        switch (e.type) {
          case 6:
            return Object(m.f)("#RewardBundle_AutoGeneratedBundleName", a.name);
          case 5:
            return null !==
              (n =
                null === (t = e.community_item_data) || void 0 === t
                  ? void 0
                  : t.item_title) && void 0 !== n
              ? n
              : "";
          default:
            return (
              console.error(
                "Cannot derive bundle title for definition " +
                  e.defid +
                  " with type " +
                  e.type
              ),
              ""
            );
        }
      }
    },
    "2y1i": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/dota_shocked_crystal_maiden.png?v=valveisgoodatcaching";
    },
    "5/sD": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/MysterySticker.png?v=valveisgoodatcaching";
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
        PageHeaderImage: "page_PageHeaderImage_1mTFV",
        PageTitle: "page_PageTitle_2g7YP",
        PageSubtitle: "page_PageSubtitle_1j9rP",
      };
    },
    "6Mq3": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/earned_points_anim.png?v=valveisgoodatcaching";
    },
    "6bk4": function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/float.png?v=valveisgoodatcaching";
    },
    "6c1j": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/seasonal_pagebg.png?v=valveisgoodatcaching";
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
    "8Uds": function (e, t, n) {
      e.exports = {
        DefaultTheme: "profilethemecolors_DefaultTheme_tedMf",
        CosmicTheme: "profilethemecolors_CosmicTheme_17vHy",
        SummerTheme: "profilethemecolors_SummerTheme_2skFv",
        MidnightTheme: "profilethemecolors_MidnightTheme_M8Pf4",
        DarkModeTheme: "profilethemecolors_DarkModeTheme_2p-_x",
        SteelTheme: "profilethemecolors_SteelTheme_xdD8L",
        PinkTealTheme: "profilethemecolors_PinkTealTheme_3M7cl",
        MutedRedTheme: "profilethemecolors_MutedRedTheme_3lp4R",
        SteamGreenTheme: "profilethemecolors_SteamGreenTheme_335yQ",
        BlueRedTheme: "profilethemecolors_BlueRedTheme_2wH82",
        GoldBurgundyTheme: "profilethemecolors_GoldBurgundyTheme_YGKfX",
        VibrantBlueTheme: "profilethemecolors_VibrantBlueTheme_3DOwB",
        GoldenProfileDebutTheme:
          "profilethemecolors_GoldenProfileDebutTheme_3BHT2",
        WinterProfile2020Theme:
          "profilethemecolors_WinterProfile2020Theme_3jPiA",
        GoldenWeekProfile2021Theme:
          "profilethemecolors_GoldenWeekProfile2021Theme_24NEV",
        Summer2021Theme: "profilethemecolors_Summer2021Theme_2bB_m",
        MutedBlueTheme: "profilethemecolors_MutedBlueTheme_3-7Wk",
        GoldTheme: "profilethemecolors_GoldTheme_l3sX-",
        BurntOrangeTheme: "profilethemecolors_BurntOrangeTheme_37pNJ",
        FlatGreyTheme: "profilethemecolors_FlatGreyTheme_2AFCa",
        PurpleTheme: "profilethemecolors_PurpleTheme_KM8jQ",
        GreenSlimeTheme: "profilethemecolors_GreenSlimeTheme_FdC8c",
        GhostTheme: "profilethemecolors_GhostTheme_1JZpe",
        ColorNightmareTheme: "profilethemecolors_ColorNightmareTheme_2LNsd",
        MurugiahTheme: "profilethemecolors_MurugiahTheme_22BXC",
        Winter2021Theme: "profilethemecolors_Winter2021Theme_X0_g8",
        Lunar2022Theme: "profilethemecolors_Lunar2022Theme_1NSMH",
      };
    },
    "8esw": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n("q1tI"),
        r = n.n(a),
        i = (n("TLQK"), n("exH9")),
        o = n("UpHR");
      function s(e) {
        var t = e.size;
        return r.a.createElement("div", {
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
    Aqke: function (e, t, n) {
      var a = {
        "./loyalty_brazilian.json": ["jJTi", 106],
        "./loyalty_bulgarian.json": ["YXmX", 107],
        "./loyalty_czech.json": ["Yw6T", 108],
        "./loyalty_danish.json": ["LeJ7", 109],
        "./loyalty_dutch.json": ["3s9e", 110],
        "./loyalty_english.json": ["nz6u", 111],
        "./loyalty_finnish.json": ["cCRj", 112],
        "./loyalty_french.json": ["WjZg", 113],
        "./loyalty_german.json": ["2HFY", 114],
        "./loyalty_greek.json": ["puzw", 115],
        "./loyalty_hungarian.json": ["h+vV", 116],
        "./loyalty_italian.json": ["1xjJ", 117],
        "./loyalty_japanese.json": ["KhFN", 118],
        "./loyalty_koreana.json": ["0T2E", 119],
        "./loyalty_latam.json": ["SFVQ", 120],
        "./loyalty_norwegian.json": ["6qpk", 121],
        "./loyalty_polish.json": ["c9AW", 122],
        "./loyalty_portuguese.json": ["H3eu", 123],
        "./loyalty_romanian.json": ["gt0D", 124],
        "./loyalty_russian.json": ["4nQk", 125],
        "./loyalty_sc_schinese.json": ["0Z0/", 126],
        "./loyalty_schinese.json": ["svug", 127],
        "./loyalty_spanish.json": ["x/nm", 128],
        "./loyalty_swedish.json": ["d/hP", 129],
        "./loyalty_tchinese.json": ["EWje", 130],
        "./loyalty_thai.json": ["SnkP", 131],
        "./loyalty_turkish.json": ["cD82", 132],
        "./loyalty_ukrainian.json": ["jV8j", 133],
        "./loyalty_vietnamese.json": ["TxFk", 134],
      };
      function r(e) {
        if (!n.o(a, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = a[e],
          r = t[0];
        return n.e(t[1]).then(function () {
          return n.t(r, 3);
        });
      }
      (r.keys = function () {
        return Object.keys(a);
      }),
        (r.id = "Aqke"),
        (e.exports = r);
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
    CGeh: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("EC67"),
        s = n("1fPh"),
        l = n("lkRc"),
        c = n("WBba"),
        m = n("TyAF"),
        d = n("55Ip"),
        u = n("qbgq"),
        p = n("li8c"),
        f = n("prdU"),
        _ = (n("OU48"), n("RV7a")),
        h = n("TLQK"),
        g = n("/maY"),
        b = n("exH9"),
        y = n("8esw"),
        I = n("lypr"),
        C = "none";
      function v(e, t, n) {
        void 0 === n && (n = {});
        var o = n.cInitialItems,
          s = n.cOverscanCount,
          l = n.fnRenderItemSkeleton,
          c = Object(a.f)(n, [
            "cInitialItems",
            "cOverscanCount",
            "fnRenderItemSkeleton",
          ]),
          m = o || 10,
          d = s || 10,
          u = Object(r.useState)(m + d),
          p = u[0],
          f = u[1],
          h = e(0, p).map(function (e) {
            return t(e);
          }),
          g = 0 === h.length;
        if (g) for (var y = 0; y < p; y++) h.push(l());
        var I = (function (e, t, n) {
          void 0 === t && (t = {});
          void 0 === n && (n = !1);
          var a = e.length,
            o = Object(r.useState)(0),
            s = o[0],
            l = o[1],
            c = N(),
            m = c[0],
            d = c[1],
            u = N(),
            p = u[0],
            f = u[1],
            h = Object(_.i)("padding-right", C),
            g = Object(_.g)().spacing.none,
            y = 1;
          d.width &&
            void 0 !== f.width &&
            (y = Math.floor((f.width + g) / d.width));
          var I = !n && s + y < a,
            v = function () {
              return I && l(s + y);
            },
            w = s > 0,
            M = function () {
              return w && l(Math.max(0, s - y));
            },
            j = s,
            E = s + y,
            S = e.slice(j, E).map(function (e, n) {
              return i.a.createElement(
                "div",
                {
                  key: n + j,
                  ref: 0 === n ? m : void 0,
                  className: Object(b.a)(
                    0 === n || n < y - 1 ? h : void 0,
                    t.itemClassName
                  ),
                },
                e
              );
            });
          return {
            containerRef: p,
            rgVisibleItems: S,
            bAllowNext: I,
            bAllowPrev: w,
            fnNext: v,
            fnPrev: M,
            iPosition: s,
          };
        })(h, c, g);
        return Object(a.a)(Object(a.a)({}, I), {
          fnNext: function () {
            I.iPosition + I.rgVisibleItems.length > p - d &&
              f(p + I.rgVisibleItems.length),
              I.fnNext();
          },
        });
      }
      var w = function (e) {
          var t = e.className,
            n = e.containerRef,
            r = e.rgVisibleItems,
            o =
              (e.bAllowNext,
              e.bAllowPrev,
              e.fnNext,
              e.fnPrev,
              e.iPosition,
              Object(a.f)(e, [
                "className",
                "containerRef",
                "rgVisibleItems",
                "bAllowNext",
                "bAllowPrev",
                "fnNext",
                "fnPrev",
                "iPosition",
              ]));
          return i.a.createElement(
            "div",
            Object(a.a)({ className: Object(b.a)(g.Container, t), ref: n }, o),
            r
          );
        },
        M = function (e) {
          var t = e.bAllowNext,
            n = e.bAllowPrev,
            a = e.fnNext,
            r = e.fnPrev;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(O, {
              className: Object(b.a)(g.LeftArrow, !n && g.Disabled),
              onClick: r,
            }),
            i.a.createElement(S, {
              className: Object(b.a)(g.RightArrow, !t && g.Disabled),
              onClick: a,
            })
          );
        },
        N = function () {
          return window.ResizeObserver ? j() : E();
        },
        j = function () {
          var e = Object(r.useState)({}),
            t = e[0],
            n = e[1],
            a = Object(r.useState)(null),
            i = a[0],
            o = a[1],
            s = Object(r.useCallback)(function (e) {
              return o(e);
            }, []);
          return (
            Object(r.useLayoutEffect)(
              function () {
                if (i) {
                  var e = new ResizeObserver(function () {
                    return window.requestAnimationFrame(function () {
                      return n(i.getBoundingClientRect());
                    });
                  });
                  return (
                    e.observe(i),
                    function () {
                      return e.disconnect();
                    }
                  );
                }
                return function () {};
              },
              [i]
            ),
            [s, t]
          );
        },
        E = function () {
          var e = Object(r.useState)({}),
            t = e[0],
            n = e[1],
            a = Object(r.useState)(null),
            i = a[0],
            o = a[1],
            s = Object(r.useCallback)(function (e) {
              return o(e);
            }, []);
          return (
            Object(r.useLayoutEffect)(
              function () {
                if (i) {
                  var e = function () {
                    return window.requestAnimationFrame(function () {
                      return n(i.getBoundingClientRect());
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
              [i]
            ),
            [s, t]
          );
        },
        S = function (e) {
          return i.a.createElement(
            "svg",
            Object(a.a)({}, e, { viewBox: "0 0 23 36" }),
            i.a.createElement(
              "g",
              null,
              i.a.createElement("path", {
                d: "M6 1.5L21 18L6 34.5",
                stroke: "#EAEAEA",
                fill: "none",
                strokeWidth: "4",
              })
            )
          );
        },
        O = function (e) {
          var t = e.style,
            n = Object(a.f)(e, ["style"]),
            r = Object(a.a)({ transform: "scaleX(-1)" }, t || {});
          return i.a.createElement(S, Object(a.a)({ style: r }, n));
        };
      function A(e) {
        var t = e.items,
          n = e.renderItem,
          a = e.loadMore,
          r = e.bLoadingMore;
        return i.a.createElement(
          "div",
          { className: Object(b.a)(g.Container, g.Mobile) },
          t.map(n),
          i.a.createElement(I.a, {
            trigger: "repeated",
            onVisibilityChange: function (e) {
              return e && a();
            },
          }),
          r &&
            i.a.createElement(
              "div",
              { className: g.Loading },
              i.a.createElement(y.a, null)
            )
        );
      }
      var D = n("+9fn"),
        P = n("ehaW"),
        x = n("t0PL"),
        L = n("DPOp"),
        B = n("reUc"),
        R = function (e) {
          var t = e.title,
            n = e.description,
            r = e.actions,
            o = e.children,
            s = e.className,
            l = e.itemClassName,
            c = e.imgSrc,
            m = e.fullbleed,
            d = e.style,
            u = Object(a.f)(e, [
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
            p = "url(" + c + ")",
            f = "mobile" === Object(_.f)();
          return i.a.createElement(
            _.a,
            Object(a.a)(
              {
                padding: ["small", "large"],
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                className: Object(b.a)(L.Container, s),
                style: m ? Object(a.a)({ backgroundImage: p }, d) : d,
              },
              u
            ),
            !m && i.a.createElement(B.a, { src: c }),
            i.a.createElement(
              _.a,
              {
                marginBottom: "medium",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexGrow: 1,
                style: { zIndex: 1 },
              },
              i.a.createElement(
                _.a,
                { display: "flex", flexDirection: "column", flexGrow: 1 },
                i.a.createElement(
                  _.a,
                  {
                    display: "flex",
                    flexDirection: f ? "column" : "row",
                    alignItems: f ? "flex-start" : "center",
                  },
                  i.a.createElement(
                    "div",
                    {
                      style: { transform: "translatey( -1px )" },
                      className: L.Title,
                    },
                    t,
                    " "
                  ),
                  r
                ),
                i.a.createElement("div", { className: L.Description }, n)
              )
            ),
            i.a.createElement(
              _.c,
              {
                spacing: ["xsmall", "small"],
                style: { alignSelf: f ? "flex-start" : "flex-end" },
                itemClassName: l,
              },
              o
            )
          );
        },
        k = function (e) {
          e.theme;
          var t = e.style,
            n = Object(a.f)(e, ["theme", "style"]);
          return i.a.createElement(
            D.a,
            Object(a.a)({}, n, { style: Object(a.a)({}, t) })
          );
        };
      var T = n("+j4l"),
        G = n("7R2k"),
        z = (n("cJ7F"), n("vN/p"));
      function F(e) {
        return Math.max(0, e.cTotalMatchingUnfiltered - e.cTotalMatching);
      }
      function H(e) {
        var t = F(e);
        return 0 === t
          ? null
          : Object(h.f)("#HiddenWithCountButton", t.toLocaleString());
      }
      function U(e) {
        var t = F(e);
        return 0 === t
          ? null
          : i.a.createElement(
              D.c,
              {
                key: "HiddenCallout",
                title: Object(h.l)(
                  "#HiddenItems_Explanation",
                  t,
                  t.toLocaleString()
                ),
              },
              H(e)
            );
      }
      var Z = function (e) {
          switch (e.descriptor.type) {
            case 1:
              var t = i.a.createElement(V, Object(a.a)({}, e));
              return e.descriptor.bHomogeneous
                ? i.a.createElement(z.a, null, t)
                : t;
            case 0:
              var n = i.a.createElement(Q, Object(a.a)({}, e));
              return e.descriptor.bHomogeneous
                ? i.a.createElement(z.a, null, n)
                : n;
            case 2:
              return i.a.createElement(_.b, null, function (t) {
                return "mobile" === t
                  ? i.a.createElement(J, Object(a.a)({}, e))
                  : i.a.createElement(q, Object(a.a)({}, e));
              });
            default:
              return (
                console.error("Unknown cluster display: " + e.descriptor.type),
                null
              );
          }
        },
        V = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              if (1 != this.props.descriptor.type) return null;
              var e = this.props,
                t = e.descriptor,
                n = t.cluster,
                r = (n.id, n.title),
                o = n.subtitle,
                s = n.GetRewards,
                l = t.title,
                c = t.subtitle,
                m = t.bHideHiddenItemCount,
                d = e.linkedPage,
                u = e.additionalFilter,
                p = {
                  getItems: function (e, t) {
                    return s(e, t, u);
                  },
                  title: l || r,
                  subtitle: c || o,
                  route: d ? Object(f.e)(d) : void 0,
                  bHideHiddenItemCount: !!m,
                };
              return i.a.createElement(_.b, null, function (e) {
                return "mobile" === e
                  ? i.a.createElement(W, Object(a.a)({}, p))
                  : i.a.createElement(Y, Object(a.a)({}, p));
              });
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(i.a.Component),
        W = Object(m.a)(function (e) {
          var t = e.title,
            n = (e.subtitle, e.route),
            a = e.getItems,
            r = e.bHideHiddenItemCount,
            o = i.a.useState(10),
            s = o[0],
            l = o[1],
            c = a(0, s),
            m = c.rewards,
            u = c.bLoadingMore;
          if (0 === c.cTotalMatching) return null;
          var p = !r && !n && H(c);
          return i.a.createElement(
            D.b,
            {
              title: t,
              subtitle: p || void 0,
              rightActions: n
                ? i.a.createElement(
                    d.b,
                    { to: n },
                    i.a.createElement(D.a, null, Object(h.f)("#SeeAllButton"))
                  )
                : void 0,
            },
            i.a.createElement(A, {
              items: m,
              loadMore: function () {
                return l(s + 10);
              },
              bLoadingMore: u,
              renderItem: function (e) {
                return i.a.createElement(X, { definition: e, key: e.defid });
              },
            })
          );
        }),
        Y = Object(m.a)(function (e) {
          var t = e.title,
            n = e.subtitle,
            r = e.route,
            o = e.getItems,
            s = e.bHideHiddenItemCount,
            l = o(0, 0),
            c = v(
              function (e, t) {
                return o(e, t).rewards;
              },
              function (e) {
                return i.a.createElement(X, { definition: e, key: e.defid });
              },
              {
                itemClassName: G.ItemHover,
                fnRenderItemSkeleton: function () {
                  return i.a.createElement(P.f, null);
                },
              }
            ),
            m = c.bAllowNext || c.bAllowPrev,
            u = "";
          if (
            ((u =
              l.cMaxToReturn > 0
                ? Object(h.f)("#SeeAllButton")
                : l.cTotalMatching > 0
                ? Object(h.f)(
                    "#SeeAllWithCountButton",
                    l.cTotalMatching.toLocaleString()
                  )
                : Object(h.f)("#SeeAllButton")),
            0 === l.cTotalMatching && !l.bLoadingMore)
          )
            return null;
          var p = !m || !r,
            f = !s && p && U(l),
            _ = [],
            g = [];
          return (
            !p &&
              _.push(
                i.a.createElement(
                  d.b,
                  { to: r, key: "SeeAll" },
                  i.a.createElement(D.a, null, u)
                )
              ),
            m &&
              g.push(
                i.a.createElement(
                  M,
                  Object(a.a)({ key: "CarouselControls" }, c)
                )
              ),
            f && (0 == g.length ? g.push(f) : 0 == _.length && _.push(f)),
            i.a.createElement(
              D.b,
              { title: t, subtitle: n, leftActions: _, rightActions: g },
              i.a.createElement(
                w,
                Object(a.a)({ style: { width: "100%", flexWrap: "wrap" } }, c)
              )
            )
          );
        }),
        Q = Object(m.a)(function (e) {
          var t = e.descriptor,
            n = t.title,
            a = t.subtitle,
            r = t.cluster,
            o = r.id,
            s = r.title,
            l = r.subtitle,
            c = r.GetRewards,
            m = e.additionalFilter,
            d = function (e, t) {
              return c(e, t, m);
            },
            u = U(d(0, 0));
          return i.a.createElement(
            D.b,
            { title: n || s, subtitle: a || l, rightActions: u || void 0 },
            i.a.createElement(x.a, {
              style: { width: "100%" },
              itemClassName: G.ItemHover,
              getItems: d,
              renderItem: function (e) {
                return i.a.createElement(X, { definition: e, key: e.defid });
              },
              renderItemSkeleton: function () {
                return i.a.createElement(P.f, null);
              },
              key: o + "||" + JSON.stringify(m),
            })
          );
        }),
        q = Object(m.a)(function (e) {
          var t = e.descriptor,
            n = e.additionalFilter,
            a = e.linkedPage;
          if (2 !== t.type)
            return (
              console.error(
                "Attempt to render a hero cluster with a non-hero view. Cluster " +
                  t.cluster.id
              ),
              null
            );
          var r = t.strImage,
            o = t.bFullBleedImage,
            s = t.theme,
            l = t.title,
            c = t.subtitle,
            m = t.cluster,
            u = m.title,
            p = m.subtitle,
            _ = m.GetRewards,
            g = a ? Object(f.e)(a) : void 0,
            b = _(0, 3, n),
            y =
              b.bLoadingMore && 0 === b.rewards.length
                ? [
                    i.a.createElement(P.f, { key: "0" }),
                    i.a.createElement(P.f, { key: "1" }),
                    i.a.createElement(P.f, { key: "2" }),
                  ]
                : b.rewards.map(function (e) {
                    return i.a.createElement(X, {
                      definition: e,
                      key: e.defid,
                      theme: s,
                    });
                  });
          return i.a.createElement(
            D.b,
            null,
            i.a.createElement(
              R,
              {
                title: l || u,
                description: c || p,
                imgSrc: r,
                fullbleed: o,
                style: { width: "100%" },
                itemClassName: G.ItemHover,
                actions: i.a.createElement(
                  d.b,
                  { to: g },
                  i.a.createElement(
                    k,
                    { theme: s },
                    Object(h.f)("#SeeAllButton")
                  )
                ),
              },
              y
            )
          );
        }),
        J = Object(m.a)(function (e) {
          var t = e.descriptor,
            n = e.additionalFilter,
            a = e.linkedPage;
          if (2 !== t.type)
            return (
              console.error(
                "Attempt to render a hero cluster with a non-hero view. Cluster " +
                  t.cluster.id
              ),
              null
            );
          var r = t.strImage,
            o = t.bFullBleedImage,
            s = t.theme,
            l = t.title,
            c = (t.subtitle, t.cluster),
            m = c.title,
            u = (c.subtitle, c.GetRewards),
            p = a ? Object(f.e)(a) : void 0;
          return i.a.createElement(
            D.b,
            null,
            i.a.createElement(
              R,
              {
                title: l || m,
                description: "",
                imgSrc: r,
                fullbleed: o,
                style: { width: "100%" },
                itemClassName: G.ItemHover,
                actions: i.a.createElement(
                  d.b,
                  { to: p },
                  i.a.createElement(
                    k,
                    { theme: s, className: G.MobileHeroAction },
                    Object(h.f)("#SeeAllButton")
                  )
                ),
              },
              i.a.createElement(A, {
                items: u(0, 2, n).rewards,
                loadMore: function () {},
                renderItem: function (e) {
                  return i.a.createElement(X, {
                    definition: e,
                    key: e.defid,
                    theme: s,
                  });
                },
              })
            )
          );
        }),
        X = function (e) {
          var t = e.definition,
            n = e.theme,
            a = Object(o.g)();
          return i.a.createElement(P.e, {
            definition: t,
            onClick: function (e) {
              5 === t.type || 6 === t.type
                ? a.push(s.b.LoyaltyItemBundle(t.defid))
                : Object(T.e)(e, t);
            },
            theme: n,
          });
        },
        K = n("Qpv1");
      function $(e) {
        var t = e.title,
          n = e.description,
          a = e.image,
          r = e.iconComponent,
          o = e.linked_page,
          s = e.link_text,
          l = r,
          c = "string" == typeof o ? o : Object(f.e)(o);
        return i.a.createElement(
          D.b,
          null,
          i.a.createElement(
            "div",
            { className: K.Banner },
            a && i.a.createElement("img", { className: K.Image, src: a }),
            r && i.a.createElement(l, { className: K.Image }),
            i.a.createElement(
              "div",
              { className: K.Content },
              i.a.createElement("div", { className: K.Title }, t),
              i.a.createElement("div", { className: K.Description }, n)
            ),
            i.a.createElement(d.c, { className: K.Link, to: c }, s)
          )
        );
      }
      var ee = n("qD+2"),
        te = n("n4wG"),
        ne = n("Matr"),
        ae = n("StxQ"),
        re = n("nXE5"),
        ie = n("0OaU"),
        oe = (n("kqfX"), n("6c1j")),
        se = n.n(oe),
        le = n("mgoM"),
        ce = n("jUCX"),
        me = n("WonJ"),
        de = n.n(me),
        ue = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            Object.defineProperty(t, "hoverClass", {
              get: function () {
                return de.a.hoverParent;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.persona,
                n = e.animating,
                i = e.className,
                o = e.size,
                s = e.dim,
                l = Object(a.f)(e, [
                  "persona",
                  "animating",
                  "className",
                  "size",
                  "dim",
                ]),
                c = "";
              return (
                "medium" == o
                  ? (c = de.a.Medium)
                  : "large" == o && (c = de.a.Large),
                r.createElement(
                  "div",
                  Object(a.a)(
                    {
                      className: Object(b.a)(
                        de.a.SnoozeContainer,
                        t.online_state,
                        i,
                        n && de.a.animating,
                        c,
                        s && de.a.Dim
                      ),
                    },
                    l
                  ),
                  r.createElement(
                    "div",
                    {
                      "data-text": "Z",
                      className: Object(b.a)(de.a.SnoozeZ, de.a.Z1),
                    },
                    "Z"
                  ),
                  r.createElement(
                    "div",
                    {
                      "data-text": "Z",
                      className: Object(b.a)(de.a.SnoozeZ, de.a.Z2),
                    },
                    "Z"
                  ),
                  r.createElement(
                    "div",
                    {
                      "data-text": "Z",
                      className: Object(b.a)(de.a.SnoozeZ, de.a.Z3),
                    },
                    "Z"
                  )
                )
              );
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(r.Component),
        pe = (n("li7h"), n("6Y59")),
        fe = n("Xfd2"),
        _e = n.n(fe),
        he = n("kkPE"),
        ge = Object(m.a)(function (e) {
          var t = e.persona,
            n = e.className,
            i = Object(a.f)(e, ["persona", "className"]);
          if (!t) return null;
          if (!t.is_online) return null;
          var o = t.HasStateFlag(512),
            s = t.HasStateFlag(2048),
            l = !s && t.HasStateFlag(1024);
          return r.createElement(
            r.Fragment,
            null,
            o &&
              r.createElement(
                "div",
                Object(a.a)(
                  {
                    className: Object(b.a)(
                      n,
                      _e.a.PersonaStatusIcon,
                      _e.a.MobilePhoneIcon,
                      Object(ce.b)(t)
                    ),
                    title: Object(h.f)("#Platform_Hint_Mobile"),
                  },
                  i
                ),
                r.createElement(he.b, null)
              ),
            s &&
              r.createElement(
                "div",
                Object(a.a)(
                  {
                    className: Object(b.a)(
                      n,
                      _e.a.PersonaStatusIcon,
                      _e.a.VRIcon,
                      Object(ce.b)(t)
                    ),
                    title: Object(h.f)("#Platform_Hint_VR"),
                  },
                  i
                ),
                r.createElement(pe.tb, null)
              ),
            l &&
              r.createElement(
                "div",
                Object(a.a)(
                  {
                    className: Object(b.a)(
                      n,
                      _e.a.PersonaStatusIcon,
                      _e.a.BigPictureIcon,
                      Object(ce.b)(t)
                    ),
                    title: Object(h.f)("#Platform_Hint_BigPicture"),
                  },
                  i
                ),
                r.createElement(pe.g, null)
              )
          );
        }),
        be = n("ksWZ"),
        ye = n.n(be);
      function Ie(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "span",
            { className: ye.a.partyBeaconJoin },
            Object(h.f)("#User_WantsToPlay")
          ),
          " – ",
          e.persona.GetCurrentGameName()
        );
      }
      var Ce = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                n = e.onContextMenu,
                i = e.persona,
                o = e.eFriendRelationship,
                s = e.bIsSelf,
                l = e.bParenthesizeNicknames,
                c = e.strNickname,
                m = e.bCompactView,
                d = e.bHideGameName,
                u = e.bHideEnhancedRichPresenceLabel,
                p = e.bHideSnooze,
                f = e.renderStatus,
                _ = e.renderRichPresence,
                g = e.bHidePersona,
                y = e.bDNDSet,
                I = e.bHasPartyBeacon,
                C = e.bHasGamePrivacy,
                v = e.bNoMask,
                w = Object(a.f)(e, [
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
                M = null,
                N = null,
                j = null,
                E = [
                  t,
                  ye.a.personaNameAndStatusLabel,
                  Object(ce.b)(i),
                  m && ye.a.compactView,
                  v && ye.a.NoMask,
                ];
              f
                ? (N = f())
                : I || i.has_public_party_beacon
                ? (N = r.createElement(Ie, { persona: i }))
                : Object(le.a)(o)
                ? ((N = Object(h.f)("#PersonaStateBlocked")),
                  E.push(ye.a.blocked))
                : i.is_ingame
                ? ((N =
                    !i.is_in_nonsteam_game || s || Object(le.b)(o)
                      ? i.GetCurrentGameName()
                      : Object(h.f)("#PersonaStateInNonSteamGame")),
                  s || g
                    ? s &&
                      i.is_awayOrSnooze &&
                      (j = Object(h.f)("#PersonaStateAway"))
                    : (j = i.GetCurrentGameRichPresence()))
                : i.m_broadcastAccountId &&
                  (N = Object(h.f)("#PersonaStateWatchingBroadcast")),
                N || (N = i.GetLocalizedOnlineStatus());
              var S = !g && !p;
              !1 === p && (S = !0),
                i.is_awayOrSnooze &&
                  S &&
                  (M = r.createElement(ue, { persona: i }));
              var O = null;
              n
                ? (O = r.createElement(
                    "div",
                    { className: "ContextMenuButton", onClick: n },
                    r.createElement(pe.x, null)
                  ))
                : E.push(ye.a.noContextMenu),
                g && E.push(ye.a.hidePersona),
                _ && (j = _()),
                (!d && j) || E.push(ye.a.twoLine);
              var A = c && !l,
                D = A ? c : i.m_strPlayerName,
                P = !g && (!d || !j) && !u && j;
              return r.createElement(
                "div",
                Object(a.a)({}, w, {
                  className: b.a.apply(void 0, E),
                  onContextMenu: n,
                }),
                r.createElement(
                  "div",
                  {
                    className: Object(b.a)(
                      ye.a.statusAndName,
                      P && ye.a.threeLines
                    ),
                  },
                  r.createElement(
                    "div",
                    { className: ye.a.playerName },
                    D || " ",
                    l &&
                      c &&
                      r.createElement(
                        "span",
                        { className: ye.a.playerNickname },
                        "(",
                        c,
                        ")"
                      )
                  ),
                  y &&
                    r.createElement(
                      "div",
                      {
                        className: ye.a.DNDContainer,
                        title: Object(h.f)("#User_ToggleDoNotDisturb"),
                      },
                      r.createElement(pe.v, null)
                    ),
                  A &&
                    r.createElement(
                      "span",
                      {
                        className: ye.a.playerNicknameBracket,
                        title: Object(h.f)("#isNickname"),
                      },
                      " *"
                    ),
                  r.createElement(ge, { persona: i }),
                  M,
                  (i.m_bPlayerNamePending || i.m_bAvatarPending) &&
                    r.createElement(
                      "div",
                      {
                        className: ye.a.PendingPersona,
                        title: Object(h.f)("#SteamChina_PendingPersonaName"),
                      },
                      r.createElement(pe.q, null)
                    ),
                  O
                ),
                !g &&
                  r.createElement(
                    "div",
                    { className: ye.a.richPresenceContainer },
                    (!d || !j) &&
                      r.createElement(
                        "div",
                        {
                          className: Object(b.a)(
                            ye.a.gameName,
                            P && ye.a.threeLines,
                            ye.a.richPresenceLabel,
                            "no-drag"
                          ),
                        },
                        C &&
                          r.createElement(
                            "div",
                            {
                              className: ye.a.gameIsPrivateIcon,
                              title: Object(h.f)("#User_GameInfoHidden"),
                            },
                            r.createElement(pe.I, null)
                          ),
                        N
                      ),
                    !u &&
                      j &&
                      r.createElement(
                        "div",
                        {
                          className: Object(b.a)(
                            ye.a.richPresenceLabel,
                            "no-drag"
                          ),
                        },
                        j,
                        " "
                      )
                  )
              );
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(r.Component),
        ve =
          (Object(m.a)(function (e) {
            var t = e.persona,
              n = e.bParenthesizeNicknames,
              i = e.strNickname,
              o = e.className,
              s = Object(a.f)(e, [
                "persona",
                "bParenthesizeNicknames",
                "strNickname",
                "className",
              ]),
              l = i && !n ? i : t.m_strPlayerName;
            return r.createElement(
              "span",
              Object(a.a)({}, s, {
                className: Object(b.a)(o, Object(ce.b)(t)),
              }),
              r.createElement(
                "span",
                { className: ye.a.playerName },
                l || " ",
                n &&
                  i &&
                  r.createElement(
                    "span",
                    { className: ye.a.playerNickname },
                    "(",
                    i,
                    ")"
                  )
              )
            );
          }),
          n("Gpul")),
        we =
          (Object(m.a)(function () {
            var e = Object(r.useRef)(null),
              t = Object(r.useRef)(null),
              n = f.b.Get().GetGoldenProfileDefinition();
            if (!n) return null;
            var a = f.b.Get().GetPersonaState(),
              o = f.b.Get().GetEquippedItems();
            return i.a.createElement(
              re.e,
              { background: se.a },
              i.a.createElement(
                _.a,
                {
                  paddingY: "xlarge",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
                i.a.createElement(
                  _.a,
                  {
                    className: ne.GoldenProfileHeaderContainer,
                    paddingY: "large",
                    display: "flex",
                    flexDirection: "row",
                  },
                  i.a.createElement(
                    "div",
                    { className: ne.PersonaPreviewContainer },
                    a
                      ? i.a.createElement(
                          _.a,
                          {
                            className: ne.PersonaPreviewContainer,
                            paddingY: "none",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                          },
                          i.a.createElement(
                            "div",
                            { className: ne.AvatarAndPersonaContainer },
                            i.a.createElement(
                              "div",
                              { className: ne.AvatarHolder },
                              i.a.createElement(ve.c, {
                                size: "FillArea",
                                className: ne.CurrentAvatar,
                                persona: a,
                                animatedAvatar: o.animated_avatar,
                              })
                            ),
                            i.a.createElement(Ce, {
                              persona: a,
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
                  i.a.createElement(
                    _.a,
                    {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      flex: "1 1",
                    },
                    i.a.createElement(
                      "div",
                      { className: ne.GoldenProfileTitle },
                      Object(h.f)("#GoldenProfile_Title")
                    ),
                    i.a.createElement(
                      "div",
                      { className: ne.GoldenProfileDesc },
                      Object(h.f)("#GoldenProfile_Desc")
                    ),
                    i.a.createElement(
                      "div",
                      { className: ne.GoldenProfileDesc },
                      Object(h.f)("#GoldenProfile_Expiration")
                    ),
                    i.a.createElement(
                      u.a,
                      { className: ne.BlueButton },
                      i.a.createElement(
                        ae.a,
                        {
                          className: ne.GoldenProfileCost,
                          onClick: function (e) {
                            return Object(T.e)(e, n);
                          },
                          size: 1.125,
                          amount: parseInt(n.point_cost),
                        },
                        " ",
                        Object(h.f)("#Rewards_Points")
                      )
                    )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: ne.ProfileContainer },
                  i.a.createElement(
                    "div",
                    { ref: t, className: ne.ProfileThrobber },
                    i.a.createElement(ie.a, {
                      position: "center",
                      size: "xlarge",
                      string: Object(h.f)("#GoldenProfile_Loading"),
                    })
                  ),
                  i.a.createElement("iframe", {
                    ref: e,
                    className: ne.ProfileFrame,
                    src:
                      l.d.COMMUNITY_BASE_URL +
                      "profiles/" +
                      (f.b.Get().BIsLoggedIn()
                        ? l.k.steamid
                        : 2 == l.d.EUNIVERSE
                        ? "148618792083695825"
                        : "76561197960266962") +
                      "?previewprofile=1&appid=" +
                      f.b.Get().GetCurrentSeasonalAppID(),
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
          n("/SGo")),
        Me = n.n(we),
        Ne = n("eOCM"),
        je = n.n(Ne),
        Ee = n("HJR3"),
        Se = n.n(Ee),
        Oe = n("DtjR"),
        Ae = n.n(Oe),
        De = n("TBZS"),
        Pe = n.n(De),
        xe = n("+m6q"),
        Le = n.n(xe),
        Be = n("IfXo"),
        Re = n.n(Be),
        ke = n("V+CE"),
        Te = n.n(ke),
        Ge = n("RImk"),
        ze = n("5/sD"),
        Fe = n.n(ze),
        He = (n("0xSo"), n("cOvF")),
        Ue = n("Vlb1"),
        Ze = n("Gp1o"),
        Ve = n("CdLH"),
        We = Object(m.a)(function (e) {
          var t = {
              item_name: "Free Item",
              item_title: Object(h.f)("#SummerSale_ItemTitle"),
              animated: !0,
            },
            n = {
              defid: void 0,
              appid: f.c.Get().GetCurrentSaleRewardAppID(),
              type: 1,
              community_item_class: 11,
              point_cost: "0",
              quantity: "1",
              active: !0,
              community_item_data: t,
            },
            a = null,
            r = null,
            o = function (e) {
              return Object(T.e)(e, n, null, !0);
            },
            c = Fe.a,
            m = Object(h.f)("#SummerSale_ItemName"),
            u = f.c.Get().BCanClaimFreeSaleReward();
          if (!u) {
            (r = i.a.createElement(
              "div",
              { className: Ue.ClaimedText },
              Object(h.f)("#Rewards_Claimed")
            )),
              (a = Object(b.a)(Ge.SaleRewardItemOwned, Ue.OwnedItem)),
              (o = null);
            var p = f.c.Get().GetClaimedSaleRewardItemDef();
            p &&
              ((m = p.community_item_data.item_title),
              (c =
                l.d.MEDIA_CDN_COMMUNITY_URL +
                "images/items/" +
                p.appid +
                "/" +
                p.community_item_data.item_image_small));
          }
          return i.a.createElement(
            _.a,
            {
              display: "flex",
              flexDirection: "column",
              className: Ge.SaleRewardContainer,
            },
            i.a.createElement(
              _.a,
              { className: Ge.SaleRewardContainerFlex },
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  className: Ge.LeftColumn,
                },
                i.a.createElement(
                  "div",
                  { className: Ge.SaleRewardLogoContainerFlex },
                  i.a.createElement("img", {
                    className: Ge.SaleRewardLogo,
                    alt: "Sale",
                    src: f.b.Get().GetFreeItemHeaderSource(),
                  })
                ),
                i.a.createElement(
                  "div",
                  { className: Ge.SaleRewardTextContainer },
                  i.a.createElement(
                    "div",
                    { className: Ge.SaleRewardSubHeader },
                    Object(h.f)("#SummerSale_FreeDesc_2")
                  ),
                  !u &&
                    i.a.createElement(
                      "div",
                      { className: Ge.SummerNextStop },
                      i.a.createElement(Ye, null)
                    ),
                  i.a.createElement(
                    d.b,
                    { className: Ge.RulesLink, to: s.b.LoyaltyGiveawayRules() },
                    Object(h.f)("#SummerSale_Redeem_Rules")
                  )
                )
              ),
              i.a.createElement(
                "div",
                { className: Ge.FreeItemContainer },
                i.a.createElement(
                  P.a,
                  {
                    name: m,
                    cost: 0,
                    attributes: [
                      i.a.createElement(He.b, {
                        className: Ue.IconAnimated,
                        key: "animated",
                      }),
                    ],
                    iconComponent: pe.o,
                    styleOverride: a,
                    desc: Object(h.f)("#CommunityItemClass_Sticker"),
                    strPriceOverride: r,
                    onClick: o,
                  },
                  i.a.createElement("img", {
                    className: Ue.ImageMedium,
                    src: c,
                  })
                )
              )
            )
          );
        }),
        Ye = Object(m.a)(function () {
          var e = f.c.Get().GetNextClaimTime();
          return e
            ? i.a.createElement(
                "span",
                { className: Ge.NextStop },
                i.a.createElement(
                  "span",
                  { className: Ge.Title },
                  Object(h.f)("#SummerSale_NextStop")
                ),
                i.a.createElement(Qe, {
                  className: Ge.Timer,
                  time: e.getTime(),
                })
              )
            : null;
        }),
        Qe = Object(m.a)(function (e) {
          var t = e.time,
            n = Object(a.f)(e, ["time"]),
            r = Math.floor(Math.max(0, t - Ze.b()) / 1e3),
            o = Math.floor(r / Ve.e.PerHour),
            s = Math.floor((r - o * Ve.e.PerHour) / Ve.e.PerMinute),
            l = Math.floor(r - (o * Ve.e.PerHour + s * Ve.e.PerMinute));
          return i.a.createElement(
            "span",
            Object(a.a)({ style: { fontFamily: "monospace" } }, n),
            qe(o),
            ":",
            qe(s),
            ":",
            qe(l)
          );
        }),
        qe = function (e) {
          return e.toString().padStart(2, "0");
        },
        Je = i.a.lazy(function () {
          return n.e(73).then(n.bind(null, "yDev"));
        }),
        Xe = i.a.lazy(function () {
          return n.e(72).then(n.bind(null, "f4w8"));
        }),
        Ke = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(tt, null),
                i.a.createElement($e, null)
              );
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(i.a.Component),
        $e = Object(m.a)(function () {
          var e = Object(o.h)("*/reward/:definitionid"),
            t = e && e.params && e.params.definitionid,
            n = parseInt(t),
            a = isNaN(n) ? null : f.b.Get().GetRewardItem(n);
          return (
            i.a.useEffect(
              function () {
                a && Object(T.e)(null, a);
              },
              [a]
            ),
            null
          );
        }),
        et = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetCoupon = function () {
              var e = f.b.Get().GetCouponPromosForUser(),
                t = f.b.Get().GetPointsAvailable(),
                n = 0,
                a = 0;
              return (
                e.forEach(function (e) {
                  var r = f.b.Get().GetCouponDefinition(e.loyalty_reward_id);
                  if (r) {
                    e.max_use_count * parseInt(e.discount_amount),
                      e.available_use_count;
                    for (var i = 0; i < e.available_use_count; i++) {
                      n + parseInt(r.point_cost) <= t.getLowBits() &&
                        ((a += parseInt(e.discount_amount)),
                        (n += parseInt(r.point_cost))),
                        (a = Math.max(a, parseInt(e.discount_amount))),
                        n || (n = parseInt(r.point_cost));
                    }
                  }
                }),
                null
              );
            }),
            (t.prototype.render = function () {
              var e = [];
              f.b
                .Get()
                .getLoyaltyRewardDefMap()
                .forEach(function (t) {
                  e.length < 3 && 1 == t.type && e.push(t);
                });
              var t = f.b
                  .Get()
                  .GetPageDescriptor({ type: "custom", pageid: f.f }),
                n = i.a.createElement(
                  "div",
                  { className: p.PageHomeTop },
                  i.a.createElement(
                    "div",
                    { className: p.PageHomeBanner },
                    i.a.createElement("img", {
                      className: p.HomeRewardsPointsIcon,
                      src: Me.a,
                    }),
                    i.a.createElement("img", {
                      className: p.PageHomeBannerFloor,
                      src: Te.a,
                    }),
                    i.a.createElement(
                      "div",
                      { className: p.PageHomeBannerIcons },
                      i.a.createElement("img", {
                        className: p.PageHomeBannerChicken,
                        src: Pe.a,
                      }),
                      i.a.createElement("img", {
                        className: p.PageHomeBannerBored,
                        src: je.a,
                      }),
                      i.a.createElement("img", {
                        className: p.PageHomeBannerHugs,
                        src: Le.a,
                      }),
                      i.a.createElement("img", {
                        className: p.PageHomeBannerHappy,
                        src: Se.a,
                      }),
                      i.a.createElement("img", {
                        className: p.PageHomeBannerBoombox,
                        src: Ae.a,
                      }),
                      i.a.createElement("img", {
                        className: p.PageHomeBannerDance,
                        src: Re.a,
                      })
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { className: p.PageHomeTitleContainer },
                    i.a.createElement(
                      "div",
                      { className: p.PageHomeTopTitle },
                      Object(h.f)("#ShopHome_UseRewardPoints")
                    ),
                    i.a.createElement(
                      "div",
                      { className: p.PageHomeTopSubTitle },
                      Object(h.f)("#ShopHome_UseRewardPoints_Subtitle")
                    )
                  ),
                  i.a.createElement(
                    d.b,
                    { to: s.b.LoyaltyHowItWorks() },
                    i.a.createElement(
                      u.a,
                      { className: p.PageHomeHowItWorks },
                      " ",
                      Object(h.f)("#ShopHome_HowLinkBtn")
                    )
                  )
                );
              return i.a.createElement(
                re.b,
                null,
                t &&
                  i.a.createElement(
                    it,
                    { header: n, descriptor: t },
                    f.b.Get().BIsSaleActive() &&
                      i.a.createElement(D.b, null, i.a.createElement(We, null))
                  )
              );
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(i.a.Component),
        tt = function () {
          return i.a.createElement(
            o.d,
            null,
            i.a.createElement(
              o.b,
              { path: s.b.LoyaltySteamBadge() },
              i.a.createElement(nt, null)
            ),
            i.a.createElement(
              o.b,
              { path: s.b.LoyaltyByGame() },
              i.a.createElement(ct, null)
            ),
            !1,
            i.a.createElement(
              o.b,
              { path: s.b.LoyaltyProfileCustomizations() },
              i.a.createElement(Je, null)
            ),
            i.a.createElement(o.b, {
              path: s.b.LoyaltyItemBundle(":bundleid"),
              render: function (e) {
                return i.a.createElement(Xe, Object(a.a)({}, e));
              },
            }),
            i.a.createElement(o.b, {
              path: s.b.LoyaltyStore() + "/app/:appid/cluster/:clusterindex",
              render: function (e) {
                return i.a.createElement(ot, Object(a.a)({}, e));
              },
            }),
            i.a.createElement(o.b, {
              path: s.b.LoyaltyStore() + "/app/:appid",
              render: function (e) {
                return i.a.createElement(st, {
                  appid: parseInt(e.match.params.appid),
                });
              },
            }),
            i.a.createElement(o.b, {
              path: s.b.LoyaltyStore() + "/c/:pageid/cluster/:clusterindex",
              render: function (e) {
                return i.a.createElement(ot, Object(a.a)({}, e));
              },
            }),
            i.a.createElement(o.b, {
              path: s.b.LoyaltyStore() + "/c/:pageid",
              render: function (e) {
                return i.a.createElement(rt, { pageid: e.match.params.pageid });
              },
            }),
            i.a.createElement(o.b, null, i.a.createElement(at, null))
          );
        },
        nt = function () {
          return i.a.createElement(te.b, null);
        },
        at = function () {
          return i.a.createElement(et, null);
        },
        rt = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              f.b.Get().SetIsUsingAppIDFilters(!0);
            }),
            (t.prototype.componentWillUnmount = function () {
              f.b.Get().SetIsUsingAppIDFilters(!1);
            }),
            (t.prototype.render = function () {
              var e = this.props.pageid,
                t = f.b.Get().GetAppIDFilters(),
                n = Array.from(t.keys()),
                a = f.b.Get().GetPageDescriptor({ type: "custom", pageid: e });
              return i.a.createElement(
                re.e,
                null,
                a
                  ? i.a.createElement(it, {
                      descriptor: a,
                      additionalFilter: n.length ? { appid: n } : void 0,
                    })
                  : i.a.createElement(y.a, null)
              );
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(i.a.Component),
        it = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.descriptor,
                n = t.items,
                r = t.title,
                o = t.subtitle,
                s = t.headerImage,
                l = t.params,
                c = e.header,
                m = e.additionalFilter,
                d =
                  c ||
                  i.a.createElement(re.f, {
                    title: r,
                    subtitle: o,
                    headerImage: s,
                  });
              return i.a.createElement(
                _.a,
                { paddingX: "none" },
                i.a.createElement(
                  _.e,
                  {
                    className: p.PageItemsContainer,
                    itemClassName: p.PageItemsContainerChildren,
                    spacing: "xlarge",
                  },
                  d,
                  this.props.children,
                  n.map(function (e, t) {
                    switch (e.type) {
                      case "banner":
                        e.type;
                        var n = Object(a.f)(e, ["type"]);
                        return i.a.createElement(
                          $,
                          Object(a.a)({}, n, { key: e.title + "_" + t })
                        );
                      case "clusterview":
                        return i.a.createElement(Z, {
                          key: e.view.cluster.id + "_" + t,
                          descriptor: e.view,
                          additionalFilter: m,
                          linkedPage:
                            null === e.view.linkedPage
                              ? void 0
                              : e.view.linkedPage ||
                                Object(a.a)(Object(a.a)({}, l), {
                                  clusterindex: t,
                                }),
                        });
                    }
                  })
                )
              );
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(i.a.Component),
        ot = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              f.b.Get().SetIsUsingAppIDFilters(!0);
            }),
            (t.prototype.componentWillUnmount = function () {
              f.b.Get().SetIsUsingAppIDFilters(!1);
            }),
            (t.prototype.DeriveClusterView = function () {
              var e,
                t = this.props.match.params,
                n = t.pageid,
                r = t.appid,
                i = t.clusterindex,
                o = parseInt(i);
              if (isNaN(o)) return null;
              if (n) e = { type: "custom", pageid: n };
              else {
                if (!r)
                  return (
                    console.error(
                      "Could not determine owning page for cluster"
                    ),
                    null
                  );
                var s = parseInt(r);
                if (isNaN(s)) return null;
                e = { type: "app", appid: s };
              }
              var l = f.b.Get().GetPageDescriptor(e);
              if (!l) return null;
              var c = l.items[o];
              return c && "clusterview" === c.type
                ? Object(a.a)(Object(a.a)({}, c.view), { type: 0 })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this.DeriveClusterView();
              if (!e) return null;
              var t = f.b.Get().GetAppIDFilters(),
                n = Array.from(t.keys());
              return i.a.createElement(
                re.e,
                null,
                i.a.createElement(
                  _.a,
                  {
                    paddingY: "xlarge",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                  i.a.createElement(Z, {
                    descriptor: e,
                    additionalFilter: n.length ? { appid: n } : void 0,
                  })
                )
              );
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(i.a.Component),
        st = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props.appid,
                t = f.b.Get().GetPageDescriptor({ type: "app", appid: e }),
                n = ee.a.GetAppInfo(e);
              return t
                ? i.a.createElement(
                    re.a,
                    { appid: e },
                    i.a.createElement(it, {
                      header: i.a.createElement(re.f, {
                        title: i.a.createElement(
                          "a",
                          { href: l.d.STORE_BASE_URL + "app/" + n.appid },
                          n.name
                        ),
                        subtitle: t.subtitle,
                      }),
                      descriptor: t,
                    })
                  )
                : null;
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(i.a.Component),
        lt = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              return f.b.Get().BIsLoggedIn()
                ? this.props.children
                : i.a.createElement(
                    re.e,
                    null,
                    i.a.createElement(it, {
                      descriptor: this.props.descriptor,
                    }),
                    i.a.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        },
                      },
                      i.a.createElement(
                        "div",
                        null,
                        Object(h.f)("#RequiresLogin_Desc")
                      ),
                      i.a.createElement(
                        "div",
                        { style: { paddingTop: "10px" } },
                        i.a.createElement(
                          "span",
                          {
                            className: Object(b.a)(
                              "btn_green_white_innerfade",
                              " btn_medium"
                            ),
                            onClick: function () {
                              return f.b.Get().ShowLoginDialog();
                            },
                          },
                          i.a.createElement(
                            "span",
                            null,
                            Object(h.f)("#RequiresLogin_Button")
                          )
                        )
                      )
                    )
                  );
            }),
            t
          );
        })(i.a.Component),
        ct = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { cVisible: 5 }), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              f.b.Get().SetIsUsingAppIDFilters(!0);
            }),
            (t.prototype.componentWillUnmount = function () {
              f.b.Get().SetIsUsingAppIDFilters(!1);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state.cVisible,
                n = f.b.Get().GetAppIDFilters(),
                a = f.b.Get().GetSortedGamesWithRewards();
              0 != n.size &&
                (a = a.filter(function (e) {
                  return n.has(e);
                }));
              var r = {
                title: Object(h.f)("#ShopPageTitle_ByGame"),
                subtitle: Object(h.f)("#ShopPageTitle_ByGame_Subtitle"),
                items: a.slice(0, t).map(function (e) {
                  return {
                    type: "clusterview",
                    view: {
                      type: 1,
                      linkedPage: { type: "app", appid: e },
                      cluster: new f.a(e),
                    },
                  };
                }),
                params: { type: "custom", pageid: "bygame" },
              };
              return i.a.createElement(
                lt,
                { descriptor: r },
                i.a.createElement(
                  re.e,
                  null,
                  i.a.createElement(it, { descriptor: r }),
                  i.a.createElement(I.a, {
                    trigger: "repeated",
                    onVisibilityChange: function (n) {
                      return (
                        n && t < a.length && e.setState({ cVisible: t + 10 })
                      );
                    },
                    rootMargin: "0px 0px 100px 0px",
                  })
                )
              );
            }),
            (t = Object(a.c)([m.a], t))
          );
        })(i.a.Component),
        mt = n("0FY4"),
        dt = Object(m.a)(function () {
          return i.a.createElement(
            re.d,
            null,
            i.a.createElement(
              _.a,
              {
                marginX: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              i.a.createElement(
                _.a,
                {
                  marginY: "xlarge",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  className: mt.Header,
                },
                i.a.createElement(pe.cb, { className: mt.Icon }),
                i.a.createElement(
                  "div",
                  { className: mt.Title },
                  Object(h.f)("#BonusPoints_Title")
                ),
                i.a.createElement(
                  "div",
                  { className: mt.Subtitle },
                  Object(h.f)("#BonusPoints_Description")
                )
              ),
              i.a.createElement(
                _.e,
                { spacing: "small" },
                f.b.Get().active_bonuses.map(function (e) {
                  return i.a.createElement(ut, { key: e.bonusid, bonus: e });
                })
              )
            )
          );
        }),
        ut = Object(m.a)(function (e) {
          var t = e.bonus,
            n = t.appid,
            r = t.points,
            o = t.timestamp_end,
            s = t.internal_description,
            l = Object(a.f)(e, ["bonus"]),
            c = ee.a.GetAppInfo(n),
            m = c.header_image_url,
            d = c.name;
          return i.a.createElement(
            pt,
            Object(a.a)(
              {
                imgSrc: m,
                name: d,
                expiration: o,
                description: s,
                pointValue: r,
              },
              l
            )
          );
        }),
        pt = function (e) {
          var t = e.imgSrc,
            n = e.name,
            a = e.expiration,
            r = e.description,
            o = e.pointValue,
            s = Object(h.q)(a - Date.now() / 1e3, !0);
          return i.a.createElement(
            _.a,
            {
              paddingX: "small",
              paddingY: "xsmall",
              display: "flex",
              flexDirection: "row",
              className: mt.Opportunity,
            },
            i.a.createElement("img", { className: mt.Img, src: t }),
            i.a.createElement(
              _.a,
              {
                paddingX: "xsmall",
                display: "flex",
                flexDirection: "column",
                flex: "1",
              },
              i.a.createElement("div", null, n),
              i.a.createElement("div", null, s),
              i.a.createElement("div", null, r)
            ),
            i.a.createElement(
              "div",
              null,
              i.a.createElement(pe.cb, { className: mt.Icon }),
              i.a.createElement("div", null, "+", o)
            )
          );
        },
        ft = n("kyHq");
      n("6Mq3");
      n("F8+w");
      var _t = n("gxgZ"),
        ht = n.n(_t),
        gt = (n("8j8b"), n("okIP"), n("Lvue"), n("6bk4")),
        bt = n.n(gt),
        yt = n("++az"),
        It = n.n(yt),
        Ct = (n("kJAG"), n("y8q+"), n("sf1Z"), n("Cw7J")),
        vt = n.n(Ct),
        wt =
          (n("FYLW"),
          n("eRlu"),
          n("TL5o"),
          n("J8Mo"),
          n("2y1i"),
          n("tHRV"),
          n("bnhs")),
        Mt = n.n(wt),
        Nt = n("Bww3"),
        jt = n.n(Nt),
        Et = n("eeci"),
        St = n.n(Et),
        Ot = n("9jkg"),
        At = n.n(Ot),
        Dt = n("M2Z0"),
        Pt = n.n(Dt),
        xt = n("7JP+"),
        Lt = n.n(xt),
        Bt = n("nu2M"),
        Rt = n.n(Bt),
        kt = n("FfFA"),
        Tt = n.n(kt),
        Gt = n("bFVC"),
        zt = n.n(Gt),
        Ft = n("Wl4Y"),
        Ht = n.n(Ft),
        Ut = n("BK9T"),
        Zt = n.n(Ut),
        Vt = n("mpVu"),
        Wt = n.n(Vt),
        Yt = n("px4M"),
        Qt = n.n(Yt),
        qt = n("uOv9"),
        Jt = function (e) {
          e.children;
          var t = e.iconComponent,
            n = e.descCallout;
          return i.a.createElement(
            "div",
            { className: qt.CalloutContainer },
            i.a.createElement(
              "div",
              { className: qt.CalloutIconContainer },
              i.a.createElement(t, { className: qt.CalloutIcon })
            ),
            i.a.createElement(
              "div",
              { className: qt.CalloutText },
              " ",
              Object(h.f)(n),
              " "
            )
          );
        },
        Xt = function (e) {
          return i.a.createElement(
            _.a,
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xlarge",
              className: qt.PageContainer,
            },
            i.a.createElement(
              "div",
              { className: qt.HeaderText },
              Object(h.f)("#HowItWorks_SteamPoints")
            ),
            i.a.createElement(
              "div",
              { className: qt.SubHeaderText },
              Object(h.f)("#HowItWorks_SteamPoints_Desc1")
            ),
            i.a.createElement("img", { src: Ht.a, className: qt.HeaderImage }),
            i.a.createElement(
              "div",
              { className: qt.SubHeaderText },
              Object(h.f)("#HowItWorks_SteamPoints_Desc2")
            )
          );
        },
        Kt = function (e) {
          var t,
            n = Object(h.n)(
              "#HowItWorks_Conversion",
              i.a.createElement("span", null, e.numPoints.toLocaleString()),
              i.a.createElement(
                "span",
                null,
                ((t = e.dollarConversion),
                "undefined" == typeof GStoreItemData
                  ? (console.error("Unable to find GStoreItemData"), null)
                  : GStoreItemData.fnFormatCurrency(t))
              )
            );
          return i.a.createElement(
            _.a,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "medium",
              className: qt.PageContainer,
            },
            i.a.createElement(
              "div",
              { className: Object(b.a)(qt.ConvertionSectionTextContainer) },
              i.a.createElement("div", { className: qt.PointsConvertion }, n),
              i.a.createElement(
                "div",
                { className: qt.SectionSubtitle },
                Object(h.f)("#HowItWorks_How_Desc")
              )
            )
          );
        },
        $t = function (e) {
          var t = Object(h.n)(
            "#ShopName",
            i.a.createElement("span", null, Object(h.f)("#ShopNamePre")),
            Object(h.f)("#ShopNamePost")
          );
          return i.a.createElement(
            _.a,
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
            },
            i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                className: qt.UsePointsIconContainer,
              },
              i.a.createElement(He.g, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim1),
              }),
              i.a.createElement(pe.d, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim2),
              }),
              i.a.createElement(pe.e, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim3),
              }),
              i.a.createElement(He.m, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim4),
              }),
              i.a.createElement(pe.o, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim5),
              }),
              i.a.createElement(pe.m, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim6),
              }),
              i.a.createElement(pe.n, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim7),
              }),
              i.a.createElement(He.z, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim8),
              }),
              i.a.createElement(He.g, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim1),
              }),
              i.a.createElement(pe.d, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim2),
              }),
              i.a.createElement(pe.e, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim3),
              }),
              i.a.createElement(He.m, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim4),
              }),
              i.a.createElement(pe.o, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim5),
              }),
              i.a.createElement(pe.m, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim6),
              }),
              i.a.createElement(pe.n, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim7),
              }),
              i.a.createElement(He.z, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim8),
              }),
              i.a.createElement(He.g, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim1),
              }),
              i.a.createElement(pe.d, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim2),
              }),
              i.a.createElement(pe.e, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim3),
              }),
              i.a.createElement(He.m, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim4),
              }),
              i.a.createElement(pe.o, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim5),
              }),
              i.a.createElement(pe.m, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim6),
              }),
              i.a.createElement(pe.n, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim7),
              }),
              i.a.createElement(He.z, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim8),
              }),
              i.a.createElement(He.g, {
                className: Object(b.a)(qt.UsePointsSvg, qt.UsePointsAnim1),
              })
            ),
            i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "xxlarge",
                className: qt.PageContainer,
              },
              i.a.createElement(
                "div",
                { className: qt.ShellHeaderBrandName },
                t
              ),
              i.a.createElement(
                "div",
                { className: qt.SectionSubtitle },
                Object(h.f)("#HowItWorks_UsePoints_Desc1")
              ),
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "large",
                },
                i.a.createElement(Jt, {
                  iconComponent: He.p,
                  descCallout: "#HowItWorks_DoNotExpire",
                }),
                i.a.createElement(Jt, {
                  iconComponent: He.i,
                  descCallout: "#HowItWorks_Permanent",
                }),
                i.a.createElement(Jt, {
                  iconComponent: He.q,
                  descCallout: "#HowItWorks_Marketable",
                })
              ),
              i.a.createElement(
                _.a,
                { className: qt.CollectionItemsContainer },
                i.a.createElement("img", { className: qt.ItemLeft, src: bt.a }),
                i.a.createElement("img", {
                  className: qt.ItemLeftMid,
                  src: je.a,
                }),
                i.a.createElement(
                  "div",
                  { className: qt.ItemMiddle },
                  i.a.createElement("img", {
                    className: qt.ItemFrame,
                    src: vt.a,
                  }),
                  i.a.createElement("img", {
                    className: qt.ItemAvatar,
                    src: It.a,
                  })
                ),
                i.a.createElement("img", {
                  className: qt.ItemRightMid,
                  src: Se.a,
                }),
                i.a.createElement("img", { className: qt.ItemRight, src: Ae.a })
              )
            )
          );
        },
        en = function () {
          var e = s.b.LoyaltyByGame();
          return i.a.createElement(
            "div",
            {
              className: qt.SectionTileContainer,
              style: { backgroundImage: "url(" + ht.a + ")" },
            },
            i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "xlarge",
                paddingLeft: "xlarge",
                paddingBottom: "xxlarge",
              },
              i.a.createElement(He.z, { className: qt.SectionIcons }),
              i.a.createElement(
                d.b,
                { to: e },
                i.a.createElement(
                  "div",
                  { className: qt.SectionTitle },
                  Object(h.f)("#HowItWorks_YourGames")
                )
              ),
              i.a.createElement(
                "div",
                { className: qt.SectionSubtitle },
                Object(h.f)("#HowItWorks_YourGames_Desc1")
              ),
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                },
                i.a.createElement(Jt, {
                  iconComponent: He.q,
                  descCallout: "#HowItWorks_YourGames_TradingCards",
                })
              )
            )
          );
        },
        tn = Object(m.a)(function () {
          var e = f.b.Get().GetCommunityAwardPointsTransferred(),
            t = l.d.STORE_BASE_URL + "labs/trendingreviews/",
            n = l.d.COMMUNITY_BASE_URL + "?subsection=workshop";
          return i.a.createElement(
            _.a,
            {
              id: "CommunityAwards",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
            },
            i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                className: qt.UsePointsIconContainer,
              },
              i.a.createElement("img", { src: jt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Mt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Lt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Rt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Tt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: jt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Pt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Lt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Rt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Tt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: jt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Mt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Lt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Rt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Tt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: jt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Pt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Lt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Rt.a, className: qt.ScrollIcon }),
              i.a.createElement("img", { src: Tt.a, className: qt.ScrollIcon })
            ),
            !1,
            i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "xxlarge",
                className: qt.PageContainer,
              },
              i.a.createElement(
                "div",
                { className: qt.ShellHeaderBrandName },
                Object(h.f)("#HowItWorks_ReviewAwards")
              ),
              i.a.createElement(
                "div",
                { className: qt.SectionSubtitle },
                Object(h.f)("#HowItWorks_ReviewAwardsWinter_Desc", e)
              ),
              i.a.createElement("img", { src: zt.a, className: qt.AwardsUiImg })
            ),
            i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "large",
                className: qt.PageContainer,
              },
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                },
                i.a.createElement("img", {
                  src: St.a,
                  className: qt.AwardsHotTakeApng,
                }),
                i.a.createElement(
                  _.a,
                  { display: "flex", flexDirection: "column" },
                  i.a.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        qt.SectionSubtitle,
                        qt.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(h.f)("#HowItWorks_AwardsReviews", e)
                  ),
                  i.a.createElement(
                    "a",
                    { href: t },
                    i.a.createElement(
                      "div",
                      { className: qt.AwardsLink },
                      Object(h.f)("#HowItWorks_AwardsReviewsLink")
                    )
                  )
                )
              ),
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                },
                i.a.createElement("img", {
                  src: Zt.a,
                  className: qt.AwardsApng,
                }),
                i.a.createElement(
                  _.a,
                  { display: "flex", flexDirection: "column" },
                  i.a.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        qt.SectionSubtitle,
                        qt.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(h.f)("#HowItWorks_AwardsUgc", e)
                  ),
                  i.a.createElement(
                    "a",
                    { href: n },
                    i.a.createElement(
                      "div",
                      { className: qt.AwardsLink },
                      Object(h.f)("#HowItWorks_AwardsUgcLink")
                    )
                  )
                )
              ),
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                },
                i.a.createElement("img", {
                  src: At.a,
                  className: qt.AwardsHotTakeApng,
                }),
                i.a.createElement(
                  _.a,
                  { display: "flex", flexDirection: "column" },
                  i.a.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        qt.SectionSubtitle,
                        qt.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(h.f)("#HowItWorks_AwardsProfile", e)
                  )
                )
              )
            ),
            i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "xlarge",
                className: qt.PageContainer,
              },
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: qt.AwardBadgeContainer,
                },
                i.a.createElement("img", { src: Qt.a }),
                i.a.createElement(
                  "div",
                  {
                    className: qt.SectionTitleSmall,
                    style: { paddingTop: "32px" },
                  },
                  Object(h.f)("#HowItWorks_Patron_Badge"),
                  " "
                ),
                i.a.createElement(
                  "div",
                  { className: qt.SectionSubtitleBadge },
                  Object(h.f)("#HowItWorks_Patron_Badge_Desc")
                )
              ),
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: qt.AwardBadgeContainer,
                },
                i.a.createElement("img", { src: Wt.a }),
                i.a.createElement(
                  "div",
                  {
                    className: qt.SectionTitleSmall,
                    style: { paddingTop: "32px" },
                  },
                  Object(h.f)("#HowItWorks_Contributor_Badge"),
                  " "
                ),
                i.a.createElement(
                  "div",
                  { className: qt.SectionSubtitleBadge },
                  Object(h.f)("#HowItWorks_Contributor_Badge_Desc")
                )
              )
            )
          );
        });
      var nn = function () {
          var e,
            t = [
              {
                question: "#Faq_GetPoints_Q",
                answer: [
                  "#Faq_GetPoints_A",
                  "#Faq_GetPoints_A1",
                  !(e = Object(ft.a)(l.d.EREALM)) && "#Faq_GetPoints_A2",
                ].filter(Boolean),
              },
              {
                question: "#Faq_PointsExpire_Q",
                answer: "#Faq_PointsExpire_A",
              },
              { question: "#Faq_Limits_Q", answer: "#Faq_Limits_A" },
              { question: "#Faq_Trade_Q", answer: "#Faq_Trade_A" },
              {
                question: "#Faq_TradingCards_Q",
                answer: "#Faq_TradingCards_A",
              },
              {
                question: "#Faq_TradingCardsStay_Q",
                answer: "#Faq_TradingCardsStay_A",
              },
              { question: "#Faq_Refund_Q", answer: "#Faq_Refund_A" },
              !e && { question: "#Faq_Lunar_Q", answer: "#Faq_Lunar_A" },
              !e && { question: "#Faq_Profile_Q", answer: "#Faq_Profile_A" },
              !e && {
                question: "#Faq_WhatElse_Q",
                answer: [
                  "#Faq_WhatElse_A",
                  "#Faq_WhatElse_A1",
                  "#Faq_WhatElse_A2",
                ],
              },
            ].filter(Boolean);
          return i.a.createElement(
            _.a,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "xxxlarge",
              className: qt.FaqContainer,
            },
            i.a.createElement(
              _.a,
              { display: "flex", flexDirection: "column" },
              i.a.createElement(
                "div",
                { className: qt.FaqTitle },
                Object(h.f)("#Faq_Title")
              ),
              t.map(function (e) {
                return i.a.createElement(
                  an,
                  Object(a.a)({}, e, {
                    key: Array.isArray(e.question) ? e.question[0] : e.question,
                  })
                );
              })
            )
          );
        },
        an = function (e) {
          var t = e.question,
            n = e.answer,
            a = Array.isArray(t) ? t : [t],
            r = Array.isArray(n) ? n : [n];
          return i.a.createElement(
            _.a,
            {
              display: "flex",
              flexDirection: "column",
              paddingTop: "medium",
              paddingBottom: "medium",
            },
            a.map(function (e) {
              return i.a.createElement(rn, { key: e }, Object(h.f)(e));
            }),
            r.map(function (e) {
              return i.a.createElement(on, { key: e }, Object(h.f)(e));
            })
          );
        },
        rn = function (e) {
          var t = e.children;
          return i.a.createElement("div", { className: qt.FaqQuestion }, t);
        },
        on = function (e) {
          var t = e.children;
          return i.a.createElement("div", { className: qt.FaqAnswer }, t);
        },
        sn = function () {
          var e = f.b.Get().GetConfig().points_conversion.unit_spend,
            t = f.b.Get().GetConfig().points_conversion.points;
          return i.a.createElement(
            re.c,
            null,
            i.a.createElement(
              re.b,
              null,
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  style: { width: "100%" },
                  id: "Title",
                },
                i.a.createElement(Xt, null),
                i.a.createElement(Kt, { dollarConversion: e, numPoints: t }),
                i.a.createElement($t, null),
                i.a.createElement(en, null),
                !Object(ft.a)(l.d.EREALM) && i.a.createElement(tn, null),
                i.a.createElement(nn, null)
              )
            )
          );
        },
        ln =
          (n("8j16"),
          n("+d9t"),
          (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return f.b.Get().GetLoyaltyRewardsSummary(), n;
            }
            return (
              Object(a.d)(t, e),
              (t.prototype.render = function () {
                return null;
              }),
              (t = Object(a.c)([m.a], t))
            );
          })(i.a.Component)),
        cn = "",
        mn = null,
        dn = null,
        un = null;
      function pn() {
        (cn = ""),
          null !== mn && mn.disconnect(),
          null !== dn && (window.clearTimeout(dn), (dn = null));
      }
      function fn() {
        var e = document.getElementById(cn);
        return null !== e && (un(e), pn(), !0);
      }
      function _n(e) {
        return i.a.forwardRef(function (t, n) {
          t.scroll, t.smooth;
          var r = Object(a.f)(t, ["scroll", "smooth"]);
          return i.a.createElement(
            e,
            Object(a.a)({}, r, {
              onClick: function (e) {
                pn(),
                  t.onClick && t.onClick(e),
                  "string" == typeof t.to
                    ? (cn = t.to.split("#").slice(1).join("#"))
                    : "object" == typeof t.to &&
                      "string" == typeof t.to.hash &&
                      (cn = t.to.hash.replace("#", "")),
                  "" !== cn &&
                    ((un =
                      t.scroll ||
                      function (e) {
                        return t.smooth
                          ? e.scrollIntoView({ behavior: "smooth" })
                          : e.scrollIntoView();
                      }),
                    window.setTimeout(function () {
                      !1 === fn() &&
                        (null === mn && (mn = new MutationObserver(fn)),
                        mn.observe(document, {
                          attributes: !0,
                          childList: !0,
                          subtree: !0,
                        }),
                        (dn = window.setTimeout(function () {
                          pn();
                        }, 1e4)));
                    }, 0));
              },
              ref: n,
            }),
            t.children
          );
        });
      }
      _n(d.b);
      var hn = _n(d.c),
        gn = n("1xRl"),
        bn = n("rKGf"),
        yn = i.a.createContext({ updateActivePosition: function () {} }),
        In = function (e) {
          var t = e.children,
            n = e.className,
            r = Object(a.f)(e, ["children", "className"]),
            o = i.a.useState(null),
            s = o[0],
            l = o[1],
            c = i.a.useState(0),
            m = c[0],
            d = c[1],
            u = (function (e, t) {
              void 0 === t && (t = { msDuration: 200, msInterval: 10 });
              var n = i.a.useState(null),
                a = n[0],
                r = n[1],
                o = i.a.useCallback(function (e) {
                  return r(e);
                }, []),
                s = t.msDuration,
                l = t.msInterval;
              return (
                i.a.useLayoutEffect(
                  function () {
                    if (a) {
                      var t =
                          (Math.abs(e - a.scrollLeft) / (s / l)) *
                          (e < a.scrollLeft ? -1 : 1),
                        n = window.setInterval(function () {
                          Math.abs(t) < Math.abs(a.scrollLeft - e)
                            ? ((a.scrollLeft = e), clearInterval(n))
                            : (a.scrollLeft += t);
                        }, l);
                      return function () {
                        return clearInterval(n);
                      };
                    }
                  },
                  [e, a, s, l]
                ),
                [o, a]
              );
            })(m),
            p = u[0],
            f = u[1],
            _ = s
              ? {
                  width: s.width + "px",
                  transform: "translateX(" + s.x + "px)",
                }
              : void 0,
            h = i.a.useState(0),
            g = h[0];
          h[1];
          return (
            i.a.useLayoutEffect(
              function () {
                if (g) {
                  var e = setInterval(function () {
                    return d(function (e) {
                      return e + g;
                    });
                  }, 50);
                  return function () {
                    return clearInterval(e);
                  };
                }
              },
              [g]
            ),
            i.a.createElement(
              yn.Provider,
              {
                value: {
                  updateActivePosition: function (e) {
                    if (
                      (s ? e.x !== s.x && e.width !== s.width && l(e) : l(e), f)
                    ) {
                      var t = Math.max(
                        0,
                        Math.min(
                          e.x - f.clientWidth / 2 + e.width / 2,
                          f.scrollWidth - f.clientWidth
                        )
                      );
                      d(t);
                    }
                  },
                },
              },
              i.a.createElement(
                "div",
                Object(a.a)({}, r, {
                  className: Object(b.a)(bn.ItemContainer, n),
                  ref: p,
                }),
                t,
                i.a.createElement("div", { className: bn.Accent, style: _ })
              )
            )
          );
        },
        Cn = function (e) {
          var t = e.children,
            n = e.active,
            r = e.className,
            o = Object(a.f)(e, ["children", "active", "className"]),
            s = i.a.useContext(yn),
            l = i.a.useState(null),
            c = l[0],
            m = l[1],
            d = i.a.useCallback(function (e) {
              return m(e);
            }, []);
          return (
            i.a.useLayoutEffect(
              function () {
                n &&
                  c &&
                  s.updateActivePosition({
                    x: c.offsetLeft,
                    width: c.clientWidth,
                  });
              },
              [n, c, s]
            ),
            i.a.createElement(
              "div",
              Object(a.a)(
                { className: Object(b.a)(bn.Item, n && bn.Active, r), ref: d },
                o
              ),
              t
            )
          );
        };
      var vn = "#CommunityAwards",
        wn = function (e) {
          return function (t, n) {
            return !!t && (n.hash === vn) === e;
          };
        },
        Mn = function () {
          var e = [
            {
              items: [
                {
                  props: {
                    iconComponent: He.o,
                    children: Object(h.f)("#HowItWorksLink"),
                    to: { pathname: s.b.LoyaltyHowItWorks(), hash: "#Title" },
                    isActive: wn(!1),
                  },
                },
                {
                  props: {
                    iconComponent: He.t,
                    children: Object(h.f)("#ShopNav_Featured"),
                    to: s.b.LoyaltyStore(),
                    exact: !0,
                  },
                },
                {
                  props: {
                    iconComponent: He.z,
                    children: Object(h.f)("#ShopNav_ByGame"),
                    to: s.b.LoyaltyByGame(),
                  },
                },
              ],
            },
            {
              label: Object(h.f)("#ProfileItems"),
              items: [
                {
                  props: {
                    iconComponent: He.g,
                    children: Object(h.f)("#ShopNav_AvatarLink"),
                    to: s.b.LoyaltyAvatar(),
                  },
                },
                {
                  props: {
                    iconComponent: pe.d,
                    children: Object(h.f)("#ShopNav_BackgroundsLink"),
                    to: s.b.LoyaltyBackgrounds(),
                  },
                },
              ],
            },
            {
              label: Object(h.f)("#ChatItems"),
              items: [
                {
                  props: {
                    iconComponent: pe.o,
                    children: Object(h.f)("#ShopNav_StickersLink"),
                    to: s.b.LoyaltyStickers(),
                  },
                },
                {
                  props: {
                    iconComponent: pe.m,
                    children: Object(h.f)("#ShopNav_ChatEffectsLink"),
                    to: s.b.LoyaltyChatEffects(),
                  },
                },
                {
                  props: {
                    iconComponent: pe.n,
                    children: Object(h.f)("#ShopNav_EmoticonsLink"),
                    to: s.b.LoyaltyEmoticons(),
                  },
                },
              ],
            },
          ];
          e[0].items.push({
            props: {
              iconComponent: He.r,
              children: Object(h.f)("#ShopNav_ItemBundlesLink"),
              to: { pathname: s.b.LoyaltyItemBundles() },
            },
          });
          var t = Object(ft.a)(l.d.EREALM);
          return (
            t ||
              e[0].items.push({
                props: {
                  iconComponent: He.l,
                  children: Object(h.f)("#ShopNav_AwardsLink"),
                  to: {
                    pathname: s.b.LoyaltyHowItWorks(),
                    hash: "#CommunityAwards",
                  },
                  isActive: wn(!0),
                },
              }),
            t ||
              (e[1].items.push({
                props: {
                  iconComponent: pe.e,
                  children: Object(h.f)("#ShopNav_SeasonalBadgeLink"),
                  to: s.b.LoyaltySteamBadge(),
                  iconCallout: He.v,
                },
              }),
              e[1].items.push({
                props: {
                  iconComponent: He.x,
                  children: Object(h.f)("#ShopNav_ProfileBundlesLink"),
                  to: s.b.LoyaltyProfileBundles(),
                },
              }),
              e[1].items.push({
                props: {
                  iconComponent: He.f,
                  children: Object(h.f)("#ShopPageTitle_ArtistProfiles"),
                  to: s.b.LoyaltyArtistProfiles(),
                  iconCallout: He.v,
                },
              })),
            t ||
              e[1].items.push({
                props: {
                  iconComponent: He.y,
                  children: Object(h.f)("#ShopNav_ProfileShowcasesLink"),
                  to: { pathname: s.b.LoyaltyProfileCustomizations() },
                },
              }),
            f.b.Get().BIsLoggedIn() &&
              e.push({
                items: [
                  {
                    external: !0,
                    props: {
                      iconComponent: He.w,
                      children: Object(h.f)("#RewardsPointsHistoryLink"),
                      href: l.d.STORE_BASE_URL + "pointssummary/",
                    },
                  },
                ],
              }),
            e
          );
        },
        Nn = function () {
          var e = Mn();
          return i.a.createElement(
            _.a,
            { padding: "none", className: gn.PrimaryNav },
            i.a.createElement(
              _.e,
              { spacing: "none" },
              e.map(function (t, n) {
                return i.a.createElement(
                  i.a.Fragment,
                  { key: n },
                  t.label &&
                    i.a.createElement(
                      "div",
                      { className: gn.NavItem },
                      t.label
                    ),
                  t.items.map(function (e) {
                    return e.external
                      ? i.a.createElement(
                          En,
                          Object(a.a)({}, e.props, { key: e.props.href })
                        )
                      : i.a.createElement(
                          jn,
                          Object(a.a)({}, e.props, {
                            key: JSON.stringify(e.props.to),
                          })
                        );
                  }),
                  n < e.length - 1 &&
                    i.a.createElement("div", { className: gn.Line })
                );
              })
            )
          );
        },
        jn = function (e) {
          var t = e.iconComponent,
            n = e.className,
            r = e.children,
            o = e.disableActiveStyle,
            s = e.iconCallout,
            l = Object(a.f)(e, [
              "iconComponent",
              "className",
              "children",
              "disableActiveStyle",
              "iconCallout",
            ]),
            c = t,
            m = s,
            u = "object" == typeof l.to && l.to.hash ? hn : d.c;
          return i.a.createElement(
            u,
            Object(a.a)(
              {
                className: Object(b.a)(gn.SecondaryNavItem, n),
                activeClassName: o ? void 0 : gn.Selected,
              },
              l
            ),
            i.a.createElement(c, { className: gn.Icon }),
            i.a.createElement("div", { className: gn.Label }, r),
            m && i.a.createElement(m, { className: gn.Callout })
          );
        },
        En = function (e) {
          var t = e.iconComponent,
            n = e.className,
            r = e.children,
            o = Object(a.f)(e, ["iconComponent", "className", "children"]),
            s = t;
          return i.a.createElement(
            "a",
            Object(a.a)({ className: Object(b.a)(gn.SecondaryNavItem, n) }, o),
            i.a.createElement(s, { className: gn.Icon }),
            i.a.createElement("div", { className: gn.Label }, r)
          );
        },
        Sn = function () {
          var e = Mn(),
            t = [],
            n = function (e) {
              var t = Object(o.h)(e.to);
              return i.a.createElement(
                Cn,
                {
                  active: !!t && (!e.exact || t.isExact),
                  className: gn.ScrollableTabItem,
                },
                e.children
              );
            };
          return (
            e.forEach(function (e) {
              e.items.forEach(function (e) {
                if (e.external) {
                  var r = e.props,
                    o = (r.iconComponent, Object(a.f)(r, ["iconComponent"]));
                  t.push(
                    i.a.createElement(
                      "a",
                      Object(a.a)({}, o, { key: e.props.href }),
                      i.a.createElement(
                        Cn,
                        { className: gn.ScrollableTabItem },
                        e.props.children
                      )
                    )
                  );
                } else {
                  var s = e.props,
                    l =
                      (s.iconComponent,
                      (o = Object(a.f)(s, ["iconComponent"])),
                      "string" == typeof s.to
                        ? s.to
                        : "function" != typeof s.to
                        ? s.to.pathname
                        : s.to.toString());
                  t.push(
                    i.a.createElement(
                      d.c,
                      Object(a.a)({}, o, { key: l }),
                      i.a.createElement(n, Object(a.a)({}, s), s.children)
                    )
                  );
                }
              });
            }),
            i.a.createElement(In, { className: gn.ScrollableTabs }, t)
          );
        },
        On = n("1Gs6"),
        An = (n("Ii8c"), n("lr4S"), n("opsS")),
        Dn = n("y+6m"),
        Pn = n("TtDX"),
        xn = n("1U4k");
      var Ln = function (e) {
          var t = e.appid,
            n = ee.a.GetAppInfo(t);
          return r.createElement(
            "div",
            {
              className: xn.CurrentAppFilter,
              onClick: function () {
                f.b.Get().RemoveAppIDFilter(t);
              },
            },
            r.createElement("div", null, n.name),
            r.createElement(He.d, { className: xn.AppFilterClearIcon })
          );
        },
        Bn = function (e) {
          var t = e.appid,
            n = ee.a.GetAppInfo(t);
          return r.createElement(
            "div",
            {
              className: xn.SuggestedAppFilter,
              onClick: function () {
                f.b.Get().AddAppIDFilter(t);
              },
            },
            r.createElement(He.a, { className: xn.AddGameToFilterIcon }),
            r.createElement(
              "div",
              { className: xn.SuggestedAppFilterName },
              n.name
            )
          );
        },
        Rn = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.state = {
                strFilterAppText: f.b.Get().GetCurrentAppFilterText(),
              }),
              n
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = f.b.Get().GetSortedGamesWithRewards();
              ee.a.EnsureAppInfoForAppIDs(e);
            }),
            (t.prototype.CloseModal = function () {
              this.props.closeModal && this.props.closeModal();
            }),
            (t.prototype.OnChangeAppFilterCheckbox = function (e, t) {
              e ? f.b.Get().AddAppIDFilter(t) : f.b.Get().RemoveAppIDFilter(t);
            }),
            (t.prototype.OnFilterByText = function (e) {
              var t = e.target.value.toLowerCase();
              this.timeout && clearTimeout(this.timeout),
                (this.timeout = window.setTimeout(function () {
                  f.b.Get().SetCurrentAppFilterText(t);
                }, 300)),
                this.setState({ strFilterAppText: t });
            }),
            (t.prototype.ClearAppFilterString = function () {
              this.setState({ strFilterAppText: "" }),
                f.b.Get().SetCurrentAppFilterText("");
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state.strFilterAppText,
                n = f.b.Get().GetAppIDFilters(),
                a = f.b.Get().GetSortedGamesWithRewards(),
                i = [];
              if (0 == t.length)
                for (
                  var o = 0;
                  o < a.length && o < this.props.maxGamesToDisplay;
                  ++o
                ) {
                  var s = a[o];
                  n.has(s) || i.push(s);
                }
              var l = a.filter(function (a) {
                  if (n.has(a)) return !1;
                  if (t.length < e.props.minCharactersForNameFilter) return !1;
                  if (!ee.a.GetAppInfo(a)) return !1;
                  var r = ee.a.GetAppInfo(a).name;
                  return !!r && -1 != (r = r.toLowerCase()).indexOf(t);
                }),
                c = null;
              return (
                0 != t.length &&
                  0 == l.length &&
                  (c = r.createElement(
                    "div",
                    { className: xn.AppFilterNoMatches },
                    Object(h.f)("#AppFilter_NoMatches")
                  )),
                r.createElement(
                  "div",
                  { className: xn.ManageAppFiltersPopup },
                  r.createElement(
                    "div",
                    { className: xn.HeaderContainer },
                    r.createElement(
                      "div",
                      { className: xn.Header },
                      Object(h.f)("#AppFilter_Label")
                    )
                  ),
                  0 != n.size &&
                    r.createElement(
                      "div",
                      { className: xn.CurrentAppFiltersContainer },
                      Array.from(n.keys()).map(function (e) {
                        return ee.a.GetAppInfo(e).is_valid
                          ? r.createElement(Ln, { key: e, appid: e })
                          : null;
                      })
                    ),
                  r.createElement(
                    "div",
                    { className: xn.AppInputFilterContainer },
                    r.createElement("input", {
                      className: xn.AppInputFilter,
                      type: "text",
                      onChange: this.OnFilterByText,
                      value: t,
                    }),
                    r.createElement(
                      "div",
                      {
                        className: xn.AppFilterClearButton,
                        onClick: this.ClearAppFilterString,
                      },
                      r.createElement(He.d, {
                        className: xn.AppFilterClearIcon,
                      })
                    )
                  ),
                  c,
                  r.createElement(
                    "div",
                    { className: xn.AppCheckboxesContainer },
                    l.map(function (e) {
                      return ee.a.GetAppInfo(e).is_valid
                        ? r.createElement(Bn, { key: e, appid: e })
                        : null;
                    })
                  ),
                  0 != i.length &&
                    r.createElement(
                      "div",
                      { className: xn.HeaderContainer },
                      r.createElement(
                        "div",
                        { className: xn.Header },
                        Object(h.f)("#AppFilter_FilterByRecentlyPlayed")
                      )
                    ),
                  0 != i.length &&
                    r.createElement(
                      "div",
                      { className: xn.AppCheckboxesContainer },
                      i.map(function (e) {
                        return ee.a.GetAppInfo(e).is_valid
                          ? r.createElement(Bn, { key: e, appid: e })
                          : null;
                      })
                    )
                )
              );
            }),
            (t.defaultProps = {
              maxGamesToDisplay: 3,
              minCharactersForNameFilter: 3,
            }),
            Object(a.c)([An.a], t.prototype, "CloseModal", null),
            Object(a.c)([An.a], t.prototype, "OnChangeAppFilterCheckbox", null),
            Object(a.c)([An.a], t.prototype, "OnFilterByText", null),
            Object(a.c)([An.a], t.prototype, "ClearAppFilterString", null),
            (t = Object(a.c)([m.a], t))
          );
        })(r.Component);
      function kn(e) {
        var t = e.children,
          n = Object(_.h)("(max-width: 965px)");
        return i.a.createElement(
          _.d,
          null,
          i.a.createElement(
            "div",
            { className: Object(b.a)(On.Shell) },
            i.a.createElement(Tn, null),
            n && i.a.createElement(Sn, null),
            i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "row",
                className: On.ShellScrollParent,
              },
              !n && i.a.createElement(Nn, null),
              i.a.createElement(
                _.a,
                { flex: "1", className: On.ShellScroll },
                t
              )
            )
          )
        );
      }
      var Tn = Object(m.a)(function () {
          var e = null;
          f.b.Get().BIsLoggedIn() &&
            (e = i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                className: On.PointsContainer,
              },
              i.a.createElement(pe.O, { className: On.Icon }),
              i.a.createElement(
                _.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                  paddingLeft: "xsmall",
                },
                i.a.createElement(
                  "a",
                  {
                    className: On.YourBalanceLabel,
                    href: l.d.STORE_BASE_URL + "pointssummary/",
                  },
                  Object(h.f)("#YourBalance")
                ),
                i.a.createElement(
                  "div",
                  { className: On.RewardsPointsCount },
                  f.b
                    .Get()
                    .GetPointsAvailable()
                    .getLowBits()
                    .toLocaleString(h.e.GetPreferredLocales())
                )
              )
            ));
          var t = null;
          if (f.b.Get().BIsLoggedIn() && f.b.Get().GetIsUsingAppIDFilters()) {
            var n = !!f.b.Get().GetAppIDFilters().size;
            t = i.a.createElement(
              _.a,
              {
                display: "flex",
                flexDirection: "row",
                className: On.AppFilterContainer,
              },
              i.a.createElement(He.n, { className: On.HeaderVerticalDivider }),
              i.a.createElement(
                "div",
                { className: On.AppFilterLabel },
                Object(h.f)("#AppFilter_Label")
              ),
              i.a.createElement(
                "div",
                { className: On.AppFilterIconContainer },
                i.a.createElement(He.e, {
                  className: Object(b.a)(On.AppFilterIcon),
                  onClick: function (e) {
                    return (
                      (t = e),
                      (n = {
                        bOverlapHorizontal: !0,
                        bUseWebStyles: !1,
                        strClassName: xn.ManageAppFiltersPopupContextMenu,
                      }),
                      void Object(Pn.a)(
                        r.createElement(
                          Dn.c,
                          null,
                          r.createElement(Rn, { maxGamesToDisplay: 14 })
                        ),
                        t,
                        n
                      )
                    );
                    var t, n;
                  },
                }),
                n && i.a.createElement("div", { className: On.FilterInUse })
              )
            );
          }
          return i.a.createElement(
            _.a,
            {
              paddingY: "small",
              paddingX: ["xsmall", "medium"],
              display: "flex",
              flexDirection: "row",
              className: On.ShellHeader,
            },
            i.a.createElement(
              d.c,
              { to: s.b.LoyaltyStore(), className: On.ShellHeaderBrandLink },
              i.a.createElement(
                "div",
                { className: On.ShellHeaderBrandName },
                " ",
                Object(h.f)("#ShopLink"),
                " "
              )
            ),
            i.a.createElement(_.b, null, function (e) {
              return "mobile" !== e && t;
            }),
            e
          );
        }),
        Gn = (n("bxBv"), n("E4Op"), n("hRO2")),
        zn = n("OS8t"),
        Fn = Gn.Message;
      var Hn,
        Un = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var a = e.call(this) || this;
            return (
              t.prototype.accountid || zn.a(t.M()),
              Fn.initialize(a, n, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      accountid: {
                        n: 1,
                        br: zn.d.readUint32,
                        bw: zn.h.writeUint32,
                      },
                      auctiondescriptionid: {
                        n: 2,
                        br: zn.d.readUint64String,
                        bw: zn.h.writeUint64String,
                      },
                      state: { n: 3, br: zn.d.readEnum, bw: zn.h.writeEnum },
                      time_created: {
                        n: 4,
                        br: zn.d.readUint32,
                        bw: zn.h.writeUint32,
                      },
                      time_updated: {
                        n: 5,
                        br: zn.d.readUint32,
                        bw: zn.h.writeUint32,
                      },
                      amount_bid: {
                        n: 6,
                        br: zn.d.readInt64String,
                        bw: zn.h.writeInt64String,
                      },
                      amount_paid: {
                        n: 7,
                        br: zn.d.readInt64String,
                        bw: zn.h.writeInt64String,
                      },
                      auctionbidid: {
                        n: 8,
                        br: zn.d.readInt64String,
                        bw: zn.h.writeInt64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = zn.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return zn.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return zn.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new Gn.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return zn.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new Gn.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              zn.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new Gn.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuction_Bid";
            }),
            t
          );
        })(Fn),
        Zn = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var a = e.call(this) || this;
            return (
              t.prototype.auctiondescriptionid || zn.a(t.M()),
              Fn.initialize(a, n, 0, -1, [12], null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      auctiondescriptionid: {
                        n: 1,
                        br: zn.d.readUint64String,
                        bw: zn.h.writeUint64String,
                      },
                      time_start: {
                        n: 2,
                        br: zn.d.readUint32,
                        bw: zn.h.writeUint32,
                      },
                      time_end: {
                        n: 3,
                        br: zn.d.readUint32,
                        bw: zn.h.writeUint32,
                      },
                      amount_total: {
                        n: 5,
                        br: zn.d.readInt64String,
                        bw: zn.h.writeInt64String,
                      },
                      amount_remaining: {
                        n: 6,
                        br: zn.d.readInt64String,
                        bw: zn.h.writeInt64String,
                      },
                      highest_amount: {
                        n: 7,
                        br: zn.d.readInt64String,
                        bw: zn.h.writeInt64String,
                      },
                      highest_bidder_accountid: {
                        n: 8,
                        br: zn.d.readUint32,
                        bw: zn.h.writeUint32,
                      },
                      community_item_appid: {
                        n: 9,
                        br: zn.d.readUint32,
                        bw: zn.h.writeUint32,
                      },
                      community_item_type: {
                        n: 10,
                        br: zn.d.readUint32,
                        bw: zn.h.writeUint32,
                      },
                      store_appid: {
                        n: 11,
                        br: zn.d.readUint32,
                        bw: zn.h.writeUint32,
                      },
                      store_packageids: {
                        n: 12,
                        r: !0,
                        q: !0,
                        br: zn.d.readUint32,
                        bw: zn.h.writeRepeatedUint32,
                      },
                      reserve_price: {
                        n: 13,
                        br: zn.d.readInt64String,
                        bw: zn.h.writeInt64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = zn.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return zn.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return zn.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new Gn.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return zn.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new Gn.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              zn.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new Gn.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuction_Item";
            }),
            t
          );
        })(Fn),
        Vn = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var n = e.call(this) || this;
            return Fn.initialize(n, t, 0, -1, void 0, null), n;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var n = new Gn.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, n);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new Gn.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new Gn.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuction_PlaceBid_Response";
            }),
            t
          );
        })(Fn),
        Wn = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var a = e.call(this) || this;
            return (
              t.prototype.amount_returned || zn.a(t.M()),
              Fn.initialize(a, n, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      amount_returned: {
                        n: 1,
                        br: zn.d.readInt64String,
                        bw: zn.h.writeInt64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = zn.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return zn.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return zn.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new Gn.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return zn.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new Gn.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              zn.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new Gn.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuction_CancelBid_Response";
            }),
            t
          );
        })(Fn),
        Yn = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var a = e.call(this) || this;
            return (
              t.prototype.bids || zn.a(t.M()),
              Fn.initialize(a, n, 0, -1, [1], null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { bids: { n: 1, c: Un, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = zn.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return zn.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return zn.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new Gn.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return zn.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new Gn.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              zn.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new Gn.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuction_GetBidsForUser_Response";
            }),
            t
          );
        })(Fn),
        Qn = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var a = e.call(this) || this;
            return (
              t.prototype.item || zn.a(t.M()),
              Fn.initialize(a, n, 0, -1, [4], null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      item: { n: 1, c: Zn },
                      count_total: {
                        n: 2,
                        br: zn.d.readInt32,
                        bw: zn.h.writeInt32,
                      },
                      current_user_position: {
                        n: 3,
                        br: zn.d.readInt32,
                        bw: zn.h.writeInt32,
                      },
                      winning_bids: { n: 4, c: Un, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = zn.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return zn.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return zn.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new Gn.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return zn.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new Gn.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              zn.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new Gn.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuction_GetBidsForItem_Response";
            }),
            t
          );
        })(Fn),
        qn = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var a = e.call(this) || this;
            return (
              t.prototype.bid || zn.a(t.M()),
              Fn.initialize(a, n, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { bid: { n: 1, c: Un } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = zn.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return zn.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return zn.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new Gn.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return zn.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new Gn.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              zn.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new Gn.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuction_GetUserBidForItem_Response";
            }),
            t
          );
        })(Fn),
        Jn = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var a = e.call(this) || this;
            return (
              t.prototype.item || zn.a(t.M()),
              Fn.initialize(a, n, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { item: { n: 1, c: Zn } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = zn.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return zn.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return zn.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new Gn.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return zn.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new Gn.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              zn.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new Gn.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuction_GetItemDetails_Response";
            }),
            t
          );
        })(Fn),
        Xn = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var a = e.call(this) || this;
            return (
              t.prototype.items || zn.a(t.M()),
              Fn.initialize(a, n, 0, -1, [1], null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { items: { n: 1, c: Zn, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = zn.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return zn.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return zn.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new Gn.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return zn.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new Gn.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              zn.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new Gn.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CAuction_GetAllItems_Response";
            }),
            t
          );
        })(Fn);
      !(function (e) {
        (e.PlaceBid = function (e, t) {
          return e.SendMsg("Auction.PlaceBid#1", t, Vn, { ePrivilege: 3 });
        }),
          (e.CancelBid = function (e, t) {
            return e.SendMsg("Auction.CancelBid#1", t, Wn, { ePrivilege: 1 });
          }),
          (e.GetBidsForUser = function (e, t) {
            return e.SendMsg("Auction.GetBidsForUser#1", t, Yn, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetBidsForItem = function (e, t) {
            return e.SendMsg("Auction.GetBidsForItem#1", t, Qn, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetUserBidForItem = function (e, t) {
            return e.SendMsg("Auction.GetUserBidForItem#1", t, qn, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetItemDetails = function (e, t) {
            return e.SendMsg("Auction.GetItemDetails#1", t, Jn, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAllItems = function (e, t) {
            return e.SendMsg("Auction.GetAllItems#1", t, Xn, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          });
      })(Hn || (Hn = {}));
      n("2vnA");
      function Kn() {
        return Object(a.b)(this, void 0, void 0, function () {
          var e, t, r, i, o, s;
          return Object(a.e)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (e = l.d.LANGUAGE),
                  (t = h.b.GetLanguageFallback(e)),
                  (r = e === t),
                  [
                    4,
                    Promise.all([
                      n("Aqke")("./loyalty_" + e + ".json"),
                      r ? void 0 : n("Aqke")("./loyalty_" + t + ".json"),
                    ]),
                  ]
                );
              case 1:
                return (
                  (i = a.sent()),
                  (o = i[0]),
                  (s = i[1]),
                  h.e.AddTokens(o.default, s ? s.default : void 0),
                  [2]
                );
            }
          });
        });
      }
      var $n = n("ee7K"),
        ea = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { bReady: !1 }), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this;
              ta.then(function () {
                return e.setState({ bReady: !0 });
              });
            }),
            (t.prototype.render = function () {
              return this.state.bReady
                ? i.a.createElement(
                    kn,
                    null,
                    i.a.createElement(
                      o.d,
                      null,
                      i.a.createElement(
                        o.b,
                        { path: s.b.LoyaltyGetPoints() },
                        i.a.createElement(dt, null)
                      ),
                      i.a.createElement(
                        o.b,
                        { path: s.b.LoyaltyHowItWorks() },
                        i.a.createElement(sn, null)
                      ),
                      i.a.createElement(
                        o.b,
                        { path: s.b.LoyaltyStore() },
                        i.a.createElement(Ke, null)
                      ),
                      i.a.createElement(
                        o.b,
                        { path: s.b.LoyaltyGiveawayRules() },
                        i.a.createElement(ln, null)
                      ),
                      i.a.createElement(
                        o.b,
                        null,
                        i.a.createElement(o.a, { to: s.b.LoyaltyStore() })
                      )
                    )
                  )
                : i.a.createElement(y.a, null);
            }),
            t
          );
        })(i.a.Component);
      var ta = (function () {
        return Object(a.b)(this, void 0, void 0, function () {
          var e, t;
          return Object(a.e)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (e = Object(l.h)("loyaltystore", "application_config")),
                  (t = new c.a(l.d.WEBAPI_BASE_URL, e.webapi_token)),
                  ee.a.Init(t),
                  [4, Kn()]
                );
              case 1:
                return n.sent(), [4, $n.a.Get().HintLoad()];
              case 2:
                return n.sent(), f.b.Get().Init(t, e), [2];
            }
          });
        });
      })();
      t.default = ea;
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
        TitleSkeleton: "herogroup_TitleSkeleton_3yIAM",
      };
    },
    DtjR: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/boombox.png?v=valveisgoodatcaching";
    },
    "F8+w": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/lava_lamps_bg.png?v=valveisgoodatcaching";
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
    Gpul: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return f;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n("TyAF"),
        o = n("jUCX"),
        s = n("exH9"),
        l = n("WeG9"),
        c = n.n(l),
        m = (n("oFam"), n("lkRc")),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.strAvatarURL,
                n = e.size,
                i = e.className,
                o = e.statusStyle,
                l = e.statusPosition,
                m = e.children,
                d = Object(a.f)(e, [
                  "strAvatarURL",
                  "size",
                  "className",
                  "statusStyle",
                  "statusPosition",
                  "children",
                ]);
              return r.createElement(
                "div",
                Object(a.a)(
                  {
                    className: Object(s.a)(
                      c.a.avatarHolder,
                      "avatarHolder",
                      "no-drag",
                      n || "Medium",
                      i
                    ),
                  },
                  d
                ),
                r.createElement("div", {
                  className: Object(s.a)(c.a.avatarStatus, "avatarStatus", l),
                  style: o,
                }),
                r.createElement("img", {
                  className: Object(s.a)(c.a.avatar, "avatar"),
                  src: t,
                  draggable: !1,
                }),
                m
              );
            }),
            t
          );
        })(r.Component),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.persona,
                n = e.size,
                i = e.animatedAvatar,
                l = e.className,
                c = Object(a.f)(e, [
                  "persona",
                  "size",
                  "animatedAvatar",
                  "className",
                ]),
                u = "";
              return (
                i && i.image_small && 0 != i.image_small.length
                  ? (u =
                      m.d.MEDIA_CDN_COMMUNITY_URL + "images/" + i.image_small)
                  : t
                  ? ((u = t.avatar_url_medium),
                    "Small" == n || "X-Small" == n
                      ? (u = t.avatar_url)
                      : ("Large" != n && "X-Large" != n && "FillArea" != n) ||
                        (u = t.avatar_url_full))
                  : ((u =
                      m.d.MEDIA_CDN_COMMUNITY_URL +
                      "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"),
                    "Small" == n || "X-Small" == n
                      ? (u =
                          m.d.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg")
                      : ("Large" != n && "X-Large" != n && "FillArea" != n) ||
                        (u =
                          m.d.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg")),
                r.createElement(
                  d,
                  Object(a.a)(
                    {
                      strAvatarURL: u,
                      size: n,
                      className: Object(s.a)(Object(o.b)(t), l),
                    },
                    c
                  )
                )
              );
            }),
            (t = Object(a.c)([i.a], t))
          );
        })(r.Component),
        p = Object(i.a)(function (e) {
          var t = e.profileItem,
            n = e.className,
            i = e.bDisableAnimation,
            o = Object(a.f)(e, [
              "profileItem",
              "className",
              "bDisableAnimation",
            ]);
          if (!t || !t.image_small || 0 == t.image_small.length) return null;
          var l = i ? t.image_large : t.image_small;
          return (
            l || (l = t.image_small),
            l.startsWith("https://") ||
              (l = m.d.MEDIA_CDN_COMMUNITY_URL + "images/" + l),
            r.createElement(
              "div",
              Object(a.a)(
                { className: Object(s.a)(c.a.avatarFrame, n, "avatarFrame") },
                o
              ),
              r.createElement("img", { className: c.a.avatarFrameImg, src: l })
            )
          );
        }),
        f = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.state = { bAnimate: "None" != n.props.loopDuration }),
              (n.m_timer = 0),
              n
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.SetupAnimationTimer();
            }),
            (t.prototype.SetupAnimationTimer = function () {
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
            (t.prototype.StopAnimationTimer = function () {
              this.m_timer &&
                (window.clearTimeout(this.m_timer), (this.m_timer = 0));
            }),
            (t.prototype.componentWillUnmount = function () {
              this.StopAnimationTimer();
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this.props.loopDuration != e.loopDuration &&
                ("None" == this.props.loopDuration
                  ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                  : "Infinite" == this.props.loopDuration &&
                    (this.setState({ bAnimate: !0 }),
                    this.StopAnimationTimer()));
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = (e.loopDuration, e.animatedAvatar),
                n = e.avatarFrame,
                i = e.children,
                o = e.style,
                s = Object(a.f)(e, [
                  "loopDuration",
                  "animatedAvatar",
                  "avatarFrame",
                  "children",
                  "style",
                ]);
              return (
                s.onClick &&
                  (o = Object(a.a)(Object(a.a)({}, o), { cursor: "pointer" })),
                this.state.bAnimate || (t = null),
                r.createElement(
                  u,
                  Object(a.a)({ animatedAvatar: t }, s),
                  i,
                  r.createElement(p, {
                    profileItem: n,
                    bDisableAnimation: "None" === this.props.loopDuration,
                  })
                )
              );
            }),
            (t = Object(a.c)([i.a], t))
          );
        })(r.Component);
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
    Ii8c: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/steam_rewards_logo.svg?v=valveisgoodatcaching";
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
    JeMz: function (e, t, n) {
      var a = {
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
      function r(e) {
        var t = i(e);
        return n(t);
      }
      function i(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (r.keys = function () {
        return Object.keys(a);
      }),
        (r.resolve = i),
        (e.exports = r),
        (r.id = "JeMz");
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
        LeftColumn: "salerewarditemhero_LeftColumn_3yZ-T",
        SaleRewardLogo: "salerewarditemhero_SaleRewardLogo_1aazf",
        SaleRewardSubHeader: "salerewarditemhero_SaleRewardSubHeader_3Lw87",
        SaleRewardContainerFlex:
          "salerewarditemhero_SaleRewardContainerFlex_2CxV-",
        SaleRewardTextContainer:
          "salerewarditemhero_SaleRewardTextContainer_1lAJJ",
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
        return l;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return m;
        }),
        n.d(t, "g", function () {
          return f;
        }),
        n.d(t, "d", function () {
          return _;
        }),
        n.d(t, "i", function () {
          return b;
        }),
        n.d(t, "f", function () {
          return I;
        }),
        n.d(t, "b", function () {
          return C;
        }),
        n.d(t, "h", function () {
          return w;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("qY0t"),
        s = n("exH9"),
        l = Object(r.forwardRef)(function (e, t) {
          var n = e.padding,
            r = e.paddingX,
            o = e.paddingY,
            l = e.paddingRight,
            c = e.paddingLeft,
            m = e.paddingTop,
            d = e.paddingBottom,
            u = e.margin,
            p = e.marginX,
            f = e.marginY,
            _ = e.marginLeft,
            h = e.marginTop,
            g = e.marginRight,
            y = e.marginBottom,
            I = e.display,
            C = e.flexDirection,
            v = e.flexWrap,
            w = e.justifyContent,
            M = e.alignItems,
            N = e.flexGrow,
            j = e.flexShrink,
            E = e.flexBasis,
            S = e.flex,
            O = e.className,
            A = e.style,
            D = Object(a.f)(e, [
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
            P = Object(s.a)(
              b("padding-left", c || r || n),
              b("padding-top", m || o || n),
              b("padding-right", l || r || n),
              b("padding-bottom", d || o || n),
              b("margin-left", _ || p || u),
              b("margin-top", h || f || u),
              b("margin-right", g || p || u),
              b("margin-bottom", y || f || u),
              O
            ),
            x = Object(a.a)(
              {
                display: I,
                flexDirection: C,
                flexWrap: v,
                justifyContent: w,
                alignItems: M,
                flexGrow: N,
                flexShrink: j,
                flexBasis: E,
                flex: S,
              },
              A
            );
          return i.a.createElement(
            "div",
            Object(a.a)({ className: P, style: x, ref: t }, D)
          );
        }),
        c = Object(r.forwardRef)(function (e, t) {
          var n = e.children,
            s = e.style,
            c = e.spacing,
            m = e.horizontalSpacing,
            u = e.verticalSpacing,
            p = e.itemClassName,
            _ = Object(a.f)(e, [
              "children",
              "style",
              "spacing",
              "horizontalSpacing",
              "verticalSpacing",
              "itemClassName",
            ]),
            h = f(),
            g = h.spacing[y(m || c || "none")],
            b = h.spacing[y(u || c || "none")];
          return i.a.createElement(
            "div",
            Object(a.a)(
              {
                ref: t,
                style: Object(a.a)(Object(a.a)({}, s || {}), {
                  marginTop: d(-b),
                }),
              },
              _
            ),
            i.a.createElement(
              "div",
              { style: { marginLeft: d(-g) }, className: o.InlineContainer },
              r.Children.map(n, function (e) {
                return null != e
                  ? i.a.createElement(
                      l,
                      { paddingLeft: m || c, paddingTop: u || c, className: p },
                      e
                    )
                  : null;
              })
            )
          );
        }),
        m = Object(r.forwardRef)(function (e, t) {
          var n = e.spacing,
            c = e.itemClassName,
            m = e.children,
            d = e.className,
            u = Object(a.f)(e, [
              "spacing",
              "itemClassName",
              "children",
              "className",
            ]),
            p = r.Children.count(m);
          return i.a.createElement(
            "div",
            Object(a.a)({ ref: t, className: d }, u),
            r.Children.map(m, function (e, t) {
              return null != e
                ? i.a.createElement(
                    l,
                    {
                      paddingBottom: t !== p - 1 ? n : void 0,
                      className: Object(s.a)(c, o.RemoveOnEmpty),
                    },
                    e
                  )
                : null;
            })
          );
        }),
        d = function (e) {
          return e + "px";
        },
        u = {
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
        p = Object(r.createContext)(u),
        f = function () {
          return Object(r.useContext)(p);
        },
        _ = function (e) {
          var t = e.config,
            n = e.children,
            a = t || u,
            o = Object(r.useMemo)(
              function () {
                return (function (e) {
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
                    .map(function (t) {
                      return Object.keys(e.spacing)
                        .map(function (n) {
                          return g(t, n, e.spacing[n]);
                        })
                        .join("\n");
                    })
                    .join("\n");
                })(a);
              },
              [a]
            ),
            s = Object(r.useState)(0),
            l = (s[0], s[1]);
          return (
            Object(r.useLayoutEffect)(
              function () {
                l(function (e) {
                  return e + 1;
                });
              },
              [o]
            ),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement("style", null, o),
              n
            )
          );
        };
      var h = function (e, t) {
          return e + "-" + t;
        },
        g = function (e, t, n) {
          return "." + h(e, t) + " { " + e + ": " + n + "px; }";
        },
        b = function (e, t) {
          var n = y(t);
          return t ? h(e, n) : "";
        };
      function y(e) {
        var t = I();
        if (!Array.isArray(e)) return e;
        var n = "desktop" === t ? 2 : "tablet" === t ? 1 : 0;
        return e[Math.min(n, e.length - 1)];
      }
      function I() {
        var e = f().breakpoint,
          t = e.tablet,
          n = e.desktop,
          a = w("(min-width: " + t + "px)");
        return w("(min-width: " + n + "px)")
          ? "desktop"
          : a
          ? "tablet"
          : "mobile";
      }
      function C(e) {
        return e.children(I());
      }
      var v = {};
      function w(e) {
        var t = i.a.useState(!1),
          n = t[0],
          a = t[1];
        return (
          i.a.useEffect(
            function () {
              var t = !0;
              v[e]
                ? v[e].refCount++
                : (v[e] = { list: window.matchMedia(e), refCount: 1 });
              var n = v[e].list,
                r = function () {
                  t && a(n.matches);
                };
              return (
                r(),
                n.addListener(r),
                function () {
                  (t = !1),
                    n.removeListener(r),
                    v[e].refCount--,
                    0 === v[e].refCount && delete v[e];
                }
              );
            },
            [e]
          ),
          n
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
        return m;
      });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("exH9"),
        s = n("9Dmu"),
        l = n("6Y59"),
        c = n("TLQK"),
        m = function (e) {
          var t = e.amount,
            n = e.className,
            r = e.size,
            m = Object(a.f)(e, ["amount", "className", "size"]),
            d =
              t > 0
                ? t.toLocaleString(c.e.GetPreferredLocales())
                : Object(c.f)("#Rewards_Free");
          return i.a.createElement(
            "div",
            Object(a.a)({ className: Object(o.a)(s.Container, n) }, m),
            i.a.createElement(l.O, { className: s.Icon }),
            i.a.createElement(
              "div",
              {
                className: s.Amount,
                style: r ? { fontSize: r + "rem" } : void 0,
              },
              d,
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
    "Uy/A": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/lunar2022_confirm.png?v=valveisgoodatcaching";
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
        strdefaultbodybackground: "rgba(76,112,168,.25)",
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
        BodyTopRight: "rewarditem_BodyTopRight_9NRgi",
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
        hoverParent: "friendsnooze_hoverParent_3-8cB",
        animating: "friendsnooze_animating_2rXc7",
        Snoring: "friendsnooze_Snoring_38wIV",
      };
    },
    Xfd2: function (e, t, n) {
      e.exports = {
        PersonaStatusIcon: "personastatusicons_PersonaStatusIcon_KxAI_",
        MobilePhoneIcon: "personastatusicons_MobilePhoneIcon_1iRFj",
      };
    },
    YpyZ: function (e, t, n) {
      e.exports = { Discount: "discount_Discount_2dE0f" };
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
        return l;
      }),
        n.d(t, "b", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return m;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("VFGZ"),
        s = n("exH9"),
        l = function (e) {
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
        c = function (e) {
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
    cMO7: function (e, t, n) {
      e.exports = {
        Shell: "fadedbackground_Shell_aVov9",
        ShellScrollParent: "fadedbackground_ShellScrollParent_20ZyN",
        ShellHeader: "fadedbackground_ShellHeader_2COAS",
        ShellHeaderBrandLink: "fadedbackground_ShellHeaderBrandLink_yT9B-",
        PointsContainer: "fadedbackground_PointsContainer_MhyV0",
        AppFilterContainer: "fadedbackground_AppFilterContainer_1nV0Z",
        HeaderVerticalDivider: "fadedbackground_HeaderVerticalDivider_2uKsy",
        AppFilterLabel: "fadedbackground_AppFilterLabel_1BE1h",
        AppFilterIconContainer: "fadedbackground_AppFilterIconContainer_2gXg8",
        AppFilterIcon: "fadedbackground_AppFilterIcon_1cWKZ",
        FilterInUse: "fadedbackground_FilterInUse_1HBCj",
        RewardsPointsIcon: "fadedbackground_RewardsPointsIcon_2EpW1",
        YourBalanceLabel: "fadedbackground_YourBalanceLabel_GYATY",
        RewardsPointsCount: "fadedbackground_RewardsPointsCount_127j9",
        ShellHeaderBrandName: "fadedbackground_ShellHeaderBrandName_1O_ww",
        SvgOverrideColor: "fadedbackground_SvgOverrideColor_1c6vE",
        ItemHoverZIndex: "fadedbackground_ItemHoverZIndex_32_DH",
        ActionButton: "fadedbackground_ActionButton_3tpEm",
        Icon: "fadedbackground_Icon_2Qc7h",
        BackgroundFade: "fadedbackground_BackgroundFade_2MFEY",
        BackgroundFadeImage: "fadedbackground_BackgroundFadeImage_3YNnW",
        BackgroundFadeImageBlurred:
          "fadedbackground_BackgroundFadeImageBlurred_1TX8M",
        BackgroundFadeTheme: "fadedbackground_BackgroundFadeTheme_2hAzw",
        BackgroundFadeThemeBlurred:
          "fadedbackground_BackgroundFadeThemeBlurred_n9hHY",
      };
    },
    "cMk+": function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMDQ1MiAxMy43NjlINzQuNzE5NlYxNi44MzI1SDc3LjIxOTZWMTMuNzY5VjExLjI2OUg3NC43MTk2SDEzLjA0NTJIMTAuNTQ1MlYxMy43NjlWNzQuMjIzN1Y3Ni43MjM3SDEzLjA0NTJIMTYuMjIwMlY3NC4yMjM3SDEzLjA0NTJWMTMuNzY5WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi43NjE5NiAyLjg3NUg2NC40MzY0VjUuOTM5MDJINjYuOTM2NFYyLjg3NVYwLjM3NUg2NC40MzY0SDIuNzYxOTZIMC4yNjE5NjNWMi44NzVWNjMuMzI5N1Y2NS44Mjk3SDIuNzYxOTZINS45MzY5N1Y2My4zMjk3SDIuNzYxOTZWMi44NzVaIiBmaWxsPSJ3aGl0ZSIvPg0KPHJlY3QgeD0iMjIuMDc5OCIgeT0iMjMuNDEyMSIgd2lkdGg9IjY0LjE3NDUiIGhlaWdodD0iNjIuOTU0NyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4NCjwvc3ZnPg0K";
    },
    cOvF: function (e, t, n) {
      "use strict";
      n.d(t, "j", function () {
        return s;
      }),
        n.d(t, "k", function () {
          return l;
        }),
        n.d(t, "t", function () {
          return c;
        }),
        n.d(t, "g", function () {
          return m;
        }),
        n.d(t, "h", function () {
          return d;
        }),
        n.d(t, "m", function () {
          return u;
        }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "x", function () {
          return f;
        }),
        n.d(t, "c", function () {
          return _;
        }),
        n.d(t, "u", function () {
          return h;
        }),
        n.d(t, "z", function () {
          return g;
        }),
        n.d(t, "r", function () {
          return b;
        }),
        n.d(t, "b", function () {
          return y;
        }),
        n.d(t, "n", function () {
          return I;
        }),
        n.d(t, "e", function () {
          return C;
        }),
        n.d(t, "d", function () {
          return v;
        }),
        n.d(t, "o", function () {
          return w;
        }),
        n.d(t, "w", function () {
          return M;
        }),
        n.d(t, "p", function () {
          return N;
        }),
        n.d(t, "q", function () {
          return j;
        }),
        n.d(t, "l", function () {
          return E;
        }),
        n.d(t, "i", function () {
          return S;
        }),
        n.d(t, "y", function () {
          return O;
        }),
        n.d(t, "v", function () {
          return A;
        }),
        n.d(t, "s", function () {
          return D;
        }),
        n.d(t, "a", function () {
          return P;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("exH9"),
        s = function (e) {
          return i.a.createElement(
            "svg",
            Object(a.a)(
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
        l = function (e) {
          return i.a.createElement(
            "svg",
            Object(a.a)(
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
      function c(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
        Object(a.f)(e, ["className"]);
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
      function d(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function u(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
        Object(a.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 52 46.1",
            className: Object(o.a)(t, "SVGIcon_Button"),
          },
          i.a.createElement("path", {
            d:
              "M49.3,41.6l-19.6-20l9.8-9.6c0.6,0.1,1.2,0.1,1.7-0.1c1.6-0.4,2.8-1.8,3.4-3.8c0.6-2.1,2-3.6,3.1-4.1\r\n\t\tc0.5-0.2,0.9-0.3,1.2-0.2c0.4,0.2,0.8,0,1-0.4c0.2-0.4,0-0.8-0.4-1c-2.1-1-3.9-1.5-5.7-1.5c-1.8,0-3.5,0.6-5.1,1.7\r\n\t\tc-2,1.5-3.1,3-3.2,4.6c0,0.3,0,0.5,0,0.8L26,17.9l-9.6-9.8c0-0.3,0.1-0.5,0-0.8c-0.1-1.6-1.2-3.1-3.2-4.6C11.7,1.5,10,0.9,8.2,0.9\r\n\t\tc-1.7,0-3.6,0.5-5.7,1.5C2.2,2.7,2,3.1,2.2,3.5c0.2,0.4,0.6,0.6,1,0.4c0.3-0.1,0.7,0,1.2,0.2c1.1,0.5,2.5,2,3.1,4.1\r\n\t\tc0.6,2,1.8,3.3,3.4,3.8c0.6,0.2,1.2,0.2,1.7,0.1l9.8,9.6l-19.6,20c-0.9,0.9-0.9,2.3,0,3.2c0.9,0.9,2.3,0.9,3.2,0l20-19.6\r\n\t\tc-0.1-0.1-0.3-0.3-0.4-0.4l20.5,20c0.9,0.9,2.3,0.9,3.2,0C50.1,43.9,50.1,42.5,49.3,41.6z M39.7,3.9c1.4-1.1,3.5-2.1,6.9-1\r\n\t\tc-1.6,1-2.9,2.8-3.5,4.8c-0.4,1.4-1.2,2.4-2.3,2.7c-0.4,0.1-0.9,0.1-1.3,0c0,0,0,0-0.1,0c-0.4-0.1-0.7-0.3-1.1-0.6\r\n\t\tc-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0-0.1-0.1c-0.3-0.4-0.5-0.8-0.7-1.2c0,0,0,0,0,0\r\n\t\tc-0.1-0.2-0.1-0.5-0.1-0.7C37.2,6.3,38,5.1,39.7,3.9z M36.2,9.7C36.2,9.7,36.2,9.7,36.2,9.7c0.1,0.2,0.2,0.4,0.4,0.5\r\n\t\tc0,0,0.1,0.1,0.1,0.1c0.1,0.2,0.3,0.3,0.5,0.5c0,0,0,0,0,0c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1\r\n\t\tl-1.3,1.3L34.9,11L36.2,9.7z M33.9,12.1l1.7,1.7l-6.9,6.8L27.1,19L33.9,12.1z M13.8,9.7c-0.1,0.1-0.1,0.1-0.2,0.1\r\n\t\tc-0.3,0.3-0.7,0.5-1.1,0.6c0,0,0,0-0.1,0c-0.4,0.1-0.9,0.1-1.3,0c-1-0.3-1.9-1.3-2.3-2.7C8.4,5.7,7,3.9,5.5,2.9\r\n\t\tc3.4-1.1,5.5-0.1,6.9,1c1.6,1.2,2.5,2.4,2.6,3.5c0,0.2,0,0.5-0.1,0.7c0,0,0,0,0,0c-0.1,0.4-0.3,0.8-0.7,1.2c0,0,0,0-0.1,0.1\r\n\t\tC14,9.4,13.9,9.5,13.8,9.7C13.8,9.7,13.8,9.7,13.8,9.7z M14.1,11.4c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1\r\n\t\tc0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.2-0.2,0.3-0.3,0.5-0.5c0,0,0.1-0.1,0.1-0.1c0.1-0.2,0.3-0.3,0.4-0.5c0,0,0,0,0,0l1.3,1.3\r\n\t\tl-1.7,1.7L14.1,11.4z M4.9,43.7c-0.3,0.3-0.7,0.3-1,0c-0.3-0.3-0.3-0.7,0-1l19.6-20l1.5,1.4L4.9,43.7z M48.2,43.7\r\n\t\tc-0.3,0.3-0.7,0.3-1,0l-30.6-30l1.7-1.7l30,30.6C48.4,43,48.4,43.5,48.2,43.7z",
          })
        );
      }
      function f(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 52 46.1",
          },
          i.a.createElement("path", {
            d:
              "M51.5,40.2l-6.8-11.7c2.4-2,3.9-5,3.9-8.4c0-6.1-4.9-11-11-11c-1.3,0-2.5,0.2-3.7,0.6L29.4,2c-0.7-1.2-2-2-3.4-2s-2.7,0.7-3.4,2l-4.1,7.1H6.6v20.6l-6,10.5c-0.7,1.2-0.7,2.7,0,4c0.7,1.2,2,2,3.4,2H48c1.4,0,2.7-0.7,3.4-2C52.2,42.9,52.2,41.4,51.5,40.2z M46.6,20.1c0,5-4,9-9,9s-9-4-9-9s4-9,9-9S46.6,15.1,46.6,20.1z M8.6,11.1h8.7L8.6,26.2V11.1zM49.7,43.1c-0.4,0.6-1,1-1.7,1H4c-0.7,0-1.3-0.4-1.7-1c-0.4-0.6-0.4-1.3,0-2L24.3,3c0.4-0.6,1-1,1.7-1s1.3,0.4,1.7,1l4.4,7.6c-3.3,1.9-5.5,5.5-5.5,9.5c0,6.1,4.9,11,11,11c2,0,3.9-0.5,5.5-1.5l6.7,11.5C50.1,41.8,50.1,42.5,49.7,43.1z",
          })
        );
      }
      function _(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function h(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function g(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function b(e) {
        e.className, Object(a.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            width: "23",
            height: "23",
            viewBox: "0 0 23 23",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M21.6537 6.60785H6.45296V21.836H21.6537V6.60785ZM5.66537 5.82026V22.6236H22.4413V5.82026H5.66537Z",
            fill: "currentColor",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M3.8655 3.81134H19.0663V4.45177H19.8538V3.81134V3.02375H19.0663H3.8655H3.07791V3.81134V19.0395V19.8271H3.8655H4.50591V19.0395H3.8655V3.81134Z",
            fill: "currentColor",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d:
              "M1.27802 1.01483H16.4788V1.65525H17.2664V1.01483V0.227242H16.4788H1.27802H0.490433V1.01483V16.243V17.0305H1.27802H1.91844V16.243H1.27802V1.01483Z",
            fill: "currentColor",
          })
        );
      }
      function y(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function I(e) {
        var t = e.className,
          n = Object(a.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object(a.a)(
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
      function C(e) {
        var t = e.className,
          n = Object(a.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object(a.a)(
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
      function v(e) {
        var t = e.className,
          n = Object(a.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object(a.a)(
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
      function w(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function M(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function N(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function j(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function E(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function S(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function O(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
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
      function A(e) {
        var t = e.className;
        Object(a.f)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: t,
            height: 100,
            width: 100,
            fill: "currentColor",
            stroke: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 69 69",
          },
          i.a.createElement("path", {
            d:
              "M47.9849 0.487061L62.9734 29.8571L95.5377 35.0362L72.2368 58.367L77.3741 90.9379L47.9849 75.9871L18.5956 90.9379L23.7329 58.367L0.432037 35.0362L32.9963 29.8571L47.9849 0.487061Z",
          }),
          "  "
        );
      }
      function D(e) {
        return i.a.createElement(
          "svg",
          Object(a.a)(
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
      function P(e) {
        return i.a.createElement(
          "svg",
          Object(a.a)(
            {
              width: "26",
              height: "26",
              viewBox: "0 0 26 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          i.a.createElement("rect", {
            x: "1.73633",
            y: "1.97144",
            width: "23",
            height: "23",
            rx: "2",
            "stroke-width": "2",
          }),
          i.a.createElement("line", {
            x1: "13.2646",
            y1: "7.81836",
            x2: "13.2646",
            y2: "19.1246",
            "stroke-width": "2.5",
          }),
          i.a.createElement("line", {
            x1: "18.8896",
            y1: "13.6355",
            x2: "7.58338",
            y2: "13.6355",
            "stroke-width": "2.5",
          })
        );
      }
    },
    eOCM: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/bored.png?v=valveisgoodatcaching";
    },
    eRlu: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/golden_frame_anim.png?v=valveisgoodatcaching";
    },
    eeci: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/hot_take_apng.png?v=valveisgoodatcaching";
    },
    ehaW: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return z;
      }),
        n.d(t, "e", function () {
          return U;
        }),
        n.d(t, "b", function () {
          return Z;
        }),
        n.d(t, "d", function () {
          return V;
        }),
        n.d(t, "c", function () {
          return W;
        }),
        n.d(t, "f", function () {
          return Q;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("TyAF"),
        s = n("StxQ"),
        l = n("6Y59"),
        c = n("Vlb1"),
        m = (n("li7h"), n("OU48"), n("0xSo"), n("exH9")),
        d = n("lkRc"),
        u = n("TLQK"),
        p = n("prdU"),
        f = n("cJ7F"),
        _ = n("cOvF"),
        h = n("IjL/"),
        g = n("qD+2"),
        b = n("lypr"),
        y = n("MLaC");
      function I(e) {
        var t = e.className,
          n = Object(a.f)(e, ["className"]);
        return i.a.createElement(
          "div",
          Object(a.a)({ className: Object(m.a)(t, y.Pulse) }, n)
        );
      }
      var C,
        v = n("2Ido"),
        w = n("vN/p"),
        M = n("mw7S"),
        N = {
          colors: {
            bodygradient: c.strDefaultBodyGradient,
            background: c.strDefaultBodyBackground,
          },
        };
      function j(e) {
        var t = e.definition,
          n = Object(a.f)(e, ["definition"]);
        t.community_item_data || console.log(t);
        var r = Object(M.a)(t.appid, t.community_item_data.item_image_large);
        3 == t.community_item_class &&
          (r =
            d.d.COMMUNITY_BASE_URL +
            "economy/profilebackground/items/" +
            t.appid +
            "/" +
            t.community_item_data.item_image_large +
            "?size=320x200");
        var o = [];
        t.community_item_data.animated &&
          o.push(
            i.a.createElement(_.b, {
              className: c.IconAnimated,
              key: "animated",
            })
          );
        var s = g.a.GetAppInfo(t.appid),
          l = s.icon_url,
          m = s.name,
          u = t.community_item_data.item_title
            ? t.community_item_data.item_title
            : t.community_item_data.item_name;
        return Object(a.a)(
          {
            cost: parseInt(t.point_cost),
            name: u,
            children: i.a.createElement("div", {
              className: c.Image,
              style: { backgroundImage: "url(" + r + ")" },
            }),
            attributes: o,
            desc: Object(p.d)(t.community_item_class),
            appIcon: l,
            appName: m,
          },
          n
        );
      }
      var E = Object(o.a)(function (e) {
          return i.a.createElement(z, Object(a.a)({}, j(e)));
        }),
        S = Object(o.a)(function (e) {
          return i.a.createElement(
            G,
            Object(a.a)({}, j(e), { iconComponent: l.o }),
            function (t) {
              var n = e.definition,
                a = n.appid,
                r = n.community_item_data,
                o = r.item_image_large,
                s = r.item_image_small,
                l = t ? s : o,
                m = Object(M.a)(a, l);
              return i.a.createElement("img", {
                className: c.ImageMedium,
                src: m,
              });
            }
          );
        }),
        O = Object(o.a)(function (e) {
          return i.a.createElement(
            z,
            Object(a.a)({}, j(e), { iconComponent: l.n }),
            i.a.createElement("img", {
              className: c.ImageSmall,
              src: Object(M.a)(
                e.definition.appid,
                e.definition.community_item_data.item_image_large
              ),
            })
          );
        }),
        A = Object(o.a)(function (e) {
          return i.a.createElement(
            z,
            Object(a.a)({}, j(e), { iconComponent: l.m })
          );
        }),
        D = Object(o.a)(function (e) {
          return e.definition.community_item_data.animated
            ? i.a.createElement(P, Object(a.a)({}, e))
            : i.a.createElement(x, Object(a.a)({}, e));
        }),
        P = Object(o.a)(function (e) {
          return i.a.createElement(
            T,
            Object(a.a)({ className: c.HasAnimation }, j(e), {
              iconComponent: l.d,
              styleOverride: c.BackgroundOverride,
              videoProps: {
                className: c.ImageBackground,
                poster:
                  d.d.COMMUNITY_BASE_URL +
                  "economy/profilebackground/items/" +
                  e.definition.appid +
                  "/" +
                  e.definition.community_item_data.item_image_large +
                  "?size=320x200",
              },
            }),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement("source", {
                src: Object(M.a)(
                  e.definition.appid,
                  e.definition.community_item_data.item_movie_webm_small
                    ? e.definition.community_item_data.item_movie_webm_small
                    : e.definition.community_item_data.item_movie_webm
                ),
                type: "video/webm",
              }),
              i.a.createElement("source", {
                src: Object(M.a)(
                  e.definition.appid,
                  e.definition.community_item_data.item_movie_mp4_small
                    ? e.definition.community_item_data.item_movie_mp4_small
                    : e.definition.community_item_data.item_movie_mp4
                ),
                type: "video/mp4",
              })
            )
          );
        }),
        x = Object(o.a)(function (e) {
          return i.a.createElement(
            z,
            Object(a.a)({}, j(e), {
              iconComponent: l.d,
              styleOverride: c.BackgroundOverride,
            }),
            i.a.createElement("img", {
              className: c.ImageBackground,
              src:
                d.d.COMMUNITY_BASE_URL +
                "economy/profilebackground/items/" +
                e.definition.appid +
                "/" +
                e.definition.community_item_data.item_image_large +
                "?size=320x200",
            })
          );
        }),
        L = Object(o.a)(function (e) {
          return i.a.createElement(
            T,
            Object(a.a)({}, j(e), {
              iconComponent: _.u,
              videoProps: {
                className: c.ImageMiniBackground,
                poster: Object(M.a)(
                  e.definition.appid,
                  e.definition.community_item_data.item_image_large
                ),
              },
            }),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement("source", {
                src: Object(M.a)(
                  e.definition.appid,
                  e.definition.community_item_data.item_movie_webm_small
                    ? e.definition.community_item_data.item_movie_webm_small
                    : e.definition.community_item_data.item_movie_webm
                ),
                type: "video/webm",
              }),
              i.a.createElement("source", {
                src: Object(M.a)(
                  e.definition.appid,
                  e.definition.community_item_data.item_movie_mp4_small
                    ? e.definition.community_item_data.item_movie_mp4_small
                    : e.definition.community_item_data.item_movie_mp4
                ),
                type: "video/mp4",
              })
            )
          );
        }),
        B = Object(o.a)(function (e) {
          return i.a.createElement(
            G,
            Object(a.a)({}, j(e), { iconComponent: _.h }),
            function (t) {
              var n = e.definition,
                a = n.appid,
                r = n.community_item_data,
                o = r.item_image_large,
                s = r.item_image_small,
                l = t ? s : o,
                m = Object(M.a)(a, l);
              return i.a.createElement("img", {
                className: c.ImageFrames,
                src: m,
              });
            }
          );
        }),
        R = Object(o.a)(function (e) {
          return i.a.createElement(
            G,
            Object(a.a)({}, j(e), { iconComponent: _.c }),
            function (t) {
              var n = e.definition,
                a = n.appid,
                r = n.community_item_data,
                o = r.item_image_large,
                s = r.item_image_small,
                l = t ? s : o,
                m = Object(M.a)(a, l);
              return i.a.createElement("img", {
                className: c.ImageAnimatedAvatar,
                src: m,
              });
            }
          );
        }),
        k = Object(o.a)(function (e) {
          return i.a.createElement(
            z,
            Object(a.a)({}, j(e), { iconComponent: _.m, desc: Object(p.d)(8) })
          );
        }),
        T = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_ref = i.a.createRef()),
              (t.state = { bVisible: !1 }),
              (t.m_playPromise = null),
              (t.m_bShouldContinuePlaying = !0),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.children,
                r = t.videoProps,
                o = Object(a.f)(t, ["children", "videoProps"]);
              return i.a.createElement(
                z,
                Object(a.a)({}, o),
                i.a.createElement(b.a, {
                  trigger: "repeated",
                  onVisibilityChange: function (t) {
                    return e.HandleVisibilityChange(t);
                  },
                  className: c.VisibilityTracker,
                }),
                i.a.createElement(
                  "video",
                  Object(a.a)(
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
            (t.prototype.HandleVisibilityChange = function (e) {
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
            t
          );
        })(i.a.Component),
        G = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { bHover: !1 }), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.children,
                r = Object(a.f)(t, ["children"]);
              return i.a.createElement(
                z,
                Object(a.a)({}, r, {
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
            t
          );
        })(i.a.Component),
        z = function (e) {
          var t = e.appName,
            n = e.appIcon,
            r = e.attributes,
            o = e.children,
            l = e.cost,
            d = e.iconComponent,
            u = e.name,
            p = e.desc,
            h = e.className,
            g = (e.style, e.theme),
            b = e.styleOverride,
            y = e.strPriceOverride,
            I = (e.itemLevel, e.purchaseable),
            C = void 0 === I || I,
            v = Object(a.f)(e, [
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
              "purchaseable",
            ]),
            w = d,
            M = { background: (g || N).colors.bodygradient },
            j = { background: (g || N).colors.background };
          return i.a.createElement(
            "div",
            { className: c.ItemContainer },
            i.a.createElement(
              f.a,
              Object(a.a)({}, v, {
                className: Object(m.a)(h, c.Item, b),
                style: j,
              }),
              i.a.createElement(
                f.b,
                { className: c.Body, style: M },
                i.a.createElement("div", { className: c.Attributes }, r),
                i.a.createElement(Y, { src: n, title: t }),
                !C &&
                  i.a.createElement(
                    "div",
                    { className: c.BodyTopRight },
                    i.a.createElement(_.k, {
                      className: c.IconPartialCheckMark,
                    }),
                    i.a.createElement(_.j, { className: c.IconCheckMark })
                  ),
                o
              ),
              i.a.createElement(
                f.c,
                { className: c.Footer },
                i.a.createElement(
                  "div",
                  { style: { flex: 1, paddingBottom: "10px" } },
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement("div", { className: c.Name }, u),
                    i.a.createElement(
                      "div",
                      { className: c.ItemTypeContainer },
                      w &&
                        i.a.createElement(w, {
                          className: c.Icon,
                          style: { fill: "" },
                        }),
                      i.a.createElement(
                        "div",
                        { className: c.Subtitle },
                        p,
                        " "
                      )
                    )
                  )
                ),
                C &&
                  i.a.createElement(
                    "div",
                    { className: c.CostRow },
                    i.a.createElement(_.k, {
                      className: c.IconPartialCheckMark,
                    }),
                    i.a.createElement(_.j, { className: c.IconCheckMark }),
                    i.a.createElement(
                      "div",
                      { className: c.Cost },
                      null != y ? y : i.a.createElement(s.a, { amount: l })
                    )
                  )
              ),
              i.a.createElement("div", { className: c.ItemContainerShine })
            )
          );
        },
        F = function (e) {
          var t = e.appName,
            n = e.appIcon,
            r = e.attributes,
            o = e.children,
            l = e.cost,
            d = e.iconComponent,
            u = e.name,
            p = e.desc,
            h = e.className,
            g = (e.style, e.theme),
            b = e.styleOverride,
            y = e.strPriceOverride,
            I =
              (e.itemLevel,
              Object(a.f)(e, [
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
            C = d,
            v = { background: (g || N).colors.bodygradient },
            w = { background: (g || N).colors.background };
          return i.a.createElement(
            "div",
            { className: c.ItemWideContainer },
            i.a.createElement(
              f.a,
              Object(a.a)({}, I, {
                className: Object(m.a)(h, c.Item, b),
                style: w,
              }),
              i.a.createElement(
                f.b,
                { className: c.Body, style: v },
                i.a.createElement("div", { className: c.Attributes }, r),
                i.a.createElement(Y, { src: n, title: t }),
                o
              ),
              i.a.createElement(
                f.c,
                { className: c.Footer },
                i.a.createElement(
                  "div",
                  { style: { flex: 1 } },
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement("div", { className: c.Name }, u),
                    i.a.createElement(
                      "div",
                      { className: c.ItemTypeContainer },
                      C &&
                        i.a.createElement(C, {
                          className: c.Icon,
                          style: { fill: "" },
                        }),
                      i.a.createElement(
                        "div",
                        { className: c.Subtitle },
                        p,
                        " "
                      )
                    )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: c.CostRow },
                  i.a.createElement(_.k, { className: c.IconPartialCheckMark }),
                  i.a.createElement(_.j, { className: c.IconCheckMark }),
                  i.a.createElement(
                    "div",
                    { className: c.Cost },
                    null != y ? y : i.a.createElement(s.a, { amount: l })
                  )
                )
              ),
              i.a.createElement("div", { className: c.ItemContainerShine })
            )
          );
        },
        H =
          (((C = {})[11] = S),
          (C[4] = O),
          (C[12] = A),
          (C[3] = D),
          (C[13] = L),
          (C[8] = k),
          (C[14] = B),
          (C[15] = R),
          C),
        U = Object(o.a)(function (e) {
          var t,
            n = e.className,
            r = Object(a.f)(e, ["className"]),
            o = p.b.Get().BRewardOwnedByUser(e.definition),
            s = Object(m.a)(n, o && c.OwnedItem);
          if (5 == e.definition.type || 6 == e.definition.type)
            return i.a.createElement(
              h.a,
              { fallback: null },
              i.a.createElement(
                v.a,
                Object(a.a)({}, r, { className: s, onClick: e.onClick })
              )
            );
          if (
            8 == e.definition.community_item_class &&
            0 !=
              (null === (t = e.definition.bundle_defids) || void 0 === t
                ? void 0
                : t.length)
          )
            return i.a.createElement(
              h.a,
              { fallback: null },
              i.a.createElement(
                w.b,
                Object(a.a)({}, r, { className: s, onClick: e.onClick })
              )
            );
          var l = H[e.definition.community_item_class];
          return l
            ? i.a.createElement(
                h.a,
                { fallback: null },
                i.a.createElement(
                  l,
                  Object(a.a)({}, r, { className: s, onClick: e.onClick })
                )
              )
            : i.a.createElement(
                h.a,
                { fallback: null },
                i.a.createElement(
                  E,
                  Object(a.a)({}, r, { className: s, onClick: e.onClick })
                )
              );
        });
      function Z(e) {
        return n("JeMz")("./icon_showcase_" + e + ".svg");
      }
      var V = function (e) {
        return i.a.createElement(
          F,
          Object(a.a)(
            {},
            ((n = (t = e).customization_type),
            (r = t.current_level),
            (o = t.point_cost),
            (s = Object(a.f)(t, [
              "customization_type",
              "current_level",
              "point_cost",
            ])),
            (l = Z(n)),
            (d = Object(u.f)("#ProfileShowcases_Type_" + n)),
            (f = r >= p.b.Get().GetMaxProfileShowcaseUpgradeLevel()),
            (h = r > 1),
            (g = Object(m.a)(f && c.OwnedItem, !f && h && c.OwnedItemProgress)),
            Object(a.a)(
              {
                cost: o,
                name: d,
                itemLevel: r,
                children: i.a.createElement("img", {
                  className: c.ImageProfileShowcase,
                  src: l,
                }),
                desc: Object(u.f)("#ProfileShowcases_Upgrade"),
                attributes: [],
                className: g,
                iconComponent: _.y,
              },
              s
            ))
          )
        );
        var t, n, r, o, s, l, d, f, h, g;
      };
      var W = function (e) {
          return i.a.createElement(
            F,
            Object(a.a)(
              {},
              ((n = (t = e).customization_type),
              (r = t.point_cost),
              (o = t.purchased_count),
              t.current_level,
              (s = Object(a.f)(t, [
                "customization_type",
                "point_cost",
                "purchased_count",
                "current_level",
              ])),
              (l = Z(n)),
              (d = Object(u.f)("#ProfileShowcases_Type_" + n)),
              (f = o >= p.b.Get().GetMaxProfileShowcaseSlots()),
              (h = Object(m.a)(f && c.OwnedItem)),
              Object(a.a)(
                {
                  cost: r,
                  name: d,
                  children: i.a.createElement("img", {
                    className: c.ImageProfileShowcase,
                    src: l,
                  }),
                  desc: Object(u.f)("#ProfileShowcases_AdditionalSlot"),
                  attributes: [],
                  className: h,
                  iconComponent: _.y,
                },
                s
              ))
            )
          );
          var t, n, r, o, s, l, d, f, h;
        },
        Y = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { bLoadComplete: !1 }), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.src,
                a = t.title,
                r = this.state.bLoadComplete;
              return n
                ? i.a.createElement(
                    "div",
                    { className: c.AppIconContainer },
                    i.a.createElement("img", {
                      className: c.AppIcon,
                      src: n,
                      onLoad: function () {
                        return e.setState({ bLoadComplete: !0 });
                      },
                      style: r ? void 0 : { display: "none" },
                      title: a,
                      alt: a,
                    })
                  )
                : null;
            }),
            t
          );
        })(i.a.Component);
      function Q() {
        return i.a.createElement(
          I,
          { className: c.ItemContainer },
          i.a.createElement(
            f.a,
            { className: Object(m.a)(c.Item, c.ItemSkeleton) },
            i.a.createElement(f.b, { className: c.Body }),
            i.a.createElement(
              f.c,
              { className: c.Footer },
              i.a.createElement(
                "div",
                { style: { flex: 1 } },
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement("div", { className: c.SkeletonName }),
                  i.a.createElement("div", { className: c.SkeletonSubtitle })
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
    jUCX: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return d;
        });
      var a = n("mrSG"),
        r = n("2vnA"),
        i = n("Gp1o"),
        o = n("qD+2"),
        s = n("TLQK"),
        l = (n("kyHq"), n("li7h"), n("lkRc")),
        c = (n("kLLr"), n("8H1D"));
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
      var d = (function () {
        function e(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = c.b),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_mapRichPresence = r.C.map()),
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
            var e = 3600,
              t = 1e3,
              n = o.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return (t *= n > 86400 ? e : n > 7200 ? 60 : 15);
          }),
          (e.prototype.GetOfflineStatusTime = function () {
            if (0 == this.last_seen_online)
              return Object(s.f)("#PersonaStateOffline");
            var e = this.GetOfflineStatusUpdateRate();
            (!l.d.IN_MOBILE || e <= 60) && Object(i.b)(e);
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
            return this.m_strAvatarHash != c.b;
          }),
          Object.defineProperty(e.prototype, "avatar_url", {
            get: function () {
              return Object(c.a)(this.m_strAvatarHash);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "avatar_url_medium", {
            get: function () {
              return Object(c.a)(this.m_strAvatarHash, "medium");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "avatar_url_full", {
            get: function () {
              return Object(c.a)(this.m_strAvatarHash, "full");
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
          Object(a.c)([r.C], e.prototype, "m_bInitialized", void 0),
          Object(a.c)([r.C], e.prototype, "m_ePersonaState", void 0),
          Object(a.c)([r.C], e.prototype, "m_unGamePlayedAppID", void 0),
          Object(a.c)([r.C], e.prototype, "m_gameid", void 0),
          Object(a.c)([r.C], e.prototype, "m_unPersonaStateFlags", void 0),
          Object(a.c)([r.C], e.prototype, "m_strPlayerName", void 0),
          Object(a.c)([r.C], e.prototype, "m_strAvatarHash", void 0),
          Object(a.c)([r.C], e.prototype, "m_rtLastSeenOnline", void 0),
          Object(a.c)([r.C], e.prototype, "m_strGameExtraInfo", void 0),
          Object(a.c)([r.C], e.prototype, "m_unGameServerIP", void 0),
          Object(a.c)([r.C], e.prototype, "m_unGameServerPort", void 0),
          Object(a.c)([r.C], e.prototype, "m_game_lobby_id", void 0),
          Object(a.c)([r.C], e.prototype, "m_bPlayerNamePending", void 0),
          Object(a.c)([r.C], e.prototype, "m_bAvatarPending", void 0),
          Object(a.c)([r.C], e.prototype, "m_broadcastId", void 0),
          Object(a.c)([r.C], e.prototype, "m_broadcastAccountId", void 0),
          Object(a.c)([r.C], e.prototype, "m_broadcastAppId", void 0),
          Object(a.c)([r.C], e.prototype, "m_broadcastViewerCount", void 0),
          Object(a.c)([r.C], e.prototype, "m_strBroadcastTitle", void 0),
          Object(a.c)([r.C], e.prototype, "m_bCommunityBanned", void 0),
          e
        );
      })();
    },
    kJAG: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/Sunglasses.gif?v=valveisgoodatcaching";
    },
    kqfX: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/golden_pagebg.png?v=valveisgoodatcaching";
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
        gameName: "personanameandstatus_gameName_1cB0q",
        NoMask: "personanameandstatus_NoMask_2dAj6",
        twoLine: "personanameandstatus_twoLine_1BbOe",
        DNDContainer: "personanameandstatus_DNDContainer_3IswZ",
        partyBeaconJoin: "personanameandstatus_partyBeaconJoin_3BnDs",
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
        CouponsSection: "styles_CouponsSection_2clpW",
        CouponsContainer: "styles_CouponsContainer_1FgnE",
        CouponsFooter: "styles_CouponsFooter_18cUz",
        InfoText: "styles_InfoText_2OCm6",
        BlueButton: "styles_BlueButton_9H0RW",
        BlueButtonSmall: "styles_BlueButtonSmall_3U87j",
        PageHomeHowItWorks: "styles_PageHomeHowItWorks_2bWxo",
      };
    },
    lr4S: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/coin_small.png?v=valveisgoodatcaching";
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
    mw7S: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return i;
        });
      var a = n("lkRc");
      n("OU48"), n("0xSo");
      function r(e, t) {
        return a.d.MEDIA_CDN_COMMUNITY_URL + "images/items/" + e + "/" + t;
      }
      function i(e) {
        switch (e.community_item_class) {
          case 15:
          case 14:
          case 11:
            return r(e.appid, e.community_item_data.item_image_small);
          case 3:
            return (
              a.d.COMMUNITY_BASE_URL +
              "economy/profilebackground/items/" +
              e.appid +
              "/" +
              e.community_item_data.item_image_large +
              "?size=320x200"
            );
          default:
            return r(e.appid, e.community_item_data.item_image_large);
        }
      }
    },
    n4wG: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "b", function () {
          return I;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("TyAF"),
        s = n("TLQK"),
        l = n("+9fn"),
        c = n("cJ7F"),
        m = n("Wilf"),
        d = n("StxQ"),
        u = n("exH9"),
        p = n("nXE5"),
        f = n("cOvF"),
        _ = n("prdU"),
        h = n("lkRc"),
        g = n("+j4l"),
        b = n("RV7a"),
        y = function (e, t) {
          return h.d.MEDIA_CDN_COMMUNITY_URL + "/images/items/" + e + "/" + t;
        },
        I = Object(o.a)(function () {
          var e = _.b.Get().GetSeasonalBadgeDefinition(),
            t = _.b.Get().GetUserSeasonalBadgeLevel(),
            n = e
              ? e.community_item_data.badge_data.map(function (n) {
                  var a = n.level,
                    r = n.image;
                  return {
                    level: a,
                    imgSrc: y(e.appid, r),
                    owned: t >= a,
                    cost: _.b.Get().GetCostToLevelSeasonalBadge(a),
                  };
                })
              : [];
          return i.a.createElement(
            p.e,
            null,
            i.a.createElement(
              b.a,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              i.a.createElement(
                l.b,
                {
                  title: Object(s.f)(
                    "#SeasonalBadge_Title",
                    Object(s.f)("#SeasonName_Summer")
                  ),
                  subtitle: Object(s.f)(
                    "#SeasonalBadge_Description",
                    Object(s.f)("#SeasonName_Summer")
                  ),
                },
                i.a.createElement(
                  C,
                  null,
                  n.map(function (t) {
                    return i.a.createElement(
                      v,
                      Object(a.a)({ key: t.level }, t, {
                        onClick: function (n) {
                          return Object(g.e)(n, e, t.level);
                        },
                      })
                    );
                  })
                )
              )
            )
          );
        }),
        C = function (e) {
          var t = e.children;
          return i.a.createElement(
            b.c,
            { className: m.BadgeGrid, verticalSpacing: "large" },
            t
          );
        },
        v = function (e) {
          var t = e.level,
            n = e.owned,
            r = e.cost,
            o = e.imgSrc,
            l = e.className,
            d = Object(a.f)(e, [
              "level",
              "owned",
              "cost",
              "imgSrc",
              "className",
            ]);
          return i.a.createElement(
            c.a,
            Object(a.a)({ className: Object(u.a)(m.Badge, l) }, d),
            i.a.createElement(
              c.b,
              null,
              i.a.createElement("img", {
                src: o,
                title: Object(s.f)("#BadgeLevel", t),
                className: m.BadgeImage,
              })
            ),
            i.a.createElement(
              c.c,
              { className: m.Footer },
              i.a.createElement(N, { owned: n, level: t }),
              i.a.createElement(
                "div",
                { className: m.Hint },
                n
                  ? i.a.createElement(w, null)
                  : i.a.createElement(M, { cost: r })
              )
            )
          );
        },
        w = function () {
          return i.a.createElement(f.j, { className: m.OwnedSticker });
        },
        M = function (e) {
          var t = e.cost;
          return i.a.createElement(d.a, { amount: t, size: 0.75 });
        },
        N = function (e) {
          var t = e.level,
            n = e.owned;
          return i.a.createElement(
            "div",
            { className: Object(u.a)(m.LevelMarker, n && m.Owned) },
            i.a.createElement("div", { className: m.Inner }, t)
          );
        };
    },
    nXE5: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return I;
      }),
        n.d(t, "d", function () {
          return C;
        }),
        n.d(t, "e", function () {
          return N;
        }),
        n.d(t, "b", function () {
          return E;
        }),
        n.d(t, "a", function () {
          return A;
        }),
        n.d(t, "f", function () {
          return x;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("TyAF"),
        s = n("5pqL"),
        l = n("RV7a"),
        c = n("EC67"),
        m = (function (e) {
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
              var e = this.props,
                t = e.scrollElement,
                n = e.location.hash,
                a = function () {
                  return t && t.scrollTo(0, 0);
                };
              if (n) {
                var r = n.slice(1),
                  i = document.getElementById(r);
                i ? i.scrollIntoView() : a();
              } else a();
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(i.a.Component),
        d = Object(c.i)(m),
        u = n("exH9"),
        p = n("cCsu"),
        f = n.n(p),
        _ = n("TJrv"),
        h = n.n(_),
        g = n("f+AQ"),
        b = n.n(g),
        y = n("IzPI"),
        I = function (e) {
          var t = e.className,
            n = Object(a.f)(e, ["className"]),
            r = i.a.useRef();
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              "div",
              Object(a.a)(
                { ref: r, className: Object(u.a)(s.StandardRoot, t) },
                n
              )
            ),
            i.a.createElement(d, { scrollElement: r.current })
          );
        },
        C = function (e) {
          var t = e.className,
            n = Object(a.f)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object(a.a)({ className: Object(u.a)(s.StandardBackground, t) }, n)
          );
        },
        v = function (e) {
          var t = e.children;
          return i.a.createElement(I, { className: s.ParallaxRoot }, t);
        },
        w = function (e) {
          var t = e.children,
            n = e.src,
            a = e.className;
          return i.a.createElement(
            i.a.Fragment,
            null,
            t,
            i.a.createElement("div", {
              className: Object(u.a)(s.ParallaxBackground, a),
              style: { backgroundImage: "url(" + n + ")" },
            })
          );
        },
        M = function (e) {
          var t = e.children;
          return i.a.createElement(
            l.a,
            {
              paddingX: ["xxsmall", "small", "xxlarge"],
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "xlarge",
              className: s.StandardLayout,
            },
            i.a.createElement(
              l.e,
              { itemClassName: s.PageItem, className: s.ItemContainer },
              t
            )
          );
        },
        N = function (e) {
          var t = e.background,
            n = e.children,
            a = f.a;
          return (
            t && (a = t),
            i.a.createElement(
              v,
              null,
              i.a.createElement(w, { src: a }, i.a.createElement(M, null, n))
            )
          );
        },
        j = function (e) {
          var t = e.children;
          return i.a.createElement(
            w,
            { src: h.a, className: s.HomeBackground },
            t
          );
        },
        E = function (e) {
          var t = e.children;
          return i.a.createElement(
            v,
            null,
            i.a.createElement(j, null, i.a.createElement(M, null, t))
          );
        },
        S = Object(o.a)(function (e) {
          var t = e.children,
            n = (function (e) {
              var t = i.a.useState(""),
                n = t[0],
                a = t[1];
              return (
                i.a.useEffect(
                  function () {
                    var t = !0,
                      n = Object(y.e)(e);
                    a(n);
                    var r = new Image();
                    return (
                      (r.onerror = function () {
                        return t && a(Object(y.d)(e));
                      }),
                      (r.src = n),
                      function () {
                        t = !1;
                      }
                    );
                  },
                  [e]
                ),
                n
              );
            })(e.appid);
          return i.a.createElement(
            w,
            { src: n, className: s.ParallaxAppBackground },
            t
          );
        }),
        O = { 1461450: b.a };
      function A(e) {
        return e.appid in O
          ? i.a.createElement(D, Object(a.a)({}, e))
          : i.a.createElement(P, Object(a.a)({}, e));
      }
      function D(e) {
        var t = e.children,
          n = (function (e) {
            return O[e];
          })(e.appid);
        return i.a.createElement(
          I,
          null,
          i.a.createElement(
            "div",
            {
              style: { backgroundImage: 'url("' + n + '")' },
              className: s.CustomAppBackground,
            },
            i.a.createElement(M, null, t)
          )
        );
      }
      function P(e) {
        var t = e.children,
          n = e.appid;
        return i.a.createElement(
          v,
          null,
          i.a.createElement(S, { appid: n }, i.a.createElement(M, null, t))
        );
      }
      var x = function (e) {
        var t = e.title,
          n = e.subtitle,
          a = e.headerImage;
        return i.a.createElement(
          i.a.Fragment,
          null,
          a &&
            i.a.createElement("img", { className: s.PageHeaderImage, src: a }),
          t && i.a.createElement("div", { className: s.PageTitle }, t),
          n && i.a.createElement("div", { className: s.PageSubtitle }, n)
        );
      };
    },
    nu2M: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/hot_take_anim000.png?v=valveisgoodatcaching";
    },
    o8B4: function (e, t, n) {
      e.exports = {
        Shell: "bundle_Shell_2Z10h",
        ShellScrollParent: "bundle_ShellScrollParent_2jHWH",
        ShellHeader: "bundle_ShellHeader_1axcM",
        ShellHeaderBrandLink: "bundle_ShellHeaderBrandLink_1i4HJ",
        PointsContainer: "bundle_PointsContainer__N-AD",
        AppFilterContainer: "bundle_AppFilterContainer_2kksR",
        HeaderVerticalDivider: "bundle_HeaderVerticalDivider_2-cHX",
        AppFilterLabel: "bundle_AppFilterLabel_1RJzi",
        AppFilterIconContainer: "bundle_AppFilterIconContainer_1OJXs",
        AppFilterIcon: "bundle_AppFilterIcon_3GvhN",
        FilterInUse: "bundle_FilterInUse_xY88h",
        RewardsPointsIcon: "bundle_RewardsPointsIcon_1z6Uz",
        YourBalanceLabel: "bundle_YourBalanceLabel_RvCZ5",
        RewardsPointsCount: "bundle_RewardsPointsCount_YYMbH",
        ShellHeaderBrandName: "bundle_ShellHeaderBrandName_3f3Hd",
        SvgOverrideColor: "bundle_SvgOverrideColor_1Ej_H",
        ItemHoverZIndex: "bundle_ItemHoverZIndex_1kpJg",
        ActionButton: "bundle_ActionButton_IcoSk",
        Icon: "bundle_Icon_qgoN9",
        CheckmarkCircle: "bundle_CheckmarkCircle_3SNm6",
        AlreadyOwned: "bundle_AlreadyOwned_1FA0V",
        ItemHand: "bundle_ItemHand_2zFSr",
        ItemCard: "bundle_ItemCard_1zIyr",
        OwnedItem: "bundle_OwnedItem_3Pdrt",
        ItemCardImage: "bundle_ItemCardImage_1nKg-",
        BundleContainer: "bundle_BundleContainer_2p-sr",
        AppIcon: "bundle_AppIcon_3zitw",
        BundleFooter: "bundle_BundleFooter_zpf5C",
        BundleName: "bundle_BundleName_2PEeM",
        BundleDiscount: "bundle_BundleDiscount_wenYA",
      };
    },
    okIP: function (e, t, n) {
      e.exports =
        n.p + "images/applications/store/golden_bg.png?v=valveisgoodatcaching";
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
        Discount: "redeempointsmodal_Discount_lmMNo",
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
        RedeemButton: "redeempointsmodal_RedeemButton_19X6A",
        DiscountContainer: "redeempointsmodal_DiscountContainer_17jkg",
        CostContainer: "redeempointsmodal_CostContainer_2pwsW",
        OriginalCost: "redeempointsmodal_OriginalCost_1-3a9",
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
        BundleItemContainer: "redeempointsmodal_BundleItemContainer_2Lw2P",
        BundleItemPreviewContainer:
          "redeempointsmodal_BundleItemPreviewContainer_26yC-",
        BundleItemPreview: "redeempointsmodal_BundleItemPreview_3gaKB",
        BundleItemPreviewImage:
          "redeempointsmodal_BundleItemPreviewImage_1XWQ1",
        BundleChildItemName: "redeempointsmodal_BundleChildItemName_1np8I",
        BundleChildItemClass: "redeempointsmodal_BundleChildItemClass_3qv_r",
        BundleChildItemOwned: "redeempointsmodal_BundleChildItemOwned_14pUJ",
        OwnedCheckmark: "redeempointsmodal_OwnedCheckmark_RtMC5",
        PreviewProfileBundleFrameContainer:
          "redeempointsmodal_PreviewProfileBundleFrameContainer_21Gwk",
        PreviewProfileBundleFrame:
          "redeempointsmodal_PreviewProfileBundleFrame_1ms02",
        WarningTextContainer: "redeempointsmodal_WarningTextContainer_1AVIh",
        TimeWarning: "redeempointsmodal_TimeWarning_3TOAC",
        SaleRewardImg: "redeempointsmodal_SaleRewardImg_Ur-Ad",
        RedeemThrobber: "redeempointsmodal_RedeemThrobber_3weKx",
        PreviewLinkContainer: "redeempointsmodal_PreviewLinkContainer_2uwx7",
        PreviewLink: "redeempointsmodal_PreviewLink_1F7sB",
      };
    },
    prdU: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return A;
      }),
        n.d(t, "f", function () {
          return D;
        }),
        n.d(t, "b", function () {
          return x;
        }),
        n.d(t, "e", function () {
          return L;
        }),
        n.d(t, "a", function () {
          return z;
        }),
        n.d(t, "c", function () {
          return Y;
        });
      var a = n("mrSG"),
        r = (n("q1tI"), n("2lpH")),
        i = n.n(r),
        o = n("2vnA"),
        s = n("TLQK"),
        l = n("vDqi"),
        c = n.n(l),
        m = n("lkRc"),
        d = n("kyHq"),
        u = n("OS6B"),
        p = n("opsS"),
        f = n("bxBv"),
        _ = (n("li7h"), n("OU48")),
        h = n("0xSo"),
        g = n("oFam"),
        b = n("cxFF"),
        y = n("BFsE"),
        I = (n("SvTV"), n("jUCX")),
        C = n("kLLr"),
        v = (n("RhBb"), n("bEwK")),
        w = n.n(v),
        M = (n("cMk+"), n("cOvF")),
        N = n("1fPh"),
        j = n("r64O"),
        E = n("qD+2"),
        S = (n("sOw0"), n("E4Op"), n("ee7K")),
        O = n("CdLH");
      function A(e, t) {
        void 0 === t && (t = !1);
        var n = function (e) {
          return Object(s.f)(t ? e + "_Plural" : e);
        };
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
      var D = "home",
        P = (function () {
          return function () {
            (this.items = []), (this.mapItemOwnership = new Map());
          };
        })(),
        x = (function () {
          function e() {
            var e = this;
            (this.m_lPointsAvailable = new i.a(0, 0)),
              (this.m_bLoadedCouponPromosForUser = !1),
              (this.m_mapCouponPromos = new Map()),
              (this.m_nAppIDFiltersInUseCount = 0),
              (this.m_mapAppIDFilters = new Map()),
              (this.m_strAppFilterText = ""),
              (this.m_bLoadedCouponDefinitions = !1),
              (this.m_mapCouponDefinitons = new Map()),
              (this.m_mapLoyaltyRewardDefs = new Map()),
              (this.m_inflightRewardItemRequestsByID = {}),
              (this.m_bLoadedFullInventory = !1),
              (this.m_mapOwnedCommunityItems = new Map()),
              (this.m_inflightInventoryRequests = {}),
              (this.m_bLoadedActiveBonuses = !1),
              (this.m_rgActiveBonuses = o.C.array([], { deep: !1 })),
              (this.m_mapAppRewards = new Map()),
              (this.m_inflightRewardItemRequests = {}),
              (this.m_goldenProfileConfigs = []),
              (this.m_bLoadedRecentlyPlayed = !1),
              (this.m_rgRecentlyPlayed = []),
              (this.m_bSortedGamesWithRewards = !1),
              (this.m_rgSortedAppsWithRewards = o.C.array([], { deep: !1 })),
              (this.m_bLoadedEligibleApps = !1),
              (this.m_rgEligibleApps = []),
              (this.m_mapEligibleApps = new Map()),
              (this.m_equippedItems = {}),
              (this.m_bLoadedAwardCost = !1),
              (this.m_unAwardPointsTransferred = 0),
              (this.m_bIsSaleActive = !1),
              (this.m_HeroImageFallbackLoader = new W(
                function (e) {
                  return fetch(
                    m.d.STORE_BASE_URL + "points/heroimage?appid=" + e
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
              (this.m_batchedRewardItemLoader = new Z(
                function (t) {
                  return _.o.BatchedQueryRewardItems(e.m_anonymousTransport, t);
                },
                function (e) {
                  var t = f.b.Init(_.b);
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
              (this.m_batchedCommunityInventoryLoader = new Z(
                function (t) {
                  return h.c.GetCommunityInventory(e.m_transport, t);
                },
                function (e) {
                  var t = f.b.Init(h.b);
                  return t.Body().set_filter_appids(e), t;
                },
                function (e, t) {
                  if (1 == e.GetEResult()) {
                    var n = e.Body().toObject().items,
                      a = {};
                    return (
                      n.forEach(function (e) {
                        a[e.appid] || (a[e.appid] = []), a[e.appid].push(e);
                      }),
                      t.map(function (e) {
                        return a[e] || [];
                      })
                    );
                  }
                  return (
                    console.error(
                      "Error when calling QuestService.GetCommunityInventory: EResult=" +
                        e.GetEResult()
                    ),
                    t.map(function () {
                      return [];
                    })
                  );
                }
              )),
              (this.m_mapPages = o.C.map({}, { deep: !1 })),
              (this.m_mapClusters = o.C.map({}, { deep: !1 }));
          }
          return (
            (e.prototype.Init = function (e, t) {
              if (
                ((this.m_transport = e.GetServiceTransport()),
                (this.m_anonymousTransport = e.GetAnonymousServiceTransport()),
                (this.m_config = t),
                this.BIsLoggedIn())
              ) {
                var n = new C.a(m.k.steamid);
                (this.m_persona = new I.a(n)), this.RetrievePersonaState();
              }
              t.eligible_apps
                ? ((this.m_bLoadedEligibleApps = !0),
                  (this.m_rgEligibleApps = t.eligible_apps.apps),
                  (this.m_mapEligibleApps = new Map(
                    this.m_rgEligibleApps.map(function (e) {
                      return [e.appid, e];
                    })
                  )))
                : this.LoadEligibleApps(),
                t.profile_customizations_config &&
                  (this.m_rgProfileCustomizationsConfig =
                    t.profile_customizations_config),
                t.last_played &&
                  ((this.m_bLoadedRecentlyPlayed = !0),
                  (this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
                    t.last_played.games
                  ))),
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
                  ? (this.m_lPointsAvailable = i.a.fromString(
                      t.summary.summary.points
                    ))
                  : this.GetLoyaltyRewardsSummary(),
                t.golden_profiles &&
                  (this.m_goldenProfileConfigs = t.golden_profiles || []),
                t.can_claim_sale_reward &&
                  Y.Get().InitFreeItemReward(t.can_claim_sale_reward),
                t.is_sale_active && (this.m_bIsSaleActive = t.is_sale_active),
                t.free_item_header &&
                  (this.m_strFreeItemHeader = t.free_item_header),
                this.HydrateCustomPages();
            }),
            (e.Get = function () {
              return (
                this.s_RewardsStore || (this.s_RewardsStore = new e()),
                this.s_RewardsStore
              );
            }),
            (e.prototype.GetFreeItemHeaderSource = function () {
              return this.m_strFreeItemHeader;
            }),
            (e.prototype.GetServiceTransport = function () {
              return this.m_transport;
            }),
            (e.prototype.GetConfig = function () {
              return this.m_config;
            }),
            (e.prototype.GetCurrentSeasonalAppID = function () {
              return 1846860;
            }),
            (e.prototype.GetLoyaltyRewardsSummary = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((e = f.b.Init(_.g)).SetBodyFields({
                            steamid: m.k.steamid,
                          }),
                          [4, _.o.GetSummary(this.m_transport, e)])
                        : [2];
                    case 1:
                      return (
                        1 == (t = n.sent()).GetEResult()
                          ? (this.m_lPointsAvailable = i.a.fromString(
                              t.Body().summary().points()
                            ))
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetSummary: EResult=" +
                                t.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetCommunityAwardPointsTransferred = function () {
              return (
                this.m_bLoadedAwardCost || this.LoadAwardCost(),
                this.m_unAwardPointsTransferred
              );
            }),
            (e.prototype.LoadAwardCost = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  n = this;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (this.m_bLoadedAwardCost = !0),
                        (e = f.b.Init(_.e)),
                        [4, _.o.GetReactionConfig(this.m_transport, e)]
                      );
                    case 1:
                      return (
                        1 == (t = a.sent()).GetEResult()
                          ? ((this.m_unAwardPointsTransferred = 0),
                            t
                              .Body()
                              .reactions()
                              .forEach(function (e) {
                                0 == n.m_unAwardPointsTransferred
                                  ? (n.m_unAwardPointsTransferred = e.points_transferred())
                                  : (n.m_unAwardPointsTransferred = Math.min(
                                      n.m_unAwardPointsTransferred,
                                      e.points_transferred()
                                    ));
                              }))
                          : (console.error(
                              "Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=" +
                                t.GetEResult()
                            ),
                            (this.m_bLoadedAwardCost = !1)),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ShowLoginDialog = function (e) {
              var t = window.location.href;
              if (void 0 !== e) {
                var n = t.indexOf("/reward/");
                -1 !== n
                  ? (t = t.slice(0, n))
                  : t.endsWith("/") && (t = t.slice(0, t.length - 1)),
                  (t += "/reward/" + e);
              }
              Object(y.b)(t);
            }),
            (e.prototype.BHasAutumnSaleStarted = function () {
              var e = Date.now() / 1e3;
              return "dev" == m.d.WEB_UNIVERSE || e > 1606327200;
            }),
            (e.prototype.BHasAutumnSaleEnded = function () {
              return Date.now() / 1e3 > 1606845600;
            }),
            (e.prototype.BIsSaleActive = function () {
              return this.m_bIsSaleActive;
            }),
            (e.prototype.BIsLoggedIn = function () {
              return m.k.logged_in;
            }),
            (e.prototype.GetPointsAvailable = function () {
              return this.m_lPointsAvailable;
            }),
            (e.prototype.GetIsUsingAppIDFilters = function () {
              return 0 != this.m_nAppIDFiltersInUseCount;
            }),
            (e.prototype.SetIsUsingAppIDFilters = function (e) {
              this.m_nAppIDFiltersInUseCount += e ? 1 : -1;
            }),
            (e.prototype.GetAppIDFilters = function () {
              return this.m_mapAppIDFilters;
            }),
            (e.prototype.AddAppIDFilter = function (e) {
              this.m_mapAppIDFilters.set(e, !0);
            }),
            (e.prototype.RemoveAppIDFilter = function (e) {
              this.m_mapAppIDFilters.delete(e);
            }),
            (e.prototype.GetCurrentAppFilterText = function () {
              return this.m_strAppFilterText;
            }),
            (e.prototype.SetCurrentAppFilterText = function (e) {
              this.m_strAppFilterText = e;
            }),
            (e.prototype.getLoyaltyRewardDefMap = function () {
              return this.m_mapLoyaltyRewardDefs;
            }),
            (e.prototype.GetRewardDefinitions = function () {
              for (var e = this, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var a = t.filter(function (t) {
                return (
                  !e.m_mapLoyaltyRewardDefs.has(t) &&
                  !e.m_inflightRewardItemRequestsByID[t]
                );
              });
              if (a.length > 0) {
                a.forEach(function (t) {
                  return (e.m_inflightRewardItemRequestsByID[t] = !0);
                });
                for (var r = [], i = 0; i < Math.ceil(a.length / 100); i++) {
                  var s = a.slice(100 * i, 100 * i + 100);
                  r.push(this.LoadRewardDefinitions.apply(this, s));
                }
                Promise.all(r).then(
                  Object(o.k)(function (t) {
                    t.forEach(function (t) {
                      t.forEach(function (t) {
                        delete e.m_inflightRewardItemRequestsByID[t.defid],
                          e.m_mapLoyaltyRewardDefs.set(t.defid, t);
                      });
                    });
                  })
                );
              }
              return t
                .map(function (t) {
                  return e.m_mapLoyaltyRewardDefs.get(t);
                })
                .filter(Boolean);
            }),
            (e.prototype.LoadRewardDefinitions = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = new _.h()).set_language(m.d.LANGUAGE),
                        t.set_include_direct_purchase_disabled(!0),
                        e.forEach(function (e) {
                          return t.add_definitionids(e);
                        }),
                        [4, this.m_batchedRewardItemLoader.Load(t)]
                      );
                    case 1:
                      return 1 == (n = a.sent()).eresult
                        ? (n.response.count !== n.response.total_count &&
                            console.error(
                              "LoadRewardDefinitions did not receive all expected definitions (likely to due server-side limiting). The calling code should be paging/batching the request into multiple."
                            ),
                          [2, n.response.definitions])
                        : (console.error(
                            "Error loading reward definitions by ID: EResult=" +
                              n.eresult
                          ),
                          [2, []]);
                  }
                });
              });
            }),
            (e.prototype.QueryRewardDefinitions = function (e, t, n) {
              var r,
                i = null !== (r = e.rewardtype) && void 0 !== r ? r : [1],
                o = S.a.Get().GetExcludedContentDescriptor(),
                s = this.QueryLoyaltyRewardDefinitions(
                  Object(a.a)(Object(a.a)({}, e), {
                    excludedContentDescriptors: o,
                  }),
                  t,
                  n,
                  i
                );
              if (o.length) {
                var l = Object(a.a)(Object(a.a)({}, e), {
                    excludedContentDescriptors: [],
                    maxToReturn: 1,
                  }),
                  c = this.QueryLoyaltyRewardDefinitions(l, 0, 1, i);
                void 0 !== c.cTotalMatching &&
                  (s.cTotalMatchingUnfiltered = c.cTotalMatching);
              } else s.cTotalMatchingUnfiltered = s.cTotalMatching;
              return s;
            }),
            (e.prototype.EResultToErrorMessage = function (e) {
              switch (e) {
                case 15:
                  return Object(s.f)("#Redeem_Error_AccessDenied");
                case 24:
                  return Object(s.f)("#Redeem_Error_InsufficientPrivileges");
                case 107:
                  return Object(s.f)("#Redeem_Error_InsufficientFunds");
                case 29:
                  return Object(s.f)("#Redeem_Error_DuplicateRequest");
                case 26:
                  return Object(s.f)("#Redeem_Error_Revoked");
              }
              return "";
            }),
            (e.prototype.QueryLoyaltyRewardDefinitions = function (e, t, n, a) {
              var r = this,
                i = { rewards: [], cTotalMatching: 0, cMaxToReturn: 0 };
              if (
                (e.appid && !e.appid.length) ||
                (e.itemclass && !e.itemclass.length)
              )
                return i;
              var s = {
                  appid: e.appid || [],
                  itemclass: e.itemclass || [],
                  grouping: e.grouping,
                  maxToReturn: e.maxToReturn,
                  queryFilter: e.queryFilter || [],
                  categoryTag: e.categoryTag || [],
                  excludedContentDescriptors:
                    e.excludedContentDescriptors || [],
                  excludedAppIDs: e.excludedAppIDs || [],
                },
                l = k(s);
              s.maxToReturn &&
                t + n > s.maxToReturn &&
                (n = Math.max(0, s.maxToReturn - t));
              var c = n,
                m = void 0;
              if (this.m_mapAppRewards.has(l)) {
                var d = this.m_mapAppRewards.get(l);
                (c =
                  t > d.rgRewardIds.length - 1
                    ? n + t - d.rgRewardIds.length
                    : Math.max(n - (d.rgRewardIds.length - t), 0)),
                  d.bFullyLoaded && (c = 0),
                  (m = d.strCursor);
              }
              if (
                (this.m_mapAppRewards.has(l) ||
                  this.m_mapAppRewards.set(l, { rgRewardIds: [] }),
                c && !this.m_inflightRewardItemRequests[l])
              ) {
                this.m_inflightRewardItemRequests[l] = !0;
                var u = [];
                this.LoadLoyaltyRewardDefinitions(s, c, m, a).then(function (
                  e
                ) {
                  Object(o.G)(function () {
                    var t = e.definitions,
                      n = e.next_cursor,
                      a = e.total_count,
                      i = t.filter(function (e) {
                        return !(
                          (function (e) {
                            if (5 === e.type || 6 === e.type)
                              return e.bundle_defids &&
                                0 != e.bundle_defids.length
                                ? !e.bundle_discount &&
                                    (console.error(
                                      "Bundle has no discount for def " +
                                        e.defid
                                    ),
                                    !0)
                                : (console.error(
                                    "Bundle contains no items for def " +
                                      e.defid
                                  ),
                                  !0);
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
                          })(e) && 4 !== e.type
                        );
                      }),
                      o = r.m_mapAppRewards.get(l);
                    delete r.m_inflightRewardItemRequests[l],
                      (o.strCursor = n),
                      (o.cTotal = a),
                      i.forEach(function (e) {
                        var t = e.defid;
                        o.rgRewardIds.push(t);
                      }),
                      (o.bFullyLoaded =
                        0 === t.length || o.rgRewardIds.length === o.cTotal),
                      i.forEach(function (e) {
                        r.m_mapLoyaltyRewardDefs.set(e.defid, e),
                          u.push(e.appid);
                      }),
                      E.a.EnsureAppInfoForAppIDs(u);
                  });
                });
              }
              var p = this.m_mapAppRewards.get(l);
              return (
                (i.rewards = p.rgRewardIds.slice(t, t + n).map(function (e) {
                  return r.m_mapLoyaltyRewardDefs.get(e);
                })),
                (i.cTotalMatching = p.cTotal || 0),
                (i.cMaxToReturn = s.maxToReturn || 0),
                (i.bLoadingMore = this.m_inflightRewardItemRequests[l]),
                i
              );
            }),
            (e.prototype.LoadLoyaltyRewardDefinitions = function (e, t, n, r) {
              return Object(a.b)(this, void 0, void 0, function () {
                var i, o, s, l, c, d, u, p, f, h;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (i = e.appid),
                        (o = e.grouping),
                        (s = e.itemclass),
                        (l = e.queryFilter),
                        (c = e.categoryTag),
                        (d = e.excludedContentDescriptors),
                        (u = e.excludedAppIDs),
                        (p = T(o)),
                        (f = new _.h()),
                        i.forEach(function (e) {
                          return f.add_appids(e);
                        }),
                        f.set_language(m.d.LANGUAGE),
                        f.set_count(t),
                        f.set_sort(p.sort),
                        f.set_sort_descending(p.sort_descending),
                        f.set_community_item_classes(s),
                        f.set_filters(l),
                        f.set_filter_match_any_category_tags(c),
                        f.set_excluded_content_descriptors(d),
                        f.set_excluded_appids(u),
                        r && f.set_reward_types(r),
                        n && f.set_cursor(n),
                        [4, this.m_batchedRewardItemLoader.Load(f)]
                      );
                    case 1:
                      return 1 == (h = a.sent()).eresult
                        ? [2, h.response]
                        : (console.error(
                            "Error when loading reward definitions: EResult=" +
                              h.eresult
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
            (e.prototype.GetCostToLevelSeasonalBadge = function (e) {
              var t = this.GetSeasonalBadgeDefinition();
              if (!t) return 0;
              var n = this.GetUserSeasonalBadgeLevel();
              return Math.max(parseInt(t.point_cost) * (e - n), 0);
            }),
            (e.prototype.GetUserSeasonalBadgeLevel = function () {
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
              var a = parseInt(n.value);
              return isNaN(a)
                ? (console.error("Seasonal badge level attribute is NaN"), 0)
                : a;
            }),
            (e.prototype.GetGoldenProfileConfigForApp = function (e) {
              return (
                this.m_goldenProfileConfigs.find(function (t) {
                  return t.appid === e;
                }) || null
              );
            }),
            (e.prototype.GetSeasonalBadgeDefinition = function () {
              var e = this;
              return (
                void 0 === this.m_seasonalBadgeDefinition &&
                  this.LoadSeasonalBadgeDefinition().then(function (t) {
                    return (e.m_seasonalBadgeDefinition = t);
                  }),
                this.m_seasonalBadgeDefinition
              );
            }),
            (e.prototype.LoadSeasonalBadgeDefinition = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = new _.h()).set_appids([
                          this.GetCurrentSeasonalAppID(),
                        ]),
                        e.set_community_item_classes([1]),
                        e.set_count(1),
                        e.set_language(m.d.LANGUAGE),
                        [4, this.m_batchedRewardItemLoader.Load(e)]
                      );
                    case 1:
                      return 1 == (t = n.sent()).eresult
                        ? [2, t.response.definitions[0] || null]
                        : (console.error(
                            "Error when loading badge definition: EResult=" +
                              t.eresult
                          ),
                          [2, null]);
                  }
                });
              });
            }),
            (e.prototype.GetGoldenProfileDefinition = function () {
              var e = this;
              return (
                void 0 === this.m_goldenProfileDefinition &&
                  this.LoadGoldenProfileDefinition().then(function (t) {
                    return (e.m_goldenProfileDefinition = t);
                  }),
                this.m_goldenProfileDefinition
              );
            }),
            (e.prototype.LoadGoldenProfileDefinition = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = new _.h()).set_appids([
                          this.GetCurrentSeasonalAppID(),
                        ]),
                        e.set_community_item_classes([8]),
                        e.set_count(1),
                        e.set_language(m.d.LANGUAGE),
                        [4, this.m_batchedRewardItemLoader.Load(e)]
                      );
                    case 1:
                      return 1 == (t = n.sent()).eresult
                        ? 0 != t.response.count
                          ? [2, t.response.definitions[0] || null]
                          : (console.error(
                              "Error when loading golden profile definition: Failed to find definition for appid " +
                                this.GetCurrentSeasonalAppID()
                            ),
                            [2, null])
                        : (console.error(
                            "Error when loading golden profile definition: EResult=" +
                              t.eresult
                          ),
                          [2, null]);
                  }
                });
              });
            }),
            (e.prototype.GetCouponDefinition = function (e) {
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
            (e.prototype.LoadCouponDefinitions = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = new _.h()).set_appids([
                          this.GetCurrentSeasonalAppID(),
                        ]),
                        e.set_reward_types([4]),
                        e.set_count(10),
                        e.set_language(m.d.LANGUAGE),
                        [4, this.m_batchedRewardItemLoader.Load(e)]
                      );
                    case 1:
                      return 1 == (t = n.sent()).eresult
                        ? [2, t.response.definitions]
                        : (console.error(
                            "Error when loading coupon definitions: EResult=" +
                              t.eresult
                          ),
                          [2, null]);
                  }
                });
              });
            }),
            (e.prototype.GetBundleOfferForUser = function (e) {
              var t = this,
                n = new P();
              if (
                ((n.original_point_cost = 0),
                (n.point_cost = 0),
                (n.discount = e.bundle_discount),
                (n.items = this.GetRewardDefinitions.apply(
                  this,
                  e.bundle_defids
                )),
                8 == e.community_item_class)
              ) {
                var a = this.GetRewardDefinitions(e.defid);
                n.items = n.items.concat(a);
              }
              return (
                n.items.sort(function (e, t) {
                  return 8 == e.community_item_class
                    ? -1
                    : 8 == t.community_item_class
                    ? 1
                    : t.community_item_class - e.community_item_class;
                }),
                n.items.forEach(function (e) {
                  var a = parseInt(e.point_cost);
                  n.original_point_cost += a;
                  var r = t.BRewardOwnedByUser(e);
                  n.mapItemOwnership.set(e.defid, r), r || (n.point_cost += a);
                }),
                (n.point_cost = Math.ceil(
                  n.point_cost * (100 - n.discount) * 0.01
                )),
                n
              );
            }),
            (e.prototype.GetOwnedItemCacheKey = function (e) {
              return "" + e;
            }),
            (e.prototype.BRewardOwnedByUser = function (e) {
              var t = this.m_mapOwnedCommunityItems.get(
                this.GetOwnedItemCacheKey(
                  this.m_bLoadedFullInventory ? void 0 : e.appid
                )
              );
              if ((t || this.GetCommunityItemInventory(e.appid), !t)) return !1;
              if (5 == e.type || 6 == e.type) {
                for (var n = 0, a = e.bundle_defids; n < a.length; n++) {
                  var r = a[n],
                    i = this.m_mapLoyaltyRewardDefs.get(r);
                  if (i && !this.BRewardOwnedByUser(i)) return !1;
                }
                return !0;
              }
              return t.has(e.community_item_type);
            }),
            (e.prototype.BRewardEquippedByUser = function (e) {
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
            (e.prototype.GetOwnedCommunityItem = function (e) {
              var t = this.m_mapOwnedCommunityItems.get(
                this.GetOwnedItemCacheKey(
                  this.m_bLoadedFullInventory ? void 0 : e.appid
                )
              );
              return (
                t || this.GetCommunityItemInventory(e.appid),
                Object(j.a)(
                  t.has(e.community_item_type),
                  "Missing owned item " + e.community_item_type
                ),
                t.get(e.community_item_type)
              );
            }),
            (e.prototype.GetOwnedCommunityItemID = function (e) {
              var t = this.GetOwnedCommunityItem(e);
              return t ? t.communityitemid : null;
            }),
            (e.prototype.EnsureCommunityItemInventoryLoaded = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                return Object(a.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_mapOwnedCommunityItems.has(
                        this.GetOwnedItemCacheKey(e)
                      )
                        ? [3, 2]
                        : [4, this.GetCommunityItemInventory(e)];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.GetCommunityItemInventory = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, r, i;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = this.GetOwnedItemCacheKey(e)),
                          this.m_inflightInventoryRequests[t]
                            ? [2, this.m_inflightInventoryRequests[t]]
                            : ((n = this.m_batchedCommunityInventoryLoader.Load(
                                e
                              )),
                              (this.m_inflightInventoryRequests[t] = n),
                              [4, n]))
                        : [2];
                    case 1:
                      return (
                        (r = a.sent()),
                        (i = new Map()),
                        r.forEach(function (e) {
                          i.set(e.item_type, e);
                        }),
                        this.m_mapOwnedCommunityItems.set(t, i),
                        delete this.m_inflightInventoryRequests[t],
                        [2, n]
                      );
                  }
                });
              });
            }),
            Object.defineProperty(e.prototype, "active_bonuses", {
              get: function () {
                return (
                  this.m_bLoadedActiveBonuses || this.LoadActiveBonuses(),
                  this.m_rgActiveBonuses
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.LoadActiveBonuses = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (this.m_bLoadedActiveBonuses = !0),
                        (e = f.b.Init(_.c)),
                        [4, _.o.GetActivePurchaseBonuses(this.m_transport, e)]
                      );
                    case 1:
                      return (
                        1 == (t = a.sent()).GetEResult()
                          ? (n = this.m_rgActiveBonuses).push.apply(
                              n,
                              t
                                .Body()
                                .bonuses()
                                .map(function (e) {
                                  return e.toObject();
                                })
                            )
                          : console.error(
                              "Error when calling LoyaltyRewardsService.GetActivePurchaseBonuses: EResult=" +
                                t.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.SetProfileBackground = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = { eResult: 2, strMessage: "" }),
                        this.BIsLoggedIn()
                          ? ((n = f.b.Init(g.k))
                              .Body()
                              .set_communityitemid(
                                this.GetOwnedCommunityItemID(e)
                              ),
                            [4, g.m.SetProfileBackground(this.m_transport, n)])
                          : [
                              2,
                              (t = {
                                eResult: 21,
                                strMessage: "Not logged on",
                              }),
                            ]
                      );
                    case 1:
                      return (
                        (r = a.sent()),
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
            (e.prototype.SetAvatarFrame = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = { eResult: 2, strMessage: "" }),
                        this.BIsLoggedIn()
                          ? ((n = f.b.Init(g.i))
                              .Body()
                              .set_communityitemid(
                                this.GetOwnedCommunityItemID(e)
                              ),
                            [4, g.m.SetAvatarFrame(this.m_transport, n)])
                          : [
                              2,
                              (t = {
                                eResult: 21,
                                strMessage: "Not logged on",
                              }),
                            ]
                      );
                    case 1:
                      return (
                        (r = a.sent()),
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
            (e.prototype.SetAnimatedAvatar = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = { eResult: 2, strMessage: "" }),
                        this.BIsLoggedIn()
                          ? ((n = f.b.Init(g.h))
                              .Body()
                              .set_communityitemid(
                                this.GetOwnedCommunityItemID(e)
                              ),
                            [4, g.m.SetAnimatedAvatar(this.m_transport, n)])
                          : [
                              2,
                              (t = {
                                eResult: 21,
                                strMessage: "Not logged on",
                              }),
                            ]
                      );
                    case 1:
                      return (
                        (r = a.sent()),
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
            (e.prototype.SetMiniProfileBackground = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = { eResult: 2, strMessage: "" }),
                        this.BIsLoggedIn()
                          ? ((n = f.b.Init(g.j))
                              .Body()
                              .set_communityitemid(
                                this.GetOwnedCommunityItemID(e)
                              ),
                            [
                              4,
                              g.m.SetMiniProfileBackground(this.m_transport, n),
                            ])
                          : [
                              2,
                              (t = {
                                eResult: 21,
                                strMessage: "Not logged on",
                              }),
                            ]
                      );
                    case 1:
                      return (
                        (r = a.sent()),
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
            (e.prototype.ActivateProfileModifier = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = { eResult: 2, strMessage: "" }),
                        this.BIsLoggedIn()
                          ? ((n = f.b.Init(h.a))
                              .Body()
                              .set_communityitemid(
                                this.GetOwnedCommunityItemID(e)
                              ),
                            n.Body().set_appid(e.appid),
                            n.Body().set_activate(!0),
                            [
                              4,
                              h.c.ActivateProfileModifierItem(
                                this.m_transport,
                                n
                              ),
                            ])
                          : [
                              2,
                              (t = {
                                eResult: 21,
                                strMessage: "Not logged on",
                              }),
                            ]
                      );
                    case 1:
                      return (
                        (r = a.sent()),
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
            (e.prototype.RedeemPointsForItem = function (e, t) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n, r, i;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (n = { eResult: 2, strMessage: "" }),
                        this.BIsLoggedIn()
                          ? ((r = f.b.Init(_.l)).Body().set_defid(e),
                            [4, _.o.RedeemPoints(this.m_transport, r)])
                          : [
                              2,
                              (n = {
                                eResult: 21,
                                strMessage: Object(s.f)("#Redeem_SignIn"),
                              }),
                            ]
                      );
                    case 1:
                      return (
                        (i = a.sent()),
                        (n.eResult = i.GetEResult()),
                        1 == i.GetEResult()
                          ? (this.GetCommunityItemInventory(t),
                            this.GetLoyaltyRewardsSummary())
                          : ((n.strMessage = this.EResultToErrorMessage(
                              i.GetEResult()
                            )),
                            console.error(
                              "Error when calling LoyaltyRewardsService.RedeemPoints: EResult=" +
                                i.GetEResult()
                            )),
                        [2, n]
                      );
                  }
                });
              });
            }),
            (e.prototype.RedeemPointsForBadge = function (e, t) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n, r, i;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (n = { eResult: 2, strMessage: "" }),
                        this.BIsLoggedIn()
                          ? ((r = f.b.Init(_.i)).Body().set_defid(e),
                            r.Body().set_num_levels(t),
                            [
                              4,
                              _.o.RedeemPointsForBadgeLevel(
                                this.m_transport,
                                r
                              ),
                            ])
                          : [
                              2,
                              (n = {
                                eResult: 21,
                                strMessage: Object(s.f)("#Redeem_SignIn"),
                              }),
                            ]
                      );
                    case 1:
                      return (
                        (i = a.sent()),
                        (n.eResult = i.GetEResult()),
                        1 == i.GetEResult()
                          ? (this.GetCommunityItemInventory(
                              this.GetCurrentSeasonalAppID()
                            ),
                            this.GetLoyaltyRewardsSummary())
                          : ((n.strMessage = this.EResultToErrorMessage(
                              i.GetEResult()
                            )),
                            console.error(
                              "Error when calling LoyaltyRewardsService.RedeemPointsForBadgeLevel: EResult=" +
                                i.GetEResult()
                            )),
                        [2, n]
                      );
                  }
                });
              });
            }),
            (e.prototype.RedeemPointsForProfileShowcase = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, r;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = { eResult: 2, strMessage: "" }),
                        this.BIsLoggedIn()
                          ? ((n = f.b.Init(_.k))
                              .Body()
                              .set_customization_type(e),
                            [
                              4,
                              _.o.RedeemPointsForProfileCustomization(
                                this.m_transport,
                                n
                              ),
                            ])
                          : [
                              2,
                              (t = {
                                eResult: 21,
                                strMessage: "Not logged on",
                              }),
                            ]
                      );
                    case 1:
                      return (
                        (r = a.sent()),
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
            (e.prototype.RedeemPointsForProfileShowcaseUpgrade = function (
              e,
              t
            ) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n, r, i;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (n = { eResult: 2, strMessage: "" }),
                        this.BIsLoggedIn()
                          ? ((r = f.b.Init(_.j)).SetBodyFields({
                              customization_type: e,
                              new_level: t,
                            }),
                            [
                              4,
                              _.o.RedeemPointsForProfileCustomizationUpgrade(
                                this.m_transport,
                                r
                              ),
                            ])
                          : [
                              2,
                              (n = {
                                eResult: 21,
                                strMessage: Object(s.f)("#Redeem_SignIn"),
                              }),
                            ]
                      );
                    case 1:
                      return (
                        (i = a.sent()),
                        (n.eResult = i.GetEResult()),
                        1 == i.GetEResult()
                          ? this.RefreshPurchasedProfileCustomizations()
                          : ((n.strMessage = this.EResultToErrorMessage(
                              i.GetEResult()
                            )),
                            console.error(
                              "Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomizationUpgrade: EResult=" +
                                i.GetEResult()
                            )),
                        [2, n]
                      );
                  }
                });
              });
            }),
            (e.prototype.RedeemPointsForCoupon = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, r, i;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (
                        ((t = { eResult: 2, strMessage: "" }),
                        !this.BIsLoggedIn())
                      )
                        return [
                          2,
                          (t = {
                            eResult: 21,
                            strMessage: Object(s.f)("#Redeem_SignIn"),
                          }),
                        ];
                      (n = new FormData()).append("sessionid", m.d.SESSIONID),
                        n.append("itemid", e.toString()),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        [
                          4,
                          c.a
                            .post(
                              m.d.STORE_BASE_URL +
                                "cart/ajaxredeemtokensforcartdiscount",
                              n
                            )
                            .then(function (e) {
                              var n = e.data;
                              (t.eResult = n.eresult),
                                1 == n.eresult && n.redirect
                                  ? (window.location.href = n.redirect)
                                  : console.error(
                                      "Error when calling ajaxredeemtokensforcartdiscount: " +
                                        n
                                    );
                            }),
                        ]
                      );
                    case 2:
                      return a.sent(), [3, 4];
                    case 3:
                      return (
                        (r = a.sent()),
                        (i = Object(u.a)(r)),
                        console.error(
                          "Error when calling ajaxredeemtokensforcartdiscount: " +
                            i.strErrorMsg,
                          i
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, t];
                  }
                });
              });
            }),
            (e.prototype.GetCouponPromosForUser = function () {
              var e = this;
              return (
                this.m_bLoadedCouponPromosForUser ||
                  ((this.m_bLoadedCouponPromosForUser = !0),
                  this.LoadCouponPromosForUser().then(function (t) {
                    return t
                      .sort(function (e, t) {
                        return e.max_use_count < t.max_use_count
                          ? -1
                          : e.max_use_count == t.max_use_count
                          ? 0
                          : 1;
                      })
                      .forEach(function (t) {
                        return e.m_mapCouponPromos.set(t.loyalty_reward_id, t);
                      });
                  })),
                this.m_mapCouponPromos
              );
            }),
            (e.prototype.LoadCouponPromosForUser = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = f.b.Init(b.a))
                          .Body()
                          .set_country_code(m.k.country_code),
                        [
                          4,
                          b.b.GetAvailableValveDiscountPromotions(
                            this.m_transport,
                            e
                          ),
                        ]
                      );
                    case 1:
                      return 1 == (t = n.sent()).GetEResult()
                        ? [
                            2,
                            t
                              .Body()
                              .promotions()
                              .map(function (e) {
                                return e.toObject();
                              }),
                          ]
                        : (console.error(
                            "Error when calling UserAccountService.GetAvailableValveDiscountPromotions: EResult=" +
                              t.GetEResult()
                          ),
                          [2, []]);
                  }
                });
              });
            }),
            (e.prototype.BCanRedeemPointsForItem = function (e) {
              switch (e.type) {
                case 1:
                  switch (e.community_item_class) {
                    case 4:
                    case 3:
                      return (
                        !(
                          !e.community_item_data.animated ||
                          3 != e.community_item_class
                        ) ||
                        !!this.GetSortedGamesWithRewards().includes(e.appid) ||
                        !(
                          !(t = this.m_mapEligibleApps.get(e.appid)) ||
                          !t.event_app
                        )
                      );
                  }
                  break;
                case 5:
                case 6:
                  var t;
                  return (
                    !!this.GetSortedGamesWithRewards().includes(e.appid) ||
                    !(
                      !(t = this.m_mapEligibleApps.get(e.appid)) || !t.event_app
                    )
                  );
              }
              return !0;
            }),
            (e.prototype.BCanRedeemPointsForProfileShowcaseUpgrade = function (
              e,
              t
            ) {
              return (
                t < this.m_rgProfileCustomizationsConfig.max_upgradable_level
              );
            }),
            (e.prototype.BCanRedeemPointsForProfileShowcaseSlot = function (
              e,
              t
            ) {
              return (
                t < this.m_rgProfileCustomizationsConfig.max_slots_per_type
              );
            }),
            (e.prototype.GetSortedGamesWithRewards = function () {
              var e = this;
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
                  ]).then(function (t) {
                    var n = t[0],
                      a = t[1];
                    (e.m_rgEligibleApps = n),
                      (e.m_mapEligibleApps = new Map(
                        e.m_rgEligibleApps.map(function (e) {
                          return [e.appid, e];
                        })
                      ));
                    var r = a.filter(function (t) {
                        return e.m_mapEligibleApps.has(t);
                      }),
                      i = n
                        .filter(function (e) {
                          return 0 == r.includes(e.appid);
                        })
                        .map(function (e) {
                          return e.appid;
                        });
                    e.m_rgSortedAppsWithRewards = r.concat(i);
                  })),
                this.m_rgSortedAppsWithRewards
              );
            }),
            (e.prototype.GetMaxProfileShowcaseSlots = function () {
              return this.m_rgProfileCustomizationsConfig.max_slots_per_type;
            }),
            (e.prototype.GetPurchasableProfileShowcaseSlotCost = function () {
              return this.m_rgProfileCustomizationsConfig.points_cost;
            }),
            (e.prototype.GetPurchasableProfileShowcaseSlots = function () {
              return this.m_rgProfileCustomizationsConfig
                .purchasable_customization_types;
            }),
            (e.prototype.GetUpgradableProfileShowcaseCost = function () {
              return this.m_rgProfileCustomizationsConfig.upgrade_points_cost;
            }),
            (e.prototype.GetUpgradableProfileShowcases = function () {
              return this.m_rgProfileCustomizationsConfig
                .upgradable_customization_types;
            }),
            (e.prototype.GetMaxProfileShowcaseUpgradeLevel = function () {
              return this.m_rgProfileCustomizationsConfig.max_upgradable_level;
            }),
            (e.prototype.LoadRecentlyPlayedApps = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (this.m_bLoadedRecentlyPlayed = !0),
                        this.BIsLoggedIn()
                          ? ((e = f.b.Init(g.c)),
                            (t =
                              Math.floor(Date.now() / 1e3) - 14 * O.e.PerDay),
                            e.Body().set_min_last_played(t),
                            [
                              4,
                              g.m.ClientGetLastPlayedTimes(this.m_transport, e),
                            ])
                          : [2, []]
                      );
                    case 1:
                      return 1 == (n = a.sent()).GetEResult()
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
            (e.prototype.ProcessRecentlyPlayedApps = function (e) {
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
            (e.prototype.LoadEligibleApps = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (this.m_bLoadedEligibleApps = !0),
                        this.BIsLoggedIn()
                          ? ((e = f.b.Init(_.d)),
                            [4, _.o.GetEligibleApps(this.m_transport, e)])
                          : [2, []]
                      );
                    case 1:
                      return 1 == (t = n.sent()).GetEResult()
                        ? [2, t.Body().toObject().apps]
                        : (console.error(
                            "Error when calling GetEligibleApps: EResult=" +
                              t.GetEResult()
                          ),
                          [2, []]);
                  }
                });
              });
            }),
            (e.prototype.RefreshEquippedProfileItems = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((e = f.b.Init(g.d)).SetBodyFields({
                            steamid: m.k.steamid,
                          }),
                          [4, g.m.GetProfileItemsEquipped(this.m_transport, e)])
                        : [2];
                    case 1:
                      return (
                        1 == (t = n.sent()).GetEResult()
                          ? (this.m_equippedItems = t.Body().toObject())
                          : console.error(
                              "Error when calling GetProfileItemsEquipped: EResult=" +
                                t.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.RefreshPurchasedProfileCustomizations = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((e = f.b.Init(g.e)).SetBodyFields({
                            steamid: m.k.steamid,
                          }),
                          [
                            4,
                            g.m.GetPurchasedAndUpgradedProfileCustomizations(
                              this.m_transport,
                              e
                            ),
                          ])
                        : [2];
                    case 1:
                      return (
                        1 == (t = a.sent()).GetEResult()
                          ? ((n = t.Body().toObject()),
                            (this.m_rgPurchasedCustomizations =
                              n.purchased_customizations),
                            (this.m_rgUpgradedCustomizations =
                              n.upgraded_customizations))
                          : console.error(
                              "Error when calling GetPurchasedAndUpgradedProfileCustomizations: EResult=" +
                                t.GetEResult()
                            ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetPersonaState = function () {
              return this.m_persona;
            }),
            (e.prototype.RetrievePersonaState = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e,
                  t = this;
                return Object(a.e)(this, function (n) {
                  return (
                    (e = {
                      access_token: this.m_config.webapi_token,
                      steamids: m.k.steamid,
                    }),
                    [
                      2,
                      c.a
                        .get(
                          m.d.WEBAPI_BASE_URL +
                            "ISteamUserOAuth/GetUserSummaries/v2/",
                          { params: e }
                        )
                        .then(function (e) {
                          if (
                            e &&
                            e.data &&
                            e.data.players &&
                            0 != e.data.players.length
                          ) {
                            var n = e.data.players[0];
                            (t.m_persona.m_strPlayerName = n.personaname),
                              (t.m_persona.m_ePersonaState = n.personastate),
                              (t.m_persona.m_strAvatarHash = n.avatarhash);
                          }
                        }),
                    ]
                  );
                });
              });
            }),
            (e.prototype.GetEquippedItems = function () {
              return this.m_equippedItems;
            }),
            (e.prototype.GetPurchasedProfileCustomizations = function () {
              return this.m_rgPurchasedCustomizations;
            }),
            (e.prototype.GetUpgradedProfileCustomizations = function () {
              return this.m_rgUpgradedCustomizations;
            }),
            (e.prototype.GetRewardItem = function (e) {
              var t = this;
              return (
                this.m_mapLoyaltyRewardDefs.has(e) ||
                  this.m_inflightRewardItemRequests[e] ||
                  ((this.m_inflightRewardItemRequests[e] = !0),
                  this.LoadRewardItem(e).then(function (n) {
                    n.defid === e && t.m_mapLoyaltyRewardDefs.set(e, n),
                      delete t.m_inflightRewardItemRequests[e];
                  })),
                this.m_mapLoyaltyRewardDefs.get(e)
              );
            }),
            (e.prototype.GetAppHeroImage = function (e) {
              var t = this.m_mapEligibleApps.get(e);
              return t && t.hero_carousel_image
                ? {
                    img_url:
                      m.d.MEDIA_CDN_COMMUNITY_URL +
                      "images/items/" +
                      e +
                      "/" +
                      t.hero_carousel_image,
                    is_custom: !0,
                  }
                : {
                    img_url: this.m_HeroImageFallbackLoader.Get(e) || w.a,
                    is_custom: !1,
                  };
            }),
            (e.prototype.LoadRewardItem = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = new _.h()).set_language(m.d.LANGUAGE),
                        t.set_count(1),
                        t.set_definitionids([e]),
                        [4, this.m_batchedRewardItemLoader.Load(t)]
                      );
                    case 1:
                      return 1 == (n = a.sent()).eresult
                        ? [
                            2,
                            n.response.count > 0
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
            (e.prototype.GetPageDescriptor = function (e) {
              return (
                this.m_mapPages.has(B(e)) ||
                  this.m_mapPages.set(B(e), this.BuildPage(e)),
                this.m_mapPages.get(B(e))
              );
            }),
            (e.prototype.BuildPage = function (e) {
              switch (e.type) {
                case "app":
                  return new F(
                    e.appid,
                    e.appid === this.GetCurrentSeasonalAppID()
                      ? Object(s.f)("#HeroCluster_Premier_Collection_Subtitle")
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
            (e.prototype.GetClusterDescriptor = function (e) {
              return this.m_mapClusters.get(e);
            }),
            (e.prototype.HydrateCustomPages = function () {
              var t = this,
                n = function (e, n, r) {
                  var i = new G(
                    e,
                    n,
                    Object(a.a)({ grouping: 2, maxToReturn: 0 }, r)
                  );
                  return (
                    t.m_mapClusters.has(i.id) || t.m_mapClusters.set(i.id, i),
                    i.id
                  );
                },
                r = function (n, a, r, i) {
                  var o = (function (e, n, a) {
                    var r = new z(e, n, V({ grouping: 2 }, a));
                    return (
                      t.m_mapClusters.has(r.id) || t.m_mapClusters.set(r.id, r),
                      r
                    );
                  })(n, r || "", i);
                  return {
                    type: 2,
                    cluster: o.id,
                    get title() {
                      return Object(s.f)("#HeroCluster_AppTitle", o.title);
                    },
                    get strImage() {
                      return a || e.Get().GetAppHeroImage(n).img_url;
                    },
                    get bFullBleedImage() {
                      return !!a;
                    },
                    linkedPage: { type: "app", appid: n },
                    theme: {
                      colors: {
                        bodygradient:
                          "linear-gradient(147.3deg, rgba(211, 193, 144, 0) 42.88%, rgba(223, 200, 141, 0.32) 113.95%)",
                        background: "rgba(117, 98, 80, 0.25)",
                      },
                    },
                  };
                },
                i = function (e) {
                  return t.m_mapPages.set(B(e.params), e);
                },
                l = n(
                  Object(s.f)(
                    "#RewardCluster_Popular_Title",
                    Object(s.f)("#RewardCluster_Popular_RewardItems")
                  ),
                  Object(s.f)("#RewardCluster_Popular_Subtitle")
                ),
                c = n(
                  A(13, !0),
                  Object(s.f)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
                  { itemclass: [13] }
                ),
                u = n(
                  Object(s.f)("#ShopPageTitle_Avatar"),
                  Object(s.f)("#RewardCluster_AvatarItems_Subtitle"),
                  { itemclass: [15, 14] }
                ),
                p = n(
                  A(3, !0),
                  Object(s.f)("#RewardCluster_Backgrounds_Subtitle"),
                  { itemclass: [3] }
                ),
                f = n(
                  Object(s.f)(
                    "#RewardCluster_Popular_Title",
                    Object(s.f)("#ShopNav_ChatEffectsLink")
                  ),
                  Object(s.f)("#RewardCluster_ChatEffect_Subtitle"),
                  { itemclass: [12] }
                ),
                _ = n(
                  Object(s.f)(
                    "#RewardCluster_Popular_Title",
                    Object(s.f)("#ShopNav_StickersLink")
                  ),
                  Object(s.f)("#RewardCluster_Popular_Subtitle"),
                  { itemclass: [11] }
                ),
                h = n(
                  Object(s.f)(
                    "#RewardCluster_Popular_Title",
                    Object(s.f)("#ShopNav_EmoticonsLink")
                  ),
                  Object(s.f)("#RewardCluster_Popular_Subtitle"),
                  { itemclass: [4] }
                ),
                g = n(
                  Object(s.f)("#RewardCluster_All_Title", A(15, !0)),
                  Object(s.f)("#RewardCluster_AnimatedAvatar_Subtitle"),
                  { itemclass: [15] }
                ),
                b = n(
                  Object(s.f)("#RewardCluster_All_Title", A(14, !0)),
                  Object(s.f)("#RewardCluster_AvatarFrames_Subtitle"),
                  { itemclass: [14] }
                ),
                y = n(
                  Object(s.f)(
                    "#RewardCluster_All_Title",
                    Object(s.f)("#RewardItemType_Bundle_plural")
                  ),
                  Object(s.f)("#ShopPageTitle_ItemBundles_Subtitle2"),
                  { rewardtype: [5, 6] }
                ),
                I = n(
                  Object(s.f)(
                    "#RewardCluster_All_Title",
                    Object(s.f)("#RewardItemType_ProfileBundle_plural")
                  ),
                  "",
                  {
                    itemclass: [8],
                    queryFilter: [3],
                    excludedAppIDs: [e.Get().GetCurrentSeasonalAppID()],
                  }
                ),
                C = n(
                  Object(s.f)(
                    "#RewardCluster_All_Title",
                    Object(s.f)("#RewardItemType_ArtistProfile_plural")
                  ),
                  "",
                  {
                    itemclass: [8],
                    queryFilter: [3],
                    categoryTag: ["artist_profile"],
                  }
                ),
                v = n(
                  Object(s.f)("#RewardCluster_TabletopFest2021Profiles_Title"),
                  void 0,
                  {
                    itemclass: [8],
                    queryFilter: [3],
                    categoryTag: ["tabletop_fest_2021"],
                  }
                ),
                j = [
                  {
                    cluster: C,
                    type: 2,
                    strImage: w.a,
                    bFullBleedImage: !0,
                    linkedPage: { type: "custom", pageid: "artistprofiles" },
                  },
                  {
                    cluster: l,
                    type: 1,
                    linkedPage: null,
                    bHideHiddenItemCount: !0,
                  },
                  {
                    cluster: _,
                    type: 1,
                    linkedPage: { type: "custom", pageid: "stickers" },
                  },
                  { cluster: c, type: 1 },
                  { cluster: u, type: 1 },
                  {
                    cluster: p,
                    type: 1,
                    linkedPage: { type: "custom", pageid: "backgrounds" },
                  },
                  { cluster: f, type: 1 },
                  {
                    cluster: h,
                    type: 1,
                    linkedPage: { type: "custom", pageid: "emoticons" },
                  },
                ],
                E = n(
                  Object(s.f)(
                    "#RewardCluster_NewFeatured_Title",
                    Object(s.f)("#RewardCluster_Popular_RewardItems")
                  ),
                  void 0,
                  { categoryTag: ["summer_2021_sale"], grouping: 2 }
                );
              j.unshift({ cluster: E, type: 1 });
              var S,
                O = [];
              Object(d.a)(m.d.EREALM)
                ? O.push(r(1846860), r(1526200))
                : O.push(r(1846860), r(1277400), r(292030)),
                (S = {
                  type: "banner",
                  title: Object(s.f)("#FeaturedBanner_ArtistProfiles_Headline"),
                  description: Object(s.f)(
                    "#FeaturedBanner_ArtistProfiles_Subhead"
                  ),
                  link_text: Object(s.f)(
                    "#FeaturedBanner_ArtistProfiles_CallToAction"
                  ),
                  linked_page: N.b.LoyaltyArtistProfiles(),
                  iconComponent: M.f,
                });
              for (
                var P = [], x = [O, j], L = 0;
                L < Math.max(x[0].length, x[1].length);
                L++
              )
                0 == L && S && P.push(S),
                  L < x[0].length &&
                    P.push({ type: "clusterview", view: x[0][L] }),
                  L < x[1].length &&
                    P.push({ type: "clusterview", view: x[1][L] });
              i(new H(D, P)),
                i(
                  new U(
                    "stickers",
                    [{ cluster: _, type: 0 }],
                    Object(s.f)("#ShopPageTitle_Stickers")
                  )
                ),
                i(
                  new U(
                    "emoticons",
                    [{ cluster: h, type: 0 }],
                    Object(s.f)("#ShopPageTitle_Emoticons")
                  )
                ),
                i(new U("chateffects", [{ cluster: f, type: 0 }], A(12, !0)));
              var R = n(
                  Object(s.f)(
                    "#RewardCluster_AnimatedProfileBackgrounds_Title"
                  ),
                  Object(s.f)("#RewardCluster_Backgrounds_Subtitle"),
                  { itemclass: [3], queryFilter: [1] }
                ),
                k = n(
                  Object(s.f)(
                    "#RewardCluster_AnimatedMiniProfileBackgrounds_Title"
                  ),
                  Object(s.f)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
                  { itemclass: [13], queryFilter: [1] }
                ),
                T = n(
                  Object(s.f)("#RewardCluster_StillProfileBackgrounds_Title"),
                  Object(s.f)("#RewardCluster_Backgrounds_Subtitle"),
                  { itemclass: [3], queryFilter: [2] }
                ),
                F = n(
                  Object(s.f)(
                    "#RewardCluster_StillMiniProfileBackgrounds_Title"
                  ),
                  Object(s.f)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
                  { itemclass: [13], queryFilter: [2] }
                );
              i(
                new U(
                  "backgrounds",
                  [
                    { cluster: R, type: 1 },
                    { cluster: k, type: 1 },
                    { cluster: T, type: 1 },
                    { cluster: F, type: 1 },
                  ],
                  Object(s.f)("#ShopPageTitle_Backgrounds")
                )
              ),
                i(
                  new U(
                    "avatar",
                    [
                      { cluster: g, type: 1 },
                      { cluster: b, type: 1 },
                    ],
                    Object(s.f)("#ShopPageTitle_Avatar")
                  )
                ),
                i(
                  new U(
                    "itembundles",
                    [{ cluster: y, type: 0 }],
                    Object(s.f)("#ShopPageTitle_ItemBundles"),
                    Object(s.f)("#ShopPageTitle_ItemBundles_Subtitle")
                  )
                );
              var Z = [{ cluster: I, type: 0, bHomogeneous: !0 }];
              Date.now() > 16348356e5 && Z.unshift({ cluster: v, type: 1 }),
                i(
                  new U(
                    "profilebundles",
                    Z,
                    Object(s.f)("#ShopPageTitle_ProfileBundles"),
                    Object(s.f)("#ShopPageTitle_ProfileBundles_Subtitle")
                  )
                ),
                i(
                  new U(
                    "artistprofiles",
                    [{ cluster: C, type: 0, bHomogeneous: !0 }],
                    Object(s.f)("#ShopPageTitle_ArtistProfiles"),
                    Object(s.f)("#ShopPageTitle_ArtistProfiles_Subtitle")
                  )
                ),
                this.BIsLoggedIn() &&
                  Object(o.L)(function () {
                    return !!e.Get().GetSortedGamesWithRewards().length;
                  }).then(function () {
                    var n = new G(
                      Object(s.f)("#HeroCluster_YourGamesTitle"),
                      void 0,
                      {
                        get appid() {
                          return e
                            .Get()
                            .GetSortedGamesWithRewards()
                            .slice(0, 10);
                        },
                        grouping: 2,
                      }
                    );
                    t.m_mapClusters.set(n.id, n);
                    var a = {
                      type: 2,
                      linkedPage: { type: "custom", pageid: "games" },
                      cluster: n.id,
                      strImage: w.a,
                      bFullBleedImage: !0,
                    };
                    P.push({ type: "clusterview", view: a });
                    for (
                      var i = e.Get().GetSortedGamesWithRewards(),
                        o = 0,
                        l = function (e) {
                          if (
                            -1 !=
                            P.findIndex(function (n) {
                              return (
                                "clusterview" === n.type &&
                                ((a = n.view.cluster),
                                ((r = t.m_mapClusters.get(a)) && r instanceof z
                                  ? r.appid
                                  : null) === e)
                              );
                              var a, r;
                            })
                          )
                            return "continue";
                          var n = r(e);
                          return (
                            P.splice(6 + 6 * o, 0, {
                              type: "clusterview",
                              view: n,
                            }),
                            (o += 1) >= 3 ? "break" : void 0
                          );
                        },
                        c = 0,
                        m = i;
                      c < m.length;
                      c++
                    ) {
                      if ("break" === l(m[c])) break;
                    }
                    t.m_mapPages.set(
                      B({ type: "custom", pageid: D }),
                      new H(D, P)
                    );
                  });
            }),
            Object(a.c)([o.C.ref], e.prototype, "m_lPointsAvailable", void 0),
            Object(a.c)([o.C], e.prototype, "m_mapCouponPromos", void 0),
            Object(a.c)(
              [o.C],
              e.prototype,
              "m_nAppIDFiltersInUseCount",
              void 0
            ),
            Object(a.c)([o.C], e.prototype, "m_mapAppIDFilters", void 0),
            Object(a.c)([o.C], e.prototype, "m_strAppFilterText", void 0),
            Object(a.c)([o.C], e.prototype, "m_mapCouponDefinitons", void 0),
            Object(a.c)([o.C], e.prototype, "m_mapLoyaltyRewardDefs", void 0),
            Object(a.c)([o.C], e.prototype, "m_mapOwnedCommunityItems", void 0),
            Object(a.c)([o.C], e.prototype, "m_mapAppRewards", void 0),
            Object(a.c)(
              [o.C],
              e.prototype,
              "m_seasonalBadgeDefinition",
              void 0
            ),
            Object(a.c)(
              [o.C],
              e.prototype,
              "m_goldenProfileDefinition",
              void 0
            ),
            Object(a.c)([o.C], e.prototype, "m_goldenProfileConfigs", void 0),
            Object(a.c)(
              [o.C],
              e.prototype,
              "m_rgSortedAppsWithRewards",
              void 0
            ),
            Object(a.c)([o.C], e.prototype, "m_rgEligibleApps", void 0),
            Object(a.c)([o.C], e.prototype, "m_mapEligibleApps", void 0),
            Object(a.c)(
              [o.C],
              e.prototype,
              "m_rgProfileCustomizationsConfig",
              void 0
            ),
            Object(a.c)([o.C], e.prototype, "m_persona", void 0),
            Object(a.c)([o.C], e.prototype, "m_equippedItems", void 0),
            Object(a.c)(
              [o.C],
              e.prototype,
              "m_rgPurchasedCustomizations",
              void 0
            ),
            Object(a.c)(
              [o.C],
              e.prototype,
              "m_rgUpgradedCustomizations",
              void 0
            ),
            Object(a.c)(
              [o.C],
              e.prototype,
              "m_unAwardPointsTransferred",
              void 0
            ),
            Object(a.c)([p.a], e.prototype, "ShowLoginDialog", null),
            e
          );
        })();
      function L(e) {
        var t = N.b.LoyaltyStore();
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
      function B(e) {
        return btoa(JSON.stringify(e));
      }
      function R(e, t) {
        return e.join("_") + "__" + k(t);
      }
      function k(e) {
        if (!e) return "";
        var t = e.appid,
          n = e.itemclass,
          r = e.rewardtype,
          i = e.grouping,
          o = e.queryFilter,
          s = e.categoryTag,
          l = e.excludedContentDescriptors,
          c = T(i);
        return [
          t ? Object(a.g)(t).sort().join("_") : "",
          n ? n.join("_") : "",
          r ? r.join("_") : "",
          c.sort,
          c.sort_descending ? "1" : "0",
          o ? o.join("_") : "",
          s ? s.join("_") : "",
          l ? l.join("_") : "",
        ].join("__");
      }
      function T(e) {
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
      var G = (function () {
          function e(e, t, n) {
            void 0 === n && (n = {}),
              (this.m_filter = n),
              (this.m_strTitle = e),
              (this.m_strSubtitle = t),
              (this.m_strId = R([], n));
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
              var a = V(this.m_filter, n);
              return x.Get().QueryRewardDefinitions(a, e, t);
            }),
            Object(a.c)([p.a], e.prototype, "GetRewards", null),
            e
          );
        })(),
        z = (function () {
          function e(e, t, n) {
            (this.m_appid = e),
              (this.m_strSubtitle = t || ""),
              (this.m_additionalFilter = n || {}),
              E.a.GetAppInfo(this.m_appid),
              (this.m_strId = R([this.m_appid], this.m_additionalFilter));
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
                return E.a.GetAppInfo(this.m_appid).name;
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
              var a = V({ appid: [this.m_appid] }, this.m_additionalFilter, n);
              return x.Get().QueryRewardDefinitions(a, e, t);
            }),
            Object(a.c)([p.a], e.prototype, "GetRewards", null),
            e
          );
        })(),
        F = (function () {
          function e(e, t) {
            void 0 === t && (t = ""),
              (this.m_appid = e),
              (this.m_strSubtitle = t),
              E.a.GetAppInfo(this.m_appid);
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
                return E.a.GetAppInfo(this.m_appid).name;
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
                var e = this,
                  t = [],
                  n = {
                    type: "clusterview",
                    view: {
                      type: 1,
                      cluster: {
                        id: R([this.m_appid], { rewardtype: [5] }),
                        title: Object(s.f)("#RewardItemType_Bundle_plural"),
                        subtitle: "",
                        GetRewards: function (t, n, a) {
                          return x
                            .Get()
                            .QueryRewardDefinitions(
                              V({ appid: [e.m_appid], rewardtype: [5, 6] }, a),
                              t,
                              n
                            );
                        },
                      },
                    },
                  };
                t.push(n);
                var a = [8, 15, 14, 13, 3, 11, 4].map(function (t) {
                  return {
                    type: "clusterview",
                    view: {
                      type: 1,
                      cluster: {
                        id: R([e.m_appid], { itemclass: [t] }),
                        title: A(t, !0),
                        subtitle: "",
                        GetRewards: function (n, a, r) {
                          return x
                            .Get()
                            .QueryRewardDefinitions(
                              V({ appid: [e.m_appid], itemclass: [t] }, r),
                              n,
                              a
                            );
                        },
                      },
                    },
                  };
                });
                return (t = t.concat(a));
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        H = (function () {
          function e(e, t, n, a, r) {
            (this.m_pageid = e),
              (this.m_strTitle = n),
              (this.m_strSubtitle = a),
              (this.m_strHeaderImage = r),
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
            Object.defineProperty(e.prototype, "subtitle", {
              get: function () {
                return this.m_strSubtitle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "headerImage", {
              get: function () {
                return this.m_strHeaderImage;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "items", {
              get: function () {
                return this.m_rgPageItems.map(function (e) {
                  return (function (e) {
                    switch (e.type) {
                      case "banner":
                        return e;
                      case "clusterview":
                        return {
                          type: "clusterview",
                          view: Object(a.a)(Object(a.a)({}, e.view), {
                            cluster: x
                              .Get()
                              .GetClusterDescriptor(e.view.cluster),
                          }),
                        };
                    }
                  })(e);
                });
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })();
      var U = (function (e) {
          function t(t, n, a, r, i) {
            return (
              e.call(
                this,
                t,
                n.map(function (e) {
                  return { type: "clusterview", view: e };
                }),
                a,
                r,
                i
              ) || this
            );
          }
          return Object(a.d)(t, e), t;
        })(H),
        Z = (function () {
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
              var e = this,
                t = this.m_rgRequestParts;
              this.m_rootPromise = Promise.resolve()
                .then(function () {
                  var n = e.m_fnMakeRequest(e.m_fnJoinRequests(t));
                  return e.Reset(), n;
                })
                .then(function (n) {
                  return e.m_fnSplitResponse(n, t);
                });
            }),
            (e.prototype.Reset = function () {
              (this.m_rootPromise = void 0), (this.m_rgRequestParts = []);
            }),
            e
          );
        })();
      function V(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t && t.length
          ? Object(a.g)([e], t).reduce(function (e, t) {
              var n, r, i;
              if (!t) return e;
              var o = Object(a.a)({}, e);
              return (
                t.appid &&
                  (o.appid && o.appid.length
                    ? (o.appid = o.appid.filter(function (e) {
                        return t.appid.includes(e);
                      }))
                    : (o.appid = t.appid)),
                "number" == typeof t.grouping &&
                  "number" != typeof e.grouping &&
                  (o.grouping = t.grouping),
                t.itemclass &&
                  (o.itemclass && o.itemclass.length
                    ? (o.itemclass = o.itemclass.filter(function (e) {
                        return t.itemclass.includes(e);
                      }))
                    : (o.itemclass = t.itemclass)),
                t.queryFilter &&
                  (o.queryFilter
                    ? (n = o.queryFilter).push.apply(
                        n,
                        t.queryFilter.filter(function (e) {
                          return o.queryFilter.includes(e);
                        })
                      )
                    : (o.queryFilter = t.queryFilter)),
                t.categoryTag &&
                  (o.categoryTag
                    ? (r = o.categoryTag).push.apply(
                        r,
                        t.categoryTag.filter(function (e) {
                          return o.categoryTag.includes(e);
                        })
                      )
                    : (o.categoryTag = t.categoryTag)),
                t.excludedContentDescriptors &&
                  (o.excludedContentDescriptors
                    ? (i = o.excludedContentDescriptors).push.apply(
                        i,
                        t.excludedContentDescriptors.filter(function (e) {
                          return o.excludedContentDescriptors.includes(e);
                        })
                      )
                    : (o.excludedContentDescriptors =
                        t.excludedContentDescriptors)),
                o
              );
            })
          : e;
      }
      var W = (function () {
        function e(e, t) {
          (this.m_fnRequest = e), (this.m_fnBuildRequestKey = t), this.Reset();
        }
        return (
          (e.prototype.Reset = function () {
            (this.m_mapCache = o.C.map({}, { deep: !1 })),
              (this.m_mapInflightRequests = o.C.map());
          }),
          (e.prototype.Get = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this.m_fnBuildRequestKey.apply(this, e),
              a = this.m_mapCache,
              r = this.m_mapInflightRequests;
            if (a.has(n)) return a.get(n);
            r.get(n) ||
              (r.set(n, !0),
              this.m_fnRequest.apply(this, e).then(function (e) {
                a.set(n, e), r.delete(n);
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
      var Y = (function () {
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
            return !x.Get().BIsLoggedIn() || this.m_bCanClaimFreeItem;
          }),
          (e.prototype.GetCurrentSaleRewardAppID = function () {
            return 1880140;
          }),
          (e.prototype.GetClaimedSaleRewardItemDef = function () {
            return this.m_claimedFreeItemDef;
          }),
          (e.prototype.LoadCanClaimFreeSticker = function () {
            return Object(a.b)(this, void 0, void 0, function () {
              var e, t;
              return Object(a.e)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return x.Get().BIsLoggedIn()
                      ? ((e = f.b.Init(_.m)),
                        [4, _.p.CanClaimItem(x.Get().GetServiceTransport(), e)])
                      : [2];
                  case 1:
                    return (
                      1 == (t = n.sent()).GetEResult()
                        ? this.InitFreeItemReward(t.Body().toObject())
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
            return Object(a.b)(this, void 0, void 0, function () {
              var e, t, n;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (e = { eResult: 2, strMessage: "" }),
                      x.Get().BIsLoggedIn()
                        ? ((t = f.b.Init(_.n)),
                          [4, _.p.ClaimItem(x.Get().GetServiceTransport(), t)])
                        : [
                            2,
                            (e = {
                              eResult: 21,
                              strMessage: Object(s.f)("#Redeem_SignIn"),
                            }),
                          ]
                    );
                  case 1:
                    return (
                      (n = a.sent()),
                      (e.eResult = n.GetEResult()),
                      1 == n.GetEResult()
                        ? ((this.m_claimedFreeItemDef = n
                            .Body()
                            .reward_item()
                            .toObject()),
                          x
                            .Get()
                            .GetCommunityItemInventory(
                              this.m_claimedFreeItemDef.appid
                            ),
                          (this.m_bCanClaimFreeItem = !1),
                          (this.m_rtNextClaimTime = n.Body().next_claim_time()),
                          this.SetClaimTimer())
                        : (10 == n.GetEResult() &&
                            (e.strMessage = Object(s.f)(
                              "#SummerSale_Redeem_Busy"
                            )),
                          console.error(
                            "Error when calling SaleItemRewardsService.ClaimItem: EResult=" +
                              n.GetEResult()
                          )),
                      [2, e]
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
            var e = this;
            if (!this.m_claimTimer && this.m_rtNextClaimTime) {
              var t = Date.now(),
                n = new Date(1e3 * this.m_rtNextClaimTime),
                a = Math.max(0, n.getTime() - t);
              this.m_claimTimer = window.setTimeout(
                function () {
                  (e.m_claimTimer = void 0),
                    Date.now() > n.getTime()
                      ? (e.m_bCanClaimFreeItem = !0)
                      : e.SetClaimTimer();
                },
                a > 3e5 ? a / 2 : a
              );
            }
          }),
          Object(a.c)([o.C], e.prototype, "m_bCanClaimFreeItem", void 0),
          Object(a.c)([o.C], e.prototype, "m_claimedFreeItemDef", void 0),
          Object(a.c)([o.C], e.prototype, "m_rtNextClaimTime", void 0),
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
        SectionCallout: "rewarditemsection_SectionCallout_2tQyo",
      };
    },
    qY0t: function (e, t, n) {
      e.exports = {
        InlineContainer: "layout_InlineContainer_3nHer",
        RemoveOnEmpty: "layout_RemoveOnEmpty_1Y8hK",
      };
    },
    qf3a: function (e, t, n) {
      e.exports = {
        Shell: "profilebundle_Shell_2hbLI",
        ShellScrollParent: "profilebundle_ShellScrollParent_2Vguk",
        ShellHeader: "profilebundle_ShellHeader_3Bsg9",
        ShellHeaderBrandLink: "profilebundle_ShellHeaderBrandLink_1EmD5",
        PointsContainer: "profilebundle_PointsContainer_15-3m",
        AppFilterContainer: "profilebundle_AppFilterContainer_cmv-r",
        HeaderVerticalDivider: "profilebundle_HeaderVerticalDivider_yT6pL",
        AppFilterLabel: "profilebundle_AppFilterLabel_1XMIx",
        AppFilterIconContainer: "profilebundle_AppFilterIconContainer_1H6L5",
        AppFilterIcon: "profilebundle_AppFilterIcon_1NOda",
        FilterInUse: "profilebundle_FilterInUse_3d2D_",
        RewardsPointsIcon: "profilebundle_RewardsPointsIcon_1NwE1",
        YourBalanceLabel: "profilebundle_YourBalanceLabel_3NphQ",
        RewardsPointsCount: "profilebundle_RewardsPointsCount_33f1l",
        ShellHeaderBrandName: "profilebundle_ShellHeaderBrandName_2YwwT",
        SvgOverrideColor: "profilebundle_SvgOverrideColor_1aaW9",
        ItemHoverZIndex: "profilebundle_ItemHoverZIndex_13s3U",
        ActionButton: "profilebundle_ActionButton_2dADy",
        Icon: "profilebundle_Icon_2oFfA",
        CheckmarkCircle: "profilebundle_CheckmarkCircle_7u7WR",
        AlreadyOwned: "profilebundle_AlreadyOwned_2D02B",
        ItemHand: "profilebundle_ItemHand_3LKW5",
        ItemCard: "profilebundle_ItemCard_1MOjA",
        OwnedItem: "profilebundle_OwnedItem_yHKq7",
        Avatar: "profilebundle_Avatar_3yoLj",
        AvatarFrame: "profilebundle_AvatarFrame_1SfXc",
        DefaultAvatarImage: "profilebundle_DefaultAvatarImage_2yzRR",
        MiniProfileBackground: "profilebundle_MiniProfileBackground_1ceo3",
        ProfileBackground: "profilebundle_ProfileBackground_2PbBK",
        ItemCardImage: "profilebundle_ItemCardImage_1FUjB",
        ProfileBundleContainer: "profilebundle_ProfileBundleContainer_1ydA_",
        AppIcon: "profilebundle_AppIcon_nVFnh",
        ProfileBundleFooter: "profilebundle_ProfileBundleFooter_2uRyM",
        ProfileBundleName: "profilebundle_ProfileBundleName_12Oue",
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
    reUc: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return l;
        });
      var a = n("q1tI"),
        r = n.n(a),
        i = n("exH9"),
        o = n("cMO7"),
        s = function (e) {
          var t = e.src;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("div", {
              className: o.BackgroundFadeImage,
              style: { backgroundImage: "url(" + t + ")" },
            }),
            r.a.createElement("div", {
              className: o.BackgroundFadeImageBlurred,
              style: { backgroundImage: "url(" + t + ")" },
            }),
            r.a.createElement("div", { className: o.BackgroundFade })
          );
        },
        l = function (e) {
          var t = e.theme;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("div", {
              className: Object(i.a)(o.BackgroundFadeTheme, t),
            }),
            r.a.createElement("div", {
              className: Object(i.a)(o.BackgroundFadeThemeBlurred, t),
            }),
            r.a.createElement("div", { className: o.BackgroundFade })
          );
        };
    },
    sf1Z: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/csgoChat_128_defuse.png?v=valveisgoodatcaching";
    },
    t0PL: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("TyAF"),
        s = n("RV7a"),
        l = (n("OU48"), n("lypr")),
        c =
          (n("prdU"),
          n("8esw"),
          Object(o.a)(function (e) {
            var t = e.getItems,
              n = e.renderItem,
              o = (e.children, e.style, e.cItemsPerPage),
              c = e.renderItemSkeleton,
              m = Object(a.f)(e, [
                "getItems",
                "renderItem",
                "children",
                "style",
                "cItemsPerPage",
                "renderItemSkeleton",
              ]),
              d = o || 20,
              u = Object(r.useState)(d),
              p = u[0],
              f = u[1],
              _ = t(0, p),
              h = _.rewards,
              g = _.bLoadingMore,
              b = h.map(n);
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                s.c,
                Object(a.a)({ verticalSpacing: "large" }, m),
                b,
                g &&
                  c &&
                  (function (e, t) {
                    for (var n = [], a = 0; a < t; a++)
                      n.push(i.a.createElement("div", { key: a }, e()));
                    return n;
                  })(c, d),
                i.a.createElement(l.a, {
                  trigger: "repeated",
                  onVisibilityChange: function (e) {
                    return e && f(p + d);
                  },
                })
              )
            );
          }));
    },
    tHRV: function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/friends_list_golden.png?v=valveisgoodatcaching";
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
    "vN/p": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return C;
      }),
        n.d(t, "b", function () {
          return v;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        o = n("TyAF"),
        s = n("qD+2"),
        l = n("prdU"),
        c = n("lkRc"),
        m = n("TLQK"),
        d = n("ehaW"),
        u = n("RV7a"),
        p = (n("0xSo"), n("OU48"), n("mw7S")),
        f = n("qf3a"),
        _ = n("StxQ"),
        h = n("exH9"),
        g = n("cOvF"),
        b = n("reUc"),
        y = n("8Uds");
      var I = i.a.createContext(!1);
      function C(e) {
        return i.a.createElement(I.Provider, { value: !0 }, e.children);
      }
      var v = Object(o.a)(function (e) {
          var t,
            n,
            o,
            c,
            d,
            u,
            p,
            f,
            _,
            h = Object(r.useContext)(I),
            g =
              ((n = (t = e).definition),
              t.theme,
              (o = Object(a.f)(t, ["definition", "theme"])),
              (c = s.a.GetAppInfo(n.appid)),
              (d = c.icon_url),
              (u = c.name),
              (p = l.b.Get().BRewardOwnedByUser(n)),
              (f = n.community_item_data.item_title),
              (_ = l.b.Get().GetBundleOfferForUser(n)),
              Object(a.a)(
                {
                  cost: parseInt(n.point_cost),
                  name: f,
                  desc: Object(m.f)("#RewardItemType_ProfileBundle"),
                  attributes: [],
                  appIcon: d,
                  appName: u,
                  bundle: _,
                  definition: n,
                  bOwned: p,
                },
                o
              ));
          return h
            ? i.a.createElement(M, Object(a.a)({}, g))
            : i.a.createElement(w, Object(a.a)({}, g));
        }),
        w = Object(o.a)(function (e) {
          e.appName;
          var t = e.appIcon,
            n = (e.bundle, e.definition),
            r = e.cost,
            o = (e.bOwned, e.name, e.desc),
            s = e.attributes,
            l = e.className,
            c =
              (e.style,
              Object(a.f)(e, [
                "appName",
                "appIcon",
                "bundle",
                "definition",
                "cost",
                "bOwned",
                "name",
                "desc",
                "attributes",
                "className",
                "style",
              ])),
            m = n.community_item_data.item_title;
          return i.a.createElement(
            d.a,
            Object(a.a)(
              {
                name: m,
                cost: r,
                attributes: s,
                appIcon: t,
                iconComponent: g.x,
                desc: o,
                className: l,
              },
              c
            ),
            i.a.createElement("img", {
              src: Object(p.b)(n),
              style: { width: "100%", height: "100%" },
            })
          );
        }),
        M = Object(o.a)(function (e) {
          e.appName;
          var t = e.appIcon,
            n = e.bundle,
            r = e.definition,
            o = e.cost,
            s = e.bOwned,
            l = (e.name, e.desc, e.attributes, e.className),
            c = e.style,
            m = Object(a.f)(e, [
              "appName",
              "appIcon",
              "bundle",
              "definition",
              "cost",
              "bOwned",
              "name",
              "desc",
              "attributes",
              "className",
              "style",
            ]),
            d = r.community_item_data.item_title,
            p = r.community_item_data.profile_theme_id;
          return i.a.createElement(
            u.a,
            Object(a.a)(
              {
                display: "flex",
                flexDirection: "column",
                className: Object(h.a)(f.ProfileBundleContainer, l),
                style: Object(a.a)(Object(a.a)({}, c), { width: "524px" }),
              },
              m
            ),
            t && i.a.createElement("img", { src: t, className: f.AppIcon }),
            i.a.createElement(
              u.a,
              {
                flex: "1",
                style: {
                  width: "524px",
                  height: "200px",
                  position: "relative",
                  alignSelf: "center",
                },
              },
              p && i.a.createElement(b.b, { theme: y[p + "Theme"] }),
              i.a.createElement(E, { items: n.items, offer: n })
            ),
            i.a.createElement(N, { label: d, cost: o, bOwned: s })
          );
        }),
        N = function (e) {
          var t = e.cost,
            n = e.label,
            a = e.bOwned;
          return i.a.createElement(
            u.a,
            {
              padding: "small",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              className: f.ProfileBundleFooter,
              title: n,
            },
            i.a.createElement("div", { className: f.ProfileBundleName }, n),
            a
              ? i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    "span",
                    { className: f.AlreadyOwned },
                    Object(m.f)("#Redeem_BundleItemOwned")
                  ),
                  i.a.createElement(g.j, { className: f.CheckmarkCircle })
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(_.a, { amount: t })
                )
          );
        };
      function j(e, t) {
        var n = e
          .filter(function (e) {
            return e.community_item_class == t;
          })
          .slice(0, 1);
        return 1 == n.length ? n[0] : null;
      }
      var E = Object(o.a)(function (e) {
          var t = e.offer,
            n = e.items,
            a = j(n, 15),
            r = j(n, 14),
            o = j(n, 13),
            s = j(n, 3);
          return i.a.createElement(
            "div",
            { style: { position: "relative" }, className: f.ItemHand },
            a &&
              i.a.createElement(S, { item: a, offer: t, className: f.Avatar }),
            r &&
              i.a.createElement(S, {
                item: r,
                offer: t,
                className: f.AvatarFrame,
              }),
            o &&
              i.a.createElement(S, {
                item: o,
                offer: t,
                className: f.MiniProfileBackground,
              }),
            s &&
              i.a.createElement(S, {
                item: s,
                offer: t,
                className: f.ProfileBackground,
              })
          );
        }),
        S = Object(o.a)(function (e) {
          e.offer;
          var t = e.item,
            n = e.className,
            r = Object(a.f)(e, ["offer", "item", "className"]),
            o = 14 == t.community_item_class;
          return i.a.createElement(
            u.a,
            Object(a.a)(
              {
                padding: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              r,
              { className: Object(h.a)(n, f.ItemCard), key: t.defid }
            ),
            o &&
              i.a.createElement("img", {
                className: f.DefaultAvatarImage,
                src:
                  c.d.MEDIA_CDN_COMMUNITY_URL +
                  "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg",
              }),
            i.a.createElement("img", {
              src: Object(p.b)(t),
              className: f.ItemCardImage,
              style: o ? { zIndex: 1 } : void 0,
            })
          );
        });
    },
    "y8q+": function (e, t, n) {
      e.exports =
        n.p +
        "images/applications/store/collection_icon_64x64.png?v=valveisgoodatcaching";
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

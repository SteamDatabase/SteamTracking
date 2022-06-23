/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    "++az": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/Entering_vr.gif?v=4fe9e6456ac28680b246c24eabaa394c";
    },
    "+9fn": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return c;
      }),
        a.d(t, "a", function () {
          return m;
        }),
        a.d(t, "c", function () {
          return d;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("GbHM"),
        s = a("Rbfr"),
        l = a("qX6Y");
      const c = (e) => {
          const {
              title: t,
              subtitle: a,
              leftActions: n,
              rightActions: r,
              children: o,
            } = e,
            s = t || a || n || r;
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
                    n && i.a.createElement("div", { className: l.Actions }, n),
                    i.a.createElement("div", { className: l.SectionLine }),
                    r && i.a.createElement("div", { className: l.Actions }, r)
                  ),
                  i.a.createElement("div", { className: l.SectionSubtitle }, a)
                )
              ),
            i.a.createElement("div", { className: l.Body }, o)
          );
        },
        m = (e) => {
          const { className: t } = e,
            a = Object(n.c)(e, ["className"]);
          return i.a.createElement(
            s.a,
            Object.assign({ className: Object(o.a)(t, l.ActionButton) }, a)
          );
        },
        d = (e) => {
          const { className: t } = e,
            a = Object(n.c)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object.assign({ className: Object(o.a)(t, l.SectionCallout) }, a)
          );
        };
    },
    "+j4l": function (e, t, a) {
      "use strict";
      a.d(t, "f", function () {
        return Be;
      }),
        a.d(t, "e", function () {
          return Le;
        }),
        a.d(t, "c", function () {
          return Pe;
        }),
        a.d(t, "d", function () {
          return Re;
        }),
        a.d(t, "b", function () {
          return ke;
        }),
        a.d(t, "a", function () {
          return pt;
        });
      var n,
        r,
        i = a("mrSG"),
        o = a("q1tI"),
        s = a.n(o),
        l = a("Lsvi"),
        c = a("2vnA"),
        m = a("aoTL"),
        d = a("TyAF"),
        p = a("hCpY"),
        u = a("55Ip"),
        _ = a("oydz"),
        g = a("thkD"),
        f = a("GXif"),
        h = a("prdU"),
        b = (a("Nr4G"), a("1udA"), a("jIgc")),
        C = a("rSrx"),
        I = a("/Q1a"),
        y = a("dI71"),
        w = (a("17x9"), a("dRu9")),
        M = a("0PSK");
      var E = "out-in",
        v = "in-out",
        N = function (e, t, a) {
          return function () {
            var n;
            e.props[t] && (n = e.props)[t].apply(n, arguments), a();
          };
        },
        j =
          (((n = {})[E] = function (e) {
            var t = e.current,
              a = e.changeState;
            return s.a.cloneElement(t, {
              in: !1,
              onExited: N(t, "onExited", function () {
                a(w.b, null);
              }),
            });
          }),
          (n[v] = function (e) {
            var t = e.current,
              a = e.changeState,
              n = e.children;
            return [
              t,
              s.a.cloneElement(n, {
                in: !0,
                onEntered: N(n, "onEntered", function () {
                  a(w.b);
                }),
              }),
            ];
          }),
          n),
        S =
          (((r = {})[E] = function (e) {
            var t = e.children,
              a = e.changeState;
            return s.a.cloneElement(t, {
              in: !0,
              onEntered: N(t, "onEntered", function () {
                a(w.a, s.a.cloneElement(t, { in: !0 }));
              }),
            });
          }),
          (r[v] = function (e) {
            var t = e.current,
              a = e.children,
              n = e.changeState;
            return [
              s.a.cloneElement(t, {
                in: !1,
                onExited: N(t, "onExited", function () {
                  n(w.a, s.a.cloneElement(a, { in: !0 }));
                }),
              }),
              s.a.cloneElement(a, { in: !0 }),
            ];
          }),
          r),
        O = (function (e) {
          function t() {
            for (
              var t, a = arguments.length, n = new Array(a), r = 0;
              r < a;
              r++
            )
              n[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).state = {
                status: w.a,
                current: null,
              }),
              (t.appeared = !1),
              (t.changeState = function (e, a) {
                void 0 === a && (a = t.state.current),
                  t.setState({ status: e, current: a });
              }),
              t
            );
          }
          Object(y.a)(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function () {
              this.appeared = !0;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              return null == e.children
                ? { current: null }
                : t.status === w.b && e.mode === v
                ? { status: w.b }
                : !t.current ||
                  ((a = t.current),
                  (n = e.children),
                  a === n ||
                    (s.a.isValidElement(a) &&
                      s.a.isValidElement(n) &&
                      null != a.key &&
                      a.key === n.key))
                ? { current: s.a.cloneElement(e.children, { in: !0 }) }
                : { status: w.c };
              var a, n;
            }),
            (a.render = function () {
              var e,
                t = this.props,
                a = t.children,
                n = t.mode,
                r = this.state,
                i = r.status,
                o = r.current,
                l = {
                  children: a,
                  current: o,
                  changeState: this.changeState,
                  status: i,
                };
              switch (i) {
                case w.b:
                  e = S[n](l);
                  break;
                case w.c:
                  e = j[n](l);
                  break;
                case w.a:
                  e = o;
              }
              return s.a.createElement(
                M.a.Provider,
                { value: { isMounting: !this.appeared } },
                e
              );
            }),
            t
          );
        })(s.a.Component);
      (O.propTypes = {}), (O.defaultProps = { mode: E });
      var A = O,
        D = a("pQ8y"),
        x = a("f5iL"),
        B = a("StxQ"),
        L = a("n4wG"),
        P = a("1fPh"),
        R = (a("msu0"), a("e356")),
        k = a("GbHM");
      let T = { success: !0, result: 1 };
      class G {
        constructor() {
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
        get ClientInfo() {
          return this.m_ClientInfo;
        }
        get ready() {
          return this.m_bReady;
        }
        get browser_supported() {
          return !this.m_bSecurityException;
        }
        get connected_to_client() {
          return this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
        }
        SendMsgAndAwaitResponse(e) {
          return new Promise((t, a) => {
            let n = this.m_iCallSeq++;
            this.BSendMsg(e, n)
              ? this.m_mapWaitingCallbacks.set(n, {
                  iSeq: n,
                  fnCallback: t,
                  fnError: a,
                })
              : a();
          });
        }
        BSendMsg(e, t) {
          if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
            return !1;
          let a = Object.assign({}, e, {
            universe: I.d.EUNIVERSE,
            accountid: I.l.accountid,
          });
          void 0 !== t && (a.sequenceid = t);
          try {
            return this.m_socket.send(JSON.stringify(a)), !0;
          } catch (e) {
            return !1;
          }
        }
        OnSocketMessage(e) {
          try {
            let t = JSON.parse(e.data);
            if (t.sequenceid) {
              let e = this.m_mapWaitingCallbacks.get(t.sequenceid);
              if (e)
                return (
                  this.m_mapWaitingCallbacks.delete(t.sequenceid),
                  void e.fnCallback(t)
                );
            }
          } catch (e) {
            console.error("exception parsing response", e);
          }
        }
        Connect() {
          if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
            return Promise.resolve();
          if (this.m_promiseConnect) return this.m_promiseConnect;
          let e = new Promise((e, t) => {
            try {
              this.m_socket = new WebSocket(
                "ws://127.0.0.1:27060/clientsocket/"
              );
            } catch (e) {
              return (this.m_bSecurityException = !0), void t(e);
            }
            (this.m_socket.onerror = (e) => {
              t();
            }),
              (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
              (this.m_socket.onopen = () => {
                this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                  .then((a) => {
                    1 == a.success
                      ? ((this.m_ClientInfo.ulVersion = a.clientversion),
                        (this.m_ClientInfo.bFriendsUIEnabled = !!a.friendsui),
                        (this.m_ClientInfo.unAccountID = a.accountid),
                        a.supported_messages &&
                          (this.m_ClientInfo.rgSupportedMessages =
                            a.supported_messages),
                        e())
                      : t();
                  })
                  .catch(t);
              });
          });
          return (
            (this.m_promiseConnect = e),
            this.m_promiseConnect
              .then(() => {
                (this.m_bReady = !0), (this.m_promiseConnect = void 0);
              })
              .catch(() => {
                (this.m_bClientConnectionFailed = !0),
                  (this.m_promiseConnect = void 0);
              }),
            this.m_promiseConnect
          );
        }
      }
      let F = new (class {
        constructor() {
          (this.m_connection = new G()),
            (this.m_bAllowAccountMismatch = !1),
            (this.m_mapCacheSubscribedApp = new Map());
        }
        FailureResult(e = 2) {
          let t = { success: !1, result: e };
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
        }
        SetAllowAccountMismatch(e) {
          this.m_bAllowAccountMismatch = e;
        }
        BClientConnected() {
          return this.m_connection.Connect().then(
            () => T,
            () => this.FailureResult()
          );
        }
        BClientSupportsMessage(e) {
          return (
            !(
              !this.m_connection.connected_to_client || !this.m_connection.ready
            ) &&
            -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
          );
        }
        OpenFriendChatDialog(e) {
          let t = { message: "ShowFriendChatDialog", steamid: e };
          return this.GenericEResultCall(t);
        }
        OpenChatRoomGroupDialog(e, t) {
          let a = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
          return t && (a.chat_room_id = t), this.GenericEResultCall(a);
        }
        ShowChatRoomGroupInvite(e) {
          let t = { message: "ShowChatRoomGroupInvite", invite_code: e };
          return this.GenericEResultCall(t);
        }
        OpenJoinGameDialog(e) {
          let t = { message: "ShowJoinGameDialog", friend_id: e };
          return this.GenericEResultCall(t);
        }
        BIsSubscribedApp(e) {
          if (this.m_mapCacheSubscribedApp.has(e))
            return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
          let t = { message: "IsSubscribedApp", appid: e };
          return this.GenericEResultCall(t).then((t) => {
            if (t.connect_failed) return;
            let a = 1 == t.result;
            return this.m_mapCacheSubscribedApp.set(e, a), a;
          });
        }
        ViewGameInfoForSteamID(e) {
          let t = { message: "ViewGameInfoForSteamID", steamid: e };
          return this.GenericEResultCall(t);
        }
        OpenFriendsDialog() {
          return this.GenericEResultCall({ message: "OpenFriendsDialog" });
        }
        BClientAccountMatches() {
          return (
            !I.l.logged_in ||
            I.l.accountid == this.m_connection.ClientInfo.unAccountID
          );
        }
        GenericEResultCall(e) {
          return this.m_connection
            .Connect()
            .then(() =>
              this.m_bAllowAccountMismatch || this.BClientAccountMatches()
                ? this.m_connection
                    .SendMsgAndAwaitResponse(e)
                    .then((e) =>
                      1 === e.success ? T : this.FailureResult(e.success)
                    )
                : { success: !1, result: 19, account_mismatch: !0 }
            )
            .catch(() => this.FailureResult());
        }
      })();
      window.ClientConnectionAPI = F;
      var z = a("Uy/A"),
        H = a.n(z),
        U = a("3idx"),
        V = a("3y2B"),
        Z = a("CHWB"),
        W = a.n(Z),
        Y = a("7VqR");
      function Q(e, t, a) {
        return I.d.COMMUNITY_CDN_ASSET_URL + e + "/roomeffects/" + t + "/" + a;
      }
      class q extends o.Component {
        constructor(e) {
          super(e), (this.m_strSaleId = this.props.sale);
        }
        getAsset(e) {
          return Q(this.m_strSaleId, this.props.effect.name, e);
        }
      }
      function X(e, t) {
        !(function (e) {
          const t = Object(o.useRef)({ bSet: !1 });
          t.current.bSet || (t.current = { bSet: !0, value: e() }),
            t.current.value;
        })(() => setTimeout(e, t));
      }
      const J = ({ msDelay: e, children: t }) =>
        (function (e) {
          const [t, a] = Object(o.useState)(!1);
          return X(() => a(!0), e), t;
        })(e)
          ? s.a.createElement(s.a.Fragment, null, t)
          : null;
      class $ extends s.a.Component {
        constructor(e) {
          super(e),
            (this.m_refContainer = s.a.createRef()),
            (this.m_rgFireworks = []),
            (this.m_nCurrentDelay = 0),
            (this.state = { bReady: !1 });
        }
        CreateFireworks(e) {
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
        }
        TestRender(e) {
          Object(Y.b)(0, 70), Object(Y.b)(0, 70);
          for (let t = 0; t < 1; t++)
            this.m_rgFireworks.push({
              x: "20%",
              y: "20%",
              nHueRotation: 0,
              nDelay: this.m_nCurrentDelay,
              flScale: e,
              burst: K,
            }),
              (this.m_nCurrentDelay += 500);
          this.m_rgFireworks.push({
            x: "0%",
            y: "0%",
            nHueRotation: 0,
            nDelay: this.m_nCurrentDelay,
            flScale: e,
            burst: ee,
          }),
            this.m_rgFireworks.push({
              x: "30%",
              y: "30%",
              nHueRotation: 0,
              nDelay: this.m_nCurrentDelay,
              flScale: e,
              burst: te,
            });
        }
        CalcHueRotation() {
          return "lny2020" == this.props.sale
            ? 360 + Object(Y.b)(-30, 10)
            : Object(Y.b)(0, 360);
        }
        AddCluster(e) {
          let t = Object(Y.b)(-5, 50),
            a = Object(Y.b)(-10, 50),
            n = this.CalcHueRotation();
          this.m_rgFireworks.push({
            x: `${t}%`,
            y: `${a}%`,
            nHueRotation: n,
            nDelay: this.m_nCurrentDelay,
            flScale: e,
            burst: ee,
          });
          let r = Math.random() * Math.PI * 2;
          const i = Math.floor(64 * e),
            o = Math.floor(60 * e),
            s = Math.floor(10 * e);
          let l = 0;
          for (let c = 0; c < 3; c++) {
            let m = `calc( ${t}% + ${i + Math.cos(r + l) * o}px )`,
              d = `calc( ${a}% + ${i + (Math.sin(r + l) * o + s)}px )`;
            c < 2 && (this.m_nCurrentDelay += 200),
              (n = this.CalcHueRotation()),
              this.m_rgFireworks.push({
                x: m,
                y: d,
                nHueRotation: n,
                nDelay: this.m_nCurrentDelay,
                flScale: e,
                burst: te,
              }),
              (l += 2.09);
          }
        }
        RenderLong(e) {
          const t = Object(Y.b)(20, 60),
            a = Object(Y.b)(-5, 50),
            n = this.CalcHueRotation();
          this.m_rgFireworks.push({
            x: `${t}%`,
            y: `${a}%`,
            nHueRotation: n,
            nDelay: this.m_nCurrentDelay,
            flScale: e,
            burst: K,
          });
        }
        componentDidMount() {
          if (!this.m_refContainer.current || this.m_rgFireworks.length > 0)
            return;
          let e = this.m_refContainer.current,
            t = e.offsetWidth,
            a = e.offsetHeight,
            n = Object(Y.c)(t, 400, 1080, 0.5, 2);
          (n = Object(Y.a)(n, 0.5, 2)),
            console.log(t, a, n),
            this.CreateFireworks(n),
            this.setState({ bReady: !0 });
        }
        render() {
          let e = [];
          return (
            this.state.bReady &&
              this.m_rgFireworks.map((t, a) => {
                let n = `${a}`,
                  r = {
                    top: t.y,
                    left: t.x,
                    filter: `hue-rotate(${t.nHueRotation}deg)`,
                  };
                e.push(
                  s.a.createElement(t.burst, {
                    key: n,
                    style: r,
                    msDelay: t.nDelay,
                    scale: t.flScale,
                    sale: this.props.sale,
                  })
                );
              }),
            s.a.createElement(
              "div",
              { ref: this.m_refContainer, className: W.a.FireworkContainer },
              e
            )
          );
        }
      }
      function K(e) {
        const t = Q(e.sale, "fireworks", "long_sheet.png");
        let a = e.style;
        return (
          (a.backgroundImage = `url(${t})`),
          (a.width = 256),
          (a.height = 256),
          (a.animation = `${W.a.fireworkLongX} 0.2s steps(9) 10, ${W.a.fireworkLongY} 2.0s steps(10) forwards`),
          (a.transformOrigin = "0 0"),
          (a.transform = `scale( ${e.scale} )`),
          s.a.createElement(
            J,
            { msDelay: e.msDelay },
            s.a.createElement("div", {
              style: e.style,
              className: W.a.FireworkPNG,
            })
          )
        );
      }
      function ee(e) {
        const t = Q(e.sale, "fireworks", "big_sheet.png");
        let a = e.style;
        return (
          (a.backgroundImage = `url(${t})`),
          (a.width = 256),
          (a.height = 256),
          (a.animation = `${W.a.fireworkBigX} 0.2s steps(9) 4, ${W.a.fireworkBigY} 0.8s steps(4) forwards`),
          (a.transformOrigin = "0 0"),
          (a.transform = `scale( ${e.scale} )`),
          s.a.createElement(
            J,
            { msDelay: e.msDelay },
            s.a.createElement("div", {
              style: e.style,
              className: W.a.FireworkPNG,
            })
          )
        );
      }
      function te(e) {
        const t = Q(e.sale, "fireworks", "small_sheet.png");
        let a = e.style;
        return (
          (a.backgroundImage = `url(${t})`),
          (a.width = 256),
          (a.height = 256),
          (a.animation = `${W.a.fireworkSmallX} 0.15s steps(10) 6, ${W.a.fireworkSmallY} 0.9s steps(6) forwards`),
          (a.transformOrigin = "0 0"),
          (a.transform = `scale( ${e.scale / 2} )`),
          s.a.createElement(
            J,
            { msDelay: e.msDelay },
            s.a.createElement("div", {
              style: e.style,
              className: W.a.FireworkPNG,
            })
          )
        );
      }
      var ae = a("gMmH");
      class ne extends q {
        constructor(e) {
          super(e),
            (this.m_x = Y.b(0, 70) + "%"),
            (this.m_y = Y.b(0, 70) + "%"),
            (this.m_nRotate = Math.floor(90 * Math.random()) - 45),
            (this.m_splatRots = [
              360 * Math.random(),
              360 * Math.random(),
              360 * Math.random(),
            ]),
            (this.m_nPathAnimation = Y.b(1, 6)),
            (this.m_nKeyID = ne.sm_nUnique++),
            (this.m_strSaleId = "winter2019");
        }
        fragment(e, ...t) {
          let a = t.map((e) => W.a[e]);
          return (
            a.push(W.a.snowball_fragment),
            o.createElement("img", {
              src: this.getAsset(e),
              className: a.join(" "),
            })
          );
        }
        Snowball(e, t, ...a) {
          let n = e < 0 ? W.a.SnowballImageCW : W.a.SnowballImageCCW;
          e > -5 && e < 5 && (n = "");
          let r = a.map((e) => W.a[e]);
          return (
            r.push(W.a.snowball_fragment),
            o.createElement(
              "div",
              { style: { display: "inline-block" }, className: r.join(" ") },
              o.createElement("img", {
                style: { transform: "rotation( 360deg )" },
                className: `${W.a.SnowballImage} ${n}`,
                src: this.getAsset(t),
              })
            )
          );
        }
        residue() {
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { style: { transform: `rotate(${this.m_splatRots[0]}deg)` } },
              this.fragment("splat1.png", "snowball-residue")
            ),
            o.createElement(
              "div",
              { style: { transform: `rotate(${this.m_splatRots[1]}deg)` } },
              this.fragment("splat2.png", "snowball-residue")
            ),
            o.createElement(
              "div",
              { style: { transform: `rotate(${this.m_splatRots[2]}deg)` } },
              this.fragment("splat3.png", "snowball-residue")
            )
          );
        }
        render() {
          let e = `snowball-path-${this.m_nPathAnimation}`,
            t = { animationName: W.a[e] };
          return o.createElement(
            o.Fragment,
            { key: `${this.m_nKeyID}` },
            o.createElement(
              "div",
              { className: W.a["snowball-path"], style: t },
              o.createElement(
                "div",
                {
                  className: W.a["snowball-container"],
                  style: {
                    left: this.m_x,
                    top: this.m_y,
                    transform: `rotate( ${this.m_nRotate}deg )`,
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
        }
      }
      ne.sm_nUnique = 0;
      var re = a("ApMK");
      function ie(e) {
        const t = e.data,
          a = Q(e.sale, e.effect.name, `${t.strImage}.png`);
        let n = null;
        if (t.SOverlay) {
          const a = t.SOverlay
              ? Q(e.sale, e.effect.name, `${t.SOverlay.strImage}.png`)
              : null,
            r = { animationDuration: `${t.SOverlay.nDuration}s` };
          n = o.createElement("img", {
            src: a,
            className: W.a[t.SOverlay.strClass],
            style: r,
          });
        }
        let r = {
          animationDuration: `${t.nDuration}s`,
          animationName: W.a[t.strAnimation],
          marginLeft: `${t.nOffset}%`,
        };
        return o.createElement(
          "div",
          { style: r, className: W.a.balloons },
          o.createElement("img", {
            src: a,
            style: { maxWidth: "100%", position: "absolute" },
          }),
          n
        );
      }
      class oe extends q {
        constructor(e) {
          switch (
            (super(e),
            (this.m_rgBalloons = []),
            (this.m_nNextImage = 0),
            e.sale)
          ) {
            case "lny2020":
              this.m_rgImages = ["orange", "peach", "yellow"];
              break;
            default:
              this.m_rgImages = [
                "balloon_blue",
                "balloon_cyan",
                "balloon_green",
                "balloon_purple",
                "balloon_red",
                "balloon_yellow",
              ];
          }
          re.f(this.m_rgImages), this.GenerateBalloons();
        }
        GetNextImage() {
          let e = this.m_rgImages[this.m_nNextImage % this.m_rgImages.length];
          return this.m_nNextImage++, e;
        }
        GenerateDuration() {
          return (
            parseFloat(W.a.balloonsDurationS) +
            parseFloat(W.a.balloonsDurationJitterS) * Math.random()
          );
        }
        GenerateBalloons() {
          let e = ["balloon_small_1", "balloon_small_2", "balloon_small_3"],
            t = ["balloon_big_1", "balloon_big_2"];
          this.m_rgBalloons = [];
          for (let t of e) {
            let e = Y.b(-10, 10);
            this.m_rgBalloons.push(this.GenerateSingleBalloon(t, e));
          }
          let a = [70, 20];
          re.f(a);
          let n = 20 == a[1];
          for (let e of t) {
            let t = Y.b(-10, 10) + a.pop();
            this.m_rgBalloons.push(this.GenerateSingleBalloon(e, t));
          }
          let r = ["balloon_move_left", "balloon_move_right"][Y.b(0, 1)];
          n && (r = "balloon_move_left");
          let i = Y.b(-10, 10);
          this.m_rgBalloons.push(this.GenerateSingleBalloon(r, i));
        }
        GenerateSingleBalloon(e, t) {
          const a = this.GetNextImage();
          let n = {
            strAnimation: e,
            strImage: a,
            nDuration: this.GenerateDuration(),
            nOffset: t,
          };
          return (
            "lny2020" == this.props.sale &&
              (n.SOverlay = {
                strImage: a + "-glow",
                strClass: "lantern_glow",
                nDuration: 1 + 4 * Math.random(),
              }),
            n
          );
        }
        render() {
          return o.createElement(
            o.Fragment,
            null,
            this.m_rgBalloons.map((e, t) =>
              o.createElement(ie, {
                key: `${t}`,
                data: e,
                effect: this.props.effect,
                sale: this.m_strSaleId,
              })
            )
          );
        }
      }
      class se {
        constructor(e) {
          this.m_seed = e;
        }
        next() {
          const e = 1e3 * Math.sin(this.m_seed++);
          return e - Math.floor(e);
        }
      }
      function le(e) {
        const t = new se(e);
        let a = 0.8 * t.next() + 0.5;
        const n = 10 * (t.next() + e) + 10 + "px",
          r = {
            opacity: a,
            width: n,
            height: n,
            margin: 30 * t.next() + 15 + "px",
            filter: `hue-rotate(${90 * t.next() - 30}deg) saturate(100%)`,
          },
          i = 1 + Math.floor(5 * t.next()),
          s =
            I.d.COMMUNITY_CDN_ASSET_URL +
            `winter2019/roomeffects/96px/flake_${i}.png`;
        return o.createElement("img", { style: r, src: s });
      }
      const ce = parseInt(W.a.balloonsDurationMaxMs),
        me = parseInt(W.a.snowballDurationMs);
      function de(e, t) {
        return () => {
          const a =
            I.d.COMMUNITY_CDN_ASSET_URL + t + "/roomeffects/96px/" + e + ".png";
          return o.createElement("img", { style: { width: "100%" }, src: a });
        };
      }
      function pe(e, t, a, n) {
        return {
          timeout: a,
          renderButton: de(e, t),
          renderEffectIcon: de(e, t),
          buttonToken: "#ChatEntryButton_Send" + U.f(e),
          locToken: "#ChatRoom_RoomEffect" + U.f(e),
          render: n,
        };
      }
      function ue(e, t, a) {
        return pe(e, "winter2019", t, a);
      }
      const _e = {
        lny2020_lanterns: pe("lny2020_lanterns", "lny2020", ce, (e) =>
          o.createElement(oe, { effect: e, sale: "lny2020" })
        ),
        lny2020_firework: pe("lny2020_firework", "lny2020", 7e3, () =>
          o.createElement($, { sale: "lny2020" })
        ),
        lny2020_confetti: pe("lny2020_confetti", "lny2020", ae.c, () =>
          o.createElement(ae.a, { eType: ae.b.LNY2020 })
        ),
        snowball: ue("snowball", me, (e) =>
          o.createElement(ne, { effect: e, sale: "winter2019" })
        ),
        balloons: ue("balloons", ce, (e) =>
          o.createElement(oe, { effect: e, sale: "winter2019" })
        ),
        confetti: ue("confetti", ae.c, () =>
          o.createElement(ae.a, { eType: ae.b.Default })
        ),
        goldfetti: ue("goldfetti", ae.c, () =>
          o.createElement(ae.a, { eType: ae.b.Gold })
        ),
        firework: ue("firework", 7e3, () =>
          o.createElement($, { sale: "winter2019" })
        ),
        snow: ue("snow", 1e4, function (e) {
          const t = [],
            a = new se(e.timestamp);
          for (let n = 0; n < 150; n++) {
            const r = a.next(),
              i = {
                left: 100 * a.next() + "%",
                animationDuration: 3 * (1 - r) + 4 + "s",
                animationDelay: `${r + 4 * a.next()}s`,
              };
            t.push(
              o.createElement(
                "div",
                {
                  key: e.timestamp + "_" + n,
                  style: i,
                  className: Object(k.a)(
                    W.a.Snowflake,
                    W.a["Snowflake-" + (n % 20)]
                  ),
                },
                le(r),
                le(r + 1)
              )
            );
          }
          return o.createElement(o.Fragment, null, " ", t, " ");
        }),
      };
      let ge = class extends o.Component {
        render() {
          return o.createElement(
            "div",
            { className: W.a["animation-container"] },
            this.props.effectManager.m_rgRunningEffects.map((e) =>
              o.createElement(o.Fragment, { key: e.timestamp }, e.render())
            )
          );
        }
      };
      ge = Object(i.b)([d.a], ge);
      var fe = a("cOvF"),
        he = a("FA79"),
        be = (a("kMdN"), a("ztGc"), a("FKEV")),
        Ce = a("kWcV"),
        Ie = a("ehaW"),
        ye = a("9+KW");
      function we(e) {
        const { link: t, className: a } = e,
          n = Object(i.c)(e, ["link", "className"]),
          [r, o] = s.a.useState(!1);
        return s.a.createElement(
          "div",
          {
            title: Object(f.g)("#ToolTip_CopyLinkToClipboard"),
            className: Object(k.a)(ye.Button, a),
            onClick: () =>
              (() => {
                const e = document.createElement("input");
                (e.value = t),
                  (e.className = ye.HiddenInput),
                  document.body.appendChild(e),
                  e.select(),
                  e.ownerDocument.execCommand("copy"),
                  document.body.removeChild(e),
                  o(!0);
              })(),
          },
          s.a.createElement(
            fe.t,
            Object.assign({}, n, {
              className: Object(k.a)(ye.Icon),
              "data-flash": r ? 1 : 0,
              onAnimationEnd: () => o(!1),
            })
          )
        );
      }
      var Me = a("Rbfr"),
        Ee = a("26vX");
      function ve(e) {
        return (t) => {
          var { className: a } = t,
            n = Object(i.c)(t, ["className"]);
          return s.a.createElement(
            Me.a,
            Object.assign({ className: Object(k.a)(e, a) }, n)
          );
        };
      }
      const Ne = ve(Ee.GrayButton),
        je = ve(Ee.BlueButton),
        Se = ve(Ee.GreenButton);
      var Oe = a("mw7S"),
        Ae = a("RV7a"),
        De = (a("d4Nf"), a("jWvk")),
        xe = a("r0f0");
      function Be(e, t) {
        Object(b.b)(
          s.a.createElement(Fe, { definitionid: t }),
          e ? Object(C.o)(e) : window
        );
      }
      function Le(e, t, a, n) {
        const r = {
          type: 1,
          rewardDefinition: t,
          itemLevel: a,
          desiredItemLevel: a,
        };
        Object(b.b)(
          s.a.createElement(ze, { definition: r, saleitem: n }),
          e ? Object(C.o)(e) : window
        );
      }
      function Pe(e, t, a, n) {
        const r = {
          type: 3,
          profileCustomizationType: t,
          itemCount: a,
          itemLevel: n,
          desiredItemLevel: n,
        };
        Object(b.b)(
          s.a.createElement(ze, { definition: r }),
          e ? Object(C.o)(e) : window
        );
      }
      function Re(e, t, a, n) {
        const r = {
          type: 2,
          profileCustomizationType: t,
          itemLevel: a,
          desiredItemLevel: n,
        };
        Object(b.b)(
          s.a.createElement(ze, { definition: r }),
          e ? Object(C.o)(e) : window
        );
      }
      function ke(e, t) {
        const a = { type: 1, rewardDefinition: t };
        Object(b.b)(
          s.a.createElement(He, { definition: a }),
          e ? Object(C.o)(e) : window
        );
      }
      function Te(e) {
        switch (e.type) {
          case 1:
            return h.b.Get().BCanRedeemPointsForItem(e.rewardDefinition);
          case 2:
            return h.b
              .Get()
              .BCanRedeemPointsForProfileShowcaseUpgrade(
                e.profileCustomizationType,
                e.itemLevel
              );
          case 3:
            return h.b
              .Get()
              .BCanRedeemPointsForProfileShowcaseSlot(
                e.profileCustomizationType,
                e.itemCount
              );
        }
        return !1;
      }
      function Ge(e) {
        switch (e.type) {
          case 1:
            if (1 == e.rewardDefinition.community_item_class)
              return h.b.Get().GetCostToLevelSeasonalBadge(e.itemLevel || 0);
            if (5 == e.rewardDefinition.type || 6 == e.rewardDefinition.type) {
              return h.b.Get().GetBundleOfferForUser(e.rewardDefinition)
                .point_cost;
            }
            return parseInt(e.rewardDefinition.point_cost);
          case 2:
            return h.b.Get().GetUpgradableProfileShowcaseCost();
          case 3:
            return h.b.Get().GetPurchasableProfileShowcaseSlotCost();
        }
        return 0;
      }
      function Fe(e) {
        const { definitionid: t } = e,
          a = Object(i.c)(e, ["definitionid"]),
          n = Object(m.d)(() => h.b.Get().GetRewardItem(t));
        if (!n) return null;
        const r = { type: 1, rewardDefinition: n };
        return s.a.createElement(ze, Object.assign({ definition: r }, a));
      }
      let ze = class extends s.a.Component {
        constructor(e) {
          super(e),
            (this.m_bShowTransitions = !1),
            (this.m_bIsMounted = !0),
            (this.state = {
              step: "loading",
              error: !1,
              requestInProgress: !1,
            }),
            (this.m_bShowTransitions = !0),
            (this.m_mutableObjDefinition = this.props.definition);
        }
        componentDidMount() {
          if (1 == this.m_mutableObjDefinition.type) {
            const e =
              this.m_mutableObjDefinition.rewardDefinition.bundle_defids;
            Object(c.M)(
              () =>
                !e ||
                0 == e.length ||
                h.b.Get().GetRewardDefinitions(...e).length > 0
            )
              .then(() => {
                let t = [];
                if (0 != (null == e ? void 0 : e.length)) {
                  t = h.b
                    .Get()
                    .GetRewardDefinitions(...e)
                    .map((e) => e.appid);
                } else
                  t.push(this.m_mutableObjDefinition.rewardDefinition.appid);
                let a = Array.from(new Set(t));
                return Promise.all(
                  a.map((e) => h.b.Get().EnsureCommunityItemInventoryLoaded(e))
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
            (this.BAlreadyEquipped()
              ? (this.setState({ step: "equipped" }),
                (this.m_bShowTransitions = !1))
              : this.BSkipToEquip()
              ? (this.setState({ step: "equip" }),
                (this.m_bShowTransitions = !1))
              : h.b.Get().BIsLoggedIn() && !this.BCanRedeemPointsForItem()
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
          return this.props.saleitem && h.b.Get().BIsSaleActive();
        }
        BCanRedeemPointsForItem() {
          return Te(this.props.definition);
        }
        BSkipToCantAfford() {
          if (
            2 == this.props.definition.type ||
            3 == this.props.definition.type
          )
            return h.b.Get().BIsLoggedIn() && !this.BCanAffordItem();
          const e =
            h.b
              .Get()
              .BRewardOwnedByUser(this.props.definition.rewardDefinition) &&
            2 != this.props.definition.rewardDefinition.type;
          return h.b.Get().BIsLoggedIn() && !e && !this.BCanAffordItem();
        }
        BAlreadyEquipped() {
          return (function (e) {
            switch (e.type) {
              case 1:
                return h.b.Get().BRewardEquippedByUser(e.rewardDefinition);
              case 2:
                return !h.b
                  .Get()
                  .BCanRedeemPointsForProfileShowcaseUpgrade(
                    e.profileCustomizationType,
                    e.itemLevel
                  );
              case 3:
                return !h.b
                  .Get()
                  .BCanRedeemPointsForProfileShowcaseSlot(
                    e.profileCustomizationType,
                    e.itemCount
                  );
            }
            return !0;
          })(this.props.definition);
        }
        BSkipToEquip() {
          return (
            2 != this.props.definition.type &&
            3 != this.props.definition.type &&
            !(
              !h.b
                .Get()
                .BRewardOwnedByUser(this.props.definition.rewardDefinition) ||
              !(
                (2 == this.props.definition.rewardDefinition.type &&
                  h.b.Get().GetUserSeasonalBadgeLevel() >=
                    this.props.definition.itemLevel) ||
                1 == this.props.definition.rewardDefinition.type ||
                5 == this.props.definition.rewardDefinition.type ||
                6 == this.props.definition.rewardDefinition.type
              )
            )
          );
        }
        GetPointCost() {
          return Ge(this.props.definition);
        }
        BCanAffordItem() {
          return (
            h.b.Get().GetPointsAvailable().getLowBits() >= this.GetPointCost()
          );
        }
        ShowGenericError() {
          this.ShowError(
            Object(f.p)(
              "#Redeem_Error_Generic",
              s.a.createElement(
                "a",
                { href: I.d.HELP_BASE_URL },
                Object(f.g)("#Redeem_Error_SteamSupport")
              )
            )
          );
        }
        ShowError(e) {
          e && (this.m_strError = e),
            this.setState({ error: !0, requestInProgress: !1 });
        }
        RedeemPoints() {
          if (!this.state.requestInProgress) {
            if (!h.b.Get().BIsLoggedIn())
              return (
                this.CloseModal(),
                void h.b
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
                      ? h.c
                          .Get()
                          .ClaimFreeSaleItem()
                          .then((e) => {
                            var t;
                            1 == e.eResult
                              ? ((this.m_mutableObjDefinition.rewardDefinition =
                                  h.c.Get().GetClaimedSaleRewardItemDef()),
                                this.setState({
                                  step: "equip",
                                  requestInProgress: !1,
                                }))
                              : (
                                  null === (t = e.strMessage) || void 0 === t
                                    ? void 0
                                    : t.length
                                )
                              ? this.ShowError(e.strMessage)
                              : this.ShowGenericError();
                          })
                          .catch(this.ShowGenericError)
                      : h.b
                          .Get()
                          .RedeemPointsForItem(
                            this.props.definition.rewardDefinition.defid,
                            this.props.definition.rewardDefinition.appid
                          )
                          .then((e) => {
                            1 == e.eResult
                              ? this.setState({
                                  step: "equip",
                                  requestInProgress: !1,
                                })
                              : e.strMessage.length
                              ? this.ShowError(e.strMessage)
                              : this.ShowGenericError();
                          })
                          .catch(this.ShowGenericError);
                    break;
                  case 4:
                    h.b
                      .Get()
                      .RedeemPointsForCoupon(
                        this.props.definition.rewardDefinition.defid
                      )
                      .then((e) => {
                        1 == e.eResult
                          ? this.setState({
                              step: "equip",
                              requestInProgress: !1,
                            })
                          : this.ShowGenericError();
                      })
                      .catch(this.ShowGenericError);
                    break;
                  case 2: {
                    let e = Math.max(
                      this.props.definition.itemLevel -
                        h.b.Get().GetUserSeasonalBadgeLevel(),
                      1
                    );
                    h.b
                      .Get()
                      .RedeemPointsForBadge(
                        this.props.definition.rewardDefinition.defid,
                        e
                      )
                      .then((e) => {
                        1 == e.eResult
                          ? this.setState({
                              step: "equip",
                              requestInProgress: !1,
                            })
                          : e.strMessage.length
                          ? this.ShowError(e.strMessage)
                          : this.ShowGenericError();
                      })
                      .catch(this.ShowGenericError);
                  }
                }
                break;
              case 2:
                h.b
                  .Get()
                  .RedeemPointsForProfileShowcaseUpgrade(
                    this.props.definition.profileCustomizationType,
                    this.props.definition.desiredItemLevel
                  )
                  .then((e) => {
                    1 == e.eResult
                      ? (this.setState({ requestInProgress: !1 }),
                        this.CloseModal())
                      : e.strMessage.length
                      ? this.ShowError(e.strMessage)
                      : this.ShowGenericError();
                  })
                  .catch(this.ShowGenericError);
                break;
              case 3:
                h.b
                  .Get()
                  .RedeemPointsForProfileShowcase(
                    this.props.definition.profileCustomizationType
                  )
                  .then((e) => {
                    1 == e.eResult
                      ? this.CloseModal()
                      : e.strMessage.length
                      ? this.ShowError(e.strMessage)
                      : this.ShowGenericError();
                  })
                  .catch(this.ShowGenericError);
            }
          }
        }
        EquipItem() {
          if (this.state.requestInProgress) return;
          this.setState({ requestInProgress: !0, error: !1 });
          let e = null;
          switch (this.props.definition.rewardDefinition.community_item_class) {
            case 3:
              e = h.b
                .Get()
                .SetProfileBackground(this.props.definition.rewardDefinition);
              break;
            case 14:
              e = h.b
                .Get()
                .SetAvatarFrame(this.props.definition.rewardDefinition);
              break;
            case 15:
              e = h.b
                .Get()
                .SetAnimatedAvatar(this.props.definition.rewardDefinition);
              break;
            case 13:
              e = h.b
                .Get()
                .SetMiniProfileBackground(
                  this.props.definition.rewardDefinition
                );
              break;
            case 8:
              e = h.b
                .Get()
                .ActivateProfileModifier(
                  this.props.definition.rewardDefinition
                );
              break;
            case 16:
              e = h.b
                .Get()
                .SetSteamDeckKeyboardSkin(
                  this.props.definition.rewardDefinition
                );
              break;
            default:
              return void Object(x.a)(
                !1,
                `Missing equip handler for item class ${this.props.definition.rewardDefinition.community_item_class}`
              );
          }
          e.then((e) => {
            1 == e.eResult
              ? this.setState({ step: "equipped", requestInProgress: !1 })
              : this.ShowGenericError();
          }).catch(this.ShowGenericError);
        }
        CloseModal() {
          this.props.closeModal && this.props.closeModal();
        }
        render() {
          var e;
          let t = {
            enter: _.RedeemModalEnter,
            enterActive: _.RedeemModalEnterActive,
            exit: _.RedeemModalExit,
            exitActive: _.RedeemModalExitActive,
          };
          if ("loading" == this.state.step) return null;
          const a = Ve(this.props.definition),
            n = We(this.props.definition),
            r = this.props.definition.rewardDefinition
              ? be.a.GetAppInfo(this.props.definition.rewardDefinition.appid)
              : null;
          let i = "";
          if (
            [1, 5, 6].includes(
              null === (e = this.props.definition.rewardDefinition) ||
                void 0 === e
                ? void 0
                : e.type
            )
          ) {
            i = `${document.location.href.split("/reward/")[0]}/reward/${
              this.props.definition.rewardDefinition.defid
            }`;
          }
          return s.a.createElement(
            Et,
            { onEscKeypress: this.CloseModal, destructive: this.state.error },
            s.a.createElement(
              g.d,
              { navID: "RedeemPoints", closeModal: this.CloseModal },
              s.a.createElement(
                De.b,
                null,
                s.a.createElement(
                  vt,
                  null,
                  s.a.createElement(Ue, {
                    itemName: a,
                    itemClassName: n,
                    itemLink: i,
                    appInfo: r,
                    onRequestClose: this.CloseModal,
                  }),
                  this.m_strError &&
                    s.a.createElement(
                      "div",
                      { className: _.ErrorContainer },
                      this.m_strError
                    ),
                  s.a.createElement(
                    A,
                    null,
                    s.a.createElement(
                      D.a,
                      {
                        key: this.state.step,
                        enter: this.m_bShowTransitions,
                        exit: this.m_bShowTransitions,
                        classNames: t,
                        timeout: 500,
                      },
                      s.a.createElement(ct, {
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
            )
          );
        }
      };
      Object(i.b)([p.b], ze.prototype, "ShowGenericError", null),
        Object(i.b)([p.b], ze.prototype, "ShowError", null),
        Object(i.b)([p.b], ze.prototype, "RedeemPoints", null),
        Object(i.b)([p.b], ze.prototype, "EquipItem", null),
        Object(i.b)([p.b], ze.prototype, "CloseModal", null),
        (ze = Object(i.b)([d.a], ze));
      const He = (e) => {
          const { definition: t, closeModal: a } = e,
            n = () => {},
            r = t.rewardDefinition
              ? be.a.GetAppInfo(t.rewardDefinition.appid)
              : null;
          return s.a.createElement(
            Et,
            { onEscKeypress: a },
            s.a.createElement(
              g.d,
              { navID: "RedeemPointsPreview", closeModal: a },
              s.a.createElement(
                De.b,
                null,
                s.a.createElement(
                  "div",
                  null,
                  s.a.createElement(
                    vt,
                    null,
                    s.a.createElement(Ue, {
                      itemName: Ve(t),
                      itemClassName: We(t),
                      appInfo: r,
                      onRequestClose: a,
                    }),
                    s.a.createElement(ct, {
                      definition: t,
                      closeModal: a,
                      redeemPoints: n,
                      equipItem: n,
                      step: "preview",
                      bRequestInProgress: !1,
                    })
                  )
                )
              )
            )
          );
        },
        Ue = Object(d.a)(
          ({
            itemName: e,
            itemClassName: t,
            itemLink: a,
            appInfo: n,
            onRequestClose: r,
          }) =>
            s.a.createElement(
              "div",
              { className: _.HeaderContainer },
              s.a.createElement(
                "div",
                { className: _.Left },
                s.a.createElement(
                  "div",
                  { className: _.Header },
                  e,
                  a &&
                    s.a.createElement(we, {
                      link: a,
                      style: { marginLeft: "8px" },
                    })
                ),
                s.a.createElement("div", { className: _.SubHeader }, t),
                n &&
                  s.a.createElement(
                    u.b,
                    { to: `${P.b.LoyaltyStore()}/app/` + n.appid, onClick: r },
                    s.a.createElement(
                      "div",
                      { className: _.SubHeaderAppContainer },
                      s.a.createElement("img", {
                        className: _.AppIcon,
                        src: n.icon_url,
                      }),
                      s.a.createElement(
                        "div",
                        { className: _.SubHeader },
                        " ",
                        n.name,
                        " "
                      )
                    )
                  )
              ),
              h.b.Get().BIsLoggedIn() &&
                s.a.createElement(
                  "div",
                  { className: _.PointsContainer },
                  s.a.createElement(R.P, { className: _.Icon }),
                  s.a.createElement(
                    "div",
                    { className: _.BalanceColumn },
                    s.a.createElement(
                      "div",
                      { className: _.Balance },
                      Object(f.g)("#YourBalance")
                    ),
                    s.a.createElement(
                      "div",
                      { className: _.CurrentPoints },
                      Object(xe.a)(h.b.Get().GetPointsAvailable().getLowBits())
                    )
                  )
                )
            )
        ),
        Ve = (e) =>
          2 == e.type || 3 == e.type
            ? Object(f.g)(
                "#ProfileShowcases_ShowcaseName",
                Object(f.g)(
                  "#ProfileShowcases_Type_" + e.profileCustomizationType
                )
              )
            : Ze(e.rewardDefinition),
        Ze = (e) => {
          if (1 == e.type)
            return (
              Object(x.a)(
                e.community_item_data,
                `Missing community item data for virtual item ${e.defid}`
              ),
              e.community_item_data.item_title
            );
          if (2 == e.type) return Object(f.g)("#Redeem_Badge_PrestigeBadge");
          if (5 == e.type) return e.community_item_data.item_title;
          if (6 == e.type) {
            const t = be.a.GetAppInfo(e.appid).name || "";
            return Object(f.g)("#RewardBundle_AutoGeneratedBundleName", t);
          }
          return "Unknown";
        },
        We = (e) => {
          var t;
          const {
            type: a,
            itemLevel: n,
            desiredItemLevel: r,
            rewardDefinition: i,
          } = e;
          switch (a) {
            case 2:
              return Te(e)
                ? Object(f.g)("#ProfileShowcases_UpgradeLevel", n, r)
                : Object(f.g)("#ProfileShowcases_UpgradeAtMaxLevel", n);
            case 3:
              return Object(f.g)("#ProfileShowcases_AdditionalSlot");
            case 1:
              if (1 == i.type || 2 == i.type)
                return i.appid != h.b.Get().GetCurrentSeasonalAppID() &&
                  8 == i.community_item_class &&
                  0 !=
                    (null === (t = i.bundle_defids) || void 0 === t
                      ? void 0
                      : t.length)
                  ? Object(f.g)("#RewardItemType_ProfileBundle")
                  : Object(h.d)(i.community_item_class);
              if (5 == i.type || 6 == i.type)
                return Object(f.g)("#RewardItemType_Bundle");
          }
          return "";
        },
        Ye =
          (Object(d.a)((e) => {
            const { animatedAvatar: t, persona: a, strClassName: n } = e,
              r = {
                size: "FillArea",
                statusPosition: "none",
                className: Object(k.a)(n, _.playerAvatar),
              };
            return s.a.createElement(
              he.d,
              Object.assign({ persona: a, animatedAvatar: t }, r)
            );
          }),
          Object(d.a)((e) => {
            const {
                animatedAvatar: t,
                avatarFrame: a,
                persona: n,
                className: r,
                strAnimatedAvatarClassName: i,
              } = e,
              o = {
                size: "FillArea",
                statusPosition: "none",
                className: Object(k.a)(i, _.playerAvatar),
              };
            return s.a.createElement(
              "div",
              { className: r },
              s.a.createElement(
                he.d,
                Object.assign({ persona: n, animatedAvatar: t }, o),
                s.a.createElement(he.c, { profileItem: a })
              )
            );
          }));
      class Qe extends s.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_Chat")
            : "saleitem" == this.props.step
            ? s.a.createElement(
                "div",
                null,
                Object(f.g)("#LunarSale2022_Redeem_Desc1"),
                s.a.createElement("br", null),
                s.a.createElement("br", null),
                Object(f.g)("#LunarSale2022_Redeem_Desc2")
              )
            : Object(f.g)("#Redeem_UsePoints_Sticker");
        }
        GetModalPreview() {
          if ("saleitem" == this.props.step)
            return s.a.createElement(
              Ct,
              { className: _.PreviewSummerSaleCtn, step: this.props.step },
              s.a.createElement("img", {
                className: _.SaleRewardImg,
                alt: "Free Sale Item",
                src: H.a,
              })
            );
          {
            const e = this.props.definition.rewardDefinition;
            let t = {
                backgroundImage:
                  "url(" +
                  I.d.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.appid +
                  "/" +
                  e.community_item_data.item_image_small +
                  ")",
              },
              a =
                I.d.MEDIA_CDN_COMMUNITY_URL +
                "images/items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_large;
            return s.a.createElement(
              Ct,
              { className: _.PreviewChat, step: this.props.step },
              s.a.createElement("div", { className: _.LargePreview, style: t }),
              s.a.createElement(It, { icon: a })
            );
          }
        }
        render() {
          return s.a.createElement(
            Mt,
            {
              className: Object(k.a)(
                _.StickerPreviewContainer,
                _.ChatPreviewContainer
              ),
            },
            this.GetModalPreview(),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
              {
                bRequestInProgress: this.props.bRequestInProgress,
                definition: this.props.definition,
                step: this.props.step,
                closeModal: this.props.closeModal,
                redeemPoints: this.props.redeemPoints,
              },
              s.a.createElement(ut, { closeModal: this.props.closeModal })
            )
          );
        }
      }
      class qe extends s.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_Profile")
            : "equipped" == this.props.step
            ? s.a.createElement(
                "div",
                { className: _.EquippedDesc },
                Object(f.p)(
                  "#Redeem_Equipped_Background",
                  s.a.createElement(
                    "span",
                    null,
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title
                  )
                )
              )
            : Object(f.g)("#Redeem_UsePoints_Background");
        }
        GetPreview() {
          const e = this.props.definition.rewardDefinition;
          let t = {
              backgroundImage:
                "url(" +
                I.d.MEDIA_CDN_COMMUNITY_URL +
                "images/items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_large +
                ")",
            },
            a = s.a.createElement("div", {
              className: _.LargePreview,
              style: t,
            });
          if (e.community_item_data.animated) {
            let t = e.community_item_data.item_movie_webm,
              n = e.community_item_data.item_movie_mp4;
            a = s.a.createElement(
              "video",
              {
                className: _.VideoPreview,
                playsInline: !0,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                controls: !1,
              },
              s.a.createElement("source", {
                src:
                  I.d.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.appid +
                  "/" +
                  t,
                type: "video/webm",
              }),
              s.a.createElement("source", {
                src:
                  I.d.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.appid +
                  "/" +
                  n,
                type: "video/mp4",
              })
            );
          }
          return a;
        }
        GetButtons() {
          return "equip" == this.props.step
            ? s.a.createElement(_t, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? s.a.createElement(gt, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          return s.a.createElement(
            Mt,
            { className: _.BackgroundPreviewContainer },
            s.a.createElement(
              Ct,
              {
                className: _.PreviewBackgroundContainer,
                step: this.props.step,
              },
              s.a.createElement("div", { className: _.PreviewBackground }),
              this.GetPreview()
            ),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
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
        }
      }
      class Xe extends s.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_Chat")
            : Object(f.g)("#Redeem_UsePoints_Emoticon");
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t =
              I.d.MEDIA_CDN_COMMUNITY_URL +
              "images/items/" +
              e.appid +
              "/" +
              e.community_item_data.item_image_small,
            a = {
              backgroundImage:
                "url(" +
                I.d.MEDIA_CDN_COMMUNITY_URL +
                "images/items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_large +
                ")",
            };
          return s.a.createElement(
            Mt,
            {
              className: Object(k.a)(
                _.EmoticonPreviewContainer,
                _.ChatPreviewContainer
              ),
            },
            s.a.createElement(
              Ct,
              { className: _.PreviewChat, step: this.props.step },
              s.a.createElement(
                "div",
                { className: _.LargePreviewContainer },
                s.a.createElement("div", {
                  className: _.LargePreview,
                  style: a,
                }),
                s.a.createElement("div", {
                  className: _.LargePreview,
                  style: a,
                }),
                s.a.createElement("div", {
                  className: _.LargePreview,
                  style: a,
                })
              ),
              s.a.createElement(It, { icon: t })
            ),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
              {
                bRequestInProgress: this.props.bRequestInProgress,
                definition: this.props.definition,
                step: this.props.step,
                closeModal: this.props.closeModal,
                redeemPoints: this.props.redeemPoints,
              },
              s.a.createElement(ut, { closeModal: this.props.closeModal })
            )
          );
        }
      }
      let Je = class extends s.a.Component {
        constructor() {
          super(...arguments), (this.m_manager = new V.a(_e));
        }
        GetEffectTypeForDefinition() {
          return this.props.definition.rewardDefinition.internal_description;
        }
        GetEffectConfig() {
          return _e[this.GetEffectTypeForDefinition()];
        }
        componentDidMount() {
          const e = this.GetEffectTypeForDefinition();
          this.m_manager.AddRoomEffect(e),
            (this.m_interval = window.setInterval(
              () => this.m_manager.AddRoomEffect(e),
              this.GetEffectConfig().timeout
            ));
        }
        componentWillUnmount() {
          window.clearInterval(this.m_interval);
        }
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_Chat")
            : Object(f.g)("#Redeem_UsePoints_ChatEffect");
        }
        render() {
          return s.a.createElement(
            Mt,
            {
              className: Object(k.a)(
                _.EmoticonPreviewContainer,
                _.ChatPreviewContainer
              ),
            },
            s.a.createElement(
              Ct,
              { className: _.PreviewChat, step: this.props.step },
              s.a.createElement(
                "div",
                { className: _.PreviewEffectContainer },
                s.a.createElement(ge, { effectManager: this.m_manager })
              ),
              s.a.createElement(It, null, this.GetEffectConfig().renderButton())
            ),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
              {
                bRequestInProgress: this.props.bRequestInProgress,
                definition: this.props.definition,
                step: this.props.step,
                closeModal: this.props.closeModal,
                redeemPoints: this.props.redeemPoints,
              },
              s.a.createElement(ut, { closeModal: this.props.closeModal })
            )
          );
        }
      };
      Je = Object(i.b)([d.a], Je);
      class $e extends s.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_Profile")
            : "equipped" == this.props.step
            ? s.a.createElement(
                "div",
                { className: _.EquippedDesc },
                Object(f.p)(
                  "#Redeem_Equipped_MiniProfile",
                  s.a.createElement(
                    "span",
                    null,
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title
                  )
                )
              )
            : Object(f.g)("#Redeem_UsePoints_MiniProfile");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? s.a.createElement(_t, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? s.a.createElement(
                Ne,
                { onClick: this.props.closeModal },
                Object(f.g)("#Button_Close")
              )
            : null;
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t = h.b.Get().GetEquippedItems(),
            a = h.b.Get().GetPersonaState(),
            n = s.a.createElement(Ye, {
              animatedAvatar: t.animated_avatar,
              persona: a,
              avatarFrame: t.avatar_frame,
              className: _.CurrentAvatar,
            });
          return s.a.createElement(
            Mt,
            { className: _.MiniProfilePreviewContainer },
            s.a.createElement(
              Ct,
              {
                className: _.PreviewBackgroundContainer,
                step: this.props.step,
              },
              s.a.createElement(
                "div",
                { className: _.ProfileContainer },
                s.a.createElement(
                  "video",
                  {
                    width: "100%",
                    playsInline: !0,
                    loop: !0,
                    muted: !0,
                    autoPlay: !0,
                    controls: !1,
                  },
                  s.a.createElement("source", {
                    src:
                      I.d.MEDIA_CDN_COMMUNITY_URL +
                      "images/items/" +
                      e.appid +
                      "/" +
                      e.community_item_data.item_movie_webm,
                    type: "video/webm",
                  }),
                  s.a.createElement("source", {
                    src:
                      I.d.MEDIA_CDN_COMMUNITY_URL +
                      "images/items/" +
                      e.appid +
                      "/" +
                      e.community_item_data.item_movie_mp4,
                    type: "video/mp4",
                  })
                ),
                s.a.createElement(
                  "div",
                  { className: _.ProfileImage },
                  h.b.Get().BIsLoggedIn() && n
                ),
                s.a.createElement("div", {
                  className: Object(k.a)(
                    _.ImageBlur,
                    "miniprofile_backdropblur"
                  ),
                })
              )
            ),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
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
        }
      }
      class Ke extends s.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_Profile")
            : "equipped" == this.props.step
            ? s.a.createElement(
                "div",
                { className: _.EquippedDesc },
                Object(f.p)(
                  "#Redeem_Equipped_AvatarFrame",
                  s.a.createElement(
                    "span",
                    null,
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title
                  )
                )
              )
            : Object(f.g)("#Redeem_UsePoints_AvatarFrame");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? s.a.createElement(_t, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? s.a.createElement(gt, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t = h.b.Get().GetEquippedItems(),
            a = h.b.Get().GetPersonaState(),
            n = {
              appid: e.appid,
              image_small:
                "items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_small,
            },
            r = s.a.createElement(Ye, {
              animatedAvatar: t.animated_avatar,
              persona: a,
              avatarFrame: n,
              strAnimatedAvatarClassName: _.CurrentAvatar,
            }),
            i = null;
          return (
            "equipped" != this.props.step &&
              h.b.Get().BIsLoggedIn() &&
              (i = s.a.createElement(
                "div",
                { className: _.CurrentlyEquippedAvatarAndFrame },
                s.a.createElement(Ye, {
                  className: _.PreviewCurrentAvatar,
                  animatedAvatar: t.animated_avatar,
                  persona: a,
                  avatarFrame: t.avatar_frame,
                  strAnimatedAvatarClassName: _.CurrentAvatar,
                }),
                s.a.createElement(
                  "div",
                  { className: _.CurrentlyEquippedAvatarAndFrameDesc },
                  Object(f.g)("#Redeem_Equipped_CurrentAvatarFrame")
                )
              )),
            s.a.createElement(
              Mt,
              { className: _.AvatarPreviewContainer },
              s.a.createElement(
                Ct,
                {
                  className: Object(k.a)(_.PreviewBackgroundContainer, _.Frame),
                  step: this.props.step,
                },
                s.a.createElement(
                  "div",
                  { className: Object(k.a)(_.ItemPreview, _.TopAvatar) },
                  r
                ),
                s.a.createElement(
                  "div",
                  { className: Object(k.a)(_.ItemPreview, _.BottomAvatar) },
                  r
                )
              ),
              i,
              s.a.createElement(wt, {
                definition: this.props.definition,
                step: this.props.step,
                description: this.GetDescription(),
              }),
              s.a.createElement(
                bt,
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
        }
      }
      class et extends s.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_AnimatedAvatar")
            : "equipped" == this.props.step
            ? s.a.createElement(
                "div",
                { className: _.EquippedDesc },
                Object(f.p)(
                  "#Redeem_Equipped_AnimatedAvatar",
                  s.a.createElement(
                    "span",
                    null,
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title
                  )
                )
              )
            : Object(f.g)("#Redeem_UsePoints_AnimatedAvatar");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? s.a.createElement(_t, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? s.a.createElement(gt, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t = h.b.Get().GetEquippedItems(),
            a = h.b.Get().GetPersonaState(),
            n = {
              appid: e.appid,
              image_small:
                "items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_small,
            },
            r = s.a.createElement(Ye, {
              animatedAvatar: n,
              persona: a,
              avatarFrame: t.avatar_frame,
              strAnimatedAvatarClassName: _.CurrentAvatar,
            }),
            i = null;
          return (
            "equipped" != this.props.step &&
              h.b.Get().BIsLoggedIn() &&
              (i = s.a.createElement(
                "div",
                { className: _.CurrentlyEquippedAvatarAndFrame },
                s.a.createElement(Ye, {
                  className: _.PreviewCurrentAvatar,
                  animatedAvatar: t.animated_avatar,
                  persona: a,
                  avatarFrame: t.avatar_frame,
                  strAnimatedAvatarClassName: _.CurrentAvatar,
                }),
                s.a.createElement(
                  "div",
                  { className: _.CurrentlyEquippedAvatarAndFrameDesc },
                  Object(f.g)("#Redeem_Equipped_CurrentAvatar")
                )
              )),
            s.a.createElement(
              Mt,
              { className: _.AvatarPreviewContainer },
              s.a.createElement(
                Ct,
                {
                  className: Object(k.a)(
                    _.PreviewBackgroundContainer,
                    _.Animated
                  ),
                  step: this.props.step,
                },
                s.a.createElement(
                  "div",
                  { className: Object(k.a)(_.ItemPreview, _.TopAvatar) },
                  r
                ),
                s.a.createElement(
                  "div",
                  { className: Object(k.a)(_.ItemPreview, _.BottomAvatar) },
                  r
                )
              ),
              i,
              s.a.createElement(wt, {
                definition: this.props.definition,
                step: this.props.step,
                description: this.GetDescription(),
              }),
              s.a.createElement(
                bt,
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
        }
      }
      class tt extends s.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_SteamDeckKeyboardSkin")
            : Object(f.g)("#Redeem_UsePoints_SteamDeckKeyboardSkin");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? s.a.createElement(_t, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : null;
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t =
            I.d.MEDIA_CDN_COMMUNITY_URL +
            "images/items/" +
            e.appid +
            "/" +
            e.community_item_data.item_image_large;
          return s.a.createElement(
            Mt,
            { className: Object(k.a)(_.KeyboardSkinPreviewContainer) },
            s.a.createElement(
              Ct,
              { className: _.LargePreview, step: this.props.step },
              s.a.createElement("img", {
                className: _.KeyboardPreviewImg,
                src: t,
              })
            ),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
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
        }
      }
      let at = class extends s.a.Component {
        GetDescription() {
          return Object(f.g)("#Redeem_UsePoints_Badge");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? s.a.createElement(gt, { closeModal: this.props.closeModal })
            : null;
        }
        GetPreviewForLevel() {
          let e = h.b.Get().GetUserSeasonalBadgeLevel();
          return "equip" == this.props.step
            ? s.a.createElement(yt, {
                definition: this.props.definition.rewardDefinition,
                badgeLevel: e,
                title: Object(f.g)("#Redeem_Badge_CurrentLevel"),
              })
            : 0 == e
            ? s.a.createElement(yt, {
                definition: this.props.definition.rewardDefinition,
                badgeLevel: this.props.definition.itemLevel,
                title: Object(f.g)("#Redeem_Badge_AfterPoints"),
              })
            : s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(yt, {
                  definition: this.props.definition.rewardDefinition,
                  badgeLevel: e,
                  title: Object(f.g)("#Redeem_Badge_CurrentLevel"),
                }),
                s.a.createElement(
                  "div",
                  { className: Object(k.a)(_.BadgeColumn, _.ArrowColumn) },
                  s.a.createElement("div", { className: _.BlueArrow })
                ),
                s.a.createElement(yt, {
                  definition: this.props.definition.rewardDefinition,
                  badgeLevel: this.props.definition.itemLevel,
                  title: Object(f.g)("#Redeem_Badge_AfterPoints"),
                })
              );
        }
        render() {
          return this.props.definition.rewardDefinition.community_item_data
            .badge_data[this.props.definition.itemLevel - 1]
            ? s.a.createElement(
                Mt,
                { className: _.BadgeItemContainer },
                s.a.createElement(
                  Ct,
                  { className: _.BadgePreviewContainer },
                  this.GetPreviewForLevel()
                ),
                s.a.createElement(wt, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                s.a.createElement(
                  bt,
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
                `Missing badge level ${this.props.definition.itemLevel} image`
              ),
              null);
        }
      };
      at = Object(i.b)([d.a], at);
      class nt extends s.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_Coupon")
            : Object(f.g)("#Redeem_UsePoints_Coupon");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? s.a.createElement(_t, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? s.a.createElement(gt, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          return s.a.createElement(
            Mt,
            { className: _.CouponPreviewContainer },
            s.a.createElement(Ct, {
              className: _.PreviewBackgroundContainer,
              step: this.props.step,
            }),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
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
        }
      }
      class rt extends s.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_GoldenProfile")
            : "equipped" == this.props.step
            ? Object(f.g)("#Redeem_Equipped_GoldenProfile")
            : Object(f.g)("#Redeem_UsePoints_GoldenProfile");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? s.a.createElement(_t, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? s.a.createElement(gt, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          var e;
          const { definition: t } = this.props;
          let a = h.b.Get().GetPersonaState(),
            n = h.b.Get().GetEquippedItems(),
            r = h.b
              .Get()
              .GetGoldenProfileConfigForApp(t.rewardDefinition.appid);
          if (
            !r &&
            0 ==
              (null === (e = t.rewardDefinition.bundle_defids) || void 0 === e
                ? void 0
                : e.length)
          )
            return null;
          if (!r) {
            r = { appid: t.rewardDefinition.appid, frame: "" };
            let e = h.b
              .Get()
              .GetRewardDefinitions(...t.rewardDefinition.bundle_defids)
              .filter((e) => 14 == e.community_item_class);
            0 != (null == e ? void 0 : e.length) &&
              (r.frame =
                "items/" +
                t.rewardDefinition.appid +
                "/" +
                e[0].community_item_data.item_image_small);
          }
          let i = { image_small: r.frame };
          return s.a.createElement(
            Mt,
            { className: _.GoldenProfileContainer },
            s.a.createElement(
              Ct,
              {
                className: _.GoldenProfilePreviewContainer,
                step: this.props.step,
              },
              s.a.createElement(
                "div",
                { className: _.AvatarContainer },
                s.a.createElement(he.b, {
                  size: "FillArea",
                  className: _.CurrentAvatar,
                  persona: a,
                  animatedAvatar: n.animated_avatar,
                  avatarFrame: i,
                })
              )
            ),
            s.a.createElement(
              wt,
              {
                definition: this.props.definition,
                step: this.props.step,
                description: this.GetDescription(),
              },
              s.a.createElement(
                mt,
                null,
                Object(f.g)("#Redeem_GoldenProfile_Expiration")
              )
            ),
            s.a.createElement(
              bt,
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
        }
      }
      class it extends s.a.Component {
        constructor(e) {
          super(e),
            (this.OnProfileFrameResized = (e) => {
              e.data.message &&
                "iframe_dimensions" == e.data.message &&
                this.setState({ iframeHeight: e.data.height });
            }),
            (this.state = { bLoadedIFrame: !1, iframeHeight: 0 });
        }
        componentDidMount() {
          window.addEventListener("message", this.OnProfileFrameResized);
        }
        componentWillUnmount() {
          window.removeEventListener("message", this.OnProfileFrameResized);
        }
        OnProfileFrameLoaded() {
          this.setState({ bLoadedIFrame: !0 });
        }
        GetDescription() {
          const e = Object(f.g)(
            "#ProfileShowcases_Type_" +
              this.props.definition.profileCustomizationType
          );
          if ("equipped" == this.props.step)
            return 2 == this.props.definition.type
              ? Object(f.g)(
                  "#Redeem_Equipped_ProfileShowcaseUpgraded",
                  e,
                  this.props.definition.itemLevel
                )
              : Object(f.g)("#Redeem_Equipped_ProfileShowcaseSlotPurchased", e);
          if (2 == this.props.definition.type)
            return Object(f.g)(
              "#Redeem_UsePoints_ProfileShowcaseUpgrade",
              this.props.definition.desiredItemLevel
            );
          const t = h.b.Get().GetMaxProfileShowcaseSlots();
          return Object(f.g)("#Redeem_UsePoints_ProfileShowcaseSlot", e, t + 1);
        }
        GetButtons() {
          return "equip" == this.props.step
            ? s.a.createElement(_t, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? s.a.createElement(gt, { closeModal: this.props.closeModal })
            : null;
        }
        GetProfileSteamID() {
          return h.b.Get().BIsLoggedIn()
            ? I.l.steamid
            : 2 == I.d.EUNIVERSE
            ? "148618792083695825"
            : "76561197960266962";
        }
        render() {
          const e = this.state.bLoadedIFrame;
          let t = Object(Ie.b)(this.props.definition.profileCustomizationType);
          const a = this.props.definition.profileCustomizationType,
            n = Math.min(
              this.props.definition.desiredItemLevel
                ? this.props.definition.desiredItemLevel
                : this.props.definition.itemLevel,
              h.b.Get().GetMaxProfileShowcaseUpgradeLevel()
            ),
            r = 0.5 * this.state.iframeHeight;
          return s.a.createElement(
            Mt,
            { className: _.ProfileShowcaseContainer },
            s.a.createElement(
              Ct,
              {
                className: Object(k.a)(
                  _.ProfileShowcasePreviewContainer,
                  e ? _.LoadedPreview : _.LoadingPreview
                ),
                step: this.props.step,
              },
              s.a.createElement("img", {
                className: _.ProfileShowcaseIcon,
                src: t,
              }),
              !e &&
                s.a.createElement(
                  "div",
                  { className: _.ProfileThrobber },
                  s.a.createElement(Ce.a, {
                    position: "center",
                    size: "xlarge",
                    string: Object(f.g)(
                      "#ProfileShowcases_LoadingPreview",
                      Object(f.g)("#ProfileShowcases_Type_" + a)
                    ),
                  })
                ),
              s.a.createElement(
                "div",
                {
                  className: _.PreviewShowcasePreviewFrameContainer,
                  style: { height: 0 != r ? r + "px" : "1px" },
                },
                s.a.createElement("iframe", {
                  className: _.PreviewShowcasePreviewFrame,
                  src:
                    I.d.COMMUNITY_BASE_URL +
                    "profiles/" +
                    this.GetProfileSteamID() +
                    `/previewsingleshowcase/?customization_type=${a}&level=${n}`,
                  frameBorder: 0,
                  scrolling: "no",
                  onLoad: () => {
                    this.OnProfileFrameLoaded();
                  },
                })
              )
            ),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
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
        }
      }
      class ot extends s.a.Component {
        constructor(e) {
          super(e);
        }
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_Bundle")
            : Object(f.g)("#Redeem_UsePoints_Bundle");
        }
        GetButtons() {
          return "equip" == this.props.step || "equipped" == this.props.step
            ? s.a.createElement(gt, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          const e = h.b
            .Get()
            .GetBundleOfferForUser(this.props.definition.rewardDefinition)
            .items.map((e) => {
              const t = e.community_item_data.item_image_large;
              let a = Object(Oe.a)(e.appid, t);
              3 == e.community_item_class &&
                (a =
                  I.d.COMMUNITY_BASE_URL +
                  "economy/profilebackground/items/" +
                  e.appid +
                  "/" +
                  e.community_item_data.item_image_large +
                  "?size=320x200");
              const n = h.b.Get().BRewardOwnedByUser(e);
              return s.a.createElement(
                Ae.a,
                {
                  key: e.defid,
                  padding: "xxsmall",
                  className: _.BundleItemPreview,
                },
                s.a.createElement(
                  "div",
                  { className: _.BundleItemPreviewImage },
                  s.a.createElement("img", { src: a })
                ),
                s.a.createElement(
                  "div",
                  null,
                  s.a.createElement(
                    "div",
                    { className: _.BundleChildItemName },
                    e.community_item_data.item_title
                  ),
                  s.a.createElement(
                    "div",
                    { className: _.BundleChildItemClass },
                    Object(h.d)(e.community_item_class)
                  )
                ),
                n &&
                  s.a.createElement(
                    "div",
                    { className: _.BundleChildItemOwned },
                    s.a.createElement(fe.j, { className: _.OwnedCheckmark }),
                    "redeem" == this.props.step &&
                      Object(f.g)("#Redeem_BundleItemOwned")
                  )
              );
            });
          return s.a.createElement(
            Mt,
            { className: _.BundleItemContainer },
            s.a.createElement(
              "div",
              { className: _.BundleItemPreviewContainer },
              e
            ),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
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
        }
      }
      class st extends s.a.Component {
        constructor(e) {
          super(e), (this.state = { bLoadedIFrame: !1 });
        }
        OnIFrameLoaded() {
          this.setState({ bLoadedIFrame: !0 });
        }
        GetProfileSteamID() {
          return h.b.Get().BIsLoggedIn()
            ? I.l.steamid
            : 2 == I.d.EUNIVERSE
            ? "148618792083695825"
            : "76561197960266962";
        }
        GetDescription() {
          return "equip" == this.props.step
            ? Object(f.g)("#Redeem_Equip_ProfileBundle")
            : Object(f.g)("#Redeem_UsePoints_ProfileBundle");
        }
        GetButtons() {
          return "equip" == this.props.step || "equipped" == this.props.step
            ? s.a.createElement(gt, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          const { bLoadedIFrame: e } = this.state,
            t = h.b
              .Get()
              .GetBundleOfferForUser(this.props.definition.rewardDefinition),
            a = this.props.definition.rewardDefinition.appid,
            n = this.props.definition.rewardDefinition.community_item_type,
            r = t.items.map((e) => {
              let t = Object(Oe.b)(e);
              const a = h.b.Get().BRewardOwnedByUser(e),
                n = 8 == e.community_item_class;
              return s.a.createElement(
                Ae.a,
                {
                  key: e.defid,
                  padding: "xxsmall",
                  className: Object(k.a)(
                    _.BundleItemPreview,
                    n && _.ProfileModifier
                  ),
                },
                s.a.createElement(
                  "div",
                  { className: _.BundleItemPreviewImage },
                  s.a.createElement("img", { src: t })
                ),
                s.a.createElement(
                  "div",
                  null,
                  s.a.createElement(
                    "div",
                    { className: _.BundleChildItemName },
                    e.community_item_data.item_title
                  ),
                  s.a.createElement(
                    "div",
                    { className: _.BundleChildItemClass },
                    Object(h.d)(e.community_item_class)
                  )
                ),
                a &&
                  s.a.createElement(
                    "div",
                    { className: _.BundleChildItemOwned },
                    s.a.createElement(fe.j, { className: _.OwnedCheckmark }),
                    "redeem" == this.props.step &&
                      Object(f.g)("#Redeem_ProfileBundleItemOwned")
                  )
              );
            }),
            i =
              I.d.COMMUNITY_BASE_URL +
              "profiles/" +
              this.GetProfileSteamID() +
              "?previewprofile=1&appid=" +
              a +
              "&itemtype=" +
              n;
          return s.a.createElement(
            Mt,
            {
              className: Object(k.a)(
                _.BundleItemContainer,
                e ? _.LoadedPreview : _.LoadingPreview
              ),
            },
            !e &&
              s.a.createElement(
                "div",
                { className: _.ProfileThrobber },
                s.a.createElement(Ce.a, {
                  position: "center",
                  size: "xlarge",
                  string: Object(f.g)(
                    "#ProfileBundle_LoadingPreview",
                    Ze(this.props.definition.rewardDefinition)
                  ),
                })
              ),
            s.a.createElement(
              "div",
              { className: _.PreviewProfileBundleFrameContainer },
              s.a.createElement("iframe", {
                className: _.PreviewProfileBundleFrame,
                src: i,
                frameBorder: 0,
                scrolling: "no",
                onLoad: () => {
                  this.OnIFrameLoaded();
                },
              })
            ),
            s.a.createElement(
              "div",
              { className: _.PreviewLinkContainer },
              s.a.createElement(
                "a",
                { href: i, target: "_blank", className: _.PreviewLink },
                Object(f.g)("#ProfileModifier_PreviewLinkText")
              )
            ),
            s.a.createElement(
              "div",
              { className: _.BundleItemPreviewContainer },
              r
            ),
            s.a.createElement(wt, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            s.a.createElement(
              bt,
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
        }
      }
      const lt = {
          11: Qe,
          3: qe,
          4: Xe,
          13: $e,
          14: Ke,
          15: et,
          1: at,
          12: Je,
          8: rt,
          16: tt,
        },
        ct = Object(d.a)((e) => {
          var t;
          let a = null;
          switch (e.definition.type) {
            case 3:
            case 2:
              a = it;
              break;
            case 1:
              a =
                5 == e.definition.rewardDefinition.type ||
                6 == e.definition.rewardDefinition.type
                  ? ot
                  : 8 == e.definition.rewardDefinition.community_item_class &&
                    0 !=
                      (null ===
                        (t = e.definition.rewardDefinition.bundle_defids) ||
                      void 0 === t
                        ? void 0
                        : t.length)
                  ? st
                  : lt[e.definition.rewardDefinition.community_item_class];
          }
          return a
            ? s.a.createElement(a, Object.assign({}, e))
            : 4 == e.definition.rewardDefinition.type
            ? s.a.createElement(nt, Object.assign({}, e))
            : null;
        }),
        mt = (e) => {
          const { className: t } = e,
            a = Object(i.c)(e, ["className"]);
          return s.a.createElement(
            "div",
            Object.assign(
              { className: Object(k.a)(_.WarningTextContainer, e.className) },
              a
            ),
            s.a.createElement(R.ub, { className: _.TimeWarning }),
            e.children
          );
        },
        dt = (e) => {
          const {
            cost: t,
            discount: a,
            originalCost: n,
            redeemPoints: r,
            closeModal: i,
          } = e;
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(pt, {
              cost: t,
              discount: a,
              originalCost: n,
              onClick: r,
            }),
            s.a.createElement(Ne, { onClick: i }, Object(f.g)("#Button_Cancel"))
          );
        },
        pt = (e) => {
          const {
            cost: t,
            discount: a,
            originalCost: n,
            onClick: r,
            className: i,
          } = e;
          if (a) {
            const e = a ? Object(xe.a)(n) : "",
              o = h.b.Get().BIsLoggedIn()
                ? s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(
                      "div",
                      { className: _.OriginalCost },
                      " ",
                      e,
                      " ",
                      Object(f.g)("#Rewards_Points"),
                      " "
                    ),
                    s.a.createElement(
                      B.a,
                      { amount: t },
                      " ",
                      t > 0 && Object(f.g)("#Rewards_Points")
                    )
                  )
                : s.a.createElement("span", null, Object(f.g)("#Button_Login"));
            return s.a.createElement(
              l.a,
              { className: Object(k.a)(_.RedeemButton, i), onActivate: r },
              s.a.createElement(
                "div",
                { className: _.DiscountContainer },
                "-",
                a,
                "%"
              ),
              s.a.createElement("div", { className: _.CostContainer }, o)
            );
          }
          const o = h.b.Get().BIsLoggedIn()
            ? s.a.createElement(
                B.a,
                { size: 1.125, amount: t },
                " ",
                t > 0 && Object(f.g)("#Rewards_Points")
              )
            : s.a.createElement("span", null, Object(f.g)("#Button_Login"));
          return s.a.createElement(
            l.a,
            { className: Object(k.a)(_.RedeemButton, i), onActivate: r },
            s.a.createElement("div", { className: _.CostContainer }, o)
          );
        },
        ut = (e) => {
          const { closeModal: t } = e,
            a = () => {
              (window.location.href = "steam://open/friends"), t();
            },
            n = () => {
              window.open(
                I.d.CHAT_BASE_URL + "chat",
                "height=790,width=1015,resize=yes,scrollbars=yes"
              ),
                t();
            },
            r = () => {
              F.BClientSupportsMessage("OpenFriendsDialog")
                ? F.OpenFriendsDialog()
                    .then((e) => {
                      e.success || a();
                    })
                    .catch(a)
                : a();
            };
          return I.d.IN_CLIENT
            ? s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(
                  Se,
                  { onClick: a },
                  Object(f.g)("#Button_Goto_Chat")
                ),
                s.a.createElement(
                  Ne,
                  { onClick: t },
                  Object(f.g)("#Button_Later")
                )
              )
            : s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(
                  Se,
                  { onClick: n },
                  Object(f.g)("#Button_Goto_WebChat")
                ),
                s.a.createElement(
                  je,
                  { onClick: r },
                  Object(f.g)("#Button_Goto_ClientChat")
                ),
                s.a.createElement(
                  Ne,
                  { onClick: t },
                  Object(f.g)("#Button_Later")
                )
              );
        },
        _t = (e) => {
          const { equipItem: t, closeModal: a } = e;
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(Se, { onClick: t }, Object(f.g)("#Button_Equip")),
            s.a.createElement(Ne, { onClick: a }, Object(f.g)("#Button_Later"))
          );
        },
        gt = (e) => {
          const { closeModal: t } = e;
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              je,
              {
                onClick: () =>
                  (window.location.href = I.d.COMMUNITY_BASE_URL + "my"),
              },
              Object(f.g)("#Button_Goto_Profile")
            ),
            s.a.createElement(Ne, { onClick: t }, Object(f.g)("#Button_Close"))
          );
        },
        ft = (e) => {
          const { closeModal: t } = e;
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              je,
              { onClick: t },
              s.a.createElement(
                u.b,
                { to: P.b.LoyaltyHowItWorks() },
                Object(f.g)("#Redeem_NeedToOwnApp")
              )
            ),
            s.a.createElement(Ne, { onClick: t }, Object(f.g)("#Button_Cancel"))
          );
        },
        ht = (e) => {
          const { closeModal: t } = e;
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              je,
              { onClick: t },
              s.a.createElement(
                u.b,
                { to: P.b.LoyaltyHowItWorks() },
                Object(f.g)("#Redeem_HowToGetPoints")
              )
            ),
            s.a.createElement(Ne, { onClick: t }, Object(f.g)("#Button_Cancel"))
          );
        },
        bt = (e) => {
          const {
              step: t,
              definition: a,
              closeModal: n,
              redeemPoints: r,
              bRequestInProgress: o,
            } = e,
            c = Object(i.c)(e, [
              "step",
              "definition",
              "closeModal",
              "redeemPoints",
              "bRequestInProgress",
            ]);
          let m = e.children;
          if (o)
            m = s.a.createElement(Ce.a, {
              className: _.RedeemThrobber,
              size: "medium",
            });
          else if ("preview" == t)
            m = s.a.createElement(
              Ne,
              { onClick: n },
              Object(f.g)("#Button_Close")
            );
          else if ("redeem" == t) {
            const e = Ge(a),
              { discount: t, originalCost: i } = (function (e) {
                switch (e.type) {
                  case 1:
                    if (
                      5 == e.rewardDefinition.type ||
                      6 == e.rewardDefinition.type
                    ) {
                      const { discount: t, original_point_cost: a } = h.b
                        .Get()
                        .GetBundleOfferForUser(e.rewardDefinition);
                      return { discount: t, originalCost: a };
                    }
                    return {
                      discount: 0,
                      originalCost: parseInt(e.rewardDefinition.point_cost),
                    };
                  case 2:
                    return {
                      discount: 0,
                      originalCost: h.b
                        .Get()
                        .GetUpgradableProfileShowcaseCost(),
                    };
                  case 3:
                    return {
                      discount: 0,
                      originalCost: h.b
                        .Get()
                        .GetPurchasableProfileShowcaseSlotCost(),
                    };
                }
                return {
                  discount: 0,
                  originalCost: parseInt(e.rewardDefinition.point_cost),
                };
              })(a);
            m = s.a.createElement(dt, {
              cost: e,
              discount: t,
              originalCost: i,
              redeemPoints: r,
              closeModal: n,
            });
          } else
            "cantredeemforapp" == t
              ? (m = s.a.createElement(ft, { closeModal: n }))
              : "cantafford" == t
              ? (m = s.a.createElement(ht, { closeModal: n }))
              : "saleitem" == t &&
                (m = s.a.createElement(
                  s.a.Fragment,
                  null,
                  s.a.createElement(
                    je,
                    { onClick: r },
                    Object(f.g)("#SummerSale_Redeem_Btn")
                  ),
                  s.a.createElement(
                    Ne,
                    { onClick: n },
                    Object(f.g)("#Button_Cancel")
                  )
                ));
          return s.a.createElement(
            l.a,
            Object.assign(
              { "flow-children": "row", className: _.ItemButtonsContainer },
              c
            ),
            m
          );
        },
        Ct = (e) => {
          const { step: t, className: a } = e,
            n = Object(i.c)(e, ["step", "className"]);
          let r = null;
          return (
            "equip" == e.step
              ? (r = s.a.createElement("div", {
                  className: Object(k.a)(_.GreenCheck, _.PurchasedCheck),
                }))
              : "equipped" == e.step &&
                (r = s.a.createElement(fe.j, {
                  className: Object(k.a)(_.GreenCheck, _.EquippedCheck),
                })),
            s.a.createElement(
              "div",
              Object.assign(
                { className: Object(k.a)(a, _.ItemPreviewContainer) },
                n
              ),
              r,
              e.children
            )
          );
        },
        It = (e) => {
          const { icon: t } = e,
            a = Object(i.c)(e, ["icon"]);
          return s.a.createElement(
            "div",
            Object.assign({ className: _.ChatPickerContainer }, a),
            s.a.createElement(
              "div",
              {
                className: _.IconPreview,
                style: t && { backgroundImage: `url( ${t} )` },
              },
              e.children
            )
          );
        },
        yt = (e) => {
          const { definition: t, badgeLevel: a, title: n } = e;
          let r = t.community_item_data.badge_data[a - 1].image || "",
            i = _.NextLevel;
          return (
            h.b.Get().GetUserSeasonalBadgeLevel() == a && (i = _.CurrentLevel),
            s.a.createElement(
              "div",
              { className: _.BadgeColumn },
              s.a.createElement("div", { className: _.BadgeTitle }, n),
              s.a.createElement(
                "div",
                { className: _.BadgeDetailsContainer },
                s.a.createElement(
                  "div",
                  { className: _.BadgeImgContainer },
                  s.a.createElement("div", {
                    className: _.BadgeImage,
                    style: {
                      backgroundImage: `url( ${Object(L.a)(t.appid, r)} )`,
                    },
                  })
                ),
                s.a.createElement("div", { className: _.BadgeLine }),
                s.a.createElement(
                  "div",
                  { className: Object(k.a)(_.BadgeLevelContainer, i) },
                  s.a.createElement("div", { className: _.BadgeLevelText }, a)
                )
              )
            )
          );
        },
        wt = (e) => {
          const { definition: t, step: a, description: n } = e,
            r = Object(i.c)(e, ["definition", "step", "description"]);
          let o,
            l = null;
          if (
            ("equip" != a && "equipped" != a) ||
            !t.rewardDefinition ||
            1 != t.rewardDefinition.type
          ) {
            if ("cantredeemforapp" == a) {
              let e = s.a.createElement(
                "span",
                { className: _.NeedAppOwnership },
                be.a.GetAppInfo(t.rewardDefinition.appid).name || ""
              );
              l = s.a.createElement(
                "div",
                { className: Object(k.a)(_.Bold, _.Opacity) },
                Object(f.p)("#Redeem_CantRedeemItemForApp", e)
              );
            } else if ("cantafford" == a) {
              let e = Ge(t) - h.b.Get().GetPointsAvailable().getLowBits();
              l = s.a.createElement(
                "div",
                { className: Object(k.a)(_.Bold, _.Opacity) },
                Object(f.g)("#Redeem_CantAfford", e.toLocaleString())
              );
            }
          } else
            o = s.a.createElement(
              "div",
              { className: _.Bold },
              Object(f.g)("#Redeem_YoursToOwn", Ze(t.rewardDefinition))
            );
          return s.a.createElement(
            "div",
            Object.assign({ className: _.ItemDescription }, r),
            o,
            s.a.createElement("div", null, n),
            e.children,
            l,
            s.a.createElement(
              "div",
              { className: _.Small },
              Object(f.g)("#Redeem_RefundWarning")
            )
          );
        },
        Mt = (e) => {
          const { className: t } = e,
            a = Object(i.c)(e, ["className"]);
          return s.a.createElement(
            "div",
            Object.assign({ className: Object(k.a)(_.ItemWrapper, t) }, a),
            e.children
          );
        };
      function Et(e) {
        const { children: t, destructive: a, onEscKeypress: n } = e;
        return "desktop" === Object(Ae.g)()
          ? s.a.createElement(
              g.i,
              {
                onEscKeypress: n,
                bHideCloseIcon: !0,
                bDestructiveWarning: a,
                hideTopBar: !1,
              },
              t
            )
          : s.a.createElement(g.l, { active: !0 }, t);
      }
      function vt(e) {
        const t = "desktop" !== Object(Ae.g)();
        return s.a.createElement(
          "div",
          Object.assign(
            { className: Object(k.a)(_.ModalContainer, t && _.Responsive) },
            e
          )
        );
      }
    },
    "+m6q": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/csgoChat_128_hugs.png?v=valveisgoodatcaching";
    },
    "/69T": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return s;
        }),
        a.d(t, "c", function () {
          return d;
        });
      var n = a("q1tI"),
        r = a.n(n);
      const i = Object(n.createContext)(null);
      function o(e) {
        const { spacing: t, children: a } = e;
        return r.a.createElement(i.Provider, { value: c(t) }, a);
      }
      function s(e) {
        const t = l();
        return r.a.createElement(
          "div",
          { style: m(t) },
          r.a.createElement(i.Provider, { value: null }, e.children)
        );
      }
      function l() {
        return Object(n.useContext)(i);
      }
      function c(e) {
        return {
          top: e.vertical || e.top || 0,
          bottom: e.vertical || e.bottom || 0,
          left: e.horizontal || e.left || 0,
          right: e.horizontal || e.right || 0,
        };
      }
      function m(e) {
        if (!e) return;
        const { top: t, bottom: a, left: n, right: r } = e,
          i = {};
        return (
          t && (i.marginTop = `-${t}px`),
          a && (i.marginBottom = `-${a}px`),
          n && (i.marginLeft = `-${n}px`),
          r && (i.marginRight = `-${r}px`),
          i
        );
      }
      function d() {
        const e = l();
        if (!e) return;
        const t = `${e.top}px ${e.right}px ${e.bottom}px ${e.left}px`;
        return { padding: t, scrollPadding: t };
      }
    },
    "/SGo": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/coin_single.png?v=valveisgoodatcaching";
    },
    "/maY": function (e, t, a) {
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
    "0FY4": function (e, t, a) {
      e.exports = {
        Header: "index_Header_3dg-U",
        Icon: "index_Icon_M9X6y",
        Title: "index_Title_3m-mu",
        Subtitle: "index_Subtitle_1cFVh",
        Opportunity: "index_Opportunity_1H0LN",
        Img: "index_Img_2KiFg",
      };
    },
    "1Gs6": function (e, t, a) {
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
    "1U4k": function (e, t, a) {
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
    "1aCw": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_23.svg?v=valveisgoodatcaching";
    },
    "1sV+": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_7.svg?v=valveisgoodatcaching";
    },
    "1xRl": function (e, t, a) {
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
        Focused: "loyaltyprimarynav_Focused_tLuQZ",
      };
    },
    "26vX": function (e, t, a) {
      e.exports = {
        GreenButton: "buttons_GreenButton_SRxqV",
        BlueButton: "buttons_BlueButton_2Sjv2",
        GrayButton: "buttons_GrayButton_3Ju8v",
      };
    },
    "2Ido": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return C;
      }),
        a.d(t, "b", function () {
          return v;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("TyAF"),
        s = a("aoTL"),
        l = a("FKEV"),
        c = a("prdU"),
        m = a("GXif"),
        d = a("RV7a"),
        p = (a("1udA"), a("mw7S")),
        u = a("o8B4"),
        _ = a("GbHM"),
        g = a("YpyZ");
      const f = (e) => {
        var { value: t, className: a } = e,
          r = Object(n.c)(e, ["value", "className"]);
        return i.a.createElement(
          "div",
          Object.assign({ className: Object(_.a)(g.Discount, a) }, r),
          "-",
          t,
          "%"
        );
      };
      var h = a("StxQ"),
        b = a("cOvF");
      const C = Object(o.a)((e) =>
          i.a.createElement(
            I,
            Object.assign(
              {},
              (function (e) {
                var { definition: t, theme: a } = e,
                  r = Object(n.c)(e, ["definition", "theme"]);
                const { icon_url: i, name: o } = l.a.GetAppInfo(t.appid),
                  s = t.internal_description,
                  d = c.b.Get().GetBundleOfferForUser(t);
                return Object.assign(
                  {
                    cost: d.point_cost,
                    name: s,
                    desc: Object(m.g)("#RewardItemType_Bundle"),
                    attributes: [],
                    appIcon: i,
                    appName: o,
                    bundle: d,
                    definition: t,
                  },
                  r
                );
              })(e)
            )
          )
        ),
        I = Object(o.a)((e) => {
          const {
              appName: t,
              appIcon: a,
              bundle: r,
              definition: o,
              cost: s,
              name: l,
              desc: c,
              attributes: m,
              className: p,
              style: g,
              onClick: f,
            } = e,
            h = Object(n.c)(e, [
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
              "onClick",
            ]),
            b = v(o);
          return i.a.createElement(
            d.e,
            Object.assign(
              {
                display: "flex",
                flexDirection: "column",
                className: Object(_.a)(u.BundleContainer, p),
                style: Object.assign(Object.assign({}, g), { width: "524px" }),
                onActivate: f,
              },
              h
            ),
            a && i.a.createElement("img", { src: a, className: u.AppIcon }),
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
              i.a.createElement(w, {
                items: r.items,
                visible: 5,
                width: 464,
                cardSize: 90,
                offer: r,
              })
            ),
            i.a.createElement(y, {
              label: b,
              count: r.items.length,
              cost: s,
              discount: r.discount,
            })
          );
        }),
        y = ({ cost: e, discount: t, label: a, count: n }) => {
          const r = `${a} (${n})`;
          return i.a.createElement(
            d.a,
            {
              padding: "small",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              className: u.BundleFooter,
              title: r,
            },
            i.a.createElement("div", { className: u.BundleName }, r),
            0 === e
              ? i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    "span",
                    { className: u.AlreadyOwned },
                    Object(m.g)("#Redeem_BundleItemOwned")
                  ),
                  i.a.createElement(b.j, { className: u.CheckmarkCircle })
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(f, {
                    value: t,
                    className: u.BundleDiscount,
                  }),
                  i.a.createElement(h.a, { amount: e })
                )
          );
        };
      const w = Object(o.a)((e) => {
        const { offer: t, items: a, visible: n, width: r, cardSize: o } = e,
          s = (function (e, t, a) {
            if (t.length <= a) return t;
            const n = t
              .filter((t) => !e.mapItemOwnership.get(t.defid))
              .slice(0, a);
            if (n.length < a) {
              const r = t
                .filter((t) => e.mapItemOwnership.get(t.defid))
                .slice(0, a - n.length);
              return n.concat(r);
            }
            return n;
          })(t, a, n);
        return i.a.createElement(
          "div",
          { style: { position: "relative" }, className: u.ItemHand },
          s.map((e, a) =>
            i.a.createElement(
              E,
              { key: `${e.defid}_${a}`, style: M(a, s.length, n, o, r) },
              t.mapItemOwnership.get(e.defid) &&
                i.a.createElement(b.j, {
                  className: Object(_.a)(u.CheckmarkCircle, u.OwnedItem),
                }),
              i.a.createElement("img", {
                src: Object(p.b)(e),
                className: u.ItemCardImage,
              })
            )
          )
        );
      });
      function M(e, t, a, n, r) {
        const i = 0.42,
          o = r - (n * (Math.sin(i) + Math.cos(i)) - n),
          s = (t - 1) / 2;
        return {
          position: "absolute",
          transformOrigin: "center",
          transform: `translateX(${
            e * Math.min(n, o / t) + ((a - t) / 2) * n
          }px) translateY(${(30 * Math.pow(e - s, 2)) / (s * s)}px) rotate(${
            (0.84 / (t - 1)) * e - i
          }rad)`,
          width: `${n}px`,
          height: `${n}px`,
        };
      }
      const E = (e) =>
        i.a.createElement(
          d.a,
          Object.assign(
            {
              padding: "small",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            e,
            { className: u.ItemCard }
          )
        );
      function v(e) {
        var t, a;
        const n = Object(s.d)(() => l.a.GetAppInfo(e.appid));
        switch (e.type) {
          case 6:
            return Object(m.g)("#RewardBundle_AutoGeneratedBundleName", n.name);
          case 5:
            return null !==
              (a =
                null === (t = e.community_item_data) || void 0 === t
                  ? void 0
                  : t.item_title) && void 0 !== a
              ? a
              : "";
          default:
            return (
              console.error(
                `Cannot derive bundle title for definition ${e.defid} with type ${e.type}`
              ),
              ""
            );
        }
      }
    },
    "2y1i": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/dota_shocked_crystal_maiden.png?v=valveisgoodatcaching";
    },
    "3y2B": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      var n = a("mrSG"),
        r = (a("q1tI"), a("2vnA"));
      class i {
        constructor(e, t) {
          if (!t.hasOwnProperty(e))
            throw new Error("Room effect " + e + " is not defined.");
          (this.name = e),
            (this.timestamp = Date.now()),
            (this.settings = t[e]),
            (this.expires = this.timestamp + this.settings.timeout);
        }
        static QueueFor(e) {
          return i.k_QueueForEffect[e];
        }
        Queue() {
          return i.k_QueueForEffect[this.name];
        }
        bIsExpired() {
          return Date.now() > this.expires;
        }
        bIsActive() {
          const e = Date.now();
          return this.timestamp <= e && this.expires > e;
        }
        iTimeToExpiry() {
          return this.expires - Date.now();
        }
        render() {
          return this.bIsActive() ? this.settings.render(this) : null;
        }
      }
      i.k_QueueForEffect = {
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
      class o {
        constructor(e) {
          (this.m_mapRoomEffectQueue = {
            default: [],
            snowball: [],
            confetti_snow: [],
            festive: [],
          }),
            (this.m_rgRunningEffects = []),
            (this.m_effectSettings = e);
        }
        AddRoomEffect(e) {
          this.QueueRoomEffect(e), this.UpdateRunningRoomEffects();
        }
        QueueRoomEffect(e) {
          this.m_mapRoomEffectQueue[i.QueueFor(e)].push(e);
        }
        ActivateRoomEffect(e) {
          try {
            const t = new i(e, this.m_effectSettings);
            this.m_rgRunningEffects.push(t),
              window.setTimeout(() => {
                this.UpdateRunningRoomEffects();
              }, t.iTimeToExpiry() + 100);
          } catch (e) {
            console.log(e);
          }
        }
        BIsQueueFull(e) {
          return (
            this.m_rgRunningEffects.filter((t) => t.Queue() == e).length >=
            o.k_MaxRoomEffectRunning[e]
          );
        }
        UpdateRunningRoomEffects() {
          this.m_rgRunningEffects = this.m_rgRunningEffects.filter(
            (e) => !e.bIsExpired()
          );
          for (let e in this.m_mapRoomEffectQueue) {
            const t = e;
            for (
              ;
              this.m_mapRoomEffectQueue[t].length > 0 && !this.BIsQueueFull(t);

            )
              this.ActivateRoomEffect(this.m_mapRoomEffectQueue[t].shift());
          }
        }
      }
      (o.k_MaxRoomEffectRunning = {
        default: 1,
        snowball: 10,
        confetti_snow: 3,
        festive: 10,
      }),
        Object(n.b)([r.C], o.prototype, "m_rgRunningEffects", void 0);
    },
    "4DCj": function (e, t, a) {
      e.exports = {
        DefaultTheme: "profilethemecolors_DefaultTheme_1qSTn",
        CosmicTheme: "profilethemecolors_CosmicTheme_1H27L",
        SummerTheme: "profilethemecolors_SummerTheme_32CpR",
        MidnightTheme: "profilethemecolors_MidnightTheme_7whka",
        DarkModeTheme: "profilethemecolors_DarkModeTheme_2aNG2",
        SteelTheme: "profilethemecolors_SteelTheme_jkvk6",
        PinkTealTheme: "profilethemecolors_PinkTealTheme_3P6mR",
        MutedRedTheme: "profilethemecolors_MutedRedTheme_2Ryfg",
        SteamGreenTheme: "profilethemecolors_SteamGreenTheme_1jCpm",
        BlueRedTheme: "profilethemecolors_BlueRedTheme_1LdKY",
        GoldBurgundyTheme: "profilethemecolors_GoldBurgundyTheme_aWHVY",
        VibrantBlueTheme: "profilethemecolors_VibrantBlueTheme_33swB",
        GoldenProfileDebutTheme:
          "profilethemecolors_GoldenProfileDebutTheme_5Y4d9",
        WinterProfile2020Theme:
          "profilethemecolors_WinterProfile2020Theme_ovNdJ",
        GoldenWeekProfile2021Theme:
          "profilethemecolors_GoldenWeekProfile2021Theme_ST1Up",
        Summer2021Theme: "profilethemecolors_Summer2021Theme_1zoKw",
        MutedBlueTheme: "profilethemecolors_MutedBlueTheme_vdApL",
        GoldTheme: "profilethemecolors_GoldTheme_HRAv0",
        BurntOrangeTheme: "profilethemecolors_BurntOrangeTheme_F_Nlh",
        FlatGreyTheme: "profilethemecolors_FlatGreyTheme_MXG8G",
        PurpleTheme: "profilethemecolors_PurpleTheme_2Atoc",
        GreenSlimeTheme: "profilethemecolors_GreenSlimeTheme_SAoY_",
        GhostTheme: "profilethemecolors_GhostTheme_3Oo5G",
        ColorNightmareTheme: "profilethemecolors_ColorNightmareTheme_35rNh",
        MurugiahTheme: "profilethemecolors_MurugiahTheme_Z9Gwt",
        Winter2021Theme: "profilethemecolors_Winter2021Theme_21p3Y",
        Lunar2022Theme: "profilethemecolors_Lunar2022Theme_1SPgb",
        SteamDeckTheme: "profilethemecolors_SteamDeckTheme_3TBj7",
      };
    },
    "5/sD": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/MysterySticker.png?v=valveisgoodatcaching";
    },
    "5pqL": function (e, t, a) {
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
    "6bk4": function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/float.png?v=valveisgoodatcaching";
    },
    "6c1j": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/seasonal_pagebg.png?v=valveisgoodatcaching";
    },
    "6iBs": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var n = a("/Q1a"),
        r = (a("msu0"), a("2vnA"));
      class i {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = r.C.map()),
            (this.m_fetching = null),
            (this.m_appid = e);
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(e) {
          return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
        }
        Localize(e, t) {
          let a = n.d.LANGUAGE;
          return o(
            e,
            this.GetTokenList(a),
            "english" != a ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
        SubstituteParams(e, t) {
          let a = n.d.LANGUAGE;
          return s(
            e,
            this.GetTokenList(a),
            "english" != a ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
      }
      function o(e, t, a, r, i) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        let o = e;
        e = e.toLowerCase();
        let l = "";
        if (
          (t && t.has(e) && (l = t.get(e)),
          !l && a && a.has(e) && (l = a.get(e)),
          l)
        )
          l = s(l, t, a, r, i);
        else if (
          ((t || a) &&
            console.log(
              "No loc found for appid",
              r,
              o,
              "Tokens:",
              t,
              "Fallback:",
              a
            ),
          t && 1 != n.d.EUNIVERSE)
        )
          return e;
        return l;
      }
      function s(e, t, a, n, r) {
        let i = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (i)
          for (let s of i) {
            let i = o(l(s.slice(1, -1), r), t, a, n, r);
            if (!i) return "";
            e = e.replace(s, i);
          }
        return (e = l(e, r));
      }
      function l(e, t) {
        let a = e.match(/%[A-Za-z0-9_:]+%/g);
        if (a)
          for (let n of a) {
            let a = n.slice(1, -1).toLowerCase(),
              r = t.get(a);
            null == r
              ? console.log("No rich presence found for", a)
              : (e = e.replace(n, r));
          }
        return e;
      }
    },
    "7JP+": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/hilarious_anim000.png?v=valveisgoodatcaching";
    },
    "7R2k": function (e, t, a) {
      e.exports = {
        ItemHover: "cluster_ItemHover_1hyVD",
        MobileHeroAction: "cluster_MobileHeroAction_nHPO7",
      };
    },
    "8j16": function (e, t, a) {
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
    "8j8b": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/avatarframes_preview.png?v=valveisgoodatcaching";
    },
    "9+KW": function (e, t, a) {
      e.exports = {
        Icon: "copylinkbutton_Icon_1rXAQ",
        flash: "copylinkbutton_flash_3f3Lg",
        HiddenInput: "copylinkbutton_HiddenInput_3XSRL",
      };
    },
    "9Dmu": function (e, t, a) {
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
    "9jkg": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/fancyPants_apng.png?v=valveisgoodatcaching";
    },
    AYtk: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return o;
        });
      var n = a("q1tI"),
        r = a("e356");
      a("R5YR"), a("/Q1a");
      function i() {
        return n.createElement(r.V, null);
      }
      function o() {
        return n.createElement(r.C, null);
      }
    },
    Aqke: function (e, t, a) {
      var n = {
        "./loyalty_brazilian.json": ["jJTi", 161],
        "./loyalty_bulgarian.json": ["YXmX", 162],
        "./loyalty_czech.json": ["Yw6T", 163],
        "./loyalty_danish.json": ["LeJ7", 164],
        "./loyalty_dutch.json": ["3s9e", 165],
        "./loyalty_english.json": ["nz6u", 166],
        "./loyalty_finnish.json": ["cCRj", 167],
        "./loyalty_french.json": ["WjZg", 168],
        "./loyalty_german.json": ["2HFY", 169],
        "./loyalty_greek.json": ["puzw", 170],
        "./loyalty_hungarian.json": ["h+vV", 171],
        "./loyalty_italian.json": ["1xjJ", 172],
        "./loyalty_japanese.json": ["KhFN", 173],
        "./loyalty_koreana.json": ["0T2E", 174],
        "./loyalty_latam.json": ["SFVQ", 175],
        "./loyalty_norwegian.json": ["6qpk", 176],
        "./loyalty_polish.json": ["c9AW", 177],
        "./loyalty_portuguese.json": ["H3eu", 178],
        "./loyalty_romanian.json": ["gt0D", 179],
        "./loyalty_russian.json": ["4nQk", 180],
        "./loyalty_sc_schinese.json": ["0Z0/", 181],
        "./loyalty_schinese.json": ["svug", 182],
        "./loyalty_spanish.json": ["x/nm", 183],
        "./loyalty_swedish.json": ["d/hP", 184],
        "./loyalty_tchinese.json": ["EWje", 185],
        "./loyalty_thai.json": ["SnkP", 186],
        "./loyalty_turkish.json": ["cD82", 187],
        "./loyalty_ukrainian.json": ["jV8j", 188],
        "./loyalty_vietnamese.json": ["TxFk", 189],
      };
      function r(e) {
        if (!a.o(n, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = n[e],
          r = t[0];
        return a.e(t[1]).then(function () {
          return a.t(r, 3);
        });
      }
      (r.keys = function () {
        return Object.keys(n);
      }),
        (r.id = "Aqke"),
        (e.exports = r);
    },
    AxUk: function (e, t, a) {
      e.exports = { UnstyledButton: "unstyledbutton_UnstyledButton_1cWox" };
    },
    Ayj8: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5IiBoZWlnaHQ9IjEwNyIgdmlld0JveD0iMCAwIDE3OSAxMDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1My41OTUgNS4yMjQyOEMxNTMuMjQ0IDMuOTEyMzcgMTUyLjA1NiAzIDE1MC42OTcgM0g5N0M5NS4zNDMxIDMgOTQgNC4zNDMxNSA5NCA2VjEyQzk0IDEzLjY1NjkgOTUuMzQzMSAxNSA5NyAxNUgxMjVDMTI2LjY1NyAxNSAxMjggMTYuMzQzMSAxMjggMThWOTlDMTI4IDEwMC42NTcgMTI5LjM0MyAxMDIgMTMxIDEwMkgxNzUuNTkxQzE3Ny41NjQgMTAyIDE3OC45OTkgMTAwLjEyOSAxNzguNDg5IDk4LjIyNDNMMTUzLjU5NSA1LjIyNDI4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8cGF0aCBkPSJNMTE1LjQ1MSAyM0g1OEM1OS44MTI2IDQyLjgyNzkgNjYuMDIwNiA0OC4xOTUgNzEuMTI5NSA1Mi42MDIzQzc1LjM1MzQgNTYuMjQ2NCA4MS4xMzkgNjEuMjM1NyA4MS4xMzkgNzEuMDk0OEM4MS4xMzkgODIuNTQ3IDc2Ljg5MjYgOTMuMDE0MiA2OS45MTQ0IDEwMUgxMTUuNDUxQzExNy40MTEgMTAxIDExOSA5OS4zOTg1IDExOSA5Ny40MjI3VjI2LjU3NzNDMTE5IDI0LjYwMTQgMTE3LjQxMiAyMyAxMTUuNDUxIDIzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8cGF0aCBkPSJNNDguMDQ2OCAxNC45MTQ5SDQ4LjUwMjhDNTAuNjkyOCAxNC45MTQ5IDUyLjQ2ODggMTMuMzEyNCA1Mi40Njg4IDExLjMzOFYzLjU3Njg1QzUyLjQ2ODggMS42MDEyIDUwLjY5MjggMCA0OC41MDI4IDBIMjMuNDk3MkMyMS4zMDcyIDAgMTkuNTMxMiAxLjYwMTIgMTkuNTMxMiAzLjU3Njg1VjExLjMzOEMxOS41MzEyIDEzLjMxMjQgMjEuMzA3MiAxNC45MTQ5IDIzLjQ5NzIgMTQuOTE0OUgyMy45NTMyQzIyLjgyNzYgNjMuNzc1OSAwIDU2LjE5NTQgMCA3MS4zMzg1QzAgOTEuMDMyIDE2LjExNzIgMTA3IDM2IDEwN0M1NS44ODI4IDEwNyA3MiA5MS4wMzIgNzIgNzEuMzM4NUM3MiA1Ni4xOTU0IDQ5LjE3MzYgNjMuNzc3MSA0OC4wNDY4IDE0LjkxNDlaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTM2LjI5NyIgeTE9IjMiIHgyPSIxMzYuMjk3IiB5Mj0iMTAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iODguNSIgeTE9IjIzIiB4Mj0iODguNSIgeTI9IjEwMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC41OCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9IjM2IiB5MT0iMCIgeDI9IjM2IiB5Mj0iMTA3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjU4Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPC9kZWZzPg0KPC9zdmc+DQo=";
    },
    BK9T: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/michelangelo_apng.png?v=valveisgoodatcaching";
    },
    "BMT+": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_17.svg?v=valveisgoodatcaching";
    },
    Bww3: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/heart_warming_anim0000.png?v=valveisgoodatcaching";
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
    CGeh: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("EC67"),
        s = a("1fPh"),
        l = a("/Q1a"),
        c = a("rmVU"),
        m = a("TyAF"),
        d = a("55Ip"),
        p = a("Rbfr"),
        u = a("li8c"),
        _ = a("prdU"),
        g = (a("1udA"), a("RV7a")),
        f = a("GXif"),
        h = a("/maY"),
        b = a("GbHM"),
        C = a("UpHR");
      function I(e) {
        const { size: t } = e;
        return i.a.createElement("div", {
          className: Object(b.a)(
            C.Loading,
            "small" == t && C.Small,
            ("medium" == t || !t) && C.Medium,
            "large" == t && C.Large
          ),
        });
      }
      var y = a("y0CV"),
        w = a("Lsvi");
      const M = "none";
      function E(e, t, a = {}) {
        const {
            cInitialItems: o,
            cOverscanCount: s,
            fnRenderItemSkeleton: l,
          } = a,
          c = Object(n.c)(a, [
            "cInitialItems",
            "cOverscanCount",
            "fnRenderItemSkeleton",
          ]),
          m = o || 10,
          d = s || 10,
          [p, u] = Object(r.useState)(m + d);
        let _ = e(0, p).map((e) => t(e));
        const f = 0 === _.length;
        if (f) for (let e = 0; e < p; e++) _.push(l());
        const h = (function (e, t = {}, a = !1) {
          const n = e.length,
            [o, s] = Object(r.useState)(0),
            [l, c] = j(),
            [m, d] = j(),
            p = Object(g.k)("padding-right", M),
            u = Object(g.h)().spacing.none;
          let _ = 1;
          c.width &&
            void 0 !== d.width &&
            (_ = Math.floor((d.width + u) / c.width));
          const f = !a && o + _ < n,
            h = () => f && s(o + _),
            C = o > 0,
            I = () => C && s(Math.max(0, o - _)),
            y = o,
            w = o + _,
            E = e
              .slice(y, w)
              .map((e, a) =>
                i.a.createElement(
                  "div",
                  {
                    key: a + y,
                    ref: 0 === a ? l : void 0,
                    className: Object(b.a)(
                      0 === a || a < _ - 1 ? p : void 0,
                      t.itemClassName
                    ),
                  },
                  e
                )
              );
          return {
            containerRef: m,
            rgVisibleItems: E,
            bAllowNext: f,
            bAllowPrev: C,
            fnNext: h,
            fnPrev: I,
            iPosition: o,
          };
        })(_, c, f);
        return Object.assign(Object.assign({}, h), {
          fnNext: () => {
            h.iPosition + h.rgVisibleItems.length > p - d &&
              u(p + h.rgVisibleItems.length),
              h.fnNext();
          },
        });
      }
      const v = (e) => {
          const {
              className: t,
              containerRef: a,
              rgVisibleItems: r,
              bAllowNext: o,
              bAllowPrev: s,
              fnNext: l,
              fnPrev: c,
              iPosition: m,
            } = e,
            d = Object(n.c)(e, [
              "className",
              "containerRef",
              "rgVisibleItems",
              "bAllowNext",
              "bAllowPrev",
              "fnNext",
              "fnPrev",
              "iPosition",
            ]);
          return i.a.createElement(
            w.a,
            Object.assign(
              {
                className: Object(b.a)(h.Container, t),
                ref: a,
                "flow-children": "row",
              },
              d
            ),
            r
          );
        },
        N = (e) => {
          const { bAllowNext: t, bAllowPrev: a, fnNext: n, fnPrev: r } = e;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(D, {
              className: Object(b.a)(h.LeftArrow, !a && h.Disabled),
              onClick: r,
            }),
            i.a.createElement(A, {
              className: Object(b.a)(h.RightArrow, !t && h.Disabled),
              onClick: n,
            })
          );
        },
        j = () => (window.ResizeObserver ? S() : O()),
        S = () => {
          const [e, t] = Object(r.useState)({}),
            [a, n] = Object(r.useState)(null),
            i = Object(r.useCallback)((e) => n(e), []);
          return (
            Object(r.useLayoutEffect)(() => {
              if (a) {
                const e = new ResizeObserver(() =>
                  window.requestAnimationFrame(() =>
                    t(a.getBoundingClientRect())
                  )
                );
                return e.observe(a), () => e.disconnect();
              }
              return () => {};
            }, [a]),
            [i, e]
          );
        },
        O = () => {
          const [e, t] = Object(r.useState)({}),
            [a, n] = Object(r.useState)(null),
            i = Object(r.useCallback)((e) => n(e), []);
          return (
            Object(r.useLayoutEffect)(() => {
              if (a) {
                const e = () =>
                  window.requestAnimationFrame(() =>
                    t(a.getBoundingClientRect())
                  );
                return (
                  e(),
                  window.addEventListener("resize", e),
                  window.addEventListener("scroll", e),
                  () => {
                    window.removeEventListener("resize", e),
                      window.removeEventListener("scroll", e);
                  }
                );
              }
              return () => {};
            }, [a]),
            [i, e]
          );
        },
        A = (e) =>
          i.a.createElement(
            "svg",
            Object.assign({}, e, { viewBox: "0 0 23 36" }),
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
          ),
        D = (e) => {
          const { style: t } = e,
            a = Object(n.c)(e, ["style"]),
            r = Object.assign({ transform: "scaleX(-1)" }, t || {});
          return i.a.createElement(A, Object.assign({ style: r }, a));
        };
      function x(e) {
        const {
          items: t,
          renderItem: a,
          loadMore: n,
          bLoadingMore: r,
          style: o,
        } = e;
        return i.a.createElement(
          w.a,
          {
            "flow-children": "row",
            className: Object(b.a)(h.Container, h.Mobile),
            style: o,
          },
          t.map(a),
          i.a.createElement(y.a, {
            trigger: "repeated",
            onVisibilityChange: (e) => e && n(),
          }),
          r &&
            i.a.createElement(
              "div",
              { className: h.Loading },
              i.a.createElement(I, null)
            )
        );
      }
      var B = a("+9fn"),
        L = a("ehaW"),
        P = a("t0PL"),
        R = a("DPOp"),
        k = a("reUc");
      const T = (e) => {
          const {
              title: t,
              description: a,
              actions: r,
              children: o,
              className: s,
              itemClassName: l,
              imgSrc: c,
              fullbleed: m,
              style: d,
            } = e,
            p = Object(n.c)(e, [
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
            u = `url(${c})`,
            _ = "mobile" === Object(g.g)();
          return i.a.createElement(
            g.a,
            Object.assign(
              {
                padding: ["small", "large"],
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                className: Object(b.a)(R.Container, s),
                style: m ? Object.assign({ backgroundImage: u }, d) : d,
              },
              p
            ),
            !m && i.a.createElement(k.a, { src: c }),
            i.a.createElement(
              g.a,
              {
                marginBottom: "medium",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexGrow: 1,
                style: { zIndex: 1 },
              },
              i.a.createElement(
                g.a,
                { display: "flex", flexDirection: "column", flexGrow: 1 },
                i.a.createElement(
                  g.a,
                  {
                    display: "flex",
                    flexDirection: _ ? "column" : "row",
                    alignItems: _ ? "flex-start" : "center",
                  },
                  i.a.createElement(
                    "div",
                    {
                      style: { transform: "translatey( -1px )" },
                      className: R.Title,
                    },
                    t,
                    " "
                  ),
                  r
                ),
                i.a.createElement("div", { className: R.Description }, a)
              )
            ),
            i.a.createElement(
              g.c,
              {
                spacing: ["xsmall", "small"],
                style: { alignSelf: _ ? "flex-start" : "flex-end" },
                itemClassName: l,
              },
              o
            )
          );
        },
        G = (e) => {
          const { theme: t, style: a } = e,
            r = Object(n.c)(e, ["theme", "style"]);
          return i.a.createElement(
            B.a,
            Object.assign({}, r, { style: Object.assign({}, a) })
          );
        };
      var F = a("+j4l"),
        z = a("7R2k"),
        H = a("vN/p"),
        U = a("/69T");
      function V(e) {
        return Math.max(0, e.cTotalMatchingUnfiltered - e.cTotalMatching);
      }
      function Z(e) {
        const t = V(e);
        return 0 === t
          ? null
          : Object(f.g)("#HiddenWithCountButton", t.toLocaleString());
      }
      function W(e) {
        const t = V(e);
        return 0 === t
          ? null
          : i.a.createElement(
              B.c,
              {
                key: "HiddenCallout",
                title: Object(f.o)(
                  "#HiddenItems_Explanation",
                  t,
                  t.toLocaleString()
                ),
              },
              Z(e)
            );
      }
      const Y = (e) => {
        switch (e.descriptor.type) {
          case 1:
            const t = i.a.createElement(Q, Object.assign({}, e));
            return e.descriptor.bHomogeneous
              ? i.a.createElement(H.a, null, t)
              : t;
          case 0:
            const a = i.a.createElement(J, Object.assign({}, e));
            return e.descriptor.bHomogeneous
              ? i.a.createElement(H.a, null, a)
              : a;
          case 2:
            return i.a.createElement(g.b, null, (t) =>
              "desktop" !== t
                ? i.a.createElement(K, Object.assign({}, e))
                : i.a.createElement($, Object.assign({}, e))
            );
          default:
            return (
              console.error(`Unknown cluster display: ${e.descriptor.type}`),
              null
            );
        }
      };
      let Q = class extends i.a.Component {
        render() {
          if (1 != this.props.descriptor.type) return null;
          const {
              descriptor: {
                cluster: { id: e, title: t, subtitle: a, GetRewards: n },
                title: r,
                subtitle: o,
                bHideHiddenItemCount: s,
              },
              linkedPage: l,
              additionalFilter: c,
            } = this.props,
            m = {
              getItems: (e, t) => n(e, t, c),
              title: r || t,
              subtitle: o || a,
              route: l ? Object(_.e)(l) : void 0,
              bHideHiddenItemCount: !!s,
            };
          return i.a.createElement(g.b, null, (e) =>
            "desktop" !== e
              ? i.a.createElement(q, Object.assign({}, m))
              : i.a.createElement(X, Object.assign({}, m))
          );
        }
      };
      Q = Object(n.b)([m.a], Q);
      const q = Object(m.a)((e) => {
          const {
              title: t,
              subtitle: a,
              route: n,
              getItems: r,
              bHideHiddenItemCount: s,
            } = e,
            l = Object(o.g)(),
            [c, m] = i.a.useState(10),
            p = r(0, c),
            { rewards: u, bLoadingMore: _, cTotalMatching: g } = p,
            h = Object(U.c)();
          if (0 === g) return null;
          const b = !s && !n && Z(p);
          return i.a.createElement(
            B.b,
            {
              title: t,
              subtitle: b || void 0,
              rightActions: n
                ? i.a.createElement(
                    d.b,
                    { to: n },
                    i.a.createElement(
                      B.a,
                      { onClick: () => l.push(n) },
                      Object(f.g)("#SeeAllButton")
                    )
                  )
                : void 0,
            },
            i.a.createElement(
              U.a,
              null,
              i.a.createElement(x, {
                items: u,
                loadMore: () => m(c + 10),
                bLoadingMore: _,
                renderItem: (e) =>
                  i.a.createElement(ee, { definition: e, key: e.defid }),
                style: h,
              })
            )
          );
        }),
        X = Object(m.a)((e) => {
          const {
            title: t,
            subtitle: a,
            route: n,
            getItems: r,
            bHideHiddenItemCount: o,
          } = e;
          let s = r(0, 0);
          const l = E(
              (e, t) => r(e, t).rewards,
              (e) => i.a.createElement(ee, { definition: e, key: e.defid }),
              {
                itemClassName: z.ItemHover,
                fnRenderItemSkeleton: () => i.a.createElement(L.f, null),
              }
            ),
            c = l.bAllowNext || l.bAllowPrev;
          let m = "";
          if (
            ((m =
              s.cMaxToReturn > 0
                ? Object(f.g)("#SeeAllButton")
                : s.cTotalMatching > 0
                ? Object(f.g)(
                    "#SeeAllWithCountButton",
                    s.cTotalMatching.toLocaleString()
                  )
                : Object(f.g)("#SeeAllButton")),
            0 === s.cTotalMatching && !s.bLoadingMore)
          )
            return null;
          const p = !c || !n,
            u = !o && p && W(s);
          let _ = [],
            g = [];
          return (
            !p &&
              _.push(
                i.a.createElement(
                  d.b,
                  { to: n, key: "SeeAll" },
                  i.a.createElement(B.a, null, m)
                )
              ),
            c &&
              g.push(
                i.a.createElement(
                  N,
                  Object.assign({ key: "CarouselControls" }, l)
                )
              ),
            u && (0 == g.length ? g.push(u) : 0 == _.length && _.push(u)),
            i.a.createElement(
              B.b,
              { title: t, subtitle: a, leftActions: _, rightActions: g },
              i.a.createElement(
                v,
                Object.assign({ style: { width: "100%", flexWrap: "wrap" } }, l)
              )
            )
          );
        }),
        J = Object(m.a)((e) => {
          const {
            descriptor: {
              title: t,
              subtitle: a,
              cluster: { id: n, title: r, subtitle: o, GetRewards: s },
            },
            additionalFilter: l,
          } = e;
          let c = (e, t) => s(e, t, l);
          const m = W(c(0, 0));
          return i.a.createElement(
            B.b,
            { title: t || r, subtitle: a || o, rightActions: m || void 0 },
            i.a.createElement(P.a, {
              style: { width: "100%" },
              itemClassName: z.ItemHover,
              getItems: c,
              renderItem: (e) =>
                i.a.createElement(ee, { definition: e, key: e.defid }),
              renderItemSkeleton: () => i.a.createElement(L.f, null),
              key: `${n}||${JSON.stringify(l)}`,
            })
          );
        }),
        $ = Object(m.a)((e) => {
          const { descriptor: t, additionalFilter: a, linkedPage: n } = e;
          if (2 !== t.type)
            return (
              console.error(
                `Attempt to render a hero cluster with a non-hero view. Cluster ${t.cluster.id}`
              ),
              null
            );
          const {
              strImage: r,
              bFullBleedImage: o,
              theme: s,
              title: l,
              subtitle: c,
              cluster: { title: m, subtitle: p, GetRewards: u },
            } = t,
            g = n ? Object(_.e)(n) : void 0,
            h = u(0, 3, a),
            b =
              h.bLoadingMore && 0 === h.rewards.length
                ? [
                    i.a.createElement(L.f, { key: "0" }),
                    i.a.createElement(L.f, { key: "1" }),
                    i.a.createElement(L.f, { key: "2" }),
                  ]
                : h.rewards.map((e) =>
                    i.a.createElement(ee, {
                      definition: e,
                      key: e.defid,
                      theme: s,
                    })
                  );
          return i.a.createElement(
            B.b,
            null,
            i.a.createElement(
              T,
              {
                title: l || m,
                description: c || p,
                imgSrc: r,
                fullbleed: o,
                style: { width: "100%" },
                itemClassName: z.ItemHover,
                actions: i.a.createElement(
                  d.b,
                  { to: g },
                  i.a.createElement(
                    G,
                    { theme: s },
                    Object(f.g)("#SeeAllButton")
                  )
                ),
              },
              b
            )
          );
        }),
        K = Object(m.a)((e) => {
          const { descriptor: t, additionalFilter: a, linkedPage: n } = e,
            r = Object(o.g)();
          if (2 !== t.type)
            return (
              console.error(
                `Attempt to render a hero cluster with a non-hero view. Cluster ${t.cluster.id}`
              ),
              null
            );
          const {
              strImage: s,
              bFullBleedImage: l,
              theme: c,
              title: m,
              subtitle: p,
              cluster: { title: u, subtitle: g, GetRewards: h },
            } = t,
            b = n ? Object(_.e)(n) : void 0;
          return i.a.createElement(
            B.b,
            null,
            i.a.createElement(
              T,
              {
                title: m || u,
                description: "",
                imgSrc: s,
                fullbleed: l,
                style: { width: "100%" },
                itemClassName: z.ItemHover,
                actions: i.a.createElement(
                  d.b,
                  { to: b },
                  i.a.createElement(
                    G,
                    {
                      onClick: () => r.push(b),
                      theme: c,
                      className: z.MobileHeroAction,
                    },
                    Object(f.g)("#SeeAllButton")
                  )
                ),
              },
              i.a.createElement(x, {
                items: h(0, 2, a).rewards,
                loadMore: () => {},
                renderItem: (e) =>
                  i.a.createElement(ee, {
                    definition: e,
                    key: e.defid,
                    theme: c,
                  }),
              })
            )
          );
        }),
        ee = (e) => {
          const { definition: t, theme: a } = e,
            n = Object(o.g)();
          return i.a.createElement(L.e, {
            definition: t,
            onClick: (e) => {
              5 === t.type || 6 === t.type
                ? n.push(s.b.LoyaltyItemBundle(t.defid))
                : Object(F.e)(e, t);
            },
            theme: a,
          });
        };
      var te = a("fsrB");
      function ae(e) {
        const { navigate: t, onClick: a } = e,
          r = Object(n.c)(e, ["navigate", "onClick"]),
          { target: o } = r;
        return i.a.createElement(
          te.c,
          Object.assign({}, r, {
            onClick: (e) => {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (o && "_self" !== o) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), t());
            },
          })
        );
      }
      function ne(e) {
        return i.a.createElement(d.c, Object.assign({ component: ae }, e));
      }
      var re = a("Qpv1");
      function ie(e) {
        const {
            title: t,
            description: a,
            image: n,
            iconComponent: r,
            linked_page: o,
            link_text: s,
          } = e,
          l = r,
          c = "string" == typeof o ? o : Object(_.e)(o);
        return i.a.createElement(
          B.b,
          null,
          i.a.createElement(
            "div",
            { className: re.Banner },
            n && i.a.createElement("img", { className: re.Image, src: n }),
            r && i.a.createElement(l, { className: re.Image }),
            i.a.createElement(
              "div",
              { className: re.Content },
              i.a.createElement("div", { className: re.Title }, t),
              i.a.createElement("div", { className: re.Description }, a)
            ),
            i.a.createElement(ne, { className: re.Link, to: c }, s)
          )
        );
      }
      var oe = a("FKEV"),
        se = a("n4wG"),
        le = a("Matr"),
        ce = a("StxQ"),
        me = a("nXE5"),
        de = a("kWcV"),
        pe = a("6c1j"),
        ue = a.n(pe),
        _e = a("msu0"),
        ge = a("kMdN"),
        fe = a("6I/y"),
        he = a("oTf3"),
        be = a("e356"),
        Ce = a("CG4B"),
        Ie = a.n(Ce);
      function ye(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "span",
            { className: Ie.a.partyBeaconJoin },
            Object(f.g)("#User_WantsToPlay")
          ),
          " – ",
          e.persona.GetCurrentGameName()
        );
      }
      let we = class extends r.Component {
        render() {
          const e = this.props,
            {
              className: t,
              onContextMenu: a,
              persona: i,
              eFriendRelationship: o,
              bIsSelf: s,
              bParenthesizeNicknames: l,
              strNickname: c,
              bCompactView: m,
              bHideGameName: d,
              bHideEnhancedRichPresenceLabel: p,
              bHideSnooze: u,
              bHideStatus: _,
              renderStatus: g,
              renderRichPresence: h,
              bHidePersona: C,
              bDNDSet: I,
              bHasPartyBeacon: y,
              bHasGamePrivacy: w,
              bNoMask: M,
            } = e,
            E = Object(n.c)(e, [
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
          let v = null,
            N = null,
            j = null,
            S = [
              t,
              Ie.a.personaNameAndStatusLabel,
              Object(ge.b)(i),
              m && Ie.a.compactView,
              M && Ie.a.NoMask,
            ];
          y || i.has_public_party_beacon
            ? (N = r.createElement(ye, { persona: i }))
            : Object(_e.a)(o)
            ? ((N = Object(f.g)("#PersonaStateBlocked")), S.push(Ie.a.blocked))
            : i.is_ingame
            ? ((N =
                !i.is_in_nonsteam_game || s || Object(_e.b)(o)
                  ? i.GetCurrentGameName()
                  : Object(f.g)("#PersonaStateInNonSteamGame")),
              s || C
                ? s &&
                  i.is_awayOrSnooze &&
                  (j = Object(f.g)("#PersonaStateAway"))
                : (j = i.GetCurrentGameRichPresence()))
            : i.m_broadcastAccountId &&
              (N = Object(f.g)("#PersonaStateWatchingBroadcast")),
            N || (N = i.GetLocalizedOnlineStatus()),
            g && (N = g());
          let O = !C && !u;
          !1 === u && (O = !0),
            i.is_awayOrSnooze &&
              O &&
              (v = r.createElement(fe.a, { persona: i }));
          let A = null;
          a
            ? (A = r.createElement(
                "div",
                { className: "ContextMenuButton", onClick: a },
                r.createElement(be.y, null)
              ))
            : S.push(Ie.a.noContextMenu),
            C && S.push(Ie.a.hidePersona),
            h && (j = h()),
            (!d && j) || S.push(Ie.a.twoLine);
          const D = !i.is_ingame && !_,
            x = !p && j,
            B = N && (!d || !x);
          let L = c && !l,
            P = L ? c : i.m_strPlayerName,
            R = !C && (B || D) && x;
          return r.createElement(
            "div",
            Object.assign({}, E, {
              className: Object(b.a)(...S),
              onContextMenu: a,
            }),
            r.createElement(
              "div",
              {
                className: Object(b.a)(
                  Ie.a.statusAndName,
                  R && Ie.a.threeLines
                ),
              },
              r.createElement(
                "div",
                { className: Ie.a.playerName },
                P || " ",
                l &&
                  c &&
                  r.createElement(
                    "span",
                    { className: Ie.a.playerNickname },
                    "(",
                    c,
                    ")"
                  )
              ),
              I &&
                r.createElement(
                  "div",
                  {
                    className: Ie.a.DNDContainer,
                    title: Object(f.g)("#User_ToggleDoNotDisturb"),
                  },
                  r.createElement(be.w, null)
                ),
              L &&
                r.createElement(
                  "span",
                  {
                    className: Ie.a.playerNicknameBracket,
                    title: Object(f.g)("#isNickname"),
                  },
                  " *"
                ),
              r.createElement(he.a, { persona: i }),
              v,
              (i.m_bPlayerNamePending || i.m_bAvatarPending) &&
                r.createElement(
                  "div",
                  {
                    className: Ie.a.PendingPersona,
                    title: Object(f.g)("#SteamChina_PendingPersonaName"),
                  },
                  r.createElement(be.r, null)
                ),
              A
            ),
            !C &&
              r.createElement(
                "div",
                { className: Ie.a.richPresenceContainer },
                (B || D) &&
                  r.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        Ie.a.gameName,
                        R && Ie.a.threeLines,
                        Ie.a.richPresenceLabel,
                        "no-drag"
                      ),
                    },
                    w &&
                      r.createElement(
                        "div",
                        {
                          className: Ie.a.gameIsPrivateIcon,
                          title: Object(f.g)("#User_GameInfoHidden"),
                        },
                        r.createElement(be.J, null)
                      ),
                    N
                  ),
                x &&
                  r.createElement(
                    "div",
                    {
                      className: Object(b.a)(Ie.a.richPresenceLabel, "no-drag"),
                    },
                    j,
                    " "
                  )
              )
          );
        }
      };
      we = Object(n.b)([m.a], we);
      Object(m.a)((e) => {
        const {
            persona: t,
            bParenthesizeNicknames: a,
            strNickname: i,
            className: o,
          } = e,
          s = Object(n.c)(e, [
            "persona",
            "bParenthesizeNicknames",
            "strNickname",
            "className",
          ]);
        let l = i && !a ? i : t.m_strPlayerName;
        return r.createElement(
          "span",
          Object.assign({}, s, { className: Object(b.a)(o, Object(ge.b)(t)) }),
          r.createElement(
            "span",
            { className: Ie.a.playerName },
            l || " ",
            a &&
              i &&
              r.createElement(
                "span",
                { className: Ie.a.playerNickname },
                "(",
                i,
                ")"
              )
          )
        );
      });
      var Me = a("FA79");
      Object(m.a)(() => {
        const e = Object(r.useRef)(null),
          t = Object(r.useRef)(null);
        let a = _.b.Get().GetGoldenProfileDefinition();
        if (!a) return null;
        let n = _.b.Get().GetPersonaState(),
          o = _.b.Get().GetEquippedItems();
        return i.a.createElement(
          me.e,
          { background: ue.a },
          i.a.createElement(
            g.a,
            {
              paddingY: "xlarge",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            i.a.createElement(
              g.a,
              {
                className: le.GoldenProfileHeaderContainer,
                paddingY: "large",
                display: "flex",
                flexDirection: "row",
              },
              i.a.createElement(
                "div",
                { className: le.PersonaPreviewContainer },
                n
                  ? i.a.createElement(
                      g.a,
                      {
                        className: le.PersonaPreviewContainer,
                        paddingY: "none",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                      },
                      i.a.createElement(
                        "div",
                        { className: le.AvatarAndPersonaContainer },
                        i.a.createElement(
                          "div",
                          { className: le.AvatarHolder },
                          i.a.createElement(Me.d, {
                            size: "FillArea",
                            className: le.CurrentAvatar,
                            persona: n,
                            animatedAvatar: o.animated_avatar,
                          })
                        ),
                        i.a.createElement(we, {
                          persona: n,
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
                g.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 1",
                },
                i.a.createElement(
                  "div",
                  { className: le.GoldenProfileTitle },
                  Object(f.g)("#GoldenProfile_Title")
                ),
                i.a.createElement(
                  "div",
                  { className: le.GoldenProfileDesc },
                  Object(f.g)("#GoldenProfile_Desc")
                ),
                i.a.createElement(
                  "div",
                  { className: le.GoldenProfileDesc },
                  Object(f.g)("#GoldenProfile_Expiration")
                ),
                i.a.createElement(
                  p.a,
                  { className: le.BlueButton },
                  i.a.createElement(
                    ce.a,
                    {
                      className: le.GoldenProfileCost,
                      onClick: (e) => Object(F.e)(e, a),
                      size: 1.125,
                      amount: parseInt(a.point_cost),
                    },
                    " ",
                    Object(f.g)("#Rewards_Points")
                  )
                )
              )
            ),
            i.a.createElement(
              "div",
              { className: le.ProfileContainer },
              i.a.createElement(
                "div",
                { ref: t, className: le.ProfileThrobber },
                i.a.createElement(de.a, {
                  position: "center",
                  size: "xlarge",
                  string: Object(f.g)("#GoldenProfile_Loading"),
                })
              ),
              i.a.createElement("iframe", {
                ref: e,
                className: le.ProfileFrame,
                src:
                  l.d.COMMUNITY_BASE_URL +
                  "profiles/" +
                  (_.b.Get().BIsLoggedIn()
                    ? l.l.steamid
                    : 2 == l.d.EUNIVERSE
                    ? "148618792083695825"
                    : "76561197960266962") +
                  "?previewprofile=1&appid=" +
                  _.b.Get().GetCurrentSeasonalAppID(),
                frameBorder: 0,
                scrolling: "no",
                onLoad: function () {
                  (e.current.style.opacity = 1), (t.current.style.opacity = 0);
                },
              })
            )
          )
        );
      });
      var Ee = a("/SGo"),
        ve = a.n(Ee),
        Ne = a("eOCM"),
        je = a.n(Ne),
        Se = a("HJR3"),
        Oe = a.n(Se),
        Ae = a("DtjR"),
        De = a.n(Ae),
        xe = a("TBZS"),
        Be = a.n(xe),
        Le = a("+m6q"),
        Pe = a.n(Le),
        Re = a("IfXo"),
        ke = a.n(Re),
        Te = a("V+CE"),
        Ge = a.n(Te),
        Fe = a("RImk"),
        ze = a("5/sD"),
        He = a.n(ze),
        Ue = (a("Nr4G"), a("cOvF")),
        Ve = a("Vlb1"),
        Ze = a("Gp1o"),
        We = a("Nt3m");
      const Ye = Object(m.a)((e) => {
          const t = {
              item_name: "Free Item",
              item_title: Object(f.g)("#SummerSale_ItemTitle"),
              animated: !0,
            },
            a = {
              defid: void 0,
              appid: _.c.Get().GetCurrentSaleRewardAppID(),
              type: 1,
              community_item_class: 11,
              point_cost: "0",
              quantity: "1",
              active: !0,
              community_item_data: t,
            };
          let n = null,
            r = null,
            o = (e) => Object(F.e)(e, a, null, !0),
            c = He.a,
            m = Object(f.g)("#SummerSale_ItemName");
          const p = _.c.Get().BCanClaimFreeSaleReward();
          if (!p) {
            (r = i.a.createElement(
              "div",
              { className: Ve.ClaimedText },
              Object(f.g)("#Rewards_Claimed")
            )),
              (n = Object(b.a)(Fe.SaleRewardItemOwned, Ve.OwnedItem)),
              (o = null);
            const e = _.c.Get().GetClaimedSaleRewardItemDef();
            e &&
              ((m = e.community_item_data.item_title),
              (c = `${l.d.MEDIA_CDN_COMMUNITY_URL}images/items/${e.appid}/${e.community_item_data.item_image_small}`));
          }
          return i.a.createElement(
            g.a,
            {
              display: "flex",
              flexDirection: "column",
              className: Fe.SaleRewardContainer,
            },
            i.a.createElement(
              g.a,
              { className: Fe.SaleRewardContainerFlex },
              i.a.createElement(
                g.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  className: Fe.LeftColumn,
                },
                i.a.createElement(
                  "div",
                  { className: Fe.SaleRewardLogoContainerFlex },
                  i.a.createElement("img", {
                    className: Fe.SaleRewardLogo,
                    alt: "Sale",
                    src: _.b.Get().GetFreeItemHeaderSource(),
                  })
                ),
                i.a.createElement(
                  "div",
                  { className: Fe.SaleRewardTextContainer },
                  i.a.createElement(
                    "div",
                    { className: Fe.SaleRewardSubHeader },
                    Object(f.g)("#SummerSale_FreeDesc_2")
                  ),
                  !p &&
                    i.a.createElement(
                      "div",
                      { className: Fe.SummerNextStop },
                      i.a.createElement(Qe, null)
                    ),
                  i.a.createElement(
                    d.b,
                    { className: Fe.RulesLink, to: s.b.LoyaltyGiveawayRules() },
                    Object(f.g)("#SummerSale_Redeem_Rules")
                  )
                )
              ),
              i.a.createElement(
                "div",
                { className: Fe.FreeItemContainer },
                i.a.createElement(
                  L.a,
                  {
                    name: m,
                    cost: 0,
                    attributes: [
                      i.a.createElement(Ue.b, {
                        className: Ve.IconAnimated,
                        key: "animated",
                      }),
                    ],
                    iconComponent: be.p,
                    styleOverride: n,
                    desc: Object(f.g)("#CommunityItemClass_Sticker"),
                    strPriceOverride: r,
                    onClick: o,
                  },
                  i.a.createElement("img", {
                    className: Ve.ImageMedium,
                    src: c,
                  })
                )
              )
            )
          );
        }),
        Qe = Object(m.a)(() => {
          const e = _.c.Get().GetNextClaimTime();
          return e
            ? i.a.createElement(
                "span",
                { className: Fe.NextStop },
                i.a.createElement(
                  "span",
                  { className: Fe.Title },
                  Object(f.g)("#SummerSale_NextStop")
                ),
                i.a.createElement(qe, {
                  className: Fe.Timer,
                  time: e.getTime(),
                })
              )
            : null;
        }),
        qe = Object(m.a)((e) => {
          const { time: t } = e,
            a = Object(n.c)(e, ["time"]),
            r = Math.floor(Math.max(0, t - Ze.b()) / 1e3),
            o = Math.floor(r / We.e.PerHour),
            s = Math.floor((r - o * We.e.PerHour) / We.e.PerMinute),
            l = Math.floor(r - (o * We.e.PerHour + s * We.e.PerMinute));
          return i.a.createElement(
            "span",
            Object.assign({ style: { fontFamily: "monospace" } }, a),
            Xe(o),
            ":",
            Xe(s),
            ":",
            Xe(l)
          );
        }),
        Xe = (e) => e.toString().padStart(2, "0"),
        Je = i.a.lazy(() => a.e(98).then(a.bind(null, "yDev"))),
        $e = i.a.lazy(() => a.e(97).then(a.bind(null, "f4w8")));
      let Ke = class extends i.a.Component {
        render() {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(at, null),
            i.a.createElement(et, null)
          );
        }
      };
      Ke = Object(n.b)([m.a], Ke);
      const et = Object(m.a)(() => {
        const e = Object(o.i)("*/reward/:definitionid"),
          t = e && e.params && e.params.definitionid,
          a = parseInt(t);
        return (
          i.a.useEffect(() => {
            a && !isNaN(a) && Object(F.f)(null, a);
          }, [a]),
          null
        );
      });
      let tt = class extends i.a.Component {
        GetCoupon() {
          const e = _.b.Get().GetCouponPromosForUser();
          let t = _.b.Get().GetPointsAvailable(),
            a = 0,
            n = 0,
            r = 0,
            i = 0;
          return (
            e.forEach((e) => {
              const o = _.b.Get().GetCouponDefinition(e.loyalty_reward_id);
              if (o) {
                (i += e.max_use_count * parseInt(e.discount_amount)),
                  (n += e.available_use_count);
                for (let n = 0; n < e.available_use_count; n++) {
                  a + parseInt(o.point_cost) <= t.getLowBits() &&
                    ((r += parseInt(e.discount_amount)),
                    (a += parseInt(o.point_cost))),
                    (r = Math.max(r, parseInt(e.discount_amount))),
                    a || (a = parseInt(o.point_cost));
                }
              }
            }),
            null
          );
        }
        render() {
          const e = [];
          _.b
            .Get()
            .getLoyaltyRewardDefMap()
            .forEach((t) => {
              e.length < 3 && 1 == t.type && e.push(t);
            });
          const t = _.b
              .Get()
              .GetPageDescriptor({ type: "custom", pageid: _.f }),
            a = i.a.createElement(
              "div",
              { className: u.PageHomeTop },
              i.a.createElement(
                "div",
                { className: u.PageHomeBanner },
                i.a.createElement("img", {
                  className: u.HomeRewardsPointsIcon,
                  src: ve.a,
                }),
                i.a.createElement("img", {
                  className: u.PageHomeBannerFloor,
                  src: Ge.a,
                }),
                i.a.createElement(
                  "div",
                  { className: u.PageHomeBannerIcons },
                  i.a.createElement("img", {
                    className: u.PageHomeBannerChicken,
                    src: Be.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerBored,
                    src: je.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerHugs,
                    src: Pe.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerHappy,
                    src: Oe.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerBoombox,
                    src: De.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerDance,
                    src: ke.a,
                  })
                )
              ),
              i.a.createElement(
                "div",
                { className: u.PageHomeTitleContainer },
                i.a.createElement(
                  "div",
                  { className: u.PageHomeTopTitle },
                  Object(f.g)("#ShopHome_UseRewardPoints")
                ),
                i.a.createElement(
                  "div",
                  { className: u.PageHomeTopSubTitle },
                  Object(f.g)("#ShopHome_UseRewardPoints_Subtitle")
                )
              ),
              i.a.createElement(
                d.b,
                { to: s.b.LoyaltyHowItWorks() },
                i.a.createElement(
                  p.a,
                  { className: u.PageHomeHowItWorks },
                  " ",
                  Object(f.g)("#ShopHome_HowLinkBtn")
                )
              )
            );
          return i.a.createElement(
            me.b,
            null,
            t &&
              i.a.createElement(
                ot,
                { header: a, descriptor: t },
                _.b.Get().BIsSaleActive() &&
                  i.a.createElement(B.b, null, i.a.createElement(Ye, null))
              )
          );
        }
      };
      tt = Object(n.b)([m.a], tt);
      const at = () =>
          i.a.createElement(
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
              i.a.createElement(mt, null)
            ),
            !1,
            i.a.createElement(
              o.b,
              { path: s.b.LoyaltyProfileCustomizations() },
              i.a.createElement(Je, null)
            ),
            i.a.createElement(o.b, {
              path: s.b.LoyaltyItemBundle(":bundleid"),
              render: (e) => i.a.createElement($e, Object.assign({}, e)),
            }),
            i.a.createElement(o.b, {
              path: `${s.b.LoyaltyStore()}/app/:appid/cluster/:clusterindex`,
              render: (e) => i.a.createElement(st, Object.assign({}, e)),
            }),
            i.a.createElement(o.b, {
              path: `${s.b.LoyaltyStore()}/app/:appid`,
              render: (e) =>
                i.a.createElement(lt, {
                  appid: parseInt(e.match.params.appid),
                }),
            }),
            i.a.createElement(o.b, {
              path: `${s.b.LoyaltyStore()}/c/:pageid/cluster/:clusterindex`,
              render: (e) => i.a.createElement(st, Object.assign({}, e)),
            }),
            i.a.createElement(o.b, {
              path: `${s.b.LoyaltyStore()}/c/:pageid`,
              render: (e) =>
                i.a.createElement(it, { pageid: e.match.params.pageid }),
            }),
            i.a.createElement(o.b, null, i.a.createElement(rt, null))
          ),
        nt = () => i.a.createElement(se.b, null),
        rt = () => i.a.createElement(tt, null);
      let it = class extends i.a.Component {
        componentDidMount() {
          _.b.Get().SetIsUsingAppIDFilters(!0);
        }
        componentWillUnmount() {
          _.b.Get().SetIsUsingAppIDFilters(!1);
        }
        render() {
          const { pageid: e } = this.props,
            t = _.b.Get().GetAppIDFilters(),
            a = Array.from(t.keys()),
            n = _.b.Get().GetPageDescriptor({ type: "custom", pageid: e });
          return i.a.createElement(
            me.e,
            null,
            n
              ? i.a.createElement(ot, {
                  descriptor: n,
                  additionalFilter: a.length ? { appid: a } : void 0,
                })
              : i.a.createElement(I, null)
          );
        }
      };
      it = Object(n.b)([m.a], it);
      let ot = class extends i.a.Component {
        render() {
          const {
              descriptor: {
                items: e,
                title: t,
                subtitle: a,
                headerImage: r,
                params: o,
              },
              header: s,
              additionalFilter: l,
            } = this.props,
            c =
              s ||
              i.a.createElement(me.f, {
                title: t,
                subtitle: a,
                headerImage: r,
              });
          return i.a.createElement(
            g.a,
            { paddingX: "none" },
            i.a.createElement(
              g.f,
              {
                className: u.PageItemsContainer,
                itemClassName: u.PageItemsContainerChildren,
                spacing: "xlarge",
              },
              c,
              this.props.children,
              e.map((e, t) => {
                switch (e.type) {
                  case "banner":
                    const { type: a } = e,
                      r = Object(n.c)(e, ["type"]);
                    return i.a.createElement(
                      ie,
                      Object.assign({}, r, { key: `${e.title}_${t}` })
                    );
                  case "clusterview":
                    return i.a.createElement(Y, {
                      key: `${e.view.cluster.id}_${t}`,
                      descriptor: e.view,
                      additionalFilter: l,
                      linkedPage:
                        null === e.view.linkedPage
                          ? void 0
                          : e.view.linkedPage ||
                            Object.assign(Object.assign({}, o), {
                              clusterindex: t,
                            }),
                    });
                }
              })
            )
          );
        }
      };
      ot = Object(n.b)([m.a], ot);
      let st = class extends i.a.Component {
        componentDidMount() {
          _.b.Get().SetIsUsingAppIDFilters(!0);
        }
        componentWillUnmount() {
          _.b.Get().SetIsUsingAppIDFilters(!1);
        }
        DeriveClusterView() {
          const {
              match: {
                params: { pageid: e, appid: t, clusterindex: a },
              },
            } = this.props,
            n = parseInt(a);
          if (isNaN(n)) return null;
          let r;
          if (e) r = { type: "custom", pageid: e };
          else {
            if (!t)
              return (
                console.error("Could not determine owning page for cluster"),
                null
              );
            {
              const e = parseInt(t);
              if (isNaN(e)) return null;
              r = { type: "app", appid: e };
            }
          }
          const i = _.b.Get().GetPageDescriptor(r);
          if (!i) return null;
          const o = i.items[n];
          return o && "clusterview" === o.type
            ? Object.assign(Object.assign({}, o.view), { type: 0 })
            : null;
        }
        render() {
          const e = this.DeriveClusterView();
          if (!e) return null;
          const t = _.b.Get().GetAppIDFilters(),
            a = Array.from(t.keys());
          return i.a.createElement(
            me.e,
            null,
            i.a.createElement(
              g.a,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              i.a.createElement(Y, {
                descriptor: e,
                additionalFilter: a.length ? { appid: a } : void 0,
              })
            )
          );
        }
      };
      st = Object(n.b)([m.a], st);
      let lt = class extends i.a.Component {
        render() {
          const { appid: e } = this.props,
            t = _.b.Get().GetPageDescriptor({ type: "app", appid: e }),
            a = oe.a.GetAppInfo(e);
          return t
            ? i.a.createElement(
                me.a,
                { appid: e },
                i.a.createElement(ot, {
                  header: i.a.createElement(me.f, {
                    title: i.a.createElement(
                      "a",
                      { href: `${l.d.STORE_BASE_URL}app/${a.appid}` },
                      a.name
                    ),
                    subtitle: t.subtitle,
                  }),
                  descriptor: t,
                })
              )
            : null;
        }
      };
      lt = Object(n.b)([m.a], lt);
      class ct extends i.a.Component {
        render() {
          return _.b.Get().BIsLoggedIn()
            ? this.props.children
            : i.a.createElement(
                me.e,
                null,
                i.a.createElement(ot, { descriptor: this.props.descriptor }),
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
                    Object(f.g)("#RequiresLogin_Desc")
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
                        onClick: () => _.b.Get().ShowLoginDialog(),
                      },
                      i.a.createElement(
                        "span",
                        null,
                        Object(f.g)("#RequiresLogin_Button")
                      )
                    )
                  )
                )
              );
        }
      }
      let mt = class extends i.a.Component {
        constructor() {
          super(...arguments), (this.state = { cVisible: 5 });
        }
        componentDidMount() {
          _.b.Get().SetIsUsingAppIDFilters(!0);
        }
        componentWillUnmount() {
          _.b.Get().SetIsUsingAppIDFilters(!1);
        }
        render() {
          const { cVisible: e } = this.state,
            t = _.b.Get().GetAppIDFilters();
          let a = _.b.Get().GetSortedGamesWithRewards();
          0 != t.size && (a = a.filter((e) => t.has(e)));
          const n = {
            title: Object(f.g)("#ShopPageTitle_ByGame"),
            subtitle: Object(f.g)("#ShopPageTitle_ByGame_Subtitle"),
            items: a
              .slice(0, e)
              .map((e) => ({
                type: "clusterview",
                view: {
                  type: 1,
                  linkedPage: { type: "app", appid: e },
                  cluster: new _.a(e),
                },
              })),
            params: { type: "custom", pageid: "bygame" },
          };
          return i.a.createElement(
            ct,
            { descriptor: n },
            i.a.createElement(
              me.e,
              null,
              i.a.createElement(ot, { descriptor: n }),
              i.a.createElement(y.a, {
                trigger: "repeated",
                onVisibilityChange: (t) =>
                  t && e < a.length && this.setState({ cVisible: e + 10 }),
                rootMargin: "0px 0px 100px 0px",
              })
            )
          );
        }
      };
      mt = Object(n.b)([m.a], mt);
      var dt = a("0FY4");
      const pt = Object(m.a)(() =>
          i.a.createElement(
            me.d,
            null,
            i.a.createElement(
              g.a,
              {
                marginX: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              i.a.createElement(
                g.a,
                {
                  marginY: "xlarge",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  className: dt.Header,
                },
                i.a.createElement(be.db, { className: dt.Icon }),
                i.a.createElement(
                  "div",
                  { className: dt.Title },
                  Object(f.g)("#BonusPoints_Title")
                ),
                i.a.createElement(
                  "div",
                  { className: dt.Subtitle },
                  Object(f.g)("#BonusPoints_Description")
                )
              ),
              i.a.createElement(
                g.f,
                { spacing: "small" },
                _.b
                  .Get()
                  .active_bonuses.map((e) =>
                    i.a.createElement(ut, { key: e.bonusid, bonus: e })
                  )
              )
            )
          )
        ),
        ut = Object(m.a)((e) => {
          const {
              bonus: {
                appid: t,
                points: a,
                timestamp_end: r,
                internal_description: o,
              },
            } = e,
            s = Object(n.c)(e, ["bonus"]),
            { header_image_url: l, name: c } = oe.a.GetAppInfo(t);
          return i.a.createElement(
            _t,
            Object.assign(
              {
                imgSrc: l,
                name: c,
                expiration: r,
                description: o,
                pointValue: a,
              },
              s
            )
          );
        }),
        _t = (e) => {
          const {
              imgSrc: t,
              name: a,
              expiration: n,
              description: r,
              pointValue: o,
            } = e,
            s = Object(f.s)(n - Date.now() / 1e3, !0);
          return i.a.createElement(
            g.a,
            {
              paddingX: "small",
              paddingY: "xsmall",
              display: "flex",
              flexDirection: "row",
              className: dt.Opportunity,
            },
            i.a.createElement("img", { className: dt.Img, src: t }),
            i.a.createElement(
              g.a,
              {
                paddingX: "xsmall",
                display: "flex",
                flexDirection: "column",
                flex: "1",
              },
              i.a.createElement("div", null, a),
              i.a.createElement("div", null, s),
              i.a.createElement("div", null, r)
            ),
            i.a.createElement(
              "div",
              null,
              i.a.createElement(be.db, { className: dt.Icon }),
              i.a.createElement("div", null, "+", o)
            )
          );
        };
      var gt = a("Zdsb");
      var ft = a("gxgZ"),
        ht = a.n(ft),
        bt = (a("8j8b"), a("Lvue"), a("6bk4")),
        Ct = a.n(bt),
        It = a("++az"),
        yt = a.n(It),
        wt = (a("kJAG"), a("sf1Z"), a("Cw7J")),
        Mt = a.n(wt),
        Et = (a("FYLW"), a("TL5o"), a("J8Mo"), a("2y1i"), a("bnhs")),
        vt = a.n(Et),
        Nt = a("Bww3"),
        jt = a.n(Nt),
        St = a("eeci"),
        Ot = a.n(St),
        At = a("9jkg"),
        Dt = a.n(At),
        xt = a("M2Z0"),
        Bt = a.n(xt),
        Lt = a("7JP+"),
        Pt = a.n(Lt),
        Rt = a("nu2M"),
        kt = a.n(Rt),
        Tt = a("FfFA"),
        Gt = a.n(Tt),
        Ft = a("bFVC"),
        zt = a.n(Ft),
        Ht = a("Wl4Y"),
        Ut = a.n(Ht),
        Vt = a("BK9T"),
        Zt = a.n(Vt),
        Wt = a("mpVu"),
        Yt = a.n(Wt),
        Qt = a("px4M"),
        qt = a.n(Qt),
        Xt = a("uOv9");
      const Jt = (e) => {
          const { children: t, iconComponent: a, descCallout: n } = e,
            r = a,
            o = n;
          return i.a.createElement(
            "div",
            { className: Xt.CalloutContainer },
            i.a.createElement(
              "div",
              { className: Xt.CalloutIconContainer },
              i.a.createElement(r, { className: Xt.CalloutIcon })
            ),
            i.a.createElement(
              "div",
              { className: Xt.CalloutText },
              " ",
              Object(f.g)(o),
              " "
            )
          );
        },
        $t = (e) =>
          i.a.createElement(
            g.a,
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xlarge",
              className: Xt.PageContainer,
            },
            i.a.createElement(
              "div",
              { className: Xt.HeaderText },
              Object(f.g)("#HowItWorks_SteamPoints")
            ),
            i.a.createElement(
              "div",
              { className: Xt.SubHeaderText },
              Object(f.g)("#HowItWorks_SteamPoints_Desc1")
            ),
            i.a.createElement("img", { src: Ut.a, className: Xt.HeaderImage }),
            i.a.createElement(
              "div",
              { className: Xt.SubHeaderText },
              Object(f.g)("#HowItWorks_SteamPoints_Desc2")
            )
          ),
        Kt = (e) => {
          let t = Object(f.p)(
            "#HowItWorks_Conversion",
            i.a.createElement("span", null, e.numPoints.toLocaleString()),
            i.a.createElement(
              "span",
              null,
              ((a = e.dollarConversion),
              "undefined" == typeof GStoreItemData
                ? (console.error("Unable to find GStoreItemData"), null)
                : GStoreItemData.fnFormatCurrency(a))
            )
          );
          var a;
          return i.a.createElement(
            g.e,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "medium",
              className: Xt.PageContainer,
              focusable: !0,
              noFocusRing: !0,
            },
            i.a.createElement(
              "div",
              { className: Object(b.a)(Xt.ConvertionSectionTextContainer) },
              i.a.createElement("div", { className: Xt.PointsConvertion }, t),
              i.a.createElement(
                "div",
                { className: Xt.SectionSubtitle },
                Object(f.g)("#HowItWorks_How_Desc")
              )
            )
          );
        },
        ea = (e) => {
          let t = Object(f.p)(
            "#ShopName",
            i.a.createElement("span", null, Object(f.g)("#ShopNamePre")),
            Object(f.g)("#ShopNamePost")
          );
          return i.a.createElement(
            g.a,
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
            },
            i.a.createElement(
              g.e,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                className: Xt.UsePointsIconContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement(Ue.g, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim1),
              }),
              i.a.createElement(be.e, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim2),
              }),
              i.a.createElement(be.f, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim3),
              }),
              i.a.createElement(Ue.m, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim4),
              }),
              i.a.createElement(be.p, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim5),
              }),
              i.a.createElement(be.n, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim6),
              }),
              i.a.createElement(be.o, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim7),
              }),
              i.a.createElement(Ue.A, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim8),
              }),
              i.a.createElement(Ue.g, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim1),
              }),
              i.a.createElement(be.e, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim2),
              }),
              i.a.createElement(be.f, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim3),
              }),
              i.a.createElement(Ue.m, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim4),
              }),
              i.a.createElement(be.p, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim5),
              }),
              i.a.createElement(be.n, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim6),
              }),
              i.a.createElement(be.o, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim7),
              }),
              i.a.createElement(Ue.A, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim8),
              }),
              i.a.createElement(Ue.g, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim1),
              }),
              i.a.createElement(be.e, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim2),
              }),
              i.a.createElement(be.f, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim3),
              }),
              i.a.createElement(Ue.m, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim4),
              }),
              i.a.createElement(be.p, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim5),
              }),
              i.a.createElement(be.n, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim6),
              }),
              i.a.createElement(be.o, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim7),
              }),
              i.a.createElement(Ue.A, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim8),
              }),
              i.a.createElement(Ue.g, {
                className: Object(b.a)(Xt.UsePointsSvg, Xt.UsePointsAnim1),
              })
            ),
            i.a.createElement(
              g.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "xxlarge",
                className: Xt.PageContainer,
              },
              i.a.createElement(
                "div",
                { className: Xt.ShellHeaderBrandName },
                t
              ),
              i.a.createElement(
                "div",
                { className: Xt.SectionSubtitle },
                Object(f.g)("#HowItWorks_UsePoints_Desc1")
              ),
              i.a.createElement(
                g.e,
                {
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "large",
                  focusable: !0,
                  noFocusRing: !0,
                },
                i.a.createElement(Jt, {
                  iconComponent: Ue.p,
                  descCallout: "#HowItWorks_DoNotExpire",
                }),
                i.a.createElement(Jt, {
                  iconComponent: Ue.i,
                  descCallout: "#HowItWorks_Permanent",
                }),
                i.a.createElement(Jt, {
                  iconComponent: Ue.q,
                  descCallout: "#HowItWorks_Marketable",
                })
              ),
              i.a.createElement(
                g.e,
                {
                  className: Xt.CollectionItemsContainer,
                  focusable: !0,
                  noFocusRing: !0,
                },
                i.a.createElement("img", { className: Xt.ItemLeft, src: Ct.a }),
                i.a.createElement("img", {
                  className: Xt.ItemLeftMid,
                  src: je.a,
                }),
                i.a.createElement(
                  "div",
                  { className: Xt.ItemMiddle },
                  i.a.createElement("img", {
                    className: Xt.ItemFrame,
                    src: Mt.a,
                  }),
                  i.a.createElement("img", {
                    className: Xt.ItemAvatar,
                    src: yt.a,
                  })
                ),
                i.a.createElement("img", {
                  className: Xt.ItemRightMid,
                  src: Oe.a,
                }),
                i.a.createElement("img", { className: Xt.ItemRight, src: De.a })
              )
            )
          );
        },
        ta = () => {
          let e = s.b.LoyaltyByGame();
          return i.a.createElement(
            "div",
            {
              className: Xt.SectionTileContainer,
              style: { backgroundImage: `url(${ht.a})` },
            },
            i.a.createElement(
              g.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "xlarge",
                paddingLeft: "xlarge",
                paddingBottom: "xxlarge",
              },
              i.a.createElement(Ue.A, { className: Xt.SectionIcons }),
              i.a.createElement(
                d.b,
                { to: e },
                i.a.createElement(
                  "div",
                  { className: Xt.SectionTitle },
                  Object(f.g)("#HowItWorks_YourGames")
                )
              ),
              i.a.createElement(
                "div",
                { className: Xt.SectionSubtitle },
                Object(f.g)("#HowItWorks_YourGames_Desc1")
              ),
              i.a.createElement(
                g.e,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                  focusable: !0,
                  noFocusRing: !0,
                },
                i.a.createElement(Jt, {
                  iconComponent: Ue.q,
                  descCallout: "#HowItWorks_YourGames_TradingCards",
                })
              )
            )
          );
        },
        aa = Object(m.a)(() => {
          let e = _.b.Get().GetCommunityAwardPointsTransferred(),
            t = l.d.STORE_BASE_URL + "labs/trendingreviews/",
            a = l.d.COMMUNITY_BASE_URL + "?subsection=workshop";
          return i.a.createElement(
            g.a,
            {
              id: "CommunityAwards",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
            },
            i.a.createElement(
              g.e,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                className: Xt.UsePointsIconContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement("img", { src: jt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: vt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Pt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: kt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Gt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: jt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Bt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Pt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: kt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Gt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: jt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: vt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Pt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: kt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Gt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: jt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Bt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Pt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: kt.a, className: Xt.ScrollIcon }),
              i.a.createElement("img", { src: Gt.a, className: Xt.ScrollIcon })
            ),
            i.a.createElement(
              g.e,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "xxlarge",
                className: Xt.PageContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement(
                "div",
                { className: Xt.ShellHeaderBrandName },
                Object(f.g)("#HowItWorks_ReviewAwards")
              ),
              i.a.createElement(
                "div",
                { className: Xt.SectionSubtitle },
                Object(f.g)("#HowItWorks_ReviewAwardsWinter_Desc", e)
              ),
              i.a.createElement("img", { src: zt.a, className: Xt.AwardsUiImg })
            ),
            i.a.createElement(
              g.e,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "large",
                className: Xt.PageContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement(
                g.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                },
                i.a.createElement("img", {
                  src: Ot.a,
                  className: Xt.AwardsHotTakeApng,
                }),
                i.a.createElement(
                  g.a,
                  { display: "flex", flexDirection: "column" },
                  i.a.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        Xt.SectionSubtitle,
                        Xt.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(f.g)("#HowItWorks_AwardsReviews", e)
                  ),
                  i.a.createElement(
                    "a",
                    { href: t },
                    i.a.createElement(
                      "div",
                      { className: Xt.AwardsLink },
                      Object(f.g)("#HowItWorks_AwardsReviewsLink")
                    )
                  )
                )
              ),
              i.a.createElement(
                g.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                },
                i.a.createElement("img", {
                  src: Zt.a,
                  className: Xt.AwardsApng,
                }),
                i.a.createElement(
                  g.a,
                  { display: "flex", flexDirection: "column" },
                  i.a.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        Xt.SectionSubtitle,
                        Xt.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(f.g)("#HowItWorks_AwardsUgc", e)
                  ),
                  i.a.createElement(
                    "a",
                    { href: a },
                    i.a.createElement(
                      "div",
                      { className: Xt.AwardsLink },
                      Object(f.g)("#HowItWorks_AwardsUgcLink")
                    )
                  )
                )
              ),
              i.a.createElement(
                g.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                },
                i.a.createElement("img", {
                  src: Dt.a,
                  className: Xt.AwardsHotTakeApng,
                }),
                i.a.createElement(
                  g.a,
                  { display: "flex", flexDirection: "column" },
                  i.a.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        Xt.SectionSubtitle,
                        Xt.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(f.g)("#HowItWorks_AwardsProfile", e)
                  )
                )
              )
            ),
            i.a.createElement(
              g.e,
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "xlarge",
                className: Xt.PageContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement(
                g.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: Xt.AwardBadgeContainer,
                },
                i.a.createElement("img", { src: qt.a }),
                i.a.createElement(
                  "div",
                  {
                    className: Xt.SectionTitleSmall,
                    style: { paddingTop: "32px" },
                  },
                  Object(f.g)("#HowItWorks_Patron_Badge"),
                  " "
                ),
                i.a.createElement(
                  "div",
                  { className: Xt.SectionSubtitleBadge },
                  Object(f.g)("#HowItWorks_Patron_Badge_Desc")
                )
              ),
              i.a.createElement(
                g.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: Xt.AwardBadgeContainer,
                },
                i.a.createElement("img", { src: Yt.a }),
                i.a.createElement(
                  "div",
                  {
                    className: Xt.SectionTitleSmall,
                    style: { paddingTop: "32px" },
                  },
                  Object(f.g)("#HowItWorks_Contributor_Badge"),
                  " "
                ),
                i.a.createElement(
                  "div",
                  { className: Xt.SectionSubtitleBadge },
                  Object(f.g)("#HowItWorks_Contributor_Badge_Desc")
                )
              )
            )
          );
        });
      const na = () => {
          const e = (function () {
            const e = Object(gt.b)(l.d.EREALM);
            return [
              {
                question: "#Faq_GetPoints_Q",
                answer: [
                  "#Faq_GetPoints_A",
                  "#Faq_GetPoints_A1",
                  !e && "#Faq_GetPoints_A2",
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
          })();
          return i.a.createElement(
            g.a,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "xxxlarge",
              className: Xt.FaqContainer,
            },
            i.a.createElement(
              g.a,
              { display: "flex", flexDirection: "column" },
              i.a.createElement(
                "div",
                { className: Xt.FaqTitle },
                Object(f.g)("#Faq_Title")
              ),
              e.map((e) =>
                i.a.createElement(
                  ra,
                  Object.assign({}, e, {
                    key: Array.isArray(e.question) ? e.question[0] : e.question,
                  })
                )
              )
            )
          );
        },
        ra = (e) => {
          const { question: t, answer: a } = e,
            n = Array.isArray(t) ? t : [t],
            r = Array.isArray(a) ? a : [a];
          return i.a.createElement(
            g.e,
            {
              display: "flex",
              flexDirection: "column",
              paddingTop: "medium",
              paddingBottom: "medium",
              focusable: !0,
            },
            n.map((e) => i.a.createElement(ia, { key: e }, Object(f.g)(e))),
            r.map((e) => i.a.createElement(oa, { key: e }, Object(f.g)(e)))
          );
        },
        ia = ({ children: e }) =>
          i.a.createElement("div", { className: Xt.FaqQuestion }, e),
        oa = ({ children: e }) =>
          i.a.createElement("div", { className: Xt.FaqAnswer }, e),
        sa = () => {
          let e = _.b.Get().GetConfig().points_conversion.unit_spend,
            t = _.b.Get().GetConfig().points_conversion.points;
          return i.a.createElement(
            me.c,
            null,
            i.a.createElement(
              me.b,
              null,
              i.a.createElement(
                g.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  style: { width: "100%" },
                  id: "Title",
                },
                i.a.createElement($t, null),
                i.a.createElement(Kt, { dollarConversion: e, numPoints: t }),
                i.a.createElement(ea, null),
                i.a.createElement(ta, null),
                !Object(gt.b)(l.d.EREALM) && i.a.createElement(aa, null),
                i.a.createElement(na, null)
              )
            )
          );
        };
      var la = a("8j16"),
        ca = a("tQrp");
      let ma = class extends i.a.Component {
        constructor(e) {
          super(e), _.b.Get().GetLoyaltyRewardsSummary();
        }
        render() {
          return Object(gt.b)(l.d.EREALM)
            ? i.a.createElement(
                me.e,
                null,
                i.a.createElement(
                  g.a,
                  {
                    className: la.PageContainer,
                    marginX: "xlarge",
                    display: "flex",
                    flexDirection: "column",
                  },
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "large",
                      display: "flex",
                      flexDirection: "column",
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.PageHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_Header_China")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_Intro_China")
                    )
                  ),
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: la.Section,
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_1_Title_China")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_1_Desc_China")
                    )
                  ),
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: la.Section,
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_2_Title_China")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_2_Desc_China")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_2_Desc2_China")
                    )
                  ),
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: la.Section,
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_3_Title_China")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_3_Desc_China")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_3_Desc2_China")
                    )
                  ),
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: la.Section,
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_4_Title_China")
                    ),
                    i.a.createElement(
                      g.a,
                      { marginY: "xsmall", className: la.SectionContent },
                      Object(f.p)(
                        "#LunarSale2022_Rules_4_Desc_China",
                        i.a.createElement(
                          ca.b,
                          { href: l.d.STORE_BASE_URL + "privacy_agreement" },
                          Object(f.g)("#LunarSale2022_Rules_ClickHere")
                        )
                      )
                    )
                  )
                )
              )
            : i.a.createElement(
                me.e,
                null,
                i.a.createElement(
                  g.a,
                  {
                    className: la.PageContainer,
                    marginX: "xlarge",
                    display: "flex",
                    flexDirection: "column",
                  },
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "large",
                      display: "flex",
                      flexDirection: "column",
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.PageHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_Header")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_Intro")
                    )
                  ),
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: la.Section,
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_1_Title")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_1_Desc")
                    )
                  ),
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: la.Section,
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_2_Title")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_2_Desc")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_2_Desc2")
                    )
                  ),
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: la.Section,
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_3_Title")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_3_Desc")
                    ),
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionContent,
                      },
                      Object(f.g)("#LunarSale2022_Rules_3_Desc2")
                    )
                  ),
                  i.a.createElement(
                    g.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: la.Section,
                    },
                    i.a.createElement(
                      g.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: la.SectionHeader,
                      },
                      Object(f.g)("#LunarSale2022_Rules_4_Title")
                    ),
                    i.a.createElement(
                      g.a,
                      { marginY: "xsmall", className: la.SectionContent },
                      Object(f.p)(
                        "#LunarSale2022_Rules_4_Desc",
                        i.a.createElement(
                          ca.b,
                          { href: l.d.STORE_BASE_URL + "privacy_agreement" },
                          Object(f.g)("#LunarSale2022_Rules_ClickHere")
                        )
                      )
                    )
                  )
                )
              );
        }
      };
      ma = Object(n.b)([m.a], ma);
      var da = a("lo3/"),
        pa = (a("ROh0"), a("hCpY"));
      a("4CF9"), a("hane");
      const ua = "FocusNavHistoryID";
      function _a(e) {
        const { children: t } = e,
          a = Object(n.c)(e, ["children"]),
          i = (function () {
            const e = Object(o.g)(),
              t = r.useRef(),
              a = Object(o.h)(),
              n = a.state && a.state.FocusNavHistoryID,
              i = r.useRef();
            return (
              r.useLayoutEffect(() => {
                if (!t.current) return;
                const a = t.current;
                return a
                  .Node()
                  .Tree.Controller.FocusChangedCallbacks.Register((t, n, r) => {
                    const o = e.location;
                    let s = o.state && o.state.FocusNavHistoryID;
                    s ||
                      ((s = `State_${o.key}`),
                      (i.current = s),
                      e.replace(
                        o.pathname,
                        Object.assign(Object.assign({}, o.state), { [ua]: s })
                      )),
                      i.current == s && a.SaveState(s);
                  }).Unregister;
              }, [e]),
              r.useEffect(() => {
                if (t.current && i.current != n) {
                  const e = t.current.NavTree().DeferredFocus;
                  e.SuppressFocus();
                  const a = window.setTimeout(() => {
                    t.current.RestoreState(n, 1)
                      ? e.Reset()
                      : e.ExecuteQueuedFocus(),
                      (i.current = n);
                  }, 2);
                  return () => {
                    window.clearTimeout(a), e.ExecuteQueuedFocus();
                  };
                }
              }, [n, e]),
              t
            );
          })();
        return r.createElement(
          w.a,
          Object.assign(Object.assign({}, a), { navRef: i }),
          t
        );
      }
      var ga = a("Sn0s"),
        fa = a("r0f0"),
        ha = a("1Gs6"),
        ba = a("SS8s"),
        Ca = a("pC2t"),
        Ia = a("1U4k");
      const ya = (e) => {
          const { appid: t } = e,
            a = oe.a.GetAppInfo(t);
          return r.createElement(
            "div",
            {
              className: Ia.CurrentAppFilter,
              onClick: () => {
                _.b.Get().RemoveAppIDFilter(t);
              },
            },
            r.createElement("div", null, a.name),
            r.createElement(Ue.d, { className: Ia.AppFilterClearIcon })
          );
        },
        wa = (e) => {
          const { appid: t } = e,
            a = oe.a.GetAppInfo(t);
          return r.createElement(
            "div",
            {
              className: Ia.SuggestedAppFilter,
              onClick: () => {
                _.b.Get().AddAppIDFilter(t);
              },
            },
            r.createElement(Ue.a, { className: Ia.AddGameToFilterIcon }),
            r.createElement(
              "div",
              { className: Ia.SuggestedAppFilterName },
              a.name
            )
          );
        };
      let Ma = class extends r.Component {
        constructor(e) {
          super(e),
            (this.state = {
              strFilterAppText: _.b.Get().GetCurrentAppFilterText(),
            });
        }
        componentDidMount() {
          let e = _.b.Get().GetSortedGamesWithRewards();
          oe.a.EnsureAppInfoForAppIDs(e);
        }
        CloseModal() {
          this.props.closeModal && this.props.closeModal();
        }
        OnChangeAppFilterCheckbox(e, t) {
          e ? _.b.Get().AddAppIDFilter(t) : _.b.Get().RemoveAppIDFilter(t);
        }
        OnFilterByText(e) {
          let t = e.target.value.toLowerCase();
          this.timeout && clearTimeout(this.timeout),
            (this.timeout = window.setTimeout(() => {
              _.b.Get().SetCurrentAppFilterText(t);
            }, 300)),
            this.setState({ strFilterAppText: t });
        }
        ClearAppFilterString() {
          this.setState({ strFilterAppText: "" }),
            _.b.Get().SetCurrentAppFilterText("");
        }
        render() {
          let e = this.state.strFilterAppText,
            t = _.b.Get().GetAppIDFilters(),
            a = _.b.Get().GetSortedGamesWithRewards(),
            n = [];
          if (0 == e.length)
            for (
              let e = 0;
              e < a.length && e < this.props.maxGamesToDisplay;
              ++e
            ) {
              let r = a[e];
              t.has(r) || n.push(r);
            }
          let i = a.filter((a) => {
              if (t.has(a)) return !1;
              if (e.length < this.props.minCharactersForNameFilter) return !1;
              if (!oe.a.GetAppInfo(a)) return !1;
              let n = oe.a.GetAppInfo(a).name;
              return !!n && ((n = n.toLowerCase()), -1 != n.indexOf(e));
            }),
            o = null;
          return (
            0 != e.length &&
              0 == i.length &&
              (o = r.createElement(
                "div",
                { className: Ia.AppFilterNoMatches },
                Object(f.g)("#AppFilter_NoMatches")
              )),
            r.createElement(
              "div",
              { className: Ia.ManageAppFiltersPopup },
              r.createElement(
                "div",
                { className: Ia.HeaderContainer },
                r.createElement(
                  "div",
                  { className: Ia.Header },
                  Object(f.g)("#AppFilter_Label")
                )
              ),
              0 != t.size &&
                r.createElement(
                  "div",
                  { className: Ia.CurrentAppFiltersContainer },
                  Array.from(t.keys()).map((e) =>
                    oe.a.GetAppInfo(e).is_valid
                      ? r.createElement(ya, { key: e, appid: e })
                      : null
                  )
                ),
              r.createElement(
                "div",
                { className: Ia.AppInputFilterContainer },
                r.createElement("input", {
                  className: Ia.AppInputFilter,
                  type: "text",
                  onChange: this.OnFilterByText,
                  value: e,
                }),
                r.createElement(
                  "div",
                  {
                    className: Ia.AppFilterClearButton,
                    onClick: this.ClearAppFilterString,
                  },
                  r.createElement(Ue.d, { className: Ia.AppFilterClearIcon })
                )
              ),
              o,
              r.createElement(
                "div",
                { className: Ia.AppCheckboxesContainer },
                i.map((e) =>
                  oe.a.GetAppInfo(e).is_valid
                    ? r.createElement(wa, { key: e, appid: e })
                    : null
                )
              ),
              0 != n.length &&
                r.createElement(
                  "div",
                  { className: Ia.HeaderContainer },
                  r.createElement(
                    "div",
                    { className: Ia.Header },
                    Object(f.g)("#AppFilter_FilterByRecentlyPlayed")
                  )
                ),
              0 != n.length &&
                r.createElement(
                  "div",
                  { className: Ia.AppCheckboxesContainer },
                  n.map((e) =>
                    oe.a.GetAppInfo(e).is_valid
                      ? r.createElement(wa, { key: e, appid: e })
                      : null
                  )
                )
            )
          );
        }
      };
      (Ma.defaultProps = {
        maxGamesToDisplay: 3,
        minCharactersForNameFilter: 3,
      }),
        Object(n.b)([pa.b], Ma.prototype, "CloseModal", null),
        Object(n.b)([pa.b], Ma.prototype, "OnChangeAppFilterCheckbox", null),
        Object(n.b)([pa.b], Ma.prototype, "OnFilterByText", null),
        Object(n.b)([pa.b], Ma.prototype, "ClearAppFilterString", null),
        (Ma = Object(n.b)([m.a], Ma));
      let Ea = "",
        va = null,
        Na = null,
        ja = null;
      function Sa() {
        (Ea = ""),
          null !== va && va.disconnect(),
          null !== Na && (window.clearTimeout(Na), (Na = null));
      }
      function Oa() {
        const e = document.getElementById(Ea);
        return null !== e && (ja(e), Sa(), !0);
      }
      function Aa(e) {
        return i.a.forwardRef((t, a) => {
          const { scroll: r, smooth: o } = t,
            s = Object(n.c)(t, ["scroll", "smooth"]);
          return i.a.createElement(
            e,
            Object.assign({}, s, {
              onClick: (e) => {
                Sa(),
                  t.onClick && t.onClick(e),
                  "string" == typeof t.to
                    ? (Ea = t.to.split("#").slice(1).join("#"))
                    : "object" == typeof t.to &&
                      "string" == typeof t.to.hash &&
                      (Ea = t.to.hash.replace("#", "")),
                  "" !== Ea &&
                    ((ja =
                      t.scroll ||
                      ((e) =>
                        t.smooth
                          ? e.scrollIntoView({ behavior: "smooth" })
                          : e.scrollIntoView())),
                    window.setTimeout(() => {
                      !1 === Oa() &&
                        (null === va && (va = new MutationObserver(Oa)),
                        va.observe(document, {
                          attributes: !0,
                          childList: !0,
                          subtree: !0,
                        }),
                        (Na = window.setTimeout(() => {
                          Sa();
                        }, 1e4)));
                    }, 0));
              },
              ref: a,
            }),
            t.children
          );
        });
      }
      Aa(function (e) {
        return i.a.createElement(d.b, Object.assign({ component: ae }, e));
      });
      const Da = Aa(ne);
      var xa = a("1xRl"),
        Ba = a("rKGf");
      const La = i.a.createContext(() => {}),
        Pa = (e) => {
          var { children: t, className: a } = e,
            r = Object(n.c)(e, ["children", "className"]);
          const [o, s] = i.a.useState(null),
            [l, c] = i.a.useState(0),
            [m, d] = (function (e, t = { msDuration: 200, msInterval: 10 }) {
              const [a, n] = i.a.useState(null),
                r = i.a.useCallback((e) => n(e), []),
                { msDuration: o, msInterval: s } = t;
              return (
                i.a.useLayoutEffect(() => {
                  if (!a) return;
                  const t =
                      (Math.abs(e - a.scrollLeft) / (o / s)) *
                      (e < a.scrollLeft ? -1 : 1),
                    n = window.setInterval(() => {
                      Math.abs(t) < Math.abs(a.scrollLeft - e)
                        ? ((a.scrollLeft = e), clearInterval(n))
                        : (a.scrollLeft += t);
                    }, s);
                  return () => clearInterval(n);
                }, [e, a, o, s]),
                [r, a]
              );
            })(l),
            p = o
              ? { width: `${o.width}px`, transform: `translateX(${o.x}px)` }
              : void 0,
            u = i.a.useCallback(
              (e) => {
                if (
                  (o ? e.x !== o.x && e.width !== o.width && s(e) : s(e), d)
                ) {
                  const t = Math.max(
                    0,
                    Math.min(
                      e.x - d.clientWidth / 2 + e.width / 2,
                      d.scrollWidth - d.clientWidth
                    )
                  );
                  c(t);
                }
              },
              [o, d]
            ),
            [_, g] = i.a.useState(0);
          return (
            i.a.useLayoutEffect(() => {
              if (_) {
                const e = setInterval(() => c((e) => e + _), 50);
                return () => clearInterval(e);
              }
            }, [_]),
            i.a.createElement(
              La.Provider,
              { value: u },
              i.a.createElement(
                w.a,
                Object.assign({ "flow-children": "row" }, r, {
                  className: Object(b.a)(Ba.ItemContainer, a),
                  ref: m,
                  fnScrollIntoViewHandler: () => !0,
                }),
                t,
                i.a.createElement("div", { className: Ba.Accent, style: p })
              )
            )
          );
        },
        Ra = (e) => {
          var { children: t, active: a, className: r } = e,
            o = Object(n.c)(e, ["children", "active", "className"]);
          const s = i.a.useContext(La),
            [l, c] = i.a.useState(null),
            m = i.a.useCallback((e) => c(e), []);
          return (
            i.a.useLayoutEffect(() => {
              a && l && s({ x: l.offsetLeft, width: l.clientWidth });
            }, [a, l, s]),
            i.a.createElement(
              "div",
              Object.assign(
                { className: Object(b.a)(Ba.Item, a && Ba.Active, r), ref: m },
                o
              ),
              t
            )
          );
        };
      const ka = "#CommunityAwards",
        Ta = (e) => (t, a) => {
          if (!t) return !1;
          return (a.hash === ka) === e;
        },
        Ga = () => {
          const e = [
            {
              items: [
                {
                  props: {
                    iconComponent: Ue.o,
                    children: Object(f.g)("#HowItWorksLink"),
                    to: { pathname: s.b.LoyaltyHowItWorks(), hash: "#Title" },
                    isActive: Ta(!1),
                  },
                },
                {
                  props: {
                    iconComponent: Ue.u,
                    children: Object(f.g)("#ShopNav_Featured"),
                    to: s.b.LoyaltyStore(),
                    exact: !0,
                  },
                },
                {
                  props: {
                    iconComponent: Ue.A,
                    children: Object(f.g)("#ShopNav_ByGame"),
                    to: s.b.LoyaltyByGame(),
                  },
                },
              ],
            },
            {
              label: Object(f.g)("#ProfileItems"),
              items: [
                {
                  props: {
                    iconComponent: Ue.g,
                    children: Object(f.g)("#ShopNav_AvatarLink"),
                    to: s.b.LoyaltyAvatar(),
                  },
                },
                {
                  props: {
                    iconComponent: be.e,
                    children: Object(f.g)("#ShopNav_BackgroundsLink"),
                    to: s.b.LoyaltyBackgrounds(),
                  },
                },
              ],
            },
            {
              label: Object(f.g)("#ChatItems"),
              items: [
                {
                  props: {
                    iconComponent: be.p,
                    children: Object(f.g)("#ShopNav_StickersLink"),
                    to: s.b.LoyaltyStickers(),
                  },
                },
                {
                  props: {
                    iconComponent: be.n,
                    children: Object(f.g)("#ShopNav_ChatEffectsLink"),
                    to: s.b.LoyaltyChatEffects(),
                  },
                },
                {
                  props: {
                    iconComponent: be.o,
                    children: Object(f.g)("#ShopNav_EmoticonsLink"),
                    to: s.b.LoyaltyEmoticons(),
                  },
                },
              ],
            },
          ];
          e[0].items.push({
            props: {
              iconComponent: Ue.r,
              children: Object(f.g)("#ShopNav_ItemBundlesLink"),
              to: { pathname: s.b.LoyaltyItemBundles() },
            },
          });
          const t = Object(gt.b)(l.d.EREALM);
          return (
            e[0].items.push({
              props: {
                iconComponent: Ue.s,
                children: Object(f.g)("#ShopNav_SteamDeckKeyboardSkinLink"),
                to: { pathname: s.b.LoyaltyKeyboard() },
              },
            }),
            t ||
              l.d.IN_GAMEPADUI ||
              e[0].items.push({
                props: {
                  iconComponent: Ue.l,
                  children: Object(f.g)("#ShopNav_AwardsLink"),
                  to: {
                    pathname: s.b.LoyaltyHowItWorks(),
                    hash: "#CommunityAwards",
                  },
                  isActive: Ta(!0),
                },
              }),
            t ||
              (e[1].items.push({
                props: {
                  iconComponent: be.f,
                  children: Object(f.g)("#ShopNav_SeasonalBadgeLink"),
                  to: s.b.LoyaltySteamBadge(),
                  iconCallout: Ue.w,
                },
              }),
              e[1].items.push({
                props: {
                  iconComponent: Ue.y,
                  children: Object(f.g)("#ShopNav_ProfileBundlesLink"),
                  to: s.b.LoyaltyProfileBundles(),
                },
              }),
              e[1].items.push({
                props: {
                  iconComponent: Ue.f,
                  children: Object(f.g)("#ShopPageTitle_ArtistProfiles"),
                  to: s.b.LoyaltyArtistProfiles(),
                },
              })),
            t ||
              e[1].items.push({
                props: {
                  iconComponent: Ue.z,
                  children: Object(f.g)("#ShopNav_ProfileShowcasesLink"),
                  to: { pathname: s.b.LoyaltyProfileCustomizations() },
                },
              }),
            _.b.Get().BIsLoggedIn() &&
              e.push({
                items: [
                  {
                    external: !0,
                    props: {
                      iconComponent: Ue.x,
                      children: Object(f.g)("#RewardsPointsHistoryLink"),
                      href: l.d.STORE_BASE_URL + "pointssummary/",
                    },
                  },
                ],
              }),
            e
          );
        },
        Fa = () => {
          const e = Ga();
          return i.a.createElement(
            g.a,
            {
              padding: "none",
              className: xa.PrimaryNav,
              "flow-children": "column",
            },
            i.a.createElement(
              g.f,
              { spacing: "none" },
              e.map((t, a) =>
                i.a.createElement(
                  i.a.Fragment,
                  { key: a },
                  t.label &&
                    i.a.createElement(
                      "div",
                      { className: xa.NavItem },
                      t.label
                    ),
                  t.items.map((e) =>
                    e.external
                      ? i.a.createElement(
                          Ha,
                          Object.assign({}, e.props, { key: e.props.href })
                        )
                      : i.a.createElement(
                          za,
                          Object.assign({}, e.props, {
                            key: JSON.stringify(e.props.to),
                          })
                        )
                  ),
                  a < e.length - 1 &&
                    i.a.createElement("div", { className: xa.Line })
                )
              )
            )
          );
        },
        za = (e) => {
          const {
              iconComponent: t,
              className: a,
              children: r,
              iconCallout: o,
            } = e,
            s = Object(n.c)(e, [
              "iconComponent",
              "className",
              "children",
              "iconCallout",
            ]),
            l = t,
            c = o,
            m = "object" == typeof s.to && s.to.hash ? Da : ne;
          return i.a.createElement(
            m,
            Object.assign(
              {
                className: Object(b.a)(xa.SecondaryNavItem, a),
                activeClassName: xa.Selected,
              },
              s
            ),
            i.a.createElement(l, { className: xa.Icon }),
            i.a.createElement("div", { className: xa.Label }, r),
            c && i.a.createElement(c, { className: xa.Callout })
          );
        },
        Ha = (e) => {
          const {
              iconComponent: t,
              className: a,
              children: r,
              iconCallout: o,
            } = e,
            s = Object(n.c)(e, [
              "iconComponent",
              "className",
              "children",
              "iconCallout",
            ]),
            l = t,
            c = o;
          return i.a.createElement(
            "a",
            Object.assign(
              { className: Object(b.a)(xa.SecondaryNavItem, a) },
              s
            ),
            i.a.createElement(l, { className: xa.Icon }),
            i.a.createElement("div", { className: xa.Label }, r),
            c && i.a.createElement(c, { className: xa.Callout })
          );
        };
      function Ua(e) {
        const t = "string" == typeof e.to ? e.to : e.to.pathname,
          a = Object(o.i)(t);
        return i.a.createElement(
          Ra,
          {
            active: !!a && (!e.exact || a.isExact),
            className: xa.ScrollableTabItem,
          },
          e.children
        );
      }
      const Va = () => {
        const e = Ga(),
          t = [];
        return (
          e.forEach((e) => {
            e.items.forEach((e) => {
              if (e.external) {
                const a = e.props,
                  { iconComponent: r, iconCallout: o } = a,
                  s = Object(n.c)(a, ["iconComponent", "iconCallout"]);
                t.push(
                  i.a.createElement(
                    te.c,
                    Object.assign({}, s, {
                      key: e.props.href,
                      focusClassName: xa.Focused,
                      noFocusRing: !0,
                    }),
                    i.a.createElement(
                      Ra,
                      { className: xa.ScrollableTabItem },
                      e.props.children
                    )
                  )
                );
              } else {
                const a = e.props,
                  { iconComponent: r, iconCallout: o } = a,
                  s = Object(n.c)(a, ["iconComponent", "iconCallout"]),
                  l = "string" == typeof a.to ? a.to : JSON.stringify(a.to);
                t.push(
                  i.a.createElement(
                    ne,
                    Object.assign({}, s, {
                      key: l,
                      focusClassName: xa.Focused,
                      noFocusRing: !0,
                    }),
                    i.a.createElement(Ua, Object.assign({}, a), a.children)
                  )
                );
              }
            });
          }),
          i.a.createElement(Pa, { className: xa.ScrollableTabs }, t)
        );
      };
      function Za(e) {
        const { children: t } = e,
          a = Object(ga.a)(),
          n = i.a.useRef();
        i.a.useEffect(() => {
          var e;
          return null === (e = n.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const r = Object(g.i)("(max-width: 965px)");
        return i.a.createElement(
          g.d,
          null,
          i.a.createElement(
            da.a,
            { navID: "LoyaltyShell", NavigationManager: a, navTreeRef: n },
            i.a.createElement(
              _a,
              { className: Object(b.a)(ha.Shell) },
              i.a.createElement(Wa, null),
              r && i.a.createElement(Va, null),
              i.a.createElement(
                g.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  className: ha.ShellScrollParent,
                },
                !r && i.a.createElement(Fa, null),
                i.a.createElement(
                  g.a,
                  {
                    flex: "1",
                    className: ha.ShellScroll,
                    "flow-children": "column",
                  },
                  t
                )
              )
            )
          )
        );
      }
      const Wa = Object(m.a)(() => {
        let e = null;
        _.b.Get().BIsLoggedIn() &&
          (e = i.a.createElement(
            g.a,
            {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              className: ha.PointsContainer,
            },
            i.a.createElement(be.P, { className: ha.Icon }),
            i.a.createElement(
              g.a,
              {
                display: "flex",
                flexDirection: "column",
                flex: "1",
                paddingLeft: "xsmall",
              },
              i.a.createElement(
                "a",
                {
                  className: ha.YourBalanceLabel,
                  href: l.d.STORE_BASE_URL + "pointssummary/",
                },
                Object(f.g)("#YourBalance")
              ),
              i.a.createElement(
                "div",
                { className: ha.RewardsPointsCount },
                Object(fa.a)(_.b.Get().GetPointsAvailable().getLowBits())
              )
            )
          ));
        let t = null;
        if (_.b.Get().BIsLoggedIn() && _.b.Get().GetIsUsingAppIDFilters()) {
          const e = !!_.b.Get().GetAppIDFilters().size;
          t = i.a.createElement(
            g.a,
            {
              display: "flex",
              flexDirection: "row",
              className: ha.AppFilterContainer,
            },
            i.a.createElement(Ue.n, { className: ha.HeaderVerticalDivider }),
            i.a.createElement(
              "div",
              { className: ha.AppFilterLabel },
              Object(f.g)("#AppFilter_Label")
            ),
            i.a.createElement(
              "div",
              { className: ha.AppFilterIconContainer },
              i.a.createElement(Ue.e, {
                className: Object(b.a)(ha.AppFilterIcon),
                onClick: (e) =>
                  (function (e) {
                    const t = {
                      bOverlapHorizontal: !0,
                      bUseWebStyles: !1,
                      strClassName: Ia.ManageAppFiltersPopupContextMenu,
                    };
                    Object(Ca.a)(
                      r.createElement(
                        ba.c,
                        null,
                        r.createElement(Ma, { maxGamesToDisplay: 14 })
                      ),
                      e,
                      t
                    );
                  })(e),
              }),
              e && i.a.createElement("div", { className: ha.FilterInUse })
            )
          );
        }
        return i.a.createElement(
          g.a,
          {
            paddingY: "small",
            paddingX: ["xsmall", "medium"],
            display: "flex",
            flexDirection: "row",
            className: ha.ShellHeader,
          },
          i.a.createElement(
            d.c,
            { to: s.b.LoyaltyStore(), className: ha.ShellHeaderBrandLink },
            i.a.createElement(
              "div",
              { className: ha.ShellHeaderBrandName },
              " ",
              Object(f.g)("#ShopLink"),
              " "
            )
          ),
          i.a.createElement(g.b, null, (e) => "mobile" !== e && t),
          e
        );
      });
      var Ya = a("9XWO"),
        Qa = (a("XThB"), a("hRO2")),
        qa = a("3dpo");
      const Xa = Qa.Message;
      class Ja extends Xa {
        constructor(e = null) {
          super(),
            Ja.prototype.accountid || qa.a(Ja.M()),
            Xa.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ja.sm_m ||
              (Ja.sm_m = {
                proto: Ja,
                fields: {
                  accountid: {
                    n: 1,
                    br: qa.d.readUint32,
                    bw: qa.h.writeUint32,
                  },
                  auctiondescriptionid: {
                    n: 2,
                    br: qa.d.readUint64String,
                    bw: qa.h.writeUint64String,
                  },
                  state: { n: 3, br: qa.d.readEnum, bw: qa.h.writeEnum },
                  time_created: {
                    n: 4,
                    br: qa.d.readUint32,
                    bw: qa.h.writeUint32,
                  },
                  time_updated: {
                    n: 5,
                    br: qa.d.readUint32,
                    bw: qa.h.writeUint32,
                  },
                  amount_bid: {
                    n: 6,
                    br: qa.d.readInt64String,
                    bw: qa.h.writeInt64String,
                  },
                  amount_paid: {
                    n: 7,
                    br: qa.d.readInt64String,
                    bw: qa.h.writeInt64String,
                  },
                  auctionbidid: {
                    n: 8,
                    br: qa.d.readInt64String,
                    bw: qa.h.writeInt64String,
                  },
                },
              }),
            Ja.sm_m
          );
        }
        static MBF() {
          return Ja.sm_mbf || (Ja.sm_mbf = qa.e(Ja.M())), Ja.sm_mbf;
        }
        toObject(e = !1) {
          return Ja.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(Ja.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(Ja.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new Ja();
          return Ja.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(Ja.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return Ja.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(Ja.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return Ja.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_Bid";
        }
      }
      class $a extends Xa {
        constructor(e = null) {
          super(),
            $a.prototype.auctiondescriptionid || qa.a($a.M()),
            Xa.initialize(this, e, 0, -1, [12], null);
        }
        static M() {
          return (
            $a.sm_m ||
              ($a.sm_m = {
                proto: $a,
                fields: {
                  auctiondescriptionid: {
                    n: 1,
                    br: qa.d.readUint64String,
                    bw: qa.h.writeUint64String,
                  },
                  time_start: {
                    n: 2,
                    br: qa.d.readUint32,
                    bw: qa.h.writeUint32,
                  },
                  time_end: { n: 3, br: qa.d.readUint32, bw: qa.h.writeUint32 },
                  amount_total: {
                    n: 5,
                    br: qa.d.readInt64String,
                    bw: qa.h.writeInt64String,
                  },
                  amount_remaining: {
                    n: 6,
                    br: qa.d.readInt64String,
                    bw: qa.h.writeInt64String,
                  },
                  highest_amount: {
                    n: 7,
                    br: qa.d.readInt64String,
                    bw: qa.h.writeInt64String,
                  },
                  highest_bidder_accountid: {
                    n: 8,
                    br: qa.d.readUint32,
                    bw: qa.h.writeUint32,
                  },
                  community_item_appid: {
                    n: 9,
                    br: qa.d.readUint32,
                    bw: qa.h.writeUint32,
                  },
                  community_item_type: {
                    n: 10,
                    br: qa.d.readUint32,
                    bw: qa.h.writeUint32,
                  },
                  store_appid: {
                    n: 11,
                    br: qa.d.readUint32,
                    bw: qa.h.writeUint32,
                  },
                  store_packageids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: qa.d.readUint32,
                    bw: qa.h.writeRepeatedUint32,
                  },
                  reserve_price: {
                    n: 13,
                    br: qa.d.readInt64String,
                    bw: qa.h.writeInt64String,
                  },
                },
              }),
            $a.sm_m
          );
        }
        static MBF() {
          return $a.sm_mbf || ($a.sm_mbf = qa.e($a.M())), $a.sm_mbf;
        }
        toObject(e = !1) {
          return $a.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g($a.M(), e, t);
        }
        static fromObject(e) {
          return qa.c($a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new $a();
          return $a.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b($a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return $a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f($a.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return $a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_Item";
        }
      }
      class Ka extends Xa {
        constructor(e = null) {
          super(),
            Ka.prototype.auctiondescriptionid || qa.a(Ka.M()),
            Xa.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ka.sm_m ||
              (Ka.sm_m = {
                proto: Ka,
                fields: {
                  auctiondescriptionid: {
                    n: 1,
                    br: qa.d.readUint64String,
                    bw: qa.h.writeUint64String,
                  },
                  amount_bid: {
                    n: 2,
                    br: qa.d.readInt64String,
                    bw: qa.h.writeInt64String,
                  },
                  expected_amount_remaining: {
                    n: 3,
                    br: qa.d.readInt32,
                    bw: qa.h.writeInt32,
                  },
                },
              }),
            Ka.sm_m
          );
        }
        static MBF() {
          return Ka.sm_mbf || (Ka.sm_mbf = qa.e(Ka.M())), Ka.sm_mbf;
        }
        toObject(e = !1) {
          return Ka.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(Ka.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(Ka.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new Ka();
          return Ka.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(Ka.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return Ka.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(Ka.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return Ka.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_PlaceBid_Request";
        }
      }
      class en extends Xa {
        constructor(e = null) {
          super(), Xa.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return en.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new en();
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new en();
          return en.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return en.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return en.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_PlaceBid_Response";
        }
      }
      class tn extends Xa {
        constructor(e = null) {
          super(),
            tn.prototype.auctiondescriptionid || qa.a(tn.M()),
            Xa.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            tn.sm_m ||
              (tn.sm_m = {
                proto: tn,
                fields: {
                  auctiondescriptionid: {
                    n: 1,
                    br: qa.d.readUint64String,
                    bw: qa.h.writeUint64String,
                  },
                },
              }),
            tn.sm_m
          );
        }
        static MBF() {
          return tn.sm_mbf || (tn.sm_mbf = qa.e(tn.M())), tn.sm_mbf;
        }
        toObject(e = !1) {
          return tn.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(tn.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(tn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new tn();
          return tn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(tn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return tn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(tn.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return tn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_CancelBid_Request";
        }
      }
      class an extends Xa {
        constructor(e = null) {
          super(),
            an.prototype.amount_returned || qa.a(an.M()),
            Xa.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            an.sm_m ||
              (an.sm_m = {
                proto: an,
                fields: {
                  amount_returned: {
                    n: 1,
                    br: qa.d.readInt64String,
                    bw: qa.h.writeInt64String,
                  },
                },
              }),
            an.sm_m
          );
        }
        static MBF() {
          return an.sm_mbf || (an.sm_mbf = qa.e(an.M())), an.sm_mbf;
        }
        toObject(e = !1) {
          return an.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(an.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(an.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new an();
          return an.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(an.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return an.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(an.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return an.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_CancelBid_Response";
        }
      }
      class nn extends Xa {
        constructor(e = null) {
          super(),
            nn.prototype.steamid || qa.a(nn.M()),
            Xa.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            nn.sm_m ||
              (nn.sm_m = {
                proto: nn,
                fields: {
                  steamid: {
                    n: 1,
                    br: qa.d.readFixed64String,
                    bw: qa.h.writeFixed64String,
                  },
                },
              }),
            nn.sm_m
          );
        }
        static MBF() {
          return nn.sm_mbf || (nn.sm_mbf = qa.e(nn.M())), nn.sm_mbf;
        }
        toObject(e = !1) {
          return nn.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(nn.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(nn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new nn();
          return nn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(nn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return nn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(nn.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return nn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetBidsForUser_Request";
        }
      }
      class rn extends Xa {
        constructor(e = null) {
          super(),
            rn.prototype.bids || qa.a(rn.M()),
            Xa.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            rn.sm_m ||
              (rn.sm_m = {
                proto: rn,
                fields: { bids: { n: 1, c: Ja, r: !0, q: !0 } },
              }),
            rn.sm_m
          );
        }
        static MBF() {
          return rn.sm_mbf || (rn.sm_mbf = qa.e(rn.M())), rn.sm_mbf;
        }
        toObject(e = !1) {
          return rn.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(rn.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(rn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new rn();
          return rn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(rn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return rn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(rn.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return rn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetBidsForUser_Response";
        }
      }
      class on extends Xa {
        constructor(e = null) {
          super(),
            on.prototype.item || qa.a(on.M()),
            Xa.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            on.sm_m ||
              (on.sm_m = {
                proto: on,
                fields: {
                  item: { n: 1, c: $a },
                  count_total: {
                    n: 2,
                    br: qa.d.readInt32,
                    bw: qa.h.writeInt32,
                  },
                  current_user_position: {
                    n: 3,
                    br: qa.d.readInt32,
                    bw: qa.h.writeInt32,
                  },
                  winning_bids: { n: 4, c: Ja, r: !0, q: !0 },
                },
              }),
            on.sm_m
          );
        }
        static MBF() {
          return on.sm_mbf || (on.sm_mbf = qa.e(on.M())), on.sm_mbf;
        }
        toObject(e = !1) {
          return on.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(on.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(on.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new on();
          return on.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(on.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return on.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(on.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return on.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetBidsForItem_Response";
        }
      }
      class sn extends Xa {
        constructor(e = null) {
          super(),
            sn.prototype.auctiondescriptionid || qa.a(sn.M()),
            Xa.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            sn.sm_m ||
              (sn.sm_m = {
                proto: sn,
                fields: {
                  auctiondescriptionid: {
                    n: 1,
                    br: qa.d.readUint64String,
                    bw: qa.h.writeUint64String,
                  },
                },
              }),
            sn.sm_m
          );
        }
        static MBF() {
          return sn.sm_mbf || (sn.sm_mbf = qa.e(sn.M())), sn.sm_mbf;
        }
        toObject(e = !1) {
          return sn.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(sn.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(sn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new sn();
          return sn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(sn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return sn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(sn.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return sn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetUserBidForItem_Request";
        }
      }
      class ln extends Xa {
        constructor(e = null) {
          super(),
            ln.prototype.bid || qa.a(ln.M()),
            Xa.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ln.sm_m ||
              (ln.sm_m = { proto: ln, fields: { bid: { n: 1, c: Ja } } }),
            ln.sm_m
          );
        }
        static MBF() {
          return ln.sm_mbf || (ln.sm_mbf = qa.e(ln.M())), ln.sm_mbf;
        }
        toObject(e = !1) {
          return ln.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(ln.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(ln.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new ln();
          return ln.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(ln.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return ln.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(ln.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return ln.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetUserBidForItem_Response";
        }
      }
      class cn extends Xa {
        constructor(e = null) {
          super(),
            cn.prototype.item || qa.a(cn.M()),
            Xa.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            cn.sm_m ||
              (cn.sm_m = { proto: cn, fields: { item: { n: 1, c: $a } } }),
            cn.sm_m
          );
        }
        static MBF() {
          return cn.sm_mbf || (cn.sm_mbf = qa.e(cn.M())), cn.sm_mbf;
        }
        toObject(e = !1) {
          return cn.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(cn.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(cn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new cn();
          return cn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(cn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return cn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(cn.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return cn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetItemDetails_Response";
        }
      }
      class mn extends Xa {
        constructor(e = null) {
          super(), Xa.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return mn.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new mn();
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new mn();
          return mn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return mn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return mn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetAllItems_Request";
        }
      }
      class dn extends Xa {
        constructor(e = null) {
          super(),
            dn.prototype.items || qa.a(dn.M()),
            Xa.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            dn.sm_m ||
              (dn.sm_m = {
                proto: dn,
                fields: { items: { n: 1, c: $a, r: !0, q: !0 } },
              }),
            dn.sm_m
          );
        }
        static MBF() {
          return dn.sm_mbf || (dn.sm_mbf = qa.e(dn.M())), dn.sm_mbf;
        }
        toObject(e = !1) {
          return dn.toObject(e, this);
        }
        static toObject(e, t) {
          return qa.g(dn.M(), e, t);
        }
        static fromObject(e) {
          return qa.c(dn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new Qa.BinaryReader(e),
            a = new dn();
          return dn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return qa.b(dn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new Qa.BinaryWriter();
          return dn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          qa.f(dn.M(), e, t);
        }
        serializeBase64String() {
          var e = new Qa.BinaryWriter();
          return dn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetAllItems_Response";
        }
      }
      var pn;
      !(function (e) {
        (e.PlaceBid = function (e, t) {
          return e.SendMsg("Auction.PlaceBid#1", t, en, { ePrivilege: 3 });
        }),
          (e.CancelBid = function (e, t) {
            return e.SendMsg("Auction.CancelBid#1", t, an, { ePrivilege: 1 });
          }),
          (e.GetBidsForUser = function (e, t) {
            return e.SendMsg("Auction.GetBidsForUser#1", t, rn, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetBidsForItem = function (e, t) {
            return e.SendMsg("Auction.GetBidsForItem#1", t, on, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetUserBidForItem = function (e, t) {
            return e.SendMsg("Auction.GetUserBidForItem#1", t, ln, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetItemDetails = function (e, t) {
            return e.SendMsg("Auction.GetItemDetails#1", t, cn, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAllItems = function (e, t) {
            return e.SendMsg("Auction.GetAllItems#1", t, dn, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          });
      })(pn || (pn = {}));
      var un = a("2vnA");
      class _n {
        constructor() {
          (this.m_bLoadedCurrentUserBids = !1),
            (this.m_rgCurrentUserBids = un.C.array([], { deep: !0 })),
            (this.m_bLoadedAllItems = !1),
            (this.m_mapAuctionItems = new Map());
        }
        static Get() {
          return (
            this.s_Singleton || (this.s_Singleton = new _n()), this.s_Singleton
          );
        }
        Init(e) {
          (this.m_transport = e.GetServiceTransport()),
            (this.m_anonymousTransport = e.GetAnonymousServiceTransport());
        }
        LoadCurrentUserBids() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!_.b.Get().BIsLoggedIn()) return [];
            const e = Ya.b.Init(nn);
            e.SetBodyFields({ steamid: l.l.steamid });
            let t = yield pn.GetBidsForUser(this.m_transport, e);
            return 1 == t.GetEResult()
              ? t.Body().toObject().bids
              : (console.error(
                  `Error when calling AuctionService.GetBidsForUser: EResult=${t.GetEResult()}`
                ),
                []);
          });
        }
        GetCurrentUserBids(e) {
          return (
            (this.m_bLoadedCurrentUserBids && !e) ||
              ((this.m_bLoadedCurrentUserBids = !0),
              (this.m_rgCurrentUserBids = []),
              this.LoadCurrentUserBids().then((e) =>
                e.forEach((e) => this.m_rgCurrentUserBids.push(e))
              )),
            this.m_rgCurrentUserBids
          );
        }
        LoadAllItems() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = Ya.b.Init(mn);
            let t = yield pn.GetAllItems(this.m_anonymousTransport, e);
            return 1 == t.GetEResult()
              ? t.Body().toObject().items
              : (console.error(
                  `Error when calling AuctionService.GetAllItems: EResult=${t.GetEResult()}`
                ),
                []);
          });
        }
        GetAllItems(e) {
          return (
            (this.m_bLoadedAllItems && !e) ||
              ((this.m_bLoadedCurrentUserBids = !0),
              this.m_mapAuctionItems.clear(),
              this.LoadAllItems().then((e) =>
                e.forEach((e) => this.m_mapAuctionItems.set(e.store_appid, e))
              )),
            this.m_mapAuctionItems
          );
        }
        GetAuctionItemByAppID(e) {
          return this.GetAllItems(!1).get(e);
        }
        GetUserBidForItem(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = Ya.b.Init(sn);
            let t = yield pn.GetUserBidForItem(this.m_transport, e);
            return 1 == t.GetEResult()
              ? t.Body().toObject().bid
              : (console.error(
                  `Error when calling AuctionService.GetUserBidForItem: EResult=${t.GetEResult()}`
                ),
                null);
          });
        }
        PlaceBid(e, t, a) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let n = { eResult: 2, strMessage: "" };
            if (!_.b.Get().BIsLoggedIn())
              return (n = { eResult: 21, strMessage: "Not logged on" }), n;
            const r = Ya.b.Init(Ka);
            r.SetBodyFields({
              auctiondescriptionid: e,
              amount_bid: t,
              expected_amount_remaining: a,
            });
            const i = yield pn.PlaceBid(this.m_transport, r);
            return (
              (n.eResult = i.GetEResult()),
              1 == i.GetEResult()
                ? this.GetCurrentUserBids(!0)
                : ((n.strMessage = i.Hdr().error_message()),
                  console.error(
                    `Error when calling AuctionService.PlaceBid: EResult=${i.GetEResult()}`
                  )),
              n
            );
          });
        }
        CancelBid(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = { eResult: 2, strMessage: "" };
            if (!_.b.Get().BIsLoggedIn())
              return (t = { eResult: 21, strMessage: "Not logged on" }), t;
            const a = Ya.b.Init(tn);
            a.SetBodyFields({ auctiondescriptionid: e });
            const n = yield pn.CancelBid(this.m_transport, a);
            return (
              (t.eResult = n.GetEResult()),
              1 == n.GetEResult()
                ? this.GetCurrentUserBids(!0)
                : ((t.strMessage = n.Hdr().error_message()),
                  console.error(
                    `Error when calling AuctionService.CancelBid: EResult=${n.GetEResult()}`
                  )),
              t
            );
          });
        }
      }
      Object(n.b)([un.C], _n.prototype, "m_rgCurrentUserBids", void 0),
        Object(n.b)([un.C], _n.prototype, "m_mapAuctionItems", void 0);
      var gn = a("FmLm");
      class fn extends i.a.Component {
        constructor() {
          super(...arguments), (this.state = { bReady: !1 });
        }
        componentDidMount() {
          hn.then(() => this.setState({ bReady: !0 }));
        }
        render() {
          return this.state.bReady
            ? i.a.createElement(
                Za,
                null,
                i.a.createElement(
                  o.d,
                  null,
                  i.a.createElement(
                    o.b,
                    { path: s.b.LoyaltyGetPoints() },
                    i.a.createElement(pt, null)
                  ),
                  i.a.createElement(
                    o.b,
                    { path: s.b.LoyaltyHowItWorks() },
                    i.a.createElement(sa, null)
                  ),
                  i.a.createElement(
                    o.b,
                    { path: s.b.LoyaltyStore() },
                    i.a.createElement(Ke, null)
                  ),
                  i.a.createElement(
                    o.b,
                    { path: s.b.LoyaltyGiveawayRules() },
                    i.a.createElement(ma, null)
                  ),
                  i.a.createElement(
                    o.b,
                    null,
                    i.a.createElement(o.a, { to: s.b.LoyaltyStore() })
                  )
                )
              )
            : i.a.createElement(I, null);
        }
      }
      const hn = (function () {
        return Object(n.a)(this, void 0, void 0, function* () {
          let e = Object(l.h)("loyaltystore", "application_config");
          const t = new c.a(l.d.WEBAPI_BASE_URL, e.webapi_token);
          oe.a.Init(t),
            yield (function () {
              return Object(n.a)(this, void 0, void 0, function* () {
                const e = l.d.LANGUAGE,
                  t = f.b.GetLanguageFallback(e),
                  n = e === t,
                  [r, i] = yield Promise.all([
                    a("Aqke")(`./loyalty_${e}.json`),
                    n ? void 0 : a("Aqke")(`./loyalty_${t}.json`),
                  ]);
                f.f.AddTokens(r.default, i ? i.default : void 0);
              });
            })(),
            yield gn.a.Get().HintLoad(),
            _.b.Get().Init(t, e);
        });
      })();
      t.default = fn;
    },
    CHWB: function (e, t, a) {
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
        "animation-container": "chatroomeffects_animation-container_3tul6",
        Snowflake: "chatroomeffects_Snowflake_3kdo_",
        "Snowflake-0": "chatroomeffects_Snowflake-0_33yRI",
        "snowflake-0": "chatroomeffects_snowflake-0_wWgzj",
        "Snowflake-1": "chatroomeffects_Snowflake-1_J0tao",
        "snowflake-1": "chatroomeffects_snowflake-1_KWT2p",
        "Snowflake-2": "chatroomeffects_Snowflake-2_FDGY2",
        "snowflake-2": "chatroomeffects_snowflake-2_1CIBC",
        "Snowflake-3": "chatroomeffects_Snowflake-3_1tKC_",
        "snowflake-3": "chatroomeffects_snowflake-3_2j2Xi",
        "Snowflake-4": "chatroomeffects_Snowflake-4_1TvTl",
        "snowflake-4": "chatroomeffects_snowflake-4_3PSrO",
        "Snowflake-5": "chatroomeffects_Snowflake-5_1MrkH",
        "snowflake-5": "chatroomeffects_snowflake-5__yiVm",
        "Snowflake-6": "chatroomeffects_Snowflake-6_LlTh9",
        "snowflake-6": "chatroomeffects_snowflake-6_1UZLN",
        "Snowflake-7": "chatroomeffects_Snowflake-7_2k902",
        "snowflake-7": "chatroomeffects_snowflake-7_23CN9",
        "Snowflake-8": "chatroomeffects_Snowflake-8_2uHPX",
        "snowflake-8": "chatroomeffects_snowflake-8_31dNO",
        "Snowflake-9": "chatroomeffects_Snowflake-9_3cXPP",
        "snowflake-9": "chatroomeffects_snowflake-9_3im9t",
        "Snowflake-10": "chatroomeffects_Snowflake-10_1fDcw",
        "snowflake-10": "chatroomeffects_snowflake-10_1H1sa",
        "Snowflake-11": "chatroomeffects_Snowflake-11_2jwvh",
        "snowflake-11": "chatroomeffects_snowflake-11_3Spd6",
        "Snowflake-12": "chatroomeffects_Snowflake-12_20DDi",
        "snowflake-12": "chatroomeffects_snowflake-12_HHauz",
        "Snowflake-13": "chatroomeffects_Snowflake-13_15ZQ5",
        "snowflake-13": "chatroomeffects_snowflake-13_hHAXR",
        "Snowflake-14": "chatroomeffects_Snowflake-14_1E8xv",
        "snowflake-14": "chatroomeffects_snowflake-14_QWgNQ",
        "Snowflake-15": "chatroomeffects_Snowflake-15_gVWaw",
        "snowflake-15": "chatroomeffects_snowflake-15_TYWZj",
        "Snowflake-16": "chatroomeffects_Snowflake-16_1CyAo",
        "snowflake-16": "chatroomeffects_snowflake-16_34FW0",
        "Snowflake-17": "chatroomeffects_Snowflake-17_2WiNW",
        "snowflake-17": "chatroomeffects_snowflake-17_1vM0H",
        "Snowflake-18": "chatroomeffects_Snowflake-18_1uooE",
        "snowflake-18": "chatroomeffects_snowflake-18_1LZ1T",
        "Snowflake-19": "chatroomeffects_Snowflake-19_KwheS",
        "snowflake-19": "chatroomeffects_snowflake-19_25730",
        "Snowflake-20": "chatroomeffects_Snowflake-20_WltUV",
        "snowflake-20": "chatroomeffects_snowflake-20_1JbI9",
        confetti: "chatroomeffects_confetti_1oqL-",
        "confetti-0": "chatroomeffects_confetti-0_38RtO",
        "drop-0": "chatroomeffects_drop-0_V9wSn",
        "confetti-1": "chatroomeffects_confetti-1_3HQXc",
        "drop-1": "chatroomeffects_drop-1_1QIkN",
        "confetti-2": "chatroomeffects_confetti-2_2Dfkq",
        "drop-2": "chatroomeffects_drop-2_3Da2Q",
        "confetti-3": "chatroomeffects_confetti-3_2BLfq",
        "drop-3": "chatroomeffects_drop-3_1uaos",
        "confetti-4": "chatroomeffects_confetti-4_x4aKR",
        "drop-4": "chatroomeffects_drop-4_2pnFU",
        "confetti-5": "chatroomeffects_confetti-5_t35Q0",
        "drop-5": "chatroomeffects_drop-5_2gR59",
        "confetti-6": "chatroomeffects_confetti-6_2zfYZ",
        "drop-6": "chatroomeffects_drop-6_2ilaX",
        "confetti-7": "chatroomeffects_confetti-7_f_Kll",
        "drop-7": "chatroomeffects_drop-7_2auR8",
        "confetti-8": "chatroomeffects_confetti-8_12zRC",
        "drop-8": "chatroomeffects_drop-8_1q83P",
        "confetti-9": "chatroomeffects_confetti-9_2kaax",
        "drop-9": "chatroomeffects_drop-9_215F1",
        "confetti-10": "chatroomeffects_confetti-10_L3U2I",
        "drop-10": "chatroomeffects_drop-10_G9UV-",
        "confetti-11": "chatroomeffects_confetti-11_3TNZr",
        "drop-11": "chatroomeffects_drop-11_2ViwG",
        "confetti-12": "chatroomeffects_confetti-12_3OWee",
        "drop-12": "chatroomeffects_drop-12_fCGL7",
        "confetti-13": "chatroomeffects_confetti-13_5Tf4y",
        "drop-13": "chatroomeffects_drop-13_32QeJ",
        "confetti-14": "chatroomeffects_confetti-14_3WVUH",
        "drop-14": "chatroomeffects_drop-14_2UWh6",
        "confetti-15": "chatroomeffects_confetti-15_1CP_v",
        "drop-15": "chatroomeffects_drop-15_26cdL",
        "confetti-16": "chatroomeffects_confetti-16_36UFR",
        "drop-16": "chatroomeffects_drop-16_3Sa39",
        "confetti-17": "chatroomeffects_confetti-17_2IAKy",
        "drop-17": "chatroomeffects_drop-17_2BlPO",
        "confetti-18": "chatroomeffects_confetti-18_30mcd",
        "drop-18": "chatroomeffects_drop-18_3Ivek",
        "confetti-19": "chatroomeffects_confetti-19_1PVSs",
        "drop-19": "chatroomeffects_drop-19_3sCUl",
        "confetti-20": "chatroomeffects_confetti-20_3FLx8",
        "drop-20": "chatroomeffects_drop-20_1KjEQ",
        "confetti-21": "chatroomeffects_confetti-21_xBNgH",
        "drop-21": "chatroomeffects_drop-21_1fIaW",
        "confetti-22": "chatroomeffects_confetti-22_145bi",
        "drop-22": "chatroomeffects_drop-22_38tin",
        "confetti-23": "chatroomeffects_confetti-23_1YVax",
        "drop-23": "chatroomeffects_drop-23_2iPVQ",
        "confetti-24": "chatroomeffects_confetti-24_2PTSN",
        "drop-24": "chatroomeffects_drop-24_224oJ",
        "confetti-25": "chatroomeffects_confetti-25_1JDDD",
        "drop-25": "chatroomeffects_drop-25_1Bfku",
        "confetti-26": "chatroomeffects_confetti-26_tyedn",
        "drop-26": "chatroomeffects_drop-26_3aMdT",
        "confetti-27": "chatroomeffects_confetti-27_1gca4",
        "drop-27": "chatroomeffects_drop-27_5nkdv",
        "confetti-28": "chatroomeffects_confetti-28_1kVB7",
        "drop-28": "chatroomeffects_drop-28_mwSwy",
        "confetti-29": "chatroomeffects_confetti-29_1bILI",
        "drop-29": "chatroomeffects_drop-29_1rirB",
        "confetti-30": "chatroomeffects_confetti-30_2HUOq",
        "drop-30": "chatroomeffects_drop-30_1mVd8",
        "confetti-31": "chatroomeffects_confetti-31_pd00p",
        "drop-31": "chatroomeffects_drop-31_2MU00",
        "confetti-32": "chatroomeffects_confetti-32_3vLff",
        "drop-32": "chatroomeffects_drop-32_-4xdl",
        "confetti-33": "chatroomeffects_confetti-33_1CYnx",
        "drop-33": "chatroomeffects_drop-33_1Ius4",
        "confetti-34": "chatroomeffects_confetti-34_2pYeT",
        "drop-34": "chatroomeffects_drop-34_1IURZ",
        "confetti-35": "chatroomeffects_confetti-35_2RCN_",
        "drop-35": "chatroomeffects_drop-35_1G43e",
        "confetti-36": "chatroomeffects_confetti-36_3NYfl",
        "drop-36": "chatroomeffects_drop-36_xSlF_",
        "confetti-37": "chatroomeffects_confetti-37_YMcid",
        "drop-37": "chatroomeffects_drop-37_3gpE4",
        "confetti-38": "chatroomeffects_confetti-38_1GbO5",
        "drop-38": "chatroomeffects_drop-38_Rjdv-",
        "confetti-39": "chatroomeffects_confetti-39_3UY2A",
        "drop-39": "chatroomeffects_drop-39_MIyWo",
        "confetti-40": "chatroomeffects_confetti-40_2Pboq",
        "drop-40": "chatroomeffects_drop-40_1ifeX",
        "confetti-41": "chatroomeffects_confetti-41_28A5U",
        "drop-41": "chatroomeffects_drop-41_1Bdss",
        "confetti-42": "chatroomeffects_confetti-42_1g2y6",
        "drop-42": "chatroomeffects_drop-42_2z-wq",
        "confetti-43": "chatroomeffects_confetti-43_3T8Gt",
        "drop-43": "chatroomeffects_drop-43_3M-ku",
        "confetti-44": "chatroomeffects_confetti-44_3ofiA",
        "drop-44": "chatroomeffects_drop-44_UPf-C",
        "confetti-45": "chatroomeffects_confetti-45_2qEc7",
        "drop-45": "chatroomeffects_drop-45_2XFNG",
        "confetti-46": "chatroomeffects_confetti-46_3ZUoV",
        "drop-46": "chatroomeffects_drop-46_KfGYT",
        "confetti-47": "chatroomeffects_confetti-47_1yHUI",
        "drop-47": "chatroomeffects_drop-47_39Qir",
        "confetti-48": "chatroomeffects_confetti-48_1AyF2",
        "drop-48": "chatroomeffects_drop-48_QkatW",
        "confetti-49": "chatroomeffects_confetti-49_3OJy_",
        "drop-49": "chatroomeffects_drop-49_1kzrw",
        "confetti-50": "chatroomeffects_confetti-50_qfGs7",
        "drop-50": "chatroomeffects_drop-50_1FpRb",
        "confetti-51": "chatroomeffects_confetti-51_WFLgF",
        "drop-51": "chatroomeffects_drop-51_F8rU_",
        "confetti-52": "chatroomeffects_confetti-52_1RaCb",
        "drop-52": "chatroomeffects_drop-52_1JhWG",
        "confetti-53": "chatroomeffects_confetti-53_y8n0i",
        "drop-53": "chatroomeffects_drop-53_2Ir1N",
        "confetti-54": "chatroomeffects_confetti-54_2-Eit",
        "drop-54": "chatroomeffects_drop-54_1ewOT",
        "confetti-55": "chatroomeffects_confetti-55_qIltU",
        "drop-55": "chatroomeffects_drop-55_1Heog",
        "confetti-56": "chatroomeffects_confetti-56_3D3QO",
        "drop-56": "chatroomeffects_drop-56_3fXZd",
        "confetti-57": "chatroomeffects_confetti-57_2Uxg6",
        "drop-57": "chatroomeffects_drop-57_2qaGW",
        "confetti-58": "chatroomeffects_confetti-58_zMfIJ",
        "drop-58": "chatroomeffects_drop-58_2bIe0",
        "confetti-59": "chatroomeffects_confetti-59_2PrpY",
        "drop-59": "chatroomeffects_drop-59_1tdsz",
        "confetti-60": "chatroomeffects_confetti-60_3DBwD",
        "drop-60": "chatroomeffects_drop-60_1CT3i",
        "confetti-61": "chatroomeffects_confetti-61_J7d85",
        "drop-61": "chatroomeffects_drop-61_1xuNl",
        "confetti-62": "chatroomeffects_confetti-62_1DOrn",
        "drop-62": "chatroomeffects_drop-62_XwFmL",
        "confetti-63": "chatroomeffects_confetti-63_1VdB2",
        "drop-63": "chatroomeffects_drop-63_1hZi1",
        "confetti-64": "chatroomeffects_confetti-64_1Pvr7",
        "drop-64": "chatroomeffects_drop-64_2WYk_",
        "confetti-65": "chatroomeffects_confetti-65_3Vb7V",
        "drop-65": "chatroomeffects_drop-65_1IJjN",
        "confetti-66": "chatroomeffects_confetti-66_3HHYd",
        "drop-66": "chatroomeffects_drop-66_3P48b",
        "confetti-67": "chatroomeffects_confetti-67_3NLub",
        "drop-67": "chatroomeffects_drop-67_394wr",
        "confetti-68": "chatroomeffects_confetti-68_3F7hZ",
        "drop-68": "chatroomeffects_drop-68_aIMib",
        "confetti-69": "chatroomeffects_confetti-69_33pt-",
        "drop-69": "chatroomeffects_drop-69_2FTUD",
        "confetti-70": "chatroomeffects_confetti-70_2bQyM",
        "drop-70": "chatroomeffects_drop-70_31mha",
        "confetti-71": "chatroomeffects_confetti-71_2XmoC",
        "drop-71": "chatroomeffects_drop-71_3Iir7",
        "confetti-72": "chatroomeffects_confetti-72_LwgT1",
        "drop-72": "chatroomeffects_drop-72_MIXuq",
        "confetti-73": "chatroomeffects_confetti-73_1ZvsH",
        "drop-73": "chatroomeffects_drop-73_1jiew",
        "confetti-74": "chatroomeffects_confetti-74_1h6HD",
        "drop-74": "chatroomeffects_drop-74_1N6di",
        "confetti-75": "chatroomeffects_confetti-75_3Mbsq",
        "drop-75": "chatroomeffects_drop-75_103s9",
        "confetti-76": "chatroomeffects_confetti-76_22QWY",
        "drop-76": "chatroomeffects_drop-76_Z0QQm",
        "confetti-77": "chatroomeffects_confetti-77_3RJpO",
        "drop-77": "chatroomeffects_drop-77_38Ups",
        "confetti-78": "chatroomeffects_confetti-78_piPv3",
        "drop-78": "chatroomeffects_drop-78_2PpFG",
        "confetti-79": "chatroomeffects_confetti-79_2q09K",
        "drop-79": "chatroomeffects_drop-79_IjS2-",
        "confetti-80": "chatroomeffects_confetti-80_38Jcp",
        "drop-80": "chatroomeffects_drop-80_2KA9M",
        "confetti-81": "chatroomeffects_confetti-81_3JG_s",
        "drop-81": "chatroomeffects_drop-81_1OgYN",
        "confetti-82": "chatroomeffects_confetti-82_6NUaK",
        "drop-82": "chatroomeffects_drop-82_mZ2yU",
        "confetti-83": "chatroomeffects_confetti-83_eVOnL",
        "drop-83": "chatroomeffects_drop-83_2INoi",
        "confetti-84": "chatroomeffects_confetti-84_1bJze",
        "drop-84": "chatroomeffects_drop-84_K1CNI",
        "confetti-85": "chatroomeffects_confetti-85_1FOBC",
        "drop-85": "chatroomeffects_drop-85_3uiwJ",
        "confetti-86": "chatroomeffects_confetti-86_27UOz",
        "drop-86": "chatroomeffects_drop-86_3NAZo",
        "confetti-87": "chatroomeffects_confetti-87_2ZtxX",
        "drop-87": "chatroomeffects_drop-87_OK4Y1",
        "confetti-88": "chatroomeffects_confetti-88_2ug4D",
        "drop-88": "chatroomeffects_drop-88_1IPoI",
        "confetti-89": "chatroomeffects_confetti-89_2r03P",
        "drop-89": "chatroomeffects_drop-89_2bL-f",
        "confetti-90": "chatroomeffects_confetti-90_2gVGP",
        "drop-90": "chatroomeffects_drop-90_2WAHg",
        "confetti-91": "chatroomeffects_confetti-91_26DKs",
        "drop-91": "chatroomeffects_drop-91_3tB5z",
        "confetti-92": "chatroomeffects_confetti-92_tp_nd",
        "drop-92": "chatroomeffects_drop-92_1hAJk",
        "confetti-93": "chatroomeffects_confetti-93_1ose0",
        "drop-93": "chatroomeffects_drop-93_DXim1",
        "confetti-94": "chatroomeffects_confetti-94_3QxRe",
        "drop-94": "chatroomeffects_drop-94_11cw2",
        "confetti-95": "chatroomeffects_confetti-95_5Rwri",
        "drop-95": "chatroomeffects_drop-95_3ewWm",
        "confetti-96": "chatroomeffects_confetti-96_1XugV",
        "drop-96": "chatroomeffects_drop-96_1WGWQ",
        "confetti-97": "chatroomeffects_confetti-97_3qBv-",
        "drop-97": "chatroomeffects_drop-97_sft1x",
        "confetti-98": "chatroomeffects_confetti-98_16EOq",
        "drop-98": "chatroomeffects_drop-98_1ctqh",
        "confetti-99": "chatroomeffects_confetti-99_1ix_V",
        "drop-99": "chatroomeffects_drop-99_SfB4s",
        cracker: "chatroomeffects_cracker_kpkoz",
        "cracker-left": "chatroomeffects_cracker-left_1ZDI2",
        "cracker-right": "chatroomeffects_cracker-right_2wRGI",
        goldfetti: "chatroomeffects_goldfetti_2BT6x",
        "goldfetti-fragment": "chatroomeffects_goldfetti-fragment_1S_uM",
        "goldfetti-color-1": "chatroomeffects_goldfetti-color-1_Exr1M",
        "goldfetti-color-2": "chatroomeffects_goldfetti-color-2_1wn6f",
        "goldfetti-color-3": "chatroomeffects_goldfetti-color-3_13trD",
        "goldfetti-emoji-1": "chatroomeffects_goldfetti-emoji-1_1b2Sg",
        "goldfetti-emoji-2": "chatroomeffects_goldfetti-emoji-2_2UByW",
        "goldfetti-emoji-3": "chatroomeffects_goldfetti-emoji-3_1ykxX",
        "goldfetti-emoji-4": "chatroomeffects_goldfetti-emoji-4_Q_odu",
        balloons: "chatroomeffects_balloons_3h5D9",
        lantern_glow: "chatroomeffects_lantern_glow_24Vz6",
        snowball_fragment: "chatroomeffects_snowball_fragment_22pb_",
        "snowball-container": "chatroomeffects_snowball-container_2wasl",
        snowball: "chatroomeffects_snowball_1_4_3",
        SnowballImage: "chatroomeffects_SnowballImage_3qp1B",
        SnowballImageCW: "chatroomeffects_SnowballImageCW_uRhee",
        "snowball-rotate-cw": "chatroomeffects_snowball-rotate-cw_RzUI3",
        SnowballImageCCW: "chatroomeffects_SnowballImageCCW_2r4QQ",
        "snowball-rotate-ccw": "chatroomeffects_snowball-rotate-ccw_tsqco",
        "snowball-path": "chatroomeffects_snowball-path_EQID5",
        "snowball-residue": "chatroomeffects_snowball-residue_NS5Lc",
        "snowball-chunk": "chatroomeffects_snowball-chunk_2jhfZ",
        "snowball-chunk-1": "chatroomeffects_snowball-chunk-1_1l036",
        "snowball-chunk-2": "chatroomeffects_snowball-chunk-2_3LN56",
        "snowball-chunk-3": "chatroomeffects_snowball-chunk-3_17SFK",
        "snowball-chunk-4": "chatroomeffects_snowball-chunk-4_1k9T7",
        "slide-out-tl": "chatroomeffects_slide-out-tl_3rt8O",
        "slide-out-tr": "chatroomeffects_slide-out-tr_1h5rw",
        "slide-out-bottom": "chatroomeffects_slide-out-bottom_2FcnC",
        pyro: "chatroomeffects_pyro_27tLV",
        before: "chatroomeffects_before_3VKLV",
        after: "chatroomeffects_after_ni2zH",
        bang: "chatroomeffects_bang_11uU_",
        gravity: "chatroomeffects_gravity_2r9Nj",
        position: "chatroomeffects_position_1oxcH",
        pyroBodyShake: "chatroomeffects_pyroBodyShake_gzA5a",
        "pyro-body-shake": "chatroomeffects_pyro-body-shake_2pJtk",
        pyroBodyShake2: "chatroomeffects_pyroBodyShake2_3xiDY",
        "pyro-body-shake2": "chatroomeffects_pyro-body-shake2_2mhGb",
        FireworkPath: "chatroomeffects_FireworkPath_2nF6a",
        "firework-path-animation":
          "chatroomeffects_firework-path-animation_orJWb",
        FireworkContainer: "chatroomeffects_FireworkContainer_3u9FD",
        FireworkPNG: "chatroomeffects_FireworkPNG_X0jkP",
        balloon_small_1: "chatroomeffects_balloon_small_1_1A-H3",
        balloon_move_right: "chatroomeffects_balloon_move_right_3h2xD",
        balloon_move_left: "chatroomeffects_balloon_move_left_T3p_k",
        balloon_big_1: "chatroomeffects_balloon_big_1_cAorK",
        balloon_big_2: "chatroomeffects_balloon_big_2_2tanI",
        balloon_small_2: "chatroomeffects_balloon_small_2_WvqYj",
        balloon_small_3: "chatroomeffects_balloon_small_3_1dwyF",
        "snowball-path-1": "chatroomeffects_snowball-path-1_1WJur",
        "snowball-path-2": "chatroomeffects_snowball-path-2_3Cy2B",
        "snowball-path-3": "chatroomeffects_snowball-path-3_3cQVn",
        "snowball-path-4": "chatroomeffects_snowball-path-4_1UJqQ",
        "snowball-path-5": "chatroomeffects_snowball-path-5_1fMTs",
        "snowball-path-6": "chatroomeffects_snowball-path-6_2EVk-",
        fireworkBigX: "chatroomeffects_fireworkBigX_9TN1P",
        fireworkBigY: "chatroomeffects_fireworkBigY_z5EHL",
        fireworkSmallX: "chatroomeffects_fireworkSmallX_1juxQ",
        fireworkSmallY: "chatroomeffects_fireworkSmallY_yB0na",
        fireworkLongX: "chatroomeffects_fireworkLongX_2JkXj",
        fireworkLongY: "chatroomeffects_fireworkLongY_IJAtr",
      };
    },
    CeOW: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_21.svg?v=valveisgoodatcaching";
    },
    Cw7J: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/bonemetal_224px.png?v=valveisgoodatcaching";
    },
    DPOp: function (e, t, a) {
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
    DtjR: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/boombox.png?v=valveisgoodatcaching";
    },
    FYLW: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/portal_effect_anim.png?v=valveisgoodatcaching";
    },
    FfFA: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/extra_helpful_anim000.png?v=valveisgoodatcaching";
    },
    "Fw/J": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_12.svg?v=valveisgoodatcaching";
    },
    GFoz: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAyIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMjAyIDc2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDBDMi4yMzgyOCAwIDAgMi4yMzg1MyAwIDVWNzFDMCA3My43NjE1IDIuMjM4MjggNzYgNSA3NkgxOTdDMTk5Ljc2MiA3NiAyMDIgNzMuNzYxNSAyMDIgNzFWNUMyMDIgMi4yMzg1MyAxOTkuNzYyIDAgMTk3IDBINVpNMjcgMTguMTQxNEgxOFYxM0g0MC40MzQ2VjE4LjE0MTRIMzJWNTUuODU4Nkg0MC40MzU1VjYxSDMySDI3SDE4VjU1Ljg1ODZIMjdWMTguMTQxNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMDEiIHkxPSIwIiB4Mj0iMTAxIiB5Mj0iNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
    HJR3: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/happy.png?v=valveisgoodatcaching";
    },
    ICG5: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA2IiBoZWlnaHQ9IjUyIiB2aWV3Qm94PSIwIDAgMjA2IDUyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTEzMi44ODEgOC44MTRDMTM0LjQyNyAxMy4yMTAyIDEzNC42ODQgMTkuNDE2NiAxMjkuNzkgMjQuMzI5OUwxMDMgNTJMNzYuMjEgMjQuMzI5OUM3MS4zMTU3IDE5LjQxNjYgNzEuNTczMyAxMi45NTE2IDczLjExODkgOC44MTRDNzUuMTc5NiAzLjY0MjAzIDc5LjgxNjQgMC4yODAyMzggODUuMjI1OSAwLjAyMTYzOTRDODUuNDgzNSAwLjAyMTYzOTQgODUuNzQxMSAwLjAyMTYzOTQgODYuMjU2MyAwLjAyMTYzOTRDOTEuMTUwNiAwLjAyMTYzOTQgOTUuNzg3MyAyLjA5MDQzIDk5LjM5MzYgNS43MTA4MkMxMDEuNDU0IDcuNzc5NjEgMTA0LjgwMyA3Ljc3OTYxIDEwNi44NjQgNS43MTA4MkMxMTAuNDcgMS44MzE4MyAxMTUuNjIyIDAuMDIxNjM5NCAxMjAuNzc0IDAuMDIxNjM5NEMxMjYuMTg0IDAuMjgwMjM4IDEzMC44MiAzLjY0MjAzIDEzMi44ODEgOC44MTRaTTQ4LjY0NzMgMC4wMjE2Mzk0QzQzLjQ5NTMgLTAuMjM2OTU5IDM4LjM0MzQgMS44MzE4MyAzNC43MzcxIDUuNzEwODJDMzIuNjc2MyA3Ljc3OTYxIDI5LjMyNzYgNy43Nzk2MSAyNy4yNjY4IDUuNzEwODJDMjMuOTE4IDIuMDkwNDMgMTkuMjgxMyAwLjAyMTYzOTQgMTQuMTI5NCAwLjAyMTYzOTRDMTMuODcxOCAwLjAyMTYzOTQgMTMuNjE0MiAwLjAyMTYzOTQgMTMuMDk5IDAuMDIxNjM5NEM3LjQzMTkgMC4yODAyMzggMy4wNTI3NyAzLjY0MjAzIDAuOTkyMDAyIDguODE0Qy0wLjU1MzU3NCAxMy4yMTAyIC0wLjgxMTE2OCAxOS40MTY2IDQuMDgzMTYgMjQuMzI5OUwzMC44NzMxIDUyTDU3LjY2MzEgMjQuNTg4NUM2Mi41NTc0IDE5LjY3NTEgNjIuMjk5OCAxMy4yMTAyIDYwLjc1NDMgOS4wNzI2QzU4LjY5MzUgMy42NDIwMiA1NC4wNTY4IDAuMjgwMjM4IDQ4LjY0NzMgMC4wMjE2Mzk0Wk0yMDUuMDA4IDguODE0QzIwMi45NDcgMy42NDIwMyAxOTguMzExIDAuMjgwMjM4IDE5Mi45MDEgMC4wMjE2Mzk0QzE4Ny43NDkgLTAuMjM2OTU5IDE4Mi41OTcgMS44MzE4MyAxNzguOTkxIDUuNzEwODJDMTc2LjkzIDcuNzc5NjEgMTczLjU4MSA3Ljc3OTYxIDE3MS41MjEgNS43MTA4MkMxNjguMTcyIDIuMDkwNDMgMTYzLjUzNSAwLjAyMTYzOTQgMTU4LjM4MyAwLjAyMTYzOTRDMTU4LjEyNiAwLjAyMTYzOTQgMTU3Ljg2OCAwLjAyMTYzOTQgMTU3LjM1MyAwLjAyMTYzOTRDMTUxLjY4NiAwLjI4MDIzOCAxNDcuMzA3IDMuNjQyMDMgMTQ1LjI0NiA4LjgxNEMxNDMuNyAxMy4yMTAyIDE0My40NDMgMTkuNDE2NiAxNDguMzM3IDI0LjMyOTlMMTc1LjEyNyA1MkwyMDEuOTE3IDI0LjU4ODVDMjA2LjgxMSAxOS40MTY1IDIwNi41NTQgMTMuMjEwMiAyMDUuMDA4IDguODE0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEwMyIgeTE9IjAiIHgyPSIxMDMiIHkyPSI1MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC41OCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K";
    },
    IfXo: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/dance.png?v=valveisgoodatcaching";
    },
    IoTS: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_4.svg?v=valveisgoodatcaching";
    },
    J7z0: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_1.svg?v=valveisgoodatcaching";
    },
    J8Mo: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/dota_happy_ursa.png?v=valveisgoodatcaching";
    },
    JeMz: function (e, t, a) {
      var n = {
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
        return a(t);
      }
      function i(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (r.keys = function () {
        return Object.keys(n);
      }),
        (r.resolve = i),
        (e.exports = r),
        (r.id = "JeMz");
    },
    Lvue: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/csgo_sas_bg.jpg?v=valveisgoodatcaching";
    },
    M2Z0: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/deep_thoughts_anim0000.png?v=valveisgoodatcaching";
    },
    MLaC: function (e, t, a) {
      e.exports = { Pulse: "pulse_Pulse_V5Gbv", pulse: "pulse_pulse_1qxHE" };
    },
    Matr: function (e, t, a) {
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
    O9hZ: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_9.svg?v=valveisgoodatcaching";
    },
    Qpv1: function (e, t, a) {
      e.exports = {
        Banner: "banner_Banner_ECzA2",
        Image: "banner_Image_28bFl",
        Content: "banner_Content_3weUA",
        Title: "banner_Title_xHxqv",
        Subtitle: "banner_Subtitle_YZMtY",
        Link: "banner_Link_185F6",
      };
    },
    RImk: function (e, t, a) {
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
    RV7a: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      }),
        a.d(t, "c", function () {
          return m;
        }),
        a.d(t, "f", function () {
          return d;
        }),
        a.d(t, "h", function () {
          return g;
        }),
        a.d(t, "d", function () {
          return f;
        }),
        a.d(t, "k", function () {
          return C;
        }),
        a.d(t, "l", function () {
          return I;
        }),
        a.d(t, "j", function () {
          return y;
        }),
        a.d(t, "g", function () {
          return w;
        }),
        a.d(t, "b", function () {
          return M;
        }),
        a.d(t, "i", function () {
          return v;
        }),
        a.d(t, "e", function () {
          return N;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("qY0t"),
        s = a("GbHM"),
        l = a("Lsvi");
      const c = Object(r.forwardRef)(function (e, t) {
          const {
              component: a,
              padding: r,
              paddingX: o,
              paddingY: l,
              paddingRight: c,
              paddingLeft: m,
              paddingTop: d,
              paddingBottom: p,
              margin: u,
              marginX: _,
              marginY: g,
              marginLeft: f,
              marginTop: h,
              marginRight: b,
              marginBottom: I,
              display: y,
              flexDirection: w,
              flexWrap: M,
              justifyContent: E,
              alignItems: v,
              flexGrow: N,
              flexShrink: j,
              flexBasis: S,
              flex: O,
              className: A,
              style: D,
            } = e,
            x = Object(n.c)(e, [
              "component",
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
            B = Object(s.a)(
              C("padding-left", m || o || r),
              C("padding-top", d || l || r),
              C("padding-right", c || o || r),
              C("padding-bottom", p || l || r),
              C("margin-left", f || _ || u),
              C("margin-top", h || g || u),
              C("margin-right", b || _ || u),
              C("margin-bottom", I || g || u),
              A
            ),
            L = Object.assign(
              {
                display: y,
                flexDirection: w,
                flexWrap: M,
                justifyContent: E,
                alignItems: v,
                flexGrow: N,
                flexShrink: j,
                flexBasis: S,
                flex: O,
              },
              D
            ),
            P = Object.assign({ className: B, style: L, ref: t }, x);
          if (a) {
            const e = a;
            return i.a.createElement(e, Object.assign({}, P));
          }
          return i.a.createElement(
            "div",
            Object.assign({ className: B, style: L, ref: t }, x)
          );
        }),
        m = Object(r.forwardRef)(function (e, t) {
          const {
              children: a,
              style: s,
              spacing: m,
              horizontalSpacing: d,
              verticalSpacing: u,
              itemClassName: _,
              "flow-children": f = "row",
            } = e,
            h = Object(n.c)(e, [
              "children",
              "style",
              "spacing",
              "horizontalSpacing",
              "verticalSpacing",
              "itemClassName",
              "flow-children",
            ]),
            b = g(),
            C = b.spacing[y(d || m || "none")],
            I = b.spacing[y(u || m || "none")];
          return i.a.createElement(
            l.a,
            Object.assign(
              {
                "flow-children": f,
                ref: t,
                style: Object.assign(Object.assign({}, s || {}), {
                  marginTop: p(-I),
                }),
              },
              h
            ),
            i.a.createElement(
              "div",
              { style: { marginLeft: p(-C) }, className: o.InlineContainer },
              r.Children.map(a, (e) =>
                null != e
                  ? i.a.createElement(
                      c,
                      { paddingLeft: d || m, paddingTop: u || m, className: _ },
                      e
                    )
                  : null
              )
            )
          );
        }),
        d = Object(r.forwardRef)(function (e, t) {
          const { spacing: a, itemClassName: m, children: d, className: p } = e,
            u = Object(n.c)(e, [
              "spacing",
              "itemClassName",
              "children",
              "className",
            ]),
            _ = r.Children.count(d);
          return i.a.createElement(
            l.a,
            Object.assign(
              { "flow-children": "column", ref: t, className: p },
              u
            ),
            r.Children.map(d, (e, t) =>
              null != e
                ? i.a.createElement(
                    c,
                    {
                      paddingBottom: t !== _ - 1 ? a : void 0,
                      className: Object(s.a)(m, o.RemoveOnEmpty),
                    },
                    e
                  )
                : null
            )
          );
        }),
        p = (e) => `${e}px`,
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
        _ = Object(r.createContext)(u),
        g = () => Object(r.useContext)(_),
        f = (e) => {
          const { config: t, children: a } = e,
            n = t || u,
            o = Object(r.useMemo)(
              () =>
                (function (e) {
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
                    .map((t) =>
                      Object.keys(e.spacing)
                        .map((a) => b(t, a, e.spacing[a]))
                        .join("\n")
                    )
                    .join("\n");
                })(n),
              [n]
            ),
            [s, l] = Object(r.useState)(0);
          return (
            Object(r.useLayoutEffect)(() => {
              l((e) => e + 1);
            }, [o]),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement("style", null, o),
              a
            )
          );
        };
      const h = (e, t) => `${e}-${t}`,
        b = (e, t, a) => `.${h(e, t)} { ${e}: ${a}px; }`,
        C = (e, t) => {
          const a = y(t);
          return t ? h(e, a) : "";
        };
      function I(e) {
        const t = g(),
          a = y(e);
        return (e && t.spacing[a]) || 0;
      }
      function y(e) {
        const t = w();
        if (!Array.isArray(e)) return e;
        const a = "desktop" === t ? 2 : "tablet" === t ? 1 : 0;
        return e[Math.min(a, e.length - 1)];
      }
      function w() {
        const {
            breakpoint: { tablet: e, desktop: t },
          } = g(),
          a = v(`(min-width: ${e}px)`);
        return v(`(min-width: ${t}px)`) ? "desktop" : a ? "tablet" : "mobile";
      }
      function M(e) {
        return e.children(w());
      }
      const E = {};
      function v(e) {
        const [t, a] = i.a.useState(!1);
        return (
          i.a.useEffect(() => {
            let t = !0;
            E[e]
              ? E[e].refCount++
              : (E[e] = { list: window.matchMedia(e), refCount: 1 });
            const n = E[e].list,
              r = () => {
                t && a(n.matches);
              };
            return (
              r(),
              n.addListener(r),
              () => {
                (t = !1),
                  n.removeListener(r),
                  E[e].refCount--,
                  0 === E[e].refCount && delete E[e];
              }
            );
          }, [e]),
          t
        );
      }
      function N(e) {
        return i.a.createElement(c, Object.assign({ component: l.a }, e));
      }
    },
    Rbfr: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("GbHM"),
        s = a("AxUk"),
        l = a("fsrB");
      const c = (e) => {
        const { className: t } = e,
          a = Object(n.c)(e, ["className"]);
        return i.a.createElement(
          l.d,
          Object.assign({ className: Object(o.a)(t, s.UnstyledButton) }, a)
        );
      };
    },
    RvZ5: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_14.svg?v=valveisgoodatcaching";
    },
    StxQ: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return d;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("GbHM"),
        s = a("9Dmu"),
        l = a("GXif"),
        c = a("e356"),
        m = a("r0f0");
      const d = (e) => {
        const { amount: t, className: a, size: r } = e,
          d = Object(n.c)(e, ["amount", "className", "size"]),
          p = t > 0 ? Object(m.a)(t) : Object(l.g)("#Rewards_Free");
        return i.a.createElement(
          "div",
          Object.assign({ className: Object(o.a)(s.Container, a) }, d),
          i.a.createElement(c.P, { className: s.Icon }),
          i.a.createElement(
            "div",
            {
              className: s.Amount,
              style: r ? { fontSize: `${r}rem` } : void 0,
            },
            p,
            e.children
          )
        );
      };
    },
    TBZS: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/csgoChat_128_chickendance.png?v=valveisgoodatcaching";
    },
    TJrv: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/home_background.png?v=valveisgoodatcaching";
    },
    TL5o: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/csgoChat_128_hostage.png?v=valveisgoodatcaching";
    },
    UpHR: function (e, t, a) {
      e.exports = {
        Loading: "loading_Loading_1EZPm",
        LoadAmin: "loading_LoadAmin_2z54o",
        Small: "loading_Small_2tpvD",
        Medium: "loading_Medium_Ja-Qq",
        Large: "loading_Large_aKJra",
      };
    },
    "Uy/A": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/lunar2022_confirm.png?v=valveisgoodatcaching";
    },
    "V+CE": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icons_floor.png?v=valveisgoodatcaching";
    },
    VFGZ: function (e, t, a) {
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
    Vlb1: function (e, t, a) {
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
        ImageKeyboard: "rewarditem_ImageKeyboard_3bhni",
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
    Vnj0: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_13.svg?v=valveisgoodatcaching";
    },
    Wilf: function (e, t, a) {
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
    Wl4Y: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/header_image.png?v=valveisgoodatcaching";
    },
    YpyZ: function (e, t, a) {
      e.exports = { Discount: "discount_Discount_2dE0f" };
    },
    aLBk: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_5.svg?v=valveisgoodatcaching";
    },
    bEwK: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/RewardsSeason1Hero.png?v=valveisgoodatcaching";
    },
    bFVC: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/awards_ui.png?v=valveisgoodatcaching";
    },
    bnhs: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/star.png?v=valveisgoodatcaching";
    },
    cCsu: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/diamonds_tile.png?v=valveisgoodatcaching";
    },
    cJ7F: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      }),
        a.d(t, "b", function () {
          return m;
        }),
        a.d(t, "c", function () {
          return d;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("VFGZ"),
        s = a("GbHM"),
        l = a("Lsvi");
      const c = (e) => {
          const { className: t, children: a, onClick: r } = e,
            c = Object(n.c)(e, ["className", "children", "onClick"]);
          return i.a.createElement(
            l.a,
            Object.assign(
              {
                className: Object(s.a)(o.ItemBox, t),
                focusable: !0,
                onActivate: r,
              },
              c
            ),
            i.a.createElement("div", {
              className: Object(s.a)(o.NoBackdropSupportBackdrop),
            }),
            a
          );
        },
        m = (e) => {
          const { className: t } = e,
            a = Object(n.c)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object.assign({ className: Object(s.a)(o.Body, t) }, a)
          );
        },
        d = (e) => {
          const { className: t } = e,
            a = Object(n.c)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object.assign({ className: Object(s.a)(o.Footer, t) }, a)
          );
        };
    },
    cMO7: function (e, t, a) {
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
    cOvF: function (e, t, a) {
      "use strict";
      a.d(t, "j", function () {
        return s;
      }),
        a.d(t, "k", function () {
          return l;
        }),
        a.d(t, "u", function () {
          return c;
        }),
        a.d(t, "g", function () {
          return m;
        }),
        a.d(t, "h", function () {
          return d;
        }),
        a.d(t, "s", function () {
          return p;
        }),
        a.d(t, "m", function () {
          return u;
        }),
        a.d(t, "f", function () {
          return _;
        }),
        a.d(t, "y", function () {
          return g;
        }),
        a.d(t, "c", function () {
          return f;
        }),
        a.d(t, "v", function () {
          return h;
        }),
        a.d(t, "A", function () {
          return b;
        }),
        a.d(t, "r", function () {
          return C;
        }),
        a.d(t, "b", function () {
          return I;
        }),
        a.d(t, "n", function () {
          return y;
        }),
        a.d(t, "e", function () {
          return w;
        }),
        a.d(t, "d", function () {
          return M;
        }),
        a.d(t, "o", function () {
          return E;
        }),
        a.d(t, "x", function () {
          return v;
        }),
        a.d(t, "p", function () {
          return N;
        }),
        a.d(t, "q", function () {
          return j;
        }),
        a.d(t, "l", function () {
          return S;
        }),
        a.d(t, "i", function () {
          return O;
        }),
        a.d(t, "z", function () {
          return A;
        }),
        a.d(t, "w", function () {
          return D;
        }),
        a.d(t, "t", function () {
          return x;
        }),
        a.d(t, "a", function () {
          return B;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("GbHM");
      const s = (e) =>
          i.a.createElement(
            "svg",
            Object.assign(
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
              d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
            })
          ),
        l = (e) =>
          i.a.createElement(
            "svg",
            Object.assign(
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
              d: "M15.2305 28.1415L15.2305 15.621L15.2305 3.10029C8.31552 3.10029 2.70984 8.70596 2.70984 15.6209C2.70984 22.5359 8.31552 28.1415 15.2305 28.1415ZM30.2305 15.6209C30.2305 23.9052 23.5147 30.6209 15.2305 30.6209C6.9462 30.6209 0.230469 23.9052 0.230469 15.6209C0.230469 7.33664 6.9462 0.620911 15.2305 0.620911C23.5147 0.620911 30.2305 7.33664 30.2305 15.6209Z",
              fill: "#5B7E0F",
            })
          );
      function c(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M31.327 0.622074L31.0027 0.341797L30.6762 0.619372L7.67619 20.1694L0.676186 26.1194C0.465782 26.2982 0.440197 26.6138 0.61904 26.8242C0.797884 27.0346 1.11343 27.0602 1.32383 26.8813L7.50001 21.6316V49.0003C7.50001 50.3811 8.6193 51.5003 10 51.5003H51.5C52.8807 51.5003 54 50.3811 54 49.0003V21.5426L60.173 26.8786C60.3819 27.0592 60.6977 27.0362 60.8783 26.8273C61.0589 26.6184 61.0359 26.3027 60.827 26.1221L53.827 20.0712L31.327 0.622074ZM8.50001 49.0003V20.7816L30.9973 1.65889L53 20.6782V49.0003C53 49.8288 52.3284 50.5003 51.5 50.5003H38.5V32.0003C38.5 30.6196 37.3807 29.5003 36 29.5003H26C24.6193 29.5003 23.5 30.6196 23.5 32.0003V50.5003H10C9.17158 50.5003 8.50001 49.8288 8.50001 49.0003ZM24.5 50.5003H37.5V32.0003C37.5 31.1719 36.8284 30.5003 36 30.5003H26C25.1716 30.5003 24.5 31.1719 24.5 32.0003V50.5003Z",
            fill: "",
          })
        );
      }
      function m(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M33.9999 10.5C33.9999 15.7034 29.5671 20 23.9999 20C18.4327 20 13.9999 15.7034 13.9999 10.5C13.9999 5.29663 18.4327 1 23.9999 1C29.5671 1 33.9999 5.29663 33.9999 10.5ZM34.9999 10.5C34.9999 16.299 30.075 21 23.9999 21C17.9247 21 12.9999 16.299 12.9999 10.5C12.9999 4.70101 17.9247 0 23.9999 0C30.075 0 34.9999 4.70101 34.9999 10.5ZM16.3702 23.5C10.6886 23.5 5.62398 26.8717 3.72868 32.2547C2.47599 35.8127 1.26935 39.3781 0.768536 40.866C0.549738 41.516 0.803538 42.2172 1.36831 42.5884L4.65592 44.7495C16.463 52.5107 31.809 52.2879 43.3858 44.1873L45.6833 42.5797C46.2215 42.2031 46.452 41.5201 46.2522 40.8944L43.9193 33.5891C42.0002 27.5792 36.4154 23.5 30.1065 23.5H24.2027H16.3702ZM4.67193 32.5868C6.41799 27.6277 11.0872 24.5 16.3702 24.5H24.2027H30.1065C35.9803 24.5 41.1799 28.2979 42.9667 33.8933L45.2996 41.1986C45.3662 41.4072 45.2893 41.6348 45.1099 41.7604L42.8125 43.368C31.5712 51.2338 16.67 51.4501 5.20521 43.9139L1.9176 41.7528C1.72419 41.6257 1.64564 41.3949 1.71629 41.185C2.21655 39.6988 3.42149 36.1384 4.67193 32.5868Z",
            fill: "",
          })
        );
      }
      function d(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M24.5 12C27.5376 12 30 9.53757 30 6.5C30 3.46243 27.5376 1 24.5 1C21.4624 1 19 3.46243 19 6.5C19 9.53757 21.4624 12 24.5 12ZM24.5 13C26.1149 13 27.5923 12.411 28.7291 11.4362L38.2929 21H11.2071L20.5469 11.6602C21.6422 12.5005 23.0128 13 24.5 13ZM9.79289 21L19.8014 10.9915C18.6855 9.8244 18 8.24225 18 6.5C18 2.91015 20.9101 0 24.5 0C28.0899 0 31 2.91015 31 6.5C31 8.11495 30.411 9.59234 29.4362 10.7291L39.7071 21H40H45C46.933 21 48.5 22.567 48.5 24.5V54C48.5 55.933 46.933 57.5 45 57.5H4C2.067 57.5 0.5 55.933 0.5 54V24.5C0.5 22.567 2.067 21 4 21H8H9.79289ZM8 22H4C2.61929 22 1.5 23.1193 1.5 24.5V54C1.5 55.3807 2.61929 56.5 4 56.5H45C46.3807 56.5 47.5 55.3807 47.5 54V24.5C47.5 23.1193 46.3807 22 45 22H40H39.5H39.2929H10.2071H10H8ZM10.5 29C9.11929 29 8 30.1193 8 31.5V48C8 49.3807 9.11929 50.5 10.5 50.5H37.5C38.8807 50.5 40 49.3807 40 48V31.5C40 30.1193 38.8807 29 37.5 29H10.5ZM9 31.5C9 30.6716 9.67157 30 10.5 30H37.5C38.3284 30 39 30.6716 39 31.5V48C39 48.8284 38.3284 49.5 37.5 49.5H10.5C9.67157 49.5 9 48.8284 9 48V31.5Z",
            fill: "",
          })
        );
      }
      function p(e) {
        const { className: t } = e,
          a = Object(n.c)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object.assign(
            {
              className: Object(o.a)(t, "SVGIcon_Button"),
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            a
          ),
          i.a.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 9H34V27H2V9ZM5 13H7V15H5V13ZM7 21H5V23H7V21ZM5 17H9V19H5V17ZM11 13H9V15H11V13ZM9 21H27V23H9V21ZM15 13H13V15H15V13ZM11 17H13V19H11V17ZM19 13H17V15H19V13ZM15 17H17V19H15V17ZM21 17H19V19H21V17ZM21 13H23V15H21V13ZM25 17H23V19H25V17ZM25 13H27V15H25V13ZM31 13H29V15H31V13ZM29 21H31V23H29V21ZM31 17H27V19H31V17Z",
          })
        );
      }
      function u(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M43.2109 6.95H7.21094C4.00769 6.95 1.41094 9.54675 1.41094 12.75V48.6496C1.41094 51.8528 4.00769 54.4496 7.21094 54.4496H43.2109C46.4142 54.4496 49.0109 51.8528 49.0109 48.6496V12.75C49.0109 9.54675 46.4142 6.95 43.2109 6.95ZM7.21094 5.75C3.34494 5.75 0.210938 8.88401 0.210938 12.75V48.6496C0.210938 52.5156 3.34494 55.6496 7.21094 55.6496H43.2109C47.0769 55.6496 50.2109 52.5156 50.2109 48.6496V12.75C50.2109 8.88401 47.0769 5.75 43.2109 5.75H7.21094Z",
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
            d: "M27.3491 29.4463L25.9645 25.5785C25.7114 24.8714 24.7113 24.8714 24.4581 25.5785L23.0735 29.4463C22.6297 30.6861 21.4717 31.5275 20.1555 31.5664L16.0491 31.688C15.2983 31.7103 14.9893 32.6614 15.5836 33.1207L18.8342 35.6327C19.8762 36.4379 20.3185 37.7992 19.9488 39.0631L18.7956 43.0061C18.5847 43.727 19.3938 44.3148 20.0142 43.8915L23.4079 41.5762C24.4956 40.8341 25.927 40.8341 27.0148 41.5762L30.4084 43.8915C31.0288 44.3148 31.8379 43.727 31.6271 43.0061L30.4738 39.0631C30.1041 37.7992 30.5464 36.4379 31.5884 35.6327L34.839 33.1207C35.4334 32.6614 35.1243 31.7103 34.3735 31.688L30.2672 31.5664C28.9509 31.5275 27.7929 30.6861 27.3491 29.4463ZM27.0943 25.1741C26.4614 23.4062 23.9612 23.4062 23.3283 25.1741L21.9437 29.0419C21.6663 29.8168 20.9426 30.3426 20.1199 30.367L16.0136 30.4886C14.1366 30.5441 13.364 32.922 14.8498 34.0702L18.1005 36.5823C18.7517 37.0855 19.0281 37.9363 18.7971 38.7262L17.6438 42.6692C17.1167 44.4715 19.1394 45.9411 20.6905 44.8828L24.0841 42.5675C24.764 42.1037 25.6586 42.1037 26.3385 42.5675L29.7321 44.8828C31.2832 45.9411 33.306 44.4715 32.7788 42.6692L31.6255 38.7262C31.3945 37.9363 31.6709 37.0855 32.3221 36.5823L35.5728 34.0702C37.0586 32.922 36.286 30.5441 34.409 30.4886L30.3027 30.367C29.48 30.3426 28.7563 29.8168 28.4789 29.0419L27.0943 25.1741Z",
            fill: "",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.4922 9.125V0.0268555L17.6922 0.0268555L17.6922 9.125H16.4922Z",
            fill: "",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.0234 13.2063C17.8795 13.2063 18.5734 12.5123 18.5734 11.6562C18.5734 10.8002 17.8795 10.1062 17.0234 10.1062C16.1674 10.1062 15.4734 10.8002 15.4734 11.6562C15.4734 12.5123 16.1674 13.2063 17.0234 13.2063ZM17.0234 14.4062C18.5422 14.4062 19.7734 13.175 19.7734 11.6562C19.7734 10.1375 18.5422 8.90625 17.0234 8.90625C15.5047 8.90625 14.2734 10.1375 14.2734 11.6562C14.2734 13.175 15.5047 14.4062 17.0234 14.4062Z",
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
            d: "M33.3984 13.2063C34.2545 13.2063 34.9484 12.5123 34.9484 11.6562C34.9484 10.8002 34.2545 10.1062 33.3984 10.1062C32.5424 10.1062 31.8484 10.8002 31.8484 11.6562C31.8484 12.5123 32.5424 13.2063 33.3984 13.2063ZM33.3984 14.4062C34.9172 14.4062 36.1484 13.175 36.1484 11.6562C36.1484 10.1375 34.9172 8.90625 33.3984 8.90625C31.8797 8.90625 30.6484 10.1375 30.6484 11.6562C30.6484 13.175 31.8797 14.4062 33.3984 14.4062Z",
            fill: "",
          })
        );
      }
      function _(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M49.3,41.6l-19.6-20l9.8-9.6c0.6,0.1,1.2,0.1,1.7-0.1c1.6-0.4,2.8-1.8,3.4-3.8c0.6-2.1,2-3.6,3.1-4.1\r\n\t\tc0.5-0.2,0.9-0.3,1.2-0.2c0.4,0.2,0.8,0,1-0.4c0.2-0.4,0-0.8-0.4-1c-2.1-1-3.9-1.5-5.7-1.5c-1.8,0-3.5,0.6-5.1,1.7\r\n\t\tc-2,1.5-3.1,3-3.2,4.6c0,0.3,0,0.5,0,0.8L26,17.9l-9.6-9.8c0-0.3,0.1-0.5,0-0.8c-0.1-1.6-1.2-3.1-3.2-4.6C11.7,1.5,10,0.9,8.2,0.9\r\n\t\tc-1.7,0-3.6,0.5-5.7,1.5C2.2,2.7,2,3.1,2.2,3.5c0.2,0.4,0.6,0.6,1,0.4c0.3-0.1,0.7,0,1.2,0.2c1.1,0.5,2.5,2,3.1,4.1\r\n\t\tc0.6,2,1.8,3.3,3.4,3.8c0.6,0.2,1.2,0.2,1.7,0.1l9.8,9.6l-19.6,20c-0.9,0.9-0.9,2.3,0,3.2c0.9,0.9,2.3,0.9,3.2,0l20-19.6\r\n\t\tc-0.1-0.1-0.3-0.3-0.4-0.4l20.5,20c0.9,0.9,2.3,0.9,3.2,0C50.1,43.9,50.1,42.5,49.3,41.6z M39.7,3.9c1.4-1.1,3.5-2.1,6.9-1\r\n\t\tc-1.6,1-2.9,2.8-3.5,4.8c-0.4,1.4-1.2,2.4-2.3,2.7c-0.4,0.1-0.9,0.1-1.3,0c0,0,0,0-0.1,0c-0.4-0.1-0.7-0.3-1.1-0.6\r\n\t\tc-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0-0.1-0.1c-0.3-0.4-0.5-0.8-0.7-1.2c0,0,0,0,0,0\r\n\t\tc-0.1-0.2-0.1-0.5-0.1-0.7C37.2,6.3,38,5.1,39.7,3.9z M36.2,9.7C36.2,9.7,36.2,9.7,36.2,9.7c0.1,0.2,0.2,0.4,0.4,0.5\r\n\t\tc0,0,0.1,0.1,0.1,0.1c0.1,0.2,0.3,0.3,0.5,0.5c0,0,0,0,0,0c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1\r\n\t\tl-1.3,1.3L34.9,11L36.2,9.7z M33.9,12.1l1.7,1.7l-6.9,6.8L27.1,19L33.9,12.1z M13.8,9.7c-0.1,0.1-0.1,0.1-0.2,0.1\r\n\t\tc-0.3,0.3-0.7,0.5-1.1,0.6c0,0,0,0-0.1,0c-0.4,0.1-0.9,0.1-1.3,0c-1-0.3-1.9-1.3-2.3-2.7C8.4,5.7,7,3.9,5.5,2.9\r\n\t\tc3.4-1.1,5.5-0.1,6.9,1c1.6,1.2,2.5,2.4,2.6,3.5c0,0.2,0,0.5-0.1,0.7c0,0,0,0,0,0c-0.1,0.4-0.3,0.8-0.7,1.2c0,0,0,0-0.1,0.1\r\n\t\tC14,9.4,13.9,9.5,13.8,9.7C13.8,9.7,13.8,9.7,13.8,9.7z M14.1,11.4c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1\r\n\t\tc0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.2-0.2,0.3-0.3,0.5-0.5c0,0,0.1-0.1,0.1-0.1c0.1-0.2,0.3-0.3,0.4-0.5c0,0,0,0,0,0l1.3,1.3\r\n\t\tl-1.7,1.7L14.1,11.4z M4.9,43.7c-0.3,0.3-0.7,0.3-1,0c-0.3-0.3-0.3-0.7,0-1l19.6-20l1.5,1.4L4.9,43.7z M48.2,43.7\r\n\t\tc-0.3,0.3-0.7,0.3-1,0l-30.6-30l1.7-1.7l30,30.6C48.4,43,48.4,43.5,48.2,43.7z",
          })
        );
      }
      function g(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
        return i.a.createElement(
          "svg",
          {
            className: Object(o.a)(t, "SVGIcon_Button"),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 52 46.1",
          },
          i.a.createElement("path", {
            d: "M51.5,40.2l-6.8-11.7c2.4-2,3.9-5,3.9-8.4c0-6.1-4.9-11-11-11c-1.3,0-2.5,0.2-3.7,0.6L29.4,2c-0.7-1.2-2-2-3.4-2s-2.7,0.7-3.4,2l-4.1,7.1H6.6v20.6l-6,10.5c-0.7,1.2-0.7,2.7,0,4c0.7,1.2,2,2,3.4,2H48c1.4,0,2.7-0.7,3.4-2C52.2,42.9,52.2,41.4,51.5,40.2z M46.6,20.1c0,5-4,9-9,9s-9-4-9-9s4-9,9-9S46.6,15.1,46.6,20.1z M8.6,11.1h8.7L8.6,26.2V11.1zM49.7,43.1c-0.4,0.6-1,1-1.7,1H4c-0.7,0-1.3-0.4-1.7-1c-0.4-0.6-0.4-1.3,0-2L24.3,3c0.4-0.6,1-1,1.7-1s1.3,0.4,1.7,1l4.4,7.6c-3.3,1.9-5.5,5.5-5.5,9.5c0,6.1,4.9,11,11,11c2,0,3.9-0.5,5.5-1.5l6.7,11.5C50.1,41.8,50.1,42.5,49.7,43.1z",
          })
        );
      }
      function f(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M4 0C1.79086 0 0 1.79086 0 4V50C0 52.2091 1.79086 54 4 54H11H53H60C62.2091 54 64 52.2091 64 50V4C64 1.79086 62.2091 0 60 0H53H11H4ZM11 2V52H53V2H11ZM8 25H3V29.8H8V25ZM3 15H8V19.8H3V15ZM8 6H3V10.8H8V6ZM3 34.5996H8V39.3996H3V34.5996ZM8 44.2002H3V49.0002H8V44.2002ZM39.8603 17.535C39.8603 21.0291 36.8085 24.0701 32.7786 24.0701C28.7487 24.0701 25.6969 21.0291 25.6969 17.535C25.6969 14.041 28.7487 11 32.7786 11C36.8085 11 39.8603 14.041 39.8603 17.535ZM41.8603 17.535C41.8603 22.2488 37.7943 26.0701 32.7786 26.0701C27.7629 26.0701 23.6969 22.2488 23.6969 17.535C23.6969 12.8213 27.7629 9 32.7786 9C37.7943 9 41.8603 12.8213 41.8603 17.535ZM30.4484 27.5466C24.6389 27.5466 19.3689 30.9432 17.364 36.4652C16.8368 37.9173 16.3885 39.1885 16.1121 39.9794C15.773 40.9495 16.227 42.0134 17.1535 42.4456L17.9794 42.831C27.4793 47.2632 38.4824 47.1178 47.8618 42.4361C48.7479 41.9938 49.1714 40.9651 48.8535 40.0271L48.0754 37.7315C46.0118 31.6431 40.2979 27.5466 33.8692 27.5466H33.0013H30.4484ZM19.2439 37.1478C20.9397 32.4771 25.4141 29.5466 30.4484 29.5466H33.0013H33.8692C39.4407 29.5466 44.3928 33.0969 46.1812 38.3735L46.9541 40.6538C38.1237 45.056 27.7672 45.1905 18.825 41.0185L18.0018 40.6344C18.2765 39.8484 18.7212 38.5873 19.2439 37.1478ZM61 25H56V29.8H61V25ZM56 15H61V19.8H56V15ZM61 6H56V10.8H61V6ZM56 34.5996H61V39.3996H56V34.5996ZM61 44.2002H56V49.0002H61V44.2002Z",
            fill: "",
          })
        );
      }
      function h(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M58 2H3C2.44772 2 2 2.44772 2 3V49.9671L14.44 40.7192L15.0898 40.2361L15.6975 40.7713L21.5338 45.911L40.422 28.2692L41.1163 27.6207L41.7995 28.2809L59 44.9038V3C59 2.44772 58.5523 2 58 2ZM2 63V52.4592L14.9834 42.8074L20.8927 48.0113L27.4097 53.7505L28.7315 52.2495L23.0419 47.2391L41.0928 30.3793L59 47.6851V63C59 63.5523 58.5523 64 58 64H3C2.44772 64 2 63.5523 2 63ZM3 0C1.34315 0 0 1.34315 0 3V63C0 64.6569 1.34315 66 3 66H58C59.6569 66 61 64.6569 61 63V3C61 1.34315 59.6569 0 58 0H3ZM22.7185 16.2664C22.7185 18.5968 20.8293 20.486 18.4989 20.486C16.1685 20.486 14.2793 18.5968 14.2793 16.2664C14.2793 13.936 16.1685 12.0468 18.4989 12.0468C20.8293 12.0468 22.7185 13.936 22.7185 16.2664ZM24.7185 16.2664C24.7185 19.7014 21.9339 22.486 18.4989 22.486C15.0639 22.486 12.2793 19.7014 12.2793 16.2664C12.2793 12.8314 15.0639 10.0468 18.4989 10.0468C21.9339 10.0468 24.7185 12.8314 24.7185 16.2664Z",
            fill: "",
          })
        );
      }
      function b(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M31.9861 26.8551C32.2029 26.8551 32.3783 27.0254 32.3783 27.2355V29.2195C32.3783 29.4295 32.2029 29.5998 31.9861 29.5998H1.39223C1.17543 29.5998 1 29.4295 1 29.2195V27.2355C1 27.0254 1.17543 26.8551 1.39223 26.8551H3.20016V1.83469C3.20016 1.62465 3.37559 1.45435 3.59239 1.45435H10.1412C10.358 1.45435 10.5334 1.62465 10.5334 1.83469V5.05554H14.5097V1.83469C14.5097 1.62465 14.6851 1.45435 14.9019 1.45435H19.6631C19.8798 1.45435 20.0553 1.62465 20.0553 1.83469V4.18744L25.4729 3.22867C25.576 3.21139 25.6813 3.23257 25.7663 3.28995C25.8521 3.34734 25.9108 3.43537 25.9291 3.53454L30.1782 26.1126C30.2172 26.3193 30.0759 26.5175 29.8629 26.5552L28.1683 26.8551H31.9861ZM23.5066 22.6202L24.2874 26.7688L29.3362 25.8751L28.5555 21.7266L23.5066 22.6202ZM23.3657 21.8718L28.4147 20.9782L28.0604 19.0957L23.0114 19.989L23.3657 21.8718ZM27.9195 18.3472L25.2278 4.04525L20.1786 4.93891L22.8705 19.2406L27.9195 18.3472ZM20.0553 26.8551H23.5062L20.0553 8.51936V26.8551ZM19.2708 2.21503H15.2941V5.43589V26.8551H19.2708V2.21503ZM14.5097 26.8551V5.81623H10.5334V26.8551H14.5097ZM9.74893 10.38H3.98462V18.6904H9.74893V10.38ZM3.98462 9.6193H9.74893V7.41988H3.98462V9.6193ZM9.74893 19.451H3.98462V21.6503H9.74893V19.451ZM9.74893 5.43589V2.21503H3.98462V6.65919H9.74893V5.43589ZM9.74893 22.411H3.98462V26.8551H9.74893V22.411ZM1.78446 28.8391H31.5939V27.6158H19.6631H14.9019H10.1412H3.59239H1.78446V28.8391ZM13.6023 22.1066H11.4409C11.2241 22.1066 11.0486 21.9363 11.0486 21.7263C11.0486 21.5162 11.2241 21.3459 11.4409 21.3459H13.6023C13.8191 21.3459 13.9946 21.5162 13.9946 21.7263C13.9946 21.9363 13.8191 22.1066 13.6023 22.1066ZM11.4409 19.4512H13.6023C13.8191 19.4512 13.9946 19.2809 13.9946 19.0709C13.9946 18.8608 13.8191 18.6905 13.6023 18.6905H11.4409C11.2241 18.6905 11.0486 18.8608 11.0486 19.0709C11.0486 19.2809 11.2241 19.4512 11.4409 19.4512ZM18.3634 22.1066H16.2016C15.9848 22.1066 15.8093 21.9363 15.8093 21.7263C15.8093 21.5162 15.9848 21.3459 16.2016 21.3459H18.3634C18.5802 21.3459 18.7556 21.5162 18.7556 21.7263C18.7556 21.9363 18.5802 22.1066 18.3634 22.1066ZM16.2016 19.4512H18.3634C18.5802 19.4512 18.7556 19.2809 18.7556 19.0709C18.7556 18.8608 18.5802 18.6905 18.3634 18.6905H16.2016C15.9848 18.6905 15.8093 18.8608 15.8093 19.0709C15.8093 19.2809 15.9848 19.4512 16.2016 19.4512ZM4.80876 14.5352C4.80876 12.8573 5.71273 11.543 6.86643 11.543C8.02052 11.543 8.92449 12.8573 8.92449 14.5352C8.92449 16.2129 8.02052 17.5273 6.86643 17.5273C5.71273 17.5273 4.80876 16.2129 4.80876 14.5352ZM5.59322 14.5352C5.59322 15.7448 6.1762 16.7666 6.86643 16.7666C7.55666 16.7666 8.14003 15.7448 8.14003 14.5352C8.14003 13.3256 7.55666 12.3037 6.86643 12.3037C6.1762 12.3037 5.59322 13.3256 5.59322 14.5352Z",
            fill: "",
          })
        );
      }
      function C(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M21.6537 6.60785H6.45296V21.836H21.6537V6.60785ZM5.66537 5.82026V22.6236H22.4413V5.82026H5.66537Z",
            fill: "currentColor",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8655 3.81134H19.0663V4.45177H19.8538V3.81134V3.02375H19.0663H3.8655H3.07791V3.81134V19.0395V19.8271H3.8655H4.50591V19.0395H3.8655V3.81134Z",
            fill: "currentColor",
          }),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.27802 1.01483H16.4788V1.65525H17.2664V1.01483V0.227242H16.4788H1.27802H0.490433V1.01483V16.243V17.0305H1.27802H1.91844V16.243H1.27802V1.01483Z",
            fill: "currentColor",
          })
        );
      }
      function I(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M5.68889 0H58.3111C61.44 0 64 2.56 64 5.68889V18.8444H0V5.68889C0 2.56 2.56 0 5.68889 0ZM17.2302 12.7289C17.8183 12.7289 18.2969 12.2503 18.2969 11.6622V6.82667C18.2969 6.23858 17.8183 5.76 17.2302 5.76H7.98578C7.39769 5.76 6.91911 6.23858 6.91911 6.82667V11.6622C6.91911 12.2503 7.39769 12.7289 7.98578 12.7289H17.2302ZM36.6222 12.7289C37.2103 12.7289 37.6889 12.2503 37.6889 11.6622V6.82667C37.6889 6.23858 37.2103 5.76 36.6222 5.76H27.3778C26.7897 5.76 26.3111 6.23858 26.3111 6.82667V11.6622C26.3111 12.2503 26.7897 12.7289 27.3778 12.7289H36.6222ZM56.0142 12.7289C56.603 12.7289 57.0809 12.2503 57.0809 11.6622V6.82667C57.0809 6.23858 56.603 5.76 56.0142 5.76H46.7698C46.1824 5.76 45.7031 6.23858 45.7031 6.82667V11.6622C45.7031 12.2503 46.1824 12.7289 46.7698 12.7289H56.0142ZM5.68889 61.8667C2.56 61.8667 0 59.3067 0 56.1778V22.4H64V56.1778C64 59.3067 61.44 61.8667 58.3111 61.8667H5.68889ZM26.5202 29.9164C24.7673 28.9422 23.3323 29.7856 23.3323 31.7916V48.5639C23.3323 50.5714 24.7666 51.4133 26.5202 50.4391L41.1669 42.3033C43.2697 41.1342 43.2697 39.222 41.1669 38.053L26.5202 29.9164Z",
            fill: "",
          })
        );
      }
      function y(e) {
        const { className: t } = e,
          a = Object(n.c)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object.assign(
            {
              className: t,
              width: "2",
              height: "52",
              viewBox: "0 0 2 52",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            a
          ),
          i.a.createElement("path", { d: "M1 52V0.5", stroke: "#605A5A" })
        );
      }
      function w(e) {
        const { className: t } = e,
          a = Object(n.c)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object.assign(
            {
              className: t,
              width: "64",
              height: "64",
              viewBox: "0 0 64 64",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            a
          ),
          i.a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 1.5H56C59.5899 1.5 62.5 4.41015 62.5 8V56C62.5 59.5899 59.5899 62.5 56 62.5H8C4.41015 62.5 1.5 59.5899 1.5 56V8C1.5 4.41015 4.41015 1.5 8 1.5ZM0 8C0 3.58172 3.58172 0 8 0H56C60.4183 0 64 3.58172 64 8V56C64 60.4183 60.4183 64 56 64H8C3.58172 64 0 60.4183 0 56V8ZM49.6909 30.0352C45.9397 30.0352 42.8486 27.2093 42.4301 23.5703H7.5V21.8809H42.4302C42.8491 18.2423 45.94 15.417 49.6909 15.417C53.7277 15.417 57 18.6894 57 22.7261C57 26.7628 53.7277 30.0352 49.6909 30.0352ZM29.9517 40.75H57V42.4395H29.9518C29.5332 46.0785 26.4421 48.9043 22.6909 48.9043C18.9398 48.9043 15.8486 46.0785 15.4301 42.4395H8.31592V40.75H15.4302C15.8492 37.1115 18.9401 34.2861 22.6909 34.2861C26.4417 34.2861 29.5327 37.1115 29.9517 40.75ZM49.6909 28.0352C52.623 28.0352 55 25.6582 55 22.7261C55 19.7939 52.623 17.417 49.6909 17.417C46.7588 17.417 44.3818 19.7939 44.3818 22.7261C44.3818 25.6582 46.7588 28.0352 49.6909 28.0352ZM28 41.5952C28 44.5273 25.623 46.9043 22.6909 46.9043C19.7588 46.9043 17.3818 44.5273 17.3818 41.5952C17.3818 38.6631 19.7588 36.2861 22.6909 36.2861C25.623 36.2861 28 38.6631 28 41.5952Z",
            fill: "",
          })
        );
      }
      function M(e) {
        const { className: t } = e,
          a = Object(n.c)(e, ["className"]);
        return i.a.createElement(
          "svg",
          Object.assign(
            {
              className: t,
              width: "22",
              height: "22",
              viewBox: "0 0 22 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            a
          ),
          i.a.createElement("path", { d: "M21 1L1 21", strokeWidth: "2" }),
          i.a.createElement("path", {
            d: "M0.999999 1L20 21",
            strokeWidth: "2",
          })
        );
      }
      function E(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M29.14 15.868C30.748 15.868 32.128 16.144 33.28 16.696C34.456 17.224 35.356 17.968 35.98 18.928C36.604 19.864 36.916 20.932 36.916 22.132C36.916 22.948 36.772 23.68 36.484 24.328C36.196 24.952 35.848 25.492 35.44 25.948C35.032 26.38 34.468 26.932 33.748 27.604C32.956 28.3 32.308 28.924 31.804 29.476C31.3 30.028 30.868 30.724 30.508 31.564C30.172 32.38 30.004 33.34 30.004 34.444H27.088C27.088 33.004 27.268 31.78 27.628 30.772C28.012 29.764 28.468 28.96 28.996 28.36C29.548 27.736 30.232 27.076 31.048 26.38C31.888 25.636 32.5 24.988 32.884 24.436C33.292 23.884 33.496 23.212 33.496 22.42C33.496 21.268 33.064 20.356 32.2 19.684C31.336 19.012 30.16 18.676 28.672 18.676C26.608 18.676 24.736 19.336 23.056 20.656L21.76 18.244C22.696 17.524 23.8 16.948 25.072 16.516C26.368 16.084 27.724 15.868 29.14 15.868ZM28.564 37.288C29.26 37.288 29.812 37.504 30.22 37.936C30.628 38.344 30.832 38.908 30.832 39.628C30.832 40.348 30.628 40.912 30.22 41.32C29.812 41.728 29.26 41.932 28.564 41.932C27.892 41.932 27.352 41.728 26.944 41.32C26.536 40.912 26.332 40.348 26.332 39.628C26.332 38.908 26.536 38.344 26.944 37.936C27.352 37.504 27.892 37.288 28.564 37.288Z",
            fill: "",
          })
        );
      }
      function v(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M48.3765 33.45C47.1427 38.7688 44.1478 43.5146 39.8778 46.9174C35.6078 50.3201 30.3132 52.1801 24.8531 52.1956C23.0011 52.1943 21.1552 51.9821 19.3511 51.5633C14.4369 50.4243 10.0013 47.7787 6.66379 43.9961C3.32632 40.2135 1.25375 35.4829 0.735641 30.4651C0.708708 30.2012 0.787709 29.9374 0.955263 29.7318C1.12282 29.5261 1.3652 29.3955 1.62909 29.3685C1.89298 29.3416 2.15676 29.4206 2.36241 29.5882C2.56805 29.7557 2.69871 29.9981 2.72564 30.262C3.1115 34.01 4.44505 37.5981 6.60068 40.6883C8.75631 43.7786 11.6631 46.2693 15.0472 47.9258C18.4313 49.5824 22.1814 50.3503 25.9443 50.1571C29.7071 49.964 33.3589 48.8163 36.5556 46.822C39.0282 45.2791 41.1726 43.2644 42.8665 40.8927C44.5604 38.5211 45.7706 35.8391 46.428 32.9997C47.0854 30.1604 47.1771 27.2194 46.6978 24.3447C46.2186 21.4699 45.1779 18.7177 43.635 16.2451C42.0921 13.7726 40.0774 11.6282 37.7057 9.93425C35.3341 8.24035 32.6521 7.03016 29.8127 6.37279C24.0785 5.04515 18.0517 6.04982 13.0581 9.16578L8.53564 11.9879L17.0203 12.8514C17.2749 12.8779 17.5096 13.0011 17.6761 13.1955C17.8426 13.3899 17.9282 13.6407 17.9153 13.8964C17.9024 14.152 17.792 14.3929 17.6068 14.5696C17.4216 14.7463 17.1757 14.8452 16.9197 14.846C16.8855 14.8461 16.8512 14.8443 16.8171 14.8406L5.42564 13.6814C5.40474 13.6793 5.38834 13.6669 5.36784 13.6635C5.32663 13.6572 5.28587 13.6482 5.24584 13.6366C5.22414 13.6302 5.20214 13.6328 5.18054 13.6248C5.15644 13.6159 5.14054 13.5965 5.11764 13.586C5.03876 13.5541 4.96583 13.5091 4.90194 13.4529C4.86699 13.4246 4.83401 13.394 4.80324 13.3612C4.77384 13.3299 4.74658 13.2967 4.72164 13.2618C4.70914 13.2442 4.69014 13.2346 4.67864 13.2161C4.66714 13.1976 4.66684 13.1761 4.65664 13.1575C4.63643 13.12 4.6187 13.0812 4.60354 13.0414C4.57364 12.9592 4.55279 12.8741 4.54134 12.7874C4.53787 12.7449 4.5372 12.7022 4.53934 12.6597C4.53994 12.6343 4.52934 12.6114 4.53214 12.5857C4.53434 12.5636 4.54714 12.5457 4.55074 12.5245C4.55755 12.4833 4.56704 12.4426 4.57914 12.4026C4.58524 12.382 4.58124 12.3611 4.58914 12.3406L8.55334 1.59938C8.64516 1.35049 8.83209 1.14827 9.07301 1.0372C9.1923 0.982204 9.32125 0.951243 9.45251 0.946084C9.58377 0.940926 9.71475 0.96167 9.83799 1.00713C9.96123 1.0526 10.0743 1.12189 10.1708 1.21105C10.2672 1.30022 10.3452 1.40751 10.4002 1.5268C10.4552 1.64609 10.4861 1.77505 10.4913 1.9063C10.4964 2.03756 10.4757 2.16854 10.4302 2.29178L7.47744 10.2918L11.9995 7.46998C16.0588 4.93676 20.7781 3.66416 25.5607 3.81312C30.3433 3.96208 34.9742 5.52591 38.868 8.30684C42.7618 11.0878 45.7434 14.9609 47.436 19.4364C49.1285 23.912 49.4558 28.7889 48.3765 33.4505V33.45ZM14.7565 39.346L25.4126 28.6897C25.6002 28.5022 25.7056 28.2479 25.7056 27.9827V17.0784C25.7056 16.8132 25.6003 16.5588 25.4127 16.3713C25.2252 16.1837 24.9709 16.0784 24.7056 16.0784C24.4404 16.0784 24.1861 16.1837 23.9985 16.3713C23.811 16.5588 23.7056 16.8132 23.7056 17.0784V27.5684L13.3423 37.9319C13.2475 38.0243 13.1721 38.1346 13.1202 38.2565C13.0684 38.3783 13.0413 38.5092 13.0404 38.6416C13.0396 38.7739 13.0651 38.9052 13.1153 39.0276C13.1656 39.1501 13.2397 39.2614 13.3333 39.355C13.4269 39.4486 13.5382 39.5227 13.6607 39.573C13.7831 39.6233 13.9144 39.6487 14.0468 39.6479C14.1792 39.647 14.3101 39.6199 14.4319 39.5681C14.5537 39.5163 14.664 39.4408 14.7564 39.346H14.7565Z",
            fill: "",
          })
        );
      }
      function N(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M36.4525 0.983032C34.3364 0.983032 32.2684 1.65634 30.5371 2.90676C30.4409 2.95486 29.9599 3.3396 29.9599 3.38769L23.7078 8.48558L17.5038 3.43579C17.3595 3.3396 16.3976 2.57011 16.1091 2.42583C14.5701 1.51206 12.7426 1.03113 10.915 1.03113C5.33619 1.03113 0.767334 5.59999 0.767334 11.1788C0.767334 16.7576 5.33619 21.3265 10.915 21.3265C13.0311 21.3265 15.0991 20.6532 16.8305 19.4028C16.9267 19.3547 17.4076 18.9699 17.4557 18.9218L23.7078 13.8239L29.9119 18.8737C30.0561 18.9699 31.0661 19.7394 31.3066 19.8837C32.8455 20.7975 34.6731 21.2784 36.5006 21.2784C42.0795 21.2784 46.6483 16.7095 46.6483 11.1307C46.6483 5.55189 42.0795 0.983032 36.4525 0.983032ZM14.4739 15.94C13.4159 16.7095 12.2135 17.1424 10.915 17.1424C7.64467 17.1424 4.95145 14.4491 4.95145 11.1788C4.95145 7.90846 7.64467 5.21524 10.915 5.21524C11.9731 5.21524 13.0311 5.5038 13.9449 6.03282C14.1373 6.12901 14.7144 6.56185 14.8106 6.65804L20.3894 11.1788C20.3894 11.1788 14.522 15.8919 14.4739 15.94ZM36.4525 17.1424C35.3945 17.1424 34.3364 16.8538 33.4227 16.3248C33.2303 16.2286 32.6532 15.7958 32.557 15.6996L26.9782 11.1788L32.8455 6.41757C33.9036 5.64808 35.1059 5.21524 36.4044 5.21524C39.6748 5.21524 42.368 7.90846 42.368 11.1788C42.368 14.4491 39.771 17.1424 36.4525 17.1424Z",
            fill: "",
          })
        );
      }
      function j(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M24.4232 4.36344C22.5002 2.44044 20.0502 1.13086 17.383 0.600287C14.7157 0.0697194 11.9511 0.342 9.43855 1.3827C6.92606 2.42339 4.77858 4.18576 3.2677 6.44695C1.75682 8.70813 0.950394 11.3666 0.950394 14.0861C0.950394 16.8056 1.75682 19.464 3.2677 21.7252C4.77858 23.9864 6.92606 25.7487 9.43855 26.7894C11.9511 27.8301 14.7157 28.1024 17.383 27.5718C20.0502 27.0413 22.5002 25.7317 24.4232 23.8087C25.7042 22.5343 26.7208 21.0193 27.4145 19.3507C28.1082 17.6822 28.4653 15.893 28.4653 14.0861C28.4653 12.2791 28.1082 10.4899 27.4145 8.82138C26.7208 7.15284 25.7042 5.63784 24.4232 4.36344ZM16.5334 21.3914H12.865V12.3164H16.5334V21.3914ZM14.6992 10.7874C14.3015 10.7874 13.9127 10.6695 13.5821 10.4485C13.2514 10.2274 12.9938 9.91333 12.8417 9.54584C12.6896 9.17835 12.65 8.77402 12.7278 8.38399C12.8056 7.99397 12.9973 7.63578 13.2787 7.35475C13.5601 7.07373 13.9186 6.88248 14.3087 6.80523C14.6988 6.72797 15.1031 6.76818 15.4704 6.92075C15.8377 7.07332 16.1514 7.33141 16.372 7.66235C16.5926 7.9933 16.71 8.38223 16.7094 8.77994C16.7094 9.0438 16.6574 9.30507 16.5564 9.54881C16.4553 9.79255 16.3072 10.014 16.1205 10.2004C15.9338 10.3869 15.7122 10.5347 15.4683 10.6354C15.2244 10.7361 14.9631 10.7878 14.6992 10.7874Z",
            fill: "",
          })
        );
      }
      function S(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M30.4126 5.84583C28.4532 5.77501 26.5883 4.98584 25.1733 3.62868C22.883 1.43206 19.2764 1.40456 16.9529 3.566C15.5173 4.90142 13.6406 5.66206 11.6804 5.70299C8.50765 5.76924 5.93799 8.30001 5.82337 11.4714C5.75255 13.4308 4.96338 15.2956 3.60622 16.7107C1.4096 19.001 1.3821 22.6075 3.54354 24.9311C4.87896 26.3667 5.6396 28.2433 5.68053 30.2036C5.74678 33.3763 8.27755 35.946 11.4489 36.0606C13.4083 36.1314 15.2732 36.9206 16.6882 38.2778C18.9785 40.4744 22.5851 40.5019 24.9086 38.3404C26.3442 37.005 28.2209 36.2444 30.1811 36.2035C33.3539 36.1372 35.9235 33.6064 36.0382 30.4351C36.109 28.4757 36.8981 26.6108 38.2553 25.1958C40.4519 22.9055 40.4794 19.2989 38.318 16.9754C36.9826 15.5398 36.2219 13.6631 36.181 11.7029C36.1147 8.53011 33.584 5.96045 30.4126 5.84583ZM37.1808 11.682C37.1035 7.9792 34.1499 4.98025 30.4487 4.84648C28.7347 4.78453 27.1033 4.09418 25.8655 2.90697C23.1926 0.343378 18.9835 0.311283 16.2718 2.83381C15.016 4.00202 13.3743 4.6674 11.6595 4.70321C7.95674 4.78052 4.95779 7.73408 4.82402 11.4352C4.76207 13.1493 4.07172 14.7806 2.88451 16.0185C0.320917 18.6914 0.288821 22.9005 2.81135 25.6122C3.97955 26.868 4.64494 28.5097 4.68075 30.2245C4.75807 33.9272 7.71162 36.9262 11.4128 37.06C13.1268 37.1219 14.7582 37.8123 15.996 38.9995C18.669 41.5631 22.878 41.5952 25.5897 39.0726C26.8455 37.9044 28.4872 37.239 30.202 37.2032C33.9048 37.1259 36.9037 34.1724 37.0375 30.4712C37.0995 28.7572 37.7898 27.1258 38.977 25.888C41.5406 23.215 41.5727 19.006 39.0502 16.2943C37.882 15.0384 37.2166 13.3968 37.1808 11.682ZM31.4863 41.2401C31.4867 41.2404 31.487 41.2407 31.1669 41.6248L31.487 41.2407L31.6669 41.3906V41.6248V62.5728V63.4683L30.9046 62.9985L20.9309 56.8517L10.9573 62.9985L10.1949 63.4683V62.5728V41.6248V41.3555L10.4198 41.2073L10.6949 41.6248C10.4198 41.2073 10.42 41.2071 10.4203 41.2069L10.4209 41.2065L10.4222 41.2057L10.425 41.2039L10.4321 41.1993L10.4518 41.1873C10.4674 41.1779 10.4879 41.1661 10.5133 41.1524C10.5641 41.125 10.6344 41.0902 10.7241 41.0527C10.9034 40.9778 11.1598 40.8927 11.4906 40.8367C12.1557 40.724 13.1039 40.7318 14.3111 41.1525C14.7935 41.3206 15.3635 41.6156 15.9507 41.9446C16.2911 42.1353 16.6562 42.3485 17.0236 42.563L17.024 42.5632L17.0248 42.5637C17.2873 42.717 17.551 42.871 17.8076 43.0179C18.4375 43.3784 19.0498 43.7114 19.6033 43.955C20.1687 44.2038 20.6187 44.3343 20.9375 44.3385C21.205 44.3421 21.6162 44.2205 22.1636 43.9649C22.6946 43.7169 23.2892 43.3749 23.9047 43.0052C24.1025 42.8864 24.3034 42.7642 24.5044 42.642L24.5055 42.6413L24.5067 42.6406L24.5067 42.6405L24.5069 42.6405C24.9206 42.3888 25.3344 42.137 25.7213 41.9151C26.2933 41.587 26.855 41.2951 27.3286 41.1477C28.7347 40.7101 29.7388 40.6983 30.4172 40.8191C30.7557 40.8794 31.0083 40.9719 31.1846 41.0565C31.2726 41.0987 31.3409 41.1387 31.3909 41.1712C31.4159 41.1874 31.4363 41.2018 31.4523 41.2136C31.4603 41.2195 31.4671 41.2248 31.4729 41.2293L31.4808 41.2356L31.4841 41.2383L31.4856 41.2395L31.4863 41.2401ZM11.1949 41.9422V61.6774L20.6686 55.8387L20.9309 55.6771L21.1932 55.8387L30.6669 61.6774V41.9208C30.5682 41.8813 30.4282 41.8368 30.242 41.8037C29.7472 41.7156 28.9065 41.704 27.6258 42.1025C27.2665 42.2144 26.7877 42.4563 26.2189 42.7825C25.8428 42.9982 25.4485 43.2381 25.0417 43.4856L25.0415 43.4858L25.0399 43.4867C24.836 43.6108 24.629 43.7367 24.4195 43.8625C23.8009 44.234 23.1684 44.5994 22.5866 44.871C22.0212 45.135 21.4338 45.3452 20.9243 45.3385C20.3958 45.3315 19.7928 45.1309 19.2005 44.8703C18.5965 44.6045 17.9466 44.2496 17.3108 43.8857C17.0355 43.7281 16.7669 43.5712 16.504 43.4176C16.1468 43.209 15.8002 43.0066 15.4619 42.817C14.8778 42.4897 14.3743 42.2334 13.9821 42.0968C12.9316 41.7307 12.1539 41.7385 11.6576 41.8226C11.4625 41.8557 11.308 41.901 11.1949 41.9422ZM23.7901 8.68637C24.8582 9.71081 26.2659 10.3065 27.7449 10.36C29.879 10.4371 31.582 12.1663 31.6266 14.3013C31.6575 15.781 32.2316 17.1975 33.2397 18.2812C34.6941 19.8447 34.6756 22.2717 33.1975 23.8129C32.173 24.881 31.5774 26.2887 31.5239 27.7677C31.4468 29.9018 29.7176 31.6048 27.5826 31.6494C26.1029 31.6803 24.6863 32.2544 23.6027 33.2625C22.0391 34.7169 19.6122 34.6984 18.071 33.2203C17.0028 32.1958 15.5952 31.6002 14.1162 31.5467C11.9821 31.4696 10.2791 29.7404 10.2345 27.6054C10.2036 26.1257 9.62942 24.7091 8.62139 23.6255C7.16691 22.0619 7.18542 19.635 8.66357 18.0938C9.68801 17.0256 10.2837 15.618 10.3372 14.1389C10.4143 12.0049 12.1435 10.3019 14.2785 10.2573C15.7582 10.2264 17.1747 9.65222 18.2584 8.64419C19.8219 7.18971 22.2489 7.20821 23.7901 8.68637ZM27.781 9.36061C30.4449 9.45689 32.5707 11.6154 32.6264 14.2804C32.6521 15.5146 33.131 16.6962 33.9719 17.6001C35.7874 19.5518 35.7643 22.5812 33.9192 24.5051C33.0647 25.396 32.5678 26.5702 32.5232 27.8038C32.427 30.4677 30.2685 32.5935 27.6034 32.6492C26.3692 32.6749 25.1876 33.1538 24.2838 33.9946C22.332 35.8102 19.3026 35.7871 17.3788 33.942C16.4879 33.0875 15.3137 32.5906 14.08 32.546C11.4161 32.4498 9.29034 30.2913 9.23469 27.6262C9.20892 26.392 8.73001 25.2104 7.88921 24.3066C6.07363 22.3548 6.09673 19.3254 7.94186 17.4016C8.79635 16.5107 9.29322 15.3365 9.33781 14.1028C9.43409 11.4389 11.5926 9.31314 14.2576 9.25749C15.4918 9.23172 16.6734 8.75281 17.5773 7.912C19.529 6.09643 22.5584 6.11953 24.4823 7.96466C25.3732 8.81915 26.5474 9.31602 27.781 9.36061Z",
            fill: "none",
          })
        );
      }
      function O(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M47.7642 5.46737H43.3958V3.44632C43.3958 0.953685 42.3747 0 39.9495 0C37.4568 0 36.5032 1.02105 36.5032 3.44632V5.46737H17.5937V3.44632C17.5937 0.953685 16.5726 0 14.1474 0C11.6547 0 10.7011 1.02105 10.7011 3.44632V5.46737H6.33263C2.82947 5.46737 0 8.29684 0 11.8V56.6674C0 60.1705 2.82947 63 6.33263 63H47.7642C51.2674 63 54.0968 60.1705 54.0968 56.6674V11.8C54.0968 8.29684 51.2674 5.46737 47.7642 5.46737ZM1.62737 50.0758C2.62737 51.5 3.91789 52.2884 5.33263 52.2884H48.7642C50.1116 52.2884 51.1274 51.5 52.4021 50.1432V51.3453C52.4021 53.3663 50.7853 55.9832 48.7642 55.9832H5.33263C3.31158 55.9832 1.62737 53.3663 1.62737 51.3453V50.0758ZM52.4021 45.8884C52.4021 47.9095 50.7853 50.5263 48.7642 50.5263H5.33263C3.31158 50.5263 1.62737 47.9095 1.62737 45.8884V17.7958H52.4021V45.8884ZM38.1305 3.44632C38.1305 2.43579 38.9389 1.69474 39.8821 1.69474C40.8253 1.69474 41.6337 2.50316 41.6337 3.44632V6.62316C41.6337 7.63368 40.8253 8.37474 39.8821 8.37474C38.9389 8.37474 38.1305 7.56632 38.1305 6.62316V3.44632ZM12.3958 3.44632C12.3958 2.43579 13.2042 1.69474 14.1474 1.69474C15.0905 1.69474 15.8989 2.50316 15.8989 3.44632V6.62316C15.8989 7.63368 15.0905 8.37474 14.1474 8.37474C13.2042 8.37474 12.3958 7.56632 12.3958 6.62316V3.44632ZM5.33263 7.16211H10.7684C11.0379 9.38526 11.9242 10.1368 14.2147 10.1368C16.5053 10.1368 17.3916 9.38526 17.6611 7.16211H36.5705C36.84 9.38526 37.7263 10.1368 40.0168 10.1368C42.3074 10.1368 43.1937 9.38526 43.4632 7.16211H48.8989C50.92 7.16211 52.5368 9.77895 52.5368 11.8V16.1011H1.62737V11.8C1.62737 9.77895 3.24421 7.16211 5.33263 7.16211ZM48.7642 61.3053H6.33263C4.31158 61.3053 1.62737 58.6884 1.62737 56.6674V55.4653C2.62737 57.6779 4.91789 57.6779 6.33263 57.6779H48.7642C50.1116 57.6779 51.1274 57.5 52.4021 55.5326V56.7347C52.4021 58.6884 50.7853 61.3053 48.7642 61.3053Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M10.7159 34.7325H10.918C12.0632 34.7325 13.0064 33.7893 13.0064 32.644V32.4419C13.0064 31.2967 12.0632 30.3535 10.918 30.3535H10.7159C9.5706 30.3535 8.62744 31.2967 8.62744 32.4419V32.644C8.62744 33.8567 9.5706 34.7325 10.7159 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M19.0694 34.7325H19.2715C20.4167 34.7325 21.3599 33.7893 21.3599 32.644V32.4419C21.3599 31.2967 20.4167 30.3535 19.2715 30.3535H19.0694C17.9241 30.3535 16.981 31.2967 16.981 32.4419V32.644C16.981 33.8567 17.9241 34.7325 19.0694 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M27.4234 34.7325H27.6255C28.7708 34.7325 29.7139 33.7893 29.7139 32.644V32.4419C29.7139 31.2967 28.7708 30.3535 27.6255 30.3535H27.4234C26.2781 30.3535 25.335 31.2967 25.335 32.4419V32.644C25.335 33.8567 26.2781 34.7325 27.4234 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M10.7159 26.3789H10.918C12.0632 26.3789 13.0064 25.4358 13.0064 24.2905V24.0884C13.0064 22.9432 12.0632 22 10.918 22H10.7159C9.5706 22 8.62744 22.9432 8.62744 24.0884V24.2905C8.62744 25.4358 9.5706 26.3789 10.7159 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M19.0694 26.3789H19.2715C20.4167 26.3789 21.3599 25.4358 21.3599 24.2905V24.0884C21.3599 22.9432 20.4167 22 19.2715 22H19.0694C17.9241 22 16.981 22.9432 16.981 24.0884V24.2905C16.981 25.4358 17.9241 26.3789 19.0694 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M27.4234 26.3789H27.6255C28.7708 26.3789 29.7139 25.4358 29.7139 24.2905V24.0884C29.7139 22.9432 28.7708 22 27.6255 22H27.4234C26.2781 22 25.335 22.9432 25.335 24.0884V24.2905C25.335 25.4358 26.2781 26.3789 27.4234 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M35.7774 34.7325H35.9795C37.1248 34.7325 38.0679 33.7893 38.0679 32.644V32.4419C38.0679 31.2967 37.1248 30.3535 35.9795 30.3535H35.7774C34.6321 30.3535 33.689 31.2967 33.689 32.4419V32.644C33.689 33.8567 34.6321 34.7325 35.7774 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M44.1309 34.7325H44.333C45.4783 34.7325 46.4214 33.7893 46.4214 32.644V32.4419C46.4214 31.2967 45.4783 30.3535 44.333 30.3535H44.1309C42.9856 30.3535 42.0425 31.2967 42.0425 32.4419V32.644C42.0425 33.8567 42.9856 34.7325 44.1309 34.7325Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M35.7774 26.3789H35.9795C37.1248 26.3789 38.0679 25.4358 38.0679 24.2905V24.0884C38.0679 22.9432 37.1248 22 35.9795 22H35.7774C34.6321 22 33.689 22.9432 33.689 24.0884V24.2905C33.689 25.4358 34.6321 26.3789 35.7774 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M44.1309 26.3789H44.333C45.4783 26.3789 46.4214 25.4358 46.4214 24.2905V24.0884C46.4214 22.9432 45.4783 22 44.333 22H44.1309C42.9856 22 42.0425 22.9432 42.0425 24.0884V24.2905C42.0425 25.4358 42.9856 26.3789 44.1309 26.3789Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M10.7159 43.1534H10.918C12.0632 43.1534 13.0064 42.2102 13.0064 41.0649V40.8628C13.0064 39.7176 12.0632 38.7744 10.918 38.7744H10.7159C9.5706 38.7744 8.62744 39.7176 8.62744 40.8628V41.0649C8.62744 42.2102 9.5706 43.1534 10.7159 43.1534Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M19.0694 43.1534H19.2715C20.4167 43.1534 21.3599 42.2102 21.3599 41.0649V40.8628C21.3599 39.7176 20.4167 38.7744 19.2715 38.7744H19.0694C17.9241 38.7744 16.981 39.7176 16.981 40.8628V41.0649C16.981 42.2102 17.9241 43.1534 19.0694 43.1534Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M27.4234 43.1534H27.6255C28.7708 43.1534 29.7139 42.2102 29.7139 41.0649V40.8628C29.7139 39.7176 28.7708 38.7744 27.6255 38.7744H27.4234C26.2781 38.7744 25.335 39.7176 25.335 40.8628V41.0649C25.335 42.2102 26.2781 43.1534 27.4234 43.1534Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M35.7774 43.1534H35.9795C37.1248 43.1534 38.0679 42.2102 38.0679 41.0649V40.8628C38.0679 39.7176 37.1248 38.7744 35.9795 38.7744H35.7774C34.6321 38.7744 33.689 39.7176 33.689 40.8628V41.0649C33.689 42.2102 34.6321 43.1534 35.7774 43.1534Z",
            fill: "",
          }),
          i.a.createElement("path", {
            d: "M44.1309 43.1534H44.333C45.4783 43.1534 46.4214 42.2102 46.4214 41.0649V40.8628C46.4214 39.7176 45.4783 38.7744 44.333 38.7744H44.1309C42.9856 38.7744 42.0425 39.7176 42.0425 40.8628V41.0649C42.0425 42.2102 42.9856 43.1534 44.1309 43.1534Z",
            fill: "",
          })
        );
      }
      function A(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M57.189 51.828H11.813a1 1 0 00-1 1v4.77a1 1 0 001 1h45.376a1 1 0 001-1v-4.77a1 1 0 00-1-1zm-1 4.77H12.813v-2.77h43.376v2.77z",
          }),
          i.a.createElement("path", {
            d: "M63.189 4.402H5.813a1 1 0 00-1 1L4.81 62.598H2.46a1 1 0 100 2h64.08a1 1 0 100-2h-2.35l-.001-57.196a1 1 0 00-1-1zm-56.376 2h55.376v39.426H43.584v-5.854h-7.556l2.448-2.48a.999.999 0 00.288-.702V18.915h2.062a1 1 0 100-2h-3.508v-3.775h1.32a1 1 0 100-2h-3.584v-.917a1 1 0 10-2 0v.917H29.47a1 1 0 100 2h1.32v3.775h-3.508a1 1 0 100 2h2.061v17.875c0 .242.087.474.245.656l2.195 2.527h-6.365v5.854H6.813V6.402zm25.977 6.74h2.528v3.774H32.79v-3.775zm-1.447 5.774h1.711v14.642a1 1 0 102 0V18.916h1.71v17.465l-2.9 2.94-2.52-2.904v-17.5zm10.241 23.058v3.834H27.418v-3.834h14.166zM6.81 62.598v-14.77h55.38v14.77H6.81z",
          })
        );
      }
      function D(e) {
        const { className: t } = e;
        Object(n.c)(e, ["className"]);
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
            d: "M47.9849 0.487061L62.9734 29.8571L95.5377 35.0362L72.2368 58.367L77.3741 90.9379L47.9849 75.9871L18.5956 90.9379L23.7329 58.367L0.432037 35.0362L32.9963 29.8571L47.9849 0.487061Z",
          }),
          "  "
        );
      }
      function x(e) {
        return i.a.createElement(
          "svg",
          Object.assign(
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
            d: "M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0\r\n\t\t\t\tc16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294\r\n\t\t\t\tc-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280\r\n\t\t\t\tc74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941\r\n\t\t\t\tc-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z\r\n\t\t\t\t\tM757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0\r\n\t\t\t\tc82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0\r\n\t\t\t\tc-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647\r\n\t\t\t\tc148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059\r\n\t\t\t\tS905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z",
          })
        );
      }
      function B(e) {
        return i.a.createElement(
          "svg",
          Object.assign(
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
    d4Nf: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return s;
      }),
        a.d(t, "a", function () {
          return l;
        });
      var n = a("/Q1a"),
        r = (a("2vnA"), a("6iBs"), a("xH93")),
        i = (a("QAsS"), a("8G9o"), a("f5iL"));
      const o = "061818254b2c99ac49e6626adb128ed1282a392f",
        s = 120;
      class l {
        constructor(e) {
          (this.m_bInitialized = !1), (this.m_unAppID = e);
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
        get header_image_url() {
          return n.d.MEDIA_CDN_URL + `steam/apps/${this.m_unAppID}/header.jpg`;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, o);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, o);
        }
        get logo_url() {
          return (
            n.d.MEDIA_CDN_URL +
            `steam/apps/${this.m_unAppID}/capsule_231x87.jpg`
          );
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 4 == this.apptype || 2 == this.apptype;
        }
        BuildAppURL(e, t) {
          return e
            ? n.d.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : Object(r.a)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && 1073741824 != e.app_type()
            ? ((this.m_bInitialized = !0),
              (this.m_strName = e.display_name()),
              (this.m_strIconURL = e.icon_hash()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = e.app_type()))
            : (this.m_bInitialized = !1);
        }
        DeserializeFromCacheObject(e) {
          try {
            (this.m_strName = e.strName),
              (this.m_strIconURL = e.strIconURL),
              (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
              (this.m_eAppType = e.eAppType),
              (this.m_bInitialized = !0);
          } catch (e) {}
        }
        SerializeToCacheObject() {
          return (
            Object(i.a)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!"
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
    },
    eOCM: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/bored.png?v=valveisgoodatcaching";
    },
    eeci: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/hot_take_apng.png?v=valveisgoodatcaching";
    },
    ehaW: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return F;
      }),
        a.d(t, "e", function () {
          return U;
        }),
        a.d(t, "b", function () {
          return V;
        }),
        a.d(t, "d", function () {
          return Z;
        }),
        a.d(t, "c", function () {
          return W;
        }),
        a.d(t, "f", function () {
          return Q;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("TyAF"),
        s = a("StxQ"),
        l = a("e356"),
        c = a("Vlb1"),
        m = (a("Nr4G"), a("1udA"), a("GbHM")),
        d = a("/Q1a"),
        p = a("GXif"),
        u = a("prdU"),
        _ = a("cJ7F"),
        g = a("cOvF"),
        f = a("+aRA"),
        h = a("FKEV"),
        b = a("y0CV"),
        C = a("MLaC");
      function I(e) {
        const { className: t } = e,
          a = Object(n.c)(e, ["className"]);
        return i.a.createElement(
          "div",
          Object.assign({ className: Object(m.a)(t, C.Pulse) }, a)
        );
      }
      var y = a("2Ido"),
        w = a("vN/p"),
        M = a("mw7S");
      const E = {
        colors: {
          bodygradient: c.strDefaultBodyGradient,
          background: c.strDefaultBodyBackground,
        },
      };
      function v(e) {
        var { definition: t } = e,
          a = Object(n.c)(e, ["definition"]);
        t.community_item_data || console.log(t);
        let r = Object(M.a)(t.appid, t.community_item_data.item_image_large);
        3 == t.community_item_class &&
          (r =
            d.d.COMMUNITY_BASE_URL +
            "economy/profilebackground/items/" +
            t.appid +
            "/" +
            t.community_item_data.item_image_large +
            "?size=320x200");
        const o = [];
        t.community_item_data.animated &&
          o.push(
            i.a.createElement(g.b, {
              className: c.IconAnimated,
              key: "animated",
            })
          );
        const { icon_url: s, name: l } = h.a.GetAppInfo(t.appid),
          m = t.community_item_data.item_title
            ? t.community_item_data.item_title
            : t.community_item_data.item_name;
        return Object.assign(
          {
            cost: parseInt(t.point_cost),
            name: m,
            children: i.a.createElement("div", {
              className: c.Image,
              style: { backgroundImage: `url(${r})` },
            }),
            attributes: o,
            desc: Object(u.d)(t.community_item_class),
            appIcon: s,
            appName: l,
          },
          a
        );
      }
      const N = Object(o.a)((e) =>
          i.a.createElement(F, Object.assign({}, v(e)))
        ),
        j = Object(o.a)((e) =>
          i.a.createElement(
            G,
            Object.assign({}, v(e), { iconComponent: l.p }),
            (t) => {
              const {
                  definition: {
                    appid: a,
                    community_item_data: {
                      item_image_large: n,
                      item_image_small: r,
                    },
                  },
                } = e,
                o = t ? r : n,
                s = Object(M.a)(a, o);
              return i.a.createElement("img", {
                className: c.ImageMedium,
                src: s,
              });
            }
          )
        ),
        S = Object(o.a)((e) =>
          i.a.createElement(
            F,
            Object.assign({}, v(e), { iconComponent: l.o }),
            i.a.createElement("img", {
              className: c.ImageSmall,
              src: Object(M.a)(
                e.definition.appid,
                e.definition.community_item_data.item_image_large
              ),
            })
          )
        ),
        O = Object(o.a)((e) =>
          i.a.createElement(F, Object.assign({}, v(e), { iconComponent: l.n }))
        ),
        A = Object(o.a)((e) =>
          e.definition.community_item_data.animated
            ? i.a.createElement(D, Object.assign({}, e))
            : i.a.createElement(x, Object.assign({}, e))
        ),
        D = Object(o.a)((e) =>
          i.a.createElement(
            T,
            Object.assign({ className: c.HasAnimation }, v(e), {
              iconComponent: l.e,
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
          )
        ),
        x = Object(o.a)((e) =>
          i.a.createElement(
            F,
            Object.assign({}, v(e), {
              iconComponent: l.e,
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
          )
        ),
        B = Object(o.a)((e) =>
          i.a.createElement(
            T,
            Object.assign({}, v(e), {
              iconComponent: g.v,
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
          )
        ),
        L = Object(o.a)((e) =>
          i.a.createElement(
            G,
            Object.assign({}, v(e), { iconComponent: g.h }),
            (t) => {
              const {
                  definition: {
                    appid: a,
                    community_item_data: {
                      item_image_large: n,
                      item_image_small: r,
                    },
                  },
                } = e,
                o = t ? r : n,
                s = Object(M.a)(a, o);
              return i.a.createElement("img", {
                className: c.ImageFrames,
                src: s,
              });
            }
          )
        ),
        P = Object(o.a)((e) =>
          i.a.createElement(
            G,
            Object.assign({}, v(e), { iconComponent: g.c }),
            (t) => {
              const {
                  definition: {
                    appid: a,
                    community_item_data: {
                      item_image_large: n,
                      item_image_small: r,
                    },
                  },
                } = e,
                o = t ? r : n,
                s = Object(M.a)(a, o);
              return i.a.createElement("img", {
                className: c.ImageAnimatedAvatar,
                src: s,
              });
            }
          )
        ),
        R = Object(o.a)((e) =>
          i.a.createElement(
            F,
            Object.assign({}, v(e), {
              iconComponent: g.m,
              desc: Object(u.d)(8),
            })
          )
        ),
        k = Object(o.a)((e) =>
          i.a.createElement(
            F,
            Object.assign({}, v(e), { iconComponent: g.s }),
            i.a.createElement("img", {
              className: c.ImageKeyboard,
              src: Object(M.a)(
                e.definition.appid,
                e.definition.community_item_data.item_image_small
              ),
            })
          )
        );
      class T extends i.a.Component {
        constructor() {
          super(...arguments),
            (this.m_ref = i.a.createRef()),
            (this.state = { bVisible: !1 }),
            (this.m_playPromise = null),
            (this.m_bShouldContinuePlaying = !0);
        }
        render() {
          const e = this.props,
            { children: t, videoProps: a } = e,
            r = Object(n.c)(e, ["children", "videoProps"]);
          return i.a.createElement(
            F,
            Object.assign({}, r),
            i.a.createElement(b.a, {
              trigger: "repeated",
              onVisibilityChange: (e) => this.HandleVisibilityChange(e),
              className: c.VisibilityTracker,
            }),
            i.a.createElement(
              "video",
              Object.assign(
                {
                  playsInline: !0,
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                },
                a,
                { ref: this.m_ref }
              ),
              this.state.bVisible && t
            )
          );
        }
        HandleVisibilityChange(e) {
          this.m_ref.current &&
            (this.m_playPromise
              ? (this.m_bShouldContinuePlaying = e)
              : e
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
            this.setState({ bVisible: e });
        }
      }
      class G extends i.a.Component {
        constructor() {
          super(...arguments), (this.state = { bHover: !1 });
        }
        render() {
          const e = this.props,
            { children: t } = e,
            a = Object(n.c)(e, ["children"]);
          return i.a.createElement(
            F,
            Object.assign({}, a, {
              onMouseEnter: () => this.setState({ bHover: !0 }),
              onMouseLeave: () => this.setState({ bHover: !1 }),
            }),
            t(this.state.bHover || !0)
          );
        }
      }
      const F = (e) => {
          const {
              appName: t,
              appIcon: a,
              attributes: r,
              children: o,
              cost: l,
              iconComponent: d,
              name: p,
              desc: u,
              className: f,
              style: h,
              theme: b,
              styleOverride: C,
              strPriceOverride: I,
              itemLevel: y,
              purchaseable: w = !0,
            } = e,
            M = Object(n.c)(e, [
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
            v = d,
            N = { background: (b || E).colors.bodygradient },
            j = { background: (b || E).colors.background };
          return i.a.createElement(
            "div",
            { className: c.ItemContainer },
            i.a.createElement(
              _.a,
              Object.assign({}, M, {
                className: Object(m.a)(f, c.Item, C),
                style: j,
              }),
              i.a.createElement(
                _.b,
                { className: c.Body, style: N },
                i.a.createElement("div", { className: c.Attributes }, r),
                i.a.createElement(Y, { src: a, title: t }),
                !w &&
                  i.a.createElement(
                    "div",
                    { className: c.BodyTopRight },
                    i.a.createElement(g.k, {
                      className: c.IconPartialCheckMark,
                    }),
                    i.a.createElement(g.j, { className: c.IconCheckMark })
                  ),
                o
              ),
              i.a.createElement(
                _.c,
                { className: c.Footer },
                i.a.createElement(
                  "div",
                  { style: { flex: 1, paddingBottom: "10px" } },
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement("div", { className: c.Name }, p),
                    i.a.createElement(
                      "div",
                      { className: c.ItemTypeContainer },
                      v &&
                        i.a.createElement(v, {
                          className: c.Icon,
                          style: { fill: "" },
                        }),
                      i.a.createElement(
                        "div",
                        { className: c.Subtitle },
                        u,
                        " "
                      )
                    )
                  )
                ),
                w &&
                  i.a.createElement(
                    "div",
                    { className: c.CostRow },
                    i.a.createElement(g.k, {
                      className: c.IconPartialCheckMark,
                    }),
                    i.a.createElement(g.j, { className: c.IconCheckMark }),
                    i.a.createElement(
                      "div",
                      { className: c.Cost },
                      null != I ? I : i.a.createElement(s.a, { amount: l })
                    )
                  )
              ),
              i.a.createElement("div", { className: c.ItemContainerShine })
            )
          );
        },
        z = (e) => {
          const {
              appName: t,
              appIcon: a,
              attributes: r,
              children: o,
              cost: l,
              iconComponent: d,
              name: p,
              desc: u,
              className: f,
              style: h,
              theme: b,
              styleOverride: C,
              strPriceOverride: I,
              itemLevel: y,
            } = e,
            w = Object(n.c)(e, [
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
            ]),
            M = d,
            v = { background: (b || E).colors.bodygradient },
            N = { background: (b || E).colors.background };
          return i.a.createElement(
            "div",
            { className: c.ItemWideContainer },
            i.a.createElement(
              _.a,
              Object.assign({}, w, {
                className: Object(m.a)(f, c.Item, C),
                style: N,
              }),
              i.a.createElement(
                _.b,
                { className: c.Body, style: v },
                i.a.createElement("div", { className: c.Attributes }, r),
                i.a.createElement(Y, { src: a, title: t }),
                o
              ),
              i.a.createElement(
                _.c,
                { className: c.Footer },
                i.a.createElement(
                  "div",
                  { style: { flex: 1 } },
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement("div", { className: c.Name }, p),
                    i.a.createElement(
                      "div",
                      { className: c.ItemTypeContainer },
                      M &&
                        i.a.createElement(M, {
                          className: c.Icon,
                          style: { fill: "" },
                        }),
                      i.a.createElement(
                        "div",
                        { className: c.Subtitle },
                        u,
                        " "
                      )
                    )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: c.CostRow },
                  i.a.createElement(g.k, { className: c.IconPartialCheckMark }),
                  i.a.createElement(g.j, { className: c.IconCheckMark }),
                  i.a.createElement(
                    "div",
                    { className: c.Cost },
                    null != I ? I : i.a.createElement(s.a, { amount: l })
                  )
                )
              ),
              i.a.createElement("div", { className: c.ItemContainerShine })
            )
          );
        },
        H = { 11: j, 4: S, 12: O, 3: A, 13: B, 8: R, 14: L, 15: P, 16: k },
        U = Object(o.a)((e) => {
          var t;
          const { className: a } = e,
            r = Object(n.c)(e, ["className"]),
            o = u.b.Get().BRewardOwnedByUser(e.definition),
            s = Object(m.a)(a, o && c.OwnedItem);
          if (5 == e.definition.type || 6 == e.definition.type)
            return i.a.createElement(
              f.a,
              { fallback: null },
              i.a.createElement(
                y.a,
                Object.assign({}, r, { className: s, onClick: e.onClick })
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
              f.a,
              { fallback: null },
              i.a.createElement(
                w.b,
                Object.assign({}, r, { className: s, onClick: e.onClick })
              )
            );
          const l = H[e.definition.community_item_class];
          return l
            ? i.a.createElement(
                f.a,
                { fallback: null },
                i.a.createElement(
                  l,
                  Object.assign({}, r, { className: s, onClick: e.onClick })
                )
              )
            : i.a.createElement(
                f.a,
                { fallback: null },
                i.a.createElement(
                  N,
                  Object.assign({}, r, { className: s, onClick: e.onClick })
                )
              );
        });
      function V(e) {
        return a("JeMz")(`./icon_showcase_${e}.svg`);
      }
      const Z = (e) =>
        i.a.createElement(
          z,
          Object.assign(
            {},
            (function (e) {
              var {
                  customization_type: t,
                  current_level: a,
                  point_cost: r,
                } = e,
                o = Object(n.c)(e, [
                  "customization_type",
                  "current_level",
                  "point_cost",
                ]);
              const s = V(t),
                l = Object(p.g)("#ProfileShowcases_Type_" + t),
                d = a >= u.b.Get().GetMaxProfileShowcaseUpgradeLevel(),
                _ = a > 1,
                f = Object(m.a)(
                  d && c.OwnedItem,
                  !d && _ && c.OwnedItemProgress
                );
              return Object.assign(
                {
                  cost: r,
                  name: l,
                  itemLevel: a,
                  children: i.a.createElement("img", {
                    className: c.ImageProfileShowcase,
                    src: s,
                  }),
                  desc: Object(p.g)("#ProfileShowcases_Upgrade"),
                  attributes: [],
                  className: f,
                  iconComponent: g.z,
                },
                o
              );
            })(e)
          )
        );
      const W = (e) =>
        i.a.createElement(
          z,
          Object.assign(
            {},
            (function (e) {
              var {
                  customization_type: t,
                  point_cost: a,
                  purchased_count: r,
                  current_level: o,
                } = e,
                s = Object(n.c)(e, [
                  "customization_type",
                  "point_cost",
                  "purchased_count",
                  "current_level",
                ]);
              const l = V(t),
                d = Object(p.g)("#ProfileShowcases_Type_" + t),
                _ = r >= u.b.Get().GetMaxProfileShowcaseSlots(),
                f = Object(m.a)(_ && c.OwnedItem);
              return Object.assign(
                {
                  cost: a,
                  name: d,
                  children: i.a.createElement("img", {
                    className: c.ImageProfileShowcase,
                    src: l,
                  }),
                  desc: Object(p.g)("#ProfileShowcases_AdditionalSlot"),
                  attributes: [],
                  className: f,
                  iconComponent: g.z,
                },
                s
              );
            })(e)
          )
        );
      class Y extends i.a.Component {
        constructor() {
          super(...arguments), (this.state = { bLoadComplete: !1 });
        }
        render() {
          const { src: e, title: t } = this.props,
            { bLoadComplete: a } = this.state;
          return e
            ? i.a.createElement(
                "div",
                { className: c.AppIconContainer },
                i.a.createElement("img", {
                  className: c.AppIcon,
                  src: e,
                  onLoad: () => this.setState({ bLoadComplete: !0 }),
                  style: a ? void 0 : { display: "none" },
                  title: t,
                  alt: t,
                })
              )
            : null;
        }
      }
      function Q() {
        return i.a.createElement(
          I,
          { className: c.ItemContainer },
          i.a.createElement(
            _.a,
            { className: Object(m.a)(c.Item, c.ItemSkeleton) },
            i.a.createElement(_.b, { className: c.Body }),
            i.a.createElement(
              _.c,
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
    "f+AQ": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/halloween_2020_pointspage_bg.png?v=valveisgoodatcaching";
    },
    gMmH: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return s;
      }),
        a.d(t, "b", function () {
          return l;
        }),
        a.d(t, "a", function () {
          return _;
        });
      var n = a("q1tI"),
        r = a.n(n),
        i = a("ZO3Q"),
        o = a("7VqR");
      const s = 8e3;
      var l;
      function c(e) {
        switch (e) {
          case l.Gold:
          case l.LNY2020:
            return `hsl(${51 + -16 * Math.random()}, 93%, 54%)`;
          default:
            return `hsl(${360 * Math.random()}, 100%, 40%)`;
        }
      }
      function m(e) {
        return e == l.LNY2020
          ? `hue-rotate(${360 + Object(o.b)(-30, 10)}deg)`
          : "";
      }
      !(function (e) {
        (e[(e.Default = 0)] = "Default"),
          (e[(e.Gold = 1)] = "Gold"),
          (e[(e.LNY2020 = 2)] = "LNY2020");
      })(l || (l = {}));
      const d = (e, t) => {
          const { anim: a } = Object(i.useSpring)({
            anim: 1,
            from: { anim: 0 },
            config: { duration: s },
          });
          return Object(n.useMemo)(() => {
            let n = (function (e, t) {
              const a = [];
              if (!e) return a;
              const { width: n, height: r } = e;
              for (let e = 0; e < 200; e++) {
                const e = Math.random(),
                  i = Math.random() * e,
                  o = Math.random() * i,
                  s = 4 * (Math.random() - 0.5) * Math.PI * 20,
                  d = Math.random() + 0.5,
                  p = [
                    Math.random() * r - r - 20,
                    r + 20 + Math.random() * r * d,
                  ],
                  u = d * (n <= 1e3 ? 1 : n / 1e3) * (t == l.Gold ? 2 : 1),
                  _ = (Math.random() - 0.5) * n,
                  g = (Math.random() - 0.5) * n,
                  f = [g, _ + g],
                  h = c(t),
                  b = m(t);
                a.push({
                  rotationCoefficient: s,
                  rotationRatioY: i,
                  rotationRatioX: e,
                  rotationRatioZ: o,
                  yRange: p,
                  xRange: f,
                  scale: u,
                  colorHue: h,
                  filter: b,
                });
              }
              return a;
            })(e, t);
            return {
              rgParticleStyles: n.map((e) =>
                (function (e, t, a) {
                  l.Default;
                  const {
                    rotationCoefficient: n,
                    rotationRatioY: r,
                    rotationRatioX: i,
                    rotationRatioZ: o,
                    yRange: s,
                    xRange: c,
                    scale: m,
                    colorHue: d,
                    filter: p,
                  } = e;
                  return {
                    backgroundColor: d,
                    fill: d,
                    filter: p,
                    flRandom: 0,
                    transform: t.interpolate((e) => {
                      const t = e * n * r,
                        a = e * n * i,
                        l = e * n * o,
                        d = e * (s[1] - s[0]) + s[0];
                      return `translate(${
                        e * (c[1] - c[0]) + c[0]
                      }px, ${d}px) rotateY(${t}rad) rotateX(${a}rad) rotateZ(${l}rad) scale(${m})`;
                    }),
                  };
                })(e, a)
              ),
              rgStreamerStyles: n
                .map((e) =>
                  (function (e, t, a) {
                    if (Math.random() > 0.1) return null;
                    const {
                      rotationCoefficient: n,
                      rotationRatioZ: r,
                      yRange: i,
                      xRange: o,
                      scale: s,
                      colorHue: l,
                      filter: c,
                    } = e;
                    return {
                      backgroundColor: void 0,
                      fill: l,
                      filter: c,
                      flRandom: Math.random(),
                      transform: t.interpolate((e) => {
                        const t = ((e * n) / 4) * r,
                          a = e * (i[1] - i[0]) + i[0];
                        return `translate(${
                          e * (o[1] - o[0]) + o[0]
                        }px, ${a}px) rotateZ(${t}rad) scale(${s})`;
                      }),
                    };
                  })(e, a)
                )
                .filter((e) => !!e),
            };
          }, [e, t, a]);
        },
        p = { position: "absolute", left: "50%", top: 0 },
        u = Object.assign(Object.assign({}, p), {
          width: 10,
          height: 5,
          borderWidth: 1,
          borderColor: "black",
        }),
        _ = ({ eType: e }) => {
          l.Gold, l.LNY2020;
          const [t, a] = (function () {
            const [e, t] = Object(n.useState)(null),
              a = Object(n.useCallback)((e) => {
                e &&
                  "function" == typeof e.getBoundingClientRect &&
                  t(e.getBoundingClientRect());
              }, []);
            return [e, a];
          })();
          let i,
            { rgParticleStyles: o, rgStreamerStyles: s } = d(t, e);
          switch (e) {
            case l.Gold:
              i = o.map((e, t) => r.a.createElement(f, { key: t, style: e }));
              break;
            case l.LNY2020:
              i = o.map((e, t) =>
                t % 2
                  ? r.a.createElement(g, { key: t, style: e })
                  : r.a.createElement(h, { key: t, style: e })
              );
              break;
            case l.Default:
              i = o.map((e, t) => r.a.createElement(g, { key: t, style: e }));
          }
          return r.a.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              },
              ref: a,
            },
            i,
            s.map((e, t) =>
              e.flRandom > 0.5
                ? r.a.createElement(C, { key: t, style: e })
                : r.a.createElement(b, { key: t, style: e })
            )
          );
        },
        g = ({ style: e }) =>
          r.a.createElement(i.animated.div, {
            style: Object.assign(Object.assign({}, u), e),
          }),
        f = ({ style: e }) => {
          const [t] = Object(n.useState)(Math.floor(Math.random() * I.length)),
            a = I[t];
          return r.a.createElement(a, {
            style: Object.assign(Object.assign(Object.assign({}, p), e), {
              backgroundColor: void 0,
            }),
          });
        },
        h = ({ style: e }) => {
          const [t] = Object(n.useState)(Math.floor(Math.random() * y.length)),
            a = y[t];
          return r.a.createElement(a, {
            style: Object.assign(Object.assign(Object.assign({}, p), e), {
              backgroundColor: void 0,
            }),
          });
        },
        b = ({ style: e }) =>
          r.a.createElement(
            i.animated.svg,
            {
              viewBox: "0 0 80 620",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: Object.assign({ width: 10, height: 70 }, e),
            },
            r.a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z",
              fill: e.fill,
            })
          ),
        C = ({ style: e }) =>
          r.a.createElement(
            i.animated.svg,
            {
              viewBox: "0 0 203 295",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: Object.assign({ width: 10, height: 20 }, e),
            },
            r.a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z",
              fill: e.fill,
            })
          ),
        I = [
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                viewBox: "0 0 48 102",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 5, height: 10 }, e),
              },
              r.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z",
                fill: "#F7D51E",
              })
            ),
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                viewBox: "0 0 50 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 7 }, e),
              },
              r.a.createElement("path", {
                d: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: "#C4C4C4",
              }),
              r.a.createElement("path", {
                d: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                viewBox: "0 0 68 69",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 10 }, e),
              },
              r.a.createElement("rect", {
                y: "34.6389",
                width: "48",
                height: "48",
                transform: "rotate(-45 0 34.6389)",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 10 }, e),
              },
              r.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              r.a.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              r.a.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              r.a.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                viewBox: "0 0 48 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              r.a.createElement("path", {
                d: "M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                width: "48",
                height: "35",
                viewBox: "0 0 48 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 7 }, e),
              },
              r.a.createElement("path", {
                d: "M48 0H0L24 35L48 0Z",
                fill: e.fill,
              })
            ),
        ],
        y = [
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 54 47.18",
                style: Object.assign({ width: 28, height: 28 }, e),
              },
              r.a.createElement("polygon", {
                fill: "#60000e",
                points: "10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06",
              }),
              r.a.createElement("path", {
                fill: "#f93838",
                d: "M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z",
              }),
              r.a.createElement("path", {
                fill: "#f93838",
                d: "M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z",
              })
            ),
          ({ style: e }) =>
            r.a.createElement(
              i.animated.svg,
              {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 14.5 22",
                style: Object.assign({ width: 28, height: 28 }, e),
              },
              r.a.createElement("path", {
                fill: "#fc1010",
                d: "M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z",
              }),
              r.a.createElement("path", {
                fill: "#fc1010",
                d: "M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z",
              }),
              r.a.createElement("path", {
                fill: "#fc1010",
                d: "M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z",
              }),
              r.a.createElement("path", {
                fill: "#fc1010",
                d: "M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z",
              })
            ),
        ];
    },
    gxgZ: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/game_tiles.png?v=valveisgoodatcaching";
    },
    "hq+U": function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDExOSAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNjIuNDA4IDM0LjA4MTdDNjIuNDA4IDI5Ljc2ODUgNTguODkzNiAyNi4yNTQxIDU0LjU4MDQgMjYuMjU0MUgzMy4zMzQxQzMxLjczNjcgMjYuMjU0MSAzMC40NTg3IDI0LjY1NjYgMzAuNzc4MiAyMy4wNTkyQzMwLjc3ODIgMjMuMDU5MiAzNy4zMjc4IDcuMDg0NTIgMzcuMzI3OCA1LjAwNzgxQzM3LjMyNzggMi45MzExIDM2LjUyOTEgMS40OTMzOSAzNC45MzE2IDEuMTczODlDMzMuMzM0MSAwLjg1NDM5OSAyOS44MTk3IDAuMDU1NjY2OCAyOS44MTk3IDAuMDU1NjY2OEMyOC4yMjIzIC0wLjEwNDA4IDI3LjEwNCAwLjA1NTY2NjcgMjYuMzA1MyAwLjg1NDRMMi41MDMwNSAyNC42NTY2QzEuMDY1MzQgMjYuMDk0NCAwLjI2NjYwMiAyOC4wMTEzIDAuMjY2NjAyIDMwLjA4OFY3My44NTg2QzAuMjY2NjAyIDc1LjQ1NjEgMS43MDQzMiA3Ni44OTM4IDMuMzAxNzkgNzYuODkzOEg0My4wNzg3QzQ2LjI3MzYgNzYuODkzOCA0OC41MTAxIDc0LjY1NzMgNTAuMjY3MyA3Mi4xMDE0TDYwLjk3MDMgNTcuODgzOUM2MS42MDkzIDU3LjA4NTIgNjIuNTY3OCA1NS4xNjgyIDYyLjU2NzggNTMuNTcwOFYzNC40MDEyTDYyLjQwOCAzNC4wODE3WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8cGF0aCBkPSJNNTYuMTc3NyAxMDEuOTE4QzU2LjE3NzcgMTA2LjIzMSA1OS42OTIyIDEwOS43NDYgNjQuMDA1MyAxMDkuNzQ2SDg1LjI1MTZDODYuODQ5MSAxMDkuNzQ2IDg4LjEyNzEgMTExLjM0MyA4Ny44MDc2IDExMi45NDFDODcuODA3NiAxMTIuOTQxIDgxLjI1NzkgMTI4LjkxNSA4MS4yNTc5IDEzMC45OTJDODEuMjU3OSAxMzMuMDY5IDgyLjA1NjcgMTM0LjUwNyA4My42NTQxIDEzNC44MjZDODUuMjUxNiAxMzUuMTQ2IDg4Ljc2NiAxMzUuOTQ0IDg4Ljc2NiAxMzUuOTQ0QzkwLjM2MzUgMTM2LjEwNCA5MS40ODE3IDEzNS45NDQgOTIuMjgwNSAxMzUuMTQ2TDExNS45MjMgMTExLjM0M0MxMTcuMzYxIDEwOS45MDYgMTE4LjE1OSAxMDcuOTg5IDExOC4xNTkgMTA1LjkxMlY2Mi4xNDE0QzExOC4xNTkgNjAuNTQzOSAxMTYuNzIyIDU5LjEwNjIgMTE1LjEyNCA1OS4xMDYySDc1LjY2NjhDNzIuNDcxOSA1OS4xMDYyIDcwLjIzNTQgNjEuMzQyNyA2OC40NzgyIDYzLjg5ODZMNTcuNzc1MiA3OC4xMTZDNTcuMTM2MiA3OC45MTQ4IDU2LjE3NzcgODAuODMxNyA1Ni4xNzc3IDgyLjQyOTJWMTAxLjQzOVYxMDEuOTE4WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMxLjQxNzIiIHkxPSIwIiB4Mj0iMzEuNDE3MiIgeTI9Ijc2Ljg5MzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI4Ny4xNjg2IiB5MT0iNTkuMTA2MiIgeDI9Ijg3LjE2ODYiIHkyPSIxMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
    kJAG: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/Sunglasses.gif?v=1f92a9cd5abf699264341065565389fd";
    },
    li8c: function (e, t, a) {
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
    "lo3/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return m;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("fsrB"),
        s = a("ez+p"),
        l = a("hCpY"),
        c = a("/Q1a");
      function m(e) {
        const { children: t, navTreeRef: a } = e,
          r = Object(n.c)(e, ["children", "navTreeRef"]),
          m = i.a.useRef(),
          d = Object(l.g)(m, a);
        if (c.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return i.a.createElement(
            o.b,
            Object.assign({}, r, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.a.createElement(s.a, null, t)
          );
        }
        return i.a.createElement(i.a.Fragment, null, t);
      }
    },
    mpVu: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/contributor_badge.png?v=valveisgoodatcaching";
    },
    mts6: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODMiIGhlaWdodD0iMTMwIiB2aWV3Qm94PSIwIDAgODMgMTMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTc4LjkyMjUgNy42NjMxNEg0Ny4zODI2VjUuNDczNjdDNDcuMzgyNiAyLjQ2MzE1IDQ0Ljc2NjMgMCA0MS41Njg3IDBDMzguMzcxMSAwIDM1Ljc1NDkgMi40NjMxNSAzNS43NTQ5IDUuNDczNjdWNy42NjMxNEg0LjIxNTAxQzEuODg5NDkgNy42NjMxNCAwIDkuNDQyMDkgMCAxMS42MzE2Vjc0LjcxNTdDMCA3Ni45MDUxIDEuODg5NDkgNzguNjg0MSA0LjIxNTAxIDc4LjY4NDFIMTkuNzY3TDQuNjUxMDUgMTIyLjc0N0MzLjYzMzYzIDEyNS42MjEgNS4yMzI0MyAxMjguNzY4IDguNDMwMDMgMTI5LjcyNkMxMS42Mjc2IDEzMC42ODQgMTQuODI1MiAxMjkuMDQyIDE1Ljg0MjYgMTI2LjE2OEwyMi45NjQ2IDEwNS42NDJINjAuNDYzNkw2Ny41ODU1IDEyNi4xNjhDNjguMzEyMyAxMjguNDk1IDcwLjYzNzggMTMwIDczLjEwODcgMTMwQzczLjY5IDEzMCA3NC4yNzE0IDEyOS44NjMgNzQuODUyOCAxMjkuNzI2Qzc3LjkwNTEgMTI4Ljc2OCA3OS42NDkyIDEyNS42MjEgNzguNjMxOCAxMjIuNzQ3TDYzLjIyNTIgNzguODIwOUg3OC43NzcxQzgxLjEwMjYgNzguODIwOSA4Mi45OTIxIDc3LjA0MiA4Mi45OTIxIDc0Ljg1MjVWMTEuNjMxNkM4My4xMzc1IDkuNDQyMDkgODEuMjQ4IDcuNjYzMTQgNzguOTIyNSA3LjY2MzE0Wk00OS44NTM0IDIyLjU3ODlDNTMuMTk2NCAyMi41Nzg5IDU1Ljk1NzkgMjUuMTc4OSA1NS45NTc5IDI4LjMyNjNDNTUuOTU3OSAzMS40NzM2IDUzLjE5NjQgMzQuMDczNiA0OS44NTM0IDM0LjA3MzZDNDYuNTEwNSAzNC4wNzM2IDQzLjc0ODkgMzEuNDczNiA0My43NDg5IDI4LjMyNjNDNDMuNzQ4OSAyNS4xNzg5IDQ2LjUxMDUgMjIuNTc4OSA0OS44NTM0IDIyLjU3ODlaTTI2LjU5ODIgOTQuNjk0NkwzMi4xMjEzIDc4LjY4NDFINTAuODcwOEw1Ni4zOTQgOTQuNjk0NkgyNi41OTgyWk02NS40MDU0IDYxLjE2ODNDNjQuODI0IDYxLjk4OTQgNjMuOTUxOSA2Mi41MzY3IDYyLjkzNDUgNjIuNTM2N0gyMC4zNDgzQzE5LjMzMDkgNjIuNTM2NyAxOC4zMTM1IDYxLjk4OTQgMTcuODc3NSA2MS4xNjgzQzE3LjI5NjEgNjAuMjEwNCAxNy40NDE0IDU5LjI1MjUgMTguMDIyOCA1OC40MzE1TDMyLjU1NzMgMzguMzE1N0MzMy41NzQ4IDM2LjgxMDUgMzYuMTkxIDM2LjgxMDUgMzcuMjA4NCAzOC4zMTU3TDQ1LjM0NzcgNDkuNTM2OEw0OS44NTM0IDQzLjUxNTdDNTAuODcwOCA0Mi4wMTA0IDUzLjQ4NzEgNDIuMDEwNCA1NC41MDQ1IDQzLjUxNTdMNjUuMjYgNTguNDMxNUM2NS44NDE0IDU5LjI1MjUgNjUuODQxNCA2MC4yMTA0IDY1LjQwNTQgNjEuMTY4M1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI0MS41IiB5MT0iMCIgeDI9IjQxLjUiIHkyPSIxMzAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
    mw7S: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return i;
        });
      var n = a("/Q1a");
      a("1udA"), a("Nr4G");
      function r(e, t) {
        return `${n.d.MEDIA_CDN_COMMUNITY_URL}images/items/${e}/${t}`;
      }
      function i(e) {
        switch (e.community_item_class) {
          case 15:
          case 14:
          case 11:
            return r(e.appid, e.community_item_data.item_image_small);
          case 3:
            return `${n.d.COMMUNITY_BASE_URL}economy/profilebackground/items/${e.appid}/${e.community_item_data.item_image_large}?size=320x200`;
          default:
            return r(e.appid, e.community_item_data.item_image_large);
        }
      }
    },
    n4wG: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return C;
      }),
        a.d(t, "b", function () {
          return I;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("TyAF"),
        s = a("GXif"),
        l = a("+9fn"),
        c = a("cJ7F"),
        m = a("Wilf"),
        d = a("StxQ"),
        p = a("GbHM"),
        u = a("nXE5"),
        _ = a("cOvF"),
        g = a("prdU"),
        f = a("/Q1a"),
        h = a("+j4l"),
        b = a("RV7a");
      const C = (e, t) =>
          `${f.d.MEDIA_CDN_COMMUNITY_URL}/images/items/${e}/${t}`,
        I = Object(o.a)(() => {
          const e = g.b.Get().GetSeasonalBadgeDefinition(),
            t = g.b.Get().GetUserSeasonalBadgeLevel(),
            a = e
              ? e.community_item_data.badge_data.map(
                  ({ level: a, image: n }) => ({
                    level: a,
                    imgSrc: C(e.appid, n),
                    owned: t >= a,
                    cost: g.b.Get().GetCostToLevelSeasonalBadge(a),
                  })
                )
              : [];
          return i.a.createElement(
            u.e,
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
                  title: Object(s.g)(
                    "#SeasonalBadge_Title",
                    Object(s.g)("#SeasonName_Summer")
                  ),
                  subtitle: Object(s.g)(
                    "#SeasonalBadge_Description",
                    Object(s.g)("#SeasonName_Summer")
                  ),
                },
                i.a.createElement(
                  y,
                  null,
                  a.map((t) =>
                    i.a.createElement(
                      w,
                      Object.assign({ key: t.level }, t, {
                        onClick: (a) => Object(h.e)(a, e, t.level),
                      })
                    )
                  )
                )
              )
            )
          );
        }),
        y = ({ children: e }) =>
          i.a.createElement(
            b.c,
            {
              className: m.BadgeGrid,
              verticalSpacing: "large",
              "flow-children": "grid",
            },
            e
          ),
        w = (e) => {
          const { level: t, owned: a, cost: r, imgSrc: o, className: l } = e,
            d = Object(n.c)(e, [
              "level",
              "owned",
              "cost",
              "imgSrc",
              "className",
            ]);
          return i.a.createElement(
            c.a,
            Object.assign({ className: Object(p.a)(m.Badge, l) }, d),
            i.a.createElement(
              c.b,
              null,
              i.a.createElement("img", {
                src: o,
                title: Object(s.g)("#BadgeLevel", t),
                className: m.BadgeImage,
              })
            ),
            i.a.createElement(
              c.c,
              { className: m.Footer },
              i.a.createElement(v, { owned: a, level: t }),
              i.a.createElement(
                "div",
                { className: m.Hint },
                a
                  ? i.a.createElement(M, null)
                  : i.a.createElement(E, { cost: r })
              )
            )
          );
        },
        M = () => i.a.createElement(_.j, { className: m.OwnedSticker }),
        E = ({ cost: e }) => i.a.createElement(d.a, { amount: e, size: 0.75 }),
        v = (e) => {
          const { level: t, owned: a } = e;
          return i.a.createElement(
            "div",
            { className: Object(p.a)(m.LevelMarker, a && m.Owned) },
            i.a.createElement("div", { className: m.Inner }, t)
          );
        };
    },
    nXE5: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return y;
      }),
        a.d(t, "d", function () {
          return w;
        }),
        a.d(t, "e", function () {
          return N;
        }),
        a.d(t, "b", function () {
          return S;
        }),
        a.d(t, "a", function () {
          return D;
        }),
        a.d(t, "f", function () {
          return L;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("TyAF"),
        s = a("5pqL"),
        l = a("RV7a"),
        c = a("EC67");
      class m extends i.a.Component {
        componentDidUpdate(e) {
          this.props.location.pathname !== e.location.pathname &&
            this.UpdateScroll();
        }
        componentDidMount() {
          this.UpdateScroll();
        }
        UpdateScroll() {
          const {
              scrollElement: e,
              location: { hash: t },
            } = this.props,
            a = () => e && e.scrollTo(0, 0);
          if (t) {
            const e = t.slice(1),
              n = document.getElementById(e);
            n ? n.scrollIntoView() : a();
          } else a();
        }
        render() {
          return null;
        }
      }
      const d = Object(c.j)(m);
      var p = a("GbHM"),
        u = a("/69T"),
        _ = a("cCsu"),
        g = a.n(_),
        f = a("TJrv"),
        h = a.n(f),
        b = a("f+AQ"),
        C = a.n(b),
        I = a("pSt8");
      const y = (e) => {
          var { className: t } = e,
            a = Object(n.c)(e, ["className"]);
          const r = i.a.useRef();
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              "div",
              Object.assign(
                { ref: r, className: Object(p.a)(s.StandardRoot, t) },
                a
              )
            ),
            i.a.createElement(d, { scrollElement: r.current })
          );
        },
        w = (e) => {
          var { className: t } = e,
            a = Object(n.c)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object.assign(
              { className: Object(p.a)(s.StandardBackground, t) },
              a
            )
          );
        },
        M = ({ children: e }) =>
          i.a.createElement(y, { className: s.ParallaxRoot }, e),
        E = ({ children: e, src: t, className: a }) =>
          i.a.createElement(
            i.a.Fragment,
            null,
            e,
            i.a.createElement("div", {
              className: Object(p.a)(s.ParallaxBackground, a),
              style: { backgroundImage: `url(${t})` },
            })
          );
      function v(e) {
        const t = Object(l.j)(["xxsmall", "small", "xxlarge"]),
          a = Object(l.l)(t);
        return i.a.createElement(
          u.b,
          { spacing: { horizontal: a } },
          i.a.createElement(
            l.a,
            {
              paddingX: t,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "xlarge",
              className: s.StandardLayout,
            },
            i.a.createElement(
              l.f,
              { itemClassName: s.PageItem, className: s.ItemContainer },
              e.children
            )
          )
        );
      }
      const N = ({ background: e, children: t }) => {
          let a = g.a;
          return (
            e && (a = e),
            i.a.createElement(
              M,
              null,
              i.a.createElement(E, { src: a }, i.a.createElement(v, null, t))
            )
          );
        },
        j = ({ children: e }) =>
          i.a.createElement(E, { src: h.a, className: s.HomeBackground }, e),
        S = ({ children: e }) =>
          i.a.createElement(
            M,
            null,
            i.a.createElement(j, null, i.a.createElement(v, null, e))
          ),
        O = Object(o.a)(({ children: e, appid: t }) => {
          const a = (function (e) {
            const [t, a] = i.a.useState("");
            return (
              i.a.useEffect(() => {
                let t = !0;
                const n = Object(I.e)(e);
                a(n);
                const r = new Image();
                return (
                  (r.onerror = () => t && a(Object(I.d)(e))),
                  (r.src = n),
                  () => {
                    t = !1;
                  }
                );
              }, [e]),
              t
            );
          })(t);
          return i.a.createElement(
            E,
            { src: a, className: s.ParallaxAppBackground },
            e
          );
        }),
        A = { 1461450: C.a };
      function D(e) {
        return e.appid in A
          ? i.a.createElement(x, Object.assign({}, e))
          : i.a.createElement(B, Object.assign({}, e));
      }
      function x(e) {
        const { children: t, appid: a } = e,
          n = (function (e) {
            return A[e];
          })(a);
        return i.a.createElement(
          y,
          null,
          i.a.createElement(
            "div",
            {
              style: { backgroundImage: `url("${n}")` },
              className: s.CustomAppBackground,
            },
            i.a.createElement(v, null, t)
          )
        );
      }
      function B(e) {
        const { children: t, appid: a } = e;
        return i.a.createElement(
          M,
          null,
          i.a.createElement(O, { appid: a }, i.a.createElement(v, null, t))
        );
      }
      const L = ({ title: e, subtitle: t, headerImage: a }) =>
        i.a.createElement(
          i.a.Fragment,
          null,
          a &&
            i.a.createElement("img", { className: s.PageHeaderImage, src: a }),
          e && i.a.createElement("div", { className: s.PageTitle }, e),
          t && i.a.createElement("div", { className: s.PageSubtitle }, t)
        );
    },
    nu2M: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/hot_take_anim000.png?v=valveisgoodatcaching";
    },
    o8B4: function (e, t, a) {
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
    oydz: function (e, t, a) {
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
        Responsive: "redeempointsmodal_Responsive_2-Nxq",
        ItemWrapper: "redeempointsmodal_ItemWrapper_2j7g0",
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
        ProfileModifier: "redeempointsmodal_ProfileModifier_9j-kM",
        PreviewProfileBundleFrameContainer:
          "redeempointsmodal_PreviewProfileBundleFrameContainer_21Gwk",
        PreviewProfileBundleFrame:
          "redeempointsmodal_PreviewProfileBundleFrame_1ms02",
        KeyboardSkinPreviewContainer:
          "redeempointsmodal_KeyboardSkinPreviewContainer_RSqiS",
        KeyboardPreviewImg: "redeempointsmodal_KeyboardPreviewImg_34pqP",
        WarningTextContainer: "redeempointsmodal_WarningTextContainer_1AVIh",
        TimeWarning: "redeempointsmodal_TimeWarning_3TOAC",
        SaleRewardImg: "redeempointsmodal_SaleRewardImg_Ur-Ad",
        RedeemThrobber: "redeempointsmodal_RedeemThrobber_3weKx",
        PreviewLinkContainer: "redeempointsmodal_PreviewLinkContainer_2uwx7",
        PreviewLink: "redeempointsmodal_PreviewLink_1F7sB",
      };
    },
    prdU: function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return A;
      }),
        a.d(t, "f", function () {
          return D;
        }),
        a.d(t, "b", function () {
          return B;
        }),
        a.d(t, "e", function () {
          return L;
        }),
        a.d(t, "a", function () {
          return F;
        }),
        a.d(t, "c", function () {
          return Y;
        });
      var n = a("mrSG"),
        r = (a("q1tI"), a("2lpH")),
        i = a.n(r),
        o = a("2vnA"),
        s = a("GXif"),
        l = a("vDqi"),
        c = a.n(l),
        m = a("/Q1a"),
        d = a("Zdsb"),
        p = a("TqgT"),
        u = a("hCpY"),
        _ = a("9XWO"),
        g = (a("Nr4G"), a("1udA")),
        f = a("BaLb"),
        h = a("ztGc"),
        b = a("Zj3+"),
        C = a("tXj3"),
        I = (a("Qhkv"), a("kMdN")),
        y = a("oleE"),
        w = a("bEwK"),
        M = a.n(w),
        E = a("cOvF"),
        v = a("1fPh"),
        N = a("f5iL"),
        j = a("FKEV"),
        S = (a("d4Nf"), a("XThB"), a("FmLm")),
        O = a("Nt3m");
      function A(e, t = !1) {
        const a = (e) => Object(s.g)(t ? `${e}_Plural` : e);
        switch (e) {
          case 4:
            return a("#CommunityItemClass_Emoticon");
          case 11:
            return a("#CommunityItemClass_Sticker");
          case 13:
            return a("#CommunityItemClass_MiniProfileBackground");
          case 3:
            return a("#CommunityItemClass_Background");
          case 12:
            return a("#CommunityItemClass_ChatEffect");
          case 14:
            return a("#CommunityItemClass_AvatarFrame");
          case 15:
            return a("#CommunityItemClass_AnimatedAvatar");
          case 1:
            return a("#CommunityItemClass_Badge");
          case 8:
            return a("#CommunityItemClass_ProfileModifier");
          case 16:
            return a("#CommunityItemClass_SteamDeckKeyboardSkin");
        }
        return "Unknown ECommunityItemClass";
      }
      const D = "home";
      class x {
        constructor() {
          (this.items = []), (this.mapItemOwnership = new Map());
        }
      }
      class B {
        constructor() {
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
              (e) =>
                fetch(`${m.d.STORE_BASE_URL}points/heroimage?appid=${e}`)
                  .then((e) => e.json())
                  .then((e) => e.img_url),
              (e) => e.toString()
            )),
            (this.m_batchedRewardItemLoader = new V(
              (e) => g.o.BatchedQueryRewardItems(this.m_anonymousTransport, e),
              (e) => {
                const t = _.b.Init(g.b);
                return t.Body().set_requests(e), t;
              },
              (e) =>
                1 == e.GetEResult()
                  ? e
                      .Body()
                      .responses()
                      .map((e) => e.toObject())
                  : (console.error(
                      `Error when calling LoyaltyRewardsService.BatchedQueryRewardItems: EResult=${e.GetEResult()}`
                    ),
                    [])
            )),
            (this.m_batchedCommunityInventoryLoader = new V(
              (e) => f.c.GetCommunityInventory(this.m_transport, e),
              (e) => {
                const t = _.b.Init(f.b);
                return t.Body().set_filter_appids(e), t;
              },
              (e, t) => {
                if (1 == e.GetEResult()) {
                  const { items: a } = e.Body().toObject(),
                    n = {};
                  return (
                    a.forEach((e) => {
                      n[e.appid] || (n[e.appid] = []), n[e.appid].push(e);
                    }),
                    t.map((e) => n[e] || [])
                  );
                }
                return (
                  console.error(
                    `Error when calling QuestService.GetCommunityInventory: EResult=${e.GetEResult()}`
                  ),
                  t.map(() => [])
                );
              }
            )),
            (this.m_mapPages = o.C.map({}, { deep: !1 })),
            (this.m_mapClusters = o.C.map({}, { deep: !1 }));
        }
        Init(e, t) {
          if (
            ((this.m_transport = e.GetServiceTransport()),
            (this.m_anonymousTransport = e.GetAnonymousServiceTransport()),
            (this.m_config = t),
            this.BIsLoggedIn())
          ) {
            const e = new y.a(m.l.steamid);
            (this.m_persona = new I.a(e)), this.RetrievePersonaState();
          }
          t.eligible_apps
            ? ((this.m_bLoadedEligibleApps = !0),
              (this.m_rgEligibleApps = t.eligible_apps.apps),
              (this.m_mapEligibleApps = new Map(
                this.m_rgEligibleApps.map((e) => [e.appid, e])
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
                t.profile_customizations_purchased.purchased_customizations ||
                []),
              (this.m_rgUpgradedCustomizations =
                t.profile_customizations_purchased.upgraded_customizations ||
                [])),
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
        }
        static Get() {
          return (
            this.s_RewardsStore || (this.s_RewardsStore = new B()),
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
          return 2055870;
        }
        GetLoyaltyRewardsSummary() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return;
            const e = _.b.Init(g.g);
            e.SetBodyFields({ steamid: m.l.steamid });
            let t = yield g.o.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = i.a.fromString(
                  t.Body().summary().points()
                ))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`
                );
          });
        }
        GetCommunityAwardPointsTransferred() {
          return (
            this.m_bLoadedAwardCost || this.LoadAwardCost(),
            this.m_unAwardPointsTransferred
          );
        }
        LoadAwardCost() {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_bLoadedAwardCost = !0;
            const e = _.b.Init(g.e);
            let t = yield g.o.GetReactionConfig(this.m_transport, e);
            1 == t.GetEResult()
              ? ((this.m_unAwardPointsTransferred = 0),
                t
                  .Body()
                  .reactions()
                  .forEach((e) => {
                    0 == this.m_unAwardPointsTransferred
                      ? (this.m_unAwardPointsTransferred =
                          e.points_transferred())
                      : (this.m_unAwardPointsTransferred = Math.min(
                          this.m_unAwardPointsTransferred,
                          e.points_transferred()
                        ));
                  }))
              : (console.error(
                  `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`
                ),
                (this.m_bLoadedAwardCost = !1));
          });
        }
        ShowLoginDialog(e) {
          let t = window.location.href;
          if (void 0 !== e) {
            const a = t.indexOf("/reward/");
            -1 !== a
              ? (t = t.slice(0, a))
              : t.endsWith("/") && (t = t.slice(0, t.length - 1)),
              (t += "/reward/" + e);
          }
          Object(C.b)(t);
        }
        BHasAutumnSaleStarted() {
          let e = Date.now() / 1e3;
          return "dev" == m.d.WEB_UNIVERSE || e > 1606327200;
        }
        BHasAutumnSaleEnded() {
          return Date.now() / 1e3 > 1606845600;
        }
        BIsSaleActive() {
          return this.m_bIsSaleActive;
        }
        BIsLoggedIn() {
          return m.l.logged_in;
        }
        GetPointsAvailable() {
          return this.m_lPointsAvailable;
        }
        GetIsUsingAppIDFilters() {
          return 0 != this.m_nAppIDFiltersInUseCount;
        }
        SetIsUsingAppIDFilters(e) {
          this.m_nAppIDFiltersInUseCount += e ? 1 : -1;
        }
        GetAppIDFilters() {
          return this.m_mapAppIDFilters;
        }
        AddAppIDFilter(e) {
          this.m_mapAppIDFilters.set(e, !0);
        }
        RemoveAppIDFilter(e) {
          this.m_mapAppIDFilters.delete(e);
        }
        GetCurrentAppFilterText() {
          return this.m_strAppFilterText;
        }
        SetCurrentAppFilterText(e) {
          this.m_strAppFilterText = e;
        }
        getLoyaltyRewardDefMap() {
          return this.m_mapLoyaltyRewardDefs;
        }
        GetRewardDefinitions(...e) {
          const t = e.filter(
            (e) =>
              !this.m_mapLoyaltyRewardDefs.has(e) &&
              !this.m_inflightRewardItemRequestsByID[e]
          );
          if (t.length > 0) {
            t.forEach((e) => (this.m_inflightRewardItemRequestsByID[e] = !0));
            const e = [];
            for (let a = 0; a < Math.ceil(t.length / 100); a++) {
              const n = t.slice(100 * a, 100 * a + 100);
              e.push(this.LoadRewardDefinitions(...n));
            }
            Promise.all(e).then(
              Object(o.k)((e) => {
                e.forEach((e) => {
                  e.forEach((e) => {
                    delete this.m_inflightRewardItemRequestsByID[e.defid],
                      this.m_mapLoyaltyRewardDefs.set(e.defid, e);
                  });
                });
              })
            );
          }
          return e
            .map((e) => this.m_mapLoyaltyRewardDefs.get(e))
            .filter(Boolean);
        }
        LoadRewardDefinitions(...e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const t = new g.h();
            t.set_language(m.d.LANGUAGE),
              t.set_include_direct_purchase_disabled(!0),
              e.forEach((e) => t.add_definitionids(e));
            const a = yield this.m_batchedRewardItemLoader.Load(t);
            return 1 == a.eresult
              ? (a.response.count !== a.response.total_count &&
                  console.error(
                    "LoadRewardDefinitions did not receive all expected definitions (likely to due server-side limiting). The calling code should be paging/batching the request into multiple."
                  ),
                a.response.definitions)
              : (console.error(
                  `Error loading reward definitions by ID: EResult=${a.eresult}`
                ),
                []);
          });
        }
        QueryRewardDefinitions(e, t, a) {
          var n;
          const r = null !== (n = e.rewardtype) && void 0 !== n ? n : [1],
            i = S.a.Get().GetExcludedContentDescriptor();
          let o = this.QueryLoyaltyRewardDefinitions(
            Object.assign(Object.assign({}, e), {
              excludedContentDescriptors: i,
            }),
            t,
            a,
            r
          );
          if (i.length) {
            const t = Object.assign(Object.assign({}, e), {
                excludedContentDescriptors: [],
                maxToReturn: 1,
              }),
              a = this.QueryLoyaltyRewardDefinitions(t, 0, 1, r);
            void 0 !== a.cTotalMatching &&
              (o.cTotalMatchingUnfiltered = a.cTotalMatching);
          } else o.cTotalMatchingUnfiltered = o.cTotalMatching;
          return o;
        }
        EResultToErrorMessage(e) {
          switch (e) {
            case 15:
              return Object(s.g)("#Redeem_Error_AccessDenied");
            case 24:
              return Object(s.g)("#Redeem_Error_InsufficientPrivileges");
            case 107:
              return Object(s.g)("#Redeem_Error_InsufficientFunds");
            case 29:
              return Object(s.g)("#Redeem_Error_DuplicateRequest");
            case 26:
              return Object(s.g)("#Redeem_Error_Revoked");
          }
          return "";
        }
        QueryLoyaltyRewardDefinitions(e, t, a, n) {
          let r = { rewards: [], cTotalMatching: 0, cMaxToReturn: 0 };
          if (
            (e.appid && !e.appid.length) ||
            (e.itemclass && !e.itemclass.length)
          )
            return r;
          const i = {
              appid: e.appid || [],
              itemclass: e.itemclass || [],
              grouping: e.grouping,
              maxToReturn: e.maxToReturn,
              queryFilter: e.queryFilter || [],
              categoryTag: e.categoryTag || [],
              excludedContentDescriptors: e.excludedContentDescriptors || [],
              excludedAppIDs: e.excludedAppIDs || [],
            },
            s = k(i);
          i.maxToReturn &&
            t + a > i.maxToReturn &&
            (a = Math.max(0, i.maxToReturn - t));
          let l,
            c = a;
          if (this.m_mapAppRewards.has(s)) {
            const e = this.m_mapAppRewards.get(s);
            (c =
              t > e.rgRewardIds.length - 1
                ? a + t - e.rgRewardIds.length
                : Math.max(a - (e.rgRewardIds.length - t), 0)),
              e.bFullyLoaded && (c = 0),
              (l = e.strCursor);
          }
          if (
            (this.m_mapAppRewards.has(s) ||
              this.m_mapAppRewards.set(s, { rgRewardIds: [] }),
            c && !this.m_inflightRewardItemRequests[s])
          ) {
            this.m_inflightRewardItemRequests[s] = !0;
            let e = [];
            this.LoadLoyaltyRewardDefinitions(i, c, l, n).then((t) => {
              Object(o.G)(() => {
                const { definitions: a, next_cursor: n, total_count: r } = t,
                  i = a.filter(
                    (e) =>
                      !(
                        (function (e) {
                          if (5 === e.type || 6 === e.type)
                            return e.bundle_defids &&
                              0 != e.bundle_defids.length
                              ? !e.bundle_discount &&
                                  (console.error(
                                    `Bundle has no discount for def ${e.defid}`
                                  ),
                                  !0)
                              : (console.error(
                                  `Bundle contains no items for def ${e.defid}`
                                ),
                                !0);
                          const t = e.community_item_data;
                          if (!t) return !0;
                          if (1 === e.type) {
                            let a = !1;
                            switch (e.community_item_class) {
                              case 11:
                              case 14:
                              case 15:
                                a = !t.item_image_small;
                                break;
                              case 4:
                              case 16:
                                a = !t.item_image_large;
                                break;
                              case 3:
                                a = t.animated
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
                                a = !(
                                  t.item_image_large ||
                                  t.item_movie_mp4 ||
                                  t.item_movie_mp4_small ||
                                  t.item_movie_webm ||
                                  t.item_movie_webm_small
                                );
                            }
                            if (a)
                              return (
                                console.error(
                                  `Missing expected assets for reward ${e.defid}`
                                ),
                                !0
                              );
                          }
                          return !1;
                        })(e) && 4 !== e.type
                      )
                  ),
                  o = this.m_mapAppRewards.get(s);
                delete this.m_inflightRewardItemRequests[s],
                  (o.strCursor = n),
                  (o.cTotal = r),
                  i.forEach(({ defid: e }) => {
                    o.rgRewardIds.push(e);
                  }),
                  (o.bFullyLoaded =
                    0 === a.length || o.rgRewardIds.length === o.cTotal),
                  i.forEach((t) => {
                    this.m_mapLoyaltyRewardDefs.set(t.defid, t),
                      e.push(t.appid);
                  }),
                  j.a.EnsureAppInfoForAppIDs(e);
              });
            });
          }
          let m = this.m_mapAppRewards.get(s);
          return (
            (r.rewards = m.rgRewardIds
              .slice(t, t + a)
              .map((e) => this.m_mapLoyaltyRewardDefs.get(e))),
            (r.cTotalMatching = m.cTotal || 0),
            (r.cMaxToReturn = i.maxToReturn || 0),
            (r.bLoadingMore = this.m_inflightRewardItemRequests[s]),
            r
          );
        }
        LoadLoyaltyRewardDefinitions(e, t, a, r) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const {
                appid: n,
                grouping: i,
                itemclass: o,
                queryFilter: s,
                categoryTag: l,
                excludedContentDescriptors: c,
                excludedAppIDs: d,
              } = e,
              p = T(i),
              u = new g.h();
            n.forEach((e) => u.add_appids(e)),
              u.set_language(m.d.LANGUAGE),
              u.set_count(t),
              u.set_sort(p.sort),
              u.set_sort_descending(p.sort_descending),
              u.set_community_item_classes(o),
              u.set_filters(s),
              u.set_filter_match_any_category_tags(l),
              u.set_excluded_content_descriptors(c),
              u.set_excluded_appids(d),
              r && u.set_reward_types(r),
              a && u.set_cursor(a);
            const _ = yield this.m_batchedRewardItemLoader.Load(u);
            return 1 == _.eresult
              ? _.response
              : (console.error(
                  `Error when loading reward definitions: EResult=${_.eresult}`
                ),
                {
                  definitions: [],
                  total_count: 0,
                  next_cursor: void 0,
                  count: 0,
                });
          });
        }
        GetCostToLevelSeasonalBadge(e) {
          const t = this.GetSeasonalBadgeDefinition();
          if (!t) return 0;
          const a = this.GetUserSeasonalBadgeLevel();
          return Math.max(parseInt(t.point_cost) * (e - a), 0);
        }
        GetUserSeasonalBadgeLevel() {
          const e = this.GetSeasonalBadgeDefinition();
          if (!e) return 0;
          if (!this.BRewardOwnedByUser(e)) return 0;
          const t = this.GetOwnedCommunityItem(e);
          if (!t)
            return console.error("Could not find owned seasonal badge item"), 0;
          const a = t.attributes.find(({ attributeid: e }) => 2 === e);
          if (!a)
            return (
              console.error("Could not find seasonal badge level attribute"), 0
            );
          const n = parseInt(a.value);
          return isNaN(n)
            ? (console.error("Seasonal badge level attribute is NaN"), 0)
            : n;
        }
        GetGoldenProfileConfigForApp(e) {
          return this.m_goldenProfileConfigs.find((t) => t.appid === e) || null;
        }
        GetSeasonalBadgeDefinition() {
          return (
            void 0 === this.m_seasonalBadgeDefinition &&
              this.LoadSeasonalBadgeDefinition().then(
                (e) => (this.m_seasonalBadgeDefinition = e)
              ),
            this.m_seasonalBadgeDefinition
          );
        }
        LoadSeasonalBadgeDefinition() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = new g.h();
            e.set_appids([this.GetCurrentSeasonalAppID()]),
              e.set_community_item_classes([1]),
              e.set_count(1),
              e.set_language(m.d.LANGUAGE);
            let t = yield this.m_batchedRewardItemLoader.Load(e);
            if (1 == t.eresult) {
              return t.response.definitions[0] || null;
            }
            return (
              console.error(
                `Error when loading badge definition: EResult=${t.eresult}`
              ),
              null
            );
          });
        }
        GetGoldenProfileDefinition() {
          return (
            void 0 === this.m_goldenProfileDefinition &&
              this.LoadGoldenProfileDefinition().then(
                (e) => (this.m_goldenProfileDefinition = e)
              ),
            this.m_goldenProfileDefinition
          );
        }
        LoadGoldenProfileDefinition() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = new g.h();
            e.set_appids([this.GetCurrentSeasonalAppID()]),
              e.set_community_item_classes([8]),
              e.set_count(1),
              e.set_language(m.d.LANGUAGE);
            let t = yield this.m_batchedRewardItemLoader.Load(e);
            if (1 == t.eresult) {
              if (0 != t.response.count) {
                return t.response.definitions[0] || null;
              }
              return (
                console.error(
                  `Error when loading golden profile definition: Failed to find definition for appid ${this.GetCurrentSeasonalAppID()}`
                ),
                null
              );
            }
            return (
              console.error(
                `Error when loading golden profile definition: EResult=${t.eresult}`
              ),
              null
            );
          });
        }
        GetCouponDefinition(e) {
          return (
            this.m_bLoadedCouponDefinitions ||
              ((this.m_bLoadedCouponDefinitions = !0),
              this.LoadCouponDefinitions().then((e) =>
                e.forEach((e) => this.m_mapCouponDefinitons.set(e.defid, e))
              )),
            this.m_mapCouponDefinitons.get(e)
          );
        }
        LoadCouponDefinitions() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = new g.h();
            e.set_appids([this.GetCurrentSeasonalAppID()]),
              e.set_reward_types([4]),
              e.set_count(10),
              e.set_language(m.d.LANGUAGE);
            let t = yield this.m_batchedRewardItemLoader.Load(e);
            return 1 == t.eresult
              ? t.response.definitions
              : (console.error(
                  `Error when loading coupon definitions: EResult=${t.eresult}`
                ),
                null);
          });
        }
        GetBundleOfferForUser(e) {
          let t = new x();
          if (
            ((t.original_point_cost = 0),
            (t.point_cost = 0),
            (t.discount = e.bundle_discount),
            (t.items = this.GetRewardDefinitions(...e.bundle_defids)),
            8 == e.community_item_class)
          ) {
            let a = this.GetRewardDefinitions(e.defid);
            t.items = t.items.concat(a);
          }
          return (
            t.items.sort((e, t) =>
              8 == e.community_item_class
                ? -1
                : 8 == t.community_item_class
                ? 1
                : t.community_item_class - e.community_item_class
            ),
            t.items.forEach((e) => {
              const a = parseInt(e.point_cost);
              t.original_point_cost += a;
              const n = this.BRewardOwnedByUser(e);
              t.mapItemOwnership.set(e.defid, n), n || (t.point_cost += a);
            }),
            (t.point_cost = Math.ceil(
              t.point_cost * (100 - t.discount) * 0.01
            )),
            t
          );
        }
        GetOwnedItemCacheKey(e) {
          return `${e}`;
        }
        BRewardOwnedByUser(e) {
          const t = this.m_mapOwnedCommunityItems.get(
            this.GetOwnedItemCacheKey(
              this.m_bLoadedFullInventory ? void 0 : e.appid
            )
          );
          if ((t || this.GetCommunityItemInventory(e.appid), !t)) return !1;
          if (5 == e.type || 6 == e.type) {
            for (const t of e.bundle_defids) {
              const e = this.m_mapLoyaltyRewardDefs.get(t);
              if (e && !this.BRewardOwnedByUser(e)) return !1;
            }
            return !0;
          }
          return t.has(e.community_item_type);
        }
        BRewardEquippedByUser(e) {
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
                this.m_equippedItems.mini_profile_background.appid == e.appid &&
                this.m_equippedItems.mini_profile_background.item_type ==
                  e.community_item_type
              );
            case 8:
              return (
                this.m_equippedItems.profile_modifier.appid == e.appid &&
                this.m_equippedItems.profile_modifier.item_type ==
                  e.community_item_type
              );
            case 16:
              return (
                this.m_equippedItems.steam_deck_keyboard_skin.appid ==
                  e.appid &&
                this.m_equippedItems.steam_deck_keyboard_skin.item_type ==
                  e.community_item_type
              );
          }
          return !1;
        }
        GetOwnedCommunityItem(e) {
          const t = this.m_mapOwnedCommunityItems.get(
            this.GetOwnedItemCacheKey(
              this.m_bLoadedFullInventory ? void 0 : e.appid
            )
          );
          return (
            t || this.GetCommunityItemInventory(e.appid),
            Object(N.a)(
              t.has(e.community_item_type),
              `Missing owned item ${e.community_item_type}`
            ),
            t.get(e.community_item_type)
          );
        }
        GetOwnedCommunityItemID(e) {
          const t = this.GetOwnedCommunityItem(e);
          return t ? t.communityitemid : null;
        }
        EnsureCommunityItemInventoryLoaded(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_mapOwnedCommunityItems.has(this.GetOwnedItemCacheKey(e)) ||
              (yield this.GetCommunityItemInventory(e));
          });
        }
        GetCommunityItemInventory(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return;
            const t = this.GetOwnedItemCacheKey(e);
            if (this.m_inflightInventoryRequests[t])
              return this.m_inflightInventoryRequests[t];
            const a = this.m_batchedCommunityInventoryLoader.Load(e);
            this.m_inflightInventoryRequests[t] = a;
            const n = yield a,
              r = new Map();
            return (
              n.forEach((e) => {
                r.set(e.item_type, e);
              }),
              this.m_mapOwnedCommunityItems.set(t, r),
              delete this.m_inflightInventoryRequests[t],
              a
            );
          });
        }
        get active_bonuses() {
          return (
            this.m_bLoadedActiveBonuses || this.LoadActiveBonuses(),
            this.m_rgActiveBonuses
          );
        }
        LoadActiveBonuses() {
          return Object(n.a)(this, void 0, void 0, function* () {
            this.m_bLoadedActiveBonuses = !0;
            const e = _.b.Init(g.c),
              t = yield g.o.GetActivePurchaseBonuses(this.m_transport, e);
            1 == t.GetEResult()
              ? this.m_rgActiveBonuses.push(
                  ...t
                    .Body()
                    .bonuses()
                    .map((e) => e.toObject())
                )
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetActivePurchaseBonuses: EResult=${t.GetEResult()}`
                );
          });
        }
        SetProfileBackground(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (t = { eResult: 21, strMessage: "Not logged on" }), t;
            const a = _.b.Init(h.l);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.o.SetProfileBackground(this.m_transport, a);
            return (
              (t.eResult = n.GetEResult()),
              1 != n.GetEResult() &&
                console.error(
                  `Error when calling PlayerService.SetProfileBackground: EResult=${n.GetEResult()}`
                ),
              t
            );
          });
        }
        SetAvatarFrame(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (t = { eResult: 21, strMessage: "Not logged on" }), t;
            const a = _.b.Init(h.j);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.o.SetAvatarFrame(this.m_transport, a);
            return (
              (t.eResult = n.GetEResult()),
              1 != n.GetEResult()
                ? console.error(
                    `Error when calling PlayerService.SetAvatarFrame: EResult=${n.GetEResult()}`
                  )
                : this.RefreshEquippedProfileItems(),
              t
            );
          });
        }
        SetAnimatedAvatar(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (t = { eResult: 21, strMessage: "Not logged on" }), t;
            const a = _.b.Init(h.i);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.o.SetAnimatedAvatar(this.m_transport, a);
            return (
              (t.eResult = n.GetEResult()),
              1 != n.GetEResult()
                ? console.error(
                    `Error when calling PlayerService.SetAnimatedAvatar: EResult=${n.GetEResult()}`
                  )
                : this.RefreshEquippedProfileItems(),
              t
            );
          });
        }
        SetMiniProfileBackground(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (t = { eResult: 21, strMessage: "Not logged on" }), t;
            const a = _.b.Init(h.k);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.o.SetMiniProfileBackground(this.m_transport, a);
            return (
              (t.eResult = n.GetEResult()),
              1 != n.GetEResult()
                ? console.error(
                    `Error when calling PlayerService.SetMiniProfileBackground: EResult=${n.GetEResult()}`
                  )
                : this.RefreshEquippedProfileItems(),
              t
            );
          });
        }
        SetSteamDeckKeyboardSkin(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (t = { eResult: 21, strMessage: "Not logged on" }), t;
            const a = _.b.Init(h.m);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.o.SetSteamDeckKeyboardSkin(this.m_transport, a);
            return (
              (t.eResult = n.GetEResult()),
              1 != n.GetEResult()
                ? console.error(
                    `Error when calling PlayerService.SetSteamDeckKeyboardSkin: EResult=${n.GetEResult()}`
                  )
                : this.RefreshEquippedProfileItems(),
              t
            );
          });
        }
        ActivateProfileModifier(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (t = { eResult: 21, strMessage: "Not logged on" }), t;
            const a = _.b.Init(f.a);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e)),
              a.Body().set_appid(e.appid),
              a.Body().set_activate(!0);
            const n = yield f.c.ActivateProfileModifierItem(
              this.m_transport,
              a
            );
            return (
              (t.eResult = n.GetEResult()),
              1 != n.GetEResult()
                ? console.error(
                    `Error when calling QuestService.ActivateProfileModifierItem: EResult=${n.GetEResult()}`
                  )
                : this.RefreshEquippedProfileItems(),
              t
            );
          });
        }
        RedeemPointsForItem(e, t) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let a = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (
                (a = {
                  eResult: 21,
                  strMessage: Object(s.g)("#Redeem_SignIn"),
                }),
                a
              );
            const n = _.b.Init(g.l);
            n.Body().set_defid(e);
            const r = yield g.o.RedeemPoints(this.m_transport, n);
            return (
              (a.eResult = r.GetEResult()),
              1 == r.GetEResult()
                ? (this.GetCommunityItemInventory(t),
                  this.GetLoyaltyRewardsSummary())
                : ((a.strMessage = this.EResultToErrorMessage(r.GetEResult())),
                  console.error(
                    `Error when calling LoyaltyRewardsService.RedeemPoints: EResult=${r.GetEResult()}`
                  )),
              a
            );
          });
        }
        RedeemPointsForBadge(e, t) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let a = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (
                (a = {
                  eResult: 21,
                  strMessage: Object(s.g)("#Redeem_SignIn"),
                }),
                a
              );
            const n = _.b.Init(g.i);
            n.Body().set_defid(e), n.Body().set_num_levels(t);
            const r = yield g.o.RedeemPointsForBadgeLevel(this.m_transport, n);
            return (
              (a.eResult = r.GetEResult()),
              1 == r.GetEResult()
                ? (this.GetCommunityItemInventory(
                    this.GetCurrentSeasonalAppID()
                  ),
                  this.GetLoyaltyRewardsSummary())
                : ((a.strMessage = this.EResultToErrorMessage(r.GetEResult())),
                  console.error(
                    `Error when calling LoyaltyRewardsService.RedeemPointsForBadgeLevel: EResult=${r.GetEResult()}`
                  )),
              a
            );
          });
        }
        RedeemPointsForProfileShowcase(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (t = { eResult: 21, strMessage: "Not logged on" }), t;
            const a = _.b.Init(g.k);
            a.Body().set_customization_type(e);
            const n = yield g.o.RedeemPointsForProfileCustomization(
              this.m_transport,
              a
            );
            return (
              (t.eResult = n.GetEResult()),
              1 == n.GetEResult()
                ? this.RefreshPurchasedProfileCustomizations()
                : ((t.strMessage = this.EResultToErrorMessage(n.GetEResult())),
                  console.error(
                    `Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomization: EResult=${n.GetEResult()}`
                  )),
              t
            );
          });
        }
        RedeemPointsForProfileShowcaseUpgrade(e, t) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let a = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (
                (a = {
                  eResult: 21,
                  strMessage: Object(s.g)("#Redeem_SignIn"),
                }),
                a
              );
            const n = _.b.Init(g.j);
            n.SetBodyFields({ customization_type: e, new_level: t });
            const r = yield g.o.RedeemPointsForProfileCustomizationUpgrade(
              this.m_transport,
              n
            );
            return (
              (a.eResult = r.GetEResult()),
              1 == r.GetEResult()
                ? this.RefreshPurchasedProfileCustomizations()
                : ((a.strMessage = this.EResultToErrorMessage(r.GetEResult())),
                  console.error(
                    `Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomizationUpgrade: EResult=${r.GetEResult()}`
                  )),
              a
            );
          });
        }
        RedeemPointsForCoupon(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = { eResult: 2, strMessage: "" };
            if (!this.BIsLoggedIn())
              return (
                (t = {
                  eResult: 21,
                  strMessage: Object(s.g)("#Redeem_SignIn"),
                }),
                t
              );
            const a = new FormData();
            a.append("sessionid", m.d.SESSIONID),
              a.append("itemid", e.toString());
            try {
              yield c.a
                .post(
                  `${m.d.STORE_BASE_URL}cart/ajaxredeemtokensforcartdiscount`,
                  a
                )
                .then((e) => {
                  const a = e.data;
                  (t.eResult = a.eresult),
                    1 == a.eresult && a.redirect
                      ? (window.location.href = a.redirect)
                      : console.error(
                          `Error when calling ajaxredeemtokensforcartdiscount: ${a}`
                        );
                });
            } catch (e) {
              let t = Object(p.a)(e);
              console.error(
                `Error when calling ajaxredeemtokensforcartdiscount: ${t.strErrorMsg}`,
                t
              );
            }
            return t;
          });
        }
        GetCouponPromosForUser() {
          return (
            this.m_bLoadedCouponPromosForUser ||
              ((this.m_bLoadedCouponPromosForUser = !0),
              this.LoadCouponPromosForUser().then((e) =>
                e
                  .sort((e, t) =>
                    e.max_use_count < t.max_use_count
                      ? -1
                      : e.max_use_count == t.max_use_count
                      ? 0
                      : 1
                  )
                  .forEach((e) =>
                    this.m_mapCouponPromos.set(e.loyalty_reward_id, e)
                  )
              )),
            this.m_mapCouponPromos
          );
        }
        LoadCouponPromosForUser() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = _.b.Init(b.c);
            e.Body().set_country_code(m.l.country_code);
            const t = yield b.d.GetAvailableValveDiscountPromotions(
              this.m_transport,
              e
            );
            return 1 == t.GetEResult()
              ? t
                  .Body()
                  .promotions()
                  .map((e) => e.toObject())
              : (console.error(
                  `Error when calling UserAccountService.GetAvailableValveDiscountPromotions: EResult=${t.GetEResult()}`
                ),
                []);
          });
        }
        BCanRedeemPointsForItem(e) {
          switch (e.type) {
            case 1:
              switch (e.community_item_class) {
                case 4:
                case 3: {
                  if (
                    e.community_item_data.animated &&
                    3 == e.community_item_class
                  )
                    return !0;
                  if (this.GetSortedGamesWithRewards().includes(e.appid))
                    return !0;
                  let t = this.m_mapEligibleApps.get(e.appid);
                  return !(!t || !t.event_app);
                }
              }
              break;
            case 5:
            case 6: {
              if (this.GetSortedGamesWithRewards().includes(e.appid)) return !0;
              let t = this.m_mapEligibleApps.get(e.appid);
              return !(!t || !t.event_app);
            }
          }
          return !0;
        }
        BCanRedeemPointsForProfileShowcaseUpgrade(e, t) {
          return t < this.m_rgProfileCustomizationsConfig.max_upgradable_level;
        }
        BCanRedeemPointsForProfileShowcaseSlot(e, t) {
          return t < this.m_rgProfileCustomizationsConfig.max_slots_per_type;
        }
        GetSortedGamesWithRewards() {
          if (!this.m_bSortedGamesWithRewards) {
            this.m_bSortedGamesWithRewards = !0;
            let e = this.m_bLoadedEligibleApps
                ? this.m_rgEligibleApps
                : this.LoadEligibleApps(),
              t = this.m_bLoadedRecentlyPlayed
                ? this.m_rgRecentlyPlayed
                : this.LoadRecentlyPlayedApps();
            Promise.all([e, t]).then(([e, t]) => {
              (this.m_rgEligibleApps = e),
                (this.m_mapEligibleApps = new Map(
                  this.m_rgEligibleApps.map((e) => [e.appid, e])
                ));
              const a = t.filter((e) => this.m_mapEligibleApps.has(e)),
                n = e
                  .filter((e) => 0 == a.includes(e.appid))
                  .map((e) => e.appid);
              this.m_rgSortedAppsWithRewards = a.concat(n);
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
        LoadRecentlyPlayedApps() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (((this.m_bLoadedRecentlyPlayed = !0), !this.BIsLoggedIn()))
              return [];
            const e = _.b.Init(h.d),
              t = Math.floor(Date.now() / 1e3) - 14 * O.e.PerDay;
            e.Body().set_min_last_played(t);
            const a = yield h.o.ClientGetLastPlayedTimes(this.m_transport, e);
            return 1 == a.GetEResult()
              ? ((this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
                  a.Body().toObject().games
                )),
                this.m_rgRecentlyPlayed)
              : (console.error(
                  `Error when calling PlayerService.ClientGetLastPlayedTimes: EResult=${a.GetEResult()}`
                ),
                []);
          });
        }
        ProcessRecentlyPlayedApps(e) {
          return (
            e.sort((e, t) =>
              t.last_playtime != e.last_playtime
                ? t.last_playtime - e.last_playtime
                : t.playtime_2weeks != e.playtime_2weeks
                ? t.playtime_2weeks - e.playtime_2weeks
                : t.playtime_forever - e.playtime_forever
            ),
            e.map((e) => e.appid)
          );
        }
        LoadEligibleApps() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (((this.m_bLoadedEligibleApps = !0), !this.BIsLoggedIn()))
              return [];
            const e = _.b.Init(g.d),
              t = yield g.o.GetEligibleApps(this.m_transport, e);
            return 1 == t.GetEResult()
              ? t.Body().toObject().apps
              : (console.error(
                  `Error when calling GetEligibleApps: EResult=${t.GetEResult()}`
                ),
                []);
          });
        }
        RefreshEquippedProfileItems() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return;
            const e = _.b.Init(h.e);
            e.SetBodyFields({ steamid: m.l.steamid });
            const t = yield h.o.GetProfileItemsEquipped(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_equippedItems = t.Body().toObject())
              : console.error(
                  `Error when calling GetProfileItemsEquipped: EResult=${t.GetEResult()}`
                );
          });
        }
        RefreshPurchasedProfileCustomizations() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return;
            const e = _.b.Init(h.f);
            e.SetBodyFields({ steamid: m.l.steamid });
            const t = yield h.o.GetPurchasedAndUpgradedProfileCustomizations(
              this.m_transport,
              e
            );
            if (1 == t.GetEResult()) {
              let e = t.Body().toObject();
              (this.m_rgPurchasedCustomizations = e.purchased_customizations),
                (this.m_rgUpgradedCustomizations = e.upgraded_customizations);
            } else console.error(`Error when calling GetPurchasedAndUpgradedProfileCustomizations: EResult=${t.GetEResult()}`);
          });
        }
        GetPersonaState() {
          return this.m_persona;
        }
        RetrievePersonaState() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = {
              access_token: this.m_config.webapi_token,
              steamids: m.l.steamid,
            };
            return c.a
              .get(
                `${m.d.WEBAPI_BASE_URL}ISteamUserOAuth/GetUserSummaries/v2/`,
                { params: e }
              )
              .then((e) => {
                if (
                  e &&
                  e.data &&
                  e.data.players &&
                  0 != e.data.players.length
                ) {
                  let t = e.data.players[0];
                  (this.m_persona.m_strPlayerName = t.personaname),
                    (this.m_persona.m_ePersonaState = t.personastate),
                    (this.m_persona.m_strAvatarHash = t.avatarhash);
                }
              });
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
        GetRewardItem(e) {
          return (
            this.m_mapLoyaltyRewardDefs.has(e) ||
              this.m_inflightRewardItemRequests[e] ||
              ((this.m_inflightRewardItemRequests[e] = !0),
              this.LoadRewardItem(e).then((t) => {
                t.defid === e && this.m_mapLoyaltyRewardDefs.set(e, t),
                  delete this.m_inflightRewardItemRequests[e];
              })),
            this.m_mapLoyaltyRewardDefs.get(e)
          );
        }
        GetAppHeroImage(e) {
          const t = this.m_mapEligibleApps.get(e);
          if (t && t.hero_carousel_image)
            return {
              img_url: `${m.d.MEDIA_CDN_COMMUNITY_URL}images/items/${e}/${t.hero_carousel_image}`,
              is_custom: !0,
            };
          return {
            img_url: this.m_HeroImageFallbackLoader.Get(e) || M.a,
            is_custom: !1,
          };
        }
        LoadRewardItem(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const t = new g.h();
            t.set_language(m.d.LANGUAGE),
              t.set_count(1),
              t.set_definitionids([e]);
            const a = yield this.m_batchedRewardItemLoader.Load(t);
            return 1 == a.eresult
              ? a.response.count > 0
                ? a.response.definitions[0]
                : null
              : (console.error(
                  `Error when loading reward definitions: EResult=${a.eresult}`
                ),
                null);
          });
        }
        GetPageDescriptor(e) {
          return (
            this.m_mapPages.has(P(e)) ||
              this.m_mapPages.set(P(e), this.BuildPage(e)),
            this.m_mapPages.get(P(e))
          );
        }
        BuildPage(e) {
          switch (e.type) {
            case "app":
              return new z(
                e.appid,
                e.appid === this.GetCurrentSeasonalAppID()
                  ? Object(s.g)("#HeroCluster_Premier_Collection_Subtitle")
                  : void 0
              );
            case "custom":
              return console.error("Cannot dynamically build page type"), null;
            default:
              return console.error("Unknown page type"), null;
          }
        }
        GetClusterDescriptor(e) {
          return this.m_mapClusters.get(e);
        }
        HydrateCustomPages() {
          const e = (e, t, a) => {
              const n = new G(
                e,
                t,
                Object.assign({ grouping: 2, maxToReturn: 0 }, a)
              );
              return (
                this.m_mapClusters.has(n.id) || this.m_mapClusters.set(n.id, n),
                n.id
              );
            },
            t = (e, t, a) => {
              const n = new F(e, t, Z({ grouping: 2 }, a));
              return (
                this.m_mapClusters.has(n.id) || this.m_mapClusters.set(n.id, n),
                n
              );
            },
            a = (e, a, n, r) => {
              const i = t(e, n || "", r);
              return {
                type: 2,
                cluster: i.id,
                get title() {
                  return Object(s.g)("#HeroCluster_AppTitle", i.title);
                },
                get strImage() {
                  return a || B.Get().GetAppHeroImage(e).img_url;
                },
                get bFullBleedImage() {
                  return !!a;
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
            },
            n = (e) => this.m_mapPages.set(P(e.params), e),
            r = e(
              Object(s.g)(
                "#RewardCluster_Popular_Title",
                Object(s.g)("#RewardCluster_Popular_RewardItems")
              ),
              Object(s.g)("#RewardCluster_Popular_Subtitle")
            ),
            i = e(
              A(13, !0),
              Object(s.g)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
              { itemclass: [13] }
            ),
            l = e(
              Object(s.g)("#ShopPageTitle_Avatar"),
              Object(s.g)("#RewardCluster_AvatarItems_Subtitle"),
              { itemclass: [15, 14] }
            ),
            c = e(
              A(3, !0),
              Object(s.g)("#RewardCluster_Backgrounds_Subtitle"),
              { itemclass: [3] }
            ),
            p = e(
              Object(s.g)(
                "#RewardCluster_Popular_Title",
                Object(s.g)("#ShopNav_ChatEffectsLink")
              ),
              Object(s.g)("#RewardCluster_ChatEffect_Subtitle"),
              { itemclass: [12] }
            ),
            u = e(
              Object(s.g)(
                "#RewardCluster_Popular_Title",
                Object(s.g)("#ShopNav_StickersLink")
              ),
              Object(s.g)("#RewardCluster_Popular_Subtitle"),
              { itemclass: [11] }
            ),
            _ = e(
              Object(s.g)(
                "#RewardCluster_Popular_Title",
                Object(s.g)("#ShopNav_EmoticonsLink")
              ),
              Object(s.g)("#RewardCluster_Popular_Subtitle"),
              { itemclass: [4] }
            ),
            g = e(
              Object(s.g)("#RewardCluster_All_Title", A(15, !0)),
              Object(s.g)("#RewardCluster_AnimatedAvatar_Subtitle"),
              { itemclass: [15] }
            ),
            f = e(
              Object(s.g)("#RewardCluster_All_Title", A(14, !0)),
              Object(s.g)("#RewardCluster_AvatarFrames_Subtitle"),
              { itemclass: [14] }
            ),
            h = e(
              Object(s.g)("#RewardCluster_All_Title", A(16, !0)),
              Object(s.g)("#RewardCluster_SteamDeckKeyboardSkins_Subtitle"),
              { itemclass: [16] }
            ),
            b = e(
              Object(s.g)(
                "#RewardCluster_All_Title",
                Object(s.g)("#RewardItemType_Bundle_plural")
              ),
              Object(s.g)("#ShopPageTitle_ItemBundles_Subtitle2"),
              { rewardtype: [5, 6] }
            ),
            C = e(
              Object(s.g)(
                "#RewardCluster_All_Title",
                Object(s.g)("#RewardItemType_ProfileBundle_plural")
              ),
              "",
              {
                itemclass: [8],
                queryFilter: [3],
                excludedAppIDs: [B.Get().GetCurrentSeasonalAppID()],
              }
            ),
            I = e(
              Object(s.g)(
                "#RewardCluster_All_Title",
                Object(s.g)("#RewardItemType_ArtistProfile_plural")
              ),
              "",
              {
                itemclass: [8],
                queryFilter: [3],
                categoryTag: ["artist_profile"],
              }
            ),
            y = e(
              Object(s.g)("#RewardCluster_TabletopFest2021Profiles_Title"),
              void 0,
              {
                itemclass: [8],
                queryFilter: [3],
                categoryTag: ["tabletop_fest_2021"],
              }
            ),
            w = [
              {
                cluster: I,
                type: 2,
                strImage: M.a,
                bFullBleedImage: !0,
                linkedPage: { type: "custom", pageid: "artistprofiles" },
              },
              {
                cluster: r,
                type: 1,
                linkedPage: null,
                bHideHiddenItemCount: !0,
              },
              {
                cluster: u,
                type: 1,
                linkedPage: { type: "custom", pageid: "stickers" },
              },
              { cluster: i, type: 1 },
              { cluster: l, type: 1 },
              {
                cluster: c,
                type: 1,
                linkedPage: { type: "custom", pageid: "backgrounds" },
              },
              { cluster: p, type: 1 },
              {
                cluster: _,
                type: 1,
                linkedPage: { type: "custom", pageid: "emoticons" },
              },
            ],
            N = e(
              Object(s.g)(
                "#RewardCluster_NewFeatured_Title",
                Object(s.g)("#RewardCluster_Popular_RewardItems")
              ),
              void 0,
              { categoryTag: ["summer_2021_sale"], grouping: 2 }
            );
          w.unshift({ cluster: N, type: 1 });
          const j = [];
          let S;
          Object(d.b)(m.d.EREALM)
            ? j.push(a(1880140), a(1846860))
            : j.push(a(1902490), a(1446780), a(1880140)),
            (S = {
              type: "banner",
              title: Object(s.g)("#FeaturedBanner_ArtistProfiles_Headline"),
              description: Object(s.g)(
                "#FeaturedBanner_ArtistProfiles_Subhead"
              ),
              link_text: Object(s.g)(
                "#FeaturedBanner_ArtistProfiles_CallToAction"
              ),
              linked_page: v.b.LoyaltyArtistProfiles(),
              iconComponent: E.f,
            });
          const O = [],
            x = [j, w];
          for (let e = 0; e < Math.max(x[0].length, x[1].length); e++)
            0 == e && S && O.push(S),
              e < x[0].length && O.push({ type: "clusterview", view: x[0][e] }),
              e < x[1].length && O.push({ type: "clusterview", view: x[1][e] });
          n(new H(D, O));
          n(
            new U(
              "stickers",
              [{ cluster: u, type: 0 }],
              Object(s.g)("#ShopPageTitle_Stickers")
            )
          );
          n(
            new U(
              "emoticons",
              [{ cluster: _, type: 0 }],
              Object(s.g)("#ShopPageTitle_Emoticons")
            )
          ),
            n(new U("chateffects", [{ cluster: p, type: 0 }], A(12, !0)));
          const L = e(
              Object(s.g)("#RewardCluster_AnimatedProfileBackgrounds_Title"),
              Object(s.g)("#RewardCluster_Backgrounds_Subtitle"),
              { itemclass: [3], queryFilter: [1] }
            ),
            R = e(
              Object(s.g)(
                "#RewardCluster_AnimatedMiniProfileBackgrounds_Title"
              ),
              Object(s.g)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
              { itemclass: [13], queryFilter: [1] }
            ),
            k = e(
              Object(s.g)("#RewardCluster_StillProfileBackgrounds_Title"),
              Object(s.g)("#RewardCluster_Backgrounds_Subtitle"),
              { itemclass: [3], queryFilter: [2] }
            ),
            T = e(
              Object(s.g)("#RewardCluster_StillMiniProfileBackgrounds_Title"),
              Object(s.g)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
              { itemclass: [13], queryFilter: [2] }
            );
          n(
            new U(
              "backgrounds",
              [
                { cluster: L, type: 1 },
                { cluster: R, type: 1 },
                { cluster: k, type: 1 },
                { cluster: T, type: 1 },
              ],
              Object(s.g)("#ShopPageTitle_Backgrounds")
            )
          ),
            n(
              new U(
                "avatar",
                [
                  { cluster: g, type: 1 },
                  { cluster: f, type: 1 },
                ],
                Object(s.g)("#ShopPageTitle_Avatar")
              )
            ),
            n(
              new U(
                "keyboard",
                [{ cluster: h, type: 0 }],
                Object(s.g)("#ShopPageTitle_SteamDeckKeyboardSkin")
              )
            ),
            n(
              new U(
                "itembundles",
                [{ cluster: b, type: 0 }],
                Object(s.g)("#ShopPageTitle_ItemBundles"),
                Object(s.g)("#ShopPageTitle_ItemBundles_Subtitle")
              )
            );
          const z = [{ cluster: C, type: 0, bHomogeneous: !0 }];
          Date.now() > 16348356e5 && z.unshift({ cluster: y, type: 1 }),
            n(
              new U(
                "profilebundles",
                z,
                Object(s.g)("#ShopPageTitle_ProfileBundles"),
                Object(s.g)("#ShopPageTitle_ProfileBundles_Subtitle")
              )
            );
          n(
            new U(
              "artistprofiles",
              [{ cluster: I, type: 0, bHomogeneous: !0 }],
              Object(s.g)("#ShopPageTitle_ArtistProfiles"),
              Object(s.g)("#ShopPageTitle_ArtistProfiles_Subtitle")
            )
          ),
            this.BIsLoggedIn() &&
              Object(o.M)(
                () => !!B.Get().GetSortedGamesWithRewards().length
              ).then(() => {
                const e = new G(
                  Object(s.g)("#HeroCluster_YourGamesTitle"),
                  void 0,
                  {
                    get appid() {
                      return B.Get().GetSortedGamesWithRewards().slice(0, 10);
                    },
                    grouping: 2,
                  }
                );
                this.m_mapClusters.set(e.id, e);
                const t = {
                  type: 2,
                  linkedPage: { type: "custom", pageid: "games" },
                  cluster: e.id,
                  strImage: M.a,
                  bFullBleedImage: !0,
                };
                O.push({ type: "clusterview", view: t });
                const n = B.Get().GetSortedGamesWithRewards(),
                  r = (e) => {
                    const t = this.m_mapClusters.get(e);
                    return t && t instanceof F ? t.appid : null;
                  };
                let i = 0;
                for (const e of n) {
                  if (
                    -1 !=
                    O.findIndex(
                      (t) => "clusterview" === t.type && r(t.view.cluster) === e
                    )
                  )
                    continue;
                  const t = a(e),
                    n = j.length + 2;
                  if (
                    (O.splice(n + i * n, 0, { type: "clusterview", view: t }),
                    (i += 1),
                    i >= 3)
                  )
                    break;
                }
                this.m_mapPages.set(
                  P({ type: "custom", pageid: D }),
                  new H(D, O)
                );
              });
        }
      }
      function L(e) {
        const t = v.b.LoyaltyStore();
        switch (e.type) {
          case "app":
            return `${t}/app/${e.appid}${
              "number" == typeof e.clusterindex
                ? `/cluster/${e.clusterindex}`
                : ""
            }`;
          case "custom":
            return `${t}/c/${e.pageid}${
              "number" == typeof e.clusterindex
                ? `/cluster/${e.clusterindex}`
                : ""
            }`;
          default:
            return console.error(`Unknown page type ${e.type}`), t;
        }
      }
      function P(e) {
        return btoa(JSON.stringify(e));
      }
      function R(e, t) {
        return `${e.join("_")}__${k(t)}`;
      }
      function k(e) {
        if (!e) return "";
        const {
            appid: t,
            itemclass: a,
            rewardtype: n,
            grouping: r,
            queryFilter: i,
            categoryTag: o,
            excludedContentDescriptors: s,
          } = e,
          l = T(r);
        return [
          t ? [...t].sort().join("_") : "",
          a ? a.join("_") : "",
          n ? n.join("_") : "",
          l.sort,
          l.sort_descending ? "1" : "0",
          i ? i.join("_") : "",
          o ? o.join("_") : "",
          s ? s.join("_") : "",
        ].join("__");
      }
      function T(e) {
        const t = { sort: 1, sort_descending: !0 };
        switch (e) {
          case 1:
            (t.sort = 1), (t.sort_descending = !0);
            break;
          case 2:
            (t.sort = 2), (t.sort_descending = !1);
        }
        return t;
      }
      Object(n.b)([o.C.ref], B.prototype, "m_lPointsAvailable", void 0),
        Object(n.b)([o.C], B.prototype, "m_mapCouponPromos", void 0),
        Object(n.b)([o.C], B.prototype, "m_nAppIDFiltersInUseCount", void 0),
        Object(n.b)([o.C], B.prototype, "m_mapAppIDFilters", void 0),
        Object(n.b)([o.C], B.prototype, "m_strAppFilterText", void 0),
        Object(n.b)([o.C], B.prototype, "m_mapCouponDefinitons", void 0),
        Object(n.b)([o.C], B.prototype, "m_mapLoyaltyRewardDefs", void 0),
        Object(n.b)([o.C], B.prototype, "m_mapOwnedCommunityItems", void 0),
        Object(n.b)([o.C], B.prototype, "m_mapAppRewards", void 0),
        Object(n.b)([o.C], B.prototype, "m_seasonalBadgeDefinition", void 0),
        Object(n.b)([o.C], B.prototype, "m_goldenProfileDefinition", void 0),
        Object(n.b)([o.C], B.prototype, "m_goldenProfileConfigs", void 0),
        Object(n.b)([o.C], B.prototype, "m_rgSortedAppsWithRewards", void 0),
        Object(n.b)([o.C], B.prototype, "m_rgEligibleApps", void 0),
        Object(n.b)([o.C], B.prototype, "m_mapEligibleApps", void 0),
        Object(n.b)(
          [o.C],
          B.prototype,
          "m_rgProfileCustomizationsConfig",
          void 0
        ),
        Object(n.b)([o.C], B.prototype, "m_persona", void 0),
        Object(n.b)([o.C], B.prototype, "m_equippedItems", void 0),
        Object(n.b)([o.C], B.prototype, "m_rgPurchasedCustomizations", void 0),
        Object(n.b)([o.C], B.prototype, "m_rgUpgradedCustomizations", void 0),
        Object(n.b)([o.C], B.prototype, "m_unAwardPointsTransferred", void 0),
        Object(n.b)([u.b], B.prototype, "ShowLoginDialog", null);
      class G {
        constructor(e, t, a = {}) {
          (this.m_filter = a),
            (this.m_strTitle = e),
            (this.m_strSubtitle = t),
            (this.m_strId = R([], a));
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
        GetRewards(e, t, a) {
          const n = Z(this.m_filter, a);
          return B.Get().QueryRewardDefinitions(n, e, t);
        }
      }
      Object(n.b)([u.b], G.prototype, "GetRewards", null);
      class F {
        constructor(e, t, a) {
          (this.m_appid = e),
            (this.m_strSubtitle = t || ""),
            (this.m_additionalFilter = a || {}),
            j.a.GetAppInfo(this.m_appid),
            (this.m_strId = R([this.m_appid], this.m_additionalFilter));
        }
        get id() {
          return this.m_strId;
        }
        get appid() {
          return this.m_appid;
        }
        get title() {
          return j.a.GetAppInfo(this.m_appid).name;
        }
        get subtitle() {
          return this.m_strSubtitle;
        }
        GetRewards(e, t, a) {
          const n = Z({ appid: [this.m_appid] }, this.m_additionalFilter, a);
          return B.Get().QueryRewardDefinitions(n, e, t);
        }
      }
      Object(n.b)([u.b], F.prototype, "GetRewards", null);
      class z {
        constructor(e, t = "") {
          (this.m_appid = e),
            (this.m_strSubtitle = t),
            j.a.GetAppInfo(this.m_appid);
        }
        get params() {
          return { type: "app", appid: this.m_appid };
        }
        get title() {
          return j.a.GetAppInfo(this.m_appid).name;
        }
        get subtitle() {
          return this.m_strSubtitle;
        }
        get items() {
          let e = [];
          {
            let t = {
              type: "clusterview",
              view: {
                type: 1,
                cluster: {
                  id: R([this.m_appid], { rewardtype: [5] }),
                  title: Object(s.g)("#RewardItemType_Bundle_plural"),
                  subtitle: "",
                  GetRewards: (e, t, a) =>
                    B.Get().QueryRewardDefinitions(
                      Z({ appid: [this.m_appid], rewardtype: [5, 6] }, a),
                      e,
                      t
                    ),
                },
              },
            };
            e.push(t);
          }
          let t = [8, 15, 14, 13, 3, 11, 4, 16].map((e) => ({
            type: "clusterview",
            view: {
              type: 1,
              cluster: {
                id: R([this.m_appid], { itemclass: [e] }),
                title: A(e, !0),
                subtitle: "",
                GetRewards: (t, a, n) =>
                  B.Get().QueryRewardDefinitions(
                    Z({ appid: [this.m_appid], itemclass: [e] }, n),
                    t,
                    a
                  ),
              },
            },
          }));
          return (e = e.concat(t)), e;
        }
      }
      class H {
        constructor(e, t, a, n, r) {
          (this.m_pageid = e),
            (this.m_strTitle = a),
            (this.m_strSubtitle = n),
            (this.m_strHeaderImage = r),
            (this.m_rgPageItems = t);
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
        get headerImage() {
          return this.m_strHeaderImage;
        }
        get items() {
          return this.m_rgPageItems.map((e) =>
            (function (e) {
              switch (e.type) {
                case "banner":
                  return e;
                case "clusterview":
                  return {
                    type: "clusterview",
                    view: Object.assign(Object.assign({}, e.view), {
                      cluster: B.Get().GetClusterDescriptor(e.view.cluster),
                    }),
                  };
              }
            })(e)
          );
        }
      }
      class U extends H {
        constructor(e, t, a, n, r) {
          super(
            e,
            t.map((e) => ({ type: "clusterview", view: e })),
            a,
            n,
            r
          );
        }
      }
      class V {
        constructor(e, t, a) {
          (this.m_rgRequestParts = []),
            (this.m_fnMakeRequest = e),
            (this.m_fnJoinRequests = t),
            (this.m_fnSplitResponse = a);
        }
        Load(e) {
          this.m_rootPromise || this.QueueBatch();
          const t = this.m_rgRequestParts.push(e);
          return this.m_rootPromise.then((e) => e[t - 1]);
        }
        QueueBatch() {
          const e = this.m_rgRequestParts;
          this.m_rootPromise = Promise.resolve()
            .then(() => {
              const t = this.m_fnMakeRequest(this.m_fnJoinRequests(e));
              return this.Reset(), t;
            })
            .then((t) => this.m_fnSplitResponse(t, e));
        }
        Reset() {
          (this.m_rootPromise = void 0), (this.m_rgRequestParts = []);
        }
      }
      function Z(e, ...t) {
        return t && t.length
          ? [e, ...t].reduce((e, t) => {
              if (!t) return e;
              const a = Object.assign({}, e);
              return (
                t.appid &&
                  (a.appid && a.appid.length
                    ? (a.appid = a.appid.filter((e) => t.appid.includes(e)))
                    : (a.appid = t.appid)),
                "number" == typeof t.grouping &&
                  "number" != typeof e.grouping &&
                  (a.grouping = t.grouping),
                t.itemclass &&
                  (a.itemclass && a.itemclass.length
                    ? (a.itemclass = a.itemclass.filter((e) =>
                        t.itemclass.includes(e)
                      ))
                    : (a.itemclass = t.itemclass)),
                t.queryFilter &&
                  (a.queryFilter
                    ? a.queryFilter.push(
                        ...t.queryFilter.filter((e) =>
                          a.queryFilter.includes(e)
                        )
                      )
                    : (a.queryFilter = t.queryFilter)),
                t.categoryTag &&
                  (a.categoryTag
                    ? a.categoryTag.push(
                        ...t.categoryTag.filter((e) =>
                          a.categoryTag.includes(e)
                        )
                      )
                    : (a.categoryTag = t.categoryTag)),
                t.excludedContentDescriptors &&
                  (a.excludedContentDescriptors
                    ? a.excludedContentDescriptors.push(
                        ...t.excludedContentDescriptors.filter((e) =>
                          a.excludedContentDescriptors.includes(e)
                        )
                      )
                    : (a.excludedContentDescriptors =
                        t.excludedContentDescriptors)),
                a
              );
            })
          : e;
      }
      class W {
        constructor(e, t) {
          (this.m_fnRequest = e), (this.m_fnBuildRequestKey = t), this.Reset();
        }
        Reset() {
          (this.m_mapCache = o.C.map({}, { deep: !1 })),
            (this.m_mapInflightRequests = o.C.map());
        }
        Get(...e) {
          const t = this.m_fnBuildRequestKey(...e),
            a = this.m_mapCache,
            n = this.m_mapInflightRequests;
          if (a.has(t)) return a.get(t);
          n.get(t) ||
            (n.set(t, !0),
            this.m_fnRequest(...e).then((e) => {
              a.set(t, e), n.delete(t);
            }));
        }
        BLoading(...e) {
          const t = this.m_fnBuildRequestKey(...e);
          return !!this.m_mapInflightRequests.get(t);
        }
      }
      class Y {
        constructor() {
          this.m_bCanClaimFreeItem = !1;
        }
        static Get() {
          return (
            this.s_SaleItemRewardsStore ||
              (this.s_SaleItemRewardsStore = new Y()),
            this.s_SaleItemRewardsStore
          );
        }
        InitFreeItemReward(e) {
          (this.m_bCanClaimFreeItem = e.can_claim),
            (this.m_claimedFreeItemDef = e.reward_item),
            (this.m_rtNextClaimTime = e.next_claim_time),
            this.SetClaimTimer();
        }
        BCanClaimFreeSaleReward() {
          return !B.Get().BIsLoggedIn() || this.m_bCanClaimFreeItem;
        }
        GetCurrentSaleRewardAppID() {
          return 1880140;
        }
        GetClaimedSaleRewardItemDef() {
          return this.m_claimedFreeItemDef;
        }
        LoadCanClaimFreeSticker() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!B.Get().BIsLoggedIn()) return;
            const e = _.b.Init(g.m);
            let t = yield g.p.CanClaimItem(B.Get().GetServiceTransport(), e);
            1 == t.GetEResult()
              ? this.InitFreeItemReward(t.Body().toObject())
              : console.error(
                  "Error when calling SaleItemRewardsService.CanClaimItem: EResult=${msgResponse.GetEResult()}"
                );
          });
        }
        ClaimFreeSaleItem() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = { eResult: 2, strMessage: "" };
            if (!B.Get().BIsLoggedIn())
              return (
                (e = {
                  eResult: 21,
                  strMessage: Object(s.g)("#Redeem_SignIn"),
                }),
                e
              );
            const t = _.b.Init(g.n),
              a = yield g.p.ClaimItem(B.Get().GetServiceTransport(), t);
            return (
              (e.eResult = a.GetEResult()),
              1 == a.GetEResult()
                ? ((this.m_claimedFreeItemDef = a
                    .Body()
                    .reward_item()
                    .toObject()),
                  B.Get().GetCommunityItemInventory(
                    this.m_claimedFreeItemDef.appid
                  ),
                  (this.m_bCanClaimFreeItem = !1),
                  (this.m_rtNextClaimTime = a.Body().next_claim_time()),
                  this.SetClaimTimer())
                : (10 == a.GetEResult() &&
                    (e.strMessage = Object(s.g)("#SummerSale_Redeem_Busy")),
                  console.error(
                    `Error when calling SaleItemRewardsService.ClaimItem: EResult=${a.GetEResult()}`
                  )),
              e
            );
          });
        }
        GetNextClaimTime() {
          if (!this.m_rtNextClaimTime) return null;
          return new Date(1e3 * this.m_rtNextClaimTime);
        }
        SetClaimTimer() {
          if (this.m_claimTimer) return;
          if (!this.m_rtNextClaimTime) return;
          const e = Date.now();
          let t = new Date(1e3 * this.m_rtNextClaimTime);
          const a = Math.max(0, t.getTime() - e);
          this.m_claimTimer = window.setTimeout(
            () => {
              (this.m_claimTimer = void 0),
                Date.now() > t.getTime()
                  ? (this.m_bCanClaimFreeItem = !0)
                  : this.SetClaimTimer();
            },
            a > 3e5 ? a / 2 : a
          );
        }
      }
      Object(n.b)([o.C], Y.prototype, "m_bCanClaimFreeItem", void 0),
        Object(n.b)([o.C], Y.prototype, "m_claimedFreeItemDef", void 0),
        Object(n.b)([o.C], Y.prototype, "m_rtNextClaimTime", void 0);
    },
    px4M: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/patron_badge.png?v=valveisgoodatcaching";
    },
    qX6Y: function (e, t, a) {
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
    qY0t: function (e, t, a) {
      e.exports = {
        InlineContainer: "layout_InlineContainer_3nHer",
        RemoveOnEmpty: "layout_RemoveOnEmpty_1Y8hK",
      };
    },
    qf3a: function (e, t, a) {
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
    rKGf: function (e, t, a) {
      e.exports = {
        ItemContainer: "scrollabletabs_ItemContainer_25fHe",
        Accent: "scrollabletabs_Accent_1EEzv",
        Item: "scrollabletabs_Item_1cVR_",
        Active: "scrollabletabs_Active_O_UvE",
      };
    },
    reUc: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      }),
        a.d(t, "b", function () {
          return l;
        });
      var n = a("q1tI"),
        r = a.n(n),
        i = a("GbHM"),
        o = a("cMO7");
      const s = ({ src: e }) =>
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("div", {
              className: o.BackgroundFadeImage,
              style: { backgroundImage: `url(${e})` },
            }),
            r.a.createElement("div", {
              className: o.BackgroundFadeImageBlurred,
              style: { backgroundImage: `url(${e})` },
            }),
            r.a.createElement("div", { className: o.BackgroundFade })
          ),
        l = ({ theme: e }) =>
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("div", {
              className: Object(i.a)(o.BackgroundFadeTheme, e),
            }),
            r.a.createElement("div", {
              className: Object(i.a)(o.BackgroundFadeThemeBlurred, e),
            }),
            r.a.createElement("div", { className: o.BackgroundFade })
          );
    },
    sf1Z: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/csgoChat_128_defuse.png?v=valveisgoodatcaching";
    },
    t0PL: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("TyAF"),
        s = a("RV7a"),
        l = (a("1udA"), a("y0CV"));
      a("prdU");
      const c = Object(o.a)(function (e) {
        const {
            getItems: t,
            renderItem: a,
            children: o,
            style: c,
            cItemsPerPage: m,
            renderItemSkeleton: d,
          } = e,
          p = Object(n.c)(e, [
            "getItems",
            "renderItem",
            "children",
            "style",
            "cItemsPerPage",
            "renderItemSkeleton",
          ]),
          u = m || 20,
          [_, g] = Object(r.useState)(u),
          { rewards: f, bLoadingMore: h } = t(0, _),
          b = f.map(a);
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            s.c,
            Object.assign(
              { verticalSpacing: "large", "flow-children": "grid" },
              p
            ),
            b,
            h &&
              d &&
              (function (e, t) {
                const a = [];
                for (let n = 0; n < t; n++)
                  a.push(i.a.createElement("div", { key: n }, e()));
                return a;
              })(d, u),
            i.a.createElement(l.a, {
              trigger: "repeated",
              onVisibilityChange: (e) => e && g(_ + u),
            })
          )
        );
      });
    },
    uOv9: function (e, t, a) {
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
    "vN/p": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return y;
      }),
        a.d(t, "b", function () {
          return w;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("TyAF"),
        s = a("FKEV"),
        l = a("prdU"),
        c = a("/Q1a"),
        m = a("GXif"),
        d = a("ehaW"),
        p = a("RV7a"),
        u = (a("Nr4G"), a("1udA"), a("mw7S")),
        _ = a("qf3a"),
        g = a("StxQ"),
        f = a("GbHM"),
        h = a("cOvF"),
        b = a("reUc"),
        C = a("4DCj");
      const I = i.a.createContext(!1);
      function y(e) {
        return i.a.createElement(I.Provider, { value: !0 }, e.children);
      }
      const w = Object(o.a)((e) => {
          const t = Object(r.useContext)(I),
            a = (function (e) {
              var { definition: t, theme: a } = e,
                r = Object(n.c)(e, ["definition", "theme"]);
              const { icon_url: i, name: o } = s.a.GetAppInfo(t.appid),
                c = l.b.Get().BRewardOwnedByUser(t),
                d = t.community_item_data.item_title,
                p = l.b.Get().GetBundleOfferForUser(t);
              return Object.assign(
                {
                  cost: parseInt(t.point_cost),
                  name: d,
                  desc: Object(m.g)("#RewardItemType_ProfileBundle"),
                  attributes: [],
                  appIcon: i,
                  appName: o,
                  bundle: p,
                  definition: t,
                  bOwned: c,
                },
                r
              );
            })(e);
          return t
            ? i.a.createElement(E, Object.assign({}, a))
            : i.a.createElement(M, Object.assign({}, a));
        }),
        M = Object(o.a)((e) => {
          const {
              appName: t,
              appIcon: a,
              bundle: r,
              definition: o,
              cost: s,
              bOwned: l,
              name: c,
              desc: m,
              attributes: p,
              className: _,
              style: g,
            } = e,
            f = Object(n.c)(e, [
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
            b = o.community_item_data.item_title;
          return i.a.createElement(
            d.a,
            Object.assign(
              {
                name: b,
                cost: s,
                attributes: p,
                appIcon: a,
                iconComponent: h.y,
                desc: m,
                className: _,
              },
              f
            ),
            i.a.createElement("img", {
              src: Object(u.b)(o),
              style: { width: "100%", height: "100%" },
            })
          );
        }),
        E = Object(o.a)((e) => {
          const {
              appName: t,
              appIcon: a,
              bundle: r,
              definition: o,
              cost: s,
              bOwned: l,
              name: c,
              desc: m,
              attributes: d,
              className: u,
              style: g,
              onClick: h,
            } = e,
            I = Object(n.c)(e, [
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
              "onClick",
            ]),
            y = o.community_item_data.item_title,
            w = o.community_item_data.profile_theme_id;
          return i.a.createElement(
            p.e,
            Object.assign(
              {
                display: "flex",
                flexDirection: "column",
                className: Object(f.a)(_.ProfileBundleContainer, u),
                style: Object.assign(Object.assign({}, g), { width: "524px" }),
                onActivate: h,
              },
              I
            ),
            a && i.a.createElement("img", { src: a, className: _.AppIcon }),
            i.a.createElement(
              p.a,
              {
                flex: "1",
                style: {
                  width: "524px",
                  height: "200px",
                  position: "relative",
                  alignSelf: "center",
                },
              },
              w && i.a.createElement(b.b, { theme: C[`${w}Theme`] }),
              i.a.createElement(j, { items: r.items, offer: r })
            ),
            i.a.createElement(v, { label: y, cost: s, bOwned: l })
          );
        }),
        v = ({ cost: e, label: t, bOwned: a }) =>
          i.a.createElement(
            p.a,
            {
              padding: "small",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              className: _.ProfileBundleFooter,
              title: t,
            },
            i.a.createElement("div", { className: _.ProfileBundleName }, t),
            a
              ? i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    "span",
                    { className: _.AlreadyOwned },
                    Object(m.g)("#Redeem_BundleItemOwned")
                  ),
                  i.a.createElement(h.j, { className: _.CheckmarkCircle })
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(g.a, { amount: e })
                )
          );
      function N(e, t) {
        const a = e.filter((e) => e.community_item_class == t).slice(0, 1);
        return 1 == a.length ? a[0] : null;
      }
      const j = Object(o.a)((e) => {
          const { offer: t, items: a } = e,
            n = N(a, 15),
            r = N(a, 14),
            o = N(a, 13),
            s = N(a, 3);
          return i.a.createElement(
            "div",
            { style: { position: "relative" }, className: _.ItemHand },
            n &&
              i.a.createElement(S, { item: n, offer: t, className: _.Avatar }),
            r &&
              i.a.createElement(S, {
                item: r,
                offer: t,
                className: _.AvatarFrame,
              }),
            o &&
              i.a.createElement(S, {
                item: o,
                offer: t,
                className: _.MiniProfileBackground,
              }),
            s &&
              i.a.createElement(S, {
                item: s,
                offer: t,
                className: _.ProfileBackground,
              })
          );
        }),
        S = Object(o.a)((e) => {
          const { offer: t, item: a, className: r } = e,
            o = Object(n.c)(e, ["offer", "item", "className"]),
            s = 14 == a.community_item_class;
          return i.a.createElement(
            p.a,
            Object.assign(
              {
                padding: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              o,
              { className: Object(f.a)(r, _.ItemCard), key: a.defid }
            ),
            s &&
              i.a.createElement("img", {
                className: _.DefaultAvatarImage,
                src:
                  c.d.MEDIA_CDN_COMMUNITY_URL +
                  "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg",
              }),
            i.a.createElement("img", {
              src: Object(u.b)(a),
              className: _.ItemCardImage,
              style: s ? { zIndex: 1 } : void 0,
            })
          );
        });
    },
    xH93: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return r;
      }),
        a.d(t, "a", function () {
          return i;
        });
      var n = a("/Q1a");
      const r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function i(e, t) {
        let a = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = r),
          44 == e.length && ((a = e.substr(-4)), (e = e.substr(0, 40)));
        let i = n.d.AVATAR_BASE_URL;
        return (
          i ||
            ((i = n.d.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (i += e.substr(0, 2) + "/")),
          (i += e),
          t && "small" != t && (i += "_" + t),
          (i += a),
          i
        );
      }
    },
    y0CV: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a("rSrx"),
        o = a("hCpY");
      class s extends r.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = r.createRef()),
            (this.m_elTracked = null),
            (this.m_bPreviouslyIntersecting = !1);
        }
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
        }
        GetBoundingClientRect() {
          return this.m_refElement.current
            ? this.m_refElement.current.getBoundingClientRect()
            : null;
        }
        DestroyObserver() {
          this.m_observer &&
            (this.m_observer.disconnect(),
            (this.m_observer = null),
            (this.m_elTracked = null));
        }
        componentWillUnmount() {
          this.DestroyObserver();
        }
        componentDidMount() {
          this.UpdateObserver(null);
        }
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            e.rootMargin != this.m_observer.rootMargin &&
            this.DestroyObserver();
          let t = this.m_refElement.current;
          if (
            (this.m_observer &&
              t != this.m_elTracked &&
              (this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              (this.m_observer = new IntersectionObserver(
                this.OnIntersection,
                e
              ));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return i.l(e, (e) => {
            const t = this.props.bHorizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(s.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, t) {
          let a = !1;
          for (const t of e)
            if (t.isIntersecting) {
              a = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != a &&
            ((this.m_bPreviouslyIntersecting = a),
            this.props.onVisibilityChange && this.props.onVisibilityChange(a),
            a && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let e = this.props,
            {
              onVisibilityChange: t,
              rootMargin: a,
              trigger: i,
              bHorizontal: o,
            } = e,
            s = Object(n.c)(e, [
              "onVisibilityChange",
              "rootMargin",
              "trigger",
              "bHorizontal",
            ]);
          return r.createElement(
            "div",
            Object.assign({ ref: this.m_refElement }, s),
            this.props.children
          );
        }
      }
      Object(n.b)([o.b], s.prototype, "OnIntersection", null);
    },
    ywEf: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_16.svg?v=valveisgoodatcaching";
    },
    zaw7: function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjEyMiIgdmlld0JveD0iMCAwIDExOSAxMjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNTkuNSAxOS41NDM3QzU1LjkzIDE5LjU0MzcgNTMuNTUgMTcuMTc0OCA1My41NSAxMy42MjE0VjUuOTIyMzNDNTMuNTUgMi4zNjg5MyA1NS45MyAwIDU5LjUgMEM2My4wNyAwIDY1LjQ1IDIuMzY4OTMgNjUuNDUgNS45MjIzM1YxMy42MjE0QzY1LjQ1IDE2LjU4MjUgNjMuMDcgMTkuNTQzNyA1OS41IDE5LjU0MzdaTTczLjc4IDExNi4wNzhDNzMuNzggMTEyLjUyNCA3MS40IDExMC4xNTUgNjcuODMgMTEwLjE1NUg1MS4xN0M0Ny42IDExMC4xNTUgNDUuMjIgMTEyLjUyNCA0NS4yMiAxMTYuMDc4QzQ1LjIyIDExOS42MzEgNDcuNiAxMjIgNTEuMTcgMTIySDY3LjgzQzcxLjQgMTIyIDczLjc4IDExOS42MzEgNzMuNzggMTE2LjA3OFpNMzIuNzI1IDI5LjAxOTRDMzUuMTA1IDI2LjY1MDUgMzUuMTA1IDIzLjA5NzEgMzIuNzI1IDIwLjcyODJMMjcuMzcgMTUuMzk4MUMyNC45OSAxMy4wMjkxIDIxLjQyIDEzLjAyOTEgMTkuMDQgMTUuMzk4MUMxNi42NiAxNy43NjcgMTYuNjYgMjEuMzIwNCAxOS4wNCAyMy42ODkzTDI0LjM5NSAyOS4wMTk0QzI2Ljc3NSAzMS4zODgzIDMwLjM0NSAzMS4zODgzIDMyLjcyNSAyOS4wMTk0Wk05NC42MDUgMjkuMDE5NEw5OS45NiAyMy42ODkzQzEwMi4zNCAyMS4zMjA0IDEwMi4zNCAxNy43NjcgOTkuOTYgMTUuMzk4MUM5Ny41OCAxMy4wMjkxIDk0LjAxIDEzLjAyOTEgOTEuNjMgMTUuMzk4MUw4Ni4yNzUgMjAuNzI4MkM4My44OTUgMjMuMDk3MSA4My44OTUgMjYuNjUwNSA4Ni4yNzUgMjkuMDE5NEM4OC4wNiAzMS4zODgzIDkyLjIyNSAzMS4zODgzIDk0LjYwNSAyOS4wMTk0Wk0xMTkgNTUuMDc3N0MxMTkgNTEuNTI0MyAxMTYuNjIgNDkuMTU1MyAxMTMuMDUgNDkuMTU1M0gxMDUuMzE1QzEwMS43NDUgNDkuMTU1MyA5OS4zNjUgNTEuNTI0MyA5OS4zNjUgNTUuMDc3N0M5OS4zNjUgNTguNjMxMSAxMDEuNzQ1IDYxIDEwNS4zMTUgNjFIMTEzLjA1QzExNi42MiA2MSAxMTkgNTguNjMxMSAxMTkgNTUuMDc3N1pNMTkuNjM1IDU1LjA3NzdDMTkuNjM1IDUxLjUyNDMgMTcuMjU1IDQ5LjE1NTMgMTMuNjg1IDQ5LjE1NTNINS45NUMyLjM4IDQ5LjE1NTMgMCA1MS41MjQzIDAgNTUuMDc3N0MwIDU4LjYzMTEgMi4zOCA2MSA1Ljk1IDYxSDEzLjY4NUMxNy4yNTUgNjEgMTkuNjM1IDU4LjYzMTEgMTkuNjM1IDU1LjA3NzdaTTc5LjczIDM0Ljk0MTdDNzMuNzggMzAuMjAzOSA2Ny4yMzUgMjcuODM0OSA1OS41IDI3LjgzNDlDNTcuMTIgMjcuODM0OSA1NC4xNDUgMjguNDI3MiA1MS43NjUgMjkuMDE5NEMzNC41MSAzMy4xNjUgMjMuOCA1MC4zMzk4IDI4LjU2IDY4LjEwNjhDMzAuOTQgNzYuOTkwMyAzNi4yOTUgODQuMDk3MSA0NC4wMyA4OC4yNDI3Vjk2LjUzNEM0NC4wMyAxMDAuMDg3IDQ2LjQxIDEwMi40NTYgNDkuOTggMTAyLjQ1Nkg2OS42MTVDNzMuMTg1IDEwMi40NTYgNzUuNTY1IDEwMC4wODcgNzUuNTY1IDk2LjUzNFY4OC44MzQ5QzkxLjAzNSA3OS45NTE1IDk2Ljk4NSA2MC40MDc4IDg4LjA2IDQ1LjAwOTdDODUuNjggNDAuODY0MSA4My4zIDM3LjMxMDcgNzkuNzMgMzQuOTQxN1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiIGZpbGwtb3BhY2l0eT0iMC44NSIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1OS41IiB5MT0iMCIgeDI9IjU5LjUiIHkyPSIxMjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
  },
]);

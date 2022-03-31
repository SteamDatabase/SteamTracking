/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    "++az": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/Entering_vr.gif?v=valveisgoodatcaching";
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
        o = a("exH9"),
        s = a("qbgq"),
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
      a.d(t, "e", function () {
        return Ie;
      }),
        a.d(t, "c", function () {
          return ye;
        }),
        a.d(t, "d", function () {
          return we;
        }),
        a.d(t, "b", function () {
          return Me;
        }),
        a.d(t, "a", function () {
          return Xe;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("qDk6"),
        s = a("2vnA"),
        l = a("TyAF"),
        c = a("opsS"),
        m = a("55Ip"),
        d = a("oydz"),
        p = a("Jqb/"),
        u = a("TLQK"),
        _ = a("prdU"),
        f = (a("li7h"), a("OU48"), a("ka0M")),
        g = a("X3Ds"),
        h = a("lkRc"),
        b = a("FwEH"),
        C = a("pQ8y"),
        I = a("r64O"),
        y = a("StxQ"),
        w = a("n4wG"),
        M = a("1fPh"),
        E = (a("mgoM"), a("6Y59")),
        N = a("exH9");
      let v = { success: !0, result: 1 };
      class S {
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
            universe: h.d.EUNIVERSE,
            accountid: h.k.accountid,
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
      let j = new (class {
        constructor() {
          (this.m_connection = new S()),
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
            () => v,
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
            !h.k.logged_in ||
            h.k.accountid == this.m_connection.ClientInfo.unAccountID
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
                      1 === e.success ? v : this.FailureResult(e.success)
                    )
                : { success: !1, result: 19, account_mismatch: !0 }
            )
            .catch(() => this.FailureResult());
        }
      })();
      window.ClientConnectionAPI = j;
      var A = a("Uy/A"),
        O = a.n(A),
        D = a("bS9Q"),
        x = a("YgaH"),
        P = a("POwH"),
        B = a.n(P),
        L = a("YyVH");
      function R(e, t, a) {
        return h.d.COMMUNITY_CDN_ASSET_URL + e + "/roomeffects/" + t + "/" + a;
      }
      class k extends r.Component {
        constructor(e) {
          super(e), (this.m_strSaleId = this.props.sale);
        }
        getAsset(e) {
          return R(this.m_strSaleId, this.props.effect.name, e);
        }
      }
      function T(e, t) {
        !(function (e) {
          const t = Object(r.useRef)({ bSet: !1 });
          t.current.bSet || (t.current = { bSet: !0, value: e() }),
            t.current.value;
        })(() => setTimeout(e, t));
      }
      const G = ({ msDelay: e, children: t }) =>
        (function (e) {
          const [t, a] = Object(r.useState)(!1);
          return T(() => a(!0), e), t;
        })(e)
          ? i.a.createElement(i.a.Fragment, null, t)
          : null;
      class z extends i.a.Component {
        constructor(e) {
          super(e),
            (this.m_refContainer = i.a.createRef()),
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
          Object(L.b)(0, 70), Object(L.b)(0, 70);
          for (let t = 0; t < 1; t++)
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
        }
        CalcHueRotation() {
          return "lny2020" == this.props.sale
            ? 360 + Object(L.b)(-30, 10)
            : Object(L.b)(0, 360);
        }
        AddCluster(e) {
          let t = Object(L.b)(-5, 50),
            a = Object(L.b)(-10, 50),
            n = this.CalcHueRotation();
          this.m_rgFireworks.push({
            x: `${t}%`,
            y: `${a}%`,
            nHueRotation: n,
            nDelay: this.m_nCurrentDelay,
            flScale: e,
            burst: H,
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
                burst: U,
              }),
              (l += 2.09);
          }
        }
        RenderLong(e) {
          const t = Object(L.b)(20, 60),
            a = Object(L.b)(-5, 50),
            n = this.CalcHueRotation();
          this.m_rgFireworks.push({
            x: `${t}%`,
            y: `${a}%`,
            nHueRotation: n,
            nDelay: this.m_nCurrentDelay,
            flScale: e,
            burst: F,
          });
        }
        componentDidMount() {
          if (!this.m_refContainer.current || this.m_rgFireworks.length > 0)
            return;
          let e = this.m_refContainer.current,
            t = e.offsetWidth,
            a = e.offsetHeight,
            n = Object(L.c)(t, 400, 1080, 0.5, 2);
          (n = Object(L.a)(n, 0.5, 2)),
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
                  i.a.createElement(t.burst, {
                    key: n,
                    style: r,
                    msDelay: t.nDelay,
                    scale: t.flScale,
                    sale: this.props.sale,
                  })
                );
              }),
            i.a.createElement(
              "div",
              { ref: this.m_refContainer, className: B.a.FireworkContainer },
              e
            )
          );
        }
      }
      function F(e) {
        const t = R(e.sale, "fireworks", "long_sheet.png");
        let a = e.style;
        return (
          (a.backgroundImage = `url(${t})`),
          (a.width = 256),
          (a.height = 256),
          (a.animation = `${B.a.fireworkLongX} 0.2s steps(9) 10, ${B.a.fireworkLongY} 2.0s steps(10) forwards`),
          (a.transformOrigin = "0 0"),
          (a.transform = `scale( ${e.scale} )`),
          i.a.createElement(
            G,
            { msDelay: e.msDelay },
            i.a.createElement("div", {
              style: e.style,
              className: B.a.FireworkPNG,
            })
          )
        );
      }
      function H(e) {
        const t = R(e.sale, "fireworks", "big_sheet.png");
        let a = e.style;
        return (
          (a.backgroundImage = `url(${t})`),
          (a.width = 256),
          (a.height = 256),
          (a.animation = `${B.a.fireworkBigX} 0.2s steps(9) 4, ${B.a.fireworkBigY} 0.8s steps(4) forwards`),
          (a.transformOrigin = "0 0"),
          (a.transform = `scale( ${e.scale} )`),
          i.a.createElement(
            G,
            { msDelay: e.msDelay },
            i.a.createElement("div", {
              style: e.style,
              className: B.a.FireworkPNG,
            })
          )
        );
      }
      function U(e) {
        const t = R(e.sale, "fireworks", "small_sheet.png");
        let a = e.style;
        return (
          (a.backgroundImage = `url(${t})`),
          (a.width = 256),
          (a.height = 256),
          (a.animation = `${B.a.fireworkSmallX} 0.15s steps(10) 6, ${B.a.fireworkSmallY} 0.9s steps(6) forwards`),
          (a.transformOrigin = "0 0"),
          (a.transform = `scale( ${e.scale / 2} )`),
          i.a.createElement(
            G,
            { msDelay: e.msDelay },
            i.a.createElement("div", {
              style: e.style,
              className: B.a.FireworkPNG,
            })
          )
        );
      }
      var V = a("oet2");
      class Z extends k {
        constructor(e) {
          super(e),
            (this.m_x = L.b(0, 70) + "%"),
            (this.m_y = L.b(0, 70) + "%"),
            (this.m_nRotate = Math.floor(90 * Math.random()) - 45),
            (this.m_splatRots = [
              360 * Math.random(),
              360 * Math.random(),
              360 * Math.random(),
            ]),
            (this.m_nPathAnimation = L.b(1, 6)),
            (this.m_nKeyID = Z.sm_nUnique++),
            (this.m_strSaleId = "winter2019");
        }
        fragment(e, ...t) {
          let a = t.map((e) => B.a[e]);
          return (
            a.push(B.a.snowball_fragment),
            r.createElement("img", {
              src: this.getAsset(e),
              className: a.join(" "),
            })
          );
        }
        Snowball(e, t, ...a) {
          let n = e < 0 ? B.a.SnowballImageCW : B.a.SnowballImageCCW;
          e > -5 && e < 5 && (n = "");
          let i = a.map((e) => B.a[e]);
          return (
            i.push(B.a.snowball_fragment),
            r.createElement(
              "div",
              { style: { display: "inline-block" }, className: i.join(" ") },
              r.createElement("img", {
                style: { transform: "rotation( 360deg )" },
                className: `${B.a.SnowballImage} ${n}`,
                src: this.getAsset(t),
              })
            )
          );
        }
        residue() {
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "div",
              { style: { transform: `rotate(${this.m_splatRots[0]}deg)` } },
              this.fragment("splat1.png", "snowball-residue")
            ),
            r.createElement(
              "div",
              { style: { transform: `rotate(${this.m_splatRots[1]}deg)` } },
              this.fragment("splat2.png", "snowball-residue")
            ),
            r.createElement(
              "div",
              { style: { transform: `rotate(${this.m_splatRots[2]}deg)` } },
              this.fragment("splat3.png", "snowball-residue")
            )
          );
        }
        render() {
          let e = `snowball-path-${this.m_nPathAnimation}`,
            t = { animationName: B.a[e] };
          return r.createElement(
            r.Fragment,
            { key: `${this.m_nKeyID}` },
            r.createElement(
              "div",
              { className: B.a["snowball-path"], style: t },
              r.createElement(
                "div",
                {
                  className: B.a["snowball-container"],
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
      Z.sm_nUnique = 0;
      var W = a("Kw0F");
      function Q(e) {
        const t = e.data,
          a = R(e.sale, e.effect.name, `${t.strImage}.png`);
        let n = null;
        if (t.SOverlay) {
          const a = t.SOverlay
              ? R(e.sale, e.effect.name, `${t.SOverlay.strImage}.png`)
              : null,
            i = { animationDuration: `${t.SOverlay.nDuration}s` };
          n = r.createElement("img", {
            src: a,
            className: B.a[t.SOverlay.strClass],
            style: i,
          });
        }
        let i = {
          animationDuration: `${t.nDuration}s`,
          animationName: B.a[t.strAnimation],
          marginLeft: `${t.nOffset}%`,
        };
        return r.createElement(
          "div",
          { style: i, className: B.a.balloons },
          r.createElement("img", {
            src: a,
            style: { maxWidth: "100%", position: "absolute" },
          }),
          n
        );
      }
      class Y extends k {
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
          W.f(this.m_rgImages), this.GenerateBalloons();
        }
        GetNextImage() {
          let e = this.m_rgImages[this.m_nNextImage % this.m_rgImages.length];
          return this.m_nNextImage++, e;
        }
        GenerateDuration() {
          return (
            parseFloat(B.a.balloonsDurationS) +
            parseFloat(B.a.balloonsDurationJitterS) * Math.random()
          );
        }
        GenerateBalloons() {
          let e = ["balloon_small_1", "balloon_small_2", "balloon_small_3"],
            t = ["balloon_big_1", "balloon_big_2"];
          this.m_rgBalloons = [];
          for (let t of e) {
            let e = L.b(-10, 10);
            this.m_rgBalloons.push(this.GenerateSingleBalloon(t, e));
          }
          let a = [70, 20];
          W.f(a);
          let n = 20 == a[1];
          for (let e of t) {
            let t = L.b(-10, 10) + a.pop();
            this.m_rgBalloons.push(this.GenerateSingleBalloon(e, t));
          }
          let r = ["balloon_move_left", "balloon_move_right"][L.b(0, 1)];
          n && (r = "balloon_move_left");
          let i = L.b(-10, 10);
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
          return r.createElement(
            r.Fragment,
            null,
            this.m_rgBalloons.map((e, t) =>
              r.createElement(Q, {
                key: `${t}`,
                data: e,
                effect: this.props.effect,
                sale: this.m_strSaleId,
              })
            )
          );
        }
      }
      class q {
        constructor(e) {
          this.m_seed = e;
        }
        next() {
          const e = 1e3 * Math.sin(this.m_seed++);
          return e - Math.floor(e);
        }
      }
      function J(e) {
        const t = new q(e);
        let a = 0.8 * t.next() + 0.5;
        const n = 10 * (t.next() + e) + 10 + "px",
          i = {
            opacity: a,
            width: n,
            height: n,
            margin: 30 * t.next() + 15 + "px",
            filter: `hue-rotate(${90 * t.next() - 30}deg) saturate(100%)`,
          },
          o = 1 + Math.floor(5 * t.next()),
          s =
            h.d.COMMUNITY_CDN_ASSET_URL +
            `winter2019/roomeffects/96px/flake_${o}.png`;
        return r.createElement("img", { style: i, src: s });
      }
      const X = parseInt(B.a.balloonsDurationMaxMs),
        K = parseInt(B.a.snowballDurationMs);
      function $(e, t) {
        return () => {
          const a =
            h.d.COMMUNITY_CDN_ASSET_URL + t + "/roomeffects/96px/" + e + ".png";
          return r.createElement("img", { style: { width: "100%" }, src: a });
        };
      }
      function ee(e, t, a, n) {
        return {
          timeout: a,
          renderButton: $(e, t),
          renderEffectIcon: $(e, t),
          buttonToken: "#ChatEntryButton_Send" + D.e(e),
          locToken: "#ChatRoom_RoomEffect" + D.e(e),
          render: n,
        };
      }
      function te(e, t, a) {
        return ee(e, "winter2019", t, a);
      }
      const ae = {
        lny2020_lanterns: ee("lny2020_lanterns", "lny2020", X, (e) =>
          r.createElement(Y, { effect: e, sale: "lny2020" })
        ),
        lny2020_firework: ee("lny2020_firework", "lny2020", 7e3, () =>
          r.createElement(z, { sale: "lny2020" })
        ),
        lny2020_confetti: ee("lny2020_confetti", "lny2020", V.c, () =>
          r.createElement(V.a, { eType: V.b.LNY2020 })
        ),
        snowball: te("snowball", K, (e) =>
          r.createElement(Z, { effect: e, sale: "winter2019" })
        ),
        balloons: te("balloons", X, (e) =>
          r.createElement(Y, { effect: e, sale: "winter2019" })
        ),
        confetti: te("confetti", V.c, () =>
          r.createElement(V.a, { eType: V.b.Default })
        ),
        goldfetti: te("goldfetti", V.c, () =>
          r.createElement(V.a, { eType: V.b.Gold })
        ),
        firework: te("firework", 7e3, () =>
          r.createElement(z, { sale: "winter2019" })
        ),
        snow: te("snow", 1e4, function (e) {
          const t = [],
            a = new q(e.timestamp);
          for (let n = 0; n < 150; n++) {
            const i = a.next(),
              o = {
                left: 100 * a.next() + "%",
                animationDuration: 3 * (1 - i) + 4 + "s",
                animationDelay: `${i + 4 * a.next()}s`,
              };
            t.push(
              r.createElement(
                "div",
                {
                  key: e.timestamp + "_" + n,
                  style: o,
                  className: Object(N.a)(
                    B.a.Snowflake,
                    B.a["Snowflake-" + (n % 20)]
                  ),
                },
                J(i),
                J(i + 1)
              )
            );
          }
          return r.createElement(r.Fragment, null, " ", t, " ");
        }),
      };
      let ne = class extends r.Component {
        render() {
          return r.createElement(
            "div",
            { className: B.a["animation-container"] },
            this.props.effectManager.m_rgRunningEffects.map((e) =>
              r.createElement(r.Fragment, { key: e.timestamp }, e.render())
            )
          );
        }
      };
      ne = Object(n.b)([l.a], ne);
      var re = a("cOvF"),
        ie = a("Gpul"),
        oe = (a("jUCX"), a("oFam"), a("qD+2")),
        se = a("0OaU"),
        le = a("ehaW"),
        ce = a("9+KW");
      function me(e) {
        const { link: t, className: a } = e,
          r = Object(n.c)(e, ["link", "className"]),
          [o, s] = i.a.useState(!1);
        return i.a.createElement(
          "div",
          {
            title: Object(u.f)("#ToolTip_CopyLinkToClipboard"),
            className: Object(N.a)(ce.Button, a),
            onClick: () =>
              (() => {
                const e = document.createElement("input");
                (e.value = t),
                  (e.className = ce.HiddenInput),
                  document.body.appendChild(e),
                  e.select(),
                  e.ownerDocument.execCommand("copy"),
                  document.body.removeChild(e),
                  s(!0);
              })(),
          },
          i.a.createElement(
            re.t,
            Object.assign({}, r, {
              className: Object(N.a)(ce.Icon),
              "data-flash": o ? 1 : 0,
              onAnimationEnd: () => s(!1),
            })
          )
        );
      }
      var de = a("qbgq"),
        pe = a("26vX");
      function ue(e) {
        return (t) => {
          var { className: a } = t,
            r = Object(n.c)(t, ["className"]);
          return i.a.createElement(
            de.a,
            Object.assign({ className: Object(N.a)(e, a) }, r)
          );
        };
      }
      const _e = ue(pe.GrayButton),
        fe = ue(pe.BlueButton),
        ge = ue(pe.GreenButton);
      var he = a("mw7S"),
        be = a("RV7a"),
        Ce = (a("sOw0"), a("Jz9t"));
      function Ie(e, t, a, n) {
        const r = {
          type: 1,
          rewardDefinition: t,
          itemLevel: a,
          desiredItemLevel: a,
        };
        Object(f.b)(
          i.a.createElement(ve, { definition: r, saleitem: n }),
          e ? Object(g.o)(e) : window
        );
      }
      function ye(e, t, a, n) {
        const r = {
          type: 3,
          profileCustomizationType: t,
          itemCount: a,
          itemLevel: n,
          desiredItemLevel: n,
        };
        Object(f.b)(
          i.a.createElement(ve, { definition: r }),
          e ? Object(g.o)(e) : window
        );
      }
      function we(e, t, a, n) {
        const r = {
          type: 2,
          profileCustomizationType: t,
          itemLevel: a,
          desiredItemLevel: n,
        };
        Object(f.b)(
          i.a.createElement(ve, { definition: r }),
          e ? Object(g.o)(e) : window
        );
      }
      function Me(e, t) {
        const a = { type: 1, rewardDefinition: t };
        Object(f.b)(
          i.a.createElement(Se, { definition: a }),
          e ? Object(g.o)(e) : window
        );
      }
      function Ee(e) {
        switch (e.type) {
          case 1:
            return _.b.Get().BCanRedeemPointsForItem(e.rewardDefinition);
          case 2:
            return _.b
              .Get()
              .BCanRedeemPointsForProfileShowcaseUpgrade(
                e.profileCustomizationType,
                e.itemLevel
              );
          case 3:
            return _.b
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
            if (1 == e.rewardDefinition.community_item_class)
              return _.b.Get().GetCostToLevelSeasonalBadge(e.itemLevel || 0);
            if (5 == e.rewardDefinition.type || 6 == e.rewardDefinition.type) {
              return _.b.Get().GetBundleOfferForUser(e.rewardDefinition)
                .point_cost;
            }
            return parseInt(e.rewardDefinition.point_cost);
          case 2:
            return _.b.Get().GetUpgradableProfileShowcaseCost();
          case 3:
            return _.b.Get().GetPurchasableProfileShowcaseSlotCost();
        }
        return 0;
      }
      let ve = class extends i.a.Component {
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
            const e = this.m_mutableObjDefinition.rewardDefinition
              .bundle_defids;
            Object(s.M)(
              () =>
                !e ||
                0 == e.length ||
                _.b.Get().GetRewardDefinitions(...e).length > 0
            )
              .then(() => {
                let t = [];
                if (0 != (null == e ? void 0 : e.length)) {
                  t = _.b
                    .Get()
                    .GetRewardDefinitions(...e)
                    .map((e) => e.appid);
                } else
                  t.push(this.m_mutableObjDefinition.rewardDefinition.appid);
                let a = Array.from(new Set(t));
                return Promise.all(
                  a.map((e) => _.b.Get().EnsureCommunityItemInventoryLoaded(e))
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
              : _.b.Get().BIsLoggedIn() && !this.BCanRedeemPointsForItem()
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
          return this.props.saleitem && _.b.Get().BIsSaleActive();
        }
        BCanRedeemPointsForItem() {
          return Ee(this.props.definition);
        }
        BSkipToCantAfford() {
          if (
            2 == this.props.definition.type ||
            3 == this.props.definition.type
          )
            return _.b.Get().BIsLoggedIn() && !this.BCanAffordItem();
          const e =
            _.b
              .Get()
              .BRewardOwnedByUser(this.props.definition.rewardDefinition) &&
            2 != this.props.definition.rewardDefinition.type;
          return _.b.Get().BIsLoggedIn() && !e && !this.BCanAffordItem();
        }
        BAlreadyEquipped() {
          return (function (e) {
            switch (e.type) {
              case 1:
                return _.b.Get().BRewardEquippedByUser(e.rewardDefinition);
              case 2:
                return !_.b
                  .Get()
                  .BCanRedeemPointsForProfileShowcaseUpgrade(
                    e.profileCustomizationType,
                    e.itemLevel
                  );
              case 3:
                return !_.b
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
              !_.b
                .Get()
                .BRewardOwnedByUser(this.props.definition.rewardDefinition) ||
              !(
                (2 == this.props.definition.rewardDefinition.type &&
                  _.b.Get().GetUserSeasonalBadgeLevel() >=
                    this.props.definition.itemLevel) ||
                1 == this.props.definition.rewardDefinition.type ||
                5 == this.props.definition.rewardDefinition.type ||
                6 == this.props.definition.rewardDefinition.type
              )
            )
          );
        }
        GetPointCost() {
          return Ne(this.props.definition);
        }
        BCanAffordItem() {
          return (
            _.b.Get().GetPointsAvailable().getLowBits() >= this.GetPointCost()
          );
        }
        ShowGenericError() {
          this.ShowError(
            Object(u.m)(
              "#Redeem_Error_Generic",
              i.a.createElement(
                "a",
                { href: h.d.HELP_BASE_URL },
                Object(u.f)("#Redeem_Error_SteamSupport")
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
            if (!_.b.Get().BIsLoggedIn())
              return (
                this.CloseModal(),
                void _.b
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
                      ? _.c
                          .Get()
                          .ClaimFreeSaleItem()
                          .then((e) => {
                            var t;
                            1 == e.eResult
                              ? ((this.m_mutableObjDefinition.rewardDefinition = _.c
                                  .Get()
                                  .GetClaimedSaleRewardItemDef()),
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
                      : _.b
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
                    _.b
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
                        _.b.Get().GetUserSeasonalBadgeLevel(),
                      1
                    );
                    _.b
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
                _.b
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
                _.b
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
              e = _.b
                .Get()
                .SetProfileBackground(this.props.definition.rewardDefinition);
              break;
            case 14:
              e = _.b
                .Get()
                .SetAvatarFrame(this.props.definition.rewardDefinition);
              break;
            case 15:
              e = _.b
                .Get()
                .SetAnimatedAvatar(this.props.definition.rewardDefinition);
              break;
            case 13:
              e = _.b
                .Get()
                .SetMiniProfileBackground(
                  this.props.definition.rewardDefinition
                );
              break;
            case 8:
              e = _.b
                .Get()
                .ActivateProfileModifier(
                  this.props.definition.rewardDefinition
                );
              break;
            case 16:
              e = _.b
                .Get()
                .SetSteamDeckKeyboardSkin(
                  this.props.definition.rewardDefinition
                );
              break;
            default:
              return void Object(I.a)(
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
            enter: d.RedeemModalEnter,
            enterActive: d.RedeemModalEnterActive,
            exit: d.RedeemModalExit,
            exitActive: d.RedeemModalExitActive,
          };
          if ("loading" == this.state.step) return null;
          const a = Ae(this.props.definition),
            n = De(this.props.definition),
            r = this.props.definition.rewardDefinition
              ? oe.a.GetAppInfo(this.props.definition.rewardDefinition.appid)
              : null,
            o = [1, 5, 6].includes(
              null === (e = this.props.definition.rewardDefinition) ||
                void 0 === e
                ? void 0
                : e.type
            )
              ? `${document.location}/reward/${this.props.definition.rewardDefinition.defid}`
              : null;
          return i.a.createElement(
            ct,
            { onEscKeypress: this.CloseModal, destructive: this.state.error },
            i.a.createElement(
              p.d,
              { navID: "RedeemPoints", closeModal: this.CloseModal },
              i.a.createElement(
                Ce.b,
                null,
                i.a.createElement(
                  mt,
                  null,
                  i.a.createElement(je, {
                    itemName: a,
                    itemClassName: n,
                    itemLink: o,
                    appInfo: r,
                    onRequestClose: this.CloseModal,
                  }),
                  this.m_strError &&
                    i.a.createElement(
                      "div",
                      { className: d.ErrorContainer },
                      this.m_strError
                    ),
                  i.a.createElement(
                    b.a,
                    null,
                    i.a.createElement(
                      C.a,
                      {
                        key: this.state.step,
                        enter: this.m_bShowTransitions,
                        exit: this.m_bShowTransitions,
                        classNames: t,
                        timeout: 500,
                      },
                      i.a.createElement(Ye, {
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
      Object(n.b)([c.a], ve.prototype, "ShowGenericError", null),
        Object(n.b)([c.a], ve.prototype, "ShowError", null),
        Object(n.b)([c.a], ve.prototype, "RedeemPoints", null),
        Object(n.b)([c.a], ve.prototype, "EquipItem", null),
        Object(n.b)([c.a], ve.prototype, "CloseModal", null),
        (ve = Object(n.b)([l.a], ve));
      const Se = (e) => {
          const { definition: t, closeModal: a } = e,
            n = () => {},
            r = t.rewardDefinition
              ? oe.a.GetAppInfo(t.rewardDefinition.appid)
              : null;
          return i.a.createElement(
            ct,
            { onEscKeypress: a },
            i.a.createElement(
              p.d,
              { navID: "RedeemPointsPreview", closeModal: a },
              i.a.createElement(
                Ce.b,
                null,
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(
                    mt,
                    null,
                    i.a.createElement(je, {
                      itemName: Ae(t),
                      itemClassName: De(t),
                      appInfo: r,
                      onRequestClose: a,
                    }),
                    i.a.createElement(Ye, {
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
        je = Object(
          l.a
        )(
          ({
            itemName: e,
            itemClassName: t,
            itemLink: a,
            appInfo: n,
            onRequestClose: r,
          }) =>
            i.a.createElement(
              "div",
              { className: d.HeaderContainer },
              i.a.createElement(
                "div",
                { className: d.Left },
                i.a.createElement(
                  "div",
                  { className: d.Header },
                  e,
                  a &&
                    i.a.createElement(me, {
                      link: a,
                      style: { marginLeft: "8px" },
                    })
                ),
                i.a.createElement("div", { className: d.SubHeader }, t),
                n &&
                  i.a.createElement(
                    m.b,
                    { to: `${M.b.LoyaltyStore()}/app/` + n.appid, onClick: r },
                    i.a.createElement(
                      "div",
                      { className: d.SubHeaderAppContainer },
                      i.a.createElement("img", {
                        className: d.AppIcon,
                        src: n.icon_url,
                      }),
                      i.a.createElement(
                        "div",
                        { className: d.SubHeader },
                        " ",
                        n.name,
                        " "
                      )
                    )
                  )
              ),
              _.b.Get().BIsLoggedIn() &&
                i.a.createElement(
                  "div",
                  { className: d.PointsContainer },
                  i.a.createElement(E.O, { className: d.Icon }),
                  i.a.createElement(
                    "div",
                    { className: d.BalanceColumn },
                    i.a.createElement(
                      "div",
                      { className: d.Balance },
                      Object(u.f)("#YourBalance")
                    ),
                    i.a.createElement(
                      "div",
                      { className: d.CurrentPoints },
                      _.b
                        .Get()
                        .GetPointsAvailable()
                        .getLowBits()
                        .toLocaleString(u.e.GetPreferredLocales())
                    )
                  )
                )
            )
        ),
        Ae = (e) =>
          2 == e.type || 3 == e.type
            ? Object(u.f)(
                "#ProfileShowcases_ShowcaseName",
                Object(u.f)(
                  "#ProfileShowcases_Type_" + e.profileCustomizationType
                )
              )
            : Oe(e.rewardDefinition),
        Oe = (e) => {
          if (1 == e.type)
            return (
              Object(I.a)(
                e.community_item_data,
                `Missing community item data for virtual item ${e.defid}`
              ),
              e.community_item_data.item_title
            );
          if (2 == e.type) return Object(u.f)("#Redeem_Badge_PrestigeBadge");
          if (5 == e.type) return e.community_item_data.item_title;
          if (6 == e.type) {
            const t = oe.a.GetAppInfo(e.appid).name || "";
            return Object(u.f)("#RewardBundle_AutoGeneratedBundleName", t);
          }
          return "Unknown";
        },
        De = (e) => {
          var t;
          const {
            type: a,
            itemLevel: n,
            desiredItemLevel: r,
            rewardDefinition: i,
          } = e;
          switch (a) {
            case 2:
              return Ee(e)
                ? Object(u.f)("#ProfileShowcases_UpgradeLevel", n, r)
                : Object(u.f)("#ProfileShowcases_UpgradeAtMaxLevel", n);
            case 3:
              return Object(u.f)("#ProfileShowcases_AdditionalSlot");
            case 1:
              if (1 == i.type || 2 == i.type)
                return i.appid != _.b.Get().GetCurrentSeasonalAppID() &&
                  8 == i.community_item_class &&
                  0 !=
                    (null === (t = i.bundle_defids) || void 0 === t
                      ? void 0
                      : t.length)
                  ? Object(u.f)("#RewardItemType_ProfileBundle")
                  : Object(_.d)(i.community_item_class);
              if (5 == i.type || 6 == i.type)
                return Object(u.f)("#RewardItemType_Bundle");
          }
          return "";
        },
        xe =
          (Object(l.a)((e) => {
            const { animatedAvatar: t, persona: a, strClassName: n } = e,
              r = {
                size: "FillArea",
                statusPosition: "none",
                className: Object(N.a)(n, d.playerAvatar),
              };
            return i.a.createElement(
              ie.c,
              Object.assign({ persona: a, animatedAvatar: t }, r)
            );
          }),
          Object(l.a)((e) => {
            const {
                animatedAvatar: t,
                avatarFrame: a,
                persona: n,
                className: r,
                strAnimatedAvatarClassName: o,
              } = e,
              s = {
                size: "FillArea",
                statusPosition: "none",
                className: Object(N.a)(o, d.playerAvatar),
              };
            return i.a.createElement(
              "div",
              { className: r },
              i.a.createElement(
                ie.c,
                Object.assign({ persona: n, animatedAvatar: t }, s),
                i.a.createElement(ie.b, { profileItem: a })
              )
            );
          }));
      class Pe extends i.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_Chat")
            : "saleitem" == this.props.step
            ? i.a.createElement(
                "div",
                null,
                Object(u.f)("#LunarSale2022_Redeem_Desc1"),
                i.a.createElement("br", null),
                i.a.createElement("br", null),
                Object(u.f)("#LunarSale2022_Redeem_Desc2")
              )
            : Object(u.f)("#Redeem_UsePoints_Sticker");
        }
        GetModalPreview() {
          if ("saleitem" == this.props.step)
            return i.a.createElement(
              rt,
              { className: d.PreviewSummerSaleCtn, step: this.props.step },
              i.a.createElement("img", {
                className: d.SaleRewardImg,
                alt: "Free Sale Item",
                src: O.a,
              })
            );
          {
            const e = this.props.definition.rewardDefinition;
            let t = {
                backgroundImage:
                  "url(" +
                  h.d.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.appid +
                  "/" +
                  e.community_item_data.item_image_small +
                  ")",
              },
              a =
                h.d.MEDIA_CDN_COMMUNITY_URL +
                "images/items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_large;
            return i.a.createElement(
              rt,
              { className: d.PreviewChat, step: this.props.step },
              i.a.createElement("div", { className: d.LargePreview, style: t }),
              i.a.createElement(it, { icon: a })
            );
          }
        }
        render() {
          return i.a.createElement(
            lt,
            {
              className: Object(N.a)(
                d.StickerPreviewContainer,
                d.ChatPreviewContainer
              ),
            },
            this.GetModalPreview(),
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
              nt,
              {
                bRequestInProgress: this.props.bRequestInProgress,
                definition: this.props.definition,
                step: this.props.step,
                closeModal: this.props.closeModal,
                redeemPoints: this.props.redeemPoints,
              },
              i.a.createElement(Ke, { closeModal: this.props.closeModal })
            )
          );
        }
      }
      class Be extends i.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_Profile")
            : "equipped" == this.props.step
            ? i.a.createElement(
                "div",
                { className: d.EquippedDesc },
                Object(u.m)(
                  "#Redeem_Equipped_Background",
                  i.a.createElement(
                    "span",
                    null,
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title
                  )
                )
              )
            : Object(u.f)("#Redeem_UsePoints_Background");
        }
        GetPreview() {
          const e = this.props.definition.rewardDefinition;
          let t = {
              backgroundImage:
                "url(" +
                h.d.MEDIA_CDN_COMMUNITY_URL +
                "images/items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_large +
                ")",
            },
            a = i.a.createElement("div", {
              className: d.LargePreview,
              style: t,
            });
          if (e.community_item_data.animated) {
            let t = e.community_item_data.item_movie_webm,
              n = e.community_item_data.item_movie_mp4;
            a = i.a.createElement(
              "video",
              {
                className: d.VideoPreview,
                playsInline: !0,
                loop: !0,
                muted: !0,
                autoPlay: !0,
                controls: !1,
              },
              i.a.createElement("source", {
                src:
                  h.d.MEDIA_CDN_COMMUNITY_URL +
                  "images/items/" +
                  e.appid +
                  "/" +
                  t,
                type: "video/webm",
              }),
              i.a.createElement("source", {
                src:
                  h.d.MEDIA_CDN_COMMUNITY_URL +
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
            ? i.a.createElement($e, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? i.a.createElement(et, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          return i.a.createElement(
            lt,
            { className: d.BackgroundPreviewContainer },
            i.a.createElement(
              rt,
              {
                className: d.PreviewBackgroundContainer,
                step: this.props.step,
              },
              i.a.createElement("div", { className: d.PreviewBackground }),
              this.GetPreview()
            ),
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
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
        }
      }
      class Le extends i.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_Chat")
            : Object(u.f)("#Redeem_UsePoints_Emoticon");
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t =
              h.d.MEDIA_CDN_COMMUNITY_URL +
              "images/items/" +
              e.appid +
              "/" +
              e.community_item_data.item_image_small,
            a = {
              backgroundImage:
                "url(" +
                h.d.MEDIA_CDN_COMMUNITY_URL +
                "images/items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_large +
                ")",
            };
          return i.a.createElement(
            lt,
            {
              className: Object(N.a)(
                d.EmoticonPreviewContainer,
                d.ChatPreviewContainer
              ),
            },
            i.a.createElement(
              rt,
              { className: d.PreviewChat, step: this.props.step },
              i.a.createElement(
                "div",
                { className: d.LargePreviewContainer },
                i.a.createElement("div", {
                  className: d.LargePreview,
                  style: a,
                }),
                i.a.createElement("div", {
                  className: d.LargePreview,
                  style: a,
                }),
                i.a.createElement("div", {
                  className: d.LargePreview,
                  style: a,
                })
              ),
              i.a.createElement(it, { icon: t })
            ),
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
              nt,
              {
                bRequestInProgress: this.props.bRequestInProgress,
                definition: this.props.definition,
                step: this.props.step,
                closeModal: this.props.closeModal,
                redeemPoints: this.props.redeemPoints,
              },
              i.a.createElement(Ke, { closeModal: this.props.closeModal })
            )
          );
        }
      }
      let Re = class extends i.a.Component {
        constructor() {
          super(...arguments), (this.m_manager = new x.a(ae));
        }
        GetEffectTypeForDefinition() {
          return this.props.definition.rewardDefinition.internal_description;
        }
        GetEffectConfig() {
          return ae[this.GetEffectTypeForDefinition()];
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
            ? Object(u.f)("#Redeem_Equip_Chat")
            : Object(u.f)("#Redeem_UsePoints_ChatEffect");
        }
        render() {
          return i.a.createElement(
            lt,
            {
              className: Object(N.a)(
                d.EmoticonPreviewContainer,
                d.ChatPreviewContainer
              ),
            },
            i.a.createElement(
              rt,
              { className: d.PreviewChat, step: this.props.step },
              i.a.createElement(
                "div",
                { className: d.PreviewEffectContainer },
                i.a.createElement(ne, { effectManager: this.m_manager })
              ),
              i.a.createElement(it, null, this.GetEffectConfig().renderButton())
            ),
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
              nt,
              {
                bRequestInProgress: this.props.bRequestInProgress,
                definition: this.props.definition,
                step: this.props.step,
                closeModal: this.props.closeModal,
                redeemPoints: this.props.redeemPoints,
              },
              i.a.createElement(Ke, { closeModal: this.props.closeModal })
            )
          );
        }
      };
      Re = Object(n.b)([l.a], Re);
      class ke extends i.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_Profile")
            : "equipped" == this.props.step
            ? i.a.createElement(
                "div",
                { className: d.EquippedDesc },
                Object(u.m)(
                  "#Redeem_Equipped_MiniProfile",
                  i.a.createElement(
                    "span",
                    null,
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title
                  )
                )
              )
            : Object(u.f)("#Redeem_UsePoints_MiniProfile");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? i.a.createElement($e, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? i.a.createElement(
                _e,
                { onClick: this.props.closeModal },
                Object(u.f)("#Button_Close")
              )
            : null;
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t = _.b.Get().GetEquippedItems(),
            a = _.b.Get().GetPersonaState(),
            n = i.a.createElement(xe, {
              animatedAvatar: t.animated_avatar,
              persona: a,
              avatarFrame: t.avatar_frame,
              className: d.CurrentAvatar,
            });
          return i.a.createElement(
            lt,
            { className: d.MiniProfilePreviewContainer },
            i.a.createElement(
              rt,
              {
                className: d.PreviewBackgroundContainer,
                step: this.props.step,
              },
              i.a.createElement(
                "div",
                { className: d.ProfileContainer },
                i.a.createElement(
                  "video",
                  {
                    width: "100%",
                    playsInline: !0,
                    loop: !0,
                    muted: !0,
                    autoPlay: !0,
                    controls: !1,
                  },
                  i.a.createElement("source", {
                    src:
                      h.d.MEDIA_CDN_COMMUNITY_URL +
                      "images/items/" +
                      e.appid +
                      "/" +
                      e.community_item_data.item_movie_webm,
                    type: "video/webm",
                  }),
                  i.a.createElement("source", {
                    src:
                      h.d.MEDIA_CDN_COMMUNITY_URL +
                      "images/items/" +
                      e.appid +
                      "/" +
                      e.community_item_data.item_movie_mp4,
                    type: "video/mp4",
                  })
                ),
                i.a.createElement(
                  "div",
                  { className: d.ProfileImage },
                  _.b.Get().BIsLoggedIn() && n
                ),
                i.a.createElement("div", {
                  className: Object(N.a)(
                    d.ImageBlur,
                    "miniprofile_backdropblur"
                  ),
                })
              )
            ),
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
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
        }
      }
      class Te extends i.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_Profile")
            : "equipped" == this.props.step
            ? i.a.createElement(
                "div",
                { className: d.EquippedDesc },
                Object(u.m)(
                  "#Redeem_Equipped_AvatarFrame",
                  i.a.createElement(
                    "span",
                    null,
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title
                  )
                )
              )
            : Object(u.f)("#Redeem_UsePoints_AvatarFrame");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? i.a.createElement($e, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? i.a.createElement(et, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t = _.b.Get().GetEquippedItems(),
            a = _.b.Get().GetPersonaState(),
            n = {
              appid: e.appid,
              image_small:
                "items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_small,
            },
            r = i.a.createElement(xe, {
              animatedAvatar: t.animated_avatar,
              persona: a,
              avatarFrame: n,
              strAnimatedAvatarClassName: d.CurrentAvatar,
            }),
            o = null;
          return (
            "equipped" != this.props.step &&
              _.b.Get().BIsLoggedIn() &&
              (o = i.a.createElement(
                "div",
                { className: d.CurrentlyEquippedAvatarAndFrame },
                i.a.createElement(xe, {
                  className: d.PreviewCurrentAvatar,
                  animatedAvatar: t.animated_avatar,
                  persona: a,
                  avatarFrame: t.avatar_frame,
                  strAnimatedAvatarClassName: d.CurrentAvatar,
                }),
                i.a.createElement(
                  "div",
                  { className: d.CurrentlyEquippedAvatarAndFrameDesc },
                  Object(u.f)("#Redeem_Equipped_CurrentAvatarFrame")
                )
              )),
            i.a.createElement(
              lt,
              { className: d.AvatarPreviewContainer },
              i.a.createElement(
                rt,
                {
                  className: Object(N.a)(d.PreviewBackgroundContainer, d.Frame),
                  step: this.props.step,
                },
                i.a.createElement(
                  "div",
                  { className: Object(N.a)(d.ItemPreview, d.TopAvatar) },
                  r
                ),
                i.a.createElement(
                  "div",
                  { className: Object(N.a)(d.ItemPreview, d.BottomAvatar) },
                  r
                )
              ),
              o,
              i.a.createElement(st, {
                definition: this.props.definition,
                step: this.props.step,
                description: this.GetDescription(),
              }),
              i.a.createElement(
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
        }
      }
      class Ge extends i.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_AnimatedAvatar")
            : "equipped" == this.props.step
            ? i.a.createElement(
                "div",
                { className: d.EquippedDesc },
                Object(u.m)(
                  "#Redeem_Equipped_AnimatedAvatar",
                  i.a.createElement(
                    "span",
                    null,
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title
                  )
                )
              )
            : Object(u.f)("#Redeem_UsePoints_AnimatedAvatar");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? i.a.createElement($e, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? i.a.createElement(et, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t = _.b.Get().GetEquippedItems(),
            a = _.b.Get().GetPersonaState(),
            n = {
              appid: e.appid,
              image_small:
                "items/" +
                e.appid +
                "/" +
                e.community_item_data.item_image_small,
            },
            r = i.a.createElement(xe, {
              animatedAvatar: n,
              persona: a,
              avatarFrame: t.avatar_frame,
              strAnimatedAvatarClassName: d.CurrentAvatar,
            }),
            o = null;
          return (
            "equipped" != this.props.step &&
              _.b.Get().BIsLoggedIn() &&
              (o = i.a.createElement(
                "div",
                { className: d.CurrentlyEquippedAvatarAndFrame },
                i.a.createElement(xe, {
                  className: d.PreviewCurrentAvatar,
                  animatedAvatar: t.animated_avatar,
                  persona: a,
                  avatarFrame: t.avatar_frame,
                  strAnimatedAvatarClassName: d.CurrentAvatar,
                }),
                i.a.createElement(
                  "div",
                  { className: d.CurrentlyEquippedAvatarAndFrameDesc },
                  Object(u.f)("#Redeem_Equipped_CurrentAvatar")
                )
              )),
            i.a.createElement(
              lt,
              { className: d.AvatarPreviewContainer },
              i.a.createElement(
                rt,
                {
                  className: Object(N.a)(
                    d.PreviewBackgroundContainer,
                    d.Animated
                  ),
                  step: this.props.step,
                },
                i.a.createElement(
                  "div",
                  { className: Object(N.a)(d.ItemPreview, d.TopAvatar) },
                  r
                ),
                i.a.createElement(
                  "div",
                  { className: Object(N.a)(d.ItemPreview, d.BottomAvatar) },
                  r
                )
              ),
              o,
              i.a.createElement(st, {
                definition: this.props.definition,
                step: this.props.step,
                description: this.GetDescription(),
              }),
              i.a.createElement(
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
        }
      }
      class ze extends i.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_SteamDeckKeyboardSkin")
            : Object(u.f)("#Redeem_UsePoints_SteamDeckKeyboardSkin");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? i.a.createElement($e, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : null;
        }
        render() {
          const e = this.props.definition.rewardDefinition;
          let t =
            h.d.MEDIA_CDN_COMMUNITY_URL +
            "images/items/" +
            e.appid +
            "/" +
            e.community_item_data.item_image_large;
          return i.a.createElement(
            lt,
            { className: Object(N.a)(d.KeyboardSkinPreviewContainer) },
            i.a.createElement(
              rt,
              { className: d.LargePreview, step: this.props.step },
              i.a.createElement("img", {
                className: d.KeyboardPreviewImg,
                src: t,
              })
            ),
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
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
        }
      }
      let Fe = class extends i.a.Component {
        GetDescription() {
          return Object(u.f)("#Redeem_UsePoints_Badge");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? i.a.createElement(et, { closeModal: this.props.closeModal })
            : null;
        }
        GetPreviewForLevel() {
          let e = _.b.Get().GetUserSeasonalBadgeLevel();
          return "equip" == this.props.step
            ? i.a.createElement(ot, {
                definition: this.props.definition.rewardDefinition,
                badgeLevel: e,
                title: Object(u.f)("#Redeem_Badge_CurrentLevel"),
              })
            : 0 == e
            ? i.a.createElement(ot, {
                definition: this.props.definition.rewardDefinition,
                badgeLevel: this.props.definition.itemLevel,
                title: Object(u.f)("#Redeem_Badge_AfterPoints"),
              })
            : i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(ot, {
                  definition: this.props.definition.rewardDefinition,
                  badgeLevel: e,
                  title: Object(u.f)("#Redeem_Badge_CurrentLevel"),
                }),
                i.a.createElement(
                  "div",
                  { className: Object(N.a)(d.BadgeColumn, d.ArrowColumn) },
                  i.a.createElement("div", { className: d.BlueArrow })
                ),
                i.a.createElement(ot, {
                  definition: this.props.definition.rewardDefinition,
                  badgeLevel: this.props.definition.itemLevel,
                  title: Object(u.f)("#Redeem_Badge_AfterPoints"),
                })
              );
        }
        render() {
          return this.props.definition.rewardDefinition.community_item_data
            .badge_data[this.props.definition.itemLevel - 1]
            ? i.a.createElement(
                lt,
                { className: d.BadgeItemContainer },
                i.a.createElement(
                  rt,
                  { className: d.BadgePreviewContainer },
                  this.GetPreviewForLevel()
                ),
                i.a.createElement(st, {
                  definition: this.props.definition,
                  step: this.props.step,
                  description: this.GetDescription(),
                }),
                i.a.createElement(
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
                `Missing badge level ${this.props.definition.itemLevel} image`
              ),
              null);
        }
      };
      Fe = Object(n.b)([l.a], Fe);
      class He extends i.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_Coupon")
            : Object(u.f)("#Redeem_UsePoints_Coupon");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? i.a.createElement($e, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? i.a.createElement(et, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          return i.a.createElement(
            lt,
            { className: d.CouponPreviewContainer },
            i.a.createElement(rt, {
              className: d.PreviewBackgroundContainer,
              step: this.props.step,
            }),
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
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
        }
      }
      class Ue extends i.a.Component {
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_GoldenProfile")
            : "equipped" == this.props.step
            ? Object(u.f)("#Redeem_Equipped_GoldenProfile")
            : Object(u.f)("#Redeem_UsePoints_GoldenProfile");
        }
        GetButtons() {
          return "equip" == this.props.step
            ? i.a.createElement($e, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? i.a.createElement(et, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          var e;
          const { definition: t } = this.props;
          let a = _.b.Get().GetPersonaState(),
            n = _.b.Get().GetEquippedItems(),
            r = _.b
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
            let e = _.b
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
          let o = { image_small: r.frame };
          return i.a.createElement(
            lt,
            { className: d.GoldenProfileContainer },
            i.a.createElement(
              rt,
              {
                className: d.GoldenProfilePreviewContainer,
                step: this.props.step,
              },
              i.a.createElement(
                "div",
                { className: d.AvatarContainer },
                i.a.createElement(ie.a, {
                  size: "FillArea",
                  className: d.CurrentAvatar,
                  persona: a,
                  animatedAvatar: n.animated_avatar,
                  avatarFrame: o,
                })
              )
            ),
            i.a.createElement(
              st,
              {
                definition: this.props.definition,
                step: this.props.step,
                description: this.GetDescription(),
              },
              i.a.createElement(
                qe,
                null,
                Object(u.f)("#Redeem_GoldenProfile_Expiration")
              )
            ),
            i.a.createElement(
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
        }
      }
      class Ve extends i.a.Component {
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
          const e = Object(u.f)(
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
              : Object(u.f)("#Redeem_Equipped_ProfileShowcaseSlotPurchased", e);
          if (2 == this.props.definition.type)
            return Object(u.f)(
              "#Redeem_UsePoints_ProfileShowcaseUpgrade",
              this.props.definition.desiredItemLevel
            );
          const t = _.b.Get().GetMaxProfileShowcaseSlots();
          return Object(u.f)("#Redeem_UsePoints_ProfileShowcaseSlot", e, t + 1);
        }
        GetButtons() {
          return "equip" == this.props.step
            ? i.a.createElement($e, {
                closeModal: this.props.closeModal,
                equipItem: this.props.equipItem,
              })
            : "equipped" == this.props.step
            ? i.a.createElement(et, { closeModal: this.props.closeModal })
            : null;
        }
        GetProfileSteamID() {
          return _.b.Get().BIsLoggedIn()
            ? h.k.steamid
            : 2 == h.d.EUNIVERSE
            ? "148618792083695825"
            : "76561197960266962";
        }
        render() {
          const e = this.state.bLoadedIFrame;
          let t = Object(le.b)(this.props.definition.profileCustomizationType);
          const a = this.props.definition.profileCustomizationType,
            n = Math.min(
              this.props.definition.desiredItemLevel
                ? this.props.definition.desiredItemLevel
                : this.props.definition.itemLevel,
              _.b.Get().GetMaxProfileShowcaseUpgradeLevel()
            ),
            r = 0.5 * this.state.iframeHeight;
          return i.a.createElement(
            lt,
            { className: d.ProfileShowcaseContainer },
            i.a.createElement(
              rt,
              {
                className: Object(N.a)(
                  d.ProfileShowcasePreviewContainer,
                  e ? d.LoadedPreview : d.LoadingPreview
                ),
                step: this.props.step,
              },
              i.a.createElement("img", {
                className: d.ProfileShowcaseIcon,
                src: t,
              }),
              !e &&
                i.a.createElement(
                  "div",
                  { className: d.ProfileThrobber },
                  i.a.createElement(se.a, {
                    position: "center",
                    size: "xlarge",
                    string: Object(u.f)(
                      "#ProfileShowcases_LoadingPreview",
                      Object(u.f)("#ProfileShowcases_Type_" + a)
                    ),
                  })
                ),
              i.a.createElement(
                "div",
                {
                  className: d.PreviewShowcasePreviewFrameContainer,
                  style: { height: 0 != r ? r + "px" : "1px" },
                },
                i.a.createElement("iframe", {
                  className: d.PreviewShowcasePreviewFrame,
                  src:
                    h.d.COMMUNITY_BASE_URL +
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
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
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
        }
      }
      class Ze extends i.a.Component {
        constructor(e) {
          super(e);
        }
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_Bundle")
            : Object(u.f)("#Redeem_UsePoints_Bundle");
        }
        GetButtons() {
          return "equip" == this.props.step || "equipped" == this.props.step
            ? i.a.createElement(et, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          const e = _.b
            .Get()
            .GetBundleOfferForUser(this.props.definition.rewardDefinition)
            .items.map((e) => {
              const t = e.community_item_data.item_image_large;
              let a = Object(he.a)(e.appid, t);
              3 == e.community_item_class &&
                (a =
                  h.d.COMMUNITY_BASE_URL +
                  "economy/profilebackground/items/" +
                  e.appid +
                  "/" +
                  e.community_item_data.item_image_large +
                  "?size=320x200");
              const n = _.b.Get().BRewardOwnedByUser(e);
              return i.a.createElement(
                be.a,
                {
                  key: e.defid,
                  padding: "xxsmall",
                  className: d.BundleItemPreview,
                },
                i.a.createElement(
                  "div",
                  { className: d.BundleItemPreviewImage },
                  i.a.createElement("img", { src: a })
                ),
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(
                    "div",
                    { className: d.BundleChildItemName },
                    e.community_item_data.item_title
                  ),
                  i.a.createElement(
                    "div",
                    { className: d.BundleChildItemClass },
                    Object(_.d)(e.community_item_class)
                  )
                ),
                n &&
                  i.a.createElement(
                    "div",
                    { className: d.BundleChildItemOwned },
                    i.a.createElement(re.j, { className: d.OwnedCheckmark }),
                    "redeem" == this.props.step &&
                      Object(u.f)("#Redeem_BundleItemOwned")
                  )
              );
            });
          return i.a.createElement(
            lt,
            { className: d.BundleItemContainer },
            i.a.createElement(
              "div",
              { className: d.BundleItemPreviewContainer },
              e
            ),
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
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
        }
      }
      class We extends i.a.Component {
        constructor(e) {
          super(e), (this.state = { bLoadedIFrame: !1 });
        }
        OnIFrameLoaded() {
          this.setState({ bLoadedIFrame: !0 });
        }
        GetProfileSteamID() {
          return _.b.Get().BIsLoggedIn()
            ? h.k.steamid
            : 2 == h.d.EUNIVERSE
            ? "148618792083695825"
            : "76561197960266962";
        }
        GetDescription() {
          return "equip" == this.props.step
            ? Object(u.f)("#Redeem_Equip_ProfileBundle")
            : Object(u.f)("#Redeem_UsePoints_ProfileBundle");
        }
        GetButtons() {
          return "equip" == this.props.step || "equipped" == this.props.step
            ? i.a.createElement(et, { closeModal: this.props.closeModal })
            : null;
        }
        render() {
          const { bLoadedIFrame: e } = this.state,
            t = _.b
              .Get()
              .GetBundleOfferForUser(this.props.definition.rewardDefinition),
            a = this.props.definition.rewardDefinition.appid,
            n = this.props.definition.rewardDefinition.community_item_type,
            r = t.items.map((e) => {
              let t = Object(he.b)(e);
              const a = _.b.Get().BRewardOwnedByUser(e),
                n = 8 == e.community_item_class;
              return i.a.createElement(
                be.a,
                {
                  key: e.defid,
                  padding: "xxsmall",
                  className: Object(N.a)(
                    d.BundleItemPreview,
                    n && d.ProfileModifier
                  ),
                },
                i.a.createElement(
                  "div",
                  { className: d.BundleItemPreviewImage },
                  i.a.createElement("img", { src: t })
                ),
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(
                    "div",
                    { className: d.BundleChildItemName },
                    e.community_item_data.item_title
                  ),
                  i.a.createElement(
                    "div",
                    { className: d.BundleChildItemClass },
                    Object(_.d)(e.community_item_class)
                  )
                ),
                a &&
                  i.a.createElement(
                    "div",
                    { className: d.BundleChildItemOwned },
                    i.a.createElement(re.j, { className: d.OwnedCheckmark }),
                    "redeem" == this.props.step &&
                      Object(u.f)("#Redeem_ProfileBundleItemOwned")
                  )
              );
            }),
            o =
              h.d.COMMUNITY_BASE_URL +
              "profiles/" +
              this.GetProfileSteamID() +
              "?previewprofile=1&appid=" +
              a +
              "&itemtype=" +
              n;
          return i.a.createElement(
            lt,
            {
              className: Object(N.a)(
                d.BundleItemContainer,
                e ? d.LoadedPreview : d.LoadingPreview
              ),
            },
            !e &&
              i.a.createElement(
                "div",
                { className: d.ProfileThrobber },
                i.a.createElement(se.a, {
                  position: "center",
                  size: "xlarge",
                  string: Object(u.f)(
                    "#ProfileBundle_LoadingPreview",
                    Oe(this.props.definition.rewardDefinition)
                  ),
                })
              ),
            i.a.createElement(
              "div",
              { className: d.PreviewProfileBundleFrameContainer },
              i.a.createElement("iframe", {
                className: d.PreviewProfileBundleFrame,
                src: o,
                frameBorder: 0,
                scrolling: "no",
                onLoad: () => {
                  this.OnIFrameLoaded();
                },
              })
            ),
            i.a.createElement(
              "div",
              { className: d.PreviewLinkContainer },
              i.a.createElement(
                "a",
                { href: o, target: "_blank", className: d.PreviewLink },
                Object(u.f)("#ProfileModifier_PreviewLinkText")
              )
            ),
            i.a.createElement(
              "div",
              { className: d.BundleItemPreviewContainer },
              r
            ),
            i.a.createElement(st, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            i.a.createElement(
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
        }
      }
      const Qe = {
          11: Pe,
          3: Be,
          4: Le,
          13: ke,
          14: Te,
          15: Ge,
          1: Fe,
          12: Re,
          8: Ue,
          16: ze,
        },
        Ye = Object(l.a)((e) => {
          var t;
          let a = null;
          switch (e.definition.type) {
            case 3:
            case 2:
              a = Ve;
              break;
            case 1:
              a =
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
                  ? We
                  : Qe[e.definition.rewardDefinition.community_item_class];
          }
          return a
            ? i.a.createElement(a, Object.assign({}, e))
            : 4 == e.definition.rewardDefinition.type
            ? i.a.createElement(He, Object.assign({}, e))
            : null;
        }),
        qe = (e) => {
          const { className: t } = e,
            a = Object(n.c)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object.assign(
              { className: Object(N.a)(d.WarningTextContainer, e.className) },
              a
            ),
            i.a.createElement(E.sb, { className: d.TimeWarning }),
            e.children
          );
        },
        Je = (e) => {
          const {
            cost: t,
            discount: a,
            originalCost: n,
            redeemPoints: r,
            closeModal: o,
          } = e;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(Xe, {
              cost: t,
              discount: a,
              originalCost: n,
              onClick: r,
            }),
            i.a.createElement(_e, { onClick: o }, Object(u.f)("#Button_Cancel"))
          );
        },
        Xe = (e) => {
          const {
            cost: t,
            discount: a,
            originalCost: n,
            onClick: r,
            className: s,
          } = e;
          if (a) {
            const e = a ? n.toLocaleString(u.e.GetPreferredLocales()) : "",
              l = _.b.Get().BIsLoggedIn()
                ? i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      "div",
                      { className: d.OriginalCost },
                      " ",
                      e,
                      " ",
                      Object(u.f)("#Rewards_Points"),
                      " "
                    ),
                    i.a.createElement(
                      y.a,
                      { amount: t },
                      " ",
                      t > 0 && Object(u.f)("#Rewards_Points")
                    )
                  )
                : i.a.createElement("span", null, Object(u.f)("#Button_Login"));
            return i.a.createElement(
              o.a,
              { className: Object(N.a)(d.RedeemButton, s), onActivate: r },
              i.a.createElement(
                "div",
                { className: d.DiscountContainer },
                "-",
                a,
                "%"
              ),
              i.a.createElement("div", { className: d.CostContainer }, l)
            );
          }
          const l = _.b.Get().BIsLoggedIn()
            ? i.a.createElement(
                y.a,
                { size: 1.125, amount: t },
                " ",
                t > 0 && Object(u.f)("#Rewards_Points")
              )
            : i.a.createElement("span", null, Object(u.f)("#Button_Login"));
          return i.a.createElement(
            o.a,
            { className: Object(N.a)(d.RedeemButton, s), onActivate: r },
            i.a.createElement("div", { className: d.CostContainer }, l)
          );
        },
        Ke = (e) => {
          const { closeModal: t } = e,
            a = () => {
              (window.location.href = "steam://open/friends"), t();
            },
            n = () => {
              window.open(
                h.d.CHAT_BASE_URL + "chat",
                "height=790,width=1015,resize=yes,scrollbars=yes"
              ),
                t();
            },
            r = () => {
              j.BClientSupportsMessage("OpenFriendsDialog")
                ? j
                    .OpenFriendsDialog()
                    .then((e) => {
                      e.success || a();
                    })
                    .catch(a)
                : a();
            };
          return h.d.IN_CLIENT
            ? i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  ge,
                  { onClick: a },
                  Object(u.f)("#Button_Goto_Chat")
                ),
                i.a.createElement(
                  _e,
                  { onClick: t },
                  Object(u.f)("#Button_Later")
                )
              )
            : i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  ge,
                  { onClick: n },
                  Object(u.f)("#Button_Goto_WebChat")
                ),
                i.a.createElement(
                  fe,
                  { onClick: r },
                  Object(u.f)("#Button_Goto_ClientChat")
                ),
                i.a.createElement(
                  _e,
                  { onClick: t },
                  Object(u.f)("#Button_Later")
                )
              );
        },
        $e = (e) => {
          const { equipItem: t, closeModal: a } = e;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(ge, { onClick: t }, Object(u.f)("#Button_Equip")),
            i.a.createElement(_e, { onClick: a }, Object(u.f)("#Button_Later"))
          );
        },
        et = (e) => {
          const { closeModal: t } = e;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              fe,
              {
                onClick: () =>
                  (window.location.href = h.d.COMMUNITY_BASE_URL + "my"),
              },
              Object(u.f)("#Button_Goto_Profile")
            ),
            i.a.createElement(_e, { onClick: t }, Object(u.f)("#Button_Close"))
          );
        },
        tt = (e) => {
          const { closeModal: t } = e;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              fe,
              { onClick: t },
              i.a.createElement(
                m.b,
                { to: M.b.LoyaltyHowItWorks() },
                Object(u.f)("#Redeem_NeedToOwnApp")
              )
            ),
            i.a.createElement(_e, { onClick: t }, Object(u.f)("#Button_Cancel"))
          );
        },
        at = (e) => {
          const { closeModal: t } = e;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              fe,
              { onClick: t },
              i.a.createElement(
                m.b,
                { to: M.b.LoyaltyHowItWorks() },
                Object(u.f)("#Redeem_HowToGetPoints")
              )
            ),
            i.a.createElement(_e, { onClick: t }, Object(u.f)("#Button_Cancel"))
          );
        },
        nt = (e) => {
          const {
              step: t,
              definition: a,
              closeModal: r,
              redeemPoints: s,
              bRequestInProgress: l,
            } = e,
            c = Object(n.c)(e, [
              "step",
              "definition",
              "closeModal",
              "redeemPoints",
              "bRequestInProgress",
            ]);
          let m = e.children;
          if (l)
            m = i.a.createElement(se.a, {
              className: d.RedeemThrobber,
              size: "medium",
            });
          else if ("preview" == t)
            m = i.a.createElement(
              _e,
              { onClick: r },
              Object(u.f)("#Button_Close")
            );
          else if ("redeem" == t) {
            const e = Ne(a),
              { discount: t, originalCost: n } = (function (e) {
                switch (e.type) {
                  case 1:
                    if (
                      5 == e.rewardDefinition.type ||
                      6 == e.rewardDefinition.type
                    ) {
                      const {
                        discount: t,
                        original_point_cost: a,
                      } = _.b.Get().GetBundleOfferForUser(e.rewardDefinition);
                      return { discount: t, originalCost: a };
                    }
                    return {
                      discount: 0,
                      originalCost: parseInt(e.rewardDefinition.point_cost),
                    };
                  case 2:
                    return {
                      discount: 0,
                      originalCost: _.b
                        .Get()
                        .GetUpgradableProfileShowcaseCost(),
                    };
                  case 3:
                    return {
                      discount: 0,
                      originalCost: _.b
                        .Get()
                        .GetPurchasableProfileShowcaseSlotCost(),
                    };
                }
                return {
                  discount: 0,
                  originalCost: parseInt(e.rewardDefinition.point_cost),
                };
              })(a);
            m = i.a.createElement(Je, {
              cost: e,
              discount: t,
              originalCost: n,
              redeemPoints: s,
              closeModal: r,
            });
          } else
            "cantredeemforapp" == t
              ? (m = i.a.createElement(tt, { closeModal: r }))
              : "cantafford" == t
              ? (m = i.a.createElement(at, { closeModal: r }))
              : "saleitem" == t &&
                (m = i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    fe,
                    { onClick: s },
                    Object(u.f)("#SummerSale_Redeem_Btn")
                  ),
                  i.a.createElement(
                    _e,
                    { onClick: r },
                    Object(u.f)("#Button_Cancel")
                  )
                ));
          return i.a.createElement(
            o.a,
            Object.assign(
              { "flow-children": "row", className: d.ItemButtonsContainer },
              c
            ),
            m
          );
        },
        rt = (e) => {
          const { step: t, className: a } = e,
            r = Object(n.c)(e, ["step", "className"]);
          let o = null;
          return (
            "equip" == e.step
              ? (o = i.a.createElement("div", {
                  className: Object(N.a)(d.GreenCheck, d.PurchasedCheck),
                }))
              : "equipped" == e.step &&
                (o = i.a.createElement(re.j, {
                  className: Object(N.a)(d.GreenCheck, d.EquippedCheck),
                })),
            i.a.createElement(
              "div",
              Object.assign(
                { className: Object(N.a)(a, d.ItemPreviewContainer) },
                r
              ),
              o,
              e.children
            )
          );
        },
        it = (e) => {
          const { icon: t } = e,
            a = Object(n.c)(e, ["icon"]);
          return i.a.createElement(
            "div",
            Object.assign({ className: d.ChatPickerContainer }, a),
            i.a.createElement(
              "div",
              {
                className: d.IconPreview,
                style: t && { backgroundImage: `url( ${t} )` },
              },
              e.children
            )
          );
        },
        ot = (e) => {
          const { definition: t, badgeLevel: a, title: n } = e;
          let r = t.community_item_data.badge_data[a - 1].image || "",
            o = d.NextLevel;
          return (
            _.b.Get().GetUserSeasonalBadgeLevel() == a && (o = d.CurrentLevel),
            i.a.createElement(
              "div",
              { className: d.BadgeColumn },
              i.a.createElement("div", { className: d.BadgeTitle }, n),
              i.a.createElement(
                "div",
                { className: d.BadgeDetailsContainer },
                i.a.createElement(
                  "div",
                  { className: d.BadgeImgContainer },
                  i.a.createElement("div", {
                    className: d.BadgeImage,
                    style: {
                      backgroundImage: `url( ${Object(w.a)(t.appid, r)} )`,
                    },
                  })
                ),
                i.a.createElement("div", { className: d.BadgeLine }),
                i.a.createElement(
                  "div",
                  { className: Object(N.a)(d.BadgeLevelContainer, o) },
                  i.a.createElement("div", { className: d.BadgeLevelText }, a)
                )
              )
            )
          );
        },
        st = (e) => {
          const { definition: t, step: a, description: r } = e,
            o = Object(n.c)(e, ["definition", "step", "description"]);
          let s,
            l = null;
          if (
            ("equip" != a && "equipped" != a) ||
            !t.rewardDefinition ||
            1 != t.rewardDefinition.type
          ) {
            if ("cantredeemforapp" == a) {
              let e = i.a.createElement(
                "span",
                { className: d.NeedAppOwnership },
                oe.a.GetAppInfo(t.rewardDefinition.appid).name || ""
              );
              l = i.a.createElement(
                "div",
                { className: Object(N.a)(d.Bold, d.Opacity) },
                Object(u.m)("#Redeem_CantRedeemItemForApp", e)
              );
            } else if ("cantafford" == a) {
              let e = Ne(t) - _.b.Get().GetPointsAvailable().getLowBits();
              l = i.a.createElement(
                "div",
                { className: Object(N.a)(d.Bold, d.Opacity) },
                Object(u.f)("#Redeem_CantAfford", e.toLocaleString())
              );
            }
          } else
            s = i.a.createElement(
              "div",
              { className: d.Bold },
              Object(u.f)("#Redeem_YoursToOwn", Oe(t.rewardDefinition))
            );
          return i.a.createElement(
            "div",
            Object.assign({ className: d.ItemDescription }, o),
            s,
            i.a.createElement("div", null, r),
            e.children,
            l,
            i.a.createElement(
              "div",
              { className: d.Small },
              Object(u.f)("#Redeem_RefundWarning")
            )
          );
        },
        lt = (e) => {
          const { className: t } = e,
            a = Object(n.c)(e, ["className"]);
          return i.a.createElement(
            "div",
            Object.assign({ className: Object(N.a)(d.ItemWrapper, t) }, a),
            e.children
          );
        };
      function ct(e) {
        const { children: t, destructive: a, onEscKeypress: n } = e;
        return "desktop" === Object(be.g)()
          ? i.a.createElement(
              p.i,
              {
                onEscKeypress: n,
                bHideCloseIcon: !0,
                bDestructiveWarning: a,
                hideTopBar: !1,
              },
              t
            )
          : i.a.createElement(p.l, { active: !0 }, t);
      }
      function mt(e) {
        const t = "desktop" !== Object(be.g)();
        return i.a.createElement(
          "div",
          Object.assign(
            { className: Object(N.a)(d.ModalContainer, t && d.Responsive) },
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
          return N;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("TyAF"),
        s = a("aoTL"),
        l = a("qD+2"),
        c = a("prdU"),
        m = a("TLQK"),
        d = a("RV7a"),
        p = (a("OU48"), a("mw7S")),
        u = a("o8B4"),
        _ = a("exH9"),
        f = a("YpyZ");
      const g = (e) => {
        var { value: t, className: a } = e,
          r = Object(n.c)(e, ["value", "className"]);
        return i.a.createElement(
          "div",
          Object.assign({ className: Object(_.a)(f.Discount, a) }, r),
          "-",
          t,
          "%"
        );
      };
      var h = a("StxQ"),
        b = a("cOvF");
      a("qDk6");
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
                    desc: Object(m.f)("#RewardItemType_Bundle"),
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
              style: f,
              onClick: g,
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
            b = N(o);
          return i.a.createElement(
            d.e,
            Object.assign(
              {
                display: "flex",
                flexDirection: "column",
                className: Object(_.a)(u.BundleContainer, p),
                style: Object.assign(Object.assign({}, f), { width: "524px" }),
                onActivate: g,
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
                    Object(m.f)("#Redeem_BundleItemOwned")
                  ),
                  i.a.createElement(b.j, { className: u.CheckmarkCircle })
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(g, {
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
      function N(e) {
        var t, a;
        const n = Object(s.d)(() => l.a.GetAppInfo(e.appid));
        switch (e.type) {
          case 6:
            return Object(m.f)("#RewardBundle_AutoGeneratedBundleName", n.name);
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
    "6Mq3": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/earned_points_anim.png?v=valveisgoodatcaching";
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
    "8Uds": function (e, t, a) {
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
        SteamDeckTheme: "profilethemecolors_SteamDeckTheme_2aDQK",
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
    Aqke: function (e, t, a) {
      var n = {
        "./loyalty_brazilian.json": ["jJTi", 11],
        "./loyalty_bulgarian.json": ["YXmX", 12],
        "./loyalty_czech.json": ["Yw6T", 13],
        "./loyalty_danish.json": ["LeJ7", 14],
        "./loyalty_dutch.json": ["3s9e", 15],
        "./loyalty_english.json": ["nz6u", 16],
        "./loyalty_finnish.json": ["cCRj", 17],
        "./loyalty_french.json": ["WjZg", 18],
        "./loyalty_german.json": ["2HFY", 19],
        "./loyalty_greek.json": ["puzw", 20],
        "./loyalty_hungarian.json": ["h+vV", 21],
        "./loyalty_italian.json": ["1xjJ", 22],
        "./loyalty_japanese.json": ["KhFN", 23],
        "./loyalty_koreana.json": ["0T2E", 24],
        "./loyalty_latam.json": ["SFVQ", 25],
        "./loyalty_norwegian.json": ["6qpk", 26],
        "./loyalty_polish.json": ["c9AW", 27],
        "./loyalty_portuguese.json": ["H3eu", 28],
        "./loyalty_romanian.json": ["gt0D", 29],
        "./loyalty_russian.json": ["4nQk", 30],
        "./loyalty_sc_schinese.json": ["0Z0/", 31],
        "./loyalty_schinese.json": ["svug", 32],
        "./loyalty_spanish.json": ["x/nm", 33],
        "./loyalty_swedish.json": ["d/hP", 34],
        "./loyalty_tchinese.json": ["EWje", 35],
        "./loyalty_thai.json": ["SnkP", 36],
        "./loyalty_turkish.json": ["cD82", 37],
        "./loyalty_ukrainian.json": ["jV8j", 38],
        "./loyalty_vietnamese.json": ["TxFk", 39],
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
    CGeh: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("EC67"),
        s = a("1fPh"),
        l = a("lkRc"),
        c = a("WBba"),
        m = a("TyAF"),
        d = a("55Ip"),
        p = a("qbgq"),
        u = a("li8c"),
        _ = a("prdU"),
        f = (a("OU48"), a("RV7a")),
        g = a("TLQK"),
        h = a("/maY"),
        b = a("exH9"),
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
      var y = a("lypr"),
        w = a("qDk6");
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
        const g = 0 === _.length;
        if (g) for (let e = 0; e < p; e++) _.push(l());
        const h = (function (e, t = {}, a = !1) {
          const n = e.length,
            [o, s] = Object(r.useState)(0),
            [l, c] = S(),
            [m, d] = S(),
            p = Object(f.k)("padding-right", M),
            u = Object(f.h)().spacing.none;
          let _ = 1;
          c.width &&
            void 0 !== d.width &&
            (_ = Math.floor((d.width + u) / c.width));
          const g = !a && o + _ < n,
            h = () => g && s(o + _),
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
            bAllowNext: g,
            bAllowPrev: C,
            fnNext: h,
            fnPrev: I,
            iPosition: o,
          };
        })(_, c, g);
        return Object.assign(Object.assign({}, h), {
          fnNext: () => {
            h.iPosition + h.rgVisibleItems.length > p - d &&
              u(p + h.rgVisibleItems.length),
              h.fnNext();
          },
        });
      }
      const N = (e) => {
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
        v = (e) => {
          const { bAllowNext: t, bAllowPrev: a, fnNext: n, fnPrev: r } = e;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(D, {
              className: Object(b.a)(h.LeftArrow, !a && h.Disabled),
              onClick: r,
            }),
            i.a.createElement(O, {
              className: Object(b.a)(h.RightArrow, !t && h.Disabled),
              onClick: n,
            })
          );
        },
        S = () => (window.ResizeObserver ? j() : A()),
        j = () => {
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
        A = () => {
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
        O = (e) =>
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
          return i.a.createElement(O, Object.assign({ style: r }, a));
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
      var P = a("+9fn"),
        B = a("ehaW"),
        L = a("t0PL"),
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
            _ = "mobile" === Object(f.g)();
          return i.a.createElement(
            f.a,
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
              f.a,
              {
                marginBottom: "medium",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexGrow: 1,
                style: { zIndex: 1 },
              },
              i.a.createElement(
                f.a,
                { display: "flex", flexDirection: "column", flexGrow: 1 },
                i.a.createElement(
                  f.a,
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
              f.c,
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
            P.a,
            Object.assign({}, r, { style: Object.assign({}, a) })
          );
        };
      var z = a("+j4l"),
        F = a("7R2k"),
        H = a("vN/p"),
        U = a("t3iX");
      function V(e) {
        return Math.max(0, e.cTotalMatchingUnfiltered - e.cTotalMatching);
      }
      function Z(e) {
        const t = V(e);
        return 0 === t
          ? null
          : Object(g.f)("#HiddenWithCountButton", t.toLocaleString());
      }
      function W(e) {
        const t = V(e);
        return 0 === t
          ? null
          : i.a.createElement(
              P.c,
              {
                key: "HiddenCallout",
                title: Object(g.l)(
                  "#HiddenItems_Explanation",
                  t,
                  t.toLocaleString()
                ),
              },
              Z(e)
            );
      }
      const Q = (e) => {
        switch (e.descriptor.type) {
          case 1:
            const t = i.a.createElement(Y, Object.assign({}, e));
            return e.descriptor.bHomogeneous
              ? i.a.createElement(H.a, null, t)
              : t;
          case 0:
            const a = i.a.createElement(X, Object.assign({}, e));
            return e.descriptor.bHomogeneous
              ? i.a.createElement(H.a, null, a)
              : a;
          case 2:
            return i.a.createElement(f.b, null, (t) =>
              "desktop" !== t
                ? i.a.createElement($, Object.assign({}, e))
                : i.a.createElement(K, Object.assign({}, e))
            );
          default:
            return (
              console.error(`Unknown cluster display: ${e.descriptor.type}`),
              null
            );
        }
      };
      let Y = class extends i.a.Component {
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
          return i.a.createElement(f.b, null, (e) =>
            "desktop" !== e
              ? i.a.createElement(q, Object.assign({}, m))
              : i.a.createElement(J, Object.assign({}, m))
          );
        }
      };
      Y = Object(n.b)([m.a], Y);
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
            { rewards: u, bLoadingMore: _, cTotalMatching: f } = p,
            h = Object(U.c)();
          if (0 === f) return null;
          const b = !s && !n && Z(p);
          return i.a.createElement(
            P.b,
            {
              title: t,
              subtitle: b || void 0,
              rightActions: n
                ? i.a.createElement(
                    d.b,
                    { to: n },
                    i.a.createElement(
                      P.a,
                      { onClick: () => l.push(n) },
                      Object(g.f)("#SeeAllButton")
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
        J = Object(m.a)((e) => {
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
                itemClassName: F.ItemHover,
                fnRenderItemSkeleton: () => i.a.createElement(B.f, null),
              }
            ),
            c = l.bAllowNext || l.bAllowPrev;
          let m = "";
          if (
            ((m =
              s.cMaxToReturn > 0
                ? Object(g.f)("#SeeAllButton")
                : s.cTotalMatching > 0
                ? Object(g.f)(
                    "#SeeAllWithCountButton",
                    s.cTotalMatching.toLocaleString()
                  )
                : Object(g.f)("#SeeAllButton")),
            0 === s.cTotalMatching && !s.bLoadingMore)
          )
            return null;
          const p = !c || !n,
            u = !o && p && W(s);
          let _ = [],
            f = [];
          return (
            !p &&
              _.push(
                i.a.createElement(
                  d.b,
                  { to: n, key: "SeeAll" },
                  i.a.createElement(P.a, null, m)
                )
              ),
            c &&
              f.push(
                i.a.createElement(
                  v,
                  Object.assign({ key: "CarouselControls" }, l)
                )
              ),
            u && (0 == f.length ? f.push(u) : 0 == _.length && _.push(u)),
            i.a.createElement(
              P.b,
              { title: t, subtitle: a, leftActions: _, rightActions: f },
              i.a.createElement(
                N,
                Object.assign({ style: { width: "100%", flexWrap: "wrap" } }, l)
              )
            )
          );
        }),
        X = Object(m.a)((e) => {
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
            P.b,
            { title: t || r, subtitle: a || o, rightActions: m || void 0 },
            i.a.createElement(L.a, {
              style: { width: "100%" },
              itemClassName: F.ItemHover,
              getItems: c,
              renderItem: (e) =>
                i.a.createElement(ee, { definition: e, key: e.defid }),
              renderItemSkeleton: () => i.a.createElement(B.f, null),
              key: `${n}||${JSON.stringify(l)}`,
            })
          );
        }),
        K = Object(m.a)((e) => {
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
            f = n ? Object(_.e)(n) : void 0,
            h = u(0, 3, a),
            b =
              h.bLoadingMore && 0 === h.rewards.length
                ? [
                    i.a.createElement(B.f, { key: "0" }),
                    i.a.createElement(B.f, { key: "1" }),
                    i.a.createElement(B.f, { key: "2" }),
                  ]
                : h.rewards.map((e) =>
                    i.a.createElement(ee, {
                      definition: e,
                      key: e.defid,
                      theme: s,
                    })
                  );
          return i.a.createElement(
            P.b,
            null,
            i.a.createElement(
              T,
              {
                title: l || m,
                description: c || p,
                imgSrc: r,
                fullbleed: o,
                style: { width: "100%" },
                itemClassName: F.ItemHover,
                actions: i.a.createElement(
                  d.b,
                  { to: f },
                  i.a.createElement(
                    G,
                    { theme: s },
                    Object(g.f)("#SeeAllButton")
                  )
                ),
              },
              b
            )
          );
        }),
        $ = Object(m.a)((e) => {
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
              cluster: { title: u, subtitle: f, GetRewards: h },
            } = t,
            b = n ? Object(_.e)(n) : void 0;
          return i.a.createElement(
            P.b,
            null,
            i.a.createElement(
              T,
              {
                title: m || u,
                description: "",
                imgSrc: s,
                fullbleed: l,
                style: { width: "100%" },
                itemClassName: F.ItemHover,
                actions: i.a.createElement(
                  d.b,
                  { to: b },
                  i.a.createElement(
                    G,
                    {
                      onClick: () => r.push(b),
                      theme: c,
                      className: F.MobileHeroAction,
                    },
                    Object(g.f)("#SeeAllButton")
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
          return i.a.createElement(B.e, {
            definition: t,
            onClick: (e) => {
              5 === t.type || 6 === t.type
                ? n.push(s.b.LoyaltyItemBundle(t.defid))
                : Object(z.e)(e, t);
            },
            theme: a,
          });
        };
      var te = a("av+R");
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
          P.b,
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
      var oe = a("qD+2"),
        se = a("n4wG"),
        le = a("Matr"),
        ce = a("StxQ"),
        me = a("nXE5"),
        de = a("0OaU"),
        pe = (a("kqfX"), a("6c1j")),
        ue = a.n(pe),
        _e = a("mgoM"),
        fe = a("jUCX"),
        ge = a("WonJ"),
        he = a.n(ge);
      let be = class extends r.Component {
        static get hoverClass() {
          return he.a.hoverParent;
        }
        render() {
          const e = this.props,
            { persona: t, animating: a, className: i, size: o, dim: s } = e,
            l = Object(n.c)(e, [
              "persona",
              "animating",
              "className",
              "size",
              "dim",
            ]);
          let c = "";
          return (
            "medium" == o
              ? (c = he.a.Medium)
              : "large" == o && (c = he.a.Large),
            r.createElement(
              "div",
              Object.assign(
                {
                  className: Object(b.a)(
                    he.a.SnoozeContainer,
                    t.online_state,
                    i,
                    a && he.a.animating,
                    c,
                    s && he.a.Dim
                  ),
                },
                l
              ),
              r.createElement(
                "div",
                {
                  "data-text": "Z",
                  className: Object(b.a)(he.a.SnoozeZ, he.a.Z1),
                },
                "Z"
              ),
              r.createElement(
                "div",
                {
                  "data-text": "Z",
                  className: Object(b.a)(he.a.SnoozeZ, he.a.Z2),
                },
                "Z"
              ),
              r.createElement(
                "div",
                {
                  "data-text": "Z",
                  className: Object(b.a)(he.a.SnoozeZ, he.a.Z3),
                },
                "Z"
              )
            )
          );
        }
      };
      be = Object(n.b)([m.a], be);
      a("li7h");
      var Ce = a("6Y59"),
        Ie = a("Xfd2"),
        ye = a.n(Ie),
        we = a("kkPE");
      const Me = Object(m.a)((e) => {
        const { persona: t, className: a } = e,
          i = Object(n.c)(e, ["persona", "className"]);
        if (!t) return null;
        if (!t.is_online) return null;
        const o = t.HasStateFlag(512),
          s = t.HasStateFlag(2048),
          l = !s && t.HasStateFlag(1024);
        return r.createElement(
          r.Fragment,
          null,
          o &&
            r.createElement(
              "div",
              Object.assign(
                {
                  className: Object(b.a)(
                    a,
                    ye.a.PersonaStatusIcon,
                    ye.a.MobilePhoneIcon,
                    Object(fe.b)(t)
                  ),
                  title: Object(g.f)("#Platform_Hint_Mobile"),
                },
                i
              ),
              r.createElement(we.b, null)
            ),
          s &&
            r.createElement(
              "div",
              Object.assign(
                {
                  className: Object(b.a)(
                    a,
                    ye.a.PersonaStatusIcon,
                    ye.a.VRIcon,
                    Object(fe.b)(t)
                  ),
                  title: Object(g.f)("#Platform_Hint_VR"),
                },
                i
              ),
              r.createElement(Ce.xb, null)
            ),
          l &&
            r.createElement(
              "div",
              Object.assign(
                {
                  className: Object(b.a)(
                    a,
                    ye.a.PersonaStatusIcon,
                    ye.a.BigPictureIcon,
                    Object(fe.b)(t)
                  ),
                  title: Object(g.f)("#Platform_Hint_BigPicture"),
                },
                i
              ),
              r.createElement(Ce.g, null)
            )
        );
      });
      var Ee = a("ksWZ"),
        Ne = a.n(Ee);
      function ve(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "span",
            { className: Ne.a.partyBeaconJoin },
            Object(g.f)("#User_WantsToPlay")
          ),
          " – ",
          e.persona.GetCurrentGameName()
        );
      }
      let Se = class extends r.Component {
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
              renderStatus: f,
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
          let N = null,
            v = null,
            S = null,
            j = [
              t,
              Ne.a.personaNameAndStatusLabel,
              Object(fe.b)(i),
              m && Ne.a.compactView,
              M && Ne.a.NoMask,
            ];
          y || i.has_public_party_beacon
            ? (v = valveisgoodatcaching(ve, { persona: i }))
            : Object(_e.a)(o)
            ? ((v = Object(g.f)("#PersonaStateBlocked")), j.push(Ne.a.blocked))
            : i.is_ingame
            ? ((v =
                !i.is_in_nonsteam_game || s || Object(_e.b)(o)
                  ? i.GetCurrentGameName()
                  : Object(g.f)("#PersonaStateInNonSteamGame")),
              s || C
                ? s &&
                  i.is_awayOrSnooze &&
                  (S = Object(g.f)("#PersonaStateAway"))
                : (S = i.GetCurrentGameRichPresence()))
            : i.m_broadcastAccountId &&
              (v = Object(g.f)("#PersonaStateWatchingBroadcast")),
            v || (v = i.GetLocalizedOnlineStatus()),
            f && (v = f());
          let A = !C && !u;
          !1 === u && (A = !0),
            i.is_awayOrSnooze && A && (N = r.createElement(be, { persona: i }));
          let O = null;
          a
            ? (O = r.createElement(
                "div",
                { className: "ContextMenuButton", onClick: a },
                r.createElement(Ce.x, null)
              ))
            : j.push(Ne.a.noContextMenu),
            C && j.push(Ne.a.hidePersona),
            h && (S = h()),
            (!d && S) || j.push(Ne.a.twoLine);
          const D = !i.is_ingame && !_,
            x = !p && S,
            P = v && (!d || !x);
          let B = c && !l,
            L = B ? c : i.m_strPlayerName,
            R = !C && (P || D) && x;
          return r.createElement(
            "div",
            Object.assign({}, E, {
              className: Object(b.a)(...j),
              onContextMenu: a,
            }),
            r.createElement(
              "div",
              {
                className: Object(b.a)(
                  Ne.a.statusAndName,
                  R && Ne.a.threeLines
                ),
              },
              r.createElement(
                "div",
                { className: Ne.a.playerName },
                L || " ",
                l &&
                  c &&
                  r.createElement(
                    "span",
                    { className: Ne.a.playerNickname },
                    "(",
                    c,
                    ")"
                  )
              ),
              I &&
                r.createElement(
                  "div",
                  {
                    className: Ne.a.DNDContainer,
                    title: Object(g.f)("#User_ToggleDoNotDisturb"),
                  },
                  r.createElement(Ce.v, null)
                ),
              B &&
                r.createElement(
                  "span",
                  {
                    className: Ne.a.playerNicknameBracket,
                    title: Object(g.f)("#isNickname"),
                  },
                  " *"
                ),
              r.createElement(Me, { persona: i }),
              N,
              (i.m_bPlayerNamePending || i.m_bAvatarPending) &&
                r.createElement(
                  "div",
                  {
                    className: Ne.a.PendingPersona,
                    title: Object(g.f)("#SteamChina_PendingPersonaName"),
                  },
                  r.createElement(Ce.q, null)
                ),
              O
            ),
            !C &&
              r.createElement(
                "div",
                { className: Ne.a.richPresenceContainer },
                (P || D) &&
                  r.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        Ne.a.gameName,
                        R && Ne.a.threeLines,
                        Ne.a.richPresenceLabel,
                        "no-drag"
                      ),
                    },
                    w &&
                      r.createElement(
                        "div",
                        {
                          className: Ne.a.gameIsPrivateIcon,
                          title: Object(g.f)("#User_GameInfoHidden"),
                        },
                        r.createElement(Ce.I, null)
                      ),
                    v
                  ),
                x &&
                  r.createElement(
                    "div",
                    {
                      className: Object(b.a)(Ne.a.richPresenceLabel, "no-drag"),
                    },
                    S,
                    " "
                  )
              )
          );
        }
      };
      Se = Object(n.b)([m.a], Se);
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
          Object.assign({}, s, { className: Object(b.a)(o, Object(fe.b)(t)) }),
          r.createElement(
            "span",
            { className: Ne.a.playerName },
            l || " ",
            a &&
              i &&
              r.createElement(
                "span",
                { className: Ne.a.playerNickname },
                "(",
                i,
                ")"
              )
          )
        );
      });
      var je = a("Gpul");
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
            f.a,
            {
              paddingY: "xlarge",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            i.a.createElement(
              f.a,
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
                      f.a,
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
                          i.a.createElement(je.c, {
                            size: "FillArea",
                            className: le.CurrentAvatar,
                            persona: n,
                            animatedAvatar: o.animated_avatar,
                          })
                        ),
                        i.a.createElement(Se, {
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
                f.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 1",
                },
                i.a.createElement(
                  "div",
                  { className: le.GoldenProfileTitle },
                  Object(g.f)("#GoldenProfile_Title")
                ),
                i.a.createElement(
                  "div",
                  { className: le.GoldenProfileDesc },
                  Object(g.f)("#GoldenProfile_Desc")
                ),
                i.a.createElement(
                  "div",
                  { className: le.GoldenProfileDesc },
                  Object(g.f)("#GoldenProfile_Expiration")
                ),
                i.a.createElement(
                  p.a,
                  { className: le.BlueButton },
                  i.a.createElement(
                    ce.a,
                    {
                      className: le.GoldenProfileCost,
                      onClick: (e) => Object(z.e)(e, a),
                      size: 1.125,
                      amount: parseInt(a.point_cost),
                    },
                    " ",
                    Object(g.f)("#Rewards_Points")
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
                  string: Object(g.f)("#GoldenProfile_Loading"),
                })
              ),
              i.a.createElement("iframe", {
                ref: e,
                className: le.ProfileFrame,
                src:
                  l.d.COMMUNITY_BASE_URL +
                  "profiles/" +
                  (_.b.Get().BIsLoggedIn()
                    ? l.k.steamid
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
      var Ae = a("/SGo"),
        Oe = a.n(Ae),
        De = a("eOCM"),
        xe = a.n(De),
        Pe = a("HJR3"),
        Be = a.n(Pe),
        Le = a("DtjR"),
        Re = a.n(Le),
        ke = a("TBZS"),
        Te = a.n(ke),
        Ge = a("+m6q"),
        ze = a.n(Ge),
        Fe = a("IfXo"),
        He = a.n(Fe),
        Ue = a("V+CE"),
        Ve = a.n(Ue),
        Ze = a("RImk"),
        We = a("5/sD"),
        Qe = a.n(We),
        Ye = a("cOvF"),
        qe = a("Vlb1"),
        Je = a("Gp1o"),
        Xe = a("CdLH");
      const Ke = Object(m.a)((e) => {
          const t = {
              item_name: "Free Item",
              item_title: Object(g.f)("#SummerSale_ItemTitle"),
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
            o = (e) => Object(z.e)(e, a, null, !0),
            c = Qe.a,
            m = Object(g.f)("#SummerSale_ItemName");
          const p = _.c.Get().BCanClaimFreeSaleReward();
          if (!p) {
            (r = i.a.createElement(
              "div",
              { className: qe.ClaimedText },
              Object(g.f)("#Rewards_Claimed")
            )),
              (n = Object(b.a)(Ze.SaleRewardItemOwned, qe.OwnedItem)),
              (o = null);
            const e = _.c.Get().GetClaimedSaleRewardItemDef();
            e &&
              ((m = e.community_item_data.item_title),
              (c = `${l.d.MEDIA_CDN_COMMUNITY_URL}images/items/${e.appid}/${e.community_item_data.item_image_small}`));
          }
          return i.a.createElement(
            f.a,
            {
              display: "flex",
              flexDirection: "column",
              className: Ze.SaleRewardContainer,
            },
            i.a.createElement(
              f.a,
              { className: Ze.SaleRewardContainerFlex },
              i.a.createElement(
                f.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  className: Ze.LeftColumn,
                },
                i.a.createElement(
                  "div",
                  { className: Ze.SaleRewardLogoContainerFlex },
                  i.a.createElement("img", {
                    className: Ze.SaleRewardLogo,
                    alt: "Sale",
                    src: _.b.Get().GetFreeItemHeaderSource(),
                  })
                ),
                i.a.createElement(
                  "div",
                  { className: Ze.SaleRewardTextContainer },
                  i.a.createElement(
                    "div",
                    { className: Ze.SaleRewardSubHeader },
                    Object(g.f)("#SummerSale_FreeDesc_2")
                  ),
                  !p &&
                    i.a.createElement(
                      "div",
                      { className: Ze.SummerNextStop },
                      i.a.createElement($e, null)
                    ),
                  i.a.createElement(
                    d.b,
                    { className: Ze.RulesLink, to: s.b.LoyaltyGiveawayRules() },
                    Object(g.f)("#SummerSale_Redeem_Rules")
                  )
                )
              ),
              i.a.createElement(
                "div",
                { className: Ze.FreeItemContainer },
                i.a.createElement(
                  B.a,
                  {
                    name: m,
                    cost: 0,
                    attributes: [
                      i.a.createElement(Ye.b, {
                        className: qe.IconAnimated,
                        key: "animated",
                      }),
                    ],
                    iconComponent: Ce.o,
                    styleOverride: n,
                    desc: Object(g.f)("#CommunityItemClass_Sticker"),
                    strPriceOverride: r,
                    onClick: o,
                  },
                  i.a.createElement("img", {
                    className: qe.ImageMedium,
                    src: c,
                  })
                )
              )
            )
          );
        }),
        $e = Object(m.a)(() => {
          const e = _.c.Get().GetNextClaimTime();
          return e
            ? i.a.createElement(
                "span",
                { className: Ze.NextStop },
                i.a.createElement(
                  "span",
                  { className: Ze.Title },
                  Object(g.f)("#SummerSale_NextStop")
                ),
                i.a.createElement(et, {
                  className: Ze.Timer,
                  time: e.getTime(),
                })
              )
            : null;
        }),
        et = Object(m.a)((e) => {
          const { time: t } = e,
            a = Object(n.c)(e, ["time"]),
            r = Math.floor(Math.max(0, t - Je.b()) / 1e3),
            o = Math.floor(r / Xe.e.PerHour),
            s = Math.floor((r - o * Xe.e.PerHour) / Xe.e.PerMinute),
            l = Math.floor(r - (o * Xe.e.PerHour + s * Xe.e.PerMinute));
          return i.a.createElement(
            "span",
            Object.assign({ style: { fontFamily: "monospace" } }, a),
            tt(o),
            ":",
            tt(s),
            ":",
            tt(l)
          );
        }),
        tt = (e) => e.toString().padStart(2, "0"),
        at = i.a.lazy(() => a.e(73).then(a.bind(null, "yDev"))),
        nt = i.a.lazy(() => a.e(72).then(a.bind(null, "f4w8")));
      let rt = class extends i.a.Component {
        render() {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(st, null),
            i.a.createElement(it, null)
          );
        }
      };
      rt = Object(n.b)([m.a], rt);
      const it = Object(m.a)(() => {
        const e = Object(o.i)("*/reward/:definitionid"),
          t = e && e.params && e.params.definitionid,
          a = parseInt(t),
          n = isNaN(a) ? null : _.b.Get().GetRewardItem(a);
        return (
          i.a.useEffect(() => {
            n && Object(z.e)(null, n);
          }, [n]),
          null
        );
      });
      let ot = class extends i.a.Component {
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
                  src: Oe.a,
                }),
                i.a.createElement("img", {
                  className: u.PageHomeBannerFloor,
                  src: Ve.a,
                }),
                i.a.createElement(
                  "div",
                  { className: u.PageHomeBannerIcons },
                  i.a.createElement("img", {
                    className: u.PageHomeBannerChicken,
                    src: Te.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerBored,
                    src: xe.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerHugs,
                    src: ze.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerHappy,
                    src: Be.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerBoombox,
                    src: Re.a,
                  }),
                  i.a.createElement("img", {
                    className: u.PageHomeBannerDance,
                    src: He.a,
                  })
                )
              ),
              i.a.createElement(
                "div",
                { className: u.PageHomeTitleContainer },
                i.a.createElement(
                  "div",
                  { className: u.PageHomeTopTitle },
                  Object(g.f)("#ShopHome_UseRewardPoints")
                ),
                i.a.createElement(
                  "div",
                  { className: u.PageHomeTopSubTitle },
                  Object(g.f)("#ShopHome_UseRewardPoints_Subtitle")
                )
              ),
              i.a.createElement(
                d.b,
                { to: s.b.LoyaltyHowItWorks() },
                i.a.createElement(
                  p.a,
                  { className: u.PageHomeHowItWorks },
                  " ",
                  Object(g.f)("#ShopHome_HowLinkBtn")
                )
              )
            );
          return i.a.createElement(
            me.b,
            null,
            t &&
              i.a.createElement(
                dt,
                { header: a, descriptor: t },
                _.b.Get().BIsSaleActive() &&
                  i.a.createElement(P.b, null, i.a.createElement(Ke, null))
              )
          );
        }
      };
      ot = Object(n.b)([m.a], ot);
      const st = () =>
          i.a.createElement(
            o.d,
            null,
            i.a.createElement(
              o.b,
              { path: s.b.LoyaltySteamBadge() },
              i.a.createElement(lt, null)
            ),
            i.a.createElement(
              o.b,
              { path: s.b.LoyaltyByGame() },
              i.a.createElement(ft, null)
            ),
            !1,
            i.a.createElement(
              o.b,
              { path: s.b.LoyaltyProfileCustomizations() },
              i.a.createElement(at, null)
            ),
            i.a.createElement(o.b, {
              path: s.b.LoyaltyItemBundle(":bundleid"),
              render: (e) => i.a.createElement(nt, Object.assign({}, e)),
            }),
            i.a.createElement(o.b, {
              path: `${s.b.LoyaltyStore()}/app/:appid/cluster/:clusterindex`,
              render: (e) => i.a.createElement(pt, Object.assign({}, e)),
            }),
            i.a.createElement(o.b, {
              path: `${s.b.LoyaltyStore()}/app/:appid`,
              render: (e) =>
                i.a.createElement(ut, {
                  appid: parseInt(e.match.params.appid),
                }),
            }),
            i.a.createElement(o.b, {
              path: `${s.b.LoyaltyStore()}/c/:pageid/cluster/:clusterindex`,
              render: (e) => i.a.createElement(pt, Object.assign({}, e)),
            }),
            i.a.createElement(o.b, {
              path: `${s.b.LoyaltyStore()}/c/:pageid`,
              render: (e) =>
                i.a.createElement(mt, { pageid: e.match.params.pageid }),
            }),
            i.a.createElement(o.b, null, i.a.createElement(ct, null))
          ),
        lt = () => i.a.createElement(se.b, null),
        ct = () => i.a.createElement(ot, null);
      let mt = class extends i.a.Component {
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
              ? i.a.createElement(dt, {
                  descriptor: n,
                  additionalFilter: a.length ? { appid: a } : void 0,
                })
              : i.a.createElement(I, null)
          );
        }
      };
      mt = Object(n.b)([m.a], mt);
      let dt = class extends i.a.Component {
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
            f.a,
            { paddingX: "none" },
            i.a.createElement(
              f.f,
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
                    return i.a.createElement(Q, {
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
      dt = Object(n.b)([m.a], dt);
      let pt = class extends i.a.Component {
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
              f.a,
              {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              i.a.createElement(Q, {
                descriptor: e,
                additionalFilter: a.length ? { appid: a } : void 0,
              })
            )
          );
        }
      };
      pt = Object(n.b)([m.a], pt);
      let ut = class extends i.a.Component {
        render() {
          const { appid: e } = this.props,
            t = _.b.Get().GetPageDescriptor({ type: "app", appid: e }),
            a = oe.a.GetAppInfo(e);
          return t
            ? i.a.createElement(
                me.a,
                { appid: e },
                i.a.createElement(dt, {
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
      ut = Object(n.b)([m.a], ut);
      class _t extends i.a.Component {
        render() {
          return _.b.Get().BIsLoggedIn()
            ? this.props.children
            : i.a.createElement(
                me.e,
                null,
                i.a.createElement(dt, { descriptor: this.props.descriptor }),
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
                    Object(g.f)("#RequiresLogin_Desc")
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
                        Object(g.f)("#RequiresLogin_Button")
                      )
                    )
                  )
                )
              );
        }
      }
      let ft = class extends i.a.Component {
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
            title: Object(g.f)("#ShopPageTitle_ByGame"),
            subtitle: Object(g.f)("#ShopPageTitle_ByGame_Subtitle"),
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
            _t,
            { descriptor: n },
            i.a.createElement(
              me.e,
              null,
              i.a.createElement(dt, { descriptor: n }),
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
      ft = Object(n.b)([m.a], ft);
      var gt = a("0FY4");
      const ht = Object(m.a)(() =>
          i.a.createElement(
            me.d,
            null,
            i.a.createElement(
              f.a,
              {
                marginX: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              i.a.createElement(
                f.a,
                {
                  marginY: "xlarge",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  className: gt.Header,
                },
                i.a.createElement(Ce.cb, { className: gt.Icon }),
                i.a.createElement(
                  "div",
                  { className: gt.Title },
                  Object(g.f)("#BonusPoints_Title")
                ),
                i.a.createElement(
                  "div",
                  { className: gt.Subtitle },
                  Object(g.f)("#BonusPoints_Description")
                )
              ),
              i.a.createElement(
                f.f,
                { spacing: "small" },
                _.b
                  .Get()
                  .active_bonuses.map((e) =>
                    i.a.createElement(bt, { key: e.bonusid, bonus: e })
                  )
              )
            )
          )
        ),
        bt = Object(m.a)((e) => {
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
            Ct,
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
        Ct = (e) => {
          const {
              imgSrc: t,
              name: a,
              expiration: n,
              description: r,
              pointValue: o,
            } = e,
            s = Object(g.p)(n - Date.now() / 1e3, !0);
          return i.a.createElement(
            f.a,
            {
              paddingX: "small",
              paddingY: "xsmall",
              display: "flex",
              flexDirection: "row",
              className: gt.Opportunity,
            },
            i.a.createElement("img", { className: gt.Img, src: t }),
            i.a.createElement(
              f.a,
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
              i.a.createElement(Ce.cb, { className: gt.Icon }),
              i.a.createElement("div", null, "+", o)
            )
          );
        };
      var It = a("kyHq");
      a("6Mq3");
      a("F8+w");
      var yt = a("gxgZ"),
        wt = a.n(yt),
        Mt = (a("8j8b"), a("okIP"), a("Lvue"), a("6bk4")),
        Et = a.n(Mt),
        Nt = a("++az"),
        vt = a.n(Nt),
        St = (a("kJAG"), a("y8q+"), a("sf1Z"), a("Cw7J")),
        jt = a.n(St),
        At =
          (a("FYLW"),
          a("eRlu"),
          a("TL5o"),
          a("J8Mo"),
          a("2y1i"),
          a("tHRV"),
          a("bnhs")),
        Ot = a.n(At),
        Dt = a("Bww3"),
        xt = a.n(Dt),
        Pt = a("eeci"),
        Bt = a.n(Pt),
        Lt = a("9jkg"),
        Rt = a.n(Lt),
        kt = a("M2Z0"),
        Tt = a.n(kt),
        Gt = a("7JP+"),
        zt = a.n(Gt),
        Ft = a("nu2M"),
        Ht = a.n(Ft),
        Ut = a("FfFA"),
        Vt = a.n(Ut),
        Zt = a("bFVC"),
        Wt = a.n(Zt),
        Qt = a("Wl4Y"),
        Yt = a.n(Qt),
        qt = a("BK9T"),
        Jt = a.n(qt),
        Xt = a("mpVu"),
        Kt = a.n(Xt),
        $t = a("px4M"),
        ea = a.n($t),
        ta = a("uOv9");
      const aa = (e) => {
          const { children: t, iconComponent: a, descCallout: n } = e,
            r = a,
            o = n;
          return i.a.createElement(
            "div",
            { className: ta.CalloutContainer },
            i.a.createElement(
              "div",
              { className: ta.CalloutIconContainer },
              i.a.createElement(r, { className: ta.CalloutIcon })
            ),
            i.a.createElement(
              "div",
              { className: ta.CalloutText },
              " ",
              Object(g.f)(o),
              " "
            )
          );
        },
        na = (e) =>
          i.a.createElement(
            f.a,
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xlarge",
              className: ta.PageContainer,
            },
            i.a.createElement(
              "div",
              { className: ta.HeaderText },
              Object(g.f)("#HowItWorks_SteamPoints")
            ),
            i.a.createElement(
              "div",
              { className: ta.SubHeaderText },
              Object(g.f)("#HowItWorks_SteamPoints_Desc1")
            ),
            i.a.createElement("img", { src: Yt.a, className: ta.HeaderImage }),
            i.a.createElement(
              "div",
              { className: ta.SubHeaderText },
              Object(g.f)("#HowItWorks_SteamPoints_Desc2")
            )
          ),
        ra = (e) => {
          let t = Object(g.m)(
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
            f.e,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "medium",
              className: ta.PageContainer,
              focusable: !0,
              noFocusRing: !0,
            },
            i.a.createElement(
              "div",
              { className: Object(b.a)(ta.ConvertionSectionTextContainer) },
              i.a.createElement("div", { className: ta.PointsConvertion }, t),
              i.a.createElement(
                "div",
                { className: ta.SectionSubtitle },
                Object(g.f)("#HowItWorks_How_Desc")
              )
            )
          );
        },
        ia = (e) => {
          let t = Object(g.m)(
            "#ShopName",
            i.a.createElement("span", null, Object(g.f)("#ShopNamePre")),
            Object(g.f)("#ShopNamePost")
          );
          return i.a.createElement(
            f.a,
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
            },
            i.a.createElement(
              f.e,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                className: ta.UsePointsIconContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement(Ye.g, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim1),
              }),
              i.a.createElement(Ce.d, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim2),
              }),
              i.a.createElement(Ce.e, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim3),
              }),
              i.a.createElement(Ye.m, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim4),
              }),
              i.a.createElement(Ce.o, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim5),
              }),
              i.a.createElement(Ce.m, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim6),
              }),
              i.a.createElement(Ce.n, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim7),
              }),
              i.a.createElement(Ye.A, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim8),
              }),
              i.a.createElement(Ye.g, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim1),
              }),
              i.a.createElement(Ce.d, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim2),
              }),
              i.a.createElement(Ce.e, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim3),
              }),
              i.a.createElement(Ye.m, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim4),
              }),
              i.a.createElement(Ce.o, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim5),
              }),
              i.a.createElement(Ce.m, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim6),
              }),
              i.a.createElement(Ce.n, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim7),
              }),
              i.a.createElement(Ye.A, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim8),
              }),
              i.a.createElement(Ye.g, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim1),
              }),
              i.a.createElement(Ce.d, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim2),
              }),
              i.a.createElement(Ce.e, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim3),
              }),
              i.a.createElement(Ye.m, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim4),
              }),
              i.a.createElement(Ce.o, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim5),
              }),
              i.a.createElement(Ce.m, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim6),
              }),
              i.a.createElement(Ce.n, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim7),
              }),
              i.a.createElement(Ye.A, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim8),
              }),
              i.a.createElement(Ye.g, {
                className: Object(b.a)(ta.UsePointsSvg, ta.UsePointsAnim1),
              })
            ),
            i.a.createElement(
              f.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "xxlarge",
                className: ta.PageContainer,
              },
              i.a.createElement(
                "div",
                { className: ta.ShellHeaderBrandName },
                t
              ),
              i.a.createElement(
                "div",
                { className: ta.SectionSubtitle },
                Object(g.f)("#HowItWorks_UsePoints_Desc1")
              ),
              i.a.createElement(
                f.e,
                {
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "large",
                  focusable: !0,
                  noFocusRing: !0,
                },
                i.a.createElement(aa, {
                  iconComponent: Ye.p,
                  descCallout: "#HowItWorks_DoNotExpire",
                }),
                i.a.createElement(aa, {
                  iconComponent: Ye.i,
                  descCallout: "#HowItWorks_Permanent",
                }),
                i.a.createElement(aa, {
                  iconComponent: Ye.q,
                  descCallout: "#HowItWorks_Marketable",
                })
              ),
              i.a.createElement(
                f.e,
                {
                  className: ta.CollectionItemsContainer,
                  focusable: !0,
                  noFocusRing: !0,
                },
                i.a.createElement("img", { className: ta.ItemLeft, src: Et.a }),
                i.a.createElement("img", {
                  className: ta.ItemLeftMid,
                  src: xe.a,
                }),
                i.a.createElement(
                  "div",
                  { className: ta.ItemMiddle },
                  i.a.createElement("img", {
                    className: ta.ItemFrame,
                    src: jt.a,
                  }),
                  i.a.createElement("img", {
                    className: ta.ItemAvatar,
                    src: vt.a,
                  })
                ),
                i.a.createElement("img", {
                  className: ta.ItemRightMid,
                  src: Be.a,
                }),
                i.a.createElement("img", { className: ta.ItemRight, src: Re.a })
              )
            )
          );
        },
        oa = () => {
          let e = s.b.LoyaltyByGame();
          return i.a.createElement(
            "div",
            {
              className: ta.SectionTileContainer,
              style: { backgroundImage: `url(${wt.a})` },
            },
            i.a.createElement(
              f.a,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "xlarge",
                paddingLeft: "xlarge",
                paddingBottom: "xxlarge",
              },
              i.a.createElement(Ye.A, { className: ta.SectionIcons }),
              i.a.createElement(
                d.b,
                { to: e },
                i.a.createElement(
                  "div",
                  { className: ta.SectionTitle },
                  Object(g.f)("#HowItWorks_YourGames")
                )
              ),
              i.a.createElement(
                "div",
                { className: ta.SectionSubtitle },
                Object(g.f)("#HowItWorks_YourGames_Desc1")
              ),
              i.a.createElement(
                f.e,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                  focusable: !0,
                  noFocusRing: !0,
                },
                i.a.createElement(aa, {
                  iconComponent: Ye.q,
                  descCallout: "#HowItWorks_YourGames_TradingCards",
                })
              )
            )
          );
        },
        sa = Object(m.a)(() => {
          let e = _.b.Get().GetCommunityAwardPointsTransferred(),
            t = l.d.STORE_BASE_URL + "labs/trendingreviews/",
            a = l.d.COMMUNITY_BASE_URL + "?subsection=workshop";
          return i.a.createElement(
            f.a,
            {
              id: "CommunityAwards",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "xxlarge",
            },
            i.a.createElement(
              f.e,
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                className: ta.UsePointsIconContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement("img", { src: xt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Ot.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: zt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Ht.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Vt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: xt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Tt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: zt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Ht.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Vt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: xt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Ot.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: zt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Ht.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Vt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: xt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Tt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: zt.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Ht.a, className: ta.ScrollIcon }),
              i.a.createElement("img", { src: Vt.a, className: ta.ScrollIcon })
            ),
            i.a.createElement(
              f.e,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "xxlarge",
                className: ta.PageContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement(
                "div",
                { className: ta.ShellHeaderBrandName },
                Object(g.f)("#HowItWorks_ReviewAwards")
              ),
              i.a.createElement(
                "div",
                { className: ta.SectionSubtitle },
                Object(g.f)("#HowItWorks_ReviewAwardsWinter_Desc", e)
              ),
              i.a.createElement("img", { src: Wt.a, className: ta.AwardsUiImg })
            ),
            i.a.createElement(
              f.e,
              {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "large",
                className: ta.PageContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement(
                f.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                },
                i.a.createElement("img", {
                  src: Bt.a,
                  className: ta.AwardsHotTakeApng,
                }),
                i.a.createElement(
                  f.a,
                  { display: "flex", flexDirection: "column" },
                  i.a.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        ta.SectionSubtitle,
                        ta.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(g.f)("#HowItWorks_AwardsReviews", e)
                  ),
                  i.a.createElement(
                    "a",
                    { href: t },
                    i.a.createElement(
                      "div",
                      { className: ta.AwardsLink },
                      Object(g.f)("#HowItWorks_AwardsReviewsLink")
                    )
                  )
                )
              ),
              i.a.createElement(
                f.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                },
                i.a.createElement("img", {
                  src: Jt.a,
                  className: ta.AwardsApng,
                }),
                i.a.createElement(
                  f.a,
                  { display: "flex", flexDirection: "column" },
                  i.a.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        ta.SectionSubtitle,
                        ta.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(g.f)("#HowItWorks_AwardsUgc", e)
                  ),
                  i.a.createElement(
                    "a",
                    { href: a },
                    i.a.createElement(
                      "div",
                      { className: ta.AwardsLink },
                      Object(g.f)("#HowItWorks_AwardsUgcLink")
                    )
                  )
                )
              ),
              i.a.createElement(
                f.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "large",
                },
                i.a.createElement("img", {
                  src: Rt.a,
                  className: ta.AwardsHotTakeApng,
                }),
                i.a.createElement(
                  f.a,
                  { display: "flex", flexDirection: "column" },
                  i.a.createElement(
                    "div",
                    {
                      className: Object(b.a)(
                        ta.SectionSubtitle,
                        ta.SectionSubtitleLeftAlign
                      ),
                    },
                    Object(g.f)("#HowItWorks_AwardsProfile", e)
                  )
                )
              )
            ),
            i.a.createElement(
              f.e,
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "xlarge",
                className: ta.PageContainer,
                focusable: !0,
                noFocusRing: !0,
              },
              i.a.createElement(
                f.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: ta.AwardBadgeContainer,
                },
                i.a.createElement("img", { src: ea.a }),
                i.a.createElement(
                  "div",
                  {
                    className: ta.SectionTitleSmall,
                    style: { paddingTop: "32px" },
                  },
                  Object(g.f)("#HowItWorks_Patron_Badge"),
                  " "
                ),
                i.a.createElement(
                  "div",
                  { className: ta.SectionSubtitleBadge },
                  Object(g.f)("#HowItWorks_Patron_Badge_Desc")
                )
              ),
              i.a.createElement(
                f.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "large",
                  className: ta.AwardBadgeContainer,
                },
                i.a.createElement("img", { src: Kt.a }),
                i.a.createElement(
                  "div",
                  {
                    className: ta.SectionTitleSmall,
                    style: { paddingTop: "32px" },
                  },
                  Object(g.f)("#HowItWorks_Contributor_Badge"),
                  " "
                ),
                i.a.createElement(
                  "div",
                  { className: ta.SectionSubtitleBadge },
                  Object(g.f)("#HowItWorks_Contributor_Badge_Desc")
                )
              )
            )
          );
        });
      const la = () => {
          const e = (function () {
            const e = Object(It.b)(l.d.EREALM);
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
            f.a,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "xxxlarge",
              className: ta.FaqContainer,
            },
            i.a.createElement(
              f.a,
              { display: "flex", flexDirection: "column" },
              i.a.createElement(
                "div",
                { className: ta.FaqTitle },
                Object(g.f)("#Faq_Title")
              ),
              e.map((e) =>
                i.a.createElement(
                  ca,
                  Object.assign({}, e, {
                    key: Array.isArray(e.question) ? e.question[0] : e.question,
                  })
                )
              )
            )
          );
        },
        ca = (e) => {
          const { question: t, answer: a } = e,
            n = Array.isArray(t) ? t : [t],
            r = Array.isArray(a) ? a : [a];
          return i.a.createElement(
            f.e,
            {
              display: "flex",
              flexDirection: "column",
              paddingTop: "medium",
              paddingBottom: "medium",
              focusable: !0,
            },
            n.map((e) => i.a.createElement(ma, { key: e }, Object(g.f)(e))),
            r.map((e) => i.a.createElement(da, { key: e }, Object(g.f)(e)))
          );
        },
        ma = ({ children: e }) =>
          i.a.createElement("div", { className: ta.FaqQuestion }, e),
        da = ({ children: e }) =>
          i.a.createElement("div", { className: ta.FaqAnswer }, e),
        pa = () => {
          let e = _.b.Get().GetConfig().points_conversion.unit_spend,
            t = _.b.Get().GetConfig().points_conversion.points;
          return i.a.createElement(
            me.c,
            null,
            i.a.createElement(
              me.b,
              null,
              i.a.createElement(
                f.a,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  style: { width: "100%" },
                  id: "Title",
                },
                i.a.createElement(na, null),
                i.a.createElement(ra, { dollarConversion: e, numPoints: t }),
                i.a.createElement(ia, null),
                i.a.createElement(oa, null),
                !Object(It.b)(l.d.EREALM) && i.a.createElement(sa, null),
                i.a.createElement(la, null)
              )
            )
          );
        };
      var ua = a("8j16"),
        _a = a("+d9t");
      let fa = class extends i.a.Component {
        constructor(e) {
          super(e), _.b.Get().GetLoyaltyRewardsSummary();
        }
        render() {
          return Object(It.b)(l.d.EREALM)
            ? i.a.createElement(
                me.e,
                null,
                i.a.createElement(
                  f.a,
                  {
                    className: ua.PageContainer,
                    marginX: "xlarge",
                    display: "flex",
                    flexDirection: "column",
                  },
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "large",
                      display: "flex",
                      flexDirection: "column",
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.PageHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_Header_China")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_Intro_China")
                    )
                  ),
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: ua.Section,
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_1_Title_China")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_1_Desc_China")
                    )
                  ),
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: ua.Section,
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_2_Title_China")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_2_Desc_China")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_2_Desc2_China")
                    )
                  ),
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: ua.Section,
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_3_Title_China")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_3_Desc_China")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_3_Desc2_China")
                    )
                  ),
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: ua.Section,
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_4_Title_China")
                    ),
                    i.a.createElement(
                      f.a,
                      { marginY: "xsmall", className: ua.SectionContent },
                      Object(g.m)(
                        "#LunarSale2022_Rules_4_Desc_China",
                        i.a.createElement(
                          _a.a,
                          { href: l.d.STORE_BASE_URL + "privacy_agreement" },
                          Object(g.f)("#LunarSale2022_Rules_ClickHere")
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
                  f.a,
                  {
                    className: ua.PageContainer,
                    marginX: "xlarge",
                    display: "flex",
                    flexDirection: "column",
                  },
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "large",
                      display: "flex",
                      flexDirection: "column",
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.PageHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_Header")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_Intro")
                    )
                  ),
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: ua.Section,
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_1_Title")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_1_Desc")
                    )
                  ),
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: ua.Section,
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_2_Title")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_2_Desc")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_2_Desc2")
                    )
                  ),
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: ua.Section,
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_3_Title")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_3_Desc")
                    ),
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "xsmall",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionContent,
                      },
                      Object(g.f)("#LunarSale2022_Rules_3_Desc2")
                    )
                  ),
                  i.a.createElement(
                    f.a,
                    {
                      marginY: "medium",
                      display: "flex",
                      flexDirection: "column",
                      className: ua.Section,
                    },
                    i.a.createElement(
                      f.a,
                      {
                        marginY: "small",
                        display: "flex",
                        flexDirection: "column",
                        className: ua.SectionHeader,
                      },
                      Object(g.f)("#LunarSale2022_Rules_4_Title")
                    ),
                    i.a.createElement(
                      f.a,
                      { marginY: "xsmall", className: ua.SectionContent },
                      Object(g.m)(
                        "#LunarSale2022_Rules_4_Desc",
                        i.a.createElement(
                          _a.a,
                          { href: l.d.STORE_BASE_URL + "privacy_agreement" },
                          Object(g.f)("#LunarSale2022_Rules_ClickHere")
                        )
                      )
                    )
                  )
                )
              );
        }
      };
      fa = Object(n.b)([m.a], fa);
      var ga = a("ykc/"),
        ha = (a("kKgT"), a("opsS")),
        ba = a("tt0l");
      a("NxAk");
      const Ca = "FocusNavHistoryID";
      function Ia(e) {
        const { children: t } = e,
          a = Object(n.c)(e, ["children"]),
          i = (function () {
            const e = Object(o.g)(),
              t = r.useRef(),
              a = Object(o.h)(),
              n = a.state && a.state.FocusNavHistoryID,
              i = r.useRef(),
              s = r.useRef();
            return (
              r.useLayoutEffect(() => {
                if (t.current)
                  return (
                    s.current || (s.current = new ba.b(t.current.Node())),
                    t.current
                      .Node()
                      .Tree.Controller.FocusChangedCallbacks.Register(
                        (t, a, n) => {
                          const r = e.location;
                          let o = r.state && r.state.FocusNavHistoryID;
                          o ||
                            ((o = `State_${r.key}`),
                            (i.current = o),
                            e.replace(
                              r.pathname,
                              Object.assign(Object.assign({}, r.state), {
                                [Ca]: o,
                              })
                            )),
                            i.current == o && s.current.SaveState(o);
                        }
                      ).Unregister
                  );
              }, [e]),
              r.useEffect(() => {
                if (t.current && i.current != n) {
                  const e = t.current.NavTree().Controller,
                    a = window.setTimeout(
                      () =>
                        e.RestoreHistoryTransaction(() => {
                          s.current.RestoreState(n) && t.current.TakeFocus(),
                            (i.current = n);
                        }),
                      10
                    );
                  return () => window.clearTimeout(a);
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
      var ya = a("hwrv"),
        wa = a("1Gs6"),
        Ma = a("y+6m"),
        Ea = a("TtDX"),
        Na = a("1U4k");
      const va = (e) => {
          const { appid: t } = e,
            a = oe.a.GetAppInfo(t);
          return r.createElement(
            "div",
            {
              className: Na.CurrentAppFilter,
              onClick: () => {
                _.b.Get().RemoveAppIDFilter(t);
              },
            },
            r.createElement("div", null, a.name),
            r.createElement(Ye.d, { className: Na.AppFilterClearIcon })
          );
        },
        Sa = (e) => {
          const { appid: t } = e,
            a = oe.a.GetAppInfo(t);
          return r.createElement(
            "div",
            {
              className: Na.SuggestedAppFilter,
              onClick: () => {
                _.b.Get().AddAppIDFilter(t);
              },
            },
            r.createElement(Ye.a, { className: Na.AddGameToFilterIcon }),
            r.createElement(
              "div",
              { className: Na.SuggestedAppFilterName },
              a.name
            )
          );
        };
      let ja = class extends r.Component {
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
                { className: Na.AppFilterNoMatches },
                Object(g.f)("#AppFilter_NoMatches")
              )),
            r.createElement(
              "div",
              { className: Na.ManageAppFiltersPopup },
              r.createElement(
                "div",
                { className: Na.HeaderContainer },
                r.createElement(
                  "div",
                  { className: Na.Header },
                  Object(g.f)("#AppFilter_Label")
                )
              ),
              0 != t.size &&
                r.createElement(
                  "div",
                  { className: Na.CurrentAppFiltersContainer },
                  Array.from(t.keys()).map((e) =>
                    oe.a.GetAppInfo(e).is_valid
                      ? r.createElement(va, { key: e, appid: e })
                      : null
                  )
                ),
              r.createElement(
                "div",
                { className: Na.AppInputFilterContainer },
                r.createElement("input", {
                  className: Na.AppInputFilter,
                  type: "text",
                  onChange: this.OnFilterByText,
                  value: e,
                }),
                r.createElement(
                  "div",
                  {
                    className: Na.AppFilterClearButton,
                    onClick: this.ClearAppFilterString,
                  },
                  r.createElement(Ye.d, { className: Na.AppFilterClearIcon })
                )
              ),
              o,
              r.createElement(
                "div",
                { className: Na.AppCheckboxesContainer },
                i.map((e) =>
                  oe.a.GetAppInfo(e).is_valid
                    ? r.createElement(Sa, { key: e, appid: e })
                    : null
                )
              ),
              0 != n.length &&
                r.createElement(
                  "div",
                  { className: Na.HeaderContainer },
                  r.createElement(
                    "div",
                    { className: Na.Header },
                    Object(g.f)("#AppFilter_FilterByRecentlyPlayed")
                  )
                ),
              0 != n.length &&
                r.createElement(
                  "div",
                  { className: Na.AppCheckboxesContainer },
                  n.map((e) =>
                    oe.a.GetAppInfo(e).is_valid
                      ? r.createElement(Sa, { key: e, appid: e })
                      : null
                  )
                )
            )
          );
        }
      };
      (ja.defaultProps = {
        maxGamesToDisplay: 3,
        minCharactersForNameFilter: 3,
      }),
        Object(n.b)([ha.a], ja.prototype, "CloseModal", null),
        Object(n.b)([ha.a], ja.prototype, "OnChangeAppFilterCheckbox", null),
        Object(n.b)([ha.a], ja.prototype, "OnFilterByText", null),
        Object(n.b)([ha.a], ja.prototype, "ClearAppFilterString", null),
        (ja = Object(n.b)([m.a], ja));
      let Aa = "",
        Oa = null,
        Da = null,
        xa = null;
      function Pa() {
        (Aa = ""),
          null !== Oa && Oa.disconnect(),
          null !== Da && (window.clearTimeout(Da), (Da = null));
      }
      function Ba() {
        const e = document.getElementById(Aa);
        return null !== e && (xa(e), Pa(), !0);
      }
      function La(e) {
        return i.a.forwardRef((t, a) => {
          const { scroll: r, smooth: o } = t,
            s = Object(n.c)(t, ["scroll", "smooth"]);
          return i.a.createElement(
            e,
            Object.assign({}, s, {
              onClick: (e) => {
                Pa(),
                  t.onClick && t.onClick(e),
                  "string" == typeof t.to
                    ? (Aa = t.to.split("#").slice(1).join("#"))
                    : "object" == typeof t.to &&
                      "string" == typeof t.to.hash &&
                      (Aa = t.to.hash.replace("#", "")),
                  "" !== Aa &&
                    ((xa =
                      t.scroll ||
                      ((e) =>
                        t.smooth
                          ? e.scrollIntoView({ behavior: "smooth" })
                          : e.scrollIntoView())),
                    window.setTimeout(() => {
                      !1 === Ba() &&
                        (null === Oa && (Oa = new MutationObserver(Ba)),
                        Oa.observe(document, {
                          attributes: !0,
                          childList: !0,
                          subtree: !0,
                        }),
                        (Da = window.setTimeout(() => {
                          Pa();
                        }, 1e4)));
                    }, 0));
              },
              ref: a,
            }),
            t.children
          );
        });
      }
      La(function (e) {
        return i.a.createElement(d.b, Object.assign({ component: ae }, e));
      });
      const Ra = La(ne);
      var ka = a("1xRl"),
        Ta = a("rKGf");
      const Ga = i.a.createContext(() => {}),
        za = (e) => {
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
            [_, f] = i.a.useState(0);
          return (
            i.a.useLayoutEffect(() => {
              if (_) {
                const e = setInterval(() => c((e) => e + _), 50);
                return () => clearInterval(e);
              }
            }, [_]),
            i.a.createElement(
              Ga.Provider,
              { value: u },
              i.a.createElement(
                w.a,
                Object.assign({ "flow-children": "row" }, r, {
                  className: Object(b.a)(Ta.ItemContainer, a),
                  ref: m,
                  fnScrollIntoViewHandler: () => !0,
                }),
                t,
                i.a.createElement("div", { className: Ta.Accent, style: p })
              )
            )
          );
        },
        Fa = (e) => {
          var { children: t, active: a, className: r } = e,
            o = Object(n.c)(e, ["children", "active", "className"]);
          const s = i.a.useContext(Ga),
            [l, c] = i.a.useState(null),
            m = i.a.useCallback((e) => c(e), []);
          return (
            i.a.useLayoutEffect(() => {
              a && l && s({ x: l.offsetLeft, width: l.clientWidth });
            }, [a, l, s]),
            i.a.createElement(
              "div",
              Object.assign(
                { className: Object(b.a)(Ta.Item, a && Ta.Active, r), ref: m },
                o
              ),
              t
            )
          );
        };
      const Ha = "#CommunityAwards",
        Ua = (e) => (t, a) => {
          if (!t) return !1;
          return (a.hash === Ha) === e;
        },
        Va = () => {
          const e = [
            {
              items: [
                {
                  props: {
                    iconComponent: Ye.o,
                    children: Object(g.f)("#HowItWorksLink"),
                    to: { pathname: s.b.LoyaltyHowItWorks(), hash: "#Title" },
                    isActive: Ua(!1),
                  },
                },
                {
                  props: {
                    iconComponent: Ye.u,
                    children: Object(g.f)("#ShopNav_Featured"),
                    to: s.b.LoyaltyStore(),
                    exact: !0,
                  },
                },
                {
                  props: {
                    iconComponent: Ye.A,
                    children: Object(g.f)("#ShopNav_ByGame"),
                    to: s.b.LoyaltyByGame(),
                  },
                },
              ],
            },
            {
              label: Object(g.f)("#ProfileItems"),
              items: [
                {
                  props: {
                    iconComponent: Ye.g,
                    children: Object(g.f)("#ShopNav_AvatarLink"),
                    to: s.b.LoyaltyAvatar(),
                  },
                },
                {
                  props: {
                    iconComponent: Ce.d,
                    children: Object(g.f)("#ShopNav_BackgroundsLink"),
                    to: s.b.LoyaltyBackgrounds(),
                  },
                },
              ],
            },
            {
              label: Object(g.f)("#ChatItems"),
              items: [
                {
                  props: {
                    iconComponent: Ce.o,
                    children: Object(g.f)("#ShopNav_StickersLink"),
                    to: s.b.LoyaltyStickers(),
                  },
                },
                {
                  props: {
                    iconComponent: Ce.m,
                    children: Object(g.f)("#ShopNav_ChatEffectsLink"),
                    to: s.b.LoyaltyChatEffects(),
                  },
                },
                {
                  props: {
                    iconComponent: Ce.n,
                    children: Object(g.f)("#ShopNav_EmoticonsLink"),
                    to: s.b.LoyaltyEmoticons(),
                  },
                },
              ],
            },
          ];
          e[0].items.push({
            props: {
              iconComponent: Ye.r,
              children: Object(g.f)("#ShopNav_ItemBundlesLink"),
              to: { pathname: s.b.LoyaltyItemBundles() },
            },
          });
          const t = Object(It.b)(l.d.EREALM);
          return (
            e[0].items.push({
              props: {
                iconComponent: Ye.s,
                children: Object(g.f)("#ShopNav_SteamDeckKeyboardSkinLink"),
                to: { pathname: s.b.LoyaltyKeyboard() },
              },
            }),
            t ||
              l.d.IN_GAMEPADUI ||
              e[0].items.push({
                props: {
                  iconComponent: Ye.l,
                  children: Object(g.f)("#ShopNav_AwardsLink"),
                  to: {
                    pathname: s.b.LoyaltyHowItWorks(),
                    hash: "#CommunityAwards",
                  },
                  isActive: Ua(!0),
                },
              }),
            t ||
              (e[1].items.push({
                props: {
                  iconComponent: Ce.e,
                  children: Object(g.f)("#ShopNav_SeasonalBadgeLink"),
                  to: s.b.LoyaltySteamBadge(),
                  iconCallout: Ye.w,
                },
              }),
              e[1].items.push({
                props: {
                  iconComponent: Ye.y,
                  children: Object(g.f)("#ShopNav_ProfileBundlesLink"),
                  to: s.b.LoyaltyProfileBundles(),
                },
              }),
              e[1].items.push({
                props: {
                  iconComponent: Ye.f,
                  children: Object(g.f)("#ShopPageTitle_ArtistProfiles"),
                  to: s.b.LoyaltyArtistProfiles(),
                  iconCallout: Ye.w,
                },
              })),
            t ||
              e[1].items.push({
                props: {
                  iconComponent: Ye.z,
                  children: Object(g.f)("#ShopNav_ProfileShowcasesLink"),
                  to: { pathname: s.b.LoyaltyProfileCustomizations() },
                },
              }),
            _.b.Get().BIsLoggedIn() &&
              e.push({
                items: [
                  {
                    external: !0,
                    props: {
                      iconComponent: Ye.x,
                      children: Object(g.f)("#RewardsPointsHistoryLink"),
                      href: l.d.STORE_BASE_URL + "pointssummary/",
                    },
                  },
                ],
              }),
            e
          );
        },
        Za = () => {
          const e = Va();
          return i.a.createElement(
            f.a,
            {
              padding: "none",
              className: ka.PrimaryNav,
              "flow-children": "column",
            },
            i.a.createElement(
              f.f,
              { spacing: "none" },
              e.map((t, a) =>
                i.a.createElement(
                  i.a.Fragment,
                  { key: a },
                  t.label &&
                    i.a.createElement(
                      "div",
                      { className: ka.NavItem },
                      t.label
                    ),
                  t.items.map((e) =>
                    e.external
                      ? i.a.createElement(
                          Qa,
                          Object.assign({}, e.props, { key: e.props.href })
                        )
                      : i.a.createElement(
                          Wa,
                          Object.assign({}, e.props, {
                            key: JSON.stringify(e.props.to),
                          })
                        )
                  ),
                  a < e.length - 1 &&
                    i.a.createElement("div", { className: ka.Line })
                )
              )
            )
          );
        },
        Wa = (e) => {
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
            m = "object" == typeof s.to && s.to.hash ? Ra : ne;
          return i.a.createElement(
            m,
            Object.assign(
              {
                className: Object(b.a)(ka.SecondaryNavItem, a),
                activeClassName: ka.Selected,
              },
              s
            ),
            i.a.createElement(l, { className: ka.Icon }),
            i.a.createElement("div", { className: ka.Label }, r),
            c && i.a.createElement(c, { className: ka.Callout })
          );
        },
        Qa = (e) => {
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
              { className: Object(b.a)(ka.SecondaryNavItem, a) },
              s
            ),
            i.a.createElement(l, { className: ka.Icon }),
            i.a.createElement("div", { className: ka.Label }, r),
            c && i.a.createElement(c, { className: ka.Callout })
          );
        };
      function Ya(e) {
        const t = "string" == typeof e.to ? e.to : e.to.pathname,
          a = Object(o.i)(t);
        return i.a.createElement(
          Fa,
          {
            active: !!a && (!e.exact || a.isExact),
            className: ka.ScrollableTabItem,
          },
          e.children
        );
      }
      const qa = () => {
        const e = Va(),
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
                      focusClassName: ka.Focused,
                      noFocusRing: !0,
                    }),
                    i.a.createElement(
                      Fa,
                      { className: ka.ScrollableTabItem },
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
                      focusClassName: ka.Focused,
                      noFocusRing: !0,
                    }),
                    i.a.createElement(Ya, Object.assign({}, a), a.children)
                  )
                );
              }
            });
          }),
          i.a.createElement(za, { className: ka.ScrollableTabs }, t)
        );
      };
      function Ja(e) {
        const { children: t } = e,
          a = Object(ya.a)(),
          n = i.a.useRef();
        i.a.useEffect(() => {
          var e;
          return null === (e = n.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const r = Object(f.i)("(max-width: 965px)");
        return i.a.createElement(
          f.d,
          null,
          i.a.createElement(
            ga.a,
            { navID: "LoyaltyShell", NavigationManager: a, navTreeRef: n },
            i.a.createElement(
              Ia,
              { className: Object(b.a)(wa.Shell) },
              i.a.createElement(Xa, null),
              r && i.a.createElement(qa, null),
              i.a.createElement(
                f.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  className: wa.ShellScrollParent,
                },
                !r && i.a.createElement(Za, null),
                i.a.createElement(
                  f.a,
                  {
                    flex: "1",
                    className: wa.ShellScroll,
                    "flow-children": "column",
                  },
                  t
                )
              )
            )
          )
        );
      }
      const Xa = Object(m.a)(() => {
        let e = null;
        _.b.Get().BIsLoggedIn() &&
          (e = i.a.createElement(
            f.a,
            {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              className: wa.PointsContainer,
            },
            i.a.createElement(Ce.O, { className: wa.Icon }),
            i.a.createElement(
              f.a,
              {
                display: "flex",
                flexDirection: "column",
                flex: "1",
                paddingLeft: "xsmall",
              },
              i.a.createElement(
                "a",
                {
                  className: wa.YourBalanceLabel,
                  href: l.d.STORE_BASE_URL + "pointssummary/",
                },
                Object(g.f)("#YourBalance")
              ),
              i.a.createElement(
                "div",
                { className: wa.RewardsPointsCount },
                _.b
                  .Get()
                  .GetPointsAvailable()
                  .getLowBits()
                  .toLocaleString(g.e.GetPreferredLocales())
              )
            )
          ));
        let t = null;
        if (_.b.Get().BIsLoggedIn() && _.b.Get().GetIsUsingAppIDFilters()) {
          const e = !!_.b.Get().GetAppIDFilters().size;
          t = i.a.createElement(
            f.a,
            {
              display: "flex",
              flexDirection: "row",
              className: wa.AppFilterContainer,
            },
            i.a.createElement(Ye.n, { className: wa.HeaderVerticalDivider }),
            i.a.createElement(
              "div",
              { className: wa.AppFilterLabel },
              Object(g.f)("#AppFilter_Label")
            ),
            i.a.createElement(
              "div",
              { className: wa.AppFilterIconContainer },
              i.a.createElement(Ye.e, {
                className: Object(b.a)(wa.AppFilterIcon),
                onClick: (e) =>
                  (function (e) {
                    const t = {
                      bOverlapHorizontal: !0,
                      bUseWebStyles: !1,
                      strClassName: Na.ManageAppFiltersPopupContextMenu,
                    };
                    Object(Ea.a)(
                      r.createElement(
                        Ma.c,
                        null,
                        r.createElement(ja, { maxGamesToDisplay: 14 })
                      ),
                      e,
                      t
                    );
                  })(e),
              }),
              e && i.a.createElement("div", { className: wa.FilterInUse })
            )
          );
        }
        return i.a.createElement(
          f.a,
          {
            paddingY: "small",
            paddingX: ["xsmall", "medium"],
            display: "flex",
            flexDirection: "row",
            className: wa.ShellHeader,
          },
          i.a.createElement(
            d.c,
            { to: s.b.LoyaltyStore(), className: wa.ShellHeaderBrandLink },
            i.a.createElement(
              "div",
              { className: wa.ShellHeaderBrandName },
              " ",
              Object(g.f)("#ShopLink"),
              " "
            )
          ),
          i.a.createElement(f.b, null, (e) => "mobile" !== e && t),
          e
        );
      });
      var Ka = a("bxBv"),
        $a = (a("E4Op"), a("hRO2")),
        en = a("OS8t");
      const tn = $a.Message;
      class an extends tn {
        constructor(e = null) {
          super(),
            an.prototype.accountid || en.a(an.M()),
            tn.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            an.sm_m ||
              (an.sm_m = {
                proto: an,
                fields: {
                  accountid: {
                    n: 1,
                    br: en.d.readUint32,
                    bw: en.h.writeUint32,
                  },
                  auctiondescriptionid: {
                    n: 2,
                    br: en.d.readUint64String,
                    bw: en.h.writeUint64String,
                  },
                  state: { n: 3, br: en.d.readEnum, bw: en.h.writeEnum },
                  time_created: {
                    n: 4,
                    br: en.d.readUint32,
                    bw: en.h.writeUint32,
                  },
                  time_updated: {
                    n: 5,
                    br: en.d.readUint32,
                    bw: en.h.writeUint32,
                  },
                  amount_bid: {
                    n: 6,
                    br: en.d.readInt64String,
                    bw: en.h.writeInt64String,
                  },
                  amount_paid: {
                    n: 7,
                    br: en.d.readInt64String,
                    bw: en.h.writeInt64String,
                  },
                  auctionbidid: {
                    n: 8,
                    br: en.d.readInt64String,
                    bw: en.h.writeInt64String,
                  },
                },
              }),
            an.sm_m
          );
        }
        static MBF() {
          return an.sm_mbf || (an.sm_mbf = en.e(an.M())), an.sm_mbf;
        }
        toObject(e = !1) {
          return an.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(an.M(), e, t);
        }
        static fromObject(e) {
          return en.c(an.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new an();
          return an.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(an.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return an.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(an.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return an.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_Bid";
        }
      }
      class nn extends tn {
        constructor(e = null) {
          super(),
            nn.prototype.auctiondescriptionid || en.a(nn.M()),
            tn.initialize(this, e, 0, -1, [12], null);
        }
        static M() {
          return (
            nn.sm_m ||
              (nn.sm_m = {
                proto: nn,
                fields: {
                  auctiondescriptionid: {
                    n: 1,
                    br: en.d.readUint64String,
                    bw: en.h.writeUint64String,
                  },
                  time_start: {
                    n: 2,
                    br: en.d.readUint32,
                    bw: en.h.writeUint32,
                  },
                  time_end: { n: 3, br: en.d.readUint32, bw: en.h.writeUint32 },
                  amount_total: {
                    n: 5,
                    br: en.d.readInt64String,
                    bw: en.h.writeInt64String,
                  },
                  amount_remaining: {
                    n: 6,
                    br: en.d.readInt64String,
                    bw: en.h.writeInt64String,
                  },
                  highest_amount: {
                    n: 7,
                    br: en.d.readInt64String,
                    bw: en.h.writeInt64String,
                  },
                  highest_bidder_accountid: {
                    n: 8,
                    br: en.d.readUint32,
                    bw: en.h.writeUint32,
                  },
                  community_item_appid: {
                    n: 9,
                    br: en.d.readUint32,
                    bw: en.h.writeUint32,
                  },
                  community_item_type: {
                    n: 10,
                    br: en.d.readUint32,
                    bw: en.h.writeUint32,
                  },
                  store_appid: {
                    n: 11,
                    br: en.d.readUint32,
                    bw: en.h.writeUint32,
                  },
                  store_packageids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: en.d.readUint32,
                    bw: en.h.writeRepeatedUint32,
                  },
                  reserve_price: {
                    n: 13,
                    br: en.d.readInt64String,
                    bw: en.h.writeInt64String,
                  },
                },
              }),
            nn.sm_m
          );
        }
        static MBF() {
          return nn.sm_mbf || (nn.sm_mbf = en.e(nn.M())), nn.sm_mbf;
        }
        toObject(e = !1) {
          return nn.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(nn.M(), e, t);
        }
        static fromObject(e) {
          return en.c(nn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new nn();
          return nn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(nn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return nn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(nn.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return nn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_Item";
        }
      }
      class rn extends tn {
        constructor(e = null) {
          super(),
            rn.prototype.auctiondescriptionid || en.a(rn.M()),
            tn.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            rn.sm_m ||
              (rn.sm_m = {
                proto: rn,
                fields: {
                  auctiondescriptionid: {
                    n: 1,
                    br: en.d.readUint64String,
                    bw: en.h.writeUint64String,
                  },
                  amount_bid: {
                    n: 2,
                    br: en.d.readInt64String,
                    bw: en.h.writeInt64String,
                  },
                  expected_amount_remaining: {
                    n: 3,
                    br: en.d.readInt32,
                    bw: en.h.writeInt32,
                  },
                },
              }),
            rn.sm_m
          );
        }
        static MBF() {
          return rn.sm_mbf || (rn.sm_mbf = en.e(rn.M())), rn.sm_mbf;
        }
        toObject(e = !1) {
          return rn.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(rn.M(), e, t);
        }
        static fromObject(e) {
          return en.c(rn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new rn();
          return rn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(rn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return rn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(rn.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return rn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_PlaceBid_Request";
        }
      }
      class on extends tn {
        constructor(e = null) {
          super(), tn.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return on.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new on();
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new on();
          return on.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return on.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return on.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_PlaceBid_Response";
        }
      }
      class sn extends tn {
        constructor(e = null) {
          super(),
            sn.prototype.auctiondescriptionid || en.a(sn.M()),
            tn.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            sn.sm_m ||
              (sn.sm_m = {
                proto: sn,
                fields: {
                  auctiondescriptionid: {
                    n: 1,
                    br: en.d.readUint64String,
                    bw: en.h.writeUint64String,
                  },
                },
              }),
            sn.sm_m
          );
        }
        static MBF() {
          return sn.sm_mbf || (sn.sm_mbf = en.e(sn.M())), sn.sm_mbf;
        }
        toObject(e = !1) {
          return sn.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(sn.M(), e, t);
        }
        static fromObject(e) {
          return en.c(sn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new sn();
          return sn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(sn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return sn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(sn.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return sn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_CancelBid_Request";
        }
      }
      class ln extends tn {
        constructor(e = null) {
          super(),
            ln.prototype.amount_returned || en.a(ln.M()),
            tn.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ln.sm_m ||
              (ln.sm_m = {
                proto: ln,
                fields: {
                  amount_returned: {
                    n: 1,
                    br: en.d.readInt64String,
                    bw: en.h.writeInt64String,
                  },
                },
              }),
            ln.sm_m
          );
        }
        static MBF() {
          return ln.sm_mbf || (ln.sm_mbf = en.e(ln.M())), ln.sm_mbf;
        }
        toObject(e = !1) {
          return ln.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(ln.M(), e, t);
        }
        static fromObject(e) {
          return en.c(ln.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new ln();
          return ln.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(ln.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return ln.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(ln.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return ln.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_CancelBid_Response";
        }
      }
      class cn extends tn {
        constructor(e = null) {
          super(),
            cn.prototype.steamid || en.a(cn.M()),
            tn.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            cn.sm_m ||
              (cn.sm_m = {
                proto: cn,
                fields: {
                  steamid: {
                    n: 1,
                    br: en.d.readFixed64String,
                    bw: en.h.writeFixed64String,
                  },
                },
              }),
            cn.sm_m
          );
        }
        static MBF() {
          return cn.sm_mbf || (cn.sm_mbf = en.e(cn.M())), cn.sm_mbf;
        }
        toObject(e = !1) {
          return cn.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(cn.M(), e, t);
        }
        static fromObject(e) {
          return en.c(cn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new cn();
          return cn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(cn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return cn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(cn.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return cn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetBidsForUser_Request";
        }
      }
      class mn extends tn {
        constructor(e = null) {
          super(),
            mn.prototype.bids || en.a(mn.M()),
            tn.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            mn.sm_m ||
              (mn.sm_m = {
                proto: mn,
                fields: { bids: { n: 1, c: an, r: !0, q: !0 } },
              }),
            mn.sm_m
          );
        }
        static MBF() {
          return mn.sm_mbf || (mn.sm_mbf = en.e(mn.M())), mn.sm_mbf;
        }
        toObject(e = !1) {
          return mn.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(mn.M(), e, t);
        }
        static fromObject(e) {
          return en.c(mn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new mn();
          return mn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(mn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return mn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(mn.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return mn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetBidsForUser_Response";
        }
      }
      class dn extends tn {
        constructor(e = null) {
          super(),
            dn.prototype.item || en.a(dn.M()),
            tn.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            dn.sm_m ||
              (dn.sm_m = {
                proto: dn,
                fields: {
                  item: { n: 1, c: nn },
                  count_total: {
                    n: 2,
                    br: en.d.readInt32,
                    bw: en.h.writeInt32,
                  },
                  current_user_position: {
                    n: 3,
                    br: en.d.readInt32,
                    bw: en.h.writeInt32,
                  },
                  winning_bids: { n: 4, c: an, r: !0, q: !0 },
                },
              }),
            dn.sm_m
          );
        }
        static MBF() {
          return dn.sm_mbf || (dn.sm_mbf = en.e(dn.M())), dn.sm_mbf;
        }
        toObject(e = !1) {
          return dn.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(dn.M(), e, t);
        }
        static fromObject(e) {
          return en.c(dn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new dn();
          return dn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(dn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return dn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(dn.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return dn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetBidsForItem_Response";
        }
      }
      class pn extends tn {
        constructor(e = null) {
          super(),
            pn.prototype.auctiondescriptionid || en.a(pn.M()),
            tn.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            pn.sm_m ||
              (pn.sm_m = {
                proto: pn,
                fields: {
                  auctiondescriptionid: {
                    n: 1,
                    br: en.d.readUint64String,
                    bw: en.h.writeUint64String,
                  },
                },
              }),
            pn.sm_m
          );
        }
        static MBF() {
          return pn.sm_mbf || (pn.sm_mbf = en.e(pn.M())), pn.sm_mbf;
        }
        toObject(e = !1) {
          return pn.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(pn.M(), e, t);
        }
        static fromObject(e) {
          return en.c(pn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new pn();
          return pn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(pn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return pn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(pn.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return pn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetUserBidForItem_Request";
        }
      }
      class un extends tn {
        constructor(e = null) {
          super(),
            un.prototype.bid || en.a(un.M()),
            tn.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            un.sm_m ||
              (un.sm_m = { proto: un, fields: { bid: { n: 1, c: an } } }),
            un.sm_m
          );
        }
        static MBF() {
          return un.sm_mbf || (un.sm_mbf = en.e(un.M())), un.sm_mbf;
        }
        toObject(e = !1) {
          return un.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(un.M(), e, t);
        }
        static fromObject(e) {
          return en.c(un.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new un();
          return un.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(un.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return un.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(un.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return un.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetUserBidForItem_Response";
        }
      }
      class _n extends tn {
        constructor(e = null) {
          super(),
            _n.prototype.item || en.a(_n.M()),
            tn.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _n.sm_m ||
              (_n.sm_m = { proto: _n, fields: { item: { n: 1, c: nn } } }),
            _n.sm_m
          );
        }
        static MBF() {
          return _n.sm_mbf || (_n.sm_mbf = en.e(_n.M())), _n.sm_mbf;
        }
        toObject(e = !1) {
          return _n.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(_n.M(), e, t);
        }
        static fromObject(e) {
          return en.c(_n.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new _n();
          return _n.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(_n.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return _n.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(_n.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return _n.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetItemDetails_Response";
        }
      }
      class fn extends tn {
        constructor(e = null) {
          super(), tn.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return fn.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new fn();
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new fn();
          return fn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return fn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return fn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetAllItems_Request";
        }
      }
      class gn extends tn {
        constructor(e = null) {
          super(),
            gn.prototype.items || en.a(gn.M()),
            tn.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            gn.sm_m ||
              (gn.sm_m = {
                proto: gn,
                fields: { items: { n: 1, c: nn, r: !0, q: !0 } },
              }),
            gn.sm_m
          );
        }
        static MBF() {
          return gn.sm_mbf || (gn.sm_mbf = en.e(gn.M())), gn.sm_mbf;
        }
        toObject(e = !1) {
          return gn.toObject(e, this);
        }
        static toObject(e, t) {
          return en.g(gn.M(), e, t);
        }
        static fromObject(e) {
          return en.c(gn.M(), e);
        }
        static deserializeBinary(e) {
          let t = new $a.BinaryReader(e),
            a = new gn();
          return gn.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return en.b(gn.MBF(), e, t);
        }
        serializeBinary() {
          var e = new $a.BinaryWriter();
          return gn.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          en.f(gn.M(), e, t);
        }
        serializeBase64String() {
          var e = new $a.BinaryWriter();
          return gn.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuction_GetAllItems_Response";
        }
      }
      var hn;
      !(function (e) {
        (e.PlaceBid = function (e, t) {
          return e.SendMsg("Auction.PlaceBid#1", t, on, { ePrivilege: 3 });
        }),
          (e.CancelBid = function (e, t) {
            return e.SendMsg("Auction.CancelBid#1", t, ln, { ePrivilege: 1 });
          }),
          (e.GetBidsForUser = function (e, t) {
            return e.SendMsg("Auction.GetBidsForUser#1", t, mn, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetBidsForItem = function (e, t) {
            return e.SendMsg("Auction.GetBidsForItem#1", t, dn, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetUserBidForItem = function (e, t) {
            return e.SendMsg("Auction.GetUserBidForItem#1", t, un, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetItemDetails = function (e, t) {
            return e.SendMsg("Auction.GetItemDetails#1", t, _n, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAllItems = function (e, t) {
            return e.SendMsg("Auction.GetAllItems#1", t, gn, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          });
      })(hn || (hn = {}));
      var bn = a("2vnA");
      class Cn {
        constructor() {
          (this.m_bLoadedCurrentUserBids = !1),
            (this.m_rgCurrentUserBids = bn.C.array([], { deep: !0 })),
            (this.m_bLoadedAllItems = !1),
            (this.m_mapAuctionItems = new Map());
        }
        static Get() {
          return (
            this.s_Singleton || (this.s_Singleton = new Cn()), this.s_Singleton
          );
        }
        Init(e) {
          (this.m_transport = e.GetServiceTransport()),
            (this.m_anonymousTransport = e.GetAnonymousServiceTransport());
        }
        LoadCurrentUserBids() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!_.b.Get().BIsLoggedIn()) return [];
            const e = Ka.b.Init(cn);
            e.SetBodyFields({ steamid: l.k.steamid });
            let t = yield hn.GetBidsForUser(this.m_transport, e);
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
            const e = Ka.b.Init(fn);
            let t = yield hn.GetAllItems(this.m_anonymousTransport, e);
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
            const e = Ka.b.Init(pn);
            let t = yield hn.GetUserBidForItem(this.m_transport, e);
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
            const r = Ka.b.Init(rn);
            r.SetBodyFields({
              auctiondescriptionid: e,
              amount_bid: t,
              expected_amount_remaining: a,
            });
            const i = yield hn.PlaceBid(this.m_transport, r);
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
            const a = Ka.b.Init(sn);
            a.SetBodyFields({ auctiondescriptionid: e });
            const n = yield hn.CancelBid(this.m_transport, a);
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
      Object(n.b)([bn.C], Cn.prototype, "m_rgCurrentUserBids", void 0),
        Object(n.b)([bn.C], Cn.prototype, "m_mapAuctionItems", void 0);
      var In = a("ee7K");
      class yn extends i.a.Component {
        constructor() {
          super(...arguments), (this.state = { bReady: !1 });
        }
        componentDidMount() {
          wn.then(() => this.setState({ bReady: !0 }));
        }
        render() {
          return this.state.bReady
            ? i.a.createElement(
                Ja,
                null,
                i.a.createElement(
                  o.d,
                  null,
                  i.a.createElement(
                    o.b,
                    { path: s.b.LoyaltyGetPoints() },
                    i.a.createElement(ht, null)
                  ),
                  i.a.createElement(
                    o.b,
                    { path: s.b.LoyaltyHowItWorks() },
                    i.a.createElement(pa, null)
                  ),
                  i.a.createElement(
                    o.b,
                    { path: s.b.LoyaltyStore() },
                    i.a.createElement(rt, null)
                  ),
                  i.a.createElement(
                    o.b,
                    { path: s.b.LoyaltyGiveawayRules() },
                    i.a.createElement(fa, null)
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
      const wn = (function () {
        return Object(n.a)(this, void 0, void 0, function* () {
          let e = Object(l.h)("loyaltystore", "application_config");
          const t = new c.a(l.d.WEBAPI_BASE_URL, e.webapi_token);
          oe.a.Init(t),
            yield (function () {
              return Object(n.a)(this, void 0, void 0, function* () {
                const e = l.d.LANGUAGE,
                  t = g.b.GetLanguageFallback(e),
                  n = e === t,
                  [r, i] = yield Promise.all([
                    a("Aqke")(`./loyalty_${e}.json`),
                    n ? void 0 : a("Aqke")(`./loyalty_${t}.json`),
                  ]);
                g.e.AddTokens(r.default, i ? i.default : void 0);
              });
            })(),
            yield In.a.Get().HintLoad(),
            _.b.Get().Init(t, e);
        });
      })();
      t.default = yn;
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
    "F8+w": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/lava_lamps_bg.png?v=valveisgoodatcaching";
    },
    FDY8: function (e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
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
    Gpul: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return C;
      }),
        a.d(t, "b", function () {
          return I;
        }),
        a.d(t, "a", function () {
          return y;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a("TyAF"),
        o = a("jUCX"),
        s = a("exH9"),
        l = (a("oFam"), a("lkRc")),
        c = a("UxvL"),
        m = a("XxJu"),
        d = a.n(m),
        p = a("FDY8"),
        u = a.n(p),
        _ = a("dFOy"),
        f = a.n(_),
        g = a("WeG9"),
        h = a.n(g);
      class b extends r.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: t,
              size: a,
              className: i,
              statusStyle: o,
              statusPosition: l,
              children: m,
            } = e,
            p = Object(n.c)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            _ = [];
          return (
            t && _.push(t),
            _.push(
              (function (e) {
                switch (e) {
                  case "X-Small":
                  case "Small":
                    return d.a;
                  case "Medium":
                  case "MediumLarge":
                    return u.a;
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return f.a;
                }
              })(a)
            ),
            r.createElement(
              "div",
              Object.assign(
                {
                  className: Object(s.a)(
                    h.a.avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    a || "Medium",
                    i
                  ),
                },
                p
              ),
              r.createElement("div", {
                className: Object(s.a)(h.a.avatarStatus, "avatarStatus", l),
                style: o,
              }),
              r.createElement(c.a, {
                className: Object(s.a)(h.a.avatar, "avatar"),
                rgSources: _,
                draggable: !1,
              }),
              m
            )
          );
        }
      }
      let C = class extends r.Component {
        render() {
          const e = this.props,
            { persona: t, size: a, animatedAvatar: i, className: c } = e,
            m = Object(n.c)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let d = "";
          return (
            i && i.image_small && 0 != i.image_small.length
              ? (d = l.d.MEDIA_CDN_COMMUNITY_URL + "images/" + i.image_small)
              : t &&
                ((d = t.avatar_url_medium),
                "Small" == a || "X-Small" == a
                  ? (d = t.avatar_url)
                  : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                    (d = t.avatar_url_full)),
            r.createElement(
              b,
              Object.assign(
                {
                  strAvatarURL: d,
                  size: a,
                  className: Object(s.a)(Object(o.b)(t), c),
                },
                m
              )
            )
          );
        }
      };
      C = Object(n.b)([i.a], C);
      const I = Object(i.a)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: i } = e,
          o = Object(n.c)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let c = i ? t.image_large : t.image_small;
        return (
          c || (c = t.image_small),
          c.startsWith("https://") ||
            (c = l.d.MEDIA_CDN_COMMUNITY_URL + "images/" + c),
          r.createElement(
            "div",
            Object.assign(
              { className: Object(s.a)(h.a.avatarFrame, a, "avatarFrame") },
              o
            ),
            r.createElement("img", { className: h.a.avatarFrameImg, src: c })
          )
        );
      });
      let y = class extends r.Component {
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
              avatarFrame: i,
              children: o,
              style: s,
            } = e,
            l = Object(n.c)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
            ]);
          return (
            l.onClick &&
              (s = Object.assign(Object.assign({}, s), { cursor: "pointer" })),
            this.state.bAnimate || (a = null),
            r.createElement(
              C,
              Object.assign({ animatedAvatar: a }, l),
              o,
              r.createElement(I, {
                profileItem: i,
                bDisableAnimation: "None" === this.props.loopDuration,
              })
            )
          );
        }
      };
      y = Object(n.b)([i.a], y);
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
    POwH: function (e, t, a) {
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
          return f;
        }),
        a.d(t, "d", function () {
          return g;
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
          return N;
        }),
        a.d(t, "e", function () {
          return v;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("qY0t"),
        s = a("exH9"),
        l = a("qDk6");
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
              marginY: f,
              marginLeft: g,
              marginTop: h,
              marginRight: b,
              marginBottom: I,
              display: y,
              flexDirection: w,
              flexWrap: M,
              justifyContent: E,
              alignItems: N,
              flexGrow: v,
              flexShrink: S,
              flexBasis: j,
              flex: A,
              className: O,
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
            P = Object(s.a)(
              C("padding-left", m || o || r),
              C("padding-top", d || l || r),
              C("padding-right", c || o || r),
              C("padding-bottom", p || l || r),
              C("margin-left", g || _ || u),
              C("margin-top", h || f || u),
              C("margin-right", b || _ || u),
              C("margin-bottom", I || f || u),
              O
            ),
            B = Object.assign(
              {
                display: y,
                flexDirection: w,
                flexWrap: M,
                justifyContent: E,
                alignItems: N,
                flexGrow: v,
                flexShrink: S,
                flexBasis: j,
                flex: A,
              },
              D
            ),
            L = Object.assign({ className: P, style: B, ref: t }, x);
          if (a) {
            const e = a;
            return i.a.createElement(e, Object.assign({}, L));
          }
          return i.a.createElement(
            "div",
            Object.assign({ className: P, style: B, ref: t }, x)
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
              "flow-children": g = "row",
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
            b = f(),
            C = b.spacing[y(d || m || "none")],
            I = b.spacing[y(u || m || "none")];
          return i.a.createElement(
            l.a,
            Object.assign(
              {
                "flow-children": g,
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
        f = () => Object(r.useContext)(_),
        g = (e) => {
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
        const t = f(),
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
          } = f(),
          a = N(`(min-width: ${e}px)`);
        return N(`(min-width: ${t}px)`) ? "desktop" : a ? "tablet" : "mobile";
      }
      function M(e) {
        return e.children(w());
      }
      const E = {};
      function N(e) {
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
      function v(e) {
        return i.a.createElement(c, Object.assign({ component: l.a }, e));
      }
    },
    RhBb: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/dota_tile_background.png?v=valveisgoodatcaching";
    },
    RvZ5: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/icon_showcase_14.svg?v=valveisgoodatcaching";
    },
    StxQ: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return m;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("exH9"),
        s = a("9Dmu"),
        l = a("6Y59"),
        c = a("TLQK");
      const m = (e) => {
        const { amount: t, className: a, size: r } = e,
          m = Object(n.c)(e, ["amount", "className", "size"]),
          d =
            t > 0
              ? t.toLocaleString(c.e.GetPreferredLocales())
              : Object(c.f)("#Rewards_Free");
        return i.a.createElement(
          "div",
          Object.assign({ className: Object(o.a)(s.Container, a) }, m),
          i.a.createElement(l.O, { className: s.Icon }),
          i.a.createElement(
            "div",
            {
              className: s.Amount,
              style: r ? { fontSize: `${r}rem` } : void 0,
            },
            d,
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
    WeG9: function (e, t, a) {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_nibod",
        avatarStatus: "steamavatar_avatarStatus_3xUpb",
        avatar: "steamavatar_avatar_3h-QR",
        avatarFrame: "steamavatar_avatarFrame_X_mJE",
        avatarFrameImg: "steamavatar_avatarFrameImg_3fM0F",
      };
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
    WonJ: function (e, t, a) {
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
    Xfd2: function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "personastatusicons_PersonaStatusIcon_KxAI_",
        MobilePhoneIcon: "personastatusicons_MobilePhoneIcon_1iRFj",
      };
    },
    XxJu: function (e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
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
        s = a("exH9"),
        l = a("qDk6");
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
    "cMk+": function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMDQ1MiAxMy43NjlINzQuNzE5NlYxNi44MzI1SDc3LjIxOTZWMTMuNzY5VjExLjI2OUg3NC43MTk2SDEzLjA0NTJIMTAuNTQ1MlYxMy43NjlWNzQuMjIzN1Y3Ni43MjM3SDEzLjA0NTJIMTYuMjIwMlY3NC4yMjM3SDEzLjA0NTJWMTMuNzY5WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi43NjE5NiAyLjg3NUg2NC40MzY0VjUuOTM5MDJINjYuOTM2NFYyLjg3NVYwLjM3NUg2NC40MzY0SDIuNzYxOTZIMC4yNjE5NjNWMi44NzVWNjMuMzI5N1Y2NS44Mjk3SDIuNzYxOTZINS45MzY5N1Y2My4zMjk3SDIuNzYxOTZWMi44NzVaIiBmaWxsPSJ3aGl0ZSIvPg0KPHJlY3QgeD0iMjIuMDc5OCIgeT0iMjMuNDEyMSIgd2lkdGg9IjY0LjE3NDUiIGhlaWdodD0iNjIuOTU0NyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4NCjwvc3ZnPg0K";
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
          return f;
        }),
        a.d(t, "c", function () {
          return g;
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
          return N;
        }),
        a.d(t, "p", function () {
          return v;
        }),
        a.d(t, "q", function () {
          return S;
        }),
        a.d(t, "l", function () {
          return j;
        }),
        a.d(t, "i", function () {
          return A;
        }),
        a.d(t, "z", function () {
          return O;
        }),
        a.d(t, "w", function () {
          return D;
        }),
        a.d(t, "t", function () {
          return x;
        }),
        a.d(t, "a", function () {
          return P;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("exH9");
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
              d:
                "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
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
              d:
                "M15.2305 28.1415L15.2305 15.621L15.2305 3.10029C8.31552 3.10029 2.70984 8.70596 2.70984 15.6209C2.70984 22.5359 8.31552 28.1415 15.2305 28.1415ZM30.2305 15.6209C30.2305 23.9052 23.5147 30.6209 15.2305 30.6209C6.9462 30.6209 0.230469 23.9052 0.230469 15.6209C0.230469 7.33664 6.9462 0.620911 15.2305 0.620911C23.5147 0.620911 30.2305 7.33664 30.2305 15.6209Z",
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
            d:
              "M31.327 0.622074L31.0027 0.341797L30.6762 0.619372L7.67619 20.1694L0.676186 26.1194C0.465782 26.2982 0.440197 26.6138 0.61904 26.8242C0.797884 27.0346 1.11343 27.0602 1.32383 26.8813L7.50001 21.6316V49.0003C7.50001 50.3811 8.6193 51.5003 10 51.5003H51.5C52.8807 51.5003 54 50.3811 54 49.0003V21.5426L60.173 26.8786C60.3819 27.0592 60.6977 27.0362 60.8783 26.8273C61.0589 26.6184 61.0359 26.3027 60.827 26.1221L53.827 20.0712L31.327 0.622074ZM8.50001 49.0003V20.7816L30.9973 1.65889L53 20.6782V49.0003C53 49.8288 52.3284 50.5003 51.5 50.5003H38.5V32.0003C38.5 30.6196 37.3807 29.5003 36 29.5003H26C24.6193 29.5003 23.5 30.6196 23.5 32.0003V50.5003H10C9.17158 50.5003 8.50001 49.8288 8.50001 49.0003ZM24.5 50.5003H37.5V32.0003C37.5 31.1719 36.8284 30.5003 36 30.5003H26C25.1716 30.5003 24.5 31.1719 24.5 32.0003V50.5003Z",
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
            d:
              "M33.9999 10.5C33.9999 15.7034 29.5671 20 23.9999 20C18.4327 20 13.9999 15.7034 13.9999 10.5C13.9999 5.29663 18.4327 1 23.9999 1C29.5671 1 33.9999 5.29663 33.9999 10.5ZM34.9999 10.5C34.9999 16.299 30.075 21 23.9999 21C17.9247 21 12.9999 16.299 12.9999 10.5C12.9999 4.70101 17.9247 0 23.9999 0C30.075 0 34.9999 4.70101 34.9999 10.5ZM16.3702 23.5C10.6886 23.5 5.62398 26.8717 3.72868 32.2547C2.47599 35.8127 1.26935 39.3781 0.768536 40.866C0.549738 41.516 0.803538 42.2172 1.36831 42.5884L4.65592 44.7495C16.463 52.5107 31.809 52.2879 43.3858 44.1873L45.6833 42.5797C46.2215 42.2031 46.452 41.5201 46.2522 40.8944L43.9193 33.5891C42.0002 27.5792 36.4154 23.5 30.1065 23.5H24.2027H16.3702ZM4.67193 32.5868C6.41799 27.6277 11.0872 24.5 16.3702 24.5H24.2027H30.1065C35.9803 24.5 41.1799 28.2979 42.9667 33.8933L45.2996 41.1986C45.3662 41.4072 45.2893 41.6348 45.1099 41.7604L42.8125 43.368C31.5712 51.2338 16.67 51.4501 5.20521 43.9139L1.9176 41.7528C1.72419 41.6257 1.64564 41.3949 1.71629 41.185C2.21655 39.6988 3.42149 36.1384 4.67193 32.5868Z",
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
            d:
              "M24.5 12C27.5376 12 30 9.53757 30 6.5C30 3.46243 27.5376 1 24.5 1C21.4624 1 19 3.46243 19 6.5C19 9.53757 21.4624 12 24.5 12ZM24.5 13C26.1149 13 27.5923 12.411 28.7291 11.4362L38.2929 21H11.2071L20.5469 11.6602C21.6422 12.5005 23.0128 13 24.5 13ZM9.79289 21L19.8014 10.9915C18.6855 9.8244 18 8.24225 18 6.5C18 2.91015 20.9101 0 24.5 0C28.0899 0 31 2.91015 31 6.5C31 8.11495 30.411 9.59234 29.4362 10.7291L39.7071 21H40H45C46.933 21 48.5 22.567 48.5 24.5V54C48.5 55.933 46.933 57.5 45 57.5H4C2.067 57.5 0.5 55.933 0.5 54V24.5C0.5 22.567 2.067 21 4 21H8H9.79289ZM8 22H4C2.61929 22 1.5 23.1193 1.5 24.5V54C1.5 55.3807 2.61929 56.5 4 56.5H45C46.3807 56.5 47.5 55.3807 47.5 54V24.5C47.5 23.1193 46.3807 22 45 22H40H39.5H39.2929H10.2071H10H8ZM10.5 29C9.11929 29 8 30.1193 8 31.5V48C8 49.3807 9.11929 50.5 10.5 50.5H37.5C38.8807 50.5 40 49.3807 40 48V31.5C40 30.1193 38.8807 29 37.5 29H10.5ZM9 31.5C9 30.6716 9.67157 30 10.5 30H37.5C38.3284 30 39 30.6716 39 31.5V48C39 48.8284 38.3284 49.5 37.5 49.5H10.5C9.67157 49.5 9 48.8284 9 48V31.5Z",
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
            d:
              "M2 9H34V27H2V9ZM5 13H7V15H5V13ZM7 21H5V23H7V21ZM5 17H9V19H5V17ZM11 13H9V15H11V13ZM9 21H27V23H9V21ZM15 13H13V15H15V13ZM11 17H13V19H11V17ZM19 13H17V15H19V13ZM15 17H17V19H15V17ZM21 17H19V19H21V17ZM21 13H23V15H21V13ZM25 17H23V19H25V17ZM25 13H27V15H25V13ZM31 13H29V15H31V13ZM29 21H31V23H29V21ZM31 17H27V19H31V17Z",
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
            d:
              "M49.3,41.6l-19.6-20l9.8-9.6c0.6,0.1,1.2,0.1,1.7-0.1c1.6-0.4,2.8-1.8,3.4-3.8c0.6-2.1,2-3.6,3.1-4.1\r\n\t\tc0.5-0.2,0.9-0.3,1.2-0.2c0.4,0.2,0.8,0,1-0.4c0.2-0.4,0-0.8-0.4-1c-2.1-1-3.9-1.5-5.7-1.5c-1.8,0-3.5,0.6-5.1,1.7\r\n\t\tc-2,1.5-3.1,3-3.2,4.6c0,0.3,0,0.5,0,0.8L26,17.9l-9.6-9.8c0-0.3,0.1-0.5,0-0.8c-0.1-1.6-1.2-3.1-3.2-4.6C11.7,1.5,10,0.9,8.2,0.9\r\n\t\tc-1.7,0-3.6,0.5-5.7,1.5C2.2,2.7,2,3.1,2.2,3.5c0.2,0.4,0.6,0.6,1,0.4c0.3-0.1,0.7,0,1.2,0.2c1.1,0.5,2.5,2,3.1,4.1\r\n\t\tc0.6,2,1.8,3.3,3.4,3.8c0.6,0.2,1.2,0.2,1.7,0.1l9.8,9.6l-19.6,20c-0.9,0.9-0.9,2.3,0,3.2c0.9,0.9,2.3,0.9,3.2,0l20-19.6\r\n\t\tc-0.1-0.1-0.3-0.3-0.4-0.4l20.5,20c0.9,0.9,2.3,0.9,3.2,0C50.1,43.9,50.1,42.5,49.3,41.6z M39.7,3.9c1.4-1.1,3.5-2.1,6.9-1\r\n\t\tc-1.6,1-2.9,2.8-3.5,4.8c-0.4,1.4-1.2,2.4-2.3,2.7c-0.4,0.1-0.9,0.1-1.3,0c0,0,0,0-0.1,0c-0.4-0.1-0.7-0.3-1.1-0.6\r\n\t\tc-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0-0.1-0.1c-0.3-0.4-0.5-0.8-0.7-1.2c0,0,0,0,0,0\r\n\t\tc-0.1-0.2-0.1-0.5-0.1-0.7C37.2,6.3,38,5.1,39.7,3.9z M36.2,9.7C36.2,9.7,36.2,9.7,36.2,9.7c0.1,0.2,0.2,0.4,0.4,0.5\r\n\t\tc0,0,0.1,0.1,0.1,0.1c0.1,0.2,0.3,0.3,0.5,0.5c0,0,0,0,0,0c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1\r\n\t\tl-1.3,1.3L34.9,11L36.2,9.7z M33.9,12.1l1.7,1.7l-6.9,6.8L27.1,19L33.9,12.1z M13.8,9.7c-0.1,0.1-0.1,0.1-0.2,0.1\r\n\t\tc-0.3,0.3-0.7,0.5-1.1,0.6c0,0,0,0-0.1,0c-0.4,0.1-0.9,0.1-1.3,0c-1-0.3-1.9-1.3-2.3-2.7C8.4,5.7,7,3.9,5.5,2.9\r\n\t\tc3.4-1.1,5.5-0.1,6.9,1c1.6,1.2,2.5,2.4,2.6,3.5c0,0.2,0,0.5-0.1,0.7c0,0,0,0,0,0c-0.1,0.4-0.3,0.8-0.7,1.2c0,0,0,0-0.1,0.1\r\n\t\tC14,9.4,13.9,9.5,13.8,9.7C13.8,9.7,13.8,9.7,13.8,9.7z M14.1,11.4c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1\r\n\t\tc0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.2-0.2,0.3-0.3,0.5-0.5c0,0,0.1-0.1,0.1-0.1c0.1-0.2,0.3-0.3,0.4-0.5c0,0,0,0,0,0l1.3,1.3\r\n\t\tl-1.7,1.7L14.1,11.4z M4.9,43.7c-0.3,0.3-0.7,0.3-1,0c-0.3-0.3-0.3-0.7,0-1l19.6-20l1.5,1.4L4.9,43.7z M48.2,43.7\r\n\t\tc-0.3,0.3-0.7,0.3-1,0l-30.6-30l1.7-1.7l30,30.6C48.4,43,48.4,43.5,48.2,43.7z",
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
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 52 46.1",
          },
          i.a.createElement("path", {
            d:
              "M51.5,40.2l-6.8-11.7c2.4-2,3.9-5,3.9-8.4c0-6.1-4.9-11-11-11c-1.3,0-2.5,0.2-3.7,0.6L29.4,2c-0.7-1.2-2-2-3.4-2s-2.7,0.7-3.4,2l-4.1,7.1H6.6v20.6l-6,10.5c-0.7,1.2-0.7,2.7,0,4c0.7,1.2,2,2,3.4,2H48c1.4,0,2.7-0.7,3.4-2C52.2,42.9,52.2,41.4,51.5,40.2z M46.6,20.1c0,5-4,9-9,9s-9-4-9-9s4-9,9-9S46.6,15.1,46.6,20.1z M8.6,11.1h8.7L8.6,26.2V11.1zM49.7,43.1c-0.4,0.6-1,1-1.7,1H4c-0.7,0-1.3-0.4-1.7-1c-0.4-0.6-0.4-1.3,0-2L24.3,3c0.4-0.6,1-1,1.7-1s1.3,0.4,1.7,1l4.4,7.6c-3.3,1.9-5.5,5.5-5.5,9.5c0,6.1,4.9,11,11,11c2,0,3.9-0.5,5.5-1.5l6.7,11.5C50.1,41.8,50.1,42.5,49.7,43.1z",
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
            d:
              "M58 2H3C2.44772 2 2 2.44772 2 3V49.9671L14.44 40.7192L15.0898 40.2361L15.6975 40.7713L21.5338 45.911L40.422 28.2692L41.1163 27.6207L41.7995 28.2809L59 44.9038V3C59 2.44772 58.5523 2 58 2ZM2 63V52.4592L14.9834 42.8074L20.8927 48.0113L27.4097 53.7505L28.7315 52.2495L23.0419 47.2391L41.0928 30.3793L59 47.6851V63C59 63.5523 58.5523 64 58 64H3C2.44772 64 2 63.5523 2 63ZM3 0C1.34315 0 0 1.34315 0 3V63C0 64.6569 1.34315 66 3 66H58C59.6569 66 61 64.6569 61 63V3C61 1.34315 59.6569 0 58 0H3ZM22.7185 16.2664C22.7185 18.5968 20.8293 20.486 18.4989 20.486C16.1685 20.486 14.2793 18.5968 14.2793 16.2664C14.2793 13.936 16.1685 12.0468 18.4989 12.0468C20.8293 12.0468 22.7185 13.936 22.7185 16.2664ZM24.7185 16.2664C24.7185 19.7014 21.9339 22.486 18.4989 22.486C15.0639 22.486 12.2793 19.7014 12.2793 16.2664C12.2793 12.8314 15.0639 10.0468 18.4989 10.0468C21.9339 10.0468 24.7185 12.8314 24.7185 16.2664Z",
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
            d:
              "M31.9861 26.8551C32.2029 26.8551 32.3783 27.0254 32.3783 27.2355V29.2195C32.3783 29.4295 32.2029 29.5998 31.9861 29.5998H1.39223C1.17543 29.5998 1 29.4295 1 29.2195V27.2355C1 27.0254 1.17543 26.8551 1.39223 26.8551H3.20016V1.83469C3.20016 1.62465 3.37559 1.45435 3.59239 1.45435H10.1412C10.358 1.45435 10.5334 1.62465 10.5334 1.83469V5.05554H14.5097V1.83469C14.5097 1.62465 14.6851 1.45435 14.9019 1.45435H19.6631C19.8798 1.45435 20.0553 1.62465 20.0553 1.83469V4.18744L25.4729 3.22867C25.576 3.21139 25.6813 3.23257 25.7663 3.28995C25.8521 3.34734 25.9108 3.43537 25.9291 3.53454L30.1782 26.1126C30.2172 26.3193 30.0759 26.5175 29.8629 26.5552L28.1683 26.8551H31.9861ZM23.5066 22.6202L24.2874 26.7688L29.3362 25.8751L28.5555 21.7266L23.5066 22.6202ZM23.3657 21.8718L28.4147 20.9782L28.0604 19.0957L23.0114 19.989L23.3657 21.8718ZM27.9195 18.3472L25.2278 4.04525L20.1786 4.93891L22.8705 19.2406L27.9195 18.3472ZM20.0553 26.8551H23.5062L20.0553 8.51936V26.8551ZM19.2708 2.21503H15.2941V5.43589V26.8551H19.2708V2.21503ZM14.5097 26.8551V5.81623H10.5334V26.8551H14.5097ZM9.74893 10.38H3.98462V18.6904H9.74893V10.38ZM3.98462 9.6193H9.74893V7.41988H3.98462V9.6193ZM9.74893 19.451H3.98462V21.6503H9.74893V19.451ZM9.74893 5.43589V2.21503H3.98462V6.65919H9.74893V5.43589ZM9.74893 22.411H3.98462V26.8551H9.74893V22.411ZM1.78446 28.8391H31.5939V27.6158H19.6631H14.9019H10.1412H3.59239H1.78446V28.8391ZM13.6023 22.1066H11.4409C11.2241 22.1066 11.0486 21.9363 11.0486 21.7263C11.0486 21.5162 11.2241 21.3459 11.4409 21.3459H13.6023C13.8191 21.3459 13.9946 21.5162 13.9946 21.7263C13.9946 21.9363 13.8191 22.1066 13.6023 22.1066ZM11.4409 19.4512H13.6023C13.8191 19.4512 13.9946 19.2809 13.9946 19.0709C13.9946 18.8608 13.8191 18.6905 13.6023 18.6905H11.4409C11.2241 18.6905 11.0486 18.8608 11.0486 19.0709C11.0486 19.2809 11.2241 19.4512 11.4409 19.4512ZM18.3634 22.1066H16.2016C15.9848 22.1066 15.8093 21.9363 15.8093 21.7263C15.8093 21.5162 15.9848 21.3459 16.2016 21.3459H18.3634C18.5802 21.3459 18.7556 21.5162 18.7556 21.7263C18.7556 21.9363 18.5802 22.1066 18.3634 22.1066ZM16.2016 19.4512H18.3634C18.5802 19.4512 18.7556 19.2809 18.7556 19.0709C18.7556 18.8608 18.5802 18.6905 18.3634 18.6905H16.2016C15.9848 18.6905 15.8093 18.8608 15.8093 19.0709C15.8093 19.2809 15.9848 19.4512 16.2016 19.4512ZM4.80876 14.5352C4.80876 12.8573 5.71273 11.543 6.86643 11.543C8.02052 11.543 8.92449 12.8573 8.92449 14.5352C8.92449 16.2129 8.02052 17.5273 6.86643 17.5273C5.71273 17.5273 4.80876 16.2129 4.80876 14.5352ZM5.59322 14.5352C5.59322 15.7448 6.1762 16.7666 6.86643 16.7666C7.55666 16.7666 8.14003 15.7448 8.14003 14.5352C8.14003 13.3256 7.55666 12.3037 6.86643 12.3037C6.1762 12.3037 5.59322 13.3256 5.59322 14.5352Z",
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
            d:
              "M5.68889 0H58.3111C61.44 0 64 2.56 64 5.68889V18.8444H0V5.68889C0 2.56 2.56 0 5.68889 0ZM17.2302 12.7289C17.8183 12.7289 18.2969 12.2503 18.2969 11.6622V6.82667C18.2969 6.23858 17.8183 5.76 17.2302 5.76H7.98578C7.39769 5.76 6.91911 6.23858 6.91911 6.82667V11.6622C6.91911 12.2503 7.39769 12.7289 7.98578 12.7289H17.2302ZM36.6222 12.7289C37.2103 12.7289 37.6889 12.2503 37.6889 11.6622V6.82667C37.6889 6.23858 37.2103 5.76 36.6222 5.76H27.3778C26.7897 5.76 26.3111 6.23858 26.3111 6.82667V11.6622C26.3111 12.2503 26.7897 12.7289 27.3778 12.7289H36.6222ZM56.0142 12.7289C56.603 12.7289 57.0809 12.2503 57.0809 11.6622V6.82667C57.0809 6.23858 56.603 5.76 56.0142 5.76H46.7698C46.1824 5.76 45.7031 6.23858 45.7031 6.82667V11.6622C45.7031 12.2503 46.1824 12.7289 46.7698 12.7289H56.0142ZM5.68889 61.8667C2.56 61.8667 0 59.3067 0 56.1778V22.4H64V56.1778C64 59.3067 61.44 61.8667 58.3111 61.8667H5.68889ZM26.5202 29.9164C24.7673 28.9422 23.3323 29.7856 23.3323 31.7916V48.5639C23.3323 50.5714 24.7666 51.4133 26.5202 50.4391L41.1669 42.3033C43.2697 41.1342 43.2697 39.222 41.1669 38.053L26.5202 29.9164Z",
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
            d:
              "M8 1.5H56C59.5899 1.5 62.5 4.41015 62.5 8V56C62.5 59.5899 59.5899 62.5 56 62.5H8C4.41015 62.5 1.5 59.5899 1.5 56V8C1.5 4.41015 4.41015 1.5 8 1.5ZM0 8C0 3.58172 3.58172 0 8 0H56C60.4183 0 64 3.58172 64 8V56C64 60.4183 60.4183 64 56 64H8C3.58172 64 0 60.4183 0 56V8ZM49.6909 30.0352C45.9397 30.0352 42.8486 27.2093 42.4301 23.5703H7.5V21.8809H42.4302C42.8491 18.2423 45.94 15.417 49.6909 15.417C53.7277 15.417 57 18.6894 57 22.7261C57 26.7628 53.7277 30.0352 49.6909 30.0352ZM29.9517 40.75H57V42.4395H29.9518C29.5332 46.0785 26.4421 48.9043 22.6909 48.9043C18.9398 48.9043 15.8486 46.0785 15.4301 42.4395H8.31592V40.75H15.4302C15.8492 37.1115 18.9401 34.2861 22.6909 34.2861C26.4417 34.2861 29.5327 37.1115 29.9517 40.75ZM49.6909 28.0352C52.623 28.0352 55 25.6582 55 22.7261C55 19.7939 52.623 17.417 49.6909 17.417C46.7588 17.417 44.3818 19.7939 44.3818 22.7261C44.3818 25.6582 46.7588 28.0352 49.6909 28.0352ZM28 41.5952C28 44.5273 25.623 46.9043 22.6909 46.9043C19.7588 46.9043 17.3818 44.5273 17.3818 41.5952C17.3818 38.6631 19.7588 36.2861 22.6909 36.2861C25.623 36.2861 28 38.6631 28 41.5952Z",
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
            d:
              "M29.14 15.868C30.748 15.868 32.128 16.144 33.28 16.696C34.456 17.224 35.356 17.968 35.98 18.928C36.604 19.864 36.916 20.932 36.916 22.132C36.916 22.948 36.772 23.68 36.484 24.328C36.196 24.952 35.848 25.492 35.44 25.948C35.032 26.38 34.468 26.932 33.748 27.604C32.956 28.3 32.308 28.924 31.804 29.476C31.3 30.028 30.868 30.724 30.508 31.564C30.172 32.38 30.004 33.34 30.004 34.444H27.088C27.088 33.004 27.268 31.78 27.628 30.772C28.012 29.764 28.468 28.96 28.996 28.36C29.548 27.736 30.232 27.076 31.048 26.38C31.888 25.636 32.5 24.988 32.884 24.436C33.292 23.884 33.496 23.212 33.496 22.42C33.496 21.268 33.064 20.356 32.2 19.684C31.336 19.012 30.16 18.676 28.672 18.676C26.608 18.676 24.736 19.336 23.056 20.656L21.76 18.244C22.696 17.524 23.8 16.948 25.072 16.516C26.368 16.084 27.724 15.868 29.14 15.868ZM28.564 37.288C29.26 37.288 29.812 37.504 30.22 37.936C30.628 38.344 30.832 38.908 30.832 39.628C30.832 40.348 30.628 40.912 30.22 41.32C29.812 41.728 29.26 41.932 28.564 41.932C27.892 41.932 27.352 41.728 26.944 41.32C26.536 40.912 26.332 40.348 26.332 39.628C26.332 38.908 26.536 38.344 26.944 37.936C27.352 37.504 27.892 37.288 28.564 37.288Z",
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
      function v(e) {
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
            d:
              "M36.4525 0.983032C34.3364 0.983032 32.2684 1.65634 30.5371 2.90676C30.4409 2.95486 29.9599 3.3396 29.9599 3.38769L23.7078 8.48558L17.5038 3.43579C17.3595 3.3396 16.3976 2.57011 16.1091 2.42583C14.5701 1.51206 12.7426 1.03113 10.915 1.03113C5.33619 1.03113 0.767334 5.59999 0.767334 11.1788C0.767334 16.7576 5.33619 21.3265 10.915 21.3265C13.0311 21.3265 15.0991 20.6532 16.8305 19.4028C16.9267 19.3547 17.4076 18.9699 17.4557 18.9218L23.7078 13.8239L29.9119 18.8737C30.0561 18.9699 31.0661 19.7394 31.3066 19.8837C32.8455 20.7975 34.6731 21.2784 36.5006 21.2784C42.0795 21.2784 46.6483 16.7095 46.6483 11.1307C46.6483 5.55189 42.0795 0.983032 36.4525 0.983032ZM14.4739 15.94C13.4159 16.7095 12.2135 17.1424 10.915 17.1424C7.64467 17.1424 4.95145 14.4491 4.95145 11.1788C4.95145 7.90846 7.64467 5.21524 10.915 5.21524C11.9731 5.21524 13.0311 5.5038 13.9449 6.03282C14.1373 6.12901 14.7144 6.56185 14.8106 6.65804L20.3894 11.1788C20.3894 11.1788 14.522 15.8919 14.4739 15.94ZM36.4525 17.1424C35.3945 17.1424 34.3364 16.8538 33.4227 16.3248C33.2303 16.2286 32.6532 15.7958 32.557 15.6996L26.9782 11.1788L32.8455 6.41757C33.9036 5.64808 35.1059 5.21524 36.4044 5.21524C39.6748 5.21524 42.368 7.90846 42.368 11.1788C42.368 14.4491 39.771 17.1424 36.4525 17.1424Z",
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
      function j(e) {
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
            d:
              "M30.4126 5.84583C28.4532 5.77501 26.5883 4.98584 25.1733 3.62868C22.883 1.43206 19.2764 1.40456 16.9529 3.566C15.5173 4.90142 13.6406 5.66206 11.6804 5.70299C8.50765 5.76924 5.93799 8.30001 5.82337 11.4714C5.75255 13.4308 4.96338 15.2956 3.60622 16.7107C1.4096 19.001 1.3821 22.6075 3.54354 24.9311C4.87896 26.3667 5.6396 28.2433 5.68053 30.2036C5.74678 33.3763 8.27755 35.946 11.4489 36.0606C13.4083 36.1314 15.2732 36.9206 16.6882 38.2778C18.9785 40.4744 22.5851 40.5019 24.9086 38.3404C26.3442 37.005 28.2209 36.2444 30.1811 36.2035C33.3539 36.1372 35.9235 33.6064 36.0382 30.4351C36.109 28.4757 36.8981 26.6108 38.2553 25.1958C40.4519 22.9055 40.4794 19.2989 38.318 16.9754C36.9826 15.5398 36.2219 13.6631 36.181 11.7029C36.1147 8.53011 33.584 5.96045 30.4126 5.84583ZM37.1808 11.682C37.1035 7.9792 34.1499 4.98025 30.4487 4.84648C28.7347 4.78453 27.1033 4.09418 25.8655 2.90697C23.1926 0.343378 18.9835 0.311283 16.2718 2.83381C15.016 4.00202 13.3743 4.6674 11.6595 4.70321C7.95674 4.78052 4.95779 7.73408 4.82402 11.4352C4.76207 13.1493 4.07172 14.7806 2.88451 16.0185C0.320917 18.6914 0.288821 22.9005 2.81135 25.6122C3.97955 26.868 4.64494 28.5097 4.68075 30.2245C4.75807 33.9272 7.71162 36.9262 11.4128 37.06C13.1268 37.1219 14.7582 37.8123 15.996 38.9995C18.669 41.5631 22.878 41.5952 25.5897 39.0726C26.8455 37.9044 28.4872 37.239 30.202 37.2032C33.9048 37.1259 36.9037 34.1724 37.0375 30.4712C37.0995 28.7572 37.7898 27.1258 38.977 25.888C41.5406 23.215 41.5727 19.006 39.0502 16.2943C37.882 15.0384 37.2166 13.3968 37.1808 11.682ZM31.4863 41.2401C31.4867 41.2404 31.487 41.2407 31.1669 41.6248L31.487 41.2407L31.6669 41.3906V41.6248V62.5728V63.4683L30.9046 62.9985L20.9309 56.8517L10.9573 62.9985L10.1949 63.4683V62.5728V41.6248V41.3555L10.4198 41.2073L10.6949 41.6248C10.4198 41.2073 10.42 41.2071 10.4203 41.2069L10.4209 41.2065L10.4222 41.2057L10.425 41.2039L10.4321 41.1993L10.4518 41.1873C10.4674 41.1779 10.4879 41.1661 10.5133 41.1524C10.5641 41.125 10.6344 41.0902 10.7241 41.0527C10.9034 40.9778 11.1598 40.8927 11.4906 40.8367C12.1557 40.724 13.1039 40.7318 14.3111 41.1525C14.7935 41.3206 15.3635 41.6156 15.9507 41.9446C16.2911 42.1353 16.6562 42.3485 17.0236 42.563L17.024 42.5632L17.0248 42.5637C17.2873 42.717 17.551 42.871 17.8076 43.0179C18.4375 43.3784 19.0498 43.7114 19.6033 43.955C20.1687 44.2038 20.6187 44.3343 20.9375 44.3385C21.205 44.3421 21.6162 44.2205 22.1636 43.9649C22.6946 43.7169 23.2892 43.3749 23.9047 43.0052C24.1025 42.8864 24.3034 42.7642 24.5044 42.642L24.5055 42.6413L24.5067 42.6406L24.5067 42.6405L24.5069 42.6405C24.9206 42.3888 25.3344 42.137 25.7213 41.9151C26.2933 41.587 26.855 41.2951 27.3286 41.1477C28.7347 40.7101 29.7388 40.6983 30.4172 40.8191C30.7557 40.8794 31.0083 40.9719 31.1846 41.0565C31.2726 41.0987 31.3409 41.1387 31.3909 41.1712C31.4159 41.1874 31.4363 41.2018 31.4523 41.2136C31.4603 41.2195 31.4671 41.2248 31.4729 41.2293L31.4808 41.2356L31.4841 41.2383L31.4856 41.2395L31.4863 41.2401ZM11.1949 41.9422V61.6774L20.6686 55.8387L20.9309 55.6771L21.1932 55.8387L30.6669 61.6774V41.9208C30.5682 41.8813 30.4282 41.8368 30.242 41.8037C29.7472 41.7156 28.9065 41.704 27.6258 42.1025C27.2665 42.2144 26.7877 42.4563 26.2189 42.7825C25.8428 42.9982 25.4485 43.2381 25.0417 43.4856L25.0415 43.4858L25.0399 43.4867C24.836 43.6108 24.629 43.7367 24.4195 43.8625C23.8009 44.234 23.1684 44.5994 22.5866 44.871C22.0212 45.135 21.4338 45.3452 20.9243 45.3385C20.3958 45.3315 19.7928 45.1309 19.2005 44.8703C18.5965 44.6045 17.9466 44.2496 17.3108 43.8857C17.0355 43.7281 16.7669 43.5712 16.504 43.4176C16.1468 43.209 15.8002 43.0066 15.4619 42.817C14.8778 42.4897 14.3743 42.2334 13.9821 42.0968C12.9316 41.7307 12.1539 41.7385 11.6576 41.8226C11.4625 41.8557 11.308 41.901 11.1949 41.9422ZM23.7901 8.68637C24.8582 9.71081 26.2659 10.3065 27.7449 10.36C29.879 10.4371 31.582 12.1663 31.6266 14.3013C31.6575 15.781 32.2316 17.1975 33.2397 18.2812C34.6941 19.8447 34.6756 22.2717 33.1975 23.8129C32.173 24.881 31.5774 26.2887 31.5239 27.7677C31.4468 29.9018 29.7176 31.6048 27.5826 31.6494C26.1029 31.6803 24.6863 32.2544 23.6027 33.2625C22.0391 34.7169 19.6122 34.6984 18.071 33.2203C17.0028 32.1958 15.5952 31.6002 14.1162 31.5467C11.9821 31.4696 10.2791 29.7404 10.2345 27.6054C10.2036 26.1257 9.62942 24.7091 8.62139 23.6255C7.16691 22.0619 7.18542 19.635 8.66357 18.0938C9.68801 17.0256 10.2837 15.618 10.3372 14.1389C10.4143 12.0049 12.1435 10.3019 14.2785 10.2573C15.7582 10.2264 17.1747 9.65222 18.2584 8.64419C19.8219 7.18971 22.2489 7.20821 23.7901 8.68637ZM27.781 9.36061C30.4449 9.45689 32.5707 11.6154 32.6264 14.2804C32.6521 15.5146 33.131 16.6962 33.9719 17.6001C35.7874 19.5518 35.7643 22.5812 33.9192 24.5051C33.0647 25.396 32.5678 26.5702 32.5232 27.8038C32.427 30.4677 30.2685 32.5935 27.6034 32.6492C26.3692 32.6749 25.1876 33.1538 24.2838 33.9946C22.332 35.8102 19.3026 35.7871 17.3788 33.942C16.4879 33.0875 15.3137 32.5906 14.08 32.546C11.4161 32.4498 9.29034 30.2913 9.23469 27.6262C9.20892 26.392 8.73001 25.2104 7.88921 24.3066C6.07363 22.3548 6.09673 19.3254 7.94186 17.4016C8.79635 16.5107 9.29322 15.3365 9.33781 14.1028C9.43409 11.4389 11.5926 9.31314 14.2576 9.25749C15.4918 9.23172 16.6734 8.75281 17.5773 7.912C19.529 6.09643 22.5584 6.11953 24.4823 7.96466C25.3732 8.81915 26.5474 9.31602 27.781 9.36061Z",
            fill: "none",
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
            d:
              "M57.189 51.828H11.813a1 1 0 00-1 1v4.77a1 1 0 001 1h45.376a1 1 0 001-1v-4.77a1 1 0 00-1-1zm-1 4.77H12.813v-2.77h43.376v2.77z",
          }),
          i.a.createElement("path", {
            d:
              "M63.189 4.402H5.813a1 1 0 00-1 1L4.81 62.598H2.46a1 1 0 100 2h64.08a1 1 0 100-2h-2.35l-.001-57.196a1 1 0 00-1-1zm-56.376 2h55.376v39.426H43.584v-5.854h-7.556l2.448-2.48a.999.999 0 00.288-.702V18.915h2.062a1 1 0 100-2h-3.508v-3.775h1.32a1 1 0 100-2h-3.584v-.917a1 1 0 10-2 0v.917H29.47a1 1 0 100 2h1.32v3.775h-3.508a1 1 0 100 2h2.061v17.875c0 .242.087.474.245.656l2.195 2.527h-6.365v5.854H6.813V6.402zm25.977 6.74h2.528v3.774H32.79v-3.775zm-1.447 5.774h1.711v14.642a1 1 0 102 0V18.916h1.71v17.465l-2.9 2.94-2.52-2.904v-17.5zm10.241 23.058v3.834H27.418v-3.834h14.166zM6.81 62.598v-14.77h55.38v14.77H6.81z",
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
            d:
              "M47.9849 0.487061L62.9734 29.8571L95.5377 35.0362L72.2368 58.367L77.3741 90.9379L47.9849 75.9871L18.5956 90.9379L23.7329 58.367L0.432037 35.0362L32.9963 29.8571L47.9849 0.487061Z",
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
            d:
              "M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0\r\n\t\t\t\tc16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294\r\n\t\t\t\tc-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280\r\n\t\t\t\tc74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941\r\n\t\t\t\tc-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z\r\n\t\t\t\t\tM757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0\r\n\t\t\t\tc82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0\r\n\t\t\t\tc-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647\r\n\t\t\t\tc148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059\r\n\t\t\t\tS905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z",
          })
        );
      }
      function P(e) {
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
    dFOy: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
    },
    eOCM: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/bored.png?v=valveisgoodatcaching";
    },
    eRlu: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/golden_frame_anim.png?v=valveisgoodatcaching";
    },
    eeci: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/hot_take_apng.png?v=valveisgoodatcaching";
    },
    ehaW: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return z;
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
          return Y;
        });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("TyAF"),
        s = a("StxQ"),
        l = a("6Y59"),
        c = a("Vlb1"),
        m = (a("li7h"), a("OU48"), a("exH9")),
        d = a("lkRc"),
        p = a("TLQK"),
        u = a("prdU"),
        _ = a("cJ7F"),
        f = a("cOvF"),
        g = a("IjL/"),
        h = a("qD+2"),
        b = a("lypr"),
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
      function N(e) {
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
            i.a.createElement(f.b, {
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
      const v = Object(o.a)((e) =>
          i.a.createElement(z, Object.assign({}, N(e)))
        ),
        S = Object(o.a)((e) =>
          i.a.createElement(
            G,
            Object.assign({}, N(e), { iconComponent: l.o }),
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
        j = Object(o.a)((e) =>
          i.a.createElement(
            z,
            Object.assign({}, N(e), { iconComponent: l.n }),
            i.a.createElement("img", {
              className: c.ImageSmall,
              src: Object(M.a)(
                e.definition.appid,
                e.definition.community_item_data.item_image_large
              ),
            })
          )
        ),
        A = Object(o.a)((e) =>
          i.a.createElement(z, Object.assign({}, N(e), { iconComponent: l.m }))
        ),
        O = Object(o.a)((e) =>
          e.definition.community_item_data.animated
            ? i.a.createElement(D, Object.assign({}, e))
            : i.a.createElement(x, Object.assign({}, e))
        ),
        D = Object(o.a)((e) =>
          i.a.createElement(
            T,
            Object.assign({ className: c.HasAnimation }, N(e), {
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
          )
        ),
        x = Object(o.a)((e) =>
          i.a.createElement(
            z,
            Object.assign({}, N(e), {
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
          )
        ),
        P = Object(o.a)((e) =>
          i.a.createElement(
            T,
            Object.assign({}, N(e), {
              iconComponent: f.v,
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
        B = Object(o.a)((e) =>
          i.a.createElement(
            G,
            Object.assign({}, N(e), { iconComponent: f.h }),
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
        L = Object(o.a)((e) =>
          i.a.createElement(
            G,
            Object.assign({}, N(e), { iconComponent: f.c }),
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
            z,
            Object.assign({}, N(e), {
              iconComponent: f.m,
              desc: Object(u.d)(8),
            })
          )
        ),
        k = Object(o.a)((e) =>
          i.a.createElement(
            z,
            Object.assign({}, N(e), { iconComponent: f.s }),
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
            z,
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
            z,
            Object.assign({}, a, {
              onMouseEnter: () => this.setState({ bHover: !0 }),
              onMouseLeave: () => this.setState({ bHover: !1 }),
            }),
            t(this.state.bHover || !0)
          );
        }
      }
      const z = (e) => {
          const {
              appName: t,
              appIcon: a,
              attributes: r,
              children: o,
              cost: l,
              iconComponent: d,
              name: p,
              desc: u,
              className: g,
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
            N = d,
            v = { background: (b || E).colors.bodygradient },
            S = { background: (b || E).colors.background };
          return i.a.createElement(
            "div",
            { className: c.ItemContainer },
            i.a.createElement(
              _.a,
              Object.assign({}, M, {
                className: Object(m.a)(g, c.Item, C),
                style: S,
              }),
              i.a.createElement(
                _.b,
                { className: c.Body, style: v },
                i.a.createElement("div", { className: c.Attributes }, r),
                i.a.createElement(Q, { src: a, title: t }),
                !w &&
                  i.a.createElement(
                    "div",
                    { className: c.BodyTopRight },
                    i.a.createElement(f.k, {
                      className: c.IconPartialCheckMark,
                    }),
                    i.a.createElement(f.j, { className: c.IconCheckMark })
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
                      N &&
                        i.a.createElement(N, {
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
                    i.a.createElement(f.k, {
                      className: c.IconPartialCheckMark,
                    }),
                    i.a.createElement(f.j, { className: c.IconCheckMark }),
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
        F = (e) => {
          const {
              appName: t,
              appIcon: a,
              attributes: r,
              children: o,
              cost: l,
              iconComponent: d,
              name: p,
              desc: u,
              className: g,
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
            N = { background: (b || E).colors.bodygradient },
            v = { background: (b || E).colors.background };
          return i.a.createElement(
            "div",
            { className: c.ItemWideContainer },
            i.a.createElement(
              _.a,
              Object.assign({}, w, {
                className: Object(m.a)(g, c.Item, C),
                style: v,
              }),
              i.a.createElement(
                _.b,
                { className: c.Body, style: N },
                i.a.createElement("div", { className: c.Attributes }, r),
                i.a.createElement(Q, { src: a, title: t }),
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
                  i.a.createElement(f.k, { className: c.IconPartialCheckMark }),
                  i.a.createElement(f.j, { className: c.IconCheckMark }),
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
        H = { 11: S, 4: j, 12: A, 3: O, 13: P, 8: R, 14: B, 15: L, 16: k },
        U = Object(o.a)((e) => {
          var t;
          const { className: a } = e,
            r = Object(n.c)(e, ["className"]),
            o = u.b.Get().BRewardOwnedByUser(e.definition),
            s = Object(m.a)(a, o && c.OwnedItem);
          if (5 == e.definition.type || 6 == e.definition.type)
            return i.a.createElement(
              g.a,
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
              g.a,
              { fallback: null },
              i.a.createElement(
                w.b,
                Object.assign({}, r, { className: s, onClick: e.onClick })
              )
            );
          const l = H[e.definition.community_item_class];
          return l
            ? i.a.createElement(
                g.a,
                { fallback: null },
                i.a.createElement(
                  l,
                  Object.assign({}, r, { className: s, onClick: e.onClick })
                )
              )
            : i.a.createElement(
                g.a,
                { fallback: null },
                i.a.createElement(
                  v,
                  Object.assign({}, r, { className: s, onClick: e.onClick })
                )
              );
        });
      function V(e) {
        return a("JeMz")(`./icon_showcase_${e}.svg`);
      }
      const Z = (e) =>
        i.a.createElement(
          F,
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
                l = Object(p.f)("#ProfileShowcases_Type_" + t),
                d = a >= u.b.Get().GetMaxProfileShowcaseUpgradeLevel(),
                _ = a > 1,
                g = Object(m.a)(
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
                  desc: Object(p.f)("#ProfileShowcases_Upgrade"),
                  attributes: [],
                  className: g,
                  iconComponent: f.z,
                },
                o
              );
            })(e)
          )
        );
      const W = (e) =>
        i.a.createElement(
          F,
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
                d = Object(p.f)("#ProfileShowcases_Type_" + t),
                _ = r >= u.b.Get().GetMaxProfileShowcaseSlots(),
                g = Object(m.a)(_ && c.OwnedItem);
              return Object.assign(
                {
                  cost: a,
                  name: d,
                  children: i.a.createElement("img", {
                    className: c.ImageProfileShowcase,
                    src: l,
                  }),
                  desc: Object(p.f)("#ProfileShowcases_AdditionalSlot"),
                  attributes: [],
                  className: g,
                  iconComponent: f.z,
                },
                s
              );
            })(e)
          )
        );
      class Q extends i.a.Component {
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
      function Y() {
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
    gxgZ: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/game_tiles.png?v=valveisgoodatcaching";
    },
    "hq+U": function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjEzNiIgdmlld0JveD0iMCAwIDExOSAxMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNjIuNDA4IDM0LjA4MTdDNjIuNDA4IDI5Ljc2ODUgNTguODkzNiAyNi4yNTQxIDU0LjU4MDQgMjYuMjU0MUgzMy4zMzQxQzMxLjczNjcgMjYuMjU0MSAzMC40NTg3IDI0LjY1NjYgMzAuNzc4MiAyMy4wNTkyQzMwLjc3ODIgMjMuMDU5MiAzNy4zMjc4IDcuMDg0NTIgMzcuMzI3OCA1LjAwNzgxQzM3LjMyNzggMi45MzExIDM2LjUyOTEgMS40OTMzOSAzNC45MzE2IDEuMTczODlDMzMuMzM0MSAwLjg1NDM5OSAyOS44MTk3IDAuMDU1NjY2OCAyOS44MTk3IDAuMDU1NjY2OEMyOC4yMjIzIC0wLjEwNDA4IDI3LjEwNCAwLjA1NTY2NjcgMjYuMzA1MyAwLjg1NDRMMi41MDMwNSAyNC42NTY2QzEuMDY1MzQgMjYuMDk0NCAwLjI2NjYwMiAyOC4wMTEzIDAuMjY2NjAyIDMwLjA4OFY3My44NTg2QzAuMjY2NjAyIDc1LjQ1NjEgMS43MDQzMiA3Ni44OTM4IDMuMzAxNzkgNzYuODkzOEg0My4wNzg3QzQ2LjI3MzYgNzYuODkzOCA0OC41MTAxIDc0LjY1NzMgNTAuMjY3MyA3Mi4xMDE0TDYwLjk3MDMgNTcuODgzOUM2MS42MDkzIDU3LjA4NTIgNjIuNTY3OCA1NS4xNjgyIDYyLjU2NzggNTMuNTcwOFYzNC40MDEyTDYyLjQwOCAzNC4wODE3WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8cGF0aCBkPSJNNTYuMTc3NyAxMDEuOTE4QzU2LjE3NzcgMTA2LjIzMSA1OS42OTIyIDEwOS43NDYgNjQuMDA1MyAxMDkuNzQ2SDg1LjI1MTZDODYuODQ5MSAxMDkuNzQ2IDg4LjEyNzEgMTExLjM0MyA4Ny44MDc2IDExMi45NDFDODcuODA3NiAxMTIuOTQxIDgxLjI1NzkgMTI4LjkxNSA4MS4yNTc5IDEzMC45OTJDODEuMjU3OSAxMzMuMDY5IDgyLjA1NjcgMTM0LjUwNyA4My42NTQxIDEzNC44MjZDODUuMjUxNiAxMzUuMTQ2IDg4Ljc2NiAxMzUuOTQ0IDg4Ljc2NiAxMzUuOTQ0QzkwLjM2MzUgMTM2LjEwNCA5MS40ODE3IDEzNS45NDQgOTIuMjgwNSAxMzUuMTQ2TDExNS45MjMgMTExLjM0M0MxMTcuMzYxIDEwOS45MDYgMTE4LjE1OSAxMDcuOTg5IDExOC4xNTkgMTA1LjkxMlY2Mi4xNDE0QzExOC4xNTkgNjAuNTQzOSAxMTYuNzIyIDU5LjEwNjIgMTE1LjEyNCA1OS4xMDYySDc1LjY2NjhDNzIuNDcxOSA1OS4xMDYyIDcwLjIzNTQgNjEuMzQyNyA2OC40NzgyIDYzLjg5ODZMNTcuNzc1MiA3OC4xMTZDNTcuMTM2MiA3OC45MTQ4IDU2LjE3NzcgODAuODMxNyA1Ni4xNzc3IDgyLjQyOTJWMTAxLjQzOVYxMDEuOTE4WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMxLjQxNzIiIHkxPSIwIiB4Mj0iMzEuNDE3MiIgeTI9Ijc2Ljg5MzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI4Ny4xNjg2IiB5MT0iNTkuMTA2MiIgeDI9Ijg3LjE2ODYiIHkyPSIxMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg==";
    },
    jUCX: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return m;
      }),
        a.d(t, "a", function () {
          return d;
        });
      var n = a("mrSG"),
        r = a("2vnA"),
        i = a("Gp1o"),
        o = a("qD+2"),
        s = a("TLQK"),
        l = (a("kyHq"), a("li7h"), a("lkRc")),
        c = (a("kLLr"), a("8H1D"));
      function m(e) {
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
      class d {
        constructor(e) {
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
            ? o.a.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? o.a.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? o.a.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? o.a.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            o.a.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
        }
        HasCurrentGameRichPresence() {
          return this.m_mapRichPresence.has("steam_display");
        }
        GetCurrentGameRichPresence() {
          if (this.HasCurrentGameRichPresence()) {
            let e = o.a.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return Object(s.f)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const a = o.a.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return Object(s.f)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!l.d.IN_MOBILE || e <= 60) && Object(i.b)(e);
          let t = o.a.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? Object(s.f)("#PersonaStateLastSeen_JustNow")
            : Object(s.f)("#PersonaStateLastSeen", Object(s.p)(t));
        }
        GetLocalizedOnlineStatus() {
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
          return this.m_strAvatarHash != c.b;
        }
        get avatar_url() {
          return Object(c.a)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return Object(c.a)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return Object(c.a)(this.m_strAvatarHash, "full");
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
      Object(n.b)([r.C], d.prototype, "m_bInitialized", void 0),
        Object(n.b)([r.C], d.prototype, "m_ePersonaState", void 0),
        Object(n.b)([r.C], d.prototype, "m_unGamePlayedAppID", void 0),
        Object(n.b)([r.C], d.prototype, "m_gameid", void 0),
        Object(n.b)([r.C], d.prototype, "m_unPersonaStateFlags", void 0),
        Object(n.b)([r.C], d.prototype, "m_strPlayerName", void 0),
        Object(n.b)([r.C], d.prototype, "m_strAvatarHash", void 0),
        Object(n.b)([r.C], d.prototype, "m_rtLastSeenOnline", void 0),
        Object(n.b)([r.C], d.prototype, "m_strGameExtraInfo", void 0),
        Object(n.b)([r.C], d.prototype, "m_unGameServerIP", void 0),
        Object(n.b)([r.C], d.prototype, "m_unGameServerPort", void 0),
        Object(n.b)([r.C], d.prototype, "m_game_lobby_id", void 0),
        Object(n.b)([r.C], d.prototype, "m_bPlayerNamePending", void 0),
        Object(n.b)([r.C], d.prototype, "m_bAvatarPending", void 0),
        Object(n.b)([r.C], d.prototype, "m_broadcastId", void 0),
        Object(n.b)([r.C], d.prototype, "m_broadcastAccountId", void 0),
        Object(n.b)([r.C], d.prototype, "m_broadcastAppId", void 0),
        Object(n.b)([r.C], d.prototype, "m_broadcastViewerCount", void 0),
        Object(n.b)([r.C], d.prototype, "m_strBroadcastTitle", void 0),
        Object(n.b)([r.C], d.prototype, "m_bCommunityBanned", void 0);
    },
    kJAG: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/Sunglasses.gif?v=valveisgoodatcaching";
    },
    kqfX: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/golden_pagebg.png?v=valveisgoodatcaching";
    },
    ksWZ: function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
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
      var n = a("lkRc");
      a("OU48"), a("li7h");
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
        s = a("TLQK"),
        l = a("+9fn"),
        c = a("cJ7F"),
        m = a("Wilf"),
        d = a("StxQ"),
        p = a("exH9"),
        u = a("nXE5"),
        _ = a("cOvF"),
        f = a("prdU"),
        g = a("lkRc"),
        h = a("+j4l"),
        b = a("RV7a");
      const C = (e, t) =>
          `${g.d.MEDIA_CDN_COMMUNITY_URL}/images/items/${e}/${t}`,
        I = Object(o.a)(() => {
          const e = f.b.Get().GetSeasonalBadgeDefinition(),
            t = f.b.Get().GetUserSeasonalBadgeLevel(),
            a = e
              ? e.community_item_data.badge_data.map(
                  ({ level: a, image: n }) => ({
                    level: a,
                    imgSrc: C(e.appid, n),
                    owned: t >= a,
                    cost: f.b.Get().GetCostToLevelSeasonalBadge(a),
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
                title: Object(s.f)("#BadgeLevel", t),
                className: m.BadgeImage,
              })
            ),
            i.a.createElement(
              c.c,
              { className: m.Footer },
              i.a.createElement(N, { owned: a, level: t }),
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
        N = (e) => {
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
          return v;
        }),
        a.d(t, "b", function () {
          return j;
        }),
        a.d(t, "a", function () {
          return D;
        }),
        a.d(t, "f", function () {
          return B;
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
      var p = a("exH9"),
        u = a("t3iX"),
        _ = a("cCsu"),
        f = a.n(_),
        g = a("TJrv"),
        h = a.n(g),
        b = a("f+AQ"),
        C = a.n(b),
        I = a("IzPI");
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
      function N(e) {
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
      const v = ({ background: e, children: t }) => {
          let a = f.a;
          return (
            e && (a = e),
            i.a.createElement(
              M,
              null,
              i.a.createElement(E, { src: a }, i.a.createElement(N, null, t))
            )
          );
        },
        S = ({ children: e }) =>
          i.a.createElement(E, { src: h.a, className: s.HomeBackground }, e),
        j = ({ children: e }) =>
          i.a.createElement(
            M,
            null,
            i.a.createElement(S, null, i.a.createElement(N, null, e))
          ),
        A = Object(o.a)(({ children: e, appid: t }) => {
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
        O = { 1461450: C.a };
      function D(e) {
        return e.appid in O
          ? i.a.createElement(x, Object.assign({}, e))
          : i.a.createElement(P, Object.assign({}, e));
      }
      function x(e) {
        const { children: t, appid: a } = e,
          n = (function (e) {
            return O[e];
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
            i.a.createElement(N, null, t)
          )
        );
      }
      function P(e) {
        const { children: t, appid: a } = e;
        return i.a.createElement(
          M,
          null,
          i.a.createElement(A, { appid: a }, i.a.createElement(N, null, t))
        );
      }
      const B = ({ title: e, subtitle: t, headerImage: a }) =>
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
    okIP: function (e, t, a) {
      e.exports =
        a.p + "images/applications/store/golden_bg.png?v=valveisgoodatcaching";
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
        return O;
      }),
        a.d(t, "f", function () {
          return D;
        }),
        a.d(t, "b", function () {
          return P;
        }),
        a.d(t, "e", function () {
          return B;
        }),
        a.d(t, "a", function () {
          return z;
        }),
        a.d(t, "c", function () {
          return Q;
        });
      var n = a("mrSG"),
        r = (a("q1tI"), a("2lpH")),
        i = a.n(r),
        o = a("2vnA"),
        s = a("TLQK"),
        l = a("vDqi"),
        c = a.n(l),
        m = a("lkRc"),
        d = a("kyHq"),
        p = a("OS6B"),
        u = a("opsS"),
        _ = a("bxBv"),
        f = (a("li7h"), a("OU48")),
        g = a("0xSo"),
        h = a("oFam"),
        b = a("cxFF"),
        C = a("BFsE"),
        I = (a("SvTV"), a("jUCX")),
        y = a("kLLr"),
        w = (a("RhBb"), a("bEwK")),
        M = a.n(w),
        E = (a("cMk+"), a("cOvF")),
        N = a("1fPh"),
        v = a("r64O"),
        S = a("qD+2"),
        j = (a("sOw0"), a("E4Op"), a("ee7K")),
        A = a("CdLH");
      function O(e, t = !1) {
        const a = (e) => Object(s.f)(t ? `${e}_Plural` : e);
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
      class P {
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
              (e) => f.o.BatchedQueryRewardItems(this.m_anonymousTransport, e),
              (e) => {
                const t = _.b.Init(f.b);
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
              (e) => g.c.GetCommunityInventory(this.m_transport, e),
              (e) => {
                const t = _.b.Init(g.b);
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
            const e = new y.a(m.k.steamid);
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
              Q.Get().InitFreeItemReward(t.can_claim_sale_reward),
            t.is_sale_active && (this.m_bIsSaleActive = t.is_sale_active),
            t.free_item_header &&
              (this.m_strFreeItemHeader = t.free_item_header),
            this.HydrateCustomPages();
        }
        static Get() {
          return (
            this.s_RewardsStore || (this.s_RewardsStore = new P()),
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
          return 1846860;
        }
        GetLoyaltyRewardsSummary() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return;
            const e = _.b.Init(f.g);
            e.SetBodyFields({ steamid: m.k.steamid });
            let t = yield f.o.GetSummary(this.m_transport, e);
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
            const e = _.b.Init(f.e);
            let t = yield f.o.GetReactionConfig(this.m_transport, e);
            1 == t.GetEResult()
              ? ((this.m_unAwardPointsTransferred = 0),
                t
                  .Body()
                  .reactions()
                  .forEach((e) => {
                    0 == this.m_unAwardPointsTransferred
                      ? (this.m_unAwardPointsTransferred = e.points_transferred())
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
          return m.k.logged_in;
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
            const t = new f.h();
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
            i = j.a.Get().GetExcludedContentDescriptor();
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
                  S.a.EnsureAppInfoForAppIDs(e);
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
              u = new f.h();
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
            const e = new f.h();
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
            const e = new f.h();
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
            const e = new f.h();
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
            Object(v.a)(
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
            const e = _.b.Init(f.c),
              t = yield f.o.GetActivePurchaseBonuses(this.m_transport, e);
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
            const a = _.b.Init(h.k);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.n.SetProfileBackground(this.m_transport, a);
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
            const a = _.b.Init(h.i);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.n.SetAvatarFrame(this.m_transport, a);
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
            const a = _.b.Init(h.h);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.n.SetAnimatedAvatar(this.m_transport, a);
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
            const a = _.b.Init(h.j);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.n.SetMiniProfileBackground(this.m_transport, a);
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
            const a = _.b.Init(h.l);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
            const n = yield h.n.SetSteamDeckKeyboardSkin(this.m_transport, a);
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
            const a = _.b.Init(g.a);
            a.Body().set_communityitemid(this.GetOwnedCommunityItemID(e)),
              a.Body().set_appid(e.appid),
              a.Body().set_activate(!0);
            const n = yield g.c.ActivateProfileModifierItem(
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
                  strMessage: Object(s.f)("#Redeem_SignIn"),
                }),
                a
              );
            const n = _.b.Init(f.l);
            n.Body().set_defid(e);
            const r = yield f.o.RedeemPoints(this.m_transport, n);
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
                  strMessage: Object(s.f)("#Redeem_SignIn"),
                }),
                a
              );
            const n = _.b.Init(f.i);
            n.Body().set_defid(e), n.Body().set_num_levels(t);
            const r = yield f.o.RedeemPointsForBadgeLevel(this.m_transport, n);
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
            const a = _.b.Init(f.k);
            a.Body().set_customization_type(e);
            const n = yield f.o.RedeemPointsForProfileCustomization(
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
                  strMessage: Object(s.f)("#Redeem_SignIn"),
                }),
                a
              );
            const n = _.b.Init(f.j);
            n.SetBodyFields({ customization_type: e, new_level: t });
            const r = yield f.o.RedeemPointsForProfileCustomizationUpgrade(
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
                  strMessage: Object(s.f)("#Redeem_SignIn"),
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
            e.Body().set_country_code(m.k.country_code);
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
            const e = _.b.Init(h.c),
              t = Math.floor(Date.now() / 1e3) - 14 * A.e.PerDay;
            e.Body().set_min_last_played(t);
            const a = yield h.n.ClientGetLastPlayedTimes(this.m_transport, e);
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
            const e = _.b.Init(f.d),
              t = yield f.o.GetEligibleApps(this.m_transport, e);
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
            const e = _.b.Init(h.d);
            e.SetBodyFields({ steamid: m.k.steamid });
            const t = yield h.n.GetProfileItemsEquipped(this.m_transport, e);
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
            const e = _.b.Init(h.e);
            e.SetBodyFields({ steamid: m.k.steamid });
            const t = yield h.n.GetPurchasedAndUpgradedProfileCustomizations(
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
              steamids: m.k.steamid,
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
            const t = new f.h();
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
            this.m_mapPages.has(L(e)) ||
              this.m_mapPages.set(L(e), this.BuildPage(e)),
            this.m_mapPages.get(L(e))
          );
        }
        BuildPage(e) {
          switch (e.type) {
            case "app":
              return new F(
                e.appid,
                e.appid === this.GetCurrentSeasonalAppID()
                  ? Object(s.f)("#HeroCluster_Premier_Collection_Subtitle")
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
              const n = new z(e, t, Z({ grouping: 2 }, a));
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
                  return Object(s.f)("#HeroCluster_AppTitle", i.title);
                },
                get strImage() {
                  return a || P.Get().GetAppHeroImage(e).img_url;
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
            n = (e) => this.m_mapPages.set(L(e.params), e),
            r = e(
              Object(s.f)(
                "#RewardCluster_Popular_Title",
                Object(s.f)("#RewardCluster_Popular_RewardItems")
              ),
              Object(s.f)("#RewardCluster_Popular_Subtitle")
            ),
            i = e(
              O(13, !0),
              Object(s.f)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
              { itemclass: [13] }
            ),
            l = e(
              Object(s.f)("#ShopPageTitle_Avatar"),
              Object(s.f)("#RewardCluster_AvatarItems_Subtitle"),
              { itemclass: [15, 14] }
            ),
            c = e(
              O(3, !0),
              Object(s.f)("#RewardCluster_Backgrounds_Subtitle"),
              { itemclass: [3] }
            ),
            p = e(
              Object(s.f)(
                "#RewardCluster_Popular_Title",
                Object(s.f)("#ShopNav_ChatEffectsLink")
              ),
              Object(s.f)("#RewardCluster_ChatEffect_Subtitle"),
              { itemclass: [12] }
            ),
            u = e(
              Object(s.f)(
                "#RewardCluster_Popular_Title",
                Object(s.f)("#ShopNav_StickersLink")
              ),
              Object(s.f)("#RewardCluster_Popular_Subtitle"),
              { itemclass: [11] }
            ),
            _ = e(
              Object(s.f)(
                "#RewardCluster_Popular_Title",
                Object(s.f)("#ShopNav_EmoticonsLink")
              ),
              Object(s.f)("#RewardCluster_Popular_Subtitle"),
              { itemclass: [4] }
            ),
            f = e(
              Object(s.f)("#RewardCluster_All_Title", O(15, !0)),
              Object(s.f)("#RewardCluster_AnimatedAvatar_Subtitle"),
              { itemclass: [15] }
            ),
            g = e(
              Object(s.f)("#RewardCluster_All_Title", O(14, !0)),
              Object(s.f)("#RewardCluster_AvatarFrames_Subtitle"),
              { itemclass: [14] }
            ),
            h = e(
              Object(s.f)("#RewardCluster_All_Title", O(16, !0)),
              Object(s.f)("#RewardCluster_SteamDeckKeyboardSkins_Subtitle"),
              { itemclass: [16] }
            ),
            b = e(
              Object(s.f)(
                "#RewardCluster_All_Title",
                Object(s.f)("#RewardItemType_Bundle_plural")
              ),
              Object(s.f)("#ShopPageTitle_ItemBundles_Subtitle2"),
              { rewardtype: [5, 6] }
            ),
            C = e(
              Object(s.f)(
                "#RewardCluster_All_Title",
                Object(s.f)("#RewardItemType_ProfileBundle_plural")
              ),
              "",
              {
                itemclass: [8],
                queryFilter: [3],
                excludedAppIDs: [P.Get().GetCurrentSeasonalAppID()],
              }
            ),
            I = e(
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
            y = e(
              Object(s.f)("#RewardCluster_TabletopFest2021Profiles_Title"),
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
            v = e(
              Object(s.f)(
                "#RewardCluster_NewFeatured_Title",
                Object(s.f)("#RewardCluster_Popular_RewardItems")
              ),
              void 0,
              { categoryTag: ["summer_2021_sale"], grouping: 2 }
            );
          w.unshift({ cluster: v, type: 1 });
          const S = [];
          let j;
          Object(d.b)(m.d.EREALM)
            ? S.push(a(1880140), a(1846860))
            : S.push(a(1902490), a(1446780), a(1880140)),
            (j = {
              type: "banner",
              title: Object(s.f)("#FeaturedBanner_ArtistProfiles_Headline"),
              description: Object(s.f)(
                "#FeaturedBanner_ArtistProfiles_Subhead"
              ),
              link_text: Object(s.f)(
                "#FeaturedBanner_ArtistProfiles_CallToAction"
              ),
              linked_page: N.b.LoyaltyArtistProfiles(),
              iconComponent: E.f,
            });
          const A = [],
            x = [S, w];
          for (let e = 0; e < Math.max(x[0].length, x[1].length); e++)
            0 == e && j && A.push(j),
              e < x[0].length && A.push({ type: "clusterview", view: x[0][e] }),
              e < x[1].length && A.push({ type: "clusterview", view: x[1][e] });
          n(new H(D, A));
          n(
            new U(
              "stickers",
              [{ cluster: u, type: 0 }],
              Object(s.f)("#ShopPageTitle_Stickers")
            )
          );
          n(
            new U(
              "emoticons",
              [{ cluster: _, type: 0 }],
              Object(s.f)("#ShopPageTitle_Emoticons")
            )
          ),
            n(new U("chateffects", [{ cluster: p, type: 0 }], O(12, !0)));
          const B = e(
              Object(s.f)("#RewardCluster_AnimatedProfileBackgrounds_Title"),
              Object(s.f)("#RewardCluster_Backgrounds_Subtitle"),
              { itemclass: [3], queryFilter: [1] }
            ),
            R = e(
              Object(s.f)(
                "#RewardCluster_AnimatedMiniProfileBackgrounds_Title"
              ),
              Object(s.f)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
              { itemclass: [13], queryFilter: [1] }
            ),
            k = e(
              Object(s.f)("#RewardCluster_StillProfileBackgrounds_Title"),
              Object(s.f)("#RewardCluster_Backgrounds_Subtitle"),
              { itemclass: [3], queryFilter: [2] }
            ),
            T = e(
              Object(s.f)("#RewardCluster_StillMiniProfileBackgrounds_Title"),
              Object(s.f)("#RewardCluster_MiniProfileBackgrounds_Subtitle"),
              { itemclass: [13], queryFilter: [2] }
            );
          n(
            new U(
              "backgrounds",
              [
                { cluster: B, type: 1 },
                { cluster: R, type: 1 },
                { cluster: k, type: 1 },
                { cluster: T, type: 1 },
              ],
              Object(s.f)("#ShopPageTitle_Backgrounds")
            )
          ),
            n(
              new U(
                "avatar",
                [
                  { cluster: f, type: 1 },
                  { cluster: g, type: 1 },
                ],
                Object(s.f)("#ShopPageTitle_Avatar")
              )
            ),
            n(
              new U(
                "keyboard",
                [{ cluster: h, type: 0 }],
                Object(s.f)("#ShopPageTitle_SteamDeckKeyboardSkin")
              )
            ),
            n(
              new U(
                "itembundles",
                [{ cluster: b, type: 0 }],
                Object(s.f)("#ShopPageTitle_ItemBundles"),
                Object(s.f)("#ShopPageTitle_ItemBundles_Subtitle")
              )
            );
          const F = [{ cluster: C, type: 0, bHomogeneous: !0 }];
          Date.now() > 16348356e5 && F.unshift({ cluster: y, type: 1 }),
            n(
              new U(
                "profilebundles",
                F,
                Object(s.f)("#ShopPageTitle_ProfileBundles"),
                Object(s.f)("#ShopPageTitle_ProfileBundles_Subtitle")
              )
            );
          n(
            new U(
              "artistprofiles",
              [{ cluster: I, type: 0, bHomogeneous: !0 }],
              Object(s.f)("#ShopPageTitle_ArtistProfiles"),
              Object(s.f)("#ShopPageTitle_ArtistProfiles_Subtitle")
            )
          ),
            this.BIsLoggedIn() &&
              Object(o.M)(
                () => !!P.Get().GetSortedGamesWithRewards().length
              ).then(() => {
                const e = new G(
                  Object(s.f)("#HeroCluster_YourGamesTitle"),
                  void 0,
                  {
                    get appid() {
                      return P.Get().GetSortedGamesWithRewards().slice(0, 10);
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
                A.push({ type: "clusterview", view: t });
                const n = P.Get().GetSortedGamesWithRewards(),
                  r = (e) => {
                    const t = this.m_mapClusters.get(e);
                    return t && t instanceof z ? t.appid : null;
                  };
                let i = 0;
                for (const e of n) {
                  if (
                    -1 !=
                    A.findIndex(
                      (t) => "clusterview" === t.type && r(t.view.cluster) === e
                    )
                  )
                    continue;
                  const t = a(e),
                    n = S.length + 2;
                  if (
                    (A.splice(n + i * n, 0, { type: "clusterview", view: t }),
                    (i += 1),
                    i >= 3)
                  )
                    break;
                }
                this.m_mapPages.set(
                  L({ type: "custom", pageid: D }),
                  new H(D, A)
                );
              });
        }
      }
      function B(e) {
        const t = N.b.LoyaltyStore();
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
      function L(e) {
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
      Object(n.b)([o.C.ref], P.prototype, "m_lPointsAvailable", void 0),
        Object(n.b)([o.C], P.prototype, "m_mapCouponPromos", void 0),
        Object(n.b)([o.C], P.prototype, "m_nAppIDFiltersInUseCount", void 0),
        Object(n.b)([o.C], P.prototype, "m_mapAppIDFilters", void 0),
        Object(n.b)([o.C], P.prototype, "m_strAppFilterText", void 0),
        Object(n.b)([o.C], P.prototype, "m_mapCouponDefinitons", void 0),
        Object(n.b)([o.C], P.prototype, "m_mapLoyaltyRewardDefs", void 0),
        Object(n.b)([o.C], P.prototype, "m_mapOwnedCommunityItems", void 0),
        Object(n.b)([o.C], P.prototype, "m_mapAppRewards", void 0),
        Object(n.b)([o.C], P.prototype, "m_seasonalBadgeDefinition", void 0),
        Object(n.b)([o.C], P.prototype, "m_goldenProfileDefinition", void 0),
        Object(n.b)([o.C], P.prototype, "m_goldenProfileConfigs", void 0),
        Object(n.b)([o.C], P.prototype, "m_rgSortedAppsWithRewards", void 0),
        Object(n.b)([o.C], P.prototype, "m_rgEligibleApps", void 0),
        Object(n.b)([o.C], P.prototype, "m_mapEligibleApps", void 0),
        Object(n.b)(
          [o.C],
          P.prototype,
          "m_rgProfileCustomizationsConfig",
          void 0
        ),
        Object(n.b)([o.C], P.prototype, "m_persona", void 0),
        Object(n.b)([o.C], P.prototype, "m_equippedItems", void 0),
        Object(n.b)([o.C], P.prototype, "m_rgPurchasedCustomizations", void 0),
        Object(n.b)([o.C], P.prototype, "m_rgUpgradedCustomizations", void 0),
        Object(n.b)([o.C], P.prototype, "m_unAwardPointsTransferred", void 0),
        Object(n.b)([u.a], P.prototype, "ShowLoginDialog", null);
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
          return P.Get().QueryRewardDefinitions(n, e, t);
        }
      }
      Object(n.b)([u.a], G.prototype, "GetRewards", null);
      class z {
        constructor(e, t, a) {
          (this.m_appid = e),
            (this.m_strSubtitle = t || ""),
            (this.m_additionalFilter = a || {}),
            S.a.GetAppInfo(this.m_appid),
            (this.m_strId = R([this.m_appid], this.m_additionalFilter));
        }
        get id() {
          return this.m_strId;
        }
        get appid() {
          return this.m_appid;
        }
        get title() {
          return S.a.GetAppInfo(this.m_appid).name;
        }
        get subtitle() {
          return this.m_strSubtitle;
        }
        GetRewards(e, t, a) {
          const n = Z({ appid: [this.m_appid] }, this.m_additionalFilter, a);
          return P.Get().QueryRewardDefinitions(n, e, t);
        }
      }
      Object(n.b)([u.a], z.prototype, "GetRewards", null);
      class F {
        constructor(e, t = "") {
          (this.m_appid = e),
            (this.m_strSubtitle = t),
            S.a.GetAppInfo(this.m_appid);
        }
        get params() {
          return { type: "app", appid: this.m_appid };
        }
        get title() {
          return S.a.GetAppInfo(this.m_appid).name;
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
                  title: Object(s.f)("#RewardItemType_Bundle_plural"),
                  subtitle: "",
                  GetRewards: (e, t, a) =>
                    P.Get().QueryRewardDefinitions(
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
                title: O(e, !0),
                subtitle: "",
                GetRewards: (t, a, n) =>
                  P.Get().QueryRewardDefinitions(
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
                      cluster: P.Get().GetClusterDescriptor(e.view.cluster),
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
      class Q {
        constructor() {
          this.m_bCanClaimFreeItem = !1;
        }
        static Get() {
          return (
            this.s_SaleItemRewardsStore ||
              (this.s_SaleItemRewardsStore = new Q()),
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
          return !P.Get().BIsLoggedIn() || this.m_bCanClaimFreeItem;
        }
        GetCurrentSaleRewardAppID() {
          return 1880140;
        }
        GetClaimedSaleRewardItemDef() {
          return this.m_claimedFreeItemDef;
        }
        LoadCanClaimFreeSticker() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (!P.Get().BIsLoggedIn()) return;
            const e = _.b.Init(f.m);
            let t = yield f.p.CanClaimItem(P.Get().GetServiceTransport(), e);
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
            if (!P.Get().BIsLoggedIn())
              return (
                (e = {
                  eResult: 21,
                  strMessage: Object(s.f)("#Redeem_SignIn"),
                }),
                e
              );
            const t = _.b.Init(f.n),
              a = yield f.p.ClaimItem(P.Get().GetServiceTransport(), t);
            return (
              (e.eResult = a.GetEResult()),
              1 == a.GetEResult()
                ? ((this.m_claimedFreeItemDef = a
                    .Body()
                    .reward_item()
                    .toObject()),
                  P.Get().GetCommunityItemInventory(
                    this.m_claimedFreeItemDef.appid
                  ),
                  (this.m_bCanClaimFreeItem = !1),
                  (this.m_rtNextClaimTime = a.Body().next_claim_time()),
                  this.SetClaimTimer())
                : (10 == a.GetEResult() &&
                    (e.strMessage = Object(s.f)("#SummerSale_Redeem_Busy")),
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
      Object(n.b)([o.C], Q.prototype, "m_bCanClaimFreeItem", void 0),
        Object(n.b)([o.C], Q.prototype, "m_claimedFreeItemDef", void 0),
        Object(n.b)([o.C], Q.prototype, "m_rtNextClaimTime", void 0);
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
        i = a("exH9"),
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
        l = (a("OU48"), a("lypr"));
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
          [_, f] = Object(r.useState)(u),
          { rewards: g, bLoadingMore: h } = t(0, _),
          b = g.map(a);
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
              onVisibilityChange: (e) => e && f(_ + u),
            })
          )
        );
      });
    },
    t3iX: function (e, t, a) {
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
    tHRV: function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/friends_list_golden.png?v=valveisgoodatcaching";
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
        s = a("qD+2"),
        l = a("prdU"),
        c = a("lkRc"),
        m = a("TLQK"),
        d = a("ehaW"),
        p = a("RV7a"),
        u = (a("li7h"), a("OU48"), a("mw7S")),
        _ = a("qf3a"),
        f = a("StxQ"),
        g = a("exH9"),
        h = a("cOvF"),
        b = a("reUc"),
        C = a("8Uds");
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
                  desc: Object(m.f)("#RewardItemType_ProfileBundle"),
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
              style: f,
            } = e,
            g = Object(n.c)(e, [
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
              g
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
              style: f,
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
                className: Object(g.a)(_.ProfileBundleContainer, u),
                style: Object.assign(Object.assign({}, f), { width: "524px" }),
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
              i.a.createElement(S, { items: r.items, offer: r })
            ),
            i.a.createElement(N, { label: y, cost: s, bOwned: l })
          );
        }),
        N = ({ cost: e, label: t, bOwned: a }) =>
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
                    Object(m.f)("#Redeem_BundleItemOwned")
                  ),
                  i.a.createElement(h.j, { className: _.CheckmarkCircle })
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(f.a, { amount: e })
                )
          );
      function v(e, t) {
        const a = e.filter((e) => e.community_item_class == t).slice(0, 1);
        return 1 == a.length ? a[0] : null;
      }
      const S = Object(o.a)((e) => {
          const { offer: t, items: a } = e,
            n = v(a, 15),
            r = v(a, 14),
            o = v(a, 13),
            s = v(a, 3);
          return i.a.createElement(
            "div",
            { style: { position: "relative" }, className: _.ItemHand },
            n &&
              i.a.createElement(j, { item: n, offer: t, className: _.Avatar }),
            r &&
              i.a.createElement(j, {
                item: r,
                offer: t,
                className: _.AvatarFrame,
              }),
            o &&
              i.a.createElement(j, {
                item: o,
                offer: t,
                className: _.MiniProfileBackground,
              }),
            s &&
              i.a.createElement(j, {
                item: s,
                offer: t,
                className: _.ProfileBackground,
              })
          );
        }),
        j = Object(o.a)((e) => {
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
              { className: Object(g.a)(r, _.ItemCard), key: a.defid }
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
    "y8q+": function (e, t, a) {
      e.exports =
        a.p +
        "images/applications/store/collection_icon_64x64.png?v=valveisgoodatcaching";
    },
    "ykc/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return m;
      });
      var n = a("mrSG"),
        r = a("q1tI"),
        i = a.n(r),
        o = a("av+R"),
        s = a("yLGM"),
        l = a("opsS"),
        c = a("lkRc");
      function m(e) {
        const { children: t, navTreeRef: a } = e,
          r = Object(n.c)(e, ["children", "navTreeRef"]),
          m = i.a.useRef(),
          d = Object(l.f)(m, a);
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

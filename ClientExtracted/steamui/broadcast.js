/* Third-party software licenses can be found at licenses.txt */
"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [4601],
  {
    88273: (t, e, a) => {
      a.r(e), a.d(e, { default: () => y });
      var s = a(70655),
        r = a(67294),
        i = a(7952),
        o = (a(21645), a(29323)),
        n = a(22188),
        l = a(41554),
        c = a(27194),
        m = a(79571),
        p = a(82155),
        d = (a(33384), a(69144)),
        h = a(89866),
        u = a.n(h),
        A = (a(28912), a(62170)),
        S = a(45520);
      let b = class extends r.Component {
        constructor(t) {
          super(t),
            (this.m_playerRef = r.createRef()),
            (this.m_hRegisterForGameActionStart = null),
            (this.m_hRegisterForGameActionStart =
              SteamClient.Apps.RegisterForGameActionStart(
                this.onGameActionStart
              )),
            SteamClient.Apps.GetGameActionForApp(
              this.props.overview.GetGameID(),
              this.onGameActionStart
            ),
            (this.state = { broadcast: null, bPlaying: !1 });
        }
        componentDidMount() {
          this.RefreshAndSelectBroadcast();
        }
        RefreshAndSelectBroadcast() {
          this.m_dispose ||
            (this.m_dispose = (0, n.EH)(() => {
              let t =
                  l.m.GetBroadcastList(this.props.overview.appid).broadcasts ||
                  [],
                e = this.state.broadcast;
              e && (e = t.find((t) => t.unAccountId == e.unAccountId)),
                !e && t.length > 0 && (e = t[0]),
                this.state.broadcast != e && this.setState({ broadcast: e });
            }));
        }
        componentDidUpdate(t) {
          t.overview.appid != this.props.overview.appid &&
            (this.setState({ broadcast: null, bPlaying: !1 }),
            this.m_dispose && (this.m_dispose(), (this.m_dispose = null)),
            this.RefreshAndSelectBroadcast());
        }
        componentWillUnmount() {
          this.m_hRegisterForGameActionStart &&
            this.m_hRegisterForGameActionStart.unregister(),
            this.m_dispose && (this.m_dispose(), (this.m_dispose = null));
        }
        onGameActionStart(t, e, a) {
          e == this.props.overview.GetGameID() &&
            0 != t &&
            "LaunchApp" == a &&
            this.m_playerRef.current &&
            this.m_playerRef.current.StopPlaybackTillUserInput();
        }
        GetBroadcastURL(t) {
          return (
            `steam://openurl_external/${d.de.GetCommunityURL()}broadcast/watch/` +
            t
          );
        }
        OnClickPlay() {
          this.setState({ bPlaying: !0 });
        }
        render() {
          let t = this.state.broadcast;
          if (!t) return null;
          let e = m.K.InitFromAccountID(t.unAccountId),
            a = this.state.bPlaying,
            s = "GameDetailsPlayer";
          return (
            this.props.isTheaterMode && (s += " TheaterMode"),
            r.createElement(
              "div",
              { className: u().BroadcastBox },
              !a &&
                r.createElement(G, {
                  img: t.strThumbnailURL,
                  onClick: this.OnClickPlay,
                }),
              a &&
                r.createElement(
                  "div",
                  { className: u().BroadcastPlayer },
                  r.createElement(A.default, {
                    ref: this.m_playerRef,
                    steamIDBroadcast: e.ConvertTo64BitString(),
                    watchLocation: 6,
                    onTheaterMode: this.props.onTheaterMode,
                    bStartMuted: !1,
                    bStartPaused: !1,
                    classes: s,
                  })
                ),
              !this.props.isTheaterMode &&
                r.createElement(
                  "a",
                  {
                    href: this.GetBroadcastURL(e.ConvertTo64BitString()),
                    className: u().ViewBroadcastOnWeb,
                  },
                  (0, c.Xx)("#AppDetails_Broadcast_ViewOnWeb")
                )
            )
          );
        }
      };
      (0, s.gn)([p.ak], b.prototype, "onGameActionStart", null),
        (0, s.gn)([p.ak], b.prototype, "GetBroadcastURL", null),
        (0, s.gn)([p.ak], b.prototype, "OnClickPlay", null),
        (b = (0, s.gn)([o.Pi], b));
      const y = b;
      function G(t) {
        let e = (0, S.Z)(
          "BroadcastVideoUserInputNeeded",
          u().PlayButtonWrapper
        );
        return r.createElement(
          "div",
          { className: u().BroadcastThumbnail, onClick: t.onClick },
          r.createElement("img", { src: t.img }),
          r.createElement(
            "div",
            { className: e },
            r.createElement(i.shV, null),
            r.createElement(
              "span",
              null,
              (0, c.Xx)("#DASHPlayerControls_ClickToPlay")
            )
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=broadcast.js.map

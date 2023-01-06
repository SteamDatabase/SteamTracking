/* Third-party software licenses can be found at licenses.txt */
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [4535],
  {
    8199: (e) => {
      e.exports = {
        Login: "login_Login_VZ6x_",
        WithTitle: "login_WithTitle_2WCTN",
        TitleBar: "login_TitleBar_1C4of",
        CloseButton: "login_CloseButton_1mcCj",
      };
    },
    87964: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { FullLogin: () => E, default: () => p });
      var l = n(67294),
        o = n(8199),
        i = n.n(o),
        u = (n(7952), n(78869)),
        a = n(15641),
        r = (n(36378), n(67862)),
        s = (n(38440), n(70655)),
        c = n(27194),
        d = n(86487);
      n(29669);
      let m = !1;
      function f() {
        return (0, s.mG)(this, void 0, void 0, function* () {
          if (m) return;
          m = !0;
          const e = u.De.LANGUAGE,
            t = c.LJ.GetLanguageFallback(e),
            n = e === t,
            [l, o] = yield Promise.all([(0, d.I2)(e), n ? null : (0, d.I2)(t)]);
          c.Yt.InitFromObjects(l, o, null, null);
        });
      }
      var h = n(96794),
        S = (n(10708), n(63709)),
        g = n(30946),
        v = n(45520),
        C = n(83893);
      function p(e) {
        return E(e);
      }
      function E(e) {
        const [t, n] = (0, l.useState)(!0),
          o = (function () {
            const [e, t] = l.useState(!1);
            return (
              l.useEffect(() => {
                Promise.all([f()]).then(() => {
                  t(!0);
                });
              }, []),
              e
            );
          })();
        return t
          ? o
            ? l.createElement(L, Object.assign({}, e))
            : null
          : l.createElement(
              "div",
              {
                style: { color: "white" },
                onClick: () => {
                  n(!0);
                },
              },
              "Initiate"
            );
      }
      function L(e) {
        let [t, n] = (0, l.useState)(null);
        const [o, s] = (0, l.useState)(!1),
          c = (0, C.Wy)();
        let d = new r.zn(),
          m = d.GetServiceTransport();
        !(function (e) {
          (0, l.useEffect)(() => {
            (0, S.Uh)().Init("Client Login", CLSTAMP, e);
          }, [e]);
        })(m);
        const f = !!e.refreshLogin;
        (0, l.useEffect)(() => {
          (f || u.De.IN_LOGIN_REFRESH) &&
            SteamClient.Auth.GetRefreshInfo().then((e) => {
              1 !== e.reason ? n(e) : n(null);
            });
        }, [f]);
        const [p, E] = (0, l.useState)(void 0),
          [L, T] = (0, l.useState)(0);
        if (
          (d.Connect().then(() => {
            s(!0);
          }),
          !o)
        )
          return null;
        const _ = `${null == t ? void 0 : t.account_name}${
          null == t ? void 0 : t.reason
        }${L.toString()}`;
        return l.createElement(
          "div",
          {
            className: (0, v.Z)(i().Login, e.includeTitleBar && i().WithTitle),
          },
          l.createElement(
            "div",
            null,
            e.includeTitleBar &&
              e.popup &&
              l.createElement(g.T, { popup: e.popup, hideMinMax: !0 })
          ),
          l.createElement(a.i9, {
            key: _,
            autoFocus: !0,
            transport: m,
            onSuccess: (t) => {
              var n, l, o, i;
              console.log(
                "received authentication token, using it to sign in to Steam"
              ),
                E(null),
                SteamClient.Auth.SetLoginToken(
                  t.strRefreshToken,
                  t.strAccountName
                ).then((t) => {
                  var n;
                  const l = t.result,
                    o = t.message;
                  console.log(`client login returned ${l} (${o})`),
                    E(l),
                    1 != l
                      ? T(L + 1)
                      : null === (n = e.onLoginComplete) ||
                        void 0 === n ||
                        n.call(e);
                });
              const u =
                null !== (n = t.strNewGuardData) && void 0 !== n ? n : "";
              u && SteamClient.Auth.SetSteamGuardData(t.strAccountName, u),
                null ===
                  (i =
                    null === (l = null == c ? void 0 : c.ownerWindow) ||
                    void 0 === l
                      ? void 0
                      : (o = l.SteamClient.Browser)
                          .SetShouldExitSteamOnBrowserClosed) ||
                  void 0 === i ||
                  i.call(o, !1);
            },
            platform: 1,
            embedded: !0,
            refreshInfo: t,
            disableQR: u.De.EREALM == h.IN.k_ESteamRealmChina,
            lastResult: p,
          })
        );
      }
    },
  },
]);

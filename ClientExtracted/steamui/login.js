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
      n.r(t), n.d(t, { FullLogin: () => p, default: () => E });
      var l = n(67294),
        o = n(8199),
        i = n.n(o),
        u = (n(7952), n(78869)),
        a = n(15641),
        s = (n(36378), n(67862)),
        r = (n(38440), n(70655)),
        c = n(27194),
        d = n(86487);
      n(29669);
      let m = !1;
      function f() {
        return (0, r.mG)(this, void 0, void 0, function* () {
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
      function E(e) {
        return p(e);
      }
      function p(e) {
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
            ? l.createElement(T, Object.assign({}, e))
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
      function T(e) {
        let [t, n] = (0, l.useState)(null);
        const [o, r] = (0, l.useState)(!1),
          c = (0, C.Wy)();
        let d = new s.zn(),
          m = d.GetServiceTransport();
        !(function (e) {
          (0, l.useEffect)(() => {
            (0, S.Uh)().Init("Client Login", CLSTAMP, e);
          }, [e]);
        })(m),
          (0, l.useEffect)(() => {
            u.De.IN_LOGIN_REFRESH &&
              SteamClient.Auth.GetRefreshInfo().then((e) => {
                1 != e.reason ? n(e) : n(null);
              });
          }, []);
        const [f, E] = (0, l.useState)(void 0),
          [p, T] = (0, l.useState)(0);
        if (
          (d.Connect().then(() => {
            r(!0);
          }),
          !o)
        )
          return null;
        const _ = `${null == t ? void 0 : t.account_name}${
          null == t ? void 0 : t.reason
        }${p.toString()}`;
        return l.createElement(
          "div",
          {
            className: (0, v.Z)(i().Login, e.includeTitleBar && i().WithTitle),
          },
          e.includeTitleBar &&
            l.createElement(g.T, { popup: e.popup, hideMinMax: !0 }),
          l.createElement(a.i9, {
            key: _,
            autoFocus: !0,
            transport: m,
            onSuccess: (e) => {
              var t, n, l, o;
              console.log(
                "received authentication token, using it to sign in to Steam"
              ),
                E(null),
                SteamClient.Auth.SetLoginToken(
                  e.strRefreshToken,
                  e.strAccountName
                ).then((e) => {
                  const t = e.result,
                    n = e.message;
                  console.log(`client login returned ${t} (${n})`),
                    E(t),
                    1 != t && T(p + 1);
                });
              const i =
                null !== (t = e.strNewGuardData) && void 0 !== t ? t : "";
              i && SteamClient.Auth.SetSteamGuardData(e.strAccountName, i),
                null ===
                  (o =
                    null === (n = null == c ? void 0 : c.ownerWindow) ||
                    void 0 === n
                      ? void 0
                      : (l = n.SteamClient.Browser)
                          .SetShouldExitSteamOnBrowserClosed) ||
                  void 0 === o ||
                  o.call(l, !1);
            },
            platform: 1,
            embedded: !0,
            refreshInfo: t,
            disableQR: u.De.EREALM == h.IN.k_ESteamRealmChina,
            lastResult: f,
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=login.js.map

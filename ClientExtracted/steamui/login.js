/* Third-party software licenses can be found at licenses.txt */
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [4535],
  {
    8199: (e) => {
      e.exports = {
        Login: "login_Login_VZ6x_",
        TitleBar: "login_TitleBar_1C4of",
        CloseButton: "login_CloseButton_1mcCj",
      };
    },
    87964: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => g });
      var l = n(67294),
        o = n(8199),
        a = n.n(o),
        s = n(7952),
        u = n(78869),
        i = n(15641),
        r = (n(36378), n(40792)),
        c = (n(38440), n(70655)),
        m = n(27194),
        f = n(86487);
      n(29669);
      let E = !1;
      function S() {
        return (0, c.mG)(this, void 0, void 0, function* () {
          if (E) return;
          E = !0;
          const e = u.De.LANGUAGE,
            t = m.LJ.GetLanguageFallback(e),
            n = e === t,
            [l, o] = yield Promise.all([(0, f.I2)(e), n ? null : (0, f.I2)(t)]);
          m.Yt.InitFromObjects(l, o, null, null);
        });
      }
      var h = n(96794),
        d = (n(10708), n(63709));
      function g(e) {
        const [t, n] = (0, l.useState)(!0),
          o = (function () {
            const [e, t] = l.useState(!1);
            return (
              l.useEffect(() => {
                Promise.all([S()]).then(() => {
                  t(!0);
                });
              }, []),
              e
            );
          })();
        return (
          console.log("Realm is", u.De.EREALM),
          console.log("Launcher is", u.De.LAUNCHER_TYPE),
          t
            ? o
              ? l.createElement(L, null)
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
              )
        );
      }
      function L(e) {
        let [t, n] = (0, l.useState)(null);
        const [o, s] = (0, l.useState)(!1),
          [c, m] = (0, l.useState)(!1);
        let f = new r.zn(),
          E = f.GetServiceTransport();
        !(function (e) {
          (0, l.useEffect)(() => {
            (0, d.Uh)().Init("Client Login", CLSTAMP, e);
          }, [e]);
        })(E),
          (0, l.useEffect)(() => {
            u.De.IN_LOGIN_REFRESH &&
              SteamClient.Auth.GetRefreshInfo().then((e) => {
                1 != e.reason ? n(e) : n(null);
              }),
              SteamClient.Auth.GetLoginUIStyle().then((e) => {
                s(
                  e == h.cL.k_ELoginUIStyleNew &&
                    u.De.EREALM != h.IN.k_ESteamRealmChina
                );
              });
          }, []);
        const [S, g] = (0, l.useState)(void 0),
          [L, v] = (0, l.useState)(0);
        if (
          (f.Connect().then(() => {
            m(!0);
          }),
          !c)
        )
          return null;
        const I = `${null == t ? void 0 : t.account_name}${
          null == t ? void 0 : t.reason
        }${L.toString()}`;
        return l.createElement(
          "div",
          { className: a().Login },
          l.createElement(C, null),
          l.createElement(i.i9, {
            key: I,
            autoFocus: !0,
            transport: E,
            onSuccess: (e) => {
              var t;
              console.log(
                "received authentication token, using it to sign in to Steam"
              ),
                g(null),
                SteamClient.Auth.SetLoginToken(
                  e.strRefreshToken,
                  e.strAccountName
                ).then((e) => {
                  const t = e.result,
                    n = e.message;
                  console.log(`client login returned ${t} (${n})`),
                    g(t),
                    1 != t && v(L + 1);
                });
              const n =
                null !== (t = e.strNewGuardData) && void 0 !== t ? t : "";
              n && SteamClient.Auth.SetSteamGuardData(e.strAccountName, n);
            },
            platform: 1,
            embedded: !0,
            refreshInfo: t,
            disableQR: !o,
            lastResult: S,
          })
        );
      }
      function C(e) {
        return l.createElement(
          "div",
          { className: a().TitleBar },
          u.De.IN_LOGIN &&
            l.createElement(
              "a",
              { href: "steam://close" },
              l.createElement(
                "div",
                { className: a().CloseButton },
                l.createElement(s.X, null)
              )
            )
        );
      }
    },
  },
]);
//# sourceMappingURL=login.js.map

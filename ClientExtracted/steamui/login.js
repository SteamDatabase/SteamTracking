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
        u = n.n(o),
        a = (n(7952), n(78869)),
        i = n(15641),
        s = (n(36378), n(40792)),
        r = (n(38440), n(70655)),
        c = n(27194),
        m = n(86487);
      n(29669);
      let f = !1;
      function S() {
        return (0, r.mG)(this, void 0, void 0, function* () {
          if (f) return;
          f = !0;
          const e = a.De.LANGUAGE,
            t = c.LJ.GetLanguageFallback(e),
            n = e === t,
            [l, o] = yield Promise.all([(0, m.I2)(e), n ? null : (0, m.I2)(t)]);
          c.Yt.InitFromObjects(l, o, null, null);
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
        return t
          ? o
            ? l.createElement(C, null)
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
      function C(e) {
        let [t, n] = (0, l.useState)(null);
        const [o, r] = (0, l.useState)(!1),
          [c, m] = (0, l.useState)(!1);
        let f = new s.zn(),
          S = f.GetServiceTransport();
        !(function (e) {
          (0, l.useEffect)(() => {
            (0, d.Uh)().Init("Client Login", CLSTAMP, e);
          }, [e]);
        })(S),
          (0, l.useEffect)(() => {
            a.De.IN_LOGIN_REFRESH &&
              SteamClient.Auth.GetRefreshInfo().then((e) => {
                1 != e.reason ? n(e) : n(null);
              }),
              SteamClient.Auth.GetLoginUIStyle().then((e) => {
                r(
                  e == h.cL.k_ELoginUIStyleNew &&
                    a.De.EREALM != h.IN.k_ESteamRealmChina
                );
              });
          }, []);
        const [g, C] = (0, l.useState)(void 0),
          [E, L] = (0, l.useState)(0);
        if (
          (f.Connect().then(() => {
            m(!0);
          }),
          !c)
        )
          return null;
        const v = `${null == t ? void 0 : t.account_name}${
          null == t ? void 0 : t.reason
        }${E.toString()}`;
        return l.createElement(
          "div",
          { className: u().Login },
          l.createElement(i.i9, {
            key: v,
            autoFocus: !0,
            transport: S,
            onSuccess: (e) => {
              var t;
              console.log(
                "received authentication token, using it to sign in to Steam"
              ),
                C(null),
                SteamClient.Auth.SetLoginToken(
                  e.strRefreshToken,
                  e.strAccountName
                ).then((e) => {
                  const t = e.result,
                    n = e.message;
                  console.log(`client login returned ${t} (${n})`),
                    C(t),
                    1 != t && L(E + 1);
                });
              const n =
                null !== (t = e.strNewGuardData) && void 0 !== t ? t : "";
              n && SteamClient.Auth.SetSteamGuardData(e.strAccountName, n);
            },
            platform: 1,
            embedded: !0,
            refreshInfo: t,
            disableQR: !o,
            lastResult: g,
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=login.js.map

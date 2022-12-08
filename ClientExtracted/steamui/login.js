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
      n.r(t), n.d(t, { default: () => E });
      var l = n(67294),
        o = n(8199),
        i = n.n(o),
        a = (n(7952), n(78869)),
        u = n(15641),
        s = (n(36378), n(40792)),
        r = (n(38440), n(70655)),
        c = n(27194),
        m = n(86487);
      n(29669);
      let f = !1;
      function d() {
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
        S = (n(10708), n(63709)),
        g = n(45520),
        C = n(30946);
      function E(e) {
        const [t, n] = (0, l.useState)(!0),
          o = (function () {
            const [e, t] = l.useState(!1);
            return (
              l.useEffect(() => {
                Promise.all([d()]).then(() => {
                  t(!0);
                });
              }, []),
              e
            );
          })();
        return t
          ? o
            ? l.createElement(p, Object.assign({}, e))
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
      function p(e) {
        let [t, n] = (0, l.useState)(null);
        const [o, r] = (0, l.useState)(!1);
        let c = new s.zn(),
          m = c.GetServiceTransport();
        !(function (e) {
          (0, l.useEffect)(() => {
            (0, S.Uh)().Init("Client Login", CLSTAMP, e);
          }, [e]);
        })(m),
          (0, l.useEffect)(() => {
            a.De.IN_LOGIN_REFRESH &&
              SteamClient.Auth.GetRefreshInfo().then((e) => {
                1 != e.reason ? n(e) : n(null);
              });
          }, []);
        const [f, d] = (0, l.useState)(void 0),
          [E, p] = (0, l.useState)(0);
        if (
          (c.Connect().then(() => {
            r(!0);
          }),
          !o)
        )
          return null;
        const v = `${null == t ? void 0 : t.account_name}${
          null == t ? void 0 : t.reason
        }${E.toString()}`;
        return l.createElement(
          "div",
          {
            className: (0, g.Z)(i().Login, e.includeTitleBar && i().WithTitle),
          },
          e.includeTitleBar &&
            l.createElement(C.T, { popup: e.popup, hideMinMax: !0 }),
          l.createElement(u.i9, {
            key: v,
            autoFocus: !0,
            transport: m,
            onSuccess: (e) => {
              var t;
              console.log(
                "received authentication token, using it to sign in to Steam"
              ),
                d(null),
                SteamClient.Auth.SetLoginToken(
                  e.strRefreshToken,
                  e.strAccountName
                ).then((e) => {
                  const t = e.result,
                    n = e.message;
                  console.log(`client login returned ${t} (${n})`),
                    d(t),
                    1 != t && p(E + 1);
                });
              const n =
                null !== (t = e.strNewGuardData) && void 0 !== t ? t : "";
              n && SteamClient.Auth.SetSteamGuardData(e.strAccountName, n);
            },
            platform: 1,
            embedded: !0,
            refreshInfo: t,
            disableQR: a.De.EREALM == h.IN.k_ESteamRealmChina,
            lastResult: f,
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=login.js.map

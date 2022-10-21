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
        a = n.n(o),
        s = n(7952),
        u = n(78869),
        i = n(15641),
        r = (n(74963), n(40792)),
        c = (n(38440), n(70655)),
        m = n(27194),
        f = n(86487);
      n(29669);
      let S = !1;
      function d() {
        return (0, c.mG)(this, void 0, void 0, function* () {
          if (S) return;
          S = !0;
          const e = u.De.LANGUAGE,
            t = m.LJ.GetLanguageFallback(e),
            n = e === t,
            [l, o] = yield Promise.all([(0, f.I2)(e), n ? null : (0, f.I2)(t)]);
          m.Yt.InitFromObjects(l, o, null, null);
        });
      }
      var h = n(96794),
        g = (n(10708), n(63709));
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
            ? l.createElement(v, null)
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
      function v(e) {
        let [t, n] = (0, l.useState)(null);
        const [o, s] = (0, l.useState)(!1),
          [c, m] = (0, l.useState)(!1);
        let f = new r.zn(),
          S = f.GetServiceTransport();
        !(function (e) {
          (0, l.useEffect)(() => {
            (0, g.Uh)().Init("Client Login", CLSTAMP, e);
          }, [e]);
        })(S),
          (0, l.useEffect)(() => {
            u.De.IN_LOGIN_REFRESH &&
              SteamClient.Auth.GetRefreshInfo().then((e) => {
                1 != e.reason ? n(e) : n(null);
              }),
              SteamClient.Auth.GetLoginUIStyle().then((e) => {
                s(e == h.cL.k_ELoginUIStyleNew);
              });
          }, []);
        const [d, E] = (0, l.useState)(void 0),
          [v, L] = (0, l.useState)(0);
        if (
          (f.Connect().then(() => {
            m(!0);
          }),
          !c)
        )
          return null;
        const I = `${null == t ? void 0 : t.account_name}${
          null == t ? void 0 : t.reason
        }${v.toString()}`;
        return l.createElement(
          "div",
          { className: a().Login },
          l.createElement(C, null),
          l.createElement(i.i9, {
            key: I,
            autoFocus: !0,
            transport: S,
            onSuccess: (e) => {
              var t;
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
                    1 != t && L(v + 1);
                });
              const n =
                null !== (t = e.strNewGuardData) && void 0 !== t ? t : "";
              n && SteamClient.Auth.SetSteamGuardData(e.strAccountName, n);
            },
            platform: 1,
            embedded: !0,
            refreshInfo: t,
            disableQR: !o,
            lastResult: d,
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

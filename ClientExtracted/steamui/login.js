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
        i = n(37764),
        r = (n(74963), n(40792), n(38440)),
        c = n(70655),
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
      var g = n(21645),
        h = (n(10708), n(63709));
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
        let t = new r.J(u.De.WEBAPI_BASE_URL).GetServiceTransport(),
          [n, o] = (0, l.useState)(null);
        const [s, c] = (0, l.useState)(!1);
        !(function (e) {
          (0, l.useEffect)(() => {
            (0, h.Uh)().Init("Client Login", CLSTAMP, e);
          }, [e]);
        })(t),
          (0, l.useEffect)(() => {
            u.De.IN_LOGIN_REFRESH &&
              SteamClient.Auth.GetRefreshInfo().then((e) => {
                1 != e.reason ? o(e) : o(null);
              }),
              SteamClient.Auth.GetLoginUIStyle().then((e) => {
                c(e == g.cL.k_ELoginUIStyleNew);
              });
          }, []);
        const [m, f] = (0, l.useState)(void 0),
          [S, d] = (0, l.useState)(0),
          E = `${null == n ? void 0 : n.account_name}${
            null == n ? void 0 : n.reason
          }${S.toString()}`;
        return l.createElement(
          "div",
          { className: a().Login },
          l.createElement(L, null),
          l.createElement(i.i9, {
            key: E,
            autoFocus: !0,
            transport: t,
            onSuccess: (e) => {
              var t;
              console.log(
                "received authentication token, using it to sign in to Steam"
              ),
                f(null),
                SteamClient.Auth.SetLoginToken(
                  e.strRefreshToken,
                  e.strAccountName
                ).then((e) => {
                  const t = e.result,
                    n = e.message;
                  console.log(`client login returned ${t} (${n})`),
                    f(t),
                    1 != t && d(S + 1);
                });
              const n =
                null !== (t = e.strNewGuardData) && void 0 !== t ? t : "";
              n && SteamClient.Auth.SetSteamGuardData(e.strAccountName, n);
            },
            platform: 1,
            embedded: !0,
            refreshInfo: n,
            disableQR: !s,
            lastResult: m,
          })
        );
      }
      function L(e) {
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

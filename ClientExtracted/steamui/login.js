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
        r = n(37764),
        c = (n(74963), n(40792), n(38440)),
        i = n(70655),
        m = n(27194),
        f = n(86487);
      n(29669);
      let d = !1;
      function E() {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (d) return;
          d = !0;
          const e = u.De.LANGUAGE,
            t = m.LJ.GetLanguageFallback(e),
            n = e === t,
            [l, o] = yield Promise.all([(0, f.I2)(e), n ? null : (0, f.I2)(t)]);
          m.Yt.InitFromObjects(l, o, null, null);
        });
      }
      var S = n(21645),
        h = (n(10708), n(63709));
      const L = (e) => {
        var t;
        console.log("Login success"),
          SteamClient.Auth.SetLoginToken(e.strRefreshToken, e.strAccountName);
        const n = null !== (t = e.strNewGuardData) && void 0 !== t ? t : "";
        n && SteamClient.Auth.SetSteamGuardData(e.strAccountName, n);
      };
      function g(e) {
        const [t, n] = (0, l.useState)(!0),
          o = (function () {
            const [e, t] = l.useState(!1);
            return (
              l.useEffect(() => {
                Promise.all([E()]).then(() => {
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
        let t = new c.J(u.De.WEBAPI_BASE_URL).GetServiceTransport(),
          [n, o] = (0, l.useState)(null);
        const [s, i] = (0, l.useState)(!1);
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
                i(e == S.cL.k_ELoginUIStyleNew);
              });
          }, []);
        const m = `${null == n ? void 0 : n.account_name}${
          null == n ? void 0 : n.reason
        }`;
        return l.createElement(
          "div",
          { className: a().Login },
          l.createElement(I, null),
          l.createElement(r.i9, {
            key: m,
            autoFocus: !0,
            transport: t,
            onSuccess: L,
            platform: 1,
            embedded: !0,
            refreshInfo: n,
            disableQR: !s,
          })
        );
      }
      function I(e) {
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

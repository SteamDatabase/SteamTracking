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
      n.r(t), n.d(t, { default: () => _ });
      var l = n(67294),
        o = n(8199),
        s = n.n(o),
        a = n(7952),
        r = n(78869),
        u = n(18609),
        c = (n(36378), n(40792), n(38440)),
        i = n(70655),
        m = n(27194),
        f = n(86487);
      n(29669);
      let E = !1;
      function d() {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (E) return;
          E = !0;
          const e = r.De.LANGUAGE,
            t = m.LJ.GetLanguageFallback(e),
            n = e === t,
            [l, o] = yield Promise.all([(0, f.I2)(e), n ? null : (0, f.I2)(t)]);
          m.Yt.InitFromObjects(l, o, null, null);
        });
      }
      n(21645);
      const h = (e) => {
        console.log("Login success"),
          SteamClient.Auth.SetLoginToken(e.strRefreshToken, e.strAccountName);
      };
      function _(e) {
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
            ? l.createElement(g, null)
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
      function g(e) {
        let t = new c.J(r.De.WEBAPI_BASE_URL).GetServiceTransport(),
          [n, o] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          r.De.IN_LOGIN_REFRESH &&
            SteamClient.Auth.GetRefreshInfo().then((e) => {
              1 != e.reason ? o(e) : o(null);
            });
        }, []);
        const a = `${null == n ? void 0 : n.account_name}${
          null == n ? void 0 : n.reason
        }`;
        return l.createElement(
          "div",
          { className: s().Login },
          l.createElement(I, null),
          l.createElement(u.i9, {
            key: a,
            autoFocus: !0,
            transport: t,
            onSuccess: h,
            platform: 1,
            embedded: !0,
            refreshInfo: n,
          })
        );
      }
      function I(e) {
        return l.createElement(
          "div",
          { className: s().TitleBar },
          r.De.IN_LOGIN &&
            l.createElement(
              "a",
              { href: "steam://close" },
              l.createElement(
                "div",
                { className: s().CloseButton },
                l.createElement(a.X, null)
              )
            )
        );
      }
    },
  },
]);
//# sourceMappingURL=login.js.map

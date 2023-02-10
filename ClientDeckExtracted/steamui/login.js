(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [4535],
  {
    69836: (e) => {
      e.exports = {
        HTMLPopupDialog: "htmlpopupdialog_HTMLPopupDialog_oHNgI",
        DialogHeader: "htmlpopupdialog_DialogHeader_2Da2G",
        DialogBodyText: "htmlpopupdialog_DialogBodyText_2gL3o",
        BrowserViewHost: "htmlpopupdialog_BrowserViewHost_Hfu72",
      };
    },
    8199: (e) => {
      e.exports = {
        Login: "login_Login_VZ6x_",
        TitleContainer: "login_TitleContainer_37ANM",
        TitleBar: "login_TitleBar_1C4of",
        CloseButton: "login_CloseButton_1mcCj",
      };
    },
    34180: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => l });
      var o = n(67294);
      n(82132);
      function l(e, t, n) {
        const [l, i] = o.useState(),
          [r, s] = o.useState(!1);
        return (
          o.useEffect(() => {
            if (!e) return;
            const n = SteamClient.BrowserView.Create({
              parentPopupBrowserID: e.SteamClient.Browser.GetBrowserID(),
            });
            return (
              n.SetName(t),
              n.on("finished-request", () => {
                s(!0);
              }),
              i(n),
              () => {
                n.SetVisible(!1), i(void 0), SteamClient.BrowserView.Destroy(n);
              }
            );
          }, [t, e]),
          o.useEffect(() => {
            l && l.LoadURL(n);
          }, [l, n]),
          [l, r]
        );
      }
    },
    42608: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => p });
      var o = n(67294),
        l = n(94115),
        i = n(7874),
        r = n(69836),
        s = n.n(r),
        a = n(34180),
        u = n(28208),
        c = n(45520),
        d = n(27194);
      const p = (e) => {
          let {
            strName: t,
            strURL: n,
            onClose: l,
            classname: r,
            popupWidth: a,
            popupHeight: u,
            showFooter: d = !0,
          } = e;
          const [p, S] = o.useState();
          return o.createElement(
            i.tb,
            {
              strName: t,
              onDismiss: l,
              popupWidth: null != a ? a : 824,
              popupHeight: null != u ? u : 620,
              refPopup: S,
              className: (0, c.Z)(r, s().HTMLPopupDialog),
            },
            o.createElement(m, {
              popup: p,
              classname: s().BrowserViewHost,
              strTitle: t,
              strURL: n,
              onClose: l,
            }),
            d && o.createElement(w, { onClose: l })
          );
        },
        m = (e) => {
          let { onClose: t } = e;
          const [n, l] = (0, a.f)(e.popup, e.strTitle, e.strURL),
            i = o.useCallback(
              (e, n, o) => {
                "CloseBrowser" == n && t && t();
              },
              [t]
            );
          return (
            o.useEffect(() => {
              n && n.on("message", i);
            }, [n, i]),
            n
              ? o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(u.z4, {
                    browser: n,
                    visible: l,
                    style: { display: "block" },
                    className: e.classname,
                  })
                )
              : null
          );
        };
      function w(e) {
        const { onClose: t } = e;
        return o.createElement(
          l.$_,
          null,
          o.createElement(l.KM, { onClick: t }, (0, d.Xx)("#Button_Close"))
        );
      }
    },
    87964: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { FullLogin: () => L, default: () => f });
      var o = n(67294),
        l = n(8199),
        i = n.n(l),
        r = (n(7952), n(78869)),
        s = n(15641),
        a = (n(36378), n(67862)),
        u = (n(38440), n(70655)),
        c = n(27194),
        d = n(86487),
        p = n(29669);
      let m = !1;
      function w() {
        return (0, u.mG)(this, void 0, void 0, function* () {
          if (m) return;
          if (((m = !0), r.De.USE_LONGEST_LOC_STRING)) {
            let e = (e) => (0, d.I2)(e);
            return void (yield (0, p.p)(e));
          }
          const e = r.De.LANGUAGE,
            t = c.LJ.GetLanguageFallback(e),
            n = e === t,
            [o, l] = yield Promise.all([(0, d.I2)(e), n ? null : (0, d.I2)(t)]);
          c.Yt.InitFromObjects(o, l, null, null);
        });
      }
      n(96794), n(10708);
      var S = n(63709),
        g = n(30946),
        C = n(45520),
        h = n(83893),
        v = (n(46269), n(69144), n(42608));
      n(7874);
      function f(e) {
        return L(e);
      }
      function L(e) {
        const [t, n] = (0, o.useState)(!0),
          l = (function () {
            const [e, t] = o.useState(!1);
            return (
              o.useEffect(() => {
                Promise.all([w()]).then(() => {
                  t(!0);
                });
              }, []),
              e
            );
          })();
        return t
          ? l
            ? o.createElement(W, Object.assign({}, e))
            : null
          : o.createElement(
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
      const E = 900,
        _ = 800,
        T = 1024,
        B = 768;
      function W(e) {
        const t = (0, r.eL)();
        let [n, l] = (0, o.useState)(null);
        const [u, d] = (0, o.useState)(!1),
          p = (0, h.Wy)(),
          [m, w] = (0, o.useState)(!1),
          [f, L] = (0, o.useState)(!1);
        let W = new a.zn(),
          H = W.GetServiceTransport();
        !(function (e) {
          (0, o.useEffect)(() => {
            (0, S.Uh)().Init("Client Login", CLSTAMP, e);
          }, [e]);
        })(H);
        const D = !!e.refreshLogin;
        (0, o.useEffect)(() => {
          (D || r.De.IN_LOGIN_REFRESH) &&
            SteamClient.Auth.GetRefreshInfo().then((e) => {
              1 !== e.reason ? l(e) : l(null);
            });
        }, [D]);
        const [N, I] = (0, o.useState)(void 0),
          [R, k] = (0, o.useState)(0);
        if (
          (W.Connect().then(() => {
            d(!0);
          }),
          !u)
        )
          return null;
        const A = `${null == n ? void 0 : n.account_name}${
          null == n ? void 0 : n.reason
        }${R.toString()}`;
        return o.createElement(
          "div",
          {
            className: (0, C.Z)(i().Login, e.includeTitleBar && i().WithTitle),
          },
          e.includeTitleBar &&
            e.popup &&
            o.createElement(
              "div",
              { className: i().TitleContainer },
              o.createElement(g.T, { popup: e.popup, hideMinMax: !0 })
            ),
          o.createElement(s.i9, {
            key: A,
            autoFocus: !0,
            transport: H,
            onSuccess: (t) => {
              var n, o, l, i;
              console.log(
                "received authentication token, using it to sign in to Steam"
              ),
                I(null),
                SteamClient.Auth.SetLoginToken(
                  t.strRefreshToken,
                  t.strAccountName
                ).then((t) => {
                  var n;
                  const o = t.result,
                    l = t.message;
                  console.log(`client login returned ${o} (${l})`),
                    I(o),
                    1 != o
                      ? k(R + 1)
                      : null === (n = e.onLoginComplete) ||
                        void 0 === n ||
                        n.call(e);
                });
              const r =
                null !== (n = t.strNewGuardData) && void 0 !== n ? n : "";
              r && SteamClient.Auth.SetSteamGuardData(t.strAccountName, r),
                null ===
                  (i =
                    null === (o = null == p ? void 0 : p.ownerWindow) ||
                    void 0 === o
                      ? void 0
                      : (l = o.SteamClient.Browser)
                          .SetShouldExitSteamOnBrowserClosed) ||
                  void 0 === i ||
                  i.call(l, !1);
            },
            platform: 1,
            embedded: !0,
            refreshInfo: n,
            lastResult: N,
            joinLinkStyle: () => {
              var e;
              t
                ? (w(!0),
                  null === (e = null == p ? void 0 : p.ownerWindow) ||
                    void 0 === e ||
                    e.SteamClient.Window.HideWindow())
                : SteamClient.LoginUI.ShowAccountCreation();
            },
            helpLinkStyle: () => {
              var e;
              t
                ? (L(!0),
                  null === (e = null == p ? void 0 : p.ownerWindow) ||
                    void 0 === e ||
                    e.SteamClient.Window.HideWindow())
                : SteamClient.LoginUI.ShowAccountRecovery();
            },
          }),
          m &&
            o.createElement(v.w, {
              strName: (0, c.Xx)("#AccountCreation_Title"),
              strURL: `${r.De.STORE_BASE_URL}join/`,
              popupWidth: E,
              popupHeight: _,
              showFooter: !1,
              onClose: () => {
                var e, t;
                w(!1),
                  null === (e = null == p ? void 0 : p.ownerWindow) ||
                    void 0 === e ||
                    e.SteamClient.Window.ShowWindow(),
                  null === (t = null == p ? void 0 : p.ownerWindow) ||
                    void 0 === t ||
                    t.SteamClient.Window.BringToFront();
              },
            }),
          f &&
            o.createElement(v.w, {
              strName: (0, c.Xx)("#SignInHelpTitle"),
              strURL: `${r.De.HELP_BASE_URL}wizard/HelpWithLogin`,
              popupWidth: T,
              popupHeight: B,
              showFooter: !1,
              onClose: () => {
                var e, t;
                L(!1),
                  null === (e = null == p ? void 0 : p.ownerWindow) ||
                    void 0 === e ||
                    e.SteamClient.Window.ShowWindow(),
                  null === (t = null == p ? void 0 : p.ownerWindow) ||
                    void 0 === t ||
                    t.SteamClient.Window.BringToFront();
              },
            })
        );
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1501],
  {
    47643: (e) => {
      e.exports = {
        smallentrywidth: "600px",
        optionswrapwidth: "777px",
        App: "_1DD-MN6M7fw9v4AEfy9VBS",
        Login: "_1hgW6B71pwJWHd34-SX7hq",
        Text: "_22sY8U8gQnI5A51kM3WFa9",
        LeftColumn: "_1I3G6fPqwwJ-oidGEVLoH2",
        ResultContainer: "_14xwk8-XHnHe6u_VgydVPK",
        MixerControls: "b9a7bAiOQdFEDFZ6mxkus",
        MixedItemList: "_3YeB68JcA4gQ-LDn4XBBny",
        Buttons: "_12dKZPgTxdY6HL7qTDFxEk",
        AddContainer: "zXPoPAhJfwmjV_nOL7SV_",
        InputLabel: "_2DGMshGWHwcXDbedaNIwA3",
        AddButtons: "ymONm5807X-v0sovL8HEj",
        MixerResults: "_1ZBMj31m_Y-GRPsCNPChA7",
        MixedResultApp: "x9B1cXIAi6vYDog2fs0e6",
        Logo: "aDp4xH1r3sii_t4UQehdT",
        RightSide: "_1lwaOX2enleYKfev0vfeua",
        AppName: "_3efVXI0E-Vd_yFdJS2F1hU",
        Distance: "_1kAkW_FkMQ4A6_bnjzCCHM",
        MixedItemControl: "zYBuUWMEj30dPwlkjPvja",
        Remove: "_2COEoqCO8NeThLNPNJCuAQ",
        MixerSlider: "_3Hw6l9Am6kQRPTDVY700Hb",
        PopularitySlider: "_5Z1ekC71ZkBjb8t6fB8Pg",
        AppSelector: "_3QPViwZln3xT160uthGacu",
        AppSelectorResults: "_1Mbwa8U5EIl-BVfj95I14m",
        Result: "ovwUTP2fvFxOe1Fg7gjH9",
        Selected: "_3Xj5n6rpZvxSYAZ0OZFylh",
      };
    },
    80212: (e, t, n) => {
      "use strict";
      n.d(t, { Xt: () => d, _I: () => I, hx: () => p });
      var a = n(47427),
        r = n(90069),
        s = n(31846),
        i = n(37563),
        c = n(99327),
        l = n(22791),
        o = n(35791),
        m = n(27438);
      function u(e) {
        return a.createElement(
          r.e1,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          a.createElement(f, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function p(e) {
        const { redirectURL: t = window.location.href } = e;
        return a.createElement(
          m.Yy,
          { active: !0 },
          a.createElement(u, { redirectURL: t }),
        );
      }
      function d() {
        (0, r.AM)(
          a.createElement(u, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, s.Xx)("#Login_SignInTitle") },
        );
      }
      function I(e, t) {
        (0, r.AM)(
          a.createElement(u, {
            ownerWin: window,
            redirectURL: e,
            guestOption: t,
          }),
          window,
          { strTitle: (0, s.Xx)("#Login_SignInTitle") },
        );
      }
      function f(e) {
        const { redirectURL: t, guestOption: n } = e,
          [r] = (0, a.useState)(
            new l.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [s, m] = (0, a.useState)(!1);
        return a.createElement(
          "div",
          null,
          s
            ? a.createElement(c.pT, null)
            : a.createElement(
                c.wK,
                {
                  autoFocus: !0,
                  transport: r,
                  platform: 2,
                  onComplete: (e) => {
                    e == o.TG.k_PrimaryDomainFail
                      ? m(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                n && a.createElement(c.bU, { redirectURL: t }),
              ),
        );
      }
    },
    19044: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => k });
      var a = n(85556),
        r = n(80751),
        s = n.n(r),
        i = n(37563),
        c = n(42718);
      function l(e) {
        return (0, a.mG)(this, void 0, void 0, function* () {
          let t = { accountid: e, sessionid: i.De.SESSIONID };
          const n = (yield s().get(
            `${i.De.STORE_BASE_URL}gamemixer/uservalues`,
            { params: t, withCredentials: !0, timeout: 1e4 },
          )).data;
          if (n) return n.map(Number);
          throw "Failed FetchUserValues";
        });
      }
      function o(e) {
        return (0, a.mG)(this, void 0, void 0, function* () {
          let t = { appid: e, sessionid: i.De.SESSIONID };
          const n = (yield s().get(
            `${i.De.STORE_BASE_URL}gamemixer/appvalues`,
            { params: t, withCredentials: !0, timeout: 1e4 },
          )).data;
          if (n) return n.map(Number);
          throw "Failed FetchAppValues";
        });
      }
      function m(e) {
        return (0, c.useQuery)(
          ["GameMixerAppInfo", e],
          () =>
            (function (e) {
              return (0, a.mG)(this, void 0, void 0, function* () {
                let t = { appid: e, sessionid: i.De.SESSIONID };
                const n = (yield s().get(
                  `${i.De.STORE_BASE_URL}gamemixer/details`,
                  { params: t, withCredentials: !0, timeout: 1e4 },
                )).data;
                if (n) return n;
                throw "Failed FetchAppInfo";
              });
            })(e),
          { staleTime: 1 / 0 },
        );
      }
      var u = n(47427),
        p = n(1485),
        d = n(80212),
        I = n(25006),
        f = n(13129),
        x = n(31846),
        D = n(47643),
        E = n(40057),
        h = n(79545),
        v = n(44922),
        y = n(80998);
      const S = (e) => {
          var t;
          const n = (function (e) {
              const t = (0, E.bY)(),
                n = ["GameMixerSearchSuggestions", e];
              return (0, c.useQuery)(n, {
                queryFn: () =>
                  (0, a.mG)(this, void 0, void 0, function* () {
                    if (e.length < 2) return [];
                    const a = h.gA.Init(v.yk);
                    a.Body().set_query_name(JSON.stringify(n)),
                      a.Body().set_search_term(e),
                      (0, y.pA)(a),
                      (0, y.De)(a, {
                        include_basic_info: !0,
                        include_assets: !0,
                      }),
                      (0, y.Gk)(a, {
                        type_filters: { include_games: !0 },
                        price_filters: { only_free_items: !1 },
                      }),
                      a.Body().set_max_results(10),
                      a.Body().set_use_spellcheck(!0);
                    let r = yield v.Ax.SearchSuggestions(t, a);
                    return r.BSuccess()
                      ? r
                          .Body()
                          .store_items()
                          .map((e) => {
                            const t = e.name().replace(/^The |^A |^An /i, "");
                            return {
                              appid: e.appid(),
                              name: e.name(),
                              sort_as: t,
                              capsule_filename: e.assets().library_capsule(),
                              img_icon_hash: e.assets().community_icon(),
                              searchSuggestion: !0,
                            };
                          })
                      : [];
                  }),
                keepPreviousData: !0,
              });
            })(e.strSearch),
            r = e.fnSetResultApps;
          return (
            u.useEffect(() => {
              var e;
              r(
                null === (e = n.data) || void 0 === e
                  ? void 0
                  : e.map((e) => e.appid),
              );
            }, [r, n.data]),
            u.createElement(
              "div",
              { className: D.AppSelectorResults },
              null === (t = n.data) || void 0 === t
                ? void 0
                : t.map((t, n) =>
                    u.createElement(
                      "div",
                      {
                        key: t.appid,
                        className: (0, f.Z)(
                          D.Result,
                          n == e.nSelectedResult && D.Selected,
                        ),
                        onClick: () => e.fnClickApp(t.appid),
                      },
                      u.createElement("div", {
                        className: D.Logo,
                        style: {
                          backgroundImage: `url( ${i.De.STORE_ICON_BASE_URL}${t.appid}/capsule_231x87.jpg )`,
                        },
                      }),
                      u.createElement(
                        "div",
                        { className: D.RightSide },
                        t.name,
                      ),
                    ),
                  ),
            )
          );
        },
        g = (e) => {
          const [t, n] = u.useState(""),
            [a, r] = u.useState(0),
            [s, i] = u.useState(!1),
            [c, l] = u.useState(0),
            [o, m] = u.useState([]),
            p = u.useRef(a);
          u.useEffect(() => {
            p.current = a;
          }, [a]);
          const d = () => {
              Date.now() - p.current < 300 || (l(0), m([]), i(!0));
            },
            I = (t) => {
              e.fnSelectAppID(t), n(""), l(0), m([]), r(Date.now()), i(!1);
            };
          return u.createElement(
            "div",
            { className: D.AppSelector },
            u.createElement("input", {
              type: "text",
              className: (0, f.Z)(D.ValueInput),
              value: t,
              onChange: (e) => {
                var a;
                (a = e.target.value) != t &&
                  (n(a), r(Date.now()), i(!1), setTimeout(d, 300));
              },
              onKeyDown: (e) =>
                ((e) => {
                  switch (e) {
                    case "ArrowDown":
                      l(Math.min(o.length - 1, c + 1));
                      break;
                    case "ArrowUp":
                      l(Math.max(0, c - 1));
                      break;
                    case "Enter":
                      I(o[c]);
                  }
                })(e.key),
            }),
            s &&
              u.createElement(S, {
                strSearch: t,
                nSelectedResult: c,
                fnSetResultApps: m,
                fnClickApp: I,
              }),
          );
        };
      var A;
      !(function (e) {
        (e[(e.AppID = 0)] = "AppID"), (e[(e.AccountID = 1)] = "AccountID");
      })(A || (A = {}));
      const _ = (e) => {
          const [t, n] = u.useState(e.mixItem.nPercent);
          u.useEffect(() => {
            n(e.mixItem.nPercent);
          }, [e.mixItem.nPercent]);
          const a = m(e.mixItem.nID),
            r = a.data ? a.data.name : "";
          return u.createElement(
            "div",
            { className: D.MixedItemControl },
            u.createElement(p.DS, {
              className: D.MixerSlider,
              label: r,
              min: 1,
              max: 99,
              value: t,
              onChange: (t) => {
                e.bLocked || n(t);
              },
              onChangeComplete: (t) => {
                e.bLocked ||
                  e.setMixItem({
                    eType: e.mixItem.eType,
                    nID: e.mixItem.nID,
                    nPercent: t,
                  });
              },
            }),
            u.createElement(
              "div",
              {
                className: D.Remove,
                onClick: () => {
                  e.removeMixItem({
                    eType: e.mixItem.eType,
                    nID: e.mixItem.nID,
                    nPercent: 0,
                  });
                },
              },
              "Remove",
            ),
          );
        },
        M = (e) => {
          const [t, n] = u.useState(e.mixItem.nPercent);
          u.useEffect(() => {
            n(e.mixItem.nPercent);
          }, [e.mixItem.nPercent]);
          return u.createElement(
            "div",
            { className: D.MixedItemControl },
            u.createElement(p.DS, {
              className: D.MixerSlider,
              label: `Account ${e.mixItem.nID}`,
              min: 1,
              max: 99,
              value: t,
              onChange: (t) => {
                e.bLocked || n(t);
              },
              onChangeComplete: (t) => {
                e.bLocked ||
                  e.setMixItem({
                    eType: e.mixItem.eType,
                    nID: e.mixItem.nID,
                    nPercent: t,
                  });
              },
            }),
          );
        },
        w = (e) => {
          const [t, n] = u.useState(""),
            a = (t) => {
              let n = [],
                a = 0,
                r = 0;
              for (const n of e.arrMixItems)
                if (n.eType == t.eType && n.nID == t.nID) {
                  (a = n.nPercent), (r = t.nPercent - n.nPercent);
                  break;
                }
              let s = (100 - a - r) / (100 - a);
              for (const a of e.arrMixItems)
                (a.eType == t.eType && a.nID == t.nID) ||
                  n.push({
                    eType: a.eType,
                    nID: a.nID,
                    nPercent: a.nPercent * s,
                  });
              e.setMixItems(n);
            },
            r = (t) => {
              let n = [],
                a = 0,
                r = 0;
              for (const n of e.arrMixItems)
                if (n.eType == t.eType && n.nID == t.nID) {
                  (a = n.nPercent), (r = t.nPercent - n.nPercent);
                  break;
                }
              let s = (100 - a - r) / (100 - a);
              for (const a of e.arrMixItems)
                a.eType == t.eType && a.nID == t.nID
                  ? n.push(t)
                  : n.push({
                      eType: a.eType,
                      nID: a.nID,
                      nPercent: a.nPercent * s,
                    });
              e.setMixItems(n);
            };
          return u.createElement(
            "div",
            { className: D.MixerControls },
            e.arrMixItems.length > 0 &&
              u.createElement(
                "div",
                { className: D.MixedItemList },
                e.arrMixItems.map((t) => {
                  switch (t.eType) {
                    case A.AccountID:
                      return u.createElement(M, {
                        key: `${t.eType}_${t.nID}`,
                        mixItem: t,
                        setMixItem: r,
                        removeMixItem: a,
                        bLocked: 1 == e.arrMixItems.length,
                      });
                    case A.AppID:
                      return u.createElement(_, {
                        key: `${t.eType}_${t.nID}`,
                        mixItem: t,
                        setMixItem: r,
                        removeMixItem: a,
                        bLocked: 1 == e.arrMixItems.length,
                      });
                  }
                }),
              ),
            u.createElement(
              "div",
              { className: D.Buttons },
              u.createElement(
                "div",
                { className: D.AddContainer },
                u.createElement("div", { className: D.InputLabel }, "Add App"),
                u.createElement(g, {
                  fnSelectAppID: (t) =>
                    ((t) => {
                      if (0 == t) return;
                      const n = 100 / (e.arrMixItems.length + 1);
                      let a = { eType: A.AppID, nID: t, nPercent: n },
                        r = [];
                      for (const t of e.arrMixItems)
                        r.push({
                          eType: t.eType,
                          nID: t.nID,
                          nPercent: (t.nPercent * (100 - n)) / 100,
                        });
                      r.push(a), e.setMixItems(r);
                    })(t),
                }),
              ),
              u.createElement(
                "div",
                { className: D.AddContainer },
                u.createElement(
                  "div",
                  { className: D.InputLabel },
                  "Add AccountID",
                ),
                u.createElement("input", {
                  type: "text",
                  className: (0, f.Z)(D.ValueInput),
                  value: t,
                  onChange: (e) => n(e.target.value),
                  onKeyDown: (a) =>
                    ((a) => {
                      if ("Enter" != a || isNaN(Number(t))) return;
                      const r = 100 / (e.arrMixItems.length + 1);
                      let s = {
                          eType: A.AccountID,
                          nID: parseInt(t),
                          nPercent: r,
                        },
                        i = [];
                      for (const t of e.arrMixItems)
                        i.push({
                          eType: t.eType,
                          nID: t.nID,
                          nPercent: (t.nPercent * (100 - r)) / 100,
                        });
                      i.push(s), e.setMixItems(i), n("");
                    })(a.key),
                }),
              ),
              u.createElement(P, {
                nValue: e.nPopularity,
                setValue: e.setPopularity,
                strName: "Popularity",
              }),
              u.createElement(P, {
                nValue: e.nFocus,
                setValue: e.setFocus,
                strName: "Focus",
              }),
            ),
          );
        },
        N = (e) => {
          const t = m(e.nAppID);
          if (!t.data || "Uninitialized" == t.data.name) return null;
          return u.createElement(
            "a",
            {
              className: D.MixedResultApp,
              href: `${i.De.STORE_BASE_URL}app/${e.nAppID}`,
              onMouseEnter: () => {},
              onMouseLeave: () => {},
            },
            u.createElement("div", {
              className: D.Logo,
              style: {
                backgroundImage: `url( ${i.De.STORE_ICON_BASE_URL}${e.nAppID}/header.jpg )`,
              },
            }),
            u.createElement(
              "div",
              { className: D.RightSide },
              u.createElement("div", { className: D.AppName }, t.data.name),
              u.createElement(
                "div",
                { className: D.Distance },
                Number(e.fDistance).toFixed(2),
              ),
            ),
          );
        },
        T = (e) => {
          const [t, n] = u.useState([]),
            [r, c] = u.useState([]);
          return (
            u.useEffect(() => {
              (0, a.mG)(void 0, void 0, void 0, function* () {
                let t = [];
                for (const n of e.arrMixItems)
                  switch (n.eType) {
                    case A.AppID:
                      t.push(o(n.nID));
                      break;
                    case A.AccountID:
                      t.push(l(n.nID));
                  }
                n(yield Promise.all(t));
              });
            }, [e.arrMixItems]),
            u.useEffect(() => {
              (0, a.mG)(void 0, void 0, void 0, function* () {
                if (0 == t.length) return;
                let n = new Array(t[0].length).fill(0);
                for (let a = 0; a < t.length; a++)
                  for (let r = 0; r < t[a].length; r++)
                    a < e.arrMixItems.length &&
                      (n[r] += (t[a][r] * e.arrMixItems[a].nPercent) / 100);
                c(
                  yield (function (e, t, n) {
                    return (0, a.mG)(this, void 0, void 0, function* () {
                      let a = {
                        values: e.join(","),
                        popularity: t,
                        focus: n,
                        sessionid: i.De.SESSIONID,
                      };
                      const r = (yield s().get(
                        `${i.De.STORE_BASE_URL}gamemixer/nearest`,
                        { params: a, withCredentials: !0, timeout: 1e4 },
                      )).data;
                      if (r)
                        return r.map((e) => ({
                          nAppID: e.value,
                          fDistance: e.distance,
                        }));
                      throw "Failed FetchNearestToValues";
                    });
                  })(n, e.nPopularity, e.nFocus),
                );
              });
            }, [t, e.nPopularity, e.arrMixItems, e.nFocus]),
            u.createElement(
              "div",
              { className: D.MixerResults },
              (null == r ? void 0 : r.length) > 0 &&
                r.map((e) =>
                  u.createElement(N, {
                    key: e.nAppID,
                    nAppID: e.nAppID,
                    fDistance: e.fDistance,
                  }),
                ),
            )
          );
        },
        P = (e) => {
          const [t, n] = u.useState(e.nValue);
          return (
            u.useEffect(() => {
              n(e.nValue);
            }, [e.nValue]),
            u.createElement(p.DS, {
              className: (0, f.Z)(D.MixerSlider, D.PopularitySlider),
              label: e.strName,
              min: 1,
              max: 100,
              value: t,
              onChange: (e) => n(e),
              onChangeComplete: (t) => e.setValue(t),
            })
          );
        },
        k = () => {
          const [e, t] = u.useState([]),
            [n, a] = u.useState(1),
            [r, s] = u.useState(1);
          return i.L7.logged_in
            ? u.createElement(
                I.ZP,
                {
                  controller: "gamemixer",
                  method: "default",
                  feature: "capsule",
                },
                u.createElement(
                  "div",
                  { className: D.App },
                  u.createElement(w, {
                    arrMixItems: e,
                    setMixItems: t,
                    nPopularity: n,
                    setPopularity: a,
                    nFocus: r,
                    setFocus: s,
                  }),
                  u.createElement(T, {
                    arrMixItems: e,
                    nPopularity: n,
                    nFocus: r,
                  }),
                ),
              )
            : u.createElement(
                "div",
                { className: D.App },
                u.createElement(
                  "div",
                  { className: D.Login },
                  u.createElement(
                    "div",
                    { className: D.Text },
                    (0, x.Xx)("#LoginText"),
                  ),
                  u.createElement(
                    "div",
                    {
                      className: (0, f.Z)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: d.Xt,
                    },
                    u.createElement("span", null, (0, x.Xx)("#LoginButton")),
                  ),
                ),
              );
        };
    },
  },
]);

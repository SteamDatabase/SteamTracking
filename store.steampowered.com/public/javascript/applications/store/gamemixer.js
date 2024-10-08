/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3236],
  {
    34842: (e) => {
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
    21820: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => C });
      var a = n(41735),
        s = n.n(a),
        r = n(78327),
        c = n(20194);
      async function i(e) {
        let t = { accountid: e, sessionid: r.TS.SESSIONID };
        const n = (
          await s().get(`${r.TS.STORE_BASE_URL}gamemixer/uservalues`, {
            params: t,
            withCredentials: !0,
            timeout: 1e4,
          })
        ).data;
        if (n) return n.map(Number);
        throw "Failed FetchUserValues";
      }
      async function l(e) {
        let t = { appid: e, sessionid: r.TS.SESSIONID };
        const n = (
          await s().get(`${r.TS.STORE_BASE_URL}gamemixer/appvalues`, {
            params: t,
            withCredentials: !0,
            timeout: 1e4,
          })
        ).data;
        if (n) return n.map(Number);
        throw "Failed FetchAppValues";
      }
      function m(e) {
        return (0, c.I)({
          queryKey: ["GameMixerAppInfo", e],
          queryFn: () =>
            (async function (e) {
              let t = { appid: e, sessionid: r.TS.SESSIONID };
              const n = (
                await s().get(`${r.TS.STORE_BASE_URL}gamemixer/details`, {
                  params: t,
                  withCredentials: !0,
                  timeout: 1e4,
                })
              ).data;
              if (n) return n;
              throw "Failed FetchAppInfo";
            })(e),
          staleTime: 1 / 0,
        });
      }
      var o = n(90626),
        u = n(33737),
        p = n(82477),
        I = n(32630),
        d = n(52038),
        x = n(61859),
        f = n(34842),
        S = n(23809),
        y = n(57168),
        h = n(56545),
        E = n(94601),
        A = n(72839);
      const D = (e) => {
          const t = (function (e) {
              const t = (0, S.KV)(),
                n = ["GameMixerSearchSuggestions", e];
              return (0, c.I)({
                queryKey: n,
                queryFn: async () => {
                  if (e.length < 2) return [];
                  const a = h.w.Init(E.pI);
                  a.Body().set_query_name(JSON.stringify(n)),
                    a.Body().set_search_term(e),
                    (0, A.rV)(a),
                    (0, A.Bn)(a, {
                      include_basic_info: !0,
                      include_assets: !0,
                    }),
                    (0, A.hc)(a, {
                      type_filters: { include_games: !0 },
                      price_filters: { only_free_items: !1 },
                    }),
                    a.Body().set_max_results(10),
                    a.Body().set_use_spellcheck(!0);
                  let s = await E.Fs.SearchSuggestions(t, a);
                  return s.BSuccess()
                    ? s
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
                },
                placeholderData: y.rX,
              });
            })(e.strSearch),
            n = e.fnSetResultApps;
          return (
            o.useEffect(() => {
              n(t.data?.map((e) => e.appid));
            }, [n, t.data]),
            o.createElement(
              "div",
              { className: f.AppSelectorResults },
              t.data?.map((t, n) =>
                o.createElement(
                  "div",
                  {
                    key: t.appid,
                    className: (0, d.A)(
                      f.Result,
                      n == e.nSelectedResult && f.Selected,
                    ),
                    onClick: () => e.fnClickApp(t.appid),
                  },
                  o.createElement("div", {
                    className: f.Logo,
                    style: {
                      backgroundImage: `url( ${r.TS.STORE_ICON_BASE_URL}${t.appid}/capsule_231x87.jpg )`,
                    },
                  }),
                  o.createElement("div", { className: f.RightSide }, t.name),
                ),
              ),
            )
          );
        },
        _ = (e) => {
          const [t, n] = o.useState(""),
            [a, s] = o.useState(0),
            [r, c] = o.useState(!1),
            [i, l] = o.useState(0),
            [m, u] = o.useState([]),
            p = o.useRef(a);
          o.useEffect(() => {
            p.current = a;
          }, [a]);
          const I = () => {
              Date.now() - p.current < 300 || (l(0), u([]), c(!0));
            },
            x = (t) => {
              e.fnSelectAppID(t), n(""), l(0), u([]), s(Date.now()), c(!1);
            };
          return o.createElement(
            "div",
            { className: f.AppSelector },
            o.createElement("input", {
              type: "text",
              className: (0, d.A)(f.ValueInput),
              value: t,
              onChange: (e) => {
                var a;
                (a = e.target.value) != t &&
                  (n(a), s(Date.now()), c(!1), setTimeout(I, 300));
              },
              onKeyDown: (e) =>
                ((e) => {
                  switch (e) {
                    case "ArrowDown":
                      l(Math.min(m.length - 1, i + 1));
                      break;
                    case "ArrowUp":
                      l(Math.max(0, i - 1));
                      break;
                    case "Enter":
                      x(m[i]);
                  }
                })(e.key),
            }),
            r &&
              o.createElement(D, {
                strSearch: t,
                nSelectedResult: i,
                fnSetResultApps: u,
                fnClickApp: x,
              }),
          );
        };
      var g;
      !(function (e) {
        (e[(e.AppID = 0)] = "AppID"), (e[(e.AccountID = 1)] = "AccountID");
      })(g || (g = {}));
      const M = (e) => {
          const [t, n] = o.useState(e.mixItem.nPercent);
          o.useEffect(() => {
            n(e.mixItem.nPercent);
          }, [e.mixItem.nPercent]);
          const a = m(e.mixItem.nID),
            s = a.data ? a.data.name : "";
          return o.createElement(
            "div",
            { className: f.MixedItemControl },
            o.createElement(u.Kc, {
              className: f.MixerSlider,
              label: s,
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
            o.createElement(
              "div",
              {
                className: f.Remove,
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
        T = (e) => {
          const [t, n] = o.useState(e.mixItem.nPercent);
          o.useEffect(() => {
            n(e.mixItem.nPercent);
          }, [e.mixItem.nPercent]);
          return o.createElement(
            "div",
            { className: f.MixedItemControl },
            o.createElement(u.Kc, {
              className: f.MixerSlider,
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
        v = (e) => {
          const [t, n] = o.useState(""),
            a = (t) => {
              let n = [],
                a = 0,
                s = 0;
              for (const n of e.arrMixItems)
                if (n.eType == t.eType && n.nID == t.nID) {
                  (a = n.nPercent), (s = t.nPercent - n.nPercent);
                  break;
                }
              let r = (100 - a - s) / (100 - a);
              for (const a of e.arrMixItems)
                (a.eType == t.eType && a.nID == t.nID) ||
                  n.push({
                    eType: a.eType,
                    nID: a.nID,
                    nPercent: a.nPercent * r,
                  });
              e.setMixItems(n);
            },
            s = (t) => {
              let n = [],
                a = 0,
                s = 0;
              for (const n of e.arrMixItems)
                if (n.eType == t.eType && n.nID == t.nID) {
                  (a = n.nPercent), (s = t.nPercent - n.nPercent);
                  break;
                }
              let r = (100 - a - s) / (100 - a);
              for (const a of e.arrMixItems)
                a.eType == t.eType && a.nID == t.nID
                  ? n.push(t)
                  : n.push({
                      eType: a.eType,
                      nID: a.nID,
                      nPercent: a.nPercent * r,
                    });
              e.setMixItems(n);
            };
          return o.createElement(
            "div",
            { className: f.MixerControls },
            e.arrMixItems.length > 0 &&
              o.createElement(
                "div",
                { className: f.MixedItemList },
                e.arrMixItems.map((t) => {
                  switch (t.eType) {
                    case g.AccountID:
                      return o.createElement(T, {
                        key: `${t.eType}_${t.nID}`,
                        mixItem: t,
                        setMixItem: s,
                        removeMixItem: a,
                        bLocked: 1 == e.arrMixItems.length,
                      });
                    case g.AppID:
                      return o.createElement(M, {
                        key: `${t.eType}_${t.nID}`,
                        mixItem: t,
                        setMixItem: s,
                        removeMixItem: a,
                        bLocked: 1 == e.arrMixItems.length,
                      });
                  }
                }),
              ),
            o.createElement(
              "div",
              { className: f.Buttons },
              o.createElement(
                "div",
                { className: f.AddContainer },
                o.createElement("div", { className: f.InputLabel }, "Add App"),
                o.createElement(_, {
                  fnSelectAppID: (t) =>
                    ((t) => {
                      if (0 == t) return;
                      const n = 100 / (e.arrMixItems.length + 1);
                      let a = { eType: g.AppID, nID: t, nPercent: n },
                        s = [];
                      for (const t of e.arrMixItems)
                        s.push({
                          eType: t.eType,
                          nID: t.nID,
                          nPercent: (t.nPercent * (100 - n)) / 100,
                        });
                      s.push(a), e.setMixItems(s);
                    })(t),
                }),
              ),
              o.createElement(
                "div",
                { className: f.AddContainer },
                o.createElement(
                  "div",
                  { className: f.InputLabel },
                  "Add AccountID",
                ),
                o.createElement("input", {
                  type: "text",
                  className: (0, d.A)(f.ValueInput),
                  value: t,
                  onChange: (e) => n(e.target.value),
                  onKeyDown: (a) =>
                    ((a) => {
                      if ("Enter" != a || isNaN(Number(t))) return;
                      const s = 100 / (e.arrMixItems.length + 1);
                      let r = {
                          eType: g.AccountID,
                          nID: parseInt(t),
                          nPercent: s,
                        },
                        c = [];
                      for (const t of e.arrMixItems)
                        c.push({
                          eType: t.eType,
                          nID: t.nID,
                          nPercent: (t.nPercent * (100 - s)) / 100,
                        });
                      c.push(r), e.setMixItems(c), n("");
                    })(a.key),
                }),
              ),
              o.createElement(w, {
                nValue: e.nPopularity,
                setValue: e.setPopularity,
                strName: "Popularity",
              }),
              o.createElement(w, {
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
          return o.createElement(
            "a",
            {
              className: f.MixedResultApp,
              href: `${r.TS.STORE_BASE_URL}app/${e.nAppID}`,
              onMouseEnter: () => {},
              onMouseLeave: () => {},
            },
            o.createElement("div", {
              className: f.Logo,
              style: {
                backgroundImage: `url( ${r.TS.STORE_ICON_BASE_URL}${e.nAppID}/header.jpg )`,
              },
            }),
            o.createElement(
              "div",
              { className: f.RightSide },
              o.createElement("div", { className: f.AppName }, t.data.name),
              o.createElement(
                "div",
                { className: f.Distance },
                Number(e.fDistance).toFixed(2),
              ),
            ),
          );
        },
        P = (e) => {
          const [t, n] = o.useState([]),
            [a, c] = o.useState([]);
          return (
            o.useEffect(() => {
              (async () => {
                let t = [];
                for (const n of e.arrMixItems)
                  switch (n.eType) {
                    case g.AppID:
                      t.push(l(n.nID));
                      break;
                    case g.AccountID:
                      t.push(i(n.nID));
                  }
                n(await Promise.all(t));
              })();
            }, [e.arrMixItems]),
            o.useEffect(() => {
              (async () => {
                if (0 == t.length) return;
                let n = new Array(t[0].length).fill(0);
                for (let a = 0; a < t.length; a++)
                  for (let s = 0; s < t[a].length; s++)
                    a < e.arrMixItems.length &&
                      (n[s] += (t[a][s] * e.arrMixItems[a].nPercent) / 100);
                c(
                  await (async function (e, t, n) {
                    let a = {
                      values: e.join(","),
                      popularity: t,
                      focus: n,
                      sessionid: r.TS.SESSIONID,
                    };
                    const c = (
                      await s().get(`${r.TS.STORE_BASE_URL}gamemixer/nearest`, {
                        params: a,
                        withCredentials: !0,
                        timeout: 1e4,
                      })
                    ).data;
                    if (c)
                      return c.map((e) => ({
                        nAppID: e.value,
                        fDistance: e.distance,
                      }));
                    throw "Failed FetchNearestToValues";
                  })(n, e.nPopularity, e.nFocus),
                );
              })();
            }, [t, e.nPopularity, e.arrMixItems, e.nFocus]),
            o.createElement(
              "div",
              { className: f.MixerResults },
              a?.length > 0 &&
                a.map((e) =>
                  o.createElement(N, {
                    key: e.nAppID,
                    nAppID: e.nAppID,
                    fDistance: e.fDistance,
                  }),
                ),
            )
          );
        },
        w = (e) => {
          const [t, n] = o.useState(e.nValue);
          return (
            o.useEffect(() => {
              n(e.nValue);
            }, [e.nValue]),
            o.createElement(u.Kc, {
              className: (0, d.A)(f.MixerSlider, f.PopularitySlider),
              label: e.strName,
              min: 1,
              max: 100,
              value: t,
              onChange: (e) => n(e),
              onChangeComplete: (t) => e.setValue(t),
            })
          );
        },
        C = () => {
          const [e, t] = o.useState([]),
            [n, a] = o.useState(1),
            [s, c] = o.useState(1);
          return r.iA.logged_in
            ? o.createElement(
                I.A,
                {
                  controller: "gamemixer",
                  method: "default",
                  feature: "capsule",
                },
                o.createElement(
                  "div",
                  { className: f.App },
                  o.createElement(v, {
                    arrMixItems: e,
                    setMixItems: t,
                    nPopularity: n,
                    setPopularity: a,
                    nFocus: s,
                    setFocus: c,
                  }),
                  o.createElement(P, {
                    arrMixItems: e,
                    nPopularity: n,
                    nFocus: s,
                  }),
                ),
              )
            : o.createElement(
                "div",
                { className: f.App },
                o.createElement(
                  "div",
                  { className: f.Login },
                  o.createElement(
                    "div",
                    { className: f.Text },
                    (0, x.we)("#LoginText"),
                  ),
                  o.createElement(
                    "div",
                    {
                      className: (0, d.A)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: p.vg,
                    },
                    o.createElement("span", null, (0, x.we)("#LoginButton")),
                  ),
                ),
              );
        };
    },
  },
]);

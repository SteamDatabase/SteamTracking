/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1914],
  {
    32792: (e) => {
      e.exports = {
        smallentrywidth: "600px",
        optionswrapwidth: "777px",
        RecommenderDemosApp: "Yd0GQ7ZuwBZvFndfWls_V",
        TopControls: "_3pk8aklP1QvRisTxx7jKBk",
        AccountIDControl: "NHix7NSJXYUhKUfq37DfV",
        AccountIDOverride: "i650fxK7SwDP8ncETkWfc",
        AccountID: "_1KvFAONiSWym2s89il4uOT",
        RecDemoButton: "_1-j6-lkyQZPPLjcvFUqtRg",
        RecommenderList: "_2SWgrCnfJv-YVMkRUaHonC",
        Title: "_1sEvnBlkzKtI80ZZnT4MVY",
        SubTitle: "_1jf-uvxuqKuz8FYMHvlhIm",
        CheckBox: "_5aGW9oecPhpwTUVGvj3lg",
        Spacer: "_1kIkFPfBO9A3hDohTT_hoK",
        CapsuleList: "iWS569Edm4Rgt09fYlY2v",
        AppCapsule: "_2ZKToqUzsdeaKKdDTtGZkD",
        UnderInfo: "_3pPpZh7mj-S7Lxj6yU4Fzl",
        Name: "_1EvKcr6zM__ELCD8Hf9S8y",
        Weight: "_2akgNsqkbts6rIO2OMHPNR",
        Image: "_3VtsIJqlIPDKUx2pCA9kyh",
      };
    },
    64466: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => c });
      var s = a(30470);
      function c(e, t) {
        if (e?.asset_url_format && e[t])
          return (
            s.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.asset_url_format.replace("${FILENAME}", e[t])
          );
      }
    },
    1593: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => A });
      var s = a(39777),
        c = a(41735),
        n = a.n(c),
        l = a(90626),
        m = a(64466),
        r = a(82477),
        i = a(37076),
        o = a(32630),
        d = a(52038),
        u = a(61859),
        p = a(78327),
        E = a(32792),
        _ = a(33737);
      const N = (e) => {
          const t = (0, s.lv)({ appid: e.nAppID }),
            a = (0, s.wl)({ appid: e.nAppID });
          if (!t.data || !a.data) return null;
          const c = (0, m.l)(t.data, "header");
          return l.createElement(
            "div",
            { className: E.AppCapsule },
            l.createElement(
              i.u,
              { id: e.nAppID, type: "app" },
              l.createElement("img", { className: E.Image, src: c }),
            ),
            l.createElement(
              "div",
              { className: E.UnderInfo },
              l.createElement("div", { className: E.Name }, a.data.name),
              e.fWeight &&
                l.createElement(
                  "div",
                  { className: E.Weight },
                  `${(100 * e.fWeight).toFixed(2)}%`,
                ),
            ),
          );
        },
        D = (e) => {
          const [t, a] = l.useState([]),
            [s, c] = l.useState([]);
          return (
            l.useEffect(() => {
              (async () => {
                const t = {
                  rec: e.strName,
                  max: 40,
                  exclude: e.bExclude ? 1 : 0,
                  accountid: e.nAccountID,
                };
                try {
                  const e = await n().get(
                    `${p.TS.STORE_BASE_URL}recommenderdemos/getlist`,
                    { params: t, timeout: 1e4 },
                  );
                  a(e.data.appids), c(e.data.weights);
                } catch (e) {
                  console.error("Error fetching data", e);
                }
              })();
            }, [e.strName, e.nAccountID, e.bExclude]),
            l.createElement(
              "div",
              { className: E.RecommenderList },
              l.createElement("div", { className: E.Title }, e.strTitle),
              l.createElement("div", { className: E.SubTitle }, e.strSubtitle),
              l.createElement(
                "div",
                { className: E.CapsuleList },
                t?.map((t, a) =>
                  l.createElement(N, {
                    key: `${e.strName}_${a}`,
                    nAppID: t,
                    fWeight: s[a],
                  }),
                ),
              ),
            )
          );
        },
        v = (e) =>
          l.createElement(
            "div",
            { className: E.RecommenderList },
            l.createElement("div", { className: E.Title }, e.strName),
            l.createElement(
              "div",
              { className: E.SubTitle },
              (0, u.we)("#RecommenderDemos_ReleasedGames"),
            ),
            l.createElement(
              "div",
              { className: E.CapsuleList },
              e.arrPlaytimeAppIDs.map((t, a) =>
                l.createElement(N, { key: `${e.strName}_${a}`, nAppID: t }),
              ),
            ),
            l.createElement("div", { className: E.Spacer }),
            l.createElement(
              "div",
              { className: E.SubTitle },
              (0, u.we)("#RecommenderDemos_UnreleasedGames"),
            ),
            l.createElement(
              "div",
              { className: E.CapsuleList },
              e.arrWishlistAppIDs.map((t, a) =>
                l.createElement(N, { key: `${e.strName}_${a}`, nAppID: t }),
              ),
            ),
          ),
        h = (e) => {
          const [t, a] = l.useState(void 0);
          return (
            l.useEffect(() => {
              (async () => {
                const t = {
                  max: 40,
                  exclude: e.bExclude ? 1 : 0,
                  accountid: e.nAccountID,
                };
                try {
                  const e = await n().get(
                    `${p.TS.STORE_BASE_URL}recommenderdemos/getfests`,
                    { params: t, timeout: 1e4 },
                  );
                  a(e.data);
                } catch (e) {
                  console.error("Error fetching data", e);
                }
              })();
            }, [e.bExclude, e.nAccountID]),
            l.createElement(
              "div",
              { className: E.RecommenderFests },
              t?.map((e) =>
                l.createElement(v, {
                  key: `Fest_${e.name}`,
                  strName: e.title,
                  nStartTime: e.start_date,
                  nEndTime: e.end_date,
                  arrPlaytimeAppIDs: e.playtime_appids,
                  arrWishlistAppIDs: e.wishlist_appids,
                }),
              ),
            )
          );
        },
        A = () => {
          const [e, t] = l.useState(!1),
            [a, s] = l.useState(0),
            [c, n] = l.useState(""),
            [m, i] = l.useState(!0);
          if (!p.iA.logged_in)
            return l.createElement(
              "div",
              { className: E.App },
              l.createElement(
                "div",
                { className: E.Login },
                l.createElement(
                  "div",
                  { className: E.Text },
                  (0, u.we)("#LoginText"),
                ),
                l.createElement(
                  "div",
                  {
                    className: (0, d.A)(
                      "btn_green_white_innerfade",
                      " btn_medium",
                    ),
                    onClick: r.vg,
                  },
                  l.createElement("span", null, (0, u.we)("#LoginButton")),
                ),
              ),
            );
          return l.createElement(
            o.A,
            {
              controller: "recommenderdemos",
              method: "default",
              feature: "capsule",
            },
            l.createElement(
              "div",
              { className: E.RecommenderDemosApp },
              l.createElement(
                "div",
                { className: E.TopControls },
                l.createElement(
                  "div",
                  { className: E.AccountIDControl },
                  l.createElement("input", {
                    type: "text",
                    value: c,
                    onChange: (e) => n(e.target.value),
                  }),
                  l.createElement(
                    _.$n,
                    {
                      className: E.RecDemoButton,
                      onClick: () => {
                        isNaN(parseInt(c)) || (t(!0), s(parseInt(c)));
                      },
                    },
                    "Use AccountID",
                  ),
                  l.createElement(
                    _.$n,
                    {
                      disabled: !e,
                      className: E.RecDemoButton,
                      onClick: () => {
                        t(!1), s(0), n("");
                      },
                    },
                    "Clear",
                  ),
                ),
                e &&
                  l.createElement(
                    "div",
                    { className: E.AccountIDOverride },
                    (0, u.we)("#RecommenderDemos_OverrideAccountID"),
                    l.createElement("div", { className: E.AccountID }, a),
                  ),
                l.createElement(
                  "div",
                  { className: E.CheckBox },
                  l.createElement("input", {
                    type: "checkbox",
                    id: "exclude_owned_wishlisted",
                    checked: m,
                    onChange: () => i(!m),
                  }),
                  l.createElement(
                    "label",
                    { htmlFor: "exclude_owned_wishlisted" },
                    (0, u.we)("#RecommenderDemos_Exclude"),
                  ),
                ),
              ),
              l.createElement(D, {
                nAccountID: a,
                bExclude: m,
                strName: "WishlistsOneWeek",
                strTitle: (0, u.we)("#RecommenderDemos_HotWishlists"),
                strSubtitle: (0, u.we)("#RecommenderDemos_HotWishlists_Desc"),
              }),
              l.createElement(D, {
                nAccountID: a,
                bExclude: m,
                strName: "WishlistsNewReleases",
                strTitle: (0, u.we)("#RecommenderDemos_NewReleases"),
                strSubtitle: (0, u.we)("#RecommenderDemos_NewReleases_Desc"),
              }),
              l.createElement(h, { nAccountID: a, bExclude: m }),
            ),
          );
        };
    },
  },
]);

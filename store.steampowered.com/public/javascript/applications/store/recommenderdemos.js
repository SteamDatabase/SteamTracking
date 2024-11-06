/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1914],
  {
    32792: (e) => {
      e.exports = {
        smallentrywidth: "600px",
        optionswrapwidth: "777px",
        ValveOnly: "_3BlEI-AzJaZZmX2NYANWUM",
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
        m = a.n(c),
        n = a(90626),
        l = a(64466),
        r = a(82477),
        o = a(37076),
        i = a(32630),
        d = a(52038),
        u = a(61859),
        p = a(78327),
        E = a(32792),
        _ = a(33737);
      const D = (e) => {
          const t = (0, s.lv)({ appid: e.nAppID }),
            a = (0, s.wl)({ appid: e.nAppID });
          if (!t.data || !a.data) return null;
          const c = (0, l.l)(t.data, "header");
          return n.createElement(
            "div",
            { className: E.AppCapsule },
            n.createElement(
              o.u,
              { id: e.nAppID, type: "app" },
              n.createElement("img", { className: E.Image, src: c }),
            ),
            n.createElement(
              "div",
              { className: E.UnderInfo },
              n.createElement("div", { className: E.Name }, a.data.name),
              e.fWeight &&
                n.createElement(
                  "div",
                  { className: E.Weight },
                  `${(100 * e.fWeight).toFixed(2)}%`,
                ),
            ),
          );
        },
        N = (e) => {
          const [t, a] = n.useState([]),
            [s, c] = n.useState([]);
          return (
            n.useEffect(() => {
              (async () => {
                const t = {
                  rec: e.strName,
                  max: 40,
                  exclude: e.bExclude ? 1 : 0,
                  accountid: e.nAccountID,
                };
                try {
                  const e = await m().get(
                    `${p.TS.STORE_BASE_URL}recommenderdemos/getlist`,
                    { params: t, timeout: 1e4 },
                  );
                  a(e.data.appids), c(e.data.weights);
                } catch (e) {
                  console.error("Error fetching data", e);
                }
              })();
            }, [e.strName, e.nAccountID, e.bExclude]),
            n.createElement(
              "div",
              { className: E.RecommenderList },
              n.createElement("div", { className: E.Title }, e.strTitle),
              n.createElement("div", { className: E.SubTitle }, e.strSubtitle),
              n.createElement(
                "div",
                { className: E.CapsuleList },
                t?.map((t, a) =>
                  n.createElement(D, {
                    key: `${e.strName}_${a}`,
                    nAppID: t,
                    fWeight: s[a],
                  }),
                ),
              ),
            )
          );
        },
        R = (e) =>
          n.createElement(
            "div",
            { className: E.RecommenderList },
            n.createElement("div", { className: E.Title }, e.strName),
            n.createElement(
              "div",
              { className: E.SubTitle },
              (0, u.we)("#RecommenderDemos_ReleasedGames"),
            ),
            n.createElement(
              "div",
              { className: E.CapsuleList },
              e.arrPlaytimeAppIDs.map((t, a) =>
                n.createElement(D, { key: `${e.strName}_${a}`, nAppID: t }),
              ),
            ),
            n.createElement("div", { className: E.Spacer }),
            n.createElement(
              "div",
              { className: E.SubTitle },
              (0, u.we)("#RecommenderDemos_UnreleasedGames"),
            ),
            n.createElement(
              "div",
              { className: E.CapsuleList },
              e.arrWishlistAppIDs.map((t, a) =>
                n.createElement(D, { key: `${e.strName}_${a}`, nAppID: t }),
              ),
            ),
          ),
        v = (e) => {
          const [t, a] = n.useState(void 0);
          return (
            n.useEffect(() => {
              (async () => {
                const t = {
                  max: 40,
                  exclude: e.bExclude ? 1 : 0,
                  accountid: e.nAccountID,
                };
                try {
                  const e = await m().get(
                    `${p.TS.STORE_BASE_URL}recommenderdemos/getfests`,
                    { params: t, timeout: 1e4 },
                  );
                  a(e.data);
                } catch (e) {
                  console.error("Error fetching data", e);
                }
              })();
            }, [e.bExclude, e.nAccountID]),
            n.createElement(
              "div",
              { className: E.RecommenderFests },
              t?.map((e) =>
                n.createElement(R, {
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
          const [e, t] = n.useState(!1),
            [a, s] = n.useState(0),
            [c, m] = n.useState(""),
            [l, o] = n.useState(!0);
          if (!p.iA.logged_in)
            return n.createElement(
              "div",
              { className: E.App },
              n.createElement(
                "div",
                { className: E.Login },
                n.createElement(
                  "div",
                  { className: E.Text },
                  (0, u.we)("#LoginText"),
                ),
                n.createElement(
                  "div",
                  {
                    className: (0, d.A)(
                      "btn_green_white_innerfade",
                      " btn_medium",
                    ),
                    onClick: r.vg,
                  },
                  n.createElement("span", null, (0, u.we)("#LoginButton")),
                ),
              ),
            );
          return n.createElement(
            i.A,
            {
              controller: "recommenderdemos",
              method: "default",
              feature: "capsule",
            },
            n.createElement(
              "div",
              { className: E.RecommenderDemosApp },
              n.createElement(
                "div",
                { className: E.ValveOnly },
                "(Valve-Only)",
              ),
              n.createElement(
                "div",
                { className: E.TopControls },
                n.createElement(
                  "div",
                  { className: E.AccountIDControl },
                  n.createElement("input", {
                    type: "text",
                    value: c,
                    onChange: (e) => m(e.target.value),
                  }),
                  n.createElement(
                    _.$n,
                    {
                      className: E.RecDemoButton,
                      onClick: () => {
                        isNaN(parseInt(c)) || (t(!0), s(parseInt(c)));
                      },
                    },
                    "Use AccountID",
                  ),
                  n.createElement(
                    _.$n,
                    {
                      disabled: !e,
                      className: E.RecDemoButton,
                      onClick: () => {
                        t(!1), s(0), m("");
                      },
                    },
                    "Clear",
                  ),
                ),
                e &&
                  n.createElement(
                    "div",
                    { className: E.AccountIDOverride },
                    (0, u.we)("#RecommenderDemos_OverrideAccountID"),
                    n.createElement("div", { className: E.AccountID }, a),
                  ),
                n.createElement(
                  "div",
                  { className: E.CheckBox },
                  n.createElement("input", {
                    type: "checkbox",
                    id: "exclude_owned_wishlisted",
                    checked: l,
                    onChange: () => o(!l),
                  }),
                  n.createElement(
                    "label",
                    { htmlFor: "exclude_owned_wishlisted" },
                    (0, u.we)("#RecommenderDemos_Exclude"),
                  ),
                ),
              ),
              n.createElement(N, {
                nAccountID: a,
                bExclude: l,
                strName: "WishlistsOneWeek",
                strTitle: (0, u.we)("#RecommenderDemos_HotWishlists"),
                strSubtitle: (0, u.we)("#RecommenderDemos_HotWishlists_Desc"),
              }),
              n.createElement(N, {
                nAccountID: a,
                bExclude: l,
                strName: "WishlistsNewReleases",
                strTitle: (0, u.we)("#RecommenderDemos_NewReleases"),
                strSubtitle: (0, u.we)("#RecommenderDemos_NewReleases_Desc"),
              }),
              n.createElement(v, { nAccountID: a, bExclude: l }),
              n.createElement(N, {
                nAccountID: a,
                bExclude: l,
                strName: "RecAllTime",
                strTitle: (0, u.we)("#RecommenderDemos_RecAllTime"),
                strSubtitle: (0, u.we)("#RecommenderDemos_Rec_Desc"),
              }),
              n.createElement(N, {
                nAccountID: a,
                bExclude: l,
                strName: "RecFiveYear",
                strTitle: (0, u.we)("#RecommenderDemos_RecFiveYear"),
                strSubtitle: (0, u.we)("#RecommenderDemos_Rec_Desc"),
              }),
              n.createElement(N, {
                nAccountID: a,
                bExclude: l,
                strName: "RecTwoYear",
                strTitle: (0, u.we)("#RecommenderDemos_RecTwoYear"),
                strSubtitle: (0, u.we)("#RecommenderDemos_Rec_Desc"),
              }),
              n.createElement(N, {
                nAccountID: a,
                bExclude: l,
                strName: "RecOneYear",
                strTitle: (0, u.we)("#RecommenderDemos_RecOneYear"),
                strSubtitle: (0, u.we)("#RecommenderDemos_Rec_Desc"),
              }),
              n.createElement(N, {
                nAccountID: a,
                bExclude: l,
                strName: "RecSixMonths",
                strTitle: (0, u.we)("#RecommenderDemos_RecSixMonths"),
                strSubtitle: (0, u.we)("#RecommenderDemos_Rec_Desc"),
              }),
            ),
          );
        };
    },
  },
]);

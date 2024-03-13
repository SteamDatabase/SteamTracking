/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7161],
  {
    52278: (e) => {
      e.exports = {
        SteamAwardContainer: "jBtX5x4YxvfFrRGCNQ9g-",
        InLibraryView: "_1G81PcQ-b1ZAe_qs0k8eD",
        SVGIcon_DialogCheck: "_1IRgdJXU7CTUdo0isEOcuJ",
        SteamAwardHeader: "_2TvWH9yIrhn_hpn3qkpwAd",
        SteamAwardHeaderImage: "_3dsTJ0rSuCzV_Pbav_0CZ-",
        SteamAwardMainCtn: "_3CUAM5cgO9HVI8zyYaR6SU",
        SteamAwardMainTitle: "_6gN_uEJ3sVAak62KW0rQx",
        SteamAwardSubTitle: "_3SuAgWws9tUPtO7d8e40Sm",
        SteamAwardLearnMore: "TqZmnlV7hljtuPGwkG1Ed",
        BottomRight: "_3VSBrXMSIJq0FOXWuNTX0Z",
        SteamAwardHeaderText: "_30-fH9hlaypAdCqZLmwcQf",
        LinkText: "_1dQJWnvQvHGtLMU-yBg6WZ",
        SteamAwardVoteWidget: "_2-t3vxHNFDxQ0oAbREsRfS",
        SteamAwardVotePrompt: "_38kTM5hyMfFyCPY6PAnspV",
        SteamAwardCategoryTitle: "_3hZEDLDoOOua96DEaYMz4",
        VotingTitle: "at4wSEDKw8YVKClkGws2w",
        SteamAwardCategoryDesc: "_3bu8iddY27m2f9miWqsZHw",
        SteamAwardVoteButtonArea: "_2gvv683k1_pdm2yShuF7A0",
        SteamAwardVoteButton: "kTsuKMAbDVhRXXKSbt43s",
        SteamAwardVoteButtonText: "Zzla_87iFB8e55dJJfOVf",
        SteamAwardVoteButtonSubmitted: "_39ziFovsDnE1KuixfZYDel",
        NominateCtn: "hS9w-dgOoavHdBq3YPQv2",
        SteamAwardNominateButton: "VcFKWfPsDrnvT30ixUj7V",
        Nominated: "_2pePRqBhMvH8qXtcBlGOdh",
        SteamAwardLinkToNominationPage: "_3XWCwrdyubB5TvfCvk4MQO",
        SteamAwardVoteCheckBox: "LFbd4Fc6Cm7E6i9CTZqfJ",
        SteamAwardModalGameTitle: "_3hBdP2ZO0lXzvBSx_WC93j",
        ExpiredEventHeader: "_3e-YKQ4smL9m7PdNRmqRt4",
        AwardCategoriesCtn: "GCwk0_wSotCva5ugNeofV",
        SteamAwardConflictModal: "_1Ujn__voD-lUk901_E02hO",
        NominationSwitchCtn: "_3IrPAgNSoH2SmmACSIiapp",
      };
    },
    92280: (e, t, a) => {
      "use strict";
      a.d(t, {
        $: () => E,
        A7: () => f,
        Cn: () => b,
        Df: () => _,
        GC: () => I,
        NL: () => C,
        TW: () => N,
        WR: () => D,
        fM: () => L,
        hp: () => B,
        rO: () => A,
        sF: () => V,
        tM: () => T,
        w6: () => y,
        yN: () => k,
      });
      var n = a(85556),
        o = a(38071),
        i = a(79545),
        r = a(82182),
        s = a(40354),
        d = a(42718),
        l = a(40057),
        c = a(65255),
        m = a(82756),
        u = a(77151),
        v = a(80751),
        g = a.n(v),
        p = a(47427),
        S = a(13557);
      const _ = 2640290,
        A = 2215130;
      let w;
      function h() {
        return (
          w || (w = (0, m.ip)("steam_awards_config", "application_config")), w
        );
      }
      function E(e) {
        const t = (0, l.bY)();
        return (0, d.useQuery)(
          `SteamAwardDefs_${e}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              const a = i.gA.Init(s.R_);
              a.Body().set_sale_appid(e), a.Body().set_language(c.De.LANGUAGE);
              return (yield s.Zq.GetVoteDefinitions(t, a)).Body().toObject();
            }),
          {
            initialData: () => {
              var e;
              return null === (e = h()) || void 0 === e
                ? void 0
                : e.definitions;
            },
            enabled: e > 0,
          },
        );
      }
      function f() {
        const e = (0, l.bY)();
        return (0, d.useQuery)(
          `SteamAwardNominations_${c.L7.accountid}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              var t;
              const a = i.gA.Init(s.Aw);
              return null ===
                (t = (yield s.tQ.GetUserNominations(e, a)).Body().toObject()) ||
                void 0 === t
                ? void 0
                : t.nominations;
            }),
          {
            initialData: () => {
              var e, t;
              return null ===
                (t =
                  null === (e = h()) || void 0 === e
                    ? void 0
                    : e.user_nominations) || void 0 === t
                ? void 0
                : t.nominations;
            },
            enabled: c.L7.logged_in,
          },
        );
      }
      function C(e) {
        var t;
        const a = f();
        return a.isLoading
          ? { bLoadingNominationForCategory: !0 }
          : {
              currentNomination:
                null === (t = a.data) || void 0 === t
                  ? void 0
                  : t.find((t) => t.category_id == e),
              bLoadingNominationForCategory: !1,
            };
      }
      function y(e) {
        const t = (0, l.bY)();
        return (0, d.useQuery)(
          `SteamAwardBadgeProgress_${e}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              const a = i.gA.Init(r.d4);
              a.Body().set_badgeid(e), a.Body().set_steamid(c.L7.steamid);
              return (yield r.lk.GetCommunityBadgeProgress(t, a))
                .Body()
                .toObject();
            }),
          {
            initialData: () => {
              var e;
              return null === (e = h()) || void 0 === e
                ? void 0
                : e.badge_progress;
            },
            enabled: c.L7.logged_in,
          },
        );
      }
      function D(e) {
        const t = (0, l.bY)();
        return (0, d.useQuery)(
          `SteamAwardSuggestions_${e}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              const a = i.gA.Init(s.L8);
              a.Body().set_category_id(e);
              return (yield s.tQ.GetNominationRecommendations(t, a))
                .Body()
                .toObject();
            }),
          { staleTime: 1 / 0 },
        );
      }
      function N(e, t, a, o) {
        const r = (0, l.bY)(),
          m = (0, d.useQueryClient)();
        return (0, d.useMutation)(
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return yield (function (e, t, a, o) {
                return (0, n.mG)(this, void 0, void 0, function* () {
                  const n = i.gA.Init(s.Fz);
                  n.Body().set_category_id(a),
                    n.Body().set_source(o),
                    n.Body().set_nominated_id(t);
                  const r = yield s.tQ.Nominate(e, n);
                  return (
                    r.BSuccess() ||
                      console.warn(`Failed to nominate app: ${r.GetEResult()}`),
                    [r.GetEResult(), r.Body().toObject()]
                  );
                });
              })(r, e, t, a);
            }),
          {
            onSuccess([e, t]) {
              1 == e
                ? (function (e, t) {
                    e.setQueryData(
                      `SteamAwardNominations_${c.L7.accountid}`,
                      t,
                    );
                  })(m, t.nominations)
                : o && o(e);
            },
            onError() {
              o && o();
            },
          },
        );
      }
      function T(e, t) {
        return (0, d.useQuery)(
          [e, t.voteid],
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return yield (function (e, t) {
                var a;
                return (0, n.mG)(this, void 0, void 0, function* () {
                  let n = {
                    cc: c.De.COUNTRY,
                    l: c.De.LANGUAGE,
                    realm: o.IN.k_ESteamRealmGlobal,
                    origin: self.origin,
                    f: "jsonfull",
                    term: e.replace(" ", "+"),
                    require_type: "game",
                    is_released_somewhere: 1,
                    excluded_tags: u.jg.Get().GetExcludedTagsSortedByID(),
                    excluded_content_descriptors:
                      u.jg.Get().ExcludedContentDescriptor,
                    excluded_apps: [230410, 271590, 730, 105600, 1091500],
                  };
                  t.release_date_max &&
                    (n.release_date_max = new Date(
                      1e3 * t.release_date_max,
                    ).toISOString()),
                    t.release_date_min &&
                      (n.release_date_min = new Date(
                        1e3 * t.release_date_min,
                      ).toISOString()),
                    1 == t.flag && (n.vrsupport = 1),
                    2 == t.flag && (n.steam_deck_compat_categories = [0, 2, 3]);
                  const i = `${c.De.STORE_BASE_URL}search/suggest`,
                    r = yield g().get(i, { params: n, withCredentials: !0 });
                  return null !== (a = r.data) && void 0 !== a ? a : [];
                });
              })(e, t);
            }),
          { staleTime: 1 / 0 },
        );
      }
      function G(e, t) {
        return (0, n.mG)(this, void 0, void 0, function* () {
          const a = i.gA.Init(s.m3);
          a.Body().set_generate_new(t);
          const n = yield s.tQ.GetNominationShareLink(e, a);
          return (
            n.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${n.GetEResult()}`,
              ),
            [n.GetEResult(), n.Body().toObject()]
          );
        });
      }
      function B() {
        const e = (0, l.bY)();
        return (0, d.useQuery)(
          `GetNominationShareLink_${c.L7.accountid}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return G(e, !1);
            }),
          {
            initialData: () => {
              var e;
              return [
                1,
                null === (e = h()) || void 0 === e ? void 0 : e.share_link,
              ];
            },
            staleTime: 1 / 0,
            enabled: c.L7.logged_in,
          },
        );
      }
      function b() {
        const e = (0, l.bY)(),
          t = (0, d.useQueryClient)();
        return (0, d.useMutation)(
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return yield G(e, !0);
            }),
          {
            onSuccess([e, a]) {
              1 == e &&
                t.setQueryData(`GetNominationShareLink_${c.L7.accountid}`, [
                  e,
                  a,
                ]);
            },
          },
        );
      }
      function k(e, t, a) {
        const o = (0, l.bY)(),
          r = (0, d.useQueryClient)();
        return (0, d.useMutation)(
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return yield (function (e, t, a, o) {
                return (0, n.mG)(this, void 0, void 0, function* () {
                  const n = i.gA.Init(s.ST);
                  n.Body().set_voteid(a),
                    n.Body().set_appid(t),
                    n.Body().set_sale_appid(o);
                  const r = yield s.Zq.SetVote(e, n);
                  return (
                    r.BSuccess() ||
                      console.warn(
                        `Failed to set vote for app (${t}): ${r.GetEResult()}`,
                      ),
                    [r.GetEResult(), r.Body().toObject()]
                  );
                });
              })(o, e, t, a);
            }),
          {
            onSuccess([e, t]) {
              1 == e &&
                r.setQueryData(
                  `SteamAwardUserVotes_${c.L7.accountid}`,
                  t.user_votes,
                );
            },
          },
        );
      }
      function L(e) {
        const t = (0, l.bY)();
        return (0, d.useQuery)(
          `SteamAwardUserVotes_${c.L7.accountid}`,
          () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              return yield (function (e, t) {
                var a;
                return (0, n.mG)(this, void 0, void 0, function* () {
                  const n = i.gA.Init(s.kQ);
                  n.Body().set_sale_appid(t);
                  const o = yield s.Zq.GetUserVotes(e, n);
                  return (
                    o.BSuccess() ||
                      console.warn(
                        `Failed to get votes for user: ${o.GetEResult()}`,
                      ),
                    null === (a = o.Body().toObject()) || void 0 === a
                      ? void 0
                      : a.user_votes
                  );
                });
              })(t, e);
            }),
          {
            initialData: () => {
              var e;
              return null === (e = h()) || void 0 === e ? void 0 : e.user_votes;
            },
            enabled: c.L7.logged_in,
          },
        );
      }
      function I(e, t) {
        const a = L(e);
        return (0, p.useMemo)(() => {
          var e, n;
          return null ===
            (n =
              null === (e = a.data) || void 0 === e
                ? void 0
                : e.find((e) => e.voteid == t)) || void 0 === n
            ? void 0
            : n.appid;
        }, [t, a.data]);
      }
      function V(e, t) {
        var a;
        const o = (function (e) {
            const t = (0, l.bY)();
            return (0, d.useQuery)(
              `SteamAwardItemDefs_${e}`,
              () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  const a = i.gA.Init(S.ft);
                  return (
                    a.Body().set_appid(e),
                    a.Body().set_language(c.De.LANGUAGE),
                    (yield S.Ts.GetCommunityItemDefinitions(t, a))
                      .Body()
                      .toObject()
                  );
                }),
              {
                staleTime: 1 / 0,
                initialData: () => {
                  var e;
                  return null === (e = h()) || void 0 === e
                    ? void 0
                    : e.item_definitions;
                },
              },
            );
          })(e),
          r = E(e);
        if (!o.data || !r.data) return null;
        const s = r.data.votes.find((e) => e.voteid == t);
        return null === (a = o.data.item_definitions) || void 0 === a
          ? void 0
          : a.find((e) => e.item_type == s.item_type);
      }
    },
    46521: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          ConfirmOverwriteVoteOrNominationDialog: () => O,
          EventDisplaySteamAwardNomination: () => V,
          EventDisplaySteamAwardVote: () => M,
          UserEligibleToNominateOrVote: () => k,
          WinterSaleSteamAwardVoteWrapper: () => F,
          default: () => R,
        });
      var n = a(85556),
        o = a(80751),
        i = a.n(o),
        r = a(54842),
        s = a(30750),
        d = a(27605),
        l = a(47427),
        c = a(64936),
        m = a(92280),
        u = a(15690),
        v = a(80886),
        g = a(1485),
        p = a(71741),
        S = a.n(p),
        _ = a(29480),
        A = a(16649),
        w = a(13129),
        h = a(31846),
        E = a(20417),
        f = a(13499),
        C = a(37563),
        y = a(27438),
        D = a(90069),
        N = a(46882),
        T = a(66079),
        G = a(52278),
        B = a.n(G),
        b = a(80212);
      function k(e) {
        return C.L7.logged_in
          ? !C.L7.is_limited ||
              ((0, D.AM)(
                l.createElement(T.r, {
                  strTokenOverride: e
                    ? "#SteamAward_Vote_LimitedAccount"
                    : "#SteamAward_Nominate_LimitedAccount",
                }),
                window,
              ),
              !1)
          : ((0, D.AM)(
              l.createElement(y.uH, {
                strTitle: (0, h.Xx)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, h.Xx)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, h.Xx)("#MobileLogin_SignIn"),
                onOK: b.Xt,
              }),
              window,
            ),
            !1);
      }
      function L(e, t) {
        var a, o;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const n =
              C.De.STORE_BASE_URL + "steamawards/ajaxgetsteamawardeventdetails",
            r = {
              rgCategories: e,
              t:
                ((s = c.JW.GetTimeNowWithOverride()),
                new Date(1e3 * s).toISOString().slice(0, 19).replace("T", " ")),
            };
          var s;
          try {
            const e = yield i().get(n, {
              params: r,
              withCredentials: !1,
              cancelToken: t.token,
            });
            if (t.token.reason) return null;
            if (
              1 ==
                (null === (a = null == e ? void 0 : e.data) || void 0 === a
                  ? void 0
                  : a.success) &&
              (null === (o = null == e ? void 0 : e.data) || void 0 === o
                ? void 0
                : o.event_details)
            )
              return e.data.event_details;
          } catch (e) {
            const t = (0, A.l)(e);
            console.error(
              "Could not fetch award event details:" + t.strErrorMsg,
              t,
            );
          }
          return null;
        });
      }
      const I = { include_assets: !0 };
      function V(e) {
        var t, a;
        const { event: n, lang: o, previewMode: i } = e,
          [r] = (0, s.SZ)(() => [n.GetSteamAwardCategory()]),
          d = (0, _.T)("EventDisplaySteamAwardNomination"),
          [u, v] = (0, l.useState)(null),
          { currentNomination: g, bLoadingNominationForCategory: p } = (0,
          m.NL)(r);
        if (
          ((0, l.useEffect)(() => {
            L([r], d).then((e) => {
              v(e);
            });
          }, [d, r]),
          !u ||
            !(null === (t = u.rgAwardCategoryDetails) || void 0 === t
              ? void 0
              : t.length) ||
            p)
        )
          return l.createElement(N.V, {
            size: "small",
            position: "center",
            string: (0, h.Xx)("#Loading"),
          });
        const A = c.JW.GetTimeNowWithOverride();
        if (!i && !u.bIsAutumnSaleActive)
          return l.createElement(
            "div",
            { className: B().ExpiredEventHeader },
            " ",
            (0, h.Xx)("#SteamAwards_ExpiredEvent"),
            " ",
          );
        let E = {};
        u.strBackgroundCSS.length && (E.backgroundColor = u.strBackgroundCSS),
          u.strBackgroundImage.length &&
            (E.backgroundImage = `url( ${u.strBackgroundImage} )`);
        const y =
            1 ==
            (null === (a = u.rgAwardCategoryDetails) || void 0 === a
              ? void 0
              : a.length),
          D =
            n.BIsEventActionEnabled() || A < n.GetStartTimeAndDateUnixSeconds(),
          T = new Date().getFullYear();
        return l.createElement(
          "div",
          {
            style: E,
            className: (0, w.Z)(B().SteamAwardContainer, S().PartnerEventFont),
          },
          l.createElement(
            "div",
            { className: B().SteamAwardHeader },
            l.createElement("img", {
              className: B().SteamAwardHeaderImage,
              src: `${u.strTrophyImg}`,
            }),
            l.createElement(
              "div",
              { className: B().SteamAwardMainCtn },
              l.createElement(
                "div",
                { className: B().SteamAwardMainTitle },
                (0, h.Xx)("#SteamAwards_EventMainTitle"),
              ),
              l.createElement(
                "div",
                { className: B().SteamAwardSubTitle },
                D
                  ? (0, h.Xx)("#SteamAwards_EventCallToAction")
                  : (0, h.Xx)("#SteamAwards_EventVotingDateTeaser", T),
                D &&
                  l.createElement(
                    "a",
                    {
                      href: (0, f.bk)(
                        C.De.STORE_BASE_URL + "steamawards/nominations/",
                      ),
                      className: B().SteamAwardLearnMore,
                    },
                    "(",
                    (0, h.Xx)("#EventDisplay_CallToAction_LearnMore"),
                    ")",
                  ),
              ),
              l.createElement(
                "div",
                { className: B().SteamAwardHeaderText },
                D
                  ? y
                    ? (0, h.Xx)(
                        "#SteamAwards_EventNominateGamePrompt_Long",
                        n.GetGameTitle(o),
                      )
                    : l.createElement(
                        "a",
                        {
                          className: B().LinkText,
                          href: (0, f.bk)(
                            C.De.STORE_BASE_URL + "steamawards/nominations/",
                          ),
                        },
                        (0, h.Xx)(
                          "#SteamAwards_EventNominateGamePrompt_NoCategory",
                          n.GetGameTitle(o),
                        ),
                      )
                  : (0, h.Xx)("#SteamAwards_Event_NominationsClosed"),
              ),
            ),
          ),
          l.createElement(x, {
            event: n,
            nominationEventDetails: u,
            currentNomination: g,
          }),
        );
      }
      function x(e) {
        var t;
        const { event: a, nominationEventDetails: o, currentNomination: i } = e,
          [r, d] = (0, s.SZ)(() => [a.GetSteamAwardCategory(), a.appid]),
          u = null == i ? void 0 : i.appid,
          v = (0, m.TW)(d, r, 0),
          p = Boolean(
            (null == i ? void 0 : i.appid) == d &&
              (null == i ? void 0 : i.category_id) == r,
          ),
          S = (0, l.useCallback)(
            (e) =>
              (0, n.mG)(this, void 0, void 0, function* () {
                if (!e)
                  return void console.log(
                    "EventDisplaySteamAwardNomination: ignore turning off the checkbox",
                  );
                if (!k(!1))
                  return void console.log(
                    "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                  );
                u && u != d
                  ? (0, D.AM)(
                      l.createElement(O, {
                        strLocTokenInfix: "Nomination",
                        newAppID: d,
                        curNominatedAppID: u,
                        fnOnConfirm: v.mutate,
                      }),
                      window,
                    )
                  : v.mutate();
              }),
            [u, d, v],
          ),
          _ = c.JW.GetTimeNowWithOverride(),
          A =
            1 ==
            (null === (t = o.rgAwardCategoryDetails) || void 0 === t
              ? void 0
              : t.length),
          E =
            a.BIsEventActionEnabled() || _ < a.GetStartTimeAndDateUnixSeconds();
        return A && (E || p)
          ? l.createElement(
              "div",
              { className: B().SteamAwardVoteWidget },
              l.createElement(
                "div",
                { className: B().NominateCtn },
                l.createElement(
                  "div",
                  {
                    style: {
                      background:
                        null == o ? void 0 : o.strNominateButtonBGColor,
                    },
                    className: (0, w.Z)(
                      B().SteamAwardNominateButton,
                      p && B().Nominated,
                    ),
                  },
                  l.createElement(g.ji, {
                    controlled: !0,
                    className: (0, w.Z)(
                      B().SteamAwardVoteCheckBox,
                      p && B().Nominated,
                    ),
                    checked: p,
                    onChange: S,
                    disabled: p,
                    color: "#FFFFFF",
                    highlightColor: "white",
                    label: l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        "div",
                        { className: B().SteamAwardCategoryTitle },
                        p
                          ? (0, h.kQ)(
                              "#SteamAwards_NominateWidget_CTA_PastTense",
                              o.rgAwardCategoryDetails[0]
                                .strSuggestedCategoryTitle,
                            )
                          : (0, h.kQ)(
                              "#SteamAwards_NominateWidget_CTA",
                              o.rgAwardCategoryDetails[0]
                                .strSuggestedCategoryTitle,
                            ),
                      ),
                    ),
                  }),
                ),
                l.createElement(
                  "span",
                  { className: B().SteamAwardCategoryDesc },
                  o.rgAwardCategoryDetails[0].strSuggestedCategoryDesc,
                ),
              ),
              Boolean(E && r != o.eLaborOfLove) &&
                l.createElement(
                  "div",
                  { className: B().SteamAwardLinkToNominationPage },
                  l.createElement(
                    "a",
                    {
                      href: (0, f.bk)(
                        C.De.STORE_BASE_URL + "steamawards/nominations/",
                      ),
                    },
                    (0, h.Xx)(
                      "#SteamAwards_EventNominationAlternativeLinkText",
                    ),
                  ),
                ),
            )
          : null;
      }
      function O(e) {
        const {
            curNominatedAppID: t,
            newAppID: a,
            strLocTokenInfix: n,
            fnOnConfirm: o,
            fnOnCancel: i,
            closeModal: r,
          } = e,
          [s] = (0, v.vs)(t, I),
          [d] = (0, v.vs)(a, I);
        return l.createElement(
          y.uH,
          {
            modalClassName: B().SteamAwardConflictModal,
            strTitle: (0, h.Xx)(`#SteamAward_${n}ConflictWarning_Title`),
            strDescription: (0, h.kQ)(
              `#SteamAward_${e.strLocTokenInfix}ConflictWarning_Explanation`,
              l.createElement(
                "span",
                { className: B().SteamAwardModalGameTitle },
                null == s ? void 0 : s.GetName(),
              ),
              l.createElement(
                "span",
                { className: B().SteamAwardModalGameTitle },
                null == d ? void 0 : d.GetName(),
              ),
            ),
            closeModal: r,
            onOK: o,
            onCancel: i,
          },
          Boolean(!s || !d)
            ? l.createElement(N.V, {
                size: "small",
                position: "center",
                string: (0, h.Xx)("#Loading"),
              })
            : l.createElement(
                "div",
                { className: B().NominationSwitchCtn },
                l.createElement("img", {
                  src: s.GetAssets().GetSmallCapsuleURL(),
                }),
                "→",
                l.createElement("img", {
                  src: d.GetAssets().GetSmallCapsuleURL(),
                }),
              ),
        );
      }
      let M = class extends l.Component {
        constructor(e) {
          super(e),
            (this.state = { eCategoryLoaded: null, votedForAppID: null }),
            (this.m_strPreviousVotedForAppTitle = null),
            (this.m_cancelSignal = i().CancelToken.source()),
            (0, r.rC)(this);
        }
        componentDidMount() {
          this.FetchVoteState();
        }
        componentDidUpdate() {
          this.props.eVoteCategory != this.state.eCategoryLoaded &&
            this.FetchVoteState();
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "EventDisplaySteamAwardVote is being unmounted",
          );
        }
        FetchVoteState() {
          var e;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = C.De.STORE_BASE_URL + "steamawards/ajaxgetuservotes";
            if (C.L7.logged_in)
              try {
                const a = yield i().get(t, {
                  withCredentials: !0,
                  cancelToken: this.m_cancelSignal.token,
                });
                if (this.m_cancelSignal.token.reason) return;
                1 ==
                  (null === (e = null == a ? void 0 : a.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                  a.data.votes &&
                  this.UpdateVoteState(a.data.votes);
              } catch (e) {
                const t = (0, A.l)(e);
                console.error(
                  "Could not fetch previous votes:" + t.strErrorMsg,
                  t,
                );
              }
            else this.UpdateVoteState([]);
          });
        }
        UpdateVoteState(e) {
          var t;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a = this.props.eVoteCategory,
              n = e[a];
            if (
              (this.setState({ eCategoryLoaded: a, votedForAppID: n }),
              n && n != this.props.appID)
            ) {
              if (
                (yield u.Z.Get().QueueAppRequest(n, {}),
                this.m_cancelSignal.token.reason)
              )
                return;
              this.props.eVoteCategory == a &&
                (this.m_strPreviousVotedForAppTitle =
                  null === (t = u.Z.Get().GetApp(n)) || void 0 === t
                    ? void 0
                    : t.GetName());
            }
          });
        }
        OnVoteClick() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const e = this.props.eVoteCategory;
            if (e != this.state.eCategoryLoaded) return;
            if (!k(!0)) return;
            const t = this.props.appID;
            this.state.votedForAppID && this.state.votedForAppID != t
              ? this.HandleConflict(() => this.SaveVote(e, t))
              : this.SaveVote(e, t);
          });
        }
        HandleConflict(e) {
          const t = u.Z.Get().GetApp(this.props.appID);
          (0, D.AM)(
            l.createElement(O, {
              strLocTokenInfix: "Vote",
              newAppID: null == t ? void 0 : t.GetAppID(),
              curNominatedAppID: this.state.votedForAppID,
              fnOnConfirm: e,
              fnOnCancel: () => {},
            }),
            window,
          );
        }
        SaveVote(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.setState({ eCategoryLoaded: e, votedForAppID: t }),
              this.props.previewMode && 1 == C.De.EUNIVERSE)
            )
              return;
            const a = C.De.STORE_BASE_URL + "steamawards/ajaxvoteforgame",
              n = new URLSearchParams();
            n.append("sessionid", C.De.SESSIONID),
              n.append("categoryid", e.toString()),
              n.append("appid", t.toString());
            try {
              const e = yield i().post(a, n, {
                withCredentials: !0,
                cancelToken: this.m_cancelSignal.token,
              });
              if (this.m_cancelSignal.token.reason) return;
              (e && 200 == e.status && 1 == e.data.success) ||
                console.error("Vote request failed.", e && (0, A.l)(e));
            } catch (e) {
              const t = (0, A.l)(e);
              console.error("SaveVote failed: " + t.strErrorMsg, t);
            }
          });
        }
        render() {
          const e = this.props.eVoteCategory,
            t =
              this.state.eCategoryLoaded == e &&
              this.state.votedForAppID == this.props.appID;
          return this.props.bIsEventActionEnabled || this.props.previewMode || t
            ? l.createElement(
                "div",
                { className: (0, w.Z)(B().SteamAwardVoteWidget) },
                l.createElement("div", { className: B().SteamAwardVotePrompt }),
                l.createElement(
                  "div",
                  { className: B().SteamAwardVoteButtonArea },
                  l.createElement(
                    "div",
                    {
                      className: (0, w.Z)(
                        B().SteamAwardCategoryTitle,
                        B().VotingTitle,
                      ),
                    },
                    this.props.strCategoryTitle,
                  ),
                  !this.props.bRenderFromStorePage &&
                    l.createElement(
                      "span",
                      { className: B().SteamAwardCategoryDesc },
                      this.props.strCategoryDesc,
                    ),
                  t
                    ? l.createElement(
                        "div",
                        { className: B().SteamAwardVoteButtonSubmitted },
                        l.createElement(
                          "span",
                          { className: B().SteamAwardVoteButtonText },
                          (0, h.Xx)("#SteamAward_VoteButton_VotedText"),
                        ),
                      )
                    : l.createElement(
                        "button",
                        {
                          className: B().SteamAwardVoteButton,
                          onClick: this.OnVoteClick,
                        },
                        l.createElement(
                          "span",
                          { className: B().SteamAwardVoteButtonText },
                          (0, h.Xx)("#SteamAward_VoteButton_PromptText"),
                        ),
                      ),
                ),
              )
            : null;
        }
      };
      (0, n.gn)([r.LO], M.prototype, "m_strPreviousVotedForAppTitle", void 0),
        (0, n.gn)([E.ak], M.prototype, "OnVoteClick", null),
        (0, n.gn)([E.ak], M.prototype, "SaveVote", null),
        (M = (0, n.gn)([d.Pi], M));
      class R extends l.Component {
        constructor(e) {
          super(e);
          let t = (0, C.kQ)("steamwawards", "application_config");
          this.m_voteCategories = null == t ? void 0 : t.votecategories;
        }
        render() {
          return this.m_voteCategories
            ? l.createElement(F, {
                appID: this.props.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: this.m_voteCategories,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${this.props.appID}`,
              ),
              null);
        }
      }
      let F = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_cancelSignal = i().CancelToken.source()),
            (this.m_awardEventDetails = null),
            (0, r.rC)(this),
            (this.state = { bAppInfoLoaded: !1 });
        }
        componentDidMount() {
          u.Z.Get()
            .QueueAppRequest(this.props.appID, {})
            .then(() => {
              u.Z.Get().BHasApp(this.props.appID) &&
                this.setState({ bAppInfoLoaded: !0 });
            }),
            L(this.props.voteCategories, this.m_cancelSignal).then((e) => {
              this.m_awardEventDetails = e;
            });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "WinterSaleSteamAwardVoteWrapper is being unmounted",
          );
        }
        GetNominatedAwardCategories() {
          var e;
          let t = [];
          return (
            null === (e = this.m_awardEventDetails.rgAwardCategoryDetails) ||
              void 0 === e ||
              e.forEach((e) => {
                t.push(
                  l.createElement(
                    M,
                    Object.assign(
                      {
                        key: e.eSteamAwardCategoryID,
                        eVoteCategory: e.eSteamAwardCategoryID,
                        strCategoryDesc: e.strSuggestedCategoryDesc,
                        strCategoryTitle: e.strSuggestedCategoryTitle,
                      },
                      this.props,
                    ),
                  ),
                );
              }),
            t
          );
        }
        render() {
          var e;
          if (!this.state.bAppInfoLoaded || !this.props.voteCategories)
            return null;
          if (!this.m_awardEventDetails) return null;
          let t = {};
          return (
            this.m_awardEventDetails.strBackgroundCSS.length &&
              (t.backgroundColor = this.m_awardEventDetails.strBackgroundCSS),
            this.m_awardEventDetails.strBackgroundImage.length &&
              (t.backgroundImage = `url( ${this.m_awardEventDetails.strBackgroundImage} )`),
            l.createElement(
              "div",
              {
                style: t,
                className: (0, w.Z)(
                  B().SteamAwardContainer,
                  S().PartnerEventFont,
                ),
              },
              l.createElement(
                "div",
                { className: B().SteamAwardHeader },
                l.createElement("img", {
                  className: B().SteamAwardHeaderImage,
                  src: this.m_awardEventDetails.strTrophyImg,
                }),
                l.createElement(
                  "div",
                  { className: B().SteamAwardMainCtn },
                  l.createElement(
                    "div",
                    { className: B().SteamAwardMainTitle },
                    " ",
                    (0, h.Xx)("#SteamAwards_EventMainTitleCombined"),
                    " ",
                  ),
                  l.createElement(
                    "div",
                    { className: B().SteamAwardHeaderText },
                    this.props.bIsEventActionEnabled
                      ? l.createElement(
                          l.Fragment,
                          null,
                          (0, h.Xx)(
                            "#SteamAwards_EventVoteForGamePrompt",
                            null === (e = u.Z.Get().GetApp(this.props.appID)) ||
                              void 0 === e
                              ? void 0
                              : e.GetName(),
                          ),
                          l.createElement(
                            "a",
                            {
                              href: (0, f.bk)(
                                C.De.STORE_BASE_URL + "steamawards/",
                              ),
                              className: (0, w.Z)(
                                B().SteamAwardLearnMore,
                                B().BottomRight,
                              ),
                            },
                            (0, h.Xx)("#EventDisplay_CallToAction_LearnMore"),
                          ),
                        )
                      : l.createElement(
                          "a",
                          {
                            href: (0, f.bk)(
                              C.De.STORE_BASE_URL + "steamawards/",
                            ),
                            className: B().LinkText,
                          },
                          (0, h.Xx)("#SteamAwards_Event_VotesClosed"),
                        ),
                  ),
                  l.createElement(
                    "div",
                    { className: B().AwardCategoriesCtn },
                    this.GetNominatedAwardCategories(),
                  ),
                ),
              ),
            )
          );
        }
      };
      (0, n.gn)([r.LO], F.prototype, "m_awardEventDetails", void 0),
        (F = (0, n.gn)([d.Pi], F));
    },
  },
]);

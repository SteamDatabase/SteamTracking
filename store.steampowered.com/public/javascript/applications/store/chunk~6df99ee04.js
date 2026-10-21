/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [75976],
    {
      22673: (d, B, t) => {
        "use strict";
        t.d(B, { u: () => C, c: () => f });
        var P = t(37901);
        const a = {};
        (a.arabic = () => t.e(98135).then(t.t.bind(t, 98135, 19))),
          (a.brazilian = () => t.e(32427).then(t.t.bind(t, 32427, 19))),
          (a.bulgarian = () => t.e(56708).then(t.t.bind(t, 56708, 19))),
          (a.czech = () => t.e(18914).then(t.t.bind(t, 18914, 19))),
          (a.danish = () => t.e(15670).then(t.t.bind(t, 15670, 19))),
          (a.dutch = () => t.e(93067).then(t.t.bind(t, 93067, 19))),
          (a.english = () => t.e(52777).then(t.t.bind(t, 52777, 19))),
          (a.finnish = () => t.e(73934).then(t.t.bind(t, 73934, 19))),
          (a.french = () => t.e(31055).then(t.t.bind(t, 31055, 19))),
          (a.german = () => t.e(1509).then(t.t.bind(t, 1509, 19))),
          (a.greek = () => t.e(89553).then(t.t.bind(t, 11934, 19))),
          (a.hungarian = () => t.e(92760).then(t.t.bind(t, 92760, 19))),
          (a.indonesian = () => t.e(41411).then(t.t.bind(t, 41411, 19))),
          (a.italian = () => t.e(3905).then(t.t.bind(t, 3905, 19))),
          (a.japanese = () => t.e(15816).then(t.t.bind(t, 15816, 19))),
          (a.koreana = () => t.e(40202).then(t.t.bind(t, 40202, 19))),
          (a.latam = () => t.e(61090).then(t.t.bind(t, 61090, 19))),
          (a.malay = () => t.e(94841).then(t.t.bind(t, 94841, 19))),
          (a.norwegian = () => t.e(71693).then(t.t.bind(t, 71693, 19))),
          (a.polish = () => t.e(57258).then(t.t.bind(t, 57258, 19))),
          (a.portuguese = () => t.e(49994).then(t.t.bind(t, 49994, 19))),
          (a.romanian = () => t.e(61540).then(t.t.bind(t, 61540, 19))),
          (a.russian = () => t.e(13956).then(t.t.bind(t, 13956, 19))),
          (a.sc_schinese = () => t.e(58430).then(t.t.bind(t, 58430, 19))),
          (a.schinese = () => t.e(56983).then(t.t.bind(t, 56983, 19))),
          (a.spanish = () => t.e(80657).then(t.t.bind(t, 80657, 19))),
          (a.swedish = () => t.e(91712).then(t.t.bind(t, 91712, 19))),
          (a.tchinese = () => t.e(27228).then(t.t.bind(t, 27228, 19))),
          (a.thai = () => t.e(57001).then(t.t.bind(t, 57001, 19))),
          (a.turkish = () => t.e(17681).then(t.t.bind(t, 17681, 19))),
          (a.ukrainian = () => t.e(93275).then(t.t.bind(t, 93275, 19))),
          (a.vietnamese = () => t.e(23352).then(t.t.bind(t, 23352, 19)));
        async function D(o) {
          if (a[o]) return a[o]();
        }
        const f = (0, P.l)(D);
        function C(o, i, c, p, ...m) {
          const s = `${i}${c ? "_second" : "_third"}`;
          if (o.HasKey(s))
            return c ? o.LocalizeReact(s, ...m) : o.LocalizeReact(s, p, ...m);
          if (o.HasKey(i)) return o.LocalizeReact(i, ...m);
        }
      },
      1012: (d, B, t) => {
        "use strict";
        t.d(B, { b: () => m });
        var P = t(90626),
          a = t(84797),
          D = t(68622),
          f = t(32339),
          C = t(4452),
          o = t(90281);
        const i = { 2022: a, 2023: D, 2024: f, 2025: C, 2026: o },
          c = Object.values(i).reduce((s, y) => ({ ...s, ...y }), {}),
          p = 2022;
        function m(s) {
          return (0, P.useMemo)(() => {
            const y = i[s] ?? i[p];
            return { ...c, ...y };
          }, [s]);
        }
      },
      54407: (d, B, t) => {
        "use strict";
        t.d(B, { B3: () => F, KM: () => M, KT: () => R });
        var P = t(41735),
          a = t.n(P),
          D = t(58632),
          f = t.n(D),
          C = t(90626),
          o = t(80902),
          i = t(75233),
          c = t(72604),
          p = t(76559),
          m = t(34592),
          s = t(3166),
          y = t(35038),
          I = t(27386),
          T = t(68312);
        const O = "nicknames";
        function M(n) {
          const g = (0, T.KV)(),
            { data: l, isLoading: e } = (0, o.I)({
              queryKey: [O],
              queryFn: async () => {
                const h = new Map();
                if (s.iA.logged_in) {
                  const r = y.w.Init(I.w_T),
                    G = (await I.xtC.GetNicknameList(g, r)).Body().toObject();
                  G?.nicknames &&
                    G.nicknames.length > 0 &&
                    G.nicknames.forEach((u) => {
                      u.accountid &&
                        u.nickname &&
                        h.set(u.accountid, u.nickname);
                    });
                }
                return h;
              },
            });
          return l ? l.get(n) : null;
        }
        async function L(n) {
          if (!n || n.length == 0) return [];
          const g =
            (0, s.yK)() == "community"
              ? s.TS.COMMUNITY_BASE_URL
              : s.TS.STORE_BASE_URL;
          if (n.length == 1) {
            const l = { accountid: n[0], origin: self.origin },
              e = await a().get(`${g}actions/ajaxgetavatarpersona`, {
                params: l,
              });
            if (
              !e ||
              e.status != 200 ||
              e.data?.success != c.R ||
              !e.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, m.H))(e).strErrorMsg}`;
            return [e.data.userinfo];
          } else {
            const l = { accountids: n.join(","), origin: self.origin },
              e = await a().get(`${g}actions/ajaxgetmultiavatarpersona`, {
                params: l,
              });
            if (
              !e ||
              e.status != 200 ||
              e.data?.success != c.R ||
              !e.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, m.H))(e).strErrorMsg}`;
            const h = new Map();
            return (
              e.data.userinfos.forEach((r) =>
                h.set(new p.b(r.steamid).GetAccountID(), r),
              ),
              n.map((r) => h.get(r))
            );
          }
        }
        const S = new (f())((n) => L(n), { cache: !1 }),
          v = "avatarandpersonas";
        function E(n) {
          return [v, n];
        }
        function R(n) {
          const { data: g, isLoading: l } = (0, o.I)({
            queryKey: E(n),
            queryFn: () => S.load(n),
          });
          return [g, l];
        }
        function F(n) {
          const g = (0, i.jE)(),
            { data: l, isLoading: e } = (0, o.I)({
              queryKey: [v, n],
              queryFn: async () => {
                const r = await S.loadMany(n);
                return (
                  r.forEach((A) => {
                    if (A instanceof Error) return;
                    const G = [v, new p.b(A.steamid).GetAccountID()];
                    g.setQueryData(G, A);
                  }),
                  r
                );
              },
              enabled: n?.length > 0,
            }),
            h = (0, C.useMemo)(() => {
              const r = new Array();
              return (
                l?.forEach((A) => {
                  A instanceof Error || r.push(A);
                }),
                r
              );
            }, [l]);
          return e ? null : h;
        }
        function x(n) {
          return ReactQueryClient.getQueryData([v, n]);
        }
      },
      84797: (d) => {
        d.exports = {
          new_games_color: "#3cdf6a",
          used_games_color: "#4df",
          old_games_color: "#e496ff",
          pie_windows: "#28aee1",
          pie_linux: "#cd4141",
          pie_deck: "#9c85d1",
          pie_mac: "#939a9d",
          pie_vr: "#55af30",
          topApp_0: "#00a299",
          topApp_1: "#017baa",
          topApp_2: "#044fbb",
          topApp_3: "#2325b9",
          topApp_4: "#4a17a6",
          topApp_5: "#881abf",
          topApp_6: "#bf1a72",
          topApp_7: "#cb5545",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_1mCWTI0JoiDqCmO8bDDES5",
          SingleGame: "_2sI9nEpezKWeRW_uX3zDe9",
          ImageTint: "_1KFiu2aZBbuwvWHItKoR7-",
          Section: "ZbHrxezu8VrBxMPSTh9z3",
          StreakSizeFullBar: "_14BklrGtK29m79DW3nqHWV",
          LongestStreakBgImage: "_3bCDTuFBTstThIkVu8rZAK",
          Tab: "_2RZyYiWAwDAPtAyy1l4EhC",
          UserName: "_3ZGQww28rxBs_rNFt4A-Z",
          ConclusionName: "_2QHBE_5MFY0OIfAJK-6KPs",
          GridItem: "_3JsZSm646Y5ZkGhpSOODAW",
          AchievementBlock: "_2DHea-Spjx2dRqPQcVfpqw",
          StreakBlock: "_2Sd0qjwv69VPg701ROB46l",
          HardwareBlock: "_2KTGrVdH4bYO-rOyHaGaXe",
          DeviceBlock: "_33YJLXitiubERYxUXrbecK",
          SummaryCtnShadow: "_3eIkBGJSxL654zOmmOBOz7",
          BackgroundImage: "_36jZ71s237_s23yxdQgPFO",
          SummaryCtn: "_2l4E7GqLFXFY_rYWRbFOIt",
          TopHonorsSection: "_24OE-kMDyDQ0Ci29zIPqdq",
          MissingUserCtn: "_3L0BnaPXE2Nuz3x60nrf8",
          GenericBackground: "_1h36ybUWs1ZX5telCOk0XC",
          LogInCtn: "_26pjxsotAYqvNMpivHzvaw",
          FriendCtn: "_1mZ6NQJ_g6wG-NdlN86ksm",
          TopGameBlockContainer: "_36knYDLxQo9AaZviPf_cnn",
          OddGradient: "_1mrNpFA8PEjfLYXmvbboJl",
          EvenGradient: "uGK9CVVk1pMAHGs62QINl",
          TopMostGame: "_2pfc8dJefQjNg6UM3yLz9q",
          FirstPlayCtn: "_1TBDwSyyCkodf5oKezdape",
          GamePlayDetails: "vqmq5_0SK8i0bpeppqxnx",
          PlatformChartsCtn: "_2PR724R2IuabDLtoLxWpfk",
          IconAchievement: "_2IjTrxdj_wI9Gh7_aMbZTM",
          IconGamesPlayed: "_1pYbm7SYRqjtbSjm99vybx",
          IconStreak: "_3wrtHF8HGJ6k-7gSKy9tHu",
          PlayBehaviorContainer: "tiuwqat5VX9DqGp1wTasT",
          ProgressBarFilled: "_2TAF9zz_FTeA_XA7NabVmT",
          ProgressBarFilledGradient: "_2Jn-XMt83DMEbyRglDjPZ-",
          GameNewnessTitle: "_2S-kJn2DuxoMMQRJoCDp5K",
          NewActive: "_3nz5W7FAYvN2-2n0MuWlwo",
          DataBoxArrow: "_1EoUlR9aVJ5EMp7C5CYdlJ",
          Background: "DxFS4y1E5x3-FXRmvNTjr",
          UserData: "mjYOxpO92Sjjaq1vI0nPa",
          DataBox: "_1TC4ZL8Igk0UZwM5n37MPP",
          SteamData: "_1muEXi8fQZowcGSWQIP5EF",
          Border: "_3APY0jBERnHXknBhjYaKzK",
          PercentageLabel: "grEIxWPqvyXbDSONzpGyk",
          Color: "_1jd63YNjr7wMQzLdB_QziW",
          PercentageDescriptionLabel: "etu3gC0CbXo-55a8VnGLb",
          UsedActive: "_3cggzJW9YF-UN83xHTZQ8v",
          OldActive: "_2e8Hfol5roqPlMlmMEe4jK",
          AllGamesBGImage: "_3ugWpF65a-Hzz9zZbMdFei",
          SeeRewindButton: "_25JDT1O9te5Afb7dDcz4ry",
          MMFrame: "_34F3ONj5DcTlh_joG-sHu5",
          MMOverride: "_3410LOeYZJjY6R_H4U0YuQ",
          Header: "_1wRDr7Zzwg-daOQ9jG5qY5",
          YearSubtitle: "yqOBUuUlT4ChD5MB4Gfmb",
          ReplayLogo: "_1Dj2Lm_eGilmq2aTCNLmKz",
          ReplayLogoAccent: "_1boFekf-O9JBLOKZNRGpGL",
          Hashtag: "rUjuX2Th6QbH4f1-l8H3c",
          Avatar: "_3TIPQVu2JQ0Pp0s4DBxqdN",
          DataBlock: "_2ZVTo1HmTUnFF3TNZBarJ3",
          PersonaName: "_1n5x7nxPhP-Sq0AhY5ssVm",
          ReplayHighlight: "_1t179jT3miESogxBPLvKso",
          ViewPageButton: "jIjgB6ZoOX1pa2GftI1RS",
          Description: "_1vouHy7Qkdo_QusE7gHag1",
          OtherYearLink: "_1i52pDXbOiguTescoinJBz",
        };
      },
      68622: (d) => {
        d.exports = {
          new_games_color: "#d67070",
          used_games_color: "#683db4",
          old_games_color: "#3898b0",
          pie_windows: "#d67070",
          pie_linux: "#683db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_10kzTTAtqaz13b6p7OjG8S",
          scaleBackground: "_1WW8z64-BrcfAZZpgbuRTM",
          SingleGame: "_2Pj3-6RWhMQHDGPtVx1ftl",
          ImageTint: "RdmGip0ngXjp9kSzfsMuc",
          Section: "_1ihw3wAprvhicFWLMrq7hf",
          StreakSizeFullBar: "_3s6e74lp5bDTtWMnpcnBbA",
          LongestStreakBgImage: "_1GiTU8n2lD-sPz0sCR0Xhj",
          Tab: "_25kqUwukU9GN1Ef9tihV6L",
          UserName: "_1eLSYaRNKbAsXOhQTsmW1V",
          ConclusionName: "_3Xy9Cx3rQeyhPKSjwGEfl6",
          GridItem: "_3xyYnoaptMoTZ1HqL_koRs",
          AchievementBlock: "_1M433GBUUxgHItBhMw0U94",
          StreakBlock: "_2X6mwNm61FuayA-l1afHjg",
          HardwareBlock: "GImwL8nsYgPpolltUalGf",
          DeviceBlock: "_2s1BbZknfTzGiX0KPWI6sQ",
          SummaryCtnShadow: "_18moaZsJq2bOBUKUFkgZXW",
          BackgroundImage: "_1LIoXPNaAmjCNg--cqeYNJ",
          SummaryCtn: "_2iEZg9UeJZPaXWH8DEQgAY",
          TopHonorsSection: "_3pGXxrtry6vbrbKN05WUO6",
          FriendCtn: "_2W45uTzo4s5qj5DLPHUt2f",
          TopGameBlockContainer: "_36jqv5rato1nA9_Fm4TgqO",
          OddGradient: "_2humxv5J-6yJS4voPPdZ2t",
          EvenGradient: "_2Ri1edchogFKwyEY3XKJiq",
          TopMostGame: "_3AeiaW8hpnC1ONnWJUXAj5",
          GamePlayDetails: "il8qj5ZbFvylAOOLUaNtV",
          PlatformChartsCtn: "_1VlT4dTCqBdYP-i3bxLhyJ",
          gradient: "DcluJQjgDbSdO-U954rux",
          IconAchievement: "_1dt08I2SCDobYoSlg6xjqf",
          IconGamesPlayed: "_3Zy7ueS4aunldSTv-YA2GT",
          IconStreak: "_22reoVLCzn-Fuh73p1pXr5",
          PlayBehaviorContainer: "_1U1ZuwB1L9K4CPqioL0e5s",
          ProgressBarFilled: "_3NgeYY9GD7yBtWM_upyPTT",
          ProgressBarFilledGradient: "_2WMTIhxpdYdVPW8qMMaMIR",
          GameNewnessTitle: "_3kzRWYdjSiT3NFAj2oVTVY",
          NewActive: "_3YOjggFXHQrDGODGISowUn",
          DataBoxArrow: "_2V5vsfJLUUAm8Dkwco2jw9",
          Background: "_1P7u77iRdWEMNFa_uDOAgx",
          UserData: "sT4Y_Mssd38IykTqpNttI",
          DataBox: "sw8ZdGxYqpVlDpQ-O0ymi",
          SteamData: "_3QBOqe7aPF_N0gIqkC9fmI",
          Border: "_1LJoYGt4cvMN5B1_sAJP8f",
          PercentageLabel: "_6GBP_G16XsdGbYC8NTZh6",
          Color: "_5AuLAC-w6VzF8QR5dj5Xt",
          PercentageDescriptionLabel: "SsulucKQh-HigrEyVzMIg",
          UsedActive: "_3kPVLKj0dwg8U5A6Fg7ISA",
          OldActive: "_3n3sqX8WsGOyPAMMvYy_O-",
          AllGamesBGImage: "Da4bxMaQBEGNrVrq5DpDH",
          SeeRewindButton: "_288f6z1gFOsYlF9sPrQjGL",
          MMFrame: "_2uL2aC9JTgz2OiBYlYh0OV",
          MMOverride: "_3r4GfYoEmqFKtRaTHW4kce",
          Header: "_2a2ceVKfNdvTRhuk5GSdns",
          YearSubtitle: "_2p3PzXE3K1nmqcMQq3_IfL",
          ReplayLogo: "_3LKGj8E0hxcbos8M02X8Z5",
          ReplayLogoAccent: "QA6ZiaAVMlmpcQ76Vh1ai",
          Hashtag: "u0AZ32D3fSCUz7g34qqez",
          Avatar: "_1YfBn_vDDQheFIvB_NS8jT",
          DataBlock: "_2k0fIZXO_T84nzNLVPk3_8",
          PersonaName: "cUavdbPuv_0xdR4Dn9zos",
          ReplayHighlight: "_17c5leGvLNSi5Ww9tu6KYI",
          ViewPageButton: "AwTMLvj9vwwJanUhUW0md",
          Description: "_L5X9igrHe9C6CwhZe_ny",
          OtherYearLink: "_1fHTilDQDzxqV57h1u1xHI",
        };
      },
      32339: (d) => {
        d.exports = {
          "duration-app-launch": "800ms",
          new_games_color: "#34f3fe",
          used_games_color: "#cc6670",
          old_games_color: "#f4d760",
          pie_windows: "#d67070",
          pie_linux: "#aa3db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_3OQ6rgJBkGnH9Bf6r2e3HL",
          scaleBackground: "_3JN7ZUgVCUsaPMpmqP7TwR",
          SingleGame: "_1HbdEudMGphunPB0JEXg7i",
          ImageTint: "_1gfY6mgm47-kMTUtqR0-Ou",
          Section: "tRbx_6RHxbCDIMagDBI8p",
          LongestStreakBgImage: "_1MVdzFDJOXawdsqr3Yhqsw",
          StreakSizeFullBar: "_36N_E04MlrcS-OcKDAtap2",
          Tab: "_1KD4j_7fmsom6XcRjCdT0Q",
          UserName: "WSDA_clh_9sxDy4zdmbjD",
          ConclusionName: "_1gHhZmVSITXh31m_yruKhR",
          SummaryCtnShadow: "_2-LqaFKV7kacR8awEnhfJX",
          GridItem: "_3OZGvnLThiIYbr4Ouh2bxp",
          BackgroundImage: "_2aMzl_Delss7H1rWla6XDB",
          FriendCtn: "_1_-90oN_7p0LZPblYQBANu",
          TopGameBlockContainer: "_1Y5fJhtMjArQRouT4r3-C7",
          BackgroundImageFull: "_3MOFeHUyOuqaV0X3Yr3VNf",
          OddGradient: "_3ZMWDI255mEZaJyC56j0wL",
          EvenGradient: "Juac3ZakPmb2mXfPy5vYL",
          TopMostGame: "_1hCC5kg_wi3ka5DgsPuQSB",
          GamePlayDetails: "_3rUVGxkgXErfzS1dUw-09d",
          PlatformChartsCtn: "_37_pY_aEthje0YSZyP7Cs3",
          gradient: "_3Z_LYJhCqdb8ZUUwCdpQgr",
          TopHonorsSection: "_1JuNaCUGgdEe4Kg1wwxKiC",
          SectionDesc: "frtdAP-rVslnmtiDFU5hj",
          IconAchievement: "_1blrLRqm7dIEf-KlyXeucX",
          IconGamesPlayed: "_3mFHXBXxcqOg-QN0otvPIV",
          IconStreak: "_1BAN0pj-aWkXRxswwHZqJ6",
          PlayBehaviorContainer: "_3K-BxOFebKlIgA3KHN3fRd",
          ProgressBarFilled: "_149r1AuXIu7SWFlKGFPK2g",
          ProgressBarFilledGradient: "_1dBow-Dbmq4zxmKY1jgQAn",
          GameNewnessTitle: "_3yTxsy6ozFIGQBi_USS7Wq",
          NewActive: "_3Q-lCYrQuOslt990fq-rr6",
          DataBoxArrow: "_1op5IwtjH5Lq0XP38WK3LT",
          Background: "_2j3GatBNdCKuNabv1m37Yq",
          UserData: "_3m-Ki0zq5OMIcIZ41vG6wU",
          DataBox: "ezwPo6nwskfStGExxxe2",
          SteamData: "_3ki5fNFYPN-mUpMWp_7yBc",
          Border: "_3OeymkaW96P8-ADBuNVDju",
          PercentageLabel: "_3JxJmNw4L3TNLr0RgUvc-J",
          Color: "GDFSAsxyT5cjNE1qUDVjI",
          PercentageDescriptionLabel: "LkZ04ZMADGM3ycZyxP335",
          UsedActive: "_1GIOMMTrITyIDVa9Vjc6JE",
          OldActive: "_3U-IfPH0I8djRe2moFvzuF",
          AllGamesBGImage: "_1yRd48MGRuylzC44_4Dmgb",
          SeeRewindButton: "mf6UTLxYSeiKkvIhlAodx",
          MMFrame: "_2vqAzxON4lE_16iKxhv8qT",
          MMOverride: "_2HmEzExHY4aeyBFI6MUXmT",
          Header: "_3gOcUL_xfcBkYU0g20TaXb",
          YearSubtitle: "_3UwJLn8p1rV25mjYmzwrVA",
          ReplayLogo: "_221R7vRZej1-5Itjx416tA",
          ReplayLogoAccent: "_18J6u_1IgoXwwOwNs17yBg",
          Hashtag: "_3bTOGmEBF0FW3IZn63KpR7",
          Avatar: "_2zdVUZKCn5qRHBOk2Wvvhh",
          DataBlock: "Cop9oURErdKz-xnG00D19",
          PersonaName: "_1yc5XlMVWWlXCsludrsGM8",
          ViewPageButton: "_8vh-tS_EH62zvZbZzF6Bq",
          Description: "_1ImcGBhCVlOyWddPGdtGz9",
          OtherYearLink: "_3LrPDKdIcbQ34J2OlNHDXh",
        };
      },
      4452: (d) => {
        d.exports = {
          "duration-app-launch": "800ms",
          new_games_color: "#34f3fe",
          used_games_color: "#cc6670",
          old_games_color: "#f4d760",
          pie_windows: "#d67070",
          pie_linux: "#aa3db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_2s7mIvwS-3CubLZ0qh2JUW",
          scaleBackground: "_26thFVUdrVT5cwl3ZNo621",
          SingleGame: "Oi2hkZjaYSLMdFBa10fFW",
          ImageTint: "_4dii7ZD-CzK6Hdr_1zFfz",
          Section: "_1boQl7oW6GufFP0tCEqgPg",
          LongestStreakBgImage: "Rb3f3N7xL755z9IQo1z3a",
          StreakSizeFullBar: "_3232l-2EN_vmaNNFhu8wYg",
          Tab: "_2oU8grgLlvrP-1kypqcmjG",
          UserName: "_3tdBf9Fq7kubW0eXl3uhhM",
          ConclusionName: "_1fViacRZXSttKAoUhRITId",
          SummaryCtnShadow: "_2BWKGdK_xOyg1l3a2AgT4Z",
          GridItem: "_1NKomKIPmTDGyDrAtz-2d4",
          BackgroundImage: "_3wN5uwJqxQEIAmXkzKmCFm",
          FriendCtn: "_64HO5Fgwc4BRCG8pcDvno",
          TopGameBlockContainer: "DFb2vstqM2m5UIqllW6-z",
          BackgroundImageFull: "_2BWkMEocB_PWAlCNnvwkpW",
          OddGradient: "_31GzI9SB2Wj87sB13c7XHz",
          EvenGradient: "_283mQrlso9fruh_DtsBP18",
          TopMostGame: "_2PmC6qr8RF22oGrrTwa-Ai",
          GamePlayDetails: "_3gAeRCR1lnQimVrfYKP6JD",
          PlatformChartsCtn: "TSAyulrl5QSSKjK1gTZdg",
          gradient: "_2kZoREa11DQ2pGPkasd9xs",
          TopHonorsSection: "_3vxAkxTbGM_XzgF_jQu8MR",
          SectionDesc: "CJ9awmTLX6bSz36NY4HT4",
          IconAchievement: "_2vdLENzDQtBQjyAkyv9S_w",
          IconGamesPlayed: "_3iBplwgmTqlW65lS36SzT2",
          IconStreak: "_3muGaWbeottcWdmhZBqB53",
          PlayBehaviorContainer: "_3g2ea3qJY6j67_cFF5Mgsq",
          ProgressBarFilled: "_1LQbY-wdcf-dh-t3dkucGC",
          ProgressBarFilledGradient: "_3aihmNXrhiBM33b7t7UKFC",
          GameNewnessTitle: "_39lOiSYRWalnWaZ5SX3zhx",
          NewActive: "_1sdItmmpaYbqIRLLUtrDrG",
          DataBoxArrow: "_3ajjJPkrXfayfPA3Vivx-8",
          Background: "A6FIZiuS0_nAypC7LbvhE",
          UserData: "_1KHyWCx0wbs471k7TSRMAs",
          DataBox: "_2c-eiPgDpepgIpD_jtHUzC",
          SteamData: "_1yhuxYer1QE_Vm8FfAmsIa",
          Border: "_1SA7sXKMgETCa_JaP3B6C4",
          PercentageLabel: "_1c_OSzoiESQi8VycwjySgq",
          Color: "_2dH3sotPVHLbsosd0aSRFe",
          PercentageDescriptionLabel: "-_6lWC6tfX-A_YFsFXfOv",
          UsedActive: "_3or6GTplqe7LbAyXhO8n4E",
          OldActive: "_19DsdrAsV7SPTJTtHyxbx9",
          AllGamesBGImage: "_2OdQZo0IGLXzoR4AUydRp3",
          SeeRewindButton: "_1V87Pd_xyPBUjoW6T3yIYp",
          MMFrame: "_1rm7lp0POJnMfv_wJCmj51",
          MMOverride: "_3dXsGCw_Hqvycqp0ierI13",
          Header: "_2Mb9gJJAqkyW-uwgteM7bR",
          YearSubtitle: "_2JtAZbKQCRYsuq8Grhj9D_",
          ReplayLogo: "mpZwdryoa_9MxYXp1Qr8Q",
          ReplayLogoAccent: "_3TL2UyEq_QwjQ1KvR0c_LW",
          Hashtag: "_2vAhvd0pJ4Bjao8aEg0lk0",
          Avatar: "_1zOzJvJn7vryT-8zfXh6h4",
          DataBlock: "_3AqjU369Dul6eM24tTW4Ro",
          PersonaName: "_3C6Kgz1wyud6uRK9iRRtnZ",
          ViewPageButton: "g4FuYY6kNOhx6ps41n66o",
          Description: "_3ZFqletUdCzkvW-BpBfk0",
          OtherYearLink: "_3_I-YXo6WE2pSgpSqOe90G",
        };
      },
      90281: (d) => {
        d.exports = {
          "duration-app-launch": "800ms",
          new_games_color: "#34f3fe",
          used_games_color: "#cc6670",
          old_games_color: "#f4d760",
          pie_windows: "#d67070",
          pie_linux: "#aa3db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_3qfrEV4P5n9CJA4fb67Ivk",
          scaleBackground: "_1asdXTPODzbO-2QXQO6WAH",
          SingleGame: "_3JNzDk8F1B_qfLvLEbGF0w",
          ImageTint: "_3MysN90Bv6ZGMqE-53bTjk",
          Section: "_1nMgdrh3b7SnNqAuCUSd5B",
          LongestStreakBgImage: "_1Qowl03yseKqKcs2EJ9R5B",
          StreakSizeFullBar: "_2vD9i17C3uyA2E-Lc5ZD1p",
          Tab: "SZ0_9YmipDQwyGOG0_Lyo",
          UserName: "_24R8ZXGY7hQ-Ks8ohHHsAg",
          ConclusionName: "_3BsoOI8x1uO1St_NhhCDER",
          SummaryCtnShadow: "_3aYoqZ-kU1IC4ofgURpf8Z",
          GridItem: "_2NJAVHR6X8vgcPy_GfrSaQ",
          BackgroundImage: "ofddh0rXpDM-xmXZBuqwo",
          FriendCtn: "_2uK59bPxX5xKInWVyU0-14",
          TopGameBlockContainer: "hEBeg6-TyTxrg1mstm3aC",
          BackgroundImageFull: "kzZidZh6aYGn3bn_WKn9y",
          OddGradient: "nyhJZNdc2qDfObTqbg5_V",
          EvenGradient: "_1ilWtwoOsjkBpHG0P161l5",
          TopMostGame: "_30VoxC11Evp39uKXKaJIk5",
          GamePlayDetails: "_1nlVKI0xEqZCCxnONysiPG",
          PlatformChartsCtn: "_3jQEyHHejM_PGp5oGTQiU6",
          gradient: "_1a2vqCFwrlIP5b099t6GB2",
          TopHonorsSection: "_2GauVFqXt-1xtlxH5bafrF",
          SectionDesc: "BzafxDuUuwRUd-EbKhPS1",
          IconAchievement: "_100QTztjCgQ6Ec1GG1x6kH",
          IconGamesPlayed: "_2reoH-63NnzcVazXA6yWz2",
          IconStreak: "_3PLNtoeyKHF-LlbCOnU3PX",
          PlayBehaviorContainer: "le8GHD3i0ZbMMfhEaN3Z_",
          ProgressBarFilled: "_1PRouV1B3pFdJFb922rA17",
          ProgressBarFilledGradient: "_3zxg0_a4VpWGIvPKu4MGxL",
          GameNewnessTitle: "_3SOhyodTjBF2shwNmCvXjc",
          NewActive: "_3zs_8IKbGbN6NQO0_ip-iI",
          DataBoxArrow: "_3IsVB9M_J54G5wcgTcABtK",
          Background: "jd1jSGBDgPIOiLo-0UL2t",
          UserData: "_2DStrlh-5vNQokJuDrvYYv",
          DataBox: "_1jKidlXls-ShFDPsJszsID",
          SteamData: "_1K1a5UW5LDDvNuaAOAg2oH",
          Border: "U1_r2xoaXkwmeMcK-bE4S",
          PercentageLabel: "Usvr16pFedAPpc1T1WImS",
          Color: "uMFwfqH-LCnjuu2-K-WAw",
          PercentageDescriptionLabel: "_1qQag4e-w9Uvky-e5b7C00",
          UsedActive: "ylQoO4yC7rFohZbK7-8GN",
          OldActive: "_1PHZ7uTA_a7irFg0tx4wnw",
          AllGamesBGImage: "_2XCB2VMS4Zp4noju8hRoAW",
          SeeRewindButton: "aeg2cQEW3bbblSjU_Vhle",
          MMFrame: "WOL99d-O5uORA7bp71sgN",
          MMOverride: "_2Wj6Fwcc2clxtYsmggPoBa",
          Header: "_1hHDYVXh8ungX8yBXqNcat",
          YearSubtitle: "_1xnYDYiJsksgxN-GB9fHRP",
          ReplayLogo: "jongsCRlAaNtmFJRpZff_",
          ReplayLogoAccent: "_1KxCtZOpQbsoSziZ-qP8qc",
          Hashtag: "_2RFzUFstcUTJcUP_sN1DcS",
          Avatar: "_1Mg9Utab_OyDLSw5C3l5tx",
          DataBlock: "fzOKfZTBSTLP3bDjK2B8n",
          PersonaName: "iZ3wg9DR-v5dEFzVF9zOb",
          ViewPageButton: "_2JO64VYmQchU6JCuRgrPXE",
          Description: "_2fAruegE1HEEZAQmW9eRN6",
          OtherYearLink: "_8ITEbBmyY2eAFhbFfw2Iv",
        };
      },
    },
  ]);
})();

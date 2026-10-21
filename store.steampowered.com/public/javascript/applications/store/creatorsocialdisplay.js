/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [41402],
    {
      73644: (r, E, i) => {
        "use strict";
        i.d(E, {
          D1: () => O,
          Nk: () => T,
          k6: () => M,
          lS: () => g,
          lz: () => f,
        });
        var t = i(7850),
          c = i(32093),
          e = i(48156),
          L = i(72609),
          u = i(40358),
          s = i(90626),
          m = i(95695),
          v = i.n(m),
          a = i(36118),
          C = i(71421),
          D = i(36707),
          S = i(18210),
          P = i(53113),
          I = i(19890),
          p = i.n(I),
          k = i(4515);
        function g(o) {
          const { appid: n } = o;
          return (0, t.jsx)("div", {
            className: p().AppSocialLinksCtn,
            children: (0, t.jsx)(h, { appid: n }),
          });
        }
        function h(o) {
          const { appid: n } = o,
            { data: l } = (0, u.bg)({ appid: n });
          return !l || l.length == 0
            ? null
            : (0, t.jsx)(B, {
                strTitle: (0, S.we)("#EventDisplay_SocialTitle"),
                id: "" + n,
                rgSocialMedia: l,
              });
        }
        function T(o) {
          return (0, s.useMemo)(
            () =>
              o
                ? o.map((n) => {
                    const l = (0, k.v)(n.type);
                    return l == e.jL.EK || l == e.jL.Or
                      ? { link_type: l, text: n.link }
                      : { link_type: l, url: n.link };
                  })
                : [],
            [o],
          );
        }
        function f(o) {
          const { gidClanEvent: n, rgSocial: l, bIsCreatorHomeEvent: d } = o,
            j = T(l);
          if (j.length == 0) return null;
          const _ = d
            ? (0, S.we)("#EventDisplay_Sale_SocialTitle_Dev")
            : (0, S.we)("#EventDisplay_Sale_SocialTitle");
          return (0, t.jsx)(B, { strTitle: _, id: n, rgSocialMedia: j });
        }
        function B(o) {
          const { strTitle: n, id: l, rgSocialMedia: d } = o;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: (0, D.A)(
                  v().EventEditorTextTitle,
                  "EventEditorTextTitle",
                ),
                children: n,
              }),
              (0, t.jsx)(O, { id: l, rgSocialMedia: d }),
            ],
          });
        }
        const b = [
          e.jL.EK,
          e.jL.$3,
          e.jL.M0,
          e.jL.Ow,
          e.jL.Ib,
          e.jL.qe,
          e.jL.Lk,
        ];
        function O(o) {
          const { id: n, rgSocialMedia: l, className: d } = o,
            j = L.TS.EREALM === c.TU.k_ESteamRealmChina;
          return (0, t.jsx)("div", {
            className: (0, D.A)(p().AppSocialLinks, d),
            children: l
              .filter((_) => !j || b.includes(_.link_type || e.jL.I0))
              .map((_) =>
                _.url
                  ? (0, t.jsx)(
                      A,
                      { social: _ },
                      "app_social_link_" + n + "_" + _.link_type,
                    )
                  : (0, t.jsx)(
                      y,
                      { social: _ },
                      "app_social_text_" + n + "_" + _.link_type + "_" + _.text,
                    ),
              ),
          });
        }
        function A(o) {
          const { social: n } = o;
          return n.url
            ? (0, t.jsx)("a", {
                href: (0, P.NT)(n.url, !0),
                target: L.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, t.jsx)(C.he, {
                  toolTipContent: n.url,
                  children: (0, t.jsx)(x, { social: n }),
                }),
              })
            : null;
        }
        function y(o) {
          const { social: n } = o;
          return (0, t.jsxs)("div", {
            className: p().AppSocialLinkWithText,
            children: [
              (0, t.jsx)(C.he, {
                toolTipContent: n.text,
                children: (0, t.jsx)(x, { social: n }),
              }),
              (0, t.jsx)("div", {
                className: p().AppSocialText,
                children: n.text,
              }),
            ],
          });
        }
        function x(o) {
          const { social: n } = o;
          return (0, t.jsx)(M, {
            linkType: n.link_type || e.jL.I0,
            className: p().AppSocialLinkIcon,
          });
        }
        const W = {
          [e.jL.lQ]: a.agV,
          [e.jL.GO]: a.ZnA,
          [e.jL.jG]: a.oy,
          [e.jL.F7]: a.ofN,
          [e.jL.Eb]: a.Bki,
          [e.jL.EK]: a.$vK,
          [e.jL.M0]: a.$vK,
          [e.jL.$3]: a.$vK,
          [e.jL.a$]: a.OSJ,
          [e.jL.Ow]: a.nm_,
          [e.jL.Ib]: a.tIO,
          [e.jL.uw]: a.Vt2,
          [e.jL.sP]: a.Vgk,
          [e.jL.u5]: a.VSd,
          [e.jL.db]: a.ccb,
          [e.jL.Yu]: a.rNt,
          [e.jL.JN]: a.g$j,
          [e.jL.EM]: a.BQz,
          [e.jL.Or]: a.jdP,
          [e.jL.qe]: a.bKN,
          [e.jL.H5]: a.sDU,
          [e.jL.Xm]: a.MbF,
          [e.jL.DB]: a.emH,
          [e.jL.Lk]: a.Yoo,
        };
        function M(o) {
          const { linkType: n, ...l } = o,
            d = W[n];
          return d ? (0, t.jsx)(d, { ...l }) : null;
        }
      },
      4515: (r, E, i) => {
        "use strict";
        i.d(E, { X: () => u, v: () => e });
        var t = i(48156);
        const c = {
          discord_server: t.jL.Eb,
          youtube: t.jL.lQ,
          facebook: t.jL.GO,
          twitter: t.jL.jG,
          twitch: t.jL.F7,
          reddit: t.jL.uw,
          instagram: t.jL.sP,
          tumblr: t.jL.u5,
          qq: t.jL.EK,
          qqlink: t.jL.M0,
          qqchannel: t.jL.$3,
          bilibili: t.jL.Ow,
          weibo: t.jL.Ib,
          wechat: t.jL.Or,
          tieba: t.jL.db,
          tiktok: t.jL.Yu,
          douyin: t.jL.qe,
          bluesky: t.jL.H5,
          mastodon: t.jL.Xm,
          threads: t.jL.DB,
          vk: t.jL.a$,
          telegram: t.jL.JN,
          linkedin: t.jL.EM,
          rednote: t.jL.Lk,
        };
        function e(s) {
          return c[s] ?? t.jL.I0;
        }
        const L = new Map(Object.entries(c).map(([s, m]) => [m, s]));
        function u(s) {
          return L.get(s);
        }
      },
      57106: (r, E, i) => {
        "use strict";
        i.r(E), i.d(E, { default: () => u });
        var t = i(7850),
          c = i(73644),
          e = i(28194),
          L = i.n(e);
        function u(s) {
          const { clanAccountID: m, items: v } = s,
            a = (0, c.Nk)(v);
          return a.length == 0
            ? null
            : (0, t.jsx)(c.D1, {
                id: "social_" + m,
                rgSocialMedia: a,
                className: L().Ctn,
              });
        }
      },
      19890: (r) => {
        r.exports = {
          AppSocialLinksCtn: "JlFZxFyO0IOSiYmJt-NlE",
          AppSocialLinks: "_1SBP3NCWhesT_T7Zncoe_x",
          AppSocialLinkIcon: "_2p4QK5FnPikdfXUGvhz-rj",
          AppSocialLinkWithText: "_1pCGa1Dqa9xwEjXFCTbeaB",
          AppSocialText: "V88BDse5RqlvrzYpxlgFS",
        };
      },
      95695: (r) => {
        r.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
        };
      },
      28194: (r) => {
        r.exports = { Ctn: "_2ZSkHhlXwxpsIInroemxBn" };
      },
    },
  ]);
})();

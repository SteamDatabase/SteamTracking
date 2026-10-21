(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [41402],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _ } = _;
          return (0, _.jsx)("div", {
            className: _().AppSocialLinksCtn,
            children: (0, _.jsx)(_, {
              appid: _,
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return !_ || _.length == 0
            ? null
            : (0, _.jsx)(_, {
                strTitle: (0, _._)("#EventDisplay_SocialTitle"),
                _: "" + _,
                rgSocialMedia: _,
              });
        }
        function _(_) {
          return (0, _.useMemo)(
            () =>
              _
                ? _.map((_) => {
                    const _ = (0, _._)(_.type);
                    return _ == _._._ || _ == _._._
                      ? {
                          link_type: _,
                          text: _.link,
                        }
                      : {
                          link_type: _,
                          url: _.link,
                        };
                  })
                : [],
            [_],
          );
        }
        function _(_) {
          const { gidClanEvent: _, rgSocial: _, bIsCreatorHomeEvent: _ } = _,
            _ = _(_);
          if (_.length == 0) return null;
          const _ = _
            ? (0, _._)("#EventDisplay_Sale_SocialTitle_Dev")
            : (0, _._)("#EventDisplay_Sale_SocialTitle");
          return (0, _.jsx)(_, {
            strTitle: _,
            _: _,
            rgSocialMedia: _,
          });
        }
        function _(_) {
          const { strTitle: _, _: _, rgSocialMedia: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().EventEditorTextTitle,
                  "EventEditorTextTitle",
                ),
                children: _,
              }),
              (0, _.jsx)(_, {
                _: _,
                rgSocialMedia: _,
              }),
            ],
          });
        }
        const _ = [_._._, _._._, _._._, _._._, _._._, _._._, _._._];
        function _(_) {
          const { _: _, rgSocialMedia: _, className: _ } = _,
            _ = _._.EREALM === _._.k_ESteamRealmChina;
          return (0, _.jsx)("div", {
            className: (0, _._)(_().AppSocialLinks, _),
            children: _.filter(
              (_) => !_ || _.includes(_.link_type || _._._),
            ).map((_) =>
              _.url
                ? (0, _.jsx)(
                    _,
                    {
                      social: _,
                    },
                    "app_social_link_" + _ + "_" + _.link_type,
                  )
                : (0, _.jsx)(
                    _,
                    {
                      social: _,
                    },
                    "app_social_text_" + _ + "_" + _.link_type + "_" + _.text,
                  ),
            ),
          });
        }
        function _(_) {
          const { social: _ } = _;
          return _.url
            ? (0, _.jsx)("a", {
                href: (0, _._)(_.url, !0),
                target: _._.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, _.jsx)(_._, {
                  toolTipContent: _.url,
                  children: (0, _.jsx)(_, {
                    social: _,
                  }),
                }),
              })
            : null;
        }
        function _(_) {
          const { social: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().AppSocialLinkWithText,
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: _.text,
                children: (0, _.jsx)(_, {
                  social: _,
                }),
              }),
              (0, _.jsx)("div", {
                className: _().AppSocialText,
                children: _.text,
              }),
            ],
          });
        }
        function _(_) {
          const { social: _ } = _;
          return (0, _.jsx)(_, {
            linkType: _.link_type || _._._,
            className: _().AppSocialLinkIcon,
          });
        }
        const _ = {
          [_._._]: _.agV,
          [_._._]: _.ZnA,
          [_._._]: _._,
          [_._._]: _.ofN,
          [_._._]: _.Bki,
          [_._._]: _.$vK,
          [_._._]: _.$vK,
          [_._._]: _.$vK,
          [_._._]: _.OSJ,
          [_._._]: _.nm_,
          [_._._]: _.tIO,
          [_._._]: _.Vt2,
          [_._._]: _.Vgk,
          [_._._]: _.VSd,
          [_._._]: _.ccb,
          [_._._]: _.rNt,
          [_._._]: _.g$j,
          [_._._]: _.BQz,
          [_._._]: _.jdP,
          [_._._]: _.bKN,
          [_._._]: _.sDU,
          [_._._]: _.MbF,
          [_._._]: _.emH,
          [_._._]: _.Yoo,
        };
        function _(_) {
          const { linkType: _, ..._ } = _,
            _ = _[_];
          return _
            ? (0, _.jsx)(_, {
                ..._,
              })
            : null;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = {
          discord_server: _._._,
          youtube: _._._,
          facebook: _._._,
          twitter: _._._,
          twitch: _._._,
          reddit: _._._,
          instagram: _._._,
          tumblr: _._._,
          _: _._._,
          qqlink: _._._,
          qqchannel: _._._,
          bilibili: _._._,
          weibo: _._._,
          wechat: _._._,
          tieba: _._._,
          tiktok: _._._,
          douyin: _._._,
          bluesky: _._._,
          mastodon: _._._,
          threads: _._._,
          _: _._._,
          telegram: _._._,
          linkedin: _._._,
          rednote: _._._,
        };
        function _(_) {
          return _[_] ?? _._._;
        }
        const _ = new Map(Object.entries(_).map(([_, _]) => [_, _]));
        function _(_) {
          return _.get(_);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { clanAccountID: _, items: _ } = _,
            _ = (0, _._)(_);
          return _.length == 0
            ? null
            : (0, _.jsx)(_._, {
                _: "social_" + _,
                rgSocialMedia: _,
                className: _().Ctn,
              });
        }
      },
      chunkid: (module) => {
        module.exports = {
          AppSocialLinksCtn: "JlFZxFyO0IOSiYmJt-NlE",
          AppSocialLinks: "_1SBP3NCWhesT_T7Zncoe_x",
          AppSocialLinkIcon: "_2p4QK5FnPikdfXUGvhz-rj",
          AppSocialLinkWithText: "_1pCGa1Dqa9xwEjXFCTbeaB",
          AppSocialText: "V88BDse5RqlvrzYpxlgFS",
        };
      },
      chunkid: (module) => {
        module.exports = {
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
      chunkid: (module) => {
        module.exports = {
          Ctn: "_2ZSkHhlXwxpsIInroemxBn",
        };
      },
    },
  ]);
})();

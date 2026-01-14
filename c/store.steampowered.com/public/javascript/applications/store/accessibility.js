(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [445],
  {
    chunkid: (module) => {
      module.exports = {
        Details: "_8DSX9d1ihrMSeZUFC9elD",
        Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
        FeatureList: "TwihVkmmqI5XLg6P4fpwF",
        CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
        FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
        GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
        FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
        InfoRow: "_1RmibngWLogcFmO93kGFgq",
        FeatureName: "ny6hWVK6ii05H200KRhds",
        ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
        InfoLink: "_2xmH7agKi37v9kwFHi093S",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          AccessibilityFeatureDisplay: () => _,
          AccessibilityIcon: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = {
          bAccessibilityDifficultyLevels:
            "#Accessibility_Feature_AdjustableDifficulty",
          bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
          bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
          bAccessibilityBackgroundVolumeControls:
            "#Accessibility_Feature_CustomVolumeControls",
          bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
          bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
          bAccessibilityResizableUI:
            "#Accessibility_Feature_AdjustableTextSize",
          bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
          bAccessibilityColorAlternatives:
            "#Accessibility_Feature_ColorAlternatives",
          bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
          bAccessibilityKeyboardOnlyOption:
            "#Accessibility_Feature_KeyboardOnlyOption",
          bAccessibilityMouseOnlyOption:
            "#Accessibility_Feature_MouseOnlyOption",
          bAccessibilityTouchOnlyOption:
            "#Accessibility_Feature_TouchOnlyOption",
          bAccessibilityPlayableWithoutQuicktimeEvents:
            "#Accessibility_Feature_WithoutQuickTimeEvents",
          bAccessibilityChatTexttoSpeech: "#Accessibility_Feature_TextToSpeech",
          bAccessibilityChatSpeechtoText: "#Accessibility_Feature_SpeechToText",
        },
        _ = {
          bAccessibilityDifficultyLevels: "adjustable_difficulty",
          bAccessibilitySaveAnytime: "save_anytime",
          bAccessibilityNarratedMenus: "narrated_game_menus",
          bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
          bAccessibilityStereoSound: "stereo_sound",
          bAccessibilitySurroundSound: "surround_sound",
          bAccessibilityResizableUI: "adjustable_text_size",
          bAccessibilitySubtitles: "subtitle_options",
          bAccessibilityColorAlternatives: "color_alternatives",
          bAccessibilityCameraComfort: "camera_comfort",
          bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
          bAccessibilityMouseOnlyOption: "mouse_only_option",
          bAccessibilityTouchOnlyOption: "touch_only_option",
          bAccessibilityPlayableWithoutQuicktimeEvents:
            "playable_without_timed_input",
          bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
          bAccessibilityChatSpeechtoText: "chat_speech_to_text",
        },
        _ = {
          bAccessibilityDifficultyLevels: "gameplay",
          bAccessibilitySaveAnytime: "gameplay",
          bAccessibilityNarratedMenus: "audio",
          bAccessibilityBackgroundVolumeControls: "audio",
          bAccessibilityStereoSound: "audio",
          bAccessibilitySurroundSound: "audio",
          bAccessibilityResizableUI: "visual",
          bAccessibilitySubtitles: "visual",
          bAccessibilityColorAlternatives: "visual",
          bAccessibilityCameraComfort: "visual",
          bAccessibilityKeyboardOnlyOption: "input",
          bAccessibilityMouseOnlyOption: "input",
          bAccessibilityTouchOnlyOption: "input",
          bAccessibilityPlayableWithoutQuicktimeEvents: "input",
          bAccessibilityChatTexttoSpeech: "input",
          bAccessibilityChatSpeechtoText: "input",
        },
        _ = {
          gameplay: "#Accessibility_Group_Gameplay",
          visual: "#Accessibility_Group_Visual",
          audio: "#Accessibility_Group_Audio",
          input: "#Accessibility_Group_Input",
        };
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(_.initialOpen ?? !1),
          _ = _.useId(),
          _ = Object.entries(_.features)
            .filter(([_, _]) => _)
            .map(([_]) => _);
        if (0 === _.length) return null;
        const _ = {};
        _.forEach((_) => {
          const _ = _[_];
          (_[_] ??= []), _[_].push(_);
        });
        const _ = Object.keys(_).length > 1;
        return _.createElement(
          "details",
          {
            className: _().Details,
            open: _,
            onToggle: (_) => __webpack_require__(_.currentTarget.open),
          },
          _.createElement(
            "summary",
            {
              className: _().Summary,
              "data-panel": '{"clickOnActivate": true}',
            },
            _.createElement(
              "div",
              {
                className: _().ImageContainer,
              },
              _.createElement(_, {
                className: _().CategoryIcon,
                "aria-label": "",
              }),
            ),
            _.createElement(
              "span",
              {
                className: _().FeatureNameContainer,
                _: _,
              },
              _.createElement(
                "span",
                {
                  className: _().FeatureName,
                },
                _
                  ? (0, _._)("#AccessibilityFeatures")
                  : (0, _._)("#AccessibilityFeaturesWithCount", _.length),
              ),
              _.createElement(
                "a",
                {
                  className: _().InfoLink,
                  href: `${_._.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                  target: "_blank",
                },
                "?",
              ),
            ),
          ),
          _.createElement(
            "ul",
            {
              className: _().FeatureList,
              "aria-labelledby": _,
            },
            _ &&
              _.createElement(
                _.Fragment,
                null,
                _.gameplay &&
                  _.createElement(
                    "li",
                    null,
                    _.createElement(_, {
                      group: "gameplay",
                      features: _.gameplay,
                      open: _,
                    }),
                  ),
                _.visual &&
                  _.createElement(
                    "li",
                    null,
                    _.createElement(_, {
                      group: "visual",
                      features: _.visual,
                      open: _,
                    }),
                  ),
                _.audio &&
                  _.createElement(
                    "li",
                    null,
                    _.createElement(_, {
                      group: "audio",
                      features: _.audio,
                      open: _,
                    }),
                  ),
                _.input &&
                  _.createElement(
                    "li",
                    null,
                    _.createElement(_, {
                      group: "input",
                      features: _.input,
                      open: _,
                    }),
                  ),
              ),
            !_ &&
              _.map((_) =>
                _.createElement(
                  "li",
                  {
                    key: _,
                  },
                  _.createElement(_, {
                    feature: _,
                    open: _,
                  }),
                ),
              ),
          ),
        );
      }
      function _(_) {
        return _.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ..._,
          },
          _.createElement("path", {
            fill: "currentColor",
            _: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
            fillRule: "evenodd",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
            fillRule: "evenodd",
          }),
          _.createElement("path", {
            fill: "currentColor",
            _: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
            fillRule: "evenodd",
          }),
        );
      }
      function _(_) {
        const _ = _.useId();
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "span",
            {
              className: _().GroupLabel,
              _: _,
            },
            (0, _._)(_[_.group]),
          ),
          _.createElement(
            "ul",
            {
              className: _().FeatureGroupItems,
              "aria-labelledby": _,
            },
            _.features.map((_) =>
              _.createElement(
                "li",
                {
                  key: _,
                },
                _.createElement(_, {
                  feature: _,
                  open: _.open,
                }),
              ),
            ),
          ),
        );
      }
      function _(_) {
        return _.createElement(
          "a",
          {
            href: `${_._.STORE_BASE_URL}category/${_[_.feature]}`,
            className: _().InfoRow,
            "data-panel": '{"clickOnActivate": true}',
            "data-gp-focus-disabled": _.open ? void 0 : "true",
          },
          _.createElement(
            "span",
            {
              className: _().FeatureNameContainer,
            },
            _.createElement(
              "span",
              {
                className: _().FeatureName,
              },
              (0, _._)(_[_.feature]),
            ),
          ),
        );
      }
    },
  },
]);

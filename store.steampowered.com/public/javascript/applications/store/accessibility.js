/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [445],
  {
    63404: (e) => {
      e.exports = {
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
    13229: (e, t, i) => {
      "use strict";
      i.r(t),
        i.d(t, {
          AccessibilityFeatureDisplay: () => m,
          AccessibilityIcon: () => A,
        });
      var s = i(90626),
        l = i(61859),
        a = i(78327),
        c = i(63404),
        n = i.n(c);
      const r = {
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
        u = {
          bAccessibilityDifficultyLevels: "#adjustable_difficulty",
          bAccessibilitySaveAnytime: "#saving_options",
          bAccessibilityNarratedMenus: "#narrated_menus",
          bAccessibilityBackgroundVolumeControls: "#volume_controls",
          bAccessibilityStereoSound: "#stereo_sound",
          bAccessibilitySurroundSound: "#surround_sound",
          bAccessibilityResizableUI: "#adjustable_text_size",
          bAccessibilitySubtitles: "#subtitles",
          bAccessibilityColorAlternatives: "#color_alternatives",
          bAccessibilityCameraComfort: "#camera_comfort",
          bAccessibilityKeyboardOnlyOption: "#keyboard_only",
          bAccessibilityMouseOnlyOption: "#mouse_only",
          bAccessibilityTouchOnlyOption: "#touch_only",
          bAccessibilityPlayableWithoutQuicktimeEvents: "#without_qte",
          bAccessibilityChatTexttoSpeech: "#tts",
          bAccessibilityChatSpeechtoText: "#stt",
        };
      var o;
      !(function (e) {
        (e.Gameplay = "gameplay"),
          (e.Visual = "visual"),
          (e.Audio = "audio"),
          (e.Input = "input");
      })(o || (o = {}));
      const b = {
          bAccessibilityDifficultyLevels: o.Gameplay,
          bAccessibilitySaveAnytime: o.Gameplay,
          bAccessibilityNarratedMenus: o.Audio,
          bAccessibilityBackgroundVolumeControls: o.Audio,
          bAccessibilityStereoSound: o.Audio,
          bAccessibilitySurroundSound: o.Audio,
          bAccessibilityResizableUI: o.Visual,
          bAccessibilitySubtitles: o.Visual,
          bAccessibilityColorAlternatives: o.Visual,
          bAccessibilityCameraComfort: o.Visual,
          bAccessibilityKeyboardOnlyOption: o.Input,
          bAccessibilityMouseOnlyOption: o.Input,
          bAccessibilityTouchOnlyOption: o.Input,
          bAccessibilityPlayableWithoutQuicktimeEvents: o.Input,
          bAccessibilityChatTexttoSpeech: o.Input,
          bAccessibilityChatSpeechtoText: o.Input,
        },
        y = {
          [o.Gameplay]: "#Accessibility_Group_Gameplay",
          [o.Visual]: "#Accessibility_Group_Visual",
          [o.Audio]: "#Accessibility_Group_Audio",
          [o.Input]: "#Accessibility_Group_Input",
        };
      function m(e) {
        const [t, i] = (0, s.useState)(e.initialOpen ?? !1),
          c = s.useId(),
          r = Object.entries(e.features)
            .filter(([e, t]) => t)
            .map(([e]) => e);
        if (0 === r.length) return null;
        const u = {};
        r.forEach((e) => {
          const t = b[e];
          (u[t] ??= []), u[t].push(e);
        });
        const y = Object.keys(u).length > 1;
        return s.createElement(
          "details",
          {
            className: n().Details,
            open: t,
            onToggle: (e) => i(e.currentTarget.open),
          },
          s.createElement(
            "summary",
            {
              className: n().Summary,
              "data-panel": '{"clickOnActivate": true}',
            },
            s.createElement(
              "div",
              { className: n().ImageContainer },
              s.createElement(A, {
                className: n().CategoryIcon,
                "aria-label": "",
              }),
            ),
            s.createElement(
              "span",
              { className: n().FeatureNameContainer, id: c },
              s.createElement(
                "span",
                { className: n().FeatureName },
                t
                  ? (0, l.we)("#AccessibilityFeatures")
                  : (0, l.we)("#AccessibilityFeaturesWithCount", r.length),
              ),
              s.createElement(
                "a",
                {
                  className: n().InfoLink,
                  href: `${a.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                  target: "_blank",
                },
                "?",
              ),
            ),
          ),
          s.createElement(
            "ul",
            { className: n().FeatureList, "aria-labelledby": c },
            y &&
              s.createElement(
                s.Fragment,
                null,
                u.gameplay &&
                  s.createElement(
                    "li",
                    null,
                    s.createElement(p, {
                      group: o.Gameplay,
                      features: u.gameplay,
                      open: t,
                    }),
                  ),
                u.visual &&
                  s.createElement(
                    "li",
                    null,
                    s.createElement(p, {
                      group: o.Visual,
                      features: u.visual,
                      open: t,
                    }),
                  ),
                u.audio &&
                  s.createElement(
                    "li",
                    null,
                    s.createElement(p, {
                      group: o.Audio,
                      features: u.audio,
                      open: t,
                    }),
                  ),
                u.input &&
                  s.createElement(
                    "li",
                    null,
                    s.createElement(p, {
                      group: o.Input,
                      features: u.input,
                      open: t,
                    }),
                  ),
              ),
            !y &&
              r.map((e) =>
                s.createElement(
                  "li",
                  { key: e },
                  s.createElement(d, { feature: e, open: t }),
                ),
              ),
          ),
        );
      }
      function A(e) {
        return s.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ...e,
          },
          s.createElement("path", {
            fill: "currentColor",
            d: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
            fillRule: "evenodd",
          }),
          s.createElement("path", {
            fill: "currentColor",
            d: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
            fillRule: "evenodd",
          }),
          s.createElement("path", {
            fill: "currentColor",
            d: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
            fillRule: "evenodd",
          }),
        );
      }
      function p(e) {
        const t = s.useId();
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "span",
            { className: n().GroupLabel, id: t },
            (0, l.we)(y[e.group]),
          ),
          s.createElement(
            "ul",
            { className: n().FeatureGroupItems, "aria-labelledby": t },
            e.features.map((t) =>
              s.createElement(
                "li",
                { key: t },
                s.createElement(d, { feature: t, open: e.open }),
              ),
            ),
          ),
        );
      }
      function d(e) {
        return s.createElement(
          "a",
          {
            href: `${a.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36${u[e.feature]}`,
            className: n().InfoRow,
            "data-panel": '{"clickOnActivate": true}',
            "data-gp-focus-disabled": e.open ? void 0 : "true",
          },
          s.createElement(
            "span",
            { className: n().FeatureNameContainer },
            s.createElement(
              "span",
              { className: n().FeatureName },
              (0, l.we)(r[e.feature]),
            ),
          ),
        );
      }
    },
  },
]);

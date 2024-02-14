/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1825],
  {
    99837: (e) => {
      e.exports = {
        ReleaseDateInfoCtn: "MjesDaM8ySIdAujGZPACn",
        GameEditCtn: "_22e4AKyxOJI3L9WZ-500_Z",
        ReleaseDateContent: "_3l1i_Ji2LHF9uLUsIA-6s2",
        EditButton: "_2Go5et-asyUXbKbuW0dECU",
        Spacer: "z4dAWecplX4aV9qPQNIQS",
        Top: "_2Bw1IVbdzXaD8JNOgVdzVe",
        Bottom: "_3LE9RI5JpeV3aUS6kkG4Y_",
        EditButtonIcon: "_314E_Djw7uBgNuk_9y6f5g",
        LabelField: "_19qBNOVq73zhQhb1wP9w63",
        Label: "_3eHSMKzTRL-1bzKry-AW_E",
        BigField: "nZkW2-OtbRBDwVDWS4ei8",
        Set: "_1oP0wSsWgMaOYbVWCy8eQF",
        DescText: "_3-olbnxO5LbbL6mSzamhw3",
        StatusText: "_3Th0VAeLiIAxqsFn74j3EA",
        StartWizardButton: "lKVYBV_ioKj9Y_FKlMvqu",
        ControllerSupportLevelString: "x6aCtZFZ3cDnCSJMJI0OB",
        InfoRow: "_1NUmCql50oyQsRv2rxSvr1",
        LocSection: "_38m8DGDKcTxyFKbuvEpMIx",
        HighlightText: "_3InqRBbbAXO4WJ35-ou6cl",
        GamepadRequired: "H8PWxseAXhM6PapqoU5jP",
        Personalized: "_3Q8sxkN3baZIWYOXUGEwpZ",
        HighlightRow: "zD5C0Xyh3lZRY_mRIRpVA",
        LocString: "_5bHD6q5nDA6TLrWbE5Hvx",
        ImgSection: "_28V2e4qcBKMUfwPNxuJevO",
        SmallerSVG: "BOCK_85Q7zCMjhmqqf182",
        BiggerSVG: "_2xOzFrnkKmDSLNhuD5Ke5e",
        PreviewContainer: "_1F4_sw07miPTtc8CNasbvN",
        StoreSidebarContainer: "_2Z38-sqi_66Ock18gKwsUm",
        PurchaseNoticeContainer: "_3coXqS7LWcc1GxjOIORLPW",
        PurchaseNoticeImage: "_3Ci-mcHPf9PwcjjvzB0v-2",
        NoticeContainer: "_3nByihRHvBVf4L5_bEg2dR",
        ControllerRequiredImage: "_2pO7EB1Gl4_IN2uoWkJ-bM",
        Tilt: "_11_KaesMs-enCJ0GS0trTR",
        ToolTipControl: "_2TD1tfeH-GO6CqFXxRd-Rm",
        ToolTipContainer: "_11C_jcbfitrasoPZxY7vXc",
      };
    },
    85401: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          ControllerSupportInfoDisplay: () => p,
          ControllerSupportInfoDisplayInternal: () => C,
          ControllerSupportInfoStoreDisplay: () => u,
          default: () => b,
        });
      var o = r(47427),
        l = r(31846),
        a = r(99837),
        n = r(13129),
        i = r(58538),
        s = r(59728),
        S = r(37563);
      function c(e) {
        return o.createElement(
          "a",
          {
            href: `${S.De.STORE_BASE_URL}search/?controllersupport=${e.strCategory}`,
            className: a.InfoRow,
          },
          o.createElement(
            "div",
            {
              className: (0, n.Z)(
                a.ImgSection,
                e.bHightlightRow && a.HighlightRow,
                e.bHighlightGPRequired && a.GamepadRequired,
              ),
            },
            e.tagImage,
          ),
          o.createElement(
            "div",
            {
              className: (0, n.Z)(
                a.LocSection,
                e.bHighlightText && a.HighlightText,
                e.bHightlightRow && a.HighlightRow,
                e.bHighlightGPRequired && a.GamepadRequired,
              ),
            },
            o.createElement(
              "div",
              {
                className: (0, n.Z)(
                  a.LocString,
                  e.bHighlightText && a.HighlightText,
                  e.bHightlightRow && a.HighlightRow,
                  e.bHighlightGPRequired && a.GamepadRequired,
                  e.bPersonalized && a.Personalized,
                ),
              },
              (0, l.Xx)(e.strLocalizationToken),
            ),
            e.strTooltipString &&
              o.createElement(
                s.HP,
                {
                  toolTipContent: (0, l.Xx)(e.strTooltipString),
                  className: a.ToolTipContainer,
                },
                o.createElement("span", { className: a.ToolTipControl }, "?"),
              ),
          ),
        );
      }
      function p(e) {
        return o.createElement(
          "div",
          { className: a.PreviewContainer },
          o.createElement(C, Object.assign({ bPreview: !0 }, e)),
        );
      }
      function u(e) {
        return o.createElement(
          o.Fragment,
          null,
          (e.bPartialXboxControllerSupport || e.bFullXboxControllerSupport) &&
            o.createElement(
              "div",
              { className: a.StoreSidebarContainer },
              o.createElement(C, Object.assign({}, e)),
            ),
        );
      }
      function m() {
        return o.createElement(c, {
          tagImage: o.createElement(i.by3, {
            className: (0, n.Z)(a.Tilt, a.SmallerSVG),
          }),
          strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
          bHighlightGPRequired: !0,
          strTooltipString:
            "#Store_ControllerSupport_Tooltip_ControllerRequired",
        });
      }
      function _() {
        return o.createElement(
          "div",
          { className: (0, n.Z)(a.PurchaseNoticeContainer) },
          o.createElement(i.atL, {
            className: (0, n.Z)(a.PurchaseNoticeImage),
          }),
          o.createElement(
            "div",
            { className: (0, n.Z)(a.PurchaseNoticeLabel) },
            (0, l.Xx)("#Store_ControllerSupport_GamepadPreferred"),
          ),
        );
      }
      function g(e) {
        const { bNoKeyboardSupport: t, bGamepadPreferred: r } = e;
        return o.createElement(
          "div",
          { className: (0, n.Z)(a.NoticeContainer) },
          t && o.createElement(m, null),
          r && !t && o.createElement(_, null),
        );
      }
      function C(e) {
        const {
          bControllerSupportWizardComplete: t,
          bPS4ControllerSupport: r,
          bPS5ControllerSupport: n,
          bPS4ControllerBTSupport: s,
          bPS5ControllerBTSupport: S,
          bFullXboxControllerSupport: p,
          bPartialXboxControllerSupport: u,
          bSteamInputAPISupport: m,
          bHasOther: _,
          bHasPS4: C,
          bHasPS5: b,
          bHasXbox: d,
          bPreview: P,
        } = e;
        let h = [];
        if (r && n && s && S) {
          const e = o.createElement(i.CtA, {
              className: a.SmallerSVG,
              controllerType: 34,
              partial: !p,
            }),
            t = C || b;
          h.push(
            o.createElement(c, {
              key: "1",
              tagImage: e,
              strLocalizationToken: t
                ? "#Store_ControllerSupport_PS_Personalized"
                : "#Store_ControllerSupport_PS",
              bPersonalized: t,
            }),
          );
        } else {
          if (r) {
            const e = o.createElement(i.CtA, {
              className: a.SmallerSVG,
              controllerType: 34,
              partial: !p,
            });
            s
              ? h.push(
                  o.createElement(c, {
                    key: "2",
                    tagImage: e,
                    strLocalizationToken: C
                      ? "#Store_ControllerSupport_PS4_Personalized"
                      : "#Store_ControllerSupport_PS4",
                    bPersonalized: C,
                    strCategory: "55",
                  }),
                )
              : h.push(
                  o.createElement(c, {
                    key: "3",
                    tagImage: e,
                    strLocalizationToken: C
                      ? "#Store_ControllerSupport_PS4_USB_Personalized"
                      : "#Store_ControllerSupport_PS4_USB",
                    bPersonalized: C,
                    strCategory: "55",
                  }),
                );
          }
          if (n) {
            const e = o.createElement(i.CtA, {
              className: a.SmallerSVG,
              controllerType: 45,
              partial: !p,
            });
            S
              ? h.push(
                  o.createElement(c, {
                    key: "4",
                    tagImage: e,
                    strLocalizationToken: b
                      ? "#Store_ControllerSupport_PS5_Personalized"
                      : "#Store_ControllerSupport_PS5",
                    bPersonalized: b,
                    strCategory: "57",
                  }),
                )
              : h.push(
                  o.createElement(c, {
                    key: "5",
                    tagImage: e,
                    strLocalizationToken: b
                      ? "#Store_ControllerSupport_PS5_USB_Personalized"
                      : "#Store_ControllerSupport_PS5_USB",
                    bPersonalized: b,
                    strCategory: "57",
                  }),
                );
          }
        }
        return o.createElement(
          o.Fragment,
          null,
          (u || p) &&
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                { className: a.ControllerSupportLevelString },
                (0, l.Xx)(
                  p
                    ? "#Store_ControllerSupport_FullController"
                    : "#Store_ControllerSupport_PartialController",
                ),
              ),
              o.createElement(c, {
                tagImage: o.createElement(i.CtA, {
                  className: a.SmallerSVG,
                  controllerType: 32,
                  partial: !p,
                }),
                strLocalizationToken: d
                  ? "#Store_ControllerSupport_Xbox_Personalized"
                  : "#Store_ControllerSupport_Xbox",
                bPersonalized: d,
                strCategory: "18",
              }),
              h,
              m &&
                o.createElement(c, {
                  tagImage: o.createElement(i.IRk, {
                    className: a.BiggerSVG,
                    bGreyOutRightSide: !p,
                  }),
                  strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                  strTooltipString: "#Store_ControllerSupport_Tooltip_SIAPI",
                  strCategory: "59",
                }),
              ((!P && !t) || (!m && _ && !d)) &&
                o.createElement(c, {
                  tagImage: o.createElement(i.uWd, { className: a.BiggerSVG }),
                  strLocalizationToken:
                    _ || C || b
                      ? "#Store_ControllerSupport_Unknown_Personalized"
                      : "#Store_ControllerSupport_Unknown",
                  bPersonalized: _ || C || b,
                }),
              o.createElement(g, Object.assign({}, e)),
            ),
        );
      }
      const b = u;
    },
    1688: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      const o = r(97695).$g;
    },
  },
]);

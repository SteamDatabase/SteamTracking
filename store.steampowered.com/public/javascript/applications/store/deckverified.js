/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1825],
  {
    6429: (e) => {
      e.exports = {
        ReleaseDateInfoCtn: "controllersupportinfo_ReleaseDateInfoCtn_MjesD",
        GameEditCtn: "controllersupportinfo_GameEditCtn_22e4A",
        ReleaseDateContent: "controllersupportinfo_ReleaseDateContent_3l1i_",
        EditButton: "controllersupportinfo_EditButton_2Go5e",
        Spacer: "controllersupportinfo_Spacer_z4dAW",
        Top: "controllersupportinfo_Top_2Bw1I",
        Bottom: "controllersupportinfo_Bottom_3LE9R",
        EditButtonIcon: "controllersupportinfo_EditButtonIcon_314E_",
        LabelField: "controllersupportinfo_LabelField_19qBN",
        Label: "controllersupportinfo_Label_3eHSM",
        BigField: "controllersupportinfo_BigField_nZkW2",
        Set: "controllersupportinfo_Set_1oP0w",
        DescText: "controllersupportinfo_DescText_3-olb",
        StatusText: "controllersupportinfo_StatusText_3Th0V",
        StartWizardButton: "controllersupportinfo_StartWizardButton_lKVYB",
        ControllerSupportLevelString:
          "controllersupportinfo_ControllerSupportLevelString_x6aCt",
        InfoRow: "controllersupportinfo_InfoRow_1NUmC",
        LocSection: "controllersupportinfo_LocSection_38m8D",
        HighlightText: "controllersupportinfo_HighlightText_3InqR",
        GamepadRequired: "controllersupportinfo_GamepadRequired_H8PWx",
        Personalized: "controllersupportinfo_Personalized_3Q8sx",
        HighlightRow: "controllersupportinfo_HighlightRow_zD5C0",
        LocString: "controllersupportinfo_LocString_5bHD6",
        ImgSection: "controllersupportinfo_ImgSection_28V2e",
        SmallerSVG: "controllersupportinfo_SmallerSVG_BOCK_",
        BiggerSVG: "controllersupportinfo_BiggerSVG_2xOzF",
        PreviewContainer: "controllersupportinfo_PreviewContainer_1F4_s",
        StoreSidebarContainer:
          "controllersupportinfo_StoreSidebarContainer_2Z38-",
        PurchaseNoticeContainer:
          "controllersupportinfo_PurchaseNoticeContainer_3coXq",
        PurchaseNoticeImage: "controllersupportinfo_PurchaseNoticeImage_3Ci-m",
        NoticeContainer: "controllersupportinfo_NoticeContainer_3nByi",
        ControllerRequiredImage:
          "controllersupportinfo_ControllerRequiredImage_2pO7E",
        Tilt: "controllersupportinfo_Tilt_11_Ka",
        ToolTipControl: "controllersupportinfo_ToolTipControl_2TD1t",
        ToolTipContainer: "controllersupportinfo_ToolTipContainer_11C_j",
      };
    },
    24981: (e, o, t) => {
      "use strict";
      t.r(o),
        t.d(o, {
          ControllerSupportInfoDisplay: () => u,
          ControllerSupportInfoDisplayInternal: () => C,
          ControllerSupportInfoStoreDisplay: () => S,
          default: () => d,
        });
      var r = t(89526),
        l = t(14826),
        n = t(6429),
        a = t(19304),
        i = t(16826),
        p = t(84343),
        s = t(32765);
      function c(e) {
        return r.createElement(
          "a",
          {
            href: `${s.De.STORE_BASE_URL}search/?controllersupport=${e.strCategory}`,
            className: n.InfoRow,
          },
          r.createElement(
            "div",
            {
              className: (0, a.Z)(
                n.ImgSection,
                e.bHightlightRow && n.HighlightRow,
                e.bHighlightGPRequired && n.GamepadRequired,
              ),
            },
            e.tagImage,
          ),
          r.createElement(
            "div",
            {
              className: (0, a.Z)(
                n.LocSection,
                e.bHighlightText && n.HighlightText,
                e.bHightlightRow && n.HighlightRow,
                e.bHighlightGPRequired && n.GamepadRequired,
              ),
            },
            r.createElement(
              "div",
              {
                className: (0, a.Z)(
                  n.LocString,
                  e.bHighlightText && n.HighlightText,
                  e.bHightlightRow && n.HighlightRow,
                  e.bHighlightGPRequired && n.GamepadRequired,
                  e.bPersonalized && n.Personalized,
                ),
              },
              (0, l.Xx)(e.strLocalizationToken),
            ),
            e.strTooltipString &&
              r.createElement(
                p.HP,
                {
                  toolTipContent: (0, l.Xx)(e.strTooltipString),
                  className: n.ToolTipContainer,
                },
                r.createElement("span", { className: n.ToolTipControl }, "?"),
              ),
          ),
        );
      }
      function u(e) {
        return r.createElement(
          "div",
          { className: n.PreviewContainer },
          r.createElement(C, Object.assign({ bPreview: !0 }, e)),
        );
      }
      function S(e) {
        return r.createElement(
          r.Fragment,
          null,
          (e.bPartialXboxControllerSupport || e.bFullXboxControllerSupport) &&
            r.createElement(
              "div",
              { className: n.StoreSidebarContainer },
              r.createElement(C, Object.assign({}, e)),
            ),
        );
      }
      function _() {
        return r.createElement(c, {
          tagImage: r.createElement(i.by3, {
            className: (0, a.Z)(n.Tilt, n.SmallerSVG),
          }),
          strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
          bHighlightGPRequired: !0,
          strTooltipString:
            "#Store_ControllerSupport_Tooltip_ControllerRequired",
        });
      }
      function m() {
        return r.createElement(
          "div",
          { className: (0, a.Z)(n.PurchaseNoticeContainer) },
          r.createElement(i.atL, {
            className: (0, a.Z)(n.PurchaseNoticeImage),
          }),
          r.createElement(
            "div",
            { className: (0, a.Z)(n.PurchaseNoticeLabel) },
            (0, l.Xx)("#Store_ControllerSupport_GamepadPreferred"),
          ),
        );
      }
      function g(e) {
        const { bNoKeyboardSupport: o, bGamepadPreferred: t } = e;
        return r.createElement(
          "div",
          { className: (0, a.Z)(n.NoticeContainer) },
          o && r.createElement(_, null),
          t && !o && r.createElement(m, null),
        );
      }
      function C(e) {
        const {
          bControllerSupportWizardComplete: o,
          bPS4ControllerSupport: t,
          bPS5ControllerSupport: a,
          bPS4ControllerBTSupport: p,
          bPS5ControllerBTSupport: s,
          bFullXboxControllerSupport: u,
          bPartialXboxControllerSupport: S,
          bSteamInputAPISupport: _,
          bHasOther: m,
          bHasPS4: C,
          bHasPS5: d,
          bHasXbox: P,
          bPreview: b,
        } = e;
        let f = [];
        if (t && a && p && s) {
          const e = r.createElement(i.CtA, {
              className: n.SmallerSVG,
              controllerType: 34,
            }),
            o = C || d;
          f.push(
            r.createElement(c, {
              key: "1",
              tagImage: e,
              strLocalizationToken: o
                ? "#Store_ControllerSupport_PS_Personalized"
                : "#Store_ControllerSupport_PS",
              bPersonalized: o,
            }),
          );
        } else {
          if (t) {
            const e = r.createElement(i.CtA, {
              className: n.SmallerSVG,
              controllerType: 34,
            });
            p
              ? f.push(
                  r.createElement(c, {
                    key: "2",
                    tagImage: e,
                    strLocalizationToken: C
                      ? "#Store_ControllerSupport_PS4_Personalized"
                      : "#Store_ControllerSupport_PS4",
                    bPersonalized: C,
                    strCategory: "55",
                  }),
                )
              : f.push(
                  r.createElement(c, {
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
          if (a) {
            const e = r.createElement(i.CtA, {
              className: n.SmallerSVG,
              controllerType: 45,
            });
            s
              ? f.push(
                  r.createElement(c, {
                    key: "4",
                    tagImage: e,
                    strLocalizationToken: d
                      ? "#Store_ControllerSupport_PS5_Personalized"
                      : "#Store_ControllerSupport_PS5",
                    bPersonalized: d,
                    strCategory: "57",
                  }),
                )
              : f.push(
                  r.createElement(c, {
                    key: "5",
                    tagImage: e,
                    strLocalizationToken: d
                      ? "#Store_ControllerSupport_PS5_USB_Personalized"
                      : "#Store_ControllerSupport_PS5_USB",
                    bPersonalized: d,
                    strCategory: "57",
                  }),
                );
          }
        }
        return r.createElement(
          r.Fragment,
          null,
          (S || u) &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "div",
                { className: n.ControllerSupportLevelString },
                (0, l.Xx)(
                  u
                    ? "#Store_ControllerSupport_FullController"
                    : "#Store_ControllerSupport_PartialController",
                ),
              ),
              r.createElement(c, {
                tagImage: r.createElement(i.CtA, {
                  className: n.SmallerSVG,
                  controllerType: 32,
                }),
                strLocalizationToken: P
                  ? "#Store_ControllerSupport_Xbox_Personalized"
                  : "#Store_ControllerSupport_Xbox",
                bPersonalized: P,
                strCategory: "18",
              }),
              f,
              _ &&
                r.createElement(c, {
                  tagImage: r.createElement(i.IRk, {
                    className: n.BiggerSVG,
                    bGreyOutRightSide: !u,
                  }),
                  strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                  strTooltipString: "#Store_ControllerSupport_Tooltip_SIAPI",
                  strCategory: "59",
                }),
              ((!b && !o) || (!_ && m && !P)) &&
                r.createElement(c, {
                  tagImage: r.createElement(i.uWd, { className: n.BiggerSVG }),
                  strLocalizationToken:
                    m || C || d
                      ? "#Store_ControllerSupport_Unknown_Personalized"
                      : "#Store_ControllerSupport_Unknown",
                  bPersonalized: m || C || d,
                }),
              r.createElement(g, Object.assign({}, e)),
            ),
        );
      }
      const d = S;
    },
    74839: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, { default: () => r });
      const r = t(53913).$g;
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1825],
  {
    91824: (e) => {
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
        HighlightRow: "controllersupportinfo_HighlightRow_zD5C0",
        HighlightRowRed: "controllersupportinfo_HighlightRowRed_1_692",
        LocString: "controllersupportinfo_LocString_5bHD6",
        HighlightText: "controllersupportinfo_HighlightText_3InqR",
        Personalized: "controllersupportinfo_Personalized_3Q8sx",
        ImgSection: "controllersupportinfo_ImgSection_28V2e",
        SmallerSVG: "controllersupportinfo_SmallerSVG_BOCK_",
        BiggerSVG: "controllersupportinfo_BiggerSVG_2xOzF",
        PreviewContainer: "controllersupportinfo_PreviewContainer_1F4_s",
        StoreSidebarContainer:
          "controllersupportinfo_StoreSidebarContainer_2Z38-",
      };
    },
    24981: (e, o, t) => {
      "use strict";
      t.r(o),
        t.d(o, {
          ControllerSupportInfoDisplay: () => S,
          ControllerSupportInfoDisplayInternal: () => _,
          ControllerSupportInfoStoreDisplay: () => c,
          default: () => u,
        });
      var r = t(89526),
        l = t(14826),
        n = t(91824),
        a = t(19304),
        i = t(16826),
        p = t(12104);
      function s(e) {
        return r.createElement(
          "div",
          { className: n.InfoRow },
          r.createElement(
            "div",
            {
              className: (0, a.Z)(
                n.ImgSection,
                e.bHightlightRow && n.HighlightRow,
                e.bHighlightRowRed && n.HighlightRowRed,
              ),
            },
            e.tagImage,
          ),
          r.createElement(
            "div",
            {
              className: (0, a.Z)(
                n.LocSection,
                e.bHightlightRow && n.HighlightRow,
                e.bHighlightRowRed && n.HighlightRowRed,
              ),
            },
            r.createElement(
              "div",
              {
                className: (0, a.Z)(
                  n.LocString,
                  e.bHighlightText && n.HighlightText,
                  e.bHightlightRow && n.HighlightRow,
                  e.bHighlightRowRed && n.HighlightRowRed,
                  e.bPersonalized && n.Personalized,
                ),
              },
              (0, l.Xx)(e.strLocalizationToken),
            ),
          ),
        );
      }
      function S(e) {
        return r.createElement(
          "div",
          { className: n.PreviewContainer },
          r.createElement(_, Object.assign({}, e)),
        );
      }
      function c(e) {
        return r.createElement(
          r.Fragment,
          null,
          (e.bPartialXboxControllerSupport || e.bFullXboxControllerSupport) &&
            r.createElement(
              "div",
              { className: n.StoreSidebarContainer },
              r.createElement(_, Object.assign({}, e)),
            ),
        );
      }
      function _(e) {
        const {
          bControllerSupportWizardComplete: o,
          bPS4ControllerSupport: t,
          bPS5ControllerSupport: a,
          bPS4ControllerBTSupport: S,
          bPS5ControllerBTSupport: c,
          bFullXboxControllerSupport: _,
          bPartialXboxControllerSupport: u,
          bSteamInputAPISupport: g,
          bGamepadPreferred: m,
          bNoKeyboardSupport: C,
          bHasOther: d,
          bHasPS4: h,
          bHasPS5: b,
          bHasXbox: f,
        } = e;
        let P = [];
        if (t && a && S && c) {
          const e = r.createElement(i.CtA, {
              className: n.SmallerSVG,
              controllerType: p.uL.k_eControllerType_PS4Controller,
            }),
            o = h || b;
          P.push(
            r.createElement(s, {
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
              controllerType: p.uL.k_eControllerType_PS4Controller,
            });
            S
              ? P.push(
                  r.createElement(s, {
                    key: "2",
                    tagImage: e,
                    strLocalizationToken: h
                      ? "#Store_ControllerSupport_PS4_Personalized"
                      : "#Store_ControllerSupport_PS4",
                    bPersonalized: h,
                  }),
                )
              : P.push(
                  r.createElement(s, {
                    key: "3",
                    tagImage: e,
                    strLocalizationToken: h
                      ? "#Store_ControllerSupport_PS4_USB_Personalized"
                      : "#Store_ControllerSupport_PS4_USB",
                    bPersonalized: h,
                  }),
                );
          }
          if (a) {
            const e = r.createElement(i.CtA, {
              className: n.SmallerSVG,
              controllerType: p.uL.k_eControllerType_PS5Controller,
            });
            c
              ? P.push(
                  r.createElement(s, {
                    key: "4",
                    tagImage: e,
                    strLocalizationToken: b
                      ? "#Store_ControllerSupport_PS5_Personalized"
                      : "#Store_ControllerSupport_PS5",
                    bPersonalized: b,
                  }),
                )
              : P.push(
                  r.createElement(s, {
                    key: "5",
                    tagImage: e,
                    strLocalizationToken: b
                      ? "#Store_ControllerSupport_PS5_USB_Personalized"
                      : "#Store_ControllerSupport_PS5_USB",
                    bPersonalized: b,
                  }),
                );
          }
        }
        return r.createElement(
          r.Fragment,
          null,
          (u || _) &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "div",
                { className: n.ControllerSupportLevelString },
                (0, l.Xx)(
                  _
                    ? "#Store_ControllerSupport_FullController"
                    : "#Store_ControllerSupport_PartialController",
                ),
              ),
              m &&
                !C &&
                r.createElement(s, {
                  tagImage: r.createElement(i.CtA, {
                    className: n.SmallerSVG,
                    controllerType:
                      p.uL.k_eControllerType_UnknownNonSteamController,
                  }),
                  strLocalizationToken:
                    "#Store_ControllerSupport_GamepadPreferred",
                  bHightlightRow: !0,
                }),
              C &&
                r.createElement(s, {
                  tagImage: r.createElement(i.CtA, {
                    className: n.SmallerSVG,
                    controllerType:
                      p.uL.k_eControllerType_UnknownNonSteamController,
                  }),
                  strLocalizationToken:
                    "#Store_ControllerSupport_GamepadRequired",
                  bHightlightRow: !0,
                  bHighlightRowRed: !0,
                }),
              r.createElement(s, {
                tagImage: r.createElement(i.CtA, {
                  className: n.SmallerSVG,
                  controllerType: p.uL.k_eControllerType_XBoxOneController,
                }),
                strLocalizationToken: f
                  ? "#Store_ControllerSupport_Xbox_Personalized"
                  : "#Store_ControllerSupport_Xbox",
                bPersonalized: f,
              }),
              P,
              g &&
                r.createElement(s, {
                  tagImage: r.createElement(i.IRk, {
                    className: n.BiggerSVG,
                    bGreyOutRightSide: !_,
                  }),
                  strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                }),
              (!o || (!g && d && !f)) &&
                r.createElement(s, {
                  tagImage: r.createElement(i.uWd, { className: n.BiggerSVG }),
                  strLocalizationToken:
                    d || h || b
                      ? "#Store_ControllerSupport_Unknown_Personalized"
                      : "#Store_ControllerSupport_Unknown",
                  bPersonalized: d || h || b,
                }),
            ),
        );
      }
      const u = c;
    },
    74839: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, { default: () => r });
      const r = t(53913).$g;
    },
  },
]);

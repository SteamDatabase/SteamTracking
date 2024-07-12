/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8516],
  {
    17479: (e) => {
      e.exports = {
        ReleaseDateInfoCtn: "_3_BM0Yr1nZHLRCU-YScHph",
        GameEditCtn: "_2atDY79LoAg6W2I3f_ghoe",
        ReleaseDateContent: "_3EqL95FAclb4_KUCViyIy",
        EditButton: "_1nt4AvPVzCcmifUL2j41GY",
        Spacer: "D6yaJy1vHTj3skoSwQCmn",
        Top: "_17TBmwVnz8B0fYk9NMgjcC",
        Bottom: "_1mdhhjdhefzfINtpGJDw_F",
        EditButtonIcon: "_23n7mGKR9t2rn_appk4hc4",
        LabelField: "_1yV1XMUdZdavVgSZ6SzXKj",
        Label: "_2aDfpXF8ktFHq439q_1vAi",
        BigField: "_3K2oJx5qEZyMkC2O7Ib77p",
        Set: "_1CXRFvJ5iqKqlENSWgeHPP",
        DescText: "_3FFbGIjpM4z0O1HfqwwsvR",
        StatusText: "jBW2mrF7D6RVhT2u_ZRXB",
        StartWizardButton: "_1hwFIOidJj1HaD2_cI4NRD",
        ControllerSupportLevelString: "_1mfBI5XbiaKU9vS5WkJALu",
        InfoRow: "_2xZaMR-NKc0LbkeM50cZq8",
        LocSection: "_3KAysk4dlhWETa6ixz7V2j",
        HighlightText: "_2Qr-aCeNvCUkoGKh3ikniD",
        GamepadRequired: "xAMFa9akLaRN7hfkTC8_h",
        Personalized: "_1g3WgidGN68CDX4XQPGnl6",
        HighlightRow: "N97okiqePUqGpdeNrIxUU",
        LocString: "_3FBEGAfvLQj4qYjstmZAPE",
        ImgSection: "dxuI55RF56-dzbuXjj2W0",
        SmallerSVG: "_1LWvkVSCiVeG4Yf5uxtQ28",
        BiggerSVG: "WRiytnKTtULWCkwFVJoTx",
        PreviewContainer: "_13bOrUeolqp9EyK3or-cLt",
        StoreSidebarContainer: "_1CTHwmZmi5YE4kovZH_UIl",
        PurchaseNoticeContainer: "_166hsSkQYxKraMJIx7td91",
        PurchaseNoticeImage: "_3UK9OHyZ3r9rA55mgsnZPD",
        NoticeContainer: "_2IS5rvIlv3ARam8O7b_-po",
        ControllerRequiredImage: "_3YEJ5NoOg1YObev3TXdMi",
        Tilt: "_1NEHd7t-JVZYdk68QMEph-",
        ToolTipControl: "_3vt5rw82YhkhWtu5ld9QeP",
        ToolTipContainer: "_3PRdiJdKKfTnwLnTfbCkEz",
      };
    },
    67996: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          ControllerSupportInfoDisplay: () => s,
          ControllerSupportInfoDisplayInternal: () => C,
          ControllerSupportInfoStoreDisplay: () => m,
          default: () => d,
        });
      var o = r(90626),
        l = r(61859),
        a = r(17479),
        n = r(52038),
        i = r(4869),
        p = r(32754),
        S = r(78327);
      function c(e) {
        return o.createElement(
          "a",
          {
            href: `${S.TS.STORE_BASE_URL}search/?controllersupport=${e.strCategory}`,
            className: a.InfoRow,
          },
          o.createElement(
            "div",
            {
              className: (0, n.A)(
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
              className: (0, n.A)(
                a.LocSection,
                e.bHighlightText && a.HighlightText,
                e.bHightlightRow && a.HighlightRow,
                e.bHighlightGPRequired && a.GamepadRequired,
              ),
            },
            o.createElement(
              "div",
              {
                className: (0, n.A)(
                  a.LocString,
                  e.bHighlightText && a.HighlightText,
                  e.bHightlightRow && a.HighlightRow,
                  e.bHighlightGPRequired && a.GamepadRequired,
                  e.bPersonalized && a.Personalized,
                ),
              },
              (0, l.we)(e.strLocalizationToken),
            ),
            e.strTooltipString &&
              o.createElement(
                p.he,
                {
                  toolTipContent: (0, l.we)(e.strTooltipString),
                  className: a.ToolTipContainer,
                },
                o.createElement("span", { className: a.ToolTipControl }, "?"),
              ),
          ),
        );
      }
      function s(e) {
        return o.createElement(
          "div",
          { className: a.PreviewContainer },
          o.createElement(C, { bPreview: !0, ...e }),
        );
      }
      function m(e) {
        return o.createElement(
          o.Fragment,
          null,
          (e.bPartialXboxControllerSupport || e.bFullXboxControllerSupport) &&
            o.createElement(
              "div",
              { className: a.StoreSidebarContainer },
              o.createElement(C, { ...e }),
            ),
        );
      }
      function u() {
        return o.createElement(c, {
          tagImage: o.createElement(i.Moo, {
            className: (0, n.A)(a.Tilt, a.SmallerSVG),
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
          { className: (0, n.A)(a.PurchaseNoticeContainer) },
          o.createElement(i.Kz1, {
            className: (0, n.A)(a.PurchaseNoticeImage),
          }),
          o.createElement(
            "div",
            { className: (0, n.A)(a.PurchaseNoticeLabel) },
            (0, l.we)("#Store_ControllerSupport_GamepadPreferred"),
          ),
        );
      }
      function g(e) {
        const { bNoKeyboardSupport: t, bGamepadPreferred: r } = e;
        return o.createElement(
          "div",
          { className: (0, n.A)(a.NoticeContainer) },
          t && o.createElement(u, null),
          r && !t && o.createElement(_, null),
        );
      }
      function C(e) {
        const {
          bControllerSupportWizardComplete: t,
          bPS4ControllerSupport: r,
          bPS5ControllerSupport: n,
          bPS4ControllerBTSupport: p,
          bPS5ControllerBTSupport: S,
          bFullXboxControllerSupport: s,
          bPartialXboxControllerSupport: m,
          bSteamInputAPISupport: u,
          bHasOther: _,
          bHasPS4: C,
          bHasPS5: d,
          bHasXbox: h,
          bPreview: P,
        } = e;
        let b = [];
        if (r && n && p && S) {
          const e = o.createElement(i.pcV, {
              className: a.SmallerSVG,
              controllerType: 34,
              partial: !s,
            }),
            t = C || d;
          b.push(
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
            const e = o.createElement(i.pcV, {
              className: a.SmallerSVG,
              controllerType: 34,
              partial: !s,
            });
            p
              ? b.push(
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
              : b.push(
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
            const e = o.createElement(i.pcV, {
              className: a.SmallerSVG,
              controllerType: 45,
              partial: !s,
            });
            S
              ? b.push(
                  o.createElement(c, {
                    key: "4",
                    tagImage: e,
                    strLocalizationToken: d
                      ? "#Store_ControllerSupport_PS5_Personalized"
                      : "#Store_ControllerSupport_PS5",
                    bPersonalized: d,
                    strCategory: "57",
                  }),
                )
              : b.push(
                  o.createElement(c, {
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
        return o.createElement(
          o.Fragment,
          null,
          (m || s) &&
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                { className: a.ControllerSupportLevelString },
                (0, l.we)(
                  s
                    ? "#Store_ControllerSupport_FullController"
                    : "#Store_ControllerSupport_PartialController",
                ),
              ),
              o.createElement(c, {
                tagImage: o.createElement(i.pcV, {
                  className: a.SmallerSVG,
                  controllerType: 32,
                  partial: !s,
                }),
                strLocalizationToken: h
                  ? "#Store_ControllerSupport_Xbox_Personalized"
                  : "#Store_ControllerSupport_Xbox",
                bPersonalized: h,
                strCategory: "18",
              }),
              b,
              u &&
                o.createElement(c, {
                  tagImage: o.createElement(i.kdM, {
                    className: a.BiggerSVG,
                    bGreyOutRightSide: !s,
                  }),
                  strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                  strTooltipString: "#Store_ControllerSupport_Tooltip_SIAPI",
                  strCategory: "59",
                }),
              ((!P && !t) || (!u && _ && !h)) &&
                o.createElement(c, {
                  tagImage: o.createElement(i.vet, { className: a.BiggerSVG }),
                  strLocalizationToken:
                    _ || C || d
                      ? "#Store_ControllerSupport_Unknown_Personalized"
                      : "#Store_ControllerSupport_Unknown",
                  bPersonalized: _ || C || d,
                }),
              o.createElement(g, { ...e }),
            ),
        );
      }
      const d = m;
    },
    33337: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      const o = r(582).q6;
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3912],
  {
    85274: (e) => {
      e.exports = { MoreDots: "_2YpW8SafRsHDfQIUT2DzUP" };
    },
    14578: (e) => {
      e.exports = {
        DashboardPage: "fIACD2DrXOfPgZ6liaz8B",
        DashTitle: "_3GHz1lE76l_ye03FVZIvgV",
        FeedbackLinkCtn: "_5ZCWmtTzUDQzZXxIFLcJV",
        FeedbackLink: "_24sFT4JkcUPwf83Xisqf8S",
        Throbber: "TigTTJlvb1clyomjKsIBB",
        ErrorMessage: "_3_i0aP__RVwi1gJ__9YGNW",
        ButtonGroup: "WBwvg-Enwb-imQG96DiIT",
        Instructions: "_1mz7G9y8aBLOijzO3pLvAb",
      };
    },
    12917: (e) => {
      e.exports = {
        ProposalState: "_2Nd7LF--awWj2FO3O38Q4w",
        StateText: "_3POGYMAOwtuQfvsv42OXjV",
        ProposalStateKey: "_2Gw9ij-kw4HpOxG8diPOus",
        NoProposalsInFlight: "_1cDvzWJuU6haVGL7Z1WH-9",
        NeedsReview: "iEo6Irsly_5PaIVdrTyqo",
        AutoPublish: "_3I1P9wlHAcJOWgXZSLOP1E",
        PartnerWillPublish: "_1BiCvGXIG2jVfTmfWVnI3v",
        ApprovedCanPublish: "_2IXtgCjbz_IKB0I-Tv-Srl",
      };
    },
    18715: (e) => {
      e.exports = {
        ToolbarInfo: "_1bPMNcsgqa-akKYfelwilP",
        Visible: "CLKT9CFoyEByzdSrgSzE2",
        ChangeCount: "_1fN8w-ElZiiZadq4F6P5wa",
        ProposalStatus: "_1IKd3SFdr5z6DcVWi1hpQC",
        Buttons: "_1krNhBmPJ7AUIp1iDga0kZ",
        Button: "_2JjzuIkHTgXpX-jui_X86Y",
        SaveButton: "_16sHrIsuZRMMARr_H1gSdR",
        NavigationWarning: "_3lm-HapxTM6gKnYv9iTdLb",
        PricePreviewWarning: "IxZAjD6UWfP6qIUU-JIsp",
        PricePreviewWarningLine: "_1Fr6wQhuDghGzMFD8XxFWR",
        SeeDetailsSection: "_36-JCOAm-RV4rsa1HaZ6hW",
        SeeDetailsButton: "_4aHIWNtAHpL3bTZwenwHu",
        PriceOverrideSummaryList: "_3Y8X4CF7L7ZC8hcC2hifte",
        OldPriceCtn: "_2UeXRoaw5cyxoKiX1z-UPr",
        NewPriceCtn: "_1m40GB0ETh3SuJZ2LE2sfV",
        PriceOverrideSummary: "_30js1WCUw1w9H1D5b7C6MM",
        PackageName: "IcOXTFPlAJBUR4q-zhkFy",
        OldPrice: "_1lyzsqwRX3rG1Mf9tox1wP",
        NewPrice: "nEEX41c5gybgdvLW6zvqS",
        Currency: "_3EgiMInHUeD5E64oBAlcGh",
        PricePrefix: "_2suSE-R__jkqEnC0uhKab2",
        PriceSuffix: "_3uRmhNxxanVPbMW-mXvDF-",
        ChangeArrow: "_3Pb94yxnhDGCL9T-Ro78tD",
        SaveDialogBody: "_2bTmcbLVmzj6utxsIMOxye",
        SaveDialogBodyText: "_3Ohx3u827GiwnZx2UU4z-M",
        AutoPublishCheckBox: "_2tKL7PU3207ZNtgoGUwiFJ",
        RadioButtons: "_3lsh2Yw2Hmc3kamU1eJyJJ",
        PublishError: "k_qc0NeY8sBathGlH4yet",
        PublishWarning: "_3uUgrMwDoXiX2PEyRHiF9g",
        StageNote: "dpMou_xbI8FCjsLTXKet7",
        PublishErrorDialog: "_381pEpkUlOe9X-z-1msxGm",
        HoverToolTip: "_1yXHpORUurTNRsHpzalvwp",
        PriceChangeSaveWarning: "_2lTJ7-iyFOMpIaZ-p6yDvd",
        PriceChangeSaveWarningArrow: "B3-IB6jhKQuhRCYOH9Zd5",
        PriceChangeSaveWarningText: "_2LN01zxswJjZ2gBihNCUsI",
        IncreasedCurrencies: "_13GstIJtNo2RVdUkwJtDSd",
      };
    },
    95582: (e, i, r) => {
      "use strict";
      r.d(i, { i: () => u });
      var n = r(7850),
        s = r(83800),
        a = r(69423),
        o = r(9154),
        t = r(61859),
        c = r(78327),
        l = r(14578),
        d = r.n(l),
        P = r(7929);
      function u(e) {
        const { closeModal: i, fnOnApply: r, singlePackage: l } = e,
          u = (0, a._A)();
        return (0, n.jsxs)(o.o0, {
          closeModal: i,
          bAlertDialog: !0,
          strTitle: P.g.Localize("#PricingDashboard_ApplyConversion_Method"),
          onOK: () => {
            u(), r && r();
          },
          strOKButtonText: l
            ? (0, t.we)("#PricingDashboard_ApplyGuidelines_Button_Single")
            : (0, t.we)("#PricingDashboard_ApplyGuidelines_Button"),
          children: [
            (0, n.jsx)("div", {
              className: d().Instructions,
              children: P.g.Localize(
                "#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions",
              ),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("a", {
              href: c.TS.PARTNER_BASE_URL + "doc/store/pricing#5",
              target: "_blank",
              children: (0, t.we)("#PricingDashboard_ApplyGuidelines_Link"),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("br", {}),
            !l &&
              (0, n.jsx)("div", {
                className: d().Instructions,
                children: (0, t.we)(
                  "#PricingDashboard_ApplyGuidelines_Instructions2",
                ),
              }),
            (0, n.jsx)("div", {
              className: d().Instructions,
              children: (0, t.we)(
                "#PricingDashboard_ApplyGuidelines_Assurance",
              ),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)(s.J, { bHideTour: !0 }),
          ],
        });
      }
    },
    61311: (e, i, r) => {
      "use strict";
      r.d(i, { t: () => _ });
      var n = r(7850),
        s = r(96745),
        a = r(69423),
        o = r(90626),
        t = r(16676),
        c = r(12155),
        l = r(32754),
        d = r(52038),
        P = r(61859),
        u = r(10754),
        g = r(18715),
        h = r.n(g);
      function _(e) {
        const { rgLocalPriceOverrides: i } = e,
          [r, s] = o.useState(i.length < 9);
        return (0, n.jsx)("div", {
          className: h().SeeDetailsSection,
          children: r
            ? (0, n.jsx)("div", {
                className: h().PriceOverrideSummaryList,
                children: i.map((e) =>
                  (0, n.jsx)(
                    b,
                    { override: e },
                    `${e.packageID}_${e.strPriceKey}`,
                  ),
                ),
              })
            : (0, n.jsx)(t.$n, {
                onClick: () => s(!0),
                className: h().SeeDetailsButton,
                children: (0, P.we)("#PackageGrid_SeePendingChanges"),
              }),
        });
      }
      function b(e) {
        const { override: i } = e,
          {
            packageID: r,
            strPriceKey: o,
            nPriceInCents: t,
            nOldPriceInCents: P,
          } = i,
          g = (0, s.ww)(r),
          [_, b, v] = (0, a.Wx)(P, o),
          [p, x, D] = (0, a.Wx)(t, o),
          w = (0, a.XK)(o),
          { nMinPriceInCents: j, nMaxPriceInCents: C } = (0, a.tn)(r, o),
          m = t < j || (!!C && t > C);
        return (0, n.jsxs)("div", {
          className: (0, d.A)(h().PriceOverrideSummary),
          children: [
            (0, n.jsx)(l.he, {
              toolTipContent: w,
              direction: "top",
              className: h().Currency,
              strTooltipClassname: h().HoverToolTip,
              children: o,
            }),
            (0, n.jsx)(l.he, {
              toolTipContent: `${r}: ${g}`,
              direction: "overlay",
              className: h().PackageName,
              strTooltipClassname: h().HoverToolTip,
              children: g,
            }),
            m
              ? (0, n.jsx)(u.T6, { packageID: r, strPriceKey: o })
              : (0, n.jsx)(u.Gy, { nPriceInCents: t, nSavedPriceInCents: P }),
            (0, n.jsxs)("div", {
              className: h().OldPriceCtn,
              children: [
                (0, n.jsx)("div", { className: h().PricePrefix, children: _ }),
                (0, n.jsx)("span", { className: h().OldPrice, children: b }),
                (0, n.jsx)("div", { className: h().PriceSuffix, children: v }),
              ],
            }),
            (0, n.jsx)("span", {
              className: h().ChangeArrow,
              children: (0, n.jsx)(c.i3G, { angle: 90 }),
            }),
            (0, n.jsxs)("div", {
              className: h().NewPriceCtn,
              children: [
                (0, n.jsx)("div", { className: h().PricePrefix, children: _ }),
                (0, n.jsx)("span", { className: h().NewPrice, children: x }),
                (0, n.jsx)("div", { className: h().PriceSuffix, children: v }),
              ],
            }),
          ],
        });
      }
    },
    74267: (e, i, r) => {
      "use strict";
      r.d(i, { O: () => u });
      var n = r(7850),
        s = r(90626),
        a = r(85274),
        o = r.n(a),
        t = r(12155),
        c = r(52038),
        l = r(49771),
        d = r(6336);
      const P = new l.MX("price-grid-cell-popout-elements");
      function u(e) {
        let { hoverKey: i, className: r, renderHover: a } = e,
          l = (0, c.A)(o().MoreDots, r),
          u = s.useRef(void 0),
          g = s.useCallback(() => {
            P.HideElement(u.current.ownerDocument, i);
          }, [i]);
        return (0, n.jsx)("div", {
          ref: u,
          tabIndex: -1,
          className: l,
          onFocus: (e) => {
            e.target.focus();
            let r = (0, n.jsx)(d.g, {
              target: u.current,
              direction: "top",
              bEnablePointerEvents: !0,
              nBodyDistance: 0,
              onClick: g,
              children: a(),
            });
            P.ShowElement(u.current.ownerDocument, r, i);
          },
          onBlur: () => {
            P.HideElement(u.current.ownerDocument, i, 100);
          },
          children: (0, n.jsx)(t.faJ, {}),
        });
      }
    },
    86762: (e, i, r) => {
      "use strict";
      r.d(i, { m2: () => A, QD: () => R, RW: () => B });
      var n,
        s,
        a = r(7850),
        o = r(20187),
        t = r(69423),
        c = r(10754),
        l = r(41103),
        d = r(61859),
        P = r(4160),
        u = r(52038),
        g = r(32754),
        h = r(74267),
        _ = r(12917),
        b = r.n(_),
        v = r(37085),
        p = r(90626),
        x = r(9154),
        D = r(22797),
        w = r(51272),
        j = r(18715),
        C = r.n(j),
        m = r(48996),
        S = r(44165),
        f = r(87924),
        N = r(61311);
      function I(e) {
        const { closeModal: i, packageID: r, bPackageVisible: o } = e,
          c = (0, t.FX)(r),
          l = c.some((e) => e.nPriceInCents > e.nOldPriceInCents),
          P = (function (e, i) {
            let [r, n] = p.useState(void 0);
            const a = (0, m.zq)(),
              o = (0, S.P_)(60);
            if (
              (p.useEffect(() => {
                i &&
                  (n(void 0),
                  a([e], void 0, 6e4).then(async (e) => {
                    n(e);
                  }));
              }, [i, e, n, a]),
              !i)
            )
              return s.OK;
            if (null == r) return s.Loading;
            if (r != v.R) return s.FailedToLoad;
            const t = (0, m.qN)(e);
            return t.every((e) => e.rtStartDate > o + f.nu || e.rtEndDate < o)
              ? s.OK
              : s.RequiresCooldown;
          })(r, l),
          { fnPublish: u, ePublishState: g } = (function (e) {
            const i = (0, t.h4)(),
              [r, s] = p.useState(n.Idle);
            let a = p.useCallback(async () => {
              s(n.Loading);
              (await i(e)).success == v.R ? s(n.OK) : s(n.Failed);
            }, [s, i, e]);
            return { fnPublish: a, ePublishState: r };
          })(r);
        let h;
        if (P == s.FailedToLoad)
          h = (0, d.oW)(
            "#PricingDashboard_PriceProposal_Publish_FailedToLoad",
            (0, a.jsx)("div", {}),
            (0, a.jsx)("div", {}),
          );
        else if (P == s.RequiresCooldown) {
          let e = (0, a.jsx)(w.uU, {
            href: "https://partner.steamgames.com/doc/store/pricing",
          });
          h = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                children: (0, d.we)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError1",
                ),
              }),
              (0, a.jsx)("div", {
                children: (0, d.oW)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError2",
                  e,
                ),
              }),
              (0, a.jsx)("div", {
                children: (0, d.we)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError3",
                ),
              }),
              (0, a.jsx)("div", {
                children: (0, a.jsxs)("ol", {
                  children: [
                    (0, a.jsx)("li", {
                      children: (0, d.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownError3a",
                      ),
                    }),
                    (0, a.jsx)("li", {
                      children: (0, d.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownError3b",
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        } else
          g == n.Failed &&
            (h = (0, d.oW)(
              "#PricingDashboard_PriceProposal_Publish_FailedToPublish",
              (0, a.jsx)("div", {}),
              (0, a.jsx)("div", {}),
            ));
        if (h) {
          let e = (0, d.we)(
            o
              ? "#PricingDashboard_PriceProposal_Publish_Title"
              : "#PricingDashboard_StageNewPrices_title",
          );
          return (
            P == s.RequiresCooldown &&
              (e = (0, d.we)(
                "#PricingDashboard_PriceProposal_Publish_CantPublishTitle",
              )),
            (0, a.jsx)(x.o0, {
              strTitle: e,
              bAlertDialog: !0,
              onOK: i,
              onCancel: i,
              closeModal: i,
              children: (0, a.jsx)("div", {
                className: C().PublishErrorDialog,
                children: h,
              }),
            })
          );
        }
        let _ = P == s.Loading || g == n.Loading;
        return (0, a.jsxs)(x.o0, {
          strTitle: (0, d.we)(
            o
              ? "#PricingDashboard_PriceProposal_Publish_Title"
              : "#PricingDashboard_StageNewPrices_title",
          ),
          bAlertDialog: !1,
          strOKButtonText: (0, d.we)(
            o
              ? "#PricingDashboard_PriceProposal_Publish_Button"
              : "#PricingDashboard_StageNewPrices_ok",
          ),
          bOKDisabled: _,
          bCancelDisabled: _,
          bDestructiveWarning: !0,
          onOK: u,
          onCancel: i,
          closeModal: i,
          children: [
            _ && (0, a.jsx)(D.t, { position: "center" }),
            !_ &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, d.Yp)(
                    o
                      ? "#PricingDashboard_PriceProposal_Publish_Explanation"
                      : "#PricingDashboard_StageNewPrices_desc_Timing",
                    c.length,
                  ),
                  !o &&
                    (0, a.jsx)("div", {
                      className: C().StageNote,
                      children: (0, d.we)(
                        "#PricingDashboard_StageNewPrices_NoStoreChange",
                      ),
                    }),
                  o &&
                    l &&
                    (0, a.jsx)("div", {
                      className: C().PublishWarning,
                      children: (0, d.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownWarning",
                      ),
                    }),
                  (0, a.jsx)(N.t, { rgLocalPriceOverrides: c }),
                ],
              }),
          ],
        });
      }
      !(function (e) {
        (e[(e.Idle = 0)] = "Idle"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.OK = 2)] = "OK"),
          (e[(e.Failed = 3)] = "Failed");
      })(n || (n = {})),
        (function (e) {
          (e[(e.Idle = 0)] = "Idle"),
            (e[(e.Loading = 1)] = "Loading"),
            (e[(e.OK = 2)] = "OK"),
            (e[(e.FailedToLoad = 3)] = "FailedToLoad"),
            (e[(e.RequiresCooldown = 4)] = "RequiresCooldown");
        })(s || (s = {}));
      var T = r(64753),
        k = r(16676),
        O = r(96434),
        y = r.n(O),
        W = r(96745);
      function A(e) {
        const { packageID: i, bShowCancel: r } = e,
          n = (0, t.XB)(i),
          s = (0, t.d$)(i),
          o = s && (0, c.mK)(s.rtSubmitted),
          [_, v] = (0, l.Hl)(s?.submitterID),
          p = v ? v.persona_name : s?.submitterID;
        let x = "PackageMore_" + i,
          D = null,
          w = null,
          j = null;
        n
          ? ((D = b().NeedsReview),
            (j = (0, d.we)("#PricingDashboard_PriceProposal_NeedsReview_ttip")),
            (w = (0, d.we)("#PricingDashboard_PriceProposal_NeedsReview")))
          : s?.eState == P.Al && s.bPartnerWillPublish
            ? ((D = b().PartnerWillPublish),
              (j = (0, d.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip",
                p,
                o,
              )),
              (w = (0, d.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish",
              )))
            : s?.eState != P.Al || s.bPartnerWillPublish
              ? s?.eState == P.Zo
                ? ((D = b().ApprovedCanPublish),
                  (j = (0, d.we)(
                    "#PricingDashboard_PriceProposal_Approved_ttip",
                  )),
                  (w = (0, a.jsx)(K, { packageID: i })))
                : ((D = b().NoProposalsInFlight),
                  (j = (0, d.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight_ttip",
                  )),
                  (w = (0, d.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight",
                  )))
              : ((D = b().AutoPublish),
                (j = (0, d.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip",
                  p,
                  o,
                )),
                (w = (0, a.jsxs)("div", {
                  children: [
                    (0, d.we)(
                      "#PricingDashboard_PriceProposal_WaitingForReview",
                    ),
                    (0, a.jsx)("br", {}),
                    (0, a.jsx)("span", {
                      children: (0, d.we)(
                        "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish",
                      ),
                    }),
                  ],
                })));
        let C = r && (n || !!s);
        return (0, a.jsxs)("div", {
          className: (0, u.A)(b().ProposalState, D),
          children: [
            (0, a.jsxs)(g.he, {
              toolTipContent: j,
              className: b().StateText,
              children: [
                (0, a.jsx)("div", { className: b().ProposalStateKey }),
                w,
              ],
            }),
            C &&
              (0, a.jsx)(h.O, {
                hoverKey: x,
                className: b().PackageMore,
                renderHover: () => (0, a.jsx)(M, { packageID: i }),
              }),
          ],
        });
      }
      function L(e) {
        const i = (0, t.d$)(e),
          r = (0, W.E1)(e);
        return i
          ? i.eState == P.Zo
            ? r
              ? {
                  bApproved: !0,
                  strLabel: "#PricingDashboard_ProposedPrice_Status_Approved",
                  strMessage:
                    "#PricingDashboard_ProposedPrice_CallOut_Approved",
                }
              : {
                  bApproved: !0,
                  strLabel:
                    "#PricingDashboard_ProposedPrice_Status_Approved_Stage",
                  strMessage:
                    "#PricingDashboard_ProposedPrice_CallOut_Approved_Stage",
                }
            : i.bPartnerWillPublish
              ? {
                  bApproved: !1,
                  strLabel: "#PricingDashboard_ProposedPrice_Status_InReview",
                  strMessage: r
                    ? "#PricingDashboard_ProposedPrice_CallOut_InReview"
                    : "#PricingDashboard_ProposedPrice_CallOut_InReview_Stage",
                }
              : {
                  bApproved: !1,
                  strLabel:
                    "#PricingDashboard_ProposedPrice_Status_InReview_AutoPublish",
                  strMessage:
                    "#PricingDashboard_ProposedPrice_CallOut_InReview_AutoPublish",
                }
          : null;
      }
      function B(e) {
        const i = L(e.packageID);
        return i
          ? (0, a.jsx)(o.EY, {
              size: "4",
              color: i.bApproved ? "text-success" : "text-warning",
              children: (0, d.we)(i.strMessage),
            })
          : null;
      }
      function R(e) {
        const i = L(e.packageID);
        return i
          ? (0, a.jsx)(o.EY, {
              size: "3",
              color: i.bApproved ? "text-success" : "text-warning",
              children: (0, d.we)(i.strLabel),
            })
          : null;
      }
      function K(e) {
        const { packageID: i } = e,
          [r, n, s] = (0, T.uD)(),
          o = (0, W.E1)(i);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(k.jn, {
              onClick: n,
              children: (0, d.we)(
                o
                  ? "#PricingDashboard_PriceProposal_PublishDialog_Button"
                  : "#PricingDashboard_StageNewPrices",
              ),
            }),
            (0, a.jsx)(x.EN, {
              active: r,
              children: (0, a.jsx)(I, {
                packageID: i,
                bPackageVisible: o,
                closeModal: s,
              }),
            }),
          ],
        });
      }
      function M(e) {
        const { packageID: i } = e,
          r = (0, t.XB)(i);
        let n = (0, t.T_)(i);
        const s = (0, t.d$)(i);
        let o = (0, t.fr)(i);
        return (0, a.jsx)("div", {
          className: y().PricePopout,
          children: (0, a.jsxs)("div", {
            className: y().DetailRow,
            children: [
              r &&
                (0, a.jsx)("div", {
                  className: y().DetailLabel,
                  onClick: n,
                  children: (0, d.we)("#PricingDashboard_RevertAllPackage"),
                }),
              !!s &&
                (0, a.jsx)("div", {
                  className: y().DetailLabel,
                  onClick: o,
                  children: (0, d.we)("#PricingDashboard_CancelPriceProposal"),
                }),
            ],
          }),
        });
      }
    },
    40818: (e, i, r) => {
      "use strict";
      r.d(i, { Zg: () => W, BL: () => I, cK: () => T });
      var n = r(7850),
        s = r(37085),
        a = r(64753),
        o = r(48996),
        t = r(96745),
        c = r(69423),
        l = r(90626),
        d = r(44165),
        P = r(16676),
        u = r(9154),
        g = r(738),
        h = r(12155),
        _ = r(22797),
        b = r(51272),
        v = r(4434),
        p = r(52038),
        x = r(56011),
        D = r(61859),
        w = r(14771),
        j = r(61311);
      function C(e) {
        const { closeModal: i } = e,
          r = (0, c.Ci)(),
          s = (0, c.NC)();
        return (0, n.jsxs)(u.o0, {
          strTitle: (0, D.we)("#PackageGrid_DiscardChangesTitle"),
          strOKButtonText: (0, D.we)("#PackageGrid_DiscardChangesButton"),
          onOK: s,
          bDestructiveWarning: !0,
          closeModal: i,
          children: [
            (0, D.Yp)("#PricingDashboard_DiscardChangesExplanation", r.length),
            (0, n.jsx)(j.t, { rgLocalPriceOverrides: r }),
          ],
        });
      }
      var m = r(18715),
        S = r.n(m);
      const f = 30,
        N = 40;
      function I(e) {
        const { bReloadPageOnSave: i } = e,
          r = (0, c.Ci)();
        let s = r?.length ?? 0,
          o = s > 0;
        const [t, l, d] = (0, a.uD)(),
          [g, h, _] = (0, a.uD)();
        return (0, n.jsxs)("div", {
          className: (0, p.A)(S().ToolbarInfo, o && S().Visible),
          children: [
            (0, n.jsx)("div", {
              className: S().ChangeCount,
              children: (0, D.Yp)("#PackageGrid_PendingChangeCount", s),
            }),
            (0, n.jsxs)("div", {
              className: S().Buttons,
              children: [
                (0, n.jsx)(P.$n, {
                  onClick: l,
                  disabled: 0 == s,
                  className: (0, p.A)(S().Button, S().SaveButton),
                  children: (0, D.we)("#PackageGrid_SaveChangesDialogButton"),
                }),
                (0, n.jsx)(u.EN, {
                  active: t,
                  children: (0, n.jsx)(W, {
                    closeModal: d,
                    bReloadPageOnSave: i,
                  }),
                }),
                (0, n.jsx)(P.$n, {
                  className: S().Button,
                  onClick: h,
                  children: (0, D.we)(
                    "#PackageGrid_DiscardChangesDialogButton",
                  ),
                }),
                (0, n.jsx)(u.EN, {
                  active: g,
                  children: (0, n.jsx)(C, { closeModal: _ }),
                }),
              ],
            }),
          ],
        });
      }
      function T() {
        return l.useCallback(
          (e, i) =>
            (0, g.pg)((0, n.jsx)(W, { strContinueUrl: i }), (0, x.uX)(e)),
          [],
        );
      }
      function k(e) {
        return e
          .filter((e) => e.nPriceInCents > e.nOldPriceInCents)
          .map((e) => e.packageID);
      }
      const O = 5;
      function y(e) {
        const { rgViolations: i } = e;
        if (0 == i.length) return null;
        const r = i.slice(0, O),
          s = i.length - r.length,
          a = (0, n.jsx)(b.uU, {
            href: "https://partner.steamgames.com/doc/store/pricing",
          });
        return (0, n.jsxs)("div", {
          className: S().PricePreviewWarning,
          children: [
            r.map((e) =>
              (0, n.jsx)(
                "div",
                {
                  className: S().PricePreviewWarningLine,
                  children: (0, D.we)(
                    e.bTooLow
                      ? "#PricingDashboard_PreviewWarning_TooLow"
                      : "#PricingDashboard_PreviewWarning_TooHigh",
                    (0, t.ww)(e.packageID),
                    e.strPriceKey,
                    (0, c.Wx)(e.nPriceInCents, e.strPriceKey).join(""),
                    (0, c.Wx)(e.nLimitInCents, e.strPriceKey).join(""),
                  ),
                },
                `${e.packageID}_${e.strPriceKey}`,
              ),
            ),
            s > 0 &&
              (0, n.jsx)("div", {
                className: S().PricePreviewWarningLine,
                children: (0, D.Yp)(
                  "#PricingDashboard_PreviewWarning_MorePriceProblems",
                  s,
                ),
              }),
            (0, n.jsx)("div", {
              className: S().PricePreviewWarningLine,
              children: (0, D.oW)(
                "#PricingDashboard_PreviewWarning_SeeRules",
                a,
              ),
            }),
          ],
        });
      }
      function W(e) {
        const { closeModal: i, strContinueUrl: r, bReloadPageOnSave: a } = e,
          h = (0, c.Ci)(),
          _ = (0, c.NC)(),
          [b, v] = l.useState(void 0),
          p = (function (e) {
            let [i, r] = l.useState(void 0);
            const n = (0, o.zq)(),
              a = (0, d.P_)(60);
            return (
              l.useEffect(() => {
                r(void 0);
                let i = k(e);
                i.length > 0
                  ? n(i, void 0, 6e4).then((e) => {
                      r(e);
                    })
                  : r(s.R);
              }, [r, e, n]),
              l.useMemo(() => {
                if (void 0 === i) return null;
                if (i != s.R) return { days: 0, loadFailed: !0 };
                let r = Number.MAX_SAFE_INTEGER,
                  n = k(e);
                for (let e of n) {
                  const i = (0, o.qN)(e);
                  for (const e of i) {
                    if (e.rtStartDate < a) continue;
                    let i = Math.floor((e.rtStartDate - a) / w.Kp.PerDay);
                    r = Math.min(r, i);
                  }
                }
                return { days: r, loadFailed: !1 };
              }, [i, a, e])
            );
          })(h);
        if (!p) return null;
        const x = !!r,
          C = (0, D.we)(
            x
              ? "#PackageGrid_NavigationWarning_Title"
              : "#PricingDashboard_SavePricesTitle",
          ),
          m = (0, D.Yp)("#PricingDashboard_SavePricesExplanation", h.length);
        if (p.loadFailed)
          return (0, n.jsx)(u.o0, {
            strTitle: C,
            bAlertDialog: !0,
            onOK: i,
            onCancel: i,
            closeModal: i,
            children: (0, n.jsx)("div", {
              className: S().PublishErrorDialog,
              children: (0, D.oW)(
                "#PricingDashboard_SavePrices_FailedToLoad",
                (0, n.jsx)("div", {}),
                (0, n.jsx)("div", {}),
              ),
            }),
          });
        let f = [],
          N = new Set(),
          I = new Set();
        for (const e of h) {
          const { packageID: i, strPriceKey: r, nPriceInCents: n } = e,
            { nMinPriceInCents: s, nMaxPriceInCents: a } = (0, c.tn)(i, r);
          n < s
            ? f.push({
                packageID: i,
                strPriceKey: r,
                nPriceInCents: n,
                nLimitInCents: s,
                bTooLow: !0,
              })
            : a &&
              n > a &&
              f.push({
                packageID: i,
                strPriceKey: r,
                nPriceInCents: n,
                nLimitInCents: a,
                bTooLow: !1,
              }),
            e.nPriceInCents > e.nOldPriceInCents && N.add(e.strPriceKey),
            I.add(e.packageID);
        }
        const T = Array.from(N);
        let O,
          W = (0, c.ww)(I);
        if (W.length > 0) {
          let e = W.map((e) => (0, t.ww)(e));
          O = (0, D.we)("#PricingDashboad_RequiredPrices", e.join(", "));
        }
        const R = f.length > 0 || void 0 === b || 0 != W.length,
          K = (e) => {
            r
              ? (window.location.href = r)
              : a && !e && window.location.reload();
          },
          M = () => {
            void 0 !== b
              ? (e.closeModal(),
                (0, g.pg)(
                  (0, n.jsx)(B, { bAutoPublish: b, fnOnSuccess: K }),
                  window,
                ))
              : console.error(
                  "Pricing:SaveChangesDialog auto publish undefined",
                );
          };
        return (0, n.jsx)(u.eV, {
          title: C,
          onOK: M,
          onCancel: e.closeModal,
          bDestructiveWarning: x,
          closeModal: i,
          children: (0, n.jsxs)(P.nB, {
            className: S().SaveDialogBody,
            children: [
              (0, n.jsxs)(P.a3, {
                className: S().SaveDialogBodyText,
                children: [
                  x &&
                    (0, n.jsx)("div", {
                      className: S().NavigationWarning,
                      children: (0, D.we)("#PackageGrid_NavigationWarning"),
                    }),
                  m,
                  (0, n.jsx)(y, { rgViolations: f }),
                  O &&
                    (0, n.jsxs)("div", {
                      className: S().PricePreviewWarning,
                      children: [" ", O, " "],
                    }),
                  (0, n.jsx)(j.t, { rgLocalPriceOverrides: h }),
                  (0, n.jsx)(A, {
                    rgIncreasedPriceKeys: T,
                    nextDiscount: p.days,
                  }),
                  (0, n.jsx)(L, {
                    value: b,
                    onChange: v,
                    nextDiscount: p.days,
                  }),
                ],
              }),
              (0, n.jsx)(P.wi, {
                children: x
                  ? (0, n.jsx)(P.VQ, {
                      strOKText: (0, D.we)("#Button_Save"),
                      onOK: M,
                      bOKDisabled: R,
                      strUpdateText: (0, D.we)(
                        "#PackageGrid_NavigateWithoutSavingButton",
                      ),
                      onUpdate: () => {
                        _(), e.closeModal(), K(!0);
                      },
                      onCancel: e.closeModal,
                    })
                  : (0, n.jsx)(P.CB, {
                      strOKText: (0, D.we)("#Button_Save"),
                      onOK: M,
                      bOKDisabled: R,
                      onCancel: e.closeModal,
                    }),
              }),
            ],
          }),
        });
      }
      function A(e) {
        let i,
          { rgIncreasedPriceKeys: r, nextDiscount: s } = e;
        return 0 == r.length
          ? null
          : ((i =
              s < f
                ? (0, D.we)(
                    "#PricingDashboard_SavePrice_FutureDiscountTooSoon",
                    f,
                  )
                : s < N
                  ? (0, D.we)(
                      "#PricingDashboard_SavePrice_FutureDiscountSoon",
                      s,
                      f,
                    )
                  : (0, D.we)(
                      "#PricingDashboard_SavePrice_CooldownWarning",
                      f,
                    )),
            (0, n.jsxs)("div", {
              className: S().PriceChangeSaveWarning,
              children: [
                (0, n.jsx)("div", {
                  className: S().PriceChangeSaveWarningArrow,
                  children: (0, n.jsx)(h.i3G, { angle: 0 }),
                }),
                (0, n.jsxs)("div", {
                  className: S().PriceChangeSaveWarningText,
                  children: [
                    (0, n.jsxs)("div", {
                      className: S().HigherPriceWarning,
                      children: [" ", i, " "],
                    }),
                    (0, n.jsx)("div", {
                      className: S().IncreasedCurrencies,
                      children: (0, D.Yp)(
                        "#PricingDashboard_SavePrice_IncreasedCurrencies",
                        r.length,
                        r.join(", "),
                      ),
                    }),
                  ],
                }),
              ],
            }));
      }
      function L(e) {
        let { value: i, onChange: r } = e,
          s = e.nextDiscount <= f;
        return (0, n.jsxs)("div", {
          className: S().AutoPublishCheckBox,
          children: [
            (0, n.jsx)(P.Od, {
              className: S().RadioButtons,
              checked: !1 === i,
              onChange: () => r(!1),
              label: (0, D.we)("#PricingDashboard_AutoPublish_Disabled"),
            }),
            (0, n.jsx)(P.Od, {
              className: S().RadioButtons,
              checked: !0 === i,
              disabled: s,
              onChange: () => r(!0),
              label: (0, D.we)("#PricingDashboard_AutoPublish_Enabled"),
            }),
          ],
        });
      }
      function B(e) {
        const { closeModal: i, bAutoPublish: r, fnOnSuccess: a } = e,
          o = (0, c.Ci)(),
          t = (0, c.Bt)(),
          d = (0, v.m)("SaveProgressDialog"),
          [P, g] = l.useState(0),
          [h, b] = l.useState(null),
          p = !r;
        return (
          l.useEffect(() => {
            (async () => {
              const e = Array.from(new Set(o.map((e) => e.packageID)));
              for (let i = 0; i < e.length; i++) {
                g(i);
                const r = e[i],
                  n = await t(r, p, d);
                if (d.token.reason) return;
                if (n.success != s.R)
                  return void b(
                    n.msg ?? (0, D.we)("#PricingDashboard_SavePricesError"),
                  );
              }
              g(e.length), a(), i();
            })();
          }, []),
          (0, n.jsx)(u.o0, {
            strTitle: (0, D.we)("#PackageGrid_SaveInProgress"),
            bAlertDialog: !!h,
            strOKButtonText: h
              ? (0, D.we)("#Button_Close")
              : (0, D.we)("#Button_OK"),
            onOK: h ? i : a,
            onCancel: () => {
              d.cancel("cancelled by user");
            },
            closeModal: i,
            bDestructiveWarning: !0,
            children:
              h ??
              (0, n.jsx)(_.t, {
                position: "center",
                string: (0, D.we)("#PricingDashboard_Progress", P),
              }),
          })
        );
      }
    },
    83800: (e, i, r) => {
      "use strict";
      r.d(i, { J: () => o });
      var n = r(7850),
        s = r(90626);
      const a = s.lazy(() =>
          Promise.all([r.e(4781), r.e(1194)]).then(r.bind(r, 81194)),
        ),
        o = a
          ? function (e) {
              return (0, n.jsx)(s.Suspense, {
                fallback: null,
                children: (0, n.jsx)(a, { ...e }),
              });
            }
          : (e) => null;
    },
    4434: (e, i, r) => {
      "use strict";
      r.d(i, { m: () => o });
      var n = r(41735),
        s = r.n(n),
        a = r(90626);
      function o(e) {
        const i = a.useRef(s().CancelToken.source());
        return (
          a.useEffect(() => {
            const r = i.current;
            return () => r.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          i.current
        );
      }
    },
  },
]);

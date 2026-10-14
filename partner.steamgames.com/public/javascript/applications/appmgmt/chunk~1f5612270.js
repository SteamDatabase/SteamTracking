/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [33912],
    {
      67829: (M, W, s) => {
        "use strict";
        s.d(W, { i: () => j });
        var e = s(7850),
          f = s(20929),
          h = s(37424),
          I = s(2801),
          p = s(18210),
          a = s(3166),
          D = s(14578),
          y = s.n(D),
          b = s(58033);
        function j(K) {
          const { closeModal: d, fnOnApply: U, singlePackage: S } = K,
            B = (0, h._A)();
          return (0, e.jsxs)(I.o0, {
            closeModal: d,
            bAlertDialog: !0,
            strTitle: b.g.Localize("#PricingDashboard_ApplyConversion_Method"),
            onOK: () => {
              B(), U && U();
            },
            strOKButtonText: S
              ? (0, p.we)("#PricingDashboard_ApplyGuidelines_Button_Single")
              : (0, p.we)("#PricingDashboard_ApplyGuidelines_Button"),
            children: [
              (0, e.jsx)("div", {
                className: y().Instructions,
                children: b.g.Localize(
                  "#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions",
                ),
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("a", {
                href: a.TS.PARTNER_BASE_URL + "doc/store/pricing#5",
                target: "_blank",
                children: (0, p.we)("#PricingDashboard_ApplyGuidelines_Link"),
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
              !S &&
                (0, e.jsx)("div", {
                  className: y().Instructions,
                  children: (0, p.we)(
                    "#PricingDashboard_ApplyGuidelines_Instructions2",
                  ),
                }),
              (0, e.jsx)("div", {
                className: y().Instructions,
                children: (0, p.we)(
                  "#PricingDashboard_ApplyGuidelines_Assurance",
                ),
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(f.J, { bHideTour: !0 }),
            ],
          });
        }
      },
      1912: (M, W, s) => {
        "use strict";
        s.d(W, { t: () => U });
        var e = s(7850),
          f = s(31886),
          h = s(37424),
          I = s(90626),
          p = s(58534),
          a = s(36118),
          D = s(71421),
          y = s(36707),
          b = s(18210),
          j = s(31069),
          K = s(18715),
          d = s.n(K);
        function U(B) {
          const { rgLocalPriceOverrides: E } = B,
            R = 9,
            [i, N] = I.useState(E.length < R);
          return (0, e.jsx)("div", {
            className: d().SeeDetailsSection,
            children: i
              ? (0, e.jsx)("div", {
                  className: d().PriceOverrideSummaryList,
                  children: E.map((A) =>
                    (0, e.jsx)(
                      S,
                      { override: A },
                      `${A.packageID}_${A.strPriceKey}`,
                    ),
                  ),
                })
              : (0, e.jsx)(p.$n, {
                  onClick: () => N(!0),
                  className: d().SeeDetailsButton,
                  children: (0, b.we)("#PackageGrid_SeePendingChanges"),
                }),
          });
        }
        function S(B) {
          const { override: E } = B,
            {
              packageID: R,
              strPriceKey: i,
              nPriceInCents: N,
              nOldPriceInCents: A,
            } = E,
            k = (0, f.ww)(R),
            [J, g, F] = (0, h.Wx)(A, i),
            [ae, Q, ie] = (0, h.Wx)(N, i),
            Z = (0, h.XK)(i),
            { nMinPriceInCents: q, nMaxPriceInCents: Y } = (0, h.tn)(R, i),
            ee = N < q,
            G = !!Y && N > Y,
            V = ee || G;
          return (0, e.jsxs)("div", {
            className: (0, y.A)(d().PriceOverrideSummary),
            children: [
              (0, e.jsx)(D.he, {
                toolTipContent: Z,
                direction: "top",
                className: d().Currency,
                strTooltipClassname: d().HoverToolTip,
                children: i,
              }),
              (0, e.jsx)(D.he, {
                toolTipContent: `${R}: ${k}`,
                direction: "overlay",
                className: d().PackageName,
                strTooltipClassname: d().HoverToolTip,
                children: k,
              }),
              V
                ? (0, e.jsx)(j.T6, { packageID: R, strPriceKey: i })
                : (0, e.jsx)(j.Gy, { nPriceInCents: N, nSavedPriceInCents: A }),
              (0, e.jsxs)("div", {
                className: d().OldPriceCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: d().PricePrefix,
                    children: J,
                  }),
                  (0, e.jsx)("span", { className: d().OldPrice, children: g }),
                  (0, e.jsx)("div", {
                    className: d().PriceSuffix,
                    children: F,
                  }),
                ],
              }),
              (0, e.jsx)("span", {
                className: d().ChangeArrow,
                children: (0, e.jsx)(a.i3G, { angle: 90 }),
              }),
              (0, e.jsxs)("div", {
                className: d().NewPriceCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: d().PricePrefix,
                    children: J,
                  }),
                  (0, e.jsx)("span", { className: d().NewPrice, children: Q }),
                  (0, e.jsx)("div", {
                    className: d().PriceSuffix,
                    children: F,
                  }),
                ],
              }),
            ],
          });
        }
      },
      71764: (M, W, s) => {
        "use strict";
        s.d(W, { O: () => j });
        var e = s(7850),
          f = s(90626),
          h = s(85274),
          I = s.n(h),
          p = s(36118),
          a = s(36707),
          D = s(1960),
          y = s(561);
        const b = new D.MX("price-grid-cell-popout-elements");
        function j(K) {
          let { hoverKey: d, className: U, renderHover: S } = K,
            B = (0, a.A)(I().MoreDots, U),
            E = f.useRef(void 0),
            R = f.useCallback(() => {
              b.HideElement(E.current.ownerDocument, d);
            }, [d]);
          const i = (A) => {
              A.target.focus();
              let k = (0, e.jsx)(y.g, {
                target: E.current,
                direction: "top",
                bEnablePointerEvents: !0,
                nBodyDistance: 0,
                onClick: R,
                children: S(),
              });
              b.ShowElement(E.current.ownerDocument, k, d);
            },
            N = () => {
              b.HideElement(E.current.ownerDocument, d, 100);
            };
          return (0, e.jsx)("div", {
            ref: E,
            tabIndex: -1,
            className: B,
            onFocus: i,
            onBlur: N,
            children: (0, e.jsx)(p.faJ, {}),
          });
        }
      },
      81246: (M, W, s) => {
        "use strict";
        s.d(W, { m2: () => te, QD: () => ce, RW: () => le });
        var e = s(7850),
          f = s(15252),
          h = s(37424),
          I = s(31069),
          p = s(87108),
          a = s(18210),
          D = s(61075),
          y = s(36707),
          b = s(71421),
          j = s(71764),
          K = s(12917),
          d = s.n(K),
          U = s(72604),
          S = s(90626),
          B = s(2801),
          E = s(85599),
          R = s(53107),
          i = s(18715),
          N = s.n(i),
          A = s(15659),
          k = s(7582),
          J = s(55541),
          g = s(1912);
        function F(r) {
          const { closeModal: n, packageID: c, bPackageVisible: t } = r,
            o = (0, h.FX)(c),
            P = o.some((m) => m.nPriceInCents > m.nOldPriceInCents),
            x = Z(c, P),
            {
              fnPublish: v,
              ePublishState: _,
              strPublishError: O,
              bBlockedByCooldown: C,
            } = Q(c),
            T = x == 4 || C,
            w = S.useCallback(async () => {
              (await v()) && n?.();
            }, [v, n]);
          let H;
          if (x == 3)
            H = (0, a.oW)(
              "#PricingDashboard_PriceProposal_Publish_FailedToLoad",
              (0, e.jsx)("div", {}),
              (0, e.jsx)("div", {}),
            );
          else if (T) {
            let m = (0, e.jsx)(R.uU, {
              href: "https://partner.steamgames.com/doc/store/pricing",
            });
            H = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  children: (0, a.we)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError1",
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, a.oW)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError2",
                    m,
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, a.we)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError3",
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, e.jsxs)("ol", {
                    children: [
                      (0, e.jsx)("li", {
                        children: (0, a.we)(
                          "#PricingDashboard_PriceProposal_Publish_CooldownError3a",
                        ),
                      }),
                      (0, e.jsx)("li", {
                        children: (0, a.we)(
                          "#PricingDashboard_PriceProposal_Publish_CooldownError3b",
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            });
          } else
            _ == 3 &&
              (H =
                O ||
                (0, a.oW)(
                  "#PricingDashboard_PriceProposal_Publish_FailedToPublish",
                  (0, e.jsx)("div", {}),
                  (0, e.jsx)("div", {}),
                ));
          if (H) {
            let m = (0, a.we)(
              t
                ? "#PricingDashboard_PriceProposal_Publish_Title"
                : "#PricingDashboard_StageNewPrices_title",
            );
            return (
              T &&
                (m = (0, a.we)(
                  "#PricingDashboard_PriceProposal_Publish_CantPublishTitle",
                )),
              (0, e.jsx)(B.o0, {
                strTitle: m,
                bAlertDialog: !0,
                onOK: n,
                onCancel: n,
                closeModal: n,
                children: (0, e.jsx)("div", {
                  className: N().PublishErrorDialog,
                  children: H,
                }),
              })
            );
          }
          let L = x == 1 || _ == 1;
          return (0, e.jsxs)(B.o0, {
            strTitle: (0, a.we)(
              t
                ? "#PricingDashboard_PriceProposal_Publish_Title"
                : "#PricingDashboard_StageNewPrices_title",
            ),
            bAlertDialog: !1,
            strOKButtonText: (0, a.we)(
              t
                ? "#PricingDashboard_PriceProposal_Publish_Button"
                : "#PricingDashboard_StageNewPrices_ok",
            ),
            bOKDisabled: L,
            bCancelDisabled: L,
            bDestructiveWarning: !0,
            bCloseAfterOK: !1,
            onOK: w,
            onCancel: n,
            closeModal: n,
            children: [
              L && (0, e.jsx)(E.t, { position: "center" }),
              !L &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, a.Yp)(
                      t
                        ? "#PricingDashboard_PriceProposal_Publish_Explanation"
                        : "#PricingDashboard_StageNewPrices_desc_Timing",
                      o.length,
                    ),
                    !t &&
                      (0, e.jsx)("div", {
                        className: N().StageNote,
                        children: (0, a.we)(
                          "#PricingDashboard_StageNewPrices_NoStoreChange",
                        ),
                      }),
                    t &&
                      P &&
                      (0, e.jsx)("div", {
                        className: N().PublishWarning,
                        children: (0, a.we)(
                          "#PricingDashboard_PriceProposal_Publish_CooldownWarning",
                        ),
                      }),
                    (0, e.jsx)(g.t, { rgLocalPriceOverrides: o }),
                  ],
                }),
            ],
          });
        }
        var ae = ((r) => (
          (r[(r.Idle = 0)] = "Idle"),
          (r[(r.Loading = 1)] = "Loading"),
          (r[(r.OK = 2)] = "OK"),
          (r[(r.Failed = 3)] = "Failed"),
          r
        ))(ae || {});
        function Q(r) {
          const n = (0, h.h4)(),
            [c, t] = S.useState(0),
            [o, P] = S.useState(void 0),
            [x, v] = S.useState(!1);
          return {
            fnPublish: S.useCallback(async () => {
              t(1), P(void 0), v(!1);
              const O = await n(r);
              if (O.success != U.R) {
                const C = O.success == U.fb;
                return P(C ? O.msg : void 0), v(C && !!O.cooldown), t(3), !1;
              }
              return t(2), !0;
            }, [t, n, r]),
            ePublishState: c,
            strPublishError: o,
            bBlockedByCooldown: x,
          };
        }
        var ie = ((r) => (
          (r[(r.Idle = 0)] = "Idle"),
          (r[(r.Loading = 1)] = "Loading"),
          (r[(r.OK = 2)] = "OK"),
          (r[(r.FailedToLoad = 3)] = "FailedToLoad"),
          (r[(r.RequiresCooldown = 4)] = "RequiresCooldown"),
          r
        ))(ie || {});
        function Z(r, n) {
          let [c, t] = S.useState(void 0);
          const o = (0, A.zq)(),
            P = (0, k.P_)(60);
          return (
            S.useEffect(() => {
              n &&
                (t(void 0),
                o([r], void 0, 60 * 1e3).then(async (_) => {
                  t(_);
                }));
            }, [n, r, t, o]),
            n
              ? c == null
                ? 1
                : c != U.R
                  ? 3
                  : (0, A.qN)(r).every(
                        (_) => _.rtStartDate > P + J.nu || _.rtEndDate < P,
                      )
                    ? 2
                    : 4
              : 2
          );
        }
        var q = s(64868),
          Y = s(58534),
          ee = s(96434),
          G = s.n(ee),
          V = s(31886);
        function te(r) {
          const { packageID: n, bShowCancel: c } = r,
            t = (0, h.XB)(n),
            o = (0, h.d$)(n),
            P = o && (0, I.mK)(o.rtSubmitted),
            [x, v] = (0, p.Hl)(o?.submitterID),
            _ = v ? v.persona_name : o?.submitterID;
          let O = "PackageMore_" + n,
            C = null,
            T = null,
            w = null;
          t
            ? ((C = d().NeedsReview),
              (w = (0, a.we)(
                "#PricingDashboard_PriceProposal_NeedsReview_ttip",
              )),
              (T = (0, a.we)("#PricingDashboard_PriceProposal_NeedsReview")))
            : o?.eState == D.Al && o.bPartnerWillPublish
              ? ((C = d().PartnerWillPublish),
                (w = (0, a.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip",
                  _,
                  P,
                )),
                (T = (0, a.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish",
                )))
              : o?.eState == D.Al && !o.bPartnerWillPublish
                ? ((C = d().AutoPublish),
                  (w = (0, a.we)(
                    "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip",
                    _,
                    P,
                  )),
                  (T = (0, e.jsxs)("div", {
                    children: [
                      (0, a.we)(
                        "#PricingDashboard_PriceProposal_WaitingForReview",
                      ),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("span", {
                        children: (0, a.we)(
                          "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish",
                        ),
                      }),
                    ],
                  })))
                : o?.eState == D.Zo
                  ? ((C = d().ApprovedCanPublish),
                    (w = (0, a.we)(
                      (0, V.E1)(n)
                        ? "#PricingDashboard_PriceProposal_Approved_ttip"
                        : "#PricingDashboard_PriceProposal_Approved_Stage_ttip",
                    )),
                    (T = (0, e.jsx)(u, { packageID: n })))
                  : ((C = d().NoProposalsInFlight),
                    (w = (0, a.we)(
                      "#PricingDashboard_PriceProposal_NoneInFlight_ttip",
                    )),
                    (T = (0, a.we)(
                      "#PricingDashboard_PriceProposal_NoneInFlight",
                    )));
          let H = () => (0, e.jsx)(l, { packageID: n }),
            L = c && (t || !!o);
          return (0, e.jsxs)("div", {
            className: (0, y.A)(d().ProposalState, C),
            children: [
              (0, e.jsxs)(b.he, {
                toolTipContent: w,
                className: d().StateText,
                children: [
                  (0, e.jsx)("div", { className: d().ProposalStateKey }),
                  T,
                ],
              }),
              L &&
                (0, e.jsx)(j.O, {
                  hoverKey: O,
                  className: d().PackageMore,
                  renderHover: H,
                }),
            ],
          });
        }
        function se(r) {
          const n = (0, h.d$)(r),
            c = (0, V.E1)(r);
          return n
            ? n.eState == D.Zo
              ? c
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
              : n.bPartnerWillPublish
                ? {
                    bApproved: !1,
                    strLabel: "#PricingDashboard_ProposedPrice_Status_InReview",
                    strMessage: c
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
        function le(r) {
          const n = se(r.packageID);
          return n
            ? (0, e.jsx)(f.EY, {
                size: "4",
                color: n.bApproved ? "text-success" : "text-warning",
                children: (0, a.we)(n.strMessage),
              })
            : null;
        }
        function ce(r) {
          const n = se(r.packageID);
          return n
            ? (0, e.jsx)(f.EY, {
                size: "3",
                color: n.bApproved ? "text-success" : "text-warning",
                children: (0, a.we)(n.strLabel),
              })
            : null;
        }
        function u(r) {
          const { packageID: n } = r,
            [c, t, o] = (0, q.uD)(),
            P = (0, V.E1)(n);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Y.jn, {
                onClick: t,
                children: (0, a.we)(
                  P
                    ? "#PricingDashboard_PriceProposal_PublishDialog_Button"
                    : "#PricingDashboard_StageNewPrices",
                ),
              }),
              (0, e.jsx)(B.EN, {
                active: c,
                children: (0, e.jsx)(F, {
                  packageID: n,
                  bPackageVisible: P,
                  closeModal: o,
                }),
              }),
            ],
          });
        }
        function l(r) {
          const { packageID: n } = r,
            c = (0, h.XB)(n);
          let t = (0, h.T_)(n);
          const o = (0, h.d$)(n);
          let P = (0, h.fr)(n);
          return (0, e.jsx)("div", {
            className: G().PricePopout,
            children: (0, e.jsxs)("div", {
              className: G().DetailRow,
              children: [
                c &&
                  (0, e.jsx)("div", {
                    className: G().DetailLabel,
                    onClick: t,
                    children: (0, a.we)("#PricingDashboard_RevertAllPackage"),
                  }),
                !!o &&
                  (0, e.jsx)("div", {
                    className: G().DetailLabel,
                    onClick: P,
                    children: (0, a.we)(
                      "#PricingDashboard_CancelPriceProposal",
                    ),
                  }),
              ],
            }),
          });
        }
      },
      78779: (M, W, s) => {
        "use strict";
        s.d(W, { Zg: () => G, BL: () => Q, cK: () => ie });
        var e = s(7850),
          f = s(72604),
          h = s(64868),
          I = s(15659),
          p = s(31886),
          a = s(37424),
          D = s(90626),
          y = s(7582),
          b = s(58534),
          j = s(2801),
          K = s(88003),
          d = s(36118),
          U = s(85599),
          S = s(53107),
          B = s(47689),
          E = s(36707),
          R = s(82734),
          i = s(18210),
          N = s(36174),
          A = s(1912);
        function k(u) {
          const { closeModal: l } = u,
            r = (0, a.Ci)(),
            n = (0, a.NC)();
          return (0, e.jsxs)(j.o0, {
            strTitle: (0, i.we)("#PackageGrid_DiscardChangesTitle"),
            strOKButtonText: (0, i.we)("#PackageGrid_DiscardChangesButton"),
            onOK: n,
            bDestructiveWarning: !0,
            closeModal: l,
            children: [
              (0, i.Yp)(
                "#PricingDashboard_DiscardChangesExplanation",
                r.length,
              ),
              (0, e.jsx)(A.t, { rgLocalPriceOverrides: r }),
            ],
          });
        }
        var J = s(18715),
          g = s.n(J);
        const F = 30,
          ae = 40;
        function Q(u) {
          const { bReloadPageOnSave: l } = u;
          let n = (0, a.Ci)()?.length ?? 0,
            c = n > 0;
          const [t, o, P] = (0, h.uD)(),
            [x, v, _] = (0, h.uD)();
          return (0, e.jsxs)("div", {
            className: (0, E.A)(g().ToolbarInfo, c && g().Visible),
            children: [
              (0, e.jsx)("div", {
                className: g().ChangeCount,
                children: (0, i.Yp)("#PackageGrid_PendingChangeCount", n),
              }),
              (0, e.jsxs)("div", {
                className: g().Buttons,
                children: [
                  (0, e.jsx)(b.$n, {
                    onClick: o,
                    disabled: n == 0,
                    className: (0, E.A)(g().Button, g().SaveButton),
                    children: (0, i.we)("#PackageGrid_SaveChangesDialogButton"),
                  }),
                  (0, e.jsx)(j.EN, {
                    active: t,
                    children: (0, e.jsx)(G, {
                      closeModal: P,
                      bReloadPageOnSave: l,
                    }),
                  }),
                  (0, e.jsx)(b.$n, {
                    className: g().Button,
                    onClick: v,
                    children: (0, i.we)(
                      "#PackageGrid_DiscardChangesDialogButton",
                    ),
                  }),
                  (0, e.jsx)(j.EN, {
                    active: x,
                    children: (0, e.jsx)(k, { closeModal: _ }),
                  }),
                ],
              }),
            ],
          });
        }
        function ie() {
          return D.useCallback(
            (u, l) =>
              (0, K.pg)((0, e.jsx)(G, { strContinueUrl: l }), (0, R.uX)(u)),
            [],
          );
        }
        function Z(u) {
          return u
            .filter((l) => l.nPriceInCents > l.nOldPriceInCents)
            .map((l) => l.packageID);
        }
        function q(u) {
          let [l, r] = D.useState(void 0);
          const n = (0, I.zq)(),
            c = (0, y.P_)(60);
          return (
            D.useEffect(() => {
              r(void 0);
              let o = Z(u);
              o.length > 0
                ? n(o, void 0, 60 * 1e3).then((P) => {
                    r(P);
                  })
                : r(f.R);
            }, [r, u, n]),
            D.useMemo(() => {
              if (l === void 0) return null;
              if (l != f.R) return { days: 0, loadFailed: !0 };
              let o = Number.MAX_SAFE_INTEGER,
                P = Z(u);
              for (let x of P) {
                const v = (0, I.qN)(x);
                for (const _ of v) {
                  if (_.rtStartDate < c) continue;
                  let O = Math.floor((_.rtStartDate - c) / N.Kp.PerDay);
                  o = Math.min(o, O);
                }
              }
              return { days: o, loadFailed: !1 };
            }, [l, c, u])
          );
        }
        const Y = 5;
        function ee(u) {
          const { rgViolations: l } = u;
          if (l.length == 0) return null;
          const r = l.slice(0, Y),
            n = l.length - r.length,
            c = (0, e.jsx)(S.uU, {
              href: "https://partner.steamgames.com/doc/store/pricing",
            });
          return (0, e.jsxs)("div", {
            className: g().PricePreviewWarning,
            children: [
              r.map((t) =>
                (0, e.jsx)(
                  "div",
                  {
                    className: g().PricePreviewWarningLine,
                    children: (0, i.we)(
                      t.bTooLow
                        ? "#PricingDashboard_PreviewWarning_TooLow"
                        : "#PricingDashboard_PreviewWarning_TooHigh",
                      (0, p.ww)(t.packageID),
                      t.strPriceKey,
                      (0, a.Wx)(t.nPriceInCents, t.strPriceKey).join(""),
                      (0, a.Wx)(t.nLimitInCents, t.strPriceKey).join(""),
                    ),
                  },
                  `${t.packageID}_${t.strPriceKey}`,
                ),
              ),
              n > 0 &&
                (0, e.jsx)("div", {
                  className: g().PricePreviewWarningLine,
                  children: (0, i.Yp)(
                    "#PricingDashboard_PreviewWarning_MorePriceProblems",
                    n,
                  ),
                }),
              (0, e.jsx)("div", {
                className: g().PricePreviewWarningLine,
                children: (0, i.oW)(
                  "#PricingDashboard_PreviewWarning_SeeRules",
                  c,
                ),
              }),
            ],
          });
        }
        function G(u) {
          const { closeModal: l, strContinueUrl: r, bReloadPageOnSave: n } = u,
            c = (0, a.Ci)(),
            t = (0, a.NC)(),
            [o, P] = D.useState(void 0),
            x = q(c);
          if (!x) return null;
          const v = !!r,
            _ = (0, i.we)(
              v
                ? "#PackageGrid_NavigationWarning_Title"
                : "#PricingDashboard_SavePricesTitle",
            ),
            O = (0, i.Yp)("#PricingDashboard_SavePricesExplanation", c.length);
          if (x.loadFailed)
            return (0, e.jsx)(j.o0, {
              strTitle: _,
              bAlertDialog: !0,
              onOK: l,
              onCancel: l,
              closeModal: l,
              children: (0, e.jsx)("div", {
                className: g().PublishErrorDialog,
                children: (0, i.oW)(
                  "#PricingDashboard_SavePrices_FailedToLoad",
                  (0, e.jsx)("div", {}),
                  (0, e.jsx)("div", {}),
                ),
              }),
            });
          let C = [],
            T = new Set(),
            w = new Set();
          for (const z of c) {
            const { packageID: ne, strPriceKey: Pe, nPriceInCents: oe } = z,
              { nMinPriceInCents: ue, nMaxPriceInCents: ge } = (0, a.tn)(
                ne,
                Pe,
              );
            oe < ue
              ? C.push({
                  packageID: ne,
                  strPriceKey: Pe,
                  nPriceInCents: oe,
                  nLimitInCents: ue,
                  bTooLow: !0,
                })
              : ge &&
                oe > ge &&
                C.push({
                  packageID: ne,
                  strPriceKey: Pe,
                  nPriceInCents: oe,
                  nLimitInCents: ge,
                  bTooLow: !1,
                }),
              z.nPriceInCents > z.nOldPriceInCents && T.add(z.strPriceKey),
              w.add(z.packageID);
          }
          const H = Array.from(T);
          let L = (0, a.ww)(w),
            m;
          if (L.length > 0) {
            let z = L.map((ne) => (0, p.ww)(ne));
            m = (0, i.we)("#PricingDashboad_RequiredPrices", z.join(", "));
          }
          const $ = C.length > 0 || o === void 0 || L.length != 0,
            X = (z) => {
              r
                ? (window.location.href = r)
                : n && !z && window.location.reload();
            },
            re = () => {
              if (o === void 0) {
                console.error(
                  "Pricing:SaveChangesDialog auto publish undefined",
                );
                return;
              }
              u.closeModal(),
                (0, K.pg)(
                  (0, e.jsx)(ce, { bAutoPublish: o, fnOnSuccess: X }),
                  window,
                );
            },
            de = () => {
              t(), u.closeModal(), X(!0);
            };
          return (0, e.jsx)(j.eV, {
            title: _,
            onOK: re,
            onCancel: u.closeModal,
            bDestructiveWarning: v,
            closeModal: l,
            children: (0, e.jsxs)(b.nB, {
              className: g().SaveDialogBody,
              children: [
                (0, e.jsxs)(b.a3, {
                  className: g().SaveDialogBodyText,
                  children: [
                    v &&
                      (0, e.jsx)("div", {
                        className: g().NavigationWarning,
                        children: (0, i.we)("#PackageGrid_NavigationWarning"),
                      }),
                    O,
                    (0, e.jsx)(ee, { rgViolations: C }),
                    m &&
                      (0, e.jsxs)("div", {
                        className: g().PricePreviewWarning,
                        children: [" ", m, " "],
                      }),
                    (0, e.jsx)(A.t, { rgLocalPriceOverrides: c }),
                    (0, e.jsx)(V, {
                      rgIncreasedPriceKeys: H,
                      nextDiscount: x.days,
                    }),
                    (0, e.jsx)(te, {
                      value: o,
                      onChange: P,
                      nextDiscount: x.days,
                    }),
                  ],
                }),
                (0, e.jsx)(b.wi, {
                  children: v
                    ? (0, e.jsx)(b.VQ, {
                        strOKText: (0, i.we)("#Button_Save"),
                        onOK: re,
                        bOKDisabled: $,
                        strUpdateText: (0, i.we)(
                          "#PackageGrid_NavigateWithoutSavingButton",
                        ),
                        onUpdate: de,
                        onCancel: u.closeModal,
                      })
                    : (0, e.jsx)(b.CB, {
                        strOKText: (0, i.we)("#Button_Save"),
                        onOK: re,
                        bOKDisabled: $,
                        onCancel: u.closeModal,
                      }),
                }),
              ],
            }),
          });
        }
        function V(u) {
          let { rgIncreasedPriceKeys: l, nextDiscount: r } = u;
          if (l.length == 0) return null;
          let n;
          return (
            r < F
              ? (n = (0, i.we)(
                  "#PricingDashboard_SavePrice_FutureDiscountTooSoon",
                  F,
                ))
              : r < ae
                ? (n = (0, i.we)(
                    "#PricingDashboard_SavePrice_FutureDiscountSoon",
                    r,
                    F,
                  ))
                : (n = (0, i.we)(
                    "#PricingDashboard_SavePrice_CooldownWarning",
                    F,
                  )),
            (0, e.jsxs)("div", {
              className: g().PriceChangeSaveWarning,
              children: [
                (0, e.jsx)("div", {
                  className: g().PriceChangeSaveWarningArrow,
                  children: (0, e.jsx)(d.i3G, { angle: 0 }),
                }),
                (0, e.jsxs)("div", {
                  className: g().PriceChangeSaveWarningText,
                  children: [
                    (0, e.jsxs)("div", {
                      className: g().HigherPriceWarning,
                      children: [" ", n, " "],
                    }),
                    (0, e.jsx)("div", {
                      className: g().IncreasedCurrencies,
                      children: (0, i.Yp)(
                        "#PricingDashboard_SavePrice_IncreasedCurrencies",
                        l.length,
                        l.join(", "),
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function te(u) {
          let { value: l, onChange: r } = u,
            n = () => r(!0),
            c = () => r(!1),
            t = u.nextDiscount <= F;
          return (0, e.jsxs)("div", {
            className: g().AutoPublishCheckBox,
            children: [
              (0, e.jsx)(b.Od, {
                className: g().RadioButtons,
                checked: l === !1,
                onChange: c,
                label: (0, i.we)("#PricingDashboard_AutoPublish_Disabled"),
              }),
              (0, e.jsx)(b.Od, {
                className: g().RadioButtons,
                checked: l === !0,
                disabled: t,
                onChange: n,
                label: (0, i.we)("#PricingDashboard_AutoPublish_Enabled"),
              }),
            ],
          });
        }
        const se = {
          USD_CIS: "#PricingDashboard_UnappliedProposal_PriceKeyName_USD_CIS",
          USD_LATAM:
            "#PricingDashboard_UnappliedProposal_PriceKeyName_USD_LATAM",
          USD_MENA: "#PricingDashboard_UnappliedProposal_PriceKeyName_USD_MENA",
          USD_SASIA:
            "#PricingDashboard_UnappliedProposal_PriceKeyName_USD_SASIA",
        };
        function le(u) {
          const { response: l, fnResolve: r } = u,
            { unappliedProposal: n, newProposal: c } = l,
            t = (0, i.$z)(n.rtSubmitted),
            o = Array.from(
              new Set([
                ...Object.keys(c?.prices ?? {}),
                ...Object.keys(n.prices ?? {}),
              ]),
            );
          return (0, e.jsx)(j.o0, {
            className: g().UnappliedProposalDialog,
            strTitle: (0, i.we)("#PricingDashboard_UnappliedProposal_Title"),
            strDescription: (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("p", {
                  children: (0, i.we)(
                    "#PricingDashboard_UnappliedProposal_Description",
                    (0, p.ww)(n.packageID),
                    t,
                  ),
                }),
                (0, e.jsx)("p", {
                  children: (0, i.we)(
                    "#PricingDashboard_UnappliedProposal_Instructions",
                  ),
                }),
              ],
            }),
            strOKButtonText: (0, i.we)(
              "#PricingDashboard_UnappliedProposal_Proceed",
            ),
            strCancelButtonText: (0, i.we)("#Button_Cancel"),
            onOK: () => r(!0),
            onCancel: () => r(!1),
            bDestructiveWarning: !0,
            children:
              o.length > 0 &&
              (0, e.jsxs)("table", {
                className: g().UnappliedPriceTable,
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", {
                          children: (0, i.we)(
                            "#PricingDashboard_UnappliedProposal_PriceKey",
                          ),
                        }),
                        (0, e.jsx)("th", {
                          children: (0, i.we)(
                            "#PricingDashboard_UnappliedProposal_PriceKeyName",
                          ),
                        }),
                        (0, e.jsxs)("th", {
                          className: g().ApprovedHeader,
                          children: [
                            (0, i.we)(
                              "#PricingDashboard_UnappliedProposal_UnappliedPrice",
                            ),
                            (0, e.jsx)("br", {}),
                            (0, i.we)(
                              "#PricingDashboard_UnappliedProposal_SubmittedDate",
                              t,
                            ),
                          ],
                        }),
                        (0, e.jsx)("th", {
                          children: (0, i.we)(
                            "#PricingDashboard_UnappliedProposal_NewPrice",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: o.map((P) => {
                      const x = Number(n.prices?.[P] ?? 0),
                        v = Number(c?.prices?.[P] ?? 0);
                      return (0, e.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, e.jsx)("td", { children: P }),
                            (0, e.jsx)("td", {
                              children: se[P] ? (0, i.we)(se[P]) : (0, a.XK)(P),
                            }),
                            (0, e.jsx)("td", {
                              children: (0, a.Wx)(x, P).join(""),
                            }),
                            (0, e.jsx)("td", {
                              className: (0, E.A)(x != v && g().ChangedPrice),
                              children: (0, a.Wx)(v, P).join(""),
                            }),
                          ],
                        },
                        P,
                      );
                    }),
                  }),
                ],
              }),
          });
        }
        function ce(u) {
          const { closeModal: l, bAutoPublish: r, fnOnSuccess: n } = u,
            c = (0, a.Ci)(),
            t = (0, a.Bt)(),
            o = (0, B.m)("SaveProgressDialog"),
            [P, x] = D.useState(0),
            [v, _] = D.useState(null),
            [O, C] = D.useState(null),
            T = () => {
              o.cancel("cancelled by user");
            },
            w = !r;
          return (
            D.useEffect(() => {
              (async () => {
                const L = Array.from(new Set(c.map((m) => m.packageID)));
                for (let m = 0; m < L.length; m++) {
                  x(m);
                  const $ = L[m];
                  let X = await t($, w, !1, o);
                  if (o.token.reason) return;
                  if (X.unappliedProposal) {
                    const re = await new Promise((de) =>
                      C({ response: X, fnResolve: de }),
                    );
                    if ((C(null), !re)) {
                      _(
                        (0, i.we)(
                          "#PricingDashboard_UnappliedProposal_Declined",
                          (0, p.ww)($),
                        ),
                      );
                      return;
                    }
                    if (((X = await t($, w, !0, o)), o.token.reason)) return;
                  }
                  if (X.success != f.R) {
                    _(X.msg ?? (0, i.we)("#PricingDashboard_SavePricesError"));
                    return;
                  }
                }
                x(L.length), n(), l();
              })();
            }, []),
            O
              ? (0, e.jsx)(le, { response: O.response, fnResolve: O.fnResolve })
              : (0, e.jsx)(j.o0, {
                  strTitle: (0, i.we)("#PackageGrid_SaveInProgress"),
                  bAlertDialog: !!v,
                  strOKButtonText: v
                    ? (0, i.we)("#Button_Close")
                    : (0, i.we)("#Button_OK"),
                  onOK: v ? l : n,
                  onCancel: T,
                  closeModal: l,
                  bDestructiveWarning: !0,
                  children:
                    v ??
                    (0, e.jsx)(U.t, {
                      position: "center",
                      string: (0, i.we)("#PricingDashboard_Progress", P),
                    }),
                })
          );
        }
      },
      20929: (M, W, s) => {
        "use strict";
        s.d(W, { J: () => I });
        var e = s(7850),
          f = s(90626);
        const h = f.lazy(() =>
            Promise.all([s.e(94781), s.e(47049)]).then(s.bind(s, 47049)),
          ),
          I = h
            ? function (a) {
                return (0, e.jsx)(f.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(h, { ...a }),
                });
              }
            : (p) => null;
      },
      47689: (M, W, s) => {
        "use strict";
        s.d(W, { m: () => I });
        var e = s(41735),
          f = s.n(e),
          h = s(90626);
        function I(p) {
          const a = h.useRef(f().CancelToken.source());
          return (
            h.useEffect(() => {
              const D = a.current;
              return () => D.cancel(p ? `${p}: unmounting` : "unmounting");
            }, [p]),
            a.current
          );
        }
      },
      85274: (M) => {
        M.exports = { MoreDots: "_2YpW8SafRsHDfQIUT2DzUP" };
      },
      14578: (M) => {
        M.exports = {
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
      12917: (M) => {
        M.exports = {
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
      18715: (M) => {
        M.exports = {
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
          UnappliedProposalDialog: "i1PGckHCuilaOweiMPIGr",
          UnappliedPriceTable: "_36G3u9heuZBYdv9txHduM",
          ApprovedHeader: "_21k60LQODNJFd0dC1gLNhT",
          ChangedPrice: "_1vW3aukjDVBLu-1jAeXERo",
        };
      },
    },
  ]);
})();

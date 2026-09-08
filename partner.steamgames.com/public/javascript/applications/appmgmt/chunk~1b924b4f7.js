/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7043],
  {
    96434: (e) => {
      e.exports = {
        PriceCell: "_1sKIcxV1HaEWCa1x_sSuVT",
        PricePrefix: "gPcNwuh4LJPmwRZrAbrA5",
        PriceSuffix: "_3AEJb3AH01qQaG89JOYAh4",
        PackagePricingContext: "_3_niTWrZ8h834BjbLqyByP",
        EditablePrice: "pm5xM6Dyy-9XY0g9TpjX1",
        PriceInput: "_1PcwXjG-2t5JOJuL7yhOYG",
        USD: "_1C7qRJ6YdGWEwEK4QsMRUX",
        ProposedPrice: "rVkmDwpTOXR4DqdBdbiPf",
        ApprovedCanPublish: "_1JBd8mxmIpyOChqhkSKSUg",
        ChangedLocally: "_5mvGWs3IDSRLfxvHx8wig",
        WarningPrice: "_1Qd5uW_BK8PBDJiDBjDCPN",
        SevereWarningPrice: "_1o6zP8gegcka6hdQA2lJjv",
        BadPrice: "_18aiu0HZznAMnGQfWExtTm",
        PriceChange: "w-K7qF60ELXWtEjymcY68",
        NewPrice: "_3sgbtvMYimrD0kSs3VCoPx",
        PriceAlert: "_2eadUvk4zK7FL9FFvy3Gd2",
        PriceChangeArrow: "_1z0l2rhYAxXf6M_tgnczgZ",
        PriceIncrease: "_2jQyP7o7hbWM4EhAkKLAks",
        PricePopout: "_1AoyzK2lSPVwQJoIYEjFbR",
        DetailRow: "_3P_fJH02fBcdGM2etenWu7",
        DetailLabel: "_3RXb3FOdpsOt-aVMvfnb6W",
        DetailPrice: "_2k3CVLd6A1QAixKOkfGx6P",
        DetailButton: "_3ILP7OdXtGjDaSvJqI81RV",
        Disabled: "_3mZHsQVQB8w84OblleAq68",
        HoverToolTip: "_36qS74l1tXSXwGdyfIFQ-G",
      };
    },
    31389: (e) => {
      e.exports = {
        PriceGuidelinesPicker: "_2skmsPR7jCBo5xHN2v_E6A",
        SelectionIndicator: "krnfTfrwAOa14We87yU4k",
        GuidelinesPanel: "_29sQa7P4ANi-KFpS_lkroj",
        GuidelinesDescription: "_3poXK_qmmnRcHLvBGFqi8h",
        GuidelinesGrid: "_1Kz7R_x889mAnYo3uORnzL",
        GridElement: "_1r_b9RJn1Ca6KSjtSm7RPF",
        CurrentPrice: "_3wZdsoh1-V6RQ2rsPkj-ga",
      };
    },
    65697: (e) => {
      e.exports = { PopoverMenu: "_2i2FUBZKGyiP5Sb6tuASpO" };
    },
    10754: (e, n, t) => {
      "use strict";
      t.d(n, {
        mK: () => L,
        Gy: () => T,
        sh: () => w,
        T6: () => S,
        yk: () => j,
        Ur: () => y,
      });
      var r = t(7850),
        i = t(48724),
        s = t(48174),
        o = t(82314),
        a = t(4160),
        c = t(68488),
        l = t(69423),
        d = t(9554),
        u = t(90626),
        h = t(16676),
        g = t(12155),
        P = t(32754),
        p = t(52038),
        b = t(61859),
        m = t(7929),
        f = t(96434),
        _ = t.n(f),
        D = t(44419);
      let x = null;
      function C(e) {
        const { packageID: n, strPriceKey: t } = e,
          {
            nPriceInCents: i,
            nPublishedPriceInCents: s,
            nProposedPriceInCents: o,
            nSuggestedPriceInCents: c,
            fnSetPrice: d,
          } = (0, l.xQ)(n, t),
          { nPriceInCents: u } = (0, l.xQ)(n, "USD"),
          h = !(!o || (s && o == s)),
          g = (0, l.d$)(n),
          f = g && L(g.rtSubmitted),
          { data: C } = (0, D.js)(g?.submitterID),
          w = C ? C.m_strPlayerName : g?.submitterID,
          v = g?.eState == a.Zo;
        return (s || h || c) && x == n + t
          ? (0, r.jsxs)("div", {
              className: _().PricePopout,
              children: [
                !!s &&
                  (0, r.jsxs)(P.he, {
                    className: _().DetailRow,
                    direction: "left",
                    toolTipContent: (0, b.we)(
                      "#PricingDashboard_CurrentPriceOnStore_ttip",
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: _().DetailLabel,
                        children: (0, b.we)(
                          "#PricingDashboard_CurrentPriceOnStore",
                        ),
                      }),
                      (0, r.jsx)("div", {
                        className: _().DetailPrice,
                        children: (0, l.Wx)(s, t).join(""),
                      }),
                      (0, r.jsx)(P.he, {
                        className: (0, p.A)(
                          _().DetailButton,
                          s == i && _().Disabled,
                        ),
                        onClick: () => d(s),
                        bDisabled: s == i,
                        toolTipContent: (0, b.we)(
                          "#PricingDashboard_UseThisOldPrice_ttip",
                        ),
                        children: (0, b.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                h &&
                  (0, r.jsxs)(P.he, {
                    className: _().DetailRow,
                    direction: "left",
                    toolTipContent: v
                      ? (0, b.we)("#PricingDashboard_ApprovedPrice_ttip")
                      : (0, b.we)("#PricingDashboard_ProposedPrice_ttip", w, f),
                    children: [
                      (0, r.jsx)("div", {
                        className: _().DetailLabel,
                        children: (0, b.we)(
                          v
                            ? "#PricingDashboard_ApprovedPrice"
                            : "#PricingDashboard_ProposedPrice",
                        ),
                      }),
                      (0, r.jsx)("div", {
                        className: _().DetailPrice,
                        children: (0, l.Wx)(o, t).join(""),
                      }),
                      (0, r.jsx)(P.he, {
                        className: (0, p.A)(
                          _().DetailButton,
                          o == i && _().Disabled,
                        ),
                        onClick: () => d(o),
                        bDisabled: o == i,
                        toolTipContent: (0, b.we)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, b.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                !!c &&
                  (0, r.jsxs)(P.he, {
                    className: _().DetailRow,
                    direction: "left",
                    toolTipContent: m.g.Localize(
                      "#PricingDashboard_Method_SuggestedPrice_ttip",
                      (0, l.Wx)(u, "USD").join(""),
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: _().DetailLabel,
                        children: m.g.Localize(
                          "#PricingDashboard_Method_SuggestedPrice",
                        ),
                      }),
                      (0, r.jsx)("div", {
                        className: _().DetailPrice,
                        children: (0, l.Wx)(c, t).join(""),
                      }),
                      (0, r.jsx)(P.he, {
                        className: (0, p.A)(
                          _().DetailButton,
                          c == i && _().Disabled,
                        ),
                        onClick: () => d(c),
                        bDisabled: c == i,
                        toolTipContent: (0, b.we)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, b.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
              ],
            })
          : null;
      }
      function w(e) {
        const { cell: n, row: t } = e,
          s = t.original.packageID,
          o = n.getValue(),
          {
            nPriceInCents: a,
            nPublishedPriceInCents: g,
            nProposedPriceInCents: P,
            fnSetPrice: p,
          } = (0, l.xQ)(s, o),
          [b, m, f] = (0, l.Wx)(a, o),
          D = (0, l.Gs)(o),
          w = u.useRef(void 0),
          { strClassName: y } = k(s, o),
          j = "USD" == o,
          L = P ?? g,
          F = a != L;
        return (0, r.jsxs)("div", {
          ref: w,
          onKeyDown: d.nm,
          className: y,
          children: [
            F && (0, r.jsx)(T, { nPriceInCents: a, nSavedPriceInCents: L }),
            (0, r.jsx)("div", { className: _().PricePrefix, children: b && b }),
            (0, r.jsx)(i.n, {
              menuTarget: (0, r.jsx)("div", {
                className: _().EditablePrice,
                children: (0, r.jsx)(h.pd, {
                  value: m,
                  className: _().PriceInput,
                  onChange: (e) => {
                    const n = e.target.value.replace(/[^0-9]/g, "");
                    let t = Number(n || 0);
                    if (Number.isNaN(t)) return;
                    D.bWholeUnitsOnly && (t *= 100);
                    const r = 2147483647;
                    t > r && (t = r), p(t);
                  },
                  onFocus: () => {
                    x = s + o;
                  },
                }),
              }),
              direction: "up",
              interactionMode: c.AV,
              dismissOnClick: !0,
              renderWhenClosed: !1,
              children: (0, r.jsx)(C, { packageID: s, strPriceKey: o }),
            }),
            (0, r.jsx)("div", { className: _().PriceSuffix, children: f && f }),
            j &&
              (0, r.jsx)(v, {
                packageID: s,
                appids: t.original.appids,
                bCanSetToFree: t.original.bCanSetToFree,
              }),
            (0, r.jsx)(S, { packageID: s, strPriceKey: o }),
          ],
        });
      }
      function v(e) {
        const { packageID: n, appids: t, bCanSetToFree: i } = e,
          { fnApplyGuidelines: a } = (0, s.gC)((0, l.$i)());
        return (0, r.jsx)(o.x, {
          fnGetUSDPriceInCents: () => (0, l.FR)(n, "USD"),
          fnOnUpdate: (e) => a(n, e),
          strDescription: m.g.Localize(
            "#PricingDashboard_GuidelinesPickerDescription_New",
          ),
          nPackageID: n,
          appids: t,
          bCanSetToFree: i,
        });
      }
      function S(e) {
        const { packageID: n, strPriceKey: t } = e,
          { strPriceWarning: i, bBadPrice: s, bShowWarningIcon: o } = k(n, t);
        return o
          ? (0, r.jsx)(P.he, {
              className: _().PriceAlert,
              strTooltipClassname: _().HoverToolTip,
              toolTipContent: i,
              direction: "top",
              children: (0, r.jsx)(g.eTF, {
                color: s ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            })
          : null;
      }
      const y = 2.25,
        j = 0.5;
      function k(e, n) {
        const {
            nPriceInCents: t,
            nPublishedPriceInCents: r,
            nProposedPriceInCents: i,
            nMinPriceInCents: s,
            nMaxPriceInCents: o,
            nMaxDiscountPercentage: c,
            nSuggestedPriceInCents: d,
          } = (0, l.xQ)(e, n),
          h = (0, l.d$)(e),
          g = "USD" == n,
          P = t != (i ?? r),
          m = t < s,
          f = !!o && t > o,
          D = !!d && t > d * y,
          x = !!d && t < d * j,
          C = !!d && t < d && !!c,
          w = !!d && t == d && !!c;
        let v = !1;
        f
          ? (v = (0, b.we)("#PricingDashboard_PriceIncreaseDisallowed"))
          : m && !P
            ? (v = (0, b.we)("#PricingDashboard_PriceTooLow_Grandfathered"))
            : m
              ? (v = (0, b.we)(
                  "#PricingDashboard_PriceTooLow",
                  (0, l.Wx)(s, n).join(""),
                ))
              : D
                ? (v = (0, b.we)(
                    "#PricingDashboard_PriceMuchHigherThanMethod",
                    (0, l.Wx)(d, n).join(""),
                  ))
                : x && C
                  ? (v = (0, b.we)(
                      "#PricingDashboard_PriceMuchLowerThanMethod_AndLimitDiscount",
                      (0, l.Wx)(d, n).join(""),
                      c,
                    ))
                  : x
                    ? (v = (0, b.we)(
                        "#PricingDashboard_PriceMuchLowerThanMethod",
                        (0, l.Wx)(d, n).join(""),
                      ))
                    : C
                      ? (v = (0, b.we)(
                          "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                          c,
                        ))
                      : w && (v = (0, b.we)("#PricingDashboard_PriceCheap", c));
        const S = f || m,
          k = D || x,
          T = S || k || C,
          L = !(P || !i || (r && i == r)),
          F = h?.eState == a.Zo,
          I = (0, p.A)(
            _().PriceCell,
            g && _().USD,
            P && _().ChangedLocally,
            L && _().ProposedPrice,
            F && _().ApprovedCanPublish,
            T && _().WarningPrice,
            k && _().SevereWarningPrice,
            S && _().BadPrice,
          );
        return u.useMemo(
          () => ({
            strPriceWarning: v,
            strClassName: I,
            bBadPrice: S,
            bShowSevereWarning: k,
            bShowWarningIcon: T,
          }),
          [v, I, S, k, T],
        );
      }
      function T(e) {
        const { nPriceInCents: n, nSavedPriceInCents: t } = e;
        let i = null,
          s = null,
          o = null,
          a = null;
        if (t) {
          const e = Math.ceil((100 * (n - t)) / t),
            c = n > t;
          (o = c
            ? (0, b.we)("#PricingDashboard_PriceIncreaseBy", e + "%")
            : (0, b.we)("#PricingDashboard_PriceLowerBy", e + "%")),
            (a = (0, p.A)(_().PriceChange, c && _().PriceIncrease)),
            (s = (0, r.jsx)("div", {
              className: _().PriceChangeArrow,
              children: (0, r.jsx)(g.i3G, { angle: c ? 0 : 180 }),
            })),
            (i = e + "%");
        } else
          (i = (0, b.we)("#PricingDashboard_PriceIsNew_Short")),
            (a = (0, p.A)(_().NewPrice));
        return (0, r.jsxs)(P.he, {
          className: a,
          strTooltipClassname: _().HoverToolTip,
          toolTipContent: o,
          direction: "top",
          children: [s, i],
        });
      }
      function L(e) {
        return new Date(1e3 * e).toLocaleString(b.pf.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
    },
    48724: (e, n, t) => {
      "use strict";
      t.d(n, { n: () => h });
      var r = t(7850),
        i = t(8871),
        s = t(68488),
        o = t(64238),
        a = t.n(o),
        c = t(90626),
        l = t(7445),
        d = t(76217);
      function u(e, n) {
        return (t) => {
          e?.(t), n?.(t);
        };
      }
      function h(e) {
        const {
            direction: n,
            interactionMode: t = s.aJ,
            ignoreHorizontal: o,
            ignoreVertical: h,
            dismissOnClick: g,
            menuTarget: P,
            className: p,
            children: b,
            renderWhenClosed: m = !0,
            ...f
          } = e,
          {
            isShowingMenu: _,
            triggerProps: D,
            menuProps: x,
            closeMenu: C,
          } = (0, s.Yz)(e),
          w = c.useRef(null),
          v = (0, i.Ue)(w, P.props.navRef),
          S = c.useRef(null);
        return (
          c.useEffect(() => {
            _
              ? S.current?.TakeFocus()
              : S.current?.BFocusWithin() && w.current?.TakeFocus();
          }, [_]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              c.cloneElement(P, {
                ...D,
                onMouseEnter: u(P.props.onMouseEnter, D.onMouseEnter),
                onMouseLeave: u(P.props.onMouseLeave, D.onMouseLeave),
                navRef: v,
              }),
              (0, r.jsx)(d.Z, {
                ...f,
                ...x,
                className: a()(x.className, p),
                navRef: S,
                onCancel: C,
                onFocusWithin: (e) => !e && C(),
                childFocusDisabled: !_,
                children: (0, r.jsx)(l.q, { children: (m || _) && b }),
              }),
            ],
          })
        );
      }
    },
    90419: (e, n, t) => {
      "use strict";
      t.d(n, { K: () => D, T: () => w });
      var r,
        i = t(7850),
        s = t(53965),
        o = t(90534),
        a = t(20187),
        c = t(51877),
        l = t(64753),
        d = t(90626),
        u = t(9154),
        h = t(32754),
        g = t(24484),
        P = t(7929),
        p = t(30470);
      !(function (e) {
        (e.k_FreeToPlay = "freetoplay"), (e.k_Free = "free");
      })(r || (r = {}));
      var b = t(66418),
        m = t(51614);
      var f = t(71298),
        _ = t(78686);
      function D(e) {
        const {
            strButtonOverride: n,
            appids: t,
            nPackageID: r,
            onClick: o,
          } = e,
          a = w(),
          [c, d, g] = (0, l.uD)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(h.Gq, {
              toolTipContent: a
                ? P.g.Localize("#FreeOnDemand_Button_ttip")
                : P.g.Localize("#FreeOnDemand_Button_disabled_ttip"),
              children: (0, i.jsx)(s.$, {
                onClick: () => {
                  o?.(), d();
                },
                color: "dull",
                children: n || P.g.Localize("#FreeOnDemand_Button"),
              }),
            }),
            (0, i.jsx)(u.EN, {
              active: c,
              children:
                a && t && 1 == t.length
                  ? (0, i.jsx)(x, {
                      closeModal: g,
                      nPackageID: r,
                      nAppID: t[0],
                    })
                  : (0, i.jsx)(C, { closeModal: g }),
            }),
          ],
        });
      }
      function x(e) {
        const { closeModal: n, nAppID: t, nPackageID: s } = e,
          [l, h] = (0, d.useState)(r.k_FreeToPlay),
          D = (function (e, n) {
            return (0, m.n)({
              mutationKey: ["settofree", n],
              mutationFn: async (t) => {
                const { displayOption: i, fnOnStoreSaveSucceed: s } = t;
                if (!e || !n) throw new Error("Invalid parameters provided");
                {
                  const n = new FormData();
                  if (
                    (n.set("sessionid", (0, g.KC)()),
                    n.set("appid", "" + e),
                    n.set(
                      "displaytext",
                      i == r.k_Free
                        ? "#PurchaseButton_Free"
                        : "#PurchaseButton_FreeToPlay",
                    ),
                    !(
                      await fetch(
                        `${b.TS.PARTNER_BASE_URL}store/ajaxupdatef2pstore`,
                        { method: "POST", credentials: "include", body: n },
                      )
                    ).ok)
                  )
                    throw new Error(
                      P.g.Localize("#FreeOnDemand_Store_Error", e),
                    );
                }
                s && s();
                {
                  const e = new FormData();
                  if (
                    (e.set("sessionid", (0, g.KC)()),
                    e.set("action", "save"),
                    e.set("billing_type", "12"),
                    !(
                      await fetch(
                        `${b.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${n}`,
                        { method: "POST", credentials: "include", body: e },
                      )
                    ).ok)
                  )
                    throw new Error(
                      P.g.Localize("#FreeOnDemand_Package_Error", n),
                    );
                }
              },
            });
          })(t, s),
          x = (0, f.vs)();
        return x.bLoading
          ? (0, i.jsx)(f.Hh, {
              state: x,
              strDialogTitle: P.g.Localize("#FreeOnDemand_Title"),
              closeModal: () => {
                window.location.replace(
                  `${p.TS.PARTNER_BASE_URL}store/packagelanding/${s}`,
                ),
                  n();
              },
            })
          : (0, i.jsxs)(u.o0, {
              strTitle: P.g.Localize("#FreeOnDemand_Title"),
              strDescription: P.g.Localize("#FreeOnDemand_Desc"),
              strOKButtonText: P.g.Localize("#FreeOnDemand_Button_Confirm"),
              onCancel: n,
              onOK: async () => {
                try {
                  x.fnSetLoading(!0),
                    x.fnSetThrobber(
                      P.g.Localize("#FreeOnDemand_Convert_Store"),
                    ),
                    await D.mutateAsync({
                      displayOption: l,
                      fnOnStoreSaveSucceed: () => {
                        x.fnSetThrobber(
                          P.g.Localize("#FreeOnDemand_Convert_Package"),
                        );
                      },
                    }),
                    x.fnSetSuccess(!0),
                    x.fnSetStrSuccess(
                      P.g.Localize("#FreeOnDemand_ConvertSuccess"),
                    );
                } catch (e) {
                  x.fnSetError(!0),
                    x.fnSetStrError(
                      e instanceof Error
                        ? e.message
                        : _.Z.Localize("#Error_ErrorCommunicatingWithNetwork"),
                    );
                }
              },
              children: [
                (0, i.jsx)("br", {}),
                (0, i.jsxs)(o.az, {
                  paddingTop: "4",
                  children: [
                    (0, i.jsx)(a.EY, {
                      size: "4",
                      children: P.g.Localize("#FreeOnDemand_Radio"),
                    }),
                    (0, i.jsx)(o.az, {
                      padding: "4",
                      background: "greyneutral-6",
                      radius: "sm",
                      children: (0, i.jsx)(c.z, {
                        value: l,
                        options: [r.k_FreeToPlay, r.k_Free],
                        getOptionLabel: (e) =>
                          e == r.k_Free
                            ? P.g.Localize("#FreeOnDemand_Radio_Free")
                            : P.g.Localize("#FreeOnDemand_Radio_FreeToPlay"),
                        onValueChange: h,
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
      function C(e) {
        const { closeModal: n } = e,
          t = `${p.TS.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
        return (0, i.jsxs)(u.KG, {
          strTitle: P.g.Localize("#FreeOnDemand_Title"),
          strDescription: P.g.Localize("#FreeOnDemand_Desc_NotPermitted"),
          closeModal: n,
          children: [
            (0, i.jsx)("br", {}),
            (0, i.jsx)("br", {}),
            (0, i.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noreferrer",
              children: t,
            }),
          ],
        });
      }
      function w() {
        const [e] = (0, d.useState)(
          (0, g.Tc)("bCanSetFree", "application_config"),
        );
        return e;
      }
    },
    82314: (e, n, t) => {
      "use strict";
      t.d(n, { e: () => _, x: () => f });
      var r = t(7850),
        i = t(61459),
        s = t(88267),
        o = t(48724),
        a = t(48174),
        c = t(90419),
        l = t(68488),
        d = t(12155),
        u = t(52038),
        h = t(31389),
        g = t.n(h),
        P = t(90626),
        p = t(7929),
        b = t(53965),
        m = t(32754);
      function f(e) {
        const n = (0, r.jsx)("button", {
          className: g().PriceGuidelinesPicker,
          children: (0, r.jsx)(d.GB9, {}),
        });
        return (0, r.jsx)(D, { menuTarget: n, ...e });
      }
      function _(e) {
        const { strButton: n, strTooltip: t } = e,
          i = (0, r.jsxs)(b.$, {
            onClick: () => {},
            children: [
              (0, r.jsx)(m.Gq, {
                toolTipContent: t,
                children: (0, r.jsx)("span", { children: n }),
              }),
              (0, r.jsx)("div", {
                className: (0, u.A)(
                  g().SelectionIndicator,
                  "DialogDropDown_Arrow",
                ),
                children: (0, r.jsx)(d.GB9, {}),
              }),
            ],
          });
        return (0, r.jsx)(D, { menuTarget: i, ...e });
      }
      function D(e) {
        const { menuTarget: n } = e,
          t = P.useRef(null);
        return (0, r.jsx)(o.n, {
          menuTarget: n,
          direction: "down",
          interactionMode: l.k$,
          ref: t,
          children: (0, r.jsx)(x, { onSelect: () => t.current?.close(), ...e }),
        });
      }
      function x(e) {
        const {
            fnGetUSDPriceInCents: n,
            fnOnUpdate: t,
            strDescription: o,
            bCanSetToFree: l,
            nPackageID: d,
            onSelect: h,
            appids: P,
          } = e,
          b = (0, a.cT)(),
          m = n();
        if (!b) return null;
        const f = b.GetUSDPricePointsInCents();
        return (0, r.jsxs)("div", {
          className: g().GuidelinesPanel,
          children: [
            (0, r.jsx)("div", {
              className: g().GuidelinesDescription,
              children: o || p.g.Localize("#PricingGuideline_Default"),
            }),
            (0, r.jsxs)("div", {
              className: g().GuidelinesGrid,
              children: [
                void 0 !== l &&
                  (0, r.jsx)(
                    "div",
                    {
                      className: g().GridElement,
                      children: (0, r.jsx)(c.K, {
                        nPackageID: d,
                        strButtonOverride: p.g.Localize(
                          "#FreeOnDemand_InlineOption",
                        ),
                        appids: P,
                      }),
                    },
                    "settofree",
                  ),
                f.map((e) =>
                  (0, r.jsx)(
                    "button",
                    {
                      onClick: () => {
                        h(), t(e);
                      },
                      className: (0, u.A)({
                        [g().GridElement]: !0,
                        [g().CurrentPrice]: m == e,
                      }),
                      children: (0, i.x)(e, s.CS),
                    },
                    e,
                  ),
                ),
              ],
            }),
          ],
        });
      }
    },
    7929: (e, n, t) => {
      "use strict";
      t.d(n, { g: () => s });
      var r = t(13843);
      const i = {};
      (i.arabic = () => t.e(2944).then(t.t.bind(t, 2944, 19))),
        (i.brazilian = () => t.e(8898).then(t.t.bind(t, 48898, 19))),
        (i.bulgarian = () => t.e(6825).then(t.t.bind(t, 6825, 19))),
        (i.czech = () => t.e(8323).then(t.t.bind(t, 38323, 19))),
        (i.danish = () => t.e(4341).then(t.t.bind(t, 64341, 19))),
        (i.dutch = () => t.e(9606).then(t.t.bind(t, 39606, 19))),
        (i.english = () => t.e(2692).then(t.t.bind(t, 42692, 19))),
        (i.finnish = () => t.e(7239).then(t.t.bind(t, 87239, 19))),
        (i.french = () => t.e(5516).then(t.t.bind(t, 25516, 19))),
        (i.german = () => t.e(3714).then(t.t.bind(t, 63714, 19))),
        (i.greek = () => t.e(3656).then(t.t.bind(t, 31275, 19))),
        (i.hungarian = () => t.e(9469).then(t.t.bind(t, 59469, 19))),
        (i.indonesian = () => t.e(7644).then(t.t.bind(t, 7644, 19))),
        (i.italian = () => t.e(1724).then(t.t.bind(t, 1724, 19))),
        (i.japanese = () => t.e(4731).then(t.t.bind(t, 34731, 19))),
        (i.koreana = () => t.e(4219).then(t.t.bind(t, 14219, 19))),
        (i.latam = () => t.e(3059).then(t.t.bind(t, 83059, 19))),
        (i.malay = () => t.e(7036).then(t.t.bind(t, 57036, 19))),
        (i.norwegian = () => t.e(2220).then(t.t.bind(t, 62220, 19))),
        (i.polish = () => t.e(5501).then(t.t.bind(t, 35501, 19))),
        (i.portuguese = () => t.e(9977).then(t.t.bind(t, 69977, 19))),
        (i.romanian = () => t.e(7175).then(t.t.bind(t, 57175, 19))),
        (i.russian = () => t.e(3757).then(t.t.bind(t, 13757, 19))),
        (i.schinese = () => t.e(216).then(t.t.bind(t, 80216, 19))),
        (i.spanish = () => t.e(4036).then(t.t.bind(t, 34036, 19))),
        (i.swedish = () => t.e(9365).then(t.t.bind(t, 59365, 19))),
        (i.tchinese = () => t.e(4763).then(t.t.bind(t, 54763, 19))),
        (i.thai = () => t.e(5666).then(t.t.bind(t, 65666, 19))),
        (i.turkish = () => t.e(8052).then(t.t.bind(t, 38052, 19))),
        (i.ukrainian = () => t.e(290).then(t.t.bind(t, 50290, 19))),
        (i.vietnamese = () => t.e(9008).then(t.t.bind(t, 56627, 19)));
      const s = (0, r.l)(async function (e) {
        if (i[e]) return i[e]();
      });
    },
    68488: (e, n, t) => {
      "use strict";
      t.d(n, { k$: () => c, AV: () => l, aJ: () => a, Yz: () => d });
      t(7850);
      var r = t(91934),
        i = (t(64238), t(90626)),
        s = t(56011),
        o = t(65697);
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (await t.e(8433).then(t.bind(t, 8433))).apply();
        }
      })();
      const a = 0,
        c = 1,
        l = 2;
      function d(e) {
        const {
            direction: n,
            ignoreHorizontal: t,
            ignoreVertical: d,
            dismissOnClick: u,
            interactionMode: h = a,
          } = e,
          g = (0, i.useRef)(null),
          P = (0, i.useRef)(!1),
          p = (0, i.useRef)(!1),
          b = (0, i.useRef)(null),
          [m, f] = (0, i.useState)(!1),
          [_, D] = (0, i.useMemo)(
            () =>
              (function (e) {
                const [n, t] = (0, r.x)(e, "-");
                return "left" === n || "right" === n ? [void 0, n] : [n, t];
              })(n),
            [n],
          ),
          x = (0, i.useCallback)(() => {
            if (!b.current || !g.current) return;
            const e = b.current.getBoundingClientRect(),
              n = g.current.getBoundingClientRect();
            let r = D;
            const i = b.current.matches(":dir(rtl)");
            i && ("left" === D ? (r = "right") : "right" === D && (r = "left")),
              g.current.style.setProperty("--parentWidth", `${e.width}px`),
              g.current.style.setProperty("--parentHeight", `${e.height}px`);
            let s = 0;
            if (!t) {
              if (n.width) {
                if ("left" === r) {
                  s = (_ ? e.right : e.left) - n.width;
                }
                if ("right" === r) {
                  const t = _ ? e.left : e.right;
                  s = document.body.clientWidth - (t + n.width);
                }
                void 0 === r &&
                  (s = i
                    ? e.right - n.width
                    : document.body.clientWidth - (e.left + n.width)),
                  (s = Math.min(s, 0));
              }
              "left" === r
                ? _
                  ? ((g.current.style.left = "unset"),
                    (g.current.style.right = `${document.body.clientWidth - e.right + s}px`))
                  : ((g.current.style.left = "unset"),
                    (g.current.style.right = `${document.body.clientWidth - e.left + s}px`))
                : "right" === r
                  ? _
                    ? ((g.current.style.left = `${e.left + s}px`),
                      (g.current.style.right = "unset"))
                    : ((g.current.style.left = `${e.right + s}px`),
                      (g.current.style.right = "unset"))
                  : void 0 === r &&
                    (i
                      ? ((g.current.style.left = "unset"),
                        (g.current.style.right = `${document.body.clientWidth - e.right + s}px`))
                      : ((g.current.style.left = `${e.left + s}px`),
                        (g.current.style.right = "unset")));
            }
            d ||
              ("down" === _
                ? ((g.current.style.top = `${e.bottom}px`),
                  (g.current.style.bottom = "unset"),
                  g.current.style.setProperty(
                    "--availableHeight",
                    document.documentElement.clientHeight - e.bottom + "px",
                  ))
                : "up" === _
                  ? ((g.current.style.top = "unset"),
                    (g.current.style.bottom =
                      document.documentElement.clientHeight - e.top + "px"),
                    g.current.style.setProperty(
                      "--availableHeight",
                      `${e.top}px`,
                    ))
                  : void 0 === _ &&
                    ((g.current.style.top = `${e.top}px`),
                    (g.current.style.bottom = "unset"),
                    g.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - e.top + "px",
                    )));
          }, [D, t, d, _]),
          C = (0, i.useMemo)(() => {
            if (b.current) return (0, s._f)(b.current);
          }, [b.current]);
        (0, i.useEffect)(
          () =>
            m
              ? (g.current?.showPopover(),
                x(),
                C?.addEventListener("scroll", x),
                window.addEventListener("scroll", x),
                () => {
                  C?.removeEventListener("scroll", x),
                    window.addEventListener("scroll", x);
                })
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  g.current?.hidePopover(),
                () => {}),
          [m, x, C],
        );
        const w = (0, i.useCallback)(() => {
            x(), f(!0), (p.current = !0);
          }, [x]),
          v = (0, i.useCallback)(() => {
            (p.current = !1), P.current || f(!1);
          }, []),
          S = (0, i.useCallback)(() => {
            (P.current = !0), f(!0);
          }, []),
          y = (0, i.useCallback)(
            (e) => {
              g.current?.contains(e.target) && S();
            },
            [S],
          ),
          j = (0, i.useCallback)(
            (e) => {
              g.current?.contains(e.target) && S();
            },
            [S],
          ),
          k = (0, i.useCallback)(() => {
            (P.current = !1), p.current || f(!1);
          }, []),
          T = (0, i.useCallback)(
            (e) => {
              g.current?.contains(e.target) && k();
            },
            [k],
          ),
          L = (0, i.useCallback)(() => {
            k(), v();
          }, [k, v]),
          F = (0, i.useCallback)(
            (e) => {
              "Enter" === e.key && (e.preventDefault(), m ? v() : w());
            },
            [v, w, m],
          ),
          I = (0, i.useCallback)(
            (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                g.current?.contains(e.relatedTarget) ||
                v();
            },
            [v],
          ),
          E = (0, i.useCallback)(
            (e) => {
              h === l && w();
            },
            [h, w],
          ),
          N = (0, i.useCallback)(
            (e) => {
              const n =
                  e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
                t = !e.relatedTarget && !P.current;
              (n || t) && (k(), f(!1));
            },
            [k],
          ),
          M = (0, i.useCallback)(
            (e) => {
              g.current?.contains(e.target) &&
                (m && u ? L() : P.current && w());
            },
            [L, u, m, w],
          ),
          O = (0, i.useCallback)(
            (e) => {
              g.current?.contains(e.target) &&
                ("Enter" === e.key && m && u ? L() : w(),
                "Escape" === e.key && m && (L(), e.stopPropagation()));
            },
            [L, u, m, w],
          );
        let A;
        h !== a || m
          ? h === c && (A = m ? v : w)
          : (A = (e) => {
              e.preventDefault(), w();
            });
        const B = {
            "aria-expanded": m,
            role: "button",
            onMouseEnter: h === a ? w : void 0,
            onMouseLeave: h === a ? v : void 0,
            onClick: A,
            ref: b,
            onKeyDown: F,
            onFocus: E,
            onBlur: I,
          },
          R = {
            popover: "manual",
            ref: g,
            onMouseEnter: j,
            onMouseLeave: T,
            onFocus: y,
            onBlur: N,
            onClick: M,
            onKeyDown: O,
            className: o.PopoverMenu,
          };
        return (
          (0, i.useImperativeHandle)(
            e.ref,
            () => ({ show: w, hide: v, close: L }),
            [w, v, L],
          ),
          { isShowingMenu: m, triggerProps: B, menuProps: R, closeMenu: L }
        );
      }
    },
  },
]);

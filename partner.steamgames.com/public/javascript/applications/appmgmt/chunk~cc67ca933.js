/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4086],
  {
    46595: (e) => {
      e.exports = {
        ReleaseDateInfoCtn: "_2mHXbGuTlraXe_Q1JYKmJZ",
        GameEditCtn: "_2JigUHOJ_OTCRjbohXgz9q",
        ReleaseDateContent: "AVZgMOcgNdb95embDq8g1",
        EditButton: "_1R5w2idIf5H3xZh7C6ObQL",
        Spacer: "_3TcEpA8cfRVBTd8q_vvFWu",
        Top: "kNcnUbYODwtyQ3AZp_VUM",
        Bottom: "_2TBzK4oRpgLv5hHxtojPq5",
        EditButtonIcon: "_22a0aPwQVuTJx58YZQWYBd",
        LabelField: "_1olrpCNFeNf7UfruKHLVhY",
        Label: "M3h38e4KnwYsDvQP72dg0",
        BigField: "_4jS-jBGyvj3mr8jkJ46Gc",
        Set: "eEhAf6mE-OR6VCf4eHEkC",
      };
    },
    51780: (e) => {
      e.exports = {
        ReleaseDateModal: "RKE7g5McLhANBdiTzm-ai",
        ReleaseDateRequestBody: "_32CdqVuKRqrf1SR8Hday6v",
        Column: "_gUUe9JABsRpGmdkooO11",
        ColumnLabel: "xebmA68ybtGEgyG_oVMM0",
        ReleaseColumnFooter: "_3egfk1DBae-OZSZtcwrDDq",
        ColumnContent: "eZhskcRU_Ejw5kmSBLRTU",
        BlueNote: "_1iIVgx9LfomTs6Ycj6qYgV",
        PublishNowWarning: "_2-dra08qCgH_F_0T756AwP",
        ErrorBox: "_27JIJRbunDgYqS_xDV7Xha",
        HTMLErrorBoxAppear: "bXT6nAG7o3DqMjoZ_zWJ",
      };
    },
    39679: (e, t, a) => {
      "use strict";
      a.d(t, { Ll: () => c, ut: () => i });
      var n = a(90626),
        l = a(63369),
        s = a(16676),
        r = a(61859);
      const o = [
          "date_full",
          "date_month",
          "date_quarter",
          "date_year",
          "text_comingsoon",
          "text_tba",
        ],
        i = ["date_full", "date_month", "date_quarter"];
      function c(e) {
        const {
            rtSteamReleaseDate: t,
            value: a,
            onChange: i,
            rgComingSoonOptionOverride: c,
            bExpandedDisplay: d,
          } = e,
          m = !!t,
          p = n.useMemo(
            () =>
              (c || o).map((e) => ({
                label: (0, l.M)(e, t, null, d),
                data: e,
              })),
            [t, c, d],
          ),
          u = n.useCallback(
            (e) => {
              i(e.data);
            },
            [i],
          ),
          _ = t
            ? (0, r.we)("#GameEdit_ComingSoon_SelectAnOption")
            : (0, r.we)("#App_Landing_NoDateSelected");
        return n.createElement(s.ZU, {
          disabled: !m,
          strDefaultLabel: _,
          rgOptions: p,
          selectedOption: m ? a : null,
          onChange: u,
        });
      }
    },
    67045: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => U });
      var n = a(90626),
        l = a(63369),
        s = a(61859),
        r = a(91675),
        o = a(46595),
        i = a(12155),
        c = a(41735),
        d = a.n(c),
        m = a(70986),
        p = a(20194),
        u = a(16676),
        _ = a(99637),
        g = a(9154),
        E = a(22797),
        D = a(7860),
        b = a(61336),
        S = a(78327),
        C = a(39679),
        R = a(51780);
      function w(e) {
        const { appid: t, onClose: a, onCommit: l } = e,
          [r, o] = n.useState(null),
          {
            data: i,
            isLoading: c,
            isLoadingError: m,
          } = (function (e) {
            return (0, p.I)({
              queryKey: ["ReleaseRequest", e],
              queryFn: async () => {
                const t = await d().get(
                  `${S.TS.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${e}`,
                );
                if ("string" == typeof t.data)
                  throw "Error loading release status";
                return { appid: e, ...t?.data };
              },
            });
          })(t),
          u = "prerelease" == i?.strReleaseState,
          _ = n.useCallback(
            (e, a) => {
              D.L.invalidateQueries({ queryKey: ["ReleaseRequest", t] }),
                l(e, a, u);
            },
            [t, l, u],
          );
        let g = n.createElement(L, { setOnOKButton: o, onCommit: _ });
        return (
          m
            ? (g = n.createElement(h, {
                strError: (0, s.we)("#Error_ErrorCommunicatingWithNetwork"),
              }))
            : (!c && i) || (g = n.createElement(E.t, null)),
          n.createElement(
            A.Provider,
            { value: i },
            n.createElement(N, { fnSubmit: r, fnCloseModal: a }, g),
          )
        );
      }
      const A = n.createContext(null);
      function f() {
        return n.useContext(A);
      }
      const L = n.memo(function (e) {
        const {
            appid: t,
            bCanUpdateComingSoonDate: a,
            rtReleaseDate: l,
            strComingSoonDisplay: r,
          } = f(),
          { setOnOKButton: o, onCommit: i } = e,
          [c, m] = n.useState(l),
          [p, _] = n.useState(r || void 0),
          [g, E] = n.useState("none"),
          [D, w] = n.useState(),
          A = n.useCallback((e) => {
            w(e), E("none");
          }, []),
          L = n.useCallback(() => {
            if (c)
              if (p) {
                E("submitting"), w(null);
                (async function (e) {
                  const {
                      unAppID: t,
                      rtReleaseDate: a,
                      strComingSoonDisplay: n,
                    } = e,
                    l = `${S.TS.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${t}`,
                    r = new FormData();
                  r.append("sessionid", S.TS.SESSIONID),
                    a && r.append("release_date", a.toString());
                  r.append("coming_soon_display", n);
                  const o = await d().post(l, r);
                  if (!o.data || 1 != o.data.success)
                    throw (0, s.we)(
                      "#Error_Description",
                      o.data?.success,
                      o.data?.error_message || "unknown",
                    );
                })({
                  unAppID: t,
                  rtReleaseDate: a ? c : null,
                  strComingSoonDisplay: p,
                })
                  .then(() => {
                    E("refreshing"), i(c, p);
                  })
                  .catch((e) => {
                    A(e);
                  });
              } else
                A(
                  (0, s.we)("#App_Landing_ReleaseDate_Error_ComingSoonDisplay"),
                );
            else A((0, s.we)("#App_Landing_ReleaseDate_Error_NoDate"));
          }, [t, c, p, a, i, A]);
        return (
          n.useEffect(() => {
            o("none" == g ? () => L : null);
          }, [L, a, g, o]),
          n.createElement(
            n.Fragment,
            null,
            D && n.createElement(h, { strError: D }),
            n.createElement(v, null),
            n.createElement(
              u.dR,
              null,
              n.createElement(
                T,
                { label: (0, s.we)("#App_Landing_IntendedReleaseDateTitle") },
                n.createElement(B, { rtSelectedDate: c, setSelectedDate: m }),
                n.createElement(k, null),
              ),
              n.createElement(
                T,
                { label: (0, s.we)("#App_Landing_PublicDateDisplayTitle") },
                n.createElement(C.Ll, {
                  rtSteamReleaseDate: c,
                  value: p,
                  onChange: _,
                }),
                n.createElement(
                  "p",
                  null,
                  (0, s.we)("#App_Landing_ReleaseDateStorePage"),
                ),
                n.createElement(
                  "p",
                  null,
                  (0, s.we)("#App_Landing_ReleaseDateStoreListing"),
                ),
              ),
            ),
            n.createElement(
              "div",
              { className: R.ReleaseColumnFooter },
              (0, s.oW)(
                "#App_Landing_NeedHelpWithReleaseDates",
                n.createElement("a", {
                  target: "_blank",
                  href: `${S.TS.PARTNER_BASE_URL}doc/store/coming_soon`,
                }),
                n.createElement("a", {
                  target: "_blank",
                  href: `${(0, b.GX)()}wizard/HelpWithPublishing`,
                }),
              ),
            ),
            n.createElement(P, null),
          )
        );
      });
      function h(e) {
        const { strError: t } = e;
        return n.createElement("div", { className: R.ErrorBox }, t);
      }
      function v() {
        const {
          bIsComingSoon: e,
          bIsStorePageReviewed: t,
          bIsWaitingForBuildReview: a,
          bIsFirstSelfPublishingApp: l,
          rtEarliestDate: r,
        } = f();
        return e && t
          ? a
            ? n.createElement(
                y,
                null,
                (0, s.we)("#App_Landing_Release_EarliestDate_BuildReview"),
              )
            : n.createElement(
                y,
                null,
                (0, s.we)("#App_Landing_Release_EarliestDate", (0, s.$z)(r)),
              )
          : l
            ? n.createElement(
                y,
                null,
                (0, s.we)("#App_Landing_Release_EarliestDate_TwoWeeks30Days"),
              )
            : n.createElement(
                y,
                null,
                (0, s.we)("#App_Landing_Release_EarliestDate_TwoWeeks"),
              );
      }
      function N(e) {
        const { fnCloseModal: t, fnSubmit: a, children: l } = e,
          { bCanUpdateComingSoonDate: r } = f() || {
            bCanUpdateComingSoonDate: !0,
          };
        return n.createElement(
          g.mt,
          { active: !0, className: R.ReleaseDateModal, onDismiss: t },
          n.createElement(
            u.Y9,
            null,
            (0, s.we)(
              r
                ? "#App_Landing_Set_Release_Date"
                : "#App_Landing_Change_Release_Date",
            ),
          ),
          n.createElement(u.nB, { className: R.ReleaseDateRequestBody }, l),
          n.createElement(u.CB, {
            bOKDisabled: !a,
            onCancel: t,
            strCancelText: (0, s.we)("#App_Landing_Requested_Date_Cancel"),
            onOK: a,
            strOKText: (0, s.we)("#App_Landing_Requested_Date_Update"),
          }),
        );
      }
      function T(e) {
        const { label: t, children: a } = e;
        return n.createElement(
          u.VP,
          { className: R.Column },
          n.createElement("div", { className: R.ColumnLabel }, t, ":"),
          n.createElement("div", { className: R.ColumnContent }, a),
        );
      }
      function B(e) {
        const { rtSelectedDate: t, setSelectedDate: a } = e,
          { bCanUpdateComingSoonDate: l, rtEarliestDate: s } = f();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(_.K, {
            bWeekdaysOnly: !0,
            bNoDefaultDate: !0,
            disabled: !l,
            nEarliestTime: s,
            fnGetTimeToUpdate: () => t,
            fnSetTimeToUpdate: a,
            className: R.DatePicker,
            bShowTimeZone: !0,
            strAlsoShowTimeZone: m.o,
          }),
        );
      }
      function k(e) {
        const { bCanUpdateComingSoonDate: t, rtReleaseDate: a } = f();
        return t
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "p",
                null,
                (0, s.we)("#App_Landing_Set_Release_Date_SetIntended"),
              ),
              n.createElement(
                "p",
                null,
                (0, s.we)("#App_Landing_Set_Release_Date_Weekends"),
              ),
              n.createElement(
                "p",
                null,
                (0, s.we)("#App_Landing_Set_Release_Date_PacificTime"),
              ),
            )
          : n.createElement(
              "p",
              null,
              (0, s.oW)(
                (0, s.we)(
                  "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc",
                  (0, s.$z)(a),
                ),
                n.createElement("a", {
                  href: `${(0, b.GX)()}wizard/HelpWithPublishing?issueid=905`,
                }),
              ),
            );
      }
      function y(e) {
        return n.createElement("span", { className: R.BlueNote }, e.children);
      }
      function P(e) {
        const {
          rtEarliestDate: t,
          strReleaseState: a,
          bCanUpdateComingSoonDate: l,
        } = f();
        return "prerelease" != a || l
          ? null
          : n.createElement(
              "div",
              { className: R.PublishNowWarning },
              (0, s.we)(
                "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note",
                (0, s.$z)(t),
              ),
            );
      }
      var I = a(52038),
        O = a(96409);
      function U(e) {
        const {
            bIsGameEdit: t,
            unAppID: a,
            rgEarliestAdvancedAccessDate: r,
          } = e,
          [c, d] = n.useState(e.rtReleaseDate),
          [m, p] = n.useState(e.strComingSoonDisplay),
          [u, _] = n.useState(!1),
          [g, E] = n.useState(!1),
          D = n.useCallback(() => _(!0), []),
          b = n.useCallback(() => _(!1), []),
          S = n.useCallback((e, t, a) => {
            d(e), p(t), _(!1), a && E(!0);
          }, []);
        return n.createElement(
          n.Fragment,
          null,
          u && n.createElement(w, { appid: a, onClose: b, onCommit: S }),
          g &&
            n.createElement(F, {
              appid: a,
              bIsGameEdit: t,
              closeModal: () => E(!1),
            }),
          n.createElement(
            "div",
            { className: (0, I.A)(o.ReleaseDateInfoCtn, t && o.GameEditCtn) },
            n.createElement(
              "div",
              { className: o.ReleaseDateContent },
              n.createElement(
                x,
                { label: (0, s.we)("#App_Landing_SpecifiedReleaseDate") },
                n.createElement(q, { rtReleaseDate: c }),
              ),
              n.createElement(
                x,
                { label: (0, s.we)("#App_Landing_CustomersSeeReleaseDate") },
                n.createElement(
                  "div",
                  { className: (0, I.A)(o.BigField, m ? o.Set : o.Unset) },
                  m
                    ? (0, l.M)(m, c)
                    : (0, s.we)("#App_Landing_UnsetReleaseDate"),
                ),
              ),
            ),
            n.createElement(
              "div",
              { className: o.EditButton, onClick: D },
              n.createElement("div", { className: (0, I.A)(o.Spacer, o.Top) }),
              n.createElement(
                "div",
                { className: o.EditButtonIcon },
                n.createElement(i.ffu, null),
              ),
              n.createElement("div", {
                className: (0, I.A)(o.Spacer, o.Bottom),
              }),
            ),
          ),
          1e3 * r > new Date().getTime() &&
            n.createElement(
              x,
              { label: (0, s.we)("#App_Landing_EarliestAdvancedAccessDate") },
              n.createElement(q, { rtReleaseDate: r }),
            ),
        );
      }
      function q(e) {
        const { rtReleaseDate: t } = e;
        return t
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "div",
                { className: (0, I.A)(o.BigField, o.Set) },
                (0, s.$z)(t),
              ),
              n.createElement(
                "div",
                { className: (0, I.A)(o.SubField, o.Set) },
                (0, r.KC)(t, {}, { timeZoneName: "short" }),
              ),
            )
          : n.createElement(
              "div",
              { className: (0, I.A)(o.BigField, o.Unset) },
              (0, s.we)("#App_Landing_UnsetReleaseDate"),
            );
      }
      function x(e) {
        return n.createElement(
          "div",
          { className: o.LabelField },
          n.createElement("div", { className: o.Label }, e.label),
          e.children,
        );
      }
      function F(e) {
        const { appid: t, bIsGameEdit: a, closeModal: l } = e,
          r = n.useCallback(() => {
            a
              ? (window.TabSelect("tab_publish"), window.scrollTo(0, 0))
              : (window.location.href =
                  O.bI.GameEditByAppID(t.toString()) +
                  "?activetab=tab_publish"),
              l();
          }, [t, a, l]);
        return n.createElement(
          g.EN,
          { active: !0 },
          n.createElement(g.o0, {
            strTitle: (0, s.we)("#App_Landing_ReleaseDate_ChangesSaved"),
            strDescription: (0, s.we)(
              "#App_Landing_Release_PublishStorePrompt",
            ),
            strOKButtonText: (0, s.we)("#App_Landing_Release_PrepareToPublish"),
            onOK: r,
            strCancelButtonText: (0, s.we)("#Button_OK"),
            closeModal: l,
          }),
        );
      }
    },
    96409: (e, t, a) => {
      "use strict";
      a.d(t, { Cg: () => r, _h: () => s, a3: () => l, bI: () => n });
      let n = {
        GameEdit: (e, t) => `/admin/game/${e}/${t}`,
        PackageEdit: (e, t) => `/admin/store/${e}/${t}`,
        BundleEdit: (e, t) => `/bundles/${e}/${t}`,
        GameEditByAppID: (e) => `/admin/game/editbyappid/${e}`,
        ReviewPriceProposals: () => "/admin/reviewpricesubmissions/",
        PackageLanding: (e) => `/store/packagelanding/${e}`,
      };
      const l = ["edit", "diff", "revert", "prepare", "publish"],
        s = [
          "package",
          "packagesave",
          "packagediff",
          "packagerevert",
          "packageprepare",
          "packagepublish",
        ],
        r = ["view", "preparestore", "revertstore", "savestore", "publish"];
    },
  },
]);

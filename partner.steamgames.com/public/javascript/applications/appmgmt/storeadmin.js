/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8974],
  {
    750: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        ControllerWizardModal:
          "controllersupportedit_ControllerWizardModal_2M4zw",
        GameName: "controllersupportedit_GameName_1wayR",
        WizardContainer: "controllersupportedit_WizardContainer_1j_e5",
        WizardBody: "controllersupportedit_WizardBody_2Agdm",
        Column: "controllersupportedit_Column_35X7X",
        ColumnLabel: "controllersupportedit_ColumnLabel_3xAxL",
        ReleaseColumnFooter: "controllersupportedit_ReleaseColumnFooter_3qIJU",
        ColumnContent: "controllersupportedit_ColumnContent_upSja",
        BlueNote: "controllersupportedit_BlueNote_3FlXr",
        PublishNowWarning: "controllersupportedit_PublishNowWarning_GSVWx",
        ErrorBox: "controllersupportedit_ErrorBox_1h88U",
        HTMLErrorBoxAppear: "controllersupportedit_HTMLErrorBoxAppear_XREUs",
        CloudConflictModalContent:
          "controllersupportedit_CloudConflictModalContent_Qq753",
        DialogChoiceDescription:
          "controllersupportedit_DialogChoiceDescription_37mGY",
        RadioButton: "controllersupportedit_RadioButton_1Cqgv",
        Selected: "controllersupportedit_Selected_1iGfi",
        OptionLabel: "controllersupportedit_OptionLabel_1CKHm",
        ProgressBar: "controllersupportedit_ProgressBar_2FcBz",
        ProgressBarComplete: "controllersupportedit_ProgressBarComplete_231x-",
        ProgressBarFillComponent:
          "controllersupportedit_ProgressBarFillComponent_a63k2",
        WizardTitle: "controllersupportedit_WizardTitle_3acfY",
        StepRow: "controllersupportedit_StepRow_4NsQg",
        StepLabel: "controllersupportedit_StepLabel_3Q7KP",
        StepImgContainer: "controllersupportedit_StepImgContainer_27_A1",
        StepInstruction: "controllersupportedit_StepInstruction_T9eBi",
        ControlsQuestion: "controllersupportedit_ControlsQuestion_86lVB",
      };
    },
    40661: (e) => {
      e.exports = {
        ReleaseDateInfoCtn: "controllersupportinfo_ReleaseDateInfoCtn_2ocuo",
        GameEditCtn: "controllersupportinfo_GameEditCtn_2o3d5",
        ReleaseDateContent: "controllersupportinfo_ReleaseDateContent_14jgI",
        EditButton: "controllersupportinfo_EditButton_1FeuJ",
        Spacer: "controllersupportinfo_Spacer_1kzzU",
        Top: "controllersupportinfo_Top_3M26M",
        Bottom: "controllersupportinfo_Bottom_1qVhc",
        EditButtonIcon: "controllersupportinfo_EditButtonIcon_1EzMv",
        LabelField: "controllersupportinfo_LabelField_15-FO",
        Label: "controllersupportinfo_Label_Tlwzu",
        BigField: "controllersupportinfo_BigField_1q70c",
        Set: "controllersupportinfo_Set_462we",
        DescText: "controllersupportinfo_DescText_1DrWi",
        StatusText: "controllersupportinfo_StatusText_3j0F2",
        StartWizardButton: "controllersupportinfo_StartWizardButton_3aJmq",
        ControllerSupportLevelString:
          "controllersupportinfo_ControllerSupportLevelString_29_hh",
        InfoRow: "controllersupportinfo_InfoRow_2EuSd",
        LocSection: "controllersupportinfo_LocSection_glzO-",
        HighlightRow: "controllersupportinfo_HighlightRow_1o45f",
        HighlightRowRed: "controllersupportinfo_HighlightRowRed_1hL1r",
        LocString: "controllersupportinfo_LocString_29T_P",
        HighlightText: "controllersupportinfo_HighlightText_3r2CU",
        ImgSection: "controllersupportinfo_ImgSection_2iy3B",
        ImgContainer: "controllersupportinfo_ImgContainer_3fVMx",
        PreviewContainer: "controllersupportinfo_PreviewContainer_1WiJc",
      };
    },
    39357: (e) => {
      e.exports = {
        ReleaseDateInfoCtn: "releasedateinfo_ReleaseDateInfoCtn_2mHXb",
        GameEditCtn: "releasedateinfo_GameEditCtn_2JigU",
        ReleaseDateContent: "releasedateinfo_ReleaseDateContent_AVZgM",
        EditButton: "releasedateinfo_EditButton_1R5w2",
        Spacer: "releasedateinfo_Spacer_3TcEp",
        Top: "releasedateinfo_Top_kNcnU",
        Bottom: "releasedateinfo_Bottom_2TBzK",
        EditButtonIcon: "releasedateinfo_EditButtonIcon_22a0a",
        LabelField: "releasedateinfo_LabelField_1olrp",
        Label: "releasedateinfo_Label_M3h38",
        BigField: "releasedateinfo_BigField_4jS-j",
        Set: "releasedateinfo_Set_eEhAf",
      };
    },
    77996: (e) => {
      e.exports = {
        ReleaseDateModal: "releasedaterequest_ReleaseDateModal_RKE7g",
        ReleaseDateRequestBody:
          "releasedaterequest_ReleaseDateRequestBody_32Cdq",
        Column: "releasedaterequest_Column__gUUe",
        ColumnLabel: "releasedaterequest_ColumnLabel_xebmA",
        ReleaseColumnFooter: "releasedaterequest_ReleaseColumnFooter_3egfk",
        ColumnContent: "releasedaterequest_ColumnContent_eZhsk",
        BlueNote: "releasedaterequest_BlueNote_1iIVg",
        PublishNowWarning: "releasedaterequest_PublishNowWarning_2-dra",
        ErrorBox: "releasedaterequest_ErrorBox_27JIJ",
        HTMLErrorBoxAppear: "releasedaterequest_HTMLErrorBoxAppear_bXT6n",
      };
    },
    91535: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => Ce });
      let r = {
        GameEdit: (e, t) => `/admin/game/${e}/${t}`,
        GameEditByAppID: (e) => `/admin/game/editbyappid/${e}`,
        AppLanding: (e) => `/apps/landing/${e}`,
        CommunityItems: (e) => `/apps/communityitems/${e}`,
      };
      const n = ["edit", "diff", "revert", "prepare", "publish"];
      var l = o(89526),
        a = o(59934),
        i = o(35993),
        p = o(81500),
        s = o(14826),
        u = o(72120),
        c = o(39357),
        d = o(701),
        m = o(33940),
        _ = o(52868),
        S = o.n(_),
        g = o(7164),
        C = o(5615),
        E = o(22444),
        b = o(82971),
        P = o(67736),
        f = o(3301),
        x = o(86900),
        T = o(207),
        h = o(32765);
      function v(e) {
        const { rtSteamReleaseDate: t, value: o, onChange: r } = e,
          n = !!t,
          a = l.useMemo(
            () =>
              [
                "date_full",
                "date_month",
                "date_quarter",
                "date_year",
                "text_comingsoon",
                "text_tba",
              ].map((e) => ({ label: (0, p.M)(e, t), data: e })),
            [t],
          ),
          i = l.useCallback(
            (e) => {
              r(e.data);
            },
            [r],
          ),
          u = t
            ? (0, s.Xx)("#GameEdit_ComingSoon_SelectAnOption")
            : (0, s.Xx)("#App_Landing_NoDateSelected");
        return l.createElement(E.TW, {
          disabled: !n,
          strDefaultLabel: u,
          rgOptions: a,
          selectedOption: n ? o : null,
          onChange: i,
        });
      }
      var k = o(77996);
      function R(e) {
        const { appid: t, onClose: o, onCommit: r } = e,
          [n, a] = l.useState(null),
          {
            data: i,
            isLoading: p,
            isLoadingError: u,
          } = (function (e) {
            return (0, C.useQuery)(["ReleaseRequest", e], () =>
              (0, m.mG)(this, void 0, void 0, function* () {
                const t = yield S().get(
                  `${h.De.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${e}`,
                );
                if ("string" == typeof t.data)
                  throw "Error loading release status";
                return Object.assign({ appid: e }, null == t ? void 0 : t.data);
              }),
            );
          })(t),
          c = "prerelease" == (null == i ? void 0 : i.strReleaseState),
          d = l.useCallback(
            (e, o) => {
              x.U.invalidateQueries(["ReleaseRequest", t]), r(e, o, c);
            },
            [t, r, c],
          );
        let _ = l.createElement(B, { setOnOKButton: a, onCommit: d });
        return (
          u
            ? (_ = l.createElement(A, {
                strError: (0, s.Xx)("#Error_ErrorCommunicatingWithNetwork"),
              }))
            : (!p && i) || (_ = l.createElement(f.V, null)),
          l.createElement(
            I.Provider,
            { value: i },
            l.createElement(X, { fnSubmit: n, fnCloseModal: o }, _),
          )
        );
      }
      const I = l.createContext(null);
      function N() {
        return l.useContext(I);
      }
      const B = l.memo(function (e) {
        const {
            appid: t,
            bCanUpdateComingSoonDate: o,
            rtReleaseDate: r,
            strComingSoonDisplay: n,
          } = N(),
          { setOnOKButton: a, onCommit: i } = e,
          [p, u] = l.useState(r),
          [c, d] = l.useState(n || void 0),
          [_, g] = l.useState("none"),
          [C, b] = l.useState(),
          P = l.useCallback((e) => {
            b(e), g("none");
          }, []),
          f = l.useCallback(() => {
            p
              ? c
                ? (g("submitting"),
                  b(null),
                  (function (e) {
                    var t, o;
                    return (0, m.mG)(this, void 0, void 0, function* () {
                      const {
                          unAppID: r,
                          rtReleaseDate: n,
                          strComingSoonDisplay: l,
                        } = e,
                        a = `${h.De.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${r}`,
                        i = new FormData();
                      i.append("sessionid", h.De.SESSIONID),
                        i.append("release_date", n.toString()),
                        i.append("coming_soon_display", l);
                      const p = yield S().post(a, i);
                      if (!p.data || 1 != p.data.success)
                        throw (0, s.Xx)(
                          "#Error_Description",
                          null === (t = p.data) || void 0 === t
                            ? void 0
                            : t.success,
                          (null === (o = p.data) || void 0 === o
                            ? void 0
                            : o.error_message) || "unknown",
                        );
                    });
                  })({ unAppID: t, rtReleaseDate: p, strComingSoonDisplay: c })
                    .then(() => {
                      g("refreshing"), i(p, c);
                    })
                    .catch((e) => {
                      P(e);
                    }))
                : P(
                    (0, s.Xx)(
                      "#App_Landing_ReleaseDate_Error_ComingSoonDisplay",
                    ),
                  )
              : P((0, s.Xx)("#App_Landing_ReleaseDate_Error_NoDate"));
          }, [t, p, c, i, P]);
        return (
          l.useLayoutEffect(() => {
            a(o && "none" == _ ? () => f : null);
          }, [f, o, _, a]),
          l.createElement(
            l.Fragment,
            null,
            C && l.createElement(A, { strError: C }),
            l.createElement(D, null),
            l.createElement(
              E.Uq,
              null,
              l.createElement(
                L,
                { label: (0, s.Xx)("#App_Landing_IntendedReleaseDateTitle") },
                l.createElement(M, { rtSelectedDate: p, setSelectedDate: u }),
                l.createElement(y, null),
              ),
              l.createElement(
                L,
                { label: (0, s.Xx)("#App_Landing_PublicDateDisplayTitle") },
                l.createElement(v, {
                  rtSteamReleaseDate: p,
                  value: c,
                  onChange: d,
                }),
                l.createElement(
                  "p",
                  null,
                  (0, s.Xx)("#App_Landing_ReleaseDateStorePage"),
                ),
                l.createElement(
                  "p",
                  null,
                  (0, s.Xx)("#App_Landing_ReleaseDateStoreListing"),
                ),
              ),
            ),
            l.createElement(
              "div",
              { className: k.ReleaseColumnFooter },
              (0, s.yu)(
                "#App_Landing_NeedHelpWithReleaseDates",
                l.createElement("a", {
                  target: "_blank",
                  href: `${h.De.PARTNER_BASE_URL}doc/store/coming_soon`,
                }),
                l.createElement("a", {
                  target: "_blank",
                  href: `${(0, T.iv)()}wizard/HelpWithPublishing`,
                }),
              ),
            ),
            l.createElement(F, null),
          )
        );
      });
      function A(e) {
        const { strError: t } = e;
        return l.createElement("div", { className: k.ErrorBox }, t);
      }
      function D() {
        const {
          bIsComingSoon: e,
          bIsStorePageReviewed: t,
          bIsWaitingForBuildReview: o,
          bIsFirstSelfPublishingApp: r,
          rtEarliestDate: n,
        } = N();
        return e && t
          ? o
            ? l.createElement(
                w,
                null,
                (0, s.Xx)("#App_Landing_Release_EarliestDate_BuildReview"),
              )
            : l.createElement(
                w,
                null,
                (0, s.Xx)("#App_Landing_Release_EarliestDate", (0, s.vX)(n)),
              )
          : r
          ? l.createElement(
              w,
              null,
              (0, s.Xx)("#App_Landing_Release_EarliestDate_TwoWeeks30Days"),
            )
          : l.createElement(
              w,
              null,
              (0, s.Xx)("#App_Landing_Release_EarliestDate_TwoWeeks"),
            );
      }
      function X(e) {
        const { fnCloseModal: t, fnSubmit: o, children: r } = e,
          { bCanUpdateComingSoonDate: n } = N() || {
            bCanUpdateComingSoonDate: !0,
          };
        return l.createElement(
          P.On,
          { active: !0, className: k.ReleaseDateModal, onDismiss: t },
          l.createElement(
            E.h4,
            null,
            (0, s.Xx)(
              n
                ? "#App_Landing_Set_Release_Date"
                : "#App_Landing_Change_Release_Date",
            ),
          ),
          l.createElement(E.uT, { className: k.ReleaseDateRequestBody }, r),
          l.createElement(E.o9, {
            bOKDisabled: !o,
            onCancel: t,
            strCancelText: (0, s.Xx)("#App_Landing_Requested_Date_Cancel"),
            onOK: o,
            strOKText: (0, s.Xx)("#App_Landing_Requested_Date_Update"),
          }),
        );
      }
      function L(e) {
        const { label: t, children: o } = e;
        return l.createElement(
          E.sg,
          { className: k.Column },
          l.createElement("div", { className: k.ColumnLabel }, t, ":"),
          l.createElement("div", { className: k.ColumnContent }, o),
        );
      }
      function M(e) {
        const { rtSelectedDate: t, setSelectedDate: o } = e,
          { bCanUpdateComingSoonDate: r, rtEarliestDate: n } = N();
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(b.A, {
            bWeekdaysOnly: !0,
            bNoDefaultDate: !0,
            disabled: !r,
            nEarliestTime: n,
            fnGetTimeToUpdate: () => t,
            fnSetTimeToUpdate: o,
            className: k.DatePicker,
            bShowTimeZone: !0,
            strAlsoShowTimeZone: g.$,
          }),
        );
      }
      function y(e) {
        const { bCanUpdateComingSoonDate: t, rtReleaseDate: o } = N();
        return t
          ? l.createElement(
              l.Fragment,
              null,
              l.createElement(
                "p",
                null,
                (0, s.Xx)("#App_Landing_Set_Release_Date_SetIntended"),
              ),
              l.createElement(
                "p",
                null,
                (0, s.Xx)("#App_Landing_Set_Release_Date_Weekends"),
              ),
              l.createElement(
                "p",
                null,
                (0, s.Xx)("#App_Landing_Set_Release_Date_PacificTime"),
              ),
            )
          : l.createElement(
              "p",
              null,
              (0, s.yu)(
                (0, s.Xx)(
                  "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc",
                  (0, s.vX)(o),
                ),
                l.createElement("a", {
                  href: `${(0, T.iv)()}wizard/HelpWithPublishing?issueid=905`,
                }),
              ),
            );
      }
      function w(e) {
        return l.createElement("span", { className: k.BlueNote }, e.children);
      }
      function F(e) {
        const {
          rtEarliestDate: t,
          strReleaseState: o,
          bCanUpdateComingSoonDate: r,
        } = N();
        return "prerelease" != o || r
          ? null
          : l.createElement(
              "div",
              { className: k.PublishNowWarning },
              (0, s.Xx)(
                "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note",
                (0, s.vX)(t),
              ),
            );
      }
      var O = o(19304);
      function G(e) {
        const { bIsGameEdit: t, unAppID: o } = e,
          [r, n] = l.useState(e.rtReleaseDate),
          [a, i] = l.useState(e.strComingSoonDisplay),
          [u, m] = l.useState(!1),
          [_, S] = l.useState(!1),
          g = l.useCallback(() => m(!0), []),
          C = l.useCallback(() => m(!1), []),
          E = l.useCallback((e, t, o) => {
            n(e), i(t), m(!1), o && S(!0);
          }, []);
        return l.createElement(
          l.Fragment,
          null,
          u && l.createElement(R, { appid: o, onClose: C, onCommit: E }),
          _ &&
            l.createElement(H, {
              appid: o,
              bIsGameEdit: t,
              closeModal: () => S(!1),
            }),
          l.createElement(
            "div",
            { className: (0, O.Z)(c.ReleaseDateInfoCtn, t && c.GameEditCtn) },
            l.createElement(
              "div",
              { className: c.ReleaseDateContent },
              l.createElement(
                z,
                { label: (0, s.Xx)("#App_Landing_SpecifiedReleaseDate") },
                l.createElement(W, { rtReleaseDate: r }),
              ),
              l.createElement(
                z,
                { label: (0, s.Xx)("#App_Landing_CustomersSeeReleaseDate") },
                l.createElement(
                  "div",
                  { className: (0, O.Z)(c.BigField, a ? c.Set : c.Unset) },
                  a
                    ? (0, p.M)(a, r)
                    : (0, s.Xx)("#App_Landing_UnsetReleaseDate"),
                ),
              ),
            ),
            l.createElement(
              "div",
              { className: c.EditButton, onClick: g },
              l.createElement("div", { className: (0, O.Z)(c.Spacer, c.Top) }),
              l.createElement(
                "div",
                { className: c.EditButtonIcon },
                l.createElement(d.I8b, null),
              ),
              l.createElement("div", {
                className: (0, O.Z)(c.Spacer, c.Bottom),
              }),
            ),
          ),
        );
      }
      function W(e) {
        const { rtReleaseDate: t } = e;
        return t
          ? l.createElement(
              l.Fragment,
              null,
              l.createElement(
                "div",
                { className: (0, O.Z)(c.BigField, c.Set) },
                (0, s.vX)(t),
              ),
              l.createElement(
                "div",
                { className: (0, O.Z)(c.SubField, c.Set) },
                (0, u.Sc)(t, {}, { timeZoneName: "short" }),
              ),
            )
          : l.createElement(
              "div",
              { className: (0, O.Z)(c.BigField, c.Unset) },
              (0, s.Xx)("#App_Landing_UnsetReleaseDate"),
            );
      }
      function z(e) {
        return l.createElement(
          "div",
          { className: c.LabelField },
          l.createElement("div", { className: c.Label }, e.label),
          e.children,
        );
      }
      function H(e) {
        const { appid: t, bIsGameEdit: o, closeModal: n } = e,
          a = l.useCallback(() => {
            o
              ? (window.TabSelect("tab_publish"), window.scrollTo(0, 0))
              : (window.location.href =
                  r.GameEditByAppID(t.toString()) + "?activetab=tab_publish"),
              n();
          }, [t, o, n]);
        return l.createElement(
          P.Yy,
          { active: !0 },
          l.createElement(P.uH, {
            strTitle: (0, s.Xx)("#App_Landing_ReleaseDate_ChangesSaved"),
            strDescription: (0, s.Xx)(
              "#App_Landing_Release_PublishStorePrompt",
            ),
            strOKButtonText: (0, s.Xx)("#App_Landing_Release_PrepareToPublish"),
            onOK: a,
            strCancelButtonText: (0, s.Xx)("#Button_OK"),
            closeModal: n,
          }),
        );
      }
      var q,
        U,
        V,
        K = o(40661),
        j = o(750),
        Z = o(16826);
      function Q(e, t) {
        const o = document.getElementById(e);
        if (o) {
          o.setAttribute("value", t ? "true" : "");
        }
      }
      function $(e) {
        const {
            nPageNum: t,
            currentValues: o,
            setCurrentValues: r,
            setSkipToEnd: n,
          } = e,
          a = [
            {
              id: q.k_eMouseKBOnly,
              locString: "#ControllerSupportModal_PgOne_MouseKBOnly",
              settings: {
                bFullXboxControllerSupport: !1,
                bPartialXboxControllerSupport: !1,
                bPS4ControllerSupport: !1,
                bPS4ControllerBTSupport: !1,
                bPS5ControllerSupport: !1,
                bPS5ControllerBTSupport: !1,
                bSteamInputAPISupport: !1,
                bNoKeyboardSupport: !1,
                bGamepadPreferred: !1,
              },
              bSkipToEnd: !0,
            },
            {
              id: q.k_eGamepadAndMouse,
              locString: "#ControllerSupportModal_PgOne_GamepadAndMouse",
              settings: {
                bFullXboxControllerSupport: !0,
                bPartialXboxControllerSupport: !1,
                bNoKeyboardSupport: !1,
                bGamepadPreferred: !1,
              },
            },
            {
              id: q.k_eGamepadPreferred,
              locString: "#ControllerSupportModal_PgOne_GamepadPreferred",
              settings: {
                bFullXboxControllerSupport: !0,
                bPartialXboxControllerSupport: !1,
                bNoKeyboardSupport: !1,
                bGamepadPreferred: !0,
              },
            },
            {
              id: q.k_eGamepadRequired,
              locString: "#ControllerSupportModal_PgOne_GamepadRequired",
              settings: {
                bFullXboxControllerSupport: !0,
                bPartialXboxControllerSupport: !1,
                bNoKeyboardSupport: !0,
                bGamepadPreferred: !1,
              },
            },
          ],
          i = () =>
            o.bNoKeyboardSupport
              ? q.k_eGamepadRequired
              : o.bGamepadPreferred
              ? q.k_eGamepadPreferred
              : o.bFullXboxControllerSupport || o.bPartialXboxControllerSupport
              ? q.k_eGamepadAndMouse
              : q.k_eMouseKBOnly,
          p = i();
        l.useEffect(() => {
          p == q.k_eMouseKBOnly && n(!0);
        }, [p, n]);
        const u = l.createElement(
          "div",
          null,
          l.createElement(
            E.SY,
            {
              value: i(),
              onChange: (e) => {
                var t;
                const l = a.find((t) => t.id == e);
                r(
                  Object.assign(
                    Object.assign({}, o),
                    null == l ? void 0 : l.settings,
                  ),
                ),
                  n(null !== (t = l.bSkipToEnd) && void 0 !== t && t);
              },
            },
            a.map((e) =>
              l.createElement(
                E.EU,
                { key: e.id, value: e.id },
                l.createElement("div", {
                  className: (0, O.Z)(j.RadioButton, p == e.id && j.Selected),
                }),
                l.createElement(
                  "div",
                  { className: j.OptionLabel },
                  (0, s.Xx)(e.locString),
                ),
              ),
            ),
          ),
        );
        return l.createElement(le, {
          strStepName: (0, s.Xx)("#ControllerSupportModal_StepString", t + 1),
          strStepSubHeaderToken: "#ControllerSupportModal_PgOne_Header",
          strInstructionsToken: void 0,
          strQuestionToken: "#ControllerSupportModal_PgOne_Question",
          leftColumnContent: u,
        });
      }
      function J(e) {
        const {
            nPageNum: t,
            currentValues: o,
            setCurrentValues: r,
            setSkipToEnd: n,
          } = e,
          a = l.useMemo(
            () => [
              {
                id: U.k_eFullXboxControllerSupport,
                locString: "#ControllerSupportModal_PgTwo_FullController",
                settings: {
                  bFullXboxControllerSupport: !0,
                  bPartialXboxControllerSupport: !1,
                },
                bSkipToEnd: !1,
              },
              {
                id: U.k_ePartialXboxControllerSupport,
                locString: "#ControllerSupportModal_PgTwo_PartialController",
                settings: {
                  bFullXboxControllerSupport: !1,
                  bPartialXboxControllerSupport: !0,
                },
              },
            ],
            [],
          ),
          i = l.useCallback(
            () =>
              o.bFullXboxControllerSupport
                ? U.k_eFullXboxControllerSupport
                : U.k_ePartialXboxControllerSupport,
            [o],
          ),
          p = l.useCallback(
            (e) => {
              var t;
              const l = a.find((t) => t.id == e);
              r(
                Object.assign(
                  Object.assign({}, o),
                  null == l ? void 0 : l.settings,
                ),
              ),
                n(null !== (t = l.bSkipToEnd) && void 0 !== t && t);
            },
            [o, a, r, n],
          ),
          u = i(),
          c = l.createElement(
            "div",
            null,
            l.createElement(
              E.SY,
              { value: i(), onChange: p },
              a.map((e) =>
                l.createElement(
                  E.EU,
                  { key: e.id, value: e.id },
                  l.createElement("div", {
                    className: (0, O.Z)(j.RadioButton, u == e.id && j.Selected),
                  }),
                  l.createElement(
                    "div",
                    { className: j.OptionLabel },
                    (0, s.Xx)(e.locString),
                  ),
                ),
              ),
            ),
          ),
          d = l.createElement(
            "div",
            null,
            l.createElement(
              "p",
              null,
              (0, s.Xx)("#ControllerSupportModal_PgTwo_Instructions"),
            ),
            l.createElement(
              "ol",
              null,
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgTwo_Instructions_pt1"),
              ),
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgTwo_Instructions_pt2"),
              ),
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgTwo_Instructions_pt3"),
              ),
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgTwo_Instructions_pt4"),
              ),
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgTwo_Instructions_pt5"),
              ),
            ),
          );
        return l.createElement(le, {
          stepIMG: l.createElement(Z.Qrh, { type: "xbox" }),
          strStepName: (0, s.Xx)("#ControllerSupportModal_StepString", t + 1),
          strStepSubHeaderToken: "#ControllerSupportModal_PgTwo_Header",
          strInstructionsToken: d,
          strQuestionToken: "#ControllerSupportModal_PgTwo_Question",
          leftColumnContent: c,
        });
      }
      function Y(e) {
        const { nPageNum: t, currentValues: o, setCurrentValues: r } = e,
          n = [
            {
              id: 0,
              locString: "#ControllerSupportModal_PgThree_Ps4",
              settings: { bPS4ControllerSupport: !0 },
              invertedSettings: { bPS4ControllerSupport: !1 },
              bValue: o.bPS4ControllerSupport,
            },
            {
              id: 1,
              locString: "#ControllerSupportModal_PgThree_Ps4BT",
              settings: { bPS4ControllerBTSupport: !0 },
              invertedSettings: { bPS4ControllerBTSupport: !1 },
              bValue: o.bPS4ControllerBTSupport,
            },
            {
              id: 2,
              locString: "#ControllerSupportModal_PgThree_Ps5",
              settings: { bPS5ControllerSupport: !0 },
              invertedSettings: { bPS5ControllerSupport: !1 },
              bValue: o.bPS5ControllerSupport,
            },
            {
              id: 3,
              locString: "#ControllerSupportModal_PgThree_Ps5BT",
              settings: { bPS5ControllerBTSupport: !0 },
              invertedSettings: { bPS5ControllerBTSupport: !1 },
              bValue: o.bPS5ControllerBTSupport,
            },
            {
              id: 4,
              locString: "#ControllerSupportModal_PgThree_None",
              settings: {
                bPS4ControllerSupport: !1,
                bPS4ControllerBTSupport: !1,
                bPS5ControllerSupport: !1,
                bPS5ControllerBTSupport: !1,
              },
              invertedSettings: { bPS4ControllerSupport: !0 },
              bValue: !(
                o.bPS4ControllerSupport ||
                o.bPS4ControllerBTSupport ||
                o.bPS5ControllerSupport ||
                o.bPS5ControllerBTSupport
              ),
            },
          ],
          a = l.createElement(
            "div",
            null,
            n.map((e) =>
              l.createElement(E.ji, {
                key: e.id,
                checked: e.bValue,
                onChange: (t) => {
                  return (
                    (n = t ? e.settings : e.invertedSettings),
                    void r(Object.assign(Object.assign({}, o), n))
                  );
                  var n;
                },
                label: (0, s.Xx)(e.locString),
              }),
            ),
          ),
          i = l.createElement(
            "div",
            null,
            l.createElement(
              "p",
              null,
              (0, s.Xx)("#ControllerSupportModal_PgThree_Instructions"),
            ),
            l.createElement(
              "ol",
              null,
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgThree_Instructions_pt1"),
              ),
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgThree_Instructions_pt2"),
              ),
            ),
            l.createElement(
              "p",
              null,
              (0, s.yu)(
                "#ControllerSupportModal_PgThree_Instructions_note",
                l.createElement("span", { style: { fontWeight: "bold" } }),
              ),
            ),
          );
        return l.createElement(le, {
          stepIMG: l.createElement(Z.Qrh, { type: "ps4" }),
          strStepName: (0, s.Xx)("#ControllerSupportModal_StepString", t + 1),
          strStepSubHeaderToken: "#ControllerSupportModal_PgThree_Header",
          strInstructionsToken: i,
          strQuestionToken: "#ControllerSupportModal_PgThree_Question",
          leftColumnContent: a,
        });
      }
      function ee(e) {
        const {
            nPageNum: t,
            currentValues: o,
            setCurrentValues: r,
            setSkipToEnd: n,
          } = e,
          a = [
            {
              id: V.k_eSteamInputAPISupport,
              locString: "#ControllerSupportModal_PgFour_SIAPI",
              settings: { bSteamInputAPISupport: !0 },
              bSkipToEnd: !1,
            },
            {
              id: V.k_eNoSteamInputAPISupport,
              locString: "#ControllerSupportModal_PgFour_NoSIAPI",
              settings: { bSteamInputAPISupport: !1 },
              bSkipToEnd: !1,
            },
          ],
          i = o.bSteamInputAPISupport
            ? V.k_eSteamInputAPISupport
            : V.k_eNoSteamInputAPISupport,
          p = l.createElement(
            "div",
            null,
            l.createElement(
              E.SY,
              {
                value: i,
                onChange: (e) => {
                  var t;
                  const l = a.find((t) => t.id == e);
                  r(
                    Object.assign(
                      Object.assign({}, o),
                      null == l ? void 0 : l.settings,
                    ),
                  ),
                    n(null !== (t = l.bSkipToEnd) && void 0 !== t && t);
                },
                classNames: j.RadioGroup,
              },
              a.map((e) =>
                l.createElement(
                  E.EU,
                  { key: e.id, value: e.id },
                  l.createElement("div", {
                    className: (0, O.Z)(j.RadioButton, i == e.id && j.Selected),
                  }),
                  l.createElement(
                    "div",
                    { className: j.OptionLabel },
                    (0, s.Xx)(e.locString),
                  ),
                ),
              ),
            ),
          ),
          u = l.createElement(
            "div",
            null,
            l.createElement(
              "p",
              null,
              (0, s.Xx)("#ControllerSupportModal_PgFour_Instructions"),
            ),
            l.createElement(
              "ol",
              null,
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgFour_Instructions_pt1"),
              ),
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgFour_Instructions_pt2"),
              ),
              l.createElement(
                "li",
                null,
                (0, s.Xx)("#ControllerSupportModal_PgFour_Instructions_pt3"),
              ),
            ),
            l.createElement(
              "p",
              null,
              (0, s.Xx)("#ControllerSupportModal_PgFour_Instructions_note"),
            ),
          );
        return l.createElement(le, {
          strStepName: (0, s.Xx)("#ControllerSupportModal_StepString", t + 1),
          strStepSubHeaderToken: "#ControllerSupportModal_PgFour_Header",
          strInstructionsToken: u,
          strQuestionToken: "#ControllerSupportModal_PgFour_Question",
          leftColumnContent: p,
        });
      }
      function te(e) {
        const { currentValues: t } = e,
          o = l.createElement(
            "div",
            null,
            (t.bFullXboxControllerSupport || t.bPartialXboxControllerSupport) &&
              l.createElement(ce, Object.assign({}, e.currentValues)),
          ),
          r =
            t.bFullXboxControllerSupport || t.bPartialXboxControllerSupport
              ? "#ControllerSupportModal_PgFive_Question"
              : "#ControllerSupportModal_PgFive_QuestionNoController";
        return l.createElement(le, {
          strStepName: (0, s.Xx)("#ControllerSupportModal_StepString", 5),
          strStepSubHeaderToken: "#ControllerSupportModal_PgFive_Header",
          strInstructionsToken: void 0,
          strQuestionToken: r,
          leftColumnContent: o,
        });
      }
      function oe(e) {
        const { appid: t, onClose: o, onCommit: r, params: n } = e,
          [a, i] = l.useState(n),
          [p, u] = l.useState(n),
          [c, d] = l.useState(!1),
          [_, S] = l.useState(0),
          g = l.useCallback(() => {
            !(function (e) {
              (0, m.mG)(this, void 0, void 0, function* () {
                Q("gamepadsupport_input_1", e.bPartialXboxControllerSupport),
                  Q("gamepadsupport_input_2", e.bFullXboxControllerSupport),
                  Q("controllersupport_input_3", e.bPS4ControllerSupport),
                  Q("controllersupport_input_4", e.bPS4ControllerBTSupport),
                  Q("controllersupport_input_5", e.bPS5ControllerBTSupport),
                  Q("controllersupport_input_6", e.bPS5ControllerBTSupport),
                  Q("controllersupport_input_7", e.bSteamInputAPISupport),
                  Q("controllersupport_input_8", e.bNoKeyboardSupport),
                  Q("controllersupport_input_8_input", e.bNoKeyboardSupport),
                  Q("controllersupport_input_9", e.bGamepadPreferred),
                  Q("controllersupport_input_10", !0);
                const t = document.getElementById("submitBtn");
                t && t.click();
              });
            })(p),
              r(!1);
          }, [r, p]);
        let C;
        switch (_) {
          default:
          case 0:
            C = l.createElement($, {
              nPageNum: _,
              currentValues: p,
              setCurrentValues: u,
              setSkipToEnd: d,
            });
            break;
          case 1:
            C = l.createElement(J, {
              nPageNum: _,
              currentValues: p,
              setCurrentValues: u,
              setSkipToEnd: d,
            });
            break;
          case 2:
            C = l.createElement(Y, {
              nPageNum: _,
              currentValues: p,
              setCurrentValues: u,
              setSkipToEnd: d,
            });
            break;
          case 3:
            C = l.createElement(ee, {
              nPageNum: _,
              currentValues: p,
              setCurrentValues: u,
              setSkipToEnd: d,
            });
            break;
          case 4:
            C = l.createElement(te, { currentValues: p });
        }
        const E = l.createElement(ne, {
            nPageIdx: _,
            nPages: 5,
            strHeaderText: (0, s.Xx)("#ControllerSupportModal_Title"),
          }),
          b = 4 == _;
        return l.createElement(
          re.Provider,
          { value: p },
          l.createElement(
            ae,
            {
              fnNext: b
                ? () => g()
                : () => {
                    i(p), S(c ? 4 : _ + 1);
                  },
              fnBack:
                _ > 0
                  ? () => {
                      u(a);
                      let e = _ - 1;
                      c && 4 == _ && (e = 0), S(e);
                    }
                  : o,
              header: E,
              strOkButtonLabel: b ? "Save and Exit" : "Next",
            },
            C,
          ),
        );
      }
      !(function (e) {
        (e[(e.k_eMouseKBOnly = 0)] = "k_eMouseKBOnly"),
          (e[(e.k_eGamepadAndMouse = 1)] = "k_eGamepadAndMouse"),
          (e[(e.k_eGamepadPreferred = 2)] = "k_eGamepadPreferred"),
          (e[(e.k_eGamepadRequired = 3)] = "k_eGamepadRequired");
      })(q || (q = {})),
        (function (e) {
          (e[(e.k_eFullXboxControllerSupport = 0)] =
            "k_eFullXboxControllerSupport"),
            (e[(e.k_ePartialXboxControllerSupport = 1)] =
              "k_ePartialXboxControllerSupport");
        })(U || (U = {})),
        (function (e) {
          (e[(e.k_eSteamInputAPISupport = 0)] = "k_eSteamInputAPISupport"),
            (e[(e.k_eNoSteamInputAPISupport = 1)] =
              "k_eNoSteamInputAPISupport");
        })(V || (V = {}));
      const re = l.createContext(null);
      function ne(e) {
        const { nPages: t, nPageIdx: o, strHeaderText: r } = e,
          n = (100 * (o + 1)) / (t + 1);
        return l.createElement(
          "div",
          { className: (0, O.Z)(j.ModalHeader) },
          !1,
          l.createElement("div", { className: j.WizardTitle }, (0, s.Xx)(r)),
          l.createElement(
            "div",
            {
              className: (0, O.Z)(
                j.ProgressBar,
                o == t - 1 && j.ProgressBarComplete,
              ),
            },
            o < t - 1 &&
              l.createElement("div", {
                className: (0, O.Z)(j.ProgressBarFillComponent),
                style: { width: n + "%" },
              }),
          ),
        );
      }
      const le = l.memo(function (e) {
        const {
          strStepName: t,
          strStepSubHeaderToken: o,
          stepIMG: r,
          strInstructionsToken: n,
          strQuestionToken: a,
          leftColumnContent: i,
          rightColumnContent: p,
        } = e;
        return l.createElement(
          "div",
          { className: j.WizardContainer },
          l.createElement(
            "div",
            { className: j.StepRow },
            r &&
              l.createElement(
                "div",
                { className: j.StepImgContainer },
                " ",
                r,
                " ",
              ),
            l.createElement(
              "div",
              { className: j.StepLabel },
              t,
              l.createElement(E.bU, null, (0, s.Xx)(o)),
            ),
          ),
          n && l.createElement("div", { className: j.StepInstruction }, n),
          l.createElement(
            "div",
            { className: j.ControlsQuestion },
            (0, s.yu)(
              a,
              l.createElement("span", { style: { fontWeight: "bold" } }),
            ),
          ),
          l.createElement(
            E.Uq,
            null,
            l.createElement(E.sg, null, i),
            l.createElement(E.sg, null, p),
          ),
        );
      });
      function ae(e) {
        const {
          fnNext: t,
          fnBack: o,
          children: r,
          header: n,
          strOkButtonLabel: a,
        } = e;
        return l.createElement(
          P.On,
          { active: !0, className: j.ControllerWizardModal },
          n,
          l.createElement(E.uT, { className: j.WizardBody }, r),
          l.createElement(E.o9, {
            bCancelDisabled: !o,
            onCancel: o,
            strCancelText: "Back",
            onOK: t,
            strOKText: a,
          }),
        );
      }
      function ie(e) {
        const { unAppID: t } = e,
          [o, r] = l.useState(!1),
          n = l.useCallback(() => r(!0), []),
          a = l.useCallback(() => r(!1), []),
          i =
            e.bControllerSupportWizardComplete &&
            (e.bFullXboxControllerSupport || e.bPartialXboxControllerSupport);
        return l.createElement(
          l.Fragment,
          null,
          o &&
            l.createElement(oe, {
              appid: t,
              onClose: a,
              onCommit: a,
              params: e,
            }),
          l.createElement(
            E.uT,
            null,
            l.createElement(
              "div",
              { className: K.DescText },
              (0, s.Xx)("#App_Landing_ControllerSupport_WizardPrompt_Desc"),
            ),
            e.bControllerSupportWizardComplete &&
              l.createElement(
                "div",
                { className: K.DescText },
                (0, s.Xx)(
                  "#App_Landing_ControllerSupport_WizardPrompt_CustomerView",
                ),
              ),
          ),
          l.createElement(
            "div",
            { className: (0, O.Z)(K.ReleaseDateInfoCtn) },
            l.createElement(
              "div",
              { className: K.ReleaseDateContent },
              !e.bControllerSupportWizardComplete &&
                l.createElement(pe, { onClick: n }),
              e.bControllerSupportWizardComplete &&
                !i &&
                l.createElement(se, { onClick: n }),
              e.bControllerSupportWizardComplete &&
                i &&
                l.createElement(ce, Object.assign({}, e)),
            ),
            e.bControllerSupportWizardComplete &&
              i &&
              l.createElement(
                "div",
                { className: K.EditButton, onClick: n },
                l.createElement("div", {
                  className: (0, O.Z)(K.Spacer, K.Top),
                }),
                l.createElement(
                  "div",
                  { className: K.EditButtonIcon },
                  l.createElement(d.I8b, null),
                ),
                l.createElement("div", {
                  className: (0, O.Z)(K.Spacer, K.Bottom),
                }),
              ),
          ),
        );
      }
      function pe(e) {
        return l.createElement(
          "div",
          null,
          l.createElement(
            E.uT,
            null,
            l.createElement(
              E.Ac,
              null,
              l.createElement(
                "div",
                { className: K.StatusText },
                (0, s.Xx)(
                  "#App_Landing_ControllerSupport_WizardPrompt_StatusNotStarted",
                ),
              ),
            ),
            l.createElement(
              E.zx,
              { className: K.StartWizardButton, onClick: e.onClick },
              " ",
              (0, s.Xx)(
                "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
              ),
              " ",
            ),
          ),
        );
      }
      function se(e) {
        return l.createElement(
          "div",
          null,
          l.createElement(
            E.uT,
            null,
            l.createElement(
              E.Ac,
              null,
              l.createElement(
                "div",
                { className: K.StatusText },
                (0, s.Xx)(
                  "#App_Landing_ControllerSupport_WizardPrompt_StatusNoController",
                ),
              ),
            ),
            l.createElement(
              E.zx,
              { className: K.StartWizardButton, onClick: e.onClick },
              " ",
              (0, s.Xx)(
                "#App_Landing_ControllerSupport_WizardPrompt_EditButton",
              ),
              " ",
            ),
          ),
        );
      }
      function ue(e) {
        return l.createElement(
          "div",
          { className: K.InfoRow },
          l.createElement(
            "div",
            {
              className: (0, O.Z)(
                K.ImgSection,
                e.bHightlightRow && K.HighlightRow,
                e.bHighlightRowRed && K.HighlightRowRed,
              ),
            },
            l.createElement("div", { className: K.ImgContainer }, e.tagImage),
          ),
          l.createElement(
            "div",
            {
              className: (0, O.Z)(
                K.LocSection,
                e.bHightlightRow && K.HighlightRow,
                e.bHighlightRowRed && K.HighlightRowRed,
              ),
            },
            l.createElement(
              "div",
              {
                className: (0, O.Z)(
                  K.LocString,
                  e.bHighlightText && K.HighlightText,
                  e.bHightlightRow && K.HighlightRow,
                  e.bHighlightRowRed && K.HighlightRowRed,
                ),
              },
              " ",
              (0, s.Xx)(e.strLocalizationToken),
              " ",
            ),
          ),
        );
      }
      function ce(e) {
        const {
          bPS4ControllerSupport: t,
          bPS5ControllerSupport: o,
          bPS4ControllerBTSupport: r,
          bPS5ControllerBTSupport: n,
          bFullXboxControllerSupport: a,
          bPartialXboxControllerSupport: i,
          bSteamInputAPISupport: p,
          bGamepadPreferred: u,
          bNoKeyboardSupport: c,
        } = e;
        let d = [];
        return (
          t && o && r && n
            ? d.push(
                l.createElement(ue, {
                  key: "1",
                  tagImage: l.createElement(Z.CtA, { controllerType: 34 }),
                  strLocalizationToken: "#App_Landing_ControllerSupport_PS",
                }),
              )
            : (t &&
                (r
                  ? d.push(
                      l.createElement(ue, {
                        key: "2",
                        tagImage: l.createElement(Z.CtA, {
                          controllerType: 34,
                        }),
                        strLocalizationToken:
                          "#App_Landing_ControllerSupport_PS4",
                      }),
                    )
                  : d.push(
                      l.createElement(ue, {
                        key: "3",
                        tagImage: l.createElement(Z.CtA, {
                          controllerType: 34,
                        }),
                        strLocalizationToken:
                          "#App_Landing_ControllerSupport_PS4_USB",
                      }),
                    )),
              o &&
                (n
                  ? d.push(
                      l.createElement(ue, {
                        key: "4",
                        tagImage: l.createElement(Z.CtA, {
                          controllerType: 45,
                        }),
                        strLocalizationToken:
                          "#App_Landing_ControllerSupport_PS5",
                      }),
                    )
                  : d.push(
                      l.createElement(ue, {
                        key: "5",
                        tagImage: l.createElement(Z.CtA, {
                          controllerType: 45,
                        }),
                        strLocalizationToken:
                          "#App_Landing_ControllerSupport_PS5_USB",
                      }),
                    ))),
          l.createElement(
            "div",
            { className: K.PreviewContainer },
            (i || a) &&
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  "div",
                  { className: K.ControllerSupportLevelString },
                  (0, s.Xx)(
                    a
                      ? "#App_Landing_ControllerSupport_FullController"
                      : "#App_Landing_ControllerSupport_PartialController",
                  ),
                ),
                u &&
                  l.createElement(ue, {
                    tagImage: l.createElement(Z.CtA, { controllerType: 30 }),
                    strLocalizationToken:
                      "#App_Landing_ControllerSupport_GamepadPreferred",
                    bHightlightRow: !0,
                  }),
                c &&
                  l.createElement(ue, {
                    tagImage: l.createElement(Z.CtA, { controllerType: 30 }),
                    strLocalizationToken:
                      "#App_Landing_ControllerSupport_GamepadRequired",
                    bHightlightRow: !0,
                    bHighlightRowRed: !0,
                  }),
                l.createElement(ue, {
                  tagImage: l.createElement(Z.CtA, { controllerType: 32 }),
                  strLocalizationToken: "#App_Landing_ControllerSupport_Xbox",
                }),
                d,
                p &&
                  l.createElement(ue, {
                    tagImage: l.createElement(Z.IRk, { bGreyOutRightSide: !a }),
                    strLocalizationToken:
                      "#App_Landing_ControllerSupport_SIAPI",
                  }),
              ),
          )
        );
      }
      var de = o(6531),
        me = o(4306);
      class _e extends l.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              color: this.props.color || "rgba(1.0,1.0,1.0,1.0)",
            });
        }
        static GetColorString(e) {
          return `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`;
        }
        OnColorChange(e) {
          const t = _e.GetColorString(e);
          this.setState({ color: t }), this.props.onChange(t);
        }
        render() {
          return l.createElement(de.AI, {
            onChange: this.OnColorChange,
            color: this.state.color,
          });
        }
      }
      (0, m.gn)([me.ak], _e.prototype, "OnColorChange", null);
      var Se = o(40103);
      function ge(e) {
        const { rgGameProfileColorDefs: t } = e,
          o = t.map((e) =>
            l.createElement(
              "div",
              { key: e.strProfileColorKey, className: "form_row_flex" },
              l.createElement(
                "div",
                { className: "form_label_flex" },
                "*",
                e.strProfileColorLabel,
              ),
              l.createElement(
                "div",
                { className: "form_data_flex" },
                (function (e) {
                  let [t, o] = l.useState(e.strCurrentColor);
                  const r = l.useRef(),
                    n = (e) => {
                      const r = (e) => {
                        o(e);
                      };
                      (0, Se.yV)(
                        l.createElement(_e, { onChange: r, color: t }),
                        e,
                        { bDisablePopTop: !0 },
                      );
                    },
                    a = () => {
                      o(r.current.value);
                    };
                  return l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("input", {
                      ref: r,
                      type: "text",
                      name: `item[profile_colors][${e.strProfileColorKey}]`,
                      onChange: a,
                      placeholder: "rgba(255, 255, 255, .5)",
                      size: 20,
                      value: t,
                    }),
                    l.createElement("div", {
                      className: "profile_color_preview",
                      style: { backgroundColor: `${t}` },
                      onClick: n,
                    }),
                  );
                })(e),
              ),
            ),
          );
        return l.createElement("div", { className: "profile_colors_ctn" }, o);
      }
      function Ce(e) {
        return l.createElement(
          a.rs,
          null,
          l.createElement(
            a.AW,
            { path: r.GameEdit(`:action(${n.join("|")})`, ":itemid") },
            l.createElement(i.d, {
              config: {
                "storeadmin-releasedateinfo": (e) =>
                  l.createElement(G, Object.assign({ bIsGameEdit: !0 }, e)),
                "storeadmin-controllersupportinfo": (e) =>
                  l.createElement(ie, Object.assign({}, e)),
              },
            }),
          ),
          l.createElement(a.AW, {
            path: r.AppLanding(":appid"),
            render: (e) =>
              l.createElement(i.d, {
                config: {
                  "storeadmin-releasedateinfo": (e) =>
                    l.createElement(G, Object.assign({}, e)),
                },
              }),
          }),
          l.createElement(a.AW, {
            path: r.CommunityItems(":appid"),
            render: (e) =>
              l.createElement(i.d, {
                config: {
                  "storeadmin-profilecolors": (e) =>
                    l.createElement(ge, Object.assign({}, e)),
                },
              }),
          }),
        );
      }
    },
  },
]);

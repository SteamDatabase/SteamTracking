/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8974],
  {
    69409: (e) => {
      e.exports = {
        EventTimeSection: "partnereventshareddates_EventTimeSection_27EoU",
        EventTimeTitle: "partnereventshareddates_EventTimeTitle_2sTdT",
        EventVisibilityItem:
          "partnereventshareddates_EventVisibilityItem_3Q0gD",
        EventEditorInputPaneContainer:
          "partnereventshareddates_EventEditorInputPaneContainer_3j82M",
        TimeWidth: "partnereventshareddates_TimeWidth_2W8sg",
        EventPublishTimeCtn:
          "partnereventshareddates_EventPublishTimeCtn_12m3S",
        DateWidth: "partnereventshareddates_DateWidth_2ao2W",
        PacificTimeHint: "partnereventshareddates_PacificTimeHint_VTwea",
        TimeZone: "partnereventshareddates_TimeZone_2RLF9",
        InputBorder: "partnereventshareddates_InputBorder_2mTwC",
        TimeBlock: "partnereventshareddates_TimeBlock_1O49u",
        TimeRowContainer: "partnereventshareddates_TimeRowContainer_3ksYF",
        TimeRowDropDown: "partnereventshareddates_TimeRowDropDown_3KrsS",
        EndDateAmountCtn: "partnereventshareddates_EndDateAmountCtn_2_8MR",
        EndRound: "partnereventshareddates_EndRound_1MAHS",
        VisibilityItemList: "partnereventshareddates_VisibilityItemList_rYX24",
        VisibilityItems: "partnereventshareddates_VisibilityItems_2SAGi",
        EventEditorVisibilityCtn:
          "partnereventshareddates_EventEditorVisibilityCtn_1jbnR",
        DateErrorCtn: "partnereventshareddates_DateErrorCtn_Bww9B",
      };
    },
    81104: (e) => {
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
    80238: (e) => {
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
    81500: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => s, y: () => r });
      var n = a(14826),
        i = a(72120);
      function r(e) {
        return s(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message
        );
      }
      function s(e, t, a) {
        switch (e) {
          case "date_full":
            return (0, n.vX)(t);
          case "date_month":
            return (0, i.LO)(new Date(1e3 * t));
          case "date_quarter":
            return (0, i.Kb)(new Date(1e3 * t));
          case "date_year":
            return (0, i.Np)(new Date(1e3 * t));
          case "text_comingsoon":
            return a || (0, n.Xx)("#Store_ComingSoon_ComingSoon");
          case "text_tba":
            return a || (0, n.Xx)("#Store_ComingSoon_TBA");
          default:
            return "";
        }
      }
    },
    82971: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => C });
      var n = a(33940),
        i = a(88464),
        r = (a(36105), a(89526)),
        s = a(5556),
        l = a.n(s),
        o = a(28542),
        m = a(85651),
        d = a(17318),
        c = a.n(d),
        u = a(19304),
        p = a(14826),
        _ = a(4306),
        E = a(84343),
        g = a(69409),
        h = a.n(g),
        S = a(47812),
        D = a.n(S);
      let C = class extends r.Component {
        constructor(e) {
          super(e),
            (this.state = {
              timeAsString: null,
              dateAsString: null,
              bEndTimeBeforeStartTime: !1,
            });
        }
        OnTimeChange(e) {
          const {
            nEarliestTime: t,
            fnSetTimeToUpdate: a,
            fnIsValidDateTime: n,
            disabled: i,
          } = this.props;
          if (i) return;
          if ("string" == typeof e) {
            let t = D()(e, "h:m a +-h:m", !0);
            if (!t.isValid()) return void this.setState({ timeAsString: e });
            e = t;
          }
          let r = this.props.fnGetTimeToUpdate(),
            s = 0;
          if (r) {
            const t = D().unix(r);
            e.year(t.year()),
              e.month(t.month()),
              e.day(t.day()),
              (s = e.unix());
          } else {
            s =
              D().unix(t).hour(0).second(0).minutes(0).unix() +
              3600 * e.hour() +
              60 * e.minutes();
          }
          a(s);
          let l = n && !0 === n();
          (null == this.state.timeAsString &&
            l == this.state.bEndTimeBeforeStartTime) ||
            this.setState({ timeAsString: null, bEndTimeBeforeStartTime: l });
        }
        OnDateChange(e) {
          const { disabled: t } = this.props;
          if (t) return;
          if ("string" == typeof e) {
            let t = D()(e, "M/D/YYYY", !0);
            if (!t.isValid()) return void this.setState({ dateAsString: e });
            e = t;
          }
          const a = this.props.fnGetTimeToUpdate(),
            n = D().unix(a || m.JW.GetTimeNowWithOverride());
          e.hour(n.hour()),
            e.minute(n.minute()),
            e.second(0),
            this.props.fnSetTimeToUpdate(e.unix());
          let i =
            this.props.fnIsValidDateTime &&
            !0 === this.props.fnIsValidDateTime();
          (null == this.state.dateAsString &&
            i == this.state.bEndTimeBeforeStartTime) ||
            this.setState({ dateAsString: null, bEndTimeBeforeStartTime: i });
        }
        IsValidDate(e) {
          if (this.props.disabled) return !1;
          const {
              nEarliestTime: t,
              nLatestTime: a,
              bWeekdaysOnly: n,
            } = this.props,
            i = D().unix(t).hour(0).seconds(0).minute(0);
          let r = e.unix() >= i.unix();
          if (r && a && a >= t) {
            const t = D().unix(a).hour(23).minute(59).seconds(59);
            r = e.unix() <= t.unix();
          }
          return (
            r && n && ((0 != e.weekday() && 6 != e.weekday()) || (r = !1)), r
          );
        }
        SetToNow() {
          this.props.fnSetToNow
            ? this.props.fnSetToNow(m.JW.GetTimeNowWithOverride())
            : this.props.fnSetTimeToUpdate(m.JW.GetTimeNowWithOverride());
        }
        render() {
          const {
            nLatestTime: e,
            nEarliestTime: t,
            fnGetTimeToUpdate: a,
            fnIsValidDateTime: n,
            strAlsoShowTimeZone: i,
            disabled: s,
            bNoDefaultDate: d,
          } = this.props;
          let _ = a(),
            g = _ > 0 ? new Date(1e3 * _) : null,
            S = "h:mm A";
          const C = n && n(),
            f =
              this.state.timeAsString ||
              this.state.dateAsString ||
              "string" == typeof C ||
              !1 === C;
          let T,
            b,
            A = "#DateTimePicker_Fallback_Invalid_DateTime";
          if (
            (this.state.timeAsString
              ? (A = "#DateTimePicker_Time_CannotParse")
              : this.state.dateAsString
              ? (A = "#DateTimePicker_Date_CannotParse")
              : "string" == typeof C && (A = C),
            e && t && e == t && t > m.JW.GetTimeNowWithOverride())
          ) {
            let e = D().unix(t);
            (T = {
              hours: { max: e.hour(), min: e.hour(), step: 0 },
              minutes: { max: e.minute(), min: e.minute(), step: 0 },
              seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (S = "HH:mm");
          }
          _ || !t || d || (b = D().unix(t));
          const v = D().tz.guess(),
            R = D().unix(_).tz(v),
            x = !!i && v != i && D().unix(_).tz(i);
          return r.createElement(
            "div",
            { className: (0, u.Z)(h().EventTimeSection, this.props.className) },
            r.createElement(
              "div",
              { className: (0, u.Z)(h().EventTimeTitle, "DialogLabel") },
              r.createElement(
                E.HP,
                { toolTipContent: this.props.strDescToolTip, direction: "top" },
                Boolean(this.props.strDescription) &&
                  r.createElement("span", null, this.props.strDescription)
              ),
              f &&
                r.createElement(
                  "span",
                  { className: h().DateErrorCtn },
                  r.createElement("img", { src: o.Z }),
                  (0, p.Xx)(A)
                )
            ),
            r.createElement(
              "div",
              { className: c().FlexRowContainer },
              r.createElement(
                "div",
                { className: (0, u.Z)(c().InputBorder, h().TimeBlock) },
                r.createElement(l(), {
                  onChange: this.OnDateChange,
                  timeFormat: !1,
                  value: this.state.dateAsString ? this.state.dateAsString : g,
                  isValidDate: this.IsValidDate,
                  initialValue: b,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Date"),
                    className: (0, u.Z)(
                      h().DateWidth,
                      "DialogInput",
                      "DialogTextInputBase"
                    ),
                    disabled: s,
                  },
                }),
                !!x &&
                  r.createElement(
                    "div",
                    { className: h().PacificTimeHint },
                    x.format("L")
                  )
              ),
              r.createElement(
                "div",
                { className: (0, u.Z)(c().InputBorder, h().TimeBlock) },
                r.createElement(l(), {
                  onChange: this.OnTimeChange,
                  dateFormat: !1,
                  timeFormat: S,
                  timeConstraints: T,
                  value: this.state.timeAsString ? this.state.timeAsString : g,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Time"),
                    className: (0, u.Z)(
                      h().TimeWidth,
                      "DialogInput",
                      "DialogTextInputBase"
                    ),
                    disabled: s,
                  },
                }),
                !!x &&
                  r.createElement(
                    "div",
                    { className: h().PacificTimeHint },
                    x.format("LT")
                  )
              ),
              this.props.bShowTimeZone &&
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "div",
                    { className: h().TimeZone },
                    R.zoneAbbr()
                  ),
                  !!x &&
                    r.createElement(
                      "div",
                      { className: h().TimeZone },
                      x.zoneAbbr()
                    )
                )
            ),
            Boolean(T) &&
              r.createElement(
                "div",
                null,
                (0, p.Xx)("#DateTimePicker_DateTime_Fixed")
              )
          );
        }
      };
      (0, n.gn)([_.ak], C.prototype, "OnTimeChange", null),
        (0, n.gn)([_.ak], C.prototype, "OnDateChange", null),
        (0, n.gn)([_.ak], C.prototype, "IsValidDate", null),
        (0, n.gn)([_.ak], C.prototype, "SetToNow", null),
        (C = (0, n.gn)([i.Pi], C));
    },
    70364: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => K });
      var n = a(89526),
        i = a(81500),
        r = a(22444),
        s = a(14826);
      function l(e) {
        const { rtSteamReleaseDate: t, value: a, onChange: l } = e,
          o = !!t,
          m = n.useMemo(
            () =>
              [
                "date_full",
                "date_month",
                "date_quarter",
                "date_year",
                "text_comingsoon",
                "text_tba",
              ].map((e) => ({ label: (0, i.M)(e, t), data: e })),
            [t]
          ),
          d = n.useCallback(
            (e) => {
              l(e.data);
            },
            [l]
          ),
          c = t
            ? (0, s.Xx)("#GameEdit_ComingSoon_SelectAnOption")
            : (0, s.Xx)("#App_Landing_NoDateSelected");
        return n.createElement(r.TW, {
          disabled: !o,
          strDefaultLabel: c,
          rgOptions: m,
          selectedOption: o ? a : null,
          onChange: d,
        });
      }
      let o = {
        GameEdit: (e, t) => `/admin/game/${e}/${t}`,
        GameEditByAppID: (e) => `/admin/game/editbyappid/${e}`,
        AppLanding: (e) => `/apps/landing/${e}`,
        CommunityItems: (e) => `/apps/communityitems/${e}`,
      };
      const m = ["edit", "diff", "revert", "prepare", "publish"];
      var d = a(59934),
        c = a(35993),
        u = a(72120),
        p = a(81104),
        _ = a(701),
        E = a(33940),
        g = a(52868),
        h = a.n(g),
        S = a(7164),
        D = a(5615),
        C = (a(46132), a(82971)),
        f = a(67736),
        T = a(69338),
        b = a(86900),
        A = a(207),
        v = a(32765),
        R = a(80238);
      function x(e) {
        const { appid: t, onClose: a, onCommit: i } = e,
          [r, l] = n.useState(null),
          {
            data: o,
            isLoading: m,
            isLoadingError: d,
          } = (function (e) {
            return (0, D.useQuery)(["ReleaseRequest", e], () =>
              (0, E.mG)(this, void 0, void 0, function* () {
                const t = yield h().get(
                  `${v.De.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${e}`
                );
                if ("string" == typeof t.data)
                  throw "Error loading release status";
                return Object.assign({ appid: e }, null == t ? void 0 : t.data);
              })
            );
          })(t),
          c = "prerelease" == (null == o ? void 0 : o.strReleaseState),
          u = n.useCallback(
            (e, a) => {
              b.U.invalidateQueries(["ReleaseRequest", t]), i(e, a, c);
            },
            [t, i, c]
          );
        let p = n.createElement(y, { setOnOKButton: l, onCommit: u });
        return (
          d
            ? (p = n.createElement(L, {
                strError: (0, s.Xx)("#Error_ErrorCommunicatingWithNetwork"),
              }))
            : (!m && o) || (p = n.createElement(T.V, null)),
          n.createElement(
            N.Provider,
            { value: o },
            n.createElement(w, { fnSubmit: r, fnCloseModal: a }, p)
          )
        );
      }
      const N = n.createContext(null);
      function B() {
        return n.useContext(N);
      }
      const y = n.memo(function (e) {
        const {
            appid: t,
            bCanUpdateComingSoonDate: a,
            rtReleaseDate: i,
            strComingSoonDisplay: o,
          } = B(),
          { setOnOKButton: m, onCommit: d } = e,
          [c, u] = n.useState(i),
          [p, _] = n.useState(o || void 0),
          [g, S] = n.useState("none"),
          [D, C] = n.useState(),
          f = n.useCallback((e) => {
            C(e), S("none");
          }, []),
          T = n.useCallback(() => {
            c
              ? p
                ? (S("submitting"),
                  C(null),
                  (function (e) {
                    var t, a;
                    return (0, E.mG)(this, void 0, void 0, function* () {
                      const {
                          unAppID: n,
                          rtReleaseDate: i,
                          strComingSoonDisplay: r,
                        } = e,
                        l = `${v.De.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${n}`,
                        o = new FormData();
                      o.append("sessionid", v.De.SESSIONID),
                        o.append("release_date", i.toString()),
                        o.append("coming_soon_display", r);
                      const m = yield h().post(l, o);
                      if (!m.data || 1 != m.data.success)
                        throw (0, s.Xx)(
                          "#Error_Description",
                          null === (t = m.data) || void 0 === t
                            ? void 0
                            : t.success,
                          (null === (a = m.data) || void 0 === a
                            ? void 0
                            : a.error_message) || "unknown"
                        );
                    });
                  })({ unAppID: t, rtReleaseDate: c, strComingSoonDisplay: p })
                    .then(() => {
                      S("refreshing"), d(c, p);
                    })
                    .catch((e) => {
                      f(e);
                    }))
                : f(
                    (0, s.Xx)(
                      "#App_Landing_ReleaseDate_Error_ComingSoonDisplay"
                    )
                  )
              : f((0, s.Xx)("#App_Landing_ReleaseDate_Error_NoDate"));
          }, [t, c, p, d, f]);
        return (
          n.useLayoutEffect(() => {
            m(a && "none" == g ? () => T : null);
          }, [T, a, g, m]),
          n.createElement(
            n.Fragment,
            null,
            D && n.createElement(L, { strError: D }),
            n.createElement(I, null),
            n.createElement(
              r.Uq,
              null,
              n.createElement(
                k,
                { label: (0, s.Xx)("#App_Landing_IntendedReleaseDateTitle") },
                n.createElement(X, { rtSelectedDate: c, setSelectedDate: u }),
                n.createElement(P, null)
              ),
              n.createElement(
                k,
                { label: (0, s.Xx)("#App_Landing_PublicDateDisplayTitle") },
                n.createElement(l, {
                  rtSteamReleaseDate: c,
                  value: p,
                  onChange: _,
                }),
                n.createElement(
                  "p",
                  null,
                  (0, s.Xx)("#App_Landing_ReleaseDateStorePage")
                ),
                n.createElement(
                  "p",
                  null,
                  (0, s.Xx)("#App_Landing_ReleaseDateStoreListing")
                )
              )
            ),
            n.createElement(
              "div",
              { className: R.ReleaseColumnFooter },
              (0, s.yu)(
                "#App_Landing_NeedHelpWithReleaseDates",
                n.createElement("a", {
                  target: "_blank",
                  href: `${v.De.PARTNER_BASE_URL}doc/store/coming_soon`,
                }),
                n.createElement("a", {
                  target: "_blank",
                  href: `${(0, A.iv)()}wizard/HelpWithPublishing`,
                })
              )
            ),
            n.createElement(G, null)
          )
        );
      });
      function L(e) {
        const { strError: t } = e;
        return n.createElement("div", { className: R.ErrorBox }, t);
      }
      function I() {
        const {
          bIsComingSoon: e,
          bIsStorePageReviewed: t,
          bIsWaitingForBuildReview: a,
          bIsFirstSelfPublishingApp: i,
          rtEarliestDate: r,
        } = B();
        return e && t
          ? a
            ? n.createElement(
                W,
                null,
                (0, s.Xx)("#App_Landing_Release_EarliestDate_BuildReview")
              )
            : n.createElement(
                W,
                null,
                (0, s.Xx)("#App_Landing_Release_EarliestDate", (0, s.vX)(r))
              )
          : i
          ? n.createElement(
              W,
              null,
              (0, s.Xx)("#App_Landing_Release_EarliestDate_TwoWeeks30Days")
            )
          : n.createElement(
              W,
              null,
              (0, s.Xx)("#App_Landing_Release_EarliestDate_TwoWeeks")
            );
      }
      function w(e) {
        const { fnCloseModal: t, fnSubmit: a, children: i } = e,
          { bCanUpdateComingSoonDate: l } = B() || {
            bCanUpdateComingSoonDate: !0,
          };
        return n.createElement(
          f.On,
          { active: !0, className: R.ReleaseDateModal, onDismiss: t },
          n.createElement(
            r.h4,
            null,
            (0, s.Xx)(
              l
                ? "#App_Landing_Set_Release_Date"
                : "#App_Landing_Change_Release_Date"
            )
          ),
          n.createElement(r.uT, { className: R.ReleaseDateRequestBody }, i),
          n.createElement(r.o9, {
            bOKDisabled: !a,
            onCancel: t,
            strCancelText: (0, s.Xx)("#App_Landing_Requested_Date_Cancel"),
            onOK: a,
            strOKText: (0, s.Xx)("#App_Landing_Requested_Date_Update"),
          })
        );
      }
      function k(e) {
        const { label: t, children: a } = e;
        return n.createElement(
          r.sg,
          { className: R.Column },
          n.createElement("div", { className: R.ColumnLabel }, t, ":"),
          n.createElement("div", { className: R.ColumnContent }, a)
        );
      }
      function X(e) {
        const { rtSelectedDate: t, setSelectedDate: a } = e,
          { bCanUpdateComingSoonDate: i, rtEarliestDate: r } = B();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(C.A, {
            bWeekdaysOnly: !0,
            bNoDefaultDate: !0,
            disabled: !i,
            nEarliestTime: r,
            fnGetTimeToUpdate: () => t,
            fnSetTimeToUpdate: a,
            className: R.DatePicker,
            bShowTimeZone: !0,
            strAlsoShowTimeZone: S.$,
          })
        );
      }
      function P(e) {
        const { bCanUpdateComingSoonDate: t, rtReleaseDate: a } = B();
        return t
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "p",
                null,
                (0, s.Xx)("#App_Landing_Set_Release_Date_SetIntended")
              ),
              n.createElement(
                "p",
                null,
                (0, s.Xx)("#App_Landing_Set_Release_Date_Weekends")
              ),
              n.createElement(
                "p",
                null,
                (0, s.Xx)("#App_Landing_Set_Release_Date_PacificTime")
              )
            )
          : n.createElement(
              "p",
              null,
              (0, s.yu)(
                (0, s.Xx)(
                  "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc",
                  (0, s.vX)(a)
                ),
                n.createElement("a", {
                  href: `${(0, A.iv)()}wizard/HelpWithPublishing?issueid=905`,
                })
              )
            );
      }
      function W(e) {
        return n.createElement("span", { className: R.BlueNote }, e.children);
      }
      function G(e) {
        const {
          rtEarliestDate: t,
          strReleaseState: a,
          bCanUpdateComingSoonDate: i,
        } = B();
        return "prerelease" != a || i
          ? null
          : n.createElement(
              "div",
              { className: R.PublishNowWarning },
              (0, s.Xx)(
                "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note",
                (0, s.vX)(t)
              )
            );
      }
      var U = a(19304);
      function O(e) {
        const { bIsGameEdit: t, unAppID: a } = e,
          [r, l] = n.useState(e.rtReleaseDate),
          [o, m] = n.useState(e.strComingSoonDisplay),
          [d, c] = n.useState(!1),
          [u, E] = n.useState(!1),
          g = n.useCallback(() => c(!0), []),
          h = n.useCallback(() => c(!1), []),
          S = n.useCallback((e, t, a) => {
            l(e), m(t), c(!1), a && E(!0);
          }, []);
        return n.createElement(
          n.Fragment,
          null,
          d && n.createElement(x, { appid: a, onClose: h, onCommit: S }),
          u &&
            n.createElement(V, {
              appid: a,
              bIsGameEdit: t,
              closeModal: () => E(!1),
            }),
          n.createElement(
            "div",
            { className: (0, U.Z)(p.ReleaseDateInfoCtn, t && p.GameEditCtn) },
            n.createElement(
              "div",
              { className: p.ReleaseDateContent },
              n.createElement(
                F,
                { label: (0, s.Xx)("#App_Landing_SpecifiedReleaseDate") },
                n.createElement(Z, { rtReleaseDate: r })
              ),
              n.createElement(
                F,
                { label: (0, s.Xx)("#App_Landing_CustomersSeeReleaseDate") },
                n.createElement(
                  "div",
                  { className: (0, U.Z)(p.BigField, o ? p.Set : p.Unset) },
                  o
                    ? (0, i.M)(o, r)
                    : (0, s.Xx)("#App_Landing_UnsetReleaseDate")
                )
              )
            ),
            n.createElement(
              "div",
              { className: p.EditButton, onClick: g },
              n.createElement("div", { className: (0, U.Z)(p.Spacer, p.Top) }),
              n.createElement(
                "div",
                { className: p.EditButtonIcon },
                n.createElement(_.I8b, null)
              ),
              n.createElement("div", {
                className: (0, U.Z)(p.Spacer, p.Bottom),
              })
            )
          )
        );
      }
      function Z(e) {
        const { rtReleaseDate: t } = e;
        return t
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "div",
                { className: (0, U.Z)(p.BigField, p.Set) },
                (0, s.vX)(t)
              ),
              n.createElement(
                "div",
                { className: (0, U.Z)(p.SubField, p.Set) },
                (0, u.Sc)(t, {}, { timeZoneName: "short" })
              )
            )
          : n.createElement(
              "div",
              { className: (0, U.Z)(p.BigField, p.Unset) },
              (0, s.Xx)("#App_Landing_UnsetReleaseDate")
            );
      }
      function F(e) {
        return n.createElement(
          "div",
          { className: p.LabelField },
          n.createElement("div", { className: p.Label }, e.label),
          e.children
        );
      }
      function V(e) {
        const { appid: t, bIsGameEdit: a, closeModal: i } = e,
          r = n.useCallback(() => {
            a
              ? (window.TabSelect("tab_publish"), window.scrollTo(0, 0))
              : (window.location.href =
                  o.GameEditByAppID(t.toString()) + "?activetab=tab_publish"),
              i();
          }, [t, a, i]);
        return n.createElement(
          f.Yy,
          { active: !0 },
          n.createElement(f.uH, {
            strTitle: (0, s.Xx)("#App_Landing_ReleaseDate_ChangesSaved"),
            strDescription: (0, s.Xx)(
              "#App_Landing_Release_PublishStorePrompt"
            ),
            strOKButtonText: (0, s.Xx)("#App_Landing_Release_PrepareToPublish"),
            onOK: r,
            strCancelButtonText: (0, s.Xx)("#Button_OK"),
            closeModal: i,
          })
        );
      }
      var q = a(6531),
        M = a(4306);
      class j extends n.Component {
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
          const t = j.GetColorString(e);
          this.setState({ color: t }), this.props.onChange(t);
        }
        render() {
          return n.createElement(q.AI, {
            onChange: this.OnColorChange,
            color: this.state.color,
          });
        }
      }
      (0, E.gn)([M.ak], j.prototype, "OnColorChange", null);
      var H = a(40103);
      function J(e) {
        const { rgGameProfileColorDefs: t } = e,
          a = t.map((e) =>
            n.createElement(
              "div",
              { key: e.strProfileColorKey, className: "form_row_flex" },
              n.createElement(
                "div",
                { className: "form_label_flex" },
                "*",
                e.strProfileColorLabel
              ),
              n.createElement(
                "div",
                { className: "form_data_flex" },
                (function (e) {
                  let [t, a] = n.useState(e.strCurrentColor);
                  const i = n.useRef(),
                    r = (e) => {
                      const i = (e) => {
                        a(e);
                      };
                      (0, H.yV)(
                        n.createElement(j, { onChange: i, color: t }),
                        e,
                        { bDisablePopTop: !0 }
                      );
                    },
                    s = () => {
                      a(i.current.value);
                    };
                  return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("input", {
                      ref: i,
                      type: "text",
                      name: `item[profile_colors][${e.strProfileColorKey}]`,
                      onChange: s,
                      placeholder: "rgba(255, 255, 255, .5)",
                      size: 20,
                      value: t,
                    }),
                    n.createElement("div", {
                      className: "profile_color_preview",
                      style: { backgroundColor: `${t}` },
                      onClick: r,
                    })
                  );
                })(e)
              )
            )
          );
        return n.createElement("div", { className: "profile_colors_ctn" }, a);
      }
      function K(e) {
        return n.createElement(
          d.rs,
          null,
          n.createElement(
            d.AW,
            { path: o.GameEdit(`:action(${m.join("|")})`, ":itemid") },
            n.createElement(c.d, {
              config: {
                "storeadmin-releasedateinfo": (e) =>
                  n.createElement(O, Object.assign({ bIsGameEdit: !0 }, e)),
              },
            })
          ),
          n.createElement(d.AW, {
            path: o.AppLanding(":appid"),
            render: (e) =>
              n.createElement(c.d, {
                config: {
                  "storeadmin-releasedateinfo": (e) =>
                    n.createElement(O, Object.assign({}, e)),
                },
              }),
          }),
          n.createElement(d.AW, {
            path: o.CommunityItems(":appid"),
            render: (e) =>
              n.createElement(c.d, {
                config: {
                  "storeadmin-profilecolors": (e) =>
                    n.createElement(J, Object.assign({}, e)),
                },
              }),
          })
        );
      }
    },
    7164: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => n, _: () => i });
      const n = "America/Los_Angeles";
      function i(e) {
        const t = a(47812).unix(e).tz(n);
        return (
          t.seconds(0),
          t.minutes(0),
          t.hours(10),
          t.unix() < e && t.hours(34),
          t.unix()
        );
      }
    },
    28542: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);

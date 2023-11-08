/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5559],
  {
    34976: (e) => {
      e.exports = {
        ErrorStyles: "partnereventdialog_ErrorStyles_2TszC",
        ErrorStylesWithIcon: "partnereventdialog_ErrorStylesWithIcon_1mcSA",
        ErrorIconLayout: "partnereventdialog_ErrorIconLayout_15HwA",
        ErrorStylesBackground: "partnereventdialog_ErrorStylesBackground_3Ht2e",
        WarningStyles: "partnereventdialog_WarningStyles_1C_Im",
        WarningStylesWithIcon: "partnereventdialog_WarningStylesWithIcon_3p5KO",
        WarningIconLayout: "partnereventdialog_WarningIconLayout_3POKG",
        WarningStylesBackground:
          "partnereventdialog_WarningStylesBackground_2MAql",
        Stuck: "partnereventdialog_Stuck_2JqXL",
        InfoStyles: "partnereventdialog_InfoStyles_2Zq0U",
        InfoStylesWithIcon: "partnereventdialog_InfoStylesWithIcon_2TYAo",
        InfoIconLayout: "partnereventdialog_InfoIconLayout_qgVd4",
        InfoStylesBackground: "partnereventdialog_InfoStylesBackground_3YqPi",
        Padding: "partnereventdialog_Padding_2oWai",
        NotTooWideModal: "partnereventdialog_NotTooWideModal_3P6Se",
      };
    },
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
    77571: (e) => {
      e.exports = { SmallAvatar: "userprofile_SmallAvatar_2cCH3" };
    },
    67876: (e) => {
      e.exports = {
        SectionTitleHeader: "collapseablesection_SectionTitleHeader_1K5gA",
        required_title: "collapseablesection_required_title_29VCz",
      };
    },
    77557: (e, t, n) => {
      "use strict";
      n.d(t, { NT: () => d, tx: () => l });
      var i = n(89526),
        a = n(67736),
        r = n(34976),
        s = n(14826),
        o = n(69338);
      function l() {
        const [e, t] = (0, i.useState)(!1),
          [n, a] = (0, i.useState)(!1),
          [r, s] = (0, i.useState)(!1),
          [o, l] = (0, i.useState)(null),
          [d, m] = (0, i.useState)(null),
          [c, u] = (0, i.useState)(null),
          [p, g] = (0, i.useState)(null),
          [h, T] = (0, i.useState)(null);
        return {
          bLoading: e,
          bError: n,
          bSuccess: r,
          strError: o,
          strSuccess: d,
          elSuccess: p,
          elError: c,
          strThrobber: h,
          fnSetLoading: t,
          fnSetError: a,
          fnSetSuccess: s,
          fnSetStrError: l,
          fnSetStrSuccess: m,
          fnSetElSuccess: g,
          fnSetElError: u,
          fnSetThrobber: T,
        };
      }
      function d(e) {
        const {
            strDialogTitle: t,
            state: n,
            closeModal: l,
            strThrobber: d,
          } = e,
          {
            bLoading: m,
            bError: c,
            bSuccess: u,
            strError: p,
            strSuccess: g,
            elSuccess: h,
            elError: T,
            strThrobber: S,
          } = n;
        return c || p || T
          ? i.createElement(
              a.uH,
              { strTitle: t, bAlertDialog: !0, closeModal: l },
              Boolean(p) &&
                i.createElement(
                  "div",
                  { className: r.ErrorStylesWithIcon },
                  p || (0, s.Xx)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(T) && T,
            )
          : u || g || h
          ? i.createElement(
              a.uH,
              {
                strTitle: t,
                strDescription: g || (0, s.Xx)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: l,
              },
              i.createElement(i.Fragment, null, Boolean(h) && h),
            )
          : i.createElement(
              a.uH,
              { strTitle: t, closeModal: () => {} },
              i.createElement(o.V, {
                string: d || S || (0, s.Xx)("#Loading"),
                size: "medium",
                position: "center",
              }),
            );
      }
    },
    82971: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => v });
      var i = n(33940),
        a = n(88464),
        r = n(89526),
        s = n(5556),
        o = n.n(s),
        l = n(28542),
        d = n(85651),
        m = n(17318),
        c = n.n(m),
        u = n(19304),
        p = n(14826),
        g = n(4306),
        h = n(84343),
        T = n(69409),
        S = n.n(T),
        E = n(47812),
        _ = n.n(E);
      let v = class extends r.Component {
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
            fnSetTimeToUpdate: n,
            fnIsValidDateTime: i,
            disabled: a,
          } = this.props;
          if (a) return;
          if ("string" == typeof e) {
            let t = _()(e, "h:m a +-h:m", !0);
            if (!t.isValid()) return void this.setState({ timeAsString: e });
            e = t;
          }
          let r = this.props.fnGetTimeToUpdate(),
            s = 0;
          if (r) {
            const t = _().unix(r);
            e.year(t.year()),
              e.month(t.month()),
              e.day(t.day()),
              (s = e.unix());
          } else {
            s =
              _().unix(t).hour(0).second(0).minutes(0).unix() +
              3600 * e.hour() +
              60 * e.minutes();
          }
          n(s);
          let o = i && !0 === i();
          (null == this.state.timeAsString &&
            o == this.state.bEndTimeBeforeStartTime) ||
            this.setState({ timeAsString: null, bEndTimeBeforeStartTime: o });
        }
        OnDateChange(e) {
          const { disabled: t } = this.props;
          if (t) return;
          if ("string" == typeof e) {
            let t = _()(e, "M/D/YYYY", !0);
            if (!t.isValid()) return void this.setState({ dateAsString: e });
            e = t;
          }
          const n = this.props.fnGetTimeToUpdate(),
            i = _().unix(n || d.JW.GetTimeNowWithOverride());
          e.hour(i.hour()),
            e.minute(i.minute()),
            e.second(0),
            this.props.fnSetTimeToUpdate(e.unix());
          let a =
            this.props.fnIsValidDateTime &&
            !0 === this.props.fnIsValidDateTime();
          (null == this.state.dateAsString &&
            a == this.state.bEndTimeBeforeStartTime) ||
            this.setState({ dateAsString: null, bEndTimeBeforeStartTime: a });
        }
        IsValidDate(e) {
          if (this.props.disabled) return !1;
          const {
              nEarliestTime: t,
              nLatestTime: n,
              bWeekdaysOnly: i,
            } = this.props,
            a = _().unix(t).hour(0).seconds(0).minute(0);
          let r = e.unix() >= a.unix();
          if (r && n && n >= t) {
            const t = _().unix(n).hour(23).minute(59).seconds(59);
            r = e.unix() <= t.unix();
          }
          return (
            r && i && ((0 != e.weekday() && 6 != e.weekday()) || (r = !1)), r
          );
        }
        SetToNow() {
          this.props.fnSetToNow
            ? this.props.fnSetToNow(d.JW.GetTimeNowWithOverride())
            : this.props.fnSetTimeToUpdate(d.JW.GetTimeNowWithOverride());
        }
        render() {
          const {
            nLatestTime: e,
            nEarliestTime: t,
            fnGetTimeToUpdate: n,
            fnIsValidDateTime: i,
            strAlsoShowTimeZone: a,
            disabled: s,
            bNoDefaultDate: m,
          } = this.props;
          let g = n(),
            T = g > 0 ? new Date(1e3 * g) : null,
            E = "h:mm A";
          const v = i && i(),
            f =
              this.state.timeAsString ||
              this.state.dateAsString ||
              "string" == typeof v ||
              !1 === v;
          let b,
            y,
            D = "#DateTimePicker_Fallback_Invalid_DateTime";
          if (
            (this.state.timeAsString
              ? (D = "#DateTimePicker_Time_CannotParse")
              : this.state.dateAsString
              ? (D = "#DateTimePicker_Date_CannotParse")
              : "string" == typeof v && (D = v),
            e && t && e == t && t > d.JW.GetTimeNowWithOverride())
          ) {
            let e = _().unix(t);
            (b = {
              hours: { max: e.hour(), min: e.hour(), step: 0 },
              minutes: { max: e.minute(), min: e.minute(), step: 0 },
              seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (E = "HH:mm");
          }
          g || !t || m || (y = _().unix(t));
          const I = _().tz.guess(),
            x = _().unix(g).tz(I),
            A = !!a && I != a && _().unix(g).tz(a);
          return r.createElement(
            "div",
            { className: (0, u.Z)(S().EventTimeSection, this.props.className) },
            r.createElement(
              "div",
              { className: (0, u.Z)(S().EventTimeTitle, "DialogLabel") },
              r.createElement(
                h.HP,
                { toolTipContent: this.props.strDescToolTip, direction: "top" },
                Boolean(this.props.strDescription) &&
                  r.createElement("span", null, this.props.strDescription),
              ),
              f &&
                r.createElement(
                  "span",
                  { className: S().DateErrorCtn },
                  r.createElement("img", { src: l.Z }),
                  (0, p.Xx)(D),
                ),
            ),
            r.createElement(
              "div",
              { className: c().FlexRowContainer },
              r.createElement(
                "div",
                { className: (0, u.Z)(c().InputBorder, S().TimeBlock) },
                r.createElement(o(), {
                  onChange: this.OnDateChange,
                  timeFormat: !1,
                  value: this.state.dateAsString ? this.state.dateAsString : T,
                  isValidDate: this.IsValidDate,
                  initialValue: y,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Date"),
                    className: (0, u.Z)(
                      S().DateWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: s,
                  },
                }),
                !!A &&
                  r.createElement(
                    "div",
                    { className: S().PacificTimeHint },
                    A.format("L"),
                  ),
              ),
              r.createElement(
                "div",
                { className: (0, u.Z)(c().InputBorder, S().TimeBlock) },
                r.createElement(o(), {
                  onChange: this.OnTimeChange,
                  dateFormat: !1,
                  timeFormat: E,
                  timeConstraints: b,
                  value: this.state.timeAsString ? this.state.timeAsString : T,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Time"),
                    className: (0, u.Z)(
                      S().TimeWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: s,
                  },
                }),
                !!A &&
                  r.createElement(
                    "div",
                    { className: S().PacificTimeHint },
                    A.format("LT"),
                  ),
              ),
              this.props.bShowTimeZone &&
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "div",
                    { className: S().TimeZone },
                    x.zoneAbbr(),
                  ),
                  !!A &&
                    r.createElement(
                      "div",
                      { className: S().TimeZone },
                      A.zoneAbbr(),
                    ),
                ),
            ),
            Boolean(b) &&
              r.createElement(
                "div",
                null,
                (0, p.Xx)("#DateTimePicker_DateTime_Fixed"),
              ),
          );
        }
      };
      (0, i.gn)([g.ak], v.prototype, "OnTimeChange", null),
        (0, i.gn)([g.ak], v.prototype, "OnDateChange", null),
        (0, i.gn)([g.ak], v.prototype, "IsValidDate", null),
        (0, i.gn)([g.ak], v.prototype, "SetToNow", null),
        (v = (0, i.gn)([a.Pi], v));
    },
    16670: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => v });
      var i = n(89526),
        a = n(47165),
        r = n(33940),
        s = n(52868),
        o = n.n(s),
        l = n(92994),
        d = n.n(l),
        m = n(5615),
        c = n(23217),
        u = n(32765),
        p = n(68333),
        g = n(97940),
        h = n(27070);
      const T = "nicknames";
      const S = new (d())(
          (e) =>
            (function (e) {
              var t, n, i, s;
              return (0, r.mG)(this, void 0, void 0, function* () {
                if (!e || 0 == e.length) return [];
                const r =
                  "community" == (0, u.Zv)()
                    ? u.De.COMMUNITY_BASE_URL
                    : u.De.STORE_BASE_URL;
                if (1 == e.length) {
                  const i = { accountid: e[0], origin: self.origin },
                    a = yield o().get(`${r}actions/ajaxgetavatarpersona`, {
                      params: i,
                    });
                  if (
                    !a ||
                    200 != a.status ||
                    1 !=
                      (null === (t = a.data) || void 0 === t
                        ? void 0
                        : t.success) ||
                    !(null === (n = a.data) || void 0 === n
                      ? void 0
                      : n.userinfo)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, c.l)(a).strErrorMsg
                    }`;
                  return [a.data.userinfo];
                }
                {
                  const t = { accountids: e.join(","), origin: self.origin },
                    n = yield o().get(`${r}actions/ajaxgetmultiavatarpersona`, {
                      params: t,
                    });
                  if (
                    !n ||
                    200 != n.status ||
                    1 !=
                      (null === (i = n.data) || void 0 === i
                        ? void 0
                        : i.success) ||
                    !(null === (s = n.data) || void 0 === s
                      ? void 0
                      : s.userinfos)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, c.l)(n).strErrorMsg
                    }`;
                  const l = new Map();
                  return (
                    n.data.userinfos.forEach((e) =>
                      l.set(new a.K(e.steamid).GetAccountID(), e),
                    ),
                    e.map((e) => l.get(e))
                  );
                }
              });
            })(e),
          { cache: !1 },
        ),
        E = "avatarandpersonas";
      var _ = n(77571);
      function v(e) {
        const { accountID: t, bHideWhenNotAvailable: n } = e,
          [s] = (function (e) {
            const { data: t, isLoading: n } = (0, m.useQuery)([E, e], () =>
              S.load(e),
            );
            return [t, n];
          })(t),
          o = (function (e) {
            const t = (0, h.bY)(),
              { data: n, isLoading: i } = (0, m.useQuery)([T], () =>
                (0, r.mG)(this, void 0, void 0, function* () {
                  const e = new Map();
                  if (u.L7.logged_in) {
                    const n = p.gA.Init(g.bM),
                      i = (yield g.lk.GetNicknameList(t, n)).Body().toObject();
                    (null == i ? void 0 : i.nicknames) &&
                      i.nicknames.length > 0 &&
                      i.nicknames.forEach((t) => {
                        e.set(t.accountid, t.nickname);
                      });
                  }
                  return e;
                }),
              );
            return n ? n.get(e) : null;
          })(t),
          l = i.useMemo(() => a.K.InitFromAccountID(t), [t]);
        return i.createElement(
          i.Fragment,
          null,
          Boolean(!s)
            ? i.createElement(
                i.Fragment,
                null,
                Boolean(!n) && i.createElement("span", null, t),
              )
            : i.createElement(
                i.Fragment,
                null,
                i.createElement("img", {
                  className: _.SmallAvatar,
                  src: s.avatar_url,
                  "data-miniprofile": "s" + l.ConvertTo64BitString(),
                }),
                i.createElement(
                  "span",
                  null,
                  o ? `${o} (${s.persona_name})` : s.persona_name,
                ),
              ),
        );
      }
    },
    24166: (e, t, n) => {
      "use strict";
      n.d(t, { mY: () => u, ug: () => p });
      var i = n(22444),
        a = n(14826),
        r = n(701),
        s = n(89526),
        o = n(19304),
        l = n(17318),
        d = n(17547),
        m = n(88464),
        c = n(67876);
      const u = (0, m.Pi)((e) =>
        s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            {
              className: (0, o.Z)(
                e.className ? e.className : "",
                c.SectionTitleHeader,
                c.required_title,
                "SectionTitleHeader",
              ),
            },
            s.createElement(
              "div",
              {
                className: (0, o.Z)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              e.title,
              Boolean(e.tooltip) && s.createElement(h, { tooltip: e.tooltip }),
            ),
            s.createElement(g, {
              bIsMinimized: e.getMinimized(),
              fnToggleMinimize: e.toggleMinimized,
            }),
          ),
          !e.getMinimized() && s.createElement(d.SV, null, e.children),
        ),
      );
      function p(e) {
        const [t, n] = s.useState(Boolean(e.bStartMinimized));
        return s.createElement(
          u,
          Object.assign({}, e, {
            getMinimized: () => t,
            toggleMinimized: () => n(!t),
          }),
          e.children,
        );
      }
      function g(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return s.createElement(
          i.zx,
          { "data-tooltip-text": (0, a.Xx)(o), onClick: n },
          e.bIsMinimized
            ? s.createElement(r.YqJ, null)
            : s.createElement(r.gR, null),
        );
      }
      function h(e) {
        return s.createElement(
          "span",
          {
            "data-tooltip-text": e.tooltip,
            className: (0, o.Z)(l.HelperTooltip, "HelperTooltip"),
          },
          " ",
          s.createElement(r.WWB, null),
        );
      }
    },
  },
]);

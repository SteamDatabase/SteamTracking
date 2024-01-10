/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5559],
  {
    72297: (e) => {
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
    19452: (e) => {
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
    47955: (e) => {
      e.exports = { SmallAvatar: "userprofile_SmallAvatar_2cCH3" };
    },
    11209: (e) => {
      e.exports = {
        SectionTitleHeader: "collapseablesection_SectionTitleHeader_1K5gA",
        required_title: "collapseablesection_required_title_29VCz",
      };
    },
    83743: (e, t, n) => {
      "use strict";
      n.d(t, { NT: () => d, tx: () => l });
      var i = n(47427),
        r = n(77178),
        a = n(72297),
        s = n(31846),
        o = n(46882);
      function l() {
        const [e, t] = (0, i.useState)(!1),
          [n, r] = (0, i.useState)(!1),
          [a, s] = (0, i.useState)(!1),
          [o, l] = (0, i.useState)(null),
          [d, m] = (0, i.useState)(null),
          [c, u] = (0, i.useState)(null),
          [p, h] = (0, i.useState)(null),
          [g, T] = (0, i.useState)(null);
        return {
          bLoading: e,
          bError: n,
          bSuccess: a,
          strError: o,
          strSuccess: d,
          elSuccess: p,
          elError: c,
          strThrobber: g,
          fnSetLoading: t,
          fnSetError: r,
          fnSetSuccess: s,
          fnSetStrError: l,
          fnSetStrSuccess: m,
          fnSetElSuccess: h,
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
            strSuccess: h,
            elSuccess: g,
            elError: T,
            strThrobber: E,
          } = n;
        return c || p || T
          ? i.createElement(
              r.uH,
              { strTitle: t, bAlertDialog: !0, closeModal: l },
              Boolean(p) &&
                i.createElement(
                  "div",
                  { className: a.ErrorStylesWithIcon },
                  p || (0, s.Xx)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(T) && T,
            )
          : u || h || g
          ? i.createElement(
              r.uH,
              {
                strTitle: t,
                strDescription: h || (0, s.Xx)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: l,
              },
              i.createElement(i.Fragment, null, Boolean(g) && g),
            )
          : i.createElement(
              r.uH,
              { strTitle: t, closeModal: () => {} },
              i.createElement(o.V, {
                string: d || E || (0, s.Xx)("#Loading"),
                size: "medium",
                position: "center",
              }),
            );
      }
    },
    92012: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => v });
      var i = n(85556),
        r = n(27605),
        a = n(47427),
        s = n(43344),
        o = n.n(s),
        l = n(36595),
        d = n(64936),
        m = n(71741),
        c = n.n(m),
        u = n(13129),
        p = n(31846),
        h = n(20417),
        g = n(59728),
        T = n(19452),
        E = n.n(T),
        S = n(98973),
        _ = n.n(S);
      let v = class extends a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              timeAsString: null,
              dateAsString: null,
              bEndTimeBeforeStartTime: !1,
              strError: null,
            });
        }
        OnTimeChange(e) {
          const {
            nEarliestTime: t,
            fnSetTimeToUpdate: n,
            fnIsValidDateTime: i,
            disabled: r,
          } = this.props;
          if (r) return;
          if ("string" == typeof e) {
            let t = _()(e, "h:m a +-h:m", !0);
            if (!t.isValid()) return void this.setState({ timeAsString: e });
            e = t;
          }
          let a = this.props.fnGetTimeToUpdate(),
            s = 0;
          if (a) {
            const t = _().unix(a);
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
          let r =
            this.props.fnIsValidDateTime &&
            !0 === this.props.fnIsValidDateTime();
          (null == this.state.dateAsString &&
            r == this.state.bEndTimeBeforeStartTime) ||
            this.setState({ dateAsString: null, bEndTimeBeforeStartTime: r });
        }
        IsValidDate(e) {
          if (this.props.disabled) return !1;
          const {
              nEarliestTime: t,
              nLatestTime: n,
              bWeekdaysOnly: i,
            } = this.props,
            r = _().unix(t).hour(0).seconds(0).minute(0);
          let a = e.unix() >= r.unix();
          if (a && n && n >= t) {
            const t = _().unix(n).hour(23).minute(59).seconds(59);
            a = e.unix() <= t.unix();
          }
          return (
            a && i && ((0 != e.weekday() && 6 != e.weekday()) || (a = !1)), a
          );
        }
        SetToNow() {
          this.props.fnSetToNow
            ? this.props.fnSetToNow(d.JW.GetTimeNowWithOverride())
            : this.props.fnSetTimeToUpdate(d.JW.GetTimeNowWithOverride());
        }
        componentDidMount() {
          this.UpdateError();
        }
        componentDidUpdate() {
          this.UpdateError();
        }
        UpdateError() {
          const { fnIsValidDateTime: e } = this.props,
            t = e && e();
          let n = null;
          (this.state.timeAsString ||
            this.state.dateAsString ||
            "string" == typeof t ||
            !1 === t) &&
            ((n = (0, p.Xx)("#DateTimePicker_Fallback_Invalid_DateTime")),
            this.state.timeAsString
              ? (n = (0, p.Xx)("#DateTimePicker_Time_CannotParse"))
              : this.state.dateAsString
              ? (n = (0, p.Xx)("#DateTimePicker_Date_CannotParse"))
              : "string" == typeof t && (n = t)),
            this.state.strError !== n &&
              (this.setState({ strError: n }),
              this.props.onError && this.props.onError(n));
        }
        render() {
          const {
            nLatestTime: e,
            nEarliestTime: t,
            fnGetTimeToUpdate: n,
            onError: i,
            strAlsoShowTimeZone: r,
            disabled: s,
            bNoDefaultDate: m,
          } = this.props;
          let h = n(),
            T = h > 0 ? new Date(1e3 * h) : null,
            S = "h:mm A";
          const v = !i && this.state.strError;
          let f, b;
          if (e && t && e == t && t > d.JW.GetTimeNowWithOverride()) {
            let e = _().unix(t);
            (f = {
              hours: { max: e.hour(), min: e.hour(), step: 0 },
              minutes: { max: e.minute(), min: e.minute(), step: 0 },
              seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (S = "HH:mm");
          }
          h || !t || m || (b = _().unix(t));
          const D = _().tz.guess(),
            y = _().unix(h).tz(D),
            I = !!r && D != r && _().unix(h).tz(r);
          return a.createElement(
            "div",
            { className: (0, u.Z)(E().EventTimeSection, this.props.className) },
            a.createElement(
              "div",
              { className: (0, u.Z)(E().EventTimeTitle, "DialogLabel") },
              a.createElement(
                g.HP,
                { toolTipContent: this.props.strDescToolTip, direction: "top" },
                Boolean(this.props.strDescription) &&
                  a.createElement("span", null, this.props.strDescription),
              ),
              v &&
                a.createElement(
                  "span",
                  { className: E().DateErrorCtn },
                  a.createElement("img", { src: l.Z }),
                  v,
                ),
            ),
            a.createElement(
              "div",
              { className: c().FlexRowContainer },
              a.createElement(
                "div",
                { className: (0, u.Z)(c().InputBorder, E().TimeBlock) },
                a.createElement(o(), {
                  onChange: this.OnDateChange,
                  timeFormat: !1,
                  value: this.state.dateAsString ? this.state.dateAsString : T,
                  isValidDate: this.IsValidDate,
                  initialValue: b,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Date"),
                    className: (0, u.Z)(
                      E().DateWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: s,
                  },
                }),
                !!I &&
                  a.createElement(
                    "div",
                    { className: E().PacificTimeHint },
                    I.format("L"),
                  ),
              ),
              a.createElement(
                "div",
                { className: (0, u.Z)(c().InputBorder, E().TimeBlock) },
                a.createElement(o(), {
                  onChange: this.OnTimeChange,
                  dateFormat: !1,
                  timeFormat: S,
                  timeConstraints: f,
                  value: this.state.timeAsString ? this.state.timeAsString : T,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Time"),
                    className: (0, u.Z)(
                      E().TimeWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: s,
                  },
                }),
                !!I &&
                  a.createElement(
                    "div",
                    { className: E().PacificTimeHint },
                    I.format("LT"),
                  ),
              ),
              this.props.bShowTimeZone &&
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    "div",
                    { className: E().TimeZone },
                    y.zoneAbbr(),
                  ),
                  !!I &&
                    a.createElement(
                      "div",
                      { className: E().TimeZone },
                      I.zoneAbbr(),
                    ),
                ),
            ),
            Boolean(f) &&
              a.createElement(
                "div",
                null,
                (0, p.Xx)("#DateTimePicker_DateTime_Fixed"),
              ),
          );
        }
      };
      (0, i.gn)([h.ak], v.prototype, "OnTimeChange", null),
        (0, i.gn)([h.ak], v.prototype, "OnDateChange", null),
        (0, i.gn)([h.ak], v.prototype, "IsValidDate", null),
        (0, i.gn)([h.ak], v.prototype, "SetToNow", null),
        (v = (0, i.gn)([r.Pi], v));
    },
    38201: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => v });
      var i = n(47427),
        r = n(35427),
        a = n(85556),
        s = n(80751),
        o = n.n(s),
        l = n(73799),
        d = n.n(l),
        m = n(42718),
        c = n(16649),
        u = n(37563),
        p = n(21928),
        h = n(82182),
        g = n(40057);
      const T = "nicknames";
      const E = new (d())(
          (e) =>
            (function (e) {
              var t, n, i, s;
              return (0, a.mG)(this, void 0, void 0, function* () {
                if (!e || 0 == e.length) return [];
                const a =
                  "community" == (0, u.Zv)()
                    ? u.De.COMMUNITY_BASE_URL
                    : u.De.STORE_BASE_URL;
                if (1 == e.length) {
                  const i = { accountid: e[0], origin: self.origin },
                    r = yield o().get(`${a}actions/ajaxgetavatarpersona`, {
                      params: i,
                    });
                  if (
                    !r ||
                    200 != r.status ||
                    1 !=
                      (null === (t = r.data) || void 0 === t
                        ? void 0
                        : t.success) ||
                    !(null === (n = r.data) || void 0 === n
                      ? void 0
                      : n.userinfo)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, c.l)(r).strErrorMsg
                    }`;
                  return [r.data.userinfo];
                }
                {
                  const t = { accountids: e.join(","), origin: self.origin },
                    n = yield o().get(`${a}actions/ajaxgetmultiavatarpersona`, {
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
                      l.set(new r.K(e.steamid).GetAccountID(), e),
                    ),
                    e.map((e) => l.get(e))
                  );
                }
              });
            })(e),
          { cache: !1 },
        ),
        S = "avatarandpersonas";
      var _ = n(47955);
      function v(e) {
        const { accountID: t, bHideWhenNotAvailable: n } = e,
          [s] = (function (e) {
            const { data: t, isLoading: n } = (0, m.useQuery)([S, e], () =>
              E.load(e),
            );
            return [t, n];
          })(t),
          o = (function (e) {
            const t = (0, g.bY)(),
              { data: n, isLoading: i } = (0, m.useQuery)([T], () =>
                (0, a.mG)(this, void 0, void 0, function* () {
                  const e = new Map();
                  if (u.L7.logged_in) {
                    const n = p.gA.Init(h.bM),
                      i = (yield h.lk.GetNicknameList(t, n)).Body().toObject();
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
          l = i.useMemo(() => r.K.InitFromAccountID(t), [t]);
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
    56164: (e, t, n) => {
      "use strict";
      n.d(t, { mY: () => u, ug: () => p });
      var i = n(53040),
        r = n(31846),
        a = n(62613),
        s = n(47427),
        o = n(13129),
        l = n(71741),
        d = n(10162),
        m = n(27605),
        c = n(11209);
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
              Boolean(e.tooltip) && s.createElement(g, { tooltip: e.tooltip }),
            ),
            s.createElement(h, {
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
      function h(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return s.createElement(
          i.zx,
          { "data-tooltip-text": (0, r.Xx)(o), onClick: n },
          e.bIsMinimized
            ? s.createElement(a.YqJ, null)
            : s.createElement(a.gR, null),
        );
      }
      function g(e) {
        return s.createElement(
          "span",
          {
            "data-tooltip-text": e.tooltip,
            className: (0, o.Z)(l.HelperTooltip, "HelperTooltip"),
          },
          " ",
          s.createElement(a.WWB, null),
        );
      }
    },
  },
]);

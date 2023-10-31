/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5405],
  {
    93513: (e) => {
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
    29183: (e) => {
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
    56708: (e) => {
      e.exports = { SmallAvatar: "userprofile_SmallAvatar_2cCH3" };
    },
    74286: (e) => {
      e.exports = {
        GraphicalAssetsTabs: "tabbar_GraphicalAssetsTabs_36r8g",
        GraphicalAssetsTab: "tabbar_GraphicalAssetsTab_K1_Tp",
        Active: "tabbar_Active_37f6M",
        GraphicalAssetStatus: "tabbar_GraphicalAssetStatus_ojMj8",
        VOWarning: "tabbar_VOWarning_21XR-",
        StatusSuccess: "tabbar_StatusSuccess_1HWSe",
        StatusDanger: "tabbar_StatusDanger_2jgbN",
        StatusCaution: "tabbar_StatusCaution_31Lxu",
      };
    },
    48705: (e) => {
      e.exports = {
        SectionTitleHeader: "collapseablesection_SectionTitleHeader_1K5gA",
        required_title: "collapseablesection_required_title_29VCz",
      };
    },
    77557: (e, t, n) => {
      "use strict";
      n.d(t, { NT: () => c, tx: () => l });
      var a = n(89526),
        i = n(67736),
        s = n(93513),
        r = n(14826),
        o = n(3301);
      function l() {
        const [e, t] = (0, a.useState)(!1),
          [n, i] = (0, a.useState)(!1),
          [s, r] = (0, a.useState)(!1),
          [o, l] = (0, a.useState)(null),
          [c, d] = (0, a.useState)(null),
          [m, u] = (0, a.useState)(null),
          [p, h] = (0, a.useState)(null),
          [T, g] = (0, a.useState)(null);
        return {
          bLoading: e,
          bError: n,
          bSuccess: s,
          strError: o,
          strSuccess: c,
          elSuccess: p,
          elError: m,
          strThrobber: T,
          fnSetLoading: t,
          fnSetError: i,
          fnSetSuccess: r,
          fnSetStrError: l,
          fnSetStrSuccess: d,
          fnSetElSuccess: h,
          fnSetElError: u,
          fnSetThrobber: g,
        };
      }
      function c(e) {
        const {
            strDialogTitle: t,
            state: n,
            closeModal: l,
            strThrobber: c,
          } = e,
          {
            bLoading: d,
            bError: m,
            bSuccess: u,
            strError: p,
            strSuccess: h,
            elSuccess: T,
            elError: g,
            strThrobber: _,
          } = n;
        return m || p || g
          ? a.createElement(
              i.uH,
              { strTitle: t, bAlertDialog: !0, closeModal: l },
              Boolean(p) &&
                a.createElement(
                  "div",
                  { className: s.ErrorStylesWithIcon },
                  p || (0, r.Xx)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(g) && g,
            )
          : u || h || T
          ? a.createElement(
              i.uH,
              {
                strTitle: t,
                strDescription: h || (0, r.Xx)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: l,
              },
              a.createElement(a.Fragment, null, Boolean(T) && T),
            )
          : a.createElement(
              i.uH,
              { strTitle: t, closeModal: () => {} },
              a.createElement(o.V, {
                string: c || _ || (0, r.Xx)("#Loading"),
                size: "medium",
                position: "center",
              }),
            );
      }
    },
    82971: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => E });
      var a = n(33940),
        i = n(88464),
        s = n(89526),
        r = n(5556),
        o = n.n(r),
        l = n(70369),
        c = n(85651),
        d = n(52629),
        m = n.n(d),
        u = n(19304),
        p = n(14826),
        h = n(4306),
        T = n(84343),
        g = n(29183),
        _ = n.n(g),
        S = n(47812),
        v = n.n(S);
      let E = class extends s.Component {
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
            fnIsValidDateTime: a,
            disabled: i,
          } = this.props;
          if (i) return;
          if ("string" == typeof e) {
            let t = v()(e, "h:m a +-h:m", !0);
            if (!t.isValid()) return void this.setState({ timeAsString: e });
            e = t;
          }
          let s = this.props.fnGetTimeToUpdate(),
            r = 0;
          if (s) {
            const t = v().unix(s);
            e.year(t.year()),
              e.month(t.month()),
              e.day(t.day()),
              (r = e.unix());
          } else {
            r =
              v().unix(t).hour(0).second(0).minutes(0).unix() +
              3600 * e.hour() +
              60 * e.minutes();
          }
          n(r);
          let o = a && !0 === a();
          (null == this.state.timeAsString &&
            o == this.state.bEndTimeBeforeStartTime) ||
            this.setState({ timeAsString: null, bEndTimeBeforeStartTime: o });
        }
        OnDateChange(e) {
          const { disabled: t } = this.props;
          if (t) return;
          if ("string" == typeof e) {
            let t = v()(e, "M/D/YYYY", !0);
            if (!t.isValid()) return void this.setState({ dateAsString: e });
            e = t;
          }
          const n = this.props.fnGetTimeToUpdate(),
            a = v().unix(n || c.JW.GetTimeNowWithOverride());
          e.hour(a.hour()),
            e.minute(a.minute()),
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
              nLatestTime: n,
              bWeekdaysOnly: a,
            } = this.props,
            i = v().unix(t).hour(0).seconds(0).minute(0);
          let s = e.unix() >= i.unix();
          if (s && n && n >= t) {
            const t = v().unix(n).hour(23).minute(59).seconds(59);
            s = e.unix() <= t.unix();
          }
          return (
            s && a && ((0 != e.weekday() && 6 != e.weekday()) || (s = !1)), s
          );
        }
        SetToNow() {
          this.props.fnSetToNow
            ? this.props.fnSetToNow(c.JW.GetTimeNowWithOverride())
            : this.props.fnSetTimeToUpdate(c.JW.GetTimeNowWithOverride());
        }
        render() {
          const {
            nLatestTime: e,
            nEarliestTime: t,
            fnGetTimeToUpdate: n,
            fnIsValidDateTime: a,
            strAlsoShowTimeZone: i,
            disabled: r,
            bNoDefaultDate: d,
          } = this.props;
          let h = n(),
            g = h > 0 ? new Date(1e3 * h) : null,
            S = "h:mm A";
          const E = a && a(),
            b =
              this.state.timeAsString ||
              this.state.dateAsString ||
              "string" == typeof E ||
              !1 === E;
          let f,
            y,
            D = "#DateTimePicker_Fallback_Invalid_DateTime";
          if (
            (this.state.timeAsString
              ? (D = "#DateTimePicker_Time_CannotParse")
              : this.state.dateAsString
              ? (D = "#DateTimePicker_Date_CannotParse")
              : "string" == typeof E && (D = E),
            e && t && e == t && t > c.JW.GetTimeNowWithOverride())
          ) {
            let e = v().unix(t);
            (f = {
              hours: { max: e.hour(), min: e.hour(), step: 0 },
              minutes: { max: e.minute(), min: e.minute(), step: 0 },
              seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (S = "HH:mm");
          }
          h || !t || d || (y = v().unix(t));
          const k = v().tz.guess(),
            I = v().unix(h).tz(k),
            A = !!i && k != i && v().unix(h).tz(i);
          return s.createElement(
            "div",
            { className: (0, u.Z)(_().EventTimeSection, this.props.className) },
            s.createElement(
              "div",
              { className: (0, u.Z)(_().EventTimeTitle, "DialogLabel") },
              s.createElement(
                T.HP,
                { toolTipContent: this.props.strDescToolTip, direction: "top" },
                Boolean(this.props.strDescription) &&
                  s.createElement("span", null, this.props.strDescription),
              ),
              b &&
                s.createElement(
                  "span",
                  { className: _().DateErrorCtn },
                  s.createElement("img", { src: l.Z }),
                  (0, p.Xx)(D),
                ),
            ),
            s.createElement(
              "div",
              { className: m().FlexRowContainer },
              s.createElement(
                "div",
                { className: (0, u.Z)(m().InputBorder, _().TimeBlock) },
                s.createElement(o(), {
                  onChange: this.OnDateChange,
                  timeFormat: !1,
                  value: this.state.dateAsString ? this.state.dateAsString : g,
                  isValidDate: this.IsValidDate,
                  initialValue: y,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Date"),
                    className: (0, u.Z)(
                      _().DateWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: r,
                  },
                }),
                !!A &&
                  s.createElement(
                    "div",
                    { className: _().PacificTimeHint },
                    A.format("L"),
                  ),
              ),
              s.createElement(
                "div",
                { className: (0, u.Z)(m().InputBorder, _().TimeBlock) },
                s.createElement(o(), {
                  onChange: this.OnTimeChange,
                  dateFormat: !1,
                  timeFormat: S,
                  timeConstraints: f,
                  value: this.state.timeAsString ? this.state.timeAsString : g,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Time"),
                    className: (0, u.Z)(
                      _().TimeWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: r,
                  },
                }),
                !!A &&
                  s.createElement(
                    "div",
                    { className: _().PacificTimeHint },
                    A.format("LT"),
                  ),
              ),
              this.props.bShowTimeZone &&
                s.createElement(
                  "div",
                  null,
                  s.createElement(
                    "div",
                    { className: _().TimeZone },
                    I.zoneAbbr(),
                  ),
                  !!A &&
                    s.createElement(
                      "div",
                      { className: _().TimeZone },
                      A.zoneAbbr(),
                    ),
                ),
            ),
            Boolean(f) &&
              s.createElement(
                "div",
                null,
                (0, p.Xx)("#DateTimePicker_DateTime_Fixed"),
              ),
          );
        }
      };
      (0, a.gn)([h.ak], E.prototype, "OnTimeChange", null),
        (0, a.gn)([h.ak], E.prototype, "OnDateChange", null),
        (0, a.gn)([h.ak], E.prototype, "IsValidDate", null),
        (0, a.gn)([h.ak], E.prototype, "SetToNow", null),
        (E = (0, a.gn)([i.Pi], E));
    },
    16670: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => b });
      var a = n(89526),
        i = n(47165),
        s = n(33940),
        r = n(52868),
        o = n.n(r),
        l = n(92994),
        c = n.n(l),
        d = n(5615),
        m = n(42735),
        u = n(23217),
        p = n(32765),
        h = n(67328),
        T = n(94738),
        g = n(27070);
      const _ = "nicknames";
      const S = new (c())(
          (e) =>
            (function (e) {
              var t, n, a, r;
              return (0, s.mG)(this, void 0, void 0, function* () {
                if (!e || 0 == e.length) return [];
                const s =
                  "community" == (0, p.Zv)()
                    ? p.De.COMMUNITY_BASE_URL
                    : p.De.STORE_BASE_URL;
                if (1 == e.length) {
                  const a = { accountid: e[0], origin: self.origin },
                    i = yield o().get(`${s}actions/ajaxgetavatarpersona`, {
                      params: a,
                    });
                  if (
                    !i ||
                    200 != i.status ||
                    (null === (t = i.data) || void 0 === t
                      ? void 0
                      : t.success) != m.s.k_EResultOK ||
                    !(null === (n = i.data) || void 0 === n
                      ? void 0
                      : n.userinfo)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, u.l)(i).strErrorMsg
                    }`;
                  return [i.data.userinfo];
                }
                {
                  const t = { accountids: e.join(","), origin: self.origin },
                    n = yield o().get(`${s}actions/ajaxgetmultiavatarpersona`, {
                      params: t,
                    });
                  if (
                    !n ||
                    200 != n.status ||
                    (null === (a = n.data) || void 0 === a
                      ? void 0
                      : a.success) != m.s.k_EResultOK ||
                    !(null === (r = n.data) || void 0 === r
                      ? void 0
                      : r.userinfos)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, u.l)(n).strErrorMsg
                    }`;
                  const l = new Map();
                  return (
                    n.data.userinfos.forEach((e) =>
                      l.set(new i.K(e.steamid).GetAccountID(), e),
                    ),
                    e.map((e) => l.get(e))
                  );
                }
              });
            })(e),
          { cache: !1 },
        ),
        v = "avatarandpersonas";
      var E = n(56708);
      function b(e) {
        const { accountID: t, bHideWhenNotAvailable: n } = e,
          [r] = (function (e) {
            const { data: t, isLoading: n } = (0, d.useQuery)([v, e], () =>
              S.load(e),
            );
            return [t, n];
          })(t),
          o = (function (e) {
            const t = (0, g.bY)(),
              { data: n, isLoading: a } = (0, d.useQuery)([_], () =>
                (0, s.mG)(this, void 0, void 0, function* () {
                  const e = new Map();
                  if (p.L7.logged_in) {
                    const n = h.gA.Init(T.bM),
                      a = (yield T.lk.GetNicknameList(t, n)).Body().toObject();
                    (null == a ? void 0 : a.nicknames) &&
                      a.nicknames.length > 0 &&
                      a.nicknames.forEach((t) => {
                        e.set(t.accountid, t.nickname);
                      });
                  }
                  return e;
                }),
              );
            return n ? n.get(e) : null;
          })(t),
          l = a.useMemo(() => i.K.InitFromAccountID(t), [t]);
        return a.createElement(
          a.Fragment,
          null,
          Boolean(!r)
            ? a.createElement(
                a.Fragment,
                null,
                Boolean(!n) && a.createElement("span", null, t),
              )
            : a.createElement(
                a.Fragment,
                null,
                a.createElement("img", {
                  className: E.SmallAvatar,
                  src: r.avatar_url,
                  "data-miniprofile": "s" + l.ConvertTo64BitString(),
                }),
                a.createElement(
                  "span",
                  null,
                  o ? `${o} (${r.persona_name})` : r.persona_name,
                ),
              ),
        );
      }
    },
    43068: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => p });
      var a = n(89526),
        i = n(59934),
        s = n(19304),
        r = n(14826),
        o = n(5029),
        l = n(74286),
        c = n.n(l),
        d = n(84343),
        m = n(75962);
      class u extends a.Component {
        constructor() {
          super(...arguments), (this.state = { activeTab: "" });
        }
        componentDidMount() {
          this.props.startingTab
            ? this.setState({ activeTab: this.props.startingTab })
            : !this.props.bDisableRouting &&
              this.props.location &&
              this.setState({
                activeTab: (0, o.ks)(this.props.location, "tab"),
              });
        }
        componentDidUpdate(e) {
          !this.props.bDisableRouting &&
            this.props.location &&
            this.props.location.key !== e.location.key &&
            this.setState({ activeTab: (0, o.ks)(this.props.location, "tab") });
        }
        OnTabClick(e) {
          this.setState({ activeTab: e.key }),
            !this.props.bDisableRouting &&
              this.props.history &&
              (0, o.i9)(this.props.history, "tab", e.key),
            e.onClick && e.onClick(e);
        }
        render() {
          const e =
            this.props.tabs.find((e) => e.key === this.state.activeTab) ||
            this.props.tabs[0];
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              {
                className: (0, s.Z)(
                  c().GraphicalAssetsTabs,
                  this.props.classNameCtn,
                ),
              },
              this.props.tabs.map((t) => {
                if (!t.hidden) {
                  let n = "";
                  return (
                    "success" === t.statusType
                      ? (n = c().StatusSuccess)
                      : "danger" === t.statusType
                      ? (n = c().StatusDanger)
                      : "caution" === t.statusType && (n = c().StatusCaution),
                    a.createElement(
                      m.M2,
                      {
                        key: t.key,
                        condition: Boolean(t.statusToolTip),
                        wrap: (e) =>
                          a.createElement(
                            d.HP,
                            { toolTipContent: t.statusToolTip || t.tooltip },
                            e,
                          ),
                      },
                      a.createElement(
                        "div",
                        {
                          key: t.key,
                          className: (0, s.Z)(
                            `${c().GraphicalAssetsTab} ${
                              t.key === e.key
                                ? (0, s.Z)(c().Active, "ActiveTab")
                                : ""
                            }`,
                            this.props.classNameTab,
                          ),
                          onClick: () => this.OnTabClick(t),
                        },
                        Boolean(t.vo_warning) &&
                          a.createElement(
                            d.HP,
                            { toolTipContent: t.vo_warning },
                            a.createElement(
                              "div",
                              { className: c().VOWarning },
                              (0, r.Xx)("#EventEditor_VOWarning"),
                            ),
                          ),
                        Boolean(t.status) &&
                          a.createElement(
                            "div",
                            {
                              className: (0, s.Z)(c().GraphicalAssetStatus, n),
                            },
                            t.status,
                          ),
                        t.name,
                      ),
                    )
                  );
                }
                return null;
              }),
            ),
            a.createElement("div", null, e && e.contents),
          );
        }
      }
      const p = (0, i.EN)(u);
    },
    24166: (e, t, n) => {
      "use strict";
      n.d(t, { mY: () => u, ug: () => p });
      var a = n(22444),
        i = n(14826),
        s = n(701),
        r = n(89526),
        o = n(19304),
        l = n(52629),
        c = n(17547),
        d = n(88464),
        m = n(48705);
      const u = (0, d.Pi)((e) =>
        r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            {
              className: (0, o.Z)(
                e.className ? e.className : "",
                m.SectionTitleHeader,
                m.required_title,
                "SectionTitleHeader",
              ),
            },
            r.createElement(
              "div",
              {
                className: (0, o.Z)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              e.title,
              Boolean(e.tooltip) && r.createElement(T, { tooltip: e.tooltip }),
            ),
            r.createElement(h, {
              bIsMinimized: e.getMinimized(),
              fnToggleMinimize: e.toggleMinimized,
            }),
          ),
          !e.getMinimized() && r.createElement(c.SV, null, e.children),
        ),
      );
      function p(e) {
        const [t, n] = r.useState(Boolean(e.bStartMinimized));
        return r.createElement(
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
        return r.createElement(
          a.zx,
          { "data-tooltip-text": (0, i.Xx)(o), onClick: n },
          e.bIsMinimized
            ? r.createElement(s.YqJ, null)
            : r.createElement(s.gR, null),
        );
      }
      function T(e) {
        return r.createElement(
          "span",
          {
            "data-tooltip-text": e.tooltip,
            className: (0, o.Z)(l.HelperTooltip, "HelperTooltip"),
          },
          " ",
          r.createElement(s.WWB, null),
        );
      }
    },
  },
]);

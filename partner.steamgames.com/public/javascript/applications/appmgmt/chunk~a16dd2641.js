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
        r = n(93513),
        s = n(14826),
        o = n(3301);
      function l() {
        const [e, t] = (0, a.useState)(!1),
          [n, i] = (0, a.useState)(!1),
          [r, s] = (0, a.useState)(!1),
          [o, l] = (0, a.useState)(null),
          [c, d] = (0, a.useState)(null),
          [u, m] = (0, a.useState)(null),
          [p, h] = (0, a.useState)(null),
          [g, T] = (0, a.useState)(null);
        return {
          bLoading: e,
          bError: n,
          bSuccess: r,
          strError: o,
          strSuccess: c,
          elSuccess: p,
          elError: u,
          strThrobber: g,
          fnSetLoading: t,
          fnSetError: i,
          fnSetSuccess: s,
          fnSetStrError: l,
          fnSetStrSuccess: d,
          fnSetElSuccess: h,
          fnSetElError: m,
          fnSetThrobber: T,
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
            bError: u,
            bSuccess: m,
            strError: p,
            strSuccess: h,
            elSuccess: g,
            elError: T,
            strThrobber: _,
          } = n;
        return u || p || T
          ? a.createElement(
              i.uH,
              { strTitle: t, bAlertDialog: !0, closeModal: l },
              Boolean(p) &&
                a.createElement(
                  "div",
                  { className: r.ErrorStylesWithIcon },
                  p || (0, s.Xx)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(T) && T,
            )
          : m || h || g
          ? a.createElement(
              i.uH,
              {
                strTitle: t,
                strDescription: h || (0, s.Xx)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: l,
              },
              a.createElement(a.Fragment, null, Boolean(g) && g),
            )
          : a.createElement(
              i.uH,
              { strTitle: t, closeModal: () => {} },
              a.createElement(o.V, {
                string: c || _ || (0, s.Xx)("#Loading"),
                size: "medium",
                position: "center",
              }),
            );
      }
    },
    82971: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => v });
      var a = n(33940),
        i = n(88464),
        r = n(89526),
        s = n(5556),
        o = n.n(s),
        l = n(70369),
        c = n(85651),
        d = n(52629),
        u = n.n(d),
        m = n(19304),
        p = n(14826),
        h = n(4306),
        g = n(84343),
        T = n(29183),
        _ = n.n(T),
        S = n(47812),
        E = n.n(S);
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
            fnIsValidDateTime: a,
            disabled: i,
          } = this.props;
          if (i) return;
          if ("string" == typeof e) {
            let t = E()(e, "h:m a +-h:m", !0);
            if (!t.isValid()) return void this.setState({ timeAsString: e });
            e = t;
          }
          let r = this.props.fnGetTimeToUpdate(),
            s = 0;
          if (r) {
            const t = E().unix(r);
            e.year(t.year()),
              e.month(t.month()),
              e.day(t.day()),
              (s = e.unix());
          } else {
            s =
              E().unix(t).hour(0).second(0).minutes(0).unix() +
              3600 * e.hour() +
              60 * e.minutes();
          }
          n(s);
          let o = a && !0 === a();
          (null == this.state.timeAsString &&
            o == this.state.bEndTimeBeforeStartTime) ||
            this.setState({ timeAsString: null, bEndTimeBeforeStartTime: o });
        }
        OnDateChange(e) {
          const { disabled: t } = this.props;
          if (t) return;
          if ("string" == typeof e) {
            let t = E()(e, "M/D/YYYY", !0);
            if (!t.isValid()) return void this.setState({ dateAsString: e });
            e = t;
          }
          const n = this.props.fnGetTimeToUpdate(),
            a = E().unix(n || c.JW.GetTimeNowWithOverride());
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
            i = E().unix(t).hour(0).seconds(0).minute(0);
          let r = e.unix() >= i.unix();
          if (r && n && n >= t) {
            const t = E().unix(n).hour(23).minute(59).seconds(59);
            r = e.unix() <= t.unix();
          }
          return (
            r && a && ((0 != e.weekday() && 6 != e.weekday()) || (r = !1)), r
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
            disabled: s,
            bNoDefaultDate: d,
          } = this.props;
          let h = n(),
            T = h > 0 ? new Date(1e3 * h) : null,
            S = "h:mm A";
          const v = a && a(),
            b =
              this.state.timeAsString ||
              this.state.dateAsString ||
              "string" == typeof v ||
              !1 === v;
          let f,
            y,
            I = "#DateTimePicker_Fallback_Invalid_DateTime";
          if (
            (this.state.timeAsString
              ? (I = "#DateTimePicker_Time_CannotParse")
              : this.state.dateAsString
              ? (I = "#DateTimePicker_Date_CannotParse")
              : "string" == typeof v && (I = v),
            e && t && e == t && t > c.JW.GetTimeNowWithOverride())
          ) {
            let e = E().unix(t);
            (f = {
              hours: { max: e.hour(), min: e.hour(), step: 0 },
              minutes: { max: e.minute(), min: e.minute(), step: 0 },
              seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (S = "HH:mm");
          }
          h || !t || d || (y = E().unix(t));
          const D = E().tz.guess(),
            k = E().unix(h).tz(D),
            A = !!i && D != i && E().unix(h).tz(i);
          return r.createElement(
            "div",
            { className: (0, m.Z)(_().EventTimeSection, this.props.className) },
            r.createElement(
              "div",
              { className: (0, m.Z)(_().EventTimeTitle, "DialogLabel") },
              r.createElement(
                g.HP,
                { toolTipContent: this.props.strDescToolTip, direction: "top" },
                Boolean(this.props.strDescription) &&
                  r.createElement("span", null, this.props.strDescription),
              ),
              b &&
                r.createElement(
                  "span",
                  { className: _().DateErrorCtn },
                  r.createElement("img", { src: l.Z }),
                  (0, p.Xx)(I),
                ),
            ),
            r.createElement(
              "div",
              { className: u().FlexRowContainer },
              r.createElement(
                "div",
                { className: (0, m.Z)(u().InputBorder, _().TimeBlock) },
                r.createElement(o(), {
                  onChange: this.OnDateChange,
                  timeFormat: !1,
                  value: this.state.dateAsString ? this.state.dateAsString : T,
                  isValidDate: this.IsValidDate,
                  initialValue: y,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Date"),
                    className: (0, m.Z)(
                      _().DateWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: s,
                  },
                }),
                !!A &&
                  r.createElement(
                    "div",
                    { className: _().PacificTimeHint },
                    A.format("L"),
                  ),
              ),
              r.createElement(
                "div",
                { className: (0, m.Z)(u().InputBorder, _().TimeBlock) },
                r.createElement(o(), {
                  onChange: this.OnTimeChange,
                  dateFormat: !1,
                  timeFormat: S,
                  timeConstraints: f,
                  value: this.state.timeAsString ? this.state.timeAsString : T,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Time"),
                    className: (0, m.Z)(
                      _().TimeWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: s,
                  },
                }),
                !!A &&
                  r.createElement(
                    "div",
                    { className: _().PacificTimeHint },
                    A.format("LT"),
                  ),
              ),
              this.props.bShowTimeZone &&
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "div",
                    { className: _().TimeZone },
                    k.zoneAbbr(),
                  ),
                  !!A &&
                    r.createElement(
                      "div",
                      { className: _().TimeZone },
                      A.zoneAbbr(),
                    ),
                ),
            ),
            Boolean(f) &&
              r.createElement(
                "div",
                null,
                (0, p.Xx)("#DateTimePicker_DateTime_Fixed"),
              ),
          );
        }
      };
      (0, a.gn)([h.ak], v.prototype, "OnTimeChange", null),
        (0, a.gn)([h.ak], v.prototype, "OnDateChange", null),
        (0, a.gn)([h.ak], v.prototype, "IsValidDate", null),
        (0, a.gn)([h.ak], v.prototype, "SetToNow", null),
        (v = (0, a.gn)([i.Pi], v));
    },
    16670: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => b });
      var a = n(89526),
        i = n(47165),
        r = n(33940),
        s = n(52868),
        o = n.n(s),
        l = n(92994),
        c = n.n(l),
        d = n(5615),
        u = n(42735),
        m = n(23217),
        p = n(32765),
        h = n(67328),
        g = n(94738),
        T = n(27070);
      const _ = "nicknames";
      const S = new (c())(
          (e) =>
            (function (e) {
              var t, n, a, s;
              return (0, r.mG)(this, void 0, void 0, function* () {
                if (!e || 0 == e.length) return [];
                const r =
                  "community" == (0, p.Zv)()
                    ? p.De.COMMUNITY_BASE_URL
                    : p.De.STORE_BASE_URL;
                if (1 == e.length) {
                  const a = { accountid: e[0], origin: self.origin },
                    i = yield o().get(`${r}actions/ajaxgetavatarpersona`, {
                      params: a,
                    });
                  if (
                    !i ||
                    200 != i.status ||
                    (null === (t = i.data) || void 0 === t
                      ? void 0
                      : t.success) != u.s.k_EResultOK ||
                    !(null === (n = i.data) || void 0 === n
                      ? void 0
                      : n.userinfo)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, m.l)(i).strErrorMsg
                    }`;
                  return [i.data.userinfo];
                }
                {
                  const t = { accountids: e.join(","), origin: self.origin },
                    n = yield o().get(`${r}actions/ajaxgetmultiavatarpersona`, {
                      params: t,
                    });
                  if (
                    !n ||
                    200 != n.status ||
                    (null === (a = n.data) || void 0 === a
                      ? void 0
                      : a.success) != u.s.k_EResultOK ||
                    !(null === (s = n.data) || void 0 === s
                      ? void 0
                      : s.userinfos)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, m.l)(n).strErrorMsg
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
        E = "avatarandpersonas";
      var v = n(56708);
      function b(e) {
        const { accountID: t, bHideWhenNotAvailable: n } = e,
          [s] = (function (e) {
            const { data: t, isLoading: n } = (0, d.useQuery)([E, e], () =>
              S.load(e),
            );
            return [t, n];
          })(t),
          o = (function (e) {
            const t = (0, T.bY)(),
              { data: n, isLoading: a } = (0, d.useQuery)([_], () =>
                (0, r.mG)(this, void 0, void 0, function* () {
                  const e = new Map();
                  if (p.L7.logged_in) {
                    const n = h.gA.Init(g.bM),
                      a = (yield g.lk.GetNicknameList(t, n)).Body().toObject();
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
          Boolean(!s)
            ? a.createElement(
                a.Fragment,
                null,
                Boolean(!n) && a.createElement("span", null, t),
              )
            : a.createElement(
                a.Fragment,
                null,
                a.createElement("img", {
                  className: v.SmallAvatar,
                  src: s.avatar_url,
                  "data-miniprofile": "s" + l.ConvertTo64BitString(),
                }),
                a.createElement(
                  "span",
                  null,
                  o ? `${o} (${s.persona_name})` : s.persona_name,
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
        r = n(19304),
        s = n(14826),
        o = n(5029),
        l = n(74286),
        c = n.n(l),
        d = n(84343),
        u = n(75962);
      class m extends a.Component {
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
                className: (0, r.Z)(
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
                      u.M2,
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
                          className: (0, r.Z)(
                            `${c().GraphicalAssetsTab} ${
                              t.key === e.key
                                ? (0, r.Z)(c().Active, "ActiveTab")
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
                              (0, s.Xx)("#EventEditor_VOWarning"),
                            ),
                          ),
                        Boolean(t.status) &&
                          a.createElement(
                            "div",
                            {
                              className: (0, r.Z)(c().GraphicalAssetStatus, n),
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
      const p = (0, i.EN)(m);
    },
    24166: (e, t, n) => {
      "use strict";
      n.d(t, { mY: () => m, ug: () => p });
      var a = n(22444),
        i = n(14826),
        r = n(701),
        s = n(89526),
        o = n(19304),
        l = n(52629),
        c = n(17547),
        d = n(88464),
        u = n(48705);
      const m = (0, d.Pi)((e) =>
        s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            {
              className: (0, o.Z)(
                e.className ? e.className : "",
                u.SectionTitleHeader,
                u.required_title,
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
          !e.getMinimized() && s.createElement(c.SV, null, e.children),
        ),
      );
      function p(e) {
        const [t, n] = s.useState(Boolean(e.bStartMinimized));
        return s.createElement(
          m,
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
          a.zx,
          { "data-tooltip-text": (0, i.Xx)(o), onClick: n },
          e.bIsMinimized
            ? s.createElement(r.YqJ, null)
            : s.createElement(r.gR, null),
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
          s.createElement(r.WWB, null),
        );
      }
    },
    38944: (e, t, n) => {
      "use strict";
      n.d(t, { DV: () => p, Tt: () => u });
      var a = n(33940),
        i = n(52868),
        r = n.n(i),
        s = n(89526),
        o = n(75457),
        l = n(42735),
        c = n(23217),
        d = n(32765);
      function u() {
        return d.De.EUNIVERSE == o.xO.k_EUniverseBeta ? 12 : 1;
      }
      class m {
        GetPartnerInfo(e) {
          return this.m_mapOptInToPartners.get(e);
        }
        BHasPartnerInfoLoad(e) {
          return this.m_mapOptInToPartners.has(e);
        }
        FindPartnerByName(e) {
          var t, n, i;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a = new Array();
            try {
              const s = d.De.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
                o = { sessionid: d.De.SESSIONID, searchtext: e },
                c = yield r().get(s, { params: o });
              200 == (null == c ? void 0 : c.status) &&
              (null === (t = null == c ? void 0 : c.data) || void 0 === t
                ? void 0
                : t.success) == l.s.k_EResultOK
                ? c.data.publishers.forEach((e) => {
                    const t = {
                      partnerid: e.publisherid,
                      name: e.publishername,
                      partner_url:
                        d.De.PARTNER_BASE_URL +
                        `pub/publisher/${e.publisherid}/`,
                      contacts: e.contacts,
                    };
                    this.m_mapOptInToPartners.set(e.publisherid, t), a.push(t);
                  })
                : console.log(
                    `CPartnerInfoStore.FindPartnerByName failed with status ${
                      null == c ? void 0 : c.status
                    } eresult ${
                      null === (n = null == c ? void 0 : c.data) || void 0 === n
                        ? void 0
                        : n.success
                    } and msg ${
                      null === (i = null == c ? void 0 : c.data) || void 0 === i
                        ? void 0
                        : i.msg
                    }`,
                  );
            } catch (e) {
              const t = (0, c.l)(e);
              console.error(
                "CPartnerInfoStore.FindPartnerByName failed add: " +
                  t.strErrorMsg,
                t,
              );
            }
            return a;
          });
        }
        LoadPartnerInfo(e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            yield this.FindPartnerByName("" + e);
            return (
              this.BHasPartnerInfoLoad(e) ||
                this.m_mapOptInToPartners.set(e, null),
              this.m_mapOptInToPartners.get(e)
            );
          });
        }
        static Get() {
          return (
            m.s_Singleton ||
              ((m.s_Singleton = new m()),
              ("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = m.s_Singleton)),
            m.s_Singleton
          );
        }
        constructor() {
          this.m_mapOptInToPartners = new Map();
          let e = JSON.parse(
            JSON.stringify((0, d.kQ)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(e) &&
            e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].partnerid &&
            "string" == typeof t[0].name
          );
        }
      }
      function p(e) {
        const [t, n] = s.useState(m.Get().GetPartnerInfo(e));
        return (
          s.useEffect(() => {
            !m.Get().BHasPartnerInfoLoad(e) &&
              e > 0 &&
              m
                .Get()
                .LoadPartnerInfo(e)
                .then((e) => n(e));
          }, [e]),
          [t]
        );
      }
    },
  },
]);

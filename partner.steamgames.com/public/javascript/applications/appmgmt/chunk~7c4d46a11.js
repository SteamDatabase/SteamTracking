/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4650],
  {
    19452: (e) => {
      e.exports = {
        EventTimeSection: "_27EoU0Snt5nNX20x6Pw3oU",
        EventTimeTitle: "_2sTdTYXMVbzmpZE4pBTCm3",
        EventVisibilityItem: "_3Q0gDLqbQiNMNUdIcPkk26",
        EventEditorInputPaneContainer: "_3j82MIv9kvq7XCtwNj7n0q",
        TimeWidth: "_2W8sgAlQVBIRQ1FcJK6JkO",
        EventPublishTimeCtn: "_12m3Shtk5hrE72P6Jq2BKk",
        DateWidth: "_2ao2WtX4G4yDdf4Py87Zhf",
        PacificTimeHint: "VTweaDtI9Pliy8jp6YsDH",
        TimeZone: "_2RLF9u9ZYqkczJVg9ibx9f",
        InputBorder: "_2mTwCB8Moti8eKGqffi1cq",
        TimeBlock: "_1O49ue7FtKdpbT2zjGpSos",
        TimeRowContainer: "_3ksYFTfM0JWEc5IhOzefor",
        TimeRowDropDown: "_3KrsS7BOnCu1tK2wbJUhWH",
        EndDateAmountCtn: "_2_8MRRZRmC9crmOmhirv7-",
        EndRound: "_1MAHSiuekX-Y8DBzLZTJfv",
        VisibilityItemList: "rYX24s5dEQCX9Xb7wVGpk",
        VisibilityItems: "_2SAGi1AISnnGN_NrTJHI_y",
        EventEditorVisibilityCtn: "_1jbnRVmvZRebcs3184yZFC",
        DateErrorCtn: "Bww9BDFYAZ9ksaah3sndn",
      };
    },
    47955: (e) => {
      e.exports = { SmallAvatar: "_2cCH3yNLHHafG87E2uIfR-" };
    },
    11209: (e) => {
      e.exports = {
        SectionTitleHeader: "_1K5gAgxxFp6Fb_mLLeHwQi",
        required_title: "_29VCzH1j-cbaFKeMAv4xX_",
      };
    },
    92012: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => S });
      var n = i(85556),
        a = i(27605),
        s = i(47427),
        r = i(43344),
        o = i.n(r),
        l = i(36595),
        m = i(64936),
        c = i(71741),
        d = i.n(c),
        u = i(13129),
        p = i(31846),
        h = i(20417),
        T = i(59728),
        g = i(19452),
        E = i.n(g),
        f = i(98973),
        v = i.n(f);
      let S = class extends s.Component {
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
            fnSetTimeToUpdate: i,
            fnIsValidDateTime: n,
            disabled: a,
          } = this.props;
          if (a) return;
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
          i(r);
          let o = n && !0 === n();
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
          const i = this.props.fnGetTimeToUpdate(),
            n = v().unix(i || m.JW.GetTimeNowWithOverride());
          e.hour(n.hour()),
            e.minute(n.minute()),
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
              nLatestTime: i,
              bWeekdaysOnly: n,
            } = this.props,
            a = v().unix(t).hour(0).seconds(0).minute(0);
          let s = e.unix() >= a.unix();
          if (s && i && i >= t) {
            const t = v().unix(i).hour(23).minute(59).seconds(59);
            s = e.unix() <= t.unix();
          }
          return (
            s && n && ((0 != e.weekday() && 6 != e.weekday()) || (s = !1)), s
          );
        }
        SetToNow() {
          this.props.fnSetToNow
            ? this.props.fnSetToNow(m.JW.GetTimeNowWithOverride())
            : this.props.fnSetTimeToUpdate(m.JW.GetTimeNowWithOverride());
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
          let i = null;
          (this.state.timeAsString ||
            this.state.dateAsString ||
            "string" == typeof t ||
            !1 === t) &&
            ((i = (0, p.Xx)("#DateTimePicker_Fallback_Invalid_DateTime")),
            this.state.timeAsString
              ? (i = (0, p.Xx)("#DateTimePicker_Time_CannotParse"))
              : this.state.dateAsString
                ? (i = (0, p.Xx)("#DateTimePicker_Date_CannotParse"))
                : "string" == typeof t && (i = t)),
            this.state.strError !== i &&
              (this.setState({ strError: i }),
              this.props.onError && this.props.onError(i));
        }
        render() {
          const {
            nLatestTime: e,
            nEarliestTime: t,
            fnGetTimeToUpdate: i,
            onError: n,
            strAlsoShowTimeZone: a,
            disabled: r,
            bNoDefaultDate: c,
          } = this.props;
          let h = i(),
            g = h > 0 ? new Date(1e3 * h) : null,
            f = "h:mm A";
          const S = !n && this.state.strError;
          let D, _;
          if (e && t && e == t && t > m.JW.GetTimeNowWithOverride()) {
            let e = v().unix(t);
            (D = {
              hours: { max: e.hour(), min: e.hour(), step: 0 },
              minutes: { max: e.minute(), min: e.minute(), step: 0 },
              seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (f = "HH:mm");
          }
          h || !t || c || (_ = v().unix(t));
          const b = v().tz.guess(),
            x = v().unix(h).tz(b),
            k = !!a && b != a && v().unix(h).tz(a);
          return s.createElement(
            "div",
            { className: (0, u.Z)(E().EventTimeSection, this.props.className) },
            s.createElement(
              "div",
              { className: (0, u.Z)(E().EventTimeTitle, "DialogLabel") },
              s.createElement(
                T.HP,
                { toolTipContent: this.props.strDescToolTip, direction: "top" },
                Boolean(this.props.strDescription) &&
                  s.createElement("span", null, this.props.strDescription),
              ),
              S &&
                s.createElement(
                  "span",
                  { className: E().DateErrorCtn },
                  s.createElement("img", { src: l.Z }),
                  S,
                ),
            ),
            s.createElement(
              "div",
              { className: d().FlexRowContainer },
              s.createElement(
                "div",
                { className: (0, u.Z)(d().InputBorder, E().TimeBlock) },
                s.createElement(o(), {
                  onChange: this.OnDateChange,
                  timeFormat: !1,
                  value: this.state.dateAsString ? this.state.dateAsString : g,
                  isValidDate: this.IsValidDate,
                  initialValue: _,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Date"),
                    className: (0, u.Z)(
                      E().DateWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: r,
                  },
                }),
                !!k &&
                  s.createElement(
                    "div",
                    { className: E().PacificTimeHint },
                    k.format("L"),
                  ),
              ),
              s.createElement(
                "div",
                { className: (0, u.Z)(d().InputBorder, E().TimeBlock) },
                s.createElement(o(), {
                  onChange: this.OnTimeChange,
                  dateFormat: !1,
                  timeFormat: f,
                  timeConstraints: D,
                  value: this.state.timeAsString ? this.state.timeAsString : g,
                  inputProps: {
                    placeholder: (0, p.Xx)("#DateTimePicker_Enter_Time"),
                    className: (0, u.Z)(
                      E().TimeWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: r,
                  },
                }),
                !!k &&
                  s.createElement(
                    "div",
                    { className: E().PacificTimeHint },
                    k.format("LT"),
                  ),
              ),
              this.props.bShowTimeZone &&
                s.createElement(
                  "div",
                  null,
                  s.createElement(
                    "div",
                    { className: E().TimeZone },
                    x.zoneAbbr(),
                  ),
                  !!k &&
                    s.createElement(
                      "div",
                      { className: E().TimeZone },
                      k.zoneAbbr(),
                    ),
                ),
            ),
            Boolean(D) &&
              s.createElement(
                "div",
                null,
                (0, p.Xx)("#DateTimePicker_DateTime_Fixed"),
              ),
          );
        }
      };
      (0, n.gn)([h.ak], S.prototype, "OnTimeChange", null),
        (0, n.gn)([h.ak], S.prototype, "OnDateChange", null),
        (0, n.gn)([h.ak], S.prototype, "IsValidDate", null),
        (0, n.gn)([h.ak], S.prototype, "SetToNow", null),
        (S = (0, n.gn)([a.Pi], S));
    },
    38201: (e, t, i) => {
      "use strict";
      i.d(t, { N: () => S });
      var n = i(47427),
        a = i(35427),
        s = i(85556),
        r = i(80751),
        o = i.n(r),
        l = i(73799),
        m = i.n(l),
        c = i(42718),
        d = i(16649),
        u = i(37563),
        p = i(79545),
        h = i(82182),
        T = i(40057);
      const g = "nicknames";
      const E = new (m())(
          (e) =>
            (function (e) {
              var t, i, n, r;
              return (0, s.mG)(this, void 0, void 0, function* () {
                if (!e || 0 == e.length) return [];
                const s =
                  "community" == (0, u.Zv)()
                    ? u.De.COMMUNITY_BASE_URL
                    : u.De.STORE_BASE_URL;
                if (1 == e.length) {
                  const n = { accountid: e[0], origin: self.origin },
                    a = yield o().get(`${s}actions/ajaxgetavatarpersona`, {
                      params: n,
                    });
                  if (
                    !a ||
                    200 != a.status ||
                    1 !=
                      (null === (t = a.data) || void 0 === t
                        ? void 0
                        : t.success) ||
                    !(null === (i = a.data) || void 0 === i
                      ? void 0
                      : i.userinfo)
                  )
                    throw `Load single avatar/persona failed ${(0, d.l)(a).strErrorMsg}`;
                  return [a.data.userinfo];
                }
                {
                  const t = { accountids: e.join(","), origin: self.origin },
                    i = yield o().get(`${s}actions/ajaxgetmultiavatarpersona`, {
                      params: t,
                    });
                  if (
                    !i ||
                    200 != i.status ||
                    1 !=
                      (null === (n = i.data) || void 0 === n
                        ? void 0
                        : n.success) ||
                    !(null === (r = i.data) || void 0 === r
                      ? void 0
                      : r.userinfos)
                  )
                    throw `Load single avatar/persona failed ${(0, d.l)(i).strErrorMsg}`;
                  const l = new Map();
                  return (
                    i.data.userinfos.forEach((e) =>
                      l.set(new a.K(e.steamid).GetAccountID(), e),
                    ),
                    e.map((e) => l.get(e))
                  );
                }
              });
            })(e),
          { cache: !1 },
        ),
        f = "avatarandpersonas";
      var v = i(47955);
      function S(e) {
        const { accountID: t, bHideWhenNotAvailable: i, bHideName: r } = e,
          [o] = (function (e) {
            const { data: t, isLoading: i } = (0, c.useQuery)([f, e], () =>
              E.load(e),
            );
            return [t, i];
          })(t),
          l = (function (e) {
            const t = (0, T.bY)(),
              { data: i, isLoading: n } = (0, c.useQuery)([g], () =>
                (0, s.mG)(this, void 0, void 0, function* () {
                  const e = new Map();
                  if (u.L7.logged_in) {
                    const i = p.gA.Init(h.bM),
                      n = (yield h.lk.GetNicknameList(t, i)).Body().toObject();
                    (null == n ? void 0 : n.nicknames) &&
                      n.nicknames.length > 0 &&
                      n.nicknames.forEach((t) => {
                        e.set(t.accountid, t.nickname);
                      });
                  }
                  return e;
                }),
              );
            return i ? i.get(e) : null;
          })(t),
          m = n.useMemo(() => a.K.InitFromAccountID(t), [t]);
        return n.createElement(
          n.Fragment,
          null,
          Boolean(!o)
            ? n.createElement(
                n.Fragment,
                null,
                Boolean(!i) && n.createElement("span", null, t),
              )
            : n.createElement(
                n.Fragment,
                null,
                n.createElement("img", {
                  className: v.SmallAvatar,
                  src: o.avatar_url,
                  "data-miniprofile": "s" + m.ConvertTo64BitString(),
                }),
                Boolean(!r) &&
                  n.createElement(
                    "span",
                    null,
                    l ? `${l} (${o.persona_name})` : o.persona_name,
                  ),
              ),
        );
      }
    },
    56164: (e, t, i) => {
      "use strict";
      i.d(t, { mY: () => u, ug: () => p });
      var n = i(1485),
        a = i(31846),
        s = i(62613),
        r = i(47427),
        o = i(13129),
        l = i(71741),
        m = i(10162),
        c = i(27605),
        d = i(11209);
      const u = (0, c.Pi)((e) =>
        r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            {
              className: (0, o.Z)(
                e.className ? e.className : "",
                d.SectionTitleHeader,
                d.required_title,
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
          !e.getMinimized() && r.createElement(m.SV, null, e.children),
        ),
      );
      function p(e) {
        const [t, i] = r.useState(Boolean(e.bStartMinimized));
        return r.createElement(
          u,
          Object.assign({}, e, {
            getMinimized: () => t,
            toggleMinimized: () => i(!t),
          }),
          e.children,
        );
      }
      function h(e) {
        const { bIsMinimized: t, fnToggleMinimize: i } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return r.createElement(
          n.zx,
          { "data-tooltip-text": (0, a.Xx)(o), onClick: i },
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

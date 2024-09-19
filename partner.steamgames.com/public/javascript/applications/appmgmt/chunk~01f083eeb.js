/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6060],
  {
    12916: (e) => {
      e.exports = {
        EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
        EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
        EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
        EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
        TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
        EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
        DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
        PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
        TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
        InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
        TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
        TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
        TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
        EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
        EndRound: "jwuNowbLB28M6nkqFkF_C",
        VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
        VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
        EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
        DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
      };
    },
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    27144: (e, t, i) => {
      "use strict";
      i.d(t, { B3: () => v, KM: () => E, KT: () => D });
      var n = i(41735),
        a = i.n(n),
        s = i(58632),
        r = i.n(s),
        o = i(90626),
        l = i(20194),
        m = i(75233),
        c = i(17720),
        d = i(68797),
        u = i(78327),
        p = i(56545),
        h = i(37735),
        T = i(23809);
      const g = "nicknames";
      function E(e) {
        const t = (0, T.KV)(),
          { data: i, isLoading: n } = (0, l.I)({
            queryKey: [g],
            queryFn: async () => {
              const e = new Map();
              if (u.iA.logged_in) {
                const i = p.w.Init(h.dN),
                  n = (await h.xt.GetNicknameList(t, i)).Body().toObject();
                n?.nicknames &&
                  n.nicknames.length > 0 &&
                  n.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return i ? i.get(e) : null;
      }
      const f = new (r())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, u.yK)()
                  ? u.TS.COMMUNITY_BASE_URL
                  : u.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const i = { accountid: e[0], origin: self.origin },
                  n = await a().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: i,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  1 != n.data?.success ||
                  !n.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(n).strErrorMsg}`;
                return [n.data.userinfo];
              }
              {
                const i = { accountids: e.join(","), origin: self.origin },
                  n = await a().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: i,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  1 != n.data?.success ||
                  !n.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(n).strErrorMsg}`;
                const s = new Map();
                return (
                  n.data.userinfos.forEach((e) =>
                    s.set(new c.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        S = "avatarandpersonas";
      function D(e) {
        const { data: t, isLoading: i } = (0, l.I)({
          queryKey: [S, e],
          queryFn: () => f.load(e),
        });
        return [t, i];
      }
      function v(e) {
        const t = (0, m.jE)(),
          { data: i, isLoading: n } = (0, l.I)({
            queryKey: [S, e],
            queryFn: async () => {
              const i = await f.loadMany(e);
              return (
                i.forEach((e) => {
                  const i = [S, new c.b(e.steamid).GetAccountID()];
                  t.setQueryData(i, e);
                }),
                i
              );
            },
            enabled: e?.length > 0,
          }),
          a = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              i?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [i]);
        return n ? null : a;
      }
    },
    99637: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => D });
      var n = i(34629),
        a = i(75844),
        s = i(90626),
        r = i(69917),
        o = i.n(r),
        l = i(44894),
        m = i(44165),
        c = i(95695),
        d = i.n(c),
        u = i(52038),
        p = i(61859),
        h = i(84933),
        T = i(32754),
        g = i(12916),
        E = i.n(g),
        f = i(87937),
        S = i.n(f);
      let D = class extends s.Component {
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
            let t = S()(e, "h:m a +-h:m", !0);
            if (!t.isValid()) return void this.setState({ timeAsString: e });
            e = t;
          }
          let s = this.props.fnGetTimeToUpdate(),
            r = 0;
          if (s) {
            const t = S().unix(s);
            e.year(t.year()),
              e.month(t.month()),
              e.day(t.day()),
              (r = e.unix());
          } else {
            r =
              S().unix(t).hour(0).second(0).minutes(0).unix() +
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
            let t = S()(e, "M/D/YYYY", !0);
            if (!t.isValid()) return void this.setState({ dateAsString: e });
            e = t;
          }
          const i = this.props.fnGetTimeToUpdate(),
            n = S().unix(i || m.HD.GetTimeNowWithOverride());
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
            a = S().unix(t).hour(0).seconds(0).minute(0);
          let s = e.unix() >= a.unix();
          if (s && i && i >= t) {
            const t = S().unix(i).hour(23).minute(59).seconds(59);
            s = e.unix() <= t.unix();
          }
          return (
            s && n && ((0 != e.weekday() && 6 != e.weekday()) || (s = !1)), s
          );
        }
        SetToNow() {
          this.props.fnSetToNow
            ? this.props.fnSetToNow(m.HD.GetTimeNowWithOverride())
            : this.props.fnSetTimeToUpdate(m.HD.GetTimeNowWithOverride());
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
            ((i = (0, p.we)("#DateTimePicker_Fallback_Invalid_DateTime")),
            this.state.timeAsString
              ? (i = (0, p.we)("#DateTimePicker_Time_CannotParse"))
              : this.state.dateAsString
                ? (i = (0, p.we)("#DateTimePicker_Date_CannotParse"))
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
          const D = !n && this.state.strError;
          let v, A;
          if (e && t && e == t && t > m.HD.GetTimeNowWithOverride()) {
            let e = S().unix(t);
            (v = {
              hours: { max: e.hour(), min: e.hour(), step: 0 },
              minutes: { max: e.minute(), min: e.minute(), step: 0 },
              seconds: { max: e.seconds(), min: e.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (f = "HH:mm");
          }
          h || !t || c || (A = S().unix(t));
          const _ = S().tz.guess(),
            w = S().unix(h).tz(_),
            y = !!a && _ != a && S().unix(h).tz(a);
          return s.createElement(
            "div",
            { className: (0, u.A)(E().EventTimeSection, this.props.className) },
            s.createElement(
              "div",
              { className: (0, u.A)(E().EventTimeTitle, "DialogLabel") },
              s.createElement(
                T.he,
                { toolTipContent: this.props.strDescToolTip, direction: "top" },
                Boolean(this.props.strDescription) &&
                  s.createElement("span", null, this.props.strDescription),
              ),
              D &&
                s.createElement(
                  "span",
                  { className: E().DateErrorCtn },
                  s.createElement("img", { src: l.A }),
                  D,
                ),
            ),
            s.createElement(
              "div",
              { className: d().FlexRowContainer },
              s.createElement(
                "div",
                { className: (0, u.A)(d().InputBorder, E().TimeBlock) },
                s.createElement(o(), {
                  onChange: this.OnDateChange,
                  timeFormat: !1,
                  value: this.state.dateAsString ? this.state.dateAsString : g,
                  isValidDate: this.IsValidDate,
                  initialValue: A,
                  inputProps: {
                    placeholder: (0, p.we)("#DateTimePicker_Enter_Date"),
                    className: (0, u.A)(
                      E().DateWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: r,
                  },
                }),
                !!y &&
                  s.createElement(
                    "div",
                    { className: E().PacificTimeHint },
                    y.format("L"),
                  ),
              ),
              s.createElement(
                "div",
                { className: (0, u.A)(d().InputBorder, E().TimeBlock) },
                s.createElement(o(), {
                  onChange: this.OnTimeChange,
                  dateFormat: !1,
                  timeFormat: f,
                  timeConstraints: v,
                  value: this.state.timeAsString ? this.state.timeAsString : g,
                  inputProps: {
                    placeholder: (0, p.we)("#DateTimePicker_Enter_Time"),
                    className: (0, u.A)(
                      E().TimeWidth,
                      "DialogInput",
                      "DialogTextInputBase",
                    ),
                    disabled: r,
                  },
                }),
                !!y &&
                  s.createElement(
                    "div",
                    { className: E().PacificTimeHint },
                    y.format("LT"),
                  ),
              ),
              this.props.bShowTimeZone &&
                s.createElement(
                  "div",
                  null,
                  s.createElement(
                    "div",
                    { className: E().TimeZone },
                    w.zoneAbbr(),
                  ),
                  !!y &&
                    s.createElement(
                      "div",
                      { className: E().TimeZone },
                      y.zoneAbbr(),
                    ),
                ),
            ),
            Boolean(v) &&
              s.createElement(
                "div",
                null,
                (0, p.we)("#DateTimePicker_DateTime_Fixed"),
              ),
          );
        }
      };
      (0, n.Cg)([h.oI], D.prototype, "OnTimeChange", null),
        (0, n.Cg)([h.oI], D.prototype, "OnDateChange", null),
        (0, n.Cg)([h.oI], D.prototype, "IsValidDate", null),
        (0, n.Cg)([h.oI], D.prototype, "SetToNow", null),
        (D = (0, n.Cg)([a.PA], D));
    },
    8905: (e, t, i) => {
      "use strict";
      i.d(t, { p: () => o });
      var n = i(90626),
        a = i(17720),
        s = i(27144),
        r = i(15736);
      function o(e) {
        const { accountID: t, bHideWhenNotAvailable: i, bHideName: o } = e,
          [l] = (0, s.KT)(t),
          m = (0, s.KM)(t),
          c = n.useMemo(() => a.b.InitFromAccountID(t), [t]);
        return n.createElement(
          n.Fragment,
          null,
          Boolean(!l)
            ? n.createElement(
                n.Fragment,
                null,
                Boolean(!i) && n.createElement("span", null, t),
              )
            : n.createElement(
                n.Fragment,
                null,
                n.createElement("img", {
                  className: r.SmallAvatar,
                  src: l.avatar_url,
                  "data-miniprofile": "s" + c.ConvertTo64BitString(),
                }),
                Boolean(!o) &&
                  n.createElement(
                    "span",
                    null,
                    m ? `${m} (${l.persona_name})` : l.persona_name,
                  ),
              ),
        );
      }
    },
    48479: (e, t, i) => {
      "use strict";
      i.d(t, { AQ: () => p, qx: () => h });
      var n = i(39879),
        a = i(61859),
        s = i(12155),
        r = i(90626),
        o = i(52038),
        l = i(95695),
        m = i(84811),
        c = i(64734),
        d = i(65946),
        u = i(26408);
      function p(e) {
        const {
            title: t,
            tooltip: i,
            getMinimized: n,
            toggleMinimized: a,
            className: s,
            children: p,
          } = e,
          h = (0, d.q3)(() => n());
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            {
              className: (0, o.A)(
                s,
                c.SectionTitleHeader,
                c.required_title,
                "SectionTitleHeader",
              ),
            },
            r.createElement(
              "div",
              {
                className: (0, o.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(i) && r.createElement(u.o, { tooltip: i }),
            ),
            r.createElement(T, { bIsMinimized: h, fnToggleMinimize: a }),
          ),
          !h && r.createElement(m.tH, null, p),
        );
      }
      function h(e) {
        const [t, i] = r.useState(Boolean(e.bStartMinimized));
        return r.createElement(
          p,
          { ...e, getMinimized: () => t, toggleMinimized: () => i(!t) },
          e.children,
        );
      }
      function T(e) {
        const { bIsMinimized: t, fnToggleMinimize: i } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return r.createElement(
          n.$n,
          { "data-tooltip-text": (0, a.we)(o), onClick: i },
          e.bIsMinimized
            ? r.createElement(s.hz4, null)
            : r.createElement(s.Xjb, null),
        );
      }
    },
  },
]);

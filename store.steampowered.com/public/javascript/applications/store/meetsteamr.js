/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [98620],
  {
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    29645: (e) => {
      e.exports = {
        Ctn: "_35KiKa7cq-3mn4lChNW67c",
        EventName: "e-36dCsEtoK52wg6Qx1iq",
        AtendeeSearchRow: "_1KbfPGq52sl-NB4ku90gN3",
        AtendeeListButtonRow: "_2JLogmiR30ClrphBajhwYK",
        BackToListIcon: "_3bl-GtsF8LkmzsRFkqjeCz",
        AttendeeRow: "_35gHo_M6tBBUOL8PWGEmA9",
        DisplayAllDaysCtn: "_3bvF759mojZQZv_TGXaM5Q",
        DisplayDaysCtn: "_1b8sKAzr4LILvJyl7fkRrL",
        DateName: "_32Ut51xzdWXCL6OOaz4vY2",
        DisplayDaySessions: "_32v8UGu0FfxnCHtltxqiEV",
        NotToday: "_1PB1JESsJ8abJrTzTqOVBk",
        DisplayDaySessionsRow: "_3DhIykQH8p8dQb2VOZg4-L",
        DisplaySession: "_27ybiS1mMlsYotyoQGVmI_",
        Header: "_1jOgBHcEXg1l6kSowBxwn6",
        SessionName: "vl9qom9droT0L3xZs2JhG",
        SessionTime: "PG1xFNh9UdoEjEvvw22V5",
        CapacityCtn: "_2jxcROaKoRgZCIKUHALVRH",
        CapacityBarMax: "_2Kd3cw8fPPyzDXTWBxltj7",
        CapacityBarCurrent: "_3jKSoLI8ytiyq9ELWTJNVY",
        Full: "_27_ZZ6xz-L8KC1u6uQmDz",
        SetCapacityButton: "_1BPqndgvTdc3n4fPDlcvAQ",
        SetCapacityInput: "QnMJIDEn4Rz26VtL1RdUu",
      };
    },
    15588: (e) => {
      e.exports = {
        Ctn: "_3cmUbcgdPxM7o5hl986RgB",
        User: "_3E6Usl36asxUFK3vPKa7Us",
        EventName: "_2GHTaky49GZrPLyiOgKWB7",
        SessionInfo: "Kk38rrvnYm3-E2jJMahSH",
        SessionName: "_2uJvCA4FncHONmSI37VVyw",
        SessionTime: "_2vYmHfXJIHj2eCv8NsiqZv",
        RegisteredUsers: "HLiipgmnfEQ2O-9WritfU",
        CheckedIn: "_17S0ayInAou4_ptPoMguR0",
        GuestTitle: "_2fMFlfbH8xUEtW28kSLf5-",
        GuestEmail: "Tm-tj9XNHRPGqdqqNiTEp",
        DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
      };
    },
    27144: (e, t, s) => {
      "use strict";
      s.d(t, { B3: () => y, KM: () => j, KT: () => v });
      var n = s(41735),
        a = s.n(n),
        i = s(58632),
        r = s.n(i),
        o = s(90626),
        c = s(80902),
        d = s(75233),
        l = s(37085),
        u = s(17720),
        m = s(68797),
        p = s(78327),
        g = s(56545),
        h = s(42457),
        x = s(23809);
      const _ = "nicknames";
      function j(e) {
        const t = (0, x.KV)(),
          { data: s, isLoading: n } = (0, c.I)({
            queryKey: [_],
            queryFn: async () => {
              const e = new Map();
              if (p.iA.logged_in) {
                const s = g.w.Init(h.w_T),
                  n = (await h.xtC.GetNicknameList(t, s)).Body().toObject();
                n?.nicknames &&
                  n.nicknames.length > 0 &&
                  n.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return s ? s.get(e) : null;
      }
      const S = new (r())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, p.yK)()
                  ? p.TS.COMMUNITY_BASE_URL
                  : p.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const s = { accountid: e[0], origin: self.origin },
                  n = await a().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: s,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  n.data?.success != l.R ||
                  !n.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(n).strErrorMsg}`;
                return [n.data.userinfo];
              }
              {
                const s = { accountids: e.join(","), origin: self.origin },
                  n = await a().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: s,
                  });
                if (
                  !n ||
                  200 != n.status ||
                  n.data?.success != l.R ||
                  !n.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, m.H))(n).strErrorMsg}`;
                const i = new Map();
                return (
                  n.data.userinfos.forEach((e) =>
                    i.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => i.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        f = "avatarandpersonas";
      function v(e) {
        const { data: t, isLoading: s } = (0, c.I)({
          queryKey: [f, e],
          queryFn: () => S.load(e),
        });
        return [t, s];
      }
      function y(e) {
        const t = (0, d.jE)(),
          { data: s, isLoading: n } = (0, c.I)({
            queryKey: [f, e],
            queryFn: async () => {
              const s = await S.loadMany(e);
              return (
                s.forEach((e) => {
                  const s = [f, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(s, e);
                }),
                s
              );
            },
            enabled: e?.length > 0,
          }),
          a = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              s?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [s]);
        return n ? null : a;
      }
    },
    8905: (e, t, s) => {
      "use strict";
      s.d(t, { p: () => d });
      var n = s(7850),
        a = s(90626),
        i = s(17720),
        r = s(27144),
        o = s(15736),
        c = s(78327);
      function d(e) {
        const {
            accountID: t,
            bHideWhenNotAvailable: s,
            bHideName: d,
            bLink: l = !0,
          } = e,
          [u] = (0, r.KT)(t),
          m = (0, r.KM)(t),
          p = a.useMemo(() => i.b.InitFromAccountID(t), [t]),
          g = `${c.TS.COMMUNITY_BASE_URL}profiles/${p.ConvertTo64BitString()}`,
          h = l ? "a" : "span";
        return (0, n.jsx)(n.Fragment, {
          children: Boolean(!u)
            ? (0, n.jsx)(n.Fragment, {
                children: Boolean(!s) && (0, n.jsx)("span", { children: t }),
              })
            : (0, n.jsxs)(h, {
                href: l ? g : void 0,
                children: [
                  (0, n.jsx)("img", {
                    className: o.SmallAvatar,
                    src: u.avatar_url,
                    "data-miniprofile": "s" + p.ConvertTo64BitString(),
                  }),
                  Boolean(!d) &&
                    (0, n.jsx)("span", {
                      children: m ? `${m} (${u.persona_name})` : u.persona_name,
                    }),
                ],
              }),
        });
      }
    },
    48479: (e, t, s) => {
      "use strict";
      s.d(t, { qx: () => h });
      var n = s(7850),
        a = s(56283),
        i = s(61859),
        r = s(12155),
        o = s(90626),
        c = s(52038),
        d = s(95695),
        l = s(84811),
        u = s(64734),
        m = s(65946),
        p = s(26408);
      function g(e) {
        const {
            title: t,
            tooltip: s,
            getMinimized: a,
            toggleMinimized: i,
            className: r,
            children: o,
            elAdditionalButtons: g,
          } = e,
          h = (0, m.q3)(() => a());
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: (0, c.A)(
                r,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, n.jsxs)("div", {
                  className: (0, c.A)(
                    d.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [t, Boolean(s) && (0, n.jsx)(p.o, { tooltip: s })],
                }),
                (0, n.jsxs)("div", {
                  className: u.SectionTitleButtons,
                  children: [
                    g,
                    (0, n.jsx)(x, { bIsMinimized: h, fnToggleMinimize: i }),
                  ],
                }),
              ],
            }),
            !h && (0, n.jsx)(l.tH, { children: o }),
          ],
        });
      }
      function h(e) {
        const [t, s] = o.useState(Boolean(e.bStartMinimized));
        return (0, n.jsx)(g, {
          ...e,
          getMinimized: () => t,
          toggleMinimized: () => s(!t),
          children: e.children,
        });
      }
      function x(e) {
        const { bIsMinimized: t, fnToggleMinimize: s } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, n.jsx)(a.$n, {
          "data-tooltip-text": (0, i.we)(o),
          onClick: s,
          children: e.bIsMinimized
            ? (0, n.jsx)(r.hz4, {})
            : (0, n.jsx)(r.Xjb, {}),
        });
      }
    },
    57912: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { MeetSteamRoutes: () => me, default: () => pe });
      var n = s(7850),
        a = s(43527),
        i = s(92757),
        r = s(22837),
        o = s(2160),
        c = s(66418),
        d = s(90626),
        l = s(6379),
        u = s(87709),
        m = s(95583),
        p = s(22797),
        g = s(61859),
        h = s(43068),
        x = s(84811);
      function _(e) {
        const { gid: t } = (0, i.g)(),
          [s, a] = (0, d.useState)(!0);
        if (
          (d.useEffect(() => {
            s && (l.O3.Init(), a(!1));
          }, [s]),
          s)
        )
          return (0, n.jsx)(p.t, {
            string: (0, g.we)("#Loading"),
            position: "center",
          });
        const _ = l.O3.GetClanEventModel(t);
        return _
          ? (0, n.jsxs)(x.tH, {
              children: [
                !_.BIsUnlistedEvent() &&
                  (0, n.jsx)("div", {
                    children:
                      "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                  }),
                (0, n.jsx)(m.jA, {
                  lang: (0, r.sfN)(c.TS.LANGUAGE),
                  event: _,
                  adminPanel:
                    c.TS.EREALM === o.TU.k_ESteamRealmChina
                      ? (0, n.jsx)(h.P, { eventModel: _ })
                      : (0, n.jsx)(u.g, { eventModel: _, bSupportsSticky: !0 }),
                }),
              ],
            })
          : null;
      }
      var j = s(37085),
        S = s(51614),
        f = s(41735),
        v = s.n(f),
        y = s(62216),
        M = s(44165),
        T = s(30470),
        C = s(24484);
      function w(e, t, s) {
        for (const n of e)
          if (n.group_id === t) {
            const e = n.sessions.find((e) => e.id === s);
            if (e) return { group: n, session: e };
          }
        return { group: null, session: null };
      }
      function N(e, t) {
        const s = (0, M.f1)(),
          [n] = (0, d.useState)(() =>
            (0, C.Tc)("registrations", "application_config")
              .map((e) => ((e.userReg = JSON.parse(e.jsondata)), e))
              .sort((t, s) => {
                const n = w(
                    e.jsondata.meet_steam_groups,
                    t.group_id,
                    t.session_id,
                  ),
                  a = w(e.jsondata.meet_steam_groups, s.group_id, s.session_id);
                return (
                  (a?.session?.rtime_start || 0) -
                  (n?.session?.rtime_start || 0)
                );
              })
              .map((t) => {
                const n = w(
                  e.jsondata.meet_steam_groups,
                  t.group_id,
                  t.session_id,
                );
                return (
                  (t.relativeToToday = (function (e, t) {
                    if (!e) return "past";
                    const s = (0, y.Sk)(e),
                      n = (0, y.Ue)(e.rtime_start, s),
                      a = void 0 !== t ? new Date(1e3 * t) : new Date(),
                      i = new Date(a.getFullYear(), a.getMonth(), a.getDate()),
                      r = new Date(
                        a.getFullYear(),
                        a.getMonth(),
                        a.getDate() + 1,
                      );
                    return n >= i && n < r
                      ? "today"
                      : n < i
                        ? "past"
                        : "future";
                  })(n?.session, s)),
                  (t.rtSesssionTime = n?.session?.rtime_start ?? 0),
                  t
                );
              }),
          ),
          a = t?.trim().toLowerCase() || "";
        return (0, d.useMemo)(
          () =>
            n.filter(
              (e) =>
                !a.length ||
                e.userReg.name?.toLowerCase().includes(a) ||
                e.userReg.company?.toLowerCase().includes(a) ||
                e.userReg.guest_names?.find((e) =>
                  e.toLowerCase().includes(a),
                ) ||
                e.userReg.email_override?.toLowerCase().includes(a),
            ),
          [n, t],
        );
      }
      function E(e, t) {
        return (0, d.useMemo)(
          () =>
            e.reduce(
              (e, t) => (
                e[t.relativeToToday] || (e[t.relativeToToday] = []),
                e[t.relativeToToday].push(t),
                e
              ),
              { today: [], past: [], future: [] },
            ),
          [e, t],
        );
      }
      var A = s(38390),
        D = s(27144),
        R = s(56283),
        b = s(71298),
        L = s(95034),
        k = s(8905),
        B = s(78395),
        I = s(21869),
        U = s(48479),
        G = s(52038),
        F = s(91675),
        H = s(84933),
        $ = s(15588),
        z = s.n($),
        K = s(29233);
      function O(e) {
        const [t] = (0, L.QD)("gid"),
          s = (0, A.RR)(t),
          a = (0, r.sfN)(T.TS.LANGUAGE);
        return s
          ? (0, n.jsxs)("div", {
              className: z().Ctn,
              children: [
                (0, n.jsxs)("div", {
                  className: z().EventName,
                  children: [
                    (0, n.jsx)("h2", { children: s.GetNameWithFallback(a) }),
                    (0, n.jsx)("a", {
                      href: `${T.TS.STORE_BASE_URL}meetsteam/${t}`,
                      target: "_blank",
                      children: "See Event Details",
                    }),
                  ],
                }),
                (0, n.jsx)(q, { eventModel: s }),
              ],
            })
          : (0, n.jsx)(p.t, { string: (0, g.we)("#Loading") });
      }
      function q(e) {
        const { eventModel: t } = e,
          s = E(N(t)),
          [a] = (0, L.QD)("accountid"),
          i = (0, M.f1)();
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("div", {
              className: z().User,
              children: (0, n.jsx)(k.p, { accountID: a }),
            }),
            (0, n.jsx)(P, {
              eventModel: t,
              rgUserRegs: s.today,
              strTitle: "Today " + (0, F.$z)(i),
            }),
            (0, n.jsx)(P, {
              eventModel: t,
              rgUserRegs: s.future,
              bHideIfEmpty: !0,
              strTitle: "Future",
            }),
            (0, n.jsx)(P, {
              eventModel: t,
              rgUserRegs: s.past,
              bHideIfEmpty: !0,
              strTitle: "Past",
            }),
          ],
        });
      }
      function P(e) {
        const {
          eventModel: t,
          rgUserRegs: s,
          bHideIfEmpty: a,
          strTitle: i,
        } = e;
        return 0 == s.length && a
          ? null
          : (0, n.jsx)(U.qx, {
              title: `${i} (${s.length})`,
              bStartMinimized: a,
              children: Boolean(!s || 0 == s.length)
                ? (0, n.jsx)("div", { children: a ? "" : "No registrations" })
                : (0, n.jsx)("div", {
                    children: s
                      .sort((e, t) => e.rtSesssionTime - t.rtSesssionTime)
                      .map((e) =>
                        (0, n.jsx)(
                          J,
                          { eventModel: t, reg: e },
                          `${e.group_id}_${e.session_id}`,
                        ),
                      ),
                  }),
            });
      }
      function Q(e) {
        const { desc: t } = e,
          [s, a] = (0, d.useState)(!1),
          i = (0, d.useCallback)(() => a((e) => !e), []);
        return (0, n.jsx)("div", {
          className: (0, G.A)({
            [z().DescriptionWrapper]: !0,
            [z().Expanded]: s,
          }),
          onClick: i,
          onMouseEnter: () => a(!0),
          onMouseLeave: () => a(!1),
          children: t,
        });
      }
      function J(e) {
        const { reg: t, eventModel: s } = e,
          a = new K.b2(t.steamid).GetAccountID(),
          [i] = (0, D.KT)(t.userReg.accountid),
          [r, o] = (0, d.useState)(!0),
          [c, l] = (0, d.useState)([]),
          [u, m] = (0, d.useState)(!1),
          p = t.userReg,
          { group: g, session: h } = w(
            s.jsondata.meet_steam_groups,
            t.group_id,
            t.session_id,
          ),
          [_, f, y] = (0, H.uD)(),
          M =
            ((N = s.GID),
            (E = a),
            (A = t.group_id),
            (b = t.session_id),
            (0, S.n)({
              mutationFn: async ({ bIncludeSelf: e, rgGuests: t }) => {
                const s = new FormData();
                s.append("sessionid", (0, C.KC)()),
                  s.append("gid", N),
                  s.append("accountid", "" + E),
                  s.append("meetsteam_group_id", "" + A),
                  s.append("meetsteam_session_id", "" + b),
                  s.append("include_self", "" + (e ? 1 : 0)),
                  t?.length && s.append("guests", t.join("|"));
                const n = `${T.TS.STORE_BASE_URL}meetsteam/ajaxupdateattendance`,
                  a = await v().post(n, s, { withCredentials: !0 });
                return a?.data?.success == j.R;
              },
            }));
        var N, E, A, b;
        const L = new Set(
            t.guests_attendance?.length > 0
              ? t.guests_attendance.split("|")
              : [],
          ),
          k = t.attendance_count > L.size,
          B = (e, t, s, a) =>
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("span", {
                  className: z().GuestTitle,
                  children: [e, ":", " "],
                }),
                t,
                s &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      " ",
                      (0, n.jsxs)("span", {
                        className: z().GuestEmail,
                        children: ["(", s, ")"],
                      }),
                    ],
                  }),
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    " ",
                    "-",
                    (0, n.jsx)("span", {
                      children: a ? "✅ checked in" : "☐ not checked in",
                    }),
                  ],
                }),
              ],
            });
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(V, { group: g, session: h }),
            Boolean(u)
              ? (0, n.jsx)("div", {
                  className: z().CheckedIn,
                  children: "Attendee has been checked in",
                })
              : (0, n.jsxs)("div", {
                  className: z().RegisteredUsers,
                  children: [
                    (0, n.jsx)(R.Yh, {
                      label: (0, n.jsx)(n.Fragment, {
                        children: B(
                          "Attendee",
                          p.name || i.persona_name,
                          p.email_override,
                          k,
                        ),
                      }),
                      checked: r,
                      onChange: o,
                    }),
                    Boolean(p.guest_names?.length > 0) &&
                      (0, n.jsx)(n.Fragment, {
                        children: p.guest_names.map((e) =>
                          (0, n.jsx)(
                            R.Yh,
                            {
                              label: (0, n.jsx)(n.Fragment, {
                                children: B("Guest", e, void 0, L.has(e)),
                              }),
                              checked: c.includes(e),
                              onChange: (t) => {
                                l((s) =>
                                  t
                                    ? s.includes(e)
                                      ? s
                                      : [...s, e]
                                    : s.filter((t) => t !== e),
                                );
                              },
                            },
                            t.group_id + "_" + t.session_id + "_" + e,
                          ),
                        ),
                      }),
                    (0, n.jsx)(R.jn, {
                      onClick: f,
                      children: "Check in selected people",
                    }),
                  ],
                }),
            (0, n.jsx)(I.E, {
              active: _,
              children: (0, n.jsx)(x.tH, {
                children: (0, n.jsx)(Y, {
                  closeModal: y,
                  bIncludeSelf: r,
                  rgGuestsAttending: c,
                  fnMarkAttendance: M,
                  fnOnSuccess: () => m(!0),
                }),
              }),
            }),
          ],
        });
      }
      function Y(e) {
        const {
            closeModal: t,
            bIncludeSelf: s,
            rgGuestsAttending: a,
            fnMarkAttendance: i,
            fnOnSuccess: r,
          } = e,
          o = (0, b.vs)();
        return o.bLoading
          ? (0, n.jsx)(b.Hh, {
              state: o,
              strDialogTitle: (0, g.we)("#Saving"),
              closeModal: t,
            })
          : (0, n.jsx)(B.o0, {
              onCancel: t,
              strTitle: (0, g.we)("#Button_Submit"),
              bAllowFullSize: !0,
              onOK: async () => {
                o.fnSetLoading(!0),
                  i
                    .mutateAsync({ bIncludeSelf: s, rgGuests: a })
                    .then((e) => {
                      e
                        ? (r(),
                          o.fnSetStrSuccess(
                            "Success! This person has been checked in.",
                          ))
                        : o.fnSetStrError(
                            (0, g.we)("#Login_Error_Network_Description"),
                          );
                    })
                    .catch(() =>
                      o.fnSetStrError(
                        (0, g.we)("#Login_Error_Network_Description"),
                      ),
                    );
              },
              children: "Mark as checked in?",
            });
      }
      function V(e) {
        const { session: t, group: s } = e,
          {
            sDisplayTimeZone: a,
            rtime_start: i,
            rtime_end: o,
          } = (0, y._t)(e.session),
          c = (0, y.rF)(i, a),
          d = (0, y.Mr)(i, o, a);
        return t && s
          ? (0, n.jsxs)("div", {
              className: z().SessionInfo,
              children: [
                (0, n.jsx)("div", {
                  className: z().SessionName,
                  children: s.localized_session_title[r.Bhc],
                }),
                (0, n.jsxs)("div", {
                  className: z().SessionTime,
                  children: [c, " @ ", (0, n.jsx)("b", { children: d })],
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(Q, {
                    desc: `Description: ${s.localized_session_description[r.Bhc] || ""}`,
                  }),
                }),
                !1,
              ],
            })
          : (0, n.jsx)("div", { children: "Session Infomrmation Missing" });
      }
      var W = s(97058),
        Z = s(29645),
        X = s.n(Z),
        ee = s(12155),
        te = s(14771),
        se = s(78327);
      function ne(e) {
        const t = new Date(e.getTime());
        return t.setHours(0, 0, 0, 0), t;
      }
      function ae(e) {
        const [t] = (0, L.QD)("gid"),
          s = (0, A.RR)(t),
          a = (0, r.sfN)(T.TS.LANGUAGE),
          [i, o] = (0, d.useState)("");
        return s
          ? (0, n.jsxs)("div", {
              className: X().Ctn,
              children: [
                (0, n.jsxs)("div", {
                  className: X().EventName,
                  children: [
                    (0, n.jsx)("h1", { children: s.GetNameWithFallback(a) }),
                    (0, n.jsx)("a", {
                      href: `${T.TS.STORE_BASE_URL}meetsteam/${t}`,
                      target: "_blank",
                      children: "See Event Details",
                    }),
                  ],
                }),
                (0, n.jsx)(oe, { eventModel: s }),
                (0, n.jsx)("div", {
                  className: X().AtendeeSearchRow,
                  children: (0, n.jsx)(R.pd, {
                    type: "text",
                    label: "Search for an attendee",
                    value: i,
                    bShowClearAction: !0,
                    onChange: (e) => o(e.currentTarget.value || ""),
                    placeholder: "Type name or partner or email address",
                  }),
                }),
                (0, n.jsx)(ie, { eventModel: s, strSearch: i.toLowerCase() }),
              ],
            })
          : (0, n.jsx)(p.t, { string: (0, g.we)("#Loading") });
      }
      function ie(e) {
        const { eventModel: t, strSearch: s } = e,
          a = N(t, s),
          [i, r] = (0, d.useState)(null),
          [o, c] = (0, d.useMemo)(() => {
            const e = new Map();
            return (
              a.forEach((t) => {
                [t.userReg.name, ...(t.userReg.guest_names || [])].forEach(
                  (s) => {
                    const n = s.toLowerCase();
                    e.has(n) ? e.get(n).push(t) : e.set(n, [t]);
                  },
                );
              }),
              [e, Array.from(e.keys()).sort()]
            );
          }, [a]);
        return (
          d.useEffect(() => {
            r(null);
          }, [s]),
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("h3", { children: "Attendees" }),
              Boolean(i)
                ? (0, n.jsx)(re, {
                    eventModel: t,
                    rgSelected: i,
                    strSearch: s,
                    onCleanSelection: () => r(null),
                  })
                : (0, n.jsx)(n.Fragment, {
                    children: c
                      .filter((e) => !s || e.includes(s))
                      .map((e) =>
                        (0, n.jsx)(
                          "div",
                          {
                            className: X().AttendeeRow,
                            children: (0, n.jsx)(R.$n, {
                              onClick: () => r(o.get(e.toLowerCase())),
                              children: e,
                            }),
                          },
                          e,
                        ),
                      ),
                  }),
            ],
          })
        );
      }
      function re(e) {
        const {
            eventModel: t,
            rgSelected: s,
            strSearch: a,
            onCleanSelection: i,
          } = e,
          r = (0, M.f1)(),
          o = E(s, a);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("div", {
              className: X().AtendeeListButtonRow,
              children: (0, n.jsxs)(R.$n, {
                onClick: i,
                children: [
                  (0, n.jsx)(ee.uMb, { className: X().BackToListIcon }),
                  "Back to full list",
                ],
              }),
            }),
            (0, n.jsx)(P, {
              eventModel: t,
              rgUserRegs: o.today,
              strTitle: "Today " + (0, g.$z)(r),
            }),
            (0, n.jsx)(P, {
              eventModel: t,
              rgUserRegs: o.future,
              bHideIfEmpty: !0,
              strTitle: "Future",
            }),
            (0, n.jsx)(P, {
              eventModel: t,
              rgUserRegs: o.past,
              bHideIfEmpty: !0,
              strTitle: "Past",
            }),
          ],
        });
      }
      function oe(e) {
        const { eventModel: t } = e,
          s = (0, M.s4)(),
          [a, i] = d.useState(!1),
          { rgGroupedSessions: r, bMoreSessions: o } = d.useMemo(() => {
            const e = t?.jsondata?.meet_steam_groups?.flatMap((e) =>
                e.sessions.map((t) => {
                  const s = (0, y.Sk)(t),
                    n = (0, y.Ue)(t.rtime_start, s);
                  return { group: e, session: t, displayDate: n };
                }),
              ),
              n = e?.filter((e) => a || ne(e.displayDate) >= ne(s)),
              i = a || (e && e.length > n.length);
            var r;
            return {
              rgGroupedSessions:
                ((r = (e) => ne(e.displayDate)),
                (n ?? []).reduce((e, t) => {
                  const s = r(t),
                    n = Math.floor(s.getTime() / 1e3),
                    a = e.get(n) || [];
                  return e.set(n, [...a, t]), e;
                }, new Map())),
              bMoreSessions: i,
            };
          }, [t?.jsondata?.meet_steam_groups, s, a]),
          c = d.useMemo(() => {
            const e = (0, se.Tc)("registrations", "application_config");
            if (e && "object" == typeof e)
              return e.reduce((e, t) => {
                const s = `${t.group_id}_${t.session_id}`,
                  n = e.get(s) ?? [];
                return n.push(t), e.set(s, n), e;
              }, new Map());
          }, []);
        if (!c || (0 == r.size && !o)) return;
        const l =
            Array.from(r.keys()).reduce(
              (e, t) => (null == e || (1e3 * t > s.getTime() && t < e) ? t : e),
              void 0,
            ) ?? 0,
          u = Array.from(r.keys()).some((e) =>
            (0, te.JD)(s, new Date(1e3 * e)),
          );
        return (0, n.jsxs)("div", {
          className: X().DisplayAllDaysCtn,
          children: [
            o &&
              (0, n.jsx)(R.Yh, {
                label: "Show past events",
                checked: a,
                onChange: i,
              }),
            (0, n.jsx)("div", {
              className: X().DisplayDaysCtn,
              children: Array.from(r.keys()).map((e) =>
                (0, n.jsx)(
                  ce,
                  {
                    eventModel: t,
                    date: new Date(1e3 * e),
                    sessionsAndGroups: r.get(e),
                    rgRegistrationInfo: c,
                    isToday: (0, te.JD)(
                      u ? s : new Date(1e3 * l),
                      new Date(1e3 * e),
                    ),
                  },
                  e,
                ),
              ),
            }),
          ],
        });
      }
      function ce(e) {
        const {
          eventModel: t,
          date: s,
          sessionsAndGroups: a,
          rgRegistrationInfo: i,
          isToday: r,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, G.A)(X().DisplayDaySessions, !r && X().NotToday),
          children: [
            (0, n.jsx)("div", {
              className: X().DateName,
              children: (0, g.$w)(s),
            }),
            (0, n.jsx)("div", {
              className: X().DisplayDaySessionsRow,
              children: a.map((e) =>
                (0, n.jsx)(
                  de,
                  {
                    eventModel: t,
                    date: s,
                    registrations:
                      i.get(`${e.group.group_id}_${e.session.id}`) ?? [],
                    group: e.group,
                    session: e.session,
                  },
                  `${e.group.group_id}_${e.session.id}`,
                ),
              ),
            }),
          ],
        });
      }
      function de(e) {
        const {
            eventModel: t,
            date: s,
            group: a,
            session: i,
            registrations: o,
          } = e,
          c = (0, r.sfN)(T.TS.LANGUAGE),
          d = (0, M.s4)(),
          { sDisplayTimeZone: l, rtime_start: u } = (0, y._t)(i),
          m = (0, y.us)(u, l),
          p = o.reduce((e, t) => e + (t.guests_registered ?? 0), 0),
          g = o.reduce(
            (e, t) =>
              e +
              (t.rt_attendance_marked > 0 && t.guests_registered
                ? t.guests_registered
                : 0),
            0,
          ),
          [h, _, f] = (0, H.uD)(),
          w =
            ((N = t.GID),
            (E = a.group_id),
            (A = i.id),
            (0, S.n)({
              mutationFn: async ({ nCapacity: e }) => {
                const t = new FormData();
                t.append("sessionid", (0, C.KC)()),
                  t.append("gid", N),
                  t.append("meetsteam_group_id", "" + E),
                  t.append("meetsteam_session_id", "" + A),
                  t.append("capacity", "" + e);
                const s = `${T.TS.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`,
                  n = await v().post(s, t, { withCredentials: !0 });
                return n?.data?.success == j.R;
              },
            }));
        var N, E, A;
        return (0, n.jsxs)("div", {
          className: X().DisplaySession,
          children: [
            (0, n.jsxs)("div", {
              className: X().Header,
              children: [
                (0, n.jsx)("div", {
                  className: X().SessionName,
                  children:
                    a.localized_session_title[c] ??
                    a.localized_session_title[r.Bhc],
                }),
                (0, n.jsx)("div", { className: X().SessionTime, children: m }),
              ],
            }),
            (0, n.jsx)(ue, {
              title: "Registered:",
              nCount: p,
              nCapacity: i.max_capacity,
            }),
            (0, n.jsx)(ue, {
              title: "Checked in:",
              nCount: g,
              nCapacity: i.max_capacity,
            }),
            ne(s) >= ne(d) &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(R.$n, {
                    className: (0, G.A)(X().SetCapacityButton),
                    onClick: _,
                    children: "Update capacity...",
                  }),
                  (0, n.jsx)(I.E, {
                    active: h,
                    children: (0, n.jsx)(x.tH, {
                      children: (0, n.jsx)(le, {
                        closeModal: f,
                        nCapacity: i.max_capacity ?? 0,
                        fnUpdateCapacity: w,
                        fnOnSuccess: () => window.location.reload(),
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      function le(e) {
        const {
            closeModal: t,
            nCapacity: s,
            fnUpdateCapacity: a,
            fnOnSuccess: i,
          } = e,
          [r, o] = d.useState(s.toString()),
          c = (0, b.vs)();
        return c.bLoading
          ? (0, n.jsx)(b.Hh, {
              state: c,
              strDialogTitle: (0, g.we)("#Saving"),
              closeModal: t,
            })
          : (0, n.jsx)(B.o0, {
              onCancel: t,
              strTitle: (0, g.we)("Update Capacity"),
              bAllowFullSize: !0,
              onOK: async () => {
                c.fnSetLoading(!0);
                const e = Number.isNaN(Number.parseInt(r))
                  ? void 0
                  : Number.parseInt(r);
                a.mutateAsync({ nCapacity: e })
                  .then((e) => {
                    e
                      ? (i(), c.fnSetStrSuccess("Max capacity updated."))
                      : c.fnSetStrError(
                          (0, g.we)("#Login_Error_Network_Description"),
                        );
                  })
                  .catch(() =>
                    c.fnSetStrError(
                      (0, g.we)("#Login_Error_Network_Description"),
                    ),
                  );
              },
              children: (0, n.jsx)(R.pd, {
                className: X().SetCapacityInput,
                label: "New capacity",
                type: "text",
                autoComplete: "off",
                value: r,
                onChange: (e) => o(e.currentTarget.value),
              }),
            });
      }
      function ue(e) {
        const { title: t, nCount: s, nCapacity: a } = e,
          i = s >= a,
          r = Math.min((s / a) * 100, 100),
          o = s > 0 ? `${r}%` : "0%";
        return (0, n.jsxs)("div", {
          className: X().CapacityCtn,
          children: [
            (0, n.jsxs)("span", { children: [t, " ", s, " / ", a] }),
            (0, n.jsx)("div", {
              className: X().CapacityBarMax,
              children: (0, n.jsx)("div", {
                className: (0, G.A)(X().CapacityBarCurrent, i ? X().Full : ""),
                style: { width: o },
              }),
            }),
          ],
        });
      }
      const me = {
        MeetSteamAttendance: () => `${a.B.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${a.B.MeetSteamRoute()}:gid(\\d+)`,
        MeetSteamAttendeeList: () => `${a.B.MeetSteamRoute()}attendeelist`,
      };
      function pe(e) {
        return (0, n.jsxs)(i.dO, {
          children: [
            (0, n.jsx)(i.qh, {
              path: me.MeetSteamAttendance(),
              render: (e) => (0, n.jsx)(O, { ...e }),
            }),
            (0, n.jsx)(i.qh, {
              path: me.MeetSteamAttendeeList(),
              render: (e) => (0, n.jsx)(ae, { ...e }),
            }),
            (0, n.jsx)(i.qh, {
              path: me.MeetSteamEvent(),
              render: (e) => (0, n.jsx)(_, { ...e }),
            }),
            (0, n.jsx)(i.qh, { children: (0, n.jsx)(W.a, {}) }),
          ],
        });
      }
    },
  },
]);

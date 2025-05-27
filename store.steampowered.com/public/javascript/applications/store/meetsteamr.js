/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8620],
  {
    15736: (e) => {
      e.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
    },
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    15588: (e) => {
      e.exports = {
        Ctn: "_3cmUbcgdPxM7o5hl986RgB",
        Row: "yueujW6bRizgc-buB29Dw",
        DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
        Expanded: "mJXTRr0gd2yNafeFp9NOr",
      };
    },
    20019: (e, t, n) => {
      "use strict";
      function a(e) {
        switch (e) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      n.d(t, { U: () => a });
    },
    27144: (e, t, n) => {
      "use strict";
      n.d(t, { B3: () => h, KM: () => f, KT: () => M });
      var a = n(41735),
        r = n.n(a),
        s = n(58632),
        i = n.n(s),
        o = n(90626),
        l = n(20194),
        c = n(75233),
        u = n(17720),
        d = n(68797),
        m = n(78327),
        g = n(56545),
        E = n(37735),
        p = n(23809);
      const _ = "nicknames";
      function f(e) {
        const t = (0, p.KV)(),
          { data: n, isLoading: a } = (0, l.I)({
            queryKey: [_],
            queryFn: async () => {
              const e = new Map();
              if (m.iA.logged_in) {
                const n = g.w.Init(E.dN),
                  a = (await E.xt.GetNicknameList(t, n)).Body().toObject();
                a?.nicknames &&
                  a.nicknames.length > 0 &&
                  a.nicknames.forEach((t) => {
                    e.set(t.accountid, t.nickname);
                  });
              }
              return e;
            },
          });
        return n ? n.get(e) : null;
      }
      const S = new (i())(
          (e) =>
            (async function (e) {
              if (!e || 0 == e.length) return [];
              const t =
                "community" == (0, m.yK)()
                  ? m.TS.COMMUNITY_BASE_URL
                  : m.TS.STORE_BASE_URL;
              if (1 == e.length) {
                const n = { accountid: e[0], origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(a).strErrorMsg}`;
                return [a.data.userinfo];
              }
              {
                const n = { accountids: e.join(","), origin: self.origin },
                  a = await r().get(`${t}actions/ajaxgetmultiavatarpersona`, {
                    params: n,
                  });
                if (
                  !a ||
                  200 != a.status ||
                  1 != a.data?.success ||
                  !a.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, d.H))(a).strErrorMsg}`;
                const s = new Map();
                return (
                  a.data.userinfos.forEach((e) =>
                    s.set(new u.b(e.steamid).GetAccountID(), e),
                  ),
                  e.map((e) => s.get(e))
                );
              }
            })(e),
          { cache: !1 },
        ),
        v = "avatarandpersonas";
      function M(e) {
        const { data: t, isLoading: n } = (0, l.I)({
          queryKey: [v, e],
          queryFn: () => S.load(e),
        });
        return [t, n];
      }
      function h(e) {
        const t = (0, c.jE)(),
          { data: n, isLoading: a } = (0, l.I)({
            queryKey: [v, e],
            queryFn: async () => {
              const n = await S.loadMany(e);
              return (
                n.forEach((e) => {
                  const n = [v, new u.b(e.steamid).GetAccountID()];
                  t.setQueryData(n, e);
                }),
                n
              );
            },
            enabled: e?.length > 0,
          }),
          r = (0, o.useMemo)(() => {
            const e = new Array();
            return (
              n?.forEach((t) => {
                t instanceof Error || e.push(t);
              }),
              e
            );
          }, [n]);
        return a ? null : r;
      }
    },
    8905: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var a = n(90626),
        r = n(17720),
        s = n(27144),
        i = n(15736),
        o = n(78327);
      function l(e) {
        const { accountID: t, bHideWhenNotAvailable: n, bHideName: l } = e,
          [c] = (0, s.KT)(t),
          u = (0, s.KM)(t),
          d = a.useMemo(() => r.b.InitFromAccountID(t), [t]),
          m = `${o.TS.COMMUNITY_BASE_URL}profiles/${d.ConvertTo64BitString()}`;
        return a.createElement(
          a.Fragment,
          null,
          Boolean(!c)
            ? a.createElement(
                a.Fragment,
                null,
                Boolean(!n) && a.createElement("span", null, t),
              )
            : a.createElement(
                "a",
                { href: m },
                a.createElement("img", {
                  className: i.SmallAvatar,
                  src: c.avatar_url,
                  "data-miniprofile": "s" + d.ConvertTo64BitString(),
                }),
                Boolean(!l) &&
                  a.createElement(
                    "span",
                    null,
                    u ? `${u} (${c.persona_name})` : c.persona_name,
                  ),
              ),
        );
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { qx: () => E });
      var a = n(10981),
        r = n(61859),
        s = n(12155),
        i = n(90626),
        o = n(52038),
        l = n(95695),
        c = n(84811),
        u = n(64734),
        d = n(65946),
        m = n(26408);
      function g(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: a,
            toggleMinimized: r,
            className: s,
            children: g,
            elAdditionalButtons: E,
          } = e,
          _ = (0, d.q3)(() => a());
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            {
              className: (0, o.A)(
                s,
                u.SectionTitleHeader,
                u.required_title,
                "SectionTitleHeader",
              ),
            },
            i.createElement(
              "div",
              {
                className: (0, o.A)(
                  l.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && i.createElement(m.o, { tooltip: n }),
            ),
            E,
            i.createElement(p, { bIsMinimized: _, fnToggleMinimize: r }),
          ),
          !_ && i.createElement(c.tH, null, g),
        );
      }
      function E(e) {
        const [t, n] = i.useState(Boolean(e.bStartMinimized));
        return i.createElement(
          g,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function p(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          o = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return i.createElement(
          a.$n,
          { "data-tooltip-text": (0, r.we)(o), onClick: n },
          e.bIsMinimized
            ? i.createElement(s.hz4, null)
            : i.createElement(s.Xjb, null),
        );
      }
    },
    68541: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => W, default: () => Y });
      var a = n(90626),
        r = n(43527),
        s = n(92757),
        i = n(82715),
        o = n(22837),
        l = n(2160),
        c = n(8527),
        u = n(60746),
        d = n(6379),
        m = n(30756),
        g = n(40224),
        E = n(22797),
        p = n(61859),
        _ = n(43068);
      function f(e) {
        const { gid: t } = (0, s.g)(),
          [n, r] = (0, a.useState)(!0);
        if (
          (a.useEffect(() => {
            n &&
              (d.O3.Init(), Promise.all([u.KN.InitGlobal()]).then(() => r(!1)));
          }, [n]),
          n)
        )
          return a.createElement(E.t, {
            string: (0, p.we)("#Loading"),
            position: "center",
          });
        const f = d.O3.GetClanEventModel(t);
        return f
          ? a.createElement(
              i.tH,
              null,
              !f.BIsUnlistedEvent() &&
                a.createElement(
                  "div",
                  null,
                  "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                ),
              a.createElement(g.jA, {
                lang: (0, o.sf)(c.TS.LANGUAGE),
                event: f,
                adminPanel:
                  c.TS.EREALM === l.TU.k_ESteamRealmChina
                    ? a.createElement(_.P, { eventModel: f })
                    : a.createElement(m.g, {
                        eventModel: f,
                        bSupportsSticky: !0,
                      }),
              }),
            )
          : null;
      }
      var S = n(51614),
        v = n(41735),
        M = n.n(v),
        h = n(38390),
        T = n(44165),
        b = n(27144),
        w = n(10981),
        y = n(71298),
        A = n(95034),
        D = n(8905),
        k = n(78395),
        N = n(21869),
        R = n(48479),
        B = n(91675),
        I = n(73745),
        L = n(30470),
        U = n(24484),
        $ = n(15588),
        z = n.n($),
        C = n(52038);
      function F(e) {
        const [t] = (0, A.QD)("gid"),
          n = (0, h.RR)(t),
          r = (0, o.sf)(L.TS.LANGUAGE);
        return n
          ? a.createElement(
              "div",
              { className: z().Ctn },
              a.createElement(
                "div",
                { className: z().Row },
                a.createElement("h2", null, n.GetNameWithFallback(r)),
                a.createElement(
                  "a",
                  {
                    href: `${L.TS.STORE_BASE_URL}meetsteam/${t}`,
                    target: "_blank",
                  },
                  "See Event Details",
                ),
              ),
              a.createElement(j, { eventModel: n }),
            )
          : a.createElement(E.t, { string: (0, p.we)("#Loading") });
      }
      function j(e) {
        const { eventModel: t } = e,
          n = (function (e) {
            const t = (0, T.f1)(),
              [n] = (0, a.useState)(() =>
                (0, U.Tc)("registrations", "application_config")
                  .sort((t, n) => {
                    const a = K(
                        e.jsondata.meet_steam_groups,
                        t.group_id,
                        t.session_id,
                      ),
                      r = K(
                        e.jsondata.meet_steam_groups,
                        n.group_id,
                        n.session_id,
                      );
                    return (
                      (r?.session?.rtime_start || 0) -
                      (a?.session?.rtime_start || 0)
                    );
                  })
                  .map((n) => {
                    const a = K(
                      e.jsondata.meet_steam_groups,
                      n.group_id,
                      n.session_id,
                    );
                    return (
                      (n.relativeToToday = (function (e, t) {
                        const n = new Date(1e3 * e),
                          a = void 0 !== t ? new Date(1e3 * t) : new Date(),
                          r = new Date(
                            a.getFullYear(),
                            a.getMonth(),
                            a.getDate(),
                          ),
                          s = new Date(
                            a.getFullYear(),
                            a.getMonth(),
                            a.getDate() + 1,
                          );
                        return n >= r && n < s
                          ? "today"
                          : n < r
                            ? "past"
                            : "future";
                      })(a?.session?.rtime_start || 0, t)),
                      n
                    );
                  }),
              );
            return (0, a.useMemo)(
              () =>
                n.reduce(
                  (e, t) => (
                    e[t.relativeToToday] || (e[t.relativeToToday] = []),
                    e[t.relativeToToday].push(t),
                    e
                  ),
                  { today: [], past: [], future: [] },
                ),
              [n],
            );
          })(t),
          [r] = (0, A.QD)("accountid"),
          s = (0, T.f1)();
        return a.createElement(
          "div",
          null,
          a.createElement(D.p, { accountID: r }),
          a.createElement("br", null),
          a.createElement("br", null),
          a.createElement("br", null),
          a.createElement(x, {
            eventModel: t,
            rgUserRegs: n.today,
            strTitle: "Today " + (0, B.$z)(s),
          }),
          a.createElement(x, {
            eventModel: t,
            rgUserRegs: n.future,
            bHideIfEmpty: !0,
            strTitle: "Future",
          }),
          a.createElement(x, {
            eventModel: t,
            rgUserRegs: n.past,
            bHideIfEmpty: !0,
            strTitle: "Past",
          }),
        );
      }
      function x(e) {
        const {
          eventModel: t,
          rgUserRegs: n,
          bHideIfEmpty: r,
          strTitle: s,
        } = e;
        return 0 == n.length && r
          ? null
          : a.createElement(
              R.qx,
              { title: `${s} (${n.length})`, bStartMinimized: r },
              Boolean(!n || 0 == n.length)
                ? a.createElement("div", null, r ? "" : "No registrations")
                : a.createElement(
                    "div",
                    null,
                    n.map((e) =>
                      a.createElement(O, {
                        key: `${e.group_id}_${e.session_id}`,
                        eventModel: t,
                        reg: e,
                      }),
                    ),
                  ),
            );
      }
      function G(e) {
        const { desc: t } = e,
          [n, r] = (0, a.useState)(!1),
          s = (0, a.useCallback)(() => r((e) => !e), []);
        return a.createElement(
          "div",
          {
            className: (0, C.A)({
              [z().DescriptionWrapper]: !0,
              [z().Expanded]: n,
            }),
            onClick: s,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
          },
          t,
        );
      }
      function O(e) {
        const { reg: t, eventModel: n } = e,
          [r] = (0, A.QD)("accountid"),
          [s] = (0, b.KT)(r),
          [o, l] = (0, a.useState)([]),
          [c, u] = (0, a.useState)(!1),
          d = (0, a.useMemo)(() => JSON.parse(t.jsondata), [t]),
          { group: m, session: g } = K(
            n.jsondata.meet_steam_groups,
            t.group_id,
            t.session_id,
          ),
          [E, _, f] = (0, I.uD)(),
          v =
            ((h = n.GID),
            (T = r),
            (y = t.group_id),
            (D = t.session_id),
            (0, S.n)({
              mutationFn: async ({ rgGuests: e }) => {
                const t = new FormData();
                t.append("sessionid", L.TS.SESSIONID),
                  t.append("gid", h),
                  t.append("accountid", "" + T),
                  t.append("meetsteam_group_id", "" + y),
                  t.append("meetsteam_session_id", "" + D),
                  e?.length && t.append("guests", e.join("|"));
                const n = `${L.TS.STORE_BASE_URL}meetsteam/ajaxupdateattendance`,
                  a = await M().post(n, t, { withCredentials: !0 });
                return 1 == a?.data?.success;
              },
            }));
        var h, T, y, D;
        return a.createElement(
          "div",
          null,
          a.createElement(H, { group: m, session: g }),
          Boolean(c)
            ? a.createElement(
                "div",
                null,
                a.createElement("br", null),
                a.createElement("b", null, "Successful Attendance Registered"),
              )
            : a.createElement(
                a.Fragment,
                null,
                a.createElement(w.Yh, {
                  label: "Attendee: " + d.name || 0,
                  checked: !0,
                  onChange: (e) => {},
                }),
                Boolean(d.guest_names?.length > 0) &&
                  a.createElement(
                    a.Fragment,
                    null,
                    d.guest_names.map((e) =>
                      a.createElement(w.Yh, {
                        key: t.group_id + "_" + t.session_id + "_" + e,
                        label: "Guest Name: " + e,
                        checked: o.includes(e),
                        onChange: (t) => {
                          l((n) =>
                            t
                              ? n.includes(e)
                                ? n
                                : [...n, e]
                              : n.filter((t) => t !== e),
                          );
                        },
                      }),
                    ),
                  ),
                a.createElement(
                  w.jn,
                  { onClick: _ },
                  (0, p.we)("#Button_Submit"),
                ),
              ),
          a.createElement(
            N.E,
            { active: E },
            a.createElement(
              i.tH,
              null,
              a.createElement(q, {
                closeModal: f,
                rgGuestsAttending: o,
                fnMarkAttendance: v,
                fnOnSuccess: () => u(!0),
              }),
            ),
          ),
        );
      }
      function q(e) {
        const {
            closeModal: t,
            rgGuestsAttending: n,
            fnMarkAttendance: r,
            fnOnSuccess: s,
          } = e,
          i = (0, y.vs)();
        return i.bLoading
          ? a.createElement(y.Hh, {
              state: i,
              strDialogTitle: (0, p.we)("#Saving"),
              closeModal: t,
            })
          : a.createElement(
              k.o0,
              {
                onCancel: t,
                strTitle: (0, p.we)("#Button_Submit"),
                bAllowFullSize: !0,
                onOK: async () => {
                  i.fnSetLoading(!0),
                    r
                      .mutateAsync({ rgGuests: n })
                      .then((e) => {
                        e
                          ? (s(),
                            i.fnSetStrSuccess("Success! Attendance Marked."))
                          : i.fnSetStrError(
                              (0, p.we)("#Login_Error_Network_Description"),
                            );
                      })
                      .catch(() =>
                        i.fnSetStrError(
                          (0, p.we)("#Login_Error_Network_Description"),
                        ),
                      );
                },
              },
              "Mark Attendance?",
            );
      }
      function H(e) {
        const { session: t, group: n } = e;
        return t && n
          ? a.createElement(
              "div",
              null,
              a.createElement("hr", null),
              a.createElement(
                "div",
                null,
                "Title: ",
                n.localized_session_title[0],
              ),
              a.createElement(
                "div",
                null,
                a.createElement(G, {
                  desc: `Description: ${n.localized_session_description[0] || ""}`,
                }),
              ),
              a.createElement(
                "div",
                null,
                "Time:",
                (0, B._l)(t.rtime_start, !1, !0),
                " @",
                a.createElement(
                  "b",
                  null,
                  (0, B.Vx)(t.rtime_start, t.rtime_end, !0),
                ),
              ),
              "dev" == L.TS.WEB_UNIVERSE &&
                a.createElement(
                  "div",
                  null,
                  "Rtime Start (Dev only): ",
                  t.rtime_start,
                ),
            )
          : a.createElement("div", null, "Session Infomrmation Missing");
      }
      function K(e, t, n) {
        for (const a of e)
          if (a.group_id === t) {
            const e = a.sessions.find((e) => e.id === n);
            if (e) return { group: a, session: e };
          }
        return { group: null, session: null };
      }
      var P = n(97058);
      const W = {
        MeetSteamAttendance: () => `${r.B.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${r.B.MeetSteamRoute()}:gid(\\d+)`,
      };
      function Y(e) {
        return a.createElement(
          s.dO,
          null,
          a.createElement(s.qh, {
            path: W.MeetSteamAttendance(),
            render: (e) => a.createElement(F, { ...e }),
          }),
          a.createElement(s.qh, {
            path: W.MeetSteamEvent(),
            render: (e) => a.createElement(f, { ...e }),
          }),
          a.createElement(s.qh, null, a.createElement(P.a, null)),
        );
      }
    },
  },
]);

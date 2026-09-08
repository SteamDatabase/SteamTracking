/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7403],
  {
    1397: (e) => {
      e.exports = {
        Column: "_3l7NrcIIw_fedlHdVwJMVE",
        controls: "_3PGiW8qQcZDfnK9rOz7sjY",
        EditorCtn: "_2tY4qnv8tygCT7s94cB4vX",
        AddNew: "JBYdBhACB7UzXP4l_tpF2",
        DialogCtn: "Hd3q3Z7if0Z5H7rKMfqGN",
        ParticipantRow: "_3wHfIq4f1KlUL4-fKL0jLv",
        EventDescriptionField: "_3WxO3z6DufUbRu-axJjjqp",
      };
    },
    28516: (e) => {
      e.exports = {
        EditorCtn: "_2h37cwEb2SfJphgpbu-dPv",
        controls: "kI20RMKnHD3qdQhl-Hr4K",
      };
    },
    63287: (e) => {
      e.exports = {
        DialogCtn: "_9JDWJYvoHTETKmebCO7iE",
        PollArea: "_1h-JdwvtVK38j8M4EXeUah",
        OptionInset: "_5o_Ifm1O6jf-4Iq4Kv07F",
        AdminOptions: "_1Kt8VfgLBvg0tD86og8ps7",
      };
    },
    37341: (e) => {
      e.exports = {
        Hover: "_1lo3nIamSX1TzzE4TlhFXA",
        Link: "_1ds3uh7ntoekPm635F2Ziv",
        LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
      };
    },
    77403: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => zt });
      var o = s(7850),
        n = s(90286),
        l = s(26555),
        i = s(22145),
        a = s(69956),
        r = s(28106),
        d = s(71727),
        c = s(96640),
        u = s(79216);
      var _ = s(90626),
        p = s(70995),
        m = s(74410),
        h = s(68255),
        x = s(9154),
        f = s(72421),
        v = s(52038),
        j = s(61859),
        g = s(73745),
        b = s(63226),
        M = s(86665),
        E = s(48298);
      function w(e) {
        const {
            videoID: t,
            align: s,
            editModel: n,
            selected: l,
            setAttrs: i,
            focusView: a,
          } = e,
          [r, d, c] = (0, g.uD)(),
          u = _.useCallback(() => {
            c(), a();
          }, [c, a]),
          p = _.useCallback(
            (e, t) => {
              i({ videoID: e, align: t }), u();
            },
            [i, u],
          );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            r &&
              (0, o.jsx)(k, {
                videoID: t,
                align: s,
                bEditing: !0,
                hideModal: u,
                onSave: p,
              }),
            (0, o.jsxs)(E.rK, {
              className: (0, v.A)(b.PreviewYoutubeEditor, l && b.Selected),
              children: [
                (0, o.jsx)(E.h5, {
                  onEditClick: d,
                  onDeleteClick: e.removeNode,
                  bStrongShadows: !0,
                }),
                l && (0, o.jsx)("div", { className: b.SelectionOverlay }),
                (0, o.jsx)(M.Bm, {
                  event: n.GetEventModel(),
                  strTag: "previewyoutube",
                  args: { "": `${t};${s}` },
                  rawargs: `${t};${s}`,
                  showErrorInfo: !0,
                }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        const {
            videoID: t = "",
            align: s = "",
            bEditing: n = !1,
            hideModal: l,
            onSave: i,
          } = e,
          [a, r] = _.useState(s || m.V2.full),
          [d, c] = _.useState(t ? `https://www.youtube.com/watch?v=${t}` : ""),
          [u, v] = _.useState(void 0),
          g = _.useCallback(() => {
            const { strVideoID: e } = (0, p.XU)(d);
            return (
              e ? i(e, a) : v((0, j.we)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [d, a, i]),
          M = _.useCallback((e) => {
            e && (e.element.focus(), e.element.select());
          }, []);
        return (0, o.jsx)(x.EN, {
          active: !0,
          children: (0, o.jsxs)(f._, {
            strTitle: (0, j.we)("#EventEditor_InsertYouTube"),
            closeModal: l,
            strOKText: n
              ? (0, j.we)("#Button_Save")
              : (0, j.we)("#EventEditor_InsertYouTube"),
            onOK: g,
            children: [
              u && (0, o.jsx)("div", { className: b.Error, children: u }),
              (0, o.jsx)(h.pd, {
                label: (0, j.we)("#EventEditor_InsertYouTube_URL"),
                placeholder: (0, j.we)("#EventEditor_InsertYouTube_Placholder"),
                value: d,
                ref: M,
                onChange: (e) => c(e.currentTarget.value),
              }),
              (0, o.jsxs)(h.o1, {
                label: (0, j.we)("#EventEditor_InsertYouTube_Position"),
                children: [
                  (0, o.jsx)(h.Od, {
                    checked: a == m.V2.left,
                    onChange: (e) => e && r(m.V2.left),
                    label: (0, j.we)("#EventEditor_InsertYouTube_Left"),
                  }),
                  (0, o.jsx)(h.Od, {
                    checked: a == m.V2.right,
                    onChange: (e) => e && r(m.V2.right),
                    label: (0, j.we)("#EventEditor_InsertYouTube_Right"),
                  }),
                  (0, o.jsx)(h.Od, {
                    checked: a == m.V2.full,
                    onChange: (e) => e && r(m.V2.full),
                    label: (0, j.we)("#EventEditor_InsertYouTube_Full"),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var D = s(64753),
        C = s(69001),
        y = s(25888),
        S = s(65946),
        T = s(26161),
        I = s(3930),
        P = s(4869),
        U = s(78395),
        G = s(21869),
        N = s(30175),
        O = s(1397),
        B = s.n(O),
        A = s(22837),
        z = s(81393),
        V = s(63556),
        R = s(44165),
        F = s(95695),
        L = s(99637),
        K = s(62490),
        Y = s(91675),
        q = s(14771),
        Q = s(87937),
        $ = s(61819),
        H = s(88942),
        X = s(78327),
        J = s(41735),
        W = s.n(J),
        Z = s(26408);
      function ee(e) {
        const { hideModal: t, fnUpdateSession: s } = e,
          [n, l] = (0, _.useState)(() => re(!0, null)),
          [i, a] = (0, _.useState)(() => de(!0, null)),
          [r] = (0, S.q3)(() => [i.location_type]);
        return (0, o.jsx)(G.E, {
          active: !0,
          children: (0, o.jsx)(U.o0, {
            strTitle: (0, j.we)("#MeetSteam_create_title"),
            onOK: () => s(n, i),
            closeModal: () => {
              a(de(!0, null)), l(re(!0, null)), t();
            },
            bOKDisabled: null == !r,
            children: (0, o.jsxs)("div", {
              className: B().DialogCtn,
              children: [
                (0, o.jsx)(oe, { group: n, fnSetGroup: l }),
                (0, o.jsx)(le, { session: i, fnSetSession: a }),
              ],
            }),
          }),
        });
      }
      function te(e) {
        const { hideModal: t, groupInput: s, fnUpdateGroupSession: n } = e,
          [l, i] = (0, _.useState)(() => re(!1, s));
        return (0, o.jsx)(G.E, {
          active: !0,
          children: (0, o.jsx)(U.o0, {
            strTitle: (0, j.we)("#MeetSteam_edit_title"),
            onOK: () => {
              n(l), t();
            },
            onCancel: () => {
              i(re(!1, s)), t();
            },
            children: (0, o.jsx)("div", {
              className: B().DialogCtn,
              children: (0, o.jsx)(oe, { group: l, fnSetGroup: i }),
            }),
          }),
        });
      }
      function se(e) {
        const {
            bCreate: t,
            hideModal: s,
            sessionInput: n,
            fnUpdateSession: l,
          } = e,
          [i, a] = (0, _.useState)(() => de(t, n)),
          [r] = (0, S.q3)(() => [i.location_type]);
        return (0, o.jsx)(G.E, {
          active: !0,
          children: (0, o.jsx)(U.o0, {
            strTitle: (0, j.we)(
              t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
            ),
            onOK: () => {
              l(i), s();
            },
            onCancel: () => {
              a(de(t, n)), s();
            },
            bOKDisabled: !r,
            children: (0, o.jsx)("div", {
              className: B().DialogCtn,
              children: (0, o.jsx)(le, { session: i, fnSetSession: a }),
            }),
          }),
        });
      }
      function oe(e) {
        const { group: t, fnSetGroup: s } = e,
          n = (0, V.E)();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(h.pd, {
              type: "text",
              label: (0, j.we)("#MeetSteam_edit_session_name"),
              value: j.NT.Get(t.localized_session_title, n),
              onChange: (e) => {
                const o = { ...t };
                (o.localized_session_title = j.NT.Set(
                  o.localized_session_title,
                  n,
                  e.currentTarget.value,
                )),
                  s(o);
              },
            }),
            (0, o.jsx)(h.JU, {
              children: (0, j.we)("#MeetSteam_edit_session_desc"),
            }),
            (0, o.jsx)("textarea", {
              className: (0, v.A)(
                "DialogTextInputBase",
                B().EventDescriptionField,
              ),
              value: j.NT.Get(t.localized_session_description, n),
              rows: 5,
              onChange: (e) => {
                const o = { ...t };
                (o.localized_session_description = j.NT.Set(
                  o.localized_session_description,
                  n,
                  e.currentTarget.value,
                )),
                  s(o);
              },
            }),
            (0, o.jsx)(h.pd, {
              type: "text",
              label: "Intended Audience",
              tooltip:
                "A short descriptions for whom then event is designed for to help partners self select",
              value: j.NT.Get(t.localized_intended_audience, n),
              onChange: (e) => {
                const o = { ...t };
                (o.localized_intended_audience = j.NT.Set(
                  o.localized_intended_audience,
                  n,
                  e.currentTarget.value,
                )),
                  s(o);
              },
            }),
            (0, o.jsxs)(h.JU, {
              children: [
                "FAQ ",
                (0, o.jsx)(Z.o, {
                  tooltip:
                    "Optional FAQ section which appears in the pop-up display and hidden by default",
                }),
              ],
            }),
            (0, o.jsx)("textarea", {
              className: (0, v.A)(
                "DialogTextInputBase",
                B().EventDescriptionField,
              ),
              value: j.NT.Get(t.localized_sesssion_faq, n),
              rows: 5,
              onChange: (e) => {
                const o = { ...t };
                (o.localized_sesssion_faq = j.NT.Set(
                  o.localized_sesssion_faq,
                  n,
                  e.currentTarget.value,
                )),
                  s(o);
              },
            }),
            (0, o.jsx)(h.Yh, {
              checked: t.ask_registration_question,
              onChange: (e) => {
                const o = { ...t };
                (o.ask_registration_question = e), s(o);
              },
              label:
                "Ask partner to tell us what they want to learn from the sessions",
            }),
            (0, o.jsx)(ne, { ...e }),
          ],
        });
      }
      function ne(e) {
        var t;
        const { group: s, fnSetGroup: n } = e,
          [l, i] = (0, _.useState)(
            (null === (t = s.group_visibility_tokens) || void 0 === t
              ? void 0
              : t.length) > 0,
          );
        return l
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)("div", {
                  children:
                    "By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.",
                }),
                s.group_visibility_tokens.map((e, t) =>
                  (0, o.jsx)(
                    h.pd,
                    {
                      type: "number",
                      min: "10000",
                      max: "99999",
                      value: e || 1e4,
                      onChange: (e) => {
                        const o = { ...s };
                        (o.group_visibility_tokens[t] = Number.parseInt(
                          e.currentTarget.value,
                        )),
                          n(o);
                      },
                      label: "Visibility Token",
                    },
                    "token" + e + "_" + t,
                  ),
                ),
                (0, o.jsx)(h.$n, {
                  onClick: () => {
                    const e = { ...s };
                    (e.group_visibility_tokens = [
                      ...e.group_visibility_tokens,
                      1e4,
                    ]),
                      n(e);
                  },
                  children: "Add Token",
                }),
                Boolean(s.group_visibility_tokens.length > 0) &&
                  (0, o.jsx)(h.$n, {
                    onClick: () => {
                      const e = { ...s };
                      (e.group_visibility_tokens =
                        e.group_visibility_tokens.slice(0, -1)),
                        n(e);
                    },
                    children: "Remove Last Token",
                  }),
              ],
            })
          : (0, o.jsx)(h.Yh, {
              checked: !1,
              onChange: i,
              label: "Change Visibility Options",
            });
      }
      function le(e) {
        const { session: t, fnSetSession: s } = e,
          [n, l, i, a, r, d] = (0, S.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.max_capacity,
            t.max_per_team,
            t.location_type,
            t.in_person_time_zone,
          ]),
          c = [];
        for (let e = 0; e < 4; ++e) c.push({ data: e, label: e });
        const u = Math.max(0, Math.floor((l - n) / 60)),
          _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
          p = "in_person" === r ? (null != d ? d : I.hh) : _;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(ae, {
              startTime: t.rtime_start,
              location_type: r,
              fnUpdateLocationAndTZ: (e, o) =>
                s({ ...t, location_type: e, in_person_time_zone: o }),
              in_person_time_zone: d,
            }),
            (0, o.jsx)("br", {}),
            (0, o.jsx)(L.K, {
              strDescription: (0, j.we)("#MeetSteam_edit_start"),
              nEarliestTime: 0,
              fnGetTimeToUpdate: () => n,
              fnSetTimeToUpdate: (e) =>
                s({ ...t, rtime_start: e, rtime_end: e + q.Kp.PerMinute * u }),
              fnIsValidDateTime: () => !0,
              bShowTimeZone: !0,
            }),
            (0, o.jsx)("br", {}),
            (0, o.jsx)(h.pd, {
              type: "number",
              min: 0,
              label: (0, j.we)("#MeetSteam_edit_duration"),
              onChange: (e) => {
                const o = Number.parseInt(e.currentTarget.value);
                s({ ...t, rtime_end: t.rtime_start + q.Kp.PerMinute * o });
              },
              value: u,
            }),
            (0, o.jsx)(ie, {
              rtime_start: n,
              rtime_end: l,
              sDisplayTimeZone: p,
            }),
            (0, o.jsx)("br", {}),
            (0, o.jsx)("br", {}),
            (0, o.jsxs)("div", {
              className: B().ParticipantRow,
              children: [
                (0, o.jsx)(h.pd, {
                  type: "number",
                  value: i,
                  label: (0, j.we)("#MeetSteam_edit_max_capacity"),
                  min: 1,
                  onChange: (e) =>
                    s({
                      ...t,
                      max_capacity: Number.parseInt(e.currentTarget.value),
                    }),
                }),
                (0, o.jsx)(h.m, {
                  controlled: !0,
                  label: (0, j.we)("#MeetSteam_edit_guest_count"),
                  tooltip: (0, j.we)("#MeetSteam_edit_guest_count_ttip"),
                  rgOptions: c,
                  selectedOption: a,
                  onChange: (e) => s({ ...t, max_per_team: e.data }),
                }),
              ],
            }),
          ],
        });
      }
      function ie(e) {
        const { rtime_start: t, rtime_end: s, sDisplayTimeZone: n } = e,
          l = Q.unix(t).tz(I.hh),
          i = Q.unix(t).tz(n),
          a = i.utcOffset() - l.utcOffset(),
          r = Q.unix(s).tz(I.hh),
          d = Q.unix(s).tz(n),
          c = d.utcOffset() - r.utcOffset();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              children: [
                (0, j.we)("#MeetSteam_edit_displayed_start"),
                ": ",
                (0, Y.P0)(i.unix() + 60 * a, !1, i.format("z")),
                " ",
              ],
            }),
            (0, o.jsxs)("div", {
              children: [
                (0, j.we)("#MeetSteam_edit_displayed_end"),
                ": ",
                (0, Y.P0)(d.unix() + 60 * c, !1, d.format("z")),
                " ",
              ],
            }),
          ],
        });
      }
      function ae(e) {
        const {
            startTime: t,
            location_type: s,
            fnUpdateLocationAndTZ: n,
            in_person_time_zone: l,
          } = e,
          i = (function (e) {
            const t = (0, H.I)({
              queryKey: ["timezone", e],
              queryFn: async () => {
                const t = `${X.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                  s = { reference_time: e },
                  o = await W().get(t, { params: s });
                return null == o ? void 0 : o.data.timezones;
              },
            });
            return t.isSuccess ? t.data : [];
          })(t),
          a = _.useMemo(
            () => i.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
            [i],
          ),
          r = (e) => {
            var t;
            return null !== (t = a.get(e)) && void 0 !== t ? t : e;
          },
          d = _.useId(),
          c = _.useId();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("div", {
              id: d,
              className: F.EventEditorTextTitle,
              children: (0, j.we)("#MeetSteam_edit_date_display_title"),
            }),
            (0, o.jsx)("div", {
              id: c,
              className: F.EventEditorTextSubTitle,
              children: (0, j.we)("#MeetSteam_edit_date_display_desc"),
            }),
            (0, o.jsxs)(h.zW, {
              labelId: d,
              descriptionId: c,
              value: s,
              onChange: (e) => n(e, l),
              children: [
                (0, o.jsx)(h.a, {
                  value: "in_person",
                  children: (0, j.we)("#MeetSteam_edit_date_display_in_person"),
                }),
                (0, o.jsx)(h.a, {
                  value: "virtual",
                  children: (0, j.we)("#MeetSteam_edit_date_display_virtual"),
                }),
              ],
            }),
            "in_person" === s &&
              (0, o.jsx)($.Ay, {
                styles: { option: (e) => ({ ...e, color: "#444444" }) },
                isSearchable: !0,
                isMulti: !1,
                options: i.map((e) => ({
                  label: e.friendly_name,
                  value: e.name,
                })),
                defaultMenuIsOpen: !1,
                value: l
                  ? { label: r(l), value: l }
                  : { label: r(I.hh), value: I.hh },
                onChange: (e) => n(s, e.value),
              }),
          ],
        });
      }
      function re(e, t) {
        if (e) {
          const e = y.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_groups;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.group_id == t) >= 0);
          return {
            group_id: t,
            localized_session_title: (0, K.$Y)([], A.bP9, null),
            localized_session_description: (0, K.$Y)([], A.bP9, null),
            localized_sesssion_faq: (0, K.$Y)([], A.bP9, null),
            localized_intended_audience: (0, K.$Y)([], A.bP9, null),
            group_visibility_tokens: [],
            ask_registration_question: !1,
            sessions: [],
          };
        }
        return t
          ? {
              ...t,
              localized_session_description: [
                ...t.localized_session_description,
              ],
              localized_session_title: [...t.localized_session_title],
              localized_sesssion_faq: [...(t.localized_sesssion_faq || [])],
              localized_intended_audience: [
                ...(t.localized_intended_audience || []),
              ],
              group_visibility_tokens: [...(t.group_visibility_tokens || [])],
              ask_registration_question: t.ask_registration_question,
            }
          : ((0, z.wT)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null);
      }
      function de(e, t) {
        if (e) {
          const e = R.HD.GetTimeNowWithOverride(),
            t = y.mh.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            s =
              null == t ? void 0 : t.reduce((e, t) => e.concat(t.sessions), []);
          let o = 0;
          do {
            o = Math.floor(1e4 + 9e4 * Math.random());
          } while (s && s.findIndex((e) => e.id == o) >= 0);
          const n = 3600 * Math.ceil(e / 3600);
          return {
            id: o,
            rtime_start: n + q.Kp.PerDay,
            rtime_end: n + q.Kp.PerDay + q.Kp.PerHour,
            max_capacity: 100,
            max_per_team: 3,
          };
        }
        return t
          ? { ...t }
          : ((0, z.wT)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null);
      }
      function ce(e) {
        const t = y.mh.GetEditModel();
        for (
          let s = 0;
          s < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++s
        ) {
          const o = t.GetEventModel().jsondata.meet_steam_groups[s];
          for (let t = 0; t < o.sessions.length; ++t)
            if (o.sessions[t].id == e)
              return { groupIndex: s, sessionIndex: t };
        }
        return null;
      }
      function ue(e) {
        const t = y.mh.GetEditModel();
        for (
          let s = 0;
          s < t.GetEventModel().jsondata.meet_steam_groups.length;
          ++s
        ) {
          const o = t.GetEventModel().jsondata.meet_steam_groups[s];
          if (o.group_id == e) return { group: o, groupIndex: s };
        }
        return null;
      }
      function _e(e) {
        const t = y.mh.GetEditModel();
        for (
          let s = 0;
          s < t.GetEventModel().jsondata.meet_steam_schedules.length;
          ++s
        ) {
          const o = t.GetEventModel().jsondata.meet_steam_schedules[s];
          if (o.schedule_id == e) return { schedule: o, scheduleIndex: s };
        }
        return null;
      }
      var pe = s(12155),
        me = s(33561);
      function he(e) {
        var t;
        const { focusView: s, removeNode: n, group_id: l } = e,
          i = (0, me.LU)(),
          a = (0, S.q3)(() => {
            var e;
            return null ===
              (e = i.GetEventModel().jsondata.meet_steam_groups) || void 0 === e
              ? void 0
              : e.find((e) => e.group_id == l);
          }),
          [r, d, c] = (0, g.uD)(),
          u = _.useCallback(() => {
            s(), c();
          }, [s, c]),
          [p, m, h] = (0, g.uD)(),
          x = _.useCallback(() => {
            s(), h();
          }, [s, h]);
        return a && i.GetClanAccountID() == (0, T.H)()
          ? (0, o.jsxs)("div", {
              className: B().EditorCtn,
              children: [
                (0, o.jsx)(xe, { groupData: a, focusView: s }),
                (0, o.jsxs)("div", {
                  className: B().controls,
                  children: [
                    (0, o.jsx)(N.ff, {
                      onClick: d,
                      tooltip: (0, j.we)("#Button_Edit"),
                      children: (0, o.jsx)(P.ffu, {}),
                    }),
                    (0, o.jsx)(N.ff, {
                      onClick: m,
                      tooltip: (0, j.we)("#Button_Delete"),
                      children: (0, o.jsx)(P.sED, {}),
                    }),
                    Boolean(
                      (null === (t = a.group_visibility_tokens) || void 0 === t
                        ? void 0
                        : t.length) > 0,
                    ) &&
                      (0, o.jsx)(N.ff, {
                        onClick: () => {},
                        tooltip:
                          "Limited visibility to those with the appropriate URLs",
                        children: (0, o.jsx)(pe.WLA, {}),
                      }),
                    Boolean(a.ask_registration_question) &&
                      (0, o.jsx)(N.ff, {
                        onClick: () => {},
                        tooltip:
                          "Will ask partner to provides questions for us for this session.",
                        children: (0, o.jsx)(pe.vfN, {}),
                      }),
                  ],
                }),
                Boolean(r) &&
                  (0, o.jsx)(te, {
                    hideModal: u,
                    groupInput: a,
                    fnUpdateGroupSession: (e) => {
                      const { groupIndex: t } = ue(e.group_id),
                        s = y.mh.GetEditModel();
                      (s.GetEventModel().jsondata.meet_steam_groups[t] = e),
                        s.SetDirty(C.IQ.description);
                    },
                  }),
                Boolean(p) &&
                  (0, o.jsx)(G.E, {
                    active: !0,
                    children: (0, o.jsx)(U.o0, {
                      strTitle: (0, j.we)("#Button_Delete"),
                      strDescription: (0, j.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const { groupIndex: e } = ue(a.group_id),
                          t = y.mh.GetEditModel(),
                          s = [...t.GetEventModel().jsondata.meet_steam_groups];
                        s.splice(e, 1),
                          (t.GetEventModel().jsondata.meet_steam_groups = s),
                          t.SetDirty(C.IQ.description),
                          n();
                      },
                      closeModal: x,
                    }),
                  }),
              ],
            })
          : (0, o.jsx)("div", {
              children: "Error: Cannot edit meet steam session group",
            });
      }
      function xe(e) {
        const { groupData: t, focusView: s } = e,
          n = (0, S.q3)(() => t.sessions || []),
          [l, i, a] = (0, g.uD)(),
          r = _.useCallback(() => {
            s(), a();
          }, [s, a]);
        return t
          ? (0, o.jsxs)(I.jr, {
              groupData: t,
              children: [
                n.map((e, l) =>
                  (0, o.jsx)(
                    fe,
                    {
                      focusView: s,
                      sessionID: e.id,
                      bShowOR: l + 1 < n.length,
                    },
                    "timecol_" + t.group_id + "_" + e.id,
                  ),
                ),
                (0, o.jsx)(N.ff, {
                  className: B().AddNew,
                  onClick: i,
                  tooltip: (0, j.we)("#MeetSteam_add"),
                  children: (0, o.jsx)(P.OMN, {}),
                }),
                l &&
                  (0, o.jsx)(se, {
                    bCreate: !0,
                    hideModal: r,
                    fnUpdateSession: (e) => {
                      const s = y.mh.GetEditModel(),
                        o = [...t.sessions, e];
                      o.sort((e, t) => e.rtime_start - t.rtime_start),
                        (t.sessions = o),
                        s.SetDirty(C.IQ.description);
                    },
                  }),
              ],
            })
          : null;
      }
      function fe(e) {
        const { sessionID: t, bShowOR: s, focusView: n } = e,
          [l, i] = (0, g.OP)(),
          a = (0, S.q3)(() => {
            const { groupIndex: e, sessionIndex: s } = ce(t);
            return y.mh.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[e].sessions[s];
          }),
          [r, d, c] = (0, g.uD)(),
          u = _.useCallback(() => {
            n(), c();
          }, [n, c]),
          [p, m, h] = (0, g.uD)(),
          x = _.useCallback(() => {
            n(), h();
          }, [n, h]);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              className: B().Column,
              ...i,
              children: [
                (0, o.jsx)(I.Tn, { sessionData: a }),
                Boolean(l) &&
                  (0, o.jsxs)("div", {
                    className: B().controls,
                    children: [
                      (0, o.jsx)(N.ff, {
                        onClick: d,
                        tooltip: (0, j.we)("#Button_Edit"),
                        children: (0, o.jsx)(P.ffu, {}),
                      }),
                      (0, o.jsx)(N.ff, {
                        onClick: m,
                        tooltip: (0, j.we)("#Button_Delete"),
                        children: (0, o.jsx)(P.sED, {}),
                      }),
                    ],
                  }),
                Boolean(r) &&
                  (0, o.jsx)(se, {
                    bCreate: !1,
                    hideModal: u,
                    sessionInput: a,
                    fnUpdateSession: (e) => {
                      const s = y.mh.GetEditModel(),
                        { groupIndex: o, sessionIndex: n } = ce(t),
                        l = [
                          ...s.GetEventModel().jsondata.meet_steam_groups[o]
                            .sessions,
                        ];
                      (l[n] = e),
                        l.sort((e, t) => e.rtime_start - t.rtime_start),
                        (s.GetEventModel().jsondata.meet_steam_groups[
                          o
                        ].sessions = l),
                        s.SetDirty(C.IQ.description);
                    },
                  }),
                Boolean(p) &&
                  (0, o.jsx)(G.E, {
                    active: !0,
                    children: (0, o.jsx)(U.o0, {
                      strTitle: (0, j.we)("#Button_Delete"),
                      strDescription: (0, j.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const e = y.mh.GetEditModel(),
                          { groupIndex: s, sessionIndex: o } = ce(t),
                          n = [
                            ...e.GetEventModel().jsondata.meet_steam_groups[s]
                              .sessions,
                          ];
                        n.splice(o, 1),
                          n.sort((e, t) => e.rtime_start - t.rtime_start),
                          (e.GetEventModel().jsondata.meet_steam_groups[
                            s
                          ].sessions = n),
                          e.SetDirty(C.IQ.description);
                      },
                      closeModal: x,
                    }),
                  }),
              ],
            }),
            s && (0, o.jsx)(I.w3, {}),
          ],
        });
      }
      var ve = s(36969),
        je = s(38539),
        ge = (s(9024), s(86807));
      function be(e) {
        const { schema: t } = e,
          {
            table: s,
            table_row: n,
            table_header: l,
            table_cell: i,
            paragraph: a,
          } = t.nodes,
          r = _.useCallback(
            (e, t, o) =>
              !je.aH(e) &&
              (t &&
                t(
                  e.tr.insert(
                    e.selection.to,
                    (function (e, t, s, o, n) {
                      const l = () => s.createChecked(null, n.createChecked()),
                        i = () => o.createChecked(null, n.createChecked());
                      return e.createChecked(null, [
                        t.createChecked(null, [l(), l()]),
                        t.createChecked(null, [i(), i()]),
                      ]);
                    })(s, n, l, i, a),
                  ),
                ),
              !0),
            [s, n, l, i, a],
          );
        return s
          ? (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_InsertTable"),
              command: r,
              children: (0, o.jsx)(P._Q2, {}),
            })
          : null;
      }
      function Me(e) {
        const { schema: t, className: s } = e,
          { callbacks: n, view: l } = (0, N.wU)(),
          [i, a] = _.useState(() => !!t.nodes.table && je.aH(l.state));
        return (
          (0, g.hL)(
            n,
            _.useCallback(
              (e) => a(!!t.nodes.table && je.aH(e.state)),
              [t.nodes.table],
            ),
          ),
          (0, o.jsx)(ge.R, {
            visible: i,
            msAnimationDuration: 100,
            children: (0, o.jsx)(N.Ez, {
              className: s,
              children: (0, o.jsx)(Ee, { schema: t }),
            }),
          })
        );
      }
      function Ee(e) {
        const { schema: t } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_AddRowBefore"),
              command: je.JD,
              children: (0, o.jsx)(P.BPi, {}),
            }),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_AddRowAfter"),
              command: je.gC,
              children: (0, o.jsx)(P.fG_, {}),
            }),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_DeleteRow"),
              command: je.aR,
              children: (0, o.jsx)(P.XW_, {}),
            }),
            (0, o.jsx)(N.XQ, {}),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_AddColumnBefore"),
              command: je.RC,
              children: (0, o.jsx)(P.l26, {}),
            }),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_AddColumnAfter"),
              command: je.GU,
              children: (0, o.jsx)(P.ur3, {}),
            }),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_DeleteColumn"),
              command: je.gR,
              children: (0, o.jsx)(P.dyV, {}),
            }),
            (0, o.jsx)(N.XQ, {}),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_HeaderRow"),
              command: je.uC,
              children: (0, o.jsx)(P.mLi, {}),
            }),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_HeaderColumn"),
              command: je.xV,
              children: (0, o.jsx)(P.sXN, {}),
            }),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_HeaderCell"),
              command: je._G,
              children: (0, o.jsx)(P.Maz, {}),
            }),
            (0, o.jsx)(N.XQ, {}),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_MergeCells"),
              command: je.w7,
              children: (0, o.jsx)(P.rnq, {}),
            }),
            (0, o.jsx)(N.cQ, {
              tooltip: (0, j.we)("#FormattingToolbar_Tables_SplitCells"),
              command: je.L0,
              children: (0, o.jsx)(P.vB9, {}),
            }),
            !1,
          ],
        });
      }
      var we = s(44483),
        ke = s(44832),
        De = s(28516),
        Ce = s.n(De);
      function ye(e, t) {
        if (e) {
          const e = y.mh.GetEditModel().GetEventModel()
            .jsondata.meet_steam_schedules;
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.schedule_id == t) >= 0);
          return { schedule_id: t, session_breaks: [] };
        }
        return t
          ? { ...t }
          : ((0, z.wT)(
              !1,
              "HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model",
            ),
            null);
      }
      function Se(e) {
        const { hideModal: t, fnUpdateSession: s, inputScheduleModel: n } = e,
          l = (0, R.f1)(),
          i = (0, me.LU)(),
          [a, r] = (0, _.useState)(() => ye(!Boolean(n), n)),
          [d, c, u] = (0, S.q3)(() => [
            a.location_type,
            a.in_person_time_zone,
            i.GetEventModel().jsondata.meet_steam_groups || [],
          ]),
          p = (0, _.useMemo)(() => {
            const e = u.reduce((e, t) => e.concat(t.sessions), []);
            return 0 == e.length ? l : Math.min(...e.map((e) => e.rtime_start));
          }, [u, l]);
        return (0, o.jsx)(G.E, {
          active: !0,
          children: (0, o.jsx)(U.o0, {
            strTitle: Boolean(n)
              ? "Update Meet Steam Schedule"
              : "Create Meet Steam Schedule View",
            onOK: () => s(a),
            closeModal: () => {
              r(ye(!Boolean(n), n)), t();
            },
            children: (0, o.jsxs)("div", {
              className: Ce().DialogCtn,
              children: [
                (0, o.jsx)(ae, {
                  startTime: i.GetEventStartTime(),
                  location_type: d,
                  in_person_time_zone: c,
                  fnUpdateLocationAndTZ: (e, t) =>
                    r({ ...a, location_type: e, in_person_time_zone: t }),
                }),
                (0, o.jsx)(Te, {
                  inputScheduleModel: a,
                  fnUpdateSession: (e) => r(e),
                  rtBreakStartingTime: p,
                }),
              ],
            }),
          }),
        });
      }
      function Te(e) {
        const {
            fnUpdateSession: t,
            inputScheduleModel: s,
            rtBreakStartingTime: n,
          } = e,
          [l, i] = (0, S.q3)(() => [
            s.session_breaks || [],
            s.in_person_time_zone || I.hh,
          ]),
          a = (0, _.useCallback)(
            (e, o) => {
              const n = { ...s };
              (n.session_breaks = n.session_breaks
                ? [...n.session_breaks]
                : []),
                o < n.session_breaks.length
                  ? (n.session_breaks[o] = e)
                  : n.session_breaks.push(e),
                t(n);
            },
            [t, s],
          );
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsx)("div", { children: "Scheduled Breaks" }),
            l
              .sort((e, t) => t.rtime_start - e.rtime_start)
              .map((e, t) =>
                (0, o.jsx)(
                  Ie,
                  {
                    sDisplayTimeZone: i,
                    index: t,
                    breakSession: e,
                    fnOnUpdate: (e) => a(e, t),
                  },
                  "breakedit" + e.break_id,
                ),
              ),
            (0, o.jsx)(h.$n, {
              onClick: () => {
                var e;
                const t = s.session_breaks ? [...s.session_breaks] : [];
                let o = Math.floor(1 + 1e5 * Math.random());
                for (; t.findIndex((e) => e.break_id == o) >= 0; )
                  o = Math.floor(1 + 1e5 * Math.random());
                a(
                  {
                    break_id: o,
                    localized_break_description: (0, K.$Y)([], A.bP9, null),
                    rtime_start: n,
                    rtime_end: n + q.Kp.PerHour,
                  },
                  (null === (e = s.session_breaks) || void 0 === e
                    ? void 0
                    : e.length) || 0,
                );
              },
              children: "+ Add Break",
            }),
          ],
        });
      }
      function Ie(e) {
        const {
            breakSession: t,
            fnOnUpdate: s,
            index: n,
            sDisplayTimeZone: l,
          } = e,
          i = (0, V.E)(),
          [a, r, d, c] = (0, S.q3)(() => [
            t.rtime_start,
            t.rtime_end,
            t.localized_break_description[i] || "",
            Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
          ]);
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsxs)("div", { children: ["Break # ", n + 1] }),
            (0, o.jsx)("br", {}),
            (0, o.jsx)(L.K, {
              strDescription: "Break Start Time",
              nEarliestTime: 0,
              fnGetTimeToUpdate: () => a,
              fnSetTimeToUpdate: (e) =>
                s({ ...t, rtime_start: e, rtime_end: e + q.Kp.PerMinute * c }),
              fnIsValidDateTime: () => !0,
              bShowTimeZone: !0,
            }),
            (0, o.jsx)("br", {}),
            (0, o.jsx)(h.pd, {
              type: "number",
              min: 0,
              label: "Break duration in minutes",
              onChange: (e) => {
                const o = Number.parseInt(e.currentTarget.value);
                s({ ...t, rtime_end: t.rtime_start + q.Kp.PerMinute * o });
              },
              value: c,
            }),
            (0, o.jsx)(h.pd, {
              type: "text",
              label: "Break Description",
              value: d,
              onChange: (e) => {
                const o = { ...t };
                (o.localized_break_description[i] = e.currentTarget.value),
                  s(o);
              },
            }),
            (0, o.jsx)(ie, {
              rtime_start: a,
              rtime_end: r,
              sDisplayTimeZone: l,
            }),
          ],
        });
      }
      function Pe(e) {
        const { focusView: t, removeNode: s, schedule_id: n } = e,
          l = (0, me.LU)(),
          i = (0, S.q3)(() => {
            var e;
            return null ===
              (e = l.GetEventModel().jsondata.meet_steam_schedules) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.schedule_id == n);
          }),
          [a, r, d] = (0, g.uD)(),
          c = _.useCallback(() => {
            t(), d();
          }, [t, d]),
          [u, p, m] = (0, g.uD)(),
          h = _.useCallback(() => {
            t(), m();
          }, [t, m]);
        return i && l.GetClanAccountID() == (0, T.H)()
          ? (0, o.jsxs)("div", {
              className: Ce().EditorCtn,
              children: [
                (0, o.jsx)(I.fs, {
                  eventModel: l.GetEventModel(),
                  scheduleData: i,
                }),
                (0, o.jsxs)("div", {
                  className: Ce().controls,
                  children: [
                    (0, o.jsx)(N.ff, {
                      onClick: r,
                      tooltip: (0, j.we)("#Button_Edit"),
                      children: (0, o.jsx)(P.ffu, {}),
                    }),
                    (0, o.jsx)(N.ff, {
                      onClick: p,
                      tooltip: (0, j.we)("#Button_Delete"),
                      children: (0, o.jsx)(P.sED, {}),
                    }),
                  ],
                }),
                Boolean(a) &&
                  (0, o.jsx)(Se, {
                    hideModal: c,
                    inputScheduleModel: i,
                    fnUpdateSession: (e) => {
                      const { scheduleIndex: t } = _e(e.schedule_id);
                      (l.GetEventModel().jsondata.meet_steam_schedules[t] = e),
                        l.SetDirty(C.IQ.description);
                    },
                  }),
                Boolean(u) &&
                  (0, o.jsx)(G.E, {
                    active: !0,
                    children: (0, o.jsx)(U.o0, {
                      strTitle: (0, j.we)("#Button_Delete"),
                      strDescription: (0, j.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const { scheduleIndex: e } = _e(i.schedule_id),
                          t = y.mh.GetEditModel(),
                          o = [
                            ...t.GetEventModel().jsondata.meet_steam_schedules,
                          ];
                        o.splice(e, 1),
                          (t.GetEventModel().jsondata.meet_steam_schedules = o),
                          t.SetDirty(C.IQ.description),
                          s();
                      },
                      closeModal: h,
                    }),
                  }),
              ],
            })
          : (0, o.jsx)("div", {
              children: "Error: Cannot edit meet steam schedule view",
            });
      }
      var Ue = s(88997),
        Ge = s(10820),
        Ne = s(65606),
        Oe = s(30193),
        Be = s(14947);
      function Ae(e) {
        const { schema: t } = e,
          { callbacks: s, view: n } = (0, N.wU)(),
          [l, i] = _.useState(!1),
          a = _.useCallback(
            (e, s) => {
              n.dispatch(
                n.state.tr.insert(
                  n.state.selection.to,
                  t.nodes.emoticon.create(null, t.text(e)),
                ),
              ),
                s || n.focus();
            },
            [n, t],
          ),
          r = _.useCallback(
            (e) => {
              i(!0);
              const t = (0, Ue.lX)((0, o.jsx)(ze, { OnSelected: a }), e, {
                bOverlapHorizontal: !0,
              });
              (0, Be.z7)(
                () => !t.visible,
                () => i(!1),
              );
            },
            [a],
          );
        return (0, o.jsx)(N.ff, {
          tooltip: "#Editor_Emoticon",
          onClick: r,
          toggled: l,
          children: (0, o.jsx)(pe.jZW, {}),
        });
      }
      function ze(e) {
        const t = (0, Ne.LJ)();
        return (
          (0, Oe.k3)(t),
          (0, o.jsx)(Ge.iY, { emoticonStore: t, OnSelected: e.OnSelected })
        );
      }
      var Ve = s(30470),
        Re = s(14703),
        Fe = s(4796),
        Le = s(63287),
        Ke = s.n(Le),
        Ye = s(7913),
        qe = s(82102),
        Qe = s(69484),
        $e = s(27939);
      function He(e) {
        const { hideModal: t, fnUpdateSession: s, clanAccountID: n } = e,
          [l, i] = (0, _.useState)(() => it(!0, null));
        return (0, o.jsx)(G.E, {
          active: !0,
          children: (0, o.jsx)(U.o0, {
            strTitle: (0, j.we)("#UserPolls_Create_title"),
            onOK: () => s(l),
            closeModal: () => {
              i(it(!0, null)), t();
            },
            children: (0, o.jsx)("div", {
              className: Ke().DialogCtn,
              children: (0, o.jsx)(We, {
                clanAccountID: n,
                userPollDef: l,
                fnSetDef: i,
              }),
            }),
          }),
        });
      }
      function Xe(e) {
        const {
            hideModal: t,
            userPollDef: s,
            clanAccountID: n,
            fnUpdateUserPollDef: l,
          } = e,
          [i, a] = (0, _.useState)(() => it(!1, s));
        return (0, o.jsx)(G.E, {
          active: !0,
          children: (0, o.jsx)(U.o0, {
            strTitle: (0, j.we)("#UserPolls_Edit_title"),
            onOK: () => {
              l(i);
            },
            onCancel: () => {
              a(it(!1, s));
            },
            closeModal: t,
            children: (0, o.jsx)("div", {
              className: Ke().DialogCtn,
              children: (0, o.jsx)(We, {
                userPollDef: i,
                clanAccountID: n,
                fnSetDef: a,
              }),
            }),
          }),
        });
      }
      function Je(e) {
        switch (e) {
          default:
          case Re.$t.k_EPollResult_NotVisible:
            return (0, j.we)("#UserPolls_Visibility_None");
          case Re.$t.k_EPollResult_Visible_After_End:
            return (0, j.we)("#UserPolls_Visibility_End");
          case Re.$t.k_EPollResult_Visible_After_Vote:
            return (0, j.we)("#UserPolls_Visibility_Voter");
          case Re.$t.k_EPollResult_Visible_After_Vote_Or_End:
            return (0, j.we)("#UserPolls_Visibility_Voter_or_End");
          case Re.$t.k_EPollResult_Visible_On_Demand:
            return (0, j.we)("#UserPolls_Visibility_OnDemand");
        }
      }
      function We(e) {
        const { userPollDef: t, fnSetDef: s } = e,
          n = (0, V.E)(),
          [l] = (0, S.q3)(() => [t.results_visibility_settings]),
          i = Object.values(Re.$t).map((e) => ({ data: e, label: Je(e) }));
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(h.pd, {
              type: "text",
              label: (0, j.we)("#UserPolls_Description"),
              value: j.NT.Get(t.localized_poll_description, n),
              onChange: (e) => {
                const o = { ...t };
                (o.localized_poll_description = j.NT.Set(
                  o.localized_poll_description,
                  n,
                  e.currentTarget.value,
                )),
                  s(o);
              },
            }),
            (0, o.jsx)(st, { ...e }),
            (0, o.jsx)(tt, { ...e }),
            (0, o.jsx)(h.JU, { children: (0, j.we)("#UserPolls_Visibility") }),
            (0, o.jsx)("div", {
              className: Ke().PollArea,
              children: (0, o.jsx)(h.m, {
                strDropDownClassName: F.DropDownScroll,
                rgOptions: i,
                selectedOption: l,
                onChange: (e) => {
                  e.data != t.results_visibility_settings &&
                    s({ ...t, results_visibility_settings: e.data });
                },
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            }),
            (0, o.jsx)(Ze, { ...e }),
          ],
        });
      }
      function Ze(e) {
        const { clanAccountID: t, userPollDef: s, fnSetDef: n } = e,
          l = (0, me.LU)(),
          i = (0, Re.rR)(l.GetClanSteamID()),
          [a] = (0, S.q3)(() => [s.user_poll_background]),
          r = (0, _.useCallback)(
            (e, t, o, l, i) => {
              (0, z.wT)(
                null != o && o >= A.Bhc && o < A.bP9,
                "Unexpected value for elang: " + o,
              ),
                (0, z.wT)(
                  "user_poll_background" === i,
                  "Unexpected artwork type " + i,
                );
              const a = (0, qe.G)(e, t);
              a.image && n({ ...s, user_poll_background: a.image });
            },
            [n, s],
          );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(h.JU, {
              children: (0, j.we)("#UserPolls_BackgroundImage"),
            }),
            (0, o.jsxs)("div", {
              className: Ke().PollArea,
              children: [
                (0, o.jsx)("p", {
                  children: (0, j.we)("#UserPolls_BackgroundImage_desc"),
                }),
                (0, o.jsx)(Ye.a, {
                  rgRealmList: l.GetIncludedRealmList(),
                  rgSupportArtwork: Re.YX,
                  strUploadAjaxURL: i,
                  fnOnUploadSuccess: r,
                  elOverrideDragAndDropText: (0, j.we)(
                    "#Template_Section_MediaUpdate_Static_Dnd",
                  ),
                  bTwoPhaseUpload: !0,
                  bDirectTempStorageUpload: !0,
                }),
                Boolean(a) && (0, o.jsx)("img", { src: (0, Qe.Fk)(t, a) }),
              ],
            }),
          ],
        });
      }
      function et(e) {
        switch (e) {
          case Re.BY.k_EPollVoter_AnyUser:
            return (0, j.we)("#UserPolls_Voters_Anyone");
          case Re.BY.k_EPollVoter_UserGameInLibrary:
            return (0, j.we)("#UserPolls_Voters_Owners");
          case Re.BY.k_EPollVoter_MinPlayTime:
            return (0, j.we)("#UserPolls_Voters_Players");
          case Re.BY.k_EPollVoter_MemberOfGroup:
            return (0, j.we)("#UserPolls_Voters_Members");
        }
      }
      function tt(e) {
        const { clanAccountID: t, userPollDef: s, fnSetDef: n } = e,
          [l, i] = (0, Fe.TB)(t),
          [a, r] = (0, S.q3)(() => [
            s.voter_min_playtime_seconds,
            s.voter_eligibility,
          ]),
          d = (0, _.useMemo)(() => {
            const e = [
              {
                label: et(Re.BY.k_EPollVoter_AnyUser),
                data: Re.BY.k_EPollVoter_AnyUser,
              },
            ];
            return (
              i && i.is_ogg && t != $e.II
                ? (e.push({
                    label: et(Re.BY.k_EPollVoter_UserGameInLibrary),
                    data: Re.BY.k_EPollVoter_UserGameInLibrary,
                  }),
                  e.push({
                    label: et(Re.BY.k_EPollVoter_MinPlayTime),
                    data: Re.BY.k_EPollVoter_MinPlayTime,
                  }))
                : !i ||
                  (i.is_ogg && t != $e.II) ||
                  e.push({
                    label: et(Re.BY.k_EPollVoter_MemberOfGroup),
                    data: Re.BY.k_EPollVoter_MemberOfGroup,
                  }),
              e
            );
          }, [t, i]);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(h.JU, { children: (0, j.we)("#UserPolls_Voters") }),
            (0, o.jsxs)("div", {
              className: Ke().PollArea,
              children: [
                (0, o.jsx)(h.m, {
                  strDropDownClassName: F.DropDownScroll,
                  rgOptions: d,
                  selectedOption: r,
                  onChange: (e) => {
                    if (e.data != s.voter_eligibility) {
                      let t = { ...s, voter_eligibility: e.data };
                      e.data == Re.BY.k_EPollVoter_MinPlayTime &&
                        (t.voter_min_playtime_seconds = 5 * lt),
                        n(t);
                    }
                  },
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                }),
                Boolean(r == Re.BY.k_EPollVoter_MinPlayTime) &&
                  (0, o.jsx)("div", {
                    className: Ke().OptionInset,
                    children: (0, o.jsx)(h.pd, {
                      type: "number",
                      label: (0, j.we)("#UserPolls_MinPlayTime"),
                      value: a / lt,
                      min: 5,
                      onChange: (e) => {
                        var t, o;
                        const l =
                          (null !==
                            (o = Number.parseInt(
                              null ===
                                (t = null == e ? void 0 : e.currentTarget) ||
                                void 0 === t
                                ? void 0
                                : t.value,
                            )) && void 0 !== o
                            ? o
                            : 5) * lt;
                        s.voter_min_playtime_seconds != l &&
                          n({ ...s, voter_min_playtime_seconds: l });
                      },
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function st(e) {
        const { userPollDef: t, fnSetDef: s } = e,
          [n, l] = (0, S.q3)(() => [
            t.poll_end_time,
            t.poll_end_days_since_start,
          ]);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(h.JU, { children: (0, j.we)("#UserPolls_Starts") }),
            (0, o.jsxs)("div", {
              className: Ke().PollArea,
              children: [
                (0, o.jsxs)("div", {
                  className: (0, v.A)(F.FlexRowContainer, F.RadioOption),
                  children: [
                    (0, o.jsx)("input", {
                      type: "radio",
                      name: "StartDateRadio",
                      id: "UserPollDialog_Days",
                      checked: Boolean(l),
                      onChange: () => {
                        t.poll_end_days_since_start ||
                          s({
                            ...t,
                            poll_end_time: void 0,
                            poll_end_days_since_start: ot * nt,
                          });
                      },
                    }),
                    (0, o.jsx)("label", {
                      htmlFor: "UserPollDialog_Days",
                      children: (0, o.jsx)("span", {
                        children: (0, j.we)("#UserPolls_EndTime_In_Days"),
                      }),
                    }),
                  ],
                }),
                Boolean(l) &&
                  (0, o.jsx)("div", {
                    className: Ke().OptionInset,
                    children: (0, o.jsx)(h.pd, {
                      type: "number",
                      value: l / nt,
                      min: 1,
                      onChange: (e) => {
                        var o, n;
                        const l =
                          (null !==
                            (n = Number.parseInt(
                              null ===
                                (o = null == e ? void 0 : e.currentTarget) ||
                                void 0 === o
                                ? void 0
                                : o.value,
                            )) && void 0 !== n
                            ? n
                            : 1) * nt;
                        t.poll_end_days_since_start != l &&
                          s({
                            ...t,
                            poll_end_time: void 0,
                            poll_end_days_since_start: l,
                          });
                      },
                    }),
                  }),
                (0, o.jsxs)("div", {
                  className: (0, v.A)(F.FlexRowContainer, F.RadioOption),
                  children: [
                    (0, o.jsx)("input", {
                      type: "radio",
                      name: "StartDateRadio",
                      id: "UserPollDialog_SpecificTime",
                      checked: Boolean(n),
                      onChange: () => {
                        t.poll_end_time ||
                          s({
                            ...t,
                            poll_end_days_since_start: void 0,
                            poll_end_time:
                              Math.floor(Date.now() / 1e3) + ot * nt,
                          });
                      },
                    }),
                    (0, o.jsx)("label", {
                      htmlFor: "UserPollDialog_SpecificTime",
                      children: (0, o.jsx)("span", {
                        children: (0, j.we)("#UserPolls_EndTime_Specific"),
                      }),
                    }),
                  ],
                }),
                Boolean(n) &&
                  (0, o.jsxs)("div", {
                    className: (0, v.A)(Ke().OptionInset, F.FlexRowContainer),
                    children: [
                      (0, o.jsx)(L.K, {
                        strDescription: "",
                        nEarliestTime: Math.floor(Date.now() / 1e3) + 3600,
                        fnGetTimeToUpdate: () => n,
                        fnSetTimeToUpdate: (e) => {
                          t.poll_end_time != e &&
                            s({
                              ...t,
                              poll_end_days_since_start: void 0,
                              poll_end_time: e,
                            });
                        },
                        fnIsValidDateTime: () =>
                          n > Math.floor(Date.now() / 1e3) + 3600,
                      }),
                      (0, o.jsx)("span", {
                        children: (0, j.we)("#UserPolls_EndTime_Zone"),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      const ot = 7,
        nt = 86400,
        lt = 60;
      function it(e, t) {
        if (e) {
          const e =
            y.mh.GetEditModel().GetEventModel().jsondata.user_polls || [];
          let t = 0;
          do {
            t = Math.floor(1e4 + 9e4 * Math.random());
          } while (e && e.findIndex((e) => e.poll_id == t) >= 0);
          return {
            poll_id: t,
            options: [],
            localized_poll_description: (0, K.$Y)([], A.bP9, null),
            poll_end_days_since_start: ot * nt,
            poll_end_time: void 0,
            results_visibility_settings: Re.$t.k_EPollResult_Visible_On_Demand,
            voter_eligibility: Re.BY.k_EPollVoter_AnyUser,
          };
        }
        return t
          ? {
              ...t,
              localized_poll_description: [...t.localized_poll_description],
            }
          : ((0, z.wT)(
              !1,
              "HelperCreateOrCloneUserPollModel Expect Create or previous model",
            ),
            null);
      }
      function at(e) {
        const {
            bCreate: t,
            hideModal: s,
            pollOptionsInput: n,
            fnUpdatePollOption: l,
          } = e,
          [i, a] = (0, _.useState)(() => rt(t, n)),
          r = (0, V.E)();
        return (0, o.jsx)(G.E, {
          active: !0,
          children: (0, o.jsx)(U.o0, {
            strTitle: (0, j.we)(
              t ? "#UserPolls_Option_Create" : "#UserPolls_Option_Edit",
            ),
            onOK: () => {
              l(i), s();
            },
            onCancel: () => {
              a(rt(t, n)), s();
            },
            children: (0, o.jsx)("div", {
              className: Ke().DialogCtn,
              children: (0, o.jsx)(h.pd, {
                type: "text",
                label: (0, j.we)("#UserPolls_Option_Title"),
                value: j.NT.Get(i.localized_option, r),
                onChange: (e) => {
                  const t = { ...i };
                  (t.localized_option = [...t.localized_option]),
                    (t.localized_option = j.NT.Set(
                      t.localized_option,
                      r,
                      e.currentTarget.value,
                    )),
                    a(t);
                },
              }),
            }),
          }),
        });
      }
      function rt(e, t) {
        if (e) {
          const e = y.mh.GetEditModel().GetEventModel().jsondata.user_polls,
            t =
              null == e ? void 0 : e.reduce((e, t) => e.concat(t.options), []);
          let s = 0;
          do {
            s = Math.floor(1e4 + 9e4 * Math.random());
          } while (t && t.findIndex((e) => e.option_id == s) >= 0);
          return { option_id: s, localized_option: (0, K.$Y)([], A.bP9, null) };
        }
        return t
          ? { ...t }
          : ((0, z.wT)(
              !1,
              "HelperCreateOrClonePollOptionModel Expect Create or previous model",
            ),
            null);
      }
      var dt = s(69818),
        ct = s(56330),
        ut = s(10778);
      function _t(e) {
        const t = y.mh.GetEditModel();
        for (let s = 0; s < t.GetEventModel().jsondata.user_polls.length; ++s) {
          const o = t.GetEventModel().jsondata.user_polls[s];
          for (let t = 0; t < o.options.length; ++t)
            if (o.options[t].option_id == e)
              return { pollIndex: s, optionIndex: t };
        }
        return null;
      }
      function pt(e) {
        const t = y.mh.GetEditModel();
        for (let s = 0; s < t.GetEventModel().jsondata.user_polls.length; ++s) {
          const o = t.GetEventModel().jsondata.user_polls[s];
          if (o.poll_id == e) return { userPollDef: o, pollIndex: s };
        }
        return null;
      }
      var mt = s(56654);
      function ht(e) {
        const { focusView: t, removeNode: s, poll_id: n } = e,
          l = (0, me.LU)(),
          i = (0, S.q3)(() => {
            var e;
            return null === (e = l.GetEventModel().jsondata.user_polls) ||
              void 0 === e
              ? void 0
              : e.find((e) => e.poll_id == n);
          }),
          [a, r, d] = (0, g.uD)(),
          c = _.useCallback(() => {
            t(), d();
          }, [t, d]),
          [u, p, m] = (0, g.uD)(),
          h = _.useCallback(() => {
            t(), m();
          }, [t, m]);
        return i
          ? (0, o.jsxs)("div", {
              className: B().EditorCtn,
              children: [
                (0, o.jsx)(xt, { userPollDef: i, focusView: t }),
                (0, o.jsxs)("div", {
                  className: B().controls,
                  children: [
                    (0, o.jsx)(N.ff, {
                      onClick: r,
                      tooltip: (0, j.we)("#Button_Edit"),
                      children: (0, o.jsx)(P.ffu, {}),
                    }),
                    (0, o.jsx)(N.ff, {
                      onClick: p,
                      tooltip: (0, j.we)("#Button_Delete"),
                      children: (0, o.jsx)(P.sED, {}),
                    }),
                    (0, o.jsx)(N.ff, {
                      onClick: () => {},
                      tooltip: Je(i.results_visibility_settings),
                      children: (0, o.jsx)(pe.WLA, {}),
                    }),
                    (0, o.jsx)(N.ff, {
                      onClick: () => {},
                      tooltip: et(i.voter_eligibility),
                      children: (0, o.jsx)(pe.JpU, {}),
                    }),
                  ],
                }),
                Boolean(a) &&
                  (0, o.jsx)(Xe, {
                    hideModal: c,
                    userPollDef: i,
                    clanAccountID: l.GetClanAccountID(),
                    fnUpdateUserPollDef: (e) => {
                      const { pollIndex: t } = pt(e.poll_id),
                        s = y.mh.GetEditModel();
                      (s.GetEventModel().jsondata.user_polls[t] = e),
                        s.SetDirty(C.IQ.description);
                    },
                  }),
                Boolean(u) &&
                  (0, o.jsx)(G.E, {
                    active: !0,
                    children: (0, o.jsx)(U.o0, {
                      strTitle: (0, j.we)("#Button_Delete"),
                      strDescription: (0, j.we)("#Dialog_AreYouSure"),
                      onOK: () => {
                        const { pollIndex: e } = pt(i.poll_id),
                          t = y.mh.GetEditModel(),
                          o = [...t.GetEventModel().jsondata.user_polls];
                        o.splice(e, 1),
                          (t.GetEventModel().jsondata.user_polls = o),
                          t.SetDirty(C.IQ.description),
                          s();
                      },
                      closeModal: h,
                    }),
                  }),
              ],
            })
          : (0, o.jsx)("div", {
              className: ct.ErrorStylesWithIcon,
              children: (0, j.we)("#UserPolls_Editor_FailToFindModel", n),
            });
      }
      function xt(e) {
        const { userPollDef: t, focusView: s } = e,
          [n, l] = (0, S.q3)(() => [t.options || [], t.randomize_option_order]),
          i = (0, me.LU)(),
          a = (0, V.E)(),
          [r, d, c] = (0, g.uD)(),
          u = _.useCallback(() => {
            s(), c();
          }, [s, c]),
          [p, m, h] = (0, g.uD)(),
          x = _.useCallback(() => {
            s(), h();
          }, [s, h]);
        return t
          ? (0, o.jsxs)(ut.W6, {
              userPollDef: t,
              eventModel: i.GetEventModel(),
              lang: a,
              children: [
                n.map((e) =>
                  (0, o.jsx)(
                    vt,
                    { focusView: s, optionID: e.option_id },
                    "polloption" + t.poll_id + "_" + e.option_id,
                  ),
                ),
                (0, o.jsxs)("div", {
                  className: Ke().AdminOptions,
                  children: [
                    (0, o.jsx)(dt.wl, {
                      className: "",
                      onClick: d,
                      children: (0, j.we)("#UserPolls_Option_Add"),
                    }),
                    (0, o.jsx)(dt.wl, {
                      className: "",
                      onClick: m,
                      children: (0, j.we)("#UserPolls_Option_Reorder"),
                    }),
                  ],
                }),
                r &&
                  (0, o.jsx)(at, {
                    bCreate: !0,
                    hideModal: u,
                    fnUpdatePollOption: (e) => {
                      const s = y.mh.GetEditModel();
                      t.options || (t.options = []),
                        t.options.push(e),
                        s.SetDirty(C.IQ.description);
                    },
                  }),
                p &&
                  (0, o.jsx)(ft, {
                    hideModal: x,
                    options: n,
                    bRandomize: l,
                    fnUpdateOptions: (e, s) => {
                      (t.randomize_option_order = s), (t.options = e);
                    },
                  }),
              ],
            })
          : null;
      }
      function ft(e) {
        const {
            options: t,
            bRandomize: s,
            fnUpdateOptions: n,
            hideModal: l,
          } = e,
          i = (0, V.E)(),
          [a, r] = (0, _.useState)(s),
          [d, c] = (0, _.useState)(t);
        return (0, o.jsx)(G.E, {
          active: !0,
          children: (0, o.jsxs)(U.o0, {
            strTitle: (0, j.we)("#UserPolls_Option_Reorder"),
            strDescription: (0, j.we)("#UserPolls_Option_Reorder_desc"),
            onCancel: () => {
              r(s), c(t);
            },
            onOK: () => {
              n([...d], a);
            },
            closeModal: l,
            children: [
              (0, o.jsx)(h.Yh, {
                label: (0, j.we)("#UserPolls_Option_Randomize"),
                checked: a,
                onChange: r,
              }),
              (0, o.jsx)(mt.A, {
                items: d,
                render: (e) => {
                  var t, s;
                  return (0, o.jsx)("div", {
                    children:
                      (null === (t = e.localized_option) || void 0 === t
                        ? void 0
                        : t[i]) ||
                      (null === (s = e.localized_option) || void 0 === s
                        ? void 0
                        : s[A.Bhc]) ||
                      "",
                  });
                },
                onReorder: (e) => c(e),
              }),
            ],
          }),
        });
      }
      function vt(e) {
        const { optionID: t, focusView: s } = e,
          [n, l] = (0, g.OP)(),
          i = (0, S.q3)(() => {
            const { optionIndex: e, pollIndex: s } = _t(t);
            return y.mh.GetEditModel().GetEventModel().jsondata.user_polls[s]
              .options[e];
          }),
          a = (0, V.E)(),
          [r, d, c] = (0, g.uD)(),
          u = _.useCallback(() => {
            s(), c();
          }, [s, c]),
          [p, m, h] = (0, g.uD)(),
          x = _.useCallback(() => {
            s(), h();
          }, [s, h]);
        return (0, o.jsxs)("div", {
          className: B().Column,
          ...l,
          children: [
            (0, o.jsx)(ut.s3, { pollOptionDef: i, lang: a }),
            Boolean(n) &&
              (0, o.jsxs)("div", {
                className: B().controls,
                children: [
                  (0, o.jsx)(N.ff, {
                    onClick: d,
                    tooltip: (0, j.we)("#Button_Edit"),
                    children: (0, o.jsx)(P.ffu, {}),
                  }),
                  (0, o.jsx)(N.ff, {
                    onClick: m,
                    tooltip: (0, j.we)("#Button_Delete"),
                    children: (0, o.jsx)(P.sED, {}),
                  }),
                ],
              }),
            Boolean(r) &&
              (0, o.jsx)(at, {
                bCreate: !1,
                hideModal: u,
                pollOptionsInput: i,
                fnUpdatePollOption: (e) => {
                  const s = y.mh.GetEditModel(),
                    { optionIndex: o, pollIndex: n } = _t(t),
                    l = [...s.GetEventModel().jsondata.user_polls[n].options];
                  (l[o] = e),
                    (s.GetEventModel().jsondata.user_polls[n].options = l),
                    s.SetDirty(C.IQ.description);
                },
              }),
            Boolean(p) &&
              (0, o.jsx)(G.E, {
                active: !0,
                children: (0, o.jsx)(U.o0, {
                  strTitle: (0, j.we)("#Button_Delete"),
                  strDescription: (0, j.we)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const e = y.mh.GetEditModel(),
                      { optionIndex: s, pollIndex: o } = _t(t),
                      n = [...e.GetEventModel().jsondata.user_polls[o].options];
                    n.splice(s, 1),
                      (e.GetEventModel().jsondata.user_polls[o].options = n),
                      e.SetDirty(C.IQ.description);
                  },
                  closeModal: x,
                }),
              }),
          ],
        });
      }
      const jt = _.memo(function (e) {
        const {
          view: t,
          schema: s,
          refUpdateToolbar: n,
          className: l,
          clanSteamID: i,
          bSpellcheckEnabled: a,
          setSpellcheckEnabled: r,
        } = e;
        return (0, o.jsx)(N.bI, {
          refUpdateToolbar: n,
          view: t,
          children: (0, o.jsxs)("div", {
            className: e.className,
            children: [
              (0, o.jsxs)(N.Ez, {
                className: e.className,
                children: [
                  (0, o.jsx)(ve.MV, {}),
                  (0, o.jsx)(N.XQ, {}),
                  (0, o.jsx)(ve.Km, { schema: s }),
                  (0, o.jsx)(N.XQ, {}),
                  s.marks.link && (0, o.jsx)(gt, { schema: s }),
                  (0, o.jsx)(N.XQ, {}),
                  (0, o.jsx)(ve.Hz, { schema: s }),
                  (0, o.jsx)(ve.WJ, { schema: s, levels: 3 }),
                  (0, o.jsx)(N.XQ, {}),
                  (0, o.jsx)(Ae, { schema: s }),
                  (0, o.jsx)(Mt, { schema: s, clanSteamID: i }),
                  (0, o.jsx)(be, { schema: s }),
                  (0, o.jsx)(ve.C$, {
                    schema: s,
                    showIndentButtonsAsNeeded: !0,
                  }),
                  (0, o.jsx)(N.hK, {}),
                  r &&
                    (0, o.jsx)(ve.Nt, {
                      bSpellcheckEnabled: a,
                      setSpellcheckEnabled: r,
                    }),
                  s.nodes.meetsteamsessiongroup &&
                    (0, o.jsx)(wt, { schema: s }),
                  s.nodes.meetsteamscheduleview &&
                    (0, o.jsx)(kt, { schema: s }),
                  s.nodes.userpolls &&
                    Ve.iA.is_support &&
                    (0, o.jsx)(bt, { schema: s }),
                ],
              }),
              (0, o.jsx)(Me, { className: e.className, schema: s }),
            ],
          }),
        });
      });
      function gt(e) {
        const t = (0, ke.V9)();
        return (0, o.jsx)(ve.z9, { schema: e.schema, addtlAttrs: t });
      }
      function bt(e) {
        const { schema: t } = e,
          { callbacks: s, view: n } = (0, N.wU)(),
          l = (0, me.LU)(),
          [i, a, r] = (0, D.uD)(),
          d = _.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          c = _.useCallback(
            (e) => {
              l.GetEventModel().jsondata.user_polls ||
                (l.GetEventModel().jsondata.user_polls = []),
                l.GetEventModel().jsondata.user_polls.push({ ...e }),
                (function (e, t, s) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ poll_id: s }),
                    ),
                  );
                })(n, t.nodes.userpolls, e.poll_id),
                d();
            },
            [t, n, d, l],
          );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            i &&
              (0, o.jsx)(He, {
                hideModal: d,
                clanAccountID: l.GetClanAccountID(),
                fnUpdateSession: c,
              }),
            (0, o.jsx)(N.ff, {
              tooltip: "#UserPolls_Toolbar_ttip",
              onClick: a,
              toggled: i,
              children: (0, o.jsx)(P.fQB, {}),
            }),
          ],
        });
      }
      function Mt(e) {
        const { schema: t, clanSteamID: s } = e,
          { callbacks: n, view: l } = (0, N.wU)(),
          { image: i, video: a, previewyoutube: r } = t.nodes,
          c = _.useCallback(
            (e, t) => {
              l.dispatch(l.state.tr.insert(l.state.selection.to, t.create(e)));
            },
            [l],
          ),
          u = _.useCallback(() => l.focus(), [l]),
          {
            showInsertImageModal: p,
            showInsertVideoModal: m,
            imageModal: h,
            activeModal: x,
          } = (0, d.wU)({
            clanSteamID: s,
            imageNodeType: i,
            videoNodeType: a,
            onItemSelected: c,
            onHideModal: u,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            h,
            i &&
              (0, o.jsx)(N.ff, {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: p,
                toggled: "image" == x,
                children: (0, o.jsx)(P._V3, {}),
              }),
            a &&
              (0, o.jsx)(N.ff, {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: m,
                toggled: "video" == x,
                children: (0, o.jsx)(P.CeX, {}),
              }),
            r && (0, o.jsx)(Et, { schema: t }),
            (i || a || r) && (0, o.jsx)(N.XQ, {}),
          ],
        });
      }
      function Et(e) {
        const { schema: t } = e,
          { callbacks: s, view: n } = (0, N.wU)(),
          [l, i, a] = (0, D.uD)(),
          r = _.useCallback(() => {
            a(), n.focus();
          }, [a, n]),
          d = _.useCallback(
            (e, s) => {
              !(function (e, t, s, o = m.V2.left) {
                e.dispatch(
                  e.state.tr.insert(
                    e.state.selection.to,
                    t.create({ videoID: s, align: o }),
                  ),
                );
              })(n, t.nodes.previewyoutube, e, s),
                r();
            },
            [t, n, r],
          );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            l && (0, o.jsx)(k, { hideModal: r, onSave: d }),
            (0, o.jsx)(N.ff, {
              tooltip: "#EventEditor_InsertYouTube",
              onClick: i,
              toggled: l,
              children: (0, o.jsx)("img", { src: we.A }),
            }),
          ],
        });
      }
      function wt(e) {
        const { schema: t } = e,
          { callbacks: s, view: n } = (0, N.wU)(),
          l = (0, me.LU)(),
          [i, a, r] = (0, D.uD)(),
          d = _.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          c = _.useCallback(
            (e, s) => {
              l.GetEventModel().jsondata.meet_steam_groups ||
                (l.GetEventModel().jsondata.meet_steam_groups = []),
                l
                  .GetEventModel()
                  .jsondata.meet_steam_groups.push({ ...e, sessions: [s] }),
                (function (e, t, s) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ group_id: s }),
                    ),
                  );
                })(n, t.nodes.meetsteamsessiongroup, e.group_id),
                d();
            },
            [t, n, d, l],
          );
        if ((null == l ? void 0 : l.GetClanAccountID()) == (0, T.H)())
          return (0, o.jsxs)(o.Fragment, {
            children: [
              i && (0, o.jsx)(ee, { hideModal: d, fnUpdateSession: c }),
              (0, o.jsx)(N.ff, {
                tooltip: "#MeetSteam_add_group_ttip",
                onClick: a,
                toggled: i,
                children: (0, o.jsx)("img", { src: we.A }),
              }),
            ],
          });
      }
      function kt(e) {
        const { schema: t } = e,
          { callbacks: s, view: n } = (0, N.wU)(),
          l = (0, me.LU)(),
          [i, a, r] = (0, D.uD)(),
          d = _.useCallback(() => {
            r(), n.focus();
          }, [r, n]),
          c = _.useCallback(
            (e) => {
              l.GetEventModel().jsondata.meet_steam_schedules ||
                (l.GetEventModel().jsondata.meet_steam_schedules = []),
                l.GetEventModel().jsondata.meet_steam_schedules.push({ ...e }),
                (function (e, t, s) {
                  e.dispatch(
                    e.state.tr.insert(
                      e.state.selection.to,
                      t.create({ schedule_id: s }),
                    ),
                  );
                })(n, t.nodes.meetsteamscheduleview, e.schedule_id),
                d();
            },
            [t, n, d, l],
          );
        if ((null == l ? void 0 : l.GetClanAccountID()) == (0, T.H)())
          return (0, o.jsxs)(o.Fragment, {
            children: [
              i &&
                (0, o.jsx)(Se, {
                  hideModal: d,
                  inputScheduleModel: null,
                  fnUpdateSession: c,
                }),
              (0, o.jsx)(N.ff, {
                tooltip: "#MeetSteam_add_schedule_ttip",
                onClick: a,
                toggled: i,
                children: (0, o.jsx)("img", { src: we.A }),
              }),
            ],
          });
      }
      var Dt = s(75844),
        Ct = s(90316),
        yt = s.n(Ct),
        St = s(71696),
        Tt = s(1805),
        It = s(81962);
      function Pt(e) {
        const { schema: t, emoticonStore: s } = e,
          n = t.nodes.emoticon;
        (0, Oe.k3)(s),
          (0, i.c$)(
            _.useMemo(
              () => (0, u.sM)({ rules: [Gt(/:([a-zA-Z0-9_]+):$/, n, s)] }),
              [n, s],
            ),
          );
        const l = _.useMemo(
          () => [
            {
              type: n,
              component: Ut,
              readProps: (e) => ({ emoticonStore: s, emoticon: e.textContent }),
            },
          ],
          [n, s],
        );
        return (0, o.jsx)(a.U, { specs: l });
      }
      function Ut(e) {
        const { selected: t, emoticonStore: s, emoticon: n } = e;
        (0, Oe.k3)(s);
        if (s.BHasEmoticon(n)) {
          const e = t
            ? { background: "#54a5d4", filter: "brightness(1.2)" }
            : void 0;
          return (0, o.jsx)("span", {
            style: e,
            children: (0, o.jsx)(It.n, { emoticon: n }),
          });
        }
        return `:${n}:`;
      }
      function Gt(e, t, s) {
        return new u.fV(e, (e, o, n, l) => {
          const i = o[1];
          if (!s.BHasEmoticon(i)) return null;
          const a = t.create(null, e.schema.text(i));
          return e.tr.replaceWith(n, l, a);
        });
      }
      var Nt = s(91885),
        Ot = s(87981),
        Bt = s(42714),
        At = s(84811);
      const zt = (0, Dt.PA)(function (e) {
        const { editModel: t } = e,
          s = t.GetEventModel().loadedAllLanguages,
          n = t.GetCurEditLanguage();
        return s
          ? (0, o.jsx)(At.tH, {
              children: (0, o.jsx)(Vt, { ...e, eCurrentEditLanguage: n }),
            })
          : null;
      });
      const Vt = _.memo(function (e) {
        const {
            editModel: t,
            refOnInsertImage: s,
            limitBBCode: i,
            eCurrentEditLanguage: a,
          } = e,
          [r, u] = _.useState(),
          p = _.useMemo(() => (0, c.u)(i), [i]),
          [m, h] = _.useState(),
          x = (function (e, t) {
            const { nodes: s } = t.pm_schema,
              o = (0, d.w_)(e, s.image, s.video),
              n = (0, Nt.s)(s.dynamiclink);
            return _.useCallback(
              (...e) => {
                let t = "default";
                return (
                  o && (t = o(...e)), "default" == t && n && (t = n(...e)), t
                );
              },
              [o, n],
            );
          })(t.GetClanSteamID(), p);
        _.useEffect(() => {
          h(
            (function (e, t, s, o) {
              let l = t.GetDescription(s);
              return (
                (l =
                  null == l
                    ? void 0
                    : l.replace(
                        Oe.pN.GetUnvalidatedEmoticonReplaceRegex(),
                        "[emoticon]$1[/emoticon]",
                      )),
                new n.n(e, l, (e) => t.SetDescription(s, e), {
                  parser: {
                    fnProcessText: (t) =>
                      (0, Bt.F)(e.pm_schema, t, e.pm_schema.marks.link, o),
                  },
                })
              );
            })(p, t, a, x),
          );
        }, [p, x, t, a]);
        const f = _.useRef(void 0);
        (0, l.i)(m, { msAutosaveTimeout: 1e3 });
        const { nodes: j, marks: g } = p.pm_schema;
        return (
          (0, d.ww)(s, j.image, j.video, g.link, r),
          (0, o.jsx)(d.Su, {
            clanSteamID: t.GetClanSteamID(),
            imageNode: j.image,
            videoNode: j.video,
            children: (0, o.jsxs)("div", {
              className: yt().EventDescriptionContainer,
              children: [
                (0, o.jsx)(jt, {
                  view: r,
                  schema: p.pm_schema,
                  refUpdateToolbar: f,
                  className: yt().ToolBar,
                  clanSteamID: t.GetClanSteamID(),
                }),
                (0, o.jsx)("div", {
                  className: yt().EventDescriptionArea,
                  children: (0, o.jsx)(Tt.l, {
                    pmState: m,
                    className: (0, v.A)(
                      yt().EventDescriptionRichField,
                      yt().EventDetailsBody,
                    ),
                    refOnUpdate: f,
                    refView: u,
                    panelProps: { onBlur: () => m.CommitChanges() },
                    children: (0, o.jsx)(Rt, {
                      eventSchemaConfig: p,
                      editModel: t,
                      onURLPasted: x,
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      });
      const Rt = _.memo(function (e) {
        const { eventSchemaConfig: t, editModel: s, onURLPasted: n } = e,
          l = (0, Ne.LJ)(),
          { marks: i, nodes: a } = t.pm_schema;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(r.W, {
              linkMarkType: i.link,
              onURLPasted: n,
              schema: t.pm_schema,
            }),
            a.image && (0, o.jsx)(St.pw, { nodeType: a.image }),
            (0, o.jsx)(Ft, {
              schemaConfig: t,
              editModel: s,
              clanSteamID: s.GetClanSteamID(),
            }),
            (0, o.jsx)(Pt, { emoticonStore: l, schema: t.pm_schema }),
          ],
        });
      });
      function Ft(e) {
        const { schemaConfig: t, editModel: s, clanSteamID: n } = e,
          l = t.pm_schema,
          r = _.useMemo(
            () =>
              (function (e) {
                return u.sM({ rules: [u.tG(/^>$/, e.nodes.quote)] });
              })(l),
            [l],
          );
        (0, i.c$)(r);
        const c = l.nodes,
          p = c.image,
          m = c.video,
          h = c.carousel,
          x = _.useCallback(
            (e, o) => ({
              schemaConfig: t,
              node: o,
              imageNodeType: p,
              videoNodeType: m,
              carouselNodeType: h,
              editModel: s,
              clanSteamID: n,
            }),
            [t, p, m, h, s, n],
          ),
          f = _.useMemo(
            () => [
              c.previewyoutube && {
                type: c.previewyoutube,
                component: w,
                readProps: (e) => ({
                  videoID: e.attrs.videoID,
                  align: e.attrs.align,
                  editModel: s,
                }),
              },
              p && {
                type: p,
                component: d.Yp,
                readProps: (e) => x("image", e),
              },
              m && {
                type: m,
                component: d.Yp,
                readProps: (e) => x("video", e),
              },
              c.meetsteamsessiongroup && {
                type: c.meetsteamsessiongroup,
                component: he,
                readProps: (e) => ({ group_id: e.attrs.group_id }),
              },
              c.meetsteamscheduleview && {
                type: c.meetsteamscheduleview,
                component: Pe,
                readProps: (e) => ({ schedule_id: e.attrs.schedule_id }),
              },
              c.userpolls && {
                type: c.userpolls,
                component: ht,
                readProps: (e) => ({ poll_id: e.attrs.poll_id }),
              },
              c.dynamiclink && {
                type: c.dynamiclink,
                component: Nt.b,
                readProps: (e) => ({
                  editModel: s,
                  href: e.attrs.href,
                  schema: t.pm_schema,
                }),
              },
              c.carousel && {
                type: c.carousel,
                component: Ot.E,
                readProps: (e) => ({
                  node: e,
                  imageNodeType: p,
                  videoNodeType: m,
                  schemaConfig: t,
                  editModel: s,
                }),
              },
            ],
            [c, p, m, s, x, t],
          );
        return (0, o.jsx)(a.U, { specs: f });
      }
    },
    28106: (e, t, s) => {
      "use strict";
      s.d(t, { W: () => _ });
      var o = s(7850),
        n = s(57053),
        l = s(52893),
        i = s(90626),
        a = s(61859),
        r = s(17558),
        d = s(22145),
        c = s(37341),
        u = s(42714);
      const _ = i.memo(function (e) {
        const {
            linkMarkType: t,
            onURLPasted: s,
            schema: a,
            onClickURL: c = m,
          } = e,
          _ = i.useRef(c);
        _.current = c;
        const [h, x] = i.useState(),
          [f, v] = i.useState(),
          [j, g] = i.useState(),
          [b, M] = (0, r.E)(a),
          E = i.useMemo(
            () =>
              new l.k_({
                props: {
                  handleClickOn(e, s, o, n, l, i) {
                    if (i && (l.ctrlKey || 1 == l.button)) {
                      const e = o
                        .resolve(s - n)
                        .marks()
                        .find((e) => e.type == t);
                      if (e)
                        return (
                          _.current(e.attrs.href, l.view),
                          l.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  handleKeyDown: (e, t) =>
                    !(
                      "k" != t.key ||
                      (!t.metaKey && !t.ctrlKey) ||
                      t.shiftKey ||
                      t.altKey
                    ) && (b(e), !0),
                  clipboardTextParser(e, o, l, i) {
                    const r = (0, u.F)(a, e, t, s);
                    return r && new n.Ji(n.FK.from(r), o.start(), o.end());
                  },
                  handlePaste(e, o, l) {
                    let i = [];
                    if (
                      (l.content.descendants((e, o) => {
                        if (e.isText) {
                          const n = (0, u.F)(a, e.text, t, s);
                          n && i.push({ node: e, pos: o, rgNodes: n });
                        }
                      }),
                      !i.length)
                    )
                      return !1;
                    let r = e.state.tr;
                    r.selection.empty || r.deleteSelection();
                    let d = r.selection.from,
                      c = 0;
                    for (const e of i) {
                      const { node: t, pos: s, rgNodes: o } = e,
                        i = l.content.cut(c, s).append(n.FK.from(o));
                      r.insert(d, i), (d += i.size + 2), (c = s + t.nodeSize);
                    }
                    return (
                      r.insert(d, l.content.cut(c)),
                      r.scrollIntoView(),
                      e.dispatch(r),
                      !0
                    );
                  },
                  handleDOMEvents: {
                    mouseover: (e, t) => {
                      for (
                        let e = t.target;
                        e && e != t.currentTarget;
                        e = e.parentElement
                      )
                        if ("A" == e.nodeName && "getBoundingClientRect" in e) {
                          const t = e.getBoundingClientRect();
                          return (
                            x(t.left + t.width / 2), v(t.bottom + 2), void g(e)
                          );
                        }
                      g(void 0);
                    },
                    mouseleave: (e, t) => (g(void 0), !1),
                  },
                },
              }),
            [t, b, s, a],
          );
        (0, d.c$)(E);
        let w = null;
        return (
          j &&
            h &&
            f &&
            (w = (0, o.jsx)(p, {
              top: f,
              left: h,
              href: j.getAttribute("href"),
            })),
          (0, o.jsxs)(o.Fragment, { children: [w, M] })
        );
      });
      function p(e) {
        const { top: t, left: s, href: n } = e,
          [l, r] = i.useState(0),
          d = i.useRef(null);
        i.useLayoutEffect(() => {
          r(d.current.getBoundingClientRect().width);
        }, [t, s, n]);
        const u = { top: `${t}px`, left: `${Math.max(s - l / 2, 12)}px` };
        return (0, o.jsxs)("div", {
          className: c.Hover,
          style: u,
          ref: d,
          children: [
            (0, o.jsx)("div", { className: c.Link, children: n }),
            (0, o.jsx)("div", {
              className: c.LinkHelp,
              children: (0, a.we)("#UserGameNotes_ClickToOpenLink"),
            }),
          ],
        });
      }
      function m(e, t) {
        t.open(e);
      }
    },
    86807: (e, t, s) => {
      "use strict";
      s.d(t, { R: () => i });
      var o = s(7850),
        n = s(90626),
        l = s(72739);
      function i(e) {
        const {
            id: t,
            role: s,
            visible: i = !0,
            className: a,
            keepMounted: r = !1,
            expandDirection: d = "height",
            msAnimationDuration: c = 250,
            children: u,
          } = e,
          {
            style: _,
            active: p,
            refDiv: m,
          } = (function (e, t = "height", s = 250) {
            const o = n.useRef(null),
              i = n.useRef(!0),
              [a, r] = n.useState("idle"),
              [d, c] = n.useState(e ? {} : { [t]: "0px", overflow: "hidden" }),
              [u, _] = n.useState(e);
            n.useLayoutEffect(() => {
              i.current || r("start"), e && _(e);
            }, [e]),
              n.useLayoutEffect(
                () => (
                  (i.current = !1),
                  () => {
                    i.current = !0;
                  }
                ),
                [],
              ),
              n.useLayoutEffect(() => {
                const s = o.current,
                  n = "height" == t ? "scrollHeight" : "scrollWidth",
                  i = () => {
                    l.unstable_batchedUpdates(() => {
                      c(e ? {} : { [t]: "0px", overflow: "hidden" }),
                        r("idle"),
                        _(e);
                    });
                  };
                if ("start" == a) {
                  const o = s[n];
                  0 == o
                    ? i()
                    : (c((s) => ({
                        [t]: e ? "0px" : `${o}px`,
                        ...s,
                        overflow: "hidden",
                      })),
                      r("active"));
                } else if ("active" == a) {
                  s.scrollTop;
                  const o = s[n];
                  return (
                    c({ overflow: "hidden", [t]: e ? `${o}px` : "0px" }),
                    s.addEventListener("transitionend", i),
                    () => {
                      s.removeEventListener("transitionend", i);
                    }
                  );
                }
              }, [a, e]);
            const p = { ...d, transition: `${t} ${s}ms` };
            return { style: p, active: u, refDiv: o };
          })(i, d, c);
        return i || p || r
          ? (0, o.jsx)("div", {
              id: t,
              role: s,
              className: a,
              ref: m,
              style: _,
              inert: !i,
              children: u,
            })
          : null;
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7257],
    {
      27257: (Z, ue, u) => {
        "use strict";
        u.r(ue), u.d(ue, { default: () => fo });
        var e = u(7850),
          R = u(8561),
          ve = u(81240),
          L = u(19565),
          me = u(23569),
          N = u(99931),
          w = u(93519),
          ie = u(89984),
          G = u(79216);
        function se(a) {
          return G.sM({ rules: [G.tG(/^>$/, a.nodes.quote)] });
        }
        var h = u(90626),
          ee = u(43458),
          z = u(1917),
          _ = u(19316),
          J = u(2801),
          H = u(38348),
          U = u(36707),
          r = u(18210),
          S = u(54963),
          Y = u(63226),
          W = u(93464),
          te = u(52279);
        function Te(a, t, o, s = z.V2.left) {
          a.dispatch(
            a.state.tr.insert(
              a.state.selection.to,
              t.create({ videoID: o, align: s }),
            ),
          );
        }
        function _e(a) {
          const {
              videoID: t,
              align: o,
              editModel: s,
              selected: n,
              setAttrs: l,
              focusView: i,
            } = a,
            [d, c, m] = (0, S.uD)(),
            p = h.useCallback(() => {
              m(), i();
            }, [m, i]),
            x = h.useCallback(
              (v, M) => {
                l({ videoID: v, align: M }), p();
              },
              [l, p],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              d &&
                (0, e.jsx)(Ee, {
                  videoID: t,
                  align: o,
                  bEditing: !0,
                  hideModal: p,
                  onSave: x,
                }),
              (0, e.jsxs)(te.rK, {
                className: (0, U.A)(Y.PreviewYoutubeEditor, n && Y.Selected),
                children: [
                  (0, e.jsx)(te.h5, {
                    onEditClick: c,
                    onDeleteClick: a.removeNode,
                    bStrongShadows: !0,
                  }),
                  n && (0, e.jsx)("div", { className: Y.SelectionOverlay }),
                  (0, e.jsx)(W.Bm, {
                    event: s.GetEventModel(),
                    strTag: "previewyoutube",
                    args: { "": `${t};${o}` },
                    rawargs: `${t};${o}`,
                    showErrorInfo: !0,
                  }),
                ],
              }),
            ],
          });
        }
        function Ee(a) {
          const {
              videoID: t = "",
              align: o = "",
              bEditing: s = !1,
              hideModal: n,
              onSave: l,
            } = a,
            [i, d] = h.useState(o || z.V2.full),
            [c, m] = h.useState(
              t ? `https://www.youtube.com/watch?v=${t}` : "",
            ),
            [p, x] = h.useState(void 0),
            v = h.useCallback(() => {
              const { strVideoID: g } = (0, ee.XU)(c);
              return (
                g ? l(g, i) : x((0, r.we)("#EventEditor_InsertYouTube_NoURL")),
                !1
              );
            }, [c, i, l]),
            M = h.useCallback((g) => {
              g && (g.element.focus(), g.element.select());
            }, []);
          return (0, e.jsx)(J.EN, {
            active: !0,
            children: (0, e.jsxs)(H._, {
              strTitle: (0, r.we)("#EventEditor_InsertYouTube"),
              closeModal: n,
              strOKText: s
                ? (0, r.we)("#Button_Save")
                : (0, r.we)("#EventEditor_InsertYouTube"),
              onOK: v,
              children: [
                p && (0, e.jsx)("div", { className: Y.Error, children: p }),
                (0, e.jsx)(_.pd, {
                  label: (0, r.we)("#EventEditor_InsertYouTube_URL"),
                  placeholder: (0, r.we)(
                    "#EventEditor_InsertYouTube_Placholder",
                  ),
                  value: c,
                  ref: M,
                  onChange: (g) => m(g.currentTarget.value),
                }),
                (0, e.jsxs)(_.o1, {
                  label: (0, r.we)("#EventEditor_InsertYouTube_Position"),
                  children: [
                    (0, e.jsx)(_.Od, {
                      checked: i == z.V2.left,
                      onChange: (g) => g && d(z.V2.left),
                      label: (0, r.we)("#EventEditor_InsertYouTube_Left"),
                    }),
                    (0, e.jsx)(_.Od, {
                      checked: i == z.V2.right,
                      onChange: (g) => g && d(z.V2.right),
                      label: (0, r.we)("#EventEditor_InsertYouTube_Right"),
                    }),
                    (0, e.jsx)(_.Od, {
                      checked: i == z.V2.full,
                      onChange: (g) => g && d(z.V2.full),
                      label: (0, r.we)("#EventEditor_InsertYouTube_Full"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var ae = u(64868),
          B = u(55884),
          y = u(75372),
          I = u(65946),
          pe = u(16369),
          re = u(21733),
          b = u(56718),
          D = u(1880),
          C = u(69168),
          f = u(50660),
          O = u(1397),
          P = u.n(O),
          V = u(99412),
          A = u(71742),
          F = u(50109),
          q = u(7582),
          Q = u(95695),
          he = u(43308),
          de = u(41635),
          Ge = u(92264),
          ne = u(36174),
          be = u(87937),
          ot = u(61819),
          st = u(88942),
          nt = u(3166),
          lt = u(41735),
          it = u.n(lt),
          at = u(11243),
          fe = u(69909);
        function rt(a) {
          const { hideModal: t, fnUpdateSession: o } = a,
            [s, n] = (0, h.useState)(() => De(!0, null)),
            [l, i] = (0, h.useState)(() => Ce(!0, null)),
            [d] = (0, I.q3)(() => [l.location_type]);
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#MeetSteam_create_title"),
              onOK: () => o(s, l),
              closeModal: () => {
                i(Ce(!0, null)), n(De(!0, null)), t();
              },
              bOKDisabled: !d == null,
              children: (0, e.jsxs)("div", {
                className: P().DialogCtn,
                children: [
                  (0, e.jsx)(Ae, { group: s, fnSetGroup: n }),
                  (0, e.jsx)(Ve, { session: l, fnSetSession: i }),
                ],
              }),
            }),
          });
        }
        function dt(a) {
          const { hideModal: t, groupInput: o, fnUpdateGroupSession: s } = a,
            [n, l] = (0, h.useState)(() => De(!1, o));
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#MeetSteam_edit_title"),
              onOK: () => {
                s(n), t();
              },
              onCancel: () => {
                l(De(!1, o)), t();
              },
              children: (0, e.jsx)("div", {
                className: P().DialogCtn,
                children: (0, e.jsx)(Ae, { group: n, fnSetGroup: l }),
              }),
            }),
          });
        }
        function Be(a) {
          const {
              bCreate: t,
              hideModal: o,
              sessionInput: s,
              fnUpdateSession: n,
            } = a,
            [l, i] = (0, h.useState)(() => Ce(t, s)),
            [d] = (0, I.q3)(() => [l.location_type]);
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                n(l), o();
              },
              onCancel: () => {
                i(Ce(t, s)), o();
              },
              bOKDisabled: !d,
              children: (0, e.jsx)("div", {
                className: P().DialogCtn,
                children: (0, e.jsx)(Ve, { session: l, fnSetSession: i }),
              }),
            }),
          });
        }
        function Ae(a) {
          const { group: t, fnSetGroup: o } = a,
            s = (0, F.E)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.pd, {
                type: "text",
                label: (0, r.we)("#MeetSteam_edit_session_name"),
                value: r.NT.Get(t.localized_session_title, s),
                onChange: (n) => {
                  const l = { ...t };
                  (l.localized_session_title = r.NT.Set(
                    l.localized_session_title,
                    s,
                    n.currentTarget.value,
                  )),
                    o(l);
                },
              }),
              (0, e.jsx)(_.JU, {
                children: (0, r.we)("#MeetSteam_edit_session_desc"),
              }),
              (0, e.jsx)("textarea", {
                className: (0, U.A)(
                  "DialogTextInputBase",
                  P().EventDescriptionField,
                ),
                value: r.NT.Get(t.localized_session_description, s),
                rows: 5,
                onChange: (n) => {
                  const l = { ...t };
                  (l.localized_session_description = r.NT.Set(
                    l.localized_session_description,
                    s,
                    n.currentTarget.value,
                  )),
                    o(l);
                },
              }),
              (0, e.jsx)(_.pd, {
                type: "text",
                label: "Intended Audience",
                tooltip:
                  "A short descriptions for whom then event is designed for to help partners self select",
                value: r.NT.Get(t.localized_intended_audience, s),
                onChange: (n) => {
                  const l = { ...t };
                  (l.localized_intended_audience = r.NT.Set(
                    l.localized_intended_audience,
                    s,
                    n.currentTarget.value,
                  )),
                    o(l);
                },
              }),
              (0, e.jsxs)(_.JU, {
                children: [
                  "FAQ ",
                  (0, e.jsx)(at.o, {
                    tooltip:
                      "Optional FAQ section which appears in the pop-up display and hidden by default",
                  }),
                ],
              }),
              (0, e.jsx)("textarea", {
                className: (0, U.A)(
                  "DialogTextInputBase",
                  P().EventDescriptionField,
                ),
                value: r.NT.Get(t.localized_sesssion_faq, s),
                rows: 5,
                onChange: (n) => {
                  const l = { ...t };
                  (l.localized_sesssion_faq = r.NT.Set(
                    l.localized_sesssion_faq,
                    s,
                    n.currentTarget.value,
                  )),
                    o(l);
                },
              }),
              (0, e.jsx)(_.Yh, {
                checked: t.ask_registration_question,
                onChange: (n) => {
                  const l = { ...t };
                  (l.ask_registration_question = n), o(l);
                },
                label:
                  "Ask partner to tell us what they want to learn from the sessions",
              }),
              (0, e.jsx)(ct, { ...a }),
            ],
          });
        }
        function ct(a) {
          var t;
          const { group: o, fnSetGroup: s } = a,
            [n, l] = (0, h.useState)(
              ((t = o.group_visibility_tokens) == null ? void 0 : t.length) > 0,
            );
          return n
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    children:
                      "By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.",
                  }),
                  o.group_visibility_tokens.map((i, d) =>
                    (0, e.jsx)(
                      _.pd,
                      {
                        type: "number",
                        min: "10000",
                        max: "99999",
                        value: i || 1e4,
                        onChange: (c) => {
                          const m = { ...o };
                          (m.group_visibility_tokens[d] = Number.parseInt(
                            c.currentTarget.value,
                          )),
                            s(m);
                        },
                        label: "Visibility Token",
                      },
                      "token" + i + "_" + d,
                    ),
                  ),
                  (0, e.jsx)(_.$n, {
                    onClick: () => {
                      const i = { ...o };
                      (i.group_visibility_tokens = [
                        ...i.group_visibility_tokens,
                        1e4,
                      ]),
                        s(i);
                    },
                    children: "Add Token",
                  }),
                  o.group_visibility_tokens.length > 0 &&
                    (0, e.jsx)(_.$n, {
                      onClick: () => {
                        const i = { ...o };
                        (i.group_visibility_tokens =
                          i.group_visibility_tokens.slice(0, -1)),
                          s(i);
                      },
                      children: "Remove Last Token",
                    }),
                ],
              })
            : (0, e.jsx)(_.Yh, {
                checked: !1,
                onChange: l,
                label: "Change Visibility Options",
              });
        }
        function Ve(a) {
          const { session: t, fnSetSession: o } = a,
            [s, n, l, i, d, c] = (0, I.q3)(() => [
              t.rtime_start,
              t.rtime_end,
              t.max_capacity,
              t.max_per_team,
              t.location_type,
              t.in_person_time_zone,
            ]),
            m = [];
          for (let M = 0; M < 4; ++M) m.push({ data: M, label: M });
          const p = Math.max(0, Math.floor((n - s) / 60)),
            x = Intl.DateTimeFormat().resolvedOptions().timeZone,
            v = d === "in_person" ? (c != null ? c : fe.hh) : x;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Le, {
                startTime: t.rtime_start,
                location_type: d,
                fnUpdateLocationAndTZ: (M, g) =>
                  o({ ...t, location_type: M, in_person_time_zone: g }),
                in_person_time_zone: c,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(he.K, {
                strDescription: (0, r.we)("#MeetSteam_edit_start"),
                nEarliestTime: 0,
                fnGetTimeToUpdate: () => s,
                fnSetTimeToUpdate: (M) =>
                  o({
                    ...t,
                    rtime_start: M,
                    rtime_end: M + ne.Kp.PerMinute * p,
                  }),
                fnIsValidDateTime: () => !0,
                bShowTimeZone: !0,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(_.pd, {
                type: "number",
                min: 0,
                label: (0, r.we)("#MeetSteam_edit_duration"),
                onChange: (M) => {
                  const g = Number.parseInt(M.currentTarget.value);
                  o({ ...t, rtime_end: t.rtime_start + ne.Kp.PerMinute * g });
                },
                value: p,
              }),
              (0, e.jsx)(Re, {
                rtime_start: s,
                rtime_end: n,
                sDisplayTimeZone: v,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
              (0, e.jsxs)("div", {
                className: P().ParticipantRow,
                children: [
                  (0, e.jsx)(_.pd, {
                    type: "number",
                    value: l,
                    label: (0, r.we)("#MeetSteam_edit_max_capacity"),
                    min: 1,
                    onChange: (M) =>
                      o({
                        ...t,
                        max_capacity: Number.parseInt(M.currentTarget.value),
                      }),
                  }),
                  (0, e.jsx)(_.m, {
                    controlled: !0,
                    label: (0, r.we)("#MeetSteam_edit_guest_count"),
                    tooltip: (0, r.we)("#MeetSteam_edit_guest_count_ttip"),
                    rgOptions: m,
                    selectedOption: i,
                    onChange: (M) => o({ ...t, max_per_team: M.data }),
                  }),
                ],
              }),
            ],
          });
        }
        function Re(a) {
          const { rtime_start: t, rtime_end: o, sDisplayTimeZone: s } = a,
            n = be.unix(t).tz(fe.hh),
            l = be.unix(t).tz(s),
            i = l.utcOffset() - n.utcOffset(),
            d = be.unix(o).tz(fe.hh),
            c = be.unix(o).tz(s),
            m = c.utcOffset() - d.utcOffset();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                children: [
                  (0, r.we)("#MeetSteam_edit_displayed_start"),
                  ": ",
                  (0, Ge.P0)(l.unix() + i * 60, !1, l.format("z")),
                  " ",
                ],
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, r.we)("#MeetSteam_edit_displayed_end"),
                  ": ",
                  (0, Ge.P0)(c.unix() + m * 60, !1, c.format("z")),
                  " ",
                ],
              }),
            ],
          });
        }
        function Le(a) {
          const {
              startTime: t,
              location_type: o,
              fnUpdateLocationAndTZ: s,
              in_person_time_zone: n,
            } = a,
            l = { option: (x) => ({ ...x, color: "#444444" }) },
            i = ut(t),
            d = h.useMemo(
              () =>
                i.reduce((x, v) => x.set(v.name, v.friendly_name), new Map()),
              [i],
            ),
            c = (x) => {
              var v;
              return (v = d.get(x)) != null ? v : x;
            },
            m = h.useId(),
            p = h.useId();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                id: m,
                className: Q.EventEditorTextTitle,
                children: (0, r.we)("#MeetSteam_edit_date_display_title"),
              }),
              (0, e.jsx)("div", {
                id: p,
                className: Q.EventEditorTextSubTitle,
                children: (0, r.we)("#MeetSteam_edit_date_display_desc"),
              }),
              (0, e.jsxs)(_.zW, {
                labelId: m,
                descriptionId: p,
                value: o,
                onChange: (x) => s(x, n),
                children: [
                  (0, e.jsx)(_.a, {
                    value: "in_person",
                    children: (0, r.we)(
                      "#MeetSteam_edit_date_display_in_person",
                    ),
                  }),
                  (0, e.jsx)(_.a, {
                    value: "virtual",
                    children: (0, r.we)("#MeetSteam_edit_date_display_virtual"),
                  }),
                ],
              }),
              o === "in_person" &&
                (0, e.jsx)(ot.Ay, {
                  styles: l,
                  isSearchable: !0,
                  isMulti: !1,
                  options: i.map((x) => ({
                    label: x.friendly_name,
                    value: x.name,
                  })),
                  defaultMenuIsOpen: !1,
                  value: n
                    ? { label: c(n), value: n }
                    : { label: c(fe.hh), value: fe.hh },
                  onChange: (x) => s(o, x.value),
                }),
            ],
          });
        }
        function ut(a) {
          const t = (0, st.I)({
            queryKey: ["timezone", a],
            queryFn: async () => {
              const o = `${nt.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                s = { reference_time: a },
                n = await it().get(o, { params: s });
              return n == null ? void 0 : n.data.timezones;
            },
          });
          return t.isSuccess ? t.data : [];
        }
        function De(a, t) {
          if (a) {
            const s = y.mh.GetEditModel().GetEventModel()
              .jsondata.meet_steam_groups;
            let n = 0;
            do n = Math.floor(1e4 + Math.random() * 9e4);
            while (s && s.findIndex((l) => l.group_id == n) >= 0);
            return {
              group_id: n,
              localized_session_title: (0, de.$Y)([], V.bP9, null),
              localized_session_description: (0, de.$Y)([], V.bP9, null),
              localized_sesssion_faq: (0, de.$Y)([], V.bP9, null),
              localized_intended_audience: (0, de.$Y)([], V.bP9, null),
              group_visibility_tokens: [],
              ask_registration_question: !1,
              sessions: [],
            };
          } else if (t)
            return {
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
            };
          return (
            (0, A.wT)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null
          );
        }
        function Ce(a, t) {
          if (a) {
            const o = q.HD.GetTimeNowWithOverride(),
              n = y.mh.GetEditModel().GetEventModel()
                .jsondata.meet_steam_groups,
              l =
                n == null
                  ? void 0
                  : n.reduce((c, m) => c.concat(m.sessions), []);
            let i = 0;
            do i = Math.floor(1e4 + Math.random() * 9e4);
            while (l && l.findIndex((c) => c.id == i) >= 0);
            const d = Math.ceil(o / 3600) * 3600;
            return {
              id: i,
              rtime_start: d + ne.Kp.PerDay,
              rtime_end: d + ne.Kp.PerDay + ne.Kp.PerHour,
              max_capacity: 100,
              max_per_team: 3,
            };
          } else if (t) return { ...t };
          return (
            (0, A.wT)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null
          );
        }
        function Pe(a) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.meet_steam_groups.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.meet_steam_groups[o];
            for (let n = 0; n < s.sessions.length; ++n)
              if (s.sessions[n].id == a)
                return { groupIndex: o, sessionIndex: n };
          }
          return null;
        }
        function ze(a) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.meet_steam_groups.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.meet_steam_groups[o];
            if (s.group_id == a) return { group: s, groupIndex: o };
          }
          return null;
        }
        function Fe(a) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.meet_steam_schedules.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.meet_steam_schedules[o];
            if (s.schedule_id == a) return { schedule: s, scheduleIndex: o };
          }
          return null;
        }
        var xe = u(36118),
          oe = u(21438);
        function mt(a, t, o) {
          a.dispatch(
            a.state.tr.insert(a.state.selection.to, t.create({ group_id: o })),
          );
        }
        function pt(a) {
          var t;
          const { focusView: o, removeNode: s, group_id: n } = a,
            l = (0, oe.LU)(),
            i = (0, I.q3)(() => {
              var j;
              return (j = l.GetEventModel().jsondata.meet_steam_groups) == null
                ? void 0
                : j.find((E) => E.group_id == n);
            }),
            [d, c, m] = (0, S.uD)(),
            p = h.useCallback(() => {
              o(), m();
            }, [o, m]),
            [x, v, M] = (0, S.uD)(),
            g = h.useCallback(() => {
              o(), M();
            }, [o, M]);
          return !i || l.GetClanAccountID() != (0, pe.H)()
            ? (0, e.jsx)("div", {
                children: "Error: Cannot edit meet steam session group",
              })
            : (0, e.jsxs)("div", {
                className: P().EditorCtn,
                children: [
                  (0, e.jsx)(ht, { groupData: i, focusView: o }),
                  (0, e.jsxs)("div", {
                    className: P().controls,
                    children: [
                      (0, e.jsx)(f.ff, {
                        onClick: c,
                        tooltip: (0, r.we)("#Button_Edit"),
                        children: (0, e.jsx)(b.ffu, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: v,
                        tooltip: (0, r.we)("#Button_Delete"),
                        children: (0, e.jsx)(b.sED, {}),
                      }),
                      ((t = i.group_visibility_tokens) == null
                        ? void 0
                        : t.length) > 0 &&
                        (0, e.jsx)(f.ff, {
                          onClick: () => {},
                          tooltip:
                            "Limited visibility to those with the appropriate URLs",
                          children: (0, e.jsx)(xe.WLA, {}),
                        }),
                      !!i.ask_registration_question &&
                        (0, e.jsx)(f.ff, {
                          onClick: () => {},
                          tooltip:
                            "Will ask partner to provides questions for us for this session.",
                          children: (0, e.jsx)(xe.vfN, {}),
                        }),
                    ],
                  }),
                  !!d &&
                    (0, e.jsx)(dt, {
                      hideModal: p,
                      groupInput: i,
                      fnUpdateGroupSession: (j) => {
                        const { groupIndex: E } = ze(j.group_id),
                          k = y.mh.GetEditModel();
                        (k.GetEventModel().jsondata.meet_steam_groups[E] = j),
                          k.SetDirty(B.IQ.description);
                      },
                    }),
                  !!x &&
                    (0, e.jsx)(C.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const { groupIndex: j } = ze(i.group_id),
                            E = y.mh.GetEditModel(),
                            k = [
                              ...E.GetEventModel().jsondata.meet_steam_groups,
                            ];
                          k.splice(j, 1),
                            (E.GetEventModel().jsondata.meet_steam_groups = k),
                            E.SetDirty(B.IQ.description),
                            s();
                        },
                        closeModal: g,
                      }),
                    }),
                ],
              });
        }
        function ht(a) {
          const { groupData: t, focusView: o } = a,
            s = (0, I.q3)(() => t.sessions || []),
            [n, l, i] = (0, S.uD)(),
            d = h.useCallback(() => {
              o(), i();
            }, [o, i]);
          return t
            ? (0, e.jsxs)(re.jr, {
                groupData: t,
                children: [
                  s.map((c, m) =>
                    (0, e.jsx)(
                      ft,
                      {
                        focusView: o,
                        sessionID: c.id,
                        bShowOR: m + 1 < s.length,
                      },
                      "timecol_" + t.group_id + "_" + c.id,
                    ),
                  ),
                  (0, e.jsx)(f.ff, {
                    className: P().AddNew,
                    onClick: l,
                    tooltip: (0, r.we)("#MeetSteam_add"),
                    children: (0, e.jsx)(b.OMN, {}),
                  }),
                  n &&
                    (0, e.jsx)(Be, {
                      bCreate: !0,
                      hideModal: d,
                      fnUpdateSession: (c) => {
                        const m = y.mh.GetEditModel(),
                          p = [...t.sessions, c];
                        p.sort((x, v) => x.rtime_start - v.rtime_start),
                          (t.sessions = p),
                          m.SetDirty(B.IQ.description);
                      },
                    }),
                ],
              })
            : null;
        }
        function ft(a) {
          const { sessionID: t, bShowOR: o, focusView: s } = a,
            [n, l] = (0, S.OP)(),
            i = (0, I.q3)(() => {
              const { groupIndex: j, sessionIndex: E } = Pe(t);
              return y.mh.GetEditModel().GetEventModel().jsondata
                .meet_steam_groups[j].sessions[E];
            }),
            [d, c, m] = (0, S.uD)(),
            p = h.useCallback(() => {
              s(), m();
            }, [s, m]),
            [x, v, M] = (0, S.uD)(),
            g = h.useCallback(() => {
              s(), M();
            }, [s, M]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: P().Column,
                ...l,
                children: [
                  (0, e.jsx)(re.Tn, { sessionData: i }),
                  !!n &&
                    (0, e.jsxs)("div", {
                      className: P().controls,
                      children: [
                        (0, e.jsx)(f.ff, {
                          onClick: c,
                          tooltip: (0, r.we)("#Button_Edit"),
                          children: (0, e.jsx)(b.ffu, {}),
                        }),
                        (0, e.jsx)(f.ff, {
                          onClick: v,
                          tooltip: (0, r.we)("#Button_Delete"),
                          children: (0, e.jsx)(b.sED, {}),
                        }),
                      ],
                    }),
                  !!d &&
                    (0, e.jsx)(Be, {
                      bCreate: !1,
                      hideModal: p,
                      sessionInput: i,
                      fnUpdateSession: (j) => {
                        const E = y.mh.GetEditModel(),
                          { groupIndex: k, sessionIndex: X } = Pe(t),
                          le = [
                            ...E.GetEventModel().jsondata.meet_steam_groups[k]
                              .sessions,
                          ];
                        (le[X] = j),
                          le.sort((Ne, _o) => Ne.rtime_start - _o.rtime_start),
                          (E.GetEventModel().jsondata.meet_steam_groups[
                            k
                          ].sessions = le),
                          E.SetDirty(B.IQ.description);
                      },
                    }),
                  !!x &&
                    (0, e.jsx)(C.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const j = y.mh.GetEditModel(),
                            { groupIndex: E, sessionIndex: k } = Pe(t),
                            X = [
                              ...j.GetEventModel().jsondata.meet_steam_groups[E]
                                .sessions,
                            ];
                          X.splice(k, 1),
                            X.sort((le, Ne) => le.rtime_start - Ne.rtime_start),
                            (j.GetEventModel().jsondata.meet_steam_groups[
                              E
                            ].sessions = X),
                            j.SetDirty(B.IQ.description);
                        },
                        closeModal: g,
                      }),
                    }),
                ],
              }),
              o && (0, e.jsx)(re.w3, {}),
            ],
          });
        }
        var ce = u(73723),
          K = u(38539),
          Eo = u(81973),
          vt = u(35184);
        function xt(a, t, o, s, n) {
          const l = () => o.createChecked(null, n.createChecked()),
            i = () => s.createChecked(null, n.createChecked());
          return a.createChecked(null, [
            t.createChecked(null, [l(), l()]),
            t.createChecked(null, [i(), i()]),
          ]);
        }
        function Mt(a) {
          const { schema: t } = a,
            {
              table: o,
              table_row: s,
              table_header: n,
              table_cell: l,
              paragraph: i,
            } = t.nodes,
            d = h.useCallback(
              (c, m, p) =>
                K.aH(c)
                  ? !1
                  : (m && m(c.tr.insert(c.selection.to, xt(o, s, n, l, i))),
                    !0),
              [o, s, n, l, i],
            );
          return o
            ? (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_InsertTable"),
                command: d,
                children: (0, e.jsx)(b._Q2, {}),
              })
            : null;
        }
        function gt(a) {
          const { schema: t, className: o } = a,
            { callbacks: s, view: n } = (0, f.wU)(),
            [l, i] = h.useState(() => !!t.nodes.table && K.aH(n.state));
          return (
            (0, S.hL)(
              s,
              h.useCallback(
                (d) => i(!!t.nodes.table && K.aH(d.state)),
                [t.nodes.table],
              ),
            ),
            (0, e.jsx)(vt.R, {
              visible: l,
              msAnimationDuration: 100,
              children: (0, e.jsx)(f.Ez, {
                className: o,
                children: (0, e.jsx)(jt, { schema: t }),
              }),
            })
          );
        }
        function jt(a) {
          const { schema: t } = a;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddRowBefore"),
                command: K.JD,
                children: (0, e.jsx)(b.BPi, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddRowAfter"),
                command: K.gC,
                children: (0, e.jsx)(b.fG_, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_DeleteRow"),
                command: K.aR,
                children: (0, e.jsx)(b.XW_, {}),
              }),
              (0, e.jsx)(f.XQ, {}),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddColumnBefore"),
                command: K.RC,
                children: (0, e.jsx)(b.l26, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddColumnAfter"),
                command: K.GU,
                children: (0, e.jsx)(b.ur3, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_DeleteColumn"),
                command: K.gR,
                children: (0, e.jsx)(b.dyV, {}),
              }),
              (0, e.jsx)(f.XQ, {}),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_HeaderRow"),
                command: K.uC,
                children: (0, e.jsx)(b.mLi, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_HeaderColumn"),
                command: K.xV,
                children: (0, e.jsx)(b.sXN, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_HeaderCell"),
                command: K._G,
                children: (0, e.jsx)(b.Maz, {}),
              }),
              (0, e.jsx)(f.XQ, {}),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_MergeCells"),
                command: K.w7,
                children: (0, e.jsx)(b.rnq, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_SplitCells"),
                command: K.L0,
                children: (0, e.jsx)(b.vB9, {}),
              }),
              !1,
            ],
          });
        }
        function bo(a) {
          const { schema: t } = a,
            { table: o } = t.nodes,
            { callbacks: s, view: n } = useToolbarContext(),
            [l, i] = React.useState(() =>
              IsInNodeWithAttribute(n.state, o, TableAttr.NoBorder),
            ),
            [d, c] = React.useState(() =>
              IsInNodeWithAttribute(n.state, o, TableAttr.EqualCells),
            ),
            m = React.useMemo(
              () => ToggleNodeBoolAttributeCommand(o, TableAttr.NoBorder),
              [o],
            ),
            p = React.useMemo(
              () => ToggleNodeBoolAttributeCommand(o, TableAttr.EqualCells),
              [o],
            );
          return (
            useCallbackList(
              s,
              React.useCallback(
                (x) => {
                  i(IsInNodeWithAttribute(x.state, o, TableAttr.NoBorder)),
                    c(IsInNodeWithAttribute(x.state, o, TableAttr.EqualCells));
                },
                [o],
              ),
            ),
            jsxs(Fragment, {
              children: [
                jsx(Gap, {}),
                jsx(CommandButton, {
                  tooltip: "Toggle No Borders",
                  command: m,
                  toggled: l,
                  children: "brd",
                }),
                jsx(CommandButton, {
                  tooltip: "Toggle Equal Cells",
                  command: p,
                  toggled: d,
                  children: "eqc",
                }),
              ],
            })
          );
        }
        var Ie = u(44483),
          _t = u(69447),
          Et = u(28516),
          Ue = u.n(Et);
        function bt(a, t, o) {
          a.dispatch(
            a.state.tr.insert(
              a.state.selection.to,
              t.create({ schedule_id: o }),
            ),
          );
        }
        function Ke(a, t) {
          if (a) {
            const s = y.mh.GetEditModel().GetEventModel()
              .jsondata.meet_steam_schedules;
            let n = 0;
            do n = Math.floor(1e4 + Math.random() * 9e4);
            while (s && s.findIndex((i) => i.schedule_id == n) >= 0);
            return { schedule_id: n, session_breaks: [] };
          } else if (t) return { ...t };
          return (
            (0, A.wT)(
              !1,
              "HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model",
            ),
            null
          );
        }
        function He(a) {
          const { hideModal: t, fnUpdateSession: o, inputScheduleModel: s } = a,
            n = (0, q.f1)(),
            l = (0, oe.LU)(),
            [i, d] = (0, h.useState)(() => Ke(!s, s)),
            [c, m, p] = (0, I.q3)(() => [
              i.location_type,
              i.in_person_time_zone,
              l.GetEventModel().jsondata.meet_steam_groups || [],
            ]),
            x = (0, h.useMemo)(() => {
              const v = p.reduce((M, g) => M.concat(g.sessions), []);
              return v.length == 0
                ? n
                : Math.min(...v.map((M) => M.rtime_start));
            }, [p, n]);
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: s
                ? "Update Meet Steam Schedule"
                : "Create Meet Steam Schedule View",
              onOK: () => o(i),
              closeModal: () => {
                d(Ke(!s, s)), t();
              },
              children: (0, e.jsxs)("div", {
                className: Ue().DialogCtn,
                children: [
                  (0, e.jsx)(Le, {
                    startTime: l.GetEventStartTime(),
                    location_type: c,
                    in_person_time_zone: m,
                    fnUpdateLocationAndTZ: (v, M) =>
                      d({ ...i, location_type: v, in_person_time_zone: M }),
                  }),
                  (0, e.jsx)(Dt, {
                    inputScheduleModel: i,
                    fnUpdateSession: (v) => d(v),
                    rtBreakStartingTime: x,
                  }),
                ],
              }),
            }),
          });
        }
        function Dt(a) {
          const {
              fnUpdateSession: t,
              inputScheduleModel: o,
              rtBreakStartingTime: s,
            } = a,
            [n, l] = (0, I.q3)(() => [
              o.session_breaks || [],
              o.in_person_time_zone || fe.hh,
            ]),
            i = (0, h.useCallback)(
              (d, c) => {
                const m = { ...o };
                (m.session_breaks = m.session_breaks
                  ? [...m.session_breaks]
                  : []),
                  c < m.session_breaks.length
                    ? (m.session_breaks[c] = d)
                    : m.session_breaks.push(d),
                  t(m);
              },
              [t, o],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { children: "Scheduled Breaks" }),
              n
                .sort((d, c) => c.rtime_start - d.rtime_start)
                .map((d, c) =>
                  (0, e.jsx)(
                    Ct,
                    {
                      sDisplayTimeZone: l,
                      index: c,
                      breakSession: d,
                      fnOnUpdate: (m) => i(m, c),
                    },
                    "breakedit" + d.break_id,
                  ),
                ),
              (0, e.jsx)(_.$n, {
                onClick: () => {
                  var d;
                  const c = o.session_breaks ? [...o.session_breaks] : [];
                  let m = Math.floor(1 + Math.random() * 1e5);
                  for (; c.findIndex((p) => p.break_id == m) >= 0; )
                    m = Math.floor(1 + Math.random() * 1e5);
                  i(
                    {
                      break_id: m,
                      localized_break_description: (0, de.$Y)([], V.bP9, null),
                      rtime_start: s,
                      rtime_end: s + ne.Kp.PerHour,
                    },
                    ((d = o.session_breaks) == null ? void 0 : d.length) || 0,
                  );
                },
                children: "+ Add Break",
              }),
            ],
          });
        }
        function Ct(a) {
          const {
              breakSession: t,
              fnOnUpdate: o,
              index: s,
              sDisplayTimeZone: n,
            } = a,
            l = (0, F.E)(),
            [i, d, c, m] = (0, I.q3)(() => [
              t.rtime_start,
              t.rtime_end,
              t.localized_break_description[l] || "",
              Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
            ]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", { children: ["Break # ", s + 1] }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(he.K, {
                strDescription: "Break Start Time",
                nEarliestTime: 0,
                fnGetTimeToUpdate: () => i,
                fnSetTimeToUpdate: (p) =>
                  o({
                    ...t,
                    rtime_start: p,
                    rtime_end: p + ne.Kp.PerMinute * m,
                  }),
                fnIsValidDateTime: () => !0,
                bShowTimeZone: !0,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(_.pd, {
                type: "number",
                min: 0,
                label: "Break duration in minutes",
                onChange: (p) => {
                  const x = Number.parseInt(p.currentTarget.value);
                  o({ ...t, rtime_end: t.rtime_start + ne.Kp.PerMinute * x });
                },
                value: m,
              }),
              (0, e.jsx)(_.pd, {
                type: "text",
                label: "Break Description",
                value: c,
                onChange: (p) => {
                  const x = { ...t };
                  (x.localized_break_description[l] = p.currentTarget.value),
                    o(x);
                },
              }),
              (0, e.jsx)(Re, {
                rtime_start: i,
                rtime_end: d,
                sDisplayTimeZone: n,
              }),
            ],
          });
        }
        function St(a) {
          const { focusView: t, removeNode: o, schedule_id: s } = a,
            n = (0, oe.LU)(),
            l = (0, I.q3)(() => {
              var g;
              return (g = n.GetEventModel().jsondata.meet_steam_schedules) ==
                null
                ? void 0
                : g.find((j) => j.schedule_id == s);
            }),
            [i, d, c] = (0, S.uD)(),
            m = h.useCallback(() => {
              t(), c();
            }, [t, c]),
            [p, x, v] = (0, S.uD)(),
            M = h.useCallback(() => {
              t(), v();
            }, [t, v]);
          return !l || n.GetClanAccountID() != (0, pe.H)()
            ? (0, e.jsx)("div", {
                children: "Error: Cannot edit meet steam schedule view",
              })
            : (0, e.jsxs)("div", {
                className: Ue().EditorCtn,
                children: [
                  (0, e.jsx)(re.fs, {
                    eventModel: n.GetEventModel(),
                    scheduleData: l,
                  }),
                  (0, e.jsxs)("div", {
                    className: Ue().controls,
                    children: [
                      (0, e.jsx)(f.ff, {
                        onClick: d,
                        tooltip: (0, r.we)("#Button_Edit"),
                        children: (0, e.jsx)(b.ffu, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: x,
                        tooltip: (0, r.we)("#Button_Delete"),
                        children: (0, e.jsx)(b.sED, {}),
                      }),
                    ],
                  }),
                  !!i &&
                    (0, e.jsx)(He, {
                      hideModal: m,
                      inputScheduleModel: l,
                      fnUpdateSession: (g) => {
                        const { scheduleIndex: j } = Fe(g.schedule_id);
                        (n.GetEventModel().jsondata.meet_steam_schedules[j] =
                          g),
                          n.SetDirty(B.IQ.description);
                      },
                    }),
                  !!p &&
                    (0, e.jsx)(C.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const { scheduleIndex: g } = Fe(l.schedule_id),
                            j = y.mh.GetEditModel(),
                            E = [
                              ...j.GetEventModel().jsondata
                                .meet_steam_schedules,
                            ];
                          E.splice(g, 1),
                            (j.GetEventModel().jsondata.meet_steam_schedules =
                              E),
                            j.SetDirty(B.IQ.description),
                            o();
                        },
                        closeModal: M,
                      }),
                    }),
                ],
              });
        }
        var yt = u(16346),
          Tt = u(38655),
          Ye = u(58483),
          Se = u(76842),
          Pt = u(14947);
        function It(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            [n, l] = h.useState(!1),
            i = h.useCallback(
              (c, m) => {
                s.dispatch(
                  s.state.tr.insert(
                    s.state.selection.to,
                    t.nodes.emoticon.create(null, t.text(c)),
                  ),
                ),
                  m || s.focus();
              },
              [s, t],
            ),
            d = h.useCallback(
              (c) => {
                l(!0);
                const m = (0, yt.lX)((0, e.jsx)(Ut, { OnSelected: i }), c, {
                  bOverlapHorizontal: !0,
                });
                (0, Pt.z7)(
                  () => !m.visible,
                  () => l(!1),
                );
              },
              [i],
            );
          return (0, e.jsx)(f.ff, {
            tooltip: (0, r.we)("#Editor_Emoticon"),
            onClick: d,
            toggled: n,
            children: (0, e.jsx)(xe.jZW, {}),
          });
        }
        function Ut(a) {
          const t = (0, Ye.LJ)();
          return (
            (0, Se.k3)(t),
            (0, e.jsx)(Tt.iY, { emoticonStore: t, OnSelected: a.OnSelected })
          );
        }
        var wt = u(98609),
          T = u(40852),
          Ot = u(813),
          kt = u(63287),
          $ = u.n(kt),
          Nt = u(5471),
          Gt = u(70377),
          Bt = u(86959),
          We = u(50974);
        function At(a) {
          const { hideModal: t, fnUpdateSession: o, clanAccountID: s } = a,
            [n, l] = (0, h.useState)(() => ye(!0, null));
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#UserPolls_Create_title"),
              onOK: () => o(n),
              closeModal: () => {
                l(ye(!0, null)), t();
              },
              children: (0, e.jsx)("div", {
                className: $().DialogCtn,
                children: (0, e.jsx)($e, {
                  clanAccountID: s,
                  userPollDef: n,
                  fnSetDef: l,
                }),
              }),
            }),
          });
        }
        function Vt(a) {
          const {
              hideModal: t,
              userPollDef: o,
              clanAccountID: s,
              fnUpdateUserPollDef: n,
            } = a,
            [l, i] = (0, h.useState)(() => ye(!1, o));
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#UserPolls_Edit_title"),
              onOK: () => {
                n(l);
              },
              onCancel: () => {
                i(ye(!1, o));
              },
              closeModal: t,
              children: (0, e.jsx)("div", {
                className: $().DialogCtn,
                children: (0, e.jsx)($e, {
                  userPollDef: l,
                  clanAccountID: s,
                  fnSetDef: i,
                }),
              }),
            }),
          });
        }
        function Qe(a) {
          switch (a) {
            default:
            case T.$t.k_EPollResult_NotVisible:
              return (0, r.we)("#UserPolls_Visibility_None");
            case T.$t.k_EPollResult_Visible_After_End:
              return (0, r.we)("#UserPolls_Visibility_End");
            case T.$t.k_EPollResult_Visible_After_Vote:
              return (0, r.we)("#UserPolls_Visibility_Voter");
            case T.$t.k_EPollResult_Visible_After_Vote_Or_End:
              return (0, r.we)("#UserPolls_Visibility_Voter_or_End");
            case T.$t.k_EPollResult_Visible_On_Demand:
              return (0, r.we)("#UserPolls_Visibility_OnDemand");
          }
        }
        function $e(a) {
          const { userPollDef: t, fnSetDef: o } = a,
            s = (0, F.E)(),
            [n] = (0, I.q3)(() => [t.results_visibility_settings]),
            l = Object.values(T.$t).map((i) => ({ data: i, label: Qe(i) }));
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.pd, {
                type: "text",
                label: (0, r.we)("#UserPolls_Description"),
                value: r.NT.Get(t.localized_poll_description, s),
                onChange: (i) => {
                  const d = { ...t };
                  (d.localized_poll_description = r.NT.Set(
                    d.localized_poll_description,
                    s,
                    i.currentTarget.value,
                  )),
                    o(d);
                },
              }),
              (0, e.jsx)(zt, { ...a }),
              (0, e.jsx)(Lt, { ...a }),
              (0, e.jsx)(_.JU, {
                children: (0, r.we)("#UserPolls_Visibility"),
              }),
              (0, e.jsx)("div", {
                className: $().PollArea,
                children: (0, e.jsx)(_.m, {
                  strDropDownClassName: Q.DropDownScroll,
                  rgOptions: l,
                  selectedOption: n,
                  onChange: (i) => {
                    i.data != t.results_visibility_settings &&
                      o({ ...t, results_visibility_settings: i.data });
                  },
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                }),
              }),
              (0, e.jsx)(Rt, { ...a }),
            ],
          });
        }
        function Rt(a) {
          const { clanAccountID: t, userPollDef: o, fnSetDef: s } = a,
            n = (0, oe.LU)(),
            l = (0, T.rR)(n.GetClanSteamID()),
            [i] = (0, I.q3)(() => [o.user_poll_background]),
            d = (0, h.useCallback)(
              (c, m, p, x, v) => {
                (0, A.wT)(
                  p != null && p >= V.Bhc && p < V.bP9,
                  "Unexpected value for elang: " + p,
                ),
                  (0, A.wT)(
                    v === "user_poll_background",
                    "Unexpected artwork type " + v,
                  );
                const M = (0, Gt.G)(c, m);
                M.image && s({ ...o, user_poll_background: M.image });
              },
              [s, o],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.JU, {
                children: (0, r.we)("#UserPolls_BackgroundImage"),
              }),
              (0, e.jsxs)("div", {
                className: $().PollArea,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, r.we)("#UserPolls_BackgroundImage_desc"),
                  }),
                  (0, e.jsx)(Nt.a, {
                    rgRealmList: n.GetIncludedRealmList(),
                    rgSupportArtwork: T.YX,
                    strUploadAjaxURL: l,
                    fnOnUploadSuccess: d,
                    elOverrideDragAndDropText: (0, r.we)(
                      "#Template_Section_MediaUpdate_Static_Dnd",
                    ),
                    bTwoPhaseUpload: !0,
                    bDirectTempStorageUpload: !0,
                  }),
                  !!i && (0, e.jsx)("img", { src: (0, Bt.Fk)(t, i) }),
                ],
              }),
            ],
          });
        }
        function Me(a) {
          switch (a) {
            case T.BY.k_EPollVoter_AnyUser:
              return (0, r.we)("#UserPolls_Voters_Anyone");
            case T.BY.k_EPollVoter_UserGameInLibrary:
              return (0, r.we)("#UserPolls_Voters_Owners");
            case T.BY.k_EPollVoter_MinPlayTime:
              return (0, r.we)("#UserPolls_Voters_Players");
            case T.BY.k_EPollVoter_MemberOfGroup:
              return (0, r.we)("#UserPolls_Voters_Members");
          }
        }
        function Lt(a) {
          const { clanAccountID: t, userPollDef: o, fnSetDef: s } = a,
            [n, l] = (0, Ot.TB)(t),
            [i, d] = (0, I.q3)(() => [
              o.voter_min_playtime_seconds,
              o.voter_eligibility,
            ]),
            c = (0, h.useMemo)(() => {
              const m = [
                {
                  label: Me(T.BY.k_EPollVoter_AnyUser),
                  data: T.BY.k_EPollVoter_AnyUser,
                },
              ];
              return (
                l && l.is_ogg && t != We.II
                  ? (m.push({
                      label: Me(T.BY.k_EPollVoter_UserGameInLibrary),
                      data: T.BY.k_EPollVoter_UserGameInLibrary,
                    }),
                    m.push({
                      label: Me(T.BY.k_EPollVoter_MinPlayTime),
                      data: T.BY.k_EPollVoter_MinPlayTime,
                    }))
                  : l &&
                    (!l.is_ogg || t == We.II) &&
                    m.push({
                      label: Me(T.BY.k_EPollVoter_MemberOfGroup),
                      data: T.BY.k_EPollVoter_MemberOfGroup,
                    }),
                m
              );
            }, [t, l]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.JU, { children: (0, r.we)("#UserPolls_Voters") }),
              (0, e.jsxs)("div", {
                className: $().PollArea,
                children: [
                  (0, e.jsx)(_.m, {
                    strDropDownClassName: Q.DropDownScroll,
                    rgOptions: c,
                    selectedOption: d,
                    onChange: (m) => {
                      if (m.data != o.voter_eligibility) {
                        let p = { ...o, voter_eligibility: m.data };
                        m.data == T.BY.k_EPollVoter_MinPlayTime &&
                          (p.voter_min_playtime_seconds = 5 * Oe),
                          s(p);
                      }
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                  d == T.BY.k_EPollVoter_MinPlayTime &&
                    (0, e.jsx)("div", {
                      className: $().OptionInset,
                      children: (0, e.jsx)(_.pd, {
                        type: "number",
                        label: (0, r.we)("#UserPolls_MinPlayTime"),
                        value: i / Oe,
                        min: 5,
                        onChange: (m) => {
                          var p, x;
                          const M =
                            ((x = Number.parseInt(
                              (p = m == null ? void 0 : m.currentTarget) == null
                                ? void 0
                                : p.value,
                            )) != null
                              ? x
                              : 5) * Oe;
                          o.voter_min_playtime_seconds != M &&
                            s({ ...o, voter_min_playtime_seconds: M });
                        },
                      }),
                    }),
                ],
              }),
            ],
          });
        }
        function zt(a) {
          const { userPollDef: t, fnSetDef: o } = a,
            [s, n] = (0, I.q3)(() => [
              t.poll_end_time,
              t.poll_end_days_since_start,
            ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.JU, { children: (0, r.we)("#UserPolls_Starts") }),
              (0, e.jsxs)("div", {
                className: $().PollArea,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, U.A)(Q.FlexRowContainer, Q.RadioOption),
                    children: [
                      (0, e.jsx)("input", {
                        type: "radio",
                        name: "StartDateRadio",
                        id: "UserPollDialog_Days",
                        checked: !!n,
                        onChange: () => {
                          t.poll_end_days_since_start ||
                            o({
                              ...t,
                              poll_end_time: void 0,
                              poll_end_days_since_start: we * ge,
                            });
                        },
                      }),
                      (0, e.jsx)("label", {
                        htmlFor: "UserPollDialog_Days",
                        children: (0, e.jsx)("span", {
                          children: (0, r.we)("#UserPolls_EndTime_In_Days"),
                        }),
                      }),
                    ],
                  }),
                  !!n &&
                    (0, e.jsx)("div", {
                      className: $().OptionInset,
                      children: (0, e.jsx)(_.pd, {
                        type: "number",
                        value: n / ge,
                        min: 1,
                        onChange: (l) => {
                          var i, d;
                          const m =
                            ((d = Number.parseInt(
                              (i = l == null ? void 0 : l.currentTarget) == null
                                ? void 0
                                : i.value,
                            )) != null
                              ? d
                              : 1) * ge;
                          t.poll_end_days_since_start != m &&
                            o({
                              ...t,
                              poll_end_time: void 0,
                              poll_end_days_since_start: m,
                            });
                        },
                      }),
                    }),
                  (0, e.jsxs)("div", {
                    className: (0, U.A)(Q.FlexRowContainer, Q.RadioOption),
                    children: [
                      (0, e.jsx)("input", {
                        type: "radio",
                        name: "StartDateRadio",
                        id: "UserPollDialog_SpecificTime",
                        checked: !!s,
                        onChange: () => {
                          t.poll_end_time ||
                            o({
                              ...t,
                              poll_end_days_since_start: void 0,
                              poll_end_time:
                                Math.floor(Date.now() / 1e3) + we * ge,
                            });
                        },
                      }),
                      (0, e.jsx)("label", {
                        htmlFor: "UserPollDialog_SpecificTime",
                        children: (0, e.jsx)("span", {
                          children: (0, r.we)("#UserPolls_EndTime_Specific"),
                        }),
                      }),
                    ],
                  }),
                  !!s &&
                    (0, e.jsxs)("div", {
                      className: (0, U.A)($().OptionInset, Q.FlexRowContainer),
                      children: [
                        (0, e.jsx)(he.K, {
                          strDescription: "",
                          nEarliestTime: Math.floor(Date.now() / 1e3) + 3600,
                          fnGetTimeToUpdate: () => s,
                          fnSetTimeToUpdate: (l) => {
                            t.poll_end_time != l &&
                              o({
                                ...t,
                                poll_end_days_since_start: void 0,
                                poll_end_time: l,
                              });
                          },
                          fnIsValidDateTime: () =>
                            s > Math.floor(Date.now() / 1e3) + 3600,
                        }),
                        (0, e.jsx)("span", {
                          children: (0, r.we)("#UserPolls_EndTime_Zone"),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        const we = 7,
          ge = 1440 * 60,
          Oe = 60;
        function ye(a, t) {
          if (a) {
            const s =
              y.mh.GetEditModel().GetEventModel().jsondata.user_polls || [];
            let n = 0;
            do n = Math.floor(1e4 + Math.random() * 9e4);
            while (s && s.findIndex((l) => l.poll_id == n) >= 0);
            return {
              poll_id: n,
              options: [],
              localized_poll_description: (0, de.$Y)([], V.bP9, null),
              poll_end_days_since_start: we * ge,
              poll_end_time: void 0,
              results_visibility_settings: T.$t.k_EPollResult_Visible_On_Demand,
              voter_eligibility: T.BY.k_EPollVoter_AnyUser,
            };
          } else if (t)
            return {
              ...t,
              localized_poll_description: [...t.localized_poll_description],
            };
          return (
            (0, A.wT)(
              !1,
              "HelperCreateOrCloneUserPollModel Expect Create or previous model",
            ),
            null
          );
        }
        function Xe(a) {
          const {
              bCreate: t,
              hideModal: o,
              pollOptionsInput: s,
              fnUpdatePollOption: n,
            } = a,
            [l, i] = (0, h.useState)(() => Ze(t, s)),
            d = (0, F.E)();
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)(
                t ? "#UserPolls_Option_Create" : "#UserPolls_Option_Edit",
              ),
              onOK: () => {
                n(l), o();
              },
              onCancel: () => {
                i(Ze(t, s)), o();
              },
              children: (0, e.jsx)("div", {
                className: $().DialogCtn,
                children: (0, e.jsx)(_.pd, {
                  type: "text",
                  label: (0, r.we)("#UserPolls_Option_Title"),
                  value: r.NT.Get(l.localized_option, d),
                  onChange: (c) => {
                    const m = { ...l };
                    (m.localized_option = [...m.localized_option]),
                      (m.localized_option = r.NT.Set(
                        m.localized_option,
                        d,
                        c.currentTarget.value,
                      )),
                      i(m);
                  },
                }),
              }),
            }),
          });
        }
        function Ze(a, t) {
          if (a) {
            const s = y.mh.GetEditModel().GetEventModel().jsondata.user_polls,
              n =
                s == null
                  ? void 0
                  : s.reduce((i, d) => i.concat(d.options), []);
            let l = 0;
            do l = Math.floor(1e4 + Math.random() * 9e4);
            while (n && n.findIndex((i) => i.option_id == l) >= 0);
            return {
              option_id: l,
              localized_option: (0, de.$Y)([], V.bP9, null),
            };
          } else if (t) return { ...t };
          return (
            (0, A.wT)(
              !1,
              "HelperCreateOrClonePollOptionModel Expect Create or previous model",
            ),
            null
          );
        }
        var Je = u(29757),
          Ft = u(56330),
          qe = u(63940);
        function ke(a) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.user_polls.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.user_polls[o];
            for (let n = 0; n < s.options.length; ++n)
              if (s.options[n].option_id == a)
                return { pollIndex: o, optionIndex: n };
          }
          return null;
        }
        function et(a) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.user_polls.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.user_polls[o];
            if (s.poll_id == a) return { userPollDef: s, pollIndex: o };
          }
          return null;
        }
        var Kt = u(91512);
        function Ht(a, t, o) {
          a.dispatch(
            a.state.tr.insert(a.state.selection.to, t.create({ poll_id: o })),
          );
        }
        function Yt(a) {
          const { focusView: t, removeNode: o, poll_id: s } = a,
            n = (0, oe.LU)(),
            l = (0, I.q3)(() => {
              var g;
              return (g = n.GetEventModel().jsondata.user_polls) == null
                ? void 0
                : g.find((j) => j.poll_id == s);
            }),
            [i, d, c] = (0, S.uD)(),
            m = h.useCallback(() => {
              t(), c();
            }, [t, c]),
            [p, x, v] = (0, S.uD)(),
            M = h.useCallback(() => {
              t(), v();
            }, [t, v]);
          return l
            ? (0, e.jsxs)("div", {
                className: P().EditorCtn,
                children: [
                  (0, e.jsx)(Wt, { userPollDef: l, focusView: t }),
                  (0, e.jsxs)("div", {
                    className: P().controls,
                    children: [
                      (0, e.jsx)(f.ff, {
                        onClick: d,
                        tooltip: (0, r.we)("#Button_Edit"),
                        children: (0, e.jsx)(b.ffu, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: x,
                        tooltip: (0, r.we)("#Button_Delete"),
                        children: (0, e.jsx)(b.sED, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: () => {},
                        tooltip: Qe(l.results_visibility_settings),
                        children: (0, e.jsx)(xe.WLA, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: () => {},
                        tooltip: Me(l.voter_eligibility),
                        children: (0, e.jsx)(xe.JpU, {}),
                      }),
                    ],
                  }),
                  !!i &&
                    (0, e.jsx)(Vt, {
                      hideModal: m,
                      userPollDef: l,
                      clanAccountID: n.GetClanAccountID(),
                      fnUpdateUserPollDef: (g) => {
                        const { pollIndex: j } = et(g.poll_id),
                          E = y.mh.GetEditModel();
                        (E.GetEventModel().jsondata.user_polls[j] = g),
                          E.SetDirty(B.IQ.description);
                      },
                    }),
                  !!p &&
                    (0, e.jsx)(C.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const { pollIndex: g } = et(l.poll_id),
                            j = y.mh.GetEditModel(),
                            E = [...j.GetEventModel().jsondata.user_polls];
                          E.splice(g, 1),
                            (j.GetEventModel().jsondata.user_polls = E),
                            j.SetDirty(B.IQ.description),
                            o();
                        },
                        closeModal: M,
                      }),
                    }),
                ],
              })
            : (0, e.jsx)("div", {
                className: Ft.ErrorStylesWithIcon,
                children: (0, r.we)("#UserPolls_Editor_FailToFindModel", s),
              });
        }
        function Wt(a) {
          const { userPollDef: t, focusView: o } = a,
            [s, n] = (0, I.q3)(() => [
              t.options || [],
              t.randomize_option_order,
            ]),
            l = (0, oe.LU)(),
            i = (0, F.E)(),
            [d, c, m] = (0, S.uD)(),
            p = h.useCallback(() => {
              o(), m();
            }, [o, m]),
            [x, v, M] = (0, S.uD)(),
            g = h.useCallback(() => {
              o(), M();
            }, [o, M]);
          return t
            ? (0, e.jsxs)(qe.W6, {
                userPollDef: t,
                eventModel: l.GetEventModel(),
                lang: i,
                children: [
                  s.map((j) =>
                    (0, e.jsx)(
                      $t,
                      { focusView: o, optionID: j.option_id },
                      "polloption" + t.poll_id + "_" + j.option_id,
                    ),
                  ),
                  (0, e.jsxs)("div", {
                    className: $().AdminOptions,
                    children: [
                      (0, e.jsx)(Je.wl, {
                        className: "",
                        onClick: c,
                        children: (0, r.we)("#UserPolls_Option_Add"),
                      }),
                      (0, e.jsx)(Je.wl, {
                        className: "",
                        onClick: v,
                        children: (0, r.we)("#UserPolls_Option_Reorder"),
                      }),
                    ],
                  }),
                  d &&
                    (0, e.jsx)(Xe, {
                      bCreate: !0,
                      hideModal: p,
                      fnUpdatePollOption: (j) => {
                        const E = y.mh.GetEditModel();
                        t.options || (t.options = []),
                          t.options.push(j),
                          E.SetDirty(B.IQ.description);
                      },
                    }),
                  x &&
                    (0, e.jsx)(Qt, {
                      hideModal: g,
                      options: s,
                      bRandomize: n,
                      fnUpdateOptions: (j, E) => {
                        (t.randomize_option_order = E), (t.options = j);
                      },
                    }),
                ],
              })
            : null;
        }
        function Qt(a) {
          const {
              options: t,
              bRandomize: o,
              fnUpdateOptions: s,
              hideModal: n,
            } = a,
            l = (0, F.E)(),
            [i, d] = (0, h.useState)(o),
            [c, m] = (0, h.useState)(t);
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsxs)(D.o0, {
              strTitle: (0, r.we)("#UserPolls_Option_Reorder"),
              strDescription: (0, r.we)("#UserPolls_Option_Reorder_desc"),
              onCancel: () => {
                d(o), m(t);
              },
              onOK: () => {
                s([...c], i);
              },
              closeModal: n,
              children: [
                (0, e.jsx)(_.Yh, {
                  label: (0, r.we)("#UserPolls_Option_Randomize"),
                  checked: i,
                  onChange: d,
                }),
                (0, e.jsx)(Kt.A, {
                  items: c,
                  render: (p) => {
                    var x, v;
                    return (0, e.jsx)("div", {
                      children:
                        ((x = p.localized_option) == null ? void 0 : x[l]) ||
                        ((v = p.localized_option) == null
                          ? void 0
                          : v[V.Bhc]) ||
                        "",
                    });
                  },
                  onReorder: (p) => m(p),
                }),
              ],
            }),
          });
        }
        function $t(a) {
          const { optionID: t, focusView: o } = a,
            [s, n] = (0, S.OP)(),
            l = (0, I.q3)(() => {
              const { optionIndex: j, pollIndex: E } = ke(t);
              return y.mh.GetEditModel().GetEventModel().jsondata.user_polls[E]
                .options[j];
            }),
            i = (0, F.E)(),
            [d, c, m] = (0, S.uD)(),
            p = h.useCallback(() => {
              o(), m();
            }, [o, m]),
            [x, v, M] = (0, S.uD)(),
            g = h.useCallback(() => {
              o(), M();
            }, [o, M]);
          return (0, e.jsxs)("div", {
            className: P().Column,
            ...n,
            children: [
              (0, e.jsx)(qe.s3, { pollOptionDef: l, lang: i }),
              !!s &&
                (0, e.jsxs)("div", {
                  className: P().controls,
                  children: [
                    (0, e.jsx)(f.ff, {
                      onClick: c,
                      tooltip: (0, r.we)("#Button_Edit"),
                      children: (0, e.jsx)(b.ffu, {}),
                    }),
                    (0, e.jsx)(f.ff, {
                      onClick: v,
                      tooltip: (0, r.we)("#Button_Delete"),
                      children: (0, e.jsx)(b.sED, {}),
                    }),
                  ],
                }),
              !!d &&
                (0, e.jsx)(Xe, {
                  bCreate: !1,
                  hideModal: p,
                  pollOptionsInput: l,
                  fnUpdatePollOption: (j) => {
                    const E = y.mh.GetEditModel(),
                      { optionIndex: k, pollIndex: X } = ke(t),
                      le = [
                        ...E.GetEventModel().jsondata.user_polls[X].options,
                      ];
                    (le[k] = j),
                      (E.GetEventModel().jsondata.user_polls[X].options = le),
                      E.SetDirty(B.IQ.description);
                  },
                }),
              !!x &&
                (0, e.jsx)(C.E, {
                  active: !0,
                  children: (0, e.jsx)(D.o0, {
                    strTitle: (0, r.we)("#Button_Delete"),
                    strDescription: (0, r.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const j = y.mh.GetEditModel(),
                        { optionIndex: E, pollIndex: k } = ke(t),
                        X = [
                          ...j.GetEventModel().jsondata.user_polls[k].options,
                        ];
                      X.splice(E, 1),
                        (j.GetEventModel().jsondata.user_polls[k].options = X),
                        j.SetDirty(B.IQ.description);
                    },
                    closeModal: g,
                  }),
                }),
            ],
          });
        }
        const Xt = h.memo(function (t) {
          const {
            view: o,
            schema: s,
            refUpdateToolbar: n,
            className: l,
            clanSteamID: i,
            bSpellcheckEnabled: d,
            setSpellcheckEnabled: c,
          } = t;
          return (0, e.jsx)(f.bI, {
            refUpdateToolbar: n,
            view: o,
            children: (0, e.jsxs)("div", {
              className: t.className,
              children: [
                (0, e.jsxs)(f.Ez, {
                  className: t.className,
                  children: [
                    (0, e.jsx)(ce.MV, {}),
                    (0, e.jsx)(f.XQ, {}),
                    (0, e.jsx)(ce.Km, { schema: s }),
                    (0, e.jsx)(f.XQ, {}),
                    s.marks.link && (0, e.jsx)(Zt, { schema: s }),
                    (0, e.jsx)(f.XQ, {}),
                    (0, e.jsx)(ce.Hz, { schema: s }),
                    (0, e.jsx)(ce.WJ, { schema: s, levels: 3 }),
                    (0, e.jsx)(f.XQ, {}),
                    (0, e.jsx)(It, { schema: s }),
                    (0, e.jsx)(qt, { schema: s, clanSteamID: i }),
                    (0, e.jsx)(Mt, { schema: s }),
                    (0, e.jsx)(ce.C$, {
                      schema: s,
                      showIndentButtonsAsNeeded: !0,
                    }),
                    (0, e.jsx)(f.hK, {}),
                    c &&
                      (0, e.jsx)(ce.Nt, {
                        bSpellcheckEnabled: d,
                        setSpellcheckEnabled: c,
                      }),
                    s.nodes.meetsteamsessiongroup &&
                      (0, e.jsx)(to, { schema: s }),
                    s.nodes.meetsteamscheduleview &&
                      (0, e.jsx)(oo, { schema: s }),
                    s.nodes.userpolls &&
                      wt.iA.is_support &&
                      (0, e.jsx)(Jt, { schema: s }),
                  ],
                }),
                (0, e.jsx)(gt, { className: t.className, schema: s }),
              ],
            }),
          });
        });
        function Zt(a) {
          const t = (0, _t.V)();
          return (0, e.jsx)(ce.z9, { schema: a.schema, addtlAttrs: t });
        }
        function Jt(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            n = (0, oe.LU)(),
            [l, i, d] = (0, ae.uD)(),
            c = h.useCallback(() => {
              d(), s.focus();
            }, [d, s]),
            m = h.useCallback(
              (p) => {
                n.GetEventModel().jsondata.user_polls ||
                  (n.GetEventModel().jsondata.user_polls = []),
                  n.GetEventModel().jsondata.user_polls.push({ ...p }),
                  Ht(s, t.nodes.userpolls, p.poll_id),
                  c();
              },
              [t, s, c, n],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              l &&
                (0, e.jsx)(At, {
                  hideModal: c,
                  clanAccountID: n.GetClanAccountID(),
                  fnUpdateSession: m,
                }),
              (0, e.jsx)(f.ff, {
                tooltip: (0, r.we)("#UserPolls_Toolbar_ttip"),
                onClick: i,
                toggled: l,
                children: (0, e.jsx)(b.fQB, {}),
              }),
            ],
          });
        }
        function qt(a) {
          const { schema: t, clanSteamID: o } = a,
            { callbacks: s, view: n } = (0, f.wU)(),
            { image: l, video: i, previewyoutube: d } = t.nodes,
            c = h.useCallback(
              (g, j) => {
                n.dispatch(
                  n.state.tr.insert(n.state.selection.to, j.create(g)),
                );
              },
              [n],
            ),
            m = h.useCallback(() => n.focus(), [n]),
            {
              showInsertImageModal: p,
              showInsertVideoModal: x,
              imageModal: v,
              activeModal: M,
            } = (0, w.wU)({
              clanSteamID: o,
              imageNodeType: l,
              videoNodeType: i,
              onItemSelected: c,
              onHideModal: m,
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              v,
              l &&
                (0, e.jsx)(f.ff, {
                  tooltip: (0, r.we)("#EventEditor_InsertImage_Title"),
                  onClick: p,
                  toggled: M == "image",
                  children: (0, e.jsx)(b._V3, {}),
                }),
              i &&
                (0, e.jsx)(f.ff, {
                  tooltip: (0, r.we)("#EventEditor_EditVideo_Title"),
                  onClick: x,
                  toggled: M == "video",
                  children: (0, e.jsx)(b.CeX, {}),
                }),
              d && (0, e.jsx)(eo, { schema: t }),
              (l || i || d) && (0, e.jsx)(f.XQ, {}),
            ],
          });
        }
        function eo(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            [n, l, i] = (0, ae.uD)(),
            d = h.useCallback(() => {
              i(), s.focus();
            }, [i, s]),
            c = h.useCallback(
              (m, p) => {
                Te(s, t.nodes.previewyoutube, m, p), d();
              },
              [t, s, d],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              n && (0, e.jsx)(Ee, { hideModal: d, onSave: c }),
              (0, e.jsx)(f.ff, {
                tooltip: (0, r.we)("#EventEditor_InsertYouTube"),
                onClick: l,
                toggled: n,
                children: (0, e.jsx)("img", { src: Ie.A }),
              }),
            ],
          });
        }
        function to(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            n = (0, oe.LU)(),
            [l, i, d] = (0, ae.uD)(),
            c = h.useCallback(() => {
              d(), s.focus();
            }, [d, s]),
            m = h.useCallback(
              (p, x) => {
                n.GetEventModel().jsondata.meet_steam_groups ||
                  (n.GetEventModel().jsondata.meet_steam_groups = []),
                  n
                    .GetEventModel()
                    .jsondata.meet_steam_groups.push({ ...p, sessions: [x] }),
                  mt(s, t.nodes.meetsteamsessiongroup, p.group_id),
                  c();
              },
              [t, s, c, n],
            );
          if ((n == null ? void 0 : n.GetClanAccountID()) == (0, pe.H)())
            return (0, e.jsxs)(e.Fragment, {
              children: [
                l && (0, e.jsx)(rt, { hideModal: c, fnUpdateSession: m }),
                (0, e.jsx)(f.ff, {
                  tooltip: (0, r.we)("#MeetSteam_add_group_ttip"),
                  onClick: i,
                  toggled: l,
                  children: (0, e.jsx)("img", { src: Ie.A }),
                }),
              ],
            });
        }
        function oo(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            n = (0, oe.LU)(),
            [l, i, d] = (0, ae.uD)(),
            c = h.useCallback(() => {
              d(), s.focus();
            }, [d, s]),
            m = h.useCallback(
              (p) => {
                n.GetEventModel().jsondata.meet_steam_schedules ||
                  (n.GetEventModel().jsondata.meet_steam_schedules = []),
                  n
                    .GetEventModel()
                    .jsondata.meet_steam_schedules.push({ ...p }),
                  bt(s, t.nodes.meetsteamscheduleview, p.schedule_id),
                  c();
              },
              [t, s, c, n],
            );
          if ((n == null ? void 0 : n.GetClanAccountID()) == (0, pe.H)())
            return (0, e.jsxs)(e.Fragment, {
              children: [
                l &&
                  (0, e.jsx)(He, {
                    hideModal: c,
                    inputScheduleModel: null,
                    fnUpdateSession: m,
                  }),
                (0, e.jsx)(f.ff, {
                  tooltip: (0, r.we)("#MeetSteam_add_schedule_ttip"),
                  onClick: i,
                  toggled: l,
                  children: (0, e.jsx)("img", { src: Ie.A }),
                }),
              ],
            });
        }
        var so = u(75844),
          no = u(90316),
          je = u.n(no),
          lo = u(83085),
          io = u(93147),
          ao = u(96197);
        function ro(a) {
          const { schema: t, emoticonStore: o } = a,
            s = t.nodes.emoticon;
          (0, Se.k3)(o),
            (0, L.c$)(
              h.useMemo(
                () => (0, G.sM)({ rules: [uo(/:([a-zA-Z0-9_]+):$/, s, o)] }),
                [s, o],
              ),
            );
          const n = h.useMemo(
            () => [
              {
                type: s,
                component: co,
                readProps: (l) => ({
                  emoticonStore: o,
                  emoticon: l.textContent,
                }),
              },
            ],
            [s, o],
          );
          return (0, e.jsx)(me.U, { specs: n });
        }
        function co(a) {
          const { selected: t, emoticonStore: o, emoticon: s } = a;
          if (((0, Se.k3)(o), o.BHasEmoticon(s))) {
            const l = t
              ? { background: "#54a5d4", filter: "brightness(1.2)" }
              : void 0;
            return (0, e.jsx)("span", {
              style: l,
              children: (0, e.jsx)(ao.n, { emoticon: s }),
            });
          } else return `:${s}:`;
        }
        function uo(a, t, o) {
          return new G.fV(a, (s, n, l, i) => {
            const d = n[1];
            if (!o.BHasEmoticon(d)) return null;
            const c = t.create(null, s.schema.text(d));
            return s.tr.replaceWith(l, i, c);
          });
        }
        var tt = u(25598),
          mo = u(78844),
          po = u(65217),
          ho = u(25792);
        const fo = (0, so.PA)(function (t) {
          const { editModel: o } = t,
            s = o.GetEventModel().loadedAllLanguages,
            n = o.GetCurEditLanguage();
          return s
            ? (0, e.jsx)(ho.tH, {
                children: (0, e.jsx)(xo, { ...t, eCurrentEditLanguage: n }),
              })
            : null;
        });
        function vo(a, t, o, s) {
          let n = t.GetDescription(o);
          return (
            (n =
              n == null
                ? void 0
                : n.replace(
                    Se.pN.GetUnvalidatedEmoticonReplaceRegex(),
                    "[emoticon]$1[/emoticon]",
                  )),
            new R.n(a, n, (l) => t.SetDescription(o, l), {
              parser: {
                fnProcessText: (l) =>
                  (0, po.F)(a.pm_schema, l, a.pm_schema.marks.link, s),
              },
            })
          );
        }
        const xo = h.memo(function (t) {
          const {
              editModel: o,
              refOnInsertImage: s,
              limitBBCode: n,
              eCurrentEditLanguage: l,
            } = t,
            [i, d] = h.useState(),
            c = h.useMemo(() => (0, ie.u)(n), [n]),
            [m, p] = h.useState(),
            x = Mo(o.GetClanSteamID(), c);
          h.useEffect(() => {
            p(vo(c, o, l, x));
          }, [c, x, o, l]);
          const v = h.useRef(void 0);
          (0, ve.i)(m, { msAutosaveTimeout: 1e3 });
          const { nodes: M, marks: g } = c.pm_schema;
          return (
            (0, w.ww)(s, M.image, M.video, g.link, i),
            (0, e.jsx)(w.Su, {
              clanSteamID: o.GetClanSteamID(),
              imageNode: M.image,
              videoNode: M.video,
              children: (0, e.jsxs)("div", {
                className: je().EventDescriptionContainer,
                children: [
                  (0, e.jsx)(Xt, {
                    view: i,
                    schema: c.pm_schema,
                    refUpdateToolbar: v,
                    className: je().ToolBar,
                    clanSteamID: o.GetClanSteamID(),
                  }),
                  (0, e.jsx)("div", {
                    className: je().EventDescriptionArea,
                    children: (0, e.jsx)(io.l, {
                      pmState: m,
                      className: (0, U.A)(
                        je().EventDescriptionRichField,
                        je().EventDetailsBody,
                      ),
                      refOnUpdate: v,
                      refView: d,
                      panelProps: { onBlur: () => m.CommitChanges() },
                      children: (0, e.jsx)(go, {
                        eventSchemaConfig: c,
                        editModel: o,
                        onURLPasted: x,
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        });
        function Mo(a, t) {
          const { nodes: o } = t.pm_schema,
            s = (0, w.w_)(a, o.image, o.video),
            n = (0, tt.s)(o.dynamiclink);
          return h.useCallback(
            (...l) => {
              let i = "default";
              return (
                s && (i = s(...l)), i == "default" && n && (i = n(...l)), i
              );
            },
            [s, n],
          );
        }
        const go = h.memo(function (t) {
          const { eventSchemaConfig: o, editModel: s, onURLPasted: n } = t,
            l = (0, Ye.LJ)(),
            { marks: i, nodes: d } = o.pm_schema;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(N.W, {
                linkMarkType: i.link,
                onURLPasted: n,
                schema: o.pm_schema,
              }),
              d.image && (0, e.jsx)(lo.pw, { nodeType: d.image }),
              (0, e.jsx)(jo, {
                schemaConfig: o,
                editModel: s,
                clanSteamID: s.GetClanSteamID(),
              }),
              (0, e.jsx)(ro, { emoticonStore: l, schema: o.pm_schema }),
            ],
          });
        });
        function jo(a) {
          const { schemaConfig: t, editModel: o, clanSteamID: s } = a,
            n = t.pm_schema,
            l = h.useMemo(() => se(n), [n]);
          (0, L.c$)(l);
          const i = n.nodes,
            d = i.image,
            c = i.video,
            m = i.carousel,
            p = h.useCallback(
              (v, M) => ({
                schemaConfig: t,
                node: M,
                imageNodeType: d,
                videoNodeType: c,
                carouselNodeType: m,
                editModel: o,
                clanSteamID: s,
              }),
              [t, d, c, m, o, s],
            ),
            x = h.useMemo(
              () => [
                i.previewyoutube && {
                  type: i.previewyoutube,
                  component: _e,
                  readProps: (v) => ({
                    videoID: v.attrs.videoID,
                    align: v.attrs.align,
                    editModel: o,
                  }),
                },
                d && {
                  type: d,
                  component: w.Yp,
                  readProps: (v) => p("image", v),
                },
                c && {
                  type: c,
                  component: w.Yp,
                  readProps: (v) => p("video", v),
                },
                i.meetsteamsessiongroup && {
                  type: i.meetsteamsessiongroup,
                  component: pt,
                  readProps: (v) => ({ group_id: v.attrs.group_id }),
                },
                i.meetsteamscheduleview && {
                  type: i.meetsteamscheduleview,
                  component: St,
                  readProps: (v) => ({ schedule_id: v.attrs.schedule_id }),
                },
                i.userpolls && {
                  type: i.userpolls,
                  component: Yt,
                  readProps: (v) => ({ poll_id: v.attrs.poll_id }),
                },
                i.dynamiclink && {
                  type: i.dynamiclink,
                  component: tt.b,
                  readProps: (v) => ({
                    editModel: o,
                    href: v.attrs.href,
                    schema: t.pm_schema,
                  }),
                },
                i.carousel && {
                  type: i.carousel,
                  component: mo.E,
                  readProps: (v) => ({
                    node: v,
                    imageNodeType: d,
                    videoNodeType: c,
                    schemaConfig: t,
                    editModel: o,
                  }),
                },
              ],
              [i, d, c, o, p, t],
            );
          return (0, e.jsx)(me.U, { specs: x });
        }
      },
      99931: (Z, ue, u) => {
        "use strict";
        u.d(ue, { W: () => ee });
        var e = u(7850),
          R = u(57053),
          ve = u(52893),
          L = u(90626),
          me = u(18210),
          N = u(29950),
          w = u(12293),
          ie = u(19565),
          G = u(37341),
          se = u.n(G),
          h = u(65217);
        const ee = L.memo(function (H) {
          const {
              linkMarkType: U,
              onURLPasted: r,
              schema: S,
              onClickURL: Y = _,
            } = H,
            W = L.useRef(Y);
          W.current = Y;
          const [te, Te] = L.useState(),
            [_e, Ee] = L.useState(),
            [ae, B] = L.useState(),
            [y, I] = (0, w.E)(S),
            pe = L.useMemo(
              () =>
                new ve.k_({
                  props: {
                    handleClickOn(b, D, C, f, O, P) {
                      if (P && (O.ctrlKey || O.button == 1)) {
                        const A = C.resolve(D - f)
                            .marks()
                            .find((q) => q.type == U),
                          F = A && (0, N.J)(A.attrs.href);
                        if (F)
                          return W.current(F, O.view), O.preventDefault(), !0;
                      }
                      return !1;
                    },
                    handleKeyDown(b, D) {
                      return D.key == "k" &&
                        (D.metaKey || D.ctrlKey) &&
                        !D.shiftKey &&
                        !D.altKey
                        ? (y(b), !0)
                        : !1;
                    },
                    clipboardTextParser(b, D, C, f) {
                      const O = (0, h.F)(S, b, U, r);
                      return O && new R.Ji(R.FK.from(O), D.start(), D.end());
                    },
                    handlePaste(b, D, C) {
                      let f = [];
                      if (
                        (C.content.descendants((A, F) => {
                          if (A.isText) {
                            const q = (0, h.F)(S, A.text, U, r);
                            q && f.push({ node: A, pos: F, rgNodes: q });
                          }
                        }),
                        !f.length)
                      )
                        return !1;
                      let O = b.state.tr;
                      O.selection.empty || O.deleteSelection();
                      let P = O.selection.from,
                        V = 0;
                      for (const A of f) {
                        const { node: F, pos: q, rgNodes: Q } = A,
                          he = C.content.cut(V, q).append(R.FK.from(Q));
                        O.insert(P, he),
                          (P += he.size + 2),
                          (V = q + F.nodeSize);
                      }
                      return (
                        O.insert(P, C.content.cut(V)),
                        O.scrollIntoView(),
                        b.dispatch(O),
                        !0
                      );
                    },
                    handleDOMEvents: {
                      mouseover: (b, D) => {
                        for (
                          let C = D.target;
                          C && C != D.currentTarget;
                          C = C.parentElement
                        )
                          if (
                            C.nodeName == "A" &&
                            "getBoundingClientRect" in C
                          ) {
                            const f = C.getBoundingClientRect();
                            Te(f.left + f.width / 2), Ee(f.bottom + 2), B(C);
                            return;
                          }
                        B(void 0);
                      },
                      mouseleave: (b, D) => (B(void 0), !1),
                    },
                  },
                }),
              [U, y, r, S],
            );
          (0, ie.c$)(pe);
          let re = null;
          return (
            ae &&
              te &&
              _e &&
              (re = (0, e.jsx)(z, {
                top: _e,
                left: te,
                href: ae.getAttribute("href"),
              })),
            (0, e.jsxs)(e.Fragment, { children: [re, I] })
          );
        });
        function z(J) {
          const { top: H, left: U, href: r } = J,
            [S, Y] = L.useState(0),
            W = L.useRef(null);
          L.useLayoutEffect(() => {
            Y(W.current.getBoundingClientRect().width);
          }, [H, U, r]);
          const te = { top: `${H}px`, left: `${Math.max(U - S / 2, 12)}px` };
          return (0, e.jsxs)("div", {
            className: G.Hover,
            style: te,
            ref: W,
            children: [
              (0, e.jsx)("div", { className: G.Link, children: r }),
              (0, e.jsx)("div", {
                className: G.LinkHelp,
                children: (0, me.we)("#UserGameNotes_ClickToOpenLink"),
              }),
            ],
          });
        }
        function _(J, H) {
          H.open(J);
        }
      },
      35184: (Z, ue, u) => {
        "use strict";
        u.d(ue, { R: () => L });
        var e = u(7850),
          R = u(90626),
          ve = u(72739);
        function L(N) {
          const {
              id: w,
              role: ie,
              visible: G = !0,
              className: se,
              keepMounted: h = !1,
              expandDirection: ee = "height",
              msAnimationDuration: z = 250,
              children: _,
            } = N,
            { style: J, active: H, refDiv: U } = me(G, ee, z);
          return !G && !H && !h
            ? null
            : (0, e.jsx)("div", {
                id: w,
                role: ie,
                className: se,
                ref: U,
                style: J,
                inert: !G,
                children: _,
              });
        }
        function me(N, w = "height", ie = 250) {
          const G = R.useRef(null),
            se = R.useRef(!0),
            [h, ee] = R.useState("idle"),
            [z, _] = R.useState(N ? {} : { [w]: "0px", overflow: "hidden" }),
            [J, H] = R.useState(N);
          return (
            R.useLayoutEffect(() => {
              se.current || ee("start"), N && H(N);
            }, [N]),
            R.useLayoutEffect(
              () => (
                (se.current = !1),
                () => {
                  se.current = !0;
                }
              ),
              [],
            ),
            R.useLayoutEffect(() => {
              const r = G.current,
                S = w == "height" ? "scrollHeight" : "scrollWidth",
                Y = () => {
                  ve.unstable_batchedUpdates(() => {
                    _(N ? {} : { [w]: "0px", overflow: "hidden" }),
                      ee("idle"),
                      H(N);
                  });
                };
              if (h == "start") {
                const W = r[S];
                W == 0
                  ? Y()
                  : (_((te) => ({
                      [w]: N ? "0px" : `${W}px`,
                      ...te,
                      overflow: "hidden",
                    })),
                    ee("active"));
              } else if (h == "active") {
                r.scrollTop;
                const W = r[S];
                return (
                  _({ overflow: "hidden", [w]: N ? `${W}px` : "0px" }),
                  r.addEventListener("transitionend", Y),
                  () => {
                    r.removeEventListener("transitionend", Y);
                  }
                );
              }
            }, [h, N]),
            {
              style: { ...z, transition: `${w} ${ie}ms` },
              active: J,
              refDiv: G,
            }
          );
        }
      },
      1397: (Z) => {
        Z.exports = {
          Column: "_3l7NrcIIw_fedlHdVwJMVE",
          controls: "_3PGiW8qQcZDfnK9rOz7sjY",
          EditorCtn: "_2tY4qnv8tygCT7s94cB4vX",
          AddNew: "JBYdBhACB7UzXP4l_tpF2",
          DialogCtn: "Hd3q3Z7if0Z5H7rKMfqGN",
          ParticipantRow: "_3wHfIq4f1KlUL4-fKL0jLv",
          EventDescriptionField: "_3WxO3z6DufUbRu-axJjjqp",
        };
      },
      28516: (Z) => {
        Z.exports = {
          EditorCtn: "_2h37cwEb2SfJphgpbu-dPv",
          controls: "kI20RMKnHD3qdQhl-Hr4K",
        };
      },
      63287: (Z) => {
        Z.exports = {
          DialogCtn: "_9JDWJYvoHTETKmebCO7iE",
          PollArea: "_1h-JdwvtVK38j8M4EXeUah",
          OptionInset: "_5o_Ifm1O6jf-4Iq4Kv07F",
          AdminOptions: "_1Kt8VfgLBvg0tD86og8ps7",
        };
      },
      37341: (Z) => {
        Z.exports = {
          Hover: "_1lo3nIamSX1TzzE4TlhFXA",
          Link: "_1ds3uh7ntoekPm635F2Ziv",
          LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
        };
      },
    },
  ]);
})();

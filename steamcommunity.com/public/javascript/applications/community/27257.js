/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [27257],
    {
      27257: (Z, ue, u) => {
        "use strict";
        u.r(ue), u.d(ue, { default: () => fo });
        var e = u(7850),
          V = u(8561),
          ve = u(81240),
          R = u(19565),
          me = u(23569),
          k = u(99931),
          w = u(93519),
          ie = u(89984),
          N = u(79216);
        function se(i) {
          return N.sM({ rules: [N.tG(/^>$/, i.nodes.quote)] });
        }
        var p = u(90626),
          ee = u(43458),
          L = u(1917),
          j = u(19316),
          J = u(2801),
          K = u(38348),
          U = u(36707),
          r = u(18210),
          S = u(54963),
          H = u(63226),
          Y = u(93464),
          te = u(52279);
        function Te(i, t, o, s = L.V2.left) {
          i.dispatch(
            i.state.tr.insert(
              i.state.selection.to,
              t.create({ videoID: o, align: s }),
            ),
          );
        }
        function _e(i) {
          const {
              videoID: t,
              align: o,
              editModel: s,
              selected: l,
              setAttrs: n,
              focusView: a,
            } = i,
            [d, c, m] = (0, S.uD)(),
            h = p.useCallback(() => {
              m(), a();
            }, [m, a]),
            x = p.useCallback(
              (v, M) => {
                n({ videoID: v, align: M }), h();
              },
              [n, h],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              d &&
                (0, e.jsx)(Ee, {
                  videoID: t,
                  align: o,
                  bEditing: !0,
                  hideModal: h,
                  onSave: x,
                }),
              (0, e.jsxs)(te.rK, {
                className: (0, U.A)(H.PreviewYoutubeEditor, l && H.Selected),
                children: [
                  (0, e.jsx)(te.h5, {
                    onEditClick: c,
                    onDeleteClick: i.removeNode,
                    bStrongShadows: !0,
                  }),
                  l && (0, e.jsx)("div", { className: H.SelectionOverlay }),
                  (0, e.jsx)(Y.Bm, {
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
        function Ee(i) {
          const {
              videoID: t = "",
              align: o = "",
              bEditing: s = !1,
              hideModal: l,
              onSave: n,
            } = i,
            [a, d] = p.useState(o || L.V2.full),
            [c, m] = p.useState(
              t ? `https://www.youtube.com/watch?v=${t}` : "",
            ),
            [h, x] = p.useState(void 0),
            v = p.useCallback(() => {
              const { strVideoID: g } = (0, ee.XU)(c);
              return (
                g ? n(g, a) : x((0, r.we)("#EventEditor_InsertYouTube_NoURL")),
                !1
              );
            }, [c, a, n]),
            M = p.useCallback((g) => {
              g && (g.element.focus(), g.element.select());
            }, []);
          return (0, e.jsx)(J.EN, {
            active: !0,
            children: (0, e.jsxs)(K._, {
              strTitle: (0, r.we)("#EventEditor_InsertYouTube"),
              closeModal: l,
              strOKText: s
                ? (0, r.we)("#Button_Save")
                : (0, r.we)("#EventEditor_InsertYouTube"),
              onOK: v,
              children: [
                h && (0, e.jsx)("div", { className: H.Error, children: h }),
                (0, e.jsx)(j.pd, {
                  label: (0, r.we)("#EventEditor_InsertYouTube_URL"),
                  placeholder: (0, r.we)(
                    "#EventEditor_InsertYouTube_Placholder",
                  ),
                  value: c,
                  ref: M,
                  onChange: (g) => m(g.currentTarget.value),
                }),
                (0, e.jsxs)(j.o1, {
                  label: (0, r.we)("#EventEditor_InsertYouTube_Position"),
                  children: [
                    (0, e.jsx)(j.Od, {
                      checked: a == L.V2.left,
                      onChange: (g) => g && d(L.V2.left),
                      label: (0, r.we)("#EventEditor_InsertYouTube_Left"),
                    }),
                    (0, e.jsx)(j.Od, {
                      checked: a == L.V2.right,
                      onChange: (g) => g && d(L.V2.right),
                      label: (0, r.we)("#EventEditor_InsertYouTube_Right"),
                    }),
                    (0, e.jsx)(j.Od, {
                      checked: a == L.V2.full,
                      onChange: (g) => g && d(L.V2.full),
                      label: (0, r.we)("#EventEditor_InsertYouTube_Full"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var ae = u(64868),
          G = u(55884),
          y = u(75372),
          I = u(65946),
          pe = u(16369),
          re = u(21733),
          E = u(56718),
          D = u(1880),
          C = u(69168),
          f = u(50660),
          O = u(1397),
          P = u.n(O),
          A = u(99412),
          B = u(71742),
          z = u(50109),
          q = u(7582),
          W = u(95695),
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
        function rt(i) {
          const { hideModal: t, fnUpdateSession: o } = i,
            [s, l] = (0, p.useState)(() => De(!0, null)),
            [n, a] = (0, p.useState)(() => Ce(!0, null)),
            [d] = (0, I.q3)(() => [n.location_type]);
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#MeetSteam_create_title"),
              onOK: () => o(s, n),
              closeModal: () => {
                a(Ce(!0, null)), l(De(!0, null)), t();
              },
              bOKDisabled: !d == null,
              children: (0, e.jsxs)("div", {
                className: P().DialogCtn,
                children: [
                  (0, e.jsx)(Ae, { group: s, fnSetGroup: l }),
                  (0, e.jsx)(Ve, { session: n, fnSetSession: a }),
                ],
              }),
            }),
          });
        }
        function dt(i) {
          const { hideModal: t, groupInput: o, fnUpdateGroupSession: s } = i,
            [l, n] = (0, p.useState)(() => De(!1, o));
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#MeetSteam_edit_title"),
              onOK: () => {
                s(l), t();
              },
              onCancel: () => {
                n(De(!1, o)), t();
              },
              children: (0, e.jsx)("div", {
                className: P().DialogCtn,
                children: (0, e.jsx)(Ae, { group: l, fnSetGroup: n }),
              }),
            }),
          });
        }
        function Be(i) {
          const {
              bCreate: t,
              hideModal: o,
              sessionInput: s,
              fnUpdateSession: l,
            } = i,
            [n, a] = (0, p.useState)(() => Ce(t, s)),
            [d] = (0, I.q3)(() => [n.location_type]);
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                l(n), o();
              },
              onCancel: () => {
                a(Ce(t, s)), o();
              },
              bOKDisabled: !d,
              children: (0, e.jsx)("div", {
                className: P().DialogCtn,
                children: (0, e.jsx)(Ve, { session: n, fnSetSession: a }),
              }),
            }),
          });
        }
        function Ae(i) {
          const { group: t, fnSetGroup: o } = i,
            s = (0, z.E)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(j.pd, {
                type: "text",
                label: (0, r.we)("#MeetSteam_edit_session_name"),
                value: r.NT.Get(t.localized_session_title, s),
                onChange: (l) => {
                  const n = { ...t };
                  (n.localized_session_title = r.NT.Set(
                    n.localized_session_title,
                    s,
                    l.currentTarget.value,
                  )),
                    o(n);
                },
              }),
              (0, e.jsx)(j.JU, {
                children: (0, r.we)("#MeetSteam_edit_session_desc"),
              }),
              (0, e.jsx)("textarea", {
                className: (0, U.A)(
                  "DialogTextInputBase",
                  P().EventDescriptionField,
                ),
                value: r.NT.Get(t.localized_session_description, s),
                rows: 5,
                onChange: (l) => {
                  const n = { ...t };
                  (n.localized_session_description = r.NT.Set(
                    n.localized_session_description,
                    s,
                    l.currentTarget.value,
                  )),
                    o(n);
                },
              }),
              (0, e.jsx)(j.pd, {
                type: "text",
                label: "Intended Audience",
                tooltip:
                  "A short descriptions for whom then event is designed for to help partners self select",
                value: r.NT.Get(t.localized_intended_audience, s),
                onChange: (l) => {
                  const n = { ...t };
                  (n.localized_intended_audience = r.NT.Set(
                    n.localized_intended_audience,
                    s,
                    l.currentTarget.value,
                  )),
                    o(n);
                },
              }),
              (0, e.jsxs)(j.JU, {
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
                onChange: (l) => {
                  const n = { ...t };
                  (n.localized_sesssion_faq = r.NT.Set(
                    n.localized_sesssion_faq,
                    s,
                    l.currentTarget.value,
                  )),
                    o(n);
                },
              }),
              (0, e.jsx)(j.Yh, {
                checked: t.ask_registration_question,
                onChange: (l) => {
                  const n = { ...t };
                  (n.ask_registration_question = l), o(n);
                },
                label:
                  "Ask partner to tell us what they want to learn from the sessions",
              }),
              (0, e.jsx)(ct, { ...i }),
            ],
          });
        }
        function ct(i) {
          const { group: t, fnSetGroup: o } = i,
            [s, l] = (0, p.useState)(t.group_visibility_tokens?.length > 0);
          return s
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    children:
                      "By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.",
                  }),
                  t.group_visibility_tokens.map((n, a) =>
                    (0, e.jsx)(
                      j.pd,
                      {
                        type: "number",
                        min: "10000",
                        max: "99999",
                        value: n || 1e4,
                        onChange: (d) => {
                          const c = { ...t };
                          (c.group_visibility_tokens[a] = Number.parseInt(
                            d.currentTarget.value,
                          )),
                            o(c);
                        },
                        label: "Visibility Token",
                      },
                      "token" + n + "_" + a,
                    ),
                  ),
                  (0, e.jsx)(j.$n, {
                    onClick: () => {
                      const n = { ...t };
                      (n.group_visibility_tokens = [
                        ...n.group_visibility_tokens,
                        1e4,
                      ]),
                        o(n);
                    },
                    children: "Add Token",
                  }),
                  t.group_visibility_tokens.length > 0 &&
                    (0, e.jsx)(j.$n, {
                      onClick: () => {
                        const n = { ...t };
                        (n.group_visibility_tokens =
                          n.group_visibility_tokens.slice(0, -1)),
                          o(n);
                      },
                      children: "Remove Last Token",
                    }),
                ],
              })
            : (0, e.jsx)(j.Yh, {
                checked: !1,
                onChange: l,
                label: "Change Visibility Options",
              });
        }
        function Ve(i) {
          const { session: t, fnSetSession: o } = i,
            [s, l, n, a, d, c] = (0, I.q3)(() => [
              t.rtime_start,
              t.rtime_end,
              t.max_capacity,
              t.max_per_team,
              t.location_type,
              t.in_person_time_zone,
            ]),
            m = [];
          for (let M = 0; M < 4; ++M) m.push({ data: M, label: M });
          const h = Math.max(0, Math.floor((l - s) / 60)),
            x = Intl.DateTimeFormat().resolvedOptions().timeZone,
            v = d === "in_person" ? (c ?? fe.hh) : x;
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
                    rtime_end: M + ne.Kp.PerMinute * h,
                  }),
                fnIsValidDateTime: () => !0,
                bShowTimeZone: !0,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(j.pd, {
                type: "number",
                min: 0,
                label: (0, r.we)("#MeetSteam_edit_duration"),
                onChange: (M) => {
                  const g = Number.parseInt(M.currentTarget.value);
                  o({ ...t, rtime_end: t.rtime_start + ne.Kp.PerMinute * g });
                },
                value: h,
              }),
              (0, e.jsx)(Re, {
                rtime_start: s,
                rtime_end: l,
                sDisplayTimeZone: v,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
              (0, e.jsxs)("div", {
                className: P().ParticipantRow,
                children: [
                  (0, e.jsx)(j.pd, {
                    type: "number",
                    value: n,
                    label: (0, r.we)("#MeetSteam_edit_max_capacity"),
                    min: 1,
                    onChange: (M) =>
                      o({
                        ...t,
                        max_capacity: Number.parseInt(M.currentTarget.value),
                      }),
                  }),
                  (0, e.jsx)(j.m, {
                    controlled: !0,
                    label: (0, r.we)("#MeetSteam_edit_guest_count"),
                    tooltip: (0, r.we)("#MeetSteam_edit_guest_count_ttip"),
                    rgOptions: m,
                    selectedOption: a,
                    onChange: (M) => o({ ...t, max_per_team: M.data }),
                  }),
                ],
              }),
            ],
          });
        }
        function Re(i) {
          const { rtime_start: t, rtime_end: o, sDisplayTimeZone: s } = i,
            l = be.unix(t).tz(fe.hh),
            n = be.unix(t).tz(s),
            a = n.utcOffset() - l.utcOffset(),
            d = be.unix(o).tz(fe.hh),
            c = be.unix(o).tz(s),
            m = c.utcOffset() - d.utcOffset();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                children: [
                  (0, r.we)("#MeetSteam_edit_displayed_start"),
                  ": ",
                  (0, Ge.P0)(n.unix() + a * 60, !1, n.format("z")),
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
        function Le(i) {
          const {
              startTime: t,
              location_type: o,
              fnUpdateLocationAndTZ: s,
              in_person_time_zone: l,
            } = i,
            n = { option: (x) => ({ ...x, color: "#444444" }) },
            a = ut(t),
            d = p.useMemo(
              () =>
                a.reduce((x, v) => x.set(v.name, v.friendly_name), new Map()),
              [a],
            ),
            c = (x) => d.get(x) ?? x,
            m = p.useId(),
            h = p.useId();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                id: m,
                className: W.EventEditorTextTitle,
                children: (0, r.we)("#MeetSteam_edit_date_display_title"),
              }),
              (0, e.jsx)("div", {
                id: h,
                className: W.EventEditorTextSubTitle,
                children: (0, r.we)("#MeetSteam_edit_date_display_desc"),
              }),
              (0, e.jsxs)(j.zW, {
                labelId: m,
                descriptionId: h,
                value: o,
                onChange: (x) => s(x, l),
                children: [
                  (0, e.jsx)(j.a, {
                    value: "in_person",
                    children: (0, r.we)(
                      "#MeetSteam_edit_date_display_in_person",
                    ),
                  }),
                  (0, e.jsx)(j.a, {
                    value: "virtual",
                    children: (0, r.we)("#MeetSteam_edit_date_display_virtual"),
                  }),
                ],
              }),
              o === "in_person" &&
                (0, e.jsx)(ot.Ay, {
                  styles: n,
                  isSearchable: !0,
                  isMulti: !1,
                  options: a.map((x) => ({
                    label: x.friendly_name,
                    value: x.name,
                  })),
                  defaultMenuIsOpen: !1,
                  value: l
                    ? { label: c(l), value: l }
                    : { label: c(fe.hh), value: fe.hh },
                  onChange: (x) => s(o, x.value),
                }),
            ],
          });
        }
        function ut(i) {
          const t = (0, st.I)({
            queryKey: ["timezone", i],
            queryFn: async () => {
              const o = `${nt.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                s = { reference_time: i };
              return (await it().get(o, { params: s }))?.data.timezones;
            },
          });
          return t.isSuccess ? t.data : [];
        }
        function De(i, t) {
          if (i) {
            const s = y.mh.GetEditModel().GetEventModel()
              .jsondata.meet_steam_groups;
            let l = 0;
            do l = Math.floor(1e4 + Math.random() * 9e4);
            while (s && s.findIndex((n) => n.group_id == l) >= 0);
            return {
              group_id: l,
              localized_session_title: (0, de.$Y)([], A.bP9, null),
              localized_session_description: (0, de.$Y)([], A.bP9, null),
              localized_sesssion_faq: (0, de.$Y)([], A.bP9, null),
              localized_intended_audience: (0, de.$Y)([], A.bP9, null),
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
            (0, B.wT)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null
          );
        }
        function Ce(i, t) {
          if (i) {
            const o = q.HD.GetTimeNowWithOverride(),
              n = y.mh
                .GetEditModel()
                .GetEventModel()
                .jsondata.meet_steam_groups?.reduce(
                  (c, m) => c.concat(m.sessions),
                  [],
                );
            let a = 0;
            do a = Math.floor(1e4 + Math.random() * 9e4);
            while (n && n.findIndex((c) => c.id == a) >= 0);
            const d = Math.ceil(o / 3600) * 3600;
            return {
              id: a,
              rtime_start: d + ne.Kp.PerDay,
              rtime_end: d + ne.Kp.PerDay + ne.Kp.PerHour,
              max_capacity: 100,
              max_per_team: 3,
            };
          } else if (t) return { ...t };
          return (
            (0, B.wT)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null
          );
        }
        function Pe(i) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.meet_steam_groups.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.meet_steam_groups[o];
            for (let l = 0; l < s.sessions.length; ++l)
              if (s.sessions[l].id == i)
                return { groupIndex: o, sessionIndex: l };
          }
          return null;
        }
        function ze(i) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.meet_steam_groups.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.meet_steam_groups[o];
            if (s.group_id == i) return { group: s, groupIndex: o };
          }
          return null;
        }
        function Fe(i) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.meet_steam_schedules.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.meet_steam_schedules[o];
            if (s.schedule_id == i) return { schedule: s, scheduleIndex: o };
          }
          return null;
        }
        var xe = u(36118),
          oe = u(21438);
        function mt(i, t, o) {
          i.dispatch(
            i.state.tr.insert(i.state.selection.to, t.create({ group_id: o })),
          );
        }
        function pt(i) {
          const { focusView: t, removeNode: o, group_id: s } = i,
            l = (0, oe.LU)(),
            n = (0, I.q3)(() =>
              l
                .GetEventModel()
                .jsondata.meet_steam_groups?.find((g) => g.group_id == s),
            ),
            [a, d, c] = (0, S.uD)(),
            m = p.useCallback(() => {
              t(), c();
            }, [t, c]),
            [h, x, v] = (0, S.uD)(),
            M = p.useCallback(() => {
              t(), v();
            }, [t, v]);
          return !n || l.GetClanAccountID() != (0, pe.H)()
            ? (0, e.jsx)("div", {
                children: "Error: Cannot edit meet steam session group",
              })
            : (0, e.jsxs)("div", {
                className: P().EditorCtn,
                children: [
                  (0, e.jsx)(ht, { groupData: n, focusView: t }),
                  (0, e.jsxs)("div", {
                    className: P().controls,
                    children: [
                      (0, e.jsx)(f.ff, {
                        onClick: d,
                        tooltip: (0, r.we)("#Button_Edit"),
                        children: (0, e.jsx)(E.ffu, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: x,
                        tooltip: (0, r.we)("#Button_Delete"),
                        children: (0, e.jsx)(E.sED, {}),
                      }),
                      n.group_visibility_tokens?.length > 0 &&
                        (0, e.jsx)(f.ff, {
                          onClick: () => {},
                          tooltip:
                            "Limited visibility to those with the appropriate URLs",
                          children: (0, e.jsx)(xe.WLA, {}),
                        }),
                      !!n.ask_registration_question &&
                        (0, e.jsx)(f.ff, {
                          onClick: () => {},
                          tooltip:
                            "Will ask partner to provides questions for us for this session.",
                          children: (0, e.jsx)(xe.vfN, {}),
                        }),
                    ],
                  }),
                  !!a &&
                    (0, e.jsx)(dt, {
                      hideModal: m,
                      groupInput: n,
                      fnUpdateGroupSession: (g) => {
                        const { groupIndex: _ } = ze(g.group_id),
                          b = y.mh.GetEditModel();
                        (b.GetEventModel().jsondata.meet_steam_groups[_] = g),
                          b.SetDirty(G.IQ.description);
                      },
                    }),
                  !!h &&
                    (0, e.jsx)(C.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const { groupIndex: g } = ze(n.group_id),
                            _ = y.mh.GetEditModel(),
                            b = [
                              ..._.GetEventModel().jsondata.meet_steam_groups,
                            ];
                          b.splice(g, 1),
                            (_.GetEventModel().jsondata.meet_steam_groups = b),
                            _.SetDirty(G.IQ.description),
                            o();
                        },
                        closeModal: M,
                      }),
                    }),
                ],
              });
        }
        function ht(i) {
          const { groupData: t, focusView: o } = i,
            s = (0, I.q3)(() => t.sessions || []),
            [l, n, a] = (0, S.uD)(),
            d = p.useCallback(() => {
              o(), a();
            }, [o, a]);
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
                    onClick: n,
                    tooltip: (0, r.we)("#MeetSteam_add"),
                    children: (0, e.jsx)(E.OMN, {}),
                  }),
                  l &&
                    (0, e.jsx)(Be, {
                      bCreate: !0,
                      hideModal: d,
                      fnUpdateSession: (c) => {
                        const m = y.mh.GetEditModel(),
                          h = [...t.sessions, c];
                        h.sort((x, v) => x.rtime_start - v.rtime_start),
                          (t.sessions = h),
                          m.SetDirty(G.IQ.description);
                      },
                    }),
                ],
              })
            : null;
        }
        function ft(i) {
          const { sessionID: t, bShowOR: o, focusView: s } = i,
            [l, n] = (0, S.OP)(),
            a = (0, I.q3)(() => {
              const { groupIndex: _, sessionIndex: b } = Pe(t);
              return y.mh.GetEditModel().GetEventModel().jsondata
                .meet_steam_groups[_].sessions[b];
            }),
            [d, c, m] = (0, S.uD)(),
            h = p.useCallback(() => {
              s(), m();
            }, [s, m]),
            [x, v, M] = (0, S.uD)(),
            g = p.useCallback(() => {
              s(), M();
            }, [s, M]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: P().Column,
                ...n,
                children: [
                  (0, e.jsx)(re.Tn, { sessionData: a }),
                  !!l &&
                    (0, e.jsxs)("div", {
                      className: P().controls,
                      children: [
                        (0, e.jsx)(f.ff, {
                          onClick: c,
                          tooltip: (0, r.we)("#Button_Edit"),
                          children: (0, e.jsx)(E.ffu, {}),
                        }),
                        (0, e.jsx)(f.ff, {
                          onClick: v,
                          tooltip: (0, r.we)("#Button_Delete"),
                          children: (0, e.jsx)(E.sED, {}),
                        }),
                      ],
                    }),
                  !!d &&
                    (0, e.jsx)(Be, {
                      bCreate: !1,
                      hideModal: h,
                      sessionInput: a,
                      fnUpdateSession: (_) => {
                        const b = y.mh.GetEditModel(),
                          { groupIndex: $, sessionIndex: X } = Pe(t),
                          le = [
                            ...b.GetEventModel().jsondata.meet_steam_groups[$]
                              .sessions,
                          ];
                        (le[X] = _),
                          le.sort((Ne, _o) => Ne.rtime_start - _o.rtime_start),
                          (b.GetEventModel().jsondata.meet_steam_groups[
                            $
                          ].sessions = le),
                          b.SetDirty(G.IQ.description);
                      },
                    }),
                  !!x &&
                    (0, e.jsx)(C.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const _ = y.mh.GetEditModel(),
                            { groupIndex: b, sessionIndex: $ } = Pe(t),
                            X = [
                              ..._.GetEventModel().jsondata.meet_steam_groups[b]
                                .sessions,
                            ];
                          X.splice($, 1),
                            X.sort((le, Ne) => le.rtime_start - Ne.rtime_start),
                            (_.GetEventModel().jsondata.meet_steam_groups[
                              b
                            ].sessions = X),
                            _.SetDirty(G.IQ.description);
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
          F = u(38539),
          Eo = u(81973),
          vt = u(35184);
        function xt(i, t, o, s, l) {
          const n = () => o.createChecked(null, l.createChecked()),
            a = () => s.createChecked(null, l.createChecked());
          return i.createChecked(null, [
            t.createChecked(null, [n(), n()]),
            t.createChecked(null, [a(), a()]),
          ]);
        }
        function Mt(i) {
          const { schema: t } = i,
            {
              table: o,
              table_row: s,
              table_header: l,
              table_cell: n,
              paragraph: a,
            } = t.nodes,
            d = p.useCallback(
              (c, m, h) =>
                F.aH(c)
                  ? !1
                  : (m && m(c.tr.insert(c.selection.to, xt(o, s, l, n, a))),
                    !0),
              [o, s, l, n, a],
            );
          return o
            ? (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_InsertTable"),
                command: d,
                children: (0, e.jsx)(E._Q2, {}),
              })
            : null;
        }
        function gt(i) {
          const { schema: t, className: o } = i,
            { callbacks: s, view: l } = (0, f.wU)(),
            [n, a] = p.useState(() => !!t.nodes.table && F.aH(l.state));
          return (
            (0, S.hL)(
              s,
              p.useCallback(
                (d) => a(!!t.nodes.table && F.aH(d.state)),
                [t.nodes.table],
              ),
            ),
            (0, e.jsx)(vt.R, {
              visible: n,
              msAnimationDuration: 100,
              children: (0, e.jsx)(f.Ez, {
                className: o,
                children: (0, e.jsx)(jt, { schema: t }),
              }),
            })
          );
        }
        function jt(i) {
          const { schema: t } = i;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddRowBefore"),
                command: F.JD,
                children: (0, e.jsx)(E.BPi, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddRowAfter"),
                command: F.gC,
                children: (0, e.jsx)(E.fG_, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_DeleteRow"),
                command: F.aR,
                children: (0, e.jsx)(E.XW_, {}),
              }),
              (0, e.jsx)(f.XQ, {}),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddColumnBefore"),
                command: F.RC,
                children: (0, e.jsx)(E.l26, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddColumnAfter"),
                command: F.GU,
                children: (0, e.jsx)(E.ur3, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_DeleteColumn"),
                command: F.gR,
                children: (0, e.jsx)(E.dyV, {}),
              }),
              (0, e.jsx)(f.XQ, {}),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_HeaderRow"),
                command: F.uC,
                children: (0, e.jsx)(E.mLi, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_HeaderColumn"),
                command: F.xV,
                children: (0, e.jsx)(E.sXN, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_HeaderCell"),
                command: F._G,
                children: (0, e.jsx)(E.Maz, {}),
              }),
              (0, e.jsx)(f.XQ, {}),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_MergeCells"),
                command: F.w7,
                children: (0, e.jsx)(E.rnq, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_SplitCells"),
                command: F.L0,
                children: (0, e.jsx)(E.vB9, {}),
              }),
              !1,
            ],
          });
        }
        function bo(i) {
          const { schema: t } = i,
            { table: o } = t.nodes,
            { callbacks: s, view: l } = useToolbarContext(),
            [n, a] = React.useState(() =>
              IsInNodeWithAttribute(l.state, o, TableAttr.NoBorder),
            ),
            [d, c] = React.useState(() =>
              IsInNodeWithAttribute(l.state, o, TableAttr.EqualCells),
            ),
            m = React.useMemo(
              () => ToggleNodeBoolAttributeCommand(o, TableAttr.NoBorder),
              [o],
            ),
            h = React.useMemo(
              () => ToggleNodeBoolAttributeCommand(o, TableAttr.EqualCells),
              [o],
            );
          return (
            useCallbackList(
              s,
              React.useCallback(
                (x) => {
                  a(IsInNodeWithAttribute(x.state, o, TableAttr.NoBorder)),
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
                  toggled: n,
                  children: "brd",
                }),
                jsx(CommandButton, {
                  tooltip: "Toggle Equal Cells",
                  command: h,
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
        function bt(i, t, o) {
          i.dispatch(
            i.state.tr.insert(
              i.state.selection.to,
              t.create({ schedule_id: o }),
            ),
          );
        }
        function Ke(i, t) {
          if (i) {
            const s = y.mh.GetEditModel().GetEventModel()
              .jsondata.meet_steam_schedules;
            let l = 0;
            do l = Math.floor(1e4 + Math.random() * 9e4);
            while (s && s.findIndex((a) => a.schedule_id == l) >= 0);
            return { schedule_id: l, session_breaks: [] };
          } else if (t) return { ...t };
          return (
            (0, B.wT)(
              !1,
              "HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model",
            ),
            null
          );
        }
        function He(i) {
          const { hideModal: t, fnUpdateSession: o, inputScheduleModel: s } = i,
            l = (0, q.f1)(),
            n = (0, oe.LU)(),
            [a, d] = (0, p.useState)(() => Ke(!s, s)),
            [c, m, h] = (0, I.q3)(() => [
              a.location_type,
              a.in_person_time_zone,
              n.GetEventModel().jsondata.meet_steam_groups || [],
            ]),
            x = (0, p.useMemo)(() => {
              const v = h.reduce((M, g) => M.concat(g.sessions), []);
              return v.length == 0
                ? l
                : Math.min(...v.map((M) => M.rtime_start));
            }, [h, l]);
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: s
                ? "Update Meet Steam Schedule"
                : "Create Meet Steam Schedule View",
              onOK: () => o(a),
              closeModal: () => {
                d(Ke(!s, s)), t();
              },
              children: (0, e.jsxs)("div", {
                className: Ue().DialogCtn,
                children: [
                  (0, e.jsx)(Le, {
                    startTime: n.GetEventStartTime(),
                    location_type: c,
                    in_person_time_zone: m,
                    fnUpdateLocationAndTZ: (v, M) =>
                      d({ ...a, location_type: v, in_person_time_zone: M }),
                  }),
                  (0, e.jsx)(Dt, {
                    inputScheduleModel: a,
                    fnUpdateSession: (v) => d(v),
                    rtBreakStartingTime: x,
                  }),
                ],
              }),
            }),
          });
        }
        function Dt(i) {
          const {
              fnUpdateSession: t,
              inputScheduleModel: o,
              rtBreakStartingTime: s,
            } = i,
            [l, n] = (0, I.q3)(() => [
              o.session_breaks || [],
              o.in_person_time_zone || fe.hh,
            ]),
            a = (0, p.useCallback)(
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
              l
                .sort((d, c) => c.rtime_start - d.rtime_start)
                .map((d, c) =>
                  (0, e.jsx)(
                    Ct,
                    {
                      sDisplayTimeZone: n,
                      index: c,
                      breakSession: d,
                      fnOnUpdate: (m) => a(m, c),
                    },
                    "breakedit" + d.break_id,
                  ),
                ),
              (0, e.jsx)(j.$n, {
                onClick: () => {
                  const d = o.session_breaks ? [...o.session_breaks] : [];
                  let c = Math.floor(1 + Math.random() * 1e5);
                  for (; d.findIndex((m) => m.break_id == c) >= 0; )
                    c = Math.floor(1 + Math.random() * 1e5);
                  a(
                    {
                      break_id: c,
                      localized_break_description: (0, de.$Y)([], A.bP9, null),
                      rtime_start: s,
                      rtime_end: s + ne.Kp.PerHour,
                    },
                    o.session_breaks?.length || 0,
                  );
                },
                children: "+ Add Break",
              }),
            ],
          });
        }
        function Ct(i) {
          const {
              breakSession: t,
              fnOnUpdate: o,
              index: s,
              sDisplayTimeZone: l,
            } = i,
            n = (0, z.E)(),
            [a, d, c, m] = (0, I.q3)(() => [
              t.rtime_start,
              t.rtime_end,
              t.localized_break_description[n] || "",
              Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
            ]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", { children: ["Break # ", s + 1] }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(he.K, {
                strDescription: "Break Start Time",
                nEarliestTime: 0,
                fnGetTimeToUpdate: () => a,
                fnSetTimeToUpdate: (h) =>
                  o({
                    ...t,
                    rtime_start: h,
                    rtime_end: h + ne.Kp.PerMinute * m,
                  }),
                fnIsValidDateTime: () => !0,
                bShowTimeZone: !0,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(j.pd, {
                type: "number",
                min: 0,
                label: "Break duration in minutes",
                onChange: (h) => {
                  const x = Number.parseInt(h.currentTarget.value);
                  o({ ...t, rtime_end: t.rtime_start + ne.Kp.PerMinute * x });
                },
                value: m,
              }),
              (0, e.jsx)(j.pd, {
                type: "text",
                label: "Break Description",
                value: c,
                onChange: (h) => {
                  const x = { ...t };
                  (x.localized_break_description[n] = h.currentTarget.value),
                    o(x);
                },
              }),
              (0, e.jsx)(Re, {
                rtime_start: a,
                rtime_end: d,
                sDisplayTimeZone: l,
              }),
            ],
          });
        }
        function St(i) {
          const { focusView: t, removeNode: o, schedule_id: s } = i,
            l = (0, oe.LU)(),
            n = (0, I.q3)(() =>
              l
                .GetEventModel()
                .jsondata.meet_steam_schedules?.find((g) => g.schedule_id == s),
            ),
            [a, d, c] = (0, S.uD)(),
            m = p.useCallback(() => {
              t(), c();
            }, [t, c]),
            [h, x, v] = (0, S.uD)(),
            M = p.useCallback(() => {
              t(), v();
            }, [t, v]);
          return !n || l.GetClanAccountID() != (0, pe.H)()
            ? (0, e.jsx)("div", {
                children: "Error: Cannot edit meet steam schedule view",
              })
            : (0, e.jsxs)("div", {
                className: Ue().EditorCtn,
                children: [
                  (0, e.jsx)(re.fs, {
                    eventModel: l.GetEventModel(),
                    scheduleData: n,
                  }),
                  (0, e.jsxs)("div", {
                    className: Ue().controls,
                    children: [
                      (0, e.jsx)(f.ff, {
                        onClick: d,
                        tooltip: (0, r.we)("#Button_Edit"),
                        children: (0, e.jsx)(E.ffu, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: x,
                        tooltip: (0, r.we)("#Button_Delete"),
                        children: (0, e.jsx)(E.sED, {}),
                      }),
                    ],
                  }),
                  !!a &&
                    (0, e.jsx)(He, {
                      hideModal: m,
                      inputScheduleModel: n,
                      fnUpdateSession: (g) => {
                        const { scheduleIndex: _ } = Fe(g.schedule_id);
                        (l.GetEventModel().jsondata.meet_steam_schedules[_] =
                          g),
                          l.SetDirty(G.IQ.description);
                      },
                    }),
                  !!h &&
                    (0, e.jsx)(C.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const { scheduleIndex: g } = Fe(n.schedule_id),
                            _ = y.mh.GetEditModel(),
                            b = [
                              ..._.GetEventModel().jsondata
                                .meet_steam_schedules,
                            ];
                          b.splice(g, 1),
                            (_.GetEventModel().jsondata.meet_steam_schedules =
                              b),
                            _.SetDirty(G.IQ.description),
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
        function It(i) {
          const { schema: t } = i,
            { callbacks: o, view: s } = (0, f.wU)(),
            [l, n] = p.useState(!1),
            a = p.useCallback(
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
            d = p.useCallback(
              (c) => {
                n(!0);
                const m = (0, yt.lX)((0, e.jsx)(Ut, { OnSelected: a }), c, {
                  bOverlapHorizontal: !0,
                });
                (0, Pt.z7)(
                  () => !m.visible,
                  () => n(!1),
                );
              },
              [a],
            );
          return (0, e.jsx)(f.ff, {
            tooltip: (0, r.we)("#Editor_Emoticon"),
            onClick: d,
            toggled: l,
            children: (0, e.jsx)(xe.jZW, {}),
          });
        }
        function Ut(i) {
          const t = (0, Ye.LJ)();
          return (
            (0, Se.k3)(t),
            (0, e.jsx)(Tt.iY, { emoticonStore: t, OnSelected: i.OnSelected })
          );
        }
        var wt = u(98609),
          T = u(40852),
          Ot = u(813),
          kt = u(63287),
          Q = u.n(kt),
          Nt = u(5471),
          Gt = u(70377),
          Bt = u(86959),
          We = u(50974);
        function At(i) {
          const { hideModal: t, fnUpdateSession: o, clanAccountID: s } = i,
            [l, n] = (0, p.useState)(() => ye(!0, null));
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#UserPolls_Create_title"),
              onOK: () => o(l),
              closeModal: () => {
                n(ye(!0, null)), t();
              },
              children: (0, e.jsx)("div", {
                className: Q().DialogCtn,
                children: (0, e.jsx)($e, {
                  clanAccountID: s,
                  userPollDef: l,
                  fnSetDef: n,
                }),
              }),
            }),
          });
        }
        function Vt(i) {
          const {
              hideModal: t,
              userPollDef: o,
              clanAccountID: s,
              fnUpdateUserPollDef: l,
            } = i,
            [n, a] = (0, p.useState)(() => ye(!1, o));
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#UserPolls_Edit_title"),
              onOK: () => {
                l(n);
              },
              onCancel: () => {
                a(ye(!1, o));
              },
              closeModal: t,
              children: (0, e.jsx)("div", {
                className: Q().DialogCtn,
                children: (0, e.jsx)($e, {
                  userPollDef: n,
                  clanAccountID: s,
                  fnSetDef: a,
                }),
              }),
            }),
          });
        }
        function Qe(i) {
          switch (i) {
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
        function $e(i) {
          const { userPollDef: t, fnSetDef: o } = i,
            s = (0, z.E)(),
            [l] = (0, I.q3)(() => [t.results_visibility_settings]),
            n = Object.values(T.$t).map((a) => ({ data: a, label: Qe(a) }));
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(j.pd, {
                type: "text",
                label: (0, r.we)("#UserPolls_Description"),
                value: r.NT.Get(t.localized_poll_description, s),
                onChange: (a) => {
                  const d = { ...t };
                  (d.localized_poll_description = r.NT.Set(
                    d.localized_poll_description,
                    s,
                    a.currentTarget.value,
                  )),
                    o(d);
                },
              }),
              (0, e.jsx)(zt, { ...i }),
              (0, e.jsx)(Lt, { ...i }),
              (0, e.jsx)(j.JU, {
                children: (0, r.we)("#UserPolls_Visibility"),
              }),
              (0, e.jsx)("div", {
                className: Q().PollArea,
                children: (0, e.jsx)(j.m, {
                  strDropDownClassName: W.DropDownScroll,
                  rgOptions: n,
                  selectedOption: l,
                  onChange: (a) => {
                    a.data != t.results_visibility_settings &&
                      o({ ...t, results_visibility_settings: a.data });
                  },
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                }),
              }),
              (0, e.jsx)(Rt, { ...i }),
            ],
          });
        }
        function Rt(i) {
          const { clanAccountID: t, userPollDef: o, fnSetDef: s } = i,
            l = (0, oe.LU)(),
            n = (0, T.rR)(l.GetClanSteamID()),
            [a] = (0, I.q3)(() => [o.user_poll_background]),
            d = (0, p.useCallback)(
              (c, m, h, x, v) => {
                (0, B.wT)(
                  h != null && h >= A.Bhc && h < A.bP9,
                  "Unexpected value for elang: " + h,
                ),
                  (0, B.wT)(
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
              (0, e.jsx)(j.JU, {
                children: (0, r.we)("#UserPolls_BackgroundImage"),
              }),
              (0, e.jsxs)("div", {
                className: Q().PollArea,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, r.we)("#UserPolls_BackgroundImage_desc"),
                  }),
                  (0, e.jsx)(Nt.a, {
                    rgRealmList: l.GetIncludedRealmList(),
                    rgSupportArtwork: T.YX,
                    strUploadAjaxURL: n,
                    fnOnUploadSuccess: d,
                    elOverrideDragAndDropText: (0, r.we)(
                      "#Template_Section_MediaUpdate_Static_Dnd",
                    ),
                    bTwoPhaseUpload: !0,
                    bDirectTempStorageUpload: !0,
                  }),
                  !!a && (0, e.jsx)("img", { src: (0, Bt.Fk)(t, a) }),
                ],
              }),
            ],
          });
        }
        function Me(i) {
          switch (i) {
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
        function Lt(i) {
          const { clanAccountID: t, userPollDef: o, fnSetDef: s } = i,
            [l, n] = (0, Ot.TB)(t),
            [a, d] = (0, I.q3)(() => [
              o.voter_min_playtime_seconds,
              o.voter_eligibility,
            ]),
            c = (0, p.useMemo)(() => {
              const m = [
                {
                  label: Me(T.BY.k_EPollVoter_AnyUser),
                  data: T.BY.k_EPollVoter_AnyUser,
                },
              ];
              return (
                n && n.is_ogg && t != We.II
                  ? (m.push({
                      label: Me(T.BY.k_EPollVoter_UserGameInLibrary),
                      data: T.BY.k_EPollVoter_UserGameInLibrary,
                    }),
                    m.push({
                      label: Me(T.BY.k_EPollVoter_MinPlayTime),
                      data: T.BY.k_EPollVoter_MinPlayTime,
                    }))
                  : n &&
                    (!n.is_ogg || t == We.II) &&
                    m.push({
                      label: Me(T.BY.k_EPollVoter_MemberOfGroup),
                      data: T.BY.k_EPollVoter_MemberOfGroup,
                    }),
                m
              );
            }, [t, n]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(j.JU, { children: (0, r.we)("#UserPolls_Voters") }),
              (0, e.jsxs)("div", {
                className: Q().PollArea,
                children: [
                  (0, e.jsx)(j.m, {
                    strDropDownClassName: W.DropDownScroll,
                    rgOptions: c,
                    selectedOption: d,
                    onChange: (m) => {
                      if (m.data != o.voter_eligibility) {
                        let h = { ...o, voter_eligibility: m.data };
                        m.data == T.BY.k_EPollVoter_MinPlayTime &&
                          (h.voter_min_playtime_seconds = 5 * Oe),
                          s(h);
                      }
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                  d == T.BY.k_EPollVoter_MinPlayTime &&
                    (0, e.jsx)("div", {
                      className: Q().OptionInset,
                      children: (0, e.jsx)(j.pd, {
                        type: "number",
                        label: (0, r.we)("#UserPolls_MinPlayTime"),
                        value: a / Oe,
                        min: 5,
                        onChange: (m) => {
                          const x =
                            (Number.parseInt(m?.currentTarget?.value) ?? 5) *
                            Oe;
                          o.voter_min_playtime_seconds != x &&
                            s({ ...o, voter_min_playtime_seconds: x });
                        },
                      }),
                    }),
                ],
              }),
            ],
          });
        }
        function zt(i) {
          const { userPollDef: t, fnSetDef: o } = i,
            [s, l] = (0, I.q3)(() => [
              t.poll_end_time,
              t.poll_end_days_since_start,
            ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(j.JU, { children: (0, r.we)("#UserPolls_Starts") }),
              (0, e.jsxs)("div", {
                className: Q().PollArea,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, U.A)(W.FlexRowContainer, W.RadioOption),
                    children: [
                      (0, e.jsx)("input", {
                        type: "radio",
                        name: "StartDateRadio",
                        id: "UserPollDialog_Days",
                        checked: !!l,
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
                  !!l &&
                    (0, e.jsx)("div", {
                      className: Q().OptionInset,
                      children: (0, e.jsx)(j.pd, {
                        type: "number",
                        value: l / ge,
                        min: 1,
                        onChange: (n) => {
                          const d =
                            (Number.parseInt(n?.currentTarget?.value) ?? 1) *
                            ge;
                          t.poll_end_days_since_start != d &&
                            o({
                              ...t,
                              poll_end_time: void 0,
                              poll_end_days_since_start: d,
                            });
                        },
                      }),
                    }),
                  (0, e.jsxs)("div", {
                    className: (0, U.A)(W.FlexRowContainer, W.RadioOption),
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
                      className: (0, U.A)(Q().OptionInset, W.FlexRowContainer),
                      children: [
                        (0, e.jsx)(he.K, {
                          strDescription: "",
                          nEarliestTime: Math.floor(Date.now() / 1e3) + 3600,
                          fnGetTimeToUpdate: () => s,
                          fnSetTimeToUpdate: (n) => {
                            t.poll_end_time != n &&
                              o({
                                ...t,
                                poll_end_days_since_start: void 0,
                                poll_end_time: n,
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
        function ye(i, t) {
          if (i) {
            const s =
              y.mh.GetEditModel().GetEventModel().jsondata.user_polls || [];
            let l = 0;
            do l = Math.floor(1e4 + Math.random() * 9e4);
            while (s && s.findIndex((n) => n.poll_id == l) >= 0);
            return {
              poll_id: l,
              options: [],
              localized_poll_description: (0, de.$Y)([], A.bP9, null),
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
            (0, B.wT)(
              !1,
              "HelperCreateOrCloneUserPollModel Expect Create or previous model",
            ),
            null
          );
        }
        function Xe(i) {
          const {
              bCreate: t,
              hideModal: o,
              pollOptionsInput: s,
              fnUpdatePollOption: l,
            } = i,
            [n, a] = (0, p.useState)(() => Ze(t, s)),
            d = (0, z.E)();
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)(
                t ? "#UserPolls_Option_Create" : "#UserPolls_Option_Edit",
              ),
              onOK: () => {
                l(n), o();
              },
              onCancel: () => {
                a(Ze(t, s)), o();
              },
              children: (0, e.jsx)("div", {
                className: Q().DialogCtn,
                children: (0, e.jsx)(j.pd, {
                  type: "text",
                  label: (0, r.we)("#UserPolls_Option_Title"),
                  value: r.NT.Get(n.localized_option, d),
                  onChange: (c) => {
                    const m = { ...n };
                    (m.localized_option = [...m.localized_option]),
                      (m.localized_option = r.NT.Set(
                        m.localized_option,
                        d,
                        c.currentTarget.value,
                      )),
                      a(m);
                  },
                }),
              }),
            }),
          });
        }
        function Ze(i, t) {
          if (i) {
            const l = y.mh
              .GetEditModel()
              .GetEventModel()
              .jsondata.user_polls?.reduce((a, d) => a.concat(d.options), []);
            let n = 0;
            do n = Math.floor(1e4 + Math.random() * 9e4);
            while (l && l.findIndex((a) => a.option_id == n) >= 0);
            return {
              option_id: n,
              localized_option: (0, de.$Y)([], A.bP9, null),
            };
          } else if (t) return { ...t };
          return (
            (0, B.wT)(
              !1,
              "HelperCreateOrClonePollOptionModel Expect Create or previous model",
            ),
            null
          );
        }
        var Je = u(29757),
          Ft = u(56330),
          qe = u(63940);
        function ke(i) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.user_polls.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.user_polls[o];
            for (let l = 0; l < s.options.length; ++l)
              if (s.options[l].option_id == i)
                return { pollIndex: o, optionIndex: l };
          }
          return null;
        }
        function et(i) {
          const t = y.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.user_polls.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.user_polls[o];
            if (s.poll_id == i) return { userPollDef: s, pollIndex: o };
          }
          return null;
        }
        var Kt = u(91512);
        function Ht(i, t, o) {
          i.dispatch(
            i.state.tr.insert(i.state.selection.to, t.create({ poll_id: o })),
          );
        }
        function Yt(i) {
          const { focusView: t, removeNode: o, poll_id: s } = i,
            l = (0, oe.LU)(),
            n = (0, I.q3)(() =>
              l
                .GetEventModel()
                .jsondata.user_polls?.find((g) => g.poll_id == s),
            ),
            [a, d, c] = (0, S.uD)(),
            m = p.useCallback(() => {
              t(), c();
            }, [t, c]),
            [h, x, v] = (0, S.uD)(),
            M = p.useCallback(() => {
              t(), v();
            }, [t, v]);
          return n
            ? (0, e.jsxs)("div", {
                className: P().EditorCtn,
                children: [
                  (0, e.jsx)(Wt, { userPollDef: n, focusView: t }),
                  (0, e.jsxs)("div", {
                    className: P().controls,
                    children: [
                      (0, e.jsx)(f.ff, {
                        onClick: d,
                        tooltip: (0, r.we)("#Button_Edit"),
                        children: (0, e.jsx)(E.ffu, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: x,
                        tooltip: (0, r.we)("#Button_Delete"),
                        children: (0, e.jsx)(E.sED, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: () => {},
                        tooltip: Qe(n.results_visibility_settings),
                        children: (0, e.jsx)(xe.WLA, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: () => {},
                        tooltip: Me(n.voter_eligibility),
                        children: (0, e.jsx)(xe.JpU, {}),
                      }),
                    ],
                  }),
                  !!a &&
                    (0, e.jsx)(Vt, {
                      hideModal: m,
                      userPollDef: n,
                      clanAccountID: l.GetClanAccountID(),
                      fnUpdateUserPollDef: (g) => {
                        const { pollIndex: _ } = et(g.poll_id),
                          b = y.mh.GetEditModel();
                        (b.GetEventModel().jsondata.user_polls[_] = g),
                          b.SetDirty(G.IQ.description);
                      },
                    }),
                  !!h &&
                    (0, e.jsx)(C.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const { pollIndex: g } = et(n.poll_id),
                            _ = y.mh.GetEditModel(),
                            b = [..._.GetEventModel().jsondata.user_polls];
                          b.splice(g, 1),
                            (_.GetEventModel().jsondata.user_polls = b),
                            _.SetDirty(G.IQ.description),
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
        function Wt(i) {
          const { userPollDef: t, focusView: o } = i,
            [s, l] = (0, I.q3)(() => [
              t.options || [],
              t.randomize_option_order,
            ]),
            n = (0, oe.LU)(),
            a = (0, z.E)(),
            [d, c, m] = (0, S.uD)(),
            h = p.useCallback(() => {
              o(), m();
            }, [o, m]),
            [x, v, M] = (0, S.uD)(),
            g = p.useCallback(() => {
              o(), M();
            }, [o, M]);
          return t
            ? (0, e.jsxs)(qe.W6, {
                userPollDef: t,
                eventModel: n.GetEventModel(),
                lang: a,
                children: [
                  s.map((_) =>
                    (0, e.jsx)(
                      $t,
                      { focusView: o, optionID: _.option_id },
                      "polloption" + t.poll_id + "_" + _.option_id,
                    ),
                  ),
                  (0, e.jsxs)("div", {
                    className: Q().AdminOptions,
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
                      hideModal: h,
                      fnUpdatePollOption: (_) => {
                        const b = y.mh.GetEditModel();
                        t.options || (t.options = []),
                          t.options.push(_),
                          b.SetDirty(G.IQ.description);
                      },
                    }),
                  x &&
                    (0, e.jsx)(Qt, {
                      hideModal: g,
                      options: s,
                      bRandomize: l,
                      fnUpdateOptions: (_, b) => {
                        (t.randomize_option_order = b), (t.options = _);
                      },
                    }),
                ],
              })
            : null;
        }
        function Qt(i) {
          const {
              options: t,
              bRandomize: o,
              fnUpdateOptions: s,
              hideModal: l,
            } = i,
            n = (0, z.E)(),
            [a, d] = (0, p.useState)(o),
            [c, m] = (0, p.useState)(t);
          return (0, e.jsx)(C.E, {
            active: !0,
            children: (0, e.jsxs)(D.o0, {
              strTitle: (0, r.we)("#UserPolls_Option_Reorder"),
              strDescription: (0, r.we)("#UserPolls_Option_Reorder_desc"),
              onCancel: () => {
                d(o), m(t);
              },
              onOK: () => {
                s([...c], a);
              },
              closeModal: l,
              children: [
                (0, e.jsx)(j.Yh, {
                  label: (0, r.we)("#UserPolls_Option_Randomize"),
                  checked: a,
                  onChange: d,
                }),
                (0, e.jsx)(Kt.A, {
                  items: c,
                  render: (h) =>
                    (0, e.jsx)("div", {
                      children:
                        h.localized_option?.[n] ||
                        h.localized_option?.[A.Bhc] ||
                        "",
                    }),
                  onReorder: (h) => m(h),
                }),
              ],
            }),
          });
        }
        function $t(i) {
          const { optionID: t, focusView: o } = i,
            [s, l] = (0, S.OP)(),
            n = (0, I.q3)(() => {
              const { optionIndex: _, pollIndex: b } = ke(t);
              return y.mh.GetEditModel().GetEventModel().jsondata.user_polls[b]
                .options[_];
            }),
            a = (0, z.E)(),
            [d, c, m] = (0, S.uD)(),
            h = p.useCallback(() => {
              o(), m();
            }, [o, m]),
            [x, v, M] = (0, S.uD)(),
            g = p.useCallback(() => {
              o(), M();
            }, [o, M]);
          return (0, e.jsxs)("div", {
            className: P().Column,
            ...l,
            children: [
              (0, e.jsx)(qe.s3, { pollOptionDef: n, lang: a }),
              !!s &&
                (0, e.jsxs)("div", {
                  className: P().controls,
                  children: [
                    (0, e.jsx)(f.ff, {
                      onClick: c,
                      tooltip: (0, r.we)("#Button_Edit"),
                      children: (0, e.jsx)(E.ffu, {}),
                    }),
                    (0, e.jsx)(f.ff, {
                      onClick: v,
                      tooltip: (0, r.we)("#Button_Delete"),
                      children: (0, e.jsx)(E.sED, {}),
                    }),
                  ],
                }),
              !!d &&
                (0, e.jsx)(Xe, {
                  bCreate: !1,
                  hideModal: h,
                  pollOptionsInput: n,
                  fnUpdatePollOption: (_) => {
                    const b = y.mh.GetEditModel(),
                      { optionIndex: $, pollIndex: X } = ke(t),
                      le = [
                        ...b.GetEventModel().jsondata.user_polls[X].options,
                      ];
                    (le[$] = _),
                      (b.GetEventModel().jsondata.user_polls[X].options = le),
                      b.SetDirty(G.IQ.description);
                  },
                }),
              !!x &&
                (0, e.jsx)(C.E, {
                  active: !0,
                  children: (0, e.jsx)(D.o0, {
                    strTitle: (0, r.we)("#Button_Delete"),
                    strDescription: (0, r.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const _ = y.mh.GetEditModel(),
                        { optionIndex: b, pollIndex: $ } = ke(t),
                        X = [
                          ..._.GetEventModel().jsondata.user_polls[$].options,
                        ];
                      X.splice(b, 1),
                        (_.GetEventModel().jsondata.user_polls[$].options = X),
                        _.SetDirty(G.IQ.description);
                    },
                    closeModal: g,
                  }),
                }),
            ],
          });
        }
        const Xt = p.memo(function (t) {
          const {
            view: o,
            schema: s,
            refUpdateToolbar: l,
            className: n,
            clanSteamID: a,
            bSpellcheckEnabled: d,
            setSpellcheckEnabled: c,
          } = t;
          return (0, e.jsx)(f.bI, {
            refUpdateToolbar: l,
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
                    (0, e.jsx)(qt, { schema: s, clanSteamID: a }),
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
        function Zt(i) {
          const t = (0, _t.V)();
          return (0, e.jsx)(ce.z9, { schema: i.schema, addtlAttrs: t });
        }
        function Jt(i) {
          const { schema: t } = i,
            { callbacks: o, view: s } = (0, f.wU)(),
            l = (0, oe.LU)(),
            [n, a, d] = (0, ae.uD)(),
            c = p.useCallback(() => {
              d(), s.focus();
            }, [d, s]),
            m = p.useCallback(
              (h) => {
                l.GetEventModel().jsondata.user_polls ||
                  (l.GetEventModel().jsondata.user_polls = []),
                  l.GetEventModel().jsondata.user_polls.push({ ...h }),
                  Ht(s, t.nodes.userpolls, h.poll_id),
                  c();
              },
              [t, s, c, l],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              n &&
                (0, e.jsx)(At, {
                  hideModal: c,
                  clanAccountID: l.GetClanAccountID(),
                  fnUpdateSession: m,
                }),
              (0, e.jsx)(f.ff, {
                tooltip: (0, r.we)("#UserPolls_Toolbar_ttip"),
                onClick: a,
                toggled: n,
                children: (0, e.jsx)(E.fQB, {}),
              }),
            ],
          });
        }
        function qt(i) {
          const { schema: t, clanSteamID: o } = i,
            { callbacks: s, view: l } = (0, f.wU)(),
            { image: n, video: a, previewyoutube: d } = t.nodes,
            c = p.useCallback(
              (g, _) => {
                l.dispatch(
                  l.state.tr.insert(l.state.selection.to, _.create(g)),
                );
              },
              [l],
            ),
            m = p.useCallback(() => l.focus(), [l]),
            {
              showInsertImageModal: h,
              showInsertVideoModal: x,
              imageModal: v,
              activeModal: M,
            } = (0, w.wU)({
              clanSteamID: o,
              imageNodeType: n,
              videoNodeType: a,
              onItemSelected: c,
              onHideModal: m,
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              v,
              n &&
                (0, e.jsx)(f.ff, {
                  tooltip: (0, r.we)("#EventEditor_InsertImage_Title"),
                  onClick: h,
                  toggled: M == "image",
                  children: (0, e.jsx)(E._V3, {}),
                }),
              a &&
                (0, e.jsx)(f.ff, {
                  tooltip: (0, r.we)("#EventEditor_EditVideo_Title"),
                  onClick: x,
                  toggled: M == "video",
                  children: (0, e.jsx)(E.CeX, {}),
                }),
              d && (0, e.jsx)(eo, { schema: t }),
              (n || a || d) && (0, e.jsx)(f.XQ, {}),
            ],
          });
        }
        function eo(i) {
          const { schema: t } = i,
            { callbacks: o, view: s } = (0, f.wU)(),
            [l, n, a] = (0, ae.uD)(),
            d = p.useCallback(() => {
              a(), s.focus();
            }, [a, s]),
            c = p.useCallback(
              (m, h) => {
                Te(s, t.nodes.previewyoutube, m, h), d();
              },
              [t, s, d],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              l && (0, e.jsx)(Ee, { hideModal: d, onSave: c }),
              (0, e.jsx)(f.ff, {
                tooltip: (0, r.we)("#EventEditor_InsertYouTube"),
                onClick: n,
                toggled: l,
                children: (0, e.jsx)("img", { src: Ie.A }),
              }),
            ],
          });
        }
        function to(i) {
          const { schema: t } = i,
            { callbacks: o, view: s } = (0, f.wU)(),
            l = (0, oe.LU)(),
            [n, a, d] = (0, ae.uD)(),
            c = p.useCallback(() => {
              d(), s.focus();
            }, [d, s]),
            m = p.useCallback(
              (h, x) => {
                l.GetEventModel().jsondata.meet_steam_groups ||
                  (l.GetEventModel().jsondata.meet_steam_groups = []),
                  l
                    .GetEventModel()
                    .jsondata.meet_steam_groups.push({ ...h, sessions: [x] }),
                  mt(s, t.nodes.meetsteamsessiongroup, h.group_id),
                  c();
              },
              [t, s, c, l],
            );
          if (l?.GetClanAccountID() == (0, pe.H)())
            return (0, e.jsxs)(e.Fragment, {
              children: [
                n && (0, e.jsx)(rt, { hideModal: c, fnUpdateSession: m }),
                (0, e.jsx)(f.ff, {
                  tooltip: (0, r.we)("#MeetSteam_add_group_ttip"),
                  onClick: a,
                  toggled: n,
                  children: (0, e.jsx)("img", { src: Ie.A }),
                }),
              ],
            });
        }
        function oo(i) {
          const { schema: t } = i,
            { callbacks: o, view: s } = (0, f.wU)(),
            l = (0, oe.LU)(),
            [n, a, d] = (0, ae.uD)(),
            c = p.useCallback(() => {
              d(), s.focus();
            }, [d, s]),
            m = p.useCallback(
              (h) => {
                l.GetEventModel().jsondata.meet_steam_schedules ||
                  (l.GetEventModel().jsondata.meet_steam_schedules = []),
                  l
                    .GetEventModel()
                    .jsondata.meet_steam_schedules.push({ ...h }),
                  bt(s, t.nodes.meetsteamscheduleview, h.schedule_id),
                  c();
              },
              [t, s, c, l],
            );
          if (l?.GetClanAccountID() == (0, pe.H)())
            return (0, e.jsxs)(e.Fragment, {
              children: [
                n &&
                  (0, e.jsx)(He, {
                    hideModal: c,
                    inputScheduleModel: null,
                    fnUpdateSession: m,
                  }),
                (0, e.jsx)(f.ff, {
                  tooltip: (0, r.we)("#MeetSteam_add_schedule_ttip"),
                  onClick: a,
                  toggled: n,
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
        function ro(i) {
          const { schema: t, emoticonStore: o } = i,
            s = t.nodes.emoticon;
          (0, Se.k3)(o),
            (0, R.c$)(
              p.useMemo(
                () => (0, N.sM)({ rules: [uo(/:([a-zA-Z0-9_]+):$/, s, o)] }),
                [s, o],
              ),
            );
          const l = p.useMemo(
            () => [
              {
                type: s,
                component: co,
                readProps: (n) => ({
                  emoticonStore: o,
                  emoticon: n.textContent,
                }),
              },
            ],
            [s, o],
          );
          return (0, e.jsx)(me.U, { specs: l });
        }
        function co(i) {
          const { selected: t, emoticonStore: o, emoticon: s } = i;
          if (((0, Se.k3)(o), o.BHasEmoticon(s))) {
            const n = t
              ? { background: "#54a5d4", filter: "brightness(1.2)" }
              : void 0;
            return (0, e.jsx)("span", {
              style: n,
              children: (0, e.jsx)(ao.n, { emoticon: s }),
            });
          } else return `:${s}:`;
        }
        function uo(i, t, o) {
          return new N.fV(i, (s, l, n, a) => {
            const d = l[1];
            if (!o.BHasEmoticon(d)) return null;
            const c = t.create(null, s.schema.text(d));
            return s.tr.replaceWith(n, a, c);
          });
        }
        var tt = u(25598),
          mo = u(78844),
          po = u(65217),
          ho = u(25792);
        const fo = (0, so.PA)(function (t) {
          const { editModel: o } = t,
            s = o.GetEventModel().loadedAllLanguages,
            l = o.GetCurEditLanguage();
          return s
            ? (0, e.jsx)(ho.tH, {
                children: (0, e.jsx)(xo, { ...t, eCurrentEditLanguage: l }),
              })
            : null;
        });
        function vo(i, t, o, s) {
          let l = t.GetDescription(o);
          return (
            (l = l?.replace(
              Se.pN.GetUnvalidatedEmoticonReplaceRegex(),
              "[emoticon]$1[/emoticon]",
            )),
            new V.n(i, l, (n) => t.SetDescription(o, n), {
              parser: {
                fnProcessText: (n) =>
                  (0, po.F)(i.pm_schema, n, i.pm_schema.marks.link, s),
              },
            })
          );
        }
        const xo = p.memo(function (t) {
          const {
              editModel: o,
              refOnInsertImage: s,
              limitBBCode: l,
              eCurrentEditLanguage: n,
            } = t,
            [a, d] = p.useState(),
            c = p.useMemo(() => (0, ie.u)(l), [l]),
            [m, h] = p.useState(),
            x = Mo(o.GetClanSteamID(), c);
          p.useEffect(() => {
            h(vo(c, o, n, x));
          }, [c, x, o, n]);
          const v = p.useRef(void 0);
          (0, ve.i)(m, { msAutosaveTimeout: 1e3 });
          const { nodes: M, marks: g } = c.pm_schema;
          return (
            (0, w.ww)(s, M.image, M.video, g.link, a),
            (0, e.jsx)(w.Su, {
              clanSteamID: o.GetClanSteamID(),
              imageNode: M.image,
              videoNode: M.video,
              children: (0, e.jsxs)("div", {
                className: je().EventDescriptionContainer,
                children: [
                  (0, e.jsx)(Xt, {
                    view: a,
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
        function Mo(i, t) {
          const { nodes: o } = t.pm_schema,
            s = (0, w.w_)(i, o.image, o.video),
            l = (0, tt.s)(o.dynamiclink);
          return p.useCallback(
            (...n) => {
              let a = "default";
              return (
                s && (a = s(...n)), a == "default" && l && (a = l(...n)), a
              );
            },
            [s, l],
          );
        }
        const go = p.memo(function (t) {
          const { eventSchemaConfig: o, editModel: s, onURLPasted: l } = t,
            n = (0, Ye.LJ)(),
            { marks: a, nodes: d } = o.pm_schema;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(k.W, {
                linkMarkType: a.link,
                onURLPasted: l,
                schema: o.pm_schema,
              }),
              d.image && (0, e.jsx)(lo.pw, { nodeType: d.image }),
              (0, e.jsx)(jo, {
                schemaConfig: o,
                editModel: s,
                clanSteamID: s.GetClanSteamID(),
              }),
              (0, e.jsx)(ro, { emoticonStore: n, schema: o.pm_schema }),
            ],
          });
        });
        function jo(i) {
          const { schemaConfig: t, editModel: o, clanSteamID: s } = i,
            l = t.pm_schema,
            n = p.useMemo(() => se(l), [l]);
          (0, R.c$)(n);
          const a = l.nodes,
            d = a.image,
            c = a.video,
            m = a.carousel,
            h = p.useCallback(
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
            x = p.useMemo(
              () => [
                a.previewyoutube && {
                  type: a.previewyoutube,
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
                  readProps: (v) => h("image", v),
                },
                c && {
                  type: c,
                  component: w.Yp,
                  readProps: (v) => h("video", v),
                },
                a.meetsteamsessiongroup && {
                  type: a.meetsteamsessiongroup,
                  component: pt,
                  readProps: (v) => ({ group_id: v.attrs.group_id }),
                },
                a.meetsteamscheduleview && {
                  type: a.meetsteamscheduleview,
                  component: St,
                  readProps: (v) => ({ schedule_id: v.attrs.schedule_id }),
                },
                a.userpolls && {
                  type: a.userpolls,
                  component: Yt,
                  readProps: (v) => ({ poll_id: v.attrs.poll_id }),
                },
                a.dynamiclink && {
                  type: a.dynamiclink,
                  component: tt.b,
                  readProps: (v) => ({
                    editModel: o,
                    href: v.attrs.href,
                    schema: t.pm_schema,
                  }),
                },
                a.carousel && {
                  type: a.carousel,
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
              [a, d, c, o, h, t],
            );
          return (0, e.jsx)(me.U, { specs: x });
        }
      },
      99931: (Z, ue, u) => {
        "use strict";
        u.d(ue, { W: () => ee });
        var e = u(7850),
          V = u(57053),
          ve = u(52893),
          R = u(90626),
          me = u(18210),
          k = u(29950),
          w = u(12293),
          ie = u(19565),
          N = u(37341),
          se = u.n(N),
          p = u(65217);
        const ee = R.memo(function (K) {
          const {
              linkMarkType: U,
              onURLPasted: r,
              schema: S,
              onClickURL: H = j,
            } = K,
            Y = R.useRef(H);
          Y.current = H;
          const [te, Te] = R.useState(),
            [_e, Ee] = R.useState(),
            [ae, G] = R.useState(),
            [y, I] = (0, w.E)(S),
            pe = R.useMemo(
              () =>
                new ve.k_({
                  props: {
                    handleClickOn(E, D, C, f, O, P) {
                      if (P && (O.ctrlKey || O.button == 1)) {
                        const B = C.resolve(D - f)
                            .marks()
                            .find((q) => q.type == U),
                          z = B && (0, k.J)(B.attrs.href);
                        if (z)
                          return Y.current(z, O.view), O.preventDefault(), !0;
                      }
                      return !1;
                    },
                    handleKeyDown(E, D) {
                      return D.key == "k" &&
                        (D.metaKey || D.ctrlKey) &&
                        !D.shiftKey &&
                        !D.altKey
                        ? (y(E), !0)
                        : !1;
                    },
                    clipboardTextParser(E, D, C, f) {
                      const O = (0, p.F)(S, E, U, r);
                      return O && new V.Ji(V.FK.from(O), D.start(), D.end());
                    },
                    handlePaste(E, D, C) {
                      let f = [];
                      if (
                        (C.content.descendants((B, z) => {
                          if (B.isText) {
                            const q = (0, p.F)(S, B.text, U, r);
                            q && f.push({ node: B, pos: z, rgNodes: q });
                          }
                        }),
                        !f.length)
                      )
                        return !1;
                      let O = E.state.tr;
                      O.selection.empty || O.deleteSelection();
                      let P = O.selection.from,
                        A = 0;
                      for (const B of f) {
                        const { node: z, pos: q, rgNodes: W } = B,
                          he = C.content.cut(A, q).append(V.FK.from(W));
                        O.insert(P, he),
                          (P += he.size + 2),
                          (A = q + z.nodeSize);
                      }
                      return (
                        O.insert(P, C.content.cut(A)),
                        O.scrollIntoView(),
                        E.dispatch(O),
                        !0
                      );
                    },
                    handleDOMEvents: {
                      mouseover: (E, D) => {
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
                            Te(f.left + f.width / 2), Ee(f.bottom + 2), G(C);
                            return;
                          }
                        G(void 0);
                      },
                      mouseleave: (E, D) => (G(void 0), !1),
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
              (re = (0, e.jsx)(L, {
                top: _e,
                left: te,
                href: ae.getAttribute("href"),
              })),
            (0, e.jsxs)(e.Fragment, { children: [re, I] })
          );
        });
        function L(J) {
          const { top: K, left: U, href: r } = J,
            [S, H] = R.useState(0),
            Y = R.useRef(null);
          R.useLayoutEffect(() => {
            H(Y.current.getBoundingClientRect().width);
          }, [K, U, r]);
          const te = { top: `${K}px`, left: `${Math.max(U - S / 2, 12)}px` };
          return (0, e.jsxs)("div", {
            className: N.Hover,
            style: te,
            ref: Y,
            children: [
              (0, e.jsx)("div", { className: N.Link, children: r }),
              (0, e.jsx)("div", {
                className: N.LinkHelp,
                children: (0, me.we)("#UserGameNotes_ClickToOpenLink"),
              }),
            ],
          });
        }
        function j(J, K) {
          K.open(J);
        }
      },
      35184: (Z, ue, u) => {
        "use strict";
        u.d(ue, { R: () => R });
        var e = u(7850),
          V = u(90626),
          ve = u(72739);
        function R(k) {
          const {
              id: w,
              role: ie,
              visible: N = !0,
              className: se,
              keepMounted: p = !1,
              expandDirection: ee = "height",
              msAnimationDuration: L = 250,
              children: j,
            } = k,
            { style: J, active: K, refDiv: U } = me(N, ee, L);
          return !N && !K && !p
            ? null
            : (0, e.jsx)("div", {
                id: w,
                role: ie,
                className: se,
                ref: U,
                style: J,
                inert: !N,
                children: j,
              });
        }
        function me(k, w = "height", ie = 250) {
          const N = V.useRef(null),
            se = V.useRef(!0),
            [p, ee] = V.useState("idle"),
            [L, j] = V.useState(k ? {} : { [w]: "0px", overflow: "hidden" }),
            [J, K] = V.useState(k);
          return (
            V.useLayoutEffect(() => {
              se.current || ee("start"), k && K(k);
            }, [k]),
            V.useLayoutEffect(
              () => (
                (se.current = !1),
                () => {
                  se.current = !0;
                }
              ),
              [],
            ),
            V.useLayoutEffect(() => {
              const r = N.current,
                S = w == "height" ? "scrollHeight" : "scrollWidth",
                H = () => {
                  ve.unstable_batchedUpdates(() => {
                    j(k ? {} : { [w]: "0px", overflow: "hidden" }),
                      ee("idle"),
                      K(k);
                  });
                };
              if (p == "start") {
                const Y = r[S];
                Y == 0
                  ? H()
                  : (j((te) => ({
                      [w]: k ? "0px" : `${Y}px`,
                      ...te,
                      overflow: "hidden",
                    })),
                    ee("active"));
              } else if (p == "active") {
                r.scrollTop;
                const Y = r[S];
                return (
                  j({ overflow: "hidden", [w]: k ? `${Y}px` : "0px" }),
                  r.addEventListener("transitionend", H),
                  () => {
                    r.removeEventListener("transitionend", H);
                  }
                );
              }
            }, [p, k]),
            {
              style: { ...L, transition: `${w} ${ie}ms` },
              active: J,
              refDiv: N,
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

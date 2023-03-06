/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [1510],
  {
    80655: (e) => {
      e.exports = {
        Tooltip: "teamdetails_Tooltip_31hC1",
        CarouselFade: "teamdetails_CarouselFade_2UcOF",
        StandardButton: "teamdetails_StandardButton_1OiL0",
        ButtonText: "teamdetails_ButtonText_3gcUn",
        SteamLogo: "teamdetails_SteamLogo_2Z206",
        ToolTip: "teamdetails_ToolTip_2w_iN",
        TeamDetails: "teamdetails_TeamDetails_w3idB",
        ContentFrame: "teamdetails_ContentFrame_hjW9K",
        MatchesGrid: "teamdetails_MatchesGrid_3HPIK",
        WorkshopStatusGrid: "teamdetails_WorkshopStatusGrid_11m5M",
        AuditActionsGrid: "teamdetails_AuditActionsGrid_1ohOp",
        LogoAndColorsGrid: "teamdetails_LogoAndColorsGrid_ndSeT",
        UGCLogosGrid: "teamdetails_UGCLogosGrid_1bbYn",
        MiscInfoGrid: "teamdetails_MiscInfoGrid_1igOx",
        MembersGrid: "teamdetails_MembersGrid_3tGp0",
        ManagerGrid: "teamdetails_ManagerGrid_3GLmj",
        TeamDetailsGrid: "teamdetails_TeamDetailsGrid_3V8yT",
        EditInfoGrid: "teamdetails_EditInfoGrid_154vY",
        Header: "teamdetails_Header_3gRz5",
        SubmitButton: "teamdetails_SubmitButton_1RnAK",
        URLLogoContainer: "teamdetails_URLLogoContainer_2Lgtu",
        DPCLogoContainer: "teamdetails_DPCLogoContainer_3uIWu",
        SeasonMatchHeader: "teamdetails_SeasonMatchHeader_SV4lD",
        ColorBox: "teamdetails_ColorBox_1Kvg9",
        Link: "teamdetails_Link_3Gjo1",
        MediumTextField: "teamdetails_MediumTextField_2IXLM",
        SmallTextField: "teamdetails_SmallTextField_1y2t9",
        SmoothLine: "teamdetails_SmoothLine_3YaqJ",
      };
    },
    19944: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => D });
      var n = a(33940),
        l = a(52868),
        m = a.n(l),
        i = a(75427),
        r = a(65092),
        o = a(89526),
        c = a(53672),
        s = a(44834),
        d = a(9658),
        u = a(92375),
        _ = a(80448),
        A = a(25559),
        g = a(80655),
        p = a.n(g);
      const E = "public",
        T = 5e3,
        y = (e) =>
          o.createElement(
            "a",
            {
              href: `${i.Y.BASE_URL}persona/showplayer/${e}?u=${E}&appid=${i.Y.DOTA_APP_ID}`,
            },
            e
          );
      var v;
      !(function (e) {
        (e[(e.kTRAA_RegisterTeam = 0)] = "kTRAA_RegisterTeam"),
          (e[(e.kTRAA_InvitePlayer = 1)] = "kTRAA_InvitePlayer"),
          (e[(e.kTRAA_RemovePlayer = 2)] = "kTRAA_RemovePlayer"),
          (e[(e.kTRAA_CancelInvite = 3)] = "kTRAA_CancelInvite"),
          (e[(e.kTRAA_RegisterPlayer = 4)] = "kTRAA_RegisterPlayer"),
          (e[(e.kTRAA_AcceptInvite = 5)] = "kTRAA_AcceptInvite"),
          (e[(e.kTRAA_RejectInvite = 6)] = "kTRAA_RejectInvite"),
          (e[(e.kTRAA_UnregisterTeam = 7)] = "kTRAA_UnregisterTeam"),
          (e[(e.kTRAA_TransferTeam = 8)] = "kTRAA_TransferTeam"),
          (e[(e.kTRAA_TransferTeamAdmin = 9)] = "kTRAA_TransferTeamAdmin"),
          (e[(e.kTRAA_InviteCoach = 10)] = "kTRAA_InviteCoach"),
          (e[(e.kTRAA_RemoveCoach = 11)] = "kTRAA_RemoveCoach"),
          (e[(e.kTRAA_CancelInviteCoach = 12)] = "kTRAA_CancelInviteCoach"),
          (e[(e.kTRAA_AcceptCoachInvite = 13)] = "kTRAA_AcceptCoachInvite"),
          (e[(e.kTRAA_RejectCoachInvite = 14)] = "kTRAA_RejectCoachInvite"),
          (e[(e.kTRAA_ValveUpdateName = 15)] = "kTRAA_ValveUpdateName"),
          (e[(e.kTRAA_ValveUpdateTeamName = 16)] = "kTRAA_ValveUpdateTeamName"),
          (e[(e.kTRAA_Penalty20 = 20)] = "kTRAA_Penalty20");
      })(v || (v = {}));
      const k = {
          0: "kTRAA_RegisterTeam",
          1: "kTRAA_InvitePlayer",
          2: "kTRAA_RemovePlayer",
          3: "kTRAA_CancelInvite",
          4: "kTRAA_RegisterPlayer",
          5: "kTRAA_AcceptInvite",
          6: "kTRAA_RejectInvite",
          7: "kTRAA_UnregisterTeam",
          8: "kTRAA_TransferTeam",
          9: "kTRAA_TransferTeamAdmin",
          10: "kTRAA_InviteCoach",
          11: "kTRAA_RemoveCoach",
          12: "kTRAA_CancelInviteCoach",
          13: "kTRAA_AcceptCoachInvite",
          14: "kTRAA_RejectCoachInvite",
          15: "kTRAA_ValveUpdateName",
          16: "kTRAA_ValveUpdateTeamName",
          20: "kTRAA_Penalty20",
        },
        f = [
          {
            enum: v.kTRAA_RegisterTeam,
            formatFunction: () =>
              "Registered a team or re-registered an existing team.",
          },
          {
            enum: v.kTRAA_InvitePlayer,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                "Invited a new/legacy player ",
                o.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: v.kTRAA_RemovePlayer,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                "Removed a legacy player ",
                o.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: v.kTRAA_CancelInvite,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement("b", null, `${e}`),
                " cancelled an issued invite."
              ),
          },
          {
            enum: v.kTRAA_RegisterPlayer,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement("b", null, `${e}`),
                " registered a new player."
              ),
          },
          {
            enum: v.kTRAA_AcceptInvite,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement("b", null, `${e}`),
                " accepted an invite."
              ),
          },
          {
            enum: v.kTRAA_RejectInvite,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement("b", null, `${e}`),
                " rejected an invite."
              ),
          },
          {
            enum: v.kTRAA_UnregisterTeam,
            formatFunction: () => "Manager removed the team registration.",
          },
          {
            enum: v.kTRAA_TransferTeam,
            formatFunction: () =>
              "Manager transferred the team wholesale to new management.",
          },
          {
            enum: v.kTRAA_TransferTeamAdmin,
            formatFunction: (e = "", t = "") =>
              o.createElement(
                o.Fragment,
                null,
                "Manager transferred management to a new manager ",
                o.createElement("b", null, `${t}`, ".")
              ),
          },
          {
            enum: v.kTRAA_InviteCoach,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                "Invited a coach ",
                o.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: v.kTRAA_RemoveCoach,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                "Removed a coach ",
                o.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: v.kTRAA_CancelInviteCoach,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement("b", null, `${e}`),
                " cancelled an issued coach invite."
              ),
          },
          {
            enum: v.kTRAA_AcceptCoachInvite,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement("b", null, `${e}`),
                " (coach) accepted an invite."
              ),
          },
          {
            enum: v.kTRAA_RejectCoachInvite,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement("b", null, `${e}`),
                " (coach) rejected an invite."
              ),
          },
          {
            enum: v.kTRAA_ValveUpdateName,
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                "Valve fixed a name for player ",
                o.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: v.kTRAA_ValveUpdateTeamName,
            formatFunction: () => "Valve updated the team name.",
          },
          {
            enum: v.kTRAA_Penalty20,
            formatFunction: () => "20% point penalty.",
          },
        ],
        R = [
          {
            key: "pro",
            displayName: "Pro?",
            formatFunction: (e) => (e ? "YES" : "NO"),
          },
          { key: "tag", displayName: "Tag" },
          { key: "abbreviation", displayName: "Abbreviation" },
          {
            key: "time_created",
            displayName: "Time Created",
            formatFunction: (e) =>
              e ? new Date(1e3 * e).toLocaleString() : "",
          },
          {
            key: "pickup_team",
            displayName: "Pickup Team?",
            formatFunction: (e) => (e ? "YES" : "NO"),
          },
          {
            key: "url",
            displayName: "URL",
            formatFunction: (e) =>
              e
                ? o.createElement(
                    o.Fragment,
                    null,
                    o.createElement("a", { href: e }, e)
                  )
                : "",
          },
          {
            key: "country_code",
            displayName: "Country Code",
            formatFunction: (e = "") => e.toUpperCase(),
          },
        ],
        N = [
          {
            key: "account_id",
            displayName: "Account ID",
            formatFunction: (e) => y(e),
          },
          { key: "name", displayName: "Name" },
          { key: "persona_name", displayName: "Persona Name" },
          {
            key: "is_pro",
            displayName: "Pro",
            formatFunction: (e) => (e ? "YES" : "NO"),
          },
          {
            key: "admin",
            displayName: "Admin",
            formatFunction: (e) => (e ? "YES" : "NO"),
          },
          {
            key: "kick_link",
            displayName: "KICK",
            formatFunction: (e, t) =>
              o.createElement(
                "div",
                {
                  className: p().Link,
                  onClick: () =>
                    (0, n.mG)(void 0, void 0, void 0, function* () {
                      yield m().get(`${e}`), setTimeout(() => t(), 1e3);
                    }),
                },
                "KICK"
              ),
          },
          {
            key: "make_admin_link",
            displayName: "MAKE ADMIN",
            formatFunction: (e, t) =>
              !!e &&
              o.createElement(
                "div",
                {
                  className: p().Link,
                  onClick: () =>
                    (0, n.mG)(void 0, void 0, void 0, function* () {
                      yield m().get(`${e}`), setTimeout(() => t(), 1e3);
                    }),
                },
                "MAKE ADMIN"
              ),
          },
        ],
        h = [
          {
            key: "manager_account_id",
            displayName: "Manager Account ID",
            formatFunction: (e) => y(e),
          },
          { key: "manager_email", displayName: "Manager Email" },
        ],
        F = [
          {
            key: "color_primary",
            displayName: "Color (Primary)",
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                e &&
                  o.createElement(
                    "div",
                    null,
                    o.createElement("span", {
                      className: p().ColorBox,
                      style: { backgroundColor: e },
                    }),
                    " ",
                    e
                  )
              ),
          },
          {
            key: "color_secondary",
            displayName: "Color (Secondary)",
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                e &&
                  o.createElement(
                    "div",
                    null,
                    o.createElement("span", {
                      className: p().ColorBox,
                      style: { backgroundColor: e },
                    }),
                    " ",
                    e
                  )
              ),
          },
          {
            key: "url_logo",
            displayName: "DPC Logo",
            formatFunction: (e = "", t = 0) =>
              o.createElement(
                o.Fragment,
                null,
                e &&
                  t &&
                  o.createElement(
                    "div",
                    { className: p().DPCLogoContainer },
                    o.createElement("img", {
                      onError: ({ currentTarget: e }) => {
                        (e.onerror = null),
                          (e.src = `${i.Y.IMG_URL}teams_override/team_unknown_web.png`);
                      },
                      src: `${i.Y.CDN_URL}apps/dota2/teamlogos/${t}.png`,
                    })
                  )
              ),
          },
        ],
        I = [
          {
            key: "ugc_logo_url",
            displayName: "Logo",
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  "div",
                  { className: p().URLLogoContainer },
                  e && o.createElement("img", { src: e })
                )
              ),
          },
          {
            key: "ugc_base_logo_url",
            displayName: "Base Logo",
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  "div",
                  { className: p().URLLogoContainer },
                  e && o.createElement("img", { src: e })
                )
              ),
          },
          {
            key: "ugc_banner_logo_url",
            displayName: "Banner Logo",
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  "div",
                  { className: p().URLLogoContainer },
                  e && o.createElement("img", { src: e })
                )
              ),
          },
          {
            key: "ugc_sponsor_logo_url",
            displayName: "Sponsor Logo",
            formatFunction: (e = "") =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  "div",
                  { className: p().URLLogoContainer },
                  e && o.createElement("img", { src: e })
                )
              ),
          },
        ],
        C = [
          {
            key: "account_id",
            displayName: "Account ID",
            formatFunction: (e) => y(e),
          },
          {
            key: "timestamp",
            displayName: "Timestamp",
            formatFunction: (e) =>
              e ? new Date(1e3 * e).toLocaleString() : "",
          },
          {
            key: "action",
            displayName: "Action Enum",
            formatFunction: (e) => `${k[e]} (${e})`,
          },
          {
            key: "action",
            displayName: "Audit Action",
            formatFunction: (e, t = "", a = "") =>
              f.find((t) => t.enum === e).formatFunction.call(null, t, a),
          },
        ],
        S = [
          { key: "workshop_account_id", displayName: "Workshop Account ID" },
          {
            key: "comment",
            displayName: "Comment",
            formatFunction: (e) => (e ? `"${e}"` : ""),
          },
          {
            key: "comment_timestamp",
            displayName: "Last Comment",
            formatFunction: (e) =>
              e ? new Date(1e3 * e).toLocaleString() : "",
          },
          { key: "spray_count", displayName: "Sprays" },
          { key: "wallpaper_count", displayName: "Wallpapers" },
          { key: "emoticon_count", displayName: "Emoticons" },
          { key: "voiceline_count", displayName: "Voicelines" },
          {
            key: "timestamp",
            displayName: "Last Changed",
            formatFunction: (e) =>
              e ? new Date(1e3 * e).toLocaleString() : "",
          },
        ],
        L = [
          { key: "series_id", displayName: "Series ID" },
          {
            key: "scheduled_time",
            displayName: "Series Date & Time",
            formatFunction: (e) =>
              e ? new Date(1e3 * e).toLocaleString() : "",
          },
          {
            key: "outcome",
            displayName: "Outcome",
            formatFunction: (e) =>
              o.createElement(
                "div",
                {
                  style: {
                    color:
                      "" +
                      ("Win" === e ? "green" : "Loss" === e ? "red" : "yellow"),
                  },
                },
                e
              ),
          },
          { key: "score", displayName: "Score" },
          {
            key: "opponent_team_id",
            displayName: "Opponent",
            formatFunction: (e, t) => {
              return o.createElement(
                o.Fragment,
                null,
                `${t} ( `,
                ((a = e),
                o.createElement(
                  "a",
                  { href: `${i.Y.BASE_URL}${_._.teamdetails(a).substr(1)}` },
                  a
                )),
                " )"
              );
              var a;
            },
          },
          {
            key: "matches",
            displayName: "Match IDs",
            formatFunction: (e) => {
              const t = [];
              return (
                t.push(
                  e.map((e) => {
                    return [
                      ((t = e.match_id),
                      o.createElement(
                        "a",
                        {
                          key: t,
                          href: `${i.Y.BASE_URL}matches/match/${t}?u=${E}&appid=${i.Y.DOTA_APP_ID}`,
                        },
                        t
                      )),
                      o.createElement(
                        "span",
                        { key: `${e.match_id}-tab` },
                        " "
                      ),
                    ];
                    var t;
                  })
                ),
                t
              );
            },
          },
        ],
        b = (e) => {
          const t = (0, r.UO)().id,
            [a, l] = (0, o.useState)([]),
            [_, g] = (0, o.useState)(!1),
            [y, k] = (0, o.useState)(!1),
            [f, b] = (0, o.useState)({}),
            [D, $] = (0, o.useState)(!1),
            [O, U] = (0, o.useState)(!1),
            [G, P] = (0, o.useState)({}),
            [w, Y] = (0, o.useState)([]),
            [M, x] = (0, o.useState)(!0),
            [B, j] = (0, o.useState)([]);
          function H() {
            var e, t;
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (
                !i.Y.DOTA_APP_ID ||
                !i.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD
              )
                return;
              const a = {
                  appid: i.Y.DOTA_APP_ID,
                  registration_period:
                    i.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                },
                n = yield m().get(
                  i.Y.BASE_URL + "webapi/IDOTA2Teams/GetRegisteredTeams/v001",
                  { params: a }
                ),
                r =
                  (null ===
                    (t =
                      null === (e = null == n ? void 0 : n.data) || void 0 === e
                        ? void 0
                        : e.result) || void 0 === t
                    ? void 0
                    : t.teams) || [];
              r.length && l(r), g(!0);
            });
          }
          function V() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (
                !i.Y.DOTA_APP_ID ||
                !i.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD ||
                !t
              )
                return;
              const e = { appid: i.Y.DOTA_APP_ID, u: E, team_id: t },
                a = yield m().get(
                  i.Y.BASE_URL + "webapi/IDOTA2Teams/GetSingleTeamInfo/v001",
                  { params: e }
                ),
                l = null == a ? void 0 : a.data,
                r = l.members || [];
              try {
                const e = yield m().get(
                  i.Y.BASE_URL + "teams/getugcfilelinks/",
                  { params: { team_id: t } }
                );
                e.data && Object.assign(l, e.data),
                  yield Promise.all(
                    r.map((e, t) =>
                      (0, n.mG)(this, void 0, void 0, function* () {
                        var a, n;
                        const l = yield m().get(
                          i.Y.BASE_URL +
                            "webapi/IDOTA2Fantasy/GetPlayerInfo/v0001",
                          { params: { account_id: e.account_id } }
                        );
                        (r[t].is_pro = !!(null ===
                          (a = null == l ? void 0 : l.data) || void 0 === a
                          ? void 0
                          : a.is_pro)),
                          (r[t].name =
                            (null === (n = null == l ? void 0 : l.data) ||
                            void 0 === n
                              ? void 0
                              : n.name) || "");
                        const o = yield m().get(
                          i.Y.BASE_URL + "teams/getpersonaname/",
                          { params: { account_id: e.account_id } }
                        );
                        r[t].persona_name = (null == o ? void 0 : o.data) || "";
                      })
                    )
                  );
                const a = (e, t) =>
                  e.is_pro && !t.is_pro
                    ? -1
                    : !e.is_pro && t.is_pro
                    ? 1
                    : e.admin && !t.admin
                    ? -1
                    : (!e.admin && t.admin) ||
                      (null == e ? void 0 : e.pro_name.toLowerCase()) >
                        (null == t ? void 0 : t.pro_name.toLowerCase())
                    ? 1
                    : (null == e ? void 0 : e.pro_name.toLowerCase()) <
                      (null == t ? void 0 : t.pro_name.toLowerCase())
                    ? -1
                    : 0;
                r.sort(a);
              } catch (e) {
                console.log("Error fetching individual player info.");
              }
              a && a.data && b(l), $(!0);
            });
          }
          (0, o.useEffect)(() => {
            try {
              !(function () {
                var e;
                (0, n.mG)(this, void 0, void 0, function* () {
                  if (!i.Y.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON) return;
                  const a = { season: i.Y.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON },
                    n = yield m().get(
                      i.Y.BASE_URL +
                        "webapi/IDOTA2Teams/GetFanContentStatus/v0001",
                      { params: a }
                    ),
                    l =
                      (null === (e = null == n ? void 0 : n.data) ||
                      void 0 === e
                        ? void 0
                        : e.team_status_list) || [];
                  if (l.length && t) {
                    const e = l.find((e) => e.team_id.toString() == t);
                    e && P(e);
                  }
                });
              })();
            } catch (e) {
              console.log("Could not fetch fan content status.");
            }
          }, [t]),
            (0, o.useEffect)(() => {
              try {
                H();
              } catch (e) {
                console.log("Could not fetch registered teams."), k(!0);
              }
            }, []),
            (0, o.useEffect)(() => {
              try {
                V();
              } catch (e) {
                console.log("Could not fetch single team info."), U(!0);
              }
            }, [t]),
            (0, o.useEffect)(() => {
              try {
                !(function () {
                  (0, n.mG)(this, void 0, void 0, function* () {
                    if (
                      !i.Y.DOTA_APP_ID ||
                      !i.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD ||
                      !t
                    )
                      return;
                    const e = {
                        team_id: t,
                        registration_period:
                          i.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                      },
                      a = yield m().get(
                        i.Y.BASE_URL +
                          "webapi/IDOTA2Teams/GetTeamAuditInformation/v001",
                        { params: e }
                      ),
                      l = null == a ? void 0 : a.data,
                      r = (null == l ? void 0 : l.actions) || [];
                    yield Promise.all(
                      r.map((e) =>
                        (0, n.mG)(this, void 0, void 0, function* () {
                          if (
                            e.action === v.kTRAA_TransferTeamAdmin &&
                            e.account_id
                          ) {
                            const t = yield m().get(
                              i.Y.BASE_URL + "teams/getpersonaname/",
                              { params: { account_id: e.account_id } }
                            );
                            e.target_manager_name =
                              (null == t ? void 0 : t.data) || "";
                          }
                        })
                      )
                    ),
                      a && a.data && l.actions && j(l.actions);
                  });
                })();
              } catch (e) {
                console.log("Could not fetch single team info."), U(!0);
              }
            }, [t]),
            (0, o.useEffect)(() => {
              let e;
              try {
                e = JSON.parse(i.Y.DPC_DATA).events;
              } catch (e) {}
              if (!e) return;
              e = e.filter(
                (e) =>
                  e.registration_period ===
                  i.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD
              );
              let a = [];
              for (let t of e) {
                const e = t.leagues.map((e) => e.league_id);
                a.push(...e);
              }
              a.sort(),
                (a = a.filter((e, t, a) => a.indexOf(e) == t)),
                a.length > 50 && (a = a.slice(a.length - 50));
              try {
                !(function () {
                  (0, n.mG)(this, void 0, void 0, function* () {
                    if (!a.length) return;
                    const e = { league_ids: a.join(",") },
                      n = yield m().get(
                        i.Y.BASE_URL +
                          "webapi/IDOTA2League/GetLeaguesData/v001",
                        { params: e }
                      ),
                      l = null == n ? void 0 : n.data,
                      r = null == l ? void 0 : l.leagues,
                      o = [];
                    for (let e of r)
                      for (let a of e.node_groups)
                        for (let n of a.node_groups)
                          for (let a of n.nodes)
                            a.team_id_1 &&
                              a.team_id_2 &&
                              (a.team_id_1 == t || a.team_id_2 == t) &&
                              ((a.league_name =
                                e.info.name + ` (${e.info.league_id})`),
                              a.team_id_1 == t
                                ? ((a.opponent_team_id = a.team_id_2),
                                  a.team_1_wins > a.team_2_wins
                                    ? (a.outcome = "Win")
                                    : a.team_1_wins === a.team_2_wins
                                    ? (a.outcome = "Tie")
                                    : (a.outcome = "Loss"),
                                  (a.score = `${a.team_1_wins} - ${a.team_2_wins}`))
                                : ((a.opponent_team_id = a.team_id_1),
                                  a.team_2_wins > a.team_1_wins
                                    ? (a.outcome = "Win")
                                    : a.team_2_wins === a.team_1_wins
                                    ? (a.outcome = "Tie")
                                    : (a.outcome = "Loss"),
                                  (a.score = `${a.team_2_wins} - ${a.team_1_wins}`)),
                              0 === a.team_1_wins &&
                                0 === a.team_2_wins &&
                                a.scheduled_time &&
                                new Date().getTime() < 1e3 * a.scheduled_time &&
                                (a.outcome = "Upcoming"),
                              o.push(a));
                    var c;
                    o.sort((e, t) =>
                      e.scheduled_time > t.scheduled_time
                        ? -1
                        : e.scheduled_time < t.scheduled_time
                        ? 1
                        : 0
                    ),
                      o.length &&
                        Y(
                          ((c = "league_name"),
                          o.reduce(
                            (e, t) =>
                              Object.assign(Object.assign({}, e), {
                                [t[c]]: [...(e[t[c]] || []), t],
                              }),
                            {}
                          ))
                        );
                  });
                })();
              } catch (e) {
                console.log("Could not fetch leagues data.");
              }
            }, [t]);
          const W = a.find((e) => e.team_id == t) || {};
          let J;
          if (
            ((_ && D) || (J = o.createElement("div", null, "Loading...")),
            _ &&
              (0 == a.length || y) &&
              (J = o.createElement(
                "div",
                null,
                "Error loading registered teams..."
              )),
            D &&
              (0 == Object.keys(f).length || O) &&
              (J = o.createElement(
                "div",
                null,
                `Error loading single team info for teamId ${t} `
              )),
            J)
          )
            return o.createElement(
              "div",
              { className: p().TeamDetails },
              o.createElement(d.j, { bOverlapping: !1 }),
              o.createElement(
                c.q,
                null,
                o.createElement("title", null, "Dota 2 - Team Details")
              ),
              o.createElement(A.Z, null),
              o.createElement("div", { className: p().ContentFrame }, J),
              o.createElement(u.U, null)
            );
          const K = f.members || [];
          K.forEach((e) => {
            (e.kick_link = `${i.Y.BASE_URL}webapi/IDOTA2Teams/RemoveTeamMember/v0001?u=${E}&appid=${i.Y.DOTA_APP_ID}&team_id=${t}&account_id=${e.account_id}`),
              (e.make_admin_link = e.admin
                ? ""
                : `${i.Y.BASE_URL}webapi/IDOTA2Teams/SetTeamAdmin/v0001?u=${E}&appid=${i.Y.DOTA_APP_ID}&team_id=${t}&account_id=${e.account_id}`);
          });
          const Z = (e) => {
            const t = a.find((t) => t.team_id == e);
            return t ? t.team_name : "";
          };
          return o.createElement(
            "div",
            { className: p().TeamDetails },
            o.createElement(d.j, { bOverlapping: !1 }),
            o.createElement(
              c.q,
              null,
              o.createElement("title", null, "Dota 2 - Team Details")
            ),
            o.createElement(A.Z, null),
            o.createElement(
              "div",
              { className: p().ContentFrame },
              o.createElement(
                "h1",
                { className: p().Header },
                `Team Details for ${null == f ? void 0 : f.name} (${f.team_id})`
              ),
              o.createElement(
                "div",
                { className: p().MiscInfoGrid },
                R.map((e) =>
                  o.createElement(
                    o.Fragment,
                    { key: `${e.key}-misc-row` },
                    o.createElement("div", null, e.displayName || e.key),
                    o.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(null, f[e.key])
                        : JSON.stringify(f[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  )
                ),
                !M &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "div",
                      { className: p().Link, onClick: () => x(!0) },
                      "Update Info / Add Member"
                    ),
                    o.createElement("div", null)
                  )
              ),
              M &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement("div", { className: p().SmoothLine }),
                  o.createElement(
                    ({ strTeamId: e }) => {
                      const [t, a] = (0, o.useState)(""),
                        [l, r] = (0, o.useState)(""),
                        [c, s] = (0, o.useState)(""),
                        [d, u] = (0, o.useState)(!1);
                      return o.createElement(
                        "form",
                        {
                          onSubmit: (a) =>
                            (0, n.mG)(void 0, void 0, void 0, function* () {
                              if ((a.preventDefault(), !t && !l && !c)) return;
                              u(!0);
                              const n = {
                                team_id: e,
                                team_name: t,
                                team_tag: l,
                                team_abbreviation: c,
                              };
                              yield m().get(
                                `${i.Y.BASE_URL}webapi/IDOTA2Teams/EditTeamName/v0001`,
                                { params: n }
                              );
                              V(), setTimeout(() => u(!1), T);
                            }),
                        },
                        o.createElement(
                          "h2",
                          { className: p().Header },
                          "Update Team Information"
                        ),
                        o.createElement(
                          "div",
                          { className: p().EditInfoGrid },
                          o.createElement("div", null, "Team Name"),
                          o.createElement("input", {
                            className: p().MediumTextField,
                            type: "text",
                            name: "teamName",
                            maxLength: 32,
                            onChange: (e) => a(e.target.value),
                          }),
                          o.createElement("div", null, "Tag"),
                          o.createElement("input", {
                            className: p().SmallTextField,
                            type: "text",
                            name: "teamTag",
                            maxLength: 8,
                            onChange: (e) => r(e.target.value),
                          }),
                          o.createElement("div", null, "Abbreviation"),
                          o.createElement("input", {
                            className: p().SmallTextField,
                            type: "text",
                            name: "teamAbbreviation",
                            maxLength: 4,
                            onChange: (e) => s(e.target.value),
                          }),
                          o.createElement(
                            "div",
                            null,
                            o.createElement(
                              "button",
                              { className: p().SubmitButton, disabled: d },
                              d ? "Updating..." : "Update"
                            )
                          )
                        )
                      );
                    },
                    { strTeamId: t }
                  ),
                  o.createElement("div", { className: p().SmoothLine }),
                  o.createElement(
                    ({ strTeamId: e }) => {
                      const [t, a] = (0, o.useState)(""),
                        [l, r] = (0, o.useState)(!1);
                      return o.createElement(
                        "form",
                        {
                          onSubmit: (a) =>
                            (0, n.mG)(void 0, void 0, void 0, function* () {
                              if ((a.preventDefault(), !t)) return;
                              r(!0);
                              const n = { team_id: e, account_id: t };
                              yield m().get(
                                `${i.Y.BASE_URL}webapi/IDOTA2Teams/AddTeamMember/v0001`,
                                { params: n }
                              );
                              V(), setTimeout(() => r(!1), T);
                            }),
                        },
                        o.createElement(
                          "h2",
                          { className: p().Header },
                          "Add Team Member"
                        ),
                        o.createElement(
                          "div",
                          { className: p().EditInfoGrid },
                          o.createElement("div", null, "Account ID"),
                          o.createElement("input", {
                            className: p().MediumTextField,
                            type: "text",
                            name: "accountId",
                            maxLength: 20,
                            onChange: (e) => a(e.target.value),
                          }),
                          o.createElement(
                            "div",
                            null,
                            o.createElement(
                              "button",
                              { className: p().SubmitButton, disabled: l },
                              l ? "Adding..." : "Add Account"
                            )
                          )
                        )
                      );
                    },
                    { strTeamId: t }
                  )
                ),
              o.createElement("div", { className: p().SmoothLine }),
              o.createElement("h2", { className: p().Header }, "Members"),
              o.createElement(
                "div",
                {
                  className: p().MembersGrid,
                  style: {
                    gridTemplateColumns: `250px repeat(${N.length - 1}, auto)`,
                  },
                },
                o.createElement(
                  o.Fragment,
                  null,
                  N.map((e) =>
                    o.createElement(
                      "div",
                      { key: `${e.key}-members-grid-header}` },
                      o.createElement("b", null, e.displayName || e.key)
                    )
                  )
                ),
                o.createElement(
                  o.Fragment,
                  null,
                  !!K.length &&
                    K.map((e) =>
                      N.map((t) =>
                        o.createElement(
                          "div",
                          { key: `${t.key}-member-row-${e.account_id}` },
                          t.formatFunction
                            ? t.formatFunction.call(null, e[t.key], V)
                            : JSON.stringify(e[t.key] || "", null, 2).replace(
                                /['"]+/g,
                                ""
                              )
                        )
                      )
                    ),
                  !K.length && o.createElement("div", null, "No team members.")
                )
              ),
              o.createElement("br", null),
              o.createElement(
                "div",
                {
                  className: p().ManagerGrid,
                  style: {
                    gridTemplateColumns: `250px repeat(${h.length - 1}, auto)`,
                  },
                },
                o.createElement(
                  o.Fragment,
                  null,
                  h.map((e) =>
                    o.createElement(
                      "div",
                      { key: `${e.key}-manager-grid-header}` },
                      o.createElement("b", null, e.displayName || e.key)
                    )
                  )
                ),
                o.createElement(
                  o.Fragment,
                  null,
                  h.map((e) =>
                    o.createElement(
                      o.Fragment,
                      { key: `${e.key}-manager-row` },
                      o.createElement(
                        "div",
                        null,
                        e.formatFunction
                          ? e.formatFunction.call(null, W[e.key])
                          : JSON.stringify(W[e.key] || "", null, 2).replace(
                              /['"]+/g,
                              ""
                            )
                      )
                    )
                  ),
                  !h.length && o.createElement("div", null, "No manager.")
                )
              ),
              M &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement("div", { className: p().SmoothLine }),
                  o.createElement(
                    ({ strTeamId: e }) => {
                      const [t, a] = (0, o.useState)(""),
                        [l, r] = (0, o.useState)(""),
                        [c, s] = (0, o.useState)(!1);
                      return o.createElement(
                        "form",
                        {
                          onSubmit: (e) =>
                            (0, n.mG)(void 0, void 0, void 0, function* () {
                              if ((e.preventDefault(), !t || !l)) return;
                              s(!0);
                              const a = {
                                admin_account_id: parseInt(t),
                                admin_email: l,
                                registration_period:
                                  i.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                              };
                              yield m().post(
                                `${i.Y.BASE_URL}webapi/IDOTA2Teams/UpdateRegisteredTeamData/v0001?u=${E}&appid=${i.Y.DOTA_APP_ID}`,
                                { params: a }
                              );
                              H(), setTimeout(() => s(!1), T);
                            }),
                        },
                        o.createElement(
                          "h2",
                          { className: p().Header },
                          "Update Manager Email"
                        ),
                        o.createElement(
                          "div",
                          { className: p().EditInfoGrid },
                          o.createElement("div", null, "Manager Account ID"),
                          o.createElement("input", {
                            className: p().MediumTextField,
                            type: "text",
                            name: "adminAccountId",
                            maxLength: 20,
                            onChange: (e) => a(e.target.value),
                          }),
                          o.createElement("div", null, "Manager Email"),
                          o.createElement("input", {
                            className: p().MediumTextField,
                            type: "email",
                            name: "adminEmail",
                            maxLength: 255,
                            onChange: (e) => r(e.target.value),
                          }),
                          o.createElement(
                            "div",
                            null,
                            o.createElement(
                              "button",
                              { className: p().SubmitButton, disabled: c },
                              c ? "Updating..." : "Update Manager Email"
                            )
                          )
                        )
                      );
                    },
                    { strTeamId: t }
                  )
                ),
              o.createElement("div", { className: p().SmoothLine }),
              o.createElement(
                "h2",
                { className: p().Header },
                "Logos & Colors"
              ),
              o.createElement(
                "div",
                { className: p().LogoAndColorsGrid },
                F.map((e) =>
                  o.createElement(
                    o.Fragment,
                    { key: `${e.key}-logo-colors-row` },
                    o.createElement("div", null, e.displayName || e.key),
                    o.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(null, f[e.key], f.team_id)
                        : JSON.stringify(f[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  )
                )
              ),
              o.createElement("br", null),
              o.createElement(
                "div",
                {
                  className: p().UGCLogosGrid,
                  style: { gridTemplateColumns: `repeat(${I.length}, auto)` },
                },
                o.createElement(
                  o.Fragment,
                  null,
                  I.map((e) =>
                    o.createElement(
                      "div",
                      { key: `${e.key}-ugc-grid-header}` },
                      o.createElement("b", null, e.displayName || e.key)
                    )
                  )
                ),
                o.createElement(
                  o.Fragment,
                  null,
                  I.map((e) =>
                    o.createElement(
                      "div",
                      { key: `${e.key}-ugc-logo` },
                      e.formatFunction
                        ? e.formatFunction.call(null, f[e.key])
                        : JSON.stringify(f[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  )
                )
              ),
              o.createElement("div", { className: p().SmoothLine }),
              o.createElement(
                "h2",
                { className: p().Header },
                "Audit Action History"
              ),
              o.createElement(
                "div",
                {
                  className: p().AuditActionsGrid,
                  style: { gridTemplateColumns: `repeat(${C.length}, auto)` },
                },
                o.createElement(
                  o.Fragment,
                  null,
                  C.map((e) =>
                    o.createElement(
                      "div",
                      {
                        key: `${e.key}-${e.displayName}-audit-action-grid-header`,
                      },
                      o.createElement("b", null, e.displayName || e.key)
                    )
                  )
                ),
                o.createElement(
                  o.Fragment,
                  null,
                  !!B.length &&
                    B.map((e) =>
                      C.map((t) =>
                        o.createElement(
                          "div",
                          { key: `${t.key}-${t.displayName}-${e.timestamp}` },
                          t.formatFunction
                            ? t.formatFunction.call(
                                null,
                                e[t.key],
                                e.player_name,
                                e.target_manager_name
                              )
                            : JSON.stringify(e[t.key] || "", null, 2).replace(
                                /['"]+/g,
                                ""
                              )
                        )
                      )
                    ),
                  !B.length && o.createElement("div", null, "No audit actions.")
                )
              ),
              o.createElement("div", { className: p().SmoothLine }),
              o.createElement(
                "h2",
                { className: p().Header },
                "Supporters Club / Workshop Status"
              ),
              o.createElement(
                "div",
                { className: p().WorkshopStatusGrid },
                S.map((e) =>
                  o.createElement(
                    o.Fragment,
                    { key: `${e.key}-workshop-status-row` },
                    o.createElement("div", null, e.displayName || e.key),
                    o.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(null, G[e.key])
                        : JSON.stringify(G[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  )
                )
              ),
              o.createElement("div", { className: p().SmoothLine }),
              o.createElement(
                "h2",
                { className: (0, s.Z)(p().Header, p().SeasonMatchHeader) },
                `Season ${i.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD} Matches`
              ),
              o.createElement(
                "div",
                {
                  className: p().MatchesGrid,
                  style: { gridTemplateColumns: `repeat(${L.length}, auto)` },
                },
                o.createElement(
                  o.Fragment,
                  null,
                  (() => {
                    const e = [];
                    return (
                      Object.keys(w).forEach((t, a) => {
                        e.push(
                          o.createElement(
                            "h3",
                            {
                              key: `league-name-row-${a}`,
                              style: { gridColumn: `span ${L.length}` },
                            },
                            o.createElement("b", null, t)
                          )
                        ),
                          e.push(
                            L.map((e) =>
                              o.createElement(
                                "div",
                                {
                                  key: `${e.key}-${e.displayName}-matches-grid-header-league-${a}`,
                                },
                                o.createElement(
                                  "b",
                                  null,
                                  e.displayName || e.key
                                )
                              )
                            )
                          );
                        for (let a of w[t])
                          e.push(
                            L.map((e) =>
                              o.createElement(
                                "div",
                                {
                                  key: `${e.key}-${e.displayName}-${a.series_id}`,
                                },
                                e.formatFunction
                                  ? e.formatFunction.call(
                                      null,
                                      a[e.key],
                                      Z(a.opponent_team_id)
                                    )
                                  : JSON.stringify(
                                      a[e.key] || "",
                                      null,
                                      2
                                    ).replace(/['"]+/g, "")
                              )
                            )
                          );
                      }),
                      e
                    );
                  })(),
                  !Object.keys(w).length &&
                    o.createElement(
                      "div",
                      null,
                      o.createElement("br", null),
                      "No league matches."
                    )
                )
              ),
              o.createElement("br", null)
            ),
            o.createElement(u.U, null)
          );
        };
      class D extends o.Component {
        render() {
          return o.createElement(b, null);
        }
      }
    },
  },
]);

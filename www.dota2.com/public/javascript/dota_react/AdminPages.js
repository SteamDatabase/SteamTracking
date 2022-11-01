/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [1510],
  {
    48278: (e) => {
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
    84437: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => D });
      var a,
        r = n(70655),
        i = n(9669),
        o = n.n(i),
        c = n(26016),
        l = n(5977),
        m = n(67294),
        u = n(64593),
        s = n(67506),
        d = n(12814),
        _ = n(8460),
        f = n(5550),
        p = n(28856),
        A = n(48278),
        g = n.n(A),
        v = "public",
        E = 5e3,
        T = function (e) {
          return m.createElement(
            "a",
            {
              href: ""
                .concat(c.Y.BASE_URL, "persona/showplayer/")
                .concat(e, "?u=")
                .concat(v, "&appid=")
                .concat(c.Y.DOTA_APP_ID),
            },
            e
          );
        };
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
      })(a || (a = {}));
      var y = {
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
        k = [
          {
            enum: a.kTRAA_RegisterTeam,
            formatFunction: function () {
              return "Registered a team or re-registered an existing team.";
            },
          },
          {
            enum: a.kTRAA_InvitePlayer,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  "Invited a new/legacy player ",
                  m.createElement("b", null, "".concat(e)),
                  "."
                )
              );
            },
          },
          {
            enum: a.kTRAA_RemovePlayer,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  "Removed a legacy player ",
                  m.createElement("b", null, "".concat(e)),
                  "."
                )
              );
            },
          },
          {
            enum: a.kTRAA_CancelInvite,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("b", null, "".concat(e)),
                  " cancelled an issued invite."
                )
              );
            },
          },
          {
            enum: a.kTRAA_RegisterPlayer,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("b", null, "".concat(e)),
                  " registered a new player."
                )
              );
            },
          },
          {
            enum: a.kTRAA_AcceptInvite,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("b", null, "".concat(e)),
                  " accepted an invite."
                )
              );
            },
          },
          {
            enum: a.kTRAA_RejectInvite,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("b", null, "".concat(e)),
                  " rejected an invite."
                )
              );
            },
          },
          {
            enum: a.kTRAA_UnregisterTeam,
            formatFunction: function () {
              return "Manager removed the team registration.";
            },
          },
          {
            enum: a.kTRAA_TransferTeam,
            formatFunction: function () {
              return "Manager transferred the team wholesale to new management.";
            },
          },
          {
            enum: a.kTRAA_TransferTeamAdmin,
            formatFunction: function (e, t) {
              return (
                void 0 === e && (e = ""),
                void 0 === t && (t = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  "Manager transferred management to a new manager ",
                  m.createElement("b", null, "".concat(t), ".")
                )
              );
            },
          },
          {
            enum: a.kTRAA_InviteCoach,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  "Invited a coach ",
                  m.createElement("b", null, "".concat(e)),
                  "."
                )
              );
            },
          },
          {
            enum: a.kTRAA_RemoveCoach,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  "Removed a coach ",
                  m.createElement("b", null, "".concat(e)),
                  "."
                )
              );
            },
          },
          {
            enum: a.kTRAA_CancelInviteCoach,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("b", null, "".concat(e)),
                  " cancelled an issued coach invite."
                )
              );
            },
          },
          {
            enum: a.kTRAA_AcceptCoachInvite,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("b", null, "".concat(e)),
                  " (coach) accepted an invite."
                )
              );
            },
          },
          {
            enum: a.kTRAA_RejectCoachInvite,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("b", null, "".concat(e)),
                  " (coach) rejected an invite."
                )
              );
            },
          },
          {
            enum: a.kTRAA_ValveUpdateName,
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  "Valve fixed a name for player ",
                  m.createElement("b", null, "".concat(e)),
                  "."
                )
              );
            },
          },
          {
            enum: a.kTRAA_ValveUpdateTeamName,
            formatFunction: function () {
              return "Valve updated the team name.";
            },
          },
          {
            enum: a.kTRAA_Penalty20,
            formatFunction: function () {
              return "20% point penalty.";
            },
          },
        ],
        h = [
          {
            key: "pro",
            displayName: "Pro?",
            formatFunction: function (e) {
              return e ? "YES" : "NO";
            },
          },
          { key: "tag", displayName: "Tag" },
          { key: "abbreviation", displayName: "Abbreviation" },
          {
            key: "time_created",
            displayName: "Time Created",
            formatFunction: function (e) {
              return e ? new Date(1e3 * e).toLocaleString() : "";
            },
          },
          {
            key: "pickup_team",
            displayName: "Pickup Team?",
            formatFunction: function (e) {
              return e ? "YES" : "NO";
            },
          },
          { key: "url", displayName: "URL" },
          {
            key: "country_code",
            displayName: "Country Code",
            formatFunction: function (e) {
              return void 0 === e && (e = ""), e.toUpperCase();
            },
          },
        ],
        R = [
          {
            key: "account_id",
            displayName: "Account ID",
            formatFunction: function (e) {
              return T(e);
            },
          },
          { key: "name", displayName: "Name" },
          { key: "persona_name", displayName: "Persona Name" },
          {
            key: "is_pro",
            displayName: "Pro",
            formatFunction: function (e) {
              return e ? "YES" : "NO";
            },
          },
          {
            key: "admin",
            displayName: "Admin",
            formatFunction: function (e) {
              return e ? "YES" : "NO";
            },
          },
          {
            key: "kick_link",
            displayName: "KICK",
            formatFunction: function (e, t) {
              return m.createElement(
                "div",
                {
                  className: g().Link,
                  onClick: function () {
                    return (0, r.mG)(void 0, void 0, void 0, function () {
                      return (0, r.Jh)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, o().get("".concat(e))];
                          case 1:
                            return (
                              n.sent(),
                              setTimeout(function () {
                                return t();
                              }, 1e3),
                              [2]
                            );
                        }
                      });
                    });
                  },
                },
                "KICK"
              );
            },
          },
          {
            key: "make_admin_link",
            displayName: "MAKE ADMIN",
            formatFunction: function (e, t) {
              return (
                !!e &&
                m.createElement(
                  "div",
                  {
                    className: g().Link,
                    onClick: function () {
                      return (0, r.mG)(void 0, void 0, void 0, function () {
                        return (0, r.Jh)(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return [4, o().get("".concat(e))];
                            case 1:
                              return (
                                n.sent(),
                                setTimeout(function () {
                                  return t();
                                }, 1e3),
                                [2]
                              );
                          }
                        });
                      });
                    },
                  },
                  "MAKE ADMIN"
                )
              );
            },
          },
        ],
        N = [
          {
            key: "manager_account_id",
            displayName: "Manager Account ID",
            formatFunction: function (e) {
              return T(e);
            },
          },
          { key: "manager_email", displayName: "Manager Email" },
        ],
        F = [
          {
            key: "color_primary",
            displayName: "Color (Primary)",
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  e &&
                    m.createElement(
                      "div",
                      null,
                      m.createElement("span", {
                        className: g().ColorBox,
                        style: { backgroundColor: e },
                      }),
                      " ",
                      e
                    )
                )
              );
            },
          },
          {
            key: "color_secondary",
            displayName: "Color (Secondary)",
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  e &&
                    m.createElement(
                      "div",
                      null,
                      m.createElement("span", {
                        className: g().ColorBox,
                        style: { backgroundColor: e },
                      }),
                      " ",
                      e
                    )
                )
              );
            },
          },
          {
            key: "url_logo",
            displayName: "DPC Logo",
            formatFunction: function (e, t) {
              return (
                void 0 === e && (e = ""),
                void 0 === t && (t = 0),
                m.createElement(
                  m.Fragment,
                  null,
                  e &&
                    t &&
                    m.createElement(
                      "div",
                      { className: g().DPCLogoContainer },
                      m.createElement("img", {
                        onError: function (e) {
                          var t = e.currentTarget;
                          (t.onerror = null),
                            (t.src = "".concat(
                              c.Y.IMG_URL,
                              "teams_override/team_unknown_web.png"
                            ));
                        },
                        src: ""
                          .concat(c.Y.CDN_URL, "apps/dota2/teamlogos/")
                          .concat(t, ".png"),
                      })
                    )
                )
              );
            },
          },
        ],
        I = [
          {
            key: "ugc_logo_url",
            displayName: "Logo",
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(
                    "div",
                    { className: g().URLLogoContainer },
                    e && m.createElement("img", { src: e })
                  )
                )
              );
            },
          },
          {
            key: "ugc_base_logo_url",
            displayName: "Base Logo",
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(
                    "div",
                    { className: g().URLLogoContainer },
                    e && m.createElement("img", { src: e })
                  )
                )
              );
            },
          },
          {
            key: "ugc_banner_logo_url",
            displayName: "Banner Logo",
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(
                    "div",
                    { className: g().URLLogoContainer },
                    e && m.createElement("img", { src: e })
                  )
                )
              );
            },
          },
          {
            key: "ugc_sponsor_logo_url",
            displayName: "Sponsor Logo",
            formatFunction: function (e) {
              return (
                void 0 === e && (e = ""),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(
                    "div",
                    { className: g().URLLogoContainer },
                    e && m.createElement("img", { src: e })
                  )
                )
              );
            },
          },
        ],
        C = [
          {
            key: "account_id",
            displayName: "Account ID",
            formatFunction: function (e) {
              return T(e);
            },
          },
          {
            key: "timestamp",
            displayName: "Timestamp",
            formatFunction: function (e) {
              return e ? new Date(1e3 * e).toLocaleString() : "";
            },
          },
          {
            key: "action",
            displayName: "Action Enum",
            formatFunction: function (e) {
              return "".concat(y[e], " (").concat(e, ")");
            },
          },
          {
            key: "action",
            displayName: "Audit Action",
            formatFunction: function (e, t, n) {
              return (
                void 0 === t && (t = ""),
                void 0 === n && (n = ""),
                k
                  .find(function (t) {
                    return t.enum === e;
                  })
                  .formatFunction.call(null, t, n)
              );
            },
          },
        ],
        S = [
          { key: "workshop_account_id", displayName: "Workshop Account ID" },
          {
            key: "comment",
            displayName: "Comment",
            formatFunction: function (e) {
              return e ? '"'.concat(e, '"') : "";
            },
          },
          {
            key: "comment_timestamp",
            displayName: "Last Comment",
            formatFunction: function (e) {
              return e ? new Date(1e3 * e).toLocaleString() : "";
            },
          },
          { key: "spray_count", displayName: "Sprays" },
          { key: "wallpaper_count", displayName: "Wallpapers" },
          { key: "emoticon_count", displayName: "Emoticons" },
          { key: "voiceline_count", displayName: "Voicelines" },
          {
            key: "timestamp",
            displayName: "Last Changed",
            formatFunction: function (e) {
              return e ? new Date(1e3 * e).toLocaleString() : "";
            },
          },
        ],
        b = [
          { key: "series_id", displayName: "Series ID" },
          {
            key: "scheduled_time",
            displayName: "Series Date & Time",
            formatFunction: function (e) {
              return e ? new Date(1e3 * e).toLocaleString() : "";
            },
          },
          {
            key: "outcome",
            displayName: "Outcome",
            formatFunction: function (e) {
              return m.createElement(
                "div",
                {
                  style: {
                    color: "".concat(
                      "Win" === e ? "green" : "Loss" === e ? "red" : "yellow"
                    ),
                  },
                },
                e
              );
            },
          },
          { key: "score", displayName: "Score" },
          {
            key: "opponent_team_id",
            displayName: "Opponent",
            formatFunction: function (e, t) {
              return m.createElement(
                m.Fragment,
                null,
                "".concat(t, " ( "),
                ((n = e),
                m.createElement(
                  "a",
                  {
                    href: ""
                      .concat(c.Y.BASE_URL)
                      .concat(f._.teamdetails(n).substr(1)),
                  },
                  n
                )),
                " )"
              );
              var n;
            },
          },
          {
            key: "matches",
            displayName: "Match IDs",
            formatFunction: function (e) {
              var t = [];
              return (
                t.push(
                  e.map(function (e) {
                    return [
                      ((t = e.match_id),
                      m.createElement(
                        "a",
                        {
                          key: t,
                          href: ""
                            .concat(c.Y.BASE_URL)
                            .concat("matches/match/".concat(t), "?u=")
                            .concat(v, "&appid=")
                            .concat(c.Y.DOTA_APP_ID),
                        },
                        t
                      )),
                      m.createElement(
                        "span",
                        { key: "".concat(e.match_id, "-tab") },
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
        L = function (e) {
          var t = (0, l.UO)().id,
            n = (0, m.useState)([]),
            i = n[0],
            f = n[1],
            A = (0, m.useState)(!1),
            T = A[0],
            y = A[1],
            k = (0, m.useState)(!1),
            L = k[0],
            D = k[1],
            O = (0, m.useState)({}),
            U = O[0],
            G = O[1],
            w = (0, m.useState)(!1),
            P = w[0],
            Y = w[1],
            M = (0, m.useState)(!1),
            x = M[0],
            B = M[1],
            J = (0, m.useState)({}),
            j = J[0],
            H = J[1],
            V = (0, m.useState)([]),
            W = V[0],
            K = V[1],
            Z = (0, m.useState)(!0),
            q = Z[0],
            z = Z[1],
            X = (0, m.useState)([]),
            Q = X[0],
            $ = X[1];
          function ee() {
            var e, t;
            return (0, r.mG)(this, void 0, void 0, function () {
              var n, a, i;
              return (0, r.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return c.Y.DOTA_APP_ID &&
                      c.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD
                      ? ((n = {
                          appid: c.Y.DOTA_APP_ID,
                          registration_period:
                            c.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                        }),
                        [
                          4,
                          o().get(
                            c.Y.BASE_URL +
                              "webapi/IDOTA2Teams/GetRegisteredTeams/v001",
                            { params: n }
                          ),
                        ])
                      : [2];
                  case 1:
                    return (
                      (a = r.sent()),
                      (i =
                        (null ===
                          (t =
                            null === (e = null == a ? void 0 : a.data) ||
                            void 0 === e
                              ? void 0
                              : e.result) || void 0 === t
                          ? void 0
                          : t.teams) || []).length && f(i),
                      y(!0),
                      [2]
                    );
                }
              });
            });
          }
          function te() {
            return (0, r.mG)(this, void 0, void 0, function () {
              var e,
                n,
                a,
                i,
                l,
                m,
                u = this;
              return (0, r.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return c.Y.DOTA_APP_ID &&
                      c.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD &&
                      t
                      ? ((e = { appid: c.Y.DOTA_APP_ID, u: v, team_id: t }),
                        [
                          4,
                          o().get(
                            c.Y.BASE_URL +
                              "webapi/IDOTA2Teams/GetSingleTeamInfo/v001",
                            { params: e }
                          ),
                        ])
                      : [2];
                  case 1:
                    (n = s.sent()),
                      (a = null == n ? void 0 : n.data),
                      (i = a.members || []),
                      (s.label = 2);
                  case 2:
                    return (
                      s.trys.push([2, 5, , 6]),
                      [
                        4,
                        o().get(c.Y.BASE_URL + "teams/getugcfilelinks/", {
                          params: { team_id: t },
                        }),
                      ]
                    );
                  case 3:
                    return (
                      (l = s.sent()).data && Object.assign(a, l.data),
                      [
                        4,
                        Promise.all(
                          i.map(function (e, t) {
                            return (0, r.mG)(u, void 0, void 0, function () {
                              var n, a, l, m;
                              return (0, r.Jh)(this, function (r) {
                                switch (r.label) {
                                  case 0:
                                    return [
                                      4,
                                      o().get(
                                        c.Y.BASE_URL +
                                          "webapi/IDOTA2Fantasy/GetPlayerInfo/v0001",
                                        { params: { account_id: e.account_id } }
                                      ),
                                    ];
                                  case 1:
                                    return (
                                      (n = r.sent()),
                                      (i[t].is_pro = !!(null ===
                                        (l = null == n ? void 0 : n.data) ||
                                      void 0 === l
                                        ? void 0
                                        : l.is_pro)),
                                      (i[t].name =
                                        (null ===
                                          (m = null == n ? void 0 : n.data) ||
                                        void 0 === m
                                          ? void 0
                                          : m.name) || ""),
                                      [
                                        4,
                                        o().get(
                                          c.Y.BASE_URL +
                                            "teams/getpersonaname/",
                                          {
                                            params: {
                                              account_id: e.account_id,
                                            },
                                          }
                                        ),
                                      ]
                                    );
                                  case 2:
                                    return (
                                      (a = r.sent()),
                                      (i[t].persona_name =
                                        (null == a ? void 0 : a.data) || ""),
                                      [2]
                                    );
                                }
                              });
                            });
                          })
                        ),
                      ]
                    );
                  case 4:
                    return (
                      s.sent(),
                      (m = function (e, t) {
                        return e.is_pro && !t.is_pro
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
                      }),
                      i.sort(m),
                      [3, 6]
                    );
                  case 5:
                    return (
                      s.sent(),
                      console.log("Error fetching individual player info."),
                      [3, 6]
                    );
                  case 6:
                    return n && n.data && G(a), Y(!0), [2];
                }
              });
            });
          }
          (0, m.useEffect)(
            function () {
              try {
                !(function () {
                  var e;
                  (0, r.mG)(this, void 0, void 0, function () {
                    var n, a, i, l;
                    return (0, r.Jh)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return c.Y.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON
                            ? ((n = {
                                season: c.Y.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON,
                              }),
                              [
                                4,
                                o().get(
                                  c.Y.BASE_URL +
                                    "webapi/IDOTA2Teams/GetFanContentStatus/v0001",
                                  { params: n }
                                ),
                              ])
                            : [2];
                        case 1:
                          return (
                            (a = r.sent()),
                            (i =
                              (null === (e = null == a ? void 0 : a.data) ||
                              void 0 === e
                                ? void 0
                                : e.team_status_list) || []).length &&
                              t &&
                              (l = i.find(function (e) {
                                return e.team_id.toString() == t;
                              })) &&
                              H(l),
                            [2]
                          );
                      }
                    });
                  });
                })();
              } catch (e) {
                console.log("Could not fetch fan content status.");
              }
            },
            [t]
          ),
            (0, m.useEffect)(function () {
              try {
                ee();
              } catch (e) {
                console.log("Could not fetch registered teams."), D(!0);
              }
            }, []),
            (0, m.useEffect)(
              function () {
                try {
                  te();
                } catch (e) {
                  console.log("Could not fetch single team info."), B(!0);
                }
              },
              [t]
            ),
            (0, m.useEffect)(
              function () {
                try {
                  !(function () {
                    (0, r.mG)(this, void 0, void 0, function () {
                      var e,
                        n,
                        i,
                        l,
                        m = this;
                      return (0, r.Jh)(this, function (u) {
                        switch (u.label) {
                          case 0:
                            return c.Y.DOTA_APP_ID &&
                              c.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD &&
                              t
                              ? ((e = {
                                  team_id: t,
                                  registration_period:
                                    c.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                                }),
                                [
                                  4,
                                  o().get(
                                    c.Y.BASE_URL +
                                      "webapi/IDOTA2Teams/GetTeamAuditInformation/v001",
                                    { params: e }
                                  ),
                                ])
                              : [2];
                          case 1:
                            return (
                              (n = u.sent()),
                              (i = null == n ? void 0 : n.data),
                              (l = (null == i ? void 0 : i.actions) || []),
                              [
                                4,
                                Promise.all(
                                  l.map(function (e) {
                                    return (0,
                                    r.mG)(m, void 0, void 0, function () {
                                      var t;
                                      return (0, r.Jh)(this, function (n) {
                                        switch (n.label) {
                                          case 0:
                                            return e.action ===
                                              a.kTRAA_TransferTeamAdmin &&
                                              e.account_id
                                              ? [
                                                  4,
                                                  o().get(
                                                    c.Y.BASE_URL +
                                                      "teams/getpersonaname/",
                                                    {
                                                      params: {
                                                        account_id:
                                                          e.account_id,
                                                      },
                                                    }
                                                  ),
                                                ]
                                              : [3, 2];
                                          case 1:
                                            (t = n.sent()),
                                              (e.target_manager_name =
                                                (null == t ? void 0 : t.data) ||
                                                ""),
                                              (n.label = 2);
                                          case 2:
                                            return [2];
                                        }
                                      });
                                    });
                                  })
                                ),
                              ]
                            );
                          case 2:
                            return (
                              u.sent(),
                              n && n.data && i.actions && $(i.actions),
                              [2]
                            );
                        }
                      });
                    });
                  })();
                } catch (e) {
                  console.log("Could not fetch single team info."), B(!0);
                }
              },
              [t]
            ),
            (0, m.useEffect)(
              function () {
                var e;
                try {
                  e = JSON.parse(c.Y.DPC_DATA).events;
                } catch (e) {}
                if (e) {
                  e = e.filter(function (e) {
                    return (
                      e.registration_period ===
                      c.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD
                    );
                  });
                  for (var n = [], a = 0, i = e; a < i.length; a++) {
                    var l = i[a].leagues.map(function (e) {
                      return e.league_id;
                    });
                    n.push.apply(n, l);
                  }
                  n.sort(),
                    (n = n.filter(function (e, t, n) {
                      return n.indexOf(e) == t;
                    })).length > 50 && (n = n.slice(n.length - 50));
                  try {
                    !(function () {
                      (0, r.mG)(this, void 0, void 0, function () {
                        var e,
                          a,
                          i,
                          l,
                          m,
                          u,
                          s,
                          d,
                          _,
                          f,
                          p,
                          A,
                          g,
                          v,
                          E,
                          T,
                          y,
                          k,
                          h;
                        return (0, r.Jh)(this, function (R) {
                          switch (R.label) {
                            case 0:
                              return n.length
                                ? ((e = { league_ids: n.join(",") }),
                                  [
                                    4,
                                    o().get(
                                      c.Y.BASE_URL +
                                        "webapi/IDOTA2League/GetLeaguesData/v001",
                                      { params: e }
                                    ),
                                  ])
                                : [2];
                            case 1:
                              for (
                                a = R.sent(),
                                  i = null == a ? void 0 : a.data,
                                  l = null == i ? void 0 : i.leagues,
                                  m = [],
                                  u = 0,
                                  s = l;
                                u < s.length;
                                u++
                              )
                                for (
                                  d = s[u], _ = 0, f = d.node_groups;
                                  _ < f.length;
                                  _++
                                )
                                  for (
                                    p = f[_], A = 0, g = p.node_groups;
                                    A < g.length;
                                    A++
                                  )
                                    for (
                                      v = g[A], E = 0, T = v.nodes;
                                      E < T.length;
                                      E++
                                    )
                                      (y = T[E]).team_id_1 &&
                                        y.team_id_2 &&
                                        (y.team_id_1 == t ||
                                          y.team_id_2 == t) &&
                                        ((y.league_name =
                                          d.info.name +
                                          " (".concat(d.info.league_id, ")")),
                                        y.team_id_1 == t
                                          ? ((y.opponent_team_id = y.team_id_2),
                                            y.team_1_wins > y.team_2_wins
                                              ? (y.outcome = "Win")
                                              : y.team_1_wins === y.team_2_wins
                                              ? (y.outcome = "Tie")
                                              : (y.outcome = "Loss"),
                                            (y.score = ""
                                              .concat(y.team_1_wins, " - ")
                                              .concat(y.team_2_wins)))
                                          : ((y.opponent_team_id = y.team_id_1),
                                            y.team_2_wins > y.team_1_wins
                                              ? (y.outcome = "Win")
                                              : y.team_2_wins === y.team_1_wins
                                              ? (y.outcome = "Tie")
                                              : (y.outcome = "Loss"),
                                            (y.score = ""
                                              .concat(y.team_2_wins, " - ")
                                              .concat(y.team_1_wins))),
                                        0 === y.team_1_wins &&
                                          0 === y.team_2_wins &&
                                          y.scheduled_time &&
                                          new Date().getTime() <
                                            1e3 * y.scheduled_time &&
                                          (y.outcome = "Upcoming"),
                                        m.push(y));
                              return (
                                (k = function (e, t) {
                                  return e.scheduled_time > t.scheduled_time
                                    ? -1
                                    : e.scheduled_time < t.scheduled_time
                                    ? 1
                                    : 0;
                                }),
                                m.sort(k),
                                (h = function (e, t) {
                                  return e.reduce(function (e, n) {
                                    var a;
                                    return (0,
                                    r.pi)((0, r.pi)({}, e), (((a = {})[n[t]] = (0, r.ev)((0, r.ev)([], e[n[t]] || [], !0), [n], !1)), a));
                                  }, {});
                                }),
                                m.length && K(h(m, "league_name")),
                                [2]
                              );
                          }
                        });
                      });
                    })();
                  } catch (e) {
                    console.log("Could not fetch leagues data.");
                  }
                }
              },
              [t]
            );
          var ne,
            ae =
              i.find(function (e) {
                return e.team_id == t;
              }) || {};
          if (
            ((T && P) || (ne = m.createElement("div", null, "Loading...")),
            T &&
              (0 == i.length || L) &&
              (ne = m.createElement(
                "div",
                null,
                "Error loading registered teams..."
              )),
            P &&
              (0 == Object.keys(U).length || x) &&
              (ne = m.createElement(
                "div",
                null,
                "Error loading single team info for teamId ".concat(t, " ")
              )),
            ne)
          )
            return m.createElement(
              "div",
              { className: g().TeamDetails },
              m.createElement(d.j, { bOverlapping: !1 }),
              m.createElement(
                u.q,
                null,
                m.createElement("title", null, "Dota 2 - Team Details")
              ),
              m.createElement(p.Z, null),
              m.createElement("div", { className: g().ContentFrame }, ne),
              m.createElement(_.U, null)
            );
          var re = U.members || [];
          re.forEach(function (e) {
            (e.kick_link = ""
              .concat(
                "".concat(
                  c.Y.BASE_URL,
                  "webapi/IDOTA2Teams/RemoveTeamMember/v0001"
                ),
                "?u="
              )
              .concat(v, "&appid=")
              .concat(c.Y.DOTA_APP_ID, "&team_id=")
              .concat(t, "&account_id=")
              .concat(e.account_id)),
              (e.make_admin_link = e.admin
                ? ""
                : ""
                    .concat(
                      "".concat(
                        c.Y.BASE_URL,
                        "webapi/IDOTA2Teams/SetTeamAdmin/v0001"
                      ),
                      "?u="
                    )
                    .concat(v, "&appid=")
                    .concat(c.Y.DOTA_APP_ID, "&team_id=")
                    .concat(t, "&account_id=")
                    .concat(e.account_id));
          });
          var ie,
            oe = function (e) {
              var t = i.find(function (t) {
                return t.team_id == e;
              });
              return t ? t.team_name : "";
            };
          return m.createElement(
            "div",
            { className: g().TeamDetails },
            m.createElement(d.j, { bOverlapping: !1 }),
            m.createElement(
              u.q,
              null,
              m.createElement("title", null, "Dota 2 - Team Details")
            ),
            m.createElement(p.Z, null),
            m.createElement(
              "div",
              { className: g().ContentFrame },
              m.createElement(
                "h1",
                { className: g().Header },
                "Team Details for "
                  .concat(null == U ? void 0 : U.name, " (")
                  .concat(U.team_id, ")")
              ),
              m.createElement(
                "div",
                { className: g().MiscInfoGrid },
                h.map(function (e) {
                  return m.createElement(
                    m.Fragment,
                    { key: "".concat(e.key, "-misc-row") },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(null, U[e.key])
                        : JSON.stringify(U[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  );
                }),
                !q &&
                  m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      "div",
                      {
                        className: g().Link,
                        onClick: function () {
                          return z(!0);
                        },
                      },
                      "Update Info / Add Member"
                    ),
                    m.createElement("div", null)
                  )
              ),
              q &&
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("div", { className: g().SmoothLine }),
                  m.createElement(
                    function (e) {
                      var t = e.strTeamId,
                        n = (0, m.useState)(""),
                        a = n[0],
                        i = n[1],
                        l = (0, m.useState)(""),
                        u = l[0],
                        s = l[1],
                        d = (0, m.useState)(""),
                        _ = d[0],
                        f = d[1],
                        p = (0, m.useState)(!1),
                        A = p[0],
                        v = p[1];
                      return m.createElement(
                        "form",
                        {
                          onSubmit: function (e) {
                            return (0, r.mG)(
                              void 0,
                              void 0,
                              void 0,
                              function () {
                                var n;
                                return (0, r.Jh)(this, function (r) {
                                  switch (r.label) {
                                    case 0:
                                      return (
                                        e.preventDefault(),
                                        a || u || _
                                          ? (v(!0),
                                            (n = {
                                              team_id: t,
                                              team_name: a,
                                              team_tag: u,
                                              team_abbreviation: _,
                                            }),
                                            [
                                              4,
                                              o().get(
                                                "".concat(
                                                  c.Y.BASE_URL,
                                                  "webapi/IDOTA2Teams/EditTeamName/v0001"
                                                ),
                                                { params: n }
                                              ),
                                            ])
                                          : [2]
                                      );
                                    case 1:
                                      return (
                                        r.sent(),
                                        te(),
                                        setTimeout(function () {
                                          return v(!1);
                                        }, E),
                                        [2]
                                      );
                                  }
                                });
                              }
                            );
                          },
                        },
                        m.createElement(
                          "h2",
                          { className: g().Header },
                          "Update Team Information"
                        ),
                        m.createElement(
                          "div",
                          { className: g().EditInfoGrid },
                          m.createElement("div", null, "Team Name"),
                          m.createElement("input", {
                            className: g().MediumTextField,
                            type: "text",
                            name: "teamName",
                            maxLength: 32,
                            onChange: function (e) {
                              return i(e.target.value);
                            },
                          }),
                          m.createElement("div", null, "Tag"),
                          m.createElement("input", {
                            className: g().SmallTextField,
                            type: "text",
                            name: "teamTag",
                            maxLength: 8,
                            onChange: function (e) {
                              return s(e.target.value);
                            },
                          }),
                          m.createElement("div", null, "Abbreviation"),
                          m.createElement("input", {
                            className: g().SmallTextField,
                            type: "text",
                            name: "teamAbbreviation",
                            maxLength: 4,
                            onChange: function (e) {
                              return f(e.target.value);
                            },
                          }),
                          m.createElement(
                            "div",
                            null,
                            m.createElement(
                              "button",
                              { className: g().SubmitButton, disabled: A },
                              A ? "Updating..." : "Update"
                            )
                          )
                        )
                      );
                    },
                    { strTeamId: t }
                  ),
                  m.createElement("div", { className: g().SmoothLine }),
                  m.createElement(
                    function (e) {
                      var t = e.strTeamId,
                        n = (0, m.useState)(""),
                        a = n[0],
                        i = n[1],
                        l = (0, m.useState)(!1),
                        u = l[0],
                        s = l[1];
                      return m.createElement(
                        "form",
                        {
                          onSubmit: function (e) {
                            return (0, r.mG)(
                              void 0,
                              void 0,
                              void 0,
                              function () {
                                var n;
                                return (0, r.Jh)(this, function (r) {
                                  switch (r.label) {
                                    case 0:
                                      return (
                                        e.preventDefault(),
                                        a
                                          ? (s(!0),
                                            (n = { team_id: t, account_id: a }),
                                            [
                                              4,
                                              o().get(
                                                "".concat(
                                                  c.Y.BASE_URL,
                                                  "webapi/IDOTA2Teams/AddTeamMember/v0001"
                                                ),
                                                { params: n }
                                              ),
                                            ])
                                          : [2]
                                      );
                                    case 1:
                                      return (
                                        r.sent(),
                                        te(),
                                        setTimeout(function () {
                                          return s(!1);
                                        }, E),
                                        [2]
                                      );
                                  }
                                });
                              }
                            );
                          },
                        },
                        m.createElement(
                          "h2",
                          { className: g().Header },
                          "Add Team Member"
                        ),
                        m.createElement(
                          "div",
                          { className: g().EditInfoGrid },
                          m.createElement("div", null, "Account ID"),
                          m.createElement("input", {
                            className: g().MediumTextField,
                            type: "text",
                            name: "accountId",
                            maxLength: 20,
                            onChange: function (e) {
                              return i(e.target.value);
                            },
                          }),
                          m.createElement(
                            "div",
                            null,
                            m.createElement(
                              "button",
                              { className: g().SubmitButton, disabled: u },
                              u ? "Adding..." : "Add Account"
                            )
                          )
                        )
                      );
                    },
                    { strTeamId: t }
                  )
                ),
              m.createElement("div", { className: g().SmoothLine }),
              m.createElement("h2", { className: g().Header }, "Members"),
              m.createElement(
                "div",
                {
                  className: g().MembersGrid,
                  style: {
                    gridTemplateColumns: "250px repeat(".concat(
                      R.length - 1,
                      ", auto)"
                    ),
                  },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  R.map(function (e) {
                    return m.createElement(
                      "div",
                      { key: "".concat(e.key, "-members-grid-header}") },
                      m.createElement("b", null, e.displayName || e.key)
                    );
                  })
                ),
                m.createElement(
                  m.Fragment,
                  null,
                  !!re.length &&
                    re.map(function (e) {
                      return R.map(function (t) {
                        return m.createElement(
                          "div",
                          {
                            key: ""
                              .concat(t.key, "-member-row-")
                              .concat(e.account_id),
                          },
                          t.formatFunction
                            ? t.formatFunction.call(null, e[t.key], te)
                            : JSON.stringify(e[t.key] || "", null, 2).replace(
                                /['"]+/g,
                                ""
                              )
                        );
                      });
                    }),
                  !re.length && m.createElement("div", null, "No team members.")
                )
              ),
              m.createElement("br", null),
              m.createElement(
                "div",
                {
                  className: g().ManagerGrid,
                  style: {
                    gridTemplateColumns: "250px repeat(".concat(
                      N.length - 1,
                      ", auto)"
                    ),
                  },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  N.map(function (e) {
                    return m.createElement(
                      "div",
                      { key: "".concat(e.key, "-manager-grid-header}") },
                      m.createElement("b", null, e.displayName || e.key)
                    );
                  })
                ),
                m.createElement(
                  m.Fragment,
                  null,
                  N.map(function (e) {
                    return m.createElement(
                      m.Fragment,
                      { key: "".concat(e.key, "-manager-row") },
                      m.createElement(
                        "div",
                        null,
                        e.formatFunction
                          ? e.formatFunction.call(null, ae[e.key])
                          : JSON.stringify(ae[e.key] || "", null, 2).replace(
                              /['"]+/g,
                              ""
                            )
                      )
                    );
                  }),
                  !N.length && m.createElement("div", null, "No manager.")
                )
              ),
              q &&
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("div", { className: g().SmoothLine }),
                  m.createElement(
                    function (e) {
                      e.strTeamId;
                      var t = (0, m.useState)(""),
                        n = t[0],
                        a = t[1],
                        i = (0, m.useState)(""),
                        l = i[0],
                        u = i[1],
                        s = (0, m.useState)(!1),
                        d = s[0],
                        _ = s[1];
                      return m.createElement(
                        "form",
                        {
                          onSubmit: function (e) {
                            return (0, r.mG)(
                              void 0,
                              void 0,
                              void 0,
                              function () {
                                var t;
                                return (0, r.Jh)(this, function (a) {
                                  switch (a.label) {
                                    case 0:
                                      return (
                                        e.preventDefault(),
                                        n && l
                                          ? (_(!0),
                                            (t = {
                                              admin_account_id: parseInt(n),
                                              admin_email: l,
                                              registration_period:
                                                c.Y
                                                  .DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                                            }),
                                            [
                                              4,
                                              o().post(
                                                ""
                                                  .concat(
                                                    c.Y.BASE_URL,
                                                    "webapi/IDOTA2Teams/UpdateRegisteredTeamData/v0001?u="
                                                  )
                                                  .concat(v, "&appid=")
                                                  .concat(c.Y.DOTA_APP_ID),
                                                { params: t }
                                              ),
                                            ])
                                          : [2]
                                      );
                                    case 1:
                                      return (
                                        a.sent(),
                                        ee(),
                                        setTimeout(function () {
                                          return _(!1);
                                        }, E),
                                        [2]
                                      );
                                  }
                                });
                              }
                            );
                          },
                        },
                        m.createElement(
                          "h2",
                          { className: g().Header },
                          "Update Manager Email"
                        ),
                        m.createElement(
                          "div",
                          { className: g().EditInfoGrid },
                          m.createElement("div", null, "Manager Account ID"),
                          m.createElement("input", {
                            className: g().MediumTextField,
                            type: "text",
                            name: "adminAccountId",
                            maxLength: 20,
                            onChange: function (e) {
                              return a(e.target.value);
                            },
                          }),
                          m.createElement("div", null, "Manager Email"),
                          m.createElement("input", {
                            className: g().MediumTextField,
                            type: "email",
                            name: "adminEmail",
                            maxLength: 255,
                            onChange: function (e) {
                              return u(e.target.value);
                            },
                          }),
                          m.createElement(
                            "div",
                            null,
                            m.createElement(
                              "button",
                              { className: g().SubmitButton, disabled: d },
                              d ? "Updating..." : "Update Manager Email"
                            )
                          )
                        )
                      );
                    },
                    { strTeamId: t }
                  )
                ),
              m.createElement("div", { className: g().SmoothLine }),
              m.createElement(
                "h2",
                { className: g().Header },
                "Logos & Colors"
              ),
              m.createElement(
                "div",
                { className: g().LogoAndColorsGrid },
                F.map(function (e) {
                  return m.createElement(
                    m.Fragment,
                    { key: "".concat(e.key, "-logo-colors-row") },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(null, U[e.key], U.team_id)
                        : JSON.stringify(U[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  );
                })
              ),
              m.createElement("br", null),
              m.createElement(
                "div",
                {
                  className: g().UGCLogosGrid,
                  style: {
                    gridTemplateColumns: "repeat(".concat(I.length, ", auto)"),
                  },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  I.map(function (e) {
                    return m.createElement(
                      "div",
                      { key: "".concat(e.key, "-ugc-grid-header}") },
                      m.createElement("b", null, e.displayName || e.key)
                    );
                  })
                ),
                m.createElement(
                  m.Fragment,
                  null,
                  I.map(function (e) {
                    return m.createElement(
                      "div",
                      { key: "".concat(e.key, "-ugc-logo") },
                      e.formatFunction
                        ? e.formatFunction.call(null, U[e.key])
                        : JSON.stringify(U[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    );
                  })
                )
              ),
              m.createElement("div", { className: g().SmoothLine }),
              m.createElement(
                "h2",
                { className: g().Header },
                "Audit Action History"
              ),
              m.createElement(
                "div",
                {
                  className: g().AuditActionsGrid,
                  style: {
                    gridTemplateColumns: "repeat(".concat(C.length, ", auto)"),
                  },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  C.map(function (e) {
                    return m.createElement(
                      "div",
                      {
                        key: ""
                          .concat(e.key, "-")
                          .concat(e.displayName, "-audit-action-grid-header"),
                      },
                      m.createElement("b", null, e.displayName || e.key)
                    );
                  })
                ),
                m.createElement(
                  m.Fragment,
                  null,
                  !!Q.length &&
                    Q.map(function (e) {
                      return C.map(function (t) {
                        return m.createElement(
                          "div",
                          {
                            key: ""
                              .concat(t.key, "-")
                              .concat(t.displayName, "-")
                              .concat(e.timestamp),
                          },
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
                        );
                      });
                    }),
                  !Q.length && m.createElement("div", null, "No audit actions.")
                )
              ),
              m.createElement("div", { className: g().SmoothLine }),
              m.createElement(
                "h2",
                { className: g().Header },
                "Supporters Club / Workshop Status"
              ),
              m.createElement(
                "div",
                { className: g().WorkshopStatusGrid },
                S.map(function (e) {
                  return m.createElement(
                    m.Fragment,
                    { key: "".concat(e.key, "-workshop-status-row") },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(null, j[e.key])
                        : JSON.stringify(j[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  );
                })
              ),
              m.createElement("div", { className: g().SmoothLine }),
              m.createElement(
                "h2",
                { className: (0, s.Z)(g().Header, g().SeasonMatchHeader) },
                "Season ".concat(
                  c.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                  " Matches"
                )
              ),
              m.createElement(
                "div",
                {
                  className: g().MatchesGrid,
                  style: {
                    gridTemplateColumns: "repeat(".concat(b.length, ", auto)"),
                  },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  ((ie = []),
                  Object.keys(W).forEach(function (e, t) {
                    ie.push(
                      m.createElement(
                        "h3",
                        {
                          key: "league-name-row-".concat(t),
                          style: { gridColumn: "span ".concat(b.length) },
                        },
                        m.createElement("b", null, e)
                      )
                    ),
                      ie.push(
                        b.map(function (e) {
                          return m.createElement(
                            "div",
                            {
                              key: ""
                                .concat(e.key, "-")
                                .concat(
                                  e.displayName,
                                  "-matches-grid-header-league-"
                                )
                                .concat(t),
                            },
                            m.createElement("b", null, e.displayName || e.key)
                          );
                        })
                      );
                    for (
                      var n = function (e) {
                          ie.push(
                            b.map(function (t) {
                              return m.createElement(
                                "div",
                                {
                                  key: ""
                                    .concat(t.key, "-")
                                    .concat(t.displayName, "-")
                                    .concat(e.series_id),
                                },
                                t.formatFunction
                                  ? t.formatFunction.call(
                                      null,
                                      e[t.key],
                                      oe(e.opponent_team_id)
                                    )
                                  : JSON.stringify(
                                      e[t.key] || "",
                                      null,
                                      2
                                    ).replace(/['"]+/g, "")
                              );
                            })
                          );
                        },
                        a = 0,
                        r = W[e];
                      a < r.length;
                      a++
                    )
                      n(r[a]);
                  }),
                  ie),
                  !Object.keys(W).length &&
                    m.createElement("div", null, "No league matches.")
                )
              ),
              m.createElement("br", null)
            ),
            m.createElement(_.U, null)
          );
        };
      const D = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (0, r.ZT)(t, e),
          (t.prototype.render = function () {
            return m.createElement(L, null);
          }),
          t
        );
      })(m.Component);
    },
  },
]);

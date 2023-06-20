/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [1510],
  {
    33916: (e) => {
      e.exports = {
        Tooltip: "personadetails_Tooltip_3OELh",
        CarouselFade: "personadetails_CarouselFade_31I4l",
        StandardButton: "personadetails_StandardButton_37aD3",
        ButtonText: "personadetails_ButtonText_1kRqd",
        Icon: "personadetails_Icon_3qIRi",
        Play: "personadetails_Play_2vTU3",
        SteamLogo: "personadetails_SteamLogo_1fP8s",
        ToolTip: "personadetails_ToolTip_RYpRb",
        PersonaDetails: "personadetails_PersonaDetails_1zeGb",
        ContentFrame: "personadetails_ContentFrame_Z_Blb",
        MatchesGrid: "personadetails_MatchesGrid_31w0i",
        WorkshopStatusGrid: "personadetails_WorkshopStatusGrid_q83HE",
        AuditActionsGrid: "personadetails_AuditActionsGrid_EAkGx",
        LogoAndColorsGrid: "personadetails_LogoAndColorsGrid_gKA9F",
        WarningsGrid: "personadetails_WarningsGrid_2THih",
        VacInfoInnerGrid: "personadetails_VacInfoInnerGrid_2GLWy",
        VacInfoOuterGrid: "personadetails_VacInfoOuterGrid_3mMUp",
        TeamsInfoInnerGrid: "personadetails_TeamsInfoInnerGrid_1VvPw",
        TeamsInfoOuterGrid: "personadetails_TeamsInfoOuterGrid_3Yy6Z",
        OfficialProfileInnerGrid:
          "personadetails_OfficialProfileInnerGrid_3B-f5",
        OfficialProfileOuterGrid:
          "personadetails_OfficialProfileOuterGrid_3G-7d",
        EventInfoInnerGrid: "personadetails_EventInfoInnerGrid_vvYl-",
        EventInfoOuterGrid: "personadetails_EventInfoOuterGrid_e1kXo",
        RankInfoGrid: "personadetails_RankInfoGrid_xI5E6",
        SmurfInfoGrid: "personadetails_SmurfInfoGrid_1ec2J",
        MiscInfoGrid: "personadetails_MiscInfoGrid_1Dgmp",
        TeamDetailsGrid: "personadetails_TeamDetailsGrid_2qp3O",
        AccountFlagGenericGrid: "personadetails_AccountFlagGenericGrid_wV5vZ",
        SupportInfoGrid: "personadetails_SupportInfoGrid_1OWRz",
        Header: "personadetails_Header_DQGCO",
        URLLogoContainer: "personadetails_URLLogoContainer_3fh5m",
        DPCLogoContainer: "personadetails_DPCLogoContainer_3Xu-j",
        SeasonMatchHeader: "personadetails_SeasonMatchHeader_2Lapd",
        ColorBox: "personadetails_ColorBox_2rY74",
        Link: "personadetails_Link_1ymUX",
        MediumTextField: "personadetails_MediumTextField_eQUN1",
        SmallTextField: "personadetails_SmallTextField_1NTGY",
        SmoothLine: "personadetails_SmoothLine_TmbIe",
      };
    },
    37233: (e) => {
      e.exports = {
        Tooltip: "teamdetails_Tooltip_31hC1",
        CarouselFade: "teamdetails_CarouselFade_2UcOF",
        StandardButton: "teamdetails_StandardButton_1OiL0",
        ButtonText: "teamdetails_ButtonText_3gcUn",
        Icon: "teamdetails_Icon_17oKd",
        Play: "teamdetails_Play_1e79t",
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
    21600: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => V });
      var n = t(33940),
        l = t(52868),
        r = t.n(l),
        o = t(54013),
        i = t(65092),
        m = t(89526),
        s = t(53672),
        c = t(29706),
        d = t(70894),
        u = (t(36250), t(39375)),
        p = t(79585),
        _ = t(33916),
        E = t.n(_);
      function y(e) {
        switch (e) {
          case p.PW.RANK_ELIGIBLE:
            return "Rank Eligible";
          case p.PW.BATTLECUP:
            return "Battlecup";
          case p.PW.BAN_WARNING:
            return "Ban Warning";
          case p.PW.RETURNING_PLAYER:
            return "Returning Player";
          case p.PW.COMMS_DISRUPTIVE:
            return "Comms Disruptive";
          default:
            return "Unknown";
        }
      }
      function f(e) {
        switch (e) {
          case p.n4.VERY_LIKELY:
            return "Very Likely";
          case p.n4.SOMEWHAT_LIKELY:
            return "Somewhat Likely";
          case p.n4.UNCLEAR:
            return "Unclear";
          case p.n4.SOMEWHAT_UNLIKELY:
            return "Somewhat Unlikely";
          case p.n4.VERY_UNLIKELY:
            return "Very Unlikely";
          default:
            return "Unknown";
        }
      }
      function g(e) {
        switch (e) {
          case p._W.DOTA_ACCESS_TOURNAMENT_ADMIN:
            return "Tournament Admin";
          case p._W.DOTA_ACCESS_TOURNAMENT_BROADCASTER:
            return "Tournament Broadcaster";
          default:
            return "Unknown";
        }
      }
      function v(e) {
        switch (e) {
          case p.xd.CORE:
            return "Core";
          case p.xd.SUPPORT:
            return "Support";
          case p.xd.OFFLANE:
            return "Offlane";
          case p.xd.MID:
            return "Mid";
          default:
            return "Unknown";
        }
      }
      var A = t(14798),
        k = t(23007),
        N = t(58104),
        T = t(57317),
        h = t(54650),
        R = t(52339),
        I = t(36105),
        F = t.n(I);
      const S = "public",
        L = "red",
        C = "orange",
        O = "goldenrod",
        G = "#adff2f",
        $ = "darkgray",
        D = [
          { key: "accountid", displayName: "Account ID" },
          {
            key: "wins",
            secondaryKey: "losses",
            displayName: "Total Games Played",
            formatFunction: (e, a) => m.createElement("div", null, e + a || 0),
          },
          {
            key: "guilds",
            secondaryKey: "dotaguildurl",
            displayName: "Guild",
            formatFunction: (e = {}, a = "") => {
              var t, n;
              const l = `${a}${
                  null === (t = null == e ? void 0 : e.guild) || void 0 === t
                    ? void 0
                    : t.guild_id
                }`,
                r =
                  (null === (n = null == e ? void 0 : e.guild) || void 0 === n
                    ? void 0
                    : n.guild_name) || "";
              return r && a
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      "a",
                      { href: l, target: "_blank", rel: "noopener" },
                      r
                    )
                  )
                : m.createElement("span", { style: { color: $ } }, "No Guild");
            },
          },
        ],
        b = [
          {
            key: "steamaccountlink",
            displayName: "Steam Account 64",
            formatFunction: (e) =>
              e
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      "a",
                      { href: e, target: "_blank", rel: "noopener" },
                      e.split("/").pop()
                    )
                  )
                : "",
          },
          {
            key: "history",
            secondaryKey: "steamsupporthwidbaseurl",
            displayName: "Most Recent HWID",
            formatFunction: (e = {}, a) => {
              var t, n, l;
              if (
                !Object.keys(e).length ||
                !e.matches ||
                !Object.keys(e.matches).length
              )
                return "";
              let r = "";
              for (let a = Object.keys(e.matches).length - 1; a >= 0; a--)
                if (
                  null ===
                    (n =
                      null === (t = e.matches[a]) || void 0 === t
                        ? void 0
                        : t.searchdata) || void 0 === n
                    ? void 0
                    : n.hwid
                ) {
                  r =
                    null === (l = e.matches[a]) || void 0 === l
                      ? void 0
                      : l.searchdata.hwid;
                  break;
                }
              return r
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      "a",
                      { href: `${a}${r}`, target: "_blank", rel: "noopener" },
                      r
                    )
                  )
                : "";
            },
          },
          {
            key: "reportslink",
            displayName: "Reports",
            formatFunction: (e) =>
              e
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      "a",
                      { href: e, target: "_blank", rel: "noopener" },
                      "Reports"
                    )
                  )
                : "",
          },
          {
            key: "associateslink",
            displayName: "Associates",
            formatFunction: (e) =>
              e
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      "a",
                      { href: e, target: "_blank", rel: "noopener" },
                      "Associates"
                    )
                  )
                : "",
          },
          {
            key: "personalink",
            displayName: "Persona V1",
            formatFunction: (e) =>
              e
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      "a",
                      { href: e, target: "_blank", rel: "noopener" },
                      "Persona V1"
                    )
                  )
                : "",
          },
        ],
        P = [
          {
            key: "accountflags",
            displayName: "Account Flags",
            formatFunction: (e) => {
              const a = "; ";
              let t = [];
              return (
                0 == e && t.push("None"),
                (e & p.PW.RANK_ELIGIBLE) > 0 &&
                  t.push(`${y(p.PW.RANK_ELIGIBLE)}${a}`),
                (e & p.PW.BATTLECUP) > 0 && t.push(`${y(p.PW.BATTLECUP)}${a}`),
                (e & p.PW.BAN_WARNING) > 0 &&
                  t.push(
                    m.createElement(
                      "span",
                      { style: { color: L } },
                      `${y(p.PW.BAN_WARNING)}${a}`
                    )
                  ),
                (e & p.PW.RETURNING_PLAYER) > 0 &&
                  t.push(
                    m.createElement(
                      "span",
                      { style: { color: O } },
                      `${y(p.PW.RETURNING_PLAYER)}${a}`
                    )
                  ),
                (e & p.PW.COMMS_DISRUPTIVE) > 0 &&
                  t.push(
                    m.createElement(
                      "span",
                      { style: { color: L } },
                      `${y(p.PW.COMMS_DISRUPTIVE)}${a}`
                    )
                  ),
                m.createElement("div", null, t)
              );
            },
          },
          {
            key: "beta_access_flags",
            displayName: g(p._W.DOTA_ACCESS_TOURNAMENT_ADMIN),
            formatFunction: (e = 0) =>
              e & p._W.DOTA_ACCESS_TOURNAMENT_ADMIN
                ? m.createElement("div", { style: { color: G } }, "YES")
                : "NO",
          },
          {
            key: "beta_access_flags",
            displayName: g(p._W.DOTA_ACCESS_TOURNAMENT_BROADCASTER),
            formatFunction: (e = 0) =>
              e & p._W.DOTA_ACCESS_TOURNAMENT_BROADCASTER
                ? m.createElement("div", { style: { color: G } }, "YES")
                : "NO",
          },
        ],
        U = [
          {
            key: "smurfcategory",
            displayName: "Smurf Category",
            formatFunction: (e) => {
              switch (e) {
                case p.n4.VERY_LIKELY:
                  return m.createElement(
                    "span",
                    { style: { color: L } },
                    f(p.n4.VERY_LIKELY)
                  );
                case p.n4.SOMEWHAT_LIKELY:
                  return m.createElement(
                    "span",
                    { style: { color: C } },
                    f(p.n4.SOMEWHAT_LIKELY)
                  );
                case p.n4.UNCLEAR:
                  return m.createElement(
                    "span",
                    { style: { color: O } },
                    f(p.n4.UNCLEAR)
                  );
                case p.n4.SOMEWHAT_UNLIKELY:
                  return m.createElement(
                    "span",
                    { style: {} },
                    f(p.n4.SOMEWHAT_UNLIKELY)
                  );
                case p.n4.VERY_UNLIKELY:
                  return m.createElement(
                    "span",
                    { style: {} },
                    f(p.n4.VERY_UNLIKELY)
                  );
                default:
                  return m.createElement("span", null, f(p.n4.INVALID));
              }
            },
          },
          {
            key: "wins",
            secondaryKey: "losses",
            displayName: "Total Games Played",
            formatFunction: (e, a) => m.createElement("div", null, e + a || 0),
          },
          {
            key: "wins",
            secondaryKey: "losses",
            displayName: "Win Rate",
            formatFunction: (e, a) => {
              const t = e + a || 0;
              if (!t) return m.createElement("div", null, "");
              const n = Math.round((e / t) * 1e4) / 100;
              let l = "none";
              return (
                n >= 70 || n <= 30 ? (l = C) : (n >= 60 || n <= 40) && (l = O),
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement(
                    "span",
                    { style: { marginRight: "12px" } },
                    m.createElement(
                      "span",
                      { style: { color: "forestgreen" } },
                      `${e}`
                    ),
                    m.createElement("span", null, " - "),
                    m.createElement(
                      "span",
                      { style: { color: "crimson" } },
                      `${a}`
                    )
                  ),
                  m.createElement("span", { style: { color: l } }, `(${n}%)`)
                )
              );
            },
          },
          {
            key: "plussubscriber",
            displayName: "Plus Subscriber",
            formatFunction: (e = 0) =>
              e ? m.createElement("div", { style: { color: G } }, "YES") : "NO",
          },
          {
            key: "reportpenaltycount",
            displayName: "Report Penalty Count",
            formatFunction: (e = 0) => {
              let a = G;
              return (
                e >= 5 ? (a = L) : e >= 3 && (a = C),
                m.createElement("span", { style: { color: a } }, e)
              );
            },
          },
          {
            key: "behavscore",
            displayName: "Behavior Score",
            formatFunction: (e = 1e4) => {
              let a = G;
              return (
                e < 1500 ? (a = L) : e < 3e3 ? (a = C) : e < 7e3 && (a = O),
                m.createElement("span", { style: { color: a } }, e)
              );
            },
          },
          {
            key: "overperformancehistory",
            displayName: "Overperformance History",
            formatFunction: (e = 0) => {
              let a = 0;
              (a = e - ((e >> 1) & 1431655765)),
                (a = ((a >> 2) & 858993459) + (858993459 & a)),
                (a = ((a >> 4) + a) & 252645135),
                (a = ((a >> 8) + a) & 16711935),
                (a = ((a >> 16) + a) & 65535);
              let t = G;
              return (
                a > 20 ? (t = L) : a > 10 ? (t = C) : a > 5 && (t = O),
                m.createElement(
                  "span",
                  { style: { color: t } },
                  `${a} / 32 games`
                )
              );
            },
          },
        ],
        w = [
          {
            key: "comprank",
            secondaryKey: "comprankuncertainty",
            displayName: "Ranked",
            formatFunction: (e, a) =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "span",
                  { style: { display: "inline-block", minWidth: "60px" } },
                  `${e}`
                ),
                m.createElement("span", null, `+/- ${a}`)
              ),
          },
          {
            key: "compranktier",
            secondaryKey: "comprankuncertainty",
            displayName: " ",
            formatFunction: (e) =>
              m.createElement("img", {
                src: `${
                  o.Y.CDN_URL
                }/apps/dota2/images/small_ranks/ranked_icons_emoticon_${Math.floor(
                  e / 10
                )}.png`,
              }),
          },
          {
            key: "rank",
            secondaryKey: "rankuncertainty",
            displayName: "Unranked",
            formatFunction: (e, a) =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "span",
                  { style: { display: "inline-block", minWidth: "60px" } },
                  `${e}`
                ),
                m.createElement("span", null, `+/- ${a}`)
              ),
          },
        ],
        M = [
          {
            key: "eventpoints",
            displayName: " ",
            formatFunction: (e = {}) => {
              var a, t;
              const n = null == e ? void 0 : e.result,
                l = null == n ? void 0 : n.points,
                r = [];
              for (let n of l) {
                const l = n.event_id,
                  o =
                    null === (a = e[l]) || void 0 === a ? void 0 : a.event_name,
                  i =
                    (null === (t = e[l]) || void 0 === t
                      ? void 0
                      : t.points_per_level) || 1e3,
                  s = Math.floor(n.event_points / i);
                r.unshift(
                  m.createElement(
                    m.Fragment,
                    { key: o },
                    m.createElement("div", null, o),
                    m.createElement("div", null, s)
                  )
                );
              }
              return r;
            },
          },
        ],
        Y = [
          { key: "name", displayName: "Name" },
          { key: "real_name", displayName: "Real Name" },
          {
            key: "role",
            displayName: "Role",
            formatFunction: (e = 0) => {
              switch (e) {
                case p.xd.CORE:
                  return v(p.xd.CORE);
                case p.xd.SUPPORT:
                  return v(p.xd.SUPPORT);
                case p.xd.OFFLANE:
                  return v(p.xd.OFFLANE);
                case p.xd.MID:
                  return v(p.xd.MID);
                default:
                  return "Unknown";
              }
            },
          },
          {
            key: "team",
            secondaryKey: "dotateamurl",
            displayName: "Team ID",
            formatFunction: (e = 0, a = "") => {
              if (!e || !a) return "";
              const t = `${a}${e}`;
              return m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "a",
                  { href: t, target: "_blank", rel: "noopener" },
                  e
                )
              );
            },
          },
          {
            key: "country",
            displayName: "Country",
            formatFunction: (e) =>
              m.createElement(
                "span",
                { style: { textTransform: "uppercase" } },
                e
              ),
          },
          { key: "sponsor", displayName: "Sponsor" },
          {
            key: "pro",
            displayName: "Is Pro Team?",
            formatFunction: (e) => (e ? "YES" : "NO"),
          },
          {
            key: "locked",
            displayName: "Is Locked?",
            formatFunction: (e) => (e ? "YES" : "NO"),
          },
        ],
        x = [
          {
            key: "teams",
            secondaryKey: "dotateamurl",
            displayName: " ",
            formatFunction: (e = {}, a = "") => {
              const t = [];
              for (let n in e) {
                const l = e[n],
                  r = l.team_id,
                  o = `${a}${r}`,
                  i = l.team_name,
                  s = l.team_tag;
                t.push(
                  m.createElement(
                    m.Fragment,
                    { key: r },
                    m.createElement(
                      "div",
                      null,
                      `${i} `,
                      m.createElement("i", { style: { color: $ } }, `[${s}]`)
                    ),
                    m.createElement(
                      "a",
                      { href: o, target: "_blank", rel: "noopener" },
                      r
                    )
                  )
                );
              }
              return t;
            },
          },
        ],
        W = (e) =>
          m.createElement(
            m.Fragment,
            null,
            m.createElement("span", { style: { color: C } }, "YES"),
            m.createElement("span", null, " (check V1 Link for details)")
          ),
        B = [
          {
            key: "exploiter_data",
            displayName: "Exploiter Warnings?",
            formatFunction: W,
          },
          {
            key: "smurf_data",
            displayName: "Smurf Warnings?",
            formatFunction: W,
          },
          {
            key: "cheater_data",
            displayName: "Cheater Warnings?",
            formatFunction: W,
          },
          {
            key: "booster_data",
            displayName: "Booster Warnings?",
            formatFunction: W,
          },
        ],
        K = [
          {
            key: "vac",
            displayName: " ",
            formatFunction: (e = {}) => {
              const a = [];
              for (let t in e) {
                const n = e[t];
                a.push(
                  m.createElement(
                    m.Fragment,
                    { key: t },
                    m.createElement(
                      "div",
                      { style: { textTransform: "capitalize" } },
                      `VAC ${t.replace(/_/g, " ")}`
                    ),
                    m.createElement("div", null, n)
                  )
                );
              }
              return a;
            },
          },
        ],
        H = (e) => {
          var a, t, l, p, _;
          const y = (0, i.UO)().id,
            [f, g] = (0, m.useState)(null),
            [v, I] = (0, m.useState)(null),
            [L, C] = (0, m.useState)(!1),
            [O, G] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            try {
              !(function () {
                (0, n.mG)(this, void 0, void 0, function* () {
                  if (!o.Y.DOTA_APP_ID || !y) return;
                  G(!1), C(!1);
                  const e = { appid: o.Y.DOTA_APP_ID, u: S, account_id: y };
                  try {
                    const a = yield r().get(
                        o.Y.BASE_URL + "persona/showplayerreact/",
                        { params: e }
                      ),
                      t = null == a ? void 0 : a.data;
                    try {
                      t &&
                        t.persona &&
                        t.persona.elodatajson &&
                        t.persona.elodatajson &&
                        I(JSON.parse(t.persona.elodatajson).aggregate);
                    } catch (e) {}
                    a && a.data && g(t);
                  } catch (e) {
                    console.log("Error fetching individual persona info."),
                      G(!0);
                  }
                  C(!0);
                });
              })();
            } catch (e) {
              console.log("Could not fetch persona info.");
            }
          }, [y]);
          let W = null;
          if (
            (L ||
              (W = m.createElement(
                "h2",
                { className: E().Header },
                `Loading account ID ${y}...`
              )),
            (!y || (L && O)) &&
              (W = m.createElement(
                "h2",
                { className: E().Header },
                `Error loading persona information for account ID ${y}.`
              )),
            W)
          )
            return m.createElement(
              "div",
              { className: E().PersonaDetails },
              m.createElement(c.j, { bOverlapping: !1 }),
              m.createElement(
                s.q,
                null,
                m.createElement("title", null, "Dota 2 - Persona Details")
              ),
              m.createElement(u.Z, null),
              m.createElement("div", { className: E().ContentFrame }, W),
              m.createElement(d.U, null)
            );
          const H =
            (null === (a = null == f ? void 0 : f.persona) || void 0 === a
              ? void 0
              : a.personaname) || "";
          let V = !0;
          for (let e of B) (null == f ? void 0 : f.persona[e.key]) && (V = !1);
          return m.createElement(
            "div",
            { className: E().PersonaDetails },
            m.createElement(c.j, { bOverlapping: !1 }),
            m.createElement(
              s.q,
              null,
              m.createElement(
                "title",
                null,
                "Dota 2 Player" + (H ? " - " + H : "")
              )
            ),
            m.createElement(u.Z, null),
            m.createElement(
              "div",
              { className: E().ContentFrame },
              m.createElement("h1", { className: E().Header }, `${H}`),
              m.createElement(
                "div",
                { className: E().MiscInfoGrid },
                D.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-${e.displayName}-generalInfo-row` },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(
                            null,
                            null == f ? void 0 : f.persona[e.key],
                            null == f ? void 0 : f.persona[e.secondaryKey]
                          )
                        : JSON.stringify(
                            (null == f ? void 0 : f.persona[e.key]) || "",
                            null,
                            2
                          ).replace(/['"]+/g, "")
                    )
                  )
                ),
                ((e = []) =>
                  m.createElement(
                    m.Fragment,
                    null,
                    m.createElement("div", null, "Games Played Within Window"),
                    m.createElement("div", null, e && e.length)
                  ))(v)
              ),
              m.createElement("div", { className: E().SmoothLine }),
              m.createElement(
                "h2",
                { className: E().Header },
                "Rank Information"
              ),
              m.createElement(
                "div",
                { className: E().RankInfoGrid },
                w.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-${e.displayName}-rankInfo-row` },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(
                            null,
                            null == f ? void 0 : f.persona[e.key],
                            null == f ? void 0 : f.persona[e.secondaryKey]
                          )
                        : JSON.stringify(
                            (null == f ? void 0 : f.persona[e.key]) || "",
                            null,
                            2
                          ).replace(/['"]+/g, "")
                    )
                  )
                )
              ),
              m.createElement("br", null),
              m.createElement("br", null),
              m.createElement(
                "h3",
                { className: E().Header },
                "Smurf Information"
              ),
              m.createElement(
                "div",
                { className: E().SmurfInfoGrid },
                U.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-${e.displayName}-smurfInfo-row` },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(
                            null,
                            null == f ? void 0 : f.persona[e.key],
                            null == f ? void 0 : f.persona[e.secondaryKey]
                          )
                        : JSON.stringify(
                            (null == f ? void 0 : f.persona[e.key]) || "",
                            null,
                            2
                          ).replace(/['"]+/g, "")
                    )
                  )
                )
              ),
              m.createElement("div", { className: E().SmoothLine }),
              m.createElement("h2", { className: E().Header }, "Support"),
              m.createElement(
                "div",
                { className: E().SupportInfoGrid },
                b.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-${e.displayName}-supportInfo-row` },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(
                            null,
                            null == f ? void 0 : f.persona[e.key],
                            null == f ? void 0 : f.persona[e.secondaryKey]
                          )
                        : JSON.stringify(
                            (null == f ? void 0 : f.persona[e.key]) || "",
                            null,
                            2
                          ).replace(/['"]+/g, "")
                    )
                  )
                )
              ),
              m.createElement("br", null),
              m.createElement(
                "div",
                { className: E().AccountFlagGenericGrid },
                P.map((e) =>
                  m.createElement(
                    m.Fragment,
                    {
                      key: `${e.key}-${e.displayName}-accountFlagGenericInfo-row`,
                    },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(
                            null,
                            null == f ? void 0 : f.persona[e.key],
                            null == f ? void 0 : f.persona[e.secondaryKey]
                          )
                        : JSON.stringify(
                            (null == f ? void 0 : f.persona[e.key]) || "",
                            null,
                            2
                          ).replace(/['"]+/g, "")
                    )
                  )
                )
              ),
              !V && m.createElement("br", null),
              m.createElement(
                "div",
                { className: E().WarningsGrid },
                B.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-${e.displayName}-warningsInfo-row` },
                    (null == f ? void 0 : f.persona[e.key]) &&
                      m.createElement("div", null, e.displayName || e.key),
                    (null == f ? void 0 : f.persona[e.key]) &&
                      m.createElement(
                        "div",
                        null,
                        e.formatFunction
                          ? e.formatFunction.call(
                              null,
                              null == f ? void 0 : f.persona[e.key],
                              null == f ? void 0 : f.persona[e.secondaryKey]
                            )
                          : JSON.stringify(
                              (null == f ? void 0 : f.persona[e.key]) || "",
                              null,
                              2
                            ).replace(/['"]+/g, "")
                      )
                  )
                )
              ),
              m.createElement("br", null),
              m.createElement(
                "div",
                { className: E().VacInfoOuterGrid },
                K.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-${e.displayName}-vacInfo-row` },
                    m.createElement(
                      "div",
                      { className: E().VacInfoOuterGrid },
                      e.formatFunction
                        ? e.formatFunction.call(
                            null,
                            null == f ? void 0 : f.persona[e.key],
                            null == f ? void 0 : f.persona[e.secondaryKey]
                          )
                        : JSON.stringify(
                            (null == f ? void 0 : f.persona[e.key]) || "",
                            null,
                            2
                          ).replace(/['"]+/g, "")
                    )
                  )
                )
              ),
              m.createElement("div", { className: E().SmoothLine }),
              m.createElement(
                "h2",
                { className: E().Header },
                "Official Profile"
              ),
              m.createElement(
                "div",
                { className: E().OfficialProfileOuterGrid },
                (null === (t = null == f ? void 0 : f.persona) || void 0 === t
                  ? void 0
                  : t.official_profile) &&
                  Y.map((e) => {
                    var a, t;
                    return m.createElement(
                      m.Fragment,
                      {
                        key: `${e.key}-${e.displayName}-officialProfileInfo-row`,
                      },
                      m.createElement("div", null, e.displayName || e.key),
                      m.createElement(
                        "div",
                        { className: E().OfficialProfileInnerGrid },
                        e.formatFunction
                          ? e.formatFunction.call(
                              null,
                              null === (a = null == f ? void 0 : f.persona) ||
                                void 0 === a
                                ? void 0
                                : a.official_profile[e.key],
                              null == f ? void 0 : f.persona[e.secondaryKey]
                            )
                          : JSON.stringify(
                              (null === (t = null == f ? void 0 : f.persona) ||
                              void 0 === t
                                ? void 0
                                : t.official_profile[e.key]) || "",
                              null,
                              2
                            ).replace(/['"]+/g, "")
                      )
                    );
                  }),
                !(null === (l = null == f ? void 0 : f.persona) || void 0 === l
                  ? void 0
                  : l.official_profile) &&
                  m.createElement(
                    m.Fragment,
                    null,
                    m.createElement("span", { style: { color: $ } }, "(None)")
                  )
              ),
              m.createElement(
                "div",
                { className: E().TeamsInfoInfoOuterGrid },
                m.createElement("br", null),
                m.createElement("h2", { className: E().Header }, "Teams"),
                (null === (p = null == f ? void 0 : f.persona) || void 0 === p
                  ? void 0
                  : p.teams) &&
                  x.map((e) =>
                    m.createElement(
                      m.Fragment,
                      { key: `${e.key}-${e.displayName}-teamsInfo-row` },
                      m.createElement(
                        "div",
                        { className: E().TeamsInfoInnerGrid },
                        e.formatFunction
                          ? e.formatFunction.call(
                              null,
                              null == f ? void 0 : f.persona[e.key],
                              null == f ? void 0 : f.persona[e.secondaryKey]
                            )
                          : JSON.stringify(
                              (null == f ? void 0 : f.persona[e.key]) || "",
                              null,
                              2
                            ).replace(/['"]+/g, "")
                      )
                    )
                  ),
                !(null === (_ = null == f ? void 0 : f.persona) || void 0 === _
                  ? void 0
                  : _.teams) &&
                  m.createElement(
                    m.Fragment,
                    null,
                    m.createElement("span", { style: { color: $ } }, "(None)")
                  )
              ),
              m.createElement("div", { className: E().SmoothLine }),
              m.createElement("h2", { className: E().Header }, "MMR"),
              m.createElement(
                A.w,
                {
                  width: 1200,
                  height: 800,
                  data: v,
                  margin: { top: 5, right: 30, left: 20, bottom: 5 },
                },
                m.createElement(k.K, {
                  dataKey: "time",
                  type: "number",
                  tickFormatter: (e) => F()(1e3 * e).format("MMM D"),
                  domain: ["dataMin - 86400", "dataMax + 43200"],
                }),
                m.createElement(N.B, { domain: ["auto", "auto"] }),
                m.createElement(T.u, { cursor: !1 }),
                m.createElement(h.D, null),
                m.createElement(R.x, {
                  type: "monotone",
                  dataKey: "casual",
                  dot: { fill: "#82ca9d", strokeWidth: 1, r: 3 },
                  stroke: "#82ca9d",
                  strokeWidth: 2,
                  connectNulls: !0,
                }),
                m.createElement(R.x, {
                  type: "monotone",
                  dataKey: "ranked",
                  dot: { fill: "#888fd8", strokeWidth: 1, r: 3 },
                  stroke: "#888fd8",
                  strokeWidth: 2,
                  connectNulls: !0,
                })
              ),
              m.createElement("div", { className: E().SmoothLine }),
              m.createElement(
                "h2",
                { className: E().Header },
                "Event Information"
              ),
              m.createElement(
                "div",
                { className: E().EventInfoOuterGrid },
                M.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-${e.displayName}-eventInfo-row` },
                    m.createElement(
                      "div",
                      { className: E().EventInfoInnerGrid },
                      e.formatFunction
                        ? e.formatFunction.call(
                            null,
                            null == f ? void 0 : f.persona[e.key]
                          )
                        : JSON.stringify(
                            (null == f ? void 0 : f.persona[e.key]) || "",
                            null,
                            2
                          ).replace(/['"]+/g, "")
                    )
                  )
                )
              )
            ),
            m.createElement(d.U, null)
          );
        };
      class V extends m.Component {
        render() {
          return m.createElement(H, null);
        }
      }
    },
    88900: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => G });
      var n = t(33940),
        l = t(52868),
        r = t.n(l),
        o = t(54013),
        i = t(65092),
        m = t(89526),
        s = t(53672),
        c = t(22396),
        d = t(29706),
        u = t(70894),
        p = t(36250),
        _ = t(39375),
        E = t(37233),
        y = t.n(E);
      const f = "public",
        g = 5e3,
        v = (e) =>
          m.createElement(
            "a",
            {
              href: `${o.Y.BASE_URL}persona/showplayer/${e}?u=${f}&appid=${o.Y.DOTA_APP_ID}`,
            },
            e
          );
      var A;
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
      })(A || (A = {}));
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
        N = [
          {
            enum: A.kTRAA_RegisterTeam,
            formatFunction: () =>
              "Registered a team or re-registered an existing team.",
          },
          {
            enum: A.kTRAA_InvitePlayer,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                "Invited a new/legacy player ",
                m.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: A.kTRAA_RemovePlayer,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                "Removed a legacy player ",
                m.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: A.kTRAA_CancelInvite,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement("b", null, `${e}`),
                " cancelled an issued invite."
              ),
          },
          {
            enum: A.kTRAA_RegisterPlayer,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement("b", null, `${e}`),
                " registered a new player."
              ),
          },
          {
            enum: A.kTRAA_AcceptInvite,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement("b", null, `${e}`),
                " accepted an invite."
              ),
          },
          {
            enum: A.kTRAA_RejectInvite,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement("b", null, `${e}`),
                " rejected an invite."
              ),
          },
          {
            enum: A.kTRAA_UnregisterTeam,
            formatFunction: () => "Manager removed the team registration.",
          },
          {
            enum: A.kTRAA_TransferTeam,
            formatFunction: () =>
              "Manager transferred the team wholesale to new management.",
          },
          {
            enum: A.kTRAA_TransferTeamAdmin,
            formatFunction: (e = "", a = "") =>
              m.createElement(
                m.Fragment,
                null,
                "Manager transferred management to a new manager ",
                m.createElement("b", null, `${a}`, ".")
              ),
          },
          {
            enum: A.kTRAA_InviteCoach,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                "Invited a coach ",
                m.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: A.kTRAA_RemoveCoach,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                "Removed a coach ",
                m.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: A.kTRAA_CancelInviteCoach,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement("b", null, `${e}`),
                " cancelled an issued coach invite."
              ),
          },
          {
            enum: A.kTRAA_AcceptCoachInvite,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement("b", null, `${e}`),
                " (coach) accepted an invite."
              ),
          },
          {
            enum: A.kTRAA_RejectCoachInvite,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement("b", null, `${e}`),
                " (coach) rejected an invite."
              ),
          },
          {
            enum: A.kTRAA_ValveUpdateName,
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                "Valve fixed a name for player ",
                m.createElement("b", null, `${e}`),
                "."
              ),
          },
          {
            enum: A.kTRAA_ValveUpdateTeamName,
            formatFunction: () => "Valve updated the team name.",
          },
          {
            enum: A.kTRAA_Penalty20,
            formatFunction: () => "20% point penalty.",
          },
        ],
        T = [
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
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement("a", { href: e }, e)
                  )
                : "",
          },
          {
            key: "country_code",
            displayName: "Country Code",
            formatFunction: (e = "") => e.toUpperCase(),
          },
        ],
        h = [
          {
            key: "account_id",
            displayName: "Account ID",
            formatFunction: (e) => v(e),
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
            formatFunction: (e, a) =>
              m.createElement(
                "div",
                {
                  className: y().Link,
                  onClick: () =>
                    (0, n.mG)(void 0, void 0, void 0, function* () {
                      yield r().get(`${e}`), setTimeout(() => a(), 1e3);
                    }),
                },
                "KICK"
              ),
          },
          {
            key: "make_admin_link",
            displayName: "MAKE ADMIN",
            formatFunction: (e, a) =>
              !!e &&
              m.createElement(
                "div",
                {
                  className: y().Link,
                  onClick: () =>
                    (0, n.mG)(void 0, void 0, void 0, function* () {
                      yield r().get(`${e}`), setTimeout(() => a(), 1e3);
                    }),
                },
                "MAKE ADMIN"
              ),
          },
        ],
        R = [
          {
            key: "manager_account_id",
            displayName: "Manager Account ID",
            formatFunction: (e) => v(e),
          },
          { key: "manager_email", displayName: "Manager Email" },
        ],
        I = [
          {
            key: "color_primary",
            displayName: "Color (Primary)",
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                e &&
                  m.createElement(
                    "div",
                    null,
                    m.createElement("span", {
                      className: y().ColorBox,
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
              m.createElement(
                m.Fragment,
                null,
                e &&
                  m.createElement(
                    "div",
                    null,
                    m.createElement("span", {
                      className: y().ColorBox,
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
            formatFunction: (e = "", a = 0) =>
              m.createElement(
                m.Fragment,
                null,
                e &&
                  a &&
                  m.createElement(
                    "div",
                    { className: y().DPCLogoContainer },
                    m.createElement("img", {
                      onError: ({ currentTarget: e }) => {
                        (e.onerror = null),
                          (e.src = `${o.Y.IMG_URL}teams_override/team_unknown_web.png`);
                      },
                      src: `${o.Y.CDN_URL}apps/dota2/teamlogos/${a}.png`,
                    })
                  )
              ),
          },
        ],
        F = [
          {
            key: "ugc_logo_url",
            displayName: "Logo",
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  { className: y().URLLogoContainer },
                  e && m.createElement("img", { src: e })
                )
              ),
          },
          {
            key: "ugc_base_logo_url",
            displayName: "Base Logo",
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  { className: y().URLLogoContainer },
                  e && m.createElement("img", { src: e })
                )
              ),
          },
          {
            key: "ugc_banner_logo_url",
            displayName: "Banner Logo",
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  { className: y().URLLogoContainer },
                  e && m.createElement("img", { src: e })
                )
              ),
          },
          {
            key: "ugc_sponsor_logo_url",
            displayName: "Sponsor Logo",
            formatFunction: (e = "") =>
              m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  { className: y().URLLogoContainer },
                  e && m.createElement("img", { src: e })
                )
              ),
          },
        ],
        S = [
          {
            key: "account_id",
            displayName: "Account ID",
            formatFunction: (e) => v(e),
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
            formatFunction: (e, a = "", t = "") =>
              N.find((a) => a.enum === e).formatFunction.call(null, a, t),
          },
        ],
        L = [
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
        C = [
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
              m.createElement(
                "div",
                {
                  style: {
                    color:
                      "" +
                      ("Win" === e
                        ? "green"
                        : "Loss" === e
                        ? "red"
                        : "Tie" === e
                        ? "yellow"
                        : "skyblue"),
                  },
                },
                e
              ),
          },
          { key: "score", displayName: "Score" },
          {
            key: "opponent_team_id",
            displayName: "Opponent",
            formatFunction: (e, a) => {
              return m.createElement(
                m.Fragment,
                null,
                `${a} ( `,
                ((t = e),
                m.createElement(
                  "a",
                  { href: `${o.Y.BASE_URL}${p._.teamdetails(t).substr(1)}` },
                  t
                )),
                " )"
              );
              var t;
            },
          },
          {
            key: "matches",
            displayName: "Match IDs",
            formatFunction: (e) => {
              const a = [];
              return (
                a.push(
                  e.map((e) => {
                    return [
                      ((a = e.match_id),
                      m.createElement(
                        "a",
                        {
                          key: a,
                          href: `${o.Y.BASE_URL}matches/match/${a}?u=${f}&appid=${o.Y.DOTA_APP_ID}`,
                        },
                        a
                      )),
                      m.createElement(
                        "span",
                        { key: `${e.match_id}-tab` },
                        " "
                      ),
                    ];
                    var a;
                  })
                ),
                a
              );
            },
          },
        ],
        O = (e) => {
          const a = (0, i.UO)().id,
            [t, l] = (0, m.useState)([]),
            [p, E] = (0, m.useState)(!1),
            [v, k] = (0, m.useState)(!1),
            [N, O] = (0, m.useState)({}),
            [G, $] = (0, m.useState)(!1),
            [D, b] = (0, m.useState)(!1),
            [P, U] = (0, m.useState)({}),
            [w, M] = (0, m.useState)([]),
            [Y, x] = (0, m.useState)(!0),
            [W, B] = (0, m.useState)([]);
          function K() {
            var e, a;
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (
                !o.Y.DOTA_APP_ID ||
                !o.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD
              )
                return;
              const t = {
                  appid: o.Y.DOTA_APP_ID,
                  registration_period:
                    o.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                },
                n = yield r().get(
                  o.Y.BASE_URL + "webapi/IDOTA2Teams/GetRegisteredTeams/v001",
                  { params: t }
                ),
                i =
                  (null ===
                    (a =
                      null === (e = null == n ? void 0 : n.data) || void 0 === e
                        ? void 0
                        : e.result) || void 0 === a
                    ? void 0
                    : a.teams) || [];
              i.length && l(i), E(!0);
            });
          }
          function H() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (
                !o.Y.DOTA_APP_ID ||
                !o.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD ||
                !a
              )
                return;
              const e = { appid: o.Y.DOTA_APP_ID, u: f, team_id: a },
                t = yield r().get(
                  o.Y.BASE_URL + "webapi/IDOTA2Teams/GetSingleTeamInfo/v001",
                  { params: e }
                ),
                l = null == t ? void 0 : t.data,
                i = l.members || [];
              try {
                const e = yield r().get(
                  o.Y.BASE_URL + "teams/getugcfilelinks/",
                  { params: { team_id: a } }
                );
                e.data && Object.assign(l, e.data),
                  yield Promise.all(
                    i.map((e, a) =>
                      (0, n.mG)(this, void 0, void 0, function* () {
                        var t, n;
                        const l = yield r().get(
                          o.Y.BASE_URL +
                            "webapi/IDOTA2Fantasy/GetPlayerInfo/v0001",
                          { params: { account_id: e.account_id } }
                        );
                        (i[a].is_pro = !!(null ===
                          (t = null == l ? void 0 : l.data) || void 0 === t
                          ? void 0
                          : t.is_pro)),
                          (i[a].name =
                            (null === (n = null == l ? void 0 : l.data) ||
                            void 0 === n
                              ? void 0
                              : n.name) || "");
                        const m = yield r().get(
                          o.Y.BASE_URL + "teams/getpersonaname/",
                          { params: { account_id: e.account_id } }
                        );
                        i[a].persona_name = (null == m ? void 0 : m.data) || "";
                      })
                    )
                  );
                const t = (e, a) =>
                  e.is_pro && !a.is_pro
                    ? -1
                    : !e.is_pro && a.is_pro
                    ? 1
                    : e.admin && !a.admin
                    ? -1
                    : (!e.admin && a.admin) ||
                      (null == e ? void 0 : e.pro_name.toLowerCase()) >
                        (null == a ? void 0 : a.pro_name.toLowerCase())
                    ? 1
                    : (null == e ? void 0 : e.pro_name.toLowerCase()) <
                      (null == a ? void 0 : a.pro_name.toLowerCase())
                    ? -1
                    : 0;
                i.sort(t);
              } catch (e) {
                console.log("Error fetching individual player info.");
              }
              t && t.data && O(l), $(!0);
            });
          }
          (0, m.useEffect)(() => {
            try {
              !(function () {
                var e;
                (0, n.mG)(this, void 0, void 0, function* () {
                  if (!o.Y.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON) return;
                  const t = { season: o.Y.DOTA_TEAM_FAN_UPLOAD_CONTENT_SEASON },
                    n = yield r().get(
                      o.Y.BASE_URL +
                        "webapi/IDOTA2Teams/GetFanContentStatus/v0001",
                      { params: t }
                    ),
                    l =
                      (null === (e = null == n ? void 0 : n.data) ||
                      void 0 === e
                        ? void 0
                        : e.team_status_list) || [];
                  if (l.length && a) {
                    const e = l.find((e) => e.team_id.toString() == a);
                    e && U(e);
                  }
                });
              })();
            } catch (e) {
              console.log("Could not fetch fan content status.");
            }
          }, [a]),
            (0, m.useEffect)(() => {
              try {
                K();
              } catch (e) {
                console.log("Could not fetch registered teams."), k(!0);
              }
            }, []),
            (0, m.useEffect)(() => {
              try {
                H();
              } catch (e) {
                console.log("Could not fetch single team info."), b(!0);
              }
            }, [a]),
            (0, m.useEffect)(() => {
              try {
                !(function () {
                  (0, n.mG)(this, void 0, void 0, function* () {
                    if (
                      !o.Y.DOTA_APP_ID ||
                      !o.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD ||
                      !a
                    )
                      return;
                    const e = {
                        team_id: a,
                        registration_period:
                          o.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                      },
                      t = yield r().get(
                        o.Y.BASE_URL +
                          "webapi/IDOTA2Teams/GetTeamAuditInformation/v001",
                        { params: e }
                      ),
                      l = null == t ? void 0 : t.data,
                      i = (null == l ? void 0 : l.actions) || [];
                    yield Promise.all(
                      i.map((e) =>
                        (0, n.mG)(this, void 0, void 0, function* () {
                          if (
                            e.action === A.kTRAA_TransferTeamAdmin &&
                            e.account_id
                          ) {
                            const a = yield r().get(
                              o.Y.BASE_URL + "teams/getpersonaname/",
                              { params: { account_id: e.account_id } }
                            );
                            e.target_manager_name =
                              (null == a ? void 0 : a.data) || "";
                          }
                        })
                      )
                    ),
                      t && t.data && l.actions && B(l.actions);
                  });
                })();
              } catch (e) {
                console.log("Could not fetch single team info."), b(!0);
              }
            }, [a]),
            (0, m.useEffect)(() => {
              let e;
              try {
                e = JSON.parse(o.Y.DPC_DATA).events;
              } catch (e) {}
              if (!e) return;
              e = e.filter(
                (e) =>
                  e.registration_period ===
                  o.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD
              );
              let t = [];
              for (let a of e) {
                const e = a.leagues.map((e) => e.league_id);
                t.push(...e);
              }
              t.sort(),
                (t = t.filter((e, a, t) => t.indexOf(e) == a)),
                t.length > 50 && (t = t.slice(t.length - 50));
              try {
                !(function () {
                  (0, n.mG)(this, void 0, void 0, function* () {
                    if (!t.length) return;
                    const e = { league_ids: t.join(",") },
                      n = yield r().get(
                        o.Y.BASE_URL +
                          "webapi/IDOTA2League/GetLeaguesData/v001",
                        { params: e }
                      ),
                      l = null == n ? void 0 : n.data,
                      i = null == l ? void 0 : l.leagues,
                      m = [];
                    for (let e of i)
                      for (let t of e.node_groups)
                        for (let n of t.node_groups)
                          for (let t of n.nodes)
                            t.team_id_1 &&
                              t.team_id_2 &&
                              (t.team_id_1 == a || t.team_id_2 == a) &&
                              ((t.league_name =
                                e.info.name + ` (${e.info.league_id})`),
                              t.team_id_1 == a
                                ? ((t.opponent_team_id = t.team_id_2),
                                  t.team_1_wins > t.team_2_wins
                                    ? (t.outcome = "Win")
                                    : t.team_1_wins === t.team_2_wins
                                    ? (t.outcome = "Tie")
                                    : (t.outcome = "Loss"),
                                  (t.score = `${t.team_1_wins} - ${t.team_2_wins}`))
                                : ((t.opponent_team_id = t.team_id_1),
                                  t.team_2_wins > t.team_1_wins
                                    ? (t.outcome = "Win")
                                    : t.team_2_wins === t.team_1_wins
                                    ? (t.outcome = "Tie")
                                    : (t.outcome = "Loss"),
                                  (t.score = `${t.team_2_wins} - ${t.team_1_wins}`)),
                              0 === t.team_1_wins &&
                                0 === t.team_2_wins &&
                                t.scheduled_time &&
                                new Date().getTime() < 1e3 * t.scheduled_time &&
                                (t.outcome = "Upcoming"),
                              m.push(t));
                    var s;
                    m.sort((e, a) =>
                      e.scheduled_time > a.scheduled_time
                        ? -1
                        : e.scheduled_time < a.scheduled_time
                        ? 1
                        : 0
                    ),
                      m.length &&
                        M(
                          ((s = "league_name"),
                          m.reduce(
                            (e, a) =>
                              Object.assign(Object.assign({}, e), {
                                [a[s]]: [...(e[a[s]] || []), a],
                              }),
                            {}
                          ))
                        );
                  });
                })();
              } catch (e) {
                console.log("Could not fetch leagues data.");
              }
            }, [a]);
          const V = t.find((e) => e.team_id == a) || {};
          let j;
          if (
            ((p && G) || (j = m.createElement("div", null, "Loading...")),
            p &&
              (0 == t.length || v) &&
              (j = m.createElement(
                "div",
                null,
                "Error loading registered teams..."
              )),
            G &&
              (0 == Object.keys(N).length || D) &&
              (j = m.createElement(
                "div",
                null,
                `Error loading single team info for teamId ${a} `
              )),
            j)
          )
            return m.createElement(
              "div",
              { className: y().TeamDetails },
              m.createElement(d.j, { bOverlapping: !1 }),
              m.createElement(
                s.q,
                null,
                m.createElement("title", null, "Dota 2 - Team Details")
              ),
              m.createElement(_.Z, null),
              m.createElement("div", { className: y().ContentFrame }, j),
              m.createElement(u.U, null)
            );
          const J = N.members || [];
          J.forEach((e) => {
            (e.kick_link = `${o.Y.BASE_URL}webapi/IDOTA2Teams/RemoveTeamMember/v0001?u=${f}&appid=${o.Y.DOTA_APP_ID}&team_id=${a}&account_id=${e.account_id}`),
              (e.make_admin_link = e.admin
                ? ""
                : `${o.Y.BASE_URL}webapi/IDOTA2Teams/SetTeamAdmin/v0001?u=${f}&appid=${o.Y.DOTA_APP_ID}&team_id=${a}&account_id=${e.account_id}`);
          });
          const q = (e) => {
            const a = t.find((a) => a.team_id == e);
            return a ? a.team_name : "";
          };
          return m.createElement(
            "div",
            { className: y().TeamDetails },
            m.createElement(d.j, { bOverlapping: !1 }),
            m.createElement(
              s.q,
              null,
              m.createElement("title", null, "Dota 2 - Team Details")
            ),
            m.createElement(_.Z, null),
            m.createElement(
              "div",
              { className: y().ContentFrame },
              m.createElement(
                "h1",
                { className: y().Header },
                `Team Details for ${null == N ? void 0 : N.name} (${N.team_id})`
              ),
              m.createElement(
                "div",
                { className: y().MiscInfoGrid },
                T.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-misc-row` },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(null, N[e.key])
                        : JSON.stringify(N[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  )
                ),
                !Y &&
                  m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      "div",
                      { className: y().Link, onClick: () => x(!0) },
                      "Update Info / Add Member"
                    ),
                    m.createElement("div", null)
                  )
              ),
              Y &&
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("div", { className: y().SmoothLine }),
                  m.createElement(
                    ({ strTeamId: e }) => {
                      const [a, t] = (0, m.useState)(""),
                        [l, i] = (0, m.useState)(""),
                        [s, c] = (0, m.useState)(""),
                        [d, u] = (0, m.useState)(!1);
                      return m.createElement(
                        "form",
                        {
                          onSubmit: (t) =>
                            (0, n.mG)(void 0, void 0, void 0, function* () {
                              if ((t.preventDefault(), !a && !l && !s)) return;
                              u(!0);
                              const n = {
                                team_id: e,
                                team_name: a,
                                team_tag: l,
                                team_abbreviation: s,
                              };
                              yield r().get(
                                `${o.Y.BASE_URL}webapi/IDOTA2Teams/EditTeamName/v0001`,
                                { params: n }
                              );
                              H(), setTimeout(() => u(!1), g);
                            }),
                        },
                        m.createElement(
                          "h2",
                          { className: y().Header },
                          "Update Team Information"
                        ),
                        m.createElement(
                          "div",
                          { className: y().EditInfoGrid },
                          m.createElement("div", null, "Team Name"),
                          m.createElement("input", {
                            className: y().MediumTextField,
                            type: "text",
                            name: "teamName",
                            maxLength: 32,
                            onChange: (e) => t(e.target.value),
                          }),
                          m.createElement("div", null, "Tag"),
                          m.createElement("input", {
                            className: y().SmallTextField,
                            type: "text",
                            name: "teamTag",
                            maxLength: 8,
                            onChange: (e) => i(e.target.value),
                          }),
                          m.createElement("div", null, "Abbreviation"),
                          m.createElement("input", {
                            className: y().SmallTextField,
                            type: "text",
                            name: "teamAbbreviation",
                            maxLength: 4,
                            onChange: (e) => c(e.target.value),
                          }),
                          m.createElement(
                            "div",
                            null,
                            m.createElement(
                              "button",
                              { className: y().SubmitButton, disabled: d },
                              d ? "Updating..." : "Update"
                            )
                          )
                        )
                      );
                    },
                    { strTeamId: a }
                  ),
                  m.createElement("div", { className: y().SmoothLine }),
                  m.createElement(
                    ({ strTeamId: e }) => {
                      const [a, t] = (0, m.useState)(""),
                        [l, i] = (0, m.useState)(!1);
                      return m.createElement(
                        "form",
                        {
                          onSubmit: (t) =>
                            (0, n.mG)(void 0, void 0, void 0, function* () {
                              if ((t.preventDefault(), !a)) return;
                              i(!0);
                              const n = { team_id: e, account_id: a };
                              yield r().get(
                                `${o.Y.BASE_URL}webapi/IDOTA2Teams/AddTeamMember/v0001`,
                                { params: n }
                              );
                              H(), setTimeout(() => i(!1), g);
                            }),
                        },
                        m.createElement(
                          "h2",
                          { className: y().Header },
                          "Add Team Member"
                        ),
                        m.createElement(
                          "div",
                          { className: y().EditInfoGrid },
                          m.createElement("div", null, "Account ID"),
                          m.createElement("input", {
                            className: y().MediumTextField,
                            type: "text",
                            name: "accountId",
                            maxLength: 20,
                            onChange: (e) => t(e.target.value),
                          }),
                          m.createElement(
                            "div",
                            null,
                            m.createElement(
                              "button",
                              { className: y().SubmitButton, disabled: l },
                              l ? "Adding..." : "Add Account"
                            )
                          )
                        )
                      );
                    },
                    { strTeamId: a }
                  )
                ),
              m.createElement("div", { className: y().SmoothLine }),
              m.createElement("h2", { className: y().Header }, "Members"),
              m.createElement(
                "div",
                {
                  className: y().MembersGrid,
                  style: {
                    gridTemplateColumns: `250px repeat(${h.length - 1}, auto)`,
                  },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  h.map((e) =>
                    m.createElement(
                      "div",
                      { key: `${e.key}-members-grid-header}` },
                      m.createElement("b", null, e.displayName || e.key)
                    )
                  )
                ),
                m.createElement(
                  m.Fragment,
                  null,
                  !!J.length &&
                    J.map((e) =>
                      h.map((a) =>
                        m.createElement(
                          "div",
                          { key: `${a.key}-member-row-${e.account_id}` },
                          a.formatFunction
                            ? a.formatFunction.call(null, e[a.key], H)
                            : JSON.stringify(e[a.key] || "", null, 2).replace(
                                /['"]+/g,
                                ""
                              )
                        )
                      )
                    ),
                  !J.length && m.createElement("div", null, "No team members.")
                )
              ),
              m.createElement("br", null),
              m.createElement(
                "div",
                {
                  className: y().ManagerGrid,
                  style: {
                    gridTemplateColumns: `250px repeat(${R.length - 1}, auto)`,
                  },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  R.map((e) =>
                    m.createElement(
                      "div",
                      { key: `${e.key}-manager-grid-header}` },
                      m.createElement("b", null, e.displayName || e.key)
                    )
                  )
                ),
                m.createElement(
                  m.Fragment,
                  null,
                  R.map((e) =>
                    m.createElement(
                      m.Fragment,
                      { key: `${e.key}-manager-row` },
                      m.createElement(
                        "div",
                        null,
                        e.formatFunction
                          ? e.formatFunction.call(null, V[e.key])
                          : JSON.stringify(V[e.key] || "", null, 2).replace(
                              /['"]+/g,
                              ""
                            )
                      )
                    )
                  ),
                  !R.length && m.createElement("div", null, "No manager.")
                )
              ),
              Y &&
                m.createElement(
                  m.Fragment,
                  null,
                  m.createElement("div", { className: y().SmoothLine }),
                  m.createElement(
                    ({ strTeamId: e }) => {
                      const [a, t] = (0, m.useState)(""),
                        [l, i] = (0, m.useState)(""),
                        [s, c] = (0, m.useState)(!1);
                      return m.createElement(
                        "form",
                        {
                          onSubmit: (e) =>
                            (0, n.mG)(void 0, void 0, void 0, function* () {
                              if ((e.preventDefault(), !a || !l)) return;
                              c(!0);
                              const t = {
                                admin_account_id: parseInt(a),
                                admin_email: l,
                                registration_period:
                                  o.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD,
                              };
                              yield r().post(
                                `${o.Y.BASE_URL}webapi/IDOTA2Teams/UpdateRegisteredTeamData/v0001?u=${f}&appid=${o.Y.DOTA_APP_ID}`,
                                { params: t }
                              );
                              K(), setTimeout(() => c(!1), g);
                            }),
                        },
                        m.createElement(
                          "h2",
                          { className: y().Header },
                          "Update Manager Email"
                        ),
                        m.createElement(
                          "div",
                          { className: y().EditInfoGrid },
                          m.createElement("div", null, "Manager Account ID"),
                          m.createElement("input", {
                            className: y().MediumTextField,
                            type: "text",
                            name: "adminAccountId",
                            maxLength: 20,
                            onChange: (e) => t(e.target.value),
                          }),
                          m.createElement("div", null, "Manager Email"),
                          m.createElement("input", {
                            className: y().MediumTextField,
                            type: "email",
                            name: "adminEmail",
                            maxLength: 255,
                            onChange: (e) => i(e.target.value),
                          }),
                          m.createElement(
                            "div",
                            null,
                            m.createElement(
                              "button",
                              { className: y().SubmitButton, disabled: s },
                              s ? "Updating..." : "Update Manager Email"
                            )
                          )
                        )
                      );
                    },
                    { strTeamId: a }
                  )
                ),
              m.createElement("div", { className: y().SmoothLine }),
              m.createElement(
                "h2",
                { className: y().Header },
                "Logos & Colors"
              ),
              m.createElement(
                "div",
                { className: y().LogoAndColorsGrid },
                I.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-logo-colors-row` },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(null, N[e.key], N.team_id)
                        : JSON.stringify(N[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  )
                )
              ),
              m.createElement("br", null),
              m.createElement(
                "div",
                {
                  className: y().UGCLogosGrid,
                  style: { gridTemplateColumns: `repeat(${F.length}, auto)` },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  F.map((e) =>
                    m.createElement(
                      "div",
                      { key: `${e.key}-ugc-grid-header}` },
                      m.createElement("b", null, e.displayName || e.key)
                    )
                  )
                ),
                m.createElement(
                  m.Fragment,
                  null,
                  F.map((e) =>
                    m.createElement(
                      "div",
                      { key: `${e.key}-ugc-logo` },
                      e.formatFunction
                        ? e.formatFunction.call(null, N[e.key])
                        : JSON.stringify(N[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  )
                )
              ),
              m.createElement("div", { className: y().SmoothLine }),
              m.createElement(
                "h2",
                { className: y().Header },
                "Audit Action History"
              ),
              m.createElement(
                "div",
                {
                  className: y().AuditActionsGrid,
                  style: { gridTemplateColumns: `repeat(${S.length}, auto)` },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  S.map((e) =>
                    m.createElement(
                      "div",
                      {
                        key: `${e.key}-${e.displayName}-audit-action-grid-header`,
                      },
                      m.createElement("b", null, e.displayName || e.key)
                    )
                  )
                ),
                m.createElement(
                  m.Fragment,
                  null,
                  !!W.length &&
                    W.map((e) =>
                      S.map((a) =>
                        m.createElement(
                          "div",
                          { key: `${a.key}-${a.displayName}-${e.timestamp}` },
                          a.formatFunction
                            ? a.formatFunction.call(
                                null,
                                e[a.key],
                                e.player_name,
                                e.target_manager_name
                              )
                            : JSON.stringify(e[a.key] || "", null, 2).replace(
                                /['"]+/g,
                                ""
                              )
                        )
                      )
                    ),
                  !W.length && m.createElement("div", null, "No audit actions.")
                )
              ),
              m.createElement("div", { className: y().SmoothLine }),
              m.createElement(
                "h2",
                { className: y().Header },
                "Supporters Club / Workshop Status"
              ),
              m.createElement(
                "div",
                { className: y().WorkshopStatusGrid },
                L.map((e) =>
                  m.createElement(
                    m.Fragment,
                    { key: `${e.key}-workshop-status-row` },
                    m.createElement("div", null, e.displayName || e.key),
                    m.createElement(
                      "div",
                      null,
                      e.formatFunction
                        ? e.formatFunction.call(null, P[e.key])
                        : JSON.stringify(P[e.key] || "", null, 2).replace(
                            /['"]+/g,
                            ""
                          )
                    )
                  )
                )
              ),
              m.createElement("div", { className: y().SmoothLine }),
              m.createElement(
                "h2",
                { className: (0, c.Z)(y().Header, y().SeasonMatchHeader) },
                `Season ${o.Y.DOTA_LEAGUE_CURRENT_REGISTRATION_PERIOD} Matches`
              ),
              m.createElement(
                "div",
                {
                  className: y().MatchesGrid,
                  style: { gridTemplateColumns: `repeat(${C.length}, auto)` },
                },
                m.createElement(
                  m.Fragment,
                  null,
                  (() => {
                    const e = [];
                    return (
                      Object.keys(w).forEach((a, t) => {
                        e.push(
                          m.createElement(
                            "h3",
                            {
                              key: `league-name-row-${t}`,
                              style: { gridColumn: `span ${C.length}` },
                            },
                            m.createElement("b", null, a)
                          )
                        ),
                          e.push(
                            C.map((e) =>
                              m.createElement(
                                "div",
                                {
                                  key: `${e.key}-${e.displayName}-matches-grid-header-league-${t}`,
                                },
                                m.createElement(
                                  "b",
                                  null,
                                  e.displayName || e.key
                                )
                              )
                            )
                          );
                        for (let t of w[a])
                          e.push(
                            C.map((e) =>
                              m.createElement(
                                "div",
                                {
                                  key: `${e.key}-${e.displayName}-${t.series_id}`,
                                },
                                e.formatFunction
                                  ? e.formatFunction.call(
                                      null,
                                      t[e.key],
                                      q(t.opponent_team_id)
                                    )
                                  : JSON.stringify(
                                      t[e.key] || "",
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
                    m.createElement(
                      "div",
                      null,
                      m.createElement("br", null),
                      "No league matches."
                    )
                )
              ),
              m.createElement("br", null)
            ),
            m.createElement(u.U, null)
          );
        };
      class G extends m.Component {
        render() {
          return m.createElement(O, null);
        }
      }
    },
  },
]);

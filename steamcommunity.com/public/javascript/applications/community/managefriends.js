/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9129],
  {
    91640: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Heading: "_3kTQIYYiQiVR_DeJepkOwJ",
        Body: "_2s393FLIe2l5quVJHoS53K",
        HeaderBlock: "X9bYNT3rKpg6L1Cgq45pG",
        Background: "_1xwi06sEKXpwIpZcgHle_h",
        DimBackground: "_2N55HNCo3jLIzL6RNNlRUo",
        Input: "_1BUtyMrOPfXVpnfK-Z5OnA",
        CopyContainer: "_1HjkZ3ooQw-4TV518YPtvp",
        Text: "_1ehqRyqgPLFNoFwFifHPPR",
        Link: "_18Sc08YQfmAIVx8H1h8A1V",
        Button: "_2772E6skxrFIemLRdp0EKv",
        GenerateLinkButton: "T52tUwptWdakIKgaAVn3i",
        ProfileCard: "_28a_CNvDls7VgWoPW2-9Kz",
        UserContainer: "_29w-2Eb_kk-viSqGW8RTn2",
        Image: "_1n4lDOfOQzOhvshIPt1UWT",
        ProfileContent: "_1qz9xLw5YttjO8gVfuMwS",
        ProfileLink: "_1tEt0fYckNbFAqGLEfrsfj",
        Failure: "UoMCo-OvninFBFozRomeh",
        Success: "zNkywkFbUJio86FBwBWwx",
        FriendCodeSelector: "_3nmSpgo_T_V0-Er7h8J2Ar",
        SendInviteButton: "kcAlkPA1uhcWs_5eatvVd",
      };
    },
    50463: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => a });
      var n = s(90626),
        r = s(19369);
      function a() {
        return n.createElement(r.Bv, null);
      }
    },
    19369: (e, t, s) => {
      "use strict";
      s.d(t, { jl: () => w, Bv: () => I });
      var n = s(34629),
        r = s(90626),
        a = s(56093),
        i = s(41735),
        o = s.n(i),
        c = s(7068),
        l = s(61859),
        d = s(91640),
        m = s.n(d),
        u = s(78327),
        p = s(17720),
        _ = s(56011),
        h = s(14947),
        g = s(85044),
        f = s(44332);
      s(68797);
      class v {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, h.Gn)(this);
        }
        async LoadProfiles(e, t) {
          (0, f.w)(
            e.length <= 500,
            "Check LoadProfiles, requesting too many steam IDs",
          );
          let s = e.filter(
            (e) =>
              !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
          );
          if (0 == s.length) return this.m_mapProfilesLoading.get(e[0]);
          let n = u.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
            r = o().get(n, {
              params: { steamids: s.join(",") },
              withCredentials: !0,
              cancelToken: null == t ? void 0 : t.token,
            });
          s.forEach((e) => this.m_mapProfilesLoading.set(e, r));
          let a = await r;
          a.data &&
            200 == a.status &&
            a.data.forEach((e) => {
              (e.avatar_hash = e.avatar_url),
                (e.avatar_url_medium = (0, g.t)(e.avatar_url, "medium")),
                (e.avatar_url_full = (0, g.t)(e.avatar_url, "full")),
                (e.avatar_url = (0, g.t)(e.avatar_url)),
                this.m_mapProfiles.set(e.steamid, e),
                this.m_mapProfilesLoading.delete(e.steamid);
            });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            p.b.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        GetProfileBySteamID(e) {
          return this.m_mapProfiles.get(e.ConvertTo64BitString());
        }
        BHasProfile(e) {
          return this.m_mapProfiles.has(e);
        }
        BHasProfileByAccountID(e) {
          return this.m_mapProfiles.has(
            p.b.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        BHasAllProfilesBySteamID(e) {
          return !e.some((e) => !this.BHasProfileBySteamID(e));
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? u.TS.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : u.TS.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, n.Cg)([h.sH], v.prototype, "m_mapProfiles", void 0);
      const C = new v();
      var S = s(12155),
        E = s(71513);
      class I extends r.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              invite_token: "",
              input_search: "",
              friend_code_copied: !1,
              invite_copied: !1,
            });
        }
        async componentDidMount() {
          const e = await o().get(
            u.TS.COMMUNITY_BASE_URL + "invites/ajaxgetall",
            { params: { sessionid: u.TS.SESSIONID } },
          );
          if (e && e.data && e.data.tokens) {
            const t = e.data.tokens.filter((e) => e.valid);
            t.length
              ? this.setState({ invite_token: t[0].invite_token })
              : this.OnCreateInviteLink();
          } else this.OnCreateInviteLink();
        }
        async OnCreateInviteLink() {
          const e = new FormData();
          e.append("sessionid", u.TS.SESSIONID),
            e.append("steamid_user", u.iA.steamid),
            e.append("duration", (2592e3).toString());
          const t = await o().post(
            u.TS.COMMUNITY_BASE_URL + "invites/ajaxcreate",
            e,
          );
          t &&
            t.data &&
            t.data.invite &&
            this.setState({ invite_token: t.data.invite.invite_token });
        }
        OnCopy(e, t) {
          "friend_code" === e &&
            (this.setState({ friend_code_copied: !0 }),
            setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
            "invite" === e &&
              (this.setState({ invite_copied: !0 }),
              setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
            (0, _.OG)(t);
        }
        async OnAddFriend(e) {
          const t = new FormData();
          t.append("sessionID", u.TS.SESSIONID),
            t.append("steamid", e),
            t.append("accept_invite", "0");
          try {
            const e = await o().post(
              u.TS.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
              t,
            );
            return e && e.data && 1 == e.data.success;
          } catch {
            return !1;
          }
        }
        OnSearchChange(e) {
          this.setState({ input_search: e.target.value });
        }
        OnSearchKeyDown(e) {
          13 === e.keyCode && this.OnSearchSubmit();
        }
        OnSearchSubmit() {
          window.open(
            u.TS.COMMUNITY_BASE_URL +
              "search/users/#text=" +
              encodeURIComponent(this.state.input_search),
            "_self",
          );
        }
        render() {
          const e = u.iA.short_url + "/" + this.state.invite_token;
          return r.createElement(
            "div",
            null,
            r.createElement(
              "div",
              { className: m().HeaderBlock },
              (0, l.we)("#ManageFriends_AddAFriend"),
            ),
            r.createElement(
              "div",
              { className: m().Background },
              r.createElement(
                "h1",
                { className: m().Heading },
                (0, l.we)("#ManageFriends_YourFriendCode"),
              ),
              r.createElement(
                "div",
                { className: m().CopyContainer },
                r.createElement("h1", { className: m().Text }, u.iA.accountid),
                r.createElement(
                  c.jn,
                  {
                    autoFocus: !0,
                    className: m().Button,
                    onClick: () =>
                      this.OnCopy("friend_code", String(u.iA.accountid)),
                  },
                  this.state.friend_code_copied
                    ? (0, l.we)("#ManageFriends_Copied")
                    : (0, l.we)("#ManageFriends_Copy"),
                ),
              ),
              r.createElement(
                "p",
                { className: m().Body },
                (0, l.we)("#ManageFriends_EnterFriendCode"),
              ),
              r.createElement(w, {
                onButtonClick: this.OnAddFriend,
                buttonText: (0, l.we)("#ManageFriends_SendInvite"),
                bDisableForSelf: !0,
                bDisableForFriends: !0,
                bShowStatus: !0,
              }),
            ),
            r.createElement(
              "div",
              { className: m().DimBackground },
              r.createElement(
                "h1",
                { className: m().Heading },
                (0, l.we)("#ManageFriends_OrSendQuickInvite"),
              ),
              r.createElement(
                "p",
                { className: m().Body },
                (0, l.we)("#ManageFriends_QuickInviteDescription"),
              ),
              r.createElement(
                "p",
                { className: m().Body },
                (0, l.we)("#ManageFriends_QuickInviteNote"),
              ),
              r.createElement(
                "div",
                { className: m().CopyContainer },
                Boolean(this.state.invite_token) &&
                  r.createElement("div", { className: m().Link }, e),
                r.createElement(
                  c.jn,
                  {
                    className: m().Button,
                    onClick: () => this.OnCopy("invite", e),
                  },
                  this.state.invite_copied
                    ? (0, l.we)("#ManageFriends_Copied")
                    : (0, l.we)("#ManageFriends_Copy"),
                ),
              ),
              r.createElement(
                c.$n,
                {
                  className: m().GenerateLinkButton,
                  onClick: this.OnCreateInviteLink,
                },
                (0, l.we)("#ManageFriends_CreateInviteLink"),
              ),
            ),
            r.createElement(
              "div",
              { className: m().Background },
              r.createElement(
                "h1",
                { className: m().Heading },
                (0, l.we)("#ManageFriends_OrSearch"),
              ),
              r.createElement("br", null),
              r.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "598px",
                    position: "relative",
                  },
                },
                r.createElement(
                  "div",
                  { style: { width: "100%" } },
                  r.createElement(c.pd, {
                    className: m().Input,
                    onKeyDown: this.OnSearchKeyDown,
                    value: this.state.input_search,
                    onChange: this.OnSearchChange,
                    placeholder: (0, l.we)("#ManageFriends_EnterProfileName"),
                  }),
                ),
                r.createElement(
                  "div",
                  {
                    id: "searchIcon",
                    style: {
                      position: "absolute",
                      right: "10px",
                      cursor: "pointer",
                    },
                    onClick: this.OnSearchSubmit,
                  },
                  r.createElement(S.eSy, null),
                ),
              ),
            ),
          );
        }
      }
      (0, n.Cg)([a.oI], I.prototype, "OnCreateInviteLink", null),
        (0, n.Cg)([a.oI], I.prototype, "OnCopy", null),
        (0, n.Cg)([a.oI], I.prototype, "OnAddFriend", null),
        (0, n.Cg)([a.oI], I.prototype, "OnSearchChange", null),
        (0, n.Cg)([a.oI], I.prototype, "OnSearchKeyDown", null),
        (0, n.Cg)([a.oI], I.prototype, "OnSearchSubmit", null);
      class w extends r.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              input_friend_code: "",
              disable_send_invite: !1,
              searchResult: null,
              invite_status: "pending",
            }),
            (this.m_currentRequest = 0);
        }
        async OnFriendCodeChange(e) {
          const t = e.target.value.split(",")[0];
          this.setState({ input_friend_code: t, invite_status: "pending" }),
            window.clearTimeout(this.m_currentRequest),
            (this.m_currentRequest = window.setTimeout(
              () => this.LoadProfile(t),
              500,
            ));
        }
        async LoadProfile(e) {
          if (e) {
            const t = p.b.InitFromAccountID(Number(e));
            await C.LoadProfiles([t.ConvertTo64BitString()]);
            const s = C.GetProfile(t.ConvertTo64BitString());
            s
              ? this.setState({
                  searchResult: s,
                  disable_send_invite:
                    u.iA.is_limited ||
                    (this.props.bDisableForFriends && s.is_friend) ||
                    (this.props.bDisableForSelf && s.steamid === u.iA.steamid),
                })
              : this.setState({ searchResult: null });
          } else this.setState({ searchResult: null });
        }
        async OnActionClick(e) {
          const t = new FormData();
          t.append("sessionID", u.TS.SESSIONID),
            t.append("steamid", e),
            t.append("accept_invite", "0"),
            this.setState({ disable_send_invite: !0 });
          (await this.props.onButtonClick(e))
            ? (this.setState({
                input_friend_code: "",
                invite_status: "success",
              }),
              setTimeout(() => this.setState({ searchResult: null }), 3e3))
            : this.setState({
                invite_status: "failure",
                disable_send_invite: !1,
              });
        }
        render() {
          return r.createElement(
            "div",
            { className: m().FriendCodeSelector },
            r.createElement(c.pd, {
              className: m().Input,
              value: this.state.input_friend_code,
              onChange: this.OnFriendCodeChange,
              placeholder: (0, l.we)(
                "#ManageFriends_EnterFriendCodePlaceholder",
              ),
            }),
            r.createElement(
              k,
              {
                searchResult: this.state.searchResult,
                invite_status: this.state.invite_status,
                bShowStatus: this.props.bShowStatus,
              },
              r.createElement(
                c.jn,
                {
                  className: m().SendInviteButton,
                  onClick: () =>
                    this.OnActionClick(this.state.searchResult.steamid),
                  disabled: this.state.disable_send_invite,
                },
                this.props.buttonText,
              ),
            ),
          );
        }
      }
      (0, n.Cg)([a.oI], w.prototype, "OnFriendCodeChange", null),
        (0, n.Cg)([a.oI], w.prototype, "LoadProfile", null),
        (0, n.Cg)([a.oI], w.prototype, "OnActionClick", null);
      const k = (e) => {
        const {
            searchResult: t,
            invite_status: s,
            bShowStatus: n,
            children: a,
          } = e,
          i = (0, u.Qn)();
        return Boolean(t)
          ? r.createElement(
              "div",
              { className: m().ProfileCard },
              r.createElement(
                "div",
                { className: m().UserContainer },
                r.createElement(
                  "div",
                  { className: m().Image },
                  r.createElement("img", {
                    style: { width: "100%", height: "100%" },
                    src: t.avatar_url_full,
                  }),
                ),
                r.createElement(
                  "div",
                  { className: m().ProfileContent },
                  r.createElement(
                    "h1",
                    { className: m().Heading },
                    t.persona_name,
                  ),
                  r.createElement(
                    "div",
                    { className: m().ProfileLink },
                    r.createElement(
                      E.Ii,
                      {
                        target: i ? void 0 : "_blank",
                        href: u.TS.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
                      },
                      (0, l.we)("#ManageFriends_ProfileLink"),
                    ),
                    r.createElement("br", null),
                    r.createElement(
                      "span",
                      { className: m().Body },
                      t.real_name,
                      r.createElement("br", null),
                      `${t.city}${t.city ? "," : ""} ${t.state}${t.state ? "," : ""} ${t.country}`,
                    ),
                  ),
                ),
                a,
              ),
              r.createElement(
                "div",
                { className: m().ProfileLink },
                t.is_friend &&
                  r.createElement(
                    "div",
                    null,
                    (0, l.we)("#ManageFriends_IsFriend"),
                  ),
                0 != t.friends_in_common &&
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      E.Ii,
                      {
                        target: i ? void 0 : "_blank",
                        href:
                          u.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          t.steamid +
                          "/friendscommon",
                      },
                      1 === t.friends_in_common
                        ? (0, l.we)(
                            "#ManageFriends_FriendsInCommonSingular",
                            t.friends_in_common,
                          )
                        : (0, l.we)(
                            "#ManageFriends_FriendsInCommon",
                            t.friends_in_common,
                          ),
                    ),
                  ),
                n &&
                  "failure" === s &&
                  r.createElement(
                    "div",
                    { className: m().Failure },
                    (0, l.we)("#ManageFriends_InviteFailure"),
                  ),
                n &&
                  "success" === s &&
                  r.createElement(
                    "div",
                    { className: m().Success },
                    (0, l.we)("#ManageFriends_InviteSuccess", t.persona_name),
                  ),
              ),
            )
          : null;
      };
    },
    68797: (e, t, s) => {
      "use strict";
      s.d(t, { H: () => i });
      var n = s(41735),
        r = s.n(n),
        a = s(56545);
      function i(e) {
        if (r().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.w)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
  },
]);

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
    50463: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var a = n(90626),
        i = n(19369);
      function s() {
        return a.createElement(i.Bv, null);
      }
    },
    85044: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => i, t: () => s });
      var a = n(78327);
      const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = i),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        let s = a.TS.AVATAR_BASE_URL;
        return (
          s ||
            ((s = a.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (s += e.substr(0, 2) + "/")),
          (s += e),
          t && "small" != t && (s += "_" + t),
          (s += n),
          s
        );
      }
    },
    19369: (e, t, n) => {
      "use strict";
      n.d(t, { jl: () => k, Bv: () => E });
      var a = n(34629),
        i = n(90626),
        s = n(73745),
        r = n(41735),
        o = n.n(r),
        l = n(68255),
        c = n(61859),
        d = n(91640),
        m = n.n(d),
        u = n(78327),
        _ = n(17720),
        p = n(56011),
        h = n(14947),
        S = n(85044),
        v = n(81393);
      n(68797);
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, h.Gn)(this);
        }
        async LoadProfiles(e, t) {
          (0, v.wT)(
            e.length <= 500,
            "Check LoadProfiles, requesting too many steam IDs",
          );
          let n = e.filter(
            (e) =>
              !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
          );
          if (0 == n.length) return this.m_mapProfilesLoading.get(e[0]);
          let a = u.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
            i = o().get(a, {
              params: { steamids: n.join(",") },
              withCredentials: !0,
              cancelToken: null == t ? void 0 : t.token,
            });
          n.forEach((e) => this.m_mapProfilesLoading.set(e, i));
          let s = await i;
          s.data &&
            200 == s.status &&
            s.data.forEach((e) => {
              (e.avatar_hash = e.avatar_url),
                (e.avatar_url_medium = (0, S.t)(e.avatar_url, "medium")),
                (e.avatar_url_full = (0, S.t)(e.avatar_url, "full")),
                (e.avatar_url = (0, S.t)(e.avatar_url)),
                this.m_mapProfiles.set(e.steamid, e),
                this.m_mapProfilesLoading.delete(e.steamid);
            });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            _.b.InitFromAccountID(e).ConvertTo64BitString(),
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
            _.b.InitFromAccountID(e).ConvertTo64BitString(),
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
      (0, a.Cg)([h.sH], f.prototype, "m_mapProfiles", void 0);
      const g = new f();
      var C = n(12155),
        I = n(45699);
      class E extends i.Component {
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
            (0, p.OG)(t);
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
          return i.createElement(
            "div",
            null,
            i.createElement(
              "div",
              { className: m().HeaderBlock },
              (0, c.we)("#ManageFriends_AddAFriend"),
            ),
            i.createElement(
              "div",
              { className: m().Background },
              i.createElement(
                "h1",
                { className: m().Heading },
                (0, c.we)("#ManageFriends_YourFriendCode"),
              ),
              i.createElement(
                "div",
                { className: m().CopyContainer },
                i.createElement("h1", { className: m().Text }, u.iA.accountid),
                i.createElement(
                  l.jn,
                  {
                    autoFocus: !0,
                    className: m().Button,
                    onClick: () =>
                      this.OnCopy("friend_code", String(u.iA.accountid)),
                  },
                  this.state.friend_code_copied
                    ? (0, c.we)("#ManageFriends_Copied")
                    : (0, c.we)("#ManageFriends_Copy"),
                ),
              ),
              i.createElement(
                "p",
                { className: m().Body },
                (0, c.we)("#ManageFriends_EnterFriendCode"),
              ),
              i.createElement(k, {
                onButtonClick: this.OnAddFriend,
                buttonText: (0, c.we)("#ManageFriends_SendInvite"),
                bDisableForSelf: !0,
                bDisableForFriends: !0,
                bShowStatus: !0,
              }),
            ),
            i.createElement(
              "div",
              { className: m().DimBackground },
              i.createElement(
                "h1",
                { className: m().Heading },
                (0, c.we)("#ManageFriends_OrSendQuickInvite"),
              ),
              i.createElement(
                "p",
                { className: m().Body },
                (0, c.we)("#ManageFriends_QuickInviteDescription"),
              ),
              i.createElement(
                "p",
                { className: m().Body },
                (0, c.we)("#ManageFriends_QuickInviteNote"),
              ),
              i.createElement(
                "div",
                { className: m().CopyContainer },
                Boolean(this.state.invite_token) &&
                  i.createElement("div", { className: m().Link }, e),
                i.createElement(
                  l.jn,
                  {
                    className: m().Button,
                    onClick: () => this.OnCopy("invite", e),
                  },
                  this.state.invite_copied
                    ? (0, c.we)("#ManageFriends_Copied")
                    : (0, c.we)("#ManageFriends_Copy"),
                ),
              ),
              i.createElement(
                l.$n,
                {
                  className: m().GenerateLinkButton,
                  onClick: this.OnCreateInviteLink,
                },
                (0, c.we)("#ManageFriends_CreateInviteLink"),
              ),
            ),
            i.createElement(
              "div",
              { className: m().Background },
              i.createElement(
                "h1",
                { className: m().Heading },
                (0, c.we)("#ManageFriends_OrSearch"),
              ),
              i.createElement("br", null),
              i.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "598px",
                    position: "relative",
                  },
                },
                i.createElement(
                  "div",
                  { style: { width: "100%" } },
                  i.createElement(l.pd, {
                    className: m().Input,
                    onKeyDown: this.OnSearchKeyDown,
                    value: this.state.input_search,
                    onChange: this.OnSearchChange,
                    placeholder: (0, c.we)("#ManageFriends_EnterProfileName"),
                  }),
                ),
                i.createElement(
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
                  i.createElement(C.eSy, null),
                ),
              ),
            ),
          );
        }
      }
      (0, a.Cg)([s.oI], E.prototype, "OnCreateInviteLink", null),
        (0, a.Cg)([s.oI], E.prototype, "OnCopy", null),
        (0, a.Cg)([s.oI], E.prototype, "OnAddFriend", null),
        (0, a.Cg)([s.oI], E.prototype, "OnSearchChange", null),
        (0, a.Cg)([s.oI], E.prototype, "OnSearchKeyDown", null),
        (0, a.Cg)([s.oI], E.prototype, "OnSearchSubmit", null);
      class k extends i.Component {
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
            const t = _.b.InitFromAccountID(Number(e));
            await g.LoadProfiles([t.ConvertTo64BitString()]);
            const n = g.GetProfile(t.ConvertTo64BitString());
            n
              ? this.setState({
                  searchResult: n,
                  disable_send_invite:
                    u.iA.is_limited ||
                    (this.props.bDisableForFriends && n.is_friend) ||
                    (this.props.bDisableForSelf && n.steamid === u.iA.steamid),
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
          return i.createElement(
            "div",
            { className: m().FriendCodeSelector },
            i.createElement(l.pd, {
              className: m().Input,
              value: this.state.input_friend_code,
              onChange: this.OnFriendCodeChange,
              placeholder: (0, c.we)(
                "#ManageFriends_EnterFriendCodePlaceholder",
              ),
            }),
            i.createElement(
              w,
              {
                searchResult: this.state.searchResult,
                invite_status: this.state.invite_status,
                bShowStatus: this.props.bShowStatus,
              },
              i.createElement(
                l.jn,
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
      (0, a.Cg)([s.oI], k.prototype, "OnFriendCodeChange", null),
        (0, a.Cg)([s.oI], k.prototype, "LoadProfile", null),
        (0, a.Cg)([s.oI], k.prototype, "OnActionClick", null);
      const w = (e) => {
        const {
            searchResult: t,
            invite_status: n,
            bShowStatus: a,
            children: s,
          } = e,
          r = (0, u.Qn)();
        return Boolean(t)
          ? i.createElement(
              "div",
              { className: m().ProfileCard },
              i.createElement(
                "div",
                { className: m().UserContainer },
                i.createElement(
                  "div",
                  { className: m().Image },
                  i.createElement("img", {
                    style: { width: "100%", height: "100%" },
                    src: t.avatar_url_full,
                  }),
                ),
                i.createElement(
                  "div",
                  { className: m().ProfileContent },
                  i.createElement(
                    "h1",
                    { className: m().Heading },
                    t.persona_name,
                  ),
                  i.createElement(
                    "div",
                    { className: m().ProfileLink },
                    i.createElement(
                      I.Ii,
                      {
                        target: r ? void 0 : "_blank",
                        href: u.TS.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
                      },
                      (0, c.we)("#ManageFriends_ProfileLink"),
                    ),
                    i.createElement("br", null),
                    i.createElement(
                      "span",
                      { className: m().Body },
                      t.real_name,
                      i.createElement("br", null),
                      `${t.city}${t.city ? "," : ""} ${t.state}${t.state ? "," : ""} ${t.country}`,
                    ),
                  ),
                ),
                s,
              ),
              i.createElement(
                "div",
                { className: m().ProfileLink },
                t.is_friend &&
                  i.createElement(
                    "div",
                    null,
                    (0, c.we)("#ManageFriends_IsFriend"),
                  ),
                0 != t.friends_in_common &&
                  i.createElement(
                    "div",
                    null,
                    i.createElement(
                      I.Ii,
                      {
                        target: r ? void 0 : "_blank",
                        href:
                          u.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          t.steamid +
                          "/friendscommon",
                      },
                      1 === t.friends_in_common
                        ? (0, c.we)(
                            "#ManageFriends_FriendsInCommonSingular",
                            t.friends_in_common,
                          )
                        : (0, c.we)(
                            "#ManageFriends_FriendsInCommon",
                            t.friends_in_common,
                          ),
                    ),
                  ),
                a &&
                  "failure" === n &&
                  i.createElement(
                    "div",
                    { className: m().Failure },
                    (0, c.we)("#ManageFriends_InviteFailure"),
                  ),
                a &&
                  "success" === n &&
                  i.createElement(
                    "div",
                    { className: m().Success },
                    (0, c.we)("#ManageFriends_InviteSuccess", t.persona_name),
                  ),
              ),
            )
          : null;
      };
    },
  },
]);

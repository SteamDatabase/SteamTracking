/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8647],
  {
    13116: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Heading: "_1lIY_WGg-62UIbryS5WfiP",
        Body: "_1JDe7oZTCa7k1hylvgWQU1",
        HeaderBlock: "_3n-KUi74Nvym37yTD-ZsSx",
        Background: "OtPIjFzvgvhgBbFjn7amO",
        DimBackground: "_2kSJmpYyTj2gAEH1ZBffgE",
        Input: "BRkPzPAMsrHQSOzSTANuI",
        CopyContainer: "_2r_KSHMwd00BTU5-zhKPQA",
        Text: "_3NGNCHKvU_MuIpOPqB32yz",
        Link: "_3RoxODZBFEObZn4kKK7M_J",
        Button: "_1ARlQegyaQ1xENYcvSXm10",
        GenerateLinkButton: "_1TX0dzrWsVzzA7xx6gO-LJ",
        ProfileCard: "_2a7rsdJGZQpDQ6MyKqiYii",
        UserContainer: "vSokQZiyW2uoJ4XQ13If",
        Image: "vQTKBkWkaPy5_Jz4Xho8A",
        ProfileContent: "_29EO2NiT6EwmtrmnZ8acvQ",
        ProfileLink: "_14jbpUFs9QSgr8Iy_vP3gw",
        Failure: "_30nEPnTnnWdyYZykhZnojB",
        Success: "_1NPlBX3In8Dz7lxnySxuy4",
        FriendCodeSelector: "_35N5FeLM1pdhtNpkUkBHTB",
        SendInviteButton: "_3Izq1wTe9iIDhovEOVfYji",
      };
    },
    79896: (e, t, s) => {
      "use strict";
      s.d(t, { aX: () => I, gu: () => y });
      var n = s(85556),
        a = s(47427),
        r = s(20417),
        i = s(80751),
        o = s.n(i),
        c = s(1485),
        l = s(31846),
        d = s(13116),
        m = s.n(d),
        u = s(37563),
        p = s(35427),
        _ = s(50423),
        h = s(54842),
        g = s(48760),
        v = s(62210);
      s(16649);
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, h.rC)(this);
        }
        async LoadProfiles(e, t) {
          (0, v.X)(
            e.length <= 500,
            "Check LoadProfiles, requesting too many steam IDs",
          );
          let s = e.filter(
            (e) =>
              !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
          );
          if (0 == s.length) return this.m_mapProfilesLoading.get(e[0]);
          let n = u.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
            a = o().get(n, {
              params: { steamids: s.join(",") },
              withCredentials: !0,
              cancelToken: null == t ? void 0 : t.token,
            });
          s.forEach((e) => this.m_mapProfilesLoading.set(e, a));
          let r = await a;
          r.data &&
            200 == r.status &&
            r.data.forEach((e) => {
              (e.avatar_hash = e.avatar_url),
                (e.avatar_url_medium = (0, g.U)(e.avatar_url, "medium")),
                (e.avatar_url_full = (0, g.U)(e.avatar_url, "full")),
                (e.avatar_url = (0, g.U)(e.avatar_url)),
                this.m_mapProfiles.set(e.steamid, e),
                this.m_mapProfilesLoading.delete(e.steamid);
            });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            p.K.InitFromAccountID(e).ConvertTo64BitString(),
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
            p.K.InitFromAccountID(e).ConvertTo64BitString(),
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
            ? u.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : u.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, n.gn)([h.LO], f.prototype, "m_mapProfiles", void 0);
      const C = new f();
      var S = s(62613),
        E = s(82493);
      class y extends a.Component {
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
            u.De.COMMUNITY_BASE_URL + "invites/ajaxgetall",
            { params: { sessionid: u.De.SESSIONID } },
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
          e.append("sessionid", u.De.SESSIONID),
            e.append("steamid_user", u.L7.steamid),
            e.append("duration", (2592e3).toString());
          const t = await o().post(
            u.De.COMMUNITY_BASE_URL + "invites/ajaxcreate",
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
            (0, _.Ei)(t);
        }
        async OnAddFriend(e) {
          const t = new FormData();
          t.append("sessionID", u.De.SESSIONID),
            t.append("steamid", e),
            t.append("accept_invite", "0");
          try {
            const e = await o().post(
              u.De.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
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
            u.De.COMMUNITY_BASE_URL +
              "search/users/#text=" +
              encodeURIComponent(this.state.input_search),
            "_self",
          );
        }
        render() {
          const e = u.L7.short_url + "/" + this.state.invite_token;
          return a.createElement(
            "div",
            null,
            a.createElement(
              "div",
              { className: m().HeaderBlock },
              (0, l.Xx)("#ManageFriends_AddAFriend"),
            ),
            a.createElement(
              "div",
              { className: m().Background },
              a.createElement(
                "h1",
                { className: m().Heading },
                (0, l.Xx)("#ManageFriends_YourFriendCode"),
              ),
              a.createElement(
                "div",
                { className: m().CopyContainer },
                a.createElement("h1", { className: m().Text }, u.L7.accountid),
                a.createElement(
                  c.KM,
                  {
                    autoFocus: !0,
                    className: m().Button,
                    onClick: () =>
                      this.OnCopy("friend_code", String(u.L7.accountid)),
                  },
                  this.state.friend_code_copied
                    ? (0, l.Xx)("#ManageFriends_Copied")
                    : (0, l.Xx)("#ManageFriends_Copy"),
                ),
              ),
              a.createElement(
                "p",
                { className: m().Body },
                (0, l.Xx)("#ManageFriends_EnterFriendCode"),
              ),
              a.createElement(I, {
                onButtonClick: this.OnAddFriend,
                buttonText: (0, l.Xx)("#ManageFriends_SendInvite"),
                bDisableForSelf: !0,
                bDisableForFriends: !0,
                bShowStatus: !0,
              }),
            ),
            a.createElement(
              "div",
              { className: m().DimBackground },
              a.createElement(
                "h1",
                { className: m().Heading },
                (0, l.Xx)("#ManageFriends_OrSendQuickInvite"),
              ),
              a.createElement(
                "p",
                { className: m().Body },
                (0, l.Xx)("#ManageFriends_QuickInviteDescription"),
              ),
              a.createElement(
                "p",
                { className: m().Body },
                (0, l.Xx)("#ManageFriends_QuickInviteNote"),
              ),
              a.createElement(
                "div",
                { className: m().CopyContainer },
                Boolean(this.state.invite_token) &&
                  a.createElement("div", { className: m().Link }, e),
                a.createElement(
                  c.KM,
                  {
                    className: m().Button,
                    onClick: () => this.OnCopy("invite", e),
                  },
                  this.state.invite_copied
                    ? (0, l.Xx)("#ManageFriends_Copied")
                    : (0, l.Xx)("#ManageFriends_Copy"),
                ),
              ),
              a.createElement(
                c.zx,
                {
                  className: m().GenerateLinkButton,
                  onClick: this.OnCreateInviteLink,
                },
                (0, l.Xx)("#ManageFriends_CreateInviteLink"),
              ),
            ),
            a.createElement(
              "div",
              { className: m().Background },
              a.createElement(
                "h1",
                { className: m().Heading },
                (0, l.Xx)("#ManageFriends_OrSearch"),
              ),
              a.createElement("br", null),
              a.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "598px",
                    position: "relative",
                  },
                },
                a.createElement(
                  "div",
                  { style: { width: "100%" } },
                  a.createElement(c.II, {
                    className: m().Input,
                    onKeyDown: this.OnSearchKeyDown,
                    value: this.state.input_search,
                    onChange: this.OnSearchChange,
                    placeholder: (0, l.Xx)("#ManageFriends_EnterProfileName"),
                  }),
                ),
                a.createElement(
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
                  a.createElement(S.YtI, null),
                ),
              ),
            ),
          );
        }
      }
      (0, n.gn)([r.ak], y.prototype, "OnCreateInviteLink", null),
        (0, n.gn)([r.ak], y.prototype, "OnCopy", null),
        (0, n.gn)([r.ak], y.prototype, "OnAddFriend", null),
        (0, n.gn)([r.ak], y.prototype, "OnSearchChange", null),
        (0, n.gn)([r.ak], y.prototype, "OnSearchKeyDown", null),
        (0, n.gn)([r.ak], y.prototype, "OnSearchSubmit", null);
      class I extends a.Component {
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
            const t = p.K.InitFromAccountID(Number(e));
            await C.LoadProfiles([t.ConvertTo64BitString()]);
            const s = C.GetProfile(t.ConvertTo64BitString());
            s
              ? this.setState({
                  searchResult: s,
                  disable_send_invite:
                    u.L7.is_limited ||
                    (this.props.bDisableForFriends && s.is_friend) ||
                    (this.props.bDisableForSelf && s.steamid === u.L7.steamid),
                })
              : this.setState({ searchResult: null });
          } else this.setState({ searchResult: null });
        }
        async OnActionClick(e) {
          const t = new FormData();
          t.append("sessionID", u.De.SESSIONID),
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
          return a.createElement(
            "div",
            { className: m().FriendCodeSelector },
            a.createElement(c.II, {
              className: m().Input,
              value: this.state.input_friend_code,
              onChange: this.OnFriendCodeChange,
              placeholder: (0, l.Xx)(
                "#ManageFriends_EnterFriendCodePlaceholder",
              ),
            }),
            a.createElement(
              k,
              {
                searchResult: this.state.searchResult,
                invite_status: this.state.invite_status,
                bShowStatus: this.props.bShowStatus,
              },
              a.createElement(
                c.KM,
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
      (0, n.gn)([r.ak], I.prototype, "OnFriendCodeChange", null),
        (0, n.gn)([r.ak], I.prototype, "LoadProfile", null),
        (0, n.gn)([r.ak], I.prototype, "OnActionClick", null);
      const k = (e) => {
        const {
            searchResult: t,
            invite_status: s,
            bShowStatus: n,
            children: r,
          } = e,
          i = (0, u.id)();
        return Boolean(t)
          ? a.createElement(
              "div",
              { className: m().ProfileCard },
              a.createElement(
                "div",
                { className: m().UserContainer },
                a.createElement(
                  "div",
                  { className: m().Image },
                  a.createElement("img", {
                    style: { width: "100%", height: "100%" },
                    src: t.avatar_url_full,
                  }),
                ),
                a.createElement(
                  "div",
                  { className: m().ProfileContent },
                  a.createElement(
                    "h1",
                    { className: m().Heading },
                    t.persona_name,
                  ),
                  a.createElement(
                    "div",
                    { className: m().ProfileLink },
                    a.createElement(
                      E.IS,
                      {
                        target: i ? void 0 : "_blank",
                        href: u.De.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
                      },
                      (0, l.Xx)("#ManageFriends_ProfileLink"),
                    ),
                    a.createElement("br", null),
                    a.createElement(
                      "span",
                      { className: m().Body },
                      t.real_name,
                      a.createElement("br", null),
                      `${t.city}${t.city ? "," : ""} ${t.state}${t.state ? "," : ""} ${t.country}`,
                    ),
                  ),
                ),
                r,
              ),
              a.createElement(
                "div",
                { className: m().ProfileLink },
                t.is_friend &&
                  a.createElement(
                    "div",
                    null,
                    (0, l.Xx)("#ManageFriends_IsFriend"),
                  ),
                0 != t.friends_in_common &&
                  a.createElement(
                    "div",
                    null,
                    a.createElement(
                      E.IS,
                      {
                        target: i ? void 0 : "_blank",
                        href:
                          u.De.COMMUNITY_BASE_URL +
                          "profiles/" +
                          t.steamid +
                          "/friendscommon",
                      },
                      1 === t.friends_in_common
                        ? (0, l.Xx)(
                            "#ManageFriends_FriendsInCommonSingular",
                            t.friends_in_common,
                          )
                        : (0, l.Xx)(
                            "#ManageFriends_FriendsInCommon",
                            t.friends_in_common,
                          ),
                    ),
                  ),
                n &&
                  "failure" === s &&
                  a.createElement(
                    "div",
                    { className: m().Failure },
                    (0, l.Xx)("#ManageFriends_InviteFailure"),
                  ),
                n &&
                  "success" === s &&
                  a.createElement(
                    "div",
                    { className: m().Success },
                    (0, l.Xx)("#ManageFriends_InviteSuccess", t.persona_name),
                  ),
              ),
            )
          : null;
      };
    },
    16649: (e, t, s) => {
      "use strict";
      s.d(t, { l: () => i });
      var n = s(80751),
        a = s.n(n),
        r = s(79545);
      function i(e) {
        if (a().isCancel(e))
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
            if ("object" == typeof e && e instanceof r.gA)
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
    16567: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => r });
      var n = s(47427),
        a = s(79896);
      function r() {
        return n.createElement(a.gu, null);
      }
    },
  },
]);

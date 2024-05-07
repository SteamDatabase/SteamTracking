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
    79896: (e, t, n) => {
      "use strict";
      n.d(t, { aX: () => y, gu: () => I });
      var s = n(85556),
        r = n(47427),
        a = n(20417),
        i = n(80751),
        o = n.n(i),
        d = n(1485),
        l = n(31846),
        c = n(13116),
        u = n.n(c),
        m = n(37563),
        p = n(35427),
        _ = n(50423),
        h = n(54842),
        g = n(48760),
        v = n(62210);
      n(16649);
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, h.rC)(this);
        }
        LoadProfiles(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            (0, v.X)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let n = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
            );
            if (0 == n.length) return this.m_mapProfilesLoading.get(e[0]);
            let s = m.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              r = o().get(s, {
                params: { steamids: n.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            n.forEach((e) => this.m_mapProfilesLoading.set(e, r));
            let a = yield r;
            a.data &&
              200 == a.status &&
              a.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, g.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, g.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, g.U)(e.avatar_url)),
                  this.m_mapProfiles.set(e.steamid, e),
                  this.m_mapProfilesLoading.delete(e.steamid);
              });
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
            ? m.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : m.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, s.gn)([h.LO], f.prototype, "m_mapProfiles", void 0);
      const C = new f();
      var S = n(62613),
        E = n(82493);
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
        componentDidMount() {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const e = yield o().get(
              m.De.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: m.De.SESSIONID } },
            );
            if (e && e.data && e.data.tokens) {
              const t = e.data.tokens.filter((e) => e.valid);
              t.length
                ? this.setState({ invite_token: t[0].invite_token })
                : this.OnCreateInviteLink();
            } else this.OnCreateInviteLink();
          });
        }
        OnCreateInviteLink() {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const e = new FormData();
            e.append("sessionid", m.De.SESSIONID),
              e.append("steamid_user", m.L7.steamid),
              e.append("duration", (2592e3).toString());
            const t = yield o().post(
              m.De.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              e,
            );
            t &&
              t.data &&
              t.data.invite &&
              this.setState({ invite_token: t.data.invite.invite_token });
          });
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
        OnAddFriend(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", m.De.SESSIONID),
              t.append("steamid", e),
              t.append("accept_invite", "0");
            try {
              const e = yield o().post(
                m.De.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                t,
              );
              return e && e.data && 1 == e.data.success;
            } catch (e) {
              return !1;
            }
          });
        }
        OnSearchChange(e) {
          this.setState({ input_search: e.target.value });
        }
        OnSearchKeyDown(e) {
          13 === e.keyCode && this.OnSearchSubmit();
        }
        OnSearchSubmit() {
          window.open(
            m.De.COMMUNITY_BASE_URL +
              "search/users/#text=" +
              encodeURIComponent(this.state.input_search),
            "_self",
          );
        }
        render() {
          const e = m.L7.short_url + "/" + this.state.invite_token;
          return r.createElement(
            "div",
            null,
            r.createElement(
              "div",
              { className: u().HeaderBlock },
              (0, l.Xx)("#ManageFriends_AddAFriend"),
            ),
            r.createElement(
              "div",
              { className: u().Background },
              r.createElement(
                "h1",
                { className: u().Heading },
                (0, l.Xx)("#ManageFriends_YourFriendCode"),
              ),
              r.createElement(
                "div",
                { className: u().CopyContainer },
                r.createElement("h1", { className: u().Text }, m.L7.accountid),
                r.createElement(
                  d.KM,
                  {
                    autoFocus: !0,
                    className: u().Button,
                    onClick: () =>
                      this.OnCopy("friend_code", String(m.L7.accountid)),
                  },
                  this.state.friend_code_copied
                    ? (0, l.Xx)("#ManageFriends_Copied")
                    : (0, l.Xx)("#ManageFriends_Copy"),
                ),
              ),
              r.createElement(
                "p",
                { className: u().Body },
                (0, l.Xx)("#ManageFriends_EnterFriendCode"),
              ),
              r.createElement(y, {
                onButtonClick: this.OnAddFriend,
                buttonText: (0, l.Xx)("#ManageFriends_SendInvite"),
                bDisableForSelf: !0,
                bDisableForFriends: !0,
                bShowStatus: !0,
              }),
            ),
            r.createElement(
              "div",
              { className: u().DimBackground },
              r.createElement(
                "h1",
                { className: u().Heading },
                (0, l.Xx)("#ManageFriends_OrSendQuickInvite"),
              ),
              r.createElement(
                "p",
                { className: u().Body },
                (0, l.Xx)("#ManageFriends_QuickInviteDescription"),
              ),
              r.createElement(
                "p",
                { className: u().Body },
                (0, l.Xx)("#ManageFriends_QuickInviteNote"),
              ),
              r.createElement(
                "div",
                { className: u().CopyContainer },
                Boolean(this.state.invite_token) &&
                  r.createElement("div", { className: u().Link }, e),
                r.createElement(
                  d.KM,
                  {
                    className: u().Button,
                    onClick: () => this.OnCopy("invite", e),
                  },
                  this.state.invite_copied
                    ? (0, l.Xx)("#ManageFriends_Copied")
                    : (0, l.Xx)("#ManageFriends_Copy"),
                ),
              ),
              r.createElement(
                d.zx,
                {
                  className: u().GenerateLinkButton,
                  onClick: this.OnCreateInviteLink,
                },
                (0, l.Xx)("#ManageFriends_CreateInviteLink"),
              ),
            ),
            r.createElement(
              "div",
              { className: u().Background },
              r.createElement(
                "h1",
                { className: u().Heading },
                (0, l.Xx)("#ManageFriends_OrSearch"),
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
                  r.createElement(d.II, {
                    className: u().Input,
                    onKeyDown: this.OnSearchKeyDown,
                    value: this.state.input_search,
                    onChange: this.OnSearchChange,
                    placeholder: (0, l.Xx)("#ManageFriends_EnterProfileName"),
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
                  r.createElement(S.YtI, null),
                ),
              ),
            ),
          );
        }
      }
      (0, s.gn)([a.ak], I.prototype, "OnCreateInviteLink", null),
        (0, s.gn)([a.ak], I.prototype, "OnCopy", null),
        (0, s.gn)([a.ak], I.prototype, "OnAddFriend", null),
        (0, s.gn)([a.ak], I.prototype, "OnSearchChange", null),
        (0, s.gn)([a.ak], I.prototype, "OnSearchKeyDown", null),
        (0, s.gn)([a.ak], I.prototype, "OnSearchSubmit", null);
      class y extends r.Component {
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
        OnFriendCodeChange(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = e.target.value.split(",")[0];
            this.setState({ input_friend_code: t, invite_status: "pending" }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(t),
                500,
              ));
          });
        }
        LoadProfile(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (e) {
              const t = p.K.InitFromAccountID(Number(e));
              yield C.LoadProfiles([t.ConvertTo64BitString()]);
              const n = C.GetProfile(t.ConvertTo64BitString());
              n
                ? this.setState({
                    searchResult: n,
                    disable_send_invite:
                      m.L7.is_limited ||
                      (this.props.bDisableForFriends && n.is_friend) ||
                      (this.props.bDisableForSelf &&
                        n.steamid === m.L7.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          });
        }
        OnActionClick(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", m.De.SESSIONID),
              t.append("steamid", e),
              t.append("accept_invite", "0"),
              this.setState({ disable_send_invite: !0 });
            (yield this.props.onButtonClick(e))
              ? (this.setState({
                  input_friend_code: "",
                  invite_status: "success",
                }),
                setTimeout(() => this.setState({ searchResult: null }), 3e3))
              : this.setState({
                  invite_status: "failure",
                  disable_send_invite: !1,
                });
          });
        }
        render() {
          return r.createElement(
            "div",
            { className: u().FriendCodeSelector },
            r.createElement(d.II, {
              className: u().Input,
              value: this.state.input_friend_code,
              onChange: this.OnFriendCodeChange,
              placeholder: (0, l.Xx)(
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
                d.KM,
                {
                  className: u().SendInviteButton,
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
      (0, s.gn)([a.ak], y.prototype, "OnFriendCodeChange", null),
        (0, s.gn)([a.ak], y.prototype, "LoadProfile", null),
        (0, s.gn)([a.ak], y.prototype, "OnActionClick", null);
      const k = (e) => {
        const {
            searchResult: t,
            invite_status: n,
            bShowStatus: s,
            children: a,
          } = e,
          i = (0, m.id)();
        return Boolean(t)
          ? r.createElement(
              "div",
              { className: u().ProfileCard },
              r.createElement(
                "div",
                { className: u().UserContainer },
                r.createElement(
                  "div",
                  { className: u().Image },
                  r.createElement("img", {
                    style: { width: "100%", height: "100%" },
                    src: t.avatar_url_full,
                  }),
                ),
                r.createElement(
                  "div",
                  { className: u().ProfileContent },
                  r.createElement(
                    "h1",
                    { className: u().Heading },
                    t.persona_name,
                  ),
                  r.createElement(
                    "div",
                    { className: u().ProfileLink },
                    r.createElement(
                      E.IS,
                      {
                        target: i ? void 0 : "_blank",
                        href: m.De.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
                      },
                      (0, l.Xx)("#ManageFriends_ProfileLink"),
                    ),
                    r.createElement("br", null),
                    r.createElement(
                      "span",
                      { className: u().Body },
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
                { className: u().ProfileLink },
                t.is_friend &&
                  r.createElement(
                    "div",
                    null,
                    (0, l.Xx)("#ManageFriends_IsFriend"),
                  ),
                0 != t.friends_in_common &&
                  r.createElement(
                    "div",
                    null,
                    r.createElement(
                      E.IS,
                      {
                        target: i ? void 0 : "_blank",
                        href:
                          m.De.COMMUNITY_BASE_URL +
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
                s &&
                  "failure" === n &&
                  r.createElement(
                    "div",
                    { className: u().Failure },
                    (0, l.Xx)("#ManageFriends_InviteFailure"),
                  ),
                s &&
                  "success" === n &&
                  r.createElement(
                    "div",
                    { className: u().Success },
                    (0, l.Xx)("#ManageFriends_InviteSuccess", t.persona_name),
                  ),
              ),
            )
          : null;
      };
    },
    16649: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => i });
      var s = n(80751),
        r = n.n(s),
        a = n(79545);
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
            if ("object" == typeof e && e instanceof a.gA)
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
    16567: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => a });
      var s = n(47427),
        r = n(79896);
      function a() {
        return s.createElement(r.gu, null);
      }
    },
  },
]);

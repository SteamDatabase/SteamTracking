/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9924],
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
      n.d(t, { aX: () => k, gu: () => E });
      var i = n(85556),
        a = n(47427),
        s = n(20417),
        r = n(80751),
        o = n.n(r),
        l = n(1485),
        d = n(31846),
        c = n(13116),
        m = n.n(c),
        u = n(37563),
        _ = n(35427),
        h = n(50423),
        p = n(54842),
        v = n(48760),
        S = n(62210);
      n(16649);
      class g {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, p.rC)(this);
        }
        LoadProfiles(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, S.X)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let n = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
            );
            if (0 == n.length) return this.m_mapProfilesLoading.get(e[0]);
            let i = u.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              a = o().get(i, {
                params: { steamids: n.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            n.forEach((e) => this.m_mapProfilesLoading.set(e, a));
            let s = yield a;
            s.data &&
              200 == s.status &&
              s.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, v.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, v.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, v.U)(e.avatar_url)),
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
            _.K.InitFromAccountID(e).ConvertTo64BitString(),
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
            _.K.InitFromAccountID(e).ConvertTo64BitString(),
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
      (0, i.gn)([p.LO], g.prototype, "m_mapProfiles", void 0);
      const f = new g();
      var C = n(62613),
        I = n(82493);
      class E extends a.Component {
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
          return (0, i.mG)(this, void 0, void 0, function* () {
            const e = yield o().get(
              u.De.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: u.De.SESSIONID } },
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
          return (0, i.mG)(this, void 0, void 0, function* () {
            const e = new FormData();
            e.append("sessionid", u.De.SESSIONID),
              e.append("steamid_user", u.L7.steamid),
              e.append("duration", (2592e3).toString());
            const t = yield o().post(
              u.De.COMMUNITY_BASE_URL + "invites/ajaxcreate",
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
            (0, h.Ei)(t);
        }
        OnAddFriend(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", u.De.SESSIONID),
              t.append("steamid", e),
              t.append("accept_invite", "0");
            try {
              const e = yield o().post(
                u.De.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
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
              (0, d.Xx)("#ManageFriends_AddAFriend"),
            ),
            a.createElement(
              "div",
              { className: m().Background },
              a.createElement(
                "h1",
                { className: m().Heading },
                (0, d.Xx)("#ManageFriends_YourFriendCode"),
              ),
              a.createElement(
                "div",
                { className: m().CopyContainer },
                a.createElement("h1", { className: m().Text }, u.L7.accountid),
                a.createElement(
                  l.KM,
                  {
                    autoFocus: !0,
                    className: m().Button,
                    onClick: () =>
                      this.OnCopy("friend_code", String(u.L7.accountid)),
                  },
                  this.state.friend_code_copied
                    ? (0, d.Xx)("#ManageFriends_Copied")
                    : (0, d.Xx)("#ManageFriends_Copy"),
                ),
              ),
              a.createElement(
                "p",
                { className: m().Body },
                (0, d.Xx)("#ManageFriends_EnterFriendCode"),
              ),
              a.createElement(k, {
                onButtonClick: this.OnAddFriend,
                buttonText: (0, d.Xx)("#ManageFriends_SendInvite"),
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
                (0, d.Xx)("#ManageFriends_OrSendQuickInvite"),
              ),
              a.createElement(
                "p",
                { className: m().Body },
                (0, d.Xx)("#ManageFriends_QuickInviteDescription"),
              ),
              a.createElement(
                "p",
                { className: m().Body },
                (0, d.Xx)("#ManageFriends_QuickInviteNote"),
              ),
              a.createElement(
                "div",
                { className: m().CopyContainer },
                Boolean(this.state.invite_token) &&
                  a.createElement("div", { className: m().Link }, e),
                a.createElement(
                  l.KM,
                  {
                    className: m().Button,
                    onClick: () => this.OnCopy("invite", e),
                  },
                  this.state.invite_copied
                    ? (0, d.Xx)("#ManageFriends_Copied")
                    : (0, d.Xx)("#ManageFriends_Copy"),
                ),
              ),
              a.createElement(
                l.zx,
                {
                  className: m().GenerateLinkButton,
                  onClick: this.OnCreateInviteLink,
                },
                (0, d.Xx)("#ManageFriends_CreateInviteLink"),
              ),
            ),
            a.createElement(
              "div",
              { className: m().Background },
              a.createElement(
                "h1",
                { className: m().Heading },
                (0, d.Xx)("#ManageFriends_OrSearch"),
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
                  a.createElement(l.II, {
                    className: m().Input,
                    onKeyDown: this.OnSearchKeyDown,
                    value: this.state.input_search,
                    onChange: this.OnSearchChange,
                    placeholder: (0, d.Xx)("#ManageFriends_EnterProfileName"),
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
                  a.createElement(C.YtI, null),
                ),
              ),
            ),
          );
        }
      }
      (0, i.gn)([s.ak], E.prototype, "OnCreateInviteLink", null),
        (0, i.gn)([s.ak], E.prototype, "OnCopy", null),
        (0, i.gn)([s.ak], E.prototype, "OnAddFriend", null),
        (0, i.gn)([s.ak], E.prototype, "OnSearchChange", null),
        (0, i.gn)([s.ak], E.prototype, "OnSearchKeyDown", null),
        (0, i.gn)([s.ak], E.prototype, "OnSearchSubmit", null);
      class k extends a.Component {
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
          return (0, i.mG)(this, void 0, void 0, function* () {
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
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (e) {
              const t = _.K.InitFromAccountID(Number(e));
              yield f.LoadProfiles([t.ConvertTo64BitString()]);
              const n = f.GetProfile(t.ConvertTo64BitString());
              n
                ? this.setState({
                    searchResult: n,
                    disable_send_invite:
                      u.L7.is_limited ||
                      (this.props.bDisableForFriends && n.is_friend) ||
                      (this.props.bDisableForSelf &&
                        n.steamid === u.L7.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          });
        }
        OnActionClick(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", u.De.SESSIONID),
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
          return a.createElement(
            "div",
            { className: m().FriendCodeSelector },
            a.createElement(l.II, {
              className: m().Input,
              value: this.state.input_friend_code,
              onChange: this.OnFriendCodeChange,
              placeholder: (0, d.Xx)(
                "#ManageFriends_EnterFriendCodePlaceholder",
              ),
            }),
            a.createElement(
              y,
              {
                searchResult: this.state.searchResult,
                invite_status: this.state.invite_status,
                bShowStatus: this.props.bShowStatus,
              },
              a.createElement(
                l.KM,
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
      (0, i.gn)([s.ak], k.prototype, "OnFriendCodeChange", null),
        (0, i.gn)([s.ak], k.prototype, "LoadProfile", null),
        (0, i.gn)([s.ak], k.prototype, "OnActionClick", null);
      const y = (e) => {
        const {
            searchResult: t,
            invite_status: n,
            bShowStatus: i,
            children: s,
          } = e,
          r = (0, u.id)();
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
                      I.IS,
                      {
                        target: r ? void 0 : "_blank",
                        href: u.De.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
                      },
                      (0, d.Xx)("#ManageFriends_ProfileLink"),
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
                s,
              ),
              a.createElement(
                "div",
                { className: m().ProfileLink },
                t.is_friend &&
                  a.createElement(
                    "div",
                    null,
                    (0, d.Xx)("#ManageFriends_IsFriend"),
                  ),
                0 != t.friends_in_common &&
                  a.createElement(
                    "div",
                    null,
                    a.createElement(
                      I.IS,
                      {
                        target: r ? void 0 : "_blank",
                        href:
                          u.De.COMMUNITY_BASE_URL +
                          "profiles/" +
                          t.steamid +
                          "/friendscommon",
                      },
                      1 === t.friends_in_common
                        ? (0, d.Xx)(
                            "#ManageFriends_FriendsInCommonSingular",
                            t.friends_in_common,
                          )
                        : (0, d.Xx)(
                            "#ManageFriends_FriendsInCommon",
                            t.friends_in_common,
                          ),
                    ),
                  ),
                i &&
                  "failure" === n &&
                  a.createElement(
                    "div",
                    { className: m().Failure },
                    (0, d.Xx)("#ManageFriends_InviteFailure"),
                  ),
                i &&
                  "success" === n &&
                  a.createElement(
                    "div",
                    { className: m().Success },
                    (0, d.Xx)("#ManageFriends_InviteSuccess", t.persona_name),
                  ),
              ),
            )
          : null;
      };
    },
  },
]);

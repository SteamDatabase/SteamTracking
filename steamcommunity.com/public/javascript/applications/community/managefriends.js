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
        BackgroundAnimation: "_3yBb7Zq-JsZsUC7j0xfwNs",
        "ItemFocusAnim-darkerGrey-nocolor": "_3mEJMPBWqIai6TZ5Asmwzc",
        "ItemFocusAnim-darkerGrey": "_1bq8dQKi1_Y3Cx4SqKPEbe",
        "ItemFocusAnim-darkGreySettings": "_3HZYqGe5_hsFFJcgBTMMSW",
        "ItemFocusAnim-darkGrey": "qqYMXWoOu5it3a3atTegO",
        "ItemFocusAnim-grey": "ULAazkgE1qcpwKYFDQ6cA",
        "ItemFocusAnim-translucent-white-10": "_2_8edxNWb8zuaY6iv3wJSx",
        "ItemFocusAnim-translucent-white-20": "_1TV5evTLXXGDV16o8ltkb7",
        "ItemFocusAnimBorder-darkGrey": "_2N1KfmpWvdxv64J5Rs82CX",
        "ItemFocusAnim-green": "_3UU3hyYWsBPGsxljxX3hbB",
        focusAnimation: "_2u4UlTYeTMTUGVGicBx0My",
        hoverAnimation: "_16_WHz1Oh5Jy0J3qvG4rto",
      };
    },
    50463: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => a });
      var s = i(7850),
        n = i(19369);
      function a() {
        return (0, s.jsx)(n.Bv, {});
      }
    },
    85044: (e, t, i) => {
      "use strict";
      i.d(t, { d: () => n, t: () => a });
      var s = i(78327);
      const n = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, t) {
        let i = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = n),
          44 == e.length && ((i = e.substr(-4)), (e = e.substr(0, 40)));
        let a = s.TS.AVATAR_BASE_URL;
        return (
          a ||
            ((a = s.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += e.substr(0, 2) + "/")),
          (a += e),
          t && "small" != t && (a += "_" + t),
          (a += i),
          a
        );
      }
    },
    19369: (e, t, i) => {
      "use strict";
      i.d(t, { jl: () => y, Bv: () => w });
      var s = i(34629),
        n = i(7850),
        a = i(90626),
        r = i(73745),
        o = i(41735),
        d = i.n(o),
        l = i(68255),
        c = i(61859),
        h = i(91640),
        u = i.n(h),
        _ = i(78327),
        m = i(17720),
        p = i(56011),
        v = i(14947),
        f = i(85044),
        g = i(81393);
      i(68797);
      class C {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, v.Gn)(this);
        }
        async LoadProfiles(e, t) {
          (0, g.wT)(
            e.length <= 500,
            "Check LoadProfiles, requesting too many steam IDs",
          );
          let i = e.filter(
            (e) =>
              !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
          );
          if (0 == i.length) return this.m_mapProfilesLoading.get(e[0]);
          let s = _.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
            n = d().get(s, {
              params: { steamids: i.join(",") },
              withCredentials: !0,
              cancelToken: null == t ? void 0 : t.token,
            });
          i.forEach((e) => this.m_mapProfilesLoading.set(e, n));
          let a = await n;
          a.data &&
            200 == a.status &&
            a.data.forEach((e) => {
              (e.avatar_hash = e.avatar_url),
                (e.avatar_url_medium = (0, f.t)(e.avatar_url, "medium")),
                (e.avatar_url_full = (0, f.t)(e.avatar_url, "full")),
                (e.avatar_url = (0, f.t)(e.avatar_url)),
                this.m_mapProfiles.set(e.steamid, e),
                this.m_mapProfilesLoading.delete(e.steamid);
            });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            m.b.InitFromAccountID(e).ConvertTo64BitString(),
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
            m.b.InitFromAccountID(e).ConvertTo64BitString(),
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
            ? _.TS.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : _.TS.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, s.Cg)([v.sH], C.prototype, "m_mapProfiles", void 0);
      const S = new C();
      var I = i(37085),
        x = i(12155),
        F = i(86328),
        k = i(45699);
      class w extends a.Component {
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
          const e = await d().get(
            _.TS.COMMUNITY_BASE_URL + "invites/ajaxgetall",
            { params: { sessionid: (0, _.KC)() } },
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
          e.append("sessionid", (0, _.KC)()),
            e.append("steamid_user", _.iA.steamid),
            e.append("duration", (2592e3).toString());
          const t = await d().post(
            _.TS.COMMUNITY_BASE_URL + "invites/ajaxcreate",
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
          t.append("sessionID", (0, _.KC)()),
            t.append("steamid", e),
            t.append("accept_invite", "0");
          try {
            const e = await d().post(
              _.TS.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
              t,
            );
            return e && e.data && e.data.success == I.R;
          } catch {
            return !1;
          }
        }
        OnSearchChange(e) {
          this.setState({ input_search: e.target.value });
        }
        OnSearchKeyDown(e) {
          e.keyCode === F.wd && this.OnSearchSubmit();
        }
        OnSearchSubmit() {
          window.open(
            _.TS.COMMUNITY_BASE_URL +
              "search/users/#text=" +
              encodeURIComponent(this.state.input_search),
            "_self",
          );
        }
        render() {
          const e = _.iA.short_url + "/" + this.state.invite_token;
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("div", {
                className: u().HeaderBlock,
                children: (0, c.we)("#ManageFriends_AddAFriend"),
              }),
              (0, n.jsxs)("div", {
                className: u().Background,
                children: [
                  (0, n.jsx)("h1", {
                    className: u().Heading,
                    children: (0, c.we)("#ManageFriends_YourFriendCode"),
                  }),
                  (0, n.jsxs)("div", {
                    className: u().CopyContainer,
                    children: [
                      (0, n.jsx)("h1", {
                        className: u().Text,
                        children: _.iA.accountid,
                      }),
                      (0, n.jsx)(l.jn, {
                        autoFocus: !0,
                        className: u().Button,
                        onClick: () =>
                          this.OnCopy("friend_code", String(_.iA.accountid)),
                        children: this.state.friend_code_copied
                          ? (0, c.we)("#ManageFriends_Copied")
                          : (0, c.we)("#ManageFriends_Copy"),
                      }),
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className: u().Body,
                    children: (0, c.we)("#ManageFriends_EnterFriendCode"),
                  }),
                  (0, n.jsx)(y, {
                    onButtonClick: this.OnAddFriend,
                    buttonText: (0, c.we)("#ManageFriends_SendInvite"),
                    bDisableForSelf: !0,
                    bDisableForFriends: !0,
                    bShowStatus: !0,
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: u().DimBackground,
                children: [
                  (0, n.jsx)("h1", {
                    className: u().Heading,
                    children: (0, c.we)("#ManageFriends_OrSendQuickInvite"),
                  }),
                  (0, n.jsx)("p", {
                    className: u().Body,
                    children: (0, c.we)(
                      "#ManageFriends_QuickInviteDescription",
                    ),
                  }),
                  (0, n.jsx)("p", {
                    className: u().Body,
                    children: (0, c.we)("#ManageFriends_QuickInviteNote"),
                  }),
                  (0, n.jsxs)("div", {
                    className: u().CopyContainer,
                    children: [
                      Boolean(this.state.invite_token) &&
                        (0, n.jsx)("div", { className: u().Link, children: e }),
                      (0, n.jsx)(l.jn, {
                        className: u().Button,
                        onClick: () => this.OnCopy("invite", e),
                        children: this.state.invite_copied
                          ? (0, c.we)("#ManageFriends_Copied")
                          : (0, c.we)("#ManageFriends_Copy"),
                      }),
                    ],
                  }),
                  (0, n.jsx)(l.$n, {
                    className: u().GenerateLinkButton,
                    onClick: this.OnCreateInviteLink,
                    children: (0, c.we)("#ManageFriends_CreateInviteLink"),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: u().Background,
                children: [
                  (0, n.jsx)("h1", {
                    className: u().Heading,
                    children: (0, c.we)("#ManageFriends_OrSearch"),
                  }),
                  (0, n.jsx)("br", {}),
                  (0, n.jsxs)("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      maxWidth: "598px",
                      position: "relative",
                    },
                    children: [
                      (0, n.jsx)("div", {
                        style: { width: "100%" },
                        children: (0, n.jsx)(l.pd, {
                          className: u().Input,
                          onKeyDown: this.OnSearchKeyDown,
                          value: this.state.input_search,
                          onChange: this.OnSearchChange,
                          placeholder: (0, c.we)(
                            "#ManageFriends_EnterProfileName",
                          ),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        id: "searchIcon",
                        style: {
                          position: "absolute",
                          right: "10px",
                          cursor: "pointer",
                        },
                        onClick: this.OnSearchSubmit,
                        children: (0, n.jsx)(x.eSy, {}),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      }
      (0, s.Cg)([r.oI], w.prototype, "OnCreateInviteLink", null),
        (0, s.Cg)([r.oI], w.prototype, "OnCopy", null),
        (0, s.Cg)([r.oI], w.prototype, "OnAddFriend", null),
        (0, s.Cg)([r.oI], w.prototype, "OnSearchChange", null),
        (0, s.Cg)([r.oI], w.prototype, "OnSearchKeyDown", null),
        (0, s.Cg)([r.oI], w.prototype, "OnSearchSubmit", null);
      class y extends a.Component {
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
            const t = m.b.InitFromAccountID(Number(e));
            await S.LoadProfiles([t.ConvertTo64BitString()]);
            const i = S.GetProfile(t.ConvertTo64BitString());
            i
              ? this.setState({
                  searchResult: i,
                  disable_send_invite:
                    _.iA.is_limited ||
                    (this.props.bDisableForFriends && i.is_friend) ||
                    (this.props.bDisableForSelf && i.steamid === _.iA.steamid),
                })
              : this.setState({ searchResult: null });
          } else this.setState({ searchResult: null });
        }
        async OnActionClick(e) {
          const t = new FormData();
          t.append("sessionID", (0, _.KC)()),
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
          return (0, n.jsxs)("div", {
            className: u().FriendCodeSelector,
            children: [
              (0, n.jsx)(l.pd, {
                className: u().Input,
                value: this.state.input_friend_code,
                onChange: this.OnFriendCodeChange,
                placeholder: (0, c.we)(
                  "#ManageFriends_EnterFriendCodePlaceholder",
                ),
              }),
              (0, n.jsx)(B, {
                searchResult: this.state.searchResult,
                invite_status: this.state.invite_status,
                bShowStatus: this.props.bShowStatus,
                children: (0, n.jsx)(l.jn, {
                  className: u().SendInviteButton,
                  onClick: () =>
                    this.OnActionClick(this.state.searchResult.steamid),
                  disabled: this.state.disable_send_invite,
                  children: this.props.buttonText,
                }),
              }),
            ],
          });
        }
      }
      (0, s.Cg)([r.oI], y.prototype, "OnFriendCodeChange", null),
        (0, s.Cg)([r.oI], y.prototype, "LoadProfile", null),
        (0, s.Cg)([r.oI], y.prototype, "OnActionClick", null);
      const B = (e) => {
        const {
            searchResult: t,
            invite_status: i,
            bShowStatus: s,
            children: a,
          } = e,
          r = (0, _.Qn)();
        return Boolean(t)
          ? (0, n.jsxs)("div", {
              className: u().ProfileCard,
              children: [
                (0, n.jsxs)("div", {
                  className: u().UserContainer,
                  children: [
                    (0, n.jsx)("div", {
                      className: u().Image,
                      children: (0, n.jsx)("img", {
                        style: { width: "100%", height: "100%" },
                        src: t.avatar_url_full,
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: u().ProfileContent,
                      children: [
                        (0, n.jsx)("h1", {
                          className: u().Heading,
                          children: t.persona_name,
                        }),
                        (0, n.jsxs)("div", {
                          className: u().ProfileLink,
                          children: [
                            (0, n.jsx)(k.Ii, {
                              target: r ? void 0 : "_blank",
                              href:
                                _.TS.COMMUNITY_BASE_URL +
                                "profiles/" +
                                t.steamid,
                              children: (0, c.we)("#ManageFriends_ProfileLink"),
                            }),
                            (0, n.jsx)("br", {}),
                            (0, n.jsxs)("span", {
                              className: u().Body,
                              children: [
                                t.real_name,
                                (0, n.jsx)("br", {}),
                                `${t.city}${t.city ? "," : ""} ${t.state}${t.state ? "," : ""} ${t.country}`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    a,
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: u().ProfileLink,
                  children: [
                    t.is_friend &&
                      (0, n.jsx)("div", {
                        children: (0, c.we)("#ManageFriends_IsFriend"),
                      }),
                    0 != t.friends_in_common &&
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)(k.Ii, {
                          target: r ? void 0 : "_blank",
                          href:
                            _.TS.COMMUNITY_BASE_URL +
                            "profiles/" +
                            t.steamid +
                            "/friendscommon",
                          children:
                            1 === t.friends_in_common
                              ? (0, c.we)(
                                  "#ManageFriends_FriendsInCommonSingular",
                                  t.friends_in_common,
                                )
                              : (0, c.we)(
                                  "#ManageFriends_FriendsInCommon",
                                  t.friends_in_common,
                                ),
                        }),
                      }),
                    s &&
                      "failure" === i &&
                      (0, n.jsx)("div", {
                        className: u().Failure,
                        children: (0, c.we)("#ManageFriends_InviteFailure"),
                      }),
                    s &&
                      "success" === i &&
                      (0, n.jsx)("div", {
                        className: u().Success,
                        children: (0, c.we)(
                          "#ManageFriends_InviteSuccess",
                          t.persona_name,
                        ),
                      }),
                  ],
                }),
              ],
            })
          : null;
      };
    },
  },
]);

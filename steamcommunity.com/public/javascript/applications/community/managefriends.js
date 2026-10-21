/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9129],
    {
      56590: (x, C, a) => {
        "use strict";
        a.r(C), a.d(C, { default: () => h });
        var t = a(7850),
          _ = a(1885);
        function h() {
          return (0, t.jsx)(_.Bv, {});
        }
      },
      35413: (x, C, a) => {
        "use strict";
        a.d(C, { d: () => _, t: () => h });
        var t = a(3166);
        const _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function h(f, g) {
          let p = ".jpg";
          (!f || f === "0000000000000000000000000000000000000000") && (f = _),
            f.length == 44 && ((p = f.substr(-4)), (f = f.substr(0, 40)));
          let r = t.TS.AVATAR_BASE_URL;
          return (
            r ||
              ((r = t.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (r += f.substr(0, 2) + "/")),
            (r += f),
            g && g != "small" && (r += "_" + g),
            (r += p),
            r
          );
        }
      },
      1885: (x, C, a) => {
        "use strict";
        a.d(C, { jl: () => P, Bv: () => S });
        var t = a(7850),
          _ = a(90626),
          h = a(54963),
          f = a(41735),
          g = a.n(f),
          p = a(19316),
          r = a(18210),
          M = a(91640),
          s = a.n(M),
          l = a(3166),
          B = a(76559),
          L = a(82734),
          j = a(14947),
          F = a(35413),
          N = a(71742),
          K = a(34592),
          T = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          w = (o, e, n, i) => {
            for (
              var d = i > 1 ? void 0 : i ? D(e, n) : e, u = o.length - 1, m;
              u >= 0;
              u--
            )
              (m = o[u]) && (d = (i ? m(e, n, d) : m(d)) || d);
            return i && d && T(e, n, d), d;
          };
        class y {
          constructor() {
            (0, j.Gn)(this);
          }
          m_mapProfiles = new Map();
          m_mapProfilesLoading = new Map();
          async LoadProfiles(e, n) {
            (0, N.wT)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let i = e.filter(
              (c) =>
                !this.m_mapProfiles.has(c) && !this.m_mapProfilesLoading.has(c),
            );
            if (i.length == 0) return this.m_mapProfilesLoading.get(e[0]);
            let d = l.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              u = g().get(d, {
                params: { steamids: i.join(",") },
                withCredentials: !0,
                cancelToken: n?.token,
              });
            i.forEach((c) => this.m_mapProfilesLoading.set(c, u));
            let m = await u;
            m.data &&
              m.status == 200 &&
              m.data.forEach((c) => {
                (c.avatar_hash = c.avatar_url),
                  (c.avatar_url_medium = (0, F.t)(c.avatar_url, "medium")),
                  (c.avatar_url_full = (0, F.t)(c.avatar_url, "full")),
                  (c.avatar_url = (0, F.t)(c.avatar_url)),
                  this.m_mapProfiles.set(c.steamid, c),
                  this.m_mapProfilesLoading.delete(c.steamid);
              });
          }
          GetProfile(e) {
            return this.m_mapProfiles.get(e);
          }
          GetProfileByAccountID(e) {
            return this.m_mapProfiles.get(
              B.b.InitFromAccountID(e).ConvertTo64BitString(),
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
              B.b.InitFromAccountID(e).ConvertTo64BitString(),
            );
          }
          BHasProfileBySteamID(e) {
            return this.m_mapProfiles.has(e.ConvertTo64BitString());
          }
          BHasAllProfilesBySteamID(e) {
            return !e.some((n) => !this.BHasProfileBySteamID(n));
          }
          GetProfileURLBySteamID(e) {
            const n = this.GetProfileBySteamID(e);
            return n && n.profile_url
              ? l.TS.COMMUNITY_BASE_URL + "id/" + n.profile_url
              : l.TS.COMMUNITY_BASE_URL +
                  "profiles/" +
                  e.ConvertTo64BitString();
          }
          GetPersonaNameBySteamID(e) {
            const n = this.GetProfileBySteamID(e);
            return n && n.persona_name ? n.persona_name : "";
          }
        }
        w([j.sH], y.prototype, "m_mapProfiles", 2);
        const I = new y();
        function A(o) {
          const e = React.useMemo(
              () => (o ? (typeof o == "string" ? new CSteamID(o) : o) : null),
              [o],
            ),
            [n, i] = useState(!!e && !I.BHasProfileBySteamID(e));
          useEffect(() => {
            const u = axios.CancelToken.source();
            return (
              e &&
                !I.BHasProfileBySteamID(e) &&
                I.LoadProfiles([e.ConvertTo64BitString()])
                  .catch((m) => {
                    const c = GetMsgAndErrorCodeFromResponse(m);
                    console.error(
                      "useUserProfile failed to load profile for " +
                        e.ConvertTo64BitString() +
                        ": " +
                        c.strErrorMsg,
                      c,
                    );
                  })
                  .finally(() => {
                    u.token.reason || i(!1);
                  }),
              () => u.cancel("unmounting useUserProfile")
            );
          }, [o]);
          const d = !!e && I.GetProfileBySteamID(e);
          return [n, d];
        }
        function Y(o) {
          const e = React.useMemo(
            () => (o ? CSteamID.InitFromAccountID(o) : null),
            [o],
          );
          return A(e);
        }
        var R = a(72604),
          U = a(36118),
          k = a(41301),
          O = a(24660),
          E = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          v = (o, e, n, i) => {
            for (
              var d = i > 1 ? void 0 : i ? b(e, n) : e, u = o.length - 1, m;
              u >= 0;
              u--
            )
              (m = o[u]) && (d = (i ? m(e, n, d) : m(d)) || d);
            return i && d && E(e, n, d), d;
          };
        class S extends _.Component {
          state = {
            invite_token: "",
            input_search: "",
            friend_code_copied: !1,
            invite_copied: !1,
          };
          async componentDidMount() {
            const e = await g().get(
              l.TS.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: (0, l.KC)() } },
            );
            if (e && e.data && e.data.tokens) {
              const n = e.data.tokens.filter((i) => i.valid);
              n.length
                ? this.setState({ invite_token: n[0].invite_token })
                : this.OnCreateInviteLink();
            } else this.OnCreateInviteLink();
          }
          async OnCreateInviteLink() {
            const e = new FormData();
            e.append("sessionid", (0, l.KC)()),
              e.append("steamid_user", l.iA.steamid),
              e.append("duration", (720 * 60 * 60).toString());
            const n = await g().post(
              l.TS.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              e,
            );
            n &&
              n.data &&
              n.data.invite &&
              this.setState({ invite_token: n.data.invite.invite_token });
          }
          OnCopy(e, n) {
            e === "friend_code" &&
              (this.setState({ friend_code_copied: !0 }),
              setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
              e === "invite" &&
                (this.setState({ invite_copied: !0 }),
                setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
              (0, L.OG)(n);
          }
          async OnAddFriend(e) {
            const n = new FormData();
            n.append("sessionID", (0, l.KC)()),
              n.append("steamid", e),
              n.append("accept_invite", "0");
            try {
              const i = await g().post(
                l.TS.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                n,
              );
              return i && i.data && i.data.success == R.R;
            } catch {
              return !1;
            }
          }
          OnSearchChange(e) {
            this.setState({ input_search: e.target.value });
          }
          OnSearchKeyDown(e) {
            e.keyCode === k.wd && this.OnSearchSubmit();
          }
          OnSearchSubmit() {
            window.open(
              l.TS.COMMUNITY_BASE_URL +
                "search/users/#text=" +
                encodeURIComponent(this.state.input_search),
              "_self",
            );
          }
          render() {
            const e = l.iA.short_url + "/" + this.state.invite_token;
            return (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("div", {
                  className: s().HeaderBlock,
                  children: (0, r.we)("#ManageFriends_AddAFriend"),
                }),
                (0, t.jsxs)("div", {
                  className: s().Background,
                  children: [
                    (0, t.jsx)("h1", {
                      className: s().Heading,
                      children: (0, r.we)("#ManageFriends_YourFriendCode"),
                    }),
                    (0, t.jsxs)("div", {
                      className: s().CopyContainer,
                      children: [
                        (0, t.jsx)("h1", {
                          className: s().Text,
                          children: l.iA.accountid,
                        }),
                        (0, t.jsx)(p.jn, {
                          autoFocus: !0,
                          className: s().Button,
                          onClick: () =>
                            this.OnCopy("friend_code", String(l.iA.accountid)),
                          children: this.state.friend_code_copied
                            ? (0, r.we)("#ManageFriends_Copied")
                            : (0, r.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: s().Body,
                      children: (0, r.we)("#ManageFriends_EnterFriendCode"),
                    }),
                    (0, t.jsx)(P, {
                      onButtonClick: this.OnAddFriend,
                      buttonText: (0, r.we)("#ManageFriends_SendInvite"),
                      bDisableForSelf: !0,
                      bDisableForFriends: !0,
                      bShowStatus: !0,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: s().DimBackground,
                  children: [
                    (0, t.jsx)("h1", {
                      className: s().Heading,
                      children: (0, r.we)("#ManageFriends_OrSendQuickInvite"),
                    }),
                    (0, t.jsx)("p", {
                      className: s().Body,
                      children: (0, r.we)(
                        "#ManageFriends_QuickInviteDescription",
                      ),
                    }),
                    (0, t.jsx)("p", {
                      className: s().Body,
                      children: (0, r.we)("#ManageFriends_QuickInviteNote"),
                    }),
                    (0, t.jsxs)("div", {
                      className: s().CopyContainer,
                      children: [
                        !!this.state.invite_token &&
                          (0, t.jsx)("div", {
                            className: s().Link,
                            children: e,
                          }),
                        (0, t.jsx)(p.jn, {
                          className: s().Button,
                          onClick: () => this.OnCopy("invite", e),
                          children: this.state.invite_copied
                            ? (0, r.we)("#ManageFriends_Copied")
                            : (0, r.we)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, t.jsx)(p.$n, {
                      className: s().GenerateLinkButton,
                      onClick: this.OnCreateInviteLink,
                      children: (0, r.we)("#ManageFriends_CreateInviteLink"),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: s().Background,
                  children: [
                    (0, t.jsx)("h1", {
                      className: s().Heading,
                      children: (0, r.we)("#ManageFriends_OrSearch"),
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "598px",
                        position: "relative",
                      },
                      children: [
                        (0, t.jsx)("div", {
                          style: { width: "100%" },
                          children: (0, t.jsx)(p.pd, {
                            className: s().Input,
                            onKeyDown: this.OnSearchKeyDown,
                            value: this.state.input_search,
                            onChange: this.OnSearchChange,
                            placeholder: (0, r.we)(
                              "#ManageFriends_EnterProfileName",
                            ),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          id: "searchIcon",
                          style: {
                            position: "absolute",
                            right: "10px",
                            cursor: "pointer",
                          },
                          onClick: this.OnSearchSubmit,
                          children: (0, t.jsx)(U.eSy, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        v([h.oI], S.prototype, "OnCreateInviteLink", 1),
          v([h.oI], S.prototype, "OnCopy", 1),
          v([h.oI], S.prototype, "OnAddFriend", 1),
          v([h.oI], S.prototype, "OnSearchChange", 1),
          v([h.oI], S.prototype, "OnSearchKeyDown", 1),
          v([h.oI], S.prototype, "OnSearchSubmit", 1);
        class P extends _.Component {
          state = {
            input_friend_code: "",
            disable_send_invite: !1,
            searchResult: null,
            invite_status: "pending",
          };
          m_currentRequest = 0;
          async OnFriendCodeChange(e) {
            const n = e.target.value.split(",")[0];
            this.setState({ input_friend_code: n, invite_status: "pending" }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(n),
                500,
              ));
          }
          async LoadProfile(e) {
            if (e) {
              const n = B.b.InitFromAccountID(Number(e));
              await I.LoadProfiles([n.ConvertTo64BitString()]);
              const i = I.GetProfile(n.ConvertTo64BitString());
              i
                ? this.setState({
                    searchResult: i,
                    disable_send_invite:
                      l.iA.is_limited ||
                      (this.props.bDisableForFriends && i.is_friend) ||
                      (this.props.bDisableForSelf &&
                        i.steamid === l.iA.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          }
          async OnActionClick(e) {
            const n = new FormData();
            n.append("sessionID", (0, l.KC)()),
              n.append("steamid", e),
              n.append("accept_invite", "0"),
              this.setState({ disable_send_invite: !0 }),
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
            return (0, t.jsxs)("div", {
              className: s().FriendCodeSelector,
              children: [
                (0, t.jsx)(p.pd, {
                  className: s().Input,
                  value: this.state.input_friend_code,
                  onChange: this.OnFriendCodeChange,
                  placeholder: (0, r.we)(
                    "#ManageFriends_EnterFriendCodePlaceholder",
                  ),
                }),
                (0, t.jsx)(G, {
                  searchResult: this.state.searchResult,
                  invite_status: this.state.invite_status,
                  bShowStatus: this.props.bShowStatus,
                  children: (0, t.jsx)(p.jn, {
                    className: s().SendInviteButton,
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
        v([h.oI], P.prototype, "OnFriendCodeChange", 1),
          v([h.oI], P.prototype, "LoadProfile", 1),
          v([h.oI], P.prototype, "OnActionClick", 1);
        const G = (o) => {
          const {
              searchResult: e,
              invite_status: n,
              bShowStatus: i,
              children: d,
            } = o,
            u = (0, l.Qn)();
          return e
            ? (0, t.jsxs)("div", {
                className: s().ProfileCard,
                children: [
                  (0, t.jsxs)("div", {
                    className: s().UserContainer,
                    children: [
                      (0, t.jsx)("div", {
                        className: s().Image,
                        children: (0, t.jsx)("img", {
                          style: { width: "100%", height: "100%" },
                          src: e.avatar_url_full,
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: s().ProfileContent,
                        children: [
                          (0, t.jsx)("h1", {
                            className: s().Heading,
                            children: e.persona_name,
                          }),
                          (0, t.jsxs)("div", {
                            className: s().ProfileLink,
                            children: [
                              (0, t.jsx)(O.Ii, {
                                target: u ? void 0 : "_blank",
                                href:
                                  l.TS.COMMUNITY_BASE_URL +
                                  "profiles/" +
                                  e.steamid,
                                children: (0, r.we)(
                                  "#ManageFriends_ProfileLink",
                                ),
                              }),
                              (0, t.jsx)("br", {}),
                              (0, t.jsxs)("span", {
                                className: s().Body,
                                children: [
                                  e.real_name,
                                  (0, t.jsx)("br", {}),
                                  `${e.city}${e.city ? "," : ""} ${e.state}${e.state ? "," : ""} ${e.country}`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      d,
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: s().ProfileLink,
                    children: [
                      e.is_friend &&
                        (0, t.jsx)("div", {
                          children: (0, r.we)("#ManageFriends_IsFriend"),
                        }),
                      e.friends_in_common != 0 &&
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)(O.Ii, {
                            target: u ? void 0 : "_blank",
                            href:
                              l.TS.COMMUNITY_BASE_URL +
                              "profiles/" +
                              e.steamid +
                              "/friendscommon",
                            children:
                              e.friends_in_common === 1
                                ? (0, r.we)(
                                    "#ManageFriends_FriendsInCommonSingular",
                                    e.friends_in_common,
                                  )
                                : (0, r.we)(
                                    "#ManageFriends_FriendsInCommon",
                                    e.friends_in_common,
                                  ),
                          }),
                        }),
                      i &&
                        n === "failure" &&
                        (0, t.jsx)("div", {
                          className: s().Failure,
                          children: (0, r.we)("#ManageFriends_InviteFailure"),
                        }),
                      i &&
                        n === "success" &&
                        (0, t.jsx)("div", {
                          className: s().Success,
                          children: (0, r.we)(
                            "#ManageFriends_InviteSuccess",
                            e.persona_name,
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        };
      },
      91640: (x) => {
        x.exports = {
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
    },
  ]);
})();

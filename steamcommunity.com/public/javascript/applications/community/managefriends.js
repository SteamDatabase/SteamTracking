/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [102],
  {
    "8H1D": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return s;
      }),
        a.d(t, "a", function () {
          return r;
        });
      var n = a("lkRc");
      const s = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function r(e, t) {
        let a = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = s),
          44 == e.length && ((a = e.substr(-4)), (e = e.substr(0, 40)));
        let r = n.c.AVATAR_BASE_URL;
        return (
          r ||
            ((r = n.c.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (r += e.substr(0, 2) + "/")),
          (r += e),
          t && "small" != t && (r += "_" + t),
          (r += a),
          r
        );
      }
    },
    AiWL: function (e, t, a) {
      "use strict";
      a("mgoM");
    },
    IASz: function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
        Heading: "managefriends_Heading_3kTQI",
        Body: "managefriends_Body_2s393",
        HeaderBlock: "managefriends_HeaderBlock_X9bYN",
        Background: "managefriends_Background_1xwi0",
        DimBackground: "managefriends_DimBackground_2N55H",
        Input: "managefriends_Input_1BUty",
        CopyContainer: "managefriends_CopyContainer_1HjkZ",
        Text: "managefriends_Text_1ehqR",
        Link: "managefriends_Link_18Sc0",
        Button: "managefriends_Button_2772E",
        GenerateLinkButton: "managefriends_GenerateLinkButton_T52tU",
        ProfileCard: "managefriends_ProfileCard_28a_C",
        UserContainer: "managefriends_UserContainer_29w-2",
        Image: "managefriends_Image_1n4lD",
        ProfileContent: "managefriends_ProfileContent_1qz9x",
        ProfileLink: "managefriends_ProfileLink_1tEt0",
        Failure: "managefriends_Failure_UoMCo",
        Success: "managefriends_Success_zNkyw",
      };
    },
    McqU: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return v;
      }),
        a.d(t, "a", function () {
          return b;
        });
      var n = a("mrSG"),
        s = a("q1tI"),
        r = a.n(s),
        i = a("opsS"),
        o = a("vDqi"),
        c = a.n(o),
        l = a("Mgs7"),
        d = a("TLQK"),
        u = a("IASz"),
        m = a.n(u),
        _ = a("lkRc"),
        h = a("kLLr"),
        f = a("X3Ds"),
        p = a("Qcoi"),
        g = (a("mgoM"), a("6Y59"));
      a("5h11");
      class v extends r.a.Component {
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
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = yield c.a.get(
              _.c.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: _.c.SESSIONID } }
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
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = new FormData();
            e.append("sessionid", _.c.SESSIONID),
              e.append("steamid_user", _.h.steamid),
              e.append("duration", (2592e3).toString());
            const t = yield c.a.post(
              _.c.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              e
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
            Object(f.i)(t);
        }
        OnAddFriend(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", _.c.SESSIONID),
              t.append("steamid", e),
              t.append("accept_invite", "0");
            try {
              const e = yield c.a.post(
                _.c.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                t
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
            _.c.COMMUNITY_BASE_URL +
              "search/users/#text=" +
              encodeURIComponent(this.state.input_search),
            "_self"
          );
        }
        render() {
          const e = _.h.short_url + "/" + this.state.invite_token;
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: m.a.HeaderBlock },
              Object(d.f)("#ManageFriends_AddAFriend")
            ),
            r.a.createElement(
              "div",
              { className: m.a.Background },
              r.a.createElement(
                "h1",
                { className: m.a.Heading },
                Object(d.f)("#ManageFriends_YourFriendCode")
              ),
              r.a.createElement(
                "div",
                { className: m.a.CopyContainer },
                r.a.createElement("h1", { className: m.a.Text }, _.h.accountid),
                r.a.createElement(
                  l.G,
                  {
                    autoFocus: !0,
                    className: m.a.Button,
                    onClick: () =>
                      this.OnCopy("friend_code", String(_.h.accountid)),
                  },
                  this.state.friend_code_copied
                    ? Object(d.f)("#ManageFriends_Copied")
                    : Object(d.f)("#ManageFriends_Copy")
                )
              ),
              r.a.createElement(
                "p",
                { className: m.a.Body },
                Object(d.f)("#ManageFriends_EnterFriendCode")
              ),
              r.a.createElement(b, {
                onButtonClick: this.OnAddFriend,
                buttonText: Object(d.f)("#ManageFriends_SendInvite"),
                bDisableForSelf: !0,
                bDisableForFriends: !0,
                bShowStatus: !0,
              })
            ),
            r.a.createElement(
              "div",
              { className: m.a.DimBackground },
              r.a.createElement(
                "h1",
                { className: m.a.Heading },
                Object(d.f)("#ManageFriends_OrSendQuickInvite")
              ),
              r.a.createElement(
                "p",
                { className: m.a.Body },
                Object(d.f)("#ManageFriends_QuickInviteDescription")
              ),
              r.a.createElement(
                "p",
                { className: m.a.Body },
                Object(d.f)("#ManageFriends_QuickInviteNote")
              ),
              r.a.createElement(
                "div",
                { className: m.a.CopyContainer },
                Boolean(this.state.invite_token) &&
                  r.a.createElement("div", { className: m.a.Link }, e),
                r.a.createElement(
                  l.G,
                  {
                    className: m.a.Button,
                    onClick: () => this.OnCopy("invite", e),
                  },
                  this.state.invite_copied
                    ? Object(d.f)("#ManageFriends_Copied")
                    : Object(d.f)("#ManageFriends_Copy")
                )
              ),
              r.a.createElement(
                l.j,
                {
                  className: m.a.GenerateLinkButton,
                  onClick: this.OnCreateInviteLink,
                },
                Object(d.f)("#ManageFriends_CreateInviteLink")
              )
            ),
            r.a.createElement(
              "div",
              { className: m.a.Background },
              r.a.createElement(
                "h1",
                { className: m.a.Heading },
                Object(d.f)("#ManageFriends_OrSearch")
              ),
              r.a.createElement("br", null),
              r.a.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "598px",
                    position: "relative",
                  },
                },
                r.a.createElement(
                  "div",
                  { style: { width: "100%" } },
                  r.a.createElement(l.A, {
                    className: m.a.Input,
                    onKeyDown: this.OnSearchKeyDown,
                    value: this.state.input_search,
                    onChange: this.OnSearchChange,
                    placeholder: Object(d.f)("#ManageFriends_EnterProfileName"),
                  })
                ),
                r.a.createElement(
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
                  r.a.createElement(g.L, null)
                )
              )
            )
          );
        }
      }
      Object(n.b)([i.b], v.prototype, "OnCreateInviteLink", null),
        Object(n.b)([i.b], v.prototype, "OnCopy", null),
        Object(n.b)([i.b], v.prototype, "OnAddFriend", null),
        Object(n.b)([i.b], v.prototype, "OnSearchChange", null),
        Object(n.b)([i.b], v.prototype, "OnSearchKeyDown", null),
        Object(n.b)([i.b], v.prototype, "OnSearchSubmit", null);
      class b extends r.a.Component {
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
          return Object(n.a)(this, void 0, void 0, function* () {
            const t = e.target.value.split(",")[0];
            this.setState({ input_friend_code: t, invite_status: "pending" }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(t),
                500
              ));
          });
        }
        LoadProfile(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (e) {
              const t = h.a.InitFromAccountID(Number(e));
              yield p.a.LoadProfiles([t.ConvertTo64BitString()]);
              const a = p.a.GetProfile(t.ConvertTo64BitString());
              a
                ? this.setState({
                    searchResult: a,
                    disable_send_invite:
                      _.h.is_limited ||
                      (this.props.bDisableForFriends && a.is_friend) ||
                      (this.props.bDisableForSelf && a.steamid === _.h.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          });
        }
        OnActionClick(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", _.c.SESSIONID),
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
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(l.A, {
              className: m.a.Input,
              value: this.state.input_friend_code,
              onChange: this.OnFriendCodeChange,
              placeholder: Object(d.f)(
                "#ManageFriends_EnterFriendCodePlaceholder"
              ),
            }),
            Boolean(this.state.searchResult) &&
              r.a.createElement(
                "div",
                { className: m.a.ProfileCard },
                r.a.createElement(
                  "div",
                  { className: m.a.UserContainer },
                  r.a.createElement(
                    "div",
                    { className: m.a.Image },
                    r.a.createElement("img", {
                      style: { width: "100%", height: "100%" },
                      src: this.state.searchResult.avatar_url_full,
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: m.a.ProfileContent },
                    r.a.createElement(
                      "h1",
                      { className: m.a.Heading },
                      this.state.searchResult.persona_name
                    ),
                    r.a.createElement(
                      "div",
                      { className: m.a.ProfileLink },
                      r.a.createElement(
                        "a",
                        {
                          target: "_blank",
                          href:
                            _.c.COMMUNITY_BASE_URL +
                            "profiles/" +
                            this.state.searchResult.steamid,
                        },
                        Object(d.f)("#ManageFriends_ProfileLink")
                      ),
                      r.a.createElement("br", null),
                      r.a.createElement(
                        "span",
                        { className: m.a.Body },
                        this.state.searchResult.real_name,
                        r.a.createElement("br", null),
                        `${this.state.searchResult.city}${
                          this.state.searchResult.city ? "," : ""
                        } ${this.state.searchResult.state}${
                          this.state.searchResult.state ? "," : ""
                        } ${this.state.searchResult.country}`
                      )
                    )
                  ),
                  r.a.createElement(
                    l.G,
                    {
                      onClick: () =>
                        this.OnActionClick(this.state.searchResult.steamid),
                      disabled: this.state.disable_send_invite,
                      style: {
                        width: "fit-content",
                        height: "fit-content",
                        padding: "0px 20px 0px 20px",
                        margin: "0 0 0 auto",
                      },
                    },
                    this.props.buttonText
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: m.a.ProfileLink },
                  this.state.searchResult.is_friend
                    ? r.a.createElement(
                        "div",
                        null,
                        Object(d.f)("#ManageFriends_IsFriend")
                      )
                    : null,
                  this.state.searchResult.friends_in_common
                    ? r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "a",
                          {
                            target: "_blank",
                            href:
                              _.c.COMMUNITY_BASE_URL +
                              "profiles/" +
                              this.state.searchResult.steamid +
                              "/friendscommon",
                          },
                          1 === this.state.searchResult.friends_in_common
                            ? Object(d.f)(
                                "#ManageFriends_FriendsInCommonSingular",
                                this.state.searchResult.friends_in_common
                              )
                            : Object(d.f)(
                                "#ManageFriends_FriendsInCommon",
                                this.state.searchResult.friends_in_common
                              )
                        )
                      )
                    : null,
                  this.props.bShowStatus &&
                    "failure" === this.state.invite_status &&
                    r.a.createElement(
                      "div",
                      { className: m.a.Failure },
                      Object(d.f)("#ManageFriends_InviteFailure")
                    ),
                  this.props.bShowStatus &&
                    "success" === this.state.invite_status &&
                    r.a.createElement(
                      "div",
                      { className: m.a.Success },
                      Object(d.f)(
                        "#ManageFriends_InviteSuccess",
                        this.state.searchResult.persona_name
                      )
                    )
                )
              )
          );
        }
      }
      Object(n.b)([i.b], b.prototype, "OnFriendCodeChange", null),
        Object(n.b)([i.b], b.prototype, "LoadProfile", null),
        Object(n.b)([i.b], b.prototype, "OnActionClick", null);
    },
    OS6B: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      a("mgoM");
      var n = a("vDqi"),
        s = a.n(n),
        r = a("bxBv");
      function i(e) {
        if (s.a.isCancel(e))
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
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof r.b)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
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
    Qcoi: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return f;
      }),
        a.d(t, "b", function () {
          return p;
        }),
        a.d(t, "c", function () {
          return g;
        });
      var n = a("mrSG"),
        s = a("vDqi"),
        r = a.n(s),
        i = a("2vnA"),
        o = a("q1tI"),
        c = a.n(o),
        l = (a("mgoM"), a("kyHq"), a("8H1D")),
        d = a("kLLr"),
        u = (a("AiWL"), a("r64O")),
        m = a("OS6B"),
        _ = a("lkRc");
      class h {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return Object(n.a)(this, void 0, void 0, function* () {
            Object(u.a)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs"
            );
            let a = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == a.length) return this.m_mapProfilesLoading.get(e[0]);
            let n = _.c.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              s = r.a.get(n, {
                params: { steamids: a.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            a.forEach((e) => this.m_mapProfilesLoading.set(e, s));
            let i = yield s;
            i.data &&
              200 == i.status &&
              i.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = Object(l.a)(e.avatar_url, "medium")),
                  (e.avatar_url_full = Object(l.a)(e.avatar_url, "full")),
                  (e.avatar_url = Object(l.a)(e.avatar_url)),
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
            d.a.InitFromAccountID(e).ConvertTo64BitString()
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
            d.a.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? _.c.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : _.c.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      Object(n.b)([i.C], h.prototype, "m_mapProfiles", void 0);
      const f = new h();
      function p(e) {
        const t = c.a.useMemo(
            () => (e ? ("string" == typeof e ? new d.a(e) : e) : null),
            [e]
          ),
          [a, n] = Object(o.useState)(!!t && !f.BHasProfileBySteamID(t));
        Object(o.useEffect)(() => {
          const e = r.a.CancelToken.source();
          return (
            t &&
              !f.BHasProfileBySteamID(t) &&
              f
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const a = Object(m.a)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      a.strErrorMsg,
                    a
                  );
                })
                .finally(() => {
                  e.token.reason || n(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [a, !!t && f.GetProfileBySteamID(t)];
      }
      function g(e) {
        return p(c.a.useMemo(() => d.a.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = f;
    },
    rt5e: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return i;
        });
      var n = a("q1tI"),
        s = a.n(n),
        r = a("McqU");
      function i() {
        return s.a.createElement(r.b, null);
      }
    },
  },
]);

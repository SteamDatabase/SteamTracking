/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [115],
  {
    "8H1D": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var a = n("lkRc");
      const r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function i(e, t) {
        let n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = r),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        let i = a.c.AVATAR_BASE_URL;
        return (
          i ||
            ((i = a.c.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (i += e.substr(0, 2) + "/")),
          (i += e),
          t && "small" != t && (i += "_" + t),
          (i += n),
          i
        );
      }
    },
    AiWL: function (e, t, n) {
      "use strict";
      n("mgoM");
    },
    IASz: function (e, t, n) {
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
    McqU: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return b;
      }),
        n.d(t, "a", function () {
          return C;
        });
      var a = n("mrSG"),
        r = n("q1tI"),
        i = n.n(r),
        s = n("opsS"),
        o = n("vDqi"),
        c = n.n(o),
        l = n("Mgs7"),
        d = n("TLQK"),
        u = n("IASz"),
        m = n.n(u),
        _ = n("lkRc"),
        f = n("kLLr"),
        p = n("X3Ds"),
        h = n("Qcoi"),
        g = (n("mgoM"), n("6Y59")),
        v = (n("5h11"), n("av+R"));
      class b extends i.a.Component {
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
          return Object(a.a)(this, void 0, void 0, function* () {
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
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = new FormData();
            e.append("sessionid", _.c.SESSIONID),
              e.append("steamid_user", _.j.steamid),
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
            Object(p.i)(t);
        }
        OnAddFriend(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
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
          const e = _.j.short_url + "/" + this.state.invite_token;
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(
              "div",
              { className: m.a.HeaderBlock },
              Object(d.f)("#ManageFriends_AddAFriend")
            ),
            i.a.createElement(
              "div",
              { className: m.a.Background },
              i.a.createElement(
                "h1",
                { className: m.a.Heading },
                Object(d.f)("#ManageFriends_YourFriendCode")
              ),
              i.a.createElement(
                "div",
                { className: m.a.CopyContainer },
                i.a.createElement("h1", { className: m.a.Text }, _.j.accountid),
                i.a.createElement(
                  l.G,
                  {
                    autoFocus: !0,
                    className: m.a.Button,
                    onClick: () =>
                      this.OnCopy("friend_code", String(_.j.accountid)),
                  },
                  this.state.friend_code_copied
                    ? Object(d.f)("#ManageFriends_Copied")
                    : Object(d.f)("#ManageFriends_Copy")
                )
              ),
              i.a.createElement(
                "p",
                { className: m.a.Body },
                Object(d.f)("#ManageFriends_EnterFriendCode")
              ),
              i.a.createElement(C, {
                onButtonClick: this.OnAddFriend,
                buttonText: Object(d.f)("#ManageFriends_SendInvite"),
                bDisableForSelf: !0,
                bDisableForFriends: !0,
                bShowStatus: !0,
              })
            ),
            i.a.createElement(
              "div",
              { className: m.a.DimBackground },
              i.a.createElement(
                "h1",
                { className: m.a.Heading },
                Object(d.f)("#ManageFriends_OrSendQuickInvite")
              ),
              i.a.createElement(
                "p",
                { className: m.a.Body },
                Object(d.f)("#ManageFriends_QuickInviteDescription")
              ),
              i.a.createElement(
                "p",
                { className: m.a.Body },
                Object(d.f)("#ManageFriends_QuickInviteNote")
              ),
              i.a.createElement(
                "div",
                { className: m.a.CopyContainer },
                Boolean(this.state.invite_token) &&
                  i.a.createElement("div", { className: m.a.Link }, e),
                i.a.createElement(
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
              i.a.createElement(
                l.e,
                {
                  className: m.a.GenerateLinkButton,
                  onClick: this.OnCreateInviteLink,
                },
                Object(d.f)("#ManageFriends_CreateInviteLink")
              )
            ),
            i.a.createElement(
              "div",
              { className: m.a.Background },
              i.a.createElement(
                "h1",
                { className: m.a.Heading },
                Object(d.f)("#ManageFriends_OrSearch")
              ),
              i.a.createElement("br", null),
              i.a.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "598px",
                    position: "relative",
                  },
                },
                i.a.createElement(
                  "div",
                  { style: { width: "100%" } },
                  i.a.createElement(l.A, {
                    className: m.a.Input,
                    onKeyDown: this.OnSearchKeyDown,
                    value: this.state.input_search,
                    onChange: this.OnSearchChange,
                    placeholder: Object(d.f)("#ManageFriends_EnterProfileName"),
                  })
                ),
                i.a.createElement(
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
                  i.a.createElement(g.O, null)
                )
              )
            )
          );
        }
      }
      Object(a.b)([s.b], b.prototype, "OnCreateInviteLink", null),
        Object(a.b)([s.b], b.prototype, "OnCopy", null),
        Object(a.b)([s.b], b.prototype, "OnAddFriend", null),
        Object(a.b)([s.b], b.prototype, "OnSearchChange", null),
        Object(a.b)([s.b], b.prototype, "OnSearchKeyDown", null),
        Object(a.b)([s.b], b.prototype, "OnSearchSubmit", null);
      class C extends i.a.Component {
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
          return Object(a.a)(this, void 0, void 0, function* () {
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
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e) {
              const t = f.a.InitFromAccountID(Number(e));
              yield h.a.LoadProfiles([t.ConvertTo64BitString()]);
              const n = h.a.GetProfile(t.ConvertTo64BitString());
              n
                ? this.setState({
                    searchResult: n,
                    disable_send_invite:
                      _.j.is_limited ||
                      (this.props.bDisableForFriends && n.is_friend) ||
                      (this.props.bDisableForSelf && n.steamid === _.j.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          });
        }
        OnActionClick(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
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
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(l.A, {
              className: m.a.Input,
              value: this.state.input_friend_code,
              onChange: this.OnFriendCodeChange,
              placeholder: Object(d.f)(
                "#ManageFriends_EnterFriendCodePlaceholder"
              ),
            }),
            i.a.createElement(
              S,
              {
                searchResult: this.state.searchResult,
                invite_status: this.state.invite_status,
                bShowStatus: this.props.bShowStatus,
              },
              i.a.createElement(
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
            )
          );
        }
      }
      Object(a.b)([s.b], C.prototype, "OnFriendCodeChange", null),
        Object(a.b)([s.b], C.prototype, "LoadProfile", null),
        Object(a.b)([s.b], C.prototype, "OnActionClick", null);
      const S = (e) => {
        const {
          searchResult: t,
          invite_status: n,
          bShowStatus: a,
          children: r,
        } = e;
        return Boolean(t)
          ? i.a.createElement(
              "div",
              { className: m.a.ProfileCard },
              i.a.createElement(
                "div",
                { className: m.a.UserContainer },
                i.a.createElement(
                  "div",
                  { className: m.a.Image },
                  i.a.createElement("img", {
                    style: { width: "100%", height: "100%" },
                    src: t.avatar_url_full,
                  })
                ),
                i.a.createElement(
                  "div",
                  { className: m.a.ProfileContent },
                  i.a.createElement(
                    "h1",
                    { className: m.a.Heading },
                    t.persona_name
                  ),
                  i.a.createElement(
                    "div",
                    { className: m.a.ProfileLink },
                    i.a.createElement(
                      v.c,
                      {
                        target: _.c.IN_GAMEPADUI ? void 0 : "_blank",
                        href: _.c.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
                      },
                      Object(d.f)("#ManageFriends_ProfileLink")
                    ),
                    i.a.createElement("br", null),
                    i.a.createElement(
                      "span",
                      { className: m.a.Body },
                      t.real_name,
                      i.a.createElement("br", null),
                      `${t.city}${t.city ? "," : ""} ${t.state}${
                        t.state ? "," : ""
                      } ${t.country}`
                    )
                  )
                ),
                r
              ),
              i.a.createElement(
                "div",
                { className: m.a.ProfileLink },
                t.is_friend &&
                  i.a.createElement(
                    "div",
                    null,
                    Object(d.f)("#ManageFriends_IsFriend")
                  ),
                0 != t.friends_in_common &&
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      v.c,
                      {
                        target: _.c.IN_GAMEPADUI ? void 0 : "_blank",
                        href:
                          _.c.COMMUNITY_BASE_URL +
                          "profiles/" +
                          t.steamid +
                          "/friendscommon",
                      },
                      1 === t.friends_in_common
                        ? Object(d.f)(
                            "#ManageFriends_FriendsInCommonSingular",
                            t.friends_in_common
                          )
                        : Object(d.f)(
                            "#ManageFriends_FriendsInCommon",
                            t.friends_in_common
                          )
                    )
                  ),
                a &&
                  "failure" === n &&
                  i.a.createElement(
                    "div",
                    { className: m.a.Failure },
                    Object(d.f)("#ManageFriends_InviteFailure")
                  ),
                a &&
                  "success" === n &&
                  i.a.createElement(
                    "div",
                    { className: m.a.Success },
                    Object(d.f)("#ManageFriends_InviteSuccess", t.persona_name)
                  )
              )
            )
          : null;
      };
    },
    OS6B: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      n("mgoM");
      var a = n("vDqi"),
        r = n.n(a),
        i = n("bxBv");
      function s(e) {
        if (r.a.isCancel(e))
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
            if ("object" == typeof e && e instanceof i.b)
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
    Qcoi: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return g;
        });
      var a = n("mrSG"),
        r = n("vDqi"),
        i = n.n(r),
        s = n("2vnA"),
        o = n("q1tI"),
        c = n.n(o),
        l = (n("mgoM"), n("65aj"), n("8H1D")),
        d = n("kLLr"),
        u = (n("AiWL"), n("r64O")),
        m = n("OS6B"),
        _ = n("lkRc");
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            Object(u.a)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs"
            );
            let n = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == n.length) return this.m_mapProfilesLoading.get(e[0]);
            let a = _.c.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              r = i.a.get(a, {
                params: { steamids: n.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            n.forEach((e) => this.m_mapProfilesLoading.set(e, r));
            let s = yield r;
            s.data &&
              200 == s.status &&
              s.data.forEach((e) => {
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
      Object(a.b)([s.C], f.prototype, "m_mapProfiles", void 0);
      const p = new f();
      function h(e) {
        const t = c.a.useMemo(
            () => (e ? ("string" == typeof e ? new d.a(e) : e) : null),
            [e]
          ),
          [n, a] = Object(o.useState)(!!t && !p.BHasProfileBySteamID(t));
        Object(o.useEffect)(() => {
          const e = i.a.CancelToken.source();
          return (
            t &&
              !p.BHasProfileBySteamID(t) &&
              p
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const n = Object(m.a)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      n.strErrorMsg,
                    n
                  );
                })
                .finally(() => {
                  e.token.reason || a(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [n, !!t && p.GetProfileBySteamID(t)];
      }
      function g(e) {
        return h(c.a.useMemo(() => d.a.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = p;
    },
    rt5e: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return s;
        });
      var a = n("q1tI"),
        r = n.n(a),
        i = n("McqU");
      function s() {
        return r.a.createElement(i.b, null);
      }
    },
  },
]);

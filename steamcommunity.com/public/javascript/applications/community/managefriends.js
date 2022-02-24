/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [100],
  {
    "8H1D": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var a = n("lkRc");
      const s = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function r(e, t) {
        let n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = s),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        let r = a.c.MEDIA_CDN_COMMUNITY_URL + "images/avatars/";
        return (
          (r += e.substr(0, 2) + "/" + e),
          t && "small" != t && (r += "_" + t),
          (r += n),
          r
        );
      }
    },
    AiWL: function (e, t, n) {
      "use strict";
      n("mgoM");
    },
    Cmuy: function (e, t, n) {
      var a = {
        "./managefriends_brazilian.json": ["QEZI", 101],
        "./managefriends_bulgarian.json": ["GBrP", 102],
        "./managefriends_czech.json": ["Inia", 103],
        "./managefriends_danish.json": ["mpv8", 104],
        "./managefriends_dutch.json": ["0HlU", 105],
        "./managefriends_english.json": ["nsfA", 106],
        "./managefriends_finnish.json": ["dEJT", 107],
        "./managefriends_french.json": ["2FtL", 108],
        "./managefriends_german.json": ["vp55", 109],
        "./managefriends_greek.json": ["lJ4a", 110],
        "./managefriends_hungarian.json": ["Gspr", 111],
        "./managefriends_italian.json": ["o9/S", 112],
        "./managefriends_japanese.json": ["1dTH", 113],
        "./managefriends_koreana.json": ["eLcJ", 114],
        "./managefriends_latam.json": ["JPfx", 115],
        "./managefriends_norwegian.json": ["SdNd", 116],
        "./managefriends_polish.json": ["9Isg", 117],
        "./managefriends_portuguese.json": ["rkGD", 118],
        "./managefriends_romanian.json": ["EAZq", 119],
        "./managefriends_russian.json": ["9GLV", 120],
        "./managefriends_sc_schinese.json": ["pKcs", 121],
        "./managefriends_schinese.json": ["uYkB", 122],
        "./managefriends_spanish.json": ["5gvD", 123],
        "./managefriends_swedish.json": ["ADK/", 124],
        "./managefriends_tchinese.json": ["lro4", 125],
        "./managefriends_thai.json": ["Ezt8", 126],
        "./managefriends_turkish.json": ["UONk", 127],
        "./managefriends_ukrainian.json": ["B7eG", 128],
        "./managefriends_vietnamese.json": ["EcJa", 129],
      };
      function s(e) {
        if (!n.o(a, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = a[e],
          s = t[0];
        return n.e(t[1]).then(function () {
          return n.t(s, 3);
        });
      }
      (s.keys = function () {
        return Object.keys(a);
      }),
        (s.id = "Cmuy"),
        (e.exports = s);
    },
    IASz: function (e, t, n) {
      e.exports = {
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
        return v;
      }),
        n.d(t, "a", function () {
          return b;
        });
      var a = n("mrSG"),
        s = n("q1tI"),
        r = n.n(s),
        i = n("opsS"),
        o = n("vDqi"),
        c = n.n(o),
        d = n("Mgs7"),
        l = n("TLQK"),
        u = n("IASz"),
        m = n.n(u),
        f = n("lkRc"),
        _ = n("kLLr"),
        h = n("X3Ds"),
        g = n("Qcoi"),
        p = (n("mgoM"), n("6Y59"));
      n("5h11");
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
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = yield c.a.get(
              f.c.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: f.c.SESSIONID } }
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
            e.append("sessionid", f.c.SESSIONID),
              e.append("steamid_user", f.h.steamid),
              e.append("duration", (2592e3).toString());
            const t = yield c.a.post(
              f.c.COMMUNITY_BASE_URL + "invites/ajaxcreate",
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
            Object(h.i)(t);
        }
        OnAddFriend(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", f.c.SESSIONID),
              t.append("steamid", e),
              t.append("accept_invite", "0");
            try {
              const e = yield c.a.post(
                f.c.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
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
            f.c.COMMUNITY_BASE_URL +
              "search/users/#text=" +
              encodeURIComponent(this.state.input_search),
            "_self"
          );
        }
        render() {
          const e = f.h.short_url + "/" + this.state.invite_token;
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: m.a.HeaderBlock },
              Object(l.f)("#ManageFriends_AddAFriend")
            ),
            r.a.createElement(
              "div",
              { className: m.a.Background },
              r.a.createElement(
                "h1",
                { className: m.a.Heading },
                Object(l.f)("#ManageFriends_YourFriendCode")
              ),
              r.a.createElement(
                "div",
                { className: m.a.CopyContainer },
                r.a.createElement("h1", { className: m.a.Text }, f.h.accountid),
                r.a.createElement(
                  d.r,
                  {
                    autoFocus: !0,
                    className: m.a.Button,
                    onClick: () =>
                      this.OnCopy("friend_code", String(f.h.accountid)),
                  },
                  this.state.friend_code_copied
                    ? Object(l.f)("#ManageFriends_Copied")
                    : Object(l.f)("#ManageFriends_Copy")
                )
              ),
              r.a.createElement(
                "p",
                { className: m.a.Body },
                Object(l.f)("#ManageFriends_EnterFriendCode")
              ),
              r.a.createElement(b, {
                onButtonClick: this.OnAddFriend,
                buttonText: Object(l.f)("#ManageFriends_SendInvite"),
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
                Object(l.f)("#ManageFriends_OrSendQuickInvite")
              ),
              r.a.createElement(
                "p",
                { className: m.a.Body },
                Object(l.f)("#ManageFriends_QuickInviteDescription")
              ),
              r.a.createElement(
                "p",
                { className: m.a.Body },
                Object(l.f)("#ManageFriends_QuickInviteNote")
              ),
              r.a.createElement(
                "div",
                { className: m.a.CopyContainer },
                Boolean(this.state.invite_token) &&
                  r.a.createElement("div", { className: m.a.Link }, e),
                r.a.createElement(
                  d.r,
                  {
                    className: m.a.Button,
                    onClick: () => this.OnCopy("invite", e),
                  },
                  this.state.invite_copied
                    ? Object(l.f)("#ManageFriends_Copied")
                    : Object(l.f)("#ManageFriends_Copy")
                )
              ),
              r.a.createElement(
                d.d,
                {
                  className: m.a.GenerateLinkButton,
                  onClick: this.OnCreateInviteLink,
                },
                Object(l.f)("#ManageFriends_CreateInviteLink")
              )
            ),
            r.a.createElement(
              "div",
              { className: m.a.Background },
              r.a.createElement(
                "h1",
                { className: m.a.Heading },
                Object(l.f)("#ManageFriends_OrSearch")
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
                  r.a.createElement(d.m, {
                    className: m.a.Input,
                    onKeyDown: this.OnSearchKeyDown,
                    value: this.state.input_search,
                    onChange: this.OnSearchChange,
                    placeholder: Object(l.f)("#ManageFriends_EnterProfileName"),
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
                  r.a.createElement(p.L, null)
                )
              )
            )
          );
        }
      }
      Object(a.b)([i.a], v.prototype, "OnCreateInviteLink", null),
        Object(a.b)([i.a], v.prototype, "OnCopy", null),
        Object(a.b)([i.a], v.prototype, "OnAddFriend", null),
        Object(a.b)([i.a], v.prototype, "OnSearchChange", null),
        Object(a.b)([i.a], v.prototype, "OnSearchKeyDown", null),
        Object(a.b)([i.a], v.prototype, "OnSearchSubmit", null);
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
              const t = _.a.InitFromAccountID(Number(e));
              yield g.a.LoadProfiles([t.ConvertTo64BitString()]);
              const n = g.a.GetProfile(t.ConvertTo64BitString());
              n
                ? this.setState({
                    searchResult: n,
                    disable_send_invite:
                      f.h.is_limited ||
                      (this.props.bDisableForFriends && n.is_friend) ||
                      (this.props.bDisableForSelf && n.steamid === f.h.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          });
        }
        OnActionClick(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", f.c.SESSIONID),
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
            r.a.createElement(d.m, {
              className: m.a.Input,
              value: this.state.input_friend_code,
              onChange: this.OnFriendCodeChange,
              placeholder: Object(l.f)(
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
                            f.c.COMMUNITY_BASE_URL +
                            "profiles/" +
                            this.state.searchResult.steamid,
                        },
                        Object(l.f)("#ManageFriends_ProfileLink")
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
                    d.r,
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
                        Object(l.f)("#ManageFriends_IsFriend")
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
                              f.c.COMMUNITY_BASE_URL +
                              "profiles/" +
                              this.state.searchResult.steamid +
                              "/friendscommon",
                          },
                          1 === this.state.searchResult.friends_in_common
                            ? Object(l.f)(
                                "#ManageFriends_FriendsInCommonSingular",
                                this.state.searchResult.friends_in_common
                              )
                            : Object(l.f)(
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
                      Object(l.f)("#ManageFriends_InviteFailure")
                    ),
                  this.props.bShowStatus &&
                    "success" === this.state.invite_status &&
                    r.a.createElement(
                      "div",
                      { className: m.a.Success },
                      Object(l.f)(
                        "#ManageFriends_InviteSuccess",
                        this.state.searchResult.persona_name
                      )
                    )
                )
              )
          );
        }
      }
      Object(a.b)([i.a], b.prototype, "OnFriendCodeChange", null),
        Object(a.b)([i.a], b.prototype, "LoadProfile", null),
        Object(a.b)([i.a], b.prototype, "OnActionClick", null);
    },
    OS6B: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      n("mgoM");
      var a = n("vDqi"),
        s = n.n(a);
      function r(e) {
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
          "string" == typeof e && e.length > 1024
            ? (console.groupCollapsed(
                "GetMsgAndErrorCodeFromResponse cannot parse: "
              ),
              console.error(e),
              console.groupEnd())
            : console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
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
        return _;
      }),
        n.d(t, "b", function () {
          return h;
        });
      var a = n("mrSG"),
        s = n("vDqi"),
        r = n.n(s),
        i = n("2vnA"),
        o = n("q1tI"),
        c = (n("mgoM"), n("kyHq"), n("8H1D")),
        d = n("kLLr"),
        l = (n("AiWL"), n("r64O")),
        u = n("OS6B"),
        m = n("lkRc");
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            Object(l.a)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs"
            );
            let n = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == n.length) return this.m_mapProfilesLoading.get(e[0]);
            let a = m.c.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              s = r.a.get(a, {
                params: { steamids: n.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            n.forEach((e) => this.m_mapProfilesLoading.set(e, s));
            let i = yield s;
            i.data &&
              200 == i.status &&
              i.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = Object(c.a)(e.avatar_url, "medium")),
                  (e.avatar_url_full = Object(c.a)(e.avatar_url, "full")),
                  (e.avatar_url = Object(c.a)(e.avatar_url)),
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
            ? m.c.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : m.c.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      Object(a.b)([i.C], f.prototype, "m_mapProfiles", void 0);
      const _ = new f();
      function h(e) {
        const t = e ? ("string" == typeof e ? new d.a(e) : e) : null,
          [n, a] = Object(o.useState)(!!t && !_.BHasProfileBySteamID(t));
        Object(o.useEffect)(() => {
          const e = r.a.CancelToken.source();
          return (
            t &&
              !_.BHasProfileBySteamID(t) &&
              _.LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const n = Object(u.a)(e);
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
        return [n, !!t && _.GetProfileBySteamID(t)];
      }
      window.g_ProfileStore = _;
    },
    rt5e: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return c;
        });
      var a = n("q1tI"),
        s = n.n(a),
        r = n("McqU"),
        i = n("lkRc"),
        o = n("TLQK");
      function c() {
        return (function () {
          const [e, t] = Object(a.useState)(!1);
          return (
            Object(a.useEffect)(() => {
              const e = i.c.LANGUAGE,
                a = o.b.GetLanguageFallback(e),
                s = e === a;
              Promise.all([
                n("Cmuy")(`./managefriends_${e}.json`),
                s ? void 0 : n("Cmuy")(`./managefriends_${a}.json`),
              ]).then(([e, n]) => {
                o.e.AddTokens(e.default, n ? n.default : void 0), t(!0);
              });
            }, []),
            e
          );
        })()
          ? s.a.createElement(r.b, null)
          : null;
      }
    },
  },
]);

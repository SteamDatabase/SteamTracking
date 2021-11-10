/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [100],
  {
    "8H1D": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return s;
        });
      var a = n("lkRc"),
        r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        var n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = r),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        var s = a.c.MEDIA_CDN_COMMUNITY_URL + "images/avatars/";
        return (
          (s += e.substr(0, 2) + "/" + e),
          t && "small" != t && (s += "_" + t),
          (s += n)
        );
      }
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
      function r(e) {
        if (!n.o(a, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = a[e],
          r = t[0];
        return n.e(t[1]).then(function () {
          return n.t(r, 3);
        });
      }
      (r.keys = function () {
        return Object.keys(a);
      }),
        (r.id = "Cmuy"),
        (e.exports = r);
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
        r = n("q1tI"),
        s = n.n(r),
        i = n("opsS"),
        o = n("vDqi"),
        c = n.n(o),
        u = n("Mgs7"),
        d = n("TLQK"),
        l = n("IASz"),
        f = n.n(l),
        m = n("lkRc"),
        p = n("kLLr"),
        _ = n("X3Ds"),
        h = n("Qcoi"),
        g = n("6Y59"),
        v = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                invite_token: "",
                input_search: "",
                friend_code_copied: !1,
                invite_copied: !1,
              }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        c.a.get(m.c.COMMUNITY_BASE_URL + "invites/ajaxgetall", {
                          params: { sessionid: m.c.SESSIONID },
                        }),
                      ];
                    case 1:
                      return (
                        (e = n.sent()) &&
                        e.data &&
                        e.data.tokens &&
                        (t = e.data.tokens.filter(function (e) {
                          return e.valid;
                        })).length
                          ? this.setState({ invite_token: t[0].invite_token })
                          : this.OnCreateInviteLink(),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.OnCreateInviteLink = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = new FormData()).append("sessionid", m.c.SESSIONID),
                        e.append("steamid_user", m.h.steamid),
                        e.append("duration", (2592e3).toString()),
                        [
                          4,
                          c.a.post(
                            m.c.COMMUNITY_BASE_URL + "invites/ajaxcreate",
                            e
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (t = n.sent()) &&
                          t.data &&
                          t.data.invite &&
                          this.setState({
                            invite_token: t.data.invite.invite_token,
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.OnCopy = function (e, t) {
              var n = this;
              "friend_code" === e &&
                (this.setState({ friend_code_copied: !0 }),
                setTimeout(function () {
                  return n.setState({ friend_code_copied: !1 });
                }, 1e3)),
                "invite" === e &&
                  (this.setState({ invite_copied: !0 }),
                  setTimeout(function () {
                    return n.setState({ invite_copied: !1 });
                  }, 1e3)),
                Object(_.i)(t);
            }),
            (t.prototype.OnAddFriend = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      (t = new FormData()).append("sessionID", m.c.SESSIONID),
                        t.append("steamid", e),
                        t.append("accept_invite", "0"),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        [
                          4,
                          c.a.post(
                            m.c.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                            t
                          ),
                        ]
                      );
                    case 2:
                      return [
                        2,
                        (n = a.sent()) && n.data && 1 == n.data.success,
                      ];
                    case 3:
                      return a.sent(), [2, !1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.OnSearchChange = function (e) {
              this.setState({ input_search: e.target.value });
            }),
            (t.prototype.OnSearchKeyDown = function (e) {
              13 === e.keyCode && this.OnSearchSubmit();
            }),
            (t.prototype.OnSearchSubmit = function () {
              window.open(
                m.c.COMMUNITY_BASE_URL +
                  "search/users/#text=" +
                  encodeURIComponent(this.state.input_search),
                "_self"
              );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = m.h.short_url + "/" + this.state.invite_token;
              return s.a.createElement(
                "div",
                null,
                s.a.createElement(
                  "div",
                  { className: f.a.HeaderBlock },
                  Object(d.f)("#ManageFriends_AddAFriend")
                ),
                s.a.createElement(
                  "div",
                  { className: f.a.Background },
                  s.a.createElement(
                    "h1",
                    { className: f.a.Heading },
                    Object(d.f)("#ManageFriends_YourFriendCode")
                  ),
                  s.a.createElement(
                    "div",
                    { className: f.a.CopyContainer },
                    s.a.createElement(
                      "h1",
                      { className: f.a.Text },
                      m.h.accountid
                    ),
                    s.a.createElement(
                      u.d,
                      {
                        className: f.a.Button,
                        onClick: function () {
                          return e.OnCopy("friend_code", String(m.h.accountid));
                        },
                      },
                      this.state.friend_code_copied
                        ? Object(d.f)("#ManageFriends_Copied")
                        : Object(d.f)("#ManageFriends_Copy")
                    )
                  ),
                  s.a.createElement(
                    "p",
                    { className: f.a.Body },
                    Object(d.f)("#ManageFriends_EnterFriendCode")
                  ),
                  s.a.createElement(b, {
                    onButtonClick: this.OnAddFriend,
                    buttonText: Object(d.f)("#ManageFriends_SendInvite"),
                    bDisableForSelfAndFriends: !0,
                    bShowStatus: !0,
                  })
                ),
                s.a.createElement(
                  "div",
                  { className: f.a.DimBackground },
                  s.a.createElement(
                    "h1",
                    { className: f.a.Heading },
                    Object(d.f)("#ManageFriends_OrSendQuickInvite")
                  ),
                  s.a.createElement(
                    "p",
                    { className: f.a.Body },
                    Object(d.f)("#ManageFriends_QuickInviteDescription")
                  ),
                  s.a.createElement(
                    "p",
                    { className: f.a.Body },
                    Object(d.f)("#ManageFriends_QuickInviteNote")
                  ),
                  s.a.createElement(
                    "div",
                    { className: f.a.CopyContainer },
                    Boolean(this.state.invite_token) &&
                      s.a.createElement("div", { className: f.a.Link }, t),
                    s.a.createElement(
                      u.d,
                      {
                        className: f.a.Button,
                        onClick: function () {
                          return e.OnCopy("invite", t);
                        },
                      },
                      this.state.invite_copied
                        ? Object(d.f)("#ManageFriends_Copied")
                        : Object(d.f)("#ManageFriends_Copy")
                    )
                  ),
                  s.a.createElement(
                    u.q,
                    {
                      style: {
                        width: "fit-content",
                        padding: "0px 20px 0px 20px",
                      },
                      onClick: this.OnCreateInviteLink,
                    },
                    Object(d.f)("#ManageFriends_CreateInviteLink")
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: f.a.Background },
                  s.a.createElement(
                    "h1",
                    { className: f.a.Heading },
                    Object(d.f)("#ManageFriends_OrSearch")
                  ),
                  s.a.createElement("br", null),
                  s.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "598px",
                        position: "relative",
                      },
                    },
                    s.a.createElement(
                      "div",
                      { style: { width: "100%" } },
                      s.a.createElement(u.l, {
                        className: f.a.Input,
                        onKeyDown: this.OnSearchKeyDown,
                        value: this.state.input_search,
                        onChange: this.OnSearchChange,
                        placeholder: Object(d.f)(
                          "#ManageFriends_EnterProfileName"
                        ),
                      })
                    ),
                    s.a.createElement(
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
                      s.a.createElement(g.G, null)
                    )
                  )
                )
              );
            }),
            Object(a.c)([i.a], t.prototype, "OnCreateInviteLink", null),
            Object(a.c)([i.a], t.prototype, "OnCopy", null),
            Object(a.c)([i.a], t.prototype, "OnAddFriend", null),
            Object(a.c)([i.a], t.prototype, "OnSearchChange", null),
            Object(a.c)([i.a], t.prototype, "OnSearchKeyDown", null),
            Object(a.c)([i.a], t.prototype, "OnSearchSubmit", null),
            t
          );
        })(s.a.Component),
        b = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                input_friend_code: "",
                disable_send_invite: !1,
                searchResult: null,
                invite_status: "pending",
              }),
              (t.m_currentRequest = 0),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnFriendCodeChange = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t,
                  n = this;
                return Object(a.e)(this, function (a) {
                  return (
                    (t = e.target.value.split(",")[0]),
                    this.setState({
                      input_friend_code: t,
                      invite_status: "pending",
                    }),
                    window.clearTimeout(this.m_currentRequest),
                    (this.m_currentRequest = window.setTimeout(function () {
                      return n.LoadProfile(t);
                    }, 500)),
                    [2]
                  );
                });
              });
            }),
            (t.prototype.LoadProfile = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return e
                        ? ((t = p.a.InitFromAccountID(Number(e))),
                          [4, h.a.LoadProfiles([t.ConvertTo64BitString()])])
                        : [3, 2];
                    case 1:
                      return (
                        a.sent(),
                        (n = h.a.GetProfile(t.ConvertTo64BitString()))
                          ? this.setState({
                              searchResult: n,
                              disable_send_invite:
                                m.h.is_limited ||
                                (this.props.bDisableForSelfAndFriends &&
                                  (n.is_friend || n.steamid === m.h.steamid)),
                            })
                          : this.setState({ searchResult: null }),
                        [3, 3]
                      );
                    case 2:
                      this.setState({ searchResult: null }), (a.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.OnActionClick = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t,
                  n = this;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = new FormData()).append("sessionID", m.c.SESSIONID),
                        t.append("steamid", e),
                        t.append("accept_invite", "0"),
                        this.setState({ disable_send_invite: !0 }),
                        [4, this.props.onButtonClick(e)]
                      );
                    case 1:
                      return (
                        a.sent()
                          ? (this.setState({
                              input_friend_code: "",
                              invite_status: "success",
                            }),
                            setTimeout(function () {
                              return n.setState({ searchResult: null });
                            }, 3e3))
                          : this.setState({
                              invite_status: "failure",
                              disable_send_invite: !1,
                            }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              var e = this;
              return s.a.createElement(
                "div",
                null,
                s.a.createElement(u.l, {
                  className: f.a.Input,
                  value: this.state.input_friend_code,
                  onChange: this.OnFriendCodeChange,
                  placeholder: Object(d.f)(
                    "#ManageFriends_EnterFriendCodePlaceholder"
                  ),
                }),
                Boolean(this.state.searchResult) &&
                  s.a.createElement(
                    "div",
                    { className: f.a.ProfileCard },
                    s.a.createElement(
                      "div",
                      { className: f.a.UserContainer },
                      s.a.createElement(
                        "div",
                        { className: f.a.Image },
                        s.a.createElement("img", {
                          style: { width: "100%", height: "100%" },
                          src: this.state.searchResult.avatar_url_full,
                        })
                      ),
                      s.a.createElement(
                        "div",
                        { className: f.a.ProfileContent },
                        s.a.createElement(
                          "h1",
                          { className: f.a.Heading },
                          this.state.searchResult.persona_name
                        ),
                        s.a.createElement(
                          "div",
                          { className: f.a.ProfileLink },
                          s.a.createElement(
                            "a",
                            {
                              target: "_blank",
                              href:
                                m.c.COMMUNITY_BASE_URL +
                                "profiles/" +
                                this.state.searchResult.steamid,
                            },
                            Object(d.f)("#ManageFriends_ProfileLink")
                          ),
                          s.a.createElement("br", null),
                          s.a.createElement(
                            "span",
                            { className: f.a.Body },
                            this.state.searchResult.real_name,
                            s.a.createElement("br", null),
                            this.state.searchResult.city +
                              (this.state.searchResult.city ? "," : "") +
                              " " +
                              this.state.searchResult.state +
                              (this.state.searchResult.state ? "," : "") +
                              " " +
                              this.state.searchResult.country
                          )
                        )
                      ),
                      s.a.createElement(
                        u.q,
                        {
                          onClick: function () {
                            return e.OnActionClick(
                              e.state.searchResult.steamid
                            );
                          },
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
                    s.a.createElement(
                      "div",
                      { className: f.a.ProfileLink },
                      this.state.searchResult.is_friend
                        ? s.a.createElement(
                            "div",
                            null,
                            Object(d.f)("#ManageFriends_IsFriend")
                          )
                        : null,
                      this.state.searchResult.friends_in_common
                        ? s.a.createElement(
                            "div",
                            null,
                            s.a.createElement(
                              "a",
                              {
                                target: "_blank",
                                href:
                                  m.c.COMMUNITY_BASE_URL +
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
                        s.a.createElement(
                          "div",
                          { className: f.a.Failure },
                          Object(d.f)("#ManageFriends_InviteFailure")
                        ),
                      this.props.bShowStatus &&
                        "success" === this.state.invite_status &&
                        s.a.createElement(
                          "div",
                          { className: f.a.Success },
                          Object(d.f)(
                            "#ManageFriends_InviteSuccess",
                            this.state.searchResult.persona_name
                          )
                        )
                    )
                  )
              );
            }),
            Object(a.c)([i.a], t.prototype, "OnFriendCodeChange", null),
            Object(a.c)([i.a], t.prototype, "LoadProfile", null),
            Object(a.c)([i.a], t.prototype, "OnActionClick", null),
            t
          );
        })(s.a.Component);
    },
    OS6B: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n("vDqi"),
        r = n.n(a);
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
        return m;
      }),
        n.d(t, "b", function () {
          return p;
        });
      var a = n("mrSG"),
        r = n("vDqi"),
        s = n.n(r),
        i = n("2vnA"),
        o = n("q1tI"),
        c = n("8H1D"),
        u = n("kLLr"),
        d = n("r64O"),
        l = n("OS6B"),
        f = n("lkRc"),
        m = new ((function () {
          function e() {
            (this.m_mapProfiles = new Map()),
              (this.m_mapProfilesLoading = new Map());
          }
          return (
            (e.prototype.LoadProfiles = function (e, t) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n,
                  r,
                  i,
                  o,
                  u = this;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        Object(d.a)(
                          e.length <= 500,
                          "Check LoadProfiles, requesting too many steam IDs"
                        ),
                        0 ==
                        (n = e.filter(function (e) {
                          return (
                            !u.m_mapProfiles.has(e) &&
                            !u.m_mapProfilesLoading.has(e)
                          );
                        })).length
                          ? [2, this.m_mapProfilesLoading.get(e[0])]
                          : ((r =
                              f.c.COMMUNITY_BASE_URL +
                              "actions/ajaxresolveusers"),
                            (i = s.a.get(r, {
                              params: { steamids: n.join(",") },
                              withCredentials: !0,
                              cancelToken: null == t ? void 0 : t.token,
                            })),
                            n.forEach(function (e) {
                              return u.m_mapProfilesLoading.set(e, i);
                            }),
                            [4, i])
                      );
                    case 1:
                      return (
                        (o = a.sent()).data &&
                          200 == o.status &&
                          o.data.forEach(function (e) {
                            (e.avatar_hash = e.avatar_url),
                              (e.avatar_url_medium = Object(c.a)(
                                e.avatar_url,
                                "medium"
                              )),
                              (e.avatar_url_full = Object(c.a)(
                                e.avatar_url,
                                "full"
                              )),
                              (e.avatar_url = Object(c.a)(e.avatar_url)),
                              u.m_mapProfiles.set(e.steamid, e),
                              u.m_mapProfilesLoading.delete(e.steamid);
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.GetProfile = function (e) {
              return this.m_mapProfiles.get(e);
            }),
            (e.prototype.GetProfileByAccountID = function (e) {
              return this.m_mapProfiles.get(
                u.a.InitFromAccountID(e).ConvertTo64BitString()
              );
            }),
            (e.prototype.GetProfileBySteamID = function (e) {
              return this.m_mapProfiles.get(e.ConvertTo64BitString());
            }),
            (e.prototype.BHasProfile = function (e) {
              return this.m_mapProfiles.has(e);
            }),
            (e.prototype.BHasProfileByAccountID = function (e) {
              return this.m_mapProfiles.has(
                u.a.InitFromAccountID(e).ConvertTo64BitString()
              );
            }),
            (e.prototype.BHasProfileBySteamID = function (e) {
              return this.m_mapProfiles.has(e.ConvertTo64BitString());
            }),
            (e.prototype.GetProfileURLBySteamID = function (e) {
              var t = this.GetProfileBySteamID(e);
              return t && t.profile_url
                ? f.c.COMMUNITY_BASE_URL + "id/" + t.profile_url
                : f.c.COMMUNITY_BASE_URL +
                    "profiles/" +
                    e.ConvertTo64BitString();
            }),
            (e.prototype.GetPersonaNameBySteamID = function (e) {
              var t = this.GetProfileBySteamID(e);
              return t && t.persona_name ? t.persona_name : "";
            }),
            Object(a.c)([i.C], e.prototype, "m_mapProfiles", void 0),
            e
          );
        })())();
      function p(e) {
        var t = e ? ("string" == typeof e ? new u.a(e) : e) : null,
          n = Object(o.useState)(!!t && !m.BHasProfileBySteamID(t)),
          a = n[0],
          r = n[1];
        return (
          Object(o.useEffect)(
            function () {
              var e = s.a.CancelToken.source();
              return (
                t &&
                  !m.BHasProfileBySteamID(t) &&
                  m
                    .LoadProfiles([t.ConvertTo64BitString()])
                    .catch(function (e) {
                      var n = Object(l.a)(e);
                      console.error(
                        "useUserProfile failed to load profile for " +
                          t.ConvertTo64BitString() +
                          ": " +
                          n.strErrorMsg,
                        n
                      );
                    })
                    .finally(function () {
                      e.token.reason || r(!1);
                    }),
                function () {
                  return e.cancel("unmounting useUserProfile");
                }
              );
            },
            [e]
          ),
          [a, !!t && m.GetProfileBySteamID(t)]
        );
      }
      window.g_ProfileStore = m;
    },
    rt5e: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return c;
        });
      var a = n("q1tI"),
        r = n.n(a),
        s = n("McqU"),
        i = n("lkRc"),
        o = n("TLQK");
      function c() {
        return (function () {
          var e = Object(a.useState)(!1),
            t = e[0],
            r = e[1];
          return (
            Object(a.useEffect)(function () {
              var e = i.c.LANGUAGE,
                t = o.b.GetLanguageFallback(e),
                a = e === t;
              Promise.all([
                n("Cmuy")("./managefriends_" + e + ".json"),
                a ? void 0 : n("Cmuy")("./managefriends_" + t + ".json"),
              ]).then(function (e) {
                var t = e[0],
                  n = e[1];
                o.e.AddTokens(t.default, n ? n.default : void 0), r(!0);
              });
            }, []),
            t
          );
        })()
          ? r.a.createElement(s.b, null)
          : null;
      }
    },
  },
]);

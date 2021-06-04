/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [72],
  {
    "8H1D": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var a = n("lkRc"),
        i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function r(e, t) {
        var n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = i),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        var r = a.c.MEDIA_CDN_COMMUNITY_URL + "images/avatars/";
        return (
          (r += e.substr(0, 2) + "/" + e),
          t && "small" != t && (r += "_" + t),
          (r += n)
        );
      }
    },
    Cmuy: function (e, t, n) {
      var a = {
        "./managefriends_brazilian.json": ["QEZI", 75],
        "./managefriends_bulgarian.json": ["GBrP", 76],
        "./managefriends_czech.json": ["Inia", 77],
        "./managefriends_danish.json": ["mpv8", 78],
        "./managefriends_dutch.json": ["0HlU", 79],
        "./managefriends_english.json": ["nsfA", 80],
        "./managefriends_finnish.json": ["dEJT", 81],
        "./managefriends_french.json": ["2FtL", 82],
        "./managefriends_german.json": ["vp55", 83],
        "./managefriends_greek.json": ["lJ4a", 84],
        "./managefriends_hungarian.json": ["Gspr", 85],
        "./managefriends_italian.json": ["o9/S", 86],
        "./managefriends_japanese.json": ["1dTH", 87],
        "./managefriends_koreana.json": ["eLcJ", 88],
        "./managefriends_latam.json": ["JPfx", 89],
        "./managefriends_norwegian.json": ["SdNd", 90],
        "./managefriends_polish.json": ["9Isg", 91],
        "./managefriends_portuguese.json": ["rkGD", 92],
        "./managefriends_romanian.json": ["EAZq", 93],
        "./managefriends_russian.json": ["9GLV", 94],
        "./managefriends_sc_schinese.json": ["pKcs", 95],
        "./managefriends_schinese.json": ["uYkB", 96],
        "./managefriends_spanish.json": ["5gvD", 97],
        "./managefriends_swedish.json": ["ADK/", 98],
        "./managefriends_tchinese.json": ["lro4", 99],
        "./managefriends_thai.json": ["Ezt8", 100],
        "./managefriends_turkish.json": ["UONk", 101],
        "./managefriends_ukrainian.json": ["B7eG", 102],
        "./managefriends_vietnamese.json": ["EcJa", 103],
      };
      function i(e) {
        if (!n.o(a, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = a[e],
          i = t[0];
        return n.e(t[1]).then(function () {
          return n.t(i, 3);
        });
      }
      (i.keys = function () {
        return Object.keys(a);
      }),
        (i.id = "Cmuy"),
        (e.exports = i);
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
        i = n("q1tI"),
        r = n.n(i),
        s = n("bxiW"),
        o = n("vDqi"),
        c = n.n(o),
        l = n("Mgs7"),
        u = n("TLQK"),
        d = n("IASz"),
        f = n.n(d),
        m = n("lkRc"),
        _ = n("kLLr"),
        p = n("X3Ds"),
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
                        e.append("steamid_user", m.i.steamid),
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
                Object(p.i)(t);
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
                t = m.i.short_url + "/" + this.state.invite_token;
              return r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "div",
                  { className: f.a.HeaderBlock },
                  Object(u.f)("#ManageFriends_AddAFriend")
                ),
                r.a.createElement(
                  "div",
                  { className: f.a.Background },
                  r.a.createElement(
                    "h1",
                    { className: f.a.Heading },
                    Object(u.f)("#ManageFriends_YourFriendCode")
                  ),
                  r.a.createElement(
                    "div",
                    { className: f.a.CopyContainer },
                    r.a.createElement(
                      "h1",
                      { className: f.a.Text },
                      m.i.accountid
                    ),
                    r.a.createElement(
                      l.d,
                      {
                        className: f.a.Button,
                        onClick: function () {
                          return e.OnCopy("friend_code", String(m.i.accountid));
                        },
                      },
                      this.state.friend_code_copied
                        ? Object(u.f)("#ManageFriends_Copied")
                        : Object(u.f)("#ManageFriends_Copy")
                    )
                  ),
                  r.a.createElement(
                    "p",
                    { className: f.a.Body },
                    Object(u.f)("#ManageFriends_EnterFriendCode")
                  ),
                  r.a.createElement(b, {
                    onButtonClick: this.OnAddFriend,
                    buttonText: Object(u.f)("#ManageFriends_SendInvite"),
                    bDisableForSelfAndFriends: !0,
                    bShowStatus: !0,
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: f.a.DimBackground },
                  r.a.createElement(
                    "h1",
                    { className: f.a.Heading },
                    Object(u.f)("#ManageFriends_OrSendQuickInvite")
                  ),
                  r.a.createElement(
                    "p",
                    { className: f.a.Body },
                    Object(u.f)("#ManageFriends_QuickInviteDescription")
                  ),
                  r.a.createElement(
                    "p",
                    { className: f.a.Body },
                    Object(u.f)("#ManageFriends_QuickInviteNote")
                  ),
                  r.a.createElement(
                    "div",
                    { className: f.a.CopyContainer },
                    Boolean(this.state.invite_token) &&
                      r.a.createElement("div", { className: f.a.Link }, t),
                    r.a.createElement(
                      l.d,
                      {
                        className: f.a.Button,
                        onClick: function () {
                          return e.OnCopy("invite", t);
                        },
                      },
                      this.state.invite_copied
                        ? Object(u.f)("#ManageFriends_Copied")
                        : Object(u.f)("#ManageFriends_Copy")
                    )
                  ),
                  r.a.createElement(
                    l.r,
                    {
                      style: {
                        width: "fit-content",
                        padding: "0px 20px 0px 20px",
                      },
                      onClick: this.OnCreateInviteLink,
                    },
                    Object(u.f)("#ManageFriends_CreateInviteLink")
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: f.a.Background },
                  r.a.createElement(
                    "h1",
                    { className: f.a.Heading },
                    Object(u.f)("#ManageFriends_OrSearch")
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
                      r.a.createElement(l.m, {
                        className: f.a.Input,
                        onKeyDown: this.OnSearchKeyDown,
                        value: this.state.input_search,
                        onChange: this.OnSearchChange,
                        placeholder: Object(u.f)(
                          "#ManageFriends_EnterProfileName"
                        ),
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
                      r.a.createElement(g.F, null)
                    )
                  )
                )
              );
            }),
            Object(a.c)([s.a], t.prototype, "OnCreateInviteLink", null),
            Object(a.c)([s.a], t.prototype, "OnCopy", null),
            Object(a.c)([s.a], t.prototype, "OnAddFriend", null),
            Object(a.c)([s.a], t.prototype, "OnSearchChange", null),
            Object(a.c)([s.a], t.prototype, "OnSearchKeyDown", null),
            Object(a.c)([s.a], t.prototype, "OnSearchSubmit", null),
            t
          );
        })(r.a.Component),
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
                        ? ((t = _.a.InitFromAccountID(Number(e))),
                          [4, h.a.LoadProfiles([t.ConvertTo64BitString()])])
                        : [3, 2];
                    case 1:
                      return (
                        a.sent(),
                        (n = h.a.GetProfile(t.ConvertTo64BitString()))
                          ? this.setState({
                              searchResult: n,
                              disable_send_invite:
                                m.i.is_limited ||
                                (this.props.bDisableForSelfAndFriends &&
                                  (n.is_friend || n.steamid === m.i.steamid)),
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
              return r.a.createElement(
                "div",
                null,
                r.a.createElement(l.m, {
                  className: f.a.Input,
                  value: this.state.input_friend_code,
                  onChange: this.OnFriendCodeChange,
                  placeholder: Object(u.f)(
                    "#ManageFriends_EnterFriendCodePlaceholder"
                  ),
                }),
                Boolean(this.state.searchResult) &&
                  r.a.createElement(
                    "div",
                    { className: f.a.ProfileCard },
                    r.a.createElement(
                      "div",
                      { className: f.a.UserContainer },
                      r.a.createElement(
                        "div",
                        { className: f.a.Image },
                        r.a.createElement("img", {
                          style: { width: "100%", height: "100%" },
                          src: this.state.searchResult.avatar_url_full,
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: f.a.ProfileContent },
                        r.a.createElement(
                          "h1",
                          { className: f.a.Heading },
                          this.state.searchResult.persona_name
                        ),
                        r.a.createElement(
                          "div",
                          { className: f.a.ProfileLink },
                          r.a.createElement(
                            "a",
                            {
                              target: "_blank",
                              href:
                                m.c.COMMUNITY_BASE_URL +
                                "profiles/" +
                                this.state.searchResult.steamid,
                            },
                            Object(u.f)("#ManageFriends_ProfileLink")
                          ),
                          r.a.createElement("br", null),
                          r.a.createElement(
                            "span",
                            { className: f.a.Body },
                            this.state.searchResult.real_name,
                            r.a.createElement("br", null),
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
                      r.a.createElement(
                        l.r,
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
                    r.a.createElement(
                      "div",
                      { className: f.a.ProfileLink },
                      this.state.searchResult.is_friend
                        ? r.a.createElement(
                            "div",
                            null,
                            Object(u.f)("#ManageFriends_IsFriend")
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
                                  m.c.COMMUNITY_BASE_URL +
                                  "profiles/" +
                                  this.state.searchResult.steamid +
                                  "/friendscommon",
                              },
                              1 === this.state.searchResult.friends_in_common
                                ? Object(u.f)(
                                    "#ManageFriends_FriendsInCommonSingular",
                                    this.state.searchResult.friends_in_common
                                  )
                                : Object(u.f)(
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
                          { className: f.a.Failure },
                          Object(u.f)("#ManageFriends_InviteFailure")
                        ),
                      this.props.bShowStatus &&
                        "success" === this.state.invite_status &&
                        r.a.createElement(
                          "div",
                          { className: f.a.Success },
                          Object(u.f)(
                            "#ManageFriends_InviteSuccess",
                            this.state.searchResult.persona_name
                          )
                        )
                    )
                  )
              );
            }),
            Object(a.c)([s.a], t.prototype, "OnFriendCodeChange", null),
            Object(a.c)([s.a], t.prototype, "LoadProfile", null),
            Object(a.c)([s.a], t.prototype, "OnActionClick", null),
            t
          );
        })(r.a.Component);
    },
    Qcoi: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      }),
        n.d(t, "b", function () {
          return _;
        });
      var a = n("mrSG"),
        i = n("vDqi"),
        r = n.n(i),
        s = n("2vnA"),
        o = n("q1tI"),
        c = n("8H1D"),
        l = n("kLLr"),
        u = n("r64O"),
        d = n("bDQf"),
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
                  i,
                  s,
                  o,
                  l = this;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        Object(u.a)(
                          e.length <= 500,
                          "Check LoadProfiles, requesting too many steam IDs"
                        ),
                        0 ==
                        (n = e.filter(function (e) {
                          return (
                            !l.m_mapProfiles.has(e) &&
                            !l.m_mapProfilesLoading.has(e)
                          );
                        })).length
                          ? [2, this.m_mapProfilesLoading.get(e[0])]
                          : ((i =
                              f.c.COMMUNITY_BASE_URL +
                              "actions/ajaxresolveusers"),
                            (s = r.a.get(i, {
                              params: { steamids: n.join(",") },
                              withCredentials: !0,
                              cancelToken: null == t ? void 0 : t.token,
                            })),
                            n.forEach(function (e) {
                              return l.m_mapProfilesLoading.set(e, s);
                            }),
                            [4, s])
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
                              l.m_mapProfiles.set(e.steamid, e),
                              l.m_mapProfilesLoading.delete(e.steamid);
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
                l.a.InitFromAccountID(e).ConvertTo64BitString()
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
                l.a.InitFromAccountID(e).ConvertTo64BitString()
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
            Object(a.c)([s.C], e.prototype, "m_mapProfiles", void 0),
            e
          );
        })())();
      function _(e) {
        var t = "string" == typeof e ? new l.a(e) : e,
          n = Object(o.useState)(!m.BHasProfileBySteamID(t)),
          a = n[0],
          i = n[1];
        return (
          Object(o.useEffect)(
            function () {
              var e = r.a.CancelToken.source();
              return (
                m.BHasProfileBySteamID(t) ||
                  m
                    .LoadProfiles([t.ConvertTo64BitString()])
                    .catch(function (e) {
                      var n = Object(d.a)(e);
                      console.error(
                        "useUserProfile failed to load profile for " +
                          t.ConvertTo64BitString() +
                          ": " +
                          n.strErrorMsg,
                        n
                      );
                    })
                    .finally(function () {
                      e.token.reason || i(!1);
                    }),
                function () {
                  return e.cancel("unmounting useUserProfile");
                }
              );
            },
            [e]
          ),
          [a, m.GetProfileBySteamID(t)]
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
        i = n.n(a),
        r = n("McqU"),
        s = n("lkRc"),
        o = n("TLQK");
      function c() {
        return (function () {
          var e = Object(a.useState)(!1),
            t = e[0],
            i = e[1];
          return (
            Object(a.useEffect)(function () {
              var e = s.c.LANGUAGE,
                t = o.b.GetLanguageFallback(e),
                a = e === t;
              Promise.all([
                n("Cmuy")("./managefriends_" + e + ".json"),
                a ? void 0 : n("Cmuy")("./managefriends_" + t + ".json"),
              ]).then(function (e) {
                var t = e[0],
                  n = e[1];
                o.e.AddTokens(t.default, n ? n.default : void 0), i(!0);
              });
            }, []),
            t
          );
        })()
          ? i.a.createElement(r.b, null)
          : null;
      }
    },
  },
]);

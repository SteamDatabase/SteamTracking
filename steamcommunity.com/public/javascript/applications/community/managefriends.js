/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [72],
  {
    "8H1D": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return a;
        });
      var i = n("lkRc"),
        r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, t) {
        var n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = r),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        var a = i.c.MEDIA_CDN_COMMUNITY_URL + "images/avatars/";
        return (
          (a += e.substr(0, 2) + "/" + e),
          t && "small" != t && (a += "_" + t),
          (a += n)
        );
      }
    },
    Cmuy: function (e, t, a) {
      var i = {
        "./managefriends_brazilian.json": ["QEZI", 73],
        "./managefriends_bulgarian.json": ["GBrP", 74],
        "./managefriends_czech.json": ["Inia", 75],
        "./managefriends_danish.json": ["mpv8", 76],
        "./managefriends_dutch.json": ["0HlU", 77],
        "./managefriends_english.json": ["nsfA", 78],
        "./managefriends_finnish.json": ["dEJT", 79],
        "./managefriends_french.json": ["2FtL", 80],
        "./managefriends_german.json": ["vp55", 81],
        "./managefriends_greek.json": ["lJ4a", 82],
        "./managefriends_hungarian.json": ["Gspr", 83],
        "./managefriends_italian.json": ["o9/S", 84],
        "./managefriends_japanese.json": ["1dTH", 85],
        "./managefriends_koreana.json": ["eLcJ", 86],
        "./managefriends_latam.json": ["JPfx", 87],
        "./managefriends_norwegian.json": ["SdNd", 88],
        "./managefriends_polish.json": ["9Isg", 89],
        "./managefriends_portuguese.json": ["rkGD", 90],
        "./managefriends_romanian.json": ["EAZq", 91],
        "./managefriends_russian.json": ["9GLV", 92],
        "./managefriends_sc_schinese.json": ["pKcs", 93],
        "./managefriends_schinese.json": ["uYkB", 94],
        "./managefriends_spanish.json": ["5gvD", 95],
        "./managefriends_swedish.json": ["ADK/", 96],
        "./managefriends_tchinese.json": ["lro4", 97],
        "./managefriends_thai.json": ["Ezt8", 98],
        "./managefriends_turkish.json": ["UONk", 99],
        "./managefriends_ukrainian.json": ["B7eG", 100],
        "./managefriends_vietnamese.json": ["EcJa", 101],
      };
      function n(t) {
        var n = i[t];
        return n
          ? a.e(n[1]).then(function () {
              var e = n[0];
              return a.t(e, 3);
            })
          : Promise.resolve().then(function () {
              var e = new Error("Cannot find module '" + t + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
      }
      (n.keys = function () {
        return Object.keys(i);
      }),
        (n.id = "Cmuy"),
        (e.exports = n);
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
      var i = n("mrSG"),
        a = n("q1tI"),
        r = n.n(a),
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
        v = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                invite_token: "",
                input_search: "",
                friend_code_copied: !1,
                invite_copied: !1,
              }),
              e
            );
          }
          return (
            Object(i.d)(e, t),
            (e.prototype.componentDidMount = function () {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(i.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        c.a.get(m.c.COMMUNITY_BASE_URL + "invites/ajaxgetall", {
                          params: { sessionid: m.c.SESSIONID },
                        }),
                      ];
                    case 1:
                      return (
                        (t = e.sent()) &&
                        t.data &&
                        t.data.tokens &&
                        (n = t.data.tokens.filter(function (e) {
                          return e.valid;
                        })).length
                          ? this.setState({ invite_token: n[0].invite_token })
                          : this.OnCreateInviteLink(),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.OnCreateInviteLink = function () {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(i.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new FormData()).append("sessionid", m.c.SESSIONID),
                        t.append("steamid_user", m.i.steamid),
                        t.append("duration", (2592e3).toString()),
                        [
                          4,
                          c.a.post(
                            m.c.COMMUNITY_BASE_URL + "invites/ajaxcreate",
                            t
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (n = e.sent()) &&
                          n.data &&
                          n.data.invite &&
                          this.setState({
                            invite_token: n.data.invite.invite_token,
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.OnCopy = function (e, t) {
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
                Object(p.h)(t);
            }),
            (e.prototype.OnAddFriend = function (a) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(i.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = new FormData()).append("sessionID", m.c.SESSIONID),
                        t.append("steamid", a),
                        t.append("accept_invite", "0"),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
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
                        (n = e.sent()) && n.data && 1 == n.data.success,
                      ];
                    case 3:
                      return e.sent(), [2, !1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnSearchChange = function (e) {
              this.setState({ input_search: e.target.value });
            }),
            (e.prototype.OnSearchKeyDown = function (e) {
              13 === e.keyCode && this.OnSearchSubmit();
            }),
            (e.prototype.OnSearchSubmit = function () {
              window.open(
                m.c.COMMUNITY_BASE_URL +
                  "search/users/#text=" +
                  encodeURIComponent(this.state.input_search),
                "_self"
              );
            }),
            (e.prototype.render = function () {
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
                    l.q,
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
                      r.a.createElement(l.l, {
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
            Object(i.c)([s.a], e.prototype, "OnCreateInviteLink", null),
            Object(i.c)([s.a], e.prototype, "OnCopy", null),
            Object(i.c)([s.a], e.prototype, "OnAddFriend", null),
            Object(i.c)([s.a], e.prototype, "OnSearchChange", null),
            Object(i.c)([s.a], e.prototype, "OnSearchKeyDown", null),
            Object(i.c)([s.a], e.prototype, "OnSearchSubmit", null),
            e
          );
        })(r.a.Component),
        b = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                input_friend_code: "",
                disable_send_invite: !1,
                searchResult: null,
                invite_status: "pending",
              }),
              (e.m_currentRequest = 0),
              e
            );
          }
          return (
            Object(i.d)(e, t),
            (e.prototype.OnFriendCodeChange = function (a) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t,
                  n = this;
                return Object(i.e)(this, function (e) {
                  return (
                    (t = a.target.value.split(",")[0]),
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
            (e.prototype.LoadProfile = function (a) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(i.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return a
                        ? ((t = _.a.InitFromAccountID(Number(a))),
                          [4, h.a.LoadProfiles([t.ConvertTo64BitString()])])
                        : [3, 2];
                    case 1:
                      return (
                        e.sent(),
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
                      this.setState({ searchResult: null }), (e.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnActionClick = function (a) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t,
                  n = this;
                return Object(i.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = new FormData()).append("sessionID", m.c.SESSIONID),
                        t.append("steamid", a),
                        t.append("accept_invite", "0"),
                        this.setState({ disable_send_invite: !0 }),
                        [4, this.props.onButtonClick(a)]
                      );
                    case 1:
                      return (
                        e.sent()
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
            (e.prototype.render = function () {
              var e = this;
              return r.a.createElement(
                "div",
                null,
                r.a.createElement(l.l, {
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
                        l.q,
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
            Object(i.c)([s.a], e.prototype, "OnFriendCodeChange", null),
            Object(i.c)([s.a], e.prototype, "LoadProfile", null),
            Object(i.c)([s.a], e.prototype, "OnActionClick", null),
            e
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
      var c = n("mrSG"),
        a = n("vDqi"),
        l = n.n(a),
        i = n("2vnA"),
        r = n("q1tI"),
        u = n("8H1D"),
        s = n("kLLr"),
        d = n("r64O"),
        o = n("bDQf"),
        f = n("lkRc"),
        m = new ((function () {
          function e() {
            (this.m_mapProfiles = new Map()),
              (this.m_mapProfilesLoading = new Map());
          }
          return (
            (e.prototype.LoadProfiles = function (s, o) {
              return Object(c.b)(this, void 0, void 0, function () {
                var t,
                  n,
                  a,
                  i,
                  r = this;
                return Object(c.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (Object(d.a)(
                        s.length <= 500,
                        "Check LoadProfiles, requesting too many steam IDs"
                      ),
                      0 ==
                        (t = s.filter(function (e) {
                          return (
                            !r.m_mapProfiles.has(e) &&
                            !r.m_mapProfilesLoading.has(e)
                          );
                        })).length)
                        ? [2, this.m_mapProfilesLoading.get(s[0])]
                        : ((n =
                            f.c.COMMUNITY_BASE_URL +
                            "actions/ajaxresolveusers"),
                          (a = l.a.get(n, {
                            params: { steamids: t.join(",") },
                            withCredentials: !0,
                            cancelToken: null == o ? void 0 : o.token,
                          })),
                          t.forEach(function (e) {
                            return r.m_mapProfilesLoading.set(e, a);
                          }),
                          [4, a]);
                    case 1:
                      return (
                        (i = e.sent()).data &&
                          200 == i.status &&
                          i.data.forEach(function (e) {
                            (e.avatar_hash = e.avatar_url),
                              (e.avatar_url_medium = Object(u.a)(
                                e.avatar_url,
                                "medium"
                              )),
                              (e.avatar_url_full = Object(u.a)(
                                e.avatar_url,
                                "full"
                              )),
                              (e.avatar_url = Object(u.a)(e.avatar_url)),
                              r.m_mapProfiles.set(e.steamid, e),
                              r.m_mapProfilesLoading.delete(e.steamid);
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
                s.a.InitFromAccountID(e).ConvertTo64BitString()
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
                s.a.InitFromAccountID(e).ConvertTo64BitString()
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
            Object(c.c)([i.C], e.prototype, "m_mapProfiles", void 0),
            e
          );
        })())();
      function _(e) {
        var n = "string" == typeof e ? new s.a(e) : e,
          t = Object(r.useState)(!m.BHasProfileBySteamID(n)),
          a = t[0],
          i = t[1];
        return (
          Object(r.useEffect)(
            function () {
              var e = l.a.CancelToken.source();
              return (
                m.BHasProfileBySteamID(n) ||
                  m
                    .LoadProfiles([n.ConvertTo64BitString()])
                    .catch(function (e) {
                      var t = Object(o.a)(e);
                      console.error(
                        "useUserProfile failed to load profile for " +
                          n.ConvertTo64BitString() +
                          ": " +
                          t.strErrorMsg,
                        t
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
          [a, m.GetProfileBySteamID(n)]
        );
      }
      window.g_ProfileStore = m;
    },
    rt5e: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "default", function () {
          return a;
        });
      var n = i("q1tI"),
        r = i.n(n),
        s = i("McqU"),
        o = i("lkRc"),
        c = i("TLQK");
      function a() {
        var e, t, a;
        return ((e = Object(n.useState)(!1)),
        (t = e[0]),
        (a = e[1]),
        Object(n.useEffect)(function () {
          var e = o.c.LANGUAGE,
            t = c.b.GetLanguageFallback(e),
            n = e === t;
          Promise.all([
            i("Cmuy")("./managefriends_" + e + ".json"),
            n ? void 0 : i("Cmuy")("./managefriends_" + t + ".json"),
          ]).then(function (e) {
            var t = e[0],
              n = e[1];
            c.e.AddTokens(t.default, n ? n.default : void 0), a(!0);
          });
        }, []),
        t)
          ? r.a.createElement(s.b, null)
          : null;
      }
    },
  },
]);

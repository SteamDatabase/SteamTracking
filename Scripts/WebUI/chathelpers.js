/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
webpackJsonp(
  [4],
  {
    "1zkO": function(e, t, n) {
      "use strict";
      n.d(t, "k", function() {
        return o;
      }),
        n.d(t, "l", function() {
          return i;
        }),
        n.d(t, "d", function() {
          return r;
        }),
        n.d(t, "e", function() {
          return s;
        }),
        n.d(t, "j", function() {
          return a;
        }),
        n.d(t, "f", function() {
          return c;
        }),
        n.d(t, "g", function() {
          return u;
        }),
        n.d(t, "i", function() {
          return p;
        }),
        n.d(t, "h", function() {
          return l;
        }),
        n.d(t, "a", function() {
          return m;
        }),
        n.d(t, "c", function() {
          return h;
        }),
        n.d(t, "b", function() {
          return d;
        });
      var o = 1,
        i = 4,
        r = 750,
        s = 799,
        a = 7,
        c = 250820,
        u = 330050,
        p = 358510,
        l = 366490,
        m = "18446744073709551615",
        h = 0,
        d = 2147483647;
    },
    "3e1Q": function(e, t, n) {
      "use strict";
      function o(e) {
        return "public" == a.a.WEB_UNIVERSE
          ? "https://s.team/chat/" + e
          : a.a.COMMUNITY_BASE_URL + "chat/invite/" + e;
      }
      n.d(t, "b", function() {
        return c;
      }),
        (t.a = o);
      var i = n("TToO"),
        r = n("y986"),
        s = n("1zkO"),
        a = n("m5yx"),
        c = (function() {
          function e(e) {
            (this.m_bReady = !1),
              (this.m_bValid = !1),
              (this.m_strInviteCode = e);
          }
          return (
            (e.prototype.BIsReady = function() {
              return this.m_bReady;
            }),
            (e.prototype.BIsValid = function() {
              return this.m_bValid;
            }),
            (e.prototype.BIsInviteLink = function() {
              return !!this.m_strInviteCode;
            }),
            (e.prototype.GetInviteCode = function() {
              return this.m_strInviteCode;
            }),
            (e.prototype.BNeverExpires = function() {
              return this.m_rtTimeExpires == s.b;
            }),
            (e.prototype.GetChatRoomGroupID = function() {
              return this.m_ulChatRoomGroupID;
            }),
            (e.prototype.BIsVoiceChatInvite = function() {
              return !!this.m_ulChatID;
            }),
            (e.prototype.GetChatID = function() {
              return this.m_ulChatID;
            }),
            (e.prototype.GetURL = function() {
              return this.m_strInviteCode ? o(this.m_strInviteCode) : null;
            }),
            (e.prototype.BIsUserBanned = function() {
              return this.m_bIsBanned;
            }),
            (e.prototype.GetTimeKickExpires = function() {
              return this.m_rtKickExpires;
            }),
            Object.defineProperty(e.prototype, "time_expires", {
              get: function() {
                return this.m_rtTimeExpires;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.InitInvalid = function() {
              (this.m_bValid = !1), (this.m_bReady = !0);
            }),
            (e.prototype.InitDirectInvite = function(e, t, n, o) {
              void 0 === n && (n = !1),
                void 0 === o && (o = void 0),
                (this.m_ulChatRoomGroupID = e),
                (this.m_ulChatID = t),
                (this.m_bIsBanned = n),
                (this.m_rtKickExpires = o),
                (this.m_rtTimeExpires = s.b),
                (this.m_bValid = !0),
                (this.m_bReady = !0);
            }),
            i.c([r.observable], e.prototype, "m_bReady", void 0),
            i.c([r.action], e.prototype, "InitInvalid", null),
            i.c([r.action], e.prototype, "InitDirectInvite", null),
            e
          );
        })();
    },
    "6+TJ": function(e, t, n) {
      "use strict";
      function o(e) {
        var t = window.open(
          "",
          "SteamWebChat",
          "height=790,width=1015,resize=yes,scrollbars=yes"
        );
        if (t) {
          var n = !1;
          try {
            n = "about:blank" == t.location.href;
          } catch (e) {}
          if (n) {
            if (e) {
              var o = function(n) {
                var i = p.a.COMMUNITY_BASE_URL.replace(
                  /(https?:\/\/[^\/]*).*$/,
                  "$1"
                );
                n.source == t &&
                  "FriendsUIReady" == n.data &&
                  n.origin == i &&
                  (t.postMessage(e, p.a.COMMUNITY_BASE_URL),
                  window.removeEventListener("message", o));
              };
              window.addEventListener("message", o);
            }
            t.location.href = p.a.COMMUNITY_BASE_URL + "chat/";
          } else e && t.postMessage(e, p.a.COMMUNITY_BASE_URL);
          t.focus();
        }
      }
      function i(e) {
        return c.createElement(
          "div",
          { className: "ChatMessageInvite" },
          c.createElement("div", {
            className: "leftInviteContainer",
            dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML }
          }),
          c.createElement(
            "div",
            { className: "rightInviteContainer" },
            c.createElement(
              "div",
              { className: "inviteLabel" },
              Object(m.d)(
                "#bbcode_invite_description",
                c.createElement("span", {
                  dangerouslySetInnerHTML: {
                    __html: e.render.strInviterNameLinkHTML
                  }
                })
              )
            ),
            c.createElement(
              "div",
              { className: "groupName" },
              e.render.strChatRoomGroupName
            ),
            e.children
          )
        );
      }
      function r() {
        for (
          var e = document.querySelectorAll(".ChatReactRoot"), t = 0;
          t < e.length;
          t++
        ) {
          var n = e[t],
            o = n.getAttribute("data-component");
          switch (o) {
            case "ChatInvite":
              s(n);
              break;
            default:
              Object(h.a)(!1, 'unknown component: "' + o + '"');
          }
        }
      }
      function s(e) {
        var t;
        try {
          t = JSON.parse(e.getAttribute("data-inviteinfo"));
        } catch (e) {}
        I.sm_rtTimeCur = t.rtTimeCur;
        var n = new I(t);
        u.render(c.createElement(S, { controller: n }), e);
      }
      function a(e, t, n) {
        if ("english" !== t)
          "friendsui" == e ? (D = n) : "shared" == e && (E = n);
        else if ("shared" == e) L = n;
        else {
          var o = void 0,
            i = null,
            r = void 0,
            s = null;
          void 0 !== D ? ((o = D), (i = n)) : (o = n),
            void 0 !== E ? ((r = E), (s = L)) : (r = L),
            m.a.InitFromObjects(o, i, r, s),
            (D = void 0),
            (E = void 0),
            (L = void 0);
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = n("Jmof"),
        u = n("wLXD"),
        p = n("m5yx"),
        l = n("PVtO"),
        m = (n("kllU"), n("rZel")),
        h = n("U3bN"),
        d = n("TToO"),
        f = n("y986"),
        v = n("Mn8c"),
        _ = n("3e1Q"),
        b = n("edqd"),
        g = n("Bp66"),
        y = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            d.d(t, e),
            (t.prototype.BIsExpired = function() {
              return I.sm_rtTimeCur >= this.m_rtTimeExpires;
            }),
            (t.prototype.InitFromPHPInviteLinkInfo = function(e) {
              this.m_ulChatID = e.chat_id;
              var t = new b.a(e.steamid_sender);
              t.BIsIndividualAccount() &&
                (this.m_unAccountIDInviter = t.GetAccountID()),
                (this.m_rtTimeExpires = e.time_expires),
                (this.m_bIsBanned = e.banned),
                (this.m_rtKickExpires = e.time_kick_expire),
                e.group_summary &&
                  (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
                (this.m_bValid = !0),
                (this.m_bReady = !0);
            }),
            d.c([f.action], t.prototype, "InitFromPHPInviteLinkInfo", null),
            t
          );
        })(_.b),
        I = (function() {
          function e(e) {
            (this.m_bConnectingToClient = !1),
              (this.m_invite = new y(e.strInviteCode)),
              e.Invite
                ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
                : this.m_invite.InitInvalid(),
              (this.m_htmlPreRendered = e.render),
              this.SendInviteToClient();
          }
          return (
            (e.prototype.BIsInviteValid = function() {
              return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
            }),
            (e.prototype.GetInvite = function() {
              return this.m_invite;
            }),
            (e.prototype.BIsConnectingToClient = function() {
              return this.m_bConnectingToClient;
            }),
            (e.prototype.GetConnectResults = function() {
              return this.m_connectResult;
            }),
            (e.prototype.GetPreRenderedHTML = function() {
              return this.m_htmlPreRendered;
            }),
            (e.prototype.LaunchWebChat = function() {
              o({
                command: "ShowChatRoomGroupInvite",
                invite_code: this.m_invite.GetInviteCode()
              });
            }),
            (e.prototype.LaunchSteamIgnoreAccount = function() {
              l.b.SetAllowAccountMismatch(!0), this.SendInviteToClient();
            }),
            (e.prototype.ForceLaunchSteamClient = function() {
              window.location.href =
                "steam://friends/ShowChatRoomGroupInvite/" +
                this.m_invite.GetInviteCode();
            }),
            (e.prototype.SendInviteToClient = function() {
              var e = this;
              this.m_invite.BIsValid() &&
                !this.m_invite.BIsExpired() &&
                ((this.m_bConnectingToClient = !0),
                l.b
                  .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                  .then(function(t) {
                    Object(f.runInAction)(function() {
                      (e.m_bConnectingToClient = !1),
                        (e.m_connectResult = t),
                        console.log(t);
                    });
                  }));
            }),
            d.c([f.observable], e.prototype, "m_bConnectingToClient", void 0),
            d.c([f.observable], e.prototype, "m_connectResult", void 0),
            e
          );
        })(),
        S = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            d.d(t, e),
            (t.prototype.render = function() {
              return c.createElement(
                "div",
                { className: "InviteLandingRoot" },
                this.props.controller.BIsInviteValid()
                  ? c.createElement(C, { controller: this.props.controller })
                  : c.createElement(w, { controller: this.props.controller })
              );
            }),
            (t = d.c([v.observer], t))
          );
        })(c.Component),
        C = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.m_bTriedToLaunchSteam = !1), t;
          }
          return (
            d.d(t, e),
            (t.prototype.LaunchWebChat = function() {
              this.props.controller.LaunchWebChat();
            }),
            (t.prototype.OpenInSteamIgnoreAccount = function() {
              this.props.controller.LaunchSteamIgnoreAccount();
            }),
            (t.prototype.LaunchSteamClient = function() {
              var e = this;
              this.props.controller.ForceLaunchSteamClient(),
                window.setTimeout(function() {
                  e.m_bTriedToLaunchSteam = !0;
                }, 1e3);
            }),
            (t.prototype.render = function() {
              if (this.props.controller.BIsConnectingToClient())
                return c.createElement(
                  "div",
                  { className: "ChatMessageInvite RequestingInfo NoColumns" },
                  c.createElement(
                    "div",
                    { className: "postedExpiredInvite" },
                    Object(m.b)("#bbcode_invite_requesting_info")
                  )
                );
              var e = this.props.controller.GetConnectResults(),
                t = this.props.controller.GetInvite(),
                n = p.a.COMMUNITY_BASE_URL + "updates/chatupdate",
                o = "inviteButton inviteButtonJoinChat";
              return (
                t.BIsVoiceChatInvite() && (o += " inviteButtonJoinVoice"),
                e.success
                  ? c.createElement(
                      "div",
                      { className: "ChatMessageInvite NoColumns" },
                      c.createElement(
                        "div",
                        { className: "groupName" },
                        Object(m.b)("#InviteLanding_SentToSteam")
                      ),
                      c.createElement(
                        "div",
                        { className: "inviteLabel" },
                        Object(m.d)(
                          "#InviteLanding_SentToSteam_Desc",
                          c.createElement(
                            "a",
                            {
                              href: "javascript:void(0);",
                              onClick: this.LaunchWebChat
                            },
                            Object(m.b)(
                              "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                            )
                          )
                        )
                      )
                    )
                  : e.account_mismatch
                    ? c.createElement(
                        i,
                        { render: this.props.controller.GetPreRenderedHTML() },
                        c.createElement(
                          "div",
                          { className: "inviteLabel" },
                          Object(m.b)("#InviteLanding_AccountMismatch")
                        ),
                        c.createElement(
                          "div",
                          { className: "inviteLabel" },
                          c.createElement(
                            "button",
                            {
                              className: o,
                              type: "button",
                              onClick: this.OpenInSteamIgnoreAccount
                            },
                            Object(m.b)("#InviteLanding_OpenInSteam")
                          ),
                          c.createElement(
                            "button",
                            {
                              className: o,
                              type: "button",
                              onClick: this.LaunchWebChat
                            },
                            Object(m.b)("#InviteLanding_OpenInWebChat")
                          )
                        )
                      )
                    : e.call_unsupported
                      ? c.createElement(
                          "div",
                          { className: "ChatMessageInvite" },
                          c.createElement(
                            "div",
                            { className: "groupName" },
                            Object(m.b)("#InviteLanding_SentToSteam")
                          ),
                          c.createElement(
                            "div",
                            { className: "inviteLabel" },
                            Object(m.d)(
                              "#InviteLanding_SentToSteam_Desc",
                              c.createElement(
                                "a",
                                {
                                  href: "javascript:void(0);",
                                  onClick: this.LaunchWebChat
                                },
                                Object(m.b)(
                                  "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                                )
                              )
                            )
                          )
                        )
                      : c.createElement(
                          i,
                          {
                            render: this.props.controller.GetPreRenderedHTML()
                          },
                          c.createElement(
                            "div",
                            { className: "inviteLabel" },
                            Object(m.d)(
                              "#InviteLanding_ChatIsInBeta",
                              c.createElement(
                                "a",
                                { href: n },
                                Object(m.b)("#InviteLanding_BetaLearnMoreLink")
                              )
                            ),
                            " ",
                            Object(m.b)(
                              "#InviteLanding_CantTalkToClient",
                              Object(m.b)("#InviteLanding_OpenInSteam")
                            )
                          ),
                          c.createElement(
                            "div",
                            { className: "inviteLabel" },
                            c.createElement(
                              "button",
                              {
                                className: o,
                                type: "button",
                                onClick: this.LaunchSteamClient
                              },
                              Object(m.b)("#InviteLanding_OpenInSteam")
                            ),
                            c.createElement(
                              "button",
                              {
                                className: o,
                                type: "button",
                                onClick: this.LaunchWebChat
                              },
                              Object(m.b)("#InviteLanding_OpenInWebChat")
                            )
                          ),
                          c.createElement("div", { className: "inviteLabel" }),
                          this.m_bTriedToLaunchSteam &&
                            c.createElement(
                              "div",
                              { className: "inviteLabel" },
                              Object(m.b)("#InviteLanding_OpenInSteam_Help")
                            )
                        )
              );
            }),
            d.c([f.observable], t.prototype, "m_bTriedToLaunchSteam", void 0),
            d.c([g.a], t.prototype, "LaunchWebChat", null),
            d.c([g.a], t.prototype, "OpenInSteamIgnoreAccount", null),
            d.c([g.a], t.prototype, "LaunchSteamClient", null),
            (t = d.c([v.observer], t))
          );
        })(c.Component),
        w = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            d.d(t, e),
            (t.prototype.render = function() {
              return c.createElement(
                "div",
                { className: "ChatMessageInvite" },
                c.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Object(m.b)("#InviteLanding_ExpiredOrInvalid")
                )
              );
            }),
            t
          );
        })(c.Component);
      window.AssertMsg = h.a;
      var O = new l.a();
      (window.ClientConnectionAPI = O),
        document.addEventListener("DOMContentLoaded", function() {
          Object(p.c)(), r();
        });
      var D, E, L;
      window.LocalizationReady = a;
    },
    Bp66: function(e, t, n) {
      "use strict";
      function o(e, t, n) {
        return {
          get: function() {
            var e = n.value.bind(this);
            return (
              this.hasOwnProperty(t) ||
                Object.defineProperty(this, t, { value: e }),
              e
            );
          }
        };
      }
      function i(e, t, n) {
        return [e, t, n];
      }
      (t.a = o), (t.b = i);
    },
    PVtO: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return a;
        });
      var o = n("m5yx"),
        i = { success: !0, result: 1 },
        r = (function() {
          function e() {
            (this.m_connection = new s()),
              (this.m_bAllowAccountMismatch = !1),
              (this.m_mapCacheSubscribedApp = new Map());
          }
          return (
            (e.prototype.FailureResult = function(e) {
              void 0 === e && (e = 2);
              var t = { success: !1, result: e };
              return (
                this.m_connection &&
                  !this.m_connection.browser_supported &&
                  (t.browser_unsupported = !0),
                this.m_connection &&
                  !this.m_connection.connected_to_client &&
                  (t.connect_failed = !0),
                7 == e && (t.call_unsupported = !0),
                t
              );
            }),
            (e.prototype.SetAllowAccountMismatch = function(e) {
              this.m_bAllowAccountMismatch = e;
            }),
            (e.prototype.BClientConnected = function() {
              var e = this;
              return this.m_connection.Connect().then(
                function() {
                  return i;
                },
                function() {
                  return e.FailureResult();
                }
              );
            }),
            (e.prototype.BClientSupportsMessage = function(e) {
              return (
                !(
                  !this.m_connection.connected_to_client ||
                  !this.m_connection.ready
                ) &&
                -1 !==
                  this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
              );
            }),
            (e.prototype.OpenFriendChatDialog = function(e) {
              var t = { message: "ShowFriendChatDialog", steamid: e };
              return this.GenericEResultCall(t);
            }),
            (e.prototype.OpenChatRoomGroupDialog = function(e, t) {
              var n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
              return t && (n.chat_room_id = t), this.GenericEResultCall(n);
            }),
            (e.prototype.ShowChatRoomGroupInvite = function(e) {
              var t = { message: "ShowChatRoomGroupInvite", invite_code: e };
              return this.GenericEResultCall(t);
            }),
            (e.prototype.OpenJoinGameDialog = function(e) {
              var t = { message: "ShowJoinGameDialog", friend_id: e };
              return this.GenericEResultCall(t);
            }),
            (e.prototype.BIsSubscribedApp = function(e) {
              var t = this;
              if (this.m_mapCacheSubscribedApp.has(e))
                return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
              var n = { message: "IsSubscribedApp", appid: e };
              return this.GenericEResultCall(n).then(function(n) {
                if (!n.connect_failed) {
                  var o = 1 == n.result;
                  return t.m_mapCacheSubscribedApp.set(e, o), o;
                }
              });
            }),
            (e.prototype.ViewGameInfoForSteamID = function(e) {
              var t = { message: "ViewGameInfoForSteamID", steamid: e };
              return this.GenericEResultCall(t);
            }),
            (e.prototype.BClientAccountMatches = function() {
              return (
                !o.d.logged_in ||
                o.d.accountid == this.m_connection.ClientInfo.unAccountID
              );
            }),
            (e.prototype.GenericEResultCall = function(e) {
              var t = this;
              return this.m_connection
                .Connect()
                .then(function() {
                  return t.m_bAllowAccountMismatch || t.BClientAccountMatches()
                    ? t.m_connection
                        .SendMsgAndAwaitResponse(e)
                        .then(function(e) {
                          return 1 === e.success
                            ? i
                            : t.FailureResult(e.success);
                        })
                    : { success: !1, result: 19, account_mismatch: !0 };
                })
                .catch(function() {
                  return t.FailureResult();
                });
            }),
            e
          );
        })(),
        s = (function() {
          function e() {
            (this.m_mapWaitingCallbacks = new Map()),
              (this.m_iCallSeq = 1),
              (this.m_bReady = !1),
              (this.m_bClientConnectionFailed = !1),
              (this.m_bSecurityException = !1),
              (this.m_ClientInfo = {
                ulVersion: "",
                bFriendsUIEnabled: !1,
                unAccountID: 0,
                rgSupportedMessages: []
              });
          }
          return (
            Object.defineProperty(e.prototype, "ClientInfo", {
              get: function() {
                return this.m_ClientInfo;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "ready", {
              get: function() {
                return this.m_bReady;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "browser_supported", {
              get: function() {
                return !this.m_bSecurityException;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "connected_to_client", {
              get: function() {
                return (
                  this.m_socket && this.m_socket.readyState == WebSocket.OPEN
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.SendMsgAndAwaitResponse = function(e) {
              var t = this;
              return new Promise(function(n, o) {
                var i = t.m_iCallSeq++;
                t.BSendMsg(e, i)
                  ? t.m_mapWaitingCallbacks.set(i, {
                      iSeq: i,
                      fnCallback: n,
                      fnError: o
                    })
                  : o();
              });
            }),
            (e.prototype.BSendMsg = function(e, t) {
              if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
                return !1;
              var n = Object.assign({}, e, {
                universe: o.a.EUNIVERSE,
                accountid: o.d.accountid
              });
              void 0 !== t && (n.sequenceid = t);
              try {
                return this.m_socket.send(JSON.stringify(n)), !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.OnSocketMessage = function(e) {
              try {
                var t = JSON.parse(e.data);
                if (t.sequenceid) {
                  var n = this.m_mapWaitingCallbacks.get(t.sequenceid);
                  if (n)
                    return (
                      this.m_mapWaitingCallbacks.delete(t.sequenceid),
                      void n.fnCallback(t)
                    );
                }
              } catch (e) {
                console.error("exception parsing response", e);
              }
            }),
            (e.prototype.Connect = function() {
              var e = this;
              if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
                return Promise.resolve();
              if (this.m_promiseConnect) return this.m_promiseConnect;
              var t = new Promise(function(t, n) {
                try {
                  e.m_socket = new WebSocket(
                    "ws://127.0.0.1:27060/clientsocket/"
                  );
                } catch (t) {
                  return (e.m_bSecurityException = !0), void n(t);
                }
                (e.m_socket.onerror = function(e) {
                  n();
                }),
                  (e.m_socket.onmessage = e.OnSocketMessage.bind(e)),
                  (e.m_socket.onopen = function(o) {
                    var i = { message: "GetClientInfo" };
                    e
                      .SendMsgAndAwaitResponse(i)
                      .then(function(o) {
                        1 == o.success
                          ? ((e.m_ClientInfo.ulVersion = o.clientversion),
                            (e.m_ClientInfo.bFriendsUIEnabled = !!o.friendsui),
                            (e.m_ClientInfo.unAccountID = o.accountid),
                            o.supported_messages &&
                              (e.m_ClientInfo.rgSupportedMessages =
                                o.supported_messages),
                            t())
                          : n();
                      })
                      .catch(n);
                  });
              });
              return (
                (this.m_promiseConnect = t),
                this.m_promiseConnect
                  .then(function() {
                    (e.m_bReady = !0), (e.m_promiseConnect = void 0);
                  })
                  .catch(function() {
                    (e.m_bClientConnectionFailed = !0),
                      (e.m_promiseConnect = void 0);
                  }),
                this.m_promiseConnect
              );
            }),
            e
          );
        })(),
        a = new r();
      window.ClientConnectionAPI = a;
    },
    TToO: function(e, t, n) {
      "use strict";
      function o(e, t) {
        function n() {
          this.constructor = e;
        }
        c(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      function i(e, t) {
        var n = {};
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            t.indexOf(o) < 0 &&
            (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, o = Object.getOwnPropertySymbols(e);
            i < o.length;
            i++
          )
            t.indexOf(o[i]) < 0 && (n[o[i]] = e[o[i]]);
        return n;
      }
      function r(e, t, n, o) {
        var i,
          r = arguments.length,
          s =
            r < 3
              ? t
              : null === o ? (o = Object.getOwnPropertyDescriptor(t, n)) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, n, o);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (s = (r < 3 ? i(s) : r > 3 ? i(t, n, s) : i(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s;
      }
      function s(e, t, n, o) {
        return new (n || (n = Promise))(function(i, r) {
          function s(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            e.done
              ? i(e.value)
              : new n(function(t) {
                  t(e.value);
                }).then(s, a);
          }
          c((o = o.apply(e, t || [])).next());
        });
      }
      function a(e, t) {
        function n(e) {
          return function(t) {
            return o([e, t]);
          };
        }
        function o(n) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; c; )
            try {
              if (
                ((i = 1),
                r &&
                  (s =
                    2 & n[0]
                      ? r.return
                      : n[0]
                        ? r.throw || ((s = r.return) && s.call(r), 0)
                        : r.next) &&
                  !(s = s.call(r, n[1])).done)
              )
                return s;
              switch (((r = 0), s && (n = [2 & n[0], s.value]), n[0])) {
                case 0:
                case 1:
                  s = n;
                  break;
                case 4:
                  return c.label++, { value: n[1], done: !1 };
                case 5:
                  c.label++, (r = n[1]), (n = [0]);
                  continue;
                case 7:
                  (n = c.ops.pop()), c.trys.pop();
                  continue;
                default:
                  if (
                    ((s = c.trys),
                    !(s = s.length > 0 && s[s.length - 1]) &&
                      (6 === n[0] || 2 === n[0]))
                  ) {
                    c = 0;
                    continue;
                  }
                  if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                    c.label = n[1];
                    break;
                  }
                  if (6 === n[0] && c.label < s[1]) {
                    (c.label = s[1]), (s = n);
                    break;
                  }
                  if (s && c.label < s[2]) {
                    (c.label = s[2]), c.ops.push(n);
                    break;
                  }
                  s[2] && c.ops.pop(), c.trys.pop();
                  continue;
              }
              n = t.call(e, c);
            } catch (e) {
              (n = [6, e]), (r = 0);
            } finally {
              i = s = 0;
            }
          if (5 & n[0]) throw n[1];
          return { value: n[0] ? n[1] : void 0, done: !0 };
        }
        var i,
          r,
          s,
          a,
          c = {
            label: 0,
            sent: function() {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: []
          };
        return (
          (a = { next: n(0), throw: n(1), return: n(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function() {
              return this;
            }),
          a
        );
      }
      (t.d = o),
        n.d(t, "a", function() {
          return u;
        }),
        (t.f = i),
        (t.c = r),
        (t.b = s),
        (t.e = a); /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var c = function(e, t) {
          return (c =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        },
        u = function() {
          return (
            (u =
              Object.assign ||
              function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++) {
                  t = arguments[n];
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }
                return e;
              }),
            u.apply(this, arguments)
          );
        };
    },
    U3bN: function(e, t, n) {
      "use strict";
      function o(e, t) {
        for (var n = [], o = 2; o < arguments.length; o++)
          n[o - 2] = arguments[o];
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert.apply(console, [!!e, t].concat(n))
          : e || console.warn.apply(console, [t].concat(n));
      }
      t.a = o;
    },
    "V/Vt": function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return o;
      }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "b", function() {
          return m;
        }),
        n.d(t, "d", function() {
          return d;
        });
      var o,
        i = n("TToO"),
        r = n("y986"),
        s = n("wLXD"),
        a = (n.n(s), n("lEUG")),
        c = n("x0X8"),
        u = n("Bp66");
      !(function(e) {
        (e[(e.Minimized = 1)] = "Minimized"),
          (e[(e.Hidden = 2)] = "Hidden"),
          (e[(e.Tooltip = 4)] = "Tooltip"),
          (e[(e.ContextMenu = 8)] = "ContextMenu"),
          (e[(e.Resizable = 16)] = "Resizable");
      })(o || (o = {}));
      var p = (function() {
          function e(e, t) {
            (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
            for (
              var n = e.document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var i = n[o];
              i.addEventListener("load", this.OnLinkLoad),
                this.m_rgLoadingLinks.push(i);
            }
          }
          return (
            (e.prototype.SetTarget = function(e) {
              (this.m_fnRender = e),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            (e.prototype.OnLinkLoad = function(e) {
              e.currentTarget.removeEventListener("load", this.OnLinkLoad),
                a.c(this.m_rgLoadingLinks, e.currentTarget),
                0 == this.m_rgLoadingLinks.length &&
                  (this.m_fnRender(), (this.m_fnRender = void 0));
            }),
            i.c([u.a], e.prototype, "OnLinkLoad", null),
            e
          );
        })(),
        l = (function() {
          function e(e, t) {
            (this.m_bFocused = !1),
              (this.m_strName = e),
              (this.m_rgParams = t),
              this.m_rgParams.target_browser &&
                (this.m_strName +=
                  "_pid" + this.m_rgParams.target_browser.m_unPID),
              (this.m_strTitle = t.title),
              delete this.m_rgParams.title;
          }
          return (
            (e.prototype.UpdateParamsBeforeShow = function(e) {
              return e;
            }),
            (e.prototype.OnDrop = function(e) {
              console.log("Ignoring drop onto toplevel window", e),
                e.preventDefault(),
                e.stopPropagation();
            }),
            (e.prototype.OnDragOver = function(e) {
              e.preventDefault(),
                (e.dataTransfer.dropEffect = "none"),
                e.stopPropagation();
            }),
            (e.prototype.OnMessage = function(e) {
              "window_moved" == e.data && this.OnResize();
            }),
            (e.prototype.Show = function(e) {
              var t = this;
              void 0 === e && (e = !0);
              var n;
              window.SteamClient &&
                (this.m_rgParams.eCreationFlags |= o.Hidden),
                this.m_rgParams.eCreationFlags & o.Tooltip && (e = !1),
                this.BIsValid() &&
                  (this.BIsClosed()
                    ? ((this.m_popup = void 0), (this.m_element = void 0))
                    : e && this.Focus());
              var i = d.GetExistingPopup(this.m_strName);
              if (!i || this.m_rgParams.replace_existing_popup) {
                this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
                var r, s, a;
                i
                  ? ((s = i.m_element),
                    (r = i.m_popup),
                    i.ReleasePopup(),
                    (a = i.m_renderWhenReady),
                    d.RemoveTrackedPopup(i),
                    r.removeEventListener(
                      "beforeunload",
                      i.OnBeforeUnloadEvent
                    ),
                    r.removeEventListener("unload", i.OnUnload),
                    r.removeEventListener("resize", i.OnResizeEvent),
                    r.removeEventListener("focus", this.OnFocusInternal),
                    r.removeEventListener("blur", this.OnBlurInternal),
                    r.removeEventListener("drop", i.OnDrop),
                    r.removeEventListener("dragover", i.OnDragOver),
                    r.removeEventListener("message", this.OnMessage))
                  : ((n = h.CreatePopup(this.m_strName, this.m_rgParams)),
                    (r = n.popup),
                    (s = n.element),
                    (a = new p(r, s))),
                  r &&
                    s &&
                    ((r.document.title = this.m_strTitle),
                    r.addEventListener(
                      "beforeunload",
                      this.OnBeforeUnloadEvent
                    ),
                    r.addEventListener("unload", this.OnUnload),
                    r.addEventListener("resize", this.OnResizeEvent),
                    r.addEventListener("focus", this.OnFocusInternal),
                    r.addEventListener("blur", this.OnBlurInternal),
                    r.addEventListener("drop", this.OnDrop),
                    r.addEventListener("dragover", this.OnDragOver),
                    r.addEventListener("message", this.OnMessage),
                    (this.m_popup = r),
                    (this.m_element = s),
                    (this.m_renderWhenReady = a),
                    this.m_renderWhenReady.SetTarget(function() {
                      return t.RenderInternal(t.m_popup, t.m_element, e);
                    })),
                  d.AddTrackedPopup(this),
                  i && e && this.Focus();
              }
            }),
            (e.prototype.RemoveEventListeners = function() {
              this.window.removeEventListener(
                "beforeunload",
                this.OnBeforeUnloadEvent
              ),
                this.window.removeEventListener("unload", this.OnUnload),
                this.window.removeEventListener("resize", this.OnResizeEvent),
                this.window.removeEventListener("focus", this.OnFocusInternal),
                this.window.removeEventListener("blur", this.OnBlurInternal),
                this.window.removeEventListener("drop", this.OnDrop),
                this.window.removeEventListener("dragover", this.OnDragOver),
                this.window.removeEventListener("message", this.OnMessage);
            }),
            (e.prototype.RenderInternal = function(e, t, n) {
              this.Render(e, t),
                this.OnLoad(),
                e.SteamClient &&
                  (n
                    ? e.SteamClient.Window.BringToFront()
                    : e.SteamClient.Window.ShowWindow());
            }),
            (e.prototype.OnResizeEvent = function() {
              this.OnResize();
            }),
            (e.prototype.OnBeforeUnloadEvent = function() {
              this.OnBeforeUnload();
            }),
            (e.prototype.OnUnload = function() {
              this.RemoveEventListeners(),
                d.RemoveTrackedPopup(this),
                this.OnClose(),
                s.unmountComponentAtNode(this.m_element);
            }),
            Object.defineProperty(e.prototype, "browser_info", {
              get: function() {
                return this.m_rgParams.target_browser;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "window", {
              get: function() {
                return this.m_popup;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "root_element", {
              get: function() {
                return this.m_element;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "title", {
              get: function() {
                return this.m_strTitle;
              },
              set: function(e) {
                (this.m_strTitle = e),
                  this.m_popup &&
                    (this.m_popup.document.title = this.m_strTitle);
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.Focus = function() {
              this.m_popup &&
              void 0 !== this.m_popup.SteamClient &&
              void 0 !== this.m_popup.SteamClient.Window
                ? this.m_popup.SteamClient.Window.BringToFront()
                : this.m_popup && this.m_popup.focus();
            }),
            (e.prototype.Close = function() {
              this.m_popup && this.m_popup.close();
            }),
            (e.prototype.GetName = function() {
              return this.m_strName;
            }),
            (e.prototype.BIsValid = function() {
              return !!this.m_popup;
            }),
            (e.prototype.BIsClosed = function() {
              return !this.m_popup || this.m_popup.closed;
            }),
            (e.prototype.BIsVisible = function() {
              return (
                this.m_popup &&
                !this.m_popup.closed &&
                "visible" == this.m_popup.document.visibilityState
              );
            }),
            (e.prototype.BIsFocused = function() {
              return this.BIsVisible() && this.m_popup.document.hasFocus();
            }),
            (e.prototype.OnFocusInternal = function() {
              (this.m_bFocused = !0), this.OnFocus();
            }),
            (e.prototype.OnBlurInternal = function() {
              (this.m_bFocused = !1), this.OnBlur();
            }),
            Object.defineProperty(e.prototype, "focused", {
              get: function() {
                return this.m_bFocused;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.GetWindowRestoreDetails = function() {
              var e = this;
              return this.m_popup &&
                !this.m_popup.closed &&
                this.m_popup.SteamClient
                ? new Promise(function(t, n) {
                    e.m_popup.SteamClient.Window.GetWindowRestoreDetails(
                      function(e) {
                        t(e);
                      }
                    );
                  })
                : Promise.resolve("");
            }),
            (e.prototype.IsMinimized = function() {
              var e = this;
              return this.m_popup &&
                !this.m_popup.closed &&
                this.m_popup.SteamClient &&
                this.m_popup.SteamClient.Window &&
                this.m_popup.SteamClient.Window.IsWindowMinimized
                ? new Promise(function(t, n) {
                    e.m_popup.SteamClient.Window.IsWindowMinimized(function(e) {
                      t(e);
                    });
                  })
                : Promise.resolve(!1);
            }),
            (e.prototype.ReleasePopup = function() {
              this.OnClose(), (this.m_popup = null);
            }),
            (e.prototype.OnBeforeUnload = function() {}),
            (e.prototype.OnFocus = function() {}),
            (e.prototype.OnBlur = function() {}),
            i.c([r.observable], e.prototype, "m_bFocused", void 0),
            i.c([u.a], e.prototype, "OnMessage", null),
            i.c([u.a], e.prototype, "OnResizeEvent", null),
            i.c([u.a], e.prototype, "OnBeforeUnloadEvent", null),
            i.c([u.a], e.prototype, "OnUnload", null),
            i.c([u.a], e.prototype, "OnFocusInternal", null),
            i.c([u.a], e.prototype, "OnBlurInternal", null),
            i.c([r.computed], e.prototype, "focused", null),
            e
          );
        })(),
        m = (function(e) {
          function t(t, n, o, i) {
            var r = e.call(this, t, o) || this;
            return r.SetSavedDimensionsKey(n), (r.m_bExpires = i), r;
          }
          return (
            i.d(t, e),
            (t.prototype.BIsInOverlay = function() {
              return (
                this.browser_info &&
                this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
              );
            }),
            (t.prototype.SetSavedDimensionsKey = function(e) {
              this.m_strSavedDimensionsKey = e;
            }),
            (t.prototype.UpdateParamsBeforeShow = function(e) {
              return (
                !this.m_strSavedDimensionsKey ||
                e.bIgnoreSavedDimensions ||
                e.strRestoreDetails
                  ? e.strRestoreDetails &&
                    ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                    d.SetRestoreDetails(
                      this.m_strInitialSavedDimensionsKey,
                      e.strRestoreDetails,
                      this.m_bExpires
                    ))
                  : ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                    (e.strRestoreDetails = d.GetRestoreDetails(
                      this.m_strInitialSavedDimensionsKey
                    ))),
                e
              );
            }),
            (t.prototype.OnLoad = function() {
              var e = this;
              this.GetWindowRestoreDetails().then(function(t) {
                (e.m_strInitialRestoreDetails = t), e.OnResizeComplete(t);
              });
            }),
            (t.prototype.OnResize = function() {
              this.QueryAndStoreWindowPosition();
            }),
            (t.prototype.OnResizeComplete = function(e) {}),
            (t.prototype.QueryAndStoreWindowPosition = function() {
              var e = this;
              if (this.m_strInitialRestoreDetails) {
                var t = this.GetSavedDimensionsKey();
                this.m_popup.setTimeout(function() {
                  e.GetWindowRestoreDetails().then(function(n) {
                    var o =
                      e.m_strInitialRestoreDetails == n &&
                      t == e.m_strInitialSavedDimensionsKey;
                    e.m_popup &&
                      e.m_strSavedDimensionsKey &&
                      n &&
                      !o &&
                      (d.SetRestoreDetails(t, n, e.m_bExpires),
                      (e.m_rgParams.strRestoreDetails = n),
                      (e.m_strInitialSavedDimensionsKey = t),
                      e.OnResizeComplete(n));
                  });
                }, 30);
              }
            }),
            (t.prototype.OnBeforeUnload = function() {
              this.QueryAndStoreWindowPosition(),
                e.prototype.OnBeforeUnload.call(this);
            }),
            (t.prototype.OnClose = function() {}),
            (t.prototype.SaveWindowPosition = function(e) {
              d.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
                (this.m_rgParams.strRestoreDetails = e);
            }),
            i.c([u.a], t.prototype, "QueryAndStoreWindowPosition", null),
            t
          );
        })(l),
        h = (function() {
          function e() {
            var e = this;
            (this.m_bShuttingDown = !1),
              (this.m_mapPopups = new Map()),
              (this.m_rgShutdownCallbacks = []),
              (this.m_rgPopupCreatedCallbacks = []),
              (this.m_unCurrentAccountID = 0),
              (this.m_mapRestoreDetails = new Map()),
              (this.m_bSaveRequired = !1),
              Object({
                NODE_ENV: "production",
                STEAM_BUILD: "buildbot",
                VALVE_BUILD: "false"
              }).MOBILE_BUILD ||
                window.addEventListener("beforeunload", function(t) {
                  e.m_bShuttingDown = !0;
                  for (
                    var n = 0, o = e.m_rgShutdownCallbacks;
                    n < o.length;
                    n++
                  )
                    (0, o[n])();
                  var i = [];
                  e.m_mapPopups.forEach(function(e) {
                    e.BIsValid() && !e.BIsClosed() && i.push(e);
                  });
                  for (var r = 0, s = i; r < s.length; r++) s[r].Close();
                  e.m_bSaveRequired && e.SaveSavedDimensionStore(),
                    e.m_mapPopups.clear();
                });
          }
          return (
            (e.prototype.SetCurrentLoggedInAccountID = function(e) {
              (this.m_unCurrentAccountID = e),
                e
                  ? this.LoadSavedDimensionStore()
                  : this.ClearSavedDimensionStore();
            }),
            (e.prototype.AddShutdownCallback = function(e) {
              this.m_rgShutdownCallbacks.push(e);
            }),
            (e.prototype.AddPopupCreatedCallback = function(e) {
              this.m_rgPopupCreatedCallbacks.push(e);
            }),
            (e.prototype.AddTrackedPopup = function(e) {
              this.m_mapPopups.set(e.GetName(), e);
              for (
                var t = 0, n = this.m_rgPopupCreatedCallbacks;
                t < n.length;
                t++
              )
                (0, n[t])(e);
            }),
            (e.prototype.RemoveTrackedPopup = function(e) {
              this.m_mapPopups.delete(e.GetName());
            }),
            (e.prototype.GetExistingPopup = function(e) {
              return this.m_mapPopups.get(e);
            }),
            (e.prototype.GetPopups = function() {
              return this.m_mapPopups.values();
            }),
            (e.prototype.ClosePopupsOwnedByBrowser = function(e) {
              this.m_mapPopups.forEach(function(t) {
                t.browser_info &&
                  t.browser_info.m_nBrowserID == e.m_nBrowserID &&
                  t.browser_info.m_unPID == e.m_unPID &&
                  t.Close();
              });
            }),
            (e.CreatePopup = function(e, t) {
              var n = t.dimensions || {},
                o = n.width || 300,
                i = n.height || 300,
                r = t.title,
                s = "width=" + o + ",height=" + i;
              void 0 !== n.left && (s += ",left=" + n.left),
                void 0 !== n.top && (s += ",top=" + n.top),
                (s += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
              var a = "about:blank",
                c = [];
              c.push("createflags=" + t.eCreationFlags),
                t.minWidth && c.push("minwidth=" + t.minWidth),
                t.minHeight && c.push("minheight=" + t.minHeight),
                t.target_browser &&
                  (c.push("pid=" + t.target_browser.m_unPID),
                  c.push("browser=" + t.target_browser.m_nBrowserID),
                  t.availscreenwidth &&
                    t.availscreenheight &&
                    (c.push("screenavailwidth=" + t.availscreenwidth),
                    c.push("screenavailheight=" + t.availscreenheight))),
                t.strRestoreDetails &&
                  c.push("restoredetails=" + t.strRestoreDetails),
                c && (a += "?" + c.join("&"));
              var u = t.owner_window || window,
                p = u.open(a, e, s, !0);
              if (!p)
                return (
                  console.log(
                    "Failed to create popup.. browser popup blocker enabled?"
                  ),
                  {}
                );
              var l = "";
              t.html_class && (l = 'class="' + t.html_class + '"');
              var m = "";
              t.body_class && (m = 'class="' + t.body_class + '"');
              var h =
                "<!DOCTYPE html><html " +
                l +
                "><head><title></title></head><body " +
                m +
                '><div id="popup_target"></div></body></html>';
              p.document.write(h), (p.document.title = r);
              for (
                var d = p.document.getElementsByTagName("head")[0],
                  f = document.getElementsByTagName("link"),
                  v = 0;
                v < f.length;
                v++
              ) {
                var _ = f[v];
                if ("stylesheet" == _.rel) {
                  for (
                    var b = p.document.createElement("link"), g = 0;
                    g < _.attributes.length;
                    g++
                  ) {
                    var y = _.attributes.item(g);
                    b.setAttribute(y.name, y.value);
                  }
                  d.appendChild(b);
                }
              }
              return {
                popup: p,
                element: p.document.getElementById("popup_target")
              };
            }),
            (e.prototype.BShuttingDown = function() {
              return this.m_bShuttingDown;
            }),
            (e.prototype.GetLocalStorageKey = function() {
              return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
            }),
            (e.prototype.LoadSavedDimensionStore = function() {
              if (this.m_unCurrentAccountID) {
                var e = this.GetLocalStorageKey();
                this.m_mapRestoreDetails = void 0;
                var t = window.localStorage.getItem(e);
                if (t)
                  try {
                    var n = JSON.parse(t);
                    this.m_mapRestoreDetails = new Map(n);
                  } catch (e) {}
                this.m_mapRestoreDetails ||
                  (this.m_mapRestoreDetails = new Map());
              }
            }),
            (e.prototype.SaveSavedDimensionStore = function() {
              if (this.m_unCurrentAccountID && this.m_bSaveRequired) {
                var e = this.GetLocalStorageKey(),
                  t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
                window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
              }
            }),
            (e.prototype.DebouncedSaveSavedDimensionStore = function() {
              this.SaveSavedDimensionStore();
            }),
            (e.prototype.ClearSavedDimensionStore = function() {
              this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
            }),
            (e.prototype.GetRestoreDetails = function(e) {
              if (!this.m_mapRestoreDetails.has(e)) return "";
              var t = this.m_mapRestoreDetails.get(e);
              return (
                (t.last_used = Date.now()),
                (this.m_bSaveRequired = !0),
                t.strRestoreDetails
              );
            }),
            (e.prototype.SetRestoreDetails = function(e, t, n) {
              if (e) {
                if (t) {
                  if (this.m_mapRestoreDetails.size > 50) {
                    for (
                      var o = null,
                        i = Date.now(),
                        r = 0,
                        s = Array.from(this.m_mapRestoreDetails.keys());
                      r < s.length;
                      r++
                    ) {
                      var a = s[r],
                        c = this.m_mapRestoreDetails.get(a);
                      c.last_used < i &&
                        c.bExpires &&
                        ((i = c.last_used), (o = a));
                    }
                    o && this.m_mapRestoreDetails.delete(o);
                  }
                  var u = {
                    strRestoreDetails: t,
                    last_used: Date.now(),
                    bExpires: n
                  };
                  this.m_mapRestoreDetails.set(e, u);
                } else this.m_mapRestoreDetails.delete(e);
                (this.m_bSaveRequired = !0),
                  this.m_bShuttingDown
                    ? this.SaveSavedDimensionStore()
                    : this.DebouncedSaveSavedDimensionStore();
              }
            }),
            i.c(
              [u.a, Object(c.a)(100)],
              e.prototype,
              "DebouncedSaveSavedDimensionStore",
              null
            ),
            e
          );
        })(),
        d = new h();
    },
    edqd: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var o = n("BJf/"),
        i = n.n(o),
        r = n("1zkO"),
        s = n("oy0q"),
        a = (function() {
          function e(t, n, o, r) {
            void 0 === t && (t = 0),
              t instanceof e
                ? (this.m_ulSteamID = t.m_ulSteamID)
                : "string" == typeof t
                  ? (this.m_ulSteamID = i.a.fromString(t, !0))
                  : n && o && void 0 !== r
                    ? this.SetFromComponents(t, r, o, n)
                    : (this.m_ulSteamID = t
                        ? i.a.fromNumber(t, !0)
                        : i.a.UZERO);
          }
          return (
            (e.InitFromAccountID = function(t) {
              return new e(t, s.a.EUNIVERSE, 1, r.k);
            }),
            (e.InitFromClanID = function(t) {
              return new e(t, s.a.EUNIVERSE, 7, 0);
            }),
            (e.prototype.GetAccountID = function() {
              return this.m_ulSteamID.getLowBitsUnsigned();
            }),
            (e.prototype.GetInstance = function() {
              return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
            }),
            (e.prototype.GetAccountType = function() {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
            }),
            (e.prototype.GetUniverse = function() {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
            }),
            (e.prototype.ConvertTo64BitString = function() {
              return this.m_ulSteamID.toString();
            }),
            (e.prototype.Render = function() {
              switch (this.GetAccountType()) {
                case 0:
                  return (
                    "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
                case 7:
                  return (
                    "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
                case 4:
                  return (
                    "[A:" +
                    this.GetUniverse() +
                    ":" +
                    this.GetAccountID() +
                    ":" +
                    this.GetInstance() +
                    "]"
                  );
                case 3:
                  return (
                    "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
                case 2:
                  return (
                    "[M:" +
                    this.GetUniverse() +
                    ":" +
                    this.GetAccountID() +
                    ":" +
                    this.GetInstance() +
                    "]"
                  );
                case 5:
                  return (
                    "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
                case 6:
                  return (
                    "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
                default:
                  return (
                    "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                  );
              }
            }),
            (e.prototype.BIsValid = function() {
              var e = this.GetAccountType();
              if (e <= 0 || e >= 11) return !1;
              var t = this.GetUniverse();
              if (t <= 0 || t >= 5) return !1;
              if (1 == e) {
                if (0 == this.GetAccountID() || this.GetInstance() > r.l)
                  return !1;
              } else if (7 == e) {
                if (0 == this.GetAccountID() || 0 != this.GetInstance())
                  return !1;
              } else if (3 == e && 0 == this.GetAccountID()) return !1;
              return !0;
            }),
            (e.prototype.BIsIndividualAccount = function() {
              return 1 == this.GetAccountType();
            }),
            (e.prototype.BIsClanAccount = function() {
              return 7 == this.GetAccountType();
            }),
            (e.prototype.SetAccountID = function(e) {
              this.m_ulSteamID = new i.a(
                e,
                this.m_ulSteamID.getHighBitsUnsigned(),
                !0
              );
            }),
            (e.prototype.SetInstance = function(e) {
              this.SetFromComponents(
                this.GetAccountID(),
                e,
                this.GetAccountType(),
                this.GetUniverse()
              );
            }),
            (e.prototype.SetAccountType = function(e) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                e,
                this.GetUniverse()
              );
            }),
            (e.prototype.SetUniverse = function(e) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                this.GetAccountType(),
                e
              );
            }),
            (e.prototype.SetFromComponents = function(e, t, n, o) {
              var r = ((255 & o) << 24) + ((15 & n) << 20) + (1048575 & t),
                s = 4294967295 & e;
              this.m_ulSteamID = new i.a(s, r, !0);
            }),
            e
          );
        })();
    },
    kllU: function(e, t, n) {
      "use strict";
      var o = n("mtWM");
      n.n(o), n("m5yx"), n("V/Vt");
    },
    lEUG: function(e, t, n) {
      "use strict";
      function o(e, t, n) {
        t < 0 ||
          n < 0 ||
          (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
      }
      function i(e, t) {
        return r(e, function(e) {
          return t == e;
        });
      }
      function r(e, t) {
        var n = e.findIndex(t);
        return n >= 0 && (e.splice(n, 1), !0);
      }
      function s(e, t) {
        return e.reduce(function(e, n, o, i) {
          return e + (t(n, o, i) ? 1 : 0);
        }, 0);
      }
      function a(e, t) {
        return e.filter(function(e) {
          return t !== e;
        });
      }
      function c(e, t) {
        if (e.length != t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
        return !0;
      }
      function u(e, t, n) {
        for (var o = 0, i = e.length - 1; o <= i; ) {
          var r = Math.floor((o + i) / 2),
            s = n(e[r], t);
          if (s < 0) o = r + 1;
          else if (s > 0) i = r - 1;
          else {
            if (i == r) return r;
            if (r == o) return i > r && n(t, e[r + 1]) < 0 ? r : r + 1;
            o = r;
          }
        }
        return i;
      }
      function p(e, t, n) {
        var o = u(e, t, n);
        e.splice(o + 1, 0, t);
      }
      (t.e = o),
        (t.c = i),
        (t.d = r),
        (t.b = s),
        (t.a = a),
        (t.f = c),
        (t.g = u),
        (t.h = p);
    },
    m5yx: function(e, t, n) {
      "use strict";
      var o = n("oy0q");
      n.d(t, "a", function() {
        return o.a;
      }),
        n.d(t, "d", function() {
          return o.d;
        }),
        n.d(t, "c", function() {
          return o.c;
        }),
        n.d(t, "b", function() {
          return o.b;
        });
    },
    oy0q: function(e, t, n) {
      "use strict";
      function o() {
        var e = i("config");
        e && Object.assign(r, e);
        var t = i("userinfo");
        t && Object.assign(s, t), (window.__webpack_public_path__ = r.CDN_URL);
      }
      function i(e, t) {
        void 0 === t && (t = a);
        var n = document.getElementById(t);
        if (n)
          try {
            return JSON.parse(n.getAttribute("data-" + e) || "");
          } catch (e) {
            console.error("Failed to parse config", e);
          }
        else console.error("Missing config element #" + t);
      }
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "d", function() {
          return s;
        }),
        (t.c = o),
        (t.b = i);
      var r = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          COUNTRY: "",
          CDN_URL: "",
          MEDIA_CDN_COMMUNITY_URL: "",
          MEDIA_CDN_URL: "",
          COMMUNITY_CDN_URL: "",
          COMMUNITY_CDN_ASSET_URL: "",
          PUBLIC_SHARED_URL: "",
          COMMUNITY_BASE_URL: "",
          CHAT_BASE_URL: "",
          STORE_BASE_URL: "",
          STORE_ICON_BASE_URL: "",
          IN_CLIENT: !1,
          USE_POPUPS: !1,
          IN_MOBILE: !1,
          WEBAPI_BASE_URL: "",
          TOKEN_URL: "",
          SESSIONID: "",
          BUILD_TIMESTAMP: 0,
          FRIENDSUI_BETA: !1,
          STEAM_TV: !1
        },
        s = {
          logged_in: !1,
          steamid: "",
          accountid: 0,
          account_name: "",
          token: void 0,
          token_use_id: void 0
        },
        a = "webui_config";
    },
    rZel: function(e, t, n) {
      "use strict";
      function o(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var o = v.LocalizeString(e);
        return o
          ? (t.length > 0 &&
              (o = o.replace(/%(\d+)\$s/g, function(e, n) {
                if (n <= t.length && n >= 1) {
                  var o = t[n - 1];
                  return String(void 0 === o || null === o ? "" : o);
                }
                return e;
              })),
            o)
          : e;
      }
      function i(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var o = v.LocalizeString(e);
        if (!o) return e;
        for (var i, r = [], s = /(.*?)%(\d+)\$s/g, a = 0; (i = s.exec(o)); ) {
          (a += i[0].length), r.push(i[1]);
          var u = parseInt(i[2]);
          u >= 1 && u <= t.length && r.push(t[u - 1]);
        }
        return (
          r.push(o.substr(a)),
          c.createElement.apply(c, [c.Fragment, null].concat(r))
        );
      }
      function r(e, t) {
        for (var n = [], i = 2; i < arguments.length; i++)
          n[i - 2] = arguments[i];
        return 1 === t || "1" === t
          ? o.apply(void 0, [e, t].concat(n))
          : o.apply(void 0, [e + "_Plural", t].concat(n));
      }
      function s(e, t) {
        return void 0 === t && (t = !1), a(e, !t);
      }
      function a(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !0);
        var i = t ? "#TimeSince_" : "#TimeInterval_";
        return e >= 2 * p
          ? o(i + "XYears", Math.floor(e / p))
          : e >= p
            ? ((e -= p),
              e >= 2 * l
                ? o(i + "1YearXMonths", Math.floor(e / l))
                : o(i + "1Year"))
            : e >= 2 * l
              ? o(i + "XMonths", Math.floor(e / l))
              : e >= 2 * m
                ? o(i + "XWeeks", Math.floor(e / m))
                : e >= 2 * h
                  ? o(i + "XDays", Math.floor(e / h))
                  : e >= h
                    ? ((e -= h),
                      e >= 2 * d
                        ? o(i + "1DayXHours", Math.floor(e / d))
                        : o(i + "1Day"))
                    : e >= 2 * d
                      ? o(i + "XHours", Math.floor(e / d))
                      : e >= d
                        ? ((e -= d),
                          e >= 2 * f && n
                            ? o(i + "1HourXMinutes", Math.floor(e / f))
                            : o(i + "1Hour"))
                        : n
                          ? e >= 2 * f
                            ? o(i + "XMinutes", Math.floor(e / f))
                            : o(e >= f ? i + "1Minute" : i + "LessThanAMinute")
                          : o(i + "LessThanAnHour");
      }
      (t.b = o),
        (t.d = i),
        (t.c = r),
        (t.e = s),
        n.d(t, "a", function() {
          return v;
        });
      var c = n("Jmof"),
        u = (n.n(c),
        (function() {
          function e() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          return (
            (e.prototype.InitFromObjects = function(e, t, n, o) {
              var i = this;
              this.m_mapTokens.clear(),
                Object.keys(n).forEach(function(e, t) {
                  i.m_mapTokens.set(e, n[e]);
                }),
                Object.keys(e).forEach(function(t, n) {
                  i.m_mapTokens.set(t, e[t]);
                }),
                t &&
                  Object.keys(t).forEach(function(e, n) {
                    i.m_mapTokens.has(e) || i.m_mapTokens.set(e, t[e]),
                      i.m_mapFallbackTokens.set(e, t[e]);
                  }),
                o &&
                  Object.keys(o).forEach(function(e, t) {
                    i.m_mapTokens.has(e) || i.m_mapTokens.set(e, o[e]),
                      i.m_mapFallbackTokens.has(e) ||
                        i.m_mapFallbackTokens.set(e, o[e]);
                  });
            }),
            (e.prototype.InitDirect = function(e) {
              var t = this;
              this.m_mapTokens.clear(),
                this.m_mapFallbackTokens.clear(),
                Object.keys(e).forEach(function(n, o) {
                  t.m_mapTokens.set(n, e[n]);
                });
            }),
            (e.prototype.GetPreferredLocales = function() {
              var e = ["en-US"];
              return (
                "undefined" != typeof navigator &&
                  void 0 !== navigator.languages &&
                  (e = navigator.languages),
                e
              );
            }),
            (e.prototype.LocalizeString = function(e) {
              if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
              var t = this.m_mapTokens.get(e.substring(1));
              return void 0 === t ? "" : t;
            }),
            (e.prototype.LocalizeStringFromFallback = function(e) {
              if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
              var t = this.m_mapFallbackTokens.get(e.substring(1));
              return void 0 === t ? "" : t;
            }),
            e
          );
        })()),
        p = 31536e3,
        l = 2628e3,
        m = 604800,
        h = 86400,
        d = 3600,
        f = 60,
        v = new u();
      window.LocalizationManager = v;
    },
    x0X8: function(e, t, n) {
      "use strict";
      function o(e) {
        return function(t, n, o) {
          var i = o.value;
          o.value = function() {
            for (var t = this, o = [], r = 0; r < arguments.length; r++)
              o[r] = arguments[r];
            var s = this[n + "_DebounceProperties"];
            void 0 === s &&
              (s = this[n + "_DebounceProperties"] = {
                hTimer: void 0,
                nPending: 0
              }),
              void 0 === s.hTimer
                ? (i.apply(this, o),
                  (s.hTimer = window.setInterval(function() {
                    s.nPending > 0
                      ? (i.apply(t, o), (s.nPending = 0))
                      : (window.clearInterval(s.hTimer), (s.hTimer = void 0));
                  }, e)))
                : (s.nPending += 1);
          };
        };
      }
      t.a = o;
    }
  },
  ["6+TJ"]
);

/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
webpackJsonp(
  [4],
  {
    "3e1Q": function(t, e, n) {
      "use strict";
      function o(t) {
        return "public" == a.a.WEB_UNIVERSE
          ? "https://s.team/chat/" + t
          : a.a.COMMUNITY_BASE_URL + "chat/invite/" + t;
      }
      n.d(e, "b", function() {
        return c;
      }),
        (e.a = o);
      var i = n("TToO"),
        r = n("y986"),
        s = n("DRjr"),
        a = n("m5yx"),
        c = (function() {
          function t(t) {
            (this.m_bReady = !1),
              (this.m_bValid = !1),
              (this.m_strInviteCode = t);
          }
          return (
            (t.prototype.BIsReady = function() {
              return this.m_bReady;
            }),
            (t.prototype.BIsValid = function() {
              return this.m_bValid;
            }),
            (t.prototype.BIsInviteLink = function() {
              return !!this.m_strInviteCode;
            }),
            (t.prototype.GetInviteCode = function() {
              return this.m_strInviteCode;
            }),
            (t.prototype.BNeverExpires = function() {
              return this.m_rtTimeExpires == s.b;
            }),
            (t.prototype.GetChatRoomGroupID = function() {
              return this.m_ulChatRoomGroupID;
            }),
            (t.prototype.BIsVoiceChatInvite = function() {
              return !!this.m_ulChatID;
            }),
            (t.prototype.GetChatID = function() {
              return this.m_ulChatID;
            }),
            (t.prototype.GetURL = function() {
              return this.m_strInviteCode ? o(this.m_strInviteCode) : null;
            }),
            (t.prototype.BIsUserBanned = function() {
              return this.m_bIsBanned;
            }),
            (t.prototype.GetTimeKickExpires = function() {
              return this.m_rtKickExpires;
            }),
            Object.defineProperty(t.prototype, "time_expires", {
              get: function() {
                return this.m_rtTimeExpires;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.InitInvalid = function() {
              (this.m_bValid = !1), (this.m_bReady = !0);
            }),
            (t.prototype.InitDirectInvite = function(t, e, n, o) {
              void 0 === n && (n = !1),
                void 0 === o && (o = void 0),
                (this.m_ulChatRoomGroupID = t),
                (this.m_ulChatID = e),
                (this.m_bIsBanned = n),
                (this.m_rtKickExpires = o),
                (this.m_rtTimeExpires = s.b),
                (this.m_bValid = !0),
                (this.m_bReady = !0);
            }),
            i.b([r.observable], t.prototype, "m_bReady", void 0),
            i.b([r.action], t.prototype, "InitInvalid", null),
            i.b([r.action], t.prototype, "InitDirectInvite", null),
            t
          );
        })();
    },
    "4Dav": function(t, e, n) {
      "use strict";
      function o(t, e) {
        for (var n = [], o = 2; o < arguments.length; o++)
          n[o - 2] = arguments[o];
        console.assert
          ? 0 == n.length
            ? console.assert(!!t, e)
            : console.assert.apply(console, [!!t, e].concat(n))
          : t && console.warn.apply(console, [e].concat(n));
      }
      e.a = o;
    },
    "6+TJ": function(t, e, n) {
      "use strict";
      function o(t) {
        var e = window.open(
          "",
          "SteamWebChat",
          "height=790,width=1015,resize=yes,scrollbars=yes"
        );
        if (e) {
          var n = !1;
          try {
            n = "about:blank" == e.location.href;
          } catch (t) {}
          if (n) {
            if (t) {
              var o = function(n) {
                var i = p.a.COMMUNITY_BASE_URL.replace(
                  /(https?:\/\/[^\/]*).*$/,
                  "$1"
                );
                n.source == e &&
                  "FriendsUIReady" == n.data &&
                  n.origin == i &&
                  (e.postMessage(t, p.a.COMMUNITY_BASE_URL),
                  window.removeEventListener("message", o));
              };
              window.addEventListener("message", o);
            }
            e.location.href = p.a.COMMUNITY_BASE_URL + "chat/";
          } else t && e.postMessage(t, p.a.COMMUNITY_BASE_URL);
          e.focus();
        }
      }
      function i(t) {
        return c.createElement(
          "div",
          { className: "ChatMessageInvite" },
          c.createElement("div", {
            className: "leftInviteContainer",
            dangerouslySetInnerHTML: { __html: t.render.strAvatarHTML }
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
                    __html: t.render.strInviterNameLinkHTML
                  }
                })
              )
            ),
            c.createElement(
              "div",
              { className: "groupName" },
              t.render.strChatRoomGroupName
            ),
            t.children
          )
        );
      }
      function r() {
        for (
          var t = document.querySelectorAll(".ChatReactRoot"), e = 0;
          e < t.length;
          e++
        ) {
          var n = t[e],
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
      function s(t) {
        var e;
        try {
          e = JSON.parse(t.getAttribute("data-inviteinfo"));
        } catch (t) {}
        I.sm_rtTimeCur = e.rtTimeCur;
        var n = new I(e);
        u.render(c.createElement(C, { controller: n }), t);
      }
      function a(t, e, n) {
        if ("english" !== e)
          "friendsui" == t ? (E = n) : "shared" == t && (w = n);
        else if ("shared" == t) R = n;
        else {
          var o = void 0,
            i = null,
            r = void 0,
            s = null;
          void 0 !== E ? ((o = E), (i = n)) : (o = n),
            void 0 !== w ? ((r = w), (s = R)) : (r = R),
            m.a.InitFromObjects(o, i, r, s),
            (E = void 0),
            (w = void 0),
            (R = void 0);
        }
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n("Jmof"),
        u = n("wLXD"),
        p = n("m5yx"),
        l = n("PVtO"),
        m = (n("kllU"), n("sVhq")),
        h = n("4Dav"),
        d = n("TToO"),
        f = n("y986"),
        _ = n("Mn8c"),
        v = n("3e1Q"),
        b = n("wzNa"),
        g = n("KLxG"),
        y = (p.a.COMMUNITY_BASE_URL,
        (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            d.c(e, t),
            (e.prototype.BIsExpired = function() {
              return I.sm_rtTimeCur >= this.m_rtTimeExpires;
            }),
            (e.prototype.InitFromPHPInviteLinkInfo = function(t) {
              this.m_ulChatID = t.chat_id;
              var e = new b.a(t.steamid_sender);
              e.BIsIndividualAccount() &&
                (this.m_unAccountIDInviter = e.GetAccountID()),
                (this.m_rtTimeExpires = t.time_expires),
                (this.m_bIsBanned = t.banned),
                (this.m_rtKickExpires = t.time_kick_expire),
                t.group_summary &&
                  (this.m_ulChatRoomGroupID = t.group_summary.chat_group_id),
                (this.m_bValid = !0),
                (this.m_bReady = !0);
            }),
            d.b([f.action], e.prototype, "InitFromPHPInviteLinkInfo", null),
            e
          );
        })(v.b)),
        I = (function() {
          function t(t) {
            (this.m_bConnectingToClient = !1),
              (this.m_invite = new y(t.strInviteCode)),
              t.Invite
                ? this.m_invite.InitFromPHPInviteLinkInfo(t.Invite)
                : this.m_invite.InitInvalid(),
              (this.m_htmlPreRendered = t.render),
              this.SendInviteToClient();
          }
          return (
            (t.prototype.BIsInviteValid = function() {
              return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
            }),
            (t.prototype.GetInvite = function() {
              return this.m_invite;
            }),
            (t.prototype.BIsConnectingToClient = function() {
              return this.m_bConnectingToClient;
            }),
            (t.prototype.GetConnectResults = function() {
              return this.m_connectResult;
            }),
            (t.prototype.GetPreRenderedHTML = function() {
              return this.m_htmlPreRendered;
            }),
            (t.prototype.LaunchWebChat = function() {
              o({
                command: "ShowChatRoomGroupInvite",
                invite_code: this.m_invite.GetInviteCode()
              });
            }),
            (t.prototype.LaunchSteamIgnoreAccount = function() {
              l.b.SetAllowAccountMismatch(!0), this.SendInviteToClient();
            }),
            (t.prototype.ForceLaunchSteamClient = function() {
              window.location.href =
                "steam://friends/ShowChatRoomGroupInvite/" +
                this.m_invite.GetInviteCode();
            }),
            (t.prototype.SendInviteToClient = function() {
              var t = this;
              this.m_invite.BIsValid() &&
                !this.m_invite.BIsExpired() &&
                ((this.m_bConnectingToClient = !0),
                l.b
                  .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                  .then(function(e) {
                    Object(f.runInAction)(function() {
                      (t.m_bConnectingToClient = !1),
                        (t.m_connectResult = e),
                        console.log(e);
                    });
                  }));
            }),
            d.b([f.observable], t.prototype, "m_bConnectingToClient", void 0),
            d.b([f.observable], t.prototype, "m_connectResult", void 0),
            t
          );
        })(),
        C = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            d.c(e, t),
            (e.prototype.render = function() {
              return c.createElement(
                "div",
                { className: "InviteLandingRoot" },
                this.props.controller.BIsInviteValid()
                  ? c.createElement(S, { controller: this.props.controller })
                  : c.createElement(D, { controller: this.props.controller })
              );
            }),
            (e = d.b([_.observer], e))
          );
        })(c.Component),
        S = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_bTriedToLaunchSteam = !1), e;
          }
          return (
            d.c(e, t),
            (e.prototype.LaunchWebChat = function() {
              this.props.controller.LaunchWebChat();
            }),
            (e.prototype.OpenInSteamIgnoreAccount = function() {
              this.props.controller.LaunchSteamIgnoreAccount();
            }),
            (e.prototype.LaunchSteamClient = function() {
              var t = this;
              this.props.controller.ForceLaunchSteamClient(),
                window.setTimeout(function() {
                  t.m_bTriedToLaunchSteam = !0;
                }, 1e3);
            }),
            (e.prototype.render = function() {
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
              var t = this.props.controller.GetConnectResults(),
                e = this.props.controller.GetInvite(),
                n = p.a.COMMUNITY_BASE_URL + "TODO",
                o = "inviteButton inviteButtonJoinChat";
              return (
                e.BIsVoiceChatInvite() && (o += " inviteButtonJoinVoice"),
                t.success
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
                  : t.account_mismatch
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
                    : t.call_unsupported
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
            d.b([f.observable], e.prototype, "m_bTriedToLaunchSteam", void 0),
            d.b([g.a], e.prototype, "LaunchWebChat", null),
            d.b([g.a], e.prototype, "OpenInSteamIgnoreAccount", null),
            d.b([g.a], e.prototype, "LaunchSteamClient", null),
            (e = d.b([_.observer], e))
          );
        })(c.Component),
        D = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            d.c(e, t),
            (e.prototype.render = function() {
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
            e
          );
        })(c.Component);
      window.AssertMsg = h.a;
      var O = new l.a();
      (window.ClientConnectionAPI = O),
        document.addEventListener("DOMContentLoaded", function() {
          Object(p.c)(), r();
        });
      var E, w, R;
      window.LocalizationReady = a;
    },
    DRjr: function(t, e, n) {
      "use strict";
      n.d(e, "j", function() {
        return o;
      }),
        n.d(e, "k", function() {
          return i;
        }),
        n.d(e, "c", function() {
          return r;
        }),
        n.d(e, "d", function() {
          return s;
        }),
        n.d(e, "i", function() {
          return a;
        }),
        n.d(e, "e", function() {
          return c;
        }),
        n.d(e, "f", function() {
          return u;
        }),
        n.d(e, "h", function() {
          return p;
        }),
        n.d(e, "g", function() {
          return l;
        }),
        n.d(e, "a", function() {
          return m;
        }),
        n.d(e, "b", function() {
          return h;
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
        h = 2147483647;
    },
    KLxG: function(t, e, n) {
      "use strict";
      function o(t, e, n) {
        return {
          get: function() {
            var t = n.value.bind(this);
            return (
              this.hasOwnProperty(e) ||
                Object.defineProperty(this, e, { value: t }),
              t
            );
          }
        };
      }
      e.a = o;
    },
    PVtO: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return r;
      }),
        n.d(e, "b", function() {
          return a;
        });
      var o = n("m5yx"),
        i = { success: !0, result: 1 },
        r = (function() {
          function t() {
            (this.m_connection = new s()), (this.m_bAllowAccountMismatch = !1);
          }
          return (
            (t.prototype.FailureResult = function(t) {
              void 0 === t && (t = 2);
              var e = { success: !1, result: t };
              return (
                this.m_connection &&
                  !this.m_connection.browser_supported &&
                  (e.browser_unsupported = !0),
                this.m_connection &&
                  !this.m_connection.connected_to_client &&
                  (e.connect_failed = !0),
                7 == t && (e.call_unsupported = !0),
                e
              );
            }),
            (t.prototype.SetAllowAccountMismatch = function(t) {
              this.m_bAllowAccountMismatch = t;
            }),
            (t.prototype.BClientConnected = function() {
              var t = this;
              return this.m_connection.Connect().then(
                function() {
                  return i;
                },
                function() {
                  return t.FailureResult();
                }
              );
            }),
            (t.prototype.BClientSupportsFriendsUI = function() {
              var t = this;
              return this.BClientConnected().then(function() {
                return t.m_connection.ClientInfo.bFriendsUIEnabled;
              });
            }),
            (t.prototype.OpenFriendChatDialog = function(t) {
              var e = { message: "ShowFriendChatDialog", steamid: t };
              return this.GenericEResultCall(e);
            }),
            (t.prototype.OpenChatRoomGroupDialog = function(t, e) {
              var n = { message: "ShowChatRoomGroupDialog", chat_group_id: t };
              return e && (n.chat_room_id = e), this.GenericEResultCall(n);
            }),
            (t.prototype.ShowChatRoomGroupInvite = function(t) {
              var e = { message: "ShowChatRoomGroupInvite", invite_code: t };
              return this.GenericEResultCall(e);
            }),
            (t.prototype.OpenJoinGameDialog = function(t) {
              var e = { message: "ShowJoinGameDialog", friend_id: t };
              return this.GenericEResultCall(e);
            }),
            (t.prototype.IsSubscribedApp = function(t) {
              var e = { message: "IsSubscribedApp", appid: t };
              return this.GenericEResultCall(e);
            }),
            (t.prototype.BClientAccountMatches = function() {
              return (
                !o.d.logged_in ||
                o.d.accountid == this.m_connection.ClientInfo.unAccountID
              );
            }),
            (t.prototype.GenericEResultCall = function(t) {
              var e = this;
              return this.m_connection
                .Connect()
                .then(function() {
                  return e.m_bAllowAccountMismatch || e.BClientAccountMatches()
                    ? e.m_connection
                        .SendMsgAndAwaitResponse(t)
                        .then(function(t) {
                          return 1 === t.success
                            ? i
                            : e.FailureResult(t.success);
                        })
                    : { success: !1, result: 19, account_mismatch: !0 };
                })
                .catch(function() {
                  return e.FailureResult();
                });
            }),
            t
          );
        })(),
        s = (function() {
          function t() {
            (this.m_mapWaitingCallbacks = new Map()),
              (this.m_iCallSeq = 1),
              (this.m_bReady = !1),
              (this.m_bClientConnectionFailed = !1),
              (this.m_bSecurityException = !1),
              (this.m_ClientInfo = {
                ulVersion: "",
                bFriendsUIEnabled: !1,
                unAccountID: 0
              });
          }
          return (
            Object.defineProperty(t.prototype, "ClientInfo", {
              get: function() {
                return this.m_ClientInfo;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "ready", {
              get: function() {
                return this.m_bReady;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "browser_supported", {
              get: function() {
                return !this.m_bSecurityException;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "connected_to_client", {
              get: function() {
                return (
                  this.m_socket && this.m_socket.readyState == WebSocket.OPEN
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.SendMsgAndAwaitResponse = function(t) {
              var e = this;
              return new Promise(function(n, o) {
                var i = e.m_iCallSeq++;
                e.BSendMsg(t, i)
                  ? e.m_mapWaitingCallbacks.set(i, {
                      iSeq: i,
                      fnCallback: n,
                      fnError: o
                    })
                  : o();
              });
            }),
            (t.prototype.BSendMsg = function(t, e) {
              if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
                return !1;
              var n = Object.assign({}, t, { universe: o.a.EUNIVERSE });
              void 0 !== e && (n.sequenceid = e);
              try {
                return this.m_socket.send(JSON.stringify(n)), !0;
              } catch (t) {
                return !1;
              }
            }),
            (t.prototype.OnSocketMessage = function(t) {
              try {
                var e = JSON.parse(t.data);
                if (e.sequenceid) {
                  var n = this.m_mapWaitingCallbacks.get(e.sequenceid);
                  if (n)
                    return (
                      this.m_mapWaitingCallbacks.delete(e.sequenceid),
                      void n.fnCallback(e)
                    );
                }
              } catch (t) {
                console.error("exception parsing response", t);
              }
            }),
            (t.prototype.Connect = function() {
              var t = this;
              if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
                return Promise.resolve();
              if (this.m_promiseConnect) return this.m_promiseConnect;
              var e = new Promise(function(e, n) {
                try {
                  t.m_socket = new WebSocket(
                    "ws://127.0.0.1:27060/clientsocket/"
                  );
                } catch (e) {
                  return (t.m_bSecurityException = !0), void n(e);
                }
                (t.m_socket.onerror = function(t) {
                  n();
                }),
                  (t.m_socket.onmessage = t.OnSocketMessage.bind(t)),
                  (t.m_socket.onopen = function(o) {
                    var i = { message: "GetClientInfo" };
                    t
                      .SendMsgAndAwaitResponse(i)
                      .then(function(o) {
                        1 == o.success
                          ? ((t.m_ClientInfo.ulVersion = o.clientversion),
                            (t.m_ClientInfo.bFriendsUIEnabled = !!o.friendsui),
                            (t.m_ClientInfo.unAccountID = o.accountid),
                            e())
                          : n();
                      })
                      .catch(n);
                  });
              });
              return (
                (this.m_promiseConnect = e),
                this.m_promiseConnect
                  .then(function() {
                    (t.m_bReady = !0), (t.m_promiseConnect = void 0);
                  })
                  .catch(function() {
                    (t.m_bClientConnectionFailed = !0),
                      (t.m_promiseConnect = void 0);
                  }),
                this.m_promiseConnect
              );
            }),
            t
          );
        })(),
        a = new r();
      window.ClientConnectionAPI = a;
    },
    TToO: function(t, e, n) {
      "use strict";
      function o(t, e) {
        function n() {
          this.constructor = t;
        }
        s(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      function i(t, e) {
        var n = {};
        for (var o in t)
          Object.prototype.hasOwnProperty.call(t, o) &&
            e.indexOf(o) < 0 &&
            (n[o] = t[o]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, o = Object.getOwnPropertySymbols(t);
            i < o.length;
            i++
          )
            e.indexOf(o[i]) < 0 && (n[o[i]] = t[o[i]]);
        return n;
      }
      function r(t, e, n, o) {
        var i,
          r = arguments.length,
          s =
            r < 3
              ? e
              : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, o);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (i = t[a]) &&
              (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
        return r > 3 && s && Object.defineProperty(e, n, s), s;
      }
      (e.c = o),
        n.d(e, "a", function() {
          return a;
        }),
        (e.d = i),
        (e.b = r); /*! *****************************************************************************
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
      var s =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          },
        a =
          Object.assign ||
          function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++) {
              e = arguments[n];
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          };
    },
    kllU: function(t, e, n) {
      "use strict";
      var o = n("mtWM");
      n.n(o), n("m5yx"), n("z9An");
    },
    m5yx: function(t, e, n) {
      "use strict";
      function o() {
        var t = i("config");
        t && Object.assign(r, t);
        var e = i("userinfo");
        e && Object.assign(s, e), (n.p = r.CDN_URL);
      }
      function i(t, e) {
        void 0 === e && (e = a);
        var n = document.getElementById(e);
        if (n)
          try {
            return JSON.parse(n.getAttribute("data-" + t) || "");
          } catch (t) {
            console.error("Failed to parse config", t);
          }
        else console.error("Missing config element #" + e);
      }
      n.d(e, "a", function() {
        return r;
      }),
        n.d(e, "d", function() {
          return s;
        }),
        (e.c = o),
        (e.b = i);
      var r = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          CDN_URL: "",
          MEDIA_CDN_COMMUNITY_URL: "",
          MEDIA_CDN_URL: "",
          COMMUNITY_CDN_URL: "",
          COMMUNITY_CDN_ASSET_URL: "",
          PUBLIC_SHARED_URL: "",
          COMMUNITY_BASE_URL: "",
          STORE_BASE_URL: "",
          STORE_ICON_BASE_URL: "",
          IN_CLIENT: !1,
          USE_POPUPS: !1,
          IN_MOBILE: !1,
          WEBAPI_BASE_URL: "",
          TOKEN_URL: "",
          SESSIONID: "",
          BUILD_TIMESTAMP: 0
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
    sVhq: function(t, e, n) {
      "use strict";
      function o(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        var o = _.LocalizeString(t);
        return o
          ? (e.length > 0 &&
              (o = o.replace(/%(\d+)\$s/g, function(t, n) {
                if (n <= e.length && n >= 1) {
                  var o = e[n - 1];
                  return String(void 0 === o || null === o ? "" : o);
                }
                return t;
              })),
            o)
          : t;
      }
      function i(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        var o = _.LocalizeString(t);
        if (!o) return t;
        for (var i, r = [], s = /(.*?)%(\d+)\$s/g, a = 0; (i = s.exec(o)); ) {
          (a += i[0].length), r.push(i[1]);
          var u = parseInt(i[2]);
          u >= 1 && u <= e.length && r.push(e[u - 1]);
        }
        return (
          r.push(o.substr(a)),
          c.createElement.apply(c, [c.Fragment, null].concat(r))
        );
      }
      function r(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++)
          n[i - 2] = arguments[i];
        return 1 === e || "1" === e
          ? o.apply(void 0, [t, e].concat(n))
          : o.apply(void 0, [t + "_Plural", e].concat(n));
      }
      function s(t, e) {
        return void 0 === e && (e = !1), a(t, !e);
      }
      function a(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !0);
        var i = e ? "#TimeSince_" : "#TimeInterval_";
        return t >= 2 * p
          ? o(i + "XYears", Math.floor(t / p))
          : t >= p
            ? ((t -= p),
              t >= 2 * l
                ? o(i + "1YearXMonths", Math.floor(t / l))
                : o(i + "1Year"))
            : t >= 2 * l
              ? o(i + "XMonths", Math.floor(t / l))
              : t >= 2 * m
                ? o(i + "XWeeks", Math.floor(t / m))
                : t >= 2 * h
                  ? o(i + "XDays", Math.floor(t / h))
                  : t >= h
                    ? ((t -= h),
                      t >= 2 * d
                        ? o(i + "1DayXHours", Math.floor(t / d))
                        : o(i + "1Day"))
                    : t >= 2 * d
                      ? o(i + "XHours", Math.floor(t / d))
                      : t >= d
                        ? ((t -= d),
                          t >= 2 * f && n
                            ? o(i + "1HourXMinutes", Math.floor(t / f))
                            : o(i + "1Hour"))
                        : n
                          ? t >= 2 * f
                            ? o(i + "XMinutes", Math.floor(t / f))
                            : o(t >= f ? i + "1Minute" : i + "LessThanAMinute")
                          : o(i + "LessThanAnHour");
      }
      (e.b = o),
        (e.d = i),
        (e.c = r),
        (e.e = s),
        n.d(e, "a", function() {
          return _;
        });
      var c = n("Jmof"),
        u = (n.n(c),
        (function() {
          function t() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          return (
            (t.prototype.InitFromObjects = function(t, e, n, o) {
              var i = this;
              this.m_mapTokens.clear(),
                Object.keys(n).forEach(function(t, e) {
                  i.m_mapTokens.set(t, n[t]);
                }),
                Object.keys(t).forEach(function(e, n) {
                  i.m_mapTokens.set(e, t[e]);
                }),
                e &&
                  Object.keys(e).forEach(function(t, n) {
                    i.m_mapTokens.has(t) || i.m_mapTokens.set(t, e[t]),
                      i.m_mapFallbackTokens.set(t, e[t]);
                  }),
                o &&
                  Object.keys(o).forEach(function(t, e) {
                    i.m_mapTokens.has(t) || i.m_mapTokens.set(t, o[t]),
                      i.m_mapFallbackTokens.has(t) ||
                        i.m_mapFallbackTokens.set(t, o[t]);
                  });
            }),
            (t.prototype.InitDirect = function(t) {
              var e = this;
              this.m_mapTokens.clear(),
                this.m_mapFallbackTokens.clear(),
                Object.keys(t).forEach(function(n, o) {
                  e.m_mapTokens.set(n, t[n]);
                });
            }),
            (t.prototype.LocalizeString = function(t) {
              if (!t || 0 == t.length || "#" != t.charAt(0)) return "";
              var e = this.m_mapTokens.get(t.substring(1));
              return void 0 === e ? "" : e;
            }),
            (t.prototype.LocalizeStringFromFallback = function(t) {
              if (!t || 0 == t.length || "#" != t.charAt(0)) return "";
              var e = this.m_mapFallbackTokens.get(t.substring(1));
              return void 0 === e ? "" : e;
            }),
            t
          );
        })()),
        p = 31536e3,
        l = 2628e3,
        m = 604800,
        h = 86400,
        d = 3600,
        f = 60,
        _ = new u();
      window.LocalizationManager = _;
    },
    vwkX: function(t, e, n) {
      "use strict";
      function o(t, e, n) {
        e < 0 ||
          n < 0 ||
          (n >= t.length && (t[n] = void 0), t.splice(n, 0, t.splice(e, 1)[0]));
      }
      function i(t, e) {
        return r(t, function(t) {
          return e == t;
        });
      }
      function r(t, e) {
        var n = t.findIndex(e);
        return n >= 0 && (t.splice(n, 1), !0);
      }
      function s(t, e) {
        return t.filter(function(t) {
          return e !== t;
        });
      }
      function a(t, e) {
        if (t.length != e.length) return !1;
        for (var n = 0; n < t.length; n++) if (t[n] != e[n]) return !1;
        return !0;
      }
      (e.d = o), (e.b = i), (e.c = r), (e.a = s), (e.e = a);
    },
    wzNa: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return a;
      });
      var o = n("BJf/"),
        i = n.n(o),
        r = n("DRjr"),
        s = n("m5yx"),
        a = (function() {
          function t(e, n, o, r) {
            void 0 === e && (e = 0),
              e instanceof t
                ? (this.m_ulSteamID = e.m_ulSteamID)
                : "string" == typeof e
                  ? (this.m_ulSteamID = i.a.fromString(e, !0))
                  : n && o && void 0 !== r
                    ? this.SetFromComponents(e, r, o, n)
                    : (this.m_ulSteamID = e
                        ? i.a.fromNumber(e, !0)
                        : i.a.UZERO);
          }
          return (
            (t.InitFromAccountID = function(e) {
              return new t(e, s.a.EUNIVERSE, 1, r.j);
            }),
            (t.InitFromClanID = function(e) {
              return new t(e, s.a.EUNIVERSE, 7, 0);
            }),
            (t.prototype.GetAccountID = function() {
              return this.m_ulSteamID.getLowBitsUnsigned();
            }),
            (t.prototype.GetInstance = function() {
              return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
            }),
            (t.prototype.GetAccountType = function() {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
            }),
            (t.prototype.GetUniverse = function() {
              return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
            }),
            (t.prototype.ConvertTo64BitString = function() {
              return this.m_ulSteamID.toString();
            }),
            (t.prototype.Render = function() {
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
            (t.prototype.BIsValid = function() {
              var t = this.GetAccountType();
              if (t <= 0 || t >= 11) return !1;
              var e = this.GetUniverse();
              if (e <= 0 || e >= 5) return !1;
              if (1 == t) {
                if (0 == this.GetAccountID() || this.GetInstance() > r.k)
                  return !1;
              } else if (7 == t) {
                if (0 == this.GetAccountID() || 0 != this.GetInstance())
                  return !1;
              } else if (3 == t && 0 == this.GetAccountID()) return !1;
              return !0;
            }),
            (t.prototype.BIsIndividualAccount = function() {
              return 1 == this.GetAccountType();
            }),
            (t.prototype.BIsClanAccount = function() {
              return 7 == this.GetAccountType();
            }),
            (t.prototype.SetAccountID = function(t) {
              this.m_ulSteamID = new i.a(
                t,
                this.m_ulSteamID.getHighBitsUnsigned(),
                !0
              );
            }),
            (t.prototype.SetInstance = function(t) {
              this.SetFromComponents(
                this.GetAccountID(),
                t,
                this.GetAccountType(),
                this.GetUniverse()
              );
            }),
            (t.prototype.SetAccountType = function(t) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                t,
                this.GetUniverse()
              );
            }),
            (t.prototype.SetUniverse = function(t) {
              this.SetFromComponents(
                this.GetAccountID(),
                this.GetInstance(),
                this.GetAccountType(),
                t
              );
            }),
            (t.prototype.SetFromComponents = function(t, e, n, o) {
              var r = ((255 & o) << 24) + ((15 & n) << 20) + (1048575 & e),
                s = 4294967295 & t;
              this.m_ulSteamID = new i.a(s, r, !0);
            }),
            t
          );
        })();
    },
    z9An: function(t, e, n) {
      "use strict";
      n.d(e, "c", function() {
        return o;
      }),
        n.d(e, "a", function() {
          return u;
        }),
        n.d(e, "b", function() {
          return p;
        }),
        n.d(e, "d", function() {
          return m;
        });
      var o,
        i = n("TToO"),
        r = n("vwkX"),
        s = n("KLxG"),
        a = n("y986");
      !(function(t) {
        (t[(t.Minimized = 1)] = "Minimized"),
          (t[(t.Hidden = 2)] = "Hidden"),
          (t[(t.Tooltip = 4)] = "Tooltip"),
          (t[(t.ContextMenu = 8)] = "ContextMenu"),
          (t[(t.Resizable = 16)] = "Resizable");
      })(o || (o = {}));
      var c = (function() {
          function t(t, e) {
            (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
            for (
              var n = t.document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var i = n[o];
              i.addEventListener("load", this.OnLinkLoad),
                this.m_rgLoadingLinks.push(i);
            }
          }
          return (
            (t.prototype.SetTarget = function(t) {
              (this.m_fnRender = t),
                0 == this.m_rgLoadingLinks.length && this.m_fnRender();
            }),
            (t.prototype.OnLinkLoad = function(t) {
              t.currentTarget.removeEventListener("load", this.OnLinkLoad),
                r.b(this.m_rgLoadingLinks, t.currentTarget),
                0 == this.m_rgLoadingLinks.length && this.m_fnRender();
            }),
            i.b([s.a], t.prototype, "OnLinkLoad", null),
            t
          );
        })(),
        u = (function() {
          function t(t, e) {
            (this.m_bFocused = !1),
              (this.m_strName = t),
              (this.m_rgParams = e),
              this.m_rgParams.target_browser &&
                (this.m_strName +=
                  "_pid" + this.m_rgParams.target_browser.m_unPID),
              (this.m_strTitle = e.title),
              delete this.m_rgParams.title;
          }
          return (
            (t.prototype.UpdateParamsBeforeShow = function(t) {
              return t;
            }),
            (t.prototype.OnDrop = function(t) {
              console.log("Ignoring drop onto toplevel window", t),
                t.preventDefault(),
                t.stopPropagation();
            }),
            (t.prototype.OnDragOver = function(t) {
              t.preventDefault(),
                (t.dataTransfer.dropEffect = "none"),
                t.stopPropagation();
            }),
            (t.prototype.OnMessage = function(t) {
              "window_moved" == t.data && this.OnResize();
            }),
            (t.prototype.Show = function(t) {
              var e = this;
              void 0 === t && (t = !0),
                window.SteamClient &&
                  (this.m_rgParams.eCreationFlags |= o.Hidden),
                this.m_rgParams.eCreationFlags & o.Tooltip && (t = !1),
                this.BIsValid() &&
                  (this.BIsClosed()
                    ? ((this.m_popup = void 0), (this.m_element = void 0))
                    : t && this.Focus());
              var n = m.GetExistingPopup(this.m_strName);
              if (!n || this.m_rgParams.replace_existing_popup) {
                this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
                var i, r, s;
                n
                  ? ((r = n.m_element),
                    (i = n.m_popup),
                    n.ReleasePopup(),
                    (s = n.m_renderWhenReady),
                    m.RemoveTrackedPopup(n),
                    i.removeEventListener("beforeunload", n.OnUnload),
                    i.removeEventListener("resize", n.OnResizeEvent),
                    i.removeEventListener("focus", this.OnFocusInternal),
                    i.removeEventListener("blur", this.OnBlurInternal),
                    i.removeEventListener("drop", n.OnDrop),
                    i.removeEventListener("dragover", n.OnDragOver),
                    i.removeEventListener("message", this.OnMessage))
                  : ((a = l.CreatePopup(this.m_strName, this.m_rgParams)),
                    (i = a.popup),
                    (r = a.element),
                    (s = new c(i, r))),
                  i &&
                    r &&
                    ((i.document.title = this.m_strTitle),
                    i.addEventListener("beforeunload", this.OnUnload),
                    i.addEventListener("resize", this.OnResizeEvent),
                    i.addEventListener("focus", this.OnFocusInternal),
                    i.addEventListener("blur", this.OnBlurInternal),
                    i.addEventListener("drop", this.OnDrop),
                    i.addEventListener("dragover", this.OnDragOver),
                    i.addEventListener("message", this.OnMessage),
                    (this.m_popup = i),
                    (this.m_element = r),
                    (this.m_renderWhenReady = s),
                    this.m_renderWhenReady.SetTarget(function() {
                      return e.RenderInternal(e.m_popup, e.m_element, t);
                    })),
                  m.AddTrackedPopup(this),
                  n && t && this.Focus();
                var a;
              }
            }),
            (t.prototype.RenderInternal = function(t, e, n) {
              this.Render(t, e),
                this.OnLoad(),
                t.SteamClient &&
                  (n
                    ? t.SteamClient.Window.BringToFront()
                    : t.SteamClient.Window.ShowWindow());
            }),
            (t.prototype.OnResizeEvent = function() {
              this.OnResize();
            }),
            (t.prototype.OnUnload = function() {
              m.RemoveTrackedPopup(this), this.OnClose();
            }),
            Object.defineProperty(t.prototype, "browser_info", {
              get: function() {
                return this.m_rgParams.target_browser;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "window", {
              get: function() {
                return this.m_popup;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "root_element", {
              get: function() {
                return this.m_element;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "title", {
              get: function() {
                return this.m_strTitle;
              },
              set: function(t) {
                (this.m_strTitle = t),
                  this.m_popup &&
                    (this.m_popup.document.title = this.m_strTitle);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.Focus = function() {
              this.m_popup &&
              void 0 !== this.m_popup.SteamClient &&
              void 0 !== this.m_popup.SteamClient.Window
                ? this.m_popup.SteamClient.Window.BringToFront()
                : this.m_popup && this.m_popup.focus();
            }),
            (t.prototype.Close = function() {
              this.m_popup && this.m_popup.close();
            }),
            (t.prototype.GetName = function() {
              return this.m_strName;
            }),
            (t.prototype.BIsValid = function() {
              return !!this.m_popup;
            }),
            (t.prototype.BIsClosed = function() {
              return !this.m_popup || this.m_popup.closed;
            }),
            (t.prototype.BIsVisible = function() {
              return (
                this.m_popup &&
                !this.m_popup.closed &&
                "visible" == this.m_popup.document.visibilityState
              );
            }),
            (t.prototype.BIsFocused = function() {
              return this.BIsVisible() && this.m_popup.document.hasFocus();
            }),
            (t.prototype.OnFocusInternal = function() {
              (this.m_bFocused = !0), this.OnFocus();
            }),
            (t.prototype.OnBlurInternal = function() {
              (this.m_bFocused = !1), this.OnBlur();
            }),
            Object.defineProperty(t.prototype, "focused", {
              get: function() {
                return this.m_bFocused;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.GetWindowRestoreDetails = function() {
              var t = this;
              return this.m_popup &&
                !this.m_popup.closed &&
                this.m_popup.SteamClient
                ? new Promise(function(e, n) {
                    t.m_popup.SteamClient.Window.GetWindowRestoreDetails(
                      function(t) {
                        e(t);
                      }
                    );
                  })
                : Promise.resolve("");
            }),
            (t.prototype.ReleasePopup = function() {
              this.OnClose(), (this.m_popup = null);
            }),
            (t.prototype.OnFocus = function() {}),
            (t.prototype.OnBlur = function() {}),
            i.b([a.observable], t.prototype, "m_bFocused", void 0),
            i.b([s.a], t.prototype, "OnMessage", null),
            i.b([s.a], t.prototype, "OnResizeEvent", null),
            i.b([s.a], t.prototype, "OnUnload", null),
            i.b([s.a], t.prototype, "OnFocusInternal", null),
            i.b([s.a], t.prototype, "OnBlurInternal", null),
            i.b([a.computed], t.prototype, "focused", null),
            t
          );
        })(),
        p = (function(t) {
          function e(e, n, o, i) {
            var r = t.call(this, e, o) || this;
            return r.SetSavedDimensionsKey(n), (r.m_bExpires = i), r;
          }
          return (
            i.c(e, t),
            (e.prototype.SetSavedDimensionsKey = function(t) {
              this.browser_info &&
              this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
                ? (this.m_strSavedDimensionsKey = "Overlay_" + t)
                : (this.m_strSavedDimensionsKey = t);
            }),
            (e.prototype.UpdateParamsBeforeShow = function(t) {
              return (
                !this.m_strSavedDimensionsKey ||
                t.bIgnoreSavedDimensions ||
                t.strRestoreDetails
                  ? t.strRestoreDetails &&
                    m.SetRestoreDetails(
                      this.m_strSavedDimensionsKey,
                      t.strRestoreDetails,
                      this.m_bExpires
                    )
                  : (t.strRestoreDetails = m.GetRestoreDetails(
                      this.m_strSavedDimensionsKey
                    )),
                t
              );
            }),
            (e.prototype.OnLoad = function() {
              var t = this;
              this.GetWindowRestoreDetails().then(function(e) {
                t.m_strInitialRestoreDetails = e;
              });
            }),
            (e.prototype.OnResize = function() {
              this.QueryAndStoreWindowPosition();
            }),
            (e.prototype.QueryAndStoreWindowPosition = function() {
              var t = this;
              this.m_strInitialRestoreDetails &&
                this.GetWindowRestoreDetails().then(function(e) {
                  var n = t.m_strInitialRestoreDetails == e;
                  t.m_popup &&
                    t.m_strSavedDimensionsKey &&
                    !n &&
                    (m.SetRestoreDetails(
                      t.m_strSavedDimensionsKey,
                      e,
                      t.m_bExpires
                    ),
                    (t.m_rgParams.strRestoreDetails = e));
                });
            }),
            (e.prototype.OnClose = function() {
              this.QueryAndStoreWindowPosition();
            }),
            i.b([s.a], e.prototype, "QueryAndStoreWindowPosition", null),
            e
          );
        })(u),
        l = (function() {
          function t() {
            var t = this;
            (this.m_bShuttingDown = !1),
              (this.m_mapPopups = new Map()),
              (this.m_rgShutdownCallbacks = []),
              (this.m_rgPopupCreatedCallbacks = []),
              (this.m_unCurrentAccountID = 0),
              (this.m_mapRestoreDetails = new Map()),
              (this.m_bSaveRequired = !1),
              Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
                .MOBILE_BUILD ||
                window.addEventListener("beforeunload", function(e) {
                  t.m_bShuttingDown = !0;
                  for (
                    var n = 0, o = t.m_rgShutdownCallbacks;
                    n < o.length;
                    n++
                  )
                    (0, o[n])();
                  var i = [];
                  t.m_mapPopups.forEach(function(t) {
                    t.BIsValid() && !t.BIsClosed() && i.push(t);
                  });
                  for (var r = 0, s = i; r < s.length; r++) s[r].Close();
                  t.m_bSaveRequired && t.SaveSavedDimensionStore(),
                    t.m_mapPopups.clear();
                });
          }
          return (
            (t.prototype.SetCurrentLoggedInAccountID = function(t) {
              (this.m_unCurrentAccountID = t),
                t
                  ? this.LoadSavedDimensionStore()
                  : this.ClearSavedDimensionStore();
            }),
            (t.prototype.AddShutdownCallback = function(t) {
              this.m_rgShutdownCallbacks.push(t);
            }),
            (t.prototype.AddPopupCreatedCallback = function(t) {
              this.m_rgPopupCreatedCallbacks.push(t);
            }),
            (t.prototype.AddTrackedPopup = function(t) {
              this.m_mapPopups.set(t.GetName(), t);
              for (
                var e = 0, n = this.m_rgPopupCreatedCallbacks;
                e < n.length;
                e++
              )
                (0, n[e])(t);
            }),
            (t.prototype.RemoveTrackedPopup = function(t) {
              this.m_mapPopups.delete(t.GetName());
            }),
            (t.prototype.GetExistingPopup = function(t) {
              return this.m_mapPopups.get(t);
            }),
            (t.prototype.GetPopups = function() {
              return this.m_mapPopups.values();
            }),
            (t.prototype.ClosePopupsOwnedByBrowser = function(t) {
              this.m_mapPopups.forEach(function(e) {
                e.browser_info &&
                  e.browser_info.m_nBrowserID == t.m_nBrowserID &&
                  e.browser_info.m_unPID == t.m_unPID &&
                  e.Close();
              });
            }),
            (t.CreatePopup = function(t, e) {
              var n = e.dimensions || {},
                o = n.width || 300,
                i = n.height || 300,
                r = e.title,
                s = "width=" + o + ",height=" + i;
              void 0 !== n.left && (s += ",left=" + n.left),
                void 0 !== n.top && (s += ",top=" + n.top),
                (s += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
              var a = "about:blank",
                c = [];
              c.push("createflags=" + e.eCreationFlags),
                e.minWidth && c.push("minwidth=" + e.minWidth),
                e.minHeight && c.push("minheight=" + e.minHeight),
                e.target_browser &&
                  (c.push("pid=" + e.target_browser.m_unPID),
                  c.push("browser=" + e.target_browser.m_nBrowserID),
                  e.availscreenwidth &&
                    e.availscreenheight &&
                    (c.push("screenavailwidth=" + e.availscreenwidth),
                    c.push("screenavailheight=" + e.availscreenheight))),
                e.strRestoreDetails &&
                  c.push("restoredetails=" + e.strRestoreDetails),
                c && (a += "?" + c.join("&"));
              var u = e.owner_window || window,
                p = u.open(a, t, s, !0);
              if (!p)
                return (
                  console.log(
                    "Failed to create popup.. browser popup blocker enabled?"
                  ),
                  {}
                );
              var l = "";
              e.html_class && (l = 'class="' + e.html_class + '"');
              var m = "";
              e.body_class && (m = 'class="' + e.body_class + '"');
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
                  _ = 0;
                _ < f.length;
                _++
              ) {
                var v = f[_];
                if ("stylesheet" == v.rel) {
                  for (
                    var b = p.document.createElement("link"), g = 0;
                    g < v.attributes.length;
                    g++
                  ) {
                    var y = v.attributes.item(g);
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
            (t.prototype.BShuttingDown = function() {
              return this.m_bShuttingDown;
            }),
            (t.prototype.GetLocalStorageKey = function() {
              return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
            }),
            (t.prototype.LoadSavedDimensionStore = function() {
              if (this.m_unCurrentAccountID) {
                var t = this.GetLocalStorageKey();
                this.m_mapRestoreDetails = new Map();
                var e = window.localStorage.getItem(t);
                if (e)
                  try {
                    var n = JSON.parse(e);
                    if (n)
                      for (var o = 0, i = n; o < i.length; o++) {
                        var r = i[o];
                        this.m_mapRestoreDetails.set(r[0], r[1]);
                      }
                  } catch (t) {}
              }
            }),
            (t.prototype.SaveSavedDimensionStore = function() {
              if (this.m_unCurrentAccountID && this.m_bSaveRequired) {
                var t = this.GetLocalStorageKey();
                window.localStorage.setItem(
                  t,
                  JSON.stringify(this.m_mapRestoreDetails)
                ),
                  (this.m_bSaveRequired = !1);
              }
            }),
            (t.prototype.ClearSavedDimensionStore = function() {
              this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
            }),
            (t.prototype.GetRestoreDetails = function(t) {
              if (!this.m_mapRestoreDetails.has(t)) return "";
              var e = this.m_mapRestoreDetails.get(t);
              return (
                (e.last_used = Date.now()),
                (this.m_bSaveRequired = !0),
                e.strRestoreDetails
              );
            }),
            (t.prototype.SetRestoreDetails = function(t, e, n) {
              if (t) {
                if (e) {
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
                    strRestoreDetails: e,
                    last_used: Date.now(),
                    bExpires: n
                  };
                  this.m_mapRestoreDetails.set(t, u);
                } else this.m_mapRestoreDetails.delete(t);
                (this.m_bSaveRequired = !0),
                  this.m_bShuttingDown && this.SaveSavedDimensionStore();
              }
            }),
            t
          );
        })(),
        m = new l();
    }
  },
  ["6+TJ"]
);

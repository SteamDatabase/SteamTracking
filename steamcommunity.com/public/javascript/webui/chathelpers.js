/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8408317";
(() => {
  var e,
    t,
    n,
    r,
    o,
    a = {
      35713: (e, t, n) => {
        "use strict";
        function r(e, t, n, r) {
          var o,
            a = arguments.length,
            i =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            i = Reflect.decorate(e, t, n, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (o = e[s]) &&
                (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
          return a > 3 && i && Object.defineProperty(t, n, i), i;
        }
        function o(e, t, n, r) {
          return new (n || (n = Promise))(function (o, a) {
            function i(e) {
              try {
                _(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                _(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function _(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, s);
            }
            _((r = r.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
        n(801);
        var a = n(87363),
          i = n.n(a),
          s = n(61533);
        function _(e) {
          if (!E() || !window.document.cookie) return null;
          let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        }
        function E() {
          return !!window.document;
        }
        const k = "webui_config";
        let l;
        function c() {
          let e = (function () {
            let e = "";
            for (let r = 0; r < 24; r++)
              e += ((t = 0),
              (n = 35),
              (t = Math.ceil(t)),
              (n = Math.floor(n)),
              Math.floor(Math.random() * (n - t + 1)) + t).toString(36);
            var t, n;
            return e;
          })();
          return (
            (function (e, t, n, r) {
              if (!E()) return;
              r || (r = "/");
              let o = "";
              if (void 0 !== n && n) {
                let e = new Date();
                e.setTime(e.getTime() + 864e5 * n),
                  (o = "; expires=" + e.toUTCString());
              }
              document.cookie =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(t) +
                o +
                ";path=" +
                r;
            })("sessionid", e, 0),
            e
          );
        }
        function u(e = k) {
          const t = {},
            n = d("config", e);
          n && (delete n.SESSIONID, Object.assign(h, n), (t.config = !0));
          const r = d("userinfo", e);
          r &&
            (Object.assign(m, r),
            (t.userConfig = !0),
            m.is_support &&
              (function () {
                let e = null;
                E() && (e = _(S));
                return Boolean(e && 1 === Number.parseInt(e));
              })() &&
              (m.is_support = !1));
          const o = d("broadcast", e);
          o && (Object.assign(y, o), (t.broadcastConfig = !0));
          const a = d("community", e);
          a && (Object.assign(g, a), (t.communityConfig = !0));
          const i = d("event", e);
          return i && (Object.assign(T, i), (t.eventConfig = !0)), t;
        }
        function d(e, t = k) {
          return p(e, t, !0);
        }
        function p(e, t = k, n) {
          let r;
          if (
            ((r =
              "string" == typeof t
                ? !{
                    NODE_ENV: "production",
                    STEAM_BUILD: "buildbot",
                    VALVE_BUILD: "false",
                  }.MOBILE_BUILD && document.getElementById(t)
                : t),
            r)
          )
            try {
              if (r.hasAttribute("data-" + e)) {
                return JSON.parse(r.getAttribute("data-" + e));
              }
              return null;
            } catch (e) {
              console.error(
                "Failed to parse config for " +
                  m.steamid +
                  " (" +
                  window.location.href +
                  ")",
                e,
              );
            }
          else n && console.error("Missing config element #", t);
        }
        const S = "presentation_mode";
        const h = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
          SUPPORTED_LANGUAGES: [],
          COUNTRY: "",
          AVATAR_BASE_URL: "",
          MEDIA_CDN_COMMUNITY_URL: "",
          MEDIA_CDN_URL: "",
          CLAN_CDN_ASSET_URL: "",
          COMMUNITY_CDN_URL: "",
          COMMUNITY_CDN_ASSET_URL: "",
          BASE_URL_SHARED_CDN: "",
          STORE_CDN_URL: "",
          PUBLIC_SHARED_URL: "",
          COMMUNITY_BASE_URL: "",
          CHAT_BASE_URL: "",
          STORE_BASE_URL: "",
          STORE_CHECKOUT_BASE_URL: "",
          LOGIN_BASE_URL: "",
          SUPPORT_BASE_URL: "",
          STORE_ICON_BASE_URL: "",
          IMG_URL: "",
          STEAMTV_BASE_URL: "",
          HELP_BASE_URL: "",
          PARTNER_BASE_URL: "",
          STATS_BASE_URL: "",
          INTERNAL_STATS_BASE_URL: "",
          BASE_URL_STORE_CDN_ASSETS: "",
          IN_CLIENT: !1,
          USE_POPUPS: !1,
          IN_MOBILE: !1,
          IN_MOBILE_WEBVIEW: !1,
          IN_TENFOOT: !1,
          PLATFORM: "",
          SNR: "",
          LAUNCHER_TYPE: 0,
          EREALM: 0,
          IN_CHROMEOS: !1,
          TESLA: !1,
          LOCAL_HOSTNAME: "",
          WEBAPI_BASE_URL: "",
          TOKEN_URL: "",
          BUILD_TIMESTAMP: 0,
          PAGE_TIMESTAMP: 0,
          FROM_WEB: !1,
          WEBSITE_ID: "Unknown",
          get SESSIONID() {
            return (function () {
              if (!E()) return l || (l = c()), l;
              let e = _("sessionid");
              return e || (e = c()), e;
            })();
          },
          FRIENDSUI_BETA: !1,
          STEAM_TV: !1,
          DEV_MODE: !1,
          IN_STEAMUI: !1,
          IN_GAMEPADUI: !1,
          IN_STEAMUI_SHARED_CONTEXT: !1,
          DECK_DISPLAY_MODE: !1,
          ON_DECK: !1,
          ON_STEAMOS: !1,
          IN_GAMESCOPE: !1,
          IN_LOGIN: !1,
          IN_LOGIN_REFRESH: !1,
          USE_LONGEST_LOC_STRING: !1,
          SILENT_STARTUP: !1,
        };
        const m = {
            logged_in: !1,
            steamid: "",
            accountid: 0,
            account_name: "",
            token: void 0,
            token_use_id: void 0,
            webapi_token: "",
            authwgtoken: "",
            is_support: !1,
            is_limited: !1,
            is_partner_member: !1,
            short_url: "",
            country_code: "",
          },
          y = { steamid: "", clanid: 0, listid: 0 },
          g = {
            CLANSTEAMID: "",
            CLANACCOUNTID: 0,
            APPID: 0,
            VANITY_ID: "",
            IS_CREATOR_HOME: !1,
            IS_CURATOR: !1,
            IS_OGG: !1,
            CAN_UPLOAD_IMAGES: !1,
            APP_NAME: "",
            HEADER_IMAGE: "",
            HAS_ADULT_CONTENT: !1,
            HAS_ADULT_CONTENT_SEX: !1,
            HAS_ADULT_CONTENT_VIOLENCE: !1,
            IS_VALVE_GROUP: !1,
            IS_ALLOWED_SC: !1,
          },
          T = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
        i().createContext({});
        var C;
        !(function (e) {
          (e[(e.k_EResultOK = 1)] = "k_EResultOK"),
            (e[(e.k_EResultFail = 2)] = "k_EResultFail"),
            (e[(e.k_EResultNoConnection = 3)] = "k_EResultNoConnection"),
            (e[(e.k_EResultInvalidPassword = 5)] = "k_EResultInvalidPassword"),
            (e[(e.k_EResultLoggedInElsewhere = 6)] =
              "k_EResultLoggedInElsewhere"),
            (e[(e.k_EResultInvalidProtocolVer = 7)] =
              "k_EResultInvalidProtocolVer"),
            (e[(e.k_EResultInvalidParam = 8)] = "k_EResultInvalidParam"),
            (e[(e.k_EResultFileNotFound = 9)] = "k_EResultFileNotFound"),
            (e[(e.k_EResultBusy = 10)] = "k_EResultBusy"),
            (e[(e.k_EResultInvalidState = 11)] = "k_EResultInvalidState"),
            (e[(e.k_EResultInvalidName = 12)] = "k_EResultInvalidName"),
            (e[(e.k_EResultInvalidEmail = 13)] = "k_EResultInvalidEmail"),
            (e[(e.k_EResultDuplicateName = 14)] = "k_EResultDuplicateName"),
            (e[(e.k_EResultAccessDenied = 15)] = "k_EResultAccessDenied"),
            (e[(e.k_EResultTimeout = 16)] = "k_EResultTimeout"),
            (e[(e.k_EResultBanned = 17)] = "k_EResultBanned"),
            (e[(e.k_EResultAccountNotFound = 18)] = "k_EResultAccountNotFound"),
            (e[(e.k_EResultInvalidSteamID = 19)] = "k_EResultInvalidSteamID"),
            (e[(e.k_EResultServiceUnavailable = 20)] =
              "k_EResultServiceUnavailable"),
            (e[(e.k_EResultNotLoggedOn = 21)] = "k_EResultNotLoggedOn"),
            (e[(e.k_EResultPending = 22)] = "k_EResultPending"),
            (e[(e.k_EResultEncryptionFailure = 23)] =
              "k_EResultEncryptionFailure"),
            (e[(e.k_EResultInsufficientPrivilege = 24)] =
              "k_EResultInsufficientPrivilege"),
            (e[(e.k_EResultLimitExceeded = 25)] = "k_EResultLimitExceeded"),
            (e[(e.k_EResultRevoked = 26)] = "k_EResultRevoked"),
            (e[(e.k_EResultExpired = 27)] = "k_EResultExpired"),
            (e[(e.k_EResultAlreadyRedeemed = 28)] = "k_EResultAlreadyRedeemed"),
            (e[(e.k_EResultDuplicateRequest = 29)] =
              "k_EResultDuplicateRequest"),
            (e[(e.k_EResultAlreadyOwned = 30)] = "k_EResultAlreadyOwned"),
            (e[(e.k_EResultIPNotFound = 31)] = "k_EResultIPNotFound"),
            (e[(e.k_EResultPersistFailed = 32)] = "k_EResultPersistFailed"),
            (e[(e.k_EResultLockingFailed = 33)] = "k_EResultLockingFailed"),
            (e[(e.k_EResultLogonSessionReplaced = 34)] =
              "k_EResultLogonSessionReplaced"),
            (e[(e.k_EResultConnectFailed = 35)] = "k_EResultConnectFailed"),
            (e[(e.k_EResultHandshakeFailed = 36)] = "k_EResultHandshakeFailed"),
            (e[(e.k_EResultIOFailure = 37)] = "k_EResultIOFailure"),
            (e[(e.k_EResultRemoteDisconnect = 38)] =
              "k_EResultRemoteDisconnect"),
            (e[(e.k_EResultShoppingCartNotFound = 39)] =
              "k_EResultShoppingCartNotFound"),
            (e[(e.k_EResultBlocked = 40)] = "k_EResultBlocked"),
            (e[(e.k_EResultIgnored = 41)] = "k_EResultIgnored"),
            (e[(e.k_EResultNoMatch = 42)] = "k_EResultNoMatch"),
            (e[(e.k_EResultAccountDisabled = 43)] = "k_EResultAccountDisabled"),
            (e[(e.k_EResultServiceReadOnly = 44)] = "k_EResultServiceReadOnly"),
            (e[(e.k_EResultAccountNotFeatured = 45)] =
              "k_EResultAccountNotFeatured"),
            (e[(e.k_EResultAdministratorOK = 46)] = "k_EResultAdministratorOK"),
            (e[(e.k_EResultContentVersion = 47)] = "k_EResultContentVersion"),
            (e[(e.k_EResultTryAnotherCM = 48)] = "k_EResultTryAnotherCM"),
            (e[(e.k_EResultPasswordRequiredToKickSession = 49)] =
              "k_EResultPasswordRequiredToKickSession"),
            (e[(e.k_EResultAlreadyLoggedInElsewhere = 50)] =
              "k_EResultAlreadyLoggedInElsewhere"),
            (e[(e.k_EResultSuspended = 51)] = "k_EResultSuspended"),
            (e[(e.k_EResultCancelled = 52)] = "k_EResultCancelled"),
            (e[(e.k_EResultDataCorruption = 53)] = "k_EResultDataCorruption"),
            (e[(e.k_EResultDiskFull = 54)] = "k_EResultDiskFull"),
            (e[(e.k_EResultRemoteCallFailed = 55)] =
              "k_EResultRemoteCallFailed"),
            (e[(e.k_EResultPasswordUnset = 56)] = "k_EResultPasswordUnset"),
            (e[(e.k_EResultExternalAccountUnlinked = 57)] =
              "k_EResultExternalAccountUnlinked"),
            (e[(e.k_EResultPSNTicketInvalid = 58)] =
              "k_EResultPSNTicketInvalid"),
            (e[(e.k_EResultExternalAccountAlreadyLinked = 59)] =
              "k_EResultExternalAccountAlreadyLinked"),
            (e[(e.k_EResultRemoteFileConflict = 60)] =
              "k_EResultRemoteFileConflict"),
            (e[(e.k_EResultIllegalPassword = 61)] = "k_EResultIllegalPassword"),
            (e[(e.k_EResultSameAsPreviousValue = 62)] =
              "k_EResultSameAsPreviousValue"),
            (e[(e.k_EResultAccountLogonDenied = 63)] =
              "k_EResultAccountLogonDenied"),
            (e[(e.k_EResultCannotUseOldPassword = 64)] =
              "k_EResultCannotUseOldPassword"),
            (e[(e.k_EResultInvalidLoginAuthCode = 65)] =
              "k_EResultInvalidLoginAuthCode"),
            (e[(e.k_EResultAccountLogonDeniedNoMail = 66)] =
              "k_EResultAccountLogonDeniedNoMail"),
            (e[(e.k_EResultHardwareNotCapableOfIPT = 67)] =
              "k_EResultHardwareNotCapableOfIPT"),
            (e[(e.k_EResultIPTInitError = 68)] = "k_EResultIPTInitError"),
            (e[(e.k_EResultParentalControlRestricted = 69)] =
              "k_EResultParentalControlRestricted"),
            (e[(e.k_EResultFacebookQueryError = 70)] =
              "k_EResultFacebookQueryError"),
            (e[(e.k_EResultExpiredLoginAuthCode = 71)] =
              "k_EResultExpiredLoginAuthCode"),
            (e[(e.k_EResultIPLoginRestrictionFailed = 72)] =
              "k_EResultIPLoginRestrictionFailed"),
            (e[(e.k_EResultAccountLockedDown = 73)] =
              "k_EResultAccountLockedDown"),
            (e[(e.k_EResultAccountLogonDeniedVerifiedEmailRequired = 74)] =
              "k_EResultAccountLogonDeniedVerifiedEmailRequired"),
            (e[(e.k_EResultNoMatchingURL = 75)] = "k_EResultNoMatchingURL"),
            (e[(e.k_EResultBadResponse = 76)] = "k_EResultBadResponse"),
            (e[(e.k_EResultRequirePasswordReEntry = 77)] =
              "k_EResultRequirePasswordReEntry"),
            (e[(e.k_EResultValueOutOfRange = 78)] = "k_EResultValueOutOfRange"),
            (e[(e.k_EResultUnexpectedError = 79)] = "k_EResultUnexpectedError"),
            (e[(e.k_EResultDisabled = 80)] = "k_EResultDisabled"),
            (e[(e.k_EResultInvalidCEGSubmission = 81)] =
              "k_EResultInvalidCEGSubmission"),
            (e[(e.k_EResultRestrictedDevice = 82)] =
              "k_EResultRestrictedDevice"),
            (e[(e.k_EResultRegionLocked = 83)] = "k_EResultRegionLocked"),
            (e[(e.k_EResultRateLimitExceeded = 84)] =
              "k_EResultRateLimitExceeded"),
            (e[(e.k_EResultAccountLoginDeniedNeedTwoFactor = 85)] =
              "k_EResultAccountLoginDeniedNeedTwoFactor"),
            (e[(e.k_EResultItemDeleted = 86)] = "k_EResultItemDeleted"),
            (e[(e.k_EResultAccountLoginDeniedThrottle = 87)] =
              "k_EResultAccountLoginDeniedThrottle"),
            (e[(e.k_EResultTwoFactorCodeMismatch = 88)] =
              "k_EResultTwoFactorCodeMismatch"),
            (e[(e.k_EResultTwoFactorActivationCodeMismatch = 89)] =
              "k_EResultTwoFactorActivationCodeMismatch"),
            (e[(e.k_EResultAccountAssociatedToMultiplePartners = 90)] =
              "k_EResultAccountAssociatedToMultiplePartners"),
            (e[(e.k_EResultNotModified = 91)] = "k_EResultNotModified"),
            (e[(e.k_EResultNoMobileDevice = 92)] = "k_EResultNoMobileDevice"),
            (e[(e.k_EResultTimeNotSynced = 93)] = "k_EResultTimeNotSynced"),
            (e[(e.k_EResultSmsCodeFailed = 94)] = "k_EResultSmsCodeFailed"),
            (e[(e.k_EResultAccountLimitExceeded = 95)] =
              "k_EResultAccountLimitExceeded"),
            (e[(e.k_EResultAccountActivityLimitExceeded = 96)] =
              "k_EResultAccountActivityLimitExceeded"),
            (e[(e.k_EResultPhoneActivityLimitExceeded = 97)] =
              "k_EResultPhoneActivityLimitExceeded"),
            (e[(e.k_EResultRefundToWallet = 98)] = "k_EResultRefundToWallet"),
            (e[(e.k_EResultEmailSendFailure = 99)] =
              "k_EResultEmailSendFailure"),
            (e[(e.k_EResultNotSettled = 100)] = "k_EResultNotSettled"),
            (e[(e.k_EResultNeedCaptcha = 101)] = "k_EResultNeedCaptcha"),
            (e[(e.k_EResultGSLTDenied = 102)] = "k_EResultGSLTDenied"),
            (e[(e.k_EResultGSOwnerDenied = 103)] = "k_EResultGSOwnerDenied"),
            (e[(e.k_EResultInvalidItemType = 104)] =
              "k_EResultInvalidItemType"),
            (e[(e.k_EResultIPBanned = 105)] = "k_EResultIPBanned"),
            (e[(e.k_EResultGSLTExpired = 106)] = "k_EResultGSLTExpired"),
            (e[(e.k_EResultInsufficientFunds = 107)] =
              "k_EResultInsufficientFunds"),
            (e[(e.k_EResultTooManyPending = 108)] = "k_EResultTooManyPending"),
            (e[(e.k_EResultNoSiteLicensesFound = 109)] =
              "k_EResultNoSiteLicensesFound"),
            (e[(e.k_EResultWGNetworkSendExceeded = 110)] =
              "k_EResultWGNetworkSendExceeded"),
            (e[(e.k_EResultAccountNotFriends = 111)] =
              "k_EResultAccountNotFriends"),
            (e[(e.k_EResultLimitedUserAccount = 112)] =
              "k_EResultLimitedUserAccount"),
            (e[(e.k_EResultCantRemoveItem = 113)] = "k_EResultCantRemoveItem"),
            (e[(e.k_EResultAccountDeleted = 114)] = "k_EResultAccountDeleted"),
            (e[(e.k_EResultExistingUserCancelledLicense = 115)] =
              "k_EResultExistingUserCancelledLicense"),
            (e[(e.k_EResultCommunityCooldown = 116)] =
              "k_EResultCommunityCooldown"),
            (e[(e.k_EResultNoLauncherSpecified = 117)] =
              "k_EResultNoLauncherSpecified"),
            (e[(e.k_EResultMustAgreeToSSA = 118)] = "k_EResultMustAgreeToSSA"),
            (e[(e.k_EResultLauncherMigrated = 119)] =
              "k_EResultLauncherMigrated"),
            (e[(e.k_EResultSteamRealmMismatch = 120)] =
              "k_EResultSteamRealmMismatch"),
            (e[(e.k_EResultInvalidSignature = 121)] =
              "k_EResultInvalidSignature"),
            (e[(e.k_EResultParseFailure = 122)] = "k_EResultParseFailure"),
            (e[(e.k_EResultNoVerifiedPhone = 123)] =
              "k_EResultNoVerifiedPhone"),
            (e[(e.k_EResultInsufficientBattery = 124)] =
              "k_EResultInsufficientBattery"),
            (e[(e.k_EResultChargerRequired = 125)] =
              "k_EResultChargerRequired"),
            (e[(e.k_EResultCachedCredentialInvalid = 126)] =
              "k_EResultCachedCredentialInvalid"),
            (e[(e.K_EResultPhoneNumberIsVOIP = 127)] =
              "K_EResultPhoneNumberIsVOIP");
        })(C || (C = {}));
        let v = { success: !0, result: C.k_EResultOK };
        class R {
          constructor() {
            (this.m_connection = new I()),
              (this.m_bAllowAccountMismatch = !1),
              (this.m_mapCacheSubscribedApp = new Map());
          }
          FailureResult(e = C.k_EResultFail) {
            let t = { success: !1, result: e };
            return (
              this.m_connection &&
                !this.m_connection.browser_supported &&
                (t.browser_unsupported = !0),
              this.m_connection &&
                !this.m_connection.connected_to_client &&
                (t.connect_failed = !0),
              e == C.k_EResultInvalidProtocolVer && (t.call_unsupported = !0),
              t
            );
          }
          SetAllowAccountMismatch(e) {
            this.m_bAllowAccountMismatch = e;
          }
          BClientConnected() {
            return this.m_connection.Connect().then(
              () => v,
              () => this.FailureResult(),
            );
          }
          BClientSupportsMessage(e) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
              ) &&
              -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
            );
          }
          OpenFriendChatDialog(e) {
            let t = { message: "ShowFriendChatDialog", steamid: e };
            return this.GenericEResultCall(t);
          }
          OpenChatRoomGroupDialog(e, t) {
            let n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
            return t && (n.chat_room_id = t), this.GenericEResultCall(n);
          }
          ShowChatRoomGroupInvite(e) {
            let t = { message: "ShowChatRoomGroupInvite", invite_code: e };
            return this.GenericEResultCall(t);
          }
          BIsSubscribedApp(e) {
            if (this.m_mapCacheSubscribedApp.has(e))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
            let t = { message: "IsSubscribedApp", appid: e };
            return this.GenericEResultCall(t).then((t) => {
              if (t.connect_failed) return;
              let n = t.result == C.k_EResultOK;
              return this.m_mapCacheSubscribedApp.set(e, n), n;
            });
          }
          OpenFriendsDialog() {
            return this.GenericEResultCall({ message: "OpenFriendsDialog" });
          }
          BClientAccountMatches() {
            return (
              !m.logged_in ||
              m.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }
          GenericEResultCall(e) {
            return this.m_connection
              .Connect()
              .then(() =>
                this.m_bAllowAccountMismatch || this.BClientAccountMatches()
                  ? this.m_connection
                      .SendMsgAndAwaitResponse(e)
                      .then((e) =>
                        e.success === C.k_EResultOK
                          ? v
                          : this.FailureResult(e.success),
                      )
                  : {
                      success: !1,
                      result: C.k_EResultInvalidSteamID,
                      account_mismatch: !0,
                    },
              )
              .catch(() => this.FailureResult());
          }
        }
        class I {
          constructor() {
            (this.m_mapWaitingCallbacks = new Map()),
              (this.m_iCallSeq = 1),
              (this.m_bReady = !1),
              (this.m_bClientConnectionFailed = !1),
              (this.m_bSecurityException = !1),
              (this.m_ClientInfo = {
                ulVersion: "",
                bFriendsUIEnabled: !1,
                unAccountID: 0,
                rgSupportedMessages: [],
              });
          }
          get ClientInfo() {
            return this.m_ClientInfo;
          }
          get ready() {
            return this.m_bReady;
          }
          get browser_supported() {
            return !this.m_bSecurityException;
          }
          get connected_to_client() {
            return this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
          }
          SendMsgAndAwaitResponse(e) {
            return new Promise((t, n) => {
              let r = this.m_iCallSeq++;
              this.BSendMsg(e, r)
                ? this.m_mapWaitingCallbacks.set(r, {
                    iSeq: r,
                    fnCallback: t,
                    fnError: n,
                  })
                : n();
            });
          }
          BSendMsg(e, t) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            let n = Object.assign({}, e, {
              universe: h.EUNIVERSE,
              accountid: m.accountid,
            });
            void 0 !== t && (n.sequenceid = t);
            try {
              return this.m_socket.send(JSON.stringify(n)), !0;
            } catch (e) {
              return !1;
            }
          }
          OnSocketMessage(e) {
            try {
              let t = JSON.parse(e.data);
              if (t.sequenceid) {
                let e = this.m_mapWaitingCallbacks.get(t.sequenceid);
                if (e)
                  return (
                    this.m_mapWaitingCallbacks.delete(t.sequenceid),
                    void e.fnCallback(t)
                  );
              }
            } catch (e) {
              console.error("exception parsing response", e);
            }
          }
          Connect() {
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            let e = new Promise((e, t) => {
              try {
                this.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/",
                );
              } catch (e) {
                return (this.m_bSecurityException = !0), void t(e);
              }
              (this.m_socket.onerror = (e) => {
                t();
              }),
                (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
                (this.m_socket.onopen = () => {
                  this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then((n) => {
                      n.success == C.k_EResultOK
                        ? ((this.m_ClientInfo.ulVersion = n.clientversion),
                          (this.m_ClientInfo.bFriendsUIEnabled = !!n.friendsui),
                          (this.m_ClientInfo.unAccountID = n.accountid),
                          n.supported_messages &&
                            (this.m_ClientInfo.rgSupportedMessages =
                              n.supported_messages),
                          e())
                        : t();
                    })
                    .catch(t);
                });
            });
            return (
              (this.m_promiseConnect = e),
              this.m_promiseConnect
                .then(() => {
                  (this.m_bReady = !0), (this.m_promiseConnect = void 0);
                })
                .catch(() => {
                  (this.m_bClientConnectionFailed = !0),
                    (this.m_promiseConnect = void 0);
                }),
              this.m_promiseConnect
            );
          }
        }
        let L = new R();
        window.ClientConnectionAPI = L;
        n(9669);
        var f, A, P, b, M, F, D, N, U, G, w, O, j, B;
        !(function (e) {
          (e[(e.k_ETransportOK = 1)] = "k_ETransportOK"),
            (e[(e.k_ETransportRequestNotSent = 2)] =
              "k_ETransportRequestNotSent"),
            (e[(e.k_ETransportResponseNotReceived = 3)] =
              "k_ETransportResponseNotReceived"),
            (e[(e.k_ETransportIncorrectParameter = 4)] =
              "k_ETransportIncorrectParameter"),
            (e[(e.k_ETransportMethodNotFound = 100)] =
              "k_ETransportMethodNotFound"),
            (e[(e.k_ETransportCallMismatch = 101)] =
              "k_ETransportCallMismatch"),
            (e[(e.k_ETransportSetupError = 102)] = "k_ETransportSetupError"),
            (e[(e.k_ETransportInternalError = 103)] =
              "k_ETransportInternalError"),
            (e[(e.k_ETransportNotSupported = 104)] =
              "k_ETransportNotSupported");
        })(f || (f = {})),
          (function (e) {
            (e[(e.k_EAppErrorNone = 0)] = "k_EAppErrorNone"),
              (e[(e.k_EAppErrorUnspecified = 1)] = "k_EAppErrorUnspecified"),
              (e[(e.k_EAppErrorPaused = 2)] = "k_EAppErrorPaused"),
              (e[(e.k_EAppErrorCanceled = 3)] = "k_EAppErrorCanceled"),
              (e[(e.k_EAppErrorSuspended = 4)] = "k_EAppErrorSuspended"),
              (e[(e.k_EAppErrorNoSubscription = 5)] =
                "k_EAppErrorNoSubscription"),
              (e[(e.k_EAppErrorNoConnection = 6)] = "k_EAppErrorNoConnection"),
              (e[(e.k_EAppErrorTimeout = 7)] = "k_EAppErrorTimeout"),
              (e[(e.k_EAppErrorMissingKey = 8)] = "k_EAppErrorMissingKey"),
              (e[(e.k_EAppErrorMissingConfig = 9)] =
                "k_EAppErrorMissingConfig"),
              (e[(e.k_EAppErrorDiskReadFailure = 10)] =
                "k_EAppErrorDiskReadFailure"),
              (e[(e.k_EAppErrorDiskWriteFailure = 11)] =
                "k_EAppErrorDiskWriteFailure"),
              (e[(e.k_EAppErrorNotEnoughDiskSpace = 12)] =
                "k_EAppErrorNotEnoughDiskSpace"),
              (e[(e.k_EAppErrorCorruptGameFiles = 13)] =
                "k_EAppErrorCorruptGameFiles"),
              (e[(e.k_EAppErrorWaitingForNextDisk = 14)] =
                "k_EAppErrorWaitingForNextDisk"),
              (e[(e.k_EAppErrorInvalidInstallPath = 15)] =
                "k_EAppErrorInvalidInstallPath"),
              (e[(e.k_EAppErrorAppRunning = 16)] = "k_EAppErrorAppRunning"),
              (e[(e.k_EAppErrorDependencyFailure = 17)] =
                "k_EAppErrorDependencyFailure"),
              (e[(e.k_EAppErrorNotInstalled = 18)] = "k_EAppErrorNotInstalled"),
              (e[(e.k_EAppErrorUpdateRequired = 19)] =
                "k_EAppErrorUpdateRequired"),
              (e[(e.k_EAppErrorBusy = 20)] = "k_EAppErrorBusy"),
              (e[(e.k_EAppErrorNoDownloadSources = 21)] =
                "k_EAppErrorNoDownloadSources"),
              (e[(e.k_EAppErrorInvalidAppConfig = 22)] =
                "k_EAppErrorInvalidAppConfig"),
              (e[(e.k_EAppErrorInvalidDepotConfig = 23)] =
                "k_EAppErrorInvalidDepotConfig"),
              (e[(e.k_EAppErrorMissingManifest = 24)] =
                "k_EAppErrorMissingManifest"),
              (e[(e.k_EAppErrorNotReleased = 25)] = "k_EAppErrorNotReleased"),
              (e[(e.k_EAppErrorRegionRestricted = 26)] =
                "k_EAppErrorRegionRestricted"),
              (e[(e.k_EAppErrorCorruptDepotCache = 27)] =
                "k_EAppErrorCorruptDepotCache"),
              (e[(e.k_EAppErrorMissingExecutable = 28)] =
                "k_EAppErrorMissingExecutable"),
              (e[(e.k_EAppErrorInvalidPlatform = 29)] =
                "k_EAppErrorInvalidPlatform"),
              (e[(e.k_EAppErrorInvalidFileSystem = 30)] =
                "k_EAppErrorInvalidFileSystem"),
              (e[(e.k_EAppErrorCorruptUpdateFiles = 31)] =
                "k_EAppErrorCorruptUpdateFiles"),
              (e[(e.k_EAppErrorDownloadDisabled = 32)] =
                "k_EAppErrorDownloadDisabled"),
              (e[(e.k_EAppErrorSharedLibraryLocked = 33)] =
                "k_EAppErrorSharedLibraryLocked"),
              (e[(e.k_EAppErrorPendingLicense = 34)] =
                "k_EAppErrorPendingLicense"),
              (e[(e.k_EAppErrorOtherSessionPlaying = 35)] =
                "k_EAppErrorOtherSessionPlaying"),
              (e[(e.k_EAppErrorCorruptDownload = 36)] =
                "k_EAppErrorCorruptDownload"),
              (e[(e.k_EAppErrorCorruptDisk = 37)] = "k_EAppErrorCorruptDisk"),
              (e[(e.k_EAppErrorFilePermissions = 38)] =
                "k_EAppErrorFilePermissions"),
              (e[(e.k_EAppErrorFileLocked = 39)] = "k_EAppErrorFileLocked"),
              (e[(e.k_EAppErrorMissingContent = 40)] =
                "k_EAppErrorMissingContent"),
              (e[(e.k_EAppErrorRequires64BitOS = 41)] =
                "k_EAppErrorRequires64BitOS"),
              (e[(e.k_EAppErrorMissingUpdateFiles = 42)] =
                "k_EAppErrorMissingUpdateFiles"),
              (e[(e.k_EAppErrorNotEnoughDiskQuota = 43)] =
                "k_EAppErrorNotEnoughDiskQuota"),
              (e[(e.k_EAppErrorLockedSiteLicense = 44)] =
                "k_EAppErrorLockedSiteLicense"),
              (e[(e.k_EAppErrorParentalBlocked = 45)] =
                "k_EAppErrorParentalBlocked"),
              (e[(e.k_EAppErrorSpawnProcess = 46)] = "k_EAppErrorSpawnProcess"),
              (e[(e.k_EAppErrorClientOutOfDate = 47)] =
                "k_EAppErrorClientOutOfDate"),
              (e[(e.k_EAppErrorPlaytimeExceeded = 48)] =
                "k_EAppErrorPlaytimeExceeded"),
              (e[(e.k_EAppErrorCorruptFileSignature = 49)] =
                "k_EAppErrorCorruptFileSignature"),
              (e[(e.k_EAppErrorMissingGameFiles = 50)] =
                "k_EAppErrorMissingGameFiles"),
              (e[(e.k_EAppErrorCompatToolFailed = 51)] =
                "k_EAppErrorCompatToolFailed"),
              (e[(e.k_EAppErrorRemovedInstallPath = 52)] =
                "k_EAppErrorRemovedInstallPath"),
              (e[(e.k_EAppErrorInvalidBackupPath = 53)] =
                "k_EAppErrorInvalidBackupPath"),
              (e[(e.k_EAppErrorInvalidPasscode = 54)] =
                "k_EAppErrorInvalidPasscode"),
              (e[(e.k_EAppErrorSelfUpdating = 55)] = "k_EAppErrorSelfUpdating"),
              (e[(e.k_EAppErrorParentalPlaytimeExceeded = 56)] =
                "k_EAppErrorParentalPlaytimeExceeded"),
              (e[(e.k_EAppErrorMax = 57)] = "k_EAppErrorMax");
          })(A || (A = {})),
          (function (e) {
            (e[(e.k_EAvatarFriendStateOffline = 0)] =
              "k_EAvatarFriendStateOffline"),
              (e[(e.k_EAvatarFriendStateOnline = 1)] =
                "k_EAvatarFriendStateOnline"),
              (e[(e.k_EAvatarFriendStateInGame = 2)] =
                "k_EAvatarFriendStateInGame");
          })(P || (P = {})),
          (function (e) {
            (e[(e.k_EScreenshot = 0)] = "k_EScreenshot"),
              (e[(e.k_ETradingCard = 1)] = "k_ETradingCard"),
              (e[(e.k_EAchievement = 2)] = "k_EAchievement");
          })(b || (b = {})),
          (function (e) {
            (e[(e.k_EPersonaStateOffline = 0)] = "k_EPersonaStateOffline"),
              (e[(e.k_EPersonaStateOnline = 1)] = "k_EPersonaStateOnline"),
              (e[(e.k_EPersonaStateBusy = 2)] = "k_EPersonaStateBusy"),
              (e[(e.k_EPersonaStateAway = 3)] = "k_EPersonaStateAway"),
              (e[(e.k_EPersonaStateSnooze = 4)] = "k_EPersonaStateSnooze"),
              (e[(e.k_EPersonaStateLookingToTrade = 5)] =
                "k_EPersonaStateLookingToTrade"),
              (e[(e.k_EPersonaStateLookingToPlay = 6)] =
                "k_EPersonaStateLookingToPlay"),
              (e[(e.k_EPersonaStateInvisible = 7)] =
                "k_EPersonaStateInvisible"),
              (e[(e.k_EPersonaStateMax = 8)] = "k_EPersonaStateMax");
          })(M || (M = {})),
          (function (e) {
            (e[(e.k_EWorkshopFileTypeInvalid = -1)] =
              "k_EWorkshopFileTypeInvalid"),
              (e[(e.k_EWorkshopFileTypeCommunity = 0)] =
                "k_EWorkshopFileTypeCommunity"),
              (e[(e.k_EWorkshopFileTypeMicrotransaction = 1)] =
                "k_EWorkshopFileTypeMicrotransaction"),
              (e[(e.k_EWorkshopFileTypeCollection = 2)] =
                "k_EWorkshopFileTypeCollection"),
              (e[(e.k_EWorkshopFileTypeArt = 3)] = "k_EWorkshopFileTypeArt"),
              (e[(e.k_EWorkshopFileTypeVideo = 4)] =
                "k_EWorkshopFileTypeVideo"),
              (e[(e.k_EWorkshopFileTypeScreenshot = 5)] =
                "k_EWorkshopFileTypeScreenshot"),
              (e[(e.k_EWorkshopFileTypeGame = 6)] = "k_EWorkshopFileTypeGame"),
              (e[(e.k_EWorkshopFileTypeSoftware = 7)] =
                "k_EWorkshopFileTypeSoftware"),
              (e[(e.k_EWorkshopFileTypeConcept = 8)] =
                "k_EWorkshopFileTypeConcept"),
              (e[(e.k_EWorkshopFileTypeWebGuide = 9)] =
                "k_EWorkshopFileTypeWebGuide"),
              (e[(e.k_EWorkshopFileTypeIntegratedGuide = 10)] =
                "k_EWorkshopFileTypeIntegratedGuide"),
              (e[(e.k_EWorkshopFileTypeMerch = 11)] =
                "k_EWorkshopFileTypeMerch"),
              (e[(e.k_EWorkshopFileTypeControllerBinding = 12)] =
                "k_EWorkshopFileTypeControllerBinding"),
              (e[(e.k_EWorkshopFileTypeSteamworksAccessInvite = 13)] =
                "k_EWorkshopFileTypeSteamworksAccessInvite"),
              (e[(e.k_EWorkshopFileTypeSteamVideo = 14)] =
                "k_EWorkshopFileTypeSteamVideo"),
              (e[(e.k_EWorkshopFileTypeGameManagedItem = 15)] =
                "k_EWorkshopFileTypeGameManagedItem"),
              (e[(e.k_EWorkshopFileTypeFirst = 0)] =
                "k_EWorkshopFileTypeFirst"),
              (e[(e.k_EWorkshopFileTypeMax = 16)] = "k_EWorkshopFileTypeMax");
          })(F || (F = {})),
          (function (e) {
            (e[(e.k_ELoginState_None = 0)] = "k_ELoginState_None"),
              (e[(e.k_ELoginState_WelcomeDialog = 1)] =
                "k_ELoginState_WelcomeDialog"),
              (e[(e.k_ELoginState_WaitingForCreateUser = 2)] =
                "k_ELoginState_WaitingForCreateUser"),
              (e[(e.k_ELoginState_WaitingForCredentials = 3)] =
                "k_ELoginState_WaitingForCredentials"),
              (e[(e.k_ELoginState_WaitingForNetwork = 4)] =
                "k_ELoginState_WaitingForNetwork"),
              (e[(e.k_ELoginState_WaitingForServerResponse = 5)] =
                "k_ELoginState_WaitingForServerResponse"),
              (e[(e.k_ELoginState_WaitingForLibraryReady = 6)] =
                "k_ELoginState_WaitingForLibraryReady"),
              (e[(e.k_ELoginState_Success = 7)] = "k_ELoginState_Success"),
              (e[(e.k_ELoginState_Quit = 8)] = "k_ELoginState_Quit");
          })(D || (D = {})),
          (function (e) {
            (e[(e.k_EProgressType_None = 0)] = "k_EProgressType_None"),
              (e[(e.k_EProgressType_UpdatingSteamInformation = 1)] =
                "k_EProgressType_UpdatingSteamInformation"),
              (e[(e.k_EProgressType_UpdatingUserConfiguration = 2)] =
                "k_EProgressType_UpdatingUserConfiguration"),
              (e[(e.k_EProgressType_LoggingIn = 3)] =
                "k_EProgressType_LoggingIn");
          })(N || (N = {})),
          (function (e) {
            (e[(e.k_EShutdownStep_None = 0)] = "k_EShutdownStep_None"),
              (e[(e.k_EShutdownStep_Start = 1)] = "k_EShutdownStep_Start"),
              (e[(e.k_EShutdownStep_WaitingForGames = 2)] =
                "k_EShutdownStep_WaitingForGames"),
              (e[(e.k_EShutdownStep_SynchronizingCloud = 3)] =
                "k_EShutdownStep_SynchronizingCloud"),
              (e[(e.k_EShutdownStep_FinishingDownload = 4)] =
                "k_EShutdownStep_FinishingDownload"),
              (e[(e.k_EShutdownStep_StoppingDownload = 5)] =
                "k_EShutdownStep_StoppingDownload"),
              (e[(e.k_EShutdownStep_StoppingServiceApps = 6)] =
                "k_EShutdownStep_StoppingServiceApps"),
              (e[(e.k_EShutdownStep_LogginOff = 7)] =
                "k_EShutdownStep_LogginOff"),
              (e[(e.k_EShutdownStep_Done = 8)] = "k_EShutdownStep_Done");
          })(U || (U = {})),
          (function (e) {
            (e[(e.k_EIteratorTypeNone = 0)] = "k_EIteratorTypeNone"),
              (e[(e.k_EIteratorTypeFolder = 1)] = "k_EIteratorTypeFolder"),
              (e[(e.k_EIteratorTypeExecutables = 2)] =
                "k_EIteratorTypeExecutables"),
              (e[(e.k_EIteratorTypeImages = 3)] = "k_EIteratorTypeImages");
          })(G || (G = {})),
          (function (e) {
            (e[(e.k_EUniverseInvalid = 0)] = "k_EUniverseInvalid"),
              (e[(e.k_EUniversePublic = 1)] = "k_EUniversePublic"),
              (e[(e.k_EUniverseBeta = 2)] = "k_EUniverseBeta"),
              (e[(e.k_EUniverseInternal = 3)] = "k_EUniverseInternal"),
              (e[(e.k_EUniverseDev = 4)] = "k_EUniverseDev"),
              (e[(e.k_EUniverseMax = 5)] = "k_EUniverseMax");
          })(w || (w = {})),
          (function (e) {
            (e[(e.k_EAccountTypeInvalid = 0)] = "k_EAccountTypeInvalid"),
              (e[(e.k_EAccountTypeIndividual = 1)] =
                "k_EAccountTypeIndividual"),
              (e[(e.k_EAccountTypeMultiseat = 2)] = "k_EAccountTypeMultiseat"),
              (e[(e.k_EAccountTypeGameServer = 3)] =
                "k_EAccountTypeGameServer"),
              (e[(e.k_EAccountTypeAnonGameServer = 4)] =
                "k_EAccountTypeAnonGameServer"),
              (e[(e.k_EAccountTypePending = 5)] = "k_EAccountTypePending"),
              (e[(e.k_EAccountTypeContentServer = 6)] =
                "k_EAccountTypeContentServer"),
              (e[(e.k_EAccountTypeClan = 7)] = "k_EAccountTypeClan"),
              (e[(e.k_EAccountTypeChat = 8)] = "k_EAccountTypeChat"),
              (e[(e.k_EAccountTypeConsoleUser = 9)] =
                "k_EAccountTypeConsoleUser"),
              (e[(e.k_EAccountTypeAnonUser = 10)] = "k_EAccountTypeAnonUser"),
              (e[(e.k_EAccountTypeMax = 11)] = "k_EAccountTypeMax");
          })(O || (O = {})),
          (function (e) {
            (e[(e.k_EFriendRelationshipNone = 0)] =
              "k_EFriendRelationshipNone"),
              (e[(e.k_EFriendRelationshipBlocked = 1)] =
                "k_EFriendRelationshipBlocked"),
              (e[(e.k_EFriendRelationshipRequestRecipient = 2)] =
                "k_EFriendRelationshipRequestRecipient"),
              (e[(e.k_EFriendRelationshipFriend = 3)] =
                "k_EFriendRelationshipFriend"),
              (e[(e.k_EFriendRelationshipRequestInitiator = 4)] =
                "k_EFriendRelationshipRequestInitiator"),
              (e[(e.k_EFriendRelationshipIgnored = 5)] =
                "k_EFriendRelationshipIgnored"),
              (e[(e.k_EFriendRelationshipIgnoredFriend = 6)] =
                "k_EFriendRelationshipIgnoredFriend"),
              (e[(e.k_EFriendRelationshipSuggested_DEPRECATED = 7)] =
                "k_EFriendRelationshipSuggested_DEPRECATED"),
              (e[(e.k_EFriendRelationshipMax = 8)] =
                "k_EFriendRelationshipMax");
          })(j || (j = {})),
          (function (e) {
            (e[(e.k_EClanRelationshipNone = 0)] = "k_EClanRelationshipNone"),
              (e[(e.k_EClanRelationshipBlocked = 1)] =
                "k_EClanRelationshipBlocked"),
              (e[(e.k_EClanRelationshipInvited = 2)] =
                "k_EClanRelationshipInvited"),
              (e[(e.k_EClanRelationshipMember = 3)] =
                "k_EClanRelationshipMember"),
              (e[(e.k_EClanRelationshipKicked = 4)] =
                "k_EClanRelationshipKicked"),
              (e[(e.k_EClanRelationshipKickAcknowledged = 5)] =
                "k_EClanRelationshipKickAcknowledged"),
              (e[(e.k_EClanRelationshipPendingApproval = 6)] =
                "k_EClanRelationshipPendingApproval"),
              (e[(e.k_EClanRelationshipRequestDenied = 7)] =
                "k_EClanRelationshipRequestDenied");
          })(B || (B = {}));
        var W, x, V;
        !(function (e) {
          (e[(e.k_EChatEntryTypeInvalid = 0)] = "k_EChatEntryTypeInvalid"),
            (e[(e.k_EChatEntryTypeChatMsg = 1)] = "k_EChatEntryTypeChatMsg"),
            (e[(e.k_EChatEntryTypeTyping = 2)] = "k_EChatEntryTypeTyping"),
            (e[(e.k_EChatEntryTypeInviteGame = 3)] =
              "k_EChatEntryTypeInviteGame"),
            (e[(e.k_EChatEntryTypeEmote = 4)] = "k_EChatEntryTypeEmote"),
            (e[(e.k_EChatEntryTypeLeftConversation = 6)] =
              "k_EChatEntryTypeLeftConversation"),
            (e[(e.k_EChatEntryTypeEntered = 7)] = "k_EChatEntryTypeEntered"),
            (e[(e.k_EChatEntryTypeWasKicked = 8)] =
              "k_EChatEntryTypeWasKicked"),
            (e[(e.k_EChatEntryTypeWasBanned = 9)] =
              "k_EChatEntryTypeWasBanned"),
            (e[(e.k_EChatEntryTypeDisconnected = 10)] =
              "k_EChatEntryTypeDisconnected"),
            (e[(e.k_EChatEntryTypeHistoricalChat = 11)] =
              "k_EChatEntryTypeHistoricalChat"),
            (e[(e.k_EChatEntryTypeLinkBlocked = 14)] =
              "k_EChatEntryTypeLinkBlocked");
        })(W || (W = {})),
          (function (e) {
            (e[(e.k_EEconTradeResponse_Accepted = 0)] =
              "k_EEconTradeResponse_Accepted"),
              (e[(e.k_EEconTradeResponse_Declined = 1)] =
                "k_EEconTradeResponse_Declined"),
              (e[(e.k_EEconTradeResponse_TradeBanned_Initiator = 2)] =
                "k_EEconTradeResponse_TradeBanned_Initiator"),
              (e[(e.k_EEconTradeResponse_TradeBanned_Target = 3)] =
                "k_EEconTradeResponse_TradeBanned_Target"),
              (e[(e.k_EEconTradeResponse_Target_Already_Trading = 4)] =
                "k_EEconTradeResponse_Target_Already_Trading"),
              (e[(e.k_EEconTradeResponse_Disabled = 5)] =
                "k_EEconTradeResponse_Disabled"),
              (e[(e.k_EEconTradeResponse_NotLoggedIn = 6)] =
                "k_EEconTradeResponse_NotLoggedIn"),
              (e[(e.k_EEconTradeResponse_Cancel = 7)] =
                "k_EEconTradeResponse_Cancel"),
              (e[(e.k_EEconTradeResponse_TooSoon = 8)] =
                "k_EEconTradeResponse_TooSoon"),
              (e[(e.k_EEconTradeResponse_TooSoonPenalty = 9)] =
                "k_EEconTradeResponse_TooSoonPenalty"),
              (e[(e.k_EEconTradeResponse_ConnectionFailed = 10)] =
                "k_EEconTradeResponse_ConnectionFailed"),
              (e[(e.k_EEconTradeResponse_Already_Trading = 11)] =
                "k_EEconTradeResponse_Already_Trading"),
              (e[(e.k_EEconTradeResponse_Already_Has_Trade_Request = 12)] =
                "k_EEconTradeResponse_Already_Has_Trade_Request"),
              (e[(e.k_EEconTradeResponse_NoResponse = 13)] =
                "k_EEconTradeResponse_NoResponse"),
              (e[(e.k_EEconTradeResponse_CyberCafe_Initiator = 14)] =
                "k_EEconTradeResponse_CyberCafe_Initiator"),
              (e[(e.k_EEconTradeResponse_CyberCafe_Target = 15)] =
                "k_EEconTradeResponse_CyberCafe_Target"),
              (e[(e.k_EEconTradeResponse_SchoolLab_Initiator = 16)] =
                "k_EEconTradeResponse_SchoolLab_Initiator"),
              (e[(e.k_EEconTradeResponse_SchoolLab_Target = 17)] =
                "k_EEconTradeResponse_SchoolLab_Target"),
              (e[(e.k_EEconTradeResponse_Initiator_Blocked_Target = 18)] =
                "k_EEconTradeResponse_Initiator_Blocked_Target"),
              (e[(e.k_EEconTradeResponse_Initiator_Needs_Verified_Email = 20)] =
                "k_EEconTradeResponse_Initiator_Needs_Verified_Email"),
              (e[(e.k_EEconTradeResponse_Initiator_Needs_Steam_Guard = 21)] =
                "k_EEconTradeResponse_Initiator_Needs_Steam_Guard"),
              (e[(e.k_EEconTradeResponse_Target_Account_Cannot_Trade = 22)] =
                "k_EEconTradeResponse_Target_Account_Cannot_Trade"),
              (e[(e.k_EEconTradeResponse_Initiator_Steam_Guard_Duration = 23)] =
                "k_EEconTradeResponse_Initiator_Steam_Guard_Duration"),
              (e[
                (e.k_EEconTradeResponse_Initiator_Recent_Password_Reset = 24)
              ] = "k_EEconTradeResponse_Initiator_Recent_Password_Reset"),
              (e[(e.k_EEconTradeResponse_Initiator_Using_New_Device = 25)] =
                "k_EEconTradeResponse_Initiator_Using_New_Device"),
              (e[(e.k_EEconTradeResponse_Initiator_Sent_Invalid_Cookie = 26)] =
                "k_EEconTradeResponse_Initiator_Sent_Invalid_Cookie"),
              (e[(e.k_EEconTradeResponse_NeedsEmailConfirmation = 27)] =
                "k_EEconTradeResponse_NeedsEmailConfirmation"),
              (e[(e.k_EEconTradeResponse_Initiator_Recent_Email_Change = 28)] =
                "k_EEconTradeResponse_Initiator_Recent_Email_Change"),
              (e[(e.k_EEconTradeResponse_NeedsMobileConfirmation = 29)] =
                "k_EEconTradeResponse_NeedsMobileConfirmation"),
              (e[
                (e.k_EEconTradeResponse_TradingHoldForClearedTradeOffers_Initiator = 30)
              ] =
                "k_EEconTradeResponse_TradingHoldForClearedTradeOffers_Initiator"),
              (e[(e.k_EEconTradeResponse_WouldExceedMaxAssetCount = 31)] =
                "k_EEconTradeResponse_WouldExceedMaxAssetCount"),
              (e[(e.k_EEconTradeResponse_DisabledInRegion = 32)] =
                "k_EEconTradeResponse_DisabledInRegion"),
              (e[(e.k_EEconTradeResponse_DisabledInPartnerRegion = 33)] =
                "k_EEconTradeResponse_DisabledInPartnerRegion"),
              (e[(e.k_EEconTradeResponse_OKToDeliver = 50)] =
                "k_EEconTradeResponse_OKToDeliver");
          })(x || (x = {})),
          (function (e) {
            (e[(e.k_EServerTypeOther_Util = -2)] = "k_EServerTypeOther_Util"),
              (e[(e.k_EServerTypeOther_Client = -3)] =
                "k_EServerTypeOther_Client"),
              (e[(e.k_EServerTypeOther_CServer = -4)] =
                "k_EServerTypeOther_CServer"),
              (e[(e.k_EServerTypeOther_CEconBase = -5)] =
                "k_EServerTypeOther_CEconBase"),
              (e[(e.k_EServerTypeInvalid = -1)] = "k_EServerTypeInvalid"),
              (e[(e.k_EServerTypeShell = 0)] = "k_EServerTypeShell"),
              (e[(e.k_EServerTypeGM = 1)] = "k_EServerTypeGM"),
              (e[(e.k_EServerTypeAM = 3)] = "k_EServerTypeAM"),
              (e[(e.k_EServerTypeBS = 4)] = "k_EServerTypeBS"),
              (e[(e.k_EServerTypeVS = 5)] = "k_EServerTypeVS"),
              (e[(e.k_EServerTypeATS = 6)] = "k_EServerTypeATS"),
              (e[(e.k_EServerTypeCM = 7)] = "k_EServerTypeCM"),
              (e[(e.k_EServerTypeFBS = 8)] = "k_EServerTypeFBS"),
              (e[(e.k_EServerTypeBoxMonitor = 9)] = "k_EServerTypeBoxMonitor"),
              (e[(e.k_EServerTypeSS = 10)] = "k_EServerTypeSS"),
              (e[(e.k_EServerTypeDRMS = 11)] = "k_EServerTypeDRMS"),
              (e[(e.k_EServerTypeConsole = 13)] = "k_EServerTypeConsole"),
              (e[(e.k_EServerTypePICS = 14)] = "k_EServerTypePICS"),
              (e[(e.k_EServerTypeContentStats = 16)] =
                "k_EServerTypeContentStats"),
              (e[(e.k_EServerTypeDP = 17)] = "k_EServerTypeDP"),
              (e[(e.k_EServerTypeWG = 18)] = "k_EServerTypeWG"),
              (e[(e.k_EServerTypeSM = 19)] = "k_EServerTypeSM"),
              (e[(e.k_EServerTypeSLC = 20)] = "k_EServerTypeSLC"),
              (e[(e.k_EServerTypeUFS = 21)] = "k_EServerTypeUFS"),
              (e[(e.k_EServerTypeCommunity = 24)] = "k_EServerTypeCommunity"),
              (e[(e.k_EServerTypeP2PRelayOBSOLETE = 25)] =
                "k_EServerTypeP2PRelayOBSOLETE"),
              (e[(e.k_EServerTypeAppInformation = 26)] =
                "k_EServerTypeAppInformation"),
              (e[(e.k_EServerTypeSpare = 27)] = "k_EServerTypeSpare"),
              (e[(e.k_EServerTypeFTS = 28)] = "k_EServerTypeFTS"),
              (e[(e.k_EServerTypeSiteLicense = 29)] =
                "k_EServerTypeSiteLicense"),
              (e[(e.k_EServerTypePS = 30)] = "k_EServerTypePS"),
              (e[(e.k_EServerTypeIS = 31)] = "k_EServerTypeIS"),
              (e[(e.k_EServerTypeCCS = 32)] = "k_EServerTypeCCS"),
              (e[(e.k_EServerTypeDFS = 33)] = "k_EServerTypeDFS"),
              (e[(e.k_EServerTypeLBS = 34)] = "k_EServerTypeLBS"),
              (e[(e.k_EServerTypeMDS = 35)] = "k_EServerTypeMDS"),
              (e[(e.k_EServerTypeCS = 36)] = "k_EServerTypeCS"),
              (e[(e.k_EServerTypeGC = 37)] = "k_EServerTypeGC"),
              (e[(e.k_EServerTypeNS = 38)] = "k_EServerTypeNS"),
              (e[(e.k_EServerTypeOGS = 39)] = "k_EServerTypeOGS"),
              (e[(e.k_EServerTypeWebAPI = 40)] = "k_EServerTypeWebAPI"),
              (e[(e.k_EServerTypeUDS = 41)] = "k_EServerTypeUDS"),
              (e[(e.k_EServerTypeMMS = 42)] = "k_EServerTypeMMS"),
              (e[(e.k_EServerTypeGMS = 43)] = "k_EServerTypeGMS"),
              (e[(e.k_EServerTypeKGS = 44)] = "k_EServerTypeKGS"),
              (e[(e.k_EServerTypeUCM = 45)] = "k_EServerTypeUCM"),
              (e[(e.k_EServerTypeRM = 46)] = "k_EServerTypeRM"),
              (e[(e.k_EServerTypeFS = 47)] = "k_EServerTypeFS"),
              (e[(e.k_EServerTypeEcon = 48)] = "k_EServerTypeEcon"),
              (e[(e.k_EServerTypeBackpack = 49)] = "k_EServerTypeBackpack"),
              (e[(e.k_EServerTypeUGS = 50)] = "k_EServerTypeUGS"),
              (e[(e.k_EServerTypeStoreFeature = 51)] =
                "k_EServerTypeStoreFeature"),
              (e[(e.k_EServerTypeMoneyStats = 52)] = "k_EServerTypeMoneyStats"),
              (e[(e.k_EServerTypeCRE = 53)] = "k_EServerTypeCRE"),
              (e[(e.k_EServerTypeUMQ = 54)] = "k_EServerTypeUMQ"),
              (e[(e.k_EServerTypeWorkshop = 55)] = "k_EServerTypeWorkshop"),
              (e[(e.k_EServerTypeBRP = 56)] = "k_EServerTypeBRP"),
              (e[(e.k_EServerTypeGCH = 57)] = "k_EServerTypeGCH"),
              (e[(e.k_EServerTypeMPAS = 58)] = "k_EServerTypeMPAS"),
              (e[(e.k_EServerTypeTrade = 59)] = "k_EServerTypeTrade"),
              (e[(e.k_EServerTypeSecrets = 60)] = "k_EServerTypeSecrets"),
              (e[(e.k_EServerTypeLogsink = 61)] = "k_EServerTypeLogsink"),
              (e[(e.k_EServerTypeMarket = 62)] = "k_EServerTypeMarket"),
              (e[(e.k_EServerTypeQuest = 63)] = "k_EServerTypeQuest"),
              (e[(e.k_EServerTypeWDS = 64)] = "k_EServerTypeWDS"),
              (e[(e.k_EServerTypeACS = 65)] = "k_EServerTypeACS"),
              (e[(e.k_EServerTypePNP = 66)] = "k_EServerTypePNP"),
              (e[(e.k_EServerTypeTaxForm = 67)] = "k_EServerTypeTaxForm"),
              (e[(e.k_EServerTypeExternalMonitor = 68)] =
                "k_EServerTypeExternalMonitor"),
              (e[(e.k_EServerTypeParental = 69)] = "k_EServerTypeParental"),
              (e[(e.k_EServerTypePartnerUpload = 70)] =
                "k_EServerTypePartnerUpload"),
              (e[(e.k_EServerTypePartner = 71)] = "k_EServerTypePartner"),
              (e[(e.k_EServerTypeES = 72)] = "k_EServerTypeES"),
              (e[(e.k_EServerTypeDepotWebContent = 73)] =
                "k_EServerTypeDepotWebContent"),
              (e[(e.k_EServerTypeExternalConfig = 74)] =
                "k_EServerTypeExternalConfig"),
              (e[(e.k_EServerTypeGameNotifications = 75)] =
                "k_EServerTypeGameNotifications"),
              (e[(e.k_EServerTypeMarketRepl = 76)] = "k_EServerTypeMarketRepl"),
              (e[(e.k_EServerTypeMarketSearch = 77)] =
                "k_EServerTypeMarketSearch"),
              (e[(e.k_EServerTypeLocalization = 78)] =
                "k_EServerTypeLocalization"),
              (e[(e.k_EServerTypeSteam2Emulator = 79)] =
                "k_EServerTypeSteam2Emulator"),
              (e[(e.k_EServerTypePublicTest = 80)] = "k_EServerTypePublicTest"),
              (e[(e.k_EServerTypeSolrMgr = 81)] = "k_EServerTypeSolrMgr"),
              (e[(e.k_EServerTypeBroadcastIngester = 82)] =
                "k_EServerTypeBroadcastIngester"),
              (e[(e.k_EServerTypeBroadcastDirectory = 83)] =
                "k_EServerTypeBroadcastDirectory"),
              (e[(e.k_EServerTypeVideoManager = 84)] =
                "k_EServerTypeVideoManager"),
              (e[(e.k_EServerTypeTradeOffer = 85)] = "k_EServerTypeTradeOffer"),
              (e[(e.k_EServerTypeBroadcastChat = 86)] =
                "k_EServerTypeBroadcastChat"),
              (e[(e.k_EServerTypePhone = 87)] = "k_EServerTypePhone"),
              (e[(e.k_EServerTypeAccountScore = 88)] =
                "k_EServerTypeAccountScore"),
              (e[(e.k_EServerTypeSupport = 89)] = "k_EServerTypeSupport"),
              (e[(e.k_EServerTypeLogRequest = 90)] = "k_EServerTypeLogRequest"),
              (e[(e.k_EServerTypeLogWorker = 91)] = "k_EServerTypeLogWorker"),
              (e[(e.k_EServerTypeEmailDelivery = 92)] =
                "k_EServerTypeEmailDelivery"),
              (e[(e.k_EServerTypeInventoryManagement = 93)] =
                "k_EServerTypeInventoryManagement"),
              (e[(e.k_EServerTypeAuth = 94)] = "k_EServerTypeAuth"),
              (e[(e.k_EServerTypeStoreCatalog = 95)] =
                "k_EServerTypeStoreCatalog"),
              (e[(e.k_EServerTypeHLTVRelay = 96)] = "k_EServerTypeHLTVRelay"),
              (e[(e.k_EServerTypeIDLS = 97)] = "k_EServerTypeIDLS"),
              (e[(e.k_EServerTypePerf = 98)] = "k_EServerTypePerf"),
              (e[(e.k_EServerTypeItemInventory = 99)] =
                "k_EServerTypeItemInventory"),
              (e[(e.k_EServerTypeWatchdog = 100)] = "k_EServerTypeWatchdog"),
              (e[(e.k_EServerTypeAccountHistory = 101)] =
                "k_EServerTypeAccountHistory"),
              (e[(e.k_EServerTypeChat = 102)] = "k_EServerTypeChat"),
              (e[(e.k_EServerTypeShader = 103)] = "k_EServerTypeShader"),
              (e[(e.k_EServerTypeAccountHardware = 104)] =
                "k_EServerTypeAccountHardware"),
              (e[(e.k_EServerTypeWebRTC = 105)] = "k_EServerTypeWebRTC"),
              (e[(e.k_EServerTypeGiveaway = 106)] = "k_EServerTypeGiveaway"),
              (e[(e.k_EServerTypeChatRoom = 107)] = "k_EServerTypeChatRoom"),
              (e[(e.k_EServerTypeVoiceChat = 108)] = "k_EServerTypeVoiceChat"),
              (e[(e.k_EServerTypeQMS = 109)] = "k_EServerTypeQMS"),
              (e[(e.k_EServerTypeTrust = 110)] = "k_EServerTypeTrust"),
              (e[(e.k_EServerTypeTimeMachine = 111)] =
                "k_EServerTypeTimeMachine"),
              (e[(e.k_EServerTypeVACDBMaster = 112)] =
                "k_EServerTypeVACDBMaster"),
              (e[(e.k_EServerTypeContentServerConfig = 113)] =
                "k_EServerTypeContentServerConfig"),
              (e[(e.k_EServerTypeMinigame = 114)] = "k_EServerTypeMinigame"),
              (e[(e.k_EServerTypeMLTrain = 115)] = "k_EServerTypeMLTrain"),
              (e[(e.k_EServerTypeVACTest = 116)] = "k_EServerTypeVACTest"),
              (e[(e.k_EServerTypeTaxService = 117)] =
                "k_EServerTypeTaxService"),
              (e[(e.k_EServerTypeMLInference = 118)] =
                "k_EServerTypeMLInference"),
              (e[(e.k_EServerTypeUGSAggregate = 119)] =
                "k_EServerTypeUGSAggregate"),
              (e[(e.k_EServerTypeTURN = 120)] = "k_EServerTypeTURN"),
              (e[(e.k_EServerTypeRemoteClient = 121)] =
                "k_EServerTypeRemoteClient"),
              (e[(e.k_EServerTypeBroadcastOrigin = 122)] =
                "k_EServerTypeBroadcastOrigin"),
              (e[(e.k_EServerTypeBroadcastChannel = 123)] =
                "k_EServerTypeBroadcastChannel"),
              (e[(e.k_EServerTypeSteamAR = 124)] = "k_EServerTypeSteamAR"),
              (e[(e.k_EServerTypeChina = 125)] = "k_EServerTypeChina"),
              (e[(e.k_EServerTypeCrashDump = 126)] = "k_EServerTypeCrashDump"),
              (e[(e.k_EServerTypeMax = 127)] = "k_EServerTypeMax");
          })(V || (V = {}));
        const H = 2147483647;
        var K;
        !(function (e) {
          (e[(e.k_Lang_None = -1)] = "k_Lang_None"),
            (e[(e.k_Lang_English = 0)] = "k_Lang_English"),
            (e[(e.k_Lang_German = 1)] = "k_Lang_German"),
            (e[(e.k_Lang_French = 2)] = "k_Lang_French"),
            (e[(e.k_Lang_Italian = 3)] = "k_Lang_Italian"),
            (e[(e.k_Lang_Korean = 4)] = "k_Lang_Korean"),
            (e[(e.k_Lang_Spanish = 5)] = "k_Lang_Spanish"),
            (e[(e.k_Lang_Simplified_Chinese = 6)] =
              "k_Lang_Simplified_Chinese"),
            (e[(e.k_Lang_Traditional_Chinese = 7)] =
              "k_Lang_Traditional_Chinese"),
            (e[(e.k_Lang_Russian = 8)] = "k_Lang_Russian"),
            (e[(e.k_Lang_Thai = 9)] = "k_Lang_Thai"),
            (e[(e.k_Lang_Japanese = 10)] = "k_Lang_Japanese"),
            (e[(e.k_Lang_Portuguese = 11)] = "k_Lang_Portuguese"),
            (e[(e.k_Lang_Polish = 12)] = "k_Lang_Polish"),
            (e[(e.k_Lang_Danish = 13)] = "k_Lang_Danish"),
            (e[(e.k_Lang_Dutch = 14)] = "k_Lang_Dutch"),
            (e[(e.k_Lang_Finnish = 15)] = "k_Lang_Finnish"),
            (e[(e.k_Lang_Norwegian = 16)] = "k_Lang_Norwegian"),
            (e[(e.k_Lang_Swedish = 17)] = "k_Lang_Swedish"),
            (e[(e.k_Lang_Hungarian = 18)] = "k_Lang_Hungarian"),
            (e[(e.k_Lang_Czech = 19)] = "k_Lang_Czech"),
            (e[(e.k_Lang_Romanian = 20)] = "k_Lang_Romanian"),
            (e[(e.k_Lang_Turkish = 21)] = "k_Lang_Turkish"),
            (e[(e.k_Lang_Brazilian = 22)] = "k_Lang_Brazilian"),
            (e[(e.k_Lang_Bulgarian = 23)] = "k_Lang_Bulgarian"),
            (e[(e.k_Lang_Greek = 24)] = "k_Lang_Greek"),
            (e[(e.k_Lang_Arabic = 25)] = "k_Lang_Arabic"),
            (e[(e.k_Lang_Ukrainian = 26)] = "k_Lang_Ukrainian"),
            (e[(e.k_Lang_Latam_Spanish = 27)] = "k_Lang_Latam_Spanish"),
            (e[(e.k_Lang_Vietnamese = 28)] = "k_Lang_Vietnamese"),
            (e[(e.k_Lang_SteamChina_SChinese = 29)] =
              "k_Lang_SteamChina_SChinese"),
            (e[(e.k_Lang_Indonesian = 30)] = "k_Lang_Indonesian"),
            (e[(e.k_Lang_MAX = 31)] = "k_Lang_MAX");
        })(K || (K = {}));
        function q(e, t = K.k_Lang_English) {
          switch (e) {
            case "english":
              return K.k_Lang_English;
            case "german":
              return K.k_Lang_German;
            case "french":
              return K.k_Lang_French;
            case "italian":
              return K.k_Lang_Italian;
            case "korean":
            case "koreana":
              return K.k_Lang_Korean;
            case "spanish":
              return K.k_Lang_Spanish;
            case "schinese":
              return K.k_Lang_Simplified_Chinese;
            case "tchinese":
              return K.k_Lang_Traditional_Chinese;
            case "russian":
              return K.k_Lang_Russian;
            case "thai":
              return K.k_Lang_Thai;
            case "japanese":
              return K.k_Lang_Japanese;
            case "portuguese":
              return K.k_Lang_Portuguese;
            case "polish":
              return K.k_Lang_Polish;
            case "danish":
              return K.k_Lang_Danish;
            case "dutch":
              return K.k_Lang_Dutch;
            case "finnish":
              return K.k_Lang_Finnish;
            case "norwegian":
              return K.k_Lang_Norwegian;
            case "swedish":
              return K.k_Lang_Swedish;
            case "hungarian":
              return K.k_Lang_Hungarian;
            case "czech":
              return K.k_Lang_Czech;
            case "romanian":
              return K.k_Lang_Romanian;
            case "turkish":
              return K.k_Lang_Turkish;
            case "arabic":
              return K.k_Lang_Arabic;
            case "brazilian":
              return K.k_Lang_Brazilian;
            case "bulgarian":
              return K.k_Lang_Bulgarian;
            case "greek":
              return K.k_Lang_Greek;
            case "ukrainian":
              return K.k_Lang_Ukrainian;
            case "latam":
              return K.k_Lang_Latam_Spanish;
            case "vietnamese":
              return K.k_Lang_Vietnamese;
            case "sc_schinese":
              return K.k_Lang_SteamChina_SChinese;
            case "indonesian":
              return K.k_Lang_Indonesian;
            default:
              return t;
          }
        }
        var z;
        !(function (e) {
          (e[(e.k_EOtherEvent = 1)] = "k_EOtherEvent"),
            (e[(e.k_EGameEvent = 2)] = "k_EGameEvent"),
            (e[(e.k_EPartyEvent = 3)] = "k_EPartyEvent"),
            (e[(e.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
            (e[(e.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
            (e[(e.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
            (e[(e.k_ESportsEvent = 7)] = "k_ESportsEvent"),
            (e[(e.k_ETripEvent = 8)] = "k_ETripEvent"),
            (e[(e.k_EChatEvent = 9)] = "k_EChatEvent"),
            (e[(e.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
            (e[(e.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
            (e[(e.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
            (e[(e.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
            (e[(e.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
            (e[(e.k_EDLCReleaseEvent = 15)] = "k_EDLCReleaseEvent"),
            (e[(e.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
            (e[(e.k_EESportTournamentStreamEvent = 17)] =
              "k_EESportTournamentStreamEvent"),
            (e[(e.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
            (e[(e.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
            (e[(e.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
            (e[(e.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
            (e[(e.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
            (e[(e.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
            (e[(e.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
            (e[(e.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
            (e[(e.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
            (e[(e.k_EIRLEvent = 27)] = "k_EIRLEvent"),
            (e[(e.k_ENewsEvent = 28)] = "k_ENewsEvent"),
            (e[(e.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
            (e[(e.k_EFreeTrial = 31)] = "k_EFreeTrial"),
            (e[(e.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
            (e[(e.k_ECrosspostEvent = 34)] = "k_ECrosspostEvent"),
            (e[(e.k_EInGameEventGeneral = 35)] = "k_EInGameEventGeneral");
        })(z || (z = {}));
        z.k_EOtherEvent,
          z.k_EGameEvent,
          z.k_EPartyEvent,
          z.k_EMeetingEvent,
          z.k_ESpecialCauseEvent,
          z.k_EMusicAndArtsEvent,
          z.k_ESportsEvent,
          z.k_ETripEvent,
          z.k_EChatEvent,
          z.k_EGameReleaseEvent,
          z.k_EBroadcastEvent,
          z.k_ESmallUpdateEvent,
          z.k_ERegularUpdateEvent,
          z.k_EMajorUpdateEvent,
          z.k_EDLCReleaseEvent,
          z.k_EFutureReleaseEvent,
          z.k_EESportTournamentStreamEvent,
          z.k_EDevStreamEvent,
          z.k_EFamousStreamEvent,
          z.k_EGameSalesEvent,
          z.k_EGameItemSalesEvent,
          z.k_EInGameBonusXPEvent,
          z.k_EInGameLootEvent,
          z.k_EInGamePerksEvent,
          z.k_EInGameChallengeEvent,
          z.k_EInGameContestEvent,
          z.k_EIRLEvent,
          z.k_ENewsEvent,
          z.k_EBetaReleaseEvent,
          z.k_EFreeTrial,
          z.k_ESeasonRelease,
          z.k_ECrosspostEvent,
          z.k_EInGameEventGeneral;
        var $,
          J,
          Q,
          Y,
          X,
          Z,
          ee,
          te,
          ne,
          re,
          oe,
          ae,
          ie,
          se,
          _e,
          Ee,
          ke,
          le,
          ce,
          ue,
          de,
          pe,
          Se,
          he,
          me,
          ye,
          ge,
          Te,
          Ce,
          ve;
        !(function (e) {
          (e[(e.k_ELaunchSource_None = 0)] = "k_ELaunchSource_None"),
            (e[(e.k_ELaunchSource_2ftLibraryDetails = 100)] =
              "k_ELaunchSource_2ftLibraryDetails"),
            (e[(e.k_ELaunchSource_2ftLibraryListView = 101)] =
              "k_ELaunchSource_2ftLibraryListView"),
            (e[(e.k_ELaunchSource_2ftLibraryGrid = 103)] =
              "k_ELaunchSource_2ftLibraryGrid"),
            (e[(e.k_ELaunchSource_InstallSubComplete = 104)] =
              "k_ELaunchSource_InstallSubComplete"),
            (e[(e.k_ELaunchSource_DownloadsPage = 105)] =
              "k_ELaunchSource_DownloadsPage"),
            (e[(e.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
              "k_ELaunchSource_RemoteClientStartStreaming"),
            (e[(e.k_ELaunchSource_2ftMiniModeList = 107)] =
              "k_ELaunchSource_2ftMiniModeList"),
            (e[(e.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
            (e[(e.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
              "k_ELaunchSource_DashAppLaunchCmdLine"),
            (e[(e.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
              "k_ELaunchSource_DashGameIdLaunchCmdLine"),
            (e[(e.k_ELaunchSource_RunByGameDir = 302)] =
              "k_ELaunchSource_RunByGameDir"),
            (e[(e.k_ELaunchSource_SubCmdRunDashGame = 303)] =
              "k_ELaunchSource_SubCmdRunDashGame"),
            (e[(e.k_ELaunchSource_SteamURL_Launch = 400)] =
              "k_ELaunchSource_SteamURL_Launch"),
            (e[(e.k_ELaunchSource_SteamURL_Run = 401)] =
              "k_ELaunchSource_SteamURL_Run"),
            (e[(e.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
              "k_ELaunchSource_SteamURL_JoinLobby"),
            (e[(e.k_ELaunchSource_SteamURL_RunGame = 403)] =
              "k_ELaunchSource_SteamURL_RunGame"),
            (e[(e.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
              "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
            (e[(e.k_ELaunchSource_SteamURL_RunSafe = 405)] =
              "k_ELaunchSource_SteamURL_RunSafe"),
            (e[(e.k_ELaunchSource_TrayIcon = 500)] =
              "k_ELaunchSource_TrayIcon"),
            (e[(e.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
              "k_ELaunchSource_LibraryLeftColumnContextMenu"),
            (e[(e.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
              "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
            (e[(e.k_ELaunchSource_Dota2Launcher = 700)] =
              "k_ELaunchSource_Dota2Launcher"),
            (e[(e.k_ELaunchSource_IRunGameEngine = 800)] =
              "k_ELaunchSource_IRunGameEngine"),
            (e[(e.k_ELaunchSource_DRMFailureResponse = 801)] =
              "k_ELaunchSource_DRMFailureResponse"),
            (e[(e.k_ELaunchSource_DRMDataRequest = 802)] =
              "k_ELaunchSource_DRMDataRequest"),
            (e[(e.k_ELaunchSource_CloudFilePanel = 803)] =
              "k_ELaunchSource_CloudFilePanel"),
            (e[(e.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
              "k_ELaunchSource_DiscoveredAlreadyRunning"),
            (e[(e.k_ELaunchSource_GameActionJoinParty = 900)] =
              "k_ELaunchSource_GameActionJoinParty"),
            (e[(e.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
              "k_ELaunchSource_AppPortraitContextMenu"),
            (e[(e.k_ELaunchSource_DownloadItem = 1001)] =
              "k_ELaunchSource_DownloadItem");
        })($ || ($ = {})),
          (function (e) {
            (e[(e.k_ECommunityPrivacyInvalid = 0)] =
              "k_ECommunityPrivacyInvalid"),
              (e[(e.k_ECommunityPrivacyPrivate = 1)] =
                "k_ECommunityPrivacyPrivate"),
              (e[(e.k_ECommunityPrivacyFriendsOnly = 2)] =
                "k_ECommunityPrivacyFriendsOnly"),
              (e[(e.k_ECommunityPrivacyPublic = 3)] =
                "k_ECommunityPrivacyPublic"),
              (e[(e.k_ECommunityPrivacyUsersOnly_DEPRECATED = 4)] =
                "k_ECommunityPrivacyUsersOnly_DEPRECATED"),
              (e[(e.k_ECommunityPrivacyFriendsFriendsOnly_DEPRECATED = 5)] =
                "k_ECommunityPrivacyFriendsFriendsOnly_DEPRECATED");
          })(J || (J = {})),
          (function (e) {
            (e[(e.k_EEconContextRoot = 0)] = "k_EEconContextRoot"),
              (e[(e.k_EBackpackContextGiftPasses = 1)] =
                "k_EBackpackContextGiftPasses"),
              (e[(e.k_EBackpackContextProfile = 2)] =
                "k_EBackpackContextProfile"),
              (e[(e.k_EBackpackContextCoupons = 3)] =
                "k_EBackpackContextCoupons"),
              (e[(e.k_EBackpackContextWallet = 4)] =
                "k_EBackpackContextWallet"),
              (e[(e.k_EBackpackContextCommunity = 6)] =
                "k_EBackpackContextCommunity"),
              (e[(e.k_EBackpackContextItemRewards = 7)] =
                "k_EBackpackContextItemRewards"),
              (e[(e.k_EEConContextMax = 999)] = "k_EEConContextMax");
          })(Q || (Q = {})),
          (function (e) {
            (e[(e.k_ERemoteStoragePublishedFileVisibilityPublic = 0)] =
              "k_ERemoteStoragePublishedFileVisibilityPublic"),
              (e[(e.k_ERemoteStoragePublishedFileVisibilityFriendsOnly = 1)] =
                "k_ERemoteStoragePublishedFileVisibilityFriendsOnly"),
              (e[(e.k_ERemoteStoragePublishedFileVisibilityPrivate = 2)] =
                "k_ERemoteStoragePublishedFileVisibilityPrivate"),
              (e[(e.k_ERemoteStoragePublishedFileVisibilityUnlisted = 3)] =
                "k_ERemoteStoragePublishedFileVisibilityUnlisted");
          })(Y || (Y = {})),
          (function (e) {
            (e[(e.k_EUCMListTypeSubscribed = 1)] = "k_EUCMListTypeSubscribed"),
              (e[(e.k_EUCMListTypeFavorites = 2)] = "k_EUCMListTypeFavorites"),
              (e[(e.k_EUCMListTypePlayed = 3)] = "k_EUCMListTypePlayed"),
              (e[(e.k_EUCMListTypeCompleted = 4)] = "k_EUCMListTypeCompleted"),
              (e[(e.k_EUCMListTypeShortcutFavorites = 5)] =
                "k_EUCMListTypeShortcutFavorites"),
              (e[(e.k_EUCMListTypeFollowed = 6)] = "k_EUCMListTypeFollowed");
          })(X || (X = {})),
          (function (e) {
            (e[(e.k_ELibraryAssetType_Capsule = 0)] =
              "k_ELibraryAssetType_Capsule"),
              (e[(e.k_ELibraryAssetType_Hero = 1)] =
                "k_ELibraryAssetType_Hero"),
              (e[(e.k_ELibraryAssetType_Logo = 2)] =
                "k_ELibraryAssetType_Logo"),
              (e[(e.k_ELibraryAssetType_Header = 3)] =
                "k_ELibraryAssetType_Header"),
              (e[(e.k_ELibraryAssetType_Icon = 4)] =
                "k_ELibraryAssetType_Icon"),
              (e[(e.k_ELibaryAssetType_HeroBlur = 5)] =
                "k_ELibaryAssetType_HeroBlur");
          })(Z || (Z = {})),
          (function (e) {
            (e[(e.k_ERecommendationIgnoreReasonNotInterested = 0)] =
              "k_ERecommendationIgnoreReasonNotInterested"),
              (e[(e.k_ERecommendationIgnoreReasonBlocked = 1)] =
                "k_ERecommendationIgnoreReasonBlocked"),
              (e[(e.k_ERecommendationIgnoreReasonOwnedElsewhere = 2)] =
                "k_ERecommendationIgnoreReasonOwnedElsewhere");
          })(ee || (ee = {})),
          (function (e) {
            (e[(e.k_ELauncherTypeDefault = 0)] = "k_ELauncherTypeDefault"),
              (e[(e.k_ELauncherTypePerfectWorld = 1)] =
                "k_ELauncherTypePerfectWorld"),
              (e[(e.k_ELauncherTypeNexon = 2)] = "k_ELauncherTypeNexon"),
              (e[(e.k_ELauncherTypeCmdLine = 3)] = "k_ELauncherTypeCmdLine"),
              (e[(e.k_ELauncherTypeCSGO = 4)] = "k_ELauncherTypeCSGO"),
              (e[(e.k_ELauncherTypeClientUI = 5)] = "k_ELauncherTypeClientUI"),
              (e[(e.k_ELauncherTypeHeadless = 6)] = "k_ELauncherTypeHeadless"),
              (e[(e.k_ELauncherTypeSteamChina = 7)] =
                "k_ELauncherTypeSteamChina"),
              (e[(e.k_ELauncherTypeSingleApp = 8)] =
                "k_ELauncherTypeSingleApp"),
              (e[(e.k_ELauncherTypeGameServer = 9)] =
                "k_ELauncherTypeGameServer"),
              (e[(e.k_ELauncherTypeMax = 10)] = "k_ELauncherTypeMax");
          })(te || (te = {})),
          (function (e) {
            (e[(e.k_EStoreCuratorRecommendationState_Recommended = 0)] =
              "k_EStoreCuratorRecommendationState_Recommended"),
              (e[(e.k_EStoreCuratorRecommendationState_NotRecommended = 1)] =
                "k_EStoreCuratorRecommendationState_NotRecommended"),
              (e[(e.k_EStoreCuratorRecommendationState_Informative = 2)] =
                "k_EStoreCuratorRecommendationState_Informative"),
              (e[(e.k_EStoreCuratorRecommendationState_CreatedApp = 3)] =
                "k_EStoreCuratorRecommendationState_CreatedApp");
          })(ne || (ne = {})),
          (function (e) {
            (e[(e.k_EUCMFilePrivacyStateInvalid = -1)] =
              "k_EUCMFilePrivacyStateInvalid"),
              (e[(e.k_EUCMFilePrivacyStatePrivate = 2)] =
                "k_EUCMFilePrivacyStatePrivate"),
              (e[(e.k_EUCMFilePrivacyStateFriendsOnly = 4)] =
                "k_EUCMFilePrivacyStateFriendsOnly"),
              (e[(e.k_EUCMFilePrivacyStatePublic = 8)] =
                "k_EUCMFilePrivacyStatePublic"),
              (e[(e.k_EUCMFilePrivacyStateUnlisted = 16)] =
                "k_EUCMFilePrivacyStateUnlisted"),
              (e[(e.k_EUCMFilePrivacyStateAll = 30)] =
                "k_EUCMFilePrivacyStateAll");
          })(re || (re = {})),
          (function (e) {
            (e[(e.k_EUIMode_Unknown = -1)] = "k_EUIMode_Unknown"),
              (e[(e.k_EUIMode_VGUI = 0)] = "k_EUIMode_VGUI"),
              (e[(e.k_EUIMode_Tenfoot = 1)] = "k_EUIMode_Tenfoot"),
              (e[(e.k_EUIMode_Mobile = 2)] = "k_EUIMode_Mobile"),
              (e[(e.k_EUIMode_Web = 3)] = "k_EUIMode_Web"),
              (e[(e.k_EUIMode_GamePadUI = 4)] = "k_EUIMode_GamePadUI"),
              (e[(e.k_EUIMode_MobileChat = 5)] = "k_EUIMode_MobileChat"),
              (e[(e.k_EUIMode_EmbeddedClient = 6)] =
                "k_EUIMode_EmbeddedClient"),
              (e[(e.k_EUIMode_DesktopUI = 7)] = "k_EUIMode_DesktopUI"),
              (e[(e.k_EUIMode_MAX = 8)] = "k_EUIMode_MAX");
          })(oe || (oe = {})),
          (function (e) {
            (e[(e.k_EStoreCategoryMultiplayer = 1)] =
              "k_EStoreCategoryMultiplayer"),
              (e[(e.k_EStoreCategorySingleplayer = 2)] =
                "k_EStoreCategorySingleplayer"),
              (e[(e.k_EStoreCategoryModHL2 = 6)] = "k_EStoreCategoryModHL2"),
              (e[(e.k_EStoreCategoryModHL = 7)] = "k_EStoreCategoryModHL"),
              (e[(e.k_EStoreCategoryVAC = 8)] = "k_EStoreCategoryVAC"),
              (e[(e.k_EStoreCategoryCoop = 9)] = "k_EStoreCategoryCoop"),
              (e[(e.k_EStoreCategoryDemo = 10)] = "k_EStoreCategoryDemo"),
              (e[(e.k_EStoreCategoryFriends = 11)] = "k_EStoreCategoryFriends"),
              (e[(e.k_EStoreCategoryHDR = 12)] = "k_EStoreCategoryHDR"),
              (e[(e.k_EStoreCategoryCC = 13)] = "k_EStoreCategoryCC"),
              (e[(e.k_EStoreCategoryCommentary = 14)] =
                "k_EStoreCategoryCommentary"),
              (e[(e.k_EStoreCategoryStats = 15)] = "k_EStoreCategoryStats"),
              (e[(e.k_EStoreCategorySDK = 16)] = "k_EStoreCategorySDK"),
              (e[(e.k_EStoreCategoryEditor = 17)] = "k_EStoreCategoryEditor"),
              (e[(e.k_EStoreCategoryPartialController = 18)] =
                "k_EStoreCategoryPartialController"),
              (e[(e.k_EStoreCategoryMod = 19)] = "k_EStoreCategoryMod"),
              (e[(e.k_EStoreCategoryMMO = 20)] = "k_EStoreCategoryMMO"),
              (e[(e.k_EStoreCategoryDLC = 21)] = "k_EStoreCategoryDLC"),
              (e[(e.k_EStoreCategoryAchievements = 22)] =
                "k_EStoreCategoryAchievements"),
              (e[(e.k_EStoreCategoryCloud = 23)] = "k_EStoreCategoryCloud"),
              (e[(e.k_EStoreCategorySharedSplitscreen = 24)] =
                "k_EStoreCategorySharedSplitscreen"),
              (e[(e.k_EStoreCategoryLeaderboards = 25)] =
                "k_EStoreCategoryLeaderboards"),
              (e[(e.k_EStoreCategoryGuide = 26)] = "k_EStoreCategoryGuide"),
              (e[(e.k_EStoreCategoryCrossPlatMultiplayer = 27)] =
                "k_EStoreCategoryCrossPlatMultiplayer"),
              (e[(e.k_EStoreCategoryFullController = 28)] =
                "k_EStoreCategoryFullController"),
              (e[(e.k_EStoreCategoryTradingCard = 29)] =
                "k_EStoreCategoryTradingCard"),
              (e[(e.k_EStoreCategoryWorkshop = 30)] =
                "k_EStoreCategoryWorkshop"),
              (e[(e.k_EStoreCategoryVRThirdParty = 31)] =
                "k_EStoreCategoryVRThirdParty"),
              (e[(e.k_EStoreCategoryAsyncGameNotifications = 32)] =
                "k_EStoreCategoryAsyncGameNotifications"),
              (e[(e.k_EStoreCategorySteamController = 33)] =
                "k_EStoreCategorySteamController"),
              (e[(e.k_EStoreCategoryVRSteam = 34)] = "k_EStoreCategoryVRSteam"),
              (e[(e.k_EStoreCategoryInAppPurchases = 35)] =
                "k_EStoreCategoryInAppPurchases"),
              (e[(e.k_EStoreCategoryOnlinePvP = 36)] =
                "k_EStoreCategoryOnlinePvP"),
              (e[(e.k_EStoreCategoryLocalPvP = 37)] =
                "k_EStoreCategoryLocalPvP"),
              (e[(e.k_EStoreCategoryOnlineCoop = 38)] =
                "k_EStoreCategoryOnlineCoop"),
              (e[(e.k_EStoreCategoryLocalCoop = 39)] =
                "k_EStoreCategoryLocalCoop"),
              (e[(e.k_EStoreCategorySteamVRCollectibles = 40)] =
                "k_EStoreCategorySteamVRCollectibles"),
              (e[(e.k_EStoreCategoryRemotePlayToPhone = 41)] =
                "k_EStoreCategoryRemotePlayToPhone"),
              (e[(e.k_EStoreCategoryRemotePlayToTablet = 42)] =
                "k_EStoreCategoryRemotePlayToTablet"),
              (e[(e.k_EStoreCategoryRemotePlayToTV = 43)] =
                "k_EStoreCategoryRemotePlayToTV"),
              (e[(e.k_EStoreCategoryRemotePlayTogether = 44)] =
                "k_EStoreCategoryRemotePlayTogether"),
              (e[(e.k_EStoreCategoryCloudGaming = 45)] =
                "k_EStoreCategoryCloudGaming"),
              (e[(e.k_EStoreCategoryCloudGamingNVIDIA = 46)] =
                "k_EStoreCategoryCloudGamingNVIDIA"),
              (e[(e.k_EStoreCategoryLANPvP = 47)] = "k_EStoreCategoryLANPvP"),
              (e[(e.k_EStoreCategoryLANCoop = 48)] = "k_EStoreCategoryLANCoop"),
              (e[(e.k_EStoreCategoryPvP = 49)] = "k_EStoreCategoryPvP"),
              (e[(e.k_EStoreCategoryHighQualitySoundtrackAudio = 50)] =
                "k_EStoreCategoryHighQualitySoundtrackAudio"),
              (e[(e.k_EStoreCategorySteamChinaWorkshop = 51)] =
                "k_EStoreCategorySteamChinaWorkshop"),
              (e[(e.k_EStoreCategoryPS4Controller = 55)] =
                "k_EStoreCategoryPS4Controller"),
              (e[(e.k_EStoreCategoryPS4ControllerBT = 56)] =
                "k_EStoreCategoryPS4ControllerBT"),
              (e[(e.k_EStoreCategoryPS5Controller = 57)] =
                "k_EStoreCategoryPS5Controller"),
              (e[(e.k_EStoreCategoryPS5ControllerBT = 58)] =
                "k_EStoreCategoryPS5ControllerBT"),
              (e[(e.k_EStoreCategorySteamInputAPI = 59)] =
                "k_EStoreCategorySteamInputAPI"),
              (e[(e.k_EStoreCategoryGamepadPreferred = 60)] =
                "k_EStoreCategoryGamepadPreferred");
          })(ae || (ae = {})),
          (function (e) {
            (e[(e.k_PFI_MatchingFileType_Items = 0)] =
              "k_PFI_MatchingFileType_Items"),
              (e[(e.k_PFI_MatchingFileType_Collections = 1)] =
                "k_PFI_MatchingFileType_Collections"),
              (e[(e.k_PFI_MatchingFileType_Art = 2)] =
                "k_PFI_MatchingFileType_Art"),
              (e[(e.k_PFI_MatchingFileType_Videos = 3)] =
                "k_PFI_MatchingFileType_Videos"),
              (e[(e.k_PFI_MatchingFileType_Screenshots = 4)] =
                "k_PFI_MatchingFileType_Screenshots"),
              (e[(e.k_PFI_MatchingFileType_CollectionEligible = 5)] =
                "k_PFI_MatchingFileType_CollectionEligible"),
              (e[(e.k_PFI_MatchingFileType_Games = 6)] =
                "k_PFI_MatchingFileType_Games"),
              (e[(e.k_PFI_MatchingFileType_Software = 7)] =
                "k_PFI_MatchingFileType_Software"),
              (e[(e.k_PFI_MatchingFileType_Concepts = 8)] =
                "k_PFI_MatchingFileType_Concepts"),
              (e[(e.k_PFI_MatchingFileType_GreenlightItems = 9)] =
                "k_PFI_MatchingFileType_GreenlightItems"),
              (e[(e.k_PFI_MatchingFileType_AllGuides = 10)] =
                "k_PFI_MatchingFileType_AllGuides"),
              (e[(e.k_PFI_MatchingFileType_WebGuides = 11)] =
                "k_PFI_MatchingFileType_WebGuides"),
              (e[(e.k_PFI_MatchingFileType_IntegratedGuides = 12)] =
                "k_PFI_MatchingFileType_IntegratedGuides"),
              (e[(e.k_PFI_MatchingFileType_UsableInGame = 13)] =
                "k_PFI_MatchingFileType_UsableInGame"),
              (e[(e.k_PFI_MatchingFileType_Merch = 14)] =
                "k_PFI_MatchingFileType_Merch"),
              (e[(e.k_PFI_MatchingFileType_ControllerBindings = 15)] =
                "k_PFI_MatchingFileType_ControllerBindings"),
              (e[(e.k_PFI_MatchingFileType_SteamworksAccessInvites = 16)] =
                "k_PFI_MatchingFileType_SteamworksAccessInvites"),
              (e[(e.k_PFI_MatchingFileType_Items_Mtx = 17)] =
                "k_PFI_MatchingFileType_Items_Mtx"),
              (e[(e.k_PFI_MatchingFileType_Items_ReadyToUse = 18)] =
                "k_PFI_MatchingFileType_Items_ReadyToUse"),
              (e[(e.k_PFI_MatchingFileType_WorkshopShowcase = 19)] =
                "k_PFI_MatchingFileType_WorkshopShowcase"),
              (e[(e.k_PFI_MatchingFileType_GameManagedItems = 20)] =
                "k_PFI_MatchingFileType_GameManagedItems"),
              (e[(e.k_PFI_MatchingFileType_All = -1)] =
                "k_PFI_MatchingFileType_All");
          })(ie || (ie = {})),
          (function (e) {
            (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
              "k_EConnectivityTestResult_Unknown"),
              (e[(e.k_EConnectivityTestResult_Connected = 1)] =
                "k_EConnectivityTestResult_Connected"),
              (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
                "k_EConnectivityTestResult_CaptivePortal"),
              (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
                "k_EConnectivityTestResult_TimedOut"),
              (e[(e.k_EConnectivityTestResult_Failed = 4)] =
                "k_EConnectivityTestResult_Failed"),
              (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
                "k_EConnectivityTestResult_WifiDisabled"),
              (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
                "k_EConnectivityTestResult_NoLAN");
          })(se || (se = {})),
          (function (e) {
            (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
              "k_ENetFakeLocalSystemState_Normal"),
              (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
                "k_ENetFakeLocalSystemState_NoLAN"),
              (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
                "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
              (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
                "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
              (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
                "k_ENetFakeLocalSystemState_NoInternet"),
              (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
                "k_ENetFakeLocalSystemState_NoSteam");
          })(_e || (_e = {})),
          (function (e) {
            (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
              "k_ESuspendResumeProgressState_Invalid"),
              (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
                "k_ESuspendResumeProgressState_Complete"),
              (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
                "k_ESuspendResumeProgressState_CloudSync"),
              (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
                "k_ESuspendResumeProgressState_LoggingIn"),
              (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
                "k_ESuspendResumeProgressState_WaitingForApp"),
              (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
                "k_ESuspendResumeProgressState_Working");
          })(Ee || (Ee = {})),
          (function (e) {
            (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
              (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
                "k_EFloatingGamepadTextInputModeModeMultipleLines"),
              (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
                "k_EFloatingGamepadTextInputModeModeEmail"),
              (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
                "k_EFloatingGamepadTextInputModeModeNumeric");
          })(ke || (ke = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(le || (le = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(ce || (ce = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(ue || (ue = {})),
          (function (e) {
            (e[(e.k_EGamingDeviceType_Unknown = 0)] =
              "k_EGamingDeviceType_Unknown"),
              (e[(e.k_EGamingDeviceType_StandardPC = 1)] =
                "k_EGamingDeviceType_StandardPC"),
              (e[(e.k_EGamingDeviceType_Console = 256)] =
                "k_EGamingDeviceType_Console"),
              (e[(e.k_EGamingDeviceType_PS3 = 272)] =
                "k_EGamingDeviceType_PS3"),
              (e[(e.k_EGamingDeviceType_Steambox = 288)] =
                "k_EGamingDeviceType_Steambox"),
              (e[(e.k_EGamingDeviceType_Handheld = 512)] =
                "k_EGamingDeviceType_Handheld"),
              (e[(e.k_EGamingDeviceType_Phone = 528)] =
                "k_EGamingDeviceType_Phone"),
              (e[(e.k_EGamingDeviceType_SteamDeck = 544)] =
                "k_EGamingDeviceType_SteamDeck");
          })(de || (de = {})),
          (function (e) {
            (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
              (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
                "k_ELoginUIStyleNewWithoutQRCode"),
              (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
          })(pe || (pe = {})),
          (function (e) {
            (e[(e.k_ECommunityProfileItemProperty_ImageSmall = 0)] =
              "k_ECommunityProfileItemProperty_ImageSmall"),
              (e[(e.k_ECommunityProfileItemProperty_ImageLarge = 1)] =
                "k_ECommunityProfileItemProperty_ImageLarge"),
              (e[(e.k_ECommunityProfileItemProperty_InternalName = 2)] =
                "k_ECommunityProfileItemProperty_InternalName"),
              (e[(e.k_ECommunityProfileItemProperty_Title = 3)] =
                "k_ECommunityProfileItemProperty_Title"),
              (e[(e.k_ECommunityProfileItemProperty_Description = 4)] =
                "k_ECommunityProfileItemProperty_Description"),
              (e[(e.k_ECommunityProfileItemProperty_AppID = 5)] =
                "k_ECommunityProfileItemProperty_AppID"),
              (e[(e.k_ECommunityProfileItemProperty_TypeID = 6)] =
                "k_ECommunityProfileItemProperty_TypeID"),
              (e[(e.k_ECommunityProfileItemProperty_Class = 7)] =
                "k_ECommunityProfileItemProperty_Class"),
              (e[(e.k_ECommunityProfileItemProperty_MovieWebM = 8)] =
                "k_ECommunityProfileItemProperty_MovieWebM"),
              (e[(e.k_ECommunityProfileItemProperty_MovieMP4 = 9)] =
                "k_ECommunityProfileItemProperty_MovieMP4"),
              (e[(e.k_ECommunityProfileItemProperty_MovieWebMSmall = 10)] =
                "k_ECommunityProfileItemProperty_MovieWebMSmall"),
              (e[(e.k_ECommunityProfileItemProperty_MovieMP4Small = 11)] =
                "k_ECommunityProfileItemProperty_MovieMP4Small");
          })(Se || (Se = {})),
          (function (e) {
            (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
              "k_ERaiseGameWindowResult_NotRunning"),
              (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
                "k_ERaiseGameWindowResult_Success"),
              (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
                "k_ERaiseGameWindowResult_Failure");
          })(he || (he = {})),
          (function (e) {
            (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
              (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
              (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
              (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
              (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
          })(me || (me = {})),
          (function (e) {
            (e[(e.k_EAppReleaseState_Unknown = 0)] =
              "k_EAppReleaseState_Unknown"),
              (e[(e.k_EAppReleaseState_Unavailable = 1)] =
                "k_EAppReleaseState_Unavailable"),
              (e[(e.k_EAppReleaseState_Prerelease = 2)] =
                "k_EAppReleaseState_Prerelease"),
              (e[(e.k_EAppReleaseState_PreloadOnly = 3)] =
                "k_EAppReleaseState_PreloadOnly"),
              (e[(e.k_EAppReleaseState_Released = 4)] =
                "k_EAppReleaseState_Released"),
              (e[(e.k_EAppReleaseState_Disabled = 5)] =
                "k_EAppReleaseState_Disabled");
          })(ye || (ye = {})),
          (function (e) {
            (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
              (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
              (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut"),
              (e[(e.k_EGameIDTypeP2P = 3)] = "k_EGameIDTypeP2P");
          })(ge || (ge = {})),
          (function (e) {
            (e[(e.k_EInstallMgrStateNone = 0)] = "k_EInstallMgrStateNone"),
              (e[(e.k_EInstallMgrStateSetup = 1)] = "k_EInstallMgrStateSetup"),
              (e[(e.k_EInstallMgrStateWaitLicense = 2)] =
                "k_EInstallMgrStateWaitLicense"),
              (e[(e.k_EInstallMgrStateFreeLicense = 3)] =
                "k_EInstallMgrStateFreeLicense"),
              (e[(e.k_EInstallMgrStateShowCDKey = 4)] =
                "k_EInstallMgrStateShowCDKey"),
              (e[(e.k_EInstallMgrStateWaitAppInfo = 5)] =
                "k_EInstallMgrStateWaitAppInfo"),
              (e[(e.k_EInstallMgrStateShowPassword = 6)] =
                "k_EInstallMgrStateShowPassword"),
              (e[(e.k_EInstallMgrStateShowConfig = 7)] =
                "k_EInstallMgrStateShowConfig"),
              (e[(e.k_EInstallMgrStateShowEULAs = 8)] =
                "k_EInstallMgrStateShowEULAs"),
              (e[(e.k_EInstallMgrStateCreateApps = 9)] =
                "k_EInstallMgrStateCreateApps"),
              (e[(e.k_EInstallMgrStateReadFromMedia = 10)] =
                "k_EInstallMgrStateReadFromMedia"),
              (e[(e.k_EInstallMgrStateShowChangeMedia = 11)] =
                "k_EInstallMgrStateShowChangeMedia"),
              (e[(e.k_EInstallMgrStateWaitLegacyCDKeys = 12)] =
                "k_EInstallMgrStateWaitLegacyCDKeys"),
              (e[(e.k_EInstallMgrStateShowSignup = 13)] =
                "k_EInstallMgrStateShowSignup"),
              (e[(e.k_EInstallMgrStateComplete = 14)] =
                "k_EInstallMgrStateComplete"),
              (e[(e.k_EInstallMgrStateFailed = 15)] =
                "k_EInstallMgrStateFailed"),
              (e[(e.k_EInstallMgrStateCanceled = 16)] =
                "k_EInstallMgrStateCanceled");
          })(Te || (Te = {})),
          (function (e) {
            (e[(e.k_EWindowBringToFrontInvalid = 0)] =
              "k_EWindowBringToFrontInvalid"),
              (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
                "k_EWindowBringToFrontAndForceOS"),
              (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
                "k_EWindowBringToFrontWithoutForcingOS");
          })(Ce || (Ce = {})),
          (function (e) {
            (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
              (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
              (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
          })(ve || (ve = {}));
        function Re(e, t) {
          return (function (e, t) {
            let n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        function Ie(e, t, n) {
          return {
            get() {
              let e = n.value.bind(this);
              return (
                this.hasOwnProperty(t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        class Le {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                Re(this.m_vecCallbacks, e);
              },
            };
          }
          Dispatch(...e) {
            for (const t of Array.from(this.m_vecCallbacks)) t(...e);
          }
          ClearAllCallbacks() {
            this.m_vecCallbacks = [];
          }
          CountRegistered() {
            return this.m_vecCallbacks.length;
          }
        }
        r(
          [Ie],
          class {
            Schedule(e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e,
                ));
            }
            IsScheduled() {
              return void 0 !== this.m_schTimer;
            }
            Cancel() {
              this.m_schTimer &&
                (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
            }
            ScheduledInternal() {
              this.m_schTimer = void 0;
              let e = this.m_fnCallback;
              (this.m_fnCallback = void 0), e();
            }
          }.prototype,
          "ScheduledInternal",
          null,
        );
        r(
          [Ie],
          class {
            constructor() {
              this.m_vecCallbacks = [];
            }
            Push(e) {
              this.m_vecCallbacks.push(e);
            }
            PushArrayRemove(e, t) {
              this.m_vecCallbacks.push(() => Re(e, t));
            }
            Unregister() {
              for (let e of this.m_vecCallbacks) e();
              this.m_vecCallbacks = [];
            }
            GetUnregisterFunc() {
              return this.Unregister;
            }
          }.prototype,
          "Unregister",
          null,
        );
        var fe;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Ago = 1)] = "Ago"),
            (e[(e.Remaining = 2)] = "Remaining");
        })(fe || (fe = {}));
        new Map();
        new Map(), new Map();
        new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
        class Ae {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map()),
              (this.m_cbkTokensChanged = new Le());
          }
          static InstallErrorReportingStore(e) {
            this.sm_ErrorReportingStore = e;
          }
          static GetLanguageFallback(e) {
            return "sc_schinese" === e ? "schinese" : "english";
          }
          static GetELanguageFallback(e) {
            return e === K.k_Lang_SteamChina_SChinese
              ? K.k_Lang_Simplified_Chinese
              : K.k_Lang_English;
          }
          static IsELanguageValidInRealm(e, t) {
            return (
              t ===
              (e === K.k_Lang_SteamChina_SChinese
                ? ve.k_ESteamRealmChina
                : ve.k_ESteamRealmGlobal)
            );
          }
          static GetLanguageListForRealms(e) {
            const t = new Array();
            for (let n = K.k_Lang_English; n < K.k_Lang_MAX; n++)
              for (const r of e)
                if (this.IsELanguageValidInRealm(n, r)) {
                  t.push(n);
                  break;
                }
            return t;
          }
          InitFromObjects(e, t, n, r, o) {
            o || this.m_mapTokens.clear();
            const a = Object.assign(Object.assign({}, n || {}), e),
              i = Object.assign(Object.assign({}, r || {}), t || {});
            this.AddTokens(a, i), this.m_cbkTokensChanged.Dispatch();
          }
          InitDirect(e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t),
              this.m_cbkTokensChanged.Dispatch();
          }
          AddTokens(e, t) {
            Object.keys(e).forEach((t) => {
              this.m_mapTokens.set(t, e[t]);
            }),
              t &&
                Object.keys(t).forEach((e) => {
                  this.m_mapTokens.has(e) || this.m_mapTokens.set(e, t[e]),
                    this.m_mapFallbackTokens.set(e, t[e]);
                });
          }
          GetTokensChangedCallbackList() {
            return this.m_cbkTokensChanged;
          }
          GetPreferredLocales() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
              ? navigator.languages
              : ["en-US"];
          }
          GetELanguageFallbackOrder(e = null) {
            let t = new Array();
            if (
              (t.push(q(h.LANGUAGE)),
              (h.SUPPORTED_LANGUAGES || []).forEach((e) => {
                e.value != h.LANGUAGE && t.push(q(e.value));
              }),
              e)
            ) {
              Ae.GetLanguageListForRealms(e).forEach((e) => {
                -1 == t.indexOf(e) && t.push(e);
              });
            }
            return t;
          }
          SetPreferredLocales(e) {
            this.m_rgLocalesToUse = e;
          }
          BLooksLikeToken(e) {
            return e && e.length > 0 && "#" == e.charAt(0);
          }
          LocalizeIfToken(e, t) {
            return this.BLooksLikeToken(e) ? this.LocalizeString(e, t) : e;
          }
          LocalizeString(e, t) {
            if (!this.BLooksLikeToken(e)) return;
            let n = this.m_mapTokens.get(e.substring(1));
            if (void 0 !== n) return n;
            !t &&
              Ae.sm_ErrorReportingStore &&
              Ae.sm_ErrorReportingStore.ReportError(
                new Error(
                  `Unable to find localization token '${e}' for language '${h.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
                ),
                { bIncludeMessageInIdentifier: !0 },
              );
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return;
            let t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 !== t ? t : void 0;
          }
        }
        function Pe(e, ...t) {
          let n = Fe.LocalizeString(e);
          return void 0 === n ? e : Me(n, ...t);
        }
        function be(e, ...t) {
          let n = Fe.LocalizeString(e);
          if (void 0 === n) return e;
          let r,
            o = [],
            i = /(.*?)%(\d+)\$s/g,
            s = 0;
          for (; (r = i.exec(n)); ) {
            (s += r[0].length), o.push(r[1]);
            let e = parseInt(r[2]);
            e >= 1 && e <= t.length && o.push(t[e - 1]);
          }
          return o.push(n.substr(s)), a.createElement(a.Fragment, null, ...o);
        }
        function Me(e, ...t) {
          return 0 == t.length
            ? e
            : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
                if (n <= t.length && n >= 1) {
                  let e = t[n - 1];
                  return String(null == e ? "" : e);
                }
                return e;
              }));
        }
        K.k_Lang_English,
          K.k_Lang_German,
          K.k_Lang_French,
          K.k_Lang_Italian,
          K.k_Lang_Korean,
          K.k_Lang_Spanish,
          K.k_Lang_Simplified_Chinese,
          K.k_Lang_Traditional_Chinese,
          K.k_Lang_Russian,
          K.k_Lang_Thai,
          K.k_Lang_Japanese,
          K.k_Lang_Portuguese,
          K.k_Lang_Polish,
          K.k_Lang_Danish,
          K.k_Lang_Dutch,
          K.k_Lang_Finnish,
          K.k_Lang_Norwegian,
          K.k_Lang_Swedish,
          K.k_Lang_Hungarian,
          K.k_Lang_Czech,
          K.k_Lang_Romanian,
          K.k_Lang_Turkish,
          K.k_Lang_Brazilian,
          K.k_Lang_Bulgarian,
          K.k_Lang_Greek,
          K.k_Lang_Arabic,
          K.k_Lang_Ukrainian,
          K.k_Lang_Latam_Spanish,
          K.k_Lang_Vietnamese,
          K.k_Lang_Indonesian;
        const Fe = new Ae();
        function De(e, t, ...n) {
          console.assert
            ? 0 == n.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...n)
            : e || console.warn(t, ...n);
        }
        window.LocalizationManager = Fe;
        var Ne = n(22188),
          Ue = n(29323);
        class Ge {
          constructor(e) {
            (this.m_bReady = !1),
              (this.m_bValid = !1),
              (this.m_strInviteCode = e);
          }
          BIsReady() {
            return this.m_bReady;
          }
          BIsValid() {
            return this.m_bValid;
          }
          BIsInviteLink() {
            return !!this.m_strInviteCode;
          }
          GetInviteCode() {
            return this.m_strInviteCode;
          }
          BNeverExpires() {
            return this.m_rtTimeExpires == H;
          }
          GetChatRoomGroupID() {
            return this.m_ulChatRoomGroupID;
          }
          BIsVoiceChatInvite() {
            return !!this.m_ulChatID;
          }
          GetChatID() {
            return this.m_ulChatID;
          }
          GetURL() {
            return this.m_strInviteCode
              ? ((e = this.m_strInviteCode),
                "public" == h.WEB_UNIVERSE
                  ? `https://s.team/chat/${e}`
                  : `${h.COMMUNITY_BASE_URL}chat/invite/${e}`)
              : null;
            var e;
          }
          BIsUserBanned() {
            return this.m_bIsBanned;
          }
          GetTimeKickExpires() {
            return this.m_rtKickExpires;
          }
          get time_expires() {
            return this.m_rtTimeExpires;
          }
          InitInvalid() {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }
          InitDirectInvite(e, t, n = !1, r = undefined) {
            (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = r),
              (this.m_rtTimeExpires = H),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        r([Ne.LO], Ge.prototype, "m_bReady", void 0),
          r([Ne.aD], Ge.prototype, "InitInvalid", null),
          r([Ne.aD], Ge.prototype, "InitDirectInvite", null);
        var we = n(43720),
          Oe = n.n(we);
        class je {
          constructor(e = 0, t, n, r) {
            e instanceof je
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
              ? (this.m_ulSteamID = Oe().fromString(e, !0))
              : t && n && void 0 !== r
              ? this.SetFromComponents(e, r, n, t)
              : (this.m_ulSteamID = e ? Oe().fromNumber(e, !0) : Oe().UZERO);
          }
          static InitFromAccountID(e) {
            return new je(
              Number(e),
              h.EUNIVERSE,
              O.k_EAccountTypeIndividual,
              1,
            );
          }
          static InitFromClanID(e) {
            return new je(Number(e), h.EUNIVERSE, O.k_EAccountTypeClan, 0);
          }
          GetAccountID() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }
          GetInstance() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }
          GetAccountType() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }
          GetUniverse() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }
          ConvertTo64BitString() {
            return this.m_ulSteamID.toString();
          }
          Render() {
            switch (this.GetAccountType()) {
              case O.k_EAccountTypeInvalid:
                return (
                  "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case O.k_EAccountTypeClan:
                return (
                  "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case O.k_EAccountTypeAnonGameServer:
                return (
                  "[A:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case O.k_EAccountTypeGameServer:
                return (
                  "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case O.k_EAccountTypeMultiseat:
                return (
                  "[M:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case O.k_EAccountTypePending:
                return (
                  "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case O.k_EAccountTypeContentServer:
                return (
                  "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              default:
                return (
                  "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
            }
          }
          static InitFromString(e) {
            let t = new je();
            try {
              let [n, r, o, a, i] =
                  e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
                s = Number(o),
                _ = Number(a),
                E = i ? Number(i) : 1;
              switch (r) {
                case "I":
                  t.SetFromComponents(_, E, O.k_EAccountTypeInvalid, s);
                case "g":
                  t.SetFromComponents(_, 0, O.k_EAccountTypeClan, s);
                case "A":
                  t.SetFromComponents(_, E, O.k_EAccountTypeAnonGameServer, s);
                case "G":
                  t.SetFromComponents(_, E, O.k_EAccountTypeGameServer, s);
                case "M":
                  t.SetFromComponents(_, E, O.k_EAccountTypeMultiseat, s);
                case "P":
                  t.SetFromComponents(_, E, O.k_EAccountTypePending, s);
                case "C":
                  t.SetFromComponents(_, E, O.k_EAccountTypeContentServer, s);
                case "U":
                  t.SetFromComponents(_, E, O.k_EAccountTypeIndividual, s);
              }
            } catch (e) {}
            return t;
          }
          BIsValid() {
            let e = this.GetAccountType();
            if (e <= O.k_EAccountTypeInvalid || e >= O.k_EAccountTypeMax)
              return !1;
            let t = this.GetUniverse();
            if (t <= w.k_EUniverseInvalid || t >= w.k_EUniverseMax) return !1;
            if (e == O.k_EAccountTypeIndividual) {
              if (0 == this.GetAccountID() || this.GetInstance() > 4) return !1;
            } else if (e == O.k_EAccountTypeClan) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (
              e == O.k_EAccountTypeGameServer &&
              0 == this.GetAccountID()
            )
              return !1;
            return !0;
          }
          BIsIndividualAccount() {
            return this.GetAccountType() == O.k_EAccountTypeIndividual;
          }
          BIsClanAccount() {
            return this.GetAccountType() == O.k_EAccountTypeClan;
          }
          SetAccountID(e) {
            this.m_ulSteamID = new (Oe())(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0,
            );
          }
          SetInstance(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse(),
            );
          }
          SetAccountType(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse(),
            );
          }
          SetUniverse(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e,
            );
          }
          SetFromComponents(e, t, n, r) {
            let o = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
              a = 4294967295 & e;
            this.m_ulSteamID = new (Oe())(a, o, !0);
          }
        }
        var Be = n(42238);
        class We extends Ge {
          BIsExpired() {
            return xe.sm_rtTimeCur >= this.m_rtTimeExpires;
          }
          InitFromPHPInviteLinkInfo(e) {
            this.m_ulChatID = e.chat_id;
            let t = new je(e.steamid_sender);
            t.BIsIndividualAccount() &&
              (this.m_unAccountIDInviter = t.GetAccountID()),
              (this.m_rtTimeExpires = e.time_expires),
              (this.m_bIsBanned = e.banned),
              (this.m_rtKickExpires = e.time_kick_expire),
              e.group_summary &&
                (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        r([Ne.aD], We.prototype, "InitFromPHPInviteLinkInfo", null);
        class xe {
          constructor(e) {
            (this.m_bConnectingToClient = !1),
              (this.m_invite = new We(e.strInviteCode)),
              e.Invite
                ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
                : this.m_invite.InitInvalid(),
              (this.m_htmlPreRendered = e.render),
              this.SendInviteToClient();
          }
          BIsInviteValid() {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }
          GetInvite() {
            return this.m_invite;
          }
          BIsConnectingToClient() {
            return this.m_bConnectingToClient;
          }
          GetConnectResults() {
            return this.m_connectResult;
          }
          GetPreRenderedHTML() {
            return this.m_htmlPreRendered;
          }
          LaunchWebChat() {
            !(function (e) {
              let t = window.open("", "SteamWebChat", "");
              if (!t) return;
              let n = !1,
                r = !1;
              try {
                n = "about:blank" == t.location.href;
              } catch (e) {
                r = !0;
              }
              if (n) {
                if (e) {
                  let n = function (r) {
                    let o = h.COMMUNITY_BASE_URL.replace(
                      /(https?:\/\/[^/]*).*$/,
                      "$1",
                    );
                    r.source == t &&
                      "FriendsUIReady" == r.data &&
                      r.origin == o &&
                      (t.postMessage(e, h.COMMUNITY_BASE_URL),
                      window.removeEventListener("message", n));
                  };
                  window.addEventListener("message", n);
                }
                t.location.href = h.COMMUNITY_BASE_URL + "chat/";
              } else e && t.postMessage(e, h.COMMUNITY_BASE_URL);
              t.focus();
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode(),
            });
          }
          LaunchSteamIgnoreAccount() {
            L.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }
          ForceLaunchSteamClient() {
            window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
          }
          SendInviteToClient() {
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              L.ShowChatRoomGroupInvite(this.m_invite.GetInviteCode()).then(
                (e) => {
                  (0, Ne.z)(() => {
                    (this.m_bConnectingToClient = !1),
                      (this.m_connectResult = e),
                      console.log(e);
                  });
                },
              ));
          }
        }
        r([Ne.LO], xe.prototype, "m_bConnectingToClient", void 0),
          r([Ne.LO], xe.prototype, "m_connectResult", void 0);
        let Ve = class extends a.Component {
          render() {
            return a.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? a.createElement(He, { controller: this.props.controller })
                : a.createElement(Ke, { controller: this.props.controller }),
            );
          }
        };
        Ve = r([Ue.Pi], Ve);
        let He = class extends a.Component {
          constructor() {
            super(...arguments), (this.m_bTriedToLaunchSteam = !1);
          }
          LaunchWebChat() {
            this.props.controller.LaunchWebChat();
          }
          OpenInSteamIgnoreAccount() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }
          LaunchSteamClient() {
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(() => {
                this.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }
          IsMobileDevice() {
            switch (new Be.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }
          render() {
            if (this.props.controller.BIsConnectingToClient())
              return a.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                a.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Pe("#bbcode_invite_requesting_info"),
                ),
              );
            let e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (h.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              r = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (r += " inviteButtonJoinVoice"),
              e.success
                ? a.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    a.createElement(
                      "div",
                      { className: "groupName" },
                      Pe("#InviteLanding_SentToSteam"),
                    ),
                    a.createElement(
                      "div",
                      { className: "inviteLabel" },
                      be(
                        "#InviteLanding_SentToSteam_Desc",
                        a.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          Pe("#InviteLanding_SentToSteam_Desc_LaunchWebChat"),
                        ),
                      ),
                    ),
                  )
                : e.account_mismatch
                ? a.createElement(
                    qe,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    a.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Pe("#InviteLanding_AccountMismatch"),
                    ),
                    a.createElement(
                      "div",
                      { className: "inviteLabel" },
                      a.createElement(
                        "button",
                        {
                          className: r,
                          type: "button",
                          onClick: this.OpenInSteamIgnoreAccount,
                        },
                        Pe("#InviteLanding_OpenInSteam"),
                      ),
                      a.createElement(
                        "button",
                        {
                          className: r,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        Pe("#InviteLanding_OpenInWebChat"),
                      ),
                    ),
                  )
                : e.call_unsupported
                ? a.createElement(
                    "div",
                    { className: "ChatMessageInvite" },
                    a.createElement(
                      "div",
                      { className: "groupName" },
                      Pe("#InviteLanding_SentToSteam"),
                    ),
                    a.createElement(
                      "div",
                      { className: "inviteLabel" },
                      be(
                        "#InviteLanding_SentToSteam_Desc",
                        a.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          Pe("#InviteLanding_SentToSteam_Desc_LaunchWebChat"),
                        ),
                      ),
                    ),
                  )
                : a.createElement(
                    qe,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    a.createElement(
                      "div",
                      { className: "inviteLabel inviteLabelButtons" },
                      !n &&
                        a.createElement(
                          "button",
                          {
                            className: r,
                            type: "button",
                            onClick: this.LaunchSteamClient,
                          },
                          Pe("#InviteLanding_OpenInSteam"),
                        ),
                      a.createElement(
                        "button",
                        {
                          className: r,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        Pe("#InviteLanding_OpenInWebChat"),
                      ),
                    ),
                    this.m_bTriedToLaunchSteam &&
                      a.createElement(
                        "div",
                        { className: "inviteLabel inviteLabelLaunchPrompt" },
                        Pe("#InviteLanding_OpenInSteam_Help"),
                      ),
                  )
            );
          }
        };
        r([Ne.LO], He.prototype, "m_bTriedToLaunchSteam", void 0),
          r([Ie], He.prototype, "LaunchWebChat", null),
          r([Ie], He.prototype, "OpenInSteamIgnoreAccount", null),
          r([Ie], He.prototype, "LaunchSteamClient", null),
          (He = r([Ue.Pi], He));
        class Ke extends a.Component {
          render() {
            return a.createElement(
              "div",
              { className: "ChatMessageInvite" },
              a.createElement(
                "div",
                { className: "postedExpiredInvite" },
                Pe("#InviteLanding_ExpiredOrInvalid"),
              ),
            );
          }
        }
        function qe(e) {
          return a.createElement(
            "div",
            { className: "ChatMessageInvite" },
            a.createElement("div", {
              className: "leftInviteContainer",
              dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
            }),
            a.createElement(
              "div",
              { className: "rightInviteContainer" },
              a.createElement(
                "div",
                { className: "inviteLabel" },
                be(
                  "#bbcode_invite_description",
                  a.createElement("span", {
                    dangerouslySetInnerHTML: {
                      __html: e.render.strInviterNameLinkHTML,
                    },
                  }),
                ),
              ),
              a.createElement(
                "div",
                { className: "groupName" },
                e.render.strChatRoomGroupName,
              ),
              e.children,
            ),
          );
        }
        window.AssertMsg = De;
        let ze = new R();
        function $e(e) {
          let t;
          try {
            t = JSON.parse(e.getAttribute("data-inviteinfo"));
          } catch (e) {}
          xe.sm_rtTimeCur = t.rtTimeCur;
          let n = new xe(t);
          s.render(a.createElement(Ve, { controller: n }), e);
        }
        (window.ClientConnectionAPI = ze),
          document.addEventListener("DOMContentLoaded", function () {
            return o(this, void 0, void 0, function* () {
              u(),
                yield (function (e) {
                  return o(this, void 0, void 0, function* () {
                    const t = Ae.GetLanguageFallback(e),
                      r = e === t,
                      [o, a, i, s] = yield Promise.all([
                        n(41171)(`./shared_${e}.json`),
                        n(3119)(`./friendsui_${e}.json`),
                        r ? {} : n(91090)(`./shared_${t}.json`),
                        r ? {} : n(9014)(`./friendsui_${t}.json`),
                      ]);
                    Fe.AddTokens(
                      Object.assign(Object.assign({}, o), a),
                      Object.assign(Object.assign({}, i), s),
                    );
                  });
                })(h.LANGUAGE),
                (function () {
                  let e = document.querySelectorAll(".ChatReactRoot");
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t],
                      r = n.getAttribute("data-component");
                    "ChatInvite" === r
                      ? $e(n)
                      : De(!1, `unknown component: "${r}"`);
                  }
                })();
            });
          });
      },
      801: (e, t, n) => {
        "use strict";
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet",
            ),
          console.assert(
            123 === Array.from(new Set([123]))[0],
            "Should not include prototypejs.",
          );
      },
      3119: (e, t, n) => {
        var r = {
          "./friendsui_arabic.json": [58480, 6992],
          "./friendsui_brazilian.json": [33109, 2862],
          "./friendsui_bulgarian.json": [5242, 8518],
          "./friendsui_czech.json": [98399, 4448],
          "./friendsui_danish.json": [34581, 9775],
          "./friendsui_dutch.json": [27904, 7575],
          "./friendsui_english.json": [67927, 8247],
          "./friendsui_finnish.json": [63907, 4596],
          "./friendsui_french.json": [49877, 3500],
          "./friendsui_german.json": [90262, 4989],
          "./friendsui_greek.json": [84583, 1471],
          "./friendsui_hungarian.json": [85581, 5802],
          "./friendsui_indonesian.json": [37371, 6646],
          "./friendsui_italian.json": [31577, 8815],
          "./friendsui_japanese.json": [86521, 6727],
          "./friendsui_koreana.json": [73827, 6986],
          "./friendsui_latam.json": [13236, 7651],
          "./friendsui_norwegian.json": [19181, 4716],
          "./friendsui_polish.json": [3751, 699],
          "./friendsui_portuguese.json": [21520, 4264],
          "./friendsui_romanian.json": [98235, 3182],
          "./friendsui_russian.json": [99942, 2913],
          "./friendsui_sc_schinese.json": [64522, 3140],
          "./friendsui_schinese.json": [19456, 7706],
          "./friendsui_spanish.json": [12011, 3471],
          "./friendsui_swedish.json": [66100, 9818],
          "./friendsui_tchinese.json": [74628, 7340],
          "./friendsui_thai.json": [88902, 9263],
          "./friendsui_turkish.json": [95797, 5632],
          "./friendsui_ukrainian.json": [83292, 2822],
          "./friendsui_vietnamese.json": [39248, 1635],
        };
        function o(e) {
          if (!n.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            o = t[0];
          return n.e(t[1]).then(() => n.t(o, 19));
        }
        (o.keys = () => Object.keys(r)), (o.id = 3119), (e.exports = o);
      },
      9014: (e, t, n) => {
        var r = {
          "./friendsui_arabic.json": [58480, 6992],
          "./friendsui_brazilian.json": [33109, 2862],
          "./friendsui_bulgarian.json": [5242, 8518],
          "./friendsui_czech.json": [98399, 4448],
          "./friendsui_danish.json": [34581, 9775],
          "./friendsui_dutch.json": [27904, 7575],
          "./friendsui_english.json": [67927, 8247],
          "./friendsui_finnish.json": [63907, 4596],
          "./friendsui_french.json": [49877, 3500],
          "./friendsui_german.json": [90262, 4989],
          "./friendsui_greek.json": [84583, 1471],
          "./friendsui_hungarian.json": [85581, 5802],
          "./friendsui_indonesian.json": [37371, 6646],
          "./friendsui_italian.json": [31577, 8815],
          "./friendsui_japanese.json": [86521, 6727],
          "./friendsui_koreana.json": [73827, 6986],
          "./friendsui_latam.json": [13236, 7651],
          "./friendsui_norwegian.json": [19181, 4716],
          "./friendsui_polish.json": [3751, 699],
          "./friendsui_portuguese.json": [21520, 4264],
          "./friendsui_romanian.json": [98235, 3182],
          "./friendsui_russian.json": [99942, 2913],
          "./friendsui_sc_schinese.json": [64522, 3140],
          "./friendsui_schinese.json": [19456, 7706],
          "./friendsui_spanish.json": [12011, 3471],
          "./friendsui_swedish.json": [66100, 9818],
          "./friendsui_tchinese.json": [74628, 7340],
          "./friendsui_thai.json": [88902, 9263],
          "./friendsui_turkish.json": [95797, 5632],
          "./friendsui_ukrainian.json": [83292, 2822],
          "./friendsui_vietnamese.json": [39248, 1635],
        };
        function o(e) {
          if (!n.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            o = t[0];
          return n.e(t[1]).then(() => n.t(o, 19));
        }
        (o.keys = () => Object.keys(r)), (o.id = 9014), (e.exports = o);
      },
      41171: (e, t, n) => {
        var r = {
          "./shared_arabic.json": [78501, 2431],
          "./shared_brazilian.json": [55106, 8385],
          "./shared_bulgarian.json": [34469, 1313],
          "./shared_czech.json": [93182, 4189],
          "./shared_danish.json": [87113, 9753],
          "./shared_dutch.json": [80737, 5925],
          "./shared_english.json": [48751, 7975],
          "./shared_finnish.json": [7817, 3557],
          "./shared_french.json": [50731, 3112],
          "./shared_german.json": [54811, 6007],
          "./shared_greek.json": [90175, 4297],
          "./shared_hungarian.json": [49628, 5948],
          "./shared_indonesian.json": [46741, 8754],
          "./shared_italian.json": [90116, 5933],
          "./shared_japanese.json": [15055, 2844],
          "./shared_koreana.json": [82062, 6542],
          "./shared_latam.json": [97679, 2443],
          "./shared_norwegian.json": [33469, 4108],
          "./shared_polish.json": [13255, 3252],
          "./shared_portuguese.json": [77294, 5849],
          "./shared_romanian.json": [3850, 4823],
          "./shared_russian.json": [76440, 9062],
          "./shared_sc_schinese.json": [16386, 2029],
          "./shared_schinese.json": [65933, 2537],
          "./shared_spanish.json": [2712, 6492],
          "./shared_swedish.json": [85835, 5625],
          "./shared_tchinese.json": [85918, 7602],
          "./shared_thai.json": [63269, 1162],
          "./shared_turkish.json": [27810, 5438],
          "./shared_ukrainian.json": [32110, 7781],
          "./shared_vietnamese.json": [59201, 4964],
        };
        function o(e) {
          if (!n.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            o = t[0];
          return n.e(t[1]).then(() => n.t(o, 19));
        }
        (o.keys = () => Object.keys(r)), (o.id = 41171), (e.exports = o);
      },
      91090: (e, t, n) => {
        var r = {
          "./shared_arabic.json": [78501, 2431],
          "./shared_brazilian.json": [55106, 8385],
          "./shared_bulgarian.json": [34469, 1313],
          "./shared_czech.json": [93182, 4189],
          "./shared_danish.json": [87113, 9753],
          "./shared_dutch.json": [80737, 5925],
          "./shared_english.json": [48751, 7975],
          "./shared_finnish.json": [7817, 3557],
          "./shared_french.json": [50731, 3112],
          "./shared_german.json": [54811, 6007],
          "./shared_greek.json": [90175, 4297],
          "./shared_hungarian.json": [49628, 5948],
          "./shared_indonesian.json": [46741, 8754],
          "./shared_italian.json": [90116, 5933],
          "./shared_japanese.json": [15055, 2844],
          "./shared_koreana.json": [82062, 6542],
          "./shared_latam.json": [97679, 2443],
          "./shared_norwegian.json": [33469, 4108],
          "./shared_polish.json": [13255, 3252],
          "./shared_portuguese.json": [77294, 5849],
          "./shared_romanian.json": [3850, 4823],
          "./shared_russian.json": [76440, 9062],
          "./shared_sc_schinese.json": [16386, 2029],
          "./shared_schinese.json": [65933, 2537],
          "./shared_spanish.json": [2712, 6492],
          "./shared_swedish.json": [85835, 5625],
          "./shared_tchinese.json": [85918, 7602],
          "./shared_thai.json": [63269, 1162],
          "./shared_turkish.json": [27810, 5438],
          "./shared_ukrainian.json": [32110, 7781],
          "./shared_vietnamese.json": [59201, 4964],
        };
        function o(e) {
          if (!n.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            o = t[0];
          return n.e(t[1]).then(() => n.t(o, 19));
        }
        (o.keys = () => Object.keys(r)), (o.id = 91090), (e.exports = o);
      },
      87363: (e) => {
        "use strict";
        e.exports = React;
      },
      61533: (e) => {
        "use strict";
        e.exports = ReactDOM;
      },
    },
    i = {};
  function s(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return a[e].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.m = a),
    (s.amdO = {}),
    (e = []),
    (s.O = (t, n, r, o) => {
      if (!n) {
        var a = 1 / 0;
        for (k = 0; k < e.length; k++) {
          for (var [n, r, o] = e[k], i = !0, _ = 0; _ < n.length; _++)
            (!1 & o || a >= o) && Object.keys(s.O).every((e) => s.O[e](n[_]))
              ? n.splice(_--, 1)
              : ((i = !1), o < a && (a = o));
          if (i) {
            e.splice(k--, 1);
            var E = r();
            void 0 !== E && (t = E);
          }
        }
        return t;
      }
      o = o || 0;
      for (var k = e.length; k > 0 && e[k - 1][2] > o; k--) e[k] = e[k - 1];
      e[k] = [n, r, o];
    }),
    (s.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return s.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (s.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var o = Object.create(null);
      s.r(o);
      var a = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var i = 2 & r && e; "object" == typeof i && !~t.indexOf(i); i = n(i))
        Object.getOwnPropertyNames(i).forEach((t) => (a[t] = () => e[t]));
      return (a.default = () => e), s.d(o, a), o;
    }),
    (s.d = (e, t) => {
      for (var n in t)
        s.o(t, n) &&
          !s.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (s.f = {}),
    (s.e = (e) =>
      Promise.all(Object.keys(s.f).reduce((t, n) => (s.f[n](e, t), t), []))),
    (s.u = (e) =>
      "javascript/webui/" +
      {
        699: "friendsui_polish-json",
        1162: "shared_thai-json",
        1313: "shared_bulgarian-json",
        1471: "friendsui_greek-json",
        1635: "friendsui_vietnamese-json",
        2029: "shared_sc_schinese-json",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2537: "shared_schinese-json",
        2822: "friendsui_ukrainian-json",
        2844: "shared_japanese-json",
        2862: "friendsui_brazilian-json",
        2913: "friendsui_russian-json",
        3112: "shared_french-json",
        3140: "friendsui_sc_schinese-json",
        3182: "friendsui_romanian-json",
        3252: "shared_polish-json",
        3471: "friendsui_spanish-json",
        3500: "friendsui_french-json",
        3557: "shared_finnish-json",
        4108: "shared_norwegian-json",
        4189: "shared_czech-json",
        4264: "friendsui_portuguese-json",
        4297: "shared_greek-json",
        4448: "friendsui_czech-json",
        4596: "friendsui_finnish-json",
        4716: "friendsui_norwegian-json",
        4823: "shared_romanian-json",
        4964: "shared_vietnamese-json",
        4989: "friendsui_german-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5632: "friendsui_turkish-json",
        5802: "friendsui_hungarian-json",
        5849: "shared_portuguese-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6646: "friendsui_indonesian-json",
        6727: "friendsui_japanese-json",
        6986: "friendsui_koreana-json",
        6992: "friendsui_arabic-json",
        7340: "friendsui_tchinese-json",
        7575: "friendsui_dutch-json",
        7602: "shared_tchinese-json",
        7651: "friendsui_latam-json",
        7706: "friendsui_schinese-json",
        7781: "shared_ukrainian-json",
        7975: "shared_english-json",
        8247: "friendsui_english-json",
        8385: "shared_brazilian-json",
        8518: "friendsui_bulgarian-json",
        8754: "shared_indonesian-json",
        8815: "friendsui_italian-json",
        9062: "shared_russian-json",
        9263: "friendsui_thai-json",
        9753: "shared_danish-json",
        9775: "friendsui_danish-json",
        9818: "friendsui_swedish-json",
      }[e] +
      ".js?contenthash=" +
      {
        699: "e520ea8eb741214a85ed",
        1162: "6face1ce241db7d805d1",
        1313: "01b81fd0489a9df46172",
        1471: "8a7c96aba4149abffa26",
        1635: "80689dbce9ef30fb5333",
        2029: "83a760c7c563af7ff575",
        2431: "3f330a391b919f3bb87d",
        2443: "f430000db684c1bd4a8a",
        2537: "cfb45b242241c3546f8b",
        2822: "1930acba561078a18a98",
        2844: "dfd2bd3f71f4701b6585",
        2862: "919b0f8467aa4d0dd8af",
        2913: "9caa9f9765f6b6fbfe0d",
        3112: "50b2f28a3889df1202f8",
        3140: "67232a94c8f87bf86abf",
        3182: "626a386cb26ef9f94014",
        3252: "fa9944733a30c3dca2b2",
        3471: "3d722f5b01571f009d05",
        3500: "97f103206f5759b7ea62",
        3557: "3a89d8c2597c825c679f",
        4108: "8d16101ae85b2db1c5b9",
        4189: "a8ad297548acc61734a2",
        4264: "3f7370d48d57123da3f4",
        4297: "b62bbbbabb13465d5812",
        4448: "dc34ef362bd30950e27e",
        4596: "b64463f287913ed1b4f2",
        4716: "0d03a3ed1cc805af2770",
        4823: "e78afc9d14930cb5d7c1",
        4964: "d015397109d74df4e1da",
        4989: "7080a6ac094d0c96366d",
        5438: "02e47b1e2b040da7617f",
        5625: "60c62e2a399ded6bd73f",
        5632: "04842b46cd85e9d1fb8a",
        5802: "debc3461bbf286c8c1df",
        5849: "70ff68afc2020c6d31ac",
        5925: "a85ace5107c3a991660e",
        5933: "546de4cecd87cde98ac8",
        5948: "7b953e27c39b26695705",
        6007: "455c5bd2e438bf21a87e",
        6492: "1efe58a7456da35fbe10",
        6542: "7cf1946fcfa49d9ee58c",
        6646: "6424317e3f55a734bbf0",
        6727: "5397cc56d81a1b5aed19",
        6986: "c54148885851b5b1f61d",
        6992: "3b30a7e01544619acb07",
        7340: "dd947cee9875884305e1",
        7575: "3e33390f518ecc16c2e0",
        7602: "ceecf580c27ccf41a99c",
        7651: "fb4e6926db7d5298f24e",
        7706: "415e651d68936074233f",
        7781: "77c6a2891eb525a382b1",
        7975: "3215658d5c377fc984a6",
        8247: "f25e033938692b5767ad",
        8385: "0ce4c6ddd37c67ee565c",
        8518: "4a0aecf8c58aa429e523",
        8754: "85b0cf0e3f89b04a934e",
        8815: "1f786d86346bdbc68758",
        9062: "735283f11a1a968b4732",
        9263: "5b426ad2267812e707ed",
        9753: "933a9878c1a620c103ec",
        9775: "660b7785225eab50cda3",
        9818: "f7b856f8c101aa9cae33",
      }[e]),
    (s.miniCssF = (e) => {}),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r = {}),
    (o = "@steam/friendsui:"),
    (s.l = (e, t, n, a) => {
      if (r[e]) r[e].push(t);
      else {
        var i, _;
        if (void 0 !== n)
          for (
            var E = document.getElementsByTagName("script"), k = 0;
            k < E.length;
            k++
          ) {
            var l = E[k];
            if (
              l.getAttribute("src") == e ||
              l.getAttribute("data-webpack") == o + n
            ) {
              i = l;
              break;
            }
          }
        i ||
          ((_ = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          s.nc && i.setAttribute("nonce", s.nc),
          i.setAttribute("data-webpack", o + n),
          (i.src = e)),
          (r[e] = [t]);
        var c = (t, n) => {
            (i.onerror = i.onload = null), clearTimeout(u);
            var o = r[e];
            if (
              (delete r[e],
              i.parentNode && i.parentNode.removeChild(i),
              o && o.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          u = setTimeout(
            c.bind(null, void 0, { type: "timeout", target: i }),
            12e4,
          );
        (i.onerror = c.bind(null, i.onerror)),
          (i.onload = c.bind(null, i.onload)),
          _ && document.head.appendChild(i);
      }
    }),
    (s.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (s.j = 1856),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + "");
      var t = s.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (s.p = e + "../../");
    })(),
    (() => {
      var e = { 1856: 0 };
      (s.f.j = (t, n) => {
        var r = s.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var o = new Promise((n, o) => (r = e[t] = [n, o]));
            n.push((r[2] = o));
            var a = s.p + s.u(t),
              i = new Error();
            s.l(
              a,
              (n) => {
                if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    a = n && n.target && n.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = o),
                    (i.request = a),
                    r[1](i);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (s.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var r,
            o,
            [a, i, _] = n,
            E = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (r in i) s.o(i, r) && (s.m[r] = i[r]);
            if (_) var k = _(s);
          }
          for (t && t(n); E < a.length; E++)
            (o = a[E]), s.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return s.O(k);
        },
        n = (self.webpackChunk_steam_friendsui =
          self.webpackChunk_steam_friendsui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var _ = s.O(void 0, [5968], () => s(35713));
  _ = s.O(_);
})();

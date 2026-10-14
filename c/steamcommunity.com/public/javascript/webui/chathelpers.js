import { _ } from "./rolldown-runtime.js?contenthash=DJ-tr2kv";
import { _ } from "./_rolldown_dynamic_import_helper.js?contenthash=CTnqBgWP";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./localization.js?contenthash=Br1tNTwO";
import { _, _, _, _, _, _ } from "./webpackinit.js?contenthash=DGcw2nWL";
var _ = _(_()),
  _ = _(_());
function _(_) {
  let _ = window.open(``, `SteamWebChat`, ``);
  if (!_) return;
  let _ = !1;
  try {
    _ = _.location.href == `about:blank`;
  } catch {}
  if (_) {
    if (_) {
      let _ = function (_) {
        let _ = _.COMMUNITY_BASE_URL.replace(/(https?:\/\/[^/]*).*$/, `$1`);
        _.source == _ &&
          _.data == `FriendsUIReady` &&
          _.origin == _ &&
          (_.postMessage(_, _.COMMUNITY_BASE_URL),
          window.removeEventListener(`message`, _));
      };
      window.addEventListener(`message`, _);
    }
    _.location.href = _.COMMUNITY_BASE_URL + `chat/`;
  } else _ && _.postMessage(_, _.COMMUNITY_BASE_URL);
  _.focus();
}
var _ = _(),
  _ = _(),
  _ = class extends _ {
    constructor(_) {
      super(_), _(this);
    }
    BIsExpired() {
      return _.sm_rtTimeCur >= this.m_rtTimeExpires;
    }
    InitFromPHPInviteLinkInfo(_) {
      this.m_ulChatID = _.chat_id;
      let _ = new _(_.steamid_sender);
      _.BIsIndividualAccount() &&
        (this.m_unAccountIDInviter = _.GetAccountID()),
        (this.m_rtTimeExpires = _.time_expires),
        (this.m_bIsBanned = _.banned),
        (this.m_rtKickExpires = _.time_kick_expire),
        _.group_summary &&
          (this.m_ulChatRoomGroupID = _.group_summary.chat_group_id),
        (this.m_bValid = !0),
        (this.m_bReady = !0);
    }
  };
_([_], _.prototype, `InitFromPHPInviteLinkInfo`, null);
var _ = class {
  m_bConnectingToClient = !1;
  m_invite;
  m_htmlPreRendered;
  static sm_rtTimeCur;
  constructor(_) {
    _(this),
      (this.m_invite = new _(_.strInviteCode)),
      _.Invite
        ? this.m_invite.InitFromPHPInviteLinkInfo(_.Invite)
        : this.m_invite.InitInvalid(),
      (this.m_htmlPreRendered = _.render);
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
  GetPreRenderedHTML() {
    return this.m_htmlPreRendered;
  }
  LaunchWebChat() {
    _({
      command: `ShowChatRoomGroupInvite`,
      invite_code: this.m_invite.GetInviteCode(),
    });
  }
  ForceLaunchSteamClient() {
    window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
  }
};
_([_], _.prototype, `m_bConnectingToClient`, void 0);
var _ = class extends _.Component {
  render() {
    return (0, _.jsx)(`div`, {
      className: `InviteLandingRoot`,
      children: this.props.controller.BIsInviteValid()
        ? (0, _.jsx)(_, {
            controller: this.props.controller,
          })
        : (0, _.jsx)(_, {
            controller: this.props.controller,
          }),
    });
  }
};
_ = _([_], _);
var _ = class extends _.Component {
  constructor(_) {
    super(_), _(this);
  }
  m_bTriedToLaunchSteam = !1;
  LaunchWebChat() {
    this.props.controller.LaunchWebChat();
  }
  LaunchSteamClient() {
    this.props.controller.ForceLaunchSteamClient(),
      window.setTimeout(() => {
        this.m_bTriedToLaunchSteam = !0;
      }, 1e3);
  }
  IsMobileDevice() {
    switch (new _.UAParser(navigator.userAgent).getResult()._.name) {
      case `iOS`:
      case `Android`:
      case `BlackBerry`:
        return !0;
    }
    return !1;
  }
  render() {
    let _ = this.props.controller.GetInvite(),
      _ = this.IsMobileDevice(),
      _ = `inviteButton inviteButtonJoinChat`;
    return (
      _.BIsVoiceChatInvite() && (_ += ` inviteButtonJoinVoice`),
      (0, _.jsxs)(_, {
        render: this.props.controller.GetPreRenderedHTML(),
        children: [
          (0, _.jsxs)(`div`, {
            className: `inviteLabel inviteLabelButtons`,
            children: [
              !_ &&
                (0, _.jsx)(`button`, {
                  className: _,
                  type: `button`,
                  onClick: this.LaunchSteamClient,
                  children: _(`#InviteLanding_OpenInSteam`),
                }),
              (0, _.jsx)(`button`, {
                className: _,
                type: `button`,
                onClick: this.LaunchWebChat,
                children: _(`#InviteLanding_OpenInWebChat`),
              }),
            ],
          }),
          this.m_bTriedToLaunchSteam &&
            (0, _.jsx)(`div`, {
              className: `inviteLabel inviteLabelLaunchPrompt`,
              children: _(`#InviteLanding_OpenInSteam_Help`),
            }),
        ],
      })
    );
  }
};
_([_], _.prototype, `m_bTriedToLaunchSteam`, void 0),
  _([_], _.prototype, `LaunchWebChat`, null),
  _([_], _.prototype, `LaunchSteamClient`, null),
  (_ = _([_], _));
var _ = class extends _.Component {
  render() {
    return (0, _.jsx)(`div`, {
      className: `ChatMessageInvite`,
      children: (0, _.jsx)(`div`, {
        className: `postedExpiredInvite`,
        children: _(`#InviteLanding_ExpiredOrInvalid`),
      }),
    });
  }
};
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: `ChatMessageInvite`,
    children: [
      (0, _.jsx)(`div`, {
        className: `leftInviteContainer`,
        dangerouslySetInnerHTML: {
          __html: _.render.strAvatarHTML,
        },
      }),
      (0, _.jsxs)(`div`, {
        className: `rightInviteContainer`,
        children: [
          (0, _.jsx)(`div`, {
            className: `inviteLabel`,
            children: _(
              `#bbcode_invite_description`,
              (0, _.jsx)(`span`, {
                dangerouslySetInnerHTML: {
                  __html: _.render.strInviterNameLinkHTML,
                },
              }),
            ),
          }),
          (0, _.jsx)(`div`, {
            className: `groupName`,
            children: _.render.strChatRoomGroupName,
          }),
          _.children,
        ],
      }),
    ],
  });
}
window.AssertMsg = _;
function _() {
  let _ = document.querySelectorAll(`.ChatReactRoot`);
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_],
      _ = _.getAttribute(`data-component`);
    switch (_) {
      case `ChatInvite`:
        _(_);
        break;
      default:
        _(!1, `unknown component: "${_}"`);
    }
  }
}
function _(_) {
  let _;
  try {
    _ = JSON.parse(_.getAttribute(`data-inviteinfo`));
  } catch {}
  _.sm_rtTimeCur = _.rtTimeCur;
  let _ = new _(_);
  _.createRoot(_).render(
    _.createElement(_, {
      controller: _,
    }),
  );
}
document.addEventListener(`DOMContentLoaded`, async function () {
  _(), await _(_.LANGUAGE), _();
});
async function _(_) {
  let _ = _.GetLanguageFallback(_),
    _ = _ === _,
    [_, _] = await Promise.all([
      _(
        Object.assign({
          "../localization/friendsui_arabic.json": () =>
            _(
              () => import(`./friendsui_arabic.js?contenthash=D50npDjR`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_brazilian.json": () =>
            _(
              () => import(`./friendsui_brazilian.js?contenthash=pvyQsUlZ`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_bulgarian.json": () =>
            _(
              () => import(`./friendsui_bulgarian.js?contenthash=D31_kaXc`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_czech.json": () =>
            _(
              () => import(`./friendsui_czech.js?contenthash=DZUFfG-h`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_danish.json": () =>
            _(
              () => import(`./friendsui_danish.js?contenthash=BgW143sf`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_dutch.json": () =>
            _(
              () => import(`./friendsui_dutch.js?contenthash=Oz1dxKub`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_english.json": () =>
            _(
              () => import(`./friendsui_english.js?contenthash=ClJW6Wca`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_finnish.json": () =>
            _(
              () => import(`./friendsui_finnish.js?contenthash=CmxZ8MOI`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_french.json": () =>
            _(
              () => import(`./friendsui_french.js?contenthash=Dpe4fOza`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_german.json": () =>
            _(
              () => import(`./friendsui_german.js?contenthash=Cwwt8H0x`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_greek.json": () =>
            _(
              () => import(`./friendsui_greek.js?contenthash=CMWU6SjD`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_hungarian.json": () =>
            _(
              () => import(`./friendsui_hungarian.js?contenthash=DiUNpLQ-`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_indonesian.json": () =>
            _(
              () => import(`./friendsui_indonesian.js?contenthash=Y9D1hIus`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_italian.json": () =>
            _(
              () => import(`./friendsui_italian.js?contenthash=ClTymPYq`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_japanese.json": () =>
            _(
              () => import(`./friendsui_japanese.js?contenthash=AaBGMYwD`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_koreana.json": () =>
            _(
              () => import(`./friendsui_koreana.js?contenthash=DD-SW52I`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_latam.json": () =>
            _(
              () => import(`./friendsui_latam.js?contenthash=DeTqZtgQ`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_malay.json": () =>
            _(
              () => import(`./friendsui_malay.js?contenthash=D5ILfRAB`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_norwegian.json": () =>
            _(
              () => import(`./friendsui_norwegian.js?contenthash=C_37mX8t`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_polish.json": () =>
            _(
              () => import(`./friendsui_polish.js?contenthash=Avupht_Z`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_portuguese.json": () =>
            _(
              () => import(`./friendsui_portuguese.js?contenthash=CqB9Q5TD`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_romanian.json": () =>
            _(
              () => import(`./friendsui_romanian.js?contenthash=DVtIiRWA`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_russian.json": () =>
            _(
              () => import(`./friendsui_russian.js?contenthash=DbOAtRRo`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_sc_schinese.json": () =>
            _(
              () => import(`./friendsui_sc_schinese.js?contenthash=CP_BnaQW`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_schinese.json": () =>
            _(
              () => import(`./friendsui_schinese.js?contenthash=CrmZAQSk`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_spanish.json": () =>
            _(
              () => import(`./friendsui_spanish.js?contenthash=BvzNUnmV`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_swedish.json": () =>
            _(
              () => import(`./friendsui_swedish.js?contenthash=DmGppAkf`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_tchinese.json": () =>
            _(
              () => import(`./friendsui_tchinese.js?contenthash=C6MeSZx4`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_thai.json": () =>
            _(
              () => import(`./friendsui_thai.js?contenthash=Bp5sipsi`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_turkish.json": () =>
            _(
              () => import(`./friendsui_turkish.js?contenthash=cSvgHtQG`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_ukrainian.json": () =>
            _(
              () => import(`./friendsui_ukrainian.js?contenthash=B_a5q3yx`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_vietnamese.json": () =>
            _(
              () => import(`./friendsui_vietnamese.js?contenthash=BokVGROU`),
              [],
              import.meta.url,
            ),
        }),
        `../localization/friendsui_${_}.json`,
        3,
      ),
      _
        ? {}
        : _(
            Object.assign({
              "../localization/friendsui_arabic.json": () =>
                _(
                  () => import(`./friendsui_arabic.js?contenthash=D50npDjR`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_brazilian.json": () =>
                _(
                  () => import(`./friendsui_brazilian.js?contenthash=pvyQsUlZ`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_bulgarian.json": () =>
                _(
                  () => import(`./friendsui_bulgarian.js?contenthash=D31_kaXc`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_czech.json": () =>
                _(
                  () => import(`./friendsui_czech.js?contenthash=DZUFfG-h`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_danish.json": () =>
                _(
                  () => import(`./friendsui_danish.js?contenthash=BgW143sf`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_dutch.json": () =>
                _(
                  () => import(`./friendsui_dutch.js?contenthash=Oz1dxKub`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_english.json": () =>
                _(
                  () => import(`./friendsui_english.js?contenthash=ClJW6Wca`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_finnish.json": () =>
                _(
                  () => import(`./friendsui_finnish.js?contenthash=CmxZ8MOI`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_french.json": () =>
                _(
                  () => import(`./friendsui_french.js?contenthash=Dpe4fOza`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_german.json": () =>
                _(
                  () => import(`./friendsui_german.js?contenthash=Cwwt8H0x`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_greek.json": () =>
                _(
                  () => import(`./friendsui_greek.js?contenthash=CMWU6SjD`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_hungarian.json": () =>
                _(
                  () => import(`./friendsui_hungarian.js?contenthash=DiUNpLQ-`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_indonesian.json": () =>
                _(
                  () =>
                    import(`./friendsui_indonesian.js?contenthash=Y9D1hIus`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_italian.json": () =>
                _(
                  () => import(`./friendsui_italian.js?contenthash=ClTymPYq`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_japanese.json": () =>
                _(
                  () => import(`./friendsui_japanese.js?contenthash=AaBGMYwD`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_koreana.json": () =>
                _(
                  () => import(`./friendsui_koreana.js?contenthash=DD-SW52I`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_latam.json": () =>
                _(
                  () => import(`./friendsui_latam.js?contenthash=DeTqZtgQ`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_malay.json": () =>
                _(
                  () => import(`./friendsui_malay.js?contenthash=D5ILfRAB`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_norwegian.json": () =>
                _(
                  () => import(`./friendsui_norwegian.js?contenthash=C_37mX8t`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_polish.json": () =>
                _(
                  () => import(`./friendsui_polish.js?contenthash=Avupht_Z`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_portuguese.json": () =>
                _(
                  () =>
                    import(`./friendsui_portuguese.js?contenthash=CqB9Q5TD`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_romanian.json": () =>
                _(
                  () => import(`./friendsui_romanian.js?contenthash=DVtIiRWA`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_russian.json": () =>
                _(
                  () => import(`./friendsui_russian.js?contenthash=DbOAtRRo`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_sc_schinese.json": () =>
                _(
                  () =>
                    import(`./friendsui_sc_schinese.js?contenthash=CP_BnaQW`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_schinese.json": () =>
                _(
                  () => import(`./friendsui_schinese.js?contenthash=CrmZAQSk`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_spanish.json": () =>
                _(
                  () => import(`./friendsui_spanish.js?contenthash=BvzNUnmV`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_swedish.json": () =>
                _(
                  () => import(`./friendsui_swedish.js?contenthash=DmGppAkf`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_tchinese.json": () =>
                _(
                  () => import(`./friendsui_tchinese.js?contenthash=C6MeSZx4`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_thai.json": () =>
                _(
                  () => import(`./friendsui_thai.js?contenthash=Bp5sipsi`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_turkish.json": () =>
                _(
                  () => import(`./friendsui_turkish.js?contenthash=cSvgHtQG`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_ukrainian.json": () =>
                _(
                  () => import(`./friendsui_ukrainian.js?contenthash=B_a5q3yx`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_vietnamese.json": () =>
                _(
                  () =>
                    import(`./friendsui_vietnamese.js?contenthash=BokVGROU`),
                  [],
                  import.meta.url,
                ),
            }),
            `../localization/friendsui_${_}.json`,
            3,
          ),
      _.Ready(),
    ]);
  _.AddTokens(_, _);
}

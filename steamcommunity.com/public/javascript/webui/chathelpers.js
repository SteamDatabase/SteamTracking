/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=DJ-tr2kv";
import { t } from "./_rolldown_dynamic_import_helper.js?contenthash=CTnqBgWP";
import {
  An as n,
  B as r,
  Bn as i,
  Ct as a,
  I as o,
  J as s,
  T as c,
  a as l,
  gr as u,
  kt as d,
  l as f,
  n as p,
  o as m,
  q as h,
  w as g,
} from "./localization.js?contenthash=1KsDFgsE";
import {
  c as _,
  i as v,
  l as y,
  n as b,
  r as x,
  t as S,
} from "./webpackinit.js?contenthash=3oCD-YfP";
var C = e(u()),
  w = e(S());
function T(e) {
  let t = window.open(``, `SteamWebChat`, ``);
  if (!t) return;
  let n = !1;
  try {
    n = t.location.href == `about:blank`;
  } catch {}
  if (n) {
    if (e) {
      let n = function (r) {
        let i = d.COMMUNITY_BASE_URL.replace(/(https?:\/\/[^/]*).*$/, `$1`);
        r.source == t &&
          r.data == `FriendsUIReady` &&
          r.origin == i &&
          (t.postMessage(e, d.COMMUNITY_BASE_URL),
          window.removeEventListener(`message`, n));
      };
      window.addEventListener(`message`, n);
    }
    t.location.href = d.COMMUNITY_BASE_URL + `chat/`;
  } else e && t.postMessage(e, d.COMMUNITY_BASE_URL);
  t.focus();
}
var E = x(),
  D = b(),
  O = class extends _ {
    constructor(e) {
      super(e), h(this);
    }
    BIsExpired() {
      return k.sm_rtTimeCur >= this.m_rtTimeExpires;
    }
    InitFromPHPInviteLinkInfo(e) {
      this.m_ulChatID = e.chat_id;
      let t = new y(e.steamid_sender);
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
  };
o([r], O.prototype, `InitFromPHPInviteLinkInfo`, null);
var k = class {
  m_bConnectingToClient = !1;
  m_invite;
  m_htmlPreRendered;
  static sm_rtTimeCur;
  constructor(e) {
    h(this),
      (this.m_invite = new O(e.strInviteCode)),
      e.Invite
        ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
        : this.m_invite.InitInvalid(),
      (this.m_htmlPreRendered = e.render);
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
    T({
      command: `ShowChatRoomGroupInvite`,
      invite_code: this.m_invite.GetInviteCode(),
    });
  }
  ForceLaunchSteamClient() {
    window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
  }
};
o([s], k.prototype, `m_bConnectingToClient`, void 0);
var A = class extends C.Component {
  render() {
    return (0, D.jsx)(`div`, {
      className: `InviteLandingRoot`,
      children: this.props.controller.BIsInviteValid()
        ? (0, D.jsx)(j, { controller: this.props.controller })
        : (0, D.jsx)(M, { controller: this.props.controller }),
    });
  }
};
A = o([v], A);
var j = class extends C.Component {
  constructor(e) {
    super(e), h(this);
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
    switch (new E.UAParser(navigator.userAgent).getResult().os.name) {
      case `iOS`:
      case `Android`:
      case `BlackBerry`:
        return !0;
    }
    return !1;
  }
  render() {
    let e = this.props.controller.GetInvite(),
      t = this.IsMobileDevice(),
      n = `inviteButton inviteButtonJoinChat`;
    return (
      e.BIsVoiceChatInvite() && (n += ` inviteButtonJoinVoice`),
      (0, D.jsxs)(N, {
        render: this.props.controller.GetPreRenderedHTML(),
        children: [
          (0, D.jsxs)(`div`, {
            className: `inviteLabel inviteLabelButtons`,
            children: [
              !t &&
                (0, D.jsx)(`button`, {
                  className: n,
                  type: `button`,
                  onClick: this.LaunchSteamClient,
                  children: m(`#InviteLanding_OpenInSteam`),
                }),
              (0, D.jsx)(`button`, {
                className: n,
                type: `button`,
                onClick: this.LaunchWebChat,
                children: m(`#InviteLanding_OpenInWebChat`),
              }),
            ],
          }),
          this.m_bTriedToLaunchSteam &&
            (0, D.jsx)(`div`, {
              className: `inviteLabel inviteLabelLaunchPrompt`,
              children: m(`#InviteLanding_OpenInSteam_Help`),
            }),
        ],
      })
    );
  }
};
o([s], j.prototype, `m_bTriedToLaunchSteam`, void 0),
  o([n], j.prototype, `LaunchWebChat`, null),
  o([n], j.prototype, `LaunchSteamClient`, null),
  (j = o([v], j));
var M = class extends C.Component {
  render() {
    return (0, D.jsx)(`div`, {
      className: `ChatMessageInvite`,
      children: (0, D.jsx)(`div`, {
        className: `postedExpiredInvite`,
        children: m(`#InviteLanding_ExpiredOrInvalid`),
      }),
    });
  }
};
function N(e) {
  return (0, D.jsxs)(`div`, {
    className: `ChatMessageInvite`,
    children: [
      (0, D.jsx)(`div`, {
        className: `leftInviteContainer`,
        dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
      }),
      (0, D.jsxs)(`div`, {
        className: `rightInviteContainer`,
        children: [
          (0, D.jsx)(`div`, {
            className: `inviteLabel`,
            children: f(
              `#bbcode_invite_description`,
              (0, D.jsx)(`span`, {
                dangerouslySetInnerHTML: {
                  __html: e.render.strInviterNameLinkHTML,
                },
              }),
            ),
          }),
          (0, D.jsx)(`div`, {
            className: `groupName`,
            children: e.render.strChatRoomGroupName,
          }),
          e.children,
        ],
      }),
    ],
  });
}
window.AssertMsg = i;
function P() {
  let e = document.querySelectorAll(`.ChatReactRoot`);
  for (let t = 0; t < e.length; t++) {
    let n = e[t],
      r = n.getAttribute(`data-component`);
    switch (r) {
      case `ChatInvite`:
        F(n);
        break;
      default:
        i(!1, `unknown component: "${r}"`);
    }
  }
}
function F(e) {
  let t;
  try {
    t = JSON.parse(e.getAttribute(`data-inviteinfo`));
  } catch {}
  k.sm_rtTimeCur = t.rtTimeCur;
  let n = new k(t);
  w.createRoot(e).render(C.createElement(A, { controller: n }));
}
document.addEventListener(`DOMContentLoaded`, async function () {
  a(), await I(d.LANGUAGE), P();
});
async function I(e) {
  let n = p.GetLanguageFallback(e),
    r = e === n,
    [i, a] = await Promise.all([
      t(
        Object.assign({
          "../localization/friendsui_arabic.json": () =>
            c(
              () => import(`./friendsui_arabic.js?contenthash=D50npDjR`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_brazilian.json": () =>
            c(
              () => import(`./friendsui_brazilian.js?contenthash=NMMacEVH`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_bulgarian.json": () =>
            c(
              () => import(`./friendsui_bulgarian.js?contenthash=nuxkqev5`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_czech.json": () =>
            c(
              () => import(`./friendsui_czech.js?contenthash=Do6giZGT`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_danish.json": () =>
            c(
              () => import(`./friendsui_danish.js?contenthash=CWJGriRZ`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_dutch.json": () =>
            c(
              () => import(`./friendsui_dutch.js?contenthash=DLccV10p`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_english.json": () =>
            c(
              () => import(`./friendsui_english.js?contenthash=ClJW6Wca`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_finnish.json": () =>
            c(
              () => import(`./friendsui_finnish.js?contenthash=Ce5h1fhp`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_french.json": () =>
            c(
              () => import(`./friendsui_french.js?contenthash=CWwzFTfl`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_german.json": () =>
            c(
              () => import(`./friendsui_german.js?contenthash=DwpUKaE1`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_greek.json": () =>
            c(
              () => import(`./friendsui_greek.js?contenthash=DjzV3zxk`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_hungarian.json": () =>
            c(
              () => import(`./friendsui_hungarian.js?contenthash=rTwz0DCj`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_indonesian.json": () =>
            c(
              () => import(`./friendsui_indonesian.js?contenthash=DUp7_2_q`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_italian.json": () =>
            c(
              () => import(`./friendsui_italian.js?contenthash=dGUgUg_M`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_japanese.json": () =>
            c(
              () => import(`./friendsui_japanese.js?contenthash=DGWIe7G3`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_koreana.json": () =>
            c(
              () => import(`./friendsui_koreana.js?contenthash=hp9uO8gn`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_latam.json": () =>
            c(
              () => import(`./friendsui_latam.js?contenthash=CKezgmau`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_malay.json": () =>
            c(
              () => import(`./friendsui_malay.js?contenthash=ijjpPKzI`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_norwegian.json": () =>
            c(
              () => import(`./friendsui_norwegian.js?contenthash=ClB1T-Za`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_polish.json": () =>
            c(
              () => import(`./friendsui_polish.js?contenthash=Dv7cuHTl`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_portuguese.json": () =>
            c(
              () => import(`./friendsui_portuguese.js?contenthash=bzC-ZIPI`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_romanian.json": () =>
            c(
              () => import(`./friendsui_romanian.js?contenthash=BfwdfAcP`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_russian.json": () =>
            c(
              () => import(`./friendsui_russian.js?contenthash=BGTXccBt`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_sc_schinese.json": () =>
            c(
              () => import(`./friendsui_sc_schinese.js?contenthash=CP_BnaQW`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_schinese.json": () =>
            c(
              () => import(`./friendsui_schinese.js?contenthash=Dvv-Af9P`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_spanish.json": () =>
            c(
              () => import(`./friendsui_spanish.js?contenthash=DcCuqfk6`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_swedish.json": () =>
            c(
              () => import(`./friendsui_swedish.js?contenthash=xu_7nypV`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_tchinese.json": () =>
            c(
              () => import(`./friendsui_tchinese.js?contenthash=DBaMtl4j`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_thai.json": () =>
            c(
              () => import(`./friendsui_thai.js?contenthash=UL6QwlRF`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_turkish.json": () =>
            c(
              () => import(`./friendsui_turkish.js?contenthash=kr3OL-cb`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_ukrainian.json": () =>
            c(
              () => import(`./friendsui_ukrainian.js?contenthash=C9y2srDS`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_vietnamese.json": () =>
            c(
              () => import(`./friendsui_vietnamese.js?contenthash=CBZYLs0W`),
              [],
              import.meta.url,
            ),
        }),
        `../localization/friendsui_${e}.json`,
        3,
      ),
      r
        ? {}
        : t(
            Object.assign({
              "../localization/friendsui_arabic.json": () =>
                c(
                  () => import(`./friendsui_arabic.js?contenthash=D50npDjR`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_brazilian.json": () =>
                c(
                  () => import(`./friendsui_brazilian.js?contenthash=NMMacEVH`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_bulgarian.json": () =>
                c(
                  () => import(`./friendsui_bulgarian.js?contenthash=nuxkqev5`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_czech.json": () =>
                c(
                  () => import(`./friendsui_czech.js?contenthash=Do6giZGT`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_danish.json": () =>
                c(
                  () => import(`./friendsui_danish.js?contenthash=CWJGriRZ`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_dutch.json": () =>
                c(
                  () => import(`./friendsui_dutch.js?contenthash=DLccV10p`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_english.json": () =>
                c(
                  () => import(`./friendsui_english.js?contenthash=ClJW6Wca`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_finnish.json": () =>
                c(
                  () => import(`./friendsui_finnish.js?contenthash=Ce5h1fhp`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_french.json": () =>
                c(
                  () => import(`./friendsui_french.js?contenthash=CWwzFTfl`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_german.json": () =>
                c(
                  () => import(`./friendsui_german.js?contenthash=DwpUKaE1`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_greek.json": () =>
                c(
                  () => import(`./friendsui_greek.js?contenthash=DjzV3zxk`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_hungarian.json": () =>
                c(
                  () => import(`./friendsui_hungarian.js?contenthash=rTwz0DCj`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_indonesian.json": () =>
                c(
                  () =>
                    import(`./friendsui_indonesian.js?contenthash=DUp7_2_q`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_italian.json": () =>
                c(
                  () => import(`./friendsui_italian.js?contenthash=dGUgUg_M`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_japanese.json": () =>
                c(
                  () => import(`./friendsui_japanese.js?contenthash=DGWIe7G3`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_koreana.json": () =>
                c(
                  () => import(`./friendsui_koreana.js?contenthash=hp9uO8gn`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_latam.json": () =>
                c(
                  () => import(`./friendsui_latam.js?contenthash=CKezgmau`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_malay.json": () =>
                c(
                  () => import(`./friendsui_malay.js?contenthash=ijjpPKzI`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_norwegian.json": () =>
                c(
                  () => import(`./friendsui_norwegian.js?contenthash=ClB1T-Za`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_polish.json": () =>
                c(
                  () => import(`./friendsui_polish.js?contenthash=Dv7cuHTl`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_portuguese.json": () =>
                c(
                  () =>
                    import(`./friendsui_portuguese.js?contenthash=bzC-ZIPI`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_romanian.json": () =>
                c(
                  () => import(`./friendsui_romanian.js?contenthash=BfwdfAcP`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_russian.json": () =>
                c(
                  () => import(`./friendsui_russian.js?contenthash=BGTXccBt`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_sc_schinese.json": () =>
                c(
                  () =>
                    import(`./friendsui_sc_schinese.js?contenthash=CP_BnaQW`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_schinese.json": () =>
                c(
                  () => import(`./friendsui_schinese.js?contenthash=Dvv-Af9P`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_spanish.json": () =>
                c(
                  () => import(`./friendsui_spanish.js?contenthash=DcCuqfk6`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_swedish.json": () =>
                c(
                  () => import(`./friendsui_swedish.js?contenthash=xu_7nypV`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_tchinese.json": () =>
                c(
                  () => import(`./friendsui_tchinese.js?contenthash=DBaMtl4j`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_thai.json": () =>
                c(
                  () => import(`./friendsui_thai.js?contenthash=UL6QwlRF`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_turkish.json": () =>
                c(
                  () => import(`./friendsui_turkish.js?contenthash=kr3OL-cb`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_ukrainian.json": () =>
                c(
                  () => import(`./friendsui_ukrainian.js?contenthash=C9y2srDS`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_vietnamese.json": () =>
                c(
                  () =>
                    import(`./friendsui_vietnamese.js?contenthash=CBZYLs0W`),
                  [],
                  import.meta.url,
                ),
            }),
            `../localization/friendsui_${n}.json`,
            3,
          ),
      g.Ready(),
    ]);
  l.AddTokens(i, a);
}

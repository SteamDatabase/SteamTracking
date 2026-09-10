var _ = `MCrEfjh4wsk-`,
  _ = `oezn6J72GJQ-`,
  _ = `gXydmc2EKLk-`,
  _ = `iNExQPvZ9a4-`,
  _ = `f4-Ngdme-HE-`,
  _ = `wsd6mIUKN-Y-`,
  _ = `FNhAUA3fabk-`,
  _ = `Tt4H84pS8eY-`,
  _ = `oiatSS7oQoc-`,
  _ = _(_(), 1),
  _ = _();
function _(_) {
  return (0, _.jsx)(_, {
    onClose: _.onClose,
    children: (0, _.jsx)(_, {
      padding: {
        initial: `4`,
        _: `5`,
      },
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
function _(_) {
  let { apps: _, appData: _, onClose: _ } = _,
    _ = _(),
    [_, _] = (0, _.useState)(() => _(_));
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        size: `6`,
        weight: `heavy`,
        children: _.Localize(`#AdvancedSearch_Header`),
      }),
      (0, _.jsx)(_, {
        filter: _,
        onFilterChange: _,
        onSearch: (_, _) => {
          _(_(_, _));
        },
        config: _,
        rgApps: _,
        rgAppData: _,
      }),
    ],
  });
}
function _(_) {
  return {
    bSteamItems: !1,
    filterInGame: {
      app: null,
      facets: {},
      accessories: {},
      properties: {},
      price: [0, _.maxPrice],
    },
    filterSteam: {
      app: null,
      facets: {},
      accessories: {},
      properties: {},
      price: [0, _.maxPrice],
    },
  };
}
function _(_) {
  let { reasons: _, guardDaysRequired: _, allowedTime: _ } = _,
    _ = _.length > 0;
  return (0, _.jsxs)(_, {
    gap: `2`,
    padding: `4`,
    direction: `column`,
    background: `red-3`,
    border: `2px solid var(--color-red-7)`,
    radius: `sm`,
    children: [
      (0, _.jsx)(_, {
        size: `5`,
        children: _.LocalizePlural(`#Unavailable_Header`, _.length),
      }),
      (0, _.jsxs)(`ul`, {
        style: {
          margin: 0,
        },
        children: [
          _ &&
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  reason: _,
                  guardDaysRequired: _,
                },
                _,
              ),
            ),
          !_ &&
            (0, _.jsx)(_, {
              _: `li`,
              children: _.Localize(`#Economy_Market_TopLevelReason_Unknown`),
            }),
        ],
      }),
      (0, _.jsx)(_, {
        time: _,
      }),
    ],
  });
}
function _(_) {
  let { time: _ } = _;
  if (!_) return null;
  let _ = Intl.DateTimeFormat(_(), {
    dateStyle: `full`,
    timeStyle: `medium`,
  }).format(new Date(_ * 1e3));
  return (0, _.jsx)(_, {
    children: _.LocalizeReact(
      `#Economy_Market_HeaderTip_TimeCanUse`,
      (0, _.jsx)(_, {
        color: `green-10`,
        children: _,
      }),
    ),
  });
}
function _(_) {
  let { reason: _, guardDaysRequired: _ } = _,
    {
      description: _,
      strLinkText: _,
      strLinkURL: _,
      strLinkTooltip: _,
    } = _(_, _);
  return (0, _.jsxs)(_, {
    _: `li`,
    children: [
      _,
      ` `,
      (0, _.jsx)(_, {
        href: _,
        color: `text-body`,
        contrast: `title`,
        underline: `always`,
        title: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  return `${_.HELP_BASE_URL}kb/${_}`;
}
function _(_, _) {
  let _ = _ ?? 15;
  switch (_) {
    case `locked`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_AccountLocked`),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_AccountLocked`,
        ),
        strLinkURL: _(`451E-96B3-D194-50FC`),
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `banned`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountTradeBanned`,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_AccountTradeBanned`,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#tradeban`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `trusted`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountNotTrusted`,
          7,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_AccountNotTrusted`,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#nottrusted`,
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `trustedwaiting`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountNotTrusted_Waiting`,
          7,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TTopLevelTooltip_AccountNotTrusted_Waiting`,
          7,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#nottrusted`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `pwreset`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountPasswordRecentlyReset`,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_AccountPasswordRecentlyReset`,
          5,
          30,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#pwreset`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `newpaymentmethod`:
      return {
        description: _(
          _.Localize(`#Economy_Market_HeaderTip_NewPaymentMethod_NoDate`),
          (0, _.jsx)(_, {
            color: `text-body`,
            underline: `always`,
            href: `${_.STORE_BASE_URL}account/verifycards`,
          }),
        ),
        strLinkTooltip: ``,
        strLinkURL: _(`6088-UDXM-7214`) + `#whatisit`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `newpaymentnoverify`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountHasNewPaymentMethod`,
        ),
        strLinkTooltip: ``,
        strLinkURL: _.COMMUNITY_BASE_URL + `market/faq/`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `acceptedwalletgift`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AcceptedWalletGift`,
        ),
        strLinkTooltip: ``,
        strLinkURL: _.STORE_BASE_URL + `digitalgiftcards/selectgiftcard/`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `cookie`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_InvalidCookie`),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_InvalidCookie`,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#cookie`,
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `newdevice`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_NewDevice`, 7),
        strLinkTooltip: _.Localize(`#Economy_Market_TopLevelTooltip_NewDevice`),
        strLinkURL: _(`1047-EDFM-2932`) + `#newdevice`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `selfrefund`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_SelfRefund`),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_SelfRefund`,
          7,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#selfrefund`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `limiteduser`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_LimitedUser`),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_LimitedUser`,
        ),
        strLinkURL: _(`3330-IAGK-7663`),
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `sgrecent`:
      return {
        description: _.Localize(
          `#Economy_Market_HeaderTip_SteamGuardOnlyRecentlyEnabled`,
          _,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_SteamGuardRecentlyEnabled`,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#sgrecent`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `sgdisabled`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_NoSteamGuard`,
          _,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_SteamGuardDisabled`,
        ),
        strLinkURL: _(`4020-ALZM-5519`) + `#how`,
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `tradecooldown`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_TradeCooldown`),
        strLinkURL: _(`451E-96B3-D194-50FC`) + `#tradecooldown`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
  }
}
var _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbYAAAFKCAYAAABxWXoSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABT9JREFUeAHt11F1pVAQBdFmDKAKK2hAAhqwgiocjIL8ZSWPyt4WbkOts5z3vk7QsV3PBFXfq6p6h7zLX/vP/xsACBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASBE2AFKEDYAUYQMgRdgASFkm6rz3dYKO7XoGfpnvi09msQGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQsgyvct77OkHHdj0T5L3g51lsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQIGwApwgZAirABkCJsAKQs572vE3Rs1zO8hjsEvovFBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkDKMrzKee/rBB3b9Qyv4Q75ZBYbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnCBkCKsAGQImwApAgbACnLRJ33vk7QsV3PAPAliw2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA2AFGEDIEXYAEgRNgBShA0AAAAAAAAAAAAAAD7OfzPtMoMeuSNLAAAAAElFTkSuQmCC`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYgAAAFICAYAAABKq2mSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABMhJREFUeAHt10FxhUAUBdEhBlCFFTQgAQ1YQRUOsk5Vr5Mw/xwLb6a67jL4COe9r2NCx3Y9Y0Lu9S6z3utrAEAQCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAApGXww3nv65jQsV3PgD/mf72LBQFAEggAkkAAkAQCgCQQACSBACAJBABJIABIAgFAEggAkkAAkAQCgCQQACSBACAJBABJIABIAgFAEggAkkAAkAQCgCQQACSBACAJBABJIABIAgFAEggAkkAAkAQCgCQQACSBACAJBABJIABIAgFAEggAkkAAkAQCgCQQACSBACAJBABJIABIAgFAEggAkkAAkAQCgCQQACSBACAJBABJIABIAgFAEggAkkAAkAQCgCQQAKRl8BHOe1/HhI7tesaE3Iv/wIIAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCADSMuDFzntfx4SO7XoGrzHrO7QgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAtAx+OO99HRM6tusZvIZ3yH9gQQCQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAGkZAL/kvPd1TOjYrmdMyIIAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCACSQACQBAKAJBAAJIEAIAkEAEkgAEgCAUASCAAAAAAAAAB+zTf6Oy3zkawkKgAAAABJRU5ErkJggg==`,
  _ = {
    name: `marketPrefs`,
    options: {
      path: `/market`,
      secure: !0,
      maxAge: 365 * 24 * 60 * 60 * 1e3,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = _({
    Component: _,
  });
function _(_) {
  let {
      backgroundAppID: _,
      filterConfig: _,
      loadID: _,
      bShowAdminActions: _,
      marketEligibility: _,
    } = _.useLoaderData(),
    _ = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    ),
    _ = _.data && _(_.data, `raw_page_background`);
  return (0, _.jsx)(
    _,
    {
      children: (0, _.jsx)(_, {
        value: _,
        children: (0, _.jsx)(_, {
          value: {
            bShowAdminActions: _,
            eligibility: _,
          },
          children: (0, _.jsxs)(_, {
            className: _,
            position: `relative`,
            children: [
              _ &&
                (0, _.jsx)(`img`, {
                  className: `pTPA1n0Spzo-`,
                  src: _,
                  alt: ``,
                }),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  children: _.children,
                }),
              }),
            ],
          }),
        }),
      }),
    },
    _,
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    className: _(),
  });
}
function _() {
  let { bHideSearch: _ = !1, marketEligibility: _ } = _.useLoaderData(),
    _ = () => {
      _(!0), (window.location.href = `${_.COMMUNITY_BASE_URL}market/`);
    },
    _ = `${_.COMMUNITY_BASE_URL}groups/community_market/discussions/`,
    _ = _() === `initial`;
  return (0, _.jsxs)(_, {
    paddingBottom: {
      initial: `2`,
      _: `4`,
    },
    paddingTop: {
      initial: `0`,
      _: `2`,
      _: `7`,
    },
    className: _,
    children: [
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            align: `center`,
            justify: `between`,
            wrap: {
              initial: `wrap`,
              _: void 0,
            },
            gap: {
              initial: `0`,
              _: `3`,
            },
            className: _,
            children: [
              (0, _.jsx)(_, {
                _: _.Home(),
                children: (0, _.jsx)(_, {
                  size: {
                    initial: `4`,
                    _: `6`,
                  },
                  weight: `medium`,
                  className: _,
                  children: _.Localize(`#Header_MarketTitle`),
                }),
              }),
              (0, _.jsx)(_, {
                align: `end`,
                direction: `column`,
                gap: `2`,
                flexGrow: `1`,
                children: !_ && (0, _.jsx)(_, {}),
              }),
              (0, _.jsxs)(_, {
                className: _,
                style: _
                  ? {
                      pointerEvents: `none`,
                    }
                  : void 0,
                children: [
                  !_ &&
                    (0, _.jsx)(_, {
                      _: _.Home(),
                      children: (0, _.jsx)(`img`, {
                        src: _(
                          `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAAC4CAYAAACbzZUQAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA5hJREFUeAHt27FuE1kYhuF/Jk683kRrKbs9V5OVsv32u02ooE4X6IJER5eeKj1IBAk67oCKng4UFMskxDGx9YGEQHQIPPM85bQz8+qfc8409R3z+by58/z/4dbFX2tXm2/a+XTQ1orY3zk6rQ46PNkbFyujq89hVw2+dfFgftBuPZmM7j29ORjVRs3ad1XTQQF02VeVu/Vod1iPXw1n65tNAfTIF0E8ePbfb6PLjWEB9NDnNcHFZCiGQJ8tg7hYM9yubTEEem35yTx+8W54Yc0Q6Ll2MR1eTCYbBdBzbR2/dJ4G4Fq7Nb6xXgBUezZ7vVYAVDuymQKwtDL/JgP8aIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEE111OHJ3rg6aH/n6LTgJ+vq+2VCBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBIimWCmHJ3vj6qD9naPT6iD3a7WYEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAGiOTzZG1cH7e8cnRYrw3PIr8CECBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBBtM7q8KgCqbSfbgghwrR3Ozi8LgGpv7T64KACu1xCbmq9d/WFKBHpvuct89vf96fTDZF4APbYM4t2mrv6s7fMC6LHP5xBv//Pg/PcPw/cF0FNfHMz+FEWfz0AfffWnyiKKtfvwbGPzrd1noFcG37q4WFOsOp4ezOu8jv8dbI1vrJ/NXq+N1jebAuioj4FveZaEC4ZuAAAAAElFTkSuQmCC`,
                        ),
                        alt: ``,
                      }),
                    }),
                  _ &&
                    (0, _.jsx)(`img`, {
                      src: _(
                        `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAAC4CAYAAACbzZUQAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA5hJREFUeAHt27FuE1kYhuF/Jk683kRrKbs9V5OVsv32u02ooE4X6IJER5eeKj1IBAk67oCKng4UFMskxDGx9YGEQHQIPPM85bQz8+qfc8409R3z+by58/z/4dbFX2tXm2/a+XTQ1orY3zk6rQ46PNkbFyujq89hVw2+dfFgftBuPZmM7j29ORjVRs3ad1XTQQF02VeVu/Vod1iPXw1n65tNAfTIF0E8ePbfb6PLjWEB9NDnNcHFZCiGQJ8tg7hYM9yubTEEem35yTx+8W54Yc0Q6Ll2MR1eTCYbBdBzbR2/dJ4G4Fq7Nb6xXgBUezZ7vVYAVDuymQKwtDL/JgP8aIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEIIIEE111OHJ3rg6aH/n6LTgJ+vq+2VCBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBAhBBIimWCmHJ3vj6qD9naPT6iD3a7WYEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAFCEAGiOTzZG1cH7e8cnRYrw3PIr8CECBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBCCCBBtM7q8KgCqbSfbgghwrR3Ozi8LgGpv7T64KACu1xCbmq9d/WFKBHpvuct89vf96fTDZF4APbYM4t2mrv6s7fMC6LHP5xBv//Pg/PcPw/cF0FNfHMz+FEWfz0AfffWnyiKKtfvwbGPzrd1noFcG37q4WFOsOp4ezOu8jv8dbI1vrJ/NXq+N1jebAuioj4FveZaEC4ZuAAAAAElFTkSuQmCC`,
                      ),
                      alt: ``,
                    }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(_, {
            justify: `end`,
            marginTop: `2`,
            alignSelf: `end`,
            gap: `1`,
            marginLeft: {
              initial: `1`,
              _: `0`,
            },
            marginRight: {
              initial: `1`,
              _: `0`,
            },
            children: [
              (0, _.jsx)(_, {
                href: _,
                variant: `inverted`,
                color: `dull`,
                children: _.Localize(`#Header_GiveFeedback`),
              }),
              (0, _.jsx)(_, {
                onClick: _,
                variant: `inverted`,
                color: `dull`,
                children: _.Localize(`#Header_OptOut`),
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(_, {
        children:
          !_.bEligible &&
          (0, _.jsx)(_, {
            marginTop: `3`,
            children: (0, _.jsx)(_, {
              reasons: _.rgReasons,
              guardDaysRequired: _.unSGRequiredDays,
              allowedTime: _.rtAllowed,
            }),
          }),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(`img`, {
          src: _(_),
          alt: ``,
        }),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(`img`, {
          src: _(_),
          alt: ``,
        }),
      }),
    ],
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(!1),
    _ = _() === `initial`,
    { rgApps: _ = [], appData: _ = {} } =
      _({
        queryKey: [`market`, `advancedsearchdata`],
        queryFn: () => _(`/market/advancedsearchdata`, `Load`),
        enabled: _,
        placeholderData: {
          rgApps: [],
          appData: {},
        },
      }).data ?? {};
  return (0, _.jsxs)(_, {
    align: `center`,
    gapX: `4`,
    children: [
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(`form`, {
          className: _(),
          onSubmit: (_) => {
            _.preventDefault(),
              _.stopPropagation(),
              _(
                _.Search({
                  search: `q=${encodeURIComponent(_)}`,
                }),
              );
          },
          children: (0, _.jsx)(_, {
            value: _,
            variant: `inset`,
            onTextChange: _,
            placeholder: _.Localize(`#Header_Search_PlaceholderNew`),
            clearable: !0,
            popoverWidth: _ ? () => `90vw` : void 0,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        onClick: () => _(!0),
        contrast: `title`,
        title: _.Localize(`#AdvancedSearch_Link`),
        children: _.Localize(`#AdvancedSearch_Link`),
      }),
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(!1),
          apps: _,
          appData: _,
        }),
    ],
  });
}
function _() {
  try {
    let _ = JSON.parse(_(_) || `{}`);
    return !_ || typeof _ != `object` ? {} : _;
  } catch {}
  return {};
}
function _(_) {
  Object.keys(_).length == 0 ? _(_) : _(_, JSON.stringify(_));
}
function _(_) {
  let { children: _ } = _,
    [_, _] = (0, _.useState)(() => _());
  return (
    (0, _.useEffect)(() => _(_), [_]),
    (0, _.jsx)(_, {
      prefs: _,
      onChange: _,
      children: _,
    })
  );
}
export { _ as route };

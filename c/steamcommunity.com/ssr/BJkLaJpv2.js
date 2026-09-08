var _ = [
    `all`,
    `discussions`,
    `screenshots`,
    `art`,
    `broadcasts`,
    `videos`,
    `workshop`,
    `news`,
    `webguides`,
    `userreviews`,
  ],
  _ = (function (_) {
    return (
      (_[(_.k_Visible = 0)] = `k_Visible`),
      (_[(_.k_Visible_Admin = 1)] = `k_Visible_Admin`),
      (_[(_.k_Visible_OwnsApp = 2)] = `k_Visible_OwnsApp`),
      (_[(_.k_Visible_WarnContentDescriptorPreferences = 3)] =
        `k_Visible_WarnContentDescriptorPreferences`),
      (_[(_.k_NotVisible_InvalidAppHub = 4)] = `k_NotVisible_InvalidAppHub`),
      (_[(_.k_NotVisible_Configuration = 5)] = `k_NotVisible_Configuration`),
      (_[(_.k_NotVisible_StoreHidden = 6)] = `k_NotVisible_StoreHidden`),
      (_[(_.k_NotVisible_RestrictedCountry = 7)] =
        `k_NotVisible_RestrictedCountry`),
      (_[(_.k_NotVisible_RestrictedContentDescriptors_LoggedOut = 8)] =
        `k_NotVisible_RestrictedContentDescriptors_LoggedOut`),
      (_[(_.k_NotVisible_RestrictedContentDescriptorsForCommunity = 9)] =
        `k_NotVisible_RestrictedContentDescriptorsForCommunity`),
      (_[(_.k_NotVisible_ParentalSettings = 10)] =
        `k_NotVisible_ParentalSettings`),
      _
    );
  })({}),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `eDVdMzW4Ol4-`,
  _ = `UzmBdjUEGaQ-`,
  _ = `q-sr-92xHKc-`,
  _ = `JDHw5NEYEgM-`,
  _ = _(),
  _ = {
    all: `#AppHub_Nav_All`,
    discussions: `#AppHub_Nav_Discussions`,
    screenshots: `#AppHub_Nav_Screenshots`,
    art: `#AppHub_Nav_Art`,
    broadcasts: `#AppHub_Nav_Broadcasts`,
    videos: `#AppHub_Nav_Videos`,
    workshop: `#AppHub_Nav_WorkshopItems`,
    news: `#AppHub_Nav_AllNews`,
    webguides: `#AppHub_Nav_Guides`,
    userreviews: `#AppHub_Nav_Reviews`,
  },
  _ = {
    all: `/`,
    discussions: `/discussions/`,
    screenshots: `/screenshots/`,
    art: `/images/`,
    broadcasts: `/broadcasts/`,
    videos: `/videos/`,
    workshop: `/workshop/`,
    news: `/news/`,
    webguides: `/guides/`,
    userreviews: `/reviews/`,
  },
  _ = {
    name: `wants_mature_content_apps`,
    options: {
      path: `/`,
      secure: !0,
      maxAge: 365 * 24 * 60 * 60 * 1e3,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _() {
  let _ = _(_);
  return _ ? _.split(`|`).map((_) => parseInt(_)) : [];
}
function _(_) {
  let _ = _();
  _.push(_), _(_, _.join(`|`));
}
function _(_) {
  return _().includes(_);
}
function _(_) {
  switch (_) {
    case 0:
    case 1:
    case 2:
    case 11:
    case 15:
      return `workshop`;
    case 3:
      return `art`;
    case 4:
      return `videos`;
    case 5:
      return `screenshots`;
    case 9:
    case 10:
      return `webguides`;
    case 12:
      return `all`;
    case 14:
      return `videos`;
  }
  return `all`;
}
function _(_) {
  let {
      appid: _,
      name: _,
      activeTab: _,
      rgHiddenTabs: _,
      children: _,
      eVisibility: _,
      rgContentDescriptorIDs: _,
      rgUserPreferencesOverlappingContentDescriptorIDs: _,
    } = _,
    _ = [..._].filter((_) => !_ || !_.includes(_)),
    _ = `${_.COMMUNITY_BASE_URL}app/${_}`,
    [_, _] = (0, _.useState)(
      !_(_) && _ == _.k_Visible_WarnContentDescriptorPreferences,
    ),
    _ = () => {
      window.location.href = _.COMMUNITY_BASE_URL;
    };
  return _
    ? (0, _.jsx)(_, {
        active: !0,
        children: (0, _.jsx)(_, {
          onClose: _,
          children: (0, _.jsx)(_, {
            background: `dull-7`,
            padding: `3`,
            radius: `md`,
            children: (0, _.jsxs)(_, {
              direction: `column`,
              justify: `center`,
              gap: `3`,
              align: `center`,
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: _.Localize(`#AppHubs_ContentCheck_Header_App`),
                }),
                (0, _.jsx)(_, {
                  gap: `1`,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      `div`,
                      {
                        className: _,
                        children: _(_),
                      },
                      _,
                    ),
                  ),
                }),
                (0, _.jsxs)(_, {
                  gap: `1`,
                  children: [
                    (0, _.jsx)(_, {
                      onClick: () => {
                        _(_), _(!1);
                      },
                      children: _.Localize(`#AppHubs_ContentCheck_ViewPage`),
                    }),
                    (0, _.jsx)(_, {
                      onClick: _,
                      children: _.Localize(`#AppHubs_ContentCheck_Cancel`),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            paddingTop: `7`,
            paddingBottom: `2`,
            children: (0, _.jsx)(_, {
              marginX: {
                initial: `3`,
                _: `5`,
              },
              children: (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(_, {
                    align: `center`,
                    justify: `between`,
                    wrap: {
                      initial: `wrap`,
                      _: void 0,
                    },
                    gap: `3`,
                    direction: `row`,
                    children: [
                      (0, _.jsx)(_, {
                        external: !1,
                        _: _,
                        children: (0, _.jsx)(_, {
                          size: {
                            initial: `4`,
                            _: `6`,
                          },
                          children: _,
                        }),
                      }),
                      (0, _.jsx)(_, {
                        controller: `app`,
                        method: `apphub_header`,
                        children: (0, _.jsx)(_, {
                          appid: _,
                        }),
                      }),
                    ],
                  }),
                  _.EREALM !== _.k_ESteamRealmChina &&
                    (0, _.jsx)(_, {
                      gap: `2`,
                      className: `mMgapAIqxds-`,
                      direction: `row`,
                      children: _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            bActive: _ == _,
                            tab: _,
                            appid: _,
                          },
                          _,
                        ),
                      ),
                    }),
                ],
              }),
            }),
          }),
          _,
        ],
      });
}
function _(_) {
  let { appid: _ } = _;
  return (0, _.jsx)(_, {
    href: _(_(), `${_.STORE_BASE_URL}app/${_}/`),
    children: _.Localize(`#AppHub_Store`),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    className: _(),
  });
}
function _(_, _) {
  return `${_.COMMUNITY_BASE_URL}app/${_}${_[_]}`;
}
function _(_) {
  let { tab: _, appid: _, bActive: _ } = _,
    _ = _(_, _),
    _ = _.Localize(_[_]);
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _ && `Ldik1p0iuKE-`),
    children: (0, _.jsx)(_, {
      size: `4`,
      href: _,
      children: _,
    }),
  });
}
export { _, _, _ };

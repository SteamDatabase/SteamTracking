var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `Y-uvNcf6FIc-`,
  _ = `_0rX4KuKZ9dM-`,
  _ = `c2-LPwth-jQ-`,
  _ = `_5NV8H1NkbsQ-`,
  _ = `HF3ZnZa08aQ-`,
  _ = `mIWpsxgbfgU-`,
  _ = `bt37JYoalu8-`,
  _ = `WXrKel0QHX8-`,
  _ = `s65wg-myWog-`,
  _ = `dHl1yNBHOF0-`,
  _ = `tvRMtdP6--U-`,
  _ = `EEj7KkET8kk-`,
  _ = `FXVRkROIbZ8-`,
  _ = `_1ACpb27V7AI-`,
  _ = `cCMF5rdyMX0-`,
  _ = _(),
  _ = _({
    Component: _,
  });
function _(_) {
  let {
    app: _,
    strExistingSearchText: _,
    existingSearchTextTarget: _,
    appHubHeader: _,
    userAccess: _,
    workshopConfig: _,
    declaredTags: _,
    userPreferences: _,
  } = _.useLoaderData();
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsx)(_, {
        userPreferences: _,
        children: (0, _.jsx)(_.Provider, {
          value: _,
          children: (0, _.jsx)(_, {
            className: _,
            position: `relative`,
            children: (0, _.jsx)(_, {
              app: _,
              strExistingSearchText: _,
              existingSearchTextTarget: _,
              children: (0, _.jsxs)(_, {
                app: _,
                strExistingSearchText: _,
                children: [
                  (0, _.jsx)(_, {
                    _: {
                      appid: _.appid,
                    },
                    workshop: !0,
                  }),
                  (0, _.jsxs)(_, {
                    activeTab: `workshop`,
                    ..._,
                    children: [
                      (0, _.jsx)(_, {}),
                      (0, _.jsx)(_, {
                        marginBottom: `7`,
                        children: (0, _.jsx)(_, {
                          children: (0, _.jsx)(_, {
                            marginTop: `5`,
                            marginX: {
                              initial: `3`,
                              _: `5`,
                            },
                            children: _.children,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    }),
  });
}
function _(_) {
  let { bSelected: _, text: _, children: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.jsxs)(_, {
      className: (0, _.default)(_, _ && `PaiSGO8eD8Y-`),
      onActivate: () => _(!_),
      children: [
        _,
        ` `,
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    });
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    interactions: {
      click: !0,
      focus: !1,
    },
    placement: {
      offset: 0,
      initial: `bottom-start`,
      flip: !1,
    },
    children: [
      (0, _.jsx)(_.Anchor, {
        children: _,
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)(_.FocusManager, {
          children: (0, _.jsx)(`div`, {
            children: (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_.Provider, {
                value: {
                  onMenuItemSelected: () => _(!1),
                },
                children: _,
              }),
            }),
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { _: _, onDelete: _ } = _,
    { app: _ } = _.useLoaderData(),
    { onBrowseHandler: _, onSearchTextUpdatedExternally: _ } = _(),
    _ = _(
      {
        appid: _.appid,
      },
      _,
    );
  return (0, _.jsxs)(_, {
    align: `center`,
    children: [
      (0, _.jsxs)(_, {
        className: _,
        onActivate: () => (_(_), _(_.search_text ?? ``), !1),
        children: [(0, _.jsx)(_, {}), _.query_name],
      }),
      (0, _.jsx)(_, {
        toolTipContent: _.Localize(`#Workshop_Saved_Queries_Delete_Title`),
        nDelayShowMS: 0,
        children: (0, _.jsx)(_, {
          className: _,
          onActivate: () => _(_),
          children: (0, _.jsx)(_, {}),
        }),
      }),
    ],
  });
}
function _() {
  let { app: _ } = _.useLoaderData(),
    _ = _(),
    _ = _(_.appid);
  return !_.data || _.data.length == 0
    ? null
    : (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Workshop_Saved_Queries`),
          }),
          _.data.map((_) =>
            (0, _.jsx)(
              _,
              {
                _: _,
                onDelete: _.onConfirmDelete,
              },
              _.queryid,
            ),
          ),
        ],
      });
}
function _() {
  let { app: _, workshopConfig: _ } = _.useLoaderData(),
    { onBrowseHandler: _, onSearchTextUpdatedExternally: _ } = _(),
    { onMenuItemSelected: _ } = (0, _.useContext)(_),
    _ = (0, _.useContext)(_),
    _ = (0, _.useCallback)(
      (_, _, _) => {
        _({
          section: _,
          browse_sort: _,
          special_filter: _,
          search_text: ``,
        }),
          _(``),
          _();
      },
      [_, _, _],
    ),
    _ = (0, _.useCallback)((_) => {
      window.location.href = _;
    }, []);
  return (0, _.jsxs)(_, {
    className: _,
    "flow-children": `geometric`,
    children: [
      _.feature_item_curation &&
        (0, _.jsxs)(_, {
          direction: `column`,
          gap: `2`,
          children: [
            (0, _.jsx)(`div`, {
              className: `tvRMtdP6--U-`,
              children: _(`mtxitems`, _),
            }),
            _.logged_in &&
              (0, _.jsx)(_, {
                className: `EEj7KkET8kk-`,
                onActivate: () => _(_.VotingQueue(_.appid)),
                children: _.Localize(`#Workshop_SubMenu_VotingQueue`),
              }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`mtxitems`, `mostrecent`, 1),
              children: _.Localize(
                _.accepted_for_game_text?.length == 0
                  ? `#Workshop_AcceptedForGame`
                  : _.accepted_for_game_text,
              ),
            }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`mtxitems`, `mostrecent`),
              children: _.Localize(`#Workshop_BrowseSort_MostRecent`),
            }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`mtxitems`, `lastupdated`),
              children: _.Localize(`#Workshop_BrowseSort_LastUpdated`),
            }),
          ],
        }),
      _.feature_ready_to_use_content &&
        (0, _.jsxs)(_, {
          direction: `column`,
          gap: `2`,
          children: [
            (0, _.jsx)(`div`, {
              className: `tvRMtdP6--U-`,
              children: _(`readytouseitems`, _),
            }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`readytouseitems`, `trend`),
              children: _.Localize(`#Workshop_BrowseSort_MostPopular`),
            }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`readytouseitems`, `toprated`),
              children: _.Localize(`#Workshop_BrowseSort_TopRated`),
            }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`readytouseitems`, `mostrecent`),
              children: _.Localize(`#Workshop_BrowseSort_MostRecent`),
            }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`readytouseitems`, `lastupdated`),
              children: _.Localize(`#Workshop_BrowseSort_LastUpdated`),
            }),
            _.requires_moderation &&
              _.bHasAppAdminAccess &&
              (0, _.jsx)(_, {
                className: (0, _.default)(`EEj7KkET8kk-`, `SLYW0mdzEK4-`),
                onActivate: () => _(_.ApprovalQueue(_.appid)),
                children: _.Localize(`#Workshop_RequireApproval`),
              }),
          ],
        }),
      _.feature_item_merch &&
        (0, _.jsxs)(_, {
          direction: `column`,
          gap: `2`,
          children: [
            (0, _.jsx)(`div`, {
              className: `tvRMtdP6--U-`,
              children: _.Localize(`#Workshop_Section_Merchandise`),
            }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`merchandise`, `trend`),
              children: _.Localize(`#Workshop_BrowseSort_MostPopular`),
            }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`merchandise`, `toprated`),
              children: _.Localize(`#Workshop_BrowseSort_TopRated`),
            }),
            (0, _.jsx)(_, {
              className: `EEj7KkET8kk-`,
              onActivate: () => _(`merchandise`, `mostrecent`),
              children: _.Localize(`#Workshop_BrowseSort_MostRecent`),
            }),
          ],
        }),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Workshop_Section_Collections`),
          }),
          (0, _.jsx)(_, {
            className: _,
            onActivate: () => _(`collections`, `trend`),
            children: _.Localize(`#Workshop_BrowseSort_MostPopular`),
          }),
          (0, _.jsx)(_, {
            className: _,
            onActivate: () => _(`collections`, `toprated`),
            children: _.Localize(`#Workshop_BrowseSort_TopRated`),
          }),
          (0, _.jsx)(_, {
            className: _,
            onActivate: () => _(`collections`, `mostrecent`),
            children: _.Localize(`#Workshop_BrowseSort_MostRecent`),
          }),
        ],
      }),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _() {
  let { app: _, workshopConfig: _ } = _.useLoaderData(),
    _ = _(_.appid),
    _ = (0, _.useCallback)((_) => {
      window.location.href = _;
    }, []);
  return (0, _.jsx)(_, {
    direction: `row`,
    gap: `3`,
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `2`,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Workshop_Menu_YourItems`),
        }),
        (0, _.jsxs)(_, {
          direction: `row`,
          gap: `8`,
          children: [
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `2`,
              children: [
                (0, _.jsx)(_, {
                  className: _,
                  onActivate: () =>
                    _(
                      _.MyFiles(_.appid, {
                        search: `browsefilter=mysubscriptions`,
                      }),
                    ),
                  children: _.Localize(
                    `#Workshop_SubMenu_YourSubscriptions`,
                    _(_.data?.numSubscriptions ?? 0),
                  ),
                }),
                (0, _.jsx)(_, {
                  className: _,
                  onActivate: () =>
                    _(
                      _.MyFiles(_.appid, {
                        search: `browsefilter=myfavorites`,
                      }),
                    ),
                  children: _.Localize(
                    `#Workshop_SubMenu_YourFavorites`,
                    _(_.data?.numFavorited ?? 0),
                  ),
                }),
                _.feature_playtime_tracking &&
                  (0, _.jsx)(_, {
                    className: `EEj7KkET8kk-`,
                    onActivate: () =>
                      _(
                        _.MyFiles(_.appid, {
                          search: `browsefilter=myplayedfiles`,
                        }),
                      ),
                    children: _.Localize(
                      `#Workshop_SubMenu_YourPlayed`,
                      _(_.data?.numPlayed ?? 0),
                    ),
                  }),
              ],
            }),
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `2`,
              children: [
                (0, _.jsx)(_, {
                  className: _,
                  onActivate: () => _(_.MyFiles(_.appid)),
                  children: _.Localize(
                    `#Workshop_SubMenu_YourItems`,
                    _(_.data?.numSubmitted ?? 0),
                  ),
                }),
                (0, _.jsx)(_, {
                  className: _,
                  onActivate: () =>
                    _(
                      _.MyFiles(_.appid, {
                        search: `section=collections`,
                      }),
                    ),
                  children: _.Localize(
                    `#Workshop_SubMenu_YourCollections`,
                    _(_.data?.numCollections ?? 0),
                  ),
                }),
                _.feature_item_curation &&
                  _.data?.bHasPaymentRules &&
                  (0, _.jsxs)(_, {
                    className: `EEj7KkET8kk-`,
                    onActivate: () =>
                      _(`${_.COMMUNITY_BASE_URL}my/revenueactivity`),
                    children: [
                      _.Localize(`#Workshop_SubMenu_ViewYourRevenue`),
                      `\xA0`,
                      _.Localize(`#Workshop_SubMenu_ViewYourRevenue_Desc`),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _() {
  return window.location.href.includes(`/browse`)
    ? 2
    : window.location.href.includes(`/my`)
      ? 3
      : window.location.href.includes(`/discussions`)
        ? 4
        : window.location.href.includes(`/about`)
          ? 5
          : 1;
}
function _() {
  let [_, _] = (0, _.useState)(_());
  return _((0, _.useCallback)(() => _(_()), [])), _;
}
function _() {
  let { app: _, appHubHeader: _, workshopConfig: _ } = _.useLoaderData(),
    _ = _(),
    _ = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_.appid}/${_.workshop_header ?? ``}.jpg`,
    _ = _();
  return (0, _.jsxs)(_, {
    marginX: {
      initial: `3`,
      _: `5`,
    },
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            src: _,
            alt: _.name,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _.workshop_title,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _.workshop_desc,
              }),
              _.EREALM !== _.k_ESteamRealmChina &&
                !_ &&
                _.instructionsURL &&
                _.instructionsURL?.length != 0 &&
                (0, _.jsx)(`div`, {
                  className: `hS0Yo0YFq9g-`,
                  children: (0, _.jsx)(_, {
                    _: _.instructionsURL,
                    children: _.Localize(`#Workshop_LearnMore`),
                  }),
                }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        className: _,
        "flow-children": `grid`,
        children: [
          (0, _.jsx)(_, {
            _: _.AppHome(_.appid),
            className: (0, _.default)(_, _ == 1 && `PaiSGO8eD8Y-`),
            children: _.Localize(`#Workshop_Menu_Home`),
          }),
          (0, _.jsx)(_, {
            bSelected: _ == 2,
            text: _.Localize(`#Workshop_Menu_Browse`),
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            bSelected: _ == 3,
            text: _.Localize(`#Workshop_Menu_YourItems`),
            children: (0, _.jsx)(_, {}),
          }),
          _.EREALM !== _.k_ESteamRealmChina &&
            (0, _.jsx)(_, {
              _: _.Discussions(_.appid),
              className: (0, _.default)(
                `WXrKel0QHX8-`,
                _ == 4 && `PaiSGO8eD8Y-`,
              ),
              children: _.Localize(`#Workshop_Menu_Discussions`),
            }),
          (0, _.jsx)(_, {
            external: !1,
            _: _.About(_.appid),
            className: (0, _.default)(_, _ == 5 && `PaiSGO8eD8Y-`),
            children: _.Localize(`#Workshop_Menu_About`),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _();
  return (0, _.useContext)(_).bHasAppAdminAccess
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          size: `1`,
          color: `accent`,
          onClick: () => {
            _.setPreferences({
              bViewNewWorkshop: !1,
            }),
              top?.location.reload();
          },
          icon: !0,
          children: _.Localize(`#Workshop_ExitReact_Link`),
        }),
      })
    : null;
}
export { _, _ };

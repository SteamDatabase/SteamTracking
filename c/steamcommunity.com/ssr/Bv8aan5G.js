var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      appName: _,
      serverQuery: _,
      Browse: _,
      GetSectionName: _,
      GetSectionDesc: _,
      renderFilters: _,
      renderHeadingButtons: _,
      renderAppsParameters: _,
      bSavedQueries: _,
      rgNumPerPageOptions: _,
    } = _,
    [_, _] = (0, _.useState)(() => _()?.workshopBrowseQuery ?? _),
    { setOnBrowseHandler: _, onSearchTextUpdatedExternally: _ } = _(),
    { preferences: _ } = _(),
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null),
    _ = _(
      _,
      _(
        (0, _.useCallback)((_) => {}, []),
        {
          threshold: [0],
        },
      ),
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current &&
          (_ || _ == `sm` || _ == `initial`) &&
          _.current.scrollIntoView({
            behavior: `smooth`,
            block: `nearest`,
          });
      },
      [_],
    ),
    _ = (0, _.useCallback)((_) => {
      let _ = new URL(window.location.href);
      (_.search = _(_).toString()),
        _(
          (_) => ({
            ..._,
            workshopBrowseQuery: _,
          }),
          _,
          !0,
        ),
        _(_);
    }, []);
  _(
    (0, _.useCallback)(() => {
      let _ = _()?.workshopBrowseQuery ?? _;
      _ && (_(_), _(_.search_text ?? ``));
    }, [_, _]),
  ),
    (0, _.useEffect)(() => {
      let _ = (_) => {
        let _ = {
          ..._,
          ..._,
        };
        switch (
          (_.childpublishedfileid
            ? ((_.page = 1),
              (_.special_filter = 0),
              (_.search_text = void 0),
              (_.required_tags = void 0),
              (_.excluded_tags = void 0),
              (_.date_range_created = void 0),
              (_.date_range_updated = void 0),
              (_.appids_required_for_use = void 0),
              (_.excluded_appids_required_for_use = void 0),
              (_.required_apps_preset = void 0),
              _(``))
            : _.section
              ? ((_.page = 1),
                (_.special_filter = _.special_filter),
                (_.required_tags = _.required_tags),
                (_.excluded_tags = _.excluded_tags))
              : (_.search_text && _.search_text != _.search_text) ||
                  (_.search_text_target !== void 0 &&
                    _.search_text_target != _.search_text_target) ||
                  _.browse_sort
                ? (_.page = 1)
                : _.special_filter == 5 && (_.browse_sort = `reported`),
          (_.omitted_flags = void 0),
          _.browse_sort)
        ) {
          case `textsearch`:
            break;
          case `accepted`:
            _.special_filter != 1 && (_.browse_sort = `mostrecent`);
            break;
          case `num_parent_items`:
            _.special_filter != 6 && (_.browse_sort = `mostrecent`);
            break;
          case `num_parent_collections`:
            _.special_filter != 7 && (_.browse_sort = `mostrecent`);
            break;
          case `reported`:
            _.special_filter != 5 && (_.browse_sort = `mostrecent`);
            break;
          default:
            (_.section == `mtxitems` || _.section == `collections`) &&
              (_.omitted_flags = [`workshopaccepted`]);
            break;
        }
        _.special_filter == 1 && (_.omitted_flags = void 0),
          !_.search_text?.length &&
            _.browse_sort == `textsearch` &&
            (_.browse_sort = `trend`),
          _(_),
          _(!1);
      };
      return _(() => _), () => _(() => void 0);
    }, [_, _, _, _, _]);
  let _ = _(_, _),
    _ = _.isSuccess
      ? _.data
      : {
          eresult: 1,
          results: [],
          current_page: 1,
          total_pages: 0,
          total_count: 0,
          next_cursor: ``,
          creator_player_link_details: [],
        },
    _ = _.isLoading || _.isPlaceholderData,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null);
  (0, _.useLayoutEffect)(() => {
    _.current == null ||
      _.current == null ||
      _.current == null ||
      _ ||
      _.current.BFocusWithin() ||
      _.current.BFocusWithin() ||
      _.current.Node().BFocusFirstChild(_.APPLICATION);
  }, [_]);
  let _ = _.section ?? `readytouseitems`,
    _ = _(_),
    _ = _?.(_),
    _ = _(_);
  return (0, _.jsxs)(_, {
    minHeight: `calc( 75vh + 100px )`,
    direction: `column`,
    align: `center`,
    children: [
      (0, _.jsx)(`div`, {
        ref: _,
      }),
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _ && `scA-GBbRsPY-`),
        children: [
          (0, _.jsxs)(_, {
            direction: {
              initial: `column`,
              _: `row`,
            },
            align: `start`,
            justify: `between`,
            children: [
              (0, _.jsx)(_, {
                size: {
                  initial: `4`,
                  _: `5`,
                },
                children: (0, _.jsxs)(_, {
                  gap: `3`,
                  align: `center`,
                  wrap: `wrap`,
                  marginBottom: `1`,
                  direction: `row`,
                  children: [
                    _.Localize(`#Workshop_Browsing`, _),
                    _ &&
                      (0, _.jsx)(`div`, {
                        className: `fDVXoViRTZo-`,
                        children: _,
                      }),
                    _ &&
                      (0, _.jsx)(_, {
                        size: {
                          initial: `1`,
                          _: `2`,
                        },
                      }),
                  ],
                }),
              }),
              _?.(_),
            ],
          }),
          (0, _.jsx)(_, {
            className: _,
            children: (0, _.jsx)(_, {
              browseQuery: _,
              results: _,
              renderAppsParameters: _,
              bSavedQueries: _,
            }),
          }),
          (_.filters_column == `left` || _.filters_column == `collapsed`) &&
            (0, _.jsxs)(_, {
              justify: `between`,
              wrap: `wrap`,
              gap: `1`,
              direction: `row`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `Lpc4vq9SDgQ-`,
                  children: (0, _.jsx)(_, {
                    appName: _,
                    bUseDebouncedValue: !0,
                    navRef: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  children: _,
                }),
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
              ],
            }),
          _.filters_column == `right` &&
            (0, _.jsxs)(_, {
              justify: `end`,
              wrap: `wrap`,
              gap: `1`,
              direction: `row`,
              children: [
                (0, _.jsx)(_, {
                  children: _,
                }),
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
                (0, _.jsx)(_, {
                  appName: _,
                  bUseDebouncedValue: !0,
                  navRef: _,
                }),
              ],
            }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: {
          initial: `3`,
          _: `5`,
        },
        width: `100%`,
        marginTop: `3`,
        children: [
          _.filters_column == `left` &&
            (0, _.jsx)(_, {
              navRef: _,
              children: _,
            }),
          (0, _.jsxs)(_, {
            results: _.results,
            children: [
              (0, _.jsx)(_, {
                browseQuery: _,
                results: _,
                bLoading: _,
                bHasResults: _.isSuccess,
                navRefGrid: _,
              }),
              _.data &&
                (0, _.jsx)(_, {
                  eresult: _.data.eresult,
                  errorMessage: _.data.error,
                }),
              (0, _.jsx)(_, {
                rgDetails: _.results,
              }),
            ],
          }),
          _.filters_column == `right` &&
            (0, _.jsx)(_, {
              navRef: _,
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_, {
        bLoading: _,
        page: _.page,
        num_per_page: _.num_per_page,
        current_page: _.current_page,
        total_pages: _.total_pages,
        rgNumPerPageOptions: _,
        className: _,
        onChangePage: () => _(!0),
      }),
    ],
  });
}
function _(_) {
  let {
      browseQuery: _,
      results: _,
      bLoading: _,
      bHasResults: _,
      navRefGrid: _,
    } = _,
    _ = _ ? _.results : [];
  switch (_.section) {
    case `collections`:
      return (0, _.jsx)(_, {
        className: (0, _.default)(_, _ && `pkDO-9qkfZ4-`),
        "flow-children": `grid`,
        navRef: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              details: _,
            },
            _.publishedfileid,
          ),
        ),
      });
    case `guides`:
    case `webguides`:
    case `integratedguides`:
      return (0, _.jsx)(_, {
        className: (0, _.default)(_, _ && `pkDO-9qkfZ4-`),
        "flow-children": `grid`,
        navRef: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              details: _,
            },
            _.publishedfileid,
          ),
        ),
      });
    default:
      return (0, _.jsx)(_, {
        className: (0, _.default)(_, _ && `pkDO-9qkfZ4-`),
        "flow-children": `grid`,
        navRef: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              details: _,
            },
            _.publishedfileid,
          ),
        ),
      });
  }
}
function _(_) {
  let { eresult: _, errorMessage: _ } = _,
    [_, _] = (0, _.useState)(!1);
  (0, _.useEffect)(() => {
    _ != 1 && _(!0);
  }, [_, _]);
  let _ = (0, _.useCallback)(() => {
    _(!1);
  }, []);
  return (0, _.jsx)(_.Fragment, {
    children:
      _ &&
      (0, _.jsxs)(_, {
        strTitle: _.Localize(`#Workshop_Error_Title`),
        onClose: _,
        children: [
          (0, _.jsx)(_, {
            maxWidth: `500px`,
            children: (0, _.jsx)(_, {
              _: `p`,
              children: _.Localize(`#Workshop_Error_Browse_Desc`, _),
            }),
          }),
          (0, _.jsx)(_, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: (0, _.jsx)(_, {
              onClick: _,
              children: _.Localize(`#Button_Close`),
            }),
          }),
        ],
      }),
  });
}
function _(_) {
  let { onSearchTextUpdatedExternally: _, onBrowseHandler: _ } = _(),
    { search_text: _, search_text_target: _ } = _,
    _ = (0, _.useCallback)(() => {
      _({
        search_text: ``,
        page: 1,
      }),
        _(``);
    }, [_, _]),
    _ = `#Workshop_SearchResults_SearchText`;
  switch (_) {
    case 1:
      _ = `#Workshop_SearchResults_SearchText_TitleOnly`;
      break;
    case 2:
      _ = `#Workshop_SearchResults_SearchText_DescriptionOnly`;
      break;
  }
  return (0, _.jsx)(_, {
    onClear: _,
    children: _.Localize(_, _),
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    { childpublishedfileid: _, section: _ } = _,
    _ = _(_);
  return (0, _.jsx)(_, {
    onClear: (0, _.useCallback)(() => {
      _({
        childpublishedfileid: ``,
        page: 1,
      });
    }, [_]),
    children: _.Localize(
      _ == `collections`
        ? `#Workshop_SearchedForChild`
        : `#Workshop_SearchedForRequiredItem`,
      _.data?.title ?? ``,
    ),
  });
}
function _(_) {
  let { special_filter: _, section: _ } = _,
    _ = (0, _.useContext)(_),
    { onBrowseHandler: _ } = _();
  return (0, _.jsx)(_, {
    onClear: (0, _.useCallback)(() => {
      _({
        special_filter: void 0,
        page: 1,
      });
    }, [_]),
    children: _(_, _, _),
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _();
  return (0, _.jsx)(_, {
    onClear: (0, _.useCallback)(() => {
      _({
        admin_view: !1,
        page: 1,
      });
    }, [_]),
    color: `red`,
    children: _.Localize(`#Workshop_Admin_View`),
  });
}
function _(_) {
  let { section: _, rgRequiredTags: _, rgExcludedTags: _ } = _,
    _ = (0, _.useContext)(_);
  return (0, _.jsx)(_, {
    rgTagCategories: _(_, _).concat(_.visible_admin_tags ?? []),
    rgRequiredTags: _,
    rgExcludedTags: _,
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    { flag: _, rgRequiredFlags: _ } = _,
    _ = (0, _.useCallback)(() => {
      let _ = _.filter((_) => _ !== _);
      _({
        required_flags: _,
        page: 1,
      });
    }, [_, _, _]),
    _;
  switch (_) {
    case `incompatible`:
      _ = _.Localize(`#Workshop_SearchResults_Flag_Incompatible`);
      break;
    case `workshopaccepted`:
      _ = _.Localize(`#Workshop_SearchResults_Flag_Accepted`);
      break;
  }
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          onClear: _,
          icon: (0, _.jsx)(_, {
            className: _,
          }),
          children: _,
        }),
      })
    : null;
}
function _(_) {
  let { rgRequiredFlags: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          flag: _,
          rgRequiredFlags: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { key_value: _, rgRequiredKeyValueTags: _ } = _,
    { onBrowseHandler: _ } = _();
  return (0, _.jsx)(_, {
    onClear: (0, _.useCallback)(() => {
      let _ = _.filter((_) => _ !== _);
      _({
        required_kv_tags: _,
        page: 1,
      });
    }, [_, _, _]),
    children: _.Localize(`#Workshop_SearchResults_KVTag`, _.key, _.value),
  });
}
function _(_) {
  let { rgRequiredKeyValueTags: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          key_value: _,
          rgRequiredKeyValueTags: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { onBrowseHandler: _, onSearchTextUpdatedExternally: _ } = _();
  return (0, _.jsx)(
    _,
    {
      onClick: () => {
        _({
          special_filter: 0,
          required_flags: [],
          omitted_flags: [],
          required_tags: [],
          excluded_tags: [],
          search_text: ``,
          appids_required_for_use: [],
          excluded_appids_required_for_use: [],
          required_apps_preset: void 0,
          childpublishedfileid: void 0,
          page: 1,
        }),
          _(``);
      },
      color: `dull`,
      size: `1`,
      children: _.Localize(`#Workshop_Filters_ClearBtn`),
    },
    `saved_query`,
  );
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = _.appid || 0,
    [_, _] = (0, _.useState)(!1),
    _ = {
      queryid: ``,
      query_name: _.Localize(`#Workshop_Saved_Queries_Save_New`),
    },
    [_, _] = (0, _.useState)(_),
    [_, _] = (0, _.useState)(``),
    _ = _(_),
    _ = _(_),
    _ = async () => {
      let _ = _(_);
      (_.query_name = _),
        (_.queryid = _.queryid),
        await _.mutateAsync(_),
        _(!1);
    },
    _ = (0, _.useCallback)((_) => {
      _(_);
    }, []),
    _ = (_) => {
      _(_);
      let _ = _.query_name ?? ``;
      _(_.queryid?.length == 0 ? `` : _);
    },
    _ = [_, ...(_.data ?? [])],
    _ = () => {
      _(!1);
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(
        _,
        {
          onClick: () => _(!0),
          color: `blue`,
          size: `1`,
          children: _.Localize(`#Workshop_Saved_Queries_Update`),
        },
        `saved_query`,
      ),
      _ &&
        (0, _.jsxs)(_, {
          strTitle: _.Localize(`#Workshop_Saved_Queries_Update`),
          onClose: _,
          children: [
            (0, _.jsxs)(_, {
              maxWidth: `500px`,
              children: [
                (0, _.jsx)(_, {
                  _: `p`,
                  children: _.Localize(
                    `#Workshop_Saved_Queries_Save_Desc_Long`,
                  ),
                }),
                (0, _.jsx)(_, {
                  placeholder: _.Localize(`#Workshop_Saved_Queries_Save_Title`),
                  value: _,
                  onTextChange: _,
                }),
                (0, _.jsx)(_, {
                  _: `p`,
                  children: _.Localize(`#Workshop_Saved_Queries_Save_Desc`),
                }),
                (0, _.jsx)(_, {
                  selectedValue: _,
                  onSelectionChange: _,
                  options: _,
                  getOptionLabel: (_) => _.query_name,
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              justify: `end`,
              gap: `3`,
              align: `center`,
              marginTop: `3`,
              children: [
                (0, _.jsx)(_, {
                  disabled: _.trim().length == 0,
                  onClick: _,
                  children: _.Localize(`#Workshop_Saved_Queries_Save_Btn`),
                }),
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _.Localize(`#Button_Cancel`),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let {
      browseQuery: _,
      results: _,
      renderAppsParameters: _,
      bSavedQueries: _,
    } = _,
    _ = [];
  return (
    _.childpublishedfileid?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            childpublishedfileid: _.childpublishedfileid ?? ``,
            section: _.section ?? `collections`,
          },
          `childpublishedfileid`,
        ),
      ),
    _.search_text?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            search_text: _.search_text ?? ``,
            search_text_target: _.search_text_target,
          },
          `search_text`,
        ),
      ),
    (_.required_tags?.length || _.excluded_tags?.length) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            section: _.section,
            rgRequiredTags: _.required_tags ?? [],
            rgExcludedTags: _.excluded_tags ?? [],
          },
          `tags`,
        ),
      ),
    _.required_flags?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            rgRequiredFlags: _.required_flags ?? [],
          },
          `flags`,
        ),
      ),
    _.required_kv_tags?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            rgRequiredKeyValueTags: _.required_kv_tags ?? [],
          },
          `kv_tags`,
        ),
      ),
    _.special_filter &&
      _.section &&
      _.push(
        (0, _.jsx)(
          _,
          {
            special_filter: _.special_filter,
            section: _.section,
          },
          `special_filter`,
        ),
      ),
    _.push(...(_?.(_) ?? [])),
    _.admin_view && _.push((0, _.jsx)(_, {}, `admin_view`)),
    (_(`#Workshop_DateFilter_TimeCreated`, _.date_range_created) ||
      _(`#Workshop_DateFilter_TimeUpdated`, _.date_range_updated)) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            date_range_created: _.date_range_created,
            date_range_updated: _.date_range_updated,
          },
          `dates`,
        ),
      ),
    _.length != 0 &&
      _.logged_in &&
      (_ &&
        _.push(
          (0, _.jsx)(
            _,
            {
              browseQuery: _,
            },
            `saved_query`,
          ),
        ),
      _.push((0, _.jsx)(_, {}, `clear`))),
    (0, _.jsx)(_, {
      leading: (0, _.jsx)(`div`, {
        className: _,
        children: _.LocalizePlural(
          `#Workshop_NumResults`,
          _.total_count,
          _(_.total_count),
        ),
      }),
      rgParameters: _,
    })
  );
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(_.section, _);
  return !_ || _.length == 0
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              category: _,
              browseQuery: _,
            },
            _.name,
          ),
        ),
      });
}
var _ = [
  `#Workshop_SpecialFilter_None`,
  `#Workshop_SpecialFilter_AcceptedForUse`,
  `#Workshop_SpecialFilter_FavoritedByFriends`,
  `#Workshop_SpecialFilter_CreatedByFriends`,
  `#Workshop_SpecialFilter_CreatedByFollowed`,
  `#Workshop_SpecialFilter_Reported`,
  `#Workshop_SpecialFilter_ParentItems`,
  `#Workshop_SpecialFilter_ParentCollections`,
];
function _(_, _, _) {
  if (_ == 1) {
    if (_ == `merchandise`) return _.Localize(`#Workshop_AcceptedMerch`);
    if (_.accepted_for_game_text && _.accepted_for_game_text.length != 0)
      return _.accepted_for_game_text[0] == `#`
        ? _.Localize(_.accepted_for_game_text)
        : _.accepted_for_game_text;
  }
  let _ = _[_];
  return _.Localize(_);
}
function _(_) {
  let { browseQuery: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useContext)(_),
    _ = (0, _.useContext)(_),
    _ = (_) => {
      let _;
      switch (_) {
        case 1:
          _ = `accepted`;
          break;
        case 6:
          _ = `num_parent_items`;
          break;
        case 7:
          _ = `num_parent_collections`;
          break;
        case 5:
          _ = `reported`;
          break;
      }
      _({
        special_filter: _,
        browse_sort: _,
        page: 1,
      });
    },
    _ = _(_.section ?? `readytouseitems`, _.bHasAppAdminAccess);
  return _.length <= 1
    ? null
    : (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Workshop_SpecialFilter_Desc`),
          }),
          (0, _.jsx)(_, {
            placement: {
              flip: !1,
            },
            selectedValue: _.special_filter ?? 0,
            onSelectionChange: _,
            options: _,
            getOptionLabel: (_) => _(_, _.section ?? `readytouseitems`, _),
          }),
        ],
      });
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useContext)(_),
    { onBrowseHandler: _ } = _(),
    _ = _.bHasAppAdminAccess,
    _ = _.admin_view || !1,
    _ = () => {
      _({
        admin_view: !_,
        page: 1,
      });
    };
  if (!_) return null;
  let _ = _.visible_admin_tags || [];
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(_, {
        onActivate: _,
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: (0, _.default)(_, _ && `mH2s1Tu6wP8-`),
            children: (0, _.jsx)(_, {}),
          }),
          _.Localize(`#Workshop_Admin_View`),
        ],
      }),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            category: _,
            browseQuery: _,
          },
          _.name,
        ),
      ),
    ],
  });
}
function _(_) {
  let _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = (0, _.jsxs)(_, {
      className: _,
      onActivate: () => {
        _(!_);
      },
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        _.Localize(`#Workshop_ApplyFilters`),
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    }),
    _ = (0, _.jsx)(`div`, {
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          className: _,
          "flow-children": `geometric`,
          children: _.children,
        }),
      }),
    });
  return _ != `sm` && _ != `initial`
    ? (0, _.jsx)(`div`, {})
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !_ &&
            (0, _.jsxs)(_.Root, {
              open: _,
              onOpenChange: _,
              interactions: {
                click: !0,
                focus: !0,
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
                  children: _,
                }),
              ],
            }),
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                _,
                _ &&
                  (0, _.jsx)(_, {
                    active: !0,
                    children: (0, _.jsx)(_, {
                      onClose: () => _(!1),
                      children: _,
                    }),
                  }),
              ],
            }),
        ],
      });
}
function _(_) {
  let _ = _();
  return _ == `sm` || _ == `initial`
    ? null
    : (0, _.jsx)(_, {
        className: _,
        "flow-children": `column`,
        navRef: _.navRef,
        children: _.children,
      });
}
var _ = {
  accepted: `#Workshop_BrowseSort_AcceptedTime`,
  toprated: `#Workshop_BrowseSort_TopRated`,
  mostrecent: `#Workshop_BrowseSort_MostRecent`,
  trend: `#Workshop_BrowseSort_MostPopular`,
  reported: `#Workshop_BrowseSort_Reported`,
  torate: `#Workshop_BrowseSort_ToRate`,
  totaluniquesubscribers: `#Workshop_BrowseSort_TotalUniqueSubscribers`,
  totalvotes: `#Workshop_BrowseSort_TotalVotes`,
  mostupvotes: `#Workshop_BrowseSort_MostUpVotes`,
  textsearch: `#Workshop_BrowseSort_SearchRelevance`,
  playtime_trend: `#Workshop_BrowseSort_Playtime`,
  playtime_trend_total: `#Workshop_BrowseSort_PlaytimeTotal`,
  playtime_average_trend: `#Workshop_BrowseSort_PlaytimeAverage`,
  playtime_average_trend_total: `#Workshop_BrowseSort_PlaytimeAverageTotal`,
  playtime_sessions_trend: `#Workshop_BrowseSort_PlaytimeSessions`,
  playtime_sessions_lifetime: `#Workshop_BrowseSort_PlaytimeSessionsTotal`,
  inappropriate_rating: `#Workshop_BrowseSort_Inappropriate`,
  ban_content_check: `#Workshop_BrowseSort_BanContentCheck`,
  lastupdated: `#Workshop_BrowseSort_LastUpdated`,
  num_parent_items: `#Workshop_BrowseSort_NumParentItems`,
  num_parent_collections: `#Workshop_BrowseSort_NumParentCollections`,
  curatedadmin: `#Workshop_BrowseSort_CuratedAdmin`,
  nominee: `#Workshop_BrowseSort_Nominee`,
};
function _(_, _, _) {
  let _ = _[_];
  return _.Localize(_);
}
function _(_) {
  let _ = `#SharedFiles_Browse_Trend_Option_Week`;
  switch (_) {
    case 1:
      _ = `#SharedFiles_Browse_Trend_Option_Today`;
      break;
    case 7:
      _ = `#SharedFiles_Browse_Trend_Option_Week`;
      break;
    case 30:
      _ = `#SharedFiles_Browse_Trend_Option_Month`;
      break;
    case 90:
      _ = `#SharedFiles_Browse_Trend_Option_ThreeMonths`;
      break;
    case 180:
      _ = `#SharedFiles_Browse_Trend_Option_SixMonths`;
      break;
    case 365:
      _ = `#SharedFiles_Browse_Trend_Option_OneYear`;
      break;
    case -1:
      _ = `#SharedFiles_Browse_Trend_Option_AllTime`;
      break;
  }
  return _.Localize(_);
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ = () => {
      _(!_);
    },
    _ = _(_.browse_sort ?? `trend`, _.section ?? `readytouseitems`, _),
    _ = !1;
  switch (_.browse_sort) {
    case `trend`:
    case `playtime_trend`:
    case `playtime_average_trend`:
    case `playtime_sessions_trend`:
    case `mostupvotes`:
      _ = !0;
      break;
  }
  if (_) {
    let _ = _(_.trend_days || 7);
    _ = _.Localize(`#Workshop_BrowseSort_Combined`, _, _);
  }
  let _ = (0, _.jsxs)(_, {
      className: _,
      onActivate: _,
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        _,
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    }),
    _ = (0, _.useMemo)(
      () =>
        (0, _.jsx)(`div`, {
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsxs)(_, {
              className: _,
              "flow-children": `geometric`,
              children: [
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
                _ &&
                  (0, _.jsx)(_, {
                    browseQuery: _,
                  }),
              ],
            }),
          }),
        }),
      [_, _],
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      !_ &&
        (0, _.jsxs)(_.Root, {
          open: _,
          onOpenChange: _,
          interactions: {
            click: !0,
            focus: !0,
          },
          placement: {
            offset: 0,
            initial: `bottom-end`,
            flip: !1,
          },
          children: [
            (0, _.jsx)(_.Anchor, {
              children: _,
            }),
            (0, _.jsx)(_.Positioner, {
              children: _,
            }),
          ],
        }),
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _,
            _ &&
              (0, _.jsx)(_, {
                active: !0,
                children: (0, _.jsx)(_, {
                  onClose: () => _(!1),
                  children: _,
                }),
              }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { browseQuery: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useContext)(_).bHasAppAdminAccess,
    _ = (_) => {
      _(
        _ == -1
          ? {
              browse_sort: `toprated`,
              trend_days: void 0,
              page: 1,
            }
          : {
              trend_days: _,
              page: 1,
            },
      );
    },
    _ = [];
  switch (_.section) {
    case `mtxitems`:
      _ = _ ? [1, 7, 30, 90, 180, 365, -1] : [1];
      break;
    default:
      _ = [1, 7, 30, 90, 180, 365, -1];
      break;
  }
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Workshop_BrowseSort_TimeFrame`),
      }),
      (0, _.jsx)(_, {
        options: _,
        value: _.trend_days || 7,
        onValueChange: _,
        getOptionLabel: _,
      }),
    ],
  });
}
function _(_) {
  let { browseQuery: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useContext)(_),
    _ = (0, _.useContext)(_),
    _ = _.browse_sort || `trend`,
    _ = _.bHasAppAdminAccess,
    _ = _(_.section ?? `readytouseitems`, !1),
    _ = [..._];
  switch (
    (_ && (_ = [..._, ..._]),
    (_ = _.filter(
      (_) => (_ != `textsearch` || _.search_text?.length != 0) && _ != `torate`,
    )),
    _.showplayeditemsfilter ||
      (_ = _.filter(
        (_) =>
          _ != `playtime_trend` &&
          _ != `playtime_average_trend` &&
          _ != `playtime_trend_total` &&
          _ != `playtime_average_trend_total` &&
          _ != `playtime_sessions_trend` &&
          _ != `playtime_sessions_lifetime`,
      )),
    _.special_filter)
  ) {
    case 1:
      _ = _.filter((_) => _ != `toprated` && _ != `trend`);
      break;
    case 6:
    case 7:
    case 5:
      break;
    default:
      _ = _.filter(
        (_) =>
          _ != `accepted` &&
          _ != `num_parent_items` &&
          _ != `num_parent_collections` &&
          _ != `reported`,
      );
      break;
  }
  return (
    (_ = [...new Set(_)]),
    (0, _.jsxs)(_, {
      className: _,
      direction: `column`,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Workshop_BrowseSort_SortOrder`),
        }),
        (0, _.jsx)(_, {
          options: _,
          value: _,
          onValueChange: (_) => {
            _({
              browse_sort: _,
              page: 1,
            });
          },
          getOptionLabel: (_) => {
            let _ = _(_, _.section ?? `readytouseitems`, _);
            return _
              ? _.includes(_)
                ? _
                : _.Localize(`#Workshop_BrowseSort_AdminOption`, _)
              : _;
          },
        }),
      ],
    })
  );
}
export { _, _, _, _ };

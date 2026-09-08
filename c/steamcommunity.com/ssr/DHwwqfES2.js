var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(),
  _ = _({
    Component: _,
    Actions: {
      Browse: _(`c01qDV6jYXQx5fEYHzoJXsB8WNMVfAkX02y3S0Gq5kI`, `Browse`),
    },
  });
function _(_) {
  let { app: _, serverQuery: _ } = _.useLoaderData(),
    _ = (0, _.useContext)(_),
    _ = (0, _.useCallback)((_) => _(_, _), [_]),
    _ = (0, _.useCallback)((_) => {
      switch (_) {
        case `mtxitems`:
          return _.Localize(`#Workshop_Browsing_Mtx_Desc`);
        case `readytouseitems`:
          return _.Localize(`#Workshop_Browsing_ReadyToUse_Desc`);
        case `merchandise`:
          return _.Localize(`#Workshop_Browsing_Merchandise_Desc`);
      }
    }, []),
    _ = (0, _.useCallback)(
      (_) =>
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              browseQuery: _,
            }),
            (0, _.jsx)(_, {
              browseQuery: _,
            }),
            (0, _.jsx)(_, {
              browseQuery: _,
            }),
            (0, _.jsx)(_, {
              date_range_created: _.date_range_created,
              date_range_updated: _.date_range_updated,
            }),
            (0, _.jsx)(_, {
              browseQuery: _,
            }),
            (0, _.jsx)(_, {
              browseQuery: _,
            }),
          ],
        }),
      [],
    ),
    _ = (0, _.useCallback)((_) => {
      let _ = [];
      return (
        (_.appids_required_for_use?.length ||
          _.excluded_appids_required_for_use?.length) &&
          _.push(
            (0, _.jsx)(
              _,
              {
                rgRequiredAppIDs: _.appids_required_for_use ?? [],
                rgExcludedRequiredAppIDs:
                  _.excluded_appids_required_for_use ?? [],
              },
              `appids_required_for_use`,
            ),
          ),
        _.required_apps_preset &&
          _.push(
            (0, _.jsx)(
              _,
              {
                preset: _.required_apps_preset,
              },
              `required_apps_preset`,
            ),
          ),
        _
      );
    }, []);
  return (0, _.jsx)(_, {
    appName: _.name,
    serverQuery: _,
    Browse: _.Actions.Browse,
    GetSectionName: _,
    GetSectionDesc: _,
    renderFilters: _,
    renderHeadingButtons: (_) =>
      (0, _.jsx)(_, {
        browseQuery: _,
      }),
    renderAppsParameters: _,
    bSavedQueries: !0,
  });
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _.appid || 0,
    { preferences: _ } = _(),
    _ = !!_.bOptedInV2;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _.section == `collections` &&
        _.bCanCreateCollection &&
        (0, _.jsx)(_, {
          href: _ ? _.EditItem(_, 2) : _.CreateCollection(_),
          size: `1`,
          children: _.Localize(`#Workshop_CreateCollection`),
        }),
      _.section == `merchandise` &&
        _.bCanCreateMerchandise &&
        (0, _.jsx)(_, {
          href: _ ? _.EditItem(_, 11) : _.CreateMerchandise(_),
          size: `1`,
          children: _.Localize(`#Workshop_CreateMerchandise`),
        }),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    { app: _ } = _.useLoaderData(),
    { data: _ } = _({
      appid: _,
    }),
    _ = _(_.name, _?.name);
  return _?.name
    ? (0, _.jsx)(`div`, {
        children: _,
      })
    : null;
}
function _(_) {
  let { preset: _ } = _,
    { availableRequiredDLC: _, setOwnedApps: _ } = _.useLoaderData(),
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useCallback)(() => {
      _({
        required_apps_preset: void 0,
        page: 1,
      });
    }, [_]),
    _ = (0, _.useMemo)(() => {
      let _ = _.filter(({ appid: _ }) => _ && _.has(_)).map(
          ({ appid: _ }) => _,
        ),
        _ = _.filter(({ appid: _ }) => !_ || !_.has(_)).map(
          ({ appid: _ }) => _,
        ),
        _ = [],
        _ = 0,
        _ = ``;
      switch (_) {
        case 1:
          (_ = _.slice(0, 20)),
            (_ = _.length),
            (_ = _.Localize(`#Workshop_OwnedDLC_None_Filter`));
          break;
        case 2:
          (_ = _.slice(0, 20)),
            (_ = _.length),
            (_ = _.Localize(`#Workshop_OwnedDLC_All_Filter`));
          break;
      }
      return (0, _.jsxs)(_, {
        direction: `column`,
        className: _,
        children: [
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                appid: _,
              },
              _,
            ),
          ),
          _ == 0 &&
            (0, _.jsx)(_.Fragment, {
              children: _,
            }),
          _ != _.length &&
            (0, _.jsx)(_.Fragment, {
              children: _.Localize(
                `#Workshop_OwnedDLC_More_Filter`,
                _(_ - _.length),
              ),
            }),
        ],
      });
    }, [_, _, _]),
    _ = _ == 1;
  return (0, _.jsx)(_, {
    toolTipContent: _,
    direction: `top`,
    nBodyAlignment: 0,
    nDelayShowMS: 250,
    children: (0, _.jsx)(_, {
      onClear: _,
      children: _.Localize(
        _
          ? `#Workshop_IncludeOwnedDLC_Filter`
          : `#Workshop_ExcludeOwnedDLC_Filter`,
      ),
    }),
  });
}
function _(_) {
  let { appid: _, rgRequiredAppIDs: _, rgExcludedRequiredAppIDs: _ } = _,
    { onBrowseHandler: _ } = _(),
    { app: _ } = _.useLoaderData(),
    { data: _ } = _({
      appid: _,
    }),
    _ = _.includes(_),
    _ = (0, _.useCallback)(() => {
      let _ = _?.filter((_) => _ !== _),
        _ = _?.filter((_) => _ !== _);
      _({
        appids_required_for_use: _,
        excluded_appids_required_for_use: _,
        page: 1,
      });
    }, [_, _, _, _]),
    _ = _(_.name, _?.name);
  if (!_?.name) return null;
  let _ = _.Localize(`#Workshop_RequiredDLC_Filter`, _);
  return (0, _.jsx)(_, {
    onClear: _,
    icon: _
      ? (0, _.jsx)(_, {
          className: (0, _.default)(_, _),
        })
      : (0, _.jsx)(_, {
          className: (0, _.default)(_, _),
        }),
    children: _,
  });
}
function _(_) {
  let { rgRequiredAppIDs: _, rgExcludedRequiredAppIDs: _ } = _,
    { availableRequiredDLC: _ } = _.useLoaderData();
  return (0, _.jsx)(_.Fragment, {
    children: _.filter((_) => _.includes(_.appid) || _.includes(_.appid)).map(
      (_) =>
        (0, _.jsx)(
          _,
          {
            appid: _.appid,
            rgRequiredAppIDs: _,
            rgExcludedRequiredAppIDs: _,
          },
          _.appid,
        ),
    ),
  });
}
function _(_) {
  let { browseQuery: _ } = _,
    { workshopNumbers: _ } = _.useLoaderData(),
    { onBrowseHandler: _ } = _();
  if (_.total_incompatible == 0) return null;
  let _ = _.required_flags || [],
    _ = `incompatible`,
    _ = _.findIndex((_) => _ == _) != -1,
    _ = () => {
      let _ = _ ? _.filter((_) => _ !== _) : [..._, _];
      _({
        required_flags: _,
        page: 1,
      });
    };
  switch (_.section) {
    case `merchandise`:
    case `videos`:
      return null;
  }
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Workshop_Flag_Incompatible_Checkbox_Desc`),
      }),
      (0, _.jsxs)(_, {
        onActivate: _,
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: (0, _.default)(_, _ && `mH2s1Tu6wP8-`),
            children: (0, _.jsx)(_, {}),
          }),
          _.Localize(`#Workshop_Flag_Incompatible_Checkbox`),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      appid: _,
      nameFilter: _,
      rgRequiredAppIDs: _,
      rgExcludedRequiredAppIDs: _,
    } = _,
    { onBrowseHandler: _ } = _(),
    { app: _ } = _.useLoaderData(),
    { data: _ } = _({
      appid: _,
    }),
    _ = _?.includes(_),
    _ = _?.includes(_),
    _ = _(),
    _ = () => {
      let _ = _ ? _?.filter((_) => _ !== _) : [..._, _],
        _ = _.filter((_) => _ !== _);
      _({
        appids_required_for_use: _,
        excluded_appids_required_for_use: _,
        required_apps_preset: void 0,
        page: 1,
      });
    },
    _ = () => {
      let _ = _.filter((_) => _ !== _),
        _ = _ ? _.filter((_) => _ !== _) : [..._, _];
      _({
        appids_required_for_use: _,
        excluded_appids_required_for_use: _,
        required_apps_preset: void 0,
        page: 1,
      });
    },
    _ = _(_.name, _?.name);
  return !_ ||
    !_.name?.length ||
    (_.length != 0 && !_.toLocaleLowerCase().includes(_))
    ? null
    : (0, _.jsxs)(_, {
        className: _,
        direction: `row`,
        children: [
          (0, _.jsx)(_, {
            onActivate: _,
            className: (0, _.default)(_, _ && `mH2s1Tu6wP8-`),
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            onActivate: _,
            className: (0, _.default)(_, _ && `mH2s1Tu6wP8-`),
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            toolTipContent: _.name,
            children: (0, _.jsx)(_, {
              className: _,
              focusable: !_,
              onActivate: _,
              children: _,
            }),
          }),
        ],
      });
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    { availableRequiredDLC: _ } = _.useLoaderData(),
    { onBrowseHandler: _ } = _(),
    [_, _] = (0, _.useState)(``),
    _ = _(_.trim().toLocaleLowerCase(), {
      nTimeoutMS: 100,
      nTimeoutExtensionMS: 100,
      nMaxTimeoutExtensions: 100,
    }),
    _ = () => {
      _({
        required_apps_preset: 2,
        appids_required_for_use: void 0,
        excluded_appids_required_for_use: void 0,
      });
    };
  if (_.length == 0 || !_.feature_required_dlc) return null;
  let _ = _.length >= 20;
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Workshop_RequiredDLC_Header`),
      }),
      _.logged_in &&
        (0, _.jsx)(_, {
          gap: `1`,
          width: `100%`,
          children: (0, _.jsx)(_, {
            color: `dull`,
            size: `1`,
            onClick: _,
            children: _.Localize(`#Workshop_RequiredDLC_ExcludeUnowned`),
          }),
        }),
      _ &&
        (0, _.jsx)(_, {
          value: _,
          placeholder: _.Localize(`#Workshop_RequiredDLC_NameFilter`),
          onTextChange: _,
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _.map(({ appid: _, count: _ }) =>
            (0, _.jsx)(
              _,
              {
                appid: _,
                rgRequiredAppIDs: _.appids_required_for_use ?? [],
                rgExcludedRequiredAppIDs:
                  _.excluded_appids_required_for_use ?? [],
                nameFilter: _,
              },
              _,
            ),
          ),
        }),
      }),
    ],
  });
}
export { _ as route };

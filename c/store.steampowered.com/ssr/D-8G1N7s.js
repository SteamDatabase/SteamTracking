var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `xocgTD9wQ3w-`,
  _ = `rmHEjg6CZ-g-`,
  _ = `Vy3rNuKLunU-`,
  _ = `CHs77VjeBtU-`,
  _ = `Nd9ijC9o-tY-`,
  _ = `EEBSJHM2XHw-`,
  _ = `wishlistcategories`;
function _(_, _, _) {
  return [_, _, _, _];
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, !_ || _ === `0` ? `` : _, _),
    queryFn: () => _(_, _, _, _),
    staleTime: 600 * 1e3,
  };
}
async function _(_, _, _, _) {
  if (!_ || (_ != _ && !_)) return [];
  let _ = [];
  if (_) {
    let _ = _.Init(_);
    _.Body().set_steamid(_),
      _.Body().set_share_token(_),
      (_ =
        (await _.GetSharedWishlistCategories(_, _)).Body().toObject()
          .categories ?? []);
  } else {
    let _ = _.Init(_);
    _ =
      (await _.GetWishlistCategories(_, _)).Body().toObject().categories ?? [];
  }
  return _(_);
}
function _(_, _) {
  let _ = _();
  return _(_(_(), _, _, _));
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _.useCallback((_) => new Map(_.map((_) => [_._, _])), []);
  return _({
    ..._(_, _, _, _),
    select: _,
  });
}
function _(_, _) {
  return [`wishlistappidcategories`, _, _];
}
function _(_, _, _) {
  return {
    queryKey: _(_, _),
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_appid(_);
      let _ = await _.GetItemCategories(_, _);
      return _.BSuccess() ? _(_.Body().toObject().categories ?? []) : [];
    },
    staleTime: 600 * 1e3,
  };
}
function _(_, _) {
  return _(_(_(), _, _));
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().set_appid(_.appid),
        _.Body().set_category_name(_.categoryName),
        _.Body().set_categoryid(_.categoryID);
      let _ = await _.AddWishlistItemCategory(_, _),
        _ = {
          eresult: _.GetEResult(),
        };
      return (
        _.BSuccess() &&
          (_.category = {
            _: _.Body().categoryid(),
            name: _.Body().name(),
            cItems: _.Body().item_count(),
            bNotificationOptIn: !!_.Body().notification_opt_in(),
          }),
        _
      );
    },
    onSuccess(_, _) {
      _.invalidateQueries({
        queryKey: [`WishlistSortedFiltered`, _],
        exact: !1,
      }),
        _.invalidateQueries({
          queryKey: [_, _],
          exact: !1,
        }),
        _.invalidateQueries({
          queryKey: _(_, _.appid),
        });
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      return (
        _.Body().set_appid(_.appid),
        _.Body().set_categoryid(_.categoryID),
        (await _.RemoveWishlistItemCategory(_, _)).GetEResult()
      );
    },
    onSuccess(_, _) {
      _.invalidateQueries({
        queryKey: [`WishlistSortedFiltered`, _],
        exact: !1,
      }),
        _.invalidateQueries({
          queryKey: [_, _],
          exact: !1,
        }),
        _.invalidateQueries({
          queryKey: _(_, _.appid),
        });
    },
  });
}
var _ = `wishlist_recent_categories`;
function _(_) {
  return {
    queryKey: [_],
    queryFn: async () => (await _.GetObject(_)) ?? [],
    staleTime: 3600 * 1e3,
  };
}
function _() {
  return _(_(_()));
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = (await _.ensureQueryData(_(_))) ?? [],
        _ = Array.from(new Set([..._.rgCategoryIDs, _])).slice(0, 3);
      return await _.StoreObject(_, _), _;
    },
    onSuccess: async (_) => {
      _.setQueryData([_], _);
    },
  });
}
function _(_) {
  return (
    _.map((_) => ({
      _: _.categoryid,
      name: _.name,
      cItems: _.item_count ?? 0,
      bNotificationOptIn: !!_.notification_opt_in,
    })) ?? []
  ).sort((_, _) =>
    _.cItems === _.cItems ? _.name.localeCompare(_.name) : _.cItems - _.cItems,
  );
}
function _(_) {
  let { data: _ } = _(_);
  return _.useMemo(() => {
    let _ = [
      {
        _: `0`,
        name: _(`#Wishlist_Categories_Suggested_Birthday`),
        cItems: 0,
        bNotificationOptIn: !1,
      },
      {
        _: `0`,
        name: _(`#Wishlist_Categories_Suggested_Recommended`),
        cItems: 0,
        bNotificationOptIn: !1,
      },
      {
        _: `0`,
        name: _(`#Wishlist_Categories_Suggested_Discount`),
        cItems: 0,
        bNotificationOptIn: !1,
      },
    ];
    for (let _ of _ ?? [])
      _ = _.filter(
        (_) => _.name.toLocaleLowerCase() !== _.name.toLocaleLowerCase(),
      );
    return _;
  }, [_]);
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _(_, _, void 0);
  return _({
    mutationFn: async (_) => {
      let _ = await _(_, _);
      if (_ !== 1)
        throw Error(`SetWishlistCategoryNotifications returned EResult ${_}`);
    },
    onMutate: async (_) => {
      await _.cancelQueries({
        queryKey: _,
      }),
        _.setQueryData(_, (_) => {
          if (!_) return _;
          let _ = new Map(_.map((_) => [_._, _]));
          return _.map(
            (_) =>
              _.get(_._) ?? {
                ..._,
              },
          );
        });
    },
    onError: () =>
      _.invalidateQueries({
        queryKey: _,
      }),
  });
}
async function _(_, _) {
  if (_.length === 0) return 8;
  let _ = _.Init(_);
  for (let _ of _) {
    let _ = new _();
    _.set_categoryid(_._),
      _.set_notification_opt_in(_.bNotificationOptIn),
      _.Body().add_categories(_);
  }
  return (await _.SetWishlistCategoryNotifications(_, _)).GetEResult();
}
var _ = _(),
  _ = 30,
  _ = (function (_) {
    return (
      (_[(_.k_ECategoryButtonAction_None = 0)] =
        `k_ECategoryButtonAction_None`),
      (_[(_.k_ECategoryButtonAction_Filter = 1)] =
        `k_ECategoryButtonAction_Filter`),
      (_[(_.k_ECategoryButtonAction_Add = 2)] = `k_ECategoryButtonAction_Add`),
      (_[(_.k_ECategoryButtonAction_Remove = 3)] =
        `k_ECategoryButtonAction_Remove`),
      _
    );
  })({});
function _(_) {
  let {
      rgCategories: _,
      header: _,
      onClick: _,
      eAction: _,
      bMultiline: _,
      bShowEmptyLabel: _,
      bShowAllButton: _,
      containerClassName: _,
      size: _,
      bShowCounts: _,
    } = _,
    _ = _.useRef(null),
    _ = _ !== 3 && _ !== 0,
    _ = [],
    _ = !1;
  for (let _ of _) {
    _.bSelected && (_ = !0);
    let _ = _._ === `0` ? _.name : _._,
      _ = (0, _.jsx)(
        _,
        {
          category: _,
          selected: _ && !!_.bSelected,
          onClick: _ ? () => _(_.name, _._) : void 0,
          eAction: _ ?? 0,
          bShowCount: _,
        },
        _,
      );
    _.push(_);
  }
  let _ = _(`#Wishlist_Controls_Categories_All`);
  return (
    _.useEffect(() => {
      _.current?.Node().BFocusWithin() &&
        _.current.Node().ForceMeasureFocusRing();
    }, [_]),
    (0, _.jsxs)(_, {
      className: (0, _.default)(_, _),
      scrollIntoViewWhenChildFocused: !0,
      children: [
        _ !== null &&
          (0, _.jsx)(`span`, {
            className: `JmLh4Njn6Xg-`,
            children: _ ?? _(`#Wishlist_Controls_Categories_Header`),
          }),
        (0, _.jsxs)(_, {
          className: (0, _.default)(
            _,
            _ && `_46OW7mZHHFo-`,
            _ === `small` && `L5m8ABbykWU-`,
          ),
          "flow-children": _ ? `grid` : `row`,
          focusableIfEmpty: _.length > 0,
          navRef: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                category: {
                  cItems: 0,
                  _: `-1`,
                  name: _,
                  bNotificationOptIn: !1,
                },
                selected: !_,
                onClick: () => _ && _(_, `-1`),
                onOKActionDescription: _(
                  `#Wishlist_Gamepad_Filter_Clear_Category`,
                ),
              }),
            _,
            !_.length &&
              _ &&
              (0, _.jsx)(`div`, {
                className: `JmLh4Njn6Xg-`,
                children: _(`#Wishlist_Categories_None`),
              }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let {
      category: _,
      selected: _,
      className: _,
      onOKActionDescription: _,
      onClick: _,
      eAction: _,
      bShowCount: _,
    } = _,
    _ = _ === 3,
    _ = _ === 1,
    _ = _.name.length >= _,
    _ = _;
  _ && !_
    ? (_ = _(`#Wishlist_Gamepad_Filter_Category`))
    : _ === 2 && !_
      ? (_ = _(`#Wishlist_Gamepad_Add_Category`))
      : _ === 3 && !_ && (_ = _(`#Wishlist_Gamepad_Removecategory`));
  let _ = {
      onOKActionDescription: _,
      onOKButton: () => _ && _(),
      focusClassName: _,
    },
    _ = !!_,
    _;
  return (
    _
      ? (_ = _.name)
      : _ && _
        ? (_ = _(`#Wishlist_Controls_Categories_Remove_Tooltip`))
        : _ && _ && (_ = _(`#Wishlist_Controls_Categories_Filter_Tooltip`)),
    (0, _.jsx)(_, {
      toolTipContent: _,
      usePointerEvents: !0,
      children: (0, _.jsxs)(_, {
        className: (0, _.default)(
          _,
          _ && `hVIpsPsRhsA-`,
          _ && `_8hEc07LCoLU-`,
          !_ && `UEN4zIBtlPk-`,
          _,
        ),
        onClick: _,
        ..._,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _.name,
          }),
          _ &&
            _.cItems > 0 &&
            (0, _.jsxs)(`span`, {
              children: [`(`, _.cItems, `)`],
            }),
          _ && (0, _.jsx)(_, {}),
        ],
      }),
    })
  );
}
function _(_) {
  let { categoryCount: _, onClick: _, bSimulateHover: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _(`#Wishlist_Controls_Categories_Manage`),
    usePointerEvents: !0,
    children: (0, _.jsx)(_, {
      className: (0, _.default)(_, _, _ && `Nd9ijC9o-tY-`),
      onClick: _,
      children: _ > 0 ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
    }),
  });
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _ };

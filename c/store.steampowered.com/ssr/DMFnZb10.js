async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_steamid(_);
  let _ = await _.GetWishlist(_, _);
  if (!_.BSuccess()) throw `Error loading wishlist: ${_.GetErrorMessage()}`;
  return {
    steamid: _,
    items: _.Body().toObject().items || [],
  };
}
function _(_, _) {
  return {
    queryKey: [`wishlist`, _],
    queryFn: () => _(_, _),
    staleTime: 600 * 1e3,
    enabled: !!_ && _ != `0`,
  };
}
function _(_) {
  return _(_(_(), _));
}
async function _(_, _, _) {
  if (_) return 0;
  let _ = await _.GetWishlistItemCount(_, {
    steamid: _,
  });
  if (!_.BSuccess())
    throw `Error loading wishlist item count: ${_.GetErrorMessage()}`;
  return _.Body().toObject().count;
}
function _(_, _) {
  return [`wishlistitemcount`, _, _];
}
function _(_, _, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => _(_, _, _),
    staleTime: 600 * 1e3,
    enabled: !!_ && _ != `0`,
  };
}
function _(_, _) {
  return _(_(_(), _, _));
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_appid(_);
  let _ = await _.RemoveFromWishlist(_, _);
  if (!_.BSuccess()) throw _.GetErrorMessage();
  return _.Body().wishlist_count();
}
function _(_, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => await _(_, _),
    onMutate: async () => {
      await _.cancelQueries({
        queryKey: [`wishlist`, _],
        exact: !1,
      }),
        await _.cancelQueries({
          queryKey: [`WishlistSortedFiltered`, _],
          exact: !1,
        });
      let _ = (_) =>
        _ && {
          ..._,
          items: _.items.filter((_) => _.appid != _),
        };
      _.setQueriesData(
        {
          queryKey: [`wishlist`, _],
          exact: !1,
        },
        _,
      ),
        _.setQueriesData(
          {
            queryKey: [`WishlistSortedFiltered`, _],
            exact: !1,
          },
          _,
        );
    },
    onSuccess(_) {
      _(_, _, _);
    },
    onError() {
      _.invalidateQueries({
        queryKey: [`wishlist`, _],
        exact: !1,
      }),
        _.invalidateQueries({
          queryKey: [`WishlistSortedFiltered`, _],
          exact: !1,
        });
    },
  });
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_appid(_);
  let _ = await _.AddToWishlist(_, _);
  if (!_.BSuccess()) throw _.GetErrorMessage();
  return _.Body().wishlist_count();
}
function _(_, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => await _(_, _),
    onSuccess(_) {
      _(_, _, _),
        _.setQueriesData(
          {
            queryKey: [`wishlist`, _],
            exact: !1,
          },
          (_) =>
            _ && {
              ..._,
              items: [
                ..._.items,
                {
                  appid: _,
                  priority: _,
                  date_added: Math.floor(Date.now() / 1e3),
                },
              ],
            },
        ),
        _.invalidateQueries({
          queryKey: [`WishlistSortedFiltered`, _],
          exact: !1,
        });
    },
  });
}
function _(_, _, _) {
  _.setQueryData(_(_), () => _);
}
export { _, _, _, _ };

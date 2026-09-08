var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _({
    IsLoaded: () => _,
    ItemHeight: () => _,
    ItemWidth: () => _,
    PreviewImage: () => _,
    PreviewImageLink: () => _,
    aspectratio_16x9: () => _,
    aspectratio_4x3: () => _,
    aspectratio_collection_background_image: () => _,
    aspectratio_square: () => _,
    default: () => _,
  }),
  _ = `288px`,
  _ = `288px`,
  _ = `_7-YnTYBrWGM-`,
  _ = `tK5agp5sRy8-`,
  _ = `CZIkT3axIG8-`,
  _ = `QZ-BCWkxxn0-`,
  _ = `P-hrWw6KqUE-`,
  _ = `kUR8PF3keI4-`,
  _ = `sSHup54TcdY-`,
  _ = {
    ItemWidth: _,
    ItemHeight: _,
    PreviewImage: _,
    PreviewImageLink: _,
    IsLoaded: _,
    aspectratio_square: _,
    aspectratio_16x9: _,
    aspectratio_4x3: _,
    aspectratio_collection_background_image: _,
  },
  _ = _();
function _(_, _) {
  switch (_(_, _)) {
    case `square`:
    default:
      return 1;
    case `16x9`:
      return 16 / 9;
    case `4x3`:
      return 4 / 3;
  }
}
function _(_, _) {
  switch (_) {
    case 1:
      if (_.aspect_ratio_curated_items?.length)
        return _.aspect_ratio_curated_items;
      break;
    case 0:
      if (_.aspect_ratio_readytouse_items?.length)
        return _.aspect_ratio_readytouse_items;
      break;
    case 2:
      return `square`;
    case 4:
      return `4x3`;
  }
  return _.aspect_ratio?.length
    ? _.aspect_ratio
    : _.usesquarethumbnails
      ? `square`
      : `4x3`;
}
function _(_) {
  let { details: _, forcedWidth: _, className: _, ..._ } = _,
    _ = (0, _.useContext)(_),
    { setQuickViewItem: _ } = _() || {},
    _ = _ ?? 288,
    _ = parseInt(_),
    _ = _(_, _.file_type),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useRef)(null);
  switch (
    ((0, _.useEffect)(() => {
      _.current?.complete &&
        (_(),
        (_.current.naturalHeight == 0 || _.current.naturalWidth == 0) && _());
    }, [_, _]),
    _)
  ) {
    case `square`:
      _ = _;
      break;
    case `16x9`:
      _ = (_ * 9) / 16;
      break;
    case `4x3`:
      _ = (_ * 3) / 4;
      break;
  }
  let _ = _.preview_url,
    _ = !_ || _ ? _() : `${_}${_(_, _, !_)}`;
  return (0, _.jsx)(`div`, {
    ..._,
    className: (0, _.default)(
      _,
      _,
      _[`aspectratio_${_}`],
      `aspectratio_${_}`,
      _ && `CZIkT3axIG8-`,
    ),
    children: (0, _.jsx)(_, {
      autoFocus: !1,
      className: _,
      _: _.strItemURL ?? _.Details(_.publishedfileid),
      onOKActionDescription: _.Localize(
        `#Workshop_GamepadUIAction_ViewDetails`,
      ),
      onSecondaryActionDescription: _.Localize(
        `#Workshop_GamepadUIAction_QuickView`,
      ),
      onSecondaryButton: _ ? () => _(_.publishedfileid) : void 0,
      children: (0, _.jsx)(_, {
        ref: _,
        src: _,
        alt: _.title ?? ``,
        onLoad: _,
        onError: _,
        loading: `lazy`,
      }),
    }),
  });
}
export { _, _ };

var _ = _(_(), 1),
  _ = _(),
  _ = _({
    Component: _,
  });
function _() {
  let _ = _.useLoaderData(),
    [_, _] = (0, _.useState)(!1);
  if (!_.success)
    return (0, _.jsx)(_, {
      debug: _.debug,
    });
  let { success: _, bCommodity: _, bUnplayedAppWarning: _, ..._ } = _;
  return _ && !_
    ? (0, _.jsx)(_, {
        onDismiss: () => _(!0),
      })
    : (0, _.jsx)(
        _ ? _ : _,
        {
          ..._,
        },
        _.initialFallbackBucketID,
      );
}
function _(_) {
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `2`,
      paddingX: `5`,
      paddingY: `6`,
      radius: `lg`,
      background: `dull-7`,
      align: `center`,
      justify: `center`,
      children: [
        (0, _.jsx)(_, {
          size: `6`,
          align: `center`,
          children: _.Localize(`#Error_LoadingContent`),
        }),
        (0, _.jsx)(_, {
          align: `center`,
          children: _.Localize(`#Error_LoadingMarketItem`),
        }),
        _.debug &&
          (0, _.jsx)(_, {
            align: `center`,
            color: `text-red`,
            children: _.debug,
          }),
      ],
    }),
  });
}
function _(_) {
  let { onDismiss: _ } = _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      marginTop: `3`,
      children: (0, _.jsxs)(_, {
        gap: `2`,
        padding: `4`,
        direction: `column`,
        background: `red-3`,
        border: `2px solid var(--color-red-7)`,
        radius: `sm`,
        align: `center`,
        children: [
          (0, _.jsx)(_, {
            size: `5`,
            align: `center`,
            children: _.Localize(`#Market_AppUnplayedAndUnvetted`),
          }),
          (0, _.jsx)(_, {
            onClick: _,
            size: `4`,
            align: `center`,
            color: `text-body`,
            children: _.Localize(`#Market_AppUnplayedAndUnvetted_Dismiss`),
          }),
        ],
      }),
    }),
  });
}
export { _ as route };

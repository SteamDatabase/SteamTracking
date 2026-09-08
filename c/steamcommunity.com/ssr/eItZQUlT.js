_();
var _ = _(),
  _ = _({
    loadBeforeChildren: !0,
    Component: _,
  });
function _(_) {
  return _.useLoaderData()
    ? (0, _.jsx)(_.Fragment, {
        children: _.children,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          direction: `column`,
          background: `dull-6`,
          radius: `md`,
          padding: `5`,
          align: `center`,
          justify: `center`,
          children: [
            (0, _.jsx)(_, {
              align: `center`,
              marginBottom: `2`,
              children: _.Localize(`#Error_Sorry`),
            }),
            (0, _.jsx)(_, {
              size: `2`,
              children: _.Localize(`#Error_Encountered`),
            }),
            (0, _.jsx)(_, {
              color: `accent-8`,
              _: `div`,
              marginTop: `4`,
              size: `4`,
              children: _.Localize(`#Error_TooManyRequests_Description`),
            }),
          ],
        }),
      });
}
export { _ as route };

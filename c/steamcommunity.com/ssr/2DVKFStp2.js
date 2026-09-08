_();
var _ = _();
function _(_) {
  let {
      hideApp: _,
      result: {
        asset_description: _ = {},
        cSellOrders: _,
        strMinSellSubtotal: _,
        app: _,
      },
      grouping: _,
      ..._
    } = _,
    {
      name: _ = ``,
      market_name: _,
      market_bucket_group_name: _,
      type: _ = ``,
    } = _,
    _ = _ || _,
    _ = !_(`sm`);
  _ === 1 && _ && (_ = _);
  let _ = _(_),
    _;
  return (
    _(_) && (_ = 72),
    (0, _.jsxs)(_, {
      ..._,
      children: [
        (0, _.jsxs)(_.Header, {
          children: [
            (0, _.jsx)(_.ItemColor, {
              color: _,
            }),
            (0, _.jsx)(_.Subtitle, {
              children: _,
            }),
            (0, _.jsx)(_.Title, {
              children: _,
            }),
          ],
        }),
        (0, _.jsx)(_.Body, {
          children: (0, _.jsx)(_.PrimaryImage, {
            src: _(_),
            size: _,
          }),
        }),
        (0, _.jsxs)(_.Footer, {
          children: [
            !_ &&
              (0, _.jsx)(_.AppInfo, {
                name: _.strName,
                icon: _.strIcon,
              }),
            _
              ? (0, _.jsx)(_.Attribute, {
                  labelToken: `#Search_ListingQuantity_Abbreviation`,
                  value: Intl.NumberFormat().format(_),
                })
              : (0, _.jsx)(_.Attribute, {
                  labelToken: `#Search_ListingQuantity`,
                  value: Intl.NumberFormat().format(_),
                }),
            (0, _.jsx)(_.Action, {
              children: (0, _.jsx)(_, {
                contrast: `subtitle`,
                children: _.Localize(`#Bucket_PriceFrom`, _),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  if (_.result.asset_description.appid === 753) {
    let _ = _.result.asset_description.name;
    return _ && _[0] === `:` && _[_.length - 1] === `:`;
  }
  return !1;
}
export { _ };
